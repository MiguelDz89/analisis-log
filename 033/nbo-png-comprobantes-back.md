# nbo-png-comprobantes-back

Código fuente completo de producción y configuraciones. Captura local: 28/10/2026.

Incluye 224 archivos Java y 17 archivos de configuración, recursos y compilación.

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
12. `src/main/resources/cause-catalog.yml`
13. `src/main/resources/log/JsonEventLayout_error.json`
14. `src/main/resources/log/JsonEventLayout_info.json`
15. `src/main/resources/log/JsonEventLayout_trace.json`
16. `src/main/resources/log/log4j2-prod.properties`
17. `src/main/resources/log/log4j2.properties`
18. `src/main/java/com/nubo/receipts/api/ReceiptsOperationsApiApplication.java`
19. `src/main/java/com/nubo/receipts/api/application/annotations/CommaDecimal.java`
20. `src/main/java/com/nubo/receipts/api/application/annotations/CommaDecimalSerializer.java`
21. `src/main/java/com/nubo/receipts/api/application/annotations/FixedDecimal.java`
22. `src/main/java/com/nubo/receipts/api/application/annotations/FixedDecimalSerializer.java`
23. `src/main/java/com/nubo/receipts/api/application/annotations/PadCommaDecimal.java`
24. `src/main/java/com/nubo/receipts/api/application/annotations/PadCommaDecimalSerializer.java`
25. `src/main/java/com/nubo/receipts/api/application/annotations/PadLeft.java`
26. `src/main/java/com/nubo/receipts/api/application/annotations/PadLeftSerializer.java`
27. `src/main/java/com/nubo/receipts/api/application/cause/CauseCatalog.java`
28. `src/main/java/com/nubo/receipts/api/application/cause/CauseCatalogProperties.java`
29. `src/main/java/com/nubo/receipts/api/application/cause/CauseEntry.java`
30. `src/main/java/com/nubo/receipts/api/application/config/CacheConfig.java`
31. `src/main/java/com/nubo/receipts/api/application/config/JacksonModuleConfig.java`
32. `src/main/java/com/nubo/receipts/api/application/config/KafkaProducerConfig.java`
33. `src/main/java/com/nubo/receipts/api/application/config/SwaggerConfig.java`
34. `src/main/java/com/nubo/receipts/api/application/config/WebConfig.java`
35. `src/main/java/com/nubo/receipts/api/application/context/GlobalContext.java`
36. `src/main/java/com/nubo/receipts/api/application/database/NamingStrategyConfig.java`
37. `src/main/java/com/nubo/receipts/api/application/database/UpperNamingConfig.java`
38. `src/main/java/com/nubo/receipts/api/application/filters/GlobalFilter.java`
39. `src/main/java/com/nubo/receipts/api/application/interceptors/GlobalInterceptor.java`
40. `src/main/java/com/nubo/receipts/api/application/properties/PropertiesConfig.java`
41. `src/main/java/com/nubo/receipts/api/application/properties/PropertiesContext.java`
42. `src/main/java/com/nubo/receipts/api/application/util/ApplicationUtils.java`
43. `src/main/java/com/nubo/receipts/api/application/util/DependencyCauseExtractor.java`
44. `src/main/java/com/nubo/receipts/api/application/util/RestClientUtils.java`
45. `src/main/java/com/nubo/receipts/api/client/kafka/models/dto/CustodianReportFileInDto.java`
46. `src/main/java/com/nubo/receipts/api/client/kafka/models/dto/CustodianUpdatesReportFileInDto.java`
47. `src/main/java/com/nubo/receipts/api/client/kafka/models/dto/ProducerKafkaCustodianReportInDto.java`
48. `src/main/java/com/nubo/receipts/api/client/kafka/models/dto/ProducerKafkaCustodianUpdatesReportInDto.java`
49. `src/main/java/com/nubo/receipts/api/client/kafka/models/dto/ProducerKafkaOperationsAPIInDto.java`
50. `src/main/java/com/nubo/receipts/api/client/kafka/models/dto/ProducerKafkaReceiptsOperationsAPIInDto.java`
51. `src/main/java/com/nubo/receipts/api/client/kafka/models/dto/ProducerKafkaReportFileInDto.java`
52. `src/main/java/com/nubo/receipts/api/client/kafka/models/dto/SettlementReportFileInDto.java`
53. `src/main/java/com/nubo/receipts/api/client/kafka/producer/KafkaNuboAdapter.java`
54. `src/main/java/com/nubo/receipts/api/client/rule/models/dto/ActionOutDto.java`
55. `src/main/java/com/nubo/receipts/api/client/rule/models/dto/BusinessRuleOutDto.java`
56. `src/main/java/com/nubo/receipts/api/client/rule/models/dto/StatusOutDto.java`
57. `src/main/java/com/nubo/receipts/api/client/rule/models/enums/BusinessRuleEnum.java`
58. `src/main/java/com/nubo/receipts/api/client/rule/service/BusinessRulesClient.java`
59. `src/main/java/com/nubo/receipts/api/client/rule/service/impl/BusinessRulesClientImpl.java`
60. `src/main/java/com/nubo/receipts/api/client/schedule/validate/models/dto/ScheduleValidationOutDto.java`
61. `src/main/java/com/nubo/receipts/api/client/schedule/validate/service/ScheduleValidateManualClient.java`
62. `src/main/java/com/nubo/receipts/api/client/schedule/validate/service/impl/ScheduleValidateManualClientImpl.java`
63. `src/main/java/com/nubo/receipts/api/exception/ClientException.java`
64. `src/main/java/com/nubo/receipts/api/exception/ServiceException.java`
65. `src/main/java/com/nubo/receipts/api/exception/error/ErrorCode.java`
66. `src/main/java/com/nubo/receipts/api/exception/error/ErrorResponse.java`
67. `src/main/java/com/nubo/receipts/api/exception/error/ErrorValidation.java`
68. `src/main/java/com/nubo/receipts/api/exception/handler/GlobalExceptionHandler.java`
69. `src/main/java/com/nubo/receipts/api/exception/kafka/KafkaErrorBuild.java`
70. `src/main/java/com/nubo/receipts/api/helpers/FileGenerateMapperUtil.java`
71. `src/main/java/com/nubo/receipts/api/helpers/MapperPageUtil.java`
72. `src/main/java/com/nubo/receipts/api/helpers/MapperReceiptMassiveUtil.java`
73. `src/main/java/com/nubo/receipts/api/helpers/MapperReceiptSettlementUtil.java`
74. `src/main/java/com/nubo/receipts/api/helpers/ReportFileUtil.java`
75. `src/main/java/com/nubo/receipts/api/helpers/SendNotificationUtil.java`
76. `src/main/java/com/nubo/receipts/api/helpers/VoucherMapperUtil.java`
77. `src/main/java/com/nubo/receipts/api/helpers/dynamicQuery/dataBase/CustodianIncidentsReportSpecificationFactory.java`
78. `src/main/java/com/nubo/receipts/api/helpers/dynamicQuery/dataBase/CustodianPackageReportSpecificationFactory.java`
79. `src/main/java/com/nubo/receipts/api/helpers/dynamicQuery/dataBase/FileGenerateSpecificationBuilder.java`
80. `src/main/java/com/nubo/receipts/api/helpers/dynamicQuery/dataBase/FileGenerateSpecificationFactory.java`
81. `src/main/java/com/nubo/receipts/api/helpers/dynamicQuery/dataBase/MapperFileGenerateDynamicSearch.java`
82. `src/main/java/com/nubo/receipts/api/models/domain/ReportData.java`
83. `src/main/java/com/nubo/receipts/api/models/domain/TradeSettlementReport.java`
84. `src/main/java/com/nubo/receipts/api/models/dto/request/CustodianReportFilterInDto.java`
85. `src/main/java/com/nubo/receipts/api/models/dto/request/CustodianUpdatesReportFilterInDto.java`
86. `src/main/java/com/nubo/receipts/api/models/dto/request/FileGenerateHistoryInDto.java`
87. `src/main/java/com/nubo/receipts/api/models/dto/request/FileIndividualInDto.java`
88. `src/main/java/com/nubo/receipts/api/models/dto/request/FileMassiveInDto.java`
89. `src/main/java/com/nubo/receipts/api/models/dto/request/NotificationRequestDto.java`
90. `src/main/java/com/nubo/receipts/api/models/dto/request/SideOperationInDto.java`
91. `src/main/java/com/nubo/receipts/api/models/dto/request/TradeOperationInDto.java`
92. `src/main/java/com/nubo/receipts/api/models/dto/request/VoucherFiltersDto.java`
93. `src/main/java/com/nubo/receipts/api/models/dto/response/ApiClientCauseDto.java`
94. `src/main/java/com/nubo/receipts/api/models/dto/response/CauseType.java`
95. `src/main/java/com/nubo/receipts/api/models/dto/response/CustodianReport/CustodianReportPageOutDto.java`
96. `src/main/java/com/nubo/receipts/api/models/dto/response/CustodianReport/CustodianReportRowOutDto.java`
97. `src/main/java/com/nubo/receipts/api/models/dto/response/PageResponseOutDto.java`
98. `src/main/java/com/nubo/receipts/api/models/dto/response/ReportOutDto.java`
99. `src/main/java/com/nubo/receipts/api/models/dto/response/SettlementFileResponseDto.java`
100. `src/main/java/com/nubo/receipts/api/models/dto/response/SettlementReport/FileGenerateDto.java`
101. `src/main/java/com/nubo/receipts/api/models/dto/response/massive/AfpFundPlaneOutDto.java`
102. `src/main/java/com/nubo/receipts/api/models/dto/response/massive/CfiPlaneOutDto.java`
103. `src/main/java/com/nubo/receipts/api/models/dto/response/massive/CityPlaneOutDto.java`
104. `src/main/java/com/nubo/receipts/api/models/dto/response/massive/ClassPlaneOutDto.java`
105. `src/main/java/com/nubo/receipts/api/models/dto/response/massive/CountryPlaneOutDto.java`
106. `src/main/java/com/nubo/receipts/api/models/dto/response/massive/CurrencyPlaneOutDto.java`
107. `src/main/java/com/nubo/receipts/api/models/dto/response/massive/DepartmentPlaneOutDto.java`
108. `src/main/java/com/nubo/receipts/api/models/dto/response/massive/DepositoryPlaneOutDto.java`
109. `src/main/java/com/nubo/receipts/api/models/dto/response/massive/ExchangeRatePlaneOutDto.java`
110. `src/main/java/com/nubo/receipts/api/models/dto/response/massive/GicsPlaneOutDto.java`
111. `src/main/java/com/nubo/receipts/api/models/dto/response/massive/IdentificationTypePlaneOutDto.java`
112. `src/main/java/com/nubo/receipts/api/models/dto/response/massive/InvestorAccountPlaneOutDto.java`
113. `src/main/java/com/nubo/receipts/api/models/dto/response/massive/InvestorPlaneOutDto.java`
114. `src/main/java/com/nubo/receipts/api/models/dto/response/massive/IssuerPlaneOutDto.java`
115. `src/main/java/com/nubo/receipts/api/models/dto/response/massive/MarketPlaneOutDto.java`
116. `src/main/java/com/nubo/receipts/api/models/dto/response/massive/ParticipantAccountPlaneOutDto.java`
117. `src/main/java/com/nubo/receipts/api/models/dto/response/massive/ParticipantPlaneOutDto.java`
118. `src/main/java/com/nubo/receipts/api/models/dto/response/massive/ReceiptFileOutDto.java`
119. `src/main/java/com/nubo/receipts/api/models/dto/response/massive/ReceiptSettlementPlaneOutDto.java`
120. `src/main/java/com/nubo/receipts/api/models/dto/response/massive/SecurityTitlePlaneOutDto.java`
121. `src/main/java/com/nubo/receipts/api/models/dto/response/massive/SettlementPlaneOutDto.java`
122. `src/main/java/com/nubo/receipts/api/models/dto/response/massive/SidePlaneOutDto.java`
123. `src/main/java/com/nubo/receipts/api/models/dto/response/massive/SmallParticipantOutDto.java`
124. `src/main/java/com/nubo/receipts/api/models/dto/response/massive/SpecialTradePlaneOutDto.java`
125. `src/main/java/com/nubo/receipts/api/models/dto/response/massive/StatusPlaneOutDto.java`
126. `src/main/java/com/nubo/receipts/api/models/dto/response/massive/TaxStatusPlaneOutDto.java`
127. `src/main/java/com/nubo/receipts/api/models/dto/response/massive/TradePlaneOutDto.java`
128. `src/main/java/com/nubo/receipts/api/models/dto/response/massive/TradingSessionPlaneOutDto.java`
129. `src/main/java/com/nubo/receipts/api/models/dto/response/massive/TradingSystemPlaneOutDto.java`
130. `src/main/java/com/nubo/receipts/api/models/dto/response/massive/TypePlaneOutDto.java`
131. `src/main/java/com/nubo/receipts/api/models/dto/response/pdf/CfiOutDto.java`
132. `src/main/java/com/nubo/receipts/api/models/dto/response/pdf/CityOutDto.java`
133. `src/main/java/com/nubo/receipts/api/models/dto/response/pdf/CountryOutDto.java`
134. `src/main/java/com/nubo/receipts/api/models/dto/response/pdf/CurrencyOutDto.java`
135. `src/main/java/com/nubo/receipts/api/models/dto/response/pdf/DepartmentOutDto.java`
136. `src/main/java/com/nubo/receipts/api/models/dto/response/pdf/DepositoryOutDto.java`
137. `src/main/java/com/nubo/receipts/api/models/dto/response/pdf/GicsOutDto.java`
138. `src/main/java/com/nubo/receipts/api/models/dto/response/pdf/IdentificationTypeOutDto.java`
139. `src/main/java/com/nubo/receipts/api/models/dto/response/pdf/InvestorAccountOutDto.java`
140. `src/main/java/com/nubo/receipts/api/models/dto/response/pdf/InvestorOutDto.java`
141. `src/main/java/com/nubo/receipts/api/models/dto/response/pdf/MarketOutDto.java`
142. `src/main/java/com/nubo/receipts/api/models/dto/response/pdf/ParticipantAccountOutDto.java`
143. `src/main/java/com/nubo/receipts/api/models/dto/response/pdf/ParticipantOutDto.java`
144. `src/main/java/com/nubo/receipts/api/models/dto/response/pdf/ReceiptSettlementOutDto.java`
145. `src/main/java/com/nubo/receipts/api/models/dto/response/pdf/SecurityTitleOutDto.java`
146. `src/main/java/com/nubo/receipts/api/models/dto/response/pdf/SettlementOutDto.java`
147. `src/main/java/com/nubo/receipts/api/models/dto/response/pdf/SideOutDto.java`
148. `src/main/java/com/nubo/receipts/api/models/dto/response/pdf/StatusOutDto.java`
149. `src/main/java/com/nubo/receipts/api/models/dto/response/pdf/TaxStatusOutDto.java`
150. `src/main/java/com/nubo/receipts/api/models/dto/response/pdf/TradeOutDto.java`
151. `src/main/java/com/nubo/receipts/api/models/dto/response/pdf/TradingSessionOutDto.java`
152. `src/main/java/com/nubo/receipts/api/models/dto/response/pdf/TradingSystemOutDto.java`
153. `src/main/java/com/nubo/receipts/api/models/dto/response/pdf/TypeOutDto.java`
154. `src/main/java/com/nubo/receipts/api/models/dto/response/voucher/LiquidaFileOutDto.java`
155. `src/main/java/com/nubo/receipts/api/models/dto/response/voucher/PapeletaFileOutDto.java`
156. `src/main/java/com/nubo/receipts/api/models/entity/CfiEntity.java`
157. `src/main/java/com/nubo/receipts/api/models/entity/ClassEntity.java`
158. `src/main/java/com/nubo/receipts/api/models/entity/CountryEntity.java`
159. `src/main/java/com/nubo/receipts/api/models/entity/CurrencyEntity.java`
160. `src/main/java/com/nubo/receipts/api/models/entity/CustodianIncidentsReportViewEntity.java`
161. `src/main/java/com/nubo/receipts/api/models/entity/CustodianPackageReportViewEntity.java`
162. `src/main/java/com/nubo/receipts/api/models/entity/CustodianReportViewEntity.java`
163. `src/main/java/com/nubo/receipts/api/models/entity/CustodianReportViewKey.java`
164. `src/main/java/com/nubo/receipts/api/models/entity/CustodianUpdatesReportViewEntity.java`
165. `src/main/java/com/nubo/receipts/api/models/entity/DepositoryEntity.java`
166. `src/main/java/com/nubo/receipts/api/models/entity/FileGenerateEntity.java`
167. `src/main/java/com/nubo/receipts/api/models/entity/FixedIncomeSecurityEntity.java`
168. `src/main/java/com/nubo/receipts/api/models/entity/IdentificationTypeEntity.java`
169. `src/main/java/com/nubo/receipts/api/models/entity/InvestorAccountEntity.java`
170. `src/main/java/com/nubo/receipts/api/models/entity/InvestorEntity.java`
171. `src/main/java/com/nubo/receipts/api/models/entity/IsinNumberEntity.java`
172. `src/main/java/com/nubo/receipts/api/models/entity/MarketEntity.java`
173. `src/main/java/com/nubo/receipts/api/models/entity/ParticipantAccountEntity.java`
174. `src/main/java/com/nubo/receipts/api/models/entity/ParticipantEntity.java`
175. `src/main/java/com/nubo/receipts/api/models/entity/SecurityTitleEntity.java`
176. `src/main/java/com/nubo/receipts/api/models/entity/SettlementEntity.java`
177. `src/main/java/com/nubo/receipts/api/models/entity/SettlementKey.java`
178. `src/main/java/com/nubo/receipts/api/models/entity/SideEntity.java`
179. `src/main/java/com/nubo/receipts/api/models/entity/StatusEntity.java`
180. `src/main/java/com/nubo/receipts/api/models/entity/TaxStatusEntity.java`
181. `src/main/java/com/nubo/receipts/api/models/entity/TradeEntity.java`
182. `src/main/java/com/nubo/receipts/api/models/entity/TradeEquityEntity.java`
183. `src/main/java/com/nubo/receipts/api/models/entity/TradingSessionEntity.java`
184. `src/main/java/com/nubo/receipts/api/models/entity/TradingSystemEntity.java`
185. `src/main/java/com/nubo/receipts/api/models/entity/TypeEntity.java`
186. `src/main/java/com/nubo/receipts/api/models/entity/UserNuboEntity.java`
187. `src/main/java/com/nubo/receipts/api/models/enums/CountryEnum.java`
188. `src/main/java/com/nubo/receipts/api/models/enums/CustodianUpdateSideFilterEnum.java`
189. `src/main/java/com/nubo/receipts/api/models/enums/CustodianUpdateStatusFilterEnum.java`
190. `src/main/java/com/nubo/receipts/api/models/enums/FileTypeOptionEnum.java`
191. `src/main/java/com/nubo/receipts/api/models/enums/MarketEnum.java`
192. `src/main/java/com/nubo/receipts/api/models/enums/NotificationMessageEnum.java`
193. `src/main/java/com/nubo/receipts/api/models/enums/NotificationTypeEnum.java`
194. `src/main/java/com/nubo/receipts/api/models/enums/OperationTypeEnum.java`
195. `src/main/java/com/nubo/receipts/api/models/enums/PropertiesEnum.java`
196. `src/main/java/com/nubo/receipts/api/models/enums/SearchOperationEnum.java`
197. `src/main/java/com/nubo/receipts/api/models/enums/SideEnum.java`
198. `src/main/java/com/nubo/receipts/api/models/enums/StatusEnum.java`
199. `src/main/java/com/nubo/receipts/api/models/enums/StatusFilterOptionEnum.java`
200. `src/main/java/com/nubo/receipts/api/models/enums/TimeZoneEnum.java`
201. `src/main/java/com/nubo/receipts/api/models/enums/TypeEnum.java`
202. `src/main/java/com/nubo/receipts/api/models/enums/TypeFilterOptionEnum.java`
203. `src/main/java/com/nubo/receipts/api/models/enums/UserTypeEnum.java`
204. `src/main/java/com/nubo/receipts/api/models/enums/VersionApiEnum.java`
205. `src/main/java/com/nubo/receipts/api/models/enums/VoucherTypeEnum.java`
206. `src/main/java/com/nubo/receipts/api/repository/CountryRepository.java`
207. `src/main/java/com/nubo/receipts/api/repository/CustodianIncidentsReportRepository.java`
208. `src/main/java/com/nubo/receipts/api/repository/CustodianPackageReportRepository.java`
209. `src/main/java/com/nubo/receipts/api/repository/CustodianReportViewRepository.java`
210. `src/main/java/com/nubo/receipts/api/repository/CustodianUpdatesReportRepository.java`
211. `src/main/java/com/nubo/receipts/api/repository/FileGenerateRepository.java`
212. `src/main/java/com/nubo/receipts/api/repository/ParticipantRepository.java`
213. `src/main/java/com/nubo/receipts/api/repository/SettlementRepository.java`
214. `src/main/java/com/nubo/receipts/api/repository/SideRepository.java`
215. `src/main/java/com/nubo/receipts/api/repository/StatusRepository.java`
216. `src/main/java/com/nubo/receipts/api/repository/TradeRepository.java`
217. `src/main/java/com/nubo/receipts/api/repository/TypeRepository.java`
218. `src/main/java/com/nubo/receipts/api/repository/UserNuboRepository.java`
219. `src/main/java/com/nubo/receipts/api/service/BatchCacheService.java`
220. `src/main/java/com/nubo/receipts/api/service/CustodianReportService.java`
221. `src/main/java/com/nubo/receipts/api/service/CustodianUpdatesReportService.java`
222. `src/main/java/com/nubo/receipts/api/service/FileGenerateHistoryService.java`
223. `src/main/java/com/nubo/receipts/api/service/ReceiptSettlementService.java`
224. `src/main/java/com/nubo/receipts/api/service/SettlementFileDataService.java`
225. `src/main/java/com/nubo/receipts/api/service/SettlementReportAutoService.java`
226. `src/main/java/com/nubo/receipts/api/service/SettlementReportService.java`
227. `src/main/java/com/nubo/receipts/api/service/impl/BatchCacheServiceImpl.java`
228. `src/main/java/com/nubo/receipts/api/service/impl/CustodianReportServiceImpl.java`
229. `src/main/java/com/nubo/receipts/api/service/impl/CustodianUpdatesReportServiceImpl.java`
230. `src/main/java/com/nubo/receipts/api/service/impl/FileGenerateHistoryServiceImpl.java`
231. `src/main/java/com/nubo/receipts/api/service/impl/ReceiptSettlementServiceImpl.java`
232. `src/main/java/com/nubo/receipts/api/service/impl/SettlementFileDataServiceImpl.java`
233. `src/main/java/com/nubo/receipts/api/service/impl/SettlementReportAutoServiceImpl.java`
234. `src/main/java/com/nubo/receipts/api/service/impl/SettlementReportServiceImpl.java`
235. `src/main/java/com/nubo/receipts/api/web/controller/CustodianReportRestController.java`
236. `src/main/java/com/nubo/receipts/api/web/controller/CustodianUpdatesReportRestController.java`
237. `src/main/java/com/nubo/receipts/api/web/controller/FileGenerateHistoryController.java`
238. `src/main/java/com/nubo/receipts/api/web/controller/ReceiptOperationRestController.java`
239. `src/main/java/com/nubo/receipts/api/web/controller/SettlementFileDataRestController.java`
240. `src/main/java/com/nubo/receipts/api/web/controller/SettlementReportAutoRestController.java`
241. `src/main/java/com/nubo/receipts/api/web/controller/SettlementReportRestController.java`

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
    <groupId>com.nubo.receipts.api</groupId>
    <artifactId>receipts-api</artifactId>
    <version>0.122.0-beta.13</version>
    <name>${project.artifactId}</name>
    <description> Operations Receipts Api</description>

    <properties>
        <java.version>21</java.version>
        <spring.port>8080</spring.port>
        <test.skip>false</test.skip>
        <datasource.url.application.name>ApplicationName=${project.artifactId}</datasource.url.application.name>
        <hikari.pool.name>${project.artifactId}-pool</hikari.pool.name>
        <dynamic.hikari.pool.name>${project.artifactId}-dynamic-pool</dynamic.hikari.pool.name>

        <!--  Security fixes for CVEs  -->
        <tomcat.version>11.0.25</tomcat.version>
        <!-- CVE-2026-91777: jackson-databind quadratic forward-reference completion, fixed in 3.1.7 (jackson 3) / 2.21.7 (jackson 2, pulled in transitively) -->
        <jackson-bom.version>3.1.7</jackson-bom.version>
        <jackson-2-bom.version>2.21.7</jackson-2-bom.version>
        <!-- CVE-2026-106451: lz4-java Native.load() usa File.createTempFile de forma insegura, corregido en 1.11.4 -->
        <lz4-java.version>1.11.4</lz4-java.version>
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
            <groupId>at.yawk.lz4</groupId>
            <artifactId>lz4-java</artifactId>
            <version>${lz4-java.version}</version>
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
                    <groupId>commons-io</groupId>
                    <artifactId>commons-io</artifactId>
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
			<groupId>org.apache.commons</groupId>
			<artifactId>commons-lang3</artifactId>
			<version>3.18.0</version>
		</dependency>
        <!-- Jackson 3.x -->
        <dependency>
            <groupId>tools.jackson.core</groupId>
            <artifactId>jackson-databind</artifactId>
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
                                <exclude>**/ReceiptsOperationsApiApplication.class</exclude>
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
  config:
    # Catálogo de causas de errores del cliente: ConfigMap api-client-cause-catalog montado en /app/config.
    # optional: sin el archivo el servicio arranca y responde con apiClient ARA-000.
    import: "optional:file:/app/config/cause-catalog.yml"
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
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
    com.nubo.receipts.api: DEBUG
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
      topic-name-report-liquida: ${KAFKA_NUBO_TOPIC_REPORT_LIQUIDA_FILE}
      topic-name-report-papeleta: ${KAFKA_NUBO_TOPIC_REPORT_PAPELETA_FILE}
      topic-name-operations-api-settlement-file: ${KAFKA_NUBO_TOPIC_NAME_OPERATIONS_API_SETTLEMENT_FILE}
      topic-name-custodian-report: ${KAFKA_NUBO_TOPIC_NAME_CUSTODIAN_REPORT}
      topic-name-custodian-updates-report: ${KAFKA_NUBO_TOPIC_NAME_CUSTODIAN_UPDATE_REPORT}
    notification:
      event-type: ${KAFKA_NUBO_NOTIFICATION_EVENT_TYPE:NOTIFICACION_LISTA_PARA_USUARIO}
      module: ${KAFKA_NUBO_NOTIFICATION_MODULE:DEFAULT}
      kafka-notification-request-topic: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}
nubo:
  receipts:
    file.settlement.country:
      colombia-assigned: ${NUBO_RECEIPTS_SETTLEMENT_COL_ASSIGNED:liqbvc}
      colombia-registered: ${NUBO_RECEIPTS_SETTLEMENT_COL_REGISTERED:liqrebvc}
      peru-assigned: ${NUBO_RECEIPTS_SETTLEMENT_PER_ASSIGNED:liqnuam}
      peru-registered: ${NUBO_RECEIPTS_SETTLEMENT_PER_REGISTERED:liqrenuam}
      chile-assigned: ${NUBO_RECEIPTS_SETTLEMENT_CL_ASSIGNED:liqnuam}
      chile-registered: ${NUBO_RECEIPTS_SETTLEMENT_CL_REGISTERED:liqrenuam}
client:
  nubo:
    url-operation-rules: ${NUBO_URL_OPERATION_RULES}
    url-schedule-validate: ${NUBO_URL_SCHEDULE_VALIDATION}
schedule:
  screen-action:
    liquida-individual: ${SCHEDULE_SCREEN_ACTION_LIQUIDA_INDIVIDUAL:137}
    liquida-massive: ${SCHEDULE_SCREEN_ACTION_LIQUIDA_MASSIVE:137}

```

## src/main/resources/application-local.yml

```yaml
server:
  port: 8086
spring:
  config:
    # Copia del catálogo en el repositorio (src/main/resources/cause-catalog.yml), solo para ejecución local.
    import: "classpath:cause-catalog.yml"
  datasource:
    write:
      url: ${DB_WRITE_URL}
      username: ${DB_WRITE_USER}
      password: ${DB_WRITE_PASSWORD}
    read:
      url: ${DB_READ_URL}
      username: ${DB_READ_USER}
      password: ${DB_READ_PASSWORD}
    username: ${DB_USERNAME}
    password: ${DB_PASSWORD}
    url: ${DB_URL}?@datasource.url.application.name@
    hikari:
      keepalive-time: 300000
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
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
    com.nubo.receipts.api: DEBUG
kafka:
  nubo:
    retries: ${KAFKA_NUBO_RETRIES:5}
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
    auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
    security:
      protocol: PLAINTEXT
    sasl:
      mechanism: ""
      jaas:
        config: "org.apache.kafka.common.security.scram.ScramLoginModule required;"
    producer:
      topic-name-report-liquida: ${KAFKA_NUBO_TOPIC_REPORT_LIQUIDA_FILE:liquida-report}
      topic-name-report-papeleta: ${KAFKA_NUBO_TOPIC_REPORT_PAPELETA_FILE:papeleta-report}
      topic-name-operations-api-settlement-file: ${KAFKA_NUBO_TOPIC_NAME_OPERATIONS_API_SETTLEMENT_FILE}
      topic-name-custodian-report: ${KAFKA_NUBO_TOPIC_NAME_CUSTODIAN_REPORT:custodian-report-local}
      topic-name-custodian-updates-report: ${KAFKA_NUBO_TOPIC_NAME_CUSTODIAN_UPDATE_REPORT:custodian-updates-report-local}
    notification:
      event-type: ${KAFKA_NUBO_NOTIFICATION_EVENT_TYPE:NOTIFICACION_LISTA_PARA_USUARIO}
      module: ${KAFKA_NUBO_NOTIFICATION_MODULE:DEFAULT}
      kafka-notification-request-topic: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}
nubo:
  receipts:
    file.settlement.country:
      colombia-assigned: ${NUBO_RECEIPTS_SETTLEMENT_COL_ASSIGNED:liqbvc}
      colombia-registered: ${NUBO_RECEIPTS_SETTLEMENT_COL_REGISTERED:liqrebvc}
      peru-assigned: ${NUBO_RECEIPTS_SETTLEMENT_PER_ASSIGNED:liqnuam}
      peru-registered: ${NUBO_RECEIPTS_SETTLEMENT_PER_REGISTERED:liqrenuam}
      chile-assigned: ${NUBO_RECEIPTS_SETTLEMENT_CL_ASSIGNED:liqnuam}
      chile-registered: ${NUBO_RECEIPTS_SETTLEMENT_CL_REGISTERED:liqrenuam}
client:
  nubo:
    url-operation-rules: ${NUBO_URL_OPERATION_RULES}
    url-schedule-validate: ${NUBO_URL_SCHEDULE_VALIDATION}
schedule:
  screen-action:
    liquida-individual: ${SCHEDULE_SCREEN_ACTION_LIQUIDA_INDIVIDUAL:137}
    liquida-massive: ${SCHEDULE_SCREEN_ACTION_LIQUIDA_MASSIVE:137}

```

## src/main/resources/application-prod.yml

```yaml
server:
  port: "@spring.port@"
spring:
  config:
    # Catálogo de causas de errores del cliente: ConfigMap api-client-cause-catalog montado en /app/config.
    # optional: sin el archivo el servicio arranca y responde con apiClient ARA-000.
    import: "optional:file:/app/config/cause-catalog.yml"
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
    producer:
      topic-name-report-liquida: ${KAFKA_NUBO_TOPIC_REPORT_LIQUIDA_FILE}
      topic-name-report-papeleta: ${KAFKA_NUBO_TOPIC_REPORT_PAPELETA_FILE}
      topic-name-operations-api-settlement-file: ${KAFKA_NUBO_TOPIC_NAME_OPERATIONS_API_SETTLEMENT_FILE}
      topic-name-custodian-report: ${KAFKA_NUBO_TOPIC_NAME_CUSTODIAN_REPORT}
      topic-name-custodian-updates-report: ${KAFKA_NUBO_TOPIC_NAME_CUSTODIAN_UPDATE_REPORT}
    notification:
      event-type: ${KAFKA_NUBO_NOTIFICATION_EVENT_TYPE:NOTIFICACION_LISTA_PARA_USUARIO}
      module: ${KAFKA_NUBO_NOTIFICATION_MODULE:DEFAULT}
      kafka-notification-request-topic: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}
nubo:
  receipts:
    file.settlement.country:
      colombia-assigned: ${NUBO_RECEIPTS_SETTLEMENT_COL_ASSIGNED:liqbvc}
      colombia-registered: ${NUBO_RECEIPTS_SETTLEMENT_COL_REGISTERED:liqrebvc}
      peru-assigned: ${NUBO_RECEIPTS_SETTLEMENT_PER_ASSIGNED:liqnuam}
      peru-registered: ${NUBO_RECEIPTS_SETTLEMENT_PER_REGISTERED:liqrenuam}
      chile-assigned: ${NUBO_RECEIPTS_SETTLEMENT_CL_ASSIGNED:liqnuam}
      chile-registered: ${NUBO_RECEIPTS_SETTLEMENT_CL_REGISTERED:liqrenuam}
client:
  nubo:
    url-operation-rules: ${NUBO_URL_OPERATION_RULES}
    url-schedule-validate: ${NUBO_URL_SCHEDULE_VALIDATION}
schedule:
  screen-action:
    liquida-individual: ${SCHEDULE_SCREEN_ACTION_LIQUIDA_INDIVIDUAL:137}
    liquida-massive: ${SCHEDULE_SCREEN_ACTION_LIQUIDA_MASSIVE:137}

```

## src/main/resources/application-qa.yml

```yaml
server:
  port: "@spring.port@"
spring:
  config:
    # Catálogo de causas de errores del cliente: ConfigMap api-client-cause-catalog montado en /app/config.
    # optional: sin el archivo el servicio arranca y responde con apiClient ARA-000.
    import: "optional:file:/app/config/cause-catalog.yml"
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
    producer:
      topic-name-report-liquida: ${KAFKA_NUBO_TOPIC_REPORT_LIQUIDA_FILE}
      topic-name-report-papeleta: ${KAFKA_NUBO_TOPIC_REPORT_PAPELETA_FILE}
      topic-name-operations-api-settlement-file: ${KAFKA_NUBO_TOPIC_NAME_OPERATIONS_API_SETTLEMENT_FILE}
      topic-name-custodian-report: ${KAFKA_NUBO_TOPIC_NAME_CUSTODIAN_REPORT}
      topic-name-custodian-updates-report: ${KAFKA_NUBO_TOPIC_NAME_CUSTODIAN_UPDATE_REPORT}
    notification:
      event-type: ${KAFKA_NUBO_NOTIFICATION_EVENT_TYPE:NOTIFICACION_LISTA_PARA_USUARIO}
      module: ${KAFKA_NUBO_NOTIFICATION_MODULE:DEFAULT}
      kafka-notification-request-topic: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}
nubo:
  receipts:
    file.settlement.country:
      colombia-assigned: ${NUBO_RECEIPTS_SETTLEMENT_COL_ASSIGNED:liqbvc}
      colombia-registered: ${NUBO_RECEIPTS_SETTLEMENT_COL_REGISTERED:liqrebvc}
      peru-assigned: ${NUBO_RECEIPTS_SETTLEMENT_PER_ASSIGNED:liqnuam}
      peru-registered: ${NUBO_RECEIPTS_SETTLEMENT_PER_REGISTERED:liqrenuam}
      chile-assigned: ${NUBO_RECEIPTS_SETTLEMENT_CL_ASSIGNED:liqnuam}
      chile-registered: ${NUBO_RECEIPTS_SETTLEMENT_CL_REGISTERED:liqrenuam}
client:
  nubo:
    url-operation-rules: ${NUBO_URL_OPERATION_RULES}
    url-schedule-validate: ${NUBO_URL_SCHEDULE_VALIDATION}
schedule:
  screen-action:
    liquida-individual: ${SCHEDULE_SCREEN_ACTION_LIQUIDA_INDIVIDUAL:137}
    liquida-massive: ${SCHEDULE_SCREEN_ACTION_LIQUIDA_MASSIVE:137}

```

## src/main/resources/application-uat.yml

```yaml
server:
  port: "@spring.port@"
spring:
  config:
    # Catálogo de causas de errores del cliente: ConfigMap api-client-cause-catalog montado en /app/config.
    # optional: sin el archivo el servicio arranca y responde con apiClient ARA-000.
    import: "optional:file:/app/config/cause-catalog.yml"
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
    producer:
      topic-name-report-liquida: ${KAFKA_NUBO_TOPIC_REPORT_LIQUIDA_FILE}
      topic-name-report-papeleta: ${KAFKA_NUBO_TOPIC_REPORT_PAPELETA_FILE}
      topic-name-operations-api-settlement-file: ${KAFKA_NUBO_TOPIC_NAME_OPERATIONS_API_SETTLEMENT_FILE}
      topic-name-custodian-report: ${KAFKA_NUBO_TOPIC_NAME_CUSTODIAN_REPORT}
      topic-name-custodian-updates-report: ${KAFKA_NUBO_TOPIC_NAME_CUSTODIAN_UPDATE_REPORT}
    notification:
      event-type: ${KAFKA_NUBO_NOTIFICATION_EVENT_TYPE:NOTIFICACION_LISTA_PARA_USUARIO}
      module: ${KAFKA_NUBO_NOTIFICATION_MODULE:DEFAULT}
      kafka-notification-request-topic: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}
nubo:
  receipts:
    file.settlement.country:
      colombia-assigned: ${NUBO_RECEIPTS_SETTLEMENT_COL_ASSIGNED:liqbvc}
      colombia-registered: ${NUBO_RECEIPTS_SETTLEMENT_COL_REGISTERED:liqrebvc}
      peru-assigned: ${NUBO_RECEIPTS_SETTLEMENT_PER_ASSIGNED:liqnuam}
      peru-registered: ${NUBO_RECEIPTS_SETTLEMENT_PER_REGISTERED:liqrenuam}
      chile-assigned: ${NUBO_RECEIPTS_SETTLEMENT_CL_ASSIGNED:liqnuam}
      chile-registered: ${NUBO_RECEIPTS_SETTLEMENT_CL_REGISTERED:liqrenuam}
client:
  nubo:
    url-operation-rules: ${NUBO_URL_OPERATION_RULES}
    url-schedule-validate: ${NUBO_URL_SCHEDULE_VALIDATION}
schedule:
  screen-action:
    liquida-individual: ${SCHEDULE_SCREEN_ACTION_LIQUIDA_INDIVIDUAL:137}
    liquida-massive: ${SCHEDULE_SCREEN_ACTION_LIQUIDA_MASSIVE:137}

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
,------. ,------. ,-----.,------.,--.,------.,--------.,---.   ,---.  ,------. ,--.
|  .--. '|  .---''  .--./|  .---'|  ||  .--. '--.  .--'   .-' /  O  \ |  .--. '|  |
|  '--'.'|  `--, |  |    |  `--, |  ||  '--' |  |  |  `.  `-.|  .-.  ||  '--' ||  |
|  |\  \ |  `---.'  '--'\|  `---.|  ||  | --'   |  |  .-'    |  | |  ||  | --' |  |
`--' '--'`------' `-----'`------'`--'`--'       `--'  `-----'`--' `--'`--'     `--'
${application.title} ${application.version}
Powered by Spring Boot ${spring-boot.version}

```

## src/main/resources/cause-catalog.yml

```yaml
# Copia en el repositorio del cause-catalog.yml que se despliega como ConfigMap api-client-cause-catalog
# (Flux: overlays/<overlay>/apps/api-client/cause-catalog.yml). Se usa solo con el perfil local
# (spring.config.import: classpath:cause-catalog.yml) y en las pruebas; en los demás perfiles el
# servicio lee /app/config/cause-catalog.yml, montado desde el ConfigMap.
# Origen: catálogo del orquestador (ARA-001 a ARA-071) más ARA-072 a ARA-078 de comprobantes-back
# (docs/plans/2026-10-13-mapa-errores-comprobantes-settlement-file-data.md del repo del orquestador, 8.4 y 8.10).
cause-catalog:
  entries:
    # --- orquestador (filas 1-5) ---
    DEFINITIVE_ASSIGNMENT_ERROR:
      code: ARA-001
      message: "No fue posible completar la asignación definitiva: existen validaciones de negocio pendientes para la punta."
      type: BUSINESS
    VALIDATION_ERROR:
      code: ARA-002
      message: "El mensaje recibido no cumple con el formato o las validaciones esperadas."
      type: TECHNICAL
    CLIENT_OPERATIONS_CMD_ERROR:
      code: ARA-003
      message: "Ocurrió un error al procesar la solicitud. (003)"
      detailedMessage: "Ocurrió un error inesperado al comunicarse con el servicio de comandos de operaciones."
      type: TECHNICAL
    ERROR_KAFKA_CONSUMER_NUBO:
      code: ARA-004
      message: "Ocurrió un error al procesar la solicitud. (004)"
      detailedMessage: "El consumidor de Kafka del orquestador no pudo procesar el mensaje recibido."
      type: TECHNICAL
    ERROR_DESERIALIZER_JSON:
      code: ARA-005
      message: "Ocurrió un error al procesar la solicitud. (005)"
      detailedMessage: "El mensaje de Kafka no pudo ser deserializado a un objeto JSON válido."
      type: TECHNICAL

    # --- cmd-back (filas 6-53) ---
    UNAUTHORIZED:
      code: ARA-006
      message: "Ocurrió un error al procesar la solicitud. (006)"
      detailedMessage: "La solicitud no está autorizada."
      type: TECHNICAL
    UNEXPECTED:
      code: ARA-007
      message: "Ocurrió un error inesperado al procesar la solicitud. (007)"
      type: TECHNICAL
    METHOD_ARGUMENT_TYPE:
      code: ARA-008
      message: "Ocurrió un error al procesar la solicitud. (008)"
      detailedMessage: "La ruta de la solicitud no es válida."
      type: TECHNICAL
    METHOD_NOT_ALLOWED:
      code: ARA-009
      message: "Ocurrió un error al procesar la solicitud. (009)"
      detailedMessage: "El método HTTP utilizado no está permitido para este recurso."
      type: TECHNICAL
    NOT_FOUND:
      code: ARA-010
      message: "Ocurrió un error al procesar la solicitud. (010)"
      detailedMessage: "El recurso solicitado no existe."
      type: TECHNICAL
    UNSUPPORTED_MEDIA_TYPE:
      code: ARA-011
      message: "Ocurrió un error al procesar la solicitud. (011)"
      detailedMessage: "El tipo de contenido (Content-Type) de la solicitud no es compatible."
      type: TECHNICAL
    MESSAGE_NOT_READABLE:
      code: ARA-012
      message: "Ocurrió un error al procesar la solicitud. (012)"
      detailedMessage: "No fue posible leer el cuerpo de la solicitud."
      type: TECHNICAL
    BAD_REQUEST:
      code: ARA-013
      message: "Ocurrió un error al procesar la solicitud. (013)"
      detailedMessage: "El cuerpo de la solicitud no es válido."
      type: TECHNICAL
    HEADER_CLIENT_IP_REQUIRED:
      code: ARA-014
      message: "Ocurrió un error al procesar la solicitud. (014)"
      detailedMessage: "Falta el encabezado obligatorio client_ip."
      type: TECHNICAL
    HEADER_CLIENT_IP_INVALID:
      code: ARA-015
      message: "Ocurrió un error al procesar la solicitud. (015)"
      detailedMessage: "El encabezado client_ip no es válido."
      type: TECHNICAL
    HEADER_CLIENT_USER_REQUIRED:
      code: ARA-016
      message: "Ocurrió un error al procesar la solicitud. (016)"
      detailedMessage: "Falta el encabezado obligatorio client_user."
      type: TECHNICAL
    HEADER_CLIENT_DATETIME_REQUIRED:
      code: ARA-017
      message: "Ocurrió un error al procesar la solicitud. (017)"
      detailedMessage: "Falta el encabezado obligatorio client_datetime."
      type: TECHNICAL
    HEADER_CLIENT_DATETIME_INVALID:
      code: ARA-018
      message: "Ocurrió un error al procesar la solicitud. (018)"
      detailedMessage: "El encabezado client_datetime no es válido."
      type: TECHNICAL
    VERSION_API_NOT_FOUND:
      code: ARA-019
      message: "Ocurrió un error al procesar la solicitud. (019)"
      detailedMessage: "La versión de la API solicitada no existe."
      type: TECHNICAL
    TRADE_NOT_FOUND:
      code: ARA-020
      message: "No se encontró la operación informada."
      type: BUSINESS
    PARTICIPANT_NOT_FOUND:
      code: ARA-021
      message: "No se encontró el participante informado."
      type: BUSINESS
    PARTICIPANT_NOT_IN_SIDE:
      code: ARA-022
      message: "El participante informado no corresponde a la punta de la operación."
      type: BUSINESS
    CUSTODIAN_NOT_FOUND:
      code: ARA-023
      message: "No se encontró el custodio informado."
      type: BUSINESS
    FIC_ADMIN_NOT_FOUND:
      code: ARA-024
      message: "No se encontró el administrador de fondos (FIC) informado."
      type: BUSINESS
    INVESTOR_ACCOUNT_NOT_FOUND:
      code: ARA-025
      message: "No se encontró la cuenta de inversionista informada."
      type: BUSINESS
    PARTICIPANT_ACCOUNT_NOT_FOUND:
      code: ARA-026
      message: "No se encontró la cuenta del participante informada."
      type: BUSINESS
    TYPE_NOT_FOUND:
      code: ARA-027
      message: "Ocurrió un error al procesar la solicitud. (027)"
      detailedMessage: "No se encontró el tipo informado."
      type: BUSINESS
    ACCOUNT_NOT_FOUND:
      code: ARA-028
      message: "No se encontró la cuenta informada."
      type: BUSINESS
    SIDE_NOT_FOUND:
      code: ARA-029
      message: "No se encontró la punta informada."
      type: BUSINESS
    TAXES_NOT_FOUND:
      code: ARA-030
      message: "Ocurrió un error al procesar la solicitud. (030)"
      detailedMessage: "No se encontró la configuración de impuestos aplicable."
      type: BUSINESS
    TYPE_MAPPING_NOT_FOUND:
      code: ARA-031
      message: "Ocurrió un error al procesar la solicitud. (031)"
      detailedMessage: "No se encontró el mapeo de tipos correspondiente."
      type: BUSINESS
    TRADE_DEPOSITORY_REQUIRED:
      code: ARA-032
      message: "Se requiere el depósito de la operación."
      type: BUSINESS
    TYPE_COUNTED_OR_REPO_OPERATION_REQUIRED:
      code: ARA-033
      message: "El tipo de operación debe ser contado o repo."
      type: BUSINESS
    ACCOUNT_DEPOSITORY_NOT_CORRESPOND_TO_TRADE:
      code: ARA-034
      message: "El depósito de la cuenta no corresponde al de la operación."
      type: BUSINESS
    SOURCE_QUOTE_TYPE_REQUIRED:
      code: ARA-035
      message: "Ocurrió un error al procesar la solicitud. (035)"
      detailedMessage: "Se requiere el tipo de cotización de origen."
      type: BUSINESS
    FRACTION_TOTAL_QUANTITY_NOT_CORRESPOND_QUANTITY_TRADE:
      code: ARA-036
      message: "La suma de las cantidades de las fracciones no corresponde a la cantidad total de la operación."
      type: BUSINESS
    MAXIMUM_LIMIT_FRACTIONS_EXCEED:
      code: ARA-037
      message: "Se superó el límite máximo de fracciones permitido."
      type: BUSINESS
    INVALID_BUSINESS_RULE_VALUE:
      code: ARA-038
      message: "El valor no es válido para la regla de negocio aplicada."
      type: TECHNICAL
    ACCOUNT_NOT_ACTIVE:
      code: ARA-039
      message: "La cuenta informada no está activa."
      type: BUSINESS
    PARTICIPANT_ACCOUNT_OR_INVESTOR_ACCOUNT_NOT_FOUND:
      code: ARA-040
      message: "No se encontró una cuenta de participante ni de inversionista para el origen especificado."
      type: BUSINESS
    INVESTOR_ACCOUNT_DUPLICATED:
      code: ARA-041
      message: "La cuenta de inversionista no puede estar duplicada."
      type: BUSINESS
    PARTICIPANT_ACCOUNT_DUPLICATED:
      code: ARA-042
      message: "La cuenta del participante no puede estar duplicada."
      type: BUSINESS
    FRACTION_CUSTODIAN_STATUS_DONT_BE_EDIT:
      code: ARA-043
      message: "La fracción está en proceso de custodia y no puede editarse."
      type: BUSINESS
    CUD_ACCOUNT_CANT_BE_EMPTY_TO_COLOMBIA_OPERATION:
      code: ARA-044
      message: "La cuenta CUD no puede estar vacía para una operación de Colombia."
      type: BUSINESS
    OWN_POSITION_ONLY_ONE_FRACTION_ALLOWED:
      code: ARA-045
      message: "La posición propia solo permite una fracción."
      type: BUSINESS
    OWN_POSITION_COMMISSION_MUST_BE_ZERO:
      code: ARA-046
      message: "La comisión debe ser cero para la posición propia."
      type: BUSINESS
    ACCOUNT_NOT_MATCH_OF_OWN_POSITION:
      code: ARA-047
      message: "La cuenta no corresponde a la posición propia."
      type: BUSINESS
    CUD_ACCOUNT_CANT_BE_EMPTY_OR_DIFFERENT_TO_ASSIGNMENT_MARK:
      code: ARA-048
      message: "La cuenta CUD no puede estar vacía ni ser distinta de la marca de asignación."
      type: BUSINESS
    CUD_ACCOUNT_NOT_FOUND:
      code: ARA-049
      message: "No se encontró la cuenta CUD informada."
      type: BUSINESS
    CUSTODIAN_AND_FIC_MUST_BE_EMPTY_TO_ASSIGNMENT_MARK:
      code: ARA-050
      message: "El custodio y el administrador de fondos (FIC) deben estar vacíos para la marca de asignación."
      type: BUSINESS
    CUSTODIAN_AND_FIC_MUST_BE_EMPTY_TO_MASTER_ACCOUNT:
      code: ARA-051
      message: "El custodio y el administrador de fondos (FIC) deben estar vacíos para la cuenta maestra."
      type: BUSINESS
    CLIENT_OPERATION_FRACTIONATION_ERROR:
      code: ARA-052
      message: "Ocurrió un error al procesar la solicitud. (052)"
      detailedMessage: "Ocurrió un error inesperado al comunicarse con el servicio de fraccionamiento de operaciones."
      type: TECHNICAL
    CLIENT_OPERATION_RULES_ERROR:
      code: ARA-053
      message: "Ocurrió un error al procesar la solicitud. (053)"
      detailedMessage: "Ocurrió un error inesperado al comunicarse con el servicio de reglas de negocio."
      type: TECHNICAL

    CLIENT_OPERATION_RULES_ERROR-RULE_REASSIGNMENT_BY_SIDE-B:
      code: ARA-054
      message: "La fecha de cumplimiento no permite la reasignación."
      type: BUSINESS
    CLIENT_OPERATION_RULES_ERROR-RULE_REASSIGNMENT_BY_SIDE-C:
      code: ARA-055
      message: "El estado actual de la punta no permite procesar la solicitud de reasignación."
      type: BUSINESS
    CLIENT_OPERATION_RULES_ERROR-RULE_ASSIGNMENT_OWN_POSITION_BY_SIDE-C:
      code: ARA-056
      message: "El estado actual de la punta no permite procesar la solicitud de asignación."
      type: BUSINESS

    # --- fracciones-contado-back (filas 69-78 de §6; alcanzables vía el forward verbatim de
    # BatchAssignmentItemOutDto.errorCode en cmd-back, ver Fase 3). TRADE_NOT_FOUND, SIDE_NOT_FOUND,
    # TYPE_NOT_FOUND, TAXES_NOT_FOUND, INVESTOR_ACCOUNT_NOT_FOUND y PARTICIPANT_ACCOUNT_NOT_FOUND
    # (filas 70/71/73/74/75/77) reusan el mismo ErrorCode.name() que cmd-back y ya están catalogados
    # arriba — solo se agregan acá las 4 entradas que cmd-back no tiene (fila 69, 72, 76, 78). Fila 79
    # (CLIENT_OPERATION_RULES_ERROR) también reusa la entrada de cmd-back de arriba. Filas 54-62
    # (reglas-back, HTTP directo) y 80 (calculos-back) quedan fuera deliberadamente: no son
    # alcanzables vía el pipeline real del orquestador (ver §6/§9.3) — catalogarlas sería código
    # muerto en este archivo.
    STATUS_NOT_FOUND:
      code: ARA-057
      message: "Ocurrió un error al procesar la solicitud. (057)"
      detailedMessage: "No se encontró el estado informado."
      type: BUSINESS
    SETTLEMENT_NOT_FOUND:
      code: ARA-058
      message: "Ocurrió un error al procesar la solicitud. (058)"
      detailedMessage: "No se encontró la liquidación informada."
      type: BUSINESS
    MILA_DEPOSITORY_NOT_FOUND:
      code: ARA-059
      message: "Ocurrió un error al procesar la solicitud. (059)"
      detailedMessage: "No se encontró el depósito MILA informado."
      type: BUSINESS
    CLIENT_OPERATION_CALCULATION_ERROR:
      code: ARA-060
      message: "Ocurrió un error al procesar la solicitud. (060)"
      detailedMessage: "Ocurrió un error inesperado al comunicarse con el servicio de cálculo de operaciones."
      type: TECHNICAL

    # --- asignación definitiva (filas 65-68 de §6; DEFINITIVE_ASSIGNMENT_ERROR, Fase 5). Mismo mecanismo
    # que las 2 claves compuestas de reasignación de arriba: businessRuleCode viaja intacto desde
    # reglas-back (validateUpdateStatusTradeV1, sin cambios -- ya era genérico) hasta cmd-back
    # (AssignmentClosureServiceImpl, directo a reglas-back, no pasa por fracciones-contado-back) y
    # orquestador concatena. NO reusa ARA-106 pese a que §8 lo reservaba conceptualmente para 238-A:
    # ese código ya está tomado por la entrada de reasignación 233-C de arriba (ver nota de esa
    # sección) -- se le asigna numeración secuencial propia en su lugar.
    DEFINITIVE_ASSIGNMENT_ERROR-RULE_FINAL_ASSIGNMENT_BY_SIDE-B:
      code: ARA-061
      message: "El estado de la punta no permite la asignación definitiva."
      type: BUSINESS
    DEFINITIVE_ASSIGNMENT_ERROR-RULE_FINAL_ASSIGNMENT_BY_SIDE-C:
      code: ARA-062
      message: "La fecha de cumplimiento no permite el envío a CCP."
      type: BUSINESS
    DEFINITIVE_ASSIGNMENT_ERROR-RULE_FINAL_ASSIGNMENT_BY_FRACTION-A:
      code: ARA-063
      message: "La punta no ha sido asignada."
      type: BUSINESS
    DEFINITIVE_ASSIGNMENT_ERROR-RULE_FINAL_ASSIGNMENT_BY_FRACTION_CUSTODIAN-A:
      code: ARA-064
      message: "Existen procesos de custodia pendientes para la punta."
      type: BUSINESS

    CLIENT_OPERATION_RULES_ERROR-RULE_ASSIGNMENT_OWN_POSITION_BY_SIDE-B:
      code: ARA-065
      message: "La fecha de cumplimiento no permite realizar la asignación."
      type: BUSINESS
    CLIENT_OPERATION_RULES_ERROR-RULE_ASSIGNMENT_OWN_POSITION_BY_SIDE-D:
      code: ARA-066
      message: "La punta ya ha sido asignada."
      type: BUSINESS
    CLIENT_OPERATION_RULES_ERROR-RULE_ASSIGNMENT_OWN_POSITION_BY_SIDE-E:
      code: ARA-067
      message: "La punta no es de tipo posición propia."
      type: BUSINESS

    NOT_BUSINESS_DAY:
      code: ARA-068
      message: "La operación no puede procesarse: hoy no es un día hábil."
      type: BUSINESS
    OUTSIDE_BUSINESS_HOURS:
      code: ARA-069
      message: "La operación no puede procesarse fuera del horario habilitado."
      type: BUSINESS
    SCHEDULE_VALIDATION_API_ERROR:
      code: ARA-070
      message: "Ocurrió un error al procesar la solicitud. (070)"
      detailedMessage: "Ocurrió un error inesperado al comunicarse con el servicio de validación de horarios."
      type: TECHNICAL
    COUNTRY_NOT_FOUND:
      code: ARA-071
      message: "No se encontró el país del participante."
      type: BUSINESS

    # --- comprobantes-back: settlement-file-data (plan 8.4) ---
    NOT_DATA_FOUND:
      code: ARA-072
      message: "No se encontraron datos para los criterios informados."
      type: BUSINESS
    DOWNLOAD_PERIOD_EXCEEDED:
      code: ARA-073
      message: "La fecha de la operación excede el período permitido de descarga (2 meses)."
      type: BUSINESS
    ERROR_DATA_RANGE_SETTLEMENT_RV_REPORT:
      code: ARA-074
      message: "El rango de fechas no es válido: debe estar dentro de los últimos 2 meses, no incluir fechas futuras y tener la fecha inicial anterior o igual a la final."
      type: BUSINESS
    # --- causas de las dependencias de comprobantes-back (plan 8.10) ---
    ACTION_BUSINESS_RULE_NOT_FOUND:
      code: ARA-075
      message: "Ocurrió un error al procesar la solicitud. (075)"
      detailedMessage: "La regla de negocio de la acción no está configurada en el servicio de reglas de negocio."
      type: TECHNICAL
    SCHEDULE_NOT_FOUND:
      code: ARA-076
      message: "No existe un horario configurado para realizar esta operación."
      type: BUSINESS
    INVALID_TIMEZONE:
      code: ARA-077
      message: "Ocurrió un error al procesar la solicitud. (077)"
      detailedMessage: "La zona horaria configurada para el país no es válida."
      type: TECHNICAL
    CLIENT_BUSINESS_DAY_CALCULATION_ERROR:
      code: ARA-078
      message: "Ocurrió un error al procesar la solicitud. (078)"
      detailedMessage: "Ocurrió un error inesperado al comunicarse con el servicio de cálculo de día hábil."
      type: TECHNICAL
    UNCLASSIFIED:
      code: ARA-000
      message: "Ocurrió un error no clasificado al procesar la solicitud."
      type: TECHNICAL

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

## src/main/java/com/nubo/receipts/api/ReceiptsOperationsApiApplication.java

```java
package com.nubo.receipts.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ReceiptsOperationsApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ReceiptsOperationsApiApplication.class, args);
	}

}

```

## src/main/java/com/nubo/receipts/api/application/annotations/CommaDecimal.java

```java
package com.nubo.receipts.api.application.annotations;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import com.fasterxml.jackson.annotation.JacksonAnnotationsInside;

import tools.jackson.databind.annotation.JsonSerialize;

@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
@JacksonAnnotationsInside
@JsonSerialize(using = CommaDecimalSerializer.class)
public @interface CommaDecimal {

    boolean trailingMinus() default false;
}

```

## src/main/java/com/nubo/receipts/api/application/annotations/CommaDecimalSerializer.java

```java
package com.nubo.receipts.api.application.annotations;

import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;
import java.util.Locale;

import tools.jackson.core.JsonGenerator;
import tools.jackson.databind.BeanProperty;
import tools.jackson.databind.SerializationContext;
import tools.jackson.databind.ValueSerializer;

public class CommaDecimalSerializer extends ValueSerializer<Object> {

    private boolean trailingMinus;

    public CommaDecimalSerializer() {
        this.trailingMinus = false;
    }

    public CommaDecimalSerializer(boolean trailingMinus) {
        this.trailingMinus = trailingMinus;
    }

    @Override
    public ValueSerializer<?> createContextual(SerializationContext prov, BeanProperty property) {
        if (property != null) {
            CommaDecimal annotation = property.getAnnotation(CommaDecimal.class);
            if (annotation != null) {
                return new CommaDecimalSerializer(annotation.trailingMinus());
            }
        }
        return this;
    }

    @Override
    public void serialize(Object value, JsonGenerator gen, SerializationContext serializers) {
        BigDecimal number = (value instanceof BigDecimal) ? (BigDecimal) value : null;
        gen.writeString(format(number));
    }

    private String format(BigDecimal number) {
        if (number == null) {
            return "0";
        }
        // Dots for thousands, commas for decimals (German locale)
        DecimalFormatSymbols symbols = new DecimalFormatSymbols(Locale.GERMANY);
        String pattern = trailingMinus ? "#,##0.##;#,##0.##-" : "#,##0.##";
        return new DecimalFormat(pattern, symbols).format(number);
    }
}

```

## src/main/java/com/nubo/receipts/api/application/annotations/FixedDecimal.java

```java
package com.nubo.receipts.api.application.annotations;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import com.fasterxml.jackson.annotation.JacksonAnnotationsInside;

import tools.jackson.databind.annotation.JsonSerialize;

@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
@JacksonAnnotationsInside
@JsonSerialize(using = FixedDecimalSerializer.class)
public @interface FixedDecimal {

    int integerDigits();

    int decimalDigits() default 2;

    boolean showSign() default false;
}

```

## src/main/java/com/nubo/receipts/api/application/annotations/FixedDecimalSerializer.java

```java
package com.nubo.receipts.api.application.annotations;

import java.math.BigDecimal;
import java.math.RoundingMode;

import tools.jackson.core.JsonGenerator;
import tools.jackson.databind.BeanProperty;
import tools.jackson.databind.SerializationContext;
import tools.jackson.databind.ValueSerializer;

public class FixedDecimalSerializer extends ValueSerializer<Object> {

    private int integerDigits;
    private int decimalDigits;
    private boolean showSign;

    public FixedDecimalSerializer() {
        this.integerDigits = 1;
        this.decimalDigits = 0;
        this.showSign = false;
    }

    public FixedDecimalSerializer(int integerDigits, int decimalDigits, boolean showSign) {
        this.integerDigits = integerDigits;
        this.decimalDigits = decimalDigits;
        this.showSign = showSign;
    }

    @Override
    public ValueSerializer<?> createContextual(SerializationContext prov, BeanProperty property) {
        if (property != null) {
            FixedDecimal annotation = property.getAnnotation(FixedDecimal.class);
            if (annotation != null) {
                return new FixedDecimalSerializer(annotation.integerDigits(), annotation.decimalDigits(),
                        annotation.showSign());
            }
        }
        return this;
    }

    @Override
    public void serialize(Object value, JsonGenerator gen, SerializationContext serializers) {
        BigDecimal number = value == null ? null : (BigDecimal) value;
        gen.writeString(format(number));
    }

    private String format(BigDecimal value) {
        if (value == null) {
            String zeros = "0".repeat(integerDigits)
                    + (decimalDigits > 0 ? "." + "0".repeat(decimalDigits) : "");
            return zeros;
        }

        BigDecimal absValue = value.abs().setScale(decimalDigits, RoundingMode.HALF_UP);

        BigDecimal maxValue = BigDecimal.TEN.pow(integerDigits);
        if (absValue.compareTo(maxValue) >= 0) {
            return "9".repeat(integerDigits)
                    + (decimalDigits > 0 ? "." + "9".repeat(decimalDigits) : "");
        }

        String[] parts = absValue.toPlainString().split("\\.");
        String intPart = String.format("%0" + integerDigits + "d", Long.parseLong(parts[0]));
        String sign = value.signum() < 0 ? "-" : (showSign ? "+" : "");
        if (decimalDigits > 0) {
            String decPart = parts.length > 1 ? parts[1] : "0".repeat(decimalDigits);
            return sign + intPart + "." + decPart;
        }
        return sign + intPart;
    }
}

```

## src/main/java/com/nubo/receipts/api/application/annotations/PadCommaDecimal.java

```java
package com.nubo.receipts.api.application.annotations;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import com.fasterxml.jackson.annotation.JacksonAnnotationsInside;

import tools.jackson.databind.annotation.JsonSerialize;

@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
@JacksonAnnotationsInside
@JsonSerialize(using = PadCommaDecimalSerializer.class)
public @interface PadCommaDecimal {

    int length();

    char padChar() default ' ';

    boolean trailingMinus() default false;

    char firstChar() default '\0';
}

```

## src/main/java/com/nubo/receipts/api/application/annotations/PadCommaDecimalSerializer.java

```java
package com.nubo.receipts.api.application.annotations;

import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;
import java.util.Locale;

import tools.jackson.core.JsonGenerator;
import tools.jackson.databind.BeanProperty;
import tools.jackson.databind.SerializationContext;
import tools.jackson.databind.ValueSerializer;

public class PadCommaDecimalSerializer extends ValueSerializer<Object> {

    private int length;
    private char padChar;
    private boolean trailingMinus;
    private char firstChar;

    public PadCommaDecimalSerializer() {
        this.length = 0;
        this.padChar = ' ';
        this.trailingMinus = false;
        this.firstChar = '\0';
    }

    public PadCommaDecimalSerializer(int length, char padChar, boolean trailingMinus, char firstChar) {
        this.length = length;
        this.padChar = padChar;
        this.trailingMinus = trailingMinus;
        this.firstChar = firstChar;
    }

    @Override
    public ValueSerializer<?> createContextual(SerializationContext prov, BeanProperty property) {
        if (property != null) {
            PadCommaDecimal annotation = property.getAnnotation(PadCommaDecimal.class);
            if (annotation != null) {
                return new PadCommaDecimalSerializer(
                        annotation.length(),
                        annotation.padChar(),
                        annotation.trailingMinus(),
                        annotation.firstChar());
            }
        }
        return this;
    }

    @Override
    public void serialize(Object value, JsonGenerator gen, SerializationContext serializers) {
        BigDecimal number = (value instanceof BigDecimal) ? (BigDecimal) value : null;
        String result = format(number);
        int targetLength = (firstChar != '\0') ? length - 1 : length;
        if (result.length() > targetLength) {
            result = result.substring(0, targetLength);
        } else if (result.length() < targetLength) {
            String pad = String.valueOf(padChar).repeat(targetLength - result.length());
            result = pad + result;
        }
        if (firstChar != '\0') {
            result = firstChar + result;
        }
        gen.writeString(result);
    }

    private String format(BigDecimal number) {
        if (number == null) {
            return "0";
        }
        // Dots for thousands, commas for decimals (German locale)
        DecimalFormatSymbols symbols = new DecimalFormatSymbols(Locale.GERMANY);
        String pattern = trailingMinus ? "#,##0.##;#,##0.##-" : "#,##0.##";
        return new DecimalFormat(pattern, symbols).format(number);
    }
}

```

## src/main/java/com/nubo/receipts/api/application/annotations/PadLeft.java

```java
package com.nubo.receipts.api.application.annotations;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import com.fasterxml.jackson.annotation.JacksonAnnotationsInside;

import tools.jackson.databind.annotation.JsonSerialize;

@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
@JacksonAnnotationsInside
@JsonSerialize(using = PadLeftSerializer.class)
public @interface PadLeft {

    int length();

    char padChar() default ' ';

    Direction direction() default Direction.LEFT;

    char firstChar() default '\0';

    enum Direction {
        LEFT,
        RIGHT
    }
}

```

## src/main/java/com/nubo/receipts/api/application/annotations/PadLeftSerializer.java

```java
package com.nubo.receipts.api.application.annotations;

import tools.jackson.core.JsonGenerator;
import tools.jackson.databind.BeanProperty;
import tools.jackson.databind.SerializationContext;
import tools.jackson.databind.ValueSerializer;

public class PadLeftSerializer extends ValueSerializer<Object> {

    private int length;
    private char padChar;
    private PadLeft.Direction direction;
    private char firstChar;

    public PadLeftSerializer() {
        this.length = 0;
        this.padChar = ' ';
        this.direction = PadLeft.Direction.LEFT;
        this.firstChar = '\0';
    }

    public PadLeftSerializer(int length, char padChar, PadLeft.Direction direction, char firstChar) {
        this.length = length;
        this.padChar = padChar;
        this.direction = direction;
        this.firstChar = firstChar;
    }

    @Override
    public ValueSerializer<?> createContextual(SerializationContext prov, BeanProperty property) {
        if (property != null) {
            PadLeft annotation = property.getAnnotation(PadLeft.class);
            if (annotation != null) {
                return new PadLeftSerializer(annotation.length(), annotation.padChar(), annotation.direction(),
                        annotation.firstChar());
            }
        }
        return this;
    }

    @Override
    public void serialize(Object value, JsonGenerator gen, SerializationContext serializers) {
        String str = value != null ? value.toString() : "";
        int targetLength = (firstChar != '\0') ? length - 1 : length;
        if (str.length() > targetLength) {
            str = str.substring(0, targetLength);
        } else if (str.length() < targetLength) {
            String pad = String.valueOf(padChar).repeat(targetLength - str.length());
            str = direction == PadLeft.Direction.RIGHT ? str + pad : pad + str;
        }
        if (firstChar != '\0') {
            str = firstChar + str;
        }
        gen.writeString(str);
    }
}

```

## src/main/java/com/nubo/receipts/api/application/cause/CauseCatalog.java

```java
package com.nubo.receipts.api.application.cause;

import org.springframework.stereotype.Component;

import com.nubo.receipts.api.models.dto.response.ApiClientCauseDto;
import com.nubo.receipts.api.models.dto.response.CauseType;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@RequiredArgsConstructor
@Slf4j
public class CauseCatalog {

    private static final String UNCLASSIFIED_KEY = "UNCLASSIFIED";
    private static final String HARD_FALLBACK_CODE = "ARA-000";
    private static final String HARD_FALLBACK_MESSAGE = "No fue posible procesar la solicitud. Contacte a soporte.";
    private static final CauseType HARD_FALLBACK_TYPE = CauseType.TECHNICAL;

    private final CauseCatalogProperties properties;

    /**
     * causeCode (ej. "NOT_DATA_FOUND") -> apiClient completo (causeCode + code + message + type). Nunca lanza: un
     * causeCode sin entrada se resuelve a UNCLASSIFIED conservando el causeCode real, y si ni siquiera existe
     * UNCLASSIFIED (archivo no desplegado) devuelve un respaldo fijo.
     */
    public ApiClientCauseDto resolve(String causeCode) {
        String key = causeCode == null ? UNCLASSIFIED_KEY : causeCode;
        CauseEntry entry = properties.getEntries().get(key);
        if (entry == null) {
            log.warn("causeCode={} sin entrada en cause-catalog.yml -- resolviendo a {} -- agregar la entrada "
                    + "al catalogo", key, UNCLASSIFIED_KEY);
            entry = properties.getEntries().get(UNCLASSIFIED_KEY);
        }
        if (entry == null) {
            log.error("cause-catalog.yml no tiene ni siquiera la entrada {} configurada -- revisar el despliegue "
                    + "del archivo", UNCLASSIFIED_KEY);
            return ApiClientCauseDto.builder().causeCode(key).code(HARD_FALLBACK_CODE).message(HARD_FALLBACK_MESSAGE)
                    .type(HARD_FALLBACK_TYPE).build();
        }
        return ApiClientCauseDto.builder().causeCode(key).code(entry.code()).message(entry.message())
                .type(entry.type()).build();
    }
}

```

## src/main/java/com/nubo/receipts/api/application/cause/CauseCatalogProperties.java

```java
package com.nubo.receipts.api.application.cause;

import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "cause-catalog")
public class CauseCatalogProperties {

    private Map<String, CauseEntry> entries = new LinkedHashMap<>();

    public Map<String, CauseEntry> getEntries() {
        return entries;
    }

    public void setEntries(Map<String, CauseEntry> entries) {
        this.entries = entries;
    }
}

```

## src/main/java/com/nubo/receipts/api/application/cause/CauseEntry.java

```java
package com.nubo.receipts.api.application.cause;

import com.nubo.receipts.api.models.dto.response.CauseType;

public record CauseEntry(String code, String message, CauseType type) {
}

```

## src/main/java/com/nubo/receipts/api/application/config/CacheConfig.java

```java
package com.nubo.receipts.api.application.config;

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
                buildCache("status", 1, TimeUnit.HOURS),
                buildCache("types", 10, TimeUnit.MINUTES),
                buildCache("countries", 1, TimeUnit.HOURS),
                buildCache("businessRulesStatus", 2, TimeUnit.MINUTES)));

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

## src/main/java/com/nubo/receipts/api/application/config/JacksonModuleConfig.java

```java
package com.nubo.receipts.api.application.config;

import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.nubo.receipts.api.application.annotations.CommaDecimal;
import com.nubo.receipts.api.application.annotations.CommaDecimalSerializer;
import com.nubo.receipts.api.application.annotations.FixedDecimal;
import com.nubo.receipts.api.application.annotations.FixedDecimalSerializer;
import com.nubo.receipts.api.application.annotations.PadCommaDecimal;
import com.nubo.receipts.api.application.annotations.PadCommaDecimalSerializer;
import com.nubo.receipts.api.application.annotations.PadLeft;
import com.nubo.receipts.api.application.annotations.PadLeftSerializer;

import tools.jackson.databind.BeanDescription;
import tools.jackson.databind.SerializationConfig;
import tools.jackson.databind.module.SimpleModule;
import tools.jackson.databind.ser.BeanPropertyWriter;
import tools.jackson.databind.ser.ValueSerializerModifier;

@Configuration
public class JacksonModuleConfig {

    @Bean
    public SimpleModule customSerializersModule() {
        SimpleModule module = new SimpleModule("customSerializersModule");
        module.setSerializerModifier(new ValueSerializerModifier() {
            @Override
            public List<BeanPropertyWriter> changeProperties(
                    SerializationConfig config,
                    BeanDescription.Supplier beanDescription,
                    List<BeanPropertyWriter> beanProperties) {
                for (BeanPropertyWriter beanProperty : beanProperties) {
                    PadLeft annotation = beanProperty.getAnnotation(PadLeft.class);
                    if (annotation != null) {
                        beanProperty.assignNullSerializer(new PadLeftSerializer(
                                annotation.length(),
                                annotation.padChar(),
                                annotation.direction(),
                                annotation.firstChar()));
                        continue;
                    }

                    FixedDecimal fixedDecimal = beanProperty.getAnnotation(FixedDecimal.class);
                    if (fixedDecimal != null) {
                        beanProperty.assignNullSerializer(new FixedDecimalSerializer(
                                fixedDecimal.integerDigits(),
                                fixedDecimal.decimalDigits(),
                                fixedDecimal.showSign()));
                        continue;
                    }

                    PadCommaDecimal padCommaDecimal = beanProperty.getAnnotation(PadCommaDecimal.class);
                    if (padCommaDecimal != null) {
                        beanProperty.assignNullSerializer(new PadCommaDecimalSerializer(
                                padCommaDecimal.length(),
                                padCommaDecimal.padChar(),
                                padCommaDecimal.trailingMinus(),
                                padCommaDecimal.firstChar()));
                        continue;
                    }

                    CommaDecimal commaDecimal = beanProperty.getAnnotation(CommaDecimal.class);
                    if (commaDecimal != null) {
                        beanProperty.assignNullSerializer(new CommaDecimalSerializer(commaDecimal.trailingMinus()));
                    }
                }
                return beanProperties;
            }
        });
        return module;
    }
}

```

## src/main/java/com/nubo/receipts/api/application/config/KafkaProducerConfig.java

```java
package com.nubo.receipts.api.application.config;


import com.nubo.receipts.api.application.properties.PropertiesConfig;
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

## src/main/java/com/nubo/receipts/api/application/config/SwaggerConfig.java

```java
package com.nubo.receipts.api.application.config;

import com.nubo.receipts.api.exception.error.ErrorResponse;
import com.nubo.receipts.api.exception.error.ErrorValidation;
import com.nubo.receipts.api.models.enums.PropertiesEnum;
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

## src/main/java/com/nubo/receipts/api/application/config/WebConfig.java

```java
package com.nubo.receipts.api.application.config;

import java.util.Locale;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.format.FormatterRegistry;
import org.springframework.web.client.RestClient;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;

import com.nubo.receipts.api.application.interceptors.GlobalInterceptor;
import com.nubo.receipts.api.models.enums.MarketEnum;
import com.nubo.receipts.api.models.enums.OperationTypeEnum;
import com.nubo.receipts.api.models.enums.StatusFilterOptionEnum;
import com.nubo.receipts.api.models.enums.TypeFilterOptionEnum;
import com.nubo.receipts.api.models.enums.VoucherTypeEnum;

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

    @Bean
    public RestClient restClient() {
        return RestClient.create();
    }

    @Override
    public void addFormatters(FormatterRegistry registry) {
        registry.addConverter(String.class, StatusFilterOptionEnum.class, StatusFilterOptionEnum::fromValue);
        registry.addConverter(String.class, TypeFilterOptionEnum.class, TypeFilterOptionEnum::fromValue);
        registry.addConverter(String.class, OperationTypeEnum.class, OperationTypeEnum::fromCode);
        registry.addConverter(String.class, VoucherTypeEnum.class, VoucherTypeEnum::fromValue);
        registry.addConverter(String.class, MarketEnum.class, MarketEnum::fromCode);
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(globalInterceptor)
                .addPathPatterns("/**");
    }

}

```

## src/main/java/com/nubo/receipts/api/application/context/GlobalContext.java

```java
package com.nubo.receipts.api.application.context;

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

## src/main/java/com/nubo/receipts/api/application/database/NamingStrategyConfig.java

```java
package com.nubo.receipts.api.application.database;

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

## src/main/java/com/nubo/receipts/api/application/database/UpperNamingConfig.java

```java
package com.nubo.receipts.api.application.database;

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

## src/main/java/com/nubo/receipts/api/application/filters/GlobalFilter.java

```java
package com.nubo.receipts.api.application.filters;

import java.io.IOException;
import java.net.InetAddress;
import java.time.LocalDateTime;

import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import com.nubo.receipts.api.application.cause.CauseCatalog;
import com.nubo.receipts.api.application.context.GlobalContext;
import com.nubo.receipts.api.application.util.ApplicationUtils;
import com.nubo.receipts.api.exception.ServiceException;
import com.nubo.receipts.api.exception.error.ErrorCode;
import com.nubo.receipts.api.exception.error.ErrorResponse;
import com.nubo.receipts.api.models.enums.PropertiesEnum;
import com.nubo.receipts.api.models.enums.VersionApiEnum;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@Order(1)
@Slf4j
@RequiredArgsConstructor
public class GlobalFilter extends OncePerRequestFilter
{

    private final CauseCatalog causeCatalog;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
            FilterChain chain)
            throws ServletException, IOException
    {
        try
        {
            String uri = request.getRequestURI();
            if (uri.contains("/v3/api-docs") || uri.contains("/swagger-ui") || uri.contains("/actuator"))
            {
                chain.doFilter(request, response);
                return;
            }
            String versionPath = this.validateVersionPath(request);
            String clientIpHeader = this.validateClientIpHeader(request);
            String clientUserHeader = this.validateClientUserHeader(request);
            String clientDatetime = this.validateClientDatetimeHeader(request);

            GlobalContext.setProperty(PropertiesEnum.VERSION_API.getValue(),
                    VersionApiEnum.fromValue(versionPath).getValue());
            GlobalContext.setProperty(PropertiesEnum.CLIENT_IP.getValue(), clientIpHeader);
            GlobalContext.setProperty(PropertiesEnum.CLIENT_USER.getValue(), clientUserHeader);
            GlobalContext.setProperty(PropertiesEnum.CLIENT_DATETIME.getValue(), clientDatetime);

            chain.doFilter(request, response);

        } catch (ServiceException ex)
        {
            handleServiceException(ex, request, response);
        }
    }

    private String validateClientIpHeader(HttpServletRequest request)
    {
        String clientIp = request.getHeader(PropertiesEnum.CLIENT_IP.getValue());
        if (clientIp == null || clientIp.isEmpty())
        {
            throw new ServiceException(ErrorCode.HEADER_CLIENT_IP_REQUIRED, HttpStatus.BAD_REQUEST);
        }
        try
        {
            InetAddress ip = InetAddress.getByName(clientIp);
            if (!ip.getHostAddress().equals(clientIp))
            {
                throw new ServiceException(ErrorCode.HEADER_CLIENT_IP_INVALID, HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e)
        {
            throw new ServiceException(ErrorCode.HEADER_CLIENT_IP_INVALID, HttpStatus.BAD_REQUEST);
        }
        return clientIp;
    }

    private String validateClientUserHeader(HttpServletRequest request)
    {
        String clientUser = request.getHeader(PropertiesEnum.CLIENT_USER.getValue());
        if (clientUser == null || clientUser.isEmpty())
        {
            throw new ServiceException(ErrorCode.HEADER_CLIENT_USER_REQUIRED, HttpStatus.BAD_REQUEST);
        }
        return clientUser;
    }

    private String validateClientDatetimeHeader(HttpServletRequest request)
    {
        String clientDatetime = request.getHeader(PropertiesEnum.CLIENT_DATETIME.getValue());
        if (clientDatetime == null || clientDatetime.isEmpty())
        {
            throw new ServiceException(ErrorCode.HEADER_CLIENT_DATETIME_REQUIRED, HttpStatus.BAD_REQUEST);
        }
        String datetimePattern = "\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}";
        if (!clientDatetime.matches(datetimePattern))
        {
            throw new ServiceException(ErrorCode.HEADER_CLIENT_DATETIME_INVALID, HttpStatus.BAD_REQUEST);
        }
        return clientDatetime;
    }

    private String validateVersionPath(HttpServletRequest request)
    {
        String requestURI = request.getRequestURI();
        String contextPath = request.getContextPath();
        if (requestURI.startsWith(contextPath))
        {
            String pathInfo = requestURI.replace(contextPath.concat("/"), "");
            if (pathInfo.matches("v[1-9]\\d?(/.*)?"))
            {
                String version = pathInfo.split("/")[0];
                try
                {
                    VersionApiEnum.fromValue(version);
                    return version;
                } catch (IllegalArgumentException e)
                {
                    throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
                }
            }
        }
        throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
    }

    private void handleServiceException(ServiceException exception, HttpServletRequest request,
            HttpServletResponse response) throws IOException
    {
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
                .apiClient(causeCatalog.resolve(exception.getCauseCodeOrDefault()))
                .build();
        response.getWriter().write(ApplicationUtils.convertObjectToJson(errorResponse));
        response.setStatus(exception.getHttpStatus().value());

        log.error("Error -> {}", errorResponse);
    }

}

```

## src/main/java/com/nubo/receipts/api/application/interceptors/GlobalInterceptor.java

```java
package com.nubo.receipts.api.application.interceptors;

import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import com.nubo.receipts.api.application.context.GlobalContext;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Component
@Order(2)
@RequiredArgsConstructor
public class GlobalInterceptor implements HandlerInterceptor {

    @Override
    public void afterCompletion(HttpServletRequest request,
            HttpServletResponse response, Object handler, Exception ex) {
        GlobalContext.remove();
    }

}

```

## src/main/java/com/nubo/receipts/api/application/properties/PropertiesConfig.java

```java
package com.nubo.receipts.api.application.properties;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import lombok.Getter;

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

    @Value("${kafka.nubo.producer.topic-name-report-liquida}")
    private String kafkaNuboProducerTopicNameReportLiquida;

    @Value("${kafka.nubo.producer.topic-name-report-papeleta}")
    private String kafkaNuboProducerTopicNameReportPapeleta;

    @Value("${kafka.nubo.producer.topic-name-operations-api-settlement-file}")
    private String kafkaNuboProducerTopicNameOperationsApiSettlementFile;

    @Value("${kafka.nubo.notification.module}")
    private String kafkaNuboNotificationModule;

    @Value("${kafka.nubo.notification.kafka-notification-request-topic}")
    private String kafkaNuboProducerTopicNameNotifications;

    @Value("${kafka.nubo.notification.event-type}")
    private String kafkaNuboNotificationEventType;

    @Value("${client.nubo.url-operation-rules:http://localhost:8081}")
    private String urlNuboOperationRules;

    @Value("${client.nubo.url-schedule-validate}")
    private String urlScheduleValidate;

    @Value("${schedule.screen-action.liquida-individual}")
    private Long scheduleScreenActionLiquidaIndividual;

    @Value("${schedule.screen-action.liquida-massive}")
    private Long scheduleScreenActionLiquidaMassive;

    @Value("${kafka.nubo.producer.topic-name-custodian-report}")
    private String kafkaNuboProducerTopicNameCustodianReport;

    @Value("${kafka.nubo.producer.topic-name-custodian-updates-report:custodian-updates-report}")
    private String kafkaNuboProducerTopicNameCustodianUpdateReport;

}

```

## src/main/java/com/nubo/receipts/api/application/properties/PropertiesContext.java

```java
package com.nubo.receipts.api.application.properties;

import com.nubo.receipts.api.application.context.GlobalContext;
import com.nubo.receipts.api.application.util.ApplicationUtils;
import com.nubo.receipts.api.models.enums.PropertiesEnum;
import org.springframework.util.ObjectUtils;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class PropertiesContext {

    private PropertiesContext() {
    }

    public static String getClientIp() {
        String clientIp = GlobalContext.getProperty(PropertiesEnum.CLIENT_IP.getValue());
        return clientIp == null || ObjectUtils.isEmpty(clientIp) ? "127.0.0.1" : clientIp;
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

## src/main/java/com/nubo/receipts/api/application/util/ApplicationUtils.java

```java
package com.nubo.receipts.api.application.util;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.stereotype.Component;

import tools.jackson.databind.ObjectMapper;
import com.nubo.receipts.api.exception.ServiceException;
import com.nubo.receipts.api.exception.error.ErrorCode;
import com.nubo.receipts.api.models.enums.TimeZoneEnum;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class ApplicationUtils {

    private final ObjectMapper objectMapper;

    private static ObjectMapper MAPPER;

    private static final String FORMAT_DATETIME = "yyyy-MM-dd'T'HH:mm:ss";
    private static final String FORMAT_DATE = "yyyy-MM-dd";
    private static final String FORMAT_TIME = "HH:mm:ss";
    private static final String FORMAT_DATE_PLANE = "yyyyMMdd";
    private static final String FORMAT_DD_MM_YYYY_HHMMSS = "dd-MM-yyyy_HHmmss";

    @PostConstruct
    private void init() {
        MAPPER = this.objectMapper;
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

    public static String getLocalDateTimeNow() {
        return LocalDateTime.now().format(DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDatetime()));
    }

    public static ZonedDateTime getZonedDateTimeNow(TimeZoneEnum timeZone) {
        return ZonedDateTime.now(ZoneId.of(timeZone.getZoneId()));
    }

    public static String getLocalDateNow() {
        return LocalDateTime.now().format(DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDate()));
    }

    public static String getLocalDateTimeCustomFormat() {
        return LocalDateTime.now()
                .format(DateTimeFormatter.ofPattern(FORMAT_DD_MM_YYYY_HHMMSS));
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

    public static String convertLocalDateTimeToString(LocalDateTime localDateTime) {
        return localDateTime.format(DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDatetime()));
    }

    public static BigDecimal divide(BigDecimal numerator, BigDecimal denominator) {
        if (numerator == null || denominator == null || BigDecimal.ZERO.compareTo(denominator) == 0) {
            return BigDecimal.ZERO;
        }
        return numerator.divide(denominator, 6, RoundingMode.HALF_UP);
    }

    public static String getFormatTime() {
        return FORMAT_TIME;
    }

    public static BigDecimal nvl(BigDecimal v) {
        return v != null ? v : BigDecimal.ZERO;
    }

    public static BigDecimal addNullable(BigDecimal a, BigDecimal b) {
        return nvl(a).add(nvl(b));
    }

}

```

## src/main/java/com/nubo/receipts/api/application/util/DependencyCauseExtractor.java

```java
package com.nubo.receipts.api.application.util;

import java.util.regex.Pattern;

import org.springframework.web.client.RestClientResponseException;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import tools.jackson.databind.JsonNode;
import tools.jackson.databind.json.JsonMapper;

/**
 * Extrae el {@code errorCode} del cuerpo de error de una API dependiente (reglas, horarios). El valor es un dato
 * externo: solo sirve como clave de búsqueda en el catálogo de causas y nunca se copia al texto que ve el cliente.
 */
@Slf4j
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public final class DependencyCauseExtractor {

    private static final JsonMapper MAPPER = JsonMapper.builder().build();
    private static final Pattern CAUSE_CODE_PATTERN = Pattern.compile("^[A-Z][A-Z0-9_]{1,79}$");

    /**
     * @return el {@code errorCode} del cuerpo de la respuesta de error, o {@code null} si la excepción no trae
     *         respuesta (red, timeout), el cuerpo está vacío o no es JSON, o el valor no tiene formato de código.
     */
    public static String extractCauseCode(Throwable throwable) {
        if (!(throwable instanceof RestClientResponseException responseException)) {
            return null;
        }
        try {
            String body = responseException.getResponseBodyAsString();
            if (body == null || body.isBlank()) {
                return null;
            }
            JsonNode errorCode = MAPPER.readTree(body).path("errorCode");
            if (!errorCode.isString()) {
                return null;
            }
            String value = errorCode.asString();
            return CAUSE_CODE_PATTERN.matcher(value).matches() ? value : null;
        } catch (Exception ex) {
            log.debug("No se pudo extraer errorCode del cuerpo de error de la dependencia: {}", ex.getMessage());
            return null;
        }
    }
}

```

## src/main/java/com/nubo/receipts/api/application/util/RestClientUtils.java

```java
package com.nubo.receipts.api.application.util;

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

## src/main/java/com/nubo/receipts/api/client/kafka/models/dto/CustodianReportFileInDto.java

```java
package com.nubo.receipts.api.client.kafka.models.dto;

import java.time.LocalDate;

import com.nubo.receipts.api.models.dto.request.CustodianReportFilterInDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CustodianReportFileInDto {

    private Long fileGenerateId;

    private Long participantId;

    private Long totalRecords;

    private LocalDate date;

    private String reportName;

    private String sourceView;

    private CustodianReportFilterInDto filter;
}

```

## src/main/java/com/nubo/receipts/api/client/kafka/models/dto/CustodianUpdatesReportFileInDto.java

```java
package com.nubo.receipts.api.client.kafka.models.dto;

import java.time.LocalDate;

import com.nubo.receipts.api.models.dto.request.CustodianUpdatesReportFilterInDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CustodianUpdatesReportFileInDto {

    private Long fileGenerateId;

    private Long participantId;

    private Long totalRecords;

    private LocalDate date;

    private String reportName;

    private String sourceView;

    private CustodianUpdatesReportFilterInDto filter;
}

```

## src/main/java/com/nubo/receipts/api/client/kafka/models/dto/ProducerKafkaCustodianReportInDto.java

```java
package com.nubo.receipts.api.client.kafka.models.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProducerKafkaCustodianReportInDto
{

    private Long targetUserId;

    private String clientIp;

    private String clientUser;

    private String clientDateTime;

    @JsonProperty("payload")
    private CustodianReportFileInDto payload;
}

```

## src/main/java/com/nubo/receipts/api/client/kafka/models/dto/ProducerKafkaCustodianUpdatesReportInDto.java

```java
package com.nubo.receipts.api.client.kafka.models.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProducerKafkaCustodianUpdatesReportInDto {

    private Long targetUserId;

    private String clientIp;

    private String clientUser;

    private String clientDateTime;

    @JsonProperty("payload")
    private CustodianUpdatesReportFileInDto payload;
}

```

## src/main/java/com/nubo/receipts/api/client/kafka/models/dto/ProducerKafkaOperationsAPIInDto.java

```java
package com.nubo.receipts.api.client.kafka.models.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.nubo.receipts.api.models.enums.VoucherTypeEnum;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProducerKafkaOperationsAPIInDto {

    private boolean massiveOperation;

    private VoucherTypeEnum voucherType;

    private String clientIp;

    private String clientUser;

    private String clientDateTime;

    @JsonProperty("payload")
    private SettlementReportFileInDto payload;

}

```

## src/main/java/com/nubo/receipts/api/client/kafka/models/dto/ProducerKafkaReceiptsOperationsAPIInDto.java

```java
package com.nubo.receipts.api.client.kafka.models.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.nubo.receipts.api.models.dto.response.massive.ReceiptFileOutDto;
import com.nubo.receipts.api.models.enums.VoucherTypeEnum;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProducerKafkaReceiptsOperationsAPIInDto {

    private boolean massiveOperation;

    private VoucherTypeEnum voucherType;

    private String clientIp;

    private String clientUser;

    private String clientDateTime;

    @JsonProperty("payload")
    private ReceiptFileOutDto payload;

}

```

## src/main/java/com/nubo/receipts/api/client/kafka/models/dto/ProducerKafkaReportFileInDto.java

```java
package com.nubo.receipts.api.client.kafka.models.dto;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.nubo.receipts.api.models.enums.VoucherTypeEnum;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProducerKafkaReportFileInDto {

    private Long targetUserId;

    private String clientIp;

    private String clientUser;

    private LocalDateTime clientDateTime;

    @JsonProperty("payload")
    private SettlementReportFileInDto payload;

}

```

## src/main/java/com/nubo/receipts/api/client/kafka/models/dto/SettlementReportFileInDto.java

```java
package com.nubo.receipts.api.client.kafka.models.dto;

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
public class SettlementReportFileInDto {

    private Long fileGenerateId;

    private Long participantId;

    private List<Long> searchStatusIds;

    private List<Long> tradeTypeIds;

    private Long statusRegisteredId;

    private Long countryId;

    private Long reportsSize;

    private LocalDate date;

    
}

```

## src/main/java/com/nubo/receipts/api/client/kafka/producer/KafkaNuboAdapter.java

```java
package com.nubo.receipts.api.client.kafka.producer;

import java.util.concurrent.CompletableFuture;

import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.stereotype.Component;

import com.nubo.receipts.api.application.properties.PropertiesConfig;
import com.nubo.receipts.api.application.util.ApplicationUtils;
import com.nubo.receipts.api.client.kafka.models.dto.ProducerKafkaCustodianReportInDto;
import com.nubo.receipts.api.client.kafka.models.dto.ProducerKafkaCustodianUpdatesReportInDto;
import com.nubo.receipts.api.client.kafka.models.dto.ProducerKafkaOperationsAPIInDto;
import com.nubo.receipts.api.client.kafka.models.dto.ProducerKafkaReceiptsOperationsAPIInDto;
import com.nubo.receipts.api.client.kafka.models.dto.ProducerKafkaReportFileInDto;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@RequiredArgsConstructor
@Slf4j
public class KafkaNuboAdapter {

    private final PropertiesConfig propertiesConfig;
    private final KafkaTemplate<String, String> kafkaNuboTemplate;

    public void sendMessageReportLiquidaAsync(String key, ProducerKafkaReportFileInDto producerKafkaReportFileInDto) {
        String topic = propertiesConfig.getKafkaNuboProducerTopicNameReportLiquida();
        String jsonString = ApplicationUtils.convertObjectToJson(producerKafkaReportFileInDto);
        CompletableFuture<SendResult<String, String>> future = kafkaNuboTemplate.send(topic, key, jsonString)
                .toCompletableFuture();

        future.thenAccept(result -> log.info(
                "Send message Kafka Settlement Report Liquida -- Topic: {} -- offset: {}",
                topic, result.getRecordMetadata().offset()))
                .exceptionally(ex -> {
                    log.error("ERROR sending message to Kafka, {}", ex.getMessage());
                    return null;
                });
    }

    public void sendMessageReportPapeletaAsync(String key, ProducerKafkaReportFileInDto producerKafkaReportFileInDto) {
        String topic = propertiesConfig.getKafkaNuboProducerTopicNameReportPapeleta();
        String jsonString = ApplicationUtils.convertObjectToJson(producerKafkaReportFileInDto);
        CompletableFuture<SendResult<String, String>> future = kafkaNuboTemplate.send(topic, key, jsonString)
                .toCompletableFuture();

        future.thenAccept(result -> log.info(
                "Send message Kafka Settlement Report Papeleta -- Topic: {} -- offset: {}",
                topic, result.getRecordMetadata().offset()))
                .exceptionally(ex -> {
                    log.error("ERROR sending message to Kafka, {}", ex.getMessage());
                    return null;
                });
    }

    public void sendMessageOperationsAPIAsync(String key,
            ProducerKafkaOperationsAPIInDto producerKafkaOperationsInDto) {
        String topic = propertiesConfig.getKafkaNuboProducerTopicNameOperationsApiSettlementFile();
        String jsonString = ApplicationUtils.convertObjectToJson(producerKafkaOperationsInDto);
        CompletableFuture<SendResult<String, String>> future = kafkaNuboTemplate.send(topic, key, jsonString)
                .toCompletableFuture();

        future.thenAccept(result -> log.info(
                "Send message Kafka Settlement Report cont-repo -- Topic: {} -- offset: {}",
                topic, result.getRecordMetadata().offset()))
                .exceptionally(ex -> {
                    log.error("ERROR sending message to Kafka, {}", ex.getMessage());
                    return null;
                });
    }

    public void sendMessageReceiptsOperationsAPIAsync(String key,
            ProducerKafkaReceiptsOperationsAPIInDto producerKafkaOperationsInDto) {
        String topic = propertiesConfig.getKafkaNuboProducerTopicNameOperationsApiSettlementFile();
        String jsonString = ApplicationUtils.convertObjectToJson(producerKafkaOperationsInDto);
        CompletableFuture<SendResult<String, String>> future = kafkaNuboTemplate.send(topic, key, jsonString)
                .toCompletableFuture();

        future.thenAccept(result -> log.info(
                "Send message Kafka Receipts Operations API -- Topic: {} -- offset: {}",
                topic, result.getRecordMetadata().offset()))
                .exceptionally(ex -> {
                    log.error("ERROR sending message to Kafka, {}", ex.getMessage());
                    return null;
                });
    }

    public void sendMessageCustodianReportAsync(String key, ProducerKafkaCustodianReportInDto dto) {
        String topic = propertiesConfig.getKafkaNuboProducerTopicNameCustodianReport();
        String jsonString = ApplicationUtils.convertObjectToJson(dto);
        CompletableFuture<SendResult<String, String>> future = kafkaNuboTemplate.send(topic, key, jsonString)
                .toCompletableFuture();

        future.thenAccept(result -> log.info(
                "Send message Kafka Custodian Report -- Topic: {} -- offset: {}",
                topic, result.getRecordMetadata().offset()))
                .exceptionally(ex -> {
                    log.error("ERROR sending custodian report message to Kafka, {}", ex.getMessage());
                    return null;
                });
    }

    public void sendMessageCustodianUpdatesReportAsync(String key, ProducerKafkaCustodianUpdatesReportInDto dto) {
        String topic = propertiesConfig.getKafkaNuboProducerTopicNameCustodianUpdateReport();
        String jsonString = ApplicationUtils.convertObjectToJson(dto);
        CompletableFuture<SendResult<String, String>> future = kafkaNuboTemplate.send(topic, key, jsonString)
                .toCompletableFuture();

        future.thenAccept(result -> log.info(
                "Send message Kafka Custodian Updates Report -- Topic: {} -- offset: {}",
                topic, result.getRecordMetadata().offset()))
                .exceptionally(ex -> {
                    log.error("ERROR sending custodian updates report message to Kafka, {}", ex.getMessage());
                    return null;
                });
    }

    public void sendMessageNotificationAsync(String key, String notificationJson) {
        String topic = propertiesConfig.getKafkaNuboProducerTopicNameNotifications();
        CompletableFuture<SendResult<String, String>> future = kafkaNuboTemplate.send(topic, key, notificationJson)
                .toCompletableFuture();

        future.thenAccept(
                result -> log.info("Send notification message Kafka Receipt -- Topic: {} -- offset: {}",
                        topic, result.getRecordMetadata().offset()))
                .exceptionally(ex -> {
                    log.error("Error sending notification to Kafka", ex);
                    return null;
                });
    }

}

```

## src/main/java/com/nubo/receipts/api/client/rule/models/dto/ActionOutDto.java

```java
package com.nubo.receipts.api.client.rule.models.dto;

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

    private Boolean valid;

    private StatusOutDto status;

    private String description;

    private String value;

}

```

## src/main/java/com/nubo/receipts/api/client/rule/models/dto/BusinessRuleOutDto.java

```java
package com.nubo.receipts.api.client.rule.models.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nubo.receipts.api.models.dto.response.pdf.CountryOutDto;

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

    private CountryOutDto country;

    private List<ActionOutDto> actions;

}

```

## src/main/java/com/nubo/receipts/api/client/rule/models/dto/StatusOutDto.java

```java
package com.nubo.receipts.api.client.rule.models.dto;

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

    private String detail;
}

```

## src/main/java/com/nubo/receipts/api/client/rule/models/enums/BusinessRuleEnum.java

```java
package com.nubo.receipts.api.client.rule.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum BusinessRuleEnum {

    RULE_OPERATION_SETTLEMENT_FILE("RULE_OPERATION_SETTLEMENT_FILE");

    private final String value;
}

```

## src/main/java/com/nubo/receipts/api/client/rule/service/BusinessRulesClient.java

```java
package com.nubo.receipts.api.client.rule.service;

import java.util.List;

import com.nubo.receipts.api.client.rule.models.dto.BusinessRuleOutDto;
import com.nubo.receipts.api.client.rule.models.enums.BusinessRuleEnum;

public interface BusinessRulesClient {

    List<Long> validateScheduleAction(BusinessRuleEnum code);

    BusinessRuleOutDto findBusinessRuleByCountryIdAndCodeValid(Long countryId, BusinessRuleEnum code);
}

```

## src/main/java/com/nubo/receipts/api/client/rule/service/impl/BusinessRulesClientImpl.java

```java
package com.nubo.receipts.api.client.rule.service.impl;

import java.net.URI;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;
import org.springframework.web.util.UriComponentsBuilder;

import com.nubo.receipts.api.application.properties.PropertiesConfig;
import com.nubo.receipts.api.application.properties.PropertiesContext;
import com.nubo.receipts.api.application.util.DependencyCauseExtractor;
import com.nubo.receipts.api.application.util.RestClientUtils;
import com.nubo.receipts.api.client.rule.models.dto.BusinessRuleOutDto;
import com.nubo.receipts.api.client.rule.models.enums.BusinessRuleEnum;
import com.nubo.receipts.api.client.rule.service.BusinessRulesClient;
import com.nubo.receipts.api.exception.ClientException;
import com.nubo.receipts.api.exception.error.ErrorCode;
import com.nubo.receipts.api.models.enums.PropertiesEnum;
import com.nubo.receipts.api.models.enums.VersionApiEnum;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
@RequiredArgsConstructor
public class BusinessRulesClientImpl implements BusinessRulesClient {

    private final RestClientUtils restClientUtils;
    private final PropertiesConfig propertiesConfig;

    @Override
    @Cacheable(value = "businessRulesStatus", key = "#code.getValue()")
    public List<Long> validateScheduleAction(BusinessRuleEnum code) {
        BusinessRuleOutDto businessRule = findBusinessRuleByCountryIdAndCodeValid(null, code);
        return businessRule.getActions().stream()
                .filter(action -> action.getValid())
                .map(action -> action.getStatus().getId())
                .collect(Collectors.toList());
    }

    @Override
    public BusinessRuleOutDto findBusinessRuleByCountryIdAndCodeValid(Long countryId, BusinessRuleEnum code) {
        String countryIdStr = (countryId == null) ? "all" : String.valueOf(countryId);
        return findBusinessRuleByCountryAndCodeValid(countryIdStr, code);
    }

    private BusinessRuleOutDto findBusinessRuleByCountryAndCodeValid(String countryId, BusinessRuleEnum code) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboOperationRules())
                .pathSegment(VersionApiEnum.V1.getValue(), "operation-action-business-rule")
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
            throw new ClientException(ErrorCode.CLIENT_OPERATION_RULES_ERROR, HttpStatus.BAD_GATEWAY, ex,
                    DependencyCauseExtractor.extractCauseCode(ex));
        }

        return BusinessRuleOutDto.builder().build();
    }

    private HttpHeaders getHttpHeaders() {
        HttpHeaders headers = new HttpHeaders();
        String clientIp = PropertiesContext.getClientIp();
        String clientUser = PropertiesContext.getClientUser() == null
                ? propertiesConfig.getApiName()
                : PropertiesContext.getClientUser();
        String clientDatetime = PropertiesContext.getClientDatetime()
                .format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss"));

        headers.set(PropertiesEnum.CLIENT_IP.getValue(), clientIp);
        headers.set(PropertiesEnum.CLIENT_USER.getValue(), clientUser);
        headers.set(PropertiesEnum.CLIENT_DATETIME.getValue(), clientDatetime);
        headers.setContentType(MediaType.APPLICATION_JSON);

        return headers;
    }
}

```

## src/main/java/com/nubo/receipts/api/client/schedule/validate/models/dto/ScheduleValidationOutDto.java

```java
package com.nubo.receipts.api.client.schedule.validate.models.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ScheduleValidationOutDto {

    private Boolean inSchedule;
    private Boolean isBusinessDay;
    private String message;
}

```

## src/main/java/com/nubo/receipts/api/client/schedule/validate/service/ScheduleValidateManualClient.java

```java
package com.nubo.receipts.api.client.schedule.validate.service;

import com.nubo.receipts.api.client.schedule.validate.models.dto.ScheduleValidationOutDto;

public interface ScheduleValidateManualClient {

    ScheduleValidationOutDto scheduleValidationDto(Long screenActionCode, Long participantId);
}

```

## src/main/java/com/nubo/receipts/api/client/schedule/validate/service/impl/ScheduleValidateManualClientImpl.java

```java
package com.nubo.receipts.api.client.schedule.validate.service.impl;

import java.net.URI;
import java.time.format.DateTimeFormatter;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.util.UriComponentsBuilder;

import com.nubo.receipts.api.application.properties.PropertiesConfig;
import com.nubo.receipts.api.application.properties.PropertiesContext;
import com.nubo.receipts.api.application.util.DependencyCauseExtractor;
import com.nubo.receipts.api.application.util.RestClientUtils;
import com.nubo.receipts.api.client.schedule.validate.models.dto.ScheduleValidationOutDto;
import com.nubo.receipts.api.client.schedule.validate.service.ScheduleValidateManualClient;
import com.nubo.receipts.api.exception.ClientException;
import com.nubo.receipts.api.exception.error.ErrorCode;
import com.nubo.receipts.api.models.enums.PropertiesEnum;
import com.nubo.receipts.api.models.enums.VersionApiEnum;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class ScheduleValidateManualClientImpl implements ScheduleValidateManualClient {

    private final PropertiesConfig propertiesConfig;
    private final RestClientUtils restClientUtils;

    @Override
    public ScheduleValidationOutDto scheduleValidationDto(Long screenActionCode, Long participantId) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlScheduleValidate())
                .pathSegment(VersionApiEnum.V1.getValue(), "schedule-validation")
                .path("/validate/participant/screen-action")
                .queryParam("screenActionCode", screenActionCode)
                .queryParam("participantId", participantId)
                .queryParam("bypass", false)
                .build()
                .toUri();

        log.info("Calling schedule-validation for screenActionCode: {}, participantId: {}",
                screenActionCode, participantId);

        try {
            ResponseEntity<ScheduleValidationOutDto> response = restClientUtils.requestWithResponseObject(
                    uri, HttpMethod.GET, getHttpHeaders(), ScheduleValidationOutDto.class);

            if (response == null || response.getBody() == null) {
                throw new ClientException(ErrorCode.SCHEDULE_VALIDATION_API_ERROR, HttpStatus.BAD_GATEWAY);
            }
            return response.getBody();
        } catch (ClientException ex) {
            throw ex;
        } catch (Exception ex) {
            throw new ClientException(ErrorCode.SCHEDULE_VALIDATION_API_ERROR, HttpStatus.BAD_GATEWAY, ex,
                    DependencyCauseExtractor.extractCauseCode(ex));
        }
    }

    private HttpHeaders getHttpHeaders() {
        HttpHeaders headers = new HttpHeaders();
        String clientIp = PropertiesContext.getClientIp();
        String clientUser = PropertiesContext.getClientUser() == null
                ? propertiesConfig.getApiName()
                : PropertiesContext.getClientUser();
        String clientDatetime = PropertiesContext.getClientDatetime()
                .format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss"));

        headers.set(PropertiesEnum.CLIENT_IP.getValue(), clientIp);
        headers.set(PropertiesEnum.CLIENT_USER.getValue(), clientUser);
        headers.set(PropertiesEnum.CLIENT_DATETIME.getValue(), clientDatetime);
        headers.setContentType(MediaType.APPLICATION_JSON);

        return headers;
    }
}

```

## src/main/java/com/nubo/receipts/api/exception/ClientException.java

```java
package com.nubo.receipts.api.exception;

import org.springframework.http.HttpStatus;

import com.nubo.receipts.api.exception.error.ErrorCode;

import lombok.Getter;

@Getter
public class ClientException extends RuntimeException {

    private final ErrorCode errorCode;
    private final HttpStatus httpStatus;
    /** Código de causa para el catálogo de errores del cliente; si es nulo se usa {@code errorCode}. */
    private final String causeCode;

    public ClientException(ErrorCode errorCode) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
        this.httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
        this.causeCode = null;
    }

    public ClientException(ErrorCode errorCode, HttpStatus httpStatus) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
        this.httpStatus = httpStatus;
        this.causeCode = null;
    }

    public ClientException(ErrorCode errorCode, Throwable throwable) {
        super(errorCode.getMessage(), throwable);
        this.errorCode = errorCode;
        this.httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
        this.causeCode = null;
    }

    public ClientException(ErrorCode errorCode, HttpStatus httpStatus, Throwable throwable) {
        this(errorCode, httpStatus, throwable, null);
    }

    public ClientException(ErrorCode errorCode, HttpStatus httpStatus, Throwable throwable, String causeCode) {
        super(errorCode.getMessage(), throwable);
        this.errorCode = errorCode;
        this.httpStatus = httpStatus;
        this.causeCode = causeCode;
    }

    public HttpStatus getHttpStatusOrDefault() {
        return this.httpStatus != null ? this.httpStatus : HttpStatus.INTERNAL_SERVER_ERROR;
    }

    public String getCauseCodeOrDefault() {
        return this.causeCode != null ? this.causeCode : this.errorCode.getName();
    }

}

```

## src/main/java/com/nubo/receipts/api/exception/ServiceException.java

```java
package com.nubo.receipts.api.exception;

import com.nubo.receipts.api.exception.error.ErrorCode;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public class ServiceException extends RuntimeException {

    private final ErrorCode errorCode;
    private final HttpStatus httpStatus;
    /** Código de causa para el catálogo de errores del cliente; si es nulo se usa {@code errorCode}. */
    private final String causeCode;

    public ServiceException(ErrorCode errorCode) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
        this.httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
        this.causeCode = null;
    }

    public ServiceException(ErrorCode errorCode, HttpStatus httpStatus) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
        this.httpStatus = httpStatus;
        this.causeCode = null;
    }

    public ServiceException(ErrorCode errorCode, Throwable throwable) {
        super(errorCode.getMessage(), throwable);
        this.errorCode = errorCode;
        this.httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
        this.causeCode = null;
    }

    public ServiceException(ErrorCode errorCode, HttpStatus httpStatus, Throwable throwable) {
        this(errorCode, httpStatus, throwable, null);
    }

    public ServiceException(ErrorCode errorCode, HttpStatus httpStatus, Throwable throwable, String causeCode) {
        super(errorCode.getMessage(), throwable);
        this.errorCode = errorCode;
        this.httpStatus = httpStatus;
        this.causeCode = causeCode;
    }

    public HttpStatus getHttpStatusOrDefault() {
        return this.httpStatus != null ? this.httpStatus : HttpStatus.INTERNAL_SERVER_ERROR;
    }

    public String getCauseCodeOrDefault() {
        return this.causeCode != null ? this.causeCode : this.errorCode.getName();
    }

}

```

## src/main/java/com/nubo/receipts/api/exception/error/ErrorCode.java

```java
package com.nubo.receipts.api.exception.error;

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
    SIDE_NOT_FOUND("Side not found"),
    TRADE_NOT_FOUND("Trade not found"),
    USER_NOT_FOUND("User not found"),
    COUNTRY_NOT_FOUND("Country not found"),
    USER_TYPE_ERROR("User type must be internal or external type"),
    SIDE_CANNOT_REPEATED("Side cannot be repeated"),
    TRADE_CANNOT_REPEATED("Trade cannot be repeated"),
    ERROR_DESERIALIZER_JSON("Error Deserializer Json"),
    ERROR_KAFKA_CONSUMER_NUBO("Error Consumer Kafka Nubo"),
    ERROR_KAFKA_PRODUCER_NUBO("Error Producer Kafka Nubo"),
    ERROR_DATA_RANGE_SETTLEMENT_RV_REPORT("Error Data Range Settlement RV Report is not valid"),
    PARTICIPANT_NOT_FOUND("Participant not found"),
    STATUS_NOT_FOUND("Status not found"),
    TYPE_NOT_FOUND("Type not found"),
    COUNT_FILE_GENERATE_EXCEEDED("Count file generate exceeded"),
    NOT_DATA_FOUND("No data found for the given date range"),
    OUTSIDE_BUSINESS_HOURS("Outside business hours"),
    NOT_BUSINESS_DAY("Not a business day to make the request"),
    PARTICIPANT_NOT_BELONG_TO_OPERATION_SIDE("Participant does not belong to the operation side"),
    REQUEST_DATE_AFTER_SETTLEMENT_DATE("Current request date is after the operation settlement date"),
    DOWNLOAD_PERIOD_EXCEEDED("Current date exceeds the allowed download period (2 months)"),
    SIDE_STATUS_NOT_ALLOW_REQUEST("Side status does not allow processing the request"),
    INVALID_STATUS("Trade status does not allow processing the request"),
    INVALID_VOUCHER_TYPE("Voucher type does not allow processing the request"),
    CLIENT_OPERATION_RULES_ERROR("Error calling Business-rules API"),
    SCHEDULE_VALIDATION_API_ERROR("Error calling schedule-validation API"),
    INVALID_DATE_MUST_BE_IN_PAST("Invalid date: Date must be in the past"),
    TYPE_REPORT_NOT_FOUND("Type report not found");

    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }

    public String getName() {
        return this.name();
    }

}

```

## src/main/java/com/nubo/receipts/api/exception/error/ErrorResponse.java

```java
package com.nubo.receipts.api.exception.error;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nubo.receipts.api.models.dto.response.ApiClientCauseDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
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
    private ApiClientCauseDto apiClient;

}

```

## src/main/java/com/nubo/receipts/api/exception/error/ErrorValidation.java

```java
package com.nubo.receipts.api.exception.error;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ErrorValidation {

    private String id;
    private String description;

}

```

## src/main/java/com/nubo/receipts/api/exception/handler/GlobalExceptionHandler.java

```java
package com.nubo.receipts.api.exception.handler;

import java.util.List;
import java.util.Objects;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.core.NestedExceptionUtils;
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

import com.nubo.receipts.api.application.cause.CauseCatalog;
import com.nubo.receipts.api.application.properties.PropertiesContext;
import com.nubo.receipts.api.application.util.ApplicationUtils;
import com.nubo.receipts.api.exception.ClientException;
import com.nubo.receipts.api.exception.ServiceException;
import com.nubo.receipts.api.exception.error.ErrorCode;
import com.nubo.receipts.api.exception.error.ErrorResponse;
import com.nubo.receipts.api.exception.error.ErrorValidation;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestControllerAdvice
@Slf4j
@RequiredArgsConstructor
public class GlobalExceptionHandler {

    private final CauseCatalog causeCatalog;

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handlerGeneralException(Exception exception,
            HttpServletRequest request) {
        return buildErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, exception, request, ErrorCode.UNEXPECTED);
    }

    @ExceptionHandler(ServiceException.class)
    public ResponseEntity<ErrorResponse> handlerServiceException(ServiceException exception,
            HttpServletRequest request) {
        HttpStatus httpStatus = exception.getHttpStatus();
        return buildErrorResponse(httpStatus, exception, request, exception.getErrorCode(),
                exception.getCauseCodeOrDefault(), null);
    }

    @ExceptionHandler(ClientException.class)
    public ResponseEntity<ErrorResponse> handlerClientException(ClientException exception,
            HttpServletRequest request) {
        HttpStatus httpStatus = exception.getHttpStatus();
        ResponseEntity<ErrorResponse> errorResponseResponseEntity = null;
        if (!ObjectUtils.isEmpty(exception.getCause())) {
            String message = exception.getCause().getMessage();
            errorResponseResponseEntity = this.buildClientErrorResponse(httpStatus, exception.getCauseCodeOrDefault(),
                    message);
        }
        return Objects.requireNonNullElseGet(errorResponseResponseEntity,
                () -> buildErrorResponse(httpStatus, exception, request, exception.getErrorCode(),
                        exception.getCauseCodeOrDefault(), null));
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
        // Jackson wraps the enum @JsonCreator's IllegalArgumentException; expose its
        // message instead of the wrapper's
        Throwable root = NestedExceptionUtils.getMostSpecificCause(exception);
        Exception detailSource = root instanceof IllegalArgumentException iae ? iae : exception;
        return buildErrorResponse(HttpStatus.BAD_REQUEST, detailSource, request, ErrorCode.MESSAGE_NOT_READABLE);
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

    private ResponseEntity<ErrorResponse> buildErrorResponse(HttpStatus status, Exception exception,
            HttpServletRequest request, ErrorCode errorCode) {
        return buildErrorResponse(status, exception, request, errorCode, errorCode.getName(), null);
    }

    private ResponseEntity<ErrorResponse> buildErrorResponse(HttpStatus status, Exception exception,
            HttpServletRequest request, ErrorCode errorCode, List<ErrorValidation> errorDetails) {
        return buildErrorResponse(status, exception, request, errorCode, errorCode.getName(), errorDetails);
    }

    private ResponseEntity<ErrorResponse> buildErrorResponse(HttpStatus status, Exception exception,
            HttpServletRequest request, ErrorCode errorCode, String causeCode,
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
                .apiClient(causeCatalog.resolve(causeCode))
                .build();

        log.error("Error -> {}", errorResponse);

        return ResponseEntity.status(status).body(errorResponse);
    }

    private ResponseEntity<ErrorResponse> buildClientErrorResponse(HttpStatus status, String causeCode,
            String cause) {
        try {
            Pattern pattern = Pattern.compile("\\{.*\\}");
            Matcher matcher = pattern.matcher(cause);

            if (matcher.find()) {
                String json = matcher.group();
                ErrorResponse errorResponse = (ErrorResponse) ApplicationUtils.convertJsonToObject(json,
                        ErrorResponse.class);
                errorResponse.setHttpCode(String.valueOf(status.value()));
                if (errorResponse.getApiClient() == null) {
                    errorResponse.setApiClient(causeCatalog.resolve(causeCode));
                }

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

## src/main/java/com/nubo/receipts/api/exception/kafka/KafkaErrorBuild.java

```java
package com.nubo.receipts.api.exception.kafka;

import com.nubo.receipts.api.application.properties.PropertiesConfig;
import com.nubo.receipts.api.exception.error.ErrorCode;
import com.nubo.receipts.api.exception.error.ErrorResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;

import java.time.LocalDateTime;

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
        ErrorResponse errorResponse = ErrorResponse.builder()
                .httpCode(String.valueOf(HttpStatus.INTERNAL_SERVER_ERROR.value()))
                .url(propertiesConfig.getKafkaNuboBootstrapServers())
                .errorCode(errorCode.getName())
                .errorMessage(errorCode.getMessage())
                .errorMessageDetail(ObjectUtils.isEmpty(exception.getCause()) ?
                        exception.getMessage() : exception.getCause().getMessage())
                .timestamp(String.valueOf(LocalDateTime.now()))
                .build();

        log.error("Error -> {}", errorResponse);
    }

}
```

## src/main/java/com/nubo/receipts/api/helpers/FileGenerateMapperUtil.java

```java
package com.nubo.receipts.api.helpers;

import com.nubo.receipts.api.models.dto.response.SettlementReport.FileGenerateDto;
import com.nubo.receipts.api.models.dto.response.massive.CountryPlaneOutDto;
import com.nubo.receipts.api.models.dto.response.massive.SmallParticipantOutDto;
import com.nubo.receipts.api.models.dto.response.massive.StatusPlaneOutDto;
import com.nubo.receipts.api.models.dto.response.massive.TypePlaneOutDto;
import com.nubo.receipts.api.models.entity.CountryEntity;
import com.nubo.receipts.api.models.entity.FileGenerateEntity;
import com.nubo.receipts.api.models.entity.ParticipantEntity;
import com.nubo.receipts.api.models.entity.StatusEntity;
import com.nubo.receipts.api.models.entity.TypeEntity;

public class FileGenerateMapperUtil {

    public static FileGenerateDto toDto(FileGenerateEntity fileEntity, long settlementSize,
            CountryEntity countryEntity) {
        if (fileEntity == null)
            return null;
        return FileGenerateDto.builder()
                .id(fileEntity.getId())
                .fileName(fileEntity.getFileName())
                .fileType(fileEntity.getFileType())
                .filePath(fileEntity.getFilePath())
                .generatedAt(fileEntity.getGeneratedAt())
                .generatedBy(fileEntity.getGeneratedBy())
                .operationStatus(toStatusPlaneOutDto(fileEntity.getOperationStatus()))
                .generationStatus(toStatusPlaneOutDto(fileEntity.getGenerationStatus()))
                .participant(toSmallParticipantOutDto(fileEntity.getParticipant()))
                .type(toTypePlaneOutDto(fileEntity.getType()))
                .totalTrades(settlementSize)
                .fileConsecutive(fileEntity.getFileConsecutive())
                .country(toCountryPlaneOutDto(countryEntity))
                .reportDate(fileEntity.getRecordDate())
                .message(fileEntity.getMessage())
                .build();

    }

    public static StatusPlaneOutDto toStatusPlaneOutDto(StatusEntity statusEntity) {
        if (statusEntity == null)
            return null;
        return StatusPlaneOutDto.builder()
                .id(statusEntity.getId())
                .description(statusEntity.getDescription())
                .category(statusEntity.getCategory())
                .build();
    }

    public static SmallParticipantOutDto toSmallParticipantOutDto(ParticipantEntity participantEntity) {
        if (participantEntity == null)
            return null;
        return SmallParticipantOutDto.builder()
                .id(participantEntity.getId())
                .code(participantEntity.getCode())
                .name(participantEntity.getName())
                .shortName(participantEntity.getShortName())
                .build();
    }

    public static TypePlaneOutDto toTypePlaneOutDto(TypeEntity typeEntity) {
        if (typeEntity == null)
            return null;
        return TypePlaneOutDto.builder()
                .id(typeEntity.getId())
                .description(typeEntity.getDescription())
                .category(typeEntity.getCategory())
                .build();
    }

    public static CountryPlaneOutDto toCountryPlaneOutDto(CountryEntity countryEntity) {
        if (countryEntity == null)
            return null;
        return CountryPlaneOutDto.builder()
                .id(countryEntity.getId())
                .name(countryEntity.getName())
                .code(countryEntity.getCode())
                .build();
    }
}

```

## src/main/java/com/nubo/receipts/api/helpers/MapperPageUtil.java

```java
package com.nubo.receipts.api.helpers;

import org.springframework.data.domain.Page;

import com.nubo.receipts.api.models.dto.response.PageResponseOutDto;

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

## src/main/java/com/nubo/receipts/api/helpers/MapperReceiptMassiveUtil.java

```java
package com.nubo.receipts.api.helpers;

import com.nubo.receipts.api.application.util.ApplicationUtils;
import com.nubo.receipts.api.models.dto.response.massive.CurrencyPlaneOutDto;
import com.nubo.receipts.api.models.dto.response.massive.DepositoryPlaneOutDto;
import com.nubo.receipts.api.models.dto.response.massive.IdentificationTypePlaneOutDto;
import com.nubo.receipts.api.models.dto.response.massive.InvestorPlaneOutDto;
import com.nubo.receipts.api.models.dto.response.massive.ParticipantPlaneOutDto;
import com.nubo.receipts.api.models.dto.response.massive.SecurityTitlePlaneOutDto;
import com.nubo.receipts.api.models.dto.response.massive.SettlementPlaneOutDto;
import com.nubo.receipts.api.models.dto.response.massive.SidePlaneOutDto;
import com.nubo.receipts.api.models.dto.response.massive.TaxStatusPlaneOutDto;
import com.nubo.receipts.api.models.dto.response.massive.TradePlaneOutDto;
import com.nubo.receipts.api.models.dto.response.massive.TradingSystemPlaneOutDto;
import com.nubo.receipts.api.models.dto.response.massive.TypePlaneOutDto;
import com.nubo.receipts.api.models.entity.CurrencyEntity;
import com.nubo.receipts.api.models.entity.DepositoryEntity;
import com.nubo.receipts.api.models.entity.IdentificationTypeEntity;
import com.nubo.receipts.api.models.entity.InvestorEntity;
import com.nubo.receipts.api.models.entity.ParticipantEntity;
import com.nubo.receipts.api.models.entity.SecurityTitleEntity;
import com.nubo.receipts.api.models.entity.SettlementEntity;
import com.nubo.receipts.api.models.entity.SideEntity;
import com.nubo.receipts.api.models.entity.TaxStatusEntity;
import com.nubo.receipts.api.models.entity.TradeEntity;
import com.nubo.receipts.api.models.entity.TradingSystemEntity;
import com.nubo.receipts.api.models.entity.TypeEntity;
import org.springframework.util.ObjectUtils;

public class MapperReceiptMassiveUtil {

    private MapperReceiptMassiveUtil() {
    }

    public static SettlementPlaneOutDto settlementEntityToSettlementPlaneOutDto(SettlementEntity settlementEntity) {
        return SettlementPlaneOutDto.builder()
                .side(ObjectUtils.isEmpty(settlementEntity.getSide()) ? null
                        : sideEntityToSidePlaneOutDto(settlementEntity.getSide()))
                .fraction(settlementEntity.getFraction())
                .repoRate(settlementEntity.getRepoRate())
                .repoAmount(settlementEntity.getRepoAmount())
                .outFlowTurnoverValue(settlementEntity.getOutFlowTurnoverValue())
                .returnTurnoverValue(settlementEntity.getReturnTurnoverValue())
                .fractionQuantity(settlementEntity.getFractionQuantity())
                .fractionVolume(settlementEntity.getFractionVolume())
                .commissionPercentage(settlementEntity.getCommissionPercentage())
                .commissionAmount(settlementEntity.getCommissionAmount())
                .brokerageService(settlementEntity.getBrokerageService())
                .netAmount(settlementEntity.getNetAmount())
                .valTaxAmount(settlementEntity.getValTaxAmount())
                .latePenality(settlementEntity.getLatePenality())
                .deliveryVersusPaymentValue(settlementEntity.getDeliveryVersusPaymentValue())
                .netValTax(ApplicationUtils.addNullable(settlementEntity.getValTaxAmount(),
                        settlementEntity.getNetAmount()))
                .issuedReceipt(settlementEntity.getIssuedReceipt())
                .issuedReceiptNumber(settlementEntity.getIssuedReceiptNumber())
                .build();
    }

    public static SidePlaneOutDto sideEntityToSidePlaneOutDto(SideEntity sideEntity) {
        return SidePlaneOutDto.builder()
                .id(sideEntity.getId())
                .description(sideEntity.getDescription())
                .build();
    }

    public static TradePlaneOutDto tradeEntityToTradePlaneOutDto(TradeEntity tradeEntity) {
        return TradePlaneOutDto.builder()
                .id(tradeEntity.getId())
                .matchDate(tradeEntity.getMatchDate())
                .matchId(tradeEntity.getMatchId())
                .fractionalMarkBuy(tradeEntity.getFractionalMarkBuy())
                .fractionalMarkSell(tradeEntity.getFractionalMarkSell())
                .clearingDate(tradeEntity.getClearingDate())
                .type(ObjectUtils.isEmpty(tradeEntity.getType()) ? null
                        : typeEntityToTypePlaneOutDto(tradeEntity.getType()))
                .businessType(ObjectUtils.isEmpty(tradeEntity.getBusinessType()) ? null
                        : typeEntityToTypePlaneOutDto(tradeEntity.getBusinessType()))
                .marketType(ObjectUtils.isEmpty(tradeEntity.getMarketType()) ? null
                        : typeEntityToTypePlaneOutDto(tradeEntity.getMarketType()))
                .tradingSystem(ObjectUtils.isEmpty(tradeEntity.getTradingSystem()) ? null
                        : tradingSystemEntityToTradingSystemPlaneOutDto(tradeEntity.getTradingSystem()))
                .depository(ObjectUtils.isEmpty(tradeEntity.getDepository()) ? null
                        : depositoryEntityToDepositoryPlaneOutDto(tradeEntity.getDepository()))
                .repurchaseRate(tradeEntity.getRepurchaseRate())
                .repurchaseAgreementDate(tradeEntity.getRepurchaseAgreementDate())
                .price(tradeEntity.getPrice())
                .daysToSettlement(tradeEntity.getDaysToSettlement())
                .currency(ObjectUtils.isEmpty(tradeEntity.getCurrency()) ? null
                        : currencyEntityToCurrencyPlaneOutDto(tradeEntity.getCurrency()))
                .build();
    }

    public static SecurityTitlePlaneOutDto securityTitleEntityToSecurityTitlePlaneOutDto(
            SecurityTitleEntity securityTitleEntity) {
        return SecurityTitlePlaneOutDto.builder()
                .id(securityTitleEntity.getId())
                .equityCode(securityTitleEntity.getEquityCode())
                .mnemonic(securityTitleEntity.getMnemonic())
                .specieDescription(String.format("%s %s",
                        ObjectUtils.isEmpty(securityTitleEntity.getClassId()) ? ""
                                : securityTitleEntity.getClassId().getDescription(),
                        securityTitleEntity.getMnemonic()))
                .build();
    }

    public static InvestorPlaneOutDto investorEntityToInvestorPlaneOutDto(InvestorEntity investorEntity) {
        if (ObjectUtils.isEmpty(investorEntity))
            return null;
        return InvestorPlaneOutDto.builder()
                .fullName(investorEntity.getCompanyName())
                .documentNumber(investorEntity.getDocumentNumber())
                .identificationType(ObjectUtils.isEmpty(investorEntity.getIdentificationType()) ? null
                        : identificationEntityToIdentificationTypePlaneOutDto(investorEntity.getIdentificationType()))
                .taxStatus(ObjectUtils.isEmpty(investorEntity.getTaxStatus()) ? null
                        : taxStatusEntityToTaxStatusPlaneOutDto(investorEntity.getTaxStatus()))
                .address(investorEntity.getAddress())
                .build();
    }

    public static ParticipantPlaneOutDto participantEntityToParticipantPlaneOutDto(
            ParticipantEntity participantEntity) {
        if (ObjectUtils.isEmpty(participantEntity))
            return null;
        return ParticipantPlaneOutDto.builder()
                .code(participantEntity.getCode())
                .name(participantEntity.getName())
                .documentNumber(participantEntity.getDocumentNumber())
                .identificationType(ObjectUtils.isEmpty(participantEntity.getIdentificationType()) ? null
                        : identificationEntityToIdentificationTypePlaneOutDto(
                                participantEntity.getIdentificationType()))
                .taxStatus(ObjectUtils.isEmpty(participantEntity.getTaxStatus()) ? null
                        : taxStatusEntityToTaxStatusPlaneOutDto(participantEntity.getTaxStatus()))
                .type(ObjectUtils.isEmpty(participantEntity.getType()) ? null
                        : typeEntityToTypePlaneOutDto(participantEntity.getType()))
                .mainAddress(participantEntity.getMainAddress())
                .build();
    }

    public static IdentificationTypePlaneOutDto identificationEntityToIdentificationTypePlaneOutDto(
            IdentificationTypeEntity identificationTypeEntity) {
        return IdentificationTypePlaneOutDto.builder()
                .id(identificationTypeEntity.getId())
                .description(identificationTypeEntity.getDescription())
                .code(identificationTypeEntity.getCode())
                .build();
    }

    public static TaxStatusPlaneOutDto taxStatusEntityToTaxStatusPlaneOutDto(TaxStatusEntity taxStatusEntity) {
        return TaxStatusPlaneOutDto.builder()
                .id(taxStatusEntity.getId())
                .description(taxStatusEntity.getDescription())
                .build();
    }

    public static TypePlaneOutDto typeEntityToTypePlaneOutDto(TypeEntity typeEntity) {
        return TypePlaneOutDto.builder()
                .id(typeEntity.getId())
                .description(typeEntity.getDescription())
                .build();
    }

    public static TradingSystemPlaneOutDto tradingSystemEntityToTradingSystemPlaneOutDto(
            TradingSystemEntity tradingSystemEntity) {
        return TradingSystemPlaneOutDto.builder()
                .id(tradingSystemEntity.getId())
                .description(tradingSystemEntity.getDescription())
                .build();
    }

    public static DepositoryPlaneOutDto depositoryEntityToDepositoryPlaneOutDto(DepositoryEntity depositoryEntity) {
        return DepositoryPlaneOutDto.builder()
                .id(depositoryEntity.getId())
                .description(depositoryEntity.getDescription())
                .build();
    }

    public static CurrencyPlaneOutDto currencyEntityToCurrencyPlaneOutDto(CurrencyEntity currencyEntity) {
        return CurrencyPlaneOutDto.builder()
                .name(currencyEntity.getName())
                .code(currencyEntity.getCode())
                .build();
    }

}

```

## src/main/java/com/nubo/receipts/api/helpers/MapperReceiptSettlementUtil.java

```java
package com.nubo.receipts.api.helpers;

import com.nubo.receipts.api.models.dto.response.pdf.*;
import com.nubo.receipts.api.models.entity.*;
import org.springframework.util.ObjectUtils;

import com.nubo.receipts.api.application.util.ApplicationUtils;
import com.nubo.receipts.api.models.dto.response.massive.SmallParticipantOutDto;

public class MapperReceiptSettlementUtil {

    private MapperReceiptSettlementUtil() {
    }

    public static SettlementOutDto settlementEntityToSettlementOutDto(SettlementEntity settlementEntity) {
        return SettlementOutDto.builder()
                .side(ObjectUtils.isEmpty(settlementEntity.getSide()) ? null
                        : sideEntityToSideOutDto(settlementEntity.getSide()))
                .fraction(settlementEntity.getFraction())
                .repoRate(settlementEntity.getRepoRate())
                .repoAmount(settlementEntity.getRepoAmount())
                .outFlowTurnoverValue(settlementEntity.getOutFlowTurnoverValue())
                .returnTurnoverValue(settlementEntity.getReturnTurnoverValue())
                .fractionQuantity(settlementEntity.getFractionQuantity())
                .fractionVolume(settlementEntity.getFractionVolume())
                .commissionPercentage(settlementEntity.getCommissionPercentage())
                .commissionAmount(settlementEntity.getCommissionAmount())
                .brokerageService(settlementEntity.getBrokerageService())
                .netAmount(settlementEntity.getNetAmount())
                .valTaxAmount(settlementEntity.getValTaxAmount())
                .latePenality(settlementEntity.getLatePenality())
                .deliveryVersusPaymentValue(settlementEntity.getDeliveryVersusPaymentValue())
                .netValTax(ApplicationUtils.addNullable(settlementEntity.getValTaxAmount(),
                        settlementEntity.getNetAmount()))
                .issuedReceipt(settlementEntity.getIssuedReceipt())
                .issuedReceiptNumber(settlementEntity.getIssuedReceiptNumber())
                .build();
    }

    public static SideOutDto sideEntityToSideOutDto(SideEntity sideEntity) {
        return SideOutDto.builder()
                .id(sideEntity.getId())
                .build();
    }

    public static TradeOutDto tradeEntityToTradeOutDto(TradeEntity tradeEntity) {
        return TradeOutDto.builder()
                .id(tradeEntity.getId())
                .matchDate(tradeEntity.getMatchDate())
                .matchId(tradeEntity.getMatchId())
                .fractionalMarkBuy(tradeEntity.getFractionalMarkBuy())
                .fractionalMarkSell(tradeEntity.getFractionalMarkSell())
                .clearingDate(tradeEntity.getClearingDate())
                .type(ObjectUtils.isEmpty(tradeEntity.getType()) ? null : typeEntityToTypeOutDto(tradeEntity.getType()))
                .businessType(ObjectUtils.isEmpty(tradeEntity.getBusinessType()) ? null
                        : typeEntityToTypeOutDto(tradeEntity.getBusinessType()))
                .market(ObjectUtils.isEmpty(tradeEntity.getMarket()) ? null
                        : marketEntityToMarketOutDto(tradeEntity.getMarket()))
                .marketType(ObjectUtils.isEmpty(tradeEntity.getMarketType()) ? null
                        : typeEntityToTypeOutDto(tradeEntity.getMarketType()))
                .tradingSystem(ObjectUtils.isEmpty(tradeEntity.getTradingSystem()) ? null
                        : tradingSystemEntityToTradingSystemOutDto(tradeEntity.getTradingSystem()))
                .depository(ObjectUtils.isEmpty(tradeEntity.getDepository()) ? null
                        : depositoryEntityToDepositoryOutDto(tradeEntity.getDepository()))
                .repurchaseRate(tradeEntity.getRepurchaseRate())
                .repurchaseAgreementDate(tradeEntity.getRepurchaseAgreementDate())
                .price(tradeEntity.getPrice())
                .daysToSettlement(tradeEntity.getDaysToSettlement())
                .currency(ObjectUtils.isEmpty(tradeEntity.getCurrency()) ? null
                        : currencyEntityToCurrencyOutDto(tradeEntity.getCurrency()))
                .build();
    }

    public static SecurityTitleOutDto securityTitleEntityTosecurityTitleOutDto(
            SecurityTitleEntity securityTitleEntity) {
        return SecurityTitleOutDto.builder()
                .id(securityTitleEntity.getId())
                .equityCode(securityTitleEntity.getEquityCode())
                .mnemonic(securityTitleEntity.getMnemonic())
                .specieDescription(String.format("%s %s",
                        ObjectUtils.isEmpty(securityTitleEntity.getClassId()) ? ""
                                : securityTitleEntity.getClassId().getDescription(),
                        securityTitleEntity.getMnemonic()))
                .build();
    }

    public static InvestorOutDto investorAccountEntityToInvestorOutDto(InvestorAccountEntity investorAccountEntity) {
        if (ObjectUtils.isEmpty(investorAccountEntity))
            return null;
        InvestorEntity investorEntity = investorAccountEntity.getInvestor();
        if (ObjectUtils.isEmpty(investorEntity))
            return null;
        return InvestorOutDto.builder()
                .fullName(investorAccountEntity.getAccountName())
                .documentNumber(investorEntity.getDocumentNumber())
                .identificationType(ObjectUtils.isEmpty(investorEntity.getIdentificationType()) ? null
                        : identificationTypeOutDtoToIdentificationTypeOutDto(investorEntity.getIdentificationType()))
                .taxStatus(ObjectUtils.isEmpty(investorEntity.getTaxStatus()) ? null
                        : taxStatusEntityToTaxStatusOutDto(investorEntity.getTaxStatus()))
                .address(investorEntity.getAddress())
                .build();
    }

    public static ParticipantOutDto participantEntityToParticipantOutDto(ParticipantEntity participantEntity,
            boolean isCont) {
        if (ObjectUtils.isEmpty(participantEntity))
            return null;
        return ParticipantOutDto.builder()
                .code(participantEntity.getCode())
                .name(participantEntity.getName())
                .documentNumber(participantEntity.getDocumentNumber())
                .identificationType(ObjectUtils.isEmpty(participantEntity.getIdentificationType()) ? null
                        : identificationTypeOutDtoToIdentificationTypeOutDto(participantEntity.getIdentificationType()))
                .taxStatus(ObjectUtils.isEmpty(participantEntity.getTaxStatus()) ? null
                        : taxStatusOutDtoIsCont(participantEntity.getTaxStatus(), isCont))
                .type(ObjectUtils.isEmpty(participantEntity.getType()) ? null
                        : typeEntityToTypeOutDto(participantEntity.getType()))
                .mainAddress(participantEntity.getMainAddress())
                .build();
    }

    public static SmallParticipantOutDto participantEntityToSmallParticipantOutDto(
            ParticipantEntity participantEntity) {
        if (ObjectUtils.isEmpty(participantEntity))
            return null;
        return SmallParticipantOutDto.builder()
                .id(participantEntity.getId())
                .code(participantEntity.getCode())
                .name(participantEntity.getName())
                .shortName(participantEntity.getShortName())
                .build();
    }

    public static IdentificationTypeOutDto identificationTypeOutDtoToIdentificationTypeOutDto(
            IdentificationTypeEntity identificationTypeEntity) {
        return IdentificationTypeOutDto.builder()
                .id(identificationTypeEntity.getId())
                .description(identificationTypeEntity.getDescription())
                .code(identificationTypeEntity.getCode())
                .build();
    }

    public static TaxStatusOutDto taxStatusEntityToTaxStatusOutDto(TaxStatusEntity taxStatusEntity) {
        return TaxStatusOutDto.builder()
                .id(taxStatusEntity.getId())
                .description(taxStatusEntity.getDescription())
                .build();
    }

    public static TaxStatusOutDto taxStatusOutDtoIsCont(TaxStatusEntity taxStatusEntity, boolean isCont) {
        TaxStatusOutDto dto = taxStatusEntityToTaxStatusOutDto(taxStatusEntity);
        if (isCont) {
            dto.setDescription("");
        }
        return dto;
    }

    public static TypeOutDto typeEntityToTypeOutDto(TypeEntity typeEntity) {
        return TypeOutDto.builder()
                .id(typeEntity.getId())
                .description(typeEntity.getDescription())
                .build();
    }

    public static TradingSystemOutDto tradingSystemEntityToTradingSystemOutDto(
            TradingSystemEntity tradingSystemEntity) {
        return TradingSystemOutDto.builder()
                .id(tradingSystemEntity.getId())
                .description(tradingSystemEntity.getDescription())
                .build();
    }

    public static DepositoryOutDto depositoryEntityToDepositoryOutDto(DepositoryEntity depositoryEntity) {
        return DepositoryOutDto.builder()
                .id(depositoryEntity.getId())
                .description(depositoryEntity.getDescription())
                .build();
    }

    public static CurrencyOutDto currencyEntityToCurrencyOutDto(CurrencyEntity currencyEntity) {
        return CurrencyOutDto.builder()
                .name(currencyEntity.getCode())
                .build();
    }

    public static MarketOutDto marketEntityToMarketOutDto(MarketEntity marketEntity) {
        return MarketOutDto.builder()
                .id(marketEntity.getId())
                .description(marketEntity.getDescription())
                .build();
    }

}

```

## src/main/java/com/nubo/receipts/api/helpers/ReportFileUtil.java

```java
package com.nubo.receipts.api.helpers;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Objects;

import com.nubo.receipts.api.models.entity.CountryEntity;
import com.nubo.receipts.api.models.entity.ParticipantEntity;
import com.nubo.receipts.api.models.enums.CountryEnum;
import com.nubo.receipts.api.models.enums.StatusEnum;

public final class ReportFileUtil {

    private ReportFileUtil() {
    }

    public static String fileNameLiquida(CountryEntity country, StatusEnum statusEnum) {
        String countryCode = (country != null) ? country.getCode() : "";

        boolean isCo = Objects.equals(countryCode, CountryEnum.COLOMBIA.getCode());
        boolean isPeOrCl = Objects.equals(countryCode, CountryEnum.PERU.getCode())
                || Objects.equals(countryCode, CountryEnum.CHILE.getCode());

        if (isCo) {
            if (statusEnum == StatusEnum.ASSIGNED)
                return "liqrebvc";
            if (statusEnum == StatusEnum.REGISTERED)
                return "liqbvc";
            return "liqbvc";
        }

        if (isPeOrCl) {
            if (statusEnum == StatusEnum.ASSIGNED)
                return "liqnuam";
            if (statusEnum == StatusEnum.REGISTERED)
                return "liqrenuam";
            return "liqnuam";
        }

        return "liqnuam";
    }

    public static String fileNamePapeleta(ParticipantEntity participantEntity) {
        String participantCode = participantEntity.getCode();
        String last3 = participantCode.length() >= 3
                ? participantCode.substring(participantCode.length() - 3)
                : "0".repeat(3 - participantCode.length()) + participantCode;

        return String.format("R%s%s",
                last3,
                LocalDate.now().format(DateTimeFormatter.ofPattern("MMyy")));
    }
}

```

## src/main/java/com/nubo/receipts/api/helpers/SendNotificationUtil.java

```java
package com.nubo.receipts.api.helpers;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.nubo.receipts.api.application.properties.PropertiesConfig;
import com.nubo.receipts.api.client.kafka.producer.KafkaNuboAdapter;
import com.nubo.receipts.api.models.dto.request.NotificationRequestDto;
import com.nubo.receipts.api.models.enums.NotificationMessageEnum;
import com.nubo.receipts.api.models.enums.NotificationTypeEnum;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import tools.jackson.databind.ObjectMapper;
import tools.jackson.databind.node.ObjectNode;

@Slf4j
@Component
@RequiredArgsConstructor
public class SendNotificationUtil {

    private final ObjectMapper objectMapper;
    private final PropertiesConfig propertiesConfig;

    @Autowired(required = false)
    private KafkaNuboAdapter kafkaNuboAdapter;

    public void sendNotification(NotificationTypeEnum notificationType,
            NotificationMessageEnum notificationMessage, String fileName, Long receiptId, Long userId) {
        if (kafkaNuboAdapter != null) {
            log.info("Sending notification type: {} - message: {} - receiptId: {} - userId: {}",
                    notificationType.getDescription(), notificationMessage.getDescription(), receiptId, userId);
            try {
                ObjectMapper mapper = new ObjectMapper();
                ObjectNode metadataNode = mapper.createObjectNode();
                if (receiptId != null) {
                    metadataNode.put("receiptId", receiptId.toString());
                    metadataNode.put("fileName", fileName);
                }

                NotificationRequestDto notification = NotificationRequestDto.builder()
                        .notificationId(notificationMessage.getId())
                        .typeNotification(notificationType.getDescription())
                        .eventType(propertiesConfig.getKafkaNuboNotificationEventType())
                        .module(propertiesConfig.getKafkaNuboNotificationModule())
                        .userIds(userId != null ? List.of(userId) : List.of())
                        .timestamp(LocalDateTime.now().withNano(0).toString())
                        .metadata(metadataNode)
                        .build();

                kafkaNuboAdapter.sendMessageNotificationAsync(userId != null ? userId.toString() : "",
                        objectMapper.writeValueAsString(notification));
                log.info("Receipt notification sent successfully for user: {}", userId);

            } catch (Exception e) {
                log.error("Error sending receipt notification to Kafka", e);
            }
        } else {
            log.info("KafkaNuboAdapter not available, skipping receipt notification sending");
        }
    }
}

```

## src/main/java/com/nubo/receipts/api/helpers/VoucherMapperUtil.java

```java
package com.nubo.receipts.api.helpers;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import com.nubo.receipts.api.models.dto.response.voucher.LiquidaFileOutDto;
import com.nubo.receipts.api.models.dto.response.voucher.PapeletaFileOutDto;
import com.nubo.receipts.api.models.entity.InvestorAccountEntity;
import com.nubo.receipts.api.models.entity.IsinNumberEntity;
import com.nubo.receipts.api.models.entity.MarketEntity;
import com.nubo.receipts.api.models.entity.ParticipantAccountEntity;
import com.nubo.receipts.api.models.entity.ParticipantEntity;
import com.nubo.receipts.api.models.entity.SecurityTitleEntity;
import com.nubo.receipts.api.models.entity.SettlementEntity;
import com.nubo.receipts.api.models.entity.SideEntity;
import com.nubo.receipts.api.models.entity.StatusEntity;
import com.nubo.receipts.api.models.entity.TradeEntity;
import com.nubo.receipts.api.models.entity.TradeEquityEntity;
import com.nubo.receipts.api.models.entity.TypeEntity;
import com.nubo.receipts.api.models.enums.MarketEnum;
import com.nubo.receipts.api.models.enums.SideEnum;
import com.nubo.receipts.api.models.enums.StatusEnum;
import com.nubo.receipts.api.models.enums.TypeEnum;

import lombok.experimental.UtilityClass;

@UtilityClass
public class VoucherMapperUtil {

    private static final DateTimeFormatter DATE_FORMAT = DateTimeFormatter.ofPattern("yyyyMMdd");
    private static final DateTimeFormatter TIME_FORMAT = DateTimeFormatter.ofPattern("HH:mm:ss");

    public static LiquidaFileOutDto toArchivoLiquidaDto(SettlementEntity settlement, ParticipantEntity participant) {
        if (settlement == null) {
            return null;
        }

        LocalDateTime localDateTime = LocalDateTime.now();
        TradeEntity trade = settlement.getTrade();
        TradeEquityEntity tradeEquity = trade.getTradeEquity();
        SecurityTitleEntity securityTitleEntity = trade.getSecurityTitle();
        LocalDate matchDate = trade.getMatchDate();
        SideEnum sideEnum = SideEnum.fromId(settlement.getSide().getId());

        return LiquidaFileOutDto.builder()
                .recordingDate(formatDate(localDateTime.toLocalDate()))
                .recordingTime(formatTime(localDateTime.toLocalTime()))
                .operationDate(formatDate(matchDate))
                .operationNumber(trade.getMatchId())
                .sequenceNumber(settlement.getFraction())
                .operationSide(String.valueOf(sideEnum.getCode()))
                .transactionType(mapTransactionType(trade))
                .marketType(mapMarketType(trade.getMarket()))
                .securityMnemonic(securityTitleEntity != null && securityTitleEntity.getMnemonic() != null
                        ? securityTitleEntity.getMnemonic()
                        : "")
                .buyerAffiliateCode(handleBuyerCode(trade.getParticipantBuy(), trade.getParticipantSell(), sideEnum))
                .sellerAffiliateCode(handleSellerCode(trade.getParticipantBuy(), trade.getParticipantSell(), sideEnum))
                .buyerOperatorCode(handleBuyerCode(trade.getParticipantBuy(), trade.getParticipantSell(), sideEnum))
                .sellerOperatorCode(handleSellerCode(trade.getParticipantBuy(), trade.getParticipantSell(), sideEnum))
                .quantity(getQuantity(trade, settlement))
                .daysToMaturity(trade.getDaysToSettlement() != null ? trade.getDaysToSettlement() : 0)
                .pricePercentage(BigDecimal.ZERO)
                .interestRatePercent(trade.getRepoRate())
                .transactionAmount(getTransactionAmount(trade, settlement))
                .unitPriceAmount(trade.getPrice())
                .fixedIncomeIssueDate("0")
                .fixedIncomeMaturityDate("0")
                .issuanceTermDays(0)
                .referenceRateCode("0")
                .adjustmentPointsValue(BigDecimal.ZERO)
                .issuanceRateValue(BigDecimal.ZERO)
                .interestCalculationBase("N")
                .interestPaymentFrequency("PV")
                .reinvestInterest("N")
                .auctionIdentifier(mapAuctionIdentifier(trade.getMarket()))
                .settlementTermDays(trade.getDaysToSettlement() == null ? 0
                        : trade.getDaysToSettlement())
                .settlementDate(dateWithBasicIsoDate(trade.getClearingDate()))
                .settlementModeType("F")
                .fixedPriceIndicator(tradeEquity != null
                        ? (Boolean.TRUE.equals(tradeEquity.getExdividendPeriod())
                                ? "S"
                                : "N")
                        : "")
                .exDividendIndicator(tradeEquity != null
                        ? (Boolean.TRUE.equals(tradeEquity.getExdividendPeriod())
                                ? "S"
                                : "N")
                        : "")
                .originIndicator(mapOriginIndicator(trade, sideEnum))
                .offerTypeCode(trade.getBusinessType() == null ? ""
                        : trade.getBusinessType().getDescription())
                .marketIndicator(trade.getIssuanceMarket() == null ? ""
                        : trade.getIssuanceMarket().getDescription())
                .swapFlagIndicator("N")
                .swapReferenceNumber("0")
                .repoInterestRate(trade.getRepoRate())
                .repoTermDays(trade.getDaysToSettlement())
                .repoCaptureValue(settlement.getRepoAmount() == null ? BigDecimal.ZERO : settlement.getRepoAmount())
                .repoRepurchaseVolume(
                        trade.getRepurchaseAmount() == null ? BigDecimal.ZERO : trade.getRepurchaseAmount())
                .depositoryCode(trade.getDepository() == null ? ""
                        : trade.getDepository().getCode())
                .fractionQuantityValue(settlement.getFractionQuantity())
                .fractionVolumeValue(settlement.getFractionVolume())
                .commissionPercentage(settlement.getCommissionPercentage())
                .commissionAmountValue(settlement.getCommissionAmount())
                .netFractionPrice(BigDecimal.ZERO)
                .netFractionRate(BigDecimal.ZERO)
                .netFractionAmount(settlement.getNetAmount())
                .numberOfPrints(Boolean.TRUE.equals(settlement.getIssuedReceipt()) ? 1 : 0)
                .serviceChargeVolume(BigDecimal.ZERO)
                .serviceChargeOperationValue(BigDecimal.ZERO)
                .traderCodeIdentifier(mapTraderCodeIdentifier(tradeEquity, sideEnum))
                .totalFractionsCount(0)
                .brokerReferenceValue(tradeEquityReference(trade))
                .client1IdentificationType(
                        getIdentificationType(settlement.getInvestorAccount(), settlement.getParticipantAccount()))
                .client1IdentificationNumber(
                        getIdentificationNumber(settlement.getInvestorAccount(), settlement.getParticipantAccount()))
                .fiduciary1IdentificationType("")
                .client2IdentificationType("")
                .client2IdentificationNumber("")
                .fiduciary2IdentificationType("")
                .client3IdentificationType("")
                .client3IdentificationNumber("")
                .fiduciary3IdentificationType("")
                .carouselIndicatorFlag("N")
                .operationStatusIndicator(mapOperationStatusIndicator(trade))
                .withholdingBaseCollectValue(BigDecimal.ZERO)
                .withholdingPercentageCollectValue(BigDecimal.ZERO)
                .withholdingValueCollect(BigDecimal.ZERO)
                .withholdingBaseTransferValue(BigDecimal.ZERO)
                .withholdingPercentageTransferValue(BigDecimal.ZERO)
                .withholdingValueTransfer(BigDecimal.ZERO)
                .vatPercentageValue(settlement.getValTax())
                .vatAmountValue(BigDecimal.ZERO)
                .exchangeServiceTransferClientValue("B")
                .generateReceiptFlag("N")
                .receiptDateValue("0")
                .receiptAmountValue(BigDecimal.ZERO)
                .issueReceiptBuyerFlagValue("N")
                .counterPaymentValue(BigDecimal.ZERO)
                .sendWithholdingIndicator("N")
                .liquidityPromoterFlag("N")
                .rateUsageMethod("")
                .longSecurityMnemonic("")
                .lateValue(BigDecimal.ZERO)
                .latePosition("")
                .lateAccount("N")
                .reinvestment("N")
                .marketSegmentId("EQTY")
                .cashSettlementCompletionStatus(mapCashSettlementCompletionStatus(trade, sideEnum))
                .build();
    }

    public static PapeletaFileOutDto toComprobanteDto(SettlementEntity settlementEntity) {
        if (settlementEntity == null) {
            return null;
        }

        LocalDateTime currentDateTime = LocalDateTime.now();
        TradeEntity tradeEntity = settlementEntity.getTrade();
        SecurityTitleEntity securityTitleEntity = tradeEntity.getSecurityTitle();
        IsinNumberEntity isinNumberEntity = securityTitleEntity.getIsinNumberList().isEmpty() ? null
                : securityTitleEntity.getIsinNumberList().get(0);

        return PapeletaFileOutDto.builder()
                .side(settlementEntity.getSide().getDescription())
                .operationDate(dateWithBasicIsoDate(tradeEntity.getMatchDate()))
                .consecutiveNumber(consecutiveNumber(tradeEntity.getMatchDate(), tradeEntity.getMatchId()))
                .fractionNumber(settlementEntity.getFraction().toString())
                .settlementDate(dateWithBasicIsoDate(tradeEntity.getClearingDate()))
                .condition(null)
                .securityMnemonic(securityTitleEntity.getMnemonic())
                .speciesDescription(isinNumberEntity == null ? "" : isinNumberEntity.getDescription())
                .client1Name(
                        getClientName(settlementEntity.getInvestorAccount(), settlementEntity.getParticipantAccount()))
                .client1IdType(getIdentificationType(settlementEntity.getInvestorAccount(),
                        settlementEntity.getParticipantAccount()))
                .client1DocumentNumber(getIdentificationNumber(settlementEntity.getInvestorAccount(),
                        settlementEntity.getParticipantAccount()))
                .fiscalCondition(null)
                .client2Name(null)
                .client2IdType(null)
                .client2DocumentNumber(null)
                .client3Name(null)
                .client3IdType(null)
                .client3DocumentNumber(null)
                .affiliateName(affiliateName(tradeEntity, settlementEntity.getSide()))
                .affiliateNit(affiliateNit(tradeEntity, settlementEntity.getSide()))
                .affiliateFiscalCondition(null)
                .userCode("0")
                .deadline(null)
                .nominalRateSpread(null)
                .reinvestmentModality(null)
                .reinvestment(null)
                .issueDate("0")
                .maturityDate("0")
                .maturityDays(null)
                .settlementCurrencyValue(null)
                .currencyValueDate("0")
                .operationType(tradeEntity.getType() == null ? "" : tradeEntity.getType().getDescription())
                .conformedCode("0")
                .businessType("NORMAL")
                .market(tradeEntity.getMarket() == null ? "" : tradeEntity.getMarket().getDescription())
                .operationOrigin("NEGOCIACION")
                .depository(getDepositoryName(tradeEntity, settlementEntity.getSide()))
                .repoRate(BigDecimal.ZERO)
                .repoStartDate("0")
                .repoEndDate("0")
                .repoTermDays(null)
                .exitValueAAA(null)
                .returnValueBBB(null)
                .repurchaseRate(BigDecimal.ZERO)
                .repurchaseDate("0")
                .repurchaseValue(null)
                .captureValue(null)
                .equivalentRate365(BigDecimal.ZERO)
                .currentIndicator(null)
                .currentIndicatorDate("0")
                .previousIndicatorValue(null)
                .previousIndicatorDate("0")
                .maxCorridorIndicatorValue(null)
                .minCorridorIndicatorValue(null)
                .assignmentPrice(null)
                .registrationYield(BigDecimal.ZERO)
                .commissionYield(BigDecimal.ZERO)
                .yieldDifferenceBuySell(BigDecimal.ZERO)
                .netYield(BigDecimal.ZERO)
                .nominalQuantity(settlementEntity.getFractionQuantity())
                .totalCessionPrice(tradeEntity.getPrice())
                .value(settlementEntity.getFractionVolume())
                .commissionPercentage(settlementEntity.getCommissionPercentage())
                .commissionValue(settlementEntity.getCommissionAmount())
                .stockExchangeServiceValue(null)
                .withholdingTax(BigDecimal.ZERO)
                .withholdingTaxValue(null)
                .transferredWithholdingPercentage(BigDecimal.ZERO)
                .transferredWithholdingValue(null)
                .netValue(settlementEntity.getNetAmount())
                .vatCommissionPercentage(settlementEntity.getValTax())
                .vatCommissionValue(settlementEntity.getValTaxAmount())
                .netAmountIncludingVat(settlementEntity.getTransferValue())
                .deliveryVsPayment(null)
                .yieldAmount(null)
                .appliedRate(BigDecimal.ZERO)
                .yieldPeriodStartDate("0")
                .yieldPeriodEndDate("0")
                .observations(null)
                .controlNumber(settlementEntity.getIssuedReceiptNumber())
                .generationDate(dateWithBasicIsoDate(currentDateTime.toLocalDate()))
                .generationTime(timeWithBasicIsoDate(currentDateTime.toLocalTime()))
                .lateSettlementAmount(null)
                .acceptingEntity(null)
                .build();
    }

    private static String formatDate(LocalDate date) {
        if (date == null) {
            return null;
        }
        return date.format(DATE_FORMAT);
    }

    private static String formatTime(LocalTime time) {
        if (time == null) {
            return null;
        }
        return time.format(TIME_FORMAT);
    }

    private static String mapTransactionType(TradeEntity trade) {
        if (trade == null || trade.getOriginType() == null) {
            return "";
        }
        for (TypeEnum typeEnum : TypeEnum.values()) {
            if (typeEnum.getId() == trade.getOriginType().getId()) {
                return switch (typeEnum) {
                    case NEGOTIATION -> "T";
                    case REGISTRATION -> "R";
                    default -> "";
                };
            }
        }
        return "";
    }

    private static String mapMarketType(MarketEntity market) {
        if (market == null || market.getId() == null) {
            return "";
        }
        for (MarketEnum marketEnum : MarketEnum.values()) {
            if (marketEnum.getId().equals(market.getId())) {
                return switch (marketEnum) {
                    case FIXED_INCOME -> "R";
                    case EQUITY, GLOBAL_MARKET -> "A";
                    default -> "";
                };
            }
        }
        return "";
    }

    private static String handleBuyerCode(ParticipantEntity participantBuy, ParticipantEntity participantSell,
            SideEnum sideEnum) {
        if (participantBuy == null || participantSell == null) {
            return "";
        }
        String code;
        if (sideEnum == SideEnum.SELL) {
            code = Objects.equals(participantBuy.getId(), participantSell.getId())
                    ? participantBuy.getCode()
                    : "999";
        } else {
            code = participantBuy.getCode();
        }
        return code != null && code.length() >= 3 ? code.substring(code.length() - 3) : code != null ? code : "";
    }

    private static String handleSellerCode(ParticipantEntity participantBuy, ParticipantEntity participantSell,
            SideEnum sideEnum) {
        if (participantBuy == null || participantSell == null) {
            return "";
        }
        String code;
        if (sideEnum == SideEnum.BUY) {
            code = Objects.equals(participantBuy.getId(), participantSell.getId())
                    ? participantSell.getCode()
                    : "999";
        } else {
            code = participantSell.getCode();
        }
        return code != null && code.length() >= 3 ? code.substring(code.length() - 3) : code != null ? code : "";
    }

    private static String mapTraderCodeIdentifier(TradeEquityEntity tradeEquityEntity, SideEnum sideEnum) {
        if (tradeEquityEntity == null) {
            return "";
        }
        if (SideEnum.BUY.equals(sideEnum)) {
            if (tradeEquityEntity.getForeignBrokerBuy() != null) {
                return tradeEquityEntity.getForeignBrokerBuy();
            }
        }
        if (SideEnum.SELL.equals(sideEnum)) {
            if (tradeEquityEntity.getForeignBrokerSell() != null) {
                return tradeEquityEntity.getForeignBrokerSell();
            }
        }
        return "";
    }

    private static String tradeEquityReference(TradeEntity tradeEntity) {
        TradeEquityEntity tradeEquityEntity = tradeEntity.getTradeEquity();
        if (tradeEquityEntity == null)
            return "";
        return tradeEquityEntity.getReferenceBuy() != null ? tradeEquityEntity.getReferenceBuy()
                : tradeEquityEntity.getReferenceSell();
    }

    private static String mapOriginIndicator(TradeEntity tradeEntity, SideEnum sideEnum) {
        TypeEntity sourceType = SideEnum.BUY.equals(sideEnum)
                ? tradeEntity.getSourceQuoteBuyType()
                : tradeEntity.getSourceQuoteSellType();
        if (sourceType == null) {
            return "";
        }
        for (TypeEnum typeEnum : TypeEnum.values()) {
            if (typeEnum.getId() == sourceType.getId()) {
                return switch (typeEnum) {
                    case THIRD_PARTIES_POINT_ORIGIN -> "T";
                    case OWN_POSITION_POINT_ORIGIN -> "P";
                    case COLLECTIVE_PORTFOLIO_POINT_ORIGIN -> "E";
                    default -> "";
                };
            }
        }
        return "";
    }

    private static String mapOperationStatusIndicator(TradeEntity tradeEntity) {
        if (tradeEntity == null || tradeEntity.getStatus() == null) {
            return "";
        }
        if (Boolean.TRUE.equals(tradeEntity.getCanceledStatus())) {
            return "A";
        } else {
            return "I";
        }
    }

    private static String dateWithBasicIsoDate(LocalDate localDate) {
        return localDate == null ? ""
                : localDate.format(DateTimeFormatter.BASIC_ISO_DATE);
    }

    private static String timeWithBasicIsoDate(LocalTime localTime) {
        return localTime == null ? ""
                : localTime.format(DateTimeFormatter.ISO_LOCAL_TIME);
    }

    private static String getIdentificationNumber(InvestorAccountEntity investorAccountEntity,
            ParticipantAccountEntity participantAccountEntity) {
        if (investorAccountEntity != null && investorAccountEntity.getInvestor() != null) {
            return investorAccountEntity.getInvestor().getDocumentNumber() != null
                    ? investorAccountEntity.getInvestor().getDocumentNumber()
                    : "";
        }
        if (participantAccountEntity != null && participantAccountEntity.getParticipant() != null) {
            return participantAccountEntity.getParticipant().getDocumentNumber() != null
                    ? participantAccountEntity.getParticipant().getDocumentNumber()
                    : "";
        }
        return "";
    }

    private static String getIdentificationType(InvestorAccountEntity investorAccountEntity,
            ParticipantAccountEntity participantAccountEntity) {
        if (investorAccountEntity != null && investorAccountEntity.getInvestor() != null) {
            return investorAccountEntity.getInvestor().getIdentificationType() != null
                    ? investorAccountEntity.getInvestor().getIdentificationType().getCode()
                    : "";
        }
        if (participantAccountEntity != null && participantAccountEntity.getParticipant() != null) {
            return participantAccountEntity.getParticipant().getIdentificationType() != null
                    ? participantAccountEntity.getParticipant().getIdentificationType().getCode()
                    : "";
        }
        return "";
    }

    private static String mapAuctionIdentifier(MarketEntity marketEntity) {
        if (marketEntity == null || marketEntity.getDescription() == null) {
            return "";
        }
        for (MarketEnum marketEnum : MarketEnum.values()) {
            if (marketEnum.getId().equals(marketEntity.getId())) {
                return switch (marketEnum) {
                    case GLOBAL_MARKET -> "MG";
                    case EQUITY -> "EQ";
                    default -> "";
                };
            }
        }
        return "";
    }

    private static String mapCashSettlementCompletionStatus(TradeEntity trade, SideEnum sideEnum) {
        StatusEntity statusEntity = SideEnum.BUY.equals(sideEnum)
                ? trade.getBuyStatus()
                : trade.getSellStatus();
        if (statusEntity == null) {
            return "";
        }
        for (StatusEnum statusEnum : StatusEnum.values()) {
            if (statusEnum.getId().equals(statusEntity.getId())) {
                return switch (statusEnum) {
                    case REGISTERED -> "N";
                    case ASSIGNED, SENT -> "X";
                    case REJECTED -> "R";
                    case ACCEPTED -> "S";
                    case CORRECTION_ACCEPTED -> "A";
                    default -> "";
                };
            }
        }
        return "";
    }

    private static BigDecimal getTransactionAmount(TradeEntity trade, SettlementEntity settlement) {
        BigDecimal fractionVolume = settlement.getFractionVolume();
        BigDecimal volume = (fractionVolume == null || fractionVolume.compareTo(BigDecimal.ZERO) == 0)
                ? trade.getVolume()
                : fractionVolume;
        return volume.setScale(2, RoundingMode.HALF_UP);
    }

    private static BigDecimal getQuantity(TradeEntity trade, SettlementEntity settlement) {
        BigDecimal fractionQuantity = settlement.getFractionQuantity();
        BigDecimal quantity = (fractionQuantity == null || fractionQuantity.compareTo(BigDecimal.ZERO) == 0)
                ? trade.getQuantity()
                : fractionQuantity;
        return quantity.setScale(2, RoundingMode.HALF_UP);
    }

    private static String consecutiveNumber(LocalDate matchDate, Long matchId) {
        return String.format("%S-%09d", dateWithBasicIsoDate(matchDate), matchId);
    }

    private static String affiliateName(TradeEntity tradeEntity, SideEntity sideEntity) {
        if (SideEnum.BUY.getId().equals(sideEntity.getId())) {
            return tradeEntity.getParticipantBuy().getName();
        } else if (SideEnum.SELL.getId().equals(sideEntity.getId())) {
            return tradeEntity.getParticipantSell().getName();
        }
        return "";
    }

    private static String affiliateNit(TradeEntity tradeEntity, SideEntity sideEntity) {
        if (SideEnum.BUY.getId().equals(sideEntity.getId())) {
            return tradeEntity.getParticipantBuy().getDocumentNumber();
        } else if (SideEnum.SELL.getId().equals(sideEntity.getId())) {
            return tradeEntity.getParticipantSell().getDocumentNumber();
        }
        return "";
    }

    private static String getDepositoryName(TradeEntity tradeEntity, SideEntity sideEntity) {
        if (SideEnum.BUY.getId().equals(sideEntity.getId())) {
            return tradeEntity.getDepositoryBuy() == null ? "" : tradeEntity.getDepositoryBuy().getDescription();
        } else if (SideEnum.SELL.getId().equals(sideEntity.getId())) {
            return tradeEntity.getDepositorySell() == null ? "" : tradeEntity.getDepositorySell().getDescription();
        }
        return "";
    }

    private static String getClientName(InvestorAccountEntity investorAccountEntity,
            ParticipantAccountEntity participantAccountEntity) {
        if (investorAccountEntity != null && investorAccountEntity.getInvestor() != null) {
            return investorAccountEntity.getAccountName() == null ? ""
                    : investorAccountEntity.getAccountName();
        }
        if (participantAccountEntity != null && participantAccountEntity.getParticipant() != null) {
            return participantAccountEntity.getParticipant().getName() == null ? ""
                    : participantAccountEntity.getParticipant().getName();
        }
        return "";
    }

    public static List<SettlementEntity> createPlaceholderSettlement(TradeEntity trade, ParticipantEntity participant) {
        List<SettlementEntity> settlementList = new ArrayList<>();
        if (trade == null) {
            return settlementList;
        }
        if (Objects.equals(participant, trade.getParticipantBuy())) {
            SettlementEntity settlement = SettlementEntity.builder()
                    .trade(trade)
                    .fraction(0)
                    .side(SideEntity.builder()
                            .id(SideEnum.BUY.getId())
                            .description(SideEnum.BUY.getDescription())
                            .build())
                    .netAmount(BigDecimal.ZERO)
                    .valTaxAmount(BigDecimal.ZERO)
                    .issuedReceipt(false)
                    .build();
            settlementList.add(settlement);
        }
        if (Objects.equals(participant, trade.getParticipantSell())) {
            SettlementEntity settlement = SettlementEntity.builder()
                    .trade(trade)
                    .fraction(0)
                    .side(SideEntity.builder()
                            .id(SideEnum.SELL.getId())
                            .description(SideEnum.SELL.getDescription())
                            .build())
                    .netAmount(BigDecimal.ZERO)
                    .valTaxAmount(BigDecimal.ZERO)
                    .issuedReceipt(false)
                    .build();
            settlementList.add(settlement);
        }
        return settlementList;
    }
}

```

## src/main/java/com/nubo/receipts/api/helpers/dynamicQuery/dataBase/CustodianIncidentsReportSpecificationFactory.java

```java
package com.nubo.receipts.api.helpers.dynamicQuery.dataBase;

import java.time.LocalDate;

import org.springframework.data.jpa.domain.Specification;

import com.nubo.receipts.api.models.dto.request.CustodianUpdatesReportFilterInDto;
import com.nubo.receipts.api.models.entity.CustodianIncidentsReportViewEntity;
import com.nubo.receipts.api.models.enums.CustodianUpdateSideFilterEnum;
import com.nubo.receipts.api.models.enums.CustodianUpdateStatusFilterEnum;

public final class CustodianIncidentsReportSpecificationFactory {

    private CustodianIncidentsReportSpecificationFactory() {
    }

    public static Specification<CustodianIncidentsReportViewEntity> createFilter(
            CustodianUpdatesReportFilterInDto filter) {
        Specification<CustodianIncidentsReportViewEntity> specification = Specification.unrestricted();

        if (filter == null) {
            return specification;
        }

        CustodianUpdateSideFilterEnum sideFilter = CustodianUpdateSideFilterEnum.fromValue(filter.getSide());

        specification = specification
                .and(equalDate("detClearingDate", filter.getComplianceDate()))
                .and(equalDate("heaCreaDate", filter.getPackageCreationDate()))
                .and(equalIgnoreCase("pacCustodian", filter.getCustodian()))
                .and(equalIgnoreCase("pacAffiliate", filter.getAffiliatedCode()))
                .and(equalIgnoreCase("heaPackageCode", filter.getPackageNumber()))
                .and(!sideFilter.isAll() ? equalIgnoreCase("heaSide", sideFilter.getViewValue())
                        : (root, query, criteriaBuilder) -> criteriaBuilder.conjunction());

        CustodianUpdateStatusFilterEnum statusFilter = CustodianUpdateStatusFilterEnum.fromValue(filter.getStatus());
        if (!statusFilter.isAll()) {
            String statusValue = statusFilter.getViewValue();
            specification = specification.and(equalIgnoreCase("pacPackageStatus", statusValue));
        }

        return specification;
    }

    private static Specification<CustodianIncidentsReportViewEntity> equalIgnoreCase(String field, String value) {
        return (root, query, criteriaBuilder) -> {
            if (value == null || value.isBlank()) {
                return criteriaBuilder.conjunction();
            }
            return criteriaBuilder.equal(criteriaBuilder.lower(root.get(field)), value.toLowerCase());
        };
    }

    private static Specification<CustodianIncidentsReportViewEntity> equalDate(String field, LocalDate value) {
        return (root, query, criteriaBuilder) -> {
            if (value == null) {
                return criteriaBuilder.conjunction();
            }
            return criteriaBuilder.equal(root.get(field), value);
        };
    }

}

```

## src/main/java/com/nubo/receipts/api/helpers/dynamicQuery/dataBase/CustodianPackageReportSpecificationFactory.java

```java
package com.nubo.receipts.api.helpers.dynamicQuery.dataBase;

import java.time.LocalDate;

import org.springframework.data.jpa.domain.Specification;

import com.nubo.receipts.api.models.dto.request.CustodianReportFilterInDto;
import com.nubo.receipts.api.models.entity.CustodianPackageReportViewEntity;

public final class CustodianPackageReportSpecificationFactory {

    private CustodianPackageReportSpecificationFactory() {
    }

    public static Specification<CustodianPackageReportViewEntity> createFilter(CustodianReportFilterInDto filter) {
        Specification<CustodianPackageReportViewEntity> specification = Specification.unrestricted();
        if (filter == null) {
            return specification;
        }

        String normalizedPackageStatus = normalizePackageStatus(filter.getPackageStatus());

        specification = specification
                .and(equalDate("pacInitialClearingDate", filter.getPackageClearingDate()))
                .and(equalDate("pacCreationDate", filter.getPackageCreationDate()))
                .and(containsIgnoreCase("pacCustodian", filter.getCustodian()))
                .and(containsIgnoreCase("pacAffiliate", filter.getAffiliate()))
                .and(containsIgnoreCase("pacFicAdministrator", filter.getFic()))
                .and(equalIgnoreCase("pacStatus", normalizedPackageStatus))
                .and(containsIgnoreCase("pacConsecutive1", filter.getPackageNumber()))
                .and(containsIgnoreCase("pacTransactionType", filter.getOperationType()));

        return specification;
    }

    private static Specification<CustodianPackageReportViewEntity> containsIgnoreCase(String field, String value) {
        return (root, query, builder) -> {
            if (value == null || value.isBlank()) {
                return builder.conjunction();
            }
            return builder.like(builder.lower(root.get(field)), "%" + value.toLowerCase() + "%");
        };
    }

    private static Specification<CustodianPackageReportViewEntity> equalIgnoreCase(String field, String value) {
        return (root, query, builder) -> {
            if (value == null || value.isBlank()) {
                return builder.conjunction();
            }
            return builder.equal(builder.lower(root.get(field)), value.toLowerCase());
        };
    }

    private static String normalizePackageStatus(String packageStatus) {
        if (packageStatus == null || packageStatus.isBlank()) {
            return null;
        }
        return switch (packageStatus.trim().toUpperCase()) {
            case "T", "TRASLADO", "TRASLADADA", "TRANSFERRED" -> "T";
            case "P", "PREMATCH", "PRE-MATCH" -> "P";
            case "A", "ADMITIDO", "ADMITIDA", "ADMITTED" -> "A";
            case "R", "RECHAZADO", "RECHAZADA", "REJECTED" -> "R";
            case "S", "SIN SOLICITUD", "WITHOUT REQUEST" -> "S";
            default -> packageStatus;
        };
    }

    private static Specification<CustodianPackageReportViewEntity> equalDate(String field, LocalDate value) {
        return (root, query, criteriaBuilder) -> {
            if (value == null) {
                return criteriaBuilder.conjunction();
            }
            return criteriaBuilder.equal(root.get(field), value);
        };
    }
}

```

## src/main/java/com/nubo/receipts/api/helpers/dynamicQuery/dataBase/FileGenerateSpecificationBuilder.java

```java
package com.nubo.receipts.api.helpers.dynamicQuery.dataBase;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.time.ZoneOffset;
import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.domain.Specification;

import com.nubo.receipts.api.models.entity.FileGenerateEntity;
import com.nubo.receipts.api.models.enums.SearchOperationEnum;

import jakarta.persistence.criteria.Path;

public class FileGenerateSpecificationBuilder {

    private final List<Specification<FileGenerateEntity>> specifications = new ArrayList<>();

    public static FileGenerateSpecificationBuilder builder() {
        return new FileGenerateSpecificationBuilder();
    }

    public FileGenerateSpecificationBuilder withGeneratedBy(String generatedBy) {
        if (generatedBy != null) {
            specifications.add((root, query, cb) -> cb.equal(root.get("generatedBy"), generatedBy));
        }
        return this;
    }

    public FileGenerateSpecificationBuilder withGenerationStatusIds(List<Long> statusIds) {
        if (statusIds != null && !statusIds.isEmpty()) {
            specifications.add((root, query, cb) -> root.get("generationStatus").get("id").in(statusIds));
        }
        return this;
    }

    public FileGenerateSpecificationBuilder withOperationStatusId(Long operationStatusId) {
        if (operationStatusId != null) {
            specifications.add((root, query, cb) -> cb.equal(root.get("operationStatus").get("id"), operationStatusId));
        }
        return this;
    }

    public FileGenerateSpecificationBuilder withParticipantId(Long participantId) {
        if (participantId != null) {
            specifications.add((root, query, cb) -> cb.equal(root.get("participant").get("id"), participantId));
        }
        return this;
    }

    public FileGenerateSpecificationBuilder withTypeId(Long typeId) {
        if (typeId != null) {
            specifications.add((root, query, cb) -> cb.equal(root.get("type").get("id"), typeId));
        }
        return this;
    }

    public FileGenerateSpecificationBuilder withGeneratedAtRange(LocalDateTime startDate, LocalDateTime endDate) {
        if (startDate == null && endDate == null) {
            return this;
        }

        specifications.add((root, query, cb) -> {
            var generatedAtPath = root.get("generatedAt").as(OffsetDateTime.class);

            ZoneOffset offset = ZoneOffset.ofHours(-5);

            OffsetDateTime start = (startDate != null) ? startDate.atOffset(offset) : null;
            OffsetDateTime end = (endDate != null) ? endDate.atOffset(offset) : null;

            if (start != null && end != null) {
                return cb.between(generatedAtPath, start, end);
            } else if (start != null) {
                return cb.greaterThanOrEqualTo(generatedAtPath, start);
            } else {
                return cb.lessThanOrEqualTo(generatedAtPath, end);
            }
        });

        return this;
    }

    public FileGenerateSpecificationBuilder withGeneratedAt(LocalDate date) {
        if (date == null) {
            return this;
        }

        specifications.add((root, query, cb) -> {
            var generatedAtPath = root.get("generatedAt").as(OffsetDateTime.class);

            ZoneOffset offset = ZoneOffset.ofHours(-5);

            OffsetDateTime start = date.atStartOfDay().atOffset(offset);
            OffsetDateTime end = date.plusDays(1).atStartOfDay().atOffset(offset).minusNanos(1);

            return cb.between(generatedAtPath, start, end);
        });

        return this;
    }

    public FileGenerateSpecificationBuilder withDynamicFilter(String fieldName, String fieldValue,
            SearchOperationEnum operation) {
        if (fieldName != null && fieldValue != null && operation != null) {
            specifications.add((root, query, cb) -> {
                try {
                    Path<?> fieldPath = MapperFileGenerateDynamicSearch.getFileGenerateFieldPath(root, fieldName);
                    if (fieldPath != null) {
                        return MapperFileGenerateDynamicSearch.buildFileGenerateFieldPredicate(cb, fieldPath,
                                fieldValue, operation);
                    }
                    return cb.conjunction();
                } catch (Exception e) {
                    return cb.conjunction();
                }
            });
        }
        return this;
    }

    public Specification<FileGenerateEntity> build() {
        if (specifications.isEmpty()) {
            return (root, query, cb) -> cb.conjunction();
        }
        return specifications.stream()
                .reduce(Specification::and)
                .orElse((root, query, cb) -> cb.conjunction());
    }
}

```

## src/main/java/com/nubo/receipts/api/helpers/dynamicQuery/dataBase/FileGenerateSpecificationFactory.java

```java
package com.nubo.receipts.api.helpers.dynamicQuery.dataBase;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.stream.Stream;

import org.springframework.data.jpa.domain.Specification;

import com.nubo.receipts.api.models.entity.FileGenerateEntity;
import com.nubo.receipts.api.models.enums.SearchOperationEnum;

import jakarta.persistence.criteria.Path;

public class FileGenerateSpecificationFactory {

    private FileGenerateSpecificationFactory() {
        throw new IllegalStateException("Utility class");
    }

    public static Specification<FileGenerateEntity> createHistoryFilter(
            String generatedBy, List<Long> statusIds) {

        return FileGenerateSpecificationBuilder.builder()
                .withGeneratedBy(generatedBy)
                .withGenerationStatusIds(statusIds)
                .build();
    }

    public static Specification<FileGenerateEntity> createDynamicFilter(
            String fieldName, String fieldValue, SearchOperationEnum operation) {

        return (root, query, cb) -> {
            try {
                Path<?> fieldPath = MapperFileGenerateDynamicSearch
                        .getFileGenerateFieldPath(root, fieldName);
                if (fieldPath != null) {
                    return MapperFileGenerateDynamicSearch
                            .buildFileGenerateFieldPredicate(cb, fieldPath, fieldValue, operation);
                }
                return cb.conjunction();
            } catch (Exception e) {
                return cb.conjunction();
            }
        };
    }

    public static Specification<FileGenerateEntity> createCombinedFilter(
            String generatedBy,
            List<Long> statusIds,
            Long participantId,
            LocalDate generatedAtDate,
            Long typeId,
            String fieldName,
            String fieldValue,
            SearchOperationEnum operation) {

        Specification<FileGenerateEntity> baseSpec = FileGenerateSpecificationBuilder.builder()
                .withGenerationStatusIds(statusIds)
                .withGeneratedAt(generatedAtDate)
                .withTypeId(typeId)
                .withDynamicFilter(fieldName, fieldValue, operation)
                .build();
        Specification<FileGenerateEntity> generatedBySpec = (generatedBy != null && !generatedBy.isBlank())
                ? (root, query, cb) -> cb.equal(root.get("generatedBy"), generatedBy)
                : null;

        Specification<FileGenerateEntity> participantSpec = (participantId != null)
                ? (root, query, cb) -> cb.equal(root.get("participant").get("id"), participantId)
                : null;

        List<Specification<FileGenerateEntity>> orSpecs = Stream.of(generatedBySpec, participantSpec)
                .filter(Objects::nonNull)
                .toList();

        if (orSpecs.isEmpty()) {
            return baseSpec;
        }

        Specification<FileGenerateEntity> userOrSpec = Specification.anyOf(orSpecs.toArray(new Specification[0]));

        return Specification.allOf(baseSpec, userOrSpec);
    }

    public static Specification<FileGenerateEntity> createParticipantFilter(Long participantId) {
        return FileGenerateSpecificationBuilder.builder()
                .withParticipantId(participantId)
                .build();
    }

    public static Specification<FileGenerateEntity> createStatusFilter(Long operationStatusId) {
        return FileGenerateSpecificationBuilder.builder()
                .withOperationStatusId(operationStatusId)
                .build();
    }

    public static Specification<FileGenerateEntity> createDateRangeFilter(LocalDateTime startDate,
            LocalDateTime endDate) {
        return FileGenerateSpecificationBuilder.builder()
                .withGeneratedAtRange(startDate, endDate)
                .build();
    }
}

```

## src/main/java/com/nubo/receipts/api/helpers/dynamicQuery/dataBase/MapperFileGenerateDynamicSearch.java

```java
package com.nubo.receipts.api.helpers.dynamicQuery.dataBase;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Map;
import java.util.function.Function;

import com.nubo.receipts.api.models.entity.FileGenerateEntity;
import com.nubo.receipts.api.models.enums.SearchOperationEnum;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.Path;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class MapperFileGenerateDynamicSearch {

    private enum ComparisonType {
        GREATER_THAN, GREATER_THAN_OR_EQUAL, LESS_THAN, LESS_THAN_OR_EQUAL
    }

    private static final Map<String, Function<Root<FileGenerateEntity>, Path<?>>> FIELD_PATH_MAPPING = Map.ofEntries(
            Map.entry("id", root -> root.get("id")),
            Map.entry("fileName", root -> root.get("fileName")),
            Map.entry("fileType", root -> root.get("fileType")),
            Map.entry("filePath", root -> root.get("filePath")),
            Map.entry("generatedAt", root -> root.get("generatedAt")),
            Map.entry("generatedBy", root -> root.get("generatedBy")),
            Map.entry("participantId", root -> root.get("participant").get("id")),
            Map.entry("participantName", root -> root.get("participant").get("name")),
            Map.entry("operationStatusId", root -> root.get("operationStatus").get("id")),
            Map.entry("operationStatusDescription", root -> root.get("operationStatus").get("description")),
            Map.entry("generationStatusId", root -> root.get("generationStatus").get("id")),
            Map.entry("generationStatusDescription", root -> root.get("generationStatus").get("description")),
            Map.entry("recordDate", root -> root.get("recordDate")),
            Map.entry("typeId", root -> root.get("type").get("id")),
            Map.entry("typeDescription", root -> root.get("type").get("description")));

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
            }));

    public static Path<?> getFileGenerateFieldPath(Root<FileGenerateEntity> root, String fieldName) {
        try {
            Function<Root<FileGenerateEntity>, Path<?>> pathFunction = FIELD_PATH_MAPPING.get(fieldName);
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

    public static Predicate buildFileGenerateFieldPredicate(CriteriaBuilder criteriaBuilder,
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

## src/main/java/com/nubo/receipts/api/models/domain/ReportData.java

```java
package com.nubo.receipts.api.models.domain;

import java.time.LocalDate;

import com.nubo.receipts.api.models.entity.CountryEntity;
import com.nubo.receipts.api.models.entity.ParticipantEntity;
import com.nubo.receipts.api.models.entity.UserNuboEntity;
import com.nubo.receipts.api.models.enums.StatusFilterOptionEnum;
import com.nubo.receipts.api.models.enums.TypeFilterOptionEnum;

public record ReportData(
        ParticipantEntity participantEntity,
        CountryEntity countryEntity,
        UserNuboEntity userNuboEntity,
        StatusFilterOptionEnum optionsStatus,
        TypeFilterOptionEnum optionType,
        LocalDate recordDate,
        String fileName) {
}

```

## src/main/java/com/nubo/receipts/api/models/domain/TradeSettlementReport.java

```java
package com.nubo.receipts.api.models.domain;

import com.nubo.receipts.api.models.entity.SettlementEntity;
import com.nubo.receipts.api.models.entity.TradeEntity;

public record TradeSettlementReport(
        TradeEntity trade,
        SettlementEntity settlement) {
}

```

## src/main/java/com/nubo/receipts/api/models/dto/request/CustodianReportFilterInDto.java

```java
package com.nubo.receipts.api.models.dto.request;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

import com.nubo.receipts.api.models.enums.FileTypeOptionEnum;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Filters for custodian detailed package report")
public class CustodianReportFilterInDto {

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    @Schema(description = "Package clearing date", example = "2026-06-01")
    private LocalDate packageClearingDate;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    @Schema(description = "Package creation date", example = "2026-06-18")
    private LocalDate packageCreationDate;

    @Schema(description = "Custodian code", example = "123")
    private String custodian;

    @Schema(description = "FIC administrator code", example = "112")
    private String fic;

    @Schema(description = "Package status", example = "ADMITIDO")
    private String packageStatus;

    @Schema(description = "Package number", example = "18062026123000001")
    private String packageNumber;

    @Schema(description = "Operation type", example = "REPO")
    private String operationType;

    @Schema(description = "Affiliate (corredor) numeric code; scopes external corredor reports to their own packages", example = "010")
    private String affiliate;

    @Builder.Default
    @Schema(description = "File type option", example = "CSV", defaultValue = "CSV")
    private FileTypeOptionEnum fileType = FileTypeOptionEnum.CSV;

    // Default applied in the getter, not a constructor, so it holds regardless of
    // which constructor Jackson picks for deserialization
    public FileTypeOptionEnum getFileType() {
        return fileType != null ? fileType : FileTypeOptionEnum.CSV;
    }

}

```

## src/main/java/com/nubo/receipts/api/models/dto/request/CustodianUpdatesReportFilterInDto.java

```java
package com.nubo.receipts.api.models.dto.request;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Filters for news report generation")
public class CustodianUpdatesReportFilterInDto {

    @NotNull(message = "Compliance date is mandatory")
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    @Schema(description = "Compliance date of packages (YYYY-MM-DD)", example = "2026-06-21", requiredMode = Schema.RequiredMode.REQUIRED)
    private LocalDate complianceDate;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    @Schema(description = "Package creation date (YYYY-MM-DD)", example = "2026-06-19")
    private LocalDate packageCreationDate;

    @NotBlank(message = "Custodian code is mandatory")
    @Schema(description = "Custodian code from active custodians list", example = "007", requiredMode = Schema.RequiredMode.REQUIRED)
    private String custodian;

    @Schema(description = "Affiliated participant code", example = "AFI123")
    private String affiliatedCode;

    @Schema(description = "Package number", example = "18062026123000001")
    private String packageNumber;

    @Schema(description = "Operation side", example = "COMPRA", allowableValues = { "COMPRA", "VENTA" })
    @Pattern(regexp = "^(?i)(COMPRA|VENTA)$", message = "Side must be COMPRA or VENTA")
    private String side;

    @Pattern(regexp = "^(?i)(S|T|SIN\s+SOLICITUD|TRASLADADA|PRE-?MATCH|ADMITIDA|ADMITTED|RECHAZADA|REJECTED|ALL|TODOS)$", message = "Status must be one of: S, T, SIN SOLICITUD, TRASLADADA, PRE-MATCH, ADMITIDA, RECHAZADA, TODOS")
    @Schema(description = "Event status", example = "ADMITIDA", allowableValues = {
            "S", "T", "SIN SOLICITUD", "TRASLADADA", "PRE-MATCH", "ADMITIDA", "RECHAZADA", "TODOS" })
    private String status;
}

```

## src/main/java/com/nubo/receipts/api/models/dto/request/FileGenerateHistoryInDto.java

```java
package com.nubo.receipts.api.models.dto.request;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

import com.nubo.receipts.api.models.enums.TimeZoneEnum;
import com.nubo.receipts.api.models.enums.TypeFilterOptionEnum;

import io.swagger.v3.oas.annotations.media.Schema;
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
public class FileGenerateHistoryInDto {

    @Builder.Default
    @Schema(description = "Page number (0-indexed)", example = "0", defaultValue = "0")
    @Min(0)
    private int page = 0;

    @Builder.Default
    @Schema(description = "Page size", example = "10", defaultValue = "10", minimum = "1")
    @Min(1)
    private int size = 10;

    @Builder.Default
    @Schema(description = "Sort field", example = "generatedAt", defaultValue = "generatedAt")
    private String sort = "generatedAt";

    @Builder.Default
    @Schema(description = "Sort order (asc or desc)", example = "asc", defaultValue = "asc", allowableValues = { "asc",
            "desc" })
    private String order = "asc";

    @Schema(description = "Participant ID", example = "123")
    private Long participantId;

    @NotNull
    @Schema(description = "Type of report", example = "LIQUIDA_HISTORICO")
    private TypeFilterOptionEnum typeReport;

    @Schema(description = "Generation date", example = "2026-06-30")
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate generateAt;

    @Builder.Default
    @Schema(description = "Time zone", example = "COLOMBIA_STANDARD_TIME", defaultValue = "COLOMBIA_STANDARD_TIME")
    private TimeZoneEnum timeZone = TimeZoneEnum.COLOMBIA_STANDARD_TIME;

}

```

## src/main/java/com/nubo/receipts/api/models/dto/request/FileIndividualInDto.java

```java
package com.nubo.receipts.api.models.dto.request;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.nubo.receipts.api.models.enums.MarketEnum;
import com.nubo.receipts.api.models.enums.OperationTypeEnum;
import com.nubo.receipts.api.models.enums.VoucherTypeEnum;

import io.swagger.v3.oas.annotations.media.Schema;
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
@Schema(description = "Request for generating individual settlement file")
public class FileIndividualInDto {

    @NotNull
    private String participantCode;

    @Builder.Default
    private String countryCode = "CO";

    @Schema(description = "Market type", example = "RV")
    private MarketEnum market;

    @Schema(description = "Type of operation", example = "CONTADO")
    private OperationTypeEnum operationType;

    @NotNull
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Schema(description = "Registration date", example = "2026-01-02")
    private LocalDate matchDate;

    @NotNull
    @Schema(description = "Folio reference number", example = "100000004")
    private Long matchId;

    @JsonFormat(pattern = "yyyy-MM-dd")
    @Schema(description = "Settlement date", example = "2026-02-01")
    private LocalDate settlementDate;

    @NotNull
    @Schema(description = "Type of voucher to generate", example = "ARCHIVO_LIQUIDA")
    private VoucherTypeEnum voucherType;

    @Builder.Default
    @Schema(description = "Page number (0-indexed)", example = "0", defaultValue = "0")
    @Min(0)
    private int page = 0;

    @Builder.Default
    @Schema(description = "Page size", example = "10", defaultValue = "10", minimum = "1", maximum = "100")
    @Min(1)
    @Max(100)
    private int size = 10;

    @Builder.Default
    @Schema(description = "Sort field", example = "matchDate", defaultValue = "matchDate")
    private String sort = "matchDate";

    @Builder.Default
    @Schema(description = "Sort order (asc or desc)", example = "asc", defaultValue = "asc", allowableValues = { "asc",
            "desc" })
    private String order = "asc";
}

```

## src/main/java/com/nubo/receipts/api/models/dto/request/FileMassiveInDto.java

```java
package com.nubo.receipts.api.models.dto.request;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.nubo.receipts.api.models.enums.MarketEnum;
import com.nubo.receipts.api.models.enums.OperationTypeEnum;
import com.nubo.receipts.api.models.enums.VoucherTypeEnum;

import io.swagger.v3.oas.annotations.media.Schema;
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
@Schema(description = "Request for generating massive settlement file")
public class FileMassiveInDto {

    @NotNull
    private String participantCode;

    @Builder.Default
    private String countryCode = "CO";

    @Schema(description = "Market type", example = "RV")
    private MarketEnum market;

    @Schema(description = "Type of operation", example = "CONTADO")
    private OperationTypeEnum operationType;

    @NotNull
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Schema(description = "Initial date", example = "2026-01-02")
    private LocalDate startMatchDate;

    @NotNull
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Schema(description = "Final date", example = "2026-02-02")
    private LocalDate endMatchDate;

    @NotNull
    @Schema(description = "Type of voucher to generate", example = "ARCHIVO_LIQUIDA")
    private VoucherTypeEnum voucherType;

    @Builder.Default
    @Schema(description = "Page number (0-indexed)", example = "0", defaultValue = "0")
    @Min(0)
    private int page = 0;

    @Builder.Default
    @Schema(description = "Page size", example = "10", defaultValue = "10", minimum = "1", maximum = "100")
    @Min(1)
    @Max(100)
    private int size = 10;

    @Builder.Default
    @Schema(description = "Sort field", example = "matchDate", defaultValue = "matchDate")
    private String sort = "matchDate";

    @Builder.Default
    @Schema(description = "Sort order (asc or desc)", example = "asc", defaultValue = "asc", allowableValues = { "asc",
            "desc" })
    private String order = "asc";
}

```

## src/main/java/com/nubo/receipts/api/models/dto/request/NotificationRequestDto.java

```java
package com.nubo.receipts.api.models.dto.request;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import tools.jackson.databind.JsonNode;

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

## src/main/java/com/nubo/receipts/api/models/dto/request/SideOperationInDto.java

```java
package com.nubo.receipts.api.models.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SideOperationInDto {

    @NotNull
    private String sideId;

}

```

## src/main/java/com/nubo/receipts/api/models/dto/request/TradeOperationInDto.java

```java
package com.nubo.receipts.api.models.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TradeOperationInDto {

    @NotNull
    private Long tradeId;

}

```

## src/main/java/com/nubo/receipts/api/models/dto/request/VoucherFiltersDto.java

```java
package com.nubo.receipts.api.models.dto.request;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.nubo.receipts.api.models.enums.VoucherTypeEnum;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class VoucherFiltersDto {

    @JsonProperty("market")
    private String market;

    @JsonProperty("operationType")
    private String operationType;

    @NotNull(message = "Registration date is required")
    @JsonProperty("registrationDate")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate registrationDate;

    @JsonProperty("referenceNumber")
    private String referenceNumber;

    @NotNull(message = "Voucher type is required")
    @JsonProperty("voucherType")
    private VoucherTypeEnum voucherType;
}

```

## src/main/java/com/nubo/receipts/api/models/dto/response/ApiClientCauseDto.java

```java
package com.nubo.receipts.api.models.dto.response;

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
public class ApiClientCauseDto {

    private String causeCode;
    private String code;
    private String message;
    private CauseType type;
}

```

## src/main/java/com/nubo/receipts/api/models/dto/response/CauseType.java

```java
package com.nubo.receipts.api.models.dto.response;

public enum CauseType {
    BUSINESS,
    TECHNICAL
}

```

## src/main/java/com/nubo/receipts/api/models/dto/response/CustodianReport/CustodianReportPageOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.CustodianReport;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CustodianReportPageOutDto
{

    private List<CustodianReportRowOutDto> content;
    private Long totalElements;
    private Integer totalPages;
    private Integer pageSize;
    private Integer pageNumber;
}

```

## src/main/java/com/nubo/receipts/api/models/dto/response/CustodianReport/CustodianReportRowOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.CustodianReport;

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
public class CustodianReportRowOutDto
{

    private LocalDate processDate;
    private String processTime;

    private LocalDate creationDate;
    private LocalDate transferDate;
    private LocalDate admissionDate;
    private LocalDate clearingOutDate;
    private String clearingReturnDate;

    private String mnemonic;
    private String isin;
    private String market;
    private String packetCode;
    private String referenceCode;
    private String operationStatus;
    private String side;
    private String operationType;

    private String affiliate;
    private String custodian;
    private String administrator;
    private String investorIdentificationType;
    private String investorDocument;
    private String investorName;
    private String investorAccount;
    private String depository;
    private String affiliateName;
    private String custodianName;
    private String administratorName;

    private LocalDate registerDate;
    private Long folio;
    private Integer fraction;
    private LocalDate clearingDate;
    private String returnDate;

    private BigDecimal quantity;
    private BigDecimal price;
    private String rate;
    private BigDecimal grossOutValue;
}

```

## src/main/java/com/nubo/receipts/api/models/dto/response/PageResponseOutDto.java

```java
package com.nubo.receipts.api.models.dto.response;

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
                "contentType="
                + (content != null && !content.isEmpty() ? content.get(0).getClass().getSimpleName() : "empty") +
                ", pageSize=" + pageSize +
                ", pageNumber=" + pageNumber +
                ", totalElements=" + totalElements +
                ", totalPages=" + totalPages +
                '}';
    }
}

```

## src/main/java/com/nubo/receipts/api/models/dto/response/ReportOutDto.java

```java
package com.nubo.receipts.api.models.dto.response;

import java.time.ZonedDateTime;

import com.fasterxml.jackson.annotation.JsonFormat;
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
public class ReportOutDto {

    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSXXX")
    private ZonedDateTime startGenerateDateTime;

    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSXXX")
    private ZonedDateTime endGenerateDateTime;

    private Long totalFiles;

}

```

## src/main/java/com/nubo/receipts/api/models/dto/response/SettlementFileResponseDto.java

```java
package com.nubo.receipts.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
@Schema(description = "Response for settlement file generation request")
public class SettlementFileResponseDto {

    @JsonProperty("Fecha de registro")
    @JsonFormat(pattern = "yyyy/MM/dd")
    @Schema(description = "Registration date", example = "2026/01/02")
    private String registrationDate;

    @JsonProperty("Folio")
    @Schema(description = "Reference number", example = "00001")
    private Long referenceNumber;

    @JsonProperty("Punta")
    @Schema(description = "Operation side", example = "Compra")
    private String operationSide;

    @JsonProperty("Generación de archivo")
    @Schema(description = "Indicates if file generation was successful", example = "true")
    private boolean fileGenerated;

    @JsonProperty("Causal")
    @Schema(description = "Rejection reason when file generation failed", example = "Fuera del horario")
    private String causal;
}

```

## src/main/java/com/nubo/receipts/api/models/dto/response/SettlementReport/FileGenerateDto.java

```java
package com.nubo.receipts.api.models.dto.response.SettlementReport;

import java.time.LocalDate;
import java.time.OffsetDateTime;

import com.nubo.receipts.api.models.dto.response.massive.CountryPlaneOutDto;
import com.nubo.receipts.api.models.dto.response.massive.SmallParticipantOutDto;
import com.nubo.receipts.api.models.dto.response.massive.StatusPlaneOutDto;
import com.nubo.receipts.api.models.dto.response.massive.TypePlaneOutDto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class FileGenerateDto {

    private Long id;

    private String fileName;

    private String fileType;

    private String filePath;

    private OffsetDateTime generatedAt;

    private String generatedBy;

    private StatusPlaneOutDto operationStatus;

    private StatusPlaneOutDto generationStatus;

    private SmallParticipantOutDto participant;

    private CountryPlaneOutDto country;

    private TypePlaneOutDto type;

    private Long totalTrades;

    private Integer fileConsecutive;

    private String message;

    private LocalDate reportDate;

}

```

## src/main/java/com/nubo/receipts/api/models/dto/response/massive/AfpFundPlaneOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.massive;

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
public class AfpFundPlaneOutDto {

    private Long id;

    private String description;

}


```

## src/main/java/com/nubo/receipts/api/models/dto/response/massive/CfiPlaneOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.massive;

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
public class CfiPlaneOutDto {

    private String id;

    private String description;

}
```

## src/main/java/com/nubo/receipts/api/models/dto/response/massive/CityPlaneOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.massive;

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
public class CityPlaneOutDto {

    private Long id;

    private String description;

}

```

## src/main/java/com/nubo/receipts/api/models/dto/response/massive/ClassPlaneOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.massive;

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
public class ClassPlaneOutDto {

    private Long id;

    private String description;

    private String category;

}


```

## src/main/java/com/nubo/receipts/api/models/dto/response/massive/CountryPlaneOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.massive;

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
public class CountryPlaneOutDto {

    private Long id;

    private String code;

    private String name;

    private CurrencyPlaneOutDto currency;

    private String timeZone;

}


```

## src/main/java/com/nubo/receipts/api/models/dto/response/massive/CurrencyPlaneOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.massive;

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
public class CurrencyPlaneOutDto {

    private Long id;

    private String code;

    private String name;
}

```

## src/main/java/com/nubo/receipts/api/models/dto/response/massive/DepartmentPlaneOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.massive;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class DepartmentPlaneOutDto {

    private String id;

    private String description;

}

```

## src/main/java/com/nubo/receipts/api/models/dto/response/massive/DepositoryPlaneOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.massive;

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
public class DepositoryPlaneOutDto {

    private String id;

    private String description;

}
```

## src/main/java/com/nubo/receipts/api/models/dto/response/massive/ExchangeRatePlaneOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.massive;

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
public class ExchangeRatePlaneOutDto {

    private CurrencyPlaneOutDto baseCurrency;

    private LocalDate validityDate;

    private CurrencyPlaneOutDto conversionCurrency;

    private BigDecimal conversionValue;

    private LocalDate recordDate;

}

```

## src/main/java/com/nubo/receipts/api/models/dto/response/massive/GicsPlaneOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.massive;

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
public class GicsPlaneOutDto {

    private Long id;

    private String description;

}

```

## src/main/java/com/nubo/receipts/api/models/dto/response/massive/IdentificationTypePlaneOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.massive;

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
public class IdentificationTypePlaneOutDto {

    private Long id;

    private String code;

    private String description;

}

```

## src/main/java/com/nubo/receipts/api/models/dto/response/massive/InvestorAccountPlaneOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.massive;

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
public class InvestorAccountPlaneOutDto {

    private Long id;

    private Long investorId;

    private String accountNumber;

    private StatusPlaneOutDto status;

    private TypePlaneOutDto type;

    private DepositoryPlaneOutDto depository;

    private Long participantId;

}
```

## src/main/java/com/nubo/receipts/api/models/dto/response/massive/InvestorPlaneOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.massive;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class InvestorPlaneOutDto {

    private Long id;

    private String code;

    private String fullName;

    private String firstName;

    private String lastName;

    private String companyName;

    private TypePlaneOutDto type;

    private StatusPlaneOutDto status;

    private CountryPlaneOutDto country;

    private DepartmentPlaneOutDto department;

    private CityPlaneOutDto city;

    private String documentNumber;

    private IdentificationTypePlaneOutDto identificationType;

    private String nationality;

    private String address;

    private String phoneNumber;

    private String email;

    private String clearinghouseCode;

    private GicsPlaneOutDto gics;

    private String moneyLaunderingFlag;

    private TaxStatusPlaneOutDto taxStatus;

}

```

## src/main/java/com/nubo/receipts/api/models/dto/response/massive/IssuerPlaneOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.massive;

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
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class IssuerPlaneOutDto {

    private Long id;

    private String code;

    private String name;

    private String shortName;

    private TypePlaneOutDto type;

    private CountryPlaneOutDto country;

    private GicsPlaneOutDto gics;

    private LocalDate dateEntry;

    private CountryPlaneOutDto countryOrigin;

    private String cusip;

    private String taxCode;

    private StatusPlaneOutDto status;

    private LocalDate withdrawalDate;

    private String mainMarket;

    private String regulatorCode;

    private DepositoryPlaneOutDto depository;

    private String dvlCode;

}

```

## src/main/java/com/nubo/receipts/api/models/dto/response/massive/MarketPlaneOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.massive;

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
public class MarketPlaneOutDto {

    private String id;

    private String description;

    private String category;

}
```

## src/main/java/com/nubo/receipts/api/models/dto/response/massive/ParticipantAccountPlaneOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.massive;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class ParticipantAccountPlaneOutDto {

    private Long id;

    private ParticipantPlaneOutDto participant;

    private String accountNumber;

    private StatusPlaneOutDto status;

    private TypePlaneOutDto type;

}

```

## src/main/java/com/nubo/receipts/api/models/dto/response/massive/ParticipantPlaneOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.massive;

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
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class ParticipantPlaneOutDto {

    private Long id;

    private String code;

    private String documentNumber;

    private IdentificationTypePlaneOutDto identificationType;

    private String name;

    private String shortName;

    private TypePlaneOutDto type;

    private String mnemonic;

    private CountryPlaneOutDto country;

    private LocalDate registrationDate;

    private String taxCode;

    private DepartmentPlaneOutDto department;

    private String mainAddress;

    private String webPage;

    private String phoneNumber;

    private StatusPlaneOutDto status;

    private String nitClearingHouse;

    private TaxStatusPlaneOutDto taxStatus;

    private String typeEntity;

    private String marginAccount;

    private String masterAccount;

    private String directAllocation;

    private String marketMaker;

    private Boolean enabled;

    private Boolean custodian;

}

```

## src/main/java/com/nubo/receipts/api/models/dto/response/massive/ReceiptFileOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.massive;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ReceiptFileOutDto
{

    private Long fileGenerateId;

    private List<ReceiptSettlementPlaneOutDto> totalSettlements;
}

```

## src/main/java/com/nubo/receipts/api/models/dto/response/massive/ReceiptSettlementPlaneOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.massive;

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
public class ReceiptSettlementPlaneOutDto {

    private SettlementPlaneOutDto settlement;

    private TradePlaneOutDto trade;

    private SecurityTitlePlaneOutDto securityTitle;

    private InvestorPlaneOutDto investor;

    private ParticipantPlaneOutDto participant;

    private ParticipantPlaneOutDto participantBuy;

    private ParticipantPlaneOutDto participantSell;

    private String userName;

    private LocalDate generationDate;

}

```

## src/main/java/com/nubo/receipts/api/models/dto/response/massive/SecurityTitlePlaneOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.massive;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class SecurityTitlePlaneOutDto {

    private Long id;

    private MarketPlaneOutDto market;

    private String equityCode;

    private String mnemonic;

    private String specieDescription;

    private String isin;

    private CfiPlaneOutDto cfi;

    private Integer currencyId;

    private String settlementPeriod;

    private LocalDateTime listingDate;

    private LocalDate delistingDate;

    private Boolean parent;

    private Long parentId;

    private StatusPlaneOutDto status;

    private IssuerPlaneOutDto issuer;

    private Integer countryId;

    private BigInteger amountIssued;

    private ClassPlaneOutDto classPlaneOutDto;

    private Integer segmentId;

    private String category;

    private DepositoryPlaneOutDto depository;

    private BigDecimal punishmentRepo;

    private String regulatoryCode;

}
```

## src/main/java/com/nubo/receipts/api/models/dto/response/massive/SettlementPlaneOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.massive;

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
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class SettlementPlaneOutDto {

    private Long tradeId;

    private Integer fraction;

    private SidePlaneOutDto side;

    private InvestorPlaneOutDto investor;

    private InvestorAccountPlaneOutDto investorAccount;

    private ParticipantAccountPlaneOutDto participantAccount;

    private BigDecimal fractionQuantity;

    private BigDecimal fractionVolume;

    private String fiduciarySpecialist;

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

    private BigDecimal repoRate;

    private BigDecimal repoAmount;

    private BigDecimal latePenality;

    private BigDecimal fundingAmount;

    private BigDecimal netOutFlowTotal;

    private BigDecimal outFlowTurnoverValue;

    private BigDecimal returnTurnoverValue;

    private BigDecimal deliveryVersusPaymentValue;

    private Long tradingSystemId;

    private StatusPlaneOutDto status;

    private BigDecimal brokerageService;

    private Long custodianId;

    private BigDecimal netValTax;

}
```

## src/main/java/com/nubo/receipts/api/models/dto/response/massive/SidePlaneOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.massive;

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
public class SidePlaneOutDto {

    private String id;

    private String description;

}
```

## src/main/java/com/nubo/receipts/api/models/dto/response/massive/SmallParticipantOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.massive;

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
public class SmallParticipantOutDto
{

    private Long id;

    private String code;

    private String name;

    private String shortName;

}

```

## src/main/java/com/nubo/receipts/api/models/dto/response/massive/SpecialTradePlaneOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.massive;

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
public class SpecialTradePlaneOutDto {

    private Long id;

    private LocalDate recordDate;

    private String specialOperationId;

    private LocalDate settlementDate;

    private Integer daysToSettlement;

    private String specialOperationName;

    private String issuanceMarketId;

    private Long countryId;

    private Long typeId;

    private Long securityId;

    private String depositoryId;

    private String sideId;

    private Long statusId;

    private Long participantId;

    private Long directDepositor;

    private Long clientOperator;

    private Long afpFundId;

    private BigDecimal totalAmount;

    private BigDecimal totalAmountLocal;

    private Long currencyId;

    private Long exchangeRateId;

    private BigDecimal price;

    private BigDecimal localCurrencyPrice;

    private BigDecimal quantity;

    private Integer numberFolios;

    private Boolean fractionalMark;

    private CurrencyPlaneOutDto currencyPlaneOutDto;

    private MarketPlaneOutDto marketPlaneOutDto;

    private MarketPlaneOutDto issuanceMarketPlaneOutDto;

    private CountryPlaneOutDto countryPlaneOutDto;

    private TypePlaneOutDto typePlaneOutDto;

    private SecurityTitlePlaneOutDto securityTitlePlaneOutDto;

    private DepositoryPlaneOutDto depositoryPlaneOutDto;

    private SidePlaneOutDto sidePlaneOutDto;

    private StatusPlaneOutDto statusPlaneOutDto;

    private ParticipantPlaneOutDto participantPlaneOutDto;

    private ParticipantPlaneOutDto directDepositorOutDto;

    private ParticipantPlaneOutDto clientOperatorOutDto;

    private AfpFundPlaneOutDto afpFundPlaneOutDto;

    private ExchangeRatePlaneOutDto exchangeRatePlaneOutDto;

    private DepositoryPlaneOutDto clientSettlementAgentOutDto;

}

```

## src/main/java/com/nubo/receipts/api/models/dto/response/massive/StatusPlaneOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.massive;

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
public class StatusPlaneOutDto {

    private Long id;

    private String description;

    private String category;

    private String detail;

}
```

## src/main/java/com/nubo/receipts/api/models/dto/response/massive/TaxStatusPlaneOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.massive;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class TaxStatusPlaneOutDto {

    private Long id;

    private String description;

}

```

## src/main/java/com/nubo/receipts/api/models/dto/response/massive/TradePlaneOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.massive;

import com.fasterxml.jackson.annotation.JsonInclude;
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
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class TradePlaneOutDto {

    private Long id;

    private LocalDate matchDate;

    private Long matchId;

    private LocalDate clearingDate;

    private LocalDate returnClearingDate;

    private DepositoryPlaneOutDto depository;

    private CountryPlaneOutDto country;

    private TypePlaneOutDto type;

    private MarketPlaneOutDto market;

    private SecurityTitlePlaneOutDto securityTitle;

    private ParticipantPlaneOutDto participantBuy;

    private ParticipantPlaneOutDto participantSell;

    private ParticipantPlaneOutDto custodianBuy;

    private ParticipantPlaneOutDto custodianSell;

    private Boolean assignmentMarkBuy;

    private Boolean assignmentMarkSell;

    private Boolean fractionalMarkBuy;

    private Boolean fractionalMarkSell;

    private Integer advanceStatus;

    private Boolean exitIndicatorSettlement;

    private Boolean returnIndicatorSettlement;

    private Boolean canceledStatus;

    private BigDecimal quantity;

    private BigDecimal price;

    private BigDecimal volume;

    private BigDecimal volumeLocalPrice;

    private BigDecimal repurchaseRate;

    private BigDecimal repurchaseAmount;

    private StatusPlaneOutDto status;

    private LocalDateTime matchTime;

    private Boolean ownPositionSell;

    private Boolean ownPositionBuy;

    private CurrencyPlaneOutDto currency;

    private TradingSystemPlaneOutDto tradingSystem;

    private TradingSessionPlaneOutDto tradingSession;

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

    private TypePlaneOutDto businessType;

    private TypePlaneOutDto marketType;

    private TypePlaneOutDto originType;

    private SpecialTradePlaneOutDto specialTrade;

    private TypePlaneOutDto paymentType;

    private TypePlaneOutDto settlementType;

    private StatusPlaneOutDto custodianStatus;

    private StatusPlaneOutDto settlementStatus;

    private StatusPlaneOutDto bloquingStatus;

    private Boolean salesGuarantee;

    private Boolean purchaseGuarantee;

    private Boolean purchasePaymentIndicator;

}
```

## src/main/java/com/nubo/receipts/api/models/dto/response/massive/TradingSessionPlaneOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.massive;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class TradingSessionPlaneOutDto {

    private String id;

    private String description;

}

```

## src/main/java/com/nubo/receipts/api/models/dto/response/massive/TradingSystemPlaneOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.massive;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class TradingSystemPlaneOutDto {

    private Long id;

    private String description;

}

```

## src/main/java/com/nubo/receipts/api/models/dto/response/massive/TypePlaneOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.massive;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class TypePlaneOutDto {

    private Long id;

    private String description;

    private String category;

}

```

## src/main/java/com/nubo/receipts/api/models/dto/response/pdf/CfiOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.pdf;

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
public class CfiOutDto {

    private String id;

    private String description;

}
```

## src/main/java/com/nubo/receipts/api/models/dto/response/pdf/CityOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.pdf;

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

## src/main/java/com/nubo/receipts/api/models/dto/response/pdf/CountryOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.pdf;

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
public class CountryOutDto {

    private Long id;

    private String code;

    private String name;

    private CurrencyOutDto currency;

    private String timeZone;

}


```

## src/main/java/com/nubo/receipts/api/models/dto/response/pdf/CurrencyOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.pdf;

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
public class CurrencyOutDto {

    private Long id;

    private String code;

    private String name;
}

```

## src/main/java/com/nubo/receipts/api/models/dto/response/pdf/DepartmentOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.pdf;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class DepartmentOutDto {

    private String id;

    private String description;

}

```

## src/main/java/com/nubo/receipts/api/models/dto/response/pdf/DepositoryOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.pdf;

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
public class DepositoryOutDto {

    private String id;

    private String description;

}
```

## src/main/java/com/nubo/receipts/api/models/dto/response/pdf/GicsOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.pdf;

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

## src/main/java/com/nubo/receipts/api/models/dto/response/pdf/IdentificationTypeOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.pdf;

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

    private String description;

    private String code;

}

```

## src/main/java/com/nubo/receipts/api/models/dto/response/pdf/InvestorAccountOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.pdf;

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
public class InvestorAccountOutDto {

    private Long id;

    private Long investorId;

    private String accountNumber;

    private StatusOutDto status;

    private TypeOutDto type;

    private DepositoryOutDto depository;

    private Long participantId;

}
```

## src/main/java/com/nubo/receipts/api/models/dto/response/pdf/InvestorOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.pdf;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class InvestorOutDto {

    private Long id;

    private String code;

    private String fullName;

    private String firstName;

    private String lastName;

    private String companyName;

    private TypeOutDto type;

    private StatusOutDto status;

    private CountryOutDto country;

    private DepartmentOutDto department;

    private CityOutDto city;

    private String documentNumber;

    private IdentificationTypeOutDto identificationType;

    private String nationality;

    private String address;

    private String phoneNumber;

    private String email;

    private String clearinghouseCode;

    private GicsOutDto gics;

    private String moneyLaunderingFlag;

    private TaxStatusOutDto taxStatus;

}

```

## src/main/java/com/nubo/receipts/api/models/dto/response/pdf/MarketOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.pdf;

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
public class MarketOutDto {

    private String id;

    private String description;
}
```

## src/main/java/com/nubo/receipts/api/models/dto/response/pdf/ParticipantAccountOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.pdf;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class ParticipantAccountOutDto {

    private Long id;

    private ParticipantOutDto participant;

    private String accountNumber;

    private StatusOutDto status;

    private TypeOutDto type;

}

```

## src/main/java/com/nubo/receipts/api/models/dto/response/pdf/ParticipantOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.pdf;

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
@JsonInclude(JsonInclude.Include.NON_EMPTY)
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

    private DepartmentOutDto department;

    private String mainAddress;

    private String webPage;

    private String phoneNumber;

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

## src/main/java/com/nubo/receipts/api/models/dto/response/pdf/ReceiptSettlementOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.pdf;

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
public class ReceiptSettlementOutDto {

    private SettlementOutDto settlement;

    private TradeOutDto trade;

    private SecurityTitleOutDto securityTitle;

    private InvestorOutDto investor;

    private ParticipantOutDto participant;

    private ParticipantOutDto participantBuy;

    private ParticipantOutDto participantSell;

    private String userName;

}

```

## src/main/java/com/nubo/receipts/api/models/dto/response/pdf/SecurityTitleOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.pdf;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class SecurityTitleOutDto {

    private Long id;

    private MarketOutDto market;

    private String equityCode;

    private String mnemonic;

    private String specieDescription;

    private String isin;

    private CfiOutDto cfi;

    private Integer currencyId;

    private String settlementPeriod;

    private LocalDateTime listingDate;

    private LocalDate delistingDate;

    private Boolean parent;

    private Long parentId;

    private StatusOutDto status;

    private Integer issuerId;

    private Integer countryId;

    private BigInteger amountIssued;

    private String classId;

    private Integer segmentId;

    private String category;

    private DepositoryOutDto depository;

    private BigDecimal punishmentRepo;

    private String regulatoryCode;
}
```

## src/main/java/com/nubo/receipts/api/models/dto/response/pdf/SettlementOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.pdf;

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
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class SettlementOutDto {

    private Long tradeId;

    private Integer fraction;

    private SideOutDto side;

    private InvestorOutDto investor;

    private InvestorAccountOutDto investorAccount;

    private ParticipantAccountOutDto participantAccount;

    private BigDecimal fractionQuantity;

    private BigDecimal fractionVolume;

    private String fiduciarySpecialist;

    private BigDecimal commissionPercentage;

    private BigDecimal commissionAmount;

    private BigDecimal valTax;

    private BigDecimal valTaxAmount;

    private BigDecimal withholdingTax;

    private BigDecimal withholdingTaxAmount;

    private BigDecimal netAmount;

    private BigDecimal transferValue;

    private Boolean issuedReceipt;

    private String issuedReceiptNumberPrevious;

    private String issuedReceiptNumber;

    private BigDecimal referenceAllocId;

    private BigDecimal repoRate;

    private BigDecimal repoAmount;

    private BigDecimal latePenality;

    private BigDecimal fundingAmount;

    private BigDecimal netOutFlowTotal;

    private BigDecimal outFlowTurnoverValue;

    private BigDecimal returnTurnoverValue;

    private BigDecimal deliveryVersusPaymentValue;

    private Long tradingSystemId;

    private StatusOutDto status;

    private BigDecimal brokerageService;

    private Long custodianId;

    private BigDecimal netValTax;

}
```

## src/main/java/com/nubo/receipts/api/models/dto/response/pdf/SideOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.pdf;

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
public class SideOutDto {

    private String id;

    private String description;

}
```

## src/main/java/com/nubo/receipts/api/models/dto/response/pdf/StatusOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.pdf;

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
public class StatusOutDto {

    private Integer id;

    private String description;

    private String category;

}
```

## src/main/java/com/nubo/receipts/api/models/dto/response/pdf/TaxStatusOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.pdf;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class TaxStatusOutDto {

    private Long id;

    private String description;

}

```

## src/main/java/com/nubo/receipts/api/models/dto/response/pdf/TradeOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.pdf;

import com.fasterxml.jackson.annotation.JsonInclude;
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
@JsonInclude(JsonInclude.Include.NON_EMPTY)
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

    private Boolean returnIndicatorSettlement;

    private Boolean canceledStatus;

    private BigDecimal quantity;

    private BigDecimal price;

    private BigDecimal volume;

    private BigDecimal repurchaseRate;

    private BigDecimal repurchaseAmount;

    private StatusOutDto status;

    private LocalDateTime matchTime;

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

    private Long specialTradeId;
}
```

## src/main/java/com/nubo/receipts/api/models/dto/response/pdf/TradingSessionOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.pdf;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class TradingSessionOutDto {

    private String id;

    private String description;

}

```

## src/main/java/com/nubo/receipts/api/models/dto/response/pdf/TradingSystemOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.pdf;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class TradingSystemOutDto {

    private Long id;

    private String description;

}

```

## src/main/java/com/nubo/receipts/api/models/dto/response/pdf/TypeOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.pdf;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class TypeOutDto {

    private Long id;

    private String description;

    private String category;

}

```

## src/main/java/com/nubo/receipts/api/models/dto/response/voucher/LiquidaFileOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.voucher;


import java.math.BigDecimal;

import com.nubo.receipts.api.application.annotations.PadLeft.Direction;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.nubo.receipts.api.application.annotations.FixedDecimal;
import com.nubo.receipts.api.application.annotations.PadLeft;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class LiquidaFileOutDto {

    @PadLeft(length = 8)
    @JsonProperty("fechaGrabacion")
    private String recordingDate;

    @PadLeft(length = 8)
    @JsonProperty("horaGrabacion")
    private String recordingTime;

    @PadLeft(length = 8, padChar = '0')
    @JsonProperty("fechaOperacion")
    private String operationDate;

    @PadLeft(length = 9, padChar = '0')
    @JsonProperty("numeroOperacion")
    private Long operationNumber;

    @PadLeft(length = 3, padChar = '0')
    @JsonProperty("secuenciaFraccion")
    private Integer sequenceNumber;

    @PadLeft(length = 1)
    @JsonProperty("puntaOperacion")
    private String operationSide;

    @PadLeft(length = 1)
    @JsonProperty("tipoOperacion")
    private String transactionType;

    @PadLeft(length = 1)
    @JsonProperty("mercado")
    private String marketType;

    @PadLeft(length = 10, direction = Direction.RIGHT)
    @JsonProperty("nemotecnicoEspecie")
    private String securityMnemonic;

    @PadLeft(length = 3, padChar = '0')
    @JsonProperty("codigoAfiliadoComprador")
    private String buyerAffiliateCode;

    @PadLeft(length = 3, padChar = '0')
    @JsonProperty("codigoAfiliadoVendedor")
    private String sellerAffiliateCode;

    @PadLeft(length = 3)
    @JsonProperty("codigoOperadorComprador")
    private String buyerOperatorCode;

    @PadLeft(length = 3)
    @JsonProperty("codigoOperadorVendedor")
    private String sellerOperatorCode;

    @FixedDecimal(integerDigits = 15)
    @JsonProperty("cantidadValorNominal")
    private BigDecimal quantity;

    @PadLeft(length = 5, padChar = '0')
    @JsonProperty("diasAlVencimiento")
    private Integer daysToMaturity;

    @FixedDecimal(integerDigits = 3, decimalDigits = 3)
    @JsonProperty("porcentajePrecio")
    private BigDecimal pricePercentage;

    @FixedDecimal(integerDigits = 10, decimalDigits = 4, showSign = true)
    @JsonProperty("porcentajeTasa")
    private BigDecimal interestRatePercent;

    @FixedDecimal(integerDigits = 16)
    @JsonProperty("monto")
    private BigDecimal transactionAmount;

    @FixedDecimal(integerDigits = 10)
    @JsonProperty("precioUnitario")
    private BigDecimal unitPriceAmount;

    @PadLeft(length = 8, padChar = '0')
    @JsonProperty("fechaEmision")
    private String fixedIncomeIssueDate;

    @PadLeft(length = 8, padChar = '0')
    @JsonProperty("fechaVencimiento")
    private String fixedIncomeMaturityDate;

    @PadLeft(length = 5, padChar = '0')
    @JsonProperty("plazoEmision")
    private Integer issuanceTermDays;

    @PadLeft(length = 1)
    @JsonProperty("tasaReferencia")
    private String referenceRateCode;

    @FixedDecimal(integerDigits = 10, decimalDigits = 4, showSign = true)
    @JsonProperty("puntosAjusteTasaReferencia")
    private BigDecimal adjustmentPointsValue;

    @FixedDecimal(integerDigits = 10, decimalDigits = 4, showSign = true)
    @JsonProperty("tasaEmision")
    private BigDecimal issuanceRateValue;

    @PadLeft(length = 1)
    @JsonProperty("baseCalculoIntereses")
    private String interestCalculationBase;

    @PadLeft(length = 2, padChar = '0')
    @JsonProperty("modalidadPagoIntereses")
    private String interestPaymentFrequency;

    @PadLeft(length = 1)
    @JsonProperty("reinversionIntereses")
    private String reinvestInterest;

    @PadLeft(length = 2)
    @JsonProperty("identificacionRemate")
    private String auctionIdentifier;

    @PadLeft(length = 3, padChar = '0')
    @JsonProperty("plazoLiquidacion")
    private Integer settlementTermDays;

    @PadLeft(length = 8)
    @JsonProperty("fechaLiquidacion")
    private String settlementDate;

    @PadLeft(length = 1)
    @JsonProperty("modalidadLiquidacion")
    private String settlementModeType;

    @PadLeft(length = 1)
    @JsonProperty("fijoPrecioAcciones")
    private String fixedPriceIndicator;

    @PadLeft(length = 1)
    @JsonProperty("esExdividendo")
    private String exDividendIndicator;

    @PadLeft(length = 1)
    @JsonProperty("indicadorOrigen")
    private String originIndicator;

    @PadLeft(length = 1)
    @JsonProperty("tipoOferta")
    private String offerTypeCode;

    @PadLeft(length = 1)
    @JsonProperty("tipoMercado")
    private String marketIndicator;

    @PadLeft(length = 1)
    @JsonProperty("indicadorSwap")
    private String swapFlagIndicator;

    @PadLeft(length = 8, padChar = '0')
    @JsonProperty("referenciaSwapComisionista")
    private String swapReferenceNumber;

    @FixedDecimal(integerDigits = 10, decimalDigits = 4, showSign = true)
    @JsonProperty("tasaOperacionRepo")
    private BigDecimal repoInterestRate;

    @PadLeft(length = 5, padChar = '0')
    @JsonProperty("plazoOperacionRepo")
    private Integer repoTermDays;

    @FixedDecimal(integerDigits = 12)
    @JsonProperty("valorCaptacionRepo")
    private BigDecimal repoCaptureValue;

    @FixedDecimal(integerDigits = 16)
    @JsonProperty("volumenRecompraRepo")
    private BigDecimal repoRepurchaseVolume;

    @PadLeft(length = 3)
    @JsonProperty("deposito")
    private String depositoryCode;

    @FixedDecimal(integerDigits = 12)
    @JsonProperty("cantidadFraccion")
    private BigDecimal fractionQuantityValue;

    @FixedDecimal(integerDigits = 16)
    @JsonProperty("volumenFraccion")
    private BigDecimal fractionVolumeValue;

    @FixedDecimal(integerDigits = 3, decimalDigits = 4)
    @JsonProperty("porcentajeComision")
    private BigDecimal commissionPercentage;

    @FixedDecimal(integerDigits = 10)
    @JsonProperty("valorComision")
    private BigDecimal commissionAmountValue;

    @FixedDecimal(integerDigits = 3, decimalDigits = 3)
    @JsonProperty("precioNetoFraccion")
    private BigDecimal netFractionPrice;

    @FixedDecimal(integerDigits = 10, decimalDigits = 4, showSign = true)
    @JsonProperty("tasaNetaFraccion")
    private BigDecimal netFractionRate;

    @FixedDecimal(integerDigits = 16)
    @JsonProperty("volumenNetoFraccion")
    private BigDecimal netFractionAmount;

    @PadLeft(length = 2, padChar = '0')
    @JsonProperty("numeroVecesImpresion")
    private Integer numberOfPrints;

    @FixedDecimal(integerDigits = 9)
    @JsonProperty("servicioBolsaCargoVolumen")
    private BigDecimal serviceChargeVolume;

    @FixedDecimal(integerDigits = 9)
    @JsonProperty("servicioBolsaCargoOperacion")
    private BigDecimal serviceChargeOperationValue;

    @PadLeft(length = 8, padChar = '0')
    @JsonProperty("codigoTrader")
    private String traderCodeIdentifier;

    @PadLeft(length = 3, padChar = '0')
    @JsonProperty("numeroFracciones")
    private Integer totalFractionsCount;

    @PadLeft(length = 8)
    @JsonProperty("referenciaComisionista")
    private String brokerReferenceValue;

    @PadLeft(length = 1)
    @JsonProperty("tipoIdentificacionCliente1")
    private String client1IdentificationType;

    @PadLeft(length = 12, direction = Direction.RIGHT)
    @JsonProperty("identificacionCliente1")
    private String client1IdentificationNumber;

    @PadLeft(length = 3)
    @JsonProperty("identificacionPatrimonioAutonomo1")
    private String fiduciary1IdentificationType;

    @PadLeft(length = 1)
    @JsonProperty("tipoIdentificacionCliente2")
    private String client2IdentificationType;

    @PadLeft(length = 12)
    @JsonProperty("identificacionCliente2")
    private String client2IdentificationNumber;

    @PadLeft(length = 3)
    @JsonProperty("identificacionPatrimonioAutonomo2")
    private String fiduciary2IdentificationType;

    @PadLeft(length = 1)
    @JsonProperty("tipoIdentificacionCliente3")
    private String client3IdentificationType;

    @PadLeft(length = 12)
    @JsonProperty("identificacionCliente3")
    private String client3IdentificationNumber;

    @PadLeft(length = 3)
    @JsonProperty("identificacionPatrimonioAutonomo3")
    private String fiduciary3IdentificationType;

    @PadLeft(length = 1)
    @JsonProperty("indicadorOperacionCarrusel")
    private String carouselIndicatorFlag;

    @PadLeft(length = 1)
    @JsonProperty("indicadorOperacion")
    private String operationStatusIndicator;

    @FixedDecimal(integerDigits = 12)
    @JsonProperty("baseRetencionFuente")
    private BigDecimal withholdingBaseCollectValue;

    @FixedDecimal(integerDigits = 3, decimalDigits = 2)
    @JsonProperty("porcentajeRetencionFuente")
    private BigDecimal withholdingPercentageCollectValue;

    @FixedDecimal(integerDigits = 10)
    @JsonProperty("valorRetencionFuente")
    private BigDecimal withholdingValueCollect;

    @FixedDecimal(integerDigits = 12)
    @JsonProperty("baseTrasladoRetencionFuente")
    private BigDecimal withholdingBaseTransferValue;

    @FixedDecimal(integerDigits = 3)
    @JsonProperty("porcentajeTrasladoAplicado")
    private BigDecimal withholdingPercentageTransferValue;

    @FixedDecimal(integerDigits = 10)
    @JsonProperty("valorTraslado")
    private BigDecimal withholdingValueTransfer;

    @FixedDecimal(integerDigits = 3, decimalDigits = 3)
    @JsonProperty("porcentajeIvaAplicado")
    private BigDecimal vatPercentageValue;

    @FixedDecimal(integerDigits = 10)
    @JsonProperty("valorIva")
    private BigDecimal vatAmountValue;

    @PadLeft(length = 1)
    @JsonProperty("trasladoServicioBolsa")
    private String exchangeServiceTransferClientValue;

    @PadLeft(length = 1)
    @JsonProperty("generaConstancia")
    private String generateReceiptFlag;

    @PadLeft(length = 8, padChar = '0')
    @JsonProperty("fechaConstanciaVenta")
    private String receiptDateValue;

    @FixedDecimal(integerDigits = 16)
    @JsonProperty("valorConstanciaVenta")
    private BigDecimal receiptAmountValue;

    @PadLeft(length = 1)
    @JsonProperty("expedirConstanciaCompradora")
    private String issueReceiptBuyerFlagValue;

    @FixedDecimal(integerDigits = 16)
    @JsonProperty("contrapagoOperacion")
    private BigDecimal counterPaymentValue;

    @PadLeft(length = 1)
    @JsonProperty("enviaRetencionFuente")
    private String sendWithholdingIndicator;

    @PadLeft(length = 1)
    @JsonProperty("promotorLiquidez")
    private String liquidityPromoterFlag;

    @PadLeft(length = 1)
    @JsonProperty("usoTasa")
    private String rateUsageMethod;

    @PadLeft(length = 12)
    @JsonProperty("nemotecnicoCompletoDeudaPublica")
    private String longSecurityMnemonic;

    @FixedDecimal(integerDigits = 16)
    @JsonProperty("valorSancionCumplimientoExtemporaneo")
    private BigDecimal lateValue;

    @PadLeft(length = 1)
    @JsonProperty("posicionCumplimientoExtemporaneo")
    private String latePosition;

    @PadLeft(length = 1)
    @JsonProperty("perteneceContratoCuentaMargen")
    private String lateAccount;

    @PadLeft(length = 1)
    @JsonProperty("operacionCtdsReinversion")
    private String reinvestment;

    @PadLeft(length = 4)
    @JsonProperty("ruedaNegociacion")
    private String marketSegmentId;

    @PadLeft(length = 1)
    @JsonProperty("estadoComplementacionOperacionContado")
    private String cashSettlementCompletionStatus;
}

```

## src/main/java/com/nubo/receipts/api/models/dto/response/voucher/PapeletaFileOutDto.java

```java
package com.nubo.receipts.api.models.dto.response.voucher;

import java.math.BigDecimal;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.nubo.receipts.api.application.annotations.FixedDecimal;
import com.nubo.receipts.api.application.annotations.PadCommaDecimal;
import com.nubo.receipts.api.application.annotations.PadLeft;
import com.nubo.receipts.api.application.annotations.PadLeft.Direction;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class PapeletaFileOutDto {

    @JsonProperty("punta")
    @PadLeft(length = 6)
    private String side;

    @JsonProperty("fechaOperacion")
    @PadLeft(length = 8)
    private String operationDate;

    @JsonProperty("consecutivo")
    @PadLeft(length = 18)
    private String consecutiveNumber;

    @JsonProperty("fraccion")
    @PadLeft(length = 6, padChar = '0')
    private String fractionNumber;

    @JsonProperty("fechaCumplimiento")
    @PadLeft(length = 8, padChar = '0')
    private String settlementDate;

    @JsonProperty("condicion")
    @PadLeft(length = 9)
    private String condition;

    @JsonProperty("mnemonico")
    @PadLeft(length = 12, direction = Direction.RIGHT)
    private String securityMnemonic;

    @JsonProperty("descripcionEspecie")
    @PadLeft(length = 33, direction = Direction.RIGHT)
    private String speciesDescription;

    @JsonProperty("cliente1")
    @PadLeft(length = 44, direction = Direction.RIGHT)
    private String client1Name;

    @JsonProperty("tipoIdCliente1")
    @PadLeft(length = 3)
    private String client1IdType;

    @JsonProperty("numeroDocumentoCliente1")
    @PadLeft(length = 15, direction = Direction.RIGHT)
    private String client1DocumentNumber;

    @JsonProperty("condicionFiscal")
    @PadLeft(length = 12)
    private String fiscalCondition;

    @JsonProperty("cliente2")
    @PadLeft(length = 44)
    private String client2Name;

    @JsonProperty("tipoIdCliente2")
    @PadLeft(length = 3)
    private String client2IdType;

    @JsonProperty("numeroDocumentoCliente2")
    @PadLeft(length = 15)
    private String client2DocumentNumber;

    @JsonProperty("cliente3")
    @PadLeft(length = 44)
    private String client3Name;

    @JsonProperty("tipoIdCliente3")
    @PadLeft(length = 3)
    private String client3IdType;

    @JsonProperty("numeroDocumentoCliente3")
    @PadLeft(length = 15)
    private String client3DocumentNumber;

    @JsonProperty("afiliado")
    @PadLeft(length = 35, direction = Direction.RIGHT)
    private String affiliateName;

    @JsonProperty("nit")
    @PadLeft(length = 15, direction = Direction.RIGHT)
    private String affiliateNit;

    @JsonProperty("condicionFiscalAfiliado")
    @PadLeft(length = 12)
    private String affiliateFiscalCondition;

    @JsonProperty("codigoUsuario")
    @PadLeft(length = 3, padChar = '0')
    private String userCode;

    @JsonProperty("plazo")
    @PadLeft(length = 6)
    private String deadline;

    @JsonProperty("tasaNominalSpread")
    @PadLeft(length = 11)
    private String nominalRateSpread;

    @JsonProperty("modalidadReinversion")
    @PadLeft(length = 2)
    private String reinvestmentModality;

    @JsonProperty("reinversion")
    @PadLeft(length = 2)
    private String reinvestment;

    @JsonProperty("fechaEmision")
    @PadLeft(length = 8, padChar = '0')
    private String issueDate;

    @JsonProperty("fechaVencimiento")
    @PadLeft(length = 8, padChar = '0')
    private String maturityDate;

    @JsonProperty("diasVencimiento")
    @PadLeft(length = 6)
    private String maturityDays;

    @JsonProperty("valorCumplimientoMoneda")
    @PadLeft(length = 11)
    private String settlementCurrencyValue;

    @JsonProperty("fechaValorMoneda")
    @PadLeft(length = 8, padChar = '0')
    private String currencyValueDate;

    @JsonProperty("tipoOperacion")
    @PadLeft(length = 17, direction = Direction.RIGHT)
    private String operationType;

    @JsonProperty("conformoCodigo")
    @PadLeft(length = 3, padChar = '0')
    private String conformedCode;

    @JsonProperty("tipoNegocio")
    @PadLeft(length = 15, direction = Direction.RIGHT)
    private String businessType;

    @JsonProperty("mercado")
    @PadLeft(length = 10, direction = Direction.RIGHT)
    private String market;

    @JsonProperty("origenOperacion")
    @PadLeft(length = 11, direction = Direction.RIGHT)
    private String operationOrigin;

    @JsonProperty("deposito")
    @PadLeft(length = 10, direction = Direction.RIGHT)
    private String depository;

    @JsonProperty("tasaSimultanea")
    @FixedDecimal(integerDigits = 4, decimalDigits = 4)
    private BigDecimal repoRate;

    @JsonProperty("fechaSalidaSimultanea")
    @PadLeft(length = 8, padChar = '0')
    private String repoStartDate;

    @JsonProperty("fechaRegresoSimultanea")
    @PadLeft(length = 8, padChar = '0')
    private String repoEndDate;

    @JsonProperty("diasPlazoSimultanea")
    @PadLeft(length = 6)
    private String repoTermDays;

    @JsonProperty("valorSalidaAAA")
    @PadLeft(length = 25)
    private String exitValueAAA;

    @JsonProperty("valorRegresoBBB")
    @PadLeft(length = 25)
    private String returnValueBBB;

    @JsonProperty("tasaRecompra")
    @FixedDecimal(integerDigits = 4, decimalDigits = 4)
    private BigDecimal repurchaseRate;

    @JsonProperty("fechaRecompra")
    @PadLeft(length = 8, padChar = '0')
    private String repurchaseDate;

    @JsonProperty("valorRecompra")
    @PadLeft(length = 25)
    private String repurchaseValue;

    @JsonProperty("valorCaptacion")
    @PadLeft(length = 25)
    private String captureValue;

    @JsonProperty("tasaEquival365")
    @FixedDecimal(integerDigits = 4, decimalDigits = 4)
    private BigDecimal equivalentRate365;

    @JsonProperty("indicadorActual")
    @PadLeft(length = 11)
    private String currentIndicator;

    @JsonProperty("fechaValorIndicadorActual")
    @PadLeft(length = 8, padChar = '0')
    private String currentIndicatorDate;

    @JsonProperty("indicadorPrevio")
    @PadLeft(length = 11)
    private String previousIndicatorValue;

    @JsonProperty("fechaIndicadorPrevio")
    @PadLeft(length = 8, padChar = '0')
    private String previousIndicatorDate;

    @JsonProperty("indicadorMaxCorredor")
    @PadLeft(length = 11)
    private String maxCorridorIndicatorValue;

    @JsonProperty("indicadorMinCorredor")
    @PadLeft(length = 11)
    private String minCorridorIndicatorValue;

    @JsonProperty("precioAsignacion")
    @PadLeft(length = 11)
    private String assignmentPrice;

    @JsonProperty("rentabilidadRegistro")
    @FixedDecimal(integerDigits = 4, decimalDigits = 3)
    private BigDecimal registrationYield;

    @JsonProperty("rentabilidadComision")
    @FixedDecimal(integerDigits = 4, decimalDigits = 3)
    private BigDecimal commissionYield;

    @JsonProperty("diferenciaRentCV")
    @FixedDecimal(integerDigits = 4, decimalDigits = 3)
    private BigDecimal yieldDifferenceBuySell;

    @JsonProperty("rentabilidadNeta")
    @FixedDecimal(integerDigits = 4, decimalDigits = 3)
    private BigDecimal netYield;

    @JsonProperty("cantidadNominal")
    @PadCommaDecimal(length = 25, firstChar = '$', padChar = '*')
    private BigDecimal nominalQuantity;

    @JsonProperty("precioCesionTotal")
    @PadCommaDecimal(length = 20, firstChar = '$', padChar = '*', trailingMinus = true)
    private BigDecimal totalCessionPrice;

    @JsonProperty("valor")
    @PadCommaDecimal(length = 25, firstChar = '$', padChar = '*', trailingMinus = true)
    private BigDecimal value;

    @JsonProperty("porcentajeComision")
    @FixedDecimal(integerDigits = 3, decimalDigits = 4)
    private BigDecimal commissionPercentage;

    @JsonProperty("valorComision")
    @PadCommaDecimal(length = 25, firstChar = '$', padChar = '*', trailingMinus = true)
    private BigDecimal commissionValue;

    @JsonProperty("servicioBolsa")
    @PadLeft(length = 24)
    private String stockExchangeServiceValue;

    @JsonProperty("porcentajeRetencionFuente")
    @FixedDecimal(integerDigits = 3, decimalDigits = 3)
    private BigDecimal withholdingTax;

    @JsonProperty("valorRetencionFuente")
    @PadLeft(length = 25)
    private String withholdingTaxValue;

    @JsonProperty("porcentajeTrasladoRetencion")
    @FixedDecimal(integerDigits = 3, decimalDigits = 3)
    private BigDecimal transferredWithholdingPercentage;

    @JsonProperty("valorTrasladoRetencion")
    @PadLeft(length = 25)
    private String transferredWithholdingValue;

    @JsonProperty("valorNeto")
    @PadCommaDecimal(length = 25, firstChar = '$', padChar = '*', trailingMinus = true)
    private BigDecimal netValue;

    @JsonProperty("porcentajeIvaComision")
    @FixedDecimal(integerDigits = 3, decimalDigits = 2)
    private BigDecimal vatCommissionPercentage;

    @JsonProperty("valorIvaComision")
    @PadCommaDecimal(length = 25, firstChar = '$', padChar = '*', trailingMinus = true)
    private BigDecimal vatCommissionValue;

    @JsonProperty("valorNetoIncluidoIva")
    @PadCommaDecimal(length = 25, firstChar = '$', padChar = '*', trailingMinus = true)
    private BigDecimal netAmountIncludingVat;

    @JsonProperty("entregaContraPago")
    @PadLeft(length = 25)
    private String deliveryVsPayment;

    @JsonProperty("montoRendimientos")
    @PadLeft(length = 25)
    private String yieldAmount;

    @JsonProperty("tasaAplicada")
    @FixedDecimal(integerDigits = 3, decimalDigits = 4)
    private BigDecimal appliedRate;

    @JsonProperty("fechaInicialPeriodoRendimientos")
    @PadLeft(length = 8, padChar = '0')
    private String yieldPeriodStartDate;

    @JsonProperty("fechaFinalPeriodoRendimientos")
    @PadLeft(length = 8, padChar = '0')
    private String yieldPeriodEndDate;

    @JsonProperty("observaciones")
    @PadLeft(length = 500)
    private String observations;

    @JsonProperty("numeroControl")
    @PadLeft(length = 10)
    private String controlNumber;

    @JsonProperty("fechaGeneracion")
    @PadLeft(length = 8, padChar = '0')
    private String generationDate;

    @JsonProperty("horaGeneracion")
    @PadLeft(length = 8, padChar = '0')
    private String generationTime;

    @JsonProperty("valorCumplimientoExtemporaneo")
    @PadLeft(length = 19)
    private String lateSettlementAmount;

    @JsonProperty("entidadAceptoCumplimientoExtemporaneo")
    @PadLeft(length = 1)
    private String acceptingEntity;
}

```

## src/main/java/com/nubo/receipts/api/models/entity/CfiEntity.java

```java
package com.nubo.receipts.api.models.entity;

import java.time.LocalDateTime;
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
@Table(name = "\"CFI\"", schema = "\"NUANBODB\"")
public class CfiEntity {

    @Id
    @Column(name = "\"CFI_ID\"", length = 6, nullable = false)
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
        CfiEntity that = (CfiEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/receipts/api/models/entity/ClassEntity.java

```java
package com.nubo.receipts.api.models.entity;

import java.time.LocalDateTime;
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
@Table(name = "\"CLASS\"", schema = "\"NUANBODB\"")
public class ClassEntity {

    @Id
    @Column(name = "\"CLASS_ID\"", length = 2, nullable = false)
    private String id;

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
        ClassEntity that = (ClassEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/receipts/api/models/entity/CountryEntity.java

```java
package com.nubo.receipts.api.models.entity;

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

## src/main/java/com/nubo/receipts/api/models/entity/CurrencyEntity.java

```java
package com.nubo.receipts.api.models.entity;

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

    @Column(name = "\"CODE\"", length = 3)
    private String code;

    @Column(name = "\"NAME\"", length = 80)
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

## src/main/java/com/nubo/receipts/api/models/entity/CustodianIncidentsReportViewEntity.java

```java
package com.nubo.receipts.api.models.entity;

import java.math.BigDecimal;
import java.time.LocalDate;

import org.hibernate.annotations.Immutable;
import org.hibernate.annotations.Subselect;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Immutable
@Subselect("""
        SELECT *, (
            COALESCE(section_2::text, '-1') || '|'
            || COALESCE(hea_package_code, '') || '|'
            || COALESCE(pac_event_date::text, '') || '|'
            || COALESCE(pac_even_hour::text, '') || '|'
            || COALESCE(pac_event, '') || '|'
            || COALESCE(pac_affiliate, '') || '|'
            || COALESCE(pac_custodian, '') || '|'
            || COALESCE(hea_reference, '') || '|'
            || COALESCE(hea_administrator, '') || '|'
            || COALESCE(det_match_id::text, '-1') || '|'
            || COALESCE(det_fraction::text, '0')
        ) AS row_key
        FROM "NUANBODB".vw_custodian_incidents_report
        """)
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CustodianIncidentsReportViewEntity {

    @Id
    @Column(name = "row_key")
    private String rowKey;

    @Column(name = "section_2")
    private Integer section2;

    @Column(name = "hea_package_code")
    private String heaPackageCode;

    @Column(name = "hea_fecha_crea")
    private LocalDate heaCreaDate;

    @Column(name = "hea_process_date")
    private LocalDate heaProcessDate;

    @Column(name = "hea_process_hour")
    private java.time.LocalTime heaProcessHour;

    @Column(name = "hea_entity")
    private String heaEntity;

    @Column(name = "hea_entity_name")
    private String heaEntityName;

    @Column(name = "hea_mnemonic")
    private String heaMnemonic;

    @Column(name = "hea_side")
    private String heaSide;

    @Column(name = "hea_reference")
    private String heaReference;

    @Column(name = "hea_administrator")
    private String heaAdministrator;

    @Column(name = "pac_event_date")
    private LocalDate pacEventDate;

    @Column(name = "pac_even_hour")
    private String pacEvenHour;

    @Column(name = "pac_event")
    private String pacEvent;

    @Column(name = "pac_affiliate")
    private String pacAffiliate;

    @Column(name = "pac_custodian")
    private String pacCustodian;

    @Column(name = "pac_generating_entity")
    private String pacGeneratingEntity;

    @Column(name = "pac_package_status")
    private String pacPackageStatus;

    @Column(name = "pac_quantity")
    private BigDecimal pacQuantity;

    @Column(name = "pac_averange_price")
    private BigDecimal pacAverangePrice;

    @Column(name = "pac_averange_rate")
    private BigDecimal pacAverangeRate;

    @Column(name = "pac_total_volume")
    private BigDecimal pacTotalVolume;

    @Column(name = "pac_total_commission")
    private BigDecimal pacTotalCommission;

    @Column(name = "pac_total_net_amount")
    private BigDecimal pacTotalNetAmount;

    @Column(name = "pac_total_return_net_amount")
    private BigDecimal pacTotalReturnNetAmount;

    @Column(name = "pac_substate")
    private String pacSubstate;

    @Column(name = "pac_investor_identification_type")
    private String pacInvestorIdentificationType;

    @Column(name = "pac_investor_identification_number")
    private String pacInvestorIdentificationNumber;

    @Column(name = "pac_investor_account")
    private String pacInvestorAccount;

    @Column(name = "pac_extense_penality")
    private BigDecimal pacExtensePenality;

    @Column(name = "det_match_id")
    private BigDecimal detMatchId;

    @Column(name = "det_fraction")
    private Long detFraction;

    @Column(name = "det_quantity")
    private BigDecimal detQuantity;

    @Column(name = "det_price")
    private BigDecimal detPrice;

    @Column(name = "det_rate")
    private BigDecimal detRate;

    @Column(name = "det_match_date")
    private LocalDate detMatchDate;

    @Column(name = "det_clearing_date")
    private LocalDate detClearingDate;

    @Column(name = "det_return_clearing_date")
    private LocalDate detReturnClearingDate;

    @Column(name = "det_departure_return")
    private String detDepartureReturn;

    @Column(name = "det_days_penality")
    private Integer detDaysPenality;

    @Column(name = "det_rate_penality")
    private Integer detRatePenality;
}

```

## src/main/java/com/nubo/receipts/api/models/entity/CustodianPackageReportViewEntity.java

```java
package com.nubo.receipts.api.models.entity;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import org.hibernate.annotations.Immutable;
import org.hibernate.annotations.Subselect;
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
@Immutable
@Subselect("""
        SELECT *, (pac_consecutive_1 || '|' || COALESCE(pac_consecutive_2, '') || '|'
                || COALESCE(det_match_id::text, '-1') || '|' || COALESCE(det_fraction::text, '0')) AS row_key
        FROM "NUANBODB".vw_custodian_package_report
        """)
public class CustodianPackageReportViewEntity {

    @Id
    @Column(name = "row_key")
    private String rowKey;

    // Package level
    @Column(name = "pac_type_reg_1")
    private String pacTypeReg1;

    @Column(name = "pac_consecutive_1")
    private String pacConsecutive1;

    @Column(name = "pac_creation_date")
    private LocalDate pacCreationDate;

    @Column(name = "pac_traslate_date")
    private LocalDate pacTraslateDate;

    @Column(name = "pac_admit_date")
    private LocalDate pacAdmitDate;

    @Column(name = "pac_reference_code")
    private String pacReferenceCode;

    @Column(name = "pac_sequence")
    private String pacSequence;

    @Column(name = "pac_status")
    private String pacStatus;

    @Column(name = "pac_affiliate")
    private String pacAffiliate;

    @Column(name = "pac_custodian")
    private String pacCustodian;

    @Column(name = "pac_fic_administrator")
    private String pacFicAdministrator;

    @Column(name = "pac_initial_clearing_date")
    private LocalDate pacInitialClearingDate;

    @Column(name = "pac_final_clearing_date")
    private LocalDate pacFinalClearingDate;

    @Column(name = "pac_side")
    private String pacSide;

    @Column(name = "pac_mnemonic")
    private String pacMnemonic;

    @Column(name = "pac_collateral")
    private String pacCollateral;

    @Column(name = "pac_isin")
    private String pacIsin;

    @Column(name = "pac_depository")
    private String pacDepository;

    @Column(name = "pac_transaction_type")
    private String pacTransactionType;

    @Column(name = "pac_investor_identification_type_1")
    private String pacInvestorIdentificationType1;

    @Column(name = "pac_investor_identification_number_1")
    private String pacInvestorIdentificationNumber1;

    @Column(name = "pac_investor_name_1")
    private String pacInvestorName1;

    @Column(name = "pac_investor_identification_type_2")
    private String pacInvestorIdentificationType2;

    @Column(name = "pac_investor_identification_number_2")
    private String pacInvestorIdentificationNumber2;

    @Column(name = "pac_investor_name_2")
    private String pacInvestorName2;

    @Column(name = "pac_investor_identification_type_3")
    private String pacInvestorIdentificationType3;

    @Column(name = "pac_investor_identification_number_3")
    private String pacInvestorIdentificationNumber3;

    @Column(name = "pac_investor_name_3")
    private String pacInvestorName3;

    @Column(name = "pac_investor_account")
    private String pacInvestorAccount;

    @Column(name = "pac_total_quantity")
    private BigDecimal pacTotalQuantity;

    @Column(name = "pac_averange_price")
    private BigDecimal pacAverangPrice;

    @Column(name = "pac_average_rate")
    private BigDecimal pacAverageRate;

    @Column(name = "pac_total_volume")
    private BigDecimal pacTotalVolume;

    @Column(name = "pac_total_return_volume")
    private String pacTotalReturnVolume;

    @Column(name = "pac_total_net_amount")
    private BigDecimal pacTotalNetAmount;

    @Column(name = "pac_total_return_net_amount")
    private String pacTotalReturnNetAmount;

    @Column(name = "pac_total_transfer_amount")
    private String pacTotalTransferAmount;

    @Column(name = "pac_total_return_transfer_amount")
    private String pacTotalReturnTransferAmount;

    @Column(name = "pac_total_commission_amount")
    private BigDecimal pacTotalCommissionAmount;

    @Column(name = "pac_total_val_tax_amount")
    private BigDecimal pacTotalValTaxAmount;

    @Column(name = "pac_clearing_percentage")
    private BigDecimal pacClearingPercentage;

    @Column(name = "pac_market")
    private String pacMarket;

    // Detail level
    @Column(name = "pac_type_reg_2")
    private String pacTypeReg2;

    @Column(name = "pac_consecutive_2")
    private String pacConsecutive2;

    @Column(name = "det_match_date")
    private LocalDate detMatchDate;

    @Column(name = "det_match_id")
    private Long detMatchId;

    @Column(name = "det_fraction")
    private Integer detFraction;

    @Column(name = "det_clearing_date")
    private LocalDate detClearingDate;

    @Column(name = "det_return_clearing_date")
    private LocalDate detReturnClearingDate;

    @Column(name = "det_quantity")
    private BigDecimal detQuantity;

    @Column(name = "det_price")
    private BigDecimal detPrice;

    @Column(name = "det_rate")
    private BigDecimal detRate;

    @Column(name = "det_volume")
    private BigDecimal detVolume;

    @Column(name = "det_return_volume")
    private String detReturnVolume;

    @Column(name = "det_extense_penality")
    private String detExtensePenality;

    @Column(name = "det_extense_position")
    private String detExtensePosition;

    @Column(name = "det_net_amount")
    private BigDecimal detNetAmount;

    @Column(name = "det_return_net_amount")
    private String detReturnNetAmount;

    @Column(name = "det_transfer_amount")
    private String detTransferAmount;

    @Column(name = "det_return_transfer_amount")
    private String detReturnTransferAmount;

    @Column(name = "det_percentaje_commission")
    private BigDecimal detPercentajeCommission;

    @Column(name = "det_commission_amount")
    private BigDecimal detCommissionAmount;

    @Column(name = "det_val_tax_amount")
    private BigDecimal detValTaxAmount;

    @Column(name = "det_withholding_tax")
    private String detWithholdingTax;

    @Column(name = "det_withholding_tax_amount")
    private String detWithholdingTaxAmount;

    @Column(name = "det_return_withholding_tax")
    private String detReturnWithholdingTax;

    @Column(name = "det_return_withholding_tax_amount")
    private String detReturnWithholdingTaxAmount;

    @Column(name = "det_compliance_indicator")
    private String detComplianceIndicator;

    @Column(name = "det_return_compliance_indicator")
    private String detReturnComplianceIndicator;

    @Column(name = "det_transaction_type")
    private String detTransactionType;

    @Column(name = "det_investor_account")
    private String detInvestorAccount;

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        CustodianPackageReportViewEntity that = (CustodianPackageReportViewEntity) o;
        return Objects.equals(rowKey, that.rowKey);
    }

    @Override
    public int hashCode() {
        return Objects.hash(rowKey);
    }
}

```

## src/main/java/com/nubo/receipts/api/models/entity/CustodianReportViewEntity.java

```java
package com.nubo.receipts.api.models.entity;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
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
@IdClass(CustodianReportViewKey.class)
@Table(name = "vw_custodian_report", schema = "\"NUANBODB\"")
public class CustodianReportViewEntity {

    @Id
    @Column(name = "trade_id")
    private Long tradeId;

    @Column(name = "creation_package_date")
    private LocalDate creationPackageDate;

    @Column(name = "traslate_date")
    private LocalDateTime traslateDate;

    @Column(name = "admit_date")
    private LocalDateTime admitDate;

    @Column(name = "clearing_date")
    private LocalDate clearingDate;

    @Column(name = "return_clearing_date")
    private String returnClearingDate;

    @Column(name = "mnemonic")
    private String mnemonic;

    @Column(name = "isin")
    private String isin;

    @Column(name = "collateral")
    private String collateral;

    @Column(name = "market")
    private String market;

    @Column(name = "packet_code")
    private String packetCode;

    @Column(name = "reference_code")
    private String referenceCode;

    @Column(name = "st_custodian_status_id")
    private String stCustodianStatusId;

    @Id
    @Column(name = "si_side")
    private String siSide;

    @Column(name = "ty_business_type_id")
    private String tyBusinessTypeId;

    @Column(name = "pa_affiliate")
    private String paAffiliate;

    @Column(name = "pa_custodian_id")
    private String paCustodianId;

    @Column(name = "pa_fic_administrator_id")
    private String paFicAdministratorId;

    @Column(name = "it_investor_identification_type")
    private String itInvestorIdentificationType;

    @Column(name = "in_document_number")
    private String inDocumentNumber;

    @Column(name = "in_investor_name")
    private String inInvestorName;

    @Column(name = "ia_investor_account_id")
    private String iaInvestorAccountId;

    @Column(name = "de_depository")
    private String deDepository;

    @Column(name = "affiliate_name")
    private String affiliateName;

    @Column(name = "pa_custodian_name")
    private String paCustodianName;

    @Column(name = "pa_fic_administrator_name")
    private String paFicAdministratorName;

    @Column(name = "register_date")
    private LocalDate registerDate;

    @Id
    @Column(name = "folio")
    private Long folio;

    @Id
    @Column(name = "fraction_id")
    private Integer fractionId;

    @Column(name = "cumplimiento_id")
    private LocalDate cumplimientoId;

    @Column(name = "cumplimiento_return")
    private LocalDate cumplimientoReturn;

    @Column(name = "fraction_quantity")
    private BigDecimal fractionQuantity;

    @Column(name = "precio")
    private BigDecimal precio;

    @Column(name = "tasa")
    private String tasa;

    @Column(name = "fraction_value")
    private BigDecimal fractionValue;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        CustodianReportViewEntity that = (CustodianReportViewEntity) o;
        return Objects.equals(tradeId, that.tradeId)
                && Objects.equals(folio, that.folio)
                && Objects.equals(fractionId, that.fractionId)
                && Objects.equals(siSide, that.siSide);
    }

    @Override
    public int hashCode() {
        return Objects.hash(tradeId, folio, fractionId, siSide);
    }
}

```

## src/main/java/com/nubo/receipts/api/models/entity/CustodianReportViewKey.java

```java
package com.nubo.receipts.api.models.entity;

import java.io.Serializable;
import java.util.Objects;

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
public class CustodianReportViewKey implements Serializable {

    private Long tradeId;
    private Long folio;
    private Integer fractionId;
    private String siSide;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof CustodianReportViewKey that))
            return false;
        return Objects.equals(tradeId, that.tradeId)
                && Objects.equals(folio, that.folio)
                && Objects.equals(fractionId, that.fractionId)
                && Objects.equals(siSide, that.siSide);
    }

    @Override
    public int hashCode() {
        return Objects.hash(tradeId, folio, fractionId, siSide);
    }
}

```

## src/main/java/com/nubo/receipts/api/models/entity/CustodianUpdatesReportViewEntity.java

```java
package com.nubo.receipts.api.models.entity;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "vw_report_news", schema = "\"NUANBODB\"")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CustodianUpdatesReportViewEntity {

    @Id
    @Column(name = "tipo_registro")
    private Integer tipoRegistro;

    @Column(name = "fecha_evento")
    private LocalDate fechaEvento;

    @Column(name = "hora_evento")
    private LocalTime horaEvento;

    @Column(name = "concepto")
    private String concepto;

    @Column(name = "afiliado")
    private String afiliado;

    @Column(name = "custodio")
    private String custodio;

    @Column(name = "entidad_generadora_evento")
    private String entidadGeneradoraEvento;

    @Column(name = "administrador")
    private String administrador;

    @Column(name = "nemotecnico")
    private String nemotecnico;

    @Column(name = "punta")
    private String punta;

    @Column(name = "numero_paquete")
    private String numeroPaquete;

    @Column(name = "cod_ref_paquete")
    private String codRefPaquete;

    @Column(name = "estado_paquete")
    private String estadoPaquete;

    @Column(name = "cantidad_acciones")
    private BigDecimal cantidadAcciones;

    @Column(name = "precio_promedio")
    private BigDecimal precioPromedio;

    @Column(name = "tasa_promedio")
    private BigDecimal tasaPromedio;

    @Column(name = "vr_bruto_paquete")
    private BigDecimal vrBrutoPaquete;

    @Column(name = "vr_comision_paquete")
    private BigDecimal vrComisionPaquete;

    @Column(name = "vr_neto_paquete")
    private BigDecimal vrNetoPaquete;

    @Column(name = "vr_neto_regreso")
    private BigDecimal vrNetoRegreso;

    @Column(name = "folio")
    private String folio;

    @Column(name = "fraccion")
    private Integer fraccion;

    @Column(name = "tipo_id")
    private String tipoId;

    @Column(name = "numero_id")
    private String numeroId;

    @Column(name = "cuenta_dvl")
    private String cuentaDvl;

    @Column(name = "fecha_registro_operacion")
    private LocalDate fechaRegistroOperacion;

    @Column(name = "fecha_cumplimiento")
    private LocalDate fechaCumplimiento;

    @Column(name = "fecha_cumplimiento_regreso")
    private LocalDate fechaCumplimientoRegreso;

    @Column(name = "cantidad_operacion")
    private BigDecimal cantidadOperacion;

    @Column(name = "precio_operacion")
    private BigDecimal precioOperacion;

    @Column(name = "tasa_operacion")
    private BigDecimal tasaOperacion;

    @Column(name = "id_salida_o_regreso")
    private String idSalidaORegreso;
}

```

## src/main/java/com/nubo/receipts/api/models/entity/DepositoryEntity.java

```java
package com.nubo.receipts.api.models.entity;

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
    @Column(name = "\"DEPOSITORY_ID\"", length = 2, nullable = false)
    private String id;

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
        DepositoryEntity that = (DepositoryEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/receipts/api/models/entity/FileGenerateEntity.java

```java
package com.nubo.receipts.api.models.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.util.Objects;

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

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Table(name = "\"FILE_GENERATION\"", schema = "\"NUANBODB\"")
public class FileGenerateEntity {

    @Id
    @Column(name = "\"FILE_GENERATION_ID\"")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "\"FILE_NAME\"", nullable = false, length = 255)
    private String fileName;

    @Column(name = "\"FILE_TYPE\"", nullable = false, length = 50)
    private String fileType;

    @Column(name = "\"FILE_PATH\"", nullable = false, length = 512)
    private String filePath;

    @Column(name = "\"MESSAGE\"", length = 2000)
    private String message;

    @Column(name = "\"GENERATED_AT\"", nullable = false)
    private OffsetDateTime generatedAt;

    @Column(name = "\"GENERATED_BY\"", nullable = false, length = 100)
    private String generatedBy;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"PARTICIPANT_ID\"", nullable = false)
    private ParticipantEntity participant;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"GENERATION_STATUS_ID\"", nullable = false)
    private StatusEntity generationStatus;

    @Column(name = "\"RECORD_DATE\"", nullable = false)
    private LocalDate recordDate;

    @Column(name = "\"FILE_CONSECUTIVE\"", length = 100)
    private Integer fileConsecutive;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 100)
    private String lastModifyUser;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"OPERATION_STATUS_ID\"", nullable = false)
    private StatusEntity operationStatus;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 100)
    private String lastModifyApplic;

    @Column(name = "\"LAST_MODIFY_DATE\"")
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50)
    private String lastModifyIp;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"TYPE_ID\"")
    private TypeEntity type;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        FileGenerateEntity that = (FileGenerateEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/receipts/api/models/entity/FixedIncomeSecurityEntity.java

```java
package com.nubo.receipts.api.models.entity;

import java.math.BigDecimal;
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
@Table(name = "\"FIXED_INCOME_SECURITY\"", schema = "\"NUANBODB\"")
public class FixedIncomeSecurityEntity {

    @Id
    @Column(name = "\"SECURITY_ID\"", nullable = false)
    private Long securityId;

    @ManyToOne
    @JoinColumn(name = "\"SECURITY_ID\"", insertable = false, updatable = false)
    private SecurityTitleEntity securityTitle;

    @Column(name = "\"MATURITY_DATE\"")
    private LocalDate maturityDate;

    @Column(name = "\"DESCRIPTION\"")
    private String description;

    @Column(name = "\"FIRST_CUPON_DATE\"")
    private LocalDate firstCuponDate;

    @Column(name = "\"COUPON_FRECUENCY\"")
    private Integer couponFrequency;

    @Column(name = "\"INITIAL_PAR_VALUE\"", precision = 20, scale = 8)
    private BigDecimal initialParValue;

    @Column(name = "\"NOMINAL_VALUE\"", precision = 20, scale = 8)
    private BigDecimal nominalValue;

    @Column(name = "\"COUPON_INTEREST\"", precision = 15, scale = 2)
    private BigDecimal couponInterest;

    @Column(name = "\"MINIMUM_UNIT\"", precision = 14, scale = 2)
    private BigDecimal minimumUnit;

    @Column(name = "\"ISSUE_DATE\"")
    private LocalDate issueDate;

    @Column(name = "\"RATE_USAGE_METHOD\"")
    private Integer rateUsageMethod;

    @ManyToOne
    @JoinColumn(name = "\"RATE_TYPE_ID\"")
    private TypeEntity rateType;

    @Column(name = "\"RATE_VALUE\"")
    private Integer rateValue;

    @Column(name = "\"SPREAD\"", precision = 5, scale = 2)
    private BigDecimal spread;

    @ManyToOne
    @JoinColumn(name = "\"PERIODICITY_TYPE_ID\"")
    private TypeEntity periodicityType;

    @ManyToOne
    @JoinColumn(name = "\"PAYMENT_TYPE_ID\"")
    private TypeEntity paymentType;

    @Column(name = "\"FRACTIONATION_MULTIPLE\"", precision = 16, scale = 4)
    private BigDecimal fractionationMultiple;

    @ManyToOne
    @JoinColumn(name = "\"LIQUIDATION_TYPE_ID\"")
    private TypeEntity liquidationType;

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
        FixedIncomeSecurityEntity that = (FixedIncomeSecurityEntity) o;
        return Objects.equals(securityId, that.securityId);
    }

    @Override
    public int hashCode() {
        return securityId != null ? securityId.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/receipts/api/models/entity/IdentificationTypeEntity.java

```java
package com.nubo.receipts.api.models.entity;

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

    @Column(name = "\"DESCRIPTION\"", length = 80, nullable = false)
    private String description;

    @Column(name = "\"CODE\"", length = 3, nullable = false)
    private String code;

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

## src/main/java/com/nubo/receipts/api/models/entity/InvestorAccountEntity.java

```java
package com.nubo.receipts.api.models.entity;

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

    @Column(name = "\"ACCOUNT_NAME\"")
    private String accountName;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"", nullable = false)
    private TypeEntity type;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID\"", nullable = false)
    private DepositoryEntity depository;

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

## src/main/java/com/nubo/receipts/api/models/entity/InvestorEntity.java

```java
package com.nubo.receipts.api.models.entity;

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
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
    private CountryEntity country;

    @Column(name = "\"DOCUMENT_NUMBER\"", length = 20)
    private String documentNumber;

    @ManyToOne
    @JoinColumn(name = "\"IDENTIFICATION_TYPE_ID\"", nullable = false)
    private IdentificationTypeEntity identificationType;

    @Column(name = "\"ADDRESS\"", length = 100)
    private String address;

    @ManyToOne
    @JoinColumn(name = "\"TAX_STATUS_ID\"", nullable = false)
    private TaxStatusEntity taxStatus;

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

## src/main/java/com/nubo/receipts/api/models/entity/IsinNumberEntity.java

```java
package com.nubo.receipts.api.models.entity;

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
@Table(name = "\"ISIN_NUMBER\"", schema = "\"NUANBODB\"")
public class IsinNumberEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"ISIN_NUMBER_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"SECURITY_ID\"")
    private Long securityTitleId;

    @Column(name = "\"DESCRIPTION\"")
    private String description;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        IsinNumberEntity that = (IsinNumberEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/receipts/api/models/entity/MarketEntity.java

```java
package com.nubo.receipts.api.models.entity;

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

## src/main/java/com/nubo/receipts/api/models/entity/ParticipantAccountEntity.java

```java
package com.nubo.receipts.api.models.entity;

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

    @Column(name = "\"ACCOUNT_NUMBER\"", length = 50)
    private String accountNumber;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"", nullable = false)
    private TypeEntity type;

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

## src/main/java/com/nubo/receipts/api/models/entity/ParticipantEntity.java

```java
package com.nubo.receipts.api.models.entity;

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

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"")
    private CountryEntity country;

    @Column(name = "\"MAIN_ADDRESS\"", length = 100)
    private String mainAddress;

    @ManyToOne
    @JoinColumn(name = "\"TAX_STATUS_ID\"")
    private TaxStatusEntity taxStatus;

    @Column(name = "\"ENABLED\"")
    private Boolean enabled;

    @Column(name = "\"CUSTODIAN\"")
    private Boolean custodian;

    @Column(name = "\"STATUS_ID\"")
    private Long statusId;

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

## src/main/java/com/nubo/receipts/api/models/entity/SecurityTitleEntity.java

```java
package com.nubo.receipts.api.models.entity;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
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

    @Column(name = "\"ISIN\"", length = 20)
    private String isin;

    @ManyToOne
    @JoinColumn(name = "\"CLASS_ID\"", nullable = false)
    private ClassEntity classId;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID\"", nullable = false)
    private DepositoryEntity depository;

    @Builder.Default
    @OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"SECURITY_ID\"")
    private List<IsinNumberEntity> isinNumberList = new ArrayList<>();

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

## src/main/java/com/nubo/receipts/api/models/entity/SettlementEntity.java

```java
package com.nubo.receipts.api.models.entity;

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
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@IdClass(SettlementKey.class)
@Table(name = "\"SETTLEMENT\"", schema = "\"NUANBODB\"")
public class SettlementEntity {

    @Id
    @ManyToOne
    @JoinColumn(name = "\"TRADE_ID\"", insertable = false, updatable = false)
    private TradeEntity trade;

    @Id
    @Column(name = "\"FRACTION\"", nullable = false)
    private Integer fraction;

    @Id
    @ManyToOne
    @JoinColumn(name = "\"SIDE_ID\"", insertable = false, updatable = false)
    private SideEntity side;

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

    @Column(name = "\"VAL_TAX_AMOUNT\"", precision = 16, scale = 4)
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

    @Column(name = "\"REPO_RATE\"", precision = 16, scale = 4)
    private BigDecimal repoRate;

    @Column(name = "\"REPO_AMOUNT\"", precision = 16, scale = 4)
    private BigDecimal repoAmount;

    @Column(name = "\"LATE_PENALITY\"", precision = 16, scale = 4)
    private BigDecimal latePenality;

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

    @Column(name = "\"TRADING_SYSTEM_ID\"", nullable = false)
    private Long tradingSystemId;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @Column(name = "\"BROKERAGE_SERVICE\"", precision = 16, scale = 4)
    private BigDecimal brokerageService;

    @Column(name = "\"CUSTODIAN_ID\"")
    private Long custodianId;

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
        SettlementEntity that = (SettlementEntity) o;
        return Objects.equals(trade, that.trade) &&
                Objects.equals(fraction, that.fraction) &&
                Objects.equals(side, that.side);
    }

    @Override
    public int hashCode() {
        return Objects.hash(trade, fraction, side);
    }
}

```

## src/main/java/com/nubo/receipts/api/models/entity/SettlementKey.java

```java
package com.nubo.receipts.api.models.entity;

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

## src/main/java/com/nubo/receipts/api/models/entity/SideEntity.java

```java
package com.nubo.receipts.api.models.entity;

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

    @Column(name = "\"DESCRIPTION\"", length = 80)
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

## src/main/java/com/nubo/receipts/api/models/entity/StatusEntity.java

```java
package com.nubo.receipts.api.models.entity;

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
    @Column(name = "\"STATUS_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"DESCRIPTION\"", length = 80)
    private String description;

    @Column(name = "\"CATEGORY\"", length = 30)
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

## src/main/java/com/nubo/receipts/api/models/entity/TaxStatusEntity.java

```java
package com.nubo.receipts.api.models.entity;

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

    @Column(name = "\"DESCRIPTION\"", length = 80)
    private String description;

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

## src/main/java/com/nubo/receipts/api/models/entity/TradeEntity.java

```java
package com.nubo.receipts.api.models.entity;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Objects;

import jakarta.persistence.CascadeType;
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

    @Column(name = "\"CLEARING_DATE\"")
    private LocalDate clearingDate;

    @Column(name = "\"RETURN_CLEARING_DATE\"")
    private LocalDate returnClearingDate;

    @ManyToOne(fetch = FetchType.LAZY, optional = true)
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

    @ManyToOne
    @JoinColumn(name = "\"CUSTODIAN_ID_BUY\"")
    private ParticipantEntity custodianBuy;

    @ManyToOne
    @JoinColumn(name = "\"CUSTODIAN_ID_SELL\"")
    private ParticipantEntity custodianSell;

    @Column(name = "\"ASSIGNMENT_MARK_BUY\"")
    private Boolean assignmentMarkBuy;

    @Column(name = "\"ASSIGNMENT_MARK_SELL\"")
    private Boolean assignmentMarkSell;

    @Column(name = "\"FRACTIONAL_MARK_BUY\"")
    private Boolean fractionalMarkBuy;

    @Column(name = "\"FRACTIONAL_MARK_SELL\"")
    private Boolean fractionalMarkSell;

    @Column(name = "\"ADVANCE_STATUS\"")
    private Integer advanceStatus;

    @Column(name = "\"EXIT_INDICATOR_SETTLEMENT\"")
    private Boolean exitIndicatorSettlement;

    @Column(name = "\"RETURN_INDICATOR_SETTLEMENT\"")
    private Boolean returnIndicatorSettlement;

    @Column(name = "\"CANCELED_STATUS\"")
    private Boolean canceledStatus;

    @Column(name = "\"QUANTITY\"", precision = 16, scale = 4)
    private BigDecimal quantity;

    @Column(name = "\"PRICE\"", precision = 16, scale = 6)
    private BigDecimal price;

    @Column(name = "\"VOLUME\"", precision = 16, scale = 4)
    private BigDecimal volume;

    @Column(name = "\"REPURCHASE_RATE\"", precision = 6, scale = 4)
    private BigDecimal repurchaseRate;

    @Column(name = "\"REPURCHASE_AMOUNT\"", precision = 16, scale = 4)
    private BigDecimal repurchaseAmount;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @Column(name = "\"MATCH_TIME\"")
    private LocalDateTime matchTime;

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

    @Column(name = "\"SPECIAL_TRADE_ID\"")
    private Long specialTradeId;

    @ManyToOne
    @JoinColumn(name = "\"SETTLEMENT_TYPE_ID\"")
    private TypeEntity settlementType;

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
    @JoinColumn(name = "\"DEPOSITORY_ID_BUY\"")
    private DepositoryEntity depositoryBuy;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID_SELL\"")
    private DepositoryEntity depositorySell;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

    @OneToOne(mappedBy = "trade", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
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

## src/main/java/com/nubo/receipts/api/models/entity/TradeEquityEntity.java

```java
package com.nubo.receipts.api.models.entity;

import java.math.BigInteger;
import java.util.Objects;

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

@Entity
@Table(name = "\"TRADE_EQUITY\"", schema = "\"NUANBODB\"")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TradeEquityEntity {

    @Id
    @Column(name = "\"TRADE_ID\"")
    private Long tradeId;

    @MapsId
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"TRADE_ID\"")
    private TradeEntity trade;

    @Column(name = "\"FOREIGN_BROKER_BUY\"")
    private String foreignBrokerBuy;

    @Column(name = "\"FOREIGN_BROKER_SELL\"")
    private String foreignBrokerSell;

    @Column(name = "\"DIRECT_DEPOSITOR_BUY\"")
    private Integer directDepositorBuy;

    @Column(name = "\"DIRECT_DEPOSITOR_SELL\"")
    private Integer directDepositorSell;

    @Column(name = "\"SOURCE_INDICATOR_BUY\"")
    private Integer sourceIndicatorBuy;

    @Column(name = "\"SOURCE_INDICATOR_SELL\"")
    private Integer sourceIndicatorSell;

    @Column(name = "\"RESPONSIBLE_TRADE_BUY\"")
    private Integer responsibleTradeBuy;

    @Column(name = "\"RESPONSIBLE_TRADE_SELL\"")
    private Integer responsibleTradeSell;

    @Column(name = "\"REFERENCE_BUY\"")
    private String referenceBuy;

    @Column(name = "\"REFERENCE_SELL\"")
    private String referenceSell;

    @Column(name = "\"ORDER_BOOK_ID\"")
    private BigInteger orderBookId;

    @Column(name = "\"PREARRANGED_OPERATION\"")
    private Boolean prearrangedOperation;

    @Column(name = "\"AGGRESSIVE_TIP\"")
    private Integer aggressiveTip;

    @Column(name = "\"EXDIVIDEND_PERIOD\"")
    private Boolean exdividendPeriod;

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

## src/main/java/com/nubo/receipts/api/models/entity/TradingSessionEntity.java

```java
package com.nubo.receipts.api.models.entity;

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
@Table(name = "\"TRADING_SESSION\"", schema = "\"NUANBODB\"")
public class TradingSessionEntity {

    @Id
    @Column(name = "\"TRADING_SESSION_ID\"", length = 2, nullable = false)
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

## src/main/java/com/nubo/receipts/api/models/entity/TradingSystemEntity.java

```java
package com.nubo.receipts.api.models.entity;

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
    @Column(name = "\"TRADING_SYSTEM_ID\"", nullable = false)
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

## src/main/java/com/nubo/receipts/api/models/entity/TypeEntity.java

```java
package com.nubo.receipts.api.models.entity;

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

## src/main/java/com/nubo/receipts/api/models/entity/UserNuboEntity.java

```java
package com.nubo.receipts.api.models.entity;

import java.time.LocalDateTime;
import java.util.Objects;

import com.nubo.receipts.api.models.enums.UserTypeEnum;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
@Table(name = "\"USER_NUBO\"", schema = "\"NUANBODB\"")
public class UserNuboEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"USER_NUBO_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"USER_NAME\"", unique = true, length = 80, nullable = false)
    private String userName;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID\"", nullable = false)
    private ParticipantEntity participant;

    @Column(name = "\"USER_TYPE\"", length = 20, nullable = false)
    @Enumerated(EnumType.STRING)
    private UserTypeEnum userType;

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
        UserNuboEntity that = (UserNuboEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/receipts/api/models/enums/CountryEnum.java

```java
package com.nubo.receipts.api.models.enums;

import java.util.Arrays;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum CountryEnum {

    CHILE(35L, "CL", "CHILE"),
    COLOMBIA(37L, "CO", "COLOMBIA"),
    PERU(135L, "PE", "PERÚ");

    private final Long id;
    private final String code;
    private final String description;

    public static CountryEnum fromId(Long id) {
        return Arrays.stream(values())
                .filter(c -> c.id.equals(id))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("País desconocido con id: " + id));
    }

    public static CountryEnum fromCode(String code) {
        if (code == null || code.isBlank()) {
            throw new IllegalArgumentException("Código de país nulo o vacío");
        }

        return Arrays.stream(values())
                .filter(c -> c.code.equalsIgnoreCase(code.trim()))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("País desconocido con code: " + code));
    }
}

```

## src/main/java/com/nubo/receipts/api/models/enums/CustodianUpdateSideFilterEnum.java

```java
package com.nubo.receipts.api.models.enums;

import java.util.Arrays;
import java.util.Set;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum CustodianUpdateSideFilterEnum {

    BUY("1", "COMPRA", Set.of("COMPRA", "C", "1")),
    SELL("2", "VENTA", Set.of("VENTA", "V", "2")),
    ALL(null, null, Set.of());

    private final String databaseValue;
    private final String viewValue;
    private final Set<String> aliases;

    public static CustodianUpdateSideFilterEnum fromValue(String value) {
        if (value == null || value.isBlank()) {
            return ALL;
        }

        String normalized = value.trim().toUpperCase();
        return Arrays.stream(values())
                .filter(side -> side.aliases.contains(normalized))
                .findFirst()
                .orElse(ALL);
    }

    public boolean isAll() {
        return this == ALL;
    }
}

```

## src/main/java/com/nubo/receipts/api/models/enums/CustodianUpdateStatusFilterEnum.java

```java
package com.nubo.receipts.api.models.enums;

import java.util.Arrays;
import java.util.Set;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum CustodianUpdateStatusFilterEnum {

    WITHOUT_REQUEST("SIN SOLICITUD", "S", 1075L, Set.of("S", "SIN SOLICITUD")),
    TRANSFERRED("TRASLADADA", "T", 1071L, Set.of("T", "TRASLADADA")),
    PRE_MATCH("PRE-MATCH", "P", 1072L, Set.of("P", "PREMATCH", "PRE-MATCH")),
    ADMITTED("ADMITIDA", "A", 1073L, Set.of("A", "ADMITIDA", "ADMITTED")),
    REJECTED("RECHAZADA", "R", 1074L, Set.of("R", "RECHAZADA", "REJECTED")),
    ALL(null, null, null, Set.of("ALL", "TODOS"));

    private final String catalogValue;
    private final String viewValue;
    private final Long incidentsStatusId;
    private final Set<String> aliases;

    public static CustodianUpdateStatusFilterEnum fromValue(String value) {
        if (value == null || value.isBlank()) {
            return ALL;
        }

        String normalized = value.trim().toUpperCase();
        return Arrays.stream(values())
                .filter(status -> status.aliases.contains(normalized))
                .findFirst()
                .orElse(ALL);
    }

    public boolean isAll() {
        return this == ALL;
    }
}

```

## src/main/java/com/nubo/receipts/api/models/enums/FileTypeOptionEnum.java

```java
package com.nubo.receipts.api.models.enums;

import java.util.Arrays;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public enum FileTypeOptionEnum {
    TXT,
    CSV;

    @JsonValue
    public String toValue() {
        return this.name();
    }

    @JsonCreator
    public static FileTypeOptionEnum fromId(String id) {
        return Arrays.stream(FileTypeOptionEnum.values())
                .filter(fileType -> fileType.name().equalsIgnoreCase(id))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException(
                        "Invalid fileType '" + id + "'. Allowed values: " + Arrays.toString(values())));
    }
}

```

## src/main/java/com/nubo/receipts/api/models/enums/MarketEnum.java

```java
package com.nubo.receipts.api.models.enums;

import java.util.Arrays;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum MarketEnum {

    EQUITY("1", "RV", "RENTA VARIABLE", "TIPO_ACTIVO"),
    GLOBAL_MARKET("6", "MG", "MERCADO GLOBAL", "TIPO_ACTIVO"),
    FIXED_INCOME("2", "RF", "RENTA FIJA", "TIPO_ACTIVO");

    private final String id;
    private final String code;
    private final String description;
    private final String category;

    @JsonValue
    public String getCode() {
        return code;
    }

    @JsonCreator
    public static MarketEnum fromCode(String code) {
        return Arrays.stream(MarketEnum.values())
                .filter(market -> market.code.equalsIgnoreCase(code))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Market not implemented: " + code));
    }
}

```

## src/main/java/com/nubo/receipts/api/models/enums/NotificationMessageEnum.java

```java
package com.nubo.receipts.api.models.enums;

import lombok.Getter;

@Getter
public enum NotificationMessageEnum {
    RECEIPT_GENERATED(1L, "RECEIPT_GENERATED", "Comprobante generado exitosamente"),
    RECEIPT_ERROR(2L, "RECEIPT_ERROR", "Error al generar el comprobante");

    private final Long id;
    private final String code;
    private final String description;

    NotificationMessageEnum(Long id, String code, String description) {
        this.id = id;
        this.code = code;
        this.description = description;
    }
}

```

## src/main/java/com/nubo/receipts/api/models/enums/NotificationTypeEnum.java

```java
package com.nubo.receipts.api.models.enums;

import lombok.Getter;

@Getter
public enum NotificationTypeEnum {
    ERROR("ERROR", "Error en la operación"),
    WARNING("WARNING", "Advertencia"),
    INFO("INFO", "Información");

    private final String code;
    private final String description;

    NotificationTypeEnum(String code, String description) {
        this.code = code;
        this.description = description;
    }
}

```

## src/main/java/com/nubo/receipts/api/models/enums/OperationTypeEnum.java

```java
package com.nubo.receipts.api.models.enums;

import java.util.Arrays;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum OperationTypeEnum {

    CONT("CONTADO", TypeEnum.CONT),
    REPO("REPO", TypeEnum.REPO);

    private final String code;
    private final TypeEnum type;

    @JsonValue
    public String getCode() {
        return code;
    }

    @JsonCreator
    public static OperationTypeEnum fromCode(String code) {
        return Arrays.stream(OperationTypeEnum.values())
                .filter(operationType -> operationType.code.equalsIgnoreCase(code))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Operation type not implemented: " + code));
    }

}

```

## src/main/java/com/nubo/receipts/api/models/enums/PropertiesEnum.java

```java
package com.nubo.receipts.api.models.enums;

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

## src/main/java/com/nubo/receipts/api/models/enums/SearchOperationEnum.java

```java
package com.nubo.receipts.api.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;

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
                .orElse(null);
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

## src/main/java/com/nubo/receipts/api/models/enums/SideEnum.java

```java
package com.nubo.receipts.api.models.enums;

import java.util.Arrays;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum SideEnum {

    BUY("1", "COMPRA", 'C'),
    SELL("2", "VENTA", 'V');

    private final String id;
    private final String description;
    private final char code;

    @JsonValue
    public String getId() {
        return id;
    }

    @JsonCreator
    public static SideEnum fromId(String id) {
        return Arrays.stream(SideEnum.values())
                .filter(side -> side.id.equalsIgnoreCase(id))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Side not implemented, id: " + id));
    }

}

```

## src/main/java/com/nubo/receipts/api/models/enums/StatusEnum.java

```java
package com.nubo.receipts.api.models.enums;

import java.util.Arrays;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum StatusEnum {

    NOT_STATUS(0L, "NO ESTADO", ""),
    REGISTERED(1L, "REGISTRADA", "REGISTRO_OPERACION"),
    ASSIGNED(2L, "ASIGNADA", "ASIGNACION"),
    CORRECTION_REQUEST(7L, "SOLICITADA", "REASIGNACION_CORRECCION"),
    CORRECTION_ACCEPTED(9L, "ACEPTADA", "REASIGNACION_CORRECCION"),
    CORRECTION_REJECTED(10L, "RECHAZADA", "REASIGNACION_CORRECCION"),
    CANCELED(11L, "CANCELADA", "REGISTRO_OPERACION"),
    NEGOCIATED(13L, "NEGOCIADA", "REGISTRO_OPERACION"),
    SENT(14L, "ENVIADA", "ASIGNACION"),
    ACCEPTED(15L, "ACEPTADA", "ASIGNACION"),
    REJECTED(16L, "RECHAZADA", "ASIGNACION"),
    CUSTODIAN_TRANSFERRED(1071L, "TRASLADADA", "CUSTODIO"),
    CUSTODIAN_PRE_MATCH(1072L, "PRE-MATCH", "CUSTODIO"),
    CUSTODIAN_ADMITTED(1073L, "ADMITIDA", "CUSTODIO"),
    CUSTODIAN_REJECTED(1074L, "RECHAZADA", "CUSTODIO"),
    FILE_GENERATED(901L, "GENERADA", "ARCHIVO LIQUIDA"),
    FILE_IN_PROCESS(900L, "EN PROCESO", "ARCHIVO LIQUIDA"),
    FILE_ERROR(902L, "FALLIDO", "ARCHIVO LIQUIDA"),
    PARTICIPANT_ACTIVE(510L, "ACTIVO", "PARTICIPANTES");

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

}

```

## src/main/java/com/nubo/receipts/api/models/enums/StatusFilterOptionEnum.java

```java
package com.nubo.receipts.api.models.enums;

import java.util.Arrays;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum StatusFilterOptionEnum {

    REGISTERED("REGISTRADAS", StatusEnum.REGISTERED),
    ASSIGNED("ASIGNADAS", StatusEnum.ASSIGNED);

    @JsonValue
    private final String value;
    private final StatusEnum statusEnum;

    @JsonCreator
    public static StatusFilterOptionEnum fromValue(String value) {
        return Arrays.stream(StatusFilterOptionEnum.values())
                .filter(options -> options.getValue().equalsIgnoreCase(value))
                .findFirst()
                .orElse(ASSIGNED);
    }

}

```

## src/main/java/com/nubo/receipts/api/models/enums/TimeZoneEnum.java

```java
package com.nubo.receipts.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum TimeZoneEnum {

    COLOMBIA_STANDARD_TIME("America/Bogota", "COT", -5, CountryEnum.COLOMBIA),
    PERU_STANDARD_TIME("America/Lima", "PET", -5, CountryEnum.PERU),
    CHILE_STANDARD_TIME("America/Santiago", "CLT", -4, CountryEnum.CHILE);

    private final String zoneId;
    private final String abbreviation;
    private final int utcOffset;
    private final CountryEnum country;

}

```

## src/main/java/com/nubo/receipts/api/models/enums/TypeEnum.java

```java
package com.nubo.receipts.api.models.enums;

import java.util.Arrays;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum TypeEnum {

    FILE_LIQUIDA_TODAY(160, "ARCHIVO LIQ. CONTADO REPO DIARIO", "TIPO_RUTA"),
    FILE_LIQUIDA_HISTORY(165, "ARCHIVO LIQ. CONTADO REPO HISTORICO", "TIPO_RUTA"),
    FILE_CORRECTIONS(163, "REPORTE CORRECCIÓN OPERACIONES", "TIPO_RUTA"),
    FILE_CUSTODIAN_REPORT(168, "REPORTE DETALLADO DE PAQUETES CUSTODIO", "TIPO_RUTA"),
    FILE_CUSTODIAN_UPDATES_REPORT(169, "REPORTE DETALLADO DE NOVEDADES CUSTODIO", "TIPO_RUTA"),
    FILE_PAPELETA_TODAY(166, "ARCHIVO PAPELETA CONTADO REPO DIARIO", "TIPO_RUTA"),
    FILE_PAPELETA_HISTORY(167, "ARCHIVO PAPELETA CONTADO REPO HISTORICO", "TIPO_RUTA"),
    CONT(60L, "CONTADO", "OPERACIÓN"),
    REPO(61L, "REPO", "OPERACIÓN"),
    THIRD_PARTIES_POINT_ORIGIN(120L, "TERCEROS", "ORIGEN PUNTA"),
    OWN_POSITION_POINT_ORIGIN(121L, "POSICION PROPIA", "ORIGEN PUNTA"),
    COLLECTIVE_PORTFOLIO_POINT_ORIGIN(122L, "CARTERA COLECTIVA", "ORIGEN PUNTA"),
    NEGOTIATION(90L, "NEGOCIACIÓN", "ORIGEN"),
    REGISTRATION(91L, "REGISTRO", "ORIGEN"),
    PARTICIPANT_CUSTODIAN(35L, "CUSTODIO", "PARTICIPANTE");

    private final long id;
    private final String description;
    private final String category;

    public static TypeEnum fromDescriptionOperation(String description) {
        return Arrays.stream(TypeEnum.values())
                .filter(type -> type.getCategory().equals("OPERACIÓN"))
                .filter(type -> type.getDescription().equals(description))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown value: " + description));
    }
}

```

## src/main/java/com/nubo/receipts/api/models/enums/TypeFilterOptionEnum.java

```java
package com.nubo.receipts.api.models.enums;

import java.util.Arrays;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum TypeFilterOptionEnum {

    REPORT_LIQUIDA_TODAY("LIQUIDA_DIARIO", TypeEnum.FILE_LIQUIDA_TODAY),
    REPORT_LIQUIDA_HISTORY("LIQUIDA_HISTORICO", TypeEnum.FILE_LIQUIDA_HISTORY),
    REPORT_CORRECTIONS("CORRECCIONES", TypeEnum.FILE_CORRECTIONS),
    REPORT_CUSTODIAN("REPORTE_CUSTODIO", TypeEnum.FILE_CUSTODIAN_REPORT),
    REPORT_PAPELETA_TODAY("PAPELETA_DIARIO", TypeEnum.FILE_PAPELETA_TODAY),
    REPORT_PAPELETA_HISTORY("PAPELETA_HISTORICO", TypeEnum.FILE_PAPELETA_HISTORY),
    REPORT_CUSTODIAN_UPDATES("REPORTE_NOVEDADES_CUSTODIO", TypeEnum.FILE_CUSTODIAN_UPDATES_REPORT);

    @JsonValue
    private final String value;
    private final TypeEnum typeEnum;

    @JsonCreator
    public static TypeFilterOptionEnum fromValue(String value) {
        return Arrays.stream(TypeFilterOptionEnum.values())
                .filter(options -> options.getValue().equalsIgnoreCase(value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown typeReport: " + value));
    }

}

```

## src/main/java/com/nubo/receipts/api/models/enums/UserTypeEnum.java

```java
package com.nubo.receipts.api.models.enums;

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

## src/main/java/com/nubo/receipts/api/models/enums/VersionApiEnum.java

```java
package com.nubo.receipts.api.models.enums;

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

## src/main/java/com/nubo/receipts/api/models/enums/VoucherTypeEnum.java

```java
package com.nubo.receipts.api.models.enums;

import java.util.Arrays;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum VoucherTypeEnum {

    LIQ_FILE("ARCHIVO_LIQUIDA"),
    SLIP("PAPELETA");

    private final String value;

    @JsonValue
    public String getValue() {
        return value;
    }

    @JsonCreator
    public static VoucherTypeEnum fromValue(String value) {
        return Arrays.stream(VoucherTypeEnum.values())
                .filter(voucherType -> voucherType.value.equalsIgnoreCase(value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Voucher type not implemented: " + value));
    }
}

```

## src/main/java/com/nubo/receipts/api/repository/CountryRepository.java

```java
package com.nubo.receipts.api.repository;

import com.nubo.receipts.api.models.entity.CountryEntity;
import org.springframework.data.jpa.repository.JpaRepository;


public interface CountryRepository extends JpaRepository<CountryEntity, Long> {
}

```

## src/main/java/com/nubo/receipts/api/repository/CustodianIncidentsReportRepository.java

```java
package com.nubo.receipts.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.nubo.receipts.api.models.entity.CustodianIncidentsReportViewEntity;

public interface CustodianIncidentsReportRepository
        extends JpaRepository<CustodianIncidentsReportViewEntity, String>,
        JpaSpecificationExecutor<CustodianIncidentsReportViewEntity> {
}

```

## src/main/java/com/nubo/receipts/api/repository/CustodianPackageReportRepository.java

```java
package com.nubo.receipts.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.nubo.receipts.api.models.entity.CustodianPackageReportViewEntity;

public interface CustodianPackageReportRepository
        extends JpaRepository<CustodianPackageReportViewEntity, String>,
        JpaSpecificationExecutor<CustodianPackageReportViewEntity> {
}

```

## src/main/java/com/nubo/receipts/api/repository/CustodianReportViewRepository.java

```java
package com.nubo.receipts.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.nubo.receipts.api.models.entity.CustodianReportViewEntity;
import com.nubo.receipts.api.models.entity.CustodianReportViewKey;

public interface CustodianReportViewRepository extends JpaRepository<CustodianReportViewEntity, CustodianReportViewKey>,
        JpaSpecificationExecutor<CustodianReportViewEntity> {
}

```

## src/main/java/com/nubo/receipts/api/repository/CustodianUpdatesReportRepository.java

```java
package com.nubo.receipts.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.nubo.receipts.api.models.entity.CustodianUpdatesReportViewEntity;

public interface CustodianUpdatesReportRepository extends JpaRepository<CustodianUpdatesReportViewEntity, Integer>,
        JpaSpecificationExecutor<CustodianUpdatesReportViewEntity> {
}

```

## src/main/java/com/nubo/receipts/api/repository/FileGenerateRepository.java

```java
package com.nubo.receipts.api.repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import com.nubo.receipts.api.models.entity.FileGenerateEntity;

public interface FileGenerateRepository extends JpaRepository<FileGenerateEntity, Long>,
        JpaSpecificationExecutor<FileGenerateEntity> {

    @Query("""
            SELECT COUNT(f) FROM FileGenerateEntity f
            WHERE f.participant.id = :participantId
            AND YEAR(f.generatedAt) = :year
            AND MONTH(f.generatedAt) = :month
            """)
    long countByParticipantAndMonth(Long participantId, int year, int month);

    @Query("""
            SELECT COUNT(f) FROM FileGenerateEntity f
            WHERE f.participant.id = :participantId
            AND f.type.id = :typeId
            AND YEAR(f.generatedAt) = :year
            AND MONTH(f.generatedAt) = :month
            """)
    long countByParticipantAndTypeAndMonth(Long participantId, Long typeId, int year, int month);

    @Query("""
            SELECT f FROM FileGenerateEntity f
            WHERE f.generatedBy = :generatedBy
            AND f.generationStatus.id IN :statusIds
            """)
    List<FileGenerateEntity> findByGeneratedByAndGenerationStatusIn(
            String generatedBy,
            List<Long> statusIds);

    @Query("""
            SELECT f FROM FileGenerateEntity f
            WHERE f.generatedBy = :generatedBy
            AND f.generationStatus.id IN :statusIds
            AND f.type.id = :typeId
            """)
    List<FileGenerateEntity> findByGeneratedByAndGenerationStatusInAndTypeId(
            String generatedBy,
            List<Long> statusIds,
            Long typeId);

    @Query("""
            SELECT f FROM FileGenerateEntity f
            WHERE f.participant.id = :participantId
            AND f.type.id = :typeId
            AND f.fileName = :fileName
            ORDER BY f.generatedAt ASC
            LIMIT 1
            """)
    Optional<FileGenerateEntity> findTopByParticipantIdAndTypeIdOrderByGeneratedAtDesc(
            Long participantId,
            Long typeId,
            String fileName);

    @Query("""
            SELECT f FROM FileGenerateEntity f
            WHERE f.participant.id = :participantId
            AND f.type.id = :typeId
            AND f.recordDate = :recordDate
            ORDER BY f.generatedAt ASC
            LIMIT 1
            """)
    Optional<FileGenerateEntity> findTopByParticipantIdAndTypeIdOrderByGeneratedAtDesc(
            Long participantId,
            Long typeId,
            LocalDate recordDate);

}

```

## src/main/java/com/nubo/receipts/api/repository/ParticipantRepository.java

```java
package com.nubo.receipts.api.repository;

import com.nubo.receipts.api.models.entity.ParticipantEntity;
import java.util.Optional;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface ParticipantRepository extends JpaRepository<ParticipantEntity, Long> {

    @Query("""
            SELECT p FROM ParticipantEntity p
            WHERE p.statusId = :statusId
            """)
    List<ParticipantEntity> findAllByStatusId(Long statusId);

    Optional<ParticipantEntity> findByCode(String code);

}

```

## src/main/java/com/nubo/receipts/api/repository/SettlementRepository.java

```java
package com.nubo.receipts.api.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.nubo.receipts.api.models.entity.SettlementEntity;
import com.nubo.receipts.api.models.entity.SettlementKey;

public interface SettlementRepository extends JpaRepository<SettlementEntity, SettlementKey>,
        JpaSpecificationExecutor<SettlementEntity> {

    @Query("""
            SELECT s FROM SettlementEntity s JOIN s.trade t JOIN side si
            WHERE t.id = :tradeId AND si.id = :sideId AND t.participantBuy.id = :participantId
            """)
    List<SettlementEntity> findByTradeIdAndSideIdAndParticipantBuy(Long tradeId, String sideId, Long participantId);

    @Query("""
            SELECT s FROM SettlementEntity s JOIN s.trade t JOIN side si
            WHERE t.id = :tradeId AND si.id = :sideId AND t.participantSell.id = :participantId
            """)
    List<SettlementEntity> findByTradeIdAndSideIdAndParticipantSell(Long tradeId, String sideId, Long participantId);

    @Query("""
            SELECT set FROM SettlementEntity set JOIN set.trade t
            JOIN set.side si
            WHERE t.id = :tradeId AND si.id = :sideId
            """)
    List<SettlementEntity> findByTradeIdAndSideId(Long tradeId, String sideId);

    @Query("""
            SELECT set FROM SettlementEntity set JOIN set.trade t
            JOIN set.side si
            WHERE t.id = :tradeId
            """)
    List<SettlementEntity> findByTradeId(Long tradeId);

    @Query("""
            SELECT COUNT(s) FROM SettlementEntity s
            JOIN s.trade t
            WHERE t.matchDate = :matchDate
            AND t.type.id IN (:tradeTypeIds)
            AND (:countryId IS NULL OR t.country.id = :countryId)
            AND (t.canceledStatus IS NULL OR t.canceledStatus = false)
            AND (
                (:buySideId IS NOT NULL
                 AND s.side.id = :buySideId
                 AND t.participantBuy.id = :participantId
                 AND t.buyStatus.id IN (:statusIds)
                 AND t.assignmentMarkBuy = true)
                OR
                (:sellSideId IS NOT NULL
                 AND s.side.id = :sellSideId
                 AND t.participantSell.id = :participantId
                 AND t.sellStatus.id IN (:statusIds)
                 AND t.assignmentMarkSell = true)
            )
            """)
    long countSettlementReport(
            @Param("matchDate") LocalDate date,
            @Param("participantId") Long participantId,
            @Param("tradeTypeIds") List<Long> tradeTypeIds,
            @Param("statusIds") List<Long> statusIds,
            @Param("countryId") Long countryId,
            @Param("buySideId") String buySideId,
            @Param("sellSideId") String sellSideId);

    @Query("""
            SELECT s FROM SettlementEntity s
            JOIN s.trade t
            WHERE t.matchDate = :matchDate
            AND t.matchId = :matchId
            AND (:tradeTypeId IS NULL OR t.type.id = :tradeTypeId)
            AND (:countryCode IS NULL OR UPPER(t.country.code) = UPPER(:countryCode))
            AND (t.canceledStatus IS NULL OR t.canceledStatus = false)
            AND (
                (:buySideId IS NOT NULL
                 AND s.side.id = :buySideId
                 AND t.participantBuy.id = :participantId
                 AND t.buyStatus.id IN (:statusIds)
                 AND t.assignmentMarkBuy = true)
                OR
                (:sellSideId IS NOT NULL
                 AND s.side.id = :sellSideId
                 AND t.participantSell.id = :participantId
                 AND t.sellStatus.id IN (:statusIds)
                 AND t.assignmentMarkSell = true)
            )
            """)
    Page<SettlementEntity> findSettlementReportPage(
            @Param("matchDate") LocalDate date,
            @Param("matchId") Long matchId,
            @Param("participantId") Long participantId,
            @Param("tradeTypeId") Long tradeTypeId,
            @Param("statusIds") List<Long> statusIds,
            @Param("countryCode") String countryCode,
            @Param("buySideId") String buySideId,
            @Param("sellSideId") String sellSideId,
            Pageable pageable);

    @Query("""
            SELECT s FROM SettlementEntity s
            JOIN s.trade t
            WHERE t.matchDate BETWEEN :startDate AND :endDate
            AND (:tradeTypeId IS NULL OR t.type.id = :tradeTypeId)
            AND (:countryCode IS NULL OR UPPER(t.country.code) = UPPER(:countryCode))
            AND (t.canceledStatus IS NULL OR t.canceledStatus = false)
            AND (
                (:buySideId IS NOT NULL
                 AND s.side.id = :buySideId
                 AND t.participantBuy.id = :participantId
                 AND t.buyStatus.id IN (:statusIds)
                 AND t.assignmentMarkBuy = true)
                OR
                (:sellSideId IS NOT NULL
                 AND s.side.id = :sellSideId
                 AND t.participantSell.id = :participantId
                 AND t.sellStatus.id IN (:statusIds)
                 AND t.assignmentMarkSell = true)
            )
            """)
    Page<SettlementEntity> findSettlementReportByDateRangePage(
            @Param("startDate") LocalDate startDate,
            @Param("endDate") LocalDate endDate,
            @Param("participantId") Long participantId,
            @Param("tradeTypeId") Long tradeTypeId,
            @Param("statusIds") List<Long> statusIds,
            @Param("countryCode") String countryCode,
            @Param("buySideId") String buySideId,
            @Param("sellSideId") String sellSideId,
            Pageable pageable);
}

```

## src/main/java/com/nubo/receipts/api/repository/SideRepository.java

```java
package com.nubo.receipts.api.repository;

import com.nubo.receipts.api.models.entity.SideEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SideRepository extends JpaRepository<SideEntity, String> {
}

```

## src/main/java/com/nubo/receipts/api/repository/StatusRepository.java

```java
package com.nubo.receipts.api.repository;

import com.nubo.receipts.api.models.entity.StatusEntity;
import org.springframework.data.jpa.repository.JpaRepository;


public interface StatusRepository extends JpaRepository<StatusEntity, Long> {
}

```

## src/main/java/com/nubo/receipts/api/repository/TradeRepository.java

```java
package com.nubo.receipts.api.repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.nubo.receipts.api.models.domain.TradeSettlementReport;
import com.nubo.receipts.api.models.entity.TradeEntity;

public interface TradeRepository extends JpaRepository<TradeEntity, Long>, JpaSpecificationExecutor<TradeEntity> {

    @Query("""
            SELECT t FROM TradeEntity t
            WHERE t.matchId = :matchId
            AND t.matchDate = :matchDate
            """)
    Optional<TradeEntity> findByMatchIdAndMatchDate(Long matchId, LocalDate matchDate);

    @Query("""
            SELECT COUNT(t) FROM TradeEntity t
            WHERE t.matchDate = :date
            AND t.type.id IN (:tradeTypeIds)
            AND (:countryId IS NULL OR t.country.id = :countryId)
            AND (t.canceledStatus IS NULL OR t.canceledStatus = false)
            AND (
                (:buySideId IS NOT NULL
                 AND t.participantBuy.id = :participantId
                 AND t.buyStatus.id = :statusId)
                OR
                (:sellSideId IS NOT NULL
                 AND t.participantSell.id = :participantId
                 AND t.sellStatus.id = :statusId)
            )
            """)
    long countSettlementReport(
            @Param("date") LocalDate date,
            @Param("participantId") Long participantId,
            @Param("tradeTypeIds") List<Long> tradeTypeIds,
            @Param("statusId") Long statusId,
            @Param("countryId") Long countryId,
            @Param("buySideId") String buySideId,
            @Param("sellSideId") String sellSideId);

    @Query("""
            SELECT new com.nubo.receipts.api.models.domain.TradeSettlementReport(t, s)
            FROM TradeEntity t
            LEFT JOIN SettlementEntity s ON s.trade = t
                AND (
                    (:buySideId IS NOT NULL
                     AND t.participantBuy.id = :participantId
                     AND s.side.id = :buySideId)
                    OR
                    (:sellSideId IS NOT NULL
                     AND t.participantSell.id = :participantId
                     AND s.side.id = :sellSideId)
                )
            WHERE t.matchDate = :matchDate
            AND t.matchId = :matchId
            AND (:tradeTypeId IS NULL OR t.type.id = :tradeTypeId)
            AND (:countryCode IS NULL OR UPPER(t.country.code) = UPPER(:countryCode))
            AND (t.canceledStatus IS NULL OR t.canceledStatus = false)
            AND (
                (:buySideId IS NOT NULL
                 AND t.participantBuy.id = :participantId
                 AND (
                     (t.assignmentMarkBuy = true
                      AND t.buyStatus.id IN (:assignedStatusIds)
                      AND s IS NOT NULL AND s.side.id = :buySideId)
                     OR
                     (t.assignmentMarkBuy = false
                      AND t.buyStatus.id = :registeredStatusId
                      AND s IS NULL)
                 ))
                OR
                (:sellSideId IS NOT NULL
                 AND t.participantSell.id = :participantId
                 AND (
                     (t.assignmentMarkSell = true
                      AND t.sellStatus.id IN (:assignedStatusIds)
                      AND s IS NOT NULL AND s.side.id = :sellSideId)
                     OR
                     (t.assignmentMarkSell = false
                      AND t.sellStatus.id = :registeredStatusId
                      AND s IS NULL)
                 ))
            )
            """)
    Page<TradeSettlementReport> findSettlementReportPage(
            @Param("matchDate") LocalDate matchDate,
            @Param("matchId") Long matchId,
            @Param("participantId") Long participantId,
            @Param("tradeTypeId") Long tradeTypeId,
            @Param("assignedStatusIds") List<Long> assignedStatusIds,
            @Param("registeredStatusId") Long registeredStatusId,
            @Param("countryCode") String countryCode,
            @Param("buySideId") String buySideId,
            @Param("sellSideId") String sellSideId,
            Pageable pageable);

    @Query("""
            SELECT new com.nubo.receipts.api.models.domain.TradeSettlementReport(t, s)
            FROM TradeEntity t
            LEFT JOIN SettlementEntity s ON s.trade = t
                AND (
                    (:buySideId IS NOT NULL
                     AND t.participantBuy.id = :participantId
                     AND s.side.id = :buySideId)
                    OR
                    (:sellSideId IS NOT NULL
                     AND t.participantSell.id = :participantId
                     AND s.side.id = :sellSideId)
                )
            WHERE t.matchDate BETWEEN :startDate AND :endDate
            AND (:tradeTypeId IS NULL OR t.type.id = :tradeTypeId)
            AND (:countryCode IS NULL OR t.country.code = :countryCode)
            AND (t.canceledStatus IS NULL OR t.canceledStatus = false)
            AND (
                (:buySideId IS NOT NULL
                 AND t.participantBuy.id = :participantId
                 AND (
                     (t.assignmentMarkBuy = true
                      AND t.buyStatus.id IN (:assignedStatusIds)
                      AND s IS NOT NULL AND s.side.id = :buySideId)
                     OR
                     (t.assignmentMarkBuy = false
                      AND t.buyStatus.id = :registeredStatusId
                      AND s IS NULL)
                 ))
                OR
                (:sellSideId IS NOT NULL
                 AND t.participantSell.id = :participantId
                 AND (
                     (t.assignmentMarkSell = true
                      AND t.sellStatus.id IN (:assignedStatusIds)
                      AND s IS NOT NULL AND s.side.id = :sellSideId)
                     OR
                     (t.assignmentMarkSell = false
                      AND t.sellStatus.id = :registeredStatusId
                      AND s IS NULL)
                 ))
            )
            """)
    Page<TradeSettlementReport> findSettlementReportByDateRangePage(
            @Param("startDate") LocalDate startDate,
            @Param("endDate") LocalDate endDate,
            @Param("participantId") Long participantId,
            @Param("tradeTypeId") Long tradeTypeId,
            @Param("assignedStatusIds") List<Long> assignedStatusIds,
            @Param("registeredStatusId") Long registeredStatusId,
            @Param("countryCode") String countryCode,
            @Param("buySideId") String buySideId,
            @Param("sellSideId") String sellSideId,
            Pageable pageable);

}

```

## src/main/java/com/nubo/receipts/api/repository/TypeRepository.java

```java
package com.nubo.receipts.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.receipts.api.models.entity.TypeEntity;

public interface TypeRepository extends JpaRepository<TypeEntity, Long> {
}
```

## src/main/java/com/nubo/receipts/api/repository/UserNuboRepository.java

```java
package com.nubo.receipts.api.repository;

import com.nubo.receipts.api.models.entity.UserNuboEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserNuboRepository extends JpaRepository<UserNuboEntity, Long> {

    Optional<UserNuboEntity> findByUserName(String userName);

}

```

## src/main/java/com/nubo/receipts/api/service/BatchCacheService.java

```java
package com.nubo.receipts.api.service;

import java.util.Optional;

import com.nubo.receipts.api.models.entity.CountryEntity;
import com.nubo.receipts.api.models.entity.SideEntity;
import com.nubo.receipts.api.models.entity.StatusEntity;
import com.nubo.receipts.api.models.entity.TypeEntity;

public interface BatchCacheService {

    Optional<SideEntity> findSideCache(String sideId);

    Optional<StatusEntity> findStatusCache(Long statusId);

    Optional<TypeEntity> findTypeCache(Long typeId);

    Optional<CountryEntity> findCountryCache(Long countryId);

}

```

## src/main/java/com/nubo/receipts/api/service/CustodianReportService.java

```java
package com.nubo.receipts.api.service;

import com.nubo.receipts.api.models.dto.request.CustodianReportFilterInDto;
import com.nubo.receipts.api.models.dto.response.SettlementReport.FileGenerateDto;

public interface CustodianReportService {

    FileGenerateDto generateCustodianReport(CustodianReportFilterInDto filter,
            Long userId, Long participantId);
}

```

## src/main/java/com/nubo/receipts/api/service/CustodianUpdatesReportService.java

```java
package com.nubo.receipts.api.service;

import com.nubo.receipts.api.models.dto.request.CustodianUpdatesReportFilterInDto;
import com.nubo.receipts.api.models.dto.response.SettlementReport.FileGenerateDto;

public interface CustodianUpdatesReportService {

    FileGenerateDto generateCustodianUpdatesReport(CustodianUpdatesReportFilterInDto filter, Long userId,
            Long participantId);
}

```

## src/main/java/com/nubo/receipts/api/service/FileGenerateHistoryService.java

```java
package com.nubo.receipts.api.service;

import com.nubo.receipts.api.models.dto.request.FileGenerateHistoryInDto;
import com.nubo.receipts.api.models.dto.response.PageResponseOutDto;
import com.nubo.receipts.api.models.dto.response.SettlementReport.FileGenerateDto;
import com.nubo.receipts.api.models.enums.TypeFilterOptionEnum;

public interface FileGenerateHistoryService {

    PageResponseOutDto<FileGenerateDto> getReportHistoryByUser(Long userId, FileGenerateHistoryInDto filter);

    PageResponseOutDto<FileGenerateDto> getReportHistoryByUser(Long userId, int page, int size,
            String sort, String order, Long participantId, TypeFilterOptionEnum optionsTypeEnum);

}

```

## src/main/java/com/nubo/receipts/api/service/ReceiptSettlementService.java

```java
package com.nubo.receipts.api.service;

import com.nubo.receipts.api.models.dto.request.SideOperationInDto;
import com.nubo.receipts.api.models.dto.request.TradeOperationInDto;
import com.nubo.receipts.api.models.dto.response.massive.ReceiptSettlementPlaneOutDto;
import com.nubo.receipts.api.models.dto.response.pdf.ReceiptSettlementOutDto;

import java.util.List;

public interface ReceiptSettlementService {

    @Deprecated
    List<ReceiptSettlementPlaneOutDto> generateReceiptSpecialTradeFoliosByUser(Long userId,
            List<TradeOperationInDto> tradeOperationInDtoList);

    List<ReceiptSettlementOutDto> generateReceiptSettlementOperation(Long tradeId,
            List<SideOperationInDto> sideOperationInDtoList);

}

```

## src/main/java/com/nubo/receipts/api/service/SettlementFileDataService.java

```java
package com.nubo.receipts.api.service;

import java.time.LocalDate;

import com.nubo.receipts.api.models.dto.request.FileIndividualInDto;
import com.nubo.receipts.api.models.dto.request.FileMassiveInDto;
import com.nubo.receipts.api.models.dto.response.PageResponseOutDto;

public interface SettlementFileDataService {

    PageResponseOutDto<?> processIndividualSettlementFile(FileIndividualInDto requestParams);

    PageResponseOutDto<?> processMassiveSettlementFile(FileMassiveInDto request);

    boolean isWithinValidDateRange(LocalDate registrationDate);
}

```

## src/main/java/com/nubo/receipts/api/service/SettlementReportAutoService.java

```java
package com.nubo.receipts.api.service;

import com.nubo.receipts.api.models.dto.response.ReportOutDto;
import com.nubo.receipts.api.models.enums.TimeZoneEnum;

public interface SettlementReportAutoService {

    ReportOutDto generateReportLiquidaAutomatic(TimeZoneEnum timeZone);

    ReportOutDto generateReportPapeletaAutomatic(TimeZoneEnum timeZone);

}

```

## src/main/java/com/nubo/receipts/api/service/SettlementReportService.java

```java
package com.nubo.receipts.api.service;

import java.time.LocalDate;

import com.nubo.receipts.api.client.kafka.models.dto.SettlementReportFileInDto;
import com.nubo.receipts.api.models.domain.ReportData;
import com.nubo.receipts.api.models.dto.response.SettlementReport.FileGenerateDto;
import com.nubo.receipts.api.models.entity.FileGenerateEntity;
import com.nubo.receipts.api.models.entity.ParticipantEntity;
import com.nubo.receipts.api.models.enums.StatusFilterOptionEnum;

public interface SettlementReportService {

    FileGenerateDto generateLiquidaReport(LocalDate date, StatusFilterOptionEnum status, Long participantId,
            Long userId,
            Long countryId);

    FileGenerateDto generatePapeletaReport(LocalDate date, Long participantId, Long userId);

    FileGenerateEntity publishReportToKafka(SettlementReportFileInDto settlementReportFileInDto,
            ReportData reportData);

    SettlementReportFileInDto findAllTradeWithStatusRegistered(LocalDate date,
            ParticipantEntity participantEntity, Long countryId);

    SettlementReportFileInDto findAllSettlementWithStatus(LocalDate date,
            ParticipantEntity participantEntity, Long countryId);

}

```

## src/main/java/com/nubo/receipts/api/service/impl/BatchCacheServiceImpl.java

```java
package com.nubo.receipts.api.service.impl;

import java.util.Optional;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.nubo.receipts.api.models.entity.CountryEntity;
import com.nubo.receipts.api.models.entity.SideEntity;
import com.nubo.receipts.api.models.entity.StatusEntity;
import com.nubo.receipts.api.models.entity.TypeEntity;
import com.nubo.receipts.api.repository.CountryRepository;
import com.nubo.receipts.api.repository.SideRepository;
import com.nubo.receipts.api.repository.StatusRepository;
import com.nubo.receipts.api.repository.TypeRepository;
import com.nubo.receipts.api.service.BatchCacheService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class BatchCacheServiceImpl implements BatchCacheService {

    private final SideRepository sideRepository;
    private final StatusRepository statusRepository;
    private final TypeRepository typeRepository;
    private final CountryRepository countryRepository;

    @Override
    @Cacheable(value = "sides", key = "#sideId")
    public Optional<SideEntity> findSideCache(String sideId) {
        return sideRepository.findById(sideId);
    }

    @Override
    @Cacheable(value = "status", key = "#statusId")
    public Optional<StatusEntity> findStatusCache(Long statusId) {
        return statusRepository.findById(statusId);
    }

    @Override
    @Cacheable(value = "types", key = "#typeId")
    public Optional<TypeEntity> findTypeCache(Long typeId) {
        return typeRepository.findById(typeId);
    }

    @Override
    @Cacheable(value = "countries", key = "#countryId")
    public Optional<CountryEntity> findCountryCache(Long countryId) {
        return countryRepository.findById(countryId);
    }

}

```

## src/main/java/com/nubo/receipts/api/service/impl/CustodianReportServiceImpl.java

```java
package com.nubo.receipts.api.service.impl;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.util.Objects;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nubo.receipts.api.application.properties.PropertiesConfig;
import com.nubo.receipts.api.application.properties.PropertiesContext;
import com.nubo.receipts.api.application.util.ApplicationUtils;
import com.nubo.receipts.api.client.kafka.models.dto.CustodianReportFileInDto;
import com.nubo.receipts.api.client.kafka.models.dto.ProducerKafkaCustodianReportInDto;
import com.nubo.receipts.api.client.kafka.producer.KafkaNuboAdapter;
import com.nubo.receipts.api.exception.ServiceException;
import com.nubo.receipts.api.exception.error.ErrorCode;
import com.nubo.receipts.api.helpers.FileGenerateMapperUtil;
import com.nubo.receipts.api.helpers.dynamicQuery.dataBase.CustodianPackageReportSpecificationFactory;
import com.nubo.receipts.api.models.dto.request.CustodianReportFilterInDto;
import com.nubo.receipts.api.models.dto.response.SettlementReport.FileGenerateDto;
import com.nubo.receipts.api.models.entity.FileGenerateEntity;
import com.nubo.receipts.api.models.entity.ParticipantEntity;
import com.nubo.receipts.api.models.entity.StatusEntity;
import com.nubo.receipts.api.models.entity.TypeEntity;
import com.nubo.receipts.api.models.entity.UserNuboEntity;
import com.nubo.receipts.api.models.enums.FileTypeOptionEnum;
import com.nubo.receipts.api.models.enums.StatusEnum;
import com.nubo.receipts.api.models.enums.TypeEnum;
import com.nubo.receipts.api.models.enums.UserTypeEnum;
import com.nubo.receipts.api.models.enums.VersionApiEnum;
import com.nubo.receipts.api.repository.CustodianPackageReportRepository;
import com.nubo.receipts.api.repository.FileGenerateRepository;
import com.nubo.receipts.api.repository.ParticipantRepository;
import com.nubo.receipts.api.repository.UserNuboRepository;
import com.nubo.receipts.api.service.BatchCacheService;
import com.nubo.receipts.api.service.CustodianReportService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class CustodianReportServiceImpl implements CustodianReportService {

    private final CustodianPackageReportRepository custodianPackageReportRepository;
    private final FileGenerateRepository fileGenerateRepository;
    private final ParticipantRepository participantRepository;
    private final UserNuboRepository userNuboRepository;
    private final KafkaNuboAdapter kafkaNuboAdapter;
    private final BatchCacheService batchCacheService;
    private final PropertiesConfig propertiesConfig;

    @Transactional
    @Override
    public FileGenerateDto generateCustodianReport(CustodianReportFilterInDto filter,
            Long userId, Long participantId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return generateCustodianReportV1(filter, userId, participantId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private FileGenerateDto generateCustodianReportV1(CustodianReportFilterInDto filter,
            Long userId, Long participantId) {
        LocalDate generationDate = LocalDate.now();
        log.info("Start generateCustodianReport userId={} participantId={} date={}", userId, participantId,
                generationDate);

        UserNuboEntity userNuboEntity = findUserNubo(userId);
        ParticipantEntity participantSession = userNuboEntity.getParticipant();
        CustodianReportFilterInDto effectiveFilter = filter != null ? filter : new CustodianReportFilterInDto();

        if (UserTypeEnum.INTERNAL.equals(userNuboEntity.getUserType()) && participantId != null) {
            participantSession = findParticipantById(participantId);
        }
        if (UserTypeEnum.EXTERNAL.equals(userNuboEntity.getUserType())
                || UserTypeEnum.INTERNAL.equals(userNuboEntity.getUserType())) {
            applyParticipantFilter(effectiveFilter, participantSession);
        }

        long totalRecords = custodianPackageReportRepository.count(
                CustodianPackageReportSpecificationFactory.createFilter(effectiveFilter));

        if (totalRecords == 0) {
            throw new ServiceException(ErrorCode.NOT_DATA_FOUND, HttpStatus.NOT_FOUND);
        }

        FileGenerateEntity fileGenerateEntity = buildAndSaveFileGenerate(participantSession, userNuboEntity,
                generationDate, effectiveFilter.getFileType());

        CustodianReportFileInDto payload = CustodianReportFileInDto.builder()
                .fileGenerateId(fileGenerateEntity.getId())
                .participantId(participantSession.getId())
                .totalRecords(totalRecords)
                .date(generationDate)
                .reportName("Reporte Detallado de Paquetes Custodio")
                .sourceView("NUANBODB.vw_custodian_package_report")
                .filter(effectiveFilter)
                .build();

        sendToKafka(payload, userNuboEntity);

        FileGenerateDto dto = FileGenerateMapperUtil.toDto(fileGenerateEntity, totalRecords, null);
        dto.setMessage("File with " + totalRecords + " operations is being generated...");
        return dto;
    }

    private void applyParticipantFilter(CustodianReportFilterInDto filter, ParticipantEntity participant) {
        String code = resolveNumericCustodianCode(participant.getCode());
        boolean isCustodian = participant.getType() != null
                && TypeEnum.PARTICIPANT_CUSTODIAN.getDescription()
                        .equalsIgnoreCase(participant.getType().getDescription());
        if (isCustodian) {
            filter.setCustodian(code);
        } else {
            filter.setAffiliate(code);
        }
    }

    private FileGenerateEntity buildAndSaveFileGenerate(ParticipantEntity participantEntity,
            UserNuboEntity userNuboEntity, LocalDate date, FileTypeOptionEnum fileType) {

        TypeEntity typeEntity = findType(TypeEnum.FILE_CUSTODIAN_REPORT.getId());
        StatusEntity inProcess = findStatus(StatusEnum.FILE_IN_PROCESS.getId());
        OffsetDateTime now = OffsetDateTime.now();

        FileGenerateEntity last = fileGenerateRepository
                .findTopByParticipantIdAndTypeIdOrderByGeneratedAtDesc(
                        participantEntity.getId(), typeEntity.getId(), date)
                .orElseGet(() -> FileGenerateEntity.builder()
                        .fileConsecutive(0)
                        .generationStatus(inProcess)
                        .generatedAt(now)
                        .build());

        FileGenerateEntity toSave = last.toBuilder()
                .fileName("DetalladodePaquetes")
                .fileType(fileType.name().toLowerCase())
                .filePath("")
                .fileConsecutive(last.getFileConsecutive() != null ? last.getFileConsecutive() + 1 : 1)
                .recordDate(date)
                .generatedBy(userNuboEntity.getUserName())
                .generationStatus(inProcess)
                .operationStatus(inProcess)
                .participant(participantEntity)
                .type(typeEntity)
                .lastModifyUser(userNuboEntity.getUserName())
                .lastModifyDate(LocalDateTime.now())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyApplic(propertiesConfig.getApiName())
                .build();

        return fileGenerateRepository.save(toSave);
    }

    private void sendToKafka(CustodianReportFileInDto payload, UserNuboEntity userNuboEntity) {
        String key = payload.getParticipantId() != null ? payload.getParticipantId().toString() : "";
        ProducerKafkaCustodianReportInDto kafkaDto = ProducerKafkaCustodianReportInDto.builder()
                .clientIp(PropertiesContext.getClientIp())
                .clientUser(PropertiesContext.getClientUser())
                .clientDateTime(ApplicationUtils.convertLocalDateTimeToString(PropertiesContext.getClientDatetime()))
                .targetUserId(userNuboEntity.getId())
                .payload(payload)
                .build();
        kafkaNuboAdapter.sendMessageCustodianReportAsync(key, kafkaDto);
    }

    private ParticipantEntity findParticipantById(Long id) {
        return participantRepository.findById(id)
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private UserNuboEntity findUserNubo(Long userId) {
        return userNuboRepository.findById(userId)
                .orElseThrow(() -> new ServiceException(ErrorCode.USER_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private StatusEntity findStatus(Long statusId) {
        return batchCacheService.findStatusCache(statusId)
                .orElseThrow(() -> new ServiceException(ErrorCode.STATUS_NOT_FOUND, HttpStatus.INTERNAL_SERVER_ERROR));
    }

    private TypeEntity findType(Long typeId) {
        return batchCacheService.findTypeCache(typeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TYPE_NOT_FOUND, HttpStatus.INTERNAL_SERVER_ERROR));
    }

    /**
     * vw_custodian_package_report.pac_custodian stores the numeric suffix of the
     * participant code (e.g. "700" for "CO0700"), same relationship used by
     * vw_custodian_incidents_report (right(code, 3) = pac_custodian).
     */
    private String resolveNumericCustodianCode(String participantCode) {
        if (participantCode == null || participantCode.isBlank()) {
            return participantCode;
        }
        String trimmed = participantCode.trim();
        return trimmed.length() > 3 ? trimmed.substring(trimmed.length() - 3) : trimmed;
    }

}

```

## src/main/java/com/nubo/receipts/api/service/impl/CustodianUpdatesReportServiceImpl.java

```java
package com.nubo.receipts.api.service.impl;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.util.Objects;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nubo.receipts.api.application.properties.PropertiesConfig;
import com.nubo.receipts.api.application.properties.PropertiesContext;
import com.nubo.receipts.api.application.util.ApplicationUtils;
import com.nubo.receipts.api.client.kafka.models.dto.CustodianUpdatesReportFileInDto;
import com.nubo.receipts.api.client.kafka.models.dto.ProducerKafkaCustodianUpdatesReportInDto;
import com.nubo.receipts.api.client.kafka.producer.KafkaNuboAdapter;
import com.nubo.receipts.api.exception.ServiceException;
import com.nubo.receipts.api.exception.error.ErrorCode;
import com.nubo.receipts.api.helpers.FileGenerateMapperUtil;
import com.nubo.receipts.api.helpers.dynamicQuery.dataBase.CustodianIncidentsReportSpecificationFactory;
import com.nubo.receipts.api.models.dto.request.CustodianReportFilterInDto;
import com.nubo.receipts.api.models.dto.request.CustodianUpdatesReportFilterInDto;
import com.nubo.receipts.api.models.dto.response.SettlementReport.FileGenerateDto;
import com.nubo.receipts.api.models.entity.FileGenerateEntity;
import com.nubo.receipts.api.models.entity.ParticipantEntity;
import com.nubo.receipts.api.models.entity.StatusEntity;
import com.nubo.receipts.api.models.entity.TypeEntity;
import com.nubo.receipts.api.models.entity.UserNuboEntity;
import com.nubo.receipts.api.models.enums.StatusEnum;
import com.nubo.receipts.api.models.enums.TypeEnum;
import com.nubo.receipts.api.models.enums.UserTypeEnum;
import com.nubo.receipts.api.models.enums.VersionApiEnum;
import com.nubo.receipts.api.repository.CustodianIncidentsReportRepository;
import com.nubo.receipts.api.repository.FileGenerateRepository;
import com.nubo.receipts.api.repository.ParticipantRepository;
import com.nubo.receipts.api.repository.UserNuboRepository;
import com.nubo.receipts.api.service.BatchCacheService;
import com.nubo.receipts.api.service.CustodianUpdatesReportService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class CustodianUpdatesReportServiceImpl implements CustodianUpdatesReportService {

    private final CustodianIncidentsReportRepository custodianIncidentsReportRepository;
    private final FileGenerateRepository fileGenerateRepository;
    private final ParticipantRepository participantRepository;
    private final UserNuboRepository userNuboRepository;
    private final KafkaNuboAdapter kafkaNuboAdapter;
    private final BatchCacheService batchCacheService;
    private final PropertiesConfig propertiesConfig;

    @Transactional
    @Override
    public FileGenerateDto generateCustodianUpdatesReport(CustodianUpdatesReportFilterInDto filter,
            Long userId, Long participantId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return generateCustodianUpdatesReportV1(filter, userId, participantId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private FileGenerateDto generateCustodianUpdatesReportV1(CustodianUpdatesReportFilterInDto filter,
            Long userId, Long participantId) {
        LocalDate generationDate = LocalDate.now();
        log.info("Start generateCustodianUpdatesReport userId={} participantId={} date={}",
                userId, participantId, generationDate);

        UserNuboEntity userNuboEntity = findUserNubo(userId);
        ParticipantEntity participantSession = resolveParticipant(userNuboEntity, participantId);
        CustodianUpdatesReportFilterInDto effectiveFilter = filter != null ? filter
                : new CustodianUpdatesReportFilterInDto();

        if (UserTypeEnum.INTERNAL.equals(userNuboEntity.getUserType()) && participantId != null) {
            participantSession = findParticipantById(participantId);
        }
        if (UserTypeEnum.EXTERNAL.equals(userNuboEntity.getUserType())
                || UserTypeEnum.INTERNAL.equals(userNuboEntity.getUserType())) {
            applyParticipantFilter(effectiveFilter, participantSession);
        }

        long totalRecords = custodianIncidentsReportRepository.count(
                CustodianIncidentsReportSpecificationFactory.createFilter(effectiveFilter));

        if (totalRecords == 0) {
            throw new ServiceException(ErrorCode.NOT_DATA_FOUND, HttpStatus.NOT_FOUND);
        }

        FileGenerateEntity fileGenerateEntity = buildAndSaveFileGenerate(
                participantSession, userNuboEntity, generationDate);

        CustodianUpdatesReportFileInDto kafkaPayload = CustodianUpdatesReportFileInDto.builder()
                .fileGenerateId(fileGenerateEntity.getId())
                .participantId(participantSession.getId())
                .totalRecords(totalRecords)
                .date(generationDate)
                .reportName("Reporte de Novedades Custodio")
                .sourceView("NUANBODB.vw_custodian_incidents_report")
                .filter(effectiveFilter)
                .build();

        sendToKafka(kafkaPayload, userNuboEntity);

        log.info("Custodian updates report request sent to Kafka. fileGenerateId={} totalRecords={}",
                fileGenerateEntity.getId(), totalRecords);

        FileGenerateDto dto = FileGenerateMapperUtil.toDto(fileGenerateEntity, totalRecords, null);
        dto.setMessage("File with " + totalRecords + " operations is being generated...");
        return dto;
    }

    private void applyParticipantFilter(CustodianUpdatesReportFilterInDto filter, ParticipantEntity participant) {
        String code = resolveNumericCustodianCode(participant.getCode());
        boolean isCustodian = participant.getType() != null
                && TypeEnum.PARTICIPANT_CUSTODIAN.getDescription()
                        .equalsIgnoreCase(participant.getType().getDescription());
        if (isCustodian) {
            filter.setCustodian(code);
        } else {
            filter.setAffiliatedCode(code);
        }
    }

    private FileGenerateEntity buildAndSaveFileGenerate(ParticipantEntity participantEntity,
            UserNuboEntity userNuboEntity, LocalDate date) {

        TypeEntity typeEntity = findType(TypeEnum.FILE_CUSTODIAN_UPDATES_REPORT.getId());
        StatusEntity inProcess = findStatus(StatusEnum.FILE_IN_PROCESS.getId());
        OffsetDateTime now = OffsetDateTime.now();

        FileGenerateEntity last = fileGenerateRepository
                .findTopByParticipantIdAndTypeIdOrderByGeneratedAtDesc(
                        participantEntity.getId(), typeEntity.getId(), date)
                .orElseGet(() -> FileGenerateEntity.builder()
                        .fileConsecutive(0)
                        .generationStatus(inProcess)
                        .generatedAt(now)
                        .build());

        FileGenerateEntity toSave = last.toBuilder()
                .fileName("ReporteDeNovedades")
                .fileType("csv")
                .filePath("")
                .fileConsecutive(last.getFileConsecutive() != null ? last.getFileConsecutive() + 1 : 1)
                .recordDate(date)
                .generatedBy(userNuboEntity.getUserName())
                .generationStatus(inProcess)
                .operationStatus(inProcess)
                .participant(participantEntity)
                .type(typeEntity)
                .lastModifyUser(userNuboEntity.getUserName())
                .lastModifyDate(LocalDateTime.now())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyApplic(propertiesConfig.getApiName())
                .build();

        return fileGenerateRepository.save(toSave);
    }

    private void sendToKafka(CustodianUpdatesReportFileInDto payload, UserNuboEntity userNuboEntity) {
        String key = payload.getParticipantId() != null ? payload.getParticipantId().toString() : "";
        ProducerKafkaCustodianUpdatesReportInDto kafkaDto = ProducerKafkaCustodianUpdatesReportInDto.builder()
                .clientIp(PropertiesContext.getClientIp())
                .clientUser(PropertiesContext.getClientUser())
                .clientDateTime(ApplicationUtils.convertLocalDateTimeToString(PropertiesContext.getClientDatetime()))
                .targetUserId(userNuboEntity.getId())
                .payload(payload)
                .build();
        kafkaNuboAdapter.sendMessageCustodianUpdatesReportAsync(key, kafkaDto);
    }

    /**
     * Resolves the numeric suffix used by the custodian incidents report view.
     * For example, C00016 becomes 016 and CO0700 becomes 700.
     */
    private String resolveNumericCustodianCode(String participantCode) {
        if (participantCode == null || participantCode.isBlank()) {
            return participantCode;
        }
        String trimmed = participantCode.trim();
        return trimmed.length() > 3 ? trimmed.substring(trimmed.length() - 3) : trimmed;
    }

    private ParticipantEntity resolveParticipant(UserNuboEntity userNuboEntity, Long participantId) {
        if (UserTypeEnum.EXTERNAL.equals(userNuboEntity.getUserType())) {
            if (userNuboEntity.getParticipant() == null) {
                throw new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, HttpStatus.NOT_FOUND);
            }
            return findParticipantById(userNuboEntity.getParticipant().getId());
        }
        Long idToUse = participantId != null ? participantId : userNuboEntity.getParticipant().getId();
        return findParticipantById(idToUse);
    }

    private ParticipantEntity findParticipantById(Long id) {
        return participantRepository.findById(id)
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private UserNuboEntity findUserNubo(Long userId) {
        return userNuboRepository.findById(userId)
                .orElseThrow(() -> {
                    log.error("User not found: {}", userId);
                    return new ServiceException(ErrorCode.USER_NOT_FOUND, HttpStatus.UNAUTHORIZED);
                });
    }

    private StatusEntity findStatus(Long statusId) {
        return batchCacheService.findStatusCache(statusId)
                .orElseThrow(() -> new ServiceException(ErrorCode.STATUS_NOT_FOUND, HttpStatus.INTERNAL_SERVER_ERROR));
    }

    private TypeEntity findType(Long typeId) {
        return batchCacheService.findTypeCache(typeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TYPE_NOT_FOUND, HttpStatus.INTERNAL_SERVER_ERROR));
    }
}

```

## src/main/java/com/nubo/receipts/api/service/impl/FileGenerateHistoryServiceImpl.java

```java
package com.nubo.receipts.api.service.impl;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import com.nubo.receipts.api.repository.FileGenerateRepository;
import com.nubo.receipts.api.repository.ParticipantRepository;
import com.nubo.receipts.api.application.properties.PropertiesContext;
import com.nubo.receipts.api.application.util.ApplicationUtils;
import com.nubo.receipts.api.exception.ServiceException;
import com.nubo.receipts.api.exception.error.ErrorCode;
import com.nubo.receipts.api.helpers.FileGenerateMapperUtil;
import com.nubo.receipts.api.helpers.MapperPageUtil;
import com.nubo.receipts.api.helpers.dynamicQuery.dataBase.FileGenerateSpecificationFactory;
import com.nubo.receipts.api.models.dto.request.FileGenerateHistoryInDto;
import com.nubo.receipts.api.models.dto.response.PageResponseOutDto;
import com.nubo.receipts.api.models.dto.response.SettlementReport.FileGenerateDto;
import com.nubo.receipts.api.models.entity.FileGenerateEntity;
import com.nubo.receipts.api.models.entity.ParticipantEntity;
import com.nubo.receipts.api.models.entity.UserNuboEntity;
import com.nubo.receipts.api.models.enums.StatusEnum;
import com.nubo.receipts.api.models.enums.TimeZoneEnum;
import com.nubo.receipts.api.models.enums.TypeFilterOptionEnum;
import com.nubo.receipts.api.models.enums.UserTypeEnum;
import com.nubo.receipts.api.models.enums.VersionApiEnum;
import com.nubo.receipts.api.repository.UserNuboRepository;
import com.nubo.receipts.api.service.FileGenerateHistoryService;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.Set;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class FileGenerateHistoryServiceImpl implements FileGenerateHistoryService {

    private final UserNuboRepository userNuboRepository;
    private final ParticipantRepository participantRepository;
    private final FileGenerateRepository fileGenerateRepository;

    @Override
    public PageResponseOutDto<FileGenerateDto> getReportHistoryByUser(Long userId, FileGenerateHistoryInDto filter) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return getReportHistoryByUserV1(userId, filter);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<FileGenerateDto> getReportHistoryByUserV1(Long userId, FileGenerateHistoryInDto filter) {
        log.info("Start method getReportHistoryByUserV1, userId: {}, filter: {}", userId, filter);

        UserNuboEntity userNuboEntity = findUserNubo(userId);
        ParticipantEntity participantEntity = resolveParticipant(userNuboEntity, filter.getParticipantId());
        List<Long> generationStatusIds = Arrays.asList(
                StatusEnum.FILE_IN_PROCESS.getId(),
                StatusEnum.FILE_GENERATED.getId(),
                StatusEnum.FILE_ERROR.getId());
        TypeFilterOptionEnum optionsTypeEnum = filter.getTypeReport();
        if (optionsTypeEnum == null) {
            throw new ServiceException(ErrorCode.TYPE_REPORT_NOT_FOUND, HttpStatus.BAD_REQUEST);
        }

        LocalDate generatedAtDate = TypeFilterOptionEnum.REPORT_LIQUIDA_TODAY == optionsTypeEnum
                || TypeFilterOptionEnum.REPORT_PAPELETA_TODAY == optionsTypeEnum
                        ? ApplicationUtils.getZonedDateTimeNow(filter.getTimeZone()).toLocalDate()
                        : filter.getGenerateAt();

        if (UserTypeEnum.INTERNAL.equals(userNuboEntity.getUserType()) && filter.getParticipantId() == null) {
            log.info("Internal user with no participantId, returning empty page response");
            return PageResponseOutDto.<FileGenerateDto>builder()
                    .content(List.of())
                    .totalElements(0L)
                    .totalPages(0)
                    .pageSize(0)
                    .pageNumber(0)
                    .build();
        }

        Specification<FileGenerateEntity> spec = FileGenerateSpecificationFactory.createCombinedFilter(
                null,
                generationStatusIds,
                participantEntity.getId(),
                generatedAtDate,
                optionsTypeEnum.getTypeEnum().getId(),
                null,
                null,
                null);

        Sort.Direction direction = "desc".equalsIgnoreCase(filter.getOrder())
                ? Sort.Direction.DESC
                : Sort.Direction.ASC;

        String validatedSortField = validateAndGetSortField(filter.getSort());
        Sort sortObj = Sort.by(direction, validatedSortField);

        Pageable pageable = PageRequest.of(filter.getPage(), filter.getSize(), sortObj);
        Page<FileGenerateEntity> pagedResult = fileGenerateRepository.findAll(spec, pageable);

        long pagedResultSize = pagedResult.getTotalElements();
        List<FileGenerateDto> fileGenerateDtoList = pagedResult.getContent()
                .stream()
                .map(entity -> FileGenerateMapperUtil.toDto(entity, pagedResultSize, null))
                .toList();

        PageResponseOutDto<FileGenerateDto> pageResponse = MapperPageUtil.pageToPageResponseOutDto(fileGenerateDtoList,
                pagedResult);

        log.info("End method getReportHistoryByUserV1, {}", pageResponse);
        return pageResponse;
    }

    @Override
    public PageResponseOutDto<FileGenerateDto> getReportHistoryByUser(Long userId, int page, int size,
            String sort, String order, Long participantId, TypeFilterOptionEnum optionsTypeEnum) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return getReportHistoryByUserV1(userId, page, size, sort, order, participantId, optionsTypeEnum);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<FileGenerateDto> getReportHistoryByUserV1(Long userId, int page, int size,
            String sort, String order, Long participantId, TypeFilterOptionEnum optionsTypeEnum) {
        log.info("Start getReportHistoryByUser userId={} participantId={}, optionsTypeEnum={}", userId, participantId, optionsTypeEnum);

        UserNuboEntity userNuboEntity = findUserNubo(userId);
        ParticipantEntity participantSession = resolveParticipant(userNuboEntity, participantId);
        Long participantSessionId = isExternalUser(userNuboEntity) ? participantSession.getId() : null;

        List<Long> generationStatusIds = Arrays.asList(
                StatusEnum.FILE_IN_PROCESS.getId(),
                StatusEnum.FILE_GENERATED.getId(),
                StatusEnum.FILE_ERROR.getId());

        Specification<FileGenerateEntity> spec = FileGenerateSpecificationFactory.createCombinedFilter(
                null,
                generationStatusIds,
                participantSessionId,
                ApplicationUtils.getZonedDateTimeNow(TimeZoneEnum.COLOMBIA_STANDARD_TIME).toLocalDate(),
                optionsTypeEnum.getTypeEnum().getId(),
                null,
                null,
                null);

        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        String validatedSortField = validateAndGetSortField(sort);
        Sort sortObj = Sort.by(direction, validatedSortField);

        Pageable pageable = PageRequest.of(page, size, sortObj);
        Page<FileGenerateEntity> pagedResult = fileGenerateRepository.findAll(spec, pageable);

        long pagedResultSize = pagedResult.getTotalElements();
        List<FileGenerateDto> fileGenerateDtoList = pagedResult.getContent()
                .stream()
                .map(entity -> FileGenerateMapperUtil.toDto(entity, pagedResultSize, null))
                .toList();

        PageResponseOutDto<FileGenerateDto> pageResponse = MapperPageUtil.pageToPageResponseOutDto(fileGenerateDtoList,
                pagedResult);

        log.info("End method getReportHistoryByUserV1, {}", pageResponse);
        return pageResponse;
    }

    private UserNuboEntity findUserNubo(Long userId) {
        return userNuboRepository.findById(userId)
                .orElseThrow(() -> new ServiceException(ErrorCode.USER_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private ParticipantEntity resolveParticipant(UserNuboEntity userNuboEntity, Long participantId) {
        this.validateUserType(userNuboEntity);
        ParticipantEntity participantEntity = userNuboEntity.getParticipant();
        if (isExternalUser(userNuboEntity)) {
            return participantEntity;
        }
        if (participantId != null) {
            return findParticipantById(participantId);
        }
        return participantEntity;
    }

    private void validateUserType(UserNuboEntity userNuboEntity) {
        if (userNuboEntity.getUserType() == null) {
            throw new ServiceException(ErrorCode.USER_TYPE_ERROR, HttpStatus.NOT_FOUND);
        }
    }

    private boolean isExternalUser(UserNuboEntity userNuboEntity) {
        return UserTypeEnum.EXTERNAL.equals(userNuboEntity.getUserType());
    }

    private ParticipantEntity findParticipantById(Long participantId) {
        return participantRepository.findById(participantId)
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private String validateAndGetSortField(String sortField) {
        if (sortField == null || sortField.trim().isEmpty()) {
            return "generatedAt";
        }

        Set<String> validSortFields = Set.of(
                "id", "fileName", "fileType", "filePath", "generatedAt", "generatedBy",
                "participantId", "participantName", "operationStatusId", "operationStatusDescription",
                "generationStatusId", "generationStatusDescription", "recordDate",
                "typeId", "typeDescription");

        if (!validSortFields.contains(sortField)) {
            log.warn("Invalid sort field '{}', using default 'generatedAt'", sortField);
            return "generatedAt";
        }

        return sortField;
    }
}

```

## src/main/java/com/nubo/receipts/api/service/impl/ReceiptSettlementServiceImpl.java

```java
package com.nubo.receipts.api.service.impl;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import com.nubo.receipts.api.application.properties.PropertiesConfig;
import com.nubo.receipts.api.application.properties.PropertiesContext;
import com.nubo.receipts.api.exception.ServiceException;
import com.nubo.receipts.api.exception.error.ErrorCode;
import com.nubo.receipts.api.helpers.MapperReceiptMassiveUtil;
import com.nubo.receipts.api.helpers.MapperReceiptSettlementUtil;
import com.nubo.receipts.api.helpers.SendNotificationUtil;
import com.nubo.receipts.api.models.dto.request.SideOperationInDto;
import com.nubo.receipts.api.models.dto.request.TradeOperationInDto;
import com.nubo.receipts.api.models.dto.response.massive.ReceiptSettlementPlaneOutDto;
import com.nubo.receipts.api.models.dto.response.pdf.ReceiptSettlementOutDto;
import com.nubo.receipts.api.models.entity.SettlementEntity;
import com.nubo.receipts.api.models.entity.SideEntity;
import com.nubo.receipts.api.models.entity.TradeEntity;
import com.nubo.receipts.api.models.entity.UserNuboEntity;
import com.nubo.receipts.api.models.enums.NotificationMessageEnum;
import com.nubo.receipts.api.models.enums.NotificationTypeEnum;
import com.nubo.receipts.api.models.enums.SideEnum;
import com.nubo.receipts.api.models.enums.TypeEnum;
import com.nubo.receipts.api.models.enums.UserTypeEnum;
import com.nubo.receipts.api.models.enums.VersionApiEnum;
import com.nubo.receipts.api.repository.SettlementRepository;
import com.nubo.receipts.api.repository.SideRepository;
import com.nubo.receipts.api.repository.TradeRepository;
import com.nubo.receipts.api.repository.UserNuboRepository;
import com.nubo.receipts.api.service.ReceiptSettlementService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class ReceiptSettlementServiceImpl implements ReceiptSettlementService {

    private final SettlementRepository settlementRepository;
    private final TradeRepository tradeRepository;
    private final SideRepository sideRepository;
    private final UserNuboRepository userNuboRepository;
    private final PropertiesConfig propertiesConfig;
    private final SendNotificationUtil sendNotificationUtil;

    @Deprecated
    @Override
    public List<ReceiptSettlementPlaneOutDto> generateReceiptSpecialTradeFoliosByUser(Long userId,
            List<TradeOperationInDto> tradeOperationInDtoList) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return generateReceiptSpecialTradeFoliosByUserV1(userId, tradeOperationInDtoList);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<ReceiptSettlementPlaneOutDto> generateReceiptSpecialTradeFoliosByUserV1(Long userId,
            List<TradeOperationInDto> tradeOperationInDtoList) {
        log.debug("Start method generateReceiptSpecialTradeFoliosByUserV1");

        try {
            this.validateTradeOperationInDto(tradeOperationInDtoList);

            UserNuboEntity userNuboEntity = findUserNubo(userId);

            List<ReceiptSettlementPlaneOutDto> settlementOperationOutDtoList = new ArrayList<>();

            if (UserTypeEnum.EXTERNAL.equals(userNuboEntity.getUserType())) {
                tradeOperationInDtoList.forEach(tradeOperationInDto -> {

                    List<SettlementEntity> settlementParticipantBuyList = settlementRepository
                            .findByTradeIdAndSideIdAndParticipantBuy(
                                    tradeOperationInDto.getTradeId(), SideEnum.BUY.getId(),
                                    userNuboEntity.getParticipant().getId());

                    settlementParticipantBuyList.forEach(settlementEntity -> settlementOperationOutDtoList
                            .add(getAllReceiptMassiveOperation(SideEnum.BUY.getId(), settlementEntity)));

                    List<SettlementEntity> settlementParticipantSellList = settlementRepository
                            .findByTradeIdAndSideIdAndParticipantSell(
                                    tradeOperationInDto.getTradeId(), SideEnum.SELL.getId(),
                                    userNuboEntity.getParticipant().getId());

                    settlementParticipantSellList.forEach(settlementEntity -> settlementOperationOutDtoList
                            .add(getAllReceiptMassiveOperation(SideEnum.SELL.getId(), settlementEntity)));

                });
            } else if (UserTypeEnum.INTERNAL.equals(userNuboEntity.getUserType())) {
                tradeOperationInDtoList.forEach(tradeOperationInDto -> {

                    List<SettlementEntity> settlementParticipantBuyList = settlementRepository.findByTradeIdAndSideId(
                            tradeOperationInDto.getTradeId(), SideEnum.BUY.getId());

                    settlementParticipantBuyList.forEach(settlementEntity -> settlementOperationOutDtoList
                            .add(getAllReceiptMassiveOperation(SideEnum.BUY.getId(), settlementEntity)));

                    List<SettlementEntity> settlementParticipantSellList = settlementRepository.findByTradeIdAndSideId(
                            tradeOperationInDto.getTradeId(), SideEnum.SELL.getId());

                    settlementParticipantSellList.forEach(settlementEntity -> settlementOperationOutDtoList
                            .add(getAllReceiptMassiveOperation(SideEnum.SELL.getId(), settlementEntity)));
                });
            } else {
                throw new ServiceException(ErrorCode.USER_TYPE_ERROR, HttpStatus.NOT_FOUND);
            }

            sendNotificationUtil.sendNotification(
                    NotificationTypeEnum.INFO,
                    NotificationMessageEnum.RECEIPT_GENERATED,
                    "settlement_folios.dat",
                    0l,
                    userId);

            log.debug("End method generateReceiptSpecialTradeFoliosByUserV1");

            return settlementOperationOutDtoList;

        } catch (Exception e) {
            sendNotificationUtil.sendNotification(
                    NotificationTypeEnum.ERROR,
                    NotificationMessageEnum.RECEIPT_ERROR,
                    null,
                    null,
                    userId);
            throw e;
        }
    }

    @Override
    public List<ReceiptSettlementOutDto> generateReceiptSettlementOperation(Long tradeId,
            List<SideOperationInDto> sideOperationInDtoList) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return generateReceiptSettlementOperationV1(tradeId, sideOperationInDtoList);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<ReceiptSettlementOutDto> generateReceiptSettlementOperationV1(Long tradeId,
            List<SideOperationInDto> sideOperationInDtoList) {
        log.debug("Start method generateReceiptSettlementOperationV1");

        TradeEntity tradeEntity = validateTrade(tradeId);

        validateSettlementOperationInDto(sideOperationInDtoList);

        List<ReceiptSettlementOutDto> settlementOperationOutDtoList = new ArrayList<>();

        sideOperationInDtoList.forEach(settlementOperationInDto -> {
            List<SettlementEntity> settlementEntityList = settlementRepository.findByTradeIdAndSideId(
                    tradeEntity.getId(), settlementOperationInDto.getSideId());

            settlementEntityList.forEach(settlementEntity -> settlementOperationOutDtoList
                    .add(generateReceiptSettlementOperation(settlementEntity)));
        });

        log.debug("End method generateReceiptSettlementOperationV1");

        return settlementOperationOutDtoList;
    }

    private ReceiptSettlementOutDto getAllReceiptSettlementOperation(SettlementEntity settlementEntity) {
        TradeEntity tradeEntity = settlementEntity.getTrade();
        boolean isCont = Objects.equals(TypeEnum.CONT.getId(), tradeEntity.getType().getId());
        return ReceiptSettlementOutDto.builder()
                .settlement(MapperReceiptSettlementUtil.settlementEntityToSettlementOutDto(settlementEntity))
                .trade(MapperReceiptSettlementUtil.tradeEntityToTradeOutDto(tradeEntity))
                .securityTitle(MapperReceiptSettlementUtil
                        .securityTitleEntityTosecurityTitleOutDto(tradeEntity.getSecurityTitle()))
                .investor(ObjectUtils.isEmpty(settlementEntity.getInvestorAccount()) ? null
                        : MapperReceiptSettlementUtil
                                .investorAccountEntityToInvestorOutDto(settlementEntity.getInvestorAccount()))
                .participant(ObjectUtils.isEmpty(settlementEntity.getParticipantAccount()) ? null
                        : MapperReceiptSettlementUtil.participantEntityToParticipantOutDto(
                                settlementEntity.getParticipantAccount().getParticipant(), isCont))
                .participantBuy(MapperReceiptSettlementUtil
                        .participantEntityToParticipantOutDto(tradeEntity.getParticipantBuy(), isCont))
                .participantSell(MapperReceiptSettlementUtil
                        .participantEntityToParticipantOutDto(tradeEntity.getParticipantSell(), isCont))
                .userName(PropertiesContext.getClientUser())
                .build();
    }

    private ReceiptSettlementOutDto generateReceiptSettlementOperation(SettlementEntity settlementEntity) {

        ReceiptSettlementOutDto receiptSettlementOutDto = getAllReceiptSettlementOperation(settlementEntity);
        receiptSettlementOutDto.getSettlement()
                .setIssuedReceiptNumberPrevious(settlementEntity.getIssuedReceiptNumber());

        String issueReceiptNumber = generateSettlementIssueReceiptUuid(settlementEntity).toString();
        settlementEntity.setIssuedReceiptNumber(issueReceiptNumber);
        settlementEntity.setIssuedReceipt(true);
        settlementEntity.setLastModifyApplication(propertiesConfig.getApiName());
        settlementEntity.setLastModifyIp(PropertiesContext.getClientIp());
        settlementEntity.setLastModifyUser(PropertiesContext.getClientUser());
        settlementEntity.setLastModifyDate(PropertiesContext.getClientDatetime());
        settlementRepository.save(settlementEntity);

        receiptSettlementOutDto.getSettlement().setIssuedReceiptNumber(issueReceiptNumber);

        return receiptSettlementOutDto;
    }

    private ReceiptSettlementPlaneOutDto getAllReceiptMassiveOperation(String sideId,
            SettlementEntity settlementEntity) {
        ReceiptSettlementPlaneOutDto receiptSettlementOutDto = ReceiptSettlementPlaneOutDto.builder()
                .settlement(MapperReceiptMassiveUtil.settlementEntityToSettlementPlaneOutDto(settlementEntity))
                .trade(MapperReceiptMassiveUtil.tradeEntityToTradePlaneOutDto(settlementEntity.getTrade()))
                .securityTitle(MapperReceiptMassiveUtil
                        .securityTitleEntityToSecurityTitlePlaneOutDto(settlementEntity.getTrade().getSecurityTitle()))
                .investor(ObjectUtils.isEmpty(settlementEntity.getInvestorAccount()) ? null
                        : MapperReceiptMassiveUtil.investorEntityToInvestorPlaneOutDto(settlementEntity.getInvestor()))
                .participant(ObjectUtils.isEmpty(settlementEntity.getParticipantAccount()) ? null
                        : MapperReceiptMassiveUtil.participantEntityToParticipantPlaneOutDto(
                                settlementEntity.getParticipantAccount().getParticipant()))
                .userName(PropertiesContext.getClientUser())
                .generationDate(PropertiesContext.getClientDate())
                .build();

        if (SideEnum.BUY.getId().equals(sideId)) {
            receiptSettlementOutDto.setParticipantBuy(MapperReceiptMassiveUtil
                    .participantEntityToParticipantPlaneOutDto(settlementEntity.getTrade().getParticipantBuy()));

        }

        if (SideEnum.SELL.getId().equals(sideId)) {
            receiptSettlementOutDto.setParticipantSell(MapperReceiptMassiveUtil
                    .participantEntityToParticipantPlaneOutDto(settlementEntity.getTrade().getParticipantSell()));
        }

        return receiptSettlementOutDto;
    }

    private UUID generateSettlementIssueReceiptUuid(SettlementEntity settlementEntity) {
        Long tradeId = settlementEntity.getTrade().getId();
        Integer fraction = settlementEntity.getFraction();
        String sideId = settlementEntity.getSide().getId();
        String uniqueUuid = tradeId + fraction + sideId + System.nanoTime();
        return UUID.nameUUIDFromBytes(uniqueUuid.getBytes());
    }

    private void validateSettlementOperationInDto(List<SideOperationInDto> sideOperationInDtoList) {
        Set<String> sideIds = new HashSet<>();
        for (SideOperationInDto sideOperationInDto : sideOperationInDtoList) {
            SideEntity sideEntity = this.validateSide(sideOperationInDto.getSideId());
            if (!sideIds.add(sideEntity.getId())) {
                throw new ServiceException(ErrorCode.SIDE_CANNOT_REPEATED, HttpStatus.NOT_FOUND);
            }
        }
    }

    private void validateTradeOperationInDto(List<TradeOperationInDto> tradeOperationInDtoList) {
        Set<Long> tradeIds = new HashSet<>();
        for (TradeOperationInDto tradeOperationInDto : tradeOperationInDtoList) {
            TradeEntity tradeEntity = validateTrade(tradeOperationInDto.getTradeId());
            if (!tradeIds.add(tradeEntity.getId())) {
                throw new ServiceException(ErrorCode.TRADE_CANNOT_REPEATED, HttpStatus.NOT_FOUND);
            }
        }
    }

    private TradeEntity validateTrade(Long tradeId) {
        return tradeRepository.findById(tradeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private SideEntity validateSide(String sideId) {
        return sideRepository.findById(sideId)
                .orElseThrow(() -> new ServiceException(ErrorCode.SIDE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private UserNuboEntity findUserNubo(Long userId) {
        return userNuboRepository.findById(userId)
                .orElseThrow(() -> new ServiceException(ErrorCode.USER_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

}

```

## src/main/java/com/nubo/receipts/api/service/impl/SettlementFileDataServiceImpl.java

```java
package com.nubo.receipts.api.service.impl;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import com.nubo.receipts.api.application.properties.PropertiesConfig;
import com.nubo.receipts.api.application.properties.PropertiesContext;
import com.nubo.receipts.api.client.rule.models.enums.BusinessRuleEnum;
import com.nubo.receipts.api.client.rule.service.BusinessRulesClient;
import com.nubo.receipts.api.client.schedule.validate.models.dto.ScheduleValidationOutDto;
import com.nubo.receipts.api.client.schedule.validate.service.ScheduleValidateManualClient;
import com.nubo.receipts.api.exception.ServiceException;
import com.nubo.receipts.api.exception.error.ErrorCode;
import com.nubo.receipts.api.helpers.MapperPageUtil;
import com.nubo.receipts.api.helpers.VoucherMapperUtil;
import com.nubo.receipts.api.models.domain.TradeSettlementReport;
import com.nubo.receipts.api.models.dto.request.FileIndividualInDto;
import com.nubo.receipts.api.models.dto.request.FileMassiveInDto;
import com.nubo.receipts.api.models.dto.response.PageResponseOutDto;
import com.nubo.receipts.api.models.dto.response.voucher.LiquidaFileOutDto;
import com.nubo.receipts.api.models.dto.response.voucher.PapeletaFileOutDto;
import com.nubo.receipts.api.models.entity.CountryEntity;
import com.nubo.receipts.api.models.entity.FileGenerateEntity;
import com.nubo.receipts.api.models.entity.ParticipantEntity;
import com.nubo.receipts.api.models.entity.SettlementEntity;
import com.nubo.receipts.api.models.entity.StatusEntity;
import com.nubo.receipts.api.models.entity.TypeEntity;
import com.nubo.receipts.api.models.enums.SideEnum;
import com.nubo.receipts.api.models.enums.StatusEnum;
import com.nubo.receipts.api.models.enums.TypeEnum;
import com.nubo.receipts.api.models.enums.VersionApiEnum;
import com.nubo.receipts.api.repository.CountryRepository;
import com.nubo.receipts.api.repository.FileGenerateRepository;
import com.nubo.receipts.api.repository.ParticipantRepository;
import com.nubo.receipts.api.repository.SettlementRepository;
import com.nubo.receipts.api.repository.StatusRepository;
import com.nubo.receipts.api.repository.TradeRepository;
import com.nubo.receipts.api.repository.TypeRepository;
import com.nubo.receipts.api.service.SettlementFileDataService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class SettlementFileDataServiceImpl implements SettlementFileDataService {

    private final BusinessRulesClient businessRulesClient;
    private final ScheduleValidateManualClient scheduleValidateManualClient;
    private final PropertiesConfig propertiesConfig;
    private final SettlementRepository settlementRepository;
    private final TypeRepository typeRepository;
    private final StatusRepository statusRepository;
    private final FileGenerateRepository settlementReportHistoryRepository;
    private final ParticipantRepository participantRepository;
    private final CountryRepository countryRepository;
    private final TradeRepository tradeRepository;

    @Override
    public PageResponseOutDto<?> processMassiveSettlementFile(FileMassiveInDto request) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            log.info("Received massive settlement file request {}", request);
            switch (request.getVoucherType()) {
                case SLIP:
                    return processMassivePapeletaV1(request);
                case LIQ_FILE:
                    return processMassiveLiquidaFileV1(request);
                default:
                    throw new ServiceException(ErrorCode.INVALID_VOUCHER_TYPE, HttpStatus.BAD_REQUEST);
            }
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }

    }

    private PageResponseOutDto<?> processMassiveLiquidaFileV1(FileMassiveInDto request) {
        log.info("Processing massive Liquida file request: {}", request);

        ParticipantEntity participantEntity = validateSchedule(request);

        List<Long> searchIds = businessRulesClient
                .validateScheduleAction(BusinessRuleEnum.RULE_OPERATION_SETTLEMENT_FILE);
        validateMassiveBusinessRules(request);

        Long tradeTypeId = request.getOperationType() != null ? request.getOperationType().getType().getId() : null;
        Pageable pageable = PageRequest.of(request.getPage(), request.getSize());

        Page<TradeSettlementReport> tradeSettlementReportPage = tradeRepository.findSettlementReportByDateRangePage(
                request.getStartMatchDate(),
                request.getEndMatchDate(),
                participantEntity.getId(),
                tradeTypeId,
                searchIds,
                StatusEnum.REGISTERED.getId(),
                request.getCountryCode(),
                SideEnum.BUY.getId(), SideEnum.SELL.getId(),
                pageable);

        if (tradeSettlementReportPage.isEmpty()) {
            log.debug("End method processMassiveLiquidaFileV1");
            throw new ServiceException(ErrorCode.NOT_DATA_FOUND, HttpStatus.NOT_FOUND);
        }

        List<LiquidaFileOutDto> liquidaFiles = new ArrayList<>();
        for (TradeSettlementReport tradeSettlementReport : tradeSettlementReportPage.getContent()) {
            if (tradeSettlementReport.settlement() == null) {
                List<SettlementEntity> placeholderSettlements = VoucherMapperUtil.createPlaceholderSettlement(
                        tradeSettlementReport.trade(), participantEntity);
                liquidaFiles.addAll(placeholderSettlements.stream()
                        .filter(Objects::nonNull)
                        .map(s -> VoucherMapperUtil.toArchivoLiquidaDto(s, participantEntity))
                        .collect(Collectors.toList()));
            } else {
                liquidaFiles.add(
                        VoucherMapperUtil.toArchivoLiquidaDto(tradeSettlementReport.settlement(), participantEntity));
            }
        }

        PageResponseOutDto<LiquidaFileOutDto> pageResponse = MapperPageUtil.pageToPageResponseOutDto(liquidaFiles,
                tradeSettlementReportPage);

        log.info("Massive Liquida file processed successfully, {}", pageResponse);
        return pageResponse;
    }

    private PageResponseOutDto<?> processMassivePapeletaV1(FileMassiveInDto request) {
        log.info("Processing massive papeleta request: {}", request);

        ParticipantEntity participantEntity = validateSchedule(request);

        List<Long> searchIds = businessRulesClient
                .validateScheduleAction(BusinessRuleEnum.RULE_OPERATION_SETTLEMENT_FILE);
        validateMassiveBusinessRules(request);

        Long tradeTypeId = request.getOperationType() != null ? request.getOperationType().getType().getId() : null;
        Pageable pageable = PageRequest.of(request.getPage(), request.getSize());

        Page<SettlementEntity> settlementPage = settlementRepository.findSettlementReportByDateRangePage(
                request.getStartMatchDate(),
                request.getEndMatchDate(),
                participantEntity.getId(),
                tradeTypeId,
                searchIds,
                request.getCountryCode(),
                SideEnum.BUY.getId(), SideEnum.SELL.getId(),
                pageable);

        if (settlementPage.isEmpty()) {
            log.debug("End method processMassivePapeletaV1");
            throw new ServiceException(ErrorCode.NOT_DATA_FOUND, HttpStatus.NOT_FOUND);
        }

        List<PapeletaFileOutDto> papeletaData = settlementPage.getContent().stream()
                .map(VoucherMapperUtil::toComprobanteDto)
                .collect(Collectors.toList());

        PageResponseOutDto<PapeletaFileOutDto> pageResponse = MapperPageUtil.pageToPageResponseOutDto(papeletaData,
                settlementPage);

        log.info("Massive papeleta file processed successfully, {}", pageResponse);
        return pageResponse;
    }

    @Override
    public PageResponseOutDto<?> processIndividualSettlementFile(FileIndividualInDto request) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            switch (request.getVoucherType()) {
                case SLIP:
                    return processIndividualPapeletaV1(request);
                case LIQ_FILE:
                    return processIndividualLiquidaV1(request);
                default:
                    throw new ServiceException(ErrorCode.INVALID_VOUCHER_TYPE, HttpStatus.BAD_REQUEST);
            }
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<?> processIndividualLiquidaV1(FileIndividualInDto request) {
        log.info("Processing individual liquida file request: {}", request);

        ParticipantEntity participantEntity = validateSchedule(request);

        List<Long> searchIds = businessRulesClient
                .validateScheduleAction(BusinessRuleEnum.RULE_OPERATION_SETTLEMENT_FILE);
        validateBusinessRules(request);

        Long tradeTypeId = request.getOperationType() != null ? request.getOperationType().getType().getId() : null;
        Pageable pageable = PageRequest.of(request.getPage(), request.getSize());

        Page<TradeSettlementReport> tradeSettlementReportPage = tradeRepository.findSettlementReportPage(
                request.getMatchDate(),
                request.getMatchId(),
                participantEntity.getId(),
                tradeTypeId,
                searchIds,
                StatusEnum.REGISTERED.getId(),
                request.getCountryCode(),
                SideEnum.BUY.getId(), SideEnum.SELL.getId(),
                pageable);

        if (tradeSettlementReportPage.isEmpty()) {
            log.debug("End method processIndividualSettlementFileV1");
            throw new ServiceException(ErrorCode.NOT_DATA_FOUND, HttpStatus.NOT_FOUND);
        }

        List<LiquidaFileOutDto> liquidaFiles = new ArrayList<>();
        for (TradeSettlementReport tradeSettlementReport : tradeSettlementReportPage.getContent()) {
            if (tradeSettlementReport.settlement() == null) {
                List<SettlementEntity> placeholderSettlements = VoucherMapperUtil.createPlaceholderSettlement(
                        tradeSettlementReport.trade(), participantEntity);
                liquidaFiles.addAll(placeholderSettlements.stream()
                        .filter(Objects::nonNull)
                        .map(s -> VoucherMapperUtil.toArchivoLiquidaDto(s, participantEntity))
                        .collect(Collectors.toList()));
            } else {
                liquidaFiles.add(
                        VoucherMapperUtil.toArchivoLiquidaDto(tradeSettlementReport.settlement(), participantEntity));
            }
        }

        PageResponseOutDto<LiquidaFileOutDto> pageResponse = MapperPageUtil.pageToPageResponseOutDto(liquidaFiles,
                tradeSettlementReportPage);

        log.info("Individual settlement file processed successfully, {}", pageResponse);
        return pageResponse;
    }

    private PageResponseOutDto<?> processIndividualPapeletaV1(FileIndividualInDto request) {
        log.info("Processing individual papeleta request: {}", request);

        ParticipantEntity participantEntity = validateSchedule(request);

        List<Long> searchIds = businessRulesClient
                .validateScheduleAction(BusinessRuleEnum.RULE_OPERATION_SETTLEMENT_FILE);
        validateBusinessRules(request);

        Long tradeTypeId = request.getOperationType() != null ? request.getOperationType().getType().getId() : null;
        Pageable pageable = PageRequest.of(request.getPage(), request.getSize());

        Page<SettlementEntity> settlementPage = settlementRepository.findSettlementReportPage(
                request.getMatchDate(),
                request.getMatchId(),
                participantEntity.getId(),
                tradeTypeId,
                searchIds,
                request.getCountryCode(),
                SideEnum.BUY.getId(), SideEnum.SELL.getId(),
                pageable);

        if (settlementPage.isEmpty()) {
            log.debug("End method processIndividualReceiptV1");
            throw new ServiceException(ErrorCode.NOT_DATA_FOUND, HttpStatus.NOT_FOUND);
        }

        List<PapeletaFileOutDto> papeletaData = settlementPage.getContent().stream()
                .map(VoucherMapperUtil::toComprobanteDto)
                .collect(Collectors.toList());

        PageResponseOutDto<PapeletaFileOutDto> pageResponse = MapperPageUtil.pageToPageResponseOutDto(papeletaData,
                settlementPage);

        log.info("Individual papeleta file processed successfully, {}", pageResponse);
        return pageResponse;
    }

    private ParticipantEntity validateSchedule(FileIndividualInDto request) {
        return validateSchedule(request.getParticipantCode(),
                propertiesConfig.getScheduleScreenActionLiquidaIndividual());
    }

    private ParticipantEntity validateSchedule(FileMassiveInDto request) {
        return validateSchedule(request.getParticipantCode(),
                propertiesConfig.getScheduleScreenActionLiquidaMassive());
    }

    private ParticipantEntity validateSchedule(String participantCode, Long screenActionCode) {
        ParticipantEntity participantEntity = findParticipant(participantCode);

        ScheduleValidationOutDto scheduleValidation = scheduleValidateManualClient.scheduleValidationDto(
                screenActionCode,
                participantEntity.getId());

        if (scheduleValidation == null) {
            throw new ServiceException(ErrorCode.SCHEDULE_VALIDATION_API_ERROR, HttpStatus.BAD_GATEWAY);
        }

        if (Boolean.FALSE.equals(scheduleValidation.getIsBusinessDay())) {
            log.warn("Schedule validation rejected: not a business day for participant {}",
                    participantEntity.getId());
            throw new ServiceException(ErrorCode.NOT_BUSINESS_DAY, HttpStatus.BAD_REQUEST);
        }

        if (Boolean.FALSE.equals(scheduleValidation.getInSchedule())) {
            log.warn("Schedule validation rejected: out of schedule for participant {}",
                    participantEntity.getId());
            throw new ServiceException(ErrorCode.OUTSIDE_BUSINESS_HOURS, HttpStatus.BAD_REQUEST);
        }

        if (!Boolean.TRUE.equals(scheduleValidation.getInSchedule())) {
            log.warn("Schedule validation rejected: invalid response for participant {}",
                    participantEntity.getId());
            throw new ServiceException(ErrorCode.SCHEDULE_VALIDATION_API_ERROR, HttpStatus.BAD_GATEWAY);
        }

        log.info("Schedule validation passed for participant {}", participantEntity.getId());
        return participantEntity;
    }

    private void validateMassiveBusinessRules(FileMassiveInDto request) {
        validateDates(request.getStartMatchDate(), request.getEndMatchDate());
    }

    private void validateDates(LocalDate startDate, LocalDate endDate) {
        LocalDate today = LocalDate.now();
        LocalDate twoMonthsAgo = today.minusMonths(2);

        if (startDate.isBefore(twoMonthsAgo) || endDate.isAfter(today) || startDate.isAfter(endDate)) {
            throw new ServiceException(ErrorCode.ERROR_DATA_RANGE_SETTLEMENT_RV_REPORT, HttpStatus.BAD_REQUEST);
        }
    }

    private void validateBusinessRules(FileIndividualInDto request) {
        if (!isWithinValidDateRange(request.getMatchDate())) {
            throw new ServiceException(ErrorCode.DOWNLOAD_PERIOD_EXCEEDED, HttpStatus.BAD_REQUEST);
        }
    }

    @Override
    public boolean isWithinValidDateRange(LocalDate registrationDate) {
        LocalDate twoMonthsAgo = LocalDate.now().minusMonths(2);
        return !registrationDate.isBefore(twoMonthsAgo);
    }

    public CountryEntity findCountryId(Long countryId) {
        return countryRepository.findById(countryId)
                .orElseThrow(() -> new ServiceException(ErrorCode.COUNTRY_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    public ParticipantEntity findParticipant(String participantCode) {
        return participantRepository.findByCode(participantCode)
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    public FileGenerateEntity getFileGenerateEntity(
            String username,
            StatusEntity status,
            ParticipantEntity participant,
            CountryEntity country) {

        TypeEntity typeEntity = typeRepository.findById(TypeEnum.FILE_LIQUIDA_HISTORY.getId())
                .orElseThrow(() -> new ServiceException(ErrorCode.TYPE_NOT_FOUND, HttpStatus.NOT_FOUND));

        StatusEntity statusEntity = statusRepository.findById(StatusEnum.FILE_IN_PROCESS.getId())
                .orElseThrow(() -> new ServiceException(
                        ErrorCode.STATUS_NOT_FOUND,
                        HttpStatus.INTERNAL_SERVER_ERROR));

        String fileName = "";

        if (country.getCode().equals("CO")) {
            fileName = "liqbvc";
        } else {
            fileName = "liqnuam";
        }

        FileGenerateEntity fileGenerateEntity = FileGenerateEntity.builder()
                .fileName(fileName)
                .fileType("dat")
                .filePath(null)
                .generatedAt(OffsetDateTime.now())
                .fileConsecutive(0)
                .recordDate(LocalDate.now())
                .generatedBy(username)
                .operationStatus(ObjectUtils.isEmpty(status) ? null : status)
                .lastModifyUser(username)
                .lastModifyDate(LocalDateTime.now())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyApplic(PropertiesContext.getVersion())
                .generationStatus(
                        statusEntity)
                .participant(participant)
                .type(typeEntity)
                .build();

        fileGenerateEntity = settlementReportHistoryRepository.save(fileGenerateEntity);

        fileGenerateEntity.setFileConsecutive(fileGenerateEntity.getId().intValue());

        return settlementReportHistoryRepository.save(fileGenerateEntity);
    }
}

```

## src/main/java/com/nubo/receipts/api/service/impl/SettlementReportAutoServiceImpl.java

```java
package com.nubo.receipts.api.service.impl;

import java.time.LocalDate;
import java.time.ZonedDateTime;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.nubo.receipts.api.application.properties.PropertiesContext;
import com.nubo.receipts.api.application.util.ApplicationUtils;
import com.nubo.receipts.api.client.kafka.models.dto.SettlementReportFileInDto;
import com.nubo.receipts.api.exception.ServiceException;
import com.nubo.receipts.api.exception.error.ErrorCode;
import com.nubo.receipts.api.helpers.ReportFileUtil;
import com.nubo.receipts.api.models.domain.ReportData;
import com.nubo.receipts.api.models.dto.response.ReportOutDto;
import com.nubo.receipts.api.models.entity.CountryEntity;
import com.nubo.receipts.api.models.entity.ParticipantEntity;
import com.nubo.receipts.api.models.entity.UserNuboEntity;
import com.nubo.receipts.api.models.enums.CountryEnum;
import com.nubo.receipts.api.models.enums.StatusEnum;
import com.nubo.receipts.api.models.enums.StatusFilterOptionEnum;
import com.nubo.receipts.api.models.enums.TimeZoneEnum;
import com.nubo.receipts.api.models.enums.TypeFilterOptionEnum;
import com.nubo.receipts.api.models.enums.UserTypeEnum;
import com.nubo.receipts.api.models.enums.VersionApiEnum;
import com.nubo.receipts.api.repository.ParticipantRepository;
import com.nubo.receipts.api.service.BatchCacheService;
import com.nubo.receipts.api.service.SettlementReportAutoService;
import com.nubo.receipts.api.service.SettlementReportService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class SettlementReportAutoServiceImpl implements SettlementReportAutoService {

    private static final int REPORT_THREAD_POOL_SIZE = 10;

    private final ParticipantRepository participantRepository;
    private final BatchCacheService batchCacheService;
    private final SettlementReportService settlementReportService;

    @Override
    public ReportOutDto generateReportLiquidaAutomatic(TimeZoneEnum timeZone) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return generateReportLiquidaAutomaticV1(timeZone);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public ReportOutDto generateReportPapeletaAutomatic(TimeZoneEnum timeZone) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return generateReportPapeletaAutomaticV1(timeZone);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private ReportOutDto generateReportLiquidaAutomaticV1(TimeZoneEnum timeZone) {
        log.info("Start method generateReportLiquidaAutomaticV1, timeZone: {}", timeZone);
        CountryEnum countryEnum = timeZone.getCountry();

        ZonedDateTime startGenerateDateTime = ApplicationUtils.getZonedDateTimeNow(timeZone);
        CountryEntity countryEntity = findCountry(countryEnum.getId());
        UserNuboEntity userNuboEntity = UserNuboEntity.builder()
                .id(0L)
                .userName("system")
                .userType(UserTypeEnum.INTERNAL)
                .build();

        List<ParticipantEntity> participantEntityList = participantRepository
                .findAllByStatusId(StatusEnum.PARTICIPANT_ACTIVE.getId());
        log.info("Total participants to process: {}", participantEntityList.size());

        LocalDate recordDate = startGenerateDateTime.toLocalDate();
        AtomicLong totalFiles = new AtomicLong(0);
        ExecutorService executor = Executors.newFixedThreadPool(REPORT_THREAD_POOL_SIZE);
        try {
            List<CompletableFuture<Void>> futures = participantEntityList.stream()
                    .map(participant -> CompletableFuture.runAsync(() -> {
                        String participantInfo = participant.getCode() + " - " + participant.getName();
                        log.debug("Processing participant: '{}'", participantInfo);

                        try {
                            SettlementReportFileInDto settlementReportFileInDto = settlementReportService
                                    .findAllSettlementWithStatus(recordDate,
                                            participant, countryEntity.getId());

                            ReportData reportData = new ReportData(
                                    participant,
                                    countryEntity,
                                    userNuboEntity,
                                    StatusFilterOptionEnum.ASSIGNED,
                                    TypeFilterOptionEnum.REPORT_LIQUIDA_TODAY,
                                    recordDate,
                                    ReportFileUtil.fileNameLiquida(countryEntity, StatusEnum.ASSIGNED));
                            settlementReportService.publishReportToKafka(settlementReportFileInDto, reportData);
                            totalFiles.incrementAndGet();
                        } catch (ServiceException e) {
                            if (ErrorCode.NOT_DATA_FOUND.equals(e.getErrorCode())) {
                                log.debug("No ASSIGNED data for participant '{}'", participantInfo);
                            } else {
                                log.error("Error processing ASSIGNED participant '{}': {}", participantInfo,
                                        e.getMessage());
                            }
                        } catch (Exception e) {
                            log.error("Unexpected error processing ASSIGNED participant '{}': {}", participantInfo,
                                    e.getMessage(), e);
                        }

                        try {
                            SettlementReportFileInDto settlementReportFileInDto = settlementReportService
                                    .findAllTradeWithStatusRegistered(
                                            recordDate, participant, countryEntity.getId());

                            ReportData reportData = new ReportData(
                                    participant,
                                    countryEntity,
                                    userNuboEntity,
                                    StatusFilterOptionEnum.REGISTERED,
                                    TypeFilterOptionEnum.REPORT_LIQUIDA_TODAY,
                                    recordDate,
                                    ReportFileUtil.fileNameLiquida(countryEntity, StatusEnum.REGISTERED));
                            settlementReportService.publishReportToKafka(settlementReportFileInDto, reportData);
                            totalFiles.incrementAndGet();
                        } catch (ServiceException ex) {
                            if (ErrorCode.NOT_DATA_FOUND.equals(ex.getErrorCode())) {
                                log.debug("No REGISTERED data for participant '{}'", participantInfo);
                            } else {
                                log.error("Error processing REGISTERED participant '{}': {}", participantInfo,
                                        ex.getMessage());
                            }
                        } catch (Exception ex) {
                            log.error("Unexpected error processing REGISTERED participant '{}': {}", participantInfo,
                                    ex.getMessage(), ex);
                        }
                    }, executor))
                    .toList();
            CompletableFuture.allOf(futures.toArray(new CompletableFuture[0])).join();
        } finally {
            executor.shutdown();
        }

        ReportOutDto reportOutDto = ReportOutDto.builder()
                .startGenerateDateTime(startGenerateDateTime)
                .endGenerateDateTime(ApplicationUtils.getZonedDateTimeNow(timeZone))
                .totalFiles(totalFiles.get())
                .build();

        log.debug("End method generateReportLiquidaAutomaticV1");

        return reportOutDto;
    }

    private ReportOutDto generateReportPapeletaAutomaticV1(TimeZoneEnum timeZone) {
        log.info("Start method generateReportPapeletaAutomaticV1, timeZone: {}", timeZone);

        CountryEnum countryEnum = timeZone.getCountry();

        ZonedDateTime startGenerateDateTime = ApplicationUtils.getZonedDateTimeNow(timeZone);
        CountryEntity countryEntity = findCountry(countryEnum.getId());
        UserNuboEntity userNuboEntity = UserNuboEntity.builder()
                .id(0L)
                .userName("system")
                .userType(UserTypeEnum.INTERNAL)
                .build();

        List<ParticipantEntity> participantEntityList = participantRepository
                .findAllByStatusId(StatusEnum.PARTICIPANT_ACTIVE.getId());
        log.info("Total participants to process: {}", participantEntityList.size());

        LocalDate recordDate = startGenerateDateTime.toLocalDate();
        AtomicLong totalFiles = new AtomicLong(0);
        ExecutorService executor = Executors.newFixedThreadPool(REPORT_THREAD_POOL_SIZE);
        try {
            List<CompletableFuture<Void>> futures = participantEntityList.stream()
                    .map(participant -> CompletableFuture.runAsync(() -> {
                        String participantInfo = participant.getCode() + " - " + participant.getName();
                        log.debug("Processing participant: '{}'", participantInfo);

                        try {
                            SettlementReportFileInDto settlementReportFileInDto = settlementReportService
                                    .findAllSettlementWithStatus(recordDate,
                                            participant, countryEntity.getId());

                            ReportData reportData = new ReportData(
                                    participant,
                                    countryEntity,
                                    userNuboEntity,
                                    StatusFilterOptionEnum.ASSIGNED,
                                    TypeFilterOptionEnum.REPORT_PAPELETA_TODAY,
                                    recordDate,
                                    ReportFileUtil.fileNamePapeleta(participant));
                            settlementReportService.publishReportToKafka(settlementReportFileInDto, reportData);
                            totalFiles.incrementAndGet();
                        } catch (ServiceException e) {
                            if (ErrorCode.NOT_DATA_FOUND.equals(e.getErrorCode())) {
                                log.debug("No ASSIGNED data for participant '{}'", participantInfo);
                            } else {
                                log.error("Error processing ASSIGNED participant '{}': {}", participantInfo,
                                        e.getMessage());
                            }
                        } catch (Exception e) {
                            log.error("Unexpected error processing ASSIGNED participant '{}': {}", participantInfo,
                                    e.getMessage(), e);
                        }
                    }, executor))
                    .toList();
            CompletableFuture.allOf(futures.toArray(new CompletableFuture[0])).join();
        } finally {
            executor.shutdown();
        }

        ReportOutDto reportOutDto = ReportOutDto.builder()
                .startGenerateDateTime(startGenerateDateTime)
                .endGenerateDateTime(ApplicationUtils.getZonedDateTimeNow(timeZone))
                .totalFiles(totalFiles.get())
                .build();

        log.debug("End method generateReportPapeletaAutomaticV1");

        return reportOutDto;
    }

    private CountryEntity findCountry(Long countryId) {
        if (countryId == null) {
            throw new ServiceException(ErrorCode.COUNTRY_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        return batchCacheService.findCountryCache(countryId)
                .orElseThrow(() -> new ServiceException(ErrorCode.COUNTRY_NOT_FOUND, HttpStatus.NOT_FOUND));
    }
}

```

## src/main/java/com/nubo/receipts/api/service/impl/SettlementReportServiceImpl.java

```java
package com.nubo.receipts.api.service.impl;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nubo.receipts.api.application.properties.PropertiesConfig;
import com.nubo.receipts.api.application.properties.PropertiesContext;
import com.nubo.receipts.api.client.kafka.models.dto.ProducerKafkaReportFileInDto;
import com.nubo.receipts.api.client.kafka.models.dto.SettlementReportFileInDto;
import com.nubo.receipts.api.client.kafka.producer.KafkaNuboAdapter;
import com.nubo.receipts.api.client.rule.models.enums.BusinessRuleEnum;
import com.nubo.receipts.api.client.rule.service.BusinessRulesClient;
import com.nubo.receipts.api.exception.ServiceException;
import com.nubo.receipts.api.exception.error.ErrorCode;
import com.nubo.receipts.api.helpers.FileGenerateMapperUtil;
import com.nubo.receipts.api.helpers.ReportFileUtil;
import com.nubo.receipts.api.models.domain.ReportData;
import com.nubo.receipts.api.models.dto.response.SettlementReport.FileGenerateDto;
import com.nubo.receipts.api.models.entity.FileGenerateEntity;
import com.nubo.receipts.api.models.entity.ParticipantEntity;
import com.nubo.receipts.api.models.entity.StatusEntity;
import com.nubo.receipts.api.models.entity.TypeEntity;
import com.nubo.receipts.api.models.entity.UserNuboEntity;
import com.nubo.receipts.api.models.enums.SideEnum;
import com.nubo.receipts.api.models.enums.StatusEnum;
import com.nubo.receipts.api.models.enums.StatusFilterOptionEnum;
import com.nubo.receipts.api.models.enums.TypeEnum;
import com.nubo.receipts.api.models.enums.TypeFilterOptionEnum;
import com.nubo.receipts.api.models.enums.UserTypeEnum;
import com.nubo.receipts.api.models.enums.VersionApiEnum;
import com.nubo.receipts.api.repository.FileGenerateRepository;
import com.nubo.receipts.api.repository.ParticipantRepository;
import com.nubo.receipts.api.repository.SettlementRepository;
import com.nubo.receipts.api.repository.TradeRepository;
import com.nubo.receipts.api.repository.UserNuboRepository;
import com.nubo.receipts.api.service.BatchCacheService;
import com.nubo.receipts.api.service.SettlementReportService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class SettlementReportServiceImpl implements SettlementReportService {

    private final SettlementRepository settlementRepository;
    private final TradeRepository tradeRepository;
    private final ParticipantRepository participantRepository;
    private final UserNuboRepository userNuboRepository;
    private final KafkaNuboAdapter kafkaNuboAdapter;
    private final FileGenerateRepository fileGenerateRepository;
    private final BusinessRulesClient businessRulesClient;
    private final BatchCacheService batchCacheService;
    private final PropertiesConfig propertiesConfig;

    @Transactional
    @Override
    public FileGenerateDto generateLiquidaReport(LocalDate date, StatusFilterOptionEnum status, Long participantId,
            Long userId,
            Long countryId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return generateLiquidaReportV1(date, status, participantId, userId, countryId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    @Transactional
    @Override
    public FileGenerateDto generatePapeletaReport(LocalDate date, Long participantId, Long userId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return generatePapeletaReportV1(date, participantId, userId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private FileGenerateDto generateLiquidaReportV1(LocalDate date, StatusFilterOptionEnum status, Long participantId,
            Long userId,
            Long countryId) {
        log.info(
                "Start method generateLiquidaReportV1, date: {}, status: {}, participantId: {}, userId: {}, countryId: {}",
                date, status, participantId, userId, countryId);

        this.validateDateMustBeInPast(date);
        UserNuboEntity userNuboEntity = findUserNubo(userId);

        ParticipantEntity participantEntity = resolveParticipant(userNuboEntity, participantId);
        StatusFilterOptionEnum optionStatus = status != null ? status : StatusFilterOptionEnum.ASSIGNED;

        SettlementReportFileInDto settlementReportFileInDto;
        if (Objects.equals(optionStatus, StatusFilterOptionEnum.REGISTERED)) {
            settlementReportFileInDto = findAllTradeWithStatusRegistered(date, participantEntity, countryId);
        } else {
            settlementReportFileInDto = findAllSettlementWithStatus(date, participantEntity, countryId);
        }

        ReportData reportData = new ReportData(
                participantEntity,
                participantEntity.getCountry(),
                userNuboEntity,
                optionStatus,
                TypeFilterOptionEnum.REPORT_LIQUIDA_HISTORY,
                date,
                ReportFileUtil.fileNameLiquida(participantEntity.getCountry(), optionStatus.getStatusEnum()));
        FileGenerateEntity fileGenerateEntity = publishReportToKafka(settlementReportFileInDto, reportData);

        long totalRecords = settlementReportFileInDto.getReportsSize() != null
                ? settlementReportFileInDto.getReportsSize()
                : 0L;
        FileGenerateDto fileGenerateDto = FileGenerateMapperUtil.toDto(fileGenerateEntity, totalRecords,
                null);
        fileGenerateDto.setMessage("File with " + totalRecords + " operations is being generated...");

        return fileGenerateDto;
    }

    @Override
    public SettlementReportFileInDto findAllTradeWithStatusRegistered(LocalDate date,
            ParticipantEntity participantEntity, Long countryId) {
        List<Long> tradeTypeIds = Arrays.asList(TypeEnum.CONT.getId(), TypeEnum.REPO.getId());

        long totalRecords = tradeRepository.countSettlementReport(date, participantEntity.getId(), tradeTypeIds,
                StatusEnum.REGISTERED.getId(), countryId, SideEnum.BUY.getId(), SideEnum.SELL.getId());

        if (totalRecords == 0) {
            log.debug("No trades with settlements found for participant '{}', date '{}', countryId '{}'",
                    participantEntity.getCode(), date, countryId);
            throw new ServiceException(ErrorCode.NOT_DATA_FOUND, HttpStatus.NOT_FOUND);
        }

        return SettlementReportFileInDto.builder()
                .participantId(participantEntity.getId())
                .tradeTypeIds(tradeTypeIds)
                .statusRegisteredId(StatusEnum.REGISTERED.getId())
                .countryId(countryId)
                .reportsSize(totalRecords)
                .date(date)
                .build();
    }

    @Override
    public SettlementReportFileInDto findAllSettlementWithStatus(LocalDate date,
            ParticipantEntity participantEntity, Long countryId) {
        List<Long> searchStatusIds = businessRulesClient.validateScheduleAction(
                BusinessRuleEnum.RULE_OPERATION_SETTLEMENT_FILE);
        List<Long> tradeTypeIds = Arrays.asList(TypeEnum.CONT.getId(), TypeEnum.REPO.getId());

        long totalRecords = settlementRepository.countSettlementReport(date, participantEntity.getId(),
                tradeTypeIds, searchStatusIds, countryId, SideEnum.BUY.getId(), SideEnum.SELL.getId());

        if (totalRecords == 0) {
            log.debug("No settlements found for participant '{}', date '{}', countryId '{}', searchStatusIds '{}'",
                    participantEntity.getCode(), date, countryId, searchStatusIds);
            throw new ServiceException(ErrorCode.NOT_DATA_FOUND, HttpStatus.NOT_FOUND);
        }
        return SettlementReportFileInDto.builder()
                .participantId(participantEntity.getId())
                .searchStatusIds(searchStatusIds)
                .tradeTypeIds(tradeTypeIds)
                .countryId(countryId)
                .reportsSize(totalRecords)
                .date(date)
                .build();
    }

    @Override
    public FileGenerateEntity publishReportToKafka(SettlementReportFileInDto settlementReportFileInDto,
            ReportData reportData) {
        log.debug("Start method publishReportToKafka");

        FileGenerateEntity fileGenerateEntity = getFileGenerateEntity(reportData);
        settlementReportFileInDto.setFileGenerateId(fileGenerateEntity.getId());
        ParticipantEntity participantEntity = reportData.participantEntity() == null
                ? new ParticipantEntity()
                : reportData.participantEntity();

        String key = participantEntity != null && participantEntity.getId() != null
                ? participantEntity.getId().toString()
                : "";
        ProducerKafkaReportFileInDto kafkaDto = buildKafkaPayload(settlementReportFileInDto,
                reportData.userNuboEntity());

        if (reportData.optionType() == TypeFilterOptionEnum.REPORT_LIQUIDA_TODAY ||
                reportData.optionType() == TypeFilterOptionEnum.REPORT_LIQUIDA_HISTORY) {
            kafkaNuboAdapter.sendMessageReportLiquidaAsync(key, kafkaDto);
        } else if (reportData.optionType() == TypeFilterOptionEnum.REPORT_PAPELETA_TODAY ||
                reportData.optionType() == TypeFilterOptionEnum.REPORT_PAPELETA_HISTORY) {
            kafkaNuboAdapter.sendMessageReportPapeletaAsync(key, kafkaDto);
        }

        log.debug("published report to Kafka for participant '{}'",
                participantEntity.getCode() + " - " + participantEntity.getName());
        return fileGenerateEntity;
    }

    private void validateDateMustBeInPast(LocalDate date) {
        LocalDate today = LocalDate.now();
        if (date == null || !date.isBefore(today)) {
            log.warn("Invalid date: {}", date);
            throw new ServiceException(ErrorCode.INVALID_DATE_MUST_BE_IN_PAST, HttpStatus.BAD_REQUEST);
        }
    }

    private ProducerKafkaReportFileInDto buildKafkaPayload(SettlementReportFileInDto report,
            UserNuboEntity userNuboEntity) {
        return ProducerKafkaReportFileInDto.builder()
                .clientIp(PropertiesContext.getClientIp())
                .clientUser(PropertiesContext.getClientUser())
                .clientDateTime(PropertiesContext.getClientDatetime())
                .payload(report)
                .targetUserId(userNuboEntity.getId())
                .build();
    }

    private FileGenerateDto generatePapeletaReportV1(LocalDate date, Long participantId, Long userId) {
        log.info("Start method generatePapeletaReportV1, date: {}, participantId: {}, userId: {}", date,
                participantId, userId);

        this.validateDateMustBeInPast(date);
        UserNuboEntity userNuboEntity = findUserNubo(userId);
        ParticipantEntity participantEntity = resolveParticipant(userNuboEntity, participantId);

        SettlementReportFileInDto settlementReportFileInDto = findAllSettlementWithStatus(date, participantEntity,
                null);

        ReportData reportData = new ReportData(
                participantEntity,
                participantEntity.getCountry(),
                userNuboEntity,
                StatusFilterOptionEnum.ASSIGNED,
                TypeFilterOptionEnum.REPORT_PAPELETA_HISTORY,
                date,
                ReportFileUtil.fileNamePapeleta(participantEntity));
        FileGenerateEntity fileGenerateEntity = publishReportToKafka(settlementReportFileInDto, reportData);

        long totalRecords = settlementReportFileInDto.getReportsSize() != null
                ? settlementReportFileInDto.getReportsSize()
                : 0L;
        FileGenerateDto fileGenerateDto = FileGenerateMapperUtil.toDto(fileGenerateEntity, totalRecords,
                null);
        fileGenerateDto.setMessage("File with " + totalRecords + " operations is being generated...");

        return fileGenerateDto;
    }

    private ParticipantEntity resolveParticipant(UserNuboEntity userNuboEntity, Long participantId) {
        this.validateUserType(userNuboEntity);
        ParticipantEntity participantEntity = userNuboEntity.getParticipant();
        if (isExternalUser(userNuboEntity)) {
            return participantEntity;
        }
        if (participantId != null) {
            return findParticipantById(participantId);
        }
        return participantEntity;
    }

    private void validateUserType(UserNuboEntity userNuboEntity) {
        if (userNuboEntity.getUserType() == null) {
            throw new ServiceException(ErrorCode.USER_TYPE_ERROR, HttpStatus.NOT_FOUND);
        }
    }

    private boolean isExternalUser(UserNuboEntity userNuboEntity) {
        return UserTypeEnum.EXTERNAL.equals(userNuboEntity.getUserType());
    }

    private ParticipantEntity findParticipantById(Long participantId) {
        return participantRepository.findById(participantId)
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private UserNuboEntity findUserNubo(Long userId) {
        return userNuboRepository.findById(userId)
                .orElseThrow(() -> new ServiceException(ErrorCode.USER_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private FileGenerateEntity getFileGenerateEntity(ReportData reportData) {
        TypeEnum typeEnum = reportData.optionType().getTypeEnum();
        ParticipantEntity participantEntity = reportData.participantEntity();
        UserNuboEntity userNuboEntity = reportData.userNuboEntity();
        TypeEntity typeEntity = findType(typeEnum.getId());
        StatusEntity statusEntity = findStatus(reportData.optionsStatus().getStatusEnum().getId());

        String fileName = reportData.fileName();
        OffsetDateTime offsetDateTime = OffsetDateTime.now();

        FileGenerateEntity fileGenerateEntityLast;
        if (TypeEnum.FILE_LIQUIDA_TODAY == typeEnum || TypeEnum.FILE_PAPELETA_TODAY == typeEnum) {
            fileGenerateEntityLast = fileGenerateRepository
                    .findTopByParticipantIdAndTypeIdOrderByGeneratedAtDesc(participantEntity.getId(),
                            typeEntity.getId(), fileName)
                    .orElseGet(() -> FileGenerateEntity.builder()
                            .fileConsecutive(0)
                            .generationStatus(findStatus(StatusEnum.FILE_IN_PROCESS.getId()))
                            .generatedAt(offsetDateTime)
                            .build());
        } else {
            fileGenerateEntityLast = fileGenerateRepository
                    .findTopByParticipantIdAndTypeIdOrderByGeneratedAtDesc(participantEntity.getId(),
                            typeEntity.getId(), reportData.recordDate())
                    .orElseGet(() -> FileGenerateEntity.builder()
                            .fileConsecutive(0)
                            .generationStatus(findStatus(StatusEnum.FILE_IN_PROCESS.getId()))
                            .generatedAt(offsetDateTime)
                            .build());
        }

        FileGenerateEntity fileGenerateEntitySave = fileGenerateEntityLast.toBuilder()
                .fileName(fileName)
                .fileType("dat")
                .fileConsecutive(fileGenerateEntityLast.getFileConsecutive() != null
                        ? fileGenerateEntityLast.getFileConsecutive() + 1
                        : 1)
                .recordDate(reportData.recordDate())
                .generatedBy(userNuboEntity.getUserName())
                .operationStatus(statusEntity)
                .participant(participantEntity)
                .type(typeEntity)
                .lastModifyUser(userNuboEntity.getUserName())
                .lastModifyDate(offsetDateTime.toLocalDateTime())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyApplic(propertiesConfig.getApiName())
                .build();

        return fileGenerateRepository.save(fileGenerateEntitySave);
    }

    private StatusEntity findStatus(Long statusId) {
        if (statusId == null) {
            throw new ServiceException(ErrorCode.STATUS_NOT_FOUND, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return batchCacheService.findStatusCache(statusId)
                .orElseThrow(() -> new ServiceException(ErrorCode.STATUS_NOT_FOUND, HttpStatus.INTERNAL_SERVER_ERROR));
    }

    private TypeEntity findType(Long typeId) {
        if (typeId == null) {
            throw new ServiceException(ErrorCode.TYPE_NOT_FOUND, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return batchCacheService.findTypeCache(typeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TYPE_NOT_FOUND, HttpStatus.INTERNAL_SERVER_ERROR));
    }
}

```

## src/main/java/com/nubo/receipts/api/web/controller/CustodianReportRestController.java

```java
package com.nubo.receipts.api.web.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.receipts.api.models.dto.request.CustodianReportFilterInDto;
import com.nubo.receipts.api.models.dto.response.SettlementReport.FileGenerateDto;
import com.nubo.receipts.api.service.CustodianReportService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@Tag(name = "Custodian Detailed Package Report")
@RestController
@RequestMapping("/{version}/custodian-report")
@RequiredArgsConstructor
public class CustodianReportRestController {

    private final CustodianReportService custodianReportService;

    @Operation(summary = "Generate custodian detailed package report", description = "Generates the custodian report requested by the user and returns the file metadata")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully generated report metadata", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = FileGenerateDto.class)))
    })
    @PostMapping("/generate/report/user/{userId}")
    public ResponseEntity<FileGenerateDto> generateCsvReport(
            @PathVariable Long userId,
            @RequestParam(required = false) Long participantId,
            @Valid @RequestBody(required = false) CustodianReportFilterInDto filter) {

        return ResponseEntity.ok(custodianReportService.generateCustodianReport(filter, userId, participantId));
    }
}

```

## src/main/java/com/nubo/receipts/api/web/controller/CustodianUpdatesReportRestController.java

```java
package com.nubo.receipts.api.web.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.receipts.api.models.dto.request.CustodianUpdatesReportFilterInDto;
import com.nubo.receipts.api.models.dto.response.SettlementReport.FileGenerateDto;
import com.nubo.receipts.api.service.CustodianUpdatesReportService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@Tag(name = "Custodian Updates Report")
@RestController
@RequestMapping("/{version}/custodian-updates-report")
@RequiredArgsConstructor
public class CustodianUpdatesReportRestController {

    private final CustodianUpdatesReportService custodianUpdatesReportService;

    @Operation(summary = "Generate custodian updates report", description = "Generates a custodian updates report based on registration date, custodian, and status filters. Report is sent to Kafka for async CSV generation.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully generated report", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = FileGenerateDto.class)))
    })
    @PostMapping("/generate/report/user/{userId}")
    public ResponseEntity<FileGenerateDto> generateCustodianUpdatesReport(
            @PathVariable Long userId,
            @RequestParam(required = false) Long participantId,
            @RequestBody @Valid CustodianUpdatesReportFilterInDto filter) {

        return ResponseEntity.ok(custodianUpdatesReportService.generateCustodianUpdatesReport(filter, userId, participantId));
    }
}

```

## src/main/java/com/nubo/receipts/api/web/controller/FileGenerateHistoryController.java

```java
package com.nubo.receipts.api.web.controller;

import org.springdoc.core.annotations.ParameterObject;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.MediaType;

import com.nubo.receipts.api.models.dto.request.FileGenerateHistoryInDto;
import com.nubo.receipts.api.models.dto.response.PageResponseOutDto;
import com.nubo.receipts.api.models.dto.response.SettlementReport.FileGenerateDto;
import com.nubo.receipts.api.models.enums.TypeFilterOptionEnum;
import com.nubo.receipts.api.service.FileGenerateHistoryService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "File Generate History")
@RestController
@RequestMapping("/{version}")
@RequiredArgsConstructor
public class FileGenerateHistoryController {

    private final FileGenerateHistoryService fileGenerateHistoryService;

    @Operation(summary = "Get report generation history by user with dynamic filters", description = "Returns the paginated history of files generated by the specified user with dynamic filtering capabilities")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully retrieved filtered history", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = PageResponseOutDto.class))) })
    @GetMapping("/settlement-report/report/history/user/{userId}/dynamic")
    public ResponseEntity<PageResponseOutDto<FileGenerateDto>> getReportHistoryByUser(
            @PathVariable Long userId,
            @ParameterObject FileGenerateHistoryInDto filter) {
        PageResponseOutDto<FileGenerateDto> pageResponseOutDto = fileGenerateHistoryService.getReportHistoryByUser(
                userId, filter);
        return ResponseEntity.ok(pageResponseOutDto);
    }

    @Operation(summary = "Get report generation history by user with dynamic filters", description = "Returns the paginated history of files generated by the specified user with dynamic filtering capabilities")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully retrieved filtered history", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = PageResponseOutDto.class))) })
    @GetMapping("/custodian-report/search/history/user/{userId}")
    public ResponseEntity<PageResponseOutDto<FileGenerateDto>> getReportHistoryCustodianByUser(
            @PathVariable Long userId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "generatedAt") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(required = false) Long participantId) {
        return ResponseEntity
                .ok(fileGenerateHistoryService.getReportHistoryByUser(userId, page, size, sort, order,
                        participantId, TypeFilterOptionEnum.REPORT_CUSTODIAN));
    }

    @Operation(summary = "Get custodian updates report generation history by user", description = "Returns the history of custodian updates reports generated by the specified user")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully retrieved report history", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = PageResponseOutDto.class))) })
    @GetMapping("/custodian-updates-report/history/user/{userId}")
    public ResponseEntity<PageResponseOutDto<FileGenerateDto>> getReportHistoryCustodianUpdatesByUser(
            @PathVariable Long userId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "generatedAt") String sort,
            @RequestParam(defaultValue = "asc") String order) {
        return ResponseEntity
                .ok(fileGenerateHistoryService.getReportHistoryByUser(userId, page, size, sort, order, null, TypeFilterOptionEnum.REPORT_CUSTODIAN_UPDATES));
    }

}

```

## src/main/java/com/nubo/receipts/api/web/controller/ReceiptOperationRestController.java

```java
package com.nubo.receipts.api.web.controller;

import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.receipts.api.models.dto.request.SideOperationInDto;
import com.nubo.receipts.api.models.dto.request.TradeOperationInDto;
import com.nubo.receipts.api.models.dto.response.massive.ReceiptSettlementPlaneOutDto;
import com.nubo.receipts.api.models.dto.response.pdf.ReceiptSettlementOutDto;
import com.nubo.receipts.api.service.ReceiptSettlementService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@Tag(name = "Receipt Operation")
@RestController
@RequestMapping("/{version}/receipt-operation")
@RequiredArgsConstructor
public class ReceiptOperationRestController {

    private final ReceiptSettlementService receiptSettlementService;

    @Deprecated
    @Operation(summary = "Generate receipt massive txt by folios and user type", description = "Generate receipt massive txt by folios and user type")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = ReceiptSettlementPlaneOutDto[].class))) })
    @PostMapping("/generate/receipt/massive/folios/user/{userId}")
    public ResponseEntity<List<ReceiptSettlementPlaneOutDto>> generateReceiptFoliosByUser(
            @PathVariable Long userId,
            @Valid @RequestBody List<TradeOperationInDto> tradeOperationInDtoList) {
        return ResponseEntity
                .ok(receiptSettlementService.generateReceiptSpecialTradeFoliosByUser(userId, tradeOperationInDtoList));
    }

    @Operation(summary = "Generate receipt pdf by side list", description = "Generate receipt pdf by side list")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = ReceiptSettlementOutDto[].class))) })
    @PostMapping("/generate/settlement/trade/{tradeId}")
    public ResponseEntity<List<ReceiptSettlementOutDto>> generateReceiptSettlementOperation(
            @PathVariable Long tradeId,
            @Validated @RequestBody List<SideOperationInDto> sideOperationInDtoList) {
        return ResponseEntity
                .ok(receiptSettlementService.generateReceiptSettlementOperation(tradeId, sideOperationInDtoList));
    }

}

```

## src/main/java/com/nubo/receipts/api/web/controller/SettlementFileDataRestController.java

```java
package com.nubo.receipts.api.web.controller;

import org.springdoc.core.annotations.ParameterObject;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.receipts.api.models.dto.request.FileIndividualInDto;
import com.nubo.receipts.api.models.dto.request.FileMassiveInDto;
import com.nubo.receipts.api.models.dto.response.PageResponseOutDto;
import com.nubo.receipts.api.service.SettlementFileDataService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@Tag(name = "Settlement File Data Generation")
@RestController
@RequestMapping("/{version}/settlement-file-data")
@RequiredArgsConstructor
public class SettlementFileDataRestController {

    private final SettlementFileDataService settlementFileService;

    @Operation(summary = "Generate Individual Settlement File", description = "Generate individual settlement file based on operation parameters. Returns ARCHIVO_LIQUIDA or COMPROBANTE format based on voucherType")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Settlement file processing completed", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = PageResponseOutDto.class)))
    })
    @GetMapping("/individual")
    public ResponseEntity<PageResponseOutDto<?>> generateIndividualSettlementFile(
            @Valid @ParameterObject FileIndividualInDto requestParams) {
        PageResponseOutDto<?> response = settlementFileService.processIndividualSettlementFile(
                requestParams);
        return ResponseEntity.ok(response);
    }

    @Operation(summary = "Generate Massive Settlement File", description = "Generate Massive settlement file based on operation parameters. Returns ARCHIVO_LIQUIDA or COMPROBANTE format based on voucherType")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Settlement file processing completed", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = PageResponseOutDto.class)))
    })
    @GetMapping("/massive")
    public ResponseEntity<PageResponseOutDto<?>> generateMassiveSettlementFile(
            @Valid @ParameterObject FileMassiveInDto request) {
        PageResponseOutDto<?> response = settlementFileService.processMassiveSettlementFile(request);
        return ResponseEntity.ok(response);
    }
}

```

## src/main/java/com/nubo/receipts/api/web/controller/SettlementReportAutoRestController.java

```java
package com.nubo.receipts.api.web.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.receipts.api.models.dto.response.ReportOutDto;
import com.nubo.receipts.api.models.enums.TimeZoneEnum;
import com.nubo.receipts.api.service.SettlementReportAutoService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "Settlement Report Operation Automatic")
@RestController
@RequestMapping("/{version}/settlement-report")
@RequiredArgsConstructor
public class SettlementReportAutoRestController {

    private final SettlementReportAutoService settlementReportAutoService;

    @Operation(summary = "Generate Liquida report for RV operations", description = "Generates a detailed Liquida report for RV operations within the given date")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = ReportOutDto.class))) })
    @PostMapping("/generate/report-liquida/automatic")
    public ResponseEntity<ReportOutDto> generateReportLiquidaAutomatic(
            @RequestParam(required = false, defaultValue = "COLOMBIA_STANDARD_TIME") TimeZoneEnum timeZone) {
        return ResponseEntity.ok(settlementReportAutoService.generateReportLiquidaAutomatic(timeZone));
    }

    @Operation(summary = "Generate papeleta report for RV operations", description = "Generates a detailed papeleta report for RV operations within the given date")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = ReportOutDto.class))) })
    @PostMapping("/generate/report-papeleta/automatic")
    public ResponseEntity<ReportOutDto> generateReportPapeletaAutomatic(
            @RequestParam(required = false, defaultValue = "COLOMBIA_STANDARD_TIME") TimeZoneEnum timeZone) {
        return ResponseEntity.ok(settlementReportAutoService.generateReportPapeletaAutomatic(timeZone));
    }

}

```

## src/main/java/com/nubo/receipts/api/web/controller/SettlementReportRestController.java

```java
package com.nubo.receipts.api.web.controller;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.receipts.api.models.dto.response.SettlementReport.FileGenerateDto;
import com.nubo.receipts.api.models.enums.StatusFilterOptionEnum;
import com.nubo.receipts.api.service.SettlementReportService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "Settlement Report Operation")
@RestController
@RequestMapping("/{version}/settlement-report")
@RequiredArgsConstructor
public class SettlementReportRestController {

    private final SettlementReportService settlementReportService;

    @Operation(summary = "Generate Liquida report for RV operations",
            description = "Generates a detailed Liquida report for RV operations within the given date")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = FileGenerateDto.class))) })
    @PostMapping("/generate/report-liquida/user/{userId}")
    public ResponseEntity<FileGenerateDto> generateLiquidaReport(
            @PathVariable Long userId,
            @Parameter(example = "2026-05-28") @RequestParam(required = true) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date,
            @Parameter(schema = @Schema(implementation = StatusFilterOptionEnum.class)) @RequestParam(required = false) StatusFilterOptionEnum status,
            @Parameter(example = "1") @RequestParam(required = false) Long participantId,
            @Parameter(example = "1") @RequestParam(required = false) Long countryId) {
        return ResponseEntity.ok(settlementReportService.generateLiquidaReport(date, status, participantId,
                userId, countryId));
    }

    @Operation(summary = "Generate papeleta report for RV operations",
            description = "Generates a detailed papeleta report for RV operations within the given date")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = FileGenerateDto.class))) })
    @PostMapping("/generate/report-papeleta/user/{userId}")
    public ResponseEntity<FileGenerateDto> generatePapeletaReport(
            @PathVariable Long userId,
            @Parameter(example = "2026-06-30") @RequestParam(required = true) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date,
            @Parameter(example = "1") @RequestParam(required = false) Long participantId) {
        return ResponseEntity.ok(settlementReportService.generatePapeletaReport(date, participantId, userId));
    }

}

```
