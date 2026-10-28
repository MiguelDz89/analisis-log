# nbo-png-operaciones-cmd-back

Código fuente completo de producción y configuraciones. Captura local: 28/10/2026.

Incluye 220 archivos Java y 19 archivos de configuración, recursos y compilación.

Cada sección identifica la ruta original y contiene el archivo completo. Los Java conservan sus implementaciones, imports, anotaciones y comentarios. Se excluyen src/test, clases de prueba, resultados de compilación, librerías binarias y herramientas/perfiles de pruebas de rendimiento.

Credenciales literales ocultadas en configuraciones: 0. Las referencias a variables de entorno se conservan.

## Índice

1. `dependency-check-suppressions.xml`
2. `mvnw`
3. `mvnw.cmd`
4. `pom.xml`
5. `.mvn/wrapper/maven-wrapper.properties`
6. `src/main/resources/application-dev.yml`
7. `src/main/resources/application-local.yml`
8. `src/main/resources/application-prod.yml`
9. `src/main/resources/application-qa.yml`
10. `src/main/resources/application-uat.yml`
11. `src/main/resources/application.yml`
12. `src/main/resources/banner.txt`
13. `src/main/resources/log/JsonEventLayout_error.json`
14. `src/main/resources/log/JsonEventLayout_info.json`
15. `src/main/resources/log/JsonEventLayout_trace.json`
16. `src/main/resources/log/log4j2-prod.properties`
17. `src/main/resources/log/log4j2.properties`
18. `src/main/resources/sql/indexes/fraction_performance_indexes_down.sql`
19. `src/main/resources/sql/indexes/fraction_performance_indexes_up.sql`
20. `src/main/java/com/nubo/operations/cmd/api/OperationsCmdApiApplication.java`
21. `src/main/java/com/nubo/operations/cmd/api/application/annotations/DecimalScale.java`
22. `src/main/java/com/nubo/operations/cmd/api/application/annotations/ValidBigDecimal.java`
23. `src/main/java/com/nubo/operations/cmd/api/application/config/CacheConfig.java`
24. `src/main/java/com/nubo/operations/cmd/api/application/config/KafkaProducerConfig.java`
25. `src/main/java/com/nubo/operations/cmd/api/application/config/MetricsConfig.java`
26. `src/main/java/com/nubo/operations/cmd/api/application/config/SwaggerConfig.java`
27. `src/main/java/com/nubo/operations/cmd/api/application/config/ValidBigDecimalConfig.java`
28. `src/main/java/com/nubo/operations/cmd/api/application/config/WebConfig.java`
29. `src/main/java/com/nubo/operations/cmd/api/application/context/GlobalContext.java`
30. `src/main/java/com/nubo/operations/cmd/api/application/database/NamingStrategyConfig.java`
31. `src/main/java/com/nubo/operations/cmd/api/application/database/UpperNamingConfig.java`
32. `src/main/java/com/nubo/operations/cmd/api/application/filters/GlobalFilter.java`
33. `src/main/java/com/nubo/operations/cmd/api/application/interceptors/GlobalInterceptor.java`
34. `src/main/java/com/nubo/operations/cmd/api/application/properties/PropertiesConfig.java`
35. `src/main/java/com/nubo/operations/cmd/api/application/properties/PropertiesContext.java`
36. `src/main/java/com/nubo/operations/cmd/api/application/serializers/BigDecimalSerializer.java`
37. `src/main/java/com/nubo/operations/cmd/api/application/util/ApplicationUtils.java`
38. `src/main/java/com/nubo/operations/cmd/api/application/util/RestClientUtils.java`
39. `src/main/java/com/nubo/operations/cmd/api/client/kafka/models/request/CorrectionFractionInDto.java`
40. `src/main/java/com/nubo/operations/cmd/api/client/kafka/models/request/CorrectionRequestInDto.java`
41. `src/main/java/com/nubo/operations/cmd/api/client/kafka/models/request/CountryInDto.java`
42. `src/main/java/com/nubo/operations/cmd/api/client/kafka/models/request/DepositoryInDto.java`
43. `src/main/java/com/nubo/operations/cmd/api/client/kafka/models/request/DirectDepositoryInDto.java`
44. `src/main/java/com/nubo/operations/cmd/api/client/kafka/models/request/FinalAssignmentFractionInDto.java`
45. `src/main/java/com/nubo/operations/cmd/api/client/kafka/models/request/FinalAssignmentInDto.java`
46. `src/main/java/com/nubo/operations/cmd/api/client/kafka/models/request/InvestorAccountInDto.java`
47. `src/main/java/com/nubo/operations/cmd/api/client/kafka/models/request/InvestorInDto.java`
48. `src/main/java/com/nubo/operations/cmd/api/client/kafka/models/request/ParticipantAccountInDto.java`
49. `src/main/java/com/nubo/operations/cmd/api/client/kafka/models/request/ParticipantBankAccountInDto.java`
50. `src/main/java/com/nubo/operations/cmd/api/client/kafka/models/request/ParticipantInDto.java`
51. `src/main/java/com/nubo/operations/cmd/api/client/kafka/models/request/SideInDto.java`
52. `src/main/java/com/nubo/operations/cmd/api/client/kafka/models/request/TypeInDto.java`
53. `src/main/java/com/nubo/operations/cmd/api/client/kafka/producer/KafkaNuboAdapterProducer.java`
54. `src/main/java/com/nubo/operations/cmd/api/client/operation/calculation/models/dto/request/SettleAccountsInDto.java`
55. `src/main/java/com/nubo/operations/cmd/api/client/operation/calculation/models/dto/response/SettleAccountsOutDto.java`
56. `src/main/java/com/nubo/operations/cmd/api/client/operation/calculation/service/OperationCalculationClient.java`
57. `src/main/java/com/nubo/operations/cmd/api/client/operation/calculation/service/impl/OperationCalculationClientImpl.java`
58. `src/main/java/com/nubo/operations/cmd/api/client/operation/fractionation/models/dto/request/BatchAssignmentClientInDto.java`
59. `src/main/java/com/nubo/operations/cmd/api/client/operation/fractionation/models/dto/request/BatchAssignmentItemClientInDto.java`
60. `src/main/java/com/nubo/operations/cmd/api/client/operation/fractionation/models/dto/request/CorrectionClientInDto.java`
61. `src/main/java/com/nubo/operations/cmd/api/client/operation/fractionation/models/dto/request/FractionClientInDto.java`
62. `src/main/java/com/nubo/operations/cmd/api/client/operation/fractionation/models/dto/response/BatchAssignmentClientOutDto.java`
63. `src/main/java/com/nubo/operations/cmd/api/client/operation/fractionation/service/OperationFractionationClient.java`
64. `src/main/java/com/nubo/operations/cmd/api/client/operation/fractionation/service/impl/OperationFractionationClientImpl.java`
65. `src/main/java/com/nubo/operations/cmd/api/client/operation/rules/models/dto/request/StatusAllowedOptionsInDto.java`
66. `src/main/java/com/nubo/operations/cmd/api/client/operation/rules/models/dto/request/StatusUpdateTradeInDto.java`
67. `src/main/java/com/nubo/operations/cmd/api/client/operation/rules/models/dto/response/ActionOutDto.java`
68. `src/main/java/com/nubo/operations/cmd/api/client/operation/rules/models/dto/response/BusinessRuleOutDto.java`
69. `src/main/java/com/nubo/operations/cmd/api/client/operation/rules/models/dto/response/StatusAllowedOptionsOutDto.java`
70. `src/main/java/com/nubo/operations/cmd/api/client/operation/rules/models/dto/response/StatusClientOutDto.java`
71. `src/main/java/com/nubo/operations/cmd/api/client/operation/rules/models/dto/response/StatusUpdateTradeOutDto.java`
72. `src/main/java/com/nubo/operations/cmd/api/client/operation/rules/service/OperationBusinessRuleClient.java`
73. `src/main/java/com/nubo/operations/cmd/api/client/operation/rules/service/impl/OperationBusinessRuleClientImpl.java`
74. `src/main/java/com/nubo/operations/cmd/api/exception/ClientException.java`
75. `src/main/java/com/nubo/operations/cmd/api/exception/ServiceException.java`
76. `src/main/java/com/nubo/operations/cmd/api/exception/error/ErrorCode.java`
77. `src/main/java/com/nubo/operations/cmd/api/exception/error/ErrorResponse.java`
78. `src/main/java/com/nubo/operations/cmd/api/exception/error/ErrorValidation.java`
79. `src/main/java/com/nubo/operations/cmd/api/exception/handler/GlobalExceptionHandler.java`
80. `src/main/java/com/nubo/operations/cmd/api/helpers/CountedFractionHelper.java`
81. `src/main/java/com/nubo/operations/cmd/api/helpers/MapperPageUtil.java`
82. `src/main/java/com/nubo/operations/cmd/api/helpers/MapperUtil.java`
83. `src/main/java/com/nubo/operations/cmd/api/models/context/AccountLookupContext.java`
84. `src/main/java/com/nubo/operations/cmd/api/models/context/AccountValidationKey.java`
85. `src/main/java/com/nubo/operations/cmd/api/models/context/AssignmentParticipantContext.java`
86. `src/main/java/com/nubo/operations/cmd/api/models/context/AssignmentTradeContext.java`
87. `src/main/java/com/nubo/operations/cmd/api/models/context/ProtectedFractionState.java`
88. `src/main/java/com/nubo/operations/cmd/api/models/domain/CorrectionData.java`
89. `src/main/java/com/nubo/operations/cmd/api/models/domain/SettlementCorrection.java`
90. `src/main/java/com/nubo/operations/cmd/api/models/dto/request/AssignmentClosureInDto.java`
91. `src/main/java/com/nubo/operations/cmd/api/models/dto/request/AssignmentInDto.java`
92. `src/main/java/com/nubo/operations/cmd/api/models/dto/request/BatchAssignmentInDto.java`
93. `src/main/java/com/nubo/operations/cmd/api/models/dto/request/BatchAssignmentItemInDto.java`
94. `src/main/java/com/nubo/operations/cmd/api/models/dto/request/BatchAssignmentValidationFractionInDto.java`
95. `src/main/java/com/nubo/operations/cmd/api/models/dto/request/BatchAssignmentValidationInDto.java`
96. `src/main/java/com/nubo/operations/cmd/api/models/dto/request/BatchAssignmentValidationItemInDto.java`
97. `src/main/java/com/nubo/operations/cmd/api/models/dto/request/BatchPreparedFractionInDto.java`
98. `src/main/java/com/nubo/operations/cmd/api/models/dto/request/CalculationInDto.java`
99. `src/main/java/com/nubo/operations/cmd/api/models/dto/request/CalculationIvaInDto.java`
100. `src/main/java/com/nubo/operations/cmd/api/models/dto/request/FractionInDto.java`
101. `src/main/java/com/nubo/operations/cmd/api/models/dto/request/FractionRuleInDto.java`
102. `src/main/java/com/nubo/operations/cmd/api/models/dto/request/SettlementCommissionUpdateInDto.java`
103. `src/main/java/com/nubo/operations/cmd/api/models/dto/request/TradeEquityInDto.java`
104. `src/main/java/com/nubo/operations/cmd/api/models/dto/request/TradeEquityUpdateInDto.java`
105. `src/main/java/com/nubo/operations/cmd/api/models/dto/request/TradeInDto.java`
106. `src/main/java/com/nubo/operations/cmd/api/models/dto/request/TradeUpdateInDto.java`
107. `src/main/java/com/nubo/operations/cmd/api/models/dto/response/AssignmentClosureOutDto.java`
108. `src/main/java/com/nubo/operations/cmd/api/models/dto/response/AssignmentClosureValidateOutDto.java`
109. `src/main/java/com/nubo/operations/cmd/api/models/dto/response/BatchAssignmentItemOutDto.java`
110. `src/main/java/com/nubo/operations/cmd/api/models/dto/response/BatchAssignmentOutDto.java`
111. `src/main/java/com/nubo/operations/cmd/api/models/dto/response/BatchAssignmentValidationItemOutDto.java`
112. `src/main/java/com/nubo/operations/cmd/api/models/dto/response/BatchAssignmentValidationOutDto.java`
113. `src/main/java/com/nubo/operations/cmd/api/models/dto/response/BusinessRuleCodeOutDto.java`
114. `src/main/java/com/nubo/operations/cmd/api/models/dto/response/ClassOutDto.java`
115. `src/main/java/com/nubo/operations/cmd/api/models/dto/response/CountryOutDto.java`
116. `src/main/java/com/nubo/operations/cmd/api/models/dto/response/CurrencyOutDto.java`
117. `src/main/java/com/nubo/operations/cmd/api/models/dto/response/DepositoryOutDto.java`
118. `src/main/java/com/nubo/operations/cmd/api/models/dto/response/FractionAccountOutDto.java`
119. `src/main/java/com/nubo/operations/cmd/api/models/dto/response/GicsOutDto.java`
120. `src/main/java/com/nubo/operations/cmd/api/models/dto/response/IdentificationTypeOutDto.java`
121. `src/main/java/com/nubo/operations/cmd/api/models/dto/response/InvestorAccountOutDto.java`
122. `src/main/java/com/nubo/operations/cmd/api/models/dto/response/InvestorOutDto.java`
123. `src/main/java/com/nubo/operations/cmd/api/models/dto/response/MarketOutDto.java`
124. `src/main/java/com/nubo/operations/cmd/api/models/dto/response/MilaDepositoryOutDto.java`
125. `src/main/java/com/nubo/operations/cmd/api/models/dto/response/PageResponseOutDto.java`
126. `src/main/java/com/nubo/operations/cmd/api/models/dto/response/ParticipantAccountOutDto.java`
127. `src/main/java/com/nubo/operations/cmd/api/models/dto/response/ParticipantBankAccountOutDto.java`
128. `src/main/java/com/nubo/operations/cmd/api/models/dto/response/ParticipantOutDto.java`
129. `src/main/java/com/nubo/operations/cmd/api/models/dto/response/SecurityTitleOutDto.java`
130. `src/main/java/com/nubo/operations/cmd/api/models/dto/response/SettlementOutDto.java`
131. `src/main/java/com/nubo/operations/cmd/api/models/dto/response/SideOutDto.java`
132. `src/main/java/com/nubo/operations/cmd/api/models/dto/response/StatusOutDto.java`
133. `src/main/java/com/nubo/operations/cmd/api/models/dto/response/TaxStatusOutDto.java`
134. `src/main/java/com/nubo/operations/cmd/api/models/dto/response/TradeEquityOutDto.java`
135. `src/main/java/com/nubo/operations/cmd/api/models/dto/response/TradeOutDto.java`
136. `src/main/java/com/nubo/operations/cmd/api/models/dto/response/TradingSessionOutDto.java`
137. `src/main/java/com/nubo/operations/cmd/api/models/dto/response/TradingSystemOutDto.java`
138. `src/main/java/com/nubo/operations/cmd/api/models/dto/response/TypeOutDto.java`
139. `src/main/java/com/nubo/operations/cmd/api/models/entity/ClassEntity.java`
140. `src/main/java/com/nubo/operations/cmd/api/models/entity/CountryEntity.java`
141. `src/main/java/com/nubo/operations/cmd/api/models/entity/CurrencyEntity.java`
142. `src/main/java/com/nubo/operations/cmd/api/models/entity/CustodianRelationEntity.java`
143. `src/main/java/com/nubo/operations/cmd/api/models/entity/DepositoryEntity.java`
144. `src/main/java/com/nubo/operations/cmd/api/models/entity/DirectDepositoryEntity.java`
145. `src/main/java/com/nubo/operations/cmd/api/models/entity/FicRelationEntity.java`
146. `src/main/java/com/nubo/operations/cmd/api/models/entity/FicRelationKey.java`
147. `src/main/java/com/nubo/operations/cmd/api/models/entity/GicsEntity.java`
148. `src/main/java/com/nubo/operations/cmd/api/models/entity/IdentificationTypeEntity.java`
149. `src/main/java/com/nubo/operations/cmd/api/models/entity/InvestorAccountEntity.java`
150. `src/main/java/com/nubo/operations/cmd/api/models/entity/InvestorEntity.java`
151. `src/main/java/com/nubo/operations/cmd/api/models/entity/IssuerEntity.java`
152. `src/main/java/com/nubo/operations/cmd/api/models/entity/MarketEntity.java`
153. `src/main/java/com/nubo/operations/cmd/api/models/entity/MilaDepositoryEntity.java`
154. `src/main/java/com/nubo/operations/cmd/api/models/entity/ParticipantAccountEntity.java`
155. `src/main/java/com/nubo/operations/cmd/api/models/entity/ParticipantBankAccountEntity.java`
156. `src/main/java/com/nubo/operations/cmd/api/models/entity/ParticipantEntity.java`
157. `src/main/java/com/nubo/operations/cmd/api/models/entity/SecurityTitleEntity.java`
158. `src/main/java/com/nubo/operations/cmd/api/models/entity/SettlementCorrectionEntity.java`
159. `src/main/java/com/nubo/operations/cmd/api/models/entity/SettlementEntity.java`
160. `src/main/java/com/nubo/operations/cmd/api/models/entity/SettlementKey.java`
161. `src/main/java/com/nubo/operations/cmd/api/models/entity/SideEntity.java`
162. `src/main/java/com/nubo/operations/cmd/api/models/entity/StatusEntity.java`
163. `src/main/java/com/nubo/operations/cmd/api/models/entity/TaxStatusEntity.java`
164. `src/main/java/com/nubo/operations/cmd/api/models/entity/TaxesEntity.java`
165. `src/main/java/com/nubo/operations/cmd/api/models/entity/TradeEntity.java`
166. `src/main/java/com/nubo/operations/cmd/api/models/entity/TradeEquityEntity.java`
167. `src/main/java/com/nubo/operations/cmd/api/models/entity/TradeStatusHistoryEntity.java`
168. `src/main/java/com/nubo/operations/cmd/api/models/entity/TradeStatusHistoryKey.java`
169. `src/main/java/com/nubo/operations/cmd/api/models/entity/TradingSessionEntity.java`
170. `src/main/java/com/nubo/operations/cmd/api/models/entity/TradingSystemEntity.java`
171. `src/main/java/com/nubo/operations/cmd/api/models/entity/TypeEntity.java`
172. `src/main/java/com/nubo/operations/cmd/api/models/entity/TypeMappingEntity.java`
173. `src/main/java/com/nubo/operations/cmd/api/models/entity/UserNuboEntity.java`
174. `src/main/java/com/nubo/operations/cmd/api/models/enums/BusinessRuleEnum.java`
175. `src/main/java/com/nubo/operations/cmd/api/models/enums/CorrectionStatusEnum.java`
176. `src/main/java/com/nubo/operations/cmd/api/models/enums/CorrectionTypeEnum.java`
177. `src/main/java/com/nubo/operations/cmd/api/models/enums/CountryEnum.java`
178. `src/main/java/com/nubo/operations/cmd/api/models/enums/DirectAllocationEnum.java`
179. `src/main/java/com/nubo/operations/cmd/api/models/enums/PropertiesEnum.java`
180. `src/main/java/com/nubo/operations/cmd/api/models/enums/ReassignmentTypeEnum.java`
181. `src/main/java/com/nubo/operations/cmd/api/models/enums/SideEnum.java`
182. `src/main/java/com/nubo/operations/cmd/api/models/enums/StatusEnum.java`
183. `src/main/java/com/nubo/operations/cmd/api/models/enums/TaxesEnum.java`
184. `src/main/java/com/nubo/operations/cmd/api/models/enums/TypeEnum.java`
185. `src/main/java/com/nubo/operations/cmd/api/models/enums/TypeMappingEnum.java`
186. `src/main/java/com/nubo/operations/cmd/api/models/enums/VersionApiEnum.java`
187. `src/main/java/com/nubo/operations/cmd/api/repository/CountryRepository.java`
188. `src/main/java/com/nubo/operations/cmd/api/repository/CurrencyRepository.java`
189. `src/main/java/com/nubo/operations/cmd/api/repository/CustodianRelationRepository.java`
190. `src/main/java/com/nubo/operations/cmd/api/repository/DepositoryRepository.java`
191. `src/main/java/com/nubo/operations/cmd/api/repository/DirectDepositoryRepository.java`
192. `src/main/java/com/nubo/operations/cmd/api/repository/FicRelationRepository.java`
193. `src/main/java/com/nubo/operations/cmd/api/repository/InvestorAccountRepository.java`
194. `src/main/java/com/nubo/operations/cmd/api/repository/InvestorRepository.java`
195. `src/main/java/com/nubo/operations/cmd/api/repository/MarketRepository.java`
196. `src/main/java/com/nubo/operations/cmd/api/repository/MilaDepositoryRepository.java`
197. `src/main/java/com/nubo/operations/cmd/api/repository/ParticipantAccountRepository.java`
198. `src/main/java/com/nubo/operations/cmd/api/repository/ParticipantBankAccountRepository.java`
199. `src/main/java/com/nubo/operations/cmd/api/repository/ParticipantRepository.java`
200. `src/main/java/com/nubo/operations/cmd/api/repository/SecurityTitleRepository.java`
201. `src/main/java/com/nubo/operations/cmd/api/repository/SettlementCorrectionRepository.java`
202. `src/main/java/com/nubo/operations/cmd/api/repository/SettlementRepository.java`
203. `src/main/java/com/nubo/operations/cmd/api/repository/SideRepository.java`
204. `src/main/java/com/nubo/operations/cmd/api/repository/StatusRepository.java`
205. `src/main/java/com/nubo/operations/cmd/api/repository/TaxesRepository.java`
206. `src/main/java/com/nubo/operations/cmd/api/repository/TradeEquityRepository.java`
207. `src/main/java/com/nubo/operations/cmd/api/repository/TradeRepository.java`
208. `src/main/java/com/nubo/operations/cmd/api/repository/TradeStatusHistoryRepository.java`
209. `src/main/java/com/nubo/operations/cmd/api/repository/TradingSessionRepository.java`
210. `src/main/java/com/nubo/operations/cmd/api/repository/TradingSystemRepository.java`
211. `src/main/java/com/nubo/operations/cmd/api/repository/TypeMappingRepository.java`
212. `src/main/java/com/nubo/operations/cmd/api/repository/TypeRepository.java`
213. `src/main/java/com/nubo/operations/cmd/api/repository/UserNuboRepository.java`
214. `src/main/java/com/nubo/operations/cmd/api/repository/projection/AssignmentTradeView.java`
215. `src/main/java/com/nubo/operations/cmd/api/repository/projection/TradeFractionView.java`
216. `src/main/java/com/nubo/operations/cmd/api/service/AssignmentClosureService.java`
217. `src/main/java/com/nubo/operations/cmd/api/service/BatchCacheService.java`
218. `src/main/java/com/nubo/operations/cmd/api/service/CorrectionTrackingService.java`
219. `src/main/java/com/nubo/operations/cmd/api/service/FractionationBatchService.java`
220. `src/main/java/com/nubo/operations/cmd/api/service/FractionationCountedService.java`
221. `src/main/java/com/nubo/operations/cmd/api/service/SettlementService.java`
222. `src/main/java/com/nubo/operations/cmd/api/service/TradeEquityService.java`
223. `src/main/java/com/nubo/operations/cmd/api/service/TradeService.java`
224. `src/main/java/com/nubo/operations/cmd/api/service/ValidateCountedFractionService.java`
225. `src/main/java/com/nubo/operations/cmd/api/service/impl/AssignmentClosureServiceImpl.java`
226. `src/main/java/com/nubo/operations/cmd/api/service/impl/BatchCacheServiceImpl.java`
227. `src/main/java/com/nubo/operations/cmd/api/service/impl/CorrectionTrackingServiceImpl.java`
228. `src/main/java/com/nubo/operations/cmd/api/service/impl/FractionationBatchServiceImpl.java`
229. `src/main/java/com/nubo/operations/cmd/api/service/impl/FractionationCountedServiceImpl.java`
230. `src/main/java/com/nubo/operations/cmd/api/service/impl/SettlementServiceImpl.java`
231. `src/main/java/com/nubo/operations/cmd/api/service/impl/TradeEquityServiceImpl.java`
232. `src/main/java/com/nubo/operations/cmd/api/service/impl/TradeServiceImpl.java`
233. `src/main/java/com/nubo/operations/cmd/api/service/impl/ValidateCountedFractionServiceImpl.java`
234. `src/main/java/com/nubo/operations/cmd/api/web/controller/AssignmentClosureController.java`
235. `src/main/java/com/nubo/operations/cmd/api/web/controller/FractionationCountedController.java`
236. `src/main/java/com/nubo/operations/cmd/api/web/controller/SettlementController.java`
237. `src/main/java/com/nubo/operations/cmd/api/web/controller/TradeController.java`
238. `src/main/java/com/nubo/operations/cmd/api/web/controller/TradeEquityController.java`
239. `src/main/java/com/nubo/operations/cmd/api/web/controller/ValidateCountedFractionRestController.java`

## dependency-check-suppressions.xml

```xml

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

    <groupId>com.nubo.operations.cmd.api</groupId>
    <artifactId>operations-cmd-api</artifactId>
    <version>0.61.0-beta.1</version>
    <name>${project.artifactId}</name>
    <description>Operations Cmd Api</description>

    <properties>
        <java.version>21</java.version>
        <spring.port>8080</spring.port>
        <test.skip>false</test.skip>

        <datasource.url.application.name>
            ApplicationName=${project.artifactId}
        </datasource.url.application.name>

        <hikari.pool.name>${project.artifactId}-pool</hikari.pool.name>
        <dynamic.hikari.pool.name>${project.artifactId}-pool</dynamic.hikari.pool.name>

        <!-- Security remediation -->
        <tomcat.version>11.0.25</tomcat.version>

        <!--
            Spring Boot 4.1.1 manages both Jackson 2 and Jackson 3.
            Override both BOMs to patched versions.

            com.fasterxml.jackson.* -> 2.21.7
            tools.jackson.*         -> 3.1.7
        -->
        <jackson-2-bom.version>2.21.7</jackson-2-bom.version>
        <jackson-bom.version>3.1.7</jackson-bom.version>
    </properties>

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
            <groupId>commons-logging</groupId>
            <artifactId>commons-logging</artifactId>
            <version>1.3.6</version>
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

        <!-- Swagger -->
        <dependency>
            <groupId>org.springdoc</groupId>
            <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
            <version>3.1.0</version>
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

        <!-- Vulnerability adjustments -->
        <dependency>
            <groupId>commons-io</groupId>
            <artifactId>commons-io</artifactId>
            <version>2.18.0</version>
        </dependency>

        <dependency>
            <groupId>org.apache.commons</groupId>
            <artifactId>commons-lang3</artifactId>
        </dependency>

        <!-- Tomcat CVE fixes -->
        <dependency>
            <groupId>org.apache.tomcat.embed</groupId>
            <artifactId>tomcat-embed-core</artifactId>
            <version>${tomcat.version}</version>
        </dependency>

        <dependency>
            <groupId>org.apache.tomcat.embed</groupId>
            <artifactId>tomcat-embed-el</artifactId>
            <version>${tomcat.version}</version>
        </dependency>

        <dependency>
            <groupId>org.apache.tomcat.embed</groupId>
            <artifactId>tomcat-embed-websocket</artifactId>
            <version>${tomcat.version}</version>
        </dependency>

        <!-- AspectJ -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-aspectj</artifactId>
        </dependency>

        <!-- Metrics -->
        <dependency>
            <groupId>io.micrometer</groupId>
            <artifactId>micrometer-registry-prometheus</artifactId>
        </dependency>

        <!-- LZ4 -->
        <dependency>
            <groupId>at.yawk.lz4</groupId>
            <artifactId>lz4-java</artifactId>
            <version>1.11.1</version>
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
                                <exclude>**/OperationsCmdApiApplication.class</exclude>
                            </excludes>

                            <includes>
                                <include>**/*.class</include>
                            </includes>
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
wrapperVersion=3.3.4
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
        open-in-view: false
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
        com.nubo.operations.cmd.api: INFO
        org.hibernate.SQL: ${LOGGING_LEVEL_HIBERNATE_SQL:ERROR}
        org.hibernate.orm.jdbc.bind: ${LOGGING_LEVEL_HIBERNATE_BIND:ERROR}
management:
    endpoints:
        web:
            exposure:
                include: health,info,metrics,prometheus
    endpoint:
        metrics:
            enabled: true
        prometheus:
            enabled: true
client:
    nubo:
        url-operation-calculation: ${NUBO_URL_OPERATION_CALCULATION}
        url-operation-rules: ${NUBO_URL_OPERATION_RULES}
        url-operation-fractionation: ${NUBO_URL_OPERATION_FRACTIONATION}
        url-operation-query: ${NUBO_URL_OPERATION_QUERY}
    mila:
        local:
            country-id-colombia: ${NUBO_MILA_LOCAL_COUNTRY_ID_COLOMBIA}
            identification-type-nit: ${NUBO_MILA_LOCAL_IDENTIFICATION_TYPE_NIT}
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
            topic-name-final-assignment-request: ${KAFKA_NUBO_TOPIC_NAME_FINAL_ASSIGNMENT_REQUEST}
            topic-name-correction-request: ${KAFKA_NUBO_TOPIC_NAME_CORRECTIONS:correction-request-topic}
            linger-ms: ${KAFKA_NUBO_PRODUCER_LINGER_MS:100}
            batch-size: ${KAFKA_NUBO_PRODUCER_BATCH_SIZE:8192}
            compression-type: ${KAFKA_NUBO_PRODUCER_COMPRESSION_TYPE:snappy}
            acks: ${KAFKA_NUBO_PRODUCER_ACKS:1}

```

## src/main/resources/application-local.yml

```yaml
server:
    port: 8083
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
            pool-name: "${hikari.pool.name}"
    jpa:
        open-in-view: false
        hibernate:
            ddl-auto: none
            default_schema: NUANBODB
        show-sql: "true"
        database-platform: org.hibernate.dialect.PostgreSQLDialect
logging:
    config: classpath:log/log4j2.properties
    level:
        org.hibernate: ERROR
        org.springframework.jdbc.datasource: ERROR
        com.zaxxer.hikari: ERROR
        com.nubo.operations.cmd.api: DEBUG
management:
    endpoints:
        web:
            exposure:
                include: health,info,metrics,prometheus
    endpoint:
        metrics:
            enabled: true
        prometheus:
            enabled: true
client:
    nubo:
        url-operation-calculation: ${NUBO_URL_OPERATION_CALCULATION:localhost}
        url-operation-rules: ${NUBO_URL_OPERATION_RULES:localhost}
        url-operation-fractionation: ${NUBO_URL_OPERATION_FRACTIONATION:localhost}
        url-operation-query: ${NUBO_URL_OPERATION_QUERY}
    mila:
        local:
            country-id-colombia: ${NUBO_MILA_LOCAL_COUNTRY_ID_COLOMBIA}
            identification-type-nit: ${NUBO_MILA_LOCAL_IDENTIFICATION_TYPE_NIT}
kafka:
    nubo:
        retries: ${KAFKA_NUBO_RETRIES:2}
        bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
        auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
        security:
            protocol: PLAINTEXT
        sasl:
            mechanism: ""
            jaas:
                config: "org.apache.kafka.common.security.scram.ScramLoginModule required;"
        producer:
            topic-name-final-assignment-request: ${KAFKA_NUBO_TOPIC_NAME_FINAL_ASSIGNMENT_REQUEST}
            topic-name-correction-request: ${KAFKA_NUBO_TOPIC_NAME_CORRECTIONS:correction-request-topic}
            linger-ms: ${KAFKA_NUBO_PRODUCER_LINGER_MS:100}
            batch-size: ${KAFKA_NUBO_PRODUCER_BATCH_SIZE:8192}
            compression-type: ${KAFKA_NUBO_PRODUCER_COMPRESSION_TYPE:snappy}
            acks: ${KAFKA_NUBO_PRODUCER_ACKS:1}

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
            pool-name: "${hikari.pool.name}"
    jpa:
        open-in-view: false
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
management:
    endpoints:
        web:
            exposure:
                include: health,info,metrics,prometheus
    endpoint:
        metrics:
            enabled: true
        prometheus:
            enabled: true
client:
    nubo:
        url-operation-calculation: ${NUBO_URL_OPERATION_CALCULATION}
        url-operation-rules: ${NUBO_URL_OPERATION_RULES}
        url-operation-fractionation: ${NUBO_URL_OPERATION_FRACTIONATION}
        url-operation-query: ${NUBO_URL_OPERATION_QUERY}
    mila:
        local:
            country-id-colombia: ${NUBO_MILA_LOCAL_COUNTRY_ID_COLOMBIA}
            identification-type-nit: ${NUBO_MILA_LOCAL_IDENTIFICATION_TYPE_NIT}
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
            topic-name-final-assignment-request: ${KAFKA_NUBO_TOPIC_NAME_FINAL_ASSIGNMENT_REQUEST}
            topic-name-correction-request: ${KAFKA_NUBO_TOPIC_NAME_CORRECTIONS:correction-request-topic}
            linger-ms: ${KAFKA_NUBO_PRODUCER_LINGER_MS:100}
            batch-size: ${KAFKA_NUBO_PRODUCER_BATCH_SIZE:8192}
            compression-type: ${KAFKA_NUBO_PRODUCER_COMPRESSION_TYPE:snappy}
            acks: ${KAFKA_NUBO_PRODUCER_ACKS:1}

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
            pool-name: "${hikari.pool.name}"
    jpa:
        open-in-view: false
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
management:
    endpoints:
        web:
            exposure:
                include: health,info,metrics,prometheus
    endpoint:
        metrics:
            enabled: true
        prometheus:
            enabled: true
client:
    nubo:
        url-operation-calculation: ${NUBO_URL_OPERATION_CALCULATION}
        url-operation-rules: ${NUBO_URL_OPERATION_RULES}
        url-operation-fractionation: ${NUBO_URL_OPERATION_FRACTIONATION}
        url-operation-query: ${NUBO_URL_OPERATION_QUERY}
    mila:
        local:
            country-id-colombia: ${NUBO_MILA_LOCAL_COUNTRY_ID_COLOMBIA}
            identification-type-nit: ${NUBO_MILA_LOCAL_IDENTIFICATION_TYPE_NIT}
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
            topic-name-final-assignment-request: ${KAFKA_NUBO_TOPIC_NAME_FINAL_ASSIGNMENT_REQUEST}
            topic-name-correction-request: ${KAFKA_NUBO_TOPIC_NAME_CORRECTIONS:correction-request-topic}
            linger-ms: ${KAFKA_NUBO_PRODUCER_LINGER_MS:100}
            batch-size: ${KAFKA_NUBO_PRODUCER_BATCH_SIZE:8192}
            compression-type: ${KAFKA_NUBO_PRODUCER_COMPRESSION_TYPE:snappy}
            acks: ${KAFKA_NUBO_PRODUCER_ACKS:1}

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
        open-in-view: false
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
management:
    endpoints:
        web:
            exposure:
                include: health,info,metrics,prometheus
    endpoint:
        metrics:
            enabled: true
        prometheus:
            enabled: true
client:
    nubo:
        url-operation-calculation: ${NUBO_URL_OPERATION_CALCULATION}
        url-operation-rules: ${NUBO_URL_OPERATION_RULES}
        url-operation-fractionation: ${NUBO_URL_OPERATION_FRACTIONATION}
        url-operation-query: ${NUBO_URL_OPERATION_QUERY}
    mila:
        local:
            country-id-colombia: ${NUBO_MILA_LOCAL_COUNTRY_ID_COLOMBIA}
            identification-type-nit: ${NUBO_MILA_LOCAL_IDENTIFICATION_TYPE_NIT}
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
            topic-name-final-assignment-request: ${KAFKA_NUBO_TOPIC_NAME_FINAL_ASSIGNMENT_REQUEST}
            topic-name-correction-request: ${KAFKA_NUBO_TOPIC_NAME_CORRECTIONS:correction-request-topic}
            linger-ms: ${KAFKA_NUBO_PRODUCER_LINGER_MS:100}
            batch-size: ${KAFKA_NUBO_PRODUCER_BATCH_SIZE:8192}
            compression-type: ${KAFKA_NUBO_PRODUCER_COMPRESSION_TYPE:snappy}
            acks: ${KAFKA_NUBO_PRODUCER_ACKS:1}

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
nubo:
  assignment:
    batch:
      processing-size: ${NUBO_ASSIGNMENT_BATCH_PROCESSING_SIZE:80}
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
 ,-----. ,------. ,------.,------.   ,---. ,--------.,--. ,-----. ,--.  ,--. ,---.    ,-----.,--.   ,--.,------.     ,---.  ,------. ,--.
'  .-.  '|  .--. '|  .---'|  .--. ' /  O  \'--.  .--'|  |'  .-.  '|  ,'.|  |'   .-'  '  .--./|   `.'   ||  .-.  \   /  O  \ |  .--. '|  |
|  | |  ||  '--' ||  `--, |  '--'.'|  .-.  |  |  |   |  ||  | |  ||  |' '  |`.  `-.  |  |    |  |'.'|  ||  |  \  : |  .-.  ||  '--' ||  |
'  '-'  '|  | --' |  `---.|  |\  \ |  | |  |  |  |   |  |'  '-'  '|  | `   |.-'    | '  '--'\|  |   |  ||  '--'  / |  | |  ||  | --' |  |
 `-----' `--'     `------'`--' '--'`--' `--'  `--'   `--' `-----' `--'  `--'`-----'   `-----'`--'   `--'`-------'  `--' `--'`--'     `--'

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

## src/main/resources/sql/indexes/fraction_performance_indexes_down.sql

```sql
-- Rollback for fraction performance indexes (PostgreSQL)

DROP INDEX IF EXISTS "NUANBODB".idx_settlement_trade_side_participant_account;
DROP INDEX IF EXISTS "NUANBODB".idx_settlement_trade_side_investor_account;
DROP INDEX IF EXISTS "NUANBODB".idx_settlement_trade_side;
DROP INDEX IF EXISTS "NUANBODB".idx_settlement_trade_side_fraction;

```

## src/main/resources/sql/indexes/fraction_performance_indexes_up.sql

```sql
-- Fraction performance indexes (PostgreSQL)
-- Scope: fraction/fractionation read and update paths over NUANBODB.SETTLEMENT

-- 1) Main lookup path: trade + side + fraction
CREATE INDEX IF NOT EXISTS idx_settlement_trade_side_fraction
    ON "NUANBODB"."SETTLEMENT" ("TRADE_ID", "SIDE_ID", "FRACTION");

-- 2) Frequent filtering path: trade + side
CREATE INDEX IF NOT EXISTS idx_settlement_trade_side
    ON "NUANBODB"."SETTLEMENT" ("TRADE_ID", "SIDE_ID");

-- 3) Validation support by investor account
CREATE INDEX IF NOT EXISTS idx_settlement_trade_side_investor_account
    ON "NUANBODB"."SETTLEMENT" ("TRADE_ID", "SIDE_ID", "INVESTOR_ACCOUNT_ID");

-- 4) Validation support by participant account
CREATE INDEX IF NOT EXISTS idx_settlement_trade_side_participant_account
    ON "NUANBODB"."SETTLEMENT" ("TRADE_ID", "SIDE_ID", "PARTICIPANT_ACCOUNT_ID");

```

## src/main/java/com/nubo/operations/cmd/api/OperationsCmdApiApplication.java

```java

package com.nubo.operations.cmd.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class OperationsCmdApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(OperationsCmdApiApplication.class, args);
    }

}

```

## src/main/java/com/nubo/operations/cmd/api/application/annotations/DecimalScale.java

```java
package com.nubo.operations.cmd.api.application.annotations;

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

## src/main/java/com/nubo/operations/cmd/api/application/annotations/ValidBigDecimal.java

```java
package com.nubo.operations.cmd.api.application.annotations;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import com.nubo.operations.cmd.api.application.config.ValidBigDecimalConfig;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

@Constraint(validatedBy = ValidBigDecimalConfig.class)
@Target({
        ElementType.METHOD, ElementType.FIELD, ElementType.ANNOTATION_TYPE, ElementType.PARAMETER
})
@Retention(RetentionPolicy.RUNTIME)
public @interface ValidBigDecimal {
    String message() default "";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};

    int precision();

    int scale();
}

```

## src/main/java/com/nubo/operations/cmd/api/application/config/CacheConfig.java

```java
package com.nubo.operations.cmd.api.application.config;

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
                buildCache("sides", 1, TimeUnit.HOURS),
                buildCache("typesCategoryDescription", 1, TimeUnit.HOURS),
                buildCache("types", 10, TimeUnit.MINUTES),
                buildCache("directDepositories", 10, TimeUnit.MINUTES),
                buildCache("businessRulesByCode", 2, TimeUnit.MINUTES),
                buildCache("businessRulesByCountryCode", 2, TimeUnit.MINUTES),
                buildCache("businessRulesByCountryCodeValid", 2, TimeUnit.MINUTES)));

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

## src/main/java/com/nubo/operations/cmd/api/application/config/KafkaProducerConfig.java

```java
package com.nubo.operations.cmd.api.application.config;

import lombok.RequiredArgsConstructor;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.common.serialization.StringSerializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.ProducerFactory;

import com.nubo.operations.cmd.api.application.properties.PropertiesConfig;

import java.util.HashMap;
import java.util.Map;

@Configuration
@RequiredArgsConstructor
public class KafkaProducerConfig {

    private final PropertiesConfig propertiesConfig;

    @Bean
    ProducerFactory<String, String> producerFactoryKafkaNubo() {
        Map<String, Object> configProps = new HashMap<>();
        configProps.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, propertiesConfig.getKafkaNuboBootstrapServers());
        configProps.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        configProps.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        configProps.put("security.protocol", propertiesConfig.getKafkaNuboSecurityProtocol());

        configProps.put("sasl.mechanism", propertiesConfig.getKafkaNuboSaslMechanism());
        configProps.put("sasl.jaas.config", propertiesConfig.getKafkaNuboSaslJaasConfig());
        configProps.put(ProducerConfig.LINGER_MS_CONFIG, propertiesConfig.getKafkaNuboProducerLingerMs());
        configProps.put(ProducerConfig.BATCH_SIZE_CONFIG, propertiesConfig.getKafkaNuboProducerBatchSize());
        configProps.put(ProducerConfig.COMPRESSION_TYPE_CONFIG, propertiesConfig.getKafkaNuboProducerCompressionType());
        configProps.put(ProducerConfig.ACKS_CONFIG, propertiesConfig.getKafkaNuboProducerAcks());

        return new DefaultKafkaProducerFactory<>(configProps);
    }

    @Bean
    KafkaTemplate<String, String> kafkaNuboTemplate() {
        return new KafkaTemplate<>(producerFactoryKafkaNubo());
    }
}

```

## src/main/java/com/nubo/operations/cmd/api/application/config/MetricsConfig.java

```java
package com.nubo.operations.cmd.api.application.config;


import io.micrometer.core.aop.TimedAspect;
import io.micrometer.core.instrument.MeterRegistry;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MetricsConfig {

    @Bean
    public TimedAspect timedAspect(MeterRegistry meterRegistry) {
        return new TimedAspect(meterRegistry);
    }
}

```

## src/main/java/com/nubo/operations/cmd/api/application/config/SwaggerConfig.java

```java
package com.nubo.operations.cmd.api.application.config;

import java.util.List;

import org.springdoc.core.customizers.GlobalOpenApiCustomizer;
import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import com.nubo.operations.cmd.api.exception.error.ErrorResponse;
import com.nubo.operations.cmd.api.exception.error.ErrorValidation;
import com.nubo.operations.cmd.api.models.enums.PropertiesEnum;

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
        return openApi -> openApi.getPaths().values().stream()
                .flatMap(pathItem -> pathItem.readOperations().stream())
                .forEach(operation -> {
                    operation.addParametersItem(
                            new HeaderParameter().name(PropertiesEnum.CLIENT_IP.getValue())
                                    .in(ParameterIn.HEADER.toString())
                                    .required(true).example("127.0.0.1"))
                            .addParametersItem(new HeaderParameter()
                                    .name(PropertiesEnum.CLIENT_USER.getValue())
                                    .in(ParameterIn.HEADER.toString())
                                    .required(true).example("admin"))
                            .addParametersItem(new HeaderParameter()
                                    .name(PropertiesEnum.CLIENT_DATETIME.getValue())
                                    .in(ParameterIn.HEADER.toString())
                                    .required(true).example("2024-09-11T15:30:00"))
                            .addParametersItem(new Parameter().name("version")
                                    .in(ParameterIn.PATH.toString())
                                    .required(true).example("v1"))
                            .getResponses()
                            .addApiResponse("500",
                                    new ApiResponse().description("Error Response")
                                            .content(content));
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

## src/main/java/com/nubo/operations/cmd/api/application/config/ValidBigDecimalConfig.java

```java
package com.nubo.operations.cmd.api.application.config;

import java.math.BigDecimal;

import com.nubo.operations.cmd.api.application.annotations.ValidBigDecimal;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

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
                    message.isEmpty() ? String.format(
                            "The value must have a maximum precision of %d, a maximum scale of %d " +
                                    "and round to an absolute value less than 10^%d.",
                            precision, scale, precision - scale) : message)
                    .addConstraintViolation();
        }
        return isValid;
    }
}

```

## src/main/java/com/nubo/operations/cmd/api/application/config/WebConfig.java

```java
package com.nubo.operations.cmd.api.application.config;

import java.time.Duration;
import java.util.Locale;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.lang.NonNull;
import org.springframework.web.client.RestClient;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;

import com.nubo.operations.cmd.api.application.interceptors.GlobalInterceptor;

import lombok.RequiredArgsConstructor;

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
    public void addInterceptors(@NonNull InterceptorRegistry registry) {
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

## src/main/java/com/nubo/operations/cmd/api/application/context/GlobalContext.java

```java
package com.nubo.operations.cmd.api.application.context;

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

    public static Map<String, Object> getAll() {
        return context.get();
    }

    public static void setAll(Map<String, Object> snapshot) {
        context.get().putAll(snapshot);
    }

}

```

## src/main/java/com/nubo/operations/cmd/api/application/database/NamingStrategyConfig.java

```java
package com.nubo.operations.cmd.api.application.database;

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

## src/main/java/com/nubo/operations/cmd/api/application/database/UpperNamingConfig.java

```java
package com.nubo.operations.cmd.api.application.database;

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

## src/main/java/com/nubo/operations/cmd/api/application/filters/GlobalFilter.java

```java
package com.nubo.operations.cmd.api.application.filters;

import java.io.IOException;
import java.net.InetAddress;
import java.time.LocalDateTime;

import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import com.nubo.operations.cmd.api.application.context.GlobalContext;
import com.nubo.operations.cmd.api.application.util.ApplicationUtils;
import com.nubo.operations.cmd.api.exception.ServiceException;
import com.nubo.operations.cmd.api.exception.error.ErrorCode;
import com.nubo.operations.cmd.api.exception.error.ErrorResponse;
import com.nubo.operations.cmd.api.models.entity.UserNuboEntity;
import com.nubo.operations.cmd.api.models.enums.PropertiesEnum;
import com.nubo.operations.cmd.api.models.enums.VersionApiEnum;
import com.nubo.operations.cmd.api.repository.UserNuboRepository;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@Order(1)
@RequiredArgsConstructor
@Slf4j
public class GlobalFilter extends OncePerRequestFilter {

    private final UserNuboRepository userNuboRepository;

    @Override
    protected void doFilterInternal(@NonNull HttpServletRequest request, @NonNull HttpServletResponse response,
            @NonNull FilterChain chain)
            throws ServletException, IOException {
        String uri = request.getRequestURI();
        if (uri.contains("/v3/api-docs") || uri.contains("/swagger-ui") || uri.contains("/actuator")) {
            chain.doFilter(request, response);
            return;
        }

        long startTime = System.currentTimeMillis();
        try {
            String versionPath = this.validateVersionPath(request);
            String clientUserHeader = this.validateClientUserHeader(request);
            String clientDatetime = this.validateClientDatetimeHeader(request);

            String clientIpHeader;
            UserNuboEntity userNuboEntity;
            if (Boolean.TRUE.equals(validateClientBackend(request))) {
                clientIpHeader = "127.0.0.1";
                userNuboEntity = new UserNuboEntity();
            } else {
                clientIpHeader = this.validateClientIpHeader(request);
                userNuboEntity = this.validateUserExists(clientUserHeader);
            }

            GlobalContext.setProperty(PropertiesEnum.VERSION_API.getValue(),
                    VersionApiEnum.fromValue(versionPath).getValue());
            GlobalContext.setProperty(PropertiesEnum.CLIENT_IP.getValue(), clientIpHeader);
            GlobalContext.setProperty(PropertiesEnum.CLIENT_USER.getValue(), clientUserHeader);
            GlobalContext.setProperty(PropertiesEnum.CLIENT_DATETIME.getValue(), clientDatetime);
            GlobalContext.setProperty(PropertiesEnum.CLIENT_USER_ENTITY.getValue(), userNuboEntity);

            chain.doFilter(request, response);

        } catch (ServiceException ex) {
            handleServiceException(ex, request, response);
        } finally {
            log.info("Request [{} {}] completed in {} ms with status {}",
                    request.getMethod(), uri, System.currentTimeMillis() - startTime, response.getStatus());
        }
    }

    private Boolean validateClientBackend(HttpServletRequest request) {
        String headerClientBackend = request.getHeader(PropertiesEnum.CLIENT_BACKEND.getValue());
        if (headerClientBackend == null || headerClientBackend.isEmpty()) {
            return false;
        }
        try {
            return Boolean.parseBoolean(headerClientBackend);
        } catch (Exception e) {
            return false;
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
}

```

## src/main/java/com/nubo/operations/cmd/api/application/interceptors/GlobalInterceptor.java

```java
package com.nubo.operations.cmd.api.application.interceptors;

import org.springframework.core.annotation.Order;
import org.springframework.lang.NonNull;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import com.nubo.operations.cmd.api.application.context.GlobalContext;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Component
@Order(2)
@RequiredArgsConstructor
public class GlobalInterceptor implements HandlerInterceptor {

    @Override
    public void afterCompletion(@NonNull HttpServletRequest request, @NonNull HttpServletResponse response,
            @NonNull Object handler,
            @Nullable Exception ex) {
        GlobalContext.remove();
    }

}

```

## src/main/java/com/nubo/operations/cmd/api/application/properties/PropertiesConfig.java

```java
package com.nubo.operations.cmd.api.application.properties;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import lombok.Data;

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

    @Value("${client.nubo.url-operation-query}")
    private String urlNuboOperationQuery;

    @Value("${kafka.nubo.bootstrap-servers}")
    private String kafkaNuboBootstrapServers;

    @Value("${kafka.nubo.sasl.mechanism}")
    private String kafkaNuboSaslMechanism;

    @Value("${kafka.nubo.sasl.jaas.config}")
    private String kafkaNuboSaslJaasConfig;

    @Value("${kafka.nubo.security.protocol}")
    private String kafkaNuboSecurityProtocol;

    @Value("${kafka.nubo.producer.topic-name-final-assignment-request}")
    private String kafkaNuboProducerTopicFinalAssignmentRequest;

    @Value("${kafka.nubo.producer.topic-name-correction-request}")
    private String kafkaNuboProducerTopicCorrectionRequest;

    @Value("${kafka.nubo.producer.linger-ms}")
    private Integer kafkaNuboProducerLingerMs;

    @Value("${kafka.nubo.producer.batch-size}")
    private Integer kafkaNuboProducerBatchSize;

    @Value("${kafka.nubo.producer.compression-type}")
    private String kafkaNuboProducerCompressionType;

    @Value("${kafka.nubo.producer.acks}")
    private String kafkaNuboProducerAcks;

    @Value("${client.mila.local.country-id-colombia}")
    private Long  milaLocalCountryIdColombia;

    @Value("${client.mila.local.identification-type-nit}")
    private String milaLocalIdentificationTypeNit;

    @Value("${nubo.assignment.batch.processing-size:50}")
    private int maxBatchSize = 10;
}

```

## src/main/java/com/nubo/operations/cmd/api/application/properties/PropertiesContext.java

```java
package com.nubo.operations.cmd.api.application.properties;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.util.ObjectUtils;

import com.nubo.operations.cmd.api.application.context.GlobalContext;
import com.nubo.operations.cmd.api.application.util.ApplicationUtils;
import com.nubo.operations.cmd.api.models.entity.UserNuboEntity;
import com.nubo.operations.cmd.api.models.enums.PropertiesEnum;

public class PropertiesContext {

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

}

```

## src/main/java/com/nubo/operations/cmd/api/application/serializers/BigDecimalSerializer.java

```java
package com.nubo.operations.cmd.api.application.serializers;

import java.io.IOException;
import java.math.BigDecimal;
import java.math.RoundingMode;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.BeanProperty;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.ContextualSerializer;
import com.nubo.operations.cmd.api.application.annotations.DecimalScale;

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

## src/main/java/com/nubo/operations/cmd/api/application/util/ApplicationUtils.java

```java
package com.nubo.operations.cmd.api.application.util;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.nubo.operations.cmd.api.exception.ServiceException;
import com.nubo.operations.cmd.api.exception.error.ErrorCode;

public final class ApplicationUtils {

    private static final ObjectMapper MAPPER = new ObjectMapper()
            .registerModule(new JavaTimeModule())
            .disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);

    private static final String FORMAT_DATETIME = "yyyy-MM-dd'T'HH:mm:ss";
    private static final String FORMAT_DATE = "yyyy-MM-dd";

    private ApplicationUtils() {
        // Utility class
    }

    public static String getFormatDatetime() {
        return FORMAT_DATETIME;
    }

    public static String getLocalDateTimeNow() {
        return LocalDateTime.now()
                .format(DateTimeFormatter.ofPattern(FORMAT_DATETIME));
    }

    public static String convertLocalDateTimeToString(LocalDateTime localDateTime) {
        return localDateTime.format(DateTimeFormatter.ofPattern(FORMAT_DATETIME));
    }

    public static LocalDateTime convertStringToLocalDateTime(String timeString) {
        return LocalDateTime.parse(
                timeString,
                DateTimeFormatter.ofPattern(FORMAT_DATETIME));
    }

    public static LocalDate convertStringToLocalDate(String dateString) {
        return LocalDate.parse(
                dateString,
                DateTimeFormatter.ofPattern(FORMAT_DATE));
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

    public static Integer parseIntegerSafely(String value, ErrorCode errorCode) {
        try {
            return Integer.parseInt(value);
        } catch (NumberFormatException e) {
            throw new ServiceException(
                    errorCode,
                    "Error parsing integer value: " + value);
        }
    }

    public static Long parseLongSafely(String value, ErrorCode errorCode) {
        try {
            return Long.parseLong(value);
        } catch (NumberFormatException e) {
            throw new ServiceException(
                    errorCode,
                    "Error parsing long value: " + value);
        }
    }
}
```

## src/main/java/com/nubo/operations/cmd/api/application/util/RestClientUtils.java

```java
package com.nubo.operations.cmd.api.application.util;

import java.net.URI;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClient;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@RequiredArgsConstructor
@Slf4j
public class RestClientUtils {

    private final RestClient restClient;

    public <T> ResponseEntity<T> requestBodyWithResponseObject(URI url, HttpMethod method, HttpHeaders headers,
            Object requestBody, Class<T> responseType) {
        log.info("Client [{}] {}", method, url);
        log.debug("Request Body: {}", requestBody);
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

## src/main/java/com/nubo/operations/cmd/api/client/kafka/models/request/CorrectionFractionInDto.java

```java
package com.nubo.operations.cmd.api.client.kafka.models.request;

import java.math.BigDecimal;
import java.time.LocalDate;
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
public class CorrectionFractionInDto {

    private SideInDto side;

    private Integer fraction;

    private BigDecimal quantity;

    private InvestorAccountInDto investorAccount;

    private ParticipantAccountInDto participantAccount;

    private InvestorInDto investor;

    private ParticipantBankAccountInDto participantBankAccount;

    private BigDecimal cashAccount;

    private ParticipantInDto custodian;

    private ParticipantInDto ficAdministrator;

    private DirectDepositoryInDto directDepositor;

    private String reference;

    private String correctionNumber;

    private Integer originalFraction;

    private Boolean isNewFraction;

    private BigDecimal commissionPercentage;

    private LocalDate operationRegistrationDate;

    private List<Long> settlementCorrectionIds;

    private Boolean sendDeposit;
}

```

## src/main/java/com/nubo/operations/cmd/api/client/kafka/models/request/CorrectionRequestInDto.java

```java
package com.nubo.operations.cmd.api.client.kafka.models.request;

import java.time.LocalDate;
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
public class CorrectionRequestInDto {

    private Long tradeId;

    private SideInDto side;

    private Long matchId;

    private LocalDate matchDate;

    private LocalDate clearingDate;

    private LocalDate returnClearingDate;

    private TypeInDto type;

    private Boolean isFractional;

    private CountryInDto country;

    private String mnemonic;

    private String isin;

    private DepositoryInDto depository;

    private Boolean isNuboAllocation;

    private List<CorrectionFractionInDto> fractions;

    private TypeInDto correctionType;

    private Boolean isCorrection;

    private String clientUser;

    private String clientIp;

}

```

## src/main/java/com/nubo/operations/cmd/api/client/kafka/models/request/CountryInDto.java

```java
package com.nubo.operations.cmd.api.client.kafka.models.request;

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
public class CountryInDto {

    private Long id;

    private String code;

    private String name;

}

```

## src/main/java/com/nubo/operations/cmd/api/client/kafka/models/request/DepositoryInDto.java

```java
package com.nubo.operations.cmd.api.client.kafka.models.request;

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
public class DepositoryInDto {

    private String id;

    private String description;

}

```

## src/main/java/com/nubo/operations/cmd/api/client/kafka/models/request/DirectDepositoryInDto.java

```java
package com.nubo.operations.cmd.api.client.kafka.models.request;

import com.fasterxml.jackson.annotation.JsonInclude;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.ALWAYS)
public class DirectDepositoryInDto {

    private Long id;

    private Long participantId;

    private String depositoryId;

    @NotNull
    private String directDepositoryNumber;

}

```

## src/main/java/com/nubo/operations/cmd/api/client/kafka/models/request/FinalAssignmentFractionInDto.java

```java
package com.nubo.operations.cmd.api.client.kafka.models.request;

import java.math.BigDecimal;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.nubo.operations.cmd.api.application.annotations.DecimalScale;
import com.nubo.operations.cmd.api.application.serializers.BigDecimalSerializer;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class FinalAssignmentFractionInDto {

    private SideInDto side;

    private Integer fraction;

    @DecimalScale()
    @JsonSerialize(using = BigDecimalSerializer.class)
    private BigDecimal quantity;

    private InvestorAccountInDto investorAccount;

    private ParticipantAccountInDto participantAccount;

    private ParticipantBankAccountInDto participantBankAccount;

    private BigDecimal cashAccount;

    private ParticipantInDto custodian;

    private ParticipantInDto ficAdministrator;

    private DirectDepositoryInDto directDepositor;

    private String reference;

}

```

## src/main/java/com/nubo/operations/cmd/api/client/kafka/models/request/FinalAssignmentInDto.java

```java
package com.nubo.operations.cmd.api.client.kafka.models.request;

import java.time.LocalDate;
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
public class FinalAssignmentInDto {

    private Long tradeId;

    private SideInDto side;

    private Long matchId;

    private LocalDate matchDate;

    private LocalDate clearingDate;

    private LocalDate returnClearingDate;

    private TypeInDto type;

    private Boolean isFractional;

    private CountryInDto country;

    private String mnemonic;

    private String isin;

    private DepositoryInDto depository;

    private Boolean isNuboAllocation;

    private String reference;

    private ParticipantInDto participant;

    private List<FinalAssignmentFractionInDto> fractions;

}

```

## src/main/java/com/nubo/operations/cmd/api/client/kafka/models/request/InvestorAccountInDto.java

```java
package com.nubo.operations.cmd.api.client.kafka.models.request;

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
public class InvestorAccountInDto {

    private Long id;

    private InvestorInDto investor;

    private String accountNumber;

}

```

## src/main/java/com/nubo/operations/cmd/api/client/kafka/models/request/InvestorInDto.java

```java
package com.nubo.operations.cmd.api.client.kafka.models.request;

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

    private String firstName;

    private String lastName;

    private String companyName;

    private String documentNumber;

    private String identificationTypeCode;

}

```

## src/main/java/com/nubo/operations/cmd/api/client/kafka/models/request/ParticipantAccountInDto.java

```java
package com.nubo.operations.cmd.api.client.kafka.models.request;

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
public class ParticipantAccountInDto {

    private Long id;

    private ParticipantInDto participant;

    private String accountNumber;

}

```

## src/main/java/com/nubo/operations/cmd/api/client/kafka/models/request/ParticipantBankAccountInDto.java

```java
package com.nubo.operations.cmd.api.client.kafka.models.request;

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
public class ParticipantBankAccountInDto {

    private Long id;

    private String bankAccount;

    private Boolean principal;

}

```

## src/main/java/com/nubo/operations/cmd/api/client/kafka/models/request/ParticipantInDto.java

```java
package com.nubo.operations.cmd.api.client.kafka.models.request;

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

    private String directDepositoryNumber;

}

```

## src/main/java/com/nubo/operations/cmd/api/client/kafka/models/request/SideInDto.java

```java
package com.nubo.operations.cmd.api.client.kafka.models.request;

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
public class SideInDto {

    private String id;

    private String name;

}

```

## src/main/java/com/nubo/operations/cmd/api/client/kafka/models/request/TypeInDto.java

```java
package com.nubo.operations.cmd.api.client.kafka.models.request;

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
public class TypeInDto {

    private Long id;

    private String description;

    private String category;
}

```

## src/main/java/com/nubo/operations/cmd/api/client/kafka/producer/KafkaNuboAdapterProducer.java

```java
package com.nubo.operations.cmd.api.client.kafka.producer;

import java.util.concurrent.CompletableFuture;

import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.stereotype.Component;

import com.nubo.operations.cmd.api.application.properties.PropertiesConfig;
import com.nubo.operations.cmd.api.application.util.ApplicationUtils;
import com.nubo.operations.cmd.api.client.kafka.models.request.CorrectionRequestInDto;
import com.nubo.operations.cmd.api.client.kafka.models.request.FinalAssignmentInDto;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@RequiredArgsConstructor
@Slf4j
public class KafkaNuboAdapterProducer {

    private final PropertiesConfig propertiesConfig;
    private final KafkaTemplate<String, String> kafkaNuboTemplate;

    public void sendMessageFinalAssignmentRequestSync(String key, FinalAssignmentInDto finalAssignmentRequestDto) {
        String topicName = propertiesConfig.getKafkaNuboProducerTopicFinalAssignmentRequest();
        String jsonMessage = ApplicationUtils.convertObjectToJson(finalAssignmentRequestDto);
        CompletableFuture<SendResult<String, String>> future = kafkaNuboTemplate.send(
                topicName, key, jsonMessage)
                .toCompletableFuture();
        future.whenComplete((result, ex) -> {
            if (ex != null) {
                log.error("Error sending message to topic: {}, Exception: {}", topicName, ex.getMessage());
                return;
            }
            log.info("Send message -- Topic: {} -- offset: {} -- partition: {}",
                    topicName, result.getRecordMetadata().offset(), result.getRecordMetadata().partition());
        });
    }

    public void sendMessageCorrectionRequestSync(String key, CorrectionRequestInDto correctionRequestDto) {
        String topicName = propertiesConfig.getKafkaNuboProducerTopicCorrectionRequest();
        String jsonMessage = ApplicationUtils.convertObjectToJson(correctionRequestDto);
        CompletableFuture<SendResult<String, String>> future = kafkaNuboTemplate.send(
                topicName, key, jsonMessage)
                .toCompletableFuture();
        future.whenComplete((result, ex) -> {
            if (ex != null) {
                log.error("Error sending correction message to topic: {}, Exception: {}", topicName, ex.getMessage());
                return;
            }
            log.debug("Send message -- Topic: {} -- offset: {} -- partition: {}",
                    topicName, result.getRecordMetadata().offset(), result.getRecordMetadata().partition());
        });
    }
}

```

## src/main/java/com/nubo/operations/cmd/api/client/operation/calculation/models/dto/request/SettleAccountsInDto.java

```java
package com.nubo.operations.cmd.api.client.operation.calculation.models.dto.request;

import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SettleAccountsInDto {

    private BigDecimal quantity;

    private BigDecimal price;

    private BigDecimal commission;

    private BigDecimal valTax;

    private String sideId;

    private Long typeId;

}

```

## src/main/java/com/nubo/operations/cmd/api/client/operation/calculation/models/dto/response/SettleAccountsOutDto.java

```java
package com.nubo.operations.cmd.api.client.operation.calculation.models.dto.response;

import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

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
}

```

## src/main/java/com/nubo/operations/cmd/api/client/operation/calculation/service/OperationCalculationClient.java

```java
package com.nubo.operations.cmd.api.client.operation.calculation.service;

import com.nubo.operations.cmd.api.client.operation.calculation.models.dto.request.SettleAccountsInDto;
import com.nubo.operations.cmd.api.client.operation.calculation.models.dto.response.SettleAccountsOutDto;

public interface OperationCalculationClient {

    SettleAccountsOutDto getSettleAccounts(SettleAccountsInDto settleAccountsInDto);
}

```

## src/main/java/com/nubo/operations/cmd/api/client/operation/calculation/service/impl/OperationCalculationClientImpl.java

```java
package com.nubo.operations.cmd.api.client.operation.calculation.service.impl;

import java.net.URI;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;
import org.springframework.web.util.UriComponentsBuilder;

import com.nubo.operations.cmd.api.application.properties.PropertiesConfig;
import com.nubo.operations.cmd.api.application.properties.PropertiesContext;
import com.nubo.operations.cmd.api.application.util.ApplicationUtils;
import com.nubo.operations.cmd.api.application.util.RestClientUtils;
import com.nubo.operations.cmd.api.client.operation.calculation.models.dto.request.SettleAccountsInDto;
import com.nubo.operations.cmd.api.client.operation.calculation.models.dto.response.SettleAccountsOutDto;
import com.nubo.operations.cmd.api.client.operation.calculation.service.OperationCalculationClient;
import com.nubo.operations.cmd.api.exception.ClientException;
import com.nubo.operations.cmd.api.exception.error.ErrorCode;
import com.nubo.operations.cmd.api.models.enums.PropertiesEnum;
import com.nubo.operations.cmd.api.models.enums.VersionApiEnum;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

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
        
        headers.set(PropertiesEnum.CLIENT_IP.getValue(), PropertiesContext.getClientIp());
        headers.set(PropertiesEnum.CLIENT_USER.getValue(), PropertiesContext.getClientUser());
        headers.set(PropertiesEnum.CLIENT_DATETIME.getValue(),
                ApplicationUtils.convertLocalDateTimeToString(PropertiesContext.getClientDatetime()));
        headers.setContentType(MediaType.APPLICATION_JSON);
        return headers;
    }

}

```

## src/main/java/com/nubo/operations/cmd/api/client/operation/fractionation/models/dto/request/BatchAssignmentClientInDto.java

```java
package com.nubo.operations.cmd.api.client.operation.fractionation.models.dto.request;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BatchAssignmentClientInDto {

    private String batchId;
    private List<BatchAssignmentItemClientInDto> items;
}

```

## src/main/java/com/nubo/operations/cmd/api/client/operation/fractionation/models/dto/request/BatchAssignmentItemClientInDto.java

```java
package com.nubo.operations.cmd.api.client.operation.fractionation.models.dto.request;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BatchAssignmentItemClientInDto {

    private String itemId;
    private String topic;
    private Integer partition;
    private Long offset;
    private String key;
    private String correlationId;
    private Long tradeId;
    private String sideId;
    private String operationType;
    private List<FractionClientInDto> fractions;
}

```

## src/main/java/com/nubo/operations/cmd/api/client/operation/fractionation/models/dto/request/CorrectionClientInDto.java

```java
package com.nubo.operations.cmd.api.client.operation.fractionation.models.dto.request;

import java.math.BigDecimal;
import java.util.List;

import com.nubo.operations.cmd.api.application.annotations.ValidBigDecimal;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CorrectionClientInDto {

    @NotNull
    private Integer fraction;

    private String reference;

    @ValidBigDecimal(precision = 6, scale = 4)
    private BigDecimal commissionPercentage;

    private List<Long> settlementCorrectionIds;

}

```

## src/main/java/com/nubo/operations/cmd/api/client/operation/fractionation/models/dto/request/FractionClientInDto.java

```java
package com.nubo.operations.cmd.api.client.operation.fractionation.models.dto.request;

import java.math.BigDecimal;

import com.nubo.operations.cmd.api.application.annotations.ValidBigDecimal;

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
public class FractionClientInDto {

    @Min(value = 1)
    private Long investorAccountId;

    @Min(value = 1)
    private Long participantAccountId;

    @NotNull
    private Boolean fiduciarySpecialist;

    @NotNull
    @Min(value = 1)
    private Long sourceQuoteTypeId;

    private String reference;

    @NotNull
    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal fractionQuantity;

    @NotNull
    @ValidBigDecimal(precision = 6, scale = 4)
    private BigDecimal commissionPercentage;

    @ValidBigDecimal(precision = 6, scale = 4)
    private BigDecimal valTax;

    @ValidBigDecimal(precision = 20, scale = 0)
    private BigDecimal cashAccount;

    @Min(value = 1)
    private Long custodianId;

    @Min(value = 1)
    private Long ficAdministratorId;

    @Min(value = 1)
    private Long transferParticipantId;

    private Long milaDirectDepositorId;

    private Boolean haveAssignmentMark;

    private Long uniqueFractionId;

    private Long custodianStatusId;

    private String referencePackage;
}

```

## src/main/java/com/nubo/operations/cmd/api/client/operation/fractionation/models/dto/response/BatchAssignmentClientOutDto.java

```java
package com.nubo.operations.cmd.api.client.operation.fractionation.models.dto.response;

import java.util.List;

import com.nubo.operations.cmd.api.models.dto.response.BusinessRuleCodeOutDto;
import com.nubo.operations.cmd.api.models.dto.response.SettlementOutDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BatchAssignmentClientOutDto {

    private String batchId;
    private List<BatchAssignmentItemClientOutDto> items;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class BatchAssignmentItemClientOutDto {
        private String itemId;
        private String topic;
        private Integer partition;
        private Long offset;
        private String key;
        private String correlationId;
        private Long tradeId;
        private String sideId;
        private Boolean success;
        private List<SettlementOutDto> settlements;
        private String errorCode;
        private String errorMessage;
        private BusinessRuleCodeOutDto businessRuleCode;
    }
}

```

## src/main/java/com/nubo/operations/cmd/api/client/operation/fractionation/service/OperationFractionationClient.java

```java
package com.nubo.operations.cmd.api.client.operation.fractionation.service;

import java.util.List;

import com.nubo.operations.cmd.api.client.operation.fractionation.models.dto.request.CorrectionClientInDto;
import com.nubo.operations.cmd.api.client.operation.fractionation.models.dto.request.FractionClientInDto;
import com.nubo.operations.cmd.api.client.operation.fractionation.models.dto.request.BatchAssignmentClientInDto;
import com.nubo.operations.cmd.api.client.operation.fractionation.models.dto.response.BatchAssignmentClientOutDto;
import com.nubo.operations.cmd.api.models.dto.response.SettlementOutDto;

public interface OperationFractionationClient {

    BatchAssignmentClientOutDto processBatch(BatchAssignmentClientInDto request);

    List<SettlementOutDto> createFractionsAssignment(Long tradeId, String sideId,
            List<FractionClientInDto> fractionClientInDtoList);

    List<SettlementOutDto> updateFractionsAssignment(Long tradeId, String sideId,
            List<FractionClientInDto> fractionClientInDtoList);

    List<SettlementOutDto> updateFractionsCorrection(Long tradeId, String sideId, Long statusId,
            List<CorrectionClientInDto> correctionClientInDtoList);

}

```

## src/main/java/com/nubo/operations/cmd/api/client/operation/fractionation/service/impl/OperationFractionationClientImpl.java

```java
package com.nubo.operations.cmd.api.client.operation.fractionation.service.impl;

import com.nubo.operations.cmd.api.application.properties.PropertiesConfig;
import com.nubo.operations.cmd.api.application.properties.PropertiesContext;
import com.nubo.operations.cmd.api.application.util.ApplicationUtils;
import com.nubo.operations.cmd.api.application.util.RestClientUtils;
import com.nubo.operations.cmd.api.client.operation.fractionation.models.dto.request.CorrectionClientInDto;
import com.nubo.operations.cmd.api.client.operation.fractionation.models.dto.request.FractionClientInDto;
import com.nubo.operations.cmd.api.client.operation.fractionation.models.dto.request.BatchAssignmentClientInDto;
import com.nubo.operations.cmd.api.client.operation.fractionation.models.dto.response.BatchAssignmentClientOutDto;
import com.nubo.operations.cmd.api.client.operation.fractionation.service.OperationFractionationClient;
import com.nubo.operations.cmd.api.exception.ClientException;
import com.nubo.operations.cmd.api.exception.error.ErrorCode;
import com.nubo.operations.cmd.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.cmd.api.models.enums.PropertiesEnum;
import com.nubo.operations.cmd.api.models.enums.VersionApiEnum;
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
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class OperationFractionationClientImpl implements OperationFractionationClient {

    private final PropertiesConfig propertiesConfig;
    private final RestClientUtils restClientUtils;

    private static final String PATH_FRACTIONATION = "fractionation";

    @Override
    public BatchAssignmentClientOutDto processBatch(BatchAssignmentClientInDto request) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboOperationFractionation())
                .pathSegment(VersionApiEnum.V1.getValue(), PATH_FRACTIONATION)
                .path("/batch")
                .build()
                .toUri();

        try {
            ResponseEntity<BatchAssignmentClientOutDto> response = restClientUtils.requestBodyWithResponseObject(uri,
                    HttpMethod.POST, getHttpHeaders(), request, BatchAssignmentClientOutDto.class);
            if (!ObjectUtils.isEmpty(response.getBody())) {
                return response.getBody();
            }
        } catch (Exception ex) {
            throw new ClientException(ErrorCode.CLIENT_OPERATION_FRACTIONATION_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }
        return BatchAssignmentClientOutDto.builder().batchId(request.getBatchId()).items(List.of()).build();
    }

    @Override
    public List<SettlementOutDto> createFractionsAssignment(Long tradeId, String sideId,
            List<FractionClientInDto> fractionClientInDtoList) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboOperationFractionation())
                .pathSegment(VersionApiEnum.V1.getValue(), PATH_FRACTIONATION)
                .path("/create-fractions/trade/{tradeId}/side/{sideId}")
                .buildAndExpand(tradeId, sideId)
                .toUri();

        try {
            ResponseEntity<SettlementOutDto[]> response = restClientUtils.requestBodyWithResponseObject(uri,
                    HttpMethod.POST, getHttpHeaders(), fractionClientInDtoList, SettlementOutDto[].class);
            if (!ObjectUtils.isEmpty(response.getBody())) {
                return List.of(response.getBody());
            }
        } catch (Exception ex) {
            throw new ClientException(ErrorCode.CLIENT_OPERATION_FRACTIONATION_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return List.of(SettlementOutDto.builder().build());
    }

    @Override
    public List<SettlementOutDto> updateFractionsAssignment(Long tradeId, String sideId,
            List<FractionClientInDto> fractionClientInDtoList) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboOperationFractionation())
                .pathSegment(VersionApiEnum.V1.getValue(), PATH_FRACTIONATION)
                .path("/update-fraction/trade/{tradeId}/side/{sideId}")
                .buildAndExpand(tradeId, sideId)
                .toUri();

        try {
            ResponseEntity<SettlementOutDto[]> response = restClientUtils.requestBodyWithResponseObject(uri,
                    HttpMethod.PUT, getHttpHeaders(), fractionClientInDtoList, SettlementOutDto[].class);
            if (!ObjectUtils.isEmpty(response.getBody())) {
                return List.of(response.getBody());
            }
        } catch (Exception ex) {
            throw new ClientException(ErrorCode.CLIENT_OPERATION_FRACTIONATION_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return List.of(SettlementOutDto.builder().build());
    }

    @Override
    public List<SettlementOutDto> updateFractionsCorrection(Long tradeId, String sideId, Long statusId,
            List<CorrectionClientInDto> correctionClientInDtoList) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboOperationFractionation())
                .pathSegment(VersionApiEnum.V1.getValue(), PATH_FRACTIONATION)
                .path("/update-correction/trade/{tradeId}/side/{sideId}/status/{statusId}")
                .buildAndExpand(tradeId, sideId, statusId)
                .toUri();

        try {
            ResponseEntity<SettlementOutDto[]> response = restClientUtils.requestBodyWithResponseObject(uri,
                    HttpMethod.PUT, getHttpHeaders(), correctionClientInDtoList, SettlementOutDto[].class);
            if (!ObjectUtils.isEmpty(response.getBody())) {
                return List.of(response.getBody());
            }
        } catch (Exception ex) {
            throw new ClientException(ErrorCode.CLIENT_OPERATION_FRACTIONATION_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return List.of(SettlementOutDto.builder().build());
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

## src/main/java/com/nubo/operations/cmd/api/client/operation/rules/models/dto/request/StatusAllowedOptionsInDto.java

```java
package com.nubo.operations.cmd.api.client.operation.rules.models.dto.request;

import com.nubo.operations.cmd.api.models.enums.BusinessRuleEnum;

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

## src/main/java/com/nubo/operations/cmd/api/client/operation/rules/models/dto/request/StatusUpdateTradeInDto.java

```java
package com.nubo.operations.cmd.api.client.operation.rules.models.dto.request;

import com.nubo.operations.cmd.api.models.enums.BusinessRuleEnum;

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

## src/main/java/com/nubo/operations/cmd/api/client/operation/rules/models/dto/response/ActionOutDto.java

```java
package com.nubo.operations.cmd.api.client.operation.rules.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nubo.operations.cmd.api.models.dto.response.StatusOutDto;
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

## src/main/java/com/nubo/operations/cmd/api/client/operation/rules/models/dto/response/BusinessRuleOutDto.java

```java
package com.nubo.operations.cmd.api.client.operation.rules.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nubo.operations.cmd.api.models.dto.response.CountryOutDto;
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

## src/main/java/com/nubo/operations/cmd/api/client/operation/rules/models/dto/response/StatusAllowedOptionsOutDto.java

```java
package com.nubo.operations.cmd.api.client.operation.rules.models.dto.response;

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

## src/main/java/com/nubo/operations/cmd/api/client/operation/rules/models/dto/response/StatusClientOutDto.java

```java
package com.nubo.operations.cmd.api.client.operation.rules.models.dto.response;

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

## src/main/java/com/nubo/operations/cmd/api/client/operation/rules/models/dto/response/StatusUpdateTradeOutDto.java

```java
package com.nubo.operations.cmd.api.client.operation.rules.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nubo.operations.cmd.api.models.dto.response.BusinessRuleCodeOutDto;
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

    private StatusClientOutDto newStatusFraction;

    private StatusClientOutDto newStatusSide;

    private StatusClientOutDto newStatusTrade;

    private BusinessRuleCodeOutDto businessRuleCode;

}

```

## src/main/java/com/nubo/operations/cmd/api/client/operation/rules/service/OperationBusinessRuleClient.java

```java
package com.nubo.operations.cmd.api.client.operation.rules.service;

import com.nubo.operations.cmd.api.client.operation.rules.models.dto.request.StatusUpdateTradeInDto;
import com.nubo.operations.cmd.api.client.operation.rules.models.dto.response.BusinessRuleOutDto;
import com.nubo.operations.cmd.api.client.operation.rules.models.dto.response.StatusUpdateTradeOutDto;
import com.nubo.operations.cmd.api.models.enums.BusinessRuleEnum;

public interface OperationBusinessRuleClient {

    BusinessRuleOutDto findBusinessRuleByCountryIdAndCode(Long countryId, BusinessRuleEnum code);

    BusinessRuleOutDto findBusinessRuleByCode(BusinessRuleEnum code);

    StatusUpdateTradeOutDto validateUpdateStatusTrade(StatusUpdateTradeInDto statusUpdateTradeInDto);

    BusinessRuleOutDto findBusinessRuleByCountryIdAndCodeValid(Long countryId, BusinessRuleEnum code);

}

```

## src/main/java/com/nubo/operations/cmd/api/client/operation/rules/service/impl/OperationBusinessRuleClientImpl.java

```java
package com.nubo.operations.cmd.api.client.operation.rules.service.impl;

import java.net.URI;

import com.nubo.operations.cmd.api.client.operation.rules.models.dto.request.StatusUpdateTradeInDto;
import com.nubo.operations.cmd.api.client.operation.rules.models.dto.response.BusinessRuleOutDto;
import com.nubo.operations.cmd.api.client.operation.rules.models.dto.response.StatusUpdateTradeOutDto;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;
import org.springframework.web.util.UriComponentsBuilder;

import com.nubo.operations.cmd.api.application.properties.PropertiesConfig;
import com.nubo.operations.cmd.api.application.properties.PropertiesContext;
import com.nubo.operations.cmd.api.application.util.ApplicationUtils;
import com.nubo.operations.cmd.api.application.util.RestClientUtils;
import com.nubo.operations.cmd.api.client.operation.rules.models.dto.request.StatusAllowedOptionsInDto;
import com.nubo.operations.cmd.api.client.operation.rules.models.dto.response.StatusAllowedOptionsOutDto;
import com.nubo.operations.cmd.api.client.operation.rules.service.OperationBusinessRuleClient;
import com.nubo.operations.cmd.api.exception.ClientException;
import com.nubo.operations.cmd.api.exception.error.ErrorCode;
import com.nubo.operations.cmd.api.models.enums.BusinessRuleEnum;
import com.nubo.operations.cmd.api.models.enums.PropertiesEnum;
import com.nubo.operations.cmd.api.models.enums.VersionApiEnum;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

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
    @Cacheable(cacheNames = "businessRulesByCountryCode", key = "#countryId + '-' + #code.name()", sync = true)
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
    @Cacheable(cacheNames = "businessRulesByCode", key = "#code.name()", sync = true)
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
    @Cacheable(cacheNames = "businessRulesByCountryCodeValid", key = "#countryId + '-' + #code.name()", sync = true)
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

## src/main/java/com/nubo/operations/cmd/api/exception/ClientException.java

```java
package com.nubo.operations.cmd.api.exception;

import org.springframework.http.HttpStatus;

import com.nubo.operations.cmd.api.exception.error.ErrorCode;

import lombok.Getter;

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

## src/main/java/com/nubo/operations/cmd/api/exception/ServiceException.java

```java
package com.nubo.operations.cmd.api.exception;

import java.util.Collections;
import java.util.Map;

import org.springframework.http.HttpStatus;

import com.nubo.operations.cmd.api.exception.error.ErrorCode;

import lombok.Getter;

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

    public ServiceException(ErrorCode errorCode, String message) {
        super(errorCode.getMessage(), new Throwable(message));
        this.errorCode = errorCode;
        this.httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
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

## src/main/java/com/nubo/operations/cmd/api/exception/error/ErrorCode.java

```java
package com.nubo.operations.cmd.api.exception.error;

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
    RATE_LIMITING_EXCEEDED("Rate Limiting Exceeded"),
    HEADER_CLIENT_IP_REQUIRED("Header client_ip required"),
    HEADER_CLIENT_IP_INVALID("Header client_ip is invalid"),
    HEADER_CLIENT_USER_REQUIRED("Header client_user is required"),
    HEADER_CLIENT_DATETIME_REQUIRED("Header client_datetime is required"),
    HEADER_CLIENT_DATETIME_INVALID("Header client_datetime is invalid"),
    USER_NOT_FOUND("User not found"),
    VERSION_API_NOT_FOUND("Version API not found"),
    COUNTRY_NOT_FOUND("Country not found"),
    CURRENCY_NOT_FOUND("Currency not found"),
    TRADE_NOT_FOUND("Trade not found"),
    PARTICIPANT_NOT_FOUND("Participant not found"),
    PARTICIPANT_NOT_IN_SIDE("Participant does not correspond to the trade side"),
    CUSTODIAN_NOT_FOUND("Custodian not found"),
    FIC_ADMIN_NOT_FOUND("FIC administrator not found"),
    PARTICIPANT_NOT_ACTIVE("Participant is not active"),
    SECURITY_TITLE_NOT_FOUND("Security Title not found"),
    TRADE_EQUITY_NOT_FOUND("Trade Equity not found"),
    TRADE_EQUITY_EXISTS("TradeEquity already exists"),
    SETTLEMENT_NOT_FOUND("Settlement not found"),
    INVESTOR_NOT_FOUND("Investor not found"),
    INVESTOR_NOT_ACTIVE("Investor is not active"),
    INVESTOR_ACCOUNT_NOT_FOUND("Investor_Account not found"),
    PARTICIPANT_ACCOUNT_NOT_FOUND("Participant Account not found"),
    DEPOSITORY_NOT_FOUND("Depository not found"),
    TYPE_NOT_FOUND("Type not found"),
    MARKET_NOT_FOUND("Market not found"),
    STATUS_NOT_FOUND("Status not found"),
    ACCOUNT_NOT_FOUND("Account not found"),
    SIDE_NOT_FOUND("Side not found"),
    TRADE_DEPOSITORY_NOT_FOUND("Trade Depository not found"),
    TRADING_SYSTEM_NOT_FOUND("Trading System not found"),
    TRADING_SESSION_NOT_FOUND("Trading Session not found"),
    TAXES_NOT_FOUND("Taxes not found"),
    MILA_DEPOSITORY_NOT_FOUND("Mila Depository not found"),
    TYPE_MAPPING_NOT_FOUND("Tyoe mapping not found"),
    FRACTION_CANNOT_MODIFIED_WITH_MASTER_ACCOUNT("Fraction cannot be modified with master account"),
    PARTICIPANT_ACCOUNT_OR_INVESTOR_ACCOUNT_REQUIRED("The participant account or investor account is required"),
    TRADE_DEPOSITORY_REQUIRED("The depository Trade required"),
    TYPE_COUNTED_OR_REPO_OPERATION_REQUIRED("The type of operation must be counted or repo operation"),
    ACCOUNT_DEPOSITORY_NOT_CORRESPOND_TO_TRADE("Account depository not correspond to trade"),
    SOURCE_QUOTE_TYPE_REQUIRED("The source quote type required"),
    MASTER_ACCOUNT_NOT_CORRESPOND_TO_ORIGIN_THIRD_PARTIES("The master account not correspond to the Third Parties"),
    OWN_POSITION_NOT_CORRESPOND_TO_ORIGIN("The allocation data does not correspond to the Own Position origin"),
    THIRD_PARTIES_COLLECTIVE_PORTFOLIOS_NOT_CORRESPOND_TO_ORIGIN(
            "The allocation data does not correspond to the origin Third Parties/Collective Portfolios"),
    FRACTION_TOTAL_QUANTITY_NOT_CORRESPOND_QUANTITY_TRADE(
            "The total number of shares in the fractions does not correspond to the total number of shares of the operation"),
    FRACTION_TOTAL_QUANTITY_EXCEED_QUANTITY_TRADE(
            "The sum of the quantities of the fractions exceeds the quantity operation"),
    OWN_POSITION_IN_FRACTIONS_IS_NOT_ALLOWED("Own position in fractions is not allowed"),
    INVALID_QUANTITY("Trade Invalid quantity"),
    INVALID_PRICE_PRECISION("Invalid price precision"),
    PRICE_NOT_FOUND("Price not found"),
    MAXIMUM_LIMIT_FRACTIONS_EXCEED("The maximum limit of fractions"),
    CLIENT_OPERATION_CALCULATION_ERROR("An unexpected error occurred in Operation Calculation"),
    CLIENT_OPERATION_FRACTIONATION_ERROR("An unexpected error occurred in Operation Fractionation"),
    CLIENT_OPERATION_RULES_ERROR("An unexpected error occurred in Operation Rules"),
    CLIENT_OPERATIONS_QUERY_ERROR("An unexpected error occurred in Operation Query"),
    INVESTOR_ACCOUNT_DUPLICATED("The investor account cannot be duplicated"),
    PARTICIPANT_ACCOUNT_DUPLICATED("The participant account cannot be duplicated"),
    COMMISSION_SETTLEMENT_DATE_COMPLIANCE_AFTER(
            "The commission cannot be modified because the compliance date is after the modification date"),
    COMMISSION_CANNOT_EXCEED_REPO_AMOUNT("The value of the commission cannot exceed the repo amount"),
    CUSTODIAN_ID_MUST_BE_THE_SAME("The custodian must be the same"),
    FRACTION_CUSTODIAN_STATUS_DONT_BE_EDIT("The fraction custodian dont be edit"),
    CUD_ACCOUNT_CANT_BE_EMPTY_TO_COLOMBIA_OPERATION("The cud account cant be empty to colombia operation"),
    ERROR_BUSINESS_RULE("Client Business rule error occurred"),
    INVALID_BUSINESS_RULE_VALUE("Invalid value for business rule"),
    ACCOUNT_NOT_ACTIVE("Account is not active"),
    PARTICIPANT_ACCOUNT_OR_INVESTOR_ACCOUNT_NOT_FOUND(
            "No participant or investor account was found for the defined source"),
    LOCAL_CORRECTION_QUANTITY_CHANGE_NOT_ALLOWED("Local correction does not allow quantity modification"),
    EXTERNAL_CORRECTION_MASTER_ACCOUNT_REQUIRED(
            "External correction requires changing master account to investor account"),
    CORRECTION_NO_CHANGES_DETECTED("No changes detected for correction"),
    CORRECTION_MASTER_ACCOUNT_NOT_ALLOWED("Master accounts are not allowed in corrections"),
    CORRECTION_DUPLICATE_ACCOUNT_IN_SIDE("The same account cannot be used in multiple fractions of the same side"),
    CORRECTION_FRACTION_CUSTODIADA_NOT_ALLOWED("Corrections are not allowed for fractions with custodian status"),
    CORRECTION_FRACTION_NOT_FOUND("Fraction not found in current settlements"),
    CORRECTION_FRACTION_MISSING_IN_REQUEST("All current fractions must be included in the correction request"),
    CORRECTION_DUPLICATE_FRACTION_IN_REQUEST("Duplicate fractions in correction request"),
    CORRECTION_QUANTITY_SUM_MISMATCH("The sum of quantities in corrections does not match the original total"),
    CORRECTION_WITH_OWN_POSITION_IS_NOT_ALLOWED("Corrections with own position are not allowed"),
    EXTERNAL_FRACTION_NOT_FOUND("No external fraction (indMaster=true) found for new fraction division"),
    OWN_POSITION_ONLY_ONE_FRACTION_ALLOWED("The own position allowed only one fraction"),
    OWN_POSITION_COMMISSION_MUST_BE_ZERO("La comisión debe ser 0 para la posición propia"),
    ACCOUNT_NOT_MATCH_OF_OWN_POSITION("Account does not match own position"),
    CUD_ACCOUNT_CANT_BE_EMPTY_OR_DIFFERENT_TO_ASSIGNMENT_MARK("The cud account cant be empty to assignment mark"),
    CUD_ACCOUNT_NOT_FOUND("The cud account not found"),
    CUSTODIAN_AND_FIC_MUST_BE_EMPTY_TO_ASSIGNMENT_MARK("The field custodian and fic administrator must be empty to assignment mark"),
    CUSTODIAN_AND_FIC_MUST_BE_EMPTY_TO_MASTER_ACCOUNT("The field custodian and fic administrator must be empty to master"),
    EXTERNAL_FRACTION_DIVISION_MISMATCH(
            "The sum of new fractions does not match the original external fraction quantity"),
    OWN_POSITION_SOURCE_QUOTE_TYPE_MUST_BE_OWN_POSITION("The source quote type must be own position for fraction");


    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }

    public String getName() {
        return this.name();
    }

}

```

## src/main/java/com/nubo/operations/cmd/api/exception/error/ErrorResponse.java

```java
package com.nubo.operations.cmd.api.exception.error;

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

## src/main/java/com/nubo/operations/cmd/api/exception/error/ErrorValidation.java

```java
package com.nubo.operations.cmd.api.exception.error;

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

## src/main/java/com/nubo/operations/cmd/api/exception/handler/GlobalExceptionHandler.java

```java
package com.nubo.operations.cmd.api.exception.handler;

import java.util.List;
import java.util.Objects;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

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

import com.nubo.operations.cmd.api.application.properties.PropertiesContext;
import com.nubo.operations.cmd.api.application.util.ApplicationUtils;
import com.nubo.operations.cmd.api.exception.ClientException;
import com.nubo.operations.cmd.api.exception.ServiceException;
import com.nubo.operations.cmd.api.exception.error.ErrorCode;
import com.nubo.operations.cmd.api.exception.error.ErrorResponse;
import com.nubo.operations.cmd.api.exception.error.ErrorValidation;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

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
                .errorMessageDetail(getExceptionDetail(exception))
                .timestamp(String.valueOf(PropertiesContext.getClientDatetime()))
                .errorDetails(errorDetails)
                .build();

        if (ErrorCode.UNEXPECTED.equals(errorCode)) {
            log.error("Unexpected error processing request. response={}", errorResponse, exception);
        } else {
            log.error("Error -> {}", errorResponse);
        }

        return ResponseEntity.status(status).body(errorResponse);
    }

    private String getExceptionDetail(Exception exception) {
        Throwable source = ObjectUtils.isEmpty(exception.getCause()) ? exception : exception.getCause();
        String message = source.getMessage();
        return ObjectUtils.isEmpty(message) ? source.getClass().getSimpleName() : message;
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

## src/main/java/com/nubo/operations/cmd/api/helpers/CountedFractionHelper.java

```java
package com.nubo.operations.cmd.api.helpers;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StopWatch;

import com.nubo.operations.cmd.api.application.properties.PropertiesContext;
import com.nubo.operations.cmd.api.client.operation.fractionation.models.dto.request.FractionClientInDto;
import com.nubo.operations.cmd.api.client.operation.rules.models.dto.response.ActionOutDto;
import com.nubo.operations.cmd.api.client.operation.rules.models.dto.response.BusinessRuleOutDto;
import com.nubo.operations.cmd.api.client.operation.rules.service.OperationBusinessRuleClient;
import com.nubo.operations.cmd.api.exception.ServiceException;
import com.nubo.operations.cmd.api.exception.error.ErrorCode;
import com.nubo.operations.cmd.api.models.context.AccountLookupContext;
import com.nubo.operations.cmd.api.models.context.AccountValidationKey;
import com.nubo.operations.cmd.api.models.context.ProtectedFractionState;
import com.nubo.operations.cmd.api.models.dto.request.FractionRuleInDto;
import com.nubo.operations.cmd.api.models.dto.response.FractionAccountOutDto;
import com.nubo.operations.cmd.api.models.dto.response.ParticipantBankAccountOutDto;
import com.nubo.operations.cmd.api.models.entity.CountryEntity;
import com.nubo.operations.cmd.api.models.entity.InvestorAccountEntity;
import com.nubo.operations.cmd.api.models.entity.ParticipantAccountEntity;
import com.nubo.operations.cmd.api.models.entity.ParticipantEntity;
import com.nubo.operations.cmd.api.models.entity.SettlementEntity;
import com.nubo.operations.cmd.api.models.entity.SideEntity;
import com.nubo.operations.cmd.api.models.entity.StatusEntity;
import com.nubo.operations.cmd.api.models.entity.TaxesEntity;
import com.nubo.operations.cmd.api.models.entity.TradeEntity;
import com.nubo.operations.cmd.api.models.entity.TypeEntity;
import com.nubo.operations.cmd.api.models.enums.BusinessRuleEnum;
import com.nubo.operations.cmd.api.models.enums.CountryEnum;
import com.nubo.operations.cmd.api.models.enums.DirectAllocationEnum;
import com.nubo.operations.cmd.api.models.enums.SideEnum;
import com.nubo.operations.cmd.api.models.enums.TaxesEnum;
import com.nubo.operations.cmd.api.models.enums.TypeEnum;
import com.nubo.operations.cmd.api.repository.InvestorAccountRepository;
import com.nubo.operations.cmd.api.repository.ParticipantAccountRepository;
import com.nubo.operations.cmd.api.repository.SettlementRepository;
import com.nubo.operations.cmd.api.repository.TaxesRepository;
import com.nubo.operations.cmd.api.service.ValidateCountedFractionService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * Lógica compartida por el flujo individual (FractionationCountedService)
 * y el flujo batch (FractionationBatchService).
 */
@Component
@RequiredArgsConstructor
@Slf4j
public class CountedFractionHelper {

    private final ParticipantAccountRepository participantAccountRepository;
    private final InvestorAccountRepository investorAccountRepository;
    private final ValidateCountedFractionService validateCountedFractionService;
    private final SettlementRepository settlementRepository;
    private final OperationBusinessRuleClient operationBusinessRuleClient;
    private final TaxesRepository taxesRepository;

    public static long taskMillis(StopWatch stopWatch, String taskName) {
        long total = 0;
        for (StopWatch.TaskInfo task : stopWatch.getTaskInfo()) {
            if (taskName.equals(task.getTaskName())) {

                total += task.getTimeMillis();
            }
        }
        return total;
    }

    public void validateCreateFraction(TradeEntity tradeEntity, SideEntity sideEntity,
            List<FractionClientInDto> fractionClientInDtoList, AccountLookupContext accountLookupContext) {
        validateOwnPosition(tradeEntity, sideEntity, fractionClientInDtoList);
        // validateOwnPositionInFractions(fractionClientInDtoList);
        validateAutomaticAssignment(tradeEntity, sideEntity, fractionClientInDtoList, accountLookupContext);
        Map<AccountValidationKey, FractionAccountOutDto> accountValidations = validateAccount(fractionClientInDtoList,
                tradeEntity, sideEntity, accountLookupContext);
        validateMasterAccountFields(fractionClientInDtoList, accountLookupContext);
        validateAccountDuplicatedCreateFraction(fractionClientInDtoList);
        validateReassignmentCustodian(tradeEntity, sideEntity, fractionClientInDtoList, accountLookupContext);
        validateCountryAndFieldsOperation(tradeEntity, fractionClientInDtoList);
        validateMilaLocal(tradeEntity, sideEntity, fractionClientInDtoList, accountValidations, accountLookupContext);

        List<FractionRuleInDto> fractionRuleInDtoList = fractionClientInDtoList.stream().map(fractionClient -> {
            validateAccountFraction(tradeEntity, sideEntity, fractionClient.getInvestorAccountId(),
                    fractionClient.getParticipantAccountId(), accountLookupContext);
            return FractionRuleInDto.builder().fractionQuantity(fractionClient.getFractionQuantity()).build();
        }).toList();

        validateCountedFractionService.validateQuantityFractions(tradeEntity, fractionRuleInDtoList);
        validateCountedFractionService.validateMaximumLimitFractions(tradeEntity, fractionRuleInDtoList);
    }

    public String validateAccountFraction(TradeEntity tradeEntity, SideEntity sideEntity, Long investorAccountId,
            Long participantAccountId, AccountLookupContext accountLookupContext) {
        log.debug("Validate Account Fraction");
        if ((ObjectUtils.isEmpty(investorAccountId) && ObjectUtils.isEmpty(participantAccountId))
                || !ObjectUtils.isEmpty(investorAccountId) && !ObjectUtils.isEmpty(participantAccountId)) {
            throw new ServiceException(ErrorCode.PARTICIPANT_ACCOUNT_OR_INVESTOR_ACCOUNT_REQUIRED,
                    HttpStatus.BAD_REQUEST);
        }

        String accountNumber = "";
        if (!ObjectUtils.isEmpty(investorAccountId)) {
            InvestorAccountEntity investorAccountEntity = findInvestorAccount(investorAccountId, accountLookupContext);
            accountNumber = investorAccountEntity.getAccountNumber();
        }

        if (!ObjectUtils.isEmpty(participantAccountId)) {
            ParticipantAccountEntity participantAccountEntity = findParticipantAccount(participantAccountId,
                    accountLookupContext);
            accountNumber = participantAccountEntity.getAccountNumber();
        }
        return accountNumber;
    }

    public void validateAccountDuplicatedCreateFraction(List<FractionClientInDto> fractionClientInDtoList) {
        log.debug("Validate Account Duplicated for Create Fraction");
        Set<Long> duplicatedInvestorAccountList = new HashSet<>();
        for (FractionClientInDto fractionClientInDto : fractionClientInDtoList) {
            if (!ObjectUtils.isEmpty(fractionClientInDto.getInvestorAccountId())
                    && !duplicatedInvestorAccountList.add(fractionClientInDto.getInvestorAccountId())) {
                throw new ServiceException(ErrorCode.INVESTOR_ACCOUNT_DUPLICATED, HttpStatus.BAD_REQUEST);
            }
        }

        Set<Long> duplicatedParticipantAccountList = new HashSet<>();
        for (FractionClientInDto fractionClientInDto : fractionClientInDtoList) {
            if (!ObjectUtils.isEmpty(fractionClientInDto.getParticipantAccountId())
                    && !duplicatedParticipantAccountList.add(fractionClientInDto.getParticipantAccountId())) {
                throw new ServiceException(ErrorCode.PARTICIPANT_ACCOUNT_DUPLICATED, HttpStatus.BAD_REQUEST);
            }
        }
    }

    public void validateMasterAccountFields(List<FractionClientInDto> fractionClientInDtoList,
            AccountLookupContext accountLookupContext) {
        log.debug("Validate Master Account Fields");
        for (FractionClientInDto fractionClientInDto : fractionClientInDtoList) {
            if (fractionClientInDto.getParticipantAccountId() != null) {
                ParticipantAccountEntity participantAccountEntity = findParticipantAccount(
                        fractionClientInDto.getParticipantAccountId(), accountLookupContext);
                if (participantAccountEntity.getIndMaster()) {
                    Boolean fieldsAreNotEmpty = fractionClientInDto.getCustodianId() != null
                            || fractionClientInDto.getFicAdministratorId() != null;

                    if (fieldsAreNotEmpty) {
                        throw new ServiceException(ErrorCode.CUSTODIAN_AND_FIC_MUST_BE_EMPTY_TO_MASTER_ACCOUNT,
                                HttpStatus.BAD_REQUEST);
                    }
                }
            }
        }
    }

    public String getAccountNumber(FractionClientInDto fractionClientInDto, AccountLookupContext accountLookupContext) {
        if (fractionClientInDto.getParticipantAccountId() != null) {
            return findParticipantAccount(fractionClientInDto.getParticipantAccountId(), accountLookupContext)
                    .getAccountNumber();

        } else if (fractionClientInDto.getInvestorAccountId() != null) {
            return findInvestorAccount(fractionClientInDto.getInvestorAccountId(), accountLookupContext)
                    .getAccountNumber();
        }
        throw new ServiceException(ErrorCode.ACCOUNT_NOT_FOUND, HttpStatus.BAD_REQUEST);
    }

    public BigDecimal parseCudBankAccountNumber(String bankAccountNumber) {
        try {
            return new BigDecimal(bankAccountNumber);
        } catch (NumberFormatException ex) {
            throw new ServiceException(ErrorCode.CUD_ACCOUNT_CANT_BE_EMPTY_OR_DIFFERENT_TO_ASSIGNMENT_MARK,
                    HttpStatus.BAD_REQUEST);
        }
    }

    public ParticipantAccountEntity findParticipantAccount(Long participantAccountId,
            AccountLookupContext accountLookupContext) {
        if (participantAccountId == null) {
            throw new ServiceException(ErrorCode.PARTICIPANT_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND);
        }

        ParticipantAccountEntity cachedParticipantAccount = accountLookupContext.participantAccounts()
                .get(participantAccountId);
        if (cachedParticipantAccount != null) {
            return cachedParticipantAccount;
        }

        ParticipantAccountEntity participantAccountEntity = participantAccountRepository.findById(participantAccountId)
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND));
        accountLookupContext.participantAccounts().put(participantAccountId, participantAccountEntity);
        return participantAccountEntity;
    }

    public InvestorAccountEntity findInvestorAccount(Long investorAccountId,
            AccountLookupContext accountLookupContext) {
        if (investorAccountId == null) {
            throw new ServiceException(ErrorCode.INVESTOR_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND);
        }

        InvestorAccountEntity cachedInvestorAccount = accountLookupContext.investorAccounts().get(investorAccountId);
        if (cachedInvestorAccount != null) {
            return cachedInvestorAccount;
        }

        InvestorAccountEntity investorAccountEntity = investorAccountRepository.findById(investorAccountId)
                .orElseThrow(() -> new ServiceException(ErrorCode.INVESTOR_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND));
        accountLookupContext.investorAccounts().put(investorAccountId, investorAccountEntity);
        return investorAccountEntity;
    }

    public AccountLookupContext buildAccountLookupContextFromFractions(List<FractionClientInDto> fractions) {
        AccountLookupContext context = new AccountLookupContext(new HashMap<>(), new HashMap<>());

        Set<Long> participantIds = fractions.stream().map(FractionClientInDto::getParticipantAccountId)
                .filter(Objects::nonNull).collect(Collectors.toSet());

        if (!participantIds.isEmpty()) {

            participantAccountRepository.findAllById(participantIds)
                    .forEach(account -> context.participantAccounts().put(account.getId(), account));
        }

        Set<Long> investorIds = fractions.stream().map(FractionClientInDto::getInvestorAccountId)
                .filter(Objects::nonNull).collect(Collectors.toSet());

        if (!investorIds.isEmpty()) {

            investorAccountRepository.findAllById(investorIds)
                    .forEach(account -> context.investorAccounts().put(account.getId(), account));
        }
        return context;
    }

    private Map<AccountValidationKey, FractionAccountOutDto> validateAccount(
            List<FractionClientInDto> fractionClientInDtoList, TradeEntity tradeEntity, SideEntity sideEntity,
            AccountLookupContext accountLookupContext) {
        log.debug("Validate Account");
        Map<AccountValidationKey, FractionAccountOutDto> accountValidations = new HashMap<>();

        TaxesEntity taxesEntity = taxesRepository
                .findByCountryIdAndCode(tradeEntity.getCountry().getId(), TaxesEnum.IVA.getValue())
                .orElseThrow(() -> new ServiceException(ErrorCode.TAXES_NOT_FOUND, HttpStatus.NOT_FOUND));

        for (FractionClientInDto fractionClientInDto : fractionClientInDtoList) {
            fractionClientInDto.setTransferParticipantId(PropertiesContext.getClientUserEntity().getParticipantId());
            if (fractionClientInDto.getParticipantAccountId() != null) {
                ParticipantAccountEntity participantAccountEntity = findParticipantAccount(
                        fractionClientInDto.getParticipantAccountId(), accountLookupContext);

                getCachedAccountValidation(accountValidations, tradeEntity, sideEntity,
                        participantAccountEntity.getAccountNumber(), fractionClientInDto.getSourceQuoteTypeId(), false);

                fractionClientInDto.setValTax(taxesEntity.getValue());

            } else if (fractionClientInDto.getInvestorAccountId() != null) {
                InvestorAccountEntity investorAccountEntity = findInvestorAccount(
                        fractionClientInDto.getInvestorAccountId(), accountLookupContext);

                getCachedAccountValidation(accountValidations, tradeEntity, sideEntity,
                        investorAccountEntity.getAccountNumber(), fractionClientInDto.getSourceQuoteTypeId(), false);

                if (Boolean.TRUE.equals(investorAccountEntity.getTaxExemp())) {
                    fractionClientInDto.setValTax(BigDecimal.ZERO);
                } else {
                    fractionClientInDto.setValTax(taxesEntity.getValue());
                }

            } else {
                throw new ServiceException(ErrorCode.ACCOUNT_NOT_FOUND, HttpStatus.BAD_REQUEST);
            }
        }

        return accountValidations;
    }

    private void validateReassignmentCustodian(TradeEntity tradeEntity, SideEntity sideEntity,
            List<FractionClientInDto> fractionClientInDtoList, AccountLookupContext accountLookupContext) {
        log.debug("Validate Reassignment Custodian");
        List<SettlementEntity> lastSettlementList = settlementRepository.findByTrade_IdAndSide_Id(tradeEntity.getId(),
                sideEntity.getId());

        if (lastSettlementList.isEmpty()) {
            return;
        }

        BusinessRuleOutDto businessRuleOutDto = operationBusinessRuleClient.findBusinessRuleByCountryIdAndCodeValid(
                tradeEntity.getCountry().getId(), BusinessRuleEnum.RULE_REASSIGNMENT_BY_FRACTION_CUSTODIAN);
        List<ActionOutDto> actionOutDtoList = businessRuleOutDto.getActions();

        Map<String, ProtectedFractionState> protectedFractionsMap = new HashMap<>();

        for (SettlementEntity lastSettlement : lastSettlementList) {
            if (lastSettlement.getCustodianStatus() == null) {
                continue;
            }

            boolean isEditableByRule = actionOutDtoList.stream().anyMatch(
                    action -> Objects.equals(action.getStatus().getId(), lastSettlement.getCustodianStatus().getId()));

            if (!isEditableByRule) {

                String accountNumber = lastSettlement.getParticipantAccount() != null
                        ? lastSettlement.getParticipantAccount().getAccountNumber()
                        : lastSettlement.getInvestorAccount().getAccountNumber();

                protectedFractionsMap.put(accountNumber, new ProtectedFractionState(
                        lastSettlement.getFractionQuantity(), lastSettlement.getCashAccount(),
                        lastSettlement.getCustodian().getId(),
                        Optional.ofNullable(lastSettlement.getFicAdministrator()).map(ParticipantEntity::getId)
                                .orElse(null),
                        lastSettlement.getUniqueFractionId(),
                        Optional.ofNullable(lastSettlement.getCustodianStatus()).map(StatusEntity::getId).orElse(null),
                        lastSettlement.getReferencePackage()));
            }
        }
        if (protectedFractionsMap.isEmpty()) {
            return;
        }
        for (FractionClientInDto fractionClient : fractionClientInDtoList) {
            if (fractionClient.getCustodianId() == null) {
                continue;
            }
            String incomingAccountNumber;
            if (fractionClient.getParticipantAccountId() != null) {
                ParticipantAccountEntity participantAccount = findParticipantAccount(
                        fractionClient.getParticipantAccountId(), accountLookupContext);

                incomingAccountNumber = participantAccount.getAccountNumber();

            } else if (fractionClient.getInvestorAccountId() != null) {
                InvestorAccountEntity investorAccount = findInvestorAccount(fractionClient.getInvestorAccountId(),
                        accountLookupContext);

                incomingAccountNumber = investorAccount.getAccountNumber();
            } else {
                continue;
            }
            ProtectedFractionState protectedFractionState = protectedFractionsMap.get(incomingAccountNumber);
            if (protectedFractionState != null) {
                BigDecimal incomingQuantity = fractionClient.getFractionQuantity();

                if (incomingQuantity == null || protectedFractionState.quantity().compareTo(incomingQuantity) != 0
                        || protectedFractionState.cashAccount().compareTo(fractionClient.getCashAccount()) != 0
                        || !Objects.equals(protectedFractionState.custodianId(), fractionClient.getCustodianId())
                        || !Objects.equals(protectedFractionState.ficAdministratorId(),
                                fractionClient.getFicAdministratorId())) {

                    throw new ServiceException(ErrorCode.FRACTION_CUSTODIAN_STATUS_DONT_BE_EDIT,
                            HttpStatus.BAD_REQUEST);
                }
                fractionClient.setUniqueFractionId(protectedFractionState.uniqueFractionId());
                fractionClient.setCustodianStatusId(protectedFractionState.custodianStatusId());
                fractionClient.setReferencePackage(protectedFractionState.referencePackage());
                protectedFractionsMap.remove(incomingAccountNumber);
            }

            if (protectedFractionsMap.isEmpty()) {
                return;
            }
        }
        throw new ServiceException(ErrorCode.FRACTION_CUSTODIAN_STATUS_DONT_BE_EDIT, HttpStatus.BAD_REQUEST);
    }

    private void validateCountryAndFieldsOperation(TradeEntity tradeEntity,
            List<FractionClientInDto> fractionClientInDtoList) {
        log.debug("Validate Country and Fields for Operation");
        CountryEntity country = tradeEntity.getCountry();

        if (country == null || !CountryEnum.COLOMBIA.getId().equals(country.getId())) {
            return;
        }

        for (FractionClientInDto fraction : fractionClientInDtoList) {
            if (ObjectUtils.isEmpty(fraction.getCashAccount())) {
                throw new ServiceException(ErrorCode.CUD_ACCOUNT_CANT_BE_EMPTY_TO_COLOMBIA_OPERATION);
            }
        }
    }

    private void validateMilaLocal(TradeEntity tradeEntity, SideEntity sideEntity,
            List<FractionClientInDto> fractionClientInDtoList,
            Map<AccountValidationKey, FractionAccountOutDto> accountValidations,
            AccountLookupContext accountLookupContext) {
        log.debug("Validate MILA Local");
        for (FractionClientInDto fractionClientInDto : fractionClientInDtoList) {
            String accountNumber = getAccountNumber(fractionClientInDto, accountLookupContext);

            FractionAccountOutDto fractionAccountOutDto = getCachedAccountValidation(accountValidations, tradeEntity,
                    sideEntity, accountNumber, fractionClientInDto.getSourceQuoteTypeId(), false);

            Long incomingFicAdministratorId = fractionClientInDto.getFicAdministratorId();

            fractionClientInDto.setFicAdministratorId(
                    fractionAccountOutDto.getFicAdmin() != null && fractionAccountOutDto.getCustodian() != null
                            && Objects.equals(fractionClientInDto.getCustodianId(),
                                    fractionAccountOutDto.getCustodian().getId())
                                            ? fractionAccountOutDto.getFicAdmin().getId()
                                            : null);

            boolean isMilaLocal = fractionAccountOutDto.getMilaDirectDepositor() != null
                    && fractionAccountOutDto.getMilaDirectDepositor().getId() != null;

            if (isMilaLocal) {
                Long expectedMilaDirectDepositorId = fractionAccountOutDto.getMilaDirectDepositor().getId();

                if (fractionClientInDto.getCustodianId() != null || incomingFicAdministratorId != null) {
                    throw new ServiceException(
                            "Para una fracción MILA Local, custodianId y ficAdministratorId deben venir vacíos",
                            ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
                }

                if (fractionClientInDto.getMilaDirectDepositorId() == null) {
                    throw new ServiceException("Para una fracción MILA Local, milaDirectDepositorId es obligatorio",
                            ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
                }

                if (!Objects.equals(fractionClientInDto.getMilaDirectDepositorId(), expectedMilaDirectDepositorId)) {
                    throw new ServiceException(
                            "El milaDirectDepositorId enviado no corresponde al beneficiario configurado como MILA Local",
                            ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
                }

            } else {
                if (fractionClientInDto.getMilaDirectDepositorId() != null) {
                    throw new ServiceException(
                            "No se debe enviar milaDirectDepositorId cuando la cuenta no corresponde a MILA Local",
                            ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
                }
            }
        }
    }

    private void validateAutomaticAssignment(TradeEntity tradeEntity, SideEntity sideEntity,
            List<FractionClientInDto> fractionClientInDtoList, AccountLookupContext accountLookupContext) {
        log.debug("Validate Automatic Assignment");
        ParticipantEntity participantBySide = SideEnum.BUY.getId().equals(sideEntity.getId())
                ? tradeEntity.getParticipantBuy()
                : tradeEntity.getParticipantSell();

        TypeEntity originTypeBySide = SideEnum.BUY.getId().equals(sideEntity.getId())
                ? tradeEntity.getSourceQuoteBuyType()
                : tradeEntity.getSourceQuoteSellType();

        log.debug("Meets the condition for automatic assignment mark");
        FractionClientInDto fractionClientInDto = fractionClientInDtoList.get(0);

        if (!isAutomaticAssignmentApplicable(participantBySide, originTypeBySide)) {
            fractionClientInDtoList.get(0).setHaveAssignmentMark(false);
            return;
        }

        String accountNumber = getAccountNumber(fractionClientInDto, accountLookupContext);
        validateAccountAssignment(accountNumber, tradeEntity, sideEntity);

        validateCashAccountMatch(fractionClientInDto, tradeEntity, sideEntity);

        if (fractionClientInDto.getCustodianId() != null || fractionClientInDto.getFicAdministratorId() != null) {
            throw new ServiceException(ErrorCode.CUSTODIAN_AND_FIC_MUST_BE_EMPTY_TO_ASSIGNMENT_MARK,
                    HttpStatus.BAD_REQUEST);
        }
        fractionClientInDtoList.get(0).setHaveAssignmentMark(true);
    }

    private boolean isAutomaticAssignmentApplicable(ParticipantEntity participant, TypeEntity typeEntity) {
        return participant != null && participant.getCountry() != null
                && Objects.equals(participant.getCountry().getId(), CountryEnum.COLOMBIA.getId())
                && DirectAllocationEnum.TRUE.getId().equalsIgnoreCase(participant.getDirectAllocation())
                && typeEntity != null && Objects.equals(typeEntity.getId(), TypeEnum.OWN_POSITION_POINT_ORIGIN.getId());
    }

    private void validateAccountAssignment(String accountNumber, TradeEntity tradeEntity, SideEntity sideEntity) {
        FractionAccountOutDto fractionAccountOutDto = validateCountedFractionService.validateAccountFractionAssignment(
                tradeEntity, accountNumber, sideEntity.getId(), TypeEnum.OWN_POSITION_POINT_ORIGIN.getId(), false);

        if (fractionAccountOutDto.getParticipantAccount() == null
                && fractionAccountOutDto.getInvestorAccount() == null) {
            throw new ServiceException(ErrorCode.ACCOUNT_NOT_MATCH_OF_OWN_POSITION, HttpStatus.BAD_REQUEST);
        }
    }

    private void validateCashAccountMatch(FractionClientInDto fractionClientInDto, TradeEntity tradeEntity,
            SideEntity sideEntity) {
        ParticipantBankAccountOutDto participantBankAccountOutDto = validateCountedFractionService
                .validateCudAccountFractionAssignment(tradeEntity.getId(), sideEntity.getId());

        String bankAccountNumber = participantBankAccountOutDto.getBankAccount();

        if (bankAccountNumber == null || bankAccountNumber.trim().isEmpty()) {
            throw new ServiceException(ErrorCode.CUD_ACCOUNT_NOT_FOUND, HttpStatus.BAD_REQUEST);
        }

        BigDecimal expectedCashAccount = parseCudBankAccountNumber(bankAccountNumber);

        if (!expectedCashAccount.equals(fractionClientInDto.getCashAccount())) {
            throw new ServiceException(ErrorCode.CUD_ACCOUNT_CANT_BE_EMPTY_OR_DIFFERENT_TO_ASSIGNMENT_MARK,
                    HttpStatus.BAD_REQUEST);
        }
    }

    private void validateOwnPosition(TradeEntity tradeEntity, SideEntity side,
            List<FractionClientInDto> fractionClientInDtoList) {
        log.debug("Validate OwnPosition");
        TypeEntity sourceQuoteType = null;
        if (SideEnum.BUY.getId().equals(side.getId())) {
            sourceQuoteType = tradeEntity.getSourceQuoteBuyType();
        } else if (SideEnum.SELL.getId().equals(side.getId())) {
            sourceQuoteType = tradeEntity.getSourceQuoteSellType();
        }

        if (sourceQuoteType == null || !TypeEnum.OWN_POSITION_POINT_ORIGIN.getId().equals(sourceQuoteType.getId())) {
            return;
        }

        if (fractionClientInDtoList.size() > 1) {
            throw new ServiceException(ErrorCode.OWN_POSITION_ONLY_ONE_FRACTION_ALLOWED, HttpStatus.BAD_REQUEST);
        }

        if (!fractionClientInDtoList.isEmpty()) {
            FractionClientInDto fraction = fractionClientInDtoList.get(0);
            BigDecimal commissionPercentage = fraction.getCommissionPercentage();

            if (commissionPercentage != null && commissionPercentage.compareTo(BigDecimal.ZERO) != 0) {
                throw new ServiceException(ErrorCode.OWN_POSITION_COMMISSION_MUST_BE_ZERO, HttpStatus.BAD_REQUEST);
            }
        }
    }

    private FractionAccountOutDto getCachedAccountValidation(
            Map<AccountValidationKey, FractionAccountOutDto> accountValidations, TradeEntity tradeEntity,
            SideEntity sideEntity, String accountNumber, Long sourceQuoteTypeId, Boolean isLocalCorrection) {

        AccountValidationKey key = new AccountValidationKey(accountNumber, sourceQuoteTypeId);

        return accountValidations.computeIfAbsent(key,
                ignored -> validateCountedFractionService.validateAccountFractionAssignment(tradeEntity, accountNumber,
                        sideEntity.getId(), sourceQuoteTypeId, isLocalCorrection));
    }

}

```

## src/main/java/com/nubo/operations/cmd/api/helpers/MapperPageUtil.java

```java
package com.nubo.operations.cmd.api.helpers;

import java.util.List;

import org.springframework.data.domain.Page;

import com.nubo.operations.cmd.api.models.dto.response.PageResponseOutDto;

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

## src/main/java/com/nubo/operations/cmd/api/helpers/MapperUtil.java

```java
package com.nubo.operations.cmd.api.helpers;

import org.springframework.util.ObjectUtils;

import com.nubo.operations.cmd.api.client.kafka.models.request.CountryInDto;
import com.nubo.operations.cmd.api.client.kafka.models.request.DepositoryInDto;
import com.nubo.operations.cmd.api.client.kafka.models.request.DirectDepositoryInDto;
import com.nubo.operations.cmd.api.client.kafka.models.request.InvestorAccountInDto;
import com.nubo.operations.cmd.api.client.kafka.models.request.InvestorInDto;
import com.nubo.operations.cmd.api.client.kafka.models.request.ParticipantAccountInDto;
import com.nubo.operations.cmd.api.client.kafka.models.request.ParticipantBankAccountInDto;
import com.nubo.operations.cmd.api.client.kafka.models.request.ParticipantInDto;
import com.nubo.operations.cmd.api.client.kafka.models.request.TypeInDto;
import com.nubo.operations.cmd.api.client.operation.rules.models.dto.response.StatusClientOutDto;
import com.nubo.operations.cmd.api.models.dto.response.AssignmentClosureOutDto;
import com.nubo.operations.cmd.api.models.dto.response.BusinessRuleCodeOutDto;
import com.nubo.operations.cmd.api.models.dto.response.ClassOutDto;
import com.nubo.operations.cmd.api.models.dto.response.CountryOutDto;
import com.nubo.operations.cmd.api.models.dto.response.CurrencyOutDto;
import com.nubo.operations.cmd.api.models.dto.response.DepositoryOutDto;
import com.nubo.operations.cmd.api.models.dto.response.GicsOutDto;
import com.nubo.operations.cmd.api.models.dto.response.IdentificationTypeOutDto;
import com.nubo.operations.cmd.api.models.dto.response.InvestorAccountOutDto;
import com.nubo.operations.cmd.api.models.dto.response.InvestorOutDto;
import com.nubo.operations.cmd.api.models.dto.response.MarketOutDto;
import com.nubo.operations.cmd.api.models.dto.response.MilaDepositoryOutDto;
import com.nubo.operations.cmd.api.models.dto.response.ParticipantAccountOutDto;
import com.nubo.operations.cmd.api.models.dto.response.ParticipantBankAccountOutDto;
import com.nubo.operations.cmd.api.models.dto.response.ParticipantOutDto;
import com.nubo.operations.cmd.api.models.dto.response.SecurityTitleOutDto;
import com.nubo.operations.cmd.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.cmd.api.models.dto.response.SideOutDto;
import com.nubo.operations.cmd.api.models.dto.response.StatusOutDto;
import com.nubo.operations.cmd.api.models.dto.response.TaxStatusOutDto;
import com.nubo.operations.cmd.api.models.dto.response.TradeEquityOutDto;
import com.nubo.operations.cmd.api.models.dto.response.TradeOutDto;
import com.nubo.operations.cmd.api.models.dto.response.TradingSessionOutDto;
import com.nubo.operations.cmd.api.models.dto.response.TradingSystemOutDto;
import com.nubo.operations.cmd.api.models.dto.response.TypeOutDto;
import com.nubo.operations.cmd.api.models.entity.ClassEntity;
import com.nubo.operations.cmd.api.models.entity.CountryEntity;
import com.nubo.operations.cmd.api.models.entity.CurrencyEntity;
import com.nubo.operations.cmd.api.models.entity.DepositoryEntity;
import com.nubo.operations.cmd.api.models.entity.DirectDepositoryEntity;
import com.nubo.operations.cmd.api.models.entity.GicsEntity;
import com.nubo.operations.cmd.api.models.entity.IdentificationTypeEntity;
import com.nubo.operations.cmd.api.models.entity.InvestorAccountEntity;
import com.nubo.operations.cmd.api.models.entity.InvestorEntity;
import com.nubo.operations.cmd.api.models.entity.MarketEntity;
import com.nubo.operations.cmd.api.models.entity.MilaDepositoryEntity;
import com.nubo.operations.cmd.api.models.entity.ParticipantAccountEntity;
import com.nubo.operations.cmd.api.models.entity.ParticipantBankAccountEntity;
import com.nubo.operations.cmd.api.models.entity.ParticipantEntity;
import com.nubo.operations.cmd.api.models.entity.SecurityTitleEntity;
import com.nubo.operations.cmd.api.models.entity.SettlementEntity;
import com.nubo.operations.cmd.api.models.entity.SideEntity;
import com.nubo.operations.cmd.api.models.entity.StatusEntity;
import com.nubo.operations.cmd.api.models.entity.TaxStatusEntity;
import com.nubo.operations.cmd.api.models.entity.TradeEntity;
import com.nubo.operations.cmd.api.models.entity.TradeEquityEntity;
import com.nubo.operations.cmd.api.models.entity.TradingSessionEntity;
import com.nubo.operations.cmd.api.models.entity.TradingSystemEntity;
import com.nubo.operations.cmd.api.models.entity.TypeEntity;

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
                .depository(depositoryEntityToDepositoryOutDto(tradeEntity.getDepository()))
                .country(countryEntityToCountryOutDto(tradeEntity.getCountry()))
                .type(typeEntityToTypeOutDto(tradeEntity.getType()))
                .market(marketEntityToMarketOutDto(tradeEntity.getMarket()))
                .issuanceMarket(marketEntityToMarketOutDto(tradeEntity.getIssuanceMarket()))
                .securityTitle(securityTitleEntityToSecurityTitleOutDto(tradeEntity.getSecurityTitle()))
                .participantBuy(participantEntityToParticipantOutDto(tradeEntity.getParticipantBuy()))
                .participantSell(
                        Boolean.TRUE.equals(tradeEntity.getOwnPositionBuy()) && participantSellDto != null
                                ? participantSellDto.toBuilder().code("-").build()
                                : participantSellDto)
                .custodianBuy(null)
                .custodianSell(null)
                .assignmentMarkBuy(tradeEntity.getAssignmentMarkBuy())
                .assignmentMarkSell(tradeEntity.getAssignmentMarkSell())
                .fractionalMarkBuy(tradeEntity.getFractionalMarkBuy())
                .fractionalMarkSell(tradeEntity.getFractionalMarkSell())
                .advanceStatus(tradeEntity.getAdvanceStatus())
                .exitIndicatorSettlement(tradeEntity.getExitIndicatorSettlement())
                .canceledStatus(tradeEntity.getCanceledStatus())
                .quantity(tradeEntity.getQuantity())
                .price(tradeEntity.getPrice())
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
                .paymentType(typeEntityToTypeOutDto(tradeEntity.getPaymentType()))
                .settlementType(typeEntityToTypeOutDto(tradeEntity.getSettlementType()))
                .custodianStatus(statusEntityToStatusOutDto(tradeEntity.getCustodianStatus()))
                .settlementStatus(statusEntityToStatusOutDto(tradeEntity.getSettlementStatus()))
                .bloquingStatus(statusEntityToStatusOutDto(tradeEntity.getBloquingStatus()))
                .purchasePaymentIndicator(tradeEntity.getPurchasePaymentIndicator())
                .returnIndicatorSettlement(tradeEntity.getReturnIndicatorSettlement())
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

    public static TradeEquityOutDto tradeEquityEntityToTradeEquityOutDto(TradeEquityEntity tradeEquityEntity) {
        return TradeEquityOutDto.builder()
                .tradeId(tradeEquityEntity.getTrade().getId())
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
                .investor(investorEntityToInvestorOutDto(settlementEntity.getInvestor()))
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
                .bankAccountId(settlementEntity.getBankAccountId())
                .reference(settlementEntity.getReference())
                .capitalGainValue(settlementEntity.getCapitalGainValue())
                .disbursementValue(settlementEntity.getDisbursementValue())
                .sourceQuoteType(typeEntityToTypeOutDto(settlementEntity.getSourceQuoteType()))
                .ficAdministratorId(
                        settlementEntity.getFicAdministrator() != null ? settlementEntity.getFicAdministrator().getId()
                                : null)
                .cashAccount(settlementEntity.getCashAccount())
                .indMaster(settlementEntity.getIndMaster())
                .custodianStatus(ObjectUtils.isEmpty(settlementEntity.getCustodianStatus()) ? null
                        : statusEntityToStatusOutDto(settlementEntity.getCustodianStatus()))
                .build();
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
                .accountName(investorAccountEntity.getAccountName())
                .status(statusEntityToStatusOutDto(investorAccountEntity.getStatus()))
                .type(typeEntityToTypeOutDto(investorAccountEntity.getType()))
                .originType(typeEntityToTypeOutDto(investorAccountEntity.getOriginType()))
                .depository(depositoryEntityToDepositoryOutDto(investorAccountEntity.getDepository()))
                .participant(participantEntityToParticipantOutDto(investorAccountEntity.getParticipant()))
                .taxExemp(investorAccountEntity.getTaxExemp())
                .build();
    }

    public static ParticipantAccountOutDto participantAccountEntityToParticipantAccountOutDto(
            ParticipantAccountEntity participantAccountEntity) {
        if (ObjectUtils.isEmpty(participantAccountEntity))
            return null;
        return ParticipantAccountOutDto.builder()
                .id(participantAccountEntity.getId())
                .participant(participantEntityToParticipantOutDto(participantAccountEntity.getParticipant()))
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

    public static ClassOutDto classEntityToClassOutDto(ClassEntity classEntity) {
        if (ObjectUtils.isEmpty(classEntity))
            return null;
        return ClassOutDto.builder()
                .id(classEntity.getId())
                .description(classEntity.getDescription())
                .category(classEntity.getCategory())
                .build();
    }

    public static StatusEntity statusClientOutDtoToStatusEntity(StatusClientOutDto statusClientOutDto) {
        if (ObjectUtils.isEmpty(statusClientOutDto))
            return null;
        return StatusEntity.builder()
                .id(statusClientOutDto.getId())
                .description(statusClientOutDto.getDescription())
                .category(statusClientOutDto.getCategory())
                .build();
    }

    public static AssignmentClosureOutDto buildAssignmentClosureOutDto(TradeEntity tradeEntity,
            ParticipantEntity participantEntity, SideEntity sideEntity, String message,
            BusinessRuleCodeOutDto businessRuleCode) {
        return AssignmentClosureOutDto.builder()
                .tradeId(tradeEntity.getId())
                .message(message)
                .matchDate(tradeEntity.getMatchDate())
                .matchId(tradeEntity.getMatchId())
                .clearingDate(tradeEntity.getClearingDate())
                .side(sideEntityToSideOutDto(sideEntity))
                .participant(participantEntityToParticipantOutDto(participantEntity))
                .businessRuleCode(businessRuleCode)
                .build();
    }

    public static CountryInDto countryEntityToCountryInDto(CountryEntity countryEntity) {
        if (ObjectUtils.isEmpty(countryEntity))
            return null;
        return CountryInDto.builder()
                .id(countryEntity.getId())
                .code(countryEntity.getCode())
                .name(countryEntity.getName())
                .build();
    }

    public static ParticipantInDto participantEntityToParticipantInDto(ParticipantEntity participantEntity) {
        if (ObjectUtils.isEmpty(participantEntity))
            return null;
        return ParticipantInDto.builder()
                .id(participantEntity.getId())
                .code(participantEntity.getCode())
                .name(participantEntity.getName())
                .build();
    }

    public static ParticipantAccountInDto participantAccountEntityToParticipantAccountInDto(
            ParticipantAccountEntity participantAccountEntity) {
        if (ObjectUtils.isEmpty(participantAccountEntity))
            return null;
        return ParticipantAccountInDto.builder()
                .id(participantAccountEntity.getId())
                .participant(participantEntityToParticipantInDto(participantAccountEntity.getParticipant()))
                .accountNumber(participantAccountEntity.getAccountNumber())
                .build();
    }

    public static ParticipantBankAccountInDto participantBankAccountEntityToParticipantBankAccountInDto(
            ParticipantBankAccountEntity participantBankAccountEntity) {
        if (ObjectUtils.isEmpty(participantBankAccountEntity))
            return null;
        return ParticipantBankAccountInDto.builder()
                .id(participantBankAccountEntity.getId())
                .bankAccount(participantBankAccountEntity.getBankAccount())
                .principal(participantBankAccountEntity.getPrincipal())
                .build();
    }

    public static InvestorInDto investorEntityToInvestorInDto(InvestorEntity investorEntity) {
        if (ObjectUtils.isEmpty(investorEntity))
            return null;
        return InvestorInDto.builder()
                .id(investorEntity.getId())
                .code(investorEntity.getCode())
                .firstName(investorEntity.getFirstName())
                .lastName(investorEntity.getLastName())
                .companyName(investorEntity.getCompanyName())
                .documentNumber(investorEntity.getDocumentNumber())
                .identificationTypeCode(investorEntity.getIdentificationType() != null
                        ? investorEntity.getIdentificationType().getCode()
                        : null)
                .build();
    }

    public static DepositoryInDto depositoryEntityToDepositoryInDto(DepositoryEntity depositoryEntity) {
        if (ObjectUtils.isEmpty(depositoryEntity))
            return null;
        return DepositoryInDto.builder()
                .id(depositoryEntity.getId())
                .description(depositoryEntity.getDescription())
                .build();
    }

    public static InvestorAccountInDto investorAccountEntityToInvestorAccountInDto(
            InvestorAccountEntity investorAccountEntity) {
        if (ObjectUtils.isEmpty(investorAccountEntity))
            return null;
        return InvestorAccountInDto.builder()
                .id(investorAccountEntity.getId())
                .investor(investorEntityToInvestorInDto(investorAccountEntity.getInvestor()))
                .accountNumber(investorAccountEntity.getAccountNumber())
                .build();
    }

    public static TypeInDto typeEntityToTypeInDto(TypeEntity typeEntity) {
        if (ObjectUtils.isEmpty(typeEntity))
            return null;
        return TypeInDto.builder()
                .id(typeEntity.getId())
                .description(typeEntity.getDescription())
                .category(typeEntity.getCategory())
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

    public static DirectDepositoryInDto directDepositoryEntityToDirectDepositoryInDto(
            DirectDepositoryEntity directDepositoryEntity) {
        if (ObjectUtils.isEmpty(directDepositoryEntity))
            return null;
        return DirectDepositoryInDto.builder()
                .id(directDepositoryEntity.getId())
                .participantId(directDepositoryEntity.getParticipantId())
                .depositoryId(directDepositoryEntity.getDepositoryId())
                .directDepositoryNumber(directDepositoryEntity.getDirectDepositoryNumber())
                .build();
    }

    public static MilaDepositoryOutDto milaDepositoryEntityToMilaDepositoryDto(
            MilaDepositoryEntity milaDepositoryEntity) {
        if (milaDepositoryEntity == null) {
            return null;
        }

        return MilaDepositoryOutDto.builder()
                .id(milaDepositoryEntity.getId())
                .code(milaDepositoryEntity.getCode())
                .identificationTypeId(milaDepositoryEntity.getIdentificationTypeId())
                .documentNumber(milaDepositoryEntity.getDocumentNumber())
                .directDepositoryNumber(milaDepositoryEntity.getDirectDepositoryNumber())
                .build();
    }

    public static SettlementOutDto mapCorrectionToSettlementOutDto(SettlementEntity settlement) {
        if (ObjectUtils.isEmpty(settlement)) {
            return null;
        }
        return SettlementOutDto.builder()
                .tradeId(settlement.getTrade().getId())
                .fraction(settlement.getFraction())
                .side(settlement.getSide() != null ? SideOutDto.builder()
                        .id(settlement.getSide().getId())
                        .description(settlement.getSide().getDescription())
                        .build() : null)
                .status(settlement.getStatus() != null ? StatusOutDto.builder()
                        .id(settlement.getStatus().getId())
                        .description(settlement.getStatus().getDescription())
                        .build() : null)
                .investorAccount(settlement.getInvestorAccount() != null ? InvestorAccountOutDto.builder()
                        .id(settlement.getInvestorAccount().getId())
                        .accountNumber(settlement.getInvestorAccount().getAccountNumber())
                        .accountName(settlement.getInvestorAccount().getAccountName())
                        .taxExemp(settlement.getInvestorAccount().getTaxExemp())
                        .build() : null)
                .participantAccount(settlement.getParticipantAccount() != null ? ParticipantAccountOutDto.builder()
                        .id(settlement.getParticipantAccount().getId())
                        .accountNumber(settlement.getParticipantAccount().getAccountNumber())
                        .taxExemp(settlement.getParticipantAccount().getTaxExemp())
                        .build() : null)
                .fractionQuantity(settlement.getFractionQuantity())
                .commissionPercentage(settlement.getCommissionPercentage())
                .reference(settlement.getReference())
                .build();
    }
}

```

## src/main/java/com/nubo/operations/cmd/api/models/context/AccountLookupContext.java

```java
package com.nubo.operations.cmd.api.models.context;

import java.util.Map;

import com.nubo.operations.cmd.api.models.entity.InvestorAccountEntity;
import com.nubo.operations.cmd.api.models.entity.ParticipantAccountEntity;

public record AccountLookupContext(
        Map<Long, ParticipantAccountEntity> participantAccounts,
        Map<Long, InvestorAccountEntity> investorAccounts) {
}

```

## src/main/java/com/nubo/operations/cmd/api/models/context/AccountValidationKey.java

```java
package com.nubo.operations.cmd.api.models.context;

/**
 * Clave del cache local por operación: accountNumber + sourceQuoteTypeId.
 * No incluye tradeId ni sideId porque el Map se crea por item/operación.
 */
public record AccountValidationKey(
        String accountNumber,
        Long sourceQuoteTypeId) {
}

```

## src/main/java/com/nubo/operations/cmd/api/models/context/AssignmentParticipantContext.java

```java
package com.nubo.operations.cmd.api.models.context;

/**
 * Scalar participant data required only by assignment batch validation.
 *
 * <p>This is deliberately not a JPA entity: callers must not cause lazy
 * loading while validating a batch.</p>
 */
public record AssignmentParticipantContext(
        Long id,
        String documentNumber,
        Long countryId,
        String directAllocation) {
}

```

## src/main/java/com/nubo/operations/cmd/api/models/context/AssignmentTradeContext.java

```java
package com.nubo.operations.cmd.api.models.context;

import java.math.BigDecimal;
import java.time.LocalDate;

/**
 * Read-only scalar trade data for the assignment validation batch hot path.
 *
 * <p>It intentionally has no JPA annotations and no {@code TradeEquity}
 * relation. The batch must not materialize {@code TradeEntity} merely to
 * validate an assignment.</p>
 */
public record AssignmentTradeContext(
        Long id,
        Long matchId,
        LocalDate matchDate,
        BigDecimal quantity,
        Long typeId,
        Long countryId,
        AssignmentParticipantContext participantBuy,
        AssignmentParticipantContext participantSell,
        String depositoryBuyId,
        String depositorySellId,
        Long sourceQuoteBuyTypeId,
        Long sourceQuoteSellTypeId,
        Integer securityTitleCountryId) {
}

```

## src/main/java/com/nubo/operations/cmd/api/models/context/ProtectedFractionState.java

```java
package com.nubo.operations.cmd.api.models.context;

import java.math.BigDecimal;

public record ProtectedFractionState(
        BigDecimal quantity,
        BigDecimal cashAccount,
        Long custodianId,
        Long ficAdministratorId,
        Long uniqueFractionId,
        Long custodianStatusId,
        String referencePackage) {
}

```

## src/main/java/com/nubo/operations/cmd/api/models/domain/CorrectionData.java

```java
package com.nubo.operations.cmd.api.models.domain;

import com.nubo.operations.cmd.api.models.dto.request.AssignmentInDto;
import com.nubo.operations.cmd.api.models.entity.SettlementEntity;
import com.nubo.operations.cmd.api.models.enums.CorrectionTypeEnum;

public record CorrectionData(
        AssignmentInDto assignmentInDto,
        SettlementEntity currentSettlement,
        CorrectionTypeEnum correctionType,
        boolean isNewFraction,
        SettlementCorrection settlementCorrection,
        boolean sendDeposit) {
}

```

## src/main/java/com/nubo/operations/cmd/api/models/domain/SettlementCorrection.java

```java
package com.nubo.operations.cmd.api.models.domain;

import java.util.List;

public record SettlementCorrection(
        String correctionNumber,
        List<Long> settlementCorrectionIds) {
}

```

## src/main/java/com/nubo/operations/cmd/api/models/dto/request/AssignmentClosureInDto.java

```java
package com.nubo.operations.cmd.api.models.dto.request;

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
public class AssignmentClosureInDto {

    @NotNull
    private Long tradeId;

    @NotBlank
    private String sideId;

}

```

## src/main/java/com/nubo/operations/cmd/api/models/dto/request/AssignmentInDto.java

```java
package com.nubo.operations.cmd.api.models.dto.request;

import java.math.BigDecimal;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.nubo.operations.cmd.api.application.annotations.ValidBigDecimal;

import jakarta.validation.constraints.AssertTrue;
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
public class AssignmentInDto {

    private Integer fraction;

    @Min(value = 1)
    private Long investorAccountId;

    @Min(value = 1)
    private Long participantAccountId;

    @NotNull
    private Boolean fiduciarySpecialist;

    @NotNull
    @Min(value = 1)
    private Long sourceQuoteTypeId;

    private String reference;

    @NotNull
    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal fractionQuantity;

    @NotNull
    @ValidBigDecimal(precision = 6, scale = 4)
    private BigDecimal commissionPercentage;

    @NotNull
    @ValidBigDecimal(precision = 6, scale = 4)
    private BigDecimal valTax;

    @ValidBigDecimal(precision = 20, scale = 0)
    private BigDecimal cashAccount;

    @Min(value = 1)
    private Long custodianId;

    @Min(value = 1)
    private Long ficAdministratorId;

    @Min(value = 1)
    private Long milaDirectDepositorId;

    //--- Assert validations ----

    @JsonIgnore
    @AssertTrue(message = "exactly one of investorAccountId or participantAccountId must be provided, not both and not neither")
    public boolean isOnlyAccountRequired() {
        return (investorAccountId != null) ^ (participantAccountId != null);
    }

}

```

## src/main/java/com/nubo/operations/cmd/api/models/dto/request/BatchAssignmentInDto.java

```java
package com.nubo.operations.cmd.api.models.dto.request;

import java.util.List;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BatchAssignmentInDto {

    @NotBlank
    private String batchId;

    @NotEmpty
    @Valid
    private List<BatchAssignmentItemInDto> items;
}

```

## src/main/java/com/nubo/operations/cmd/api/models/dto/request/BatchAssignmentItemInDto.java

```java
package com.nubo.operations.cmd.api.models.dto.request;

import java.time.LocalDate;
import java.util.List;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BatchAssignmentItemInDto {

    @NotBlank
    private String itemId;

    private String correlationId;
    private String topic;
    private Integer partition;
    private Long offset;
    private String key;

    /*
     * PREPARED mode.
     *
     * Utilizado internamente después de la validación o por
     * compatibilidad con consumidores batch ya preparados.
     */
    private Long tradeId;
    private String sideId;

    @Valid
    private List<BatchPreparedFractionInDto> fractions;

    /*
     * RAW mode.
     *
     * Información recibida directamente desde el Orquestador.
     */
    private Long matchId;
    private LocalDate registrationDate;
    private String participantCode;

    @NotBlank
    private String operationType;

    @Valid
    private List<BatchAssignmentValidationFractionInDto> rawFractions;
}
```

## src/main/java/com/nubo/operations/cmd/api/models/dto/request/BatchAssignmentValidationFractionInDto.java

```java
package com.nubo.operations.cmd.api.models.dto.request;

import java.math.BigDecimal;

import com.nubo.operations.cmd.api.application.annotations.ValidBigDecimal;
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
public class BatchAssignmentValidationFractionInDto {
    private String reference;

    @NotBlank
    private String titleAccount;

    @ValidBigDecimal(precision = 20, scale = 0)
    private BigDecimal cashAccount;

    @NotNull @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal fractionQuantity;

    @NotNull @ValidBigDecimal(precision = 6, scale = 4)
    private BigDecimal commissionPercentage;

    private String custodianCode;

    private String ficAdministratorCode;

    private String referencePackage;
}

```

## src/main/java/com/nubo/operations/cmd/api/models/dto/request/BatchAssignmentValidationInDto.java

```java
package com.nubo.operations.cmd.api.models.dto.request;

import java.util.List;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BatchAssignmentValidationInDto {
    @NotBlank
    private String batchId;
    @NotEmpty
    @Valid
    private List<BatchAssignmentValidationItemInDto> items;
}

```

## src/main/java/com/nubo/operations/cmd/api/models/dto/request/BatchAssignmentValidationItemInDto.java

```java
package com.nubo.operations.cmd.api.models.dto.request;

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
public class BatchAssignmentValidationItemInDto {

    private String itemId;
    private String correlationId;
    private String topic;
    private Integer partition;
    private Long offset;
    private String key;

    private Long matchId;
    private LocalDate registrationDate;

    private String side;
    private String participantCode;
    private String operationType;

    private List<BatchAssignmentValidationFractionInDto> fractions;
}
```

## src/main/java/com/nubo/operations/cmd/api/models/dto/request/BatchPreparedFractionInDto.java

```java
package com.nubo.operations.cmd.api.models.dto.request;

import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BatchPreparedFractionInDto {

    private Long investorAccountId;
    private Long participantAccountId;

    private Boolean fiduciarySpecialist;

    private Long sourceQuoteTypeId;

    private String reference;

    private BigDecimal fractionQuantity;
    private BigDecimal commissionPercentage;

    /*
     * Calculado por CMD.
     */
    private BigDecimal valTax;

    private BigDecimal cashAccount;

    private Long custodianId;
    private Long ficAdministratorId;

    private Long milaDirectDepositorId;
    private Long transferParticipantId;

    private Boolean haveAssignmentMark;

    private Long uniqueFractionId;
    private Long custodianStatusId;

    private Boolean ownPositionFraction;

    private String referencePackage;
}
```

## src/main/java/com/nubo/operations/cmd/api/models/dto/request/CalculationInDto.java

```java
package com.nubo.operations.cmd.api.models.dto.request;

import java.math.BigDecimal;

import com.nubo.operations.cmd.api.application.annotations.ValidBigDecimal;

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

## src/main/java/com/nubo/operations/cmd/api/models/dto/request/CalculationIvaInDto.java

```java
package com.nubo.operations.cmd.api.models.dto.request;

import java.math.BigDecimal;

import com.nubo.operations.cmd.api.application.annotations.ValidBigDecimal;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

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

## src/main/java/com/nubo/operations/cmd/api/models/dto/request/FractionInDto.java

```java
package com.nubo.operations.cmd.api.models.dto.request;

import java.math.BigDecimal;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.nubo.operations.cmd.api.application.annotations.ValidBigDecimal;

import jakarta.validation.constraints.AssertTrue;
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
public class FractionInDto {

    @Min(value = 1)
    private Long investorAccountId;

    @Min(value = 1)
    private Long participantAccountId;

    @NotNull
    private Boolean fiduciarySpecialist;

    @NotNull
    @Min(value = 1)
    private Long sourceQuoteTypeId;

    private String reference;

    @NotNull
    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal fractionQuantity;

    @NotNull
    @ValidBigDecimal(precision = 6, scale = 4)
    private BigDecimal commissionPercentage;

    @ValidBigDecimal(precision = 20, scale = 0)
    private BigDecimal cashAccount;

    @Min(value = 1)
    private Long custodianId;

    @Min(value = 1)
    private Long ficAdministratorId;

    @Min(value = 1)
    private Long milaDirectDepositorId;

    private String referencePackage;

    @JsonIgnore
    @AssertTrue(
            message = "exactly one of investorAccountId or participantAccountId must be provided, not both and not neither"
    )
    public boolean isOnlyAccountRequired() {
        return (investorAccountId != null)
                ^ (participantAccountId != null);
    }

    @JsonIgnore
    @AssertTrue(
            message = "referencePackage must be null or empty when custodianId is null"
    )
    public boolean isReferencePackageNullWhenCustodianIdIsNull() {
        if (custodianId == null) {
            return referencePackage == null
                    || referencePackage.isEmpty();
        }

        return true;
    }
}

```

## src/main/java/com/nubo/operations/cmd/api/models/dto/request/FractionRuleInDto.java

```java
package com.nubo.operations.cmd.api.models.dto.request;

import java.math.BigDecimal;

import com.nubo.operations.cmd.api.application.annotations.ValidBigDecimal;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FractionRuleInDto {

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal fractionQuantity;

}

```

## src/main/java/com/nubo/operations/cmd/api/models/dto/request/SettlementCommissionUpdateInDto.java

```java
package com.nubo.operations.cmd.api.models.dto.request;

import java.math.BigDecimal;

import com.nubo.operations.cmd.api.application.annotations.ValidBigDecimal;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SettlementCommissionUpdateInDto {

    @ValidBigDecimal(precision = 6, scale = 4, message = "Invalid commission percentage format")
    private BigDecimal commissionPercentage;

}

```

## src/main/java/com/nubo/operations/cmd/api/models/dto/request/TradeEquityInDto.java

```java
package com.nubo.operations.cmd.api.models.dto.request;

import java.math.BigDecimal;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nubo.operations.cmd.api.application.annotations.ValidBigDecimal;

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
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class TradeEquityInDto {

    @NotNull
    @Min(value = 1)
    private Long tradeId;

    private String foreignBrokerBuy;

    private String foreignBrokerSell;

    private Integer directDepositorBuy;

    private Integer directDepositorSell;

    private Integer sourceIndicatorBuy;

    private Integer sourceIndicatorSell;

    private Integer responsibleTradeBuy;

    private Integer responsibleTradeSell;

    @Size(max = 30)
    private String referenceBuy;

    @Size(max = 30)
    private String referenceSell;

    @ValidBigDecimal(precision = 19, scale = 0)
    private BigDecimal orderBookId;

    private Boolean prearrangedOperation;

    private Integer aggressiveTip;

    private Boolean exdividendPeriod;
}

```

## src/main/java/com/nubo/operations/cmd/api/models/dto/request/TradeEquityUpdateInDto.java

```java
package com.nubo.operations.cmd.api.models.dto.request;

import java.math.BigDecimal;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nubo.operations.cmd.api.application.annotations.ValidBigDecimal;

import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class TradeEquityUpdateInDto {

    private String foreignBrokerBuy;

    private String foreignBrokerSell;

    private Integer directDepositorBuy;

    private Integer directDepositorSell;

    private Integer sourceIndicatorBuy;

    private Integer sourceIndicatorSell;

    private Integer responsibleTradeBuy;

    private Integer responsibleTradeSell;

    @Size(max = 30)
    private String referenceBuy;

    @Size(max = 30)
    private String referenceSell;

    @ValidBigDecimal(precision = 19, scale = 0)
    private BigDecimal orderBookId;

    private Boolean prearrangedOperation;

    private Integer aggressiveTip;

    private Boolean exdividendPeriod;

}

```

## src/main/java/com/nubo/operations/cmd/api/models/dto/request/TradeInDto.java

```java
package com.nubo.operations.cmd.api.models.dto.request;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.OffsetDateTime;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nubo.operations.cmd.api.application.annotations.ValidBigDecimal;

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
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class TradeInDto {

    @NotNull
    private LocalDate matchDate;

    @NotNull
    @Min(value = 1)
    private Long matchId;

    private LocalDate clearingDate;

    private LocalDate returnClearingDate;

    @Size(max = 2)
    private String depositoryId;

    @NotNull
    @Min(value = 1)
    private Long countryId;

    @Min(value = 1)
    private Long typeId;

    @NotNull
    @Size(max = 2)
    private String marketId;

    @NotNull
    @Size(max = 2)
    private String issuanceMarketId;

    @NotNull
    @Min(value = 1)
    private Long securityId;

    @NotNull
    @Min(value = 1)
    private Long participantIdBuy;

    @NotNull
    @Min(value = 1)
    private Long participantIdSell;

    private Long custodianIdBuy;

    private Long custodianIdSell;

    private Boolean assignmentMarkBuy;

    private Boolean assignmentMarkSell;

    private Boolean fractionalMarkBuy;

    private Boolean fractionalMarkSell;

    private Integer advanceStatus;

    private Boolean exitIndicatorSettlement;

    private Boolean canceledStatus;

    @NotNull
    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal quantity;

    @NotNull
    @ValidBigDecimal(precision = 16, scale = 6)
    private BigDecimal price;

    @NotNull
    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal volume;

    @ValidBigDecimal(precision = 6, scale = 4)
    private BigDecimal repurchaseRate;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal repurchaseAmount;

    @NotNull
    @Min(value = 1)
    private Integer statusId;

    private OffsetDateTime matchTime;

    private Boolean ownPositionSell;

    private Boolean ownPositionBuy;

    @Min(value = 1)
    private Long currencyId;

    @Min(value = 1)
    private Long tradingSystemId;

    @Size(max = 2)
    private String tradingSessionId;

    private LocalDate repurchaseAgreementDate;

    private Integer daysToSettlement;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal repoRate;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal repoAmount;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal fundingAmount;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal netOutFlowTotal;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal outFlowTurnOverValue;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal totalNetReturn;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal returnTurnoverValue;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal deliveryVersusPaymentValue;

    private Boolean reallocationIndicator;

    @Min(value = 1)
    private Long businessTypeId;

    @Min(value = 1)
    private Long marketTypeId;

    @Min(value = 1)
    private Long originTypeId;

    private Boolean settlementIndicatorOutgoing;

    private Boolean settlementIndicatorReturn;

    private Boolean resettlementIndicatorAdvance;

    @Min(value = 1)
    private Long specialTradeId;

    @Min(value = 1)
    private Long paymentTypeId;

    @Min(value = 1)
    private Long settlementTypeId;

    @Min(value = 1)
    private Integer custodianStatusId;

    @Min(value = 1)
    private Integer settlementStatusId;

    @Min(value = 1)
    private Integer bloquingStatusId;

    private Boolean purchasePaymentIndicator;

    private Boolean returnIndicatorSettlement;

}

```

## src/main/java/com/nubo/operations/cmd/api/models/dto/request/TradeUpdateInDto.java

```java
package com.nubo.operations.cmd.api.models.dto.request;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.OffsetDateTime;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nubo.operations.cmd.api.application.annotations.ValidBigDecimal;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class TradeUpdateInDto {

    private LocalDate matchDate;

    @Min(value = 1)
    private Long matchId;

    private LocalDate clearingDate;

    private LocalDate returnClearingDate;

    @Size(max = 2)
    private String depositoryId;

    @Min(value = 1)
    private Long countryId;

    @Min(value = 1)
    private Long typeId;

    @Size(max = 2)
    private String marketId;

    @Size(max = 2)
    private String issuanceMarketId;

    @Min(value = 1)
    private Long securityId;

    @Min(value = 1)
    private Long participantIdBuy;

    @Min(value = 1)
    private Long participantIdSell;

    private Long custodianIdBuy;

    private Long custodianIdSell;

    private Boolean assignmentMarkBuy;

    private Boolean assignmentMarkSell;

    private Boolean fractionalMarkBuy;

    private Boolean fractionalMarkSell;

    private Integer advanceStatus;

    private Boolean exitIndicatorSettlement;

    private Boolean canceledStatus;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal quantity;

    @ValidBigDecimal(precision = 16, scale = 6)
    private BigDecimal price;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal volume;

    @ValidBigDecimal(precision = 6, scale = 4)
    private BigDecimal repurchaseRate;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal repurchaseAmount;

    @Min(value = 1)
    private Integer statusId;

    private OffsetDateTime matchTime;

    private Boolean ownPositionSell;

    private Boolean ownPositionBuy;

    @Min(value = 1)
    private Long currencyId;

    @Min(value = 1)
    private Long tradingSystemId;

    @Size(max = 2)
    private String tradingSessionId;

    private LocalDate repurchaseAgreementDate;

    private Integer daysToSettlement;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal repoRate;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal repoAmount;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal fundingAmount;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal netOutFlowTotal;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal outFlowTurnOverValue;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal totalNetReturn;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal returnTurnoverValue;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal deliveryVersusPaymentValue;

    private Boolean reallocationIndicator;

    @Min(value = 1)
    private Long businessTypeId;

    @Min(value = 1)
    private Long marketTypeId;

    @Min(value = 1)
    private Long originTypeId;

    private Boolean settlementIndicatorOutgoing;

    private Boolean settlementIndicatorReturn;

    private Boolean resettlementIndicatorAdvance;

    @Min(value = 1)
    private Long specialTradeId;

    @Min(value = 1)
    private Long paymentTypeId;

    @Min(value = 1)
    private Long settlementTypeId;

    @Min(value = 1)
    private Integer custodianStatusId;

    @Min(value = 1)
    private Integer settlementStatusId;

    @Min(value = 1)
    private Integer bloquingStatusId;

    private Boolean purchasePaymentIndicator;

    private Boolean returnIndicatorSettlement;
}

```

## src/main/java/com/nubo/operations/cmd/api/models/dto/response/AssignmentClosureOutDto.java

```java

package com.nubo.operations.cmd.api.models.dto.response;

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

    private String message;
    
    private Long tradeId;

    private LocalDate matchDate;

    private Long matchId;

    private LocalDate clearingDate;

    private SideOutDto side;

    private ParticipantOutDto participant;

    private BusinessRuleCodeOutDto businessRuleCode;

}

```

## src/main/java/com/nubo/operations/cmd/api/models/dto/response/AssignmentClosureValidateOutDto.java

```java
package com.nubo.operations.cmd.api.models.dto.response;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AssignmentClosureValidateOutDto {

    private List<AssignmentClosureOutDto> successfulAssignmentClosure;

    private List<AssignmentClosureOutDto> errorAssignmentClosure;

}

```

## src/main/java/com/nubo/operations/cmd/api/models/dto/response/BatchAssignmentItemOutDto.java

```java
package com.nubo.operations.cmd.api.models.dto.response;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BatchAssignmentItemOutDto {

    private String itemId;
    private String correlationId;
    private String topic;
    private Integer partition;
    private Long offset;
    private String key;
    private Long tradeId;
    private String sideId;
    private Boolean success;
    private List<SettlementOutDto> settlements;
    private String errorCode;
    private String errorMessage;
    private BusinessRuleCodeOutDto businessRuleCode;
}

```

## src/main/java/com/nubo/operations/cmd/api/models/dto/response/BatchAssignmentOutDto.java

```java
package com.nubo.operations.cmd.api.models.dto.response;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BatchAssignmentOutDto {

    private String batchId;
    private List<BatchAssignmentItemOutDto> items;
}

```

## src/main/java/com/nubo/operations/cmd/api/models/dto/response/BatchAssignmentValidationItemOutDto.java

```java
package com.nubo.operations.cmd.api.models.dto.response;

import com.nubo.operations.cmd.api.models.dto.request.BatchAssignmentItemInDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BatchAssignmentValidationItemOutDto {
    private String itemId;
    private Boolean valid;
    private String errorCode;
    private String errorMessage;
    private BatchAssignmentItemInDto preparedItem;
}

```

## src/main/java/com/nubo/operations/cmd/api/models/dto/response/BatchAssignmentValidationOutDto.java

```java
package com.nubo.operations.cmd.api.models.dto.response;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BatchAssignmentValidationOutDto {
    private String batchId;
    private String validationToken;
    private int total;
    private int validCount;
    private int invalidCount;
    private List<BatchAssignmentValidationItemOutDto> items;
}

```

## src/main/java/com/nubo/operations/cmd/api/models/dto/response/BusinessRuleCodeOutDto.java

```java
package com.nubo.operations.cmd.api.models.dto.response;

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
public class BusinessRuleCodeOutDto {

    private String ruleCode;

    private String validationCode;

}

```

## src/main/java/com/nubo/operations/cmd/api/models/dto/response/ClassOutDto.java

```java
package com.nubo.operations.cmd.api.models.dto.response;

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

## src/main/java/com/nubo/operations/cmd/api/models/dto/response/CountryOutDto.java

```java
package com.nubo.operations.cmd.api.models.dto.response;

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

## src/main/java/com/nubo/operations/cmd/api/models/dto/response/CurrencyOutDto.java

```java
package com.nubo.operations.cmd.api.models.dto.response;

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

## src/main/java/com/nubo/operations/cmd/api/models/dto/response/DepositoryOutDto.java

```java
package com.nubo.operations.cmd.api.models.dto.response;

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

## src/main/java/com/nubo/operations/cmd/api/models/dto/response/FractionAccountOutDto.java

```java
package com.nubo.operations.cmd.api.models.dto.response;

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

    private ParticipantOutDto custodian;

    private ParticipantOutDto ficAdmin;

    private MilaDepositoryOutDto milaDirectDepositor;

}

```

## src/main/java/com/nubo/operations/cmd/api/models/dto/response/GicsOutDto.java

```java
package com.nubo.operations.cmd.api.models.dto.response;

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

## src/main/java/com/nubo/operations/cmd/api/models/dto/response/IdentificationTypeOutDto.java

```java
package com.nubo.operations.cmd.api.models.dto.response;

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

## src/main/java/com/nubo/operations/cmd/api/models/dto/response/InvestorAccountOutDto.java

```java
package com.nubo.operations.cmd.api.models.dto.response;

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

    private String accountName;

    private StatusOutDto status;

    private TypeOutDto originType;

    private TypeOutDto type;

    private DepositoryOutDto depository;

    private ParticipantOutDto participant;

    private Boolean taxExemp;

}

```

## src/main/java/com/nubo/operations/cmd/api/models/dto/response/InvestorOutDto.java

```java
package com.nubo.operations.cmd.api.models.dto.response;

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

## src/main/java/com/nubo/operations/cmd/api/models/dto/response/MarketOutDto.java

```java
package com.nubo.operations.cmd.api.models.dto.response;

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

## src/main/java/com/nubo/operations/cmd/api/models/dto/response/MilaDepositoryOutDto.java

```java
package com.nubo.operations.cmd.api.models.dto.response;

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
public class MilaDepositoryOutDto {

    private Long id;

    private String code;

    private Long identificationTypeId;

    private String documentNumber;

    private String directDepositoryNumber;
    
}

```

## src/main/java/com/nubo/operations/cmd/api/models/dto/response/PageResponseOutDto.java

```java
package com.nubo.operations.cmd.api.models.dto.response;

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
}

```

## src/main/java/com/nubo/operations/cmd/api/models/dto/response/ParticipantAccountOutDto.java

```java
package com.nubo.operations.cmd.api.models.dto.response;

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

    private ParticipantOutDto participant;

    private String accountNumber;

    private StatusOutDto status;

    private TypeOutDto type;

    private TypeOutDto originType;

    private Boolean taxExemp;

}

```

## src/main/java/com/nubo/operations/cmd/api/models/dto/response/ParticipantBankAccountOutDto.java

```java
package com.nubo.operations.cmd.api.models.dto.response;

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

## src/main/java/com/nubo/operations/cmd/api/models/dto/response/ParticipantOutDto.java

```java
package com.nubo.operations.cmd.api.models.dto.response;

import java.time.LocalDate;

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

    private String bank_account;

}

```

## src/main/java/com/nubo/operations/cmd/api/models/dto/response/SecurityTitleOutDto.java

```java
package com.nubo.operations.cmd.api.models.dto.response;

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

## src/main/java/com/nubo/operations/cmd/api/models/dto/response/SettlementOutDto.java

```java
package com.nubo.operations.cmd.api.models.dto.response;

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

    private Long tradeId;

    private Integer fraction;

    private SideOutDto side;

    private Long uniqueFractionId;

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

    private Long bankAccountId;

    private String reference;

    private BigDecimal capitalGainValue;

    private BigDecimal disbursementValue;

    private TypeOutDto sourceQuoteType;

    private Long ficAdministratorId;

    private Boolean jointAccount;

    private Boolean masterAccount;

    private BigDecimal cashAccount;

    private Boolean indMaster;

    private StatusOutDto custodianStatus;

}

```

## src/main/java/com/nubo/operations/cmd/api/models/dto/response/SideOutDto.java

```java
package com.nubo.operations.cmd.api.models.dto.response;

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

## src/main/java/com/nubo/operations/cmd/api/models/dto/response/StatusOutDto.java

```java
package com.nubo.operations.cmd.api.models.dto.response;

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

## src/main/java/com/nubo/operations/cmd/api/models/dto/response/TaxStatusOutDto.java

```java
package com.nubo.operations.cmd.api.models.dto.response;

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

## src/main/java/com/nubo/operations/cmd/api/models/dto/response/TradeEquityOutDto.java

```java
package com.nubo.operations.cmd.api.models.dto.response;

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

## src/main/java/com/nubo/operations/cmd/api/models/dto/response/TradeOutDto.java

```java
package com.nubo.operations.cmd.api.models.dto.response;

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

    private DepositoryOutDto depository;

    private CountryOutDto country;

    private TypeOutDto type;

    private MarketOutDto market;

    private MarketOutDto issuanceMarket;

    private SecurityTitleOutDto securityTitle;

    private ParticipantOutDto participantBuy;

    private ParticipantOutDto participantSell;

    private ParticipantOutDto custodianBuy;

    private ParticipantOutDto custodianSell;

    private Boolean assignmentMarkBuy;

    private Boolean assignmentMarkSell;

    private Boolean fractionalMarkBuy;

    private Boolean fractionalMarkSell;

    private Integer advanceStatus;

    private Boolean exitIndicatorSettlement;

    private Boolean canceledStatus;

    private BigDecimal quantity;

    private BigDecimal price;

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

}

```

## src/main/java/com/nubo/operations/cmd/api/models/dto/response/TradingSessionOutDto.java

```java
package com.nubo.operations.cmd.api.models.dto.response;

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

## src/main/java/com/nubo/operations/cmd/api/models/dto/response/TradingSystemOutDto.java

```java
package com.nubo.operations.cmd.api.models.dto.response;

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

## src/main/java/com/nubo/operations/cmd/api/models/dto/response/TypeOutDto.java

```java
package com.nubo.operations.cmd.api.models.dto.response;

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

## src/main/java/com/nubo/operations/cmd/api/models/entity/ClassEntity.java

```java
package com.nubo.operations.cmd.api.models.entity;

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
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/cmd/api/models/entity/CountryEntity.java

```java
package com.nubo.operations.cmd.api.models.entity;

import java.util.Objects;

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
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/cmd/api/models/entity/CurrencyEntity.java

```java
package com.nubo.operations.cmd.api.models.entity;

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
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/cmd/api/models/entity/CustodianRelationEntity.java

```java
package com.nubo.operations.cmd.api.models.entity;

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
@Table(name = "\"CUSTODIAN_RELATION\"", schema = "\"NUANBODB\"")
public class CustodianRelationEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"CUSTODIAN_RELATION_ID\"")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID\"", nullable = false)
    private ParticipantEntity participant;

    @ManyToOne
    @JoinColumn(name = "\"CUSTODIAN_ID\"", nullable = false)
    private ParticipantEntity custodian;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID\"")
    private DepositoryEntity depository;

    @ManyToOne
    @JoinColumn(name = "\"INVESTOR_ACCOUNT_ID\"")
    private InvestorAccountEntity investorAccount;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"")
    private StatusEntity status;

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

        CustodianRelationEntity that = (CustodianRelationEntity) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/operations/cmd/api/models/entity/DepositoryEntity.java

```java
package com.nubo.operations.cmd.api.models.entity;

import java.util.Objects;

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
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/cmd/api/models/entity/DirectDepositoryEntity.java

```java
package com.nubo.operations.cmd.api.models.entity;

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
@Table(name = "\"DIRECT_DEPOSITORY\"", schema = "\"NUANBODB\"")
public class DirectDepositoryEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"DIRECT_DEPOSITORY_ID\"")
    private Long id;

    @Column(name = "\"PARTICIPANT_ID\"")
    private Long participantId;

    @Column(name = "\"DEPOSITORY_ID\"", length = 2)
    private String depositoryId;

    @Column(name = "\"DIRECT_DEPOSITORY_NUMBER\"", length = 80, nullable = false)
    private String directDepositoryNumber;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        DirectDepositoryEntity that = (DirectDepositoryEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/operations/cmd/api/models/entity/FicRelationEntity.java

```java
package com.nubo.operations.cmd.api.models.entity;

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
import java.util.Objects;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@IdClass(FicRelationKey.class)
@Table(name = "\"FIC_RELATION\"", schema = "\"NUANBODB\"")
public class FicRelationEntity {

    @Id
    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID_FIC\"", nullable = false)
    private ParticipantEntity participantFic;

    @Id
    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID_CUS\"", nullable = false)
    private ParticipantEntity participantCus;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID\"", nullable = false)
    private ParticipantEntity participant;

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
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        FicRelationEntity that = (FicRelationEntity) o;
        return Objects.equals(participantFic, that.participantFic) &&
               Objects.equals(participantCus, that.participantCus);
    }

    @Override
    public int hashCode() {
        return Objects.hash(participantFic, participantCus);
    }
}

```

## src/main/java/com/nubo/operations/cmd/api/models/entity/FicRelationKey.java

```java
package com.nubo.operations.cmd.api.models.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FicRelationKey implements Serializable {

    private Long participantFic;

    private Long participantCus;
}

```

## src/main/java/com/nubo/operations/cmd/api/models/entity/GicsEntity.java

```java
package com.nubo.operations.cmd.api.models.entity;

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
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/cmd/api/models/entity/IdentificationTypeEntity.java

```java
package com.nubo.operations.cmd.api.models.entity;

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
@Table(name = "\"IDENTIFICATION_TYPE\"", schema = "\"NUANBODB\"")
public class IdentificationTypeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"IDENTIFICATION_TYPE_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"CODE\"")
    private String code;

    @Column(name = "\"DESCRIPTION\"", length = 80)
    private String description;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        IdentificationTypeEntity that = (IdentificationTypeEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/cmd/api/models/entity/InvestorAccountEntity.java

```java
package com.nubo.operations.cmd.api.models.entity;

import java.time.LocalDateTime;
import java.util.Objects;

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
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/cmd/api/models/entity/InvestorEntity.java

```java
package com.nubo.operations.cmd.api.models.entity;

import java.time.LocalDateTime;
import java.util.Objects;

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
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/cmd/api/models/entity/IssuerEntity.java

```java
package com.nubo.operations.cmd.api.models.entity;

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
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/cmd/api/models/entity/MarketEntity.java

```java
package com.nubo.operations.cmd.api.models.entity;

import java.util.Objects;

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
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/cmd/api/models/entity/MilaDepositoryEntity.java

```java
package com.nubo.operations.cmd.api.models.entity;

import java.time.OffsetDateTime;
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

## src/main/java/com/nubo/operations/cmd/api/models/entity/ParticipantAccountEntity.java

```java
package com.nubo.operations.cmd.api.models.entity;

import java.time.LocalDateTime;
import java.util.Objects;

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

    @Column(name = "\"TAX_EXEMP\"")
    private Boolean taxExemp;

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
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/cmd/api/models/entity/ParticipantBankAccountEntity.java

```java
package com.nubo.operations.cmd.api.models.entity;

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

## src/main/java/com/nubo/operations/cmd/api/models/entity/ParticipantEntity.java

```java
package com.nubo.operations.cmd.api.models.entity;

import java.time.LocalDate;
import java.util.Objects;

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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        ParticipantEntity that = (ParticipantEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/cmd/api/models/entity/SecurityTitleEntity.java

```java
package com.nubo.operations.cmd.api.models.entity;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Objects;

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

    @Column(name = "\"CFI_ID\"")
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
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/cmd/api/models/entity/SettlementCorrectionEntity.java

```java
package com.nubo.operations.cmd.api.models.entity;

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
import jakarta.persistence.JoinColumns;
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
@Table(name = "\"SETTLEMENT_CORRECTIONS\"", schema = "\"NUANBODB\"")
public class SettlementCorrectionEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"SETTLEMENT_CORRECTIONS_ID\"", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumns({
            @JoinColumn(name = "\"TRADE_ID\"", referencedColumnName = "\"TRADE_ID\"", insertable = false, updatable = false),
            @JoinColumn(name = "\"FRACTION\"", referencedColumnName = "\"FRACTION\"", insertable = false, updatable = false),
            @JoinColumn(name = "\"SIDE_ID\"", referencedColumnName = "\"SIDE_ID\"", insertable = false, updatable = false)
    })
    private SettlementEntity settlement;

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
    @JoinColumn(name = "\"INVESTOR_ACCOUNT_ID\"")
    private InvestorAccountEntity investorAccount;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ACCOUNT_ID\"")
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

    @Column(name = "\"COMMISSION_PERCENTAGE\"", precision = 10, scale = 4)
    private BigDecimal commissionPercentage;

    @Column(name = "\"REFERENCE\"", length = 255)
    private String reference;

    @Column(name = "\"FRACTION_QUANTITY\"", precision = 16, scale = 4)
    private BigDecimal fractionQuantity;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @ManyToOne
    @JoinColumn(name = "\"SOURCE_QUOTE_TYPE_ID\"")
    private TypeEntity sourceQuoteType;

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

## src/main/java/com/nubo/operations/cmd/api/models/entity/SettlementEntity.java

```java
package com.nubo.operations.cmd.api.models.entity;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Objects;

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
@Builder(toBuilder = true)
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

    @Column(name = "\"UNIQUE_FRACTION_ID\"", nullable = false)
    private Long uniqueFractionId;

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

    @ManyToOne
    @JoinColumn(name = "\"FIC_ADMINISTRATOR_ID\"")
    private ParticipantEntity ficAdministrator;

    @Column(name = "\"CASH_ACCOUNT\"", precision = 20, scale = 0)
    private BigDecimal cashAccount;

    @Column(name = "\"IND_MASTER\"")
    private Boolean indMaster;

    @ManyToOne
    @JoinColumn(name = "\"CUSTODIAN_STATUS_ID\"")
    private StatusEntity custodianStatus;

    @ManyToOne
    @JoinColumn(name = "\"DIRECT_DEPOSITOR\"")
    private DirectDepositoryEntity directDepositor;

    @ManyToOne
    @JoinColumn(name = "\"MILA_DIRECT_DEPOSITOR\"")
    private MilaDepositoryEntity milaDirectDepositor;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_BANK_ACCOUNT_ID\"")
    private ParticipantBankAccountEntity participantBankAccount;

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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        SettlementEntity that = (SettlementEntity) o;
        return Objects.equals(trade, that.trade) &&
                Objects.equals(fraction, that.fraction) &&
                Objects.equals(side, that.side);
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

## src/main/java/com/nubo/operations/cmd/api/models/entity/SettlementKey.java

```java
package com.nubo.operations.cmd.api.models.entity;

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

## src/main/java/com/nubo/operations/cmd/api/models/entity/SideEntity.java

```java
package com.nubo.operations.cmd.api.models.entity;
import java.util.Objects;

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
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/cmd/api/models/entity/StatusEntity.java

```java
package com.nubo.operations.cmd.api.models.entity;
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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        StatusEntity that = (StatusEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/cmd/api/models/entity/TaxStatusEntity.java

```java
package com.nubo.operations.cmd.api.models.entity;

import java.time.LocalDateTime;
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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        TaxStatusEntity that = (TaxStatusEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/cmd/api/models/entity/TaxesEntity.java

```java
package com.nubo.operations.cmd.api.models.entity;

import java.math.BigDecimal;
import java.util.Objects;

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
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/cmd/api/models/entity/TradeEntity.java

```java
package com.nubo.operations.cmd.api.models.entity;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
import lombok.ToString;

@Getter
@Setter
@ToString
@Builder(toBuilder = true)
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
    @JoinColumn(name = "\"COUNTRY_ID\"")
    private CountryEntity country;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"")
    private TypeEntity type;

    @ManyToOne
    @JoinColumn(name = "\"MARKET_ID\"")
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

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @Column(name = "\"MATCH_TIME\"", nullable = false)
    private OffsetDateTime matchTime;

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

    @ManyToOne
    @JoinColumn(name = "\"SELL_STATUS_ID\"")
    private StatusEntity sellStatus;

    @ManyToOne
    @JoinColumn(name = "\"BUY_STATUS_ID\"")
    private StatusEntity buyStatus;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID_BUY\"", nullable = true)
    private DepositoryEntity depositoryBuy;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID_SELL\"", nullable = true)
    private DepositoryEntity depositorySell;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

    @OneToOne(mappedBy = "trade")
    private TradeEquityEntity tradeEquity;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        TradeEntity that = (TradeEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/cmd/api/models/entity/TradeEquityEntity.java

```java
package com.nubo.operations.cmd.api.models.entity;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
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

    @ManyToOne
    @MapsId
    @JoinColumn(name = "\"TRADE_ID\"")
    private TradeEntity trade;

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
        return Objects.equals(tradeId, that.tradeId);
    }

    @Override
    public int hashCode() {
        return tradeId != null ? tradeId.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/cmd/api/models/entity/TradeStatusHistoryEntity.java

```java
package com.nubo.operations.cmd.api.models.entity;

import java.time.LocalDateTime;
import java.util.Objects;

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
@IdClass(TradeStatusHistoryKey.class)
@Table(name = "\"TRADE_STATUS_HISTORY\"", schema = "\"NUANBODB\"")
public class TradeStatusHistoryEntity {

    @Id
    @ManyToOne
    @JoinColumn(name = "\"TRADE_ID\"", nullable = false)
    private TradeEntity trade;

    @Id
    @Column(name = "\"TIME\"", nullable = false)
    private LocalDateTime time;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @Column(name = "\"DETAIL\"", length = 255)
    private String detail;

    @Column(name = "\"SIDE_ID\"")
    private String sideId;

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
        TradeStatusHistoryEntity that = (TradeStatusHistoryEntity) o;
        return Objects.equals(trade, that.trade) && Objects.equals(time, that.time);
    }

    @Override
    public int hashCode() {
        int result = trade != null ? trade.hashCode() : 0;
        result = 31 * result + (time != null ? time.hashCode() : 0);
        return result;
    }
}

```

## src/main/java/com/nubo/operations/cmd/api/models/entity/TradeStatusHistoryKey.java

```java
package com.nubo.operations.cmd.api.models.entity;

import java.io.Serializable;
import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TradeStatusHistoryKey implements Serializable {

    private Long trade;

    private LocalDateTime time;

}

```

## src/main/java/com/nubo/operations/cmd/api/models/entity/TradingSessionEntity.java

```java
package com.nubo.operations.cmd.api.models.entity;

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
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/cmd/api/models/entity/TradingSystemEntity.java

```java
package com.nubo.operations.cmd.api.models.entity;

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
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/cmd/api/models/entity/TypeEntity.java

```java
package com.nubo.operations.cmd.api.models.entity;

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
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/cmd/api/models/entity/TypeMappingEntity.java

```java
package com.nubo.operations.cmd.api.models.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "\"TYPE_MAPPING\"", schema = "\"NUANBODB\"")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class TypeMappingEntity {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"TYPE_MAPPING_ID\"") private Long id;
    @Column(name = "\"EXTERNAL_SYSTEM\"") private String externalSystem;
    @Column(name = "\"EXTERNAL_DESCRIPTION\"") private String externalDescription;
    @ManyToOne @JoinColumn(name = "\"TYPE_ID\"") private TypeEntity type;
}

```

## src/main/java/com/nubo/operations/cmd/api/models/entity/UserNuboEntity.java

```java
package com.nubo.operations.cmd.api.models.entity;

import java.time.LocalDateTime;
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

    @Column(name = "\"PARTICIPANT_ID\"", nullable = false)
    private Long participantId;

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
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/cmd/api/models/enums/BusinessRuleEnum.java

```java
package com.nubo.operations.cmd.api.models.enums;

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
    RULE_OPERATION_CORRECTION_BY_SIDE("RULE_OPERATION_CORRECTION_BY_SIDE"),
    RULE_OPERATION_CORRECTION_ALLOWED_DAYS("RULE_OPERATION_CORRECTION_ALLOWED_DAYS"),
    RULE_OPERATION_CORRECTION_CUSTODIAN("RULE_OPERATION_CORRECTION_CUSTODIAN"),
    RULE_OPERATION_CORRECTION_SPECIAL_FIDUCIARY("RULE_OPERATION_CORRECTION_SPECIAL_FIDUCIARY"),
    RULE_OPERATION_CORRECTION_MAXIMUM_FRACTION_LIMIT("RULE_OPERATION_CORRECTION_MAXIMUM_FRACTION_LIMIT"),
    RULE_OPERATION_ASSIGNMENT_MAXIMUM_FRACTION_LIMIT("RULE_OPERATION_ASSIGNMENT_MAXIMUM_FRACTION_LIMIT"),
    RULE_ASSIGNMENT("RULE_ASSIGNMENT"),
    RULE_REASSIGNMENT_BY_FRACTION_CUSTODIAN("RULE_REASSIGNMENT_BY_FRACTION_CUSTODIAN"),
    RULE_FINAL_ASSIGNMENT("RULE_FINAL_ASSIGNMENT");

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

## src/main/java/com/nubo/operations/cmd/api/models/enums/CorrectionStatusEnum.java

```java
package com.nubo.operations.cmd.api.models.enums;

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

## src/main/java/com/nubo/operations/cmd/api/models/enums/CorrectionTypeEnum.java

```java
package com.nubo.operations.cmd.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum CorrectionTypeEnum {

    LOCAL(44L, "LOCAL", "Corrección Local"),
    EXTERNAL(45L, "EXTRANJERO", "Corrección Externa");

    private final Long id;
    private final String value;
    private final String description;

    public static CorrectionTypeEnum fromValue(String value) {
        for (CorrectionTypeEnum type : CorrectionTypeEnum.values()) {
            if (type.getValue().equalsIgnoreCase(value)) {
                return type;
            }
        }
        throw new IllegalArgumentException("Unknown correction type: " + value);
    }
}

```

## src/main/java/com/nubo/operations/cmd/api/models/enums/CountryEnum.java

```java
package com.nubo.operations.cmd.api.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;
import java.util.Objects;

@Getter
@RequiredArgsConstructor
public enum CountryEnum {

    COLOMBIA(37L),
    CHILE(35L),
    PERU(135L);

    private final Long id;

    @JsonValue
    public Long getId() {
        return id;
    }

    @JsonCreator
    public static CountryEnum fromId(Long id) {
        return Arrays.stream(CountryEnum.values())
                .filter(side -> Objects.equals(side.id, id))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Side not implemented: " + id));
    }
}

```

## src/main/java/com/nubo/operations/cmd/api/models/enums/DirectAllocationEnum.java

```java
package com.nubo.operations.cmd.api.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;
import java.util.Objects;

@Getter
@RequiredArgsConstructor
public enum DirectAllocationEnum {

    TRUE("S"),
    FALSE("N");

    private final String id;

    @JsonValue
    public String getId() {
        return id;
    }

    @JsonCreator
    public static DirectAllocationEnum fromId(String id) {
        return Arrays.stream(DirectAllocationEnum.values())
                .filter(side -> Objects.equals(side.id, id))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Side not implemented: " + id));
    }
}

```

## src/main/java/com/nubo/operations/cmd/api/models/enums/PropertiesEnum.java

```java
package com.nubo.operations.cmd.api.models.enums;

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
    CLIENT_USER_ENTITY("client_user_entity"),
    CLIENT_BACKEND("client_backend");

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

## src/main/java/com/nubo/operations/cmd/api/models/enums/ReassignmentTypeEnum.java

```java
package com.nubo.operations.cmd.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ReassignmentTypeEnum {

    INICIAL(2130L, "INICIAL"),
    ACTUAL(2131L, "ACTUAL");

    private final Long id;
    private final String description;

    public static ReassignmentTypeEnum fromId(Long id) {
        for (ReassignmentTypeEnum type : values()) {
            if (type.getId().equals(id)) {
                return type;
            }
        }
        throw new IllegalArgumentException("Unknown ReassignmentTypeEnum id: " + id);
    }
}

```

## src/main/java/com/nubo/operations/cmd/api/models/enums/SideEnum.java

```java
package com.nubo.operations.cmd.api.models.enums;

import java.util.Arrays;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum SideEnum {

    BUY("1", "COMPRA"),
    SELL("2", "VENTA");

    private final String id;
    private final String description;

    @JsonValue
    public String getId() {
        return id;
    }

    @JsonCreator
    public static SideEnum fromId(String id) {
        return Arrays.stream(SideEnum.values())
                .filter(side -> Objects.equals(side.id, id))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Side not implemented: " + id));
    }
}

```

## src/main/java/com/nubo/operations/cmd/api/models/enums/StatusEnum.java

```java
package com.nubo.operations.cmd.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum StatusEnum {

    PARTICIPANT_ACTIVE(510L, "ACTIVO"),
    PARTICIPANT_INACTIVE(511L, "INACTIVO"),
    PARTICIPANT_ACCOUNT_ACTIVE(580L, "ACTIVO"),
    PARTICIPANT_ACCOUNT_INACTIVE(581L, "INACTIVO"),
    INVESTOR_ACTIVE(515L, "ACTIVO"),
    INVESTOR_INACTIVE(516L, "INACTIVO"),
    INVESTOR_ACCOUNT_ACTIVE(570L, "ACTIVO"),
    INVESTOR_ACCOUNT_INACTIVE(571L, "INACTIVO"),
    REASSIGNMENT_CORRECTION_REQUESTED(7L, "SOLICITADA"),
    REASSIGNMENT_CORRECTION_ACCEPTED(9L, "ACEPTADA"),
    REASSIGNMENT_CORRECTION_REJECTED(10L, "RECHAZADA"),
    ASSIGNMENT_ACCEPTED(15L, "ACEPTADA"),
    CUSTODIAN_RELATION_ACTIVE(1163L, "ACTIVO"),
    CUSTODIAN_RELATION_INACTIVE(1164L, "INACTIVO");

    private final long id;
    private final String description;

}

```

## src/main/java/com/nubo/operations/cmd/api/models/enums/TaxesEnum.java

```java
package com.nubo.operations.cmd.api.models.enums;

import java.util.Arrays;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

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

## src/main/java/com/nubo/operations/cmd/api/models/enums/TypeEnum.java

```java
package com.nubo.operations.cmd.api.models.enums;

import java.util.Arrays;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum TypeEnum {

    JOINT_ACCOUNT(22L, "CUENTA AHORROS", "CUENTA"),
    MASTER_ACCOUNT(24L, "CUENTAS MASTER", "CUENTA"),
    COUNTED_OPERATION(60L, "CONTADO","OPERACIÓN"),
    REPO_OPERATION(61L, "REPO", "OPERACIÓN"),
    THIRD_PARTIES_POINT_ORIGIN(120L, "TERCEROS", "ORIGEN PUNTA"),
    OWN_POSITION_POINT_ORIGIN(121L, "POSICION PROPIA", "ORIGEN PUNTA"),
    COLLECTIVE_PORTFOLIO_POINT_ORIGIN(122L, "CARTERA COLECTIVA", "ORIGEN PUNTA"),
    ACCOUNT_CUD(25L, "CUENTA CUD", "CUENTA CUD"),
    COMPENSATION(134L, "COMPENSACION", "CONCEPTO_CUENTA");

    private final long id;
    private final String description;
    private final String category;

    @JsonValue
    public Long getId() {
        return id;
    }

    @JsonCreator
    public static TypeEnum fromId(Long id) {
        return Arrays.stream(TypeEnum.values())
                .filter(status -> Objects.equals(status.id, id))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("TypeEnum Unknown id: " + id));
    }

}

```

## src/main/java/com/nubo/operations/cmd/api/models/enums/TypeMappingEnum.java

```java
package com.nubo.operations.cmd.api.models.enums;


import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;
import java.util.Objects;

@Getter
@RequiredArgsConstructor
public enum TypeMappingEnum {

    //External_System
    REFERENCE_DATA("REFERENCE_DATA"),

    //CATEGORY
    CUSTODIO("Custodio"),
    ADMIN_FIC("Administradora General de Fondos");

    private final String value;

    @JsonValue
    public String getValue() {
        return value;
    }

    @JsonCreator
    public static TypeMappingEnum fromValue(String value) {
        return Arrays.stream(TypeMappingEnum.values())
                .filter(type -> Objects.equals(type.value, value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Type Option is not implemented: " + value));
    }
}

```

## src/main/java/com/nubo/operations/cmd/api/models/enums/VersionApiEnum.java

```java
package com.nubo.operations.cmd.api.models.enums;

import java.util.Arrays;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
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

## src/main/java/com/nubo/operations/cmd/api/repository/CountryRepository.java

```java
package com.nubo.operations.cmd.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.operations.cmd.api.models.entity.CountryEntity;

public interface CountryRepository extends JpaRepository<CountryEntity, Long> {
}

```

## src/main/java/com/nubo/operations/cmd/api/repository/CurrencyRepository.java

```java
package com.nubo.operations.cmd.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.operations.cmd.api.models.entity.CurrencyEntity;

public interface CurrencyRepository extends JpaRepository<CurrencyEntity, Long> {
}

```

## src/main/java/com/nubo/operations/cmd/api/repository/CustodianRelationRepository.java

```java
package com.nubo.operations.cmd.api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.nubo.operations.cmd.api.models.entity.CustodianRelationEntity;

public interface CustodianRelationRepository extends JpaRepository<CustodianRelationEntity, Long> {

    @Query("""
            SELECT cr FROM CustodianRelationEntity cr
            WHERE cr.depository.id = :depositoryId
                AND cr.investorAccount.id = :investorAccountId
                AND cr.status.id = :statusId
                """)
    Optional<CustodianRelationEntity> findBySearch(
            String depositoryId, Long investorAccountId, Long statusId);

}

```

## src/main/java/com/nubo/operations/cmd/api/repository/DepositoryRepository.java

```java
package com.nubo.operations.cmd.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.operations.cmd.api.models.entity.DepositoryEntity;

public interface DepositoryRepository extends JpaRepository<DepositoryEntity, String> {
}

```

## src/main/java/com/nubo/operations/cmd/api/repository/DirectDepositoryRepository.java

```java
package com.nubo.operations.cmd.api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.operations.cmd.api.models.entity.DirectDepositoryEntity;

public interface DirectDepositoryRepository extends JpaRepository<DirectDepositoryEntity, Long> {

    Optional<DirectDepositoryEntity> findFirstByParticipantId(Long participantId);

}

```

## src/main/java/com/nubo/operations/cmd/api/repository/FicRelationRepository.java

```java
package com.nubo.operations.cmd.api.repository;

import com.nubo.operations.cmd.api.models.entity.FicRelationEntity;
import com.nubo.operations.cmd.api.models.entity.FicRelationKey;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FicRelationRepository extends JpaRepository<FicRelationEntity, FicRelationKey> {

    Optional<FicRelationEntity> findByParticipantCusIdAndParticipantId(Long participantCusId, Long participantId);
}

```

## src/main/java/com/nubo/operations/cmd/api/repository/InvestorAccountRepository.java

```java
package com.nubo.operations.cmd.api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.operations.cmd.api.models.entity.InvestorAccountEntity;

public interface InvestorAccountRepository extends JpaRepository<InvestorAccountEntity, Long> {

    Optional<InvestorAccountEntity> findByAccountNumber(String accountNumber);

    Optional<InvestorAccountEntity> findFirstByAccountNumberAndInvestorDocumentNumberAndOriginTypeIdAndDepositoryIdOrderByIdAsc(
            String accountNumber,
            String documentNumber,
            Long originTypeId,
            String depositoryId);

    Optional<InvestorAccountEntity> findFirstByAccountNumberAndInvestorDocumentNumberNotAndDepositoryIdAndOriginTypeIdNot(
            String accountNumber,
            String documentNumber,
            String depositoryId,
            Long originTypeId);

}

```

## src/main/java/com/nubo/operations/cmd/api/repository/InvestorRepository.java

```java
package com.nubo.operations.cmd.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.operations.cmd.api.models.entity.InvestorEntity;

public interface InvestorRepository extends JpaRepository<InvestorEntity, Long> {
}

```

## src/main/java/com/nubo/operations/cmd/api/repository/MarketRepository.java

```java
package com.nubo.operations.cmd.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.operations.cmd.api.models.entity.MarketEntity;

public interface MarketRepository extends JpaRepository<MarketEntity, String> {
}

```

## src/main/java/com/nubo/operations/cmd/api/repository/MilaDepositoryRepository.java

```java
package com.nubo.operations.cmd.api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.operations.cmd.api.models.entity.MilaDepositoryEntity;

public interface MilaDepositoryRepository extends JpaRepository<MilaDepositoryEntity, Long> {

    Optional<MilaDepositoryEntity> findFirstByIdentificationTypeIdAndDocumentNumber(
            Long identificationTypeId,
            String documentNumber
    );
}

```

## src/main/java/com/nubo/operations/cmd/api/repository/ParticipantAccountRepository.java

```java
package com.nubo.operations.cmd.api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.operations.cmd.api.models.entity.DepositoryEntity;
import com.nubo.operations.cmd.api.models.entity.ParticipantAccountEntity;
import com.nubo.operations.cmd.api.models.entity.ParticipantEntity;
import com.nubo.operations.cmd.api.models.entity.TypeEntity;

public interface ParticipantAccountRepository extends JpaRepository<ParticipantAccountEntity, Long> {

    Optional<ParticipantAccountEntity> findByAccountNumber(String accountNumber);

    Optional<ParticipantAccountEntity> findFirstByAccountNumberAndParticipantAndOriginTypeAndDepository(String accountNumber, ParticipantEntity participant, TypeEntity originType, DepositoryEntity depositoryEntity);

    Optional<ParticipantAccountEntity> findFirstByAccountNumberAndParticipant_IdAndOriginType_IdAndDepository_Id(
            String accountNumber,
            Long participantId,
            Long originTypeId,
            String depositoryId);

    Optional<ParticipantAccountEntity> findFirstByAccountNumberAndDepositoryAndOriginTypeIdNot(
            String accountNumber,
            DepositoryEntity depositoryEntity,
            Long originTypeId
    );

    Optional<ParticipantAccountEntity> findFirstByAccountNumberAndDepository_IdAndOriginType_IdNot(
            String accountNumber,
            String depositoryId,
            Long originTypeId);



}

```

## src/main/java/com/nubo/operations/cmd/api/repository/ParticipantBankAccountRepository.java

```java
package com.nubo.operations.cmd.api.repository;

import java.util.Collection;
import java.util.List;
import com.nubo.operations.cmd.api.models.entity.ParticipantBankAccountEntity;
import com.nubo.operations.cmd.api.models.entity.TypeEntity;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ParticipantBankAccountRepository extends JpaRepository<ParticipantBankAccountEntity, Long> {

    Optional<ParticipantBankAccountEntity> findFirstByParticipantIdAndOriginTypeAndConceptTypeOrderByIdAsc(Long participantId, TypeEntity originType, TypeEntity conceptType);

    List<ParticipantBankAccountEntity> findAllByParticipantIdInAndOriginTypeAndConceptTypeOrderByIdAsc(
            Collection<Long> participantIds,
            TypeEntity originType,
            TypeEntity conceptType);
}

```

## src/main/java/com/nubo/operations/cmd/api/repository/ParticipantRepository.java

```java
package com.nubo.operations.cmd.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Collection;
import java.util.List;

import com.nubo.operations.cmd.api.models.entity.ParticipantEntity;

public interface ParticipantRepository extends JpaRepository<ParticipantEntity, Long> {

    @Query("SELECT p FROM ParticipantEntity p WHERE LOWER(p.code) IN :codes")
    List<ParticipantEntity> findAllByCodeIgnoreCaseIn(@Param("codes") Collection<String> codes);
}

```

## src/main/java/com/nubo/operations/cmd/api/repository/SecurityTitleRepository.java

```java
package com.nubo.operations.cmd.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.operations.cmd.api.models.entity.SecurityTitleEntity;

public interface SecurityTitleRepository extends JpaRepository<SecurityTitleEntity, Long> {
}

```

## src/main/java/com/nubo/operations/cmd/api/repository/SettlementCorrectionRepository.java

```java
package com.nubo.operations.cmd.api.repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.nubo.operations.cmd.api.models.entity.SettlementCorrectionEntity;

public interface SettlementCorrectionRepository extends JpaRepository<SettlementCorrectionEntity, Long> {

    @Query("""
            SELECT sc FROM SettlementCorrectionEntity sc
            WHERE sc.trade.id = :tradeId AND sc.side.id = :sideId
            ORDER BY sc.requestDate DESC, sc.requestTime DESC
            """)
    List<SettlementCorrectionEntity> findByTradeIdAndSideIdOrderByRequestDateDesc(
            @Param("tradeId") Long tradeId,
            @Param("sideId") String sideId);

    @Query("""
            SELECT sc FROM SettlementCorrectionEntity sc
            WHERE sc.trade.id = :tradeId AND sc.side.id = :sideId
                AND sc.fraction = :fraction
            ORDER BY sc.requestDate DESC, sc.requestTime DESC
            """)
    List<SettlementCorrectionEntity> findByTradeIdAndSideIdAndFractionOrderByRequestDateDesc(
            @Param("tradeId") Long tradeId,
            @Param("sideId") String sideId,
            @Param("fraction") Integer fraction);

    @Query("""
            SELECT sc FROM SettlementCorrectionEntity sc
            WHERE sc.correctionNumber = :correctionNumber
            """)
    List<SettlementCorrectionEntity> findByCorrectionNumber(
            @Param("correctionNumber") String correctionNumber);

    @Query("""
            SELECT sc FROM SettlementCorrectionEntity sc
            WHERE sc.trade.id = :tradeId AND sc.side.id = :sideId
            AND sc.reassignmentType.id = :reassignmentTypeId
            """)
    List<SettlementCorrectionEntity> findByTradeIdAndSideIdAndReassignmentTypeId(
            @Param("tradeId") Long tradeId,
            @Param("sideId") String sideId,
            @Param("reassignmentTypeId") Long reassignmentTypeId);

    /**
     * Obtiene la última corrección para una fracción específica.
     */
    @Query("""
            SELECT sc FROM SettlementCorrectionEntity sc
            WHERE sc.trade.id = :tradeId
                    AND sc.side.id = :sideId
                    AND sc.fraction = :fraction
            ORDER BY sc.id DESC
            """)
    Optional<SettlementCorrectionEntity> findTopByTradeIdAndSideIdAndFractionOrderByIdDesc(
            @Param("tradeId") Long tradeId,
            @Param("sideId") String sideId,
            @Param("fraction") Integer fraction);

    /**
     * Cuenta el número de correcciones previas para una fracción específica.
     * Usado para determinar si la corrección extranjera debe tener cobro.
     * (Primera sin cobro, a partir de la segunda sí)
     */
    @Query("""
            SELECT COUNT(DISTINCT sc.correctionNumber) FROM SettlementCorrectionEntity sc
            WHERE sc.trade.id = :tradeId AND sc.side.id = :sideId AND sc.fraction = :fraction
            """)
    long countByTradeIdAndSideIdAndFraction(
            @Param("tradeId") Long tradeId,
            @Param("sideId") String sideId,
            @Param("fraction") Integer fraction);

    /**
     * Cuenta el número total de correcciones (registros ACTUAL) creadas en una
     * fecha específica.
     * Usado para generar el consecutivo diario del campo reference.
     */
    @Query("""
            SELECT COUNT(sc) FROM SettlementCorrectionEntity sc
            WHERE sc.requestDate = :requestDate AND sc.reassignmentType.id = :reassignmentTypeId
            """)
    long countByRequestDateAndReassignmentTypeId(
            @Param("requestDate") LocalDate requestDate,
            @Param("reassignmentTypeId") Long reassignmentTypeId);

}

```

## src/main/java/com/nubo/operations/cmd/api/repository/SettlementRepository.java

```java
package com.nubo.operations.cmd.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.nubo.operations.cmd.api.models.entity.SettlementEntity;
import com.nubo.operations.cmd.api.models.entity.SettlementKey;

import jakarta.persistence.LockModeType;

public interface SettlementRepository extends JpaRepository<SettlementEntity, SettlementKey>,
        JpaSpecificationExecutor<SettlementEntity> {

    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @Query("SELECT s FROM SettlementEntity s WHERE s.trade.id = :tradeId AND s.side.id = :sideId")
    List<SettlementEntity> findByTradeIdAndSideIdWithLock(
            @Param("tradeId") Long tradeId,
            @Param("sideId") String sideId);

    @EntityGraph(attributePaths = {
            "investorAccount",
            "participantAccount",
            "custodian",
            "ficAdministrator",
            "directDepositor",
            "milaDirectDepositor",
            "sourceQuoteType"
    })
    List<SettlementEntity> findAllByTradeId(Long tradeId);

    @EntityGraph(attributePaths = {
            "investorAccount",
            "participantAccount",
            "custodian",
            "ficAdministrator",
            "directDepositor",
            "milaDirectDepositor",
            "sourceQuoteType"
    })
    List<SettlementEntity> findByTrade_IdAndSide_Id(Long tradeId, String sideId);

    @EntityGraph(attributePaths = {
            "investorAccount",
            "participantAccount",
            "custodian",
            "ficAdministrator",
            "custodianStatus"
    })
    List<SettlementEntity> findByTrade_IdInAndSide_Id(
            List<Long> tradeIds,
            String sideId);

}

```

## src/main/java/com/nubo/operations/cmd/api/repository/SideRepository.java

```java
package com.nubo.operations.cmd.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.operations.cmd.api.models.entity.SideEntity;

public interface SideRepository extends JpaRepository<SideEntity, String> {
}

```

## src/main/java/com/nubo/operations/cmd/api/repository/StatusRepository.java

```java
package com.nubo.operations.cmd.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.operations.cmd.api.models.entity.StatusEntity;

public interface StatusRepository extends JpaRepository<StatusEntity, Long> {
}

```

## src/main/java/com/nubo/operations/cmd/api/repository/TaxesRepository.java

```java
package com.nubo.operations.cmd.api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.nubo.operations.cmd.api.models.entity.TaxesEntity;

public interface TaxesRepository extends JpaRepository<TaxesEntity, Long> {

    @Query("SELECT t FROM TaxesEntity t JOIN t.country c " +
            "WHERE c.id = :countryId AND t.code = :code")
    Optional<TaxesEntity> findByCountryIdAndCode(Long countryId, String code);

}

```

## src/main/java/com/nubo/operations/cmd/api/repository/TradeEquityRepository.java

```java
package com.nubo.operations.cmd.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.operations.cmd.api.models.entity.TradeEquityEntity;

public interface TradeEquityRepository extends JpaRepository<TradeEquityEntity, Long> {

}

```

## src/main/java/com/nubo/operations/cmd/api/repository/TradeRepository.java

```java
package com.nubo.operations.cmd.api.repository;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.nubo.operations.cmd.api.models.entity.TradeEntity;
import com.nubo.operations.cmd.api.repository.projection.AssignmentTradeView;
import com.nubo.operations.cmd.api.repository.projection.TradeFractionView;

public interface TradeRepository extends JpaRepository<TradeEntity, Long>, JpaSpecificationExecutor<TradeEntity> {

    @EntityGraph(attributePaths = {"depository", "participantBuy", "participantSell", "sourceQuoteBuyType",
            "sourceQuoteSellType", "type", "country"})
    @Query("SELECT t FROM TradeEntity t WHERE t.matchId IN :matchIds")
    List<TradeEntity> findAllByMatchIdInWithAssignmentRelations(@Param("matchIds") Collection<Long> matchIds);

    /**
     * Batch-only scalar projection. Returning no entity prevents Hibernate
     * from resolving TradeEntity.tradeEquity, an eager inverse one-to-one.
     */
    @Query("""
            SELECT
                t.id AS id,
                t.matchId AS matchId,
                t.matchDate AS matchDate,
                t.quantity AS quantity,
                type.id AS typeId,
                country.id AS countryId,
                participantBuy.id AS participantBuyId,
                participantBuy.documentNumber AS participantBuyDocumentNumber,
                participantBuyCountry.id AS participantBuyCountryId,
                participantBuy.directAllocation AS participantBuyDirectAllocation,
                participantSell.id AS participantSellId,
                participantSell.documentNumber AS participantSellDocumentNumber,
                participantSellCountry.id AS participantSellCountryId,
                participantSell.directAllocation AS participantSellDirectAllocation,
                depositoryBuy.id AS depositoryBuyId,
                depositorySell.id AS depositorySellId,
                sourceQuoteBuyType.id AS sourceQuoteBuyTypeId,
                sourceQuoteSellType.id AS sourceQuoteSellTypeId,
                securityTitle.countryId AS securityTitleCountryId
            FROM TradeEntity t
            LEFT JOIN t.type type
            LEFT JOIN t.country country
            LEFT JOIN t.participantBuy participantBuy
            LEFT JOIN participantBuy.country participantBuyCountry
            LEFT JOIN t.participantSell participantSell
            LEFT JOIN participantSell.country participantSellCountry
            LEFT JOIN t.depositoryBuy depositoryBuy
            LEFT JOIN t.depositorySell depositorySell
            LEFT JOIN t.sourceQuoteBuyType sourceQuoteBuyType
            LEFT JOIN t.sourceQuoteSellType sourceQuoteSellType
            LEFT JOIN t.securityTitle securityTitle
            WHERE t.matchId IN :matchIds
            """)
    List<AssignmentTradeView> findAssignmentTradesByMatchIdIn(
            @Param("matchIds") Collection<Long> matchIds);

    @Query("""
            SELECT
                    t.id as id,
                    t.quantity as quantity,
                    t.type.id as typeId,
                    t.country.id as countryId,
                    t.participantBuy.id as participantBuyId,
                    t.participantSell.id as participantSellId,
                    t.depositoryBuy.id as depositoryBuyId,
                    t.depositorySell.id as depositorySellId,
                    t.sourceQuoteBuyType.id as sourceQuoteBuyTypeId,
                    t.sourceQuoteSellType.id as sourceQuoteSellTypeId
            FROM TradeEntity t
            WHERE t.id = :tradeId
            """)
    Optional<TradeFractionView> findFractionViewById(@Param("tradeId") Long tradeId);

    @EntityGraph(attributePaths = {
            "tradeEquity",
            "country",
            "securityTitle",
            "depositoryBuy",
            "depositorySell",
            "type",
            "participantBuy",
            "participantSell"
    })
    @Query("SELECT t FROM TradeEntity t WHERE t.id = :id")
    Optional<TradeEntity> findByIdWithRelations(@Param("id") Long id);

    @Modifying
    @Transactional
    @Query("""
            UPDATE TradeEntity t
            SET t.buyStatus.id = :newStatusId,
                t.finalAssignmentMarkBuy = :finalAssignmentMark,
                t.lastModifyUser = :lastModifyUser,
                t.lastModifyApplication = :lastModifyApplication,
                t.lastModifyDate = :lastModifyDate
            WHERE t.id = :tradeId
            """)
    int updateBuyStatusIdAndFinalAssignmentMark(
            @Param("tradeId") Long tradeId,
            @Param("newStatusId") Long newStatusId,
            @Param("finalAssignmentMark") Boolean finalAssignmentMark,
            @Param("lastModifyUser") String lastModifyUser,
            @Param("lastModifyApplication") String lastModifyApplication,
            @Param("lastModifyDate") LocalDateTime lastModifyDate);

    @Modifying
    @Transactional
    @Query("""
            UPDATE TradeEntity t
            SET t.sellStatus.id = :newStatusId,
                t.finalAssignmentMarkSell = :finalAssignmentMark,
                t.lastModifyUser = :lastModifyUser,
                t.lastModifyApplication = :lastModifyApplication,
                t.lastModifyDate = :lastModifyDate
            WHERE t.id = :tradeId
            """)
    int updateSellStatusIdAndFinalAssignmentMark(
            @Param("tradeId") Long tradeId,
            @Param("newStatusId") Long newStatusId,
            @Param("finalAssignmentMark") Boolean finalAssignmentMark,
            @Param("lastModifyUser") String lastModifyUser,
            @Param("lastModifyApplication") String lastModifyApplication,
            @Param("lastModifyDate") LocalDateTime lastModifyDate);
}

```

## src/main/java/com/nubo/operations/cmd/api/repository/TradeStatusHistoryRepository.java

```java
package com.nubo.operations.cmd.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.operations.cmd.api.models.entity.TradeStatusHistoryEntity;
import com.nubo.operations.cmd.api.models.entity.TradeStatusHistoryKey;

public interface TradeStatusHistoryRepository extends JpaRepository<TradeStatusHistoryEntity, TradeStatusHistoryKey> {

}

```

## src/main/java/com/nubo/operations/cmd/api/repository/TradingSessionRepository.java

```java
package com.nubo.operations.cmd.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.operations.cmd.api.models.entity.TradingSessionEntity;

public interface TradingSessionRepository extends JpaRepository<TradingSessionEntity, String> {
}

```

## src/main/java/com/nubo/operations/cmd/api/repository/TradingSystemRepository.java

```java
package com.nubo.operations.cmd.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.operations.cmd.api.models.entity.TradingSystemEntity;

public interface TradingSystemRepository extends JpaRepository<TradingSystemEntity, Long> {
}

```

## src/main/java/com/nubo/operations/cmd/api/repository/TypeMappingRepository.java

```java
package com.nubo.operations.cmd.api.repository;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.nubo.operations.cmd.api.models.entity.TypeMappingEntity;
public interface TypeMappingRepository extends JpaRepository<TypeMappingEntity, Long> {
    Optional<TypeMappingEntity> findByExternalSystemAndExternalDescription(String externalSystem, String externalDescription);
}

```

## src/main/java/com/nubo/operations/cmd/api/repository/TypeRepository.java

```java
package com.nubo.operations.cmd.api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.operations.cmd.api.models.entity.TypeEntity;

public interface TypeRepository extends JpaRepository<TypeEntity, Long> {

    Optional<TypeEntity> findByCategoryIgnoreCaseAndDescriptionIgnoreCase(String category, String description);
}

```

## src/main/java/com/nubo/operations/cmd/api/repository/UserNuboRepository.java

```java
package com.nubo.operations.cmd.api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.nubo.operations.cmd.api.models.entity.UserNuboEntity;

public interface UserNuboRepository extends JpaRepository<UserNuboEntity, Long> {

    @Query("""
            SELECT u FROM UserNuboEntity u
            WHERE u.userName = :userName
            """)
    Optional<UserNuboEntity> findByUserName(String userName);

}

```

## src/main/java/com/nubo/operations/cmd/api/repository/projection/AssignmentTradeView.java

```java
package com.nubo.operations.cmd.api.repository.projection;

import java.math.BigDecimal;
import java.time.LocalDate;

/**
 * Scalar projection used exclusively by assignment batch validation.
 */
public interface AssignmentTradeView {

    Long getId();

    Long getMatchId();

    LocalDate getMatchDate();

    BigDecimal getQuantity();

    Long getTypeId();

    Long getCountryId();

    Long getParticipantBuyId();

    String getParticipantBuyDocumentNumber();

    Long getParticipantBuyCountryId();

    String getParticipantBuyDirectAllocation();

    Long getParticipantSellId();

    String getParticipantSellDocumentNumber();

    Long getParticipantSellCountryId();

    String getParticipantSellDirectAllocation();

    String getDepositoryBuyId();

    String getDepositorySellId();

    Long getSourceQuoteBuyTypeId();

    Long getSourceQuoteSellTypeId();

    Integer getSecurityTitleCountryId();
}

```

## src/main/java/com/nubo/operations/cmd/api/repository/projection/TradeFractionView.java

```java
package com.nubo.operations.cmd.api.repository.projection;

import java.math.BigDecimal;

public interface TradeFractionView {

    Long getId();

    BigDecimal getQuantity();

    Long getTypeId();

    Long getCountryId();

    Long getParticipantBuyId();

    Long getParticipantSellId();

    String getDepositoryBuyId();

    String getDepositorySellId();

    Long getSourceQuoteBuyTypeId();

    Long getSourceQuoteSellTypeId();
}

```

## src/main/java/com/nubo/operations/cmd/api/service/AssignmentClosureService.java

```java
package com.nubo.operations.cmd.api.service;

import java.util.List;

import com.nubo.operations.cmd.api.models.dto.request.AssignmentClosureInDto;
import com.nubo.operations.cmd.api.models.dto.response.AssignmentClosureValidateOutDto;

public interface AssignmentClosureService {

    AssignmentClosureValidateOutDto confirmDefinitive(List<AssignmentClosureInDto> assignmentClosureInDtoList);

}

```

## src/main/java/com/nubo/operations/cmd/api/service/BatchCacheService.java

```java
package com.nubo.operations.cmd.api.service;

import java.util.Optional;

import com.nubo.operations.cmd.api.models.entity.DirectDepositoryEntity;
import com.nubo.operations.cmd.api.models.entity.SideEntity;
import com.nubo.operations.cmd.api.models.entity.TypeEntity;

public interface BatchCacheService {

    Optional<SideEntity> findSideEntity(String sideId);

    TypeEntity findTypeByCategoryAndDescription(String category, String description);

    Optional<TypeEntity> findTypeEntity(Long typeId);

    Optional<DirectDepositoryEntity> findDirectDepositoryByParticipant(Long participantId);

}

```

## src/main/java/com/nubo/operations/cmd/api/service/CorrectionTrackingService.java

```java
package com.nubo.operations.cmd.api.service;

import java.util.List;

import com.nubo.operations.cmd.api.models.domain.CorrectionData;
import com.nubo.operations.cmd.api.models.domain.SettlementCorrection;
import com.nubo.operations.cmd.api.models.dto.request.AssignmentInDto;
import com.nubo.operations.cmd.api.models.entity.SettlementEntity;
import com.nubo.operations.cmd.api.models.entity.SideEntity;
import com.nubo.operations.cmd.api.models.entity.TradeEntity;
import com.nubo.operations.cmd.api.models.enums.CorrectionTypeEnum;

/**
 * Servicio para tracking y validación de correcciones de beneficiario final.
 *
 * Tipos de corrección:
 * - LOCAL (RTBOF-7767): Puntas sin cuenta master. No permite modificar
 * cantidad.
 * - EXTRANJERA (RTBOF-9592): Puntas con cuenta master. Permite modificar
 * cantidad.
 */
public interface CorrectionTrackingService {

    /**
     * Detecta el tipo de corrección basado en si la fracción tiene indicador de
     * cuenta master.
     *
     * Según RTBOF-9592: "Esta corrección solo aplica para puntas que desde su
     * asignación
     * tienen en alguna de sus fracciones cuenta master"
     *
     * @param currentSettlement Settlement actual en BD
     * @param assignmentInDto   Datos de la corrección solicitada
     * @return LOCAL si no tiene indMaster, EXTERNAL si tiene indMaster
     */
    CorrectionTypeEnum detectCorrectionType(SettlementEntity currentSettlement, AssignmentInDto assignmentInDto);

    /**
     * Registra la corrección en la tabla REASSIGNMENT para trazabilidad.
     * Crea dos registros: uno con reassignmentSide=OLD y otro con
     * reassignmentSide=NEW.
     *
     * @param tradeEntity       Operación
     * @param currentSettlement Settlement actual antes de la corrección
     * @param assignmentInDto   Datos de la nueva asignación
     * @param correctionType    Tipo de corrección (LOCAL o EXTERNAL)
     * @return SettlementCorrection Número de corrección generado
     */
    SettlementCorrection trackCorrection(TradeEntity tradeEntity, SettlementEntity currentSettlement,
            AssignmentInDto assignmentInDto, CorrectionTypeEnum correctionType);

    /**
     * Valida que la corrección sea permitida según el tipo detectado.
     *
     * Para LOCAL (RTBOF-7767):
     * - Cantidad NO puede modificarse
     * - Debe haber al menos un cambio (cuenta, comisión o referencia)
     *
     * Para EXTERNAL (RTBOF-9592):
     * - Cantidad SÍ puede modificarse (solo fracciones con cuenta master)
     * - Debe haber al menos un cambio
     *
     * @param correctionType    Tipo de corrección
     * @param currentSettlement Settlement actual
     * @param assignmentInDto   Datos de la corrección
     */
    void validateCorrectionByType(CorrectionTypeEnum correctionType, SettlementEntity currentSettlement,
            AssignmentInDto assignmentInDto);

    /**
     * Verifica si hay algún cambio entre el settlement actual y los datos del
     * request.
     * Usado para filtrar settlements que no tienen cambios antes de procesarlos.
     *
     * @param currentSettlement Settlement actual en BD
     * @param assignmentInDto   Datos del request
     * @return true si hay al menos un cambio, false si no hay cambios
     */
    boolean hasAnyChange(SettlementEntity currentSettlement, AssignmentInDto assignmentInDto);

    /**
     * Valida que no haya fracciones custodiadas en las correcciones.
     * Según ambos tickets: "No se podrá realizar correcciones a puntas con alguna
     * de las fracciones custodiadas"
     *
     * @param settlements Lista de settlements actuales
     */
    void validateNoCustodiadaFractions(List<SettlementEntity> settlements);

    /**
     * Determina si la corrección debe enviarse a Deceval.
     * Según ambos tickets: "Siempre que se modifique la cuenta títulos en el
     * proceso
     * de corrección local o extranjera deberá enviarse a Deceval"
     *
     * @param currentSettlement Settlement actual
     * @param assignmentInDto   Datos de la corrección
     * @return true si debe enviarse a Deceval (cambio de cuenta), false si no
     */
    boolean requiresDecevalSubmission(SettlementEntity currentSettlement, AssignmentInDto assignmentInDto);

    /**
     * Identifica correcciones que únicamente modifican comisión y/o referencia.
     */
    boolean isCommissionOrReferenceOnlyCorrection(SettlementEntity currentSettlement, AssignmentInDto assignmentInDto);

    /**
     * Aplica los valores locales y acepta la asignación y sus registros INICIAL/ACTUAL.
     * Participa en la transacción de la corrección, sin enviar mensajes a SIIDJ.
     */
    void acceptLocalCorrection(CorrectionData correctionData);

    /**
     * Determina si la corrección requiere cobro y ejecuta la lógica de cobro.
     * Internamente usa CorrectionStatusEnum para determinar el tipo de cobro
     * y construir la URL: /correction/{correctionStatusId}
     *
     * LOCAL (RTBOF-7767): "Todas las correcciones locales deberán tener un cobro"
     * - Siempre retorna true (con cobro)
     *
     * EXTERNAL (RTBOF-9592): "La corrección extranjera no tiene costo. Solo se
     * dejará de cobrar la primera corrección, a partir de la segunda ya se genera
     * el cobro normal"
     * - Primera corrección: retorna false (sin cobro)
     * - Segunda+ corrección: retorna true (con cobro)
     *
     * @param correctionType Tipo de corrección (LOCAL o EXTERNAL)
     * @param tradeId        ID del trade
     * @param sideId         ID del lado (BUY o SELL)
     * @param fraction       Número de fracción
     * @return true si se requirió cobro, false si no
     */
    boolean requiresCharge(CorrectionTypeEnum correctionType, Long tradeId, String sideId, Integer fraction);

    /**
     * Valida que las fracciones del request existan en los settlements actuales.
     * Una misma fracción puede aparecer múltiples veces en el request (para
     * dividirla
     * en múltiples correcciones).
     *
     * @param currentSettlements  Lista de settlements actuales en BD
     * @param assignmentInDtoList Lista de correcciones en el request
     */
    void validateFractionsMatch(List<SettlementEntity> currentSettlements, List<AssignmentInDto> assignmentInDtoList);

    /**
     * Valida que la suma de cantidades de las correcciones para cada fracción sea
     * igual
     * a la cantidad original de esa fracción.
     *
     * Ejemplo: Si fracción 0 tiene 100 unidades, el request puede tener:
     * [{fraction: 0, cantidad: 50}, {fraction: 0, cantidad: 50}]
     * La suma (50+50=100) debe ser igual a la cantidad original (100).
     *
     * @param currentSettlements  Lista de settlements actuales en BD
     * @param assignmentInDtoList Lista de correcciones en el request
     */
    void validateQuantitySum(List<SettlementEntity> currentSettlements, List<AssignmentInDto> assignmentInDtoList);

    /**
     * Busca la fracción con indicador de cuenta master (extranjera) en los
     * settlements.
     *
     * @param settlements Lista de settlements actuales
     * @return La fracción extranjera si existe, null si no hay ninguna
     */
    SettlementEntity findExternalFraction(List<SettlementEntity> settlements);

    /**
     * Valida la división de fracción extranjera cuando hay fracciones nuevas
     * (fraction=null).
     *
     * Escenarios:
     * A) Solo fracciones nuevas: suma de nuevas = cantidad extranjera original
     * B) Extranjera modificada + nuevas: cantidad modificada + suma nuevas =
     * cantidad original
     * C) Extranjera + nuevas + locales: valida extranjera y locales por separado
     * D) Solo nuevas + locales: suma nuevas = cantidad extranjera, locales
     * validadas aparte
     *
     * @param currentSettlements Lista de settlements actuales en BD
     * @param newFractions       Lista de fracciones nuevas (fraction=null)
     * @param existingFractions  Lista de fracciones existentes (fraction!=null)
     * @param externalFraction   La fracción extranjera actual
     */
    void validateExternalFractionDivision(List<SettlementEntity> currentSettlements,
            List<AssignmentInDto> newFractions, List<AssignmentInDto> existingFractions,
            SettlementEntity externalFraction);

    /**
     * Genera el correctionNumber para una corrección con el formato numérico:
     * CONSECUTIVO (6 dígitos) + FRACCIÓN + PUNTA (SIDE)
     *
     * Ejemplo: consecutivo=3, fraction=1, sideId="1" → 000003 + 1 + 1 → 311L
     *
     * El consecutivo es único por día y se obtiene contando las correcciones del
     * día.
     *
     * @param fraction Número de fracción
     * @param sideId   ID del lado
     * @return CorrectionNumber como Long
     */
    Long generateCorrectionNumber(Integer fraction, String sideId);

    /**
     * Envía las correcciones pendientes de procesamiento externo.
     * Envía un mensaje a Kafka
     *
     * @param tradeEntity        Trade de la operación
     * @param sideEntity         Entidad de la punta (BUY/SELL)
     * @param correctionDataList Lista de correcciones con su información
     * @param externalFraction   Fracción extranjera (para fracciones nuevas de
     *                           división)
     *
     */
    void publishCorrectionsToKafka(TradeEntity tradeEntity, SideEntity sideEntity,
            List<CorrectionData> correctionDataList, SettlementEntity externalFraction);

}

```

## src/main/java/com/nubo/operations/cmd/api/service/FractionationBatchService.java

```java
package com.nubo.operations.cmd.api.service;

import com.nubo.operations.cmd.api.models.dto.request.BatchAssignmentInDto;
import com.nubo.operations.cmd.api.models.dto.request.BatchAssignmentValidationInDto;
import com.nubo.operations.cmd.api.models.dto.response.BatchAssignmentOutDto;
import com.nubo.operations.cmd.api.models.dto.response.BatchAssignmentValidationOutDto;

public interface FractionationBatchService {

    BatchAssignmentOutDto processBatch(BatchAssignmentInDto request);

    BatchAssignmentValidationOutDto validateBatch(BatchAssignmentValidationInDto request);

}

```

## src/main/java/com/nubo/operations/cmd/api/service/FractionationCountedService.java

```java
package com.nubo.operations.cmd.api.service;

import java.util.List;

import com.nubo.operations.cmd.api.models.dto.request.AssignmentInDto;
import com.nubo.operations.cmd.api.models.dto.request.FractionInDto;
import com.nubo.operations.cmd.api.models.dto.response.SettlementOutDto;

public interface FractionationCountedService {

    List<SettlementOutDto> createFractions(Long tradeId, String sideId, List<FractionInDto> fractionInDtoList);

    List<SettlementOutDto> updateAssignment(Long tradeId, String sideId, List<FractionInDto> fractionInDtoList);

    List<SettlementOutDto> updateCorrection(Long tradeId, String sideId, List<AssignmentInDto> assignmentInDtoList);
}

```

## src/main/java/com/nubo/operations/cmd/api/service/SettlementService.java

```java
package com.nubo.operations.cmd.api.service;

import com.nubo.operations.cmd.api.models.dto.request.SettlementCommissionUpdateInDto;
import com.nubo.operations.cmd.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.cmd.api.models.entity.SettlementKey;

public interface SettlementService {

    SettlementOutDto updateSettlementCommission(SettlementKey settlementKey,
            SettlementCommissionUpdateInDto settlementCommissionUpdateInDto);
}

```

## src/main/java/com/nubo/operations/cmd/api/service/TradeEquityService.java

```java
package com.nubo.operations.cmd.api.service;

import com.nubo.operations.cmd.api.models.dto.request.TradeEquityInDto;
import com.nubo.operations.cmd.api.models.dto.request.TradeEquityUpdateInDto;
import com.nubo.operations.cmd.api.models.dto.response.TradeEquityOutDto;

public interface TradeEquityService {

    TradeEquityOutDto createTradeEquity(TradeEquityInDto tradeEquityInDto);

    TradeEquityOutDto updateTradeEquity(Long tradeId, TradeEquityUpdateInDto tradeEquityUpdateInDto);
}

```

## src/main/java/com/nubo/operations/cmd/api/service/TradeService.java

```java
package com.nubo.operations.cmd.api.service;

import com.nubo.operations.cmd.api.models.dto.request.TradeInDto;
import com.nubo.operations.cmd.api.models.dto.request.TradeUpdateInDto;
import com.nubo.operations.cmd.api.models.dto.response.TradeOutDto;

public interface TradeService {

    TradeOutDto createTrade(TradeInDto tradeInDto);

    TradeOutDto updateTrade(Long tradeId, TradeUpdateInDto tradeUpdateInDto);
}

```

## src/main/java/com/nubo/operations/cmd/api/service/ValidateCountedFractionService.java

```java
package com.nubo.operations.cmd.api.service;

import java.util.Collection;
import java.util.List;
import java.util.Map;

import com.nubo.operations.cmd.api.models.dto.request.FractionRuleInDto;
import com.nubo.operations.cmd.api.models.dto.response.FractionAccountOutDto;
import com.nubo.operations.cmd.api.models.dto.response.ParticipantBankAccountOutDto;
import com.nubo.operations.cmd.api.models.dto.response.ParticipantOutDto;
import com.nubo.operations.cmd.api.models.context.AssignmentTradeContext;
import com.nubo.operations.cmd.api.models.entity.TradeEntity;

public interface ValidateCountedFractionService {

    FractionAccountOutDto validateAccountFractionCorrection(String accountNumber, Long tradeId, String sideId);

    Boolean validateQuantityFractions(Long tradeId, List<FractionRuleInDto> fractionRuleInDtoList);

    Boolean validateQuantityFractions(TradeEntity tradeEntity, List<FractionRuleInDto> fractionRuleInDtoList);

    Boolean validateQuantityFractions(AssignmentTradeContext trade,
            List<FractionRuleInDto> fractionRuleInDtoList);

    Boolean validateMaximumLimitFractions(Long tradeId, List<FractionRuleInDto> fractionRuleInDtoList);

    Boolean validateMaximumLimitFractions(TradeEntity tradeEntity, List<FractionRuleInDto> fractionRuleInDtoList);

    Boolean validateMaximumLimitFractions(AssignmentTradeContext trade,
            List<FractionRuleInDto> fractionRuleInDtoList);

    ParticipantOutDto validateDirectDepositorFractionCorrection(Long tradeId, String sideId);

    FractionAccountOutDto validateAccountFractionAssignment(String accountNumber, Long tradeId, String sideId,
            Long originId, Boolean isLocalCorrection);

    FractionAccountOutDto validateAccountFractionAssignment(TradeEntity tradeEntity, String accountNumber,
            String sideId, Long originId, Boolean isLocalCorrection);

    FractionAccountOutDto validateAccountFractionAssignment(AssignmentTradeContext trade, String accountNumber,
            String sideId, Long originId, Boolean isLocalCorrection);

    ParticipantBankAccountOutDto validateCudAccountFractionAssignment(Long tradeId, String sideId);

    Map<Long, ParticipantBankAccountOutDto> validateCudAccountFractionAssignments(
            Collection<Long> participantIds);

}

```

## src/main/java/com/nubo/operations/cmd/api/service/impl/AssignmentClosureServiceImpl.java

```java
package com.nubo.operations.cmd.api.service.impl;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import com.nubo.operations.cmd.api.application.properties.PropertiesConfig;
import com.nubo.operations.cmd.api.application.properties.PropertiesContext;
import com.nubo.operations.cmd.api.client.kafka.models.request.FinalAssignmentFractionInDto;
import com.nubo.operations.cmd.api.client.kafka.models.request.FinalAssignmentInDto;
import com.nubo.operations.cmd.api.client.kafka.models.request.ParticipantInDto;
import com.nubo.operations.cmd.api.client.kafka.models.request.SideInDto;
import com.nubo.operations.cmd.api.client.kafka.producer.KafkaNuboAdapterProducer;
import com.nubo.operations.cmd.api.client.operation.rules.models.dto.request.StatusUpdateTradeInDto;
import com.nubo.operations.cmd.api.client.operation.rules.models.dto.response.StatusClientOutDto;
import com.nubo.operations.cmd.api.client.operation.rules.models.dto.response.StatusUpdateTradeOutDto;
import com.nubo.operations.cmd.api.client.operation.rules.service.OperationBusinessRuleClient;
import com.nubo.operations.cmd.api.exception.ServiceException;
import com.nubo.operations.cmd.api.exception.error.ErrorCode;
import com.nubo.operations.cmd.api.helpers.MapperUtil;
import com.nubo.operations.cmd.api.models.dto.request.AssignmentClosureInDto;
import com.nubo.operations.cmd.api.models.dto.response.AssignmentClosureOutDto;
import com.nubo.operations.cmd.api.models.dto.response.AssignmentClosureValidateOutDto;
import com.nubo.operations.cmd.api.models.dto.response.BusinessRuleCodeOutDto;
import com.nubo.operations.cmd.api.models.entity.CountryEntity;
import com.nubo.operations.cmd.api.models.entity.DirectDepositoryEntity;
import com.nubo.operations.cmd.api.models.entity.MilaDepositoryEntity;
import com.nubo.operations.cmd.api.models.entity.ParticipantEntity;
import com.nubo.operations.cmd.api.models.entity.SecurityTitleEntity;
import com.nubo.operations.cmd.api.models.entity.SettlementEntity;
import com.nubo.operations.cmd.api.models.entity.SideEntity;
import com.nubo.operations.cmd.api.models.entity.StatusEntity;
import com.nubo.operations.cmd.api.models.entity.TradeEntity;
import com.nubo.operations.cmd.api.models.entity.TradeEquityEntity;
import com.nubo.operations.cmd.api.models.entity.TradeStatusHistoryEntity;
import com.nubo.operations.cmd.api.models.enums.BusinessRuleEnum;
import com.nubo.operations.cmd.api.models.enums.SideEnum;
import com.nubo.operations.cmd.api.models.enums.VersionApiEnum;
import com.nubo.operations.cmd.api.repository.SettlementRepository;
import com.nubo.operations.cmd.api.repository.TradeRepository;
import com.nubo.operations.cmd.api.repository.TradeStatusHistoryRepository;
import com.nubo.operations.cmd.api.service.AssignmentClosureService;
import com.nubo.operations.cmd.api.service.BatchCacheService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class AssignmentClosureServiceImpl implements AssignmentClosureService {

    private final TradeRepository tradeRepository;
    private final SettlementRepository settlementRepository;
    private final TradeStatusHistoryRepository tradeStatusHistoryRepository;
    private final BatchCacheService batchCacheService;
    private final OperationBusinessRuleClient operationBusinessRuleClient;
    private final KafkaNuboAdapterProducer kafkaNuboAdapterProducer;
    private final PropertiesConfig propertiesConfig;

    @Override
    @Transactional
    public AssignmentClosureValidateOutDto confirmDefinitive(List<AssignmentClosureInDto> assignmentClosureInDtoList) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return confirmDefinitiveV1(assignmentClosureInDtoList);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private AssignmentClosureValidateOutDto confirmDefinitiveV1(
            List<AssignmentClosureInDto> assignmentClosureInDtoList) {
        log.info("Start method confirmDefinitiveV1 with assignmentClosureInDtoList -> {}",
                assignmentClosureInDtoList);

        validateNoDuplicates(assignmentClosureInDtoList);

        List<TradeSideResult> tradeSideResultValidList = new ArrayList<>();
        List<TradeSideResult> tradeSideResultInvalidList = new ArrayList<>();

        for (AssignmentClosureInDto assignmentClosureInDto : assignmentClosureInDtoList) {
            TradeSideResult tradeSideResult = validateTradeSide(assignmentClosureInDto);
            if (tradeSideResult.isValid) {
                tradeSideResultValidList.add(tradeSideResult);
            } else {
                tradeSideResultInvalidList.add(tradeSideResult);
            }

        }

        if (!tradeSideResultValidList.isEmpty()) {
            this.saveAllTradeAndSendMessageKafka(tradeSideResultValidList);
        }

        AssignmentClosureValidateOutDto assignmentClosureValidateOutDto = AssignmentClosureValidateOutDto.builder()
                .successfulAssignmentClosure(tradeSideResultValidList.stream()
                        .map(this::buildAssignmentClosureOutDto)
                        .toList())
                .errorAssignmentClosure(tradeSideResultInvalidList.stream()
                        .map(this::buildAssignmentClosureOutDto)
                        .toList())
                .build();

        log.info("End method confirmDefinitiveV1 with assignmentClosureValidateOutDto");
        return assignmentClosureValidateOutDto;
    }

    private TradeSideResult validateTradeSide(AssignmentClosureInDto assignmentClosureInDto) {
        Long tradeId = assignmentClosureInDto.getTradeId();
        String sideId = assignmentClosureInDto.getSideId();

        Optional<TradeEntity> tradeEntityOptional = tradeRepository.findByIdWithRelations(tradeId);
        Optional<SideEntity> sideEntityOptional = batchCacheService.findSideEntity(sideId);
        if (tradeEntityOptional.isEmpty() || sideEntityOptional.isEmpty()) {
            String message = String.format("No trade or side found for tradeId: '%s' and sideId: '%s'", tradeId,
                    sideId);
            return TradeSideResult.invalid(message, sideId, tradeId);
        }

        TradeEntity tradeEntity = tradeEntityOptional.get();
        SideEntity sideEntity = sideEntityOptional.get();
        List<SettlementEntity> lockedSettlementList = settlementRepository.findByTradeIdAndSideIdWithLock(tradeId,
                sideId);

        StatusUpdateTradeOutDto statusUpdateTradeOutDto = validateRulesFinalAssignment(tradeId, sideId);
        if (!Boolean.TRUE.equals(statusUpdateTradeOutDto.getIsValid())) {
            String message = statusUpdateTradeOutDto.getDescription() != null
                    ? statusUpdateTradeOutDto.getDescription()
                    : "Business rule validation failed";
            return TradeSideResult.invalid(message, sideEntity, tradeEntity,
                    statusUpdateTradeOutDto.getBusinessRuleCode());
        }
        TradeEntity updateTradeEntity = updateAssignmentTradeEntity(tradeEntity, sideId,
                statusUpdateTradeOutDto.getNewStatusSide());
        TradeStatusHistoryEntity tradeStatusHistoryEntity = createTradeStatusHistoryEntity(updateTradeEntity, sideId,
                statusUpdateTradeOutDto.getNewStatusSide());

        List<SettlementEntity> updatedSettlementEntityList = lockedSettlementList.stream()
                .map(settlementEntity -> updateAssignmentSettlementEntity(settlementEntity,
                        statusUpdateTradeOutDto.getNewStatusFraction()))
                .toList();

        return TradeSideResult.valid(sideEntity, updateTradeEntity, updatedSettlementEntityList,
                tradeStatusHistoryEntity);
    }

    private StatusUpdateTradeOutDto validateRulesFinalAssignment(Long tradeId, String sideId) {
        StatusUpdateTradeInDto statusUpdateTradeInDto = StatusUpdateTradeInDto.builder()
                .tradeId(tradeId)
                .sideId(sideId)
                .code(BusinessRuleEnum.RULE_FINAL_ASSIGNMENT)
                .build();
        return operationBusinessRuleClient.validateUpdateStatusTrade(statusUpdateTradeInDto);
    }

    private TradeEntity updateAssignmentTradeEntity(TradeEntity tradeEntity, String sideId,
            StatusClientOutDto statusClientOutDto) {
        StatusEntity sideStatusEntity = MapperUtil.statusClientOutDtoToStatusEntity(statusClientOutDto);
        return tradeEntity.toBuilder()
                .finalAssignmentMarkBuy(SideEnum.BUY.getId().equalsIgnoreCase(sideId)
                        ? Boolean.TRUE
                        : tradeEntity.getFinalAssignmentMarkBuy())
                .finalAssignmentMarkSell(SideEnum.SELL.getId().equalsIgnoreCase(sideId)
                        ? Boolean.TRUE
                        : tradeEntity.getFinalAssignmentMarkSell())
                .buyStatus(SideEnum.BUY.getId().equalsIgnoreCase(sideId) && sideStatusEntity != null
                        ? sideStatusEntity
                        : tradeEntity.getBuyStatus())
                .sellStatus(SideEnum.SELL.getId().equalsIgnoreCase(sideId) && sideStatusEntity != null
                        ? sideStatusEntity
                        : tradeEntity.getSellStatus())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();
    }

    private TradeStatusHistoryEntity createTradeStatusHistoryEntity(TradeEntity tradeEntity, String sideId,
            StatusClientOutDto statusClientOutDto) {
        StatusEntity statusEntity = MapperUtil.statusClientOutDtoToStatusEntity(statusClientOutDto);
        if (statusEntity == null) {
            return null;
        }
        return TradeStatusHistoryEntity.builder()
                .trade(tradeEntity)
                .time(LocalDateTime.now())
                .status(statusEntity)
                .detail("Asignación enviada a Cámara")
                .sideId(sideId)
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();
    }

    private SettlementEntity updateAssignmentSettlementEntity(SettlementEntity settlementEntity,
            StatusClientOutDto statusClientOutDto) {
        StatusEntity statusEntity = MapperUtil.statusClientOutDtoToStatusEntity(statusClientOutDto);
        return settlementEntity.toBuilder()
                .status(statusEntity != null ? statusEntity : settlementEntity.getStatus())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();
    }

    private void saveAllTradeAndSendMessageKafka(List<TradeSideResult> tradeSideResultList) {
        this.saveAllTradeAndSettlement(tradeSideResultList);
        tradeSideResultList.forEach(this::sendMessageFinalAssignmentRequest);
    }

    private void saveAllTradeAndSettlement(List<TradeSideResult> tradeSideResultList) {
        List<SettlementEntity> settlementEntityList = tradeSideResultList.stream()
                .filter(Objects::nonNull)
                .flatMap(tradeSideResult -> tradeSideResult.settlementEntityList().stream())
                .toList();
        List<TradeStatusHistoryEntity> tradeStatusHistoryEntityList = tradeSideResultList.stream()
                .filter(Objects::nonNull)
                .map(TradeSideResult::tradeStatusHistoryEntity)
                .filter(Objects::nonNull)
                .toList();

        tradeSideResultList.forEach(result -> saveAllTrade(result.tradeEntity(), result.sideEntity()));
        settlementRepository.saveAll(settlementEntityList);
        tradeStatusHistoryRepository.saveAll(tradeStatusHistoryEntityList);
    }

    private void saveAllTrade(TradeEntity tradeEntity, SideEntity sideEntity) {
        if (SideEnum.BUY.getId().equalsIgnoreCase(sideEntity.getId())) {
            tradeRepository.updateBuyStatusIdAndFinalAssignmentMark(tradeEntity.getId(),
                    tradeEntity.getBuyStatus() != null ? tradeEntity.getBuyStatus().getId() : null,
                    tradeEntity.getFinalAssignmentMarkBuy(),
                    PropertiesContext.getClientUser(),
                    propertiesConfig.getApiName(),
                    PropertiesContext.getClientDatetime());

        } else if (SideEnum.SELL.getId().equalsIgnoreCase(sideEntity.getId())) {
            tradeRepository.updateSellStatusIdAndFinalAssignmentMark(tradeEntity.getId(),
                    tradeEntity.getSellStatus() != null ? tradeEntity.getSellStatus().getId() : null,
                    tradeEntity.getFinalAssignmentMarkSell(),
                    PropertiesContext.getClientUser(),
                    propertiesConfig.getApiName(),
                    PropertiesContext.getClientDatetime());
        }
    }

    private AssignmentClosureOutDto buildAssignmentClosureOutDto(TradeSideResult tradeSideResult) {
        TradeEntity tradeEntity = tradeSideResult.tradeEntity();
        ParticipantEntity participantEntity = getParticipantSide(tradeEntity, tradeSideResult.sideEntity());
        SideEntity sideEntity = tradeSideResult.sideEntity();
        return MapperUtil.buildAssignmentClosureOutDto(tradeEntity, participantEntity, sideEntity,
                tradeSideResult.message(), tradeSideResult.businessRuleCode());
    }

    private ParticipantEntity getParticipantSide(TradeEntity tradeEntity, SideEntity sideEntity) {
        String sideId = sideEntity == null ? "" : sideEntity.getId();
        if (SideEnum.BUY.getId().equalsIgnoreCase(sideId)) {
            return tradeEntity.getParticipantBuy();
        }
        if (SideEnum.SELL.getId().equalsIgnoreCase(sideId)) {
            return tradeEntity.getParticipantSell();
        }
        return null;
    }

    private void validateNoDuplicates(List<AssignmentClosureInDto> assignmentClosureInDtoList) {
        if (assignmentClosureInDtoList == null || assignmentClosureInDtoList.isEmpty()) {
            throw new ServiceException(ErrorCode.BAD_REQUEST, "Request list cannot be null or empty",
                    HttpStatus.BAD_REQUEST);
        }
        long uniqueCount = assignmentClosureInDtoList.stream()
                .map(dto -> dto.getTradeId() + "-" + dto.getSideId())
                .distinct()
                .count();
        if (uniqueCount != assignmentClosureInDtoList.size()) {
            String message = "Duplicate tradeId-sideId combinations found in the request";
            throw new ServiceException(ErrorCode.BAD_REQUEST, message, HttpStatus.BAD_REQUEST);
        }
    }

    private void sendMessageFinalAssignmentRequest(TradeSideResult tradeSideResult) {
        TradeEntity tradeEntity = tradeSideResult.tradeEntity();
        SideEntity sideEntity = tradeSideResult.sideEntity();
        List<SettlementEntity> settlementEntityList = tradeSideResult.settlementEntityList();
        CountryEntity countryEntity = tradeEntity.getCountry();
        SecurityTitleEntity securityTitleEntity = tradeEntity.getSecurityTitle();
        TradeEquityEntity tradeEquityEntity = tradeEntity.getTradeEquity();
        String referenceBuy = tradeEquityEntity != null ? tradeEquityEntity.getReferenceBuy() : null;
        String referenceSell = tradeEquityEntity != null ? tradeEquityEntity.getReferenceSell() : null;

        FinalAssignmentInDto finalAssignmentInDto = FinalAssignmentInDto.builder()
                .tradeId(tradeEntity.getId())
                .side(SideInDto.builder()
                        .id(sideEntity.getId())
                        .name(sideEntity.getDescription())
                        .build())
                .matchId(tradeEntity.getMatchId())
                .matchDate(tradeEntity.getMatchDate())
                .clearingDate(tradeEntity.getClearingDate())
                .returnClearingDate(tradeEntity.getReturnClearingDate())
                .type(MapperUtil.typeEntityToTypeInDto(tradeEntity.getType()))
                .isFractional(SideEnum.BUY.getId().equalsIgnoreCase(sideEntity.getId())
                        ? tradeEntity.getFractionalMarkBuy()
                        : tradeEntity.getFractionalMarkSell())
                .country(MapperUtil.countryEntityToCountryInDto(countryEntity))
                .mnemonic(securityTitleEntity != null ? securityTitleEntity.getMnemonic() : null)
                .isin(securityTitleEntity != null ? securityTitleEntity.getIsin() : null)
                .depository(SideEnum.BUY.getId().equalsIgnoreCase(sideEntity.getId())
                        ? MapperUtil.depositoryEntityToDepositoryInDto(tradeEntity.getDepositoryBuy())
                        : MapperUtil.depositoryEntityToDepositoryInDto(tradeEntity.getDepositorySell()))
                .isNuboAllocation(Boolean.TRUE)
                .reference(SideEnum.BUY.getId().equalsIgnoreCase(sideEntity.getId())
                        ? referenceBuy
                        : referenceSell)
                .participant(this.participantEntityToParticipantInDto(getParticipantSide(tradeEntity,
                        sideEntity)))
                .fractions(settlementEntityList.stream()
                        .map(this::settlementEntityToFinalAssignmentFractionInDto)
                        .toList())
                .build();

        String key = tradeEntity.getId() + "-" + sideEntity.getId();
        kafkaNuboAdapterProducer.sendMessageFinalAssignmentRequestSync(key, finalAssignmentInDto);
    }

    private FinalAssignmentFractionInDto settlementEntityToFinalAssignmentFractionInDto(
            SettlementEntity settlementEntity) {
        if (ObjectUtils.isEmpty(settlementEntity))
            return null;
        return FinalAssignmentFractionInDto.builder()
                .side(SideInDto.builder()
                        .id(settlementEntity.getSide().getId())
                        .name(settlementEntity.getSide().getDescription())
                        .build())
                .fraction(settlementEntity.getFraction())
                .quantity(settlementEntity.getFractionQuantity())
                .investorAccount(
                        MapperUtil.investorAccountEntityToInvestorAccountInDto(settlementEntity.getInvestorAccount()))
                .participantAccount(
                        MapperUtil.participantAccountEntityToParticipantAccountInDto(
                                settlementEntity.getParticipantAccount()))
                .participantBankAccount(MapperUtil.participantBankAccountEntityToParticipantBankAccountInDto(
                        settlementEntity.getParticipantBankAccount()))
                .cashAccount(settlementEntity.getCashAccount())
                .custodian(resolveCustodianForFinalAssignment(settlementEntity))
                .ficAdministrator(this.participantEntityToParticipantInDto(settlementEntity.getFicAdministrator()))
                .directDepositor(
                        MapperUtil.directDepositoryEntityToDirectDepositoryInDto(settlementEntity.getDirectDepositor()))
                .reference(settlementEntity.getReference())
                .build();
    }

    private ParticipantInDto resolveCustodianForFinalAssignment(SettlementEntity settlementEntity) {
        if (settlementEntity == null) {
            return null;
        }
        MilaDepositoryEntity milaDepositoryEntity = settlementEntity.getMilaDirectDepositor();
        if (hasValidMilaLocalDirectDepositoryNumber(milaDepositoryEntity)) {
            return ParticipantInDto.builder()
                    .id(milaDepositoryEntity.getId())
                    .code("")
                    .name(milaDepositoryEntity.getCode())
                    .directDepositoryNumber(milaDepositoryEntity.getDirectDepositoryNumber())
                    .build();
        }
        return this.participantEntityToParticipantInDto(settlementEntity.getCustodian());
    }

    private ParticipantInDto participantEntityToParticipantInDto(ParticipantEntity participantEntity) {
        if (participantEntity == null) {
            return null;
        }
        DirectDepositoryEntity directDepositoryEntity = batchCacheService
                .findDirectDepositoryByParticipant(participantEntity.getId())
                .orElse(null);

        return ParticipantInDto.builder()
                .id(participantEntity.getId())
                .code(participantEntity.getCode())
                .name(participantEntity.getName())
                .directDepositoryNumber(directDepositoryEntity != null
                        ? directDepositoryEntity.getDirectDepositoryNumber()
                        : null)
                .build();
    }

    private static boolean hasValidMilaLocalDirectDepositoryNumber(MilaDepositoryEntity milaDepositoryEntity) {
        return milaDepositoryEntity != null
                && milaDepositoryEntity.getDirectDepositoryNumber() != null
                && !milaDepositoryEntity.getDirectDepositoryNumber().trim().isEmpty();
    }

    public record TradeSideResult(
            boolean isValid,
            String message,
            SideEntity sideEntity,
            TradeEntity tradeEntity,
            List<SettlementEntity> settlementEntityList,
            TradeStatusHistoryEntity tradeStatusHistoryEntity,
            BusinessRuleCodeOutDto businessRuleCode) {

        static TradeSideResult valid(SideEntity sideEntity, TradeEntity tradeEntity,
                List<SettlementEntity> settlementEntityList,
                TradeStatusHistoryEntity tradeStatusHistoryEntity) {
            return new TradeSideResult(true, "Success", sideEntity, tradeEntity, settlementEntityList,
                    tradeStatusHistoryEntity, null);
        }

        static TradeSideResult invalid(String message, String sideId, Long tradeId) {
            TradeEntity tradeEntity = TradeEntity.builder().id(tradeId).build();
            SideEntity sideEntity = SideEntity.builder().id(sideId).build();
            return new TradeSideResult(false, message, sideEntity, tradeEntity, new ArrayList<>(), null, null);
        }

        static TradeSideResult invalid(String message, SideEntity sideEntity, TradeEntity tradeEntity,
                BusinessRuleCodeOutDto businessRuleCode) {
            return new TradeSideResult(false, message, sideEntity, tradeEntity, new ArrayList<>(), null,
                    businessRuleCode);
        }
    }

}

```

## src/main/java/com/nubo/operations/cmd/api/service/impl/BatchCacheServiceImpl.java

```java
package com.nubo.operations.cmd.api.service.impl;

import java.util.Optional;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.nubo.operations.cmd.api.exception.ServiceException;
import com.nubo.operations.cmd.api.exception.error.ErrorCode;
import com.nubo.operations.cmd.api.models.entity.DirectDepositoryEntity;
import com.nubo.operations.cmd.api.models.entity.SideEntity;
import com.nubo.operations.cmd.api.models.entity.TypeEntity;
import com.nubo.operations.cmd.api.repository.DirectDepositoryRepository;
import com.nubo.operations.cmd.api.repository.SideRepository;
import com.nubo.operations.cmd.api.repository.TypeRepository;
import com.nubo.operations.cmd.api.service.BatchCacheService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class BatchCacheServiceImpl implements BatchCacheService {

    private final SideRepository sideRepository;
    private final TypeRepository typeRepository;
    private final DirectDepositoryRepository directDepositoryRepository;

    @Override
    @Cacheable(value = "sides", key = "#sideId")
    public Optional<SideEntity> findSideEntity(String sideId) {
        return sideRepository.findById(sideId);
    }

    @Override
    @Cacheable(value = "typesCategoryDescription", key = "#category + '-' + #description")
    public TypeEntity findTypeByCategoryAndDescription(String category, String description) {
        return typeRepository
                .findByCategoryIgnoreCaseAndDescriptionIgnoreCase(category, description)
                .orElseThrow(() -> new ServiceException(ErrorCode.TYPE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    @Override
    @Cacheable(value = "types", key = "#typeId")
    public Optional<TypeEntity> findTypeEntity(Long typeId) {
        return typeRepository.findById(typeId);
    }

    @Override
    @Cacheable(value = "directDepositories", key = "#participantId")
    public Optional<DirectDepositoryEntity> findDirectDepositoryByParticipant(Long participantId) {
        return directDepositoryRepository.findFirstByParticipantId(participantId);
    }

}

```

## src/main/java/com/nubo/operations/cmd/api/service/impl/CorrectionTrackingServiceImpl.java

```java
package com.nubo.operations.cmd.api.service.impl;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nubo.operations.cmd.api.application.properties.PropertiesConfig;
import com.nubo.operations.cmd.api.application.properties.PropertiesContext;
import com.nubo.operations.cmd.api.client.kafka.models.request.CorrectionFractionInDto;
import com.nubo.operations.cmd.api.client.kafka.models.request.CorrectionRequestInDto;
import com.nubo.operations.cmd.api.client.kafka.models.request.SideInDto;
import com.nubo.operations.cmd.api.client.kafka.producer.KafkaNuboAdapterProducer;
import com.nubo.operations.cmd.api.client.operation.calculation.models.dto.request.SettleAccountsInDto;
import com.nubo.operations.cmd.api.client.operation.calculation.models.dto.response.SettleAccountsOutDto;
import com.nubo.operations.cmd.api.client.operation.calculation.service.OperationCalculationClient;
import com.nubo.operations.cmd.api.exception.ServiceException;
import com.nubo.operations.cmd.api.exception.error.ErrorCode;
import com.nubo.operations.cmd.api.helpers.MapperUtil;
import com.nubo.operations.cmd.api.models.domain.CorrectionData;
import com.nubo.operations.cmd.api.models.domain.SettlementCorrection;
import com.nubo.operations.cmd.api.models.dto.request.AssignmentInDto;
import com.nubo.operations.cmd.api.models.entity.InvestorAccountEntity;
import com.nubo.operations.cmd.api.models.entity.ParticipantAccountEntity;
import com.nubo.operations.cmd.api.models.entity.SecurityTitleEntity;
import com.nubo.operations.cmd.api.models.entity.SettlementCorrectionEntity;
import com.nubo.operations.cmd.api.models.entity.SettlementEntity;
import com.nubo.operations.cmd.api.models.entity.SideEntity;
import com.nubo.operations.cmd.api.models.entity.StatusEntity;
import com.nubo.operations.cmd.api.models.entity.TradeEntity;
import com.nubo.operations.cmd.api.models.entity.TypeEntity;
import com.nubo.operations.cmd.api.models.enums.CorrectionStatusEnum;
import com.nubo.operations.cmd.api.models.enums.CorrectionTypeEnum;
import com.nubo.operations.cmd.api.models.enums.ReassignmentTypeEnum;
import com.nubo.operations.cmd.api.models.enums.SideEnum;
import com.nubo.operations.cmd.api.models.enums.StatusEnum;
import com.nubo.operations.cmd.api.repository.InvestorAccountRepository;
import com.nubo.operations.cmd.api.repository.ParticipantAccountRepository;
import com.nubo.operations.cmd.api.repository.SettlementCorrectionRepository;
import com.nubo.operations.cmd.api.repository.StatusRepository;
import com.nubo.operations.cmd.api.repository.TypeRepository;
import com.nubo.operations.cmd.api.service.CorrectionTrackingService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * Implementación del servicio de tracking de correcciones.
 *
 * Tipos de corrección según tickets RTBOF-7767 y RTBOF-9592:
 *
 * LOCAL (RTBOF-7767):
 * - Aplica a puntas SIN cuenta master en ninguna fracción
 * - Campos editables: Cuenta títulos, % Comisión, Referencia, Origen (solo
 * interno)
 * - Cantidad: NO editable
 * - No permite agregar/eliminar fracciones
 * - Siempre tiene cobro
 *
 * EXTRANJERA (RTBOF-9592):
 * - Aplica a puntas CON cuenta master en alguna fracción
 * - Campos editables: Cuenta títulos, % Comisión, Referencia, Origen (solo
 * interno), Cantidad (solo fracciones con cuenta master)
 * - Permite agregar/eliminar fracciones (solo las que tienen cuenta master)
 * - Primera corrección sin cobro, a partir de la segunda sí
 * - Debe cambiar cuenta master a cuenta inversionista
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class CorrectionTrackingServiceImpl implements CorrectionTrackingService {

    private final SettlementCorrectionRepository settlementCorrectionRepository;
    private final TypeRepository typeRepository;
    private final StatusRepository statusRepository;
    private final InvestorAccountRepository investorAccountRepository;
    private final ParticipantAccountRepository participantAccountRepository;
    private final KafkaNuboAdapterProducer kafkaNuboAdapterProducer;
    private final PropertiesConfig propertiesConfig;
    private final OperationCalculationClient operationCalculationClient;

    @Override
    public CorrectionTypeEnum detectCorrectionType(SettlementEntity currentSettlement,
            AssignmentInDto assignmentInDto) {
        log.info("Detecting correction type for fraction: {}", currentSettlement.getFraction());
        Boolean hasMasterIndicator = currentSettlement.getIndMaster();

        if (Boolean.TRUE.equals(hasMasterIndicator)) {
            log.info("Correction type detected: EXTERNAL/EXTRANJERA (fraction has master account indicator)");
            return CorrectionTypeEnum.EXTERNAL;
        }

        log.info("Correction type detected: LOCAL (fraction does not have master account indicator)");
        return CorrectionTypeEnum.LOCAL;
    }

    @Override
    @Transactional
    public SettlementCorrection trackCorrection(TradeEntity tradeEntity, SettlementEntity currentSettlement,
            AssignmentInDto assignmentInDto, CorrectionTypeEnum correctionType) {
        SideEntity sideEntity = currentSettlement.getSide();
        log.info("Start method trackCorrection for trade: {}, side: {}, fraction: {}, type: {}",
                tradeEntity.getId(), sideEntity.getId(), currentSettlement.getFraction(), correctionType);

        Long correctionNumberLong = generateCorrectionNumber(currentSettlement.getFraction(), sideEntity.getId());
        String correctionNumber = String.valueOf(correctionNumberLong);
        LocalDateTime lastModifyDate = LocalDateTime.now();
        LocalDate requestDate = lastModifyDate.toLocalDate();
        LocalTime requestTime = lastModifyDate.toLocalTime();
        String lastModifyUser = PropertiesContext.getClientUser();
        String lastModifyApplic = propertiesConfig.getApiName();
        String lastModifyIp = PropertiesContext.getClientIp();

        TypeEntity processType = findTypeEntity(correctionType.getId());
        TypeEntity reassignmentTypeInicial = findTypeEntity(ReassignmentTypeEnum.INICIAL.getId());
        TypeEntity reassignmentTypeActual = findTypeEntity(ReassignmentTypeEnum.ACTUAL.getId());
        TypeEntity newSourceQuoteType = findTypeEntity(assignmentInDto.getSourceQuoteTypeId());

        StatusEntity status = statusRepository.findById(StatusEnum.REASSIGNMENT_CORRECTION_REQUESTED.getId())
                .orElseThrow(() -> new ServiceException(ErrorCode.STATUS_NOT_FOUND, HttpStatus.NOT_FOUND));

        InvestorAccountEntity currentInvestorAccount = currentSettlement.getInvestorAccount();
        ParticipantAccountEntity currentParticipantAccount = currentSettlement.getParticipantAccount();

        InvestorAccountEntity newInvestorAccount = assignmentInDto.getInvestorAccountId() != null
                ? investorAccountRepository.findById(assignmentInDto.getInvestorAccountId()).orElse(null)
                : null;
        ParticipantAccountEntity newParticipantAccount = assignmentInDto.getParticipantAccountId() != null
                ? participantAccountRepository.findById(assignmentInDto.getParticipantAccountId()).orElse(null)
                : null;

        SettlementCorrectionEntity inicialRecord = SettlementCorrectionEntity.builder()
                .settlement(currentSettlement)
                .trade(tradeEntity)
                .fraction(currentSettlement.getFraction())
                .side(sideEntity)
                .requestDate(requestDate)
                .requestTime(requestTime)
                .processType(processType)
                .investorAccount(currentInvestorAccount)
                .participantAccount(currentParticipantAccount)
                .reassignmentType(reassignmentTypeInicial)
                .detail("")
                .lastModifyUser(lastModifyUser)
                .lastModifyApplication(lastModifyApplic)
                .lastModifyDate(lastModifyDate)
                .lastModifyIp(lastModifyIp)
                .correctionNumber(correctionNumber)
                .clearingDate(tradeEntity.getClearingDate())
                .commissionPercentage(currentSettlement.getCommissionPercentage())
                .reference(currentSettlement.getReference())
                .fractionQuantity(currentSettlement.getFractionQuantity())
                .sourceQuoteType(currentSettlement.getSourceQuoteType())
                .status(status)
                .build();

        settlementCorrectionRepository.save(inicialRecord);
        log.debug("Saved INICIAL settlement correction record with id: {}", inicialRecord.getId());

        // Para el registro ACTUAL, si la fracción es null (nueva), usar la de la
        // fracción extranjera original
        Integer actualFraction = assignmentInDto.getFraction() != null
                ? assignmentInDto.getFraction()
                : currentSettlement.getFraction();

        SettlementCorrectionEntity actualRecord = SettlementCorrectionEntity.builder()
                .settlement(currentSettlement)
                .trade(tradeEntity)
                .fraction(actualFraction)
                .side(sideEntity)
                .requestDate(requestDate)
                .requestTime(requestTime)
                .processType(processType)
                .investorAccount(newInvestorAccount)
                .participantAccount(newParticipantAccount)
                .reassignmentType(reassignmentTypeActual)
                .detail("")
                .lastModifyUser(lastModifyUser)
                .lastModifyApplication(lastModifyApplic)
                .lastModifyDate(lastModifyDate)
                .lastModifyIp(lastModifyIp)
                .correctionNumber(correctionNumber)
                .clearingDate(tradeEntity.getClearingDate())
                .commissionPercentage(assignmentInDto.getCommissionPercentage())
                .reference(assignmentInDto.getReference())
                .fractionQuantity(assignmentInDto.getFractionQuantity())
                .status(status)
                .sourceQuoteType(newSourceQuoteType)
                .build();

        settlementCorrectionRepository.save(actualRecord);
        log.debug("Saved ACTUAL settlement correction record with id: {}", actualRecord.getId());

        log.info("Correction tracked with number: {} (INICIAL id: {}, ACTUAL id: {})",
                correctionNumber, inicialRecord.getId(), actualRecord.getId());

        return new SettlementCorrection(correctionNumber, List.of(inicialRecord.getId(), actualRecord.getId()));
    }

    @Override
    public void validateCorrectionByType(CorrectionTypeEnum correctionType, SettlementEntity currentSettlement,
            AssignmentInDto assignmentInDto) {

        log.info("Validating correction by type: {}", correctionType);

        if (correctionType == CorrectionTypeEnum.LOCAL) {
            validateLocalCorrection(currentSettlement, assignmentInDto);
        } else {
            validateExternalCorrection(currentSettlement, assignmentInDto);
        }
    }

    /**
     * Valida corrección LOCAL según RTBOF-7767.
     *
     * Reglas:
     * - Cantidad NO puede modificarse
     * - SÍ puede cambiar: cuenta títulos, % comisión, referencia
     * - Debe haber al menos un cambio
     * - No se permite cuenta master en el resultado
     */
    private void validateLocalCorrection(SettlementEntity currentSettlement, AssignmentInDto assignmentInDto) {
        log.info("Validating LOCAL correction for fraction: {}", currentSettlement.getFraction());

        if (assignmentInDto.getFractionQuantity() != null) {
            BigDecimal currentQuantity = currentSettlement.getFractionQuantity();
            BigDecimal newQuantity = assignmentInDto.getFractionQuantity();

            if (currentQuantity != null && newQuantity.compareTo(currentQuantity) != 0) {
                log.warn("LOCAL correction: Quantity modification not allowed. Current: {}, New: {}",
                        currentQuantity, newQuantity);
                throw new ServiceException(ErrorCode.LOCAL_CORRECTION_QUANTITY_CHANGE_NOT_ALLOWED,
                        HttpStatus.BAD_REQUEST);
            }
        }

        boolean hasAccountChange = hasAccountChange(currentSettlement, assignmentInDto);

        // Validar que no sea cuenta master
        if (assignmentInDto.getParticipantAccountId() != null) {
            ParticipantAccountEntity participantAccount = participantAccountRepository
                    .findById(assignmentInDto.getParticipantAccountId())
                    .orElseThrow(() -> new ServiceException(
                            ErrorCode.PARTICIPANT_ACCOUNT_NOT_FOUND,
                            HttpStatus.BAD_REQUEST));

            if (participantAccount.getIndMaster()) {
                log.error("LOCAL correction: Master account {} not allowed in corrections",
                        participantAccount.getId());
                throw new ServiceException(
                        ErrorCode.CORRECTION_MASTER_ACCOUNT_NOT_ALLOWED,
                        HttpStatus.BAD_REQUEST);
            }

            log.debug("Participant account {} validated successfully (not master)",
                    participantAccount.getId());
        }

        boolean hasCommissionChange = hasBigDecimalChange(
                currentSettlement.getCommissionPercentage(),
                assignmentInDto.getCommissionPercentage());
        boolean hasReferenceChange = !Objects.equals(
                currentSettlement.getReference(),
                assignmentInDto.getReference());

        if (!hasAccountChange && !hasCommissionChange && !hasReferenceChange) {
            log.warn("LOCAL correction: No changes detected for fraction: {}", currentSettlement.getFraction());
            throw new ServiceException(ErrorCode.CORRECTION_NO_CHANGES_DETECTED, HttpStatus.BAD_REQUEST);
        }

        log.info("LOCAL correction validation passed. Account change: {}, Commission change: {}, Reference change: {}",
                hasAccountChange, hasCommissionChange, hasReferenceChange);

    }

    /**
     * Valida corrección EXTRANJERA según RTBOF-9592.
     *
     * Reglas:
     * - Cantidad SÍ puede modificarse (solo fracciones con cuenta master)
     * - SÍ puede cambiar: cuenta títulos, % comisión, referencia, cantidad
     * - Debe cambiar cuenta master a cuenta inversionista
     * - No se permite cuenta master en el resultado
     */
    private void validateExternalCorrection(SettlementEntity currentSettlement, AssignmentInDto assignmentInDto) {
        log.info("Validating EXTERNAL correction for fraction: {}", currentSettlement.getFraction());

        boolean hasAccountChange = hasAccountChange(currentSettlement, assignmentInDto);
        boolean hasCommissionChange = hasBigDecimalChange(
                currentSettlement.getCommissionPercentage(),
                assignmentInDto.getCommissionPercentage());
        boolean hasReferenceChange = !Objects.equals(
                currentSettlement.getReference(),
                assignmentInDto.getReference());

        boolean hasQuantityChange = hasQuantityChange(currentSettlement, assignmentInDto);

        if (!hasAccountChange && !hasCommissionChange && !hasReferenceChange && !hasQuantityChange) {
            log.warn("EXTERNAL correction: No changes detected for fraction: {}", currentSettlement.getFraction());
            throw new ServiceException(ErrorCode.CORRECTION_NO_CHANGES_DETECTED, HttpStatus.BAD_REQUEST);
        }

        log.info("EXTERNAL correction validation passed. Account: {}, Commission: {}, Reference: {}, Quantity: {}",
                hasAccountChange, hasCommissionChange, hasReferenceChange, hasQuantityChange);
    }

    @Override
    public boolean hasAnyChange(SettlementEntity currentSettlement, AssignmentInDto assignmentInDto) {
        boolean hasAccountChange = hasAccountChange(currentSettlement, assignmentInDto);
        boolean hasCommissionChange = hasBigDecimalChange(
                currentSettlement.getCommissionPercentage(),
                assignmentInDto.getCommissionPercentage());
        boolean hasReferenceChange = !Objects.equals(
                currentSettlement.getReference(),
                assignmentInDto.getReference());
        boolean hasQuantityChange = hasQuantityChange(currentSettlement, assignmentInDto);

        boolean hasChanges = hasAccountChange
                || hasCommissionChange
                || hasReferenceChange
                || hasQuantityChange;

        log.debug(
                "Change detection for fraction {}: account={}, commission={}, reference={}, quantity={} -> hasChanges={}",
                currentSettlement.getFraction(), hasAccountChange, hasCommissionChange,
                hasReferenceChange, hasQuantityChange, hasChanges);

        return hasChanges;
    }

    private boolean hasBigDecimalChange(BigDecimal currentValue, BigDecimal newValue) {
        if (currentValue == null && newValue == null) {
            return false;
        }

        if (currentValue == null || newValue == null) {
            return true;
        }

        return currentValue.compareTo(newValue) != 0;
    }

    private boolean hasAccountChange(SettlementEntity currentSettlement, AssignmentInDto assignmentInDto) {
        String currentAccountId = getCurrentAccountNumber(currentSettlement);
        String newAccountId = getNewAccountNumber(assignmentInDto);
        return !Objects.equals(currentAccountId, newAccountId);
    }

    private boolean hasQuantityChange(SettlementEntity currentSettlement, AssignmentInDto assignmentInDto) {
        if (assignmentInDto.getFractionQuantity() == null) {
            return false;
        }
        BigDecimal currentQuantity = currentSettlement.getFractionQuantity();
        BigDecimal newQuantity = assignmentInDto.getFractionQuantity();
        return currentQuantity != null && newQuantity.compareTo(currentQuantity) != 0;
    }

    private String getCurrentAccountNumber(SettlementEntity settlement) {
        if (settlement.getInvestorAccount() != null) {
            return settlement.getInvestorAccount().getAccountNumber();
        } else if (settlement.getParticipantAccount() != null) {
            return settlement.getParticipantAccount().getAccountNumber();
        }
        return null;
    }

    private String getNewAccountNumber(AssignmentInDto assignmentInDto) {
        if (assignmentInDto.getInvestorAccountId() != null) {
            InvestorAccountEntity investorAccount = investorAccountRepository.findById(assignmentInDto.getInvestorAccountId()).orElseThrow(() -> new ServiceException(
                    ErrorCode.INVESTOR_ACCOUNT_NOT_FOUND, HttpStatus.BAD_REQUEST));
            return investorAccount.getAccountNumber();

        } else if (assignmentInDto.getParticipantAccountId() != null) {
            ParticipantAccountEntity participantAccount = participantAccountRepository.findById(assignmentInDto.getParticipantAccountId()).orElseThrow(() -> new ServiceException(
                    ErrorCode.PARTICIPANT_ACCOUNT_NOT_FOUND, HttpStatus.BAD_REQUEST));
            return participantAccount.getAccountNumber();
        }
        return null;
    }

    /**
     * Valida que no haya fracciones custodiadas.
     * Según ambos tickets: "No se podrá realizar correcciones a puntas con alguna
     * de las fracciones custodiadas"
     */
    @Override
    public void validateNoCustodiadaFractions(List<SettlementEntity> settlements) {
        log.info("Validating no custodiada fractions for {} settlements", settlements.size());

        for (SettlementEntity settlement : settlements) {
            if (settlement.getCustodianStatus() != null) {
                log.warn("Correction not allowed: Fraction {} has custodian status", settlement.getFraction());
                throw new ServiceException(ErrorCode.CORRECTION_FRACTION_CUSTODIADA_NOT_ALLOWED,
                        HttpStatus.BAD_REQUEST);
            }
        }

        log.info("Custodiada validation passed");
    }

    /**
     * Determina si la corrección debe enviarse a Deceval.
     * Según ambos tickets: "Siempre que se modifique la cuenta títulos en el
     * proceso
     * de corrección local o extranjera deberá enviarse a Deceval"
     * "Si no se modifica la cuenta títulos no será necesario el envío a Deceval,
     * la información será actualizada en nubo"
     */
    @Override
    public boolean requiresDecevalSubmission(SettlementEntity currentSettlement, AssignmentInDto assignmentInDto) {
        boolean accountChanged = hasAccountChange(currentSettlement, assignmentInDto);

        log.info("Deceval submission required: {} (account changed: {})",
                accountChanged, accountChanged);

        return accountChanged;
    }

    @Override
    public boolean isCommissionOrReferenceOnlyCorrection(SettlementEntity currentSettlement,
            AssignmentInDto assignmentInDto) {
        Long investorAccountId = currentSettlement.getInvestorAccount() == null
                ? null : currentSettlement.getInvestorAccount().getId();
        Long participantAccountId = currentSettlement.getParticipantAccount() == null
                ? null : currentSettlement.getParticipantAccount().getId();
        Long sourceQuoteTypeId = currentSettlement.getSourceQuoteType() == null
                ? null : currentSettlement.getSourceQuoteType().getId();

        return Objects.equals(investorAccountId, assignmentInDto.getInvestorAccountId())
                && Objects.equals(participantAccountId, assignmentInDto.getParticipantAccountId())
                && !hasBigDecimalChange(currentSettlement.getFractionQuantity(), assignmentInDto.getFractionQuantity())
                && Objects.equals(sourceQuoteTypeId, assignmentInDto.getSourceQuoteTypeId())
                && (hasBigDecimalChange(currentSettlement.getCommissionPercentage(), assignmentInDto.getCommissionPercentage())
                        || !Objects.equals(currentSettlement.getReference(), assignmentInDto.getReference()));
    }

    @Override
    @Transactional
    public void acceptLocalCorrection(CorrectionData correctionData) {
        SettlementEntity settlement = correctionData.currentSettlement();
        AssignmentInDto assignment = correctionData.assignmentInDto();
        StatusEntity accepted = statusRepository.findById(StatusEnum.REASSIGNMENT_CORRECTION_ACCEPTED.getId())
                .orElseThrow(() -> new ServiceException(ErrorCode.STATUS_NOT_FOUND, HttpStatus.NOT_FOUND));

        if (hasBigDecimalChange(settlement.getCommissionPercentage(), assignment.getCommissionPercentage())) {
            SettleAccountsInDto calculation = SettleAccountsInDto.builder()
                    .quantity(settlement.getFractionQuantity())
                    .price(settlement.getTrade().getPrice())
                    .commission(assignment.getCommissionPercentage())
                    .valTax(settlement.getValTax())
                    .sideId(settlement.getSide().getId())
                    .typeId(settlement.getTrade().getType() == null ? null : settlement.getTrade().getType().getId())
                    .build();
            SettleAccountsOutDto amounts = operationCalculationClient.getSettleAccounts(calculation);
            settlement.setCommissionPercentage(assignment.getCommissionPercentage());
            settlement.setCommissionAmount(amounts.getCommissionAmount());
            settlement.setValTaxAmount(amounts.getValTaxAmount());
            settlement.setNetAmount(amounts.getNetAmount());
            settlement.setSettlementAmount(amounts.getTransferValue());
            settlement.setTransferValue(amounts.getTransferValue());
        }
        settlement.setReference(assignment.getReference());
        settlement.setStatus(accepted);
        settlement.setLastModifyUser(PropertiesContext.getClientUser());
        settlement.setLastModifyApplication(propertiesConfig.getApiName());
        settlement.setLastModifyDate(PropertiesContext.getClientDatetime());
        settlement.setLastModifyIp(PropertiesContext.getClientIp());

        List<SettlementCorrectionEntity> history = settlementCorrectionRepository
                .findAllById(correctionData.settlementCorrection().settlementCorrectionIds());
        history.forEach(record -> {
            record.setStatus(accepted);
            record.setLastModifyUser(PropertiesContext.getClientUser());
            record.setLastModifyApplication(propertiesConfig.getApiName());
            record.setLastModifyDate(PropertiesContext.getClientDatetime());
            record.setLastModifyIp(PropertiesContext.getClientIp());
        });
        settlementCorrectionRepository.saveAll(history);
        log.info("Accepted local correction {} for trade {}, side {}, fraction {} without SIIDJ submission",
                correctionData.settlementCorrection().correctionNumber(), settlement.getTrade().getId(),
                settlement.getSide().getId(), settlement.getFraction());
    }

    /**
     * Determina si la corrección debe tener cobro.
     *
     * LOCAL (RTBOF-7767): "Todas las correcciones locales deberán tener un cobro"
     * EXTERNAL (RTBOF-9592): "La corrección extranjera no tiene costo. Solo se
     * dejará
     * de cobrar la primera corrección, a partir de la segunda ya se genera el cobro
     * normal"
     */
    @Override
    public boolean requiresCharge(CorrectionTypeEnum correctionType, Long tradeId, String sideId, Integer fraction) {
        log.info("Checking if charge is required for type: {}, trade: {}, side: {}, fraction: {}",
                correctionType, tradeId, sideId, fraction);

        boolean isBuySide = SideEnum.BUY.getId().equalsIgnoreCase(sideId);

        CorrectionStatusEnum correctionStatus;
        boolean requiresCharge;

        if (correctionType == CorrectionTypeEnum.LOCAL) {
            correctionStatus = isBuySide
                    ? CorrectionStatusEnum.ACCEPT_BUY_CORRECTION
                    : CorrectionStatusEnum.ACCEPT_SELL_CORRECTION;
            requiresCharge = true;
        } else {
            long previousCorrectionsCount = settlementCorrectionRepository.countByTradeIdAndSideIdAndFraction(
                    tradeId, sideId, fraction);

            if (previousCorrectionsCount == 0) {
                correctionStatus = isBuySide
                        ? CorrectionStatusEnum.ACCEPT_NO_CHARGE_BUY_CORRECTION
                        : CorrectionStatusEnum.ACCEPT_NO_CHARGE_SELL_CORRECTION;
                requiresCharge = false;
            } else {
                correctionStatus = isBuySide
                        ? CorrectionStatusEnum.ACCEPT_BUY_CORRECTION
                        : CorrectionStatusEnum.ACCEPT_SELL_CORRECTION;
                requiresCharge = true;
            }
        }

        // TODO: Aquí se ejecutará la lógica de cobro usando correctionStatus.getId()
        // para construir la URL: /correction/{correctionStatusId}
        log.info("Correction status: {} (id={}), requires charge: {}",
                correctionStatus, correctionStatus.getId(), requiresCharge);

        return requiresCharge;
    }

    /**
     * Valida que las fracciones del request existan en los settlements actuales.
     * Una misma fracción puede aparecer múltiples veces en el request (para
     * dividirla).
     * Solo valida que cada fracción referenciada exista.
     */
    @Override
    public void validateFractionsMatch(List<SettlementEntity> currentSettlements,
            List<AssignmentInDto> assignmentInDtoList) {
        log.info("Validating fractions exist. Current settlements: {}, Request assignments: {}",
                currentSettlements.size(), assignmentInDtoList.size());

        Set<Integer> currentFractions = currentSettlements.stream()
                .map(SettlementEntity::getFraction)
                .collect(Collectors.toSet());
        for (AssignmentInDto assignment : assignmentInDtoList) {
            if (!currentFractions.contains(assignment.getFraction())) {
                log.warn("Fraction {} in request does not exist in current settlements", assignment.getFraction());
                throw new ServiceException(ErrorCode.CORRECTION_FRACTION_NOT_FOUND,
                        "La fracción " + assignment.getFraction() + " no existe en la punta actual",
                        HttpStatus.BAD_REQUEST);
            }
        }

        log.info("Fractions existence validation passed");
    }

    /**
     * Valida que la suma de cantidades de las correcciones para cada fracción sea
     * igual
     * a la cantidad original de esa fracción.
     *
     * Ejemplo: Si fracción 0 tiene 100 unidades, el request puede tener:
     * [{fraction: 0, cantidad: 50}, {fraction: 0, cantidad: 50}]
     * La suma (50+50=100) debe ser igual a la cantidad original (100).
     */
    @Override
    public void validateQuantitySum(List<SettlementEntity> currentSettlements,
            List<AssignmentInDto> assignmentInDtoList) {
        log.info("Validating quantity sum per fraction for {} settlements and {} assignments",
                currentSettlements.size(), assignmentInDtoList.size());

        // Solo validar fracciones existentes (fraction != null)
        List<AssignmentInDto> existingFractions = assignmentInDtoList.stream()
                .filter(a -> a.getFraction() != null)
                .toList();

        if (existingFractions.isEmpty()) {
            log.info("No existing fractions to validate quantity sum");
            return;
        }

        Map<Integer, BigDecimal> originalQuantityByFraction = currentSettlements.stream()
                .collect(Collectors.toMap(
                        SettlementEntity::getFraction,
                        s -> s.getFractionQuantity() != null ? s.getFractionQuantity() : BigDecimal.ZERO));

        Map<Integer, BigDecimal> requestQuantityByFraction = existingFractions.stream()
                .collect(Collectors.groupingBy(
                        AssignmentInDto::getFraction,
                        Collectors.reducing(
                                BigDecimal.ZERO,
                                a -> a.getFractionQuantity() != null ? a.getFractionQuantity() : BigDecimal.ZERO,
                                BigDecimal::add)));

        for (Map.Entry<Integer, BigDecimal> entry : requestQuantityByFraction.entrySet()) {
            Integer fraction = entry.getKey();
            BigDecimal requestSum = entry.getValue();
            BigDecimal originalQuantity = originalQuantityByFraction.get(fraction);

            log.info("Fraction {}: Original quantity = {}, Request sum = {}",
                    fraction, originalQuantity, requestSum);

            if (originalQuantity == null) {
                continue;
            }

            // Obtener el settlement para verificar si es extranjera
            SettlementEntity settlement = currentSettlements.stream()
                    .filter(s -> s.getFraction().equals(fraction))
                    .findFirst()
                    .orElse(null);

            // Si es fracción extranjera, NO validar aquí (se valida en
            // validateExternalFractionDivision)
            if (settlement != null && Boolean.TRUE.equals(settlement.getIndMaster())) {
                log.info("Skipping quantity validation for external fraction {}", fraction);
                continue;
            }

            // Para fracciones locales, la cantidad NO puede cambiar
            if (originalQuantity.compareTo(requestSum) != 0) {
                log.warn("Quantity sum mismatch for LOCAL fraction {}. Original: {}, Request sum: {}",
                        fraction, originalQuantity, requestSum);
                throw new ServiceException(ErrorCode.CORRECTION_QUANTITY_SUM_MISMATCH,
                        String.format(
                                "La suma de cantidades (%s) para la fracción %d no coincide con el total original (%s)",
                                requestSum, fraction, originalQuantity),
                        HttpStatus.BAD_REQUEST);
            }
        }

        log.info("Quantity sum validation passed for all fractions");
    }

    @Override
    public SettlementEntity findExternalFraction(List<SettlementEntity> settlements) {
        return settlements.stream()
                .filter(s -> Boolean.TRUE.equals(s.getIndMaster()))
                .findFirst()
                .orElse(null);
    }

    @Override
    public void validateExternalFractionDivision(List<SettlementEntity> currentSettlements,
            List<AssignmentInDto> newFractions, List<AssignmentInDto> existingFractions,
            SettlementEntity externalFraction) {

        log.info("Validating external fraction division. New fractions: {}, Existing fractions: {}",
                newFractions.size(), existingFractions.size());

        if (newFractions.isEmpty()) {
            log.info("No new fractions to validate for external division");
            return;
        }

        // Validar que exista una fracción extranjera
        if (externalFraction == null) {
            log.warn("New fractions found but no external fraction exists");
            throw new ServiceException(ErrorCode.EXTERNAL_FRACTION_NOT_FOUND,
                    "Se encontraron fracciones nuevas pero no existe una fracción extranjera (indMaster=true)",
                    HttpStatus.BAD_REQUEST);
        }

        BigDecimal originalExternalQuantity = externalFraction.getFractionQuantity() != null
                ? externalFraction.getFractionQuantity()
                : BigDecimal.ZERO;

        // Suma de cantidades de fracciones nuevas
        BigDecimal newFractionsSum = newFractions.stream()
                .map(a -> a.getFractionQuantity() != null ? a.getFractionQuantity() : BigDecimal.ZERO)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        // Buscar si la fracción extranjera viene modificada en el request
        BigDecimal modifiedExternalQuantity = existingFractions.stream()
                .filter(a -> a.getFraction().equals(externalFraction.getFraction()))
                .map(a -> a.getFractionQuantity() != null ? a.getFractionQuantity() : BigDecimal.ZERO)
                .findFirst()
                .orElse(BigDecimal.ZERO);

        BigDecimal totalRequestQuantity = newFractionsSum.add(modifiedExternalQuantity);

        log.info(
                "External fraction division validation: originalQuantity={}, newFractionsSum={}, modifiedExternalQuantity={}, totalRequest={}",
                originalExternalQuantity, newFractionsSum, modifiedExternalQuantity, totalRequestQuantity);

        if (originalExternalQuantity.compareTo(totalRequestQuantity) != 0) {
            log.warn("External fraction division mismatch. Original: {}, Total request: {}",
                    originalExternalQuantity, totalRequestQuantity);
            throw new ServiceException(ErrorCode.EXTERNAL_FRACTION_DIVISION_MISMATCH,
                    String.format(
                            "La suma de cantidades de las fracciones nuevas (%s) + modificada (%s) = %s no coincide con la cantidad original de la fracción extranjera (%s)",
                            newFractionsSum, modifiedExternalQuantity, totalRequestQuantity, originalExternalQuantity),
                    HttpStatus.BAD_REQUEST);
        }

        log.info("External fraction division validation passed");
    }

    @Override
    public Long generateCorrectionNumber(Integer fraction, String sideId) {
        long timestamp = System.currentTimeMillis();

        int fractionValue = fraction != null ? fraction : 0;

        String formattedNumber = String.format("%d%02d", timestamp, fractionValue);
        Long correctionNumber = Long.parseLong(formattedNumber);

        log.info("Generated correctionNumber: {} (timestamp={}, fraction={}, sideId={})",
                correctionNumber, timestamp, fractionValue, sideId);

        return correctionNumber;
    }

    @Override
    public void publishCorrectionsToKafka(TradeEntity tradeEntity, SideEntity sideEntity,
            List<CorrectionData> correctionDataList, SettlementEntity externalFraction) {
        log.info("Publishing {} corrections for trade: {}, side: {}, to Kafka",
                correctionDataList.size(), tradeEntity.getId(), sideEntity.getId());

        CorrectionRequestInDto correctionRequest = buildCorrectionRequest(
                tradeEntity, sideEntity, correctionDataList, externalFraction);
        String key = tradeEntity.getId() + "-" + sideEntity.getId();
        kafkaNuboAdapterProducer.sendMessageCorrectionRequestSync(key, correctionRequest);
    }

    private CorrectionRequestInDto buildCorrectionRequest(TradeEntity tradeEntity, SideEntity sideEntity,
            List<CorrectionData> corrections, SettlementEntity externalFraction) {
        SecurityTitleEntity securityTitleEntity = tradeEntity.getSecurityTitle();

        CorrectionTypeEnum predominantType = corrections.stream()
                .map(CorrectionData::correctionType)
                .filter(t -> t == CorrectionTypeEnum.EXTERNAL)
                .findFirst()
                .orElse(CorrectionTypeEnum.LOCAL);

        var correctionTypeEntity = typeRepository.findById(predominantType.getId()).orElse(null);

        List<CorrectionFractionInDto> fractionDtos = corrections.stream()
                .map(c -> buildCorrectionFraction(c, sideEntity, externalFraction))
                .toList();

        return CorrectionRequestInDto.builder()
                .tradeId(tradeEntity.getId())
                .side(sideEntity == null ? null
                        : SideInDto.builder()
                                .id(sideEntity.getId())
                                .name(sideEntity.getDescription())
                                .build())
                .matchId(tradeEntity.getMatchId())
                .matchDate(tradeEntity.getMatchDate())
                .clearingDate(tradeEntity.getClearingDate())
                .returnClearingDate(tradeEntity.getReturnClearingDate())
                .type(MapperUtil.typeEntityToTypeInDto(tradeEntity.getType()))
                .isFractional(SideEnum.BUY.getId().equalsIgnoreCase(sideEntity.getId())
                        ? tradeEntity.getFractionalMarkBuy()
                        : tradeEntity.getFractionalMarkSell())
                .country(MapperUtil.countryEntityToCountryInDto(tradeEntity.getCountry()))
                .mnemonic(securityTitleEntity != null ? securityTitleEntity.getMnemonic() : null)
                .isin(securityTitleEntity != null ? securityTitleEntity.getIsin() : null)
                .depository(SideEnum.BUY.getId().equalsIgnoreCase(sideEntity.getId())
                        ? MapperUtil.depositoryEntityToDepositoryInDto(tradeEntity.getDepositoryBuy())
                        : MapperUtil.depositoryEntityToDepositoryInDto(tradeEntity.getDepositorySell()))
                .isNuboAllocation(Boolean.TRUE)
                .fractions(fractionDtos)
                .correctionType(MapperUtil.typeEntityToTypeInDto(correctionTypeEntity))
                .isCorrection(Boolean.TRUE)
                .clientUser(PropertiesContext.getClientUser())
                .clientIp(PropertiesContext.getClientIp())
                .build();
    }

    private CorrectionFractionInDto buildCorrectionFraction(CorrectionData correctionData, SideEntity sideEntity,
            SettlementEntity externalFraction) {

        AssignmentInDto assignment = correctionData.assignmentInDto();
        SettlementEntity currentSettlement = correctionData.currentSettlement();
        boolean isNewFraction = correctionData.isNewFraction();

        InvestorAccountEntity newInvestorAccount = assignment.getInvestorAccountId() != null
                ? investorAccountRepository.findById(assignment.getInvestorAccountId()).orElse(null)
                : null;

        ParticipantAccountEntity newParticipantAccount = assignment.getParticipantAccountId() != null
                ? participantAccountRepository.findById(assignment.getParticipantAccountId()).orElse(null)
                : null;

        Integer originalFraction = isNewFraction ? currentSettlement.getFraction() : null;
        Integer fraction = isNewFraction ? null : assignment.getFraction();

        return CorrectionFractionInDto.builder()
                .side(SideInDto.builder()
                        .id(sideEntity.getId())
                        .name(sideEntity.getDescription())
                        .build())
                .fraction(fraction)
                .quantity(assignment.getFractionQuantity())
                .investorAccount(MapperUtil.investorAccountEntityToInvestorAccountInDto(newInvestorAccount))
                .participantAccount(MapperUtil.participantAccountEntityToParticipantAccountInDto(newParticipantAccount))
                .investor(newInvestorAccount != null
                        ? MapperUtil.investorEntityToInvestorInDto(newInvestorAccount.getInvestor())
                        : null)
                .participantBankAccount(MapperUtil.participantBankAccountEntityToParticipantBankAccountInDto(
                        currentSettlement.getParticipantBankAccount()))
                .cashAccount(assignment.getCashAccount())
                .custodian(MapperUtil.participantEntityToParticipantInDto(currentSettlement.getCustodian()))
                .ficAdministrator(
                        MapperUtil.participantEntityToParticipantInDto(currentSettlement.getFicAdministrator()))
                .directDepositor(MapperUtil
                        .directDepositoryEntityToDirectDepositoryInDto(currentSettlement.getDirectDepositor()))
                .reference(assignment.getReference())
                .correctionNumber(correctionData.settlementCorrection().correctionNumber())
                .originalFraction(originalFraction)
                .isNewFraction(isNewFraction)
                .commissionPercentage(assignment.getCommissionPercentage())
                .operationRegistrationDate(LocalDate.now())
                .sendDeposit(correctionData.sendDeposit())
                .settlementCorrectionIds(correctionData.settlementCorrection() != null
                        ? correctionData.settlementCorrection().settlementCorrectionIds()
                        : List.of())
                .build();
    }

    private TypeEntity findTypeEntity(Long typeId) {
        return typeRepository.findById(typeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TYPE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }
}

```

## src/main/java/com/nubo/operations/cmd/api/service/impl/FractionationBatchServiceImpl.java

```java
package com.nubo.operations.cmd.api.service.impl;

import static com.nubo.operations.cmd.api.helpers.CountedFractionHelper.taskMillis;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StopWatch;

import com.nubo.operations.cmd.api.application.properties.PropertiesConfig;
import com.nubo.operations.cmd.api.application.properties.PropertiesContext;
import com.nubo.operations.cmd.api.client.operation.fractionation.models.dto.request.BatchAssignmentClientInDto;
import com.nubo.operations.cmd.api.client.operation.fractionation.models.dto.request.BatchAssignmentItemClientInDto;
import com.nubo.operations.cmd.api.client.operation.fractionation.models.dto.request.FractionClientInDto;
import com.nubo.operations.cmd.api.client.operation.fractionation.models.dto.response.BatchAssignmentClientOutDto;
import com.nubo.operations.cmd.api.client.operation.fractionation.service.OperationFractionationClient;
import com.nubo.operations.cmd.api.client.operation.rules.models.dto.response.ActionOutDto;
import com.nubo.operations.cmd.api.client.operation.rules.models.dto.response.BusinessRuleOutDto;
import com.nubo.operations.cmd.api.client.operation.rules.service.OperationBusinessRuleClient;
import com.nubo.operations.cmd.api.exception.ClientException;
import com.nubo.operations.cmd.api.exception.ServiceException;
import com.nubo.operations.cmd.api.exception.error.ErrorCode;
import com.nubo.operations.cmd.api.helpers.CountedFractionHelper;
import com.nubo.operations.cmd.api.models.context.AccountLookupContext;
import com.nubo.operations.cmd.api.models.context.AccountValidationKey;
import com.nubo.operations.cmd.api.models.context.AssignmentParticipantContext;
import com.nubo.operations.cmd.api.models.context.AssignmentTradeContext;
import com.nubo.operations.cmd.api.models.context.ProtectedFractionState;
import com.nubo.operations.cmd.api.models.dto.request.BatchAssignmentInDto;
import com.nubo.operations.cmd.api.models.dto.request.BatchAssignmentItemInDto;
import com.nubo.operations.cmd.api.models.dto.request.BatchAssignmentValidationFractionInDto;
import com.nubo.operations.cmd.api.models.dto.request.BatchAssignmentValidationInDto;
import com.nubo.operations.cmd.api.models.dto.request.BatchAssignmentValidationItemInDto;
import com.nubo.operations.cmd.api.models.dto.request.BatchPreparedFractionInDto;
import com.nubo.operations.cmd.api.models.dto.request.FractionRuleInDto;
import com.nubo.operations.cmd.api.models.dto.response.BatchAssignmentItemOutDto;
import com.nubo.operations.cmd.api.models.dto.response.BatchAssignmentOutDto;
import com.nubo.operations.cmd.api.models.dto.response.BatchAssignmentValidationItemOutDto;
import com.nubo.operations.cmd.api.models.dto.response.BatchAssignmentValidationOutDto;
import com.nubo.operations.cmd.api.models.dto.response.FractionAccountOutDto;
import com.nubo.operations.cmd.api.models.dto.response.ParticipantBankAccountOutDto;
import com.nubo.operations.cmd.api.models.entity.InvestorAccountEntity;
import com.nubo.operations.cmd.api.models.entity.ParticipantAccountEntity;
import com.nubo.operations.cmd.api.models.entity.ParticipantEntity;
import com.nubo.operations.cmd.api.models.entity.SettlementEntity;
import com.nubo.operations.cmd.api.models.entity.SideEntity;
import com.nubo.operations.cmd.api.models.entity.TaxesEntity;
import com.nubo.operations.cmd.api.models.entity.TradeEntity;
import com.nubo.operations.cmd.api.models.entity.TypeEntity;
import com.nubo.operations.cmd.api.models.entity.TypeMappingEntity;
import com.nubo.operations.cmd.api.models.enums.BusinessRuleEnum;
import com.nubo.operations.cmd.api.models.enums.CountryEnum;
import com.nubo.operations.cmd.api.models.enums.DirectAllocationEnum;
import com.nubo.operations.cmd.api.models.enums.SideEnum;
import com.nubo.operations.cmd.api.models.enums.TaxesEnum;
import com.nubo.operations.cmd.api.models.enums.TypeEnum;
import com.nubo.operations.cmd.api.models.enums.TypeMappingEnum;
import com.nubo.operations.cmd.api.repository.ParticipantRepository;
import com.nubo.operations.cmd.api.repository.SettlementRepository;
import com.nubo.operations.cmd.api.repository.TaxesRepository;
import com.nubo.operations.cmd.api.repository.TradeRepository;
import com.nubo.operations.cmd.api.repository.TypeMappingRepository;
import com.nubo.operations.cmd.api.repository.projection.AssignmentTradeView;
import com.nubo.operations.cmd.api.service.BatchCacheService;
import com.nubo.operations.cmd.api.service.FractionationBatchService;
import com.nubo.operations.cmd.api.service.ValidateCountedFractionService;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class FractionationBatchServiceImpl implements FractionationBatchService {

    private final TradeRepository tradeRepository;
    private final OperationFractionationClient operationFractionationClient;
    private final ValidateCountedFractionService validateCountedFractionService;
    private final SettlementRepository settlementRepository;
    private final OperationBusinessRuleClient operationBusinessRuleClient;
    private final TaxesRepository taxesRepository;
    private final PropertiesConfig propertiesConfig;
    private final BatchCacheService batchCacheService;
    private final ParticipantRepository participantRepository;
    private final TypeMappingRepository typeMappingRepository;
    private final CountedFractionHelper countedFractionHelper;

    private static int maxBatchSize;

    @PostConstruct
    void logAssignmentConfiguration() {
        maxBatchSize = propertiesConfig.getMaxBatchSize();
        log.info("PERF_ASSIGNMENT_CONFIG service=cmd podName={} batchProcessingSize={}",
                System.getenv().getOrDefault("HOSTNAME", "unknown"), maxBatchSize);
    }

    @Override
    public BatchAssignmentOutDto processBatch(BatchAssignmentInDto request) {
        validateBatchRequest(request);
        BatchPayloadMode mode = resolveBatchPayloadMode(request.getItems());

        if (mode == BatchPayloadMode.RAW) {
            return processRawBatch(request);
        }

        /*
         * Compatibilidad para callers que ya envíen un batch PREPARED.
         *
         * IMPORTANTE:
         * esta ruta sí vuelve a ejecutar las reglas CMD porque el payload
         * proviene del request HTTP y no se debe confiar en flags internos.
         */
        return processPreparedBatch(request);
    }

    /**
     * Hot path utilizado por el proceso masivo.
     * <p>
     * RAW:
     * <p>
     * Orquestador
     * -> CMD /batch
     * -> validateBatch() interno
     * -> valid/invalid por itemId
     * -> sólo valid -> Fracciones /batch
     * -> merge
     * <p>
     * No existe segundo request /batch/validate y no existe validationToken.
     */
    private BatchAssignmentOutDto processRawBatch(BatchAssignmentInDto request) {
        long started = System.nanoTime();

        BatchAssignmentValidationInDto validationRequest = BatchAssignmentValidationInDto.builder()
                .batchId(request.getBatchId())
                .items(request.getItems()
                        .stream()
                        .map(this::toValidationInput)
                        .toList())
                .build();

        BatchAssignmentValidationOutDto validation = validateBatch(validationRequest);

        List<BatchAssignmentValidationItemOutDto> validationItems = validation.getItems() == null
                ? List.of()
                : validation.getItems();

        Map<String, BatchAssignmentValidationItemOutDto> validationById = validationItems.stream()
                .collect(Collectors.toMap(
                        BatchAssignmentValidationItemOutDto::getItemId,
                        item -> item,
                        (first, ignored) -> first,
                        LinkedHashMap::new));

        List<BatchAssignmentItemInDto> validItems = validationItems.stream()
                .filter(item -> Boolean.TRUE.equals(item.getValid()))
                .map(BatchAssignmentValidationItemOutDto::getPreparedItem)
                .filter(Objects::nonNull)
                .toList();

        /*
         * IMPORTANTE:
         *
         * Estos DTO ya fueron validados y enriquecidos DENTRO de este
         * mismo request.
         *
         * Por eso no se ejecuta nuevamente validateCreateFraction().
         */
        BatchAssignmentOutDto processed = validItems.isEmpty()
                ? BatchAssignmentOutDto.builder().batchId(request.getBatchId()).items(List.of()).build()
                : processValidatedBatch(request.getBatchId(), validItems);

        Map<String, BatchAssignmentItemOutDto> processedById = processed.getItems() == null
                ? Map.of()
                : processed.getItems()
                        .stream()
                        .collect(Collectors.toMap(
                                BatchAssignmentItemOutDto::getItemId,
                                item -> item,
                                (first, ignored) -> first,
                                LinkedHashMap::new));

        /*
         * Reconstruimos exactamente la cardinalidad y el orden original.
         */
        List<BatchAssignmentItemOutDto> merged = request.getItems()
                .stream()
                .map(input -> {

                    BatchAssignmentItemOutDto processedResult = processedById.get(input.getItemId());

                    if (processedResult != null) {
                        return processedResult;
                    }

                    BatchAssignmentValidationItemOutDto validationResult = validationById.get(input.getItemId());

                    if (validationResult == null) {
                        return BatchAssignmentItemOutDto.builder()
                                .itemId(input.getItemId())
                                .correlationId(input.getCorrelationId())
                                .topic(input.getTopic())
                                .partition(input.getPartition())
                                .offset(input.getOffset())
                                .key(input.getKey())
                                .tradeId(input.getTradeId())
                                .sideId(input.getSideId())
                                .success(false)
                                .settlements(List.of())
                                .errorCode(ErrorCode.UNEXPECTED.name())
                                .errorMessage("Missing validation result")
                                .build();
                    }

                    BatchAssignmentItemInDto prepared = validationResult.getPreparedItem();

                    return BatchAssignmentItemOutDto.builder()
                            .itemId(input.getItemId())
                            .correlationId(input.getCorrelationId())
                            .topic(input.getTopic())
                            .partition(input.getPartition())
                            .offset(input.getOffset())
                            .key(input.getKey())
                            .tradeId(prepared == null ? null : prepared.getTradeId())
                            .sideId(prepared == null ? input.getSideId() : prepared.getSideId())
                            .success(false)
                            .settlements(List.of())
                            .errorCode(validationResult.getErrorCode())
                            .errorMessage(validationResult.getErrorMessage())
                            .build();
                })
                .toList();

        long successCount = merged.stream()
                .filter(item -> Boolean.TRUE.equals(item.getSuccess()))
                .count();

        log.info(
                "PERF_ASSIGNMENT_BATCH service=cmd batchId={} mode=RAW "
                        + "configuredMaxBatchSize={} receivedBatchSize={} "
                        + "validCount={} invalidCount={} "
                        + "sentToFractionationCount={} "
                        + "successCount={} failureCount={} totalMs={}",
                request.getBatchId(),
                maxBatchSize,
                request.getItems().size(),
                validItems.size(),
                request.getItems().size() - validItems.size(),
                validItems.size(),
                successCount,
                merged.size() - successCount,
                TimeUnit.NANOSECONDS.toMillis(
                        System.nanoTime() - started));

        return BatchAssignmentOutDto.builder()
                .batchId(request.getBatchId())
                .items(merged)
                .build();
    }

    /**
     * Ruta PREPARED.
     * <p>
     * No debe confundirse con el hot path RAW del Orquestador.
     * Aquí el payload viene preparado desde el request y por seguridad
     * debe volver a pasar por las validaciones CMD.
     */
    private BatchAssignmentOutDto processPreparedBatch(BatchAssignmentInDto request) {
        long totalStartNanos = System.nanoTime();
        StopWatch stopWatch = new StopWatch("assignment-cmd-prepared-batch");

        stopWatch.start("prefetch");

        Set<Long> tradeIds = request.getItems()
                .stream()
                .map(BatchAssignmentItemInDto::getTradeId)
                .filter(Objects::nonNull)
                .collect(Collectors.toSet());

        Map<Long, TradeEntity> tradesById = new HashMap<>();

        if (!tradeIds.isEmpty()) {
            tradeRepository.findAllById(tradeIds)
                    .forEach(trade -> tradesById.put(trade.getId(), trade));
        }

        Map<String, SideEntity> sidesById = new HashMap<>();

        request.getItems()
                .stream()
                .map(BatchAssignmentItemInDto::getSideId)
                .filter(Objects::nonNull)
                .map(this::normalizeSide)
                .distinct()
                .forEach(sideId -> batchCacheService.findSideEntity(sideId)
                        .ifPresent(side -> sidesById.put(
                                normalizeSide(side.getId()),
                                side)));

        Map<String, PreparedBatchItem> preparedById = request.getItems()
                .stream()
                .collect(Collectors.toMap(
                        BatchAssignmentItemInDto::getItemId,
                        item -> new PreparedBatchItem(
                                item,
                                item.getFractions()
                                        .stream()
                                        .map(this::mapPreparedFractionToClient)
                                        .toList()),
                        (first, ignored) -> first,
                        LinkedHashMap::new));

        List<FractionClientInDto> allFractions = preparedById.values()
                .stream()
                .flatMap(item -> item.fractions().stream())
                .toList();

        AccountLookupContext accountLookupContext = countedFractionHelper.buildAccountLookupContextFromFractions(
                allFractions);

        stopWatch.stop();

        stopWatch.start("validation");

        Map<String, BatchAssignmentItemOutDto> resultsById = new LinkedHashMap<>();
        List<BatchAssignmentItemClientInDto> validItems = new ArrayList<>();
        for (PreparedBatchItem prepared : preparedById.values()) {
            BatchAssignmentItemInDto item = prepared.item();
            try {
                TradeEntity trade = Optional.ofNullable(tradesById.get(item.getTradeId()))
                        .orElseThrow(() -> new ServiceException(
                                ErrorCode.TRADE_NOT_FOUND,
                                HttpStatus.NOT_FOUND));
                SideEntity side = Optional.ofNullable(sidesById.get(normalizeSide(item.getSideId())))
                        .orElseThrow(() -> new ServiceException(
                                ErrorCode.SIDE_NOT_FOUND,
                                HttpStatus.NOT_FOUND));
                /*
                 * PREPARED externo:
                 * jamás confiar ciegamente en los flags enriquecidos.
                 */
                countedFractionHelper.validateCreateFraction(
                        trade,
                        side,
                        prepared.fractions(),
                        accountLookupContext);

                validItems.add(BatchAssignmentItemClientInDto.builder()
                        .itemId(item.getItemId())
                        .topic(item.getTopic())
                        .partition(item.getPartition())
                        .offset(item.getOffset())
                        .key(item.getKey())
                        .correlationId(item.getCorrelationId())
                        .tradeId(item.getTradeId())
                        .sideId(item.getSideId())
                        .operationType(item.getOperationType())
                        .fractions(prepared.fractions())
                        .build());

            } catch (ServiceException ex) {
                if (!isRecoverableItemValidationFailure(ex)) {
                    throw ex;
                }
                resultsById.put(
                        item.getItemId(),
                        failedBatchItem(item, ex));
            }
        }

        stopWatch.stop();
        stopWatch.start("fractionation-rest");

        sendValidItemsToFractionation(
                request.getBatchId(),
                request.getItems(),
                validItems,
                resultsById);

        stopWatch.stop();

        List<BatchAssignmentItemOutDto> orderedResults = request.getItems()
                .stream()
                .map(item -> resultsById.getOrDefault(
                        item.getItemId(),
                        failedBatchItem(
                                item,
                                new IllegalStateException(
                                        "Missing fractionation batch result"))))
                .toList();

        long successCount = orderedResults.stream()
                .filter(result -> Boolean.TRUE.equals(
                        result.getSuccess()))
                .count();

        log.info(
                "PERF_ASSIGNMENT_BATCH service=cmd batchId={} mode=PREPARED "
                        + "configuredMaxBatchSize={} receivedBatchSize={} "
                        + "prefetchMs={} validationMs={} fractionationRestMs={} "
                        + "successCount={} failureCount={} totalMs={}",
                request.getBatchId(),
                maxBatchSize,
                request.getItems().size(),
                taskMillis(stopWatch, "prefetch"),
                taskMillis(stopWatch, "validation"),
                taskMillis(stopWatch, "fractionation-rest"),
                successCount,
                orderedResults.size() - successCount,
                TimeUnit.NANOSECONDS.toMillis(
                        System.nanoTime() - totalStartNanos));

        return BatchAssignmentOutDto.builder()
                .batchId(request.getBatchId())
                .items(orderedResults)
                .build();
    }

    private void sendValidItemsToFractionation(
            String batchId,
            List<BatchAssignmentItemInDto> inputs,
            List<BatchAssignmentItemClientInDto> validItems,
            Map<String, BatchAssignmentItemOutDto> resultsById) {

        if (validItems.isEmpty()) {
            return;
        }

        Map<String, BatchAssignmentItemInDto> inputById = inputs.stream()
                .collect(Collectors.toMap(
                        BatchAssignmentItemInDto::getItemId,
                        item -> item,
                        (first, ignored) -> first));

        BatchAssignmentClientOutDto response = operationFractionationClient.processBatch(
                BatchAssignmentClientInDto.builder()
                        .batchId(batchId)
                        .items(validItems)
                        .build());

        if (response == null || response.getItems() == null) {
            throw new IllegalStateException("Fractionation batch response is empty");
        }

        response.getItems().forEach(result -> {
            BatchAssignmentItemInDto input = inputById.get(result.getItemId());
            resultsById.put(result.getItemId(), toBatchResult(result, input));
        });
    }

    private BatchAssignmentValidationItemInDto toValidationInput(
            BatchAssignmentItemInDto item) {

        return BatchAssignmentValidationItemInDto.builder()
                .itemId(item.getItemId())
                .correlationId(item.getCorrelationId())
                .topic(item.getTopic())
                .partition(item.getPartition())
                .offset(item.getOffset())
                .key(item.getKey())
                .matchId(item.getMatchId())
                .registrationDate(item.getRegistrationDate())
                .side(item.getSideId())
                .participantCode(item.getParticipantCode())
                .operationType(item.getOperationType())
                .fractions(item.getRawFractions())
                .build();
    }

    // ========================================================================
    // BATCH VALIDATION
    // ========================================================================

    @Override
    public BatchAssignmentValidationOutDto validateBatch(BatchAssignmentValidationInDto request) {
        validateValidationBatchRequest(request);
        long started = System.nanoTime();

        StopWatch sw = new StopWatch(
                "assignment-cmd-validation-batch");

        /*
         * ================================================================
         * TRADE PREFETCH
         * ================================================================
         */
        sw.start("trade-prefetch");

        Set<Long> matchIds = request.getItems()
                .stream()
                .map(BatchAssignmentValidationItemInDto::getMatchId)
                .filter(Objects::nonNull)
                .collect(Collectors.toSet());

        Map<String, AssignmentTradeContext> trades = matchIds.isEmpty()
                ? new HashMap<>()
                : tradeRepository
                        .findAssignmentTradesByMatchIdIn(
                                matchIds)
                        .stream()
                        .collect(Collectors.toMap(
                                view -> tradeBusinessKey(toAssignmentTradeContext(view)),
                                this::toAssignmentTradeContext,
                                (first, ignored) -> first));
        sw.stop();

        /*
         * ================================================================
         * SIDE PREFETCH / CACHE
         *
         * Como normalmente sólo existen BUY y SELL, no tiene sentido
         * generar N queries.
         * ================================================================
         */
        sw.start("side-prefetch");

        Map<String, SideEntity> sides = new HashMap<>();

        request.getItems()
                .stream()
                .map(BatchAssignmentValidationItemInDto::getSide)
                .filter(Objects::nonNull)
                .map(this::normalizeSide)
                .distinct()
                .forEach(sideId -> batchCacheService.findSideEntity(sideId)
                        .ifPresent(side -> sides.put(
                                normalizeSide(
                                        side.getId()),
                                side)));

        sw.stop();

        /*
         * ================================================================
         * PARTICIPANT PREFETCH
         *
         * Participante operación + custodios + administradores FIC.
         * Una consulta masiva para los códigos únicos.
         * ================================================================
         */
        sw.start("participant-prefetch");

        Set<String> participantCodes = request.getItems()
                .stream()
                .flatMap(item -> {

                    java.util.stream.Stream<String> operationParticipant = java.util.stream.Stream.of(
                            item.getParticipantCode());

                    java.util.stream.Stream<String> fractionsParticipants = item.getFractions() == null
                            ? java.util.stream.Stream.empty()
                            : item.getFractions()
                                    .stream()
                                    .filter(Objects::nonNull)
                                    .flatMap(fraction -> java.util.stream.Stream.of(
                                            fraction.getCustodianCode(),
                                            fraction.getFicAdministratorCode()));

                    return java.util.stream.Stream.concat(
                            operationParticipant,
                            fractionsParticipants);
                })
                .filter(Objects::nonNull)
                .map(this::normalizeCode)
                .collect(Collectors.toSet());

        Map<String, ParticipantEntity> participants = participantCodes.isEmpty()
                ? new HashMap<>()
                : participantRepository
                        .findAllByCodeIgnoreCaseIn(
                                participantCodes)
                        .stream()
                        .collect(Collectors.toMap(
                                participant -> normalizeCode(
                                        participant.getCode()),
                                participant -> participant,
                                (first, ignored) -> first));

        sw.stop();

        /*
         * Sólo consultamos TypeMapping si realmente existen dichos códigos
         * en el chunk.
         */
        TypeEntity custodianType = resolveOptionalParticipantType(
                request,
                true);

        TypeEntity ficAdministratorType = resolveOptionalParticipantType(
                request,
                false);

        /*
         * ================================================================
         * TITLE ACCOUNT RESOLUTION
         * ================================================================
         */
        sw.start("account-resolution");

        Map<String, BatchAssignmentValidationItemOutDto> resultsById = new LinkedHashMap<>();

        List<RawPreparedItem> mappedItems = new ArrayList<>();

        /*
         * Cache request-scoped con la clave funcional de la resolución.
         * Trade y side sólo se usan para llegar a participante, depósito,
         * origen y condición MILA; no forman parte de la identidad final.
         */
        Map<AccountResolutionKey, FractionAccountOutDto> titleAccounts = new HashMap<>();

        for (BatchAssignmentValidationItemInDto item : request.getItems()) {

            try {

                validateRawValidationItem(item);

                AssignmentTradeContext trade = Optional.ofNullable(trades.get(tradeBusinessKey(item)))
                        .orElseThrow(() -> new ServiceException(
                                ErrorCode.TRADE_NOT_FOUND,
                                HttpStatus.NOT_FOUND));

                SideEntity side = Optional.ofNullable(sides.get(normalizeSide(item.getSide())))
                        .orElseThrow(() -> new ServiceException(
                                ErrorCode.SIDE_NOT_FOUND,
                                HttpStatus.NOT_FOUND));

                ParticipantEntity participant = Optional
                        .ofNullable(participants.get(normalizeCode(item.getParticipantCode())))
                        .orElseThrow(() -> new ServiceException(
                                ErrorCode.PARTICIPANT_NOT_FOUND,
                                HttpStatus.NOT_FOUND));

                validateParticipantForSide(participant, trade, side);

                List<ResolvedRawFraction> resolvedFractions = item.getFractions()
                        .stream()
                        .map(fraction -> prepareValidationFraction(
                                fraction,
                                trade,
                                side,
                                participants,
                                titleAccounts,
                                custodianType,
                                ficAdministratorType))
                        .toList();

                mappedItems.add(new RawPreparedItem(item, trade, side, resolvedFractions));
            } catch (ServiceException ex) {
                if (!isRecoverableItemValidationFailure(ex)) {
                    throw ex;
                }
                resultsById.put(item.getItemId(), validationFailure(item.getItemId(), ex));
            }
        }

        sw.stop();

        /*
         * ================================================================
         * ACCOUNT ENTITY PREFETCH
         *
         * Una consulta findAllById por tipo de cuenta para TODO el chunk.
         * ================================================================
         */
        sw.start("account-prefetch");

        List<FractionClientInDto> allResolvedFractions = mappedItems.stream()
                .flatMap(item -> item.fractions().stream())
                .map(ResolvedRawFraction::fraction)
                .toList();

        AccountLookupContext accountLookupContext = countedFractionHelper.buildAccountLookupContextFromFractions(
                allResolvedFractions);

        sw.stop();

        /*
         * Cache request-scoped.
         *
         * No es cache global.
         * No sobrevivirá al POST actual.
         */
        BatchValidationContext batchContext = BatchValidationContext.create();

        sw.start("settlement-prefetch");
        SettlementPrefetchMetrics settlementPrefetchMetrics = prefetchSettlementsByTradeSide(mappedItems, batchContext);
        sw.stop();

        sw.start("cud-prefetch");
        CudPrefetchMetrics cudPrefetchMetrics = prefetchCudAccounts(mappedItems, batchContext);
        sw.stop();

        /*
         * ================================================================
         * BUSINESS VALIDATION + ENRICHMENT
         * ================================================================
         */
        sw.start("business-validation");

        for (RawPreparedItem mapped : mappedItems) {
            if (resultsById.containsKey(
                    mapped.item().getItemId())) {
                continue;
            }
            try {
                List<FractionClientInDto> fractionClients = mapped.fractions()
                        .stream()
                        .map(ResolvedRawFraction::fraction)
                        .toList();
                /*
                 * Aprovechamos la resolución de titleAccount hecha arriba.
                 *
                 * Sembramos el mismo cache utilizado posteriormente por:
                 * - validateAccountBatch()
                 * - validateMilaLocal()
                 * - validateAutomaticAssignmentBatch()
                 *
                 * Con ello evitamos volver a validar la misma cuenta.
                 */
                Map<AccountValidationKey, FractionAccountOutDto> accountValidations = buildPreResolvedAccountValidations(
                        mapped,
                        accountLookupContext);

                validateCreateFractionBatch(
                        mapped.trade(),
                        mapped.side(),
                        fractionClients,
                        accountLookupContext,
                        accountValidations,
                        batchContext);

                List<BatchPreparedFractionInDto> preparedFractions = fractionClients.stream()
                        .map(this::mapToBatchPreparedFraction)
                        .toList();

                BatchAssignmentItemInDto prepared = BatchAssignmentItemInDto.builder()
                        .itemId(mapped.item().getItemId())
                        .correlationId(mapped.item().getCorrelationId())
                        .topic(mapped.item().getTopic())
                        .partition(mapped.item().getPartition())
                        .offset(mapped.item().getOffset())
                        .key(mapped.item().getKey())
                        .tradeId(mapped.trade().id())
                        .sideId(mapped.side().getId())
                        .operationType(mapped.item().getOperationType())
                        .fractions(preparedFractions)
                        .build();

                resultsById.put(
                        mapped.item().getItemId(),
                        BatchAssignmentValidationItemOutDto.builder()
                                .itemId(mapped.item().getItemId())
                                .valid(true)
                                .preparedItem(prepared)
                                .build());

            } catch (ServiceException ex) {
                if (!isRecoverableItemValidationFailure(ex)) {
                    throw ex;
                }
                resultsById.put(
                        mapped.item().getItemId(),
                        validationFailure(
                                mapped.item().getItemId(),
                                ex));
            }
        }

        sw.stop();

        /*
         * Preserva orden y cardinalidad.
         */
        List<BatchAssignmentValidationItemOutDto> orderedResults = request.getItems()
                .stream()
                .map(item -> resultsById.getOrDefault(
                        item.getItemId(),
                        BatchAssignmentValidationItemOutDto.builder()
                                .itemId(item.getItemId())
                                .valid(false)
                                .errorCode(
                                        ErrorCode.UNEXPECTED.name())
                                .errorMessage(
                                        "Missing validation result")
                                .build()))
                .toList();

        int validCount = (int) orderedResults.stream()
                .filter(item -> Boolean.TRUE.equals(
                        item.getValid()))
                .count();

        log.info(
                "PERF_ASSIGNMENT_VALIDATION_BATCH "
                        + "batchId={} inputCount={} validCount={} invalidCount={} "
                        + "uniqueTrades={} uniqueSides={} uniqueParticipants={} "
                        + "titleAccountResolutionRequests={} titleAccountUniqueBusinessKeys={} "
                        + "settlementLookupRequests={} settlementUniqueTradeSides={} "
                        + "settlementRepositoryCalls={} settlementRowsLoaded={} settlementPrefetchMs={} "
                        + "cudLookupRequests={} cudUniqueTradeSides={} cudUniqueBusinessKeys={} "
                        + "cudRepositoryCalls={} cudRowsLoaded={} cudPrefetchMs={} "
                        + "tradePrefetchRepositoryCalls={} tradePrefetchMs={} sidePrefetchMs={} participantPrefetchMs={} "
                        + "accountResolutionMs={} accountPrefetchMs={} "
                        + "businessValidationMs={} totalMs={}",
                request.getBatchId(),
                request.getItems().size(),
                validCount,
                request.getItems().size() - validCount,
                matchIds.size(),
                sides.size(),
                participantCodes.size(),
                request.getItems().stream()
                        .filter(Objects::nonNull)
                        .map(BatchAssignmentValidationItemInDto::getFractions)
                        .filter(Objects::nonNull)
                        .mapToInt(List::size)
                        .sum(),
                titleAccounts.size(),
                settlementPrefetchMetrics.lookupRequests(),
                settlementPrefetchMetrics.uniqueTradeSides(),
                settlementPrefetchMetrics.repositoryCalls(),
                settlementPrefetchMetrics.rowsLoaded(),
                taskMillis(sw, "settlement-prefetch"),
                cudPrefetchMetrics.lookupRequests(),
                cudPrefetchMetrics.uniqueTradeSides(),
                cudPrefetchMetrics.uniqueBusinessKeys(),
                cudPrefetchMetrics.repositoryCalls(),
                cudPrefetchMetrics.rowsLoaded(),
                taskMillis(sw, "cud-prefetch"),
                matchIds.isEmpty() ? 0 : 1,
                taskMillis(sw, "trade-prefetch"),
                taskMillis(sw, "side-prefetch"),
                taskMillis(sw, "participant-prefetch"),
                taskMillis(sw, "account-resolution"),
                taskMillis(sw, "account-prefetch"),
                taskMillis(sw, "business-validation"),
                TimeUnit.NANOSECONDS.toMillis(
                        System.nanoTime() - started));

        return BatchAssignmentValidationOutDto.builder()
                .batchId(request.getBatchId())
                .total(request.getItems().size())
                .validCount(validCount)
                .invalidCount(
                        request.getItems().size() - validCount)
                .items(orderedResults)
                .build();
    }

    /**
     * Recibe únicamente items preparados dentro del mismo request RAW.
     * <p>
     * NO vuelve a ejecutar validateCreateFraction().
     */
    private BatchAssignmentOutDto processValidatedBatch(
            String batchId,
            List<BatchAssignmentItemInDto> validItems) {
        long started = System.nanoTime();
        Map<String, BatchAssignmentItemOutDto> resultsById = new LinkedHashMap<>();

        BatchAssignmentClientOutDto response = operationFractionationClient.processBatch(
                BatchAssignmentClientInDto.builder()
                        .batchId(batchId)
                        .items(validItems.stream().map(this::toClientBatchItem).toList())
                        .build());

        if (response == null || response.getItems() == null) {
            throw new IllegalStateException("Fractionation returned an empty batch response");
        }

        Map<String, BatchAssignmentItemInDto> inputs = validItems.stream()
                .collect(Collectors.toMap(BatchAssignmentItemInDto::getItemId, item -> item,
                        (first, ignored) -> first));

        response.getItems().forEach(result -> {
            BatchAssignmentItemInDto input = inputs.get(result.getItemId());
            resultsById.put(result.getItemId(), toBatchResult(result, input));
        });

        List<BatchAssignmentItemOutDto> results = validItems.stream()
                .map(item -> resultsById.getOrDefault(
                        item.getItemId(),
                        failedBatchItem(
                                item,
                                new IllegalStateException(
                                        "Missing fractionation batch result"))))
                .toList();

        long successCount = results.stream()
                .filter(item -> Boolean.TRUE.equals(
                        item.getSuccess()))
                .count();

        long totalMs = TimeUnit.NANOSECONDS.toMillis(
                System.nanoTime() - started);

        log.info(
                "PERF_ASSIGNMENT_BATCH service=cmd batchId={} mode=RAW_VALIDATED "
                        + "configuredMaxBatchSize={} receivedBatchSize={} processedCount={} "
                        + "successCount={} failureCount={} fractionationMs={} totalMs={}",
                batchId,
                maxBatchSize,
                validItems.size(),
                validItems.size(),
                successCount,
                results.size() - successCount,
                totalMs,
                totalMs);

        return BatchAssignmentOutDto.builder()
                .batchId(batchId)
                .items(results)
                .build();
    }

    private BatchAssignmentItemClientInDto toClientBatchItem(BatchAssignmentItemInDto item) {
        return BatchAssignmentItemClientInDto.builder()
                .itemId(item.getItemId())
                .correlationId(item.getCorrelationId())
                .topic(item.getTopic())
                .partition(item.getPartition())
                .offset(item.getOffset())
                .key(item.getKey())
                .tradeId(item.getTradeId())
                .sideId(item.getSideId())
                .operationType(item.getOperationType())
                .fractions(
                        item.getFractions()
                                .stream()
                                .map(this::mapPreparedFractionToClient)
                                .toList())
                .build();
    }

    private BatchAssignmentItemOutDto toBatchResult(BatchAssignmentClientOutDto.BatchAssignmentItemClientOutDto result,
            BatchAssignmentItemInDto input) {
        return BatchAssignmentItemOutDto.builder()
                .itemId(result.getItemId())
                .correlationId(input == null
                        ? null
                        : input.getCorrelationId())
                .topic(input == null
                        ? null
                        : input.getTopic())
                .partition(input == null
                        ? null
                        : input.getPartition())
                .offset(input == null
                        ? null
                        : input.getOffset())
                .key(input == null
                        ? null
                        : input.getKey())
                .tradeId(result.getTradeId())
                .sideId(result.getSideId())
                .success(result.getSuccess())
                .settlements(result.getSettlements())
                .errorCode(result.getErrorCode())
                .errorMessage(result.getErrorMessage())
                .businessRuleCode(result.getBusinessRuleCode())
                .build();
    }

    private ResolvedRawFraction prepareValidationFraction(
            BatchAssignmentValidationFractionInDto input,
            AssignmentTradeContext trade,
            SideEntity side,
            Map<String, ParticipantEntity> participants,
            Map<AccountResolutionKey, FractionAccountOutDto> accounts,
            TypeEntity custodianType,
            TypeEntity ficAdministratorType) {

        if (input == null) {
            throw new ServiceException("Fraction cannot be null", ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
        }
        if (ObjectUtils.isEmpty(input.getTitleAccount())) {
            throw new ServiceException(ErrorCode.ACCOUNT_NOT_FOUND, HttpStatus.BAD_REQUEST);
        }

        Long originId = originForSide(trade, side);
        if (originId == null) {
            throw new ServiceException(ErrorCode.SOURCE_QUOTE_TYPE_REQUIRED, HttpStatus.BAD_REQUEST);
        }

        AccountResolutionKey accountKey = accountResolutionKey(trade, side, originId, input.getTitleAccount());
        FractionAccountOutDto account = accounts.computeIfAbsent(accountKey,
                ignored -> validateCountedFractionService.validateAccountFractionAssignment(
                        trade, input.getTitleAccount(), side.getId(), originId, false));

        if (account == null || (account.getInvestorAccount() == null && account.getParticipantAccount() == null)) {
            throw new ServiceException(ErrorCode.ACCOUNT_NOT_FOUND, HttpStatus.BAD_REQUEST);
        }

        ParticipantEntity custodian = resolveOptionalParticipant(input.getCustodianCode(), participants,
                ErrorCode.CUSTODIAN_NOT_FOUND, custodianType);
        ParticipantEntity ficAdministrator = resolveOptionalParticipant(input.getFicAdministratorCode(), participants,
                ErrorCode.FIC_ADMIN_NOT_FOUND, ficAdministratorType);

        FractionClientInDto fraction = FractionClientInDto.builder()
                .investorAccountId(account.getInvestorAccount() == null ? null : account.getInvestorAccount().getId())
                .participantAccountId(
                        account.getParticipantAccount() == null ? null : account.getParticipantAccount().getId())
                .fiduciarySpecialist(Boolean.TRUE.equals(account.getFiduciarySpecialist()))
                .sourceQuoteTypeId(originId)
                .reference(input.getReference())
                .referencePackage(input.getReferencePackage())
                .fractionQuantity(input.getFractionQuantity())
                .commissionPercentage(input.getCommissionPercentage())
                .cashAccount(input.getCashAccount())
                .custodianId(custodian != null ? custodian.getId()
                        : account.getCustodian() == null ? null : account.getCustodian().getId())
                .ficAdministratorId(ficAdministrator == null ? null : ficAdministrator.getId())
                .milaDirectDepositorId(account.getMilaDirectDepositor() == null
                        ? null
                        : account.getMilaDirectDepositor().getId())
                .build();
        return new ResolvedRawFraction(fraction, account);
    }

    /**
     * El mismo AccountValidationKey del flujo original.
     * <p>
     * NO incluye tradeId/sideId porque este Map se crea por item/op.
     */
    private Map<AccountValidationKey, FractionAccountOutDto> buildPreResolvedAccountValidations(
            RawPreparedItem item,
            AccountLookupContext accountLookupContext) {

        Map<AccountValidationKey, FractionAccountOutDto> result = new HashMap<>();

        for (ResolvedRawFraction resolved : item.fractions()) {

            FractionClientInDto fraction = resolved.fraction();

            String accountNumber = countedFractionHelper.getAccountNumber(
                    fraction,
                    accountLookupContext);

            AccountValidationKey key = new AccountValidationKey(
                    accountNumber,
                    fraction.getSourceQuoteTypeId());

            result.putIfAbsent(
                    key,
                    resolved.accountValidation());
        }

        return result;
    }

    private void validateCreateFractionBatch(
            AssignmentTradeContext trade,
            SideEntity side,
            List<FractionClientInDto> fractions,
            AccountLookupContext accountLookupContext,
            Map<AccountValidationKey, FractionAccountOutDto> accountValidations,
            BatchValidationContext batchContext) {

        validateOwnPosition(trade, side, fractions);
        // validateOwnPositionInFractions(fractions);
        validateAutomaticAssignmentBatch(trade, side, fractions, accountLookupContext, accountValidations,
                batchContext);
        validateAccountBatch(trade, side, fractions, accountLookupContext, accountValidations, batchContext);
        countedFractionHelper.validateMasterAccountFields(fractions, accountLookupContext);
        countedFractionHelper.validateAccountDuplicatedCreateFraction(fractions);
        validateReassignmentCustodianBatch(trade, side, fractions, accountLookupContext, batchContext);
        validateCountryAndFieldsOperation(trade, fractions);
        validateMilaLocal(trade, side, fractions, accountValidations, accountLookupContext);

        List<FractionRuleInDto> fractionRules = fractions.stream()
                .map(fraction -> {
                    validateAccountFraction(trade, side, fraction.getInvestorAccountId(),
                            fraction.getParticipantAccountId(), accountLookupContext);
                    return FractionRuleInDto.builder().fractionQuantity(fraction.getFractionQuantity()).build();
                })
                .toList();

        validateCountedFractionService.validateQuantityFractions(trade, fractionRules);
        validateCountedFractionService.validateMaximumLimitFractions(trade, fractionRules);
    }

    private void validateAccountBatch(
            AssignmentTradeContext trade,
            SideEntity side,
            List<FractionClientInDto> fractions,
            AccountLookupContext accountLookupContext,
            Map<AccountValidationKey, FractionAccountOutDto> accountValidations,
            BatchValidationContext batchContext) {

        TaxesEntity taxes = resolveTaxesBatch(trade, batchContext);
        Long transferParticipantId = PropertiesContext.getClientUserEntity() == null
                ? null
                : PropertiesContext.getClientUserEntity().getParticipantId();

        for (FractionClientInDto fraction : fractions) {
            fraction.setTransferParticipantId(transferParticipantId);
            if (fraction.getParticipantAccountId() != null) {
                ParticipantAccountEntity account = countedFractionHelper.findParticipantAccount(
                        fraction.getParticipantAccountId(), accountLookupContext);
                getCachedAccountValidation(accountValidations, trade, side, account.getAccountNumber(),
                        fraction.getSourceQuoteTypeId(), false);
                fraction.setValTax(taxes.getValue());
                continue;
            }
            if (fraction.getInvestorAccountId() != null) {
                InvestorAccountEntity account = countedFractionHelper.findInvestorAccount(
                        fraction.getInvestorAccountId(), accountLookupContext);
                getCachedAccountValidation(accountValidations, trade, side, account.getAccountNumber(),
                        fraction.getSourceQuoteTypeId(), false);
                fraction.setValTax(Boolean.TRUE.equals(account.getTaxExemp()) ? BigDecimal.ZERO : taxes.getValue());
                continue;
            }
            throw new ServiceException(ErrorCode.ACCOUNT_NOT_FOUND, HttpStatus.BAD_REQUEST);
        }
    }

    private TaxesEntity resolveTaxesBatch(AssignmentTradeContext trade, BatchValidationContext context) {
        if (trade.countryId() == null) {
            throw new ServiceException(ErrorCode.TAXES_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        return context.taxesByCountry().computeIfAbsent(trade.countryId(), ignored -> taxesRepository
                .findByCountryIdAndCode(trade.countryId(), TaxesEnum.IVA.getValue())
                .orElseThrow(() -> new ServiceException(ErrorCode.TAXES_NOT_FOUND, HttpStatus.NOT_FOUND)));
    }

    private void validateAutomaticAssignmentBatch(
            AssignmentTradeContext trade,
            SideEntity side,
            List<FractionClientInDto> fractions,
            AccountLookupContext accountLookupContext,
            Map<AccountValidationKey, FractionAccountOutDto> accountValidations,
            BatchValidationContext batchContext) {
        if (fractions.isEmpty()) {
            return;
        }

        AssignmentParticipantContext participant = participantForSide(trade, side);
        Long originId = originForSide(trade, side);
        FractionClientInDto fraction = fractions.get(0);
        if (!isAutomaticAssignmentApplicable(participant, originId)) {
            fraction.setHaveAssignmentMark(false);
            return;
        }

        String accountNumber = countedFractionHelper.getAccountNumber(fraction, accountLookupContext);
        FractionAccountOutDto accountValidation = getCachedAccountValidation(accountValidations, trade, side,
                accountNumber, TypeEnum.OWN_POSITION_POINT_ORIGIN.getId(), false);
        if (accountValidation.getParticipantAccount() == null && accountValidation.getInvestorAccount() == null) {
            throw new ServiceException(ErrorCode.ACCOUNT_NOT_MATCH_OF_OWN_POSITION, HttpStatus.BAD_REQUEST);
        }

        validateCashAccountMatchBatch(fraction, trade, side, batchContext);
        if (fraction.getCustodianId() != null || fraction.getFicAdministratorId() != null) {
            throw new ServiceException(ErrorCode.CUSTODIAN_AND_FIC_MUST_BE_EMPTY_TO_ASSIGNMENT_MARK,
                    HttpStatus.BAD_REQUEST);
        }
        fraction.setHaveAssignmentMark(true);
    }

    private void validateCashAccountMatchBatch(
            FractionClientInDto fraction,
            AssignmentTradeContext trade,
            SideEntity side,
            BatchValidationContext context) {
        TradeSideKey key = new TradeSideKey(trade.id(), normalizeSide(side.getId()));
        ParticipantBankAccountOutDto account = context.cudAccountsByTradeSide()
                .getOrDefault(key, ParticipantBankAccountOutDto.builder().build());
        String bankAccountNumber = account.getBankAccount();
        if (bankAccountNumber == null || bankAccountNumber.trim().isEmpty()) {
            throw new ServiceException(ErrorCode.CUD_ACCOUNT_NOT_FOUND, HttpStatus.BAD_REQUEST);
        }
        if (!countedFractionHelper.parseCudBankAccountNumber(bankAccountNumber).equals(fraction.getCashAccount())) {
            throw new ServiceException(ErrorCode.CUD_ACCOUNT_CANT_BE_EMPTY_OR_DIFFERENT_TO_ASSIGNMENT_MARK,
                    HttpStatus.BAD_REQUEST);
        }
    }

    private SettlementPrefetchMetrics prefetchSettlementsByTradeSide(
            List<RawPreparedItem> mappedItems,
            BatchValidationContext context) {

        Map<String, Set<Long>> tradeIdsBySide = new HashMap<>();
        for (RawPreparedItem mapped : mappedItems) {
            String sideId = normalizeSide(mapped.side().getId());
            tradeIdsBySide.computeIfAbsent(sideId, ignored -> new HashSet<>())
                    .add(mapped.trade().id());
            // Debe ser mutable: computeIfAbsent() de abajo reutiliza esta misma lista via
            // .add()
            // cuando la clave ya existe -- List.of() aqui revienta con
            // UnsupportedOperationException
            // en cuanto la consulta devuelva algun settlement para este trade/side.
            context.settlementsByTradeSide().putIfAbsent(
                    new TradeSideKey(mapped.trade().id(), sideId),
                    new ArrayList<>());
        }

        int repositoryCalls = 0;
        int rowsLoaded = 0;
        for (Map.Entry<String, Set<Long>> entry : tradeIdsBySide.entrySet()) {
            if (entry.getValue().isEmpty()) {
                continue;
            }

            List<SettlementEntity> settlements = Optional.ofNullable(settlementRepository
                    .findByTrade_IdInAndSide_Id(new ArrayList<>(entry.getValue()), entry.getKey()))
                    .orElseGet(List::of);
            repositoryCalls++;
            rowsLoaded += settlements.size();
            for (SettlementEntity settlement : settlements) {
                TradeSideKey key = new TradeSideKey(
                        settlement.getTrade().getId(),
                        normalizeSide(settlement.getSide().getId()));
                context.settlementsByTradeSide()
                        .computeIfAbsent(key, ignored -> new ArrayList<>())
                        .add(settlement);
            }
        }

        return new SettlementPrefetchMetrics(
                mappedItems.size(),
                context.settlementsByTradeSide().size(),
                repositoryCalls,
                rowsLoaded);
    }

    private CudPrefetchMetrics prefetchCudAccounts(
            List<RawPreparedItem> mappedItems,
            BatchValidationContext context) {

        Map<TradeSideKey, Long> participantByTradeSide = new HashMap<>();
        Set<Long> participantIds = new HashSet<>();

        for (RawPreparedItem mapped : mappedItems) {
            AssignmentParticipantContext participant = participantForSide(mapped.trade(), mapped.side());
            Long originId = originForSide(mapped.trade(), mapped.side());
            if (!isAutomaticAssignmentApplicable(participant, originId)
                    || participant == null || participant.id() == null) {
                continue;
            }

            TradeSideKey key = new TradeSideKey(
                    mapped.trade().id(), normalizeSide(mapped.side().getId()));
            participantByTradeSide.put(key, participant.id());
            participantIds.add(participant.id());
        }

        if (participantIds.isEmpty()) {
            return new CudPrefetchMetrics(0, 0, 0, 0, 0);
        }

        Map<Long, ParticipantBankAccountOutDto> accountsByParticipant = Optional.ofNullable(
                validateCountedFractionService.validateCudAccountFractionAssignments(participantIds))
                .orElseGet(Map::of);

        participantByTradeSide.forEach((key, participantId) -> context.cudAccountsByTradeSide().put(
                key,
                accountsByParticipant.getOrDefault(
                        participantId,
                        ParticipantBankAccountOutDto.builder().build())));

        int rowsLoaded = (int) accountsByParticipant.values().stream()
                .filter(Objects::nonNull)
                .filter(account -> account.getId() != null)
                .count();

        return new CudPrefetchMetrics(
                participantByTradeSide.size(),
                participantByTradeSide.size(),
                participantIds.size(),
                1,
                rowsLoaded);
    }

    private AccountResolutionKey accountResolutionKey(
            AssignmentTradeContext trade,
            SideEntity side,
            Long originId,
            String titleAccount) {
        AssignmentParticipantContext participant = participantForSide(trade, side);
        return new AccountResolutionKey(
                titleAccount.trim().toLowerCase(java.util.Locale.ROOT),
                participant == null ? null : participant.id(),
                depositoryForSide(trade, side),
                originId,
                trade.typeId(),
                trade.countryId(),
                trade.securityTitleCountryId() == null ? null : trade.securityTitleCountryId().longValue(),
                Boolean.FALSE);
    }

    private AssignmentParticipantContext participantForSide(AssignmentTradeContext trade, SideEntity side) {
        if (SideEnum.BUY.getId().equalsIgnoreCase(side.getId())) {
            return trade.participantBuy();
        }
        if (SideEnum.SELL.getId().equalsIgnoreCase(side.getId())) {
            return trade.participantSell();
        }
        throw new ServiceException(ErrorCode.SIDE_NOT_FOUND, HttpStatus.BAD_REQUEST);
    }

    private Long originForSide(AssignmentTradeContext trade, SideEntity side) {
        if (SideEnum.BUY.getId().equalsIgnoreCase(side.getId())) {
            return trade.sourceQuoteBuyTypeId();
        }
        if (SideEnum.SELL.getId().equalsIgnoreCase(side.getId())) {
            return trade.sourceQuoteSellTypeId();
        }
        throw new ServiceException(ErrorCode.SIDE_NOT_FOUND, HttpStatus.BAD_REQUEST);
    }

    private String depositoryForSide(AssignmentTradeContext trade, SideEntity side) {
        if (SideEnum.BUY.getId().equalsIgnoreCase(side.getId())) {
            return trade.depositoryBuyId();
        }
        if (SideEnum.SELL.getId().equalsIgnoreCase(side.getId())) {
            return trade.depositorySellId();
        }
        throw new ServiceException(ErrorCode.SIDE_NOT_FOUND, HttpStatus.BAD_REQUEST);
    }

    private void validateReassignmentCustodianBatch(
            AssignmentTradeContext trade,
            SideEntity side,
            List<FractionClientInDto> fractions,
            AccountLookupContext accountLookupContext,
            BatchValidationContext context) {
        TradeSideKey key = new TradeSideKey(trade.id(), normalizeSide(side.getId()));
        List<SettlementEntity> lastSettlements = context.settlementsByTradeSide().getOrDefault(key, List.of());
        if (lastSettlements.isEmpty() || trade.countryId() == null) {
            return;
        }
        BusinessRuleOutDto businessRule = context.reassignmentRulesByCountry().computeIfAbsent(trade.countryId(),
                countryId -> operationBusinessRuleClient.findBusinessRuleByCountryIdAndCodeValid(countryId,
                        BusinessRuleEnum.RULE_REASSIGNMENT_BY_FRACTION_CUSTODIAN));
        List<ActionOutDto> actions = businessRule == null || businessRule.getActions() == null
                ? List.of()
                : businessRule.getActions();
        Map<String, ProtectedFractionState> protectedFractions = new HashMap<>();
        for (SettlementEntity settlement : lastSettlements) {
            if (settlement.getCustodianStatus() == null) {
                continue;
            }
            boolean editable = actions.stream().anyMatch(action -> action.getStatus() != null
                    && Objects.equals(action.getStatus().getId(), settlement.getCustodianStatus().getId()));
            if (editable) {
                continue;
            }
            String accountNumber = settlement.getParticipantAccount() != null
                    ? settlement.getParticipantAccount().getAccountNumber()
                    : settlement.getInvestorAccount() == null ? null
                            : settlement.getInvestorAccount().getAccountNumber();
            if (accountNumber == null) {
                continue;
            }
            protectedFractions.put(accountNumber, new ProtectedFractionState(
                    settlement.getFractionQuantity(), settlement.getCashAccount(),
                    settlement.getCustodian() == null ? null : settlement.getCustodian().getId(),
                    settlement.getFicAdministrator() == null ? null : settlement.getFicAdministrator().getId(),
                    settlement.getUniqueFractionId(), settlement.getCustodianStatus().getId(),
                    settlement.getReferencePackage()));
        }
        if (protectedFractions.isEmpty()) {
            return;
        }
        for (FractionClientInDto fraction : fractions) {
            if (fraction.getCustodianId() == null) {
                continue;
            }
            String accountNumber = countedFractionHelper.getAccountNumber(fraction, accountLookupContext);
            ProtectedFractionState protectedState = protectedFractions.get(accountNumber);
            if (protectedState == null) {
                continue;
            }
            if (!sameBigDecimal(protectedState.quantity(), fraction.getFractionQuantity())
                    || !sameBigDecimal(protectedState.cashAccount(), fraction.getCashAccount())
                    || !Objects.equals(protectedState.custodianId(), fraction.getCustodianId())
                    || !Objects.equals(protectedState.ficAdministratorId(), fraction.getFicAdministratorId())) {
                throw new ServiceException(ErrorCode.FRACTION_CUSTODIAN_STATUS_DONT_BE_EDIT,
                        HttpStatus.BAD_REQUEST);
            }
            fraction.setUniqueFractionId(protectedState.uniqueFractionId());
            fraction.setCustodianStatusId(protectedState.custodianStatusId());
            fraction.setReferencePackage(protectedState.referencePackage());
            protectedFractions.remove(accountNumber);
            if (protectedFractions.isEmpty()) {
                return;
            }
        }
        throw new ServiceException(ErrorCode.FRACTION_CUSTODIAN_STATUS_DONT_BE_EDIT, HttpStatus.BAD_REQUEST);
    }

    private boolean sameBigDecimal(
            BigDecimal left,
            BigDecimal right) {

        if (left == null || right == null) {
            return left == right;
        }

        return left.compareTo(right) == 0;
    }

    private TypeEntity resolveOptionalParticipantType(
            BatchAssignmentValidationInDto request,
            boolean custodian) {

        boolean required = request.getItems()
                .stream()
                .filter(Objects::nonNull)
                .filter(item -> item.getFractions() != null)
                .flatMap(item -> item.getFractions().stream())
                .filter(Objects::nonNull)
                .anyMatch(fraction -> {

                    String code = custodian
                            ? fraction.getCustodianCode()
                            : fraction
                                    .getFicAdministratorCode();

                    return !ObjectUtils.isEmpty(code);
                });

        if (!required) {
            return null;
        }

        String description = custodian
                ? TypeMappingEnum.CUSTODIO.getValue()
                : TypeMappingEnum.ADMIN_FIC.getValue();

        return typeMappingRepository
                .findByExternalSystemAndExternalDescription(
                        TypeMappingEnum.REFERENCE_DATA.getValue(),
                        description)
                .map(TypeMappingEntity::getType)
                .orElseThrow(() -> new ServiceException(
                        ErrorCode.TYPE_MAPPING_NOT_FOUND,
                        HttpStatus.NOT_FOUND));
    }

    private void validateRawValidationItem(
            BatchAssignmentValidationItemInDto item) {

        if (item == null) {
            throw new ServiceException(
                    "Batch item cannot be null",
                    ErrorCode.BAD_REQUEST,
                    HttpStatus.BAD_REQUEST);
        }

        if (item.getMatchId() == null) {
            throw new ServiceException(
                    ErrorCode.TRADE_NOT_FOUND,
                    HttpStatus.NOT_FOUND);
        }

        if (item.getRegistrationDate() == null) {

            throw new ServiceException(
                    "Registration date is required",
                    ErrorCode.BAD_REQUEST,
                    HttpStatus.BAD_REQUEST);
        }

        if (ObjectUtils.isEmpty(item.getSide())) {
            throw new ServiceException(
                    ErrorCode.SIDE_NOT_FOUND,
                    HttpStatus.NOT_FOUND);
        }

        if (ObjectUtils.isEmpty(
                item.getParticipantCode())) {

            throw new ServiceException(
                    ErrorCode.PARTICIPANT_NOT_FOUND,
                    HttpStatus.NOT_FOUND);
        }

        if (item.getFractions() == null ||
                item.getFractions().isEmpty()) {

            throw new ServiceException(
                    "At least one fraction is required",
                    ErrorCode.BAD_REQUEST,
                    HttpStatus.BAD_REQUEST);
        }
    }

    private ParticipantEntity resolveOptionalParticipant(
            String code,
            Map<String, ParticipantEntity> participants,
            ErrorCode errorCode,
            TypeEntity expectedType) {

        if (ObjectUtils.isEmpty(code)) {
            return null;
        }

        if (expectedType == null) {
            throw new ServiceException(
                    ErrorCode.TYPE_MAPPING_NOT_FOUND,
                    HttpStatus.NOT_FOUND);
        }

        ParticipantEntity participant = Optional.ofNullable(
                participants.get(
                        normalizeCode(code)))
                .orElseThrow(() -> new ServiceException(
                        errorCode,
                        HttpStatus.NOT_FOUND));

        if (participant.getType() == null ||
                !Objects.equals(
                        expectedType.getId(),
                        participant.getType().getId())) {

            throw new ServiceException(
                    errorCode,
                    HttpStatus.NOT_FOUND);
        }

        return participant;
    }

    private void validateParticipantForSide(
            ParticipantEntity participant,
            AssignmentTradeContext trade,
            SideEntity side) {
        AssignmentParticipantContext expected = participantForSide(trade, side);
        if (expected == null || !Objects.equals(expected.id(), participant.getId())) {
            throw new ServiceException(ErrorCode.PARTICIPANT_NOT_IN_SIDE, HttpStatus.BAD_REQUEST);
        }
    }

    private String tradeBusinessKey(
            BatchAssignmentValidationItemInDto item) {

        return item.getMatchId()
                + "|"
                + item.getRegistrationDate();
    }

    private String tradeBusinessKey(AssignmentTradeContext trade) {
        return trade.matchId()
                + "|"
                + trade.matchDate();
    }

    private AssignmentTradeContext toAssignmentTradeContext(AssignmentTradeView view) {
        return new AssignmentTradeContext(
                view.getId(),
                view.getMatchId(),
                view.getMatchDate(),
                view.getQuantity(),
                view.getTypeId(),
                view.getCountryId(),
                new AssignmentParticipantContext(
                        view.getParticipantBuyId(),
                        view.getParticipantBuyDocumentNumber(),
                        view.getParticipantBuyCountryId(),
                        view.getParticipantBuyDirectAllocation()),
                new AssignmentParticipantContext(
                        view.getParticipantSellId(),
                        view.getParticipantSellDocumentNumber(),
                        view.getParticipantSellCountryId(),
                        view.getParticipantSellDirectAllocation()),
                view.getDepositoryBuyId(),
                view.getDepositorySellId(),
                view.getSourceQuoteBuyTypeId(),
                view.getSourceQuoteSellTypeId(),
                view.getSecurityTitleCountryId());
    }

    private String normalizeCode(String code) {
        return code == null
                ? null
                : code.trim().toLowerCase(java.util.Locale.ROOT);
    }

    private String normalizeSide(String side) {
        return side == null
                ? null
                : side.trim().toUpperCase(java.util.Locale.ROOT);
    }

    private String errorCode(RuntimeException ex) {
        if (ex instanceof ServiceException serviceException) {
            return serviceException.getErrorCode().name();
        }

        if (ex instanceof ClientException clientException) {
            return clientException.getErrorCode().name();
        }

        return ErrorCode.UNEXPECTED.name();
    }

    private String errorMessage(RuntimeException ex) {
        if ((ex instanceof ServiceException || ex instanceof ClientException)
                && ex.getCause() != null && ex.getCause().getMessage() != null) {
            return ex.getCause().getMessage();
        }
        return ex.getMessage();
    }

    private BatchAssignmentValidationItemOutDto validationFailure(
            String itemId,
            RuntimeException failure) {
        return BatchAssignmentValidationItemOutDto.builder()
                .itemId(itemId)
                .valid(false)
                .errorCode(errorCode(failure))
                .errorMessage(errorMessage(failure))
                .build();
    }

    private boolean isRecoverableItemValidationFailure(ServiceException failure) {
        if (failure.getErrorCode() == null) {
            return false;
        }

        return switch (failure.getErrorCode()) {
            case ACCOUNT_DEPOSITORY_NOT_CORRESPOND_TO_TRADE,
                    ACCOUNT_NOT_ACTIVE,
                    ACCOUNT_NOT_FOUND,
                    ACCOUNT_NOT_MATCH_OF_OWN_POSITION,
                    BAD_REQUEST,
                    CUD_ACCOUNT_CANT_BE_EMPTY_OR_DIFFERENT_TO_ASSIGNMENT_MARK,
                    CUD_ACCOUNT_CANT_BE_EMPTY_TO_COLOMBIA_OPERATION,
                    CUD_ACCOUNT_NOT_FOUND,
                    CUSTODIAN_AND_FIC_MUST_BE_EMPTY_TO_ASSIGNMENT_MARK,
                    CUSTODIAN_AND_FIC_MUST_BE_EMPTY_TO_MASTER_ACCOUNT,
                    CUSTODIAN_ID_MUST_BE_THE_SAME,
                    CUSTODIAN_NOT_FOUND,
                    FIC_ADMIN_NOT_FOUND,
                    FRACTION_CUSTODIAN_STATUS_DONT_BE_EDIT,
                    FRACTION_TOTAL_QUANTITY_NOT_CORRESPOND_QUANTITY_TRADE,
                    INVESTOR_ACCOUNT_DUPLICATED,
                    INVESTOR_ACCOUNT_NOT_FOUND,
                    MAXIMUM_LIMIT_FRACTIONS_EXCEED,
                    OWN_POSITION_COMMISSION_MUST_BE_ZERO,
                    OWN_POSITION_NOT_CORRESPOND_TO_ORIGIN,
                    OWN_POSITION_ONLY_ONE_FRACTION_ALLOWED,
                    PARTICIPANT_ACCOUNT_DUPLICATED,
                    PARTICIPANT_ACCOUNT_NOT_FOUND,
                    PARTICIPANT_ACCOUNT_OR_INVESTOR_ACCOUNT_NOT_FOUND,
                    PARTICIPANT_ACCOUNT_OR_INVESTOR_ACCOUNT_REQUIRED,
                    PARTICIPANT_NOT_FOUND,
                    PARTICIPANT_NOT_IN_SIDE,
                    SIDE_NOT_FOUND,
                    SOURCE_QUOTE_TYPE_REQUIRED,
                    TAXES_NOT_FOUND,
                    THIRD_PARTIES_COLLECTIVE_PORTFOLIOS_NOT_CORRESPOND_TO_ORIGIN,
                    TRADE_DEPOSITORY_NOT_FOUND,
                    TRADE_DEPOSITORY_REQUIRED,
                    TRADE_NOT_FOUND,
                    TYPE_COUNTED_OR_REPO_OPERATION_REQUIRED,
                    TYPE_NOT_FOUND ->
                true;
            default -> false;
        };
    }

    private void validateBatchRequest(BatchAssignmentInDto request) {
        if (request == null ||
                request.getItems() == null ||
                request.getItems().isEmpty()) {

            throw new ServiceException(
                    "Assignment batch cannot be empty",
                    ErrorCode.BAD_REQUEST,
                    HttpStatus.BAD_REQUEST);
        }

        validateBatchSize(
                request.getItems().size());

        Set<String> itemIds = new HashSet<>();

        for (BatchAssignmentItemInDto item : request.getItems()) {
            if (item == null || ObjectUtils.isEmpty(item.getItemId())) {
                throw new ServiceException(
                        "Every batch item must contain itemId",
                        ErrorCode.BAD_REQUEST,
                        HttpStatus.BAD_REQUEST);
            }

            if (!itemIds.add(item.getItemId())) {
                throw new ServiceException(
                        "Duplicate itemId in assignment batch: "
                                + item.getItemId(),
                        ErrorCode.BAD_REQUEST,
                        HttpStatus.BAD_REQUEST);
            }
        }
    }

    private void validateValidationBatchRequest(BatchAssignmentValidationInDto request) {
        if (request == null ||
                request.getItems() == null ||
                request.getItems().isEmpty()) {

            throw new ServiceException(
                    "Assignment validation batch cannot be empty",
                    ErrorCode.BAD_REQUEST,
                    HttpStatus.BAD_REQUEST);
        }

        validateBatchSize(request.getItems().size());

        Set<String> itemIds = new HashSet<>();

        for (BatchAssignmentValidationItemInDto item : request.getItems()) {
            if (item == null || ObjectUtils.isEmpty(item.getItemId())) {
                throw new ServiceException(
                        "Every validation item must contain itemId",
                        ErrorCode.BAD_REQUEST,
                        HttpStatus.BAD_REQUEST);
            }

            if (!itemIds.add(item.getItemId())) {
                throw new ServiceException("Duplicate itemId in assignment validation batch: " + item.getItemId(),
                        ErrorCode.BAD_REQUEST,
                        HttpStatus.BAD_REQUEST);
            }
        }
    }

    private BatchPayloadMode resolveBatchPayloadMode(
            List<BatchAssignmentItemInDto> items) {
        BatchPayloadMode detectedMode = null;
        for (BatchAssignmentItemInDto item : items) {
            boolean raw = item.getRawFractions() != null && !item.getRawFractions().isEmpty();

            boolean prepared = item.getFractions() != null && !item.getFractions().isEmpty();

            /*
             * XOR:
             * debe venir exactamente una representación.
             */
            if (raw == prepared) {
                throw new ServiceException(
                        "Batch item "
                                + item.getItemId()
                                + " must contain exactly one of rawFractions or fractions",
                        ErrorCode.BAD_REQUEST,
                        HttpStatus.BAD_REQUEST);
            }

            BatchPayloadMode currentMode = raw
                    ? BatchPayloadMode.RAW
                    : BatchPayloadMode.PREPARED;

            if (detectedMode == null) {
                detectedMode = currentMode;
            } else if (detectedMode != currentMode) {
                throw new ServiceException(
                        "RAW and PREPARED items cannot be mixed in the same assignment batch",
                        ErrorCode.BAD_REQUEST,
                        HttpStatus.BAD_REQUEST);
            }
        }
        return detectedMode;
    }

    private void validateBatchSize(int size) {
        if (size > maxBatchSize) {
            throw new ServiceException(
                    "Assignment batch exceeds configured maximum of "
                            + maxBatchSize,
                    ErrorCode.BAD_REQUEST,
                    HttpStatus.BAD_REQUEST);
        }
    }

    private BatchAssignmentItemOutDto failedBatchItem(
            BatchAssignmentItemInDto item,
            RuntimeException failure) {
        String errorCode = failure instanceof ServiceException serviceException
                ? serviceException.getErrorCode().name()
                : failure instanceof ClientException clientException
                        ? clientException.getErrorCode().name()
                        : ErrorCode.UNEXPECTED.name();

        return BatchAssignmentItemOutDto.builder()
                .itemId(item.getItemId())
                .correlationId(item.getCorrelationId())
                .topic(item.getTopic())
                .partition(item.getPartition())
                .offset(item.getOffset())
                .key(item.getKey())
                .tradeId(item.getTradeId())
                .sideId(item.getSideId())
                .success(false)
                .settlements(List.of())
                .errorCode(errorCode)
                .errorMessage(errorMessage(failure))
                .build();
    }

    // ========================================================================
    // MAPPERS BATCH
    // ========================================================================

    private FractionClientInDto mapPreparedFractionToClient(
            BatchPreparedFractionInDto fraction) {
        if (fraction == null) {
            return FractionClientInDto.builder().build();
        }
        return FractionClientInDto.builder()
                .investorAccountId(fraction.getInvestorAccountId())
                .participantAccountId(fraction.getParticipantAccountId())
                .fiduciarySpecialist(fraction.getFiduciarySpecialist())
                .sourceQuoteTypeId(fraction.getSourceQuoteTypeId())
                .reference(fraction.getReference())
                .fractionQuantity(fraction.getFractionQuantity())
                .commissionPercentage(fraction.getCommissionPercentage())
                .valTax(fraction.getValTax())
                .cashAccount(fraction.getCashAccount())
                .custodianId(fraction.getCustodianId())
                .ficAdministratorId(fraction.getFicAdministratorId())
                .milaDirectDepositorId(fraction.getMilaDirectDepositorId())
                .transferParticipantId(fraction.getTransferParticipantId())
                .haveAssignmentMark(fraction.getHaveAssignmentMark())
                .uniqueFractionId(fraction.getUniqueFractionId())
                .custodianStatusId(fraction.getCustodianStatusId())
                .referencePackage(fraction.getReferencePackage())
                .build();
    }

    private BatchPreparedFractionInDto mapToBatchPreparedFraction(
            FractionClientInDto fraction) {
        return BatchPreparedFractionInDto.builder()
                .investorAccountId(fraction.getInvestorAccountId())
                .participantAccountId(fraction.getParticipantAccountId())
                .fiduciarySpecialist(fraction.getFiduciarySpecialist())
                .sourceQuoteTypeId(fraction.getSourceQuoteTypeId())
                .reference(fraction.getReference())
                .fractionQuantity(fraction.getFractionQuantity())
                .commissionPercentage(fraction.getCommissionPercentage())
                .valTax(fraction.getValTax())
                .cashAccount(fraction.getCashAccount())
                .custodianId(fraction.getCustodianId())
                .ficAdministratorId(fraction.getFicAdministratorId())
                .milaDirectDepositorId(fraction.getMilaDirectDepositorId())
                .transferParticipantId(fraction.getTransferParticipantId())
                .haveAssignmentMark(fraction.getHaveAssignmentMark())
                .uniqueFractionId(fraction.getUniqueFractionId())
                .custodianStatusId(fraction.getCustodianStatusId())
                .referencePackage(fraction.getReferencePackage())
                .build();
    }

    // ========================================================================
    // COMMON BUSINESS VALIDATIONS
    // ========================================================================

    private String validateAccountFraction(AssignmentTradeContext trade, SideEntity side, Long investorAccountId,
            Long participantAccountId, AccountLookupContext accountLookupContext) {
        return countedFractionHelper.validateAccountFraction((TradeEntity) null, side, investorAccountId,
                participantAccountId, accountLookupContext);
    }

    private void validateCountryAndFieldsOperation(AssignmentTradeContext trade, List<FractionClientInDto> fractions) {
        if (!CountryEnum.COLOMBIA.getId().equals(trade.countryId())) {
            return;
        }
        for (FractionClientInDto fraction : fractions) {
            if (ObjectUtils.isEmpty(fraction.getCashAccount())) {
                throw new ServiceException(ErrorCode.CUD_ACCOUNT_CANT_BE_EMPTY_TO_COLOMBIA_OPERATION);
            }
        }
    }

    private void validateMilaLocal(AssignmentTradeContext trade, SideEntity side,
            List<FractionClientInDto> fractions,
            Map<AccountValidationKey, FractionAccountOutDto> accountValidations,
            AccountLookupContext accountLookupContext) {
        for (FractionClientInDto fraction : fractions) {
            String accountNumber = countedFractionHelper.getAccountNumber(fraction, accountLookupContext);
            FractionAccountOutDto account = getCachedAccountValidation(accountValidations, trade, side, accountNumber,
                    fraction.getSourceQuoteTypeId(), false);

            // Obligatoriedad de custodio y fic admin para procesos Batch orc
            fraction.setCustodianId(
                    account.getCustodian() != null ? account.getCustodian().getId() : fraction.getCustodianId());
            fraction.setFicAdministratorId(account.getFicAdmin() != null ? account.getFicAdmin().getId() : null);
            fraction.setCashAccount(
                    account.getFicAdmin() != null && !account.getFicAdmin().getBank_account().trim().isEmpty()
                            ? new BigDecimal(account.getFicAdmin().getBank_account().trim())
                            : fraction.getCashAccount());

            boolean milaLocal = account.getMilaDirectDepositor() != null
                    && account.getMilaDirectDepositor().getId() != null;
            if (milaLocal) {
                Long expected = account.getMilaDirectDepositor().getId();
                if (fraction.getCustodianId() != null || fraction.getFicAdministratorId() != null) {
                    throw new ServiceException(
                            "Para una fracción MILA Local, custodianId y ficAdministratorId deben venir vacíos",
                            ErrorCode.BAD_REQUEST,
                            HttpStatus.BAD_REQUEST);
                }
                if (fraction.getMilaDirectDepositorId() == null) {
                    throw new ServiceException("Para una fracción MILA Local, milaDirectDepositorId es obligatorio",
                            ErrorCode.BAD_REQUEST,
                            HttpStatus.BAD_REQUEST);
                }
                if (!Objects.equals(fraction.getMilaDirectDepositorId(), expected)) {
                    throw new ServiceException(
                            "El milaDirectDepositorId enviado no corresponde al beneficiario configurado como MILA Local",
                            ErrorCode.BAD_REQUEST,
                            HttpStatus.BAD_REQUEST);
                }
            } else if (fraction.getMilaDirectDepositorId() != null) {
                throw new ServiceException(
                        "No se debe enviar milaDirectDepositorId cuando la cuenta no corresponde a MILA Local",
                        ErrorCode.BAD_REQUEST,
                        HttpStatus.BAD_REQUEST);
            }
        }
    }

    private boolean isAutomaticAssignmentApplicable(AssignmentParticipantContext participant, Long originTypeId) {
        return participant != null
                && Objects.equals(participant.countryId(), CountryEnum.COLOMBIA.getId())
                && DirectAllocationEnum.TRUE.getId().equalsIgnoreCase(participant.directAllocation())
                && Objects.equals(originTypeId, TypeEnum.OWN_POSITION_POINT_ORIGIN.getId());
    }

    private void validateOwnPosition(AssignmentTradeContext trade, SideEntity side,
            List<FractionClientInDto> fractions) {
        Long sourceQuoteTypeId = originForSide(trade, side);
        if (!TypeEnum.OWN_POSITION_POINT_ORIGIN.getId().equals(sourceQuoteTypeId)) {
            return;
        }
        if (fractions.size() > 1) {
            throw new ServiceException(ErrorCode.OWN_POSITION_ONLY_ONE_FRACTION_ALLOWED, HttpStatus.BAD_REQUEST);
        }
        if (!fractions.isEmpty()) {
            BigDecimal commission = fractions.get(0).getCommissionPercentage();
            if (commission != null && commission.compareTo(BigDecimal.ZERO) != 0) {
                throw new ServiceException(ErrorCode.OWN_POSITION_COMMISSION_MUST_BE_ZERO, HttpStatus.BAD_REQUEST);
            }
        }
    }

    private FractionAccountOutDto getCachedAccountValidation(
            Map<AccountValidationKey, FractionAccountOutDto> accountValidations,
            AssignmentTradeContext trade,
            SideEntity side,
            String accountNumber,
            Long sourceQuoteTypeId,
            Boolean isLocalCorrection) {
        AccountValidationKey key = new AccountValidationKey(accountNumber, sourceQuoteTypeId);
        return accountValidations.computeIfAbsent(key,
                ignored -> validateCountedFractionService.validateAccountFractionAssignment(
                        trade, accountNumber, side.getId(), sourceQuoteTypeId, isLocalCorrection));
    }

    // ========================================================================
    // INTERNAL TYPES
    // ========================================================================

    private enum BatchPayloadMode {
        RAW,
        PREPARED
    }

    /**
     * Clave funcional de la resolución de una cuenta dentro del request.
     * La combinación preserva las dependencias que consume la validación:
     * cuenta, participante, depósito, origen, tipo de operación y condición
     * MILA (país del trade y del instrumento). tradeId no agrega semántica.
     */
    private record AccountResolutionKey(
            String titleAccount,
            Long participantId,
            String depositoryId,
            Long originId,
            Long operationTypeId,
            Long tradeCountryId,
            Long securityTitleCountryId,
            Boolean isLocalCorrection) {
    }

    private record TradeSideKey(
            Long tradeId,
            String sideId) {
    }

    private record SettlementPrefetchMetrics(
            int lookupRequests,
            int uniqueTradeSides,
            int repositoryCalls,
            int rowsLoaded) {
    }

    private record CudPrefetchMetrics(
            int lookupRequests,
            int uniqueTradeSides,
            int uniqueBusinessKeys,
            int repositoryCalls,
            int rowsLoaded) {
    }

    private record PreparedBatchItem(
            BatchAssignmentItemInDto item,
            List<FractionClientInDto> fractions) {
    }

    private record ResolvedRawFraction(
            FractionClientInDto fraction,
            FractionAccountOutDto accountValidation) {
    }

    private record RawPreparedItem(
            BatchAssignmentValidationItemInDto item,
            AssignmentTradeContext trade,
            SideEntity side,
            List<ResolvedRawFraction> fractions) {
    }

    /**
     * Cache estrictamente request-scoped.
     * <p>
     * No reemplaza Redis/Caffeine y no genera riesgo de datos stale
     * entre distintos POST.
     */
    private record BatchValidationContext(
            Map<Long, TaxesEntity> taxesByCountry,
            Map<TradeSideKey, List<SettlementEntity>> settlementsByTradeSide,
            Map<Long, BusinessRuleOutDto> reassignmentRulesByCountry,
            Map<TradeSideKey, ParticipantBankAccountOutDto> cudAccountsByTradeSide) {

        private static BatchValidationContext create() {

            return new BatchValidationContext(
                    new HashMap<>(),
                    new HashMap<>(),
                    new HashMap<>(),
                    new HashMap<>());
        }
    }

}

```

## src/main/java/com/nubo/operations/cmd/api/service/impl/FractionationCountedServiceImpl.java

```java
package com.nubo.operations.cmd.api.service.impl;

import static com.nubo.operations.cmd.api.helpers.CountedFractionHelper.taskMillis;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StopWatch;

import com.nubo.operations.cmd.api.application.properties.PropertiesConfig;
import com.nubo.operations.cmd.api.application.properties.PropertiesContext;
import com.nubo.operations.cmd.api.client.operation.fractionation.models.dto.request.FractionClientInDto;
import com.nubo.operations.cmd.api.client.operation.fractionation.service.OperationFractionationClient;
import com.nubo.operations.cmd.api.client.operation.rules.models.dto.request.StatusUpdateTradeInDto;
import com.nubo.operations.cmd.api.client.operation.rules.models.dto.response.StatusUpdateTradeOutDto;
import com.nubo.operations.cmd.api.client.operation.rules.service.OperationBusinessRuleClient;
import com.nubo.operations.cmd.api.exception.ServiceException;
import com.nubo.operations.cmd.api.exception.error.ErrorCode;
import com.nubo.operations.cmd.api.helpers.CountedFractionHelper;
import com.nubo.operations.cmd.api.helpers.MapperUtil;
import com.nubo.operations.cmd.api.models.context.AccountLookupContext;
import com.nubo.operations.cmd.api.models.domain.CorrectionData;
import com.nubo.operations.cmd.api.models.domain.SettlementCorrection;
import com.nubo.operations.cmd.api.models.dto.request.AssignmentInDto;
import com.nubo.operations.cmd.api.models.dto.request.FractionInDto;
import com.nubo.operations.cmd.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.cmd.api.models.entity.InvestorAccountEntity;
import com.nubo.operations.cmd.api.models.entity.ParticipantAccountEntity;
import com.nubo.operations.cmd.api.models.entity.SettlementEntity;
import com.nubo.operations.cmd.api.models.entity.SideEntity;
import com.nubo.operations.cmd.api.models.entity.StatusEntity;
import com.nubo.operations.cmd.api.models.entity.TradeEntity;
import com.nubo.operations.cmd.api.models.entity.TypeEntity;
import com.nubo.operations.cmd.api.models.enums.BusinessRuleEnum;
import com.nubo.operations.cmd.api.models.enums.CorrectionTypeEnum;
import com.nubo.operations.cmd.api.models.enums.SideEnum;
import com.nubo.operations.cmd.api.models.enums.StatusEnum;
import com.nubo.operations.cmd.api.models.enums.TypeEnum;
import com.nubo.operations.cmd.api.models.enums.VersionApiEnum;
import com.nubo.operations.cmd.api.repository.InvestorAccountRepository;
import com.nubo.operations.cmd.api.repository.ParticipantAccountRepository;
import com.nubo.operations.cmd.api.repository.SettlementRepository;
import com.nubo.operations.cmd.api.repository.TradeRepository;
import com.nubo.operations.cmd.api.service.BatchCacheService;
import com.nubo.operations.cmd.api.service.CorrectionTrackingService;
import com.nubo.operations.cmd.api.service.FractionationCountedService;
import com.nubo.operations.cmd.api.service.ValidateCountedFractionService;

import io.micrometer.core.annotation.Timed;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class FractionationCountedServiceImpl implements FractionationCountedService {

    private final TradeRepository tradeRepository;
    private final ParticipantAccountRepository participantAccountRepository;
    private final InvestorAccountRepository investorAccountRepository;
    private final OperationFractionationClient operationFractionationClient;
    private final ValidateCountedFractionService validateCountedFractionService;
    private final SettlementRepository settlementRepository;
    private final OperationBusinessRuleClient operationBusinessRuleClient;
    private final CorrectionTrackingService correctionTrackingService;
    private final PropertiesConfig propertiesConfig;
    private final BatchCacheService batchCacheService;
    private final CountedFractionHelper countedFractionHelper;

    // ========================================================================
    // PANTALLA / API INDIVIDUAL
    // NO SE CAMBIA EL CONTRATO FUNCIONAL
    // ========================================================================

    @Override
    @Timed(value = "operations.cmd.fractionation.create.fractions", description = "Time spent creating counted fractions")
    public List<SettlementOutDto> createFractions(Long tradeId, String sideId, List<FractionInDto> fractionInDtoList) {
        return executeAssignment("createFractions", tradeId, sideId, fractionInDtoList, true);
    }

    private List<SettlementOutDto> createFractionsV1(Long tradeId, String sideId,
            List<FractionInDto> fractionInDtoList, StopWatch stopWatch) {
        log.info("Start method createFractionsV1 with tradeId -> {}, sideId -> {}", tradeId, sideId);

        stopWatch.start("load-trade");
        TradeEntity tradeEntity = validateTrade(tradeId);
        SideEntity sideEntity = findSideEntity(sideId);
        stopWatch.stop();

        stopWatch.start("mapping");

        List<FractionClientInDto> fractionClientInDtoList = fractionInDtoList.stream()
                .map(this::mapToFractionClientInDto)
                .toList();

        stopWatch.stop();

        stopWatch.start("account-lookup");

        AccountLookupContext accountLookupContext = countedFractionHelper.buildAccountLookupContextFromFractions(
                fractionClientInDtoList);

        stopWatch.stop();

        stopWatch.start("validations");
        countedFractionHelper.validateCreateFraction(tradeEntity, sideEntity, fractionClientInDtoList,
                accountLookupContext);
        stopWatch.stop();

        stopWatch.start("fractionation-rest");
        List<SettlementOutDto> settlementOutDtoList = operationFractionationClient.createFractionsAssignment(tradeId,
                sideId, fractionClientInDtoList);
        stopWatch.stop();

        log.info("End method createFractionsV1, settlementOutDtoList size -> {}", settlementOutDtoList.size());

        return settlementOutDtoList;
    }

    @Override
    @Timed(value = "operations.cmd.fractionation.update.assignment", description = "Time spent updating counted fraction assignment")
    public List<SettlementOutDto> updateAssignment(Long tradeId, String sideId,
            List<FractionInDto> fractionInDtoList) {
        return executeAssignment("updateAssignment", tradeId, sideId, fractionInDtoList, false);
    }

    private List<SettlementOutDto> updateAssignmentV1(Long tradeId, String sideId,
            List<FractionInDto> fractionInDtoList, StopWatch stopWatch) {
        log.info("Start method updateAssignmentV1 with tradeId -> {}, sideId -> {}", tradeId, sideId);

        stopWatch.start("load-trade");
        TradeEntity tradeEntity = validateTrade(tradeId);
        SideEntity sideEntity = findSideEntity(sideId);
        stopWatch.stop();

        stopWatch.start("mapping");
        List<FractionClientInDto> fractionClientInDtoList = fractionInDtoList.stream()
                .map(this::mapToFractionClientInDto)
                .toList();
        stopWatch.stop();

        stopWatch.start("account-lookup");
        AccountLookupContext accountLookupContext = countedFractionHelper
                .buildAccountLookupContextFromFractions(fractionClientInDtoList);
        stopWatch.stop();

        stopWatch.start("validations");
        countedFractionHelper.validateCreateFraction(tradeEntity, sideEntity, fractionClientInDtoList,
                accountLookupContext);
        stopWatch.stop();

        stopWatch.start("fractionation-rest");
        List<SettlementOutDto> settlementOutDtoList = operationFractionationClient.updateFractionsAssignment(tradeId,
                sideId, fractionClientInDtoList);
        stopWatch.stop();

        log.info("End method updateAssignmentV1, settlementOutDtoList size -> {}", settlementOutDtoList.size());
        return settlementOutDtoList;
    }

    private List<SettlementOutDto> executeAssignment(String operation, Long tradeId, String sideId,
            List<FractionInDto> fractions, boolean create) {
        StopWatch stopWatch = new StopWatch("assignment-cmd");
        long totalStartNanos = System.nanoTime();
        String result = "ERROR";
        try {
            if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) != VersionApiEnum.V1) {
                throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
            }
            List<SettlementOutDto> response = create
                    ? createFractionsV1(tradeId, sideId, fractions, stopWatch)
                    : updateAssignmentV1(tradeId, sideId, fractions, stopWatch);
            result = "SUCCESS";
            return response;
        } finally {
            if (stopWatch.isRunning()) {
                stopWatch.stop();
            }
            logAssignmentPerformance(operation, tradeId, sideId, fractions, result, totalStartNanos, stopWatch);
        }
    }

    private void logAssignmentPerformance(String operation, Long tradeId, String sideId,
            List<FractionInDto> fractions, String result, long totalStartNanos, StopWatch stopWatch) {
        log.info(
                "PERF_ASSIGNMENT service=cmd operation={} result={} "
                        + "tradeId={} side={} fractionCount={} totalMs={} "
                        + "loadTradeMs={} mappingMs={} accountLookupMs={} "
                        + "validationsMs={} fractionationRestMs={}",
                operation,
                result,
                tradeId,
                sideId,
                fractions == null ? 0 : fractions.size(),
                TimeUnit.NANOSECONDS.toMillis(
                        System.nanoTime() - totalStartNanos),
                taskMillis(stopWatch, "load-trade"),
                taskMillis(stopWatch, "mapping"),
                taskMillis(stopWatch, "account-lookup"),
                taskMillis(stopWatch, "validations"),
                taskMillis(stopWatch, "fractionation-rest"));
    }

    // ========================================================================
    // CORRECTIONS
    // ========================================================================

    @Override
    @Transactional
    @Timed(value = "operations.cmd.fractionation.update.correction", description = "Time spent updating counted fraction correction")
    public List<SettlementOutDto> updateCorrection(Long tradeId, String sideId,
            List<AssignmentInDto> assignmentInDtoList) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return updateCorrectionV1(tradeId, sideId, assignmentInDtoList);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<SettlementOutDto> updateCorrectionV1(Long tradeId, String sideId,
            List<AssignmentInDto> assignmentInDtoList) {
        log.info("Start method updateCorrectionV1 with tradeId -> {}, sideId -> {}", tradeId, sideId);

        // Adquirir lock de la operación y del lado correspondiente para evitar
        // inconsistencias durante la corrección
        List<SettlementEntity> currentSettlementList = acquireTradeSideLock(tradeId, sideId);
        TradeEntity tradeEntity = currentSettlementList.get(0).getTrade();
        SideEntity sideEntity = currentSettlementList.get(0).getSide();

        List<AssignmentInDto> newFractions = assignmentInDtoList.stream()
                .filter(a -> a.getFraction() == null)
                .toList();
        List<AssignmentInDto> existingFractions = assignmentInDtoList.stream()
                .filter(a -> a.getFraction() != null)
                .toList();
        AccountLookupContext accountLookupContext = buildAccountLookupContextFromAssignments(assignmentInDtoList);

        log.info("Request has {} new fractions (fraction=null) and {} existing fractions (fraction!=null)",
                newFractions.size(), existingFractions.size());

        if (!existingFractions.isEmpty()) {
            this.validateUpdateFractionCorrection(tradeEntity, sideEntity, existingFractions, accountLookupContext);
        }

        StatusUpdateTradeOutDto statusUpdateTradeOutDto = this.validateRuleAndStatusCorrection(tradeId, sideId);
        Map<Integer, SettlementEntity> mapSettlementByFraction = currentSettlementList.stream()
                .collect(Collectors.toMap(SettlementEntity::getFraction, settlement -> settlement,
                        (current, ignore) -> current));

        correctionTrackingService.validateNoCustodiadaFractions(currentSettlementList);
        SettlementEntity externalFraction = correctionTrackingService.findExternalFraction(currentSettlementList);

        // Si hay fracciones nuevas, validar división de fracción extranjera
        if (!newFractions.isEmpty()) {
            correctionTrackingService.validateExternalFractionDivision(
                    currentSettlementList, newFractions, existingFractions, externalFraction);
        }

        if (!existingFractions.isEmpty()) {
            correctionTrackingService.validateFractionsMatch(currentSettlementList, existingFractions);
            correctionTrackingService.validateQuantitySum(currentSettlementList, existingFractions);
        }

        // Filtrar fracciones existentes que realmente tienen cambios
        List<AssignmentInDto> fractionsWithChanges = existingFractions.stream()
                .filter(assignmentInDto -> {
                    SettlementEntity currentSettlement = findSettlementByFraction(mapSettlementByFraction,
                            assignmentInDto.getFraction());
                    boolean hasChanges = correctionTrackingService.hasAnyChange(currentSettlement, assignmentInDto);
                    if (!hasChanges) {
                        log.info("Fraction {} has no changes, skipping correction processing",
                                assignmentInDto.getFraction());
                    }
                    return hasChanges;
                })
                .toList();

        log.info("After filtering: {} fractions with changes out of {} existing fractions",
                fractionsWithChanges.size(), existingFractions.size());

        // Si no hay fracciones con cambios ni fracciones nuevas, retornar lista vacía
        if (fractionsWithChanges.isEmpty() && newFractions.isEmpty()) {
            log.info(
                    "No corrections to process: no fractions with changes and no new fractions. Returning empty list.");
            return new ArrayList<>();
        }

        List<CorrectionData> correctionDataListForKafka = new ArrayList<>();
        List<CorrectionData> localCorrections = new ArrayList<>();
        List<CorrectionData> correctionsInRequestOrder = new ArrayList<>();

        for (AssignmentInDto assignmentInDto : fractionsWithChanges) {
            SettlementEntity currentSettlement = findSettlementByFraction(mapSettlementByFraction,
                    assignmentInDto.getFraction());
            CorrectionTypeEnum correctionType = correctionTrackingService.detectCorrectionType(
                    currentSettlement, assignmentInDto);

            log.info("Detected correction type: {} for fraction: {} (indMaster: {})",
                    correctionType, assignmentInDto.getFraction(), currentSettlement.getIndMaster());

            correctionTrackingService.validateCorrectionByType(correctionType, currentSettlement, assignmentInDto);

            // Determinar si debe enviarse a Deceval
            boolean sendToDeceval = correctionTrackingService.requiresDecevalSubmission(
                    currentSettlement, assignmentInDto);

            // Ejecutar lógica de cobro y obtener si se requirió cobro
            boolean chargeRequired = correctionTrackingService.requiresCharge(
                    correctionType, tradeId, sideId, assignmentInDto.getFraction());

            log.info("Correction for fraction {}: sendToDeceval={}, chargeRequired={}",
                    assignmentInDto.getFraction(), sendToDeceval, chargeRequired);

            // Registrar en SETTLEMENT_CORRECTIONS (INICIAL + ACTUAL con su propio
            // correctionNumber)
            SettlementCorrection settlementCorrection = correctionTrackingService.trackCorrection(
                    tradeEntity, currentSettlement, assignmentInDto, correctionType);

            log.info("Correction tracked with number: {} for fraction: {}",
                    settlementCorrection.correctionNumber(), assignmentInDto.getFraction());

            CorrectionData correctionData = new CorrectionData(
                    assignmentInDto, currentSettlement, correctionType, false, settlementCorrection, sendToDeceval);
            correctionsInRequestOrder.add(correctionData);
            if (!sendToDeceval
                    && correctionTrackingService.isCommissionOrReferenceOnlyCorrection(currentSettlement,
                            assignmentInDto)) {
                localCorrections.add(correctionData);
            } else {
                correctionDataListForKafka.add(correctionData);
            }
        }

        if (!newFractions.isEmpty() && externalFraction != null) {
            for (AssignmentInDto newFraction : newFractions) {
                // Las fracciones nuevas siempre son de tipo EXTERNAL (vienen de dividir la
                // extranjera)
                CorrectionTypeEnum correctionType = CorrectionTypeEnum.EXTERNAL;

                log.info("Processing new fraction from external division");

                // Determinar si debe enviarse a Deceval (siempre true para nuevas fracciones)
                boolean sendToDeceval = true;

                // Ejecutar lógica de cobro
                boolean chargeRequired = correctionTrackingService.requiresCharge(
                        correctionType, tradeId, sideId, externalFraction.getFraction());

                log.info("New fraction from external division: sendToDeceval=true, chargeRequired={}",
                        chargeRequired);

                // Registrar en SETTLEMENT_CORRECTIONS (INICIAL + ACTUAL con su propio
                // correctionNumber)
                // El INICIAL tendrá los datos de la fracción extranjera original
                SettlementCorrection settlementCorrection = correctionTrackingService.trackCorrection(
                        tradeEntity, externalFraction, newFraction, correctionType);

                log.info("New fraction correction tracked with number: {}", settlementCorrection.correctionNumber());

                CorrectionData correctionData = new CorrectionData(
                        newFraction, externalFraction, correctionType, true, settlementCorrection, sendToDeceval);
                correctionDataListForKafka.add(correctionData);
                correctionsInRequestOrder.add(correctionData);
            }
        }

        StatusEntity newSideStatusEntity = MapperUtil.statusClientOutDtoToStatusEntity(
                statusUpdateTradeOutDto.getNewStatusSide());
        StatusEntity newFractionStatusEntity = MapperUtil.statusClientOutDtoToStatusEntity(
                statusUpdateTradeOutDto.getNewStatusFraction());

        // Cerrar dentro de la misma transacción: las filas ya están bloqueadas en CMD.
        localCorrections.forEach(correctionTrackingService::acceptLocalCorrection);
        List<SettlementEntity> localSettlements = localCorrections.stream()
                .map(CorrectionData::currentSettlement)
                .toList();
        if (!localSettlements.isEmpty()) {
            settlementRepository.saveAll(localSettlements);
        }

        if (!correctionDataListForKafka.isEmpty()) {
            List<SettlementEntity> settlementsToUpdate = correctionDataListForKafka.stream()
                    .map(CorrectionData::currentSettlement)
                    .toList();
            updateSettlementsStatus(settlementsToUpdate, newFractionStatusEntity);
            this.updateTradeStatus(tradeEntity, sideEntity, newSideStatusEntity);
            correctionTrackingService.publishCorrectionsToKafka(tradeEntity, sideEntity, correctionDataListForKafka,
                    externalFraction);
        } else if (!localSettlements.isEmpty() && currentSettlementList.stream()
                .allMatch(settlement -> settlement.getStatus() != null
                        && (StatusEnum.REASSIGNMENT_CORRECTION_ACCEPTED.getId() == settlement.getStatus().getId()
                                || StatusEnum.ASSIGNMENT_ACCEPTED.getId() == settlement.getStatus().getId()))) {
            this.updateTradeStatus(tradeEntity, sideEntity, localSettlements.get(0).getStatus());
        }

        List<SettlementOutDto> settlementOutDtoList = correctionsInRequestOrder.stream()
                .map(correction -> localCorrections.contains(correction)
                        ? MapperUtil.settlementEntityToSettlementOutDto(correction.currentSettlement())
                        : MapperUtil.mapCorrectionToSettlementOutDto(correction.currentSettlement()))
                .toList();

        log.info("End method updateCorrectionV1, settlementOutDtoList -> {}", settlementOutDtoList);
        return settlementOutDtoList;
    }

    private void updateTradeStatus(TradeEntity tradeEntity, SideEntity sideEntity, StatusEntity newStatusEntity) {
        StatusEntity previousStatus = getBuyOrSellStatus(tradeEntity, sideEntity);

        if (SideEnum.BUY.getId().equalsIgnoreCase(sideEntity.getId())) {
            tradeEntity.setBuyStatus(newStatusEntity);
        } else if (SideEnum.SELL.getId().equalsIgnoreCase(sideEntity.getId())) {
            tradeEntity.setSellStatus(newStatusEntity);
        }

        tradeEntity.setLastModifyUser(PropertiesContext.getClientUser());
        tradeEntity.setLastModifyApplication(propertiesConfig.getApiName());
        tradeEntity.setLastModifyDate(PropertiesContext.getClientDatetime());

        tradeRepository.save(tradeEntity);

        log.debug("Updated trade {} status for side {} from {} to {} with history saved", tradeEntity.getId(),
                sideEntity.getId(), previousStatus.getId(), newStatusEntity.getId());
    }

    private List<SettlementOutDto> updateSettlementsStatus(List<SettlementEntity> settlements,
            StatusEntity newStatusEntity) {
        LocalDateTime updateTime = PropertiesContext.getClientDatetime();
        String user = PropertiesContext.getClientUser();
        String application = propertiesConfig.getApiName();
        settlements.forEach(settlementEntity -> {
            settlementEntity.setStatus(newStatusEntity);
            settlementEntity.setLastModifyUser(user);
            settlementEntity.setLastModifyApplication(application);
            settlementEntity.setLastModifyDate(updateTime);
        });

        settlementRepository.saveAll(settlements);

        return settlements.stream()
                .map(MapperUtil::mapCorrectionToSettlementOutDto)
                .toList();
    }

    private SettlementEntity findSettlementByFraction(Map<Integer, SettlementEntity> settlementsByFraction,
            Integer fraction) {

        return settlementsByFraction.get(fraction);
    }

    private void validateUpdateFractionCorrection(TradeEntity tradeEntity, SideEntity sideEntity,
            List<AssignmentInDto> assignmentInDtoList, AccountLookupContext accountLookupContext) {
        validateOwnPositionCorrection(tradeEntity, sideEntity);
        validateAccountUpdate(assignmentInDtoList, tradeEntity, sideEntity, accountLookupContext);
        validateAccountDuplicatedUpdateFraction(assignmentInDtoList);
        validateSameCustodianIdUpdate(assignmentInDtoList);

        for (AssignmentInDto assignmentInDto : assignmentInDtoList) {
            countedFractionHelper.validateAccountFraction(tradeEntity, sideEntity,
                    assignmentInDto.getInvestorAccountId(), assignmentInDto.getParticipantAccountId(),
                    accountLookupContext);
        }
    }

    // ========================================================================
    // COMMON BUSINESS VALIDATIONS
    // ========================================================================

    private void validateAccountUpdate(List<AssignmentInDto> assignmentInDtoList,
            TradeEntity tradeEntity, SideEntity sideEntity, AccountLookupContext accountLookupContext) {
        log.debug("Validate Account Update");
        for (AssignmentInDto assignmentInDto : assignmentInDtoList) {
            if (assignmentInDto.getParticipantAccountId() != null) {
                ParticipantAccountEntity participantAccountEntity = countedFractionHelper.findParticipantAccount(
                        assignmentInDto.getParticipantAccountId(), accountLookupContext);

                validateCountedFractionService.validateAccountFractionAssignment(
                        tradeEntity,
                        participantAccountEntity.getAccountNumber(),
                        sideEntity.getId(),
                        assignmentInDto.getSourceQuoteTypeId(),
                        false);

            } else if (assignmentInDto.getInvestorAccountId() != null) {
                InvestorAccountEntity investorAccountEntity = countedFractionHelper.findInvestorAccount(
                        assignmentInDto.getInvestorAccountId(), accountLookupContext);

                validateCountedFractionService.validateAccountFractionAssignment(
                        tradeEntity,
                        investorAccountEntity.getAccountNumber(),
                        sideEntity.getId(),
                        assignmentInDto.getSourceQuoteTypeId(),
                        false);

            } else {
                throw new ServiceException(ErrorCode.ACCOUNT_NOT_FOUND, HttpStatus.BAD_REQUEST);
            }
        }
    }

    private void validateAccountDuplicatedUpdateFraction(List<AssignmentInDto> assignmentInDtoList) {
        log.debug("Validate Account Duplicated for Update Fraction");
        Set<Long> duplicatedInvestorAccountList = new HashSet<>();
        for (AssignmentInDto assignmentInDto : assignmentInDtoList) {
            if (!ObjectUtils.isEmpty(assignmentInDto.getInvestorAccountId()) &&
                    !duplicatedInvestorAccountList.add(assignmentInDto.getInvestorAccountId())) {
                throw new ServiceException(ErrorCode.INVESTOR_ACCOUNT_DUPLICATED, HttpStatus.BAD_REQUEST);
            }
        }

        Set<Long> duplicatedParticipantAccountList = new HashSet<>();
        for (AssignmentInDto assignmentInDto : assignmentInDtoList) {
            if (!ObjectUtils.isEmpty(assignmentInDto.getParticipantAccountId()) &&
                    !duplicatedParticipantAccountList.add(assignmentInDto.getParticipantAccountId())) {
                throw new ServiceException(ErrorCode.PARTICIPANT_ACCOUNT_DUPLICATED, HttpStatus.BAD_REQUEST);
            }
        }
    }

    private void validateSameCustodianIdUpdate(List<AssignmentInDto> assignmentInDtoList) {
        log.debug("Validate Same Custodian ID for Update");
        Long custodianReference = null;
        for (AssignmentInDto dto : assignmentInDtoList) {
            Long custodianId = dto.getCustodianId();

            if (custodianId != null) {
                if (custodianReference == null) {
                    custodianReference = custodianId;
                } else if (!custodianReference.equals(custodianId)) {
                    throw new ServiceException(
                            ErrorCode.CUSTODIAN_ID_MUST_BE_THE_SAME,
                            HttpStatus.BAD_REQUEST);
                }
            }
        }
    }

    private StatusUpdateTradeOutDto validateRuleAndStatusCorrection(Long tradeId, String sideId) {
        StatusUpdateTradeInDto statusUpdateTradeInDto = StatusUpdateTradeInDto.builder()
                .tradeId(tradeId)
                .sideId(sideId)
                .code(BusinessRuleEnum.RULE_OPERATION_CORRECTION)
                .build();

        StatusUpdateTradeOutDto statusAllowedOptionsOutDto = operationBusinessRuleClient
                .validateUpdateStatusTrade(statusUpdateTradeInDto);
        if (Boolean.TRUE.equals(statusAllowedOptionsOutDto.getIsValid())) {
            if (statusAllowedOptionsOutDto.getNewStatusFraction() == null
                    || statusAllowedOptionsOutDto.getNewStatusSide() == null) {
                throw new ServiceException(ErrorCode.ERROR_BUSINESS_RULE, HttpStatus.BAD_GATEWAY);
            }
            return statusAllowedOptionsOutDto;
        } else {
            throw new ServiceException(ErrorCode.ERROR_BUSINESS_RULE,
                    statusAllowedOptionsOutDto.getDescription(), HttpStatus.BAD_REQUEST);
        }
    }

    private StatusEntity getBuyOrSellStatus(TradeEntity tradeEntity, SideEntity sideEntity) {
        StatusEntity statusEntity = null;
        if (SideEnum.BUY.getId().equalsIgnoreCase(sideEntity.getId())) {
            statusEntity = tradeEntity.getBuyStatus();
        }
        if (SideEnum.SELL.getId().equalsIgnoreCase(sideEntity.getId())) {
            statusEntity = tradeEntity.getSellStatus();
        }
        return statusEntity != null ? statusEntity : StatusEntity.builder().id(0L).build();
    }

    private FractionClientInDto mapToFractionClientInDto(
            FractionInDto fractionInDto) {

        if (fractionInDto == null) {
            return FractionClientInDto.builder().build();
        }

        FractionClientInDto result = new FractionClientInDto();

        BeanUtils.copyProperties(fractionInDto, result);

        return result;
    }

    private AccountLookupContext buildAccountLookupContextFromAssignments(
            List<AssignmentInDto> assignments) {

        Map<Long, ParticipantAccountEntity> participantAccounts = new HashMap<>();

        Map<Long, InvestorAccountEntity> investorAccounts = new HashMap<>();

        Set<Long> participantIds = assignments.stream()
                .map(AssignmentInDto::getParticipantAccountId)
                .filter(Objects::nonNull)
                .collect(Collectors.toSet());

        if (!participantIds.isEmpty()) {
            participantAccountRepository
                    .findAllById(participantIds)
                    .forEach(account -> participantAccounts.put(account.getId(), account));
        }

        Set<Long> investorIds = assignments.stream()
                .map(AssignmentInDto::getInvestorAccountId)
                .filter(Objects::nonNull)
                .collect(Collectors.toSet());

        if (!investorIds.isEmpty()) {
            investorAccountRepository
                    .findAllById(investorIds)
                    .forEach(account -> investorAccounts.put(account.getId(), account));
        }

        return new AccountLookupContext(participantAccounts, investorAccounts);
    }

    // ========================================================================
    // BASIC LOADERS
    // ========================================================================

    private TradeEntity validateTrade(Long tradeId) {
        if (tradeId == null) {
            throw new ServiceException(
                    ErrorCode.TRADE_NOT_FOUND,
                    HttpStatus.NOT_FOUND);
        }

        return tradeRepository
                .findById(tradeId)
                .orElseThrow(() -> new ServiceException(
                        ErrorCode.TRADE_NOT_FOUND,
                        HttpStatus.NOT_FOUND));
    }

    private SideEntity findSideEntity(
            String sideId) {

        if (sideId == null) {

            throw new ServiceException(
                    ErrorCode.SIDE_NOT_FOUND,
                    HttpStatus.NOT_FOUND);
        }

        return batchCacheService
                .findSideEntity(sideId)
                .orElseThrow(() -> new ServiceException(
                        ErrorCode.SIDE_NOT_FOUND,
                        HttpStatus.NOT_FOUND));
    }

    private List<SettlementEntity> acquireTradeSideLock(
            Long tradeId,
            String sideId) {

        if (tradeId == null ||
                sideId == null) {

            throw new ServiceException(
                    ErrorCode.TRADE_NOT_FOUND,
                    HttpStatus.NOT_FOUND);
        }

        List<SettlementEntity> locked = settlementRepository
                .findByTradeIdAndSideIdWithLock(
                        tradeId,
                        sideId);

        if (locked.isEmpty()) {

            throw new ServiceException(
                    ErrorCode.TRADE_NOT_FOUND,
                    HttpStatus.NOT_FOUND);
        }

        log.debug(
                "Pessimistic lock acquired for tradeId -> {}, sideId -> {}",
                tradeId,
                sideId);

        return locked;
    }

    private void validateOwnPositionCorrection(
            TradeEntity tradeEntity,
            SideEntity side) {
        log.debug("Validate OwnPosition CORRECTIONS");

        TypeEntity sourceQuoteType = null;

        if (SideEnum.BUY.getId().equals(side.getId())) {
            sourceQuoteType = tradeEntity.getSourceQuoteBuyType();
        } else if (SideEnum.SELL.getId().equals(side.getId())) {
            sourceQuoteType = tradeEntity.getSourceQuoteSellType();
        }

        if (sourceQuoteType == null ||
                TypeEnum.OWN_POSITION_POINT_ORIGIN.getId().equals(sourceQuoteType.getId())) {
            throw new ServiceException(
                    ErrorCode.CORRECTION_WITH_OWN_POSITION_IS_NOT_ALLOWED,
                    HttpStatus.BAD_REQUEST);
        }
    }

}

```

## src/main/java/com/nubo/operations/cmd/api/service/impl/SettlementServiceImpl.java

```java
package com.nubo.operations.cmd.api.service.impl;

import java.util.Map;
import java.util.Objects;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import com.nubo.operations.cmd.api.application.properties.PropertiesConfig;
import com.nubo.operations.cmd.api.application.properties.PropertiesContext;
import com.nubo.operations.cmd.api.client.operation.calculation.models.dto.request.SettleAccountsInDto;
import com.nubo.operations.cmd.api.client.operation.calculation.models.dto.response.SettleAccountsOutDto;
import com.nubo.operations.cmd.api.client.operation.calculation.service.OperationCalculationClient;
import com.nubo.operations.cmd.api.exception.ServiceException;
import com.nubo.operations.cmd.api.exception.error.ErrorCode;
import com.nubo.operations.cmd.api.helpers.MapperUtil;
import com.nubo.operations.cmd.api.models.dto.request.SettlementCommissionUpdateInDto;
import com.nubo.operations.cmd.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.cmd.api.models.entity.SettlementEntity;
import com.nubo.operations.cmd.api.models.entity.SettlementKey;
import com.nubo.operations.cmd.api.models.entity.TradeEntity;
import com.nubo.operations.cmd.api.models.enums.TypeEnum;
import com.nubo.operations.cmd.api.models.enums.VersionApiEnum;
import com.nubo.operations.cmd.api.repository.SettlementRepository;
import com.nubo.operations.cmd.api.service.SettlementService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class SettlementServiceImpl implements SettlementService {

    private final SettlementRepository settlementRepository;
    private final OperationCalculationClient operationCalculationClient;
    private final PropertiesConfig propertiesConfig;

    @Override
    public SettlementOutDto updateSettlementCommission(SettlementKey settlementKey,
            SettlementCommissionUpdateInDto settlementCommissionUpdateInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return updateSettlementCommissionV1(settlementKey, settlementCommissionUpdateInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private SettlementOutDto updateSettlementCommissionV1(SettlementKey settlementKey,
            SettlementCommissionUpdateInDto settlementCommissionUpdateInDto) {
        log.info("Start method updateSettlementCommissionV1, settlementKey -> {}", settlementKey);

        SettlementEntity settlementEntity = validateSettlement(settlementKey);
        TradeEntity tradeEntity = settlementEntity.getTrade();

        if (PropertiesContext.getClientDatetime().toLocalDate()
                .isAfter(tradeEntity.getClearingDate())) {
            throw new ServiceException(ErrorCode.COMMISSION_SETTLEMENT_DATE_COMPLIANCE_AFTER, HttpStatus.BAD_REQUEST);
        }

        Long typeId = ObjectUtils.isEmpty(tradeEntity.getType()) ? null : tradeEntity.getType().getId();
        SettleAccountsInDto settleAccountsInDto = SettleAccountsInDto.builder()
                .quantity(settlementEntity.getFractionQuantity())
                .price(tradeEntity.getPrice())
                .commission(settlementCommissionUpdateInDto.getCommissionPercentage())
                .valTax(settlementEntity.getValTax())
                .sideId(settlementEntity.getSide().getId())
                .typeId(typeId)
                .build();
        SettleAccountsOutDto settleAccountsOutDto = operationCalculationClient.getSettleAccounts(settleAccountsInDto);

        SettlementEntity settlementEntityUpdate = settlementEntity.toBuilder()
                .commissionPercentage(settlementCommissionUpdateInDto.getCommissionPercentage())
                .commissionAmount(settleAccountsOutDto.getCommissionAmount())
                .valTaxAmount(settleAccountsOutDto.getValTaxAmount())
                .netAmount(settleAccountsOutDto.getNetAmount())
                .settlementAmount(settleAccountsOutDto.getTransferValue())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .lastModifyIp(PropertiesContext.getClientIp())
                .build();

        if (TypeEnum.REPO_OPERATION.getId().equals(typeId) &&
                !ObjectUtils.isEmpty(settlementEntityUpdate.getCommissionAmount()) &&
                !ObjectUtils.isEmpty(settlementEntityUpdate.getTrade()) &&
                settlementEntityUpdate.getCommissionAmount()
                        .compareTo(settlementEntityUpdate.getTrade().getPrice()) > 0) {
            throw new ServiceException(ErrorCode.COMMISSION_CANNOT_EXCEED_REPO_AMOUNT, HttpStatus.BAD_REQUEST,
                    Map.of(
                            "commissionAmount", settlementEntityUpdate.getCommissionAmount(),
                            "repoAmount", settlementEntityUpdate.getRepoAmount(),
                            "getPrice", settlementEntityUpdate.getTrade().getPrice()));
        }

        SettlementOutDto settlementOutDto = MapperUtil
                .settlementEntityToSettlementOutDto(settlementRepository.save(settlementEntityUpdate));

        log.info("End method updateSettlementCommissionV1, settlement -> {}", settlementOutDto);

        return settlementOutDto;
    }

    private SettlementEntity validateSettlement(SettlementKey settlementKey) {
        if (settlementKey == null) {
            throw new ServiceException(ErrorCode.SETTLEMENT_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        return settlementRepository.findById(settlementKey)
                .orElseThrow(() -> new ServiceException(ErrorCode.SETTLEMENT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

}

```

## src/main/java/com/nubo/operations/cmd/api/service/impl/TradeEquityServiceImpl.java

```java
package com.nubo.operations.cmd.api.service.impl;

import java.util.Objects;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import com.nubo.operations.cmd.api.application.properties.PropertiesConfig;
import com.nubo.operations.cmd.api.application.properties.PropertiesContext;
import com.nubo.operations.cmd.api.exception.ServiceException;
import com.nubo.operations.cmd.api.exception.error.ErrorCode;
import com.nubo.operations.cmd.api.helpers.MapperUtil;
import com.nubo.operations.cmd.api.models.dto.request.TradeEquityInDto;
import com.nubo.operations.cmd.api.models.dto.request.TradeEquityUpdateInDto;
import com.nubo.operations.cmd.api.models.dto.response.TradeEquityOutDto;
import com.nubo.operations.cmd.api.models.entity.TradeEntity;
import com.nubo.operations.cmd.api.models.entity.TradeEquityEntity;
import com.nubo.operations.cmd.api.models.enums.VersionApiEnum;
import com.nubo.operations.cmd.api.repository.TradeEquityRepository;
import com.nubo.operations.cmd.api.repository.TradeRepository;
import com.nubo.operations.cmd.api.service.TradeEquityService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class TradeEquityServiceImpl implements TradeEquityService {

    private final TradeEquityRepository tradeEquityRepository;
    private final TradeRepository tradeRepository;
    private final PropertiesConfig propertiesConfig;

    @Override
    public TradeEquityOutDto createTradeEquity(TradeEquityInDto tradeEquityInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return createTradeEquityV1(tradeEquityInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private TradeEquityOutDto createTradeEquityV1(TradeEquityInDto tradeEquityInDto) {
        log.debug("Start method createTradeEquityV1, tradeEquity -> {}", tradeEquityInDto);

        TradeEntity tradeEntityLast = validateTrade(tradeEquityInDto.getTradeId());

        if (tradeEquityRepository.findById(tradeEntityLast.getId()).isPresent()) {
            throw new ServiceException(ErrorCode.TRADE_EQUITY_EXISTS, HttpStatus.BAD_REQUEST);
        }

        TradeEquityEntity tradeEquityEntity = TradeEquityEntity.builder()
                .trade(tradeEntityLast)
                .foreignBrokerBuy(tradeEquityInDto.getForeignBrokerBuy())
                .foreignBrokerSell(tradeEquityInDto.getForeignBrokerSell())
                .directDepositorBuy(tradeEquityInDto.getDirectDepositorBuy())
                .directDepositorSell(tradeEquityInDto.getDirectDepositorSell())
                .sourceIndicatorBuy(tradeEquityInDto.getSourceIndicatorBuy())
                .sourceIndicatorSell(tradeEquityInDto.getSourceIndicatorSell())
                .responsibleTradeBuy(tradeEquityInDto.getResponsibleTradeBuy())
                .responsibleTradeSell(tradeEquityInDto.getResponsibleTradeSell())
                .referenceBuy(tradeEquityInDto.getReferenceBuy())
                .referenceSell(tradeEquityInDto.getReferenceSell())
                .orderBookId(tradeEquityInDto.getOrderBookId())
                .prearrangedOperation(tradeEquityInDto.getPrearrangedOperation())
                .aggressiveTip(tradeEquityInDto.getAggressiveTip())
                .exdividendPeriod(tradeEquityInDto.getExdividendPeriod())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();

        TradeEquityOutDto tradeEquityOutDto = MapperUtil.tradeEquityEntityToTradeEquityOutDto(
                tradeEquityRepository.save(tradeEquityEntity));

        log.info("End method createTradeEquityV1, tradeEquity -> {}", tradeEquityOutDto);
        return tradeEquityOutDto;
    }

    @Override
    public TradeEquityOutDto updateTradeEquity(Long tradeId, TradeEquityUpdateInDto tradeEquityUpdateInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return updateTradeEquityV1(tradeId, tradeEquityUpdateInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private TradeEquityOutDto updateTradeEquityV1(Long tradeId, TradeEquityUpdateInDto tradeEquityUpdateInDto) {
        log.debug("Start method updateTradeEquityV1, tradeId -> {}, tradeEquity -> {}", tradeId,
                tradeEquityUpdateInDto);

        TradeEquityEntity tradeEquityEntityLast = validateTradeEquity(tradeId);

        TradeEquityEntity tradeEquityEntity = TradeEquityEntity.builder()
                .trade(tradeEquityEntityLast.getTrade())
                .foreignBrokerBuy(ObjectUtils.isEmpty(tradeEquityUpdateInDto.getForeignBrokerBuy())
                        ? tradeEquityEntityLast.getForeignBrokerBuy()
                        : tradeEquityUpdateInDto.getForeignBrokerBuy())
                .foreignBrokerSell(ObjectUtils.isEmpty(tradeEquityUpdateInDto.getForeignBrokerSell())
                        ? tradeEquityEntityLast.getForeignBrokerSell()
                        : tradeEquityUpdateInDto.getForeignBrokerSell())
                .directDepositorBuy(ObjectUtils.isEmpty(tradeEquityUpdateInDto.getDirectDepositorBuy())
                        ? tradeEquityEntityLast.getDirectDepositorBuy()
                        : tradeEquityUpdateInDto.getDirectDepositorBuy())
                .directDepositorSell(ObjectUtils.isEmpty(tradeEquityUpdateInDto.getDirectDepositorSell())
                        ? tradeEquityEntityLast.getDirectDepositorSell()
                        : tradeEquityUpdateInDto.getDirectDepositorSell())
                .sourceIndicatorBuy(ObjectUtils.isEmpty(tradeEquityUpdateInDto.getSourceIndicatorBuy())
                        ? tradeEquityEntityLast.getSourceIndicatorBuy()
                        : tradeEquityUpdateInDto.getSourceIndicatorBuy())
                .sourceIndicatorSell(ObjectUtils.isEmpty(tradeEquityUpdateInDto.getSourceIndicatorSell())
                        ? tradeEquityEntityLast.getSourceIndicatorSell()
                        : tradeEquityUpdateInDto.getSourceIndicatorSell())
                .responsibleTradeBuy(ObjectUtils.isEmpty(tradeEquityUpdateInDto.getResponsibleTradeBuy())
                        ? tradeEquityEntityLast.getResponsibleTradeBuy()
                        : tradeEquityUpdateInDto.getResponsibleTradeBuy())
                .responsibleTradeSell(ObjectUtils.isEmpty(tradeEquityUpdateInDto.getResponsibleTradeSell())
                        ? tradeEquityEntityLast.getResponsibleTradeSell()
                        : tradeEquityUpdateInDto.getResponsibleTradeSell())
                .referenceBuy(ObjectUtils.isEmpty(tradeEquityUpdateInDto.getReferenceBuy())
                        ? tradeEquityEntityLast.getReferenceBuy()
                        : tradeEquityUpdateInDto.getReferenceBuy())
                .referenceSell(ObjectUtils.isEmpty(tradeEquityUpdateInDto.getReferenceSell())
                        ? tradeEquityEntityLast.getReferenceSell()
                        : tradeEquityUpdateInDto.getReferenceSell())
                .orderBookId(ObjectUtils.isEmpty(tradeEquityUpdateInDto.getOrderBookId())
                        ? tradeEquityEntityLast.getOrderBookId()
                        : tradeEquityUpdateInDto.getOrderBookId())
                .prearrangedOperation(ObjectUtils.isEmpty(tradeEquityUpdateInDto.getPrearrangedOperation())
                        ? tradeEquityEntityLast.getPrearrangedOperation()
                        : tradeEquityUpdateInDto.getPrearrangedOperation())
                .aggressiveTip(ObjectUtils.isEmpty(tradeEquityUpdateInDto.getAggressiveTip())
                        ? tradeEquityEntityLast.getAggressiveTip()
                        : tradeEquityUpdateInDto.getAggressiveTip())
                .exdividendPeriod(ObjectUtils.isEmpty(tradeEquityUpdateInDto.getExdividendPeriod())
                        ? tradeEquityEntityLast.getExdividendPeriod()
                        : tradeEquityUpdateInDto.getExdividendPeriod())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();

        TradeEquityOutDto tradeEquityOutDto = MapperUtil.tradeEquityEntityToTradeEquityOutDto(
                tradeEquityRepository.save(tradeEquityEntity));

        log.info("End method updateTradeEquityV1, tradeEquity -> {}", tradeEquityOutDto);
        return tradeEquityOutDto;
    }

    private TradeEquityEntity validateTradeEquity(Long tradeId) {
        if (tradeId == null) {
            throw new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        return tradeEquityRepository.findById(tradeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADE_EQUITY_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private TradeEntity validateTrade(Long tradeId) {
        if (tradeId == null) {
            throw new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        return tradeRepository.findById(tradeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

}

```

## src/main/java/com/nubo/operations/cmd/api/service/impl/TradeServiceImpl.java

```java
package com.nubo.operations.cmd.api.service.impl;

import java.util.Objects;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import com.nubo.operations.cmd.api.application.properties.PropertiesConfig;
import com.nubo.operations.cmd.api.application.properties.PropertiesContext;
import com.nubo.operations.cmd.api.exception.ServiceException;
import com.nubo.operations.cmd.api.exception.error.ErrorCode;
import com.nubo.operations.cmd.api.helpers.MapperUtil;
import com.nubo.operations.cmd.api.models.dto.request.TradeInDto;
import com.nubo.operations.cmd.api.models.dto.request.TradeUpdateInDto;
import com.nubo.operations.cmd.api.models.dto.response.TradeOutDto;
import com.nubo.operations.cmd.api.models.entity.CountryEntity;
import com.nubo.operations.cmd.api.models.entity.CurrencyEntity;
import com.nubo.operations.cmd.api.models.entity.DepositoryEntity;
import com.nubo.operations.cmd.api.models.entity.MarketEntity;
import com.nubo.operations.cmd.api.models.entity.ParticipantEntity;
import com.nubo.operations.cmd.api.models.entity.SecurityTitleEntity;
import com.nubo.operations.cmd.api.models.entity.StatusEntity;
import com.nubo.operations.cmd.api.models.entity.TradeEntity;
import com.nubo.operations.cmd.api.models.entity.TradingSessionEntity;
import com.nubo.operations.cmd.api.models.entity.TradingSystemEntity;
import com.nubo.operations.cmd.api.models.entity.TypeEntity;
import com.nubo.operations.cmd.api.models.enums.VersionApiEnum;
import com.nubo.operations.cmd.api.repository.CountryRepository;
import com.nubo.operations.cmd.api.repository.CurrencyRepository;
import com.nubo.operations.cmd.api.repository.DepositoryRepository;
import com.nubo.operations.cmd.api.repository.MarketRepository;
import com.nubo.operations.cmd.api.repository.ParticipantRepository;
import com.nubo.operations.cmd.api.repository.SecurityTitleRepository;
import com.nubo.operations.cmd.api.repository.StatusRepository;
import com.nubo.operations.cmd.api.repository.TradeRepository;
import com.nubo.operations.cmd.api.repository.TradingSessionRepository;
import com.nubo.operations.cmd.api.repository.TradingSystemRepository;
import com.nubo.operations.cmd.api.repository.TypeRepository;
import com.nubo.operations.cmd.api.service.TradeService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class TradeServiceImpl implements TradeService {

    private final TradeRepository tradeRepository;
    private final CountryRepository countryRepository;
    private final CurrencyRepository currencyRepository;
    private final SecurityTitleRepository securityTitleRepository;
    private final ParticipantRepository participantRepository;
    private final DepositoryRepository depositoryRepository;
    private final TypeRepository typeRepository;
    private final MarketRepository marketRepository;
    private final StatusRepository statusRepository;
    private final TradingSessionRepository tradingSessionRepository;
    private final TradingSystemRepository tradingSystemRepository;
    private final PropertiesConfig propertiesConfig;

    @Override
    public TradeOutDto createTrade(TradeInDto tradeInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return createTradeV1(tradeInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private TradeOutDto createTradeV1(TradeInDto tradeInDto) {
        log.debug("Start method createTradeV1, trade -> {}", tradeInDto);

        TradeEntity tradeEntity = TradeEntity.builder()
                .matchDate(tradeInDto.getMatchDate())
                .matchId(tradeInDto.getMatchId())
                .clearingDate(tradeInDto.getClearingDate())
                .returnClearingDate(tradeInDto.getReturnClearingDate())
                .depository(ObjectUtils.isEmpty(tradeInDto.getDepositoryId()) ? null
                        : validateDepository(tradeInDto.getDepositoryId()))
                .country(ObjectUtils.isEmpty(tradeInDto.getCountryId()) ? null
                        : validateCountry(tradeInDto.getCountryId()))
                .type(ObjectUtils.isEmpty(tradeInDto.getTypeId()) ? null : validateType(tradeInDto.getTypeId()))
                .market(ObjectUtils.isEmpty(tradeInDto.getMarketId()) ? null : validateMarket(tradeInDto.getMarketId()))
                .issuanceMarket(ObjectUtils.isEmpty(tradeInDto.getIssuanceMarketId()) ? null
                        : validateMarket(tradeInDto.getIssuanceMarketId()))
                .securityTitle(ObjectUtils.isEmpty(tradeInDto.getSecurityId()) ? null
                        : validateSecurityTitle(tradeInDto.getSecurityId()))
                .participantBuy(ObjectUtils.isEmpty(tradeInDto.getParticipantIdBuy()) ? null
                        : validateParticipant(tradeInDto.getParticipantIdBuy()))
                .participantSell(ObjectUtils.isEmpty(tradeInDto.getParticipantIdSell()) ? null
                        : validateParticipant(tradeInDto.getParticipantIdSell()))
                .custodianBuyId(ObjectUtils.isEmpty(tradeInDto.getCustodianIdBuy()) ? null
                        : validateParticipant(tradeInDto.getCustodianIdBuy()).getId())
                .custodianSellId(ObjectUtils.isEmpty(tradeInDto.getCustodianIdSell()) ? null
                        : validateParticipant(tradeInDto.getCustodianIdSell()).getId())
                .assignmentMarkBuy(tradeInDto.getAssignmentMarkBuy())
                .assignmentMarkSell(tradeInDto.getAssignmentMarkSell())
                .fractionalMarkBuy(tradeInDto.getFractionalMarkBuy())
                .fractionalMarkSell(tradeInDto.getFractionalMarkSell())
                .advanceStatus(tradeInDto.getAdvanceStatus())
                .exitIndicatorSettlement(tradeInDto.getExitIndicatorSettlement())
                .canceledStatus(tradeInDto.getCanceledStatus())
                .quantity(tradeInDto.getQuantity())
                .price(tradeInDto.getPrice())
                .volume(tradeInDto.getVolume())
                .repurchaseRate(tradeInDto.getRepurchaseRate())
                .repurchaseAmount(tradeInDto.getRepurchaseAmount())
                .status(ObjectUtils.isEmpty(tradeInDto.getStatusId()) ? null : validateStatus(tradeInDto.getStatusId()))
                .matchTime(tradeInDto.getMatchTime())
                .ownPositionBuy(tradeInDto.getOwnPositionBuy())
                .ownPositionSell(tradeInDto.getOwnPositionSell())
                .currency(ObjectUtils.isEmpty(tradeInDto.getCurrencyId()) ? null
                        : validateCurrency(tradeInDto.getCurrencyId()))
                .tradingSystem(ObjectUtils.isEmpty(tradeInDto.getTradingSystemId()) ? null
                        : validateTradingSystem(tradeInDto.getTradingSystemId()))
                .tradingSession(ObjectUtils.isEmpty(tradeInDto.getTradingSessionId()) ? null
                        : validateTradingSession(tradeInDto.getTradingSessionId()))
                .repurchaseAgreementDate(tradeInDto.getRepurchaseAgreementDate())
                .daysToSettlement(tradeInDto.getDaysToSettlement())
                .repoRate(tradeInDto.getRepoRate())
                .repoAmount(tradeInDto.getRepoAmount())
                .fundingAmount(tradeInDto.getFundingAmount())
                .netOutFlowTotal(tradeInDto.getNetOutFlowTotal())
                .outFlowTurnOverValue(tradeInDto.getOutFlowTurnOverValue())
                .totalNetReturn(tradeInDto.getTotalNetReturn())
                .returnTurnoverValue(tradeInDto.getReturnTurnoverValue())
                .deliveryVersusPaymentValue(tradeInDto.getDeliveryVersusPaymentValue())
                .reallocationIndicator(tradeInDto.getReallocationIndicator())
                .businessType(ObjectUtils.isEmpty(tradeInDto.getBusinessTypeId()) ? null
                        : validateType(tradeInDto.getBusinessTypeId()))
                .marketType(ObjectUtils.isEmpty(tradeInDto.getMarketTypeId()) ? null
                        : validateType(tradeInDto.getMarketTypeId()))
                .originType(ObjectUtils.isEmpty(tradeInDto.getOriginTypeId()) ? null
                        : validateType(tradeInDto.getOriginTypeId()))
                .settlementIndicatorOutgoing(tradeInDto.getSettlementIndicatorOutgoing())
                .settlementIndicatorReturn(tradeInDto.getSettlementIndicatorReturn())
                .resettlementIndicatorAdvance(tradeInDto.getResettlementIndicatorAdvance())
                .paymentType(ObjectUtils.isEmpty(tradeInDto.getPaymentTypeId()) ? null
                        : validateType(tradeInDto.getPaymentTypeId()))
                .settlementType(ObjectUtils.isEmpty(tradeInDto.getSettlementTypeId()) ? null
                        : validateType(tradeInDto.getSettlementTypeId()))
                .custodianStatus(ObjectUtils.isEmpty(tradeInDto.getCustodianStatusId()) ? null
                        : validateStatus(tradeInDto.getCustodianStatusId()))
                .settlementStatus(ObjectUtils.isEmpty(tradeInDto.getSettlementStatusId()) ? null
                        : validateStatus(tradeInDto.getSettlementStatusId()))
                .bloquingStatus(ObjectUtils.isEmpty(tradeInDto.getBloquingStatusId()) ? null
                        : validateStatus(tradeInDto.getBloquingStatusId()))
                .purchasePaymentIndicator(tradeInDto.getPurchasePaymentIndicator())
                .returnIndicatorSettlement(tradeInDto.getReturnIndicatorSettlement())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();

        TradeOutDto tradeOutDto = MapperUtil.tradeEntityToTradeOutDto(tradeRepository.save(tradeEntity));

        log.info("End method createTradeV1, trade -> {}", tradeOutDto);
        return tradeOutDto;
    }

    @Override
    public TradeOutDto updateTrade(Long tradeId, TradeUpdateInDto tradeUpdateInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return updateTradeV1(tradeId, tradeUpdateInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private TradeOutDto updateTradeV1(Long tradeId, TradeUpdateInDto tradeUpdateInDto) {
        log.debug("Start method updateTradeV1, tradeId -> {}, trade -> {}", tradeId, tradeUpdateInDto);

        TradeEntity tradeEntityLast = validateTrade(tradeId);

        TradeEntity tradeEntity = TradeEntity.builder()
                .id(tradeEntityLast.getId())
                .matchDate(ObjectUtils.isEmpty(tradeUpdateInDto.getMatchDate()) ? tradeEntityLast.getMatchDate()
                        : tradeUpdateInDto.getMatchDate())
                .matchId(ObjectUtils.isEmpty(tradeUpdateInDto.getMatchId()) ? tradeEntityLast.getMatchId()
                        : tradeUpdateInDto.getMatchId())
                .clearingDate(
                        ObjectUtils.isEmpty(tradeUpdateInDto.getClearingDate()) ? tradeEntityLast.getClearingDate()
                                : tradeUpdateInDto.getClearingDate())
                .returnClearingDate(ObjectUtils.isEmpty(tradeUpdateInDto.getReturnClearingDate())
                        ? tradeEntityLast.getReturnClearingDate()
                        : tradeUpdateInDto.getReturnClearingDate())
                .depository(ObjectUtils.isEmpty(tradeUpdateInDto.getDepositoryId()) ? tradeEntityLast.getDepository()
                        : validateDepository(tradeUpdateInDto.getDepositoryId()))
                .country(ObjectUtils.isEmpty(tradeUpdateInDto.getCountryId()) ? tradeEntityLast.getCountry()
                        : validateCountry(tradeUpdateInDto.getCountryId()))
                .type(ObjectUtils.isEmpty(tradeUpdateInDto.getTypeId()) ? tradeEntityLast.getType()
                        : validateType(tradeUpdateInDto.getTypeId()))
                .market(ObjectUtils.isEmpty(tradeUpdateInDto.getMarketId()) ? tradeEntityLast.getMarket()
                        : validateMarket(tradeUpdateInDto.getMarketId()))
                .issuanceMarket(ObjectUtils.isEmpty(tradeUpdateInDto.getIssuanceMarketId())
                        ? tradeEntityLast.getIssuanceMarket()
                        : validateMarket(tradeUpdateInDto.getIssuanceMarketId()))
                .securityTitle(
                        ObjectUtils.isEmpty(tradeUpdateInDto.getSecurityId()) ? tradeEntityLast.getSecurityTitle()
                                : validateSecurityTitle(tradeUpdateInDto.getSecurityId()))
                .participantBuy(ObjectUtils.isEmpty(tradeUpdateInDto.getParticipantIdBuy())
                        ? tradeEntityLast.getParticipantBuy()
                        : validateParticipant(tradeUpdateInDto.getParticipantIdBuy()))
                .participantSell(ObjectUtils.isEmpty(tradeUpdateInDto.getParticipantIdSell())
                        ? tradeEntityLast.getParticipantSell()
                        : validateParticipant(tradeUpdateInDto.getParticipantIdSell()))
                .custodianBuyId(ObjectUtils.isEmpty(tradeUpdateInDto.getCustodianIdBuy())
                        ? tradeEntityLast.getCustodianBuyId()
                        : validateParticipant(tradeUpdateInDto.getCustodianIdBuy()).getId())
                .custodianSellId(ObjectUtils.isEmpty(tradeUpdateInDto.getCustodianIdSell())
                        ? tradeEntityLast.getCustodianSellId()
                        : validateParticipant(tradeUpdateInDto.getCustodianIdSell()).getId())
                .assignmentMarkBuy(ObjectUtils.isEmpty(tradeUpdateInDto.getAssignmentMarkBuy())
                        ? tradeEntityLast.getAssignmentMarkBuy()
                        : tradeUpdateInDto.getAssignmentMarkBuy())
                .assignmentMarkSell(ObjectUtils.isEmpty(tradeUpdateInDto.getAssignmentMarkSell())
                        ? tradeEntityLast.getAssignmentMarkSell()
                        : tradeUpdateInDto.getAssignmentMarkSell())
                .fractionalMarkBuy(ObjectUtils.isEmpty(tradeUpdateInDto.getFractionalMarkBuy())
                        ? tradeEntityLast.getAssignmentMarkBuy()
                        : tradeUpdateInDto.getFractionalMarkBuy())
                .fractionalMarkSell(ObjectUtils.isEmpty(tradeUpdateInDto.getFractionalMarkSell())
                        ? tradeEntityLast.getFractionalMarkSell()
                        : tradeUpdateInDto.getFractionalMarkSell())
                .advanceStatus(
                        ObjectUtils.isEmpty(tradeUpdateInDto.getAdvanceStatus()) ? tradeEntityLast.getAdvanceStatus()
                                : tradeUpdateInDto.getAdvanceStatus())
                .exitIndicatorSettlement(ObjectUtils.isEmpty(tradeUpdateInDto.getExitIndicatorSettlement())
                        ? tradeEntityLast.getExitIndicatorSettlement()
                        : tradeUpdateInDto.getExitIndicatorSettlement())
                .canceledStatus(
                        ObjectUtils.isEmpty(tradeUpdateInDto.getCanceledStatus()) ? tradeEntityLast.getCanceledStatus()
                                : tradeUpdateInDto.getCanceledStatus())
                .quantity(ObjectUtils.isEmpty(tradeUpdateInDto.getQuantity()) ? tradeEntityLast.getQuantity()
                        : tradeUpdateInDto.getQuantity())
                .price(ObjectUtils.isEmpty(tradeUpdateInDto.getPrice()) ? tradeEntityLast.getPrice()
                        : tradeUpdateInDto.getPrice())
                .volume(ObjectUtils.isEmpty(tradeUpdateInDto.getVolume()) ? tradeEntityLast.getVolume()
                        : tradeUpdateInDto.getVolume())
                .repurchaseRate(
                        ObjectUtils.isEmpty(tradeUpdateInDto.getRepurchaseRate()) ? tradeEntityLast.getRepurchaseRate()
                                : tradeUpdateInDto.getRepurchaseRate())
                .repurchaseAmount(ObjectUtils.isEmpty(tradeUpdateInDto.getRepurchaseAmount())
                        ? tradeEntityLast.getRepurchaseAmount()
                        : tradeUpdateInDto.getRepurchaseAmount())
                .status(ObjectUtils.isEmpty(tradeUpdateInDto.getStatusId()) ? tradeEntityLast.getStatus()
                        : validateStatus(tradeUpdateInDto.getStatusId()))
                .matchTime(ObjectUtils.isEmpty(tradeUpdateInDto.getMatchTime()) ? tradeEntityLast.getMatchTime()
                        : tradeUpdateInDto.getMatchTime())
                .ownPositionBuy(
                        ObjectUtils.isEmpty(tradeUpdateInDto.getOwnPositionBuy()) ? tradeEntityLast.getOwnPositionBuy()
                                : tradeUpdateInDto.getOwnPositionBuy())
                .ownPositionSell(ObjectUtils.isEmpty(tradeUpdateInDto.getOwnPositionSell())
                        ? tradeEntityLast.getOwnPositionSell()
                        : tradeUpdateInDto.getOwnPositionSell())
                .currency(ObjectUtils.isEmpty(tradeUpdateInDto.getCurrencyId()) ? tradeEntityLast.getCurrency()
                        : validateCurrency(tradeUpdateInDto.getCurrencyId()))
                .tradingSystem(
                        ObjectUtils.isEmpty(tradeUpdateInDto.getTradingSystemId()) ? tradeEntityLast.getTradingSystem()
                                : validateTradingSystem(tradeUpdateInDto.getTradingSystemId()))
                .tradingSession(ObjectUtils.isEmpty(tradeUpdateInDto.getTradingSessionId())
                        ? tradeEntityLast.getTradingSession()
                        : validateTradingSession(tradeUpdateInDto.getTradingSessionId()))
                .repurchaseAgreementDate(ObjectUtils.isEmpty(tradeUpdateInDto.getRepurchaseAgreementDate())
                        ? tradeEntityLast.getRepurchaseAgreementDate()
                        : tradeUpdateInDto.getRepurchaseAgreementDate())
                .daysToSettlement(ObjectUtils.isEmpty(tradeUpdateInDto.getDaysToSettlement())
                        ? tradeEntityLast.getDaysToSettlement()
                        : tradeUpdateInDto.getDaysToSettlement())
                .repoRate(ObjectUtils.isEmpty(tradeUpdateInDto.getRepoRate()) ? tradeEntityLast.getRepoRate()
                        : tradeUpdateInDto.getRepoRate())
                .repoAmount(ObjectUtils.isEmpty(tradeUpdateInDto.getRepoAmount()) ? tradeEntityLast.getRepoAmount()
                        : tradeUpdateInDto.getRepoAmount())
                .fundingAmount(
                        ObjectUtils.isEmpty(tradeUpdateInDto.getFundingAmount()) ? tradeEntityLast.getFundingAmount()
                                : tradeUpdateInDto.getFundingAmount())
                .netOutFlowTotal(ObjectUtils.isEmpty(tradeUpdateInDto.getNetOutFlowTotal())
                        ? tradeEntityLast.getNetOutFlowTotal()
                        : tradeUpdateInDto.getNetOutFlowTotal())
                .outFlowTurnOverValue(ObjectUtils.isEmpty(tradeUpdateInDto.getOutFlowTurnOverValue())
                        ? tradeEntityLast.getOutFlowTurnOverValue()
                        : tradeUpdateInDto.getOutFlowTurnOverValue())
                .totalNetReturn(
                        ObjectUtils.isEmpty(tradeUpdateInDto.getTotalNetReturn()) ? tradeEntityLast.getTotalNetReturn()
                                : tradeUpdateInDto.getTotalNetReturn())
                .returnTurnoverValue(ObjectUtils.isEmpty(tradeUpdateInDto.getReturnTurnoverValue())
                        ? tradeEntityLast.getReturnTurnoverValue()
                        : tradeUpdateInDto.getReturnTurnoverValue())
                .deliveryVersusPaymentValue(ObjectUtils.isEmpty(tradeUpdateInDto.getDeliveryVersusPaymentValue())
                        ? tradeEntityLast.getDeliveryVersusPaymentValue()
                        : tradeUpdateInDto.getDeliveryVersusPaymentValue())
                .reallocationIndicator(ObjectUtils.isEmpty(tradeUpdateInDto.getReallocationIndicator())
                        ? tradeEntityLast.getReallocationIndicator()
                        : tradeUpdateInDto.getReallocationIndicator())
                .businessType(
                        ObjectUtils.isEmpty(tradeUpdateInDto.getBusinessTypeId()) ? tradeEntityLast.getBusinessType()
                                : validateType(tradeUpdateInDto.getBusinessTypeId()))
                .marketType(ObjectUtils.isEmpty(tradeUpdateInDto.getMarketTypeId()) ? tradeEntityLast.getMarketType()
                        : validateType(tradeUpdateInDto.getMarketTypeId()))
                .originType(ObjectUtils.isEmpty(tradeUpdateInDto.getOriginTypeId()) ? tradeEntityLast.getOriginType()
                        : validateType(tradeUpdateInDto.getOriginTypeId()))
                .settlementIndicatorOutgoing(ObjectUtils.isEmpty(tradeUpdateInDto.getSettlementIndicatorOutgoing())
                        ? tradeEntityLast.getSettlementIndicatorOutgoing()
                        : tradeUpdateInDto.getSettlementIndicatorOutgoing())
                .settlementIndicatorReturn(ObjectUtils.isEmpty(tradeUpdateInDto.getSettlementIndicatorReturn())
                        ? tradeEntityLast.getSettlementIndicatorReturn()
                        : tradeUpdateInDto.getSettlementIndicatorReturn())
                .resettlementIndicatorAdvance(ObjectUtils.isEmpty(tradeUpdateInDto.getResettlementIndicatorAdvance())
                        ? tradeEntityLast.getResettlementIndicatorAdvance()
                        : tradeUpdateInDto.getResettlementIndicatorAdvance())
                .paymentType(ObjectUtils.isEmpty(tradeUpdateInDto.getPaymentTypeId()) ? tradeEntityLast.getPaymentType()
                        : validateType(tradeUpdateInDto.getPaymentTypeId()))
                .settlementType(ObjectUtils.isEmpty(tradeUpdateInDto.getSettlementTypeId())
                        ? tradeEntityLast.getSettlementType()
                        : validateType(tradeUpdateInDto.getSettlementTypeId()))
                .custodianStatus(ObjectUtils.isEmpty(tradeUpdateInDto.getCustodianStatusId())
                        ? tradeEntityLast.getCustodianStatus()
                        : validateStatus(tradeUpdateInDto.getCustodianStatusId()))
                .settlementStatus(ObjectUtils.isEmpty(tradeUpdateInDto.getSettlementStatusId())
                        ? tradeEntityLast.getSettlementStatus()
                        : validateStatus(tradeUpdateInDto.getSettlementStatusId()))
                .bloquingStatus(ObjectUtils.isEmpty(tradeUpdateInDto.getBloquingStatusId())
                        ? tradeEntityLast.getBloquingStatus()
                        : validateStatus(tradeUpdateInDto.getBloquingStatusId()))
                .purchasePaymentIndicator(ObjectUtils.isEmpty(tradeUpdateInDto.getPurchasePaymentIndicator())
                        ? tradeEntityLast.getPurchasePaymentIndicator()
                        : tradeUpdateInDto.getPurchasePaymentIndicator())
                .returnIndicatorSettlement(ObjectUtils.isEmpty(tradeUpdateInDto.getReturnIndicatorSettlement())
                        ? tradeEntityLast.getReturnIndicatorSettlement()
                        : tradeUpdateInDto.getReturnIndicatorSettlement())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();

        TradeOutDto tradeOutDto = MapperUtil.tradeEntityToTradeOutDto(tradeRepository.save(tradeEntity));

        log.info("End method updateTradeV1, trade -> {}", tradeOutDto);
        return tradeOutDto;
    }

    private TradeEntity validateTrade(Long tradeId) {
        return tradeRepository.findById(tradeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private CountryEntity validateCountry(Long countryId) {
        return countryRepository.findById(countryId)
                .orElseThrow(() -> new ServiceException(ErrorCode.COUNTRY_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private CurrencyEntity validateCurrency(Long currencyId) {
        return currencyRepository.findById(currencyId)
                .orElseThrow(() -> new ServiceException(ErrorCode.CURRENCY_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private SecurityTitleEntity validateSecurityTitle(Long securityId) {
        return securityTitleRepository.findById(securityId)
                .orElseThrow(() -> new ServiceException(ErrorCode.SECURITY_TITLE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private ParticipantEntity validateParticipant(Long participantId) {
        return participantRepository.findById(participantId)
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private DepositoryEntity validateDepository(String depositoryId) {
        return depositoryRepository.findById(depositoryId)
                .orElseThrow(() -> new ServiceException(ErrorCode.DEPOSITORY_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private TypeEntity validateType(Long typeId) {
        return typeRepository.findById(typeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TYPE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private MarketEntity validateMarket(String marketId) {
        return marketRepository.findById(marketId)
                .orElseThrow(() -> new ServiceException(ErrorCode.MARKET_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private StatusEntity validateStatus(Integer statusId) {
        return statusRepository.findById(statusId.longValue())
                .orElseThrow(() -> new ServiceException(ErrorCode.STATUS_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private TradingSystemEntity validateTradingSystem(Long tradingSystemId) {
        return tradingSystemRepository.findById(tradingSystemId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADING_SYSTEM_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private TradingSessionEntity validateTradingSession(String tradingSessionId) {
        return tradingSessionRepository.findById(tradingSessionId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADING_SESSION_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

}

```

## src/main/java/com/nubo/operations/cmd/api/service/impl/ValidateCountedFractionServiceImpl.java

```java
package com.nubo.operations.cmd.api.service.impl;

import java.math.BigDecimal;
import java.util.Collection;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

import com.nubo.operations.cmd.api.models.entity.*;
import com.nubo.operations.cmd.api.repository.*;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.nubo.operations.cmd.api.application.properties.PropertiesConfig;
import com.nubo.operations.cmd.api.application.properties.PropertiesContext;
import com.nubo.operations.cmd.api.application.util.ApplicationUtils;
import com.nubo.operations.cmd.api.client.operation.rules.models.dto.response.BusinessRuleOutDto;
import com.nubo.operations.cmd.api.client.operation.rules.service.OperationBusinessRuleClient;
import com.nubo.operations.cmd.api.exception.ServiceException;
import com.nubo.operations.cmd.api.exception.error.ErrorCode;
import com.nubo.operations.cmd.api.helpers.MapperUtil;
import com.nubo.operations.cmd.api.models.dto.request.FractionRuleInDto;
import com.nubo.operations.cmd.api.models.dto.response.FractionAccountOutDto;
import com.nubo.operations.cmd.api.models.dto.response.InvestorAccountOutDto;
import com.nubo.operations.cmd.api.models.dto.response.MilaDepositoryOutDto;
import com.nubo.operations.cmd.api.models.dto.response.ParticipantBankAccountOutDto;
import com.nubo.operations.cmd.api.models.dto.response.ParticipantOutDto;
import com.nubo.operations.cmd.api.models.context.AssignmentParticipantContext;
import com.nubo.operations.cmd.api.models.context.AssignmentTradeContext;
import com.nubo.operations.cmd.api.models.enums.BusinessRuleEnum;
import com.nubo.operations.cmd.api.models.enums.SideEnum;
import com.nubo.operations.cmd.api.models.enums.StatusEnum;
import com.nubo.operations.cmd.api.models.enums.TypeEnum;
import com.nubo.operations.cmd.api.models.enums.VersionApiEnum;
import com.nubo.operations.cmd.api.service.BatchCacheService;
import com.nubo.operations.cmd.api.service.ValidateCountedFractionService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class ValidateCountedFractionServiceImpl implements ValidateCountedFractionService {

    private final TradeRepository tradeRepository;
    private final InvestorAccountRepository investorAccountRepository;
    private final ParticipantAccountRepository participantAccountRepository;
    private final OperationBusinessRuleClient operationBusinessRuleClient;
    private final ParticipantBankAccountRepository participantBankAccountRepository;
    private final CustodianRelationRepository custodianRelationRepository;
    private final MilaDepositoryRepository milaDepositoryRepository;
    private final PropertiesConfig propertiesConfig;
    private final BatchCacheService batchCacheService;
    private final FicRelationRepository ficRelationRepository;
    private final ParticipantRepository participantRepository;
    private final TypeRepository typeRepository;

    @Override
    public FractionAccountOutDto validateAccountFractionCorrection(String accountNumber, Long tradeId, String sideId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateAccountFractionCorrectionV1(accountNumber, tradeId, sideId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private FractionAccountOutDto validateAccountFractionCorrectionV1(String accountNumber, Long tradeId,
            String sideId) {
        log.info("Start method validateAccountFractionCorrectionV1, accountNumber -> {}, tradeId -> {}, sideId -> {}",
                accountNumber, tradeId, sideId);

        TradeEntity tradeEntity = validateTrade(tradeId);

        this.validateTypeOperation(tradeEntity);

        ParticipantEntity participantTrade = getParticipantBuyOrParticipantSellTrade(tradeEntity, sideId);
        TypeEntity sourceQuoteTrade = getSourceQuoteTypeForSide(tradeEntity, sideId);
        if (sourceQuoteTrade == null || sourceQuoteTrade.getId() == null) {
            throw new ServiceException(ErrorCode.SOURCE_QUOTE_TYPE_REQUIRED, HttpStatus.BAD_REQUEST);
        }
        DepositoryEntity tradeDepository = tradeEntity.getDepository();
        if (tradeDepository == null || tradeDepository.getId() == null) {
            throw new ServiceException(ErrorCode.TRADE_DEPOSITORY_NOT_FOUND, HttpStatus.BAD_REQUEST);
        }

        BusinessRuleOutDto businessRuleOutDto = operationBusinessRuleClient.findBusinessRuleByCode(
                BusinessRuleEnum.RULE_OPERATION_CORRECTION_SPECIAL_FIDUCIARY);

        Long typeSpecialFiduciaryBusinessRule = ApplicationUtils.parseLongSafely(businessRuleOutDto.getValue(),
                ErrorCode.INVALID_BUSINESS_RULE_VALUE);

        FractionAccountOutDto fractionAccountOutDto = FractionAccountOutDto.builder()
                .masterAccount(false)
                .fiduciarySpecialist(false)
                .jointAccount(false)
                .build();

        Long sourceQuoteId = sourceQuoteTrade.getId();
        final boolean isOwnPosition = Objects.equals(TypeEnum.OWN_POSITION_POINT_ORIGIN.getId(), sourceQuoteId);
        final boolean isThirdOrCollective = Objects.equals(TypeEnum.THIRD_PARTIES_POINT_ORIGIN.getId(), sourceQuoteId)
                || Objects.equals(TypeEnum.COLLECTIVE_PORTFOLIO_POINT_ORIGIN.getId(), sourceQuoteId);

        if (isOwnPosition) {
            ParticipantAccountEntity participantAccountEntity = participantAccountRepository
                    .findByAccountNumber(accountNumber)
                    .orElseThrow(() -> new ServiceException(ErrorCode.ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND));
            this.validateParticipantAccount(fractionAccountOutDto, typeSpecialFiduciaryBusinessRule, sourceQuoteTrade,
                    participantAccountEntity, participantTrade, tradeDepository);

        } else if (isThirdOrCollective) {
            this.validateInvestorAccount(fractionAccountOutDto, sourceQuoteTrade,
                    typeSpecialFiduciaryBusinessRule, accountNumber, tradeDepository);
        }

        log.info("End method validateAccountFractionCorrectionV1, fractionAccountOutDto -> {}", fractionAccountOutDto);

        return fractionAccountOutDto;
    }

    @Override
    public Boolean validateQuantityFractions(Long tradeId, List<FractionRuleInDto> fractionRuleInDtoList) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            TradeEntity tradeEntity = validateTrade(tradeId);
            return validateQuantityFractionsV1(tradeEntity, fractionRuleInDtoList);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public Boolean validateQuantityFractions(TradeEntity tradeEntity, List<FractionRuleInDto> fractionRuleInDtoList) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateQuantityFractionsV1(tradeEntity, fractionRuleInDtoList);
        }
        throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
    }

    @Override
    public Boolean validateQuantityFractions(AssignmentTradeContext trade,
            List<FractionRuleInDto> fractionRuleInDtoList) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateQuantityFractionsBatchV1(trade, fractionRuleInDtoList);
        }
        throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
    }

    private Boolean validateQuantityFractionsV1(TradeEntity tradeEntity,
            List<FractionRuleInDto> fractionRuleInDtoList) {
        log.info("Start method validateQuantityFractionsV1, tradeId -> {}",
                tradeEntity != null ? tradeEntity.getId() : null);
        if (tradeEntity == null) {
            throw new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        this.validateTypeOperation(tradeEntity);

        BigDecimal totalQuantity = BigDecimal.ZERO;

        for (FractionRuleInDto fractionInDto : fractionRuleInDtoList) {
            totalQuantity = totalQuantity.add(fractionInDto.getFractionQuantity());
        }

        if (tradeEntity.getQuantity().compareTo(totalQuantity) != 0) {
            throw new ServiceException(ErrorCode.FRACTION_TOTAL_QUANTITY_NOT_CORRESPOND_QUANTITY_TRADE,
                    HttpStatus.BAD_REQUEST);
        }

        log.debug("End method validateQuantityFractionsV1");
        return true;
    }

    private Boolean validateQuantityFractionsBatchV1(AssignmentTradeContext trade,
            List<FractionRuleInDto> fractionRuleInDtoList) {
        validateTypeOperation(trade);

        BigDecimal totalQuantity = BigDecimal.ZERO;
        for (FractionRuleInDto fractionInDto : fractionRuleInDtoList) {
            totalQuantity = totalQuantity.add(fractionInDto.getFractionQuantity());
        }

        if (trade.quantity() == null || trade.quantity().compareTo(totalQuantity) != 0) {
            throw new ServiceException(ErrorCode.FRACTION_TOTAL_QUANTITY_NOT_CORRESPOND_QUANTITY_TRADE,
                    HttpStatus.BAD_REQUEST);
        }
        return true;
    }

    @Override
    public Boolean validateMaximumLimitFractions(Long tradeId,
            List<FractionRuleInDto> fractionRuleInDtoList) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            TradeEntity tradeEntity = validateTrade(tradeId);
            return validateMaximumLimitFractionsV1(tradeEntity, fractionRuleInDtoList);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public Boolean validateMaximumLimitFractions(TradeEntity tradeEntity,
            List<FractionRuleInDto> fractionRuleInDtoList) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateMaximumLimitFractionsV1(tradeEntity, fractionRuleInDtoList);
        }
        throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
    }

    @Override
    public Boolean validateMaximumLimitFractions(AssignmentTradeContext trade,
            List<FractionRuleInDto> fractionRuleInDtoList) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateMaximumLimitFractionsBatchV1(trade, fractionRuleInDtoList);
        }
        throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
    }

    private Boolean validateMaximumLimitFractionsV1(TradeEntity tradeEntity,
            List<FractionRuleInDto> fractionRuleInDtoList) {
        log.info("Start method validateMaximumLimitFractionsV1");

        this.validateTypeOperation(tradeEntity);

        BusinessRuleOutDto businessRuleOutDto = operationBusinessRuleClient.findBusinessRuleByCode(
                BusinessRuleEnum.RULE_OPERATION_ASSIGNMENT_MAXIMUM_FRACTION_LIMIT);

        int typeBusinessRule = ApplicationUtils.parseIntegerSafely(businessRuleOutDto.getValue(),
                ErrorCode.INVALID_BUSINESS_RULE_VALUE);

        if (fractionRuleInDtoList.size() > typeBusinessRule) {
            ErrorCode errorCode = ErrorCode.MAXIMUM_LIMIT_FRACTIONS_EXCEED;
            String message = errorCode.getMessage().concat(": ").concat(String.valueOf(typeBusinessRule));
            throw new ServiceException(message, errorCode, HttpStatus.BAD_REQUEST);
        }

        log.debug("End method validateMaximumLimitFractionsV1");

        return true;
    }

    private Boolean validateMaximumLimitFractionsBatchV1(AssignmentTradeContext trade,
            List<FractionRuleInDto> fractionRuleInDtoList) {
        validateTypeOperation(trade);

        BusinessRuleOutDto businessRuleOutDto = operationBusinessRuleClient.findBusinessRuleByCode(
                BusinessRuleEnum.RULE_OPERATION_ASSIGNMENT_MAXIMUM_FRACTION_LIMIT);
        int typeBusinessRule = ApplicationUtils.parseIntegerSafely(businessRuleOutDto.getValue(),
                ErrorCode.INVALID_BUSINESS_RULE_VALUE);

        if (fractionRuleInDtoList.size() > typeBusinessRule) {
            ErrorCode errorCode = ErrorCode.MAXIMUM_LIMIT_FRACTIONS_EXCEED;
            String message = errorCode.getMessage().concat(": ").concat(String.valueOf(typeBusinessRule));
            throw new ServiceException(message, errorCode, HttpStatus.BAD_REQUEST);
        }
        return true;
    }

    @Override
    public ParticipantOutDto validateDirectDepositorFractionCorrection(Long tradeId, String sideId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateDirectDepositorFractionCorrectionV1(tradeId, sideId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private ParticipantOutDto validateDirectDepositorFractionCorrectionV1(Long tradeId, String sideId) {
        log.info("Start method validateDirectDepositorFractionCorrectionV1, tradeId -> {}, sideId -> {}", tradeId,
                sideId);

        TradeEntity tradeEntity = validateTrade(tradeId);

        this.validateTypeOperation(tradeEntity);

        ParticipantEntity participantEntity = getParticipantBuyOrParticipantSellTrade(tradeEntity, sideId);

        ParticipantOutDto participantOutDto = MapperUtil.participantEntityToParticipantOutDto(participantEntity);

        log.info("End method validateDirectDepositorFractionCorrectionV1");

        return participantOutDto;
    }

    private ParticipantEntity getParticipantBuyOrParticipantSellTrade(TradeEntity tradeEntity, String sideId) {
        ParticipantEntity participantEntity;
        if (SideEnum.BUY.getId().equals(sideId)) {
            participantEntity = tradeEntity.getParticipantBuy();
        } else if (SideEnum.SELL.getId().equals(sideId)) {
            participantEntity = tradeEntity.getParticipantSell();
        } else {
            throw new ServiceException(ErrorCode.SIDE_NOT_FOUND, HttpStatus.BAD_REQUEST);
        }
        return participantEntity;
    }

    private DepositoryEntity getDepositoryBuyOrDepositorySellTrade(TradeEntity tradeEntity, String sideId) {
        DepositoryEntity depositoryEntity = null;
        if (SideEnum.BUY.getId().equals(sideId)) {
            depositoryEntity = tradeEntity.getDepositoryBuy();
        } else if (SideEnum.SELL.getId().equals(sideId)) {
            depositoryEntity = tradeEntity.getDepositorySell();
        }

        if (depositoryEntity == null || depositoryEntity.getId() == null) {
            throw new ServiceException(ErrorCode.TRADE_DEPOSITORY_REQUIRED, HttpStatus.NOT_FOUND);
        }
        return depositoryEntity;
    }

    private TypeEntity getSourceQuoteTypeForSide(TradeEntity tradeEntity, String sideId) {
        TypeEntity typeEntity;
        if (SideEnum.BUY.getId().equals(sideId)) {
            typeEntity = tradeEntity.getSourceQuoteBuyType();
        } else if (SideEnum.SELL.getId().equals(sideId)) {
            typeEntity = tradeEntity.getSourceQuoteSellType();
        } else {
            throw new ServiceException(ErrorCode.TYPE_NOT_FOUND, HttpStatus.BAD_REQUEST);
        }
        return typeEntity;
    }

    private void validateParticipantAccount(FractionAccountOutDto fractionAccountOutDto,
            Long typeSpecialFiduciaryBusinessRule,
            TypeEntity sourceQuoteTrade,
            ParticipantAccountEntity participantAccountEntity,
            ParticipantEntity participantTrade,
            DepositoryEntity tradeDepository) {
        if (!Objects.equals(participantAccountEntity.getOriginType(), sourceQuoteTrade)) {
            Long originTypeId = participantAccountEntity.getOriginType().getId();
            Long sourceQuoteId = sourceQuoteTrade.getId();

            boolean isThirdOrCollective = Objects.equals(TypeEnum.THIRD_PARTIES_POINT_ORIGIN.getId(), originTypeId)
                    || Objects.equals(TypeEnum.COLLECTIVE_PORTFOLIO_POINT_ORIGIN.getId(), originTypeId);

            boolean isThirdOrCollectiveSource = Objects.equals(TypeEnum.THIRD_PARTIES_POINT_ORIGIN.getId(),
                    sourceQuoteId)
                    || Objects.equals(TypeEnum.COLLECTIVE_PORTFOLIO_POINT_ORIGIN.getId(), sourceQuoteId);

            boolean originIsOwn = Objects.equals(TypeEnum.OWN_POSITION_POINT_ORIGIN.getId(), originTypeId);
            boolean sourceIsOwn = Objects.equals(TypeEnum.OWN_POSITION_POINT_ORIGIN.getId(), sourceQuoteId);

            if ((isThirdOrCollective && sourceIsOwn) || (isThirdOrCollectiveSource && originIsOwn)) {
                throw new ServiceException(ErrorCode.OWN_POSITION_NOT_CORRESPOND_TO_ORIGIN, HttpStatus.BAD_REQUEST);
            }
            throw new ServiceException(ErrorCode.THIRD_PARTIES_COLLECTIVE_PORTFOLIOS_NOT_CORRESPOND_TO_ORIGIN,
                    HttpStatus.BAD_REQUEST);
        }
        if (participantAccountEntity.getDepository() == null ||
                participantAccountEntity.getDepository().getId() == null ||
                !Objects.equals(tradeDepository, participantAccountEntity.getDepository())) {
            throw new ServiceException(ErrorCode.ACCOUNT_DEPOSITORY_NOT_CORRESPOND_TO_TRADE, HttpStatus.BAD_REQUEST);
        }

        if (Objects.equals(TypeEnum.OWN_POSITION_POINT_ORIGIN.getId(), participantAccountEntity.getOriginType().getId())
                && !Objects.equals(participantTrade, participantAccountEntity.getParticipant())) {
            throw new ServiceException(ErrorCode.OWN_POSITION_NOT_CORRESPOND_TO_ORIGIN, HttpStatus.BAD_REQUEST);
        }

        if (Objects.equals(TypeEnum.MASTER_ACCOUNT.getId(), participantAccountEntity.getType().getId())) {
            fractionAccountOutDto.setMasterAccount(true);
        }
        if (Objects.equals(typeSpecialFiduciaryBusinessRule, participantAccountEntity.getType().getId())) {
            fractionAccountOutDto.setFiduciarySpecialist(true);
        }

        fractionAccountOutDto.setParticipantAccount(
                MapperUtil.participantAccountEntityToParticipantAccountOutDto(participantAccountEntity));
        fractionAccountOutDto.setSourceQuoteType(fractionAccountOutDto.getParticipantAccount().getOriginType());
    }

    private void validateInvestorAccount(FractionAccountOutDto fractionAccountOutDto,
            TypeEntity sourceQuoteTrade,
            Long typeSpecialFiduciaryBusinessRule,
            String accountNumber,
            DepositoryEntity tradeDepository) {

        InvestorAccountEntity investorAccountEntity = investorAccountRepository.findByAccountNumber(accountNumber)
                .orElseThrow(() -> new ServiceException(ErrorCode.ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND));

        if (investorAccountEntity.getOriginType() == null || investorAccountEntity.getOriginType().getId() == null) {
            throw new ServiceException(ErrorCode.THIRD_PARTIES_COLLECTIVE_PORTFOLIOS_NOT_CORRESPOND_TO_ORIGIN,
                    HttpStatus.BAD_REQUEST);
        }
        if (sourceQuoteTrade == null || sourceQuoteTrade.getId() == null) {
            throw new ServiceException(ErrorCode.THIRD_PARTIES_COLLECTIVE_PORTFOLIOS_NOT_CORRESPOND_TO_ORIGIN,
                    HttpStatus.BAD_REQUEST);
        }

        final Long originTypeId = investorAccountEntity.getOriginType().getId();
        final Long sourceQuoteId = sourceQuoteTrade.getId();

        boolean originIsThirdOrCollective = Objects.equals(TypeEnum.THIRD_PARTIES_POINT_ORIGIN.getId(), originTypeId)
                || Objects.equals(TypeEnum.COLLECTIVE_PORTFOLIO_POINT_ORIGIN.getId(), originTypeId);

        boolean sourceIsThirdOrCollective = Objects.equals(TypeEnum.THIRD_PARTIES_POINT_ORIGIN.getId(), sourceQuoteId)
                || Objects.equals(TypeEnum.COLLECTIVE_PORTFOLIO_POINT_ORIGIN.getId(), sourceQuoteId);

        boolean originIsOwn = Objects.equals(TypeEnum.OWN_POSITION_POINT_ORIGIN.getId(), originTypeId);
        boolean sourceIsOwn = Objects.equals(TypeEnum.OWN_POSITION_POINT_ORIGIN.getId(), sourceQuoteId);

        if (!Objects.equals(originTypeId, sourceQuoteId)) {
            if ((originIsThirdOrCollective && sourceIsOwn) || (sourceIsThirdOrCollective && originIsOwn)) {
                throw new ServiceException(ErrorCode.OWN_POSITION_NOT_CORRESPOND_TO_ORIGIN, HttpStatus.BAD_REQUEST);
            }

            if (!(originIsThirdOrCollective && sourceIsThirdOrCollective)) {
                throw new ServiceException(ErrorCode.THIRD_PARTIES_COLLECTIVE_PORTFOLIOS_NOT_CORRESPOND_TO_ORIGIN,
                        HttpStatus.BAD_REQUEST);
            }
        }

        if (tradeDepository == null || tradeDepository.getId() == null) {
            throw new ServiceException(ErrorCode.TRADE_DEPOSITORY_REQUIRED, HttpStatus.BAD_REQUEST);
        }
        if (investorAccountEntity.getDepository() == null ||
                investorAccountEntity.getDepository().getId() == null ||
                !Objects.equals(tradeDepository, investorAccountEntity.getDepository())) {
            throw new ServiceException(ErrorCode.ACCOUNT_DEPOSITORY_NOT_CORRESPOND_TO_TRADE, HttpStatus.BAD_REQUEST);
        }

        InvestorAccountOutDto investorAccountOutDto = MapperUtil
                .investorAccountEntityToInvestorAccountOutDto(investorAccountEntity);
        fractionAccountOutDto.setInvestorAccount(investorAccountOutDto);
        fractionAccountOutDto.setFiduciarySpecialist(
                Objects.equals(typeSpecialFiduciaryBusinessRule, investorAccountOutDto.getType().getId()));
        fractionAccountOutDto.setJointAccount(
                Objects.equals(TypeEnum.JOINT_ACCOUNT.getId(), investorAccountOutDto.getType().getId()));
        fractionAccountOutDto.setSourceQuoteType(investorAccountOutDto.getOriginType());
    }

    @Override
    public FractionAccountOutDto validateAccountFractionAssignment(String accountNumber, Long tradeId, String sideId,
            Long originId, Boolean isLocalCorrection) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            TradeEntity tradeEntity = validateTrade(tradeId);
            return validateAccountFractionAssignmentV1(tradeEntity, accountNumber, sideId, originId, isLocalCorrection);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public FractionAccountOutDto validateAccountFractionAssignment(TradeEntity tradeEntity, String accountNumber,
            String sideId, Long originId, Boolean isLocalCorrection) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateAccountFractionAssignmentV1(tradeEntity, accountNumber, sideId, originId, isLocalCorrection);
        }
        throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
    }

    private FractionAccountOutDto validateAccountFractionAssignmentV1(TradeEntity tradeEntity, String accountNumber,
            String sideId, Long originId, Boolean isLocalCorrection) {
        log.info(
                "Start method validateAccountFractionAssignmentV1, accountNumber -> {}, tradeId -> {}, sideId -> {}, originId -> {}, isLocalCorrection -> {}",
                accountNumber, tradeEntity != null ? tradeEntity.getId() : null, sideId, originId, isLocalCorrection);

        this.validateTypeOperation(tradeEntity);
        ParticipantEntity participantBySideTrade = getParticipantBuyOrParticipantSellTrade(tradeEntity, sideId);
        TypeEntity typeOriginEntity = validateType(originId);
        DepositoryEntity depositoryBySideTrade = getDepositoryBuyOrDepositorySellTrade(tradeEntity, sideId);

        BusinessRuleOutDto businessRuleOutDto = operationBusinessRuleClient.findBusinessRuleByCode(
                BusinessRuleEnum.RULE_OPERATION_CORRECTION_SPECIAL_FIDUCIARY);
        Long typeSpecialFiduciaryBusinessRule = ApplicationUtils.parseLongSafely(businessRuleOutDto.getValue(),
                ErrorCode.INVALID_BUSINESS_RULE_VALUE);

        FractionAccountOutDto fractionAccountOutDto = FractionAccountOutDto.builder()
                .masterAccount(false)
                .fiduciarySpecialist(false)
                .jointAccount(false)
                .build();

        Optional<ParticipantAccountEntity> participantAccountEntity;
        if (Objects.equals(TypeEnum.OWN_POSITION_POINT_ORIGIN.getId(), typeOriginEntity.getId())) {
            participantAccountEntity = participantAccountRepository
                    .findFirstByAccountNumberAndParticipantAndOriginTypeAndDepository(accountNumber,
                            participantBySideTrade,
                            typeOriginEntity, depositoryBySideTrade);
        } else {
            participantAccountEntity = this.findParticipantAccountAssignment(
                    accountNumber,
                    participantBySideTrade,
                    depositoryBySideTrade,
                    isLocalCorrection);
        }

        if (participantAccountEntity.isPresent()) {
            ParticipantAccountEntity accountEntity = participantAccountEntity.get();
            if (!Objects.equals(accountEntity.getStatus().getId(),
                    StatusEnum.PARTICIPANT_ACCOUNT_ACTIVE.getId())) {
                throw new ServiceException(ErrorCode.ACCOUNT_NOT_ACTIVE, HttpStatus.NOT_FOUND);
            }
            this.validateParticipantAccountAssignment(fractionAccountOutDto,
                    typeSpecialFiduciaryBusinessRule, accountEntity, depositoryBySideTrade);
        } else {
            this.validateInvestorAccountAssignment(fractionAccountOutDto,
                    typeSpecialFiduciaryBusinessRule, accountNumber, typeOriginEntity, participantBySideTrade,
                    depositoryBySideTrade);
            this.getCustodianAndFicAdminByAccountBatch(fractionAccountOutDto, participantBySideTrade, depositoryBySideTrade);
        }

        this.validateAccountAssignmentIsMilaLocal(fractionAccountOutDto, tradeEntity);

        log.info("End method validateAccountFractionAssignmentV1, fractionAccountOutDto -> {}", fractionAccountOutDto);

        return fractionAccountOutDto;
    }

    /**
     * Batch-only overload. It consumes scalar projection data and never
     * materializes TradeEntity or its eager TradeEquity association.
     */
    @Override
    public FractionAccountOutDto validateAccountFractionAssignment(AssignmentTradeContext trade, String accountNumber,
            String sideId, Long originId, Boolean isLocalCorrection) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) != VersionApiEnum.V1) {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }

        validateTypeOperation(trade);
        AssignmentParticipantContext participant = participantForSide(trade, sideId);
        TypeEntity originType = validateType(originId);
        String depositoryId = depositoryForSide(trade, sideId);

        BusinessRuleOutDto businessRuleOutDto = operationBusinessRuleClient.findBusinessRuleByCode(
                BusinessRuleEnum.RULE_OPERATION_CORRECTION_SPECIAL_FIDUCIARY);
        Long typeSpecialFiduciaryBusinessRule = ApplicationUtils.parseLongSafely(businessRuleOutDto.getValue(),
                ErrorCode.INVALID_BUSINESS_RULE_VALUE);

        FractionAccountOutDto result = FractionAccountOutDto.builder()
                .masterAccount(false)
                .fiduciarySpecialist(false)
                .jointAccount(false)
                .build();

        Optional<ParticipantAccountEntity> participantAccount;
        if (Objects.equals(TypeEnum.OWN_POSITION_POINT_ORIGIN.getId(), originType.getId())) {
            participantAccount = participantAccountRepository
                    .findFirstByAccountNumberAndParticipant_IdAndOriginType_IdAndDepository_Id(
                            accountNumber, participant.id(), originType.getId(), depositoryId);
        } else {
            participantAccount = findParticipantAccountAssignmentBatch(accountNumber, participant.id(), depositoryId,
                    isLocalCorrection);
        }

        if (participantAccount.isPresent()) {
            ParticipantAccountEntity account = participantAccount.get();
            if (!Objects.equals(account.getStatus().getId(), StatusEnum.PARTICIPANT_ACCOUNT_ACTIVE.getId())) {
                throw new ServiceException(ErrorCode.ACCOUNT_NOT_ACTIVE, HttpStatus.NOT_FOUND);
            }
            validateParticipantAccountAssignmentBatch(result, typeSpecialFiduciaryBusinessRule, account, depositoryId);
        } else {
            validateInvestorAccountAssignmentBatch(result, typeSpecialFiduciaryBusinessRule, accountNumber, originType,
                    participant, depositoryId);
            getCustodianAndFicAdminByAccountBatch(result, participant.id(), depositoryId);
        }

        validateAccountAssignmentIsMilaLocal(result, trade);
        return result;
    }

    @Override
    public ParticipantBankAccountOutDto validateCudAccountFractionAssignment(Long tradeId, String sideId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateCudAccountFractionAssignmentV1(tradeId, sideId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    /**
     * Resolución CUD para el hot path batch. El contrato funcional de la
     * resolución original depende sólo del participante y de los tipos CUD y
     * COMPENSATION; tradeId/sideId sólo se usaban para obtener el participante.
     */
    @Override
    public Map<Long, ParticipantBankAccountOutDto> validateCudAccountFractionAssignments(
            Collection<Long> participantIds) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) != VersionApiEnum.V1) {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }

        if (participantIds == null || participantIds.isEmpty()) {
            return Map.of();
        }

        TypeEntity originType = this.batchCacheService.findTypeByCategoryAndDescription(
                TypeEnum.ACCOUNT_CUD.getCategory(), TypeEnum.ACCOUNT_CUD.getDescription());
        TypeEntity conceptType = this.batchCacheService.findTypeByCategoryAndDescription(
                TypeEnum.COMPENSATION.getCategory(), TypeEnum.COMPENSATION.getDescription());

        Map<Long, ParticipantBankAccountOutDto> accountsByParticipant = new LinkedHashMap<>();
        participantBankAccountRepository
                .findAllByParticipantIdInAndOriginTypeAndConceptTypeOrderByIdAsc(
                        participantIds, originType, conceptType)
                .forEach(account -> accountsByParticipant.putIfAbsent(
                        account.getParticipantId(),
                        MapperUtil.participantBankAccountEntityToParticipantBankAccountOutDto(account)));

        participantIds.forEach(participantId -> accountsByParticipant.putIfAbsent(
                participantId,
                MapperUtil.participantBankAccountEntityToParticipantBankAccountOutDto(
                        new ParticipantBankAccountEntity())));

        return accountsByParticipant;
    }

    private ParticipantBankAccountOutDto validateCudAccountFractionAssignmentV1(Long tradeId, String sideId) {
        log.info("Start method validateCudAccountFractionAssignmentV1, tradeId -> {}, sideId -> {}", tradeId, sideId);

        TradeEntity tradeEntity = validateTrade(tradeId);
        ParticipantEntity participantEntity = getParticipantBuyOrParticipantSellTrade(tradeEntity, sideId);

        TypeEntity originType = this.batchCacheService.findTypeByCategoryAndDescription(
                TypeEnum.ACCOUNT_CUD.getCategory(), TypeEnum.ACCOUNT_CUD.getDescription());

        TypeEntity conceptType = this.batchCacheService.findTypeByCategoryAndDescription(
                TypeEnum.COMPENSATION.getCategory(), TypeEnum.COMPENSATION.getDescription());

        ParticipantBankAccountEntity participantBankAccountEntity = participantBankAccountRepository
                .findFirstByParticipantIdAndOriginTypeAndConceptTypeOrderByIdAsc(participantEntity.getId(),
                        originType, conceptType)
                .orElse(new ParticipantBankAccountEntity());

        ParticipantBankAccountOutDto participantBankAccountOutDto = MapperUtil
                .participantBankAccountEntityToParticipantBankAccountOutDto(participantBankAccountEntity);

        log.info("End method validateCudAccountFractionAssignmentV1, {}", participantBankAccountOutDto);
        return participantBankAccountOutDto;
    }

    private void validateParticipantAccountAssignment(FractionAccountOutDto fractionAccountOutDto,
            Long typeSpecialFiduciaryBusinessRule,
            ParticipantAccountEntity participantAccountEntity, DepositoryEntity tradeDepository) {

        fractionAccountOutDto.setMasterAccount(participantAccountEntity.getIndMaster());
        if (typeSpecialFiduciaryBusinessRule.equals(participantAccountEntity.getType().getId())) {
            fractionAccountOutDto.setFiduciarySpecialist(true);
        }

        fractionAccountOutDto.setParticipantAccount(
                MapperUtil.participantAccountEntityToParticipantAccountOutDto(participantAccountEntity));
        fractionAccountOutDto.setSourceQuoteType(fractionAccountOutDto.getParticipantAccount().getOriginType());
    }

    private void validateInvestorAccountAssignment(FractionAccountOutDto fractionAccountOutDto,
            Long typeSpecialFiduciaryBusinessRule,
            String accountNumber, TypeEntity originTypeEntity,
            ParticipantEntity participantEntity, DepositoryEntity tradeDepository) {

        Optional<InvestorAccountEntity> investorAccountEntity;
        if (Objects.equals(originTypeEntity.getId(), TypeEnum.OWN_POSITION_POINT_ORIGIN.getId())) {
            investorAccountEntity = investorAccountRepository
                    .findFirstByAccountNumberAndInvestorDocumentNumberAndOriginTypeIdAndDepositoryIdOrderByIdAsc(
                            accountNumber,
                            participantEntity.getDocumentNumber(), originTypeEntity.getId(), tradeDepository.getId());
        } else {
            investorAccountEntity = investorAccountRepository
                    .findFirstByAccountNumberAndInvestorDocumentNumberNotAndDepositoryIdAndOriginTypeIdNot(
                            accountNumber,
                            participantEntity.getDocumentNumber(), tradeDepository.getId(),
                            TypeEnum.OWN_POSITION_POINT_ORIGIN.getId());
        }

        if (investorAccountEntity.isEmpty()) {
            throw new ServiceException(ErrorCode.PARTICIPANT_ACCOUNT_OR_INVESTOR_ACCOUNT_NOT_FOUND,
                    HttpStatus.NOT_FOUND);
        }
        InvestorAccountEntity accountEntity = investorAccountEntity.get();
        if (!Objects.equals(accountEntity.getStatus().getId(),
                StatusEnum.INVESTOR_ACCOUNT_ACTIVE.getId())) {
            throw new ServiceException(ErrorCode.ACCOUNT_NOT_ACTIVE, HttpStatus.NOT_FOUND);
        }

        InvestorAccountOutDto investorAccountOutDto = MapperUtil
                .investorAccountEntityToInvestorAccountOutDto(accountEntity);
        fractionAccountOutDto.setInvestorAccount(investorAccountOutDto);
        fractionAccountOutDto.setFiduciarySpecialist(
                typeSpecialFiduciaryBusinessRule.equals(investorAccountOutDto.getType().getId()));
        fractionAccountOutDto
                .setJointAccount(TypeEnum.JOINT_ACCOUNT.getId().equals(investorAccountOutDto.getType().getId()));
        fractionAccountOutDto.setSourceQuoteType(investorAccountOutDto.getOriginType());
    }

    private void getCustodianAndFicAdminByAccountBatch(FractionAccountOutDto fractionAccountOutDto,
            ParticipantEntity participantEntity, DepositoryEntity depositoryEntity) {
        Long investorAccountId = fractionAccountOutDto.getInvestorAccount() != null
                ? fractionAccountOutDto.getInvestorAccount().getId()
                : 0L;
        String depositoryId = depositoryEntity != null ? depositoryEntity.getId() : "0";
        Long participantId = participantEntity != null ? participantEntity.getId() : 0L;
        Optional<CustodianRelationEntity> custodianRelationEntity = custodianRelationRepository
                .findBySearch(depositoryId, investorAccountId,
                        StatusEnum.CUSTODIAN_RELATION_ACTIVE.getId());
        if (custodianRelationEntity.isPresent()) {
            ParticipantEntity custodian = custodianRelationEntity.get().getCustodian();
            ParticipantEntity participantDepositant = custodianRelationEntity.get().getParticipant();
            fractionAccountOutDto.setCustodian(
                    MapperUtil.participantEntityToParticipantOutDto(custodian));
            Optional<FicRelationEntity> ficRelationEntity = ficRelationRepository.findByParticipantCusIdAndParticipantId(custodian.getId(), participantDepositant.getId());

            if(ficRelationEntity.isPresent() && ficRelationEntity.get().getParticipantFic() != null) {
                ParticipantEntity ficAdmin = ficRelationEntity.get().getParticipantFic();
                fractionAccountOutDto.setFicAdmin(MapperUtil.participantEntityToParticipantOutDto(ficAdmin));
                fractionAccountOutDto.getFicAdmin().setBank_account(findBankAccount(ficAdmin.getId()));
            }

        }
    }

    private void validateAccountAssignmentIsMilaLocal(FractionAccountOutDto fractionAccountOutDto,
            TradeEntity tradeEntity) {

        if (fractionAccountOutDto == null || tradeEntity == null) {
            return;
        }

        if (!this.isTradeFromColombia(tradeEntity)) {
            return;
        }

        MilaDepositoryOutDto milaDepositoryDto = this
                .resolveMilaDepositoryFromParticipantAccount(fractionAccountOutDto);

        if (milaDepositoryDto == null) {
            milaDepositoryDto = this.resolveMilaDepositoryFromInvestorAccount(fractionAccountOutDto);
        }

        if (milaDepositoryDto != null) {
            fractionAccountOutDto.setMilaDirectDepositor(milaDepositoryDto);
        }
    }

    private boolean isTradeFromColombia(TradeEntity tradeEntity) {
        Long securityTitleCountryId = tradeEntity.getSecurityTitle() != null
                && tradeEntity.getSecurityTitle().getCountryId() != null
                        ? tradeEntity.getSecurityTitle().getCountryId().longValue()
                        : null;

        Long tradeCountryId = tradeEntity.getCountry() != null
                ? tradeEntity.getCountry().getId()
                : null;

        Long colombiaCountryId = propertiesConfig.getMilaLocalCountryIdColombia();

        return colombiaCountryId != null
                && Objects.equals(colombiaCountryId, securityTitleCountryId)
                && Objects.equals(colombiaCountryId, tradeCountryId);
    }

    private MilaDepositoryOutDto resolveMilaDepositoryFromParticipantAccount(
            FractionAccountOutDto fractionAccountOutDto) {
        if (fractionAccountOutDto.getParticipantAccount() == null
                || fractionAccountOutDto.getParticipantAccount().getParticipant() == null
                || fractionAccountOutDto.getParticipantAccount().getParticipant().getIdentificationType() == null
                || fractionAccountOutDto.getParticipantAccount().getParticipant().getIdentificationType()
                        .getId() == null
                || fractionAccountOutDto.getParticipantAccount().getParticipant().getDocumentNumber() == null) {
            return null;
        }

        Long identificationTypeId = fractionAccountOutDto.getParticipantAccount()
                .getParticipant()
                .getIdentificationType()
                .getId();

        String documentNumber = fractionAccountOutDto.getParticipantAccount()
                .getParticipant()
                .getDocumentNumber()
                .trim();

        return this.findMilaDepository(identificationTypeId, documentNumber);
    }

    private MilaDepositoryOutDto resolveMilaDepositoryFromInvestorAccount(FractionAccountOutDto fractionAccountOutDto) {
        if (fractionAccountOutDto.getInvestorAccount() == null
                || fractionAccountOutDto.getInvestorAccount().getInvestor() == null
                || fractionAccountOutDto.getInvestorAccount().getInvestor().getIdentificationType() == null
                || fractionAccountOutDto.getInvestorAccount().getInvestor().getIdentificationType().getId() == null
                || fractionAccountOutDto.getInvestorAccount().getInvestor().getDocumentNumber() == null) {
            return null;
        }

        Long identificationTypeId = fractionAccountOutDto.getInvestorAccount()
                .getInvestor()
                .getIdentificationType()
                .getId();

        String documentNumber = fractionAccountOutDto.getInvestorAccount()
                .getInvestor()
                .getDocumentNumber()
                .trim();

        return this.findMilaDepository(identificationTypeId, documentNumber);
    }

    private Optional<ParticipantAccountEntity> findParticipantAccountAssignment(
            String accountNumber,
            ParticipantEntity participantBySideTrade,
            DepositoryEntity depositoryBySideTrade, Boolean isLocalCorrection) {
        log.info(
                "Searching participant account assignment for accountNumber -> {}, participantId -> {}, depositoryId -> {}",
                accountNumber,
                participantBySideTrade != null ? participantBySideTrade.getId() : null,
                depositoryBySideTrade != null ? depositoryBySideTrade.getId() : null);

        Optional<ParticipantAccountEntity> participantAccountEntity = participantAccountRepository
                .findFirstByAccountNumberAndDepositoryAndOriginTypeIdNot(
                        accountNumber,
                        depositoryBySideTrade,
                        TypeEnum.OWN_POSITION_POINT_ORIGIN.getId());

        if (participantAccountEntity.isEmpty()) {
            log.info("No participant account found for accountNumber -> {}", accountNumber);
            return Optional.empty();
        }

        ParticipantAccountEntity account = participantAccountEntity.get();
        boolean isSameParticipant = Objects.equals(account.getParticipant(), participantBySideTrade);
        boolean isMaster = account.getIndMaster();

        log.info("Found participant account with id -> {}, indMaster: {}, isSameParticipant: {}",
                account.getId(), isMaster, isSameParticipant);

        // Si es master: retornar solo si pertenece al mismo participante
        // Si NO es master: retornar solo si NO pertenece al mismo participante
        if (Boolean.TRUE.equals(isLocalCorrection) && isMaster && isSameParticipant) {
            log.error("Master account not allowed in local corrections for accountNumber -> {}", accountNumber);
            throw new ServiceException(ErrorCode.CORRECTION_MASTER_ACCOUNT_NOT_ALLOWED, HttpStatus.BAD_REQUEST);
        }

        boolean shouldReturn = isMaster == isSameParticipant;

        if (shouldReturn) {
            log.info("Returning participant account - {} account belongs to {} participant",
                    isMaster ? "Master" : "Non-master",
                    isSameParticipant ? "same" : "different");
            return participantAccountEntity;
        }

        log.info("Participant account does not meet criteria, returning empty");
        return Optional.empty();
    }

    private Optional<ParticipantAccountEntity> findParticipantAccountAssignmentBatch(
            String accountNumber, Long participantId, String depositoryId, Boolean isLocalCorrection) {
        Optional<ParticipantAccountEntity> participantAccount = participantAccountRepository
                .findFirstByAccountNumberAndDepository_IdAndOriginType_IdNot(
                        accountNumber, depositoryId, TypeEnum.OWN_POSITION_POINT_ORIGIN.getId());

        if (participantAccount.isEmpty()) {
            return Optional.empty();
        }

        ParticipantAccountEntity account = participantAccount.get();
        boolean isSameParticipant = account.getParticipant() != null
                && Objects.equals(account.getParticipant().getId(), participantId);
        boolean isMaster = account.getIndMaster();

        if (Boolean.TRUE.equals(isLocalCorrection) && isMaster && isSameParticipant) {
            throw new ServiceException(ErrorCode.CORRECTION_MASTER_ACCOUNT_NOT_ALLOWED, HttpStatus.BAD_REQUEST);
        }
        return isMaster == isSameParticipant ? participantAccount : Optional.empty();
    }

    private void validateParticipantAccountAssignmentBatch(FractionAccountOutDto result,
            Long typeSpecialFiduciaryBusinessRule, ParticipantAccountEntity account, String depositoryId) {
        if (account.getDepository() == null || account.getDepository().getId() == null
                || !Objects.equals(depositoryId, account.getDepository().getId())) {
            throw new ServiceException(ErrorCode.ACCOUNT_DEPOSITORY_NOT_CORRESPOND_TO_TRADE, HttpStatus.BAD_REQUEST);
        }

        result.setMasterAccount(account.getIndMaster());
        if (Objects.equals(typeSpecialFiduciaryBusinessRule, account.getType().getId())) {
            result.setFiduciarySpecialist(true);
        }
        result.setParticipantAccount(MapperUtil.participantAccountEntityToParticipantAccountOutDto(account));
        result.setSourceQuoteType(result.getParticipantAccount().getOriginType());
    }

    private void validateInvestorAccountAssignmentBatch(FractionAccountOutDto result,
            Long typeSpecialFiduciaryBusinessRule, String accountNumber, TypeEntity originType,
            AssignmentParticipantContext participant, String depositoryId) {
        Optional<InvestorAccountEntity> investorAccount;
        if (Objects.equals(originType.getId(), TypeEnum.OWN_POSITION_POINT_ORIGIN.getId())) {
            investorAccount = investorAccountRepository
                    .findFirstByAccountNumberAndInvestorDocumentNumberAndOriginTypeIdAndDepositoryIdOrderByIdAsc(
                            accountNumber, participant.documentNumber(), originType.getId(), depositoryId);
        } else {
            investorAccount = investorAccountRepository
                    .findFirstByAccountNumberAndInvestorDocumentNumberNotAndDepositoryIdAndOriginTypeIdNot(
                            accountNumber, participant.documentNumber(), depositoryId,
                            TypeEnum.OWN_POSITION_POINT_ORIGIN.getId());
        }

        if (investorAccount.isEmpty()) {
            throw new ServiceException(ErrorCode.PARTICIPANT_ACCOUNT_OR_INVESTOR_ACCOUNT_NOT_FOUND,
                    HttpStatus.NOT_FOUND);
        }

        InvestorAccountEntity account = investorAccount.get();
        if (!Objects.equals(account.getStatus().getId(), StatusEnum.INVESTOR_ACCOUNT_ACTIVE.getId())) {
            throw new ServiceException(ErrorCode.ACCOUNT_NOT_ACTIVE, HttpStatus.NOT_FOUND);
        }
        if (account.getDepository() == null || account.getDepository().getId() == null
                || !Objects.equals(depositoryId, account.getDepository().getId())) {
            throw new ServiceException(ErrorCode.ACCOUNT_DEPOSITORY_NOT_CORRESPOND_TO_TRADE, HttpStatus.BAD_REQUEST);
        }

        InvestorAccountOutDto investorAccountOutDto = MapperUtil.investorAccountEntityToInvestorAccountOutDto(account);
        result.setInvestorAccount(investorAccountOutDto);
        result.setFiduciarySpecialist(Objects.equals(typeSpecialFiduciaryBusinessRule,
                investorAccountOutDto.getType().getId()));
        result.setJointAccount(Objects.equals(TypeEnum.JOINT_ACCOUNT.getId(), investorAccountOutDto.getType().getId()));
        result.setSourceQuoteType(investorAccountOutDto.getOriginType());
    }

    private void getCustodianAndFicAdminByAccountBatch(FractionAccountOutDto result, Long participantId, String depositoryId) {
        Long investorAccountId = result.getInvestorAccount() != null ? result.getInvestorAccount().getId() : 0L;
        Optional<CustodianRelationEntity> relation = custodianRelationRepository.findBySearch(
                depositoryId == null ? "0" : depositoryId,
                investorAccountId,
                StatusEnum.CUSTODIAN_RELATION_ACTIVE.getId());
        if (relation.isPresent()) {
            ParticipantEntity custodian = relation.get().getCustodian();
            ParticipantEntity participantDepositant = relation.get().getParticipant();
            result.setCustodian(
                    MapperUtil.participantEntityToParticipantOutDto(custodian));
            Optional<FicRelationEntity> ficRelationEntity = ficRelationRepository.findByParticipantCusIdAndParticipantId(custodian.getId(), participantDepositant.getId());
            if (ficRelationEntity.isPresent() && ficRelationEntity.get().getParticipantFic() != null) {
                ParticipantEntity ficAdmin = ficRelationEntity.get().getParticipantFic();
                result.setFicAdmin(MapperUtil.participantEntityToParticipantOutDto(ficAdmin));
                result.getFicAdmin().setBank_account(findBankAccount(ficAdmin.getId()));
            }
        }
    }

    private AssignmentParticipantContext participantForSide(AssignmentTradeContext trade, String sideId) {
        AssignmentParticipantContext participant;
        if (SideEnum.BUY.getId().equals(sideId)) {
            participant = trade.participantBuy();
        } else if (SideEnum.SELL.getId().equals(sideId)) {
            participant = trade.participantSell();
        } else {
            throw new ServiceException(ErrorCode.SIDE_NOT_FOUND, HttpStatus.BAD_REQUEST);
        }
        if (participant == null || participant.id() == null) {
            throw new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        return participant;
    }

    private String depositoryForSide(AssignmentTradeContext trade, String sideId) {
        String depository;
        if (SideEnum.BUY.getId().equals(sideId)) {
            depository = trade.depositoryBuyId();
        } else if (SideEnum.SELL.getId().equals(sideId)) {
            depository = trade.depositorySellId();
        } else {
            throw new ServiceException(ErrorCode.SIDE_NOT_FOUND, HttpStatus.BAD_REQUEST);
        }
        if (depository == null) {
            throw new ServiceException(ErrorCode.TRADE_DEPOSITORY_REQUIRED, HttpStatus.NOT_FOUND);
        }
        return depository;
    }

    private void validateAccountAssignmentIsMilaLocal(FractionAccountOutDto result, AssignmentTradeContext trade) {
        if (result == null || trade == null || !isTradeFromColombia(trade)) {
            return;
        }

        MilaDepositoryOutDto milaDepositoryDto = resolveMilaDepositoryFromParticipantAccount(result);
        if (milaDepositoryDto == null) {
            milaDepositoryDto = resolveMilaDepositoryFromInvestorAccount(result);
        }
        if (milaDepositoryDto != null) {
            result.setMilaDirectDepositor(milaDepositoryDto);
        }
    }

    private boolean isTradeFromColombia(AssignmentTradeContext trade) {
        Long securityTitleCountryId = trade.securityTitleCountryId() == null
                ? null
                : trade.securityTitleCountryId().longValue();
        Long colombiaCountryId = propertiesConfig.getMilaLocalCountryIdColombia();
        return colombiaCountryId != null
                && Objects.equals(colombiaCountryId, securityTitleCountryId)
                && Objects.equals(colombiaCountryId, trade.countryId());
    }

    private MilaDepositoryOutDto findMilaDepository(Long identificationTypeId, String documentNumber) {
        return milaDepositoryRepository
                .findFirstByIdentificationTypeIdAndDocumentNumber(identificationTypeId, documentNumber)
                .map(MapperUtil::milaDepositoryEntityToMilaDepositoryDto)
                .orElse(null);
    }

    private TradeEntity validateTrade(Long tradeId) {
        if (tradeId == null) {
            throw new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        return tradeRepository.findByIdWithRelations(tradeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private void validateTypeOperation(TradeEntity tradeEntity) {
        if (tradeEntity == null) {
            throw new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        if (!Objects.equals(TypeEnum.COUNTED_OPERATION.getId(), tradeEntity.getType().getId())
                && !Objects.equals(TypeEnum.REPO_OPERATION.getId(), tradeEntity.getType().getId())) {
            throw new ServiceException(ErrorCode.TYPE_COUNTED_OR_REPO_OPERATION_REQUIRED, HttpStatus.BAD_REQUEST);
        }
    }

    private void validateTypeOperation(AssignmentTradeContext trade) {
        if (trade == null || trade.typeId() == null) {
            throw new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        if (!Objects.equals(TypeEnum.COUNTED_OPERATION.getId(), trade.typeId())
                && !Objects.equals(TypeEnum.REPO_OPERATION.getId(), trade.typeId())) {
            throw new ServiceException(ErrorCode.TYPE_COUNTED_OR_REPO_OPERATION_REQUIRED, HttpStatus.BAD_REQUEST);
        }
    }

    private TypeEntity validateType(Long typeId) {
        if (typeId == null) {
            throw new ServiceException(ErrorCode.TYPE_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        return this.batchCacheService.findTypeEntity(typeId).orElseThrow(
                () -> new ServiceException(ErrorCode.TYPE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private String findBankAccount(Long participantId){

        String bank_account = "";

        ParticipantEntity participantEntity = participantRepository.findById(participantId).orElse(null);

        TypeEntity originType = typeRepository
                .findByCategoryIgnoreCaseAndDescriptionIgnoreCase(TypeEnum.ACCOUNT_CUD.getDescription(), TypeEnum.ACCOUNT_CUD.getCategory())
                .orElseThrow(() -> new ServiceException(ErrorCode.TYPE_NOT_FOUND, HttpStatus.NOT_FOUND));

        TypeEntity conceptType = typeRepository
                .findByCategoryIgnoreCaseAndDescriptionIgnoreCase(TypeEnum.COMPENSATION.getCategory(), TypeEnum.COMPENSATION.getDescription())
                .orElseThrow(() -> new ServiceException(ErrorCode.TYPE_NOT_FOUND, HttpStatus.NOT_FOUND));

        ParticipantBankAccountEntity participantBankAccountEntity = participantBankAccountRepository
                .findFirstByParticipantIdAndOriginTypeAndConceptTypeOrderByIdAsc(participantEntity.getId(), originType, conceptType).orElse(null);

        if (participantBankAccountEntity != null){
            bank_account = participantBankAccountEntity.getBankAccount();
        }

        return bank_account;

    }

}

```

## src/main/java/com/nubo/operations/cmd/api/web/controller/AssignmentClosureController.java

```java

package com.nubo.operations.cmd.api.web.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.operations.cmd.api.models.dto.request.AssignmentClosureInDto;
import com.nubo.operations.cmd.api.models.dto.response.AssignmentClosureValidateOutDto;
import com.nubo.operations.cmd.api.service.AssignmentClosureService;

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

    @Operation(summary = "Confirm final assignment",
            description = "Confirms the final assignment for the provided list of trades and sides. Validates business rules, updates trade statuses, and returns successful and failed assignment closures.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response",
                    content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                        schema = @Schema(implementation = AssignmentClosureValidateOutDto.class)))
    })
    @PostMapping("/confirm-definitive")
    public ResponseEntity<AssignmentClosureValidateOutDto> confirmDefinitive(
            @Valid @RequestBody List<AssignmentClosureInDto> assignmentClosureInDtoList) {
        return ResponseEntity.status(HttpStatus.OK)
                .body(assignmentClosureService.confirmDefinitive(assignmentClosureInDtoList));
    }
}

```

## src/main/java/com/nubo/operations/cmd/api/web/controller/FractionationCountedController.java

```java

package com.nubo.operations.cmd.api.web.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.operations.cmd.api.models.dto.request.AssignmentInDto;
import com.nubo.operations.cmd.api.models.dto.request.FractionInDto;
import com.nubo.operations.cmd.api.models.dto.request.BatchAssignmentInDto;
import com.nubo.operations.cmd.api.models.dto.request.BatchAssignmentValidationInDto;
import com.nubo.operations.cmd.api.models.dto.response.BatchAssignmentOutDto;
import com.nubo.operations.cmd.api.models.dto.response.BatchAssignmentValidationOutDto;
import com.nubo.operations.cmd.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.cmd.api.service.FractionationBatchService;
import com.nubo.operations.cmd.api.service.FractionationCountedService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotEmpty;
import lombok.RequiredArgsConstructor;

@Tag(name = "Fractionation Counted Command")
@Validated
@RestController
@RequestMapping("/{version}/fractionation/counted-operation")
@RequiredArgsConstructor
public class FractionationCountedController {

    private final FractionationCountedService fractionationCountedService;
    private final FractionationBatchService fractionationBatchService;

    @PostMapping("/batch/validate")
    public ResponseEntity<BatchAssignmentValidationOutDto> validateBatch(
            @Valid @RequestBody BatchAssignmentValidationInDto request) {
        return ResponseEntity.ok(fractionationBatchService.validateBatch(request));
    }

    @PostMapping("/batch")
    public ResponseEntity<BatchAssignmentOutDto> processBatch(
            @Valid @RequestBody BatchAssignmentInDto request) {
        return ResponseEntity.ok(fractionationBatchService.processBatch(request));
    }

    @Operation(summary = "Create fraction by tradeId and sideId", description = "Create fraction by tradeId and sideId")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = SettlementOutDto[].class)))
    })
    @PostMapping("/create-fractions/trade/{tradeId}/side/{sideId}")
    public ResponseEntity<List<SettlementOutDto>> createFractions(
            @PathVariable Long tradeId,
            @PathVariable String sideId,
            @NotEmpty @Valid @RequestBody List<FractionInDto> fractionInDtoList) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(fractionationCountedService.createFractions(tradeId, sideId, fractionInDtoList));
    }

    @Operation(summary = "Update fraction by tradeId and sideId", description = "Update fraction by tradeId and sideId")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = SettlementOutDto[].class)))
    })
    @PutMapping("/update-assignments/trade/{tradeId}/side/{sideId}")
    public ResponseEntity<List<SettlementOutDto>> updateAssignment(
            @PathVariable Long tradeId,
            @PathVariable String sideId,
            @NotEmpty @Valid @RequestBody List<FractionInDto> fractionInDtoList) {
        return ResponseEntity.status(HttpStatus.OK)
                .body(fractionationCountedService.updateAssignment(tradeId, sideId, fractionInDtoList));
    }

    @Operation(summary = "Update fraction by tradeId and sideId to corrections", description = "Update fraction by tradeId and sideId to corrections")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = SettlementOutDto[].class)))
    })
    @PutMapping("/update-corrections/trade/{tradeId}/side/{sideId}/correction/{correctionStatusId}")
    public ResponseEntity<List<SettlementOutDto>> updateCorrection(
            @PathVariable Long tradeId,
            @PathVariable String sideId,
            @PathVariable String correctionStatusId,
            @NotEmpty @Valid @RequestBody List<AssignmentInDto> assignmentInDtoList) {
        return ResponseEntity.status(HttpStatus.OK)
                .body(fractionationCountedService.updateCorrection(tradeId, sideId, assignmentInDtoList));
    }

}

```

## src/main/java/com/nubo/operations/cmd/api/web/controller/SettlementController.java

```java
package com.nubo.operations.cmd.api.web.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.operations.cmd.api.models.dto.request.SettlementCommissionUpdateInDto;
import com.nubo.operations.cmd.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.cmd.api.models.entity.SettlementKey;
import com.nubo.operations.cmd.api.service.SettlementService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@Tag(name = "Settlement")
@RestController
@RequestMapping("/{version}/settlement")
@RequiredArgsConstructor
public class SettlementController {

    private final SettlementService settlementService;

    @Operation(summary = "Update settlement commission", description = "Update settlement commission")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = SettlementOutDto.class)))
    })
    @PatchMapping("/update-commission/trade/{tradeId}/fraction/{fraction}/side/{sideId}")
    public ResponseEntity<SettlementOutDto> updateSettlementCommission(
            @PathVariable Long tradeId,
            @PathVariable Integer fraction,
            @PathVariable String sideId,
            @Valid @RequestBody SettlementCommissionUpdateInDto settlementCommissionUpdateInDto) {
        SettlementKey settlementKey = new SettlementKey(tradeId, fraction, sideId);
        return ResponseEntity.ok(
                settlementService.updateSettlementCommission(settlementKey, settlementCommissionUpdateInDto));
    }
}

```

## src/main/java/com/nubo/operations/cmd/api/web/controller/TradeController.java

```java
package com.nubo.operations.cmd.api.web.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.operations.cmd.api.models.dto.request.TradeInDto;
import com.nubo.operations.cmd.api.models.dto.request.TradeUpdateInDto;
import com.nubo.operations.cmd.api.models.dto.response.TradeOutDto;
import com.nubo.operations.cmd.api.service.TradeService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@Tag(name = "Trade")
@RequestMapping("/{version}/trade")
@RestController
@RequiredArgsConstructor
public class TradeController {

    private final TradeService tradeService;

    @Operation(summary = "Create Trade", description = "Create Trade")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = TradeOutDto.class)))
    })
    @PostMapping()
    public ResponseEntity<TradeOutDto> createTrade(@Valid @RequestBody TradeInDto tradeInDto) {
        TradeOutDto tradeOutDto = tradeService.createTrade(tradeInDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(tradeOutDto);
    }

    @Operation(summary = "Update Trade by Id", description = "Update Trade by Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = TradeOutDto.class)))
    })
    @PatchMapping("{tradeId}")
    public ResponseEntity<TradeOutDto> updateTrade(@PathVariable Long tradeId,
            @Valid @RequestBody TradeUpdateInDto tradeUpdateInDto) {
        return ResponseEntity.ok(tradeService.updateTrade(tradeId, tradeUpdateInDto));
    }
}

```

## src/main/java/com/nubo/operations/cmd/api/web/controller/TradeEquityController.java

```java
package com.nubo.operations.cmd.api.web.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.operations.cmd.api.models.dto.request.TradeEquityInDto;
import com.nubo.operations.cmd.api.models.dto.request.TradeEquityUpdateInDto;
import com.nubo.operations.cmd.api.models.dto.response.TradeEquityOutDto;
import com.nubo.operations.cmd.api.service.TradeEquityService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@Tag(name = "Trade Equity")
@RequestMapping("/{version}/trade-equity")
@RestController
@RequiredArgsConstructor
public class TradeEquityController {

    private final TradeEquityService tradeEquityService;

    @Operation(summary = "Create TradeEquity", description = "Create TradeEquity")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = TradeEquityOutDto.class)))
    })
    @PostMapping
    public ResponseEntity<TradeEquityOutDto> createTradeEquity(@Valid @RequestBody TradeEquityInDto tradeEquityInDto) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(tradeEquityService.createTradeEquity(tradeEquityInDto));
    }

    @Operation(summary = "Update TradeEquity by Id", description = "Update TradeEquity by Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = TradeEquityOutDto.class)))
    })
    @PatchMapping("/trade/{tradeId}")
    public ResponseEntity<TradeEquityOutDto> updateTradeEquity(@PathVariable Long tradeId,
            @Valid @RequestBody TradeEquityUpdateInDto tradeEquityUpdateInDto) {
        return ResponseEntity.ok(tradeEquityService.updateTradeEquity(tradeId, tradeEquityUpdateInDto));
    }
}

```

## src/main/java/com/nubo/operations/cmd/api/web/controller/ValidateCountedFractionRestController.java

```java
package com.nubo.operations.cmd.api.web.controller;

import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.operations.cmd.api.models.dto.request.FractionRuleInDto;
import com.nubo.operations.cmd.api.models.dto.response.FractionAccountOutDto;
import com.nubo.operations.cmd.api.models.dto.response.ParticipantBankAccountOutDto;
import com.nubo.operations.cmd.api.models.dto.response.ParticipantOutDto;
import com.nubo.operations.cmd.api.service.ValidateCountedFractionService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@Tag(name = "Validate Counted Fraction")
@RequestMapping("/{version}/validate/counted-fraction")
@RestController
@RequiredArgsConstructor
public class ValidateCountedFractionRestController {

    private final ValidateCountedFractionService validateCountedFractionService;

    @Operation(summary = "Validate account correction", description = "Validate account correction")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = FractionAccountOutDto.class))) })
    @GetMapping("/correction/account-fraction/account-number/{accountNumber}/trade/{tradeId}/side/{sideId}")
    public ResponseEntity<FractionAccountOutDto> validateAccountFractionCorrection(
            @PathVariable String accountNumber,
            @PathVariable Long tradeId,
            @PathVariable String sideId) {
        return ResponseEntity
                .ok(validateCountedFractionService.validateAccountFractionCorrection(accountNumber, tradeId, sideId));
    }

    @Operation(summary = "Validate quantity fractions correction", description = "Validate quantity correction")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = Boolean.class))) })
    @PostMapping("/correction/quantity-fractions/trade/{tradeId}")
    public ResponseEntity<Boolean> validateQuantityFractionsCorrection(@PathVariable Long tradeId,
            @Valid @RequestBody List<FractionRuleInDto> fractionRuleInDtoList) {
        Boolean response = validateCountedFractionService.validateQuantityFractions(tradeId,
                fractionRuleInDtoList);
        return ResponseEntity.ok(response);
    }

    @Operation(summary = "Validate maximum limit fractions correction", description = "Validate maximum limit fractions correction")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = Boolean.class))) })
    @PostMapping("/correction/maximum-limit-fractions/trade/{tradeId}")
    public ResponseEntity<Boolean> validateMaximumLimitFractionsCorrection(@PathVariable Long tradeId,
            @Valid @RequestBody List<FractionRuleInDto> fractionRuleInDtoList) {
        Boolean response = validateCountedFractionService.validateMaximumLimitFractions(tradeId,
                fractionRuleInDtoList);
        return ResponseEntity.ok(response);
    }

    @Operation(summary = "Validate direct depositor fraction correction", description = "Validate direct depositor fraction correction")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = ParticipantOutDto.class))) })
    @GetMapping("/correction/direct-depositor/trade/{tradeId}/side/{sideId}")
    public ResponseEntity<ParticipantOutDto> validateDirectDepositorFractionCorrection(@PathVariable Long tradeId,
            @PathVariable String sideId) {
        ParticipantOutDto response = validateCountedFractionService.validateDirectDepositorFractionCorrection(tradeId,
                sideId);
        return ResponseEntity.ok(response);
    }

    @Operation(summary = "Validate account assingment", description = "Validate account assingment")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = FractionAccountOutDto.class))) })
    @GetMapping("/assignment/account-fraction/account-number/{accountNumber}/trade/{tradeId}/side/{sideId}/origin/{originId}")
    public ResponseEntity<FractionAccountOutDto> validateAccountFractionAssignment(
            @PathVariable String accountNumber,
            @PathVariable Long tradeId,
            @PathVariable String sideId,
            @PathVariable Long originId,
            @RequestParam(defaultValue = "false") boolean isLocalCorrection) {
        return ResponseEntity.ok(validateCountedFractionService.validateAccountFractionAssignment(accountNumber,
                tradeId, sideId, originId, isLocalCorrection));
    }

    @Operation(summary = "Validate cud-account assignment", description = "Validate cud-account assignment")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = ParticipantBankAccountOutDto.class))) })
    @GetMapping("/assignment/cud-account/trade/{tradeId}/side/{sideId}")
    public ResponseEntity<ParticipantBankAccountOutDto> validateCudAccountFractionAssignment(
            @PathVariable Long tradeId,
            @PathVariable String sideId) {
        return ResponseEntity.ok(validateCountedFractionService.validateCudAccountFractionAssignment(tradeId, sideId));
    }

}

```
