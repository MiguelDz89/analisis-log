# nbo-png-operaciones-espec-back

Código Java de producción y configuraciones, sin tests. Cada sección contiene el archivo original completo y su ruta. Captura: 28/10/2026.

## Índice

1. `.mvn/wrapper/maven-wrapper.properties`
2. `mvnw`
3. `mvnw.cmd`
4. `pom.xml`
5. `src/main/java/com/nubo/operations/special/espec/api/SpecialOperationsApiApplication.java`
6. `src/main/java/com/nubo/operations/special/espec/api/application/annotations/RateLimited.java`
7. `src/main/java/com/nubo/operations/special/espec/api/application/annotations/ValidBigDecimal.java`
8. `src/main/java/com/nubo/operations/special/espec/api/application/config/SwaggerConfig.java`
9. `src/main/java/com/nubo/operations/special/espec/api/application/config/ValidBigDecimalConfig.java`
10. `src/main/java/com/nubo/operations/special/espec/api/application/config/WebConfig.java`
11. `src/main/java/com/nubo/operations/special/espec/api/application/context/GlobalContext.java`
12. `src/main/java/com/nubo/operations/special/espec/api/application/database/NamingStrategyConfig.java`
13. `src/main/java/com/nubo/operations/special/espec/api/application/database/UpperNamingConfig.java`
14. `src/main/java/com/nubo/operations/special/espec/api/application/filters/GlobalFilter.java`
15. `src/main/java/com/nubo/operations/special/espec/api/application/interceptors/GlobalInterceptor.java`
16. `src/main/java/com/nubo/operations/special/espec/api/application/interceptors/RateLimitInterceptor.java`
17. `src/main/java/com/nubo/operations/special/espec/api/application/properties/PropertiesConfig.java`
18. `src/main/java/com/nubo/operations/special/espec/api/application/properties/PropertiesContext.java`
19. `src/main/java/com/nubo/operations/special/espec/api/application/security/CustomBasicAuthenticationEntryPoint.java`
20. `src/main/java/com/nubo/operations/special/espec/api/application/security/CustomBearerTokenAccessDeniedHandler.java`
21. `src/main/java/com/nubo/operations/special/espec/api/application/security/CustomBearerTokenAuthenticationEntryPoint.java`
22. `src/main/java/com/nubo/operations/special/espec/api/application/security/SecurityConfig.java`
23. `src/main/java/com/nubo/operations/special/espec/api/application/util/ApplicationUtils.java`
24. `src/main/java/com/nubo/operations/special/espec/api/application/util/RestClientUtils.java`
25. `src/main/java/com/nubo/operations/special/espec/api/client/operation/special/calculation/model/dto/request/SettleAccountsInDto.java`
26. `src/main/java/com/nubo/operations/special/espec/api/client/operation/special/calculation/model/dto/response/SettleAccountsOutDto.java`
27. `src/main/java/com/nubo/operations/special/espec/api/client/operation/special/calculation/service/SpecialOperationCalculationClient.java`
28. `src/main/java/com/nubo/operations/special/espec/api/client/operation/special/calculation/service/impl/SpecialOperationCalculationClientImpl.java`
29. `src/main/java/com/nubo/operations/special/espec/api/client/operation/special/fractionation/dto/request/AssignmentInDto.java`
30. `src/main/java/com/nubo/operations/special/espec/api/client/operation/special/fractionation/dto/request/AssignmentSpecialSettlementInDto.java`
31. `src/main/java/com/nubo/operations/special/espec/api/client/operation/special/fractionation/dto/request/FractionSpecialSettlementInDto.java`
32. `src/main/java/com/nubo/operations/special/espec/api/client/operation/special/fractionation/dto/request/FractionationInDto.java`
33. `src/main/java/com/nubo/operations/special/espec/api/client/operation/special/fractionation/dto/request/FractionationPendingInDto.java`
34. `src/main/java/com/nubo/operations/special/espec/api/client/operation/special/fractionation/service/FractionationClient.java`
35. `src/main/java/com/nubo/operations/special/espec/api/client/operation/special/fractionation/service/FractionationDepositClient.java`
36. `src/main/java/com/nubo/operations/special/espec/api/client/operation/special/fractionation/service/FractionationPendingClient.java`
37. `src/main/java/com/nubo/operations/special/espec/api/client/operation/special/fractionation/service/FractionationSpecialSettlementClient.java`
38. `src/main/java/com/nubo/operations/special/espec/api/client/operation/special/fractionation/service/impl/FractionationClientImpl.java`
39. `src/main/java/com/nubo/operations/special/espec/api/client/operation/special/fractionation/service/impl/FractionationDepositClientImpl.java`
40. `src/main/java/com/nubo/operations/special/espec/api/client/operation/special/fractionation/service/impl/FractionationPendingClientImpl.java`
41. `src/main/java/com/nubo/operations/special/espec/api/client/operation/special/fractionation/service/impl/FractionationSpecialSettlementClientImpl.java`
42. `src/main/java/com/nubo/operations/special/espec/api/client/operation/special/rules/dto/request/FractionRuleInDto.java`
43. `src/main/java/com/nubo/operations/special/espec/api/client/operation/special/rules/dto/response/OperationSpecialBusinessRuleOutDto.java`
44. `src/main/java/com/nubo/operations/special/espec/api/client/operation/special/rules/service/OperationSpecialBusinessRuleClient.java`
45. `src/main/java/com/nubo/operations/special/espec/api/client/operation/special/rules/service/impl/OperationSpecialBusinessRuleClientImpl.java`
46. `src/main/java/com/nubo/operations/special/espec/api/exception/ServiceException.java`
47. `src/main/java/com/nubo/operations/special/espec/api/exception/error/ErrorCode.java`
48. `src/main/java/com/nubo/operations/special/espec/api/exception/error/ErrorResponse.java`
49. `src/main/java/com/nubo/operations/special/espec/api/exception/error/ErrorValidation.java`
50. `src/main/java/com/nubo/operations/special/espec/api/exception/handler/GlobalExceptionHandler.java`
51. `src/main/java/com/nubo/operations/special/espec/api/helpers/MapperPageUtil.java`
52. `src/main/java/com/nubo/operations/special/espec/api/helpers/MapperUtil.java`
53. `src/main/java/com/nubo/operations/special/espec/api/helpers/dynamicQuery/dataBase/MapperReassignmentDynamicSearch.java`
54. `src/main/java/com/nubo/operations/special/espec/api/helpers/dynamicQuery/dataBase/MapperSpecialSettlementDynamicSearch.java`
55. `src/main/java/com/nubo/operations/special/espec/api/helpers/dynamicQuery/dataBase/MapperSpecialTradeDynamicSearch.java`
56. `src/main/java/com/nubo/operations/special/espec/api/helpers/dynamicQuery/dataBase/SpecialSettlementSpecificationBuilder.java`
57. `src/main/java/com/nubo/operations/special/espec/api/helpers/dynamicQuery/dataBase/SpecialSettlementSpecificationFactory.java`
58. `src/main/java/com/nubo/operations/special/espec/api/helpers/dynamicQuery/dataBase/SpecialTradeSpecificationBuilder.java`
59. `src/main/java/com/nubo/operations/special/espec/api/helpers/dynamicQuery/dataBase/SpecialTradeSpecificationFactory.java`
60. `src/main/java/com/nubo/operations/special/espec/api/models/dto/request/AfpFundInDto.java`
61. `src/main/java/com/nubo/operations/special/espec/api/models/dto/request/BeneficiaryReassignmentInDto.java`
62. `src/main/java/com/nubo/operations/special/espec/api/models/dto/request/CalculationInDto.java`
63. `src/main/java/com/nubo/operations/special/espec/api/models/dto/request/CalculationIvaInDto.java`
64. `src/main/java/com/nubo/operations/special/espec/api/models/dto/request/CorrectionSetInDto.java`
65. `src/main/java/com/nubo/operations/special/espec/api/models/dto/request/CurrencyInDto.java`
66. `src/main/java/com/nubo/operations/special/espec/api/models/dto/request/ExchangeRateInDto.java`
67. `src/main/java/com/nubo/operations/special/espec/api/models/dto/request/ExtendedReassignmentSetInDto.java`
68. `src/main/java/com/nubo/operations/special/espec/api/models/dto/request/ReassignmentSetInDto.java`
69. `src/main/java/com/nubo/operations/special/espec/api/models/dto/request/SpecialSettlementInDto.java`
70. `src/main/java/com/nubo/operations/special/espec/api/models/dto/request/SpecialSettlementParamInDto.java`
71. `src/main/java/com/nubo/operations/special/espec/api/models/dto/request/SpecialSettlementUpdateInDto.java`
72. `src/main/java/com/nubo/operations/special/espec/api/models/dto/request/SpecialTradeFilterRequestDto.java`
73. `src/main/java/com/nubo/operations/special/espec/api/models/dto/request/SpecialTradeInDto.java`
74. `src/main/java/com/nubo/operations/special/espec/api/models/dto/request/SpecialTradeParamInDto.java`
75. `src/main/java/com/nubo/operations/special/espec/api/models/dto/request/SpecialTradeUpdateInDto.java`
76. `src/main/java/com/nubo/operations/special/espec/api/models/dto/request/StatusInDto.java`
77. `src/main/java/com/nubo/operations/special/espec/api/models/dto/request/StatusUpdateInDto.java`
78. `src/main/java/com/nubo/operations/special/espec/api/models/dto/request/TradeParamInDto.java`
79. `src/main/java/com/nubo/operations/special/espec/api/models/dto/response/AfpFundOutDto.java`
80. `src/main/java/com/nubo/operations/special/espec/api/models/dto/response/AllSpecialTradeOutDto.java`
81. `src/main/java/com/nubo/operations/special/espec/api/models/dto/response/BankAccountOutDto.java`
82. `src/main/java/com/nubo/operations/special/espec/api/models/dto/response/BankOutDto.java`
83. `src/main/java/com/nubo/operations/special/espec/api/models/dto/response/BeneficiaryReassignmentOutDto.java`
84. `src/main/java/com/nubo/operations/special/espec/api/models/dto/response/CalculationOutDto.java`
85. `src/main/java/com/nubo/operations/special/espec/api/models/dto/response/CfiOutDto.java`
86. `src/main/java/com/nubo/operations/special/espec/api/models/dto/response/CityOutDto.java`
87. `src/main/java/com/nubo/operations/special/espec/api/models/dto/response/CountryOutDto.java`
88. `src/main/java/com/nubo/operations/special/espec/api/models/dto/response/CurrencyOutDto.java`
89. `src/main/java/com/nubo/operations/special/espec/api/models/dto/response/DepartmentOutDto.java`
90. `src/main/java/com/nubo/operations/special/espec/api/models/dto/response/DepositoryOutDto.java`
91. `src/main/java/com/nubo/operations/special/espec/api/models/dto/response/ExchangeRateOutDto.java`
92. `src/main/java/com/nubo/operations/special/espec/api/models/dto/response/ExtendedReassignmentOutDto.java`
93. `src/main/java/com/nubo/operations/special/espec/api/models/dto/response/FicAdministratorOutDto.java`
94. `src/main/java/com/nubo/operations/special/espec/api/models/dto/response/FractionAccountOutDto.java`
95. `src/main/java/com/nubo/operations/special/espec/api/models/dto/response/FractionAccountSpecialSettlementOutDto.java`
96. `src/main/java/com/nubo/operations/special/espec/api/models/dto/response/GicsOutDto.java`
97. `src/main/java/com/nubo/operations/special/espec/api/models/dto/response/IdentificationTypeOutDto.java`
98. `src/main/java/com/nubo/operations/special/espec/api/models/dto/response/InvestorAccountOutDto.java`
99. `src/main/java/com/nubo/operations/special/espec/api/models/dto/response/InvestorOutDto.java`
100. `src/main/java/com/nubo/operations/special/espec/api/models/dto/response/IsPossibleCreateFractionDto.java`
101. `src/main/java/com/nubo/operations/special/espec/api/models/dto/response/MarketOutDto.java`
102. `src/main/java/com/nubo/operations/special/espec/api/models/dto/response/PageResponseOutDto.java`
103. `src/main/java/com/nubo/operations/special/espec/api/models/dto/response/ParticipantAccountOutDto.java`
104. `src/main/java/com/nubo/operations/special/espec/api/models/dto/response/ParticipantBankAccountOutDto.java`
105. `src/main/java/com/nubo/operations/special/espec/api/models/dto/response/ParticipantOutDto.java`
106. `src/main/java/com/nubo/operations/special/espec/api/models/dto/response/ReassignmentOutDto.java`
107. `src/main/java/com/nubo/operations/special/espec/api/models/dto/response/SecurityTitleOutDto.java`
108. `src/main/java/com/nubo/operations/special/espec/api/models/dto/response/SettlementOutDto.java`
109. `src/main/java/com/nubo/operations/special/espec/api/models/dto/response/SettlementStatusHistoryOutDto.java`
110. `src/main/java/com/nubo/operations/special/espec/api/models/dto/response/SideOutDto.java`
111. `src/main/java/com/nubo/operations/special/espec/api/models/dto/response/SimplySpecialTradeOutDto.java`
112. `src/main/java/com/nubo/operations/special/espec/api/models/dto/response/SpecialSettlementOutDto.java`
113. `src/main/java/com/nubo/operations/special/espec/api/models/dto/response/SpecialTradeOutDto.java`
114. `src/main/java/com/nubo/operations/special/espec/api/models/dto/response/StatusOutDto.java`
115. `src/main/java/com/nubo/operations/special/espec/api/models/dto/response/TaxStatusOutDto.java`
116. `src/main/java/com/nubo/operations/special/espec/api/models/dto/response/TrackingTradeMatchOutDto.java`
117. `src/main/java/com/nubo/operations/special/espec/api/models/dto/response/TradeEquityOutDto.java`
118. `src/main/java/com/nubo/operations/special/espec/api/models/dto/response/TradeOutDto.java`
119. `src/main/java/com/nubo/operations/special/espec/api/models/dto/response/TradingSessionOutDto.java`
120. `src/main/java/com/nubo/operations/special/espec/api/models/dto/response/TradingSystemOutDto.java`
121. `src/main/java/com/nubo/operations/special/espec/api/models/dto/response/TypeOutDto.java`
122. `src/main/java/com/nubo/operations/special/espec/api/models/dto/response/UserPermissionOutDto.java`
123. `src/main/java/com/nubo/operations/special/espec/api/models/dto/response/ValidationSettlementOutDto.java`
124. `src/main/java/com/nubo/operations/special/espec/api/models/entity/AfpFundEntity.java`
125. `src/main/java/com/nubo/operations/special/espec/api/models/entity/BankAccountEntity.java`
126. `src/main/java/com/nubo/operations/special/espec/api/models/entity/BankEntity.java`
127. `src/main/java/com/nubo/operations/special/espec/api/models/entity/CalculationEntity.java`
128. `src/main/java/com/nubo/operations/special/espec/api/models/entity/CalculationKey.java`
129. `src/main/java/com/nubo/operations/special/espec/api/models/entity/CfiEntity.java`
130. `src/main/java/com/nubo/operations/special/espec/api/models/entity/CityEntity.java`
131. `src/main/java/com/nubo/operations/special/espec/api/models/entity/CountryEntity.java`
132. `src/main/java/com/nubo/operations/special/espec/api/models/entity/CurrencyEntity.java`
133. `src/main/java/com/nubo/operations/special/espec/api/models/entity/DepartmentEntity.java`
134. `src/main/java/com/nubo/operations/special/espec/api/models/entity/DepositoryEntity.java`
135. `src/main/java/com/nubo/operations/special/espec/api/models/entity/ExchangeRateEntity.java`
136. `src/main/java/com/nubo/operations/special/espec/api/models/entity/FicAdministratorEntity.java`
137. `src/main/java/com/nubo/operations/special/espec/api/models/entity/GicsEntity.java`
138. `src/main/java/com/nubo/operations/special/espec/api/models/entity/HolidayEntity.java`
139. `src/main/java/com/nubo/operations/special/espec/api/models/entity/IdentificationTypeEntity.java`
140. `src/main/java/com/nubo/operations/special/espec/api/models/entity/InvestorAccountEntity.java`
141. `src/main/java/com/nubo/operations/special/espec/api/models/entity/InvestorEntity.java`
142. `src/main/java/com/nubo/operations/special/espec/api/models/entity/MarketEntity.java`
143. `src/main/java/com/nubo/operations/special/espec/api/models/entity/ParticipantAccountEntity.java`
144. `src/main/java/com/nubo/operations/special/espec/api/models/entity/ParticipantBankAccountEntity.java`
145. `src/main/java/com/nubo/operations/special/espec/api/models/entity/ParticipantEntity.java`
146. `src/main/java/com/nubo/operations/special/espec/api/models/entity/PermissionEntity.java`
147. `src/main/java/com/nubo/operations/special/espec/api/models/entity/ProfileEntity.java`
148. `src/main/java/com/nubo/operations/special/espec/api/models/entity/ProfilePermissionEntity.java`
149. `src/main/java/com/nubo/operations/special/espec/api/models/entity/ProfilePermissionId.java`
150. `src/main/java/com/nubo/operations/special/espec/api/models/entity/ReassignmentEntity.java`
151. `src/main/java/com/nubo/operations/special/espec/api/models/entity/SecurityTitleEntity.java`
152. `src/main/java/com/nubo/operations/special/espec/api/models/entity/SettlementEntity.java`
153. `src/main/java/com/nubo/operations/special/espec/api/models/entity/SettlementKey.java`
154. `src/main/java/com/nubo/operations/special/espec/api/models/entity/SettlementPendingEntity.java`
155. `src/main/java/com/nubo/operations/special/espec/api/models/entity/SettlementStatusHistoryEntity.java`
156. `src/main/java/com/nubo/operations/special/espec/api/models/entity/SettlementStatusHistoryKey.java`
157. `src/main/java/com/nubo/operations/special/espec/api/models/entity/SideEntity.java`
158. `src/main/java/com/nubo/operations/special/espec/api/models/entity/SpecialSettlementEntity.java`
159. `src/main/java/com/nubo/operations/special/espec/api/models/entity/SpecialSettlementKey.java`
160. `src/main/java/com/nubo/operations/special/espec/api/models/entity/SpecialTradeEntity.java`
161. `src/main/java/com/nubo/operations/special/espec/api/models/entity/StatusEntity.java`
162. `src/main/java/com/nubo/operations/special/espec/api/models/entity/StatusHistoryEntity.java`
163. `src/main/java/com/nubo/operations/special/espec/api/models/entity/StatusHistoryKey.java`
164. `src/main/java/com/nubo/operations/special/espec/api/models/entity/TaxStatusEntity.java`
165. `src/main/java/com/nubo/operations/special/espec/api/models/entity/TaxesEntity.java`
166. `src/main/java/com/nubo/operations/special/espec/api/models/entity/TradeEntity.java`
167. `src/main/java/com/nubo/operations/special/espec/api/models/entity/TradeEquityEntity.java`
168. `src/main/java/com/nubo/operations/special/espec/api/models/entity/TradeStatusHistoryEntity.java`
169. `src/main/java/com/nubo/operations/special/espec/api/models/entity/TradeStatusHistoryKey.java`
170. `src/main/java/com/nubo/operations/special/espec/api/models/entity/TradingSessionEntity.java`
171. `src/main/java/com/nubo/operations/special/espec/api/models/entity/TradingSystemEntity.java`
172. `src/main/java/com/nubo/operations/special/espec/api/models/entity/TypeEntity.java`
173. `src/main/java/com/nubo/operations/special/espec/api/models/entity/UserNuboEntity.java`
174. `src/main/java/com/nubo/operations/special/espec/api/models/enums/AllowedCountryEnum.java`
175. `src/main/java/com/nubo/operations/special/espec/api/models/enums/CustodianStatusEnum.java`
176. `src/main/java/com/nubo/operations/special/espec/api/models/enums/OperationSpecialBusinessRulesEnum.java`
177. `src/main/java/com/nubo/operations/special/espec/api/models/enums/PropertiesEnum.java`
178. `src/main/java/com/nubo/operations/special/espec/api/models/enums/ReassignmentStatusEnum.java`
179. `src/main/java/com/nubo/operations/special/espec/api/models/enums/SearchOperationEnum.java`
180. `src/main/java/com/nubo/operations/special/espec/api/models/enums/SideEnum.java`
181. `src/main/java/com/nubo/operations/special/espec/api/models/enums/StatusEnum.java`
182. `src/main/java/com/nubo/operations/special/espec/api/models/enums/TaxesEnum.java`
183. `src/main/java/com/nubo/operations/special/espec/api/models/enums/TradingSystemEnum.java`
184. `src/main/java/com/nubo/operations/special/espec/api/models/enums/TypeEnum.java`
185. `src/main/java/com/nubo/operations/special/espec/api/models/enums/TypeStatusEnum.java`
186. `src/main/java/com/nubo/operations/special/espec/api/models/enums/VersionApiEnum.java`
187. `src/main/java/com/nubo/operations/special/espec/api/repository/AfpFundRepository.java`
188. `src/main/java/com/nubo/operations/special/espec/api/repository/BankAccountRepository.java`
189. `src/main/java/com/nubo/operations/special/espec/api/repository/CountryRepository.java`
190. `src/main/java/com/nubo/operations/special/espec/api/repository/CurrencyRepository.java`
191. `src/main/java/com/nubo/operations/special/espec/api/repository/DepositoryRepository.java`
192. `src/main/java/com/nubo/operations/special/espec/api/repository/ExchangeRateRepository.java`
193. `src/main/java/com/nubo/operations/special/espec/api/repository/HolidayRepository.java`
194. `src/main/java/com/nubo/operations/special/espec/api/repository/InvestorAccountRepository.java`
195. `src/main/java/com/nubo/operations/special/espec/api/repository/InvestorRepository.java`
196. `src/main/java/com/nubo/operations/special/espec/api/repository/MarketRepository.java`
197. `src/main/java/com/nubo/operations/special/espec/api/repository/ParticipantAccountRepository.java`
198. `src/main/java/com/nubo/operations/special/espec/api/repository/ParticipantBankAccountRepository.java`
199. `src/main/java/com/nubo/operations/special/espec/api/repository/ParticipantRepository.java`
200. `src/main/java/com/nubo/operations/special/espec/api/repository/PermissionRepository.java`
201. `src/main/java/com/nubo/operations/special/espec/api/repository/ProfilePermissionRepository.java`
202. `src/main/java/com/nubo/operations/special/espec/api/repository/ReassignmentRepository.java`
203. `src/main/java/com/nubo/operations/special/espec/api/repository/SecurityTitleRepository.java`
204. `src/main/java/com/nubo/operations/special/espec/api/repository/SettlementPendingRepository.java`
205. `src/main/java/com/nubo/operations/special/espec/api/repository/SettlementRepository.java`
206. `src/main/java/com/nubo/operations/special/espec/api/repository/SettlementStatusHistoryRepository.java`
207. `src/main/java/com/nubo/operations/special/espec/api/repository/SideRepository.java`
208. `src/main/java/com/nubo/operations/special/espec/api/repository/SpecialSettlementRepository.java`
209. `src/main/java/com/nubo/operations/special/espec/api/repository/SpecialTradeRepository.java`
210. `src/main/java/com/nubo/operations/special/espec/api/repository/StatusRepository.java`
211. `src/main/java/com/nubo/operations/special/espec/api/repository/TaxesRepository.java`
212. `src/main/java/com/nubo/operations/special/espec/api/repository/TradeRepository.java`
213. `src/main/java/com/nubo/operations/special/espec/api/repository/TradeStatusHistoryRepository.java`
214. `src/main/java/com/nubo/operations/special/espec/api/repository/TypeRepository.java`
215. `src/main/java/com/nubo/operations/special/espec/api/repository/UserNuboRepository.java`
216. `src/main/java/com/nubo/operations/special/espec/api/service/AfpFundService.java`
217. `src/main/java/com/nubo/operations/special/espec/api/service/CalculationService.java`
218. `src/main/java/com/nubo/operations/special/espec/api/service/CurrencyService.java`
219. `src/main/java/com/nubo/operations/special/espec/api/service/DepositoryService.java`
220. `src/main/java/com/nubo/operations/special/espec/api/service/ExchangeRateService.java`
221. `src/main/java/com/nubo/operations/special/espec/api/service/FractionationDepositService.java`
222. `src/main/java/com/nubo/operations/special/espec/api/service/FractionationPendingService.java`
223. `src/main/java/com/nubo/operations/special/espec/api/service/FractionationService.java`
224. `src/main/java/com/nubo/operations/special/espec/api/service/ParametersService.java`
225. `src/main/java/com/nubo/operations/special/espec/api/service/ReassignmentService.java`
226. `src/main/java/com/nubo/operations/special/espec/api/service/SpecialSettlementService.java`
227. `src/main/java/com/nubo/operations/special/espec/api/service/SpecialTradeService.java`
228. `src/main/java/com/nubo/operations/special/espec/api/service/StatusService.java`
229. `src/main/java/com/nubo/operations/special/espec/api/service/ValidateAllowedDaysServices.java`
230. `src/main/java/com/nubo/operations/special/espec/api/service/ValidateFractionService.java`
231. `src/main/java/com/nubo/operations/special/espec/api/service/ValidateUserPermissionService.java`
232. `src/main/java/com/nubo/operations/special/espec/api/service/impl/AfpFundServiceImpl.java`
233. `src/main/java/com/nubo/operations/special/espec/api/service/impl/CalculationServiceImpl.java`
234. `src/main/java/com/nubo/operations/special/espec/api/service/impl/CurrencyServiceImpl.java`
235. `src/main/java/com/nubo/operations/special/espec/api/service/impl/DepositoryServiceImpl.java`
236. `src/main/java/com/nubo/operations/special/espec/api/service/impl/ExchangeRateServiceImpl.java`
237. `src/main/java/com/nubo/operations/special/espec/api/service/impl/FractionationDepositServiceImpl.java`
238. `src/main/java/com/nubo/operations/special/espec/api/service/impl/FractionationPendingServiceImpl.java`
239. `src/main/java/com/nubo/operations/special/espec/api/service/impl/FractionationServiceImpl.java`
240. `src/main/java/com/nubo/operations/special/espec/api/service/impl/ParametersServiceImpl.java`
241. `src/main/java/com/nubo/operations/special/espec/api/service/impl/ReassignmentServiceImpl.java`
242. `src/main/java/com/nubo/operations/special/espec/api/service/impl/SpecialSettlementServiceImpl.java`
243. `src/main/java/com/nubo/operations/special/espec/api/service/impl/SpecialTradeServiceImpl.java`
244. `src/main/java/com/nubo/operations/special/espec/api/service/impl/ValidateAllowedDaysImpl.java`
245. `src/main/java/com/nubo/operations/special/espec/api/service/impl/ValidateFractionServiceImpl.java`
246. `src/main/java/com/nubo/operations/special/espec/api/service/impl/ValidateUserPermissionServiceImpl.java`
247. `src/main/java/com/nubo/operations/special/espec/api/web/controller/AfpFundRestController.java`
248. `src/main/java/com/nubo/operations/special/espec/api/web/controller/CalculationRestController.java`
249. `src/main/java/com/nubo/operations/special/espec/api/web/controller/CurrencyRestController.java`
250. `src/main/java/com/nubo/operations/special/espec/api/web/controller/DepositoryRestController.java`
251. `src/main/java/com/nubo/operations/special/espec/api/web/controller/ExchangeRateRestController.java`
252. `src/main/java/com/nubo/operations/special/espec/api/web/controller/FractionationDepositRestController.java`
253. `src/main/java/com/nubo/operations/special/espec/api/web/controller/FractionationPendingRestController.java`
254. `src/main/java/com/nubo/operations/special/espec/api/web/controller/FractionationRestController.java`
255. `src/main/java/com/nubo/operations/special/espec/api/web/controller/ParametersRestController.java`
256. `src/main/java/com/nubo/operations/special/espec/api/web/controller/ReassignmentRestController.java`
257. `src/main/java/com/nubo/operations/special/espec/api/web/controller/SpecialSettlementRestController.java`
258. `src/main/java/com/nubo/operations/special/espec/api/web/controller/SpecialTradeRestController.java`
259. `src/main/java/com/nubo/operations/special/espec/api/web/controller/ValidateAllowedDaysRestController.java`
260. `src/main/java/com/nubo/operations/special/espec/api/web/controller/ValidateFractionRestController.java`
261. `src/main/java/com/nubo/operations/special/espec/api/web/controller/ValidateUserPermissionRestController.java`
262. `src/main/resources/application-dev.yml`
263. `src/main/resources/application-local.yml`
264. `src/main/resources/application-prod.yml`
265. `src/main/resources/application-qa.yml`
266. `src/main/resources/application-uat.yml`
267. `src/main/resources/application.yml`
268. `src/main/resources/banner.txt`
269. `src/main/resources/log/JsonEventLayout_error.json`
270. `src/main/resources/log/JsonEventLayout_info.json`
271. `src/main/resources/log/JsonEventLayout_trace.json`
272. `src/main/resources/log/log4j2-prod.properties`
273. `src/main/resources/log/log4j2.properties`

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
        <version>3.5.6</version>
        <relativePath/>
    </parent>
    <groupId>com.nubo.operations.espec.api</groupId>
    <artifactId>special-operations-api</artifactId>
    <version>0.138.14</version>
    <name>${project.artifactId}</name>
    <description>Special Operations Api</description>

    <properties>
        <java.version>17</java.version>
        <spring.port>8080</spring.port>
        <test.skip>false</test.skip>
        <datasource.url.application.name>ApplicationName=${project.artifactId}</datasource.url.application.name>
        <hikari.pool.name>${project.artifactId}-pool</hikari.pool.name>
        <dynamic.hikari.pool.name>${project.artifactId}-pool</dynamic.hikari.pool.name>
    </properties>

    <dependencyManagement>
        <dependencies>
            <!-- Security vulnerability fixes -->
            <!-- Fix CVE-2025-41249: Spring Framework annotation detection vulnerability -->
            <dependency>
                <groupId>org.springframework</groupId>
                <artifactId>spring-core</artifactId>
                <version>6.2.11</version>
            </dependency>
            <dependency>
                <groupId>org.springframework</groupId>
                <artifactId>spring-web</artifactId>
                <version>6.2.11</version>
            </dependency>
            <dependency>
                <groupId>org.springframework</groupId>
                <artifactId>spring-webmvc</artifactId>
                <version>6.2.11</version>
            </dependency>
            <dependency>
                <groupId>org.springframework</groupId>
                <artifactId>spring-context</artifactId>
                <version>6.2.11</version>
            </dependency>
            <dependency>
                <groupId>org.springframework</groupId>
                <artifactId>spring-beans</artifactId>
                <version>6.2.11</version>
            </dependency>
            <dependency>
                <groupId>org.springframework</groupId>
                <artifactId>spring-expression</artifactId>
                <version>6.2.11</version>
            </dependency>
            <dependency>
                <groupId>org.springframework</groupId>
                <artifactId>spring-aop</artifactId>
                <version>6.2.11</version>
            </dependency>
            <dependency>
                <groupId>org.springframework</groupId>
                <artifactId>spring-jdbc</artifactId>
                <version>6.2.11</version>
            </dependency>
            <dependency>
                <groupId>org.springframework</groupId>
                <artifactId>spring-orm</artifactId>
                <version>6.2.11</version>
            </dependency>
            <dependency>
                <groupId>org.springframework</groupId>
                <artifactId>spring-tx</artifactId>
                <version>6.2.11</version>
            </dependency>
            <dependency>
                <groupId>org.springframework</groupId>
                <artifactId>spring-aspects</artifactId>
                <version>6.2.11</version>
            </dependency>
            <dependency>
                <groupId>org.springframework</groupId>
                <artifactId>spring-test</artifactId>
                <version>6.2.11</version>
            </dependency>
            
            <!-- Fix CVE-2025-41248: Spring Security annotation detection vulnerability -->
            <dependency>
                <groupId>org.springframework.security</groupId>
                <artifactId>spring-security-core</artifactId>
                <version>6.5.4</version>
            </dependency>
            <dependency>
                <groupId>org.springframework.security</groupId>
                <artifactId>spring-security-config</artifactId>
                <version>6.5.4</version>
            </dependency>
            <dependency>
                <groupId>org.springframework.security</groupId>
                <artifactId>spring-security-web</artifactId>
                <version>6.5.4</version>
            </dependency>
            <dependency>
                <groupId>org.springframework.security</groupId>
                <artifactId>spring-security-crypto</artifactId>
                <version>6.5.4</version>
            </dependency>
            <dependency>
                <groupId>org.springframework.security</groupId>
                <artifactId>spring-security-oauth2-resource-server</artifactId>
                <version>6.5.4</version>
            </dependency>
            <dependency>
                <groupId>org.springframework.security</groupId>
                <artifactId>spring-security-oauth2-core</artifactId>
                <version>6.5.4</version>
            </dependency>
            <dependency>
                <groupId>org.springframework.security</groupId>
                <artifactId>spring-security-oauth2-jose</artifactId>
                <version>6.5.4</version>
            </dependency>
            <dependency>
                <groupId>org.springframework.security</groupId>
                <artifactId>spring-security-test</artifactId>
                <version>6.5.4</version>
            </dependency>
            
            <!-- Fix CVE-2025-48924: Apache Commons Lang recursion vulnerability -->
            <dependency>
                <groupId>org.apache.commons</groupId>
                <artifactId>commons-lang3</artifactId>
                <version>3.18.0</version>
            </dependency>
            
            <!-- Fix CVE-2025-53864: Nimbus JOSE JWT denial of service vulnerability -->
            <dependency>
                <groupId>com.nimbusds</groupId>
                <artifactId>nimbus-jose-jwt</artifactId>
                <version>9.37.4</version>
            </dependency>
        </dependencies>
    </dependencyManagement>

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
                                <exclude>**/SpecialOperationsApiApplication.class</exclude>
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

## src/main/java/com/nubo/operations/special/espec/api/SpecialOperationsApiApplication.java

```java
package com.nubo.operations.special.espec.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpecialOperationsApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpecialOperationsApiApplication.class, args);
	}

}

```

## src/main/java/com/nubo/operations/special/espec/api/application/annotations/RateLimited.java

```java
package com.nubo.operations.special.espec.api.application.annotations;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.METHOD, ElementType.TYPE})
public @interface RateLimited {
}
```

## src/main/java/com/nubo/operations/special/espec/api/application/annotations/ValidBigDecimal.java

```java
package com.nubo.operations.special.espec.api.application.annotations;

import com.nubo.operations.special.espec.api.application.config.ValidBigDecimalConfig;
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

## src/main/java/com/nubo/operations/special/espec/api/application/config/SwaggerConfig.java

```java
package com.nubo.operations.special.espec.api.application.config;

import com.nubo.operations.special.espec.api.exception.error.ErrorResponse;
import com.nubo.operations.special.espec.api.exception.error.ErrorValidation;
import com.nubo.operations.special.espec.api.models.enums.PropertiesEnum;
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

## src/main/java/com/nubo/operations/special/espec/api/application/config/ValidBigDecimalConfig.java

```java
package com.nubo.operations.special.espec.api.application.config;

import com.nubo.operations.special.espec.api.application.annotations.ValidBigDecimal;
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

## src/main/java/com/nubo/operations/special/espec/api/application/config/WebConfig.java

```java
package com.nubo.operations.special.espec.api.application.config;

import com.nubo.operations.special.espec.api.application.interceptors.GlobalInterceptor;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.client.RestClient;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;

import java.util.Arrays;
import java.util.Locale;

@Configuration
@RequiredArgsConstructor
public class WebConfig implements WebMvcConfigurer {

    private final GlobalInterceptor globalInterceptor;
    private final Environment environment;

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
        if (!Arrays.asList(environment.getActiveProfiles()).contains("local")) {
            registry.addInterceptor(globalInterceptor)
                    .addPathPatterns("/**");
        }
    }

    @Bean
    @Profile("local")
    public SecurityFilterChain localSecurityFilterChain(HttpSecurity http) throws Exception {
        return http
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(auth -> auth.anyRequest().permitAll())
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .build();
    }

    @Bean
    public RestClient restClient() {
        return RestClient.create();
    }

}

```

## src/main/java/com/nubo/operations/special/espec/api/application/context/GlobalContext.java

```java
package com.nubo.operations.special.espec.api.application.context;

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

## src/main/java/com/nubo/operations/special/espec/api/application/database/NamingStrategyConfig.java

```java
package com.nubo.operations.special.espec.api.application.database;

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

## src/main/java/com/nubo/operations/special/espec/api/application/database/UpperNamingConfig.java

```java
package com.nubo.operations.special.espec.api.application.database;

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

## src/main/java/com/nubo/operations/special/espec/api/application/filters/GlobalFilter.java

```java
package com.nubo.operations.special.espec.api.application.filters;

import com.nubo.operations.special.espec.api.application.context.GlobalContext;
import com.nubo.operations.special.espec.api.application.util.ApplicationUtils;
import com.nubo.operations.special.espec.api.exception.ServiceException;
import com.nubo.operations.special.espec.api.exception.error.ErrorCode;
import com.nubo.operations.special.espec.api.exception.error.ErrorResponse;
import com.nubo.operations.special.espec.api.models.enums.PropertiesEnum;
import com.nubo.operations.special.espec.api.models.enums.VersionApiEnum;
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

## src/main/java/com/nubo/operations/special/espec/api/application/interceptors/GlobalInterceptor.java

```java
package com.nubo.operations.special.espec.api.application.interceptors;

import com.nubo.operations.special.espec.api.application.context.GlobalContext;
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

## src/main/java/com/nubo/operations/special/espec/api/application/interceptors/RateLimitInterceptor.java

```java
package com.nubo.operations.special.espec.api.application.interceptors;

import com.nubo.operations.special.espec.api.application.annotations.RateLimited;
import com.nubo.operations.special.espec.api.application.properties.PropertiesConfig;
import com.nubo.operations.special.espec.api.exception.ServiceException;
import com.nubo.operations.special.espec.api.exception.error.ErrorCode;
import com.nubo.operations.special.espec.api.models.enums.PropertiesEnum;
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

## src/main/java/com/nubo/operations/special/espec/api/application/properties/PropertiesConfig.java

```java
package com.nubo.operations.special.espec.api.application.properties;

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

    @Value("${client.nubo.url-operation-special-calculation}")
    private String urlNuboOperationSpecialCalculation;

    @Value("${client.nubo.url-operation-special-rules}")
    private String urlNuboOperationSpecialRules;

    @Value("${client.nubo.url-operation-special-fractionation}")
    private String urlNuboOperationSpecialFractionation;

}

```

## src/main/java/com/nubo/operations/special/espec/api/application/properties/PropertiesContext.java

```java
package com.nubo.operations.special.espec.api.application.properties;

import com.nubo.operations.special.espec.api.application.context.GlobalContext;
import com.nubo.operations.special.espec.api.application.util.ApplicationUtils;
import com.nubo.operations.special.espec.api.models.enums.PropertiesEnum;
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

    public static String getAuthToken() {
        return GlobalContext.getProperty(PropertiesEnum.AUTH_TOKEN.getValue());
    }
}


```

## src/main/java/com/nubo/operations/special/espec/api/application/security/CustomBasicAuthenticationEntryPoint.java

```java
package com.nubo.operations.special.espec.api.application.security;

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

## src/main/java/com/nubo/operations/special/espec/api/application/security/CustomBearerTokenAccessDeniedHandler.java

```java
package com.nubo.operations.special.espec.api.application.security;

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

## src/main/java/com/nubo/operations/special/espec/api/application/security/CustomBearerTokenAuthenticationEntryPoint.java

```java
package com.nubo.operations.special.espec.api.application.security;

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

## src/main/java/com/nubo/operations/special/espec/api/application/security/SecurityConfig.java

```java
package com.nubo.operations.special.espec.api.application.security;

import com.nubo.operations.special.espec.api.application.filters.GlobalFilter;
import com.nubo.operations.special.espec.api.application.properties.PropertiesConfig;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
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
@Profile("!local")
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

## src/main/java/com/nubo/operations/special/espec/api/application/util/ApplicationUtils.java

```java
package com.nubo.operations.special.espec.api.application.util;

import com.google.gson.Gson;

import java.lang.reflect.Type;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Set;

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

    public static String convertObjectToJson(Object object) {
        return new Gson().toJson(object);
    }

    public static Object convertJsonToObject(String json, Object object) {
        return new Gson().fromJson(json, (Type) object);
    }

    public static boolean isBusinessDay(LocalDate date, Set<LocalDate> holidays) {
        DayOfWeek dow = date.getDayOfWeek();
        boolean weekend = (dow == DayOfWeek.SATURDAY || dow == DayOfWeek.SUNDAY);
        if (weekend) return false;
        return !holidays.contains(date);
    }

    public static String convertLocalDateTimeToString(LocalDateTime localDateTime) {
        return localDateTime.format(DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDatetime()));
    }

}


```

## src/main/java/com/nubo/operations/special/espec/api/application/util/RestClientUtils.java

```java
package com.nubo.operations.special.espec.api.application.util;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.ParameterizedTypeReference;
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

    public <T> ResponseEntity<T> requestWithResponseObject(URI url, HttpMethod method, HttpHeaders headers,
                                                           Object requestBody, ParameterizedTypeReference<T> responseType) {
        log.info("Client url, method[{}] {}", method, url);
        return restClient.method(method)
                .uri(url)
                .headers(h -> h.addAll(headers))
                .body(requestBody)
                .retrieve()
                .toEntity(responseType);
    }

}

```

## src/main/java/com/nubo/operations/special/espec/api/client/operation/special/calculation/model/dto/request/SettleAccountsInDto.java

```java
package com.nubo.operations.special.espec.api.client.operation.special.calculation.model.dto.request;

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

    private BigDecimal quantity;

    private BigDecimal price;

    private BigDecimal commission;

    private BigDecimal valTax;

    private String sideId;
}

```

## src/main/java/com/nubo/operations/special/espec/api/client/operation/special/calculation/model/dto/response/SettleAccountsOutDto.java

```java
package com.nubo.operations.special.espec.api.client.operation.special.calculation.model.dto.response;

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
}
```

## src/main/java/com/nubo/operations/special/espec/api/client/operation/special/calculation/service/SpecialOperationCalculationClient.java

```java
package com.nubo.operations.special.espec.api.client.operation.special.calculation.service;

import com.nubo.operations.special.espec.api.client.operation.special.calculation.model.dto.request.SettleAccountsInDto;
import com.nubo.operations.special.espec.api.client.operation.special.calculation.model.dto.response.SettleAccountsOutDto;

public interface SpecialOperationCalculationClient {

    SettleAccountsOutDto getSettleAccounts(SettleAccountsInDto settleAccountsInDto);
}

```

## src/main/java/com/nubo/operations/special/espec/api/client/operation/special/calculation/service/impl/SpecialOperationCalculationClientImpl.java

```java
package com.nubo.operations.special.espec.api.client.operation.special.calculation.service.impl;

import com.nubo.operations.special.espec.api.application.properties.PropertiesConfig;
import com.nubo.operations.special.espec.api.application.properties.PropertiesContext;
import com.nubo.operations.special.espec.api.application.util.ApplicationUtils;
import com.nubo.operations.special.espec.api.application.util.RestClientUtils;
import com.nubo.operations.special.espec.api.client.operation.special.calculation.model.dto.request.SettleAccountsInDto;
import com.nubo.operations.special.espec.api.client.operation.special.calculation.model.dto.response.SettleAccountsOutDto;
import com.nubo.operations.special.espec.api.client.operation.special.calculation.service.SpecialOperationCalculationClient;
import com.nubo.operations.special.espec.api.exception.ServiceException;
import com.nubo.operations.special.espec.api.exception.error.ErrorCode;
import com.nubo.operations.special.espec.api.models.enums.PropertiesEnum;
import com.nubo.operations.special.espec.api.models.enums.VersionApiEnum;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

@Service
@RequiredArgsConstructor
@Slf4j
public class SpecialOperationCalculationClientImpl implements SpecialOperationCalculationClient {

    private final PropertiesConfig propertiesConfig;
    private final RestClientUtils restClientUtils;

    private static final String SLASH = "/";
    private static final String AUTHORIZATION = "Authorization";
    private static final String BEARER = "Bearer";
    private static final String PATH_SETTLE_ACCOUNTS = "calculation/settle-accounts";

    @Override
    public SettleAccountsOutDto getSettleAccounts(SettleAccountsInDto settleAccountsInDto) {
        String url = propertiesConfig.getUrlNuboOperationSpecialCalculation()
                .concat(SLASH).concat(VersionApiEnum.V1.getValue())
                .concat(SLASH).concat(PATH_SETTLE_ACCOUNTS);

        UriComponents uriComponents = UriComponentsBuilder.fromUriString(url).build();

        HttpHeaders headers = new HttpHeaders();
        headers.set(AUTHORIZATION, BEARER.concat(" ").concat(PropertiesContext.getAuthToken()));
        headers.set(PropertiesEnum.CLIENT_IP.getValue(), PropertiesContext.getClientIp());
        headers.set(PropertiesEnum.CLIENT_USER.getValue(), PropertiesContext.getClientUser());
        headers.set(PropertiesEnum.CLIENT_DATETIME.getValue(),
                ApplicationUtils.convertLocalDateTimeToString(PropertiesContext.getClientDatetime()));
        headers.setContentType(MediaType.APPLICATION_JSON);

        try {
            ResponseEntity<SettleAccountsOutDto> response = restClientUtils.requestWithResponseObject(uriComponents.toUri(),
                    HttpMethod.POST, headers, settleAccountsInDto, SettleAccountsOutDto.class);
            if (!ObjectUtils.isEmpty(response.getBody())) {
                return response.getBody();
            }
        } catch (Exception ex) {
            throw new ServiceException(ErrorCode.CLIENT_OPERATION_SPECIAL_CALCULATION_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return SettleAccountsOutDto.builder().build();
    }

}

```

## src/main/java/com/nubo/operations/special/espec/api/client/operation/special/fractionation/dto/request/AssignmentInDto.java

```java
package com.nubo.operations.special.espec.api.client.operation.special.fractionation.dto.request;

import com.nubo.operations.special.espec.api.application.annotations.ValidBigDecimal;
import jakarta.validation.constraints.Min;
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
public class AssignmentInDto {

    @NotNull
    private Integer fraction;

    @Min(value = 1)
    private Long investorAccountId;

    @Min(value = 1)
    private Long participantAccountId;

    @Min(value = 1)
    private Long bankAccountId;

    @Min(value = 1)
    private Long participantBankAccountId;

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

}

```

## src/main/java/com/nubo/operations/special/espec/api/client/operation/special/fractionation/dto/request/AssignmentSpecialSettlementInDto.java

```java
package com.nubo.operations.special.espec.api.client.operation.special.fractionation.dto.request;

import com.nubo.operations.special.espec.api.application.annotations.ValidBigDecimal;
import jakarta.validation.constraints.Min;
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
public class AssignmentSpecialSettlementInDto {

    @NotNull
    private Integer fraction;

    @NotNull
    @Min(value = 1)
    private Long investorAccountId;

    @NotNull
    @Min(value = 1)
    private Long bankAccountId;

    @NotNull
    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal fractionPercentage;

    @NotNull
    @ValidBigDecimal(precision = 6, scale = 4)
    private BigDecimal commissionPercentage;

}

```

## src/main/java/com/nubo/operations/special/espec/api/client/operation/special/fractionation/dto/request/FractionSpecialSettlementInDto.java

```java
package com.nubo.operations.special.espec.api.client.operation.special.fractionation.dto.request;

import com.nubo.operations.special.espec.api.application.annotations.ValidBigDecimal;
import jakarta.validation.constraints.Min;
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
public class FractionSpecialSettlementInDto {

    @NotNull
    @Min(value = 1)
    private Long investorAccountId;

    @NotNull
    @Min(value = 1)
    private Long bankAccountId;

    @NotNull
    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal fractionPercentage;

    @NotNull
    @ValidBigDecimal(precision = 6, scale = 4)
    private BigDecimal commissionPercentage;

}

```

## src/main/java/com/nubo/operations/special/espec/api/client/operation/special/fractionation/dto/request/FractionationInDto.java

```java
package com.nubo.operations.special.espec.api.client.operation.special.fractionation.dto.request;

import com.nubo.operations.special.espec.api.application.annotations.ValidBigDecimal;
import jakarta.validation.constraints.Min;
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
public class FractionationInDto {

    @Min(value = 1)
    private Long investorAccountId;

    @Min(value = 1)
    private Long participantAccountId;

    @NotNull
    @Min(value = 1)
    private Long directDepositorId;

    private Long bankAccountId;

    @Min(value = 1)
    private Long participantBankAccountId;

    @NotNull
    private Boolean fiduciarySpecialist;


    @Min(value = 1)
    private Long sourceQuoteTypeId;

    private String reference;

    @NotNull
    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal fractionQuantity;

    @NotNull
    @ValidBigDecimal(precision = 6, scale = 4)
    private BigDecimal commissionPercentage;

}

```

## src/main/java/com/nubo/operations/special/espec/api/client/operation/special/fractionation/dto/request/FractionationPendingInDto.java

```java
package com.nubo.operations.special.espec.api.client.operation.special.fractionation.dto.request;

import com.nubo.operations.special.espec.api.application.annotations.ValidBigDecimal;
import jakarta.validation.constraints.Min;
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
public class FractionationPendingInDto {

    @Min(value = 1)
    private Long investorAccountId;

    @Min(value = 1)
    private Long participantAccountId;

    @NotNull
    @Min(value = 1)
    private Long directDepositorId;

    @Min(value = 1)
    private Long bankAccountId;

    @Min(value = 1)
    private Long participantBankAccountId;

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

}

```

## src/main/java/com/nubo/operations/special/espec/api/client/operation/special/fractionation/service/FractionationClient.java

```java
package com.nubo.operations.special.espec.api.client.operation.special.fractionation.service;

import com.nubo.operations.special.espec.api.client.operation.special.fractionation.dto.request.AssignmentInDto;
import com.nubo.operations.special.espec.api.client.operation.special.fractionation.dto.request.FractionationInDto;
import com.nubo.operations.special.espec.api.models.dto.response.SettlementOutDto;

import java.util.List;

public interface FractionationClient {

    List<SettlementOutDto> createFractions(Long tradeId, String sideId, Integer statusId, List<FractionationInDto> fractionationInDtoList);

    List<SettlementOutDto> updateAssignment(Long tradeId, String sideId, Integer statusId, List<AssignmentInDto> assignmentInDtoList);

}

```

## src/main/java/com/nubo/operations/special/espec/api/client/operation/special/fractionation/service/FractionationDepositClient.java

```java
package com.nubo.operations.special.espec.api.client.operation.special.fractionation.service;

import com.nubo.operations.special.espec.api.models.dto.response.SettlementOutDto;

import java.util.List;

public interface FractionationDepositClient {

    List<SettlementOutDto> approveAssignment(Long tradeId, String sideId);

    List<SettlementOutDto> rejectAssignment(Long tradeId, String sideId);

}

```

## src/main/java/com/nubo/operations/special/espec/api/client/operation/special/fractionation/service/FractionationPendingClient.java

```java
package com.nubo.operations.special.espec.api.client.operation.special.fractionation.service;

import com.nubo.operations.special.espec.api.client.operation.special.fractionation.dto.request.AssignmentInDto;
import com.nubo.operations.special.espec.api.client.operation.special.fractionation.dto.request.FractionationPendingInDto;
import com.nubo.operations.special.espec.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.ValidationSettlementOutDto;

import java.util.List;

public interface FractionationPendingClient {

    List<SettlementOutDto> createFractionsPending(Long tradeId, String sideId, Long statusId, List<FractionationPendingInDto> fractionationPendingInDtoList);

    List<SettlementOutDto> updateAssignmentPending(Long tradeId, String sideId, Long statusId, List<AssignmentInDto> assignmentInDtoList);

    PageResponseOutDto<ValidationSettlementOutDto> validateAssignment(Integer page, Integer size, Long tradeId, String sideId);

}

```

## src/main/java/com/nubo/operations/special/espec/api/client/operation/special/fractionation/service/FractionationSpecialSettlementClient.java

```java
package com.nubo.operations.special.espec.api.client.operation.special.fractionation.service;

import com.nubo.operations.special.espec.api.client.operation.special.fractionation.dto.request.AssignmentSpecialSettlementInDto;
import com.nubo.operations.special.espec.api.client.operation.special.fractionation.dto.request.FractionSpecialSettlementInDto;
import com.nubo.operations.special.espec.api.models.dto.response.SpecialSettlementOutDto;

import java.util.List;

public interface FractionationSpecialSettlementClient {

    List<SpecialSettlementOutDto> createFractions(Long specialTradeId, List<FractionSpecialSettlementInDto> fractionSpecialSettlementInDtoList);

    List<SpecialSettlementOutDto> updateAssignment(Long specialTradeId, List<AssignmentSpecialSettlementInDto> assignmentSpecialSettlementInDtoList);

}

```

## src/main/java/com/nubo/operations/special/espec/api/client/operation/special/fractionation/service/impl/FractionationClientImpl.java

```java
package com.nubo.operations.special.espec.api.client.operation.special.fractionation.service.impl;

import com.nubo.operations.special.espec.api.application.properties.PropertiesConfig;
import com.nubo.operations.special.espec.api.application.properties.PropertiesContext;
import com.nubo.operations.special.espec.api.application.util.ApplicationUtils;
import com.nubo.operations.special.espec.api.application.util.RestClientUtils;
import com.nubo.operations.special.espec.api.client.operation.special.fractionation.dto.request.AssignmentInDto;
import com.nubo.operations.special.espec.api.client.operation.special.fractionation.dto.request.FractionationInDto;
import com.nubo.operations.special.espec.api.client.operation.special.fractionation.service.FractionationClient;
import com.nubo.operations.special.espec.api.exception.ServiceException;
import com.nubo.operations.special.espec.api.exception.error.ErrorCode;
import com.nubo.operations.special.espec.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.special.espec.api.models.enums.PropertiesEnum;
import com.nubo.operations.special.espec.api.models.enums.VersionApiEnum;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class FractionationClientImpl implements FractionationClient {

    private final PropertiesConfig propertiesConfig;
    private final RestClientUtils restClientUtils;

    private static final String SLASH = "/";
    private static final String AUTHORIZATION = "Authorization";
    private static final String BEARER = "Bearer";
    private static final String PATH_FRACTIONATION = "fractionation";

    @Override
    public List<SettlementOutDto> createFractions(Long tradeId, String sideId, Integer statusId,
                                                  List<FractionationInDto> fractionationInDtoList) {
        String url = propertiesConfig.getUrlNuboOperationSpecialFractionation()
                .concat(SLASH).concat(VersionApiEnum.V1.getValue())
                .concat(SLASH).concat(PATH_FRACTIONATION)
                .concat(SLASH).concat("create-fractions")
                .concat(SLASH).concat("trade")
                .concat(SLASH).concat(tradeId.toString())
                .concat(SLASH).concat("side")
                .concat(SLASH).concat(sideId)
                .concat(SLASH).concat("status")
                .concat(SLASH).concat(statusId.toString());

        UriComponents uriComponents = UriComponentsBuilder.fromUriString(url).build();

        HttpHeaders headers = new HttpHeaders();
        headers.set(AUTHORIZATION, BEARER.concat(" ").concat(PropertiesContext.getAuthToken()));
        headers.set(PropertiesEnum.CLIENT_IP.getValue(), PropertiesContext.getClientIp());
        headers.set(PropertiesEnum.CLIENT_USER.getValue(), PropertiesContext.getClientUser());
        headers.set(PropertiesEnum.CLIENT_DATETIME.getValue(),
                ApplicationUtils.convertLocalDateTimeToString(PropertiesContext.getClientDatetime()));
        headers.setContentType(MediaType.APPLICATION_JSON);

        try {
            ResponseEntity<SettlementOutDto[]> response = restClientUtils.requestWithResponseObject(uriComponents.toUri(),
                    HttpMethod.POST, headers, fractionationInDtoList, SettlementOutDto[].class);
            if (!ObjectUtils.isEmpty(response.getBody())) {
                return List.of(response.getBody());
            }
        } catch (Exception ex) {
            throw new ServiceException(ErrorCode.CLIENT_OPERATION_SPECIAL_FRACTIONATION_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return List.of(SettlementOutDto.builder().build());
    }

    @Override
    public List<SettlementOutDto> updateAssignment(Long tradeId, String sideId, Integer statusId, List<AssignmentInDto> assignmentInDtoList) {
        String url = propertiesConfig.getUrlNuboOperationSpecialFractionation()
                .concat(SLASH).concat(VersionApiEnum.V1.getValue())
                .concat(SLASH).concat(PATH_FRACTIONATION)
                .concat(SLASH).concat("update-assignments")
                .concat(SLASH).concat("trade")
                .concat(SLASH).concat(tradeId.toString())
                .concat(SLASH).concat("side")
                .concat(SLASH).concat(sideId)
                .concat(SLASH).concat("status")
                .concat(SLASH).concat(statusId.toString());

        UriComponents uriComponents = UriComponentsBuilder.fromUriString(url).build();

        HttpHeaders headers = new HttpHeaders();
        headers.set(AUTHORIZATION, BEARER.concat(" ").concat(PropertiesContext.getAuthToken()));
        headers.set(PropertiesEnum.CLIENT_IP.getValue(), PropertiesContext.getClientIp());
        headers.set(PropertiesEnum.CLIENT_USER.getValue(), PropertiesContext.getClientUser());
        headers.set(PropertiesEnum.CLIENT_DATETIME.getValue(),
                ApplicationUtils.convertLocalDateTimeToString(PropertiesContext.getClientDatetime()));
        headers.setContentType(MediaType.APPLICATION_JSON);

        try {
            ResponseEntity<SettlementOutDto[]> response = restClientUtils.requestWithResponseObject(uriComponents.toUri(),
                    HttpMethod.PUT, headers, assignmentInDtoList, SettlementOutDto[].class);
            if (!ObjectUtils.isEmpty(response.getBody())) {
                return List.of(response.getBody());
            }
        } catch (Exception ex) {
            throw new ServiceException(ErrorCode.CLIENT_OPERATION_SPECIAL_FRACTIONATION_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return List.of(SettlementOutDto.builder().build());
    }

}

```

## src/main/java/com/nubo/operations/special/espec/api/client/operation/special/fractionation/service/impl/FractionationDepositClientImpl.java

```java
package com.nubo.operations.special.espec.api.client.operation.special.fractionation.service.impl;

import com.nubo.operations.special.espec.api.application.properties.PropertiesConfig;
import com.nubo.operations.special.espec.api.application.properties.PropertiesContext;
import com.nubo.operations.special.espec.api.application.util.ApplicationUtils;
import com.nubo.operations.special.espec.api.application.util.RestClientUtils;
import com.nubo.operations.special.espec.api.client.operation.special.fractionation.service.FractionationDepositClient;
import com.nubo.operations.special.espec.api.exception.ServiceException;
import com.nubo.operations.special.espec.api.exception.error.ErrorCode;
import com.nubo.operations.special.espec.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.special.espec.api.models.enums.PropertiesEnum;
import com.nubo.operations.special.espec.api.models.enums.VersionApiEnum;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class FractionationDepositClientImpl implements FractionationDepositClient {

    private final PropertiesConfig propertiesConfig;
    private final RestClientUtils restClientUtils;

    private static final String SLASH = "/";
    private static final String AUTHORIZATION = "Authorization";
    private static final String BEARER = "Bearer";
    private static final String PATH_FRACTIONATION = "fractionation-deposit";

    @Override
    public List<SettlementOutDto> approveAssignment(Long tradeId, String sideId) {
        String url = propertiesConfig.getUrlNuboOperationSpecialFractionation()
                .concat(SLASH).concat(VersionApiEnum.V1.getValue())
                .concat(SLASH).concat(PATH_FRACTIONATION)
                .concat(SLASH).concat("approve-assignments")
                .concat(SLASH).concat("trade")
                .concat(SLASH).concat(tradeId.toString())
                .concat(SLASH).concat("side")
                .concat(SLASH).concat(sideId);

        UriComponents uriComponents = UriComponentsBuilder.fromUriString(url).build();

        HttpHeaders headers = new HttpHeaders();
        headers.set(AUTHORIZATION, BEARER.concat(" ").concat(PropertiesContext.getAuthToken()));
        headers.set(PropertiesEnum.CLIENT_IP.getValue(), PropertiesContext.getClientIp());
        headers.set(PropertiesEnum.CLIENT_USER.getValue(), PropertiesContext.getClientUser());
        headers.set(PropertiesEnum.CLIENT_DATETIME.getValue(),
                ApplicationUtils.convertLocalDateTimeToString(PropertiesContext.getClientDatetime()));
        headers.setContentType(MediaType.APPLICATION_JSON);

        try {
            ResponseEntity<SettlementOutDto[]> response = restClientUtils.requestWithResponseObject(uriComponents.toUri(),
                    HttpMethod.PUT, headers, tradeId, SettlementOutDto[].class);
            if (!ObjectUtils.isEmpty(response.getBody())) {
                return List.of(response.getBody());
            }
        } catch (Exception ex) {
            throw new ServiceException(ErrorCode.CLIENT_OPERATION_SPECIAL_FRACTIONATION_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return List.of(SettlementOutDto.builder().build());
    }

    @Override
    public List<SettlementOutDto> rejectAssignment(Long tradeId, String sideId) {
        String url = propertiesConfig.getUrlNuboOperationSpecialFractionation()
                .concat(SLASH).concat(VersionApiEnum.V1.getValue())
                .concat(SLASH).concat(PATH_FRACTIONATION)
                .concat(SLASH).concat("reject-assignments")
                .concat(SLASH).concat("trade")
                .concat(SLASH).concat(tradeId.toString())
                .concat(SLASH).concat("side")
                .concat(SLASH).concat(sideId);

        UriComponents uriComponents = UriComponentsBuilder.fromUriString(url).build();

        HttpHeaders headers = new HttpHeaders();
        headers.set(AUTHORIZATION, BEARER.concat(" ").concat(PropertiesContext.getAuthToken()));
        headers.set(PropertiesEnum.CLIENT_IP.getValue(), PropertiesContext.getClientIp());
        headers.set(PropertiesEnum.CLIENT_USER.getValue(), PropertiesContext.getClientUser());
        headers.set(PropertiesEnum.CLIENT_DATETIME.getValue(),
                ApplicationUtils.convertLocalDateTimeToString(PropertiesContext.getClientDatetime()));
        headers.setContentType(MediaType.APPLICATION_JSON);

        try {
            ResponseEntity<SettlementOutDto[]> response = restClientUtils.requestWithResponseObject(uriComponents.toUri(),
                    HttpMethod.PUT, headers, tradeId, SettlementOutDto[].class);
            if (!ObjectUtils.isEmpty(response.getBody())) {
                return List.of(response.getBody());
            }
        } catch (Exception ex) {
            throw new ServiceException(ErrorCode.CLIENT_OPERATION_SPECIAL_FRACTIONATION_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return List.of(SettlementOutDto.builder().build());
    }
}

```

## src/main/java/com/nubo/operations/special/espec/api/client/operation/special/fractionation/service/impl/FractionationPendingClientImpl.java

```java
package com.nubo.operations.special.espec.api.client.operation.special.fractionation.service.impl;

import com.nubo.operations.special.espec.api.application.properties.PropertiesConfig;
import com.nubo.operations.special.espec.api.application.properties.PropertiesContext;
import com.nubo.operations.special.espec.api.application.util.ApplicationUtils;
import com.nubo.operations.special.espec.api.application.util.RestClientUtils;
import com.nubo.operations.special.espec.api.client.operation.special.fractionation.dto.request.AssignmentInDto;
import com.nubo.operations.special.espec.api.client.operation.special.fractionation.dto.request.FractionationPendingInDto;
import com.nubo.operations.special.espec.api.client.operation.special.fractionation.service.FractionationPendingClient;
import com.nubo.operations.special.espec.api.exception.ServiceException;
import com.nubo.operations.special.espec.api.exception.error.ErrorCode;
import com.nubo.operations.special.espec.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.ValidationSettlementOutDto;
import com.nubo.operations.special.espec.api.models.enums.PropertiesEnum;
import com.nubo.operations.special.espec.api.models.enums.VersionApiEnum;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.Collections;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class FractionationPendingClientImpl implements FractionationPendingClient {

    private final PropertiesConfig propertiesConfig;
    private final RestClientUtils restClientUtils;

    private static final String SLASH = "/";
    private static final String AUTHORIZATION = "Authorization";
    private static final String BEARER = "Bearer";
    private static final String PATH_FRACTIONATION = "fractionation-pending";

    @Override
    public List<SettlementOutDto> createFractionsPending(Long tradeId, String sideId, Long statusId,
                                                         List<FractionationPendingInDto> fractionationPendingInDtoList) {
        String url = propertiesConfig.getUrlNuboOperationSpecialFractionation()
                .concat(SLASH).concat(VersionApiEnum.V1.getValue())
                .concat(SLASH).concat(PATH_FRACTIONATION)
                .concat(SLASH).concat("create-fractions")
                .concat(SLASH).concat("trade")
                .concat(SLASH).concat(tradeId.toString())
                .concat(SLASH).concat("side")
                .concat(SLASH).concat(sideId)
                .concat(SLASH).concat("status")
                .concat(SLASH).concat(statusId.toString());

        UriComponents uriComponents = UriComponentsBuilder.fromUriString(url).build();

        HttpHeaders headers = new HttpHeaders();
        headers.set(AUTHORIZATION, BEARER.concat(" ").concat(PropertiesContext.getAuthToken()));
        headers.set(PropertiesEnum.CLIENT_IP.getValue(), PropertiesContext.getClientIp());
        headers.set(PropertiesEnum.CLIENT_USER.getValue(), PropertiesContext.getClientUser());
        headers.set(PropertiesEnum.CLIENT_DATETIME.getValue(),
                ApplicationUtils.convertLocalDateTimeToString(PropertiesContext.getClientDatetime()));
        headers.setContentType(MediaType.APPLICATION_JSON);

        try {
            ResponseEntity<SettlementOutDto[]> response = restClientUtils.requestWithResponseObject(uriComponents.toUri(),
                    HttpMethod.POST, headers, fractionationPendingInDtoList, SettlementOutDto[].class);
            if (!ObjectUtils.isEmpty(response.getBody())) {
                return List.of(response.getBody());
            }
        } catch (Exception ex) {
            throw new ServiceException(ErrorCode.CLIENT_OPERATION_SPECIAL_FRACTIONATION_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return List.of(SettlementOutDto.builder().build());
    }

    @Override
    public List<SettlementOutDto> updateAssignmentPending(Long tradeId, String sideId, Long statusId,
                                                          List<AssignmentInDto> assignmentInDtoList) {
        String url = propertiesConfig.getUrlNuboOperationSpecialFractionation()
                .concat(SLASH).concat(VersionApiEnum.V1.getValue())
                .concat(SLASH).concat(PATH_FRACTIONATION)
                .concat(SLASH).concat("update-assignments")
                .concat(SLASH).concat("trade")
                .concat(SLASH).concat(tradeId.toString())
                .concat(SLASH).concat("side")
                .concat(SLASH).concat(sideId)
                .concat(SLASH).concat("status")
                .concat(SLASH).concat(statusId.toString());

        UriComponents uriComponents = UriComponentsBuilder.fromUriString(url).build();

        HttpHeaders headers = new HttpHeaders();
        headers.set(AUTHORIZATION, BEARER.concat(" ").concat(PropertiesContext.getAuthToken()));
        headers.set(PropertiesEnum.CLIENT_IP.getValue(), PropertiesContext.getClientIp());
        headers.set(PropertiesEnum.CLIENT_USER.getValue(), PropertiesContext.getClientUser());
        headers.set(PropertiesEnum.CLIENT_DATETIME.getValue(),
                ApplicationUtils.convertLocalDateTimeToString(PropertiesContext.getClientDatetime()));
        headers.setContentType(MediaType.APPLICATION_JSON);

        try {
            ResponseEntity<SettlementOutDto[]> response = restClientUtils.requestWithResponseObject(uriComponents.toUri(),
                    HttpMethod.POST, headers, assignmentInDtoList, SettlementOutDto[].class);
            if (!ObjectUtils.isEmpty(response.getBody())) {
                return List.of(response.getBody());
            }
        } catch (Exception ex) {
            throw new ServiceException(ErrorCode.CLIENT_OPERATION_SPECIAL_FRACTIONATION_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return List.of(SettlementOutDto.builder().build());
    }

    @Override
    public PageResponseOutDto<ValidationSettlementOutDto> validateAssignment(Integer page, Integer size, Long tradeId,
                                                                             String sideId) {
        String url = propertiesConfig.getUrlNuboOperationSpecialFractionation()
                .concat(SLASH).concat(VersionApiEnum.V1.getValue())
                .concat(SLASH).concat(PATH_FRACTIONATION)
                .concat(SLASH).concat("validate-assignments")
                .concat(SLASH).concat("trade")
                .concat(SLASH).concat(tradeId.toString())
                .concat(SLASH).concat("side")
                .concat(SLASH).concat(sideId)
                .concat("?page=")
                .concat(page.toString())
                .concat("&size=")
                .concat(size.toString());


        UriComponents uriComponents = UriComponentsBuilder.fromUriString(url).build();

        HttpHeaders headers = new HttpHeaders();
        headers.set(AUTHORIZATION, BEARER.concat(" ").concat(PropertiesContext.getAuthToken()));
        headers.set(PropertiesEnum.CLIENT_IP.getValue(), PropertiesContext.getClientIp());
        headers.set(PropertiesEnum.CLIENT_USER.getValue(), PropertiesContext.getClientUser());
        headers.set(PropertiesEnum.CLIENT_DATETIME.getValue(),
                ApplicationUtils.convertLocalDateTimeToString(PropertiesContext.getClientDatetime()));
        headers.setContentType(MediaType.APPLICATION_JSON);

        try {

            ResponseEntity<PageResponseOutDto<ValidationSettlementOutDto>> response = restClientUtils.requestWithResponseObject(
                    uriComponents.toUri(), HttpMethod.GET, headers, tradeId,
                    new ParameterizedTypeReference<PageResponseOutDto<ValidationSettlementOutDto>>() {
                    }
            );

            if (response.getStatusCode() == HttpStatus.OK && response.getBody() != null) {
                return response.getBody();
            }
        } catch (Exception ex) {
            throw new ServiceException(ErrorCode.CLIENT_OPERATION_SPECIAL_FRACTIONATION_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        PageResponseOutDto<ValidationSettlementOutDto> emptyResponse = new PageResponseOutDto<>();
        emptyResponse.setContent(Collections.emptyList());
        emptyResponse.setPageSize(0);
        emptyResponse.setPageNumber(0);
        emptyResponse.setTotalElements(0L);
        emptyResponse.setTotalPages(0);

        return emptyResponse;
    }
}

```

## src/main/java/com/nubo/operations/special/espec/api/client/operation/special/fractionation/service/impl/FractionationSpecialSettlementClientImpl.java

```java
package com.nubo.operations.special.espec.api.client.operation.special.fractionation.service.impl;

import com.nubo.operations.special.espec.api.application.properties.PropertiesConfig;
import com.nubo.operations.special.espec.api.application.properties.PropertiesContext;
import com.nubo.operations.special.espec.api.application.util.ApplicationUtils;
import com.nubo.operations.special.espec.api.application.util.RestClientUtils;
import com.nubo.operations.special.espec.api.client.operation.special.fractionation.dto.request.AssignmentSpecialSettlementInDto;
import com.nubo.operations.special.espec.api.client.operation.special.fractionation.dto.request.FractionSpecialSettlementInDto;
import com.nubo.operations.special.espec.api.client.operation.special.fractionation.service.FractionationSpecialSettlementClient;
import com.nubo.operations.special.espec.api.exception.ServiceException;
import com.nubo.operations.special.espec.api.exception.error.ErrorCode;
import com.nubo.operations.special.espec.api.models.dto.response.SpecialSettlementOutDto;
import com.nubo.operations.special.espec.api.models.enums.PropertiesEnum;
import com.nubo.operations.special.espec.api.models.enums.VersionApiEnum;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class FractionationSpecialSettlementClientImpl implements FractionationSpecialSettlementClient {

    private final PropertiesConfig propertiesConfig;
    private final RestClientUtils restClientUtils;

    private static final String SLASH = "/";
    private static final String AUTHORIZATION = "Authorization";
    private static final String BEARER = "Bearer";
    private static final String PATH_FRACTIONATION_SPECIAL_SETTLEMENT = "fractionation-special-settlement";

    @Override
    public List<SpecialSettlementOutDto> createFractions(Long specialTradeId,
                                                         List<FractionSpecialSettlementInDto> fractionSpecialSettlementInDtoList) {
        String url = propertiesConfig.getUrlNuboOperationSpecialFractionation()
                .concat(SLASH).concat(VersionApiEnum.V1.getValue())
                .concat(SLASH).concat(PATH_FRACTIONATION_SPECIAL_SETTLEMENT)
                .concat(SLASH).concat("create-fractions")
                .concat(SLASH).concat("special-trade")
                .concat(SLASH).concat(specialTradeId.toString());

        UriComponents uriComponents = UriComponentsBuilder.fromUriString(url).build();

        HttpHeaders headers = new HttpHeaders();
        headers.set(AUTHORIZATION, BEARER.concat(" ").concat(PropertiesContext.getAuthToken()));
        headers.set(PropertiesEnum.CLIENT_IP.getValue(), PropertiesContext.getClientIp());
        headers.set(PropertiesEnum.CLIENT_USER.getValue(), PropertiesContext.getClientUser());
        headers.set(PropertiesEnum.CLIENT_DATETIME.getValue(),
                ApplicationUtils.convertLocalDateTimeToString(PropertiesContext.getClientDatetime()));
        headers.setContentType(MediaType.APPLICATION_JSON);

        try {
            ResponseEntity<SpecialSettlementOutDto[]> response = restClientUtils.requestWithResponseObject(uriComponents.toUri(),
                    HttpMethod.POST, headers, fractionSpecialSettlementInDtoList, SpecialSettlementOutDto[].class);
            if (!ObjectUtils.isEmpty(response.getBody())) {
                return List.of(response.getBody());
            }
        } catch (Exception ex) {
            throw new ServiceException(ErrorCode.CLIENT_OPERATION_SPECIAL_FRACTIONATION_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return List.of(SpecialSettlementOutDto.builder().build());
    }

    @Override
    public List<SpecialSettlementOutDto> updateAssignment(Long specialTradeId,
                                                          List<AssignmentSpecialSettlementInDto> assignmentSpecialSettlementInDtoList) {
        String url = propertiesConfig.getUrlNuboOperationSpecialFractionation()
                .concat(SLASH).concat(VersionApiEnum.V1.getValue())
                .concat(SLASH).concat(PATH_FRACTIONATION_SPECIAL_SETTLEMENT)
                .concat(SLASH).concat("update-assignments")
                .concat(SLASH).concat("special-trade")
                .concat(SLASH).concat(specialTradeId.toString());

        UriComponents uriComponents = UriComponentsBuilder.fromUriString(url).build();

        HttpHeaders headers = new HttpHeaders();
        headers.set(AUTHORIZATION, BEARER.concat(" ").concat(PropertiesContext.getAuthToken()));
        headers.set(PropertiesEnum.CLIENT_IP.getValue(), PropertiesContext.getClientIp());
        headers.set(PropertiesEnum.CLIENT_USER.getValue(), PropertiesContext.getClientUser());
        headers.set(PropertiesEnum.CLIENT_DATETIME.getValue(),
                ApplicationUtils.convertLocalDateTimeToString(PropertiesContext.getClientDatetime()));
        headers.setContentType(MediaType.APPLICATION_JSON);

        try {
            ResponseEntity<SpecialSettlementOutDto[]> response = restClientUtils.requestWithResponseObject(uriComponents.toUri(),
                    HttpMethod.PUT, headers, assignmentSpecialSettlementInDtoList, SpecialSettlementOutDto[].class);
            if (!ObjectUtils.isEmpty(response.getBody())) {
                return List.of(response.getBody());
            }
        } catch (Exception ex) {
            throw new ServiceException(ErrorCode.CLIENT_OPERATION_SPECIAL_FRACTIONATION_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return List.of(SpecialSettlementOutDto.builder().build());
    }

}

```

## src/main/java/com/nubo/operations/special/espec/api/client/operation/special/rules/dto/request/FractionRuleInDto.java

```java
package com.nubo.operations.special.espec.api.client.operation.special.rules.dto.request;

import com.nubo.operations.special.espec.api.application.annotations.ValidBigDecimal;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FractionRuleInDto {

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal fractionQuantity;

}

```

## src/main/java/com/nubo/operations/special/espec/api/client/operation/special/rules/dto/response/OperationSpecialBusinessRuleOutDto.java

```java
package com.nubo.operations.special.espec.api.client.operation.special.rules.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nubo.operations.special.espec.api.models.dto.response.CountryOutDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class OperationSpecialBusinessRuleOutDto {

    private Long id;

    private CountryOutDto country;

    private String code;

    private String description;

    private String value;

}
```

## src/main/java/com/nubo/operations/special/espec/api/client/operation/special/rules/service/OperationSpecialBusinessRuleClient.java

```java
package com.nubo.operations.special.espec.api.client.operation.special.rules.service;

import com.nubo.operations.special.espec.api.client.operation.special.rules.dto.response.OperationSpecialBusinessRuleOutDto;

public interface OperationSpecialBusinessRuleClient {

    OperationSpecialBusinessRuleOutDto findBusinessRuleByCountryIdAndCode(Long countryId, String code);

    OperationSpecialBusinessRuleOutDto findBusinessRuleByCode(String code);

}

```

## src/main/java/com/nubo/operations/special/espec/api/client/operation/special/rules/service/impl/OperationSpecialBusinessRuleClientImpl.java

```java
package com.nubo.operations.special.espec.api.client.operation.special.rules.service.impl;

import com.nubo.operations.special.espec.api.application.properties.PropertiesConfig;
import com.nubo.operations.special.espec.api.application.properties.PropertiesContext;
import com.nubo.operations.special.espec.api.application.util.ApplicationUtils;
import com.nubo.operations.special.espec.api.application.util.RestClientUtils;
import com.nubo.operations.special.espec.api.client.operation.special.rules.dto.response.OperationSpecialBusinessRuleOutDto;
import com.nubo.operations.special.espec.api.client.operation.special.rules.service.OperationSpecialBusinessRuleClient;
import com.nubo.operations.special.espec.api.exception.ServiceException;
import com.nubo.operations.special.espec.api.exception.error.ErrorCode;
import com.nubo.operations.special.espec.api.models.enums.PropertiesEnum;
import com.nubo.operations.special.espec.api.models.enums.VersionApiEnum;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

@Service
@RequiredArgsConstructor
@Slf4j
public class OperationSpecialBusinessRuleClientImpl implements OperationSpecialBusinessRuleClient {

    private final PropertiesConfig propertiesConfig;
    private final RestClientUtils restClientUtils;

    private static final String SLASH = "/";
    private static final String AUTHORIZATION = "Authorization";
    private static final String BEARER = "Bearer";
    private static final String PATH_OPERATION_SPECIAL_BUSINESS_RULE = "operation-special-business-rules";

    @Override
    public OperationSpecialBusinessRuleOutDto findBusinessRuleByCountryIdAndCode(Long countryId, String code) {
        String url = propertiesConfig.getUrlNuboOperationSpecialRules()
                .concat(SLASH).concat(VersionApiEnum.V1.getValue())
                .concat(SLASH).concat(PATH_OPERATION_SPECIAL_BUSINESS_RULE)
                .concat(SLASH).concat("country")
                .concat(SLASH).concat(countryId.toString())
                .concat(SLASH).concat("code")
                .concat(SLASH).concat(code);

        UriComponents uriComponents = UriComponentsBuilder.fromUriString(url).build();

        HttpHeaders headers = new HttpHeaders();
        headers.set(AUTHORIZATION, BEARER.concat(" ").concat(PropertiesContext.getAuthToken()));
        headers.set(PropertiesEnum.CLIENT_IP.getValue(), PropertiesContext.getClientIp());
        headers.set(PropertiesEnum.CLIENT_USER.getValue(), PropertiesContext.getClientUser());
        headers.set(PropertiesEnum.CLIENT_DATETIME.getValue(),
                ApplicationUtils.convertLocalDateTimeToString(PropertiesContext.getClientDatetime()));
        headers.setContentType(MediaType.APPLICATION_JSON);

        try {
            ResponseEntity<OperationSpecialBusinessRuleOutDto> response = restClientUtils.requestWithoutBodyWithResponseObject(uriComponents.toUri(),
                    HttpMethod.GET, headers, OperationSpecialBusinessRuleOutDto.class);

            if (!ObjectUtils.isEmpty(response.getBody())) {
                return response.getBody();
            }
        } catch (Exception ex) {
            throw new ServiceException(ErrorCode.CLIENT_OPERATION_SPECIAL_RULES_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return OperationSpecialBusinessRuleOutDto.builder().build();
    }

    @Override
    public OperationSpecialBusinessRuleOutDto findBusinessRuleByCode(String code) {
        String url = propertiesConfig.getUrlNuboOperationSpecialRules()
                .concat(SLASH).concat(VersionApiEnum.V1.getValue())
                .concat(SLASH).concat(PATH_OPERATION_SPECIAL_BUSINESS_RULE)
                .concat(SLASH).concat("code")
                .concat(SLASH).concat(code);

        UriComponents uriComponents = UriComponentsBuilder.fromUriString(url).build();

        HttpHeaders headers = new HttpHeaders();
        headers.set(AUTHORIZATION, BEARER.concat(" ").concat(PropertiesContext.getAuthToken()));
        headers.set(PropertiesEnum.CLIENT_IP.getValue(), PropertiesContext.getClientIp());
        headers.set(PropertiesEnum.CLIENT_USER.getValue(), PropertiesContext.getClientUser());
        headers.set(PropertiesEnum.CLIENT_DATETIME.getValue(),
                ApplicationUtils.convertLocalDateTimeToString(PropertiesContext.getClientDatetime()));
        headers.setContentType(MediaType.APPLICATION_JSON);

        try {
            ResponseEntity<OperationSpecialBusinessRuleOutDto> response = restClientUtils.requestWithoutBodyWithResponseObject(uriComponents.toUri(),
                    HttpMethod.GET, headers, OperationSpecialBusinessRuleOutDto.class);

            if (!ObjectUtils.isEmpty(response.getBody())) {
                return response.getBody();
            }
        } catch (Exception ex) {
            throw new ServiceException(ErrorCode.CLIENT_OPERATION_SPECIAL_RULES_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return OperationSpecialBusinessRuleOutDto.builder().build();
    }

}

```

## src/main/java/com/nubo/operations/special/espec/api/exception/ServiceException.java

```java
package com.nubo.operations.special.espec.api.exception;

import com.nubo.operations.special.espec.api.exception.error.ErrorCode;
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

## src/main/java/com/nubo/operations/special/espec/api/exception/error/ErrorCode.java

```java
package com.nubo.operations.special.espec.api.exception.error;

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
    COUNTRY_NOT_FOUND("Country not found"),
    CURRENCY_NOT_FOUND("Currency not found"),
    PARTICIPANT_NOT_FOUND("Participant not found"),
    SECURITY_TITLE_NOT_FOUND("Security Title not found"),
    INVESTOR_NOT_FOUND("Investor not found"),
    INVESTOR_ACCOUNT_NOT_FOUND("Investor_Account not found"),
    PARTICIPANT_ACCOUNT_NOT_FOUND("Participant Account not Found"),
    TYPE_NOT_FOUND("Type not found"),
    TAXES_NOT_FOUND("Taxes not found"),
    DEPOSITORY_NOT_FOUND("Depositary not found"),
    SIDE_NOT_FOUND("Side not found"),
    ACCOUNT_NOT_FOUND("Account not found"),
    STATUS_NOT_FOUND("Status not found"),
    AFP_FUND_NOT_FOUND("Afp Fund not found"),
    EXCHANGE_RATE_NOT_FOUND("Exchange Rate not found"),
    BANK_ACCOUNT_NOT_FOUND("Bank Account  not found"),
    SPECIAL_TRADE_NOT_FOUND("Special Trade not found"),
    SPECIAL_SETTLEMENT_NOT_FOUND("Special Settlement not found"),
    SPECIAL_SETTLEMENT_EXISTS("Special Settlement already exists"),
    DIRECT_DEPOSITOR_NOT_FOUND("Direct Depositor not found"),
    CLIENT_OPERATOR_NOT_FOUND("Client Operator not found"),
    MARKET_FUND_NOT_FOUND("Market not found"),
    TRADE_NOT_FOUND("Trade not found"),
    CLIENT_OPERATION_SPECIAL_RULES_ERROR("An unexpected error occurred in Operation Special Rules"),
    CLIENT_OPERATION_SPECIAL_FRACTIONATION_ERROR("An unexpected error occurred in Operation Special Fractionation"),
    CLIENT_OPERATION_SPECIAL_CALCULATION_ERROR("An unexpected error occurred in Operation Special Calculation"),
    INVESTOR_ACCOUNT_NOT_EXIST_IN_DEPOSITORY("Title account does not exist in the deposit"),
    BANK_ACCOUNT_REQUIRED("The bank account is required"),
    FRACTION_TOTAL_QUANTITY_NOT_CORRESPOND_QUANTITY_TRADE(
            "The total number of shares in the fractions does not correspond to the total number of shares of the operation"),
    FRACTION_TOTAL_QUANTITY_EXCEED_QUANTITY_TRADE(
            "The sum of the quantities of the fractions exceeds the quantity operation"),
    MAXIMUM_LIMIT_FRACTIONS_EXCEED("The maximum limit of fractions"),
    PARTICIPANT_ACCOUNT_OR_INVESTOR_ACCOUNT_REQUIRED("The participant account or investor account is required"),
    COMMISSION_NOT_CORRESPOND_TO_OWN_POSITION_POINT_ORIGIN(
            "The commission does not correspond to the origin own position"),
    OWN_POSITION_NOT_CORRESPOND_TO_ORIGIN("The allocation data does not correspond to the Own Position origin"),
    THIRD_PARTIES_COLLECTIVE_PORTFOLIOS_NOT_CORRESPOND_TO_ORIGIN(
            "The allocation data does not correspond to the origin Third Parties/Collective Portfolios"),
    PERMISSION_NOT_FOUND("Permission not found"),
    USER_NOT_FOUND("User not found"),
    SPECIAL_RULE_NOT_CONFIGURED("No business rule configured for country"),
    FRACTION_PERCENTAGE_TOTAL_NOT_CORRESPOND_ONE_HUNDRED_PERCENT(
            "The total percentage of shares in the fractions does not correspond to 100% of the total shares in the operation"),
    INVESTOR_ACCOUNT_DUPLICATED("The investor account cannot be duplicated"),
    PARTICIPANT_ACCOUNT_DUPLICATED("The participant account cannot be duplicated"),
    CUSTODIAN_STATUS_PROHIBITED(
            "The transaction cannot be edited: there are folios with a custody status of 'Transferred', 'Pre-Match', or 'Admitted'"),
    FRACTIONATION_PENDING_APPROVED_ERROR(
            "The correction cannot be made because there is a pending request to be approved."),
    ORIGIN_NOT_FOUND("Origin not found"),
    SETTLEMENT_NOT_FOUND("Settlement not found"),
    CHILE_REASSIGNMENT_NOT_ALLOWED("Reassignment not allowed for Chilean operations"),
    TRADING_SYSTEM_NOT_FOUND("Trading system not found"),
    REASSIGNMENT_REQUIRES_APPROVAL("Reassignment requires internal approval"),
    INVALID_ORIGIN_TYPE_FOR_PARTICIPANT_ACCOUNT("Participant account with 'Posicion Propia' origin type is not allowed when trade origin is 'Cartera Colectiva' or 'Terceros'"),
    PARTICIPANT_ACCOUNT_NOT_MATCH_TRADE_PARTICIPANT("Participant account does not match the trade participant for 'Posicion Propia' origin type");

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

## src/main/java/com/nubo/operations/special/espec/api/exception/error/ErrorResponse.java

```java
package com.nubo.operations.special.espec.api.exception.error;

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

## src/main/java/com/nubo/operations/special/espec/api/exception/error/ErrorValidation.java

```java
package com.nubo.operations.special.espec.api.exception.error;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ErrorValidation {

    private String id;
    private String description;

}

```

## src/main/java/com/nubo/operations/special/espec/api/exception/handler/GlobalExceptionHandler.java

```java
package com.nubo.operations.special.espec.api.exception.handler;

import com.nubo.operations.special.espec.api.application.properties.PropertiesConfig;
import com.nubo.operations.special.espec.api.application.properties.PropertiesContext;
import com.nubo.operations.special.espec.api.exception.ServiceException;
import com.nubo.operations.special.espec.api.exception.error.ErrorCode;
import com.nubo.operations.special.espec.api.exception.error.ErrorResponse;
import com.nubo.operations.special.espec.api.exception.error.ErrorValidation;
import com.nubo.operations.special.espec.api.models.entity.UserNuboEntity;
import com.nubo.operations.special.espec.api.repository.UserNuboRepository;
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
import org.springframework.web.method.annotation.HandlerMethodValidationException;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;
import org.springframework.web.servlet.resource.NoResourceFoundException;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

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
                .errorMessageDetail(ObjectUtils.isEmpty(exception.getCause()) ?
                        exception.getMessage() : exception.getCause().getMessage())
                .timestamp(ObjectUtils.isEmpty(String.valueOf(PropertiesContext.getClientDatetime())) ? null :
                        String.valueOf(PropertiesContext.getClientDatetime()))
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

## src/main/java/com/nubo/operations/special/espec/api/helpers/MapperPageUtil.java

```java
package com.nubo.operations.special.espec.api.helpers;

import com.nubo.operations.special.espec.api.models.dto.response.PageResponseOutDto;
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

## src/main/java/com/nubo/operations/special/espec/api/helpers/MapperUtil.java

```java
package com.nubo.operations.special.espec.api.helpers;

import com.nubo.operations.special.espec.api.models.dto.response.*;
import com.nubo.operations.special.espec.api.models.entity.*;
import org.springframework.util.ObjectUtils;

import com.nubo.operations.special.espec.api.client.operation.special.calculation.model.dto.response.SettleAccountsOutDto;

import java.util.List;

public class MapperUtil {

    private MapperUtil() {
    }

    public static SpecialSettlementOutDto specialSettlementEntityToSpecialSettlementOutDto(
            SpecialSettlementEntity specialSettlementEntity) {
        if (ObjectUtils.isEmpty(specialSettlementEntity)) return null;
        return SpecialSettlementOutDto.builder()
                .specialTradeId(specialSettlementEntity.getSpecialTrade().getId())
                .fraction(specialSettlementEntity.getFraction())
                .sideId(specialSettlementEntity.getSide().getId())
                .fiduciarySpecialist(specialSettlementEntity.getFiduciarySpecialist())
                .commissionPercentage(specialSettlementEntity.getCommissionPercentage())
                .fractionPercentage(specialSettlementEntity.getFractionPercentage())
                .build();
    }

    public static SpecialSettlementOutDto specialSettlementEntityToAllSpecialSettlementOutDto(
            SpecialSettlementEntity specialSettlementEntity) {
        SpecialSettlementOutDto specialSettlementOutDto = MapperUtil.specialSettlementEntityToSpecialSettlementOutDto(specialSettlementEntity);
        if (ObjectUtils.isEmpty(specialSettlementOutDto)) {
            return null;
        }
        specialSettlementOutDto.setInvestor(investorEntityToInvestorOutDto(specialSettlementEntity.getInvestor()));
        specialSettlementOutDto.setInvestorAccount(investorAccountEntityToInvestorAccountOutDto(specialSettlementEntity.getInvestorAccount()));
        specialSettlementOutDto.setParticipantAccount(participantAccountEntityToParticipantAccountOutDto(specialSettlementEntity.getParticipantAccount()));
        specialSettlementOutDto.setBankAccount(bankAccountEntityToBankAccountOutDto(specialSettlementEntity.getBankAccount()));
        specialSettlementOutDto.setSide(sideEntityToSideOutDto(specialSettlementEntity.getSide()));
        specialSettlementOutDto.setSpecialTrade(specialTradeEntityToSpecialTradeOutDto(specialSettlementEntity.getSpecialTrade()));
        return specialSettlementOutDto;
    }

    public static SpecialTradeOutDto specialTradeEntityToSpecialTradeOutDto(SpecialTradeEntity specialTradeEntity) {
        if (ObjectUtils.isEmpty(specialTradeEntity)) return null;
        return SpecialTradeOutDto.builder()
                .id(specialTradeEntity.getId())
                .recordDate(specialTradeEntity.getRecordDate())
                .specialOperationId(specialTradeEntity.getSpecialOperationId())
                .settlementDate(specialTradeEntity.getSettlementDate())
                .daysToSettlement(specialTradeEntity.getDaysToSettlement())
                .specialOperationName(specialTradeEntity.getSpecialOperationName())
                .countryId(ObjectUtils.isEmpty(specialTradeEntity.getCountry()) ?
                        null : specialTradeEntity.getCountry().getId())
                .typeId(ObjectUtils.isEmpty(specialTradeEntity.getType()) ?
                        null : specialTradeEntity.getType().getId())
                .securityId(ObjectUtils.isEmpty(specialTradeEntity.getSecurityTitle()) ?
                        null : specialTradeEntity.getSecurityTitle().getId())
                .depositoryId(ObjectUtils.isEmpty(specialTradeEntity.getDepository()) ?
                        null : specialTradeEntity.getDepository().getId())
                .sideId(ObjectUtils.isEmpty(specialTradeEntity.getSide()) ?
                        null : specialTradeEntity.getSide().getId())
                .statusId(ObjectUtils.isEmpty(specialTradeEntity.getStatus()) ?
                        null : specialTradeEntity.getStatus().getId())
                .directDepositorId(ObjectUtils.isEmpty(specialTradeEntity.getDirectDepositor()) ?
                        null : specialTradeEntity.getDirectDepositor().getId())
                .clientSettlementAgent(ObjectUtils.isEmpty(specialTradeEntity.getClientSettlementAgent()) ?
                        null : depositoryEntityToDepositoryOutDto(specialTradeEntity.getClientSettlementAgent()))
                .afpFundId(ObjectUtils.isEmpty(specialTradeEntity.getAfpFund()) ?
                        null : specialTradeEntity.getAfpFund().getId())
                .currencyId(ObjectUtils.isEmpty(specialTradeEntity.getCurrency()) ?
                        null : specialTradeEntity.getCurrency().getId())
                .exchangeRateId(ObjectUtils.isEmpty(specialTradeEntity.getExchangeRate()) ?
                        null : specialTradeEntity.getExchangeRate().getId())
                .price(specialTradeEntity.getPrice())
                .fractionalMark(specialTradeEntity.getFractionalMark())
                .marketEntity(ObjectUtils.isEmpty(specialTradeEntity.getMarketEntity()) ?
                        null : marketEntityToMarketOutDto(specialTradeEntity.getMarketEntity()))
                .localCurrencyPrice(specialTradeEntity.getLocalCurrencyPrice())
                .build();
    }

    public static SimplySpecialTradeOutDto specialTradeEntityToSimplySpecialTradeOutDto(SpecialTradeEntity specialTradeEntity) {
        if (ObjectUtils.isEmpty(specialTradeEntity)) return null;
        return SimplySpecialTradeOutDto.builder()
                .id(specialTradeEntity.getId())
                .specialOperationName(specialTradeEntity.getSpecialOperationName())
                .specialOperationId(specialTradeEntity.getSpecialOperationId())
                .build();
    }

    public static SpecialTradeOutDto specialTradeEntityToAllSpecialTradeOutDto(SpecialTradeEntity entity) {
        SpecialTradeOutDto specialTradeOutDto = specialTradeEntityToSpecialTradeOutDto(entity);
        if (ObjectUtils.isEmpty(specialTradeOutDto)) {
            return null;
        }
        specialTradeOutDto.setCurrency(currencyEntityToDto(entity.getCurrency()));
        specialTradeOutDto.setCountry(countryEntityToCountryOutDto(entity.getCountry()));
        specialTradeOutDto.setType(typeEntityToTypeOutDto(entity.getType()));
        specialTradeOutDto.setSecurityTitle(securityEntityToSecurityTitleOutDto(entity.getSecurityTitle()));
        specialTradeOutDto.setDepository(depositoryEntityToDepositoryOutDto(entity.getDepository()));
        specialTradeOutDto.setSide(sideEntityToSideOutDto(entity.getSide()));
        specialTradeOutDto.setStatus(statusEntityToStatusOutDto(entity.getStatus()));
        specialTradeOutDto.setDirectDepositor(participantEntityToParticipantOutDto(entity.getDirectDepositor()));
        specialTradeOutDto.setClientSettlementAgent(depositoryEntityToDepositoryOutDto(entity.getClientSettlementAgent()));
        specialTradeOutDto.setAfpFund(afpFundEntityToAfpFundOutDto(entity.getAfpFund()));
        return specialTradeOutDto;
    }

    public static InvestorOutDto investorEntityToInvestorOutDto(InvestorEntity investorEntity) {
        if (ObjectUtils.isEmpty(investorEntity)) return null;
        return InvestorOutDto.builder()
                .id(investorEntity.getId())
                .code(investorEntity.getCode())
                .firstName(investorEntity.getFirstName())
                .lastName(investorEntity.getLastName())
                .companyName(investorEntity.getCompanyName())
                .type(typeEntityToTypeOutDto(investorEntity.getType()))
                .status(statusEntityToStatusOutDto(investorEntity.getStatus()))
                .country(countryEntityToCountryOutDto(investorEntity.getCountry()))
                .department(ObjectUtils.isEmpty(investorEntity.getDepartment()) ?
                        null : departmentEntityToDepartmentOutDto(investorEntity.getDepartment()))
                .city(ObjectUtils.isEmpty(investorEntity.getCity()) ?
                        null : cityEntityToCityOutDto(investorEntity.getCity()))
                .documentNumber(investorEntity.getDocumentNumber())
                .identificationType(identificationTypeEntityToIdentificationTypeOutDto(investorEntity.getIdentificationType()))
                .nationality(investorEntity.getNationality())
                .address(investorEntity.getAddress())
                .phoneNumber(investorEntity.getPhoneNumber())
                .email(investorEntity.getEmail())
                .clearinghouseCode(investorEntity.getClearinghouseCode())
                .gics(gicsEntityToGicsOutDto(investorEntity.getGics()))
                .moneyLaunderingFlag(investorEntity.getMoneyLaunderingFlag())
                .taxStatus(taxStatusEntityToTaxStatusOutDto(investorEntity.getTaxStatus()))
                .taxExemp(investorEntity.getTaxExemp())
                .build();
    }

    public static InvestorAccountOutDto investorAccountEntityToInvestorAccountOutDto(InvestorAccountEntity investorAccountEntity) {
        if (ObjectUtils.isEmpty(investorAccountEntity)) return null;
        return InvestorAccountOutDto.builder()
                .id(investorAccountEntity.getId())
                .accountNumber(investorAccountEntity.getAccountNumber())
                .investor(investorEntityToInvestorOutDto(investorAccountEntity.getInvestor()))
                .status(statusEntityToStatusOutDto(investorAccountEntity.getStatus()))
                .type(typeEntityToTypeOutDto(investorAccountEntity.getType()))
                .originType(typeEntityToTypeOutDto(investorAccountEntity.getOriginType()))
                .depository(depositoryEntityToDepositoryOutDto(investorAccountEntity.getDepository()))
                .participant(participantEntityToParticipantOutDto(investorAccountEntity.getParticipant()))
                .build();
    }

    public static ParticipantAccountOutDto participantAccountEntityToParticipantAccountOutDto(
            ParticipantAccountEntity participantAccountEntity) {
        if (ObjectUtils.isEmpty(participantAccountEntity)) return null;
        return ParticipantAccountOutDto.builder()
                .id(participantAccountEntity.getId())
                .accountNumber(participantAccountEntity.getAccountNumber())
                .status(statusEntityToStatusOutDto(participantAccountEntity.getStatus()))
                .type(typeEntityToTypeOutDto(participantAccountEntity.getType()))
                .originType(typeEntityToTypeOutDto(participantAccountEntity.getOriginType()))
                .participant(participantEntityToParticipantOutDto(participantAccountEntity.getParticipant()))
                .build();
    }

    public static BankAccountOutDto bankAccountEntityToBankAccountOutDto(BankAccountEntity bankAccountEntity) {
        if (ObjectUtils.isEmpty(bankAccountEntity)) return null;
        return BankAccountOutDto.builder()
                .id(bankAccountEntity.getId())
                .accountNumber(bankAccountEntity.getBankAccount())
                .bankName(bankAccountEntity.getBank().getName())
                .bank(bankEntityToTypeOutDto(bankAccountEntity.getBank()))
                .build();
    }

    public static CountryOutDto countryEntityToCountryOutDto(CountryEntity countryEntity) {
        if (ObjectUtils.isEmpty(countryEntity)) return null;
        return CountryOutDto.builder()
                .id(countryEntity.getId())
                .name(countryEntity.getName())
                .build();
    }

    public static CurrencyOutDto currencyEntityToDto(CurrencyEntity currencyEntity) {
        if (ObjectUtils.isEmpty(currencyEntity)) return null;
        return CurrencyOutDto.builder()
                .id(currencyEntity.getId())
                .name(currencyEntity.getName())
                .code(currencyEntity.getCode())
                .build();
    }

    public static TypeOutDto typeEntityToTypeOutDto(TypeEntity typeEntity) {
        if (ObjectUtils.isEmpty(typeEntity)) return null;
        return TypeOutDto.builder()
                .id(typeEntity.getId())
                .description(typeEntity.getDescription())
                .build();
    }

    public static BankOutDto bankEntityToTypeOutDto(BankEntity bank) {
        if (ObjectUtils.isEmpty(bank)) return null;
        return BankOutDto.builder()
                .id(bank.getId())
                .name(bank.getName())
                .code(bank.getCode())
                .country(countryEntityToCountryOutDto(bank.getCountry()))
                .build();
    }

    public static SecurityTitleOutDto securityEntityToSecurityTitleOutDto(SecurityTitleEntity securityTitleEntity) {
        if (ObjectUtils.isEmpty(securityTitleEntity)) return null;
        return SecurityTitleOutDto.builder()
                .id(securityTitleEntity.getId())
                .mnemonic(securityTitleEntity.getMnemonic())
                .isin(securityTitleEntity.getIsin())
                .currencyId(securityTitleEntity.getCurrencyId())
                .build();
    }

    public static DepositoryOutDto depositoryEntityToDepositoryOutDto(DepositoryEntity depositoryEntity) {
        if (ObjectUtils.isEmpty(depositoryEntity)) return null;
        return DepositoryOutDto.builder()
                .id(depositoryEntity.getId())
                .description(depositoryEntity.getDescription())
                .build();
    }

    public static SideOutDto sideEntityToSideOutDto(SideEntity sideEntity) {
        if (ObjectUtils.isEmpty(sideEntity)) return null;
        return SideOutDto.builder()
                .id(sideEntity.getId())
                .description(sideEntity.getDescription())
                .build();
    }

    public static StatusOutDto statusEntityToStatusOutDto(StatusEntity statusEntity) {
        if (ObjectUtils.isEmpty(statusEntity)) return null;
        return StatusOutDto.builder()
                .id(statusEntity.getId())
                .description(statusEntity.getDescription())
                .category(statusEntity.getCategory())
                .build();
    }

    public static ParticipantOutDto participantEntityToParticipantOutDto(ParticipantEntity participantEntity) {
        if (ObjectUtils.isEmpty(participantEntity)) return null;
        return ParticipantOutDto.builder()
                .id(participantEntity.getId())
                .name(participantEntity.getName())
                .mnemonic(participantEntity.getMnemonic())
                .shortName(participantEntity.getShortName())
                .code(participantEntity.getCode())
                .documentNumber(participantEntity.getDocumentNumber())
                .identificationType(identificationTypeEntityToIdentificationTypeOutDto(participantEntity.getIdentificationType()))
                .build();
    }

    public static AfpFundOutDto afpFundEntityToAfpFundOutDto(AfpFundEntity afpFundEntity) {
        if (ObjectUtils.isEmpty(afpFundEntity)) return null;
        return AfpFundOutDto.builder()
                .id(afpFundEntity.getId())
                .description(afpFundEntity.getDescription())
                .build();
    }

    public static CurrencyOutDto currencyEntityToCurrencyOutDto(CurrencyEntity currencyEntity) {
        return CurrencyOutDto.builder()
                .id(currencyEntity.getId())
                .code(currencyEntity.getCode())
                .name(currencyEntity.getName())
                .build();
    }

    public static MarketOutDto marketEntityToMarketOutDto(MarketEntity marketEntity) {
        return MarketOutDto.builder()
                .id(marketEntity.getId())
                .description(marketEntity.getDescription())
                .build();
    }

    public static ExchangeRateOutDto exchangeRateEntityToExchangeRateOutDto(ExchangeRateEntity exchangeRateEntity) {
        return ExchangeRateOutDto.builder()
                .id(exchangeRateEntity.getId())
                .baseCurrency(currencyEntityToCurrencyOutDto(exchangeRateEntity.getBaseCurrency()))
                .conversionCurrency(currencyEntityToCurrencyOutDto(exchangeRateEntity.getConversionCurrency()))
                .conversionValue(exchangeRateEntity.getConversionValue())
                .build();
    }

    public static TaxStatusOutDto taxStatusEntityToTaxStatusOutDto(TaxStatusEntity entity) {
        if (ObjectUtils.isEmpty(entity)) return null;
        return TaxStatusOutDto.builder()
                .id(entity.getId())
                .description(entity.getDescription())
                .build();
    }

    public static GicsOutDto gicsEntityToGicsOutDto(GicsEntity entity) {
        if (ObjectUtils.isEmpty(entity)) return null;
        return GicsOutDto.builder()
                .id(entity.getId())
                .description(entity.getDescription())
                .build();
    }

    public static IdentificationTypeOutDto identificationTypeEntityToIdentificationTypeOutDto(IdentificationTypeEntity entity) {
        if (ObjectUtils.isEmpty(entity)) return null;
        return IdentificationTypeOutDto.builder()
                .id(entity.getId())
                .description(entity.getDescription())
                .code(entity.getCode())
                .build();
    }

    public static CalculationOutDto settleAccountsOutDtoToCalculationOutDto(SettleAccountsOutDto settleAccountsOutDto) {
        return CalculationOutDto.builder()
                .amount(settleAccountsOutDto.getAmount())
                .commissionAmount(settleAccountsOutDto.getCommissionAmount())
                .valTaxAmount(settleAccountsOutDto.getValTaxAmount())
                .netAmount(settleAccountsOutDto.getNetAmount())
                .transferValue(settleAccountsOutDto.getTransferValue())
                .build();
    }

    public static ParticipantBankAccountOutDto participantBankAccountEntityToParticipantBankAccountOutDto(ParticipantBankAccountEntity participantBankAccountEntity) {
        if (ObjectUtils.isEmpty(participantBankAccountEntity)) return null;
        return ParticipantBankAccountOutDto.builder()
                .id(participantBankAccountEntity.getId())
                .bankAccount(participantBankAccountEntity.getBankAccount())
                .principal(participantBankAccountEntity.getPrincipal())
                .bankBranch(participantBankAccountEntity.getBankBranch())
                .entityCode(participantBankAccountEntity.getEntityCode())
                .swiftCode(participantBankAccountEntity.getSwiftCode())
                .branchCode(participantBankAccountEntity.getBranchCode())
                .portfolio(participantBankAccountEntity.getPortfolio())
                .nitClearingEntity(participantBankAccountEntity.getNitClearingEntity())
                .depositoryId(participantBankAccountEntity.getDepositoryId())
                .lastModifyUser(participantBankAccountEntity.getLastModifyUser())
                .lastModifyApplic(participantBankAccountEntity.getLastModifyApplic())
                .lastModifyDate(participantBankAccountEntity.getLastModifyDate())
                .lastModifyIp(participantBankAccountEntity.getLastModifyIp())
                .bank(participantBankAccountEntity.getBank() != null ? bankEntityToTypeOutDto(participantBankAccountEntity.getBank()) : null)
                .participant(participantBankAccountEntity.getParticipant() != null ? participantEntityToParticipantOutDto(participantBankAccountEntity.getParticipant()) : null)
                .status(participantBankAccountEntity.getStatus() != null ? statusEntityToStatusOutDto(participantBankAccountEntity.getStatus()) : null)
                .type(participantBankAccountEntity.getType() != null ? typeEntityToTypeOutDto(participantBankAccountEntity.getType()) : null)
                .country(participantBankAccountEntity.getCountry() != null ? countryEntityToCountryOutDto(participantBankAccountEntity.getCountry()) : null)
                .currency(participantBankAccountEntity.getCurrency() != null ? currencyEntityToCurrencyOutDto(participantBankAccountEntity.getCurrency()) : null)
                .build();
    }

    public static DepartmentOutDto departmentEntityToDepartmentOutDto(DepartmentEntity departmentEntity) {
        return DepartmentOutDto.builder()
                .id(departmentEntity.getId())
                .description(departmentEntity.getDescription())
                .build();
    }

    public static CityOutDto cityEntityToCityOutDto(CityEntity cityEntity) {
        return CityOutDto.builder()
                .id(cityEntity.getId())
                .description(cityEntity.getDescription())
                .build();
    }

    public static ReassignmentOutDto reassignmentEntityToReassignmentOutDto(ReassignmentEntity reassignmentEntity) {
        return ReassignmentOutDto.builder()
                .id(reassignmentEntity.getId())
                .trade(tradeEntityToTradeOutDto(reassignmentEntity.getTrade()))
                .fraction(reassignmentEntity.getFraction())
                .side(sideEntityToSideOutDto(reassignmentEntity.getSide()))
                .requestDate(reassignmentEntity.getRequestDate())
                .requestTime(reassignmentEntity.getRequestTime())
                .processType(typeEntityToTypeOutDto(reassignmentEntity.getProcessType()))
                .initialAccount(investorAccountEntityToInvestorAccountOutDto(reassignmentEntity.getInitialAccount()))
                .newAccount(investorAccountEntityToInvestorAccountOutDto(reassignmentEntity.getNewAccount()))
                .status(statusEntityToStatusOutDto(reassignmentEntity.getStatus()))
                .detail(reassignmentEntity.getDetail())
                .correctionNumber(reassignmentEntity.getCorrectionNumber())
                .build();
    }

    public static SettlementOutDto settlementEntityToSettlementOutDto(SettlementEntity settlementEntity) {
        return SettlementOutDto.builder()
                .trade(tradeEntityToTradeOutDto(settlementEntity.getTrade()))
                .fraction(settlementEntity.getFraction())
                .side(sideEntityToSideOutDto(settlementEntity.getSide()))
                .build();
    }

    public static TradeOutDto tradeEntityToTradeOutDto(TradeEntity tradeEntity) {
        return TradeOutDto.builder()
                .id(tradeEntity.getId())
                .matchDate(tradeEntity.getMatchDate())
                .matchId(tradeEntity.getMatchId())
                .custodianStatus(statusEntityToStatusOutDto(tradeEntity.getCustodianStatus()))
                .depository(depositoryEntityToDepositoryOutDto(tradeEntity.getDepository()))
                .country(countryEntityToCountryOutDto(tradeEntity.getCountry()))
                .type(typeEntityToTypeOutDto(tradeEntity.getType()))
                .market(marketEntityToMarketOutDto(tradeEntity.getMarketEntity()))
                .participantBuy(participantEntityToParticipantOutDto(tradeEntity.getParticipantBuy()))
                .participantSell(participantEntityToParticipantOutDto(tradeEntity.getParticipantSell()))
                .specialTrade(specialTradeEntityToSpecialTradeOutDto(tradeEntity.getSpecialTrade()))
                .build();
    }

    public static FractionAccountOutDto mapSettlementToFractionAccountOutDto(
            FractionAccountOutDto fractionAccountOutDto,
            List<SettlementEntity> settlementEntity) {
        if (ObjectUtils.isEmpty(settlementEntity)) {
            return fractionAccountOutDto;
        }
        if(!settlementEntity.isEmpty()){
            fractionAccountOutDto.setCustodianId(settlementEntity.get(0).getCustodianId());
            fractionAccountOutDto.setFicAdministrator(ficAdministratorEntityToFicAdministratorOutDto(settlementEntity.get(0).getFicAdministrator()));
            fractionAccountOutDto.setCustodianStatusId(statusEntityToStatusOutDto(settlementEntity.get(0).getCustodianStatus()));
            fractionAccountOutDto.setSourceQuoteType(typeEntityToTypeOutDto(settlementEntity.get(0).getSourceQuoteType()));
        }
        
        return fractionAccountOutDto;
    }

    public static FicAdministratorOutDto ficAdministratorEntityToFicAdministratorOutDto(FicAdministratorEntity ficAdministratorEntity) {
        if (ObjectUtils.isEmpty(ficAdministratorEntity)) return null;
        return FicAdministratorOutDto.builder()
                .id(ficAdministratorEntity.getId())
                .ficAdministratorCode(ficAdministratorEntity.getFicAdministratorCode())
                .description(ficAdministratorEntity.getDescription())
                .build();
    }

}

```

## src/main/java/com/nubo/operations/special/espec/api/helpers/dynamicQuery/dataBase/MapperReassignmentDynamicSearch.java

```java
package com.nubo.operations.special.espec.api.helpers.dynamicQuery.dataBase;

import com.nubo.operations.special.espec.api.models.entity.ReassignmentEntity;
import com.nubo.operations.special.espec.api.models.enums.SearchOperationEnum;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.Path;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.util.ObjectUtils;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.function.Function;

@Slf4j
public class MapperReassignmentDynamicSearch {

    public static Specification<ReassignmentEntity> buildCombinedSpecification(Long specialTradeId, String fieldName, String fieldValue, String operation) {

        return (root, query, criteriaBuilder) -> {

            List<Predicate> predicates = new ArrayList<>();

            if (!ObjectUtils.isEmpty(specialTradeId)) {
                predicates.add(criteriaBuilder.equal(
                        root.get("trade")
                                .get("specialTrade")
                                .get("id"),
                        specialTradeId
                ));
            }

            if (!ObjectUtils.isEmpty(fieldName) && !ObjectUtils.isEmpty(fieldValue) && !ObjectUtils.isEmpty(operation)) {
                SearchOperationEnum searchOperation = SearchOperationEnum.fromValue(operation);
                if (searchOperation != null) {
                    Predicate dynamicPredicate = buildUserNuboFieldPredicate(criteriaBuilder, getReassignmentFieldPath(root, fieldName), fieldValue, searchOperation);
                    if (dynamicPredicate != null) {
                        predicates.add(dynamicPredicate);
                    }
                }
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
            
        };
    }

    private static final Map<String, Function<Root<ReassignmentEntity>, Path<?>>> FIELD_PATH_MAPPING = Map.ofEntries(Map.entry("processTypeName", root -> root.get("processType").get("description")),
        Map.entry("processTypeDescription", root -> root.get("processType").get("description")),
            Map.entry("requestDate", root -> root.get("requestDate")),
            Map.entry("requestTime", root -> root.get("requestTime")),
            Map.entry("tradeId", root -> root.get("trade").get("id")),
            Map.entry("sideDescription", root -> root.get("side").get("description")),
            Map.entry("tradeParticipantBuyCode", root -> root.get("trade").get("participantBuy").get("code")),
            Map.entry("tradeParticipantSellCode", root -> root.get("trade").get("participantSell").get("code")),
            Map.entry("statusDescription", root -> root.get("status").get("description")),
            Map.entry("detail", root -> root.get("detail"))
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
        Map.entry(SearchOperationEnum.CONTAINS, (cb, path, value) ->
            cb.like(cb.lower(path.as(String.class)), "%" + value.toLowerCase() + "%")),
        Map.entry(SearchOperationEnum.NOT_CONTAINS, (cb, path, value) ->
            cb.notLike(cb.lower(path.as(String.class)), "%" + value.toLowerCase() + "%")),
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
        Map.entry(SearchOperationEnum.STARTS_WITH, (cb, path, value) ->
            cb.like(cb.lower(path.as(String.class)), value.toLowerCase() + "%")),
        Map.entry(SearchOperationEnum.ENDS_WITH, (cb, path, value) ->
            cb.like(cb.lower(path.as(String.class)), "%" + value.toLowerCase())),
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
        Map.entry(SearchOperationEnum.IS_ANY_OF, (cb, path, value) -> {
            String[] values = value.split(",");
            CriteriaBuilder.In<Object> inClause = cb.in(path);
            for (String val : values) {
                inClause.value(parseFieldValue(path, val.trim()));
            }
            return inClause;
        })
    );

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

    public static Path<?> getReassignmentFieldPath(Root<ReassignmentEntity> root, String fieldName) {
        try {
            Function<Root<ReassignmentEntity>, Path<?>> pathFunction = FIELD_PATH_MAPPING.get(fieldName);
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

    public static Predicate buildUserNuboFieldPredicate(CriteriaBuilder criteriaBuilder, 
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
}
```

## src/main/java/com/nubo/operations/special/espec/api/helpers/dynamicQuery/dataBase/MapperSpecialSettlementDynamicSearch.java

```java
package com.nubo.operations.special.espec.api.helpers.dynamicQuery.dataBase;

import com.nubo.operations.special.espec.api.models.entity.SpecialSettlementEntity;
import com.nubo.operations.special.espec.api.models.enums.SearchOperationEnum;
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
public class MapperSpecialSettlementDynamicSearch {

    private enum ComparisonType {
        GREATER_THAN, GREATER_THAN_OR_EQUAL, LESS_THAN, LESS_THAN_OR_EQUAL
    }

    private static final Map<String, Function<Root<SpecialSettlementEntity>, Path<?>>> FIELD_PATH_MAPPING = Map.ofEntries(
        Map.entry("identificationTypeDescription", root -> root.get("specialTrade").get("participant").get("investor").get("identificationType").get("description")),
        Map.entry("investorDocumentNumber", root -> root.get("investor").get("documentNumber")),
        Map.entry("investorAccountNumber", root -> root.get("investorAccount").get("accountNumber")),
        Map.entry("bankName", root -> root.get("bankAccount").get("bank").get("name")),
        Map.entry("bankAccountNumber", root -> root.get("bankAccount").get("bankAccount")),
        Map.entry("commissionPercentage", root -> root.get("commissionPercentage")),
        Map.entry("fractionPercentage", root -> root.get("fractionPercentage"))
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
        Map.entry(SearchOperationEnum.STARTS_WITH, (cb, path, value) -> 
            cb.like(cb.lower(path.as(String.class)), value.toLowerCase() + "%")),
        Map.entry(SearchOperationEnum.ENDS_WITH, (cb, path, value) -> 
            cb.like(cb.lower(path.as(String.class)), "%" + value.toLowerCase())),
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

    public static Path<?> getSpecialSettlementFieldPath(Root<SpecialSettlementEntity> root, String fieldName) {
        try {
            Function<Root<SpecialSettlementEntity>, Path<?>> pathFunction = FIELD_PATH_MAPPING.get(fieldName);
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

    public static Predicate buildSpecialSettlementFieldPredicate(CriteriaBuilder criteriaBuilder, 
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

## src/main/java/com/nubo/operations/special/espec/api/helpers/dynamicQuery/dataBase/MapperSpecialTradeDynamicSearch.java

```java
package com.nubo.operations.special.espec.api.helpers.dynamicQuery.dataBase;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Map;
import java.util.function.Function;

import com.nubo.operations.special.espec.api.models.entity.SpecialTradeEntity;
import com.nubo.operations.special.espec.api.models.enums.SearchOperationEnum;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.Path;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class MapperSpecialTradeDynamicSearch {

    private enum ComparisonType {
        GREATER_THAN, GREATER_THAN_OR_EQUAL, LESS_THAN, LESS_THAN_OR_EQUAL
    }

    private static final Map<String, Function<Root<SpecialTradeEntity>, Path<?>>> FIELD_PATH_MAPPING = Map.ofEntries(
        Map.entry("id", root -> root.get("id")),
        Map.entry("recordDate", root -> root.get("recordDate")),
        Map.entry("specialOperationId", root -> root.get("specialOperationId")),
        Map.entry("settlementDate", root -> root.get("settlementDate")),
        Map.entry("daysToSettlement", root -> root.get("daysToSettlement")),
        Map.entry("specialOperationName", root -> root.get("specialOperationName")),
        Map.entry("countryId", root -> root.get("country").get("id")),
        Map.entry("countryCode", root -> root.get("country").get("code")),
        Map.entry("countryName", root -> root.get("country").get("name")),
        Map.entry("typeId", root -> root.get("type").get("id")),
        Map.entry("typeDescription", root -> root.get("type").get("description")),
        Map.entry("typeCategory", root -> root.get("type").get("category")),
        Map.entry("securityId", root -> root.get("securityTitle").get("id")),
        Map.entry("securityMnemonic", root -> root.get("securityTitle").get("mnemonic")),
        Map.entry("securityIsin", root -> root.get("securityTitle").get("isin")),
        Map.entry("depositoryId", root -> root.get("depository").get("id")),
        Map.entry("depositoryDescription", root -> root.get("depository").get("description")),
        Map.entry("sideId", root -> root.get("side").get("id")),
        Map.entry("sideDescription", root -> root.get("side").get("description")),
        Map.entry("statusId", root -> root.get("status").get("id")),
        Map.entry("statusDescription", root -> root.get("status").get("description")),
        Map.entry("participantId", root -> root.get("participant").get("id")),
        Map.entry("participantCode", root -> root.get("participant").get("code")),
        Map.entry("participantName", root -> root.get("participant").get("name")),
        Map.entry("directDepositor", root -> root.get("directDepositor").get("id")),
        Map.entry("clientOperator", root -> root.get("clientOperator").get("id")),
        Map.entry("clientSettlementAgent", root -> root.get("clientSettlementAgent").get("id")),
        Map.entry("totalAmount", root -> root.get("totalAmount")),
        Map.entry("totalAmountLocal", root -> root.get("totalAmountLocal")),
        Map.entry("price", root -> root.get("price")),
        Map.entry("quantity", root -> root.get("quantity")),
        Map.entry("numberFolios", root -> root.get("numberFolios")),
        Map.entry("fractionalMark", root -> root.get("fractionalMark")),
        Map.entry("localCurrencyPrice", root -> root.get("localCurrencyPrice"))
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
        Map.entry(SearchOperationEnum.STARTS_WITH, (cb, path, value) -> 
            cb.like(cb.lower(path.as(String.class)), value.toLowerCase() + "%")),
        Map.entry(SearchOperationEnum.ENDS_WITH, (cb, path, value) -> 
            cb.like(cb.lower(path.as(String.class)), "%" + value.toLowerCase())),
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

    public static Path<?> getSpecialTradeFieldPath(Root<SpecialTradeEntity> root, String fieldName) {
        try {
            Function<Root<SpecialTradeEntity>, Path<?>> pathFunction = FIELD_PATH_MAPPING.get(fieldName);
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

    public static Predicate buildSpecialTradeFieldPredicate(CriteriaBuilder criteriaBuilder, 
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

## src/main/java/com/nubo/operations/special/espec/api/helpers/dynamicQuery/dataBase/SpecialSettlementSpecificationBuilder.java

```java
package com.nubo.operations.special.espec.api.helpers.dynamicQuery.dataBase;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.domain.Specification;

import com.nubo.operations.special.espec.api.models.entity.SpecialSettlementEntity;
import com.nubo.operations.special.espec.api.models.enums.SearchOperationEnum;

import jakarta.persistence.criteria.Path;

public class SpecialSettlementSpecificationBuilder {
    
    private final List<Specification<SpecialSettlementEntity>> specifications = new ArrayList<>();

    public static SpecialSettlementSpecificationBuilder builder() {
        return new SpecialSettlementSpecificationBuilder();
    }

    public SpecialSettlementSpecificationBuilder withSpecialTradeId(Long specialTradeId) {
        if (specialTradeId != null) {
            specifications.add((root, query, cb) -> 
                cb.equal(root.get("specialTrade").get("id"), specialTradeId));
        }
        return this;
    }

    public SpecialSettlementSpecificationBuilder withFraction(Integer fraction) {
        if (fraction != null) {
            specifications.add((root, query, cb) -> 
                cb.equal(root.get("fraction"), fraction));
        }
        return this;
    }

    public SpecialSettlementSpecificationBuilder withSideId(String sideId) {
        if (sideId != null) {
            specifications.add((root, query, cb) -> 
                cb.equal(root.get("side").get("id"), sideId));
        }
        return this;
    }

    public SpecialSettlementSpecificationBuilder withInvestorId(Long investorId) {
        if (investorId != null) {
            specifications.add((root, query, cb) -> 
                cb.equal(root.get("investor").get("id"), investorId));
        }
        return this;
    }

    public SpecialSettlementSpecificationBuilder withInvestorAccountId(Long investorAccountId) {
        if (investorAccountId != null) {
            specifications.add((root, query, cb) -> 
                cb.equal(root.get("investorAccount").get("id"), investorAccountId));
        }
        return this;
    }

    public SpecialSettlementSpecificationBuilder withParticipantAccountId(Long participantAccountId) {
        if (participantAccountId != null) {
            specifications.add((root, query, cb) -> 
                cb.equal(root.get("participantAccount").get("id"), participantAccountId));
        }
        return this;
    }

    public SpecialSettlementSpecificationBuilder withBankAccountId(Long bankAccountId) {
        if (bankAccountId != null) {
            specifications.add((root, query, cb) -> 
                cb.equal(root.get("bankAccount").get("id"), bankAccountId));
        }
        return this;
    }

    public SpecialSettlementSpecificationBuilder withDynamicFilter(String fieldName, String fieldValue, SearchOperationEnum operation) {
        if (fieldName != null && fieldValue != null && operation != null) {
            specifications.add((root, query, cb) -> {
                try {
                    Path<?> fieldPath = MapperSpecialSettlementDynamicSearch.getSpecialSettlementFieldPath(root, fieldName);
                    if (fieldPath != null) {
                        return MapperSpecialSettlementDynamicSearch.buildSpecialSettlementFieldPredicate(cb, fieldPath, fieldValue, operation);
                    }
                    return cb.conjunction(); 
                } catch (Exception e) {
                    return cb.conjunction(); 
                }
            });
        }
        return this;
    }

    public Specification<SpecialSettlementEntity> build() {
        if (specifications.isEmpty()) {
            return (root, query, cb) -> cb.conjunction();
        }
        return specifications.stream()
                .reduce(Specification::and)
                .orElse((root, query, cb) -> cb.conjunction());
    }
}

```

## src/main/java/com/nubo/operations/special/espec/api/helpers/dynamicQuery/dataBase/SpecialSettlementSpecificationFactory.java

```java
package com.nubo.operations.special.espec.api.helpers.dynamicQuery.dataBase;

import org.springframework.data.jpa.domain.Specification;

import com.nubo.operations.special.espec.api.models.entity.SpecialSettlementEntity;
import com.nubo.operations.special.espec.api.models.enums.SearchOperationEnum;

import jakarta.persistence.criteria.Path;

public class SpecialSettlementSpecificationFactory {
    
    private SpecialSettlementSpecificationFactory() {
        throw new IllegalStateException("Utility class");
    }

    public static Specification<SpecialSettlementEntity> createStandardFilter(
            Long specialTradeId, Integer fraction, String sideId, Long investorId,
            Long investorAccountId, Long participantAccountId, Long bankAccountId) {
        
        return SpecialSettlementSpecificationBuilder.builder()
                .withSpecialTradeId(specialTradeId)
                .withFraction(fraction)
                .withSideId(sideId)
                .withInvestorId(investorId)
                .withInvestorAccountId(investorAccountId)
                .withParticipantAccountId(participantAccountId)
                .withBankAccountId(bankAccountId)
                .build();
    }

    public static Specification<SpecialSettlementEntity> createDynamicFilter(
            String fieldName, String fieldValue, SearchOperationEnum operation) {
        
        return (root, query, cb) -> {
            try {
                Path<?> fieldPath = MapperSpecialSettlementDynamicSearch
                    .getSpecialSettlementFieldPath(root, fieldName);
                if (fieldPath != null) {
                    return MapperSpecialSettlementDynamicSearch
                        .buildSpecialSettlementFieldPredicate(cb, fieldPath, fieldValue, operation);
                }
                return cb.conjunction();
            } catch (Exception e) {
                return cb.conjunction();
            }
        };
    }

    public static Specification<SpecialSettlementEntity> createCombinedFilter(
            Long specialTradeId, Integer fraction, String sideId, Long investorId,
            Long investorAccountId, Long participantAccountId, Long bankAccountId,
            String fieldName, String fieldValue, SearchOperationEnum operation) {
        
        return SpecialSettlementSpecificationBuilder.builder()
                .withSpecialTradeId(specialTradeId)
                .withFraction(fraction)
                .withSideId(sideId)
                .withInvestorId(investorId)
                .withInvestorAccountId(investorAccountId)
                .withParticipantAccountId(participantAccountId)
                .withBankAccountId(bankAccountId)
                .withDynamicFilter(fieldName, fieldValue, operation)
                .build();
    }

    public static Specification<SpecialSettlementEntity> createSpecialTradeFilter(Long specialTradeId) {
        return SpecialSettlementSpecificationBuilder.builder()
                .withSpecialTradeId(specialTradeId)
                .build();
    }

    public static Specification<SpecialSettlementEntity> createInvestorFilter(Long investorId) {
        return SpecialSettlementSpecificationBuilder.builder()
                .withInvestorId(investorId)
                .build();
    }
}

```

## src/main/java/com/nubo/operations/special/espec/api/helpers/dynamicQuery/dataBase/SpecialTradeSpecificationBuilder.java

```java
package com.nubo.operations.special.espec.api.helpers.dynamicQuery.dataBase;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.domain.Specification;

import com.nubo.operations.special.espec.api.models.entity.SpecialTradeEntity;
import com.nubo.operations.special.espec.api.models.enums.SearchOperationEnum;

import jakarta.persistence.criteria.Path;

public class SpecialTradeSpecificationBuilder {
    
    private final List<Specification<SpecialTradeEntity>> specifications = new ArrayList<>();

    public static SpecialTradeSpecificationBuilder builder() {
        return new SpecialTradeSpecificationBuilder();
    }
    
    public SpecialTradeSpecificationBuilder withId(Long id) {
        if (id != null) {
            specifications.add((root, query, cb) -> 
                cb.equal(root.get("id"), id));
        }
        return this;
    }

    public SpecialTradeSpecificationBuilder withStatusId(Long statusId) {
        if (statusId != null) {
            specifications.add((root, query, cb) -> 
                cb.equal(root.get("status").get("id"), statusId));
        }
        return this;
    }

    public SpecialTradeSpecificationBuilder withParticipantId(Long participantId) {
        if (participantId != null) {
            specifications.add((root, query, cb) -> 
                cb.equal(root.get("participant").get("id"), participantId));
        }
        return this;
    }

    public SpecialTradeSpecificationBuilder withTypeId(Long typeId) {
        if (typeId != null) {
            specifications.add((root, query, cb) -> 
                cb.equal(root.get("type").get("id"), typeId));
        }
        return this;
    }

    public SpecialTradeSpecificationBuilder withCountryId(Long countryId) {
        if (countryId != null) {
            specifications.add((root, query, cb) -> 
                cb.equal(root.get("country").get("id"), countryId));
        }
        return this;
    }

    public SpecialTradeSpecificationBuilder withSpecialOperationName(String specialOperationName) {
        if (specialOperationName != null) {
            specifications.add((root, query, cb) -> {
                String searchPattern = "%" + specialOperationName.toLowerCase() + "%";
                return cb.or(
                        cb.like(cb.lower(root.get("specialOperationName")), searchPattern),
                        cb.like(
                                cb.function("to_char", String.class,
                                        root.get("specialOperationId"),
                                        cb.literal("FM999999999")),
                                searchPattern)
                );
            });
        }
        return this;
    }

    public SpecialTradeSpecificationBuilder withRecordDate(LocalDate recordDate) {
        if (recordDate != null) {
            specifications.add((root, query, cb) -> 
                cb.equal(root.get("recordDate"), recordDate));
        }
        return this;
    }

    public SpecialTradeSpecificationBuilder withSpecialOperationId(String specialOperationId) {
        if (specialOperationId != null) {
            specifications.add((root, query, cb) -> 
                cb.equal(root.get("specialOperationId"), specialOperationId));
        }
        return this;
    }

    public SpecialTradeSpecificationBuilder withSettlementDate(LocalDate settlementDate) {
        if (settlementDate != null) {
            specifications.add((root, query, cb) -> 
                cb.equal(root.get("settlementDate"), settlementDate));
        }
        return this;
    }

    public SpecialTradeSpecificationBuilder withSecurityId(Long securityId) {
        if (securityId != null) {
            specifications.add((root, query, cb) -> 
                cb.equal(root.get("securityTitle").get("id"), securityId));
        }
        return this;
    }

    public SpecialTradeSpecificationBuilder withDepositoryId(Long depositoryId) {
        if (depositoryId != null) {
            specifications.add((root, query, cb) -> 
                cb.equal(root.get("depository").get("id"), depositoryId));
        }
        return this;
    }

    public SpecialTradeSpecificationBuilder withSideId(Long sideId) {
        if (sideId != null) {
            specifications.add((root, query, cb) -> 
                cb.equal(root.get("side").get("id"), sideId));
        }
        return this;
    }

    public SpecialTradeSpecificationBuilder withDirectDepositor(Long directDepositor) {
        if (directDepositor != null) {
            specifications.add((root, query, cb) -> 
                cb.equal(root.get("directDepositor").get("id"), directDepositor));
        }
        return this;
    }

    public SpecialTradeSpecificationBuilder withClientOperator(Long clientOperator) {
        if (clientOperator != null) {
            specifications.add((root, query, cb) -> 
                cb.equal(root.get("clientOperator").get("id"), clientOperator));
        }
        return this;
    }

    public SpecialTradeSpecificationBuilder withClientSettlementAgent(Long clientSettlementAgent) {
        if (clientSettlementAgent != null) {
            specifications.add((root, query, cb) -> 
                cb.equal(root.get("clientSettlementAgent").get("id"), clientSettlementAgent));
        }
        return this;
    }

    public SpecialTradeSpecificationBuilder withDynamicFilter(String fieldName, String fieldValue, SearchOperationEnum operation) {
        if (fieldName != null && fieldValue != null && operation != null) {
            specifications.add((root, query, cb) -> {
                try {
                    Path<?> fieldPath = MapperSpecialTradeDynamicSearch.getSpecialTradeFieldPath(root, fieldName);
                    if (fieldPath != null) {
                        return MapperSpecialTradeDynamicSearch.buildSpecialTradeFieldPredicate(cb, fieldPath, fieldValue, operation);
                    }
                    return cb.conjunction(); 
                } catch (Exception e) {
                    return cb.conjunction(); 
                }
            });
        }
        return this;
    }

    public Specification<SpecialTradeEntity> build() {
        return specifications.stream()
                .reduce(Specification::and)
                .orElse(null);
    }
}

```

## src/main/java/com/nubo/operations/special/espec/api/helpers/dynamicQuery/dataBase/SpecialTradeSpecificationFactory.java

```java
package com.nubo.operations.special.espec.api.helpers.dynamicQuery.dataBase;

import org.springframework.data.jpa.domain.Specification;

import com.nubo.operations.special.espec.api.models.dto.request.SpecialTradeFilterRequestDto;
import com.nubo.operations.special.espec.api.models.entity.SpecialTradeEntity;
import com.nubo.operations.special.espec.api.models.enums.SearchOperationEnum;

import jakarta.persistence.criteria.Path;

public class SpecialTradeSpecificationFactory {
    
    private SpecialTradeSpecificationFactory() {
        throw new IllegalStateException("Utility class");
    }
    
    public static Specification<SpecialTradeEntity> createStandardFilter(SpecialTradeFilterRequestDto filter) {
        
        return SpecialTradeSpecificationBuilder.builder()
                .withId(filter.getId())
                .withStatusId(filter.getStatusId())
                .withParticipantId(filter.getParticipantId())
                .withTypeId(filter.getTypeId())
                .withCountryId(filter.getCountryId())
                .withSpecialOperationName(filter.getSpecialOperationName())
                .withRecordDate(filter.getRecordDate())
                .withSpecialOperationId(filter.getSpecialOperationId())
                .withSettlementDate(filter.getSettlementDate())
                .withSecurityId(filter.getSecurityId())
                .withDepositoryId(filter.getDepositoryId())
                .withSideId(filter.getSideId())
                .withDirectDepositor(filter.getDirectDepositor())
                .withClientOperator(filter.getClientOperator())
                .withClientSettlementAgent(filter.getClientSettlementAgent())
                .build();
    }

    public static Specification<SpecialTradeEntity> createDynamicFilter(
            String fieldName, String fieldValue, SearchOperationEnum operation) {
        
        return (root, query, cb) -> {
            try {
                Path<?> fieldPath = MapperSpecialTradeDynamicSearch
                    .getSpecialTradeFieldPath(root, fieldName);
                if (fieldPath != null) {
                    return MapperSpecialTradeDynamicSearch
                        .buildSpecialTradeFieldPredicate(cb, fieldPath, fieldValue, operation);
                }
                return cb.conjunction();
            } catch (Exception e) {
                return cb.conjunction();
            }
        };
    }
    
    public static Specification<SpecialTradeEntity> createCombinedFilter(
            SpecialTradeFilterRequestDto filter,
            String fieldName, String fieldValue, SearchOperationEnum operation) {
        
        return SpecialTradeSpecificationBuilder.builder()
                .withId(filter.getId())
                .withStatusId(filter.getStatusId())
                .withParticipantId(filter.getParticipantId())
                .withTypeId(filter.getTypeId())
                .withCountryId(filter.getCountryId())
                .withSpecialOperationName(filter.getSpecialOperationName())
                .withRecordDate(filter.getRecordDate())
                .withSpecialOperationId(filter.getSpecialOperationId())
                .withSettlementDate(filter.getSettlementDate())
                .withSecurityId(filter.getSecurityId())
                .withDepositoryId(filter.getDepositoryId())
                .withSideId(filter.getSideId())
                .withDirectDepositor(filter.getDirectDepositor())
                .withClientOperator(filter.getClientOperator())
                .withClientSettlementAgent(filter.getClientSettlementAgent())
                .withDynamicFilter(fieldName, fieldValue, operation)
                .build();
    }

    public static Specification<SpecialTradeEntity> createBasicFilter(Long id, Long statusId, Long participantId) {
        return SpecialTradeSpecificationBuilder.builder()
                .withId(id)
                .withStatusId(statusId)
                .withParticipantId(participantId)
                .build();
    }
    
    public static Specification<SpecialTradeEntity> createCountryTypeFilter(Long countryId, Long typeId) {
        return SpecialTradeSpecificationBuilder.builder()
                .withCountryId(countryId)
                .withTypeId(typeId)
                .build();
    }
}

```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/request/AfpFundInDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.request;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AfpFundInDto {

    private Long id;

    private String description;

}

```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/request/BeneficiaryReassignmentInDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.request;

import java.math.BigDecimal;

import com.nubo.operations.special.espec.api.application.annotations.ValidBigDecimal;

import jakarta.validation.constraints.DecimalMax;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BeneficiaryReassignmentInDto
{

    @NotNull(message = "Investor account ID is required")
    private Long investorAccountId;

    private Long bankAccountId;

    @Size(max = 20, message = "Compensating entity NIT must not exceed 20 characters")
    @Pattern(regexp = "^[0-9]{3,15}(-[0-9]{1})?$", message = "Compensating entity NIT must be 3-15 digits with optional verification digit")
    private String compensatingEntityNit;

    @NotNull(message = "Quantity is required")
    @ValidBigDecimal(precision = 16, scale = 4)
    @DecimalMin(value = "0.0001", message = "Quantity must be greater than 0")
    private BigDecimal quantity;

    @NotNull(message = "Commission percentage is required")
    @ValidBigDecimal(precision = 6, scale = 4)
    @DecimalMin(value = "0.0", inclusive = true, message = "Commission percentage must be greater than or equal to 0")
    @DecimalMax(value = "99.9999", message = "Commission percentage must not exceed 99.9999%")
    private BigDecimal commissionPercentage;

    @Size(max = 10, message = "Reference must not exceed 10 characters")
    @Pattern(regexp = "^[a-zA-Z0-9]*$", message = "Reference must be alphanumeric")
    private String reference;

    @Min(value = 1, message = "Assignment source ID must be greater than 0")
    private Long assignmentSourceId;
}

```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/request/CalculationInDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.request;

import com.nubo.operations.special.espec.api.application.annotations.ValidBigDecimal;
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

## src/main/java/com/nubo/operations/special/espec/api/models/dto/request/CalculationIvaInDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.request;

import com.nubo.operations.special.espec.api.application.annotations.ValidBigDecimal;
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

## src/main/java/com/nubo/operations/special/espec/api/models/dto/request/CorrectionSetInDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CorrectionSetInDto {

    @NotBlank(message = "Special trade ID es requerido")
    @Size(max = 18, message = "Special trade ID no debe exceder 18 caracteres")
    @JsonProperty("special_trade_id")
    private String specialTradeId;

    @NotBlank(message = "Account titles es requerido")
    @Size(max = 50, message = "Account titles no debe exceder 50 caracteres")
    @JsonProperty("account_titles")
    private String accountTitles;

    @NotNull(message = "Fraction es requerido")
    @JsonProperty("fraction")
    private Integer fraction;

    @NotNull(message = "Commission rate es requerido")
    @DecimalMin(value = "0.0", inclusive = true, message = "Commission rate debe ser mayor o igual a 0")
    @JsonProperty("commission_rate")
    private BigDecimal commissionRate;

    @NotBlank(message = "Trade reference es requerido")
    @Size(max = 50, message = "Trade reference no debe exceder 50 caracteres")
    @JsonProperty("trade_reference")
    private String tradeReference;

    @NotBlank(message = "Origin es requerido")
    @Size(max = 20, message = "Origin no debe exceder 20 caracteres")
    @JsonProperty("origin")
    private String origin;
}

```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/request/CurrencyInDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.request;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CurrencyInDto {

    private Long id;

    private String code;

    private String name;
}

```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/request/ExchangeRateInDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.request;

import com.nubo.operations.special.espec.api.models.entity.CurrencyEntity;
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

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ExchangeRateInDto {

    private Long id;

    private Long baseCurrency;

    private Long conversionCurrency;

    private BigDecimal conversionValue;

    private LocalDate recordDate;

}

```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/request/ExtendedReassignmentSetInDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.request;

import java.util.List;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
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

public class ExtendedReassignmentSetInDto
{

    @NotNull(message = "Trade ID is required")
    @Min(value = 1, message = "Trade ID must be greater than 0")
    private Long tradeId;

    @NotBlank(message = "Side ID is required")
    @Size(max = 2, message = "Side ID must not exceed 2 characters")
    private String sideId;

    @NotNull(message = "Beneficiaries list is required")
    @NotEmpty(message = "Must include at least one beneficiary")
    @Size(max = 99, message = "Cannot exceed 99 beneficiaries")
    @Valid()
    private List<BeneficiaryReassignmentInDto> beneficiaries;

    @NotNull(message = "User accepted cost confirmation is required")
    private Boolean userAcceptedCost;

    @NotNull(message = "User supporting documents confirmation is required")
    private Boolean userHasSupportingDocuments;
}

```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/request/ReassignmentSetInDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Size;
import java.math.BigDecimal;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ReassignmentSetInDto {

    @NotBlank(message = "Special trade ID es requerido")
    @Size(max = 18, message = "Special trade ID no debe exceder 18 caracteres")
    @JsonProperty("special_trade_id")
    private String specialTradeId;

    @NotBlank(message = "Account titles es requerido")
    @Size(max = 50, message = "Account titles no debe exceder 50 caracteres")
    @JsonProperty("account_titles")
    private String accountTitles;

    @NotBlank(message = "Settlement entity es requerido")
    @Size(min = 3, max = 15, message = "Settlement entity debe tener entre 3 y 15 caracteres")
    @JsonProperty("settlement_entity")
    private String settlementEntity;

    @NotBlank(message = "Cash account es requerido")
    @Size(max = 30, message = "Cash account no debe exceder 30 caracteres")
    @JsonProperty("cash_account")
    private String cashAccount;

    @NotNull(message = "Fraction es requerido")
    @JsonProperty("fraction")
    private Integer fraction;

    @NotNull(message = "Commission rate es requerido")
    @DecimalMin(value = "0.0", inclusive = true, message = "Commission rate debe ser mayor o igual a 0")
    @JsonProperty("commission_rate")
    private BigDecimal commissionRate;

    @NotBlank(message = "Trade reference es requerido")
    @Size(max = 50, message = "Trade reference no debe exceder 50 caracteres")
    @JsonProperty("trade_reference")
    private String tradeReference;

    @NotBlank(message = "Origin es requerido")
    @Size(max = 20, message = "Origin no debe exceder 20 caracteres")
    @JsonProperty("origin")
    private String origin;
}
```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/request/SpecialSettlementInDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.request;

import com.nubo.operations.special.espec.api.application.annotations.ValidBigDecimal;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SpecialSettlementInDto {

    @NotNull
    @Min(1)
    private Long specialTradeId;

    @NotNull
    @Min(1)
    private Integer fraction;

    @NotNull
    @Size(max = 2)
    private String sideId;

    @NotNull
    @Min(1)
    private Long investorId;

    @NotNull
    @Min(1)
    private Long investorAccountId;

    @NotNull
    @Min(1)
    private Long participantAccountId;

    @Size(max = 10)
    private String fiduciarySpecialist;

    @ValidBigDecimal(precision = 6, scale = 4)
    private BigDecimal commissionPercentage;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal fractionPercentage;

    @NotNull
    @Min(1)
    private Long bankAccountId;

}

```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/request/SpecialSettlementParamInDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.request;

import com.nubo.operations.special.espec.api.application.annotations.ValidBigDecimal;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SpecialSettlementParamInDto {

    @Min(value = 1)
    private Long specialTradeId;

    @Min(value = 1)
    private Integer fraction;

    @Size(max = 2)
    private String sideId;

    @Min(value = 1)
    private Long investorId;

    @Min(value = 1)
    private Long participantAccountId;

    @Min(value = 1)
    private Long investorAccountId;

    @Min(value = 1)
    private Long bankAccountId;

    @Size(max = 10)
    private String fiduciarySpecialist;

    @ValidBigDecimal(precision = 6, scale = 4)
    private BigDecimal commissionPercentage;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal fractionPercentage;

}

```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/request/SpecialSettlementUpdateInDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.request;

import com.nubo.operations.special.espec.api.application.annotations.ValidBigDecimal;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SpecialSettlementUpdateInDto {

    @NotNull
    @Min(value = 1)
    private Long specialTradeId;

    @NotNull
    @Min(value = 1)
    private Integer fraction;

    @Size(max = 2)
    private String sideId;

    @NotNull
    @Min(value = 1)
    private Long investorId;

    @NotNull
    @Min(value = 1)
    private Long participantAccountId;

    @NotNull
    @Min(value = 1)
    private Long investorAccountId;

    @Min(value = 1)
    private Long bankAccountId;

    @Size(max = 10)
    private String fiduciarySpecialist;

    @ValidBigDecimal(precision = 6, scale = 4)
    private BigDecimal commissionPercentage;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal fractionPercentage;

}


```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/request/SpecialTradeFilterRequestDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.request;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SpecialTradeFilterRequestDto {
    
    private Long id;
    private Long statusId;
    private Long participantId;
    private Long typeId;
    private Long countryId;
    private String specialOperationName;
    private LocalDate recordDate;
    private String specialOperationId;
    private LocalDate settlementDate;
    private Long securityId;
    private Long depositoryId;
    private Long sideId;
    private Long directDepositor;
    private Long clientOperator;
    private Long clientSettlementAgent;
}

```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/request/SpecialTradeInDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.request;

import com.nubo.operations.special.espec.api.application.annotations.ValidBigDecimal;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
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
public class SpecialTradeInDto {

    private LocalDate recordDate;

    private Integer specialOperationId;

    private LocalDate settlementDate;

    private Integer daysToSettlement;

    @Size(max = 80)
    private String specialOperationName;

    @NotNull
    @Min(value = 1)
    private Long countryId;

    @NotNull
    @Min(value = 1)
    private Long typeId;

    @NotNull
    @Min(value = 1)
    private Long securityId;

    @NotNull
    @Size(max = 2)
    private String depositoryId;

    @NotNull
    @Size(max = 2)
    private String sideId;

    @NotNull
    @Size(max = 2)
    private String marketEntityId;

    @NotNull
    @Min(value = 1)
    private Long statusId;

    @NotNull
    @Min(value = 1)
    private Long participantId;

    private Long directDepositor;

    private Long clientOperator;

    @NotNull
    @Size(max = 2)
    private String clientSettlementAgent;

    @NotNull
    @Min(value = 1)
    private Long afpFundId;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal totalAmount;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal totalAmountLocal;

    @NotNull
    @Min(value = 1)
    private Long currencyId;

    @NotNull
    @Min(value = 1)
    private Long exchangeRateId;

    @ValidBigDecimal(precision = 12, scale = 6)
    private BigDecimal price;

    @ValidBigDecimal(precision = 12, scale = 6)
    private BigDecimal localCurrencyPrice;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal quantity;

    private Integer numberFolios;

    private Boolean fractionalMark;

}

```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/request/SpecialTradeParamInDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.request;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SpecialTradeParamInDto {

    @Min(value = 1)
    private Long id;

    @Min(value = 1)
    private Long countryId;

    @Min(value = 1)
    private Long typeId;

    @Min(value = 1)
    private Long securityId;

    @Size(max = 2)
    private String sideId;

    @Size(max = 80)
    private String specialOperationName;

    @Min(value = 1)
    private Long statusId;

    @Min(value = 1)
    private Long participantId;

    private Long matchId;

    @Min(value = 1)
    private Long custodianId;

    private LocalDate clearingDate;

    private LocalDate matchDate;

    private LocalDate startRecordDate;

    private LocalDate endRecordDate;

}

```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/request/SpecialTradeUpdateInDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.request;

import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
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
public class SpecialTradeUpdateInDto {

    private LocalDate recordDate;

    private Integer specialOperationId;

    private LocalDate settlementDate;

    private Integer daysToSettlement;

    @Size(max = 80)
    private String specialOperationName;

    @Min(value = 1)
    private Long countryId;

    @Min(value = 1)
    private Long typeId;

    @Min(value = 1)
    private Long securityId;

    @Size(max = 2)
    private String depositoryId;

    @Size(max = 2)
    private String sideId;

    @Min(value = 1)
    private Long statusId;

    @Min(value = 1)
    private Long participantId;

    private Long directDepositor;

    private Long clientOperator;

    @Size(max = 2)
    private String clientSettlementAgent;

    @Min(value = 1)
    private Long afpFundId;

    @Digits(integer = 16, fraction = 4)
    private BigDecimal totalAmount;

    @Digits(integer = 16, fraction = 4)
    private BigDecimal totalAmountLocal;

    @Min(value = 1)
    private Long currencyId;

    @Min(value = 1)
    private Long exchangeRateId;

    @Digits(integer = 12, fraction = 6)
    private BigDecimal price;

    @Digits(integer = 12, fraction = 6)
    private BigDecimal priceLocal;

    @Digits(integer = 16, fraction = 4)
    private BigDecimal quantity;

    private Integer numberFolios;

    private Boolean fractionalMark;

    @Size(max = 2)
    private String marketEntityId;

}


```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/request/StatusInDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.request;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class StatusInDto {

    private Long id;

    private String description;

    private String category;

    private String detail;
}

```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/request/StatusUpdateInDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.request;

import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class StatusUpdateInDto {


    @Size(max = 80)
    private String description;

    @Size(max = 30)
    private String category;
}

```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/request/TradeParamInDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TradeParamInDto {

    private Long specialTradeId;

    private Long matchId;

    private Integer statusId;

    private Boolean canceledStatus;

    private Long participantId;

    private Long typeId;

    private Long countryId;

    private LocalDate startMatchDate;

    private LocalDate endMatchDate;

    private LocalDate endClearingDate;

}

```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/response/AfpFundOutDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.response;

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
public class AfpFundOutDto {

    private Long id;

    private String description;

}

```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/response/AllSpecialTradeOutDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.response;

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
public class AllSpecialTradeOutDto {

    private TradeOutDto trade;

    private TradeEquityOutDto tradeEquity;

    private List<SettlementOutDto> settlement;

}

```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/response/BankAccountOutDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.response;

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
public class BankAccountOutDto {

    private Long id;

    private String accountNumber;

    private String bankName;

    private BankOutDto bank;

}

```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/response/BankOutDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.response;

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

## src/main/java/com/nubo/operations/special/espec/api/models/dto/response/BeneficiaryReassignmentOutDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.response;

import java.math.BigDecimal;
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
public class BeneficiaryReassignmentOutDto
{

    private Integer fractionNumber;
    private Long tradeId;
    private String sideId;
    private String accountTitles;
    private String beneficiaryFinalType;
    private String beneficiaryFinalNumber;
    private String beneficiaryFinalName;
    private ParticipantOutDto custodian;
    private FicAdministratorOutDto administrator;
    private String settlementEntity;
    private String cashAccount;
    private BigDecimal quantity;
    private BigDecimal totalAmount;
    private BigDecimal dvpAmount;
    private BigDecimal lpAmount;
    private BigDecimal epAmount;
    private BigDecimal commissionPercentage;
    private BigDecimal commissionValue;
    private BigDecimal commissionTax;
    private String reference;
    private String origin;
    private StatusOutDto status;
    private String custodianStatus;
    private String depositorCode;
    private Boolean canModifyQuantity;
    private Boolean canDelete;
    private Boolean isParticipantAccount;
    private LocalDateTime createdDate;
    private LocalDateTime lastModifiedDate;
    private String lastModifiedUser;
}

```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/response/CalculationOutDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.response;

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

    private BigDecimal amount;

    private BigDecimal commissionAmount;

    private BigDecimal valTax;

    private BigDecimal valTaxAmount;

    private BigDecimal netAmount;

    private BigDecimal transferValue;

}

```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/response/CfiOutDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.response;

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
public class CfiOutDto {

    private String id;

    private String description;

}

```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/response/CityOutDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.response;

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

## src/main/java/com/nubo/operations/special/espec/api/models/dto/response/CountryOutDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.response;

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

## src/main/java/com/nubo/operations/special/espec/api/models/dto/response/CurrencyOutDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.response;

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

## src/main/java/com/nubo/operations/special/espec/api/models/dto/response/DepartmentOutDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.response;

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

## src/main/java/com/nubo/operations/special/espec/api/models/dto/response/DepositoryOutDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.response;

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

## src/main/java/com/nubo/operations/special/espec/api/models/dto/response/ExchangeRateOutDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nubo.operations.special.espec.api.models.entity.CurrencyEntity;
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

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class ExchangeRateOutDto {


    private Long id;

    private CurrencyOutDto baseCurrency;

    private CurrencyOutDto conversionCurrency;

    private LocalDate validityDate;

    private BigDecimal conversionValue;

    private LocalDate recordDate;

}

```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/response/ExtendedReassignmentOutDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.response;

import java.math.BigDecimal;
import java.time.LocalDateTime;
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
public class ExtendedReassignmentOutDto {

    private Long tradeId;
    private String sideId;
    private String country;
    private String assignmentSource;
    private Boolean requiresInternalApproval;
    private List<BeneficiaryReassignmentOutDto> beneficiaries;
    private BigDecimal totalQuantity;
    private BigDecimal totalAmount;
    private BigDecimal totalDvpAmount;
    private BigDecimal totalLpAmount;
    private BigDecimal totalEpAmount;
    private Boolean isFullDvp;
    private Boolean isFullLp;
    private Boolean hasMixedAmounts;
    private Boolean canAddBeneficiaries;
    private Boolean canDeleteBeneficiaries;
    private Boolean canModifyQuantities;
    private Integer maxFractionsAllowed;
    private BigDecimal reassignmentCost;
    private BigDecimal taxAmount;
    private BigDecimal totalCost;
    private StatusOutDto operationStatus;
    private StatusOutDto reassignmentStatus;
    private Boolean isBeforeSettlement;
    private List<String> validationErrors;
    private List<String> validationWarnings;
    private Boolean canSave;
    private String saveDisabledReason;
    private LocalDateTime createdDate;
    private LocalDateTime lastModifiedDate;
    private String lastModifiedUser;
    private List<ReassignmentOutDto> reassignmentHistory;
}

```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/response/FicAdministratorOutDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.response;

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
public class FicAdministratorOutDto {

    private Long id;

    private String ficAdministratorCode;

    private String description;
}

```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/response/FractionAccountOutDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nubo.operations.special.espec.api.models.entity.FicAdministratorEntity;
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
public class FractionAccountOutDto {

    private ParticipantAccountOutDto participantAccount;

    private InvestorAccountOutDto investorAccount;

    private TypeOutDto sourceQuoteType;

    private Boolean fiduciarySpecialist;

    private Boolean jointAccount;

    private FicAdministratorOutDto ficAdministrator;

    private Long custodianId;

    private StatusOutDto custodianStatusId;
}

```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/response/FractionAccountSpecialSettlementOutDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.response;

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
public class FractionAccountSpecialSettlementOutDto {

    private InvestorAccountOutDto investorAccount;

    private Boolean jointAccount;

    private List<BankAccountOutDto> investorBankAccounts;

}

```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/response/GicsOutDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.response;

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
public class GicsOutDto {
    private Long id;

    private String description;
}

```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/response/IdentificationTypeOutDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.response;

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

## src/main/java/com/nubo/operations/special/espec/api/models/dto/response/InvestorAccountOutDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.response;

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

    private Long investorId;

    private String accountNumber;

    private StatusOutDto status;

    private TypeOutDto type;

    private TypeOutDto originType;

    private DepositoryOutDto depository;

    private Long participantId;

    private ParticipantOutDto participant;

}
```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/response/InvestorOutDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.response;

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

    private Boolean moneyLaunderingFlag;

    private TaxStatusOutDto taxStatus;

    private Boolean taxExemp;

}

```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/response/IsPossibleCreateFractionDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.response;

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
public class IsPossibleCreateFractionDto {

    private boolean isPossible;

}

```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/response/MarketOutDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.response;

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

## src/main/java/com/nubo/operations/special/espec/api/models/dto/response/PageResponseOutDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.response;

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

## src/main/java/com/nubo/operations/special/espec/api/models/dto/response/ParticipantAccountOutDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.response;

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

    private Long participantId;

    private String accountNumber;

    private StatusOutDto status;

    private TypeOutDto type;

    private TypeOutDto originType;

}

```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/response/ParticipantBankAccountOutDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ParticipantBankAccountOutDto {

    @JsonProperty("participant_bank_account_id")
    private Long id;

    @JsonProperty("bank_account")
    private String bankAccount;

    @JsonProperty("principal")
    private Boolean principal;

    @JsonProperty("bank_branch")
    private Long bankBranch;

    @JsonProperty("entity_code")
    private String entityCode;

    @JsonProperty("swift_code")
    private Integer swiftCode;

    @JsonProperty("branch_code")
    private String branchCode;

    @JsonProperty("portfolio")
    private String portfolio;

    @JsonProperty("concept")
    private String concept;

    @JsonProperty("nit_clearing_entity")
    private String nitClearingEntity;

    @JsonProperty("depository_id")
    private String depositoryId;

    @JsonProperty("last_modify_user")
    private String lastModifyUser;

    @JsonProperty("last_modify_applic")
    private String lastModifyApplic;

    @JsonProperty("last_modify_date")
    private LocalDateTime lastModifyDate;

    @JsonProperty("last_modify_ip")
    private String lastModifyIp;

    @JsonProperty("bank")
    private BankOutDto bank;

    @JsonProperty("participant")
    private ParticipantOutDto participant;

    @JsonProperty("status")
    private StatusOutDto status;

    @JsonProperty("type")
    private TypeOutDto type;

    @JsonProperty("country")
    private CountryOutDto country;

    @JsonProperty("currency")
    private CurrencyOutDto currency;

}

```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/response/ParticipantOutDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.response;

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

    private String name;

    private String documentNumber;

    private String shortName;

    private String type;

    private String mnemonic;

    private CountryOutDto country;

    private LocalDate registrationDate;

    private String taxCode;

    private String department;

    private String mainAddress;

    private String webPage;

    private String phoneNumber;

    private StatusOutDto status;

    private String nitClearingHouse;

    private TaxStatusOutDto taxStatus;

    private String typeEntity;

    private String marginAccount;

    private String directAllocation;

    private String marketMaker;

    private Boolean enabled;

    private String masterAccount;

    private IdentificationTypeOutDto identificationType;

}

```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/response/ReassignmentOutDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.response;

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
public class ReassignmentOutDto {

    private Long id;
    private TradeOutDto trade;
    private Integer fraction;
    private SideOutDto side;
    private LocalDate requestDate;
    private LocalTime requestTime;
    private TypeOutDto processType;
    private InvestorAccountOutDto initialAccount;
    private InvestorAccountOutDto newAccount;
    private StatusOutDto status;
    private String detail;
    private String correctionNumber;



}


```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/response/SecurityTitleOutDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.response;

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
@JsonInclude(JsonInclude.Include.ALWAYS)
public class SecurityTitleOutDto {

    private Long id;

    private MarketOutDto market;

    private String equityCode;

    private String mnemonic;

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

## src/main/java/com/nubo/operations/special/espec/api/models/dto/response/SettlementOutDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.response;

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
public class SettlementOutDto {

    private TradeOutDto trade;

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

    private TradingSystemOutDto tradingSystem;

    private StatusOutDto status;

    private BigDecimal brokerageService;

    private Long custodianId;

    private BigDecimal settlementAmount;

    private BankAccountOutDto bankAccount;

    private String reference;

    private BigDecimal capitalGainValue;

    private BigDecimal disbursementValue;

    private TypeOutDto sourceQuoteType;

    private FicAdministratorOutDto ficAdministrator;



}

```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/response/SettlementStatusHistoryOutDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.response;

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
public class SettlementStatusHistoryOutDto {

    private Long tradeId;

    private Integer fraction;

    private SideOutDto side;

    private LocalDateTime time;

    private StatusOutDto status;

}

```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/response/SideOutDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.response;

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

## src/main/java/com/nubo/operations/special/espec/api/models/dto/response/SimplySpecialTradeOutDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.response;

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
public class SimplySpecialTradeOutDto {

    private Long id;

    private String specialOperationName;

    private Integer specialOperationId;

}


```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/response/SpecialSettlementOutDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.response;

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
public class SpecialSettlementOutDto {

    private Long specialTradeId;

    private Integer fraction;

    private String sideId;

    private SpecialTradeOutDto specialTrade;

    private SideOutDto side;

    private InvestorOutDto investor;

    private InvestorAccountOutDto investorAccount;

    private ParticipantAccountOutDto participantAccount;

    private BankAccountOutDto bankAccount;

    private Long investorId;

    private Long investorAccountId;

    private Long participantAccountId;

    private String fiduciarySpecialist;

    private BigDecimal commissionPercentage;

    private BigDecimal fractionPercentage;

    private Long bankAccountId;


}


```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/response/SpecialTradeOutDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.response;

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
public class SpecialTradeOutDto {

    private Long id;

    private LocalDate recordDate;

    private Integer specialOperationId;

    private LocalDate settlementDate;

    private Integer daysToSettlement;

    private String specialOperationName;

    private Long countryId;

    private Long typeId;

    private Long securityId;

    private String depositoryId;

    private String sideId;

    private Long statusId;

    private Long participantId;

    private Long directDepositorId;

    private Long clientOperatorId;

    private Long afpFundId;

    private BigDecimal totalAmount;

    private BigDecimal totalAmountLocal;

    private Long currencyId;

    private Long exchangeRateId;

    private BigDecimal price;

    private BigDecimal quantity;

    private Integer numberFolios;

    private Boolean fractionalMark;

    private CurrencyOutDto currency;

    private CountryOutDto country;

    private TypeOutDto type;

    private SecurityTitleOutDto securityTitle;

    private DepositoryOutDto depository;

    private SideOutDto side;

    private StatusOutDto status;

    private ParticipantOutDto participant;

    private ParticipantOutDto directDepositor;

    private ParticipantOutDto clientOperator;

    private DepositoryOutDto clientSettlementAgent;

    private AfpFundOutDto afpFund;

    private MarketOutDto marketEntity;

    private ExchangeRateOutDto exchangeRate;

    private BigDecimal localCurrencyPrice;

}


```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/response/StatusOutDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.response;

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

    private String detail;
}

```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/response/TaxStatusOutDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.response;

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
public class TaxStatusOutDto {
    private Long id;

    private String description;
}

```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/response/TrackingTradeMatchOutDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class TrackingTradeMatchOutDto {

    private Long tradeId;

    private LocalDate matchDate;

    private Long matchId;

    private List<SettlementStatusHistoryOutDto> settlementStatusHistory;

}

```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/response/TradeEquityOutDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.response;

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

    private Integer foreignBrokerBuy;

    private Integer foreignBrokerSell;

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

## src/main/java/com/nubo/operations/special/espec/api/models/dto/response/TradeOutDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.response;

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

    private SpecialTradeOutDto specialTrade;

    private MarketOutDto marketEntity;

    private Boolean settlementIndicatorOutgoing;

    private Boolean settlementIndicatorReturn;

    private Boolean settlementIndicatorAdvance;

    private TypeOutDto paymentType;

    private TypeOutDto settlementType;

    private StatusOutDto custodianStatus;

    private StatusOutDto settlementStatus;

    private StatusOutDto bloquingStatus;

    private Boolean salesGuarantee;

    private Boolean purchaseGuarantee;

    private Boolean purchasePaymentIndicator;

    private BigDecimal localCurrencyPrice;
}

```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/response/TradingSessionOutDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.response;

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

## src/main/java/com/nubo/operations/special/espec/api/models/dto/response/TradingSystemOutDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.response;

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

## src/main/java/com/nubo/operations/special/espec/api/models/dto/response/TypeOutDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.response;

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

## src/main/java/com/nubo/operations/special/espec/api/models/dto/response/UserPermissionOutDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.response;

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
public class UserPermissionOutDto {

    private Long profileId;

    private Long permissionId;

}

```

## src/main/java/com/nubo/operations/special/espec/api/models/dto/response/ValidationSettlementOutDto.java

```java
package com.nubo.operations.special.espec.api.models.dto.response;

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
public class ValidationSettlementOutDto {

    private Integer fraction;

    private Boolean fractionUpdated;

    private String identificationType;

    private Boolean identificationTypeUpdated;

    private String documentNumber;

    private Boolean documentNumberUpdated;

    private String investorName;

    private Boolean investorNameUpdated;

    private Long investorAccount;

    private Boolean investorAccountUpdated;

    private Boolean fiduciarySpecialist;

    private Boolean fiduciarySpecialistUpdated;

    private String bankAccount;

    private Boolean bankAccountUpdated;

    private String bankName;

    private Boolean bankNameUpdated;

    private String directDepositorOutDto;

    private Boolean directDepositorOutDtoUpdated;

    private String reference;

    private Boolean referenceUpdated;

    private String sourceQuoteType;

    private Boolean sourceQuoteTypeUpdated;

    private BigDecimal commissionPercentage;

    private Boolean commissionPercentageUpdated;

    private BigDecimal fractionQuantity;

    private Boolean fractionQuantityUpdated;

    private BigDecimal commissionAmount;

    private Boolean commissionAmountUpdate;

    private BigDecimal valTaxAmount;

    private Boolean valTaxAmountUpdated;

    private BigDecimal netAmount;

    private Boolean netAmountUpdated;

    private Long custodianId;

    private Boolean custodianIdUpdated;

    private String custodianName;

    private Boolean custodianNameUpdated;

    private Long ficAdministrator;

    private Boolean ficAdministratorUpdated;

    private String bloquingStatus;

    private Boolean bloquingStatusUpdated;

}

```

## src/main/java/com/nubo/operations/special/espec/api/models/entity/AfpFundEntity.java

```java
package com.nubo.operations.special.espec.api.models.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.time.LocalDate;

@Entity
@Builder
@Table(name = "\"AFP_FUND\"", schema = "\"NUANBODB\"")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AfpFundEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"AFP_FUND_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"AFP_FUND_CODE\"", length = 10)
    private String code;

    @Column(name = "\"DESCRIPTION\"", length = 80)
    private String description;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 36)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 30)
    private String lastModifyApplic;

    @Column(name = "\"LAST_MODIFY_DATE\"")
    private LocalDate lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 30)
    private String lastModifyIp;
}

```

## src/main/java/com/nubo/operations/special/espec/api/models/entity/BankAccountEntity.java

```java
package com.nubo.operations.special.espec.api.models.entity;

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

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"BANK_ACCOUNT\"", schema = "\"NUANBODB\"")
public class BankAccountEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"BANK_ACCOUNT_ID\"", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "\"BANK_ID\"")
    private BankEntity bank;

    @ManyToOne
    @JoinColumn(name = "\"INVESTOR_ID\"")
    private InvestorEntity investor;

    @Column(name = "\"BANK_ACCOUNT\"", length = 30)
    private String bankAccount;

    @Column(name = "\"SAVING_ACCOUNT\"")
    private Boolean savingAccount;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 36)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 30)
    private String lastModifyApplic;

    @Column(name = "\"LAST_MODIFY_DATE\"")
    private LocalDate lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 30)
    private String lastModifyIp;
}

```

## src/main/java/com/nubo/operations/special/espec/api/models/entity/BankEntity.java

```java
package com.nubo.operations.special.espec.api.models.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"BANK\"", schema = "\"NUANBODB\"")
public class BankEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"BANK_ID\"", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
    private CountryEntity country;

    @Column(name = "\"BANK_NAME\"", length = 80, nullable = false)
    private String name;

    @Column(name = "\"BANK_CODE\"", length = 10, nullable = false)
    private String code;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 36)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 30)
    private String lastModifyApplic;

    @Column(name = "\"LAST_MODIFY_DATE\"")
    private java.time.LocalDate lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 30)
    private String lastModifyIp;
}

```

## src/main/java/com/nubo/operations/special/espec/api/models/entity/CalculationEntity.java

```java
package com.nubo.operations.special.espec.api.models.entity;

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
    @Column(name = "\"SIDE_ID\"", length = 2, nullable = false)
    private String sideId;

    @ManyToOne
    @JoinColumn(name = "\"SIDE_ID\"", insertable = false, updatable = false)
    private SideEntity side;

}

```

## src/main/java/com/nubo/operations/special/espec/api/models/entity/CalculationKey.java

```java
package com.nubo.operations.special.espec.api.models.entity;

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

    private String sideId;

}
```

## src/main/java/com/nubo/operations/special/espec/api/models/entity/CfiEntity.java

```java
package com.nubo.operations.special.espec.api.models.entity;

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
@Table(name = "\"CFI\"", schema = "\"NUANBODB\"")
public class CfiEntity {

    @Id
    @Column(name = "\"CFI_ID\"", length = 6, nullable = false)
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

## src/main/java/com/nubo/operations/special/espec/api/models/entity/CityEntity.java

```java
package com.nubo.operations.special.espec.api.models.entity;

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
@Table(name = "\"CITY\"", schema = "\"NUANBODB\"")
public class CityEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"CITY_ID\"", nullable = false)
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

## src/main/java/com/nubo/operations/special/espec/api/models/entity/CountryEntity.java

```java
package com.nubo.operations.special.espec.api.models.entity;

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

## src/main/java/com/nubo/operations/special/espec/api/models/entity/CurrencyEntity.java

```java
package com.nubo.operations.special.espec.api.models.entity;

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
    @Column(name = "\"CURRENCY_ID\"")
    private Long id;

    @Column(name = "\"CODE\"", length = 3, nullable = false)
    private String code;

    @Column(name = "\"NAME\"", length = 30, nullable = false)
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

## src/main/java/com/nubo/operations/special/espec/api/models/entity/DepartmentEntity.java

```java
package com.nubo.operations.special.espec.api.models.entity;

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

## src/main/java/com/nubo/operations/special/espec/api/models/entity/DepositoryEntity.java

```java
package com.nubo.operations.special.espec.api.models.entity;

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
@Table(name = "\"DEPOSITORY\"", schema = "\"NUANBODB\"")
public class DepositoryEntity {

    @Id
    @Column(name = "\"DEPOSITORY_ID\"", length = 2)
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

## src/main/java/com/nubo/operations/special/espec/api/models/entity/ExchangeRateEntity.java

```java
package com.nubo.operations.special.espec.api.models.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"EXCHANGE_RATE\"", schema = "\"NUANBODB\"")
public class ExchangeRateEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"EXCHANGE_RATE_ID\"", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "\"BASE_CURRENCY\"", nullable = false)
    private CurrencyEntity baseCurrency;

    @ManyToOne
    @JoinColumn(name = "\"CONVERSION_CURRENCY\"", nullable = false)
    private CurrencyEntity conversionCurrency;

    @Column(name = "\"VALIDITY_DATE\"", nullable = false)
    private LocalDate validityDate;

    @Column(name = "\"CONVERSION_VALUE\"", precision = 16, scale = 8)
    private BigDecimal conversionValue;

    @Column(name = "\"RECORD_DATE\"")
    private LocalDate recordDate;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 36)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 30)
    private String lastModifyApplic;

    @Column(name = "\"LAST_MODIFY_DATE\"")
    private LocalDate lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 30)
    private String lastModifyIp;
}

```

## src/main/java/com/nubo/operations/special/espec/api/models/entity/FicAdministratorEntity.java

```java
package com.nubo.operations.special.espec.api.models.entity;

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


@Entity
@Builder
@Table(name = "\"FIC_ADMINISTRATOR\"", schema = "\"NUANBODB\"")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class FicAdministratorEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"FIC_ADMINISTRATOR_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"FIC_ADMINISTRATOR_CODE\"", length = 10)
    private String ficAdministratorCode;

    @Column(name = "\"DESCRIPTION\"", length = 80)
    private String description;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 36)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 30)
    private String lastModifyApplic;

    @Column(name = "\"LAST_MODIFY_DATE\"")
    private LocalDate lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 30)
    private String lastModifyIp;
}

```

## src/main/java/com/nubo/operations/special/espec/api/models/entity/GicsEntity.java

```java
package com.nubo.operations.special.espec.api.models.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
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

    @Column(name = "\"DESCRIPTION\"", length = 100)
    private String description;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 36)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 30)
    private String lastModifyApplic;

    @Column(name = "\"LAST_MODIFY_DATE\"")
    private java.time.LocalDate lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 30)
    private String lastModifyIp;
}

```

## src/main/java/com/nubo/operations/special/espec/api/models/entity/HolidayEntity.java

```java
package com.nubo.operations.special.espec.api.models.entity;

import jakarta.persistence.*;
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
@Table(name = "\"HOLIDAY\"", schema = "\"NUANBODB\"")
public class HolidayEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"HOLIDAY_ID\"")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
    private CountryEntity country;

    @Column(name = "\"HOLIDAY_DATE\"")
    private LocalDate holidayDate;

    @Column(name = "\"DESCRIPTION\"", length = 100)
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

## src/main/java/com/nubo/operations/special/espec/api/models/entity/IdentificationTypeEntity.java

```java
package com.nubo.operations.special.espec.api.models.entity;

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
@Table(name = "\"IDENTIFICATION_TYPE\"", schema = "\"NUANBODB\"")
public class IdentificationTypeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"IDENTIFICATION_TYPE_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"DESCRIPTION\"", length = 80, nullable = false)
    private String description;

    @Column(name = "\"CODE\"", length = 80, nullable = false)
    private String code;

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

## src/main/java/com/nubo/operations/special/espec/api/models/entity/InvestorAccountEntity.java

```java
package com.nubo.operations.special.espec.api.models.entity;

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

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
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

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @ManyToOne
    @JoinColumn(name = "\"ORIGIN_TYPE_ID\"", nullable = false)
    private TypeEntity originType;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"", nullable = false)
    private TypeEntity type;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID\"", nullable = false)
    private DepositoryEntity depository;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID\"")
    private ParticipantEntity participant;

    @Column(name = "\"RELATION_INVESTOR\"")
    private Integer relationInvestor;

    @Column(name = "\"ACCOUNT_PRINCIPAL\"")
    private Boolean accountPrincipal;

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

## src/main/java/com/nubo/operations/special/espec/api/models/entity/InvestorEntity.java

```java
package com.nubo.operations.special.espec.api.models.entity;

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

    @ManyToOne
    @JoinColumn(name = "\"DEPARTMENT_ID\"", nullable = false)
    private DepartmentEntity department;

    @ManyToOne
    @JoinColumn(name = "\"CITY_ID\"", nullable = false)
    private CityEntity city;

    @Column(name = "\"DOCUMENT_NUMBER\"", length = 20)
    private String documentNumber;

    @ManyToOne
    @JoinColumn(name = "\"IDENTIFICATION_TYPE_ID\"", nullable = false)
    private IdentificationTypeEntity identificationType;

    @Column(name = "\"NATIONALITY\"", length = 2)
    private String nationality;

    @Column(name = "\"ADDRESS\"", length = 100)
    private String address;

    @Column(name = "\"PHONE_NUMBER\"", length = 20)
    private String phoneNumber;

    @Column(name = "\"EMAIL\"", length = 50)
    private String email;

    @Column(name = "\"CLEARINGHOUSE_CODE\"", length = 20)
    private String clearinghouseCode;

    @ManyToOne
    @JoinColumn(name = "\"GICS_ID\"", nullable = false)
    private GicsEntity gics;

    @Column(name = "\"MONEY_LAUNDERING_FLAG\"")
    private Boolean moneyLaunderingFlag;

    @ManyToOne
    @JoinColumn(name = "\"TAX_STATUS_ID\"", nullable = false)
    private TaxStatusEntity taxStatus;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", nullable = false, length = 30)
    private String lastModifyIp;

    @Column(name = "\"TAX_EXEMP\"")
    private Boolean taxExemp;

}
```

## src/main/java/com/nubo/operations/special/espec/api/models/entity/MarketEntity.java

```java
package com.nubo.operations.special.espec.api.models.entity;

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
@Table(name = "\"MARKET\"", schema = "\"NUANBODB\"")
public class MarketEntity {

    @Id
    @Column(name = "\"MARKET_ID\"", length = 2)
    private String id;

    @Column(name = "\"DESCRIPTION\"", length = 80, nullable = false)
    private String description;

    @Column(name = "\"CATEGORY\"", length = 50, nullable = false)
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

## src/main/java/com/nubo/operations/special/espec/api/models/entity/ParticipantAccountEntity.java

```java
package com.nubo.operations.special.espec.api.models.entity;

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
    @JoinColumn(name = "\"DEPOSITORY_ID\"")
    private DepositoryEntity depository;

    @ManyToOne
    @JoinColumn(name = "\"ORIGIN_TYPE_ID\"", nullable = false)
    private TypeEntity originType;

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

## src/main/java/com/nubo/operations/special/espec/api/models/entity/ParticipantBankAccountEntity.java

```java
package com.nubo.operations.special.espec.api.models.entity;

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
@Table(name = "\"PARTICIPANT_BANK_ACCOUNT\"", schema = "\"NUANBODB\"")
public class ParticipantBankAccountEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"PARTICIPANT_BANK_ACCOUNT_ID\"", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "\"BANK_ID\"", nullable = false)
    private BankEntity bank;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID\"", nullable = false)
    private ParticipantEntity participant;

    @Column(name = "\"BANK_ACCOUNT\"", length = 30)
    private String bankAccount;

    @Column(name = "\"PRINCIPAL\"")
    private Boolean principal;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplic;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

    @Column(name = "\"BANK_BRANCH\"")
    private Long bankBranch;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"")
    private StatusEntity status;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"")
    private TypeEntity type;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"")
    private CountryEntity country;

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

    @ManyToOne
    @JoinColumn(name = "\"CURRENCY_ID\"")
    private CurrencyEntity currency;

}

```

## src/main/java/com/nubo/operations/special/espec/api/models/entity/ParticipantEntity.java

```java
package com.nubo.operations.special.espec.api.models.entity;

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
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
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
    @JoinColumn(name = "\"DEPARTMENT_ID\"")
    private DepartmentEntity department;

    @Column(name = "\"MAIN_ADDRESS\"", length = 100)
    private String mainAddress;

    @Column(name = "\"WEB_PAGE\"", length = 100)
    private String webPage;

    @Column(name = "\"PHONE_NUMBER\"", length = 20)
    private String phoneNumber;

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

    @Column(name = "\"LAST_MODIFY_USER\"")
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"")
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"")
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50)
    private String lastModifyIp;

}

```

## src/main/java/com/nubo/operations/special/espec/api/models/entity/PermissionEntity.java

```java
package com.nubo.operations.special.espec.api.models.entity;

import jakarta.persistence.*;
import lombok.*;

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

## src/main/java/com/nubo/operations/special/espec/api/models/entity/ProfileEntity.java

```java
package com.nubo.operations.special.espec.api.models.entity;

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
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

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

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "\"PROFILE_PERMISSION\"",
            schema = "\"NUANBODB\"",
            joinColumns = @JoinColumn(name = "\"PROFILE_ID\""),
            inverseJoinColumns = @JoinColumn(name = "\"PERMISSION_ID\"")
    )
    private List<PermissionEntity> permissions;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "\"PARTICIPANT_PROFILE\"",
            schema = "\"NUANBODB\"",
            joinColumns = @JoinColumn(name = "\"PROFILE_ID\""),
            inverseJoinColumns = @JoinColumn(name = "\"PARTICIPANT_ID\"")
    )
    private List<ParticipantEntity> participants;

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

## src/main/java/com/nubo/operations/special/espec/api/models/entity/ProfilePermissionEntity.java

```java
package com.nubo.operations.special.espec.api.models.entity;

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
@IdClass(ProfilePermissionId.class)
@Table(name = "\"PROFILE_PERMISSION\"", schema = "\"NUANBODB\"")
public class ProfilePermissionEntity {

    @Id
    @Column(name = "\"PROFILE_ID\"", nullable = false)
    private Long profileId;

    @Id
    @Column(name = "\"PERMISSION_ID\"", nullable = false)
    private Long permissionId;

    @ManyToOne
    @JoinColumn(name = "\"PROFILE_ID\"", insertable = false, updatable = false)
    private ProfileEntity profile;

    @ManyToOne
    @JoinColumn(name = "\"PERMISSION_ID\"", insertable = false, updatable = false)
    private PermissionEntity permission;

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

## src/main/java/com/nubo/operations/special/espec/api/models/entity/ProfilePermissionId.java

```java
package com.nubo.operations.special.espec.api.models.entity;

import java.io.Serializable;
import java.util.Objects;

public class ProfilePermissionId implements Serializable {

    private Long profileId;
    private Long permissionId;

    public ProfilePermissionId() {}

    public ProfilePermissionId(Long profileId, Long permissionId) {
        this.profileId = profileId;
        this.permissionId = permissionId;
    }

    public Long getProfileId() {
        return profileId;
    }

    public void setProfileId(Long profileId) {
        this.profileId = profileId;
    }

    public Long getPermissionId() {
        return permissionId;
    }

    public void setPermissionId(Long permissionId) {
        this.permissionId = permissionId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ProfilePermissionId that = (ProfilePermissionId) o;
        return Objects.equals(profileId, that.profileId) &&
                Objects.equals(permissionId, that.permissionId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(profileId, permissionId);
    }
}

```

## src/main/java/com/nubo/operations/special/espec/api/models/entity/ReassignmentEntity.java

```java
package com.nubo.operations.special.espec.api.models.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Builder
@Table(name = "\"REASSIGNMENT\"", schema = "\"NUANBODB\"")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ReassignmentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"REASSIGNMENT_ID\"", nullable = false)
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
    @JoinColumn(name = "\"INITIAL_ACCOUNT_ID\"", nullable = false)
    private InvestorAccountEntity initialAccount;

    @ManyToOne
    @JoinColumn(name = "\"NEW_ACCOUNT_ID\"", nullable = false)
    private InvestorAccountEntity newAccount;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @Column(name = "\"DETAIL\"", length = 255)
    private String detail;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 36)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 30)
    private String lastModifyApplic;

    @Column(name = "\"LAST_MODIFY_DATE\"")
    private LocalDate lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 30)
    private String lastModifyIp;

    @Column(name = "\"CORRECTION_NUMBER\"", length = 15)
    private String correctionNumber;
}

```

## src/main/java/com/nubo/operations/special/espec/api/models/entity/SecurityTitleEntity.java

```java
package com.nubo.operations.special.espec.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
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

    @ManyToOne
    @JoinColumn(name = "\"CFI_ID\"", nullable = false)
    private CfiEntity cfi;

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

    @Column(name= "\"ISSUER_ID\"", nullable = false)
    private Integer issuerId;

    @Column(name = "\"COUNTRY_ID\"", nullable = false)
    private Integer countryId;

    @Column(name = "\"AMOUNT_ISSUED\"", precision = 20, nullable = false)
    private BigInteger amountIssued;

    @Column(name = "\"CLASS_ID\"", length = 2, nullable = false)
    private String classId;

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

}

```

## src/main/java/com/nubo/operations/special/espec/api/models/entity/SettlementEntity.java

```java
package com.nubo.operations.special.espec.api.models.entity;

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

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Builder
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

    @ManyToOne
    @JoinColumn(name = "\"INVESTOR_ID\"", nullable = false)
    private InvestorEntity investor;

    @ManyToOne
    @JoinColumn(name = "\"INVESTOR_ACCOUNT_ID\"", nullable = false)
    private InvestorAccountEntity investorAccount;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ACCOUNT_ID\"", nullable = false)
    private ParticipantAccountEntity participantAccount;

    @ManyToOne
    @JoinColumn(name = "\"BANK_ACCOUNT_ID\"", nullable = false)
    private BankAccountEntity bankAccount;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_BANK_ACCOUNT_ID\"", nullable = false)
    private ParticipantBankAccountEntity participantBankAccount;

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

    @ManyToOne
    @JoinColumn(name = "\"TRADING_SYSTEM_ID\"")
    private TradingSystemEntity tradingSystem;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"")
    private StatusEntity status;

    @Column(name = "\"BROKERAGE_SERVICE\"", precision = 16, scale = 4)
    private BigDecimal brokerageService;

    @Column(name = "\"CUSTODIAN_ID\"")
    private Long custodianId;

    @Column(name = "\"REFERENCE\"", length = 255)
    private String reference;

    @ManyToOne
    @JoinColumn(name = "\"CUSTODIAN_STATUS_ID\"")
    private StatusEntity custodianStatus;

    @Column(name = "\"SETTLEMENT_AMOUNT\"", precision = 16, scale = 4)
    private BigDecimal settlementAmount;

    @Column(name = "\"CAPITAL_GAIN_VALUE\"", precision = 16, scale = 4)
    private BigDecimal capitalGainValue;

    @Column(name = "\"DISBURSEMENT_VALUE\"", precision = 18, scale = 4)
    private BigDecimal disbursementValue;

    @ManyToOne
    @JoinColumn(name = "\"SOURCE_QUOTE_TYPE_ID\"", nullable = false)
    private TypeEntity sourceQuoteType;

    @ManyToOne
    @JoinColumn(name = "\"FIC_ADMINISTRATOR_ID\"", nullable = false)
    private FicAdministratorEntity ficAdministrator;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 30, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 30, nullable = false)
    private String lastModifyIp;

}
```

## src/main/java/com/nubo/operations/special/espec/api/models/entity/SettlementKey.java

```java
package com.nubo.operations.special.espec.api.models.entity;

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

## src/main/java/com/nubo/operations/special/espec/api/models/entity/SettlementPendingEntity.java

```java
package com.nubo.operations.special.espec.api.models.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@IdClass(SettlementKey.class)
@Table(name = "\"SETTLEMENT_PENDING\"", schema = "\"NUANBODB\"")
public class SettlementPendingEntity {
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

    @ManyToOne
    @JoinColumn(name = "\"INVESTOR_ID\"", nullable = false)
    private InvestorEntity investor;

    @ManyToOne
    @JoinColumn(name = "\"INVESTOR_ACCOUNT_ID\"", nullable = false)
    private InvestorAccountEntity investorAccount;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ACCOUNT_ID\"", nullable = false)
    private ParticipantAccountEntity participantAccount;

    @Column(name = "\"FRACTION_QUANTITY\"", precision = 16, scale = 4)
    private BigDecimal fractionQuantity;

    @Column(name = "\"FRACTION_VOLUME\"", precision = 16, scale = 4)
    private BigDecimal fractionVolume;

    @Column(name = "\"FRACTION_VOLUME_LOCAL_PRICE\"", precision = 16, scale = 4)
    private BigDecimal fractionVolumeLocalPrice;

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

    @ManyToOne
    @JoinColumn(name = "\"BANK_ACCOUNT_ID\"")
    private BankAccountEntity bankAccount;

    @Column(name = "\"REFERENCE\"", length = 255)
    private String reference;

    @ManyToOne
    @JoinColumn(name = "\"FIC_ADMINISTRATOR_ID\"")
    private FicAdministratorEntity ficAdministrator;

    @ManyToOne
    @JoinColumn(name = "\"SOURCE_QUOTE_TYPE_ID\"", nullable = false)
    private TypeEntity sourceQuoteType;

    @Column(name = "\"DISBURSEMENT_VALUE\"", precision = 18, scale = 2)
    private BigDecimal disbursementValue;

    @Column(name = "\"CAPITAL_GAIN_VALUE\"", precision = 16, scale = 4)
    private BigDecimal capitalGainValue;

    @ManyToOne
    @JoinColumn(name = "\"DIRECT_DEPOSITOR\"")
    private ParticipantEntity directDepositor;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 30, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 30, nullable = false)
    private String lastModifyIp;
}

```

## src/main/java/com/nubo/operations/special/espec/api/models/entity/SettlementStatusHistoryEntity.java

```java
package com.nubo.operations.special.espec.api.models.entity;

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
@IdClass(SettlementStatusHistoryKey.class)
@Table(name = "\"SETTLEMENT_STATUS_HISTORY\"", schema = "\"NUANBODB\"")
public class SettlementStatusHistoryEntity {

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

    @Id
    @Column(name = "\"TIME\"", nullable = false)
    private LocalDateTime time;

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

}
```

## src/main/java/com/nubo/operations/special/espec/api/models/entity/SettlementStatusHistoryKey.java

```java
package com.nubo.operations.special.espec.api.models.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SettlementStatusHistoryKey {

    private Long trade;

    private Integer fraction;

    private String side;

    private LocalDateTime time;

}
```

## src/main/java/com/nubo/operations/special/espec/api/models/entity/SideEntity.java

```java
package com.nubo.operations.special.espec.api.models.entity;

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

## src/main/java/com/nubo/operations/special/espec/api/models/entity/SpecialSettlementEntity.java

```java
package com.nubo.operations.special.espec.api.models.entity;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@IdClass(SpecialSettlementKey.class)
@Table(name = "\"SPECIAL_SETTLEMENT\"", schema = "\"NUANBODB\"")
public class SpecialSettlementEntity {

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"SPECIAL_TRADE_ID\"", nullable = false)
    private SpecialTradeEntity specialTrade;

    @Id
    @Column(name = "\"FRACTION\"", nullable = false)
    private Integer fraction;

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"SIDE_ID\"", nullable = false)
    private SideEntity side;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"INVESTOR_ID\"", nullable = false)
    private InvestorEntity investor;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"PARTICIPANT_ACCOUNT_ID\"", nullable = false)
    private ParticipantAccountEntity participantAccount;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"INVESTOR_ACCOUNT_ID\"", nullable = false)
    private InvestorAccountEntity investorAccount;

    @Column(name = "\"FIDUCIARY_SPECIALIST\"", length = 10)
    private String fiduciarySpecialist;

    @Column(name = "\"COMMISSION_PERCENTAGE\"", precision = 6, scale = 4)
    private BigDecimal commissionPercentage;

    @Column(name = "\"FRACTION_PERCENTGE\"", precision = 16, scale = 4)
    private BigDecimal fractionPercentage;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"BANK_ACCOUNT_ID\"", nullable = false)
    private BankAccountEntity bankAccount;

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

## src/main/java/com/nubo/operations/special/espec/api/models/entity/SpecialSettlementKey.java

```java
package com.nubo.operations.special.espec.api.models.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SpecialSettlementKey implements Serializable {

    private Long specialTrade;

    private Integer fraction;

    private String side;

}
```

## src/main/java/com/nubo/operations/special/espec/api/models/entity/SpecialTradeEntity.java

```java
package com.nubo.operations.special.espec.api.models.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "\"SPECIAL_TRADE\"", schema = "\"NUANBODB\"")
public class SpecialTradeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"SPECIAL_TRADE_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"RECORD_DATE\"")
    private LocalDate recordDate;

    @Column(name = "\"SPECIAL_OPERATION_ID\"", length = 18)
    private Integer specialOperationId;

    @Column(name = "\"SETTLEMENT_DATE\"")
    private LocalDate settlementDate;

    @Column(name = "\"DAYS_TO_SETTLEMENT\"")
    private Integer daysToSettlement;

    @Column(name = "\"SPECIAL_OPERATION_NAME\"", length = 80)
    private String specialOperationName;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
    private CountryEntity country;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"", nullable = false)
    private TypeEntity type;

    @ManyToOne
    @JoinColumn(name = "\"SECURITY_ID\"", nullable = false)
    private SecurityTitleEntity securityTitle;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID\"", nullable = false)
    private DepositoryEntity depository;

    @ManyToOne
    @JoinColumn(name = "\"SIDE_ID\"", nullable = false)
    private SideEntity side;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @ManyToOne
    @JoinColumn(name = "\"DIRECT_DEPOSITOR\"")
    private ParticipantEntity directDepositor;

    @ManyToOne
    @JoinColumn(name = "\"CLIENT_SETTLEMENT_AGENT\"", nullable = false)
    private DepositoryEntity clientSettlementAgent;

    @ManyToOne
    @JoinColumn(name = "\"AFP_FUND_ID\"", nullable = false)
    private AfpFundEntity afpFund;

    @Column(name = "\"TOTAL_AMOUNT\"", precision = 16, scale = 4)
    private BigDecimal totalAmount;

    @Column(name = "\"TOTAL_AMOUNT_LOCAL\"", precision = 16, scale = 4)
    private BigDecimal totalAmountLocal;

    @ManyToOne
    @JoinColumn(name = "\"CURRENCY_ID\"", nullable = false)
    private CurrencyEntity currency;

    @ManyToOne
    @JoinColumn(name = "\"EXCHANGE_RATE_ID\"", nullable = false)
    private ExchangeRateEntity exchangeRate;

    @Column(name = "\"PRICE\"", precision = 12, scale = 6)
    private BigDecimal price;

    @Column(name = "\"QUANTITY\"", precision = 16, scale = 4)
    private BigDecimal quantity;

    @Column(name = "\"NUMBER_FOLIOS\"")
    private Integer numberFolios;

    @Column(name = "\"FRACTIONAL_MARK\"")
    private Boolean fractionalMark;

    @ManyToOne
    @JoinColumn(name = "\"ISSUANCE_MARKET_ID\"")
    private MarketEntity marketEntity;

    @Column(name = "\"LOCAL_CURRENCY_PRICE\"", precision = 16, scale = 4)
    private BigDecimal localCurrencyPrice;

    @Builder.Default
    @OneToMany(mappedBy = "specialTrade", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<TradeEntity> trades = new ArrayList<>();

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

## src/main/java/com/nubo/operations/special/espec/api/models/entity/StatusEntity.java

```java
package com.nubo.operations.special.espec.api.models.entity;

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

## src/main/java/com/nubo/operations/special/espec/api/models/entity/StatusHistoryEntity.java

```java
package com.nubo.operations.special.espec.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
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
@IdClass(StatusHistoryKey.class)
@Table(name = "\"STATUS_HISTORY\"", schema = "\"NUANBODB\"")
public class StatusHistoryEntity {

    @Id
    @Column(name = "\"TRADE_ID\"", nullable = false)
    private Long tradeId;

    @Id
    @Column(name = "\"TIME\"", nullable = false)
    private LocalDateTime time;

    @Id
    @Column(name = "\"STATUS\"", length = 1, nullable = false)
    private String status;

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

## src/main/java/com/nubo/operations/special/espec/api/models/entity/StatusHistoryKey.java

```java
package com.nubo.operations.special.espec.api.models.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class StatusHistoryKey implements Serializable {

    private Long tradeId;

    private LocalDateTime time;

    private String status;

}

```

## src/main/java/com/nubo/operations/special/espec/api/models/entity/TaxStatusEntity.java

```java
package com.nubo.operations.special.espec.api.models.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

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

## src/main/java/com/nubo/operations/special/espec/api/models/entity/TaxesEntity.java

```java
package com.nubo.operations.special.espec.api.models.entity;

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

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
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

## src/main/java/com/nubo/operations/special/espec/api/models/entity/TradeEntity.java

```java
package com.nubo.operations.special.espec.api.models.entity;

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

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

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

    @Column(name = "\"MATCH_DATE\"", nullable = false)
    private LocalDate matchDate;

    @Column(name = "\"MATCH_ID\"", precision = 19, nullable = false)
    private Long matchId;

    @Column(name = "\"CLEARING_DATE\"", nullable = false)
    private LocalDate clearingDate;

    @Column(name = "\"RETURN_CLEARING_DATE\"", nullable = false)
    private LocalDate returnClearingDate;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID\"", nullable = false)
    private DepositoryEntity depository;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
    private CountryEntity country;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"", nullable = false)
    private TypeEntity type;

    @ManyToOne
    @JoinColumn(name = "\"MARKET_ID\"", nullable = false)
    private MarketEntity market;

    @ManyToOne
    @JoinColumn(name = "\"SECURITY_ID\"", nullable = false)
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

    @Column(name = "\"ASSIGNMENT_MARK_BUY\"", nullable = false)
    private Boolean assignmentMarkBuy;

    @Column(name = "\"ASSIGNMENT_MARK_SELL\"", nullable = false)
    private Boolean assignmentMarkSell;

    @Column(name = "\"FRACTIONAL_MARK_BUY\"", nullable = false)
    private Boolean fractionalMarkBuy;

    @Column(name = "\"FRACTIONAL_MARK_SELL\"", nullable = false)
    private Boolean fractionalMarkSell;

    @Column(name = "\"ADVANCE_STATUS\"", nullable = false)
    private Integer advanceStatus;

    @Column(name = "\"EXIT_INDICATOR_SETTLEMENT\"", nullable = false)
    private Boolean exitIndicatorSettlement;

    @Column(name = "\"RETURN_INDICATOR_SETTLEMENT\"", nullable = false)
    private Boolean returnIndicatorSettlement;

    @Column(name = "\"SETTLEMENT_INDICATOR_OUTGOING\"", nullable = false)
    private Boolean settlementIndicatorOutgoing;

    @Column(name = "\"SETTLEMENT_INDICATOR_RETURN\"", nullable = false)
    private Boolean settlementIndicatorReturn;

    @Column(name = "\"RESETTLEMENT_INDICATOR_ADVANCE\"", nullable = false)
    private Boolean settlementIndicatorAdvance;

    @Column(name = "\"SALES_GUARANTEE\"", nullable = false)
    private Integer salesGuarantee;

    @Column(name = "\"PURCHASE_GUARANTEE\"", nullable = false)
    private Integer purchaseGuarantee;

    @Column(name = "\"PURCHASE_PAYMENT_INDICATOR\"", nullable = false)
    private Boolean purchasePaymentIndicator;

    @Column(name = "\"CANCELED_STATUS\"", nullable = false)
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
    private LocalDateTime matchTime;

    @Column(name = "\"OWN_POSITION_SELL\"")
    private Boolean ownPositionSell;

    @Column(name = "\"OWN_POSITION_BUY\"")
    private Boolean ownPositionBuy;

    @ManyToOne
    @JoinColumn(name = "\"CURRENCY_ID\"", nullable = false)
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

    @ManyToOne
    @JoinColumn(name = "\"SPECIAL_TRADE_ID\"")
    private SpecialTradeEntity specialTrade;

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

    @ManyToOne
    @JoinColumn(name = "\"ISSUANCE_MARKET_ID\"")
    private MarketEntity marketEntity;

    @Column(name = "\"VOLUME_DVD\"", precision = 16, scale = 4)
    private BigDecimal volumeDvd;

    @Column(name = "\"VOLUME_DVP\"", precision = 16, scale = 4)
    private BigDecimal volumeDvp;

    @Column(name = "\"VOLUME_LP\"", precision = 16, scale = 4)
    private BigDecimal volumeLp;

    @Column(name = "\"LOCAL_CURRENCY_PRICE\"", precision = 12, scale = 6)
    private BigDecimal localCurrencyPrice;

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

## src/main/java/com/nubo/operations/special/espec/api/models/entity/TradeEquityEntity.java

```java
package com.nubo.operations.special.espec.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.time.LocalDateTime;

@Data
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
    private Integer foreignBrokerBuy;

    @Column(name = "\"FOREIGN_BROKER_SELL\"", nullable = false)
    private Integer foreignBrokerSell;

    @Column(name = "\"DIRECT_DEPOSITOR_BUY\"", nullable = false)
    private Integer directDepositorBuy;

    @Column(name = "\"DIRECT_DEPOSITOR_SELL\"", nullable = false)
    private Integer directDepositorSell;

    @Column(name= "\"SOURCE_INDICATOR_BUY\"", nullable = false)
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

    @Column(name= "\"AGGRESSIVE_TIP\"")
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

}

```

## src/main/java/com/nubo/operations/special/espec/api/models/entity/TradeStatusHistoryEntity.java

```java
package com.nubo.operations.special.espec.api.models.entity;

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
@IdClass(TradeStatusHistoryKey.class)
@Table(name = "\"TRADE_STATUS_HISTORY\"", schema = "\"NUANBODB\"")
public class TradeStatusHistoryEntity {

    @Id
    @Column(name = "\"TRADE_ID\"", nullable = false)
    private Long tradeId;

    @Id
    @Column(name = "\"TIME\"", nullable = false)
    private LocalDateTime time;

    @Id
    @Column(name = "\"STATUS_ID\"", nullable = false)
    private Integer statusId;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"",  insertable = false, updatable = false)
    private StatusEntity status;

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

## src/main/java/com/nubo/operations/special/espec/api/models/entity/TradeStatusHistoryKey.java

```java
package com.nubo.operations.special.espec.api.models.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TradeStatusHistoryKey implements Serializable {

    private Long tradeId;

    private LocalDateTime time;

    private Integer statusId;

}
```

## src/main/java/com/nubo/operations/special/espec/api/models/entity/TradingSessionEntity.java

```java
package com.nubo.operations.special.espec.api.models.entity;

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
@Table(name = "\"TRADING_SESSION\"", schema = "\"NUANBODB\"")
public class TradingSessionEntity {

    @Id
    @Column(name = "\"TRADING_SESSION_ID\"", length = 2, nullable = false)
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

## src/main/java/com/nubo/operations/special/espec/api/models/entity/TradingSystemEntity.java

```java
package com.nubo.operations.special.espec.api.models.entity;

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
@Table(name = "\"TRADING_SYSTEM\"", schema = "\"NUANBODB\"")
public class TradingSystemEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"TRADING_SYSTEM_ID\"", nullable = false)
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

}

```

## src/main/java/com/nubo/operations/special/espec/api/models/entity/TypeEntity.java

```java
package com.nubo.operations.special.espec.api.models.entity;

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

## src/main/java/com/nubo/operations/special/espec/api/models/entity/UserNuboEntity.java

```java
package com.nubo.operations.special.espec.api.models.entity;

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

## src/main/java/com/nubo/operations/special/espec/api/models/enums/AllowedCountryEnum.java

```java
package com.nubo.operations.special.espec.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;
import java.util.List;

@Getter
@RequiredArgsConstructor
public enum AllowedCountryEnum {

    COLOMBIA(35L),
    PERU(37L),
    CHILE(135L);

    private final Long id;

    public static List<Long> getAllowedCountryIds() {
        return Arrays.stream(values())
                .map(AllowedCountryEnum::getId)
                .toList();
    }
}

```

## src/main/java/com/nubo/operations/special/espec/api/models/enums/CustodianStatusEnum.java

```java
package com.nubo.operations.special.espec.api.models.enums;

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
public enum CustodianStatusEnum {

    NO_CUSTODIANS(2L),
    TRANSFERRED(20L),
    PRE_MATCH(21L),
    ADMITTED(22L),
    REJECTED(23L);

    private final Long value;

    @JsonValue
    public Long getValue() {
        return value;
    }

    @JsonCreator
    public static CustodianStatusEnum fromValue(Long value) {
        return Arrays.stream(CustodianStatusEnum.values())
                .filter(status -> Objects.equals(status.value, value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown value: " + value));
    }


}


```

## src/main/java/com/nubo/operations/special/espec/api/models/enums/OperationSpecialBusinessRulesEnum.java

```java
package com.nubo.operations.special.espec.api.models.enums;

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
public enum OperationSpecialBusinessRulesEnum {

    RULE_OPERATION_SPECIAL_CORRECTION_SPECIAL_FIDUCIARY("RULE_OPERATION_SPECIAL_CORRECTION_SPECIAL_FIDUCIARY"),
    RULE_OPERATION_SPECIAL_CORRECTION_MAXIMUM_LIMIT("RULE_OPERATION_SPECIAL_CORRECTION_MAXIMUM_LIMIT"),
    RULE_OPERATION_SPECIAL_CORRECTION_ALLOWED_DAYS("RULE_OPERATION_SPECIAL_CORRECTION_ALLOWED_DAYS");

    private final String value;

    @JsonValue
    public String getValue() {
        return value;
    }

    @JsonCreator
    public static OperationSpecialBusinessRulesEnum fromValue(String value) {
        return Arrays.stream(OperationSpecialBusinessRulesEnum.values())
                .filter(status -> Objects.equals(status.value, value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown value: " + value));
    }

    @Converter(autoApply = true)
    public static class OperationBusinessRulesEnumConverter implements AttributeConverter<OperationSpecialBusinessRulesEnum, String> {

        @Override
        public String convertToDatabaseColumn(OperationSpecialBusinessRulesEnum status) {
            return status != null ? status.getValue() : null;
        }

        @Override
        public OperationSpecialBusinessRulesEnum convertToEntityAttribute(String dbData) {
            return dbData != null ? OperationSpecialBusinessRulesEnum.fromValue(dbData) : null;
        }
    }

}

```

## src/main/java/com/nubo/operations/special/espec/api/models/enums/PropertiesEnum.java

```java
package com.nubo.operations.special.espec.api.models.enums;

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
    REASSIGNMENT_SERVICE("reassignment-service"),
    CORRECTION_SERVICE("correction-service");
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

## src/main/java/com/nubo/operations/special/espec/api/models/enums/ReassignmentStatusEnum.java

```java
package com.nubo.operations.special.espec.api.models.enums;

import java.util.Arrays;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ReassignmentStatusEnum
{

    REASIGNACION_SOLICITADA(1080L, "REASIGNACION SOLICITADA"),
    REASIGNACION_RECHAZADA(1081L, "REASIGNACION RECHAZADA"),
    REASIGNACION_ACEPTADA(1082L, "REASIGNACION ACEPTADA");

    private final Long id;
    private final String value;

    @JsonValue
    public String getValue()
    {
        return value;
    }

    @JsonCreator
    public static ReassignmentStatusEnum fromValue(String value)
    {
        return Arrays.stream(ReassignmentStatusEnum.values())
                .filter(status -> status.value.equalsIgnoreCase(value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Reassignment status not found: " + value));
    }

    public static ReassignmentStatusEnum fromId(Long id)
    {
        return Arrays.stream(ReassignmentStatusEnum.values())
                .filter(status -> status.id.equals(id))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Reassignment status not found with id: " + id));
    }

    @Converter(autoApply = true)
    public static class ReassignmentStatusEnumConverter implements AttributeConverter<ReassignmentStatusEnum, String>
    {
        @Override
        public String convertToDatabaseColumn(ReassignmentStatusEnum status)
        {
            return status != null ? status.getValue() : null;
        }

        @Override
        public ReassignmentStatusEnum convertToEntityAttribute(String dbData)
        {
            return dbData != null ? ReassignmentStatusEnum.fromValue(dbData) : null;
        }
    }
}

```

## src/main/java/com/nubo/operations/special/espec/api/models/enums/SearchOperationEnum.java

```java
package com.nubo.operations.special.espec.api.models.enums;

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

    public static SearchOperationEnum fromValue(String value) {
        for (SearchOperationEnum operation : SearchOperationEnum.values()) {
            if (operation.getValue().equals(value)) {
                return operation;
            }
        }
        return null;
    }
}

```

## src/main/java/com/nubo/operations/special/espec/api/models/enums/SideEnum.java

```java
package com.nubo.operations.special.espec.api.models.enums;

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

## src/main/java/com/nubo/operations/special/espec/api/models/enums/StatusEnum.java

```java
package com.nubo.operations.special.espec.api.models.enums;

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
public enum StatusEnum {

    ASSIGNED_ASSIGNMENT(2),
    CORRECTION_ACCEPTED_ASSIGNMENT(11),
    UNCOMPLETED(14),
    FINISHED(15),
    CORRECTION_REJECTED_ASSIGNMENT(9);

    private final Integer value;

    @JsonValue
    public Integer getValue() {
        return value;
    }

    @JsonCreator
    public static StatusEnum fromValue(Integer value) {
        return Arrays.stream(StatusEnum.values())
                .filter(status -> Objects.equals(status.value, value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown value: " + value));
    }

    @Converter(autoApply = true)
    public static class StatusEnumConverter implements AttributeConverter<StatusEnum, Integer> {

        @Override
        public Integer convertToDatabaseColumn(StatusEnum status) {
            return status != null ? status.getValue() : null;
        }

        @Override
        public StatusEnum convertToEntityAttribute(Integer dbData) {
            return dbData != null ? StatusEnum.fromValue(dbData) : null;
        }
    }

}


```

## src/main/java/com/nubo/operations/special/espec/api/models/enums/TaxesEnum.java

```java
package com.nubo.operations.special.espec.api.models.enums;

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

## src/main/java/com/nubo/operations/special/espec/api/models/enums/TradingSystemEnum.java

```java
package com.nubo.operations.special.espec.api.models.enums;

import java.util.Arrays;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum TradingSystemEnum
{

    MME_RV("MME_RV", false),
    VERICLEAR("VERICLEAR", false),
    SEON("SEON", true);

    private final String value;
    private final Boolean requiresInternalApproval;

    @JsonValue
    public String getValue()
    {
        return value;
    }

    public Boolean requiresInternalApproval()
    {
        return requiresInternalApproval;
    }

    @JsonCreator
    public static TradingSystemEnum fromValue(String value)
    {
        return Arrays.stream(TradingSystemEnum.values())
                .filter(tradingSystem -> tradingSystem.value.equalsIgnoreCase(value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Trading System not found: " + value));
    }

    @Converter(autoApply = true)
    public static class TradingSystemEnumConverter implements AttributeConverter<TradingSystemEnum, String>
    {
        @Override
        public String convertToDatabaseColumn(TradingSystemEnum tradingSystem)
        {
            return tradingSystem != null ? tradingSystem.getValue() : null;
        }

        @Override
        public TradingSystemEnum convertToEntityAttribute(String dbData)
        {
            return dbData != null ? TradingSystemEnum.fromValue(dbData) : null;
        }
    }
}

```

## src/main/java/com/nubo/operations/special/espec/api/models/enums/TypeEnum.java

```java
package com.nubo.operations.special.espec.api.models.enums;

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
public enum TypeEnum
{

    JOINT_ACCOUNT(22L),
    PORTFOLIO_ACCOUNT(23L),
    STOCKS_METHOD_OF_PAYMENT(102L),
    THIRD_PARTIES_POINT_ORIGIN(120L),
    OWN_POSITION_POINT_ORIGIN(121L),
    COLLECTIVE_PORTFOLIO_POINT_ORIGIN(122L),
    MASTER_ACCOUNT(26L),
    REPO_OPERATION(61L),
    MAX_BENEFICIARIES(99L);

    private final Long value;

    @JsonValue
    public Long getValue()
    {
        return value;
    }

    @JsonCreator
    public static TypeEnum fromValue(Long value)
    {
        return Arrays.stream(TypeEnum.values())
                .filter(status -> Objects.equals(status.value, value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown value: " + value));
    }

    @Converter(autoApply = true)
    public static class TypeEnumConverter implements AttributeConverter<TypeEnum, Long>
    {

        @Override
        public Long convertToDatabaseColumn(TypeEnum status)
        {
            return status != null ? status.getValue() : null;
        }

        @Override
        public TypeEnum convertToEntityAttribute(Long dbData)
        {
            return dbData != null ? TypeEnum.fromValue(dbData) : null;
        }
    }

}

```

## src/main/java/com/nubo/operations/special/espec/api/models/enums/TypeStatusEnum.java

```java
package com.nubo.operations.special.espec.api.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;

@Getter
@RequiredArgsConstructor
public enum TypeStatusEnum {

    TERCEROS("TERCEROS"),
    POSICION_PROPIA("POSICION PROPIA"),
    CARTERA_COLECTIVA("CARTERA COLECTIVA"),
    ORIGEN_PUNTA("ORIGEN");


    private final String value;

    @JsonValue
    public String getValue() {
        return value;
    }

    @JsonCreator
    public static TypeStatusEnum fromValue(String value) {
        return Arrays.stream(TypeStatusEnum.values())
                .filter(accountType -> accountType.value.equalsIgnoreCase(value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Account type not found: " + value));
    }

    @Converter(autoApply = true)
    public static class AccountTypeEnumConverter implements AttributeConverter<TypeStatusEnum, String> {
        @Override
        public String convertToDatabaseColumn(TypeStatusEnum accountType) {
            return accountType != null ? accountType.getValue() : null;
        }

        @Override
        public TypeStatusEnum convertToEntityAttribute(String dbData) {
            return dbData != null ? TypeStatusEnum.fromValue(dbData) : null;
        }
    }
}
```

## src/main/java/com/nubo/operations/special/espec/api/models/enums/VersionApiEnum.java

```java
package com.nubo.operations.special.espec.api.models.enums;

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

## src/main/java/com/nubo/operations/special/espec/api/repository/AfpFundRepository.java

```java
package com.nubo.operations.special.espec.api.repository;

import com.nubo.operations.special.espec.api.models.entity.AfpFundEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AfpFundRepository extends JpaRepository<AfpFundEntity, Long> {
}


```

## src/main/java/com/nubo/operations/special/espec/api/repository/BankAccountRepository.java

```java
package com.nubo.operations.special.espec.api.repository;

import com.nubo.operations.special.espec.api.models.entity.BankAccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BankAccountRepository extends JpaRepository<BankAccountEntity, Long> {

    @Query("SELECT b FROM BankAccountEntity b JOIN b.investor in WHERE in.id = :investorId")
    List<BankAccountEntity> findByBankAccountByInvestorId(Long investorId);

}

```

## src/main/java/com/nubo/operations/special/espec/api/repository/CountryRepository.java

```java
package com.nubo.operations.special.espec.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.nubo.operations.special.espec.api.models.entity.CountryEntity;

public interface CountryRepository extends JpaRepository<CountryEntity, Long>,
        JpaSpecificationExecutor<CountryEntity> {
}


```

## src/main/java/com/nubo/operations/special/espec/api/repository/CurrencyRepository.java

```java
package com.nubo.operations.special.espec.api.repository;

import com.nubo.operations.special.espec.api.models.entity.CurrencyEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CurrencyRepository extends JpaRepository<CurrencyEntity, Long> {
}


```

## src/main/java/com/nubo/operations/special/espec/api/repository/DepositoryRepository.java

```java
package com.nubo.operations.special.espec.api.repository;

import com.nubo.operations.special.espec.api.models.entity.DepositoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepositoryRepository extends JpaRepository<DepositoryEntity, String> {
}


```

## src/main/java/com/nubo/operations/special/espec/api/repository/ExchangeRateRepository.java

```java
package com.nubo.operations.special.espec.api.repository;

import com.nubo.operations.special.espec.api.models.entity.ExchangeRateEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExchangeRateRepository extends JpaRepository<ExchangeRateEntity, Long> {
}


```

## src/main/java/com/nubo/operations/special/espec/api/repository/HolidayRepository.java

```java
package com.nubo.operations.special.espec.api.repository;

import com.nubo.operations.special.espec.api.models.entity.HolidayEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;

public interface HolidayRepository extends JpaRepository<HolidayEntity, Long> {

    @Query("""
           select h.holidayDate
             from HolidayEntity h
            where h.country.id = :countryId
              and h.holidayDate between :fromInclusive and :toInclusive
           """)
    List<LocalDate> findHolidayDatesInRange(Long countryId,
                                            LocalDate fromInclusive,
                                            LocalDate toInclusive);
}

```

## src/main/java/com/nubo/operations/special/espec/api/repository/InvestorAccountRepository.java

```java
package com.nubo.operations.special.espec.api.repository;

import com.nubo.operations.special.espec.api.models.entity.InvestorAccountEntity;
import com.nubo.operations.special.espec.api.models.entity.ParticipantEntity;
import com.nubo.operations.special.espec.api.models.entity.TypeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface InvestorAccountRepository extends JpaRepository<InvestorAccountEntity, Long> {

    Optional<InvestorAccountEntity> findByAccountNumber(String accountNumber);

    @Query("""
        SELECT b FROM InvestorAccountEntity b
        WHERE b.accountNumber = :accountNumber
        AND b.investor.documentNumber = :documentNumber
        AND b.originType.id = :originTypeId
        """)
    Optional<InvestorAccountEntity> findByAccountNumberAndInvestorDocumentNumberAndOriginTypeId(
            String accountNumber,
            String documentNumber,
            Long originTypeId
    );

    @Query("""
        SELECT b FROM InvestorAccountEntity b
        WHERE b.accountNumber = :accountNumber
        AND b.investor.documentNumber <> :documentNumber
        AND b.originType.id = :originTypeId
        """)
    Optional<InvestorAccountEntity> findByAccountNumberAndInvestorDocumentNumberNotAndOriginTypeId(
            String accountNumber,
            String documentNumber,
            Long originTypeId
    );

}

```

## src/main/java/com/nubo/operations/special/espec/api/repository/InvestorRepository.java

```java
package com.nubo.operations.special.espec.api.repository;

import com.nubo.operations.special.espec.api.models.entity.InvestorEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvestorRepository extends JpaRepository<InvestorEntity, Long> {
}

```

## src/main/java/com/nubo/operations/special/espec/api/repository/MarketRepository.java

```java
package com.nubo.operations.special.espec.api.repository;

import com.nubo.operations.special.espec.api.models.entity.MarketEntity;
import com.nubo.operations.special.espec.api.models.entity.ParticipantEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MarketRepository extends JpaRepository<MarketEntity, String> {
}


```

## src/main/java/com/nubo/operations/special/espec/api/repository/ParticipantAccountRepository.java

```java
package com.nubo.operations.special.espec.api.repository;

import com.nubo.operations.special.espec.api.models.entity.ParticipantAccountEntity;
import com.nubo.operations.special.espec.api.models.entity.ParticipantEntity;
import com.nubo.operations.special.espec.api.models.entity.TypeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ParticipantAccountRepository extends JpaRepository<ParticipantAccountEntity, Long> {

    Optional<ParticipantAccountEntity> findByAccountNumber(String accountNumber);

    Optional<ParticipantAccountEntity> findByAccountNumberAndParticipantAndOriginType(String accountNumber, ParticipantEntity participant, TypeEntity originType);

    Optional<ParticipantAccountEntity> findByAccountNumberAndParticipantNotAndOriginType(
            String accountNumber,
            ParticipantEntity participant,
            TypeEntity originType
    );

    @Query("""
            SELECT b FROM ParticipantAccountEntity b
            WHERE b.depository.id = '9'
            AND b.participant.id = :participantId
            """)
    List<ParticipantAccountEntity> findAllByParticipantId(Long participantId);

}

```

## src/main/java/com/nubo/operations/special/espec/api/repository/ParticipantBankAccountRepository.java

```java
package com.nubo.operations.special.espec.api.repository;

import com.nubo.operations.special.espec.api.models.entity.ParticipantBankAccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ParticipantBankAccountRepository extends JpaRepository<ParticipantBankAccountEntity, Long> {
    @Query("SELECT p FROM ParticipantBankAccountEntity p JOIN p.participant in WHERE p.id = :participantId")
    List<ParticipantBankAccountEntity> findByParticipantBankAccountByParticipantId(Long participantId);

    @Query("SELECT p FROM ParticipantBankAccountEntity p WHERE p.bankAccount = :bankAccount")
    List<ParticipantBankAccountEntity> findByBankAccount(@Param("bankAccount") String bankAccount);

    @Query("SELECT p FROM ParticipantBankAccountEntity p WHERE p.country.id = 37 AND p.participant.id = :participantId")
    List<ParticipantBankAccountEntity> findAllByParticipantId(Long participantId);
}

```

## src/main/java/com/nubo/operations/special/espec/api/repository/ParticipantRepository.java

```java
package com.nubo.operations.special.espec.api.repository;

import com.nubo.operations.special.espec.api.models.entity.ParticipantEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParticipantRepository extends JpaRepository<ParticipantEntity, Long> {
}


```

## src/main/java/com/nubo/operations/special/espec/api/repository/PermissionRepository.java

```java
package com.nubo.operations.special.espec.api.repository;

import com.nubo.operations.special.espec.api.models.entity.PermissionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface PermissionRepository extends JpaRepository<PermissionEntity, Long> {

    @Query("SELECT p FROM PermissionEntity p JOIN p.profiles pr " +
            "WHERE p.id = :permissionId")
    Optional<List<PermissionEntity>> findByProfileId(Long permissionId);

}

```

## src/main/java/com/nubo/operations/special/espec/api/repository/ProfilePermissionRepository.java

```java
package com.nubo.operations.special.espec.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.nubo.operations.special.espec.api.models.dto.response.UserPermissionOutDto;
import com.nubo.operations.special.espec.api.models.entity.ProfilePermissionEntity;
import com.nubo.operations.special.espec.api.models.entity.ProfilePermissionId;

public interface ProfilePermissionRepository extends JpaRepository<ProfilePermissionEntity, ProfilePermissionId>
{

    @Query("SELECT new com.nubo.operations.special.espec.api.models.dto.response." +
            "UserPermissionOutDto(p.profileId, p.permissionId) " +
            "FROM ProfilePermissionEntity p " +
            "WHERE p.profile.id = :userId AND p.permission.id = :permissionId")
    UserPermissionOutDto findUserPermisionByUserAndPermissionId(Long permissionId, Long userId);

}

```

## src/main/java/com/nubo/operations/special/espec/api/repository/ReassignmentRepository.java

```java
package com.nubo.operations.special.espec.api.repository;

import com.nubo.operations.special.espec.api.models.entity.ReassignmentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface ReassignmentRepository extends JpaRepository<ReassignmentEntity, Long>, JpaSpecificationExecutor<ReassignmentEntity> {
}


```

## src/main/java/com/nubo/operations/special/espec/api/repository/SecurityTitleRepository.java

```java
package com.nubo.operations.special.espec.api.repository;

import com.nubo.operations.special.espec.api.models.entity.SecurityTitleEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SecurityTitleRepository extends JpaRepository<SecurityTitleEntity, Long> {
}

```

## src/main/java/com/nubo/operations/special/espec/api/repository/SettlementPendingRepository.java

```java
package com.nubo.operations.special.espec.api.repository;

import com.nubo.operations.special.espec.api.models.entity.SettlementKey;
import com.nubo.operations.special.espec.api.models.entity.SettlementPendingEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SettlementPendingRepository extends JpaRepository<SettlementPendingEntity, SettlementKey>,
        JpaSpecificationExecutor<SettlementPendingEntity> {

    @Query("SELECT s FROM SettlementPendingEntity s " +
            "JOIN s.trade t " +
            "JOIN s.side si " +
            "JOIN s.status st " +
            "WHERE t.id = :tradeId " +
            "AND si.id = :sideId " +
            "AND st.id = :statusId")
    List<SettlementPendingEntity> findByTradeIdAndSideId(Long tradeId, String sideId, Long statusId);

}

```

## src/main/java/com/nubo/operations/special/espec/api/repository/SettlementRepository.java

```java
package com.nubo.operations.special.espec.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.nubo.operations.special.espec.api.models.entity.SettlementEntity;
import com.nubo.operations.special.espec.api.models.entity.SettlementKey;

public interface SettlementRepository extends JpaRepository<SettlementEntity, SettlementKey>,
        JpaSpecificationExecutor<SettlementEntity>
{

    @Query("SELECT s FROM SettlementEntity s " +
            "JOIN s.trade t " +
            "JOIN t.specialTrade st " +
            "WHERE st.specialOperationId = :specialOperationId")
    List<SettlementEntity> findBySpecialOperationId(@Param("specialOperationId") String specialOperationId);

    @Query("SELECT s FROM SettlementEntity s " +
            "WHERE s.trade.id = :tradeId " +
            "AND s.side.id = :sideId")
    List<SettlementEntity> findByTradeIdAndSideId(@Param("tradeId") Long tradeId, @Param("sideId") String sideId);

    @Query("SELECT s FROM SettlementEntity s " +
            "WHERE s.trade.id = :tradeId")
    List<SettlementEntity> findByTradeId(@Param("tradeId") Long tradeId);

}

```

## src/main/java/com/nubo/operations/special/espec/api/repository/SettlementStatusHistoryRepository.java

```java
package com.nubo.operations.special.espec.api.repository;

import com.nubo.operations.special.espec.api.models.entity.SettlementStatusHistoryEntity;
import com.nubo.operations.special.espec.api.models.entity.SettlementStatusHistoryKey;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SettlementStatusHistoryRepository extends JpaRepository<SettlementStatusHistoryEntity, SettlementStatusHistoryKey> {
}
```

## src/main/java/com/nubo/operations/special/espec/api/repository/SideRepository.java

```java
package com.nubo.operations.special.espec.api.repository;

import com.nubo.operations.special.espec.api.models.entity.SideEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SideRepository extends JpaRepository<SideEntity, String> {
}


```

## src/main/java/com/nubo/operations/special/espec/api/repository/SpecialSettlementRepository.java

```java
package com.nubo.operations.special.espec.api.repository;

import com.nubo.operations.special.espec.api.models.entity.SpecialSettlementEntity;
import com.nubo.operations.special.espec.api.models.entity.SpecialSettlementKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface SpecialSettlementRepository extends JpaRepository<SpecialSettlementEntity, SpecialSettlementKey>,
        JpaSpecificationExecutor<SpecialSettlementEntity> {
}


```

## src/main/java/com/nubo/operations/special/espec/api/repository/SpecialTradeRepository.java

```java
package com.nubo.operations.special.espec.api.repository;

import com.nubo.operations.special.espec.api.models.entity.SpecialTradeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface SpecialTradeRepository extends JpaRepository<SpecialTradeEntity, Long>,
        JpaSpecificationExecutor<SpecialTradeEntity> {
}


```

## src/main/java/com/nubo/operations/special/espec/api/repository/StatusRepository.java

```java
package com.nubo.operations.special.espec.api.repository;

import com.nubo.operations.special.espec.api.models.entity.StatusEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface StatusRepository extends JpaRepository<StatusEntity, Long>,
        JpaSpecificationExecutor<StatusEntity> {
}


```

## src/main/java/com/nubo/operations/special/espec/api/repository/TaxesRepository.java

```java
package com.nubo.operations.special.espec.api.repository;

import com.nubo.operations.special.espec.api.models.entity.TaxesEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface TaxesRepository extends JpaRepository<TaxesEntity, Long> {

    @Query("SELECT t FROM TaxesEntity t JOIN t.country c " +
            "WHERE c.id = :countryId AND t.code = :code")
    Optional<TaxesEntity> findByCountryIdAndCode(Long countryId, String code);

}

```

## src/main/java/com/nubo/operations/special/espec/api/repository/TradeRepository.java

```java
package com.nubo.operations.special.espec.api.repository;

import com.nubo.operations.special.espec.api.models.entity.SpecialTradeEntity;
import com.nubo.operations.special.espec.api.models.entity.TradeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;

public interface TradeRepository extends JpaRepository<TradeEntity, Long>, JpaSpecificationExecutor<TradeEntity> {


    boolean existsBySpecialTradeAndCustodianStatusIdIn(SpecialTradeEntity specialTrade, List<Long> statusIds);

    @Modifying
    @Query("UPDATE TradeEntity t SET t.clearingDate = :clearingDate WHERE t.specialTrade.id = :specialTradeId")
    int updateAllClearingDateTradesBySpecialTrade(Long specialTradeId, LocalDate clearingDate);

    @Query("SELECT t FROM TradeEntity t " +
            "WHERE t.specialTrade.id = :specialTradeId")
    List<TradeEntity> findAllTradesBySpecialTrade(Long specialTradeId);

}

```

## src/main/java/com/nubo/operations/special/espec/api/repository/TradeStatusHistoryRepository.java

```java
package com.nubo.operations.special.espec.api.repository;

import com.nubo.operations.special.espec.api.models.entity.TradeStatusHistoryEntity;
import com.nubo.operations.special.espec.api.models.entity.TradeStatusHistoryKey;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TradeStatusHistoryRepository extends JpaRepository<TradeStatusHistoryEntity, TradeStatusHistoryKey> {
}
```

## src/main/java/com/nubo/operations/special/espec/api/repository/TypeRepository.java

```java
package com.nubo.operations.special.espec.api.repository;

import com.nubo.operations.special.espec.api.models.entity.TypeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TypeRepository extends JpaRepository<TypeEntity, Long> {
}

```

## src/main/java/com/nubo/operations/special/espec/api/repository/UserNuboRepository.java

```java
package com.nubo.operations.special.espec.api.repository;

import com.nubo.operations.special.espec.api.models.entity.UserNuboEntity;
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

## src/main/java/com/nubo/operations/special/espec/api/service/AfpFundService.java

```java
package com.nubo.operations.special.espec.api.service;

import com.nubo.operations.special.espec.api.models.dto.response.AfpFundOutDto;

import java.util.List;

public interface AfpFundService {

    List<AfpFundOutDto> findAllAfpFund();
}

```

## src/main/java/com/nubo/operations/special/espec/api/service/CalculationService.java

```java
package com.nubo.operations.special.espec.api.service;

import com.nubo.operations.special.espec.api.models.dto.request.CalculationInDto;
import com.nubo.operations.special.espec.api.models.dto.request.CalculationIvaInDto;
import com.nubo.operations.special.espec.api.models.dto.response.CalculationOutDto;

public interface CalculationService {

    CalculationOutDto calculationSettlementWithIva(CalculationIvaInDto calculationIvaInDto);

    CalculationOutDto calculationSettlementByCountryId(Long countryId, CalculationInDto calculationInDto);

}

```

## src/main/java/com/nubo/operations/special/espec/api/service/CurrencyService.java

```java
package com.nubo.operations.special.espec.api.service;

import com.nubo.operations.special.espec.api.models.dto.response.CurrencyOutDto;

import java.util.List;

public interface CurrencyService {
    List<CurrencyOutDto> findAllCurrency();
}

```

## src/main/java/com/nubo/operations/special/espec/api/service/DepositoryService.java

```java
package com.nubo.operations.special.espec.api.service;

import com.nubo.operations.special.espec.api.models.dto.response.DepositoryOutDto;

import java.util.List;

public interface DepositoryService {

    List<DepositoryOutDto> findAllDepository();
}

```

## src/main/java/com/nubo/operations/special/espec/api/service/ExchangeRateService.java

```java
package com.nubo.operations.special.espec.api.service;

import com.nubo.operations.special.espec.api.models.dto.response.ExchangeRateOutDto;

import java.util.List;

public interface ExchangeRateService {
    List<ExchangeRateOutDto> findAllExchangeRate();
}

```

## src/main/java/com/nubo/operations/special/espec/api/service/FractionationDepositService.java

```java
package com.nubo.operations.special.espec.api.service;

import com.nubo.operations.special.espec.api.models.dto.response.SettlementOutDto;

import java.util.List;

public interface FractionationDepositService {

    List<SettlementOutDto> approveAssignment(Long tradeId, String sideId);

    List<SettlementOutDto> rejectAssignment(Long tradeId, String sideId);

}

```

## src/main/java/com/nubo/operations/special/espec/api/service/FractionationPendingService.java

```java
package com.nubo.operations.special.espec.api.service;

import com.nubo.operations.special.espec.api.client.operation.special.fractionation.dto.request.AssignmentInDto;
import com.nubo.operations.special.espec.api.client.operation.special.fractionation.dto.request.FractionationPendingInDto;
import com.nubo.operations.special.espec.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.ValidationSettlementOutDto;

import java.util.List;

public interface FractionationPendingService {

    List<SettlementOutDto> createFractionsPending(Long tradeId, String sideId, List<FractionationPendingInDto> fractionationPendingInDtoList);

    List<SettlementOutDto> updateAssignmentPending(Long tradeId, String sideId, List<AssignmentInDto> assignmentInDtoList);

    PageResponseOutDto<ValidationSettlementOutDto> validateAssignment(Integer page, Integer size, Long tradeId, String sideId);

}

```

## src/main/java/com/nubo/operations/special/espec/api/service/FractionationService.java

```java
package com.nubo.operations.special.espec.api.service;

import com.nubo.operations.special.espec.api.client.operation.special.fractionation.dto.request.AssignmentInDto;
import com.nubo.operations.special.espec.api.client.operation.special.fractionation.dto.request.FractionationInDto;
import com.nubo.operations.special.espec.api.models.dto.response.SettlementOutDto;

import java.util.List;

public interface FractionationService {

    List<SettlementOutDto> createFractions(Long tradeId, String sideId, List<FractionationInDto> fractionationInDtoList);

    List<SettlementOutDto> updateAssignment(Long tradeId, String sideId, List<AssignmentInDto> assignmentInDtoList);

}

```

## src/main/java/com/nubo/operations/special/espec/api/service/ParametersService.java

```java
package com.nubo.operations.special.espec.api.service;

import com.nubo.operations.special.espec.api.models.dto.response.CountryOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.SimplySpecialTradeOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.StatusOutDto;

public interface ParametersService {

    PageResponseOutDto<SimplySpecialTradeOutDto> findSpecialTradeFilters(String searchValue,
                                                                          int page,
                                                                          int size,
                                                                          String sort,
                                                                          String order);

    PageResponseOutDto<StatusOutDto> findStatusByCategory(String category,
                                                          int page,
                                                          int size,
                                                          String sort,
                                                          String order);

    PageResponseOutDto<CountryOutDto> findAllowedCountries(int page,
                                                           int size,
                                                           String sort,
                                                           String order);

}

```

## src/main/java/com/nubo/operations/special/espec/api/service/ReassignmentService.java

```java
package com.nubo.operations.special.espec.api.service;

import java.util.List;

import org.springframework.data.domain.Pageable;

import com.nubo.operations.special.espec.api.models.dto.request.CorrectionSetInDto;
import com.nubo.operations.special.espec.api.models.dto.request.ExtendedReassignmentSetInDto;
import com.nubo.operations.special.espec.api.models.dto.request.ReassignmentSetInDto;
import com.nubo.operations.special.espec.api.models.dto.response.ExtendedReassignmentOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.ParticipantBankAccountOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.ReassignmentOutDto;
import com.nubo.operations.special.espec.api.models.entity.ReassignmentEntity;

public interface ReassignmentService
{

    PageResponseOutDto<ReassignmentOutDto> findAllReassignment(Pageable pageable, Long specialTradeId);

    PageResponseOutDto<ReassignmentOutDto> findAllReassignmentBySide(Pageable pageable, Long specialTradeId, String sideId);

    List<ReassignmentEntity> setReassignment(ReassignmentSetInDto reassignmentSetInDto);

    List<ReassignmentEntity> correctReassignment(CorrectionSetInDto correctionSetInDto);

    Boolean validateAccountTitles(String accountTitle);

    List<ParticipantBankAccountOutDto> validateCashAccount(String cashAccount);

    ExtendedReassignmentOutDto getReassignmentData(Long tradeId, String sideId);

    ExtendedReassignmentOutDto executeReassignment(ExtendedReassignmentSetInDto extendedReassignmentSetInDto);

}

```

## src/main/java/com/nubo/operations/special/espec/api/service/SpecialSettlementService.java

```java
package com.nubo.operations.special.espec.api.service;

import java.util.List;

import com.nubo.operations.special.espec.api.client.operation.special.fractionation.dto.request.AssignmentSpecialSettlementInDto;
import com.nubo.operations.special.espec.api.client.operation.special.fractionation.dto.request.FractionSpecialSettlementInDto;
import com.nubo.operations.special.espec.api.models.dto.request.SpecialSettlementInDto;
import com.nubo.operations.special.espec.api.models.dto.request.SpecialSettlementParamInDto;
import com.nubo.operations.special.espec.api.models.dto.request.SpecialSettlementUpdateInDto;
import com.nubo.operations.special.espec.api.models.dto.response.FractionAccountSpecialSettlementOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.SpecialSettlementOutDto;

public interface SpecialSettlementService {

    PageResponseOutDto<SpecialSettlementOutDto> findAllSpecialSettlement(SpecialSettlementParamInDto specialSettlementParamInDto,
                                                                         int page,
                                                                         int size,
                                                                         String sort,
                                                                         String order,
                                                                         boolean all);

    PageResponseOutDto<SpecialSettlementOutDto> findAllSpecialSettlementDynamic(String fieldName, String fieldValue, String operation,
                                                                                Long specialTradeId, Integer fraction, String sideId,
                                                                                Long investorId, Long investorAccountId, Long participantAccountId, Long bankAccountId,
                                                                                int page,
                                                                                int size,
                                                                                String sort,
                                                                                String order,
                                                                                boolean all);

    SpecialSettlementOutDto findSpecialSettlementById(Long specialTradeId, Integer fraction, String sideId);

    SpecialSettlementOutDto createSpecialSettlement(SpecialSettlementInDto specialSettlementInDto);

    SpecialSettlementOutDto updateSpecialSettlement(SpecialSettlementUpdateInDto specialSettlementUpdateInDto,
                                                    Long specialTradeId, Integer fraction, String sideId);

    List<SpecialSettlementOutDto> createFractions(Long specialTradeId,
                                                  List<FractionSpecialSettlementInDto> fractionSpecialSettlementInDtoList);

    List<SpecialSettlementOutDto> updateAssignment(Long specialTradeId,
                                                   List<AssignmentSpecialSettlementInDto> assignmentSpecialSettlementInDtoList);

    FractionAccountSpecialSettlementOutDto validateAccountFraction(String accountNumber, Long specialTradeId);

}
```

## src/main/java/com/nubo/operations/special/espec/api/service/SpecialTradeService.java

```java
package com.nubo.operations.special.espec.api.service;

import java.time.LocalDate;

import com.nubo.operations.special.espec.api.models.dto.request.SpecialTradeInDto;
import com.nubo.operations.special.espec.api.models.dto.request.SpecialTradeParamInDto;
import com.nubo.operations.special.espec.api.models.dto.request.SpecialTradeUpdateInDto;
import com.nubo.operations.special.espec.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.SimplySpecialTradeOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.SpecialTradeOutDto;

import java.time.LocalDate;

public interface SpecialTradeService {

    PageResponseOutDto<SpecialTradeOutDto> findAllSpecialTrade(SpecialTradeParamInDto specialTradeParamInDto,
                                                               int page,
                                                               int size,
                                                               String sort,
                                                               String order,
                                                               boolean all);

    SpecialTradeOutDto findSpecialTradeById(Long specialTradeId);

    SpecialTradeOutDto createSpecialTrade(SpecialTradeInDto specialTradeInDto);

    SpecialTradeOutDto updateSpecialTrade(SpecialTradeUpdateInDto specialTradeUpdateInDto, Long specialTradeId);

    PageResponseOutDto<SpecialTradeOutDto> findAllSpecialTradeDynamic(
            String fieldName,
            String fieldValue,
            String operation,
            Long id,
            Long statusId,
            Long participantId,
            Long typeId,
            Long countryId,
            String specialOperationName,
            LocalDate recordDate,
            int page,
            int size,
            String sort,
            String order,
            boolean all);

    PageResponseOutDto<SimplySpecialTradeOutDto> findAllSimplySpecialTrade(SpecialTradeParamInDto specialTradeParamInDto,
                                                                     int page,
                                                                     int size,
                                                                     String sort,
                                                                     String order,
                                                                     boolean all);

}

```

## src/main/java/com/nubo/operations/special/espec/api/service/StatusService.java

```java
package com.nubo.operations.special.espec.api.service;

import com.nubo.operations.special.espec.api.models.dto.request.StatusInDto;
import com.nubo.operations.special.espec.api.models.dto.request.StatusUpdateInDto;
import com.nubo.operations.special.espec.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.StatusOutDto;
import org.springframework.data.domain.Pageable;

public interface StatusService {

    PageResponseOutDto<StatusOutDto> findAllStatus(Pageable pageable,
                                                               StatusInDto statusParamInDto);

    StatusOutDto findStatusById(Long statusId);

    StatusOutDto createStatus(StatusInDto statusInDto);

    StatusOutDto updateStatus(StatusUpdateInDto statusUpdateInDto, Long statusId);

}

```

## src/main/java/com/nubo/operations/special/espec/api/service/ValidateAllowedDaysServices.java

```java
package com.nubo.operations.special.espec.api.service;

public interface ValidateAllowedDaysServices {

    Boolean validateDaysBeforeOperation(Long tradeId, Long countryId);

    Boolean validateDaysAfterOperation(Long tradeId, Long countryId);

}

```

## src/main/java/com/nubo/operations/special/espec/api/service/ValidateFractionService.java

```java
package com.nubo.operations.special.espec.api.service;

import com.nubo.operations.special.espec.api.client.operation.special.rules.dto.request.FractionRuleInDto;
import com.nubo.operations.special.espec.api.models.dto.response.*;
import com.nubo.operations.special.espec.api.models.entity.ParticipantBankAccountEntity;
import org.springframework.data.domain.Pageable;

import java.math.BigDecimal;
import java.util.List;

public interface ValidateFractionService {

    FractionAccountOutDto validateAccountFraction(String accountNumber, Long tradeId, String sideId, Long originId);

    void validateBankAccountFraction(Long tradeId);

    void validateCommissionParticipantAccountFraction(String accountNumber, BigDecimal commissionPercentage);

    Boolean validateQuantityFractionsCorrection(Long tradeId, List<FractionRuleInDto> fractionRuleInDtoList);

    Boolean validateRangeQuantityFractionsCorrection(Long tradeId, List<FractionRuleInDto> fractionRuleInDtoList);

    Boolean validateMaximumLimitFractionsCorrection(List<FractionRuleInDto> fractionRuleInDtoList);

    ParticipantOutDto validateDirectDepositorFractionCorrection(Long tradeId, String sideId);

    IsPossibleCreateFractionDto validateCreateFractionAmount(Long tradeId, String sideId);

    PageResponseOutDto<ParticipantBankAccountOutDto> validateCudAccountFraction(Long tradeId, String sideId, String accountNumber, Pageable pageable);

}

```

## src/main/java/com/nubo/operations/special/espec/api/service/ValidateUserPermissionService.java

```java
package com.nubo.operations.special.espec.api.service;

import com.nubo.operations.special.espec.api.models.dto.response.UserPermissionOutDto;

public interface ValidateUserPermissionService {

    UserPermissionOutDto validateUserPermission(Long permissionId, Long userId);
}

```

## src/main/java/com/nubo/operations/special/espec/api/service/impl/AfpFundServiceImpl.java

```java
package com.nubo.operations.special.espec.api.service.impl;

import com.nubo.operations.special.espec.api.application.properties.PropertiesContext;
import com.nubo.operations.special.espec.api.exception.ServiceException;
import com.nubo.operations.special.espec.api.exception.error.ErrorCode;
import com.nubo.operations.special.espec.api.helpers.MapperUtil;
import com.nubo.operations.special.espec.api.models.dto.request.AfpFundInDto;
import com.nubo.operations.special.espec.api.models.dto.response.AfpFundOutDto;
import com.nubo.operations.special.espec.api.models.enums.VersionApiEnum;
import com.nubo.operations.special.espec.api.repository.AfpFundRepository;
import com.nubo.operations.special.espec.api.service.AfpFundService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class AfpFundServiceImpl implements AfpFundService {

    private final AfpFundRepository afpFundRepository;

    public List<AfpFundOutDto> findAllAfpFund(){
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllAfpFundV1();
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<AfpFundOutDto> findAllAfpFundV1(){
        log.info("Start method findAllAfpFundV1");

        List<AfpFundOutDto> afpFundOutDto = afpFundRepository.findAll().stream()
                .map(MapperUtil::afpFundEntityToAfpFundOutDto)
                .toList();

        log.info("End method findAllAfpFundV1, number of afpFund found: {}", afpFundOutDto.size());

        return afpFundOutDto;
    }
}

```

## src/main/java/com/nubo/operations/special/espec/api/service/impl/CalculationServiceImpl.java

```java
package com.nubo.operations.special.espec.api.service.impl;

import com.nubo.operations.special.espec.api.application.properties.PropertiesContext;
import com.nubo.operations.special.espec.api.client.operation.special.calculation.model.dto.request.SettleAccountsInDto;
import com.nubo.operations.special.espec.api.client.operation.special.calculation.model.dto.response.SettleAccountsOutDto;
import com.nubo.operations.special.espec.api.client.operation.special.calculation.service.SpecialOperationCalculationClient;
import com.nubo.operations.special.espec.api.exception.ServiceException;
import com.nubo.operations.special.espec.api.exception.error.ErrorCode;
import com.nubo.operations.special.espec.api.helpers.MapperUtil;
import com.nubo.operations.special.espec.api.models.dto.request.CalculationInDto;
import com.nubo.operations.special.espec.api.models.dto.request.CalculationIvaInDto;
import com.nubo.operations.special.espec.api.models.dto.response.CalculationOutDto;
import com.nubo.operations.special.espec.api.models.entity.SideEntity;
import com.nubo.operations.special.espec.api.models.entity.TaxesEntity;
import com.nubo.operations.special.espec.api.models.entity.TradeEntity;
import com.nubo.operations.special.espec.api.models.enums.TaxesEnum;
import com.nubo.operations.special.espec.api.models.enums.VersionApiEnum;
import com.nubo.operations.special.espec.api.repository.SideRepository;
import com.nubo.operations.special.espec.api.repository.TaxesRepository;
import com.nubo.operations.special.espec.api.repository.TradeRepository;
import com.nubo.operations.special.espec.api.service.CalculationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class CalculationServiceImpl implements CalculationService {

    private final TradeRepository tradeRepository;
    private final TaxesRepository taxesRepository;
    private final SideRepository sideRepository;
    private final SpecialOperationCalculationClient specialOperationCalculationClient;

    @Override
    public CalculationOutDto calculationSettlementWithIva(CalculationIvaInDto calculationIvaInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return calculationSettlementWithIvaV1(calculationIvaInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private CalculationOutDto calculationSettlementWithIvaV1(CalculationIvaInDto calculationIvaInDto) {
        log.info("Start method calculationSettlementWithIvaV1, calculationIvaInDto -> {}", calculationIvaInDto);

        SideEntity sideEntity = validateSide(calculationIvaInDto.getSideId());

        SettleAccountsInDto settleAccountsInDto = SettleAccountsInDto.builder()
                .quantity(calculationIvaInDto.getQuantity())
                .price(calculationIvaInDto.getPrice())
                .commission(calculationIvaInDto.getCommission())
                .valTax(calculationIvaInDto.getValTax())
                .sideId(sideEntity.getId())
                .build();

        SettleAccountsOutDto settleAccountsOutDto = specialOperationCalculationClient.getSettleAccounts(settleAccountsInDto);

        CalculationOutDto calculationOutDto = MapperUtil.settleAccountsOutDtoToCalculationOutDto(settleAccountsOutDto);
        calculationOutDto.setValTax(calculationIvaInDto.getValTax());

        log.info("End method calculationSettlementWithIvaV1, calculationOutDto -> {}", calculationOutDto);

        return calculationOutDto;
    }

    @Override
    public CalculationOutDto calculationSettlementByCountryId(Long countryId, CalculationInDto calculationInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return calculationSettlementByCountryIdV1(countryId, calculationInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private CalculationOutDto calculationSettlementByCountryIdV1(Long countryId, CalculationInDto calculationInDto) {
        log.info("Start method calculationSettlementByCountryIdV1, countryId -> {}, calculationInDto -> {}", countryId,
                calculationInDto);

        SideEntity sideEntity = validateSide(calculationInDto.getSideId());

        TaxesEntity taxesEntity = taxesRepository.findByCountryIdAndCode(countryId, TaxesEnum.IVA.getValue())
                .orElseThrow(() -> new ServiceException(ErrorCode.TAXES_NOT_FOUND, HttpStatus.NOT_FOUND));

        SettleAccountsInDto settleAccountsInDto = SettleAccountsInDto.builder()
                .quantity(calculationInDto.getQuantity())
                .price(calculationInDto.getPrice())
                .commission(calculationInDto.getCommission())
                .valTax(taxesEntity.getValue())
                .sideId(sideEntity.getId())
                .build();

        SettleAccountsOutDto settleAccountsOutDto = specialOperationCalculationClient.getSettleAccounts(settleAccountsInDto);

        CalculationOutDto calculationOutDto = MapperUtil.settleAccountsOutDtoToCalculationOutDto(settleAccountsOutDto);
        calculationOutDto.setValTax(taxesEntity.getValue());

        log.info("End method calculationSettlementByCountryIdV1, calculationOutDto -> {}", calculationOutDto);

        return calculationOutDto;
    }

    private SideEntity validateSide(String sideId) {
        return sideRepository.findById(sideId)
                .orElseThrow(() -> new ServiceException(ErrorCode.SIDE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private TradeEntity validateTrade(Long tradeId) {
        return tradeRepository.findById(tradeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

}

```

## src/main/java/com/nubo/operations/special/espec/api/service/impl/CurrencyServiceImpl.java

```java
package com.nubo.operations.special.espec.api.service.impl;

import com.nubo.operations.special.espec.api.application.properties.PropertiesContext;
import com.nubo.operations.special.espec.api.exception.ServiceException;
import com.nubo.operations.special.espec.api.exception.error.ErrorCode;
import com.nubo.operations.special.espec.api.helpers.MapperUtil;
import com.nubo.operations.special.espec.api.models.dto.request.CurrencyInDto;
import com.nubo.operations.special.espec.api.models.dto.response.CurrencyOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.CurrencyOutDto;
import com.nubo.operations.special.espec.api.models.enums.VersionApiEnum;
import com.nubo.operations.special.espec.api.repository.CurrencyRepository;
import com.nubo.operations.special.espec.api.repository.ExchangeRateRepository;
import com.nubo.operations.special.espec.api.service.CurrencyService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class CurrencyServiceImpl implements CurrencyService {

    private final CurrencyRepository currencyRepository;
    
    public List<CurrencyOutDto> findAllCurrency(){
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllCurrencyV1();
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<CurrencyOutDto> findAllCurrencyV1(){
        log.info("Start method findAllCurrencyV1");

        List<CurrencyOutDto> currencyOutDto = currencyRepository.findAll().stream()
                .map(MapperUtil::currencyEntityToCurrencyOutDto)
                .toList();

        log.info("End method findAllCurrencyV1, number of currency found: {}", currencyOutDto.size());

        return currencyOutDto;
    }
}

```

## src/main/java/com/nubo/operations/special/espec/api/service/impl/DepositoryServiceImpl.java

```java
package com.nubo.operations.special.espec.api.service.impl;

import com.nubo.operations.special.espec.api.application.properties.PropertiesContext;
import com.nubo.operations.special.espec.api.exception.ServiceException;
import com.nubo.operations.special.espec.api.exception.error.ErrorCode;
import com.nubo.operations.special.espec.api.helpers.MapperUtil;
import com.nubo.operations.special.espec.api.models.dto.response.DepositoryOutDto;
import com.nubo.operations.special.espec.api.models.enums.VersionApiEnum;
import com.nubo.operations.special.espec.api.repository.DepositoryRepository;
import com.nubo.operations.special.espec.api.service.DepositoryService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class DepositoryServiceImpl implements DepositoryService {

    private final DepositoryRepository depositoryRepository;

    public List<DepositoryOutDto> findAllDepository(){
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllDepositoryV1();
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<DepositoryOutDto> findAllDepositoryV1(){
        log.info("Start method findAllDepositoryV1");

        List<DepositoryOutDto> depositoryOutDto = depositoryRepository.findAll().stream()
                .map(MapperUtil::depositoryEntityToDepositoryOutDto)
                .toList();

        log.info("End method findAllDepositoryV1, number of depository found: {}", depositoryOutDto.size());

        return depositoryOutDto;
    }
}

```

## src/main/java/com/nubo/operations/special/espec/api/service/impl/ExchangeRateServiceImpl.java

```java
package com.nubo.operations.special.espec.api.service.impl;

import com.nubo.operations.special.espec.api.application.properties.PropertiesContext;
import com.nubo.operations.special.espec.api.exception.ServiceException;
import com.nubo.operations.special.espec.api.exception.error.ErrorCode;
import com.nubo.operations.special.espec.api.helpers.MapperUtil;
import com.nubo.operations.special.espec.api.models.dto.request.ExchangeRateInDto;
import com.nubo.operations.special.espec.api.models.dto.response.ExchangeRateOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.ExchangeRateOutDto;
import com.nubo.operations.special.espec.api.models.enums.VersionApiEnum;
import com.nubo.operations.special.espec.api.repository.ExchangeRateRepository;
import com.nubo.operations.special.espec.api.service.ExchangeRateService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class ExchangeRateServiceImpl implements ExchangeRateService {

    private final ExchangeRateRepository exchangeRateRepository;

    public List<ExchangeRateOutDto> findAllExchangeRate(){
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllExchangeRateV1();
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<ExchangeRateOutDto> findAllExchangeRateV1(){
        log.info("Start method findAllExchangeRateV1");

        List<ExchangeRateOutDto> exchangeRateOutDto = exchangeRateRepository.findAll().stream()
                .map(MapperUtil::exchangeRateEntityToExchangeRateOutDto)
                .toList();

        log.info("End method findAllExchangeRateV1, number of exchangeRate found: {}", exchangeRateOutDto.size());

        return exchangeRateOutDto;
    }
}

```

## src/main/java/com/nubo/operations/special/espec/api/service/impl/FractionationDepositServiceImpl.java

```java
package com.nubo.operations.special.espec.api.service.impl;

import com.nubo.operations.special.espec.api.application.properties.PropertiesContext;
import com.nubo.operations.special.espec.api.client.operation.special.fractionation.service.FractionationDepositClient;
import com.nubo.operations.special.espec.api.exception.ServiceException;
import com.nubo.operations.special.espec.api.exception.error.ErrorCode;
import com.nubo.operations.special.espec.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.special.espec.api.models.enums.VersionApiEnum;
import com.nubo.operations.special.espec.api.service.FractionationDepositService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class FractionationDepositServiceImpl implements FractionationDepositService {

    private final FractionationDepositClient fractionationDepositClient;

    @Override
    public List<SettlementOutDto> approveAssignment(Long tradeId, String sideId){
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return approveAssignmentV1(tradeId, sideId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<SettlementOutDto> approveAssignmentV1(Long tradeId, String sideId) {
        log.info("Start method approveAssignmentV1 with tradeId -> {}, sideId -> {}", tradeId,
                 sideId);

        List<SettlementOutDto> settlementOutDtoList = fractionationDepositClient
                .approveAssignment(tradeId, sideId);

        log.info("End method approveAssignmentV1, settlement -> {}", settlementOutDtoList);

        return settlementOutDtoList;
    }

    @Override
    public List<SettlementOutDto> rejectAssignment(Long tradeId, String sideId){
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return rejectAssignmentV1(tradeId, sideId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<SettlementOutDto> rejectAssignmentV1(Long tradeId, String sideId){
        log.info("Start method rejectAssignmentV1 with tradeId -> {}, sideId -> {}", tradeId, sideId);

        List<SettlementOutDto> settlementOutDtoList = fractionationDepositClient
                .rejectAssignment(tradeId, sideId);

        log.info("End method rejectAssignmentV1, settlement -> {}", settlementOutDtoList);

        return settlementOutDtoList;
    }
}

```

## src/main/java/com/nubo/operations/special/espec/api/service/impl/FractionationPendingServiceImpl.java

```java
package com.nubo.operations.special.espec.api.service.impl;

import com.nubo.operations.special.espec.api.application.properties.PropertiesContext;
import com.nubo.operations.special.espec.api.client.operation.special.fractionation.dto.request.AssignmentInDto;
import com.nubo.operations.special.espec.api.client.operation.special.fractionation.dto.request.FractionationPendingInDto;
import com.nubo.operations.special.espec.api.client.operation.special.fractionation.service.FractionationPendingClient;
import com.nubo.operations.special.espec.api.exception.ServiceException;
import com.nubo.operations.special.espec.api.exception.error.ErrorCode;
import com.nubo.operations.special.espec.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.ValidationSettlementOutDto;
import com.nubo.operations.special.espec.api.models.entity.SettlementPendingEntity;
import com.nubo.operations.special.espec.api.models.enums.VersionApiEnum;
import com.nubo.operations.special.espec.api.repository.SettlementPendingRepository;
import com.nubo.operations.special.espec.api.service.FractionationPendingService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class FractionationPendingServiceImpl implements FractionationPendingService {

    private final FractionationPendingClient fractionationPendingClientClient;
    private final SettlementPendingRepository settlementPendingRepository;
    private final Long pendingStatus = 10L;

    @Override
    public List<SettlementOutDto> createFractionsPending(Long tradeId, String sideId, List<FractionationPendingInDto> fractionationPendingInDtoList) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return createFractionsPendingV1(tradeId, sideId, fractionationPendingInDtoList);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<SettlementOutDto> createFractionsPendingV1(Long tradeId, String sideId, List<FractionationPendingInDto> fractionationPendingInDtoList) {
        log.info("Start method createFractionsPendingV1 with tradeId -> {}, sideId -> {}", tradeId, sideId);

        this.validatePendingCorrection(tradeId, sideId);

        List<SettlementOutDto> settlementOutDtoList = fractionationPendingClientClient.createFractionsPending(tradeId, sideId,
                pendingStatus, fractionationPendingInDtoList);

        log.info("End method createFractionsPendingV1, settlement -> {}", settlementOutDtoList);

        return settlementOutDtoList;
    }

    @Override
    public List<SettlementOutDto> updateAssignmentPending(Long tradeId, String sideId, List<AssignmentInDto> assignmentInDtoList) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return updateAssignmentPendingV1(tradeId, sideId, assignmentInDtoList);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<SettlementOutDto> updateAssignmentPendingV1(Long tradeId, String sideId, List<AssignmentInDto> assignmentInDtoList) {
        log.info("Start method updateAssignmentPendingV1 with tradeId -> {}, sideId -> {}", tradeId, sideId);

        this.validatePendingCorrection(tradeId, sideId);

        List<SettlementOutDto> settlementOutDtoList = fractionationPendingClientClient.updateAssignmentPending(tradeId, sideId,
                pendingStatus, assignmentInDtoList);

        log.info("End method updateAssignmentPendingV1, settlement -> {}", settlementOutDtoList);

        return settlementOutDtoList;
    }

    @Override
    public PageResponseOutDto<ValidationSettlementOutDto> validateAssignment(Integer page, Integer size, Long tradeId, String sideId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateAssignmentV1(page, size, tradeId, sideId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<ValidationSettlementOutDto> validateAssignmentV1(Integer page, Integer size, Long tradeId, String sideId) {

        log.info("Start method validateAssignmentV1 with tradeId -> {}, sideId -> {}", tradeId, sideId);

        PageResponseOutDto<ValidationSettlementOutDto> validationSettlementOutDtoList =
                fractionationPendingClientClient.validateAssignment(page, size, tradeId, sideId);

        log.info("End method validateAssignmentV1, ValidationSettlementOutDto -> {}", validationSettlementOutDtoList);

        return validationSettlementOutDtoList;
    }

    private void validatePendingCorrection(Long tradeId, String sideId) {
        List<SettlementPendingEntity> settlementPendingEntityList = settlementPendingRepository.findByTradeIdAndSideId(tradeId, sideId, pendingStatus);

        if (!settlementPendingEntityList.isEmpty()) {
            throw new ServiceException(ErrorCode.FRACTIONATION_PENDING_APPROVED_ERROR, HttpStatus.BAD_REQUEST);
        }
    }
}

```

## src/main/java/com/nubo/operations/special/espec/api/service/impl/FractionationServiceImpl.java

```java
package com.nubo.operations.special.espec.api.service.impl;

import com.nubo.operations.special.espec.api.application.properties.PropertiesContext;
import com.nubo.operations.special.espec.api.client.operation.special.fractionation.dto.request.AssignmentInDto;
import com.nubo.operations.special.espec.api.client.operation.special.fractionation.dto.request.FractionationInDto;
import com.nubo.operations.special.espec.api.client.operation.special.fractionation.service.FractionationClient;
import com.nubo.operations.special.espec.api.client.operation.special.rules.dto.request.FractionRuleInDto;
import com.nubo.operations.special.espec.api.exception.ServiceException;
import com.nubo.operations.special.espec.api.exception.error.ErrorCode;
import com.nubo.operations.special.espec.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.special.espec.api.models.entity.*;
import com.nubo.operations.special.espec.api.models.enums.StatusEnum;
import com.nubo.operations.special.espec.api.models.enums.TypeStatusEnum;
import com.nubo.operations.special.espec.api.models.enums.VersionApiEnum;
import com.nubo.operations.special.espec.api.repository.InvestorAccountRepository;
import com.nubo.operations.special.espec.api.repository.ParticipantAccountRepository;
import com.nubo.operations.special.espec.api.repository.SideRepository;
import com.nubo.operations.special.espec.api.repository.TradeRepository;
import com.nubo.operations.special.espec.api.service.FractionationService;
import com.nubo.operations.special.espec.api.service.ValidateFractionService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;

@Service
@RequiredArgsConstructor
@Slf4j
public class FractionationServiceImpl implements FractionationService {

    private final TradeRepository tradeRepository;
    private final SideRepository sideRepository;
    private final ParticipantAccountRepository participantAccountRepository;
    private final InvestorAccountRepository investorAccountRepository;
    private final FractionationClient fractionationClient;
    private final ValidateFractionService validateFractionService;

    @Override
    public List<SettlementOutDto> createFractions(Long tradeId, String sideId, List<FractionationInDto> fractionationInDtoList) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return createFractionsV1(tradeId, sideId, fractionationInDtoList);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<SettlementOutDto> createFractionsV1(Long tradeId, String sideId, List<FractionationInDto> fractionationInDtoList) {
        log.info("Start method createFractionsV1 with tradeId -> {}, sideId -> {}", tradeId, sideId);

        TradeEntity tradeEntity = validateTrade(tradeId);
        SideEntity sideEntity = validateSide(sideId);

        validateCreateFraction(tradeEntity, sideEntity, fractionationInDtoList);

        List<SettlementOutDto> settlementOutDtoList = fractionationClient.createFractions(tradeId, sideId,
                StatusEnum.ASSIGNED_ASSIGNMENT.getValue(), fractionationInDtoList);

        log.info("End method createFractionsV1, settlementOutDtoList -> {}", settlementOutDtoList);

        return settlementOutDtoList;
    }

    @Override
    public List<SettlementOutDto> updateAssignment(Long tradeId, String sideId, List<AssignmentInDto> assignmentInDtoList) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return updateAssignmentV1(tradeId, sideId, assignmentInDtoList);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<SettlementOutDto> updateAssignmentV1(Long tradeId, String sideId, List<AssignmentInDto> assignmentInDtoList) {
        log.info("Start method updateAssignmentV1 with tradeId -> {}, sideId -> {}", tradeId, sideId);

        TradeEntity tradeEntity = validateTrade(tradeId);
        SideEntity sideEntity = validateSide(sideId);

        validateUpdateFraction(tradeEntity, sideEntity, assignmentInDtoList);

        List<SettlementOutDto> settlementOutDtoList = fractionationClient.updateAssignment(tradeId, sideId,
                StatusEnum.CORRECTION_ACCEPTED_ASSIGNMENT.getValue(), assignmentInDtoList);

        log.info("End method updateAssignmentV1, settlementOutDtoList -> {}", settlementOutDtoList);

        return settlementOutDtoList;
    }

    private void validateCreateFraction(TradeEntity tradeEntity, SideEntity sideEntity, List<FractionationInDto> fractionationInDtoList) {

        validateAccountDuplicatedCreateFraction(fractionationInDtoList);
        
        validateOriginTypeForParticipantAccount(tradeEntity, sideEntity, fractionationInDtoList);

        List<FractionRuleInDto> fractionRuleInDtoList = fractionationInDtoList.stream()
                .map(fractionationInDto -> {
                    validateFraction(tradeEntity, sideEntity,
                            fractionationInDto);
                    FractionRuleInDto fractionRuleInDto = new FractionRuleInDto();
                    fractionRuleInDto.setFractionQuantity(fractionationInDto.getFractionQuantity());
                    return fractionRuleInDto;
                }).toList();

        validateFractionService.validateQuantityFractionsCorrection(tradeEntity.getId(), fractionRuleInDtoList);

        validateFractionService.validateMaximumLimitFractionsCorrection(fractionRuleInDtoList);

    }

    private void validateUpdateFraction(TradeEntity tradeEntity, SideEntity sideEntity, List<AssignmentInDto> assignmentInDtoList) {

        validateAccountDuplicatedUpdateFraction(assignmentInDtoList);

        List<FractionRuleInDto> fractionRuleInDtoList = assignmentInDtoList.stream()
                .map(assignmentInDto -> {
                    validateAssignment(tradeEntity, sideEntity, assignmentInDto);
                    FractionRuleInDto fractionRuleInDto = new FractionRuleInDto();
                    fractionRuleInDto.setFractionQuantity(assignmentInDto.getFractionQuantity());
                    return fractionRuleInDto;
                }).toList();

        validateFractionService.validateQuantityFractionsCorrection(tradeEntity.getId(), fractionRuleInDtoList);

        validateFractionService.validateMaximumLimitFractionsCorrection(fractionRuleInDtoList);
    }

    private void validateFraction(TradeEntity tradeEntity,
                                  SideEntity sideEntity,
                                  FractionationInDto fractionationInDto) {
        if ((ObjectUtils.isEmpty(fractionationInDto.getInvestorAccountId()) && ObjectUtils.isEmpty(fractionationInDto.getParticipantAccountId())) ||
                !ObjectUtils.isEmpty(fractionationInDto.getInvestorAccountId()) && !ObjectUtils.isEmpty(fractionationInDto.getParticipantAccountId())) {
            throw new ServiceException(ErrorCode.PARTICIPANT_ACCOUNT_OR_INVESTOR_ACCOUNT_REQUIRED, HttpStatus.BAD_REQUEST);
        }

        String accountNumber = null;
        if (!ObjectUtils.isEmpty(fractionationInDto.getInvestorAccountId())) {
            InvestorAccountEntity investorAccountEntity = validateInvestorAccount(fractionationInDto.getInvestorAccountId());
            accountNumber = investorAccountEntity.getAccountNumber();
        }

        if (!ObjectUtils.isEmpty(fractionationInDto.getParticipantAccountId())) {
            ParticipantAccountEntity participantAccountEntity = validateParticipantAccount(fractionationInDto.getParticipantAccountId());
            accountNumber = participantAccountEntity.getAccountNumber();
            validateFractionService.validateCommissionParticipantAccountFraction(accountNumber, fractionationInDto.getCommissionPercentage());
        }

        validateFractionService.validateAccountFraction(accountNumber, tradeEntity.getId(), sideEntity.getId(), fractionationInDto.getSourceQuoteTypeId());
    }

    private void validateAssignment(TradeEntity tradeEntity,
                                    SideEntity sideEntity,
                                    AssignmentInDto assignmentInDto) {
        if ((ObjectUtils.isEmpty(assignmentInDto.getInvestorAccountId()) && ObjectUtils.isEmpty(assignmentInDto.getParticipantAccountId())) ||
                !ObjectUtils.isEmpty(assignmentInDto.getInvestorAccountId()) && !ObjectUtils.isEmpty(assignmentInDto.getParticipantAccountId())) {
            throw new ServiceException(ErrorCode.PARTICIPANT_ACCOUNT_OR_INVESTOR_ACCOUNT_REQUIRED, HttpStatus.BAD_REQUEST);
        }

        String accountNumber = null;
        if (!ObjectUtils.isEmpty(assignmentInDto.getInvestorAccountId())) {
            InvestorAccountEntity investorAccountEntity = validateInvestorAccount(assignmentInDto.getInvestorAccountId());
            accountNumber = investorAccountEntity.getAccountNumber();
        }

        if (!ObjectUtils.isEmpty(assignmentInDto.getParticipantAccountId())) {
            ParticipantAccountEntity participantAccountEntity = validateParticipantAccount(assignmentInDto.getParticipantAccountId());
            accountNumber = participantAccountEntity.getAccountNumber();
            validateFractionService.validateCommissionParticipantAccountFraction(accountNumber, assignmentInDto.getCommissionPercentage());
        }

        if (ObjectUtils.isEmpty(assignmentInDto.getBankAccountId())
                && ObjectUtils.isEmpty(assignmentInDto.getParticipantBankAccountId())) {
            validateFractionService.validateBankAccountFraction(tradeEntity.getId());
        }

        validateFractionService.validateAccountFraction(accountNumber, tradeEntity.getId(), sideEntity.getId(), assignmentInDto.getSourceQuoteTypeId());
    }

    private void validateAccountDuplicatedCreateFraction(List<FractionationInDto> fractionationInDtoList) {
        Set<Long> duplicatedInvestorAccountList = new HashSet<>();
        for (FractionationInDto fractionationInDto : fractionationInDtoList) {
            if (!ObjectUtils.isEmpty(fractionationInDto.getInvestorAccountId()) &&
                    !duplicatedInvestorAccountList.add(fractionationInDto.getInvestorAccountId())) {
                throw new ServiceException(ErrorCode.INVESTOR_ACCOUNT_DUPLICATED, HttpStatus.BAD_REQUEST);
            }
        }

        Set<Long> duplicatedParticipantAccountList = new HashSet<>();
        for (FractionationInDto fractionationInDto : fractionationInDtoList) {
            if (!ObjectUtils.isEmpty(fractionationInDto.getParticipantAccountId()) &&
                    !duplicatedParticipantAccountList.add(fractionationInDto.getParticipantAccountId())) {
                throw new ServiceException(ErrorCode.PARTICIPANT_ACCOUNT_DUPLICATED, HttpStatus.BAD_REQUEST);
            }
        }
    }

    private void validateAccountDuplicatedUpdateFraction(List<AssignmentInDto> assignmentInDtoList) {
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

    private TradeEntity validateTrade(Long tradeId) {
        return tradeRepository.findById(tradeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private SideEntity validateSide(String sideId) {
        return sideRepository.findById(sideId)
                .orElseThrow(() -> new ServiceException(ErrorCode.SIDE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private InvestorAccountEntity validateInvestorAccount(Long investorAccountId) {
        return investorAccountRepository.findById(investorAccountId)
                .orElseThrow(() -> new ServiceException(ErrorCode.INVESTOR_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private ParticipantAccountEntity validateParticipantAccount(Long participantAccountId) {
        return participantAccountRepository.findById(participantAccountId)
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private void validateOriginTypeForParticipantAccount(TradeEntity tradeEntity, SideEntity sideEntity, List<FractionationInDto> fractionationInDtoList) {
        if (tradeEntity.getOriginType() != null) {
            String tradeOriginTypeDescription = tradeEntity.getOriginType().getDescription();
            
            // Validación para Carteras Colectivas o Terceros
            if (tradeOriginTypeDescription.equalsIgnoreCase(TypeStatusEnum.CARTERA_COLECTIVA.getValue()) || 
                tradeOriginTypeDescription.equalsIgnoreCase(TypeStatusEnum.TERCEROS.getValue())) {
                
                for (FractionationInDto fractionationInDto : fractionationInDtoList) {
                    if (!ObjectUtils.isEmpty(fractionationInDto.getParticipantAccountId()) &&
                        ObjectUtils.isEmpty(fractionationInDto.getInvestorAccountId())) {
                        
                        ParticipantAccountEntity participantAccountEntity = validateParticipantAccount(fractionationInDto.getParticipantAccountId());
                        
                        if (participantAccountEntity.getOriginType() != null) {
                            String participantOriginTypeDescription = participantAccountEntity.getOriginType().getDescription();
                            
                            if (participantOriginTypeDescription.equalsIgnoreCase(TypeStatusEnum.POSICION_PROPIA.getValue())) {
                                throw new ServiceException(ErrorCode.INVALID_ORIGIN_TYPE_FOR_PARTICIPANT_ACCOUNT, HttpStatus.BAD_REQUEST);
                            }
                        }
                    }
                }
            }
            // Validación para Posicion Propia
            else if (tradeOriginTypeDescription.equalsIgnoreCase(TypeStatusEnum.POSICION_PROPIA.getValue())) {
                
                for (FractionationInDto fractionationInDto : fractionationInDtoList) {
                    if (!ObjectUtils.isEmpty(fractionationInDto.getParticipantAccountId())) {
                        
                        ParticipantAccountEntity participantAccountEntity = validateParticipantAccount(fractionationInDto.getParticipantAccountId());
                        
                        // Obtener el participante correspondiente según el side
                        ParticipantEntity tradeParticipant = null;
                        if ("C".equalsIgnoreCase(sideEntity.getId())) {
                            tradeParticipant = tradeEntity.getParticipantBuy();
                        } else if ("V".equalsIgnoreCase(sideEntity.getId())) {
                            tradeParticipant = tradeEntity.getParticipantSell();
                        }
                        
                        // Validar que la cuenta corresponda al participante del trade
                        if (tradeParticipant != null && participantAccountEntity.getParticipant() != null) {
                            if (!tradeParticipant.getId().equals(participantAccountEntity.getParticipant().getId())) {
                                throw new ServiceException(ErrorCode.PARTICIPANT_ACCOUNT_NOT_MATCH_TRADE_PARTICIPANT, HttpStatus.BAD_REQUEST);
                            }
                        }
                    }
                }
            }
        }
    }

}

```

## src/main/java/com/nubo/operations/special/espec/api/service/impl/ParametersServiceImpl.java

```java
package com.nubo.operations.special.espec.api.service.impl;

import com.nubo.operations.special.espec.api.application.properties.PropertiesContext;
import com.nubo.operations.special.espec.api.exception.ServiceException;
import com.nubo.operations.special.espec.api.exception.error.ErrorCode;
import com.nubo.operations.special.espec.api.helpers.MapperPageUtil;
import com.nubo.operations.special.espec.api.helpers.MapperUtil;
import com.nubo.operations.special.espec.api.models.dto.response.CountryOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.SimplySpecialTradeOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.StatusOutDto;
import com.nubo.operations.special.espec.api.models.entity.CountryEntity;
import com.nubo.operations.special.espec.api.models.entity.SpecialTradeEntity;
import com.nubo.operations.special.espec.api.models.entity.StatusEntity;
import com.nubo.operations.special.espec.api.models.enums.AllowedCountryEnum;
import com.nubo.operations.special.espec.api.models.enums.VersionApiEnum;
import com.nubo.operations.special.espec.api.repository.CountryRepository;
import com.nubo.operations.special.espec.api.repository.SpecialTradeRepository;
import com.nubo.operations.special.espec.api.repository.StatusRepository;
import com.nubo.operations.special.espec.api.service.ParametersService;
import jakarta.persistence.criteria.Predicate;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class ParametersServiceImpl implements ParametersService {

    private final SpecialTradeRepository specialTradeRepository;
    private final StatusRepository statusRepository;
    private final CountryRepository countryRepository;

    @Override
    public PageResponseOutDto<SimplySpecialTradeOutDto> findSpecialTradeFilters(String searchValue,
                                                                                 int page,
                                                                                 int size,
                                                                                 String sort,
                                                                                 String order) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findSpecialTradeFiltersV1(searchValue, page, size, sort, order);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<SimplySpecialTradeOutDto> findSpecialTradeFiltersV1(String searchValue,
                                                                                    int page,
                                                                                    int size,
                                                                                    String sort,
                                                                                    String order) {
        log.info("Start method findSpecialTradeFiltersV1, searchValue -> {}", searchValue);

        Specification<SpecialTradeEntity> spec = buildSearchSpecification(searchValue);

        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "id");
        Pageable pageable = PageRequest.of(page, size, sortObj);

        Page<SpecialTradeEntity> pageResult = specialTradeRepository.findAll(spec, pageable);

        if (pageResult.isEmpty()) {
            log.info("No results found for searchValue -> {}", searchValue);
            return buildPageResponseSimplySpecialTrade(List.of(), page, size, 0);
        }

        List<SimplySpecialTradeOutDto> resultList = pageResult.getContent().stream()
                .map(MapperUtil::specialTradeEntityToSimplySpecialTradeOutDto)
                .toList();

        log.info("End method findSpecialTradeFiltersV1, results found -> {}", resultList.size());

        return MapperPageUtil.pageToPageResponseOutDto(resultList, pageResult);
    }

    private Specification<SpecialTradeEntity> buildSearchSpecification(String searchValue) {
        return (root, query, criteriaBuilder) -> {
            if (searchValue == null || searchValue.trim().isEmpty()) {
                return criteriaBuilder.conjunction();
            }

            String searchPattern = "%" + searchValue.toLowerCase() + "%";
            List<Predicate> predicates = new ArrayList<>();

            Predicate namePredicate = criteriaBuilder.like(
                    criteriaBuilder.lower(root.get("specialOperationName")),
                    searchPattern
            );
            predicates.add(namePredicate);

            if (isNumeric(searchValue)) {
                Predicate specialOperationIdPredicate = criteriaBuilder.like(
                        criteriaBuilder.function("to_char", String.class,
                            root.get("specialOperationId"),
                            criteriaBuilder.literal("FM999999999")),
                        searchPattern
                );
                predicates.add(specialOperationIdPredicate);

                Predicate entityIdPredicate = criteriaBuilder.like(
                        criteriaBuilder.function("to_char", String.class,
                            root.get("id"),
                            criteriaBuilder.literal("FM999999999")),
                        searchPattern
                );
                predicates.add(entityIdPredicate);
            }

            return criteriaBuilder.or(predicates.toArray(new Predicate[0]));
        };
    }

    private boolean isNumeric(String str) {
        if (str == null || str.trim().isEmpty()) {
            return false;
        }
        try {
            Long.parseLong(str.trim());
            return true;
        } catch (NumberFormatException e) {
            return false;
        }
    }

    private PageResponseOutDto<SimplySpecialTradeOutDto> buildPageResponseSimplySpecialTrade(
            List<SimplySpecialTradeOutDto> content, int pageNumber, int pageSize, int totalElements) {
        PageResponseOutDto<SimplySpecialTradeOutDto> response = new PageResponseOutDto<>();
        response.setContent(content);
        response.setPageNumber(pageNumber);
        response.setPageSize(pageSize);
        response.setTotalElements((long) totalElements);
        response.setTotalPages(totalElements > 0 ? (int) Math.ceil((double) totalElements / pageSize) : 0);
        return response;
    }

    @Override
    public PageResponseOutDto<StatusOutDto> findStatusByCategory(String category,
                                                                 int page,
                                                                 int size,
                                                                 String sort,
                                                                 String order) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findStatusByCategoryV1(category, page, size, sort, order);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<StatusOutDto> findStatusByCategoryV1(String category,
                                                                    int page,
                                                                    int size,
                                                                    String sort,
                                                                    String order) {
        log.info("Start method findStatusByCategoryV1, category -> {}", category);

        Specification<StatusEntity> spec = buildCategorySpecification(category);
        
        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "id");
        Pageable pageable = PageRequest.of(page, size, sortObj);

        Page<StatusEntity> pageResult = statusRepository.findAll(spec, pageable);

        if (pageResult.isEmpty()) {
            log.info("No results found for category -> {}", category);
            return buildPageResponseStatus(List.of(), page, size, 0);
        }

        List<StatusOutDto> result = pageResult.getContent().stream()
                .map(this::mapToStatusOutDto)
                .toList();

        log.info("End method findStatusByCategoryV1, results found -> {}", result.size());

        return MapperPageUtil.pageToPageResponseOutDto(result, pageResult);
    }

    private Specification<StatusEntity> buildCategorySpecification(String category) {
        return (root, query, criteriaBuilder) -> {
            if (category == null || category.trim().isEmpty()) {
                return criteriaBuilder.conjunction();
            }
            return criteriaBuilder.equal(
                    criteriaBuilder.lower(root.get("category")),
                    category.toLowerCase()
            );
        };
    }

    private StatusOutDto mapToStatusOutDto(StatusEntity entity) {
        return StatusOutDto.builder()
                .id(entity.getId())
                .description(entity.getDescription())
                .category(entity.getCategory())
                .build();
    }

    private PageResponseOutDto<StatusOutDto> buildPageResponseStatus(
            List<StatusOutDto> content, int pageNumber, int pageSize, int totalElements) {
        PageResponseOutDto<StatusOutDto> response = new PageResponseOutDto<>();
        response.setContent(content);
        response.setPageNumber(pageNumber);
        response.setPageSize(pageSize);
        response.setTotalElements((long) totalElements);
        response.setTotalPages(totalElements > 0 ? (int) Math.ceil((double) totalElements / pageSize) : 0);
        return response;
    }

    @Override
    public PageResponseOutDto<CountryOutDto> findAllowedCountries(int page,
                                                                   int size,
                                                                   String sort,
                                                                   String order) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllowedCountriesV1(page, size, sort, order);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<CountryOutDto> findAllowedCountriesV1(int page,
                                                                      int size,
                                                                      String sort,
                                                                      String order) {
        log.info("Start method findAllowedCountriesV1");

        Specification<CountryEntity> spec = buildAllowedCountriesSpecification();

        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "id");
        Pageable pageable = PageRequest.of(page, size, sortObj);

        Page<CountryEntity> pageResult = countryRepository.findAll(spec, pageable);

        if (pageResult.isEmpty()) {
            log.info("No allowed countries found");
            return buildPageResponseCountry(List.of(), page, size, 0);
        }

        List<CountryOutDto> result = pageResult.getContent().stream()
                .map(this::mapToCountryOutDto)
                .toList();

        log.info("End method findAllowedCountriesV1, results found -> {}", result.size());

        return MapperPageUtil.pageToPageResponseOutDto(result, pageResult);
    }

    private Specification<CountryEntity> buildAllowedCountriesSpecification() {
        return (root, query, criteriaBuilder) -> 
            root.get("id").in(AllowedCountryEnum.getAllowedCountryIds());
    }

    private CountryOutDto mapToCountryOutDto(CountryEntity entity) {
        return CountryOutDto.builder()
                .id(entity.getId())
                .code(entity.getCode())
                .name(entity.getName())
                .timeZone(entity.getTimeZone())
                .build();
    }

    private PageResponseOutDto<CountryOutDto> buildPageResponseCountry(
            List<CountryOutDto> content, int pageNumber, int pageSize, int totalElements) {
        PageResponseOutDto<CountryOutDto> response = new PageResponseOutDto<>();
        response.setContent(content);
        response.setPageNumber(pageNumber);
        response.setPageSize(pageSize);
        response.setTotalElements((long) totalElements);
        response.setTotalPages(totalElements > 0 ? (int) Math.ceil((double) totalElements / pageSize) : 0);
        return response;
    }

}

```

## src/main/java/com/nubo/operations/special/espec/api/service/impl/ReassignmentServiceImpl.java

```java
package com.nubo.operations.special.espec.api.service.impl;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.nubo.operations.special.espec.api.application.properties.PropertiesContext;
import com.nubo.operations.special.espec.api.exception.ServiceException;
import com.nubo.operations.special.espec.api.exception.error.ErrorCode;
import com.nubo.operations.special.espec.api.helpers.MapperPageUtil;
import com.nubo.operations.special.espec.api.helpers.MapperUtil;
import com.nubo.operations.special.espec.api.helpers.dynamicQuery.dataBase.MapperReassignmentDynamicSearch;
import com.nubo.operations.special.espec.api.models.dto.request.BeneficiaryReassignmentInDto;
import com.nubo.operations.special.espec.api.models.dto.request.CorrectionSetInDto;
import com.nubo.operations.special.espec.api.models.dto.request.ExtendedReassignmentSetInDto;
import com.nubo.operations.special.espec.api.models.dto.request.ReassignmentSetInDto;
import com.nubo.operations.special.espec.api.models.dto.response.BeneficiaryReassignmentOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.ExtendedReassignmentOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.ParticipantBankAccountOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.ReassignmentOutDto;
import com.nubo.operations.special.espec.api.models.entity.BankAccountEntity;
import com.nubo.operations.special.espec.api.models.entity.InvestorAccountEntity;
import com.nubo.operations.special.espec.api.models.entity.InvestorEntity;
import com.nubo.operations.special.espec.api.models.entity.ParticipantBankAccountEntity;
import com.nubo.operations.special.espec.api.models.entity.ReassignmentEntity;
import com.nubo.operations.special.espec.api.models.entity.SettlementEntity;
import com.nubo.operations.special.espec.api.models.entity.SettlementKey;
import com.nubo.operations.special.espec.api.models.entity.SettlementStatusHistoryEntity;
import com.nubo.operations.special.espec.api.models.entity.SideEntity;
import com.nubo.operations.special.espec.api.models.entity.SpecialTradeEntity;
import com.nubo.operations.special.espec.api.models.entity.StatusEntity;
import com.nubo.operations.special.espec.api.models.entity.TaxesEntity;
import com.nubo.operations.special.espec.api.models.entity.TradeEntity;
import com.nubo.operations.special.espec.api.models.entity.TradeStatusHistoryEntity;
import com.nubo.operations.special.espec.api.models.entity.TradingSystemEntity;
import com.nubo.operations.special.espec.api.models.entity.TypeEntity;
import com.nubo.operations.special.espec.api.models.enums.PropertiesEnum;
import com.nubo.operations.special.espec.api.models.enums.ReassignmentStatusEnum;
import com.nubo.operations.special.espec.api.models.enums.TypeEnum;
import com.nubo.operations.special.espec.api.models.enums.TypeStatusEnum;
import com.nubo.operations.special.espec.api.models.enums.VersionApiEnum;
import com.nubo.operations.special.espec.api.repository.BankAccountRepository;
import com.nubo.operations.special.espec.api.repository.InvestorAccountRepository;
import com.nubo.operations.special.espec.api.repository.ParticipantBankAccountRepository;
import com.nubo.operations.special.espec.api.repository.ReassignmentRepository;
import com.nubo.operations.special.espec.api.repository.SettlementRepository;
import com.nubo.operations.special.espec.api.repository.SettlementStatusHistoryRepository;
import com.nubo.operations.special.espec.api.repository.SideRepository;
import com.nubo.operations.special.espec.api.repository.SpecialTradeRepository;
import com.nubo.operations.special.espec.api.repository.StatusRepository;
import com.nubo.operations.special.espec.api.repository.TaxesRepository;
import com.nubo.operations.special.espec.api.repository.TradeRepository;
import com.nubo.operations.special.espec.api.repository.TradeStatusHistoryRepository;
import com.nubo.operations.special.espec.api.repository.TypeRepository;
import com.nubo.operations.special.espec.api.service.ReassignmentService;

import jakarta.persistence.criteria.Predicate;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class ReassignmentServiceImpl implements ReassignmentService
{

    private final ReassignmentRepository reassignmentRepository;
    private final SettlementRepository settlementRepository;
    private final SpecialTradeRepository specialTradeRepository;
    private final TradeRepository tradeRepository;
    private final InvestorAccountRepository investorAccountRepository;
    private final ParticipantBankAccountRepository participantBankAccountRepository;
    private final BankAccountRepository bankAccountRepository;
    private final TypeRepository typeRepository;
    private final SettlementStatusHistoryRepository settlementStatusHistoryRepository;
    private final TradeStatusHistoryRepository tradeStatusHistoryRepository;
    private final StatusRepository statusRepository;
    private final TaxesRepository taxesRepository;
    private final SideRepository sideRepository;

    public PageResponseOutDto<ReassignmentOutDto> findAllReassignment(Pageable pageable, Long specialTradeId)
    {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1)
        {
            return findAllReassignmentV1(pageable, specialTradeId);
        }
        else
        {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public PageResponseOutDto<ReassignmentOutDto> findAllReassignmentBySide(Pageable pageable, Long specialTradeId, String sideId)
    {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1)
        {
            return findAllReassignmentBySideV1(pageable, specialTradeId, sideId);
        }
        else
        {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<ReassignmentOutDto> findAllReassignmentV1(Pageable pageable, Long specialTradeId)
    {
        log.info("Start method findAllReassignmentV1");

        Specification<ReassignmentEntity> spec = MapperReassignmentDynamicSearch
                .buildCombinedSpecification(specialTradeId, null, null, null);

        Page<ReassignmentEntity> reassignmentPage = reassignmentRepository.findAll(spec, pageable);

        List<ReassignmentOutDto> reassignmentOutDtoList = reassignmentPage.getContent().stream()
                .map(MapperUtil::reassignmentEntityToReassignmentOutDto)
                .toList();

        log.info("End method findAllReassignmentV1, number of reassignment found: {}", reassignmentOutDtoList.size());

        return MapperPageUtil.pageToPageResponseOutDto(reassignmentOutDtoList, reassignmentPage);
    }

    private PageResponseOutDto<ReassignmentOutDto> findAllReassignmentBySideV1(Pageable pageable, Long specialTradeId, String sideId)
    {
        log.info("Start method findAllReassignmentBySideV1 with specialTradeId: {} and sideId: {}", specialTradeId, sideId);

        Specification<ReassignmentEntity> spec = buildSpecificationWithSide(specialTradeId, sideId);

        Page<ReassignmentEntity> reassignmentPage = reassignmentRepository.findAll(spec, pageable);

        List<ReassignmentOutDto> reassignmentOutDtoList = reassignmentPage.getContent().stream()
                .map(MapperUtil::reassignmentEntityToReassignmentOutDto)
                .toList();

        log.info("End method findAllReassignmentBySideV1, number of reassignment found: {}", reassignmentOutDtoList.size());

        return MapperPageUtil.pageToPageResponseOutDto(reassignmentOutDtoList, reassignmentPage);
    }

    public static Specification<ReassignmentEntity> buildSpecification(Long specialTradeId)
    {
        return (root, query, criteriaBuilder) ->
        {
            List<Predicate> predicates = new ArrayList<>();
            if (!ObjectUtils.isEmpty(specialTradeId))
            {
                predicates.add(criteriaBuilder.equal(
                        root.get("trade")
                                .get("specialTrade")
                                .get("id"),
                        specialTradeId));
            }
            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }

    public static Specification<ReassignmentEntity> buildSpecificationWithSide(Long specialTradeId, String sideId)
    {
        return (root, query, criteriaBuilder) ->
        {
            List<Predicate> predicates = new ArrayList<>();
            if (!ObjectUtils.isEmpty(specialTradeId))
            {
                predicates.add(criteriaBuilder.equal(
                        root.get("trade")
                                .get("specialTrade")
                                .get("id"),
                        specialTradeId));
            }
            if (!ObjectUtils.isEmpty(sideId))
            {
                predicates.add(criteriaBuilder.equal(
                        root.get("side")
                                .get("id"),
                        sideId));
            }
            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }

    @Override
    @Transactional
    public List<ReassignmentEntity> setReassignment(ReassignmentSetInDto reassignmentSetInDto)
    {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1)
        {
            return setReassignmentV1(reassignmentSetInDto);
        }
        else
        {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    @Override
    @Transactional
    public List<ReassignmentEntity> correctReassignment(CorrectionSetInDto correctionSetInDto)
    {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1)
        {
            return correctReassignmentV1(correctionSetInDto);
        }
        else
        {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public Boolean validateAccountTitles(String accountTitle)
    {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1)
        {
            try
            {
                validateAccountTitlesV1(accountTitle);
                return true;
            } catch (ServiceException e)
            {
                return false;
            }
        }
        else
        {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public List<ParticipantBankAccountOutDto> validateCashAccount(String cashAccount)
    {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1)
        {
            ParticipantBankAccountEntity resultValidation = validateCashAccountV1(cashAccount);
            ParticipantBankAccountOutDto result = MapperUtil
                    .participantBankAccountEntityToParticipantBankAccountOutDto(resultValidation);
            if (result != null)
            {
                return List.of(result);
            }
            else
            {
                throw new ServiceException(ErrorCode.PARTICIPANT_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND);
            }
        }
        else
        {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<ReassignmentEntity> setReassignmentV1(ReassignmentSetInDto reassignmentSetInDto)
    {
        log.info("Start method setReassignmentV1 with specialOperationId: {}",
                reassignmentSetInDto.getSpecialTradeId());
        TypeEntity typeEntity;
        SettlementEntity settlement;
        InvestorAccountEntity initialAccount = null;
        List<SettlementEntity> settlements = new ArrayList<>();
        List<StatusEntity> previousStatus = new ArrayList<>();
        SpecialTradeEntity specialTrade = specialTradeRepository.findAll().stream()
                .filter(st -> st.getId().equals(Long.valueOf(reassignmentSetInDto.getSpecialTradeId())))
                .findFirst()
                .orElseThrow(() -> new ServiceException(ErrorCode.SPECIAL_TRADE_NOT_FOUND, HttpStatus.NOT_FOUND));

        if (specialTrade.getStatus() == null || ReassignmentStatusEnum.REASIGNACION_RECHAZADA.getValue()
                .equals(((specialTrade.getStatus().getDescription()))))
        {
            throw new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
        }

        List<TradeEntity> trades = tradeRepository.findAll().stream()
                .filter(t -> t.getSpecialTrade() != null && t.getSpecialTrade().getId().equals(specialTrade.getId()))
                .toList();

        if (trades.isEmpty())
        {
            throw new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND);
        }

        InvestorAccountEntity investorAccount = validateAccountTitlesV1(reassignmentSetInDto.getAccountTitles());
        ParticipantBankAccountEntity participantBankAccountOutDto = validateCashAccountV1(
                reassignmentSetInDto.getCashAccount());

        if (reassignmentSetInDto.getOrigin().equals(TypeStatusEnum.TERCEROS.getValue()) ||
                reassignmentSetInDto.getOrigin().equals(TypeStatusEnum.POSICION_PROPIA.getValue()) ||
                reassignmentSetInDto.getOrigin().equals(TypeStatusEnum.CARTERA_COLECTIVA.getValue()))
        {
            typeEntity = typeRepository.findAll().stream()
                    .filter(t -> t.getDescription() != null
                            && t.getDescription().equals(reassignmentSetInDto.getOrigin()) &&
                            t.getCategory() != null && t.getCategory().contains(TypeStatusEnum.ORIGEN_PUNTA.getValue()))
                    .findFirst()
                    .orElseThrow(() -> new ServiceException(ErrorCode.NOT_FOUND, HttpStatus.NOT_FOUND));
        }
        else
        {
            throw new ServiceException(ErrorCode.ORIGIN_NOT_FOUND, HttpStatus.NOT_FOUND);
        }

        for (TradeEntity trade : trades)
        {
            settlement = settlementRepository.findAll().stream()
                    .filter(s -> s.getTrade() != null && s.getTrade().getId().equals(trade.getId()) &&
                            reassignmentSetInDto.getFraction() != null && s.getFraction() != null
                            && s.getFraction().equals(reassignmentSetInDto.getFraction()) &&
                            specialTrade.getSide() != null && s.getSide() != null
                            && s.getSide().getId().equals(specialTrade.getSide().getId()))
                    .findFirst()
                    .orElseThrow(() -> new ServiceException(ErrorCode.NOT_FOUND, HttpStatus.NOT_FOUND));

            initialAccount = settlement.getInvestorAccount();

            StatusEntity pendStatus = statusRepository.findById(ReassignmentStatusEnum.REASIGNACION_SOLICITADA.getId())
                    .orElseThrow(() -> new ServiceException(ErrorCode.STATUS_NOT_FOUND, HttpStatus.NOT_FOUND));
            BigDecimal commissionAmount = reassignmentSetInDto.getCommissionRate()
                    .multiply(settlement.getFractionVolume())
                    .divide(new BigDecimal("100"), 4, RoundingMode.HALF_UP);
            BigDecimal valTaxAmount = commissionAmount
                    .multiply(settlement.getValTax() != null ? settlement.getValTax() : BigDecimal.ZERO)
                    .divide(new BigDecimal("100"), 4, RoundingMode.HALF_UP);
            settlement.setInvestor(investorAccount.getInvestor());
            settlement.setInvestorAccount(investorAccount);
            BankAccountEntity bankAccountEntity = getBankAccounts(reassignmentSetInDto.getSettlementEntity(),
                    settlement.getInvestor().getId());
            previousStatus.add(settlement.getStatus());
            settlement.setStatus(pendStatus);
            settlement.setCommissionPercentage(reassignmentSetInDto.getCommissionRate());
            settlement.setBankAccount(bankAccountEntity);
            settlement.setParticipantBankAccount(participantBankAccountOutDto);
            settlement.setSourceQuoteType(typeEntity);
            settlement.setCommissionAmount(commissionAmount);
            settlement.setValTaxAmount(valTaxAmount);
            settlement.setReference(reassignmentSetInDto.getTradeReference());
            settlement.setLastModifyUser(getHeaderValue(PropertiesEnum.CLIENT_USER.getValue()));
            settlement.setLastModifyApplication(PropertiesEnum.REASSIGNMENT_SERVICE.getValue());
            settlement.setLastModifyDate(LocalDateTime.now());
            settlement.setLastModifyIp(getHeaderValue(PropertiesEnum.CLIENT_IP.getValue()));
            settlements.add(settlement);
        }

        log.info("End method setReassignmentV1");
        return processSettlementReassignment(settlements, trades, previousStatus, initialAccount);
    }

    private List<ReassignmentEntity> correctReassignmentV1(CorrectionSetInDto correctionSetInDto)
    {
        log.info("Start method correctReassignmentV1 with specialOperationId: {}",
                correctionSetInDto.getSpecialTradeId());
        TypeEntity typeEntity;
        SettlementEntity settlement;
        InvestorAccountEntity initialAccount = null;
        List<SettlementEntity> settlements = new ArrayList<>();
        List<StatusEntity> previousStatus = new ArrayList<>();
        SpecialTradeEntity specialTrade = specialTradeRepository.findAll().stream()
                .filter(st -> st.getId().equals(Long.valueOf(correctionSetInDto.getSpecialTradeId())))
                .findFirst()
                .orElseThrow(() -> new ServiceException(ErrorCode.SPECIAL_TRADE_NOT_FOUND, HttpStatus.NOT_FOUND));

        if (specialTrade.getStatus() == null || ReassignmentStatusEnum.REASIGNACION_RECHAZADA.getValue()
                .equals(((specialTrade.getStatus().getDescription()))))
        {
            throw new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
        }

        List<TradeEntity> trades = tradeRepository.findAll().stream()
                .filter(t -> t.getSpecialTrade() != null && t.getSpecialTrade().getId().equals(specialTrade.getId()))
                .toList();

        if (trades.isEmpty())
        {
            throw new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND);
        }

        InvestorAccountEntity investorAccount = validateAccountTitlesV1(correctionSetInDto.getAccountTitles());

        if (correctionSetInDto.getOrigin().equals(TypeStatusEnum.TERCEROS.getValue()) ||
                correctionSetInDto.getOrigin().equals(TypeStatusEnum.POSICION_PROPIA.getValue()) ||
                correctionSetInDto.getOrigin().equals(TypeStatusEnum.CARTERA_COLECTIVA.getValue()))
        {
            typeEntity = typeRepository.findAll().stream()
                    .filter(t -> t.getDescription() != null && t.getDescription().equals(correctionSetInDto.getOrigin())
                            &&
                            t.getCategory() != null && t.getCategory().contains(TypeStatusEnum.ORIGEN_PUNTA.getValue()))
                    .findFirst()
                    .orElseThrow(() -> new ServiceException(ErrorCode.NOT_FOUND, HttpStatus.NOT_FOUND));
        }
        else
        {
            throw new ServiceException(ErrorCode.ORIGIN_NOT_FOUND, HttpStatus.NOT_FOUND);
        }

        for (TradeEntity trade : trades)
        {
            settlement = settlementRepository.findAll().stream()
                    .filter(s -> s.getTrade() != null && s.getTrade().getId().equals(trade.getId()) &&
                            correctionSetInDto.getFraction() != null && s.getFraction() != null
                            && s.getFraction().equals(correctionSetInDto.getFraction()) &&
                            specialTrade.getSide() != null && s.getSide() != null
                            && s.getSide().getId().equals(specialTrade.getSide().getId()))
                    .findFirst()
                    .orElseThrow(() -> new ServiceException(ErrorCode.NOT_FOUND, HttpStatus.NOT_FOUND));

            initialAccount = settlement.getInvestorAccount();

            StatusEntity pendStatus = statusRepository.findById(ReassignmentStatusEnum.REASIGNACION_SOLICITADA.getId())
                    .orElseThrow(() -> new ServiceException(ErrorCode.STATUS_NOT_FOUND, HttpStatus.NOT_FOUND));
            BigDecimal commissionAmount = correctionSetInDto.getCommissionRate()
                    .multiply(settlement.getFractionVolume())
                    .divide(new BigDecimal("100"), 4, RoundingMode.HALF_UP);
            BigDecimal valTaxAmount = commissionAmount
                    .multiply(settlement.getValTax() != null ? settlement.getValTax() : BigDecimal.ZERO)
                    .divide(new BigDecimal("100"), 4, RoundingMode.HALF_UP);
            settlement.setInvestor(investorAccount.getInvestor());
            settlement.setInvestorAccount(investorAccount);
            previousStatus.add(settlement.getStatus());
            settlement.setStatus(pendStatus);
            settlement.setCommissionPercentage(correctionSetInDto.getCommissionRate());
            settlement.setSourceQuoteType(typeEntity);
            settlement.setCommissionAmount(commissionAmount);
            settlement.setValTaxAmount(valTaxAmount);
            settlement.setReference(correctionSetInDto.getTradeReference());
            settlement.setLastModifyUser(getHeaderValue(PropertiesEnum.CLIENT_USER.getValue()));
            settlement.setLastModifyApplication(PropertiesEnum.CORRECTION_SERVICE.getValue());
            settlement.setLastModifyDate(LocalDateTime.now());
            settlement.setLastModifyIp(getHeaderValue(PropertiesEnum.CLIENT_IP.getValue()));
            settlements.add(settlement);
        }
        log.info("End method correctReassignmentV1");
        return processSettlementReassignment(settlements, trades, previousStatus, initialAccount);

    }

    private List<ReassignmentEntity> processSettlementReassignment(List<SettlementEntity> settlements,
            List<TradeEntity> trades, List<StatusEntity> previousStatus,
            InvestorAccountEntity initialAccount)
    {

        Integer correctionNumber = trades.size();
        List<ReassignmentEntity> reassignment = new ArrayList<>();
        for (int i = 0; i < settlements.size(); i++)
        {
            settlementRepository.save(settlements.get(i));
            createSettlementStatusHistory(settlements.get(i), previousStatus.get(i));
            createTradeStatusHistory(trades.get(i), settlements.get(i).getStatus());
            reassignment.add(createReassignmentRecord(settlements.get(i), initialAccount, correctionNumber));
        }

        return reassignment;
    }

    private ReassignmentEntity createReassignmentRecord(SettlementEntity settlement,
            InvestorAccountEntity initialAccount, Integer correctionNumber)
    {
        ReassignmentEntity reassignment = ReassignmentEntity.builder()
                .trade(TradeEntity.builder().id(settlement.getTrade().getId()).build())
                .fraction(settlement.getFraction())
                .side(SideEntity.builder().id(settlement.getSide().getId()).build())
                .requestDate(LocalDateTime.now().toLocalDate())
                .processType(settlement.getSourceQuoteType())
                .initialAccount(InvestorAccountEntity.builder().id(initialAccount.getId()).build())
                .newAccount(InvestorAccountEntity.builder().id(settlement.getInvestorAccount().getId()).build())
                .status(StatusEntity.builder().id(settlement.getStatus().getId()).build())
                .requestTime(LocalDateTime.now().toLocalTime())
                .detail(ReassignmentStatusEnum.REASIGNACION_SOLICITADA.getValue())
                .lastModifyUser(getHeaderValue(PropertiesEnum.CLIENT_USER.getValue()))
                .lastModifyApplic(PropertiesEnum.REASSIGNMENT_SERVICE.getValue())
                .lastModifyDate(LocalDateTime.now().toLocalDate())
                .lastModifyIp(getHeaderValue(PropertiesEnum.CLIENT_IP.getValue()))
                .correctionNumber(correctionNumber.toString())
                .build();

        reassignmentRepository.save(reassignment);
        return reassignment;
    }

    private void createSettlementStatusHistory(SettlementEntity settlement, StatusEntity previousStatus)
    {
        SettlementStatusHistoryEntity history = SettlementStatusHistoryEntity.builder()
                .trade(settlement.getTrade())
                .fraction(settlement.getFraction())
                .side(settlement.getSide())
                .time(LocalDateTime.now())
                .status(settlement.getStatus())
                .lastModifyUser(getHeaderValue(PropertiesEnum.CLIENT_USER.getValue()))
                .lastModifyApplication(PropertiesEnum.REASSIGNMENT_SERVICE.getValue())
                .lastModifyDate(LocalDateTime.now())
                .lastModifyIp(getHeaderValue(PropertiesEnum.CLIENT_IP.getValue()))
                .build();

        settlementStatusHistoryRepository.save(history);
    }

    private void createTradeStatusHistory(TradeEntity trade, StatusEntity newStatus)
    {
        TradeStatusHistoryEntity history = TradeStatusHistoryEntity.builder()
                .tradeId(trade.getId())
                .time(LocalDateTime.now())
                .statusId(newStatus.getId().intValue())
                .status(newStatus)
                .lastModifyUser(getHeaderValue(PropertiesEnum.CLIENT_USER.getValue()))
                .lastModifyApplication(PropertiesEnum.REASSIGNMENT_SERVICE.getValue())
                .lastModifyDate(LocalDateTime.now())
                .lastModifyIp(getHeaderValue(PropertiesEnum.CLIENT_IP.getValue()))
                .build();

        tradeStatusHistoryRepository.save(history);
    }

    private InvestorAccountEntity validateAccountTitlesV1(String accountTitle)
    {
        Optional<InvestorAccountEntity> investorAccountOpt = investorAccountRepository
                .findByAccountNumber(accountTitle);
        return investorAccountOpt.orElseThrow(() -> new ServiceException(ErrorCode.NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private ParticipantBankAccountEntity validateCashAccountV1(String cashAccount)
    {
        List<ParticipantBankAccountEntity> participantBankAccounts = participantBankAccountRepository
                .findByBankAccount(cashAccount);

        if (participantBankAccounts.isEmpty())
        {
            throw new ServiceException(ErrorCode.NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        else
        {
            return participantBankAccounts.get(0);
        }
    }

    private BankAccountEntity getBankAccounts(String settlementEntity, Long investorId)
    {
        List<BankAccountEntity> bankAccounts = bankAccountRepository.findAll().stream()
                .filter(ba -> ba.getBankAccount() != null && ba.getBankAccount().equals(settlementEntity)
                        && ba.getInvestor().getId().equals(investorId))
                .toList();

        if (bankAccounts.isEmpty())
        {
            throw new ServiceException(ErrorCode.NOT_FOUND, HttpStatus.NOT_FOUND);
        }

        return bankAccounts.get(0);
    }

    private String getHeaderValue(String headerName)
    {
        try
        {
            ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder
                    .getRequestAttributes();
            if (attributes != null)
            {
                HttpServletRequest request = attributes.getRequest();
                return request.getHeader(headerName);
            }
        } catch (Exception e)
        {
            log.warn("Error getting header value for {}: {}", headerName, e.getMessage());
        }
        return null;
    }

    @Override
    public ExtendedReassignmentOutDto getReassignmentData(Long tradeId, String sideId)
    {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V2)
        {
            return getReassignmentDataV2(tradeId, sideId);
        }
        else
        {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    @Override
    @Transactional
    public ExtendedReassignmentOutDto executeReassignment(ExtendedReassignmentSetInDto extendedReassignmentSetInDto)
    {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V2)
        {
            return executeReassignmentV2(extendedReassignmentSetInDto);
        }
        else
        {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private ExtendedReassignmentOutDto getReassignmentDataV2(Long tradeId, String sideId)
    {
        log.info("Start method getReassignmentDataV2, tradeId: {}, sideId: {}", tradeId, sideId);

        TradeEntity trade = validateTradeV2(tradeId);
        validateCountryNotChile(trade);

        List<SettlementEntity> settlements = settlementRepository.findByTradeIdAndSideId(tradeId, sideId);

        if (settlements.isEmpty())
        {
            throw new ServiceException(ErrorCode.SETTLEMENT_NOT_FOUND, HttpStatus.NOT_FOUND);
        }

        StatusEntity acceptedStatus = findAcceptedStatus();
        settlements = settlements.stream()
                .filter(s -> s.getStatus() != null && s.getStatus().getId().equals(acceptedStatus.getId()))
                .toList();

        if (settlements.isEmpty())
        {
            throw new ServiceException(ErrorCode.SETTLEMENT_NOT_FOUND, HttpStatus.NOT_FOUND);
        }

        SettlementEntity firstSettlement = settlements.get(0);
        TradingSystemEntity tradingSystem = firstSettlement.getTradingSystem();

        validateTradingSystemForV2(tradingSystem);

        boolean isFullDvp = isFullDvpOperation(trade);
        boolean isFullLp = isFullLpOperation(trade);
        boolean hasMixedAmounts = !isFullDvp && !isFullLp;
        boolean hasEpAmount = trade.getVolumeDvd() != null && trade.getVolumeDvd().compareTo(BigDecimal.ZERO) > 0;

        boolean canModifyQuantities = !hasMixedAmounts && !hasEpAmount;
        boolean canAddBeneficiaries = canModifyQuantities
                && settlements.size() < TypeEnum.MAX_BENEFICIARIES.getValue().intValue();
        boolean canDeleteBeneficiaries = canModifyQuantities;

        List<BeneficiaryReassignmentOutDto> beneficiaries = settlements.stream()
                .map(settlement -> mapSettlementToBeneficiaryOut(settlement, trade, canModifyQuantities))
                .toList();

        BigDecimal totalQuantity = settlements.stream()
                .map(SettlementEntity::getFractionQuantity)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        BigDecimal totalAmount = settlements.stream()
                .map(SettlementEntity::getFractionVolume)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        BigDecimal reassignmentCost = calculateReassignmentCost(trade.getCountry().getId());
        BigDecimal taxAmount = calculateTaxAmount(reassignmentCost, trade.getCountry().getId());

        log.info("End method getReassignmentDataV2");

        return ExtendedReassignmentOutDto.builder()
                .tradeId(trade.getId())
                .sideId(sideId)
                .country(trade.getCountry().getName())
                .assignmentSource(tradingSystem.getDescription())
                .requiresInternalApproval(false)
                .beneficiaries(beneficiaries)
                .totalQuantity(totalQuantity)
                .totalAmount(totalAmount)
                .totalDvpAmount(trade.getVolumeDvp())
                .totalLpAmount(trade.getVolumeLp())
                .totalEpAmount(trade.getVolumeDvd())
                .isFullDvp(isFullDvp)
                .isFullLp(isFullLp)
                .hasMixedAmounts(hasMixedAmounts)
                .canAddBeneficiaries(canAddBeneficiaries)
                .canDeleteBeneficiaries(canDeleteBeneficiaries)
                .canModifyQuantities(canModifyQuantities)
                .maxFractionsAllowed(TypeEnum.MAX_BENEFICIARIES.getValue().intValue())
                .reassignmentCost(reassignmentCost)
                .taxAmount(taxAmount)
                .totalCost(reassignmentCost.add(taxAmount))
                .operationStatus(MapperUtil.statusEntityToStatusOutDto(trade.getStatus()))
                .isBeforeSettlement(true)
                .canSave(true)
                .build();
    }

    private ExtendedReassignmentOutDto executeReassignmentV2(ExtendedReassignmentSetInDto request)
    {
        log.info("Start method executeReassignmentV2, tradeId: {}, sideId: {}", request.getTradeId(),
                request.getSideId());

        TradeEntity trade = validateTradeV2(request.getTradeId());
        validateCountryNotChile(trade);

        List<SettlementEntity> currentSettlements = settlementRepository.findByTradeIdAndSideId(request.getTradeId(),
                request.getSideId());

        if (currentSettlements.isEmpty())
        {
            throw new ServiceException(ErrorCode.SETTLEMENT_NOT_FOUND, HttpStatus.NOT_FOUND);
        }

        validateTradingSystemForV2(currentSettlements.get(0).getTradingSystem());

        boolean isFullDvp = isFullDvpOperation(trade);
        boolean isFullLp = isFullLpOperation(trade);
        boolean canModifyQuantities = !isFullDvp && !isFullLp;

        validateBeneficiariesCount(request);
        validateBeneficiariesSum(request, trade, canModifyQuantities);
        validateOriginCoherence(request);
        validateCommissions(request, isFullDvp, isFullLp);

        deleteFractionsNotInRequest(currentSettlements, request);

        StatusEntity acceptedStatus = findAcceptedStatus();

        int fractionNumber = 1;
        for (BeneficiaryReassignmentInDto beneficiary : request.getBeneficiaries())
        {
            InvestorAccountEntity initialAccount = findInitialAccount(trade.getId(), request.getSideId(),
                    fractionNumber);

            SettlementEntity settlement = processBeneficiary(beneficiary, trade, request.getSideId(), fractionNumber,
                    acceptedStatus, canModifyQuantities);

            createSettlementStatusHistory(settlement, acceptedStatus);

            createReassignmentRecordV2(settlement, initialAccount, trade);

            fractionNumber++;
        }

        return getReassignmentDataV2(request.getTradeId(), request.getSideId());
    }

    private TradeEntity validateTradeV2(Long tradeId)
    {
        return tradeRepository.findById(tradeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private void validateCountryNotChile(TradeEntity trade)
    {
        if (trade.getCountry() != null && "CHILE".equalsIgnoreCase(trade.getCountry().getName()))
        {
            throw new ServiceException(ErrorCode.CHILE_REASSIGNMENT_NOT_ALLOWED, HttpStatus.BAD_REQUEST);
        }
    }

    private void validateTradingSystemForV2(TradingSystemEntity tradingSystem)
    {
        if (tradingSystem == null || tradingSystem.getDescription() == null)
        {
            throw new ServiceException(ErrorCode.TRADING_SYSTEM_NOT_FOUND, HttpStatus.NOT_FOUND);
        }

        if ("SEON".equalsIgnoreCase(tradingSystem.getDescription()))
        {
            throw new ServiceException(ErrorCode.REASSIGNMENT_REQUIRES_APPROVAL, HttpStatus.BAD_REQUEST);
        }
    }

    private boolean isFullDvpOperation(TradeEntity trade)
    {
        if (trade.getVolume() == null || trade.getVolumeDvp() == null)
        {
            return false;
        }
        return trade.getVolume().compareTo(trade.getVolumeDvp()) == 0
                && (trade.getVolumeLp() == null || trade.getVolumeLp().compareTo(BigDecimal.ZERO) == 0)
                && (trade.getVolumeDvd() == null || trade.getVolumeDvd().compareTo(BigDecimal.ZERO) == 0);
    }

    private boolean isFullLpOperation(TradeEntity trade)
    {
        if (trade.getVolume() == null || trade.getVolumeLp() == null)
        {
            return false;
        }
        return trade.getVolume().compareTo(trade.getVolumeLp()) == 0
                && (trade.getVolumeDvp() == null || trade.getVolumeDvp().compareTo(BigDecimal.ZERO) == 0)
                && (trade.getVolumeDvd() == null || trade.getVolumeDvd().compareTo(BigDecimal.ZERO) == 0);
    }

    private BeneficiaryReassignmentOutDto mapSettlementToBeneficiaryOut(SettlementEntity settlement,
            TradeEntity trade,
            boolean canModify)
    {
        InvestorAccountEntity investorAccount = settlement.getInvestorAccount();
        InvestorEntity investor = settlement.getInvestor();

        return BeneficiaryReassignmentOutDto.builder()
                .fractionNumber(settlement.getFraction())
                .tradeId(trade.getId())
                .sideId(settlement.getSide().getId())
                .accountTitles(investorAccount != null ? investorAccount.getAccountNumber() : null)
                .beneficiaryFinalType(investor != null && investor.getIdentificationType() != null
                        ? investor.getIdentificationType().getDescription()
                        : null)
                .beneficiaryFinalNumber(investor != null ? investor.getDocumentNumber() : null)
                .beneficiaryFinalName(investor != null ? investor.getCompanyName() : null)
                .quantity(settlement.getFractionQuantity())
                .totalAmount(settlement.getFractionVolume())
                .commissionPercentage(settlement.getCommissionPercentage())
                .commissionValue(settlement.getCommissionAmount())
                .commissionTax(settlement.getValTaxAmount())
                .reference(settlement.getReference())
                .canModifyQuantity(canModify)
                .canDelete(canModify)
                .build();
    }

    private BigDecimal calculateReassignmentCost(Long countryId)
    {
        return BigDecimal.valueOf(10000); // Example fixed cost; replace with actual logic as needed
    }

    private BigDecimal calculateTaxAmount(BigDecimal amount, Long countryId)
    {
        if (amount == null || amount.compareTo(BigDecimal.ZERO) == 0)
        {
            return BigDecimal.ZERO;
        }

        TaxesEntity taxesEntity = taxesRepository.findByCountryIdAndCode(countryId, "IVA")
                .orElse(null);

        if (taxesEntity == null || taxesEntity.getValue() == null)
        {
            return BigDecimal.ZERO;
        }

        return amount.multiply(taxesEntity.getValue())
                .divide(new BigDecimal("100"), 4, RoundingMode.HALF_UP);
    }

    private void validateBeneficiariesCount(ExtendedReassignmentSetInDto request)
    {
        if (request.getBeneficiaries() == null || request.getBeneficiaries().isEmpty())
        {
            throw new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
        }

        if (request.getBeneficiaries().size() > TypeEnum.MAX_BENEFICIARIES.getValue().intValue())
        {
            throw new ServiceException(ErrorCode.MAXIMUM_LIMIT_FRACTIONS_EXCEED, HttpStatus.BAD_REQUEST);
        }
    }

    private void validateBeneficiariesSum(ExtendedReassignmentSetInDto request, TradeEntity trade,
            boolean canModifyQuantities)
    {
        if (canModifyQuantities)
        {
            return;
        }

        BigDecimal totalQuantity = request.getBeneficiaries().stream()
                .map(BeneficiaryReassignmentInDto::getQuantity)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        BigDecimal tradeVolume = trade.getVolume() != null ? trade.getVolume() : BigDecimal.ZERO;

        if (totalQuantity.compareTo(tradeVolume) != 0)
        {
            throw new ServiceException(ErrorCode.FRACTION_TOTAL_QUANTITY_NOT_CORRESPOND_QUANTITY_TRADE,
                    HttpStatus.BAD_REQUEST);
        }
    }

    private void validateOriginCoherence(ExtendedReassignmentSetInDto request)
    {
        boolean allHaveSameSource = request.getBeneficiaries().stream()
                .map(BeneficiaryReassignmentInDto::getAssignmentSourceId)
                .filter(Objects::nonNull)
                .distinct()
                .count() <= 1;

        if (!allHaveSameSource)
        {
            throw new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
        }
    }

    private void validateCommissions(ExtendedReassignmentSetInDto request, boolean isFullDvp, boolean isFullLp)
    {
        if (isFullDvp || isFullLp)
        {
            return;
        }

        for (BeneficiaryReassignmentInDto beneficiary : request.getBeneficiaries())
        {
            if (beneficiary.getCommissionPercentage() == null
                    || beneficiary.getCommissionPercentage().compareTo(BigDecimal.ZERO) < 0)
            {
                throw new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
            }
        }
    }

    private void deleteFractionsNotInRequest(List<SettlementEntity> currentSettlements,
            ExtendedReassignmentSetInDto request)
    {
        List<SettlementEntity> settlementsNotInRequest = currentSettlements.stream()
                .filter(settlement -> !isSettlementInRequest(settlement, request))
                .toList();

        StatusEntity rejectedStatus = statusRepository.findById(ReassignmentStatusEnum.REASIGNACION_RECHAZADA.getId())
                .orElseThrow(() -> new ServiceException(ErrorCode.STATUS_NOT_FOUND, HttpStatus.NOT_FOUND));

        for (SettlementEntity settlement : settlementsNotInRequest)
        {
            StatusEntity previousStatus = settlement.getStatus();
            settlement.setStatus(rejectedStatus);
            settlement.setLastModifyUser(getHeaderValue(PropertiesEnum.CLIENT_USER.getValue()));
            settlement.setLastModifyApplication(PropertiesEnum.REASSIGNMENT_SERVICE.getValue());
            settlement.setLastModifyDate(LocalDateTime.now());
            settlement.setLastModifyIp(getHeaderValue(PropertiesEnum.CLIENT_IP.getValue()));

            settlementRepository.save(settlement);

            createSettlementStatusHistory(settlement, previousStatus);
        }
    }

    private boolean isSettlementInRequest(SettlementEntity settlement, ExtendedReassignmentSetInDto request)
    {
        return request.getBeneficiaries().stream()
                .anyMatch(b -> matchesSettlement(b, settlement));
    }

    private boolean matchesSettlement(BeneficiaryReassignmentInDto beneficiary, SettlementEntity settlement)
    {
        if (beneficiary.getInvestorAccountId() != null && settlement.getInvestorAccount() != null)
        {
            return beneficiary.getInvestorAccountId().equals(settlement.getInvestorAccount().getId());
        }
        return false;
    }

    private StatusEntity findAcceptedStatus()
    {
        return statusRepository.findById(ReassignmentStatusEnum.REASIGNACION_ACEPTADA.getId())
                .orElseThrow(() -> new ServiceException(ErrorCode.STATUS_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private InvestorAccountEntity findInitialAccount(Long tradeId, String sideId, int fractionNumber)
    {
        SettlementKey key = SettlementKey.builder()
                .trade(tradeId)
                .side(sideId)
                .fraction(fractionNumber)
                .build();

        return settlementRepository.findById(key)
                .map(SettlementEntity::getInvestorAccount)
                .orElse(null);
    }

    private void createReassignmentRecordV2(SettlementEntity settlement, InvestorAccountEntity initialAccount,
            TradeEntity trade)
    {
        if (initialAccount == null)
        {
            initialAccount = settlement.getInvestorAccount();
        }

        ReassignmentEntity reassignment = ReassignmentEntity.builder()
                .trade(TradeEntity.builder().id(settlement.getTrade().getId()).build())
                .fraction(settlement.getFraction())
                .side(SideEntity.builder().id(settlement.getSide().getId()).build())
                .requestDate(LocalDateTime.now().toLocalDate())
                .processType(settlement.getSourceQuoteType())
                .initialAccount(InvestorAccountEntity.builder().id(initialAccount.getId()).build())
                .newAccount(InvestorAccountEntity.builder().id(settlement.getInvestorAccount().getId()).build())
                .status(StatusEntity.builder().id(settlement.getStatus().getId()).build())
                .requestTime(LocalDateTime.now().toLocalTime())
                .detail(ReassignmentStatusEnum.REASIGNACION_ACEPTADA.getValue())
                .lastModifyUser(getHeaderValue(PropertiesEnum.CLIENT_USER.getValue()))
                .lastModifyApplic(PropertiesEnum.REASSIGNMENT_SERVICE.getValue())
                .lastModifyDate(LocalDateTime.now().toLocalDate())
                .lastModifyIp(getHeaderValue(PropertiesEnum.CLIENT_IP.getValue()))
                .correctionNumber(String.valueOf(trade.getId()))
                .build();

        reassignmentRepository.save(reassignment);
    }

    private SettlementEntity processBeneficiary(BeneficiaryReassignmentInDto beneficiary, TradeEntity trade,
            String sideId, int fractionNumber, StatusEntity acceptedStatus,
            boolean canModifyQuantities)
    {

        SideEntity side = sideRepository.findById(sideId)
                .orElseThrow(() -> new ServiceException(ErrorCode.SIDE_NOT_FOUND, HttpStatus.NOT_FOUND));

        InvestorAccountEntity investorAccount = investorAccountRepository
                .findById(beneficiary.getInvestorAccountId())
                .orElseThrow(() -> new ServiceException(ErrorCode.INVESTOR_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND));

        TypeEntity assignmentSource = typeRepository.findById(beneficiary.getAssignmentSourceId())
                .orElseThrow(() -> new ServiceException(ErrorCode.TYPE_NOT_FOUND, HttpStatus.NOT_FOUND));

        SettlementKey key = SettlementKey.builder()
                .trade(trade.getId())
                .side(sideId)
                .fraction(fractionNumber)
                .build();

        SettlementEntity settlement = settlementRepository.findById(key)
                .orElse(new SettlementEntity());

        boolean isNewSettlement = settlement.getTrade() == null;

        if (isNewSettlement)
        {
            settlement.setTrade(trade);
            settlement.setSide(side);
            settlement.setFraction(fractionNumber);

            List<SettlementEntity> existingSettlements = settlementRepository.findByTradeIdAndSideId(trade.getId(),
                    sideId);
            if (!existingSettlements.isEmpty())
            {
                settlement.setTradingSystem(existingSettlements.get(0).getTradingSystem());
            }
        }

        settlement.setInvestorAccount(investorAccount);
        settlement.setInvestor(investorAccount.getInvestor());
        settlement.setSourceQuoteType(assignmentSource);
        settlement.setFractionQuantity(beneficiary.getQuantity());
        settlement.setReference(beneficiary.getReference());
        settlement.setStatus(acceptedStatus);

        BigDecimal price = trade.getPrice() != null ? trade.getPrice() : BigDecimal.ZERO;
        BigDecimal fractionVolume = beneficiary.getQuantity().multiply(price);
        settlement.setFractionVolume(fractionVolume);

        BigDecimal commissionPercentage = beneficiary.getCommissionPercentage() != null
                ? beneficiary.getCommissionPercentage()
                : BigDecimal.ZERO;
        settlement.setCommissionPercentage(commissionPercentage);

        BigDecimal commissionAmount = fractionVolume
                .multiply(commissionPercentage)
                .divide(new BigDecimal("100"), 4, RoundingMode.HALF_UP);
        settlement.setCommissionAmount(commissionAmount);

        BigDecimal taxAmount = calculateTaxAmount(commissionAmount, trade.getCountry().getId());
        settlement.setValTaxAmount(taxAmount);

        if (beneficiary.getBankAccountId() != null)
        {
            BankAccountEntity bankAccount = bankAccountRepository.findById(beneficiary.getBankAccountId())
                    .orElseThrow(() -> new ServiceException(ErrorCode.BANK_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND));
            settlement.setBankAccount(bankAccount);
        }

        settlement.setLastModifyUser(getHeaderValue(PropertiesEnum.CLIENT_USER.getValue()));
        settlement.setLastModifyApplication(PropertiesEnum.REASSIGNMENT_SERVICE.getValue());
        settlement.setLastModifyDate(LocalDateTime.now());
        settlement.setLastModifyIp(getHeaderValue(PropertiesEnum.CLIENT_IP.getValue()));

        settlementRepository.save(settlement);

        return settlement;
    }
}

```

## src/main/java/com/nubo/operations/special/espec/api/service/impl/SpecialSettlementServiceImpl.java

```java
package com.nubo.operations.special.espec.api.service.impl;

import com.nubo.operations.special.espec.api.application.properties.PropertiesConfig;
import com.nubo.operations.special.espec.api.application.properties.PropertiesContext;
import com.nubo.operations.special.espec.api.client.operation.special.fractionation.dto.request.AssignmentSpecialSettlementInDto;
import com.nubo.operations.special.espec.api.client.operation.special.fractionation.dto.request.FractionSpecialSettlementInDto;
import com.nubo.operations.special.espec.api.client.operation.special.fractionation.service.FractionationSpecialSettlementClient;
import com.nubo.operations.special.espec.api.exception.ServiceException;
import com.nubo.operations.special.espec.api.exception.error.ErrorCode;
import com.nubo.operations.special.espec.api.helpers.MapperPageUtil;
import com.nubo.operations.special.espec.api.helpers.MapperUtil;
import com.nubo.operations.special.espec.api.helpers.dynamicQuery.dataBase.SpecialSettlementSpecificationFactory;
import com.nubo.operations.special.espec.api.models.dto.request.SpecialSettlementInDto;
import com.nubo.operations.special.espec.api.models.dto.request.SpecialSettlementParamInDto;
import com.nubo.operations.special.espec.api.models.dto.request.SpecialSettlementUpdateInDto;
import com.nubo.operations.special.espec.api.models.dto.response.BankAccountOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.FractionAccountSpecialSettlementOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.InvestorAccountOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.SpecialSettlementOutDto;
import com.nubo.operations.special.espec.api.models.entity.BankAccountEntity;
import com.nubo.operations.special.espec.api.models.entity.InvestorAccountEntity;
import com.nubo.operations.special.espec.api.models.entity.InvestorEntity;
import com.nubo.operations.special.espec.api.models.entity.ParticipantAccountEntity;
import com.nubo.operations.special.espec.api.models.entity.SideEntity;
import com.nubo.operations.special.espec.api.models.entity.SpecialSettlementEntity;
import com.nubo.operations.special.espec.api.models.entity.SpecialSettlementKey;
import com.nubo.operations.special.espec.api.models.entity.SpecialTradeEntity;
import com.nubo.operations.special.espec.api.models.enums.TypeEnum;
import com.nubo.operations.special.espec.api.models.enums.VersionApiEnum;
import com.nubo.operations.special.espec.api.models.enums.SearchOperationEnum;
import com.nubo.operations.special.espec.api.repository.BankAccountRepository;
import com.nubo.operations.special.espec.api.repository.InvestorAccountRepository;
import com.nubo.operations.special.espec.api.repository.InvestorRepository;
import com.nubo.operations.special.espec.api.repository.ParticipantAccountRepository;
import com.nubo.operations.special.espec.api.repository.SideRepository;
import com.nubo.operations.special.espec.api.repository.SpecialSettlementRepository;
import com.nubo.operations.special.espec.api.repository.SpecialTradeRepository;
import com.nubo.operations.special.espec.api.service.SpecialSettlementService;
import jakarta.persistence.criteria.Predicate;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;

@Service
@RequiredArgsConstructor
@Slf4j
public class SpecialSettlementServiceImpl implements SpecialSettlementService {

    private final SpecialSettlementRepository specialSettlementRepository;
    private final InvestorRepository investorRepository;
    private final InvestorAccountRepository investorAccountRepository;
    private final BankAccountRepository bankAccountRepository;
    private final ParticipantAccountRepository participantAccountRepository;
    private final SideRepository sideRepository;
    private final SpecialTradeRepository specialTradeRepository;
    private final FractionationSpecialSettlementClient fractionationSpecialSettlementClient;
    private final PropertiesConfig propertiesConfig;

    @Override
    @Transactional
    public PageResponseOutDto<SpecialSettlementOutDto> findAllSpecialSettlement(SpecialSettlementParamInDto specialSettlementParamInDto,
                                                                                int page,
                                                                                int size,
                                                                                String sort,
                                                                                String order,
                                                                                boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllSpecialSettlementV1(specialSettlementParamInDto, page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<SpecialSettlementOutDto> findAllSpecialSettlementV1(SpecialSettlementParamInDto specialSettlementParamInDto,
                                                                                   int page,
                                                                                   int size,
                                                                                   String sort,
                                                                                   String order,
                                                                                   boolean all) {
        log.info("Start method findAllSpecialSettlementV1");

        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "specialTradeId");

        if (all) {
            List<SpecialSettlementEntity> allResults = specialSettlementRepository.findAll(specialSettlementSpecification(specialSettlementParamInDto), sortObj);

            if (allResults.isEmpty()) {
                return buildPageResponseSpecialSettlement(List.of(), 0, allResults.size(), 0);
            }

            List<SpecialSettlementOutDto> specialSettlementOutDtoList = allResults.stream()
                    .map(MapperUtil::specialSettlementEntityToAllSpecialSettlementOutDto)
                    .toList();

            log.debug("End method findAllSpecialSettlementV1, specialSettlementOutDtoList -> {}", specialSettlementOutDtoList.size());

            return buildPageResponseSpecialSettlement(specialSettlementOutDtoList, 0, allResults.size(), allResults.size());
        } else {
            Pageable pageable = PageRequest.of(page, size, sortObj);
            Page<SpecialSettlementEntity> pageResult = specialSettlementRepository.findAll(specialSettlementSpecification(specialSettlementParamInDto), pageable);

            if (pageResult.isEmpty()) {
                return buildPageResponseSpecialSettlement(List.of(), page, size, 0);
            }

            List<SpecialSettlementOutDto> specialSettlementOutDtoList = pageResult.getContent().stream()
                    .map(MapperUtil::specialSettlementEntityToAllSpecialSettlementOutDto)
                    .toList();

            log.debug("End method findAllSpecialSettlementV1, specialSettlementOutDtoList -> {}", specialSettlementOutDtoList.size());

            return MapperPageUtil.pageToPageResponseOutDto(specialSettlementOutDtoList, pageResult);
        }
    }

    private PageResponseOutDto<SpecialSettlementOutDto> buildPageResponseSpecialSettlement(List<SpecialSettlementOutDto> content, int pageNumber, int pageSize, int totalElements) {
        PageResponseOutDto<SpecialSettlementOutDto> response = new PageResponseOutDto<>();
        response.setContent(content);
        response.setPageNumber(pageNumber);
        response.setPageSize(pageSize);
        response.setTotalElements((long) totalElements);
        response.setTotalPages(totalElements > 0 ? (int) Math.ceil((double) totalElements / pageSize) : 0);
        return response;
    }

    @Override
    public PageResponseOutDto<SpecialSettlementOutDto> findAllSpecialSettlementDynamic(String fieldName, String fieldValue, String operation,
                                                                                       Long specialTradeId, Integer fraction, String sideId,
                                                                                       Long investorId, Long investorAccountId, Long participantAccountId, Long bankAccountId,
                                                                                       int page,
                                                                                       int size,
                                                                                       String sort,
                                                                                       String order,
                                                                                       boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllSpecialSettlementDynamicV1(fieldName, fieldValue, operation,
                    specialTradeId, fraction, sideId, investorId, investorAccountId, participantAccountId, bankAccountId,
                    page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }


    private PageResponseOutDto<SpecialSettlementOutDto> findAllSpecialSettlementDynamicV1(String fieldName, String fieldValue, String operation,
                                                                                          Long specialTradeId, Integer fraction, String sideId,
                                                                                          Long investorId, Long investorAccountId, Long participantAccountId, Long bankAccountId,
                                                                                          int page,
                                                                                          int size,
                                                                                          String sort,
                                                                                          String order,
                                                                                          boolean all) {
        log.info("Start method findAllSpecialSettlementDynamicV1");

        SearchOperationEnum searchOperation = (operation != null) ? SearchOperationEnum.fromValue(operation) : null;
       
        if (operation != null && searchOperation == null) {
            log.warn("Invalid operation: {}", operation);
            throw new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
        }

        Specification<SpecialSettlementEntity> spec = SpecialSettlementSpecificationFactory.createCombinedFilter(
            specialTradeId, fraction, sideId, investorId, investorAccountId, participantAccountId, bankAccountId,
            fieldName, fieldValue, searchOperation);

        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "specialTradeId");

        if (all) {
            List<SpecialSettlementEntity> allResults = specialSettlementRepository.findAll(spec, sortObj);

            if (allResults.isEmpty()) {
                return buildPageResponseSpecialSettlementDynamic(List.of(), 0, allResults.size(), 0);
            }

            List<SpecialSettlementOutDto> specialSettlementOutDtoList = allResults.stream()
                    .map(MapperUtil::specialSettlementEntityToAllSpecialSettlementOutDto)
                    .toList();

            log.debug("End method findAllSpecialSettlementDynamicV1, specialSettlementOutDtoList -> {}", specialSettlementOutDtoList.size());

            return buildPageResponseSpecialSettlementDynamic(specialSettlementOutDtoList, 0, allResults.size(), allResults.size());
        } else {
            Pageable pageable = PageRequest.of(page, size, sortObj);
            Page<SpecialSettlementEntity> pageResult = specialSettlementRepository.findAll(spec, pageable);

            if (pageResult.isEmpty()) {
                return buildPageResponseSpecialSettlementDynamic(List.of(), page, size, 0);
            }

            List<SpecialSettlementOutDto> specialSettlementOutDtoList = pageResult.getContent().stream()
                    .map(MapperUtil::specialSettlementEntityToAllSpecialSettlementOutDto)
                    .toList();

            log.debug("End method findAllSpecialSettlementDynamicV1, specialSettlementOutDtoList -> {}", specialSettlementOutDtoList.size());

            return MapperPageUtil.pageToPageResponseOutDto(specialSettlementOutDtoList, pageResult);
        }
    }

    private PageResponseOutDto<SpecialSettlementOutDto> buildPageResponseSpecialSettlementDynamic(List<SpecialSettlementOutDto> content, int pageNumber, int pageSize, int totalElements) {
        PageResponseOutDto<SpecialSettlementOutDto> response = new PageResponseOutDto<>();
        response.setContent(content);
        response.setPageNumber(pageNumber);
        response.setPageSize(pageSize);
        response.setTotalElements((long) totalElements);
        response.setTotalPages(totalElements > 0 ? (int) Math.ceil((double) totalElements / pageSize) : 0);
        return response;
    }

    @Override
    public SpecialSettlementOutDto findSpecialSettlementById(Long specialTradeId, Integer fraction, String sideId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findSpecialSettlementByIdV1(specialTradeId, fraction, sideId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private SpecialSettlementOutDto findSpecialSettlementByIdV1(Long specialTradeId, Integer fraction, String sideId) {
        log.info("Start method findSpecialSettlementByIdV1, specialTradeId -> {}, fraction -> {}, sideId -> {}",
                specialTradeId, fraction, sideId);


        SpecialSettlementEntity specialSettlementEntity = validateSpecialSettlement(specialTradeId, fraction, sideId);

        SpecialSettlementOutDto specialSettlementOutDto = MapperUtil.specialSettlementEntityToSpecialSettlementOutDto(specialSettlementEntity);

        log.info("End method findSpecialSettlementByIdV1, specialSettlementOutDto -> {}", specialSettlementOutDto);

        return specialSettlementOutDto;
    }

    @Override
    public SpecialSettlementOutDto createSpecialSettlement(SpecialSettlementInDto specialSettlementInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return createSpecialSettlementV1(specialSettlementInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private SpecialSettlementOutDto createSpecialSettlementV1(SpecialSettlementInDto specialSettlementInDto) {
        log.info("Start method createSpecialSettlementV1, specialSettlementInDto -> {}", specialSettlementInDto);

        SpecialSettlementKey specialSettlementKey = SpecialSettlementKey.builder()
                .specialTrade(specialSettlementInDto.getSpecialTradeId())
                .fraction(specialSettlementInDto.getFraction())
                .side(specialSettlementInDto.getSideId())
                .build();

        Optional<SpecialSettlementEntity> specialSettlementEntityLast = specialSettlementRepository.findById(specialSettlementKey);
        if (specialSettlementEntityLast.isPresent()) {
            throw new ServiceException(ErrorCode.SPECIAL_SETTLEMENT_EXISTS, HttpStatus.BAD_REQUEST);
        }

        SpecialSettlementEntity specialSettlementEntity = SpecialSettlementEntity.builder()
                .specialTrade(validateSpecialTrade(specialSettlementInDto.getSpecialTradeId()))
                .fraction(specialSettlementInDto.getFraction())
                .side(validateSide(specialSettlementInDto.getSideId()))
                .investor(validateInvestor(specialSettlementInDto.getInvestorId()))
                .investorAccount(validateInvestorAccount(specialSettlementInDto.getInvestorAccountId()))
                .participantAccount(validateParticipantAccount(specialSettlementInDto.getParticipantAccountId()))
                .bankAccount(validateBankAccount(specialSettlementInDto.getBankAccountId()))
                .fiduciarySpecialist(specialSettlementInDto.getFiduciarySpecialist())
                .commissionPercentage(specialSettlementInDto.getCommissionPercentage())
                .fractionPercentage(specialSettlementInDto.getFractionPercentage())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();

        SpecialSettlementOutDto specialSettlementOutDto = MapperUtil.specialSettlementEntityToSpecialSettlementOutDto(
                specialSettlementRepository.save(specialSettlementEntity));

        log.info("End method createSettlementV1, specialSettlementOutDto -> {}", specialSettlementOutDto);

        return specialSettlementOutDto;
    }

    @Override
    public SpecialSettlementOutDto updateSpecialSettlement(SpecialSettlementUpdateInDto specialSettlementUpdateInDto,
                                                           Long specialTradeId, Integer fraction, String sideId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return updateSpecialSettlementV1(specialSettlementUpdateInDto, specialTradeId, fraction, sideId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private SpecialSettlementOutDto updateSpecialSettlementV1(SpecialSettlementUpdateInDto specialSettlementUpdateInDto,
                                                              Long specialTradeId, Integer fraction, String sideId) {
        log.info("Start method updateSettlementV1, specialSettlementUpdateInDto -> {}", specialSettlementUpdateInDto);

        SpecialSettlementEntity specialSettlementEntityLast = validateSpecialSettlement(specialTradeId, fraction, sideId);

        SpecialSettlementEntity specialSettlementEntity = SpecialSettlementEntity.builder()
                .specialTrade(specialSettlementEntityLast.getSpecialTrade())
                .fraction(fraction)
                .side(specialSettlementEntityLast.getSide())
                .investor(ObjectUtils.isEmpty(specialSettlementUpdateInDto.getInvestorId())
                        ? specialSettlementEntityLast.getInvestor()
                        : validateInvestor(specialSettlementUpdateInDto.getInvestorId()))
                .investorAccount(ObjectUtils.isEmpty(specialSettlementUpdateInDto.getInvestorAccountId())
                        ? specialSettlementEntityLast.getInvestorAccount()
                        : validateInvestorAccount(specialSettlementUpdateInDto.getInvestorAccountId()))
                .participantAccount(ObjectUtils.isEmpty(specialSettlementUpdateInDto.getParticipantAccountId())
                        ? specialSettlementEntityLast.getParticipantAccount()
                        : validateParticipantAccount(specialSettlementUpdateInDto.getParticipantAccountId()))
                .fiduciarySpecialist(specialSettlementUpdateInDto.getFiduciarySpecialist())
                .commissionPercentage(specialSettlementUpdateInDto.getCommissionPercentage())
                .fractionPercentage(specialSettlementUpdateInDto.getFractionPercentage())
                .bankAccount(ObjectUtils.isEmpty(specialSettlementUpdateInDto.getBankAccountId())
                        ? specialSettlementEntityLast.getBankAccount()
                        : validateBankAccount(specialSettlementUpdateInDto.getBankAccountId()))
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();

        SpecialSettlementOutDto specialSettlementOutDto = MapperUtil.specialSettlementEntityToSpecialSettlementOutDto(
                specialSettlementRepository.save(specialSettlementEntity));

        log.info("End method updateSettlementV1, specialSettlementOutDto -> {}", specialSettlementOutDto);

        return specialSettlementOutDto;
    }

    @Override
    public List<SpecialSettlementOutDto> createFractions(Long specialTradeId,
                                                         List<FractionSpecialSettlementInDto> fractionSpecialSettlementInDtoList) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return createFractionsV1(specialTradeId, fractionSpecialSettlementInDtoList);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<SpecialSettlementOutDto> createFractionsV1(Long specialTradeId,
                                                            List<FractionSpecialSettlementInDto> fractionSpecialSettlementInDtoList) {
        log.info("Start method createFractionsV1 with specialTradeId -> {}", specialTradeId);

        SpecialTradeEntity specialTradeEntity = validateSpecialTrade(specialTradeId);
        validateCreateFraction(specialTradeEntity, fractionSpecialSettlementInDtoList);

        List<SpecialSettlementOutDto> specialSettlementOutDtoList = fractionationSpecialSettlementClient.createFractions(specialTradeEntity.getId(),
                fractionSpecialSettlementInDtoList);

        log.info("End method createFractionsV1, specialSettlementOutDtoList -> {}", specialSettlementOutDtoList);

        return specialSettlementOutDtoList;
    }

    @Override
    public List<SpecialSettlementOutDto> updateAssignment(Long specialTradeId,
                                                          List<AssignmentSpecialSettlementInDto> assignmentSpecialSettlementInDtoList) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return updateAssignmentV1(specialTradeId, assignmentSpecialSettlementInDtoList);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<SpecialSettlementOutDto> updateAssignmentV1(Long specialTradeId,
                                                             List<AssignmentSpecialSettlementInDto> assignmentSpecialSettlementInDtoList) {
        log.info("Start method updateAssignmentV1 with specialTradeId -> {}", specialTradeId);

        SpecialTradeEntity specialTradeEntity = validateSpecialTrade(specialTradeId);
        validateUpdateFraction(specialTradeEntity, assignmentSpecialSettlementInDtoList);

        List<SpecialSettlementOutDto> specialSettlementOutDtoList = fractionationSpecialSettlementClient.updateAssignment(specialTradeEntity.getId(),
                assignmentSpecialSettlementInDtoList);

        log.info("End method updateAssignmentV1, specialSettlementOutDtoList -> {}", specialSettlementOutDtoList);

        return specialSettlementOutDtoList;
    }

    @Override
    public FractionAccountSpecialSettlementOutDto validateAccountFraction(String accountNumber, Long specialTradeId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateAccountFractionV1(accountNumber, specialTradeId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private FractionAccountSpecialSettlementOutDto validateAccountFractionV1(String accountNumber, Long specialTradeId) {
        log.debug("Start method FractionAccountSpecialSettlementOutDto, accountNumber -> {}, specialTradeId -> {}", accountNumber, specialTradeId);

        SpecialTradeEntity specialTradeEntity = validateSpecialTrade(specialTradeId);

        InvestorAccountEntity investorAccountEntity = investorAccountRepository.findByAccountNumber(accountNumber)
                .orElseThrow(() -> new ServiceException(ErrorCode.INVESTOR_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND));

        if (!specialTradeEntity.getDepository().getId().equals(investorAccountEntity.getDepository().getId())) {
            throw new ServiceException(ErrorCode.INVESTOR_ACCOUNT_NOT_EXIST_IN_DEPOSITORY, HttpStatus.BAD_REQUEST);
        }

        FractionAccountSpecialSettlementOutDto fractionAccountSpecialSettlementOutDto = FractionAccountSpecialSettlementOutDto.builder().build();
        fractionAccountSpecialSettlementOutDto.setJointAccount(false);

        InvestorAccountOutDto investorAccountOutDto = MapperUtil.investorAccountEntityToInvestorAccountOutDto(investorAccountEntity);
        assert investorAccountOutDto != null;
        fractionAccountSpecialSettlementOutDto.setInvestorAccount(investorAccountOutDto);
        fractionAccountSpecialSettlementOutDto.setJointAccount(TypeEnum.JOINT_ACCOUNT.getValue().equals(investorAccountOutDto.getType().getId()));

        List<BankAccountEntity> bankAccountEntityList = bankAccountRepository.findByBankAccountByInvestorId(investorAccountOutDto.getInvestor().getId());
        List<BankAccountOutDto> investorBankAccount = bankAccountEntityList.stream().map(MapperUtil::bankAccountEntityToBankAccountOutDto).toList();
        fractionAccountSpecialSettlementOutDto.setInvestorBankAccounts(investorBankAccount);

        log.info("End method FractionAccountSpecialSettlementOutDto, fractionAccountSpecialSettlementOutDto -> {}", fractionAccountSpecialSettlementOutDto);

        return fractionAccountSpecialSettlementOutDto;
    }

    private void validateCreateFraction(SpecialTradeEntity specialTradeEntity,
                                        List<FractionSpecialSettlementInDto> fractionSpecialSettlementInDtoList) {

        Set<Long> duplicatedAccountList = new HashSet<>();
        for (FractionSpecialSettlementInDto fractionSpecialSettlementInDto : fractionSpecialSettlementInDtoList) {
            if(!ObjectUtils.isEmpty(fractionSpecialSettlementInDto.getInvestorAccountId()) &&
                    !duplicatedAccountList.add(fractionSpecialSettlementInDto.getInvestorAccountId())){
                throw new ServiceException(ErrorCode.INVESTOR_ACCOUNT_DUPLICATED, HttpStatus.BAD_REQUEST);
            }
        }

        BigDecimal totalFractionPercentage = BigDecimal.ZERO;

        for (FractionSpecialSettlementInDto fractionSpecialSettlementInDto : fractionSpecialSettlementInDtoList) {
            this.validateFraction(specialTradeEntity, fractionSpecialSettlementInDto.getInvestorAccountId());
            totalFractionPercentage = totalFractionPercentage.add(fractionSpecialSettlementInDto.getFractionPercentage());
        }

        if (totalFractionPercentage.compareTo(BigDecimal.valueOf(100)) != 0) {
            throw new ServiceException(ErrorCode.FRACTION_PERCENTAGE_TOTAL_NOT_CORRESPOND_ONE_HUNDRED_PERCENT, HttpStatus.BAD_REQUEST);
        }
    }

    private void validateUpdateFraction(SpecialTradeEntity specialTradeEntity,
                                        List<AssignmentSpecialSettlementInDto> assignmentSpecialSettlementInDtoList) {

        Set<Long> duplicatedAccountList = new HashSet<>();
        for (AssignmentSpecialSettlementInDto assignmentSpecialSettlementInDto : assignmentSpecialSettlementInDtoList) {
            if(!ObjectUtils.isEmpty(assignmentSpecialSettlementInDto.getInvestorAccountId()) &&
                    !duplicatedAccountList.add(assignmentSpecialSettlementInDto.getInvestorAccountId())){
                throw new ServiceException(ErrorCode.INVESTOR_ACCOUNT_DUPLICATED, HttpStatus.BAD_REQUEST);
            }
        }

        BigDecimal totalFractionPercentage = BigDecimal.ZERO;

        for (AssignmentSpecialSettlementInDto assignmentSpecialSettlementInDto : assignmentSpecialSettlementInDtoList) {
            this.validateFraction(specialTradeEntity, assignmentSpecialSettlementInDto.getInvestorAccountId());
            totalFractionPercentage = totalFractionPercentage.add(assignmentSpecialSettlementInDto.getFractionPercentage());
        }

        if (totalFractionPercentage.compareTo(BigDecimal.valueOf(100)) != 0) {
            throw new ServiceException(ErrorCode.FRACTION_PERCENTAGE_TOTAL_NOT_CORRESPOND_ONE_HUNDRED_PERCENT, HttpStatus.BAD_REQUEST);
        }
    }

    private void validateFraction(SpecialTradeEntity specialTradeEntity, Long investorAccountId) {
        InvestorAccountEntity investorAccountEntity = validateInvestorAccount(investorAccountId);
        String accountNumber = investorAccountEntity.getAccountNumber();
        this.validateAccountFraction(accountNumber, specialTradeEntity.getId());
    }

    private Specification<SpecialSettlementEntity> specialSettlementSpecification(SpecialSettlementParamInDto
                                                                                          specialSettlementParamInDto) {
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();
            if (specialSettlementParamInDto.getSpecialTradeId() != null) {
                predicates.add(criteriaBuilder.equal(root.get("specialTrade").get("id"), specialSettlementParamInDto.getSpecialTradeId()));
            }
            if (specialSettlementParamInDto.getFraction() != null) {
                predicates.add(criteriaBuilder.equal(root.get("fraction"), specialSettlementParamInDto.getFraction()));
            }
            if (specialSettlementParamInDto.getSideId() != null) {
                predicates.add(criteriaBuilder.equal(root.get("side").get("id"), specialSettlementParamInDto.getSideId()));
            }
            if (specialSettlementParamInDto.getInvestorId() != null) {
                predicates.add(criteriaBuilder.equal(root.get("investor").get("id"), specialSettlementParamInDto.getInvestorId()));
            }
            if (specialSettlementParamInDto.getInvestorAccountId() != null) {
                predicates.add(criteriaBuilder.equal(root.get("investorAccount").get("id"), specialSettlementParamInDto.getInvestorAccountId()));
            }
            if (specialSettlementParamInDto.getBankAccountId() != null) {
                predicates.add(criteriaBuilder.equal(root.get("bankAccount").get("id"), specialSettlementParamInDto.getBankAccountId()));
            }
            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }

    private SpecialSettlementEntity validateSpecialSettlement(Long specialTradeId, Integer fraction, String sideId) {
        SpecialSettlementKey specialSettlementKey = SpecialSettlementKey.builder()
                .specialTrade(specialTradeId)
                .fraction(fraction)
                .side(sideId)
                .build();
        return specialSettlementRepository.findById(specialSettlementKey)
                .orElseThrow(() -> new ServiceException(ErrorCode.SPECIAL_SETTLEMENT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private SpecialTradeEntity validateSpecialTrade(Long specialTradeId) {
        return specialTradeRepository.findById(specialTradeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.SPECIAL_TRADE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private SideEntity validateSide(String sideId) {
        return sideRepository.findById(sideId)
                .orElseThrow(() -> new ServiceException(ErrorCode.SIDE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private InvestorEntity validateInvestor(Long investorId) {
        return investorRepository.findById(investorId)
                .orElseThrow(() -> new ServiceException(ErrorCode.INVESTOR_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private InvestorAccountEntity validateInvestorAccount(Long investorAccountId) {
        return investorAccountRepository.findById(investorAccountId)
                .orElseThrow(() -> new ServiceException(ErrorCode.INVESTOR_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private ParticipantAccountEntity validateParticipantAccount(Long participantAccount) {
        return participantAccountRepository.findById(participantAccount)
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private BankAccountEntity validateBankAccount(Long bankAccountId) {
        return bankAccountRepository.findById(bankAccountId)
                .orElseThrow(() -> new ServiceException(ErrorCode.BANK_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

}

```

## src/main/java/com/nubo/operations/special/espec/api/service/impl/SpecialTradeServiceImpl.java

```java
package com.nubo.operations.special.espec.api.service.impl;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.*;

import com.nubo.operations.special.espec.api.application.util.ApplicationUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import com.nubo.operations.special.espec.api.models.entity.*;
import com.nubo.operations.special.espec.api.repository.*;


import com.nubo.operations.special.espec.api.application.properties.PropertiesConfig;
import com.nubo.operations.special.espec.api.application.properties.PropertiesContext;
import com.nubo.operations.special.espec.api.exception.ServiceException;
import com.nubo.operations.special.espec.api.exception.error.ErrorCode;
import com.nubo.operations.special.espec.api.helpers.MapperPageUtil;
import com.nubo.operations.special.espec.api.helpers.MapperUtil;
import com.nubo.operations.special.espec.api.helpers.dynamicQuery.dataBase.SpecialTradeSpecificationFactory;
import com.nubo.operations.special.espec.api.models.dto.request.SpecialTradeFilterRequestDto;
import com.nubo.operations.special.espec.api.models.dto.request.SpecialTradeInDto;
import com.nubo.operations.special.espec.api.models.dto.request.SpecialTradeParamInDto;
import com.nubo.operations.special.espec.api.models.dto.request.SpecialTradeUpdateInDto;
import com.nubo.operations.special.espec.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.SimplySpecialTradeOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.SpecialTradeOutDto;
import com.nubo.operations.special.espec.api.models.enums.CustodianStatusEnum;
import com.nubo.operations.special.espec.api.models.enums.SearchOperationEnum;
import com.nubo.operations.special.espec.api.models.enums.VersionApiEnum;
import com.nubo.operations.special.espec.api.service.SpecialTradeService;

import jakarta.persistence.criteria.Join;
import jakarta.persistence.criteria.Predicate;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class SpecialTradeServiceImpl implements SpecialTradeService {

    private final SpecialTradeRepository specialTradeRepository;
    private final CountryRepository countryRepository;
    private final TypeRepository typeRepository;
    private final SecurityTitleRepository securityTitleRepository;
    private final DepositoryRepository depositoryRepository;
    private final SideRepository sideRepository;
    private final StatusRepository statusRepository;
    private final ParticipantRepository participantRepository;
    private final AfpFundRepository afpFundRepository;
    private final CurrencyRepository currencyRepository;
    private final ExchangeRateRepository exchangeRateRepository;
    private final MarketRepository marketRepository;
    private final TradeRepository tradeRepository;
    private final HolidayRepository holidayRepository;
    private final PropertiesConfig propertiesConfig;

    @Override
    public PageResponseOutDto<SpecialTradeOutDto> findAllSpecialTrade(SpecialTradeParamInDto specialTradeParamInDto,
                                                                      int page,
                                                                      int size,
                                                                      String sort,
                                                                      String order,
                                                                      boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllSpecialTradeV1(specialTradeParamInDto, page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<SpecialTradeOutDto> findAllSpecialTradeV1(SpecialTradeParamInDto specialTradeParamInDto,
                                                                         int page,
                                                                         int size,
                                                                         String sort,
                                                                         String order,
                                                                         boolean all) {
        log.info("Start method findAllSpecialTradeV1");

        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "id");

        if (all) {
            List<SpecialTradeEntity> allResults = specialTradeRepository.findAll(specialTradeSpecification(specialTradeParamInDto), sortObj);

            if (allResults.isEmpty()) {
                return buildPageResponseSpecialTrade(List.of(), 0, allResults.size(), 0);
            }

            List<SpecialTradeOutDto> specialTradeOutDtoList = allResults.stream()
                    .map(MapperUtil::specialTradeEntityToAllSpecialTradeOutDto)
                    .toList();

            log.info("End method findAllSpecialTradeV1, specialTradeOutDtoList -> {}", specialTradeOutDtoList);

            return buildPageResponseSpecialTrade(specialTradeOutDtoList, 0, allResults.size(), allResults.size());
        } else {
            Pageable pageable = PageRequest.of(page, size, sortObj);
            Page<SpecialTradeEntity> pageResult = specialTradeRepository.findAll(specialTradeSpecification(specialTradeParamInDto), pageable);

            if (pageResult.isEmpty()) {
                return buildPageResponseSpecialTrade(List.of(), page, size, 0);
            }

            List<SpecialTradeOutDto> specialTradeOutDtoList = pageResult.getContent().stream()
                    .map(MapperUtil::specialTradeEntityToAllSpecialTradeOutDto)
                    .toList();

            log.info("End method findAllSpecialTradeV1, specialTradeOutDtoList -> {}", specialTradeOutDtoList);

            return MapperPageUtil.pageToPageResponseOutDto(specialTradeOutDtoList, pageResult);
        }
    }

    private PageResponseOutDto<SpecialTradeOutDto> buildPageResponseSpecialTradeDynamic(List<SpecialTradeOutDto> content, int pageNumber, int pageSize, int totalElements) {
        PageResponseOutDto<SpecialTradeOutDto> response = new PageResponseOutDto<>();
        response.setContent(content);
        response.setPageNumber(pageNumber);
        response.setPageSize(pageSize);
        response.setTotalElements((long) totalElements);
        response.setTotalPages(totalElements > 0 ? (int) Math.ceil((double) totalElements / pageSize) : 0);
        return response;
    }

    @Override
    public SpecialTradeOutDto findSpecialTradeById(Long specialTradeId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findSpecialTradeByIdV1(specialTradeId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private SpecialTradeOutDto findSpecialTradeByIdV1(Long specialTradeId) {
        log.info("Start method findSpecialTradeByIdV1, specialTradeId -> {}", specialTradeId);

        SpecialTradeEntity specialTradeEntity = validateSpecialTrade(specialTradeId);

        List<TradeEntity> tradeEntityList = tradeRepository.findAllTradesBySpecialTrade(specialTradeId);

        BigDecimal totalAmount = tradeEntityList.stream()
                .filter(t -> t.getType() != null)
                .filter(t -> t.getType().getDescription() != null)
                .filter(t -> !t.getType().getDescription().equalsIgnoreCase("MEDIOS DE PAGO"))
                .map(TradeEntity::getVolume)
                .filter(Objects::nonNull)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        BigDecimal quantity = tradeEntityList.stream()
                .filter(t -> t.getType() != null)
                .filter(t -> t.getType().getDescription() != null)
                .filter(t -> !t.getType().getDescription().equalsIgnoreCase("MEDIOS DE PAGO"))
                .map(TradeEntity::getQuantity)
                .filter(Objects::nonNull)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        SpecialTradeOutDto specialTradeOutDto = MapperUtil.specialTradeEntityToAllSpecialTradeOutDto(specialTradeEntity);

        specialTradeOutDto.setTotalAmount(totalAmount);
        specialTradeOutDto.setTotalAmountLocal(totalAmount);
        specialTradeOutDto.setQuantity(quantity);
        specialTradeOutDto.setNumberFolios(tradeEntityList.size());


        log.info("End method findSpecialTradeByIdV1, specialTradeOutDto -> {}", specialTradeOutDto);

        return specialTradeOutDto;
    }

    @Override
    public SpecialTradeOutDto createSpecialTrade(SpecialTradeInDto specialTradeInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return createSpecialTradeV1(specialTradeInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private SpecialTradeOutDto createSpecialTradeV1(SpecialTradeInDto specialTradeInDto) {
        log.debug("Start method createSpecialTradeV1, specialTradeInDto -> {}", specialTradeInDto);

        SpecialTradeEntity specialTradeEntity = SpecialTradeEntity.builder()
                .recordDate(specialTradeInDto.getRecordDate())
                .specialOperationId(specialTradeInDto.getSpecialOperationId())
                .settlementDate(specialTradeInDto.getSettlementDate())
                .daysToSettlement(specialTradeInDto.getDaysToSettlement())
                .specialOperationName(specialTradeInDto.getSpecialOperationName())
                .country(validateCountry(specialTradeInDto.getCountryId()))
                .type(validateType(specialTradeInDto.getTypeId()))
                .securityTitle(validateSecurityTitle(specialTradeInDto.getSecurityId()))
                .depository(validateDepository(specialTradeInDto.getDepositoryId()))
                .side(validateSide(specialTradeInDto.getSideId()))
                .status(validateStatus(specialTradeInDto.getStatusId()))
                .directDepositor(validateParticipant(specialTradeInDto.getDirectDepositor()))
                .clientSettlementAgent(validateDepository(specialTradeInDto.getClientSettlementAgent()))
                .afpFund(validateAfpFund(specialTradeInDto.getAfpFundId()))
                .marketEntity(validateMarketEntity(specialTradeInDto.getMarketEntityId()))
                .totalAmount(specialTradeInDto.getTotalAmount())
                .totalAmountLocal(specialTradeInDto.getTotalAmountLocal())
                .currency(validateCurrency(specialTradeInDto.getCurrencyId()))
                .exchangeRate(validateExchangeRate(specialTradeInDto.getExchangeRateId()))
                .price(specialTradeInDto.getPrice())
                .quantity(specialTradeInDto.getQuantity())
                .numberFolios(specialTradeInDto.getNumberFolios())
                .fractionalMark(specialTradeInDto.getFractionalMark())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();

        SpecialTradeOutDto specialTradeOutDto = MapperUtil.specialTradeEntityToAllSpecialTradeOutDto(specialTradeRepository.save(specialTradeEntity));

        log.info("End method createSpecialTradeV1, specialTradeOutDto -> {}", specialTradeOutDto);

        return specialTradeOutDto;
    }
    @Transactional
    @Override
    public SpecialTradeOutDto updateSpecialTrade(SpecialTradeUpdateInDto specialTradeUpdateInDto, Long specialTradeId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return updateSpecialTradeV1(specialTradeUpdateInDto, specialTradeId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private SpecialTradeOutDto updateSpecialTradeV1(SpecialTradeUpdateInDto specialTradeUpdateInDto, Long specialTradeId) {
        log.debug("Start method updateSpecialTradeV1, specialTradeUpdateInDto -> {}, specialTradeId -> {}",
                specialTradeUpdateInDto, specialTradeId);

        SpecialTradeEntity specialTradeEntityLast = validateSpecialTrade(specialTradeId);

        List<Long> statusRestricted=List.of(CustodianStatusEnum.TRANSFERRED.getValue(),
                CustodianStatusEnum.PRE_MATCH.getValue(), CustodianStatusEnum.ADMITTED.getValue());

        boolean existTradeInvalid = tradeRepository
                .existsBySpecialTradeAndCustodianStatusIdIn(specialTradeEntityLast, statusRestricted);

        if (existTradeInvalid) {
            throw new ServiceException(ErrorCode.CUSTODIAN_STATUS_PROHIBITED, HttpStatus.BAD_REQUEST);
        }

        SpecialTradeEntity specialTradeEntity = SpecialTradeEntity.builder()
                .id(specialTradeEntityLast.getId())
                .recordDate(ObjectUtils.isEmpty(specialTradeUpdateInDto.getRecordDate()) ?
                        specialTradeEntityLast.getRecordDate() : specialTradeUpdateInDto.getRecordDate())
                .specialOperationId(ObjectUtils.isEmpty(specialTradeUpdateInDto.getSpecialOperationId()) ?
                        specialTradeEntityLast.getSpecialOperationId() : Integer.valueOf(specialTradeUpdateInDto.getSpecialOperationId()))
                .settlementDate(ObjectUtils.isEmpty(specialTradeUpdateInDto.getSettlementDate()) ?
                        specialTradeEntityLast.getSettlementDate() : changeSettlementDateInAllTrades(specialTradeUpdateInDto.getSettlementDate(), specialTradeEntityLast.getId()))
                .specialOperationName(ObjectUtils.isEmpty(specialTradeUpdateInDto.getSpecialOperationName()) ?
                        specialTradeEntityLast.getSpecialOperationName() : specialTradeUpdateInDto.getSpecialOperationName())
                .country(ObjectUtils.isEmpty(specialTradeUpdateInDto.getCountryId()) ?
                        specialTradeEntityLast.getCountry() : validateCountry(specialTradeUpdateInDto.getCountryId()))
                .type(ObjectUtils.isEmpty(specialTradeUpdateInDto.getTypeId()) ?
                        specialTradeEntityLast.getType() : validateType(specialTradeUpdateInDto.getTypeId()))
                .securityTitle(ObjectUtils.isEmpty(specialTradeUpdateInDto.getSecurityId()) ?
                        specialTradeEntityLast.getSecurityTitle() : validateSecurityTitle(specialTradeUpdateInDto.getSecurityId()))
                .depository(ObjectUtils.isEmpty(specialTradeUpdateInDto.getDepositoryId()) ?
                        specialTradeEntityLast.getDepository() : validateDepository(specialTradeUpdateInDto.getDepositoryId()))
                .side(ObjectUtils.isEmpty(specialTradeUpdateInDto.getSideId()) ?
                        specialTradeEntityLast.getSide() : validateSide(specialTradeUpdateInDto.getSideId()))
                .status(ObjectUtils.isEmpty(specialTradeUpdateInDto.getStatusId()) ?
                        specialTradeEntityLast.getStatus() : validateStatus(specialTradeUpdateInDto.getStatusId()))
                .directDepositor(ObjectUtils.isEmpty(specialTradeUpdateInDto.getDirectDepositor()) ?
                        specialTradeEntityLast.getDirectDepositor() : validateParticipant(specialTradeUpdateInDto.getDirectDepositor()))
                .clientSettlementAgent(ObjectUtils.isEmpty(specialTradeUpdateInDto.getClientSettlementAgent()) ?
                        specialTradeEntityLast.getClientSettlementAgent() : validateDepository(specialTradeUpdateInDto.getClientSettlementAgent()))
                .afpFund(ObjectUtils.isEmpty(specialTradeUpdateInDto.getAfpFundId()) ?
                        specialTradeEntityLast.getAfpFund() : validateAfpFund(specialTradeUpdateInDto.getAfpFundId()))
                .totalAmount(ObjectUtils.isEmpty(specialTradeUpdateInDto.getTotalAmount()) ?
                        specialTradeEntityLast.getTotalAmount() : specialTradeUpdateInDto.getTotalAmount())
                .totalAmountLocal(ObjectUtils.isEmpty(specialTradeUpdateInDto.getTotalAmountLocal()) ?
                        specialTradeEntityLast.getTotalAmountLocal() : specialTradeUpdateInDto.getTotalAmountLocal())
                .currency(ObjectUtils.isEmpty(specialTradeUpdateInDto.getCurrencyId()) ?
                        specialTradeEntityLast.getCurrency() : validateCurrency(specialTradeUpdateInDto.getCurrencyId()))
                .exchangeRate(ObjectUtils.isEmpty(specialTradeUpdateInDto.getExchangeRateId()) ?
                        specialTradeEntityLast.getExchangeRate() : validateExchangeRate(specialTradeUpdateInDto.getExchangeRateId()))
                .price(ObjectUtils.isEmpty(specialTradeUpdateInDto.getPrice()) ?
                        specialTradeEntityLast.getPrice() : specialTradeUpdateInDto.getPrice())
                .quantity(ObjectUtils.isEmpty(specialTradeUpdateInDto.getQuantity()) ?
                        specialTradeEntityLast.getQuantity() : specialTradeUpdateInDto.getQuantity())
                .numberFolios(ObjectUtils.isEmpty(specialTradeUpdateInDto.getNumberFolios()) ?
                        specialTradeEntityLast.getNumberFolios() : specialTradeUpdateInDto.getNumberFolios())
                .fractionalMark(ObjectUtils.isEmpty(specialTradeUpdateInDto.getFractionalMark()) ?
                        specialTradeEntityLast.getFractionalMark() : specialTradeUpdateInDto.getFractionalMark())
                .marketEntity(ObjectUtils.isEmpty(specialTradeUpdateInDto.getMarketEntityId()) ?
                        specialTradeEntityLast.getMarketEntity() : validateMarketEntity(specialTradeUpdateInDto.getMarketEntityId()))
                .localCurrencyPrice(ObjectUtils.isEmpty(specialTradeUpdateInDto.getPriceLocal()) ?
                        specialTradeEntityLast.getLocalCurrencyPrice() : specialTradeUpdateInDto.getPriceLocal())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();

        if(!ObjectUtils.isEmpty(specialTradeUpdateInDto.getSettlementDate())){
            List<TradeEntity> tradeEntityList = specialTradeEntityLast.getTrades();

            Integer daysToSettlement = calculateDaysToSettlement(specialTradeEntity.getSettlementDate(), specialTradeEntity.getRecordDate(), specialTradeEntity.getCountry().getId());
            specialTradeEntity.setDaysToSettlement(daysToSettlement);

            if(!tradeEntityList.isEmpty()){
                tradeEntityList.forEach(trade -> {
                    trade.setDaysToSettlement(daysToSettlement);
                    trade.setLastModifyDate(PropertiesContext.getClientDatetime());

                });
                tradeRepository.saveAll(tradeEntityList);
            }

        }

        SpecialTradeOutDto specialTradeOutDto = MapperUtil.specialTradeEntityToSpecialTradeOutDto(specialTradeRepository.save(specialTradeEntity));

        log.info("End method updateSpecialTradeV1, specialTradeOutDto -> {}", specialTradeOutDto);




        return specialTradeOutDto;
    }

    private LocalDate changeSettlementDateInAllTrades(LocalDate newClearingDate, Long specialTradeId){
        log.info("Star method changeSettlementDateInAllTrades, specialTradeId -> {}", specialTradeId);
        int elementsUpdates = tradeRepository.updateAllClearingDateTradesBySpecialTrade(specialTradeId, newClearingDate);

        log.info("End method changeSettlementDateInAllTrades, elementsUpdates -> {}", elementsUpdates);
        return newClearingDate;
    }

    private Integer calculateDaysToSettlement(LocalDate clearingDate, LocalDate matchDate, Long countryId) {
        if (ObjectUtils.isEmpty(clearingDate) || ObjectUtils.isEmpty(matchDate) || ObjectUtils.isEmpty(countryId)){
            return 0;
        }
        if (matchDate.equals(clearingDate)) return 0;

        boolean forward = clearingDate.isAfter(matchDate);
        LocalDate fromExclusive = forward ? matchDate : clearingDate;
        LocalDate toInclusive = forward ? clearingDate   : matchDate;

        LocalDate queryFrom = fromExclusive.plusDays(1);

        List<LocalDate> holidayList = holidayRepository.findHolidayDatesInRange(countryId, queryFrom, toInclusive);
        Set<LocalDate> holidays = new HashSet<>(holidayList);

        Integer count = 0;
        for (LocalDate d = queryFrom; !d.isAfter(toInclusive); d = d.plusDays(1)) {
            if (ApplicationUtils.isBusinessDay(d, holidays)) {
                count++;
            }
        }
        return forward ? count : -count;
    }

    @Override
    public PageResponseOutDto<SpecialTradeOutDto> findAllSpecialTradeDynamic(
            String fieldName,
            String fieldValue,
            String operation,
            Long id,
            Long statusId,
            Long participantId,
            Long typeId,
            Long countryId,
            String specialOperationName,
            LocalDate recordDate,
            int page,
            int size,
            String sort,
            String order,
            boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllSpecialTradeDynamicV1(fieldName, fieldValue, operation,
                    id, statusId, participantId, typeId, countryId, specialOperationName, recordDate,
                    page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    public PageResponseOutDto<SpecialTradeOutDto> findAllSpecialTradeDynamicV1(
            String fieldName,
            String fieldValue,
            String operation,
            Long id,
            Long statusId,
            Long participantId,
            Long typeId,
            Long countryId,
            String specialOperationName,
            LocalDate recordDate,
            int page,
            int size,
            String sort,
            String order,
            boolean all) {

        log.info("Searching special trade with combined filters");

        SpecialTradeFilterRequestDto filterDto = SpecialTradeFilterRequestDto.builder()
                .id(id)
                .statusId(statusId)
                .participantId(participantId)
                .typeId(typeId)
                .countryId(countryId)
                .specialOperationName(specialOperationName)
                .recordDate(recordDate)
                .build();

        SearchOperationEnum searchOperation = (operation != null) ? SearchOperationEnum.fromValue(operation) : null;

        if (operation != null && searchOperation == null) {
            log.warn("Invalid operation: {}", operation);
            throw new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
        }

        Specification<SpecialTradeEntity> spec = SpecialTradeSpecificationFactory.createCombinedFilter(
                filterDto, fieldName, fieldValue, searchOperation);

        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "id");

        if (all) {
            List<SpecialTradeEntity> allResults = specialTradeRepository.findAll(spec, sortObj);

            if (allResults.isEmpty()) {
                return buildPageResponseSpecialTradeDynamic(List.of(), 0, allResults.size(), 0);
            }

            List<SpecialTradeOutDto> specialTradeOutDtoList = allResults.stream()
                    .map(MapperUtil::specialTradeEntityToAllSpecialTradeOutDto)
                    .toList();

            return buildPageResponseSpecialTradeDynamic(specialTradeOutDtoList, 0, allResults.size(), allResults.size());
        } else {
            Pageable pageable = PageRequest.of(page, size, sortObj);
            Page<SpecialTradeEntity> pageResult = specialTradeRepository.findAll(spec, pageable);

            if (pageResult.isEmpty()) {
                return buildPageResponseSpecialTradeDynamic(List.of(), page, size, 0);
            }

            List<SpecialTradeOutDto> specialTradeOutDtoList = pageResult.getContent().stream()
                    .map(MapperUtil::specialTradeEntityToAllSpecialTradeOutDto)
                    .toList();

            log.debug("End method findAllSpecialTradeDynamicV1, specialTradeOutDtoList -> {}", specialTradeOutDtoList.size());

            return MapperPageUtil.pageToPageResponseOutDto(specialTradeOutDtoList, pageResult);
        }
    }

    @Override
    public PageResponseOutDto<SimplySpecialTradeOutDto> findAllSimplySpecialTrade(SpecialTradeParamInDto specialTradeParamInDto,
                                                                      int page,
                                                                      int size,
                                                                      String sort,
                                                                      String order,
                                                                      boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllSimplySpecialTradeV1(specialTradeParamInDto, page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<SimplySpecialTradeOutDto> findAllSimplySpecialTradeV1(SpecialTradeParamInDto specialTradeParamInDto,
                                                                               int page,
                                                                               int size,
                                                                               String sort,
                                                                               String order,
                                                                               boolean all) {
        log.info("Start method findAllSimplySpecialTradeV1");

        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "id");

        if (all) {
            List<SpecialTradeEntity> allResults = specialTradeRepository.findAll(specialTradeSpecification(specialTradeParamInDto), sortObj);

            if (allResults.isEmpty()) {
                return buildPageResponseSimplySpecialTrade(List.of(), 0, allResults.size(), 0);
            }

            List<SimplySpecialTradeOutDto> simplySpecialTradeOutDtoList = allResults.stream()
                    .map(MapperUtil::specialTradeEntityToSimplySpecialTradeOutDto)
                    .toList();

            log.info("End method findAllSimplySpecialTradeV1, specialTradeOutDtoList -> {}", simplySpecialTradeOutDtoList);

            return buildPageResponseSimplySpecialTrade(simplySpecialTradeOutDtoList, 0, allResults.size(), allResults.size());
        } else {
            Pageable pageable = PageRequest.of(page, size, sortObj);
            Page<SpecialTradeEntity> pageResult = specialTradeRepository.findAll(specialTradeSpecification(specialTradeParamInDto), pageable);

            if (pageResult.isEmpty()) {
                return buildPageResponseSimplySpecialTrade(List.of(), page, size, 0);
            }

            List<SimplySpecialTradeOutDto> simplySpecialTradeOutDtoList = pageResult.getContent().stream()
                    .map(MapperUtil::specialTradeEntityToSimplySpecialTradeOutDto)
                    .toList();

            log.info("End method findAllSpecialTradeV1, specialTradeOutDtoList -> {}", simplySpecialTradeOutDtoList);

            return MapperPageUtil.pageToPageResponseOutDto(simplySpecialTradeOutDtoList, pageResult);
        }
    }

    private PageResponseOutDto<SpecialTradeOutDto> buildPageResponseSpecialTrade(List<SpecialTradeOutDto> content, int pageNumber, int pageSize, int totalElements) {
        PageResponseOutDto<SpecialTradeOutDto> response = new PageResponseOutDto<>();
        response.setContent(content);
        response.setPageNumber(pageNumber);
        response.setPageSize(pageSize);
        response.setTotalElements((long) totalElements);
        response.setTotalPages(totalElements > 0 ? (int) Math.ceil((double) totalElements / pageSize) : 0);
        return response;
    }

    private PageResponseOutDto<SimplySpecialTradeOutDto> buildPageResponseSimplySpecialTrade(List<SimplySpecialTradeOutDto> content, int pageNumber, int pageSize, int totalElements) {
        PageResponseOutDto<SimplySpecialTradeOutDto> response = new PageResponseOutDto<>();
        response.setContent(content);
        response.setPageNumber(pageNumber);
        response.setPageSize(pageSize);
        response.setTotalElements((long) totalElements);
        response.setTotalPages(totalElements > 0 ? (int) Math.ceil((double) totalElements / pageSize) : 0);
        return response;
    }

    private PageResponseOutDto<SpecialTradeOutDto> buildPageResponse(Page<SpecialTradeEntity> entities) {
        List<SpecialTradeOutDto> specialTradeOutDtoList = entities.getContent().stream()
                .map(MapperUtil::specialTradeEntityToAllSpecialTradeOutDto)
                .toList();

        return MapperPageUtil.pageToPageResponseOutDto(specialTradeOutDtoList, entities);
    }

    private Specification<SpecialTradeEntity> specialTradeSpecification(SpecialTradeParamInDto specialTradeParamInDto) {
        return (root, query, criteriaBuilder) -> {
            List<jakarta.persistence.criteria.Predicate> predicates = new ArrayList<>();
            if (specialTradeParamInDto.getId() != null) {
                predicates.add(criteriaBuilder.equal(root.get("id"), specialTradeParamInDto.getId()));
            }
            if (specialTradeParamInDto.getCountryId() != null) {
                predicates.add(criteriaBuilder.equal(root.get("country").get("id"), specialTradeParamInDto.getCountryId()));
            }
            if (specialTradeParamInDto.getTypeId() != null) {
                predicates.add(criteriaBuilder.equal(root.get("type").get("id"), specialTradeParamInDto.getTypeId()));
            }
            if (specialTradeParamInDto.getSecurityId() != null) {
                predicates.add(criteriaBuilder.equal(root.get("security").get("id"), specialTradeParamInDto.getSecurityId()));
            }
            if (specialTradeParamInDto.getSideId() != null) {
                predicates.add(criteriaBuilder.equal(root.get("side").get("id"), specialTradeParamInDto.getSideId()));
            }
            if (specialTradeParamInDto.getSpecialOperationName() != null) {
                predicates.add(criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("specialOperationName")),
                        "%" + specialTradeParamInDto.getSpecialOperationName().toLowerCase() + "%"
                ));
            }
            if (specialTradeParamInDto.getStatusId() != null) {
                predicates.add(criteriaBuilder.equal(root.get("status").get("id"), specialTradeParamInDto.getStatusId()));
            }
            if (specialTradeParamInDto.getParticipantId() != null) {
                predicates.add(criteriaBuilder.equal(root.get("participant").get("id"), specialTradeParamInDto.getParticipantId()));
            }
            if (specialTradeParamInDto.getStartRecordDate() != null && specialTradeParamInDto.getEndRecordDate() != null) {
                predicates.add(criteriaBuilder.between(
                        root.get("recordDate"), specialTradeParamInDto.getStartRecordDate(), specialTradeParamInDto.getEndRecordDate()));
            }
            if (specialTradeParamInDto.getMatchId() != null) {
                Join<Object, Object> tradeJoin = root.join("trades");
                predicates.add(criteriaBuilder.equal(tradeJoin.get("matchId"), specialTradeParamInDto.getMatchId()));
            }
            if (specialTradeParamInDto.getCustodianId() != null) {
                Join<Object, Object> tradeJoin = root.join("trades");

                Predicate custodianBuyPredicate = criteriaBuilder.equal(
                        tradeJoin.get("custodianBuy").get("id"),
                        specialTradeParamInDto.getCustodianId()
                );

                Predicate custodianSellPredicate = criteriaBuilder.equal(
                        tradeJoin.get("custodianSell").get("id"),
                        specialTradeParamInDto.getCustodianId()
                );
                predicates.add(criteriaBuilder.or(custodianBuyPredicate, custodianSellPredicate));
            }
            if (specialTradeParamInDto.getClearingDate() != null) {
                predicates.add(criteriaBuilder.lessThanOrEqualTo(root.get("settlementDate"), specialTradeParamInDto.getClearingDate()));
            }
            if (specialTradeParamInDto.getMatchDate() != null) {
                Join<Object, Object> tradeJoin = root.join("trades");
                predicates.add(criteriaBuilder.greaterThanOrEqualTo(tradeJoin.get("matchDate"), specialTradeParamInDto.getMatchDate()));
            }

            return criteriaBuilder.and(predicates.toArray(new jakarta.persistence.criteria.Predicate[0]));
        };
    }

    private SpecialTradeEntity validateSpecialTrade(Long specialTradeId) {
        return specialTradeRepository.findById(specialTradeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.SPECIAL_TRADE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private CountryEntity validateCountry(Long countryId) {
        return countryRepository.findById(countryId)
                .orElseThrow(() -> new ServiceException(ErrorCode.COUNTRY_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private TypeEntity validateType(Long typeId) {
        return typeRepository.findById(typeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TYPE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private SecurityTitleEntity validateSecurityTitle(Long securityId) {
        return securityTitleRepository.findById(securityId)
                .orElseThrow(() -> new ServiceException(ErrorCode.SECURITY_TITLE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private DepositoryEntity validateDepository(String depositoryId) {
        return depositoryRepository.findById(depositoryId)
                .orElseThrow(() -> new ServiceException(ErrorCode.DEPOSITORY_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private SideEntity validateSide(String sideId) {
        return sideRepository.findById(sideId)
                .orElseThrow(() -> new ServiceException(ErrorCode.SIDE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private StatusEntity validateStatus(Long statusId) {
        return statusRepository.findById(statusId)
                .orElseThrow(() -> new ServiceException(ErrorCode.STATUS_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private ParticipantEntity validateParticipant(Long participantId) {
        return participantRepository.findById(participantId)
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private AfpFundEntity validateAfpFund(Long afpFundId) {
        return afpFundRepository.findById(afpFundId)
                .orElseThrow(() -> new ServiceException(ErrorCode.AFP_FUND_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private CurrencyEntity validateCurrency(Long currencyId) {
        return currencyRepository.findById(currencyId)
                .orElseThrow(() -> new ServiceException(ErrorCode.CURRENCY_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private ExchangeRateEntity validateExchangeRate(Long exchangeRateId) {
        return exchangeRateRepository.findById(exchangeRateId)
                .orElseThrow(() -> new ServiceException(ErrorCode.EXCHANGE_RATE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private Long validateDirectDepositor(Long directDepositor) {
        ParticipantEntity participant = participantRepository.findById(directDepositor)
                .orElseThrow(() -> new ServiceException(ErrorCode.DIRECT_DEPOSITOR_NOT_FOUND, HttpStatus.NOT_FOUND));
        return participant.getId();
    }

    private Long validateClientOperator(Long clientOperator) {
        ParticipantEntity participant = participantRepository.findById(clientOperator)
                .orElseThrow(() -> new ServiceException(ErrorCode.CLIENT_OPERATOR_NOT_FOUND, HttpStatus.NOT_FOUND));
        return participant.getId();
    }

    private MarketEntity validateMarketEntity(String marketId) {
        return marketRepository.findById(marketId)
                .orElseThrow(() -> new ServiceException(ErrorCode.MARKET_FUND_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

}

```

## src/main/java/com/nubo/operations/special/espec/api/service/impl/ValidateAllowedDaysImpl.java

```java
package com.nubo.operations.special.espec.api.service.impl;

import com.nubo.operations.special.espec.api.application.properties.PropertiesContext;
import com.nubo.operations.special.espec.api.client.operation.special.rules.dto.response.OperationSpecialBusinessRuleOutDto;
import com.nubo.operations.special.espec.api.client.operation.special.rules.service.OperationSpecialBusinessRuleClient;
import com.nubo.operations.special.espec.api.exception.ServiceException;
import com.nubo.operations.special.espec.api.exception.error.ErrorCode;
import com.nubo.operations.special.espec.api.models.entity.TradeEntity;
import com.nubo.operations.special.espec.api.models.enums.OperationSpecialBusinessRulesEnum;
import com.nubo.operations.special.espec.api.models.enums.VersionApiEnum;
import com.nubo.operations.special.espec.api.repository.TradeRepository;
import com.nubo.operations.special.espec.api.service.ValidateAllowedDaysServices;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class ValidateAllowedDaysImpl implements ValidateAllowedDaysServices {

    private final TradeRepository tradeRepository;
    private final OperationSpecialBusinessRuleClient operationSpecialBusinessRuleClient;
    private static final int ZERO = 0;

    @Override
    public Boolean validateDaysBeforeOperation(Long tradeId, Long countryId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
           return validateDaysBeforeOperationV1(tradeId, countryId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private Boolean validateDaysBeforeOperationV1(Long tradeId, Long countryId) {
        log.debug("Start method validateAllowedDaysBeforeOperationV1, tradeId -> {}", tradeId);

        TradeEntity tradeEntity = validateTrade(tradeId);

        OperationSpecialBusinessRuleOutDto operationBusinessRuleOutDto = operationSpecialBusinessRuleClient.findBusinessRuleByCountryIdAndCode(countryId,
                OperationSpecialBusinessRulesEnum.RULE_OPERATION_SPECIAL_CORRECTION_ALLOWED_DAYS.getValue());

        String allowedDaysRule = operationBusinessRuleOutDto.getValue();

        if (Integer.parseInt(allowedDaysRule) <= ZERO) {
            throw new ServiceException(ErrorCode.SPECIAL_RULE_NOT_CONFIGURED, HttpStatus.NOT_FOUND);
        }

        LocalDate clearingDate = tradeEntity.getClearingDate();

        long daysBetween = calculateDaysBetween(clearingDate, LocalDate.now());

        Boolean result = evaluateDaysRule(daysBetween, allowedDaysRule);

        log.info("End method validateAllowedDaysBeforeOperationV1 {}", result);

        return result;

    }

    @Override
    public Boolean validateDaysAfterOperation(Long tradeId, Long countryId){
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateDaysAfterOperationV1(tradeId, countryId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private Boolean validateDaysAfterOperationV1(Long tradeId, Long countryId) {
        log.debug("Start method validateDaysAfterOperationV1, tradeId -> {}", tradeId);

        TradeEntity tradeEntity = validateTrade(tradeId);

        OperationSpecialBusinessRuleOutDto operationBusinessRuleOutDto = operationSpecialBusinessRuleClient.findBusinessRuleByCountryIdAndCode(countryId,
                OperationSpecialBusinessRulesEnum.RULE_OPERATION_SPECIAL_CORRECTION_ALLOWED_DAYS.getValue());

        String allowedDaysRule = operationBusinessRuleOutDto.getValue();

        if (Integer.parseInt(allowedDaysRule) <= ZERO) {
            throw new ServiceException(ErrorCode.SPECIAL_RULE_NOT_CONFIGURED, HttpStatus.NOT_FOUND);
        }

        LocalDate clearingDate = tradeEntity.getClearingDate();

        long daysBetween = calculateDaysBetween(clearingDate, LocalDate.now());

        Boolean result = evaluateDaysRule(daysBetween, allowedDaysRule);

        log.info("End method validateDaysAfterOperationV1 {}", result);

        return result;
    }

    private TradeEntity validateTrade(Long tradeId) {
        return tradeRepository.findById(tradeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private long calculateDaysBetween(LocalDate startDate, LocalDate endDate) {
        return ChronoUnit.DAYS.between(startDate, endDate);
    }

    private Boolean evaluateDaysRule(long daysBetween, String allowedDays) {
        long allow = Long.parseLong(allowedDays);
        return daysBetween <= allow;
    }
}

```

## src/main/java/com/nubo/operations/special/espec/api/service/impl/ValidateFractionServiceImpl.java

```java
package com.nubo.operations.special.espec.api.service.impl;

import com.nubo.operations.special.espec.api.application.properties.PropertiesContext;
import com.nubo.operations.special.espec.api.client.operation.special.rules.dto.request.FractionRuleInDto;
import com.nubo.operations.special.espec.api.client.operation.special.rules.dto.response.OperationSpecialBusinessRuleOutDto;
import com.nubo.operations.special.espec.api.client.operation.special.rules.service.OperationSpecialBusinessRuleClient;
import com.nubo.operations.special.espec.api.exception.ServiceException;
import com.nubo.operations.special.espec.api.exception.error.ErrorCode;
import com.nubo.operations.special.espec.api.helpers.MapperPageUtil;
import com.nubo.operations.special.espec.api.helpers.MapperUtil;
import com.nubo.operations.special.espec.api.models.dto.response.*;
import com.nubo.operations.special.espec.api.models.entity.*;
import com.nubo.operations.special.espec.api.models.enums.OperationSpecialBusinessRulesEnum;
import com.nubo.operations.special.espec.api.models.enums.SideEnum;
import com.nubo.operations.special.espec.api.models.enums.TypeEnum;
import com.nubo.operations.special.espec.api.models.enums.VersionApiEnum;
import com.nubo.operations.special.espec.api.repository.*;
import com.nubo.operations.special.espec.api.service.ValidateFractionService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import java.math.BigDecimal;
import java.util.*;

@Service
@RequiredArgsConstructor
@Slf4j
public class ValidateFractionServiceImpl implements ValidateFractionService {

    private final TradeRepository tradeRepository;
    private final SideRepository sideRepository;
    private final InvestorAccountRepository investorAccountRepository;
    private final ParticipantAccountRepository participantAccountRepository;
    private final OperationSpecialBusinessRuleClient operationSpecialBusinessRuleClient;
    private final BankAccountRepository bankAccountRepository;
    private final ParticipantBankAccountRepository participantBankAccountRepository;
    private final TypeRepository typeRepository;
    private final SettlementRepository settlementRepository;

    @Override
    public FractionAccountOutDto validateAccountFraction(String accountNumber, Long tradeId, String sideId, Long origin) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateAccountFractionV1(accountNumber, tradeId, sideId, origin);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private FractionAccountOutDto validateAccountFractionV1(String accountNumber, Long tradeId, String sideId, Long originId) {
        log.debug("Start method validateAccountFractionV1, accountNumber -> {}, tradeId -> {}, sideId -> {}, originId -> {}", accountNumber, tradeId, sideId, originId);

        ParticipantEntity participantTrade = getParticipantBuyOrParticipantSellTrade(tradeId, sideId);

        TradeEntity tradeEntity = validateTrade(tradeId);
        TypeEntity typeOriginEntity = null;
        List<SettlementEntity> settlement = settlementRepository.findByTradeIdAndSideId(tradeId, sideId);
        if(!ObjectUtils.isEmpty(originId)){
            typeOriginEntity = validateType(originId);
        }

    // Si existe en seattlement traigo el origin de seattlement, sino, traigo el origin de trade

        OperationSpecialBusinessRuleOutDto operationBusinessRuleOutDto = operationSpecialBusinessRuleClient.findBusinessRuleByCode(
                OperationSpecialBusinessRulesEnum.RULE_OPERATION_SPECIAL_CORRECTION_SPECIAL_FIDUCIARY.getValue());

        Long typeSpecialFiduciaryBusinessRule = Long.parseLong(operationBusinessRuleOutDto.getValue());

        FractionAccountOutDto fractionAccountOutDto = FractionAccountOutDto.builder().build();
        fractionAccountOutDto.setFiduciarySpecialist(false);
        fractionAccountOutDto.setJointAccount(false);

        Optional<ParticipantAccountEntity> participantAccountEntity;

        if(typeOriginEntity != null){
            if(typeOriginEntity.getDescription().equals("POSICIÓN PROPIA")){
                participantAccountEntity = participantAccountRepository.findByAccountNumberAndParticipantAndOriginType(accountNumber,participantTrade,typeOriginEntity);
            }else{
                participantAccountEntity = participantAccountRepository.findByAccountNumberAndParticipantNotAndOriginType(accountNumber,participantTrade,typeOriginEntity);
            }
        }else{
            participantAccountEntity = participantAccountRepository.findByAccountNumber(accountNumber);
        }


        if (participantAccountEntity.isPresent()) {
            this.validateParticipantAccount(fractionAccountOutDto, typeSpecialFiduciaryBusinessRule,
                    participantAccountEntity.get(), participantTrade, typeOriginEntity);
        } else {
            this.validateInvestorAccount(fractionAccountOutDto, typeSpecialFiduciaryBusinessRule, tradeEntity, accountNumber, typeOriginEntity, participantTrade);
        }

        log.info("End method validateAccountFractionCorrectionV1, fractionAccountOutDto -> {}", fractionAccountOutDto);
        return enrichFractionAccountWithSettlementData(fractionAccountOutDto, settlement);
    }

    private FractionAccountOutDto enrichFractionAccountWithSettlementData(
            FractionAccountOutDto fractionAccountOutDto,
            List<SettlementEntity> settlementEntity) {
        return MapperUtil.mapSettlementToFractionAccountOutDto(fractionAccountOutDto, settlementEntity);
    }

    @Override
    public void validateBankAccountFraction(Long tradeId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            validateBankAccountFractionV1(tradeId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private void validateBankAccountFractionV1(Long tradeId) {
        log.debug("Start method validateBankAccountFractionV1, tradeId -> {}", tradeId);

        TradeEntity tradeEntity = validateTrade(tradeId);

        if (ObjectUtils.isEmpty(tradeEntity.getPaymentType()) ||
                !tradeEntity.getPaymentType().getId().equals(TypeEnum.STOCKS_METHOD_OF_PAYMENT.getValue())) {
            throw new ServiceException(ErrorCode.BANK_ACCOUNT_REQUIRED, HttpStatus.NOT_FOUND);
        }

        log.info("End method validateBankAccountFractionV1");
    }

    @Override
    public void validateCommissionParticipantAccountFraction(String accountNumber, BigDecimal commissionPercentage) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            validateCommissionParticipantAccountFractionV1(accountNumber, commissionPercentage);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private void validateCommissionParticipantAccountFractionV1(String accountNumber, BigDecimal commissionPercentage) {
        log.debug("Start method validateCommissionParticipantAccountFractionV1, accountNumber -> {}", accountNumber);

        Optional<ParticipantAccountEntity> participantAccountEntityOptional = participantAccountRepository.findByAccountNumber(accountNumber);

        if (participantAccountEntityOptional.isPresent() && commissionPercentage.compareTo(BigDecimal.ZERO) != 0
                && TypeEnum.OWN_POSITION_POINT_ORIGIN.getValue().equals(participantAccountEntityOptional.get().getOriginType().getId())) {
            throw new ServiceException(ErrorCode.COMMISSION_NOT_CORRESPOND_TO_OWN_POSITION_POINT_ORIGIN, HttpStatus.BAD_REQUEST);
        }

        log.info("End method validateCommissionParticipantAccountFractionV1");
    }

    @Override
    public Boolean validateQuantityFractionsCorrection(Long tradeId, List<FractionRuleInDto> fractionRuleInDtoList) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateQuantityFractionsCorrectionV1(tradeId, fractionRuleInDtoList);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private Boolean validateQuantityFractionsCorrectionV1(Long tradeId, List<FractionRuleInDto> fractionRuleInDtoList) {
        log.debug("Start method validateQuantityFractionsCorrectionV1, tradeId -> {}", tradeId);

        TradeEntity tradeEntity = validateTrade(tradeId);

        BigDecimal totalQuantity = BigDecimal.ZERO;

        for (FractionRuleInDto fractionInDto : fractionRuleInDtoList) {
            totalQuantity = totalQuantity.add(fractionInDto.getFractionQuantity());
        }

        if (tradeEntity.getQuantity().compareTo(totalQuantity) != 0) {
            throw new ServiceException(ErrorCode.FRACTION_TOTAL_QUANTITY_NOT_CORRESPOND_QUANTITY_TRADE, HttpStatus.BAD_REQUEST);
        }

        log.info("End method validateQuantityFractionsCorrectionV1");

        return true;
    }

    @Override
    public Boolean validateRangeQuantityFractionsCorrection(Long tradeId, List<FractionRuleInDto> fractionRuleInDtoList) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateRangeQuantityFractionsCorrectionV1(tradeId, fractionRuleInDtoList);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private Boolean validateRangeQuantityFractionsCorrectionV1(Long tradeId, List<FractionRuleInDto> fractionRuleInDtoList) {
        log.debug("Start method validateRangeQuantityFractionsCorrectionV1, tradeId -> {}", tradeId);

        TradeEntity tradeEntity = validateTrade(tradeId);

        BigDecimal totalQuantity = BigDecimal.ZERO;
        BigDecimal tradeQuantity = tradeEntity.getQuantity();

        for (FractionRuleInDto fractionInDto : fractionRuleInDtoList) {
            totalQuantity = totalQuantity.add(fractionInDto.getFractionQuantity());
        }

        if (totalQuantity.compareTo(tradeQuantity) > 0) {
            throw new ServiceException(ErrorCode.FRACTION_TOTAL_QUANTITY_EXCEED_QUANTITY_TRADE, HttpStatus.BAD_REQUEST);
        }

        log.info("End method validateRangeQuantityFractionsCorrectionV1");

        return true;
    }

    @Override
    public Boolean validateMaximumLimitFractionsCorrection(List<FractionRuleInDto> fractionRuleInDtoList) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateMaximumLimitFractionsCorrectionV1(fractionRuleInDtoList);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private Boolean validateMaximumLimitFractionsCorrectionV1(List<FractionRuleInDto> fractionRuleInDtoList) {
        log.debug("Start method validateMaximumLimitFractionsCorrectionV1");

        OperationSpecialBusinessRuleOutDto operationSpecialBusinessRuleOutDto = operationSpecialBusinessRuleClient.findBusinessRuleByCode(
                OperationSpecialBusinessRulesEnum.RULE_OPERATION_SPECIAL_CORRECTION_MAXIMUM_LIMIT.getValue());

        int typeBusinessRule = Integer.parseInt(operationSpecialBusinessRuleOutDto.getValue());

        if (fractionRuleInDtoList.size() > typeBusinessRule) {
            ErrorCode errorCode = ErrorCode.MAXIMUM_LIMIT_FRACTIONS_EXCEED;
            String message = errorCode.getMessage().concat(": ").concat(String.valueOf(typeBusinessRule));
            throw new ServiceException(message, errorCode, HttpStatus.BAD_REQUEST);
        }

        log.info("End method validateMaximumLimitFractionsCorrectionV1");

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
        log.debug("Start method validateDirectDepositorFractionCorrectionV1, tradeId -> {}, sideId -> {}", tradeId, sideId);

        ParticipantEntity participantEntity = getParticipantBuyOrParticipantSellTrade(tradeId, sideId);

        ParticipantOutDto participantOutDto = MapperUtil.participantEntityToParticipantOutDto(participantEntity);

        log.info("End method validateDirectDepositorFractionCorrectionV1");

        return participantOutDto;
    }

    @Override
    public PageResponseOutDto<ParticipantBankAccountOutDto> validateCudAccountFraction(Long tradeId, String sideId, String accountNumber, Pageable pageable) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateCudAccountFractionV1(tradeId, sideId, accountNumber, pageable);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<ParticipantBankAccountOutDto> validateCudAccountFractionV1(Long tradeId, String sideId, String accountNumber, Pageable pageable) {

        log.info("Start method validateCudAccountFractionV1, tradeId -> {}, sideId -> {}", tradeId, sideId);

        ParticipantEntity participantEntity = getParticipantBuyOrParticipantSellTrade(tradeId, sideId);

        List<ParticipantBankAccountOutDto> participantBankAccountOutDtoList = participantBankAccountRepository
                .findAll()
                .stream()
                .map(MapperUtil::participantBankAccountEntityToParticipantBankAccountOutDto)
                .toList();

        if (!ObjectUtils.isEmpty(accountNumber)) {
            participantBankAccountOutDtoList = participantBankAccountOutDtoList.stream()
                    .filter(dto -> dto.getBankAccount() != null &&
                            dto.getBankAccount().toLowerCase().contains(accountNumber.toLowerCase()))
                    .toList();
        }

        int start = (int) pageable.getOffset();
        int end = Math.min((start + pageable.getPageSize()), participantBankAccountOutDtoList.size());
        Page<ParticipantBankAccountOutDto> page = new PageImpl<>(
                participantBankAccountOutDtoList.subList(start, end),
                pageable,
                participantBankAccountOutDtoList.size()
        );

        log.info("End method validateCudAccountFractionV1, number of accounts found: {}", participantBankAccountOutDtoList.size());

        return MapperPageUtil.pageToPageResponseOutDto(page.getContent(), page);
    }

    @Override
    public IsPossibleCreateFractionDto validateCreateFractionAmount(Long tradeId, String sideId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateCreateFractionAmountV1(tradeId, sideId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private IsPossibleCreateFractionDto validateCreateFractionAmountV1(Long tradeId, String sideId) {

        log.info("Start method validateCreateFractionAmountV1, tradeId -> {}, sideId -> {}", tradeId, sideId);

        TradeEntity tradeEntity = tradeRepository.findById(tradeId).orElseThrow(() -> new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND));

        BigDecimal mountOfTrade = tradeEntity.getVolume();

        List<SettlementEntity> settlementEntity = settlementRepository.findByTradeIdAndSideId(tradeId, sideId);

        IsPossibleCreateFractionDto isPossibleCreateFractionDto = IsPossibleCreateFractionDto.builder()
                .isPossible(false)
                .build();

        if(settlementEntity.isEmpty()) {
            if (mountOfTrade.compareTo(tradeEntity.getVolumeDvd()) == 0 && tradeEntity.getVolumeDvp().compareTo(BigDecimal.ZERO) == 0) {
                isPossibleCreateFractionDto.setPossible(true);
            } else if (mountOfTrade.compareTo(tradeEntity.getVolumeDvp()) == 0 && tradeEntity.getVolumeDvd().compareTo(BigDecimal.ZERO) == 0) {
                isPossibleCreateFractionDto.setPossible(true);
            } else if ((tradeEntity.getVolumeDvp().compareTo(BigDecimal.ZERO) == 0 && tradeEntity.getVolumeDvd().compareTo(BigDecimal.ZERO) == 0) ||
                    (tradeEntity.getVolumeDvp() == null && tradeEntity.getVolumeDvd() == null)) {
                isPossibleCreateFractionDto.setPossible(true);
            } else {
                isPossibleCreateFractionDto.setPossible(false);
            }
        }

        log.info("End method validateCreateFractionAmountV1");

        return isPossibleCreateFractionDto;
    }


    private ParticipantEntity getParticipantBuyOrParticipantSellTrade(Long tradeId, String sideId) {
        TradeEntity tradeEntity = validateTrade(tradeId);
        SideEntity sideEntityLast = validateSide(sideId);

        ParticipantEntity participantEntity;
        if (SideEnum.BUY.getValue().equals(sideEntityLast.getId())) {
            participantEntity = tradeEntity.getParticipantBuy();
        } else if (SideEnum.SELL.getValue().equals(sideEntityLast.getId())) {
            participantEntity = tradeEntity.getParticipantSell();
        } else {
            throw new ServiceException(ErrorCode.SIDE_NOT_FOUND, HttpStatus.BAD_REQUEST);
        }
        return participantEntity;
    }

    private void validateParticipantAccount(FractionAccountOutDto fractionAccountOutDto,
                                            Long typeSpecialFiduciaryBusinessRule,
                                            ParticipantAccountEntity participantAccountEntity,
                                            ParticipantEntity participantTrade,
                                            TypeEntity typeOriginEntity) {

        if (typeSpecialFiduciaryBusinessRule.equals(participantAccountEntity.getType().getId())) {
            fractionAccountOutDto.setFiduciarySpecialist(true);
        }

        fractionAccountOutDto.setParticipantAccount(MapperUtil.participantAccountEntityToParticipantAccountOutDto(participantAccountEntity));
        fractionAccountOutDto.setSourceQuoteType(fractionAccountOutDto.getParticipantAccount().getOriginType());

    }

    private void validateInvestorAccount(FractionAccountOutDto fractionAccountOutDto,
                                         Long typeSpecialFiduciaryBusinessRule,
                                         TradeEntity tradeEntity,
                                         String accountNumber, TypeEntity originTypeEntity, ParticipantEntity participantEntity) {

        Optional<InvestorAccountEntity> investorAccountEntity;

        if(originTypeEntity != null){
            if(originTypeEntity.getDescription().equals("POSICIÓN PROPIA")){
                investorAccountEntity = investorAccountRepository.findByAccountNumberAndInvestorDocumentNumberAndOriginTypeId(accountNumber, participantEntity.getDocumentNumber(),originTypeEntity.getId());
            }else{
                investorAccountEntity = investorAccountRepository.findByAccountNumberAndInvestorDocumentNumberNotAndOriginTypeId(accountNumber, participantEntity.getDocumentNumber(),originTypeEntity.getId());
            }
        }else{
            investorAccountEntity = investorAccountRepository.findByAccountNumber(accountNumber);
        }

        if(!investorAccountEntity.isPresent()){
            throw new ServiceException(ErrorCode.INVESTOR_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND);
        }

        if (!tradeEntity.getDepository().getId().equals(investorAccountEntity.get().getDepository().getId())) {
            throw new ServiceException(ErrorCode.INVESTOR_ACCOUNT_NOT_EXIST_IN_DEPOSITORY, HttpStatus.BAD_REQUEST);
        }

        InvestorAccountOutDto investorAccountOutDto = MapperUtil.investorAccountEntityToInvestorAccountOutDto(investorAccountEntity.get());
        assert investorAccountOutDto != null;
        fractionAccountOutDto.setInvestorAccount(investorAccountOutDto);
        fractionAccountOutDto.setFiduciarySpecialist(typeSpecialFiduciaryBusinessRule.equals(investorAccountOutDto.getType().getId()));
        fractionAccountOutDto.setJointAccount(TypeEnum.JOINT_ACCOUNT.getValue().equals(investorAccountOutDto.getType().getId()));
        fractionAccountOutDto.setSourceQuoteType(investorAccountOutDto.getOriginType());

    }


    private TradeEntity validateTrade(Long tradeId) {
        return tradeRepository.findById(tradeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private SideEntity validateSide(String sideId) {
        return sideRepository.findById(sideId)
                .orElseThrow(() -> new ServiceException(ErrorCode.SIDE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private TypeEntity validateType(Long typeId) {
        return typeRepository.findById(typeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TYPE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

}

```

## src/main/java/com/nubo/operations/special/espec/api/service/impl/ValidateUserPermissionServiceImpl.java

```java
package com.nubo.operations.special.espec.api.service.impl;

import com.nubo.operations.special.espec.api.application.properties.PropertiesContext;
import com.nubo.operations.special.espec.api.exception.ServiceException;
import com.nubo.operations.special.espec.api.exception.error.ErrorCode;
import com.nubo.operations.special.espec.api.models.dto.response.UserPermissionOutDto;
import com.nubo.operations.special.espec.api.models.entity.PermissionEntity;
import com.nubo.operations.special.espec.api.models.entity.UserNuboEntity;
import com.nubo.operations.special.espec.api.models.enums.VersionApiEnum;
import com.nubo.operations.special.espec.api.repository.PermissionRepository;
import com.nubo.operations.special.espec.api.repository.ProfilePermissionRepository;
import com.nubo.operations.special.espec.api.repository.UserNuboRepository;
import com.nubo.operations.special.espec.api.service.ValidateUserPermissionService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class ValidateUserPermissionServiceImpl implements ValidateUserPermissionService {

    private final UserNuboRepository userNuboRepository;
    private final PermissionRepository permissionRepository;
    private final ProfilePermissionRepository profilePermissionRepository;

    @Override
    public UserPermissionOutDto validateUserPermission(Long permissionId, Long userId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return getUserPermissionByIdV1(permissionId, userId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private UserPermissionOutDto getUserPermissionByIdV1(Long permissionId, Long userId) {
        log.info("Start method getUserPermissionByIdV1, permissionId -> {}, userId -> {}", permissionId, userId);

        List<PermissionEntity> permissionEntity = permissionRepository.findByProfileId(permissionId)
                .orElseThrow(() -> new ServiceException(ErrorCode.PERMISSION_NOT_FOUND, HttpStatus.NOT_FOUND));

        UserNuboEntity userNuboEntity = userNuboRepository.findByUserId(userId)
                .orElseThrow(() -> new ServiceException(ErrorCode.USER_NOT_FOUND, HttpStatus.NOT_FOUND));

        UserPermissionOutDto userPermissionOutDto = profilePermissionRepository.findUserPermisionByUserAndPermissionId(
                permissionEntity.get(0).getId(), userNuboEntity.getId()
        );

        if (userPermissionOutDto == null) {
            return new UserPermissionOutDto(null, null);
        }

        log.info("End method getUserPermissionByIdV1 -> {}", userPermissionOutDto);

        return userPermissionOutDto;

    }

}

```

## src/main/java/com/nubo/operations/special/espec/api/web/controller/AfpFundRestController.java

```java
package com.nubo.operations.special.espec.api.web.controller;

import com.nubo.operations.special.espec.api.models.dto.response.AfpFundOutDto;
import com.nubo.operations.special.espec.api.service.AfpFundService;
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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Tag(name = "AfpFund")
@RestController
@RequestMapping("/{version}/afpFund")
@RequiredArgsConstructor
public class AfpFundRestController {

    private final AfpFundService afpFundService;

    @Operation(summary = "Find all AfpFund", description = "Find all AfpFund")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = AfpFundOutDto[].class)))})
    @GetMapping
    public ResponseEntity<List<AfpFundOutDto>> findAllAfpFund() {
        List<AfpFundOutDto> countries = afpFundService.findAllAfpFund();
        return ResponseEntity.ok(countries);
    }
}

```

## src/main/java/com/nubo/operations/special/espec/api/web/controller/CalculationRestController.java

```java
package com.nubo.operations.special.espec.api.web.controller;

import com.nubo.operations.special.espec.api.models.dto.request.CalculationInDto;
import com.nubo.operations.special.espec.api.models.dto.request.CalculationIvaInDto;
import com.nubo.operations.special.espec.api.models.dto.response.CalculationOutDto;
import com.nubo.operations.special.espec.api.service.CalculationService;
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
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Calculation")
@RestController
@RequestMapping("/{version}/calculation")
@RequiredArgsConstructor
public class CalculationRestController {

    private final CalculationService calculationService;

    @Operation(summary = "Calculation settlement",
            description = "Calculation settlement")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = CalculationOutDto.class)))})
    @PostMapping
    public ResponseEntity<CalculationOutDto> calculationSettlementWithIva(@Valid @RequestBody CalculationIvaInDto calculationIvaInDto) {
        return ResponseEntity.ok(calculationService.calculationSettlementWithIva(calculationIvaInDto));
    }

    @Operation(summary = "Calculation settlement init by country iva",
            description = "Calculation settlement init by country iva")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = CalculationOutDto.class)))})
    @PostMapping("/country/{countryId}")
    public ResponseEntity<CalculationOutDto> calculationSettlementByCountryId(@PathVariable Long countryId,
                                                                              @Valid @RequestBody CalculationInDto calculationInDto) {
        return ResponseEntity.ok(calculationService.calculationSettlementByCountryId(countryId, calculationInDto));
    }

}

```

## src/main/java/com/nubo/operations/special/espec/api/web/controller/CurrencyRestController.java

```java
package com.nubo.operations.special.espec.api.web.controller;

import com.nubo.operations.special.espec.api.models.dto.response.CurrencyOutDto;
import com.nubo.operations.special.espec.api.service.CurrencyService;
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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Tag(name = "Currency")
@RestController
@RequestMapping("/{version}/currency")
@RequiredArgsConstructor
public class CurrencyRestController {

    private final CurrencyService currencyService;

    @Operation(summary = "Find all Currency", description = "Find all Currency")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = CurrencyOutDto[].class)))})
    @GetMapping
    public ResponseEntity<List<CurrencyOutDto>> findAllCurrency() {
        List<CurrencyOutDto> currencies = currencyService.findAllCurrency();
        return ResponseEntity.ok(currencies);
    }
}

```

## src/main/java/com/nubo/operations/special/espec/api/web/controller/DepositoryRestController.java

```java
package com.nubo.operations.special.espec.api.web.controller;

import com.nubo.operations.special.espec.api.models.dto.response.DepositoryOutDto;
import com.nubo.operations.special.espec.api.service.DepositoryService;
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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Tag(name = "Depository")
@RestController
@RequestMapping("/{version}/depository")
@RequiredArgsConstructor
public class DepositoryRestController {

    private final DepositoryService depositoryService;

    @Operation(summary = "Find all Depository", description = "Find all Depository")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = DepositoryOutDto[].class)))})
    @GetMapping
    public ResponseEntity<List<DepositoryOutDto>> findAllDepository() {
        List<DepositoryOutDto> countries = depositoryService.findAllDepository();
        return ResponseEntity.ok(countries);
    }
}

```

## src/main/java/com/nubo/operations/special/espec/api/web/controller/ExchangeRateRestController.java

```java
package com.nubo.operations.special.espec.api.web.controller;

import com.nubo.operations.special.espec.api.models.dto.response.ExchangeRateOutDto;
import com.nubo.operations.special.espec.api.service.ExchangeRateService;
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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Tag(name = "ExchangeRate")
@RestController
@RequestMapping("/{version}/exchange-rate")
@RequiredArgsConstructor
public class ExchangeRateRestController {

    private final ExchangeRateService exchangeRateService;

    @Operation(summary = "Find all ExchangeRate", description = "Find all ExchangeRate")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ExchangeRateOutDto[].class)))})
    @GetMapping
    public ResponseEntity<List<ExchangeRateOutDto>> findAllExchangeRate() {
        List<ExchangeRateOutDto> countries = exchangeRateService.findAllExchangeRate();
        return ResponseEntity.ok(countries);
    }
}

```

## src/main/java/com/nubo/operations/special/espec/api/web/controller/FractionationDepositRestController.java

```java
package com.nubo.operations.special.espec.api.web.controller;

import com.nubo.operations.special.espec.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.special.espec.api.service.FractionationDepositService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Tag(name = "Fractionation Deposit")
@RequestMapping("/{version}/fractionation-deposit")
@RestController
@RequiredArgsConstructor
public class FractionationDepositRestController {

    private final FractionationDepositService fractionationDepositService;

    @Operation(summary = "Approved assignment fraction by tradeId and sideId", description = "Approved assignment " +
            "fraction by tradeId and sideId")
    @ApiResponses(value = {@ApiResponse(responseCode = "201", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SettlementOutDto[].class)))})
    @PutMapping("/approve-assignments/trade/{tradeId}/side/{sideId}")
    public ResponseEntity<List<SettlementOutDto>> approveAssignment(
            @PathVariable Long tradeId,
            @PathVariable String sideId) {
        return ResponseEntity.ok(fractionationDepositService.approveAssignment(tradeId, sideId));
    }

    @Operation(summary = "Reject assignment fraction by tradeId and sideId",
            description = "Reject assignment fraction by tradeId and sideId")
    @ApiResponses(value = {@ApiResponse(responseCode = "201", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SettlementOutDto[].class)))})
    @PutMapping("/reject-assignments/trade/{tradeId}/side/{sideId}")
    public ResponseEntity<List<SettlementOutDto>> rejectAssignment(
            @PathVariable Long tradeId,
            @PathVariable String sideId) {
        return ResponseEntity.ok(fractionationDepositService.rejectAssignment(tradeId, sideId));
    }

}

```

## src/main/java/com/nubo/operations/special/espec/api/web/controller/FractionationPendingRestController.java

```java
package com.nubo.operations.special.espec.api.web.controller;

import com.nubo.operations.special.espec.api.client.operation.special.fractionation.dto.request.AssignmentInDto;
import com.nubo.operations.special.espec.api.client.operation.special.fractionation.dto.request.FractionationPendingInDto;
import com.nubo.operations.special.espec.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.ValidationSettlementOutDto;
import com.nubo.operations.special.espec.api.service.FractionationPendingService;
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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Tag(name = "Fractionation Pending")
@RequestMapping("/{version}/fractionation-pending")
@RestController
@RequiredArgsConstructor
public class FractionationPendingRestController {

    private final FractionationPendingService fractionationPendingService;

    @Operation(summary = "Create fraction by tradeId and sideId", description = "Create fraction by tradeId and sideId")
    @ApiResponses(value = {@ApiResponse(responseCode = "201", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SettlementOutDto[].class)))})
    @PostMapping("/create-fractions/trade/{tradeId}/side/{sideId}")
    public ResponseEntity<List<SettlementOutDto>> createFractionsPending(
            @PathVariable Long tradeId,
            @PathVariable String sideId,
            @Valid @RequestBody List<FractionationPendingInDto> fractionationPendingInDtoList) {
        List<SettlementOutDto> createdSettlementList = fractionationPendingService.createFractionsPending(tradeId, sideId,
                fractionationPendingInDtoList);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdSettlementList);
    }

    @Operation(summary = "Update fraction by tradeId and sideId", description = "Create fraction by tradeId and sideId")
    @ApiResponses(value = {@ApiResponse(responseCode = "201", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SettlementOutDto[].class)))})
    @PutMapping("/update-assignments/trade/{tradeId}/side/{sideId}")
    public ResponseEntity<List<SettlementOutDto>> updateAssignmentPending(
            @PathVariable Long tradeId,
            @PathVariable String sideId,
            @Valid @RequestBody List<AssignmentInDto> assignmentInDtoList) {
        List<SettlementOutDto> createdSettlementList = fractionationPendingService.updateAssignmentPending(tradeId, sideId,
                assignmentInDtoList);
        return ResponseEntity.ok(createdSettlementList);
    }

    @Operation(summary = "Validate fractions by tradeId and sideId", description = "Validate fractions by tradeId and sideId")
    @ApiResponses(value = {@ApiResponse(responseCode = "201", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ValidationSettlementOutDto.class)))})
    @GetMapping("/validate-assignments/trade/{tradeId}/side/{sideId}")
    public ResponseEntity<PageResponseOutDto<ValidationSettlementOutDto>> validateAssignmentPending(
            @RequestParam(defaultValue = "0") Integer page,
            @RequestParam(defaultValue = "10") Integer size,
            @PathVariable Long tradeId,
            @PathVariable String sideId) {
        return ResponseEntity.ok(fractionationPendingService.validateAssignment(page, size, tradeId, sideId));
    }
}

```

## src/main/java/com/nubo/operations/special/espec/api/web/controller/FractionationRestController.java

```java
package com.nubo.operations.special.espec.api.web.controller;

import com.nubo.operations.special.espec.api.client.operation.special.fractionation.dto.request.AssignmentInDto;
import com.nubo.operations.special.espec.api.client.operation.special.fractionation.dto.request.FractionationInDto;
import com.nubo.operations.special.espec.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.special.espec.api.service.FractionationService;
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
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Tag(name = "Fractionation")
@RestController
@RequestMapping("/{version}/fractionation")
@RequiredArgsConstructor
public class FractionationRestController {

    private final FractionationService fractionationService;

    @Operation(summary = "Create fraction by tradeId and sideId", description = "Create fraction by tradeId and sideId")
    @ApiResponses(value = {@ApiResponse(responseCode = "201", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SettlementOutDto[].class)))})
    @PostMapping("/create-fractions/trade/{tradeId}/side/{sideId}")
    public ResponseEntity<List<SettlementOutDto>> createFractions(
            @PathVariable Long tradeId,
            @PathVariable String sideId,
            @Valid @RequestBody List<FractionationInDto> fractionationInDtoList) {
        List<SettlementOutDto> createdSettlementList = fractionationService.createFractions(tradeId, sideId, fractionationInDtoList);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdSettlementList);
    }

    @Operation(summary = "Update fraction by tradeId and sideId", description = "Create fraction by tradeId and sideId")
    @ApiResponses(value = {@ApiResponse(responseCode = "201", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SettlementOutDto[].class)))})
    @PutMapping("/update-assignments/trade/{tradeId}/side/{sideId}")
    public ResponseEntity<List<SettlementOutDto>> updateAssignment(
            @PathVariable Long tradeId,
            @PathVariable String sideId,
            @Valid @RequestBody List<AssignmentInDto> assignmentInDtoList) {
        List<SettlementOutDto> createdSettlementList = fractionationService.updateAssignment(tradeId, sideId, assignmentInDtoList);
        return ResponseEntity.status(HttpStatus.OK).body(createdSettlementList);
    }

}

```

## src/main/java/com/nubo/operations/special/espec/api/web/controller/ParametersRestController.java

```java
package com.nubo.operations.special.espec.api.web.controller;

import com.nubo.operations.special.espec.api.models.dto.response.CountryOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.SimplySpecialTradeOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.StatusOutDto;
import com.nubo.operations.special.espec.api.service.ParametersService;
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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Parameters")
@RequestMapping("/{version}/parameters")
@RestController
@RequiredArgsConstructor
public class ParametersRestController {

    private final ParametersService parametersService;

    @Operation(summary = "Find special trade filters", description = "Search special trades by name or ID for filter purposes")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SimplySpecialTradeOutDto[].class)))})
    @GetMapping("/special-trade-filters")
    public ResponseEntity<PageResponseOutDto<SimplySpecialTradeOutDto>> findSpecialTradeFilters(
            @RequestParam(required = false) String searchValue,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order) {

        return ResponseEntity.ok(parametersService.findSpecialTradeFilters(searchValue, page, size, sort, order));
    }

    @Operation(summary = "Find status by category", description = "Get all status filtered by category")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = StatusOutDto[].class)))})
    @GetMapping("/status")
    public ResponseEntity<PageResponseOutDto<StatusOutDto>> findStatusByCategory(
            @RequestParam(required = false) String category,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order) {

        return ResponseEntity.ok(parametersService.findStatusByCategory(category, page, size, sort, order));
    }

    @Operation(summary = "Find allowed countries", description = "Get allowed countries (Colombia, Peru, Chile)")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = CountryOutDto[].class)))})
    @GetMapping("/countries")
    public ResponseEntity<PageResponseOutDto<CountryOutDto>> findAllowedCountries(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order) {

        return ResponseEntity.ok(parametersService.findAllowedCountries(page, size, sort, order));
    }

}

```

## src/main/java/com/nubo/operations/special/espec/api/web/controller/ReassignmentRestController.java

```java
package com.nubo.operations.special.espec.api.web.controller;

import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.operations.special.espec.api.models.dto.request.CorrectionSetInDto;
import com.nubo.operations.special.espec.api.models.dto.request.ExtendedReassignmentSetInDto;
import com.nubo.operations.special.espec.api.models.dto.request.ReassignmentSetInDto;
import com.nubo.operations.special.espec.api.models.dto.response.ExtendedReassignmentOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.ParticipantBankAccountOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.ReassignmentOutDto;
import com.nubo.operations.special.espec.api.models.entity.ReassignmentEntity;
import com.nubo.operations.special.espec.api.service.ReassignmentService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@Tag(name = "Reassignment")
@RestController
@RequestMapping("/{version}/reassignment")
@RequiredArgsConstructor
public class ReassignmentRestController
{

    private final ReassignmentService reassignmentService;

    @Operation(summary = "Set reassignment", description = "Create or update reassignment settings. Filters settlements by trade ID, fraction, and side_id from special trade.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Successfully Created", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = String.class)))
    })
    @PostMapping("/set-reassignment")
    public ResponseEntity<List<ReassignmentEntity>> setReassignment(
            @RequestHeader("client_ip") String clientIp,
            @RequestHeader("client_user") String clientUser,
            @RequestHeader("client_datetime") String clientDatetime,
            @Valid @RequestBody ReassignmentSetInDto reassignmentSetInDto)
    {

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(reassignmentService.setReassignment(reassignmentSetInDto));
    }

    @Operation(summary = "Correct reassignment", description = "Create or update reassignment correction settings. Filters settlements by trade ID, fraction, and side_id from special trade.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Successfully Created", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = String.class)))
    })
    @PostMapping("/correct-reassignment")
    public ResponseEntity<List<ReassignmentEntity>> correctReassignment(
            @RequestHeader("client_ip") String clientIp,
            @RequestHeader("client_user") String clientUser,
            @RequestHeader("client_datetime") String clientDatetime,
            @Valid @RequestBody CorrectionSetInDto correctionSetInDto)
    {

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(reassignmentService.correctReassignment(correctionSetInDto));
    }

    @Operation(summary = "Validate account titles", description = "Validate if account titles exist in the database")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = Boolean.class)))
    })
    @GetMapping("/validate/account-titles")
    public ResponseEntity<Boolean> validateAccountTitles(
            @RequestHeader("account_title") String accountTitle)
    {

        Boolean isValid = reassignmentService.validateAccountTitles(accountTitle);
        return ResponseEntity.ok(isValid);
    }

    @Operation(summary = "Validate cash account", description = "Validate cash account and return matching participant bank accounts")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = ParticipantBankAccountOutDto[].class)))
    })
    @GetMapping("/validate/cash-account")
    public ResponseEntity<List<ParticipantBankAccountOutDto>> validateCashAccount(
            @RequestHeader("cash_account") String cashAccount)
    {

        List<ParticipantBankAccountOutDto> participantBankAccounts = reassignmentService
                .validateCashAccount(cashAccount);
        return ResponseEntity.ok(participantBankAccounts);
    }

    @Operation(summary = "Find all reassignment", description = "Find all reassignment")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = ReassignmentOutDto[].class)))
    })
    @GetMapping
    public ResponseEntity<PageResponseOutDto<ReassignmentOutDto>> findAllReassignment(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(required = false) Long specialTradeId)
    {

        Pageable pageable;
        if (sort != null && !sort.trim().isEmpty())
        {
            Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
            Sort sortObj = Sort.by(direction, sort != null ? sort : "id");
            pageable = PageRequest.of(page, size, sortObj);
        }
        else
        {
            pageable = PageRequest.of(page, size);
        }

        return ResponseEntity.ok(reassignmentService.findAllReassignment(pageable, specialTradeId));
    }

    @Operation(summary = "Find all reassignment by side", description = "Find all reassignment filtered by specialTradeId and sideId")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = ReassignmentOutDto[].class)))
    })
    @GetMapping("/by-side")
    public ResponseEntity<PageResponseOutDto<ReassignmentOutDto>> findAllReassignmentBySide(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(required = false) Long specialTradeId,
            @RequestParam(required = false) String sideId)
    {

        Pageable pageable;
        if (sort != null && !sort.trim().isEmpty())
        {
            Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
            Sort sortObj = Sort.by(direction, sort != null ? sort : "id");
            pageable = PageRequest.of(page, size, sortObj);
        }
        else
        {
            pageable = PageRequest.of(page, size);
        }

        return ResponseEntity.ok(reassignmentService.findAllReassignmentBySide(pageable, specialTradeId, sideId));
    }

    @Operation(summary = "Get reassignment data V2", description = "Get complete reassignment data for a trade and side. Returns beneficiaries, totals, costs, and capabilities.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = ExtendedReassignmentOutDto.class)))
    })
    @GetMapping("/trade/{tradeId}/side/{sideId}")
    public ResponseEntity<ExtendedReassignmentOutDto> getReassignmentData(
            @PathVariable Long tradeId,
            @PathVariable String sideId)
    {

        ExtendedReassignmentOutDto response = reassignmentService.getReassignmentData(tradeId, sideId);
        return ResponseEntity.ok(response);
    }

    @Operation(summary = "Execute reassignment V2", description = "Execute reassignment without internal approval for nuBO-originated operations. Validates all business rules and updates settlements.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Executed", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = ExtendedReassignmentOutDto.class)))
    })
    @PostMapping
    public ResponseEntity<ExtendedReassignmentOutDto> executeReassignment(
            @RequestHeader("client_ip") String clientIp,
            @RequestHeader("client_user") String clientUser,
            @RequestHeader("client_datetime") String clientDatetime,
            @Valid @RequestBody ExtendedReassignmentSetInDto request)
    {

        ExtendedReassignmentOutDto response = reassignmentService.executeReassignment(request);
        return ResponseEntity.ok(response);
    }
}

```

## src/main/java/com/nubo/operations/special/espec/api/web/controller/SpecialSettlementRestController.java

```java
package com.nubo.operations.special.espec.api.web.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.operations.special.espec.api.client.operation.special.fractionation.dto.request.AssignmentSpecialSettlementInDto;
import com.nubo.operations.special.espec.api.client.operation.special.fractionation.dto.request.FractionSpecialSettlementInDto;
import com.nubo.operations.special.espec.api.models.dto.request.SpecialSettlementInDto;
import com.nubo.operations.special.espec.api.models.dto.request.SpecialSettlementParamInDto;
import com.nubo.operations.special.espec.api.models.dto.request.SpecialSettlementUpdateInDto;
import com.nubo.operations.special.espec.api.models.dto.response.FractionAccountSpecialSettlementOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.SpecialSettlementOutDto;
import com.nubo.operations.special.espec.api.service.SpecialSettlementService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@Tag(name = "Special Settlements")
@RequestMapping("/{version}/special-settlement")
@RestController
@RequiredArgsConstructor
public class SpecialSettlementRestController {

    private final SpecialSettlementService specialSettlementService;

    @Operation(summary = "Find all special settlements", description = "Find all special settlements")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SpecialSettlementOutDto[].class)))})
    @GetMapping
    public ResponseEntity<PageResponseOutDto<SpecialSettlementOutDto>> findAllSpecialSettlement(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "specialTradeId") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all,
            @Parameter(example = "1") @RequestParam(required = false) Long specialTradeId,
            @Parameter(example = "1") @RequestParam(required = false) Integer fraction,
            @Parameter(example = "1") @RequestParam(required = false) String sideId,
            @Parameter(example = "1") @RequestParam(required = false) Long investorId,
            @Parameter(example = "1") @RequestParam(required = false) Long investorAccountId,
            @Parameter(example = "1") @RequestParam(required = false) Long participantAccountId,
            @Parameter(example = "1") @RequestParam(required = false) Long bankAccountId) {

        SpecialSettlementParamInDto specialSettlementParamInDto = SpecialSettlementParamInDto.builder()
                .specialTradeId(specialTradeId)
                .fraction(fraction)
                .sideId(sideId)
                .investorId(investorId)
                .investorAccountId(investorAccountId)
                .participantAccountId(participantAccountId)
                .bankAccountId(bankAccountId)
                .build();

        return ResponseEntity.ok(specialSettlementService.findAllSpecialSettlement(specialSettlementParamInDto, page, size, sort, order, all));
    }

    @Operation(summary = "Find all special settlements with dynamic filtering", description = "Find all special settlements with dynamic filtering")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SpecialSettlementOutDto[].class)))})
    @GetMapping("/dynamic")
    public ResponseEntity<PageResponseOutDto<SpecialSettlementOutDto>> findAllSpecialSettlementDynamic(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) String fieldName,
            @RequestParam(required = false) String fieldValue,
            @RequestParam(required = false) String operation,
            @RequestParam(required = false) String sort,
            @RequestParam(required = false) String order,
            @RequestParam(defaultValue = "false") boolean all,
            @Parameter(example = "1") @RequestParam(required = false) Long specialTradeId,
            @Parameter(example = "1") @RequestParam(required = false) Integer fraction,
            @Parameter(example = "1") @RequestParam(required = false) String sideId,
            @Parameter(example = "1") @RequestParam(required = false) Long investorId,
            @Parameter(example = "1") @RequestParam(required = false) Long investorAccountId,
            @Parameter(example = "1") @RequestParam(required = false) Long participantAccountId,
            @Parameter(example = "1") @RequestParam(required = false) Long bankAccountId) {

        return ResponseEntity.ok(
            specialSettlementService.findAllSpecialSettlementDynamic(
                fieldName, fieldValue, operation,
                specialTradeId, fraction, sideId, investorId, investorAccountId, participantAccountId, bankAccountId,
                page, size, sort, order, all
            )
        );
    }

    @Operation(summary = "Find Special Settlement by ID", description = "Find Special Settlement by ID")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SpecialSettlementOutDto.class)))})
    @GetMapping("/{specialTradeId}/fraction/{fraction}/side/{sideId}")
    public ResponseEntity<SpecialSettlementOutDto> findSpecialSettlementById(
            @PathVariable Long specialTradeId,
            @PathVariable Integer fraction,
            @PathVariable String sideId) {
        return ResponseEntity.ok(specialSettlementService.findSpecialSettlementById(specialTradeId, fraction, sideId));
    }

    @Operation(summary = "Create Special Settlement")
    @ApiResponses(value = {@ApiResponse(responseCode = "201", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SpecialSettlementOutDto.class)))})
    @PostMapping
    public ResponseEntity<SpecialSettlementOutDto> createSpecialSettlement(
            @Valid @RequestBody SpecialSettlementInDto inDto) {
        SpecialSettlementOutDto created = specialSettlementService.createSpecialSettlement(inDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    @Operation(summary = "Update Special Settlement", description = "Update Special Settlement")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SpecialSettlementOutDto.class)))})
    @PatchMapping("/{specialTradeId}/fraction/{fraction}/side/{sideId}")
    public ResponseEntity<SpecialSettlementOutDto> updateSpecialSettlement(
            @PathVariable Long specialTradeId,
            @PathVariable Integer fraction,
            @PathVariable String sideId,
            @Valid @RequestBody SpecialSettlementUpdateInDto specialSettlementUpdateInDto) {
        return ResponseEntity.ok(specialSettlementService.updateSpecialSettlement(specialSettlementUpdateInDto,
                specialTradeId, fraction, sideId));
    }

    @Operation(summary = "Create fraction by specialTrade", description = "Create fraction by specialTrade")
    @ApiResponses(value = {@ApiResponse(responseCode = "201", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SpecialSettlementOutDto[].class)))})
    @PostMapping("/create-fractions/special-trade/{specialTradeId}")
    public ResponseEntity<List<SpecialSettlementOutDto>> createFractions(
            @PathVariable Long specialTradeId,
            @Valid @RequestBody List<FractionSpecialSettlementInDto> fractionSpecialSettlementInDtoList) {
        List<SpecialSettlementOutDto> createdSettlementList = specialSettlementService.createFractions(specialTradeId,
                fractionSpecialSettlementInDtoList);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdSettlementList);
    }

    @Operation(summary = "Update assignments by specialTrade", description = "Update assignments by specialTrade")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SpecialSettlementOutDto[].class)))})
    @PutMapping("/update-assignments/special-trade/{specialTradeId}")
    public ResponseEntity<List<SpecialSettlementOutDto>> updateAssignment(
            @PathVariable Long specialTradeId,
            @Valid @RequestBody List<AssignmentSpecialSettlementInDto> assignmentSpecialSettlementInDtoList) {
        List<SpecialSettlementOutDto> updateAssignment = specialSettlementService.updateAssignment(specialTradeId,
                assignmentSpecialSettlementInDtoList);
        return ResponseEntity.status(HttpStatus.OK).body(updateAssignment);
    }

    @Operation(summary = "Validate account and deposit",
            description = "Validate account and deposit")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = FractionAccountSpecialSettlementOutDto.class)))})
    @GetMapping("/account/account-number/{accountNumber}/special-trade/{specialTradeId}")
    public ResponseEntity<FractionAccountSpecialSettlementOutDto> validateAccountFraction(
            @PathVariable String accountNumber,
            @PathVariable Long specialTradeId) {
        return ResponseEntity.ok(specialSettlementService.validateAccountFraction(accountNumber, specialTradeId));
    }

}

```

## src/main/java/com/nubo/operations/special/espec/api/web/controller/SpecialTradeRestController.java

```java
package com.nubo.operations.special.espec.api.web.controller;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.operations.special.espec.api.models.dto.request.SpecialTradeInDto;
import com.nubo.operations.special.espec.api.models.dto.request.SpecialTradeParamInDto;
import com.nubo.operations.special.espec.api.models.dto.request.SpecialTradeUpdateInDto;
import com.nubo.operations.special.espec.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.SimplySpecialTradeOutDto;
import com.nubo.operations.special.espec.api.models.dto.response.SpecialTradeOutDto;
import com.nubo.operations.special.espec.api.service.SpecialTradeService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@Tag(name = "Special Trade")
@RequestMapping("/{version}/special-trade")
@RestController
@RequiredArgsConstructor
public class SpecialTradeRestController {

    private final SpecialTradeService specialTradeService;

    @Operation(summary = "Find all special trade", description = "Find all special trade")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SpecialTradeOutDto[].class)))})
    @GetMapping
    public ResponseEntity<PageResponseOutDto<SpecialTradeOutDto>> findAllSpecialTrade(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all,
            @Parameter(example = "1") @RequestParam(required = false) Long id,
            @Parameter(example = "1") @RequestParam(required = false) Long statusId,
            @Parameter(example = "1") @RequestParam(required = false) Long participantId,
            @Parameter(example = "1") @RequestParam(required = false) Long typeId,
            @Parameter(example = "1") @RequestParam(required = false) Long countryId,
            @Parameter(example = "1") @RequestParam(required = false) String specialOperationName) {

        SpecialTradeParamInDto specialTradeParamInDto = SpecialTradeParamInDto.builder()
                .id(id)
                .participantId(participantId)
                .statusId(statusId)
                .typeId(typeId)
                .countryId(countryId)
                .specialOperationName(specialOperationName)
                .build();

        return ResponseEntity.ok(specialTradeService.findAllSpecialTrade(specialTradeParamInDto, page, size, sort, order, all));
    }

    @Operation(summary = "Find Special Trade by ID", description = "Find Special Trade by ID")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SpecialTradeOutDto.class)))})
    @GetMapping("/{specialTradeId}")
    public ResponseEntity<SpecialTradeOutDto> findSpecialTradeById(@PathVariable Long specialTradeId) {
        return ResponseEntity.ok(specialTradeService.findSpecialTradeById(specialTradeId));
    }

    @Operation(summary = "Create Special Trade", description = "Create Special Trade")
    @ApiResponses(value = {@ApiResponse(responseCode = "201", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SpecialTradeOutDto.class)))})
    @PostMapping
    public ResponseEntity<SpecialTradeOutDto> createSpecialTrade(
            @Valid @RequestBody SpecialTradeInDto specialTradeInDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(specialTradeService.createSpecialTrade(specialTradeInDto));
    }

    @Operation(summary = "Update Special Trade", description = "Update Special Trade")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SpecialTradeOutDto.class)))})
    @PutMapping("/{specialTradeId}")
    public ResponseEntity<SpecialTradeOutDto> updateSpecialTrade(
            @PathVariable Long specialTradeId,
            @Valid @RequestBody SpecialTradeUpdateInDto specialTradeUpdateInDto) {
        return ResponseEntity.ok(specialTradeService.updateSpecialTrade(specialTradeUpdateInDto, specialTradeId));
    }

    @Operation(summary = "Find all special trade dynamic", description = "Find all special trade with dynamic filters")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = PageResponseOutDto.class)))})
    @GetMapping("/dynamic")
    public ResponseEntity<PageResponseOutDto<SpecialTradeOutDto>> findAllSpecialTradeDynamic(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) String fieldName,
            @RequestParam(required = false) String fieldValue,
            @RequestParam(required = false) String operation,
            @RequestParam(required = false) String sort,
            @RequestParam(required = false) String order,
            @RequestParam(defaultValue = "false") boolean all,
            @Parameter(example = "1") @RequestParam(required = false) Long id,
            @Parameter(example = "1") @RequestParam(required = false) Long statusId,
            @Parameter(example = "1") @RequestParam(required = false) Long participantId,
            @Parameter(example = "1") @RequestParam(required = false) Long typeId,
            @Parameter(example = "1") @RequestParam(required = false) Long countryId,
            @Parameter(example = "1") @RequestParam(required = false) String specialOperationName,
            @Parameter(example = "2024-01-01") @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate recordDate) {

        return ResponseEntity.ok(
                specialTradeService.findAllSpecialTradeDynamic(
                        fieldName, fieldValue, operation,
                        id, statusId, participantId, typeId, countryId, specialOperationName, recordDate,
                        page, size, sort, order, all
                )
        );
    }


    @Operation(summary = "Find all simply special trade", description = "Find all simply special trade")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SimplySpecialTradeOutDto[].class)))})
    @GetMapping("/all-simply-special-trade")
    public ResponseEntity<PageResponseOutDto<SimplySpecialTradeOutDto>> findAllSimplySpecialTrade(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all,
            @Parameter(example = "1") @RequestParam(required = false) Long specialTradeId,
            @Parameter(example = "1") @RequestParam(required = false) String specialOperationName,
            @Parameter(example = "1") @RequestParam(required = false) Long matchId,
            @Parameter(example = "1") @RequestParam(required = false) Long participantId,
            @Parameter(example = "1") @RequestParam(required = false) Long custodianId,
            @Parameter(example = "2025-01-01") @RequestParam(required = false) LocalDate clearingDate,
            @Parameter(example = "2025-01-01") @RequestParam(required = false) LocalDate matchDate) {

        SpecialTradeParamInDto specialTradeParamInDto = SpecialTradeParamInDto.builder()
                .id(specialTradeId)
                .specialOperationName(specialOperationName)
                .matchId(matchId)
                .participantId(participantId)
                .custodianId(custodianId)
                .clearingDate(clearingDate)
                .matchDate(matchDate)
                .build();

        return ResponseEntity.ok(specialTradeService.findAllSimplySpecialTrade(specialTradeParamInDto, page, size, sort, order, all));
    }

}


```

## src/main/java/com/nubo/operations/special/espec/api/web/controller/ValidateAllowedDaysRestController.java

```java
package com.nubo.operations.special.espec.api.web.controller;

import com.nubo.operations.special.espec.api.service.ValidateAllowedDaysServices;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Validate Fraction")
@RestController
@RequestMapping("/{version}/validate/allow")
@RequiredArgsConstructor
public class ValidateAllowedDaysRestController {

    private final ValidateAllowedDaysServices validateAllowedDays;

    @Operation(summary = "Validate allowed days before the operation",
            description = "Validate parameterized days before the operation")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response")})
    @GetMapping("/allowed-days/before-operation/trade/{tradeId}/country/{countryId}")
    public ResponseEntity<Boolean> validateDaysBeforeOperation(@PathVariable Long tradeId,
                                                               @PathVariable Long countryId) {
        Boolean response = validateAllowedDays.validateDaysBeforeOperation(tradeId, countryId);
        return ResponseEntity.ok(response);
    };

    @Operation(summary = "Validate allowed days after the operation",
            description = "Validate parameterized days after the operation")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response")})
    @GetMapping("/allowed-days/after-operation/trade/{tradeId}/country/{countryId}")
    public ResponseEntity<Boolean> validateDaysAfterOperation(@PathVariable Long tradeId,
                                                              @PathVariable Long countryId) {
        Boolean response = validateAllowedDays.validateDaysAfterOperation(tradeId, countryId);
        return ResponseEntity.ok(response);
    };
}

```

## src/main/java/com/nubo/operations/special/espec/api/web/controller/ValidateFractionRestController.java

```java
package com.nubo.operations.special.espec.api.web.controller;

import com.nubo.operations.special.espec.api.application.annotations.RateLimited;
import com.nubo.operations.special.espec.api.client.operation.special.rules.dto.request.FractionRuleInDto;
import com.nubo.operations.special.espec.api.models.dto.response.*;
import com.nubo.operations.special.espec.api.service.ValidateFractionService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.List;

@Tag(name = "Validate Fraction")
@RestController
@RequestMapping("/{version}/validate/fraction")
@RequiredArgsConstructor
@RateLimited
public class ValidateFractionRestController {

    private final ValidateFractionService validateFractionService;

    @Operation(summary = "Validate account and deposit",
            description = "Validate account and deposit")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = FractionAccountOutDto.class)))})
    @GetMapping("/account/account-number/{accountNumber}/trade/{tradeId}/side/{sideId}")
    public ResponseEntity<FractionAccountOutDto> validateAccountFraction(
            @PathVariable String accountNumber,
            @PathVariable Long tradeId,
            @PathVariable String sideId,
            @RequestParam(required = false) Long originId) {
        FractionAccountOutDto fractionAccountOutDto = validateFractionService.validateAccountFraction(accountNumber, tradeId, sideId, originId);
        return ResponseEntity.ok(fractionAccountOutDto);
    }

    @Operation(summary = "Validate bank account type stocks method of payment",
            description = "Validate bank account type stocks method of payment")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response")})
    @GetMapping("/bank-account/trade/{tradeId}")
    public void validateBankAccountFraction(@PathVariable Long tradeId) {
        validateFractionService.validateBankAccountFraction(tradeId);
        ResponseEntity.ok().build();
    }

    @Operation(summary = "Validate commission participant account type",
            description = "Validate commission participant account type")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response")})
    @GetMapping("/commission/participant-account/account-number/{accountNumber}")
    public void validateCommissionParticipantAccountFraction(@PathVariable String accountNumber,
                                                          @RequestParam BigDecimal commissionPercentage) {
        validateFractionService.validateCommissionParticipantAccountFraction(accountNumber, commissionPercentage);
        ResponseEntity.ok().build();
    }

    @Operation(summary = "Validate quantity fractions correction",
            description = "Validate quantity correction")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = Boolean.class)))})
    @PostMapping("/quantity-fractions/trade/{tradeId}")
    public ResponseEntity<Boolean> validateQuantityFractionsCorrection(@PathVariable Long tradeId,
                                                                       @Valid @RequestBody List<FractionRuleInDto> fractionRuleInDtoList) {
        Boolean response = validateFractionService.validateQuantityFractionsCorrection(tradeId, fractionRuleInDtoList);
        return ResponseEntity.ok(response);
    }

    @Operation(summary = "Validate range quantity fractions correction",
            description = "Validate range quantity fractions correction")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = Boolean.class)))})
    @PostMapping("/range-quantity-fractions/trade/{tradeId}")
    public ResponseEntity<Boolean> validateRangeQuantityFractionsCorrection(@PathVariable Long tradeId,
                                                                            @Valid @RequestBody List<FractionRuleInDto> fractionRuleInDtoList) {
        Boolean response = validateFractionService.validateRangeQuantityFractionsCorrection(tradeId, fractionRuleInDtoList);
        return ResponseEntity.ok(response);
    }

    @Operation(summary = "Validate maximum limit fractions correction",
            description = "Validate maximum limit fractions correction")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = Boolean.class)))})
    @PostMapping("/maximum-limit-fractions")
    public ResponseEntity<Boolean> validateMaximumLimitFractionsCorrection(@Valid @RequestBody List<FractionRuleInDto> fractionRuleInDtoList) {
        Boolean response = validateFractionService.validateMaximumLimitFractionsCorrection(fractionRuleInDtoList);
        return ResponseEntity.ok(response);
    }

    @Operation(summary = "Validate direct depositor fraction correction",
            description = "Validate direct depositor fraction correction")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ParticipantOutDto.class)))})
    @GetMapping("/direct-depositor/trade/{tradeId}/side/{sideId}")
    public ResponseEntity<ParticipantOutDto> validateDirectDepositorFractionCorrection(@PathVariable Long tradeId,
                                                                                       @PathVariable String sideId) {
        ParticipantOutDto response = validateFractionService.validateDirectDepositorFractionCorrection(tradeId, sideId);
        return ResponseEntity.ok(response);
    }

    @Operation(summary = "Validate cud-account",
            description = "Validate cud-account")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ParticipantBankAccountOutDto[].class)))})
    @GetMapping("/cud-account/trade/{tradeId}/side/{sideId}")
    public ResponseEntity<PageResponseOutDto<ParticipantBankAccountOutDto>> validateCudAccountFraction(
            @PathVariable Long tradeId,
            @PathVariable String sideId,
            @RequestParam(required = false) String accountNumber,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {

        Pageable pageable = PageRequest.of(page, size);

        return ResponseEntity.ok(validateFractionService.validateCudAccountFraction(tradeId, sideId, accountNumber, pageable));
    }

    @Operation(summary = "Validate fraction create amount",
            description = "Validate fraction create amount")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = IsPossibleCreateFractionDto.class)))})
    @GetMapping("/create-fraction-amount/trade/{tradeId}/side/{sideId}")
    public ResponseEntity<IsPossibleCreateFractionDto> validateCreateFractionAmount(
            @PathVariable Long tradeId,
            @PathVariable String sideId) {
        IsPossibleCreateFractionDto isPossibleCreateFractionDto = validateFractionService.validateCreateFractionAmount(tradeId, sideId);
        return ResponseEntity.ok(isPossibleCreateFractionDto);
    }

}

```

## src/main/java/com/nubo/operations/special/espec/api/web/controller/ValidateUserPermissionRestController.java

```java
package com.nubo.operations.special.espec.api.web.controller;

import com.nubo.operations.special.espec.api.models.dto.response.UserPermissionOutDto;
import com.nubo.operations.special.espec.api.service.ValidateUserPermissionService;
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

@Tag(name = "Validate Fraction")
@RestController
@RequestMapping("/{version}/validate/user")
@RequiredArgsConstructor
public class ValidateUserPermissionRestController {

    private final ValidateUserPermissionService validateUserPermissionService;

    @Operation(summary = "Get permission by id", description = "Get permission by id")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = UserPermissionOutDto.class)))})
    @GetMapping("/permission/permissionId/{permissionId}/userProfileId/{userId}")
    public ResponseEntity<UserPermissionOutDto> validateUserPermission(@PathVariable Long permissionId,
                                                                       @PathVariable Long userId) {
        return ResponseEntity.ok(validateUserPermissionService.validateUserPermission(permissionId, userId));
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
  nubo:
    url-operation-special-calculation: ${NUBO_URL_OPERATION_SPECIAL_CALCULATION}
    url-operation-special-rules: ${NUBO_URL_OPERATION_SPECIAL_RULES}
    url-operation-special-fractionation: ${NUBO_URL_OPERATION_SPECIAL_FRACTIONATION}


```

## src/main/resources/application-local.yml

```yaml
server:
  port: 8084
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
  nubo:
    url-operation-special-calculation: ${NUBO_URL_OPERATION_SPECIAL_CALCULATION}
    url-operation-special-rules: ${NUBO_URL_OPERATION_SPECIAL_RULES}
    url-operation-special-fractionation: ${NUBO_URL_OPERATION_SPECIAL_FRACTIONATION}
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
  nubo:
    url-operation-special-calculation: ${NUBO_URL_OPERATION_SPECIAL_CALCULATION}
    url-operation-special-rules: ${NUBO_URL_OPERATION_SPECIAL_RULES}
    url-operation-special-fractionation: ${NUBO_URL_OPERATION_SPECIAL_FRACTIONATION}
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
  nubo:
    url-operation-special-calculation: ${NUBO_URL_OPERATION_SPECIAL_CALCULATION}
    url-operation-special-rules: ${NUBO_URL_OPERATION_SPECIAL_RULES}
    url-operation-special-fractionation: ${NUBO_URL_OPERATION_SPECIAL_FRACTIONATION}


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
  nubo:
    url-operation-special-calculation: ${NUBO_URL_OPERATION_SPECIAL_CALCULATION}
    url-operation-special-rules: ${NUBO_URL_OPERATION_SPECIAL_RULES}
    url-operation-special-fractionation: ${NUBO_URL_OPERATION_SPECIAL_FRACTIONATION}


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
 ,---. ,------. ,------. ,-----.,--.  ,---.  ,--.    ,-----. ,------. ,------.,------.   ,---. ,--------.,--. ,-----. ,--.  ,--. ,---.   ,---.  ,------. ,--.
'   .-'|  .--. '|  .---''  .--./|  | /  O  \ |  |   '  .-.  '|  .--. '|  .---'|  .--. ' /  O  \'--.  .--'|  |'  .-.  '|  ,'.|  |'   .-' /  O  \ |  .--. '|  |
`.  `-.|  '--' ||  `--, |  |    |  ||  .-.  ||  |   |  | |  ||  '--' ||  `--, |  '--'.'|  .-.  |  |  |   |  ||  | |  ||  |' '  |`.  `-.|  .-.  ||  '--' ||  |
.-'    |  | --' |  `---.'  '--'\|  ||  | |  ||  '--.'  '-'  '|  | --' |  `---.|  |\  \ |  | |  |  |  |   |  |'  '-'  '|  | `   |.-'    |  | |  ||  | --' |  |
`-----'`--'     `------' `-----'`--'`--' `--'`-----' `-----' `--'     `------'`--' '--'`--' `--'  `--'   `--' `-----' `--'  `--'`-----'`--' `--'`--'     `--'


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
