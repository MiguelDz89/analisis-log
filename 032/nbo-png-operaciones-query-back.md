# nbo-png-operaciones-query-back

Código fuente de producción y configuraciones. Captura local: 28/10/2026.

Incluye 218 archivos Java y 16 archivos de configuración, recursos y compilación/despliegue.

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
17. `src/main/java/com/nubo/operations/query/api/OperationsQueryApiApplication.java`
18. `src/main/java/com/nubo/operations/query/api/application/annotations/ValidBigDecimal.java`
19. `src/main/java/com/nubo/operations/query/api/application/config/AccountSourceTypeEnumConverter.java`
20. `src/main/java/com/nubo/operations/query/api/application/config/SwaggerConfig.java`
21. `src/main/java/com/nubo/operations/query/api/application/config/ValidBigDecimalConfig.java`
22. `src/main/java/com/nubo/operations/query/api/application/config/WebConfig.java`
23. `src/main/java/com/nubo/operations/query/api/application/context/GlobalContext.java`
24. `src/main/java/com/nubo/operations/query/api/application/database/NamingStrategyConfig.java`
25. `src/main/java/com/nubo/operations/query/api/application/database/UpperNamingConfig.java`
26. `src/main/java/com/nubo/operations/query/api/application/filters/GlobalFilter.java`
27. `src/main/java/com/nubo/operations/query/api/application/interceptors/GlobalInterceptor.java`
28. `src/main/java/com/nubo/operations/query/api/application/properties/PropertiesConfig.java`
29. `src/main/java/com/nubo/operations/query/api/application/properties/PropertiesContext.java`
30. `src/main/java/com/nubo/operations/query/api/application/util/ApplicationUtils.java`
31. `src/main/java/com/nubo/operations/query/api/application/util/RestClientUtils.java`
32. `src/main/java/com/nubo/operations/query/api/client/operation/calculation/models/dto/request/SettleAccountsInDto.java`
33. `src/main/java/com/nubo/operations/query/api/client/operation/calculation/models/dto/response/SettleAccountsOutDto.java`
34. `src/main/java/com/nubo/operations/query/api/client/operation/calculation/service/OperationCalculationClient.java`
35. `src/main/java/com/nubo/operations/query/api/client/operation/calculation/service/impl/OperationCalculationClientImpl.java`
36. `src/main/java/com/nubo/operations/query/api/client/operation/rules/models/dto/request/StatusAllowedOptionsInDto.java`
37. `src/main/java/com/nubo/operations/query/api/client/operation/rules/models/dto/request/StatusUpdateTradeInDto.java`
38. `src/main/java/com/nubo/operations/query/api/client/operation/rules/models/dto/response/ActionOutDto.java`
39. `src/main/java/com/nubo/operations/query/api/client/operation/rules/models/dto/response/BusinessRuleOutDto.java`
40. `src/main/java/com/nubo/operations/query/api/client/operation/rules/models/dto/response/StatusAllowedOptionsOutDto.java`
41. `src/main/java/com/nubo/operations/query/api/client/operation/rules/models/dto/response/StatusClientOutDto.java`
42. `src/main/java/com/nubo/operations/query/api/client/operation/rules/models/dto/response/StatusUpdateTradeOutDto.java`
43. `src/main/java/com/nubo/operations/query/api/client/operation/rules/service/OperationBusinessRuleClient.java`
44. `src/main/java/com/nubo/operations/query/api/client/operation/rules/service/impl/OperationBusinessRuleClientImpl.java`
45. `src/main/java/com/nubo/operations/query/api/exception/ClientException.java`
46. `src/main/java/com/nubo/operations/query/api/exception/ServiceException.java`
47. `src/main/java/com/nubo/operations/query/api/exception/error/ErrorCode.java`
48. `src/main/java/com/nubo/operations/query/api/exception/error/ErrorResponse.java`
49. `src/main/java/com/nubo/operations/query/api/exception/error/ErrorValidation.java`
50. `src/main/java/com/nubo/operations/query/api/exception/handler/GlobalExceptionHandler.java`
51. `src/main/java/com/nubo/operations/query/api/helpers/DateUtil.java`
52. `src/main/java/com/nubo/operations/query/api/helpers/MapperPageUtil.java`
53. `src/main/java/com/nubo/operations/query/api/helpers/MapperTradeDynamicSearch.java`
54. `src/main/java/com/nubo/operations/query/api/helpers/MapperUtil.java`
55. `src/main/java/com/nubo/operations/query/api/helpers/PackageCustodianDynamicSearchMapper.java`
56. `src/main/java/com/nubo/operations/query/api/helpers/PackageCustodianMapper.java`
57. `src/main/java/com/nubo/operations/query/api/helpers/PackageCustodianSpecificationBuilder.java`
58. `src/main/java/com/nubo/operations/query/api/helpers/PackageCustodianSpecificationFactory.java`
59. `src/main/java/com/nubo/operations/query/api/helpers/QueryFilterBuilder.java`
60. `src/main/java/com/nubo/operations/query/api/helpers/RedisMapperUtils.java`
61. `src/main/java/com/nubo/operations/query/api/helpers/SettlementCorrectionDynamicSearchMapper.java`
62. `src/main/java/com/nubo/operations/query/api/helpers/SettlementCorrectionSpecificationBuilder.java`
63. `src/main/java/com/nubo/operations/query/api/helpers/SettlementCorrectionSpecificationFactory.java`
64. `src/main/java/com/nubo/operations/query/api/helpers/SettlementDynamicSearchMapper.java`
65. `src/main/java/com/nubo/operations/query/api/helpers/SettlementRedisMapper.java`
66. `src/main/java/com/nubo/operations/query/api/helpers/SettlementSearchMapper.java`
67. `src/main/java/com/nubo/operations/query/api/helpers/SettlementSpecificationBuilder.java`
68. `src/main/java/com/nubo/operations/query/api/helpers/SettlementSpecificationFactory.java`
69. `src/main/java/com/nubo/operations/query/api/helpers/SortHelper.java`
70. `src/main/java/com/nubo/operations/query/api/helpers/TradeRedisMapper.java`
71. `src/main/java/com/nubo/operations/query/api/helpers/TradeSpecificationBuilder.java`
72. `src/main/java/com/nubo/operations/query/api/helpers/TradeSpecificationFactory.java`
73. `src/main/java/com/nubo/operations/query/api/models/domain/DynamicFilter.java`
74. `src/main/java/com/nubo/operations/query/api/models/domain/PackageCustodianParams.java`
75. `src/main/java/com/nubo/operations/query/api/models/domain/SettlementParams.java`
76. `src/main/java/com/nubo/operations/query/api/models/domain/TradeParams.java`
77. `src/main/java/com/nubo/operations/query/api/models/domain/UserNuboData.java`
78. `src/main/java/com/nubo/operations/query/api/models/dto/request/AssignmentClosureInDto.java`
79. `src/main/java/com/nubo/operations/query/api/models/dto/request/CalculationInDto.java`
80. `src/main/java/com/nubo/operations/query/api/models/dto/request/CalculationIvaInDto.java`
81. `src/main/java/com/nubo/operations/query/api/models/dto/request/TradeParamsDynamicInDto.java`
82. `src/main/java/com/nubo/operations/query/api/models/dto/request/TradeParamsInDto.java`
83. `src/main/java/com/nubo/operations/query/api/models/dto/request/TradeSimulationInDto.java`
84. `src/main/java/com/nubo/operations/query/api/models/dto/response/AllTradeOutDto.java`
85. `src/main/java/com/nubo/operations/query/api/models/dto/response/AssignmentClosureOutDto.java`
86. `src/main/java/com/nubo/operations/query/api/models/dto/response/BankOutDto.java`
87. `src/main/java/com/nubo/operations/query/api/models/dto/response/CalculationOutDto.java`
88. `src/main/java/com/nubo/operations/query/api/models/dto/response/CalculationTotalAmountOutDto.java`
89. `src/main/java/com/nubo/operations/query/api/models/dto/response/CityOutDto.java`
90. `src/main/java/com/nubo/operations/query/api/models/dto/response/ClassOutDto.java`
91. `src/main/java/com/nubo/operations/query/api/models/dto/response/CorrectionDropdownDataDto.java`
92. `src/main/java/com/nubo/operations/query/api/models/dto/response/CountryOutDto.java`
93. `src/main/java/com/nubo/operations/query/api/models/dto/response/CurrencyOutDto.java`
94. `src/main/java/com/nubo/operations/query/api/models/dto/response/DepartmentOutDto.java`
95. `src/main/java/com/nubo/operations/query/api/models/dto/response/DepositoryOutDto.java`
96. `src/main/java/com/nubo/operations/query/api/models/dto/response/DirectDepositoryOutDto.java`
97. `src/main/java/com/nubo/operations/query/api/models/dto/response/FractionAccountOutDto.java`
98. `src/main/java/com/nubo/operations/query/api/models/dto/response/GicsOutDto.java`
99. `src/main/java/com/nubo/operations/query/api/models/dto/response/IdentificationTypeOutDto.java`
100. `src/main/java/com/nubo/operations/query/api/models/dto/response/InvestorAccountOutDto.java`
101. `src/main/java/com/nubo/operations/query/api/models/dto/response/InvestorOutDto.java`
102. `src/main/java/com/nubo/operations/query/api/models/dto/response/MarketOutDto.java`
103. `src/main/java/com/nubo/operations/query/api/models/dto/response/MilaDepositoryDto.java`
104. `src/main/java/com/nubo/operations/query/api/models/dto/response/PackageCustodianDetailOutDto.java`
105. `src/main/java/com/nubo/operations/query/api/models/dto/response/PackageCustodianDetailResponseOutDto.java`
106. `src/main/java/com/nubo/operations/query/api/models/dto/response/PackageCustodianDetailTotalsOutDto.java`
107. `src/main/java/com/nubo/operations/query/api/models/dto/response/PackageCustodianOutDto.java`
108. `src/main/java/com/nubo/operations/query/api/models/dto/response/PageResponseOutDto.java`
109. `src/main/java/com/nubo/operations/query/api/models/dto/response/ParticipantAccountOutDto.java`
110. `src/main/java/com/nubo/operations/query/api/models/dto/response/ParticipantBankAccountOutDto.java`
111. `src/main/java/com/nubo/operations/query/api/models/dto/response/ParticipantOutDto.java`
112. `src/main/java/com/nubo/operations/query/api/models/dto/response/ParticipantShortOutDto.java`
113. `src/main/java/com/nubo/operations/query/api/models/dto/response/ReassignmentCorrectionOutDto.java`
114. `src/main/java/com/nubo/operations/query/api/models/dto/response/RuleDetailOutDto.java`
115. `src/main/java/com/nubo/operations/query/api/models/dto/response/SecurityTitleOutDto.java`
116. `src/main/java/com/nubo/operations/query/api/models/dto/response/SettlementOutDto.java`
117. `src/main/java/com/nubo/operations/query/api/models/dto/response/SettlementSearchOutDto.java`
118. `src/main/java/com/nubo/operations/query/api/models/dto/response/SideOutDto.java`
119. `src/main/java/com/nubo/operations/query/api/models/dto/response/StatusOutDto.java`
120. `src/main/java/com/nubo/operations/query/api/models/dto/response/TaxStatusOutDto.java`
121. `src/main/java/com/nubo/operations/query/api/models/dto/response/TradeCustodianOutDto.java`
122. `src/main/java/com/nubo/operations/query/api/models/dto/response/TradeEquityOutDto.java`
123. `src/main/java/com/nubo/operations/query/api/models/dto/response/TradeOutDto.java`
124. `src/main/java/com/nubo/operations/query/api/models/dto/response/TradeShortOutDto.java`
125. `src/main/java/com/nubo/operations/query/api/models/dto/response/TradeSimulationOutDto.java`
126. `src/main/java/com/nubo/operations/query/api/models/dto/response/TradeValidationOutDto.java`
127. `src/main/java/com/nubo/operations/query/api/models/dto/response/TradingSessionOutDto.java`
128. `src/main/java/com/nubo/operations/query/api/models/dto/response/TradingSystemOutDto.java`
129. `src/main/java/com/nubo/operations/query/api/models/dto/response/TypeOutDto.java`
130. `src/main/java/com/nubo/operations/query/api/models/entity/CityEntity.java`
131. `src/main/java/com/nubo/operations/query/api/models/entity/ClassEntity.java`
132. `src/main/java/com/nubo/operations/query/api/models/entity/CountryEntity.java`
133. `src/main/java/com/nubo/operations/query/api/models/entity/CurrencyEntity.java`
134. `src/main/java/com/nubo/operations/query/api/models/entity/DepartmentEntity.java`
135. `src/main/java/com/nubo/operations/query/api/models/entity/DepositoryEntity.java`
136. `src/main/java/com/nubo/operations/query/api/models/entity/DirectDepositoryEntity.java`
137. `src/main/java/com/nubo/operations/query/api/models/entity/GicsEntity.java`
138. `src/main/java/com/nubo/operations/query/api/models/entity/HolidayEntity.java`
139. `src/main/java/com/nubo/operations/query/api/models/entity/IdentificationTypeEntity.java`
140. `src/main/java/com/nubo/operations/query/api/models/entity/InvestorAccountEntity.java`
141. `src/main/java/com/nubo/operations/query/api/models/entity/InvestorEntity.java`
142. `src/main/java/com/nubo/operations/query/api/models/entity/IssuerEntity.java`
143. `src/main/java/com/nubo/operations/query/api/models/entity/MarketEntity.java`
144. `src/main/java/com/nubo/operations/query/api/models/entity/MilaDepositoryEntity.java`
145. `src/main/java/com/nubo/operations/query/api/models/entity/PackageCustodianEntity.java`
146. `src/main/java/com/nubo/operations/query/api/models/entity/PackageCustodianKey.java`
147. `src/main/java/com/nubo/operations/query/api/models/entity/PackageDetailEntity.java`
148. `src/main/java/com/nubo/operations/query/api/models/entity/ParticipantAccountEntity.java`
149. `src/main/java/com/nubo/operations/query/api/models/entity/ParticipantBankAccountEntity.java`
150. `src/main/java/com/nubo/operations/query/api/models/entity/ParticipantEntity.java`
151. `src/main/java/com/nubo/operations/query/api/models/entity/SecurityTitleEntity.java`
152. `src/main/java/com/nubo/operations/query/api/models/entity/SettlementCorrectionEntity.java`
153. `src/main/java/com/nubo/operations/query/api/models/entity/SettlementEntity.java`
154. `src/main/java/com/nubo/operations/query/api/models/entity/SettlementKey.java`
155. `src/main/java/com/nubo/operations/query/api/models/entity/SideEntity.java`
156. `src/main/java/com/nubo/operations/query/api/models/entity/StatusEntity.java`
157. `src/main/java/com/nubo/operations/query/api/models/entity/TaxStatusEntity.java`
158. `src/main/java/com/nubo/operations/query/api/models/entity/TaxesEntity.java`
159. `src/main/java/com/nubo/operations/query/api/models/entity/TradeEntity.java`
160. `src/main/java/com/nubo/operations/query/api/models/entity/TradeEquityEntity.java`
161. `src/main/java/com/nubo/operations/query/api/models/entity/TradingSessionEntity.java`
162. `src/main/java/com/nubo/operations/query/api/models/entity/TradingSystemEntity.java`
163. `src/main/java/com/nubo/operations/query/api/models/entity/TypeEntity.java`
164. `src/main/java/com/nubo/operations/query/api/models/entity/UserNuboEntity.java`
165. `src/main/java/com/nubo/operations/query/api/models/enums/AccountSourceTypeEnum.java`
166. `src/main/java/com/nubo/operations/query/api/models/enums/BusinessRuleEnum.java`
167. `src/main/java/com/nubo/operations/query/api/models/enums/CorrectionStatusEnum.java`
168. `src/main/java/com/nubo/operations/query/api/models/enums/CorrectionTypeEnum.java`
169. `src/main/java/com/nubo/operations/query/api/models/enums/CountryCodeEnum.java`
170. `src/main/java/com/nubo/operations/query/api/models/enums/FiltersEnum.java`
171. `src/main/java/com/nubo/operations/query/api/models/enums/MarketEnum.java`
172. `src/main/java/com/nubo/operations/query/api/models/enums/OperationTypeEnum.java`
173. `src/main/java/com/nubo/operations/query/api/models/enums/PropertiesEnum.java`
174. `src/main/java/com/nubo/operations/query/api/models/enums/ReassignmentTypeEnum.java`
175. `src/main/java/com/nubo/operations/query/api/models/enums/SearchOperationEnum.java`
176. `src/main/java/com/nubo/operations/query/api/models/enums/SideEnum.java`
177. `src/main/java/com/nubo/operations/query/api/models/enums/StatusEnum.java`
178. `src/main/java/com/nubo/operations/query/api/models/enums/TaxesEnum.java`
179. `src/main/java/com/nubo/operations/query/api/models/enums/TypeEnum.java`
180. `src/main/java/com/nubo/operations/query/api/models/enums/UserTypeEnum.java`
181. `src/main/java/com/nubo/operations/query/api/models/enums/VersionApiEnum.java`
182. `src/main/java/com/nubo/operations/query/api/repository/CountryRepository.java`
183. `src/main/java/com/nubo/operations/query/api/repository/HolidayRepository.java`
184. `src/main/java/com/nubo/operations/query/api/repository/InvestorAccountRepository.java`
185. `src/main/java/com/nubo/operations/query/api/repository/InvestorRepository.java`
186. `src/main/java/com/nubo/operations/query/api/repository/PackageCustodianDetailProjection.java`
187. `src/main/java/com/nubo/operations/query/api/repository/PackageCustodianDetailTotalsProjection.java`
188. `src/main/java/com/nubo/operations/query/api/repository/PackageCustodianRepository.java`
189. `src/main/java/com/nubo/operations/query/api/repository/ParticipantAccountRepository.java`
190. `src/main/java/com/nubo/operations/query/api/repository/ParticipantBankAccountRepository.java`
191. `src/main/java/com/nubo/operations/query/api/repository/ParticipantRepository.java`
192. `src/main/java/com/nubo/operations/query/api/repository/SettlementCorrectionsRepository.java`
193. `src/main/java/com/nubo/operations/query/api/repository/SettlementRepository.java`
194. `src/main/java/com/nubo/operations/query/api/repository/SideRepository.java`
195. `src/main/java/com/nubo/operations/query/api/repository/StatusRepository.java`
196. `src/main/java/com/nubo/operations/query/api/repository/TaxesRepository.java`
197. `src/main/java/com/nubo/operations/query/api/repository/TradeEquityRepository.java`
198. `src/main/java/com/nubo/operations/query/api/repository/TradeRepository.java`
199. `src/main/java/com/nubo/operations/query/api/repository/TypeRepository.java`
200. `src/main/java/com/nubo/operations/query/api/repository/UserNuboRepository.java`
201. `src/main/java/com/nubo/operations/query/api/service/AllTradeService.java`
202. `src/main/java/com/nubo/operations/query/api/service/AssignmentClosureService.java`
203. `src/main/java/com/nubo/operations/query/api/service/CalculationCountedService.java`
204. `src/main/java/com/nubo/operations/query/api/service/PackageCustodianService.java`
205. `src/main/java/com/nubo/operations/query/api/service/SettlementCorrectionService.java`
206. `src/main/java/com/nubo/operations/query/api/service/SettlementRedisService.java`
207. `src/main/java/com/nubo/operations/query/api/service/SettlementService.java`
208. `src/main/java/com/nubo/operations/query/api/service/TestSimulationService.java`
209. `src/main/java/com/nubo/operations/query/api/service/TradeEquityService.java`
210. `src/main/java/com/nubo/operations/query/api/service/TradeRedisService.java`
211. `src/main/java/com/nubo/operations/query/api/service/TradeService.java`
212. `src/main/java/com/nubo/operations/query/api/service/ValidateCountedOperationService.java`
213. `src/main/java/com/nubo/operations/query/api/service/impl/AllTradeServiceImpl.java`
214. `src/main/java/com/nubo/operations/query/api/service/impl/AssignmentClosureServiceImpl.java`
215. `src/main/java/com/nubo/operations/query/api/service/impl/CalculationCountedServiceImpl.java`
216. `src/main/java/com/nubo/operations/query/api/service/impl/PackageCustodianServiceImpl.java`
217. `src/main/java/com/nubo/operations/query/api/service/impl/SettlementCorrectionServiceImpl.java`
218. `src/main/java/com/nubo/operations/query/api/service/impl/SettlementRedisServiceImpl.java`
219. `src/main/java/com/nubo/operations/query/api/service/impl/SettlementServiceImpl.java`
220. `src/main/java/com/nubo/operations/query/api/service/impl/TestSimulationServiceImpl.java`
221. `src/main/java/com/nubo/operations/query/api/service/impl/TradeEquityServiceImpl.java`
222. `src/main/java/com/nubo/operations/query/api/service/impl/TradeRedisServiceImpl.java`
223. `src/main/java/com/nubo/operations/query/api/service/impl/TradeServiceImpl.java`
224. `src/main/java/com/nubo/operations/query/api/service/impl/ValidateCountedOperationServiceImpl.java`
225. `src/main/java/com/nubo/operations/query/api/web/controller/AllTradeRestController.java`
226. `src/main/java/com/nubo/operations/query/api/web/controller/AssignmentClosureController.java`
227. `src/main/java/com/nubo/operations/query/api/web/controller/CalculationCountedRestController.java`
228. `src/main/java/com/nubo/operations/query/api/web/controller/PackageCustodianRestController.java`
229. `src/main/java/com/nubo/operations/query/api/web/controller/SettlementCorrectionRestController.java`
230. `src/main/java/com/nubo/operations/query/api/web/controller/SettlementRestController.java`
231. `src/main/java/com/nubo/operations/query/api/web/controller/TestSimulationRestController.java`
232. `src/main/java/com/nubo/operations/query/api/web/controller/TradeEquityRestController.java`
233. `src/main/java/com/nubo/operations/query/api/web/controller/TradeRestController.java`
234. `src/main/java/com/nubo/operations/query/api/web/controller/ValidateCountedOperationRestController.java`

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
        <version>4.1.1</version>
        <relativePath/>
    </parent>

    <groupId>com.nubo.operations.query.api</groupId>
    <artifactId>operations-query-api</artifactId>
    <version>0.99.0-beta.13</version>
    <name>${project.artifactId}</name>
    <description>Operations Query API</description>

    <properties>
        <java.version>21</java.version>
        <spring.port>8080</spring.port>
        <test.skip>false</test.skip>

        <datasource.url.application.name>ApplicationName=${project.artifactId}</datasource.url.application.name>
        <hikari.pool.name>${project.artifactId}-pool</hikari.pool.name>
        <dynamic.hikari.pool.name>${project.artifactId}-pool</dynamic.hikari.pool.name>

        <!-- Security / vulnerability alignment -->
        <tomcat.version>11.0.25</tomcat.version>
        <log4j2.version>2.25.5</log4j2.version>
        <springdoc-openapi.version>3.1.0</springdoc-openapi.version>
        <jedis.version>7.5.1</jedis.version>
        <jacoco.version>0.8.12</jacoco.version>
        <org-json.version>20250107</org-json.version>

        <!-- CVE-2026-91777: jackson-databind quadratic forward-reference completion, fixed in 3.1.7 (jackson 3) / 2.21.7 (jackson 2, pulled in transitively) -->
        <jackson-bom.version>3.1.7</jackson-bom.version>
        <jackson-2-bom.version>2.21.7</jackson-2-bom.version>
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
            <exclusions>
				<exclusion>
					<groupId>org.springframework.boot</groupId>
					<artifactId>spring-boot-starter-logging</artifactId>
				</exclusion>
			</exclusions>
        </dependency>
        <!--  Logging  -->
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
            <groupId>commons-logging</groupId>
            <artifactId>commons-logging</artifactId>
            <version>1.2</version>
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
        <!-- Swagger / OpenAPI for Spring Boot 3.x -->
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
        <!-- Force patched commons-lang3 -->
        <dependency>
            <groupId>org.apache.commons</groupId>
            <artifactId>commons-lang3</artifactId>
        </dependency>

        <dependency>
            <groupId>com.redislabs</groupId>
            <artifactId>jredisearch</artifactId>
            <version>2.2.0</version>
        </dependency>
        <!-- Force patched org.json:json (CVE-2023-5072 fixed after 20230618) transitively pulled by jredisearch -->
        <dependency>
            <groupId>org.json</groupId>
            <artifactId>json</artifactId>
            <version>${org-json.version}</version>
        </dependency>

        <dependency>
            <groupId>redis.clients</groupId>
            <artifactId>jedis</artifactId>
            <version>3.7.1</version>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-webmvc-test</artifactId>
            <scope>test</scope>
        </dependency>

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
                                <exclude>**/OperationsQueryApiApplication.class</exclude>
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
  data:
    redis:
      host: ${REDIS_HOST}
      port: ${REDIS_PORT}
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
    com.nubo.operations.query.api: INFO
client:
  nubo:
    url-operation-calculation: ${NUBO_URL_OPERATION_CALCULATION}
    url-operation-rules: ${NUBO_URL_OPERATION_RULES}
    url-operation-fractionation: ${NUBO_URL_OPERATION_FRACTIONATION}

```

## src/main/resources/application-local.yml

```yaml
server:
    port: 8084
spring:
    datasource:
        username: ${DB_USERNAME}
        password: ${DB_PASSWORD}
        url: ${DB_URL_QA}?@datasource.url.application.name@
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
        show-sql: "false"
        database-platform: org.hibernate.dialect.PostgreSQLDialect
    data:
        redis:
            host: ${REDIS_HOST}
            port: ${REDIS_PORT}
logging:
    config: classpath:log/log4j2.properties
    level:
        org.hibernate: ERROR
        org.springframework.jdbc.datasource: ERROR
        com.zaxxer.hikari: ERROR
        com.nubo.operations.query.api: DEBUG
client:
    nubo:
        url-operation-calculation: ${NUBO_URL_OPERATION_CALCULATION:localhost}
        url-operation-rules: ${NUBO_URL_OPERATION_RULES:localhost}
        url-operation-fractionation: ${NUBO_URL_OPERATION_FRACTIONATION:localhost}

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
  data:
    redis:
      host: ${REDIS_HOST}
      port: ${REDIS_PORT}
logging:
  config: classpath:log/log4j2-prod.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
client:
  nubo:
    url-operation-calculation: ${NUBO_URL_OPERATION_CALCULATION}
    url-operation-rules: ${NUBO_URL_OPERATION_RULES}
    url-operation-fractionation: ${NUBO_URL_OPERATION_FRACTIONATION}

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
  data:
    redis:
      host: ${REDIS_HOST}
      port: ${REDIS_PORT}
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
client:
  nubo:
    url-operation-calculation: ${NUBO_URL_OPERATION_CALCULATION}
    url-operation-rules: ${NUBO_URL_OPERATION_RULES}
    url-operation-fractionation: ${NUBO_URL_OPERATION_FRACTIONATION}

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
  data:
    redis:
      host: ${REDIS_HOST}
      port: ${REDIS_PORT}
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
client:
  nubo:
    url-operation-calculation: ${NUBO_URL_OPERATION_CALCULATION}
    url-operation-rules: ${NUBO_URL_OPERATION_RULES}
    url-operation-fractionation: ${NUBO_URL_OPERATION_FRACTIONATION}

```

## src/main/resources/application.yml

```yaml
spring:
  profiles:
    active: ${SPRING_PROFILES_ACTIVE:local}
  application:
    name: "@project.name@"
    type: query-service
server:
  servlet:
    context-path: /${spring.application.name}
application:
  version: "@project.version@"
  description: 'Microservicio de consultas para operaciones - Patrón CQRS'
  title: "@project.description@"
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
 ,-----. ,------. ,------.,------.   ,---. ,--------.,--. ,-----. ,--.  ,--. ,---.    ,-----.   ,--. ,--.,------.,------.,--.   ,--.   ,---.  ,------. ,--.
'  .-.  '|  .--. '|  .---'|  .--. ' /  O  \'--.  .--'|  |'  .-.  '|  ,'.|  |'   .-'  '  .-.  '  |  | |  ||  .---'|  .--. '\  `.'  /   /  O  \ |  .--. '|  |
|  | |  ||  '--' ||  `--, |  '--'.'|  .-.  |  |  |   |  ||  | |  ||  |' '  |`.  `-.  |  | |  |  |  | |  ||  `--, |  '--'.' '.    /   |  .-.  ||  '--' ||  |
'  '-'  '|  | --' |  `---.|  |\  \ |  | |  |  |  |   |  |'  '-'  '|  | `   |.-'    | '  '-'  '-.'  '-'  '|  `---.|  |\  \    |  |    |  | |  ||  | --' |  |
 `-----' `--'     `------'`--' '--'`--' `--'  `--'   `--' `-----' `--'  `--'`-----'   `-----'--' `-----' `------'`--' '--'   `--'    `--' `--'`--'     `--'

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

## src/main/java/com/nubo/operations/query/api/OperationsQueryApiApplication.java

```java
package com.nubo.operations.query.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class OperationsQueryApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(OperationsQueryApiApplication.class, args);
	}

}

```

## src/main/java/com/nubo/operations/query/api/application/annotations/ValidBigDecimal.java

```java
package com.nubo.operations.query.api.application.annotations;

import com.nubo.operations.query.api.application.config.ValidBigDecimalConfig;
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

## src/main/java/com/nubo/operations/query/api/application/config/AccountSourceTypeEnumConverter.java

```java
package com.nubo.operations.query.api.application.config;

import com.nubo.operations.query.api.models.enums.AccountSourceTypeEnum;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

/**
 * Converter que permite que Spring MVC resuelva {@link AccountSourceTypeEnum}
 * desde {@code @RequestParam}/{@code @PathVariable} usando los valores
 * numéricos del contrato (1, 2), no el nombre de la constante.
 * <p>
 * Necesario porque {@code @JsonValue}/{@code @JsonCreator} sólo aplican a
 * deserialización Jackson (body JSON), no a la {@code ConversionService} de
 * Spring que se usa para query string y path variables.
 * <p>
 * Al estar anotado con {@link Component}, Spring Boot lo registra
 * automáticamente en la {@code ConversionService} global; aplica a cualquier
 * endpoint que reciba {@link AccountSourceTypeEnum} como parámetro.
 */
@Component
public class AccountSourceTypeEnumConverter implements Converter<String, AccountSourceTypeEnum> {

    @Override
    public AccountSourceTypeEnum convert(String source) {
        try {
            return AccountSourceTypeEnum.fromValue(Integer.parseInt(source.trim()));
        } catch (NumberFormatException ex) {
            throw new IllegalArgumentException(
                    "Account source type must be a numeric value (1 = PARTICIPANT_ACCOUNT, "
                            + "2 = INVESTOR_ACCOUNT). Received: " + source, ex);
        }
    }

}

```

## src/main/java/com/nubo/operations/query/api/application/config/SwaggerConfig.java

```java
package com.nubo.operations.query.api.application.config;

import com.nubo.operations.query.api.exception.error.ErrorResponse;
import com.nubo.operations.query.api.exception.error.ErrorValidation;
import com.nubo.operations.query.api.models.enums.PropertiesEnum;
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

## src/main/java/com/nubo/operations/query/api/application/config/ValidBigDecimalConfig.java

```java
package com.nubo.operations.query.api.application.config;

import com.nubo.operations.query.api.application.annotations.ValidBigDecimal;
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

## src/main/java/com/nubo/operations/query/api/application/config/WebConfig.java

```java
package com.nubo.operations.query.api.application.config;

import com.nubo.operations.query.api.application.interceptors.GlobalInterceptor;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.web.client.RestClient;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;

import java.time.Duration;
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
    public RestClient restClient() {
        SimpleClientHttpRequestFactory factory = new SimpleClientHttpRequestFactory();
        factory.setConnectTimeout(Duration.ofSeconds(5)); // Timeout de conexión
        factory.setReadTimeout(Duration.ofSeconds(30)); // Timeout de lectura

        return RestClient.builder()
                .requestFactory(factory)
                .build();
    }

}

```

## src/main/java/com/nubo/operations/query/api/application/context/GlobalContext.java

```java
package com.nubo.operations.query.api.application.context;

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

## src/main/java/com/nubo/operations/query/api/application/database/NamingStrategyConfig.java

```java
package com.nubo.operations.query.api.application.database;

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

## src/main/java/com/nubo/operations/query/api/application/database/UpperNamingConfig.java

```java
package com.nubo.operations.query.api.application.database;

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

## src/main/java/com/nubo/operations/query/api/application/filters/GlobalFilter.java

```java
package com.nubo.operations.query.api.application.filters;

import com.nubo.operations.query.api.application.context.GlobalContext;
import com.nubo.operations.query.api.application.util.ApplicationUtils;
import com.nubo.operations.query.api.exception.ServiceException;
import com.nubo.operations.query.api.exception.error.ErrorCode;
import com.nubo.operations.query.api.exception.error.ErrorResponse;
import com.nubo.operations.query.api.models.entity.UserNuboEntity;
import com.nubo.operations.query.api.models.enums.PropertiesEnum;
import com.nubo.operations.query.api.models.enums.VersionApiEnum;
import com.nubo.operations.query.api.repository.UserNuboRepository;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
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
@RequiredArgsConstructor
@Slf4j
public class GlobalFilter extends OncePerRequestFilter {

    private final UserNuboRepository userNuboRepository;

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
            UserNuboEntity userNuboEntity = this.validateUserExists(clientUserHeader);
            //String token = this.validateTokenRequest(request);

            GlobalContext.setProperty(PropertiesEnum.VERSION_API.getValue(), VersionApiEnum.fromValue(versionPath).getValue());
            GlobalContext.setProperty(PropertiesEnum.CLIENT_IP.getValue(), clientIpHeader);
            GlobalContext.setProperty(PropertiesEnum.CLIENT_USER.getValue(), clientUserHeader);
            GlobalContext.setProperty(PropertiesEnum.CLIENT_DATETIME.getValue(), clientDatetime);
            GlobalContext.setProperty(PropertiesEnum.CLIENT_USER_ENTITY.getValue(), userNuboEntity);
            //GlobalContext.setProperty(PropertiesEnum.AUTH_TOKEN.getValue(), token);


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
        log.info("----------- Client User: {} ----------", clientUser);
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
                .orElseThrow(() -> new ServiceException(ErrorCode.UNAUTHORIZED, HttpStatus.UNAUTHORIZED));
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
}

```

## src/main/java/com/nubo/operations/query/api/application/interceptors/GlobalInterceptor.java

```java
package com.nubo.operations.query.api.application.interceptors;

import com.nubo.operations.query.api.application.context.GlobalContext;
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

## src/main/java/com/nubo/operations/query/api/application/properties/PropertiesConfig.java

```java
package com.nubo.operations.query.api.application.properties;

import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
@Data
public class PropertiesConfig {

    @Value("${spring.application.name}")
    private String apiName;

    @Value("${client.nubo.url-operation-calculation}")
    private String urlNuboOperationCalculation;

    @Value("${client.nubo.url-operation-rules}")
    private String urlNuboOperationRules;

    @Value("${client.nubo.url-operation-fractionation}")
    private String urlNuboOperationFractionation;

    @Value("${spring.data.redis.host:127.0.0.1}")
    private String redisHost;

    @Value("${spring.data.redis.port:6379}")
    private int redisPort;

}

```

## src/main/java/com/nubo/operations/query/api/application/properties/PropertiesContext.java

```java
package com.nubo.operations.query.api.application.properties;

import com.nubo.operations.query.api.application.context.GlobalContext;
import com.nubo.operations.query.api.application.util.ApplicationUtils;
import com.nubo.operations.query.api.models.entity.UserNuboEntity;
import com.nubo.operations.query.api.models.enums.PropertiesEnum;
import org.springframework.util.ObjectUtils;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public final class PropertiesContext {

    public static String getClientIp() {
        return GlobalContext.getPropertyString(PropertiesEnum.CLIENT_IP.getValue());
    }

    public static String getClientUser() {
        return GlobalContext.getPropertyString(PropertiesEnum.CLIENT_USER.getValue());
    }

    public static LocalDateTime getClientDatetime() {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDatetime());
        String clientDatetime = GlobalContext.getPropertyString(PropertiesEnum.CLIENT_DATETIME.getValue());
        if (ObjectUtils.isEmpty(clientDatetime)) {
            return LocalDateTime.now();
        }
        return LocalDateTime.parse(clientDatetime, formatter);
    }

    public static String getVersion() {
        return GlobalContext.getPropertyString(PropertiesEnum.VERSION_API.getValue());
    }

    public static UserNuboEntity getClientUserEntity() {
        return (UserNuboEntity) GlobalContext.getProperty(PropertiesEnum.CLIENT_USER_ENTITY.getValue());
    }

    public static String getAuthToken() {
        return GlobalContext.getPropertyString(PropertiesEnum.AUTH_TOKEN.getValue());
    }

}

```

## src/main/java/com/nubo/operations/query/api/application/util/ApplicationUtils.java

```java
package com.nubo.operations.query.api.application.util;

import tools.jackson.databind.ObjectMapper;
import com.nubo.operations.query.api.application.properties.PropertiesContext;
import com.nubo.operations.query.api.exception.ServiceException;
import com.nubo.operations.query.api.exception.error.ErrorCode;
import com.nubo.operations.query.api.models.domain.UserNuboData;
import com.nubo.operations.query.api.models.entity.ParticipantEntity;
import com.nubo.operations.query.api.models.entity.UserNuboEntity;
import com.nubo.operations.query.api.models.enums.TypeEnum;
import com.nubo.operations.query.api.models.enums.UserTypeEnum;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Objects;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public final class ApplicationUtils {

    private final ObjectMapper objectMapper;

    private static ObjectMapper MAPPER;

    private static final String FORMAT_DATETIME = "yyyy-MM-dd'T'HH:mm:ss";
    private static final String FORMAT_DATE = "yyyy-MM-dd";

    @PostConstruct
    private void init() {
        MAPPER = this.objectMapper;
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
        } catch (Exception e) {
            throw new ServiceException(ErrorCode.UNEXPECTED, e);
        }
    }

    public static <T> T convertJsonToObject(String json, Class<T> clazz) {
        try {
            return MAPPER.readValue(json, clazz);
        } catch (Exception e) {
            throw new ServiceException(ErrorCode.UNEXPECTED, e);
        }
    }

    public static Integer parseIntegerSafely(String value, ErrorCode errorCode) {
        try {
            return Integer.parseInt(value);
        } catch (NumberFormatException e) {
            throw new ServiceException(errorCode, "Error parsing integer value: " + value);
        }
    }

    public static Long parseLongSafely(String value, ErrorCode errorCode) {
        try {
            return Long.parseLong(value);
        } catch (NumberFormatException e) {
            throw new ServiceException(errorCode, "Error parsing long value: " + value);
        }
    }

    public static UserNuboData getUserNuboData() {
        UserNuboEntity userNuboEntity = PropertiesContext.getClientUserEntity();
        ParticipantEntity participant = userNuboEntity.getParticipant();
        UserNuboData userNuboData = null;
        if (Objects.equals(UserTypeEnum.INTERNAL.getValue(), userNuboEntity.getUserType())) {
            userNuboData = new UserNuboData(
                    userNuboEntity.getId(),
                    participant != null ? participant.getId() : null,
                    false,
                    null,
                    UserTypeEnum.INTERNAL);
        }
        if (Objects.equals(UserTypeEnum.EXTERNAL.getValue(), userNuboEntity.getUserType())) {
            boolean isCustodian = participant != null
                    && participant.getType() != null
                    && Objects.equals(participant.getType().getId(), TypeEnum.CUSTODIO.getId());
            String participantCountryCode = participant != null && participant.getCountry() != null
                    ? participant.getCountry().getCode()
                    : null;
            userNuboData = new UserNuboData(
                    userNuboEntity.getId(),
                    participant != null ? participant.getId() : null,
                    isCustodian,
                    participantCountryCode,
                    UserTypeEnum.EXTERNAL);
        }
        if (userNuboData == null) {
            throw new ServiceException(ErrorCode.USER_TYPE_NOT_VALID, HttpStatus.FORBIDDEN);
        }

        return userNuboData;
    }

    // avoids NPE when either value is null (nullable columns / empty
    // TradeEquityEntity)
    public static String concatNullable(String a, String b) {
        return (a == null ? "" : a) + (b == null ? "" : b);
    }

}

```

## src/main/java/com/nubo/operations/query/api/application/util/RestClientUtils.java

```java
package com.nubo.operations.query.api.application.util;

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

}

```

## src/main/java/com/nubo/operations/query/api/client/operation/calculation/models/dto/request/SettleAccountsInDto.java

```java
package com.nubo.operations.query.api.client.operation.calculation.models.dto.request;

import com.nubo.operations.query.api.application.annotations.ValidBigDecimal;
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
    @ValidBigDecimal(precision = 16, scale = 6)
    private BigDecimal price;

    @NotNull
    @ValidBigDecimal(precision = 6, scale = 4)
    private BigDecimal commission;

    @NotNull
    @ValidBigDecimal(precision = 6, scale = 4)
    private BigDecimal valTax;

    @NotNull
    private String sideId;

    private Long typeId;

    private BigDecimal forwardPrice;

    private BigDecimal volume;

}

```

## src/main/java/com/nubo/operations/query/api/client/operation/calculation/models/dto/response/SettleAccountsOutDto.java

```java
package com.nubo.operations.query.api.client.operation.calculation.models.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SettleAccountsOutDto {

    private BigDecimal amount;

    private BigDecimal commissionAmount;

    private BigDecimal valTaxAmount;

    private BigDecimal netAmount;

    private BigDecimal transferValue;

    private BigDecimal netOutflowTotal;

    private BigDecimal outflowTurnoverValue;

    private BigDecimal returnTurnoverValue;
}

```

## src/main/java/com/nubo/operations/query/api/client/operation/calculation/service/OperationCalculationClient.java

```java
package com.nubo.operations.query.api.client.operation.calculation.service;

import com.nubo.operations.query.api.client.operation.calculation.models.dto.request.SettleAccountsInDto;
import com.nubo.operations.query.api.client.operation.calculation.models.dto.response.SettleAccountsOutDto;

public interface OperationCalculationClient {

    SettleAccountsOutDto getSettleAccounts(SettleAccountsInDto settleAccountsInDto);
}

```

## src/main/java/com/nubo/operations/query/api/client/operation/calculation/service/impl/OperationCalculationClientImpl.java

```java
package com.nubo.operations.query.api.client.operation.calculation.service.impl;

import com.nubo.operations.query.api.application.properties.PropertiesConfig;
import com.nubo.operations.query.api.application.properties.PropertiesContext;
import com.nubo.operations.query.api.application.util.ApplicationUtils;
import com.nubo.operations.query.api.application.util.RestClientUtils;
import com.nubo.operations.query.api.client.operation.calculation.models.dto.request.SettleAccountsInDto;
import com.nubo.operations.query.api.client.operation.calculation.models.dto.response.SettleAccountsOutDto;
import com.nubo.operations.query.api.client.operation.calculation.service.OperationCalculationClient;
import com.nubo.operations.query.api.exception.ClientException;
import com.nubo.operations.query.api.exception.error.ErrorCode;
import com.nubo.operations.query.api.models.enums.PropertiesEnum;
import com.nubo.operations.query.api.models.enums.VersionApiEnum;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.net.URI;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;
import org.springframework.web.util.UriComponentsBuilder;

@Service
@RequiredArgsConstructor
@Slf4j
public class OperationCalculationClientImpl implements OperationCalculationClient {

    private final PropertiesConfig propertiesConfig;
    private final RestClientUtils restClientUtils;

    private static final String PATH_SETTLE_ACCOUNTS = "calculation/settle-accounts";

    @Override
    public SettleAccountsOutDto getSettleAccounts(SettleAccountsInDto settleAccountsInDto) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboOperationCalculation())
                .pathSegment(VersionApiEnum.V1.getValue(), PATH_SETTLE_ACCOUNTS)
                .build()
                .toUri();

        try {
            ResponseEntity<SettleAccountsOutDto> response = restClientUtils.requestBodyWithResponseObject(uri,
                    HttpMethod.POST, getHttpHeaders(), settleAccountsInDto, SettleAccountsOutDto.class);
            if (!ObjectUtils.isEmpty(response.getBody())) {
                return response.getBody();
            }
        } catch (Exception ex) {
            throw new ClientException(ErrorCode.CLIENT_OPERATION_CALCULATION_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return SettleAccountsOutDto.builder().build();
    }

    private static HttpHeaders getHttpHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(PropertiesContext.getAuthToken());
        headers.set(PropertiesEnum.CLIENT_IP.getValue(), PropertiesContext.getClientIp());
        headers.set(PropertiesEnum.CLIENT_USER.getValue(), PropertiesContext.getClientUser());
        headers.set(PropertiesEnum.CLIENT_DATETIME.getValue(),
                ApplicationUtils.convertLocalDateTimeToString(PropertiesContext.getClientDatetime()));
        headers.setContentType(MediaType.APPLICATION_JSON);
        return headers;
    }

}

```

## src/main/java/com/nubo/operations/query/api/client/operation/rules/models/dto/request/StatusAllowedOptionsInDto.java

```java
package com.nubo.operations.query.api.client.operation.rules.models.dto.request;

import com.nubo.operations.query.api.models.enums.BusinessRuleEnum;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class StatusAllowedOptionsInDto {

    private BusinessRuleEnum code;

    private Long statusId;

    private Long countryId;

    private Long typeId;

}

```

## src/main/java/com/nubo/operations/query/api/client/operation/rules/models/dto/request/StatusUpdateTradeInDto.java

```java
package com.nubo.operations.query.api.client.operation.rules.models.dto.request;

import com.nubo.operations.query.api.models.enums.BusinessRuleEnum;

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
    private String sideId;

    @NotNull
    private BusinessRuleEnum code;

}

```

## src/main/java/com/nubo/operations/query/api/client/operation/rules/models/dto/response/ActionOutDto.java

```java
package com.nubo.operations.query.api.client.operation.rules.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nubo.operations.query.api.models.dto.response.StatusOutDto;
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

## src/main/java/com/nubo/operations/query/api/client/operation/rules/models/dto/response/BusinessRuleOutDto.java

```java
package com.nubo.operations.query.api.client.operation.rules.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nubo.operations.query.api.models.dto.response.CountryOutDto;
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

## src/main/java/com/nubo/operations/query/api/client/operation/rules/models/dto/response/StatusAllowedOptionsOutDto.java

```java
package com.nubo.operations.query.api.client.operation.rules.models.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class StatusAllowedOptionsOutDto {

    private Boolean isValid;

    private String code;

    private String description;

    private StatusClientOutDto newStatus;

}

```

## src/main/java/com/nubo/operations/query/api/client/operation/rules/models/dto/response/StatusClientOutDto.java

```java
package com.nubo.operations.query.api.client.operation.rules.models.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class StatusClientOutDto {

    private Long id;

    private String description;

    private String category;

    private String shortName;

    private String detail;
}

```

## src/main/java/com/nubo/operations/query/api/client/operation/rules/models/dto/response/StatusUpdateTradeOutDto.java

```java
package com.nubo.operations.query.api.client.operation.rules.models.dto.response;

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

    private StatusClientOutDto newStatusSide;

    private StatusClientOutDto newStatusFraction;

    private StatusClientOutDto newStatusCustodianFraction;

    private StatusClientOutDto newStatusTrade;

}

```

## src/main/java/com/nubo/operations/query/api/client/operation/rules/service/OperationBusinessRuleClient.java

```java
package com.nubo.operations.query.api.client.operation.rules.service;

import com.nubo.operations.query.api.client.operation.rules.models.dto.request.StatusAllowedOptionsInDto;
import com.nubo.operations.query.api.client.operation.rules.models.dto.request.StatusUpdateTradeInDto;
import com.nubo.operations.query.api.client.operation.rules.models.dto.response.BusinessRuleOutDto;
import com.nubo.operations.query.api.client.operation.rules.models.dto.response.StatusAllowedOptionsOutDto;
import com.nubo.operations.query.api.client.operation.rules.models.dto.response.StatusUpdateTradeOutDto;
import com.nubo.operations.query.api.models.enums.BusinessRuleEnum;

public interface OperationBusinessRuleClient {

    BusinessRuleOutDto findBusinessRuleByCountryIdAndCode(Long countryId, BusinessRuleEnum code);

    BusinessRuleOutDto findBusinessRuleByCode(BusinessRuleEnum code);

    StatusAllowedOptionsOutDto validateStatusByCode(StatusAllowedOptionsInDto statusAllowedOptionsInDto);

    BusinessRuleOutDto findBusinessRuleByCountryIdAndCodeValid(Long countryId, BusinessRuleEnum code);

    StatusUpdateTradeOutDto validateUpdateStatusTrade(StatusUpdateTradeInDto statusUpdateTradeInDto);

}

```

## src/main/java/com/nubo/operations/query/api/client/operation/rules/service/impl/OperationBusinessRuleClientImpl.java

```java
package com.nubo.operations.query.api.client.operation.rules.service.impl;

import com.nubo.operations.query.api.application.properties.PropertiesConfig;
import com.nubo.operations.query.api.application.properties.PropertiesContext;
import com.nubo.operations.query.api.application.util.ApplicationUtils;
import com.nubo.operations.query.api.application.util.RestClientUtils;
import com.nubo.operations.query.api.client.operation.rules.models.dto.request.StatusAllowedOptionsInDto;
import com.nubo.operations.query.api.client.operation.rules.models.dto.request.StatusUpdateTradeInDto;
import com.nubo.operations.query.api.client.operation.rules.models.dto.response.BusinessRuleOutDto;
import com.nubo.operations.query.api.client.operation.rules.models.dto.response.StatusAllowedOptionsOutDto;
import com.nubo.operations.query.api.client.operation.rules.models.dto.response.StatusUpdateTradeOutDto;
import com.nubo.operations.query.api.client.operation.rules.service.OperationBusinessRuleClient;
import com.nubo.operations.query.api.exception.ClientException;
import com.nubo.operations.query.api.exception.error.ErrorCode;
import com.nubo.operations.query.api.models.enums.BusinessRuleEnum;
import com.nubo.operations.query.api.models.enums.PropertiesEnum;
import com.nubo.operations.query.api.models.enums.VersionApiEnum;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.net.URI;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;
import org.springframework.web.util.UriComponentsBuilder;

@Service
@RequiredArgsConstructor
@Slf4j
public class OperationBusinessRuleClientImpl implements OperationBusinessRuleClient {

    private final PropertiesConfig propertiesConfig;
    private final RestClientUtils restClientUtils;

    private static final String OPERATION_BUSINESS_RULE = "operation-business-rule";
    private static final String OPERATION_ACTION_BUSINESS_RULE = "operation-action-business-rule";
    private static final String OPERATION_STATUS_UPDATE_BUSINESS_RULE = "status-update-business-rule";

    @Override
    public BusinessRuleOutDto findBusinessRuleByCountryIdAndCode(Long countryId, BusinessRuleEnum code) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboOperationRules())
                .pathSegment(VersionApiEnum.V1.getValue(), OPERATION_BUSINESS_RULE)
                .path("/country/{countryId}/code/{code}")
                .buildAndExpand(countryId, code.getValue())
                .toUri();

        try {
            ResponseEntity<BusinessRuleOutDto> response = restClientUtils.requestWithResponseObject(uri,
                    HttpMethod.GET, getHttpHeaders(), BusinessRuleOutDto.class);

            if (!ObjectUtils.isEmpty(response.getBody())) {
                return response.getBody();
            }
        } catch (Exception ex) {
            throw new ClientException(ErrorCode.CLIENT_OPERATION_RULES_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return BusinessRuleOutDto.builder().build();
    }

    @Override
    public BusinessRuleOutDto findBusinessRuleByCode(BusinessRuleEnum code) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboOperationRules())
                .pathSegment(VersionApiEnum.V1.getValue(), OPERATION_BUSINESS_RULE)
                .path("/code/{code}")
                .buildAndExpand(code.getValue())
                .toUri();

        try {
            ResponseEntity<BusinessRuleOutDto> response = restClientUtils.requestWithResponseObject(uri,
                    HttpMethod.GET, getHttpHeaders(), BusinessRuleOutDto.class);

            if (!ObjectUtils.isEmpty(response.getBody())) {
                return response.getBody();
            }
        } catch (Exception ex) {
            throw new ClientException(ErrorCode.CLIENT_OPERATION_RULES_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return BusinessRuleOutDto.builder().build();
    }

    @Override
    public  StatusAllowedOptionsOutDto validateStatusByCode(StatusAllowedOptionsInDto statusAllowedOptionsInDto) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboOperationRules())
                .pathSegment(VersionApiEnum.V1.getValue(), OPERATION_ACTION_BUSINESS_RULE)
                .pathSegment("validation")
                .build()
                .toUri();

        try {
            ResponseEntity<StatusAllowedOptionsOutDto> response = restClientUtils.requestBodyWithResponseObject(uri,
                    HttpMethod.POST, getHttpHeaders(), statusAllowedOptionsInDto, StatusAllowedOptionsOutDto.class);

            if (!ObjectUtils.isEmpty(response.getBody())) {
                return response.getBody();
            }
        } catch (Exception ex) {
            throw new ClientException(ErrorCode.CLIENT_OPERATION_RULES_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return StatusAllowedOptionsOutDto.builder().build();
    }

    @Override
    public BusinessRuleOutDto findBusinessRuleByCountryIdAndCodeValid(Long countryId, BusinessRuleEnum code) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboOperationRules())
                .pathSegment(VersionApiEnum.V1.getValue(), OPERATION_ACTION_BUSINESS_RULE)
                .path("/country/{countryId}/code/{code}/valid")
                .buildAndExpand(countryId, code.getValue())
                .toUri();

        try {
            ResponseEntity<BusinessRuleOutDto> response = restClientUtils.requestWithResponseObject(uri,
                    HttpMethod.GET, getHttpHeaders(), BusinessRuleOutDto.class);

            if (!ObjectUtils.isEmpty(response.getBody())) {
                return response.getBody();
            }
        } catch (Exception ex) {
            throw new ClientException(ErrorCode.CLIENT_OPERATION_RULES_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return BusinessRuleOutDto.builder().build();
    }

    @Override
    public StatusUpdateTradeOutDto validateUpdateStatusTrade(StatusUpdateTradeInDto statusUpdateTradeInDto) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboOperationRules())
                .pathSegment(VersionApiEnum.V1.getValue(), OPERATION_STATUS_UPDATE_BUSINESS_RULE)
                .path("/trade/validation")
                .build()
                .toUri();

        try {
            ResponseEntity<StatusUpdateTradeOutDto> response = restClientUtils.requestBodyWithResponseObject(uri,
                    HttpMethod.POST, getHttpHeaders(), statusUpdateTradeInDto, StatusUpdateTradeOutDto.class);

            if (!ObjectUtils.isEmpty(response.getBody())) {
                return response.getBody();
            }
        } catch (Exception ex) {
            throw new ClientException(ErrorCode.CLIENT_OPERATION_RULES_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return StatusUpdateTradeOutDto.builder().build();
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

## src/main/java/com/nubo/operations/query/api/exception/ClientException.java

```java
package com.nubo.operations.query.api.exception;

import com.nubo.operations.query.api.exception.error.ErrorCode;
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

## src/main/java/com/nubo/operations/query/api/exception/ServiceException.java

```java
package com.nubo.operations.query.api.exception;

import com.nubo.operations.query.api.exception.error.ErrorCode;
import lombok.Getter;
import org.springframework.http.HttpStatus;

import java.util.Collections;
import java.util.Map;

@Getter
public class ServiceException extends RuntimeException {

    private final ErrorCode errorCode;
    private final HttpStatus httpStatus;
    private final Map<String, Object> details;

    public ServiceException(ErrorCode errorCode) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
        this.httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
        this.details = null;
    }

    public ServiceException(ErrorCode errorCode, HttpStatus httpStatus) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
        this.httpStatus = httpStatus;
        this.details = null;
    }

    public ServiceException(ErrorCode errorCode, HttpStatus httpStatus, Map<String, Object> details) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
        this.httpStatus = httpStatus;
        this.details = (details == null ? Collections.emptyMap() : details);
    }

    public ServiceException(ErrorCode errorCode, String message, HttpStatus httpStatus) {
        super(errorCode.getMessage(), new Throwable(message));
        this.errorCode = errorCode;
        this.httpStatus = httpStatus;
        this.details = null;
    }

    public ServiceException(ErrorCode errorCode, String message) {
        super(errorCode.getMessage(), new Throwable(message));
        this.errorCode = errorCode;
        this.httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
        this.details = null;
    }

    public ServiceException(ErrorCode errorCode, Throwable throwable) {
        super(errorCode.getMessage(), throwable);
        this.errorCode = errorCode;
        this.httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
        this.details = null;
    }

    public ServiceException(ErrorCode errorCode, HttpStatus httpStatus, Throwable throwable) {
        super(errorCode.getMessage(), throwable);
        this.errorCode = errorCode;
        this.httpStatus = httpStatus;
        this.details = null;
    }

    public ServiceException(String message, ErrorCode errorCode, HttpStatus httpStatus) {
        super(message);
        this.errorCode = errorCode;
        this.httpStatus = httpStatus;
        this.details = null;
    }

    public HttpStatus getHttpStatusOrDefault() {
        return this.httpStatus != null ? this.httpStatus : HttpStatus.INTERNAL_SERVER_ERROR;
    }

}

```

## src/main/java/com/nubo/operations/query/api/exception/error/ErrorCode.java

```java
package com.nubo.operations.query.api.exception.error;

import lombok.Getter;

@Getter
public enum ErrorCode
{

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
    HEADER_CLIENT_IP_REQUIRED("Header client_ip required"),
    HEADER_CLIENT_IP_INVALID("Header client_ip is invalid"),
    HEADER_CLIENT_USER_REQUIRED("Header client_user is required"),
    HEADER_CLIENT_DATETIME_REQUIRED("Header client_datetime is required"),
    HEADER_CLIENT_DATETIME_INVALID("Header client_datetime is invalid"),
    USER_NOT_FOUND("User not found"),
    USER_TYPE_NOT_VALID("User type is not valid"),
    VERSION_API_NOT_FOUND("Version API not found"),
    TRADE_NOT_FOUND("Trade not found"),
    SECURITY_TITLE_NOT_FOUND("Security Title not found"),
    TRADE_EQUITY_NOT_FOUND("Trade Equity not found"),
    TRADE_EQUITY_EXISTS("TradeEquity already exists"),
    SETTLEMENT_NOT_FOUND("Settlement not found"),
    TYPE_NOT_FOUND("Type not found"),
    PARTICIPANT_NOT_FOUND("Participant not found"),
    ACCOUNT_NOT_FOUND("Account not found"),
    ACCOUNT_NOT_ACTIVE("Account not active"),
    SIDE_NOT_FOUND("Side not found"),
    TRADE_DEPOSITORY_NOT_FOUND("Trade Depository not found"),
    TAXES_NOT_FOUND("Taxes not found"),
    TRADE_DEPOSITORY_REQUIRED("The depository Trade required"),
    TYPE_COUNTED_OR_REPO_OPERATION_REQUIRED("The type of operation must be counted or repo operation"),
    ACCOUNT_DEPOSITORY_NOT_CORRESPOND_TO_TRADE("Account depository not correspond to trade"),
    SOURCE_QUOTE_TYPE_REQUIRED("The source quote type required"),
    OWN_POSITION_NOT_CORRESPOND_TO_ORIGIN("The allocation data does not correspond to the Own Position origin"),
    THIRD_PARTIES_COLLECTIVE_PORTFOLIOS_NOT_CORRESPOND_TO_ORIGIN(
            "The allocation data does not correspond to the origin Third Parties/Collective Portfolios"),
    FRACTION_TOTAL_QUANTITY_NOT_CORRESPOND_QUANTITY_TRADE(
            "The total number of shares in the fractions does not correspond to the total number of shares of the operation"),
    FRACTION_TOTAL_QUANTITY_EXCEED_QUANTITY_TRADE(
            "The sum of the quantities of the fractions exceeds the quantity operation"),
    MAXIMUM_LIMIT_FRACTIONS_EXCEED("The maximum limit of fractions"),
    CLIENT_OPERATION_CALCULATION_ERROR("An unexpected error occurred in Operation Calculation"),
    CLIENT_OPERATION_RULES_ERROR("An unexpected error occurred in Operation Rules"),
    COMMISSION_SETTLEMENT_DATE_COMPLIANCE_AFTER(
            "The commission cannot be modified because the compliance date is after the modification date"),
    COMMISSION_CANNOT_EXCEED_REPO_AMOUNT("The value of the commission cannot exceed the repo amount"),
    PARTICIPANT_ACCOUNT_OR_INVESTOR_ACCOUNT_NOT_FOUND(
            "No participant or investor account was found for the defined source"),
    FINAL_ASSIGNMENT_HAS_ALREADY_SENT("The final assignment has already been sent to CCP"),
    ERROR_BUSINESS_RULE("Client Business rule error occurred"),
    DUPLICATE_TRADE_ID("Duplicate trade Id in request body"),
    INVALID_BUSINESS_RULE_VALUE("Invalid value for business rule"),
    INVALID_REQUEST("Invalid request"),
    PARTICIPANT_CUSTODIAN_NOT_FOUND("Participant custodian not found"),
    CORRECTION_NOT_ALLOWED("Correction is not allowed for this operation"),
    CORRECTION_OUT_OF_HOURS("Correction is out of allowed hours"),
    CORRECTION_PENDING("Correction is pending for this operation"),
    PARTICIPANT_NOT_FOUND_IN_TRADE("Participant not found in trade"),
    PACKAGE_CUSTODIAN_NOT_FOUND("Package custodian not found"),
    INVESTOR_ACCOUNT_NOT_FOUND("Investor account not found");

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

## src/main/java/com/nubo/operations/query/api/exception/error/ErrorResponse.java

```java
package com.nubo.operations.query.api.exception.error;

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

## src/main/java/com/nubo/operations/query/api/exception/error/ErrorValidation.java

```java
package com.nubo.operations.query.api.exception.error;

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

## src/main/java/com/nubo/operations/query/api/exception/handler/GlobalExceptionHandler.java

```java
package com.nubo.operations.query.api.exception.handler;

import com.nubo.operations.query.api.application.properties.PropertiesContext;
import com.nubo.operations.query.api.application.util.ApplicationUtils;
import com.nubo.operations.query.api.exception.ClientException;
import com.nubo.operations.query.api.exception.ServiceException;
import com.nubo.operations.query.api.exception.error.ErrorCode;
import com.nubo.operations.query.api.exception.error.ErrorResponse;
import com.nubo.operations.query.api.exception.error.ErrorValidation;
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
import org.springframework.web.method.annotation.HandlerMethodValidationException;
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
    public ResponseEntity<ErrorResponse> handlerHttpRequestMethodNotSupportedException(
            HttpRequestMethodNotSupportedException exception,
            HttpServletRequest request) {
        return buildErrorResponse(HttpStatus.METHOD_NOT_ALLOWED, exception, request, ErrorCode.METHOD_NOT_ALLOWED);
    }

    @ExceptionHandler(MethodArgumentTypeMismatchException.class)
    public ResponseEntity<ErrorResponse> handlerMethodArgumentTypeMismatchException(
            MethodArgumentTypeMismatchException exception,
            HttpServletRequest request) {
        return buildErrorResponse(HttpStatus.BAD_REQUEST, exception, request, ErrorCode.METHOD_ARGUMENT_TYPE);
    }

    @ExceptionHandler(HttpMediaTypeNotSupportedException.class)
    public ResponseEntity<ErrorResponse> handlerHttpMediaTypeNotSupportedException(
            HttpMediaTypeNotSupportedException exception,
            HttpServletRequest request) {
        return buildErrorResponse(HttpStatus.UNSUPPORTED_MEDIA_TYPE, exception, request,
                ErrorCode.UNSUPPORTED_MEDIA_TYPE);
    }

    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<ErrorResponse> handlerHttpMessageNotReadableException(
            HttpMessageNotReadableException exception,
            HttpServletRequest request) {
        return buildErrorResponse(HttpStatus.BAD_REQUEST, exception, request, ErrorCode.MESSAGE_NOT_READABLE);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handlerMethodArgumentNotValidException(
            MethodArgumentNotValidException exception,
            HttpServletRequest request) {
        List<ErrorValidation> errors = exception.getBindingResult().getFieldErrors().stream()
                .map(error -> ErrorValidation.builder()
                        .id(error.getField())
                        .description(error.getDefaultMessage())
                        .build())
                .toList();
        return buildErrorResponse(HttpStatus.BAD_REQUEST, exception, request, ErrorCode.BAD_REQUEST, errors);
    }

    @ExceptionHandler(HandlerMethodValidationException.class)
    public ResponseEntity<ErrorResponse> handleMethodValidationException(HandlerMethodValidationException exception,
            HttpServletRequest request) {

        List<ErrorValidation> errors = exception.getParameterValidationResults().stream()
                .flatMap(parameterValidationResult -> parameterValidationResult.getResolvableErrors().stream()
                        .map(error -> ErrorValidation.builder()
                                .id(error != null ? "[" + parameterValidationResult.getContainerIndex() + "]." +
                                        removeIntermediatePart(Objects.requireNonNull(error.getCodes())[1]) : "unknown")
                                .description(error != null ? error.getDefaultMessage() : "unknown")
                                .build()))
                .toList();
        return buildErrorResponse(HttpStatus.BAD_REQUEST, exception, request, ErrorCode.BAD_REQUEST, errors);
    }

    private String removeIntermediatePart(String str) {
        Pattern pattern = Pattern.compile("\\.(\\w+)$");
        Matcher matcher = pattern.matcher(str);
        if (matcher.find()) {
            return matcher.group(1);
        }
        return str;
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
                .errorMessageDetail(ObjectUtils.isEmpty(exception.getCause()) ? exception.getMessage()
                        : exception.getCause().getMessage())
                .timestamp(String.valueOf(PropertiesContext.getClientDatetime()))
                .errorDetails(errorDetails)
                .build();

        log.error("Error -> {}", errorResponse,exception);

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
            log.error("Error en buildClientErrorResponse -> {}", ex.getMessage(),ex);
        }
        return null;
    }

}

```

## src/main/java/com/nubo/operations/query/api/helpers/DateUtil.java

```java
package com.nubo.operations.query.api.helpers;

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

## src/main/java/com/nubo/operations/query/api/helpers/MapperPageUtil.java

```java
package com.nubo.operations.query.api.helpers;

import com.nubo.operations.query.api.models.dto.response.PageResponseOutDto;

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

    public static <T> PageResponseOutDto<T> pageToPageResponseOutDto(List<T> content, int page, int size,
            int totalElements) {
        return PageResponseOutDto.<T>builder()
                .content(content)
                .pageSize(size)
                .pageNumber(page)
                .totalElements((long) totalElements)
                .totalPages((int) Math.ceil((double) totalElements / size))
                .build();
    }
}

```

## src/main/java/com/nubo/operations/query/api/helpers/MapperTradeDynamicSearch.java

```java
package com.nubo.operations.query.api.helpers;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Map;
import java.util.function.Function;

import com.nubo.operations.query.api.models.entity.TradeEntity;
import com.nubo.operations.query.api.models.enums.SearchOperationEnum;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.Path;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class MapperTradeDynamicSearch {

    private enum ComparisonType {
        GREATER_THAN, GREATER_THAN_OR_EQUAL, LESS_THAN, LESS_THAN_OR_EQUAL
    }

    private static final Map<String, Function<Root<TradeEntity>, Path<?>>> FIELD_PATH_MAPPING = Map.ofEntries(
        Map.entry("id", root -> root.get("id")),
        Map.entry("matchDate", root -> root.get("matchDate")),
        Map.entry("matchId", root -> root.get("matchId")),
        Map.entry("clearingDate", root -> root.get("clearingDate")),
        Map.entry("returnClearingDate", root -> root.get("returnClearingDate")),
        Map.entry("depositoryId", root -> root.get("depository").get("id")),
        Map.entry("depositoryName", root -> root.get("depository").get("description")),
        Map.entry("countryId", root -> root.get("country").get("id")),
        Map.entry("countryName", root -> root.get("country").get("name")),
        Map.entry("countryCode", root -> root.get("country").get("code")),
        Map.entry("typeId", root -> root.get("type").get("id")),
        Map.entry("typeDescription", root -> root.get("type").get("description")),
        Map.entry("marketId", root -> root.get("market").get("id")),
        Map.entry("marketDescription", root -> root.get("market").get("description")),
        Map.entry("issuanceMarketId", root -> root.get("issuanceMarket").get("id")),
        Map.entry("issuanceMarketDescription", root -> root.get("issuanceMarket").get("description")),
        Map.entry("securityTitleId", root -> root.get("securityTitle").get("id")),
        Map.entry("securityTitleIsin", root -> root.get("securityTitle").get("isin")),
        Map.entry("securityTitleMnemonic", root -> root.get("securityTitle").get("mnemonic")),
        Map.entry("participantBuyId", root -> root.get("participantBuy").get("id")),
        Map.entry("participantBuyName", root -> root.get("participantBuy").get("name")),
        Map.entry("participantSellId", root -> root.get("participantSell").get("id")),
        Map.entry("participantSellName", root -> root.get("participantSell").get("name")),
        Map.entry("custodianBuyId", root -> root.get("custodianBuy").get("id")),
        Map.entry("custodianBuyName", root -> root.get("custodianBuy").get("name")),
        Map.entry("custodianSellId", root -> root.get("custodianSell").get("id")),
        Map.entry("custodianSellName", root -> root.get("custodianSell").get("name")),
        Map.entry("assignmentMarkBuy", root -> root.get("assignmentMarkBuy")),
        Map.entry("assignmentMarkSell", root -> root.get("assignmentMarkSell")),
        Map.entry("fractionalMarkBuy", root -> root.get("fractionalMarkBuy")),
        Map.entry("fractionalMarkSell", root -> root.get("fractionalMarkSell")),
        Map.entry("advanceStatus", root -> root.get("advanceStatus")),
        Map.entry("exitIndicatorSettlement", root -> root.get("exitIndicatorSettlement")),
        Map.entry("canceledStatus", root -> root.get("canceledStatus")),
        Map.entry("quantity", root -> root.get("quantity")),
        Map.entry("price", root -> root.get("price")),
        Map.entry("volume", root -> root.get("volume")),
        Map.entry("repurchaseRate", root -> root.get("repurchaseRate")),
        Map.entry("repurchaseAmount", root -> root.get("repurchaseAmount")),
        Map.entry("statusId", root -> root.get("status").get("id")),
        Map.entry("statusDescription", root -> root.get("status").get("description")),
        Map.entry("matchTime", root -> root.get("matchTime")),
        Map.entry("ownPositionSell", root -> root.get("ownPositionSell")),
        Map.entry("ownPositionBuy", root -> root.get("ownPositionBuy")),
        Map.entry("currencyId", root -> root.get("currency").get("id")),
        Map.entry("currencyCode", root -> root.get("currency").get("code")),
        Map.entry("currencyName", root -> root.get("currency").get("name")),
        Map.entry("tradingSystemId", root -> root.get("tradingSystem").get("id")),
        Map.entry("tradingSystemDescription", root -> root.get("tradingSystem").get("description")),
        Map.entry("tradingSessionId", root -> root.get("tradingSession").get("id")),
        Map.entry("tradingSessionDescription", root -> root.get("tradingSession").get("description")),
        Map.entry("repurchaseAgreementDate", root -> root.get("repurchaseAgreementDate")),
        Map.entry("daysToSettlement", root -> root.get("daysToSettlement")),
        Map.entry("repoRate", root -> root.get("repoRate")),
        Map.entry("repoAmount", root -> root.get("repoAmount")),
        Map.entry("fundingAmount", root -> root.get("fundingAmount")),
        Map.entry("netOutFlowTotal", root -> root.get("netOutFlowTotal")),
        Map.entry("outFlowTurnOverValue", root -> root.get("outFlowTurnOverValue")),
        Map.entry("totalNetReturn", root -> root.get("totalNetReturn")),
        Map.entry("returnTurnoverValue", root -> root.get("returnTurnoverValue")),
        Map.entry("deliveryVersusPaymentValue", root -> root.get("deliveryVersusPaymentValue")),
        Map.entry("reallocationIndicator", root -> root.get("reallocationIndicator")),
        Map.entry("businessTypeId", root -> root.get("businessType").get("id")),
        Map.entry("businessTypeDescription", root -> root.get("businessType").get("description")),
        Map.entry("marketTypeId", root -> root.get("marketType").get("id")),
        Map.entry("marketTypeDescription", root -> root.get("marketType").get("description")),
        Map.entry("originTypeId", root -> root.get("originType").get("id")),
        Map.entry("originTypeDescription", root -> root.get("originType").get("description")),
        Map.entry("settlementIndicatorOutgoing", root -> root.get("settlementIndicatorOutgoing")),
        Map.entry("settlementIndicatorReturn", root -> root.get("settlementIndicatorReturn")),
        Map.entry("resettlementIndicatorAdvance", root -> root.get("resettlementIndicatorAdvance")),
        Map.entry("specialTradeId", root -> root.get("specialTradeId")),
        Map.entry("paymentTypeId", root -> root.get("paymentType").get("id")),
        Map.entry("paymentTypeDescription", root -> root.get("paymentType").get("description")),
        Map.entry("settlementTypeId", root -> root.get("settlementType").get("id")),
        Map.entry("settlementTypeDescription", root -> root.get("settlementType").get("description")),
        Map.entry("custodianStatusId", root -> root.get("custodianStatus").get("id")),
        Map.entry("custodianStatusDescription", root -> root.get("custodianStatus").get("description")),
        Map.entry("settlementStatusId", root -> root.get("settlementStatus").get("id")),
        Map.entry("settlementStatusDescription", root -> root.get("settlementStatus").get("description")),
        Map.entry("bloquingStatusId", root -> root.get("bloquingStatus").get("id")),
        Map.entry("bloquingStatusDescription", root -> root.get("bloquingStatus").get("description")),
        Map.entry("salesGuarantee", root -> root.get("salesGuarantee")),
        Map.entry("purchaseGuarantee", root -> root.get("purchaseGuarantee")),
        Map.entry("purchasePaymentIndicator", root -> root.get("purchasePaymentIndicator")),
        Map.entry("returnIndicatorSettlement", root -> root.get("returnIndicatorSettlement"))
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
        Map.entry(SearchOperationEnum.NOT_CONTAINS, (cb, path, value) -> {
            if (path.getJavaType() == String.class) {
                return cb.notLike(cb.lower(path.as(String.class)), "%" + value.toLowerCase() + "%");
            } else {
                return cb.notLike(cb.concat("", path.as(String.class)), "%" + value + "%");
            }
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
        Map.entry(SearchOperationEnum.STARTS_WITH, (cb, path, value) -> {
            if (path.getJavaType() == String.class) {
                return cb.like(cb.lower(path.as(String.class)), value.toLowerCase() + "%");
            } else {
                return cb.like(cb.concat("", path.as(String.class)), value + "%");
            }
        }),
        Map.entry(SearchOperationEnum.ENDS_WITH, (cb, path, value) -> {
            if (path.getJavaType() == String.class) {
                return cb.like(cb.lower(path.as(String.class)), "%" + value.toLowerCase());
            } else {
                return cb.like(cb.concat("", path.as(String.class)), "%" + value);
            }
        }),
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

    public static Path<?> getTradeFieldPath(Root<TradeEntity> root, String fieldName) {
        if (fieldName == null) {
            return null;
        }
        Function<Root<TradeEntity>, Path<?>> pathFunction = FIELD_PATH_MAPPING.get(fieldName);
        if (pathFunction != null) {
            return pathFunction.apply(root);
        }
        log.warn("Campo no reconocido: {}", fieldName);
        return null;
    }

    public static Predicate buildTradeFieldPredicate(CriteriaBuilder criteriaBuilder, 
                                                    Path<?> fieldPath, 
                                                    String fieldValue, 
                                                    SearchOperationEnum operation) {
        if (criteriaBuilder == null || fieldPath == null || fieldValue == null || operation == null) {
            throw new IllegalArgumentException("Los parámetros del filtro dinámico son obligatorios");
        }
        PredicateBuilder builder = OPERATION_BUILDERS.get(operation);
        if (builder == null) {
            throw new IllegalArgumentException("Operación de búsqueda no soportada: " + operation);
        }
        return builder.build(criteriaBuilder, fieldPath, fieldValue);
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

    private static Predicate buildComparisonPredicate(CriteriaBuilder criteriaBuilder, 
                                                     Path<?> fieldPath, 
                                                     String fieldValue, 
                                                     ComparisonType comparisonType) {
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
        }
        throw new IllegalArgumentException("Tipo de campo no soportado para comparación: " + fieldType.getName());
    }
}

```

## src/main/java/com/nubo/operations/query/api/helpers/MapperUtil.java

```java
package com.nubo.operations.query.api.helpers;

import java.math.BigDecimal;
import java.util.Comparator;
import java.util.List;
import java.util.Objects;

import org.springframework.util.ObjectUtils;

import com.nubo.operations.query.api.application.util.ApplicationUtils;
import com.nubo.operations.query.api.client.operation.calculation.models.dto.response.SettleAccountsOutDto;
import com.nubo.operations.query.api.models.dto.response.AllTradeOutDto;
import com.nubo.operations.query.api.models.dto.response.AssignmentClosureOutDto;
import com.nubo.operations.query.api.models.dto.response.CalculationOutDto;
import com.nubo.operations.query.api.models.dto.response.CityOutDto;
import com.nubo.operations.query.api.models.dto.response.ClassOutDto;
import com.nubo.operations.query.api.models.dto.response.CountryOutDto;
import com.nubo.operations.query.api.models.dto.response.CurrencyOutDto;
import com.nubo.operations.query.api.models.dto.response.DepartmentOutDto;
import com.nubo.operations.query.api.models.dto.response.DepositoryOutDto;
import com.nubo.operations.query.api.models.dto.response.DirectDepositoryOutDto;
import com.nubo.operations.query.api.models.dto.response.GicsOutDto;
import com.nubo.operations.query.api.models.dto.response.IdentificationTypeOutDto;
import com.nubo.operations.query.api.models.dto.response.InvestorAccountOutDto;
import com.nubo.operations.query.api.models.dto.response.InvestorOutDto;
import com.nubo.operations.query.api.models.dto.response.MarketOutDto;
import com.nubo.operations.query.api.models.dto.response.MilaDepositoryDto;
import com.nubo.operations.query.api.models.dto.response.ParticipantAccountOutDto;
import com.nubo.operations.query.api.models.dto.response.ParticipantBankAccountOutDto;
import com.nubo.operations.query.api.models.dto.response.ParticipantOutDto;
import com.nubo.operations.query.api.models.dto.response.ParticipantShortOutDto;
import com.nubo.operations.query.api.models.dto.response.ReassignmentCorrectionOutDto;
import com.nubo.operations.query.api.models.dto.response.SecurityTitleOutDto;
import com.nubo.operations.query.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.query.api.models.dto.response.SideOutDto;
import com.nubo.operations.query.api.models.dto.response.StatusOutDto;
import com.nubo.operations.query.api.models.dto.response.TaxStatusOutDto;
import com.nubo.operations.query.api.models.dto.response.TradeCustodianOutDto;
import com.nubo.operations.query.api.models.dto.response.TradeEquityOutDto;
import com.nubo.operations.query.api.models.dto.response.TradeOutDto;
import com.nubo.operations.query.api.models.dto.response.TradeShortOutDto;
import com.nubo.operations.query.api.models.dto.response.TradingSessionOutDto;
import com.nubo.operations.query.api.models.entity.PackageDetailEntity;
import com.nubo.operations.query.api.models.dto.response.TradingSystemOutDto;
import com.nubo.operations.query.api.models.dto.response.TypeOutDto;
import com.nubo.operations.query.api.models.entity.CityEntity;
import com.nubo.operations.query.api.models.entity.ClassEntity;
import com.nubo.operations.query.api.models.entity.CountryEntity;
import com.nubo.operations.query.api.models.entity.CurrencyEntity;
import com.nubo.operations.query.api.models.entity.DepartmentEntity;
import com.nubo.operations.query.api.models.entity.DepositoryEntity;
import com.nubo.operations.query.api.models.entity.DirectDepositoryEntity;
import com.nubo.operations.query.api.models.entity.GicsEntity;
import com.nubo.operations.query.api.models.entity.IdentificationTypeEntity;
import com.nubo.operations.query.api.models.entity.InvestorAccountEntity;
import com.nubo.operations.query.api.models.entity.InvestorEntity;
import com.nubo.operations.query.api.models.entity.MarketEntity;
import com.nubo.operations.query.api.models.entity.MilaDepositoryEntity;
import com.nubo.operations.query.api.models.entity.ParticipantAccountEntity;
import com.nubo.operations.query.api.models.entity.ParticipantBankAccountEntity;
import com.nubo.operations.query.api.models.entity.ParticipantEntity;
import com.nubo.operations.query.api.models.entity.SecurityTitleEntity;
import com.nubo.operations.query.api.models.entity.SettlementCorrectionEntity;
import com.nubo.operations.query.api.models.entity.SettlementEntity;
import com.nubo.operations.query.api.models.entity.SideEntity;
import com.nubo.operations.query.api.models.entity.StatusEntity;
import com.nubo.operations.query.api.models.entity.TaxStatusEntity;
import com.nubo.operations.query.api.models.entity.TradeEntity;
import com.nubo.operations.query.api.models.entity.TradeEquityEntity;
import com.nubo.operations.query.api.models.entity.TradingSessionEntity;
import com.nubo.operations.query.api.models.entity.TradingSystemEntity;
import com.nubo.operations.query.api.models.entity.TypeEntity;
import com.nubo.operations.query.api.models.enums.CorrectionStatusEnum;

public final class MapperUtil {

    private MapperUtil() {
    }

    public static TradeOutDto tradeEntityToTradeOutDto(TradeEntity tradeEntity) {
        if (tradeEntity == null)
            return null;
        ParticipantOutDto participantSellDto = participantEntityToParticipantOutDto(tradeEntity.getParticipantSell());

        return TradeOutDto.builder()
                .id(tradeEntity.getId())
                .matchDate(tradeEntity.getMatchDate())
                .matchId(tradeEntity.getMatchId())
                .clearingDate(tradeEntity.getClearingDate())
                .returnClearingDate(tradeEntity.getReturnClearingDate())
                .country(countryEntityToCountryOutDto(tradeEntity.getCountry()))
                .type(typeEntityToTypeOutDto(tradeEntity.getType()))
                .market(marketEntityToMarketOutDto(tradeEntity.getMarket()))
                .issuanceMarket(marketEntityToMarketOutDto(tradeEntity.getIssuanceMarket()))
                .securityTitle(securityTitleEntityToSecurityTitleOutDto(tradeEntity.getSecurityTitle()))
                .participantBuy(participantEntityToParticipantOutDto(tradeEntity.getParticipantBuy()))
                .participantSell(Boolean.TRUE.equals(tradeEntity.getOwnPositionBuy()) && participantSellDto != null
                        ? participantSellDto.toBuilder().code("-").build()
                        : participantSellDto)
                .custodianBuy(null)
                .custodianSell(null)
                .assignmentMarkBuy(tradeEntity.getAssignmentMarkBuy())
                .assignmentMarkSell(tradeEntity.getAssignmentMarkSell())
                .finalAssignmentMarkBuy(tradeEntity.getFinalAssignmentMarkBuy())
                .finalAssignmentMarkSell(tradeEntity.getFinalAssignmentMarkSell())
                .fractionalMarkBuy(tradeEntity.getFractionalMarkBuy())
                .fractionalMarkSell(tradeEntity.getFractionalMarkSell())
                .advanceStatus(tradeEntity.getAdvanceStatus())
                .exitIndicatorSettlement(tradeEntity.getExitIndicatorSettlement())
                .canceledStatus(tradeEntity.getCanceledStatus())
                .quantity(tradeEntity.getQuantity())
                .price(tradeEntity.getPrice())
                .amount(calculateAmount(tradeEntity.getQuantity(), tradeEntity.getPrice()))
                .forwardPrice(tradeEntity.getForwardPrice())
                .volume(tradeEntity.getVolume())
                .repurchaseRate(tradeEntity.getRepurchaseRate())
                .repurchaseAmount(tradeEntity.getRepurchaseAmount())
                .status(statusEntityToStatusOutDto(tradeEntity.getStatus()))
                .matchTime(tradeEntity.getMatchTime())
                .ownPositionSell(tradeEntity.getOwnPositionSell())
                .ownPositionBuy(tradeEntity.getOwnPositionBuy())
                .currency(currencyEntityToCurrencyOutDto(tradeEntity.getCurrency()))
                .tradingSystem(tradingSystemEntityToTradingSystemOutDto(tradeEntity.getTradingSystem()))
                .tradingSession(tradingSessionEntityToTradingSessionOutDto(tradeEntity.getTradingSession()))
                .repurchaseAgreementDate(tradeEntity.getRepurchaseAgreementDate())
                .daysToSettlement(tradeEntity.getDaysToSettlement())
                .repoRate(tradeEntity.getRepoRate())
                .repoAmount(tradeEntity.getRepoAmount())
                .fundingAmount(tradeEntity.getFundingAmount())
                .netOutFlowTotal(tradeEntity.getNetOutFlowTotal())
                .outFlowTurnOverValue(tradeEntity.getOutFlowTurnOverValue())
                .totalNetReturn(tradeEntity.getTotalNetReturn())
                .returnTurnoverValue(tradeEntity.getReturnTurnoverValue())
                .deliveryVersusPaymentValue(tradeEntity.getDeliveryVersusPaymentValue())
                .reallocationIndicator(tradeEntity.getReallocationIndicator())
                .businessType(typeEntityToTypeOutDto(tradeEntity.getBusinessType()))
                .marketType(typeEntityToTypeOutDto(tradeEntity.getMarketType()))
                .originType(typeEntityToTypeOutDto(tradeEntity.getOriginType()))
                .settlementIndicatorOutgoing(tradeEntity.getSettlementIndicatorOutgoing())
                .settlementIndicatorReturn(tradeEntity.getSettlementIndicatorReturn())
                .resettlementIndicatorAdvance(tradeEntity.getResettlementIndicatorAdvance())
                .specialTradeId(tradeEntity.getSpecialTradeId())
                .paymentType(typeEntityToTypeOutDto(tradeEntity.getPaymentType()))
                .settlementType(typeEntityToTypeOutDto(tradeEntity.getSettlementType()))
                .custodianStatus(statusEntityToStatusOutDto(tradeEntity.getCustodianStatus()))
                .settlementStatus(statusEntityToStatusOutDto(tradeEntity.getSettlementStatus()))
                .bloquingStatus(statusEntityToStatusOutDto(tradeEntity.getBloquingStatus()))
                .purchasePaymentIndicator(tradeEntity.getPurchasePaymentIndicator())
                .returnIndicatorSettlement(tradeEntity.getReturnIndicatorSettlement())
                .sellStatus(statusEntityToStatusOutDto(tradeEntity.getSellStatus()))
                .buyStatus(statusEntityToStatusOutDto(tradeEntity.getBuyStatus()))
                .enteringFirmSell(tradeEntity.getEnteringFirmSell())
                .enteringFirmBuy(tradeEntity.getEnteringFirmBuy())
                .sourceQuoteBuyType(typeEntityToTypeOutDto(tradeEntity.getSourceQuoteBuyType()))
                .sourceQuoteSellType(typeEntityToTypeOutDto(tradeEntity.getSourceQuoteSellType()))
                .depositoryBuy(depositoryEntityToDepositoryOutDto(tradeEntity.getDepositoryBuy()))
                .depositorySell(depositoryEntityToDepositoryOutDto(tradeEntity.getDepositorySell()))
                .previousCycleStatus(statusEntityToStatusOutDto(tradeEntity.getPreviousCycleStatus()))
                .subsequentCycleStatus(statusEntityToStatusOutDto(tradeEntity.getSubsequentCycleStatus()))
                .lastModifyDate(tradeEntity.getLastModifyDate())
                .build();
    }

    public static TradeShortOutDto tradeEntityToTradeShortOutDto(TradeEntity tradeEntity) {
        if (tradeEntity == null)
            return null;

        return TradeShortOutDto.builder()
                .tradeId(tradeEntity.getId())
                .matchDate(tradeEntity.getMatchDate())
                .matchId(tradeEntity.getMatchId())
                .clearingDate(tradeEntity.getClearingDate())
                .sellStatus(statusEntityToStatusOutDto(tradeEntity.getSellStatus()))
                .buyStatus(statusEntityToStatusOutDto(tradeEntity.getBuyStatus()))
                .build();
    }

    private static BigDecimal calculateAmount(BigDecimal quantity, BigDecimal price) {
        if (quantity == null || price == null) {
            return BigDecimal.ZERO;
        }
        return quantity.multiply(price);
    }

    public static TradeCustodianOutDto tradeEntityToTradeCustodianOutDto(TradeEntity tradeEntity) {
        if (tradeEntity == null)
            return null;
        ParticipantShortOutDto participantSellDto = participantEntityToParticipantShortOutDto(
                tradeEntity.getParticipantSell());

        return TradeCustodianOutDto.builder()
                .id(tradeEntity.getId())
                .matchDate(tradeEntity.getMatchDate())
                .matchId(tradeEntity.getMatchId())
                .clearingDate(tradeEntity.getClearingDate())
                .returnClearingDate(tradeEntity.getReturnClearingDate())
                .countryCode(tradeEntity.getCountry() != null ? tradeEntity.getCountry().getCode() : null)
                .typeDescription(tradeEntity.getType() != null ? tradeEntity.getType().getDescription() : null)
                .securityTitleMnemonic(
                        tradeEntity.getSecurityTitle() != null ? tradeEntity.getSecurityTitle().getMnemonic() : null)
                .participantBuy(participantEntityToParticipantShortOutDto(tradeEntity.getParticipantBuy()))
                .participantSell(
                        Boolean.TRUE.equals(tradeEntity.getOwnPositionBuy()) && participantSellDto != null
                                ? participantSellDto.toBuilder().code("-").build()
                                : participantSellDto)
                .custodianBuy(null)
                .custodianSell(null)
                .status(statusEntityToStatusOutDto(tradeEntity.getStatus()))
                .sellStatus(statusEntityToStatusOutDto(tradeEntity.getSellStatus()))
                .buyStatus(statusEntityToStatusOutDto(tradeEntity.getBuyStatus()))
                .sourceQuoteBuyType(typeEntityToTypeOutDto(tradeEntity.getSourceQuoteBuyType()))
                .sourceQuoteSellType(typeEntityToTypeOutDto(tradeEntity.getSourceQuoteSellType()))
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

    public static SecurityTitleOutDto securityTitleEntityToSecurityTitleOutDto(
            SecurityTitleEntity securityTitleEntity) {
        if (ObjectUtils.isEmpty(securityTitleEntity))
            return null;
        return SecurityTitleOutDto.builder()
                .id(securityTitleEntity.getId())
                .market(marketEntityToMarketOutDto(securityTitleEntity.getMarket()))
                .equityCode(securityTitleEntity.getEquityCode())
                .mnemonic(securityTitleEntity.getMnemonic())
                .isin(securityTitleEntity.getIsin())
                .cfi(securityTitleEntity.getCfi())
                .currencyId(securityTitleEntity.getCurrencyId())
                .settlementPeriod(securityTitleEntity.getSettlementPeriod())
                .listingDate(securityTitleEntity.getListingDate())
                .delistingDate(securityTitleEntity.getDelistingDate())
                .parent(securityTitleEntity.getParent())
                .parentId(securityTitleEntity.getParentId())
                .status(statusEntityToStatusOutDto(securityTitleEntity.getStatus()))
                .issuerName(ObjectUtils.isEmpty(securityTitleEntity.getIssuer()) ? null
                        : securityTitleEntity.getIssuer().getName())
                .countryId(securityTitleEntity.getCountryId())
                .amountIssued(securityTitleEntity.getAmountIssued())
                .clazz(classEntityToClassOutDto(securityTitleEntity.getClazz()))
                .segmentId(securityTitleEntity.getSegmentId())
                .category(securityTitleEntity.getCategory())
                .depository(depositoryEntityToDepositoryOutDto(securityTitleEntity.getDepository()))
                .punishmentRepo(securityTitleEntity.getPunishmentRepo())
                .regulatoryCode(securityTitleEntity.getRegulatoryCode())
                .build();
    }

    public static ParticipantOutDto participantEntityToParticipantOutDto(ParticipantEntity participantEntity) {
        if (ObjectUtils.isEmpty(participantEntity))
            return null;
        return ParticipantOutDto.builder()
                .id(participantEntity.getId())
                .code(participantEntity.getCode())
                .documentNumber(participantEntity.getDocumentNumber())
                .identificationType(
                        identificationTypeEntityToIdentificationTypeOutDto(participantEntity.getIdentificationType()))
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
                .build();
    }

    public static ParticipantShortOutDto participantEntityToParticipantShortOutDto(
            ParticipantEntity participantEntity) {
        if (ObjectUtils.isEmpty(participantEntity))
            return null;
        return ParticipantShortOutDto.builder()
                .id(participantEntity.getId())
                .code(participantEntity.getCode())
                .shortName(participantEntity.getShortName())
                .masterAccount(participantEntity.getMasterAccount())
                .documentNumber(participantEntity.getDocumentNumber())
                .identificationType(
                        identificationTypeEntityToIdentificationTypeOutDto(participantEntity.getIdentificationType()))
                .build();
    }

    public static TradeEquityOutDto tradeEquityEntityToTradeEquityOutDto(TradeEquityEntity tradeEquityEntity) {
        return TradeEquityOutDto.builder()
                .tradeId(tradeEquityEntity.getTradeId())
                .foreignBrokerBuy(tradeEquityEntity.getForeignBrokerBuy())
                .foreignBrokerSell(tradeEquityEntity.getForeignBrokerSell())
                .directDepositorBuy(tradeEquityEntity.getDirectDepositorBuy())
                .directDepositorSell(tradeEquityEntity.getDirectDepositorSell())
                .sourceIndicatorBuy(tradeEquityEntity.getSourceIndicatorBuy())
                .sourceIndicatorSell(tradeEquityEntity.getSourceIndicatorSell())
                .responsibleTradeBuy(tradeEquityEntity.getResponsibleTradeBuy())
                .responsibleTradeSell(tradeEquityEntity.getResponsibleTradeSell())
                .referenceBuy(tradeEquityEntity.getReferenceBuy())
                .referenceSell(tradeEquityEntity.getReferenceSell())
                .orderBookId(tradeEquityEntity.getOrderBookId())
                .prearrangedOperation(tradeEquityEntity.getPrearrangedOperation())
                .aggressiveTip(tradeEquityEntity.getAggressiveTip())
                .exdividendPeriod(tradeEquityEntity.getExdividendPeriod())
                .build();
    }

    public static SettlementOutDto settlementEntityToSettlementOutDto(SettlementEntity settlementEntity) {
        return SettlementOutDto.builder()
                .tradeId(settlementEntity.getTrade().getId())
                .fraction(settlementEntity.getFraction())
                .side(sideEntityToSideOutDto(settlementEntity.getSide()))
                .investor(investorEntityToInvestorOutDto(settlementEntity.getInvestor()))// RTBOF-6147
                .investorAccount(investorAccountEntityToInvestorAccountOutDto(settlementEntity.getInvestorAccount()))
                .participantAccount(
                        participantAccountEntityToParticipantAccountOutDto(settlementEntity.getParticipantAccount()))
                .fractionQuantity(settlementEntity.getFractionQuantity())
                .fractionVolume(settlementEntity.getFractionVolume())
                .fiduciarySpecialist(settlementEntity.getFiduciarySpecialist())
                .commissionPercentage(settlementEntity.getCommissionPercentage())
                .commissionAmount(settlementEntity.getCommissionAmount())
                .valTax(settlementEntity.getValTax())
                .valTaxAmount(settlementEntity.getValTaxAmount())
                .withholdingTax(settlementEntity.getWithholdingTax())
                .withholdingTaxAmount(settlementEntity.getWithholdingTaxAmount())
                .netAmount(settlementEntity.getNetAmount())
                .transferValue(settlementEntity.getTransferValue())
                .issuedReceipt(settlementEntity.getIssuedReceipt())
                .issuedReceiptNumber(settlementEntity.getIssuedReceiptNumber())
                .referenceAllocId(settlementEntity.getReferenceAllocId())
                .repoAmount(settlementEntity.getRepoAmount())
                .fundingAmount(settlementEntity.getFundingAmount())
                .netOutFlowTotal(settlementEntity.getNetOutFlowTotal())
                .outFlowTurnoverValue(settlementEntity.getOutFlowTurnoverValue())
                .returnTurnoverValue(settlementEntity.getReturnTurnoverValue())
                .deliveryVersusPaymentValue(settlementEntity.getDeliveryVersusPaymentValue())
                .settlementAmount(settlementEntity.getSettlementAmount())
                .tradingSystem(tradingSystemEntityToTradingSystemOutDto(settlementEntity.getTradingSystem()))
                .status(statusEntityToStatusOutDto(settlementEntity.getStatus()))
                .brokerageService(settlementEntity.getBrokerageService())
                .custodianId(ObjectUtils.isEmpty(settlementEntity.getCustodian()) ? null
                        : settlementEntity.getCustodian().getId())
                .custodian(participantEntityToParticipantOutDto(settlementEntity.getCustodian()))
                .custodianStatus(statusEntityToStatusOutDto(settlementEntity.getCustodianStatus()))
                .bankAccountId(settlementEntity.getBankAccountId())
                .reference(settlementEntity.getReference())
                .capitalGainValue(settlementEntity.getCapitalGainValue())
                .disbursementValue(settlementEntity.getDisbursementValue())
                .sourceQuoteType(typeEntityToTypeOutDto(settlementEntity.getSourceQuoteType()))
                .ficAdministrator(
                        participantEntityToParticipantOutDto(settlementEntity.getFicAdministrator()))
                .directDepositor(directDepositoryEntityToDirectDepositoryOutDto(settlementEntity.getDirectDepositor()))
                .participantBankAccount(participantBankAccountEntityToParticipantBankAccountOutDto(
                        settlementEntity.getParticipantBankAccount()))
                .cashAccount(settlementEntity.getCashAccount())
                .masterAccount(settlementEntity.getMasterAccountIndicator())
                .packageCode(latestPackageCode(settlementEntity))
                .milaDirectDepositor(
                        milaDepositoryEntityToMilaDepositoryDto(settlementEntity.getMilaDirectDepositor()))
                .referencePackage(settlementEntity.getReferencePackage())
                .build();
    }

    private static String latestPackageCode(SettlementEntity settlement) {
        if (settlement.getCustodian() == null || settlement.getPackageDetails() == null) {
            return null;
        }

        // Rejected details remain in PACKAGE_DETAIL when a fraction is repackaged.
        // Select by package creation order, not the unspecified collection order
        // or LAST_MODIFY_DATE (which also changes when an old package is rejected).
        Comparator<PackageDetailEntity> packageOrder = Comparator
                .comparing(PackageDetailEntity::getPackageDate, Comparator.nullsFirst(Comparator.naturalOrder()))
                .thenComparing(PackageDetailEntity::getSequence, Comparator.nullsFirst(Comparator.naturalOrder()))
                .thenComparing(PackageDetailEntity::getPackageCustodianId,
                        Comparator.nullsFirst(Comparator.naturalOrder()));

        return settlement.getPackageDetails().stream()
                .filter(Objects::nonNull)
                .filter(detail -> Objects.equals(detail.getTradeId(), settlement.getTrade().getId()))
                .filter(detail -> settlement.getSide() != null
                        && Objects.equals(detail.getSideId(), settlement.getSide().getId()))
                .filter(detail -> Objects.equals(detail.getFraction(), settlement.getFraction()))
                .filter(detail -> Objects.equals(detail.getUniqueFractionId(), settlement.getUniqueFractionId()))
                .filter(detail -> Objects.equals(detail.getCustodianId(), settlement.getCustodian().getId()))
                .max(packageOrder)
                .map(PackageDetailEntity::getPackageNumber)
                .orElse(null);
    }

    public static InvestorOutDto investorEntityToInvestorOutDto(InvestorEntity investorEntity) {
        if (ObjectUtils.isEmpty(investorEntity))
            return null;
        return InvestorOutDto.builder()
                .id(investorEntity.getId())
                .code(investorEntity.getCode())
                .firstName(investorEntity.getFirstName())
                .lastName(investorEntity.getLastName())
                .companyName(investorEntity.getCompanyName())
                .type(typeEntityToTypeOutDto(investorEntity.getType()))
                .status(statusEntityToStatusOutDto(investorEntity.getStatus()))
                .country(countryEntityToCountryOutDto(investorEntity.getCountry()))
                .documentNumber(investorEntity.getDocumentNumber())
                .identificationType(
                        identificationTypeEntityToIdentificationTypeOutDto(investorEntity.getIdentificationType()))
                .nationality(investorEntity.getNationality())
                .clearinghouseCode(investorEntity.getClearinghouseCode())
                .gics(gicsEntityToGicsOutDto(investorEntity.getGics()))
                .moneyLaunderingFlag(investorEntity.getMoneyLaunderingFlag())
                .taxStatus(taxStatusEntityToTaxStatusOutDto(investorEntity.getTaxStatus()))
                .build();
    }

    public static InvestorAccountOutDto investorAccountEntityToInvestorAccountOutDto(
            InvestorAccountEntity investorAccountEntity) {
        if (ObjectUtils.isEmpty(investorAccountEntity))
            return null;
        return InvestorAccountOutDto.builder()
                .id(investorAccountEntity.getId())
                .investor(investorEntityToInvestorOutDto(investorAccountEntity.getInvestor()))
                .accountNumber(investorAccountEntity.getAccountNumber())
                .status(statusEntityToStatusOutDto(investorAccountEntity.getStatus()))
                .type(typeEntityToTypeOutDto(investorAccountEntity.getType()))
                .originType(typeEntityToTypeOutDto(investorAccountEntity.getOriginType()))
                .depository(depositoryEntityToDepositoryOutDto(investorAccountEntity.getDepository()))
                .participant(participantEntityToParticipantShortOutDto(investorAccountEntity.getParticipant()))
                .accountName(investorAccountEntity.getAccountName())
                .taxExemp(investorAccountEntity.getTaxExemp())
                .build();
    }

    public static ParticipantAccountOutDto participantAccountEntityToParticipantAccountOutDto(
            ParticipantAccountEntity participantAccountEntity) {
        if (ObjectUtils.isEmpty(participantAccountEntity))
            return null;
        return ParticipantAccountOutDto.builder()
                .id(participantAccountEntity.getId())
                .participant(
                        participantEntityToParticipantShortOutDto(participantAccountEntity.getParticipant()))
                .accountNumber(participantAccountEntity.getAccountNumber())
                .status(statusEntityToStatusOutDto(participantAccountEntity.getStatus()))
                .type(typeEntityToTypeOutDto(participantAccountEntity.getType()))
                .originType(typeEntityToTypeOutDto(participantAccountEntity.getOriginType()))
                .taxExemp(participantAccountEntity.getTaxExemp())
                .build();
    }

    public static DepositoryOutDto depositoryEntityToDepositoryOutDto(DepositoryEntity depositoryEntity) {
        if (ObjectUtils.isEmpty(depositoryEntity))
            return null;
        return DepositoryOutDto.builder()
                .id(depositoryEntity.getId())
                .description(depositoryEntity.getDescription())
                .build();
    }

    public static MarketOutDto marketEntityToMarketOutDto(MarketEntity marketEntity) {
        if (ObjectUtils.isEmpty(marketEntity))
            return null;
        return MarketOutDto.builder()
                .id(marketEntity.getId())
                .description(marketEntity.getDescription())
                .category(marketEntity.getCategory())
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

    public static SideOutDto sideEntityToSideOutDto(SideEntity sideEntity) {
        if (ObjectUtils.isEmpty(sideEntity))
            return null;
        return SideOutDto.builder()
                .id(sideEntity.getId())
                .description(sideEntity.getDescription())
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

    public static CityOutDto cityEntityToCityOutDto(CityEntity cityEntity) {
        if (ObjectUtils.isEmpty(cityEntity))
            return null;
        return CityOutDto.builder()
                .id(cityEntity.getId())
                .description(cityEntity.getDescription())
                .build();
    }

    public static GicsOutDto gicsEntityToGicsOutDto(GicsEntity gicsEntity) {
        if (ObjectUtils.isEmpty(gicsEntity))
            return null;
        return GicsOutDto.builder()
                .id(gicsEntity.getId())
                .description(gicsEntity.getDescription())
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

    public static TradingSessionOutDto tradingSessionEntityToTradingSessionOutDto(
            TradingSessionEntity tradingSessionEntity) {
        if (ObjectUtils.isEmpty(tradingSessionEntity))
            return null;
        return TradingSessionOutDto.builder()
                .id(tradingSessionEntity.getId())
                .description(tradingSessionEntity.getDescription())
                .build();
    }

    public static TradingSystemOutDto tradingSystemEntityToTradingSystemOutDto(
            TradingSystemEntity tradingSystemEntity) {
        if (ObjectUtils.isEmpty(tradingSystemEntity))
            return null;
        return TradingSystemOutDto.builder()
                .id(tradingSystemEntity.getId())
                .description(tradingSystemEntity.getDescription())
                .build();
    }

    public static IdentificationTypeOutDto identificationTypeEntityToIdentificationTypeOutDto(
            IdentificationTypeEntity identificationTypeEntity) {
        if (ObjectUtils.isEmpty(identificationTypeEntity))
            return null;
        return IdentificationTypeOutDto.builder()
                .id(identificationTypeEntity.getId())
                .description(identificationTypeEntity.getDescription())
                .code(identificationTypeEntity.getCode())
                .build();
    }

    public static AllTradeOutDto tradeEntityToAllTradeOutDto(
            TradeEntity tradeEntity, TradeEquityEntity tradeEquityEntity, List<SettlementEntity> settlementEntityList) {
        AllTradeOutDto allTradeOutDto = AllTradeOutDto.builder()
                .trade(tradeEntity == null
                        ? new TradeOutDto()
                        : tradeEntityToTradeOutDto(tradeEntity))
                .tradeEquity(tradeEquityEntity == null
                        ? new TradeEquityOutDto()
                        : tradeEquityEntityToTradeEquityOutDto(tradeEquityEntity))
                .settlement(settlementEntityList.stream()
                        .map(MapperUtil::settlementEntityToSettlementOutDto)
                        .toList())
                .build();
        TradeOutDto tradeOutDto = allTradeOutDto.getTrade();
        TradeEquityOutDto tradeEquityOutDto = allTradeOutDto.getTradeEquity();
        tradeOutDto.setTraderBuy(ApplicationUtils.concatNullable(tradeOutDto.getEnteringFirmBuy(),
                tradeEquityOutDto.getForeignBrokerBuy()));
        tradeOutDto.setTraderSell(ApplicationUtils.concatNullable(tradeOutDto.getEnteringFirmSell(),
                tradeEquityOutDto.getForeignBrokerSell()));
        allTradeOutDto.setTrade(tradeOutDto);

        return allTradeOutDto;
    }

    public static CalculationOutDto settleAccountsOutDtoToCalculationOutDto(SettleAccountsOutDto settleAccountsOutDto) {
        return CalculationOutDto.builder()
                .amount(settleAccountsOutDto.getAmount())
                .commissionAmount(settleAccountsOutDto.getCommissionAmount())
                .netAmount(settleAccountsOutDto.getNetAmount())
                .transferValue(settleAccountsOutDto.getTransferValue())
                .returnAmount(settleAccountsOutDto.getReturnTurnoverValue())
                .valTaxAmount(settleAccountsOutDto.getValTaxAmount())
                .build();
    }

    public static ClassOutDto classEntityToClassOutDto(ClassEntity classEntity) {
        if (ObjectUtils.isEmpty(classEntity))
            return null;
        return ClassOutDto.builder()
                .id(classEntity.getId())
                .description(classEntity.getDescription())
                .category(classEntity.getCategory())
                .build();
    }

    public static ParticipantBankAccountOutDto participantBankAccountEntityToParticipantBankAccountOutDto(
            ParticipantBankAccountEntity participantBankAccountEntity) {
        if (ObjectUtils.isEmpty(participantBankAccountEntity))
            return null;
        return ParticipantBankAccountOutDto.builder()
                .id(participantBankAccountEntity.getId())
                .bankId(participantBankAccountEntity.getBankId())
                .participantId(participantBankAccountEntity.getParticipantId())
                .bankAccount(participantBankAccountEntity.getBankAccount())
                .principal(participantBankAccountEntity.getPrincipal())
                .build();
    }

    public static AssignmentClosureOutDto buildAssignmentClosureOutDto(TradeEntity tradeEntity,
            ParticipantEntity participantEntity, SideEntity sideEntity) {
        return AssignmentClosureOutDto.builder()
                .tradeId(tradeEntity.getId())
                .matchDate(tradeEntity.getMatchDate())
                .matchId(tradeEntity.getMatchId())
                .clearingDate(tradeEntity.getClearingDate())
                .side(sideEntityToSideOutDto(sideEntity))
                .participant(participantEntityToParticipantOutDto(participantEntity))
                .build();
    }

    public static StatusOutDto mapCorrectionStatusToDto(CorrectionStatusEnum correctionStatus) {
        return StatusOutDto.builder()
                .id(correctionStatus.getId())
                .category(correctionStatus.getCategory())
                .description(correctionStatus.getDescription())
                .shortName(correctionStatus.getShortName())
                .build();
    }

    public static ReassignmentCorrectionOutDto mergeReassignmentCorrections(
            SettlementCorrectionEntity initialEntity, SettlementCorrectionEntity finalEntity) {
        SettlementCorrectionEntity baseEntity = ObjectUtils.isEmpty(initialEntity) ? finalEntity : initialEntity;
        if (initialEntity == null && finalEntity == null) {
            return null;
        }

        return ReassignmentCorrectionOutDto.builder()
                .trade(tradeEntityToTradeShortOutDto(baseEntity.getTrade()))
                .fraction(baseEntity.getFraction())
                .side(sideEntityToSideOutDto(baseEntity.getSide()))
                .requestDate(baseEntity.getRequestDate())
                .requestTime(baseEntity.getRequestTime())
                .initialParticipantAccountNumber(ObjectUtils.isEmpty(initialEntity.getParticipantAccount())
                        ? null
                        : participantAccountEntityToParticipantAccountOutDto(initialEntity.getParticipantAccount()))
                .initialInvestorAccountNumber(ObjectUtils.isEmpty(initialEntity.getInvestorAccount())
                        ? null
                        : investorAccountEntityToInvestorAccountOutDto(initialEntity.getInvestorAccount()))
                .finalParticipantAccountNumber(ObjectUtils.isEmpty(finalEntity.getParticipantAccount())
                        ? null
                        : participantAccountEntityToParticipantAccountOutDto(finalEntity.getParticipantAccount()))
                .finalInvestorAccountNumber(ObjectUtils.isEmpty(finalEntity.getInvestorAccount())
                        ? null
                        : investorAccountEntityToInvestorAccountOutDto(finalEntity.getInvestorAccount()))
                .processType(ObjectUtils.isEmpty(finalEntity)
                        ? null
                        : typeEntityToTypeOutDto(finalEntity.getProcessType()))
                .detail(ObjectUtils.isEmpty(finalEntity) ? null : finalEntity.getDetail())
                .correctionNumber(ObjectUtils.isEmpty(finalEntity) ? null : finalEntity.getCorrectionNumber())
                .status(ObjectUtils.isEmpty(finalEntity) ? null : statusEntityToStatusOutDto(finalEntity.getStatus()))
                .build();
    }

    public static DirectDepositoryOutDto directDepositoryEntityToDirectDepositoryOutDto(
            DirectDepositoryEntity directDepositoryEntity) {
        if (ObjectUtils.isEmpty(directDepositoryEntity)) {
            return null;
        }
        return DirectDepositoryOutDto.builder()
                .id(directDepositoryEntity.getId())
                .participant(participantEntityToParticipantOutDto(directDepositoryEntity.getParticipant()))
                .depository(depositoryEntityToDepositoryOutDto(directDepositoryEntity.getDepository()))
                .directDepositoryNumber(directDepositoryEntity.getDirectDepositoryNumber())
                .crccCompensatorCode(directDepositoryEntity.getCrccCompensatorCode())
                .crccCustodianCode(directDepositoryEntity.getCrccCustodianCode())
                .crccNegotiatorCode(directDepositoryEntity.getCrccCompensatorCode())
                .build();
    }

    public static MilaDepositoryDto milaDepositoryEntityToMilaDepositoryDto(MilaDepositoryEntity milaDepositoryEntity) {
        if (milaDepositoryEntity == null) {
            return null;
        }
        return MilaDepositoryDto.builder()
                .id(milaDepositoryEntity.getId())
                .code(milaDepositoryEntity.getCode())
                .identificationTypeId(milaDepositoryEntity.getIdentificationTypeId())
                .documentNumber(milaDepositoryEntity.getDocumentNumber())
                .directDepositoryNumber(milaDepositoryEntity.getDirectDepositoryNumber())
                .build();
    }

}

```

## src/main/java/com/nubo/operations/query/api/helpers/PackageCustodianDynamicSearchMapper.java

```java
package com.nubo.operations.query.api.helpers;

import com.nubo.operations.query.api.models.entity.PackageCustodianEntity;
import com.nubo.operations.query.api.models.entity.SettlementEntity;
import com.nubo.operations.query.api.models.enums.SearchOperationEnum;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.Path;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import lombok.extern.slf4j.Slf4j;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Map;
import java.util.function.Function;

@Slf4j
public class PackageCustodianDynamicSearchMapper {

    private static final String TRADE_FIELD = "trade";
    private static final String CUSTODIAN_FIELD = "custodian";
    private static final String INVESTOR_FIELD = "investor";
    private static final String ID_FIELD = "id";
    private static final String NAME_FIELD = "name";
    private static final String CODE_FIELD = "code";

    private enum ComparisonType {
        GREATER_THAN, GREATER_THAN_OR_EQUAL, LESS_THAN, LESS_THAN_OR_EQUAL
    }

    private static final Map<String, Function<Root<PackageCustodianEntity>, Path<?>>> FIELD_PATH_MAPPING = Map.ofEntries(
        Map.entry("tradeId", root -> root.get(TRADE_FIELD).get(ID_FIELD)),
        Map.entry("fraction", root -> root.get("fraction")),
        Map.entry("fiduciarySpecialist", root -> root.get("fiduciarySpecialist")),
        Map.entry("reference", root -> root.get("reference")),
        Map.entry("fractionQuantity", root -> root.get("fractionQuantity")),
        Map.entry("commissionPercentage", root -> root.get("commissionPercentage")),
        Map.entry("commissionAmount", root -> root.get("commissionAmount")),
        Map.entry("valTaxAmount", root -> root.get("valTaxAmount")),
        Map.entry("netAmount", root -> root.get("netAmount")),
        Map.entry("amount", root -> root.get("netAmount")), 
        Map.entry("settlementAmount", root -> root.get("settlementAmount")),
        Map.entry("transferValue", root -> root.get("transferValue")),
        Map.entry("custodianId", root -> root.get(CUSTODIAN_FIELD).get(ID_FIELD)),
        Map.entry("custodianName", root -> root.get(CUSTODIAN_FIELD).get(NAME_FIELD)),
        Map.entry("custodianCode", root -> root.get(CUSTODIAN_FIELD).get(CODE_FIELD)),
        Map.entry("masterAccount", root -> root.get("participantAccount").get("participant").get("masterAccount")),
        Map.entry("investorId", root -> root.get(INVESTOR_FIELD).get(ID_FIELD)),
        Map.entry("investorFirstName", root -> root.get(INVESTOR_FIELD).get("firstName")), // legacy — ver pendientes.md
        Map.entry("investorAccountName", root -> root.get("investorAccount").get("accountName")),
        Map.entry("investorLastName", root -> root.get(INVESTOR_FIELD).get("lastName")),
        Map.entry("investorCompanyName", root -> root.get(INVESTOR_FIELD).get("companyName")),
        Map.entry("investorDocumentNumber", root -> root.get(INVESTOR_FIELD).get("documentNumber")),
        Map.entry("investorAccountNumber", root -> root.get("investorAccount").get("accountNumber")),
        Map.entry("tradeStatusId", root -> root.get(TRADE_FIELD).get("status").get(ID_FIELD)),
        Map.entry("tradeCanceledStatus", root -> root.get(TRADE_FIELD).get("canceledStatus")),
        Map.entry("tradeSpecialTradeId", root -> root.get(TRADE_FIELD).get("specialTradeId")),
        Map.entry("sideId", root -> root.get("side").get(ID_FIELD)),
        Map.entry("statusId", root -> root.get("status").get(ID_FIELD)),
        Map.entry("fractionVolume", root -> root.get("fractionVolume")),
        Map.entry("fundingAmount", root -> root.get("fundingAmount")),
        Map.entry("repoAmount", root -> root.get("repoAmount"))
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
                // Para campos numéricos, usar conversión directa a string con CONCAT
                return cb.like(cb.concat("", path.as(String.class)), "%" + value + "%");
            }
        }),
        Map.entry(SearchOperationEnum.NOT_CONTAINS, (cb, path, value) -> {
            if (path.getJavaType() == String.class) {
                return cb.notLike(cb.lower(path.as(String.class)), "%" + value.toLowerCase() + "%");
            } else {
                // Para campos numéricos, usar conversión directa a string con CONCAT
                return cb.notLike(cb.concat("", path.as(String.class)), "%" + value + "%");
            }
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
        Map.entry(SearchOperationEnum.STARTS_WITH, (cb, path, value) -> {
            if (path.getJavaType() == String.class) {
                return cb.like(cb.lower(path.as(String.class)), value.toLowerCase() + "%");
            } else {
                // Para campos numéricos, usar conversión directa a string con CONCAT
                return cb.like(cb.concat("", path.as(String.class)), value + "%");
            }
        }),
        Map.entry(SearchOperationEnum.ENDS_WITH, (cb, path, value) -> {
            if (path.getJavaType() == String.class) {
                return cb.like(cb.lower(path.as(String.class)), "%" + value.toLowerCase());
            } else {
                // Para campos numéricos, usar conversión directa a string con CONCAT
                return cb.like(cb.concat("", path.as(String.class)), "%" + value);
            }
        }),
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

    public static Path<?> getSettlementFieldPath(Root<PackageCustodianEntity> root, String fieldName) {
        if (fieldName == null) {
            return null;
        }
        Function<Root<PackageCustodianEntity>, Path<?>> pathFunction = FIELD_PATH_MAPPING.get(fieldName);
        if (pathFunction != null) {
            return pathFunction.apply(root);
        }
        log.warn("Campo no reconocido en Settlement: {}", fieldName);
        return null;
    }

    public static Predicate buildSettlementFieldPredicate(CriteriaBuilder criteriaBuilder, 
                                                         Path<?> fieldPath, 
                                                         String fieldValue, 
                                                         SearchOperationEnum operation) {
        if (criteriaBuilder == null || fieldPath == null || fieldValue == null || operation == null) {
            throw new IllegalArgumentException("Los parámetros del filtro dinámico son obligatorios");
        }
        PredicateBuilder builder = OPERATION_BUILDERS.get(operation);
        if (builder == null) {
            throw new IllegalArgumentException("Operación de búsqueda no soportada: " + operation);
        }
        return builder.build(criteriaBuilder, fieldPath, fieldValue);
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

    private static Predicate buildComparisonPredicate(CriteriaBuilder criteriaBuilder, 
                                                     Path<?> fieldPath, 
                                                     String fieldValue, 
                                                     ComparisonType comparisonType) {
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
        }
        throw new IllegalArgumentException("Tipo de campo no soportado para comparación: " + fieldType.getName());
    }
}

```

## src/main/java/com/nubo/operations/query/api/helpers/PackageCustodianMapper.java

```java
package com.nubo.operations.query.api.helpers;

import org.springframework.util.ObjectUtils;

import com.nubo.operations.query.api.models.dto.response.ClassOutDto;
import com.nubo.operations.query.api.models.dto.response.CountryOutDto;
import com.nubo.operations.query.api.models.dto.response.CurrencyOutDto;
import com.nubo.operations.query.api.models.dto.response.DepositoryOutDto;
import com.nubo.operations.query.api.models.dto.response.GicsOutDto;
import com.nubo.operations.query.api.models.dto.response.IdentificationTypeOutDto;
import com.nubo.operations.query.api.models.dto.response.InvestorAccountOutDto;
import com.nubo.operations.query.api.models.dto.response.InvestorOutDto;
import com.nubo.operations.query.api.models.dto.response.MarketOutDto;
import com.nubo.operations.query.api.models.dto.response.PackageCustodianOutDto;
import com.nubo.operations.query.api.models.dto.response.ParticipantOutDto;
import com.nubo.operations.query.api.models.dto.response.SecurityTitleOutDto;
import com.nubo.operations.query.api.models.dto.response.SideOutDto;
import com.nubo.operations.query.api.models.dto.response.StatusOutDto;
import com.nubo.operations.query.api.models.dto.response.TaxStatusOutDto;
import com.nubo.operations.query.api.models.dto.response.TypeOutDto;
import com.nubo.operations.query.api.models.entity.ClassEntity;
import com.nubo.operations.query.api.models.entity.CountryEntity;
import com.nubo.operations.query.api.models.entity.CurrencyEntity;
import com.nubo.operations.query.api.models.entity.DepositoryEntity;
import com.nubo.operations.query.api.models.entity.GicsEntity;
import com.nubo.operations.query.api.models.entity.IdentificationTypeEntity;
import com.nubo.operations.query.api.models.entity.InvestorAccountEntity;
import com.nubo.operations.query.api.models.entity.InvestorEntity;
import com.nubo.operations.query.api.models.entity.MarketEntity;
import com.nubo.operations.query.api.models.entity.PackageCustodianEntity;
import com.nubo.operations.query.api.models.entity.ParticipantEntity;
import com.nubo.operations.query.api.models.entity.SecurityTitleEntity;
import com.nubo.operations.query.api.models.entity.SideEntity;
import com.nubo.operations.query.api.models.entity.StatusEntity;
import com.nubo.operations.query.api.models.entity.TaxStatusEntity;
import com.nubo.operations.query.api.models.entity.TypeEntity;

public final class PackageCustodianMapper {

    private PackageCustodianMapper() {
    }

    public static PackageCustodianOutDto toDto(PackageCustodianEntity packageCustodianEntity) {
        if (ObjectUtils.isEmpty(packageCustodianEntity)) return null;
        return PackageCustodianOutDto.builder()
                .packageCustodianId(packageCustodianEntity.getPackageCustodianId())
                .packageDate(packageCustodianEntity.getPackageDate())
                .market(packageCustodianEntity.getMarket() != null
                        ? marketEntityToMarketOutDto(packageCustodianEntity.getMarket())
                        : null)
                .participantCode(packageCustodianEntity.getParticipantCode())
                .packageNumber(packageCustodianEntity.getPackageNumber())
                .side(packageCustodianEntity.getSide() != null
                        ? sideEntityToSideOutDto(packageCustodianEntity.getSide())
                        : null)
                .investor(packageCustodianEntity.getInvestor() != null
                        ? investorEntityToInvestorOutDto(packageCustodianEntity.getInvestor())
                        : null)
                .participant(packageCustodianEntity.getParticipant() != null
                        ? participantEntityToParticipantOutDto(packageCustodianEntity.getParticipant())
                        : null)
                .investorAccount(packageCustodianEntity.getInvestorAccount() != null
                        ? investorAccountEntityToInvestorAccountOutDto(packageCustodianEntity.getInvestorAccount())
                        : null)
                .securityTitle(packageCustodianEntity.getSecurityTitle() != null
                        ? securityTitleEntityToSecurityTitleOutDto(packageCustodianEntity.getSecurityTitle())
                        : null)
                .type(packageCustodianEntity.getType() != null
                        ? typeEntityToTypeOutDto(packageCustodianEntity.getType())
                        : null)
                .depository(packageCustodianEntity.getDepository() != null
                        ? depositoryEntityToDepositoryOutDto(packageCustodianEntity.getDepository())
                        : null)
                .clearingDate(packageCustodianEntity.getClearingDate())
                .returnClearingDate(packageCustodianEntity.getReturnClearingDate())
                .packageStatus(packageCustodianEntity.getPackageStatus() != null
                        ? statusEntityToStatusOutDto(packageCustodianEntity.getPackageStatus())
                        : null)
                .custodian(packageCustodianEntity.getCustodian() != null
                        ? participantEntityToParticipantOutDto(packageCustodianEntity.getCustodian())
                        : null)
                .ficAdministrator(packageCustodianEntity.getFicAdministrator() != null
                        ? participantEntityToParticipantOutDto(packageCustodianEntity.getFicAdministrator())
                        : null)
                .totalFractionQuantity(packageCustodianEntity.getTotalFractionQuantity())
                .averagePrice(packageCustodianEntity.getAveragePrice())
                .totalNetAmount(packageCustodianEntity.getTotalNetAmount())
                .totalCommissionAmount(packageCustodianEntity.getTotalCommissionAmount())
                .totalValTaxAmount(packageCustodianEntity.getTotalValTaxAmount())
                .clearingPercentage(packageCustodianEntity.getClearingPercentage())
                .returnNetAmount(packageCustodianEntity.getReturnNetAmount())
                .averageRate(packageCustodianEntity.getAverageRate())
                .referencePackage(packageCustodianEntity.getReferencePackage())
                .totalElements(packageCustodianEntity.getPackageDetailEntities().size())
                .build();
    }

    public static MarketOutDto marketEntityToMarketOutDto(MarketEntity marketEntity) {
        if (ObjectUtils.isEmpty(marketEntity)) return null;
        return MarketOutDto.builder()
                .id(marketEntity.getId())
                .description(marketEntity.getDescription())
                .category(marketEntity.getCategory())
                .build();
    }

    public static SideOutDto sideEntityToSideOutDto(SideEntity sideEntity) {
        if (ObjectUtils.isEmpty(sideEntity)) return null;
        return SideOutDto.builder()
                .id(sideEntity.getId())
                .description(sideEntity.getDescription())
                .build();
    }

    public static InvestorOutDto investorEntityToInvestorOutDto(InvestorEntity investorEntity) {
        if (ObjectUtils.isEmpty(investorEntity)) return null;
        return InvestorOutDto.builder()
                .id(investorEntity.getId())
                .code(investorEntity.getCode())
                .firstName(investorEntity.getFirstName())
                .lastName(investorEntity.getLastName())
                .companyName(investorEntity.getCompanyName())
                .type(investorEntity.getType() != null
                        ? typeEntityToTypeOutDto(investorEntity.getType())
                        : null)
                .status(investorEntity.getStatus() != null
                        ? statusEntityToStatusOutDto(investorEntity.getStatus())
                        : null)
                .country(investorEntity.getCountry() != null
                        ? countryEntityToCountryOutDto(investorEntity.getCountry())
                        : null)
                .documentNumber(investorEntity.getDocumentNumber())
                .identificationType(investorEntity.getIdentificationType() != null
                        ? identificationTypeEntityToIdentificationTypeOutDto(investorEntity.getIdentificationType())
                        : null)
                .nationality(investorEntity.getNationality())
                .clearinghouseCode(investorEntity.getClearinghouseCode())
                .gics(investorEntity.getGics() != null
                        ? gicsEntityToGicsOutDto(investorEntity.getGics())
                        : null)
                .moneyLaunderingFlag(investorEntity.getMoneyLaunderingFlag())
                .taxStatus(investorEntity.getTaxStatus() != null
                        ? taxStatusEntityToTaxStatusOutDto(investorEntity.getTaxStatus())
                        : null)
                .build();
    }

    public static ParticipantOutDto participantEntityToParticipantOutDto(ParticipantEntity participantEntity) {
        if (ObjectUtils.isEmpty(participantEntity)) return null;
        return ParticipantOutDto.builder()
                .id(participantEntity.getId())
                .code(participantEntity.getCode())
                .documentNumber(participantEntity.getDocumentNumber())
                .identificationType(participantEntity.getIdentificationType() != null
                        ? identificationTypeEntityToIdentificationTypeOutDto(participantEntity.getIdentificationType())
                        : null)
                .name(participantEntity.getName())
                .shortName(participantEntity.getShortName())
                .mnemonic(participantEntity.getMnemonic())
                .registrationDate(participantEntity.getRegistrationDate())
                .taxCode(participantEntity.getTaxCode())
                .nitClearingHouse(participantEntity.getNitClearingHouse())
                .typeEntity(participantEntity.getTypeEntity())
                .marginAccount(participantEntity.getMarginAccount())
                .masterAccount(participantEntity.getMasterAccount())
                .directAllocation(participantEntity.getDirectAllocation())
                .marketMaker(participantEntity.getMarketMaker())
                .enabled(participantEntity.getEnabled())
                .custodian(participantEntity.getCustodian())
                .build();
    }

    public static InvestorAccountOutDto investorAccountEntityToInvestorAccountOutDto(InvestorAccountEntity investorAccountEntity) {
        if (ObjectUtils.isEmpty(investorAccountEntity)) return null;
        return InvestorAccountOutDto.builder()
                .id(investorAccountEntity.getId())
                .investor(investorAccountEntity.getInvestor() != null
                        ? investorEntityToInvestorOutDto(investorAccountEntity.getInvestor())
                        : null)
                .accountNumber(investorAccountEntity.getAccountNumber())
                .status(investorAccountEntity.getStatus() != null
                        ? statusEntityToStatusOutDto(investorAccountEntity.getStatus())
                        : null)
                .originType(investorAccountEntity.getOriginType() != null
                        ? typeEntityToTypeOutDto(investorAccountEntity.getOriginType())
                        : null)
                .type(investorAccountEntity.getType() != null
                        ? typeEntityToTypeOutDto(investorAccountEntity.getType())
                        : null)
                .depository(investorAccountEntity.getDepository() != null
                        ? depositoryEntityToDepositoryOutDto(investorAccountEntity.getDepository())
                        : null)
                .participant(investorAccountEntity.getParticipant() != null
                        ? MapperUtil.participantEntityToParticipantShortOutDto(investorAccountEntity.getParticipant())
                        : null)
                .accountName(investorAccountEntity.getAccountName())
                .taxExemp(investorAccountEntity.getTaxExemp())
                .build();
    }

    public static SecurityTitleOutDto securityTitleEntityToSecurityTitleOutDto(SecurityTitleEntity securityTitleEntity) {
        if (ObjectUtils.isEmpty(securityTitleEntity)) return null;
        return SecurityTitleOutDto.builder()
                .id(securityTitleEntity.getId())
                .market(securityTitleEntity.getMarket() != null
                        ? marketEntityToMarketOutDto(securityTitleEntity.getMarket())
                        : null)
                .equityCode(securityTitleEntity.getEquityCode())
                .mnemonic(securityTitleEntity.getMnemonic())
                .isin(securityTitleEntity.getIsin())
                .cfi(securityTitleEntity.getCfi())
                .currencyId(securityTitleEntity.getCurrencyId())
                .settlementPeriod(securityTitleEntity.getSettlementPeriod())
                .listingDate(securityTitleEntity.getListingDate())
                .delistingDate(securityTitleEntity.getDelistingDate())
                .parent(securityTitleEntity.getParent())
                .parentId(securityTitleEntity.getParentId())
                .status(securityTitleEntity.getStatus() != null
                        ? statusEntityToStatusOutDto(securityTitleEntity.getStatus())
                        : null)
                .issuerName(securityTitleEntity.getIssuer() != null
                        ? securityTitleEntity.getIssuer().getName()
                        : null)
                .countryId(securityTitleEntity.getCountryId())
                .amountIssued(securityTitleEntity.getAmountIssued())
                .clazz(securityTitleEntity.getClazz() != null
                        ? classEntityToClassOutDto(securityTitleEntity.getClazz())
                        : null)
                .segmentId(securityTitleEntity.getSegmentId())
                .category(securityTitleEntity.getCategory())
                .depository(securityTitleEntity.getDepository() != null
                        ? depositoryEntityToDepositoryOutDto(securityTitleEntity.getDepository())
                        : null)
                .punishmentRepo(securityTitleEntity.getPunishmentRepo())
                .regulatoryCode(securityTitleEntity.getRegulatoryCode())
                .build();
    }

    public static TypeOutDto typeEntityToTypeOutDto(TypeEntity typeEntity) {
        if (ObjectUtils.isEmpty(typeEntity)) return null;
        return TypeOutDto.builder()
                .id(typeEntity.getId())
                .description(typeEntity.getDescription())
                .category(typeEntity.getCategory())
                .build();
    }

    public static DepositoryOutDto depositoryEntityToDepositoryOutDto(DepositoryEntity depositoryEntity) {
        if (ObjectUtils.isEmpty(depositoryEntity)) return null;
        return DepositoryOutDto.builder()
                .id(depositoryEntity.getId())
                .description(depositoryEntity.getDescription())
                .build();
    }

    public static StatusOutDto statusEntityToStatusOutDto(StatusEntity statusEntity) {
        if (ObjectUtils.isEmpty(statusEntity)) return null;
        return StatusOutDto.builder()
                .id(statusEntity.getId())
                .description(statusEntity.getDescription())
                .category(statusEntity.getCategory())
                .shortName(statusEntity.getShortName())
                .build();
    }

    public static CountryOutDto countryEntityToCountryOutDto(CountryEntity countryEntity) {
        if (ObjectUtils.isEmpty(countryEntity)) return null;
        return CountryOutDto.builder()
                .id(countryEntity.getId())
                .code(countryEntity.getCode())
                .name(countryEntity.getName())
                .currency(countryEntity.getCurrency() != null
                        ? currencyEntityToCurrencyOutDto(countryEntity.getCurrency())
                        : null)
                .timeZone(countryEntity.getTimeZone())
                .build();
    }

    public static CurrencyOutDto currencyEntityToCurrencyOutDto(CurrencyEntity currencyEntity) {
        if (ObjectUtils.isEmpty(currencyEntity)) return null;
        return CurrencyOutDto.builder()
                .id(currencyEntity.getId())
                .code(currencyEntity.getCode())
                .name(currencyEntity.getName())
                .build();
    }

    public static IdentificationTypeOutDto identificationTypeEntityToIdentificationTypeOutDto(IdentificationTypeEntity identificationTypeEntity) {
        if (ObjectUtils.isEmpty(identificationTypeEntity)) return null;
        return IdentificationTypeOutDto.builder()
                .id(identificationTypeEntity.getId())
                .description(identificationTypeEntity.getDescription())
                .code(identificationTypeEntity.getCode())
                .build();
    }

    public static GicsOutDto gicsEntityToGicsOutDto(GicsEntity gicsEntity) {
        if (ObjectUtils.isEmpty(gicsEntity)) return null;
        return GicsOutDto.builder()
                .id(gicsEntity.getId())
                .description(gicsEntity.getDescription())
                .build();
    }

    public static TaxStatusOutDto taxStatusEntityToTaxStatusOutDto(TaxStatusEntity taxStatusEntity) {
        if (ObjectUtils.isEmpty(taxStatusEntity)) return null;
        return TaxStatusOutDto.builder()
                .id(taxStatusEntity.getId())
                .description(taxStatusEntity.getDescription())
                .build();
    }

    public static ClassOutDto classEntityToClassOutDto(ClassEntity classEntity) {
        if (ObjectUtils.isEmpty(classEntity))
            return null;
        return ClassOutDto.builder()
                .id(classEntity.getId())
                .description(classEntity.getDescription())
                .build();
    }

}

```

## src/main/java/com/nubo/operations/query/api/helpers/PackageCustodianSpecificationBuilder.java

```java
package com.nubo.operations.query.api.helpers;

import com.nubo.operations.query.api.models.entity.PackageCustodianEntity;
import com.nubo.operations.query.api.models.entity.PackageDetailEntity;
import com.nubo.operations.query.api.models.entity.TradeEntity;
import com.nubo.operations.query.api.models.enums.SearchOperationEnum;
import com.nubo.operations.query.api.models.enums.SideEnum;
import com.nubo.operations.query.api.models.enums.StatusEnum;
import jakarta.persistence.criteria.JoinType;
import jakarta.persistence.criteria.Path;
import jakarta.persistence.criteria.Root;
import jakarta.persistence.criteria.Subquery;
import org.springframework.data.jpa.domain.Specification;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

public class PackageCustodianSpecificationBuilder {

    private static final String TRADE_FIELD = "trade";
    private static final String CUSTODIAN_FIELD = "custodian";
    private static final String INVESTOR_FIELD = "investor";
    private static final String ID_FIELD = "id";
    private static final String NAME_FIELD = "name";
    private static final String CODE_FIELD = "code";

    private final List<Specification<PackageCustodianEntity>> specifications = new ArrayList<>();

    public static PackageCustodianSpecificationBuilder builder() {
        return new PackageCustodianSpecificationBuilder();
    }

    public PackageCustodianSpecificationBuilder withTradeId(Long tradeId) {
        if (tradeId != null) {
            specifications.add((root, query, cb) -> cb.equal(root.get(TRADE_FIELD).get(ID_FIELD), tradeId));
        }
        return this;
    }

    public PackageCustodianSpecificationBuilder withTradeIdAndParticipant(Long tradeId, Long participantId) {
        if (tradeId != null) {
            specifications.add((root, query, cb) -> cb.equal(root.get(TRADE_FIELD).get(ID_FIELD), tradeId));
            if (participantId != null) {
                specifications.add((root, query, cb) -> cb.or(
                        cb.equal(root.get(TRADE_FIELD).get("participantBuy").get("id"), participantId),
                        cb.equal(root.get(TRADE_FIELD).get("participantSell").get("id"), participantId)));
            }
        }
        return this;
    }

    public PackageCustodianSpecificationBuilder withSideId(String sideId) {
        if (sideId != null) {
            specifications.add((root, query, cb) -> cb.equal(root.get("side").get(ID_FIELD), sideId));
        }
        return this;
    }

    public PackageCustodianSpecificationBuilder withInvestorDocumentNumber(String investorDocumentNumber) {
        if (investorDocumentNumber != null) {
            specifications.add((root, query, cb) -> cb.equal(root.get(INVESTOR_FIELD).get("documentNumber"),
                    investorDocumentNumber));
        }
        return this;
    }

    public PackageCustodianSpecificationBuilder withIdentificationType(Long identificationTypeId) {
        if (identificationTypeId != null) {
            specifications.add((root, query, cb) -> cb.equal(
                    root.get(INVESTOR_FIELD).get("identificationType").get(ID_FIELD), identificationTypeId));
        }
        return this;
    }

    public PackageCustodianSpecificationBuilder withStatusId(Long statusId) {
        if (statusId != null) {
            specifications.add((root, query, cb) -> cb.equal(root.get("packageStatus").get(ID_FIELD),
                    statusId));
        }
        return this;
    }

    public PackageCustodianSpecificationBuilder withSecurityTittle(Long securityTittleId) {
        if (securityTittleId != null) {
            specifications.add((root, query, cb) -> cb.equal(root.get("securityTitle").get("id"), securityTittleId));
        }
        return this;
    }

    public PackageCustodianSpecificationBuilder withInvestorDocumentNumberContains(String investorDocumentNumber) {
        if (investorDocumentNumber != null) {
            specifications.add((root, query, cb) -> cb.like(root.get(INVESTOR_FIELD).get("documentNumber"),
                    "%" + investorDocumentNumber + "%"));
        }
        return this;
    }

    public PackageCustodianSpecificationBuilder withFolio(Long folio) {
        if (folio != null) {
            specifications.add((root, query, cb) -> root.get("packageStatus").get(ID_FIELD)
                    .in(StatusEnum.CUSTODIAN_TRANSFERRED.getId(),
                            StatusEnum.CUSTODIAN_PRE_MATCH.getId(),
                            StatusEnum.CUSTODIAN_ADMITTED.getId()));

            specifications.add((root, query, cb) -> {
                Subquery<Long> sub = query.subquery(Long.class);
                Root<PackageDetailEntity> detail = sub.from(PackageDetailEntity.class);
                Root<TradeEntity> trade = sub.from(TradeEntity.class);
                sub.select(detail.get("packageCustodianId"))
                        .where(cb.equal(detail.get("tradeId"), trade.get("id")),
                                cb.equal(trade.get("matchId"), folio));
                return root.get("packageCustodianId").in(sub);
            });
        }
        return this;
    }

    public PackageCustodianSpecificationBuilder withFiduciarySpecialist(Boolean fiduciarySpecialist) {
        if (fiduciarySpecialist != null) {
            specifications.add((root, query, cb) -> cb.equal(root.get("fiduciarySpecialist"), fiduciarySpecialist));
        }
        return this;
    }

    public PackageCustodianSpecificationBuilder withReference(String reference) {
        if (reference != null) {
            specifications.add(
                    (root, query, cb) -> cb.like(cb.lower(root.get("reference")), "%" + reference.toLowerCase() + "%"));
        }
        return this;
    }

    public PackageCustodianSpecificationBuilder withCustodianId(Long custodianId) {
        if (custodianId != null) {
            specifications.add((root, query, cb) -> cb.equal(root.get(CUSTODIAN_FIELD).get(ID_FIELD), custodianId));
        }
        return this;
    }

    public PackageCustodianSpecificationBuilder withParticipantId(Long participantId) {
        if (participantId != null) {
            specifications.add((root, query, cb) -> cb.equal(root.get("participant").get(ID_FIELD), participantId));
        }
        return this;
    }

    public PackageCustodianSpecificationBuilder withCustodianName(String custodianName) {
        if (custodianName != null) {
            specifications.add((root, query, cb) -> cb.like(cb.lower(root.get(CUSTODIAN_FIELD).get(NAME_FIELD)),
                    "%" + custodianName.toLowerCase() + "%"));
        }
        return this;
    }

    public PackageCustodianSpecificationBuilder withCustodianCode(String custodianCode) {
        if (custodianCode != null) {
            specifications.add((root, query, cb) -> cb.equal(root.get(CUSTODIAN_FIELD).get(CODE_FIELD), custodianCode));
        }
        return this;
    }

    public PackageCustodianSpecificationBuilder withCountryId(Long countryId) {
        if (countryId != null) {
            specifications
                    .add((root, query, cb) -> cb.equal(root.get(TRADE_FIELD).get("country").get(ID_FIELD), countryId));
        }
        return this;
    }

    public PackageCustodianSpecificationBuilder withDepositId(Long depositId) {
        if (depositId != null) {
            specifications.add(
                    (root, query, cb) -> cb.equal(root.get(TRADE_FIELD).get("depository").get(ID_FIELD), depositId));
        }
        return this;
    }

    public PackageCustodianSpecificationBuilder withOperationTypeId(Long operationTypeId) {
        if (operationTypeId != null) {
            specifications.add(
                    (root, query, cb) -> cb.equal(root.get("type").get(ID_FIELD), operationTypeId));
        }
        return this;
    }

    public PackageCustodianSpecificationBuilder withParticipantIdBySettlementSide(Long participantId) {
        if (participantId != null) {
            specifications.add((root, query, cb) -> {
                var sideId = root.get("side").get(ID_FIELD);
                var trade = root.get(TRADE_FIELD);

                var buySide = cb.and(
                        cb.equal(sideId, SideEnum.BUY.getId()),
                        cb.equal(trade.get("participantBuy").get(ID_FIELD), participantId));
                var sellSide = cb.and(
                        cb.equal(sideId, SideEnum.SELL.getId()),
                        cb.equal(trade.get("participantSell").get(ID_FIELD), participantId));

                return cb.or(buySide, sellSide);
            });
        }
        return this;
    }

    public PackageCustodianSpecificationBuilder withRegistrationDate(LocalDate registrationDate) {
        if (registrationDate != null) {
            specifications.add((root, query, cb) -> cb.equal(root.get("packageDate"), registrationDate));
        }
        return this;
    }

    public PackageCustodianSpecificationBuilder withClearingDate(LocalDate clearingDate) {
        if (clearingDate != null) {
            specifications.add((root, query, cb) -> cb.equal(root.get("clearingDate"), clearingDate));
        }
        return this;
    }

    public PackageCustodianSpecificationBuilder withPackageNumber(String packageNumber) {
        if (packageNumber != null) {
            specifications.add((root, query, cb) -> cb.like(root.get("packageNumber"), "%" + packageNumber + "%"));
        }
        return this;
    }

    public PackageCustodianSpecificationBuilder withSettlementDate(LocalDate settlementDate) {
        if (settlementDate != null) {
            specifications
                    .add((root, query, cb) -> cb.equal(root.get(TRADE_FIELD).get("clearingDate"), settlementDate));
        }
        return this;
    }

    public PackageCustodianSpecificationBuilder withCustodianStatusIdInternal(Long custodianStatusId) {
        if (custodianStatusId != null) {
            specifications
                    .add((root, query, cb) -> cb.equal(root.get("custodianStatus").get(ID_FIELD), custodianStatusId));
        } else {
            Set<Long> admittedStatusIds = Set.of(
                    StatusEnum.CUSTODIAN_ADMITTED.getId(),
                    StatusEnum.CUSTODIAN_PRE_MATCH.getId(),
                    StatusEnum.CUSTODIAN_TRANSFERRED.getId());
            specifications.add((root, query, cb) -> root.get("custodianStatus")
                    .get(ID_FIELD).in(admittedStatusIds));
        }
        return this;
    }

    public PackageCustodianSpecificationBuilder withCustodianStatusIdExternal(Long custodianStatusId) {
        if (custodianStatusId != null) {
            specifications
                    .add((root, query, cb) -> cb.equal(root.get("custodianStatus").get(ID_FIELD), custodianStatusId));
        }
        return this;
    }

    public PackageCustodianSpecificationBuilder withDistinct() {
        specifications.add((root, query, cb) -> {
            query.distinct(true);
            return cb.conjunction();
        });
        return this;
    }

    public PackageCustodianSpecificationBuilder withFetchTradeAndCountry() {
        specifications.add((root, query, cb) -> {
            if (Long.class != query.getResultType() && long.class != query.getResultType()) {
                root.fetch(TRADE_FIELD, JoinType.INNER).fetch("country", JoinType.INNER);
            }
            return cb.conjunction();
        });
        return this;
    }

    public PackageCustodianSpecificationBuilder withInvestorId(Long investorId) {
        if (investorId != null) {
            specifications.add((root, query, cb) -> cb.equal(root.get(INVESTOR_FIELD).get(ID_FIELD), investorId));
        }
        return this;
    }

    public PackageCustodianSpecificationBuilder withInvestorAccountNumber(String accountNumber) {
        if (accountNumber != null) {
            specifications.add(
                    (root, query, cb) -> cb.equal(root.get("investorAccount").get("accountNumber"), accountNumber));
        }
        return this;
    }

    public PackageCustodianSpecificationBuilder withTradeStatusId(Long tradeStatusId) {
        if (tradeStatusId != null) {
            specifications.add(
                    (root, query, cb) -> cb.equal(root.get(TRADE_FIELD).get("status").get(ID_FIELD), tradeStatusId));
        }
        return this;
    }

    public PackageCustodianSpecificationBuilder withTradeCanceledStatus(String canceledStatus) {
        if (canceledStatus != null) {
            specifications
                    .add((root, query, cb) -> cb.equal(root.get(TRADE_FIELD).get("canceledStatus"), canceledStatus));
        }
        return this;
    }

    public PackageCustodianSpecificationBuilder withTradeSpecialTradeId(String specialTradeId) {
        if (specialTradeId != null) {
            specifications
                    .add((root, query, cb) -> cb.equal(root.get(TRADE_FIELD).get("specialTradeId"), specialTradeId));
        }
        return this;
    }

    public PackageCustodianSpecificationBuilder withDynamicFilter(String fieldName, String fieldValue,
                                                                  SearchOperationEnum operation) {
        if (fieldName != null && fieldValue != null && operation != null) {
            specifications.add((root, query, cb) -> {
                try {
                    Path<?> fieldPath = PackageCustodianDynamicSearchMapper.getSettlementFieldPath(root, fieldName);
                    if (fieldPath != null) {
                        return PackageCustodianDynamicSearchMapper.buildSettlementFieldPredicate(cb, fieldPath, fieldValue,
                                operation);
                    }
                    return cb.conjunction();
                } catch (Exception e) {
                    return cb.conjunction();
                }
            });
        }
        return this;
    }

    public PackageCustodianSpecificationBuilder withFetchMilaDirectDepositor() {
        specifications.add((root, query, cb) -> {
            if (Long.class != query.getResultType() && long.class != query.getResultType()) {
                root.fetch("milaDirectDepositor", JoinType.LEFT);
            }
            return cb.conjunction();
        });
        return this;
    }

    public Specification<PackageCustodianEntity> build() {
        if (specifications.isEmpty()) {
            return (root, query, cb) -> cb.conjunction();
        }
        return specifications.stream()
                .reduce(Specification::and)
                .orElse((root, query, cb) -> cb.conjunction());
    }
}

```

## src/main/java/com/nubo/operations/query/api/helpers/PackageCustodianSpecificationFactory.java

```java
package com.nubo.operations.query.api.helpers;

import com.nubo.operations.query.api.models.entity.PackageCustodianEntity;
import com.nubo.operations.query.api.models.entity.SettlementEntity;
import com.nubo.operations.query.api.models.enums.SearchOperationEnum;
import jakarta.persistence.criteria.Path;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.web.bind.annotation.RequestParam;

import java.time.LocalDate;

public class PackageCustodianSpecificationFactory {

    private PackageCustodianSpecificationFactory() {
        throw new IllegalStateException("Utility class");
    }

    public static Specification<PackageCustodianEntity> createStandardFilter(
             LocalDate clearingDate,
             String packageNumber,
             Long securityTittleId,
             Long custodianId,
             Long participantId,
             Long operationTypeId,
             LocalDate registrationDateFrom,
             Long statusId,
             Long identificationTypeId,
             String investorDocumentNumber,
             Long folio) {

        return PackageCustodianSpecificationBuilder.builder()
                .withClearingDate(clearingDate)
                .withPackageNumber(packageNumber)
                .withSecurityTittle(securityTittleId)
                .withCustodianId(custodianId)
                .withParticipantId(participantId)
                .withOperationTypeId(operationTypeId)
                .withRegistrationDate(registrationDateFrom)
                .withStatusId(statusId)
                .withIdentificationType(identificationTypeId)
                .withInvestorDocumentNumberContains(investorDocumentNumber)
                .withFolio(folio)

                .build();
    }

    public static Specification<SettlementEntity> createDynamicFilter(
            String fieldName, String fieldValue, SearchOperationEnum operation) {

        return (root, query, cb) -> {
            try {
                Path<?> fieldPath = SettlementDynamicSearchMapper.getSettlementFieldPath(root, fieldName);
                if (fieldPath != null) {
                    return SettlementDynamicSearchMapper.buildSettlementFieldPredicate(cb, fieldPath, fieldValue,
                            operation);
                }
                return cb.conjunction();
            } catch (Exception e) {
                return cb.conjunction();
            }
        };
    }
}

```

## src/main/java/com/nubo/operations/query/api/helpers/QueryFilterBuilder.java

```java
package com.nubo.operations.query.api.helpers;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.nubo.operations.query.api.models.domain.TradeParams;

import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class QueryFilterBuilder {

    private static final DateTimeFormatter DATE_FORMATTER = DateTimeFormatter.ofPattern("yyyy-MM-dd");
    private static final String MATCH_DATE_FIELD = "matchdate";
    private static final String CLEARING_DATE_FIELD = "clearingdate";

    public String buildMatchIdFilter(Long matchId) {
        return "@matchid:[" + matchId + " " + matchId + "]";
    }

    public String buildStatusFilter(Integer statusId) {
        return "@statusid:[" + statusId + " " + statusId + "]";
    }

    public String buildParticipantFilter(Long participantId) {
        return "(@participantbuyid:[" + participantId + " " + participantId + "]|@participantsellid:[" + participantId + " " + participantId + "])";
    }

    public String buildTypeFilter(Long typeId) {
        return "@typeid:[" + typeId + " " + typeId + "]";
    }

    public String buildCountryFilter(Long countryId) {
        return "@countryid:[" + countryId + " " + countryId + "]";
    }

    public String buildDateRangeFilter(LocalDate startDate, LocalDate endDate) {
        if (startDate != null && endDate != null) {
            String startStr = startDate.format(DATE_FORMATTER);
            String endStr = endDate.format(DATE_FORMATTER);
            return buildDateRangeFilter(MATCH_DATE_FIELD, startStr, endStr);
        } else if (startDate != null) {
            String startStr = startDate.format(DATE_FORMATTER);
            return buildDateTokenQuery(MATCH_DATE_FIELD, startStr);
        } else if (endDate != null) {
            String endStr = endDate.format(DATE_FORMATTER);
            return buildDateTokenQuery(MATCH_DATE_FIELD, endStr);
        }
        return null;
    }

    public String buildClearingDateFilter(LocalDate clearingDate) {
        if (clearingDate != null) {
            String dateStr = clearingDate.format(DATE_FORMATTER);
            return buildDateTokenQuery(CLEARING_DATE_FIELD, dateStr);
        }
        return null;
    }

    private String buildDateTokenQuery(String fieldName, String dateValue) {
        log.debug("Building date token query for field: {} with value: {}", fieldName, dateValue);

        if (dateValue.matches("\\d{4}-\\d{2}-\\d{2}")) {
            String[] parts = dateValue.split("-");
            String year = parts[0];
            String month = parts[1];
            String day = parts[2];

            String query = String.format("(@%s:*%s*) (@%s:*%s*) (@%s:*%s*)",
                           fieldName, year, fieldName, month, fieldName, day);
            log.debug("Generated date token query: {}", query);
            return query;
        }

        return "@" + fieldName + ":*" + dateValue + "*";
    }

    private String buildDateRangeFilter(String fieldName, String startDate, String endDate) {
        log.debug("Building date range filter for field: {} from {} to {}", fieldName, startDate, endDate);

        String[] startParts = startDate.split("-");
        String[] endParts = endDate.split("-");

        String startYear = startParts[0];
        String startMonth = startParts[1];
        String endYear = endParts[0];
        String endMonth = endParts[1];

        if (startYear.equals(endYear) && startMonth.equals(endMonth)) {
            String query = String.format("(@%s:*%s*) (@%s:*%s*)",
                           fieldName, startYear, fieldName, startMonth);
            log.debug("Generated same year-month range query: {}", query);
            return query;
        }

        if (startYear.equals(endYear)) {
            String query = String.format("@%s:*%s*", fieldName, startYear);
            log.debug("Generated same year range query: {}", query);
            return query;
        }

        String query = String.format("(@%s:*%s*|@%s:*%s*)",
                       fieldName, startYear, fieldName, endYear);
        log.debug("Generated multi-year range query: {}", query);
        return query;
    }

    public List<String> buildCommonFilters(TradeParams tradeParams, Long participantId) {
        List<String> filters = new ArrayList<>();

        if (tradeParams.matchId() != null) {
            filters.add(buildMatchIdFilter(tradeParams.matchId()));
        }

        if (tradeParams.statusId() != null) {
            filters.add(buildStatusFilter(tradeParams.statusId()));
        }

        if (participantId != null) {
            filters.add(buildParticipantFilter(participantId));
        }

        if (tradeParams.typeId() != null) {
            filters.add(buildTypeFilter(tradeParams.typeId()));
        }

        if (tradeParams.countryId() != null) {
            filters.add(buildCountryFilter(tradeParams.countryId()));
        }

        String dateRangeFilter = buildDateRangeFilter(tradeParams.startMatchDate(), tradeParams.endMatchDate());
        if (dateRangeFilter != null) {
            filters.add(dateRangeFilter);
        }

        String clearingDateFilter = buildClearingDateFilter(tradeParams.endClearingDate());
        if (clearingDateFilter != null) {
            filters.add(clearingDateFilter);
        }

        return filters;
    }
}

```

## src/main/java/com/nubo/operations/query/api/helpers/RedisMapperUtils.java

```java
package com.nubo.operations.query.api.helpers;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.function.Function;

import org.springframework.stereotype.Component;

@Component
public class RedisMapperUtils {

    private RedisMapperUtils() {
    }

    public static final DateTimeFormatter DATE_FORMATTER = DateTimeFormatter.ofPattern("yyyy-MM-dd");
    public static final DateTimeFormatter DATETIME_FORMATTER = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSS");

    public static class FilterContext {
        public final String redisFieldName;
        public final String fieldValue;
        public final boolean isNumericField;
        public final boolean isDateField;

        public FilterContext(String redisFieldName, String fieldValue, boolean isNumericField, boolean isDateField) {
            this.redisFieldName = redisFieldName;
            this.fieldValue = fieldValue;
            this.isNumericField = isNumericField;
            this.isDateField = isDateField;
        }
    }

    public static final Map<String, Function<FilterContext, String>> FILTER_STRATEGIES = Map.ofEntries(
        Map.entry("equals", RedisMapperUtils::buildEqualsFilter),
        Map.entry("contains", RedisMapperUtils::buildContainsFilter),
        Map.entry("greater_than", RedisMapperUtils::buildGreaterThanFilter),
        Map.entry("less_than", RedisMapperUtils::buildLessThanFilter),
        Map.entry("greater_than_or_equal", RedisMapperUtils::buildGreaterThanOrEqualFilter),
        Map.entry("less_than_or_equal", RedisMapperUtils::buildLessThanOrEqualFilter),
        Map.entry("starts_with", RedisMapperUtils::buildStartsWithFilter),
        Map.entry("ends_with", RedisMapperUtils::buildEndsWithFilter),
        Map.entry("not_equals", RedisMapperUtils::buildNotEqualsFilter),
        Map.entry("in", RedisMapperUtils::buildInFilter),
        Map.entry("not_in", RedisMapperUtils::buildNotInFilter),
        Map.entry("is_empty", RedisMapperUtils::buildIsEmptyFilter),
        Map.entry("is_not_empty", RedisMapperUtils::buildIsNotEmptyFilter),
        Map.entry("not_contains", RedisMapperUtils::buildNotContainsFilter)
    );

    public static String parseString(Object value) {
        return value != null ? value.toString() : null;
    }

    public static Long parseLong(Object value) {
        try {
            return value != null && !value.toString().isEmpty() ? Long.valueOf(value.toString()) : null;
        } catch (NumberFormatException e) {
            return null;
        }
    }

    public static Integer parseInt(Object value) {
        try {
            return value != null && !value.toString().isEmpty() ? Integer.valueOf(value.toString()) : null;
        } catch (NumberFormatException e) {
            return null;
        }
    }

    public static Boolean parseBoolean(Object value) {
        try {
            return value != null && !value.toString().isEmpty() ? Boolean.valueOf(value.toString()) : Boolean.FALSE;
        } catch (Exception e) {
            return Boolean.FALSE;
        }
    }

    public static BigDecimal parseBigDecimal(Object value) {
        try {
            return value != null && !value.toString().isEmpty() ? new BigDecimal(value.toString()) : null;
        } catch (NumberFormatException e) {
            return null;
        }
    }

    public static BigInteger parseBigInteger(Object value) {
        try {
            return value != null && !value.toString().isEmpty() ? new BigInteger(value.toString()) : null;
        } catch (NumberFormatException e) {
            return null;
        }
    }

    public static LocalDate parseLocalDate(Object value) {
        try {
            return value != null && !value.toString().isEmpty() ? LocalDate.parse(value.toString(), DATE_FORMATTER) : null;
        } catch (Exception e) {
            return null;
        }
    }

    public static LocalDateTime parseLocalDateTime(Object value) {
        try {
            return value != null && !value.toString().isEmpty()
                    ? LocalDateTime.parse(value.toString(), DATETIME_FORMATTER)
                    : null;
        } catch (Exception e) {
            return null;
        }
    }

    public static OffsetDateTime parseOffsetDateTime(Object value) {
        try {
            return value != null && !value.toString().isEmpty()
                    ? OffsetDateTime.parse(value.toString())
                    : null;
        } catch (Exception e) {
            return null;
        }
    }

    public static String buildEqualsFilter(FilterContext ctx, Set<String> tagFields) {
        if (ctx.isNumericField) {
            return "@" + ctx.redisFieldName + ":[" + ctx.fieldValue + " " + ctx.fieldValue + "]";
        } else if (ctx.isDateField) {
            String[] dateParts = ctx.fieldValue.split("-");
            if (dateParts.length == 3) {
                return "(@" + ctx.redisFieldName + ":*" + dateParts[0] + "*) " +
                       "(@" + ctx.redisFieldName + ":*" + dateParts[1] + "*) " +
                       "(@" + ctx.redisFieldName + ":*" + dateParts[2] + "*)";
            } else {
                return "@" + ctx.redisFieldName + ":*" + ctx.fieldValue + "*";
            }
        } else if (tagFields.contains(ctx.redisFieldName)) {
            return "@" + ctx.redisFieldName + ":{" + escapeTagValue(ctx.fieldValue) + "}";
        } else {
            return "@" + ctx.redisFieldName + ":" + escapeValue(ctx.fieldValue);
        }
    }

    public static String buildEqualsFilter(FilterContext ctx) {
        return buildEqualsFilter(ctx, Set.of());
    }

    public static String buildContainsFilter(FilterContext ctx, Set<String> tagFields) {
        if (ctx.isNumericField) {
            return "@" + ctx.redisFieldName + ":[" + ctx.fieldValue + " " + ctx.fieldValue + "]";
        } else if (tagFields.contains(ctx.redisFieldName)) {
            return "@" + ctx.redisFieldName + ":{*" + escapeTagValue(ctx.fieldValue) + "*}";
        } else {
            return "@" + ctx.redisFieldName + ":*" + ctx.fieldValue + "*";
        }
    }

    public static String buildContainsFilter(FilterContext ctx) {
        return buildContainsFilter(ctx, Set.of());
    }

    public static String buildNotContainsFilter(FilterContext ctx, Set<String> tagFields) {
        if (ctx.isNumericField) {
            return "-@" + ctx.redisFieldName + ":[" + ctx.fieldValue + " " + ctx.fieldValue + "]";
        } else if (tagFields.contains(ctx.redisFieldName)) {
            return "-@" + ctx.redisFieldName + ":{*" + escapeTagValue(ctx.fieldValue) + "*}";
        } else {
            return "-@" + ctx.redisFieldName + ":*" + ctx.fieldValue + "*";
        }
    }

    public static String buildNotContainsFilter(FilterContext ctx) {
        return buildNotContainsFilter(ctx, Set.of());
    }

    public static String buildGreaterThanFilter(FilterContext ctx) {
        return "@" + ctx.redisFieldName + ":[(" + ctx.fieldValue + " +inf]";
    }

    public static String buildLessThanFilter(FilterContext ctx) {
        return "@" + ctx.redisFieldName + ":[-inf (" + ctx.fieldValue + "]";
    }

    public static String buildGreaterThanOrEqualFilter(FilterContext ctx) {
        return "@" + ctx.redisFieldName + ":[" + ctx.fieldValue + " +inf]";
    }

    public static String buildLessThanOrEqualFilter(FilterContext ctx) {
        return "@" + ctx.redisFieldName + ":[-inf " + ctx.fieldValue + "]";
    }

    public static String buildStartsWithFilter(FilterContext ctx, Set<String> tagFields) {
        if (ctx.isNumericField) {
            return "@" + ctx.redisFieldName + ":[" + ctx.fieldValue + " " + ctx.fieldValue + "]";
        } else if (tagFields.contains(ctx.redisFieldName)) {
            return "@" + ctx.redisFieldName + ":{" + escapeTagValue(ctx.fieldValue) + "*}";
        } else {
            return "@" + ctx.redisFieldName + ":" + ctx.fieldValue + "*";
        }
    }

    public static String buildStartsWithFilter(FilterContext ctx) {
        return buildStartsWithFilter(ctx, Set.of());
    }

    public static String buildEndsWithFilter(FilterContext ctx, Set<String> tagFields) {
        if (ctx.isNumericField) {
            return "@" + ctx.redisFieldName + ":[" + ctx.fieldValue + " " + ctx.fieldValue + "]";
        } else if (tagFields.contains(ctx.redisFieldName)) {
            return "@" + ctx.redisFieldName + ":{*" + escapeTagValue(ctx.fieldValue) + "}";
        } else {
            return "@" + ctx.redisFieldName + ":*" + ctx.fieldValue;
        }
    }

    public static String buildEndsWithFilter(FilterContext ctx) {
        return buildEndsWithFilter(ctx, Set.of());
    }

    public static String buildNotEqualsFilter(FilterContext ctx, Set<String> tagFields) {
        if (ctx.isNumericField) {
            return "-@" + ctx.redisFieldName + ":[" + ctx.fieldValue + " " + ctx.fieldValue + "]";
        } else if (tagFields.contains(ctx.redisFieldName)) {
            return "-@" + ctx.redisFieldName + ":{" + escapeTagValue(ctx.fieldValue) + "}";
        } else {
            return "-@" + ctx.redisFieldName + ":" + escapeValue(ctx.fieldValue);
        }
    }

    public static String buildNotEqualsFilter(FilterContext ctx) {
        return buildNotEqualsFilter(ctx, Set.of());
    }

    public static String buildInFilter(FilterContext ctx, Set<String> tagFields) {
        String[] values = ctx.fieldValue.split(",");
        if (ctx.isNumericField) {
            List<String> inFilters = new ArrayList<>();
            for (String value : values) {
                inFilters.add("@" + ctx.redisFieldName + ":[" + value.trim() + " " + value.trim() + "]");
            }
            return "(" + String.join(" | ", inFilters) + ")";
        } else if (tagFields.contains(ctx.redisFieldName)) {
            List<String> escapedValues = new ArrayList<>();
            for (String value : values) {
                escapedValues.add(escapeTagValue(value.trim()));
            }
            return "@" + ctx.redisFieldName + ":{" + String.join("|", escapedValues) + "}";
        } else {
            List<String> inFilters = new ArrayList<>();
            for (String value : values) {
                inFilters.add("@" + ctx.redisFieldName + ":" + escapeValue(value.trim()));
            }
            return "(" + String.join(" | ", inFilters) + ")";
        }
    }

    public static String buildInFilter(FilterContext ctx) {
        return buildInFilter(ctx, Set.of());
    }

    public static String buildNotInFilter(FilterContext ctx, Set<String> tagFields) {
        String[] notValues = ctx.fieldValue.split(",");
        if (ctx.isNumericField) {
            List<String> notInFilters = new ArrayList<>();
            for (String value : notValues) {
                notInFilters.add("@" + ctx.redisFieldName + ":[" + value.trim() + " " + value.trim() + "]");
            }
            return "-(" + String.join(" | ", notInFilters) + ")";
        } else if (tagFields.contains(ctx.redisFieldName)) {
            List<String> escapedValues = new ArrayList<>();
            for (String value : notValues) {
                escapedValues.add(escapeTagValue(value.trim()));
            }
            return "-@" + ctx.redisFieldName + ":{" + String.join("|", escapedValues) + "}";
        } else {
            List<String> notInFilters = new ArrayList<>();
            for (String value : notValues) {
                notInFilters.add("@" + ctx.redisFieldName + ":" + escapeValue(value.trim()));
            }
            return "-(" + String.join(" | ", notInFilters) + ")";
        }
    }

    public static String buildNotInFilter(FilterContext ctx) {
        return buildNotInFilter(ctx, Set.of());
    }

    public static String buildIsEmptyFilter(FilterContext ctx, Set<String> tagFields) {
        if (tagFields.contains(ctx.redisFieldName)) {
            return "@" + ctx.redisFieldName + ":{null}";
        } else {
            return "@" + ctx.redisFieldName + ":\"null\"";
        }
    }

    public static String buildIsEmptyFilter(FilterContext ctx) {
        return buildIsEmptyFilter(ctx, Set.of());
    }

    public static String buildIsNotEmptyFilter(FilterContext ctx, Set<String> tagFields) {
        if (tagFields.contains(ctx.redisFieldName)) {
            return "-@" + ctx.redisFieldName + ":{null}";
        } else {
            return "-@" + ctx.redisFieldName + ":\"null\"";
        }
    }

    public static String buildIsNotEmptyFilter(FilterContext ctx) {
        return buildIsNotEmptyFilter(ctx, Set.of());
    }

    public static String escapeTagValue(String value) {
        return value.replace(",", "\\,")
                    .replace(".", "\\.")
                    .replace("<", "\\<")
                    .replace(">", "\\>")
                    .replace("{", "\\{")
                    .replace("}", "\\}")
                    .replace("[", "\\[")
                    .replace("]", "\\]")
                    .replace("\"", "\\\"")
                    .replace("'", "\\'")
                    .replace(":", "\\:")
                    .replace(";", "\\;")
                    .replace("!", "\\!")
                    .replace("@", "\\@")
                    .replace("#", "\\#")
                    .replace("$", "\\$")
                    .replace("%", "\\%")
                    .replace("^", "\\^")
                    .replace("&", "\\&")
                    .replace("*", "\\*")
                    .replace("(", "\\(")
                    .replace(")", "\\)")
                    .replace("-", "\\-")
                    .replace("+", "\\+")
                    .replace("=", "\\=")
                    .replace("~", "\\~");
    }

    public static String escapeValue(String value) {
        return "\"" + value.replace("\"", "\\\"") + "\"";
    }
}

```

## src/main/java/com/nubo/operations/query/api/helpers/SettlementCorrectionDynamicSearchMapper.java

```java
package com.nubo.operations.query.api.helpers;

import com.nubo.operations.query.api.models.entity.SettlementCorrectionEntity;
import com.nubo.operations.query.api.models.enums.SearchOperationEnum;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.Path;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import lombok.extern.slf4j.Slf4j;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Map;
import java.util.function.Function;

@Slf4j
public class SettlementCorrectionDynamicSearchMapper {

    private static final String TRADE_FIELD = "trade";
    private static final String CUSTODIAN_FIELD = "custodian";
    private static final String INVESTOR_FIELD = "investor";
    private static final String ID_FIELD = "id";
    private static final String NAME_FIELD = "name";
    private static final String CODE_FIELD = "code";

    private enum ComparisonType {
        GREATER_THAN, GREATER_THAN_OR_EQUAL, LESS_THAN, LESS_THAN_OR_EQUAL
    }

    private static final Map<String, Function<Root<SettlementCorrectionEntity>, Path<?>>> FIELD_PATH_MAPPING = Map.ofEntries(
        Map.entry("tradeId", root -> root.get(TRADE_FIELD).get(ID_FIELD)),
        Map.entry("fraction", root -> root.get("fraction")),
        Map.entry("reference", root -> root.get("reference")),
        Map.entry("fractionQuantity", root -> root.get("fractionQuantity")),
        Map.entry("commissionPercentage", root -> root.get("commissionPercentage")),
        Map.entry("investorId", root -> root.get(INVESTOR_FIELD).get(ID_FIELD)),
        Map.entry("investorFirstName", root -> root.get(INVESTOR_FIELD).get("firstName")), // legacy — ver pendientes.md
        Map.entry("investorAccountName", root -> root.get("investorAccount").get("accountName")),
        Map.entry("investorLastName", root -> root.get(INVESTOR_FIELD).get("lastName")),
        Map.entry("investorCompanyName", root -> root.get(INVESTOR_FIELD).get("companyName")),
        Map.entry("investorDocumentNumber", root -> root.get(INVESTOR_FIELD).get("documentNumber")),
        Map.entry("investorAccountNumber", root -> root.get("investorAccount").get("accountNumber")),
        Map.entry("sideId", root -> root.get("side").get(ID_FIELD))
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
                // Para campos numéricos, usar conversión directa a string con CONCAT
                return cb.like(cb.concat("", path.as(String.class)), "%" + value + "%");
            }
        }),
        Map.entry(SearchOperationEnum.NOT_CONTAINS, (cb, path, value) -> {
            if (path.getJavaType() == String.class) {
                return cb.notLike(cb.lower(path.as(String.class)), "%" + value.toLowerCase() + "%");
            } else {
                // Para campos numéricos, usar conversión directa a string con CONCAT
                return cb.notLike(cb.concat("", path.as(String.class)), "%" + value + "%");
            }
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
        Map.entry(SearchOperationEnum.STARTS_WITH, (cb, path, value) -> {
            if (path.getJavaType() == String.class) {
                return cb.like(cb.lower(path.as(String.class)), value.toLowerCase() + "%");
            } else {
                // Para campos numéricos, usar conversión directa a string con CONCAT
                return cb.like(cb.concat("", path.as(String.class)), value + "%");
            }
        }),
        Map.entry(SearchOperationEnum.ENDS_WITH, (cb, path, value) -> {
            if (path.getJavaType() == String.class) {
                return cb.like(cb.lower(path.as(String.class)), "%" + value.toLowerCase());
            } else {
                // Para campos numéricos, usar conversión directa a string con CONCAT
                return cb.like(cb.concat("", path.as(String.class)), "%" + value);
            }
        }),
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

    public static Path<?> getReassignmentFieldPath(Root<SettlementCorrectionEntity> root, String fieldName) {
        if (fieldName == null) {
            return null;
        }
        Function<Root<SettlementCorrectionEntity>, Path<?>> pathFunction = FIELD_PATH_MAPPING.get(fieldName);
        if (pathFunction != null) {
            return pathFunction.apply(root);
        }
        log.warn("Campo no reconocido en Settlement: {}", fieldName);
        return null;
    }

    public static Predicate buildSettlementFieldPredicate(CriteriaBuilder criteriaBuilder, 
                                                         Path<?> fieldPath, 
                                                         String fieldValue, 
                                                         SearchOperationEnum operation) {
        if (criteriaBuilder == null || fieldPath == null || fieldValue == null || operation == null) {
            throw new IllegalArgumentException("Los parámetros del filtro dinámico son obligatorios");
        }
        PredicateBuilder builder = OPERATION_BUILDERS.get(operation);
        if (builder == null) {
            throw new IllegalArgumentException("Operación de búsqueda no soportada: " + operation);
        }
        return builder.build(criteriaBuilder, fieldPath, fieldValue);
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

    private static Predicate buildComparisonPredicate(CriteriaBuilder criteriaBuilder, 
                                                     Path<?> fieldPath, 
                                                     String fieldValue, 
                                                     ComparisonType comparisonType) {
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
        }
        throw new IllegalArgumentException("Tipo de campo no soportado para comparación: " + fieldType.getName());
    }
}

```

## src/main/java/com/nubo/operations/query/api/helpers/SettlementCorrectionSpecificationBuilder.java

```java
package com.nubo.operations.query.api.helpers;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.domain.Specification;

import com.nubo.operations.query.api.models.entity.SettlementCorrectionEntity;
import com.nubo.operations.query.api.models.enums.SearchOperationEnum;
import com.nubo.operations.query.api.models.enums.StatusEnum;

import jakarta.persistence.criteria.Path;

public class SettlementCorrectionSpecificationBuilder {

    private static final String TRADE_FIELD = "trade";
    private static final String INVESTOR_FIELD = "investor";
    private static final String ID_FIELD = "id";

    private final List<Specification<SettlementCorrectionEntity>> specifications = new ArrayList<>();

    public static SettlementCorrectionSpecificationBuilder builder() {
        return new SettlementCorrectionSpecificationBuilder();
    }

    public SettlementCorrectionSpecificationBuilder withTradeId(Long tradeId) {
        if (tradeId != null) {
            specifications.add((root, query, cb) -> cb.equal(root.get(TRADE_FIELD).get(ID_FIELD), tradeId));
        }
        return this;
    }

    public SettlementCorrectionSpecificationBuilder withTradeIdAndParticipant(Long tradeId, Long participantId) {
        if (tradeId != null) {
            specifications.add((root, query, cb) -> cb.equal(root.get(TRADE_FIELD).get(ID_FIELD), tradeId));
            if (participantId != null) {
                specifications.add((root, query, cb) -> cb.or(
                        cb.equal(root.get(TRADE_FIELD).get("participantBuy").get("id"), participantId),
                        cb.equal(root.get(TRADE_FIELD).get("participantSell").get("id"), participantId)));
            }
        }
        return this;
    }

    public SettlementCorrectionSpecificationBuilder withSideId(String sideId) {
        if (sideId != null) {
            specifications.add((root, query, cb) -> cb.equal(root.get("side").get(ID_FIELD), sideId));
        }
        return this;
    }

    public SettlementCorrectionSpecificationBuilder withInvestorDocumentNumber(String investorDocumentNumber) {
        if (investorDocumentNumber != null) {
            specifications.add((root, query, cb) -> cb.equal(root.get(INVESTOR_FIELD).get("documentNumber"),
                    investorDocumentNumber));
        }
        return this;
    }

    public SettlementCorrectionSpecificationBuilder withCorrectionStatusId(Long statusId) {
        if (statusId != null) {
            specifications.add((root, query, cb) -> cb.equal(root.get("status").get(ID_FIELD),
                    statusId));
        } else {
            Set<Long> validStatusIds = Set.of(
                    StatusEnum.CORRECTION_REQUEST.getId(),
                    StatusEnum.CORRECTION_ACCEPTED.getId(),
                    StatusEnum.CORRECTION_REJECTED.getId());
            specifications.add((root, query, cb) -> root.get("status")
                    .get(ID_FIELD).in(validStatusIds));
        }
        return this;
    }

    public SettlementCorrectionSpecificationBuilder withStatusExact(Long statusId) {
        if (statusId != null) {
            specifications.add((root, query, cb) -> cb.equal(root.get("status").get(ID_FIELD), statusId));
        }
        return this;
    }

    public SettlementCorrectionSpecificationBuilder withRequestDate(LocalDate dateOfCorrection) {
        if (dateOfCorrection != null) {
            specifications.add((root, query, cb) -> cb.equal(root.get("requestDate"), dateOfCorrection));
        }
        return this;
    }

    public SettlementCorrectionSpecificationBuilder withInvestorLikeDocumentNumber(String investorDocumentNumber) {
        if (investorDocumentNumber != null) {
            specifications.add((root, query, cb) -> cb.like(root.get(INVESTOR_FIELD).get("documentNumber"),
                    investorDocumentNumber + "%"));
        }
        return this;
    }

    public SettlementCorrectionSpecificationBuilder withFiduciarySpecialist(Boolean fiduciarySpecialist) {
        if (fiduciarySpecialist != null) {
            specifications.add((root, query, cb) -> cb.equal(root.get("fiduciarySpecialist"), fiduciarySpecialist));
        }
        return this;
    }

    public SettlementCorrectionSpecificationBuilder withReference(String reference) {
        if (reference != null) {
            specifications.add(
                    (root, query, cb) -> cb.like(cb.lower(root.get("reference")), "%" + reference.toLowerCase() + "%"));
        }
        return this;
    }

    public SettlementCorrectionSpecificationBuilder withInvestorId(Long investorId) {
        if (investorId != null) {
            specifications.add((root, query, cb) -> cb.equal(root.get(INVESTOR_FIELD).get(ID_FIELD), investorId));
        }
        return this;
    }

    public SettlementCorrectionSpecificationBuilder withInvestorAccountNumber(String accountNumber) {
        if (accountNumber != null) {
            specifications.add(
                    (root, query, cb) -> cb.equal(root.get("investorAccount").get("accountNumber"), accountNumber));
        }
        return this;
    }

    public SettlementCorrectionSpecificationBuilder withReassignmentType(Long reassignmentTypeId) {
        if (reassignmentTypeId != null) {
            specifications.add(
                    (root, query, cb) -> cb.equal(root.get("reassignmentTypeId").get(ID_FIELD), reassignmentTypeId));
        }
        return this;
    }

    public SettlementCorrectionSpecificationBuilder withDynamicFilter(String fieldName, String fieldValue,
            SearchOperationEnum operation) {
        if (fieldName != null && fieldValue != null && operation != null) {
            specifications.add((root, query, cb) -> {
                try {
                    Path<?> fieldPath = SettlementCorrectionDynamicSearchMapper.getReassignmentFieldPath(root,
                            fieldName);
                    if (fieldPath != null) {
                        return SettlementCorrectionDynamicSearchMapper.buildSettlementFieldPredicate(cb, fieldPath,
                                fieldValue,
                                operation);
                    }
                    return cb.conjunction();
                } catch (Exception e) {
                    return cb.conjunction();
                }
            });
        }
        return this;
    }

    public Specification<SettlementCorrectionEntity> build() {
        if (specifications.isEmpty()) {
            return (root, query, cb) -> cb.conjunction();
        }
        return specifications.stream()
                .reduce(Specification::and)
                .orElse((root, query, cb) -> cb.conjunction());
    }
}

```

## src/main/java/com/nubo/operations/query/api/helpers/SettlementCorrectionSpecificationFactory.java

```java
package com.nubo.operations.query.api.helpers;

import java.time.LocalDate;

import org.springframework.data.jpa.domain.Specification;

import com.nubo.operations.query.api.models.entity.SettlementCorrectionEntity;
import com.nubo.operations.query.api.models.enums.SearchOperationEnum;

import jakarta.persistence.criteria.Path;

public class SettlementCorrectionSpecificationFactory {

    private SettlementCorrectionSpecificationFactory() {
        throw new IllegalStateException("Utility class");
    }

    public static Specification<SettlementCorrectionEntity> createDynamicFilter(
            String fieldName, String fieldValue, SearchOperationEnum operation) {

        return (root, query, cb) -> {
            try {
                Path<?> fieldPath = SettlementCorrectionDynamicSearchMapper.getReassignmentFieldPath(root,
                        fieldName);
                if (fieldPath != null) {
                    return SettlementCorrectionDynamicSearchMapper.buildSettlementFieldPredicate(cb, fieldPath,
                            fieldValue, operation);
                }
                return cb.conjunction();
            } catch (Exception e) {
                return cb.conjunction();
            }
        };
    }

    public static Specification<SettlementCorrectionEntity> createCorrectionsFilter(
            Long tradeId, String sideId, Long statusId, LocalDate dateOfCorrection) {

        SettlementCorrectionSpecificationBuilder builder = SettlementCorrectionSpecificationBuilder.builder()
                .withTradeId(tradeId)
                .withSideId(sideId);

        if (dateOfCorrection != null) {
            builder.withRequestDate(dateOfCorrection);
        }

        if (statusId != null) {
            builder.withStatusExact(statusId);
        }

        return builder.build();
    }
}

```

## src/main/java/com/nubo/operations/query/api/helpers/SettlementDynamicSearchMapper.java

```java
package com.nubo.operations.query.api.helpers;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Map;
import java.util.function.Function;

import com.nubo.operations.query.api.models.entity.SettlementEntity;
import com.nubo.operations.query.api.models.enums.SearchOperationEnum;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.Path;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class SettlementDynamicSearchMapper {

    private static final String TRADE_FIELD = "trade";
    private static final String CUSTODIAN_FIELD = "custodian";
    private static final String INVESTOR_FIELD = "investor";
    private static final String ID_FIELD = "id";
    private static final String NAME_FIELD = "name";
    private static final String CODE_FIELD = "code";

    private enum ComparisonType {
        GREATER_THAN, GREATER_THAN_OR_EQUAL, LESS_THAN, LESS_THAN_OR_EQUAL
    }

    private static final Map<String, Function<Root<SettlementEntity>, Path<?>>> FIELD_PATH_MAPPING = Map.ofEntries(
        Map.entry("tradeId", root -> root.get(TRADE_FIELD).get(ID_FIELD)),
        Map.entry("fraction", root -> root.get("fraction")),
        Map.entry("fiduciarySpecialist", root -> root.get("fiduciarySpecialist")),
        Map.entry("reference", root -> root.get("reference")),
        Map.entry("fractionQuantity", root -> root.get("fractionQuantity")),
        Map.entry("commissionPercentage", root -> root.get("commissionPercentage")),
        Map.entry("commissionAmount", root -> root.get("commissionAmount")),
        Map.entry("valTaxAmount", root -> root.get("valTaxAmount")),
        Map.entry("netAmount", root -> root.get("netAmount")),
        Map.entry("amount", root -> root.get("netAmount")), 
        Map.entry("settlementAmount", root -> root.get("settlementAmount")),
        Map.entry("transferValue", root -> root.get("transferValue")),
        Map.entry("custodianId", root -> root.get(CUSTODIAN_FIELD).get(ID_FIELD)),
        Map.entry("custodianName", root -> root.get(CUSTODIAN_FIELD).get(NAME_FIELD)),
        Map.entry("custodianCode", root -> root.get(CUSTODIAN_FIELD).get(CODE_FIELD)),
        Map.entry("masterAccount", root -> root.get("participantAccount").get("participant").get("masterAccount")),
        Map.entry("investorId", root -> root.get(INVESTOR_FIELD).get(ID_FIELD)),
        Map.entry("investorFirstName", root -> root.get(INVESTOR_FIELD).get("firstName")), // legacy — ver pendientes.md
        Map.entry("investorAccountName", root -> root.get("investorAccount").get("accountName")),
        Map.entry("investorLastName", root -> root.get(INVESTOR_FIELD).get("lastName")),
        Map.entry("investorCompanyName", root -> root.get(INVESTOR_FIELD).get("companyName")),
        Map.entry("investorDocumentNumber", root -> root.get(INVESTOR_FIELD).get("documentNumber")),
        Map.entry("investorAccountNumber", root -> root.get("investorAccount").get("accountNumber")),
        Map.entry("tradeStatusId", root -> root.get(TRADE_FIELD).get("status").get(ID_FIELD)),
        Map.entry("tradeCanceledStatus", root -> root.get(TRADE_FIELD).get("canceledStatus")),
        Map.entry("tradeSpecialTradeId", root -> root.get(TRADE_FIELD).get("specialTradeId")),
        Map.entry("sideId", root -> root.get("side").get(ID_FIELD)),
        Map.entry("statusId", root -> root.get("status").get(ID_FIELD)),
        Map.entry("fractionVolume", root -> root.get("fractionVolume")),
        Map.entry("fundingAmount", root -> root.get("fundingAmount")),
        Map.entry("repoAmount", root -> root.get("repoAmount"))
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
                // Para campos numéricos, usar conversión directa a string con CONCAT
                return cb.like(cb.concat("", path.as(String.class)), "%" + value + "%");
            }
        }),
        Map.entry(SearchOperationEnum.NOT_CONTAINS, (cb, path, value) -> {
            if (path.getJavaType() == String.class) {
                return cb.notLike(cb.lower(path.as(String.class)), "%" + value.toLowerCase() + "%");
            } else {
                // Para campos numéricos, usar conversión directa a string con CONCAT
                return cb.notLike(cb.concat("", path.as(String.class)), "%" + value + "%");
            }
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
        Map.entry(SearchOperationEnum.STARTS_WITH, (cb, path, value) -> {
            if (path.getJavaType() == String.class) {
                return cb.like(cb.lower(path.as(String.class)), value.toLowerCase() + "%");
            } else {
                // Para campos numéricos, usar conversión directa a string con CONCAT
                return cb.like(cb.concat("", path.as(String.class)), value + "%");
            }
        }),
        Map.entry(SearchOperationEnum.ENDS_WITH, (cb, path, value) -> {
            if (path.getJavaType() == String.class) {
                return cb.like(cb.lower(path.as(String.class)), "%" + value.toLowerCase());
            } else {
                // Para campos numéricos, usar conversión directa a string con CONCAT
                return cb.like(cb.concat("", path.as(String.class)), "%" + value);
            }
        }),
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

    public static Path<?> getSettlementFieldPath(Root<SettlementEntity> root, String fieldName) {
        if (fieldName == null) {
            return null;
        }
        Function<Root<SettlementEntity>, Path<?>> pathFunction = FIELD_PATH_MAPPING.get(fieldName);
        if (pathFunction != null) {
            return pathFunction.apply(root);
        }
        log.warn("Campo no reconocido en Settlement: {}", fieldName);
        return null;
    }

    public static Predicate buildSettlementFieldPredicate(CriteriaBuilder criteriaBuilder, 
                                                         Path<?> fieldPath, 
                                                         String fieldValue, 
                                                         SearchOperationEnum operation) {
        if (criteriaBuilder == null || fieldPath == null || fieldValue == null || operation == null) {
            throw new IllegalArgumentException("Los parámetros del filtro dinámico son obligatorios");
        }
        PredicateBuilder builder = OPERATION_BUILDERS.get(operation);
        if (builder == null) {
            throw new IllegalArgumentException("Operación de búsqueda no soportada: " + operation);
        }
        return builder.build(criteriaBuilder, fieldPath, fieldValue);
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

    private static Predicate buildComparisonPredicate(CriteriaBuilder criteriaBuilder, 
                                                     Path<?> fieldPath, 
                                                     String fieldValue, 
                                                     ComparisonType comparisonType) {
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
        }
        throw new IllegalArgumentException("Tipo de campo no soportado para comparación: " + fieldType.getName());
    }
}

```

## src/main/java/com/nubo/operations/query/api/helpers/SettlementRedisMapper.java

```java
package com.nubo.operations.query.api.helpers;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.function.Function;

import org.springframework.stereotype.Component;

import com.nubo.operations.query.api.models.dto.response.InvestorAccountOutDto;
import com.nubo.operations.query.api.models.dto.response.InvestorOutDto;
import com.nubo.operations.query.api.models.dto.response.ParticipantAccountOutDto;
import com.nubo.operations.query.api.models.dto.response.ParticipantOutDto;
import com.nubo.operations.query.api.models.dto.response.ParticipantShortOutDto;
import com.nubo.operations.query.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.query.api.models.dto.response.SideOutDto;

import io.redisearch.Document;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class SettlementRedisMapper {

    public static final Set<String> NUMERIC_FIELDS = Set.of(
        "tradeid", "fraction", "fractionquantity", "commissionpercentage", "commissionamount",
        "valtaxamount", "netamount", "transfervalue", "custodianid", "investorid",
        "tradestatusid", "tradespecialtradeid", "sideid", "matchid", "quantity", "price",
        "volume", "repurchaserate", "repurchaseamount", "daystosettlement", "reporate",
        "repoamount", "fundingamount", "netoutflowtotal", "outflowturnovervalue",
        "totalnetreturn", "returnturnovervalue", "deliveryversuspaymentvalue",
        "advancestatus", "depositoryid", "countryid", "typeid", "marketid",
        "issuancemarketid", "securitytitlecurrencyid", "securitytitlesettlementperiod",
        "securitytitleparentid", "securitytitlecountryid", "securitytitleamountissued",
        "securitytitlesegmentid", "participantbuyid", "participantsellid",
        "custodianbuyid", "custodiansellid", "settlementparticipantaccountid",
        "settlementtradingsystemid", "settlementstatusid", "settlementdirectdepositorid",
        "statusid", "currencyid", "tradingsystemid", "tradingsessionid",
        "businesstypeid", "markettypeid", "origintypeid", "paymenttypeid",
        "settlementtypeid", "custodianstatusid", "tradesettlementstatusid", "bloquingstatusid"
    );

    public static final Set<String> TAG_FIELDS = Set.of(
        "fiduciaryspecialist", "reference", "custodianname", "custodianceode", "masteraccount",
        "investorfirstname", "investorlastname", "investorcompanyname", "investordocumentnumber",
        "investoraccountnumber", "investoraccountname", "tradecanceledstatus", "matchdate", "clearingdate",
        "returnclearingdate", "assignmentmarkbuy", "assignmentmarksell", "fractionalmarkbuy",
        "fractionalmarksell", "exitindicatorsettlement", "canceledstatus", "matchtime",
        "ownpositionsell", "ownpositionbuy", "repurchaseagreementdate", "reallocationindicator",
        "settlementindicatoroutgoing", "settlementindicatorreturn", "resettlementindicatoradvance",
        "salesguarantee", "purchaseguarantee", "purchasepaymentindicator", "returnindicatorsettlement",
        "tradelastmodifyuser", "tradelastmodifyapplic", "tradelastmodifydate", "tradelastmodifyip",
        "settlementvaltax", "settlementwithholdingtax", "settlementwithholdingtaxamount",
        "settlementissuedreceipt", "settlementissuedreceiptnumber", "settlementrepoamount",
        "settlementfundingamount", "settlementnetoutflowtotal", "settlementoutflowturnovervalue",
        "settlementreturnturnovervalue", "settlementdeliveryversuspaymentvalue", "settlementamount",
        "settlementbrokerageservice", "settlementbankaccountid", "settlementcapitalgainvalue",
        "settlementdisbursementvalue", "settlementficadministratorid", "settlementreporate",
        "settlementlatepenality", "settlementcustodianstatus", "settlementparticipantinstructionid",
        "settlementvalidationdate", "settlementmodifyapplic", "settlementmodifyip",
        "settlementmodifydate", "settlementmodifyuser", "settlementlastmodifyuser",
        "settlementlastmodifyapplic", "settlementlastmodifydate", "settlementlastmodifyip",
        "depositorydescription", "countrycode", "countryname", "countrytimezone",
        "typedescription", "typecategory", "marketdescription", "marketcategory",
        "issuancemarketdescription", "issuancemarketcategory", "securitytitleequitycode",
        "securitytitlemnemonic", "securitytitleisin", "securitytitlelistingdate",
        "securitytitledelistingdate", "securitytitleparent", "securitytitlecategory",
        "securitytitlepunishmentrepo", "securitytitleregulatorycode", "participantbuycode",
        "participantbuydocumentnumber", "participantbuyname", "participantbuyshortname",
        "participantbuymnemonic", "participantbuyregistrationdate", "participantbuytaxcode",
        "participantbuymainaddress", "participantbuywebpage", "participantbuyphonenumber",
        "participantbuynitclearinghouse", "participantbuytypeentity", "participantbuymarginaccount",
        "participantbuydirectallocation", "participantbuymarketmaker", "participantbuyenabled",
        "participantbuycustodian", "participantsellcode", "participantselldocumentnumber",
        "participantsellname", "participantsellshortname", "participantsellmnemonic",
        "participantsellregistrationdate", "participantselltaxcode", "participantsellmainaddress",
        "participantsellwebpage", "participantsellphonenumber", "participantsellnitclearinghouse",
        "participantselltypeentity", "participantsellmarginaccount", "participantselldirectallocation",
        "participantsellmarketmaker", "participantsellenabled", "participantsellcustodian",
        "custodianbuycode", "custodianbuydocumentnumber", "custodianbuyname", "custodianbuyshortname",
        "custodianbuymnemonic", "custodianbuyregistrationdate", "custodianbuytaxcode",
        "custodianbuymainaddress", "custodianbuywebpage", "custodianbuyphonenumber",
        "custodianbuynitclearinghouse", "custodianbuytypeentity", "custodianbuymarginaccount",
        "custodianbuyenabled", "custodiansellcode", "custodianselldocumentnumber",
        "custodiansellname", "custodiansellshortname", "custodiansellmnemonic",
        "custodiansellregistrationdate", "custodianselltaxcode", "custodiansellmainaddress",
        "custodiansellwebpage", "custodiansellphonenumber", "custodiansellnitclearinghouse",
        "custodianselltypeentity", "custodiansellmarginaccount", "custodiansellencabled",
        "custodiansellcustodian", "settlementtradingsystemdescription", "settlementstatusdescription",
        "settlementstatuscategory", "settlementcustodiancode", "settlementcustodianshortname",
        "settlementsourcequotetypedescription", "settlementsourcequotetypecategory",
        "settlementdirectdepositorcode", "settlementdirectdepositorname", "settlementdirectdepositorshortname",
        "statusdescription", "statuscategory", "currencyname", "tradingsystemdescription",
        "tradingsessiondescription", "businesstypedescription", "businesstypecategory",
        "markettypedescription", "markettypecategory", "origintypedescription",
        "origintypecategory", "paymenttypedescription", "paymenttypecategory",
        "settlementtypedescription", "settlementtypecategory", "custodianstatusdescription",
        "custodianstatuscategory", "tradesettlementstatusdescription", "tradesettlementstatuscategory",
        "bloquingstatusdescription", "bloquingstatuscategory"
    );

    public static final Set<String> DATE_FIELDS = Set.of(
        "matchdate", "clearingdate", "returnclearingdate", "matchtime",
        "repurchaseagreementdate", "securitytitlelistingdate", "securitytitledelistingdate",
        "participantbuyregistrationdate", "participantsellregistrationdate",
        "custodianbuyregistrationdate", "custodiansellregistrationdate",
        "tradelastmodifydate", "settlementvalidationdate", "settlementmodifydate",
        "settlementlastmodifydate"
    );

    public static final Map<String, Function<RedisMapperUtils.FilterContext, String>> FILTER_STRATEGIES = Map.ofEntries(
        Map.entry("equals", ctx -> RedisMapperUtils.buildEqualsFilter(ctx, TAG_FIELDS)),
        Map.entry("contains", ctx -> RedisMapperUtils.buildContainsFilter(ctx, TAG_FIELDS)),
        Map.entry("greater_than", RedisMapperUtils::buildGreaterThanFilter),
        Map.entry("less_than", RedisMapperUtils::buildLessThanFilter),
        Map.entry("greater_than_or_equal", RedisMapperUtils::buildGreaterThanOrEqualFilter),
        Map.entry("less_than_or_equal", RedisMapperUtils::buildLessThanOrEqualFilter),
        Map.entry("starts_with", ctx -> RedisMapperUtils.buildStartsWithFilter(ctx, TAG_FIELDS)),
        Map.entry("ends_with", ctx -> RedisMapperUtils.buildEndsWithFilter(ctx, TAG_FIELDS)),
        Map.entry("not_equals", ctx -> RedisMapperUtils.buildNotEqualsFilter(ctx, TAG_FIELDS)),
        Map.entry("in", ctx -> RedisMapperUtils.buildInFilter(ctx, TAG_FIELDS)),
        Map.entry("not_in", ctx -> RedisMapperUtils.buildNotInFilter(ctx, TAG_FIELDS)),
        Map.entry("is_empty", ctx -> RedisMapperUtils.buildIsEmptyFilter(ctx, TAG_FIELDS)),
        Map.entry("is_not_empty", ctx -> RedisMapperUtils.buildIsNotEmptyFilter(ctx, TAG_FIELDS)),
        Map.entry("not_contains", ctx -> RedisMapperUtils.buildNotContainsFilter(ctx, TAG_FIELDS))
    );

    public static class FilterContext extends RedisMapperUtils.FilterContext {
        public FilterContext(String redisFieldName, String fieldValue, boolean isNumericField, boolean isDateField) {
            super(redisFieldName, fieldValue, isNumericField, isDateField);
        }
    }

    private static final Map<String, String> FIELD_NAME_TO_REDIS_MAPPING = Map.ofEntries(
        Map.entry("tradeId", "tradeid"),
        Map.entry("fraction", "fraction"),
        Map.entry("fiduciarySpecialist", "fiduciaryspecialist"),
        Map.entry("reference", "reference"),
        Map.entry("fractionQuantity", "fractionquantity"),
        Map.entry("commissionPercentage", "commissionpercentage"),
        Map.entry("commissionAmount", "commissionamount"),
        Map.entry("valTaxAmount", "valtaxamount"),
        Map.entry("netAmount", "netamount"),
        Map.entry("transferValue", "transfervalue"),
        Map.entry("custodianId", "custodianid"),
        Map.entry("custodianName", "custodianname"),
        Map.entry("custodianCode", "custodianceode"),
        Map.entry("masterAccount", "masteraccount"),
        Map.entry("investorId", "investorid"),
        Map.entry("investorFirstName", "investorfirstname"), // legacy — ver pendientes.md
        Map.entry("investorAccountName", "investoraccountname"),
        Map.entry("investorLastName", "investorlastname"),
        Map.entry("investorCompanyName", "investorcompanyname"),
        Map.entry("investorDocumentNumber", "investordocumentnumber"),
        Map.entry("investorAccountNumber", "investoraccountnumber"),
        Map.entry("tradeStatusId", "tradestatusid"),
        Map.entry("tradeCanceledStatus", "tradecanceledstatus"),
        Map.entry("tradeSpecialTradeId", "tradespecialtradeid"),
        Map.entry("sideId", "sideid")
    );

    public String mapFieldNameToRedisField(String fieldName) {
        return FIELD_NAME_TO_REDIS_MAPPING.get(fieldName);
    }

    public List<SettlementOutDto> convertToSettlementOutDto(List<Document> documents) {
        List<SettlementOutDto> settlements = new ArrayList<>();

        for (Document doc : documents) {
            try {
                SettlementOutDto settlement = mapDocumentToSettlementOutDto(doc);
                settlements.add(settlement);
            } catch (Exception e) {
                log.warn("Error converting document to SettlementOutDto: {}", e.getMessage());
            }
        }

        return settlements;
    }

    private SettlementOutDto mapDocumentToSettlementOutDto(Document doc) {
        return SettlementOutDto.builder()
            .tradeId(RedisMapperUtils.parseLong(doc.get("tradeid")))
            .fraction(RedisMapperUtils.parseInt(doc.get("fraction")))
            .fiduciarySpecialist(RedisMapperUtils.parseBoolean(doc.get("fiduciaryspecialist")))
            .reference(RedisMapperUtils.parseString(doc.get("reference")))
            .fractionQuantity(RedisMapperUtils.parseBigDecimal(doc.get("fractionquantity")))
            .commissionPercentage(RedisMapperUtils.parseBigDecimal(doc.get("commissionpercentage")))
            .commissionAmount(RedisMapperUtils.parseBigDecimal(doc.get("commissionamount")))
            .valTaxAmount(RedisMapperUtils.parseBigDecimal(doc.get("valtaxamount")))
            .netAmount(RedisMapperUtils.parseBigDecimal(doc.get("netamount")))
            .transferValue(RedisMapperUtils.parseBigDecimal(doc.get("transfervalue")))
            .custodianId(RedisMapperUtils.parseLong(doc.get("custodianid")))
            .custodian(buildCustodianDto(doc))
            .investor(buildInvestorDto(doc))
            .investorAccount(buildInvestorAccountDto(doc))
            .participantAccount(buildParticipantAccountDto(doc))
            .side(buildSideDto(doc))
            .build();
    }

    private ParticipantOutDto buildCustodianDto(Document doc) {
        return ParticipantOutDto.builder()
            .id(RedisMapperUtils.parseLong(doc.get("custodianid")))
            .name(RedisMapperUtils.parseString(doc.get("custodianname")))
            .code(RedisMapperUtils.parseString(doc.get("custodianceode")))
            .build();
    }

    private InvestorOutDto buildInvestorDto(Document doc) {
        return InvestorOutDto.builder()
            .id(RedisMapperUtils.parseLong(doc.get("investorid")))
            .firstName(RedisMapperUtils.parseString(doc.get("investorfirstname")))
            .lastName(RedisMapperUtils.parseString(doc.get("investorlastname")))
            .companyName(RedisMapperUtils.parseString(doc.get("investorcompanyname")))
            .documentNumber(RedisMapperUtils.parseString(doc.get("investordocumentnumber")))
            .build();
    }

    private InvestorAccountOutDto buildInvestorAccountDto(Document doc) {
        return InvestorAccountOutDto.builder()
            .accountNumber(RedisMapperUtils.parseString(doc.get("investoraccountnumber")))
            .accountName(RedisMapperUtils.parseString(doc.get("investoraccountname")))
            .build();
    }

    private ParticipantAccountOutDto buildParticipantAccountDto(Document doc) {
        return ParticipantAccountOutDto.builder()
            .participant(buildParticipantShortDto(doc))
            .build();
    }

    private ParticipantOutDto buildParticipantDto(Document doc) {
        return ParticipantOutDto.builder()
                .masterAccount(RedisMapperUtils.parseString(doc.get("masteraccount")))
                .build();
    }

    private ParticipantShortOutDto buildParticipantShortDto(Document doc) {
        return ParticipantShortOutDto.builder()
                .masterAccount(RedisMapperUtils.parseString(doc.get("masteraccount")))
                .build();
    }

    private SideOutDto buildSideDto(Document doc) {
        return SideOutDto.builder()
            .id(RedisMapperUtils.parseString(doc.get("sideid")))
            .build();
    }
}

```

## src/main/java/com/nubo/operations/query/api/helpers/SettlementSearchMapper.java

```java
package com.nubo.operations.query.api.helpers;

import com.nubo.operations.query.api.models.dto.response.IdentificationTypeOutDto;
import com.nubo.operations.query.api.models.dto.response.ParticipantOutDto;
import com.nubo.operations.query.api.models.enums.SideEnum;
import org.springframework.util.ObjectUtils;

import com.nubo.operations.query.api.models.dto.response.SettlementSearchOutDto;
import com.nubo.operations.query.api.models.dto.response.SideOutDto;
import com.nubo.operations.query.api.models.entity.ParticipantEntity;
import com.nubo.operations.query.api.models.entity.SettlementEntity;
import com.nubo.operations.query.api.models.entity.SideEntity;
import com.nubo.operations.query.api.models.entity.TradeEntity;

public final class SettlementSearchMapper {

    private SettlementSearchMapper() {
    }

    public static SettlementSearchOutDto toDto(SettlementEntity settlementEntity) {
        TradeEntity tradeEntity = settlementEntity.getTrade();
        ParticipantEntity participant = resolveParticipant(settlementEntity, tradeEntity);

        return SettlementSearchOutDto.builder()
                .tradeId(tradeEntity.getId())
                .matchId(tradeEntity.getMatchId())
                .fraction(settlementEntity.getFraction())
                .matchDate(tradeEntity.getMatchDate())
                .clearingDate(tradeEntity.getClearingDate())
                .market(tradeEntity.getMarket() != null
                        ? tradeEntity.getMarket().getDescription()
                        : null)
                .tradeType(tradeEntity.getType() != null
                        ? tradeEntity.getType().getDescription()
                        : null)
                .side(sideEntityToSideOutDto(settlementEntity.getSide()))
                .symbol(tradeEntity.getSecurityTitle() != null
                        ? tradeEntity.getSecurityTitle().getMnemonic()
                        : null)
                .isin(tradeEntity.getSecurityTitle() != null
                        ? tradeEntity.getSecurityTitle().getIsin()
                        : null)
                .fractionQuantity(settlementEntity.getFractionQuantity())
                .price(tradeEntity.getPrice())
                .fractionVolume(settlementEntity.getFractionVolume())
                .participant(participantEntityToParticipantOutDto(participant))
                .participantAccount(
                        settlementEntity.getParticipantAccount() != null
                                ? settlementEntity.getParticipantAccount().getAccountNumber()
                                : null
                )
                .investorDocumentType(settlementEntity.getInvestor() != null &&
                        settlementEntity.getInvestor().getIdentificationType() != null
                                ? settlementEntity.getInvestor().getIdentificationType().getDescription()
                                : null)
                .investorDocumentNumber(settlementEntity.getInvestor() != null
                        ? settlementEntity.getInvestor().getDocumentNumber()
                        : null)
                .investorName(settlementEntity.getInvestor() != null
                        ? settlementEntity.getInvestor().getCompanyName()
                        : null)
                .investorAccount(settlementEntity.getInvestorAccount() != null
                        ? settlementEntity.getInvestorAccount().getAccountNumber()
                        : null)
                .investorAccountName(settlementEntity.getInvestorAccount() != null
                        ? settlementEntity.getInvestorAccount().getAccountName()
                        : null)
                .custodianId(settlementEntity.getCustodian() != null
                        ? settlementEntity.getCustodian().getId()
                        : null)
                .custodianCode(settlementEntity.getCustodian() != null
                        ? settlementEntity.getCustodian().getCode()
                        : null)
                .custodianName(settlementEntity.getCustodian() != null
                        ? settlementEntity.getCustodian().getName()
                        : null)
                .custodianStatus(settlementEntity.getCustodianStatus() != null
                        ? settlementEntity.getCustodianStatus().getDescription()
                        : null)
                .cashAccount(settlementEntity.getCashAccount())
                .rejectionReason(settlementEntity.getRejectionReason())
                .sourceQuoteTypeId(settlementEntity.getSourceQuoteType() != null
                        ? settlementEntity.getSourceQuoteType().getId()
                        : null)
                .build();
    }

    private static ParticipantEntity resolveParticipant(
            SettlementEntity settlementEntity, TradeEntity tradeEntity) {

        ParticipantEntity sideParticipant = null;
        if (settlementEntity.getSide() != null && tradeEntity != null) {
            if (SideEnum.BUY.getId().equals(settlementEntity.getSide().getId())) {
                sideParticipant = tradeEntity.getParticipantBuy();
            } else if (SideEnum.SELL.getId().equals(settlementEntity.getSide().getId())) {
                sideParticipant = tradeEntity.getParticipantSell();
            }
        }

        return sideParticipant != null
                ? sideParticipant
                : settlementEntity.getTransferParticipant();
    }

    public static SideOutDto sideEntityToSideOutDto(SideEntity sideEntity) {
        if (ObjectUtils.isEmpty(sideEntity))
            return null;
        return SideOutDto.builder()
                .id(sideEntity.getId())
                .description(sideEntity.getDescription())
                .build();
    }

    public static ParticipantOutDto participantEntityToParticipantOutDto(ParticipantEntity participantEntity) {

        if (ObjectUtils.isEmpty(participantEntity)) return null;

        return ParticipantOutDto.builder()
                .id(participantEntity.getId())
                .code(participantEntity.getCode())
                .documentNumber(participantEntity.getDocumentNumber())

                .identificationType(
                        participantEntity.getIdentificationType() != null
                                ? IdentificationTypeOutDto.builder()
                                .id(participantEntity.getIdentificationType().getId())
                                .description(participantEntity.getIdentificationType().getDescription())
                                .code(participantEntity.getIdentificationType().getCode())
                                .build()
                                : null
                )

                .name(participantEntity.getName())
                .shortName(participantEntity.getShortName())
                .mnemonic(participantEntity.getMnemonic())
                .registrationDate(participantEntity.getRegistrationDate())
                .taxCode(participantEntity.getTaxCode())
                .nitClearingHouse(participantEntity.getNitClearingHouse())
                .typeEntity(participantEntity.getTypeEntity())
                .marginAccount(participantEntity.getMarginAccount())
                .masterAccount(participantEntity.getMasterAccount())
                .directAllocation(participantEntity.getDirectAllocation())
                .marketMaker(participantEntity.getMarketMaker())
                .enabled(participantEntity.getEnabled())
                .custodian(participantEntity.getCustodian())

                .build();
    }

}

```

## src/main/java/com/nubo/operations/query/api/helpers/SettlementSpecificationBuilder.java

```java
package com.nubo.operations.query.api.helpers;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.domain.Specification;

import com.nubo.operations.query.api.models.entity.SettlementEntity;
import com.nubo.operations.query.api.models.enums.SearchOperationEnum;
import com.nubo.operations.query.api.models.enums.SideEnum;
import com.nubo.operations.query.api.models.enums.StatusEnum;

import jakarta.persistence.criteria.JoinType;
import jakarta.persistence.criteria.Path;

public class SettlementSpecificationBuilder {

    private static final String TRADE_FIELD = "trade";
    private static final String CUSTODIAN_FIELD = "custodian";
    private static final String INVESTOR_FIELD = "investor";
    private static final String ID_FIELD = "id";
    private static final String NAME_FIELD = "name";
    private static final String CODE_FIELD = "code";

    private final List<Specification<SettlementEntity>> specifications = new ArrayList<>();

    public static SettlementSpecificationBuilder builder() {
        return new SettlementSpecificationBuilder();
    }

    public SettlementSpecificationBuilder withTradeId(Long tradeId) {
        if (tradeId != null) {
            specifications.add((root, query, cb) -> cb.equal(root.get(TRADE_FIELD).get(ID_FIELD), tradeId));
        }
        return this;
    }

    public SettlementSpecificationBuilder withTradeIdAndParticipant(Long tradeId, Long participantId) {
        if (tradeId != null) {
            specifications.add((root, query, cb) -> cb.equal(root.get(TRADE_FIELD).get(ID_FIELD), tradeId));
            if (participantId != null) {
                specifications.add((root, query, cb) -> cb.or(
                        cb.equal(root.get(TRADE_FIELD).get("participantBuy").get("id"), participantId),
                        cb.equal(root.get(TRADE_FIELD).get("participantSell").get("id"), participantId)));
            }
        }
        return this;
    }

    public SettlementSpecificationBuilder withSideId(String sideId) {
        if (sideId != null) {
            specifications.add((root, query, cb) -> cb.equal(root.get("side").get(ID_FIELD), sideId));
        }
        return this;
    }

    public SettlementSpecificationBuilder withInvestorDocumentNumber(String investorDocumentNumber) {
        if (investorDocumentNumber != null) {
            specifications.add((root, query, cb) -> cb.equal(root.get(INVESTOR_FIELD).get("documentNumber"),
                    investorDocumentNumber));
        }
        return this;
    }

    public SettlementSpecificationBuilder withCorrectionStatusId(Long statusId) {
        if (statusId != null) {
            specifications.add((root, query, cb) -> cb.equal(root.get("status").get(ID_FIELD),
                    statusId));
        } else {
            Set<Long> validStatusIds = Set.of(
                    StatusEnum.CORRECTION_REQUEST.getId(),
                    StatusEnum.CORRECTION_ACCEPTED.getId(),
                    StatusEnum.CORRECTION_REJECTED.getId());
            specifications.add((root, query, cb) -> root.get("status")
                    .get(ID_FIELD).in(validStatusIds));
        }
        return this;
    }

    public SettlementSpecificationBuilder withInvestorLikeDocumentNumber(String investorDocumentNumber) {
        if (investorDocumentNumber != null) {
            specifications.add((root, query, cb) -> cb.like(root.get(INVESTOR_FIELD).get("documentNumber"),
                    investorDocumentNumber + "%"));
        }
        return this;
    }

    public SettlementSpecificationBuilder withFiduciarySpecialist(Boolean fiduciarySpecialist) {
        if (fiduciarySpecialist != null) {
            specifications.add((root, query, cb) -> cb.equal(root.get("fiduciarySpecialist"), fiduciarySpecialist));
        }
        return this;
    }

    public SettlementSpecificationBuilder withReference(String reference) {
        if (reference != null) {
            specifications.add(
                    (root, query, cb) -> cb.like(cb.lower(root.get("reference")), "%" + reference.toLowerCase() + "%"));
        }
        return this;
    }

    public SettlementSpecificationBuilder withCustodianId(Long custodianId) {
        if (custodianId != null) {
            specifications.add((root, query, cb) -> cb.equal(root.get(CUSTODIAN_FIELD).get(ID_FIELD), custodianId));
        }
        return this;
    }

    public SettlementSpecificationBuilder withCustodianName(String custodianName) {
        if (custodianName != null) {
            specifications.add((root, query, cb) -> cb.like(cb.lower(root.get(CUSTODIAN_FIELD).get(NAME_FIELD)),
                    "%" + custodianName.toLowerCase() + "%"));
        }
        return this;
    }

    public SettlementSpecificationBuilder withCustodianCode(String custodianCode) {
        if (custodianCode != null) {
            specifications.add((root, query, cb) -> cb.equal(root.get(CUSTODIAN_FIELD).get(CODE_FIELD), custodianCode));
        }
        return this;
    }

    public SettlementSpecificationBuilder withCountryId(Long countryId) {
        if (countryId != null) {
            specifications
                    .add((root, query, cb) -> cb.equal(root.get(TRADE_FIELD).get("country").get(ID_FIELD), countryId));
        }
        return this;
    }

    public SettlementSpecificationBuilder withDepositId(Long depositId) {
        if (depositId != null) {
            specifications.add(
                    (root, query, cb) -> cb.equal(root.get(TRADE_FIELD).get("depository").get(ID_FIELD), depositId));
        }
        return this;
    }

    public SettlementSpecificationBuilder withOperationTypeId(Long operationTypeId) {
        if (operationTypeId != null) {
            specifications.add(
                    (root, query, cb) -> cb.equal(root.get(TRADE_FIELD).get("type").get(ID_FIELD), operationTypeId));
        }
        return this;
    }

    public SettlementSpecificationBuilder withParticipantIdBySettlementSide(Long participantId) {
        if (participantId != null) {
            specifications.add((root, query, cb) -> {
                var sideId = root.get("side").get(ID_FIELD);
                var trade = root.get(TRADE_FIELD);

                var buySide = cb.and(
                        cb.equal(sideId, SideEnum.BUY.getId()),
                        cb.equal(trade.get("participantBuy").get(ID_FIELD), participantId));
                var sellSide = cb.and(
                        cb.equal(sideId, SideEnum.SELL.getId()),
                        cb.equal(trade.get("participantSell").get(ID_FIELD), participantId));

                return cb.or(buySide, sellSide);
            });
        }
        return this;
    }

    public SettlementSpecificationBuilder withRegistrationDate(LocalDate registrationDate) {
        if (registrationDate != null) {
            specifications.add((root, query, cb) -> cb.equal(root.get(TRADE_FIELD).get("matchDate"), registrationDate));
        }
        return this;
    }

    public SettlementSpecificationBuilder withSettlementDate(LocalDate settlementDate) {
        if (settlementDate != null) {
            specifications
                    .add((root, query, cb) -> cb.equal(root.get(TRADE_FIELD).get("clearingDate"), settlementDate));
        }
        return this;
    }

    public SettlementSpecificationBuilder withCustodianStatusIdInternal(Long custodianStatusId) {
        if (custodianStatusId != null) {
            specifications
                    .add((root, query, cb) -> cb.equal(root.get("custodianStatus").get(ID_FIELD), custodianStatusId));
        } else {
            Set<Long> admittedStatusIds = Set.of(
                    StatusEnum.CUSTODIAN_ADMITTED.getId(),
                    StatusEnum.CUSTODIAN_PRE_MATCH.getId(),
                    StatusEnum.CUSTODIAN_TRANSFERRED.getId());
            specifications.add((root, query, cb) -> root.get("custodianStatus")
                    .get(ID_FIELD).in(admittedStatusIds));
        }
        return this;
    }

    public SettlementSpecificationBuilder withCustodianStatusIdExternal(Long custodianStatusId) {
        if (custodianStatusId != null) {
            specifications
                    .add((root, query, cb) -> cb.equal(root.get("custodianStatus").get(ID_FIELD), custodianStatusId));
        }
        return this;
    }

    public SettlementSpecificationBuilder withDistinct() {
        specifications.add((root, query, cb) -> {
            query.distinct(true);
            return cb.conjunction();
        });
        return this;
    }

    public SettlementSpecificationBuilder withFetchTradeAndCountry() {
        specifications.add((root, query, cb) -> {
            if (Long.class != query.getResultType() && long.class != query.getResultType()) {
                root.fetch(TRADE_FIELD, JoinType.INNER).fetch("country", JoinType.INNER);
            }
            return cb.conjunction();
        });
        return this;
    }

    public SettlementSpecificationBuilder withInvestorId(Long investorId) {
        if (investorId != null) {
            specifications.add((root, query, cb) -> cb.equal(root.get(INVESTOR_FIELD).get(ID_FIELD), investorId));
        }
        return this;
    }

    public SettlementSpecificationBuilder withInvestorAccountNumber(String accountNumber) {
        if (accountNumber != null) {
            specifications.add(
                    (root, query, cb) -> cb.equal(root.get("investorAccount").get("accountNumber"), accountNumber));
        }
        return this;
    }

    public SettlementSpecificationBuilder withTradeStatusId(Long tradeStatusId) {
        if (tradeStatusId != null) {
            specifications.add(
                    (root, query, cb) -> cb.equal(root.get(TRADE_FIELD).get("status").get(ID_FIELD), tradeStatusId));
        }
        return this;
    }

    public SettlementSpecificationBuilder withTradeCanceledStatus(String canceledStatus) {
        if (canceledStatus != null) {
            specifications
                    .add((root, query, cb) -> cb.equal(root.get(TRADE_FIELD).get("canceledStatus"), canceledStatus));
        }
        return this;
    }

    public SettlementSpecificationBuilder withTradeSpecialTradeId(String specialTradeId) {
        if (specialTradeId != null) {
            specifications
                    .add((root, query, cb) -> cb.equal(root.get(TRADE_FIELD).get("specialTradeId"), specialTradeId));
        }
        return this;
    }

    public SettlementSpecificationBuilder withDynamicFilter(String fieldName, String fieldValue,
            SearchOperationEnum operation) {
        if (fieldName != null && fieldValue != null && operation != null) {
            specifications.add((root, query, cb) -> {
                try {
                    Path<?> fieldPath = SettlementDynamicSearchMapper.getSettlementFieldPath(root, fieldName);
                    if (fieldPath != null) {
                        return SettlementDynamicSearchMapper.buildSettlementFieldPredicate(cb, fieldPath, fieldValue,
                                operation);
                    }
                    return cb.conjunction();
                } catch (Exception e) {
                    return cb.conjunction();
                }
            });
        }
        return this;
    }

    public SettlementSpecificationBuilder withFetchMilaDirectDepositor() {
        specifications.add((root, query, cb) -> {
            if (Long.class != query.getResultType() && long.class != query.getResultType()) {
                root.fetch("milaDirectDepositor", JoinType.LEFT);
            }
            return cb.conjunction();
        });
        return this;
    }

    public Specification<SettlementEntity> build() {
        if (specifications.isEmpty()) {
            return (root, query, cb) -> cb.conjunction();
        }
        return specifications.stream()
                .reduce(Specification::and)
                .orElse((root, query, cb) -> cb.conjunction());
    }
}

```

## src/main/java/com/nubo/operations/query/api/helpers/SettlementSpecificationFactory.java

```java
package com.nubo.operations.query.api.helpers;

import java.time.LocalDate;

import org.springframework.data.jpa.domain.Specification;

import com.nubo.operations.query.api.models.entity.SettlementEntity;
import com.nubo.operations.query.api.models.enums.SearchOperationEnum;

import jakarta.persistence.criteria.Path;

public class SettlementSpecificationFactory {

    private SettlementSpecificationFactory() {
        throw new IllegalStateException("Utility class");
    }

    public static Specification<SettlementEntity> createStandardFilter(
            Long tradeId, String sideId, String investorDocumentNumber) {

        return SettlementSpecificationBuilder.builder()
                .withTradeId(tradeId)
                .withSideId(sideId)
                .withInvestorLikeDocumentNumber(investorDocumentNumber)
                .withFetchMilaDirectDepositor()
                .build();
    }

    public static Specification<SettlementEntity> createStandardCustodianFilter(
            Long tradeId, String sideId, String investorDocumentNumber, Long custodianId) {

        return SettlementSpecificationBuilder.builder()
                .withTradeId(tradeId)
                .withSideId(sideId)
                .withInvestorLikeDocumentNumber(investorDocumentNumber)
                .withCustodianId(custodianId)
                .withFetchMilaDirectDepositor()
                .build();
    }

    public static Specification<SettlementEntity> createDynamicFilter(
            String fieldName, String fieldValue, SearchOperationEnum operation) {

        return (root, query, cb) -> {
            try {
                Path<?> fieldPath = SettlementDynamicSearchMapper.getSettlementFieldPath(root, fieldName);
                if (fieldPath != null) {
                    return SettlementDynamicSearchMapper.buildSettlementFieldPredicate(cb, fieldPath, fieldValue,
                            operation);
                }
                return cb.conjunction();
            } catch (Exception e) {
                return cb.conjunction();
            }
        };
    }

    public static Specification<SettlementEntity> createCombinedFilter(
            Long tradeId, String sideId, String investorDocumentNumber,
            String fieldName, String fieldValue, SearchOperationEnum operation) {

        return SettlementSpecificationBuilder.builder()
                .withTradeId(tradeId)
                .withSideId(sideId)
                .withInvestorDocumentNumber(investorDocumentNumber)
                .withDynamicFilter(fieldName, fieldValue, operation)
                .build();
    }

    public static Specification<SettlementEntity> createTradeFilter(Long tradeId) {
        return SettlementSpecificationBuilder.builder()
                .withTradeId(tradeId)
                .build();
    }

    public static Specification<SettlementEntity> createInvestorFilter(Long investorId, String documentNumber) {
        return SettlementSpecificationBuilder.builder()
                .withInvestorId(investorId)
                .withInvestorDocumentNumber(documentNumber)
                .build();
    }

    public static Specification<SettlementEntity> createCustodianFilter(Long custodianId, String custodianCode) {
        return SettlementSpecificationBuilder.builder()
                .withCustodianId(custodianId)
                .withCustodianCode(custodianCode)
                .build();
    }

    public static Specification<SettlementEntity> createAdvancedFilter(
            Long tradeId, String sideId, String investorDocumentNumber,
            Boolean fiduciarySpecialist, String reference, Long custodianId) {

        return SettlementSpecificationBuilder.builder()
                .withTradeId(tradeId)
                .withSideId(sideId)
                .withInvestorDocumentNumber(investorDocumentNumber)
                .withFiduciarySpecialist(fiduciarySpecialist)
                .withReference(reference)
                .withCustodianId(custodianId)
                .build();
    }

    public static Specification<SettlementEntity> createCustodyViewInternalFilter(
            Long countryId, Long depositId, Long custodianId, Long operationTypeId,
            Long participantId, LocalDate registrationDate,
            LocalDate settlementDate, Long custodianStatusId) {

        return SettlementSpecificationBuilder.builder()
                .withDistinct()
                .withFetchTradeAndCountry()
                .withCountryId(countryId)
                .withDepositId(depositId)
                .withCustodianId(custodianId)
                .withOperationTypeId(operationTypeId)
                .withParticipantIdBySettlementSide(participantId)
                .withRegistrationDate(registrationDate)
                .withSettlementDate(settlementDate)
                .withCustodianStatusIdInternal(custodianStatusId)
                .build();
    }

    public static Specification<SettlementEntity> createCustodyViewExternalFilter(
            Long countryId, Long depositId, Long custodianId, Long operationTypeId,
            Long participantId, LocalDate registrationDate,
            LocalDate settlementDate, Long custodianStatusId) {

        return SettlementSpecificationBuilder.builder()
                .withDistinct()
                .withFetchTradeAndCountry()
                .withCountryId(countryId)
                .withDepositId(depositId)
                .withCustodianId(custodianId)
                .withOperationTypeId(operationTypeId)
                .withParticipantIdBySettlementSide(participantId)
                .withRegistrationDate(registrationDate)
                .withSettlementDate(settlementDate)
                .withCustodianStatusIdExternal(custodianStatusId)
                .build();
    }
}

```

## src/main/java/com/nubo/operations/query/api/helpers/SortHelper.java

```java
package com.nubo.operations.query.api.helpers;

import org.springframework.data.domain.Sort;

/**
 * Helper class for creating safe Sort objects with field validation
 */
public final class SortHelper {

    private SortHelper() {
        throw new UnsupportedOperationException("Utility class");
    }

    /**
     * Creates a safe Sort object with validated field name and direction
     *
     * @param requestedSort the requested sort field name
     * @param order         the sort order (asc/desc)
     * @param defaultSort   the default sort field if requested is invalid
     * @return a Sort object with the validated field and direction, plus id as
     *         secondary sort
     */
    public static Sort createSafeSort(String requestedSort, String order, String defaultSort) {
        String sortField = resolveSortField(requestedSort, defaultSort);
        Sort.Direction direction = Sort.Direction.ASC.name().equalsIgnoreCase(order)
                ? Sort.Direction.ASC
                : Sort.Direction.DESC;
        return Sort.by(
                new Sort.Order(direction, sortField),
                new Sort.Order(direction, "id"));
    }

    /**
     * Resolves the sort field from a whitelist of allowed fields
     *
     * @param requestedSort the requested sort field
     * @param defaultSort   the default sort field if requested is invalid or null
     * @return the validated sort field name
     */
    private static String resolveSortField(String requestedSort, String defaultSort) {
        if (requestedSort == null || requestedSort.isBlank()) {
            return defaultSort;
        }
        return switch (requestedSort) {
            case "id" -> "id";
            case "matchId" -> "matchId";
            case "matchDate" -> "matchDate";
            case "clearingDate" -> "clearingDate";
            case "returnClearingDate" -> "returnClearingDate";
            case "quantity" -> "quantity";
            case "price" -> "price";
            case "volume" -> "volume";
            case "status" -> "status";
            case "type" -> "type";
            case "country" -> "country";
            case "participantBuy" -> "participantBuy";
            case "participantSell" -> "participantSell";
            default -> defaultSort;
        };
    }
}

```

## src/main/java/com/nubo/operations/query/api/helpers/TradeRedisMapper.java

```java
package com.nubo.operations.query.api.helpers;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.function.Function;

import org.springframework.stereotype.Component;

import com.nubo.operations.query.api.models.dto.response.CountryOutDto;
import com.nubo.operations.query.api.models.dto.response.CurrencyOutDto;
import com.nubo.operations.query.api.models.dto.response.MarketOutDto;
import com.nubo.operations.query.api.models.dto.response.ParticipantOutDto;
import com.nubo.operations.query.api.models.dto.response.SecurityTitleOutDto;
import com.nubo.operations.query.api.models.dto.response.StatusOutDto;
import com.nubo.operations.query.api.models.dto.response.TradeOutDto;
import com.nubo.operations.query.api.models.dto.response.TradingSessionOutDto;
import com.nubo.operations.query.api.models.dto.response.TradingSystemOutDto;
import com.nubo.operations.query.api.models.dto.response.TypeOutDto;

import io.redisearch.Document;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class TradeRedisMapper {

    public static final Set<String> NUMERIC_FIELDS = Set.of(
        "tradeid", "matchid", "quantity", "price", "volume",
        "repurchaserate", "repurchaseamount", "daystosettlement", "reporate", "repoamount",
        "fundingamount", "netoutflowtotal", "outflowturnovervalue", "totalnetreturn",
        "returnturnovervalue", "deliveryversuspaymentvalue", "advancestatus",
        "depositoryid", "countryid", "typeid", "marketid", "issuancemarketid",
        "securitytitlecurrencyid", "securitytitlesettlementperiod", "securitytitleparentid",
        "securitytitlecountryid", "securitytitleamountissued", "securitytitlesegmentid",
        "participantbuyid", "participantsellid", "custodianbuyid", "custodiansellid",
        "statusid", "currencyid", "tradingsystemid", "tradingsessionid",
        "businesstypeid", "markettypeid", "origintypeid", "paymenttypeid",
        "settlementtypeid", "custodianstatusid", "settlementstatusid", "bloquingstatusid"
    );

    public static final Set<String> TAG_FIELDS = Set.of(
        "countryname", "countrycode", "countrytimezone", "depositorydescription",
        "typedescription", "typecategory", "marketdescription", "marketcategory",
        "issuancemarketdescription", "issuancemarketcategory", "securitytitleequitycode",
        "securitytitlemnemonic", "securitytitleisin", "securitytitlesettlementperiod",
        "securitytitleparent", "securitytitleregulatorycode", "participantbuycode",
        "participantbuydocumentnumber", "participantbuyname", "participantbuyshortname",
        "participantbuymnemonic", "participantbuytaxcode", "participantbuymainaddress",
        "participantbuywebpage", "participantbuyphonenumber", "participantbuynitclearinghouse",
        "participantbuytypeentity", "participantbuymarginaccount", "participantbuymasteraccount",
        "participantbuydirectallocation", "participantbuymarketmaker", "participantbuyenabled",
        "participantbuycustodian", "participantsellcode", "participantselldocumentnumber",
        "participantsellname", "participantsellshortname", "participantsellmnemonic",
        "participantselltaxcode", "participantsellmainaddress", "participantsellwebpage",
        "participantsellphonenumber", "participantsellnitclearinghouse", "participantselltypeentity",
        "participantsellmarginaccount", "participantsellmasteraccount", "participantselldirectallocation",
        "participantsellmarketmaker", "participantsellenabled", "participantsellcustodian",
        "statusdescription", "statuscategory", "currencycode", "currencyname",
        "tradingsystemdescription", "tradingsessiondescription", "businesstypedescription",
        "businesstypecategory", "markettypedescription", "markettypecategory",
        "origintypedescription", "origintypecategory", "tradelastmodifyuser",
        "tradelastmodifyapplic", "tradelastmodifyip"
    );

    public static final Set<String> DATE_FIELDS = Set.of(
        "matchdate", "clearingdate", "returnclearingdate", "matchtime",
        "repurchaseagreementdate", "securitytitlelistingdate", "securitytitledelistingdate",
        "participantbuyregistrationdate", "participantsellregistrationdate",
        "custodianbuyregistrationdate", "custodiansellregistrationdate",
        "tradelastmodifydate"
    );

    public static final Map<String, Function<RedisMapperUtils.FilterContext, String>> FILTER_STRATEGIES = Map.ofEntries(
        Map.entry("equals", ctx -> RedisMapperUtils.buildEqualsFilter(ctx, TAG_FIELDS)),
        Map.entry("contains", ctx -> RedisMapperUtils.buildContainsFilter(ctx, TAG_FIELDS)),
        Map.entry("greater_than", RedisMapperUtils::buildGreaterThanFilter),
        Map.entry("less_than", RedisMapperUtils::buildLessThanFilter),
        Map.entry("greater_than_or_equal", RedisMapperUtils::buildGreaterThanOrEqualFilter),
        Map.entry("less_than_or_equal", RedisMapperUtils::buildLessThanOrEqualFilter),
        Map.entry("starts_with", ctx -> RedisMapperUtils.buildStartsWithFilter(ctx, TAG_FIELDS)),
        Map.entry("ends_with", ctx -> RedisMapperUtils.buildEndsWithFilter(ctx, TAG_FIELDS)),
        Map.entry("not_equals", ctx -> RedisMapperUtils.buildNotEqualsFilter(ctx, TAG_FIELDS)),
        Map.entry("in", ctx -> RedisMapperUtils.buildInFilter(ctx, TAG_FIELDS)),
        Map.entry("not_in", ctx -> RedisMapperUtils.buildNotInFilter(ctx, TAG_FIELDS)),
        Map.entry("is_empty", ctx -> RedisMapperUtils.buildIsEmptyFilter(ctx, TAG_FIELDS)),
        Map.entry("is_not_empty", ctx -> RedisMapperUtils.buildIsNotEmptyFilter(ctx, TAG_FIELDS)),
        Map.entry("not_contains", ctx -> RedisMapperUtils.buildNotContainsFilter(ctx, TAG_FIELDS))
    );

    public static class FilterContext extends RedisMapperUtils.FilterContext {
        public FilterContext(String redisFieldName, String fieldValue, boolean isNumericField, boolean isDateField) {
            super(redisFieldName, fieldValue, isNumericField, isDateField);
        }
    }

    private static final Map<String, String> FIELD_NAME_TO_REDIS_MAPPING = Map.ofEntries(
    Map.entry("id", "tradeid"),
    Map.entry("tradeId", "tradeid"),
    Map.entry("matchDate", "matchdate"),
    Map.entry("matchId", "matchid"),
    Map.entry("clearingDate", "clearingdate"),
    Map.entry("returnClearingDate", "returnclearingdate"),
    Map.entry("assignmentMarkBuy", "assignmentmarkbuy"),
    Map.entry("assignmentMarkSell", "assignmentmarksell"),
    Map.entry("fractionalMarkBuy", "fractionalmarkbuy"),
    Map.entry("fractionalMarkSell", "fractionalmarksell"),
    Map.entry("advanceStatus", "advancestatus"),
    Map.entry("exitIndicatorSettlement", "exitindicatorsettlement"),
    Map.entry("canceledStatus", "canceledstatus"),
    Map.entry("quantity", "quantity"),
    Map.entry("price", "price"),
    Map.entry("volume", "volume"),
    Map.entry("repurchaseRate", "repurchaserate"),
    Map.entry("repurchaseAmount", "repurchaseamount"),
    Map.entry("matchTime", "matchtime"),
    Map.entry("ownPositionSell", "ownpositionsell"),
    Map.entry("ownPositionBuy", "ownpositionbuy"),
    Map.entry("repurchaseAgreementDate", "repurchaseagreementdate"),
    Map.entry("daysToSettlement", "daystosettlement"),
    Map.entry("repoRate", "reporate"),
    Map.entry("repoAmount", "repoamount"),
    Map.entry("fundingAmount", "fundingamount"),
    Map.entry("netOutFlowTotal", "netoutflowtotal"),
    Map.entry("outFlowTurnOverValue", "outflowturnovervalue"),
    Map.entry("totalNetReturn", "totalnetreturn"),
    Map.entry("returnTurnoverValue", "returnturnovervalue"),
    Map.entry("deliveryVersusPaymentValue", "deliveryversuspaymentvalue"),
    Map.entry("reallocationIndicator", "reallocationindicator"),
    Map.entry("settlementIndicatorOutgoing", "settlementindicatoroutgoing"),
    Map.entry("settlementIndicatorReturn", "settlementindicatorreturn"),
    Map.entry("resettlementIndicatorAdvance", "resettlementindicatoradvance"),
    Map.entry("specialTradeId", "specialtradeid"),
    Map.entry("salesGuarantee", "salesguarantee"),
    Map.entry("purchaseGuarantee", "purchaseguarantee"),
    Map.entry("purchasePaymentIndicator", "purchasepaymentindicator"),
    Map.entry("returnIndicatorSettlement", "returnindicatorsettlement"),
    Map.entry("depositoryId", "depositoryid"),
    Map.entry("depositoryName", "depositorydescription"),
    Map.entry("countryId", "countryid"),
    Map.entry("countryName", "countryname"),
    Map.entry("countryCode", "countrycode"),
    Map.entry("typeId", "typeid"),
    Map.entry("typeDescription", "typedescription"),
    Map.entry("marketId", "marketid"),
    Map.entry("marketDescription", "marketdescription"),
    Map.entry("issuanceMarketId", "issuancemarketid"),
    Map.entry("issuanceMarketDescription", "issuancemarketdescription"),
    Map.entry("securityTitleId", "securitytitleequitycode"),
    Map.entry("securityTitleIsin", "securitytitleisin"),
    Map.entry("securityTitleMnemonic", "securitytitlemnemonic"),
    Map.entry("participantBuyId", "participantbuyid"),
    Map.entry("participantBuyName", "participantbuyname"),
    Map.entry("participantSellId", "participantsellid"),
    Map.entry("participantSellName", "participantsellname"),
    Map.entry("custodianBuyId", "custodianbuyid"),
    Map.entry("custodianBuyName", "custodianbuyname"),
    Map.entry("custodianSellId", "custodiansellid"),
    Map.entry("custodianSellName", "custodiansellname"),
    Map.entry("statusId", "statusid"),
    Map.entry("statusDescription", "statusdescription"),
    Map.entry("currencyId", "currencyid"),
    Map.entry("currencyCode", "currencycode"),
    Map.entry("currencyName", "currencyname"),
    Map.entry("tradingSystemId", "tradingsystemid"),
    Map.entry("tradingSystemDescription", "tradingsystemdescription"),
    Map.entry("tradingSessionId", "tradingsessionid"),
    Map.entry("tradingSessionDescription", "tradingsessiondescription"),
    Map.entry("businessTypeId", "businesstypeid"),
    Map.entry("businessTypeDescription", "businesstypedescription"),
    Map.entry("marketTypeId", "markettypeid"),
    Map.entry("marketTypeDescription", "markettypedescription"),
    Map.entry("originTypeId", "origintypeid"),
    Map.entry("originTypeDescription", "origintypedescription"),
    Map.entry("paymentTypeId", "paymenttypeid"),
    Map.entry("paymentTypeDescription", "paymenttypedescription"),
    Map.entry("settlementTypeId", "settlementtypeid"),
    Map.entry("settlementTypeDescription", "settlementtypedescription"),
    Map.entry("custodianStatusId", "custodianstatusid"),
    Map.entry("custodianStatusDescription", "custodianstatusdescription"),
    Map.entry("settlementStatusId", "settlementstatusid"),
    Map.entry("settlementStatusDescription", "settlementstatusdescription"),
    Map.entry("bloquingStatusId", "bloquingstatusid"),
    Map.entry("bloquingStatusDescription", "bloquingstatusdescription")
);

    public String mapFieldNameToRedisField(String fieldName) {
        return FIELD_NAME_TO_REDIS_MAPPING.get(fieldName);
    }

    public List<TradeOutDto> convertToTradeOutDto(List<Document> documents) {
        List<TradeOutDto> trades = new ArrayList<>();

        for (Document doc : documents) {
            try {
                TradeOutDto trade = mapDocumentToTradeOutDto(doc);
                trades.add(trade);
            } catch (Exception e) {
                log.warn("Error converting document to TradeOutDto: {}", e.getMessage());
            }
        }

        return trades;
    }

    private TradeOutDto mapDocumentToTradeOutDto(Document doc) {
        return TradeOutDto.builder()
            .id(RedisMapperUtils.parseLong(doc.get("tradeid")))
            .matchDate(RedisMapperUtils.parseLocalDate(doc.get("matchdate")))
            .matchId(RedisMapperUtils.parseLong(doc.get("matchid")))
            .clearingDate(RedisMapperUtils.parseLocalDate(doc.get("clearingdate")))
            .returnClearingDate(RedisMapperUtils.parseLocalDate(doc.get("returnclearingdate")))
            .assignmentMarkBuy(RedisMapperUtils.parseBoolean(doc.get("assignmentmarkbuy")))
            .assignmentMarkSell(RedisMapperUtils.parseBoolean(doc.get("assignmentmarksell")))
            .fractionalMarkBuy(RedisMapperUtils.parseBoolean(doc.get("fractionalmarkbuy")))
            .fractionalMarkSell(RedisMapperUtils.parseBoolean(doc.get("fractionalmarksell")))
            .advanceStatus(RedisMapperUtils.parseInt(doc.get("advancestatus")))
            .exitIndicatorSettlement(RedisMapperUtils.parseBoolean(doc.get("exitindicatorsettlement")))
            .canceledStatus(RedisMapperUtils.parseBoolean(doc.get("canceledstatus")))
            .quantity(RedisMapperUtils.parseBigDecimal(doc.get("quantity")))
            .price(RedisMapperUtils.parseBigDecimal(doc.get("price")))
            .volume(RedisMapperUtils.parseBigDecimal(doc.get("volume")))
            .repurchaseRate(RedisMapperUtils.parseBigDecimal(doc.get("repurchaserate")))
            .repurchaseAmount(RedisMapperUtils.parseBigDecimal(doc.get("repurchaseamount")))
            .matchTime(RedisMapperUtils.parseOffsetDateTime(doc.get("matchtime")))
            .ownPositionSell(RedisMapperUtils.parseBoolean(doc.get("ownpositionsell")))
            .ownPositionBuy(RedisMapperUtils.parseBoolean(doc.get("ownpositionbuy")))
            .repurchaseAgreementDate(RedisMapperUtils.parseLocalDate(doc.get("repurchaseagreementdate")))
            .daysToSettlement(RedisMapperUtils.parseInt(doc.get("daystosettlement")))
            .repoRate(RedisMapperUtils.parseBigDecimal(doc.get("reporate")))
            .repoAmount(RedisMapperUtils.parseBigDecimal(doc.get("repoamount")))
            .fundingAmount(RedisMapperUtils.parseBigDecimal(doc.get("fundingamount")))
            .netOutFlowTotal(RedisMapperUtils.parseBigDecimal(doc.get("netoutflowtotal")))
            .outFlowTurnOverValue(RedisMapperUtils.parseBigDecimal(doc.get("outflowturnovervalue")))
            .totalNetReturn(RedisMapperUtils.parseBigDecimal(doc.get("totalnetreturn")))
            .returnTurnoverValue(RedisMapperUtils.parseBigDecimal(doc.get("returnturnovervalue")))
            .deliveryVersusPaymentValue(RedisMapperUtils.parseBigDecimal(doc.get("deliveryversuspaymentvalue")))
            .reallocationIndicator(RedisMapperUtils.parseBoolean(doc.get("reallocationindicator")))
            .settlementIndicatorOutgoing(RedisMapperUtils.parseBoolean(doc.get("settlementindicatoroutgoing")))
            .settlementIndicatorReturn(RedisMapperUtils.parseBoolean(doc.get("settlementindicatorreturn")))
            .resettlementIndicatorAdvance(RedisMapperUtils.parseBoolean(doc.get("resettlementindicatoradvance")))
            .specialTradeId(RedisMapperUtils.parseLong(doc.get("specialtradeid")))
            .purchasePaymentIndicator(RedisMapperUtils.parseBoolean(doc.get("purchasepaymentindicator")))
            .returnIndicatorSettlement(RedisMapperUtils.parseBoolean(doc.get("returnindicatorsettlement")))
            .participantBuy(buildParticipantBuyDto(doc))
            .participantSell(buildParticipantSellDto(doc))
            .status(buildStatusDto(doc))
            .country(buildCountryDto(doc))
            .type(buildTypeDto(doc))
            .currency(buildCurrencyDto(doc))
            .securityTitle(buildSecurityTitleDto(doc))
            .market(buildMarketDto(doc))
            .issuanceMarket(buildIssuanceMarketDto(doc))
            .tradingSystem(buildTradingSystemDto(doc))
            .tradingSession(buildTradingSessionDto(doc))
            .build();
    }

    private ParticipantOutDto buildParticipantBuyDto(Document doc) {
        return ParticipantOutDto.builder()
            .id(RedisMapperUtils.parseLong(doc.get("participantbuyid")))
            .code(RedisMapperUtils.parseString(doc.get("participantbuycode")))
            .name(RedisMapperUtils.parseString(doc.get("participantbuyname")))
            .shortName(RedisMapperUtils.parseString(doc.get("participantbuyshortname")))
            .documentNumber(RedisMapperUtils.parseString(doc.get("participantbuydocumentnumber")))
            .mnemonic(RedisMapperUtils.parseString(doc.get("participantbuymnemonic")))
            .registrationDate(RedisMapperUtils.parseLocalDate(doc.get("participantbuyregistrationdate")))
            .taxCode(RedisMapperUtils.parseString(doc.get("participantbuytaxcode")))
            .nitClearingHouse(RedisMapperUtils.parseString(doc.get("participantbuynitclearinghouse")))
            .typeEntity(RedisMapperUtils.parseString(doc.get("participantbuytypeentity")))
            .marginAccount(RedisMapperUtils.parseString(doc.get("participantbuymarginaccount")))
            .masterAccount(RedisMapperUtils.parseString(doc.get("participantbuymasteraccount")))
            .directAllocation(RedisMapperUtils.parseString(doc.get("participantbuydirectallocation")))
            .marketMaker(RedisMapperUtils.parseString(doc.get("participantbuymarketmaker")))
            .enabled(RedisMapperUtils.parseBoolean(doc.get("participantbuyenabled")))
            .custodian(RedisMapperUtils.parseBoolean(doc.get("participantbuycustodian")))
            .build();
    }

    private ParticipantOutDto buildParticipantSellDto(Document doc) {
        return ParticipantOutDto.builder()
            .id(RedisMapperUtils.parseLong(doc.get("participantsellid")))
            .code(RedisMapperUtils.parseString(doc.get("participantsellcode")))
            .name(RedisMapperUtils.parseString(doc.get("participantsellname")))
            .shortName(RedisMapperUtils.parseString(doc.get("participantsellshortname")))
            .documentNumber(RedisMapperUtils.parseString(doc.get("participantselldocumentnumber")))
            .mnemonic(RedisMapperUtils.parseString(doc.get("participantsellmnemonic")))
            .registrationDate(RedisMapperUtils.parseLocalDate(doc.get("participantsellregistrationdate")))
            .taxCode(RedisMapperUtils.parseString(doc.get("participantselltaxcode")))
            .nitClearingHouse(RedisMapperUtils.parseString(doc.get("participantsellnitclearinghouse")))
            .typeEntity(RedisMapperUtils.parseString(doc.get("participantselltypeentity")))
            .marginAccount(RedisMapperUtils.parseString(doc.get("participantsellmarginaccount")))
            .masterAccount(RedisMapperUtils.parseString(doc.get("participantsellmasteraccount")))
            .directAllocation(RedisMapperUtils.parseString(doc.get("participantselldirectallocation")))
            .marketMaker(RedisMapperUtils.parseString(doc.get("participantsellmarketmaker")))
            .enabled(RedisMapperUtils.parseBoolean(doc.get("participantsellenabled")))
            .custodian(RedisMapperUtils.parseBoolean(doc.get("participantsellcustodian")))
            .build();
    }

    private StatusOutDto buildStatusDto(Document doc) {
        return StatusOutDto.builder()
            .id(RedisMapperUtils.parseLong(doc.get("statusid")))
            .description(RedisMapperUtils.parseString(doc.get("statusdescription")))
            .category(RedisMapperUtils.parseString(doc.get("statuscategory")))
            .build();
    }

    private CountryOutDto buildCountryDto(Document doc) {
        return CountryOutDto.builder()
            .id(RedisMapperUtils.parseLong(doc.get("countryid")))
            .code(RedisMapperUtils.parseString(doc.get("countrycode")))
            .name(RedisMapperUtils.parseString(doc.get("countryname")))
            .timeZone(RedisMapperUtils.parseString(doc.get("countrytimezone")))
            .build();
    }

    private TypeOutDto buildTypeDto(Document doc) {
        return TypeOutDto.builder()
            .id(RedisMapperUtils.parseLong(doc.get("typeid")))
            .description(RedisMapperUtils.parseString(doc.get("typedescription")))
            .category(RedisMapperUtils.parseString(doc.get("typecategory")))
            .build();
    }

    private CurrencyOutDto buildCurrencyDto(Document doc) {
        return CurrencyOutDto.builder()
            .id(RedisMapperUtils.parseLong(doc.get("currencyid")))
            .code(RedisMapperUtils.parseString(doc.get("currencycode")))
            .name(RedisMapperUtils.parseString(doc.get("currencyname")))
            .build();
    }

    private SecurityTitleOutDto buildSecurityTitleDto(Document doc) {
        return SecurityTitleOutDto.builder()
            .equityCode(RedisMapperUtils.parseString(doc.get("securitytitleequitycode")))
            .mnemonic(RedisMapperUtils.parseString(doc.get("securitytitlemnemonic")))
            .isin(RedisMapperUtils.parseString(doc.get("securitytitleisin")))
            .currencyId(RedisMapperUtils.parseInt(doc.get("securitytitlecurrencyid")))
            .settlementPeriod(RedisMapperUtils.parseString(doc.get("securitytitlesettlementperiod")))
            .listingDate(RedisMapperUtils.parseLocalDateTime(doc.get("securitytitlelistingdate")))
            .delistingDate(RedisMapperUtils.parseLocalDate(doc.get("securitytitledelistingdate")))
            .parent(RedisMapperUtils.parseBoolean(doc.get("securitytitleparent")))
            .parentId(RedisMapperUtils.parseLong(doc.get("securitytitleparentid")))
            .countryId(RedisMapperUtils.parseInt(doc.get("securitytitlecountryid")))
            .amountIssued(RedisMapperUtils.parseBigInteger(doc.get("securitytitleamountissued")))
            .segmentId(RedisMapperUtils.parseInt(doc.get("securitytitlesegmentid")))
            .category(RedisMapperUtils.parseString(doc.get("securitytitlecategory")))
            .punishmentRepo(RedisMapperUtils.parseBigDecimal(doc.get("securitytitlepunishmentrepo")))
            .regulatoryCode(RedisMapperUtils.parseString(doc.get("securitytitleregulatorycode")))
            .build();
    }

    private MarketOutDto buildMarketDto(Document doc) {
        return MarketOutDto.builder()
            .id(RedisMapperUtils.parseString(doc.get("marketid")))
            .description(RedisMapperUtils.parseString(doc.get("marketdescription")))
            .category(RedisMapperUtils.parseString(doc.get("marketcategory")))
            .build();
    }

    private MarketOutDto buildIssuanceMarketDto(Document doc) {
        return MarketOutDto.builder()
            .id(RedisMapperUtils.parseString(doc.get("issuancemarketid")))
            .description(RedisMapperUtils.parseString(doc.get("issuancemarketdescription")))
            .category(RedisMapperUtils.parseString(doc.get("issuancemarketcategory")))
            .build();
    }

    private TradingSystemOutDto buildTradingSystemDto(Document doc) {
        return TradingSystemOutDto.builder()
            .id(RedisMapperUtils.parseLong(doc.get("tradingsystemid")))
            .description(RedisMapperUtils.parseString(doc.get("tradingsystemdescription")))
            .build();
    }

    private TradingSessionOutDto buildTradingSessionDto(Document doc) {
        return TradingSessionOutDto.builder()
            .id(RedisMapperUtils.parseString(doc.get("tradingsessionid")))
            .description(RedisMapperUtils.parseString(doc.get("tradingsessiondescription")))
            .build();
    }
}

```

## src/main/java/com/nubo/operations/query/api/helpers/TradeSpecificationBuilder.java

```java
package com.nubo.operations.query.api.helpers;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.nubo.operations.query.api.models.enums.MarketEnum;
import org.springframework.data.jpa.domain.Specification;

import com.nubo.operations.query.api.application.properties.PropertiesContext;
import com.nubo.operations.query.api.models.domain.DynamicFilter;
import com.nubo.operations.query.api.models.entity.SettlementEntity;
import com.nubo.operations.query.api.models.entity.TradeEntity;
import com.nubo.operations.query.api.models.enums.SearchOperationEnum;
import com.nubo.operations.query.api.models.enums.StatusEnum;
import com.nubo.operations.query.api.models.enums.TypeEnum;

import jakarta.persistence.criteria.Path;
import jakarta.persistence.criteria.Root;
import jakarta.persistence.criteria.Subquery;

public class TradeSpecificationBuilder {

    private static final String CLEARING_DATE_FIELD = "clearingDate";
    private static final String MATCH_DATE_FIELD = "matchDate";

    private final List<Specification<TradeEntity>> specifications = new ArrayList<>();

    public static TradeSpecificationBuilder builder() {
        return new TradeSpecificationBuilder();
    }

    public TradeSpecificationBuilder withMatchId(Long matchId) {
        if (matchId != null) {
            specifications.add((root, query, cb) -> cb.like(cb.toString(root.get("matchId")), matchId + "%"));
        }
        return this;
    }

    public TradeSpecificationBuilder withStatusId(Integer statusId) {
        if (statusId != null) {
            specifications.add((root, query, cb) -> {
                var statusPredicate = cb.equal(root.get("status").get("id"), statusId);
                if (!StatusEnum.CANCELED.getId().equals(statusId.longValue())) {
                    var datePredicate = cb.greaterThanOrEqualTo(root.get(CLEARING_DATE_FIELD),
                            PropertiesContext.getClientDatetime().toLocalDate());
                    return cb.and(statusPredicate, datePredicate);
                }
                return statusPredicate;
            });
        }
        return this;
    }

    public TradeSpecificationBuilder withCanceledStatus(Boolean canceledStatus) {
        if (canceledStatus != null) {
            specifications.add((root, query, cb) -> cb.equal(root.get("canceledStatus"), canceledStatus));
        }
        return this;
    }

    public TradeSpecificationBuilder withBuyStatus(Long buyStatusId) {
        if (buyStatusId != null) {
            specifications.add((root, query, cb) -> cb.equal(root.get("buyStatus").get("id"), buyStatusId));
        }
        return this;
    }

    public TradeSpecificationBuilder withSellStatus(Long sellStatusId) {
        if (sellStatusId != null) {
            specifications.add((root, query, cb) -> cb.equal(root.get("sellStatus").get("id"), sellStatusId));
        }
        return this;
    }

    public TradeSpecificationBuilder withParticipantId(Long participantId) {
        if (participantId != null) {
            specifications.add((root, query, cb) -> cb.or(
                    cb.equal(root.get("participantBuy").get("id"), participantId),
                    cb.equal(root.get("participantSell").get("id"), participantId)));
        }
        return this;
    }

    public TradeSpecificationBuilder withCustodianRestriction(Long participantId) {

        if (participantId != null) {

            specifications.add((root, query, cb) -> {

                Subquery<Long> subquery = query.subquery(Long.class);
                Root<SettlementEntity> settlementRoot = subquery.from(SettlementEntity.class);

                subquery.select(settlementRoot.get("trade").get("id"))
                        .where(
                                cb.equal(
                                        settlementRoot.get("custodian").get("id"),
                                        participantId));

                return root.get("id").in(subquery);
            });
        }

        return this;
    }

    public TradeSpecificationBuilder withTypeId(Long typeId) {
        if (typeId != null) {
            specifications.add((root, query, cb) -> cb.equal(root.get("type").get("id"), typeId));
        }
        return this;
    }

    public TradeSpecificationBuilder withMarketId(Long marketId) {
        if (marketId != null) {
            specifications.add((root, query, cb) -> cb.equal(root.get("market").get("id"), marketId));
        } else {
            List<Long> defaultMarketIds = List.of(
                    MarketEnum.RENTA_VARIABLE.getId(),
                    MarketEnum.MERCADO_GLOBAL.getId());
            specifications.add((root, query, cb) -> root.get("market").get("id").in(defaultMarketIds));
        }
        return this;
    }

    public TradeSpecificationBuilder withMnemonic(String mnemonic) {
        if (mnemonic != null && !mnemonic.isBlank()) {
            specifications.add((root, query, cb) -> cb.like(
                    cb.lower(root.get("securityTitle").get("mnemonic").as(String.class)),
                    "%" + mnemonic.toLowerCase() + "%"));
        }
        return this;
    }

    public TradeSpecificationBuilder withCountryIds(List<Long> countryIds) {
        if (countryIds != null && !countryIds.isEmpty()) {
            specifications.add((root, query, cb) -> root.get("country").get("id").in(countryIds));
        }
        return this;
    }

    public TradeSpecificationBuilder withCountryId(Long countryId) {
        if (countryId != null) {
            specifications.add((root, query, cb) -> cb.equal(root.get("country").get("id"), countryId));
        }
        return this;
    }

    public TradeSpecificationBuilder withCustodianDatePriorityFilter(
            LocalDate startMatchDate,
            LocalDate endMatchDate,
            LocalDate startClearingDate,
            LocalDate endClearingDate) {

        boolean hasMatchDateRange = startMatchDate != null && endMatchDate != null;
        boolean hasClearingDateRange = startClearingDate != null && endClearingDate != null;
        boolean hasNoDateFilters = startMatchDate == null
                && endMatchDate == null
                && startClearingDate == null
                && endClearingDate == null;

        if (hasMatchDateRange) {
            specifications.add((root, query, cb) -> cb.between(
                    root.get(MATCH_DATE_FIELD),
                    startMatchDate,
                    endMatchDate));
        } else if (hasClearingDateRange) {
            specifications.add((root, query, cb) -> cb.between(
                    root.get(CLEARING_DATE_FIELD),
                    startClearingDate,
                    endClearingDate));
        } else if (hasNoDateFilters) {
            LocalDate today = PropertiesContext.getClientDatetime().toLocalDate();

            specifications.add((root, query, cb) -> cb.equal(root.get(MATCH_DATE_FIELD), today));
        }

        return this;
    }

    public TradeSpecificationBuilder withMatchDateRange(LocalDate startMatchDate, LocalDate endMatchDate) {
        if (startMatchDate != null && endMatchDate != null) {
            specifications.add((root, query, cb) -> cb.and(
                    cb.greaterThanOrEqualTo(root.get("matchDate"), startMatchDate),
                    cb.lessThanOrEqualTo(root.get("matchDate"), endMatchDate)));
        } else if (startMatchDate == null && endMatchDate == null) {
            LocalDate today = PropertiesContext.getClientDatetime().toLocalDate();

            specifications.add((root, query, cb) -> cb.equal(root.get("matchDate"), today));
        }
        return this;
    }

    public TradeSpecificationBuilder withMatchDate(LocalDate matchDate) {
        if (matchDate != null) {
            specifications.add((root, query, cb) -> cb.equal(root.get("matchDate"), matchDate));
        }
        return this;
    }

    public TradeSpecificationBuilder withClearingDateFilter(
            LocalDate startClearingDate,
            LocalDate endClearingDate) {

        if (startClearingDate != null && endClearingDate != null) {
            specifications.add((root, query, cb) -> cb.between(
                    root.get(CLEARING_DATE_FIELD),
                    startClearingDate,
                    endClearingDate));
        }

        return this;
    }

    public TradeSpecificationBuilder withCustodianClearingDateFilter(
            LocalDate startClearingDate,
            LocalDate endClearingDate) {

        if (startClearingDate != null && endClearingDate != null) {
            specifications.add((root, query, cb) -> cb.between(
                    root.get(CLEARING_DATE_FIELD),
                    startClearingDate,
                    endClearingDate));
        } else if (startClearingDate == null && endClearingDate == null) {
            LocalDate today = PropertiesContext.getClientDatetime().toLocalDate();

            specifications.add((root, query, cb) -> cb.equal(root.get(CLEARING_DATE_FIELD), today));
        }

        return this;
    }

    public TradeSpecificationBuilder withCustodianMatchDateFilter(
            LocalDate startMatchDate,
            LocalDate endMatchDate) {

        if (startMatchDate != null && endMatchDate != null) {
            specifications.add((root, query, cb) -> cb.and(
                    cb.greaterThanOrEqualTo(root.get(MATCH_DATE_FIELD), startMatchDate),
                    cb.lessThanOrEqualTo(root.get(MATCH_DATE_FIELD), endMatchDate)));
        } else if (startMatchDate == null && endMatchDate == null) {
            LocalDate today = PropertiesContext.getClientDatetime().toLocalDate();

            specifications.add((root, query, cb) -> cb.equal(root.get(MATCH_DATE_FIELD), today));
        }

        return this;
    }

    public TradeSpecificationBuilder withDynamicFilter(DynamicFilter dynamicFilter) {
        if (dynamicFilter.fieldName() != null && dynamicFilter.fieldValue() != null
                && dynamicFilter.operation() != null) {
            specifications.add((root, query, cb) -> {
                try {
                    Path<?> fieldPath = MapperTradeDynamicSearch.getTradeFieldPath(root, dynamicFilter.fieldName());
                    if (fieldPath != null) {
                        return MapperTradeDynamicSearch.buildTradeFieldPredicate(cb, fieldPath,
                                dynamicFilter.fieldValue(), dynamicFilter.operation());
                    }
                    return cb.conjunction();
                } catch (Exception e) {
                    return cb.conjunction();
                }
            });
        }
        return this;
    }

    public Specification<TradeEntity> build() {
        return specifications.stream()
                .reduce(Specification.allOf(), Specification::and);
    }

    public TradeSpecificationBuilder withOnlyOperation(Boolean onlyOperation) {
        if (Boolean.TRUE.equals(onlyOperation)) {
            specifications.add((root, query, cb) -> cb.and(
                    root.get("type").get("id").in(TypeEnum.COUNTED_OPERATION.getId(),
                            TypeEnum.REPO_OPERATION.getId())));
        }
        return this;
    }

    public TradeSpecificationBuilder withOptionalMatchDateFilter(
            LocalDate startMatchDate,
            LocalDate endMatchDate) {

        if (startMatchDate != null) {
            specifications
                    .add((root, query, cb) -> cb.greaterThanOrEqualTo(root.get(MATCH_DATE_FIELD), startMatchDate));
        }

        if (endMatchDate != null) {
            specifications.add((root, query, cb) -> cb.lessThanOrEqualTo(root.get(MATCH_DATE_FIELD), endMatchDate));
        }

        return this;
    }

    public TradeSpecificationBuilder withOptionalClearingDateFilter(
            LocalDate startClearingDate,
            LocalDate endClearingDate) {

        if (startClearingDate != null) {
            specifications.add(
                    (root, query, cb) -> cb.greaterThanOrEqualTo(root.get(CLEARING_DATE_FIELD), startClearingDate));
        }

        if (endClearingDate != null) {
            specifications
                    .add((root, query, cb) -> cb.lessThanOrEqualTo(root.get(CLEARING_DATE_FIELD), endClearingDate));
        }

        return this;
    }

}

```

## src/main/java/com/nubo/operations/query/api/helpers/TradeSpecificationFactory.java

```java
package com.nubo.operations.query.api.helpers;

import com.nubo.operations.query.api.models.domain.DynamicFilter;
import com.nubo.operations.query.api.models.domain.TradeParams;
import com.nubo.operations.query.api.models.entity.TradeEntity;
import com.nubo.operations.query.api.models.enums.SearchOperationEnum;
import jakarta.persistence.criteria.Path;
import org.springframework.data.jpa.domain.Specification;

import java.time.LocalDate;
import java.util.List;

public class TradeSpecificationFactory {

    private TradeSpecificationFactory() {
        throw new IllegalStateException("Utility class");
    }

    public static Specification<TradeEntity> createStandardFilter(TradeParams tradeParams, Long participantId) {
        if (tradeParams == null) {
            return TradeSpecificationBuilder.builder()
                    .build();
        }
        var countryIds = tradeParams.countryIds();
        if ((countryIds == null || countryIds.isEmpty()) && tradeParams.countryId() != null) {
            countryIds = List.of(tradeParams.countryId());
        }

        return TradeSpecificationBuilder.builder()
                .withMatchId(tradeParams.matchId())
                .withCanceledStatus(tradeParams.canceledStatus())
                .withParticipantId(participantId)
                .withTypeId(tradeParams.typeId())
                .withCountryIds(countryIds)
                .withCountryId(tradeParams.countryId())
                .withMatchDateRange(tradeParams.startMatchDate(), tradeParams.endMatchDate())
                .withStatusId(tradeParams.statusId())
                .withCustodianClearingDateFilter(tradeParams.startClearingDate(), tradeParams.endClearingDate())
                .withOnlyOperation(tradeParams.onlyOperation())
                .build();
    }

    public static Specification<TradeEntity> createCustodianTradeFilter(TradeParams tradeParams,
            Long participantId) {
        if (tradeParams == null) {
            return TradeSpecificationBuilder.builder()
                    .withCustodianDatePriorityFilter(null, null, null, null)
                    .build();
        }

        var countryIds = tradeParams.countryIds();
        if ((countryIds == null || countryIds.isEmpty()) && tradeParams.countryId() != null) {
            countryIds = List.of(tradeParams.countryId());
        }

        return TradeSpecificationBuilder.builder()
                .withMatchId(tradeParams.matchId())
                .withCanceledStatus(tradeParams.canceledStatus())
                .withParticipantId(participantId)
                .withTypeId(tradeParams.typeId())
                .withCountryIds(countryIds)
                .withCountryId(tradeParams.countryId())
                .withCustodianDatePriorityFilter(
                        tradeParams.startMatchDate(),
                        tradeParams.endMatchDate(),
                        tradeParams.startClearingDate(),
                        tradeParams.endClearingDate())
                .withStatusId(tradeParams.statusId())
                .withOnlyOperation(tradeParams.onlyOperation())
                .withMarketId(tradeParams.marketId())
                .withMnemonic(tradeParams.mnemonic())
                .withBuyStatus(tradeParams.buyStatusId())
                .withSellStatus(tradeParams.sellStatusId())
                .build();
    }

    public static Specification<TradeEntity> createCustodianTradeFilterWithCustodian(
            TradeParams tradeParams,
            Long participantId) {

        if (tradeParams == null) {
            return TradeSpecificationBuilder.builder()
                    .withCustodianDatePriorityFilter(null, null, null, null)
                    .withCustodianRestriction(participantId)
                    .build();
        }

        var countryIds = tradeParams.countryIds();
        if ((countryIds == null || countryIds.isEmpty()) && tradeParams.countryId() != null) {
            countryIds = List.of(tradeParams.countryId());
        }

        return TradeSpecificationBuilder.builder()
                .withMatchId(tradeParams.matchId())
                .withCanceledStatus(tradeParams.canceledStatus())
                .withTypeId(tradeParams.typeId())
                .withCountryIds(countryIds)
                .withCountryId(tradeParams.countryId())
                .withCustodianDatePriorityFilter(
                        tradeParams.startMatchDate(),
                        tradeParams.endMatchDate(),
                        tradeParams.startClearingDate(),
                        tradeParams.endClearingDate())
                .withStatusId(tradeParams.statusId())
                .withOnlyOperation(tradeParams.onlyOperation())
                .withCustodianRestriction(participantId)
                .withMarketId(tradeParams.marketId())
                .withMnemonic(tradeParams.mnemonic())
                .withBuyStatus(tradeParams.buyStatusId())
                .withSellStatus(tradeParams.sellStatusId())
                .build();
    }

    public static Specification<TradeEntity> createDynamicFilter(
            String fieldName, String fieldValue, SearchOperationEnum operation) {

        return (root, query, cb) -> {
            try {
                Path<?> fieldPath = MapperTradeDynamicSearch.getTradeFieldPath(root, fieldName);
                if (fieldPath != null) {
                    return MapperTradeDynamicSearch.buildTradeFieldPredicate(cb, fieldPath, fieldValue, operation);
                }
                return cb.conjunction();
            } catch (Exception e) {
                return cb.conjunction();
            }
        };
    }

    public static Specification<TradeEntity> createCombinedFilter(
            TradeParams tradeParams, Long participantId, DynamicFilter dynamicFilter) {
        if (tradeParams == null) {
            return TradeSpecificationBuilder.builder()
                    .withDynamicFilter(dynamicFilter)
                    .build();
        }

        return TradeSpecificationBuilder.builder()
                .withMatchId(tradeParams.matchId())
                .withCanceledStatus(tradeParams.canceledStatus())
                .withParticipantId(participantId)
                .withTypeId(tradeParams.typeId())
                .withCountryId(tradeParams.countryId())
                .withMatchDateRange(tradeParams.startMatchDate(), tradeParams.endMatchDate())
                .withStatusId(tradeParams.statusId())
                .withClearingDateFilter(tradeParams.startClearingDate(), tradeParams.endClearingDate())
                .withDynamicFilter(dynamicFilter)
                .build();
    }

    public static Specification<TradeEntity> createTradeIdsFilter(
            Long matchId,
            Long participantId,
            Boolean onlyOperation,
            LocalDate startMatchDate,
            LocalDate endMatchDate,
            LocalDate startClearingDate,
            LocalDate endClearingDate) {

        return TradeSpecificationBuilder.builder()
                .withMatchId(matchId)
                .withParticipantId(participantId)
                .withOnlyOperation(onlyOperation)
                .withOptionalMatchDateFilter(startMatchDate, endMatchDate)
                .withOptionalClearingDateFilter(startClearingDate, endClearingDate)
                .build();
    }

}

```

## src/main/java/com/nubo/operations/query/api/models/domain/DynamicFilter.java

```java
package com.nubo.operations.query.api.models.domain;

import com.nubo.operations.query.api.models.enums.SearchOperationEnum;

public record DynamicFilter(
        String fieldName,
        String fieldValue,
        SearchOperationEnum operation) {
}

```

## src/main/java/com/nubo/operations/query/api/models/domain/PackageCustodianParams.java

```java
package com.nubo.operations.query.api.models.domain;

import java.time.LocalDate;

public record PackageCustodianParams(
        int page,
        int size,
        String sort,
        String order,
        boolean all,
        LocalDate clearingDate,
        String packageNumber,
        Long securityTittleId,
        Long custodianId,
        Long participantId,
        Long operationTypeId,
        LocalDate registrationDateFrom,
        Long statusId,
        Long identificationTypeId,
        String investorDocumentNumber,
        Long folio) {

    public static PackageCustodianParams allPackageCustodianParams(
            int page,
            int size,
            String sort,
            String order,
            boolean all,
            LocalDate clearingDate,
            String packageNumber,
            Long securityTittleId,
            Long custodianId,
            Long participantId,
            Long operationTypeId,
            LocalDate registrationDateFrom,
            Long statusId,
            Long identificationTypeId,
            String investorDocumentNumber,
            Long folio) {
        return new PackageCustodianParams(page, size, sort, order, all, clearingDate, packageNumber, securityTittleId,
                custodianId, participantId, operationTypeId, registrationDateFrom, statusId,
                identificationTypeId, investorDocumentNumber, folio);
    }
}

```

## src/main/java/com/nubo/operations/query/api/models/domain/SettlementParams.java

```java
package com.nubo.operations.query.api.models.domain;

import java.time.LocalDate;

public record SettlementParams(
        int page,
        int size,
        String sort,
        String order,
        boolean all,
        Long countryId,
        Long depositId,
        Long custodianId,
        Long operationTypeId,
        LocalDate registrationDateFrom,
        LocalDate settlementDateTo,
        Long custodianStatusId,
        Long tradeId,
        String sideId,
        String investorDocumentNumber,
        boolean reassignment,
        Long participantId,
        Long statusId,
        boolean corrections,
        LocalDate dateOfCorrection) {

    public static SettlementParams allSettlementsCustodyView(
            int page,
            int size,
            String sort,
            String order,
            boolean all,
            Long countryId,
            Long depositId,
            Long custodianId,
            Long operationTypeId,
            LocalDate registrationDateFrom,
            LocalDate settlementDateTo,
            Long custodianStatusId,
            Long participantId) {
        return new SettlementParams(page, size, sort, order, all, countryId, depositId, custodianId, operationTypeId,
                registrationDateFrom, settlementDateTo, custodianStatusId, null, null, null, false, participantId, null, false, null);
    }

    public static SettlementParams allSettlements(
            int page,
            int size,
            String sort,
            String order,
            boolean all,
            Long tradeId,
            String sideId,
            String investorDocumentNumber,
            boolean reassignment,
            Long statusId) {
        return new SettlementParams(page, size, sort, order, all, null, null, null, null, null, null, null, tradeId,
                sideId, investorDocumentNumber, reassignment, null, null, false, null);
    }

    public static SettlementParams allReassingmentCorrections(
            int page,
            int size,
            String sort,
            String order,
            boolean all,
            Long tradeId,
            String sideId,
            Long statusId,
            LocalDate dateOfCorrection) {
        return new SettlementParams(page, size, sort, order, all, null, null, null, null, null, null, null, tradeId,
                sideId, null, false, null, statusId, false, dateOfCorrection);
    }

    public static SettlementParams allCorrectionsSettlement(
            int page,
            int size,
            String sort,
            String order,
            boolean all,
            Long tradeId,
            String sideId,
            Long statusId,
            boolean corrections) {
        return new SettlementParams(page, size, sort, order, all, null, null, null, null, null, null, null, tradeId,
                sideId, null, false, null, statusId, corrections, null);
    }
}

```

## src/main/java/com/nubo/operations/query/api/models/domain/TradeParams.java

```java
package com.nubo.operations.query.api.models.domain;

import java.time.LocalDate;
import java.util.List;

public record TradeParams(
    Long matchId,
    Integer statusId,
    Boolean canceledStatus,
    Long typeId,
    Long countryId,
    List<Long> countryIds,
    LocalDate startMatchDate,
    LocalDate endMatchDate,
    LocalDate startClearingDate,
    LocalDate endClearingDate,
    Boolean onlyOperation,
    Long marketId,
    String mnemonic,
    Long buyStatusId,
    Long sellStatusId) {

    public TradeParams(Long matchId, Integer statusId, Boolean canceledStatus, Long typeId, Long countryId,
            List<Long> countryIds, LocalDate startMatchDate, LocalDate endMatchDate, LocalDate startClearingDate,
            LocalDate endClearingDate, Boolean onlyOperation, Long marketId, String mnemonic) {
        this(matchId, statusId, canceledStatus, typeId, countryId, countryIds, startMatchDate, endMatchDate,
                startClearingDate, endClearingDate, onlyOperation, marketId, mnemonic, null, null);
    }
}

```

## src/main/java/com/nubo/operations/query/api/models/domain/UserNuboData.java

```java
package com.nubo.operations.query.api.models.domain;

import com.nubo.operations.query.api.models.enums.UserTypeEnum;

public record UserNuboData(
        long userId,
        Long participantId,
        boolean isParticipantCustodian,
        String participantCountryCode,
        UserTypeEnum userTypeEnum) {
}

```

## src/main/java/com/nubo/operations/query/api/models/dto/request/AssignmentClosureInDto.java

```java
package com.nubo.operations.query.api.models.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AssignmentClosureInDto {

    @NotNull
    private Long tradeId;

}

```

## src/main/java/com/nubo/operations/query/api/models/dto/request/CalculationInDto.java

```java
package com.nubo.operations.query.api.models.dto.request;

import com.nubo.operations.query.api.application.annotations.ValidBigDecimal;
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
public class CalculationInDto {

    @NotNull
    @ValidBigDecimal(precision = 16, scale = 6)
    private BigDecimal quantity;

    @NotNull
    @ValidBigDecimal(precision = 16, scale = 6)
    private BigDecimal price;

    @NotNull
    @ValidBigDecimal(precision = 6, scale = 4)
    private BigDecimal commission;

    @NotNull
    private String sideId;

}

```

## src/main/java/com/nubo/operations/query/api/models/dto/request/CalculationIvaInDto.java

```java
package com.nubo.operations.query.api.models.dto.request;

import com.nubo.operations.query.api.application.annotations.ValidBigDecimal;
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
public class CalculationIvaInDto {

    @NotNull
    @ValidBigDecimal(precision = 16, scale = 6)
    private BigDecimal quantity;

    @NotNull
    @ValidBigDecimal(precision = 16, scale = 6)
    private BigDecimal price;

    @NotNull
    @ValidBigDecimal(precision = 6, scale = 4)
    private BigDecimal commission;

    @NotNull
    @ValidBigDecimal(precision = 6, scale = 4)
    private BigDecimal valTax;

    @NotNull
    private String sideId;

}

```

## src/main/java/com/nubo/operations/query/api/models/dto/request/TradeParamsDynamicInDto.java

```java
package com.nubo.operations.query.api.models.dto.request;

import java.time.LocalDate;
import java.util.Set;

import com.nubo.operations.query.api.models.enums.SearchOperationEnum;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.AssertTrue;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Schema(description = "Search parameters for trades with Redis fallback")
public class TradeParamsDynamicInDto {

    @Schema(description = "Page number (0-indexed)", example = "0", defaultValue = "0")
    @Min(0)
    private int page = 0;

    @Schema(description = "Page size", example = "10", defaultValue = "10", minimum = "1", maximum = "100")
    @Min(1)
    @Max(100)
    private int size = 10;

    @Schema(description = "Field name for dynamic search", example = "countryId")
    private String fieldName;

    @Schema(description = "Field value for dynamic search", example = "1")
    @Size(max = 500, message = "fieldValue exceeds the maximum allowed length")
    private String fieldValue;

    @Schema(description = "Search operation", example = "EQUALS", defaultValue = "EQUALS")
    private SearchOperationEnum operation = SearchOperationEnum.EQUALS;

    @Schema(description = "Match ID to filter by", example = "100000")
    @Min(1)
    private Long matchId;

    @Schema(description = "Status ID to filter by", example = "1")
    @Min(1)
    private Integer statusId;

    @Schema(description = "Filter by canceled status", example = "true")
    private Boolean canceledStatus;

    @Schema(description = "Type ID to filter by", example = "1")
    @Min(1)
    private Long typeId;

    @Schema(description = "Country ID to filter by", example = "1")
    @Min(1)
    private Long countryId;

    @Schema(description = "Start date for match date range", example = "2025-01-01")
    private LocalDate startMatchDate;

    @Schema(description = "End date for match date range", example = "2025-01-31")
    private LocalDate endMatchDate;

    @Schema(description = "Start date for clearing date range", example = "2025-01-01")
    private LocalDate startClearingDate;

    @Schema(description = "End date for clearing date range", example = "2025-01-31")
    private LocalDate endClearingDate;

    @Schema(description = "Sort field", example = "clearingDate", defaultValue = "clearingDate")
    private String sort = "clearingDate";

    @Schema(description = "Sort order (asc or desc)", example = "asc", defaultValue = "asc", allowableValues = { "asc",
            "desc" })
    private String order = "asc";

    // Validation methods for date ranges and dynamic filter fields
    private static final Set<String> ALLOWED_DYNAMIC_FIELDS = Set.of(
            "id", "matchDate", "matchId", "clearingDate", "returnClearingDate",
            "depositoryId", "depositoryName", "countryId", "countryName", "countryCode",
            "typeId", "typeDescription", "marketId", "marketDescription",
            "issuanceMarketId", "issuanceMarketDescription", "securityTitleId",
            "securityTitleIsin", "securityTitleMnemonic", "participantBuyId",
            "participantBuyName", "participantSellId", "participantSellName",
            "custodianBuyId", "custodianBuyName", "custodianSellId", "custodianSellName",
            "assignmentMarkBuy", "assignmentMarkSell", "fractionalMarkBuy",
            "fractionalMarkSell", "advanceStatus", "exitIndicatorSettlement",
            "canceledStatus", "quantity", "price", "volume", "repurchaseRate",
            "repurchaseAmount", "statusId", "statusDescription", "matchTime",
            "ownPositionSell", "ownPositionBuy", "currencyId", "currencyCode",
            "currencyName", "tradingSystemId", "tradingSystemDescription",
            "tradingSessionId", "tradingSessionDescription", "repurchaseAgreementDate",
            "daysToSettlement", "repoRate", "repoAmount", "fundingAmount",
            "netOutFlowTotal", "outFlowTurnOverValue", "totalNetReturn",
            "returnTurnoverValue", "deliveryVersusPaymentValue", "reallocationIndicator",
            "businessTypeId", "businessTypeDescription", "marketTypeId",
            "marketTypeDescription", "originTypeId", "originTypeDescription",
            "settlementIndicatorOutgoing", "settlementIndicatorReturn",
            "resettlementIndicatorAdvance", "specialTradeId", "paymentTypeId",
            "paymentTypeDescription", "settlementTypeId", "settlementTypeDescription",
            "custodianStatusId", "custodianStatusDescription", "settlementStatusId",
            "settlementStatusDescription", "bloquingStatusId", "bloquingStatusDescription",
            "salesGuarantee", "purchaseGuarantee", "purchasePaymentIndicator",
            "returnIndicatorSettlement");

    @AssertTrue(message = "endMatchDate must be after or equal to startMatchDate")
    public boolean isMatchDateRangeValid() {
        if (startMatchDate == null || endMatchDate == null) {
            return true;
        }
        return !endMatchDate.isBefore(startMatchDate);
    }

    @AssertTrue(message = "endClearingDate must be after or equal to startClearingDate")
    public boolean isClearingDateRangeValid() {
        if (startClearingDate == null || endClearingDate == null) {
            return true;
        }
        return !endClearingDate.isBefore(startClearingDate);
    }

    @AssertTrue(message = "fieldName and fieldValue must be provided together")
    public boolean isDynamicFilterValid() {
        boolean hasFieldName = fieldName != null && !fieldName.isBlank();
        boolean hasFieldValue = fieldValue != null && !fieldValue.isBlank();

        // Ambos null/vacíos = válido
        if (!hasFieldName && !hasFieldValue) {
            return true;
        }

        // Solo uno presente = inválido
        return hasFieldName && hasFieldValue;
    }

    @AssertTrue(message = "Unsupported dynamic filter field")
    public boolean isFieldNameValid() {
        if (fieldName == null || fieldName.isBlank()) {
            return true;
        }
        return ALLOWED_DYNAMIC_FIELDS.contains(fieldName.trim());
    }
}

```

## src/main/java/com/nubo/operations/query/api/models/dto/request/TradeParamsInDto.java

```java
package com.nubo.operations.query.api.models.dto.request;

import java.time.LocalDate;
import java.util.List;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.AssertTrue;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Schema(description = "Search criteria for custodian trades")
public class TradeParamsInDto {

    @Schema(description = "Page number (0-indexed)", example = "0", defaultValue = "0")
    @Min(0)
    private int page = 0;

    @Schema(description = "Page size", example = "10", defaultValue = "10", minimum = "1", maximum = "100")
    @Min(1)
    @Max(100)
    private int size = 10;

    @Schema(description = "Field to sort by", example = "clearingDate", defaultValue = "clearingDate")
    private String sort = "clearingDate";

    @Schema(description = "Sort order (asc or desc)", example = "desc", defaultValue = "desc", allowableValues = {
            "asc", "desc" })
    private String order = "desc";

    @Schema(description = "Return all results without pagination", example = "false", defaultValue = "false")
    private Boolean all = false;

    @Schema(description = "Match ID to filter by", example = "100000")
    @Min(1)
    private Long matchId;

    @Schema(description = "Status ID to filter by", example = "1")
    @Min(1)
    private Integer statusId;

    @Schema(description = "Filter by canceled status", example = "true")
    private Boolean canceledStatus;

    @Schema(description = "Type ID to filter by", example = "1")
    @Min(1)
    private Long typeId;

    @Schema(description = "Country ID to filter by", example = "1")
    @Min(1)
    private Long countryId;

    @Schema(description = "List of country IDs to filter by", example = "[37, 76]")
    private List<@Min(1) Long> countryIds;

    @Schema(description = "Start date for match date range", example = "2025-01-01")
    private LocalDate startMatchDate;

    @Schema(description = "End date for match date range", example = "2025-01-31")
    private LocalDate endMatchDate;

    @Schema(description = "Start date for clearing date range", example = "2025-01-01")
    private LocalDate startClearingDate;

    @Schema(description = "End date for clearing date range", example = "2025-01-31")
    private LocalDate endClearingDate;

    @Schema(description = "Filter only operations", example = "true", defaultValue = "true")
    private Boolean onlyOperation = true;

    @Schema(description = "Market ID to filter by", example = "1")
    @Min(1)
    private Long marketId;

    @Schema(description = "Security title mnemonic (nemotécnico) to filter by", example = "ETB")
    private String mnemonic;

    @Schema(description = "Buy status ID (Estado Compra) to filter by", example = "1")
    private Long buyStatusId;

    @Schema(description = "Sell status ID (Estado Venta) to filter by", example = "1")
    private Long sellStatusId;

    @AssertTrue(message = "endMatchDate must be after or equal to startMatchDate")
    public boolean isMatchDateRangeValid() {
        if (startMatchDate == null || endMatchDate == null) {
            return true; // Si alguno es null, se considera válido
        }
        return !endMatchDate.isBefore(startMatchDate);
    }

    @AssertTrue(message = "endClearingDate must be after or equal to startClearingDate")
    public boolean isClearingDateRangeValid() {
        if (startClearingDate == null || endClearingDate == null) {
            return true;
        }
        return !endClearingDate.isBefore(startClearingDate);
    }

    @AssertTrue(message = "At least one valid countryId must be provided when using countryIds list")
    public boolean isCountryIdsValid() {
        // Si countryIds es null o está vacía, es válido
        if (countryIds == null || countryIds.isEmpty()) {
            return true;
        }

        // Si countryIds tiene elementos, al menos uno debe ser válido (> 0 y no null)
        return countryIds.stream()
                .anyMatch(id -> id != null && id > 0);
    }
}

```

## src/main/java/com/nubo/operations/query/api/models/dto/request/TradeSimulationInDto.java

```java
package com.nubo.operations.query.api.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TradeSimulationInDto {

    private LocalDate tradeDate;
    private Long numericTradeId;

}

```

## src/main/java/com/nubo/operations/query/api/models/dto/response/AllTradeOutDto.java

```java
package com.nubo.operations.query.api.models.dto.response;

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
public class AllTradeOutDto {

    private TradeOutDto trade;

    private TradeEquityOutDto tradeEquity;

    private List<SettlementOutDto> settlement;

    private Boolean canSeeSideBuy;

    private Boolean canSeeSideSell;
}

```

## src/main/java/com/nubo/operations/query/api/models/dto/response/AssignmentClosureOutDto.java

```java

package com.nubo.operations.query.api.models.dto.response;

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
public class AssignmentClosureOutDto {

    private Long tradeId;

    private LocalDate matchDate;

    private Long matchId;

    private LocalDate clearingDate;

    private SideOutDto side;

    private ParticipantOutDto participant;

}

```

## src/main/java/com/nubo/operations/query/api/models/dto/response/BankOutDto.java

```java
package com.nubo.operations.query.api.models.dto.response;

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
public class BankOutDto {

    private Long id;

    private String name;

    private String code;

    private CountryOutDto country;

}

```

## src/main/java/com/nubo/operations/query/api/models/dto/response/CalculationOutDto.java

```java
package com.nubo.operations.query.api.models.dto.response;

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
public class CalculationOutDto {

    private BigDecimal valTax;

    private BigDecimal commissionPercentage;

    private BigDecimal amount;

    private BigDecimal commissionAmount;

    private BigDecimal valTaxAmount;

    private BigDecimal netAmount;

    private BigDecimal transferValue;

    private BigDecimal returnAmount;

}

```

## src/main/java/com/nubo/operations/query/api/models/dto/response/CalculationTotalAmountOutDto.java

```java
package com.nubo.operations.query.api.models.dto.response;

import java.math.BigDecimal;

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
public class CalculationTotalAmountOutDto {

    private BigDecimal quantityTotal;

    private BigDecimal netAmountTotal;

    private BigDecimal transferValueTotal;

    private BigDecimal commissionAmountTotal;

    private BigDecimal valTaxAmountTotal;

    private BigDecimal netOutFlowTotal;

    private BigDecimal outFlowTurnoverValueTotal;

    private BigDecimal returnTurnoverValueTotal;

}

```

## src/main/java/com/nubo/operations/query/api/models/dto/response/CityOutDto.java

```java
package com.nubo.operations.query.api.models.dto.response;

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
public class CityOutDto {

    private Long id;

    private String description;

}

```

## src/main/java/com/nubo/operations/query/api/models/dto/response/ClassOutDto.java

```java
package com.nubo.operations.query.api.models.dto.response;

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
public class ClassOutDto {

    private String id;

    private String description;

    private String category;
}

```

## src/main/java/com/nubo/operations/query/api/models/dto/response/CorrectionDropdownDataDto.java

```java
package com.nubo.operations.query.api.models.dto.response;

import java.util.List;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Correction dropdown data response")
public class CorrectionDropdownDataDto {

    @Schema(description = "Available correction status options for dropdown")
    private List<StatusOutDto> availableStatuses;

    @Schema(description = "Type of correction: LOCAL or EXTERNAL")
    private String correctionType;

    @Schema(description = "User type: INTERNAL or EXTERNAL")
    private String userType;

}

```

## src/main/java/com/nubo/operations/query/api/models/dto/response/CountryOutDto.java

```java
package com.nubo.operations.query.api.models.dto.response;

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

## src/main/java/com/nubo/operations/query/api/models/dto/response/CurrencyOutDto.java

```java
package com.nubo.operations.query.api.models.dto.response;

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

## src/main/java/com/nubo/operations/query/api/models/dto/response/DepartmentOutDto.java

```java
package com.nubo.operations.query.api.models.dto.response;

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

## src/main/java/com/nubo/operations/query/api/models/dto/response/DepositoryOutDto.java

```java
package com.nubo.operations.query.api.models.dto.response;

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
public class DepositoryOutDto {

    private String id;

    private String description;

}

```

## src/main/java/com/nubo/operations/query/api/models/dto/response/DirectDepositoryOutDto.java

```java
package com.nubo.operations.query.api.models.dto.response;

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
public class DirectDepositoryOutDto {

    private Long id;

    private ParticipantOutDto participant;

    private DepositoryOutDto depository;

    private String directDepositoryNumber;

    private String crccCompensatorCode;

    private String crccCustodianCode;

    private String crccNegotiatorCode;

}

```

## src/main/java/com/nubo/operations/query/api/models/dto/response/FractionAccountOutDto.java

```java
package com.nubo.operations.query.api.models.dto.response;

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
public class FractionAccountOutDto {

    private ParticipantAccountOutDto participantAccount;

    private InvestorAccountOutDto investorAccount;

    private TypeOutDto sourceQuoteType;

    private Boolean fiduciarySpecialist;

    private Boolean jointAccount;

    private Boolean masterAccount;

}
```

## src/main/java/com/nubo/operations/query/api/models/dto/response/GicsOutDto.java

```java
package com.nubo.operations.query.api.models.dto.response;

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
public class GicsOutDto {

    private Long id;

    private String description;

}

```

## src/main/java/com/nubo/operations/query/api/models/dto/response/IdentificationTypeOutDto.java

```java
package com.nubo.operations.query.api.models.dto.response;

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

    private String code;

}

```

## src/main/java/com/nubo/operations/query/api/models/dto/response/InvestorAccountOutDto.java

```java
package com.nubo.operations.query.api.models.dto.response;

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
public class InvestorAccountOutDto {

    private Long id;

    private InvestorOutDto investor;

    private String accountNumber;

    private StatusOutDto status;

    private TypeOutDto originType;

    private TypeOutDto type;

    private DepositoryOutDto depository;

    private ParticipantShortOutDto participant;

    private String accountName;

    private Boolean taxExemp;

}

```

## src/main/java/com/nubo/operations/query/api/models/dto/response/InvestorOutDto.java

```java
package com.nubo.operations.query.api.models.dto.response;

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

    private String code;

    private String firstName;

    private String lastName;

    private String companyName;

    private TypeOutDto type;

    private StatusOutDto status;

    private CountryOutDto country;

    private String documentNumber;

    private IdentificationTypeOutDto identificationType;

    private String nationality;

    private String clearinghouseCode;

    private GicsOutDto gics;

    private Boolean moneyLaunderingFlag;

    private TaxStatusOutDto taxStatus;

}

```

## src/main/java/com/nubo/operations/query/api/models/dto/response/MarketOutDto.java

```java
package com.nubo.operations.query.api.models.dto.response;

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
public class MarketOutDto {

    private String id;

    private String description;

    private String category;
}

```

## src/main/java/com/nubo/operations/query/api/models/dto/response/MilaDepositoryDto.java

```java
package com.nubo.operations.query.api.models.dto.response;

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
public class MilaDepositoryDto {

    private Long id;

    private String code;

    private Long identificationTypeId;

    private String documentNumber;

    private String directDepositoryNumber;
}
```

## src/main/java/com/nubo/operations/query/api/models/dto/response/PackageCustodianDetailOutDto.java

```java
package com.nubo.operations.query.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
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
@JsonInclude(JsonInclude.Include.ALWAYS)
public class PackageCustodianDetailOutDto {

    private Long tradeId;
    private LocalDate registrationDate;
    private LocalDate clearingDate;
    private LocalDate returnClearingDate;
    private BigDecimal price;
    private BigDecimal rate;
    private Integer fraction;
    private String securitiesAccount;
    private BigDecimal quantity;
    private BigDecimal commissionPercentage;
    private BigDecimal commissionAmount;
    private BigDecimal valTaxAmount;
    private BigDecimal grossValue;
    private BigDecimal netTotal;
    private BigDecimal transferValue;
    private BigDecimal returnTurnoverValue;

    private BigDecimal netReturnValue;

    private String operationTypeCode;
}
```

## src/main/java/com/nubo/operations/query/api/models/dto/response/PackageCustodianDetailResponseOutDto.java

```java
package com.nubo.operations.query.api.models.dto.response;

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
public class PackageCustodianDetailResponseOutDto {

    private List<PackageCustodianDetailOutDto> content;

    private PackageCustodianDetailTotalsOutDto totals;

    private Integer pageSize;

    private Integer pageNumber;

    private Long totalElements;

    private Integer totalPages;

}
```

## src/main/java/com/nubo/operations/query/api/models/dto/response/PackageCustodianDetailTotalsOutDto.java

```java
package com.nubo.operations.query.api.models.dto.response;

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
public class PackageCustodianDetailTotalsOutDto {

    private BigDecimal totalQuantity;

    private BigDecimal totalGrossValue;

    private BigDecimal totalCommission;

    private BigDecimal totalTax;

    private BigDecimal totalNet;

}

```

## src/main/java/com/nubo/operations/query/api/models/dto/response/PackageCustodianOutDto.java

```java
package com.nubo.operations.query.api.models.dto.response;

import java.math.BigDecimal;
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

    private LocalDate packageDate;

    private MarketOutDto market;

    private StatusOutDto packageStatus;

    private TypeOutDto type;

    private String packageNumber;

    private String participantCode;

    private ParticipantOutDto participant;

    private ParticipantOutDto custodian;

    private ParticipantOutDto ficAdministrator;

    private SideOutDto side;

    private LocalDate clearingDate;

    private SecurityTitleOutDto securityTitle;

    private LocalDate returnClearingDate;

    private InvestorOutDto investor;

    private DepositoryOutDto depository;

    private InvestorAccountOutDto investorAccount;

    private BigDecimal totalFractionQuantity;

    private BigDecimal averagePrice;

    private BigDecimal averageRate;

    private BigDecimal totalCommissionAmount;

    private BigDecimal totalValTaxAmount;

    private BigDecimal totalNetAmount;

    private BigDecimal returnNetAmount;

    private BigDecimal clearingPercentage;

    private String referencePackage;

    private int totalElements;

}

```

## src/main/java/com/nubo/operations/query/api/models/dto/response/PageResponseOutDto.java

```java
package com.nubo.operations.query.api.models.dto.response;

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
@JsonInclude(JsonInclude.Include.ALWAYS)
public class PageResponseOutDto<T> {

    private List<T> content;

    private Integer pageSize;

    private Integer pageNumber;

    private Long totalElements;

    private Integer totalPages;

    @Override
    public String toString() {
        return "PageResponseOutDto{" +
                " contentType="
                + (content != null && !content.isEmpty() ? content.get(0).getClass().getSimpleName() : "empty") +
                ", pageSize=" + pageSize +
                ", pageNumber=" + pageNumber +
                ", totalElements=" + totalElements +
                ", totalPages=" + totalPages +
                '}';
    }
}

```

## src/main/java/com/nubo/operations/query/api/models/dto/response/ParticipantAccountOutDto.java

```java
package com.nubo.operations.query.api.models.dto.response;

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
public class ParticipantAccountOutDto {

    private Long id;

    private ParticipantShortOutDto participant;

    private String accountNumber;

    private StatusOutDto status;

    private TypeOutDto type;

    private TypeOutDto originType;

    private Boolean taxExemp;

}

```

## src/main/java/com/nubo/operations/query/api/models/dto/response/ParticipantBankAccountOutDto.java

```java
package com.nubo.operations.query.api.models.dto.response;

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
public class ParticipantBankAccountOutDto {

    private Long id;

    private Long bankId;

    private Long participantId;

    private String bankAccount;

    private Boolean principal;

}

```

## src/main/java/com/nubo/operations/query/api/models/dto/response/ParticipantOutDto.java

```java
package com.nubo.operations.query.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder(toBuilder = true)
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

}

```

## src/main/java/com/nubo/operations/query/api/models/dto/response/ParticipantShortOutDto.java

```java
package com.nubo.operations.query.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder(toBuilder = true)
@JsonInclude(JsonInclude.Include.ALWAYS)
public class ParticipantShortOutDto {

    private Long id;

    private String code;

    private String shortName;

    private String masterAccount;

    private String documentNumber;

    private IdentificationTypeOutDto identificationType;

}

```

## src/main/java/com/nubo/operations/query/api/models/dto/response/ReassignmentCorrectionOutDto.java

```java
package com.nubo.operations.query.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class ReassignmentCorrectionOutDto {

    private TradeShortOutDto trade;

    private Integer fraction;

    private SideOutDto side;

    private LocalDate requestDate;

    private LocalTime requestTime;

    private ParticipantAccountOutDto initialParticipantAccountNumber;

    private ParticipantAccountOutDto finalParticipantAccountNumber;

    private InvestorAccountOutDto initialInvestorAccountNumber;

    private InvestorAccountOutDto finalInvestorAccountNumber;

    private String detail;

    private String correctionNumber;

    private TypeOutDto processType;

    private StatusOutDto status;

}

```

## src/main/java/com/nubo/operations/query/api/models/dto/response/RuleDetailOutDto.java

```java
package com.nubo.operations.query.api.models.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RuleDetailOutDto {

    private Boolean allowed;

    private String description;

}

```

## src/main/java/com/nubo/operations/query/api/models/dto/response/SecurityTitleOutDto.java

```java
package com.nubo.operations.query.api.models.dto.response;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.time.LocalDate;
import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.ALWAYS)
public class SecurityTitleOutDto {

    private Long id;

    private MarketOutDto market;

    private String equityCode;

    private String mnemonic;

    private String isin;

    private String cfi;

    private Integer currencyId;

    private String settlementPeriod;

    private LocalDateTime listingDate;

    private LocalDate delistingDate;

    private Boolean parent;

    private Long parentId;

    private StatusOutDto status;

    private String issuerName;

    private Integer countryId;

    private BigInteger amountIssued;

    @JsonProperty("class")
    private ClassOutDto clazz;

    private Integer segmentId;

    private String category;

    private DepositoryOutDto depository;

    private BigDecimal punishmentRepo;

    private String regulatoryCode;
}

```

## src/main/java/com/nubo/operations/query/api/models/dto/response/SettlementOutDto.java

```java
package com.nubo.operations.query.api.models.dto.response;

import java.math.BigDecimal;

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
public class SettlementOutDto {

    private Long id;

    private Long tradeId;

    private Integer fraction;

    private SideOutDto side;

    private InvestorOutDto investor;

    private InvestorAccountOutDto investorAccount;

    private ParticipantAccountOutDto participantAccount;

    private BigDecimal fractionQuantity;

    private BigDecimal fractionVolume;

    private Boolean fiduciarySpecialist;

    private BigDecimal commissionPercentage;

    private BigDecimal commissionAmount;

    private BigDecimal valTax;

    private BigDecimal valTaxAmount;

    private BigDecimal withholdingTax;

    private BigDecimal withholdingTaxAmount;

    private BigDecimal netAmount;

    private BigDecimal transferValue;

    private Boolean issuedReceipt;

    private String issuedReceiptNumber;

    private BigDecimal referenceAllocId;

    private BigDecimal repoAmount;

    private BigDecimal fundingAmount;

    private BigDecimal netOutFlowTotal;

    private BigDecimal outFlowTurnoverValue;

    private BigDecimal returnTurnoverValue;

    private BigDecimal deliveryVersusPaymentValue;

    private BigDecimal settlementAmount;

    private TradingSystemOutDto tradingSystem;

    private StatusOutDto status;

    private BigDecimal brokerageService;

    private Long custodianId;

    private ParticipantOutDto custodian;

    private StatusOutDto custodianStatus;

    private Long bankAccountId;

    private String reference;

    private BigDecimal capitalGainValue;

    private BigDecimal disbursementValue;

    private TypeOutDto sourceQuoteType;

    private ParticipantOutDto ficAdministrator;

    private DirectDepositoryOutDto directDepositor;

    private Boolean jointAccount;

    private Boolean masterAccount;

    private ParticipantBankAccountOutDto participantBankAccount;

    private String cashAccount;

    private Boolean isEditable;

    private MilaDepositoryDto milaDirectDepositor;

    private String packageCode;

    private String referencePackage;

    private Boolean isFractionable;
}

```

## src/main/java/com/nubo/operations/query/api/models/dto/response/SettlementSearchOutDto.java

```java
package com.nubo.operations.query.api.models.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonInclude;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class SettlementSearchOutDto {

    private Long id;

    private Long tradeId;

    private Long matchId;

    private Integer fraction;

    private LocalDate matchDate;

    private LocalDate clearingDate;

    private String market;

    private String tradeType;

    private SideOutDto side;

    private String symbol;

    private String isin;

    private BigDecimal fractionQuantity;

    private BigDecimal price;

    private BigDecimal fractionVolume;

    private ParticipantOutDto participant;

    private String participantAccount;

    private String investorDocumentType;

    private String investorDocumentNumber;

    private String investorName;

    private String investorAccount;

    private String investorAccountName;

    private Long custodianId;

    private String custodianCode;

    private String custodianName;

    private String custodianStatus;

    private String cashAccount;

    private String rejectionReason;

    private Long sourceQuoteTypeId;

}

```

## src/main/java/com/nubo/operations/query/api/models/dto/response/SideOutDto.java

```java
package com.nubo.operations.query.api.models.dto.response;

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

## src/main/java/com/nubo/operations/query/api/models/dto/response/StatusOutDto.java

```java
package com.nubo.operations.query.api.models.dto.response;

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
}

```

## src/main/java/com/nubo/operations/query/api/models/dto/response/TaxStatusOutDto.java

```java
package com.nubo.operations.query.api.models.dto.response;

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

## src/main/java/com/nubo/operations/query/api/models/dto/response/TradeCustodianOutDto.java

```java
package com.nubo.operations.query.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class TradeCustodianOutDto {

    private Long id;

    private LocalDate matchDate;

    private Long matchId;

    private LocalDate clearingDate;

    private LocalDate returnClearingDate;

    private String countryCode;

    private String typeDescription;

    private String securityTitleMnemonic;

    private ParticipantShortOutDto participantBuy;

    private ParticipantShortOutDto participantSell;

    private ParticipantShortOutDto custodianBuy;

    private ParticipantShortOutDto custodianSell;

    private StatusOutDto status;

    private StatusOutDto sellStatus;

    private StatusOutDto buyStatus;

    private TypeOutDto sourceQuoteBuyType;

    private TypeOutDto sourceQuoteSellType;

    private Integer numberOfFractionsByBuy;

    private Integer numberOfFractionsBySell;

    private String traderBuy;

    private String traderSell;

}

```

## src/main/java/com/nubo/operations/query/api/models/dto/response/TradeEquityOutDto.java

```java
package com.nubo.operations.query.api.models.dto.response;

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
public class TradeEquityOutDto {

    private Long tradeId;

    private String foreignBrokerBuy;

    private String foreignBrokerSell;

    private Integer directDepositorBuy;

    private Integer directDepositorSell;

    private Integer sourceIndicatorBuy;

    private Integer sourceIndicatorSell;

    private Integer responsibleTradeBuy;

    private Integer responsibleTradeSell;

    private String referenceBuy;

    private String referenceSell;

    private BigDecimal orderBookId;

    private Boolean prearrangedOperation;

    private Integer aggressiveTip;

    private Boolean exdividendPeriod;
}

```

## src/main/java/com/nubo/operations/query/api/models/dto/response/TradeOutDto.java

```java
package com.nubo.operations.query.api.models.dto.response;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.OffsetDateTime;

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
public class TradeOutDto {

    private Long id;

    private LocalDate matchDate;

    private Long matchId;

    private LocalDate clearingDate;

    private LocalDate returnClearingDate;

    private CountryOutDto country;

    private TypeOutDto type;

    private MarketOutDto market;

    private MarketOutDto issuanceMarket;

    private SecurityTitleOutDto securityTitle;

    private ParticipantOutDto participantBuy;

    private ParticipantOutDto participantSell;

    private ParticipantOutDto custodianBuy;

    private ParticipantOutDto custodianSell;

    private DepositoryOutDto depositorySell;

    private DepositoryOutDto depositoryBuy;

    private StatusOutDto previousCycleStatus;

    private StatusOutDto subsequentCycleStatus;

    private Boolean assignmentMarkBuy;

    private Boolean assignmentMarkSell;

    private Boolean finalAssignmentMarkBuy;

    private Boolean finalAssignmentMarkSell;

    private Boolean fractionalMarkBuy;

    private Boolean fractionalMarkSell;

    private Integer advanceStatus;

    private Boolean exitIndicatorSettlement;

    private Boolean canceledStatus;

    private BigDecimal quantity;

    private BigDecimal price;

    private BigDecimal amount;

    private BigDecimal forwardPrice;

    private BigDecimal volume;

    private BigDecimal repurchaseRate;

    private BigDecimal repurchaseAmount;

    private StatusOutDto status;

    private OffsetDateTime matchTime;

    private Boolean ownPositionSell;

    private Boolean ownPositionBuy;

    private CurrencyOutDto currency;

    private TradingSystemOutDto tradingSystem;

    private TradingSessionOutDto tradingSession;

    private LocalDate repurchaseAgreementDate;

    private Integer daysToSettlement;

    private BigDecimal repoRate;

    private BigDecimal repoAmount;

    private BigDecimal fundingAmount;

    private BigDecimal netOutFlowTotal;

    private BigDecimal outFlowTurnOverValue;

    private BigDecimal totalNetReturn;

    private BigDecimal returnTurnoverValue;

    private BigDecimal deliveryVersusPaymentValue;

    private Boolean reallocationIndicator;

    private TypeOutDto businessType;

    private TypeOutDto marketType;

    private TypeOutDto originType;

    private Boolean settlementIndicatorOutgoing;

    private Boolean settlementIndicatorReturn;

    private Boolean resettlementIndicatorAdvance;

    private Long specialTradeId;

    private TypeOutDto paymentType;

    private TypeOutDto settlementType;

    private StatusOutDto custodianStatus;

    private StatusOutDto settlementStatus;

    private StatusOutDto bloquingStatus;

    private Boolean purchasePaymentIndicator;

    private Boolean returnIndicatorSettlement;

    private StatusOutDto sellStatus;

    private StatusOutDto buyStatus;

    private String enteringFirmSell;

    private String enteringFirmBuy;

    private TypeOutDto sourceQuoteBuyType;

    private TypeOutDto sourceQuoteSellType;

    private OffsetDateTime lastModifyDate;

    private String traderBuy;

    private String traderSell;

}

```

## src/main/java/com/nubo/operations/query/api/models/dto/response/TradeShortOutDto.java

```java
package com.nubo.operations.query.api.models.dto.response;

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
public class TradeShortOutDto {

    private Long tradeId;

    private LocalDate matchDate;

    private Long matchId;

    private LocalDate clearingDate;

    private StatusOutDto sellStatus;

    private StatusOutDto buyStatus;

}

```

## src/main/java/com/nubo/operations/query/api/models/dto/response/TradeSimulationOutDto.java

```java
package com.nubo.operations.query.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class TradeSimulationOutDto {

    private Long tradeId;

    private LocalDate matchDate;

    private Long matchId;

    private Long statusBuy;

    private Long statusSell;

}
```

## src/main/java/com/nubo/operations/query/api/models/dto/response/TradeValidationOutDto.java

```java
package com.nubo.operations.query.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nubo.operations.query.api.models.enums.CorrectionTypeEnum;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class TradeValidationOutDto {

    private Boolean isValidAssignment;

    private Integer maxFractions;

    private Boolean isOwnPosition;

    private RuleDetailOutDto assignation;

    private Boolean isValidCorrection;

    private Boolean billable;

    private Boolean hasPendingCorrection;

    private CorrectionTypeEnum correctionType;

    private RuleDetailOutDto correction;

}

```

## src/main/java/com/nubo/operations/query/api/models/dto/response/TradingSessionOutDto.java

```java
package com.nubo.operations.query.api.models.dto.response;

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
public class TradingSessionOutDto {

    private String id;

    private String description;
}

```

## src/main/java/com/nubo/operations/query/api/models/dto/response/TradingSystemOutDto.java

```java
package com.nubo.operations.query.api.models.dto.response;

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
public class TradingSystemOutDto {

    private Long id;

    private String description;
}

```

## src/main/java/com/nubo/operations/query/api/models/dto/response/TypeOutDto.java

```java
package com.nubo.operations.query.api.models.dto.response;

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
}

```

## src/main/java/com/nubo/operations/query/api/models/entity/CityEntity.java

```java
package com.nubo.operations.query.api.models.entity;

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
@Table(name = "\"CITY\"", schema = "\"NUANBODB\"")
public class CityEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"CITY_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"DESCRIPTION\"", length = 80, nullable = false)
    private String description;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        CityEntity that = (CityEntity) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/query/api/models/entity/ClassEntity.java

```java
package com.nubo.operations.query.api.models.entity;

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
        if (o == null || getClass() != o.getClass())
            return false;

        ClassEntity that = (ClassEntity) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/query/api/models/entity/CountryEntity.java

```java
package com.nubo.operations.query.api.models.entity;

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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        CountryEntity that = (CountryEntity) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/query/api/models/entity/CurrencyEntity.java

```java
package com.nubo.operations.query.api.models.entity;

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
        if (o == null || getClass() != o.getClass())
            return false;

        CurrencyEntity that = (CurrencyEntity) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/query/api/models/entity/DepartmentEntity.java

```java
package com.nubo.operations.query.api.models.entity;

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
@Table(name = "\"DEPARTMENT\"", schema = "\"NUANBODB\"")
public class DepartmentEntity {

    @Id
    @Column(name = "\"DEPARTMENT_ID\"", length = 10, nullable = false)
    private String id;

    @Column(name = "\"DESCRIPTION\"", length = 80, nullable = false)
    private String description;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        DepartmentEntity that = (DepartmentEntity) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/query/api/models/entity/DepositoryEntity.java

```java
package com.nubo.operations.query.api.models.entity;

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
        if (o == null || getClass() != o.getClass())
            return false;

        DepositoryEntity that = (DepositoryEntity) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/query/api/models/entity/DirectDepositoryEntity.java

```java
package com.nubo.operations.query.api.models.entity;

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
@Table(name = "\"DIRECT_DEPOSITORY\"", schema = "\"NUANBODB\"")
public class DirectDepositoryEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"DIRECT_DEPOSITORY_ID\"", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID\"", nullable = false)
    private ParticipantEntity participant;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID\"", nullable = false)
    private DepositoryEntity depository;

    @Column(name = "\"DIRECT_DEPOSITORY_NUMBER\"", length = 80)
    private String directDepositoryNumber;

    @Column(name = "\"CRCC_COMPENSATOR_CODE\"", length = 18)
    private String crccCompensatorCode;

    @Column(name = "\"CRCC_CUSTODIAN_CODE\"", length = 18)
    private String crccCustodianCode;

    @Column(name = "\"CRCC_NEGOTIATOR_CODE\"", length = 18)
    private String crccNegotiatorCode;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        DirectDepositoryEntity that = (DirectDepositoryEntity) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/query/api/models/entity/GicsEntity.java

```java
package com.nubo.operations.query.api.models.entity;

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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        GicsEntity that = (GicsEntity) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/query/api/models/entity/HolidayEntity.java

```java
package com.nubo.operations.query.api.models.entity;

import java.time.LocalDate;

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

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/query/api/models/entity/IdentificationTypeEntity.java

```java
package com.nubo.operations.query.api.models.entity;

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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        IdentificationTypeEntity that = (IdentificationTypeEntity) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/query/api/models/entity/InvestorAccountEntity.java

```java
package com.nubo.operations.query.api.models.entity;

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

    @Column(name = "\"ACCOUNT_NAME\"", length = 100)
    private String accountName;


    @Column(name = "\"TAX_EXEMP\"")
    private Boolean taxExemp;

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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        InvestorAccountEntity that = (InvestorAccountEntity) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/query/api/models/entity/InvestorEntity.java

```java
package com.nubo.operations.query.api.models.entity;

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

    @Column(name = "\"DOCUMENT_NUMBER\"", length = 20)
    private String documentNumber;

    @ManyToOne
    @JoinColumn(name = "\"IDENTIFICATION_TYPE_ID\"", nullable = false)
    private IdentificationTypeEntity identificationType;

    @Column(name = "\"NATIONALITY\"", length = 2)
    private String nationality;

    @Column(name = "\"CLEARINGHOUSE_CODE\"", length = 20)
    private String clearinghouseCode;

    @ManyToOne
    @JoinColumn(name = "\"GICS_ID\"")
    private GicsEntity gics;

    @Column(name = "\"MONEY_LAUNDERING_FLAG\"")
    private Boolean moneyLaunderingFlag;

    @Column(name = "\"TAX_EXEMP\"")
    private Boolean taxExemp;

    @ManyToOne
    @JoinColumn(name = "\"TAX_STATUS_ID\"")
    private TaxStatusEntity taxStatus;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", nullable = false, length = 30)
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        InvestorEntity that = (InvestorEntity) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/query/api/models/entity/IssuerEntity.java

```java
package com.nubo.operations.query.api.models.entity;

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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        IssuerEntity that = (IssuerEntity) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/query/api/models/entity/MarketEntity.java

```java
package com.nubo.operations.query.api.models.entity;

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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        MarketEntity that = (MarketEntity) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/query/api/models/entity/MilaDepositoryEntity.java

```java
package com.nubo.operations.query.api.models.entity;

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
@Table(name = "\"MILA_DEPOSITORY\"", schema = "\"NUANBODB\"")
public class MilaDepositoryEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"MILA_DEPOSITORY_ID\"")
    private Long id;

    @Column(name = "\"CODE\"", length = 80)
    private String code;

    @Column(name = "\"IDENTIFICATION_TYPE_ID\"", nullable = false)
    private Long identificationTypeId;

    @Column(name = "\"DOCUMENT_NUMBER\"", length = 20)
    private String documentNumber;

    @Column(name = "\"DIRECT_DEPOSITORY_NUMBER\"", length = 80)
    private String directDepositoryNumber;

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof MilaDepositoryEntity that)) {
            return false;
        }
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/query/api/models/entity/PackageCustodianEntity.java

```java
package com.nubo.operations.query.api.models.entity;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@IdClass(PackageCustodianKey.class)
@Table(name = "\"PACKAGE_CUSTODIAN\"", schema = "\"NUANBODB\"")
public class PackageCustodianEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"PACKAGE_CUSTODIAN_ID\"")
    private Long packageCustodianId;

    @Id
    @Column(name = "\"PACKAGE_DATE\"", nullable = false)
    private LocalDate packageDate;

    @Id
    @ManyToOne
    @JoinColumn(name = "\"MARKET_ID\"", nullable = false)
    private MarketEntity market;

    @Column(name = "\"PARTICIPANT_CODE\"", length = 3, nullable = false)
    private String participantCode;

    @Column(name = "\"SEQUENCE\"", nullable = false)
    private Long sequence;

    @Column(name = "\"CODE_SCB\"", length = 3)
    private String codeScb;

    @Column(name = "\"PACKAGE_NUMBER\"", length = 18, nullable = false)
    private String packageNumber;

    @ManyToOne
    @JoinColumn(name = "\"SIDE_ID\"", nullable = false)
    private SideEntity side;

    @ManyToOne
    @JoinColumn(name = "\"INVESTOR_ID\"", nullable = false)
    private InvestorEntity investor;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID\"", nullable = false)
    private ParticipantEntity participant;

    @ManyToOne
    @JoinColumn(name = "\"INVESTOR_ACCOUNT_ID\"", nullable = false)
    private InvestorAccountEntity investorAccount;

    @Column(name = "\"ISIN_NUMBER_ID\"", nullable = false)
    private Long isinNumberId;

    @ManyToOne
    @JoinColumn(name = "\"SECURITY_ID\"", nullable = false)
    private SecurityTitleEntity securityTitle;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"", nullable = false)
    private TypeEntity type;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID\"", nullable = false)
    private DepositoryEntity depository;

    @Column(name = "\"CLEARING_DATE\"")
    private LocalDate clearingDate;

    @Column(name = "\"RETURN_CLEARING_DATE\"")
    private LocalDate returnClearingDate;

    @ManyToOne
    @JoinColumn(name = "\"PACKAGE_STATUS_ID\"", nullable = false)
    private StatusEntity packageStatus;

    @ManyToOne
    @JoinColumn(name = "\"CUSTODIAN_ID\"", nullable = false)
    private ParticipantEntity custodian;

    @ManyToOne
    @JoinColumn(name = "\"FIC_ADMINISTRATOR_ID\"")
    private ParticipantEntity ficAdministrator;

    @Column(name = "\"TOTAL_FRACTION_QUANTITY\"", precision = 24, scale = 4)
    private BigDecimal totalFractionQuantity;

    @Column(name = "\"AVERAGE_PRICE\"", precision = 16, scale = 4)
    private BigDecimal averagePrice;

    @Column(name = "\"TOTAL_FRACTION_VOLUME\"", precision = 24, scale = 4)
    private BigDecimal totalFractionVolume;

    @Column(name = "\"TOTAL_NET_AMOUNT\"", precision = 24, scale = 4)
    private BigDecimal totalNetAmount;

    @Column(name = "\"TOTAL_COMMISSION_AMOUNT\"", precision = 24, scale = 4)
    private BigDecimal totalCommissionAmount;

    @Column(name = "\"TOTAL_VAL_TAX_AMOUNT\"", precision = 24, scale = 4)
    private BigDecimal totalValTaxAmount;

    @Column(name = "\"CLEARING_PERCENTAGE\"", precision = 6, scale = 4)
    private BigDecimal clearingPercentage;

    @Column(name = "\"AVERAGE_FRACTION_VOLUME\"", precision = 24, scale = 4)
    private BigDecimal averageFractionVolume;

    @Column(name = "\"RETURN_NET_AMOUNT\"", precision = 24, scale = 4)
    private BigDecimal returnNetAmount;

    @Column(name = "\"AVERAGE_RATE\"", precision = 16, scale = 4)
    private BigDecimal averageRate;

    @Column(name = "\"REFERENCE_PACKAGE\"", length = 10)
    private String referencePackage;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumns({
        @JoinColumn(name = "\"PACKAGE_CUSTODIAN_ID\"", referencedColumnName = "\"PACKAGE_CUSTODIAN_ID\""),
        @JoinColumn(name = "\"PACKAGE_DATE\"", referencedColumnName = "\"PACKAGE_DATE\""),
        @JoinColumn(name = "\"MARKET_ID\"", referencedColumnName = "\"MARKET_ID\"")
    })
    @Builder.Default
    private List<PackageDetailEntity> packageDetailEntities = new ArrayList<>();

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        PackageCustodianEntity that = (PackageCustodianEntity) o;

        if (packageCustodianId != null ? !packageCustodianId.equals(that.packageCustodianId) : that.packageCustodianId != null)
            return false;
        if (packageDate != null ? !packageDate.equals(that.packageDate) : that.packageDate != null)
            return false;
        return market != null ? market.equals(that.market) : that.market == null;
    }

    @Override
    public int hashCode() {
        int result = packageCustodianId != null ? packageCustodianId.hashCode() : 0;
        result = 31 * result + (packageDate != null ? packageDate.hashCode() : 0);
        result = 31 * result + (market != null ? market.hashCode() : 0);
        return result;
    }

}

```

## src/main/java/com/nubo/operations/query/api/models/entity/PackageCustodianKey.java

```java
package com.nubo.operations.query.api.models.entity;

import java.io.Serializable;
import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PackageCustodianKey implements Serializable {

    private Long packageCustodianId;

    private String market;

    private LocalDate packageDate;

}


```

## src/main/java/com/nubo/operations/query/api/models/entity/PackageDetailEntity.java

```java
package com.nubo.operations.query.api.models.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"PACKAGE_DETAIL\"", schema = "\"NUANBODB\"")
public class PackageDetailEntity {

    @Id
    @Column(name = "\"PACKAGE_CUSTODIAN_ID\"")
    private Long packageCustodianId;

    @Column(name = "\"MARKET_ID\"", length = 2)
    private String marketId;

    @Column(name = "\"PACKAGE_DATE\"")
    private LocalDate packageDate;

    @Column(name = "\"PARTICIPANT_CODE\"", length = 3)
    private String participantCode;

    @Column(name = "\"SEQUENCE\"")
    private Long sequence;

    @Column(name = "\"PACKAGE_NUMBER\"", length = 18)
    private String packageNumber;

    @Column(name = "\"TRADE_ID\"")
    private Long tradeId;

    @Column(name = "\"SIDE_ID\"", length = 2)
    private String sideId;

    @Column(name = "\"FRACTION\"")
    private Integer fraction;

    @Column(name = "\"MATCH_DATE\"")
    private LocalDate matchDate;

    @Column(name = "\"UNIQUE_FRACTION_ID\"")
    private Long uniqueFractionId;

    @Column(name = "\"INVESTOR_ID\"")
    private Long investorId;

    @Column(name = "\"CUSTODIAN_ID\"")
    private Long custodianId;

    @Column(name = "\"PARTICIPANT_ID\"")
    private Long participantId;

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
        if (this == o) {
            return true;
        }
        if (!(o instanceof PackageDetailEntity that)) {
            return false;
        }
        return packageCustodianId != null && packageCustodianId.equals(that.packageCustodianId);
    }

    @Override
    public int hashCode() {
        return packageCustodianId != null ? packageCustodianId.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/query/api/models/entity/ParticipantAccountEntity.java

```java
package com.nubo.operations.query.api.models.entity;

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

    @Column(name = "\"TAX_EXEMP\"")
    private Boolean taxExemp;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"")
    private StatusEntity status;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"")
    private TypeEntity type;

    @ManyToOne
    @JoinColumn(name = "\"ORIGIN_TYPE_ID\"", nullable = false)
    private TypeEntity originType;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID\"")
    private DepositoryEntity depository;

    @Builder.Default
    @Column(name = "\"IND_MASTER\"")
    private Boolean indMaster = Boolean.FALSE;

    @Column(name = "\"LAST_MODIFY_USER\"", nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", nullable = false)
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        ParticipantAccountEntity that = (ParticipantAccountEntity) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/query/api/models/entity/ParticipantBankAccountEntity.java

```java
package com.nubo.operations.query.api.models.entity;

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
@Builder()
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

    @ManyToOne
    @JoinColumn(name = "\"ORIGIN_TYPE_ID\"")
    private TypeEntity originType;

    @ManyToOne
    @JoinColumn(name = "\"CONCEPT_TYPE_ID\"")
    private TypeEntity conceptType;

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

        ParticipantBankAccountEntity that = (ParticipantBankAccountEntity) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/query/api/models/entity/ParticipantEntity.java

```java
package com.nubo.operations.query.api.models.entity;

import java.time.LocalDate;
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
import lombok.ToString;

@Getter
@Setter
@Builder
@ToString
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
    @JoinColumn(name = "\"IDENTIFICATION_TYPE_ID\"")
    private IdentificationTypeEntity identificationType;

    @Column(name = "\"NAME\"", length = 100)
    private String name;

    @Column(name = "\"SHORT_NAME\"", length = 50)
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
    @JoinColumn(name = "\"STATUS_ID\"")
    private StatusEntity status;

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

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"")
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50)
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        ParticipantEntity that = (ParticipantEntity) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/query/api/models/entity/SecurityTitleEntity.java

```java
package com.nubo.operations.query.api.models.entity;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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

    @Column(name = "\"CFI_ID\"", nullable = false)
    private String cfi;

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
    @JoinColumn(name = "\"ISSUER_ID\"")
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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        SecurityTitleEntity that = (SecurityTitleEntity) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/query/api/models/entity/SettlementCorrectionEntity.java

```java
package com.nubo.operations.query.api.models.entity;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

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

@Builder(toBuilder = true)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"SETTLEMENT_CORRECTIONS\"", schema = "\"NUANBODB\"")
public class SettlementCorrectionEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"SETTLEMENT_CORRECTIONS_ID\"", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "\"TRADE_ID\"", nullable = false)
    private TradeEntity trade;

    @Column(name = "\"FRACTION\"", nullable = false)
    private Integer fraction;

    @ManyToOne
    @JoinColumn(name = "\"SIDE_ID\"", nullable = false)
    private SideEntity side;

    @Column(name = "\"REQUEST_DATE\"")
    private LocalDate requestDate;

    @Column(name = "\"REQUEST_TIME\"")
    private LocalTime requestTime;

    @ManyToOne
    @JoinColumn(name = "\"PROCESS_TYPE_ID\"", nullable = false)
    private TypeEntity processType;

    @ManyToOne
    @JoinColumn(name = "\"INVESTOR_ACCOUNT_ID\"", nullable = true)
    private InvestorAccountEntity investorAccount;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ACCOUNT_ID\"", nullable = true)
    private ParticipantAccountEntity participantAccount;

    @ManyToOne
    @JoinColumn(name = "\"REASSIGNMENT_TYPE_ID\"", nullable = false)
    private TypeEntity reassignmentType;

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

    @Column(name = "\"CORRECTION_NUMBER\"", length = 15)
    private String correctionNumber;

    @Column(name = "\"CLEARING_DATE\"")
    private LocalDate clearingDate;

    @Column(name = "\"COMMISSION_PERCENTAGE\"", precision = 6, scale = 4)
    private BigDecimal commissionPercentage;

    @Column(name = "\"REFERENCE\"", length = 10)
    private String reference;

    @Column(name = "\"FRACTION_QUANTITY\"", precision = 16, scale = 4)
    private BigDecimal fractionQuantity;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = true)
    private StatusEntity status;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        SettlementCorrectionEntity that = (SettlementCorrectionEntity) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/query/api/models/entity/SettlementEntity.java

```java
package com.nubo.operations.query.api.models.entity;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinColumns;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder(toBuilder = true)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@IdClass(SettlementKey.class)
@Table(name = "\"SETTLEMENT\"", schema = "\"NUANBODB\"")
public class SettlementEntity {

    @Id
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"TRADE_ID\"", nullable = false)
    private TradeEntity trade;

    @Id
    @Column(name = "\"FRACTION\"", nullable = false)
    private Integer fraction;

    @Id
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"SIDE_ID\"", nullable = false)
    private SideEntity side;

    @Column(name = "\"UNIQUE_FRACTION_ID\"")
    private Long uniqueFractionId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"INVESTOR_ID\"")
    private InvestorEntity investor;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"INVESTOR_ACCOUNT_ID\"")
    private InvestorAccountEntity investorAccount;

    @ManyToOne(fetch = FetchType.EAGER)
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

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"TRADING_SYSTEM_ID\"")
    private TradingSystemEntity tradingSystem;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"STATUS_ID\"")
    private StatusEntity status;

    @Column(name = "\"BROKERAGE_SERVICE\"", precision = 16, scale = 4)
    private BigDecimal brokerageService;

    @ManyToOne(fetch = FetchType.EAGER)
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

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"SOURCE_QUOTE_TYPE_ID\"")
    private TypeEntity sourceQuoteType;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"FIC_ADMINISTRATOR_ID\"", nullable = true)
    private ParticipantEntity ficAdministrator;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"DIRECT_DEPOSITOR\"")
    private DirectDepositoryEntity directDepositor;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"CUSTODIAN_STATUS_ID\"")
    private StatusEntity custodianStatus;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"PARTICIPANT_BANK_ACCOUNT_ID\"")
    private ParticipantBankAccountEntity participantBankAccount;

    @Column(name = "\"CASH_ACCOUNT\"")
    private String cashAccount;

    @Column(name = "\"REJECTION_REASON\"", length = 255, nullable = false)
    private String rejectionReason;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"TRANSFER_PARTICIPANT_ID\"")
    private ParticipantEntity transferParticipant;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"MILA_DIRECT_DEPOSITOR\"", nullable = false)
    private MilaDepositoryEntity milaDirectDepositor;

    @Column(name = "\"REFERENCE_PACKAGE\"")
    private String referencePackage;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 30, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 30, nullable = false)
    private String lastModifyIp;

    @Column(name = "\"IND_MASTER\"")
    private Boolean masterAccountIndicator;

    @Builder.Default
    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumns({
            @JoinColumn(name = "\"TRADE_ID\"", referencedColumnName = "\"TRADE_ID\""),
            @JoinColumn(name = "\"UNIQUE_FRACTION_ID\"", referencedColumnName = "\"UNIQUE_FRACTION_ID\"")
    })
    private List<PackageDetailEntity> packageDetails = new ArrayList<>();

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        SettlementEntity that = (SettlementEntity) o;

        if (trade != null ? !trade.equals(that.trade) : that.trade != null)
            return false;
        if (fraction != null ? !fraction.equals(that.fraction) : that.fraction != null)
            return false;
        return side != null ? side.equals(that.side) : that.side == null;
    }

    @Override
    public int hashCode() {
        int result = trade != null ? trade.hashCode() : 0;
        result = 31 * result + (fraction != null ? fraction.hashCode() : 0);
        result = 31 * result + (side != null ? side.hashCode() : 0);
        return result;
    }
}

```

## src/main/java/com/nubo/operations/query/api/models/entity/SettlementKey.java

```java
package com.nubo.operations.query.api.models.entity;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

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

## src/main/java/com/nubo/operations/query/api/models/entity/SideEntity.java

```java
package com.nubo.operations.query.api.models.entity;

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
@Table(name = "\"SIDE\"", schema = "\"NUANBODB\"")
public class SideEntity {

    @Id
    @Column(name = "\"SIDE_ID\"", length = 2)
    private String id;

    @Column(name = "\"DESCRIPTION\"", length = 80, nullable = false)
    private String description;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        SideEntity that = (SideEntity) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/query/api/models/entity/StatusEntity.java

```java
package com.nubo.operations.query.api.models.entity;

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

    @Column(name = "\"DESCRIPTION\"", length = 80, nullable = false)
    private String description;

    @Column(name = "\"CATEGORY\"", length = 30, nullable = false)
    private String category;

    @Column(name = "\"SHORTNAME\"")
    private String shortName;

    @Column(name = "\"DETAIL\"", length = 255)
    private String detail;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        StatusEntity that = (StatusEntity) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/query/api/models/entity/TaxStatusEntity.java

```java
package com.nubo.operations.query.api.models.entity;

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

    @Column(name = "\"DESCRIPTION\"", length = 80, nullable = false)
    private String description;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        TaxStatusEntity that = (TaxStatusEntity) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/query/api/models/entity/TaxesEntity.java

```java
package com.nubo.operations.query.api.models.entity;

import java.math.BigDecimal;

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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        TaxesEntity that = (TaxesEntity) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/query/api/models/entity/TradeEntity.java

```java
package com.nubo.operations.query.api.models.entity;

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

@Builder
@Getter
@Setter
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

    @Column(name = "\"DEPOSITORY_ID\"")
    private String depositoryId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"DEPOSITORY_ID_SELL\"")
    private DepositoryEntity depositorySell;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"DEPOSITORY_ID_BUY\"")
    private DepositoryEntity depositoryBuy;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"PREVIOUS_CYCLE_STATUS_ID\"")
    private StatusEntity previousCycleStatus;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"SUBSEQUENT_CYCLE_STATUS_ID\"")
    private StatusEntity subsequentCycleStatus;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"COUNTRY_ID\"")
    private CountryEntity country;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"TYPE_ID\"")
    private TypeEntity type;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"MARKET_ID\"")
    private MarketEntity market;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"ISSUANCE_MARKET_ID\"")
    private MarketEntity issuanceMarket;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"SECURITY_ID\"")
    private SecurityTitleEntity securityTitle;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"PARTICIPANT_ID_BUY\"")
    private ParticipantEntity participantBuy;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"PARTICIPANT_ID_SELL\"")
    private ParticipantEntity participantSell;

    @Column(name = "\"CUSTODIAN_ID_BUY\"")
    private Long custodianBuyId;

    @Column(name = "\"CUSTODIAN_ID_SELL\"")
    private Long custodianSellId;

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

    @Column(name = "\"ADVANCE_STATUS\"")
    private Integer advanceStatus;

    @Column(name = "\"EXIT_INDICATOR_SETTLEMENT\"")
    private Boolean exitIndicatorSettlement;

    @Column(name = "\"CANCELED_STATUS\"")
    private Boolean canceledStatus;

    @Column(name = "\"QUANTITY\"", precision = 16, scale = 4, nullable = false)
    private BigDecimal quantity;

    @Column(name = "\"PRICE\"", precision = 16, scale = 6, nullable = false)
    private BigDecimal price;

    @Column(name = "\"VOLUME\"", precision = 16, scale = 4, nullable = false)
    private BigDecimal volume;

    @Column(name = "\"REPURCHASE_RATE\"", precision = 6, scale = 4, nullable = false)
    private BigDecimal repurchaseRate;

    @Column(name = "\"REPURCHASE_AMOUNT\"", precision = 16, scale = 4, nullable = false)
    private BigDecimal repurchaseAmount;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @Column(name = "\"MATCH_TIME\"", nullable = false)
    private OffsetDateTime matchTime;

    @Column(name = "\"OWN_POSITION_SELL\"")
    private Boolean ownPositionSell;

    @Column(name = "\"OWN_POSITION_BUY\"")
    private Boolean ownPositionBuy;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"CURRENCY_ID\"")
    private CurrencyEntity currency;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"TRADING_SYSTEM_ID\"")
    private TradingSystemEntity tradingSystem;

    @ManyToOne(fetch = FetchType.EAGER)
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

    @Column(name = "\"FORWARD_PRICE\"", precision = 12, scale = 6)
    private BigDecimal forwardPrice;

    @Column(name = "\"REALLOCATION_INDICATOR\"")
    private Boolean reallocationIndicator;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"BUSINESS_TYPE_ID\"")
    private TypeEntity businessType;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"MARKET_TYPE_ID\"")
    private TypeEntity marketType;

    @ManyToOne(fetch = FetchType.EAGER)
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

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"PAYMENT_TYPE_ID\"")
    private TypeEntity paymentType;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"SETTLEMENT_TYPE_ID\"")
    private TypeEntity settlementType;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"CUSTODIAN_STATUS_ID\"")
    private StatusEntity custodianStatus;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"SETTLEMENT_STATUS_ID\"")
    private StatusEntity settlementStatus;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"BLOQUING_STATUS_ID\"")
    private StatusEntity bloquingStatus;

    @Column(name = "\"PURCHASE_PAYMENT_INDICATOR\"")
    private Boolean purchasePaymentIndicator;

    @Column(name = "\"RETURN_INDICATOR_SETTLEMENT\"")
    private Boolean returnIndicatorSettlement;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"SOURCE_QUOTE_BUY_TYPE\"")
    private TypeEntity sourceQuoteBuyType;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"SOURCE_QUOTE_SELL_TYPE\"")
    private TypeEntity sourceQuoteSellType;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"SELL_STATUS_ID\"")
    private StatusEntity sellStatus;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"BUY_STATUS_ID\"")
    private StatusEntity buyStatus;

    @Column(name = "\"ENTERING_FIRM_SELL\"")
    private String enteringFirmSell;

    @Column(name = "\"ENTERING_FIRM_BUY\"")
    private String enteringFirmBuy;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private OffsetDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

    @Builder.Default
    @Column(name = "\"IND_MASTER_BUY\"", nullable = true)
    private Boolean masterAccountIndicatorBuy = false;

    @Builder.Default
    @Column(name = "\"IND_MASTER_SELL\"", nullable = true)
    private Boolean masterAccountIndicatorSell = false;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        TradeEntity that = (TradeEntity) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/operations/query/api/models/entity/TradeEquityEntity.java

```java
package com.nubo.operations.query.api.models.entity;

import java.math.BigDecimal;
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
@Table(name = "\"TRADE_EQUITY\"", schema = "\"NUANBODB\"")
public class TradeEquityEntity {

    @Id
    @Column(name = "\"TRADE_ID\"")
    private Long tradeId;

    @Column(name = "\"FOREIGN_BROKER_BUY\"", nullable = false)
    private String foreignBrokerBuy;

    @Column(name = "\"FOREIGN_BROKER_SELL\"", nullable = false)
    private String foreignBrokerSell;

    @Column(name = "\"DIRECT_DEPOSITOR_BUY\"", nullable = false)
    private Integer directDepositorBuy;

    @Column(name = "\"DIRECT_DEPOSITOR_SELL\"", nullable = false)
    private Integer directDepositorSell;

    @Column(name = "\"SOURCE_INDICATOR_BUY\"", nullable = false)
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

    @Column(name = "\"AGGRESSIVE_TIP\"")
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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        TradeEquityEntity that = (TradeEquityEntity) o;

        return tradeId != null ? tradeId.equals(that.tradeId) : that.tradeId == null;
    }

    @Override
    public int hashCode() {
        return tradeId != null ? tradeId.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/query/api/models/entity/TradingSessionEntity.java

```java
package com.nubo.operations.query.api.models.entity;

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
@Table(name = "\"TRADING_SESSION\"", schema = "\"NUANBODB\"")
public class TradingSessionEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"TRADING_SESSION_ID\"", length = 2)
    private String id;

    @Column(name = "\"DESCRIPTION\"", length = 80)
    private String description;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        TradingSessionEntity that = (TradingSessionEntity) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/query/api/models/entity/TradingSystemEntity.java

```java
package com.nubo.operations.query.api.models.entity;

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
@Table(name = "\"TRADING_SYSTEM\"", schema = "\"NUANBODB\"")
public class TradingSystemEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"TRADING_SYSTEM_ID\"")
    private Long id;

    @Column(name = "\"DESCRIPTION\"", length = 80)
    private String description;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        TradingSystemEntity that = (TradingSystemEntity) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/query/api/models/entity/TypeEntity.java

```java
package com.nubo.operations.query.api.models.entity;

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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        TypeEntity that = (TypeEntity) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/query/api/models/entity/UserNuboEntity.java

```java
package com.nubo.operations.query.api.models.entity;

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
import lombok.ToString;

@Getter
@Setter
@Builder
@ToString
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

    @Column(name = "\"USER_TYPE\"", nullable = false)
    private String userType;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID\"", nullable = false)
    private ParticipantEntity participant;

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

        UserNuboEntity that = (UserNuboEntity) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/query/api/models/enums/AccountSourceTypeEnum.java

```java
package com.nubo.operations.query.api.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;

/**
 * Enum local que indica el origen desde el cual se debe leer el campo
 * {@code TAX_EXEMP} en los cálculos tributarios.
 * <p>
 * Contrato fijo entre microservicios y front (ver Regla 4 de {@code plans/plan.md}):
 * <ul>
 *     <li>{@code 1} → {@link #PARTICIPANT_ACCOUNT}</li>
 *     <li>{@code 2} → {@link #INVESTOR_ACCOUNT}</li>
 * </ul>
 */
@Getter
@RequiredArgsConstructor
public enum AccountSourceTypeEnum {

    PARTICIPANT_ACCOUNT(1),
    INVESTOR_ACCOUNT(2);

    private final Integer value;

    @JsonValue
    public Integer getValue() {
        return value;
    }

    @JsonCreator
    public static AccountSourceTypeEnum fromValue(Integer value) {
        return Arrays.stream(AccountSourceTypeEnum.values())
                .filter(source -> source.value.equals(value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException(
                        "Account source type not implemented: " + value));
    }

}


```

## src/main/java/com/nubo/operations/query/api/models/enums/BusinessRuleEnum.java

```java
package com.nubo.operations.query.api.models.enums;

import java.util.Arrays;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum BusinessRuleEnum {

    RULE_OPERATION_CORRECTION("RULE_OPERATION_CORRECTION"),
    RULE_OPERATION_CORRECTION_ALLOWED_DAYS("RULE_OPERATION_CORRECTION_ALLOWED_DAYS"),
    RULE_OPERATION_CORRECTION_CUSTODIAN("RULE_OPERATION_CORRECTION_CUSTODIAN"),
    RULE_OPERATION_CORRECTION_SPECIAL_FIDUCIARY("RULE_OPERATION_CORRECTION_SPECIAL_FIDUCIARY"),
    RULE_OPERATION_ASSIGNMENT_MAXIMUM_FRACTION_LIMIT("RULE_OPERATION_ASSIGNMENT_MAXIMUM_FRACTION_LIMIT"),
    RULE_OPERATION_CORRECTION_MAXIMUM_FRACTION_LIMIT("RULE_OPERATION_CORRECTION_MAXIMUM_FRACTION_LIMIT"),
    RULE_REASSIGNMENT_BY_FRACTION_CUSTODIAN("RULE_REASSIGNMENT_BY_FRACTION_CUSTODIAN"),
    RULE_ASSIGNMENT_REASSIGNMENT_BY_SIDE("RULE_ASSIGNMENT_REASSIGNMENT_BY_SIDE");

    private final String value;

    @JsonValue
    public String getValue() {
        return value;
    }

    @JsonCreator
    public static BusinessRuleEnum fromValue(String value) {
        return Arrays.stream(BusinessRuleEnum.values())
                .filter(status -> Objects.equals(status.value, value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown value: " + value));
    }
}

```

## src/main/java/com/nubo/operations/query/api/models/enums/CorrectionStatusEnum.java

```java
package com.nubo.operations.query.api.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum CorrectionStatusEnum {

    ACCEPT_DEFAULT_CORRECTION(1L, "Aceptar corrección por compra y venta", "SIN_COBRO", "CORRECCION"),

    ACCEPT_BUY_CORRECTION(2L, "Aceptar corrección por compra", "COMPRA", "CORRECCION"),
    ACCEPT_SELL_CORRECTION(3L, "Aceptar corrección por venta", "VENTA", "CORRECCION"),
    ACCEPT_NO_CHARGE_BUY_CORRECTION(4L, "Aceptar corrección sin generar cobro por compra", "SIN_COBRO_COMPRA",
            "CORRECCION"),
    ACCEPT_NO_CHARGE_SELL_CORRECTION(5L, "Aceptar corrección sin generar cobro por venta", "SIN_COBRO_VENTA",
            "CORRECCION");

    private final Long id;
    private final String description;
    private final String shortName;
    private final String category;

    @JsonValue
    public String getShortName() {
        return shortName;
    }

    @JsonCreator
    public static CorrectionStatusEnum fromShortName(String shortName) {
        if (shortName == null) {
            return null;
        }
        for (CorrectionStatusEnum status : values()) {
            if (status.getShortName().equalsIgnoreCase(shortName)) {
                return status;
            }
        }
        return null;
    }

    public static CorrectionStatusEnum fromId(Long id) {
        if (id == null) {
            return null;
        }
        for (CorrectionStatusEnum status : values()) {
            if (status.getId().equals(id)) {
                return status;
            }
        }
        return null;
    }

}

```

## src/main/java/com/nubo/operations/query/api/models/enums/CorrectionTypeEnum.java

```java
package com.nubo.operations.query.api.models.enums;

import com.fasterxml.jackson.annotation.JsonValue;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum CorrectionTypeEnum {

    LOCAL("LOCAL"),
    EXTERNAL("EXTRANJERA");

    private final String value;

    @JsonValue
    public String getValue() {
        return value;
    }

}

```

## src/main/java/com/nubo/operations/query/api/models/enums/CountryCodeEnum.java

```java
package com.nubo.operations.query.api.models.enums;


import java.util.Set;

import lombok.AllArgsConstructor;
import lombok.Getter;


@Getter
@AllArgsConstructor
public enum CountryCodeEnum {

    COLOMBIA("CO"),
    PERU("PE");

    private final String code;

    public static boolean isAllowedColombiaOrPeru(String countryCode) {
        if (countryCode == null || countryCode.isEmpty()) {
            return false;
        }
        Set<CountryCodeEnum> allowedCountries = Set.of(CountryCodeEnum.PERU, CountryCodeEnum.COLOMBIA);
        for (CountryCodeEnum country : allowedCountries) {
            if (country.getCode().equals(countryCode)) {
                return true;
            }
        }
        return false;
    }
}

```

## src/main/java/com/nubo/operations/query/api/models/enums/FiltersEnum.java

```java
package com.nubo.operations.query.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum FiltersEnum {
    OPERACION("OPERACIÓN"),
    CUSTODIO("CUSTODIO");

    private final String category;
}

```

## src/main/java/com/nubo/operations/query/api/models/enums/MarketEnum.java

```java
package com.nubo.operations.query.api.models.enums;

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
public enum MarketEnum {

    RENTA_VARIABLE(1L),
    RENTA_FIJA(2L),
    MERCADO_GLOBAL(6L);

    private final Long id;

    @JsonValue
    public Long getId() {
        return id;
    }

    @JsonCreator
    public static MarketEnum fromId(Long id) {
        return Arrays.stream(MarketEnum.values())
                .filter(market -> Objects.equals(market.id, id))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown value: " + id));
    }

    @Converter(autoApply = true)
    public static class MarketEnumConverter implements AttributeConverter<MarketEnum, Long> {

        @Override
        public Long convertToDatabaseColumn(MarketEnum market) {
            return market != null ? market.getId() : null;
        }

        @Override
        public MarketEnum convertToEntityAttribute(Long dbData) {
            return dbData != null ? MarketEnum.fromId(dbData) : null;
        }
    }

}

```

## src/main/java/com/nubo/operations/query/api/models/enums/OperationTypeEnum.java

```java
package com.nubo.operations.query.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum OperationTypeEnum
{
    CONTADO(60, "CONTADO");

    private final int code;
    private final String description;

    public static OperationTypeEnum fromCode(int code)
    {
        for (OperationTypeEnum operationType : OperationTypeEnum.values())
        {
            if (operationType.getCode() == code)
            {
                return operationType;
            }
        }
        return null;
    }

    public static OperationTypeEnum fromDescription(String description)
    {
        for (OperationTypeEnum operationType : OperationTypeEnum.values())
        {
            if (operationType.getDescription().equalsIgnoreCase(description))
            {
                return operationType;
            }
        }
        return null;
    }
}

```

## src/main/java/com/nubo/operations/query/api/models/enums/PropertiesEnum.java

```java
package com.nubo.operations.query.api.models.enums;

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
    AUTH_TOKEN("auth_token"),
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

## src/main/java/com/nubo/operations/query/api/models/enums/ReassignmentTypeEnum.java

```java
package com.nubo.operations.query.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ReassignmentTypeEnum {
    INICIAL("INICIAL"),
    ACTUAL("ACTUAL");

    private final String value;
}

```

## src/main/java/com/nubo/operations/query/api/models/enums/SearchOperationEnum.java

```java
package com.nubo.operations.query.api.models.enums;

import java.util.Arrays;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
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

    @JsonValue
    public String getValue() {
        return value;
    }

    @JsonCreator
    public static SearchOperationEnum fromValue(String value) {
        return Arrays.stream(SearchOperationEnum.values())
                .filter(operation -> operation.value.equalsIgnoreCase(value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Operation not implemented: " + value));
    }

    @Converter(autoApply = true)
    public static class SearchOperationEnumConverter implements AttributeConverter<SearchOperationEnum, String> {

        @Override
        public String convertToDatabaseColumn(SearchOperationEnum operation) {
            return operation != null ? operation.getValue() : null;
        }

        @Override
        public SearchOperationEnum convertToEntityAttribute(String dbData) {
            return dbData != null ? SearchOperationEnum.fromValue(dbData) : null;
        }
    }
}

```

## src/main/java/com/nubo/operations/query/api/models/enums/SideEnum.java

```java
package com.nubo.operations.query.api.models.enums;

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
    UNKNOWN("0"),
    BUY_AND_SELL(null);

    private final String id;

    @JsonValue
    public String getId() {
        return id;
    }

    @JsonCreator
    public static SideEnum fromValue(String value) {
        return Arrays.stream(SideEnum.values())
                .filter(side -> Objects.equals(side.id, value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Side not implemented: " + value));
    }
}

```

## src/main/java/com/nubo/operations/query/api/models/enums/StatusEnum.java

```java
package com.nubo.operations.query.api.models.enums;

import java.util.Arrays;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum StatusEnum {

    CORRECTION_REQUEST(7L, "SOLICITADA", "REASIGNACION_CORRECCION"),
    CORRECTION_ACCEPTED(9L, "ACEPTADA", "REASIGNACION_CORRECCION"),
    CORRECTION_REJECTED(10L, "RECHAZADA", "REASIGNACION_CORRECCION"),
    CANCELED(11L, "CANCELADA", "REGISTRO_OPERACION"),
    NEGOCIATED(13L, "NEGOCIADA", "REGISTRO_OPERACION"),
    ACCEPTED(15L, "ACEPTADA", "ASIGNACION"),
    NOT_STATUS(0L, "NO ESTADO", ""),
    CUSTODIAN_TRANSFERRED(1071L, "TRASLADADA", "CUSTODIO"),
    CUSTODIAN_PRE_MATCH(1072L, "PRE-MATCH", "CUSTODIO"),
    CUSTODIAN_ADMITTED(1073L, "ADMITIDA", "CUSTODIO"),
    CUSTODIAN_REJECTED(1074L, "RECHAZADA", "CUSTODIO"),
    INVESTOR_ACCOUNT_ACTIVE(570L, "ACTIVO", "CUENTA_INVERSIONISTA");

    private final Long id;
    private final String description;
    private final String category;

    @JsonValue
    public Long getId() {
        return id;
    }

    @JsonCreator
    public static StatusEnum fromId(Long id) {
        return Arrays.stream(StatusEnum.values())
                .filter(status -> Objects.equals(status.id, id))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown value: " + id));
    }

    public static StatusEnum fromIdAndCustodian(Long id) {
        return Arrays.stream(StatusEnum.values())
                .filter(status -> Objects.equals(status.id, id) && "CUSTODIO".equals(status.category))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown value: " + id));
    }

    @Converter(autoApply = true)
    public static class StatusEnumConverter implements AttributeConverter<StatusEnum, Long> {

        @Override
        public Long convertToDatabaseColumn(StatusEnum status) {
            return status != null ? status.getId() : null;
        }

        @Override
        public StatusEnum convertToEntityAttribute(Long dbData) {
            return dbData != null ? StatusEnum.fromId(dbData) : null;
        }
    }

}

```

## src/main/java/com/nubo/operations/query/api/models/enums/TaxesEnum.java

```java
package com.nubo.operations.query.api.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;

@Getter
@RequiredArgsConstructor
public enum TaxesEnum {

    IVA("IVA");

    private final String value;

    @JsonValue
    public String getValue() {
        return value;
    }

    @JsonCreator
    public static TaxesEnum fromValue(String value) {
        return Arrays.stream(TaxesEnum.values())
                .filter(version -> version.value.equalsIgnoreCase(value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Version not implemented: " + value));
    }

    @Converter(autoApply = true)
    public static class TaxesEnumConverter implements AttributeConverter<TaxesEnum, String> {
        @Override
        public String convertToDatabaseColumn(TaxesEnum status) {
            return status != null ? status.getValue() : null;
        }

        @Override
        public TaxesEnum convertToEntityAttribute(String dbData) {
            return dbData != null ? TaxesEnum.fromValue(dbData) : null;
        }
    }

}
```

## src/main/java/com/nubo/operations/query/api/models/enums/TypeEnum.java

```java
package com.nubo.operations.query.api.models.enums;

import java.util.Arrays;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum TypeEnum {

    JOINT_ACCOUNT(22L),
    MASTER_ACCOUNT(24L),
    COUNTED_OPERATION(60L),
    REPO_OPERATION(61L),
    THIRD_PARTIES_POINT_ORIGIN(120L),
    OWN_POSITION_POINT_ORIGIN(121L),
    CUSTODIO(35L),
    COLLECTIVE_PORTFOLIO_POINT_ORIGIN(122L);

    private final Long id;

    @JsonValue
    public Long getId() {
        return id;
    }

    @JsonCreator
    public static TypeEnum fromId(Long id) {
        return Arrays.stream(TypeEnum.values())
                .filter(type -> Objects.equals(type.id, id))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown value: " + id));
    }

    @Converter(autoApply = true)
    public static class TypeEnumConverter implements AttributeConverter<TypeEnum, Long> {

        @Override
        public Long convertToDatabaseColumn(TypeEnum status) {
            return status != null ? status.getId() : null;
        }

        @Override
        public TypeEnum convertToEntityAttribute(Long dbData) {
            return dbData != null ? TypeEnum.fromId(dbData) : null;
        }
    }

}

```

## src/main/java/com/nubo/operations/query/api/models/enums/UserTypeEnum.java

```java
package com.nubo.operations.query.api.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;
import java.util.Objects;

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
                .filter(side -> Objects.equals(side.value, value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("UserType not implemented: " + value));
    }
}

```

## src/main/java/com/nubo/operations/query/api/models/enums/VersionApiEnum.java

```java
package com.nubo.operations.query.api.models.enums;

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

## src/main/java/com/nubo/operations/query/api/repository/CountryRepository.java

```java
package com.nubo.operations.query.api.repository;

import com.nubo.operations.query.api.models.entity.CountryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CountryRepository extends JpaRepository<CountryEntity, Long> {
}

```

## src/main/java/com/nubo/operations/query/api/repository/HolidayRepository.java

```java
package com.nubo.operations.query.api.repository;

import com.nubo.operations.query.api.models.entity.HolidayEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface HolidayRepository extends JpaRepository<HolidayEntity, Long> {

    @Query("SELECT h FROM HolidayEntity h JOIN h.country c WHERE c.id = :countryId")
    List<HolidayEntity> findByCountryId(Long countryId);

}

```

## src/main/java/com/nubo/operations/query/api/repository/InvestorAccountRepository.java

```java
package com.nubo.operations.query.api.repository;

import com.nubo.operations.query.api.models.entity.InvestorAccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface InvestorAccountRepository extends JpaRepository<InvestorAccountEntity, Long> {

    Optional<InvestorAccountEntity> findByAccountNumber(String accountNumber);

    Optional<InvestorAccountEntity> findFirstByAccountNumberAndInvestorDocumentNumberAndOriginTypeIdAndDepositoryIdOrderByIdAsc(
            String accountNumber,
            String documentNumber,
            Long originTypeId,
            String depositoryId
    );

    Optional<InvestorAccountEntity>
    findFirstByAccountNumberAndInvestorDocumentNumberNotAndDepositoryIdAndOriginTypeIdNot(
            String accountNumber,
            String documentNumber,
            String depositoryId,
            Long originTypeId
    );

    Optional<InvestorAccountEntity>
    findFirstByAccountNumberAndOriginTypeIdAndStatusId(String accountNumber, Long originTypeId, Long statusId);

}

```

## src/main/java/com/nubo/operations/query/api/repository/InvestorRepository.java

```java
package com.nubo.operations.query.api.repository;

import com.nubo.operations.query.api.models.entity.InvestorEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface InvestorRepository extends JpaRepository<InvestorEntity, Long> {

    @Query("""
                SELECT i FROM InvestorEntity i
                WHERE i.documentNumber = :documentNumber
                AND (:code IS NULL OR i.identificationType.code = :code)
            """)
    InvestorEntity findByDocumentNumberAndOptionalType(
            @Param("documentNumber") String documentNumber,
            @Param("code") String code
    );

}

```

## src/main/java/com/nubo/operations/query/api/repository/PackageCustodianDetailProjection.java

```java
package com.nubo.operations.query.api.repository;

import java.math.BigDecimal;
import java.time.LocalDate;

public interface PackageCustodianDetailProjection {

    Long getTradeId();

    LocalDate getRegistrationDate();

    LocalDate getClearingDate();

    LocalDate getReturnClearingDate();

    BigDecimal getPrice();

    BigDecimal getRate();

    Integer getFraction();

    String getSecuritiesAccount();

    BigDecimal getQuantity();

    BigDecimal getCommissionPercentage();

    BigDecimal getCommissionAmount();

    BigDecimal getValTaxAmount();

    BigDecimal getGrossValue();

    BigDecimal getNetTotal();

    BigDecimal getTransferValue();

    BigDecimal getReturnTurnoverValue();

    String getOperationTypeCode();

}

```

## src/main/java/com/nubo/operations/query/api/repository/PackageCustodianDetailTotalsProjection.java

```java
package com.nubo.operations.query.api.repository;

import java.math.BigDecimal;

public interface PackageCustodianDetailTotalsProjection {

    BigDecimal getTotalQuantity();

    BigDecimal getTotalGrossValue();

    BigDecimal getTotalCommission();

    BigDecimal getTotalTax();

    BigDecimal getTotalNet();

}

```

## src/main/java/com/nubo/operations/query/api/repository/PackageCustodianRepository.java

```java
package com.nubo.operations.query.api.repository;

import com.nubo.operations.query.api.models.entity.PackageCustodianEntity;
import com.nubo.operations.query.api.models.entity.PackageCustodianKey;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface PackageCustodianRepository extends JpaRepository<PackageCustodianEntity, PackageCustodianKey>,
        JpaSpecificationExecutor<PackageCustodianEntity> {

    @Query(value = """
            SELECT
                t."MATCH_ID"                 AS tradeId,
                t."MATCH_DATE"               AS registrationDate,
                t."CLEARING_DATE"            AS clearingDate,
                t."RETURN_CLEARING_DATE"     AS returnClearingDate,
                t."PRICE"                    AS price,
                t."REPO_RATE"                AS rate,
                s."FRACTION"                 AS fraction,
                COALESCE(ia."ACCOUNT_NUMBER", pa."ACCOUNT_NUMBER") AS securitiesAccount,
                s."FRACTION_QUANTITY"        AS quantity,
                s."COMMISSION_PERCENTAGE"    AS commissionPercentage,
                s."COMMISSION_AMOUNT"        AS commissionAmount,
                s."VAL_TAX_AMOUNT"           AS valTaxAmount,
                s."FRACTION_VOLUME"          AS grossValue,
                s."NET_AMOUNT"               AS netTotal,
                CASE
                    WHEN t."TYPE_ID" = 59 THEN s."OUTFLOW_TURNOVER_VALUE"
                    WHEN t."MARKET_ID" = '1' THEN s."SETTLEMENT_AMOUNT"
                    WHEN t."MARKET_ID" = '2' THEN s."DELIVERY_VERSUS_PAYMENT_VALUE"
                    ELSE NULL
                END                          AS transferValue,
                s."RETURN_TURNOVER_VALUE"    AS returnTurnoverValue,
                ty."DESCRIPTION"             AS operationTypeCode
            FROM "NUANBODB"."PACKAGE_DETAIL" pd
            JOIN "NUANBODB"."TRADE" t
                ON t."TRADE_ID" = pd."TRADE_ID"
            JOIN "NUANBODB"."SETTLEMENT" s
                ON s."TRADE_ID" = pd."TRADE_ID"
                AND s."SIDE_ID" = pd."SIDE_ID"
                AND s."FRACTION" = pd."FRACTION"
            LEFT JOIN "NUANBODB"."INVESTOR_ACCOUNT" ia
                ON ia."INVESTOR_ACCOUNT_ID" = s."INVESTOR_ACCOUNT_ID"
            LEFT JOIN "NUANBODB"."PARTICIPANT_ACCOUNT" pa
                ON pa."PARTICIPANT_ACCOUNT_ID" = s."PARTICIPANT_ACCOUNT_ID"
            LEFT JOIN "NUANBODB"."TYPE" ty
                ON ty."TYPE_ID" = t."TYPE_ID"
            WHERE pd."PACKAGE_CUSTODIAN_ID" = :packageCustodianId
              AND pd."PACKAGE_STATUS_ID" != 1074
            """,
            countQuery = """
            SELECT COUNT(*)
            FROM "NUANBODB"."PACKAGE_DETAIL" pd
            JOIN "NUANBODB"."TRADE" t ON t."TRADE_ID" = pd."TRADE_ID"
            JOIN "NUANBODB"."SETTLEMENT" s
                ON s."TRADE_ID" = pd."TRADE_ID"
                AND s."SIDE_ID" = pd."SIDE_ID"
                AND s."FRACTION" = pd."FRACTION"
            WHERE pd."PACKAGE_CUSTODIAN_ID" = :packageCustodianId
              AND pd."PACKAGE_STATUS_ID" != 1074
            """,
            nativeQuery = true)
    Page<PackageCustodianDetailProjection> findDetailByPackageCustodianId(
            @Param("packageCustodianId") Long packageCustodianId,
            Pageable pageable);

    @Query(value = """
            SELECT
                SUM(s."FRACTION_QUANTITY")   AS totalQuantity,
                SUM(s."FRACTION_VOLUME")     AS totalGrossValue,
                SUM(s."COMMISSION_AMOUNT")   AS totalCommission,
                SUM(s."VAL_TAX_AMOUNT")      AS totalTax,
                SUM(s."NET_AMOUNT")          AS totalNet
            FROM "NUANBODB"."PACKAGE_DETAIL" pd
            JOIN "NUANBODB"."SETTLEMENT" s
                ON s."TRADE_ID" = pd."TRADE_ID"
                AND s."SIDE_ID" = pd."SIDE_ID"
                AND s."FRACTION" = pd."FRACTION"
            WHERE pd."PACKAGE_CUSTODIAN_ID" = :packageCustodianId
              AND pd."PACKAGE_STATUS_ID" != 1074
            """,
            nativeQuery = true)
    PackageCustodianDetailTotalsProjection findDetailTotalsByPackageCustodianId(
            @Param("packageCustodianId") Long packageCustodianId);

    Optional<PackageCustodianEntity> findFirstByPackageCustodianId(Long packageCustodianId);

}
```

## src/main/java/com/nubo/operations/query/api/repository/ParticipantAccountRepository.java

```java
package com.nubo.operations.query.api.repository;

import com.nubo.operations.query.api.models.entity.DepositoryEntity;
import com.nubo.operations.query.api.models.entity.ParticipantAccountEntity;
import com.nubo.operations.query.api.models.entity.ParticipantEntity;
import com.nubo.operations.query.api.models.entity.TypeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ParticipantAccountRepository extends JpaRepository<ParticipantAccountEntity, Long> {

    Optional<ParticipantAccountEntity> findByAccountNumber(String accountNumber);

    Optional<ParticipantAccountEntity> findFirstByAccountNumberAndParticipantAndOriginTypeAndDepository(String accountNumber, ParticipantEntity participant, TypeEntity originType, DepositoryEntity depositoryEntity);

    Optional<ParticipantAccountEntity>
    findFirstByAccountNumberAndParticipantNotAndDepositoryAndOriginTypeIdNot(
            String accountNumber,
            ParticipantEntity participant,
            DepositoryEntity depositoryEntity,
            Long originTypeId
    );

}

```

## src/main/java/com/nubo/operations/query/api/repository/ParticipantBankAccountRepository.java

```java
package com.nubo.operations.query.api.repository;

import com.nubo.operations.query.api.models.entity.ParticipantBankAccountEntity;
import com.nubo.operations.query.api.models.entity.TypeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParticipantBankAccountRepository extends JpaRepository<ParticipantBankAccountEntity, Long> {

    ParticipantBankAccountEntity findFirstByParticipantIdAndOriginTypeAndConceptTypeOrderByIdAsc(Long participantId, TypeEntity originType, TypeEntity conceptType);
}

```

## src/main/java/com/nubo/operations/query/api/repository/ParticipantRepository.java

```java
package com.nubo.operations.query.api.repository;

import com.nubo.operations.query.api.models.entity.ParticipantEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParticipantRepository extends JpaRepository<ParticipantEntity, Long> {
}

```

## src/main/java/com/nubo/operations/query/api/repository/SettlementCorrectionsRepository.java

```java
package com.nubo.operations.query.api.repository;

import com.nubo.operations.query.api.models.entity.SettlementCorrectionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface SettlementCorrectionsRepository extends JpaRepository<SettlementCorrectionEntity, Long>,
        JpaSpecificationExecutor<SettlementCorrectionEntity> {

}

```

## src/main/java/com/nubo/operations/query/api/repository/SettlementRepository.java

```java
package com.nubo.operations.query.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import com.nubo.operations.query.api.models.entity.SettlementEntity;
import com.nubo.operations.query.api.models.entity.SettlementKey;

public interface SettlementRepository extends JpaRepository<SettlementEntity, SettlementKey>,
        JpaSpecificationExecutor<SettlementEntity> {

    @Query("""
            SELECT s FROM SettlementEntity s
            JOIN s.trade t JOIN s.side si
            WHERE t.id  = :tradeId
                AND si.id = :sideId
            """)
    List<SettlementEntity> findByTradeIdAndSideId(Long tradeId, String sideId);

    @Query("""
            SELECT s FROM SettlementEntity s
            JOIN s.trade t JOIN s.side si
            WHERE t.id  = :tradeId
                AND (:sideId IS NULL OR si.id = :sideId)
            """)
    List<SettlementEntity> findByTradeIdAndOptionalSideId(Long tradeId, String sideId);

    List<SettlementEntity> findByTradeIdAndCustodianId(Long tradeId, Long custodianId);

    List<SettlementEntity> findByTradeId(Long tradeId);

}

```

## src/main/java/com/nubo/operations/query/api/repository/SideRepository.java

```java
package com.nubo.operations.query.api.repository;

import com.nubo.operations.query.api.models.entity.SideEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SideRepository extends JpaRepository<SideEntity, String> {
}

```

## src/main/java/com/nubo/operations/query/api/repository/StatusRepository.java

```java
package com.nubo.operations.query.api.repository;

import com.nubo.operations.query.api.models.entity.StatusEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StatusRepository extends JpaRepository<StatusEntity, Long> {

    Optional<StatusEntity> findByDescriptionIgnoreCaseAndCategoryIgnoreCase(String description, String category);

}
```

## src/main/java/com/nubo/operations/query/api/repository/TaxesRepository.java

```java
package com.nubo.operations.query.api.repository;

import com.nubo.operations.query.api.models.entity.TaxesEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface TaxesRepository extends JpaRepository<TaxesEntity, Long> {

    @Query("SELECT t FROM TaxesEntity t JOIN t.country c " +
            "WHERE c.id = :countryId AND t.code = :code")
    Optional<TaxesEntity> findByCountryIdAndCode(Long countryId, String code);

}

```

## src/main/java/com/nubo/operations/query/api/repository/TradeEquityRepository.java

```java
package com.nubo.operations.query.api.repository;

import com.nubo.operations.query.api.models.entity.TradeEquityEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TradeEquityRepository extends JpaRepository<TradeEquityEntity, Long> {
}

```

## src/main/java/com/nubo/operations/query/api/repository/TradeRepository.java

```java
package com.nubo.operations.query.api.repository;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import com.nubo.operations.query.api.models.dto.response.TradeSimulationOutDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import com.nubo.operations.query.api.models.entity.TradeEntity;
import org.springframework.data.repository.query.Param;

public interface TradeRepository extends JpaRepository<TradeEntity, Long>, JpaSpecificationExecutor<TradeEntity> {

    @Query("""
        SELECT trade.matchId
        FROM TradeEntity trade
        WHERE (:matchId IS NULL OR CAST(trade.matchId AS string) LIKE CONCAT(CAST(:matchId AS string), '%'))
          AND (:participantId IS NULL OR trade.participantBuy.id = :participantId OR trade.participantSell.id = :participantId)
          AND (:filterByStartMatchDate = false OR trade.matchDate >= :startMatchDate)
          AND (:filterByEndMatchDate = false OR trade.matchDate <= :endMatchDate)
          AND (:filterByStartClearingDate = false OR trade.clearingDate >= :startClearingDate)
          AND (:filterByEndClearingDate = false OR trade.clearingDate <= :endClearingDate)
          AND (:filterByTypeIds = false OR trade.type.id IN :typeIds)
        """)
    Page<Long> findAllMatchIds(
            @Param("matchId") Long matchId,
            @Param("participantId") Long participantId,
            @Param("typeIds") Set<Long> typeIds,
            @Param("filterByTypeIds") boolean filterByTypeIds,
            @Param("startMatchDate") LocalDate startMatchDate,
            @Param("filterByStartMatchDate") boolean filterByStartMatchDate,
            @Param("endMatchDate") LocalDate endMatchDate,
            @Param("filterByEndMatchDate") boolean filterByEndMatchDate,
            @Param("startClearingDate") LocalDate startClearingDate,
            @Param("filterByStartClearingDate") boolean filterByStartClearingDate,
            @Param("endClearingDate") LocalDate endClearingDate,
            @Param("filterByEndClearingDate") boolean filterByEndClearingDate,
            Pageable pageable
    );

    @Query("""
            SELECT DISTINCT t FROM TradeEntity t
            LEFT JOIN SettlementEntity s ON s.trade.id = t.id
            WHERE t.id = :tradeId
            AND (:participantId IS NULL
                OR t.participantSell.id = :participantId
                OR t.participantBuy.id = :participantId
                OR s.custodian.id = :participantId)
            """)
    Optional<TradeEntity> findByIdAndOptionalParticipantId(Long tradeId, Long participantId);

    Optional<TradeEntity> findByMatchDateAndMatchId(LocalDate matchDate, Long matchId);

    @Query("""
            SELECT new com.nubo.operations.query.api.models.dto.response.TradeSimulationOutDto(
                t.id,
                t.matchDate,
                t.matchId,
                t.buyStatus.id,
                t.sellStatus.id
            )
            FROM TradeEntity t
            WHERE t.lastModifyDate >= :fromDateTime
              AND t.buyStatus.id = :statusId
              AND t.sellStatus.id = :statusId
            """)
    List<TradeSimulationOutDto> findSimulationTradesByMatchDateAndStatusId(
            @Param("fromDateTime") OffsetDateTime fromDateTime,
            @Param("statusId") Long statusId);

}

```

## src/main/java/com/nubo/operations/query/api/repository/TypeRepository.java

```java
package com.nubo.operations.query.api.repository;

import com.nubo.operations.query.api.models.entity.TypeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TypeRepository extends JpaRepository<TypeEntity, Long> {

    Optional<TypeEntity> findByCategoryIgnoreCaseAndDescriptionIgnoreCase(String category, String description);
}

```

## src/main/java/com/nubo/operations/query/api/repository/UserNuboRepository.java

```java
package com.nubo.operations.query.api.repository;

import com.nubo.operations.query.api.models.entity.UserNuboEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserNuboRepository extends JpaRepository<UserNuboEntity, Long> {

    @Query("""
            SELECT u FROM UserNuboEntity u
            WHERE u.userName = :userName
            """)
    Optional<UserNuboEntity> findByUserName(String userName);

}

```

## src/main/java/com/nubo/operations/query/api/service/AllTradeService.java

```java
package com.nubo.operations.query.api.service;

import com.nubo.operations.query.api.models.dto.response.AllTradeOutDto;
import com.nubo.operations.query.api.models.dto.response.CalculationTotalAmountOutDto;

public interface AllTradeService {

    AllTradeOutDto findAllByTradeId(Long tradeId);

    CalculationTotalAmountOutDto calculationTotalAmountByTradeAndSide(Long tradeId, String sideId);

}

```

## src/main/java/com/nubo/operations/query/api/service/AssignmentClosureService.java

```java
package com.nubo.operations.query.api.service;

import java.util.List;

import com.nubo.operations.query.api.models.dto.request.AssignmentClosureInDto;
import com.nubo.operations.query.api.models.dto.response.AssignmentClosureOutDto;

public interface AssignmentClosureService {

    List<AssignmentClosureOutDto> searchBySide(List<AssignmentClosureInDto> assignmentClosureInDtoList);

}

```

## src/main/java/com/nubo/operations/query/api/service/CalculationCountedService.java

```java
package com.nubo.operations.query.api.service;

import com.nubo.operations.query.api.models.dto.request.CalculationInDto;
import com.nubo.operations.query.api.models.dto.request.CalculationIvaInDto;
import com.nubo.operations.query.api.models.dto.response.CalculationOutDto;
import com.nubo.operations.query.api.models.enums.AccountSourceTypeEnum;

public interface CalculationCountedService {

    CalculationOutDto calculationSettlementWithIva(Long tradeId, CalculationIvaInDto calculationIvaInDto);

    CalculationOutDto calculationSettlementByCountryId(Long tradeId, Long countryId, CalculationInDto calculationInDto,
            String accountNumber, AccountSourceTypeEnum accountSourceType);

}

```

## src/main/java/com/nubo/operations/query/api/service/PackageCustodianService.java

```java
package com.nubo.operations.query.api.service;

import com.nubo.operations.query.api.models.domain.PackageCustodianParams;
import com.nubo.operations.query.api.models.dto.response.InvestorAccountOutDto;
import com.nubo.operations.query.api.models.dto.response.PackageCustodianDetailResponseOutDto;
import com.nubo.operations.query.api.models.dto.response.PackageCustodianOutDto;
import com.nubo.operations.query.api.models.dto.response.PageResponseOutDto;
import org.springframework.data.domain.Pageable;

public interface PackageCustodianService {

    PageResponseOutDto<PackageCustodianOutDto> findAllPackageCustodian(PackageCustodianParams packageCustodianParams);

    PackageCustodianDetailResponseOutDto findPackageCustodianDetail(
            Long packageCustodianId, Pageable pageable);

    InvestorAccountOutDto validateAccountCustodian(String accountNumber, Long packageCustodianId);

}

```

## src/main/java/com/nubo/operations/query/api/service/SettlementCorrectionService.java

```java
package com.nubo.operations.query.api.service;

import com.nubo.operations.query.api.models.domain.SettlementParams;
import com.nubo.operations.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.query.api.models.dto.response.ReassignmentCorrectionOutDto;

public interface SettlementCorrectionService {

    PageResponseOutDto<ReassignmentCorrectionOutDto> findAllCorrectionsReassignment(SettlementParams settlementParams);

}

```

## src/main/java/com/nubo/operations/query/api/service/SettlementRedisService.java

```java
package com.nubo.operations.query.api.service;

import org.springframework.data.domain.Pageable;

import com.nubo.operations.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.query.api.models.dto.response.SettlementOutDto;

public interface SettlementRedisService {

    PageResponseOutDto<SettlementOutDto> findAllSettlementsDynamic(
            Pageable pageable,
            String fieldName,
            String fieldValue,
            String operation,
            Long tradeId,
            String sideId,
            String investorDocumentNumber);

    PageResponseOutDto<SettlementOutDto> findAllSettlementsRedisOnly(
            Pageable pageable,
            String fieldName,
            String fieldValue,
            String operation,
            Long tradeId,
            String sideId,
            String investorDocumentNumber);
}

```

## src/main/java/com/nubo/operations/query/api/service/SettlementService.java

```java
package com.nubo.operations.query.api.service;

import com.nubo.operations.query.api.models.dto.response.SettlementSearchOutDto;
import org.springframework.data.domain.Pageable;

import com.nubo.operations.query.api.models.domain.SettlementParams;
import com.nubo.operations.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.query.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.query.api.models.entity.SettlementKey;

public interface SettlementService {

    PageResponseOutDto<SettlementOutDto> findAllSettlements(SettlementParams settlementParams);

    PageResponseOutDto<SettlementOutDto> findAllSettlementsDynamic(
            Pageable pageable,
            Long tradeId,
            String sideId,
            String investorDocumentNumber,
            String fieldName,
            String fieldValue,
            String operation);

    SettlementOutDto findSettlementById(SettlementKey settlementKey);

    PageResponseOutDto<SettlementSearchOutDto> findAllSettlementsCustodyView(SettlementParams settlementParams);

}

```

## src/main/java/com/nubo/operations/query/api/service/TestSimulationService.java

```java
package com.nubo.operations.query.api.service;

import com.nubo.operations.query.api.models.dto.response.TradeSimulationOutDto;

import java.util.List;

public interface TestSimulationService {

    List<TradeSimulationOutDto> findTodayRegisteredTrades();

}
```

## src/main/java/com/nubo/operations/query/api/service/TradeEquityService.java

```java
package com.nubo.operations.query.api.service;

import com.nubo.operations.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.query.api.models.dto.response.TradeEquityOutDto;
import org.springframework.data.domain.Pageable;

public interface TradeEquityService {

    PageResponseOutDto<TradeEquityOutDto> findAllTradeEquity(Pageable pageable);

    PageResponseOutDto<TradeEquityOutDto> findAllTradeEquity(int page, int size, String sort, String order, boolean all);

    TradeEquityOutDto findTradeEquityById(Long tradeId);
}

```

## src/main/java/com/nubo/operations/query/api/service/TradeRedisService.java

```java
package com.nubo.operations.query.api.service;

import org.springframework.data.domain.Pageable;

import com.nubo.operations.query.api.models.domain.DynamicFilter;
import com.nubo.operations.query.api.models.domain.TradeParams;
import com.nubo.operations.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.query.api.models.dto.response.TradeOutDto;

public interface TradeRedisService {

    PageResponseOutDto<TradeOutDto> findAllTradesDynamic(
            Pageable pageable,
            DynamicFilter dynamicFilter,
            TradeParams tradeParams);


    PageResponseOutDto<TradeOutDto> findAllTradesRedisOnly(
            Pageable pageable,
            DynamicFilter dynamicFilter,
            TradeParams tradeParams);
}

```

## src/main/java/com/nubo/operations/query/api/service/TradeService.java

```java
package com.nubo.operations.query.api.service;

import com.nubo.operations.query.api.models.dto.response.TradeCustodianOutDto;
import org.springframework.data.domain.Pageable;

import com.nubo.operations.query.api.models.domain.DynamicFilter;
import com.nubo.operations.query.api.models.domain.TradeParams;
import com.nubo.operations.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.query.api.models.dto.response.TradeOutDto;

import java.time.LocalDate;

public interface TradeService {

    PageResponseOutDto<TradeOutDto> findAllTrades(Pageable pageable, TradeParams tradeParams, Boolean all);

    PageResponseOutDto<Long> findAllTradeIds(Pageable pageable, Long matchId, LocalDate startMatchDate,
                                             LocalDate endMatchDate,
                                             LocalDate startClearingDate,
                                             LocalDate endClearingDate, Boolean onlyOperation);

    PageResponseOutDto<Long> findAllCustodianTradeIds(Pageable pageable, Long matchId, LocalDate startMatchDate,
                                                      LocalDate endMatchDate,
                                                      LocalDate startClearingDate,
                                                      LocalDate endClearingDate, Boolean onlyOperation);

    TradeOutDto findTradeById(Long tradeId);

    PageResponseOutDto<TradeOutDto> findAllTradesDynamic(
            Pageable pageable,
            DynamicFilter dynamicFilter,
            TradeParams tradeParams);

    long countAllTrades();

    PageResponseOutDto<TradeCustodianOutDto> findCustodianTrades(
            Pageable pageable,
            TradeParams params,
            Boolean all);

}

```

## src/main/java/com/nubo/operations/query/api/service/ValidateCountedOperationService.java

```java
package com.nubo.operations.query.api.service;

import com.nubo.operations.query.api.models.dto.response.CorrectionDropdownDataDto;
import com.nubo.operations.query.api.models.dto.response.TradeValidationOutDto;

public interface ValidateCountedOperationService {

    TradeValidationOutDto validateAllowedTradeAssignment(Long tradeId, String sideId);

    CorrectionDropdownDataDto getCorrectionDropdownData(Long tradeId, String sideId);

}

```

## src/main/java/com/nubo/operations/query/api/service/impl/AllTradeServiceImpl.java

```java
package com.nubo.operations.query.api.service.impl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nubo.operations.query.api.application.properties.PropertiesContext;
import com.nubo.operations.query.api.application.util.ApplicationUtils;
import com.nubo.operations.query.api.exception.ServiceException;
import com.nubo.operations.query.api.exception.error.ErrorCode;
import com.nubo.operations.query.api.helpers.MapperUtil;
import com.nubo.operations.query.api.models.domain.UserNuboData;
import com.nubo.operations.query.api.models.dto.response.AllTradeOutDto;
import com.nubo.operations.query.api.models.dto.response.CalculationTotalAmountOutDto;
import com.nubo.operations.query.api.models.entity.ParticipantEntity;
import com.nubo.operations.query.api.models.entity.SettlementEntity;
import com.nubo.operations.query.api.models.entity.TradeEntity;
import com.nubo.operations.query.api.models.entity.TradeEquityEntity;
import com.nubo.operations.query.api.models.enums.SideEnum;
import com.nubo.operations.query.api.models.enums.UserTypeEnum;
import com.nubo.operations.query.api.models.enums.VersionApiEnum;
import com.nubo.operations.query.api.repository.SettlementRepository;
import com.nubo.operations.query.api.repository.TradeEquityRepository;
import com.nubo.operations.query.api.repository.TradeRepository;
import com.nubo.operations.query.api.service.AllTradeService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class AllTradeServiceImpl implements AllTradeService {

    private final TradeRepository tradeRepository;
    private final TradeEquityRepository tradeEquityRepository;
    private final SettlementRepository settlementRepository;

    @Override
    @Transactional
    public AllTradeOutDto findAllByTradeId(Long tradeId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllByTradeIdV1(tradeId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private AllTradeOutDto findAllByTradeIdV1(Long tradeId) {
        log.info("Start method findAllByTradeIdV1, tradeId -> {}", tradeId);

        UserNuboData userNuboData = ApplicationUtils.getUserNuboData();
        Long participantId = UserTypeEnum.EXTERNAL.equals(userNuboData.userTypeEnum())
                ? userNuboData.participantId()
                : null;
        TradeEntity tradeEntity = validateTradeAndOptionalParticipant(tradeId, participantId);
        TradeEquityEntity tradeEquityEntity = validateTradeEquity(tradeId);

        SideEnum sideEnum = SideEnum.UNKNOWN;
        List<SettlementEntity> settlementEntityList = new ArrayList<>();
        if (userNuboData.isParticipantCustodian()) {
            settlementEntityList = settlementRepository.findByTradeIdAndCustodianId(tradeId,
                    userNuboData.participantId());
            sideEnum = getSideIdBySettlementCustodian(settlementEntityList, userNuboData);
        } else {
            sideEnum = getSideIdByTradeParticipant(tradeEntity, userNuboData);
            settlementEntityList = findSettlementAndOptionalSide(tradeId, sideEnum);
        }

        AllTradeOutDto allTradeOutDto = MapperUtil.tradeEntityToAllTradeOutDto(tradeEntity,
                tradeEquityEntity, settlementEntityList);

        boolean isBuyAndSell = (sideEnum == SideEnum.BUY_AND_SELL);
        allTradeOutDto.setCanSeeSideBuy(isBuyAndSell || sideEnum == SideEnum.BUY);
        allTradeOutDto.setCanSeeSideSell(isBuyAndSell || sideEnum == SideEnum.SELL);

        if (UserTypeEnum.EXTERNAL.equals(userNuboData.userTypeEnum())) {
            ParticipantEntity participantBuy = tradeEntity.getParticipantBuy();
            ParticipantEntity participantSell = tradeEntity.getParticipantSell();
            if (participantBuy == null || !Objects.equals(participantId, participantBuy.getId())) {
                allTradeOutDto.getTrade().setParticipantBuy(null);
                allTradeOutDto.getTrade().setEnteringFirmBuy(null);
                allTradeOutDto.getTrade().setDepositoryBuy(null);
                allTradeOutDto.getTrade().setTraderBuy(null);
                allTradeOutDto.getTradeEquity().setDirectDepositorBuy(null);
                allTradeOutDto.getTradeEquity().setForeignBrokerBuy(null);
                allTradeOutDto.getTradeEquity().setReferenceBuy(null);
            }
            if (participantSell == null || !Objects.equals(participantId, participantSell.getId())) {
                allTradeOutDto.getTrade().setParticipantSell(null);
                allTradeOutDto.getTrade().setEnteringFirmSell(null);
                allTradeOutDto.getTrade().setDepositorySell(null);
                allTradeOutDto.getTrade().setTraderSell(null);
                allTradeOutDto.getTradeEquity().setDirectDepositorSell(null);
                allTradeOutDto.getTradeEquity().setForeignBrokerSell(null);
                allTradeOutDto.getTradeEquity().setReferenceSell(null);
            }
        }

        log.info("End method findAllByTradeIdV1");
        return allTradeOutDto;
    }

    @Override
    public CalculationTotalAmountOutDto calculationTotalAmountByTradeAndSide(Long tradeId, String sideId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return calculationTotalAmountByTradeAndSideV1(tradeId, sideId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private CalculationTotalAmountOutDto calculationTotalAmountByTradeAndSideV1(Long tradeId, String sideId) {
        log.info("Start method calculationTotalAmountByTradeAndSideV1, tradeId -> {}, sideId -> {}", tradeId, sideId);

        List<SettlementEntity> settlementEntityList = settlementRepository.findByTradeIdAndSideId(tradeId, sideId);

        BigDecimal netAmountTotal = BigDecimal.ZERO;
        BigDecimal transferValue = BigDecimal.ZERO;
        BigDecimal quantityTotal = BigDecimal.ZERO;
        BigDecimal commissionAmountTotal = BigDecimal.ZERO;
        BigDecimal valTaxAmountTotal = BigDecimal.ZERO;
        BigDecimal netOutFlowTotal = BigDecimal.ZERO;
        BigDecimal outFlowTurnoverValueTotal = BigDecimal.ZERO;
        BigDecimal returnTurnoverValueTotal = BigDecimal.ZERO;

        for (SettlementEntity settlementEntity : settlementEntityList) {
            netAmountTotal = netAmountTotal.add(validateBigDecimal(settlementEntity.getNetAmount()));
            transferValue = transferValue.add(validateBigDecimal(settlementEntity.getSettlementAmount()));
            quantityTotal = quantityTotal.add(validateBigDecimal(settlementEntity.getFractionQuantity()));
            commissionAmountTotal = commissionAmountTotal
                    .add(validateBigDecimal(settlementEntity.getCommissionAmount()));
            valTaxAmountTotal = valTaxAmountTotal.add(validateBigDecimal(settlementEntity.getValTaxAmount()));
            netOutFlowTotal = netOutFlowTotal.add(validateBigDecimal(settlementEntity.getNetOutFlowTotal()));
            outFlowTurnoverValueTotal = outFlowTurnoverValueTotal
                    .add(validateBigDecimal(settlementEntity.getOutFlowTurnoverValue()));
            returnTurnoverValueTotal = returnTurnoverValueTotal
                    .add(validateBigDecimal(settlementEntity.getReturnTurnoverValue()));
        }

        CalculationTotalAmountOutDto calculationTotalAmountOutDto = CalculationTotalAmountOutDto.builder()
                .quantityTotal(quantityTotal)
                .netAmountTotal(netAmountTotal)
                .transferValueTotal(transferValue)
                .commissionAmountTotal(commissionAmountTotal)
                .valTaxAmountTotal(valTaxAmountTotal)
                .netOutFlowTotal(netOutFlowTotal)
                .outFlowTurnoverValueTotal(outFlowTurnoverValueTotal)
                .returnTurnoverValueTotal(returnTurnoverValueTotal)
                .build();

        log.info("End method calculationTotalAmountByTradeAndSideV1");

        return calculationTotalAmountOutDto;
    }

    private BigDecimal validateBigDecimal(BigDecimal value) {
        return value == null ? BigDecimal.ZERO : value;
    }

    private TradeEquityEntity validateTradeEquity(Long tradeId) {
        if (tradeId == null) {
            throw new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        return tradeEquityRepository.findById(tradeId)
                .orElseGet(() -> TradeEquityEntity.builder().build());
    }

    private List<SettlementEntity> findSettlementAndOptionalSide(Long tradeId, SideEnum sideEnum) {
        log.debug("Settlements for tradeId -> {} and side -> {}", tradeId, sideEnum);
        String sideId = sideEnum != null ? sideEnum.getId() : null;
        return settlementRepository.findByTradeIdAndOptionalSideId(tradeId, sideId);
    }

    private TradeEntity validateTradeAndOptionalParticipant(Long tradeId, Long participantId) {
        if (tradeId == null) {
            throw new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        return tradeRepository.findByIdAndOptionalParticipantId(tradeId, participantId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private SideEnum getSideIdByTradeParticipant(TradeEntity tradeEntity, UserNuboData userNuboData) {
        if (tradeEntity == null) {
            throw new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        if (UserTypeEnum.INTERNAL.equals(userNuboData.userTypeEnum())) {
            return SideEnum.BUY_AND_SELL;
        }

        ParticipantEntity participantBuy = tradeEntity.getParticipantBuy();
        ParticipantEntity participantSell = tradeEntity.getParticipantSell();
        Long participantId = userNuboData.participantId();
        if (Objects.equals(participantBuy, participantSell)) {
            log.debug("Same participant for BUY and SELL, participantId -> {}", participantId);
            return SideEnum.BUY_AND_SELL;
        }
        if (participantBuy != null && Objects.equals(participantId, participantBuy.getId())) {
            log.debug("Participant BUY, participantId -> {}", participantId);
            return SideEnum.BUY;
        } else if (participantSell != null && Objects.equals(participantId, participantSell.getId())) {
            log.debug("Participant SELL, participantId -> {}", participantId);
            return SideEnum.SELL;
        } else {
            log.debug("Participant UNKNOWN, participantId -> {}", participantId);
            return SideEnum.UNKNOWN;
        }
    }

    private SideEnum getSideIdBySettlementCustodian(List<SettlementEntity> settlementEntityList,
            UserNuboData userNuboData) {
        if (settlementEntityList.isEmpty()) {
            return SideEnum.UNKNOWN;
        }

        boolean isBuy = settlementEntityList.stream()
                .anyMatch(s -> s.getSide() != null && SideEnum.BUY.getId().equals(s.getSide().getId()));

        boolean isSell = settlementEntityList.stream()
                .anyMatch(s -> s.getSide() != null && SideEnum.SELL.getId().equals(s.getSide().getId()));

        if (isBuy && isSell) {
            return SideEnum.BUY_AND_SELL;
        } else {
            return isBuy ? SideEnum.BUY : SideEnum.SELL;
        }
    }
}

```

## src/main/java/com/nubo/operations/query/api/service/impl/AssignmentClosureServiceImpl.java

```java
package com.nubo.operations.query.api.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.function.Function;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.nubo.operations.query.api.application.properties.PropertiesContext;
import com.nubo.operations.query.api.application.util.ApplicationUtils;
import com.nubo.operations.query.api.exception.ServiceException;
import com.nubo.operations.query.api.exception.error.ErrorCode;
import com.nubo.operations.query.api.helpers.MapperUtil;
import com.nubo.operations.query.api.models.domain.UserNuboData;
import com.nubo.operations.query.api.models.dto.request.AssignmentClosureInDto;
import com.nubo.operations.query.api.models.dto.response.AssignmentClosureOutDto;
import com.nubo.operations.query.api.models.entity.ParticipantEntity;
import com.nubo.operations.query.api.models.entity.SideEntity;
import com.nubo.operations.query.api.models.entity.TradeEntity;
import com.nubo.operations.query.api.models.enums.SideEnum;
import com.nubo.operations.query.api.models.enums.UserTypeEnum;
import com.nubo.operations.query.api.models.enums.VersionApiEnum;
import com.nubo.operations.query.api.repository.SideRepository;
import com.nubo.operations.query.api.repository.TradeRepository;
import com.nubo.operations.query.api.service.AssignmentClosureService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class AssignmentClosureServiceImpl implements AssignmentClosureService {

    private final TradeRepository tradeRepository;
    private final SideRepository sideRepository;

    @Override
    public List<AssignmentClosureOutDto> searchBySide(List<AssignmentClosureInDto> assignmentClosureInDtoList) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return searchBySideV1(assignmentClosureInDtoList);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<AssignmentClosureOutDto> searchBySideV1(List<AssignmentClosureInDto> assignmentClosureInDtoList) {
        log.info("Start method searchBySideV1, size -> {}", assignmentClosureInDtoList.size());

        List<Long> tradeIdList = assignmentClosureInDtoList.stream()
                .filter(Objects::nonNull)
                .filter(assignmentClosure -> assignmentClosure.getTradeId() != null)
                .map(AssignmentClosureInDto::getTradeId)
                .collect(Collectors.collectingAndThen(
                        Collectors.toMap(Function.identity(), Function.identity(),
                                (existing, replacement) -> {
                                    String message = String.format("Duplicate tradeId '%s' found in request body",
                                            existing);
                                    throw new ServiceException(ErrorCode.DUPLICATE_TRADE_ID, message,
                                            HttpStatus.BAD_REQUEST);
                                }),
                        map -> new ArrayList<>(map.keySet())));

        UserNuboData userNuboData = ApplicationUtils.getUserNuboData();
        Long participantIdByUser = UserTypeEnum.EXTERNAL.equals(userNuboData.userTypeEnum())
                ? userNuboData.participantId()
                : null;
        List<TradeEntity> tradeEntityList = validateTrades(tradeIdList);
        SideEntity sideEntityBuy = validateSide(SideEnum.BUY.getId());
        SideEntity sideEntitySell = validateSide(SideEnum.SELL.getId());

        List<AssignmentClosureOutDto> assignmentClosureOutDtoList = new ArrayList<>();
        for (TradeEntity tradeEntity : tradeEntityList) {
            ParticipantEntity participantEntityBuy = tradeEntity.getParticipantBuy();
            ParticipantEntity participantEntitySell = tradeEntity.getParticipantSell();

            if (participantIdByUser == null) {
                assignmentClosureOutDtoList
                        .add(MapperUtil.buildAssignmentClosureOutDto(tradeEntity, participantEntityBuy, sideEntityBuy));
                assignmentClosureOutDtoList
                        .add(MapperUtil.buildAssignmentClosureOutDto(tradeEntity, participantEntitySell,
                                sideEntitySell));
            }
            if (Objects.equals(participantIdByUser, participantEntityBuy.getId())) {
                assignmentClosureOutDtoList
                        .add(MapperUtil.buildAssignmentClosureOutDto(tradeEntity, participantEntityBuy, sideEntityBuy));
            }
            if (Objects.equals(participantIdByUser, participantEntitySell.getId())) {
                assignmentClosureOutDtoList
                        .add(MapperUtil.buildAssignmentClosureOutDto(tradeEntity, participantEntitySell,
                                sideEntitySell));
            }
        }

        log.info("End method searchBySideV1, size -> {}", assignmentClosureOutDtoList.size());
        return assignmentClosureOutDtoList;
    }

    private List<TradeEntity> validateTrades(List<Long> tradeIdList) {
        if (tradeIdList.isEmpty()) {
            throw new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        List<TradeEntity> tradeEntityList = tradeRepository.findAllById(tradeIdList);
        if (tradeEntityList.size() != tradeIdList.size()) {
            throw new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        return tradeEntityList;
    }

    private SideEntity validateSide(String sideId) {
        if (sideId == null) {
            throw new ServiceException(ErrorCode.SIDE_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        return sideRepository.findById(sideId)
                .orElseThrow(() -> new ServiceException(ErrorCode.SIDE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

}

```

## src/main/java/com/nubo/operations/query/api/service/impl/CalculationCountedServiceImpl.java

```java
package com.nubo.operations.query.api.service.impl;

import java.math.BigDecimal;
import java.util.Objects;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.nubo.operations.query.api.application.properties.PropertiesContext;
import com.nubo.operations.query.api.client.operation.calculation.models.dto.request.SettleAccountsInDto;
import com.nubo.operations.query.api.client.operation.calculation.models.dto.response.SettleAccountsOutDto;
import com.nubo.operations.query.api.client.operation.calculation.service.OperationCalculationClient;
import com.nubo.operations.query.api.exception.ServiceException;
import com.nubo.operations.query.api.exception.error.ErrorCode;
import com.nubo.operations.query.api.helpers.MapperUtil;
import com.nubo.operations.query.api.models.dto.request.CalculationInDto;
import com.nubo.operations.query.api.models.dto.request.CalculationIvaInDto;
import com.nubo.operations.query.api.models.dto.response.CalculationOutDto;
import com.nubo.operations.query.api.models.entity.SideEntity;
import com.nubo.operations.query.api.models.entity.TaxesEntity;
import com.nubo.operations.query.api.models.entity.TradeEntity;
import com.nubo.operations.query.api.models.enums.AccountSourceTypeEnum;
import com.nubo.operations.query.api.models.enums.TaxesEnum;
import com.nubo.operations.query.api.models.enums.TypeEnum;
import com.nubo.operations.query.api.models.enums.VersionApiEnum;
import com.nubo.operations.query.api.repository.InvestorAccountRepository;
import com.nubo.operations.query.api.repository.ParticipantAccountRepository;
import com.nubo.operations.query.api.repository.SideRepository;
import com.nubo.operations.query.api.repository.TaxesRepository;
import com.nubo.operations.query.api.repository.TradeRepository;
import com.nubo.operations.query.api.service.CalculationCountedService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class CalculationCountedServiceImpl implements CalculationCountedService {

    private final TradeRepository tradeRepository;
    private final TaxesRepository taxesRepository;
    private final SideRepository sideRepository;
    private final OperationCalculationClient operationCalculationClient;
    private final InvestorAccountRepository investorAccountRepository;
    private final ParticipantAccountRepository participantAccountRepository;

    @Override
    public CalculationOutDto calculationSettlementWithIva(Long tradeId, CalculationIvaInDto calculationIvaInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return calculationSettlementWithIvaV1(tradeId, calculationIvaInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private CalculationOutDto calculationSettlementWithIvaV1(Long tradeId, CalculationIvaInDto calculationIvaInDto) {
        log.info("Start method calculationSettlementWithIvaV1, calculationIvaInDto -> {}", calculationIvaInDto);

        TradeEntity tradeEntity = validateTrade(tradeId);
        SideEntity sideEntity = validateSide(calculationIvaInDto.getSideId());

        validateTypeOperation(tradeEntity);

        SettleAccountsInDto settleAccountsInDto = SettleAccountsInDto.builder()
                .quantity(calculationIvaInDto.getQuantity())
                .price(calculationIvaInDto.getPrice())
                .commission(calculationIvaInDto.getCommission())
                .valTax(calculationIvaInDto.getValTax())
                .sideId(sideEntity.getId())
                .build();

        SettleAccountsOutDto settleAccountsOutDto = operationCalculationClient.getSettleAccounts(settleAccountsInDto);

        CalculationOutDto calculationOutDto = MapperUtil.settleAccountsOutDtoToCalculationOutDto(settleAccountsOutDto);
        calculationOutDto.setCommissionPercentage(calculationIvaInDto.getCommission());
        calculationOutDto.setValTax(calculationIvaInDto.getValTax());

        log.info("End method calculationSettlementWithIvaV1, calculationOutDto -> {}", calculationOutDto);

        return calculationOutDto;
    }

    @Override
    public CalculationOutDto calculationSettlementByCountryId(Long tradeId, Long countryId,
            CalculationInDto calculationInDto, String accountNumber, AccountSourceTypeEnum accountSourceType) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return calculationSettlementByCountryIdV1(tradeId, countryId, calculationInDto, accountNumber, accountSourceType);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private CalculationOutDto calculationSettlementByCountryIdV1(Long tradeId, Long countryId,
            CalculationInDto calculationInDto, String accountNumber, AccountSourceTypeEnum accountSourceType) {
        log.info("Start method calculationSettlementByCountryIdV1, countryId -> {}, calculationInDto -> {}", countryId,
                calculationInDto);

        TradeEntity tradeEntity = validateTrade(tradeId);
        SideEntity sideEntity = validateSide(calculationInDto.getSideId());

        validateTypeOperation(tradeEntity);

        TaxesEntity taxesEntity = taxesRepository.findByCountryIdAndCode(countryId, TaxesEnum.IVA.getValue())
                .orElseThrow(() -> new ServiceException(ErrorCode.TAXES_NOT_FOUND, HttpStatus.NOT_FOUND));

        boolean taxExemp = resolveTaxExemp(accountNumber, accountSourceType);

        SettleAccountsInDto settleAccountsInDto = SettleAccountsInDto.builder()
                .quantity(calculationInDto.getQuantity())
                .price(calculationInDto.getPrice())
                .commission(calculationInDto.getCommission())
                .valTax(taxExemp ? BigDecimal.ZERO : taxesEntity.getValue())
                .sideId(sideEntity.getId())
                .typeId(tradeEntity.getType() == null ? null : tradeEntity.getType().getId())
                .forwardPrice(tradeEntity.getForwardPrice())
                .volume(tradeEntity.getVolume())
                .build();

        SettleAccountsOutDto settleAccountsOutDto = operationCalculationClient.getSettleAccounts(settleAccountsInDto);

        CalculationOutDto calculationOutDto = MapperUtil.settleAccountsOutDtoToCalculationOutDto(settleAccountsOutDto);
        calculationOutDto.setCommissionPercentage(calculationInDto.getCommission());
        calculationOutDto.setValTax(settleAccountsInDto.getValTax());

        log.info("End method calculationSettlementByCountryIdV1, calculationOutDto -> {}", calculationOutDto);

        return calculationOutDto;
    }

    /**
     * Resuelve {@code TAX_EXEMP} desde {@code PARTICIPANT_ACCOUNT} o
     * {@code INVESTOR_ACCOUNT} según el enum recibido (Regla 4 — ver
     * {@code plans/plan.md}).
     */
    private boolean resolveTaxExemp(String accountNumber, AccountSourceTypeEnum accountSourceType) {
        if (accountNumber == null || accountSourceType == null) {
            return false;
        }
        Boolean taxExemp = switch (accountSourceType) {
            case PARTICIPANT_ACCOUNT -> participantAccountRepository.findByAccountNumber(accountNumber)
                    .map(pa -> pa.getTaxExemp()).orElse(false);
            case INVESTOR_ACCOUNT -> investorAccountRepository.findByAccountNumber(accountNumber)
                    .map(ia -> ia.getTaxExemp()).orElse(false);
        };
        return Boolean.TRUE.equals(taxExemp);
    }

    private SideEntity validateSide(String sideId) {
        if (sideId == null) {
            throw new ServiceException(ErrorCode.SIDE_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        return sideRepository.findById(sideId)
                .orElseThrow(() -> new ServiceException(ErrorCode.SIDE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private TradeEntity validateTrade(Long tradeId) {
        if (tradeId == null) {
            throw new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        return tradeRepository.findById(tradeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private void validateTypeOperation(TradeEntity tradeEntity) {
        if (!TypeEnum.COUNTED_OPERATION.getId().equals(tradeEntity.getType().getId())
                && !TypeEnum.REPO_OPERATION.getId().equals(tradeEntity.getType().getId())) {
            throw new ServiceException(ErrorCode.TYPE_COUNTED_OR_REPO_OPERATION_REQUIRED, HttpStatus.BAD_REQUEST);
        }
    }

}

```

## src/main/java/com/nubo/operations/query/api/service/impl/PackageCustodianServiceImpl.java

```java
package com.nubo.operations.query.api.service.impl;

import java.math.BigDecimal;
import java.util.Collections;
import java.util.List;
import java.util.Objects;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.nubo.operations.query.api.application.properties.PropertiesContext;
import com.nubo.operations.query.api.application.util.ApplicationUtils;
import com.nubo.operations.query.api.exception.ServiceException;
import com.nubo.operations.query.api.exception.error.ErrorCode;
import com.nubo.operations.query.api.helpers.MapperPageUtil;
import com.nubo.operations.query.api.helpers.MapperUtil;
import com.nubo.operations.query.api.helpers.PackageCustodianMapper;
import com.nubo.operations.query.api.helpers.PackageCustodianSpecificationBuilder;
import com.nubo.operations.query.api.helpers.PackageCustodianSpecificationFactory;
import com.nubo.operations.query.api.models.domain.PackageCustodianParams;
import com.nubo.operations.query.api.models.domain.UserNuboData;
import com.nubo.operations.query.api.models.dto.response.InvestorAccountOutDto;
import com.nubo.operations.query.api.models.dto.response.PackageCustodianDetailOutDto;
import com.nubo.operations.query.api.models.dto.response.PackageCustodianDetailResponseOutDto;
import com.nubo.operations.query.api.models.dto.response.PackageCustodianDetailTotalsOutDto;
import com.nubo.operations.query.api.models.dto.response.PackageCustodianOutDto;
import com.nubo.operations.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.query.api.models.entity.InvestorAccountEntity;
import com.nubo.operations.query.api.models.entity.PackageCustodianEntity;
import com.nubo.operations.query.api.models.enums.CountryCodeEnum;
import com.nubo.operations.query.api.models.enums.StatusEnum;
import com.nubo.operations.query.api.models.enums.UserTypeEnum;
import com.nubo.operations.query.api.models.enums.VersionApiEnum;
import com.nubo.operations.query.api.repository.InvestorAccountRepository;
import com.nubo.operations.query.api.repository.PackageCustodianDetailProjection;
import com.nubo.operations.query.api.repository.PackageCustodianDetailTotalsProjection;
import com.nubo.operations.query.api.repository.PackageCustodianRepository;
import com.nubo.operations.query.api.service.PackageCustodianService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class PackageCustodianServiceImpl implements PackageCustodianService {

    private final PackageCustodianRepository packageCustodianRepository;
    private final InvestorAccountRepository investorAccountRepository;

    @Override
    public PageResponseOutDto<PackageCustodianOutDto> findAllPackageCustodian(
            PackageCustodianParams packageCustodianParams) {
        if (Objects.requireNonNull(
                VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllPackageCustodianV1(packageCustodianParams);
        }
        throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
    }

    private PageResponseOutDto<PackageCustodianOutDto> findAllPackageCustodianV1(
            PackageCustodianParams packageCustodianParams) {

        log.info("Start findAllPackageCustodianV1, packageCustodianParams -> {}", packageCustodianParams);
        UserNuboData userNuboData = ApplicationUtils.getUserNuboData();
        Sort sortObj = Sort.by(
                packageCustodianParams.order().equalsIgnoreCase("DESC")
                        ? Sort.Direction.DESC
                        : Sort.Direction.ASC,
                "clearingDate");

        if (UserTypeEnum.EXTERNAL.equals(userNuboData.userTypeEnum())) {
            if (userNuboData.participantId() == null) {
                throw new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, HttpStatus.BAD_REQUEST);
            }
            // validate country, col, peru
            if (!CountryCodeEnum.isAllowedColombiaOrPeru(userNuboData.participantCountryCode())) {
                // País no permitido → devolver lista vacía
                return MapperPageUtil.pageToPageResponseOutDto(
                        Collections.emptyList(),
                        0,
                        0,
                        0);
            }
        }

        // Fix seguridad (HU-14111): nunca confiar en custodianId/participantId del
        // request para usuarios EXTERNAL. Ver justificación completa en hilo del PR.
        Long safeCustodianId;
        Long safeParticipantId;

        if (UserTypeEnum.INTERNAL.equals(userNuboData.userTypeEnum())) {
            safeCustodianId = packageCustodianParams.custodianId();
            safeParticipantId = packageCustodianParams.participantId();
        } else if (userNuboData.isParticipantCustodian()) {
            safeCustodianId = userNuboData.participantId();
            safeParticipantId = packageCustodianParams.participantId();
        } else {
            safeCustodianId = packageCustodianParams.custodianId();
            safeParticipantId = userNuboData.participantId();
        }

        if (Boolean.TRUE.equals(packageCustodianParams.all())) {
            Specification<PackageCustodianEntity> specification = PackageCustodianSpecificationFactory
                    .createStandardFilter(
                            packageCustodianParams.clearingDate(),
                            packageCustodianParams.packageNumber(),
                            packageCustodianParams.securityTittleId(),
                            safeCustodianId,
                            safeParticipantId,
                            packageCustodianParams.operationTypeId(),
                            packageCustodianParams.registrationDateFrom(),
                            packageCustodianParams.statusId(),
                            packageCustodianParams.identificationTypeId(),
                            packageCustodianParams.investorDocumentNumber(),
                            packageCustodianParams.folio());

            List<PackageCustodianEntity> packageCustodianEntityList = packageCustodianRepository.findAll(specification,
                    sortObj);
            List<PackageCustodianOutDto> content = packageCustodianEntityList.stream()
                    .map(PackageCustodianMapper::toDto)
                    .toList();
            PageResponseOutDto<PackageCustodianOutDto> response = MapperPageUtil.pageToPageResponseOutDto(
                    content,
                    0,
                    content.size(),
                    content.size());

            log.info("End findAllPackageCustodianV1");
            return response;
        }

        Pageable pageable = PageRequest.of(packageCustodianParams.page(), packageCustodianParams.size(), sortObj);
        Specification<PackageCustodianEntity> specification = PackageCustodianSpecificationFactory.createStandardFilter(
                packageCustodianParams.clearingDate(),
                packageCustodianParams.packageNumber(),
                packageCustodianParams.securityTittleId(),
                safeCustodianId,
                safeParticipantId,
                packageCustodianParams.operationTypeId(),
                packageCustodianParams.registrationDateFrom(),
                packageCustodianParams.statusId(),
                packageCustodianParams.identificationTypeId(),
                packageCustodianParams.investorDocumentNumber(),
                packageCustodianParams.folio());

        Page<PackageCustodianEntity> packageCustodianEntityPage = packageCustodianRepository.findAll(specification,
                pageable);

        List<PackageCustodianOutDto> content = packageCustodianEntityPage.getContent().stream()
                .map(PackageCustodianMapper::toDto)
                .toList();

        PageResponseOutDto<PackageCustodianOutDto> response = MapperPageUtil.pageToPageResponseOutDto(content,
                packageCustodianEntityPage);

        log.info("End findAllPackageCustodianV1");

        return response;
    }

    @Override
    public PackageCustodianDetailResponseOutDto findPackageCustodianDetail(
            Long packageCustodianId, Pageable pageable) {
        if (Objects.requireNonNull(
                VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findPackageCustodianDetailV1(packageCustodianId, pageable);
        }
        throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
    }

    private PackageCustodianDetailResponseOutDto findPackageCustodianDetailV1(
            Long packageCustodianId, Pageable pageable) {

        log.info("Start findPackageCustodianDetailV1, packageCustodianId -> {}", packageCustodianId);

        if (packageCustodianId == null) {
            throw new ServiceException(ErrorCode.NOT_FOUND, HttpStatus.NOT_FOUND);
        }

        UserNuboData userNuboData = ApplicationUtils.getUserNuboData();
        PackageCustodianEntity headerEntity = validatePackageCustodianAccess(packageCustodianId, userNuboData);

        Page<PackageCustodianDetailProjection> projectionPage = packageCustodianRepository
                .findDetailByPackageCustodianId(headerEntity.getPackageCustodianId(), pageable);

        List<PackageCustodianDetailOutDto> content = projectionPage.getContent().stream()
                .map(this::toDetailOutDto)
                .toList();

        // Totales: se calculan con SUM() sobre TODAS las puntas del paquete,
        // sin paginación (no se leen de PACKAGE_CUSTODIAN.TOTAL_* porque esas
        // columnas no siempre coinciden con la suma real en este ambiente -
        // ver hilo HU-14111, decisión confirmada con negocio: priorizar
        // exactitud matemática aunque difiera de la pantalla general).
        PackageCustodianDetailTotalsProjection totalsProjection = packageCustodianRepository
                .findDetailTotalsByPackageCustodianId(headerEntity.getPackageCustodianId());
        PackageCustodianDetailTotalsOutDto totals = toTotalsOutDto(totalsProjection);

        PackageCustodianDetailResponseOutDto response = PackageCustodianDetailResponseOutDto.builder()
                .content(content)
                .totals(totals)
                .pageSize(projectionPage.getSize())
                .pageNumber(projectionPage.getNumber())
                .totalElements(projectionPage.getTotalElements())
                .totalPages(projectionPage.getTotalPages())
                .build();

        log.info("End findPackageCustodianDetailV1, rows -> {}", projectionPage.getNumberOfElements());
        return response;
    }

    private PackageCustodianDetailTotalsOutDto toTotalsOutDto(PackageCustodianDetailTotalsProjection p) {
        if (p == null) {
            return PackageCustodianDetailTotalsOutDto.builder()
                    .totalQuantity(BigDecimal.ZERO)
                    .totalGrossValue(BigDecimal.ZERO)
                    .totalCommission(BigDecimal.ZERO)
                    .totalTax(BigDecimal.ZERO)
                    .totalNet(BigDecimal.ZERO)
                    .build();
        }
        return PackageCustodianDetailTotalsOutDto.builder()
                .totalQuantity(p.getTotalQuantity() != null ? p.getTotalQuantity() : BigDecimal.ZERO)
                .totalGrossValue(p.getTotalGrossValue() != null ? p.getTotalGrossValue() : BigDecimal.ZERO)
                .totalCommission(p.getTotalCommission() != null ? p.getTotalCommission() : BigDecimal.ZERO)
                .totalTax(p.getTotalTax() != null ? p.getTotalTax() : BigDecimal.ZERO)
                .totalNet(p.getTotalNet() != null ? p.getTotalNet() : BigDecimal.ZERO)
                .build();
    }

    private PackageCustodianDetailOutDto toDetailOutDto(PackageCustodianDetailProjection p) {
        return PackageCustodianDetailOutDto.builder()
                .tradeId(p.getTradeId())
                .registrationDate(p.getRegistrationDate())
                .clearingDate(p.getClearingDate())
                .returnClearingDate(p.getReturnClearingDate())
                .price(p.getPrice())
                .rate(p.getRate())
                .fraction(p.getFraction())
                .securitiesAccount(p.getSecuritiesAccount())
                .quantity(p.getQuantity())
                .commissionPercentage(p.getCommissionPercentage())
                .commissionAmount(p.getCommissionAmount())
                .valTaxAmount(p.getValTaxAmount())
                .grossValue(p.getGrossValue())
                .netTotal(p.getNetTotal())
                .transferValue(p.getTransferValue())
                .returnTurnoverValue(p.getReturnTurnoverValue())
                .netReturnValue(null)
                .operationTypeCode(p.getOperationTypeCode())
                .build();
    }

    private PackageCustodianEntity validatePackageCustodianAccess(
            Long packageCustodianId, UserNuboData userNuboData) {

        Long safeCustodianId = null;
        Long safeParticipantId = null;

        if (UserTypeEnum.EXTERNAL.equals(userNuboData.userTypeEnum())) {
            if (userNuboData.participantId() == null) {
                throw new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, HttpStatus.BAD_REQUEST);
            }
            if (!CountryCodeEnum.isAllowedColombiaOrPeru(userNuboData.participantCountryCode())) {
                throw new ServiceException(ErrorCode.NOT_FOUND, HttpStatus.NOT_FOUND);
            }
            if (userNuboData.isParticipantCustodian()) {
                safeCustodianId = userNuboData.participantId();
            } else {
                safeParticipantId = userNuboData.participantId();
            }
        }

        Specification<PackageCustodianEntity> pkSpecification = (root, query, cb) -> cb
                .equal(root.get("packageCustodianId"), packageCustodianId);

        Specification<PackageCustodianEntity> accessSpecification = PackageCustodianSpecificationBuilder.builder()
                .withCustodianId(safeCustodianId)
                .withParticipantId(safeParticipantId)
                .build();

        Specification<PackageCustodianEntity> specification = pkSpecification.and(accessSpecification);

        List<PackageCustodianEntity> results = packageCustodianRepository.findAll(specification);
        if (results.isEmpty()) {
            throw new ServiceException(ErrorCode.NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        return results.get(0);
    }

    @Override
    public InvestorAccountOutDto validateAccountCustodian(String accountNumber, Long packageCustodianId) {
        if (Objects.requireNonNull(
                VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateAccountCustodianV1(accountNumber, packageCustodianId);
        }
        throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
    }

    private InvestorAccountOutDto validateAccountCustodianV1(String accountNumber, Long packageCustodianId) {

        log.info("Start validateAccountCustodianV1, accountNumber -> {}, packageCustodianId -> {}", accountNumber,
                packageCustodianId);

        PackageCustodianEntity packageCustodianEntity = packageCustodianRepository
                .findFirstByPackageCustodianId(packageCustodianId)
                .orElseThrow(() -> new ServiceException(ErrorCode.PACKAGE_CUSTODIAN_NOT_FOUND, HttpStatus.BAD_REQUEST));

        InvestorAccountEntity investorAccountEntity = investorAccountRepository
                .findFirstByAccountNumberAndOriginTypeIdAndStatusId(accountNumber,
                        packageCustodianEntity.getInvestorAccount().getOriginType().getId(),
                        StatusEnum.INVESTOR_ACCOUNT_ACTIVE.getId())
                .orElseThrow(() -> new ServiceException(ErrorCode.INVESTOR_ACCOUNT_NOT_FOUND, HttpStatus.BAD_REQUEST));

        return MapperUtil.investorAccountEntityToInvestorAccountOutDto(investorAccountEntity);
    }

}

```

## src/main/java/com/nubo/operations/query/api/service/impl/SettlementCorrectionServiceImpl.java

```java
package com.nubo.operations.query.api.service.impl;

import java.util.Comparator;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.nubo.operations.query.api.application.properties.PropertiesContext;
import com.nubo.operations.query.api.application.util.ApplicationUtils;
import com.nubo.operations.query.api.exception.ServiceException;
import com.nubo.operations.query.api.exception.error.ErrorCode;
import com.nubo.operations.query.api.helpers.MapperPageUtil;
import com.nubo.operations.query.api.helpers.MapperUtil;
import com.nubo.operations.query.api.helpers.SettlementCorrectionSpecificationFactory;
import com.nubo.operations.query.api.models.domain.SettlementParams;
import com.nubo.operations.query.api.models.domain.UserNuboData;
import com.nubo.operations.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.query.api.models.dto.response.ReassignmentCorrectionOutDto;
import com.nubo.operations.query.api.models.entity.SettlementCorrectionEntity;
import com.nubo.operations.query.api.models.entity.TradeEntity;
import com.nubo.operations.query.api.models.enums.ReassignmentTypeEnum;
import com.nubo.operations.query.api.models.enums.SideEnum;
import com.nubo.operations.query.api.models.enums.UserTypeEnum;
import com.nubo.operations.query.api.models.enums.VersionApiEnum;
import com.nubo.operations.query.api.repository.SettlementCorrectionsRepository;
import com.nubo.operations.query.api.repository.TradeRepository;
import com.nubo.operations.query.api.service.SettlementCorrectionService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * Record que representa la clave compuesta para agrupar correcciones de
 * reasignación.
 * Agrupa por tradeId, sideId, fraction y correctionNumber para procesar parejas
 * independientes.
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class SettlementCorrectionServiceImpl implements SettlementCorrectionService {

    private final TradeRepository tradeRepository;
    private final SettlementCorrectionsRepository settlementCorrectionsRepository;

    private static final String SORT_FIELD_REQUEST_DATE = "requestDate";
    private static final String SORT_FIELD_REQUEST_TIME = "requestTime";
    private static final String SORT_FIELD_FRACTION = "fraction";

    private record CorrectionKey(Long tradeId, String sideId, Integer fraction, String correctionNumber) {
    }

    @Override
    public PageResponseOutDto<ReassignmentCorrectionOutDto> findAllCorrectionsReassignment(
            SettlementParams settlementParams) {
        if (Objects.requireNonNull(
                VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllCorrectionsReassignmentV1(settlementParams);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<ReassignmentCorrectionOutDto> findAllCorrectionsReassignmentV1(
            SettlementParams settlementParams) {
        log.info("Start method findAllCorrectionsReassignmentV1 with settlementParams: {}", settlementParams);

        UserNuboData userNuboData = ApplicationUtils.getUserNuboData();
        Long participantId = UserTypeEnum.EXTERNAL.equals(userNuboData.userTypeEnum())
                ? userNuboData.participantId()
                : null;
        TradeEntity tradeEntity = validateTradeAndOptionalParticipant(settlementParams.tradeId(), participantId);

        String side = settlementParams.sideId();
        if (participantId != null && !participantHasAccessToSide(tradeEntity, participantId, side)) {
            log.info("Participant {} does not belong to requested side {} for trade {}. Returning empty result.",
                    participantId, side, tradeEntity.getId());
            return MapperPageUtil.pageToPageResponseOutDto(List.of(), settlementParams.page(),
                    settlementParams.size(), 0);
        }

        log.debug("Resolved corrections side filter -> requestSideId: {}, participantId: {}, finalSideId: {}",
                settlementParams.sideId(), participantId, side);

        Specification<SettlementCorrectionEntity> specification = SettlementCorrectionSpecificationFactory
                .createCorrectionsFilter(tradeEntity.getId(), side, settlementParams.statusId(),
                        settlementParams.dateOfCorrection());

        Sort sortObj = createComplexSort(settlementParams.sort(), settlementParams.order());

        if (Boolean.TRUE.equals(settlementParams.all())) {

            List<SettlementCorrectionEntity> allReassignments = settlementCorrectionsRepository.findAll(specification,
                    sortObj);

            if (allReassignments.isEmpty()) {
                return MapperPageUtil.pageToPageResponseOutDto(List.of(), settlementParams.page(),
                        settlementParams.size(), 0);
            }

            List<SettlementCorrectionEntity> validReassignments = allReassignments.stream()
                    .filter(r -> {
                        if (r.getReassignmentType() == null) {
                            log.warn("Skipping SettlementCorrectionEntity with id {} - null reassignmentType",
                                    r.getId());
                            return false;
                        }
                        String description = r.getReassignmentType().getDescription();
                        boolean isValid = ReassignmentTypeEnum.INICIAL.getValue().equals(description) ||
                                ReassignmentTypeEnum.ACTUAL.getValue().equals(description);
                        if (!isValid) {
                            log.warn(
                                    "Skipping SettlementCorrectionEntity with id {} - unexpected reassignmentType '{}'",
                                    r.getId(), description);
                        }
                        return isValid;
                    })
                    .toList();

            if (validReassignments.isEmpty()) {
                log.warn("No valid reassignments found after filtering");
                return MapperPageUtil.pageToPageResponseOutDto(List.of(), settlementParams.page(),
                        settlementParams.size(), 0);
            }

            // Agrupar por tradeId-sideId-fraction-correctionNumber usando CorrectionKey
            Map<CorrectionKey, Map<String, SettlementCorrectionEntity>> groupedByCompositeKey = validReassignments
                    .stream()
                    .collect(Collectors.groupingBy(
                            r -> new CorrectionKey(
                                    r.getTrade().getId(),
                                    r.getSide().getId(),
                                    r.getFraction(),
                                    r.getCorrectionNumber() != null ? r.getCorrectionNumber() : "NULL"),
                            Collectors.toMap(
                                    r -> r.getReassignmentType().getDescription(),
                                    r -> r,
                                    (existing, replacement) -> {
                                        log.warn(
                                                "Duplicate reassignment found for same correction. TradeId: {}, SideId: {}, Fraction: {}, CorrectionNumber: {}, Type: {}. Taking most recent.",
                                                replacement.getTrade().getId(),
                                                replacement.getSide().getId(),
                                                replacement.getFraction(),
                                                replacement.getCorrectionNumber(),
                                                replacement.getReassignmentType().getDescription());
                                        return existing.getLastModifyDate().isAfter(replacement.getLastModifyDate())
                                                ? existing
                                                : replacement;
                                    })));

            log.info("Found {} correction pairs to process", groupedByCompositeKey.size());

            List<ReassignmentCorrectionOutDto> correctionList = groupedByCompositeKey.values().stream()
                    .map(reassignmentMap -> {
                        SettlementCorrectionEntity initialEntity = reassignmentMap
                                .get(ReassignmentTypeEnum.INICIAL.getValue());
                        SettlementCorrectionEntity currentEntity = reassignmentMap
                                .get(ReassignmentTypeEnum.ACTUAL.getValue());

                        return MapperUtil.mergeReassignmentCorrections(initialEntity, currentEntity);
                    })
                    .filter(Objects::nonNull)
                    .sorted(createDtoComparator(settlementParams.sort(), settlementParams.order()))
                    .toList();

            return MapperPageUtil.pageToPageResponseOutDto(
                    correctionList,
                    0,
                    correctionList.size(),
                    correctionList.size());

        } else {
            List<SettlementCorrectionEntity> allReassignments = settlementCorrectionsRepository.findAll(specification,
                    sortObj);

            if (allReassignments.isEmpty()) {
                return MapperPageUtil.pageToPageResponseOutDto(List.of(), settlementParams.page(),
                        settlementParams.size(), 0);
            }

            List<SettlementCorrectionEntity> validReassignments = allReassignments.stream()
                    .filter(r -> {
                        if (r.getReassignmentType() == null) {
                            log.warn("Skipping SettlementCorrectionEntity with id {} - null reassignmentType",
                                    r.getId());
                            return false;
                        }
                        String description = r.getReassignmentType().getDescription();
                        boolean isValid = ReassignmentTypeEnum.INICIAL.getValue().equals(description) ||
                                ReassignmentTypeEnum.ACTUAL.getValue().equals(description);
                        if (!isValid) {
                            log.warn(
                                    "Skipping SettlementCorrectionEntity with id {} - unexpected reassignmentType '{}'",
                                    r.getId(), description);
                        }
                        return isValid;
                    })
                    .toList();

            if (validReassignments.isEmpty()) {
                log.warn("No valid reassignments found after filtering");
                return MapperPageUtil.pageToPageResponseOutDto(List.of(), settlementParams.page(),
                        settlementParams.size(), 0);
            }

            // Agrupar por tradeId-sideId-fraction-correctionNumber usando CorrectionKey
            Map<CorrectionKey, Map<String, SettlementCorrectionEntity>> groupedByCompositeKey = validReassignments
                    .stream()
                    .collect(Collectors.groupingBy(
                            r -> new CorrectionKey(
                                    r.getTrade().getId(),
                                    r.getSide().getId(),
                                    r.getFraction(),
                                    r.getCorrectionNumber() != null ? r.getCorrectionNumber() : "NULL"),
                            Collectors.toMap(
                                    r -> r.getReassignmentType().getDescription(),
                                    r -> r,
                                    (existing, replacement) -> {
                                        log.warn(
                                                "Duplicate reassignment found for same correction. TradeId: {}, SideId: {}, Fraction: {}, CorrectionNumber: {}, Type: {}. Taking most recent.",
                                                replacement.getTrade().getId(),
                                                replacement.getSide().getId(),
                                                replacement.getFraction(),
                                                replacement.getCorrectionNumber(),
                                                replacement.getReassignmentType().getDescription());
                                        return existing.getLastModifyDate().isAfter(replacement.getLastModifyDate())
                                                ? existing
                                                : replacement;
                                    })));

            log.info("Found {} correction pairs to process", groupedByCompositeKey.size());

            List<ReassignmentCorrectionOutDto> allCorrectionList = groupedByCompositeKey.values().stream()
                    .map(reassignmentMap -> {
                        SettlementCorrectionEntity initialEntity = reassignmentMap
                                .get(ReassignmentTypeEnum.INICIAL.getValue());
                        SettlementCorrectionEntity currentEntity = reassignmentMap
                                .get(ReassignmentTypeEnum.ACTUAL.getValue());

                        return MapperUtil.mergeReassignmentCorrections(initialEntity, currentEntity);
                    })
                    .filter(Objects::nonNull)
                    .sorted(createDtoComparator(settlementParams.sort(), settlementParams.order()))
                    .toList();

            int totalElements = allCorrectionList.size();
            int page = settlementParams.page();
            int size = settlementParams.size();
            int start = page * size;
            int end = Math.min(start + size, totalElements);

            if (start >= totalElements) {
                log.info("Page requested is beyond available data - start: {}, totalElements: {}", start,
                        totalElements);
                return MapperPageUtil.pageToPageResponseOutDto(List.of(), page, size, totalElements);
            }

            List<ReassignmentCorrectionOutDto> paginatedList = allCorrectionList.subList(start, end);

            return MapperPageUtil.pageToPageResponseOutDto(
                    paginatedList,
                    page,
                    size,
                    totalElements);
        }
    }

    private boolean participantHasAccessToSide(TradeEntity tradeEntity, Long participantId, String sideId) {
        if (tradeEntity == null || participantId == null || sideId == null) {
            return false;
        }

        Set<String> participantSides = new HashSet<>();
        if (tradeEntity.getParticipantBuy() != null
                && Objects.equals(participantId, tradeEntity.getParticipantBuy().getId())) {
            participantSides.add(SideEnum.BUY.getId());
        }
        if (tradeEntity.getParticipantSell() != null
                && Objects.equals(participantId, tradeEntity.getParticipantSell().getId())) {
            participantSides.add(SideEnum.SELL.getId());
        }

        return participantSides.contains(sideId);
    }

    private TradeEntity validateTradeAndOptionalParticipant(Long tradeId, Long participantId) {
        if (tradeId == null) {
            throw new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        return tradeRepository.findByIdAndOptionalParticipantId(tradeId, participantId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private Sort createComplexSort(String sortName, String order) {
        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC
                : Sort.Direction.ASC;
        String sort = sortName != null ? sortName : SORT_FIELD_REQUEST_DATE;
        return switch (sort) {
            case "firstName" -> Sort.by(direction, "investorAccount.investor.firstName") // legacy — ver pendientes.md
                    .and(Sort.by(direction, "investorAccount.investor.lastName"))
                    .and(Sort.by(direction, "participantAccount.participant.name"));
            case "accountName" -> Sort.by(direction, "investorAccount.accountName");
            case "investorAccount" -> Sort.by(direction, "investorAccount.accountNumber")
                    .and(Sort.by(direction, "participantAccount.accountNumber"));
            case "masterAccount" -> Sort.by(direction, "participantAccount.type.id");
            case SORT_FIELD_REQUEST_DATE, "date" -> Sort.by(Sort.Direction.DESC, SORT_FIELD_REQUEST_DATE)
                    .and(Sort.by(Sort.Direction.DESC, SORT_FIELD_REQUEST_TIME));
            default -> Sort.by(Sort.Direction.DESC, SORT_FIELD_REQUEST_DATE)
                    .and(Sort.by(Sort.Direction.DESC, SORT_FIELD_REQUEST_TIME))
                    .and(Sort.by(Sort.Direction.ASC, SORT_FIELD_FRACTION));
        };
    }

    private Comparator<ReassignmentCorrectionOutDto> createDtoComparator(String sortName, String order) {
        boolean isDesc = "desc".equalsIgnoreCase(order);
        String sort = sortName != null ? sortName : SORT_FIELD_REQUEST_DATE;

        return switch (sort) {
            case SORT_FIELD_REQUEST_DATE, "date" -> {
                Comparator<ReassignmentCorrectionOutDto> comp = Comparator
                    .comparing(ReassignmentCorrectionOutDto::getRequestDate,
                        Comparator.nullsLast(Comparator.naturalOrder()))
                    .thenComparing(ReassignmentCorrectionOutDto::getRequestTime,
                        Comparator.nullsLast(Comparator.naturalOrder()));
                yield isDesc ? comp.reversed() : comp;
            }
            default -> Comparator
                .comparing(ReassignmentCorrectionOutDto::getRequestDate,
                    Comparator.nullsLast(Comparator.reverseOrder()))
                .thenComparing(ReassignmentCorrectionOutDto::getRequestTime,
                    Comparator.nullsLast(Comparator.reverseOrder()))
                .thenComparing(ReassignmentCorrectionOutDto::getFraction);
        };
    }
}

```

## src/main/java/com/nubo/operations/query/api/service/impl/SettlementRedisServiceImpl.java

```java
package com.nubo.operations.query.api.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.function.Function;

import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nubo.operations.query.api.application.properties.PropertiesContext;
import com.nubo.operations.query.api.application.properties.PropertiesConfig;
import com.nubo.operations.query.api.exception.ServiceException;
import com.nubo.operations.query.api.exception.error.ErrorCode;
import com.nubo.operations.query.api.helpers.SettlementRedisMapper;
import com.nubo.operations.query.api.helpers.RedisMapperUtils.FilterContext;
import com.nubo.operations.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.query.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.query.api.models.enums.SearchOperationEnum;
import com.nubo.operations.query.api.models.enums.VersionApiEnum;
import com.nubo.operations.query.api.service.SettlementRedisService;
import com.nubo.operations.query.api.service.SettlementService;

import io.redisearch.Query;
import io.redisearch.SearchResult;
import io.redisearch.client.Client;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class SettlementRedisServiceImpl implements SettlementRedisService {

    private final SettlementRedisMapper settlementRedisMapper;
    private final SettlementService settlementService;
    private final PropertiesConfig propertiesConfig;

    private static final String INDEX_NAME = "trade_settlement_idx";

    @Override
    @Transactional
    public PageResponseOutDto<SettlementOutDto> findAllSettlementsDynamic(
            Pageable pageable,
            String fieldName,
            String fieldValue,
            String operation,
            Long tradeId,
            String sideId,
            String investorDocumentNumber) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllSettlementsDynamicV1(pageable, fieldName, fieldValue, operation, tradeId, sideId,
                    investorDocumentNumber);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    @Override
    @Transactional
    public PageResponseOutDto<SettlementOutDto> findAllSettlementsRedisOnly(
            Pageable pageable,
            String fieldName,
            String fieldValue,
            String operation,
            Long tradeId,
            String sideId,
            String investorDocumentNumber) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllSettlementsRedisOnlyV1(pageable, fieldName, fieldValue, operation, tradeId, sideId,
                    investorDocumentNumber);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    public PageResponseOutDto<SettlementOutDto> findAllSettlementsRedisOnlyV1(
            Pageable pageable,
            String fieldName,
            String fieldValue,
            String operation,
            Long tradeId,
            String sideId,
            String investorDocumentNumber) {

        log.info("Redis ONLY search - host: {}, port: {}", propertiesConfig.getRedisHost(),
                propertiesConfig.getRedisPort());

        try {
            log.info("Attempting to create Redis client...");
            Client client = new Client(INDEX_NAME, propertiesConfig.getRedisHost(), propertiesConfig.getRedisPort());
            log.info("Redis client created successfully");

            String queryString = buildQueryString(fieldName, fieldValue, operation);

            log.info("Executing Redis ONLY query: {}", queryString);

            Query query = new Query(queryString);
            query.limit((int) pageable.getOffset(), pageable.getPageSize());

            log.info("Executing Redis search...");
            SearchResult result = client.search(query);
            log.info("Redis search completed successfully, total results: {}", result.totalResults);

            client.close();

            List<SettlementOutDto> settlements = settlementRedisMapper.convertToSettlementOutDto(result.docs);

            long totalElements = result.totalResults;
            int totalPages = (int) Math.ceil((double) totalElements / pageable.getPageSize());

            PageResponseOutDto<SettlementOutDto> response = new PageResponseOutDto<>();
            response.setContent(settlements);
            response.setTotalElements(totalElements);
            response.setPageNumber(pageable.getPageNumber());
            response.setPageSize(pageable.getPageSize());
            response.setTotalPages(totalPages);
            return response;

        } catch (Exception e) {
            log.error("Error in Redis ONLY search: {}", e.getMessage(), e);
            log.info("Note: tradeId={}, sideId={}, investorDocumentNumber={} - available for future filtering",
                    tradeId, sideId, investorDocumentNumber);
            PageResponseOutDto<SettlementOutDto> response = new PageResponseOutDto<>();
            response.setContent(new ArrayList<>());
            response.setTotalElements(0L);
            response.setPageNumber(pageable.getPageNumber());
            response.setPageSize(pageable.getPageSize());
            response.setTotalPages(0);
            return response;
        }
    }

    public PageResponseOutDto<SettlementOutDto> findAllSettlementsDynamicV1(
            Pageable pageable,
            String fieldName,
            String fieldValue,
            String operation,
            Long tradeId,
            String sideId,
            String investorDocumentNumber) {

        log.info("Redis configuration - host: {}, port: {}", propertiesConfig.getRedisHost(),
                propertiesConfig.getRedisPort());

        try {
            log.info("Attempting to create Redis client...");
            Client client = new Client(INDEX_NAME, propertiesConfig.getRedisHost(), propertiesConfig.getRedisPort());
            log.info("Redis client created successfully");

            String queryString = buildQueryString(fieldName, fieldValue, operation);

            log.info("Executing Redis query: {}", queryString);

            Query query = new Query(queryString);
            query.limit((int) pageable.getOffset(), pageable.getPageSize());

            log.info("Executing Redis search...");
            SearchResult result = client.search(query);
            log.info("Redis search completed successfully, total results: {}", result.totalResults);

            client.close();

            if (result.totalResults == 0) {
                log.info("Redis returned 0 results, falling back to database search");
                return fallbackToDatabaseSearch(pageable, fieldName, fieldValue, operation, tradeId, sideId,
                        investorDocumentNumber);
            }

            List<SettlementOutDto> settlements = settlementRedisMapper.convertToSettlementOutDto(result.docs);

            long totalElements = result.totalResults;
            int totalPages = (int) Math.ceil((double) totalElements / pageable.getPageSize());

            PageResponseOutDto<SettlementOutDto> response = new PageResponseOutDto<>();
            response.setContent(settlements);
            response.setTotalElements(totalElements);
            response.setPageNumber(pageable.getPageNumber());
            response.setPageSize(pageable.getPageSize());
            response.setTotalPages(totalPages);
            return response;

        } catch (Exception e) {
            log.error("Error in Redis search: {}, falling back to database search", e.getMessage());
            return fallbackToDatabaseSearch(pageable, fieldName, fieldValue, operation, tradeId, sideId,
                    investorDocumentNumber);
        }
    }

    private String buildQueryString(String fieldName, String fieldValue, String operation) {
        List<String> filters = new ArrayList<>();

        if (fieldName != null && operation != null) {
            SearchOperationEnum op = SearchOperationEnum.fromValue(operation);
            if (op == SearchOperationEnum.IS_EMPTY || op == SearchOperationEnum.IS_NOT_EMPTY || fieldValue != null) {
                String dynamicFilter = buildDynamicFilter(fieldName, fieldValue, op);
                if (dynamicFilter != null) {
                    filters.add(dynamicFilter);
                }
            }
        }

        String finalQuery = filters.isEmpty() ? "*" : String.join(" ", filters);
        log.info("Generated Redis query: {}", finalQuery);
        return finalQuery;
    }

    private String buildDynamicFilter(String fieldName, String fieldValue, SearchOperationEnum operation) {
        log.debug("Building dynamic filter for field: {}, value: {}, operation: {}", fieldName, fieldValue, operation);

        String redisFieldName = settlementRedisMapper.mapFieldNameToRedisField(fieldName);
        if (redisFieldName == null) {
            return null;
        }

        boolean isNumericField = SettlementRedisMapper.NUMERIC_FIELDS.contains(redisFieldName);
        boolean isDateField = SettlementRedisMapper.DATE_FIELDS.contains(redisFieldName);
        boolean isTagField = !isNumericField && !isDateField;

        FilterContext context = new FilterContext(redisFieldName, fieldValue, isNumericField, isDateField);

        Function<FilterContext, String> strategy = SettlementRedisMapper.FILTER_STRATEGIES.get(operation.getValue());

        if (strategy == null) {
            log.warn("Unsupported operation: {}, falling back to default behavior", operation);

            if (isNumericField) {
                return "@" + redisFieldName + ":[" + fieldValue + " " + fieldValue + "]";
            } else if (isTagField) {
                if (operation == SearchOperationEnum.CONTAINS) {
                    return "@" + redisFieldName + ":{*" + escapeTagValue(fieldValue) + "*}";
                } else {
                    return "@" + redisFieldName + ":{" + escapeTagValue(fieldValue) + "}";
                }
            } else {
                return "@" + redisFieldName + ":" + escapeValue(fieldValue);
            }
        }

        return strategy.apply(context);
    }

    private PageResponseOutDto<SettlementOutDto> fallbackToDatabaseSearch(
            Pageable pageable,
            String fieldName,
            String fieldValue,
            String operation,
            Long tradeId,
            String sideId,
            String investorDocumentNumber) {

        log.info("Executing fallback search in database with same parameters");

        try {
            return settlementService.findAllSettlementsDynamic(pageable, tradeId, sideId, investorDocumentNumber,
                    fieldName, fieldValue, operation);

        } catch (Exception e) {
            log.error("Error in database fallback search: {}", e.getMessage(), e);
            PageResponseOutDto<SettlementOutDto> response = new PageResponseOutDto<>();
            response.setContent(new ArrayList<>());
            response.setTotalElements(0L);
            response.setPageNumber(pageable.getPageNumber());
            response.setPageSize(pageable.getPageSize());
            response.setTotalPages(0);
            return response;
        }
    }

    private String escapeTagValue(String value) {
        return value.replace(",", "\\,")
                .replace(".", "\\.")
                .replace("<", "\\<")
                .replace(">", "\\>")
                .replace("{", "\\{")
                .replace("}", "\\}")
                .replace("[", "\\[")
                .replace("]", "\\]")
                .replace("\"", "\\\"")
                .replace("'", "\\'")
                .replace(":", "\\:")
                .replace(";", "\\;")
                .replace("!", "\\!")
                .replace("@", "\\@")
                .replace("#", "\\#")
                .replace("$", "\\$")
                .replace("%", "\\%")
                .replace("^", "\\^")
                .replace("&", "\\&")
                .replace("*", "\\*")
                .replace("(", "\\(")
                .replace(")", "\\)")
                .replace("-", "\\-")
                .replace("+", "\\+")
                .replace("=", "\\=")
                .replace("~", "\\~");
    }

    private String escapeValue(String value) {
        return "\"" + value.replace("\"", "\\\"") + "\"";
    }
}

```

## src/main/java/com/nubo/operations/query/api/service/impl/SettlementServiceImpl.java

```java
package com.nubo.operations.query.api.service.impl;

import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.nubo.operations.query.api.application.properties.PropertiesContext;
import com.nubo.operations.query.api.application.util.ApplicationUtils;
import com.nubo.operations.query.api.client.operation.rules.models.dto.response.ActionOutDto;
import com.nubo.operations.query.api.client.operation.rules.models.dto.response.BusinessRuleOutDto;
import com.nubo.operations.query.api.client.operation.rules.service.OperationBusinessRuleClient;
import com.nubo.operations.query.api.exception.ServiceException;
import com.nubo.operations.query.api.exception.error.ErrorCode;
import com.nubo.operations.query.api.helpers.MapperPageUtil;
import com.nubo.operations.query.api.helpers.MapperUtil;
import com.nubo.operations.query.api.helpers.SettlementSearchMapper;
import com.nubo.operations.query.api.helpers.SettlementSpecificationFactory;
import com.nubo.operations.query.api.models.domain.SettlementParams;
import com.nubo.operations.query.api.models.domain.UserNuboData;
import com.nubo.operations.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.query.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.query.api.models.dto.response.SettlementSearchOutDto;
import com.nubo.operations.query.api.models.dto.response.StatusOutDto;
import com.nubo.operations.query.api.models.entity.ParticipantEntity;
import com.nubo.operations.query.api.models.entity.SettlementEntity;
import com.nubo.operations.query.api.models.entity.SettlementKey;
import com.nubo.operations.query.api.models.entity.SideEntity;
import com.nubo.operations.query.api.models.entity.TradeEntity;
import com.nubo.operations.query.api.models.enums.BusinessRuleEnum;
import com.nubo.operations.query.api.models.enums.CountryCodeEnum;
import com.nubo.operations.query.api.models.enums.SearchOperationEnum;
import com.nubo.operations.query.api.models.enums.SideEnum;
import com.nubo.operations.query.api.models.enums.StatusEnum;
import com.nubo.operations.query.api.models.enums.UserTypeEnum;
import com.nubo.operations.query.api.models.enums.VersionApiEnum;
import com.nubo.operations.query.api.repository.SettlementRepository;
import com.nubo.operations.query.api.repository.TradeRepository;
import com.nubo.operations.query.api.service.SettlementService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class SettlementServiceImpl implements SettlementService {

    private final SettlementRepository settlementRepository;
    private final OperationBusinessRuleClient operationBusinessRuleClient;
    private final TradeRepository tradeRepository;

    @Override
    public PageResponseOutDto<SettlementSearchOutDto> findAllSettlementsCustodyView(SettlementParams settlementParams) {
        if (Objects.requireNonNull(
                VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllSettlementsCustodyViewV1(settlementParams);
        }
        throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
    }

    private PageResponseOutDto<SettlementSearchOutDto> findAllSettlementsCustodyViewV1(
            SettlementParams settlementParams) {
        log.info("Start findAllSettlementsCustodyViewV1, settlementParams -> {}", settlementParams);
        UserNuboData userNuboData = ApplicationUtils.getUserNuboData();
        Sort sortObj = Sort.by(
                settlementParams.order().equalsIgnoreCase("DESC")
                        ? Sort.Direction.DESC
                        : Sort.Direction.ASC,
                "trade.clearingDate");

        Long custodianStatusId = settlementParams.custodianStatusId() != null
                ? StatusEnum.fromIdAndCustodian(settlementParams.custodianStatusId()).getId()
                : null;
        Long filterParticipantId = settlementParams.participantId();

        if (UserTypeEnum.EXTERNAL.equals(userNuboData.userTypeEnum())) {
            if (userNuboData.participantId() == null) {
                throw new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, HttpStatus.BAD_REQUEST);
            }
            // validate country, col, peru
            if (!CountryCodeEnum.isAllowedColombiaOrPeru(userNuboData.participantCountryCode())) {
                // País no permitido → devolver lista vacía
                return MapperPageUtil.pageToPageResponseOutDto(
                        Collections.emptyList(),
                        0,
                        0,
                        0);
            }
        }

        // ALL = TRUE
        if (Boolean.TRUE.equals(settlementParams.all())) {
            Specification<SettlementEntity> specification;
            if (UserTypeEnum.INTERNAL.equals(userNuboData.userTypeEnum())) {
                specification = SettlementSpecificationFactory.createCustodyViewInternalFilter(
                        settlementParams.countryId(),
                        settlementParams.depositId(),
                        settlementParams.custodianId(),
                        settlementParams.operationTypeId(),
                        filterParticipantId,
                        settlementParams.registrationDateFrom(),
                        settlementParams.settlementDateTo(),
                        custodianStatusId);
            } else {
                specification = SettlementSpecificationFactory.createCustodyViewExternalFilter(
                        settlementParams.countryId(),
                        settlementParams.depositId(),
                        userNuboData.participantId(),
                        settlementParams.operationTypeId(),
                        filterParticipantId,
                        settlementParams.registrationDateFrom(),
                        settlementParams.settlementDateTo(),
                        custodianStatusId);
            }

            List<SettlementEntity> settlementEntityList = settlementRepository.findAll(specification, sortObj);
            List<SettlementSearchOutDto> content = settlementEntityList.stream()
                    .map(SettlementSearchMapper::toDto)
                    .toList();
            PageResponseOutDto<SettlementSearchOutDto> response = MapperPageUtil.pageToPageResponseOutDto(
                    content,
                    0,
                    content.size(),
                    content.size());

            AtomicLong counter = new AtomicLong(1);
            response.getContent()
                    .forEach(dto -> dto.setId(counter.getAndIncrement()));

            log.info("End findAllSettlementsCustodyViewV1");
            return response;
        }

        // PAGEABLE
        Pageable pageable = PageRequest.of(settlementParams.page(), settlementParams.size(), sortObj);
        Specification<SettlementEntity> specification;

        if (UserTypeEnum.INTERNAL.equals(userNuboData.userTypeEnum())) {
            specification = SettlementSpecificationFactory.createCustodyViewInternalFilter(
                    settlementParams.countryId(),
                    settlementParams.depositId(),
                    settlementParams.custodianId(),
                    settlementParams.operationTypeId(),
                    filterParticipantId,
                    settlementParams.registrationDateFrom(),
                    settlementParams.settlementDateTo(),
                    custodianStatusId);
        } else {
            specification = SettlementSpecificationFactory.createCustodyViewExternalFilter(
                    settlementParams.countryId(),
                    settlementParams.depositId(),
                    userNuboData.participantId(),
                    settlementParams.operationTypeId(),
                    filterParticipantId,
                    settlementParams.registrationDateFrom(),
                    settlementParams.settlementDateTo(),
                    custodianStatusId);
        }

        Page<SettlementEntity> settlementEntityPage = settlementRepository.findAll(specification, pageable);

        List<SettlementSearchOutDto> content = settlementEntityPage.getContent().stream()
                .map(SettlementSearchMapper::toDto)
                .toList();

        PageResponseOutDto<SettlementSearchOutDto> response = MapperPageUtil.pageToPageResponseOutDto(content,
                settlementEntityPage);

        long startId = (long) settlementParams.page() * settlementParams.size() + 1;
        AtomicLong counter = new AtomicLong(startId);
        response.getContent()
                .forEach(dto -> dto.setId(counter.getAndIncrement()));

        log.info("End findAllSettlementsCustodyViewV1, {}", response);
        return response;
    }

    @Override
    public PageResponseOutDto<SettlementOutDto> findAllSettlements(SettlementParams settlementParams) {
        if (Objects.requireNonNull(
                VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllSettlementsV1(settlementParams);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private Sort createComplexSort(String sortName, String order) {
        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC
                : Sort.Direction.ASC;
        String sort = sortName != null ? sortName : "fraction";
        return switch (sort) {
            case "firstName" -> Sort.by(direction, "investor.firstName") // legacy — ver pendientes.md
                    .and(Sort.by(direction, "investor.lastName"))
                    .and(Sort.by(direction, "participantAccount.participant.name"));
            case "accountName" -> Sort.by(direction, "investorAccount.accountName");
            case "investorAccount" -> Sort.by(direction, "investorAccount.accountNumber")
                    .and(Sort.by(direction, "participantAccount.accountNumber"));
            case "masterAccount" -> Sort.by(direction, "participantAccount.type.id");
            case "packageCode" -> Sort.by(direction, "packageDetails.packageNumber");
            default -> Sort.by(direction, sort);
        };
    }

    private PageResponseOutDto<SettlementOutDto> findAllSettlementsV1(SettlementParams settlementParams) {
        log.info("Start method findAllSettlementsV1 with settlementParams: {}", settlementParams);

        UserNuboData userNuboData = ApplicationUtils.getUserNuboData();
        Long participantId = UserTypeEnum.EXTERNAL.equals(userNuboData.userTypeEnum())
                ? userNuboData.participantId()
                : null;

        TradeEntity tradeEntity = validateTradeAndOptionalParticipant(settlementParams.tradeId(),
                participantId);
        BusinessRuleOutDto businessRuleOutDto = getBusinessRuleStatusReassignment(settlementParams.reassignment(),
                tradeEntity.getCountry().getId());

        Specification<SettlementEntity> specification = settlementEntitySpecification(tradeEntity, settlementParams,
                userNuboData);

        Sort sortObj = createComplexSort(settlementParams.sort(), settlementParams.order());

        if (Boolean.TRUE.equals(settlementParams.all())) {
            List<SettlementEntity> allResults = settlementRepository.findAll(specification, sortObj);

            if (allResults.isEmpty()) {
                return MapperPageUtil.pageToPageResponseOutDto(List.of(), 0, allResults.size(), 0);
            }

            List<SettlementOutDto> settlementOutDtoList = allResults.stream()
                    .map(settlementEntity -> {
                        if (settlementParams.reassignment()) {
                            return mapToSettlementOutDtoWithEditableCheck(settlementEntity,
                                    businessRuleOutDto);
                        }
                        return mapToSettlementOutDto(settlementEntity);
                    })
                    .map(this::clearPackageCodeWithoutCustodianStatus)
                    .toList();

            PageResponseOutDto<SettlementOutDto> response = MapperPageUtil
                    .pageToPageResponseOutDto(settlementOutDtoList, 0, allResults.size(),
                            allResults.size());
            log.info("End method findAllSettlementsV1, response: {}", response);
            return response;
        } else {
            Pageable pageable = PageRequest.of(settlementParams.page(), settlementParams.size(), sortObj);
            Page<SettlementEntity> pageResult = settlementRepository.findAll(specification, pageable);

            if (pageResult.isEmpty()) {
                return MapperPageUtil.pageToPageResponseOutDto(List.of(), settlementParams.page(),
                        settlementParams.size(), 0);
            }
            List<SettlementOutDto> settlementOutDtoList = pageResult.getContent().stream()
                    .map(settlementEntity -> {
                        if (settlementParams.reassignment()) {
                            return mapToSettlementOutDtoWithEditableCheck(settlementEntity,
                                    businessRuleOutDto);
                        }
                        return mapToSettlementOutDto(settlementEntity);
                    })
                    .map(this::clearPackageCodeWithoutCustodianStatus)
                    .toList();

            PageResponseOutDto<SettlementOutDto> response = MapperPageUtil
                    .pageToPageResponseOutDto(settlementOutDtoList, pageResult);
            log.info("End method findAllSettlementsV1, response: {}", response);
            return response;
        }
    }

    @Override
    public PageResponseOutDto<SettlementOutDto> findAllSettlementsDynamic(
            Pageable pageable,
            Long tradeId,
            String sideId,
            String investorDocumentNumber,
            String fieldName,
            String fieldValue,
            String operation) {
        if (Objects.requireNonNull(
                VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllSettlementsDynamicV1(pageable, tradeId, sideId, investorDocumentNumber,
                    fieldName, fieldValue, operation);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<SettlementOutDto> findAllSettlementsDynamicV1(
            Pageable pageable,
            Long tradeId,
            String sideId,
            String investorDocumentNumber,
            String fieldName,
            String fieldValue,
            String operation) {

        log.info("Start method findAllSettlementsDynamicV1 with page: {}, size: {}, tradeId: {}, sideId: {}, " +
                "investorDocumentNumber: {}, fieldName: {}, fieldValue: {}, operation: {} using dynamic datasource",
                pageable.getPageNumber(), pageable.getPageSize(), tradeId, sideId,
                investorDocumentNumber, fieldName, fieldValue, operation);

        SearchOperationEnum searchOperation = (operation != null) ? SearchOperationEnum.fromValue(operation)
                : null;

        if (operation != null && searchOperation == null) {
            log.warn("Invalid operation: {}", operation);
            throw new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
        }

        Specification<SettlementEntity> specification = SettlementSpecificationFactory.createCombinedFilter(
                tradeId, sideId, investorDocumentNumber, fieldName, fieldValue, searchOperation);

        Page<SettlementEntity> settlementEntityPage = settlementRepository.findAll(specification, pageable);

        List<SettlementOutDto> settlementOutDtoList = settlementEntityPage.getContent().stream()
                .map(this::mapToSettlementOutDto)
                .toList();

        log.debug("End method findAllSettlementsDynamicV1, number of settlements found: {}",
                settlementOutDtoList.size());
        return MapperPageUtil.pageToPageResponseOutDto(settlementOutDtoList, settlementEntityPage);
    }

    @Override
    public SettlementOutDto findSettlementById(SettlementKey settlementKey) {
        if (Objects.requireNonNull(
                VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findSettlementByIdV1(settlementKey);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private SettlementOutDto findSettlementByIdV1(SettlementKey settlementKey) {
        log.info("Start method findSettlementByIdV1 with settlementKey {}", settlementKey);

        SettlementEntity settlementEntity = validateSettlement(settlementKey);
        SettlementOutDto settlementOutDto = MapperUtil.settlementEntityToSettlementOutDto(settlementEntity);

        log.debug("End method findSettlementByIdV1, settlement -> {}", settlementOutDto);
        return settlementOutDto;
    }

    private Specification<SettlementEntity> settlementEntitySpecification(TradeEntity tradeEntity,
            SettlementParams settlementParams, UserNuboData userNuboData) {
        if (Objects.equals(UserTypeEnum.EXTERNAL, userNuboData.userTypeEnum())
                && userNuboData.isParticipantCustodian()) {
            return SettlementSpecificationFactory.createStandardCustodianFilter(tradeEntity.getId(),
                    settlementParams.sideId(), settlementParams.investorDocumentNumber(), userNuboData.participantId());
        }
        String sideIdByUser = getSideIdByTradeParticipant(tradeEntity, userNuboData);
        String sideIdToUse = (sideIdByUser != null)
                ? sideIdByUser
                : settlementParams.sideId();
        return SettlementSpecificationFactory.createStandardFilter(tradeEntity.getId(), sideIdToUse,
                settlementParams.investorDocumentNumber());
    }

    private SettlementOutDto mapToSettlementOutDto(SettlementEntity settlementEntity) {
        TradeEntity tradeEntity = settlementEntity.getTrade();
        SideEntity sideEntity = settlementEntity.getSide();
        SettlementOutDto settlementOutDto = MapperUtil.settlementEntityToSettlementOutDto(settlementEntity);

        settlementOutDto.setJointAccount(false);

        if (SideEnum.BUY.getId().equals(sideEntity.getId())) {
            settlementOutDto.setIsFractionable(Boolean.TRUE.equals(tradeEntity.getMasterAccountIndicatorBuy())
                    && Boolean.TRUE.equals(settlementEntity.getMasterAccountIndicator()));
        } else if (SideEnum.SELL.getId().equals(sideEntity.getId())) {
            settlementOutDto.setIsFractionable(Boolean.TRUE.equals(tradeEntity.getMasterAccountIndicatorSell())
                    && Boolean.TRUE.equals(settlementEntity.getMasterAccountIndicator()));
        }

        return settlementOutDto;
    }

    private SettlementOutDto clearPackageCodeWithoutCustodianStatus(SettlementOutDto settlementOutDto) {
        if (settlementOutDto.getCustodianStatus() == null) {
            settlementOutDto.setPackageCode(null);
        }
        return settlementOutDto;
    }

    private SettlementOutDto mapToSettlementOutDtoWithEditableCheck(
            SettlementEntity settlementEntity,
            BusinessRuleOutDto businessRuleOutDto) {
        List<ActionOutDto> actions = businessRuleOutDto.getActions() != null
                ? businessRuleOutDto.getActions()
                : List.of();
        SettlementOutDto dto = mapToSettlementOutDto(settlementEntity);
        dto.setIsEditable(this.isEditable(dto, actions));
        return dto;
    }

    private SettlementEntity validateSettlement(SettlementKey settlementKey) {
        if (settlementKey == null) {
            throw new ServiceException(ErrorCode.SETTLEMENT_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        return settlementRepository.findById(settlementKey)
                .orElseThrow(() -> new ServiceException(ErrorCode.SETTLEMENT_NOT_FOUND,
                        HttpStatus.NOT_FOUND));
    }

    private Boolean isEditable(SettlementOutDto settlementOutDto, List<ActionOutDto> actionOutDtoList) {
        if (settlementOutDto.getCustodianStatus() == null) {
            return true;
        }
        Long custodianStatusId = settlementOutDto.getCustodianStatus().getId();
        boolean isAllowedByRule = actionOutDtoList.stream()
                .map(ActionOutDto::getStatus)
                .filter(Objects::nonNull)
                .map(StatusOutDto::getId)
                .anyMatch(id -> Objects.equals(id, custodianStatusId));

        return isAllowedByRule;
    }

    private String getSideIdByTradeParticipant(TradeEntity tradeEntity, UserNuboData userNuboData) {
        if (tradeEntity == null) {
            throw new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND);
        }

        Long participantId = userNuboData.participantId();
        if (UserTypeEnum.INTERNAL.equals(userNuboData.userTypeEnum())) {
            return null;
        }
        ParticipantEntity participantBuy = tradeEntity.getParticipantBuy();
        ParticipantEntity participantSell = tradeEntity.getParticipantSell();
        if (Objects.equals(participantBuy, participantSell)) {
            log.debug("Same participant for BUY and SELL, participantId -> {}", participantId);
            return null;
        }
        if (participantBuy != null && Objects.equals(participantId, participantBuy.getId())) {
            log.debug("Participant BUY, participantId -> {}", participantId);
            return SideEnum.BUY.getId();
        } else if (participantSell != null && Objects.equals(participantId, participantSell.getId())) {
            log.debug("Participant SELL, participantId -> {}", participantId);
            return SideEnum.SELL.getId();
        } else {
            throw new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND_IN_TRADE, HttpStatus.NOT_FOUND);
        }
    }

    private TradeEntity validateTradeAndOptionalParticipant(Long tradeId, Long participantId) {
        if (tradeId == null) {
            throw new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        return tradeRepository.findByIdAndOptionalParticipantId(tradeId, participantId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private BusinessRuleOutDto getBusinessRuleStatusReassignment(boolean reassignment, Long countryId) {
        if (!reassignment) {
            return new BusinessRuleOutDto();
        }
        return operationBusinessRuleClient.findBusinessRuleByCountryIdAndCodeValid(countryId,
                BusinessRuleEnum.RULE_REASSIGNMENT_BY_FRACTION_CUSTODIAN);
    }

}

```

## src/main/java/com/nubo/operations/query/api/service/impl/TestSimulationServiceImpl.java

```java
package com.nubo.operations.query.api.service.impl;

import com.nubo.operations.query.api.exception.ServiceException;
import com.nubo.operations.query.api.exception.error.ErrorCode;
import com.nubo.operations.query.api.models.dto.response.TradeSimulationOutDto;
import com.nubo.operations.query.api.models.entity.StatusEntity;
import com.nubo.operations.query.api.repository.StatusRepository;
import com.nubo.operations.query.api.repository.TradeRepository;
import com.nubo.operations.query.api.service.TestSimulationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.OffsetDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class TestSimulationServiceImpl implements TestSimulationService {

    private static final String REGISTERED_DESCRIPTION = "REGISTRADA";
    private static final String REGISTERED_CATEGORY = "REGISTRO_OPERACION";

    private final TradeRepository tradeRepository;
    private final StatusRepository statusRepository;

    @Override
    @Transactional(readOnly = true)
    public List<TradeSimulationOutDto> findTodayRegisteredTrades() {
        StatusEntity status = statusRepository
                .findByDescriptionIgnoreCaseAndCategoryIgnoreCase(REGISTERED_DESCRIPTION, REGISTERED_CATEGORY)
                .orElseThrow(() -> {
                    log.error("Status not found for description {} and category {}",
                            REGISTERED_DESCRIPTION, REGISTERED_CATEGORY);
                    return new ServiceException(ErrorCode.NOT_FOUND, HttpStatus.NOT_FOUND);
                });

        Long statusId = status.getId();
        OffsetDateTime fromDateTime = OffsetDateTime.now().minusMinutes(20);

        log.info("Finding trades modified after {} with buyStatus {} and sellStatus {}", fromDateTime, statusId, statusId);

        return tradeRepository.findSimulationTradesByMatchDateAndStatusId(fromDateTime, statusId);
    }
}
```

## src/main/java/com/nubo/operations/query/api/service/impl/TradeEquityServiceImpl.java

```java
package com.nubo.operations.query.api.service.impl;

import java.util.List;
import java.util.Objects;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.nubo.operations.query.api.application.properties.PropertiesContext;
import com.nubo.operations.query.api.exception.ServiceException;
import com.nubo.operations.query.api.exception.error.ErrorCode;
import com.nubo.operations.query.api.helpers.MapperPageUtil;
import com.nubo.operations.query.api.helpers.MapperUtil;
import com.nubo.operations.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.query.api.models.dto.response.TradeEquityOutDto;
import com.nubo.operations.query.api.models.entity.TradeEquityEntity;
import com.nubo.operations.query.api.models.enums.VersionApiEnum;
import com.nubo.operations.query.api.repository.TradeEquityRepository;
import com.nubo.operations.query.api.service.TradeEquityService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class TradeEquityServiceImpl implements TradeEquityService {

    private final TradeEquityRepository tradeEquityRepository;

    @Override
    public PageResponseOutDto<TradeEquityOutDto> findAllTradeEquity(Pageable pageable) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllTradeEquityV1(pageable);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<TradeEquityOutDto> findAllTradeEquityV1(Pageable pageable) {
        log.info("Start method findAllTradesEquityV1 with page: {} and size: {}", pageable.getPageNumber(),
                pageable.getPageSize());

        Page<TradeEquityEntity> tradeEquityEntityPage = tradeEquityRepository.findAll(pageable);

        List<TradeEquityOutDto> tradeEquityOutDtoList = tradeEquityEntityPage.getContent().stream()
                .map(MapperUtil::tradeEquityEntityToTradeEquityOutDto)
                .toList();

        PageResponseOutDto<TradeEquityOutDto> pageResponseOutDto = MapperPageUtil.pageToPageResponseOutDto(
                tradeEquityOutDtoList, tradeEquityEntityPage);

        log.debug("End method findAllTradesEquityV1, found: {}", pageResponseOutDto);
        return pageResponseOutDto;
    }

    @Override
    public PageResponseOutDto<TradeEquityOutDto> findAllTradeEquity(int page, int size, String sort, String order,
            boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllTradeEquityV1(page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<TradeEquityOutDto> findAllTradeEquityV1(int page, int size, String sort, String order,
            boolean all) {
        log.info("Start method findAllTradeEquityV1 with page: {}, size: {}, sort: {}, order: {}, all: {}",
                page, size, sort, order, all);

        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "tradeId");

        if (all) {
            List<TradeEquityEntity> allResults = tradeEquityRepository.findAll(sortObj);

            if (allResults.isEmpty()) {
                return MapperPageUtil.pageToPageResponseOutDto(List.of(), 0, allResults.size(), 0);
            }

            List<TradeEquityOutDto> tradeEquityOutDtoList = allResults.stream()
                    .map(MapperUtil::tradeEquityEntityToTradeEquityOutDto)
                    .toList();

            return MapperPageUtil
                    .pageToPageResponseOutDto(tradeEquityOutDtoList, 0, allResults.size(), allResults.size());
        } else {
            Pageable pageable = PageRequest.of(page, size, sortObj);
            Page<TradeEquityEntity> pageResult = tradeEquityRepository.findAll(pageable);

            if (pageResult.isEmpty()) {
                return MapperPageUtil.pageToPageResponseOutDto(List.of(), page, size, 0);
            }

            List<TradeEquityOutDto> tradeEquityOutDtoList = pageResult.getContent().stream()
                    .map(MapperUtil::tradeEquityEntityToTradeEquityOutDto)
                    .toList();

            return MapperPageUtil
                    .pageToPageResponseOutDto(tradeEquityOutDtoList, pageResult);
        }
    }

    @Override
    public TradeEquityOutDto findTradeEquityById(Long tradeId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findTradeEquityByIdV1(tradeId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private TradeEquityOutDto findTradeEquityByIdV1(Long tradeId) {
        log.info("Start method findTradeEquityByIdV1, tradeId -> {}", tradeId);

        TradeEquityEntity tradeEquityEntity = validateTradeEquity(tradeId);
        TradeEquityOutDto tradeEquityOutDto = MapperUtil.tradeEquityEntityToTradeEquityOutDto(tradeEquityEntity);

        log.info("End method findTradeEquityByIdV1, tradeEquity -> {}", tradeEquityOutDto);
        return tradeEquityOutDto;
    }

    private TradeEquityEntity validateTradeEquity(Long tradeId) {
        if (tradeId == null) {
            throw new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        return tradeEquityRepository.findById(tradeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADE_EQUITY_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

}

```

## src/main/java/com/nubo/operations/query/api/service/impl/TradeRedisServiceImpl.java

```java
package com.nubo.operations.query.api.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.function.Function;

import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nubo.operations.query.api.application.properties.PropertiesContext;
import com.nubo.operations.query.api.application.properties.PropertiesConfig;
import com.nubo.operations.query.api.exception.ServiceException;
import com.nubo.operations.query.api.exception.error.ErrorCode;
import com.nubo.operations.query.api.helpers.QueryFilterBuilder;
import com.nubo.operations.query.api.helpers.TradeRedisMapper;
import com.nubo.operations.query.api.helpers.RedisMapperUtils.FilterContext;
import com.nubo.operations.query.api.models.domain.DynamicFilter;
import com.nubo.operations.query.api.models.domain.TradeParams;

import com.nubo.operations.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.query.api.models.dto.response.TradeOutDto;
import com.nubo.operations.query.api.models.entity.UserNuboEntity;
import com.nubo.operations.query.api.models.enums.SearchOperationEnum;
import com.nubo.operations.query.api.models.enums.UserTypeEnum;
import com.nubo.operations.query.api.models.enums.VersionApiEnum;
import com.nubo.operations.query.api.service.TradeRedisService;
import com.nubo.operations.query.api.service.TradeService;

import io.redisearch.Query;
import io.redisearch.SearchResult;
import io.redisearch.client.Client;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class TradeRedisServiceImpl implements TradeRedisService {

    private final TradeRedisMapper tradeRedisMapper;
    private final QueryFilterBuilder queryFilterBuilder;
    private final TradeService tradeService;
    private final PropertiesConfig propertiesConfig;

    private static final String INDEX_NAME = "trade_idx";

    @Override
    @Transactional
    public PageResponseOutDto<TradeOutDto> findAllTradesDynamic(
            Pageable pageable,
            DynamicFilter dynamicFilter,
            TradeParams tradeParams) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllTradesDynamicV1(pageable, dynamicFilter, tradeParams);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    @Override
    @Transactional
    public PageResponseOutDto<TradeOutDto> findAllTradesRedisOnly(
            Pageable pageable,
            DynamicFilter dynamicFilter,
            TradeParams tradeParams) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllTradesRedisOnlyV1(pageable, dynamicFilter, tradeParams);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    public PageResponseOutDto<TradeOutDto> findAllTradesRedisOnlyV1(
            Pageable pageable,
            DynamicFilter dynamicFilter,
            TradeParams tradeParams) {

        log.info("Redis ONLY search - host: {}, port: {}", propertiesConfig.getRedisHost(), propertiesConfig.getRedisPort());

        try {
            log.info("Attempting to create Redis client...");
            Client client = new Client(INDEX_NAME, propertiesConfig.getRedisHost(), propertiesConfig.getRedisPort());
            log.info("Redis client created successfully");

            String queryString = buildQueryString(dynamicFilter, tradeParams);

            log.info("Executing Redis ONLY query: {}", queryString);

            Query query = new Query(queryString);
            query.limit((int) pageable.getOffset(), pageable.getPageSize());

            log.info("Executing Redis search...");
            SearchResult result = client.search(query);
            log.info("Redis search completed successfully, total results: {}", result.totalResults);

            client.close();

            List<TradeOutDto> trades = tradeRedisMapper.convertToTradeOutDto(result.docs);

            long totalElements = result.totalResults;
            int totalPages = (int) Math.ceil((double) totalElements / pageable.getPageSize());

            PageResponseOutDto<TradeOutDto> response = new PageResponseOutDto<>();
            response.setContent(trades);
            response.setTotalElements(totalElements);
            response.setPageNumber(pageable.getPageNumber());
            response.setPageSize(pageable.getPageSize());
            response.setTotalPages(totalPages);
            return response;

        } catch (Exception e) {
            log.error("Error in Redis ONLY search: {}", e.getMessage(), e);
            PageResponseOutDto<TradeOutDto> response = new PageResponseOutDto<>();
            response.setContent(new ArrayList<>());
            response.setTotalElements(0L);
            response.setPageNumber(pageable.getPageNumber());
            response.setPageSize(pageable.getPageSize());
            response.setTotalPages(0);
            return response;
        }
    }

    public PageResponseOutDto<TradeOutDto> findAllTradesDynamicV1(
            Pageable pageable,
            DynamicFilter dynamicFilter,
            TradeParams tradeParams) {
        log.info("Redis configuration - host: {}, port: {}", propertiesConfig.getRedisHost(), propertiesConfig.getRedisPort());

        try {
            log.info("Attempting to create Redis client...");
            Client client = new Client(INDEX_NAME, propertiesConfig.getRedisHost(), propertiesConfig.getRedisPort());
            log.info("Redis client created successfully");

            String queryString = buildQueryString(dynamicFilter, tradeParams);

            log.info("Executing Redis query: {}", queryString);

            Query query = new Query(queryString);
            query.limit((int) pageable.getOffset(), pageable.getPageSize());

            log.info("Executing Redis search...");
            SearchResult result = client.search(query);
            log.info("Redis search completed successfully, total results: {}", result.totalResults);

            client.close();

            if (result.totalResults == 0) {
                log.info("Redis returned 0 results, falling back to database search");
                return fallbackToDatabaseSearch(pageable, dynamicFilter, tradeParams);
            }

            List<TradeOutDto> trades = tradeRedisMapper.convertToTradeOutDto(result.docs);

            long totalElements = result.totalResults;
            int totalPages = (int) Math.ceil((double) totalElements / pageable.getPageSize());

            PageResponseOutDto<TradeOutDto> response = new PageResponseOutDto<>();
            response.setContent(trades);
            response.setTotalElements(totalElements);
            response.setPageNumber(pageable.getPageNumber());
            response.setPageSize(pageable.getPageSize());
            response.setTotalPages(totalPages);
            return response;

        } catch (Exception e) {
            log.error("Error in Redis search: {}, falling back to database search", e.getMessage());
            return fallbackToDatabaseSearch(pageable, dynamicFilter, tradeParams);
        }
    }

    private String buildQueryString(DynamicFilter dynamicFilter,
            TradeParams tradeParams) {
        List<String> filters = new ArrayList<>();
        String fieldName = dynamicFilter.fieldName();
        String fieldValue = dynamicFilter.fieldValue();

        if (fieldName != null) {
            SearchOperationEnum op = dynamicFilter.operation();
            if (op == SearchOperationEnum.IS_EMPTY || op == SearchOperationEnum.IS_NOT_EMPTY || fieldValue != null) {
                String dynamicFilterString = buildDynamicFilter(dynamicFilter);
                if (dynamicFilterString != null) {
                    filters.add(dynamicFilterString);
                }
            }
        }

        List<String> commonFilters = queryFilterBuilder.buildCommonFilters(tradeParams, getParticipantIdByUser());
        filters.addAll(commonFilters);

        String finalQuery = filters.isEmpty() ? "*" : String.join(" ", filters);
        log.info("Generated Redis query: {}", finalQuery);
        return finalQuery;
    }

    private String buildDynamicFilter(DynamicFilter dynamicFilter) {
        String fieldName = dynamicFilter.fieldName();
        String fieldValue = dynamicFilter.fieldValue();
        SearchOperationEnum operation = dynamicFilter.operation();
        log.debug("Building dynamic filter for field: {}, value: {}, operation: {}", fieldName, fieldValue, operation);

        String redisFieldName = tradeRedisMapper.mapFieldNameToRedisField(fieldName);
        if (redisFieldName == null) {
            return null;
        }

        boolean isNumericField = TradeRedisMapper.NUMERIC_FIELDS.contains(redisFieldName);
        boolean isDateField = TradeRedisMapper.DATE_FIELDS.contains(redisFieldName);
        boolean isTagField = !isNumericField && !isDateField;

        FilterContext context = new FilterContext(redisFieldName, fieldValue, isNumericField, isDateField);

        Function<FilterContext, String> strategy = TradeRedisMapper.FILTER_STRATEGIES.get(operation.getValue());

        if (strategy == null) {
            log.warn("Unsupported operation: {}, falling back to default behavior", operation);

            if (isNumericField) {
                return "@" + redisFieldName + ":[" + fieldValue + " " + fieldValue + "]";
            } else if (isTagField) {
                if (operation == SearchOperationEnum.CONTAINS) {
                    return "@" + redisFieldName + ":{*" + escapeTagValue(fieldValue) + "*}";
                } else {
                    return "@" + redisFieldName + ":{" + escapeTagValue(fieldValue) + "}";
                }
            } else {
                return "@" + redisFieldName + ":" + escapeValue(fieldValue);
            }
        }

        return strategy.apply(context);
    }

    private PageResponseOutDto<TradeOutDto> fallbackToDatabaseSearch(
            Pageable pageable,
            DynamicFilter dynamicFilter,
            TradeParams tradeParams) {

        log.info("Executing fallback search in database with same parameters");

        try {

            return tradeService.findAllTradesDynamic(pageable, dynamicFilter, tradeParams);

        } catch (Exception e) {
            log.error("Error in database fallback search: {}", e.getMessage(), e);
            PageResponseOutDto<TradeOutDto> response = new PageResponseOutDto<>();
            response.setContent(new ArrayList<>());
            response.setTotalElements(0L);
            response.setPageNumber(pageable.getPageNumber());
            response.setPageSize(pageable.getPageSize());
            response.setTotalPages(0);
            return response;
        }
    }

    private String escapeTagValue(String value) {
        return value.replace(",", "\\,")
                    .replace(".", "\\.")
                    .replace("<", "\\<")
                    .replace(">", "\\>")
                    .replace("{", "\\{")
                    .replace("}", "\\}")
                    .replace("[", "\\[")
                    .replace("]", "\\]")
                    .replace("\"", "\\\"")
                    .replace("'", "\\'")
                    .replace(":", "\\:")
                    .replace(";", "\\;")
                    .replace("!", "\\!")
                    .replace("@", "\\@")
                    .replace("#", "\\#")
                    .replace("$", "\\$")
                    .replace("%", "\\%")
                    .replace("^", "\\^")
                    .replace("&", "\\&")
                    .replace("*", "\\*")
                    .replace("(", "\\(")
                    .replace(")", "\\)")
                    .replace("-", "\\-")
                    .replace("+", "\\+")
                    .replace("=", "\\=")
                    .replace("~", "\\~");
    }

    private String escapeValue(String value) {
        return "\"" + value.replace("\"", "\\\"") + "\"";
    }

    private Long getParticipantIdByUser() {
        UserNuboEntity userNuboEntity = PropertiesContext.getClientUserEntity();
        if (Objects.equals(UserTypeEnum.INTERNAL.getValue(), userNuboEntity.getUserType())) {
            return null;
        }
        if (Objects.equals(UserTypeEnum.EXTERNAL.getValue(), userNuboEntity.getUserType())) {
            return userNuboEntity.getParticipant() == null ? null : userNuboEntity.getParticipant().getId();
        }
        throw new ServiceException(ErrorCode.USER_TYPE_NOT_VALID, HttpStatus.BAD_REQUEST);
    }
}

```

## src/main/java/com/nubo/operations/query/api/service/impl/TradeServiceImpl.java

```java
package com.nubo.operations.query.api.service.impl;

import com.nubo.operations.query.api.application.properties.PropertiesContext;
import com.nubo.operations.query.api.application.util.ApplicationUtils;
import com.nubo.operations.query.api.exception.ServiceException;
import com.nubo.operations.query.api.exception.error.ErrorCode;
import com.nubo.operations.query.api.helpers.MapperPageUtil;
import com.nubo.operations.query.api.helpers.MapperUtil;
import com.nubo.operations.query.api.helpers.TradeSpecificationFactory;
import com.nubo.operations.query.api.models.domain.DynamicFilter;
import com.nubo.operations.query.api.models.domain.TradeParams;
import com.nubo.operations.query.api.models.domain.UserNuboData;
import com.nubo.operations.query.api.models.dto.response.*;
import com.nubo.operations.query.api.models.entity.ParticipantEntity;
import com.nubo.operations.query.api.models.entity.SettlementEntity;
import com.nubo.operations.query.api.models.entity.TradeEntity;
import com.nubo.operations.query.api.models.enums.CountryCodeEnum;
import com.nubo.operations.query.api.models.enums.SideEnum;
import com.nubo.operations.query.api.models.enums.StatusEnum;
import com.nubo.operations.query.api.models.enums.UserTypeEnum;
import com.nubo.operations.query.api.models.enums.VersionApiEnum;
import com.nubo.operations.query.api.repository.SettlementRepository;
import com.nubo.operations.query.api.repository.TradeEquityRepository;
import com.nubo.operations.query.api.repository.TradeRepository;
import com.nubo.operations.query.api.service.TradeService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

import static com.nubo.operations.query.api.helpers.MapperUtil.participantEntityToParticipantShortOutDto;

@Service
@RequiredArgsConstructor
@Slf4j
public class TradeServiceImpl implements TradeService {

    private final TradeRepository tradeRepository;
    private final SettlementRepository settlementRepository;
    private final TradeEquityRepository tradeEquityRepository;

    @Override
    @Transactional
    public PageResponseOutDto<TradeOutDto> findAllTrades(Pageable pageable, TradeParams tradeParams, Boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllTradesV1(pageable, tradeParams, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<TradeOutDto> findAllTradesV1(Pageable pageable, TradeParams tradeParams, Boolean all) {
        log.info("Start method findAllTradesV1 with page: {} and size: {} and params: {}", pageable.getPageNumber(),
                pageable.getPageSize(), tradeParams);

        if (Boolean.TRUE.equals(all)) {
            Specification<TradeEntity> specification = tradeEntitySpecification(tradeParams);
            List<TradeEntity> allTradeEntities = tradeRepository.findAll(specification);

            List<TradeOutDto> tradeOutDtoList = allTradeEntities.stream()
                    .map(MapperUtil::tradeEntityToTradeOutDto)
                    .toList();

            PageResponseOutDto<TradeOutDto> response = MapperPageUtil.pageToPageResponseOutDto(tradeOutDtoList, 0,
                    tradeOutDtoList.size(),
                    tradeOutDtoList.size());
            log.info("End method findAllTradesV1, found: {}", response);
            return response;
        } else {
            Page<TradeEntity> tradeEntityPage = tradeRepository.findAll(tradeEntitySpecification(tradeParams),
                    pageable);
            List<TradeOutDto> tradeOutDtoList = tradeEntityPage.getContent().stream()
                    .map(MapperUtil::tradeEntityToTradeOutDto)
                    .toList();

            PageResponseOutDto<TradeOutDto> response = MapperPageUtil.pageToPageResponseOutDto(tradeOutDtoList,
                    tradeEntityPage);
            log.info("End method findAllTradesV1, found: {}", response);
            return response;
        }
    }

    @Override
    public PageResponseOutDto<Long> findAllTradeIds(Pageable pageable, Long matchId, LocalDate startMatchDate,
            LocalDate endMatchDate,
            LocalDate startClearingDate,
            LocalDate endClearingDate, Boolean onlyOperation) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            UserNuboData userNuboData = ApplicationUtils.getUserNuboData();
            Long participantId = UserTypeEnum.EXTERNAL.equals(userNuboData.userTypeEnum())
                    ? userNuboData.participantId()
                    : null;
            return findAllTradeIdsV1(pageable, matchId, startMatchDate, endMatchDate,
                    startClearingDate, endClearingDate, onlyOperation, participantId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public PageResponseOutDto<Long> findAllCustodianTradeIds(Pageable pageable, Long matchId,
            LocalDate startMatchDate, LocalDate endMatchDate,
            LocalDate startClearingDate, LocalDate endClearingDate, Boolean onlyOperation) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            // Sin restricción de participante: busca folios en todos los custodios.
            return findAllTradeIdsV1(pageable, matchId, startMatchDate, endMatchDate,
                    startClearingDate, endClearingDate, onlyOperation, null);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<Long> findAllTradeIdsV1(
            Pageable pageable,
            Long matchId,
            LocalDate startMatchDate,
            LocalDate endMatchDate,
            LocalDate startClearingDate,
            LocalDate endClearingDate,
            Boolean onlyOperation,
            Long participantId) {
        log.info(
                "Start method findAllTradeIdsV1 with page: {}, size: {}, matchId: {}, " +
                        "startMatchDate: {}, endMatchDate: {}, startClearingDate: {}, endClearingDate: {}, onlyOperation: {}",
                pageable.getPageNumber(),
                pageable.getPageSize(),
                matchId,
                startMatchDate,
                endMatchDate,
                startClearingDate,
                endClearingDate,
                onlyOperation);

        Specification<TradeEntity> specification = TradeSpecificationFactory.createTradeIdsFilter(
                matchId,
                participantId,
                onlyOperation,
                startMatchDate,
                endMatchDate,
                startClearingDate,
                endClearingDate);

        Page<TradeEntity> tradeEntityPage = tradeRepository.findAll(specification, pageable);

        Page<Long> tradeIdPage = tradeEntityPage.map(TradeEntity::getMatchId);

        List<Long> tradeIdList = tradeIdPage.getContent();

        log.debug("End method findAllTradeIdsV1, number of Trade IDs found: {}", tradeIdList.size());

        PageResponseOutDto<Long> response = MapperPageUtil.pageToPageResponseOutDto(tradeIdList, tradeIdPage);
        log.info("End method findAllTradeIdsV1, response: {}", response);
        return response;
    }

    @Override
    public PageResponseOutDto<TradeOutDto> findAllTradesDynamic(
            Pageable pageable,
            DynamicFilter dynamicFilter,
            TradeParams tradeParams) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllTradesDynamicV1(pageable, dynamicFilter, tradeParams);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    public PageResponseOutDto<TradeOutDto> findAllTradesDynamicV1(
            Pageable pageable,
            DynamicFilter dynamicFilter,
            TradeParams tradeParams) {
        log.info("Searching trades with combined filters and dynamic search using dynamic datasource");

        UserNuboData userNuboData = ApplicationUtils.getUserNuboData();
        Long participantId = UserTypeEnum.EXTERNAL.equals(userNuboData.userTypeEnum())
                ? userNuboData.participantId()
                : null;
        Specification<TradeEntity> spec = TradeSpecificationFactory.createCombinedFilter(
                tradeParams, participantId, dynamicFilter);

        Page<TradeEntity> pagedResult = tradeRepository.findAll(spec, pageable);

        List<TradeOutDto> tradeOutDtoList = pagedResult.getContent().stream()
                .map(MapperUtil::tradeEntityToTradeOutDto)
                .toList();

        return MapperPageUtil.pageToPageResponseOutDto(tradeOutDtoList, pagedResult);
    }

    @Override
    @Transactional
    public PageResponseOutDto<TradeCustodianOutDto> findCustodianTrades(
            Pageable pageable, TradeParams tradeParams, Boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findCustodianTradesV1(pageable, tradeParams, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<TradeCustodianOutDto> findCustodianTradesV1(
            Pageable pageable,
            TradeParams tradeParams,
            Boolean all) {
        log.info("Start findCustodianTradesV1 page: {} size: {} params: {}",
                pageable.getPageNumber(),
                pageable.getPageSize(),
                tradeParams);
        UserNuboData userNuboData = ApplicationUtils.getUserNuboData();

        Specification<TradeEntity> spec;
        if (UserTypeEnum.EXTERNAL.equals(userNuboData.userTypeEnum())) {
            if (userNuboData.isParticipantCustodian()) {
                // ESCENARIO 2 external custodian
                // validate country col, peru
                String countryCode = userNuboData.participantCountryCode();
                if (CountryCodeEnum.isAllowedColombiaOrPeru(countryCode)) {
                    spec = TradeSpecificationFactory
                            .createCustodianTradeFilterWithCustodian(tradeParams, userNuboData.participantId());
                } else {
                    // Not allow country empty data
                    return MapperPageUtil.pageToPageResponseOutDto(
                            Collections.emptyList(),
                            0,
                            0,
                            0);
                }

            } else {
                // ESCENARIO 3 external noncustodian
                spec = TradeSpecificationFactory
                        .createCustodianTradeFilter(tradeParams, userNuboData.participantId());
            }

        } else {
            // ESCENARIO 1 internal
            spec = TradeSpecificationFactory
                    .createCustodianTradeFilter(tradeParams, null);
        }
        PageResponseOutDto<TradeCustodianOutDto> response = executeQuery(pageable, all, spec, userNuboData);
        log.info("End findCustodianTradesV1, {}", response);
        return response;
    }

    private PageResponseOutDto<TradeCustodianOutDto> executeQuery(
            Pageable pageable,
            Boolean all,
            Specification<TradeEntity> spec,
            UserNuboData userNuboData) {

        if (Boolean.TRUE.equals(all)) {
            List<TradeEntity> entities = tradeRepository.findAll(spec);
            List<TradeCustodianOutDto> dtoList = entities.stream()
                    .map(trade -> buildTradeCustodianOutDto(
                            trade,
                            userNuboData))
                    .toList();

            return MapperPageUtil.pageToPageResponseOutDto(
                    dtoList,
                    0,
                    dtoList.size(),
                    dtoList.size());
        }

        Page<TradeEntity> page = tradeRepository.findAll(spec, pageable);
        List<TradeCustodianOutDto> dtoList = page.getContent().stream()
                .map(trade -> buildTradeCustodianOutDto(
                        trade,
                        userNuboData))
                .toList();

        return MapperPageUtil.pageToPageResponseOutDto(
                dtoList,
                page);
    }

    private TradeCustodianOutDto buildTradeCustodianOutDto(TradeEntity tradeEntity, UserNuboData userNuboData) {
        // settlements
        List<SettlementEntity> settlementList = settlementRepository.findByTradeId(tradeEntity.getId());
        // DTO settlement
        TradeCustodianOutDto tradeCustodianOutDto = MapperUtil.tradeEntityToTradeCustodianOutDto(tradeEntity);
        tradeCustodianOutDto.setCustodianBuy(null);
        tradeCustodianOutDto.setCustodianSell(null);

        tradeEquityRepository.findById(tradeEntity.getId())
                .ifPresent(tradeEquity -> {
                    tradeCustodianOutDto
                            .setTraderBuy(ApplicationUtils.concatNullable(tradeEntity.getEnteringFirmBuy(),
                                    tradeEquity.getForeignBrokerBuy()));
                    tradeCustodianOutDto
                            .setTraderSell(ApplicationUtils.concatNullable(tradeEntity.getEnteringFirmSell(),
                                    tradeEquity.getForeignBrokerSell()));
                });

        List<SettlementEntity> settlementListByBuy = settlementList.stream()
                .filter(s -> s.getSide() != null && SideEnum.BUY.getId().equals(s.getSide().getId())).toList();
        List<SettlementEntity> settlementListBySell = settlementList.stream()
                .filter(s -> s.getSide() != null && SideEnum.SELL.getId().equals(s.getSide().getId())).toList();

        tradeCustodianOutDto.setNumberOfFractionsByBuy(settlementListByBuy.size());
        tradeCustodianOutDto.setNumberOfFractionsBySell(settlementListBySell.size());

        if (UserTypeEnum.INTERNAL.equals(userNuboData.userTypeEnum())) {
            tradeCustodianOutDto.setCustodianBuy(
                    resolveCustodian(settlementList, SideEnum.BUY, userNuboData.participantId(), true));
            tradeCustodianOutDto.setCustodianSell(
                    resolveCustodian(settlementList, SideEnum.SELL, userNuboData.participantId(), true));
            return tradeCustodianOutDto;
        }

        // EXTERNAL
        boolean isParticipantBuy = tradeEntity.getParticipantBuy() != null
                && tradeEntity.getParticipantBuy().getId().equals(userNuboData.participantId());
        if (!isParticipantBuy) {
            tradeCustodianOutDto.setParticipantBuy(null);
            tradeCustodianOutDto.setNumberOfFractionsByBuy(null);
            tradeCustodianOutDto.setSourceQuoteBuyType(null);
            tradeCustodianOutDto.setTraderBuy(null);
        }

        boolean isParticipantSell = tradeEntity.getParticipantSell() != null
                && tradeEntity.getParticipantSell().getId().equals(userNuboData.participantId());
        if (!isParticipantSell) {
            tradeCustodianOutDto.setParticipantSell(null);
            tradeCustodianOutDto.setNumberOfFractionsBySell(null);
            tradeCustodianOutDto.setSourceQuoteSellType(null);
            tradeCustodianOutDto.setTraderSell(null);
        }

        ParticipantShortOutDto custodianBuy = resolveCustodian(settlementList, SideEnum.BUY,
                userNuboData.participantId(), false);
        if (custodianBuy != null) {
            if (userNuboData.isParticipantCustodian()
                    && Objects.equals(custodianBuy.getId(), userNuboData.participantId())) {
                tradeCustodianOutDto.setCustodianBuy(custodianBuy);

                List<SettlementEntity> settlementListByBuyByCustodian = settlementListByBuy.stream()
                        .filter(s -> s.getCustodian() != null
                                && s.getCustodian().getId().equals(custodianBuy.getId()))
                        .toList();
                tradeCustodianOutDto.setNumberOfFractionsByBuy(settlementListByBuyByCustodian.size());

                if (settlementListByBuyByCustodian.size() >= 1) {
                    tradeCustodianOutDto.setSourceQuoteBuyType(
                            MapperUtil.typeEntityToTypeOutDto(tradeEntity.getSourceQuoteBuyType()));
                }
            } else if (Objects.equals(tradeEntity.getParticipantBuy().getId(), userNuboData.participantId())) {
                tradeCustodianOutDto.setCustodianBuy(custodianBuy);
            }
        }

        ParticipantShortOutDto custodianSell = resolveCustodian(settlementList, SideEnum.SELL,
                userNuboData.participantId(), false);
        if (custodianSell != null) {
            if (userNuboData.isParticipantCustodian()
                    && Objects.equals(custodianSell.getId(), userNuboData.participantId())) {
                tradeCustodianOutDto.setCustodianSell(custodianSell);

                List<SettlementEntity> settlementListBySellByCustodian = settlementListBySell.stream()
                        .filter(s -> s.getCustodian() != null
                                && s.getCustodian().getId().equals(custodianSell.getId()))
                        .toList();
                tradeCustodianOutDto.setNumberOfFractionsBySell(settlementListBySellByCustodian.size());

                if (settlementListBySellByCustodian.size() >= 1) {
                    tradeCustodianOutDto.setSourceQuoteSellType(
                            MapperUtil.typeEntityToTypeOutDto(tradeEntity.getSourceQuoteSellType()));
                }
            } else if (Objects.equals(tradeEntity.getParticipantSell().getId(), userNuboData.participantId())) {
                tradeCustodianOutDto.setCustodianSell(custodianSell);
            }
        }

        return tradeCustodianOutDto;
    }

    private static ParticipantShortOutDto resolveCustodian(List<SettlementEntity> settlementList, SideEnum sideEnum,
            Long participantIdActive, boolean isInternal) {
        List<ParticipantEntity> admittedCustodians = null;

        if (isInternal) {
            admittedCustodians = settlementList.stream()
                    .filter(s -> s.getSide() != null &&
                            sideEnum.getId().equals(s.getSide().getId()))
                    .filter(s -> ((s.getCustodianStatus() != null) &&
                            (StatusEnum.CUSTODIAN_ADMITTED.getId()
                                    .equals(s.getCustodianStatus().getId())
                                    || StatusEnum.CUSTODIAN_TRANSFERRED.getId()
                                            .equals(s.getCustodianStatus().getId()))))
                    .map(SettlementEntity::getCustodian)
                    .filter(Objects::nonNull)
                    .toList();
        } else {
            admittedCustodians = settlementList.stream()
                    .filter(s -> s.getSide() != null &&
                            sideEnum.getId().equals(s.getSide().getId()))
                    .filter(s -> s.getCustodian() != null && s.getCustodian().getId().equals(participantIdActive))
                    .filter(s -> ((s.getCustodianStatus() != null) &&
                            (StatusEnum.CUSTODIAN_ADMITTED.getId()
                                    .equals(s.getCustodianStatus().getId())
                                    || StatusEnum.CUSTODIAN_TRANSFERRED.getId()
                                            .equals(s.getCustodianStatus().getId()))))
                    .map(SettlementEntity::getCustodian)
                    .filter(Objects::nonNull)
                    .toList();
        }

        if (admittedCustodians.isEmpty()) {
            return null;
        }

        Set<Long> uniqueCustodianIds = admittedCustodians.stream()
                .map(ParticipantEntity::getId)
                .collect(Collectors.toSet());

        if (uniqueCustodianIds.size() == 1) {
            return participantEntityToParticipantShortOutDto(admittedCustodians.get(0));
        } else if (uniqueCustodianIds.size() > 1) {
            return participantEntityToParticipantShortOutDto(ParticipantEntity.builder().code("MULTIPLE").build());
        }
        return null;
    }

    @Override
    public TradeOutDto findTradeById(Long tradeId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findTradeByIdV1(tradeId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private TradeOutDto findTradeByIdV1(Long tradeId) {
        log.info("Start method findTradeByIdV1, tradeId -> {}", tradeId);

        UserNuboData userNuboData = ApplicationUtils.getUserNuboData();
        Long participantId = UserTypeEnum.EXTERNAL.equals(userNuboData.userTypeEnum())
                ? userNuboData.participantId()
                : null;
        TradeEntity tradeEntity = validateTradeByParticipant(tradeId, participantId);
        TradeOutDto tradeOutDto = MapperUtil.tradeEntityToTradeOutDto(tradeEntity);

        log.info("End method findTradeByIdV1, tradeId -> {}", tradeId);
        return tradeOutDto;
    }

    private TradeEntity validateTradeByParticipant(Long tradeId, Long participantId) {
        if (tradeId == null) {
            throw new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        return tradeRepository.findByIdAndOptionalParticipantId(tradeId, participantId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private Specification<TradeEntity> tradeEntitySpecification(TradeParams tradeParams) {
        UserNuboData userNuboData = ApplicationUtils.getUserNuboData();
        Long participantId = UserTypeEnum.EXTERNAL.equals(userNuboData.userTypeEnum())
                ? userNuboData.participantId()
                : null;
        return TradeSpecificationFactory.createStandardFilter(tradeParams, participantId);
    }

    @Override
    public long countAllTrades() {
        return tradeRepository.count();
    }
}

```

## src/main/java/com/nubo/operations/query/api/service/impl/ValidateCountedOperationServiceImpl.java

```java
package com.nubo.operations.query.api.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Set;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import com.nubo.operations.query.api.application.properties.PropertiesContext;
import com.nubo.operations.query.api.application.util.ApplicationUtils;
import com.nubo.operations.query.api.client.operation.rules.models.dto.request.StatusUpdateTradeInDto;
import com.nubo.operations.query.api.client.operation.rules.models.dto.response.BusinessRuleOutDto;
import com.nubo.operations.query.api.client.operation.rules.models.dto.response.StatusUpdateTradeOutDto;
import com.nubo.operations.query.api.client.operation.rules.service.OperationBusinessRuleClient;
import com.nubo.operations.query.api.exception.ServiceException;
import com.nubo.operations.query.api.exception.error.ErrorCode;
import com.nubo.operations.query.api.helpers.MapperUtil;
import com.nubo.operations.query.api.models.domain.UserNuboData;
import com.nubo.operations.query.api.models.dto.response.CorrectionDropdownDataDto;
import com.nubo.operations.query.api.models.dto.response.RuleDetailOutDto;
import com.nubo.operations.query.api.models.dto.response.StatusOutDto;
import com.nubo.operations.query.api.models.dto.response.TradeValidationOutDto;
import com.nubo.operations.query.api.models.entity.SettlementEntity;
import com.nubo.operations.query.api.models.entity.SideEntity;
import com.nubo.operations.query.api.models.entity.TradeEntity;
import com.nubo.operations.query.api.models.enums.BusinessRuleEnum;
import com.nubo.operations.query.api.models.enums.CorrectionStatusEnum;
import com.nubo.operations.query.api.models.enums.CorrectionTypeEnum;
import com.nubo.operations.query.api.models.enums.SideEnum;
import com.nubo.operations.query.api.models.enums.StatusEnum;
import com.nubo.operations.query.api.models.enums.TypeEnum;
import com.nubo.operations.query.api.models.enums.UserTypeEnum;
import com.nubo.operations.query.api.models.enums.VersionApiEnum;
import com.nubo.operations.query.api.repository.SettlementRepository;
import com.nubo.operations.query.api.repository.SideRepository;
import com.nubo.operations.query.api.repository.TradeRepository;
import com.nubo.operations.query.api.service.ValidateCountedOperationService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class ValidateCountedOperationServiceImpl implements ValidateCountedOperationService {

    private final TradeRepository tradeRepository;
    private final SettlementRepository settlementRepository;
    private final SideRepository sideRepository;
    private final OperationBusinessRuleClient operationBusinessRuleClient;

    @Override
    @Transactional(readOnly = true)
    public TradeValidationOutDto validateAllowedTradeAssignment(Long tradeId, String sideId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateAllowedTradeAssignmentV1(tradeId, sideId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private TradeValidationOutDto validateAllowedTradeAssignmentV1(Long tradeId, String sideId) {
        log.info("Start method validateAllowedTradeAssignmentV1, tradeId -> {}, sideId -> {}", tradeId, sideId);

        StatusUpdateTradeOutDto validateUpdateStatusTrade = operationBusinessRuleClient.validateUpdateStatusTrade(
                StatusUpdateTradeInDto.builder()
                        .tradeId(tradeId)
                        .sideId(sideId)
                        .code(BusinessRuleEnum.RULE_ASSIGNMENT_REASSIGNMENT_BY_SIDE)
                        .build());
        TradeEntity tradeEntity = validateTrade(tradeId);

        CorrectionTypeEnum correctionType = hasLocalAssignment(tradeEntity, sideId)
                ? CorrectionTypeEnum.EXTERNAL
                : CorrectionTypeEnum.LOCAL;
        Boolean isOwnPosition = false;
        if (sideId.equals(SideEnum.BUY.getId())) {
            isOwnPosition = tradeEntity.getSourceQuoteBuyType() != null && tradeEntity.getSourceQuoteBuyType().getId()
                    .equals(TypeEnum.OWN_POSITION_POINT_ORIGIN.getId());
        } else if (sideId.equals(SideEnum.SELL.getId())) {
            isOwnPosition = tradeEntity.getSourceQuoteSellType() != null && tradeEntity.getSourceQuoteSellType().getId()
                    .equals(TypeEnum.OWN_POSITION_POINT_ORIGIN.getId());
        }

        boolean isValidAssignment = Boolean.TRUE.equals(validateUpdateStatusTrade.getIsValid());
        boolean isValidCorrection = false;
        int maxFractions = 0;
        Boolean hasPendingCorrection = false;
        String descriptionCorrection = null;
        if (isValidAssignment) {
            maxFractions = getValueBusinessRule(BusinessRuleEnum.RULE_OPERATION_ASSIGNMENT_MAXIMUM_FRACTION_LIMIT);
        } else {
            List<SettlementEntity> settlementEntityList = settlementRepository.findByTradeIdAndSideId(tradeId, sideId);
            hasPendingCorrection = validateHasPendingCorrection(tradeEntity, settlementEntityList, sideId);

            StatusUpdateTradeOutDto statusUpdateTradeOutDto = operationBusinessRuleClient
                    .validateUpdateStatusTrade(StatusUpdateTradeInDto.builder()
                            .tradeId(tradeEntity.getId())
                            .sideId(sideId)
                            .code(BusinessRuleEnum.RULE_OPERATION_CORRECTION)
                            .build());
            isValidCorrection = Boolean.TRUE.equals(statusUpdateTradeOutDto.getIsValid());
            descriptionCorrection = statusUpdateTradeOutDto.getDescription();
            maxFractions = getValueBusinessRule(BusinessRuleEnum.RULE_OPERATION_CORRECTION_MAXIMUM_FRACTION_LIMIT);
        }

        TradeValidationOutDto tradeValidationOutDto = TradeValidationOutDto.builder()
                .isValidAssignment(isValidAssignment)
                .maxFractions(maxFractions)
                .isOwnPosition(isOwnPosition)
                .assignation(RuleDetailOutDto.builder()
                        .allowed(isValidAssignment)
                        .description(validateUpdateStatusTrade.getDescription())
                        .build())
                .isValidCorrection(isValidCorrection)
                .billable(true)
                .hasPendingCorrection(hasPendingCorrection)
                .correctionType(correctionType)
                .correction(RuleDetailOutDto.builder()
                        .allowed(isValidCorrection)
                        .description(descriptionCorrection)
                        .build())
                .build();

        log.info("End method validateAllowedTradeAssignmentV1, tradeValidationOutDto -> {}",
                tradeValidationOutDto);
        return tradeValidationOutDto;
    }

    private Integer getValueBusinessRule(BusinessRuleEnum businessRuleEnum) {
        BusinessRuleOutDto businessRule = operationBusinessRuleClient.findBusinessRuleByCode(businessRuleEnum);
        if (ObjectUtils.isEmpty(businessRule) || ObjectUtils.isEmpty(businessRule.getValue())) {
            throw new ServiceException(ErrorCode.INVALID_BUSINESS_RULE_VALUE, HttpStatus.BAD_REQUEST);
        }
        return ApplicationUtils.parseIntegerSafely(businessRule.getValue(), ErrorCode.INVALID_BUSINESS_RULE_VALUE);
    }

    private boolean validateHasPendingCorrection(TradeEntity tradeEntity, List<SettlementEntity> settlementEntityList,
            String sideId) {
        Set<Long> validPendingIds = Set.of(
                StatusEnum.CORRECTION_REQUEST.getId());

        boolean hasPendingCorrectionSettlement = settlementEntityList.stream()
                .anyMatch(settlement -> settlement.getStatus() != null
                        && validPendingIds.contains(settlement.getStatus().getId()));

        if (SideEnum.BUY.getId().equals(sideId)) {
            return tradeEntity.getBuyStatus() != null
                    && validPendingIds.contains(tradeEntity.getBuyStatus().getId().longValue())
                    || hasPendingCorrectionSettlement;
        } else if (SideEnum.SELL.getId().equals(sideId)) {
            return tradeEntity.getSellStatus() != null
                    && validPendingIds.contains(tradeEntity.getSellStatus().getId().longValue())
                    || hasPendingCorrectionSettlement;
        }

        return false;
    }

    private boolean hasLocalAssignment(TradeEntity tradeEntity, String sideId) {
        if (SideEnum.BUY.getId().equals(sideId)) {
            return tradeEntity.getMasterAccountIndicatorBuy() != null
                    && tradeEntity.getMasterAccountIndicatorBuy();
        } else if (SideEnum.SELL.getId().equals(sideId)) {
            return tradeEntity.getMasterAccountIndicatorSell() != null
                    && tradeEntity.getMasterAccountIndicatorSell();
        }
        return false;
    }

    @Override
    public CorrectionDropdownDataDto getCorrectionDropdownData(Long tradeId, String sideId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return getCorrectionDropdownDataV1(tradeId, sideId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private CorrectionDropdownDataDto getCorrectionDropdownDataV1(Long tradeId, String sideId) {
        log.info("Start method getCorrectionDropdownDataV1, tradeId -> {}, sideId -> {}", tradeId, sideId);

        TradeEntity tradeEntity = validateTrade(tradeId);
        boolean isMasterAccount = hasLocalAssignment(tradeEntity, sideId);

        String correctionType = isMasterAccount ? CorrectionTypeEnum.EXTERNAL.getValue()
                : CorrectionTypeEnum.LOCAL.getValue();

        UserNuboData userNuboData = ApplicationUtils.getUserNuboData();
        Long participantId = UserTypeEnum.EXTERNAL.equals(userNuboData.userTypeEnum())
                ? userNuboData.participantId()
                : null;

        List<StatusOutDto> availableStatuses = getAvailableStatusesForCorrection(participantId == null, sideId);

        CorrectionDropdownDataDto result = CorrectionDropdownDataDto.builder()
                .availableStatuses(availableStatuses)
                .correctionType(correctionType)
                .userType(userNuboData.userTypeEnum().toString())
                .build();

        log.info("End method getCorrectionDropdownDataV1, correctionType -> {}, userType -> {}, statusCount -> {}",
                correctionType, userNuboData.userTypeEnum(), availableStatuses.size());
        return result;
    }

    private List<StatusOutDto> getAvailableStatusesForCorrection(boolean isInternalUser, String sideEnum) {
        List<StatusOutDto> statuses = new ArrayList<>();

        if (!isInternalUser) {
            statuses.add(MapperUtil.mapCorrectionStatusToDto(CorrectionStatusEnum.ACCEPT_DEFAULT_CORRECTION));
            return statuses;
        }

        if (SideEnum.BUY.getId().equals(sideEnum)) {
            statuses.add(MapperUtil.mapCorrectionStatusToDto(CorrectionStatusEnum.ACCEPT_BUY_CORRECTION));
            statuses.add(MapperUtil.mapCorrectionStatusToDto(CorrectionStatusEnum.ACCEPT_NO_CHARGE_BUY_CORRECTION));
        } else if (SideEnum.SELL.getId().equals(sideEnum)) {
            statuses.add(MapperUtil.mapCorrectionStatusToDto(CorrectionStatusEnum.ACCEPT_SELL_CORRECTION));
            statuses.add(MapperUtil.mapCorrectionStatusToDto(CorrectionStatusEnum.ACCEPT_NO_CHARGE_SELL_CORRECTION));
        }

        return statuses;
    }

    private TradeEntity validateTrade(Long tradeId) {
        if (tradeId == null) {
            throw new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        return tradeRepository.findById(tradeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private SideEntity validateSide(String sideId) {
        if (sideId == null) {
            throw new ServiceException(ErrorCode.SIDE_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        return sideRepository.findById(sideId)
                .orElseThrow(() -> new ServiceException(ErrorCode.SIDE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

}

```

## src/main/java/com/nubo/operations/query/api/web/controller/AllTradeRestController.java

```java
package com.nubo.operations.query.api.web.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.operations.query.api.models.dto.response.AllTradeOutDto;
import com.nubo.operations.query.api.models.dto.response.CalculationTotalAmountOutDto;
import com.nubo.operations.query.api.service.AllTradeService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "All Trade")
@RequestMapping("/{version}/all-trade")
@RestController
@RequiredArgsConstructor
public class AllTradeRestController {

    private final AllTradeService allTradeService;

    @Operation(summary = "Trade, TradeEquity, Settlement by TradeId", description = "Trade, TradeEquity and Settlement by TradeId")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = AllTradeOutDto.class)))
    })
    @GetMapping("/{tradeId}")
    public ResponseEntity<AllTradeOutDto> findAllByTradeId(@PathVariable Long tradeId) {
        return ResponseEntity.ok(allTradeService.findAllByTradeId(tradeId));
    }

    @Operation(summary = "Calculation total amount trade by side", description = "Calculation total amount trade by side")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = CalculationTotalAmountOutDto.class)))
    })
    @GetMapping("/calculation-total-amount/trade/{tradeId}/side/{sideId}")
    public ResponseEntity<CalculationTotalAmountOutDto> calculationTotalAmountByTradeAndSide(
            @PathVariable Long tradeId,
            @PathVariable String sideId) {
        return ResponseEntity.ok(allTradeService.calculationTotalAmountByTradeAndSide(tradeId, sideId));
    }

}

```

## src/main/java/com/nubo/operations/query/api/web/controller/AssignmentClosureController.java

```java
package com.nubo.operations.query.api.web.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.operations.query.api.models.dto.request.AssignmentClosureInDto;
import com.nubo.operations.query.api.models.dto.response.AssignmentClosureOutDto;
import com.nubo.operations.query.api.service.AssignmentClosureService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@Tag(name = "Assignment Closure")
@RestController
@RequestMapping("/{version}/assignment-closure")
@RequiredArgsConstructor
public class AssignmentClosureController {

    private final AssignmentClosureService assignmentClosureService;

    @Operation(summary = "Get assignment-closure preview data by tradeIds",
            description = "Returns table data (matchDate, matchId, clearingDate, side, participant) for selected trades.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response",
                    content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                                schema = @Schema(implementation = AssignmentClosureOutDto[].class)))
    })
    @PostMapping("/search-by-side")
    public ResponseEntity<List<AssignmentClosureOutDto>> searchBySide(
            @Valid @RequestBody List<AssignmentClosureInDto> assignmentClosureInDtoList) {
        return ResponseEntity.status(HttpStatus.OK)
                .body(assignmentClosureService.searchBySide(assignmentClosureInDtoList));
    }
}

```

## src/main/java/com/nubo/operations/query/api/web/controller/CalculationCountedRestController.java

```java
package com.nubo.operations.query.api.web.controller;

import com.nubo.operations.query.api.models.dto.request.CalculationInDto;
import com.nubo.operations.query.api.models.dto.request.CalculationIvaInDto;
import com.nubo.operations.query.api.models.dto.response.CalculationOutDto;
import com.nubo.operations.query.api.models.enums.AccountSourceTypeEnum;
import com.nubo.operations.query.api.service.CalculationCountedService;
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
import org.springframework.web.bind.annotation.*;

@Tag(name = "Calculation Counted")
@RestController
@RequestMapping("/{version}/calculation/counted-operation")
@RequiredArgsConstructor
public class CalculationCountedRestController {

    private final CalculationCountedService calculationCountedService;

    @Operation(summary = "Calculation settlement", description = "Calculation settlement")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = CalculationOutDto.class))) })
    @PostMapping("/trade/{tradeId}")
    public ResponseEntity<CalculationOutDto> calculationSettlementWithIva(@PathVariable Long tradeId,
            @Valid @RequestBody CalculationIvaInDto calculationIvaInDto) {
        return ResponseEntity.ok(calculationCountedService.calculationSettlementWithIva(tradeId, calculationIvaInDto));
    }

    @Operation(summary = "Calculation settlement init by country iva",
            description = "Calculation settlement init by country iva")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = CalculationOutDto.class))) })
    @PostMapping("/trade/{tradeId}/country/{countryId}")
    public ResponseEntity<CalculationOutDto> calculationSettlementByCountryId(@PathVariable Long tradeId,
            @PathVariable Long countryId,
            @RequestParam String accountNumber, @RequestParam AccountSourceTypeEnum accountSourceType,
            @Valid @RequestBody CalculationInDto calculationInDto) {
        return ResponseEntity
                .ok(calculationCountedService.calculationSettlementByCountryId(tradeId, countryId, calculationInDto, accountNumber, accountSourceType));
    }

}

```

## src/main/java/com/nubo/operations/query/api/web/controller/PackageCustodianRestController.java

```java
package com.nubo.operations.query.api.web.controller;

import com.nubo.operations.query.api.exception.ServiceException;
import com.nubo.operations.query.api.exception.error.ErrorCode;
import com.nubo.operations.query.api.exception.error.ErrorResponse;
import com.nubo.operations.query.api.models.domain.PackageCustodianParams;
import com.nubo.operations.query.api.models.dto.response.InvestorAccountOutDto;
import com.nubo.operations.query.api.models.dto.response.PackageCustodianDetailResponseOutDto;
import com.nubo.operations.query.api.models.dto.response.PackageCustodianOutDto;
import com.nubo.operations.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.query.api.service.PackageCustodianService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.constraints.Min;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Set;

@Tag(name = "Package Custodian")
@RestController
@RequestMapping("/{version}/package-custodian")
@RequiredArgsConstructor
@Validated
public class PackageCustodianRestController {

    private static final int MAX_PAGE_SIZE = 100;

    private static final Set<String> ALLOWED_SORT_FIELDS = Set.of(
            "tradeId", "registrationDate", "clearingDate", "returnClearingDate",
            "price", "rate", "fraction", "securitiesAccount", "quantity",
            "commissionPercentage", "commissionAmount", "valTaxAmount",
            "grossValue", "netTotal", "transferValue", "returnTurnoverValue",
            "operationTypeCode");

    private final PackageCustodianService packageCustodianService;

    @Operation(summary = "All package custodian", description = "All package custodian")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = PackageCustodianOutDto[].class))) })
    @GetMapping
    public ResponseEntity<PageResponseOutDto<PackageCustodianOutDto>> findAllPackageCustodian(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "settlementDate") String sort,
            @RequestParam(defaultValue = "desc") String order,
            @RequestParam(defaultValue = "false") boolean all,
            @Parameter(example = "2025-01-01") @RequestParam(required = false) LocalDate clearingDate,
            @RequestParam(required = false) String packageNumber,
            @RequestParam(required = false) Long securityTittleId,
            @RequestParam(required = false) Long custodianId,
            @RequestParam(required = false) Long participantId,
            @RequestParam(required = false) Long operationTypeId,
            @Parameter(example = "2025-01-01") @RequestParam(required = false) LocalDate registrationDateFrom,
            @RequestParam(required = false) Long statusId,
            @RequestParam(required = false) Long identificationTypeId,
            @RequestParam(required = false) String investorDocumentNumber,
            @RequestParam(required = false) Long folio
    ) {
        PackageCustodianParams packageCustodianParams = PackageCustodianParams.allPackageCustodianParams(page, size, sort, order, all,
                clearingDate, packageNumber, securityTittleId,  custodianId, participantId, operationTypeId,
                registrationDateFrom, statusId, identificationTypeId, investorDocumentNumber, folio);
        return ResponseEntity.ok(packageCustodianService.findAllPackageCustodian(packageCustodianParams));
    }

    @Operation(summary = "Detalle de paquete (HU-14111)",
            description = "Lista de puntas (operaciones/fracciones) que conforman un paquete, "
                    + "trazabilidad completa vía PACKAGE_DETAIL -> TRADE + SETTLEMENT, más totales "
                    + "agregados (cantidad, monto de salida, comisión, impuesto, monto neto) calculados "
                    + "sobre TODAS las puntas del paquete, no solo la página actual. "
                    + "Aplica el mismo control de acceso que el listado general: usuarios "
                    + "externos custodios solo ven paquetes trasladados a ellos, usuarios "
                    + "externos corredores solo ven paquetes donde participan.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response",
                    content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                            schema = @Schema(implementation = PackageCustodianDetailResponseOutDto.class))),
            @ApiResponse(responseCode = "404", description = "Paquete no encontrado o no autorizado",
                    content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                            schema = @Schema(implementation = ErrorResponse.class)))
    })
    @GetMapping("/{packageCustodianId}/detail")
    public ResponseEntity<PackageCustodianDetailResponseOutDto> findPackageCustodianDetail(
            @PathVariable @Min(1) Long packageCustodianId,
            @RequestParam(defaultValue = "0") @Min(0) int page,
            @RequestParam(defaultValue = "10") @Min(1) int size,
            @Parameter(description = "Campo de orden. Valores permitidos: "
                    + "tradeId, registrationDate, clearingDate, returnClearingDate, price, rate, "
                    + "fraction, securitiesAccount, quantity, commissionPercentage, commissionAmount, "
                    + "valTaxAmount, grossValue, netTotal, transferValue, returnTurnoverValue, operationTypeCode")
            @RequestParam(required = false) String sort,
            @RequestParam(defaultValue = "asc") String order) {

        int safeSize = Math.min(Math.max(size, 1), MAX_PAGE_SIZE);
        Pageable pageable;

        if (sort != null && !sort.isBlank()) {
            if (!ALLOWED_SORT_FIELDS.contains(sort)) {
                throw new ServiceException(ErrorCode.INVALID_REQUEST,
                        "Campo de orden no soportado: " + sort, HttpStatus.BAD_REQUEST);
            }
            Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
            pageable = PageRequest.of(Math.max(page, 0), safeSize, Sort.by(direction, sort));
        } else {
            pageable = PageRequest.of(Math.max(page, 0), safeSize);
        }

        return ResponseEntity.ok(
                packageCustodianService.findPackageCustodianDetail(packageCustodianId, pageable));
    }

    @Operation(summary = "Validate account custody process", description = "Validate account custody process")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = InvestorAccountOutDto.class))) })
    @GetMapping("/custody/account-custody/account-number/{accountNumber}/package-custodian/{packageCustodianId}")
    public ResponseEntity<InvestorAccountOutDto> validateAccountFractionAssignment(
            @PathVariable String accountNumber,
            @PathVariable Long packageCustodianId) {
        return ResponseEntity.ok(packageCustodianService.validateAccountCustodian(accountNumber, packageCustodianId));
    }
}
```

## src/main/java/com/nubo/operations/query/api/web/controller/SettlementCorrectionRestController.java

```java
package com.nubo.operations.query.api.web.controller;

import com.nubo.operations.query.api.models.domain.SettlementParams;
import com.nubo.operations.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.query.api.models.dto.response.ReassignmentCorrectionOutDto;
import com.nubo.operations.query.api.service.SettlementCorrectionService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;

@Tag(name = "SettlementCorrections")
@RestController
@RequestMapping("/{version}/settlement-corrections")
@RequiredArgsConstructor
public class SettlementCorrectionRestController {

    private final SettlementCorrectionService settlementCorrectionService;

    @Operation(summary = "All Corrections Reassignments", description = "All Corrections Reassignments")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = ReassignmentCorrectionOutDto[].class))) })
    @GetMapping("/corrections")
    public ResponseEntity<PageResponseOutDto<ReassignmentCorrectionOutDto>> findAllCorrectionsReassignment(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "requestDate") String sort,
            @RequestParam(defaultValue = "desc") String order,
            @RequestParam(defaultValue = "false") boolean all,
            @RequestParam(required = false) Long statusId,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate dateOfCorrection,
            @Parameter(example = "1") @RequestParam(required = true) Long tradeId,
            @Parameter(example = "1A") @RequestParam(required = true) String sideId) {

        SettlementParams settlementParams = SettlementParams.allReassingmentCorrections(page, size, sort, order, all,
                tradeId, sideId, statusId, dateOfCorrection);
        return ResponseEntity.ok(settlementCorrectionService.findAllCorrectionsReassignment(settlementParams));
    }
}

```

## src/main/java/com/nubo/operations/query/api/web/controller/SettlementRestController.java

```java
package com.nubo.operations.query.api.web.controller;

import com.nubo.operations.query.api.models.dto.response.SettlementSearchOutDto;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.operations.query.api.models.domain.SettlementParams;
import com.nubo.operations.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.query.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.query.api.models.entity.SettlementKey;
import com.nubo.operations.query.api.service.SettlementRedisService;
import com.nubo.operations.query.api.service.SettlementService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

import java.time.LocalDate;

@Tag(name = "Settlement")
@RestController
@RequestMapping("/{version}/settlement")
@RequiredArgsConstructor
public class SettlementRestController {

    private final SettlementService settlementService;
    private final SettlementRedisService settlementRedisService;

    @Operation(summary = "All Settlements", description = "All Settlements")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = SettlementOutDto[].class))) })
    @GetMapping
    public ResponseEntity<PageResponseOutDto<SettlementOutDto>> findAllSettlements(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "fraction") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all,
            @RequestParam(defaultValue = "false") boolean reassignment,
            @Parameter(example = "1") @RequestParam(required = true) Long tradeId,
            @Parameter(example = "1A") @RequestParam(required = false) String sideId,
            @Parameter(example = "12345") @RequestParam(required = false) String investorDocumentNumber) {

        SettlementParams settlementParams = SettlementParams.allSettlements(page, size, sort, order, all,
                tradeId, sideId, investorDocumentNumber, reassignment, null);
        return ResponseEntity.ok(settlementService.findAllSettlements(settlementParams));
    }

    @Operation(summary = "All Settlements with Dynamic Filtering", description = "All Settlements with Dynamic Filtering")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = SettlementOutDto[].class))) })
    @GetMapping("/dynamic")
    public ResponseEntity<PageResponseOutDto<SettlementOutDto>> findAllSettlementsDynamic(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) String sort,
            @RequestParam(required = false) String order,
            @Parameter(example = "1") @RequestParam(required = false) Long tradeId,
            @Parameter(example = "1A") @RequestParam(required = false) String sideId,
            @Parameter(example = "12345") @RequestParam(required = false) String investorDocumentNumber,
            @Parameter(example = "fiduciarySpecialist") @RequestParam(required = false) String fieldName,
            @Parameter(example = "true") @RequestParam(required = false) String fieldValue,
            @Parameter(example = "equals") @RequestParam(required = false) String operation) {

        Pageable pageable;
        if (sort != null && order != null) {
            Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
            Sort sorting = Sort.by(direction, sort);
            pageable = PageRequest.of(page, size, sorting);
        } else {
            pageable = PageRequest.of(page, size);
        }

        return ResponseEntity.ok(settlementService.findAllSettlementsDynamic(
                pageable, tradeId, sideId, investorDocumentNumber, fieldName, fieldValue, operation));
    }

    @Operation(summary = "Find Settlement by Id", description = "Find Settlement by Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = SettlementOutDto.class))) })
    @GetMapping("/trade/{tradeId}/fraction/{fraction}/side/{side}")
    public ResponseEntity<SettlementOutDto> findSettlementById(
            @PathVariable Long tradeId,
            @PathVariable Integer fraction,
            @PathVariable String side) {
        SettlementKey settlementKey = new SettlementKey(tradeId, fraction, side);
        return ResponseEntity.ok(settlementService.findSettlementById(settlementKey));
    }

    @Operation(summary = "Find All Settlements with Redis and Database Fallback", description = "Search settlements using Redis with automatic fallback to database if Redis is unavailable or returns no results")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = SettlementOutDto[].class))) })
    @GetMapping("/redis-with-fallback")
    public ResponseEntity<PageResponseOutDto<SettlementOutDto>> findAllSettlementsRedisWithFallback(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) String sort,
            @RequestParam(required = false) String order,
            @Parameter(example = "1") @RequestParam(required = false) Long tradeId,
            @Parameter(example = "1A") @RequestParam(required = false) String sideId,
            @Parameter(example = "12345") @RequestParam(required = false) String investorDocumentNumber,
            @Parameter(example = "fiduciarySpecialist") @RequestParam(required = false) String fieldName,
            @Parameter(example = "true") @RequestParam(required = false) String fieldValue,
            @Parameter(example = "equals") @RequestParam(required = false) String operation) {

        Pageable pageable;
        if (sort != null && order != null) {
            Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
            Sort sorting = Sort.by(direction, sort);
            pageable = PageRequest.of(page, size, sorting);
        } else {
            pageable = PageRequest.of(page, size);
        }

        return ResponseEntity
                .ok(settlementRedisService.findAllSettlementsDynamic(pageable, fieldName, fieldValue, operation,
                        tradeId, sideId, investorDocumentNumber));
    }

    @Operation(summary = "All Settlements Redis Dynamic", description = "All Settlements Redis Dynamic")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = SettlementOutDto[].class))) })
    @GetMapping("/redis")
    public ResponseEntity<PageResponseOutDto<SettlementOutDto>> findAllSettlementsRedis(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) String sort,
            @RequestParam(required = false) String order,
            @Parameter(example = "1") @RequestParam(required = false) Long tradeId,
            @Parameter(example = "1A") @RequestParam(required = false) String sideId,
            @Parameter(example = "12345") @RequestParam(required = false) String investorDocumentNumber,
            @Parameter(example = "fiduciarySpecialist") @RequestParam(required = false) String fieldName,
            @Parameter(example = "true") @RequestParam(required = false) String fieldValue,
            @Parameter(example = "equals") @RequestParam(required = false) String operation) {

        Pageable pageable;
        if (sort != null && order != null) {
            Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
            Sort sorting = Sort.by(direction, sort);
            pageable = PageRequest.of(page, size, sorting);
        } else {
            pageable = PageRequest.of(page, size);
        }

        return ResponseEntity
                .ok(settlementRedisService.findAllSettlementsRedisOnly(pageable, fieldName, fieldValue, operation,
                        tradeId, sideId, investorDocumentNumber));
    }

    @Operation(summary = "All Settlements with Translated Custodian Status", description = "Get all settlements with custodian status Trasladada")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = SettlementSearchOutDto[].class)))
    })
    @GetMapping("/search")
    public ResponseEntity<PageResponseOutDto<SettlementSearchOutDto>> findAllSettlementsCustodyView(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "settlementDate") String sort,
            @RequestParam(defaultValue = "desc") String order,
            @RequestParam(defaultValue = "false") boolean all,
            @RequestParam(required = false) Long countryId,
            @RequestParam(required = false) Long depositId,
            @RequestParam(required = false) Long custodianId,
            @RequestParam(required = false) Long operationTypeId,
            @RequestParam(required = false) LocalDate registrationDateFrom,
            @RequestParam(required = false) LocalDate settlementDateTo,
            @RequestParam(required = false) Long custodianStatusId,
            @RequestParam(required = false) Long participantId) {
        SettlementParams settlementParams = SettlementParams.allSettlementsCustodyView(page, size, sort, order, all,
                countryId, depositId, custodianId,  operationTypeId, registrationDateFrom, settlementDateTo,
                custodianStatusId, participantId);
        return ResponseEntity.ok(settlementService.findAllSettlementsCustodyView(settlementParams));
    }
}

```

## src/main/java/com/nubo/operations/query/api/web/controller/TestSimulationRestController.java

```java
package com.nubo.operations.query.api.web.controller;

import com.nubo.operations.query.api.models.dto.response.TradeSimulationOutDto;
import com.nubo.operations.query.api.service.TestSimulationService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "Test Simulation")
@RestController
@RequestMapping("/{version}/test-simulation")
@RequiredArgsConstructor
public class TestSimulationRestController {

    private final TestSimulationService testSimulationService;

    @Operation(summary = "Find trades with matchDate today and status REGISTRADA/REGISTRO_OPERACION on buy and sell")
    @GetMapping("/trades/today/registered")
    public ResponseEntity<List<TradeSimulationOutDto>> findTodayRegisteredTrades() {
        return ResponseEntity.ok(
                testSimulationService.findTodayRegisteredTrades()
        );
    }
}
```

## src/main/java/com/nubo/operations/query/api/web/controller/TradeEquityRestController.java

```java
package com.nubo.operations.query.api.web.controller;

import com.nubo.operations.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.query.api.models.dto.response.TradeEquityOutDto;
import com.nubo.operations.query.api.service.TradeEquityService;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Trade Equity")
@RequestMapping("/{version}/trade-equity")
@RestController
@RequiredArgsConstructor
public class TradeEquityRestController {

    private final TradeEquityService tradeEquityService;

    @Operation(summary = "All TradeEquity", description = "All TradeEquity")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = TradeEquityOutDto[].class))) })
    @GetMapping
    public ResponseEntity<PageResponseOutDto<TradeEquityOutDto>> findAllTradeEquity(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "tradeId") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all) {
        return ResponseEntity.ok(tradeEquityService.findAllTradeEquity(page, size, sort, order, all));
    }

    @Operation(summary = "Find TradeEquity by Id", description = "Find TradeEquity by Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = TradeEquityOutDto.class))) })
    @GetMapping("/trade/{tradeId}")
    public ResponseEntity<TradeEquityOutDto> findTradeEquityById(@PathVariable Long tradeId) {
        return ResponseEntity.ok(tradeEquityService.findTradeEquityById(tradeId));
    }
}

```

## src/main/java/com/nubo/operations/query/api/web/controller/TradeRestController.java

```java
package com.nubo.operations.query.api.web.controller;

import java.time.LocalDate;
import java.util.List;

import org.springdoc.core.annotations.ParameterObject;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.nubo.operations.query.api.helpers.SortHelper;
import com.nubo.operations.query.api.models.domain.DynamicFilter;
import com.nubo.operations.query.api.models.domain.TradeParams;
import com.nubo.operations.query.api.models.dto.request.TradeParamsDynamicInDto;
import com.nubo.operations.query.api.models.dto.request.TradeParamsInDto;
import com.nubo.operations.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.query.api.models.dto.response.TradeCustodianOutDto;
import com.nubo.operations.query.api.models.dto.response.TradeOutDto;
import com.nubo.operations.query.api.service.TradeRedisService;
import com.nubo.operations.query.api.service.TradeService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import lombok.RequiredArgsConstructor;

@Tag(name = "Trade")
@RequestMapping(value = "/{version}/trade", method = RequestMethod.GET)
@RestController
@RequiredArgsConstructor
@Validated
public class TradeRestController {

    private static final String DEFAULT_SORT_FIELD = "clearingDate";

    private final TradeService tradeService;
    private final TradeRedisService tradeRedisService;

    @Operation(summary = "All Trades", description = "All Trades")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = TradeOutDto[].class)))
    })
    @GetMapping
    public ResponseEntity<PageResponseOutDto<TradeOutDto>> findAllTrades(
            @ParameterObject @Valid TradeParamsInDto params) {
        Pageable pageable = PageRequest.of(
                params.getPage(),
                params.getSize(),
                SortHelper.createSafeSort(params.getSort(), params.getOrder(), "matchDate"));
        List<Long> safeCountryIds = resolveCountryIds(params.getCountryId(), params.getCountryIds());
        TradeParams tradeParams = new TradeParams(params.getMatchId(), params.getStatusId(), params.getCanceledStatus(),
                params.getTypeId(), params.getCountryId(), safeCountryIds, params.getStartMatchDate(),
                params.getEndMatchDate(), params.getStartClearingDate(), params.getEndClearingDate(),
                params.getOnlyOperation(), params.getMarketId(), null);

        return ResponseEntity.ok(tradeService.findAllTrades(pageable, tradeParams, params.getAll()));
    }

    @Operation(summary = "All Trade Ids", description = "All Trade Ids")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = Long[].class)))
    })
    @GetMapping("/all-trade-id")
    public ResponseEntity<PageResponseOutDto<Long>> findAllTradeIds(
            @RequestParam(defaultValue = "0") @Min(0) int page,
            @RequestParam(defaultValue = "10") @Min(1) @Max(100) int size,
            @Parameter(example = "100000") @RequestParam(required = false) @Min(1) Long matchId,
            @Parameter(example = "2025-01-01") @RequestParam(required = false) LocalDate startMatchDate,
            @Parameter(example = "2025-01-01") @RequestParam(required = false) LocalDate endMatchDate,
            @Parameter(example = "2025-01-01") @RequestParam(required = false) LocalDate startClearingDate,
            @Parameter(example = "2025-01-01") @RequestParam(required = false) LocalDate endClearingDate,
            @Parameter(example = "true") @RequestParam(required = false, defaultValue = "true") Boolean onlyOperation) {
        validateDateRanges(startMatchDate, endMatchDate, startClearingDate, endClearingDate);
        Pageable pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(tradeService.findAllTradeIds(pageable, matchId, startMatchDate, endMatchDate,
                startClearingDate, endClearingDate, onlyOperation));
    }

    @Operation(summary = "All Custodian Trade Ids", description = "Folios de trades sin restricción de participante (búsqueda en todos los custodios)")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = Long[].class)))
    })
    @GetMapping("/custodian/all-trade-id")
    public ResponseEntity<PageResponseOutDto<Long>> findAllCustodianTradeIds(
            @RequestParam(defaultValue = "0") @Min(0) int page,
            @RequestParam(defaultValue = "10") @Min(1) @Max(100) int size,
            @Parameter(example = "100000") @RequestParam(required = false) @Min(1) Long matchId,
            @Parameter(example = "2025-01-01") @RequestParam(required = false) LocalDate startMatchDate,
            @Parameter(example = "2025-01-01") @RequestParam(required = false) LocalDate endMatchDate,
            @Parameter(example = "2025-01-01") @RequestParam(required = false) LocalDate startClearingDate,
            @Parameter(example = "2025-01-01") @RequestParam(required = false) LocalDate endClearingDate,
            @Parameter(example = "true") @RequestParam(required = false, defaultValue = "true") Boolean onlyOperation) {
        validateDateRanges(startMatchDate, endMatchDate, startClearingDate, endClearingDate);
        Pageable pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(tradeService.findAllCustodianTradeIds(pageable, matchId, startMatchDate, endMatchDate,
                startClearingDate, endClearingDate, onlyOperation));
    }

    @Operation(summary = "All Trades with Dynamic Filter", description = "All Trades with Dynamic Filter")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = TradeOutDto[].class)))
    })
    @GetMapping("/dynamic")
    public ResponseEntity<PageResponseOutDto<TradeOutDto>> findAllTradesDynamic(
            @ParameterObject @Valid TradeParamsDynamicInDto params) {
        Pageable pageable = PageRequest.of(
                params.getPage(),
                params.getSize(),
                SortHelper.createSafeSort(params.getSort(), params.getOrder(), DEFAULT_SORT_FIELD));
        DynamicFilter dynamicFilter = new DynamicFilter(params.getFieldName(), params.getFieldValue(),
                params.getOperation());
        TradeParams tradeParams = new TradeParams(
                params.getMatchId(), params.getStatusId(), params.getCanceledStatus(), params.getTypeId(),
                params.getCountryId(), null, params.getStartMatchDate(), params.getEndMatchDate(),
                params.getStartClearingDate(), params.getEndClearingDate(), null, null, null);

        return ResponseEntity.ok(
                tradeService.findAllTradesDynamic(pageable, dynamicFilter, tradeParams));
    }

    @Operation(summary = "Find All Trades with Redis and Database Fallback", description = "Search trades using Redis with automatic fallback to database if Redis is unavailable or returns no results")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = TradeOutDto[].class)))
    })
    @GetMapping("/redis-with-fallback")
    public ResponseEntity<PageResponseOutDto<TradeOutDto>> findAllTradesRedisWithFallback(
            @ParameterObject @Valid TradeParamsDynamicInDto params) {
        Pageable pageable = PageRequest.of(
                params.getPage(),
                params.getSize(),
                SortHelper.createSafeSort(params.getSort(), params.getOrder(), DEFAULT_SORT_FIELD));
        DynamicFilter dynamicFilter = new DynamicFilter(params.getFieldName(), params.getFieldValue(),
                params.getOperation());
        TradeParams tradeParams = new TradeParams(
                params.getMatchId(), params.getStatusId(), params.getCanceledStatus(), params.getTypeId(),
                params.getCountryId(), null, params.getStartMatchDate(), params.getEndMatchDate(),
                params.getStartClearingDate(), params.getEndClearingDate(), null, null, null);
        return ResponseEntity
                .ok(tradeRedisService.findAllTradesDynamic(pageable, dynamicFilter, tradeParams));
    }

    @Operation(summary = "Find Trade by Id", description = "Find Trade by Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = TradeOutDto.class)))
    })
    @GetMapping("/{tradeId}")
    public ResponseEntity<TradeOutDto> findTradeById(@PathVariable @Min(1) Long tradeId) {
        return ResponseEntity.ok(tradeService.findTradeById(tradeId));
    }

    @Operation(summary = "All Trades Redis Dynamic", description = "All Trades Redis Dynamic")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = TradeOutDto[].class)))
    })
    @GetMapping("/redis")
    public ResponseEntity<PageResponseOutDto<TradeOutDto>> findAllTradesRedis(
            @ParameterObject @Valid TradeParamsDynamicInDto params) {
        Pageable pageable = PageRequest.of(
                params.getPage(),
                params.getSize(),
                SortHelper.createSafeSort(params.getSort(), params.getOrder(), DEFAULT_SORT_FIELD));
        DynamicFilter dynamicFilter = new DynamicFilter(params.getFieldName(), params.getFieldValue(),
                params.getOperation());
        TradeParams tradeParams = new TradeParams(params.getMatchId(), params.getStatusId(), params.getCanceledStatus(),
                params.getTypeId(), params.getCountryId(), null, params.getStartMatchDate(), params.getEndMatchDate(),
                params.getStartClearingDate(), params.getEndClearingDate(), null,
                null, null);
        return ResponseEntity
                .ok(tradeRedisService.findAllTradesRedisOnly(pageable, dynamicFilter, tradeParams));
    }

    @Operation(summary = "Find Custodian Trades", description = "Search custodian trades with multiple filter criteria")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = TradeCustodianOutDto.class)))
    })
    @GetMapping("/custodian")
    public ResponseEntity<PageResponseOutDto<TradeCustodianOutDto>> findCustodianTrades(
            @ParameterObject @Valid TradeParamsInDto tradeParams) {
        Sort safeSort = SortHelper.createSafeSort(tradeParams.getSort(), tradeParams.getOrder(), DEFAULT_SORT_FIELD);
        Pageable pageable = PageRequest.of(tradeParams.getPage(), tradeParams.getSize(), safeSort);
        List<Long> safeCountryIds = resolveCountryIds(tradeParams.getCountryId(), tradeParams.getCountryIds());
        TradeParams businessParams = new TradeParams(
                tradeParams.getMatchId(),
                tradeParams.getStatusId(),
                tradeParams.getCanceledStatus(),
                tradeParams.getTypeId(),
                tradeParams.getCountryId(),
                safeCountryIds,
                tradeParams.getStartMatchDate(),
                tradeParams.getEndMatchDate(),
                tradeParams.getStartClearingDate(),
                tradeParams.getEndClearingDate(),
                tradeParams.getOnlyOperation(),
                tradeParams.getMarketId(),
                tradeParams.getMnemonic(),
                tradeParams.getBuyStatusId(),
                tradeParams.getSellStatusId());

        PageResponseOutDto<TradeCustodianOutDto> response = tradeService.findCustodianTrades(
                pageable,
                businessParams,
                Boolean.TRUE.equals(tradeParams.getAll()));

        return ResponseEntity.ok(response);
    }

    private static List<Long> resolveCountryIds(Long countryId, List<Long> countryIds) {
        if (countryIds != null && !countryIds.isEmpty()) {
            List<Long> resolvedCountryIds = countryIds.stream()
                    .filter(value -> value != null && value > 0)
                    .distinct()
                    .toList();
            if (!resolvedCountryIds.isEmpty()) {
                return resolvedCountryIds;
            }
        }

        if (countryId != null && countryId > 0) {
            return List.of(countryId);
        }

        return null;
    }

    private static void validateDateRanges(
            LocalDate startMatchDate,
            LocalDate endMatchDate,
            LocalDate startClearingDate,
            LocalDate endClearingDate) {
        validateDateRange(startMatchDate, endMatchDate, "matchDate");
        validateDateRange(startClearingDate, endClearingDate, "clearingDate");
    }

    private static void validateDateRange(LocalDate startDate, LocalDate endDate, String fieldName) {
        if (startDate != null && endDate != null && startDate.isAfter(endDate)) {
            throw badRequest(
                    "Invalid " + fieldName + " range: start date must be before or equal to end date");
        }
    }

    private static ResponseStatusException badRequest(String reason) {
        return new ResponseStatusException(HttpStatus.BAD_REQUEST, reason);
    }
}

```

## src/main/java/com/nubo/operations/query/api/web/controller/ValidateCountedOperationRestController.java

```java
package com.nubo.operations.query.api.web.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.operations.query.api.models.dto.response.CorrectionDropdownDataDto;
import com.nubo.operations.query.api.models.dto.response.TradeValidationOutDto;
import com.nubo.operations.query.api.service.ValidateCountedOperationService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "Validate Counted Operation")
@RequestMapping("/{version}/validate/counted-operation")
@RestController
@RequiredArgsConstructor
public class ValidateCountedOperationRestController {

    private final ValidateCountedOperationService validateCountedOperationService;

    @Operation(summary = "Validate allowed trade assignment", description = "Validate allowed trade assignment")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = TradeValidationOutDto.class))) })
    @GetMapping("/assignment/allow/trade/{tradeId}/side/{sideId}")
    public ResponseEntity<TradeValidationOutDto> validateAllowedTradeAssignment(
            @PathVariable Long tradeId, @PathVariable String sideId) {
        return ResponseEntity.ok(validateCountedOperationService.validateAllowedTradeAssignment(tradeId, sideId));
    }

    @Operation(summary = "Get assignment correction dropdown data", description = "Returns dropdown options data for assignment corrections based on trade and side")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = CorrectionDropdownDataDto.class)))
    })
    @GetMapping("/correction-dropdown-data/trade/{tradeId}/side/{sideId}")
    public ResponseEntity<CorrectionDropdownDataDto> getCorrectionDropdownData(
            @PathVariable Long tradeId,
            @PathVariable String sideId) {
        return ResponseEntity.ok(validateCountedOperationService.getCorrectionDropdownData(tradeId, sideId));
    }

}

```
