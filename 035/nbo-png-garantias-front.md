# nbo-png-garantias-front

Código fuente de producción y configuraciones. Captura local: 28/10/2026.

Paquete: guarantees-management. Se incluyen 458 archivos: 442 de TypeScript/JavaScript y 16 de estilos, recursos de texto, documentación y configuración.

Cada sección identifica la ruta original y conserva su contenido completo, salvo credenciales literales ocultadas en configuraciones. El código TypeScript/JavaScript se conserva sin cambios. Incluye componentes, páginas, hooks, servicios, tipos, rutas, estado, estilos, SVG, package.json, configuración de compilación y despliegue disponible.

Se excluyen tests y su configuración, dependencias instaladas, lockfiles, salidas generadas, cachés, metadatos de Git, instrucciones de agentes y recursos binarios. Los datos mock ubicados en el código de producción se conservan porque pueden ser consumidos por la aplicación.

Valores de credenciales ocultados: 0. Referencias a variables de entorno conservadas.

## Módulos

- account-management
- conciliation-guarantees
- fixed-parameters-guarantees
- guarantee-administration
- guarantee-liberation-download
- limit-guarantees
- register-guaranties
- transfer-liberation-guarantees
- view-guarantees
- view-operations-guarantee

## Dependencias de ejecución

- @hookform/resolvers: ^5.2.1
- @mui/material: ^6.4.4
- @mui/x-data-grid: ^7.28.2
- @nuam/common-fe-lib-components: 1.32.1
- @react-pdf/renderer: ^4.1.5
- @reduxjs/toolkit: ^2.8.2
- @stomp/stompjs: ^7.2.1
- axios: ^1.9.0
- dayjs: ^1.11.13
- file-saver: ^2.0.5
- papaparse: ^5.4.1
- patch-package: ^8.0.1
- react: ^18.3.1
- react-dom: ^18.3.1
- react-hook-form: ^7.62.0
- react-i18next: ^15.4.1
- react-redux: ^9.2.0
- react-router-dom: ^6.27.0
- sockjs-client: ^1.6.1
- xlsx: https://cdn.sheetjs.com/xlsx-0.20.3/xlsx-0.20.3.tgz
- yup: ^1.7.0

## Índice

1. `.dockerignore`
2. `.env`
3. `.github/workflows/continuos_integration.yml`
4. `.npmrc`
5. `.prettierrc`
6. `README.md`
7. `eslint.config.js`
8. `index.html`
9. `nginx/default.conf.template`
10. `package.json`
11. `postcss.config.js`
12. `public/vite.svg`
13. `src/App.css`
14. `src/App.tsx`
15. `src/declares.d.ts`
16. `src/features/account-management/components/FiltersTable.tsx`
17. `src/features/account-management/components/HeaderActions.tsx`
18. `src/features/account-management/components/RenderOptionAutoComplete.tsx`
19. `src/features/account-management/components/modal/DesactivateAccount.tsx`
20. `src/features/account-management/components/modal/NewAccount.tsx`
21. `src/features/account-management/constants/alert.ts`
22. `src/features/account-management/constants/columns.tsx`
23. `src/features/account-management/constants/errors.ts`
24. `src/features/account-management/constants/filter.ts`
25. `src/features/account-management/constants/links.ts`
26. `src/features/account-management/constants/menu.ts`
27. `src/features/account-management/constants/modal.ts`
28. `src/features/account-management/constants/searchKeys.ts`
29. `src/features/account-management/hooks/useAccountManagement.ts`
30. `src/features/account-management/hooks/useFilters.ts`
31. `src/features/account-management/pages/AccountManagement.tsx`
32. `src/features/account-management/services/account-actions/create.ts`
33. `src/features/account-management/services/account-actions/desactivate.ts`
34. `src/features/account-management/services/account-actions/getAccountByCode.ts`
35. `src/features/account-management/services/account-actions/getAccountByName.ts`
36. `src/features/account-management/services/account-actions/getAccountStatus.ts`
37. `src/features/account-management/services/account-actions/getCoverage.ts`
38. `src/features/account-management/services/account-actions/getDestination.ts`
39. `src/features/account-management/services/account-actions/getMarket.ts`
40. `src/features/account-management/types/account.d.ts`
41. `src/features/account-management/types/alert.d.ts`
42. `src/features/account-management/types/filter.d.ts`
43. `src/features/account-management/utils/getErrorMessage.ts`
44. `src/features/conciliation-guarantees/components/ConciliationHistoryModal.tsx`
45. `src/features/conciliation-guarantees/components/ConciliationSection.tsx`
46. `src/features/conciliation-guarantees/components/CurrencySelector.tsx`
47. `src/features/conciliation-guarantees/components/ManageDifferencesModal.tsx`
48. `src/features/conciliation-guarantees/components/TabContent/BanrepTab.tsx`
49. `src/features/conciliation-guarantees/components/TabContent/BiceTab.tsx`
50. `src/features/conciliation-guarantees/components/TabContent/CavaliTab.tsx`
51. `src/features/conciliation-guarantees/components/TabContent/DcvChileTab.tsx`
52. `src/features/conciliation-guarantees/components/TabContent/DcvColombiaTab.tsx`
53. `src/features/conciliation-guarantees/components/TabContent/DecevalTab.tsx`
54. `src/features/conciliation-guarantees/components/TabContent/ScotiaTab.tsx`
55. `src/features/conciliation-guarantees/components/UploadButtons.tsx`
56. `src/features/conciliation-guarantees/config/tabsConfig.ts`
57. `src/features/conciliation-guarantees/constants/columns.tsx`
58. `src/features/conciliation-guarantees/constants/endpoints.ts`
59. `src/features/conciliation-guarantees/constants/options.ts`
60. `src/features/conciliation-guarantees/constants/tabs.ts`
61. `src/features/conciliation-guarantees/hooks/useConciliation.ts`
62. `src/features/conciliation-guarantees/hooks/useConciliationData.ts`
63. `src/features/conciliation-guarantees/hooks/useCurrencySelector.ts`
64. `src/features/conciliation-guarantees/hooks/useFileUpload.ts`
65. `src/features/conciliation-guarantees/hooks/useTabConfig.ts`
66. `src/features/conciliation-guarantees/pages/ConciliationGuarantees.tsx`
67. `src/features/conciliation-guarantees/services/conciliatonApisCmd.ts`
68. `src/features/conciliation-guarantees/types/conciliation.d.ts`
69. `src/features/fixed-parameters-guarantees/assets/icons/info-square.svg`
70. `src/features/fixed-parameters-guarantees/components/AutoCompleteConditions.tsx`
71. `src/features/fixed-parameters-guarantees/components/ConfirmationDisabledParam.tsx`
72. `src/features/fixed-parameters-guarantees/components/FiltersTable.tsx`
73. `src/features/fixed-parameters-guarantees/components/HeaderActionsLeftTable.tsx`
74. `src/features/fixed-parameters-guarantees/components/IconEyesTracking.tsx`
75. `src/features/fixed-parameters-guarantees/components/ModalConfirmationDisabled.tsx`
76. `src/features/fixed-parameters-guarantees/components/ModalConfirmationRegister.tsx`
77. `src/features/fixed-parameters-guarantees/components/ModalNewRegisterParams.tsx`
78. `src/features/fixed-parameters-guarantees/components/ModalTrackingGuarantees.tsx`
79. `src/features/fixed-parameters-guarantees/components/ModalsProcessRegisterParameters.tsx`
80. `src/features/fixed-parameters-guarantees/components/RegisterOnlyUserInternal.tsx`
81. `src/features/fixed-parameters-guarantees/components/SelectNewRegister.tsx`
82. `src/features/fixed-parameters-guarantees/components/TableFixedParams.tsx`
83. `src/features/fixed-parameters-guarantees/components/TableWithFilter.tsx`
84. `src/features/fixed-parameters-guarantees/constants/excel.ts`
85. `src/features/fixed-parameters-guarantees/constants/url.ts`
86. `src/features/fixed-parameters-guarantees/hooks/useActionCalculateValuation.tsx`
87. `src/features/fixed-parameters-guarantees/mocks/columnsFixedParams.tsx`
88. `src/features/fixed-parameters-guarantees/mocks/columnsTracking.ts`
89. `src/features/fixed-parameters-guarantees/mocks/optionsRegister.tsx`
90. `src/features/fixed-parameters-guarantees/mocks/stateParameterInitial.ts`
91. `src/features/fixed-parameters-guarantees/pages/FixedParametersGuarantees.tsx`
92. `src/features/fixed-parameters-guarantees/services/disableFixedParams.ts`
93. `src/features/fixed-parameters-guarantees/services/getConditionsAdditionalFilter.ts`
94. `src/features/fixed-parameters-guarantees/services/getCountriesOptions.ts`
95. `src/features/fixed-parameters-guarantees/services/getDataAdditionalParameters.ts`
96. `src/features/fixed-parameters-guarantees/services/getOptionParams.ts`
97. `src/features/fixed-parameters-guarantees/services/getOptionStatus.ts`
98. `src/features/fixed-parameters-guarantees/services/getParametersModelRisk.ts`
99. `src/features/fixed-parameters-guarantees/services/getSelfLiberation.ts`
100. `src/features/fixed-parameters-guarantees/services/getTrackingGuarantees.ts`
101. `src/features/fixed-parameters-guarantees/services/getTypeCondition.ts`
102. `src/features/fixed-parameters-guarantees/services/newFixedParams.ts`
103. `src/features/fixed-parameters-guarantees/services/postGenerateReport.ts`
104. `src/features/fixed-parameters-guarantees/types/Options.d.ts`
105. `src/features/fixed-parameters-guarantees/types/ResponserServiceOptions.d.ts`
106. `src/features/fixed-parameters-guarantees/types/addaptDataParameter.d.ts`
107. `src/features/fixed-parameters-guarantees/types/countriesOptions.d.ts`
108. `src/features/fixed-parameters-guarantees/types/dataAdditionalParameter.d.ts`
109. `src/features/fixed-parameters-guarantees/types/dataGenerateReport.d.ts`
110. `src/features/fixed-parameters-guarantees/types/excel.d.ts`
111. `src/features/fixed-parameters-guarantees/types/filtersTableState.d.ts`
112. `src/features/fixed-parameters-guarantees/types/getConditionsAdditionalFilter.d.ts`
113. `src/features/fixed-parameters-guarantees/types/getSelfLiberation.d.ts`
114. `src/features/fixed-parameters-guarantees/types/newParameterState.d.ts`
115. `src/features/fixed-parameters-guarantees/types/postNewFixedParamsService.d.ts`
116. `src/features/fixed-parameters-guarantees/types/responseServiceTracking.d.ts`
117. `src/features/fixed-parameters-guarantees/types/transformDataConditions.d.ts`
118. `src/features/fixed-parameters-guarantees/types/transformTracking.d.ts`
119. `src/features/fixed-parameters-guarantees/types/useActionCalculateValuation.d.ts`
120. `src/features/fixed-parameters-guarantees/utils/generateCSV.ts`
121. `src/features/fixed-parameters-guarantees/utils/transformDataConditions.ts`
122. `src/features/fixed-parameters-guarantees/utils/transformDataCountries.ts`
123. `src/features/fixed-parameters-guarantees/utils/transformDataParameters.ts`
124. `src/features/fixed-parameters-guarantees/utils/transformOptions.ts`
125. `src/features/fixed-parameters-guarantees/utils/transformTrackingData.ts`
126. `src/features/fixed-parameters-guarantees/workers/validateSelectDataInactiveWorker.ts`
127. `src/features/guarantee-administration/components/AdministrationFilters.tsx`
128. `src/features/guarantee-administration/constants/urlKeys.ts`
129. `src/features/guarantee-administration/pages/GuaranteeAdministration.tsx`
130. `src/features/guarantee-administration/services/getAdminInvestorsGuarantees.ts`
131. `src/features/guarantee-administration/services/getAdminParticipantGuarantees.ts`
132. `src/features/guarantee-administration/services/getAllStatusAdmin.ts`
133. `src/features/guarantee-administration/services/getCountryAdministration.ts`
134. `src/features/guarantee-administration/services/getGuaranteeAccountOptions.ts`
135. `src/features/guarantee-administration/services/getGuaranteesAdminAccount.ts`
136. `src/features/guarantee-administration/services/getGuaranteesAdminSpecificAccount.ts`
137. `src/features/guarantee-administration/types/administration.d.ts`
138. `src/features/guarantee-administration/types/country.d.ts`
139. `src/features/guarantee-administration/types/state.d.ts`
140. `src/features/guarantee-administration/utils/columns.tsx`
141. `src/features/guarantee-liberation-download/components/FilterBank.tsx`
142. `src/features/guarantee-liberation-download/components/InformationBank.tsx`
143. `src/features/guarantee-liberation-download/components/LiberationDownload.tsx`
144. `src/features/guarantee-liberation-download/components/LiberationGuarantee.tsx`
145. `src/features/guarantee-liberation-download/components/ModalDownloadLiberationDetail.tsx`
146. `src/features/guarantee-liberation-download/components/ToolbarLiberationGuarantee.tsx`
147. `src/features/guarantee-liberation-download/constants/columnsLiberationGuarantee.ts`
148. `src/features/guarantee-liberation-download/constants/notificationsGenerateFile.ts`
149. `src/features/guarantee-liberation-download/hooks/useGetColumnsLiberation.tsx`
150. `src/features/guarantee-liberation-download/hooks/useGetConnectWebSocket.ts`
151. `src/features/guarantee-liberation-download/hooks/useGetDetailDownloadLiberation.ts`
152. `src/features/guarantee-liberation-download/hooks/useGetOptionsBanks.ts`
153. `src/features/guarantee-liberation-download/pages/GuaranteeLiberationDownload.tsx`
154. `src/features/guarantee-liberation-download/services/downloadDocuments.ts`
155. `src/features/guarantee-liberation-download/services/generateLiberationDownload.ts`
156. `src/features/guarantee-liberation-download/services/getDetailLiberationDownload.ts`
157. `src/features/guarantee-liberation-download/services/getListBanks.ts`
158. `src/features/guarantee-liberation-download/types/AlertsState.d.ts`
159. `src/features/guarantee-liberation-download/types/banks.d.ts`
160. `src/features/guarantee-liberation-download/types/depositBankAll.ts`
161. `src/features/guarantee-liberation-download/types/detailFileDownload.d.ts`
162. `src/features/guarantee-liberation-download/types/generationDownloadFile.d.ts`
163. `src/features/guarantee-liberation-download/types/notification.d.ts`
164. `src/features/guarantee-liberation-download/utils/buildFileName.ts`
165. `src/features/guarantee-liberation-download/utils/generateDownload.ts`
166. `src/features/limit-guarantees/components/DiversificationRowComponent.tsx`
167. `src/features/limit-guarantees/components/DiversificationRowsSection.tsx`
168. `src/features/limit-guarantees/components/FormBasicFields.tsx`
169. `src/features/limit-guarantees/components/LimitDetailsModal.tsx`
170. `src/features/limit-guarantees/components/RegisterLimitsModal.tsx`
171. `src/features/limit-guarantees/components/ToolbarActions.tsx`
172. `src/features/limit-guarantees/constants/columnsLimitDetails.tsx`
173. `src/features/limit-guarantees/constants/index.ts`
174. `src/features/limit-guarantees/hooks/useDiversificationRows.tsx`
175. `src/features/limit-guarantees/mocks/mocksTemporaly.ts`
176. `src/features/limit-guarantees/pages/LimitGuarantees.tsx`
177. `src/features/limit-guarantees/services/desactiveLimits.ts`
178. `src/features/limit-guarantees/services/getCountryOptions.ts`
179. `src/features/limit-guarantees/services/getLimitDetailsHistory.ts`
180. `src/features/limit-guarantees/services/getMarketOptions.ts`
181. `src/features/limit-guarantees/services/getStatusOptions.ts`
182. `src/features/limit-guarantees/services/getTypeOperationOptions.ts`
183. `src/features/limit-guarantees/services/postGuaranteeLimits.ts`
184. `src/features/limit-guarantees/types/LimitGuaranteeItem.ts`
185. `src/features/limit-guarantees/utils/columnsLimitGuarantees.tsx`
186. `src/features/limit-guarantees/utils/filtersConfig.ts`
187. `src/features/limit-guarantees/utils/getCsvFileName.ts`
188. `src/features/register-guaranties/components/AutoCompleteRegister.tsx`
189. `src/features/register-guaranties/components/ConfirmationNewGuarantee.tsx`
190. `src/features/register-guaranties/components/ProcessRegisterGuarantees.tsx`
191. `src/features/register-guaranties/components/RegisterValidations/AccountGuarantee.tsx`
192. `src/features/register-guaranties/components/RegisterValidations/AccountOrigin.tsx`
193. `src/features/register-guaranties/components/RegisterValidations/CustodioField.tsx`
194. `src/features/register-guaranties/components/RegisterValidations/DepositBank.tsx`
195. `src/features/register-guaranties/components/RegisterValidations/FinalBeneficiary.tsx`
196. `src/features/register-guaranties/components/RegisterValidations/Isin.tsx`
197. `src/features/register-guaranties/components/RegisterValidations/Mnemonic.tsx`
198. `src/features/register-guaranties/components/RegisterValidations/ParticipantField.tsx`
199. `src/features/register-guaranties/components/RegisterValidations/QuantityGuarantee.tsx`
200. `src/features/register-guaranties/components/RegisterValidations/SelfLiberation.tsx`
201. `src/features/register-guaranties/components/RegisterValidations/SimulationGuaranteeInteger.tsx`
202. `src/features/register-guaranties/components/RegisterValidations/TypeAccount.tsx`
203. `src/features/register-guaranties/components/RegisterValidations/TypeGuarantee.tsx`
204. `src/features/register-guaranties/components/SelectFondo.tsx`
205. `src/features/register-guaranties/enums/Countries.ts`
206. `src/features/register-guaranties/enums/TypeGuarantee.ts`
207. `src/features/register-guaranties/hooks/useOptionsMoney.ts`
208. `src/features/register-guaranties/hooks/useRegisterGuarantee.tsx`
209. `src/features/register-guaranties/hooks/useValidateIsin.ts`
210. `src/features/register-guaranties/hooks/useValidateRegister.tsx`
211. `src/features/register-guaranties/pages/RegisterGuarantees.tsx`
212. `src/features/register-guaranties/services/getAccountGuarantee.ts`
213. `src/features/register-guaranties/services/getBank.ts`
214. `src/features/register-guaranties/services/getCustodiesService.ts`
215. `src/features/register-guaranties/services/getDepositOrigin.ts`
216. `src/features/register-guaranties/services/getFinalBeneficiary.ts`
217. `src/features/register-guaranties/services/getFoundOptions.ts`
218. `src/features/register-guaranties/services/getIsinGuarantee.ts`
219. `src/features/register-guaranties/services/getMnemonicGuarantee.ts`
220. `src/features/register-guaranties/services/getMoneyGuaranteeService.ts`
221. `src/features/register-guaranties/services/getParticipantsService.ts`
222. `src/features/register-guaranties/services/getTypeAccountService.ts`
223. `src/features/register-guaranties/services/getTypeGuaranteeService.ts`
224. `src/features/register-guaranties/services/getValidateUser.ts`
225. `src/features/register-guaranties/services/simulationQuantityGuarantee.ts`
226. `src/features/register-guaranties/services/validateIsin.ts`
227. `src/features/register-guaranties/types/afpFound.d.ts`
228. `src/features/register-guaranties/types/autoCompleteStructure.d.ts`
229. `src/features/register-guaranties/types/common.d.ts`
230. `src/features/register-guaranties/types/country.d.ts`
231. `src/features/register-guaranties/types/getAccountGuarantee.d.ts`
232. `src/features/register-guaranties/types/getBank.d.ts`
233. `src/features/register-guaranties/types/getCustodio.d.ts`
234. `src/features/register-guaranties/types/getDepositOrigin.d.ts`
235. `src/features/register-guaranties/types/getFinalBeneficiary.d.ts`
236. `src/features/register-guaranties/types/getIsinGuarantee.d.ts`
237. `src/features/register-guaranties/types/getMnemonicGuarantee.d.ts`
238. `src/features/register-guaranties/types/getMoneyGuarantee.d.ts`
239. `src/features/register-guaranties/types/getParticipant.d.ts`
240. `src/features/register-guaranties/types/getValidateUser.d.ts`
241. `src/features/register-guaranties/types/options.d.ts`
242. `src/features/register-guaranties/types/simulationQuantityGuarantee.d.ts`
243. `src/features/register-guaranties/types/verificateIsin.d.ts`
244. `src/features/register-guaranties/utils/hasAllRequiredFields.ts`
245. `src/features/register-guaranties/utils/transformOptionsAutoComplete.ts`
246. `src/features/register-guaranties/utils/transformOptionsParticipant.ts`
247. `src/features/transfer-liberation-guarantees/components/FiltersForm.tsx`
248. `src/features/transfer-liberation-guarantees/components/GuarantiesList.tsx`
249. `src/features/transfer-liberation-guarantees/components/LiberationForm.tsx`
250. `src/features/transfer-liberation-guarantees/components/OperationTab.tsx`
251. `src/features/transfer-liberation-guarantees/components/TransferForm.tsx`
252. `src/features/transfer-liberation-guarantees/constants/endpoints.ts`
253. `src/features/transfer-liberation-guarantees/constants/filterRules.ts`
254. `src/features/transfer-liberation-guarantees/constants/filtersConfig.ts`
255. `src/features/transfer-liberation-guarantees/constants/guaranteeMessages.tsx`
256. `src/features/transfer-liberation-guarantees/hooks/useFilters.ts`
257. `src/features/transfer-liberation-guarantees/hooks/useGuaranteeActions.ts`
258. `src/features/transfer-liberation-guarantees/hooks/useGuaranteeList.ts`
259. `src/features/transfer-liberation-guarantees/hooks/useGuaranteeTableState.ts`
260. `src/features/transfer-liberation-guarantees/pages/TransferLiberationGuarantees.tsx`
261. `src/features/transfer-liberation-guarantees/services/GuaranteeToDeposit.ts`
262. `src/features/transfer-liberation-guarantees/services/filters.ts`
263. `src/features/transfer-liberation-guarantees/services/user.ts`
264. `src/features/transfer-liberation-guarantees/services/validateLiberation.ts`
265. `src/features/transfer-liberation-guarantees/types/guaranteeActions.d.ts`
266. `src/features/transfer-liberation-guarantees/types/guaranteeList.d.ts`
267. `src/features/transfer-liberation-guarantees/utils/getFilterDependents.ts`
268. `src/features/view-guarantees/components/ErrorExecution.tsx`
269. `src/features/view-guarantees/components/GuaranteeCards.tsx`
270. `src/features/view-guarantees/components/GuaranteeDetails.tsx`
271. `src/features/view-guarantees/components/IconEyesTracking.tsx`
272. `src/features/view-guarantees/components/TableValuationGuarantee.tsx`
273. `src/features/view-guarantees/components/ValuationGuarantees.tsx`
274. `src/features/view-guarantees/components/ViewGuaranteesFilters.tsx`
275. `src/features/view-guarantees/components/WarrantyTracking.tsx`
276. `src/features/view-guarantees/constants/columnsErrorExecuteGuarantee.ts`
277. `src/features/view-guarantees/constants/guaranteeApproval.ts`
278. `src/features/view-guarantees/constants/guaranteeApprovalEndpoints.ts`
279. `src/features/view-guarantees/constants/status.ts`
280. `src/features/view-guarantees/constants/urlKeys.ts`
281. `src/features/view-guarantees/hooks/useAssignmentDetail.tsx`
282. `src/features/view-guarantees/hooks/useAssignmentDetailTotals.tsx`
283. `src/features/view-guarantees/hooks/useDownloadGenerateCSV.ts`
284. `src/features/view-guarantees/hooks/useGuaranteeAlerts.ts`
285. `src/features/view-guarantees/hooks/useGuaranteeApprovalMenu.tsx`
286. `src/features/view-guarantees/hooks/useGuaranteeDetail.tsx`
287. `src/features/view-guarantees/hooks/useGuaranteeExpirationAlert.ts`
288. `src/features/view-guarantees/hooks/useGuaranteeQueryFilters.ts`
289. `src/features/view-guarantees/hooks/useGuaranteeTableData.tsx`
290. `src/features/view-guarantees/hooks/useGuaranteeVisualization.tsx`
291. `src/features/view-guarantees/hooks/useModalAction.ts`
292. `src/features/view-guarantees/hooks/useWarrantyTracking.tsx`
293. `src/features/view-guarantees/mocks/mocksFilters.ts`
294. `src/features/view-guarantees/mocks/mocksVisualization.ts`
295. `src/features/view-guarantees/mocks/tracking.tsx`
296. `src/features/view-guarantees/pages/ViewGuarantees.tsx`
297. `src/features/view-guarantees/services/calculateValuationGuarantee.ts`
298. `src/features/view-guarantees/services/confirmGuaranteeOperations.ts`
299. `src/features/view-guarantees/services/executeGuarantee.ts`
300. `src/features/view-guarantees/services/getAllStatus.ts`
301. `src/features/view-guarantees/services/getDownloadGuarantees.ts`
302. `src/features/view-guarantees/services/getGuaranteeAccount.ts`
303. `src/features/view-guarantees/services/getGuaranteeAccountOptions.ts`
304. `src/features/view-guarantees/services/getGuaranteeDetail.ts`
305. `src/features/view-guarantees/services/getGuaranteeDetailTransaction.ts`
306. `src/features/view-guarantees/services/getGuaranteeDetailTransactionTotals.ts`
307. `src/features/view-guarantees/services/getGuarantees.ts`
308. `src/features/view-guarantees/services/getGuaranteesCount.ts`
309. `src/features/view-guarantees/services/getGuaranteesReport.ts`
310. `src/features/view-guarantees/services/getNumGuarantees.ts`
311. `src/features/view-guarantees/services/getParticipantGuarantees.ts`
312. `src/features/view-guarantees/services/getTotalsGuarantee.ts`
313. `src/features/view-guarantees/services/getTypeAccount.ts`
314. `src/features/view-guarantees/services/guaranteeApproval.ts`
315. `src/features/view-guarantees/services/newRegisterGuarantees.ts`
316. `src/features/view-guarantees/services/postGuaranteeConstitution.ts`
317. `src/features/view-guarantees/types/bodyCalculateValuationGuarantee.d.ts`
318. `src/features/view-guarantees/types/colors.d.ts`
319. `src/features/view-guarantees/types/executeGuarantees.d.ts`
320. `src/features/view-guarantees/types/getParticipants.d.ts`
321. `src/features/view-guarantees/types/getReports.d.ts`
322. `src/features/view-guarantees/types/guaranteDetail.d.ts`
323. `src/features/view-guarantees/types/modalActions.d.ts`
324. `src/features/view-guarantees/types/newRegisterGuarantee.d.ts`
325. `src/features/view-guarantees/types/toastExtends.d.ts`
326. `src/features/view-guarantees/types/visualization.d.ts`
327. `src/features/view-guarantees/utils/ColumnsVisualization.tsx`
328. `src/features/view-guarantees/utils/generateCSV.ts`
329. `src/features/view-guarantees/utils/guaranteeApproval.ts`
330. `src/features/view-guarantees/utils/serviceResponseHandler.ts`
331. `src/features/view-guarantees/utils/webSocket.ts`
332. `src/features/view-operations-guarantee/components/BeneficiariesModalContent.tsx`
333. `src/features/view-operations-guarantee/components/ChangeTypeAccount.tsx`
334. `src/features/view-operations-guarantee/components/FiltersSearchTable.tsx`
335. `src/features/view-operations-guarantee/components/RenderOptionAutoComplete.tsx`
336. `src/features/view-operations-guarantee/components/RequirementCalculation.tsx`
337. `src/features/view-operations-guarantee/components/TableViewOperationGuarantee.tsx`
338. `src/features/view-operations-guarantee/components/ToolbarGuaranteeOperation.tsx`
339. `src/features/view-operations-guarantee/components/TotalCalculation.tsx`
340. `src/features/view-operations-guarantee/constants/FieldsTable.ts`
341. `src/features/view-operations-guarantee/constants/columnsBeneficiaries.ts`
342. `src/features/view-operations-guarantee/constants/columnsTableGuaranteeOperation.tsx`
343. `src/features/view-operations-guarantee/constants/commonStylesAutoComplete.ts`
344. `src/features/view-operations-guarantee/constants/links.ts`
345. `src/features/view-operations-guarantee/enum/states.ts`
346. `src/features/view-operations-guarantee/enum/typeAccounts.ts`
347. `src/features/view-operations-guarantee/hooks/useCommonParamsFilters.ts`
348. `src/features/view-operations-guarantee/hooks/useGetCustodianOptions.ts`
349. `src/features/view-operations-guarantee/hooks/useGetDataTable.ts`
350. `src/features/view-operations-guarantee/hooks/useGetFolio.ts`
351. `src/features/view-operations-guarantee/hooks/useGetGuaranteeAccounts.ts`
352. `src/features/view-operations-guarantee/hooks/useGetOptionsIsin.ts`
353. `src/features/view-operations-guarantee/hooks/useGetOptionsMnemonic.ts`
354. `src/features/view-operations-guarantee/hooks/useGetOptionsState.ts`
355. `src/features/view-operations-guarantee/hooks/useGetOptionsTypeAccount.ts`
356. `src/features/view-operations-guarantee/hooks/useGetParticipantsOptions.ts`
357. `src/features/view-operations-guarantee/hooks/useGetoptionsBeneficiary.ts`
358. `src/features/view-operations-guarantee/hooks/useOnDownload.tsx`
359. `src/features/view-operations-guarantee/hooks/useOnUnfulfilled.ts`
360. `src/features/view-operations-guarantee/hooks/useRenderFiltersForUser.ts`
361. `src/features/view-operations-guarantee/hooks/useShowModalAlertTime.tsx`
362. `src/features/view-operations-guarantee/pages/ViewOperationsGuarantee.tsx`
363. `src/features/view-operations-guarantee/services/change-type-account/generateNewAccount.ts`
364. `src/features/view-operations-guarantee/services/change-type-account/saveAccount.ts`
365. `src/features/view-operations-guarantee/services/getAccountGuarantee.ts`
366. `src/features/view-operations-guarantee/services/getBeneficiaryService.ts`
367. `src/features/view-operations-guarantee/services/getCustodiesService.ts`
368. `src/features/view-operations-guarantee/services/getDataGuaranteeForParticipant.ts`
369. `src/features/view-operations-guarantee/services/getFilterStatus.ts`
370. `src/features/view-operations-guarantee/services/getFolioService.ts`
371. `src/features/view-operations-guarantee/services/getIsinService.ts`
372. `src/features/view-operations-guarantee/services/getMnemonicService.ts`
373. `src/features/view-operations-guarantee/services/getParticipantService.ts`
374. `src/features/view-operations-guarantee/services/getTypeAccounts.ts`
375. `src/features/view-operations-guarantee/services/postManualCalculate.tsx`
376. `src/features/view-operations-guarantee/services/resolveUnfulfilled.ts`
377. `src/features/view-operations-guarantee/types/common.d.ts`
378. `src/features/view-operations-guarantee/types/components/AlertState.d.ts`
379. `src/features/view-operations-guarantee/types/components/ChangeTypeAccount.d.ts`
380. `src/features/view-operations-guarantee/types/components/DispatchSetAlert.d.ts`
381. `src/features/view-operations-guarantee/types/components/FiltersSearchTable.d.ts`
382. `src/features/view-operations-guarantee/types/components/GuaranteeAccounts.d.ts`
383. `src/features/view-operations-guarantee/types/components/TableViewOperationGuarantee.d.ts`
384. `src/features/view-operations-guarantee/types/components/ToastState.d.ts`
385. `src/features/view-operations-guarantee/types/components/ViewOperationsGuarantee.d.ts`
386. `src/features/view-operations-guarantee/types/components/totalCalculation.d.ts`
387. `src/features/view-operations-guarantee/types/contants/ColumnsBeneficiaries.ts`
388. `src/features/view-operations-guarantee/types/contants/ColumnsTableGuaranteeOperation.d.ts`
389. `src/features/view-operations-guarantee/types/mocks/dataViewOperationGuarantee.d.ts`
390. `src/features/view-operations-guarantee/types/resolveUnfulfilled.d.ts`
391. `src/features/view-operations-guarantee/types/services/change-type-account/generateNewAccount.d.ts`
392. `src/features/view-operations-guarantee/types/services/change-type-account/saveAccount.d.ts`
393. `src/features/view-operations-guarantee/types/services/commonFilters.d.ts`
394. `src/features/view-operations-guarantee/types/services/getAccountsGuarantee.d.ts`
395. `src/features/view-operations-guarantee/types/services/getBeneficiaryService.d.ts`
396. `src/features/view-operations-guarantee/types/services/getCustodianFilters.d.ts`
397. `src/features/view-operations-guarantee/types/services/getFilterStatus.d.ts`
398. `src/features/view-operations-guarantee/types/services/getFolio.d.ts`
399. `src/features/view-operations-guarantee/types/services/getIsinFilter.d.ts`
400. `src/features/view-operations-guarantee/types/services/getMnemonicFilter.d.ts`
401. `src/features/view-operations-guarantee/types/services/getParticipantFilters.d.ts`
402. `src/features/view-operations-guarantee/utils/ColumnsErrorTable.tsx`
403. `src/features/view-operations-guarantee/utils/generateCSV.ts`
404. `src/main.tsx`
405. `src/shared/assets/icons/close-square.svg`
406. `src/shared/assets/icons/info-error.svg`
407. `src/shared/components/ContainerFieldRegister.tsx`
408. `src/shared/components/ErrorBoundary.tsx`
409. `src/shared/components/ErrorRegisterModal.tsx`
410. `src/shared/components/NumericInputField.tsx`
411. `src/shared/components/SuspenseWithSpinner.tsx`
412. `src/shared/constants/actionCodes.ts`
413. `src/shared/constants/endpoints.ts`
414. `src/shared/constants/enviroment.ts`
415. `src/shared/constants/processRegister.ts`
416. `src/shared/constants/storageKeys.ts`
417. `src/shared/constants/toast.ts`
418. `src/shared/constants/userType.ts`
419. `src/shared/hooks/useGenerateLogs.tsx`
420. `src/shared/hooks/useModalAction.ts`
421. `src/shared/hooks/useStateRegisterGuarantees.ts`
422. `src/shared/hooks/useTranslate.tsx`
423. `src/shared/ia-config/.copilotrc.json`
424. `src/shared/routes/index.ts`
425. `src/shared/types/AutoCompleteOption.d.ts`
426. `src/shared/types/GuaranteeAccount.d.ts`
427. `src/shared/types/ModalAlertProps.d.ts`
428. `src/shared/types/ToastState.d.ts`
429. `src/shared/types/TraficLightProps.d.ts`
430. `src/shared/types/autoCompleteStructure.d.ts`
431. `src/shared/types/commonService.d.ts`
432. `src/shared/types/declare.d.ts`
433. `src/shared/types/dispatchStateCommon.d.ts`
434. `src/shared/types/generate-logs.d.ts`
435. `src/shared/types/global.d.ts`
436. `src/shared/types/processRegister.d.ts`
437. `src/shared/types/storeGuarantee.d.ts`
438. `src/shared/types/toast.d.ts`
439. `src/shared/types/user-type.d.ts`
440. `src/shared/utils/capitalize.ts`
441. `src/shared/utils/encodeJson.ts`
442. `src/shared/utils/formatAmount.ts`
443. `src/shared/utils/formatNumber.ts`
444. `src/shared/utils/formatNumberWithThousandsSeparator.ts`
445. `src/shared/utils/formatToLocalDate.ts`
446. `src/shared/utils/formatterSpecificAccount.ts`
447. `src/shared/utils/fullNameToDisplay.ts`
448. `src/shared/utils/getCurrentDateTime.ts`
449. `src/shared/utils/getFromLocalStorage.ts`
450. `src/shared/utils/getHeaders.ts`
451. `src/shared/utils/isDevMode.ts`
452. `src/shared/utils/onKeyDownNumber.ts`
453. `src/shared/utils/transformAmountToPercentage.ts`
454. `src/shared/utils/transformOptionsAutoComplete.ts`
455. `src/vite-env.d.ts`
456. `tailwind.config.js`
457. `tsconfig.json`
458. `vite.config.ts`

## .dockerignore

```
/dist
/tmp
/out-tsc
/bazel-out
**/node_modules

/.idea
.editorconfig
.project
.classpath
.c9/
*.launch
.settings/
*.sublime-workspace

**/npm-debug.log
**/Dockerfile*
**/docker-compose*
**/.dockerignore
**/.git
**/.gitignore
**/README.md
**/LICENSE
**/.vscode
**/build.sh
```

## .env

```
# Local Microfrontends
# VITE_REMOTE_UTILITIES=http://localhost:5001/assets/remoteEntry.js
# VITE_REMOTE_PARENT=http://localhost:5000/assets/remoteEntry.js

# Dev Microfrontends
# VITE_REMOTE_UTILITIES=https://nubo.nubo-dev.com/utils/assets/remoteEntry.js
# VITE_REMOTE_PARENT=https://nubo.nubo-dev.com/assets/remoteEntry.js

# APIs
# VITE_DEV_USER_MANAGEMENT=https://apisix.nubo-dev.com/user-management-api/v1
# VITE_OPERATIONS_URL=https://apisix.nubo-dev.com/operations-api/v1
# VITE_MASTER_URL=https://apisix.nubo-dev.com/master-participant-api/v1
# VITE_GUARANTEES_SOCKETS_URL=https://apisix.nubo-dev.com/guarantees-tracking-api/v1/websocket
# VITE_WEBSOCKET_NOTIFICATIONS=https://apisix.nubo-dev.com/web-socket-server-api/v1/websocket

# Docker Deployment
VITE_REMOTE_UTILITIES=VITE_REMOTE_UTILITIES
VITE_REMOTE_PARENT=VITE_REMOTE_PARENT
VITE_DEV_USER_MANAGEMENT=VITE_DEV_USER_MANAGEMENT
VITE_OPERATIONS_URL=VITE_OPERATIONS_URL
VITE_MASTER_URL=VITE_MASTER_URL
VITE_GUARANTEES_SOCKETS_URL=VITE_GUARANTEES_SOCKETS_URL
VITE_WEBSOCKET_NOTIFICATIONS=VITE_WEBSOCKET_NOTIFICATIONS

```

## .github/workflows/continuos_integration.yml

```yaml
---
name: Continuos integracion

on:
  pull_request:
    types:
      - opened
      - closed
    branches:
      - development
      - test
      - preprod
      - production
      - main
  # pull_request_target:
  #   types:
  #     - closed
  #   branches:
  #     - development
  #     - 'release/**'
  #     - hotfix
  #     - preprod
  #     - production
  #     - main

jobs:
  continuos_integration:
    name: '[CI]'
    uses: nuamx/devops-resources-refactor/.github/workflows/CI-react-main_facade.yaml@fix/ARQPD-4684
    secrets: inherit
    with:
      node_version: 20
      registry_repository: garantias-front
      registry_project: nubo
      ubuntu_version: latest
      port_exposed: 80
      mui_usage: 'true'
      manifest_dev: kustomization.yaml
      manifest_qa: kustomization.yaml
      manifest_preprod: kustomization.yaml
      manifest_path_dev: overlays/development/apps/garantias-front
      manifest_path_qa: overlays/testing-qa/apps/garantias-front
      manifest_path_preprod: overlays/release/apps/garantias-front
      repository_xac: nuamx/nbo-png-infraestructure-flux

```

## .npmrc

```
registry=https://registry.npmjs.org/
@nuam:registry=https://npm.nuamexchange.com/

```

## .prettierrc

```
{
  "plugins": [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss"
  ],
  "importOrder": [
    "<THIRD_PARTY_MODULES>",
    "^remote.*$",
    "^@/app/(.*)$",
    "^@/features/(.*)$",
    "^@/shared/(.*)$",
    "^[./]"
  ],
  "importOrderSeparation": true,
  "semi": false,
  "singleQuote": true,
  "printWidth": 80,
  "trailingComma": "none"
}

```

## README.md

````markdown
# React + TypeScript + Vite

To use node 20
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname
    }
  }
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules
  }
})
```

````

## eslint.config.js

```javascript
import js from '@eslint/js'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      react: react
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
      'react/react-in-jsx-scope': 'off', // Desactiva la regla que requiere React en el scope
      'no-console': ['warn', { allow: ['warn', 'error'] }] // Permite console.warn y console.error y avisa si se usa console.log
      // indent: ["error", 4], // Relgla de indentación a 4 espacios
      // "react/jsx-indent": ["error", 4], // Regla de indentación de JSX a 4 espacios
      // "react/jsx-indent-props": ["error", 4], // Regla de indentación de props de JSX a 4 espacios
    }
  }
)

```

## index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Garantias</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

```

## nginx/default.conf.template

```
server {
    listen       80;
    listen  [::]:80;
    server_name  localhost;

    #access_log  /var/log/nginx/host.access.log  main;

    # ====================================
    # COMPRESIÓN GZIP
    # ====================================
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/json
        application/javascript
        application/x-javascript
        application/xml
        application/xml+rss
        application/xhtml+xml
        application/x-font-ttf
        application/x-font-opentype
        application/vnd.ms-fontobject
        image/svg+xml;
    gzip_min_length 1024;
    gzip_disable "msie6";

    # ====================================
    # ARCHIVOS ESTÁTICOS CON HASH (assets/)
    # Cache agresivo (1 año)
    # ====================================
    location /assets/ {
        root /usr/share/nginx/html;
        add_header Cache-Control "public, max-age=31536000, immutable";

        # CORS (si es necesario para Module Federation)
        # add_header 'Access-Control-Allow-Origin' '*' always;
        add_header 'Access-Control-Allow-Methods' 'GET, OPTIONS' always;
        add_header 'Access-Control-Allow-Headers' 'Authorization, Content-Type' always;

        # Si el archivo no existe, retorna 404 (no redirigir a index.html)
        try_files $uri =404;        
    }

    # ====================================
    # index.html y remoteEntry.js
    # NO cachear (deben validarse siempre)
    # ====================================
    location = /index.html {
        root /usr/share/nginx/html;
        add_header Cache-Control "no-cache, no-store, must-revalidate";
        add_header Pragma "no-cache";
        add_header Expires "0";

        # CORS
        # add_header 'Access-Control-Allow-Origin' '*' always;
    }

    location = /assets/remoteEntry.js {
        root /usr/share/nginx/html;
        
        # Cache corto para remoteEntry (5 minutos)
        # Permite actualizaciones rápidas pero evita descargas constantes
        add_header Cache-Control "public, max-age=300, must-revalidate";
        
        # CORS (CRÍTICO para Module Federation)
        # add_header 'Access-Control-Allow-Origin' '*' always;
        add_header 'Access-Control-Allow-Methods' 'GET, OPTIONS' always;
        add_header 'Access-Control-Allow-Headers' 'Authorization, Content-Type' always;
    }

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
        try_files $uri /index.html;
    }

    error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

    # proxy the PHP scripts to Apache listening on 127.0.0.1:80
    #
    #location ~ \.php$ {
    #    proxy_pass   http://127.0.0.1;
    #}

    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
    #
    #location ~ \.php$ {
    #    root           html;
    #    fastcgi_pass   127.0.0.1:9000;
    #    fastcgi_index  index.php;
    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
    #    include        fastcgi_params;
    #}

    # deny access to .htaccess files, if Apache's document root
    # concurs with nginx's one
    #
    #location ~ /\.ht {
    #    deny  all;
    #}
}
```

## package.json

```json
{
  "name": "guarantees-management",
  "private": true,
  "version": "0.92.0-alpha.1",
  "type": "module",
  "scripts": {
    "dev": "vite --port 5007 --strictPort",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview --port 5007 --strictPort",
    "serve": "vite preview --port 5007 --strictPort",
    "watch": "npx vite build --watch",
    "start": "npm run build && npm run preview",
    "test": "vitest",
    "coverage": "vitest run --coverage",
    "prepare": "husky"
  },
  "dependencies": {
    "@hookform/resolvers": "^5.2.1",
    "@mui/material": "^6.4.4",
    "@mui/x-data-grid": "^7.28.2",
    "@nuam/common-fe-lib-components": "1.32.1",
    "@react-pdf/renderer": "^4.1.5",
    "@reduxjs/toolkit": "^2.8.2",
    "@stomp/stompjs": "^7.2.1",
    "axios": "^1.9.0",
    "dayjs": "^1.11.13",
    "file-saver": "^2.0.5",
    "papaparse": "^5.4.1",
    "patch-package": "^8.0.1",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.62.0",
    "react-i18next": "^15.4.1",
    "react-redux": "^9.2.0",
    "react-router-dom": "^6.27.0",
    "sockjs-client": "^1.6.1",
    "xlsx": "https://cdn.sheetjs.com/xlsx-0.20.3/xlsx-0.20.3.tgz",
    "yup": "^1.7.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.13.0",
    "@originjs/vite-plugin-federation": "^1.3.6",
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.1.0",
    "@trivago/prettier-plugin-sort-imports": "^5.2.2",
    "@types/file-saver": "^2.0.7",
    "@types/node": "^22.9.0",
    "@types/papaparse": "^5.3.15",
    "@types/react": "^18.3.11",
    "@types/react-dom": "^18.3.1",
    "@types/react-i18next": "^7.8.3",
    "@types/sockjs-client": "^1.5.4",
    "@vitejs/plugin-react": "^4.3.3",
    "@vitest/coverage-v8": "2.1.8",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.13.0",
    "eslint-plugin-react": "^7.37.4",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.13",
    "globals": "^15.11.0",
    "happy-dom": "^15.11.7",
    "husky": "^9.1.7",
    "jsdom": "^25.0.1",
    "patch-package": "^8.0.1",
    "postcss": "^8.4.45",
    "prettier": "^3.6.2",
    "prettier-plugin-tailwindcss": "^0.6.14",
    "tailwindcss": "^3.4.14",
    "typescript": "~5.6.2",
    "typescript-eslint": "^8.10.0",
    "usehooks-ts": "^3.1.1",
    "vite": "^5.4.9",
    "vite-plugin-compression": "^0.5.1",
    "vite-tsconfig-paths": "^5.1.4",
    "vitest": "^2.1.8"
  }
}

```

## postcss.config.js

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}

```

## public/vite.svg

```xml
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="31.88" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 257"><defs><linearGradient id="IconifyId1813088fe1fbc01fb466" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF"></stop><stop offset="100%" stop-color="#BD34FE"></stop></linearGradient><linearGradient id="IconifyId1813088fe1fbc01fb467" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83"></stop><stop offset="8.333%" stop-color="#FFDD35"></stop><stop offset="100%" stop-color="#FFA800"></stop></linearGradient></defs><path fill="url(#IconifyId1813088fe1fbc01fb466)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"></path><path fill="url(#IconifyId1813088fe1fbc01fb467)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"></path></svg>
```

## src/App.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html,
body,
#root {
  height: 100%;
  margin: 0;
  padding: 0;
}

.design {
  backdrop-filter: blur(16px) saturate(180%);
  background-color: rgb(240, 240, 240);
  border-radius: 12px;
  border: 1px solid rgb(211, 210, 210);
}

.icon-hover {
  filter: none;
}

.icon-hover:hover {
  filter: invert(18%) sepia(100%) saturate(7483%) hue-rotate(1deg)
    brightness(103%) contrast(104%);
}

.icon-red {
  filter: invert(18%) sepia(100%) saturate(7483%) hue-rotate(1deg)
    brightness(103%) contrast(104%);
}

.icon-gray {
  filter: grayscale(100%) brightness(50%);
}

.color-row {
  background-color: #e3e2e23b;
}
.color-select {
  background-color: #1f01ff2f !important;
}
.color-new {
  background-color: #00810931;
}
/* tr input[type="checkbox"] { pointer-events: none; }
input[type="checkbox"]#check-0 { pointer-events: auto; } */

```

## src/App.tsx

```tsx
import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import SuspenseWithSpinner from '@/shared/components/SuspenseWithSpinner'
import { ROUTES } from '@/shared/routes'

import './App.css'
import { ConciliationGuarantees } from './features/conciliation-guarantees/pages/ConciliationGuarantees'

const ViewGuarantees = lazy(
  () => import('./features/view-guarantees/pages/ViewGuarantees')
)
const GuaranteeAdministration = lazy(
  () =>
    import('./features/guarantee-administration/pages/GuaranteeAdministration')
)
const FixedParametersGuarantees = lazy(
  () =>
    import('./features/fixed-parameters-guarantees/pages/FixedParametersGuarantees')
)
const RegisterGuarantees = lazy(
  () => import('./features/register-guaranties/pages/RegisterGuarantees')
)
const ViewOperationsGuarantee = lazy(
  () =>
    import('./features/view-operations-guarantee/pages/ViewOperationsGuarantee')
)
const AccountManagement = lazy(
  () => import('./features/account-management/pages/AccountManagement')
)

const TransferLiberationGuarantees = lazy(
  () =>
    import('./features/transfer-liberation-guarantees/pages/TransferLiberationGuarantees')
)
const GuaranteeLiberationDownload = lazy(
  () =>
    import('./features/guarantee-liberation-download/pages/GuaranteeLiberationDownload')
)
const LimitGuarantees = lazy(
  () => import('./features/limit-guarantees/pages/LimitGuarantees')
)

const App = () => (
  <Routes>
    <Route
      path={ROUTES.HOME}
      element={
        <SuspenseWithSpinner>
          <ViewGuarantees />
        </SuspenseWithSpinner>
      }
    />
    <Route
      path={ROUTES.ADMINISTRATION_GUARANTEES}
      element={
        <SuspenseWithSpinner>
          <GuaranteeAdministration />
        </SuspenseWithSpinner>
      }
    />
    <Route
      path={ROUTES.FIXED_PARAMETERS_GUARANTEES}
      element={
        <SuspenseWithSpinner>
          <FixedParametersGuarantees />
        </SuspenseWithSpinner>
      }
    />
    <Route
      path={ROUTES.REGISTER_GUARANTEES}
      element={
        <SuspenseWithSpinner>
          <RegisterGuarantees />
        </SuspenseWithSpinner>
      }
    />
    <Route
      path={ROUTES.VIEW_OPERATIONS_GUARANTEES}
      element={
        <SuspenseWithSpinner>
          <ViewOperationsGuarantee />
        </SuspenseWithSpinner>
      }
    />
    <Route
      path={ROUTES.ACCOUNT_MANAGEMENT}
      element={
        <SuspenseWithSpinner>
          <AccountManagement />
        </SuspenseWithSpinner>
      }
    />
    <Route
      path={ROUTES.TRRANSFER_LIBERATION_GUARANTEES}
      element={
        <SuspenseWithSpinner>
          <TransferLiberationGuarantees />
        </SuspenseWithSpinner>
      }
    />
    <Route
      path={ROUTES.DOWNLOAD_LIBERATION_GUARANTEES}
      element={
        <SuspenseWithSpinner>
          <GuaranteeLiberationDownload />
        </SuspenseWithSpinner>
      }
    />
    <Route
      path={ROUTES.CONCILIATION_GUARANTEES}
      element={
        <SuspenseWithSpinner>
          <ConciliationGuarantees />
        </SuspenseWithSpinner>
      }
    />
    <Route
      path={ROUTES.LIMIT_GUARANTEES}
      element={
        <SuspenseWithSpinner>
          <LimitGuarantees />
        </SuspenseWithSpinner>
      }
    />
    <Route path={ROUTES.NOT_FOUND} element={<div>404 Not Found</div>} />
  </Routes>
)

export default App

```

## src/declares.d.ts

```typescript
/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'remoteUtilities/components-mf-utilities' {
  import {
    IButtonMui,
    IMuiSeLect,
    NewTableProps,
    ContentWrapperProps,
    IDataPicker,
    IAutoCompleteInput,
    AlertMuiProps,
    IDataGridBasic,
    ModalAlertProps,
    IModal,
    TrafficLightProps,
    ToastProps,
    CustomTabsProps,
    AlertStackProps
  } from './interfaces/declare'

  interface FilterRendererProps {
    name: string
    label: string
    type: 'select' | 'datepicker' | 'autocomplete'
    loadOptions?: any // eslint-disable-line @typescript-eslint/no-explicit-any
    fetchOptions?: any // eslint-disable-line @typescript-eslint/no-explicit-any
    [action: string]: any // eslint-disable-line @typescript-eslint/no-explicit-any
  }
  export interface FilterBarProps {
    config: FilterRendererProps[]
    width?: number
    className?: string
  }
  export interface FilterBarProps {
    config: any // eslint-disable-line @typescript-eslint/no-explicit-any
  }
  interface UploadFileProps {
    open: boolean
    onClose: (arg: boolean) => void
    getFile: (file: File) => void
  }

  export const FilterBar: React.ComponentType<FilterBarProps>
  export const ButtonMui: React.ComponentType<IButtonMui>
  export const MuiSelect: React.ComponentType<IMuiSeLect>
  export const DataPicker: React.ComponentType<IDataPicker>
  export const AutoCompleteInput: React.ComponentType<IAutoCompleteInput>
  export const Modal: React.ComponentType<IModal>
  export const DataGridBasic: React.ComponentType<IDataGridBasic>
  export const NewTable: React.ComponentType<NewTableProps>
  export const Spinner: React.ComponentType
  export const Dropdown: React.ComponentType<NewTableProps>
  export const ModalContent: React.ComponentType<ModalContentProps>
  export const TableList: React.ComponentType<TableListProps>
  export const TrafficLight: React.ComponentType<TrafficLightProps>
  export const ContentWrapper: React.ComponentType<ContentWrapperProps>
  export const ModalAlert: React.ComponentType<ModalAlertProps>
  export const GenerateLogs: (client_user: string, data) => void
  export const AlertMui: React.ComponentType<AlertMuiProps>
  export const AlertStack: React.ComponentType<AlertStackProps>
  export const Toast: React.ComponentType<ToastProps>
  export const UploadFile: React.ComponentType<UploadFileProps>
  export const CustomTabs: React.ComponentType<CustomTabsProps>
  export const useFilteredEndpoint: (str: string) => endpoint
  export const useUrlParams: () => {
    updateParam: (name: string, value: unknown) => void
    getParam: (name: string) => string | null
  }
  export const SelectNuam: React.ComponentType<{
    label?: string
    options: any[]
    value?: any
    onChange?: (value: any) => void
    fullWidth?: boolean
    formControlProps: {
      fullWidth?: boolean
      size?: 'small' | 'medium' | 'large'
      sx?: Record<string, any>
      focused?: boolean
      error?: boolean
    }
    size?: 'small' | 'medium' | 'large'
    labelKey?: string
    valueKey?: string
    multiple?: boolean
    disabled?: boolean
    sx?: Record<string, any>
    placeholder?: string
    showClearIndicator?: boolean
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
    MenuProps?: Partial<string, unknown>
    key?: string
    id?: string
    required?: boolean
    error?: boolean
    displayEmpty?: boolean
  }>
}

declare module 'remoteShell/mf-store' {
  export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch
  export const store
}
declare module 'remoteShell/mf-shell-authSlice' {
  export const onPressCalculator: (payload: boolean) => PayloadAction
}

declare module 'remoteShell/mf-axiosConfig' {
  import { AxiosInstance } from 'axios'

  export const httpGuarantees: AxiosInstance
  export const httpGuaranteesReports: AxiosInstance
  export const httpGuaranteesTracking: AxiosInstance
  export const httpAdminGuarantees: AxiosInstance
  export const httpSpecOperationsCompensations: AxiosInstance
  export const httpRiskModelsAdditional: AxiosInstance
  export const httpRiskModelsAdditionalApi: AxiosInstance
  export const httpRiskModelsReports: AxiosInstance
  export const httpGuaranteesRegister: AxiosInstance
  export const httpFilterParameters: AxiosInstance
  export const httpCalculateGuaranteeVolume: AxiosInstance
  export const httpGuaranteesForOperations: AxiosInstance
  export const httpGuaranteeAccountSave: AxiosInstance
  export const httpGaranteeAccount: AxiosInstance
  export const httpGaranteeParameters: AxiosInstance
  export const httpGaranteeExigency: AxiosInstance
  export const httpGuaranteeLiberation: AxiosInstance
  export const httpGuaranteeDeposit: AxiosInstance
  export const httpGuaranteeApproval: AxiosInstance
  export const httpGuaranteeConstitution: AxiosInstance
  export const httpExecuteGuarantee: AxiosInstance
  export const httpGuaranteeSendManualApi: AxiosInstance
  export const httpGuaranteeNonComplianceApi: AxiosInstance
  export const httpReporterDownloaderApi: AxiosInstance
  export const httpGuaranteeTransfer: AxiosInstance
  export const httpGuaranteeTransferCMD: AxiosInstance
  export const httpConciliationGuaranteesCmd: AxiosInstance
  export const httpGuaranteeLimits: AxiosInstance
  export const httpGuaranteeCmdLimits: AxiosInstance
}

declare module 'remoteShell/mf-registerGuarantees' {
  import {
    ActionCreatorWithPayload,
    ActionCreatorWithOptionalPayload
  } from '@reduxjs/toolkit'
  import { RootState } from 'remoteShell/mf-store'
  import { StatesProcessRegister } from '@/shared/types/processRegister'
  import {
    GuaranteeData,
    InitialStateRegister
  } from '@/shared/types/storeGuarantee'

  export const setProcessRegister: ActionCreatorWithOptionalPayload<{
    state: StatesProcessRegister
    messageError?: string
  }>

  export const setRegister: ActionCreatorWithPayload<Partial<GuaranteeData>>
  export const setClearRegister: ActionCreatorWithPayload

  export const setProcessError: ActionCreatorWithPayload<string>
  export const setErrorRegister: ActionCreatorWithPayload<
    Record<string, string>
  >
  export const setDeleteErrorRegister: ActionCreatorWithPayload<string>

  export type RootStateRegister = ReturnType<InitialStateRegister>
  export type AppDispatchRegister = typeof RootState.dispatch

  export const selectRegisterGuarantees: (
    state: RootStateRegister
  ) => InitialStateRegister
}

declare module 'remoteShell/mf-shell-useScreenActions' {
  import { ScreenActionsState } from '@/shared/types/screenActions'
  export const useScreenActions: () => ScreenActionsState
}

```

## src/features/account-management/components/FiltersTable.tsx

```tsx
import {
  AutoCompleteInput,
  MuiSelect
} from 'remoteUtilities/components-mf-utilities'

import RenderOptionAutoComplete from '@/features/account-management/components/RenderOptionAutoComplete'
import { SEARCH_KEYS } from '@/features/account-management/constants/searchKeys'
import { useFilters } from '@/features/account-management/hooks/useFilters'
import { FilterProps } from '@/features/account-management/types/filter'

export const FiltersTable = ({
  initialFilters,
  onFiltersChange
}: FilterProps) => {
  const {
    code,
    coverage,
    coverageOptions,
    destination,
    destinationOptions,
    market,
    marketOptions,
    name,
    status,
    statusOptions,
    fetchAccountByCode,
    fetchAccountByName,
    handleChangeCode,
    handleChangeCoverage,
    handleChangeDestination,
    handleChangeMarket,
    handleChangeName,
    handleChangeStatus,
    handleFilterChange
  } = useFilters({ onFiltersChange, initialFilters })

  return (
    <div className="mb-6 mt-4 flex w-full justify-between gap-4">
      <div className="w-full">
        <AutoCompleteInput
          label="Código"
          fetchOptions={fetchAccountByCode}
          onChange={(value: { id: number; label: string } | null) => {
            handleChangeCode(value)
            handleFilterChange(SEARCH_KEYS.ACCOUNT_CODE, value?.label)
          }}
          value={code}
          itemsPerPage={10}
          minSearchLength={2}
          debounceTime={300}
          key={`code-${code}`}
          renderOption={RenderOptionAutoComplete}
        />
      </div>
      <div className="w-full">
        <AutoCompleteInput
          label="Nombre"
          fetchOptions={fetchAccountByName}
          onChange={(value: { id: number; label: string } | null) => {
            handleChangeName(value)
            handleFilterChange(SEARCH_KEYS.ACCOUNT_NAME, value?.label)
          }}
          value={name}
          itemsPerPage={10}
          minSearchLength={2}
          debounceTime={300}
          key={`name-${name}`}
          renderOption={RenderOptionAutoComplete}
        />
      </div>
      <div className="w-full">
        <div className="w-full">
          <MuiSelect
            options={statusOptions}
            onChange={(value: number) => {
              handleChangeStatus(value)
              handleFilterChange(SEARCH_KEYS.STATUS, value)
            }}
            placeholder="Estado"
            value={status}
          />
        </div>
      </div>
      <div className="w-full">
        <MuiSelect
          options={destinationOptions}
          onChange={(value: number) => {
            handleChangeDestination(value)
            handleFilterChange(SEARCH_KEYS.DESTRUCTION_TYPE, value)
          }}
          placeholder="Destinación"
          value={destination}
        />
      </div>
      <div className="w-full">
        <MuiSelect
          options={coverageOptions}
          onChange={(value: number) => {
            handleChangeCoverage(value)
            handleFilterChange(SEARCH_KEYS.TYPE_COVERAGE, value)
          }}
          placeholder="Cobertura"
          value={coverage}
        />
      </div>
      <div className="w-full">
        <MuiSelect
          options={marketOptions}
          onChange={(value: string) => {
            handleChangeMarket(value)
            handleFilterChange(SEARCH_KEYS.MARKET, value)
          }}
          placeholder="Mercado"
          value={market}
        />
      </div>
    </div>
  )
}

```

## src/features/account-management/components/HeaderActions.tsx

```tsx
import { Button } from '@nuam/common-fe-lib-components'

type Props = {
  selectedRowsLength: number
  toggleCreateModal: () => void
  toggleDesactivateModal: () => void
}

const HeaderActions = ({
  selectedRowsLength,
  toggleCreateModal,
  toggleDesactivateModal
}: Props) => {
  const classNameExtends =
    selectedRowsLength !== 1 ? 'text-[#959595]' : 'text-link-color'
  return (
    <div className="flex items-center gap-13px">
      <Button
        className="font-Roboto gap-0 text-13px font-medium uppercase text-link-color outline-none"
        color="secondary"
        size="small"
        variant="text"
        onClick={toggleCreateModal}
      >
        REGISTRAR CUENTA
      </Button>
      <Button
        className={`font-Roboto gap-0 text-13px font-medium uppercase outline-none ${classNameExtends}`}
        color="secondary"
        disabled={selectedRowsLength !== 1}
        size="small"
        variant="text"
        onClick={toggleDesactivateModal}
      >
        DESACTIVAR CUENTA
      </Button>
    </div>
  )
}
export default HeaderActions

```

## src/features/account-management/components/RenderOptionAutoComplete.tsx

```tsx
import { DefaultComponents } from '@nuam/common-fe-lib-components'
import React from 'react'

const RenderOptionAutoComplete = (
  props: React.HTMLAttributes<HTMLLIElement>,
  option: { id: number; label: string }
) => (
  <DefaultComponents.Box
    component="li"
    {...props}
    key={option.id}
    sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
  >
    {option.label}
  </DefaultComponents.Box>
)

export default RenderOptionAutoComplete

```

## src/features/account-management/components/modal/DesactivateAccount.tsx

```tsx
import { useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'remoteShell/mf-store'
import {
  AlertMui,
  GenerateLogs,
  ModalAlert,
  Spinner
} from 'remoteUtilities/components-mf-utilities'

import { ALERT_INITIAL_STATE } from '@/features/account-management/constants/alert'
import { desactivateAccount } from '@/features/account-management/services/account-actions/desactivate'
import { AlertState } from '@/features/account-management/types/alert'

import { STORAGE_KEYS } from '@/shared/constants/storageKeys'
import { TOAST_INITIAL_STATE } from '@/shared/constants/toast'
import { ToastState } from '@/shared/types/toast'
import { getFromLocalStorage } from '@/shared/utils/getFromLocalStorage'
import isDevMode from '@/shared/utils/isDevMode'

type Props = {
  closeModal: () => void
  selectCheckTable: number[]
  onSetRefreshTable: () => void
}

const DesactivateAccountModal = ({
  closeModal,
  selectCheckTable,
  onSetRefreshTable
}: Props) => {
  const { infoUserNubo } = useSelector((state: RootState) => state.auth)
  const { participantId, id, status, country } = infoUserNubo
  const clientUser = getFromLocalStorage(STORAGE_KEYS.USERNAME)
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState<AlertState>(ALERT_INITIAL_STATE)
  const [toast, setToast] = useState<ToastState>(TOAST_INITIAL_STATE)

  const handleDeactivateAccount = async () => {
    try {
      setLoading(true)
      await desactivateAccount(selectCheckTable).then((response) => {
        if (response.accountCode) {
          onSetRefreshTable()
          setToast({
            show: true,
            message: `La cuenta fue desactivada exitosamente: ${response.accountCode}`
          })
          GenerateLogs(clientUser || '', {
            actionType: `Account deactivated`,
            actionDestination: 'Administrador de cuentas',
            participantId,
            countryId: country.id,
            userNuboId: id,
            statusId: status.id
          })
        }
      })
    } catch (error) {
      setAlert({
        show: true,
        title: 'Error',
        message: 'Error desactivando la cuenta',
        variant: 'error'
      })
      if (isDevMode()) {
        console.error('Error desactivando la cuenta:', error)
      }
    } finally {
      setLoading(false)
    }
  }

  const clearAlertState = () => {
    setAlert({ show: false, title: '', message: '', variant: '' })
  }

  const handleAcceptAlert = () => {
    if (alert.cancel) {
      handleDeactivateAccount()
      clearAlertState()
    } else {
      clearAlertState()
    }
  }

  const handleCancelAlert = () => {
    if (alert.cancel) {
      clearAlertState()
    }
  }

  const handleCloseAlert = () => {
    closeModal()
  }

  if (toast.show)
    return (
      <AlertMui
        open={toast?.show}
        message={toast?.message}
        onClose={handleCloseAlert}
      />
    )

  if (alert.show)
    return (
      <ModalAlert
        message={alert.message}
        orientation="horizontal"
        textSuccess="Aceptar"
        title={alert.title}
        variant={alert.variant}
        onClick={handleAcceptAlert}
        handleCancel={handleCancelAlert}
      />
    )

  if (loading) return <Spinner />
}

export default DesactivateAccountModal

```

## src/features/account-management/components/modal/NewAccount.tsx

```tsx
import {
  Modal,
  Typography,
  Button,
  TextField
} from '@nuam/common-fe-lib-components'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'remoteShell/mf-store'
import {
  AlertMui,
  GenerateLogs,
  ModalAlert,
  SelectNuam,
  Spinner
} from 'remoteUtilities/components-mf-utilities'

import { ERROR_MESSAGE_BY_DEFAULT } from '@/features/account-management/constants/errors'
import { MENU_PROPS } from '@/features/account-management/constants/menu'
import { MODAL_PROPS } from '@/features/account-management/constants/modal'
import { createAccount } from '@/features/account-management/services/account-actions/create'
import { getAccountStatus } from '@/features/account-management/services/account-actions/getAccountStatus'
import { getAccountCoverage } from '@/features/account-management/services/account-actions/getCoverage'
import { getAccountDestination } from '@/features/account-management/services/account-actions/getDestination'
import { getAccountMarket } from '@/features/account-management/services/account-actions/getMarket'
import { NewAccount } from '@/features/account-management/types/account'
import { AlertState } from '@/features/account-management/types/alert'
import { getErrorMessage } from '@/features/account-management/utils/getErrorMessage'

import CloseSquare from '@/shared/assets/icons/close-square.svg'
import { STORAGE_KEYS } from '@/shared/constants/storageKeys'
import { TOAST_INITIAL_STATE } from '@/shared/constants/toast'
import { ToastState } from '@/shared/types/toast'
import { getFromLocalStorage } from '@/shared/utils/getFromLocalStorage'
import isDevMode from '@/shared/utils/isDevMode'

interface Props {
  closeModal: () => void
  openModal: boolean
  onSetRefreshTable: () => void
}

const NewAccountModal = ({
  closeModal,
  openModal,
  onSetRefreshTable
}: Props) => {
  const [name, setName] = useState<string | null>(null)
  const [statuses] = useState<number>(100) //ACTIVA por default
  const [destination, setDestination] = useState<number | null>(null)
  const [coverage, setCoverage] = useState<number[]>([])
  const [market, setMarket] = useState<number | null>(null)
  const [statusOptions, setStatusOptions] = useState<
    { id: number; name: string }[]
  >([])
  const [destinationOptions, setDestinationOptions] = useState<
    { id: number; name: string }[]
  >([])
  const [marketOptions, setMarketOptions] = useState<
    { id: number; name: string }[]
  >([])
  const [coverageOptions, setCoverageOptions] = useState<
    { id: number; name: string }[]
  >([])
  const [loading, setLoading] = useState(false)
  const { infoUserNubo } = useSelector((state: RootState) => state.auth)
  const { participantId, id, country } = infoUserNubo
  const clientUser = getFromLocalStorage(STORAGE_KEYS.USERNAME)
  const [alert, setAlert] = useState<AlertState>()
  const [toast, setToast] = useState<ToastState>(TOAST_INITIAL_STATE)

  const validateForm = () => {
    if (destination !== 202) {
      if (name && statuses && destination && coverage.length > 0 && market) {
        return false
      }
    }
    if (destination === 202) {
      if (name && statuses && destination && market) {
        return false
      }
    }
    return true
  }

  useEffect(() => {
    const fetchStateOptions = async () => {
      try {
        const [statusData, destinationData, coverageData, marketData] =
          await Promise.all([
            getAccountStatus(),
            getAccountDestination(),
            getAccountCoverage(),
            getAccountMarket()
          ])

        const formattedStateOptions = statusData.map(
          (item: { id: number; description: string }) => ({
            id: item.id,
            name: item.description
          })
        )

        const formattedMarketOptions = marketData.map(
          (item: { id: number; description: string }) => ({
            id: item.id,
            name: item.description
          })
        )

        const formattedDestinationOptions = destinationData.map(
          (item: { id: number; description: string }) => ({
            id: item.id,
            name: item.description
          })
        )

        const formattedCoverageOptions = coverageData.map(
          (item: { id: number; description: string }) => ({
            id: item.id,
            name: item.description
          })
        )

        setStatusOptions(formattedStateOptions)
        setMarketOptions(formattedMarketOptions)
        setDestinationOptions(formattedDestinationOptions)
        setCoverageOptions(formattedCoverageOptions)
      } catch (error) {
        if (isDevMode()) {
          console.error('Error fetching state or account options:', error)
        }
      }
    }

    fetchStateOptions()
  }, [])

  const handleCreateAccount = async () => {
    try {
      setLoading(true)
      const data: NewAccount = {
        accountName: name || '',
        status: statuses || 0,
        destinationType: destination || 0,
        coverageTypes: coverage.map((id) => ({ typeId: id })),
        market: market || 0,
        requiereGuarantee: false
      }

      await createAccount(data).then(async (response) => {
        if (response.codeAccount) {
          onSetRefreshTable()

          setToast({
            show: true,
            message: `Nueva cuenta creada exitosamente: ${response.codeAccount}`
          })
          GenerateLogs(clientUser || '', {
            actionType: `New account created`,
            actionDestination: 'Administrador de cuentas',
            participantId,
            countryId: country.id,
            userNuboId: id,
            statusId: statuses
          })
        }
      })
    } catch (error) {
      let message = ERROR_MESSAGE_BY_DEFAULT
      if (axios.isAxiosError(error)) {
        message = getErrorMessage(error.response?.data?.errorCode)
      }
      setAlert({
        show: true,
        title: 'Error creando la cuenta',
        message: message,
        variant: 'error'
      })
    } finally {
      setLoading(false)
    }
  }

  const handleCoverageChange = (selected: { id: number; name: string }[]) => {
    setCoverage(selected.map((item) => item.id))
  }

  const onCloseModal = () => {
    closeModal()
  }

  const handleClearAlert = () => {
    setAlert({ show: false, title: '', message: '', variant: '' })
  }

  const handleConfirmation = () => {
    setAlert({
      show: true,
      title: '¿Estás seguro de guardar los datos registrados?',
      message: '',
      variant: 'warning',
      cancel: true,
      handleAcept: handleCreateAccount
    })
  }

  const handleAcceptAlert = () => {
    if (alert && alert.cancel) {
      alert.handleAcept?.()
      handleClearAlert()
    } else {
      handleClearAlert()
    }
  }

  const handleCancelAlert = () => {
    handleClearAlert()
  }

  const handleCloseToast = () => {
    onSetRefreshTable()
  }

  if (alert && alert.show)
    return (
      <ModalAlert
        title={alert.title}
        message={alert.message}
        textSuccess="Aceptar"
        onClick={handleAcceptAlert}
        handleCancel={handleCancelAlert}
        variant={alert.variant}
        orientation="horizontal"
      />
    )

  if (toast.show)
    return (
      <AlertMui
        open={toast?.show}
        message={toast?.message}
        handleClose={handleCloseToast}
      />
    )

  if (loading) return <Spinner />

  return (
    <Modal boxProps={{}} open={openModal} sx={MODAL_PROPS}>
      <div className="relative flex flex-col gap-4">
        <div className="absolute right-0 top-0">
          <img
            src={CloseSquare}
            alt="close modal"
            width="24"
            height="24"
            loading="lazy"
            className="cursor-pointer"
            onClick={onCloseModal}
          />
        </div>
        <Typography variant="h2" className="text-xl md:text-2xl">
          Registrar cuenta
        </Typography>
        <Typography variant="body1" className="text-sm md:text-base">
          Diligencia los datos para ingresarlos en la tabla.
        </Typography>
        <div className="grid grid-cols-2 gap-4 py-10">
          <TextField
            placeholder="Código"
            type="text"
            className="h-full w-full rounded-4px pl-1"
            size="small"
            sx={{
              '&> .MuiInputBase-root': {
                height: '100%'
              }
            }}
            disabled
          />
          <TextField
            placeholder="Nombre"
            onChange={(value: string) => setName(value)}
            value={name!}
            type="text"
            className="h-full w-full rounded-4px pl-1"
            size="small"
            sx={{
              '&> .MuiInputBase-root': {
                height: '100%'
              }
            }}
          />
          <SelectNuam
            options={statusOptions}
            value={statusOptions.find((item) => item.id === statuses) ?? null}
            valueKey="id"
            labelKey="name"
            label="Estado"
            size="small"
            formControlProps={{ fullWidth: true }}
            disabled
          />
          <SelectNuam
            options={destinationOptions}
            onChange={(item: { id: number; name: string } | null) =>
              setDestination(item?.id ?? null)
            }
            value={
              destinationOptions.find((item) => item.id === destination) ?? null
            }
            valueKey="id"
            labelKey="name"
            label="Destinación de cuenta"
            size="small"
            formControlProps={{ fullWidth: true }}
          />
          <SelectNuam
            options={coverageOptions}
            value={coverageOptions.filter((item) => coverage.includes(item.id))}
            onChange={handleCoverageChange}
            valueKey="id"
            labelKey="name"
            multiple
            label="Tipo de cobertura"
            size="small"
            formControlProps={{ fullWidth: true }}
            MenuProps={MENU_PROPS}
            disabled={destination === 202}
          />
          <SelectNuam
            options={marketOptions}
            onChange={(item: { id: number; name: string } | null) =>
              setMarket(item?.id ?? null)
            }
            value={marketOptions.find((item) => item.id === market) ?? null}
            valueKey="id"
            labelKey="name"
            label="Mercado"
            size="small"
            formControlProps={{ fullWidth: true }}
          />
        </div>
        <div className="flex justify-end gap-3">
          <Button
            size="large"
            variant="outlined"
            onClick={onCloseModal}
            className="text-15px w-60 font-medium uppercase text-link-color outline-none"
          >
            cancelar
          </Button>
          <Button
            size="large"
            variant="contained"
            color="primary"
            onClick={() => handleConfirmation()}
            className="text-15px w-60 font-medium uppercase outline-none"
            disabled={validateForm()}
          >
            guardar
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default NewAccountModal

```

## src/features/account-management/constants/alert.ts

```typescript
export const ALERT_INITIAL_STATE = {
  cancel: true,
  show: true,
  title: '¿Está seguro de desactivar esta cuenta?',
  variant: 'warning'
}

```

## src/features/account-management/constants/columns.tsx

```tsx
import { Row } from '@/features/account-management/types/account'

const flex = 1

export const columns = () => {
  return [
    {
      flex,
      minWidth: 30,
      field: 'accountCode',
      headerName: 'Código',
      renderCell: ({ row }: Row) => (
        <div className="flex h-full w-full items-center justify-start gap-1">
          <p className="w-full">{row?.accountCode ?? 'N/A'}</p>
        </div>
      )
    },
    {
      flex,
      minWidth: 150,
      field: 'accountName',
      headerName: 'Nombre',
      renderCell: ({ row }: Row) => (
        <div className="flex h-full w-full items-center justify-start gap-1">
          <p className="w-full">{row?.accountName ?? 'N/A'}</p>
        </div>
      )
    },
    {
      flex,
      minWidth: 30,
      field: 'status',
      headerName: 'Estado',
      renderCell: ({ row }: Row) => (
        <div className="flex h-full w-full items-center justify-start gap-1">
          <p className="w-full">{row?.status ?? 'N/A'}</p>
        </div>
      )
    },
    {
      flex,
      minWidth: 120,
      headerName: 'Destinación',
      field: 'destinationType',
      renderCell: ({ row }: Row) => (
        <div className="flex h-full w-full items-center justify-start gap-1">
          <p className="w-full">{row?.destinationType ?? 'N/A'}</p>
        </div>
      )
    },
    {
      flex,
      minWidth: 250,
      headerName: 'Cobertura',
      field: 'coverageTypes',
      renderCell: ({ row }: Row) => (
        <div className="flex h-full w-full items-center justify-start gap-1">
          <p className="w-full">
            {row?.coverageTypes
              ? row.coverageTypes.map((c) => c.type).join(', ')
              : 'N/A'}
          </p>
        </div>
      )
    },
    {
      flex,
      minWidth: 120,
      headerName: 'Mercado',
      field: 'market',
      renderCell: ({ row }: Row) => (
        <div className="flex h-full w-full items-center justify-start gap-1">
          <p className="w-full">{row?.market ?? 'N/A'}</p>
        </div>
      )
    }
  ]
}

```

## src/features/account-management/constants/errors.ts

```typescript
export const ERROR_MESSAGES: Record<string, string> = {
  UNAUTHORIZED: 'Por favor inicia sesión de nuevo.',
  ACCOUNT_COVERAGE_DUPLICATED:
    'Ya existe una cuenta activa con los mismos tipos de cobertura ingresados.',
  ACCOUNT_UNABILITE: 'Ya existe una cuenta con el mismo nombre',
  TRY_AGAIN:
    'Vuelve a intentarlo, si el error persiste comunícate a xxxxxx@nuamx.com o 55555555'
}

export const ERROR_MESSAGE_BY_DEFAULT = 'Ocurrió un error desconocido.'

```

## src/features/account-management/constants/filter.ts

```typescript
import { FilterState } from '@/features/account-management/types/filter'

export const initialFilters: FilterState = {
  accountCode: null,
  accountName: null,
  status: null,
  destinationType: null,
  typeCoverage: null,
  market: null
}

```

## src/features/account-management/constants/links.ts

```typescript
import { SUBROUTES } from '@/shared/routes'

export const links = [
  {
    name: 'Administración de Garantias',
    path: SUBROUTES.ADMINISTRATION_GUARANTEES
  },
  {
    name: 'Administración de cuentas',
    path: SUBROUTES.ACCOUNT_MANAGEMENT
  }
]

```

## src/features/account-management/constants/menu.ts

```typescript
export const ITEM_HEIGHT = 48
export const ITEM_PADDING_TOP = 8
export const MENU_PROPS = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
}

```

## src/features/account-management/constants/modal.ts

```typescript
export const MODAL_PROPS = {
  '&> .MuiBox-root': {
    borderRadius: '4px',
    padding: '24px',
    maxWidth: '1000px',
    width: '78%',
    border: 'none',
    outline: 'none'
  }
}

```

## src/features/account-management/constants/searchKeys.ts

```typescript
export const SEARCH_KEYS = {
  DESTRUCTION_TYPE: 'destinationType',
  MARKET: 'market',
  STATUS: 'status',
  TYPE_COVERAGE: 'typeCoverage',
  ACCOUNT_CODE: 'accountCode',
  ACCOUNT_NAME: 'accountName',
  PARTICIPANT: 'participante',
  GUARANTEE_ACCOUNT: 'cuentaGarantia',
  TYPE: 'type',
  BENEFICIARY: 'beneficiario',
  GUARANTEE_ID: 'guaranteeId',
  REGISTER_DATE: 'fechaRegistro',
  NUM_GUARANTEE: 'numGarantia',
  PARTICIPANT_ID: 'participantId'
}

export const urlToInternalMapping: Record<string, string> = {
  codigoCuenta: SEARCH_KEYS.ACCOUNT_CODE,
  nombreCuenta: SEARCH_KEYS.ACCOUNT_NAME,
  estado: SEARCH_KEYS.STATUS,
  destinacion: SEARCH_KEYS.DESTRUCTION_TYPE,
  covertura: SEARCH_KEYS.TYPE_COVERAGE,
  market: SEARCH_KEYS.MARKET
}

```

## src/features/account-management/hooks/useAccountManagement.ts

```typescript
import { useMemo, useState, useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import { RootState } from 'remoteShell/mf-store'

import { initialFilters } from '@/features/account-management/constants/filter'
import {
  SEARCH_KEYS,
  urlToInternalMapping
} from '@/features/account-management/constants/searchKeys'
import { FilterState } from '@/features/account-management/types/filter'

import { USER_TYPE } from '@/shared/constants/userType'

export const useAccountManagement = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const { participantId, userType } = useSelector(
    (state: RootState) =>
      state.auth.infoUserNubo?.[0] || state.auth.infoUserNubo
  )

  const [filters, setFilters] = useState<FilterState>(() => {
    const defaultFilters: FilterState = { ...initialFilters }

    searchParams.forEach((value, key) => {
      const internalKey = urlToInternalMapping[key] || key
      if (internalKey === SEARCH_KEYS.ACCOUNT_CODE) {
        defaultFilters.accountCode = value
      } else if (internalKey === SEARCH_KEYS.ACCOUNT_NAME) {
        defaultFilters.accountName = value
      } else if (internalKey === SEARCH_KEYS.STATUS) {
        defaultFilters.status = value
      } else if (internalKey === SEARCH_KEYS.DESTRUCTION_TYPE) {
        defaultFilters.destinationType = value
      } else if (internalKey === SEARCH_KEYS.TYPE_COVERAGE) {
        defaultFilters.typeCoverage = value
      } else if (internalKey === SEARCH_KEYS.MARKET) {
        defaultFilters.market = value
      }
    })

    return defaultFilters
  })

  const handleSetFilters = (newFilters: FilterState) => {
    setFilters(newFilters)
  }

  const createParamsFromFilters = useCallback((currentFilters: FilterState) => {
    const params: Record<string, string | undefined> = {}
    const currentAccountCode = currentFilters.accountCode
    const currentAccountName = currentFilters.accountName
    const currentStatus = currentFilters.status
    const currentDestinationType = currentFilters.destinationType
    const currentTypeCoverage = currentFilters.typeCoverage
    const currentMarket = currentFilters.market
    if (currentAccountCode) {
      params.accountCode = currentAccountCode?.toString()
    }
    if (currentAccountName) {
      params.accountName = currentAccountName?.toString()
    }
    if (currentStatus) {
      params.status = currentStatus?.toString()
    }
    if (currentDestinationType) {
      params.destinationType = currentDestinationType?.toString()
    }
    if (currentTypeCoverage) {
      params.typeCoverage = currentTypeCoverage?.toString()
    }
    if (currentMarket) {
      params.market = currentMarket?.toString()
    }
    return params
  }, [])

  const urlParamMapping = useMemo(
    () => ({
      accountCode: 'accountCode',
      accountName: 'accountName',
      status: 'status',
      destinationType: 'destinationType',
      typeCoverage: 'typeCoverage',
      market: 'market'
    }),
    []
  )

  const createUrlParams = useCallback(
    (filterParams: Record<string, string | undefined>) => {
      const urlParams = new URLSearchParams()
      Object.entries(filterParams).forEach(([key, value]) => {
        const mappedKey =
          urlParamMapping[key as keyof typeof urlParamMapping] || key
        if (value) {
          urlParams.set(mappedKey, value)
        }
      })
      return urlParams.toString()
    },
    [urlParamMapping]
  )

  const endpoint = useMemo(() => {
    const params = new URLSearchParams(window.location.search)

    if (userType === USER_TYPE.EXTERNAL && participantId) {
      params.set(SEARCH_KEYS.PARTICIPANT_ID, participantId)
    }
    return `/filter/accounts?${params.toString()}`
  }, [filters, createParamsFromFilters, participantId, userType])

  useEffect(() => {
    const params = createParamsFromFilters(filters)
    const urlParams = createUrlParams(params)
    setSearchParams(urlParams)
  }, [filters, setSearchParams, createUrlParams, createParamsFromFilters])

  return {
    endpoint,
    filters,
    handleSetFilters,
    setFilters
  }
}

```

## src/features/account-management/hooks/useFilters.ts

```typescript
import { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { SEARCH_KEYS } from '@/features/account-management/constants/searchKeys'
import { getAccountByCode } from '@/features/account-management/services/account-actions/getAccountByCode'
import { getAccountByName } from '@/features/account-management/services/account-actions/getAccountByName'
import { getAccountStatus } from '@/features/account-management/services/account-actions/getAccountStatus'
import { getAccountCoverage } from '@/features/account-management/services/account-actions/getCoverage'
import { getAccountDestination } from '@/features/account-management/services/account-actions/getDestination'
import { getAccountMarket } from '@/features/account-management/services/account-actions/getMarket'
import {
  FilterProps,
  Options,
  OptionType
} from '@/features/account-management/types/filter'

import isDevMode from '@/shared/utils/isDevMode'

export const useFilters = ({
  onFiltersChange,
  initialFilters
}: FilterProps) => {
  const [code, setCode] = useState<OptionType | null>(null)
  const [name, setName] = useState<OptionType | null>(null)

  const [status, setStatus] = useState<number | null>(null)
  const [destination, setDestination] = useState<number | null>(null)
  const [coverage, setCoverage] = useState<number | null>(null)
  const [market, setMarket] = useState<string>()
  const [statusOptions, setStatusOptions] = useState<Options>([])
  const [destinationOptions, setDestinationOptions] = useState<Options>([])
  const [marketOptions, setMarketOptions] = useState<Options>([])
  const [coverageOptions, setCoverageOptions] = useState<Options>([])
  const [searchParams, setSearchParams] = useSearchParams()

  const handleChangeCode = useCallback(
    (option: OptionType | null) => {
      setCode(option)
      if (option?.label) {
        searchParams.set(SEARCH_KEYS.ACCOUNT_CODE, option.label)
      } else {
        searchParams.delete(SEARCH_KEYS.ACCOUNT_CODE)
      }
      setSearchParams(searchParams)
    },
    [searchParams, setSearchParams]
  )

  const handleChangeName = useCallback(
    (option: OptionType | null) => {
      setName(option)
      if (option?.label) {
        searchParams.set(SEARCH_KEYS.ACCOUNT_NAME, option.label)
      } else {
        searchParams.delete(SEARCH_KEYS.ACCOUNT_NAME)
      }
      setSearchParams(searchParams)
    },
    [searchParams, setSearchParams]
  )

  const handleChangeStatus = useCallback(
    (value: number) => {
      setStatus(value)
      if (value) {
        searchParams.set(SEARCH_KEYS.STATUS, value.toString())
      } else {
        searchParams.delete(SEARCH_KEYS.STATUS)
      }
      setSearchParams(searchParams)
    },
    [searchParams, setSearchParams]
  )

  const handleChangeDestination = useCallback(
    (value: number) => {
      setDestination(value)
      if (value) {
        searchParams.set(SEARCH_KEYS.DESTRUCTION_TYPE, value.toString())
      } else {
        searchParams.delete(SEARCH_KEYS.DESTRUCTION_TYPE)
      }
      setSearchParams(searchParams)
    },
    [searchParams, setSearchParams]
  )

  const handleChangeCoverage = useCallback(
    (value: number) => {
      setCoverage(value)
      if (value) {
        searchParams.set(SEARCH_KEYS.TYPE_COVERAGE, value.toString())
      } else {
        searchParams.delete(SEARCH_KEYS.TYPE_COVERAGE)
      }
      setSearchParams(searchParams)
    },
    [searchParams, setSearchParams]
  )

  const handleChangeMarket = useCallback(
    (value: string) => {
      setMarket(value)
      if (value) {
        searchParams.set(SEARCH_KEYS.MARKET, value.toString())
      } else {
        searchParams.delete(SEARCH_KEYS.MARKET)
      }
      setSearchParams(searchParams)
    },
    [searchParams, setSearchParams]
  )

  const handleFilterChange = (key: string, value: unknown) => {
    onFiltersChange({
      ...initialFilters,
      [key]: value
    })
  }

  const fetchAccountByCode = useCallback(
    async (accountCode?: string, page: number = 0, size: number = 10) => {
      try {
        const response = await getAccountByCode({ page, size, accountCode })

        return {
          data: response.content.map((item: { accountCode: string }) => ({
            ...item,
            label: `${item.accountCode}`
          })),
          total: response.totalElements
        }
      } catch (error) {
        if (isDevMode()) {
          console.error('Error fetching options:', error)
        }
        return { data: [], total: 0 }
      }
    },
    []
  )

  const fetchAccountByName = useCallback(
    async (query?: string, page: number = 0, size: number = 10) => {
      try {
        const response = await getAccountByName({
          page,
          size,
          accountName: query
        })

        return {
          data: response.content.map((item: { accountName: string }) => ({
            ...item,
            label: `${item.accountName}`
          })),
          total: response.totalElements
        }
      } catch (error) {
        if (isDevMode()) {
          console.error('Error fetching options:', error)
        }
        return { data: [], total: 0 }
      }
    },
    []
  )

  useEffect(() => {
    const fetchStateOptions = async () => {
      try {
        const allOption = {
          id: 0,
          name: 'TODOS'
        }

        const [statusData, destinationData, coverageData, marketData] =
          await Promise.all([
            getAccountStatus(),
            getAccountDestination(),
            getAccountCoverage(),
            getAccountMarket()
          ])

        const formattedStateOptions = [
          allOption,
          ...statusData.map((item: { id: number; description: string }) => ({
            id: item.id,
            name: item.description
          }))
        ]

        const formattedMarketOptions = [
          allOption,
          ...marketData.map((item: { id: number; description: string }) => ({
            id: item.id,
            name: item.description
          }))
        ]

        const formattedDestinationOptions = [
          allOption,
          ...destinationData.map(
            (item: { id: number; description: string }) => ({
              id: item.id,
              name: item.description
            })
          )
        ]

        const formattedCoverageOptions = [
          allOption,
          ...coverageData.map((item: { id: number; description: string }) => ({
            id: item.id,
            name: item.description
          }))
        ]

        setStatusOptions(formattedStateOptions)
        setMarketOptions(formattedMarketOptions)
        setDestinationOptions(formattedDestinationOptions)
        setCoverageOptions(formattedCoverageOptions)
      } catch (error) {
        if (isDevMode()) {
          console.error('Error fetching state or account options:', error)
        }
      }
    }

    fetchStateOptions()
  }, [])

  return {
    code,
    coverage,
    coverageOptions,
    destination,
    destinationOptions,
    market,
    marketOptions,
    name,
    status,
    statusOptions,
    fetchAccountByCode,
    fetchAccountByName,
    handleChangeCode,
    handleChangeCoverage,
    handleChangeDestination,
    handleChangeMarket,
    handleChangeName,
    handleChangeStatus,
    handleFilterChange
  }
}

```

## src/features/account-management/pages/AccountManagement.tsx

```tsx
import { useState } from 'react'
import { useToggle } from 'usehooks-ts'

import {
  ContentWrapper,
  NewTable
} from 'remoteUtilities/components-mf-utilities'

import { FiltersTable } from '@/features/account-management/components/FiltersTable'
import HeaderActions from '@/features/account-management/components/HeaderActions'
import DesactivateAccountModal from '@/features/account-management/components/modal/DesactivateAccount'
import NewAccountModal from '@/features/account-management/components/modal/NewAccount'
import { columns } from '@/features/account-management/constants/columns'
import { links } from '@/features/account-management/constants/links'
import { useAccountManagement } from '@/features/account-management/hooks/useAccountManagement'

const AccountManagement = () => {
  const [isOpenModalNewAccount, toggleModalNewAccount] = useToggle(false)
  const [isOpenModalDesactivateAccount, innerToggleModalDesactiveAccount] =
    useToggle(false)
  const [selectCheckTable, setSelectCheckTable] = useState<number[]>([])
  const { endpoint, filters, handleSetFilters } = useAccountManagement()

  const toggleModalDesactiveAccount = () => {
    if (selectCheckTable.length === 0) return
    innerToggleModalDesactiveAccount()
  }

  const setThereAreSelected = (newSelection: number[]) => {
    setSelectCheckTable(newSelection)
  }

  const [refreshTable, setRefreshTable] = useState<boolean>(false)

  const onRefreshTable = () => {
    setRefreshTable((current) => !current)
  }

  return (
    <ContentWrapper title="Administración de cuentas" links={links}>
      <FiltersTable
        initialFilters={filters}
        onFiltersChange={handleSetFilters}
      />
      <NewTable
        columns={columns()}
        customToolbar={
          <HeaderActions
            selectedRowsLength={selectCheckTable.length}
            toggleCreateModal={toggleModalNewAccount}
            toggleDesactivateModal={toggleModalDesactiveAccount}
          />
        }
        axiosInstanceKey="httpGaranteeAccount"
        endpoint={endpoint}
        height="700px"
        setThereAreSelected={setThereAreSelected}
        refresh={refreshTable}
      />
      {isOpenModalNewAccount && (
        <NewAccountModal
          openModal={isOpenModalNewAccount}
          closeModal={toggleModalNewAccount}
          onSetRefreshTable={onRefreshTable}
        />
      )}
      {isOpenModalDesactivateAccount && (
        <DesactivateAccountModal
          closeModal={toggleModalDesactiveAccount}
          selectCheckTable={selectCheckTable}
          onSetRefreshTable={onRefreshTable}
        />
      )}
    </ContentWrapper>
  )
}

export default AccountManagement

```

## src/features/account-management/services/account-actions/create.ts

```typescript
import { httpGaranteeAccount } from 'remoteShell/mf-axiosConfig'

import { NewAccount } from '@/features/account-management/types/account'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'
import isDevMode from '@/shared/utils/isDevMode'

export const createAccount = async (data: NewAccount) => {
  try {
    const headers = await getHeaders()
    const response = await httpGaranteeAccount.post(
      ENDPOINTS.CREATE_ACCOUNT,
      data,
      { headers }
    )
    return response.data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error creando cuenta:', error)
    }
    throw error
  }
}

```

## src/features/account-management/services/account-actions/desactivate.ts

```typescript
import { httpGaranteeAccount } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'
import isDevMode from '@/shared/utils/isDevMode'

export const desactivateAccount = async (data: number[]) => {
  try {
    const headers = await getHeaders()
    const response = await httpGaranteeAccount.patch(
      ENDPOINTS.STATUS_ACCOUNT,
      { globalAccount: data[0], status: 101 },
      { headers }
    )
    return response.data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error desactivando cuenta:', error)
    }
    throw error
  }
}

```

## src/features/account-management/services/account-actions/getAccountByCode.ts

```typescript
import { httpGaranteeAccount } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'
import isDevMode from '@/shared/utils/isDevMode'

type Params = {
  accountCode?: string
  page: number
  size: number
}
export const getAccountByCode = async (params: Params) => {
  try {
    const headers = await getHeaders()
    const response = await httpGaranteeAccount.get(ENDPOINTS.FILTER_ACCOUNTS, {
      headers,
      params
    })
    return response.data
  } catch (error) {
    if (isDevMode()) {
      console.error(
        'Error fetching on service function getAccountByCode:',
        error
      )
    }
    throw error
  }
}

```

## src/features/account-management/services/account-actions/getAccountByName.ts

```typescript
import { httpGaranteeAccount } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'
import isDevMode from '@/shared/utils/isDevMode'

type Props = {
  page: number
  size: number
  accountName: string | undefined
}
export const getAccountByName = async (params: Props) => {
  try {
    const headers = await getHeaders()
    const response = await httpGaranteeAccount.get(ENDPOINTS.FILTER_ACCOUNTS, {
      headers,
      params
    })
    return response.data
  } catch (error) {
    if (isDevMode()) {
      console.error(
        'Error fetching on service function getAccountByName:',
        error
      )
    }
    throw error
  }
}

```

## src/features/account-management/services/account-actions/getAccountStatus.ts

```typescript
import { httpFilterParameters } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

export const getAccountStatus = async () => {
  const headers = await getHeaders()
  const response = await httpFilterParameters.get(
    ENDPOINTS.GUARANTEE_ACCOUNT_STATUS,
    { headers }
  )
  return response.data
}

```

## src/features/account-management/services/account-actions/getCoverage.ts

```typescript
import { httpFilterParameters } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

export const getAccountCoverage = async () => {
  const headers = await getHeaders()
  const response = await httpFilterParameters.get(
    ENDPOINTS.GUARANTEE_ACCOUNT_COVERAGE,
    {
      headers
    }
  )
  return response.data
}

```

## src/features/account-management/services/account-actions/getDestination.ts

```typescript
import { httpFilterParameters } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

export const getAccountDestination = async () => {
  const headers = await getHeaders()
  const response = await httpFilterParameters.get(
    ENDPOINTS.GUARANTEE_ACCOUNT_DESTINATION,
    { headers }
  )
  return response.data
}

```

## src/features/account-management/services/account-actions/getMarket.ts

```typescript
import { httpFilterParameters } from 'remoteShell/mf-axiosConfig'

import { Market } from '@/features/account-management/types/account'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

const marketsAllowed = ['RENTA VARIABLE', 'RENTA FIJA']

export const getAccountMarket = async (): Promise<Market[]> => {
  const headers = await getHeaders()
  const response = await httpFilterParameters.get(
    ENDPOINTS.GUARANTEE_ACCOUNT_MARKET,
    { headers }
  )
  const filteredData = response.data.filter(
    (item: { id: number; description: string }) =>
      marketsAllowed.includes(item.description)
  )
  return filteredData
}

```

## src/features/account-management/types/account.d.ts

```typescript
export interface GuaranteeAccount {
  id: number
  accountCode: string
  accountName: string
  status: string
  destinationType: string
  coverageTypes: Array<{
    typeId: number
    type: string
  }>
  market: string
  requiereGuarantee: boolean
}

export type Row = { row: GuaranteeAccount }

export interface NewAccount {
  accountName: string
  status: number
  destinationType: number
  coverageTypes: Array<{
    typeId: number
  }>
  market: number
  requiereGuarantee: boolean
}

export interface IAdminGuarantees {
  id: number
  country: Country
  participant: Participant
  investor: Investor
  guaranteeAccount: GuaranteeAccount
  specificAccount: string
  guaranteeValuation: GuaranteeValuation
  guaranteeVolume: number
  status: Status
  position: number
}

export interface Country {
  id: number
  name: Name
  code: Code
}

export enum Code {
  Cl = 'CL',
  Co = 'CO'
}

export enum Name {
  Chile = 'CHILE',
  Colombia = 'COLOMBIA'
}

export interface GuaranteeValuation {
  guaranteeInteger: number
}

export interface Investor {
  id: number
  firstName: string
  lastName: string
  documentNumber: string
  identificationType: null
  companyName: string
}

export interface Participant {
  id: number
  code: string
  documentNumber: string
  name: string
  shortName: string
}

export interface Status {
  id: number
  description: Description
  category: Category
  detail: Detail
}

export enum Category {
  Garantia = 'GARANTIA'
}

export enum Description {
  Registrada = 'REGISTRADA'
}

export enum Detail {
  GarantíaRegistrada = 'Garantía registrada'
}

export interface Market {
  id: number
  description: string
  code: string
  category: string
}

```

## src/features/account-management/types/alert.d.ts

```typescript
export type AlertState = {
  show: boolean
  title: string
  message?: string
  variant: string
  cancel?: boolean
  handleAcept?: () => void
}

```

## src/features/account-management/types/filter.d.ts

```typescript
export type FilterState = {
  accountCode: string | number | null
  accountName: string | number | null
  status: string | number | null
  destinationType: string | number | null
  typeCoverage: string | number | null
  market: string | number | null
}

export type FilterProps = {
  initialFilters: FilterState
  onFiltersChange: (newFilters: FilterState) => void
}

export type OptionType = {
  label?: string
  id: number
  name?: string
  country?: { name: string }
  recordDate?: string
  settlementDate?: string
  status?: number
} | null

export type Options = { id: number; name: string }[]

```

## src/features/account-management/utils/getErrorMessage.ts

```typescript
import {
  ERROR_MESSAGE_BY_DEFAULT,
  ERROR_MESSAGES
} from '@/features/account-management/constants/errors'

export const getErrorMessage = (key: string): string =>
  ERROR_MESSAGES[key] || ERROR_MESSAGE_BY_DEFAULT

```

## src/features/conciliation-guarantees/components/ConciliationHistoryModal.tsx

```tsx
import {
  Button,
  DefaultComponents,
  MaterialIcons,
  Modal
} from '@nuam/common-fe-lib-components'
import { useEffect, useMemo, useState } from 'react'

import { NewTable } from 'remoteUtilities/components-mf-utilities'

import isDevMode from '@/shared/utils/isDevMode'

import { findHistoryConciliation } from '../services/conciliatonApisCmd'
import {
  ConciliationHistoryModalProps,
  Depository,
  SummaryConciliationDepositList,
  SummaryConciliationBankList
} from '../types/conciliation'

// Tipo unión para los elementos del historial
type HistoryItem = SummaryConciliationDepositList | SummaryConciliationBankList

export const ConciliationHistoryModal = ({
  open,
  onClose,
  conciliationColumns,
  depositoryId,
  setToast
}: ConciliationHistoryModalProps) => {
  const { Box, Typography, CircularProgress } = DefaultComponents
  const [historyData, setHistoryData] = useState<HistoryItem[]>([])
  const [depositoryInfo, setDepositoryInfo] = useState<Depository>()
  const [conciliationDate, setConciliationDate] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)

  // Modifica las columnas para el historial
  const historyColumns = useMemo(() => {
    return conciliationColumns.map((col) => {
      if (col.field === 'time') {
        return {
          ...col,
          field: 'hour',
          headerName: 'Hora'
        }
      }
      return col
    })
  }, [conciliationColumns])

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const data = await findHistoryConciliation(depositoryId)

        // Guarda información del depósito y fecha
        if (data?.depository) {
          setDepositoryInfo(data.depository)
        }
        if (data?.localDate) {
          setConciliationDate(data.localDate)
        }

        // Determina cuál array usar
        if (
          data?.summaryConciliationDepositList &&
          data.summaryConciliationDepositList.length > 0
        ) {
          setHistoryData(data.summaryConciliationDepositList)
        } else if (
          data?.summaryConciliationBankList &&
          data.summaryConciliationBankList.length > 0
        ) {
          setHistoryData(data.summaryConciliationBankList)
        } else {
          setHistoryData([])
        }
      } catch (error) {
        if (isDevMode()) {
          console.error('Error al cargar datos:', error)
        }
      } finally {
        setLoading(false)
      }
    }

    if (open) {
      fetchData()
    }
  }, [depositoryId, open])

  const handleDownloadCSV = () => {
    if (!historyData || historyData.length === 0 || isDownloading) return

    setIsDownloading(true)

    let csvContent = '\uFEFF'
    const isDepositList = 'totalNumberNubo' in historyData[0]

    const headers = isDepositList
      ? [
          'ID',
          'Hora',
          'Estado',
          'Diferencia Total',
          'Total Número Nubo',
          'Total Número Depósito',
          'Total Nominal Nubo',
          'Total Nominal Depósito'
        ]
      : [
          'ID',
          'Hora',
          'Estado',
          'Diferencia Total',
          'Moneda',
          'Saldo Anterior Nubo',
          'Saldo Anterior Banco/Depósito',
          'Débito Nubo',
          'Débito Banco/Depósito',
          'Crédito Nubo',
          'Crédito Banco/Depósito',
          'Saldo Final Nubo',
          'Saldo Final Banco'
        ]

    csvContent += headers.join(',') + '\n'

    historyData.forEach((row) => {
      let rowData: (string | number)[]
      if (isDepositList) {
        const depositRow = row as SummaryConciliationDepositList
        rowData = [
          depositRow.guaranteeConciliationId || '',
          depositRow.hour || '',
          `"${depositRow.status?.description || ''}"`,
          depositRow.quantityDifferenceTotal ?? '',
          depositRow.totalNumberNubo ?? '',
          depositRow.totalNumberDepository ?? '',
          depositRow.totalNominalNubo ?? '',
          depositRow.totalNominalDepository ?? ''
        ]
      } else {
        const bankRow = row as SummaryConciliationBankList
        rowData = [
          bankRow.guaranteeConciliationId || '',
          bankRow.hour || '',
          `"${bankRow.status?.description || ''}"`,
          bankRow.quantityDifferenceTotal ?? '',
          `"${bankRow.currency?.code || ''}"`,
          bankRow.balancePreviousNubo ?? '',
          bankRow.balancePreviousBankDepository ?? '',
          bankRow.debitNuboQuantity ?? '',
          bankRow.debitBankDepositoryQuantity ?? '',
          bankRow.creditNuboQuantity ?? '',
          bankRow.creditBankDepositoryQuantity ?? '',
          bankRow.balanceFinalNubo ?? '',
          bankRow.balanceFinalBank ?? ''
        ]
      }
      csvContent += rowData.join(',') + '\n'
    })

    const [day, month, year] = conciliationDate.split('/')
    const shortYear = year.slice(-2)
    const fileName = `${shortYear}${month}${day}_ConciliaciónGarantías.csv`

    setToast?.({
      message: 'La descarga del reporte comenzará en breve',
      type: 'success'
    })

    setTimeout(() => {
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
      const link = document.createElement('a')
      const url = URL.createObjectURL(blob)

      link.setAttribute('href', url)
      link.setAttribute('download', fileName)
      link.style.visibility = 'hidden'

      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      setIsDownloading(false)
    }, 500)
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      boxProps={{
        sx: {
          width: '100%',
          maxWidth: '1200px'
        }
      }}
    >
      <Box>
        <Typography variant="h6" component="h2" mb={2}>
          Historial conciliación de garantías
        </Typography>
        <Box display="flex" justifyContent="space-between" mb={3} gap={2}>
          <Box display="flex" gap={1} width="100%">
            <Typography variant="subtitle1" fontWeight={700}>
              Fecha de conciliación:
            </Typography>
            <Typography variant="subtitle1">
              {loading ? '...' : conciliationDate || ''}
            </Typography>
          </Box>
          <Box display="flex" gap={1} width="100%">
            <Typography variant="subtitle1" fontWeight={700}>
              Depósito:
            </Typography>
            <Typography variant="subtitle1">
              {loading ? '...' : depositoryInfo?.description || ''}
            </Typography>
          </Box>
          <Box>
            <Button
              variant="text"
              size="medium"
              color="primary"
              startIcon={<MaterialIcons.FileDownloadOutlined />}
              disabled={
                loading ||
                !historyData ||
                historyData.length === 0 ||
                isDownloading
              }
              onClick={handleDownloadCSV}
            >
              DESCARGAR
            </Button>
          </Box>
        </Box>

        {loading ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight={300}
          >
            <CircularProgress />
          </Box>
        ) : (
          <NewTable
            columns={historyColumns}
            rows={historyData || []}
            endpoint={``}
            disableRowSelectionOnClick={false}
            checkboxSelection={false}
            noShowNoData={true}
            hideRightToolbar={true}
            provisionalId="guaranteeConciliationId"
            pagination={false}
            enableBackendPagination={false}
            hideFooter={true}
            axiosInstanceKey="httpConciliationGuaranteesCmd"
          />
        )}

        <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
          <Button
            variant="contained"
            size="large"
            onClick={onClose}
            disabled={loading}
          >
            Volver
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}

```

## src/features/conciliation-guarantees/components/ConciliationSection.tsx

```tsx
import { Button, DefaultComponents } from '@nuam/common-fe-lib-components'
import { useEffect, useState } from 'react'

import { NewTable } from 'remoteUtilities/components-mf-utilities'

import useGenerateLogs from '@/shared/hooks/useGenerateLogs'
import isDevMode from '@/shared/utils/isDevMode'

import {
  approveConciliation,
  findPreviousDifference
} from '../services/conciliatonApisCmd'
import { ColumnDefinition, ISummaryConciliation } from '../types/conciliation'
import { ConciliationHistoryModal } from './ConciliationHistoryModal'
import { ManageDifferencesModal } from './ManageDifferencesModal'

interface ConciliationSectionProps {
  conciliationColumns: ColumnDefinition[]
  differencesColumns: ColumnDefinition[]
  depositoryId: number
  conciliationRows?: ISummaryConciliation[]
  loading?: boolean
  setGuaranteeConciliationId?: (id: number) => void
  guaranteeType?: 'VALORES' | 'CASH'
  guaranteeConciliationId?: number
  setToast?: (
    toast: { message: string; type: 'success' | 'error' | 'info' } | null
  ) => void
  onRefreshConciliationTable?: () => void
  setModalAlert?: (modal: {
    open: boolean
    title: string
    message?: string
    variant?: 'success' | 'error' | 'warning'
  }) => void
  isValidateUploadDocument?: string | null
}

export const ConciliationSection = ({
  conciliationColumns,
  differencesColumns,
  depositoryId,
  conciliationRows,
  guaranteeType,
  setGuaranteeConciliationId,
  guaranteeConciliationId,
  setToast,
  onRefreshConciliationTable,
  setModalAlert,
  isValidateUploadDocument
}: ConciliationSectionProps) => {
  const { Box, Typography } = DefaultComponents
  const [openHistorico, setOpenHistorico] = useState(false)
  const [openManageDifferences, setOpenManageDifferences] = useState(false)
  const [selectedDifferences, setSelectedDifferences] = useState<any[]>([])
  const [dataDifference, setDataDifference] = useState<boolean>(false)

  const [refreshDifferencesTable, setRefreshDifferencesTable] = useState(false)
  const [isConciliating, setIsConciliating] = useState(false)
  const [conciliationResponse, setConciliationResponse] = useState<
    ISummaryConciliation[] | null
  >(null)
  const [differenceData, setDifferenceData] = useState<string[]>([])

  const handleOpenHistorico = () => setOpenHistorico(true)
  const handleCloseHistorico = () => setOpenHistorico(false)
  const { dispatchGenerateLog } = useGenerateLogs()
  const handleGoBack = () => {
    window.history.back()
  }

  const onRefreshDifferencesTable = () => {
    setRefreshDifferencesTable((current) => !current)
  }

  const isButtonEnabled =
    (conciliationRows && conciliationRows.length > 0) ||
    Boolean(isValidateUploadDocument)

  const handleOpenManageDifferences = async () => {
    if (!guaranteeConciliationId || selectedDifferences.length === 0) return
    try {
      const selectedIds = selectedDifferences.map((diff) =>
        typeof diff === 'number'
          ? diff
          : diff.id || diff.guaranteeConciliationId || diff
      )

      const data = await findPreviousDifference(
        guaranteeConciliationId,
        selectedIds
      )
      if (data.length === 0) {
        setModalAlert?.({
          open: true,
          title: 'Información',
          message: 'Las diferencias seleccionadas no pueden ser gestionadas.',
          variant: 'warning'
        })
        return
      }
      setDifferenceData(data)
      setOpenManageDifferences(true)
    } catch (error) {
      if (isDevMode()) {
        console.error('Error al cargar diferencias:', error)
      }
      setModalAlert?.({
        open: true,
        title: 'Error',
        message: 'No se pudieron cargar las diferencias seleccionadas.',
        variant: 'error'
      })
    }
  }

  const handleCloseManageDifferences = () => setOpenManageDifferences(false)

  const differencesEndpoint =
    guaranteeConciliationId && guaranteeConciliationId > 0
      ? guaranteeType === 'VALORES'
        ? `/conciliation-difference/summary-differences/deposit?guaranteeConciliationId=${guaranteeConciliationId}`
        : `/conciliation-difference/summary-differences/bank?guaranteeConciliationId=${guaranteeConciliationId}`
      : undefined

  const isManageDifferencesDisabled = selectedDifferences.length === 0

  const handleConciliation = async (
    isValidateUploadDocument?: string | null
  ) => {
    setIsConciliating(true)
    setDataDifference(false)
    const isManual = isValidateUploadDocument === 'manual'
    try {
      if (depositoryId) {
        const response = await approveConciliation(
          depositoryId,
          isValidateUploadDocument
        )
        const newId =
          response.summaryConciliationDeposit?.guaranteeConciliationId ||
          response.summaryConciliationBank?.guaranteeConciliationId
        if (newId && setGuaranteeConciliationId) {
          setGuaranteeConciliationId(newId)
        }

        if (
          Array.isArray(
            response.summaryConciliationDeposit ||
              response.summaryConciliationBank
          )
        ) {
          setConciliationResponse(
            response.summaryConciliationDeposit ||
              response.summaryConciliationBank
          )
        } else if (
          response.summaryConciliationDeposit ||
          response.summaryConciliationBank
        ) {
          setConciliationResponse([
            response.summaryConciliationDeposit ||
              response.summaryConciliationBank
          ])
        } else {
          setConciliationResponse([])
        }
      }
      dispatchGenerateLog({
        actionType: `Conciliación de garantías ${depositoryId} ${isManual ? 'manual' : 'automática'}`,
        actionDestination: 'conciliationGuarantees'
      })
      setToast?.({
        message: 'Conciliación realizada exitosamente',
        type: 'success'
      })
    } catch (error) {
      console.error('Error in conciliation:', error)
    } finally {
      setIsConciliating(false)
    }
  }

  const conciliationRowsWithProcess =
    isConciliating && conciliationRows?.length
      ? conciliationRows.map((row) => ({
          ...row,
          status: { ...row.status, detail: 'Conciliación en proceso' }
        }))
      : conciliationRows || []

  const firstRow = (conciliationResponse ?? conciliationRowsWithProcess)?.[0]
  const csvTime = firstRow?.time
    ? firstRow.time.split(' ')[0].replace(/\//g, '')
    : ''

  const csvFileName = csvTime
    ? `${csvTime}_DiferenciasConciliación.csv`
    : 'AAMMDD_DiferenciasConciliación.csv'

  useEffect(() => {
    if (isValidateUploadDocument) {
      setConciliationResponse([])
      setDataDifference(true)
      setSelectedDifferences([])
    }
  }, [isValidateUploadDocument, setGuaranteeConciliationId])

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6" gutterBottom>
        Resumen de la conciliación
      </Typography>
      <NewTable
        columns={conciliationColumns}
        rows={conciliationResponse ?? conciliationRowsWithProcess}
        endpoint={``}
        axiosInstanceKey="httpConciliationGuaranteesCmd"
        provisionalId="guaranteeConciliationId"
        disableRowSelectionOnClick={false}
        checkboxSelection={false}
        noShowNoData={true}
        enableBackendPagination={false}
        hideRightToolbar={true}
        customToolbar={
          <Button
            size="small"
            variant="text"
            onClick={handleOpenHistorico}
            fullWidth
            className="gap-0 px-[5px] py-1 text-[13px] uppercase"
          >
            VER HISTÓRICO
          </Button>
        }
        pagination={false}
        hideFooter={true}
      />

      <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
        Resumen de diferencias
      </Typography>
      <NewTable
        columns={differencesColumns}
        endpoint={dataDifference ? '' : differencesEndpoint || ''}
        rows={dataDifference ? [] : null}
        provisionalId="guaranteeDifferenceId"
        axiosInstanceKey="httpConciliationGuaranteesCmd"
        disableRowSelectionOnClick={false}
        checkboxSelection={true}
        refresh={refreshDifferencesTable}
        setThereAreSelected={setSelectedDifferences}
        showDownload={true}
        csvFileName={csvFileName}
        customToolbar={
          <Button
            size="small"
            variant="text"
            onClick={handleOpenManageDifferences}
            fullWidth
            disabled={isManageDifferencesDisabled}
            className="gap-0 px-[5px] py-1 text-[13px] uppercase"
          >
            GESTIONAR DIFERENCIAS
          </Button>
        }
        paginationMode={false}
        hideFooter={false}
      />

      <ConciliationHistoryModal
        open={openHistorico}
        onClose={handleCloseHistorico}
        conciliationColumns={conciliationColumns}
        depositoryId={depositoryId}
        setToast={setToast}
      />

      <ManageDifferencesModal
        open={openManageDifferences}
        onClose={handleCloseManageDifferences}
        guaranteeConciliationId={guaranteeConciliationId}
        selectedDifferences={selectedDifferences}
        setToast={setToast}
        onRefreshConciliationTable={onRefreshConciliationTable ?? (() => {})}
        onRefreshDifferencesTable={onRefreshDifferencesTable}
        setModalAlert={setModalAlert ?? (() => {})}
        differenceData={differenceData}
        setDataDifference={setDataDifference}
        setConciliationResponse={setConciliationResponse}
      />

      <div className="flex w-full justify-end gap-3 pb-6 pt-[90px]">
        <Button
          variant="text"
          color="primary"
          onClick={handleGoBack}
          size="large"
          className="w-60"
        >
          Volver
        </Button>
        <DefaultComponents.Tooltip
          title={
            !isButtonEnabled
              ? 'No hay insumo cargado para ejecutar la conciliación'
              : ''
          }
          placement="top"
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleConciliation(isValidateUploadDocument)}
            size="large"
            className="w-60"
            disabled={!isButtonEnabled}
          >
            CONCILIAR
          </Button>
        </DefaultComponents.Tooltip>
      </div>
    </Box>
  )
}

```

## src/features/conciliation-guarantees/components/CurrencySelector.tsx

```tsx
import {
  DefaultComponents,
  Select as NuamSelect
} from '@nuam/common-fe-lib-components'

import { CURRENCY_OPTIONS } from '../constants/options'

interface CurrencySelectorProps {
  currency: string
  onCurrencyChange: (value: string) => void
}

export const CurrencySelector = ({
  currency,
  onCurrencyChange
}: CurrencySelectorProps) => {
  const { Typography, Stack } = DefaultComponents

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography variant="h6" fontWeight={700}>
        Moneda
      </Typography>
      <NuamSelect
        label="Elige una moneda"
        options={CURRENCY_OPTIONS}
        value={currency}
        onChange={(option) => onCurrencyChange(option.value)}
        size="small"
        formControlProps={{ sx: { minWidth: 200 } }}
      />
    </Stack>
  )
}

```

## src/features/conciliation-guarantees/components/ManageDifferencesModal.tsx

```tsx
import { DefaultComponents } from '@nuam/common-fe-lib-components'
import { useState } from 'react'

import { ModalAlert } from 'remoteUtilities/components-mf-utilities'

import useGenerateLogs from '@/shared/hooks/useGenerateLogs'
import isDevMode from '@/shared/utils/isDevMode'

import { findApprovedDifference } from '../services/conciliatonApisCmd'

interface ManageDifferencesModalProps {
  open: boolean
  onClose: () => void
  guaranteeConciliationId?: number
  selectedDifferences: any[]
  setToast?: (
    toast: { message: string; type: 'success' | 'error' | 'info' } | null
  ) => void
  onRefreshConciliationTable: () => void
  onRefreshDifferencesTable: () => void
  setModalAlert: (modal: {
    open: boolean
    title: string
    message?: string
    variant?: 'success' | 'error' | 'warning'
  }) => void
  differenceData: string[]
  setDataDifference: (value: boolean) => void
  setConciliationResponse: (response: any[] | null) => void
}

export const ManageDifferencesModal = ({
  open,
  onClose,
  guaranteeConciliationId,
  selectedDifferences,
  setToast,
  setConciliationResponse,
  // onRefreshConciliationTable,
  onRefreshDifferencesTable,
  setModalAlert,
  differenceData,
  setDataDifference
}: ManageDifferencesModalProps) => {
  const { Box, Typography, CircularProgress } = DefaultComponents
  const [approving, setApproving] = useState(false)
  const { dispatchGenerateLog } = useGenerateLogs()
  const handleConfirm = async () => {
    if (!guaranteeConciliationId || selectedDifferences.length === 0) return

    try {
      setApproving(true)
      const selectedIds = selectedDifferences.map((diff) =>
        typeof diff === 'number'
          ? diff
          : diff.id || diff.guaranteeConciliationId || diff
      )

      const response = await findApprovedDifference(
        guaranteeConciliationId,
        selectedIds
      )
      if (setToast) {
        setToast({
          message: 'Las diferencias han sido gestionadas exitosamente',
          type: 'success'
        })
      }
      if (
        Array.isArray(
          response.summaryConciliationDeposit ||
            response.summaryConciliationBank
        )
      ) {
        setConciliationResponse(
          response.summaryConciliationDeposit ||
            response.summaryConciliationBank
        )
      } else if (
        response.summaryConciliationDeposit ||
        response.summaryConciliationBank
      ) {
        setConciliationResponse([
          response.summaryConciliationDeposit ||
            response.summaryConciliationBank
        ])
      } else {
        setConciliationResponse([])
      }
      dispatchGenerateLog({
        actionType: `Aprobación de diferencias - Conciliación de garantías ID: ${guaranteeConciliationId}`,
        actionDestination: 'conciliationGuarantees'
      })
    } catch (error) {
      if (isDevMode()) {
        console.error('Error al aprobar diferencias:', error)
      }
      setModalAlert({
        open: true,
        title: 'Ocurrió un error inesperado',
        message:
          'Vuelve a intentarlo, si el error persiste comunícate a xxxxxx@nuamx.com o 55555555 ',
        variant: 'error'
      })
    } finally {
      onClose()
      setApproving(false)
      setDataDifference(false)
      // onRefreshConciliationTable()
      onRefreshDifferencesTable()
    }
  }

  if (!open) return null

  const isDisabled = approving || selectedDifferences.length === 0

  return (
    <ModalAlert
      title="¿Estás seguro de gestionar las diferencias seleccionadas?"
      variant="warning"
      textSuccess="APROBAR"
      textCancel="CANCELAR"
      onClick={handleConfirm}
      handleCancel={onClose}
      showIconClose
      onIconClose={onClose}
      disabled={isDisabled || differenceData.length === 0}
      orientation="horizontal"
      width="600px"
      widthAccept="150px"
      widthCancel="150px"
    >
      {approving ? (
        <Box display="flex" justifyContent="center" py={3}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Box mb={2} p={2}>
            {differenceData.map((message, index) => (
              <Box
                key={index}
                display="flex"
                alignItems="center"
                gap={1}
                mb={1}
              >
                <Typography component="span" sx={{ fontSize: '24px' }}>
                  •
                </Typography>
                <Typography variant="body1">{message}</Typography>
              </Box>
            ))}
          </Box>

          <Typography variant="body1" align="center">
            Si deseas continuar, haz clic en <strong>aprobar</strong>, de lo
            contrario puedes cancelar y volver a la pantalla anterior.
          </Typography>
        </>
      )}
    </ModalAlert>
  )
}

```

## src/features/conciliation-guarantees/components/TabContent/BanrepTab.tsx

```tsx
import { DefaultComponents } from '@nuam/common-fe-lib-components'
import { useEffect, useMemo, useState } from 'react'

import { Spinner } from 'remoteUtilities/components-mf-utilities'

import {
  CONCILIATION_COLUMNS,
  DIFFERENCES_COLUMNS
} from '../../constants/columns'
import { TabId } from '../../constants/tabs'
import { useConciliationData } from '../../hooks/useConciliationData'
import { getConciliationSummary } from '../../services/conciliatonApisCmd'
import { ConciliationSection } from '../ConciliationSection'
import { UploadButtons } from '../UploadButtons'

const { Stack } = DefaultComponents

interface BanrepTabProps {
  onUploadDocument: () => void
  onUploadAutomatic: () => void
  guaranteeType?: 'VALORES' | 'CASH'
  setToast?: (
    toast: { message: string; type: 'success' | 'error' | 'info' } | null
  ) => void
  setModalAlert: (modal: {
    open: boolean
    title: string
    message?: string
    variant?: 'success' | 'error' | 'warning'
  }) => void
  isValidateUploadDocument?: string | null
  isLoading: boolean
}

export const BanrepTab = ({
  onUploadDocument,
  onUploadAutomatic,
  guaranteeType,
  setToast,
  setModalAlert,
  isValidateUploadDocument,
  isLoading
}: BanrepTabProps) => {
  const [guaranteeConciliationId, setGuaranteeConciliationId] =
    useState<number>()

  const fetchSummary = useMemo(() => {
    return () => getConciliationSummary(TabId.BANREP)
  }, [])

  const { data, isLoadingData, refreshData } = useConciliationData(
    fetchSummary,
    'summaryConciliationBank'
  )
  useEffect(() => {
    if (data && data[0]?.guaranteeConciliationId) {
      setGuaranteeConciliationId(data[0].guaranteeConciliationId)
    }
  }, [data])

  if (isLoading || isLoadingData) {
    return <Spinner />
  }

  return (
    <>
      <Stack direction="row" spacing={2} mt={2} height={36}>
        <UploadButtons
          withAutomatic={true}
          onUploadDocument={onUploadDocument}
          onUploadAutomatic={onUploadAutomatic}
        />
      </Stack>
      <ConciliationSection
        conciliationColumns={CONCILIATION_COLUMNS.BANK_BALANCE}
        differencesColumns={DIFFERENCES_COLUMNS.GUARANTEE_NO_DEPOSITOR}
        depositoryId={TabId.BANREP}
        guaranteeConciliationId={guaranteeConciliationId}
        setGuaranteeConciliationId={setGuaranteeConciliationId}
        isValidateUploadDocument={isValidateUploadDocument}
        conciliationRows={data}
        onRefreshConciliationTable={refreshData}
        loading={isLoading}
        setToast={setToast}
        setModalAlert={setModalAlert}
        guaranteeType={guaranteeType}
      />
    </>
  )
}

```

## src/features/conciliation-guarantees/components/TabContent/BiceTab.tsx

```tsx
import {
  Button,
  MaterialIcons,
  DefaultComponents
} from '@nuam/common-fe-lib-components'

import {
  CONCILIATION_COLUMNS,
  DIFFERENCES_COLUMNS
} from '../../constants/columns'
import { TabId } from '../../constants/tabs'
import { ConciliationSection } from '../ConciliationSection'
import { CurrencySelector } from '../CurrencySelector'

const { Stack } = DefaultComponents

interface BiceTabProps {
  currency: string
  onCurrencyChange: (value: string) => void
  onUploadDocument: () => void
}

export const BiceTab = ({
  currency,
  onCurrencyChange,
  onUploadDocument
}: BiceTabProps) => {
  return (
    <>
      <Stack direction="row" spacing={2} mt={2} height={36}>
        <CurrencySelector
          currency={currency}
          onCurrencyChange={onCurrencyChange}
        />
        <Button
          variant="contained"
          color="primary"
          size="small"
          startIcon={<MaterialIcons.FileUploadOutlined />}
          onClick={onUploadDocument}
        >
          Cargar documento
        </Button>
      </Stack>
      <ConciliationSection
        conciliationColumns={CONCILIATION_COLUMNS.BANK_BALANCE_WITH_CURRENCY}
        differencesColumns={DIFFERENCES_COLUMNS.BANK_DIFFERENCES}
        depositoryId={TabId.BICE}
      />
    </>
  )
}

```

## src/features/conciliation-guarantees/components/TabContent/CavaliTab.tsx

```tsx
import { DefaultComponents } from '@nuam/common-fe-lib-components'

import {
  CONCILIATION_COLUMNS,
  DIFFERENCES_COLUMNS
} from '../../constants/columns'
import { TabId } from '../../constants/tabs'
import { ConciliationSection } from '../ConciliationSection'
import { UploadButtons } from '../UploadButtons'

const { Stack } = DefaultComponents

interface CavaliTabProps {
  onUploadDocument: () => void
  onUploadAutomatic: () => void
}

export const CavaliTab = ({
  onUploadDocument,
  onUploadAutomatic
}: CavaliTabProps) => {
  return (
    <>
      <Stack direction="row" spacing={2} mt={2} height={36}>
        <UploadButtons
          withAutomatic={true}
          onUploadDocument={onUploadDocument}
          onUploadAutomatic={onUploadAutomatic}
        />
      </Stack>
      <ConciliationSection
        conciliationColumns={CONCILIATION_COLUMNS.GUARANTEE_DEPOSIT}
        differencesColumns={DIFFERENCES_COLUMNS.FULL_GUARANTEE}
        depositoryId={TabId.CAVALI}
      />
    </>
  )
}

```

## src/features/conciliation-guarantees/components/TabContent/DcvChileTab.tsx

```tsx
import { DefaultComponents } from '@nuam/common-fe-lib-components'

import {
  CONCILIATION_COLUMNS,
  DIFFERENCES_COLUMNS
} from '../../constants/columns'
import { TabId } from '../../constants/tabs'
import { ConciliationSection } from '../ConciliationSection'
import { UploadButtons } from '../UploadButtons'

const { Stack } = DefaultComponents

interface DcvChileTabProps {
  onUploadDocument: () => void
  onUploadAutomatic: () => void
}

export const DcvChileTab = ({
  onUploadDocument,
  onUploadAutomatic
}: DcvChileTabProps) => {
  return (
    <>
      <Stack direction="row" spacing={2} mt={2} height={36}>
        <UploadButtons
          withAutomatic={true}
          onUploadDocument={onUploadDocument}
          onUploadAutomatic={onUploadAutomatic}
          depositoryId={TabId.DCV_CHILE}
        />
      </Stack>
      <ConciliationSection
        conciliationColumns={CONCILIATION_COLUMNS.GUARANTEE_DEPOSIT}
        differencesColumns={DIFFERENCES_COLUMNS.FULL_GUARANTEE}
        depositoryId={TabId.DCV_CHILE}
      />
    </>
  )
}

```

## src/features/conciliation-guarantees/components/TabContent/DcvColombiaTab.tsx

```tsx
import { DefaultComponents } from '@nuam/common-fe-lib-components'
import { useEffect, useMemo, useState } from 'react'

import { Spinner } from 'remoteUtilities/components-mf-utilities'

import {
  CONCILIATION_COLUMNS,
  DIFFERENCES_COLUMNS
} from '../../constants/columns'
import { TabId } from '../../constants/tabs'
import { useConciliationData } from '../../hooks/useConciliationData'
import { getConciliationSummary } from '../../services/conciliatonApisCmd'
import { ConciliationSection } from '../ConciliationSection'
import { UploadButtons } from '../UploadButtons'

const { Stack } = DefaultComponents

interface DcvColombiaTabProps {
  onUploadDocument: () => void
  guaranteeType?: 'VALORES' | 'CASH'
  setToast?: (
    toast: { message: string; type: 'success' | 'error' | 'info' } | null
  ) => void
  isLoading: boolean
  setModalAlert: (modal: {
    open: boolean
    title: string
    message?: string
    variant?: 'success' | 'error' | 'warning'
  }) => void
  isValidateUploadDocument?: string | null
}

export const DcvColombiaTab = ({
  onUploadDocument,
  guaranteeType,
  setToast,
  setModalAlert,
  isValidateUploadDocument,
  isLoading
}: DcvColombiaTabProps) => {
  const [guaranteeConciliationId, setGuaranteeConciliationId] =
    useState<number>()

  const fetchSummary = useMemo(
    () => () => getConciliationSummary(TabId.DCV_COLOMBIA),
    []
  )

  const { data, isLoadingData, refreshData } = useConciliationData(
    fetchSummary,
    'summaryConciliationDeposit'
  )

  useEffect(() => {
    if (data && data[0]?.guaranteeConciliationId) {
      setGuaranteeConciliationId(data[0].guaranteeConciliationId)
    }
  }, [data])

  if (isLoading || isLoadingData) {
    return <Spinner />
  }

  return (
    <>
      <Stack direction="row" spacing={2} mt={2} height={36}>
        <UploadButtons
          withAutomatic={false}
          onUploadDocument={onUploadDocument}
        />
      </Stack>
      <ConciliationSection
        conciliationColumns={CONCILIATION_COLUMNS.GUARANTEE_DEPOSIT}
        differencesColumns={DIFFERENCES_COLUMNS.FULL_GUARANTEE}
        conciliationRows={data}
        depositoryId={TabId.DCV_COLOMBIA}
        guaranteeConciliationId={guaranteeConciliationId}
        setGuaranteeConciliationId={setGuaranteeConciliationId}
        isValidateUploadDocument={isValidateUploadDocument}
        onRefreshConciliationTable={refreshData}
        loading={isLoading}
        setToast={setToast}
        setModalAlert={setModalAlert}
        guaranteeType={guaranteeType}
      />
    </>
  )
}

```

## src/features/conciliation-guarantees/components/TabContent/DecevalTab.tsx

```tsx
import { DefaultComponents } from '@nuam/common-fe-lib-components'
import { useEffect, useMemo, useState } from 'react'

import { Spinner } from 'remoteUtilities/components-mf-utilities'

import {
  CONCILIATION_COLUMNS,
  DIFFERENCES_COLUMNS
} from '../../constants/columns'
import { TabId } from '../../constants/tabs'
import { useConciliationData } from '../../hooks/useConciliationData'
import { getConciliationSummary } from '../../services/conciliatonApisCmd'
import { ConciliationSection } from '../ConciliationSection'
import { UploadButtons } from '../UploadButtons'

const { Stack } = DefaultComponents

interface DecevalTabProps {
  onUploadDocument: () => void
  onUploadAutomatic: () => void
  guaranteeType?: 'VALORES' | 'CASH'
  setToast?: (
    toast: { message: string; type: 'success' | 'error' | 'info' } | null
  ) => void
  setModalAlert: (modal: {
    open: boolean
    title: string
    message?: string
    variant?: 'success' | 'error' | 'warning'
  }) => void
  isLoading: boolean
  isValidateUploadDocument?: string | null
}

export const DecevalTab = ({
  onUploadDocument,
  onUploadAutomatic,
  guaranteeType,
  setToast,
  setModalAlert,
  isValidateUploadDocument,
  isLoading
}: DecevalTabProps) => {
  const [guaranteeConciliationId, setGuaranteeConciliationId] =
    useState<number>()

  const fetchSummary = useMemo(
    () => () => getConciliationSummary(TabId.DECEVAL),
    []
  )

  const { data, isLoadingData, refreshData } = useConciliationData(
    fetchSummary,
    'summaryConciliationDeposit'
  )

  useEffect(() => {
    if (data && data[0]?.guaranteeConciliationId) {
      setGuaranteeConciliationId(data[0].guaranteeConciliationId)
    }
  }, [data])

  if (isLoading || isLoadingData) {
    return <Spinner />
  }

  return (
    <>
      <Stack direction="row" spacing={2} mt={2} height={36}>
        <UploadButtons
          withAutomatic={true}
          onUploadDocument={onUploadDocument}
          onUploadAutomatic={onUploadAutomatic}
        />
      </Stack>
      <ConciliationSection
        conciliationColumns={CONCILIATION_COLUMNS.GUARANTEE_DEPOSIT}
        differencesColumns={DIFFERENCES_COLUMNS.FULL_GUARANTEE}
        conciliationRows={data}
        depositoryId={TabId.DECEVAL}
        guaranteeConciliationId={guaranteeConciliationId}
        setGuaranteeConciliationId={setGuaranteeConciliationId}
        isValidateUploadDocument={isValidateUploadDocument}
        onRefreshConciliationTable={refreshData}
        loading={isLoading}
        setToast={setToast}
        setModalAlert={setModalAlert}
        guaranteeType={guaranteeType}
      />
    </>
  )
}

```

## src/features/conciliation-guarantees/components/TabContent/ScotiaTab.tsx

```tsx
import {
  Button,
  MaterialIcons,
  DefaultComponents
} from '@nuam/common-fe-lib-components'

import {
  CONCILIATION_COLUMNS,
  DIFFERENCES_COLUMNS
} from '../../constants/columns'
import { TabId } from '../../constants/tabs'
import { ConciliationSection } from '../ConciliationSection'
import { CurrencySelector } from '../CurrencySelector'

const { Stack } = DefaultComponents

interface ScotiaTabProps {
  currency: string
  onCurrencyChange: (value: string) => void
  onUploadDocument: () => void
  onUploadAutomatic: () => void
}

export const ScotiaTab = ({
  currency,
  onCurrencyChange,
  onUploadDocument,
  onUploadAutomatic
}: ScotiaTabProps) => {
  return (
    <>
      <Stack direction="row" spacing={2} mt={2} height={36}>
        <CurrencySelector
          currency={currency}
          onCurrencyChange={onCurrencyChange}
        />
        <Button
          variant="contained"
          color="primary"
          size="small"
          startIcon={<MaterialIcons.FileUploadOutlined />}
          onClick={onUploadDocument}
        >
          Cargar documento
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={onUploadAutomatic}
        >
          Cargar automática
        </Button>
      </Stack>
      <ConciliationSection
        conciliationColumns={CONCILIATION_COLUMNS.BANK_MOVEMENTS_WITH_CURRENCY}
        differencesColumns={DIFFERENCES_COLUMNS.BANK_DIFFERENCES_WITH_DATE}
        depositoryId={TabId.SCOTIA}
      />
    </>
  )
}

```

## src/features/conciliation-guarantees/components/UploadButtons.tsx

```tsx
import { Button, MaterialIcons } from '@nuam/common-fe-lib-components'

interface UploadButtonsProps {
  withAutomatic?: boolean
  onUploadDocument: () => void
  onUploadAutomatic?: (depositoryId?: number) => void
  depositoryId?: number
}

export const UploadButtons = ({
  withAutomatic = true,
  onUploadDocument,
  onUploadAutomatic,
  depositoryId
}: UploadButtonsProps) => {
  return (
    <>
      <Button
        variant="outlined"
        color="primary"
        size="small"
        startIcon={<MaterialIcons.FileUploadOutlined />}
        onClick={onUploadDocument}
      >
        Cargar documento
      </Button>
      {withAutomatic && onUploadAutomatic && (
        <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={() => onUploadAutomatic && onUploadAutomatic(depositoryId)}
        >
          Cargar automática
        </Button>
      )}
    </>
  )
}

```

## src/features/conciliation-guarantees/config/tabsConfig.ts

```typescript
import { BanrepTab } from '../components/TabContent/BanrepTab'
import { BiceTab } from '../components/TabContent/BiceTab'
import { CavaliTab } from '../components/TabContent/CavaliTab'
import { DcvChileTab } from '../components/TabContent/DcvChileTab'
import { DcvColombiaTab } from '../components/TabContent/DcvColombiaTab'
import { DecevalTab } from '../components/TabContent/DecevalTab'
import { ScotiaTab } from '../components/TabContent/ScotiaTab'
import { TabId } from '../constants/tabs'

interface TabConfig {
  id: number
  component: React.ComponentType<any>
  requiresCurrency?: boolean
  requiresAutomatic?: boolean
}

export const TABS_CONFIG: TabConfig[] = [
  {
    id: TabId.DCV_CHILE,
    component: DcvChileTab,
    requiresAutomatic: true
  },
  {
    id: TabId.DCV_COLOMBIA,
    component: DcvColombiaTab
  },
  {
    id: TabId.BICE,
    component: BiceTab,
    requiresCurrency: true
  },
  {
    id: TabId.DECEVAL,
    component: DecevalTab,
    requiresAutomatic: true
  },
  {
    id: TabId.BANREP,
    component: BanrepTab,
    requiresAutomatic: true
  },
  {
    id: TabId.CAVALI,
    component: CavaliTab,
    requiresAutomatic: true
  },
  {
    id: TabId.SCOTIA,
    component: ScotiaTab,
    requiresCurrency: true,
    requiresAutomatic: true
  }
]

```

## src/features/conciliation-guarantees/constants/columns.tsx

```tsx
import { formatNumberWithThousandsSeparator } from '@/shared/utils/formatNumberWithThousandsSeparator'

import {
  IResumeDifference,
  SummaryConciliationBankList,
  SummaryConciliationDeposit
} from '../types/conciliation'

export const CONCILIATION_COLUMNS = {
  GUARANTEE_DEPOSIT: [
    {
      field: 'time',
      headerName: 'Fecha y hora',
      width: 200
    },
    {
      field: 'statusDetail',
      headerName: 'Estado',
      width: 160,
      renderCell: ({ row }: { row: SummaryConciliationDeposit }) => (
        <div className="flex h-full w-full items-center justify-start gap-1">
          <p className="w-full">{row?.status?.detail ?? ''}</p>
        </div>
      )
    },
    {
      field: 'quantityDifferenceTotal',
      headerName: 'Diferencias',
      width: 100,
      renderCell: ({ row }: { row: SummaryConciliationDeposit }) => (
        <div className="flex h-full w-full items-center justify-end gap-1">
          {formatNumberWithThousandsSeparator(
            row?.quantityDifferenceTotal,
            false,
            false
          ) ?? '-'}
        </div>
      )
    },
    {
      field: 'totalNumberDepository',
      headerName: 'Total garantía deposito',
      width: 150,
      renderCell: ({ row }: { row: SummaryConciliationDeposit }) => (
        <div className="flex h-full w-full items-center justify-end gap-1">
          {formatNumberWithThousandsSeparator(
            row?.totalNumberDepository,
            false,
            false
          ) ?? '-'}
        </div>
      )
    },
    {
      field: 'totalNumberNubo',
      headerName: 'Total garantía nuBO',
      width: 150,
      renderCell: ({ row }: { row: SummaryConciliationDeposit }) => (
        <div className="flex h-full w-full items-center justify-end gap-1">
          {formatNumberWithThousandsSeparator(
            row?.totalNumberNubo,
            false,
            false
          ) ?? '-'}
        </div>
      )
    },
    {
      field: 'totalNominalDepository',
      headerName: 'Nominal deposito',
      width: 150,
      renderCell: ({ row }: { row: SummaryConciliationDeposit }) => (
        <div className="flex h-full w-full items-center justify-end gap-1">
          {formatNumberWithThousandsSeparator(
            row?.totalNominalDepository,
            false,
            false
          ) ?? '-'}
        </div>
      )
    },
    {
      field: 'totalNominalNubo',
      headerName: 'Nominal nuBO',
      width: 150,
      renderCell: ({ row }: { row: SummaryConciliationDeposit }) => (
        <div className="flex h-full w-full items-center justify-end gap-1">
          {formatNumberWithThousandsSeparator(
            row?.totalNominalNubo,
            false,
            false
          ) ?? '-'}
        </div>
      )
    },
    {
      field: 'manual',
      headerName: 'Tipo de carga',
      width: 150,
      renderCell: ({ row }: { row: SummaryConciliationDeposit }) => (
        <div className="flex h-full w-full items-center justify-start gap-1">
          <p className="w-full">{row?.manual ? 'Manual' : 'Automática'}</p>
        </div>
      )
    }
  ],
  BANK_BALANCE_WITH_CURRENCY: [
    { field: 'time', headerName: 'Fecha y hora', flex: 1 },
    {
      field: 'statusDetail',
      headerName: 'Estado',
      flex: 1,
      renderCell: ({ row }: { row: SummaryConciliationBankList }) => (
        <div className="flex h-full w-full items-center justify-start gap-1">
          <p className="w-full">{row?.status?.detail ?? ''}</p>
        </div>
      )
    },
    {
      field: 'quantityDifferenceTotal',
      headerName: 'Diferencias',
      flex: 1,
      renderCell: ({ row }: { row: SummaryConciliationBankList }) => (
        <div className="flex h-full w-full items-center justify-end gap-1">
          {formatNumberWithThousandsSeparator(
            row?.quantityDifferenceTotal,
            false,
            false
          ) ?? '-'}
        </div>
      )
    },
    {
      field: 'currencyCode',
      headerName: 'Moneda',
      flex: 1,
      renderCell: ({ row }: { row: SummaryConciliationBankList }) => (
        <div className="flex h-full w-full items-center justify-start gap-1">
          <p className="w-full">{row?.currency.code ?? ''}</p>
        </div>
      )
    },
    {
      field: 'balancePreviousBankDepository',
      headerName: 'Saldo inicial (Banco)',
      flex: 1,
      renderCell: ({ row }: { row: SummaryConciliationBankList }) => (
        <div className="flex h-full w-full items-center justify-end gap-1">
          {formatNumberWithThousandsSeparator(
            row?.balancePreviousBankDepository,
            false,
            true
          ) ?? '-'}
        </div>
      )
    },
    {
      field: 'balancePreviousNubo',
      headerName: 'Saldo inicial (nuBO)',
      flex: 1,
      renderCell: ({ row }: { row: SummaryConciliationBankList }) => (
        <div className="flex h-full w-full items-center justify-end gap-1">
          {formatNumberWithThousandsSeparator(
            row?.balancePreviousNubo,
            false,
            true
          ) ?? '-'}
        </div>
      )
    },
    {
      field: 'creditBankDepositoryQuantity',
      headerName: 'Ingresos (Banco)',
      flex: 1,
      renderCell: ({ row }: { row: SummaryConciliationBankList }) => (
        <div className="flex h-full w-full items-center justify-end gap-1">
          {formatNumberWithThousandsSeparator(
            row?.creditBankDepositoryQuantity,
            false,
            true
          ) ?? '-'}
        </div>
      )
    },
    {
      field: 'creditNuboQuantity',
      headerName: 'Ingresos (nuBO)',
      flex: 1,
      renderCell: ({ row }: { row: SummaryConciliationBankList }) => (
        <div className="flex h-full w-full items-center justify-end gap-1">
          {formatNumberWithThousandsSeparator(
            row?.creditNuboQuantity,
            false,
            true
          ) ?? '-'}
        </div>
      )
    },
    {
      field: 'debitBankDepositoryQuantity',
      headerName: 'Retiros (Banco)',
      flex: 1,
      renderCell: ({ row }: { row: SummaryConciliationBankList }) => (
        <div className="flex h-full w-full items-center justify-end gap-1">
          {formatNumberWithThousandsSeparator(
            row?.debitBankDepositoryQuantity,
            false,
            true
          ) ?? '-'}
        </div>
      )
    },
    {
      field: 'debitNuboQuantity',
      headerName: 'Retiros (nuBO)',
      flex: 1,
      renderCell: ({ row }: { row: SummaryConciliationBankList }) => (
        <div className="flex h-full w-full items-center justify-end gap-1">
          {formatNumberWithThousandsSeparator(
            row?.debitNuboQuantity,
            false,
            true
          ) ?? '-'}
        </div>
      )
    },
    {
      field: 'balanceFinalBank',
      headerName: 'Saldo final (Banco)',
      flex: 1,
      renderCell: ({ row }: { row: SummaryConciliationBankList }) => (
        <div className="flex h-full w-full items-center justify-end gap-1">
          {formatNumberWithThousandsSeparator(
            row?.balanceFinalBank,
            false,
            true
          ) ?? '-'}
        </div>
      )
    },
    {
      field: 'balanceFinalNubo',
      headerName: 'Saldo final (nuBO)',
      flex: 1,
      renderCell: ({ row }: { row: SummaryConciliationBankList }) => (
        <div className="flex h-full w-full items-center justify-end gap-1">
          {formatNumberWithThousandsSeparator(
            row?.balanceFinalNubo,
            false,
            true
          ) ?? '-'}
        </div>
      )
    }
  ],
  BANK_BALANCE: [
    { field: 'time', headerName: 'Fecha y hora', width: 200 },
    {
      field: 'statusDetail',
      headerName: 'Estado',
      width: 160,
      renderCell: ({ row }: { row: SummaryConciliationBankList }) => (
        <div className="flex h-full w-full items-center justify-start gap-1">
          <p className="w-full">{row?.status?.detail ?? ''}</p>
        </div>
      )
    },
    {
      field: 'quantityDifferenceTotal',
      headerName: 'Diferencias',
      width: 100,
      renderCell: ({ row }: { row: SummaryConciliationBankList }) => (
        <div className="flex h-full w-full items-center justify-end gap-1">
          {formatNumberWithThousandsSeparator(
            row?.quantityDifferenceTotal,
            false,
            false
          ) ?? '-'}
        </div>
      )
    },
    {
      field: 'balancePreviousBankDepository',
      headerName: 'Saldo inicial (Banco)',
      width: 150,
      renderCell: ({ row }: { row: SummaryConciliationBankList }) => (
        <div className="flex h-full w-full items-center justify-end gap-1">
          {formatNumberWithThousandsSeparator(
            row?.balancePreviousBankDepository,
            false,
            true
          ) ?? '-'}
        </div>
      )
    },
    {
      field: 'balancePreviousNubo',
      headerName: 'Saldo inicial (nuBO)',
      width: 150,
      renderCell: ({ row }: { row: SummaryConciliationBankList }) => (
        <div className="flex h-full w-full items-center justify-end gap-1">
          {formatNumberWithThousandsSeparator(
            row?.balancePreviousNubo,
            false,
            true
          ) ?? '-'}
        </div>
      )
    },
    {
      field: 'creditBankDepositoryQuantity',
      headerName: 'Ingresos (Banco)',
      width: 150,
      renderCell: ({ row }: { row: SummaryConciliationBankList }) => (
        <div className="flex h-full w-full items-center justify-end gap-1">
          {formatNumberWithThousandsSeparator(
            row?.creditBankDepositoryQuantity,
            false,
            true
          ) ?? '-'}
        </div>
      )
    },
    {
      field: 'creditNuboQuantity',
      headerName: 'Ingresos (nuBO)',
      width: 150,
      renderCell: ({ row }: { row: SummaryConciliationBankList }) => (
        <div className="flex h-full w-full items-center justify-end gap-1">
          {formatNumberWithThousandsSeparator(
            row?.creditNuboQuantity,
            false,
            true
          ) ?? '-'}
        </div>
      )
    },
    {
      field: 'debitBankDepositoryQuantity',
      headerName: 'Retiros (Banco)',
      width: 150,
      renderCell: ({ row }: { row: SummaryConciliationBankList }) => (
        <div className="flex h-full w-full items-center justify-end gap-1">
          {formatNumberWithThousandsSeparator(
            row?.debitBankDepositoryQuantity,
            false,
            true
          ) ?? '-'}
        </div>
      )
    },
    {
      field: 'debitNuboQuantity',
      headerName: 'Retiros (nuBO)',
      width: 150,
      renderCell: ({ row }: { row: SummaryConciliationBankList }) => (
        <div className="flex h-full w-full items-center justify-end gap-1">
          {formatNumberWithThousandsSeparator(
            row?.debitNuboQuantity,
            false,
            true
          ) ?? '-'}
        </div>
      )
    },
    {
      field: 'balanceFinalBank',
      headerName: 'Saldo final (Banco)',
      width: 150,
      renderCell: ({ row }: { row: SummaryConciliationBankList }) => (
        <div className="flex h-full w-full items-center justify-end gap-1">
          {formatNumberWithThousandsSeparator(
            row?.balanceFinalBank,
            false,
            true
          ) ?? '-'}
        </div>
      )
    },
    {
      field: 'balanceFinalNubo',
      headerName: 'Saldo final (nuBO)',
      width: 150,
      renderCell: ({ row }: { row: SummaryConciliationBankList }) => (
        <div className="flex h-full w-full items-center justify-end gap-1">
          {formatNumberWithThousandsSeparator(
            row?.balanceFinalNubo,
            false,
            true
          ) ?? '-'}
        </div>
      )
    },
    {
      field: 'manual',
      headerName: 'Tipo de carga',
      width: 150,
      renderCell: ({ row }: { row: SummaryConciliationBankList }) => (
        <div className="flex h-full w-full items-center justify-start gap-1">
          <p className="w-full">{row?.manual ? 'Manual' : 'Automática'}</p>
        </div>
      )
    }
  ],
  BANK_MOVEMENTS_WITH_CURRENCY: [
    { field: 'fechaHora', headerName: 'Fecha y hora', flex: 1 },
    { field: 'estado', headerName: 'Estado', flex: 1 },
    { field: 'diferencias', headerName: 'Diferencias', flex: 1 },
    { field: 'moneda', headerName: 'Moneda', flex: 1 },
    { field: 'ingresosBanco', headerName: 'Ingresos (Banco)', flex: 1 },
    { field: 'ingresosNuBO', headerName: 'Ingresos (nuBO)', flex: 1 },
    { field: 'retirosBanco', headerName: 'Retiros (Banco)', flex: 1 },
    { field: 'retirosNuBO', headerName: 'Retiros (nuBO)', flex: 1 },
    { field: 'saldoFinalBanco', headerName: 'Saldo final (Banco)', flex: 1 },
    { field: 'saldoFinalNuBO', headerName: 'Saldo final (nuBO)', flex: 1 }
  ]
}

export const DIFFERENCES_COLUMNS = {
  FULL_GUARANTEE: [
    { field: 'registrationDate', headerName: 'Fecha registro', width: 150 },
    {
      field: 'guaranteeNumberDeposit',
      headerName: 'No. Garantía (Depósito)',
      width: 150,
      renderCell: ({ row }: { row: IResumeDifference }) => (
        <div className="flex h-full w-full items-center justify-end gap-1">
          {row?.guaranteeNumberDeposit ?? '-'}
        </div>
      )
    },
    {
      field: 'guaranteeNumber',
      headerName: 'No. garantía (nuBO)',
      width: 180,
      renderCell: ({ row }: { row: IResumeDifference }) => (
        <div className="flex h-full w-full items-center justify-end gap-1">
          {row?.guaranteeNumber ?? '-'}
        </div>
      )
    },
    {
      field: 'participantName',
      headerName: 'Participante',
      width: 150,
      renderCell: ({ row }: { row: IResumeDifference }) => (
        <div className="flex h-full w-full items-center justify-start gap-1">
          <p className="w-full">{row?.participant?.name ?? '-'}</p>
        </div>
      )
    },
    {
      field: 'custodianName',
      headerName: 'Custodio',
      width: 200,
      renderCell: ({ row }: { row: IResumeDifference }) => (
        <div className="flex h-full w-full items-center justify-start gap-1">
          <p className="w-full">{row?.custodian?.name ?? '-'}</p>
        </div>
      )
    },
    {
      field: 'participantDirectDepositorName',
      headerName: 'Depositante',
      width: 150,
      renderCell: ({ row }: { row: IResumeDifference }) => (
        <div className="flex h-full w-full items-center justify-start gap-1">
          <p className="w-full">
            {row?.participantDirectDepositor?.name ?? '-'}
          </p>
        </div>
      )
    },
    {
      field: 'investorFullName',
      headerName: 'Beneficiario final',
      width: 200,
      renderCell: ({ row }: { row: IResumeDifference }) => (
        <div className="flex h-full w-full items-center justify-start gap-1">
          <p className="w-full">{row?.investor?.fullName ?? '-'}</p>
        </div>
      )
    },
    {
      field: 'quantity',
      headerName: 'Cantidad',
      width: 120,
      renderCell: ({ row }: { row: IResumeDifference }) => (
        <div className="flex h-full w-full items-center justify-end gap-1">
          {formatNumberWithThousandsSeparator(row?.quantity, false, false) ??
            '-'}
        </div>
      )
    },
    {
      field: 'differenceTypeDescription',
      headerName: 'Tipo de diferencia',
      width: 150,
      renderCell: ({ row }: { row: IResumeDifference }) => (
        <div className="flex h-full w-full items-center justify-start gap-1">
          <p className="w-full">{row?.differenceType?.detail ?? '-'}</p>
        </div>
      )
    },
    { field: 'detail', headerName: 'Detalle', width: 200 }
  ],
  GUARANTEE_NO_DEPOSITOR: [
    { field: 'registrationDate', headerName: 'Fecha registro', width: 120 },
    {
      field: 'movementTypeDetail',
      headerName: 'Tipo de movimiento',
      width: 150,
      renderCell: ({ row }: { row: any }) => (
        <div className="flex h-full w-full items-center justify-start gap-1">
          <p className="w-full">{row?.movementType?.detail ?? ''}</p>
        </div>
      )
    },
    {
      field: 'guaranteeNumber',
      headerName: 'No. garantía nuBO',
      width: 180,
      renderCell: ({ row }: { row: any }) => (
        <div className="flex h-full w-full items-center justify-end gap-1">
          {row?.guaranteeNumber ?? ''}
        </div>
      )
    },
    {
      field: 'participantCode',
      headerName: 'Participante',
      width: 150,
      renderCell: ({ row }: { row: any }) => (
        <div className="flex h-full w-full items-center justify-start gap-1">
          <p className="w-full">{row?.participant?.code ?? ''}</p>
        </div>
      )
    },
    {
      field: 'participantDirectDepositorName',
      headerName: 'Custodio',
      width: 200,
      renderCell: ({ row }: { row: any }) => (
        <div className="flex h-full w-full items-center justify-start gap-1">
          <p className="w-full">
            {row?.participantDirectDepositor?.name ?? ''}
          </p>
        </div>
      )
    },
    {
      field: 'investorFullName',
      headerName: 'Beneficiario final',
      width: 200,
      renderCell: ({ row }: { row: any }) => (
        <div className="flex h-full w-full items-center justify-start gap-1">
          <p className="w-full">{row?.investor?.fullName ?? ''}</p>
        </div>
      )
    },
    {
      field: 'quantity',
      headerName: 'Cantidad',
      width: 120,
      renderCell: ({ row }: { row: any }) => (
        <div className="flex h-full w-full items-center justify-end gap-1">
          {formatNumberWithThousandsSeparator(row?.quantity, false, false) ??
            '-'}
        </div>
      )
    },
    {
      field: 'differenceTypeDetail',
      headerName: 'Tipo de diferencia',
      width: 180,
      renderCell: ({ row }: { row: any }) => (
        <div className="flex h-full w-full items-center justify-start gap-1">
          <p className="w-full">{row?.differenceType?.detail ?? ''}</p>
        </div>
      )
    },
    { field: 'detail', headerName: 'Detalle', width: 200 }
  ],
  BANK_DIFFERENCES: [
    { field: 'fechaRegistro', headerName: 'Fecha registro', width: 150 },
    { field: 'tipoMovimiento', headerName: 'Tipo de movimiento', width: 150 },
    { field: 'moneda', headerName: 'Moneda', width: 100 },
    { field: 'valor', headerName: 'Valor', width: 150 },
    { field: 'tipoDiferencia', headerName: 'Tipo de diferencia', width: 180 },
    { field: 'detalle', headerName: 'Detalle', width: 200 }
  ],
  BANK_DIFFERENCES_WITH_DATE: [
    { field: 'fecha', headerName: 'Fecha', width: 150 },
    { field: 'tipoMovimiento', headerName: 'Tipo de movimiento', width: 150 },
    { field: 'moneda', headerName: 'Moneda', width: 100 },
    { field: 'valor', headerName: 'Valor', width: 150 },
    { field: 'tipoDiferencia', headerName: 'Tipo de diferencia', width: 180 },
    { field: 'detalle', headerName: 'Detalle', width: 200 }
  ]
}

```

## src/features/conciliation-guarantees/constants/endpoints.ts

```typescript
export const GUARANTEE_CONCILIATIONS_ENDPOINTS = Object.freeze({
  FIND_PREVIOUS_CONCILIATION: '/conciliation-guarantee/previous',
  FIND_CURRENCY_CONCILIATION: '/currency/conciliation',
  APPROVE_CONCILIATION: '/conciliation-guarantee/approve',
  UPLOAD_AUTOMATIC_CONCILIATION: '/conciliation-guarantee/upload-automatic',
  UPLOAD_MANUAL_CONCILIATION: '/conciliation-guarantee/upload-manual',
  FIND_HISTORY_CONCILIATION: '/conciliation-guarantee/history',
  FIND_PREVIOUS_DIFFERENCE:
    '/conciliation-difference/manage-differences/previous',
  FIND_APPROVE_DIFFERENCE:
    '/conciliation-difference/manage-differences/approve',
  FIND_SUMMARY_DIFFERENCE_DEPOSIT:
    '/conciliation-difference/summary-differences/deposit',
  FIND_SUMMARY_DIFFERENCE_BANK:
    '/conciliation-difference/summary-differences/bank',
  FIND_DEPOSITORY_CONCILIATION_TABS: '/depository/conciliation'
})

```

## src/features/conciliation-guarantees/constants/options.ts

```typescript
export const CURRENCY_OPTIONS = [
  { value: 'CLP', label: 'CLP' },
  { value: 'USD', label: 'USD' },
  { value: 'EUR', label: 'EUR' }
]

```

## src/features/conciliation-guarantees/constants/tabs.ts

```typescript
export enum TabType {
  DCV_CHILE = 0,
  BICE = 1,
  DECEVAL = 2,
  BANREP = 3,
  DCV_COLOMBIA = 4,
  CAVALI = 5,
  SCOTIA = 6
}

export const TABS_WITH_CURRENCY = [TabType.BICE, TabType.SCOTIA]
export const TABS_WITH_AUTOMATIC = [
  TabType.DCV_CHILE,
  TabType.DECEVAL,
  TabType.BANREP,
  TabType.CAVALI,
  TabType.SCOTIA
]

export enum TabId {
  DCV_CHILE = 6,
  DCV_COLOMBIA = 14,
  BICE = 11,
  DECEVAL = 1,
  BANREP = 9,
  CAVALI = 5,
  SCOTIA = 10
}

```

## src/features/conciliation-guarantees/hooks/useConciliation.ts

```typescript
import { useState, useEffect, useCallback } from 'react'

import useGenerateLogs from '@/shared/hooks/useGenerateLogs'

import {
  findDepositoryConciliationTabs,
  uploadAutomaticConciliation,
  uploadManualConciliation
} from '../services/conciliatonApisCmd'
import { DepositoryTab } from '../types/conciliation'

interface ModalAlert {
  open: boolean
  title: string
  message?: string
  variant?: 'success' | 'error' | 'warning'
}

interface Toast {
  message: string
  type: 'success' | 'error' | 'info'
}

export const useConciliation = () => {
  const [currentTab, setCurrentTab] = useState(0)
  const [currency, setCurrency] = useState('')
  const [openUploadModal, setOpenUploadModal] = useState(false)
  const [tabs, setTabs] = useState<DepositoryTab[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isValidateUploadDocument, setIsValidateUploadDocument] = useState<
    string | null
  >(null)
  const { dispatchGenerateLog } = useGenerateLogs()
  const [modalAlert, setModalAlertState] = useState<ModalAlert>({
    open: false,
    title: '',
    message: '',
    variant: 'success'
  })

  const [toast, setToastState] = useState<Toast | null>(null)

  useEffect(() => {
    const loadTabs = async () => {
      try {
        setIsLoading(true)
        const data = await findDepositoryConciliationTabs()
        setTabs(data)
        setError(null)
      } catch (err) {
        console.error('Error al cargar tabs:', err)
        setError('Error al cargar las pestañas')
      } finally {
        setIsLoading(false)
      }
    }

    loadTabs()
  }, [])

  // Memoizar setModalAlert para evitar re-renders innecesarios
  const setModalAlert = useCallback(
    (value: ModalAlert | ((prev: ModalAlert) => ModalAlert)) => {
      if (typeof value === 'function') {
        setModalAlertState(value)
      } else {
        setModalAlertState(value)
      }
    },
    []
  )

  // Memoizar setToast para evitar re-renders innecesarios
  const setToast = useCallback((value: Toast | null) => {
    setToastState(value)
  }, [])

  const handleFileUpload = useCallback(
    async (file: File, tabIndex: number) => {
      if (!file) return

      try {
        setIsLoading(true)
        const currentTabData = tabs[tabIndex]
        const depositoryId = Number(currentTabData?.id)

        if (!depositoryId) {
          setModalAlert({
            open: true,
            title: 'Error',
            message: 'No se encontró el ID del depositario',
            variant: 'error'
          })
          return
        }

        // Llamar a la API enviando el archivo directamente
        const response = await uploadManualConciliation(depositoryId, file)

        // Validar si la respuesta contiene un error de conciliación
        if (response?.errorConciliation) {
          setModalAlert({
            open: true,
            title: response.errorConciliation.title || 'Error',
            message:
              response.errorConciliation.description ||
              'Error al procesar el documento',
            variant: 'error'
          })
          setOpenUploadModal(false)
          return
        }

        if (response.responseSuccess) {
          setIsValidateUploadDocument(response.manual ? 'manual' : 'automatic')
        }

        dispatchGenerateLog({
          actionType: 'Carga documento manual',
          actionDestination: 'conciliationGuarantees'
        })
        setOpenUploadModal(false)
        setToast({
          message: 'Documento cargado exitosamente',
          type: 'success'
        })
      } catch (error: unknown) {
        const err = error as {
          response?: { data?: { errorCode?: string; message?: string } }
        }
        const errorCode = err?.response?.data?.errorCode
        switch (errorCode) {
          case 'STATEMENT_ALREADY_USED':
            setModalAlert({
              open: true,
              title: 'Error',
              message: 'La declaración ya se utilizó en otra conciliación',
              variant: 'error'
            })
            break
          case 'XML_PROCESSING_ERROR':
            setModalAlert({
              open: true,
              title: 'Error',
              message: 'Error al procesar el xml',
              variant: 'error'
            })
            break
          case 'STATEMENT_INVALID_EXTENSION':
            setModalAlert({
              open: true,
              title: 'Error',
              message: 'La declaración debe tener extensión .xml',
              variant: 'error'
            })
            break
          case 'STATEMENT_NOT_EXIST_TO_CONCILIATION':
            setModalAlert({
              open: true,
              title: 'Error',
              message: 'No hay declaración a la conciliación',
              variant: 'error'
            })
            break
          case 'CALCULATION_NOT_EXIST_TO_CONCILIATION':
            setModalAlert({
              open: true,
              title: 'Error',
              message: 'No hay cálculo para la conciliación',
              variant: 'error'
            })
            break
          case 'ERROR_DESERIALIZABLE_XML':
            setModalAlert({
              open: true,
              title: 'Error',
              message: 'Error deserializable xml',
              variant: 'error'
            })
            break
          default:
            setModalAlert({
              open: true,
              title: 'Error',
              message:
                err?.response?.data?.message || 'Error al cargar el documento',
              variant: 'error'
            })
        }
      } finally {
        setIsLoading(false)
      }
    },
    [tabs, setModalAlert, setToast]
  )

  const handleUploadDocument = useCallback(() => {
    setOpenUploadModal(true)
  }, [])

  const handleUploadAutomatic = useCallback(
    async (tabIndex: number) => {
      try {
        setIsLoading(true)
        const currentTabData = tabs[tabIndex]
        const depositoryId = currentTabData?.id

        if (!depositoryId) {
          setModalAlert({
            open: true,
            title: 'Error',
            message: 'No se encontró el ID del depositario',
            variant: 'error'
          })
          return
        }

        // Llamar a la API de carga automática
        const response = await uploadAutomaticConciliation(Number(depositoryId))

        // Validar si la respuesta contiene un error de conciliación
        if (response?.errorConciliation) {
          setModalAlert({
            open: true,
            title: response.errorConciliation.title || 'Error',
            message:
              response.errorConciliation.description ||
              'Error al procesar la carga automática',
            variant: 'error'
          })
          return
        }

        if (response.responseSuccess) {
          setIsValidateUploadDocument('automatic')
        }
        dispatchGenerateLog({
          actionType: 'Carga documento automatico',
          actionDestination: 'conciliationGuarantees'
        })
        setToast({
          message: 'Documento cargado exitosamente',
          type: 'success'
        })
      } catch (error: unknown) {
        console.error('Error in automatic upload:', error)
        setModalAlert({
          open: true,
          title: 'Error',
          message: 'Error al procesar la carga automática',
          variant: 'error'
        })
      } finally {
        setIsLoading(false)
      }
    },
    [tabs, setModalAlert, setToast]
  )

  const handleCurrencyChange = useCallback((value: string) => {
    setCurrency(value)
  }, [])

  useEffect(() => {
    setIsValidateUploadDocument(null)
  }, [currentTab])

  return {
    currentTab,
    setCurrentTab,
    currency,
    openUploadModal,
    setOpenUploadModal,
    handleFileUpload,
    handleUploadDocument,
    handleUploadAutomatic,
    handleCurrencyChange,
    tabs,
    isLoading,
    error,
    modalAlert,
    setModalAlert,
    toast,
    setToast,
    isValidateUploadDocument
  }
}

```

## src/features/conciliation-guarantees/hooks/useConciliationData.ts

```typescript
import { useState, useEffect, useCallback, useRef } from 'react'

export const useConciliationData = (
  fetchFn: () => Promise<any>,
  key: string
) => {
  const [data, setData] = useState<any[]>([])
  const [isLoadingData, setIsLoadingData] = useState(false)
  const [refreshKey, setRefreshKey] = useState(0)

  const fetchFnRef = useRef(fetchFn)
  fetchFnRef.current = fetchFn

  useEffect(() => {
    const fetchData = async () => {
      setIsLoadingData(true)
      try {
        const result = await fetchFnRef.current()
        if (result?.[key]) {
          setData([result[key]])
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setIsLoadingData(false)
      }
    }
    fetchData()
  }, [refreshKey, key])

  const refreshData = useCallback(() => {
    setRefreshKey((prev) => prev + 1)
  }, [])

  return { data, isLoadingData, refreshData }
}

```

## src/features/conciliation-guarantees/hooks/useCurrencySelector.ts

```typescript
import { useState } from 'react'

export const useCurrencySelector = () => {
  const [currency, setCurrency] = useState('')

  const handleCurrencyChange = (value: string) => {
    setCurrency(value)
    // Aquí podrías agregar lógica adicional, como llamadas a APIs
  }

  return {
    currency,
    handleCurrencyChange
  }
}

```

## src/features/conciliation-guarantees/hooks/useFileUpload.ts

```typescript
import { useState } from 'react'

export const useFileUpload = () => {
  const [openUploadModal, setOpenUploadModal] = useState(false)

  const handleFileUpload = (file: File, tabType: number) => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('tabType', tabType.toString())

    // TODO: Llamar al servicio de carga
    // uploadConciliationFile(formData)
  }

  const handleUploadDocument = () => {
    setOpenUploadModal(true)
  }

  const handleUploadAutomatic = (tabType: number) => {
    console.log('Carga automática iniciada para tab:', tabType)
  }

  return {
    openUploadModal,
    setOpenUploadModal,
    handleFileUpload,
    handleUploadDocument,
    handleUploadAutomatic
  }
}

```

## src/features/conciliation-guarantees/hooks/useTabConfig.ts

```typescript
import { useMemo } from 'react'

import { TABS_CONFIG } from '../config/tabsConfig'
import { TabProps } from '../types/conciliation'
import { DepositoryTab } from '../types/conciliation'

interface UseTabConfigParams {
  currentTab: number
  tabs: DepositoryTab[]
  currency: string
  handleUploadDocument: () => void
  handleUploadAutomatic: (tabIndex: number) => Promise<void>
  handleCurrencyChange: (value: string) => void
  setToast?: (toast: { message: string; type: 'success' | 'error' }) => void
  isLoading: boolean
  setModalAlert: (modal: {
    open: boolean
    title: string
    message?: string
    variant?: 'success' | 'error' | 'warning'
  }) => void
  isValidateUploadDocument: string | null
}

export const useTabConfig = ({
  currentTab,
  tabs,
  currency,
  handleUploadDocument,
  handleUploadAutomatic,
  handleCurrencyChange,
  setModalAlert,
  setToast,
  isLoading,
  isValidateUploadDocument
}: UseTabConfigParams) => {
  const tabConfig = useMemo(() => {
    const currentTabData = tabs[currentTab]
    if (!currentTabData) return null

    return TABS_CONFIG.find((config) => config.id === Number(currentTabData.id))
  }, [currentTab, tabs])

  const tabProps = useMemo((): TabProps | null => {
    if (!tabConfig) return null

    const currentTabData = tabs[currentTab]

    const baseProps: TabProps = {
      onUploadDocument: handleUploadDocument,
      data: currentTabData,
      setModalAlert,
      isValidateUploadDocument,
      isLoading,
      guaranteeType:
        currentTabData.guaranteeType?.description === 'VALORES'
          ? 'VALORES'
          : currentTabData.guaranteeType?.description === 'CASH'
            ? 'CASH'
            : undefined,
      setToast
    }

    if (tabConfig.requiresCurrency) {
      baseProps.currency = currency
      baseProps.onCurrencyChange = handleCurrencyChange
    }

    if (tabConfig.requiresAutomatic) {
      baseProps.onUploadAutomatic = () => handleUploadAutomatic(currentTab)
    }

    return baseProps
  }, [
    tabConfig,
    currentTab,
    tabs,
    currency,
    handleUploadDocument,
    handleUploadAutomatic,
    handleCurrencyChange,
    isLoading,
    setModalAlert,
    setToast,
    isValidateUploadDocument
  ])

  return { tabConfig, tabProps }
}

```

## src/features/conciliation-guarantees/pages/ConciliationGuarantees.tsx

```tsx
import { TabItem, TabsWrapper } from '@nuam/common-fe-lib-components'

import {
  ContentWrapper,
  ModalAlert,
  Toast,
  UploadFile
} from 'remoteUtilities/components-mf-utilities'

import { useTranslate } from '@/shared/hooks/useTranslate'

import { useConciliation } from '../hooks/useConciliation'
import { useTabConfig } from '../hooks/useTabConfig'

export const ConciliationGuarantees = () => {
  const t = useTranslate('guaranteeConciliation')

  const {
    currentTab,
    setCurrentTab,
    currency,
    openUploadModal,
    setOpenUploadModal,
    handleFileUpload,
    handleUploadDocument,
    handleUploadAutomatic,
    handleCurrencyChange,
    tabs,
    modalAlert,
    setModalAlert,
    isLoading,
    toast,
    setToast,
    isValidateUploadDocument
  } = useConciliation()

  const { tabConfig, tabProps } = useTabConfig({
    currentTab,
    tabs,
    currency,
    handleUploadDocument,
    handleUploadAutomatic,
    handleCurrencyChange,
    setModalAlert,
    setToast,
    isValidateUploadDocument,
    isLoading
  })

  const closeModalAlert = () => {
    setModalAlert((prev) => ({ ...prev, open: false }))
  }

  const TabComponent = tabConfig?.component

  return (
    <ContentWrapper title={t('title')}>
      <UploadFile
        open={openUploadModal}
        onClose={setOpenUploadModal}
        getFile={(file) => handleFileUpload(file, currentTab)}
      />

      <div style={{ width: '100%' }}>
        <div style={{ maxWidth: '750px' }}>
          <TabsWrapper currentTab={currentTab} setCurrentTab={setCurrentTab}>
            {tabs.map((tab) => (
              <TabItem key={tab.id} title={tab.name} />
            ))}
          </TabsWrapper>
        </div>

        <div style={{ width: '100%', marginTop: '16px' }}>
          {TabComponent && tabProps && <TabComponent {...tabProps} />}
        </div>
      </div>

      {modalAlert.open && (
        <ModalAlert
          title={modalAlert.title}
          message={modalAlert.message}
          variant={modalAlert.variant}
          onClick={closeModalAlert}
          showIconClose
          textSuccess="Volver"
          onIconClose={closeModalAlert}
        />
      )}

      {toast && (
        <Toast
          text={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
          duration={8000}
        />
      )}
    </ContentWrapper>
  )
}

```

## src/features/conciliation-guarantees/services/conciliatonApisCmd.ts

```typescript
import { httpConciliationGuaranteesCmd } from 'remoteShell/mf-axiosConfig'

import { getHeaders } from '@/shared/utils/getHeaders'

import { GUARANTEE_CONCILIATIONS_ENDPOINTS } from '../constants/endpoints'

export const findConciliation = async (depositoryId: number) => {
  const headers = await getHeaders()
  const response = await httpConciliationGuaranteesCmd.get(
    `${GUARANTEE_CONCILIATIONS_ENDPOINTS.FIND_PREVIOUS_CONCILIATION}/${depositoryId}`,
    {
      headers
    }
  )
  return response.data
}

export const findHistoryConciliation = async (depositoryId: number) => {
  const headers = await getHeaders()
  const response = await httpConciliationGuaranteesCmd.get(
    `${GUARANTEE_CONCILIATIONS_ENDPOINTS.FIND_HISTORY_CONCILIATION}?depositoryId=${depositoryId}`,
    {
      headers
    }
  )
  return response.data
}

export const findCurrencyConciliation = async (depositoryId: number) => {
  const headers = await getHeaders()
  const response = await httpConciliationGuaranteesCmd.get(
    `${GUARANTEE_CONCILIATIONS_ENDPOINTS.FIND_CURRENCY_CONCILIATION}/${depositoryId}`,
    {
      headers
    }
  )
  return response.data
}

export const findSummaryDifferenceDeposit = async (
  guaranteeConciliationId: string
) => {
  const headers = await getHeaders()
  const response = await httpConciliationGuaranteesCmd.get(
    `${GUARANTEE_CONCILIATIONS_ENDPOINTS.FIND_SUMMARY_DIFFERENCE_DEPOSIT}/${guaranteeConciliationId}`,
    {
      headers
    }
  )
  return response.data
}

export const findSummaryDifferenceBank = async (
  guaranteeConciliationId: string
) => {
  const headers = await getHeaders()
  const response = await httpConciliationGuaranteesCmd.get(
    `${GUARANTEE_CONCILIATIONS_ENDPOINTS.FIND_SUMMARY_DIFFERENCE_BANK}/${guaranteeConciliationId}`,
    {
      headers
    }
  )
  return response.data
}

export const uploadManualConciliation = async (
  depositoryId: number,
  file: File
) => {
  const headers = await getHeaders()
  const formData = new FormData()
  formData.append('document', file)

  const response = await httpConciliationGuaranteesCmd.post(
    `${GUARANTEE_CONCILIATIONS_ENDPOINTS.UPLOAD_MANUAL_CONCILIATION}?depositoryId=${depositoryId}`,
    formData,
    {
      headers: {
        ...headers,
        'Content-Type': 'multipart/form-data'
      }
    }
  )
  return response.data
}

export const uploadAutomaticConciliation = async (depositoryId: number) => {
  const headers = await getHeaders()
  const response = await httpConciliationGuaranteesCmd.post(
    `${GUARANTEE_CONCILIATIONS_ENDPOINTS.UPLOAD_AUTOMATIC_CONCILIATION}?depositoryId=${depositoryId}`,
    {},
    {
      headers
    }
  )
  return response.data
}

export const approveConciliation = async (
  depositoryId: number,
  isValidateUploadDocument?: string | null
) => {
  const headers = await getHeaders()
  const isManual = isValidateUploadDocument === 'manual'
  const response = await httpConciliationGuaranteesCmd.post(
    `${GUARANTEE_CONCILIATIONS_ENDPOINTS.APPROVE_CONCILIATION}?depositoryId=${depositoryId}&isManual=${isManual}`,
    {},
    {
      headers
    }
  )
  return response.data
}

export const findPreviousDifference = async (
  guaranteeConciliationId: number,
  selectedIds: number[]
) => {
  const headers = await getHeaders()
  const response = await httpConciliationGuaranteesCmd.post(
    `${GUARANTEE_CONCILIATIONS_ENDPOINTS.FIND_PREVIOUS_DIFFERENCE}?guaranteeConciliationId=${guaranteeConciliationId}`,
    selectedIds,
    {
      headers
    }
  )
  return response.data
}

export const findApprovedDifference = async (
  guaranteeConciliationId: number,
  selectedIds: number[]
) => {
  const headers = await getHeaders()
  const response = await httpConciliationGuaranteesCmd.post(
    `${GUARANTEE_CONCILIATIONS_ENDPOINTS.FIND_APPROVE_DIFFERENCE}?guaranteeConciliationId=${guaranteeConciliationId}`,
    selectedIds,
    {
      headers
    }
  )
  return response.data
}

export const findDepositoryConciliationTabs = async () => {
  const headers = await getHeaders()
  const response = await httpConciliationGuaranteesCmd.get(
    GUARANTEE_CONCILIATIONS_ENDPOINTS.FIND_DEPOSITORY_CONCILIATION_TABS,
    {
      headers
    }
  )
  return response.data
}

export const getConciliationSummary = async (depositoryId: number) => {
  const headers = await getHeaders()
  const response = await httpConciliationGuaranteesCmd.get(
    `/conciliation-guarantee/previous?depositoryId=${depositoryId}`,
    { headers }
  )
  return response.data
}

```

## src/features/conciliation-guarantees/types/conciliation.d.ts

```typescript
export interface ColumnDefinition {
  field: string
  headerName: string
  width?: number
  flex?: number
}

export interface ConciliationSectionProps {
  conciliationColumns: ColumnDefinition[]
  differencesColumns: ColumnDefinition[]
}

export interface CurrencySelectorProps {
  currency: string
  onCurrencyChange: (value: string) => void
}

export interface UploadButtonsProps {
  withAutomatic?: boolean
  onUploadDocument: () => void
  onUploadAutomatic?: () => void
}

export type TabProps = {
  onUploadDocument: typeof handleUploadDocument
  currency?: typeof currency
  onCurrencyChange?: typeof handleCurrencyChange
  onUploadAutomatic?: () => void
  data: DepositoryTab
  setToast?: (toast: { message: string; type: 'success' | 'error' }) => void
  guaranteeType?: 'VALORES' | 'CASH'
  setModalAlert: (modal: {
    open: boolean
    title: string
    message?: string
    variant?: 'success' | 'error' | 'warning'
  }) => void
  isValidateUploadDocument: string | null
  isLoading: boolean
}

export interface DepositoryTab {
  data: ISummaryConciliation[]
  id: string
  code: string
  description: string
  name: string
  guaranteeType: {
    id: number
    description: string
    category: string
    detail: string
  } | null
}

export interface ISummaryConciliation {
  status: any
  time: string
  summaryConciliationDeposit: SummaryConciliationDeposit
  summaryConciliationBank: SummaryConciliationBank
  errorConciliation: ErrorConciliation
  guaranteeConciliationId?: number
}

export interface ErrorConciliation {
  title: string
  description: string
}

export interface SummaryConciliationBank {
  guaranteeConciliationId: number
  time: string
  hour: string
  status: Status
  quantityDifferenceTotal: number
  currency: Currency
  balancePreviousNubo: number
  balancePreviousBankDepository: number
  debitNuboQuantity: number
  debitBankDepositoryQuantity: number
  creditNuboQuantity: number
  creditBankDepositoryQuantity: number
  balanceFinalNubo: number
  balanceFinalBank: number
  guaranteeConciliationId?: number
}

export interface Currency {
  id: number
  code: string
  name: string
}

export interface Status {
  id: number
  description: string
  detail: string
}

export interface SummaryConciliationDeposit {
  guaranteeConciliationId: number
  time: string
  status: any
  hour: string
  status: Status
  quantityDifferenceTotal: number
  totalNumberNubo: number
  totalNumberDepository: number
  totalNominalNubo: number
  totalNominalDepository: number
  guaranteeConciliationId?: number
  manual: boolean
}

export interface IHistoryData {
  depository: Depository
  localDate: string
  summaryConciliationDepositList: SummaryConciliationDepositList[]
  summaryConciliationBankList: SummaryConciliationBankList[]
}

export interface Depository {
  id: string
  code: string
  description: string
  guaranteeType: GuaranteeType
  name: string
}

export interface GuaranteeType {
  id: number
  description: string
  category?: string
  detail: string
}

export interface SummaryConciliationBankList {
  guaranteeConciliationId: number
  time: string
  hour: string
  status: GuaranteeType
  quantityDifferenceTotal: number
  currency: Currency
  balancePreviousNubo: number
  balancePreviousBankDepository: number
  debitNuboQuantity: number
  debitBankDepositoryQuantity: number
  creditNuboQuantity: number
  creditBankDepositoryQuantity: number
  balanceFinalNubo: number
  balanceFinalBank: number
  manual: boolean
}

export interface Currency {
  id: number
  code: string
  name: string
}

export interface SummaryConciliationDepositList {
  guaranteeConciliationId: number
  time: string
  hour: string
  status: GuaranteeType
  quantityDifferenceTotal: number
  totalNumberNubo: number
  totalNumberDepository: number
  totalNominalNubo: number
  totalNominalDepository: number
}

interface ConciliationHistoryModalProps {
  open: boolean
  onClose: () => void
  conciliationColumns: ColumnDefinition[]
  depositoryId: number
  setToast?: (
    toast: { message: string; type: 'success' | 'error' | 'info' } | null
  ) => void
}

export interface IResumeDifference {
  guaranteeDifferenceId: number
  registrationDate: string
  guaranteeNumberDeposit: string
  guaranteeNumber: string
  participant: Custodian
  custodian: Custodian
  participantDirectDepositor: Custodian
  investor: Investor
  quantity: number
  differenceType: DifferenceType
  detail: string
}

export interface Custodian {
  id: number
  code: string
  name: string
}

export interface DifferenceType {
  id: number
  description: string
  category: null
  detail: string
}

export interface Investor {
  id: number
  fullName: string
}

```

## src/features/fixed-parameters-guarantees/assets/icons/info-square.svg

```xml
<svg width="112" height="112" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M80.0176 5H31.9773C15.2361 5 4.74023 16.8535 4.74023 33.628V78.892C4.74023 95.6665 15.1862 107.52 31.9773 107.52H80.0121C96.8087 107.52 107.26 95.6665 107.26 78.892V33.628C107.26 16.8535 96.8087 5 80.0176 5Z" stroke="#32E3FE" stroke-width="8.31243" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M55.9681 78.4282V56.2617" stroke="#32E3FE" stroke-width="8.31243" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M55.9462 35.2239H56.0016" stroke="#32E3FE" stroke-width="11.0832" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

```

## src/features/fixed-parameters-guarantees/components/AutoCompleteConditions.tsx

```tsx
import { DefaultComponents } from '@nuam/common-fe-lib-components'
import { HTMLAttributes, useCallback } from 'react'

import { AutoCompleteInput } from 'remoteUtilities/components-mf-utilities'

import getConditionsAdditionalFilter from '@/features/fixed-parameters-guarantees/services/getConditionsAdditionalFilter'
import { transformDataConditions } from '@/features/fixed-parameters-guarantees/utils/transformDataConditions'

interface Props {
  countryId?: string
  typeConditionId?: string
  label: string
  onChange: (condition: { value?: string; label?: string }) => void
  value?: { value?: string | number; label: string }
  disabled: boolean
}

const AutoCompleteConditions = ({
  onChange,
  countryId,
  typeConditionId,
  label,
  value,
  disabled
}: Props) => {
  const getDataOptions = useCallback(
    async (query?: string, page: number = 0, size: number = 10) => {
      if (!countryId || !typeConditionId) return
      const getConditions = await getConditionsAdditionalFilter({
        countryId: +countryId,
        conditionTypeId: +typeConditionId,
        descriptionCondition: query,
        page,
        size
      })
      const resDataTransform = transformDataConditions(getConditions)
      return resDataTransform
    },
    [countryId, typeConditionId]
  )

  return (
    <div className="w-full">
      <AutoCompleteInput
        label={label}
        value={value}
        fetchOptions={getDataOptions}
        onChange={(value?: { id: number; label: string }) => {
          onChange({ label: value?.label, value: value?.id.toString() })
        }}
        itemsPerPage={10}
        minSearchLength={1}
        debounceTime={300}
        key={`condition-${value?.value}`}
        renderOption={(
          props: HTMLAttributes<HTMLLIElement>,
          option: { id: number; label: string }
        ) => {
          ;<DefaultComponents.Box
            component="li"
            {...props}
            key={option.id}
            sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
          >
            {option.label}
          </DefaultComponents.Box>
        }}
        height={28}
        hideIcon
        sx={{
          '& .MuiInputLabel-root': {
            display: 'flex',
            alignItems: 'center',
            transform: `translate(14px, 16%)`,
            '&.MuiInputLabel-shrink': {
              transform: 'translate(12px, -10px) scale(0.75)'
            }
          }
        }}
        disabled={disabled}
      />
    </div>
  )
}

export default AutoCompleteConditions

```

## src/features/fixed-parameters-guarantees/components/ConfirmationDisabledParam.tsx

```tsx
import { Button } from '@nuam/common-fe-lib-components'
import { useState } from 'react'

import { useTranslate } from '@/shared/hooks/useTranslate'

import ModalConfirmationDisabled from './ModalConfirmationDisabled'

interface Props {
  newSelection: number[]
  onRefreshTable: () => void
  validateSelectDataInactive: boolean
}
const ConfirmationDisabledParam = ({
  newSelection,
  validateSelectDataInactive,
  onRefreshTable
}: Props) => {
  const [confirmationModalDisabled, setConfirmationModalDisabled] =
    useState<boolean>(false)

  const onSetConfirmationDisabled = (value: boolean) => {
    setConfirmationModalDisabled(value)
  }
  const t = useTranslate('fixed-parameters.table.actions')
  return (
    <>
      <Button
        size="small"
        variant="text"
        color="secondary"
        onClick={() => {
          if (newSelection.length > 0) onSetConfirmationDisabled(true)
        }}
        className="font-Roboto gap-0 text-13px font-medium uppercase text-link-color outline-none"
      >
        {t('deactivate')}
      </Button>
      <ModalConfirmationDisabled
        fieldSelection={newSelection}
        showConfirmation={confirmationModalDisabled}
        setShowConfirmation={onSetConfirmationDisabled}
        someFieldDisabled={validateSelectDataInactive}
        onChangeLoadingTable={onRefreshTable}
      />
    </>
  )
}

export default ConfirmationDisabledParam

```

## src/features/fixed-parameters-guarantees/components/FiltersTable.tsx

```tsx
import { DatePicker, DefaultComponents } from '@nuam/common-fe-lib-components'
import dayjs from 'dayjs'
import { useCallback, useEffect, useState } from 'react'

import { SelectNuam } from 'remoteUtilities/components-mf-utilities'

import { serviceGetOptionParams } from '@/features/fixed-parameters-guarantees/services/getOptionParams'
import { serviceGetOptionStatus } from '@/features/fixed-parameters-guarantees/services/getOptionStatus'
import { Options } from '@/features/fixed-parameters-guarantees/types/Options'
import { FiltersTableState } from '@/features/fixed-parameters-guarantees/types/filtersTableState'
import { transformOptions } from '@/features/fixed-parameters-guarantees/utils/transformOptions'

import { useTranslate } from '@/shared/hooks/useTranslate'
import { DispatchStateCommon } from '@/shared/types/dispatchStateCommon'

interface IFilter {
  filters: FiltersTableState
  setFilters: DispatchStateCommon<FiltersTableState>
}
export const FiltersTable = ({ filters, setFilters }: IFilter) => {
  const t = useTranslate('fixed-parameters')
  const { date, params, status } = filters
  const [optionsParams, setOptionParams] = useState<Options>([])
  const [optionsStatus, setOptionsStatus] = useState<Options>([])

  const onChangeFilters = (key: keyof typeof filters, newValue: string) => {
    setFilters((current) => ({ ...current, [key]: newValue }))
  }
  const getOptionParams = useCallback(async () => {
    const resultOptionsParams = await serviceGetOptionParams()
    const adaptOptionsParams = transformOptions(resultOptionsParams)
    setOptionParams(adaptOptionsParams)
  }, [])
  const getOptionStatus = useCallback(async () => {
    const resultOptionsStatus = await serviceGetOptionStatus()
    const adaptOptionsStatus = transformOptions(resultOptionsStatus)
    setOptionsStatus(adaptOptionsStatus)
  }, [])
  useEffect(() => {
    getOptionParams()
    getOptionStatus()
  }, [])

  return (
    <DefaultComponents.Grid container spacing={2} pt={2} pb={3}>
      <DefaultComponents.Grid size={4}>
        <DatePicker
          label={t('select-date')}
          value={date ? dayjs(date) : undefined}
          slotProps={{
            textField: {
              size: 'small'
            }
          }}
          sx={{
            width: '100%'
          }}
          onChange={(value) => {
            const selectDate = value?.format('YYYY-MM-DD') as string
            onChangeFilters('date', selectDate)
          }}
          showClearIndicator={true}
        />
      </DefaultComponents.Grid>
      <DefaultComponents.Grid size={4}>
        <SelectNuam
          size="small"
          value={params}
          label={t('select-parameter')}
          options={optionsParams}
          formControlProps={{ fullWidth: true }}
          onChange={(e) => {
            onChangeFilters('params', e)
          }}
          valueKey="value"
          labelKey="label"
          key={`param-${params?.toString()}`}
        />
      </DefaultComponents.Grid>
      <DefaultComponents.Grid size={4}>
        <SelectNuam
          label={t('status-process')}
          value={status}
          options={optionsStatus}
          size="small"
          formControlProps={{ fullWidth: true }}
          onChange={(e) => {
            onChangeFilters('status', e)
          }}
          valueKey="value"
          labelKey="label"
          key={`status-${status?.toString()}`}
        />
      </DefaultComponents.Grid>
    </DefaultComponents.Grid>
  )
}

```

## src/features/fixed-parameters-guarantees/components/HeaderActionsLeftTable.tsx

```tsx
import { Button } from '@nuam/common-fe-lib-components'
import dayjs from 'dayjs'
import { useState } from 'react'

import { Toast } from 'remoteUtilities/components-mf-utilities'

import { downloadReport } from '@/features/fixed-parameters-guarantees/services/postGenerateReport'
import { FiltersTableState } from '@/features/fixed-parameters-guarantees/types/filtersTableState'
import { generateCSVReport } from '@/features/fixed-parameters-guarantees/utils/generateCSV'

import { useTranslate } from '@/shared/hooks/useTranslate'

import ConfirmationDisabledParam from './ConfirmationDisabledParam'
import RegisterOnlyUserInternal from './RegisterOnlyUserInternal'

interface HeaderActionsLeftTypes {
  newSelection: number[]
  onRefreshTable: () => void
  filters: FiltersTableState
  validateSelectDataInactive: boolean
}

const toastText = {
  load: { text: 'La descarga comenzara en breve.', variant: 'success' },
  error: {
    text: 'Ha ocurrido un error con la descarga, por favor inténtalo nuevamente.',
    variant: 'error',
    widh: '424px'
  }
}
const HeaderActionsLeft = ({
  onRefreshTable,
  filters,
  ...propsDisabledParam
}: HeaderActionsLeftTypes) => {
  const t = useTranslate('fixed-parameters.table.actions')
  const [stateDownload, setStateDownload] = useState<'' | 'load' | 'error'>('')
  const onDownloadReports = async () => {
    try {
      setStateDownload('load')
      const response = await downloadReport(filters)
      const currentDate = dayjs().format('DD-MM-YYYY')
      await generateCSVReport({
        data: response,
        name: `Otrosparametros_${currentDate}`
      })
    } catch {
      setStateDownload('error')
    }
  }
  const currentStateDownload =
    toastText[stateDownload as keyof typeof toastText]
  return (
    <>
      <div className="flex items-center gap-13px">
        <RegisterOnlyUserInternal onRefreshTable={onRefreshTable} />
        <ConfirmationDisabledParam
          {...propsDisabledParam}
          onRefreshTable={onRefreshTable}
        />
        <Button
          size="small"
          variant="text"
          color="secondary"
          onClick={onDownloadReports}
          className="font-Roboto gap-0 text-13px font-medium uppercase text-link-color outline-none"
        >
          {t('download')}
        </Button>
      </div>
      {currentStateDownload?.text && (
        <Toast {...currentStateDownload} onClose={() => setStateDownload('')} />
      )}
    </>
  )
}
export default HeaderActionsLeft

```

## src/features/fixed-parameters-guarantees/components/IconEyesTracking.tsx

```tsx
import { Button, MaterialIcons } from '@nuam/common-fe-lib-components'

interface IconEyesTrackingProps {
  setCurrentId?: (id: number) => void
  id?: number
  setModalDetail?: (value: boolean) => void
  isDisabled?: boolean
}

export const IconEyesTracking = ({
  setModalDetail,
  setCurrentId,
  id,
  isDisabled
}: IconEyesTrackingProps) => {
  return (
    <Button
      variant="text"
      className={`min-w-fit rounded-full border-none p-1`}
      onClick={() => {
        if (isDisabled) return
        setModalDetail?.(true)
        if (id) setCurrentId?.(id)
      }}
    >
      <MaterialIcons.VisibilityOutlined
        className={`flex w-6 max-w-6 items-center justify-center rounded-full border-none p-0 text-primary`}
        fontSize="medium"
      />
    </Button>
  )
}

```

## src/features/fixed-parameters-guarantees/components/ModalConfirmationDisabled.tsx

```tsx
import { Button } from '@nuam/common-fe-lib-components'
import { useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'remoteShell/mf-store'
import {
  GenerateLogs,
  ModalAlert,
  Toast
} from 'remoteUtilities/components-mf-utilities'

import { postDisableFixedParams } from '@/features/fixed-parameters-guarantees/services/disableFixedParams'

import { STORAGE_KEYS } from '@/shared/constants/storageKeys'
import { getFromLocalStorage } from '@/shared/utils/getFromLocalStorage'
import isDevMode from '@/shared/utils/isDevMode'

interface Props {
  someFieldDisabled?: boolean
  showConfirmation: boolean
  setShowConfirmation: (value: boolean) => void
  fieldSelection: number[]
  onChangeLoadingTable: () => void
}
const ModalConfirmationDisabled = ({
  someFieldDisabled,
  setShowConfirmation,
  showConfirmation,
  fieldSelection,
  onChangeLoadingTable
}: Props) => {
  const [showAlertFieldsDisabled, setShowAlertFieldsDisabled] =
    useState<boolean>(false)
  const handleCancel = () => {
    setShowConfirmation(false)
  }
  const { infoUserNubo } = useSelector((state: RootState) => state.auth)
  const { participantId, id, status, country } = infoUserNubo
  const onSelectDisableTable = async () => {
    const clientUser = getFromLocalStorage(STORAGE_KEYS.USERNAME)
    try {
      if (fieldSelection.length > 0) {
        await await postDisableFixedParams(fieldSelection)
        handleCancel()
        setShowAlertFieldsDisabled(true)
        await GenerateLogs(clientUser || '', {
          actionType: `Disable params fixed`,
          actionDestination: 'Visualización de parámetros de garantías',
          participantId,
          countryId: country.id,
          userNuboId: id,
          statusId: status.id
        })
      }
    } catch (error) {
      if (isDevMode()) {
        console.error(error)
      }
    }
  }

  const accessInfo = infoModal[someFieldDisabled ? 'someDisabled' : 'allActive']

  return (
    <>
      {showConfirmation && (
        <ModalAlert
          title={accessInfo.title}
          message={accessInfo.message}
          variant="warning"
        >
          <div className="-mb-10 flex gap-3">
            <Button
              size="large"
              variant="text"
              className="w-full uppercase"
              onClick={handleCancel}
            >
              cancelar
            </Button>
            <Button
              size="large"
              className="w-full uppercase"
              onClick={onSelectDisableTable}
            >
              desactivar
            </Button>
          </div>
        </ModalAlert>
      )}
      {showAlertFieldsDisabled && (
        <Toast
          openAlert={showAlertFieldsDisabled}
          text="Los parámetros han sido desactivados de forma exitosa."
          duration={2000}
          variant="success"
          onClose={() => {
            setShowAlertFieldsDisabled(false)
            onChangeLoadingTable()
          }}
        />
      )}
    </>
  )
}

export default ModalConfirmationDisabled
const infoModal = {
  allActive: {
    title: '¿Estas seguro de desactivar los parámetros seleccionados?',
    message:
      'Si deseas continuar, haz clic en <b>Desactivar,</b> de lo contrario puedes cancelar y verificar tú selección.'
  },
  someDisabled: {
    title: 'Algunos de los parámetros seleccionados ya están desactivados',
    message:
      'Solo desactivaras los parámetros activos, Si deseas continuar, haz clic en <b>Desactivar,</b> de lo contrario puedes cancelar y verificar tú selección.'
  }
}

```

## src/features/fixed-parameters-guarantees/components/ModalConfirmationRegister.tsx

```tsx
import { Button, Typography } from '@nuam/common-fe-lib-components'

import { ModalContent } from 'remoteUtilities/components-mf-utilities'

import InfoSquare from '@/features/fixed-parameters-guarantees/assets/icons/info-square.svg'

import { useTranslate } from '@/shared/hooks/useTranslate'

interface Props {
  showModalRegister: boolean
  onCancelModal: () => void
  onCloseModal: () => void
  onAccept: () => void
}
const ModalConfirmationRegister = ({
  showModalRegister,
  onAccept,
  onCancelModal,
  onCloseModal
}: Props) => {
  const transl = useTranslate('fixed-parameters.modal-confirmation')
  return (
    showModalRegister && (
      <ModalContent
        boxProps={{}}
        className="w-2/5 max-w-460px rounded-4px py-12"
        showBtnClose={false}
        showBtnAccept={false}
        ItShouldHaveButtons={false}
        parentClassName="z-100"
        handleClose={onCloseModal}
      >
        <div className="-mb-4 flex flex-col items-center justify-center gap-4 p-30px">
          <img src={InfoSquare} alt="info square" width="102" height="102" />
          <Typography
            variant="h3"
            className="text-center text-lg font-medium md:text-xl"
          >
            {transl('title-modal')}
          </Typography>

          <div className="flex w-full gap-3">
            <Button
              onClick={onCancelModal}
              variant="outlined"
              className="md:text-15px w-full border-0 text-13px"
            >
              {transl('back-button')}
            </Button>
            <Button
              className="md:text-15px w-full text-13px"
              onClick={onAccept}
            >
              {transl('accept-button')}
            </Button>
          </div>
        </div>
      </ModalContent>
    )
  )
}

export default ModalConfirmationRegister

```

## src/features/fixed-parameters-guarantees/components/ModalNewRegisterParams.tsx

```tsx
import {
  DefaultComponents,
  Modal,
  Typography,
  TextField,
  Button
} from '@nuam/common-fe-lib-components'
import dayjs from 'dayjs'
import { useEffect } from 'react'

import { initialStateParameter } from '@/features/fixed-parameters-guarantees/mocks/stateParameterInitial'
import { getCountriesOptions } from '@/features/fixed-parameters-guarantees/services/getCountriesOptions'
import getParametersModelRisk from '@/features/fixed-parameters-guarantees/services/getParametersModelRisk'
import getTypeCondition from '@/features/fixed-parameters-guarantees/services/getTypeCondition'
import { IParameterState } from '@/features/fixed-parameters-guarantees/types/newParameterState'
import { transformDataCountriesOptions } from '@/features/fixed-parameters-guarantees/utils/transformDataCountries'
import { transformOptions } from '@/features/fixed-parameters-guarantees/utils/transformOptions'

import CloseSquare from '@/shared/assets/icons/close-square.svg'
import ContainerFieldRegister from '@/shared/components/ContainerFieldRegister'
import { useTranslate } from '@/shared/hooks/useTranslate'
import { DispatchStateCommon } from '@/shared/types/dispatchStateCommon'
import { onKeyDownNumber } from '@/shared/utils/onKeyDownNumber'

import AutoCompleteConditions from './AutoCompleteConditions'
import SelectNewRegister from './SelectNewRegister'

interface Props {
  closeModal: () => void
  onOpenModalConfirmation: (value: boolean) => void
  openModal: boolean
  setNewParameter: DispatchStateCommon<IParameterState>
  newParameter: IParameterState
}
const ModalNewRegisterParams = ({
  closeModal,
  onOpenModalConfirmation: onSetModalConfirmationRegister,
  openModal,
  setNewParameter,
  newParameter
}: Props) => {
  const t = useTranslate('fixed-parameters.modal-register')
  const currentDate = dayjs().format('DD/MM/YYYY')
  const changeValue = <T,>(
    key: keyof typeof newParameter | string,
    newValue: T
  ) => {
    setNewParameter((current) => ({
      ...current,
      [key]: newValue
    }))
  }

  const getDataParamsOptions = async () => {
    const data = await getParametersModelRisk()
    const transformData = transformOptions(data)
    return transformData
  }
  const getDataTypeConditionsOptions = async () => {
    const data = await getTypeCondition()
    const transformData = transformOptions(data)
    return transformData
  }
  const getDataCountryOptions = async () => {
    const data = await getCountriesOptions()
    const transformData = transformDataCountriesOptions(data)
    return transformData
  }

  const {
    country,
    typeParam,
    paramPercentage,
    typeCondition,
    condition,
    typeCondition2,
    condition2
  } = newParameter
  const fieldsComplete = !!(
    country?.value &&
    typeParam?.value &&
    paramPercentage?.value &&
    typeCondition?.value &&
    condition?.value &&
    (typeCondition2?.value ? typeCondition2?.value && condition2?.value : true)
  )
  const onCloseModal = () => {
    closeModal()
    setNewParameter(initialStateParameter)
  }

  const isFirstConditionComplete = !!typeCondition?.value && !!condition?.value

  useEffect(() => {
    if (!isFirstConditionComplete) {
      changeValue('typeCondition2', undefined)
      changeValue('condition2', undefined)
    }
  }, [isFirstConditionComplete])

  return (
    <Modal
      boxProps={{}}
      open={openModal}
      sx={{
        '&> .MuiBox-root': {
          borderRadius: '4px',
          padding: '24px',
          maxWidth: '1000px',
          width: '78%',
          border: 'none',
          outline: 'none'
        }
      }}
    >
      <div className="relative flex flex-col gap-4">
        <div className="absolute right-0 top-0">
          <img
            src={CloseSquare}
            alt="close modal"
            width="24"
            height="24"
            loading="lazy"
            className="cursor-pointer"
            onClick={onCloseModal}
          />
        </div>
        <Typography variant="h2" className="text-xl md:text-2xl">
          {t('title')}
        </Typography>
        <Typography variant="body1" className="text-sm md:text-base">
          {t('description')}
        </Typography>
        <DefaultComponents.Grid
          container
          className="gap-6 rounded-4px p-6 shadow-grey"
        >
          <ContainerFieldRegister
            title={t('form.country')}
            title2={t('form.date')}
            field={
              <SelectNewRegister
                label={t('form.country-placeholder')}
                value={country}
                changeValue={changeValue}
                keyValue="country"
                openModal={openModal}
                serviceGetOptions={getDataCountryOptions}
                disabled={false}
              />
            }
            field2={
              <Typography
                variant="body1"
                className="text-end text-sm md:text-base"
              >
                {currentDate}
              </Typography>
            }
            classNameItems="max-h-7"
          />
          <ContainerFieldRegister
            title={t('form.type-parameter')}
            title2={t('form.percentage-parameter')}
            field={
              <SelectNewRegister
                label={t('form.type-parameter-placeholder')}
                value={typeParam}
                changeValue={changeValue}
                keyValue="typeParam"
                openModal={openModal}
                serviceGetOptions={getDataParamsOptions}
                disabled={false}
              />
            }
            field2={
              <TextField
                value={paramPercentage?.value}
                placeholder={t('form.percentage-parameter-placeholder')}
                onChange={(value) => {
                  const strVal = value.toString()
                  if (
                    strVal === '' ||
                    /^(100(?:\.0{1,3})?|[0-9]{1,2}(?:\.[0-9]{1,3})?)$/.test(
                      strVal
                    )
                  ) {
                    changeValue('paramPercentage', {
                      value: strVal === '' ? '' : +value
                    })
                  }
                }}
                onKeyDown={onKeyDownNumber}
                type="number"
                className="h-full w-full rounded-4px pl-1"
                size="small"
                sx={{
                  '&> .MuiInputBase-root': {
                    height: '100%'
                  }
                }}
              />
            }
            classNameItems="max-h-7"
          />
          <ContainerFieldRegister
            title={t('form.type-condition')}
            title2={t('form.condition-1')}
            field={
              <SelectNewRegister
                label={t('form.type-condition-placeholder')}
                value={typeCondition}
                changeValue={(value, key) => {
                  changeValue(value, key)
                  changeValue('condition', undefined)
                }}
                keyValue="typeCondition"
                openModal={openModal}
                serviceGetOptions={getDataTypeConditionsOptions}
                disabled={false}
              />
            }
            field2={
              <AutoCompleteConditions
                value={condition}
                countryId={country?.value}
                typeConditionId={typeCondition?.value}
                label={t('form.condition-2-placeholder')}
                onChange={(value) => {
                  changeValue('condition', value)
                }}
                disabled={false}
              />
            }
            classNameItems="max-h-7"
          />
          <ContainerFieldRegister
            title={t('form.type-condition-2')}
            title2={t('form.condition-2')}
            field={
              <SelectNewRegister
                label={t('form.type-condition-2-placeholder')}
                value={typeCondition2}
                changeValue={(value, key) => {
                  changeValue(value, key)
                  changeValue('condition2', undefined)
                }}
                keyValue="typeCondition2"
                openModal={openModal}
                serviceGetOptions={getDataTypeConditionsOptions}
                disabled={!isFirstConditionComplete}
              />
            }
            field2={
              <AutoCompleteConditions
                value={condition2}
                countryId={country?.value}
                typeConditionId={typeCondition2?.value}
                label={t('form.condition-2-placeholder')}
                onChange={(value) => {
                  changeValue('condition2', value)
                }}
                disabled={!isFirstConditionComplete}
              />
            }
            textOptional
            textOptional2
            classNameItems="max-h-7"
          />
        </DefaultComponents.Grid>
        <div className="flex justify-end gap-3">
          <Button
            size="large"
            variant="outlined"
            onClick={onCloseModal}
            className="text-15px w-60 font-medium uppercase text-link-color outline-none"
          >
            {t('cancel')}
          </Button>
          <Button
            size="large"
            variant="contained"
            color="primary"
            onClick={() => onSetModalConfirmationRegister(true)}
            className="text-15px w-60 font-medium uppercase outline-none"
            disabled={!fieldsComplete}
          >
            {t('register')}
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default ModalNewRegisterParams

```

## src/features/fixed-parameters-guarantees/components/ModalTrackingGuarantees.tsx

```tsx
import { Typography, DataGrid } from '@nuam/common-fe-lib-components'
import { useCallback, useEffect, useState } from 'react'

import { ModalContent } from 'remoteUtilities/components-mf-utilities'

import { columnsTracking } from '@/features/fixed-parameters-guarantees/mocks/columnsTracking'
import { serviceGetTrackingInfo } from '@/features/fixed-parameters-guarantees/services/getTrackingGuarantees'
import { AdaptTrackingData } from '@/features/fixed-parameters-guarantees/types/transformTracking'
import { transformTrackingData } from '@/features/fixed-parameters-guarantees/utils/transformTrackingData'

const ModalTrackingGuarantees = ({
  showModal,
  closeModal,
  idDetail
}: {
  showModal: boolean
  idDetail?: number
  closeModal: () => void
}) => {
  const [dataTracking, setDataTracking] = useState<AdaptTrackingData>([])
  const [detailTracking, setDetailTracking] = useState<{
    registrationDate?: string
    paramType?: string
  }>({})
  const getDataRows = useCallback(async () => {
    const res = await serviceGetTrackingInfo(idDetail)
    setDetailTracking({
      registrationDate: res.registrationDate,
      paramType: res.paramType.detail
    })
    const adaptToTable = transformTrackingData(res)
    setDataTracking(adaptToTable)
  }, [idDetail])
  useEffect(() => {
    if (!idDetail) return
    getDataRows()
  }, [getDataRows])

  return (
    showModal &&
    idDetail && (
      <ModalContent
        handleClose={closeModal}
        showBtnAccept={false}
        showBtnClose={false}
        ItShouldHaveButtons={false}
        className="w-1/2 min-w-72 max-w-[663px]"
      >
        <div className="p-6">
          <div className="flex gap-8">
            <div className="w-1/2">
              <Typography variant="h2" className="text-lg font-bold md:text-xl">
                Fecha de registro:
              </Typography>
              <Typography variant="body1" className="text-lg md:text-xl">
                {detailTracking?.registrationDate}
              </Typography>
            </div>
            <div className="w-1/2">
              <Typography variant="h2" className="text-lg font-bold md:text-xl">
                Tipo de parámetro:
              </Typography>
              <Typography variant="body1" className="text-lg md:text-xl">
                {detailTracking?.paramType}
              </Typography>
            </div>
          </div>
          <div className="mt-8">
            <Typography
              variant="h3"
              className="mb-10px text-base font-bold md:text-lg"
            >
              Seguimiento del estado
            </Typography>
            <div className="rounded-lg">
              <DataGrid
                rows={dataTracking}
                columns={columnsTracking}
                hideFooter={true}
                hideRightToolbar={true}
                checkboxSelection={false}
                rowHeight={40}
                sx={{
                  maxHeight: 340,
                  overflowY: 'auto'
                }}
              />
            </div>
          </div>
        </div>
      </ModalContent>
    )
  )
}

export default ModalTrackingGuarantees

```

## src/features/fixed-parameters-guarantees/components/ModalsProcessRegisterParameters.tsx

```tsx
import { useCallback, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'remoteShell/mf-store'
import { GenerateLogs, Toast } from 'remoteUtilities/components-mf-utilities'

import { initialStateParameter } from '@/features/fixed-parameters-guarantees/mocks/stateParameterInitial'
import { postNewFixedParamsService } from '@/features/fixed-parameters-guarantees/services/newFixedParams'
import { IParameterState } from '@/features/fixed-parameters-guarantees/types/newParameterState'
import { ErrorResponseNewFixedParams } from '@/features/fixed-parameters-guarantees/types/postNewFixedParamsService'

import ErrorRegisterModal from '@/shared/components/ErrorRegisterModal'
import { STORAGE_KEYS } from '@/shared/constants/storageKeys'
import { useTranslate } from '@/shared/hooks/useTranslate'
import { getFromLocalStorage } from '@/shared/utils/getFromLocalStorage'

import ModalConfirmationRegister from './ModalConfirmationRegister'
import ModalNewRegisterParams from './ModalNewRegisterParams'

interface Props {
  showModalRegister: boolean
  closeModal: (value?: boolean) => void
  onSetRefreshTable: () => void
}
type stateRegisterType = 'error' | 'success'

const ModalsProcessRegisterParameters = ({
  closeModal,
  showModalRegister,
  onSetRefreshTable
}: Props) => {
  const [showModalConfirm, setShowModalConfirm] = useState(false)
  const [stateNewRegister, setStateNewRegister] = useState<stateRegisterType>()
  const [newParameter, setNewParameter] = useState<IParameterState>(
    initialStateParameter
  )
  const [messageError, setMessageError] = useState('')

  const onSetModalConfirmationRegister = useCallback((showModal: boolean) => {
    setShowModalConfirm(showModal)
  }, [])

  const onCloseModalError = useCallback(() => {
    setShowModalConfirm(false)
    setStateNewRegister(undefined)
    closeModal(true)
  }, [])
  const registerIsSuccessful = useMemo(
    () => stateNewRegister === 'success',
    [stateNewRegister]
  )
  const openModalRegister = useMemo(
    () => showModalRegister && !showModalConfirm,
    [showModalRegister, showModalConfirm]
  )
  const { infoUserNubo } = useSelector((state: RootState) => state.auth)
  const { participantId, id, status, country } = infoUserNubo
  const onConfirmNewRegisterSuccess = useCallback(async () => {
    const clientUser = getFromLocalStorage(STORAGE_KEYS.USERNAME)
    try {
      await postNewFixedParamsService(newParameter)
      setStateNewRegister('success')
      setNewParameter(initialStateParameter)
      await GenerateLogs(clientUser || '', {
        actionType: `New params guarantees`,
        actionDestination: 'Visualización de parámetros de garantías',
        participantId,
        countryId: country.id,
        userNuboId: id,
        statusId: status.id
      })
    } catch (e: any) {
      const error = e.response.data as ErrorResponseNewFixedParams
      setMessageError(error.errorMessageDetail)
      setStateNewRegister('error')
    }
  }, [newParameter])
  const onRegisterConfirm = () => {
    onSetModalConfirmationRegister(true)
    closeModal()
  }
  const onConfirmNewRegister = useCallback(async () => {
    closeModal()
    onSetModalConfirmationRegister(false)
    await onConfirmNewRegisterSuccess()
  }, [onConfirmNewRegisterSuccess])
  const transl = useTranslate('fixed-parameters')
  const onCloseAllModals = () => {
    setNewParameter(initialStateParameter)
    setStateNewRegister(undefined)
    closeModal(false)
    onSetModalConfirmationRegister(false)
    onSetRefreshTable()
  }

  return (
    <>
      <ModalNewRegisterParams
        closeModal={closeModal}
        onOpenModalConfirmation={onRegisterConfirm}
        openModal={openModalRegister}
        setNewParameter={setNewParameter}
        newParameter={newParameter}
      />
      <ModalConfirmationRegister
        showModalRegister={showModalConfirm}
        onCloseModal={onCloseAllModals}
        onCancelModal={() => {
          onSetModalConfirmationRegister(false)
          closeModal(true)
        }}
        onAccept={onConfirmNewRegister}
      />
      {registerIsSuccessful && (
        <Toast
          text={transl('success-new-register')}
          onClose={onSetRefreshTable}
          variant="success"
          width="424px"
          duration={1200}
        />
      )}
      <ErrorRegisterModal
        showModalError={stateNewRegister ? !registerIsSuccessful : false}
        messageError={messageError}
        onBackModal={onCloseModalError}
        onCloseModal={onCloseAllModals}
      />
    </>
  )
}

export default ModalsProcessRegisterParameters

```

## src/features/fixed-parameters-guarantees/components/RegisterOnlyUserInternal.tsx

```tsx
import { Button } from '@nuam/common-fe-lib-components'
import { useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'remoteShell/mf-store'

import { USER_TYPE } from '@/shared/constants/userType'
import { useTranslate } from '@/shared/hooks/useTranslate'

import ModalsProcessRegisterParameters from './ModalsProcessRegisterParameters'

const RegisterOnlyUserInternal = ({
  onRefreshTable
}: {
  onRefreshTable: () => void
}) => {
  const t = useTranslate('fixed-parameters.table.actions')
  const userType = useSelector(
    (state: RootState) => state.auth.infoUserNubo.userType
  )
  const [showModalRegister, setShowModalRegister] = useState<boolean>(false)
  const onCloseAlert = (value: boolean = false) => {
    setShowModalRegister(value)
  }
  const onNewRegister = (_value = false) => {
    try {
      setShowModalRegister(_value)
    } catch (error) {}
  }
  if (userType === USER_TYPE.INTERNAL)
    return (
      <>
        <Button
          size="small"
          variant="text"
          color="secondary"
          onClick={() => onNewRegister(true)}
          className="font-Roboto gap-0 text-13px font-medium uppercase text-link-color outline-none"
        >
          {t('new')}
        </Button>
        <ModalsProcessRegisterParameters
          closeModal={onCloseAlert}
          showModalRegister={showModalRegister}
          onSetRefreshTable={onRefreshTable}
        />
      </>
    )
}

export default RegisterOnlyUserInternal

```

## src/features/fixed-parameters-guarantees/components/SelectNewRegister.tsx

```tsx
import { Select } from '@nuam/common-fe-lib-components'
import { useEffect, useState } from 'react'

import { Options } from '@/features/fixed-parameters-guarantees/types/Options'

interface Props {
  label: string
  value?: {
    label: string
    value?: string
  }
  keyValue: string
  changeValue: (key: string, value: { value?: string; label: string }) => void
  openModal: boolean
  serviceGetOptions?: () => Promise<Options>
  disabled: boolean
}
const SelectNewRegister = ({
  label,
  value,
  changeValue,
  openModal,
  serviceGetOptions,
  keyValue,
  disabled
}: Props) => {
  const [options, setOptions] = useState<Options>([])

  const getDataCountryOptions = async () => {
    if (serviceGetOptions) {
      const data = await serviceGetOptions()
      setOptions(data)
    }
  }
  useEffect(() => {
    if (openModal) {
      options.length === 0 && getDataCountryOptions()
    }
  }, [openModal])
  return (
    <Select
      label={label}
      value={value}
      options={options}
      onChange={(value) => {
        changeValue(keyValue, value)
      }}
      labelKey="label"
      formControlProps={{
        sx: {
          width: '100%',
          maxHeight: '28px',
          height: '28px',
          '&> .MuiSelect-select': {
            py: '0px',
            height: '28px'
          },
          '&> .MuiFormLabel-root': {
            top: '-6px'
          },
          '&> .Mui-focused': {
            top: '0px'
          },
          '&> .MuiInputBase-root': {
            height: '100%'
          }
        }
      }}
      size="small"
      valueKey="label"
      disabled={disabled}
    />
  )
}

export default SelectNewRegister

```

## src/features/fixed-parameters-guarantees/components/TableFixedParams.tsx

```tsx
import { useMemo, useState } from 'react'

import { NewTable } from 'remoteUtilities/components-mf-utilities'

import { URL_KEYS } from '@/features/fixed-parameters-guarantees/constants/url'
import { ColumnsTable } from '@/features/fixed-parameters-guarantees/mocks/columnsFixedParams'
import { ResponseServiceParams } from '@/features/fixed-parameters-guarantees/types/dataAdditionalParameter'
import { FiltersTableState } from '@/features/fixed-parameters-guarantees/types/filtersTableState'

import HeaderActionsLeft from './HeaderActionsLeftTable'

interface Props {
  filters: FiltersTableState
  onSelectViewDetails: (id: number) => void
  onSetInitialFilters: () => void
}
const TableFixedParams = ({
  filters,
  onSelectViewDetails,
  onSetInitialFilters
}: Props) => {
  const [dataTable, setDataTable] = useState<ResponseServiceParams['content']>(
    []
  )
  const [refreshTable, setRefreshTable] = useState(false)
  const [selectCheckTable, setSelectCheckTable] = useState<number[]>([])
  const setDataRemote = (
    _page: number,
    dataTable: ResponseServiceParams['content']
  ) => {
    setDataTable(dataTable)
  }

  const onRefreshTable = () => {
    setRefreshTable((current) => !current)
    onSetInitialFilters()
  }

  const validateSelectDataInactive = useMemo(
    () =>
      selectCheckTable.some((itemSelected) => {
        const finData = dataTable.find((data) => data.id === itemSelected)
        return finData?.status?.detail === 'Inactivo'
      }),
    [dataTable, selectCheckTable]
  )

  const urlDataTable = useMemo(() => {
    const baseUrl = '/risk-additional-parameters'
    const params = new URLSearchParams()

    if (filters.status) {
      params.set(URL_KEYS.STATUD_ID, filters.status?.value)
    }
    if (filters.params) {
      params.set(URL_KEYS.PARAM_TYPE_ID, filters.params?.value)
    }
    if (filters.date) {
      params.set(URL_KEYS.DATE_REGISTRATION, filters.date)
    }
    params.set(URL_KEYS.SORT, URL_KEYS.ID)
    params.set(URL_KEYS.ORDER, URL_KEYS.DESC)
    return params.toString() ? `${baseUrl}?${params.toString()}` : baseUrl
  }, [filters.status, filters.params, filters.date])
  return (
    <NewTable
      rows={dataTable}
      columns={ColumnsTable({ onSelectDetail: onSelectViewDetails })}
      pageSizeOptions={[5]}
      customToolbar={
        <HeaderActionsLeft
          newSelection={selectCheckTable}
          onRefreshTable={onRefreshTable}
          filters={filters}
          validateSelectDataInactive={validateSelectDataInactive}
        />
      }
      setThereAreSelected={(newSelection: number[]) => {
        setSelectCheckTable(newSelection)
      }}
      disableRowSelectionOnClick={true}
      setDataRemote={setDataRemote}
      axiosInstanceKey="httpRiskModelsAdditional"
      endpoint={urlDataTable}
      refresh={refreshTable}
    />
  )
}

export default TableFixedParams

```

## src/features/fixed-parameters-guarantees/components/TableWithFilter.tsx

```tsx
import { lazy, Suspense, useState } from 'react'

import { Spinner } from 'remoteUtilities/components-mf-utilities'

import { FiltersTableState } from '@/features/fixed-parameters-guarantees/types/filtersTableState'

import { FiltersTable } from './FiltersTable'
import TableFixedParams from './TableFixedParams'

const ModalTrackingGuarantees = lazy(() => import('./ModalTrackingGuarantees'))
const initialFilters = {
  status: undefined,
  params: undefined,
  date: undefined
}
const TableWithFilter = () => {
  const [filters, setFilters] = useState<FiltersTableState>(initialFilters)
  const [modalTracking, setModalTracking] = useState(false)
  const [fieldDetail, setDetail] = useState<number>()
  const onSelectViewDetails = (id: number) => {
    setDetail(id)
    setModalTracking(true)
  }
  const closeModalTracking = () => {
    setDetail(undefined)
    setModalTracking(false)
  }
  const onSetInitialFilters = () => {
    setFilters(initialFilters)
  }

  return (
    <>
      <FiltersTable filters={filters} setFilters={setFilters} />
      <TableFixedParams
        filters={filters}
        onSelectViewDetails={onSelectViewDetails}
        onSetInitialFilters={onSetInitialFilters}
      />
      {modalTracking && (
        <Suspense fallback={<Spinner />}>
          <ModalTrackingGuarantees
            idDetail={fieldDetail}
            showModal={modalTracking}
            closeModal={closeModalTracking}
          />
        </Suspense>
      )}
    </>
  )
}

export default TableWithFilter

```

## src/features/fixed-parameters-guarantees/constants/excel.ts

```typescript
export const EXCEL_HEADERS = [
  'Fecha de ingreso',
  'País',
  'Tipo de parámetro',
  'Porcentaje parámetro',
  'Tipo de condición 1',
  'Condición 1',
  'Tipo de condición 2',
  'Condición 2',
  'Estado'
]

```

## src/features/fixed-parameters-guarantees/constants/url.ts

```typescript
export const URL_KEYS = {
  STATUD_ID: 'statusId',
  PARAM_TYPE_ID: 'paramTypeId',
  DATE_REGISTRATION: 'dateRegistration',
  SORT: 'sort',
  ID: 'id',
  DESC: 'desc',
  ORDER: 'order'
}

```

## src/features/fixed-parameters-guarantees/hooks/useActionCalculateValuation.tsx

```tsx
import { useActionCalculateValuationProps } from '@/features/fixed-parameters-guarantees/types/useActionCalculateValuation'
import TableValuationGuarantee from '@/features/view-guarantees/components/TableValuationGuarantee'
import { calculateValuationGuarantee } from '@/features/view-guarantees/services/calculateValuationGuarantee'
import { ResponseErrorCalculateValuationGuarantee } from '@/features/view-guarantees/types/bodyCalculateValuationGuarantee'

import useGenerateLogs from '@/shared/hooks/useGenerateLogs'

const useActionCalculateValuation = ({
  selectCheckTable,
  setModalAlert,
  setToast,
  onRefreshTable
}: useActionCalculateValuationProps) => {
  const cleanSetAlert = () => {
    setModalAlert(undefined)
  }
  const cleanToast = () => {
    setToast(undefined)
    onRefreshTable()
  }
  const { dispatchGenerateLog } = useGenerateLogs()
  const onConfirm = async () => {
    try {
      const responseCalculate =
        await calculateValuationGuarantee(selectCheckTable)
      if (responseCalculate?.responseSuccess) {
        dispatchGenerateLog({
          actionType: 'Calculo de valoración de garantías',
          actionDestination: 'Calculo de garantías exitoso'
        })
        setToast({
          text: 'Valoración actualizada correctamente.',
          variant: 'success',
          open: true,
          onClose: cleanToast,
          duration: 2000
        })
        cleanSetAlert()
      } else {
        setModalAlert({
          open: true,
          variant: 'warning',
          title:
            '<b>No es posible realizar la valoración de las siguientes garantías</b>',
          textSuccess: 'Volver',
          onClick: cleanSetAlert,
          width: '90%',
          children: (
            <div className="flex w-full justify-center">
              <TableValuationGuarantee errors={responseCalculate.errors} />
            </div>
          ),
          showIconClose: true,
          onIconClose: cleanSetAlert
        })
      }
    } catch (error: any) {
      const errorResponse = error?.response
        ?.data as ResponseErrorCalculateValuationGuarantee
      setModalAlert({
        open: true,
        variant: 'error',
        title: '<b>Ocurrió un error inesperado</b>',
        message: errorResponse.errorMessage,
        textSuccess: 'Volver',
        onClick: cleanSetAlert,
        showIconClose: true,
        onIconClose: cleanSetAlert
      })
    }
  }
  const onModalConfirm = () => {
    setModalAlert({
      open: true,
      variant: 'warning',
      title:
        '<b>¿Estas seguro de realizar nuevamente la valoración de la garantía?</b>',
      message:
        'Si deseas continuar, haz clic en <b>aceptar</b>, de lo contrario puedes cancelar',
      orientation: 'horizontal',
      textCancel: 'Cancelar',
      textSuccess: 'Aceptar',
      handleCancel: cleanSetAlert,
      onClick: onConfirm
    })
  }
  return {
    onModalConfirm
  }
}

export default useActionCalculateValuation

```

## src/features/fixed-parameters-guarantees/mocks/columnsFixedParams.tsx

```tsx
import { Typography } from '@nuam/common-fe-lib-components'

import { IconEyesTracking } from '@/features/fixed-parameters-guarantees/components/IconEyesTracking'

import { useTranslate } from '@/shared/hooks/useTranslate'

import { ContentItem } from '../types/dataAdditionalParameter'

export const ColumnsTable = ({
  onSelectDetail
}: {
  onSelectDetail: (id: number) => void
}) => {
  const t = useTranslate('fixed-parameters.table')
  return [
    {
      field: 'dateRegistration',
      headerName: t('date'),
      sortable: false,
      flex: 1
    },
    {
      field: 'countryName',
      headerName: 'País',
      sortable: false,
      flex: 1,
      maxWidth: 105,
      renderCell: ({ row }: { row: ContentItem }) => {
        return <Typography>{row?.country?.name}</Typography>
      }
    },
    {
      field: 'paramTypeDetail',
      headerName: t('type-parameter'),
      sortable: false,
      flex: 1,
      maxWidth: 143,
      renderCell: ({ row }: { row: ContentItem }) => {
        return <Typography>{row?.paramType?.detail}</Typography>
      }
    },
    {
      field: 'paramPercentage',
      headerName: t('percentage-parameter'),
      sortable: false,
      flex: 1
    },
    {
      field: 'oneConditionTypeDetail',
      headerName: t('type-condition'),
      sortable: false,
      flex: 1,
      maxWidth: 146,
      renderCell: ({ row }: { row: ContentItem }) => {
        return <Typography>{row?.oneConditionType?.detail}</Typography>
      }
    },
    {
      field: 'oneConditionDetail',
      headerName: t('condition-1'),
      sortable: false,
      flex: 1
    },
    {
      field: 'twoConditionTypeDetail',
      headerName: t('type-condition-2'),
      sortable: false,
      flex: 1,
      maxWidth: 146,
      renderCell: ({ row }: { row: ContentItem }) => {
        return <Typography>{row?.twoConditionType?.detail}</Typography>
      }
    },
    {
      field: 'twoConditionDetail',
      headerName: t('condition-2'),
      sortable: false,
      flex: 1
    },
    {
      field: 'statusDetail',
      headerName: t('state'),
      sortable: false,
      flex: 1,
      renderCell: ({ row }: { row: ContentItem }) => {
        return (
          <Typography className="flex h-full items-center gap-1">
            <IconEyesTracking id={row.id} setCurrentId={onSelectDetail} />
            {row?.status?.detail}
          </Typography>
        )
      }
    }
  ]
}

```

## src/features/fixed-parameters-guarantees/mocks/columnsTracking.ts

```typescript
export const columnsTracking = [
  {
    field: 'eventDate',
    headerName: 'Fecha del evento',
    sortable: false,
    flex: 1
  },
  { field: 'eventTime', headerName: 'Hora', sortable: false, flex: 1 },
  { field: 'status', headerName: 'Estado', sortable: false, flex: 1 }
]

```

## src/features/fixed-parameters-guarantees/mocks/optionsRegister.tsx

```tsx
import { useTranslate } from '@/shared/hooks/useTranslate'

export const optionsTypeParams = () => {
  const t = useTranslate(
    'fixed-parameters.modal-register.form.options-type-parameter'
  )
  return [
    {
      label: t('additional-warranty'),
      value: 'Garantía Adicional'
    },
    {
      label: t('minimum-warranty'),
      value: 'Garantía Fija'
    },
    {
      label: t('fixed-guarantee'),
      value: 'Garantía Mínima'
    }
  ]
}

export const optionsConditions = () => {
  const t = useTranslate(
    'fixed-parameters.modal-register.form.options-type-condition'
  )
  return [
    {
      label: t('participant'),
      value: 'Participante'
    },
    {
      label: t('transmitter'),
      value: 'Emisor'
    },
    {
      label: t('final-beneficiary'),
      value: 'Beneficiario final'
    },
    {
      label: t('nnemonic'),
      value: 'Nemotécnico'
    },
    {
      label: t('isin'),
      value: 'ISIN'
    },
    {
      label: t('type-operation'),
      value: 'Tipo de operación'
    },
    {
      label: t('duration'),
      value: 'duración'
    },
    {
      label: t('clasification'),
      value: 'clasificacion'
    }
  ]
}
export const optionsConditions2 = () => {
  const t = useTranslate(
    'fixed-parameters.modal-register.form.options-type-condition-2'
  )
  return [
    {
      label: t('participant'),
      value: 'Participante'
    },
    {
      label: t('transmitter'),
      value: 'Emisor'
    },
    {
      label: t('final-beneficiary'),
      value: 'Beneficiario final'
    },
    {
      label: t('nnemonic'),
      value: 'Nemotécnico'
    },
    {
      label: t('isin'),
      value: 'ISIN'
    },
    {
      label: t('type-operation'),
      value: 'Tipo de operación'
    },
    {
      label: t('duration'),
      value: 'duración'
    },
    {
      label: t('clasification'),
      value: 'clasificacion'
    }
  ]
}

```

## src/features/fixed-parameters-guarantees/mocks/stateParameterInitial.ts

```typescript
import dayjs from 'dayjs'

import { IParameterState } from '@/features/fixed-parameters-guarantees/types/newParameterState'

export const initialStateParameter: IParameterState = {
  currentDate: { value: dayjs().format('DD/MM/YYYY') },
  typeParam: undefined,
  paramPercentage: { value: undefined },
  country: undefined,
  condition: undefined,
  typeCondition: undefined,
  typeCondition2: undefined,
  condition2: undefined
}

```

## src/features/fixed-parameters-guarantees/pages/FixedParametersGuarantees.tsx

```tsx
import { ContentWrapper } from 'remoteUtilities/components-mf-utilities'

import TableWithFilter from '@/features/fixed-parameters-guarantees/components/TableWithFilter'

import { useTranslate } from '@/shared/hooks/useTranslate'

const FixedParametersGuarantees = () => {
  const t = useTranslate('fixed-parameters')

  return (
    <ContentWrapper title={t('title')}>
      <TableWithFilter />
    </ContentWrapper>
  )
}
export default FixedParametersGuarantees

```

## src/features/fixed-parameters-guarantees/services/disableFixedParams.ts

```typescript
import { httpRiskModelsAdditionalApi } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

export const postDisableFixedParams = async (disableIds: number[]) => {
  const headers = await getHeaders()
  return httpRiskModelsAdditionalApi.post(
    ENDPOINTS.RISK_ADDITIONAL_PARAMETERS_INACTIVE,
    { riskAdditionalIds: disableIds },
    { headers }
  )
}

```

## src/features/fixed-parameters-guarantees/services/getConditionsAdditionalFilter.ts

```typescript
import { httpRiskModelsAdditional } from 'remoteShell/mf-axiosConfig'

import { ConditionResponse } from '@/features/fixed-parameters-guarantees/types/getConditionsAdditionalFilter'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

const getConditionsAdditionalFilter = async (queryParams: {
  page?: number
  size?: number
  sort?: string
  order?: string
  descriptionCondition?: string
  countryId?: number
  conditionTypeId?: number
}) => {
  const headers = await getHeaders()
  const dataRiskAdditional =
    await httpRiskModelsAdditional.get<ConditionResponse>(
      ENDPOINTS.CONDITION_RISK_ADDITIONAL_FILTER,
      {
        headers,
        params: queryParams
      }
    )
  return dataRiskAdditional.data
}

export default getConditionsAdditionalFilter

```

## src/features/fixed-parameters-guarantees/services/getCountriesOptions.ts

```typescript
import { httpRiskModelsAdditional } from 'remoteShell/mf-axiosConfig'

import { Countries } from '@/features/fixed-parameters-guarantees/types/countriesOptions'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

export const getCountriesOptions = async () => {
  const headers = await getHeaders()
  const response = await httpRiskModelsAdditional.get<Countries>(
    ENDPOINTS.COUNTRY,
    {
      headers
    }
  )
  return response.data
}

```

## src/features/fixed-parameters-guarantees/services/getDataAdditionalParameters.ts

```typescript
import { httpRiskModelsAdditional } from 'remoteShell/mf-axiosConfig'

import {
  QueryParamsParameter,
  ResponseServiceParams
} from '@/features/fixed-parameters-guarantees/types/dataAdditionalParameter'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

export const serviceGetDataAdditionalParameter = async (
  queryParams?: QueryParamsParameter
) => {
  const headers = await getHeaders()
  const response = await httpRiskModelsAdditional.get<ResponseServiceParams>(
    ENDPOINTS.RISK_ADDITIONAL_PARAMETERS,
    {
      headers,
      params: queryParams
    }
  )
  return response.data
}

```

## src/features/fixed-parameters-guarantees/services/getOptionParams.ts

```typescript
import { httpRiskModelsAdditional } from 'remoteShell/mf-axiosConfig'

import { ResponseServiceOptions } from '@/features/fixed-parameters-guarantees/types/ResponserServiceOptions'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

export const serviceGetOptionParams = async () => {
  const headers = await getHeaders()
  const response = await httpRiskModelsAdditional.get<ResponseServiceOptions>(
    ENDPOINTS.PARAMETERS_MODEL_RISK,
    {
      headers
    }
  )
  return response.data
}

```

## src/features/fixed-parameters-guarantees/services/getOptionStatus.ts

```typescript
import { httpRiskModelsAdditional } from 'remoteShell/mf-axiosConfig'

import { ResponseServiceOptions } from '@/features/fixed-parameters-guarantees/types/ResponserServiceOptions'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

export const serviceGetOptionStatus = async () => {
  const headers = await getHeaders()
  const response = await httpRiskModelsAdditional.get<ResponseServiceOptions>(
    ENDPOINTS.STATUS_GUARANTEES,
    {
      headers
    }
  )
  return response.data
}

```

## src/features/fixed-parameters-guarantees/services/getParametersModelRisk.ts

```typescript
import { httpRiskModelsAdditional } from 'remoteShell/mf-axiosConfig'

import { ResponseServiceOptions } from '@/features/fixed-parameters-guarantees/types/ResponserServiceOptions'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

const getParametersModelRisk = async () => {
  const headers = await getHeaders()
  const dataModelRisk =
    await httpRiskModelsAdditional.get<ResponseServiceOptions>(
      ENDPOINTS.PARAMETERS_MODEL_RISK,
      {
        headers
      }
    )
  return dataModelRisk.data
}

export default getParametersModelRisk

```

## src/features/fixed-parameters-guarantees/services/getSelfLiberation.ts

```typescript
import { httpGuaranteesRegister } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

export const getSelfLiberationServer = async ({
  accountTypeId
}: {
  accountTypeId: number
}) => {
  const headers = await getHeaders()
  const getData = await httpGuaranteesRegister.get<SelfLiberation>(
    ENDPOINTS.GUARANTEES_SELF_RELEASE_REGISTER,
    { headers, params: { accountTypeId } }
  )
  return getData.data
}

```

## src/features/fixed-parameters-guarantees/services/getTrackingGuarantees.ts

```typescript
import { httpRiskModelsAdditional } from 'remoteShell/mf-axiosConfig'

import { ResponseServiceTracking } from '@/features/fixed-parameters-guarantees/types/responseServiceTracking'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

export const serviceGetTrackingInfo = async (id?: number) => {
  const headers = await getHeaders()
  const response = await httpRiskModelsAdditional.get<ResponseServiceTracking>(
    `${ENDPOINTS.RISK_ADDITIONAL_PARAMETERS_STATUS_HISTORY_TRACKING}/${id}`,
    {
      headers
    }
  )
  return response.data
}

```

## src/features/fixed-parameters-guarantees/services/getTypeCondition.ts

```typescript
import { httpRiskModelsAdditional } from 'remoteShell/mf-axiosConfig'

import { ResponseServiceOptions } from '@/features/fixed-parameters-guarantees/types/ResponserServiceOptions'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

const getTypeCondition = async () => {
  const headers = await getHeaders()
  const dataModelRisk =
    await httpRiskModelsAdditional.get<ResponseServiceOptions>(
      ENDPOINTS.CONDITION_MODEL_RISK,
      {
        headers
      }
    )
  return dataModelRisk.data
}

export default getTypeCondition

```

## src/features/fixed-parameters-guarantees/services/newFixedParams.ts

```typescript
import { httpRiskModelsAdditionalApi } from 'remoteShell/mf-axiosConfig'

import { IParameterState } from '@/features/fixed-parameters-guarantees/types/newParameterState'
import {
  ErrorResponseNewFixedParams,
  SuccessResponseNewFixedParams
} from '@/features/fixed-parameters-guarantees/types/postNewFixedParamsService'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

export const postNewFixedParamsService = async (
  newParamater: IParameterState
) => {
  const headers = await getHeaders()
  return await httpRiskModelsAdditionalApi.post<
    SuccessResponseNewFixedParams,
    ErrorResponseNewFixedParams
  >(
    ENDPOINTS.RISK_ADDITIONAL_PARAMETERS_REGISTER,
    {
      countryId: newParamater.country?.value,
      paramTypeId: newParamater.typeParam?.value,
      paramPercentage: newParamater.paramPercentage?.value,
      oneConditionTypeId: newParamater.typeCondition?.value,
      oneConditionId: newParamater.condition?.value,
      oneConditionDetail: newParamater.condition?.label,
      twoConditionTypeId: newParamater.typeCondition2?.value,
      twoConditionId: newParamater.condition2?.value,
      twoConditionDetail: newParamater.condition2?.label
    },
    { headers }
  )
}

```

## src/features/fixed-parameters-guarantees/services/postGenerateReport.ts

```typescript
import { httpRiskModelsReports } from 'remoteShell/mf-axiosConfig'

import { GenerateReports } from '@/features/fixed-parameters-guarantees/types/dataGenerateReport'
import { FiltersTableState } from '@/features/fixed-parameters-guarantees/types/filtersTableState'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

export const downloadReport = async (queryParams?: FiltersTableState) => {
  const headers = await getHeaders()
  const data = await httpRiskModelsReports.post<GenerateReports>(
    ENDPOINTS.REPORTS_RISK_ADDITIONAL_PARAMETERS,
    {},
    {
      headers,
      params: {
        dateRegistration: queryParams?.date,
        paramTypeId: queryParams?.params,
        statusId: queryParams?.status
      }
    }
  )
  return data.data
}

```

## src/features/fixed-parameters-guarantees/types/Options.d.ts

```typescript
export type Options = { value: string; label: string }[]

```

## src/features/fixed-parameters-guarantees/types/ResponserServiceOptions.d.ts

```typescript
export type ResponseServiceOptions = {
  id: number
  detail: string
}[]

export interface DataAdditionalServices {}

```

## src/features/fixed-parameters-guarantees/types/addaptDataParameter.d.ts

```typescript
export interface ParameterRow {
  id?: number
  dateOfAdmission?: string
  country?: string
  typeOfParameters?: string
  percentageParameters?: string
  'typeCondition-1'?: string
  'condition-1'?: string
  'typeCondition-2'?: string
  'condition-2'?: string
  state?: string
  'follow-up'?: string
}

```

## src/features/fixed-parameters-guarantees/types/countriesOptions.d.ts

```typescript
interface Country {
  id: number
  code: string
  name: string
}
export type Countries = Country[]

```

## src/features/fixed-parameters-guarantees/types/dataAdditionalParameter.d.ts

```typescript
export interface QueryParamsParameter {
  page?: number
  size?: number
  sort?: string
  order?: string
  dateRegistration?: string
  paramTypeId?: string
  statusId?: string
}

interface Country {
  id: number
  code: string
  name: string
}

interface ParamType {
  id: number
  detail: string
}

interface ConditionType {
  id: number
  detail: string
}

interface Status {
  id: number
  detail: string
}

interface ContentItem {
  id: number
  dateRegistration: string
  country: Country
  paramType: ParamType
  paramPercentage: number
  oneConditionType: ConditionType
  oneConditionId: number
  oneConditionDetail: string
  twoConditionType: ConditionType
  twoConditionId: number
  twoConditionDetail: string
  status: Status
}

export interface ResponseServiceParams {
  content: ContentItem[]
  pageSize: number
  pageNumber: number
  totalElements: number
  totalPages: number
}

```

## src/features/fixed-parameters-guarantees/types/dataGenerateReport.d.ts

```typescript
interface GenerateReport {
  dateRegistration: string
  countryName: string
  paramTypeDetail: string
  paramPercentage: string
  oneConditionTypeDetail: string
  oneConditionDetail: string
  twoConditionTypeDetail: string
  twoConditionDetail: string
  statusDetail: string
}
export type GenerateReports = GenerateReport[]

```

## src/features/fixed-parameters-guarantees/types/excel.d.ts

```typescript
import { GenerateReports } from './dataGenerateReport'

export type GenerateTxtReport = {
  data: GenerateReports
  name?: string
}

```

## src/features/fixed-parameters-guarantees/types/filtersTableState.d.ts

```typescript
export interface FiltersTableState {
  status?: { label: string; value: string }
  params?: { label: string; value: string }
  date?: string
}

```

## src/features/fixed-parameters-guarantees/types/getConditionsAdditionalFilter.d.ts

```typescript
export interface Condition {
  id: number
  descriptionCondition: string
}

export interface ConditionResponse {
  content: Condition[]
  pageSize: number
  pageNumber: number
  totalElements: number
  totalPages: number
}

```

## src/features/fixed-parameters-guarantees/types/getSelfLiberation.d.ts

```typescript
interface SelfLiberation {
  blockedCheckbox?: boolean
  guaranteeSelfRelease?: boolean
}

```

## src/features/fixed-parameters-guarantees/types/newParameterState.d.ts

```typescript
export interface IParameterState {
  country?: { value?: string; label: string }
  currentDate?: { value?: string }
  typeParam?: { value?: string; label: string }
  condition?: { value?: string; label: string }
  typeCondition?: { value?: string; label: string }
  condition2?: { value?: string; label: string }
  typeCondition2?: { value?: string; label: string }
  paramPercentage?: { value?: string }
}

```

## src/features/fixed-parameters-guarantees/types/postNewFixedParamsService.d.ts

```typescript
export interface ErrorResponseNewFixedParams {
  httpCode: string
  httpMethod: string
  url: string
  timestamp: string
  errorCode: string
  errorMessage: string
  errorMessageDetail: string
}
export interface SuccessResponseNewFixedParams {
  countryId: number
  paramTypeId: number
  paramPercentage: number
  oneConditionTypeId: number
  oneConditionId: number
  oneConditionDetail: string
  twoConditionTypeId: number
  twoConditionId: number
  twoConditionDetail: string
}

```

## src/features/fixed-parameters-guarantees/types/responseServiceTracking.d.ts

```typescript
export interface Status {
  id: number
  detail: string
}

export interface ParamType {
  id: number
  detail: string
}

export interface RiskModelParamsStatusHistory {
  id: number
  time: string
  status: Status
}

export interface ResponseServiceTracking {
  riskAdditionalId: number
  registrationDate: string
  paramType: ParamType
  riskModelParamsStatusHistory: RiskModelParamsStatusHistory[]
}

```

## src/features/fixed-parameters-guarantees/types/transformDataConditions.d.ts

```typescript
import { AutocompleteOption } from '@/shared/types/AutoCompleteOption'

export interface DataOptionsComplete {
  data: AutocompleteOption[]
  total: number
}

```

## src/features/fixed-parameters-guarantees/types/transformTracking.d.ts

```typescript
export type AdaptTrackingData = {
  id: number
  eventDate: string
  eventTime: string
  status: string
}[]

```

## src/features/fixed-parameters-guarantees/types/useActionCalculateValuation.d.ts

```typescript
import { ModalAlertState } from '@/shared/types/ModalAlertProps'
import { ToastState } from '@/shared/types/ToastState'
import { DispatchStateCommon } from '@/shared/types/dispatchStateCommon'

export interface useActionCalculateValuationProps {
  selectCheckTable: number[]
  setModalAlert: DispatchStateCommon<ModalAlertState | undefined>
  setToast: DispatchStateCommon<ToastState | undefined>
  onRefreshTable: () => void
}

```

## src/features/fixed-parameters-guarantees/utils/generateCSV.ts

```typescript
import { EXCEL_HEADERS } from '@/features/fixed-parameters-guarantees/constants/excel'
import { GenerateTxtReport } from '@/features/fixed-parameters-guarantees/types/excel'

export const generateCSVReport = async ({ data, name }: GenerateTxtReport) => {
  const reports: string[] = []
  const headers = EXCEL_HEADERS.join(',')
  reports.push(headers)
  const setData = new Set(data)
  setData.forEach((i) => {
    const {
      dateRegistration,
      countryName,
      paramTypeDetail,
      paramPercentage,
      oneConditionTypeDetail,
      oneConditionDetail,
      twoConditionTypeDetail,
      twoConditionDetail,
      statusDetail
    } = i
    const item = [
      dateRegistration,
      countryName,
      paramTypeDetail,
      paramPercentage,
      oneConditionTypeDetail,
      oneConditionDetail,
      twoConditionTypeDetail,
      twoConditionDetail,
      statusDetail
    ].join(',')
    reports.push(item)
  })

  const finalContent = reports.join('\n')
  const nameEntity = (name ?? 'default_name').replace(/\s+/g, '_')
  const fileName = `${nameEntity}.csv`
  const bom = new Uint8Array([0xef, 0xbb, 0xbf])
  const blob = new Blob([bom, finalContent], { type: 'text/csv;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = fileName
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

```

## src/features/fixed-parameters-guarantees/utils/transformDataConditions.ts

```typescript
import { ConditionResponse } from '@/features/fixed-parameters-guarantees/types/getConditionsAdditionalFilter'
import { DataOptionsComplete } from '@/features/fixed-parameters-guarantees/types/transformDataConditions'

import { AutocompleteOption } from '@/shared/types/AutoCompleteOption'

export const transformDataConditions = (data: ConditionResponse) => {
  const transformData: AutocompleteOption[] = data.content.map((item) => ({
    id: item.id,
    label: item.descriptionCondition
  }))
  return {
    data: transformData,
    total: data.totalPages
  } as DataOptionsComplete
}

```

## src/features/fixed-parameters-guarantees/utils/transformDataCountries.ts

```typescript
import { Countries } from '@/features/fixed-parameters-guarantees/types/countriesOptions'

export const transformDataCountriesOptions = (params: Countries) =>
  params.map((item) => ({
    value: item.id.toString(),
    label: item.code
  }))

```

## src/features/fixed-parameters-guarantees/utils/transformDataParameters.ts

```typescript
import { ParameterRow } from '@/features/fixed-parameters-guarantees/types/addaptDataParameter'
import { ResponseServiceParams } from '@/features/fixed-parameters-guarantees/types/dataAdditionalParameter'

export const transformDataParameters = (
  data: ResponseServiceParams['content']
): ParameterRow[] => {
  return data.map((item) => ({
    id: item?.id,
    dateOfAdmission: item?.dateRegistration,
    country: item?.country?.name,
    typeOfParameters: item?.paramType?.detail,
    percentageParameters: item?.paramPercentage.toString(),
    'typeCondition-1': item?.oneConditionType?.detail,
    'condition-1': item?.oneConditionDetail,
    'typeCondition-2': item?.twoConditionType?.detail,
    'condition-2': item?.twoConditionDetail,
    'follow-up': item?.status?.detail,
    state: item?.status.detail
  }))
}

```

## src/features/fixed-parameters-guarantees/utils/transformOptions.ts

```typescript
import { ResponseServiceOptions } from '@/features/fixed-parameters-guarantees/types/ResponserServiceOptions'

export const transformOptions = (params: ResponseServiceOptions) =>
  params.map((item) => ({
    value: item.id.toString(),
    label: item.detail
  }))

```

## src/features/fixed-parameters-guarantees/utils/transformTrackingData.ts

```typescript
import dayjs from 'dayjs'

import { ResponseServiceTracking } from '@/features/fixed-parameters-guarantees/types/responseServiceTracking'
import { AdaptTrackingData } from '@/features/fixed-parameters-guarantees/types/transformTracking'

export const transformTrackingData = (
  data: ResponseServiceTracking
): AdaptTrackingData =>
  data.riskModelParamsStatusHistory.map((item) => {
    const date = dayjs(item.time)
    return {
      id: item.id,
      status: item.status.detail,
      eventDate: date.format('DD/MM/YYYY'),
      eventTime: date.format('HH:mm')
    }
  })

```

## src/features/fixed-parameters-guarantees/workers/validateSelectDataInactiveWorker.ts

```typescript
import { ParameterRow } from '@/features/fixed-parameters-guarantees/types/addaptDataParameter'

self.onmessage = function (e: {
  data: { selectCheckTable: number[]; dataTable: ParameterRow[] }
}) {
  const { selectCheckTable, dataTable } = e.data
  const validateSelectDataInactive = selectCheckTable.some((itemSelected) => {
    const finData = dataTable.find((data) => data.id === itemSelected)
    return finData?.state === 'Inactivo'
  })
  self.postMessage({ result: validateSelectDataInactive })
}

```

## src/features/guarantee-administration/components/AdministrationFilters.tsx

```tsx
import {
  FilterBar,
  useUrlParams
} from 'remoteUtilities/components-mf-utilities'

import { getTypeAccountOptions } from '@/features/view-guarantees/services/getTypeAccount'

import { GuaranteeAccountSearch } from '@/shared/types/GuaranteeAccount'
import { transformOptionsAutoComplete } from '@/shared/utils/transformOptionsAutoComplete'

import { URL_KEYS } from '../constants/urlKeys'
import { getAdminInvestorsGuarantees } from '../services/getAdminInvestorsGuarantees'
import { getAdminParticipantGuarantees } from '../services/getAdminParticipantGuarantees'
import { getAllStatusAdmin } from '../services/getAllStatusAdmin'
import { getCountryAdministration } from '../services/getCountryAdministration'
import { getGuaranteeAccountFilters } from '../services/getGuaranteeAccountOptions'

const fetchCountryOptions = async () => {
  const countries = await getCountryAdministration()
  return countries.map((country) => ({ id: country.id, name: country.name }))
}

const fetchStatusOptions = async () => {
  const statuses = await getAllStatusAdmin()
  return statuses.map((status) => ({
    id: status.id,
    name: status.description
  }))
}

const fetchTypeAccountOptions = async () => {
  const typeAccounts = await getTypeAccountOptions()
  return typeAccounts.map((account) => ({
    id: account.id,
    name: account.detail
  }))
}

const fetchParticipantOptions = async (query?: string) => {
  const response = await getAdminParticipantGuarantees(0, 10, query)
  return {
    data: response.content.map(
      (item: { id: number; shortName: string; code: string }) => ({
        ...item,
        label: `${item.code} - ${item.shortName}`
      })
    ),
    total: response.totalElements
  }
}

const fetchInvestorOptions = async (query?: string) => {
  const response = await getAdminInvestorsGuarantees(0, 10, query)
  return {
    data: response.content.map(
      (item: {
        id: number
        firstName: string
        lastName: string
        documentNumber: string
      }) => ({
        ...item,
        label: `${item.documentNumber} - ${item.firstName} ${item.lastName}`
      })
    ),
    total: response.totalElements
  }
}

export const AdministrationFilters = () => {
  const { getParam, updateParam } = useUrlParams()

  const fetchAccountOptions = async (query?: string) => {
    const accountTypeId = getParam(URL_KEYS.TYPE_ACCOUNT_ID)
    if (!accountTypeId) {
      return { data: [], total: 0 }
    }

    const response = await getGuaranteeAccountFilters({
      page: 0,
      size: '10',
      text: query,
      accountTypeId: Number(accountTypeId)
    })
    return transformOptionsAutoComplete(response, (item) => ({
      id: item.consecutiveId,
      label: item.fullName,
      ...item
    }))
  }

  const handleAccountChange = (
    _name: string,
    item: GuaranteeAccountSearch | null
  ) => {
    if (!item) {
      updateParam(URL_KEYS.GUARANTEES_GLOBAL_ACCOUNT_ID, null)
      updateParam(URL_KEYS.GUARANTEES_PARTICULAR_ACCOUNT_ID, null)
      return
    }

    if (item.guaranteeGlobalAccountId) {
      updateParam(
        URL_KEYS.GUARANTEES_GLOBAL_ACCOUNT_ID,
        item.guaranteeGlobalAccountId
      )
      updateParam(URL_KEYS.GUARANTEES_PARTICULAR_ACCOUNT_ID, null)
    } else {
      updateParam(
        URL_KEYS.GUARANTEES_PARTICULAR_ACCOUNT_ID,
        item.guaranteeParticularAccountId
      )
      updateParam(URL_KEYS.GUARANTEES_GLOBAL_ACCOUNT_ID, null)
    }
  }

  return (
    <FilterBar
      config={[
        {
          name: URL_KEYS.COUNTRY_ID,
          label: 'País',
          type: 'select',
          loadOptions: fetchCountryOptions
        },
        {
          name: URL_KEYS.PARTICIPANT_ID,
          label: 'Participante',
          type: 'autocomplete',
          fetchOptions: fetchParticipantOptions
        },
        {
          name: URL_KEYS.INVESTOR_ID,
          label: 'Beneficiario Final',
          type: 'autocomplete',
          fetchOptions: fetchInvestorOptions
        },
        {
          name: URL_KEYS.TYPE_ACCOUNT_ID,
          label: 'Tipo de cuenta',
          type: 'select',
          loadOptions: fetchTypeAccountOptions
        },
        {
          name: 'guaranteeAccount',
          label: 'Cuenta Garantía',
          type: 'autocomplete',
          fetchOptions: fetchAccountOptions,
          onChange: handleAccountChange
        },
        {
          name: URL_KEYS.STATUS_ID,
          label: 'Estado',
          type: 'select',
          loadOptions: fetchStatusOptions
        }
      ]}
      className="mb-6 mt-4 flex w-full flex-wrap justify-between gap-4"
    />
  )
}

```

## src/features/guarantee-administration/constants/urlKeys.ts

```typescript
export const URL_KEYS = {
  GUARANTEES_GLOBAL_ACCOUNT_ID: 'guaranteeGlobalAccountId',
  GUARANTEES_PARTICULAR_ACCOUNT_ID: 'guaranteeParticularAccountId',
  PARTICIPANT_ID: 'participantId',
  INVESTOR_ID: 'investorId',
  COUNTRY_ID: 'countryId',
  STATUS_ID: 'statusId',
  GUARANTEE_ID: 'guaranteeId',
  TYPE_ACCOUNT_ID: 'accountTypeId'
}

```

## src/features/guarantee-administration/pages/GuaranteeAdministration.tsx

```tsx
import { Button } from '@nuam/common-fe-lib-components'
import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { useScreenActions } from 'remoteShell/mf-shell-useScreenActions'
import { RootState } from 'remoteShell/mf-store'
import {
  ContentWrapper,
  NewTable,
  Spinner,
  useFilteredEndpoint
} from 'remoteUtilities/components-mf-utilities'

import { AdministrationFilters } from '@/features/guarantee-administration/components/AdministrationFilters'
import { URL_KEYS } from '@/features/guarantee-administration/constants/urlKeys'
import { columns } from '@/features/guarantee-administration/utils/columns'

import { GUARANTEE_ADMINISTRATION_ACTIONS } from '@/shared/constants/actionCodes'
import { ENDPOINTS } from '@/shared/constants/endpoints'
import { USER_TYPE } from '@/shared/constants/userType'
import { SUBROUTES } from '@/shared/routes'

const GuaranteeAdministration = () => {
  const [rows, setRows] = useState([])
  const navigate = useNavigate()
  const { endpoint: filteredEndpoint } = useFilteredEndpoint(
    ENDPOINTS.GUARANTEES_ADMIN_SEARCH
  )
  const { userType, participantId } = useSelector(
    (state: RootState) =>
      state.auth.infoUserNubo?.[0] || state.auth.infoUserNubo
  )

  const endpoint = useMemo(() => {
    if (userType === USER_TYPE.EXTERNAL && participantId) {
      const [path, query = ''] = filteredEndpoint.split('?')
      const params = new URLSearchParams(query)
      params.set(URL_KEYS.PARTICIPANT_ID, participantId)
      return `${path}?${params.toString()}`
    }
    if (userType === USER_TYPE.INTERNAL) {
      return filteredEndpoint
    }
    return undefined
  }, [filteredEndpoint, userType, participantId])

  const setDataRemote = (_page: number, dataTable: []) => {
    setRows(dataTable)
  }
  const { hasAction } = useScreenActions()
  const { canViewAccountManagerBtn, canViewReportsBtn, canViewSchedulesBtn } =
    useMemo(
      () => ({
        canViewBtnOperations: hasAction(
          GUARANTEE_ADMINISTRATION_ACTIONS.OPERATIONS
        ),
        canViewAccountManagerBtn: hasAction(
          GUARANTEE_ADMINISTRATION_ACTIONS.ACCOUNT_MANAGER
        ),
        canViewGuaranteesBtn: hasAction(
          GUARANTEE_ADMINISTRATION_ACTIONS.GUARANTEES
        ),
        canViewParamsBtn: hasAction(GUARANTEE_ADMINISTRATION_ACTIONS.PARAMS),
        canViewReportsBtn: hasAction(GUARANTEE_ADMINISTRATION_ACTIONS.REPORTS),
        canViewSchedulesBtn: hasAction(
          GUARANTEE_ADMINISTRATION_ACTIONS.SCHEDULES
        )
      }),
      [hasAction]
    )

  const headerActionsLeft = () => (
    <div className="flex items-center gap-[18px] py-1">
      {/* SE COMENTA YA QUE POR TRANSFORMACIÓN DIGITAL SE SOLICITO, ESTAS OPCIONES ESTANDO EN EL MENU
       YA NO DEBERÍAN DE ESTAR ACÁ, NO SE BORRAN DEL TODO POR SI DEPRONTO ALGUIEN AL NOTARLO DICE LO CONTRARIO */}

      {/* {canViewBtnOperations && (
        <Button
          size="small"
          variant="text"
          onClick={() => navigate(SUBROUTES.VIEW_OPERATIONS_GUARANTEES)}
          className="gap-0 text-[13px] font-medium uppercase"
        >
          Operaciones
        </Button>
      )}
      {canViewGuaranteesBtn && (
        <Button
          size="small"
          variant="text"
          onClick={() => navigate(`/${ROUTES.GUARANTEES_MANAGEMENT}`)}
          className="gap-0 text-[13px] font-medium uppercase"
        >
          Garantías
        </Button>
      )}
      {canViewParamsBtn && (
        <Button
          size="small"
          variant="text"
          onClick={() => navigate(SUBROUTES.FIXED_PARAMETERS_GUARANTEES)}
          className="gap-0 text-[13px] font-medium uppercase"
        >
          Parámetros
        </Button>
      )}
      <Button
        size="small"
        variant="text"
        onClick={() => navigate(SUBROUTES.CONCILIATION_GUARANTEES)}
        className="gap-0 text-[13px] font-medium uppercase"
      >
        Conciliaciones
      </Button> */}
      {!canViewSchedulesBtn && (
        <Button
          size="small"
          variant="text"
          onClick={() => {}}
          className="gap-0 text-[13px] font-medium uppercase"
        >
          Horarios
        </Button>
      )}
      {!canViewReportsBtn && (
        <Button
          size="small"
          variant="text"
          onClick={() => {}}
          className="gap-0 text-[13px] font-medium uppercase"
        >
          Reportes
        </Button>
      )}
      {!canViewAccountManagerBtn && (
        <Button
          size="small"
          variant="text"
          onClick={() => navigate(SUBROUTES.ACCOUNT_MANAGEMENT)}
          className="gap-0 text-[13px] font-medium uppercase"
        >
          Mantenedor de Cuentas
        </Button>
      )}
    </div>
  )

  return (
    <ContentWrapper title="Administración de garantías">
      <AdministrationFilters />
      {endpoint ? (
        <NewTable
          columns={columns()}
          setDataRemote={setDataRemote}
          rows={rows}
          endpoint={endpoint}
          axiosInstanceKey="httpAdminGuarantees"
          checkboxSelection={false}
          customToolbar={headerActionsLeft()}
        />
      ) : (
        <Spinner />
      )}
    </ContentWrapper>
  )
}

export default GuaranteeAdministration

```

## src/features/guarantee-administration/services/getAdminInvestorsGuarantees.ts

```typescript
import { httpAdminGuarantees } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'
import isDevMode from '@/shared/utils/isDevMode'

export const getAdminInvestorsGuarantees = async (
  page: number,
  size: number,
  investorIdentificationName: string | undefined
) => {
  try {
    const headers = await getHeaders()
    const response = await httpAdminGuarantees.get(
      ENDPOINTS.INVESTOR_GUARANTEES,
      {
        headers,
        params: {
          text: investorIdentificationName,
          page,
          size
        }
      }
    )
    return response.data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error fetching investors guarantees:', error)
    }
    throw error
  }
}

```

## src/features/guarantee-administration/services/getAdminParticipantGuarantees.ts

```typescript
import { httpAdminGuarantees } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'
import isDevMode from '@/shared/utils/isDevMode'

export const getAdminParticipantGuarantees = async (
  page: number,
  size: number,
  participantCodeName: string | undefined
) => {
  try {
    const headers = await getHeaders()
    const response = await httpAdminGuarantees.get(
      ENDPOINTS.PARTICIPANT_GUARANTEES,
      {
        headers,
        params: {
          text: participantCodeName,
          page,
          size
        }
      }
    )
    return response.data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error fetching participants guarantees:', error)
    }
    throw error
  }
}

```

## src/features/guarantee-administration/services/getAllStatusAdmin.ts

```typescript
import { httpAdminGuarantees } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'
import isDevMode from '@/shared/utils/isDevMode'

import { StateOptions } from '../types/state'

export const getAllStatusAdmin = async () => {
  try {
    const headers = await getHeaders()
    const response = await httpAdminGuarantees.get<StateOptions>(
      ENDPOINTS.STATUS,
      {
        headers
      }
    )
    return response.data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error fetching all status:', error)
    }
    throw error
  }
}

```

## src/features/guarantee-administration/services/getCountryAdministration.ts

```typescript
import { httpAdminGuarantees } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'
import isDevMode from '@/shared/utils/isDevMode'

import { CountryOptions } from '../types/country'

export const getCountryAdministration = async () => {
  try {
    const headers = await getHeaders()
    const response = await httpAdminGuarantees.get<CountryOptions>(
      ENDPOINTS.COUNTRY,
      {
        headers
      }
    )
    return response.data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error fetching guarantee countries:', error)
    }
    throw error
  }
}

```

## src/features/guarantee-administration/services/getGuaranteeAccountOptions.ts

```typescript
import { httpAdminGuarantees } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import {
  GuaranteeAccountFilterParams,
  ServiceGuaranteeAccountSearch
} from '@/shared/types/GuaranteeAccount'
import { getHeaders } from '@/shared/utils/getHeaders'
import isDevMode from '@/shared/utils/isDevMode'

export const getGuaranteeAccountFilters = async (
  params: GuaranteeAccountFilterParams
) => {
  try {
    const headers = await getHeaders()
    const response =
      await httpAdminGuarantees.get<ServiceGuaranteeAccountSearch>(
        ENDPOINTS.GUARANTEE_ACCOUNT_SEARCH,
        {
          headers,
          params
        }
      )
    return response.data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error fetching guarantee accounts:', error)
    }
    throw error
  }
}

```

## src/features/guarantee-administration/services/getGuaranteesAdminAccount.ts

```typescript
import { httpAdminGuarantees } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'
import isDevMode from '@/shared/utils/isDevMode'

export const getGuaranteesAdminAccount = async () => {
  try {
    const headers = await getHeaders()
    const response = await httpAdminGuarantees.get(
      ENDPOINTS.GUARANTEE_ACCOUNT,
      {
        headers
      }
    )
    return response.data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error fetching guarantee accounts:', error)
    }
    throw error
  }
}

```

## src/features/guarantee-administration/services/getGuaranteesAdminSpecificAccount.ts

```typescript
import { httpAdminGuarantees } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'
import isDevMode from '@/shared/utils/isDevMode'

export const getGuaranteesAdminSpecificAccount = async (
  page: number,
  size: number,
  specificAccount: string | undefined
) => {
  try {
    const headers = await getHeaders()
    const response = await httpAdminGuarantees.get(
      ENDPOINTS.GUARANTEES_SEARCH_BY_SPECIFIC_ACCOUNT,
      {
        headers,
        params: {
          specificAccount,
          page,
          size
        }
      }
    )
    return response.data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error fetching investors guarantees:', error)
    }
    throw error
  }
}

```

## src/features/guarantee-administration/types/administration.d.ts

```typescript
export interface IAdminGuarantees {
  id: number
  country: Country
  participant: Participant
  custodian: Participant
  investor: Investor
  guaranteeAccount: GuaranteeAccount
  specificAccount: string
  guaranteeValuation: GuaranteeValuation
  guaranteeIntegerTotal: number
  guaranteeExigencyTotal: number
  status: Status
  position: number
  guaranteeAccountDescription: string
  guaranteeType: { detail: string }
  accountType: {
    category: string | null
    description: string | null
    detail: string
    id: number
  }
  limitRV: number
  limitDP: number
  limitPR: number
  limitEF: number
  limitIF: number
}

export interface Country {
  id: number
  name: Name
  code: Code
}

export enum Code {
  Cl = 'CL',
  Co = 'CO'
}

export enum Name {
  Chile = 'CHILE',
  Colombia = 'COLOMBIA'
}

export interface GuaranteeAccount {
  id: number
  code: number
  name: string
}

export interface GuaranteeValuation {
  guaranteeInteger: number
}

export interface Investor {
  id: number
  firstName: string
  lastName: string
  documentNumber: string
  identificationType: null
  companyName: string
  fullName: string
}

export interface Participant {
  id: number
  code: string
  codeAndName: string
  documentNumber: string
  name: string
  shortName: string
}

export interface Status {
  id: number
  description: Description
  category: Category
  detail: Detail
}

export enum Category {
  Garantia = 'GARANTIA'
}

export enum Description {
  Registrada = 'REGISTRADA'
}

export enum Detail {
  GarantíaRegistrada = 'Garantía registrada'
}

```

## src/features/guarantee-administration/types/country.d.ts

```typescript
export interface CountryOption {
  code: string
  id: number
  name: string
}

export type CountryOptions = CountryOption[]

```

## src/features/guarantee-administration/types/state.d.ts

```typescript
export interface StateOption {
  category: string
  description: string
  detail?: string
  id: number
}
export type StateOptions = StateOption[]

```

## src/features/guarantee-administration/utils/columns.tsx

```tsx
import { GridRenderCellParams } from '@mui/x-data-grid'
import { DefaultComponents } from '@nuam/common-fe-lib-components'

import { IAdminGuarantees } from '@/features/guarantee-administration/types/administration'

import { formatNumberWithThousandsSeparator } from '@/shared/utils/formatNumberWithThousandsSeparator'

export const columns = () => {
  return [
    {
      flex: 1,
      minWidth: 50,
      field: 'countryCode',
      headerName: 'País',
      valueGetter: (_: GridRenderCellParams, data: IAdminGuarantees) =>
        data?.country?.code,
      renderCell: ({ row }: { row: IAdminGuarantees }) => (
        <div className="flex h-full w-full items-center justify-start gap-1">
          <p className="w-full">{row?.country?.code ?? '-'}</p>
        </div>
      )
    },
    {
      flex: 1,
      minWidth: 150,
      field: 'participantCodeAndName',
      headerName: 'Participante',
      valueGetter: (_: GridRenderCellParams, data: IAdminGuarantees) =>
        data?.participant?.codeAndName,
      renderCell: ({ row }: { row: IAdminGuarantees }) => (
        <div className="flex h-full w-full items-center justify-start gap-1">
          <p className="w-full">{row?.participant?.codeAndName ?? '-'}</p>
        </div>
      )
    },
    {
      flex: 1,
      minWidth: 150,
      field: 'custodianCodeAndName',
      headerName: 'Custodio',
      valueGetter: (_: GridRenderCellParams, data: IAdminGuarantees) =>
        data?.custodian?.codeAndName,
      renderCell: ({ row }: { row: IAdminGuarantees }) => (
        <div className="flex h-full w-full items-center justify-start gap-1">
          <p className="w-full">{row?.custodian?.codeAndName ?? '-'}</p>
        </div>
      )
    },
    {
      flex: 1,
      minWidth: 230,
      field: 'investorFullName',
      headerName: 'Beneficiario final',
      valueGetter: (_: GridRenderCellParams, data: IAdminGuarantees) =>
        data?.investor?.fullName,
      renderCell: ({ row }: { row: IAdminGuarantees }) => (
        <div className="flex h-full w-full items-center justify-start gap-1">
          {row?.investor?.fullName || '-'}
        </div>
      )
    },
    {
      flex: 1,
      minWidth: 230,
      field: 'accountTypeDetail',
      headerName: 'Tipo cuenta',
      valueGetter: (_: GridRenderCellParams, data: IAdminGuarantees) =>
        data?.accountType?.detail,
      renderCell: ({ row }: { row: IAdminGuarantees }) => (
        <div className="flex h-full w-full items-center justify-start gap-1">
          {row?.accountType?.detail || '-'}
        </div>
      )
    },
    {
      flex: 1,
      minWidth: 120,
      headerName: 'Cuenta garantía',
      field: 'guaranteeAccountDescription',
      valueGetter: (_: GridRenderCellParams, data: IAdminGuarantees) =>
        data?.guaranteeAccountDescription,
      renderCell: ({ row }: { row: IAdminGuarantees }) => (
        <div className="flex h-full w-full items-center justify-start gap-1">
          <p className="w-full">{row?.guaranteeAccountDescription || '-'}</p>
        </div>
      )
    },
    {
      flex: 1,
      minWidth: 120,
      field: 'position',
      headerName: 'Posición',
      align: 'right',
      valueGetter: (_: GridRenderCellParams, data: IAdminGuarantees) =>
        data?.position,
      renderCell: ({ row }: { row: IAdminGuarantees }) => {
        const isNegative = row?.position < 0
        const formattedPosition =
          formatNumberWithThousandsSeparator(
            Math.abs(row?.position),
            false,
            true
          ) ?? '-'

        return (
          <div className="flex h-full w-full items-center justify-end gap-1">
            <p
              className={`w-full ${isNegative ? 'text-[#B22A09]' : 'text-[#0E9753]'}`}
            >
              {formattedPosition}
            </p>
          </div>
        )
      }
    },
    {
      width: 150,
      minWidth: 140,
      field: 'statusDescription',
      headerName: 'Estado',
      valueGetter: (_: GridRenderCellParams, data: IAdminGuarantees) =>
        data?.status?.description,
      renderCell: ({ row }: { row: IAdminGuarantees }) => {
        const statusDescription = row?.status?.description ?? '-'
        const statusClass =
          String(statusDescription) === 'PENDIENTE'
            ? 'text-[#B22A09]'
            : String(statusDescription) === 'CUBIERTO'
              ? 'text-[#0E9753]'
              : ''
        return (
          <div className="flex h-full w-full items-center justify-start gap-1">
            <p className={`w-full ${statusClass}`}>{statusDescription}</p>
          </div>
        )
      }
    },
    {
      flex: 1,
      minWidth: 120,
      field: 'guaranteeIntegerTotal',
      headerName: 'Entero de garantía',
      align: 'right',
      valueGetter: (_: GridRenderCellParams, data: IAdminGuarantees) =>
        data?.guaranteeIntegerTotal,
      renderCell: ({ row }: { row: IAdminGuarantees }) => (
        <div className="flex h-full w-full items-center justify-end gap-1 text-end">
          <p className="w-full">
            {formatNumberWithThousandsSeparator(
              row?.guaranteeIntegerTotal,
              false,
              true
            ) ?? '-'}
          </p>
        </div>
      )
    },
    {
      flex: 1,
      minWidth: 120,
      field: 'guaranteeExigencyTotal',
      headerName: 'Exigencia garantía',
      align: 'right',
      valueGetter: (_: GridRenderCellParams, data: IAdminGuarantees) =>
        data?.guaranteeExigencyTotal,
      renderCell: ({ row }: { row: IAdminGuarantees }) => (
        <div className="flex h-full w-full items-center justify-end gap-1 text-end">
          <p className="w-full">
            {formatNumberWithThousandsSeparator(
              row?.guaranteeExigencyTotal,
              false,
              true
            ) ?? '-'}
          </p>
        </div>
      )
    },
    {
      flex: 1,
      minWidth: 120,
      field: 'limitRV',
      headerName: 'Limite RV',
      align: 'right',
      renderHeader: () => (
        <DefaultComponents.Tooltip title="Limite renta variable">
          <span className="font-medium">Limite RV</span>
        </DefaultComponents.Tooltip>
      ),
      renderCell: ({ row }: { row: IAdminGuarantees }) => (
        <div className="flex h-full w-full items-center justify-end gap-1 text-end">
          <p className="w-full">
            {formatNumberWithThousandsSeparator(row?.limitRV, false, false) ??
              '-'}
          </p>
        </div>
      )
    },
    {
      flex: 1,
      minWidth: 120,
      field: 'limitDP',
      align: 'right',
      renderHeader: () => (
        <DefaultComponents.Tooltip title="Limite deuda publica">
          <span className="font-medium">Limite DP</span>
        </DefaultComponents.Tooltip>
      ),
      renderCell: ({ row }: { row: IAdminGuarantees }) => (
        <div className="flex h-full w-full items-center justify-end gap-1 text-end">
          <p className="w-full">
            {formatNumberWithThousandsSeparator(row?.limitDP, false, false) ??
              '-'}
          </p>
        </div>
      )
    },
    {
      flex: 1,
      minWidth: 120,
      field: 'limitPR',
      align: 'right',
      renderHeader: () => (
        <DefaultComponents.Tooltip title="Limite deuda privada">
          <span className="font-medium">Limite PR</span>
        </DefaultComponents.Tooltip>
      ),
      renderCell: ({ row }: { row: IAdminGuarantees }) => (
        <div className="flex h-full w-full items-center justify-end gap-1 text-end">
          <p className="w-full">
            {formatNumberWithThousandsSeparator(row?.limitPR, false, false) ??
              '-'}
          </p>
        </div>
      )
    },
    {
      flex: 1,
      minWidth: 120,
      field: 'limitEF',
      align: 'right',
      renderHeader: () => (
        <DefaultComponents.Tooltip title="Limite en Efectivo">
          <span className="font-medium">Limite EF</span>
        </DefaultComponents.Tooltip>
      ),
      renderCell: ({ row }: { row: IAdminGuarantees }) => (
        <div className="flex h-full w-full items-center justify-end gap-1 text-end">
          <p className="w-full">
            {formatNumberWithThousandsSeparator(row?.limitEF, false, false) ??
              '-'}
          </p>
        </div>
      )
    },
    {
      flex: 1,
      minWidth: 120,
      field: 'limitIF',
      align: 'right',
      renderHeader: () => (
        <DefaultComponents.Tooltip title="Limite intermediación financiera">
          <span className="font-medium">Limite IF</span>
        </DefaultComponents.Tooltip>
      ),
      renderCell: ({ row }: { row: IAdminGuarantees }) => (
        <div className="flex h-full w-full items-center justify-end gap-1 text-end">
          <p className="w-full">
            {formatNumberWithThousandsSeparator(row?.limitIF, false, false) ??
              '-'}
          </p>
        </div>
      )
    }
  ]
}

```

## src/features/guarantee-liberation-download/components/FilterBank.tsx

```tsx
import {
  Button,
  // Select,
  Typography
} from '@nuam/common-fe-lib-components'
import { Dispatch, SetStateAction, useState } from 'react'

import { SelectNuam } from 'remoteUtilities/components-mf-utilities'

import useGetOptionsBanks from '../hooks/useGetOptionsBanks'
import { Bank } from '../types/banks'

type BankNull = Bank | null | undefined
interface Props {
  setSelectBank: Dispatch<SetStateAction<BankNull>>
  selectBank?: BankNull
  onRefresh: () => void
}
const FilterBank = ({ setSelectBank, selectBank }: Props) => {
  const { banks } = useGetOptionsBanks()
  const [selectedBank, setSelectedBank] = useState<BankNull>(selectBank)
  const onSearch = () => {
    setSelectBank(selectedBank)
  }
  return (
    <div className="rounded p-6 shadow-grey">
      <div className="flex items-center">
        <Typography
          variant="h5"
          className="w-full max-w-368px text-base font-bold"
        >
          Banco
        </Typography>
        <div className="w-full max-w-80">
          <SelectNuam
            label="Selecciona un Banco"
            labelKey="code"
            valueKey="code"
            options={banks}
            size="small"
            formControlProps={{ fullWidth: true }}
            onChange={(e) => setSelectedBank(e)}
            value={selectedBank || null}
          />
        </div>
        <Button className="ml-6 w-full max-w-44" onClick={onSearch}>
          Buscar
        </Button>
      </div>
    </div>
  )
}

export default FilterBank

```

## src/features/guarantee-liberation-download/components/InformationBank.tsx

```tsx
import { useState } from 'react'

import { ModalAlert, Toast } from 'remoteUtilities/components-mf-utilities'

import notificationsGenerateFile from '../constants/notificationsGenerateFile'
import useGetConnectWebSocket from '../hooks/useGetConnectWebSocket'
import { ModalAlertState, ToastState } from '../types/AlertsState'
import { Bank } from '../types/banks'
import FilterBank from './FilterBank'
import LiberationDownload from './LiberationDownload'
import LiberationGuarantee from './LiberationGuarantee'

const InformationBank = () => {
  const [selectBank, setSelectBank] = useState<Bank | null>()
  const [toastState, setToastState] = useState<null | ToastState>(null)
  const [modalAlert, setModalAlert] = useState<null | ModalAlertState>(null)
  const [refresh, setRefresh] = useState<boolean>(false)
  const onRefresh = () => {
    setRefresh((current) => !current)
  }
  useGetConnectWebSocket({
    onRefresh,
    typeNotifications: notificationsGenerateFile
  })

  return (
    <div>
      <FilterBank
        setSelectBank={setSelectBank}
        selectBank={selectBank}
        onRefresh={onRefresh}
      />
      <LiberationGuarantee
        bank={selectBank}
        setModalAlert={setModalAlert}
        setToastState={setToastState}
        onRefresh={onRefresh}
        refresh={refresh}
      />
      <LiberationDownload
        bank={selectBank}
        setModalAlert={setModalAlert}
        setToastState={setToastState}
        onRefresh={onRefresh}
        refresh={refresh}
      />
      {modalAlert?.isOpen && <ModalAlert {...modalAlert} />}
      {toastState?.isOpen && <Toast {...toastState} />}
    </div>
  )
}

export default InformationBank

```

## src/features/guarantee-liberation-download/components/LiberationDownload.tsx

```tsx
import { Typography } from '@nuam/common-fe-lib-components'

import { NewTable } from 'remoteUtilities/components-mf-utilities'

import { ENDPOINTS } from '@/shared/constants/endpoints'

import { useGetColumnsLiberation } from '../hooks/useGetColumnsLiberation'
import { ModalAlertState, ToastState } from '../types/AlertsState'
import { Bank } from '../types/banks'
import ModalDownloadLiberationDetail from './ModalDownloadLiberationDetail'

interface Props {
  bank?: Bank | null
  onRefresh: () => void
  refresh?: boolean
  setModalAlert: React.Dispatch<React.SetStateAction<ModalAlertState | null>>
  setToastState: React.Dispatch<React.SetStateAction<ToastState | null>>
}
const LiberationDownload = ({
  bank,
  refresh,
  setModalAlert,
  setToastState
}: Props) => {
  const endpoint = `${ENDPOINTS.GUARANTEE_LIBERATION_DOWNLOAD_HISTORY}?depositoryId=${bank?.id}`
  const {
    columns,
    viewDetailGuarantee,
    setDetailGuarantee,
    setFileSelected,
    fileSelected
  } = useGetColumnsLiberation({ setModalAlert, setToastState })

  return (
    <div className="mt-4">
      <Typography className="text-xl font-medium">
        Histórico de archivos de liberación
      </Typography>
      <div className="mt-4">
        <NewTable
          endpoint={endpoint}
          axiosInstanceKey="httpGuaranteeLiberation"
          columns={columns}
          provisionalId="fileGenerationId"
          refresh={refresh}
          checkboxSelection={false}
        />
      </div>
      {viewDetailGuarantee && (
        <ModalDownloadLiberationDetail
          setDetailGuarantee={setDetailGuarantee}
          setFileSelected={setFileSelected}
          detailFile={fileSelected}
        />
      )}
    </div>
  )
}

export default LiberationDownload

```

## src/features/guarantee-liberation-download/components/LiberationGuarantee.tsx

```tsx
import { Typography } from '@nuam/common-fe-lib-components'
import { Dispatch, SetStateAction, useState } from 'react'

import { NewTable } from 'remoteUtilities/components-mf-utilities'

import { ENDPOINTS } from '@/shared/constants/endpoints'

import { columnsLiberationGuarantee } from '../constants/columnsLiberationGuarantee'
import { ModalAlertState, ToastState } from '../types/AlertsState'
import { Bank } from '../types/banks'
import ToolbarLiberationGuarantee from './ToolbarLiberationGuarantee'

interface Props {
  bank?: Bank | null
  setToastState: Dispatch<SetStateAction<ToastState | null>>
  setModalAlert: Dispatch<SetStateAction<ModalAlertState | null>>
  onRefresh: () => void
  refresh?: boolean
}
const LiberationGuarantee = ({
  bank,
  setModalAlert,
  setToastState,
  refresh,
  onRefresh
}: Props) => {
  const [guaranteeSelected, setGuaranteeSelected] = useState<number[]>([])
  const endpoint = `${ENDPOINTS.GUARANTEE_LIBERATION_DOWNLOAD}?depositoryId=${bank?.id}`

  return (
    <div className="mt-6">
      <Typography className="text-xl font-medium">
        Garantías por liberar
      </Typography>
      <div className="mt-4">
        <NewTable
          customToolbar={
            <ToolbarLiberationGuarantee
              guaranteeSelected={guaranteeSelected}
              setModalAlert={setModalAlert}
              setToastState={setToastState}
              onRefresh={onRefresh}
              bank={bank}
            />
          }
          columns={columnsLiberationGuarantee}
          endpoint={endpoint}
          axiosInstanceKey="httpGuaranteeLiberation"
          setThereAreSelected={(rows: number[]) => {
            setGuaranteeSelected(rows)
          }}
          refresh={refresh}
          provisionalId="guaranteeMovementId"
        />
      </div>
    </div>
  )
}

export default LiberationGuarantee

```

## src/features/guarantee-liberation-download/components/ModalDownloadLiberationDetail.tsx

```tsx
import { DataGrid, Typography } from '@nuam/common-fe-lib-components'
import { Dispatch, SetStateAction } from 'react'

import { ModalContent } from 'remoteUtilities/components-mf-utilities'

import useGetDetailDownloadLiberation from '../hooks/useGetDetailDownloadLiberation'

interface Props {
  setDetailGuarantee: Dispatch<SetStateAction<boolean>>
  setFileSelected: Dispatch<SetStateAction<number | null>>
  detailFile?: number | null
}
const ModalDownloadLiberationDetail = ({
  setDetailGuarantee,
  detailFile,
  setFileSelected
}: Props) => {
  const closeModal = () => {
    setDetailGuarantee(false)
    setFileSelected(null)
  }
  const { detailDownload } = useGetDetailDownloadLiberation(detailFile)
  return (
    <ModalContent
      showBtnAccept={true}
      showBtnClose={false}
      btnAceptText={'volver'}
      className="flex w-full max-w-[819px] flex-col gap-4 rounded py-6 pl-6 pr-3"
      handleAccept={closeModal}
      handleClose={closeModal}
    >
      <Typography className="text-lg font-medium">
        Documento de Liberaciones No. 1{detailDownload?.consecutiveFile}
      </Typography>
      <div className="flex gap-4">
        <div className="flex w-full max-w-353px gap-1">
          <Typography className="text-lg font-medium">
            Fecha de generación:
          </Typography>
          <Typography className="text-lg font-medium">
            {detailDownload?.generatedAt}
          </Typography>
        </div>
        <div className="flex gap-1">
          <Typography>Banco:</Typography>
          <Typography>{detailDownload?.depository?.code}</Typography>
        </div>
      </div>
      <div>
        <DataGrid
          columns={[
            {
              flex: 1,
              minWidth: 97,
              field: 'registrationDate',
              headerName: 'Fecha de registro'
            },
            {
              flex: 1,
              minWidth: 97,
              field: 'guaranteeNumber',
              headerName: 'Número de garantía nuBO'
            },
            {
              flex: 1,
              minWidth: 97,
              field: 'guaranteeNumberDeposit',
              headerName: 'Número de garantía depósito'
            }
          ]}
          rows={detailDownload?.guarantees || []}
          checkboxSelection={false}
          hideFooter={true}
          hideRightToolbar={true}
        />
      </div>
    </ModalContent>
  )
}

export default ModalDownloadLiberationDetail

```

## src/features/guarantee-liberation-download/components/ToolbarLiberationGuarantee.tsx

```tsx
import { Button } from '@nuam/common-fe-lib-components'
import { Dispatch, SetStateAction } from 'react'

import useGenerateLogs from '@/shared/hooks/useGenerateLogs'

import { generateLiberationDownload } from '../services/generateLiberationDownload'
import { ModalAlertState, ToastState } from '../types/AlertsState'
import { Bank } from '../types/banks'

interface Props {
  guaranteeSelected?: number[]
  setToastState: Dispatch<SetStateAction<ToastState | null>>
  setModalAlert: Dispatch<SetStateAction<ModalAlertState | null>>
  onRefresh: () => void
  bank?: Bank | null
}
const ToolbarLiberationGuarantee = ({
  guaranteeSelected,
  setModalAlert,
  bank
}: Props) => {
  const { dispatchGenerateLog } = useGenerateLogs()
  const executeFile = async () => {
    try {
      if (bank && guaranteeSelected) {
        dispatchGenerateLog({
          actionType: 'Generacion de archivo',
          actionDestination: 'Generacion de archivo satisfactoria'
        })
        await generateLiberationDownload({
          depositoryId: bank?.id,
          guaranteeMovementId: guaranteeSelected || []
        })
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      dispatchGenerateLog({
        actionType: 'Generacion de archivo',
        actionDestination: 'Error al generar el archivo'
      })

      setModalAlert({
        isOpen: true,
        variant: 'error',
        title: 'Ocurrió un error inesperado',
        message:
          'Vuelve a intentarlo, si el error persiste comunícate a xxxxxx@nuamx.com o 55555555',
        textSuccess: 'Volver',
        onClick() {
          setModalAlert(null)
        }
      })
    }
  }
  return (
    <div>
      <Button
        disabled={guaranteeSelected?.length === 0}
        variant="text"
        onClick={executeFile}
      >
        Generar archivo
      </Button>
    </div>
  )
}

export default ToolbarLiberationGuarantee

```

## src/features/guarantee-liberation-download/constants/columnsLiberationGuarantee.ts

```typescript
import { formatToLocalDate } from '@/shared/utils/formatToLocalDate'

export const columnsLiberationGuarantee = [
  {
    flex: 1,
    minWidth: 97,
    field: 'registrationDate',
    headerName: 'Fecha de registro',
    valueGetter: (value: string) => formatToLocalDate(value.toString()) || '-'
  },
  {
    flex: 1,
    minWidth: 97,
    field: 'guaranteeNumber',
    headerName: 'No. Garantía nuBO',
    valueGetter: (value: string) => value.toString() || '-'
  },
  {
    flex: 1,
    minWidth: 97,
    field: 'guaranteeNumberDeposit',
    headerName: 'No. Garantía Deposito',
    valueGetter: (value: string) => value.toString() || '-'
  },
  {
    flex: 1,
    minWidth: 97,
    field: 'participantFullName',
    headerName: 'Participante',
    valueGetter: (value: string) => value?.toString() || '-'
  },
  {
    flex: 1,
    minWidth: 97,
    field: 'currencyCode',
    headerName: 'Moneda',
    renderCell: ({
      row
    }: {
      row: { currency: { id: number; code: string } }
    }) => row?.currency.code.toString() || '-'
  },
  {
    flex: 1,
    minWidth: 97,
    field: 'quantityRelease',
    headerName: 'Cantidad a liberar',
    valueGetter: (value: string) => value.toString() || '-'
  },
  {
    flex: 1,
    minWidth: 97,
    field: 'typeDetail',
    headerName: 'Tipo de liberación',
    renderCell: ({
      row
    }: {
      row: {
        type: {
          id: number
          description: string
          category: string
          detail: string
        }
      }
    }) => row?.type.detail || '-'
  }
]

```

## src/features/guarantee-liberation-download/constants/notificationsGenerateFile.ts

```typescript
const notificationsGenerateFile = [24, 25, 26]
export default notificationsGenerateFile

```

## src/features/guarantee-liberation-download/hooks/useGetColumnsLiberation.tsx

```tsx
import {
  MaterialIcons,
  NuamThemeWrapper,
  Typography
} from '@nuam/common-fe-lib-components'
import { Dispatch, useMemo, useState } from 'react'

import useGenerateLogs from '@/shared/hooks/useGenerateLogs'

import { ModalAlertState, ToastState } from '../types/AlertsState'
import { downloadFile } from '../utils/generateDownload'

export const useGetColumnsLiberation = ({
  setModalAlert
}: {
  setModalAlert: Dispatch<React.SetStateAction<ModalAlertState | null>>
  setToastState: Dispatch<React.SetStateAction<ToastState | null>>
}) => {
  const [viewDetailGuarantee, setViewDetailGuarantee] = useState(false)
  const [fileSelected, setFileSelected] = useState<number | null>(null)
  const { dispatchGenerateLog } = useGenerateLogs()
  const columns = useMemo(
    () => [
      {
        flex: 1,
        minWidth: 97,
        field: 'consecutiveFile',
        headerName: 'Consecutivo del archivo'
      },
      {
        flex: 1,
        minWidth: 97,
        field: 'currencyCode',
        headerName: 'Moneda',
        renderCell: ({
          row
        }: {
          row: { currency: { id: number; code: string } }
        }) => row?.currency.code.toString() || '-'
      },
      {
        flex: 1,
        minWidth: 97,
        field: 'quantityGuaranteeFile',
        headerName: 'Cantidad garantías en archivo'
      },
      {
        flex: 1,
        minWidth: 97,
        field: 'detailGuarantee',
        headerName: 'Detalle Garantías',
        sortable: false,
        filterable: false,
        renderCell: (e: { row: { fileGenerationId: number } }) => {
          const fileId = e?.row?.fileGenerationId
          const handleClick = () => {
            setFileSelected(fileId)
            setViewDetailGuarantee(true)
          }
          return (
            <div
              className="flex h-full w-full items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex w-fit gap-4" onClick={handleClick}>
                <NuamThemeWrapper>
                  <MaterialIcons.VisibilityOutlined className="cursor-pointer" />
                </NuamThemeWrapper>
                <Typography variant="body1" className="text-sm">
                  Ver detalle
                </Typography>
              </div>
            </div>
          )
        }
      },
      {
        flex: 1,
        minWidth: 97,
        field: 'typeLiberation',
        headerName: 'Descargar histórico',
        sortable: false,
        filterable: false,
        renderCell: (e: { row: { fileGenerationId: number } }) => {
          const handleDownload = async () => {
            const fileId = e?.row?.fileGenerationId
            try {
              const result = await downloadFile(fileId)
              if (result.success) {
                dispatchGenerateLog({
                  actionType: 'Descarga de archivo',
                  actionDestination: 'Descarga de archivo satisfactoria'
                })
              } else {
                setModalAlert({
                  title: 'Error',
                  message: 'No se pudo descargar el archivo',
                  isOpen: true,
                  variant: 'error',
                  textSuccess: 'Cerrar',
                  onClick() {
                    setModalAlert(null)
                  }
                })
                dispatchGenerateLog({
                  actionType: 'Descarga de archivo',
                  actionDestination: 'Error al descargar el archivo'
                })
              }
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (error: unknown) {
              dispatchGenerateLog({
                actionType: 'Descarga de archivo',
                actionDestination: 'Error al descargar el archivo'
              })
            }
          }
          return (
            <div
              className="flex h-full items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <NuamThemeWrapper>
                <MaterialIcons.Download
                  className="cursor-pointer"
                  color="primary"
                  onClick={handleDownload}
                />
              </NuamThemeWrapper>
            </div>
          )
        }
      }
    ],
    []
  )
  return {
    columns,
    viewDetailGuarantee,
    setDetailGuarantee: setViewDetailGuarantee,
    fileSelected,
    setFileSelected
  }
}

```

## src/features/guarantee-liberation-download/hooks/useGetConnectWebSocket.ts

```typescript
import { Client } from '@stomp/stompjs'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import SockJS from 'sockjs-client'

import { RootState } from 'remoteShell/mf-store'

import isDevMode from '@/shared/utils/isDevMode'

import { Notification } from '../types/notification'

interface UseGetConnectWebSocketProps {
  onRefresh?: () => void
}

interface UseGetConnectWebSocketProps {
  onRefresh?: () => void
  typeNotifications?: number[]
}

const useGetConnectWebSocket = ({
  onRefresh,
  typeNotifications
}: UseGetConnectWebSocketProps) => {
  const { id } = useSelector((state: RootState) => state.auth.infoUserNubo)
  useEffect(() => {
    if (!id) return

    const jwt = localStorage.getItem('access_token')

    const socketUrl = import.meta.env.VITE_WEBSOCKET_NOTIFICATIONS
    const client = new Client({
      webSocketFactory: () => new SockJS(socketUrl),
      connectHeaders: jwt ? { Authorization: `Bearer ${jwt}` } : {},
      debug: (str) => isDevMode() && console.log(str),
      reconnectDelay: 8000,
      onConnect: () => {
        client.subscribe('/topic/notifications/' + id, (message) => {
          const notification: Notification = JSON.parse(message.body)
          if (
            typeNotifications?.includes(
              notification?.notificationEntity?.notificationId
            )
          ) {
            onRefresh?.()
          }
        })
      },
      onDisconnect: () => {},
      onWebSocketClose: () => {},
      onStompError: (frame) => {
        console.error('Broker reported error: ' + frame.headers['message'])
        console.error('Additional details: ' + frame.body)
      }
    })

    client.activate()

    return () => {
      client.deactivate()
    }
  }, [id, onRefresh, typeNotifications])
}
export default useGetConnectWebSocket

```

## src/features/guarantee-liberation-download/hooks/useGetDetailDownloadLiberation.ts

```typescript
import { useEffect, useState, useCallback } from 'react'

import { getDetailLiberationDownload } from '../services/getDetailLiberationDownload'
import { ConsecutiveFile } from '../types/detailFileDownload'

const useGetDetailDownloadLiberation = (detailFile?: number | null) => {
  const [detailDownload, setDetailDownload] = useState<ConsecutiveFile | null>(
    null
  )
  const handleDetailDownloadLiberation = useCallback(async () => {
    const data = await getDetailLiberationDownload(detailFile!)
    setDetailDownload(data.data)
  }, [detailFile])
  useEffect(() => {
    handleDetailDownloadLiberation()
  }, [handleDetailDownloadLiberation])
  return { detailDownload }
}

export default useGetDetailDownloadLiberation

```

## src/features/guarantee-liberation-download/hooks/useGetOptionsBanks.ts

```typescript
import React, { useEffect } from 'react'

import { getListBanks } from '../services/getListBanks'
import { Banks } from '../types/banks'

const useGetOptionsBanks = () => {
  const [banks, setBanks] = React.useState<Banks>([])
  const getOptions = async () => {
    const listBanks = await getListBanks()
    setBanks(listBanks.data)
  }
  useEffect(() => {
    getOptions()
  }, [])
  return { banks }
}

export default useGetOptionsBanks

```

## src/features/guarantee-liberation-download/pages/GuaranteeLiberationDownload.tsx

```tsx
import { ContentWrapper } from 'remoteUtilities/components-mf-utilities'

import InformationBank from '../components/InformationBank'

const GuaranteeLiberationDownload = () => {
  return (
    <ContentWrapper title="Descarga de liberaciones">
      <InformationBank />
    </ContentWrapper>
  )
}

export default GuaranteeLiberationDownload

```

## src/features/guarantee-liberation-download/services/downloadDocuments.ts

```typescript
import { httpReporterDownloaderApi } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

const getDownloadDocuments = async (fileID: number) => {
  const url = `${ENDPOINTS.DOWNLOAD_FILE}${fileID}`
  const headers = await getHeaders()
  const response = await httpReporterDownloaderApi.get<Blob>(url, {
    headers,
    responseType: 'blob'
  })
  return response
}
export default getDownloadDocuments

```

## src/features/guarantee-liberation-download/services/generateLiberationDownload.ts

```typescript
import { httpGuaranteeSendManualApi } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

import { ResponseDownloadFile } from '../types/generationDownloadFile'

export const generateLiberationDownload = async ({
  guaranteeMovementId,
  depositoryId
}: {
  depositoryId?: number | string
  guaranteeMovementId: number[]
}) => {
  const headers = await getHeaders()
  const data = await httpGuaranteeSendManualApi.post<ResponseDownloadFile>(
    ENDPOINTS.GUARANTEE_LIBERATION_GENERATE_DOWNLOAD,
    guaranteeMovementId,
    { headers, params: { depositoryId } }
  )
  return data.data
}

```

## src/features/guarantee-liberation-download/services/getDetailLiberationDownload.ts

```typescript
import { httpGuaranteeLiberation } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

import { ConsecutiveFile } from '../types/detailFileDownload'

export const getDetailLiberationDownload = async (fileGenerationId: number) => {
  const headers = await getHeaders()
  const data = await httpGuaranteeLiberation.get<ConsecutiveFile>(
    ENDPOINTS.GUARANTEE_LIBERATION_DOWNLOAD_HISTORY_DETAIL,
    { headers, params: { fileGenerationId } }
  )
  return data
}

```

## src/features/guarantee-liberation-download/services/getListBanks.ts

```typescript
import { httpGuaranteeLiberation } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

import { Banks } from '../types/banks'

export const getListBanks = async () => {
  const headers = await getHeaders()
  const data = httpGuaranteeLiberation.get<Banks>(ENDPOINTS.BANKS, { headers })
  return data
}

```

## src/features/guarantee-liberation-download/types/AlertsState.d.ts

```typescript
import { ModalAlertProps, ToastProps } from '@/shared/types/declare'

export interface ModalAlertState extends ModalAlertProps {
  isOpen?: boolean
}

export interface ToastState extends ToastProps {
  isOpen?: boolean
}

```

## src/features/guarantee-liberation-download/types/banks.d.ts

```typescript
export interface Bank {
  id: string
  code: string
}
export type Banks = Bank[]

```

## src/features/guarantee-liberation-download/types/depositBankAll.ts

```typescript
export interface GetDepositoryParams {
  page?: number
  size?: number
  sort?: string
  order?: 'asc' | 'desc'
  depositoryId: number
}

```

## src/features/guarantee-liberation-download/types/detailFileDownload.d.ts

```typescript
import { Guarantee } from '@/features/view-guarantees/types/visualization'

export interface Guarantee {
  guaranteeId: number
  registrationDate: string
  guaranteeNumber: string
  guaranteeNumberDeposit: string
}

export interface Depository {
  id: string
  code: string
}
export interface ConsecutiveFile {
  consecutiveFile: string
  generatedAt: string
  depository: Depository
  guarantees: Guarantee[]
}

```

## src/features/guarantee-liberation-download/types/generationDownloadFile.d.ts

```typescript
import { Guarantee } from './detailFileDownload'

export interface ResponseDownloadFile {
  responseSuccess: boolean
  message: string
  successGuarantees: Guarantee[]
}

```

## src/features/guarantee-liberation-download/types/notification.d.ts

```typescript
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface Notification<T = any> {
  userNuboId: number
  notificationUserId: number
  notificationEntity: NotificationEntity
  read: boolean
  lastModifyDate: string
  profile: string
  metadata: T
}

export interface NotificationEntity {
  notificationId: number
  title: string
  description: string
  action: string
  type: NotificationType
  lastModifyUser: string
  lastModifyApplication: string
  lastModifyDate: string
  lastModifyIp: string
}

export interface NotificationType {
  id: number
  description: string
  category: string
  lastModifyUser: string
  lastModifyApplication: string
  lastModifyDate: string
  lastModifyIp: string
}

```

## src/features/guarantee-liberation-download/utils/buildFileName.ts

```typescript
import { AxiosResponseHeaders, RawAxiosResponseHeaders } from 'axios'

export const buildFileName = (
  headers: AxiosResponseHeaders | RawAxiosResponseHeaders,
  fileId: string | number
): string => {
  const name =
    headers['x-file-name'] ||
    headers['X-File-Name'] ||
    headers['X-FILE-NAME'] ||
    `archivo_${fileId}`

  const ext =
    headers['x-file-extension'] ||
    headers['X-File-Extension'] ||
    headers['X-FILE-EXTENSION'] ||
    'txt'

  const fileName = String(name)
  return fileName.includes('.') ? fileName : `${fileName}.${ext}`
}

```

## src/features/guarantee-liberation-download/utils/generateDownload.ts

```typescript
import getDownloadDocuments from '../services/downloadDocuments'
import { buildFileName } from './buildFileName'

export interface FileDownloadResponse {
  data: Blob
  headers: Record<string, string>
}

export const downloadFile = async (
  fileId: number
): Promise<{ success: boolean; filename: string; size: number }> => {
  const response = await getDownloadDocuments(fileId)
  if (response.status === 200) {
    const fileName = buildFileName(response.headers, fileId)
    const mimeType =
      response.headers['x-mime-type'] || 'application/octet-stream'

    const blob = new Blob([response.data], { type: mimeType })

    const blobUrl = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = blobUrl
    a.download = fileName
    a.style.display = 'none'
    document.body.appendChild(a)
    a.click()

    window.URL.revokeObjectURL(blobUrl)
    document.body.removeChild(a)
    return {
      success: true,
      filename: fileName,
      size: blob.size
    }
  } else {
    return {
      success: false,
      filename: '',
      size: 0
    }
  }
}

```

## src/features/limit-guarantees/components/DiversificationRowComponent.tsx

```tsx
import {
  TextField,
  Typography,
  // Select,
  DefaultComponents,
  MaterialIcons
} from '@nuam/common-fe-lib-components'

import { SelectNuam } from 'remoteUtilities/components-mf-utilities'

export interface DiversificationRow {
  id: string
  percentage: string
  market: string
}

const MARKET_LABEL = '% Diversificación'
const PERCENTAGE_PLACEHOLDER = 'Digita el valor'
const MARKET_FIELD_LABEL = 'Mercado'
const MARKET_PLACEHOLDER = 'Elige un mercado'

interface MarketOption {
  id: number
  name: string
  code: string
}

interface DiversificationRowComponentProps {
  row: DiversificationRow
  availableMarkets: MarketOption[]
  onPercentageChange: (value: string) => void
  onMarketChange: (value: string) => void
  onDelete: () => void
  showDeleteButton: boolean
  percentageError?: string
  marketError?: string
}

export const DiversificationRowComponent = ({
  row,
  availableMarkets,
  onPercentageChange,
  onMarketChange,
  onDelete,
  showDeleteButton,
  percentageError,
  marketError
}: DiversificationRowComponentProps) => {
  const marketOptions = [
    { value: '', label: MARKET_PLACEHOLDER },
    ...availableMarkets.map((market) => ({
      value: market.id.toString(),
      label: market.code
    }))
  ]

  const handleMarketChange = (value: { value: string; label: string }) => {
    onMarketChange(value.value)
  }

  const handlePercentageInput = (newValue: string) => {
    if (newValue === '') {
      onPercentageChange('')
      return
    }

    const numValue = parseFloat(newValue)

    if (numValue > 100) {
      onPercentageChange('100')
    } else if (numValue < 0) {
      onPercentageChange('0')
    } else {
      onPercentageChange(newValue)
    }
  }

  const selectedMarket =
    marketOptions.find((opt) => opt.value === row.market) || marketOptions[0]

  return (
    <div className="mb-3 grid grid-cols-2 gap-4">
      <div>
        <Typography variant="body1" className="mb-2">
          {MARKET_LABEL}
        </Typography>
        <TextField
          fullWidth
          size="small"
          sx={{
            height: '28px',
            '& .MuiInputBase-root': { height: '28px', minHeight: '28px' }
          }}
          placeholder={PERCENTAGE_PLACEHOLDER}
          value={row.percentage}
          onChange={handlePercentageInput}
          type="number"
          error={!!percentageError}
          helperText={percentageError}
          slotProps={{
            input: {
              endAdornment: (
                <DefaultComponents.InputAdornment position="end">
                  %
                </DefaultComponents.InputAdornment>
              )
            }
          }}
        />
      </div>
      <div>
        <Typography variant="body1" className="mb-2">
          {MARKET_FIELD_LABEL}
        </Typography>
        <div className="flex w-full" style={{ gap: 30 }}>
          <div className="flex-1">
            <SelectNuam
              value={selectedMarket}
              onChange={handleMarketChange}
              options={marketOptions}
              size="small"
              fullWidth
              formControlProps={{
                fullWidth: true,
                sx: { width: '100%' },
                error: !!marketError
              }}
              sx={{ height: '28px' }}
              displayEmpty
            />
            {marketError && (
              <Typography
                variant="caption"
                color="secondary"
                className="mt-1"
                style={{ color: '#FF4201' }}
              >
                {marketError}
              </Typography>
            )}
          </div>
          {showDeleteButton && (
            <DefaultComponents.IconButton
              onClick={onDelete}
              color="error"
              size="small"
            >
              <MaterialIcons.Delete />
            </DefaultComponents.IconButton>
          )}
        </div>
      </div>
    </div>
  )
}

```

## src/features/limit-guarantees/components/DiversificationRowsSection.tsx

```tsx
import { Button, MaterialIcons } from '@nuam/common-fe-lib-components'
import {
  Control,
  Controller,
  FieldErrors,
  FieldArrayWithId
} from 'react-hook-form'

import { DiversificationRowComponent } from './DiversificationRowComponent'

interface FormValues {
  country: string
  operationType: string
  rows: Array<{
    id: string
    percentage: string
    market: string
  }>
}

export const DiversificationRowsSection = ({
  control,
  fields,
  errors,
  rows,
  deleteRow,
  addRow,
  canAddRow,
  canDeleteRow,
  marketOptions
}: {
  control: Control<FormValues>
  fields: FieldArrayWithId<FormValues, 'rows', 'id'>[]
  errors: FieldErrors<FormValues>
  rows: Array<{ id: string; percentage: string; market: string }>
  deleteRow: (index: number) => void
  addRow: () => void
  canAddRow: boolean
  canDeleteRow: boolean
  marketOptions: { id: number; name: string; code: string }[]
}) => {
  return (
    <div className="border-trounded mb-4 mt-4 border-b p-6 shadow-[0px_5px_5px_-2px_#00000033]">
      {fields.map((field, index) => {
        const selectedMarkets = rows
          .filter((_, i) => i !== index)
          .map((r) => r.market)

        const availableMarkets = marketOptions.filter(
          (opt) =>
            !selectedMarkets.includes(opt.id.toString()) ||
            opt.id.toString() === rows[index].market
        )

        return (
          <div key={field.id}>
            <Controller
              name={`rows.${index}.percentage`}
              control={control}
              rules={{
                required: 'El porcentaje es requerido',
                min: { value: 0, message: 'El porcentaje mínimo es 0' },
                max: { value: 100, message: 'El porcentaje máximo es 100' }
              }}
              render={({ field: percentageField }) => (
                <Controller
                  name={`rows.${index}.market`}
                  control={control}
                  rules={{ required: 'El mercado es requerido' }}
                  render={({ field: marketField }) => (
                    <DiversificationRowComponent
                      row={{
                        id: field.id,
                        percentage: percentageField.value,
                        market: marketField.value
                      }}
                      availableMarkets={availableMarkets}
                      onPercentageChange={percentageField.onChange}
                      onMarketChange={marketField.onChange}
                      onDelete={() => deleteRow(index)}
                      showDeleteButton={canDeleteRow}
                      percentageError={
                        errors.rows?.[index]?.percentage?.message
                      }
                      marketError={errors.rows?.[index]?.market?.message}
                    />
                  )}
                />
              )}
            />
          </div>
        )
      })}

      <div className="mt-4 flex justify-between">
        <Button
          variant="text"
          color="primary"
          startIcon={
            <MaterialIcons.AddBoxOutlined width="20px" height="20px" />
          }
          onClick={addRow}
          disabled={!canAddRow}
          className="text-sm"
        >
          AGREGAR
        </Button>
      </div>
    </div>
  )
}

```

## src/features/limit-guarantees/components/FormBasicFields.tsx

```tsx
import {
  Typography
  // Select
} from '@nuam/common-fe-lib-components'
import { useEffect, useState } from 'react'

import { SelectNuam } from 'remoteUtilities/components-mf-utilities'

import { getCountryOptions } from '../services/getCountryOptions'
import { getTypeOperationOptions } from '../services/getTypeOperationOptions'

interface Option {
  id: number
  name: string
}

export interface FormBasicFieldsProps {
  country: string
  onCountryChange: (value: string) => void
  operationType: string
  onOperationTypeChange: (value: string) => void
  operationTypeError?: string
  countryError?: string
}

export const FormBasicFields = ({
  country,
  onCountryChange,
  operationType,
  onOperationTypeChange,
  countryError,
  operationTypeError
}: FormBasicFieldsProps) => {
  const [countryOptions, setCountryOptions] = useState<Option[]>([])
  const [operationTypeOptions, setOperationTypeOptions] = useState<Option[]>([])

  useEffect(() => {
    getCountryOptions().then(setCountryOptions)
    getTypeOperationOptions().then(setOperationTypeOptions)
  }, [])

  const handleCountryChange = (value: { value: string; label: string }) => {
    onCountryChange(value.value)
  }

  const handleOperationTypeChange = (value: {
    value: string
    label: string
  }) => {
    onOperationTypeChange(value.value)
  }

  const today = new Date()
  const formattedDate = today.toLocaleDateString('es-PE')

  const countrySelectOptions = [
    { value: '', label: 'Elige un país' },
    ...countryOptions.map((opt) => ({
      value: opt.id.toString(),
      label: opt.name
    }))
  ]

  const operationTypeSelectOptions = [
    { value: '', label: 'Elige tipo de operación' },
    ...operationTypeOptions.map((opt) => ({
      value: opt.id.toString(),
      label: opt.name
    }))
  ]

  const selectedCountry =
    countrySelectOptions.find((opt) => opt.value === country) ||
    countrySelectOptions[0]
  const selectedOperationType =
    operationTypeSelectOptions.find((opt) => opt.value === operationType) ||
    operationTypeSelectOptions[0]

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-x-12 gap-y-6 rounded p-6 shadow-[0px_5px_5px_-2px_#00000033] md:grid-cols-2">
        <div className="flex h-10 items-center justify-between border-b p-2">
          <Typography variant="body1" className="font-bold">
            Fecha de ingreso
          </Typography>
          <Typography variant="body1">{formattedDate}</Typography>
        </div>

        <div className="flex flex-col border-b p-2">
          <div className="flex h-10 items-center justify-between">
            <Typography variant="body1" className="whitespace-nowrap font-bold">
              País
            </Typography>
            <SelectNuam
              value={selectedCountry}
              onChange={handleCountryChange}
              options={countrySelectOptions}
              size="small"
              sx={{ height: '24px', width: '220px' }}
              displayEmpty
              formControlProps={{
                error: !!countryError
              }}
            />
          </div>
          {countryError && (
            <Typography
              variant="caption"
              color="secondary"
              className="mt-1 text-right"
              style={{ color: '#FF4201' }}
            >
              {countryError}
            </Typography>
          )}
        </div>

        <div className="flex flex-col border-b p-2">
          <div className="flex h-10 items-center justify-between">
            <Typography
              variant="body1"
              className="min-w-[120px] whitespace-nowrap font-bold"
            >
              Tipo de operación
            </Typography>
            <SelectNuam
              value={selectedOperationType}
              onChange={handleOperationTypeChange}
              options={operationTypeSelectOptions}
              size="small"
              sx={{ height: '24px', width: '220px' }}
              displayEmpty
              formControlProps={{
                error: !!operationTypeError
              }}
            />
          </div>
          {operationTypeError && (
            <Typography
              variant="caption"
              color="secondary"
              className="mt-1 text-right"
              style={{ color: '#FF4201' }}
            >
              {operationTypeError}
            </Typography>
          )}
        </div>
      </div>
    </div>
  )
}

```

## src/features/limit-guarantees/components/LimitDetailsModal.tsx

```tsx
import {
  Button,
  DefaultComponents,
  Modal,
  Typography
} from '@nuam/common-fe-lib-components'

import { NewTable, Spinner } from 'remoteUtilities/components-mf-utilities'

import { columnsLimitDetails } from '../constants/columnsLimitDetails'
import { LimitGuaranteeDetails } from '../types/LimitGuaranteeItem'

interface BeneficiariesModalProps {
  open: boolean
  onClose: () => void
  details: LimitGuaranteeDetails | null
  loadingDetails: boolean
}
export const LimitDetailsModal = ({
  open,
  onClose,
  details,
  loadingDetails
}: BeneficiariesModalProps) => {
  if (loadingDetails) {
    return <Spinner />
  }
  return (
    <Modal
      open={open}
      onClose={onClose}
      boxProps={{
        sx: {
          borderRadius: '4px',
          padding: '48px',
          maxWidth: '1135px',
          border: 'none',
          width: '100%',
          outline: 'none',
          zIndex: 1
        }
      }}
    >
      <>
        <div>
          <Typography className="mb-4" variant="h6">
            Seguimiento Límite
          </Typography>
          <DefaultComponents.Grid
            container
            spacing={2}
            sx={{ mb: 3, px: 2 }}
            justifyContent={'center'}
          >
            <Typography
              variant="body1"
              gutterBottom
              maxWidth={447}
              width={'100%'}
            >
              <strong>Fecha de Ingreso:</strong>
              <span style={{ marginLeft: 4 }}>{details?.registrationDate}</span>
            </Typography>
            <Typography variant="body1" maxWidth={447} width={'100%'}>
              <strong>Tipo de opereción:</strong>
              <span style={{ marginLeft: 4 }}>{details?.type.description}</span>
            </Typography>
          </DefaultComponents.Grid>
          <NewTable
            columns={columnsLimitDetails()}
            rows={details?.guaranteeLimitsStatusHistory || []}
            endpoint={``}
            disableRowSelectionOnClick={false}
            checkboxSelection={false}
            noShowNoData={true}
            hideRightToolbar={true}
            pagination={false}
            enableBackendPagination={false}
            hideFooter={true}
            axiosInstanceKey="httpConciliationGuaranteesCmd"
          />
        </div>
        <div className="m-auto mt-4 flex w-full max-w-[197px] justify-center">
          <Button
            variant="contained"
            color="primary"
            onClick={onClose}
            fullWidth
          >
            Volver
          </Button>
        </div>
      </>
    </Modal>
  )
}

```

## src/features/limit-guarantees/components/RegisterLimitsModal.tsx

```tsx
import { Button, Modal, Typography } from '@nuam/common-fe-lib-components'
import { useForm, useFieldArray, Controller } from 'react-hook-form'

import { useDiversificationRows } from '../hooks/useDiversificationRows'
import { postGuaranteeLimits } from '../services/postGuaranteeLimits'
import { IRegisterGuaranteeLimits } from '../types/LimitGuaranteeItem'
import { DiversificationRowsSection } from './DiversificationRowsSection'
import { FormBasicFields } from './FormBasicFields'

interface RegisterLimitsModalProps {
  open: boolean
  onClose: () => void
  showToast: (text: string, variant: 'success' | 'error' | 'warning') => void
  setModalAlert: (modalAlert: {
    open?: boolean
    title: string
    message?: string
    textSuccess: string
    textCancel?: string
    onClose: () => void
    handleCancel?: () => void
    variant: 'success' | 'error' | 'warning'
  }) => void
  modalAlert: {
    open?: boolean
    title: string
    message?: string
    textSuccess: string
    textCancel?: string
    onClose: () => void
    handleCancel?: () => void
    variant: 'success' | 'error' | 'warning' | 'warning'
  }
  dispatchGenerateLog: (log: {
    actionType: string
    actionDestination: string
  }) => void
  setLoading: (loading: boolean) => void
}

interface FormValues {
  country: string
  operationType: string
  rows: Array<{
    id: string
    percentage: string
    market: string
  }>
}

const FormHeader = () => (
  <div>
    <Typography className="mb-4" variant="h5">
      Registro de Límites de Diversificación
    </Typography>
  </div>
)

export const RegisterLimitsModal = ({
  open,
  onClose,
  showToast,
  setModalAlert,
  modalAlert,
  setLoading,
  dispatchGenerateLog
}: RegisterLimitsModalProps) => {
  const { marketOptions } = useDiversificationRows()

  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid }
  } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      country: '',
      operationType: '',
      rows: [{ id: crypto.randomUUID(), percentage: '', market: '' }]
    }
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'rows'
  })

  const rows = watch('rows')

  const handleClose = () => {
    reset()
    onClose()
  }

  const handleShowConfirmRegister = () => {
    handleSubmit(onSubmit)()
  }

  const onSubmit = async (data: FormValues) => {
    setModalAlert({
      open: true,
      title: '¿Estás seguro de guardar los datos registrados?',
      textSuccess: 'ACEPTAR',
      textCancel: 'Cancelar',
      onClose: () => handleConfirmedSubmit(data),
      handleCancel: () => setModalAlert({ ...modalAlert, open: false }),
      variant: 'warning'
    })
  }

  const handleConfirmedSubmit = async (data: FormValues) => {
    setModalAlert({ ...modalAlert, open: false })
    try {
      setLoading(true)
      const payload: IRegisterGuaranteeLimits = {
        countryId: Number(data.country),
        typeId: Number(data.operationType),
        guaranteeLimitsDetails: data.rows.map((row) => ({
          marketId: row.market,
          percentageLimit: Number(row.percentage)
        }))
      }
      const response = await postGuaranteeLimits(payload)
      dispatchGenerateLog({
        actionType: `Registro de límite de diversificación id: ${response?.[0]?.id}`,
        actionDestination: 'limit-guarantees'
      })
      handleClose()
      showToast('Se realizó el nuevo registro con éxito', 'success')
    } catch (error: any) {
      const errorCode = error?.response?.data?.errorCode
      if (errorCode === 'MARKET_GUARANTEE_LIMIT_ALREADY_REGISTER') {
        setModalAlert({
          open: true,
          title: 'Limite ya se encuentra registrado.',
          textSuccess: 'Aceptar',
          onClose: () => setModalAlert({ ...modalAlert, open: false }),
          variant: 'warning'
        })
        return
      }
      setModalAlert({
        open: true,
        title: 'Error',
        message: 'Ocurrió un error inesperado. Intente nuevamente.',
        textSuccess: 'Cerrar',
        onClose: () => setModalAlert({ ...modalAlert, open: false }),
        variant: 'error'
      })
    } finally {
      setLoading(false)
    }
  }

  const canAddRow = fields.length < marketOptions.length
  const canDeleteRow = fields.length > 1

  const addRow = () => {
    if (canAddRow) {
      append({ id: crypto.randomUUID(), percentage: '', market: '' })
    }
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      boxProps={{
        sx: {
          borderRadius: '4px',
          padding: '24px',
          maxWidth: '1135px',
          border: 'none',
          width: '100%',
          outline: 'none',
          zIndex: 1
        }
      }}
    >
      <>
        <FormHeader />

        <Controller
          name="country"
          control={control}
          rules={{ required: 'El país es requerido' }}
          render={({ field: countryField }) => (
            <Controller
              name="operationType"
              control={control}
              rules={{ required: 'El tipo de operación es requerido' }}
              render={({ field: operationTypeField }) => (
                <FormBasicFields
                  country={countryField.value}
                  onCountryChange={countryField.onChange}
                  operationType={operationTypeField.value}
                  onOperationTypeChange={operationTypeField.onChange}
                  countryError={errors.country?.message}
                  operationTypeError={errors.operationType?.message}
                />
              )}
            />
          )}
        />
        <DiversificationRowsSection
          control={control}
          fields={fields}
          errors={errors}
          rows={rows}
          deleteRow={remove}
          addRow={addRow}
          canAddRow={canAddRow}
          canDeleteRow={canDeleteRow}
          marketOptions={marketOptions}
        />

        <div className="flex justify-center gap-4">
          <Button
            variant="outlined"
            color="primary"
            onClick={handleClose}
            sx={{ minWidth: '150px' }}
          >
            CANCELAR
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleShowConfirmRegister}
            disabled={!isValid}
            sx={{ minWidth: '150px' }}
          >
            REGISTRAR
          </Button>
        </div>
      </>
    </Modal>
  )
}

```

## src/features/limit-guarantees/components/ToolbarActions.tsx

```tsx
import { Button } from '@nuam/common-fe-lib-components'
import React from 'react'

interface ToolbarActionsProps {
  handleShowLimitsRegisterModal: () => void
  handleDeactivate: () => void
  disableDeactivate: boolean
}

export const ToolbarActions: React.FC<ToolbarActionsProps> = ({
  handleShowLimitsRegisterModal,
  handleDeactivate,
  disableDeactivate
}) => {
  return (
    <div className="flex gap-2">
      <Button variant="text" onClick={handleShowLimitsRegisterModal}>
        NUEVO
      </Button>
      <Button
        variant="text"
        onClick={handleDeactivate}
        disabled={disableDeactivate}
      >
        DESACTIVAR
      </Button>
    </div>
  )
}

```

## src/features/limit-guarantees/constants/columnsLimitDetails.tsx

```tsx
import { Typography } from '@nuam/common-fe-lib-components'

import { GuaranteeLimitsStatusHistoryItem } from '../types/LimitGuaranteeItem'

export const columnsLimitDetails = () => [
  {
    flex: 1,
    field: 'date',
    headerName: 'Fecha del evento',
    renderCell: ({ row }: { row: GuaranteeLimitsStatusHistoryItem }) => {
      const date = row.time
        ? new Date(row.time).toLocaleDateString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          })
        : ''
      return <Typography variant="body2">{date}</Typography>
    }
  },
  {
    flex: 1,
    field: 'hour',
    headerName: 'Hora',
    renderCell: ({ row }: { row: GuaranteeLimitsStatusHistoryItem }) => {
      const hour = row.time
        ? new Date(row.time).toLocaleTimeString('es-ES', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
          })
        : ''
      return <Typography variant="body2">{hour}</Typography>
    }
  },
  {
    flex: 1,
    field: 'statusShortName',
    headerName: 'Estado',
    renderCell: ({ row }: { row: GuaranteeLimitsStatusHistoryItem }) => (
      <div className="flex h-full w-full items-center justify-start gap-1">
        <Typography variant="body2">{row?.status?.shortName ?? ''}</Typography>
      </div>
    )
  }
]

```

## src/features/limit-guarantees/constants/index.ts

```typescript
export const ENDPOINTS = {
  LIMIT_GUARANTEES_SEARCH: '/guarantee-limits/search',
  STATUS_OPTIONS: '/status/guarantee-limits',
  TYPE_OPERATION_OPTIONS: '/type/operation/guarantee-limits',
  MARKET: '/market/guarantee-limits',
  VALIDATE_ADD: '/guarantee-limits/validate/add',
  HISTORY_STATUS: '/guarantee-limits-history/status',
  COUNTRY: '/country/guarantee-limits',
  INACTIVE_LIMITS: '/guarantee-limits/inactive',
  REGISTER_LIMITS: '/guarantee-limits/register'
}

```

## src/features/limit-guarantees/hooks/useDiversificationRows.tsx

```tsx
import { useEffect, useState } from 'react'

import { DiversificationRow } from '../components/DiversificationRowComponent'
import { MARKET_OPTIONS, MAX_ROWS, MIN_ROWS } from '../mocks/mocksTemporaly'
import { getMarketOptions } from '../services/getMarketOptions'

const initialRows: DiversificationRow[] = [
  { id: '1', percentage: '', market: '' }
]

export const useDiversificationRows = () => {
  const [rows, setRows] = useState<DiversificationRow[]>(initialRows)
  const [marketOptions, setMarketOptions] = useState<
    { id: number; name: string; code: string }[]
  >([])
  const resetRows = () => setRows(initialRows)

  const getAvailableMarkets = (currentRowId: string): string[] => {
    const selectedMarkets = rows
      .filter((row) => row.id !== currentRowId)
      .map((row) => row.market)

    return MARKET_OPTIONS.filter((market) => !selectedMarkets.includes(market))
  }

  const addRow = () => {
    if (rows.length >= MAX_ROWS) return

    const availableMarkets = getAvailableMarkets('')
    const newRow: DiversificationRow = {
      id: Date.now().toString(),
      percentage: '',
      market: availableMarkets[0] || ''
    }

    setRows((prevRows) => [...prevRows, newRow])
  }

  const deleteRow = (id: string) => {
    if (rows.length <= MIN_ROWS) return

    setRows((prevRows) => prevRows.filter((row) => row.id !== id))
  }

  const updatePercentage = (id: string, value: string) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, percentage: value } : row
      )
    )
  }

  const updateMarket = (id: string, value: string) => {
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === id ? { ...row, market: value } : row))
    )
  }

  const canAddRow = rows.length < MAX_ROWS
  const canDeleteRow = rows.length > MIN_ROWS

  useEffect(() => {
    getMarketOptions().then(setMarketOptions)
  }, [])

  return {
    rows,
    addRow,
    deleteRow,
    updatePercentage,
    updateMarket,
    getAvailableMarkets,
    canAddRow,
    canDeleteRow,
    marketOptions,
    resetRows
  }
}

```

## src/features/limit-guarantees/mocks/mocksTemporaly.ts

```typescript
export const MARKET_OPTIONS = [
  'DPU',
  'Market 2',
  'Market 3',
  'Market 4',
  'Market 5'
] as const

export const MAX_ROWS = 5
export const MIN_ROWS = 1
export const DEFAULT_ENTRY_DATE = '11/04/2025'
export const DEFAULT_OPERATION_TYPE = 'OPFS'

```

## src/features/limit-guarantees/pages/LimitGuarantees.tsx

```tsx
import React, { useState } from 'react'

import {
  ContentWrapper,
  FilterBar,
  ModalAlert,
  NewTable,
  Spinner,
  Toast,
  useFilteredEndpoint
} from 'remoteUtilities/components-mf-utilities'

import useGenerateLogs from '@/shared/hooks/useGenerateLogs'
import isDevMode from '@/shared/utils/isDevMode'

import { LimitDetailsModal } from '../components/LimitDetailsModal'
import { RegisterLimitsModal } from '../components/RegisterLimitsModal'
import { ToolbarActions } from '../components/ToolbarActions'
import { ENDPOINTS } from '../constants'
import { desactiveLimits } from '../services/desactiveLimits'
// import { desactiveLimits } from '../services/desactiveLimits'
import { getLimitDetailsHistory } from '../services/getLimitDetailsHistory'
import { LimitGuaranteeDetails } from '../types/LimitGuaranteeItem'
import { getColumnsLimitGuarantees } from '../utils/columnsLimitGuarantees'
import { filtersConfig } from '../utils/filtersConfig'
import { getCsvFileName } from '../utils/getCsvFileName'

export const LimitGuarantees: React.FC = () => {
  const [openLimitsModal, setOpenLimitsModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [limitDetails, setLimitDetails] =
    useState<LimitGuaranteeDetails | null>(null)
  const [openLimitsRegisterModal, setOpenLimitsRegisterModal] = useState(false)
  const [loadingDetails, setLoadingDetails] = useState(false)
  const [selectedIds, setSelectedIds] = useState<number[]>([])
  const [refresh, setRefresh] = useState(false)
  const { dispatchGenerateLog } = useGenerateLogs()
  const [toast, setToast] = useState<{
    open: boolean
    text: string
    variant: 'success' | 'error' | 'warning' | 'info'
  }>({
    open: false,
    text: '',
    variant: 'info'
  })
  const [modalAlert, setModalAlert] = useState<{
    open?: boolean
    title: string
    message?: string
    textSuccess: string
    textCancel?: string
    onClose: () => void
    handleCancel?: () => void
    variant: 'success' | 'error' | 'warning'
  }>({
    open: false,
    title: '',
    message: '',
    textSuccess: '',
    textCancel: '',
    onClose: () => {},
    handleCancel: () => {},
    variant: 'success'
  })
  const showToast = (
    text: string,
    variant: 'success' | 'error' | 'warning' | 'info'
  ) => {
    setToast({ open: true, text, variant })
  }
  const { endpoint } = useFilteredEndpoint(ENDPOINTS.LIMIT_GUARANTEES_SEARCH)

  const handleShowLimitsModal = async (id: number) => {
    setLoadingDetails(true)
    setOpenLimitsModal(true)
    try {
      const detail = await getLimitDetailsHistory(id)
      setLimitDetails(detail)
    } finally {
      setLoadingDetails(false)
    }
  }

  const handleCloseLimitsModal = () => {
    setOpenLimitsModal(false)
    setLimitDetails(null)
  }

  const handleShowLimitsRegisterModal = () => {
    setOpenLimitsRegisterModal(true)
  }

  const handleShowConfirmDeactivate = () => {
    if (selectedIds.length === 0) return
    setModalAlert({
      open: true,
      title: '¿Estás seguro que deseas desactivar un Límite?',
      message:
        'Si deseas continuar haz clic en Desactivar, de lo contrario puedes cancelar y verificar tu acción',
      textSuccess: 'Desactivar',
      textCancel: 'Cancelar',
      onClose: handleDeactivate,
      handleCancel: () => setModalAlert({ ...modalAlert, open: false }),
      variant: 'warning'
    })
  }

  const handleDeactivate = async () => {
    setModalAlert({ ...modalAlert, open: false })
    try {
      setLoading(true)
      await desactiveLimits(selectedIds)
      dispatchGenerateLog({
        actionType: `Desactivación de límites de diversificación id: ${selectedIds.join(', ')}`,
        actionDestination: 'limit-guarantees'
      })
      setRefresh((r) => !r)
      showToast('Límites desactivados correctamente', 'success')
    } catch (error: any) {
      const accessError = error?.response?.data
      const errorCode = accessError?.errorCode
      if (errorCode === 'SELECTED_INACTIVE_PARAMETERS') {
        setModalAlert({
          open: true,
          title: 'Algunos parámetros ya están desactivados.',
          message:
            'El sistema deja el proceso sin acciones por aplicar. Favor verifique nuevamente.',
          textSuccess: 'Cerrar',
          onClose: () => setModalAlert({ ...modalAlert, open: false }),
          variant: 'warning'
        })
      } else {
        setModalAlert({
          open: true,
          title: 'Error',
          message: 'Ocurrió un error inesperado. Intente nuevamente.',
          textSuccess: 'Cerrar',
          onClose: () => setModalAlert({ ...modalAlert, open: false }),
          variant: 'error'
        })
      }
      if (isDevMode()) {
        console.error('Error desactivando los límites:', error)
      }
    } finally {
      setLoading(false)
    }
  }
  if (loading) {
    return <Spinner />
  }
  return (
    <ContentWrapper title="Ingreso Límites de Diversificación">
      <FilterBar config={filtersConfig} />
      <NewTable
        columns={getColumnsLimitGuarantees(handleShowLimitsModal)}
        endpoint={endpoint}
        axiosInstanceKey="httpGuaranteeLimits"
        customToolbar={
          <ToolbarActions
            handleShowLimitsRegisterModal={handleShowLimitsRegisterModal}
            handleDeactivate={handleShowConfirmDeactivate}
            disableDeactivate={selectedIds.length === 0}
          />
        }
        showDownload={true}
        csvFileName={getCsvFileName()}
        height="auto"
        handleRowSelectionModelChange={(ids: { ids: number[] }) => {
          setSelectedIds(Array.isArray(ids) ? ids : Array.from(ids.ids || []))
        }}
        refresh={refresh}
        showDownloadToast={true}
      />
      <LimitDetailsModal
        open={openLimitsModal}
        onClose={handleCloseLimitsModal}
        details={limitDetails}
        loadingDetails={loadingDetails}
      />
      <RegisterLimitsModal
        open={openLimitsRegisterModal}
        onClose={() => setOpenLimitsRegisterModal(false)}
        showToast={showToast}
        setModalAlert={setModalAlert}
        modalAlert={modalAlert}
        setLoading={setLoading}
        dispatchGenerateLog={dispatchGenerateLog}
      />
      {modalAlert?.open && (
        <ModalAlert
          title={modalAlert.title}
          message={modalAlert.message}
          textSuccess={modalAlert.textSuccess}
          onClick={modalAlert.onClose}
          textCancel={modalAlert.textCancel}
          handleCancel={modalAlert.handleCancel}
          variant={modalAlert.variant}
          orientation="horizontal"
        />
      )}
      {toast.open && (
        <Toast
          text={toast.text}
          variant={toast.variant}
          onClose={() => setToast({ ...toast, open: false })}
          width="511px"
        />
      )}
    </ContentWrapper>
  )
}

export default LimitGuarantees

```

## src/features/limit-guarantees/services/desactiveLimits.ts

```typescript
import { httpGuaranteeCmdLimits } from 'remoteShell/mf-axiosConfig'

import { getHeaders } from '@/shared/utils/getHeaders'
import isDevMode from '@/shared/utils/isDevMode'

import { ENDPOINTS } from '../constants'

export const desactiveLimits = async (guaranteeLimitsIds: number[]) => {
  const headers = await getHeaders()
  const payload = { guaranteeLimitsIds }
  try {
    const { data } = await httpGuaranteeCmdLimits.post(
      `${ENDPOINTS.INACTIVE_LIMITS}`,
      payload,
      { headers }
    )
    return data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error getting limit details history:', error)
    }
    throw error
  }
}

```

## src/features/limit-guarantees/services/getCountryOptions.ts

```typescript
import { httpGuaranteeLimits } from 'remoteShell/mf-axiosConfig'

import { getHeaders } from '@/shared/utils/getHeaders'
import isDevMode from '@/shared/utils/isDevMode'

import { ENDPOINTS } from '../constants'

export const getCountryOptions = async () => {
  const headers = await getHeaders()
  try {
    const { data } = await httpGuaranteeLimits.get(ENDPOINTS.COUNTRY, {
      headers
    })
    return data.map((item: { id: number; name: string }) => ({
      id: item.id,
      name: item.name
    }))
  } catch (error) {
    if (isDevMode()) {
      console.error('Error getting country options:', error)
    }
    throw error
  }
}

```

## src/features/limit-guarantees/services/getLimitDetailsHistory.ts

```typescript
import { httpGuaranteeLimits } from 'remoteShell/mf-axiosConfig'

import { getHeaders } from '@/shared/utils/getHeaders'
import isDevMode from '@/shared/utils/isDevMode'

import { ENDPOINTS } from '../constants'

export const getLimitDetailsHistory = async (guaranteeLimitsId: number) => {
  const headers = await getHeaders()
  try {
    const { data } = await httpGuaranteeLimits.get(
      `${ENDPOINTS.HISTORY_STATUS}?guaranteeLimitsId=${guaranteeLimitsId}`,
      {
        headers
      }
    )
    return data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error getting limit details history:', error)
    }
    throw error
  }
}

```

## src/features/limit-guarantees/services/getMarketOptions.ts

```typescript
import { httpGuaranteeLimits } from 'remoteShell/mf-axiosConfig'

import { getHeaders } from '@/shared/utils/getHeaders'
import isDevMode from '@/shared/utils/isDevMode'

import { ENDPOINTS } from '../constants'

export const getMarketOptions = async () => {
  const headers = await getHeaders()
  try {
    const { data } = await httpGuaranteeLimits.get(ENDPOINTS.MARKET, {
      headers
    })
    return data.map(
      (item: { id: number; description: string; code: string }) => ({
        id: item.id,
        name: item.description,
        code: item.code
      })
    )
  } catch (error) {
    if (isDevMode()) {
      console.error('Error getting market options:', error)
    }
    throw error
  }
}

```

## src/features/limit-guarantees/services/getStatusOptions.ts

```typescript
import { httpGuaranteeLimits } from 'remoteShell/mf-axiosConfig'

import { getHeaders } from '@/shared/utils/getHeaders'
import isDevMode from '@/shared/utils/isDevMode'

import { ENDPOINTS } from '../constants'

export const getStatusOptions = async () => {
  const headers = await getHeaders()
  try {
    const { data } = await httpGuaranteeLimits.get(ENDPOINTS.STATUS_OPTIONS, {
      headers
    })
    return data.map((item: { id: number; shortName: string }) => ({
      id: item.id,
      name: item.shortName
    }))
  } catch (error) {
    if (isDevMode()) {
      console.error('Error getting status:', error)
    }
    throw error
  }
}

```

## src/features/limit-guarantees/services/getTypeOperationOptions.ts

```typescript
import { httpGuaranteeLimits } from 'remoteShell/mf-axiosConfig'

import { getHeaders } from '@/shared/utils/getHeaders'
import isDevMode from '@/shared/utils/isDevMode'

import { ENDPOINTS } from '../constants'

export const getTypeOperationOptions = async () => {
  const headers = await getHeaders()
  try {
    const { data } = await httpGuaranteeLimits.get(
      ENDPOINTS.TYPE_OPERATION_OPTIONS,
      {
        headers
      }
    )
    return data.map((item: { id: number; description: string }) => ({
      id: item.id,
      name: item.description
    }))
  } catch (error) {
    if (isDevMode()) {
      console.error('Error getting type operation options:', error)
    }
    throw error
  }
}

```

## src/features/limit-guarantees/services/postGuaranteeLimits.ts

```typescript
import { httpGuaranteeCmdLimits } from 'remoteShell/mf-axiosConfig'

import { getHeaders } from '@/shared/utils/getHeaders'
import isDevMode from '@/shared/utils/isDevMode'

import { ENDPOINTS } from '../constants'
import { IRegisterGuaranteeLimits } from '../types/LimitGuaranteeItem'

export const postGuaranteeLimits = async (
  payload: IRegisterGuaranteeLimits
) => {
  const headers = await getHeaders()
  try {
    const { data } = await httpGuaranteeCmdLimits.post(
      `${ENDPOINTS.REGISTER_LIMITS}`,
      payload,
      { headers }
    )
    return data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error registering guarantee limits:', error)
    }
    throw error
  }
}

```

## src/features/limit-guarantees/types/LimitGuaranteeItem.ts

```typescript
export interface LimitGuaranteeItem {
  id: string
  fechaIngreso: string
  pais: string
  tipoOperacion: string
  mercado: string
  estado: string
  seguimiento: string
}

export interface LimitGuaranteeList {
  id: number
  registrationDate: Date
  status: Status
  type: Type
  country: Country
  market: Market
  percentageLimit: number
}

export interface Country {
  id: number
  code: string
  name: string
}

export interface Market {
  id: string
  description: string
  code: string
}

export interface Status {
  id: number
  shortName: string
}

export interface Type {
  id: number
  description: string
  detail: string
}

export interface GuaranteeLimitsStatusHistoryItem {
  id: number
  time: string
  status: {
    id: number
    shortName: string
  }
  reason: string
}

export interface LimitGuaranteeDetails {
  guaranteeLimitsId: number
  registrationDate: string
  type: {
    id: number
    description: string
    detail: string
  }
  guaranteeLimitsStatusHistory: GuaranteeLimitsStatusHistoryItem[]
}

export interface IRegisterGuaranteeLimits {
  countryId: number
  typeId: number
  guaranteeLimitsDetails: GuaranteeLimitsDetail[]
}

export interface GuaranteeLimitsDetail {
  marketId: string
  percentageLimit: number
}

```

## src/features/limit-guarantees/utils/columnsLimitGuarantees.tsx

```tsx
import { Typography } from '@mui/material'
import { MaterialIcons } from '@nuam/common-fe-lib-components'

import { LimitGuaranteeList } from '../types/LimitGuaranteeItem'

export const getColumnsLimitGuarantees = (
  onTrackingClick: (id: number) => void
) => [
  {
    field: 'registrationDate',
    headerName: 'Fecha de ingreso',
    flex: 1,
    minWidth: 150
  },
  {
    field: 'countryCode',
    headerName: 'País',
    flex: 1,
    minWidth: 100,
    renderCell: ({ row }: { row: LimitGuaranteeList }) => (
      <div className="flex h-full w-full items-center justify-start gap-1">
        <Typography variant="body2">{row?.country?.code ?? ''}</Typography>
      </div>
    )
  },
  {
    field: 'typeDescription',
    headerName: 'Tipo de operación',
    flex: 1,
    minWidth: 180,
    renderCell: ({ row }: { row: LimitGuaranteeList }) => (
      <div className="flex h-full w-full items-center justify-start gap-1">
        <Typography variant="body2">{row?.type?.description ?? ''}</Typography>
      </div>
    )
  },
  {
    field: 'marketCode',
    headerName: 'Mercado',
    flex: 1,
    minWidth: 120,
    renderCell: ({ row }: { row: LimitGuaranteeList }) => (
      <div className="flex h-full w-full items-center justify-start gap-1">
        <Typography variant="body2">{row?.market?.code ?? ''}</Typography>
      </div>
    )
  },
  {
    field: 'statusShortName',
    headerName: 'Estado',
    flex: 1,
    minWidth: 120,
    renderCell: ({ row }: { row: LimitGuaranteeList }) => (
      <div className="flex h-full w-full items-center justify-start gap-1">
        <Typography variant="body2">{row?.status?.shortName ?? ''}</Typography>
      </div>
    )
  },
  {
    field: 'seguimiento',
    headerName: 'Seguimiento',
    flex: 1,
    minWidth: 140,
    renderCell: ({ row }: { row: LimitGuaranteeList }) => (
      <MaterialIcons.VisibilityOutlined
        onClick={() => onTrackingClick(row.id)}
        style={{ cursor: 'pointer' }}
        width={24}
        height={24}
      />
    )
  }
]

```

## src/features/limit-guarantees/utils/filtersConfig.ts

```typescript
import dayjs from 'dayjs'

import { getStatusOptions } from '../services/getStatusOptions'
import { getTypeOperationOptions } from '../services/getTypeOperationOptions'

export interface DatepickerFilterConfig {
  name: string
  label: string
  type: 'datepicker'
  minDate?: string | dayjs.Dayjs
  maxDate?: string | dayjs.Dayjs
  monthsBack?: number
}

export interface SelectFilterConfig {
  name: string
  label: string
  type: 'select'
  loadOptions?: any
  options?: any
}

export interface AutocompleteFilterConfig {
  name: string
  label: string
  type: 'autocomplete'
  fetchOptions: (searchTerm: string) => Promise<{ data: any[]; total: number }>
  itemsPerPage: number
  minSearchLength: number
  debounceTime: number
}

export type FilterConfig =
  DatepickerFilterConfig | SelectFilterConfig | AutocompleteFilterConfig

export const filtersConfig: FilterConfig[] = [
  {
    name: 'registrationDate',
    label: 'Fecha de ingreso',
    type: 'datepicker'
  },
  {
    name: 'typeId',
    label: 'Tipo de operación',
    type: 'select',
    loadOptions: getTypeOperationOptions
  },
  {
    name: 'statusId',
    label: 'Estado',
    type: 'select',
    loadOptions: getStatusOptions
  }
]

```

## src/features/limit-guarantees/utils/getCsvFileName.ts

```typescript
export const getCsvFileName = () => {
  const today = new Date()
  const dd = String(today.getDate()).padStart(2, '0')
  const mm = String(today.getMonth() + 1).padStart(2, '0')
  const yyyy = today.getFullYear()
  return `LimitesDiversificacion_${dd}-${mm}-${yyyy}.csv`
}

```

## src/features/register-guaranties/components/AutoCompleteRegister.tsx

```tsx
import { DefaultComponents, Typography } from '@nuam/common-fe-lib-components'
import { useCallback } from 'react'

import { AutoCompleteInput } from 'remoteUtilities/components-mf-utilities'

import { OptionsFilter } from '../types/common'

interface Props {
  label: string
  error?: string
  getOptions?: (filter: OptionsFilter) => Promise<any | void>
  onChange?: (newFilter: { label?: string; value?: string | number }) => void
  value?: string | Record<string, string | number | boolean>
  disabled?: boolean
}
const AutoCompleteRegister = ({
  label,
  error,
  getOptions,
  onChange,
  value,
  disabled
}: Props) => {
  const getDataOptions = useCallback(
    async (query?: string, page: number = 0, size: number = 10) => {
      const getOptionsData = await getOptions?.({ query, page, size })
      return getOptionsData
    },
    [getOptions]
  )

  return (
    <div className="w-full min-w-60 max-w-80">
      <AutoCompleteInput
        label={label}
        value={value}
        renderOption={(
          props: React.HTMLAttributes<HTMLLIElement>,
          option: { id: number; label: string }
        ) => (
          <DefaultComponents.Box
            component="li"
            {...props}
            key={option.id}
            sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
          >
            {option.label}
          </DefaultComponents.Box>
        )}
        height={40}
        hideIcon
        itemsPerPage={10}
        minSearchLength={0}
        debounceTime={300}
        fetchOptions={getDataOptions}
        onChange={(value?: { id: number; label: string }) => {
          onChange?.({
            ...value,
            label: value?.label,
            value: value?.id.toString()
          })
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: 'var(--mui-palette-primary-main)'
            }
          },
          '& .MuiInputLabel-root': {
            display: 'flex',
            alignItems: 'center',
            transform: 'translate(14px, 36%)',
            '&.Mui-focused': {
              color: 'var(--mui-palette-primary-main)'
            },
            '&.MuiInputLabel-shrink': {
              transform: 'translate(12px, -10px) scale(0.75)'
            }
          }
        }}
        disabled={disabled}
      />
      {error && (
        <Typography color="primary" variant="body1" className="px-14px pt-3px">
          {error}
        </Typography>
      )}
    </div>
  )
}

export default AutoCompleteRegister

```

## src/features/register-guaranties/components/ConfirmationNewGuarantee.tsx

```tsx
// import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'

import { ModalAlert } from 'remoteUtilities/components-mf-utilities'

import useRegisterGuarantee from '@/features/register-guaranties/hooks/useRegisterGuarantee'

// import { SEARCH_KEYS } from '@/features/view-guarantees/constants/searchKeys'

import { ROUTES } from '@/shared/routes'

const ConfirmationNewGuarantee = () => {
  const {
    stateRegister,
    actions: { setStateProcessRegister }
  } = useRegisterGuarantee()
  const navigate = useNavigate()
  const visibleModalConfirm = stateRegister?.state === 'PROCESS_CONFIRM'
  const onCancel = () => {
    setStateProcessRegister({ state: 'IDLE' })
  }
  const onConfirm = () => {
    setStateProcessRegister({ state: 'UPLOADING_REGISTER' })
    // const currentDate = dayjs().format('YYYY-MM-DD')
    navigate(`/${ROUTES.GUARANTEES_MANAGEMENT}`)
  }
  return (
    visibleModalConfirm && (
      <ModalAlert
        variant="warning"
        title="¿Esta seguro de registrar esta garantía?"
        message="Si deseas continuar, haz clic en Registrar, de lo contrario puedes cancelar y verificar los datos ingresados."
        textSuccess="REGISTRAR"
        onClick={onConfirm}
        textCancel="CANCELAR"
        handleCancel={onCancel}
        orientation="horizontal"
      />
    )
  )
}

export default ConfirmationNewGuarantee

```

## src/features/register-guaranties/components/ProcessRegisterGuarantees.tsx

```tsx
import {
  Button,
  DefaultComponents,
  // Select,
  Typography,
  NuamThemeWrapper
} from '@nuam/common-fe-lib-components'
import { useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { SelectNuam } from 'remoteUtilities/components-mf-utilities'

import useRegisterGuarantee from '@/features/register-guaranties/hooks/useRegisterGuarantee'
import useValidateRegister from '@/features/register-guaranties/hooks/useValidateRegister'
import { getValidateUser } from '@/features/register-guaranties/services/getValidateUser'

import ContainerFieldRegister from '@/shared/components/ContainerFieldRegister'
import { useTranslate } from '@/shared/hooks/useTranslate'
import { ROUTES } from '@/shared/routes'

import { TypeGuarantees } from '../enums/TypeGuarantee'
import useOptionsMoney from '../hooks/useOptionsMoney'
import useValidateIsin from '../hooks/useValidateIsin'
import { ServiceValidateUser } from '../types/getValidateUser'
import ConfirmationNewGuarantee from './ConfirmationNewGuarantee'
import AccountGuarantee from './RegisterValidations/AccountGuarantee'
import AccountOrigin from './RegisterValidations/AccountOrigin'
import CustodioField from './RegisterValidations/CustodioField'
import DepositBank from './RegisterValidations/DepositBank'
import FinalBeneficiary from './RegisterValidations/FinalBeneficiary'
import Isin from './RegisterValidations/Isin'
import Mnemonic from './RegisterValidations/Mnemonic'
import ParticipantField from './RegisterValidations/ParticipantField'
import QuantityGuarantee from './RegisterValidations/QuantityGuarantee'
import SelfLiberation from './RegisterValidations/SelfLiberation'
import SimulationGuaranteeInteger from './RegisterValidations/SimulationGuaranteeInteger'
import TypeAccount from './RegisterValidations/TypeAccount'
import TypeGuarantee from './RegisterValidations/TypeGuarantee'
import SelectFound from './SelectFondo'

const ProcessRegisterGuarantees = () => {
  const {
    information,
    errorRegister,
    actions: { onChangeValue, setStateProcessRegister, clearRegisters }
  } = useRegisterGuarantee()
  const [infoValidateUser, setInfoValidateUser] =
    useState<ServiceValidateUser>()
  const infoParticipant = information?.participant
  const infoCustody = information?.custody
  const posibleCountry =
    information?.country ?? infoParticipant ?? infoCustody?.country
  const validateUser = useCallback(async () => {
    const data = await getValidateUser()
    const participant = data?.participant
    const custodian = data?.custodian
    const country = custodian?.country ?? participant?.country ?? posibleCountry
    onChangeValue({
      country,
      participant:
        participant && !infoParticipant
          ? {
              value: participant?.id.toString(),
              id: participant?.id,
              label: participant?.codeAndName,
              country: participant?.country
            }
          : infoParticipant,
      custody:
        custodian && !infoCustody
          ? {
              value: custodian.id.toString(),
              id: custodian?.id,
              label: custodian?.codeAndName,
              country: custodian?.country
            }
          : infoCustody
    })
    setInfoValidateUser(data)
  }, [infoParticipant, infoCustody, posibleCountry, onChangeValue])
  useEffect(() => {
    clearRegisters()
    validateUser()
  }, [])

  const bothEmpty =
    !infoParticipant?.label?.trim() && !infoCustody?.label?.trim()
  const countryId = information?.country?.id

  useEffect(() => {
    if (bothEmpty && countryId != null) {
      onChangeValue({ country: undefined })
    }
  }, [bothEmpty, countryId, onChangeValue])

  const navigate = useNavigate()
  const onCancelRegister = () => {
    clearRegisters()
    navigate(`/${ROUTES.GUARANTEES_MANAGEMENT}/`)
  }
  const onRegister = () => {
    setStateProcessRegister({ state: 'PROCESS_CONFIRM' })
  }
  const validateRegister = useValidateRegister(infoValidateUser)
  const translate = useTranslate('register-guarantees.isin.errors')
  const { optionsMoney } = useOptionsMoney()
  const typeGuarantee = information?.typeGuarantee
  const typeGuaranteeEqualValues =
    typeGuarantee?.detail === TypeGuarantees.GarantíasValores

  useValidateIsin()

  const isCheckboxDisabled =
    !information?.typeAccount?.detail ||
    information.typeAccount.detail === 'Cuenta General'

  useEffect(() => {
    if (isCheckboxDisabled) {
      onChangeValue({ titleObject: false })
    }
  }, [isCheckboxDisabled])

  return (
    <>
      <DefaultComponents.Grid
        container
        className="flex-wrap justify-center gap-5 rounded-4px p-6 shadow-grey md:gap-6"
      >
        <ContainerFieldRegister
          title="Participante"
          title2="Custodio"
          field={<ParticipantField infoUser={infoValidateUser} />}
          field2={<CustodioField infoUser={infoValidateUser} />}
          className="h-fit min-h-10"
          textOptional={infoValidateUser?.showParticipantOptional}
          textOptional2={infoValidateUser?.showCustodianOptional}
          classNameItems="max-w-80 w-full min-h-10 max-h-none items-center"
          classNameTextOptional="font-bold"
        />
        <ContainerFieldRegister
          title="País"
          title2="Fondo"
          field={
            <Typography variant="body1">
              {information?.country?.name}
            </Typography>
          }
          field2={<SelectFound />}
          className="h-fit min-h-10"
          classNameItems="max-w-80 w-full min-h-10 max-h-none items-center"
        />
        <ContainerFieldRegister
          title="Titulo objeto"
          title2="Tipo de garantía"
          field={
            <NuamThemeWrapper>
              <DefaultComponents.FormControlLabel
                control={
                  <DefaultComponents.Checkbox
                    checked={!!information?.titleObject}
                    onChange={(e) =>
                      onChangeValue({ titleObject: e.target.checked })
                    }
                    color="primary"
                  />
                }
                labelPlacement="start"
                label="¿Es la garantía un título objeto?"
                disabled={isCheckboxDisabled}
              />
            </NuamThemeWrapper>
          }
          field2={<TypeGuarantee />}
          className="h-fit min-h-10"
          classNameItems="max-w-80 w-full min-h-10 max-h-none items-start"
        />
        <ContainerFieldRegister
          title="Deposito/Banco"
          title2={typeGuaranteeEqualValues ? 'Nemotécnico' : 'Moneda'}
          field={<DepositBank />}
          field2={
            typeGuaranteeEqualValues ? (
              <Mnemonic />
            ) : (
              <SelectNuam
                label="Selecciona un tipo de moneda"
                size="small"
                options={optionsMoney?.currenciesCash || []}
                labelKey="code"
                valueKey="code"
                formControlProps={{ fullWidth: true }}
                onChange={(e) => {
                  onChangeValue({ money: e })
                }}
                value={information?.money}
                key={`select-money-${information?.money?.code}`}
              />
            )
          }
          className="min-h-10"
          classNameItems="max-w-80 w-full min-h-10"
        />
        {typeGuaranteeEqualValues && (
          <ContainerFieldRegister
            title="ISIN"
            title2="Moneda"
            field={<Isin />}
            field2={
              <Typography variant="body1" className="flex items-center">
                {' '}
                {information?.money?.code}
              </Typography>
            }
            className="h-fit min-h-10"
            classNameItems="max-w-80 w-full min-h-10"
          />
        )}
        <ContainerFieldRegister
          title="Precio"
          title2="Cuenta origen"
          field={
            <>
              <div className="flex flex-col justify-end">
                <Typography variant="inherit" className="text-end text-base">
                  ${' '}
                  {information?.price?.value
                    ? new Intl.NumberFormat('de-DE', {
                        minimumFractionDigits: 1,
                        maximumFractionDigits: 4
                      }).format(information?.price?.value)
                    : 0}
                </Typography>
                {errorRegister?.price && (
                  <Typography
                    color="primary"
                    variant="body1"
                    className="pt-3px"
                  >
                    {translate(errorRegister?.price ?? '')}
                  </Typography>
                )}
              </div>
            </>
          }
          field2={<AccountOrigin />}
          className="h-fit min-h-10"
          classNameItems="max-w-96 w-full min-h-10 max-h-none items-center"
        />
        <ContainerFieldRegister
          title="Beneficiario final"
          title2="Tipo de cuenta"
          field={<FinalBeneficiary />}
          field2={<TypeAccount />}
          className="h-fit min-h-10"
          classNameItems="max-w-80 w-full min-h-10 max-h-none items-center"
        />
        <ContainerFieldRegister
          title="Cuenta garantía"
          title2="Cantidad Garantía"
          field={<AccountGuarantee />}
          field2={<QuantityGuarantee />}
          className="h-fit min-h-10"
          classNameItems="max-w-80 w-full min-h-10 max-h-none items-center"
        />
        <ContainerFieldRegister
          title="Simulación del Entero de Garantía"
          title2="Autoliberación"
          field={<SimulationGuaranteeInteger />}
          field2={<SelfLiberation />}
          className="h-fit min-h-10"
          classNameItems="max-w-96 w-full min-h-10 max-h-none items-center"
        />
        <div className="flex w-full justify-end gap-3">
          <Button
            variant="text"
            size="large"
            sx={{ width: '240px' }}
            onClick={onCancelRegister}
          >
            Cancelar
          </Button>
          <Button
            size="large"
            sx={{ width: '240px' }}
            onClick={onRegister}
            disabled={!validateRegister}
          >
            registrar
          </Button>
        </div>
      </DefaultComponents.Grid>
      <ConfirmationNewGuarantee />
    </>
  )
}

export default ProcessRegisterGuarantees

```

## src/features/register-guaranties/components/RegisterValidations/AccountGuarantee.tsx

```tsx
import { useCallback, useEffect, useRef } from 'react'

import AutoCompleteRegister from '@/features/register-guaranties/components/AutoCompleteRegister'
import useRegisterGuarantee from '@/features/register-guaranties/hooks/useRegisterGuarantee'
import { getAccountGuarantee } from '@/features/register-guaranties/services/getAccountGuarantee'
import { OptionsFilter } from '@/features/register-guaranties/types/common'
import { transformOptionsAutoComplete } from '@/features/register-guaranties/utils/transformOptionsAutoComplete'

import { AccountGuaranteeOption } from '../../types/getAccountGuarantee'

const AccountGuarantee = () => {
  const renderInitial = useRef(true)
  const {
    information,
    actions: { onChangeValue }
  } = useRegisterGuarantee()
  const typeAccountId = information?.typeAccount?.id
  const custodianID = information?.custody?.id
  const participantID = information?.participant?.id
  const investorID = information?.investorOrigin?.id
  const getDataAccount = useCallback(
    async ({ page = 0, size = 10, query }: OptionsFilter) => {
      if (typeAccountId && (custodianID || participantID)) {
        const getConditions = await getAccountGuarantee({
          page,
          size,
          sort: 'id',
          order: 'asc',
          text: query,
          accountTypeId: typeAccountId,
          custodianId: custodianID,
          participantId: participantID as number,
          investorId: investorID
        })
        const resDataTransform =
          transformOptionsAutoComplete<AccountGuaranteeOption>(
            getConditions,
            (item) => ({
              id: item.consecutiveId,
              label: item.fullName,
              ...item
            })
          )
        return resDataTransform
      }
    },
    [typeAccountId, custodianID, participantID, investorID]
  )

  useEffect(() => {
    if (renderInitial.current) {
      renderInitial.current = false
      onChangeValue({ accountGuarantee: information?.accountGuarantee })
    } else {
      onChangeValue({ accountGuarantee: undefined })
    }
  }, [typeAccountId, custodianID, participantID, investorID])
  return (
    <AutoCompleteRegister
      label="Selecciona una cuenta"
      getOptions={getDataAccount}
      onChange={(e) => {
        onChangeValue({ accountGuarantee: e })
      }}
      value={information?.accountGuarantee}
    />
  )
}

export default AccountGuarantee

```

## src/features/register-guaranties/components/RegisterValidations/AccountOrigin.tsx

```tsx
import { useCallback, useEffect, useRef } from 'react'

import AutoCompleteRegister from '@/features/register-guaranties/components/AutoCompleteRegister'
import { TypeGuarantees } from '@/features/register-guaranties/enums/TypeGuarantee'
import useRegisterGuarantee from '@/features/register-guaranties/hooks/useRegisterGuarantee'
import { getDepositOriginGuarantee } from '@/features/register-guaranties/services/getDepositOrigin'
import { OptionsFilter } from '@/features/register-guaranties/types/common'
import { transformOptionsAutoComplete } from '@/features/register-guaranties/utils/transformOptionsAutoComplete'

import {
  DepositInvestorOriginGuarantee,
  DepositOriginGuarantee
} from '../../types/getDepositOrigin'

const AccountOrigin = () => {
  const renderInitial = useRef(true)
  const {
    information,
    actions: { onChangeValue }
  } = useRegisterGuarantee()
  const bank = information?.bank?.id as number
  const participant = information?.participant?.id as number
  const custody = information?.custody?.id
  const getDataDeposit = useCallback(
    async ({ page = 0, size = 10, query }: OptionsFilter) => {
      const getDeposit = await getDepositOriginGuarantee({
        page,
        size,
        sort: 'id',
        order: 'asc',
        text: query,
        depositoryId: bank,
        participantId: participant,
        custodianId: custody
      })
      return getDeposit
    },
    [bank, participant, custody]
  )
  const hasInfo = bank && (participant || custody)
  const getDataDepositInvestor = useCallback(
    async ({ page = 0, size = 10, query }: OptionsFilter) => {
      if (hasInfo) {
        const getDepositInvestor = await getDataDeposit({ page, size, query })
        onChangeValue({
          originAccountRequired: getDepositInvestor
        })

        const resDataTransform =
          transformOptionsAutoComplete<DepositInvestorOriginGuarantee>(
            getDepositInvestor.investorAccounts,
            (item) => ({
              id: item.id,
              label: item.accountNumber,
              required: getDepositInvestor.required
            })
          )
        return resDataTransform
      }
    },
    [hasInfo, getDataDeposit, onChangeValue]
  )
  const getDataDepositBank = useCallback(
    async ({ page = 0, size = 10, query }: OptionsFilter) => {
      if (hasInfo) {
        const getDepositBank = await getDataDeposit({ page, size, query })
        onChangeValue({
          originAccountRequired: getDepositBank
        })
        const resDataTransform =
          transformOptionsAutoComplete<DepositOriginGuarantee>(
            getDepositBank.participantBankAccounts,
            (item) => ({
              id: item.id,
              label: item.bankAccount,
              required: getDepositBank.required
            })
          )
        return resDataTransform
      }
    },
    [hasInfo]
  )

  const typeGuaranteeEqualValues =
    information?.typeGuarantee?.detail === TypeGuarantees.GarantíasValores
  useEffect(() => {
    if (renderInitial.current) {
      renderInitial.current = false
      onChangeValue({
        investorOrigin: information?.investorOrigin,
        participantOrigin: information?.participantOrigin
      })
    } else {
      onChangeValue({ investorOrigin: undefined, participantOrigin: undefined })
    }
  }, [onChangeValue, participant, bank, custody])

  return (
    <AutoCompleteRegister
      label="Digita un una cuenta depósito"
      onChange={(e) => {
        if (typeGuaranteeEqualValues) {
          onChangeValue({ investorOrigin: e })
        } else {
          onChangeValue({ participantOrigin: e })
        }
      }}
      getOptions={
        typeGuaranteeEqualValues ? getDataDepositInvestor : getDataDepositBank
      }
      value={
        typeGuaranteeEqualValues
          ? information?.investorOrigin
          : information?.participantOrigin
      }
      disabled={!information?.originAccountRequired?.required}
    />
  )
}

export default AccountOrigin

```

## src/features/register-guaranties/components/RegisterValidations/CustodioField.tsx

```tsx
import { Typography } from '@nuam/common-fe-lib-components'
import { useCallback, useEffect, useRef } from 'react'

import AutoCompleteRegister from '@/features/register-guaranties/components/AutoCompleteRegister'
import useRegisterGuarantee from '@/features/register-guaranties/hooks/useRegisterGuarantee'
import { getCustodiesFilter } from '@/features/register-guaranties/services/getCustodiesService'
import { OptionsFilter } from '@/features/register-guaranties/types/common'
import { transformOptionsParticipant } from '@/features/register-guaranties/utils/transformOptionsParticipant'

import { ServiceValidateUser } from '../../types/getValidateUser'

interface Props {
  infoUser?: ServiceValidateUser
}
const CustodioField = ({ infoUser }: Props) => {
  const renderInitial = useRef(true)
  const {
    information: infoState,
    actions: { onChangeValue }
  } = useRegisterGuarantee()
  const custody = infoState?.custody
  const infoCountry = infoState?.country?.id
  const getDataOptions = useCallback(
    async ({ page = 0, size = 10, query }: OptionsFilter) => {
      const getCustody = await getCustodiesFilter({
        page,
        size,
        sort: 'id',
        order: 'asc',
        text: query ?? '',
        countryId: infoCountry as number
      })
      const resDataTransform = transformOptionsParticipant(getCustody)
      if (infoCountry) {
        resDataTransform.data = resDataTransform.data.filter(
          (participant: any) => participant?.country?.id === infoCountry
        )
        return resDataTransform
      }
      return resDataTransform
    },
    [infoCountry]
  )

  useEffect(() => {
    if (renderInitial.current) {
      renderInitial.current = false
      onChangeValue({ custody: infoState?.custody })
    } else {
      if (infoCountry !== custody?.country?.id) {
        onChangeValue({ custody: undefined })
      }
    }
  }, [infoCountry, custody])

  if (infoUser?.showCustodianList) {
    return (
      <AutoCompleteRegister
        label="Selecciona un custodio"
        onChange={(e: any) => {
          const info: any = { custody: e }
          if (!infoCountry) {
            info.country = e.country
          }
          onChangeValue(info)
        }}
        getOptions={getDataOptions}
        value={infoState.custody as any}
      />
    )
  }

  return (
    <Typography variant="body1" className="h-full self-center">
      {custody?.label}
    </Typography>
  )
}

export default CustodioField

```

## src/features/register-guaranties/components/RegisterValidations/DepositBank.tsx

```tsx
import { useCallback, useEffect, useRef } from 'react'

import AutoCompleteRegister from '@/features/register-guaranties/components/AutoCompleteRegister'
import useRegisterGuarantee from '@/features/register-guaranties/hooks/useRegisterGuarantee'
import { getBankGuarantee } from '@/features/register-guaranties/services/getBank'
import { OptionsFilter } from '@/features/register-guaranties/types/common'
import { transformOptionsAutoComplete } from '@/features/register-guaranties/utils/transformOptionsAutoComplete'

import { BankGuarantee } from '../../types/getBank'

const DepositBank = () => {
  const renderInitial = useRef(true)
  const {
    information: infoState,
    actions: { onChangeValue }
  } = useRegisterGuarantee()
  const guaranteeTypeId = infoState?.typeGuarantee?.id
  const getDataBank = useCallback(
    async ({ page = 0, size = 10, query }: OptionsFilter) => {
      if (guaranteeTypeId) {
        const getBank = await getBankGuarantee({
          page,
          size,
          sort: 'id',
          order: 'asc',
          text: query,
          guaranteeTypeId: guaranteeTypeId as number
        })
        const resDataTransform = transformOptionsAutoComplete<BankGuarantee>(
          getBank,
          (item) => ({ id: item.id, label: item.description })
        )
        return resDataTransform
      }
    },
    [guaranteeTypeId]
  )
  useEffect(() => {
    if (renderInitial.current) {
      renderInitial.current = false
      onChangeValue({ bank: infoState?.bank })
    } else {
      onChangeValue({ bank: undefined })
    }
  }, [guaranteeTypeId])

  return (
    <AutoCompleteRegister
      label="Selecciona un tipo de depósito"
      onChange={(e) => onChangeValue({ bank: e })}
      getOptions={getDataBank}
      value={infoState?.bank}
    />
  )
}

export default DepositBank

```

## src/features/register-guaranties/components/RegisterValidations/FinalBeneficiary.tsx

```tsx
import { Typography } from '@nuam/common-fe-lib-components'
import { useCallback, useEffect, useRef, useMemo } from 'react'

import AutoCompleteRegister from '@/features/register-guaranties/components/AutoCompleteRegister'
import { TypeGuarantees } from '@/features/register-guaranties/enums/TypeGuarantee'
import useRegisterGuarantee from '@/features/register-guaranties/hooks/useRegisterGuarantee'
import { getFinalBeneficiaryGuarantee } from '@/features/register-guaranties/services/getFinalBeneficiary'
import { OptionsFilter } from '@/features/register-guaranties/types/common'
import { transformOptionsAutoComplete } from '@/features/register-guaranties/utils/transformOptionsAutoComplete'

import { Investor } from '../../types/getFinalBeneficiary'

const FinalBeneficiary = () => {
  const renderInitial = useRef(true)
  const {
    information,
    actions: { onChangeValue }
  } = useRegisterGuarantee()
  const enumValueCash = TypeGuarantees.GarantíaEfectivo
  const isTypeGuaranteeCash = useMemo(
    () => information?.typeGuarantee?.detail === enumValueCash,
    [information?.typeGuarantee?.detail, enumValueCash]
  )
  const infoBank = useMemo(() => information?.bank, [information?.bank])
  const investorOrigin = useMemo(
    () => information?.investorOrigin?.id,
    [information?.investorOrigin?.id]
  )
  const hasInfo = useMemo(
    () =>
      infoBank && !isTypeGuaranteeCash
        ? (investorOrigin ?? information.originAccountRequired)
        : true,
    [
      infoBank,
      information.originAccountRequired,
      investorOrigin,
      isTypeGuaranteeCash
    ]
  )

  const getDataFinalBeneficiaryService = useCallback(
    async ({ page = 0, size = 10, query }: OptionsFilter) => {
      if (hasInfo) {
        const getBeneficiary = await getFinalBeneficiaryGuarantee({
          page,
          size,
          sort: 'id',
          order: 'asc',
          text: query,
          investorAccountId: investorOrigin,
          depositoryId: infoBank?.id as number
        })
        return getBeneficiary
      }
    },
    [investorOrigin, infoBank, hasInfo]
  )
  const bankHasValues = !!infoBank?.id
  const getDataFinalBeneficiaryOptions = useCallback(
    async (filter: OptionsFilter) => {
      if (bankHasValues) {
        const getBeneficiary = await getDataFinalBeneficiaryService(filter)
        const resDataTransform = transformOptionsAutoComplete<Investor>(
          getBeneficiary?.investorSearch,
          (item) => ({ id: item.id, label: item.fullName })
        )
        return resDataTransform
      }
    },
    [getDataFinalBeneficiaryService, bankHasValues]
  )
  const getDataFinalBeneficiaryTitle = useCallback(
    async (filter: OptionsFilter) => {
      if (bankHasValues) {
        const getBeneficiary = await getDataFinalBeneficiaryService(filter)
        const beneficiaryInvestor = getBeneficiary?.investor
        if (beneficiaryInvestor) {
          onChangeValue({
            finalBeneficiary: {
              label: beneficiaryInvestor?.fullName,
              id: beneficiaryInvestor?.id
            }
          })
        }
      }
    },
    [getDataFinalBeneficiaryService, bankHasValues, onChangeValue]
  )

  useEffect(() => {
    if (renderInitial.current) {
      renderInitial.current = false
      onChangeValue({ finalBeneficiary: information?.finalBeneficiary })
    } else {
      onChangeValue({ finalBeneficiary: undefined })
    }
  }, [infoBank, onChangeValue, investorOrigin, infoBank])
  const showOptionsBeneficiary =
    (!isTypeGuaranteeCash && 'DCV CHILE' === infoBank?.label) ||
    isTypeGuaranteeCash
  useEffect(() => {
    if (!showOptionsBeneficiary) {
      getDataFinalBeneficiaryTitle({})
    }
  }, [getDataFinalBeneficiaryTitle, showOptionsBeneficiary])
  if (!showOptionsBeneficiary) {
    return (
      <Typography variant="body1">
        {' '}
        {information?.finalBeneficiary?.label}
      </Typography>
    )
  }
  return (
    <AutoCompleteRegister
      label="Beneficiario final"
      onChange={(e) => onChangeValue({ finalBeneficiary: e })}
      getOptions={getDataFinalBeneficiaryOptions}
      value={information?.finalBeneficiary}
    />
  )
}

export default FinalBeneficiary

```

## src/features/register-guaranties/components/RegisterValidations/Isin.tsx

```tsx
import { useCallback, useEffect, useRef } from 'react'

import AutoCompleteRegister from '@/features/register-guaranties/components/AutoCompleteRegister'
import useRegisterGuarantee from '@/features/register-guaranties/hooks/useRegisterGuarantee'
import { getIsinGuarantee } from '@/features/register-guaranties/services/getIsinGuarantee'
import { OptionsFilter } from '@/features/register-guaranties/types/common'
import { transformOptionsAutoComplete } from '@/features/register-guaranties/utils/transformOptionsAutoComplete'

import { useTranslate } from '@/shared/hooks/useTranslate'

import { IsinGuaranteeOption } from '../../types/getIsinGuarantee'

const Isin = () => {
  const renderInitial = useRef(true)

  const {
    errorRegister,
    information,
    actions: { onChangeValue }
  } = useRegisterGuarantee()
  const translate = useTranslate('register-guarantees.isin.errors')
  const typeGuarantee = information?.typeGuarantee?.id as number
  const mnemonicValue = information?.mnemonic?.id

  const getDataISIN = useCallback(
    async ({ page = 0, size = 10, query }: OptionsFilter) => {
      if (typeGuarantee) {
        const getConditions = await getIsinGuarantee({
          page,
          size,
          sort: 'id',
          order: 'asc',
          text: query,
          guaranteeTypeId: typeGuarantee,
          securityTitleId: mnemonicValue
        })
        const resDataTransform =
          transformOptionsAutoComplete<IsinGuaranteeOption>(
            getConditions,
            (item) => ({ label: item.isinNumber, ...item })
          )
        return resDataTransform
      }
    },
    [typeGuarantee, mnemonicValue]
  )

  useEffect(() => {
    if (renderInitial.current) {
      renderInitial.current = false
      onChangeValue({ isin: information?.isin })
    } else {
      onChangeValue({ isin: undefined })
    }
  }, [typeGuarantee])
  return (
    <AutoCompleteRegister
      label="Digita el ISIN"
      getOptions={getDataISIN}
      error={errorRegister.isin && translate(errorRegister.isin ?? '')}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onChange={(e: any) => {
        const securityTitle =
          e?.securityTitle as IsinGuaranteeOption['securityTitle']
        const newValue: Record<string, unknown> = { isin: e }
        if (securityTitle) {
          newValue.mnemonic = {
            id: securityTitle.id,
            label: securityTitle.mnemonic
          }
        }
        onChangeValue(newValue)
      }}
      value={information.isin}
    />
  )
}

export default Isin

```

## src/features/register-guaranties/components/RegisterValidations/Mnemonic.tsx

```tsx
import { useCallback, useEffect, useId, useRef } from 'react'

import AutoCompleteRegister from '@/features/register-guaranties/components/AutoCompleteRegister'
import useRegisterGuarantee from '@/features/register-guaranties/hooks/useRegisterGuarantee'
import { getMnemonicGuarantee } from '@/features/register-guaranties/services/getMnemonicGuarantee'
import { OptionsFilter } from '@/features/register-guaranties/types/common'
import { transformOptionsAutoComplete } from '@/features/register-guaranties/utils/transformOptionsAutoComplete'

import { MnemonicGuaranteeOption } from '../../types/getMnemonicGuarantee'

const Mnemonic = () => {
  const renderInitial = useRef(true)
  const {
    information,
    actions: { onChangeValue }
  } = useRegisterGuarantee()
  const typeGuarantee = information?.typeGuarantee?.id
  const depository = information?.bank?.value
  const isinId = information?.isin?.id

  const getDataMnemonic = useCallback(
    async ({ page = 0, size = 10, query }: OptionsFilter) => {
      if (typeGuarantee && depository) {
        const getConditions = await getMnemonicGuarantee({
          page,
          size,
          sort: 'id',
          order: 'asc',
          text: query,
          guaranteeTypeId: typeGuarantee as number,
          depositoryId: +depository,
          isinNumberId: isinId
        })
        const resDataTransform =
          transformOptionsAutoComplete<MnemonicGuaranteeOption>(
            getConditions,
            (item) => ({ id: item.id, label: item.mnemonic })
          )
        return resDataTransform
      }
    },
    [typeGuarantee, depository, isinId]
  )
  useEffect(() => {
    if (renderInitial.current) {
      renderInitial.current = false
      onChangeValue({ mnemonic: information?.mnemonic })
    } else {
      onChangeValue({ mnemonic: undefined })
    }
  }, [typeGuarantee])
  const id = useId()
  return (
    <AutoCompleteRegister
      label="Digita el nemotécnico"
      getOptions={getDataMnemonic}
      onChange={(e) => {
        onChangeValue({ mnemonic: e, isin: undefined })
      }}
      value={information?.mnemonic}
      key={`${id}-${information?.mnemonic}`}
    />
  )
}

export default Mnemonic

```

## src/features/register-guaranties/components/RegisterValidations/ParticipantField.tsx

```tsx
import { Typography } from '@nuam/common-fe-lib-components'
import { useCallback, useEffect, useRef } from 'react'

import AutoCompleteRegister from '@/features/register-guaranties/components/AutoCompleteRegister'
import useRegisterGuarantee from '@/features/register-guaranties/hooks/useRegisterGuarantee'
import { getParticipantsFilter } from '@/features/register-guaranties/services/getParticipantsService'
import { OptionsFilter } from '@/features/register-guaranties/types/common'
import { transformOptionsParticipant } from '@/features/register-guaranties/utils/transformOptionsParticipant'

import { ServiceValidateUser } from '../../types/getValidateUser'

interface Props {
  infoUser?: ServiceValidateUser
}

const ParticipantField = ({ infoUser }: Props) => {
  const renderInitial = useRef(true)
  const {
    information: infoState,
    actions: { onChangeValue }
  } = useRegisterGuarantee()
  const infoCountry = infoState?.country?.id
  const getDataOptions = useCallback(
    async ({ page = 0, size = 10, query }: OptionsFilter) => {
      const getConditions = await getParticipantsFilter({
        page,
        size,
        sort: 'id',
        order: 'asc',
        text: query,
        countryId: infoCountry as number
      })
      const resDataTransform = transformOptionsParticipant(getConditions)
      if (infoCountry) {
        resDataTransform.data = resDataTransform.data.filter(
          (participant: any) => participant?.country?.id === infoCountry
        )
        return resDataTransform
      }
      return resDataTransform
    },
    [infoCountry]
  )
  const participant = infoState?.participant
  useEffect(() => {
    if (renderInitial.current) {
      renderInitial.current = false
      onChangeValue({ participant })
    } else if (infoCountry !== participant?.country?.id) {
      onChangeValue({ participant: undefined })
    }
  }, [infoCountry, participant])

  if (infoUser?.showParticipantList) {
    return (
      <AutoCompleteRegister
        label="Selecciona un participante"
        onChange={(e: any) => {
          const newData: Record<string, any> = { participant: e }
          if (!infoCountry) {
            newData.country = e.country
          }
          onChangeValue(newData)
        }}
        getOptions={getDataOptions}
        value={participant as any}
      />
    )
  }
  return <Typography variant="body1"> {participant?.label}</Typography>
}

export default ParticipantField

```

## src/features/register-guaranties/components/RegisterValidations/QuantityGuarantee.tsx

```tsx
import { TextField } from '@nuam/common-fe-lib-components'

import useRegisterGuarantee from '@/features/register-guaranties/hooks/useRegisterGuarantee'

import { onKeyDownNumber } from '@/shared/utils/onKeyDownNumber'

const QuantityGuarantee = () => {
  const {
    information,
    actions: { onChangeValue }
  } = useRegisterGuarantee()
  const quantityValue = information?.quantityGuarantee
  return (
    <TextField
      value={
        quantityValue
          ? new Intl.NumberFormat('es-CO').format(
              quantityValue?.value ? (+quantityValue?.value as number) : 0
            )
          : ''
      }
      placeholder="Digita la cantidad de la garantía"
      onChange={(value) => {
        const strValFormatted = value.replace(/[.,\s]/g, '')
        if (strValFormatted === '' || /^\d+$/.test(strValFormatted)) {
          onChangeValue({ quantityGuarantee: { value: +strValFormatted } })
        }
      }}
      onKeyDown={onKeyDownNumber}
      type="text"
      className="h-full w-full rounded-4px pl-0"
      size="small"
      sx={{
        '&> .MuiInputBase-root': {
          height: '100%'
        },
        '&.MuiTextField-root': {
          pl: 0
        }
      }}
    />
  )
}

export default QuantityGuarantee

```

## src/features/register-guaranties/components/RegisterValidations/SelfLiberation.tsx

```tsx
import { DefaultComponents } from '@nuam/common-fe-lib-components'
import { useCallback, useEffect, useState } from 'react'

import { getSelfLiberationServer } from '@/features/fixed-parameters-guarantees/services/getSelfLiberation'
import useRegisterGuarantee from '@/features/register-guaranties/hooks/useRegisterGuarantee'

const commonStyle = {
  color: 'var(--mui-palette-primary-main)',
  '&.Mui-checked': {
    color: 'var(--mui-palette-primary-main)'
  }
}

const SelfLiberation = () => {
  const [AutoLiberation, setAutoLiberation] = useState<SelfLiberation>()
  const {
    information,
    actions: { onChangeValue }
  } = useRegisterGuarantee()
  const typeAccountEqualValues =
    information?.typeAccount?.detail === 'Cuenta General'

  useEffect(() => {
    if (typeAccountEqualValues) {
      onChangeValue({ selfLiberation: { label: 'false', value: false } })
    }
  }, [typeAccountEqualValues])
  const typeAccount = information?.typeAccount
  const getDataLiberation = useCallback(async () => {
    if (typeAccount?.id) {
      const data = await getSelfLiberationServer({
        accountTypeId: +typeAccount?.id
      })
      setAutoLiberation(data)
      onChangeValue({
        selfLiberation: {
          label: data.guaranteeSelfRelease ? 'true' : 'false',
          value: !!data.guaranteeSelfRelease
        }
      })
    }
  }, [typeAccount?.id])

  useEffect(() => {
    if (typeAccount?.id) {
      getDataLiberation()
    }
  }, [getDataLiberation])

  return (
    <DefaultComponents.FormControl>
      <DefaultComponents.RadioGroup
        name="radio-buttons-group"
        sx={{ flexDirection: 'row' }}
        value={information?.selfLiberation?.value}
        onChange={({ target: { value, checked } }) => {
          onChangeValue({ selfLiberation: { value: checked, label: value } })
        }}
      >
        <DefaultComponents.FormControlLabel
          value="true"
          control={<DefaultComponents.Radio sx={commonStyle} />}
          sx={{
            minWidth: '119px'
          }}
          label="Si"
          disabled={AutoLiberation?.blockedCheckbox}
          checked={information?.selfLiberation?.label === 'true'}
        />
        <DefaultComponents.FormControlLabel
          value="false"
          control={<DefaultComponents.Radio sx={commonStyle} />}
          sx={{
            minWidth: '119px'
          }}
          label="No"
          disabled={AutoLiberation?.blockedCheckbox}
          checked={information?.selfLiberation?.label === 'false'}
        />
      </DefaultComponents.RadioGroup>
    </DefaultComponents.FormControl>
  )
}

export default SelfLiberation

```

## src/features/register-guaranties/components/RegisterValidations/SimulationGuaranteeInteger.tsx

```tsx
import { Typography } from '@nuam/common-fe-lib-components'
import { useCallback, useEffect, useState } from 'react'

import useRegisterGuarantee from '@/features/register-guaranties/hooks/useRegisterGuarantee'
import { postSimulationQuantityGuarantee } from '@/features/register-guaranties/services/simulationQuantityGuarantee'

import { ServiceSimulationQuantity } from '../../types/simulationQuantityGuarantee'

const SimulationGuaranteeInteger = () => {
  const [guaranteeVolume, setGuaranteeVolume] =
    useState<ServiceSimulationQuantity>()
  const {
    information,
    actions: { onChangeValue }
  } = useRegisterGuarantee()
  const isinValue = information?.isin?.value
  const mnemonicValue = information?.mnemonic?.id
  const quantityValue = information?.quantityGuarantee?.value
  const custodyValue = information?.custody?.id
  const investorValue = information?.finalBeneficiary?.id
  const participantValue = information?.participant?.id
  const titleObject = information?.titleObject
  const typeAccountId = information?.typeAccount?.id
  const countryId = information?.country?.id
  const currency = information?.money?.id
  const accountGuarantee = information?.accountGuarantee
  const typeGuarantee = information?.typeGuarantee?.id
  const calculateSimulationGuarantee = useCallback(async () => {
    const result = await postSimulationQuantityGuarantee({
      guaranteeQuantity: quantityValue as number,
      isinNumberId: isinValue as number,
      securityId: mnemonicValue as number,
      custodianId: custodyValue,
      investorId: investorValue as number,
      participantId: participantValue,
      titleObject: !!titleObject,
      accountTypeId: typeAccountId,
      countryId: countryId,
      currencyId: currency,
      guaranteeGlobalAccountId: accountGuarantee?.guaranteeGlobalAccountId,
      guaranteeParticularAccountId:
        accountGuarantee?.guaranteeParticularAccountId,
      guaranteeTypeId: typeGuarantee as number
    })
    setGuaranteeVolume(result)
    onChangeValue({
      guaranteeVolume: { value: result.guaranteeVolume, isValid: result.valid }
    })
  }, [
    accountGuarantee?.guaranteeGlobalAccountId,
    accountGuarantee?.guaranteeParticularAccountId,
    countryId,
    currency,
    custodyValue,
    investorValue,
    isinValue,
    mnemonicValue,
    onChangeValue,
    participantValue,
    quantityValue,
    titleObject,
    typeAccountId,
    typeGuarantee
  ])
  const executeCalculate =
    (participantValue || custodyValue) &&
    investorValue &&
    mnemonicValue &&
    typeGuarantee &&
    quantityValue &&
    countryId &&
    currency &&
    typeAccountId &&
    (accountGuarantee?.guaranteeGlobalAccountId ||
      accountGuarantee?.guaranteeParticularAccountId)
  useEffect(() => {
    if (executeCalculate) {
      calculateSimulationGuarantee()
    } else {
      onChangeValue({
        guaranteeVolume: { value: 0 }
      })
    }
  }, [executeCalculate, calculateSimulationGuarantee, onChangeValue])
  return (
    <>
      <div className="flex flex-col justify-end">
        <Typography className="text-end text-base" variant="overline">
          ${' '}
          {information?.guaranteeVolume?.value?.toLocaleString('de-DE', {
            maximumFractionDigits: 2
          }) ?? 0}
        </Typography>
        {guaranteeVolume?.reason && (
          <Typography color="primary" variant="body1" className="pt-3px">
            {guaranteeVolume?.reason}
          </Typography>
        )}
      </div>
    </>
  )
}

export default SimulationGuaranteeInteger

```

## src/features/register-guaranties/components/RegisterValidations/TypeAccount.tsx

```tsx
// import { Select } from '@nuam/common-fe-lib-components'
import { useEffect, useState } from 'react'

import { SelectNuam } from 'remoteUtilities/components-mf-utilities'

import useRegisterGuarantee from '@/features/register-guaranties/hooks/useRegisterGuarantee'
import { getTypeAccount } from '@/features/register-guaranties/services/getTypeAccountService'

import { OptionsSelect } from '../../types/options'

const TypeAccount = () => {
  const {
    information,
    actions: { onChangeValue }
  } = useRegisterGuarantee()
  const [optionsTypeAccount, SetOptionsTypeAccount] = useState<OptionsSelect>(
    []
  )
  const serviceTypeAccount = async () => {
    const data = await getTypeAccount()
    SetOptionsTypeAccount(data)
  }
  useEffect(() => {
    serviceTypeAccount()
  }, [])

  return (
    <SelectNuam
      label="Selecciona un tipo cuenta"
      size="small"
      options={optionsTypeAccount}
      labelKey="detail"
      valueKey="detail"
      formControlProps={{ fullWidth: true }}
      onChange={(e) => onChangeValue({ typeAccount: e }, ['accountGuarantee'])}
      value={information?.typeAccount}
      key={`select-type-account-${information?.typeAccount?.id}`}
    />
  )
}

export default TypeAccount

```

## src/features/register-guaranties/components/RegisterValidations/TypeGuarantee.tsx

```tsx
// import { Select } from '@nuam/common-fe-lib-components'
import { useEffect, useState } from 'react'

import { SelectNuam } from 'remoteUtilities/components-mf-utilities'

import useRegisterGuarantee from '@/features/register-guaranties/hooks/useRegisterGuarantee'
import { getTypeGuarantee } from '@/features/register-guaranties/services/getTypeGuaranteeService'

import { OptionsSelect } from '../../types/options'

const TypeGuarantee = () => {
  const {
    information,
    actions: { onChangeValue }
  } = useRegisterGuarantee()
  const [optionsTypeGuarantee, setOptionsTypeGuarantee] =
    useState<OptionsSelect>([])
  const serviceTypeGuarantee = async () => {
    const data = await getTypeGuarantee()
    setOptionsTypeGuarantee(data)
  }
  useEffect(() => {
    serviceTypeGuarantee()
  }, [])

  return (
    <SelectNuam
      label="Selecciona un tipo garantía"
      size="small"
      options={optionsTypeGuarantee}
      labelKey="detail"
      valueKey="detail"
      formControlProps={{ fullWidth: true }}
      onChange={(e) => onChangeValue({ typeGuarantee: e })}
      value={information?.typeGuarantee}
      key={`select-type-guarantee-${information?.typeGuarantee?.id}`}
    />
  )
}

export default TypeGuarantee

```

## src/features/register-guaranties/components/SelectFondo.tsx

```tsx
// import { Select } from '@nuam/common-fe-lib-components'
import { useEffect, useState, useMemo, useCallback, useRef } from 'react'

import { SelectNuam } from 'remoteUtilities/components-mf-utilities'

import { Countries } from '../enums/Countries'
import useRegisterGuarantee from '../hooks/useRegisterGuarantee'
import { getFoundOptions } from '../services/getFoundOptions'
import { AFPFoundService } from '../types/afpFound'

const SelectFound = () => {
  const {
    information,
    actions: { onChangeValue }
  } = useRegisterGuarantee()
  const renderInitial = useRef(true)

  const [options, setOptions] = useState<AFPFoundService>([])
  const countryId = useMemo(
    () => information?.country?.id,
    [information?.country]
  )
  const differentToChile = information?.country?.code !== Countries.CL
  const fetchOptions = useCallback(async () => {
    if (!differentToChile && countryId) {
      const res = await getFoundOptions(countryId)
      setOptions(res)
    }
  }, [countryId, differentToChile])
  useEffect(() => {
    fetchOptions()
  }, [fetchOptions])

  useEffect(() => {
    if (renderInitial.current) {
      renderInitial.current = false
      onChangeValue({
        fondo: information.fondo
      })
    } else if (differentToChile) {
      onChangeValue({ fondo: undefined })
    }
  }, [onChangeValue, differentToChile])
  return (
    <SelectNuam
      label="Selecciona un fondo"
      size="small"
      options={options}
      labelKey="description"
      valueKey="description"
      formControlProps={{ fullWidth: true }}
      onChange={(e) => {
        onChangeValue({ fondo: e })
      }}
      disabled={differentToChile}
      value={information?.fondo ?? ''}
    />
  )
}

export default SelectFound

```

## src/features/register-guaranties/enums/Countries.ts

```typescript
export enum Countries {
  PE = 'PE',
  CL = 'CL',
  CO = 'CO'
}

```

## src/features/register-guaranties/enums/TypeGuarantee.ts

```typescript
export enum TypeGuarantees {
  GarantíasValores = 'Garantías en valores',
  GarantíaEfectivo = 'Garantía en efectivo'
}

```

## src/features/register-guaranties/hooks/useOptionsMoney.ts

```typescript
import { useCallback, useEffect, useState } from 'react'

import { TypeGuarantees } from '@/features/register-guaranties/enums/TypeGuarantee'
import { getMoney } from '@/features/register-guaranties/services/getMoneyGuaranteeService'

import { CurrencyStateService } from '../types/getMoneyGuarantee'
import useRegisterGuarantee from './useRegisterGuarantee'

const useOptionsMoney = () => {
  const [optionsMoney, setOptionsMoney] = useState<CurrencyStateService>()
  const {
    information,
    actions: { onChangeValue }
  } = useRegisterGuarantee()
  const typeGuarantee = information?.typeGuarantee
  const typeGuaranteeEqualValues =
    typeGuarantee?.detail === TypeGuarantees.GarantíasValores

  const serviceOptionsMoney = useCallback(async () => {
    const data = await getMoney({
      guaranteeTypeId: typeGuarantee?.id as number,
      isinNumberId: information?.isin?.value
    })
    if (data.currencyValue) {
      onChangeValue({ money: data.currencyValue })
    } else {
      setOptionsMoney(data)
    }
  }, [typeGuarantee?.id, information?.isin])
  useEffect(() => {
    if (
      typeGuarantee?.id &&
      (typeGuaranteeEqualValues ? !!information?.isin?.value : true)
    ) {
      serviceOptionsMoney()
    }
  }, [typeGuarantee, information?.isin])
  return { optionsMoney }
}

export default useOptionsMoney

```

## src/features/register-guaranties/hooks/useRegisterGuarantee.tsx

```tsx
import { useCallback, useMemo } from 'react'
import { useDispatch } from 'react-redux'

import {
  setClearRegister,
  setDeleteErrorRegister,
  setErrorRegister,
  setProcessError,
  setProcessRegister,
  setRegister
} from 'remoteShell/mf-registerGuarantees'

import { useStateRegisterGuarantees } from '@/shared/hooks/useStateRegisterGuarantees'
import { GuaranteeData, ProcessRegister } from '@/shared/types/storeGuarantee'

const useRegisterGuarantee = () => {
  const dispatch = useDispatch()
  const onChangeValue = useCallback(
    (e: Partial<GuaranteeData>, dataChange?: (keyof GuaranteeData)[]) => {
      const newValue = { ...e }
      dataChange?.forEach((key) => {
        if (key in newValue) {
          newValue[key] = undefined
        }
      })
      dispatch(setRegister(newValue))
    },
    [dispatch]
  )
  const setStateProcessRegister = (stateProcess: ProcessRegister) => {
    dispatch(setProcessRegister(stateProcess))
  }
  const setToStateError = (error: string) => {
    dispatch(setProcessError(error))
  }
  const setErrorRegisterFields = (error: Record<string, string>) => {
    dispatch(setErrorRegister(error))
  }
  const clearErrorRegisterFields = (error: string) => {
    dispatch(setDeleteErrorRegister(error))
  }
  const clearRegisters = () => {
    dispatch(setClearRegister())
  }
  const stateGuarantee = useStateRegisterGuarantees()
  const information = useMemo(
    () => stateGuarantee.infoRegister,
    [stateGuarantee.infoRegister]
  )
  const stateRegister = useMemo(
    () => stateGuarantee.processRegister,
    [stateGuarantee.processRegister]
  )
  const errorRegister = useMemo(
    () => stateGuarantee.errorInfoRegister,
    [stateGuarantee.errorInfoRegister]
  )
  const actions = {
    onChangeValue,
    setStateProcessRegister,
    setToStateError,
    setErrorRegisterFields,
    clearErrorRegisterFields,
    clearRegisters
  }
  return { information, stateRegister, errorRegister, actions }
}

export default useRegisterGuarantee

```

## src/features/register-guaranties/hooks/useValidateIsin.ts

```typescript
import { useCallback, useEffect } from 'react'

import { TypeGuarantees } from '@/features/register-guaranties/enums/TypeGuarantee'
import { getValidateIsin } from '@/features/register-guaranties/services/validateIsin'

import { ValidateIsinError } from '../types/verificateIsin'
import useRegisterGuarantee from './useRegisterGuarantee'

const useValidateIsin = () => {
  const {
    information,
    actions: { onChangeValue, setErrorRegisterFields, clearErrorRegisterFields }
  } = useRegisterGuarantee()
  const typeGuarantee = information?.typeGuarantee
  const mnemonicValue = information?.mnemonic?.id
  const country = information?.country?.id
  const money = information?.money
  const isin = information.isin?.value
  const isGuaranteeValues =
    typeGuarantee?.detail === TypeGuarantees.GarantíasValores
  const typeGuaranteeID = typeGuarantee?.id as number
  const changeData = isGuaranteeValues
    ? [mnemonicValue, isin]
    : [typeGuaranteeID, country, money]
  const validateISINData = useCallback(async () => {
    try {
      const bodyGuaranteeValue = {
        securityId: mnemonicValue,
        isinNumberId: isin,
        guaranteeTypeId: typeGuaranteeID,
        countryId: country,
        currencyId: money?.id as number
      }
      const bodyGuaranteeCash = {
        countryId: isGuaranteeValues ? undefined : country,
        currencyId: money?.id as number,
        guaranteeTypeId: typeGuaranteeID
      }
      const body = isGuaranteeValues ? bodyGuaranteeValue : bodyGuaranteeCash
      const data = await getValidateIsin(body)
      clearErrorRegisterFields('isin')
      clearErrorRegisterFields('price')
      const price = data.guaranteePrice
      if (isGuaranteeValues) {
        onChangeValue({
          price: { value: price }
        })
      } else {
        const isinValue = data.isinNumberId
        const securityValue = data.securityId
        onChangeValue({
          price: { value: price },
          isin: { id: isinValue, value: isinValue },
          mnemonic: { id: securityValue, value: securityValue }
        })
      }
    } catch (error: any) {
      const response = error.response.data as ValidateIsinError
      const messageDetail = response.errorMessageDetail
      if (isGuaranteeValues) {
        onChangeValue({ money: undefined })
        setErrorRegisterFields({ isin: messageDetail })
      } else {
        onChangeValue({ price: { value: 0 } })
        setErrorRegisterFields({ price: messageDetail })
      }
    }
  }, [...changeData])

  useEffect(() => {
    const validationCaseGuaranteeCash = typeGuaranteeID && country && money
    const validationCaseGuaranteeValue = mnemonicValue && country && isin

    if (
      isGuaranteeValues
        ? validationCaseGuaranteeValue
        : validationCaseGuaranteeCash
    ) {
      validateISINData()
    } else {
      onChangeValue({ price: { value: 0 } })
    }
  }, [validateISINData])
}

export default useValidateIsin

```

## src/features/register-guaranties/hooks/useValidateRegister.tsx

```tsx
import { hasAllRequiredFields } from '@/features/register-guaranties/utils/hasAllRequiredFields'

import { Countries } from '../enums/Countries'
import { ServiceValidateUser } from '../types/getValidateUser'
import useRegisterGuarantee from './useRegisterGuarantee'

const useValidateRegister = (infoValidateUser?: ServiceValidateUser) => {
  const { errorRegister } = useRegisterGuarantee()
  const { information } = useRegisterGuarantee()
  const optionalFields: string[] = []
  if (
    infoValidateUser?.showCustodianOptional ||
    !!information?.participant?.id
  ) {
    optionalFields.push('custody.id')
  }
  if (infoValidateUser?.showParticipantOptional || !!information?.custody?.id) {
    optionalFields.push('participant.id')
  }
  if (
    information?.investorOrigin?.required === false ||
    information?.originAccountRequired?.required === false ||
    information?.participantOrigin?.id
  ) {
    optionalFields.push('investorOrigin.id')
  }
  if (
    information?.participantOrigin?.required === false ||
    information?.originAccountRequired?.required === false ||
    information?.investorOrigin?.id
  ) {
    optionalFields.push('participantOrigin.id')
  }

  if (!information?.guaranteeVolume?.isValid) {
    optionalFields.push('guaranteeVolume.value')
  }
  if (information?.country?.code === Countries.CL) {
    optionalFields.push('fondo.id')
  }

  const valideRegister = hasAllRequiredFields(
    information,
    requiredFields,
    optionalFields
  )
  const errorValues = Object.values(errorRegister).length > 0

  return !errorValues && valideRegister
}

const requiredFields = [
  'participant.id',
  'custody.id',
  'typeGuarantee.id',
  'bank.value',
  'country.id',
  'typeAccount.id',
  'accountGuarantee.id',
  'mnemonic.id',
  'money.id',
  'isin.id',
  'participantOrigin.id',
  'investorOrigin.id',
  'finalBeneficiary.id',
  'quantityGuarantee.value',
  'guaranteeVolume.value',
  'selfLiberation.value',
  'price.value',
  'guaranteeVolume.value'
]

export default useValidateRegister

```

## src/features/register-guaranties/pages/RegisterGuarantees.tsx

```tsx
import { Typography } from '@nuam/common-fe-lib-components'

import { ContentWrapper } from 'remoteUtilities/components-mf-utilities'

import ProcessRegisterGuarantees from '@/features/register-guaranties/components/ProcessRegisterGuarantees'

const RegisterGuarantees = () => {
  return (
    <ContentWrapper title="Registro de garantías">
      <Typography variant="h2" className="text-lg font-medium md:text-xl">
        Datos de la garantía a registrar
      </Typography>
      <div className="mt-10">
        <ProcessRegisterGuarantees />
      </div>
    </ContentWrapper>
  )
}

export default RegisterGuarantees

```

## src/features/register-guaranties/services/getAccountGuarantee.ts

```typescript
import { httpGuaranteesRegister } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

import {
  AccountGuaranteeQueryParam,
  AutoCompleteOptionsAccountGuarantee
} from '../types/getAccountGuarantee'

export const getAccountGuarantee = async (
  params: AccountGuaranteeQueryParam
) => {
  const headers = await getHeaders()
  const response =
    await httpGuaranteesRegister.get<AutoCompleteOptionsAccountGuarantee>(
      ENDPOINTS.GUARANTEE_REGISTER_SEARCH_ACCOUNT,
      {
        headers,
        params
      }
    )
  return response.data
}

```

## src/features/register-guaranties/services/getBank.ts

```typescript
import { httpGuaranteesRegister } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

import { BankQueryParam, BanksService } from '../types/getBank'

export const getBankGuarantee = async (params: BankQueryParam) => {
  const headers = await getHeaders()
  const response = await httpGuaranteesRegister.get<BanksService>(
    ENDPOINTS.GUARANTEE_REGISTER_SEARCH_DEPOSITORY,
    {
      headers,
      params
    }
  )
  return response.data
}

```

## src/features/register-guaranties/services/getCustodiesService.ts

```typescript
import { httpGuaranteesRegister } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

import { CustodioQueryParam, ServiceDataCustodio } from '../types/getCustodio'

export const getCustodiesFilter = async (params: CustodioQueryParam) => {
  const headers = await getHeaders()
  const response = await httpGuaranteesRegister.get<ServiceDataCustodio>(
    ENDPOINTS.GUARANTEE_REGISTER_SEARCH_CUSTODY,
    {
      headers,
      params
    }
  )
  return response.data
}

```

## src/features/register-guaranties/services/getDepositOrigin.ts

```typescript
import { httpGuaranteesRegister } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

import {
  DepositOriginQueryParam,
  DepositOriginService
} from '../types/getDepositOrigin'

export const getDepositOriginGuarantee = async (
  params: DepositOriginQueryParam
) => {
  const headers = await getHeaders()
  const response = await httpGuaranteesRegister.get<DepositOriginService>(
    ENDPOINTS.GUARANTEE_REGISTER_SEARCH_ACCOUNT_ORIGIN,
    {
      headers,
      params
    }
  )
  return response.data
}

```

## src/features/register-guaranties/services/getFinalBeneficiary.ts

```typescript
import { httpGuaranteesRegister } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

import {
  FinalBeneficiaryQueryParam,
  FinalBeneficiaryService
} from '../types/getFinalBeneficiary'

export const getFinalBeneficiaryGuarantee = async (
  params: FinalBeneficiaryQueryParam
) => {
  const headers = await getHeaders()
  const response = await httpGuaranteesRegister.get<FinalBeneficiaryService>(
    ENDPOINTS.GUARANTEE_REGISTER_SEARCH_INVESTOR,
    {
      headers,
      params
    }
  )
  return response.data
}

```

## src/features/register-guaranties/services/getFoundOptions.ts

```typescript
import { httpGuaranteesRegister } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

import { AFPFoundService } from '../types/afpFound'

export const getFoundOptions = async (countryId: number) => {
  const headers = await getHeaders()
  const response = await httpGuaranteesRegister.get<AFPFoundService>(
    ENDPOINTS.GUARANTEE_REGISTER_AFP_FOUND,
    {
      headers,
      params: {
        countryId
      }
    }
  )
  return response.data
}

```

## src/features/register-guaranties/services/getIsinGuarantee.ts

```typescript
import { httpGuaranteesRegister } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

import {
  AutoCompleteOptionsIsinGuarantee,
  IsinGuaranteeQueryParam
} from '../types/getIsinGuarantee'

export const getIsinGuarantee = async (params: IsinGuaranteeQueryParam) => {
  const headers = await getHeaders()
  const response =
    await httpGuaranteesRegister.get<AutoCompleteOptionsIsinGuarantee>(
      ENDPOINTS.GUARANTEE_REGISTER_SEARCH_ISIN,
      {
        headers,
        params
      }
    )
  return response.data
}

```

## src/features/register-guaranties/services/getMnemonicGuarantee.ts

```typescript
import { httpGuaranteesRegister } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

import {
  AutoCompleteOptionsMnemonicGuarantee,
  MnemonicGuaranteeQueryParam
} from '../types/getMnemonicGuarantee'

export const getMnemonicGuarantee = async (
  params: MnemonicGuaranteeQueryParam
) => {
  const headers = await getHeaders()
  const response =
    await httpGuaranteesRegister.get<AutoCompleteOptionsMnemonicGuarantee>(
      ENDPOINTS.GUARANTEE_REGISTER_SEARCH,
      {
        headers,
        params
      }
    )
  return response.data
}

```

## src/features/register-guaranties/services/getMoneyGuaranteeService.ts

```typescript
import { httpGuaranteesRegister } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

import { CurrencyService } from '../types/getMoneyGuarantee'

export const getMoney = async (params: {
  guaranteeTypeId: number
  isinNumberId?: number | string
}) => {
  const headers = await getHeaders()
  const response = await httpGuaranteesRegister.get<CurrencyService>(
    ENDPOINTS.GUARANTEE_REGISTER_SEARCH_CURRENCY,
    {
      headers,
      params
    }
  )
  return response.data
}

```

## src/features/register-guaranties/services/getParticipantsService.ts

```typescript
import { httpGuaranteesRegister } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

import {
  ParticipantQueryParam,
  ServiceDataParticipants
} from '../types/getParticipant'

export const getParticipantsFilter = async (params: ParticipantQueryParam) => {
  const headers = await getHeaders()
  const response = await httpGuaranteesRegister.get<ServiceDataParticipants>(
    ENDPOINTS.GUARANTEE_REGISTER_SEARCH_PARTICIPANT,
    {
      headers,
      params
    }
  )
  return response.data
}

```

## src/features/register-guaranties/services/getTypeAccountService.ts

```typescript
import { httpGuaranteesRegister } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

import { OptionsSelect } from '../types/options'

export const getTypeAccount = async () => {
  const headers = await getHeaders()
  const response = await httpGuaranteesRegister.get<OptionsSelect>(
    ENDPOINTS.GUARANTEE_REGISTER_SEARCH_TYPE_ACCOUNT,
    {
      headers
    }
  )
  return response.data
}

```

## src/features/register-guaranties/services/getTypeGuaranteeService.ts

```typescript
import { httpGuaranteesRegister } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

import { OptionsSelect } from '../types/options'

export const getTypeGuarantee = async () => {
  const headers = await getHeaders()
  const response = await httpGuaranteesRegister.get<OptionsSelect>(
    ENDPOINTS.GUARANTEE_REGISTER_SEARCH_TYPE_GUARANTEE,
    {
      headers
    }
  )
  return response.data
}

```

## src/features/register-guaranties/services/getValidateUser.ts

```typescript
import { httpGuaranteesRegister } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

import { ServiceValidateUser } from '../types/getValidateUser'

export const getValidateUser = async () => {
  const headers = await getHeaders()
  const response = await httpGuaranteesRegister.get<ServiceValidateUser>(
    ENDPOINTS.GUARANTEE_REGISTER_VALIDATE_USER,
    {
      headers
    }
  )
  return response.data
}

```

## src/features/register-guaranties/services/simulationQuantityGuarantee.ts

```typescript
import { httpGuaranteesRegister } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

import {
  ServiceSimulationQuantity,
  SimulationQuantityParams
} from '../types/simulationQuantityGuarantee'

export const postSimulationQuantityGuarantee = async (
  param: SimulationQuantityParams
) => {
  const headers = await getHeaders()
  const response = await httpGuaranteesRegister.post<ServiceSimulationQuantity>(
    ENDPOINTS.GUARANTEES_VOLUME_CALCULATE_REGISTER,
    param,
    {
      headers
    }
  )
  return response.data
}

```

## src/features/register-guaranties/services/validateIsin.ts

```typescript
import { httpGuaranteesRegister } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

import {
  ValidateIsinParams,
  ValidateIsinService
} from '../types/verificateIsin'

export const getValidateIsin = async (body: ValidateIsinParams) => {
  const headers = await getHeaders()
  const response = await httpGuaranteesRegister.post<ValidateIsinService>(
    ENDPOINTS.GUARANTEE_REGISTER_VALIDATE_ISIN,
    body,
    {
      headers
    }
  )
  return response.data
}

```

## src/features/register-guaranties/types/afpFound.d.ts

```typescript
export interface AfpFound {
  id: number
  afpFundCode: string
  description: string
}

export type AFPFoundService = AfpFound[]

```

## src/features/register-guaranties/types/autoCompleteStructure.d.ts

```typescript
export interface AutoCompleteOptions<T> {
  pageNumber: number
  pageSize: number
  totalElements: number
  totalPages: number
  content: T[]
}

```

## src/features/register-guaranties/types/common.d.ts

```typescript
export interface Common<T> {
  pageNumber: number
  pageSize: number
  totalElements: number
  totalPages: number
  content: T
}

export interface OptionsFilter {
  query?: string
  page?: number
  size?: number
}

```

## src/features/register-guaranties/types/country.d.ts

```typescript
export interface CountryGuarantee {
  id: number
  code: string
  name: string
}

```

## src/features/register-guaranties/types/getAccountGuarantee.d.ts

```typescript
import { AutoCompleteOptions } from './autoCompleteStructure'

export interface AccountGuaranteeOption {
  consecutiveId: number
  guaranteeGlobalAccountId?: number
  guaranteeParticularAccountId?: number
  fullName: string
}

export type AutoCompleteOptionsAccountGuarantee =
  AutoCompleteOptions<AccountGuaranteeOption>

export interface AccountGuaranteeQueryParam extends Record<
  string,
  string | number | undefined
> {
  page: number
  size: number
  sort: string
  order: string
  text?: string
  accountTypeId: number
  custodianId: number
  participantId: number
  investorId?: number
}

```

## src/features/register-guaranties/types/getBank.d.ts

```typescript
import { Common } from './common'

export interface BankGuarantee {
  id: string
  code: string
  description: string
}
export type BanksService = Common<BankGuarantee[]>

export interface BankQueryParam extends Record<
  string,
  string | number | undefined
> {
  page: number
  size: number
  sort: string
  order: string
  text?: string
  guaranteeTypeId?: number | string
}

```

## src/features/register-guaranties/types/getCustodio.d.ts

```typescript
import { AutoCompleteOptions } from './autoCompleteStructure'
import { CountryGuarantee } from './country'

export interface Custodio {
  id: number
  country: CountryGuarantee
  codeAndName: string
}
export type Participants = Custodio[]

export type ServiceDataCustodio = AutoCompleteOptions<Custodio>

export interface CustodioQueryParam extends Record<
  string,
  string | number | undefined
> {
  page: number
  size: number
  sort: string
  order: string
  text: sting
  countryId: number
}

```

## src/features/register-guaranties/types/getDepositOrigin.d.ts

```typescript
import { Common } from './common'

export interface DepositOriginGuarantee {
  bankAccount: string
  id: number
}
export interface DepositInvestorOriginGuarantee {
  accountNumber: string
  id: number
}

export interface DepositOriginService {
  investorAccounts: Common<DepositInvestorOriginGuarantee[]>
  participantBankAccounts: Common<DepositOriginGuarantee[]>
  required: boolean
}

export interface DepositOriginQueryParam extends Record<
  string,
  string | number | undefined
> {
  page: number
  size: number
  sort: string
  order: string
  text?: string
  depositoryId: number | string
  participantId: number | string
  custodianId: number | string
}

```

## src/features/register-guaranties/types/getFinalBeneficiary.d.ts

```typescript
import { Common } from './common'

export interface Investor {
  id: number
  fullName: string
}
type investorSearch = Common<Investor[]>

export interface FinalBeneficiaryService {
  investorSearch?: invertorSearch
  investor?: Investor
}

export interface FinalBeneficiaryQueryParam extends Record<
  string,
  string | number | undefined
> {
  page: number
  size: number
  sort: string
  order: string
  text?: string
  investorAccountId?: number
  depositoryId: number | string
}

```

## src/features/register-guaranties/types/getIsinGuarantee.d.ts

```typescript
import { AutoCompleteOptions } from './autoCompleteStructure'

export interface IsinGuaranteeOption {
  id: number
  isinNumber: string
  securityTitle: {
    id: number
    mnemonic: string
    isin: string
  }
}

export type AutoCompleteOptionsIsinGuarantee =
  AutoCompleteOptions<IsinGuaranteeOption>

export interface IsinGuaranteeQueryParam extends Record<
  string,
  string | number | undefined
> {
  page: number
  size: number
  sort: string
  order: string
  text?: string
  guaranteeTypeId: number
  securityTitleId?: number | string
}

```

## src/features/register-guaranties/types/getMnemonicGuarantee.d.ts

```typescript
import { AutoCompleteOptions } from './autoCompleteStructure'

export interface MnemonicGuaranteeOption {
  id: number
  mnemonic: string
  isin: string
}

export type AutoCompleteOptionsMnemonicGuarantee =
  AutoCompleteOptions<MnemonicGuaranteeOption>

export interface MnemonicGuaranteeQueryParam extends Record<
  string,
  string | number | undefined
> {
  page: number
  size: number
  sort: string
  order: string
  text?: string
  guaranteeTypeId: number
  depositoryId: number
  isinNumberId?: number | string
}

```

## src/features/register-guaranties/types/getMoneyGuarantee.d.ts

```typescript
interface currency {
  id: number
  code: string
  name: string
}
export interface CurrencyStateService {
  currenciesCash: currency[] | null
  currencyValue: currency | null
}

export type CurrencyService = CurrencyStateService

```

## src/features/register-guaranties/types/getParticipant.d.ts

```typescript
import { AutoCompleteOptions } from './autoCompleteStructure'
import { CountryGuarantee } from './country'

export interface Participant {
  id: number
  country: CountryGuarantee
  codeAndName: string
}
export type Participants = Participant[]

export type ServiceDataParticipants = AutoCompleteOptions<Participant>

export interface ParticipantQueryParam extends Record<
  string,
  string | number | undefined
> {
  page: number
  size: number
  sort: string
  order: string
  text: sting
  countryId: number
}

```

## src/features/register-guaranties/types/getValidateUser.d.ts

```typescript
export interface ServiceValidateUser {
  showParticipantList: boolean
  showParticipantOptional: boolean
  participant: {
    id: number
    codeAndName: string
    country: {
      id: number
      code: string
      name: string
    }
  }
  custodian: {
    id: number
    codeAndName: string
    country: {
      id: number
      code: string
      name: string
    }
  }
  showCustodianList: boolean
  showCustodianOptional: boolean
  userNubo: { id: number; userType: string }
}

```

## src/features/register-guaranties/types/options.d.ts

```typescript
interface Option {
  id: number
  description: string
  category: string
  detail: string
}
export type OptionsSelect = OptionTypeGuarantee[]

```

## src/features/register-guaranties/types/simulationQuantityGuarantee.d.ts

```typescript
export interface SimulationQuantityParams {
  participantId: number | string
  custodianId: number | string
  investorId: number | string
  guaranteeTypeId: number | string
  securityId: number | string
  isinNumberId: number | string
  guaranteeQuantity: number | string
  titleObject: boolean
  issuerId?: number
  statusId?: number
  countryId?: number
  currencyId?: number
  accountTypeId?: number
  guaranteeGlobalAccountId?: number
  guaranteeParticularAccountId?: number
}

export interface ServiceSimulationQuantity {
  guaranteeVolume: number
  valid: boolean
  reason: string
}

```

## src/features/register-guaranties/types/verificateIsin.d.ts

```typescript
export interface ValidateIsinService {
  guaranteePrice: number
  isinNumberId: number
  securityId: number
}

export interface ValidateIsinParams {
  securityId?: number | string
  isinNumberId?: number | string
  guaranteeTypeId?: number
  countryId?: number
  currencyId?: number | string
}
export interface ValidateIsinError {
  errorCode: string
  errorMessage: string
  errorMessageDetail: string
  httpCode: string
  httpMethod: string
  timestamp: string
  url: string
}

```

## src/features/register-guaranties/utils/hasAllRequiredFields.ts

```typescript
export const hasAllRequiredFields = (
  info: Record<string, any>,
  fields: string[],
  optionalFields: string[] = []
): boolean => {
  const resultIterFields = fields.every((path) => {
    if (optionalFields.includes(path)) return true
    const value = path.split('.').reduce<unknown>((acc, key) => {
      if (acc !== null && typeof acc === 'object') {
        return (acc as Record<string, any>)[key]
      }
      return undefined
    }, info)

    const result =
      value !== void 0 &&
      value !== null &&
      value !== '' &&
      value !== '0' &&
      value !== 0
    return result
  })
  return resultIterFields
}

```

## src/features/register-guaranties/utils/transformOptionsAutoComplete.ts

```typescript
import { AutoCompleteOptions } from '@/shared/types/autoCompleteStructure'

type CommonValue = string | number | boolean | undefined

interface ObjectCommon<O> {
  [key: string]: O | object
}
export const transformOptionsAutoComplete = <T>(
  resService: AutoCompleteOptions<T> | undefined | null,
  callbackFn: (
    item: T
  ) => ObjectCommon<
    ObjectCommon<CommonValue | ObjectCommon<CommonValue>> | CommonValue
  >
) => {
  if (!resService) {
    return { data: [], total: 0 }
  }
  const data = resService.content?.map((item) => callbackFn(item as T)) ?? []
  return { data, total: resService.totalPages ?? 0 }
}

```

## src/features/register-guaranties/utils/transformOptionsParticipant.ts

```typescript
import { transformOptionsAutoComplete } from '@/features/register-guaranties/utils/transformOptionsAutoComplete'

import { Participant, ServiceDataParticipants } from '../types/getParticipant'

export const transformOptionsParticipant = (
  resService: ServiceDataParticipants
) => {
  return transformOptionsAutoComplete<Participant>(resService, (item) => ({
    id: item.id,
    label: item.codeAndName,
    country: { ...item.country }
  }))
}

```

## src/features/transfer-liberation-guarantees/components/FiltersForm.tsx

```tsx
// FiltersForm.tsx
import {
  Button,
  DefaultComponents,
  Typography
} from '@nuam/common-fe-lib-components'
import { Controller, Control } from 'react-hook-form'

import {
  AutoCompleteInput,
  MuiSelect
} from 'remoteUtilities/components-mf-utilities'

type FiltersFormProps = {
  control: Control<any>
  handleSubmit: (e?: React.BaseSyntheticEvent) => void
  filtersConfig: Record<string, any>
  isFieldEnabled: (field: string) => boolean
  errors?: Record<string, any>
  isValid?: boolean
}

export const FiltersForm = ({
  control,
  handleSubmit,
  filtersConfig,
  isFieldEnabled,
  isValid
}: FiltersFormProps) => {
  // Helper function to ensure options are valid for MuiSelect
  const ensureValidOptions = (options: any[]) => {
    if (!Array.isArray(options)) return []

    // Ensure each option has id and name properties
    return options
      .map((option) => {
        if (!option) return null
        // If option is already in correct format, return it
        if (option.id !== undefined && option.name !== undefined) {
          return option
        }
        // Try to adapt the format if possible
        return {
          id: option.id || option.value || '',
          name: option.name || option.label || String(option)
        }
      })
      .filter(Boolean) // Remove any null entries
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
      <div className="grid grid-cols-2 gap-x-8 gap-y-6">
        {Object.entries(filtersConfig).map(([key, config]) => {
          if (config.type === 'select' || config.type === 'autocomplete') {
            const disabled = !isFieldEnabled(key)
            return (
              <div
                key={key}
                className="flex items-end justify-between gap-3 border-b border-border-gray"
              >
                <Typography
                  variant="body1"
                  className="text-sm font-bold md:text-base"
                >
                  {config.label}
                </Typography>
                <div className="flex h-full w-full max-w-[330px] justify-end">
                  <Controller
                    name={key}
                    control={control}
                    render={({ field }) => {
                      if (config.type === 'select') {
                        const loading = config.loading
                        const validOptions = ensureValidOptions(
                          config.options || []
                        )
                        const selectedName =
                          validOptions.find((o) => o.id === field.value)
                            ?.name || ''
                        return (
                          <DefaultComponents.Tooltip
                            title={selectedName}
                            arrow
                            placement="top"
                          >
                            <div
                              style={{
                                position: 'relative',
                                width: '100%'
                              }}
                            >
                              <MuiSelect
                                {...field}
                                key={`${key}-${field.value}`}
                                value={field.value || ''}
                                options={validOptions}
                                placeholder={config.placeholder}
                                disabled={disabled || loading}
                                style={{ width: '100%' }}
                              />
                              {loading && (
                                <DefaultComponents.CircularProgress
                                  size={24}
                                  style={{
                                    position: 'absolute',
                                    top: '20%',
                                    left: '80%',
                                    transform: 'translate(-50%, -50%)',
                                    pointerEvents: 'none',
                                    zIndex: 2,
                                    color: '#FF4201'
                                  }}
                                />
                              )}
                            </div>
                          </DefaultComponents.Tooltip>
                        )
                      }
                      return (
                        <DefaultComponents.Tooltip
                          title={field.value?.label || ''}
                          arrow
                          placement="top"
                        >
                          <div className="w-full">
                            <AutoCompleteInput
                              {...field}
                              label={config.placeholder}
                              fetchOptions={config.fetchOptions}
                              placeholder={config.placeholder}
                              minSearchLength={2}
                              debounceTime={300}
                              disabled={disabled}
                              renderOption={(
                                props: React.HTMLAttributes<HTMLLIElement>,
                                option: { id: number; label: string }
                              ) => (
                                <DefaultComponents.Box
                                  component="li"
                                  {...props}
                                  key={option.id}
                                  sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2
                                  }}
                                >
                                  {option.label}
                                </DefaultComponents.Box>
                              )}
                            />
                          </div>
                        </DefaultComponents.Tooltip>
                      )
                    }}
                  />
                </div>
              </div>
            )
          }
          return null
        })}
        <div className="flex justify-start">
          <Button
            type="submit"
            className="rounded-md px-4 py-2 text-white"
            sx={{ width: '240px' }}
            disabled={!isValid}
          >
            Buscar
          </Button>
        </div>
      </div>
    </form>
  )
}

```

## src/features/transfer-liberation-guarantees/components/GuarantiesList.tsx

```tsx
import { Button, MaterialIcons } from '@nuam/common-fe-lib-components'
import { useState } from 'react'

import {
  AlertMui,
  ModalAlert,
  NewTable,
  Spinner
} from 'remoteUtilities/components-mf-utilities'

import NumericInputField from '@/shared/components/NumericInputField'
import { formatNumberWithThousandsSeparator } from '@/shared/utils/formatNumberWithThousandsSeparator'

import { GUARANTEE_COLUMNS } from '../constants/guaranteeMessages'
import { useGuaranteeActions } from '../hooks/useGuaranteeActions'
import {
  GuaranteeActionParams,
  GuaranteeColumn
} from '../types/guaranteeActions'

const GuaranteeList = ({
  guaranteeList,
  endpoint,
  filterValues,
  guaranteeSummary,
  baseGuaranteeSummary,
  setGuaranteeSummary,
  refreshData,
  axiosInstanceKey,
  validateGuaranteeQuantityFn,
  operationType,
  getTotalGuaranteeAmountFn,
  calculateLiberationAmountFn,
  sendGuaranteeFn,
  transferContext
}: GuaranteeActionParams) => {
  const [_tableData, setTableData] = useState<any[]>(guaranteeList)

  const {
    tableRows,
    alert,
    setAlert,
    modalAlert,
    // setModalAlert,
    sendingGuarantee,
    updateRow,
    handleBlur,
    handleTotalQuantity,
    setThereAreSelected,
    handleSendGuarantee,
    isValidConfirm,
    handleBack,
    openModal,
    modalConfig,
    setModalConfig,
    isConfirmDisabled,
    actionLabels,
    handleConfirm
  } = useGuaranteeActions({
    guaranteeList,
    filterValues,
    guaranteeSummary,
    baseGuaranteeSummary,
    setGuaranteeSummary,
    refreshData,
    validateGuaranteeQuantityFn,
    operationType,
    getTotalGuaranteeAmountFn,
    calculateLiberationAmountFn,
    sendGuaranteeFn,
    transferContext
  })

  // Set data from remote source
  const handleSetDataRemote = (_page: number, dataTable: any[]) => {
    setTableData(dataTable)
  }

  // Update columns with dynamic action verbs
  const columns = GUARANTEE_COLUMNS.map((column) => {
    if (column.dynamic) {
      return {
        ...column,
        headerName: column.headerName.replace(
          '{actionVerb}',
          actionLabels.actionVerbCap
        )
      }
    }
    return column
  })

  // Add special rendering for first column (cantidad a liberar/trasladar)
  const columnsWithActions: GuaranteeColumn[] = [
    {
      ...columns[0],
      renderCell: ({ row }: { row: any }) => (
        <div className="flex items-center gap-2 py-1">
          <NumericInputField
            value={row.cantidadLiberar}
            onChange={(val) =>
              updateRow(row.id, {
                cantidadLiberar:
                  val > row?.guaranteeValuation?.quantity
                    ? row?.guaranteeValuation?.quantity
                    : val
              })
            }
            onBlur={(val) =>
              handleBlur({
                ...row,
                cantidadLiberar:
                  val > row?.guaranteeValuation?.quantity
                    ? row?.guaranteeValuation?.quantity
                    : val
              })
            }
            placeholder="0"
            className="w-50 text-righ h-7 rounded outline-none"
            error={row?.hasError}
          />
          <MaterialIcons.AddCircleOutline
            style={{ cursor: 'pointer', color: '#FF4201' }}
            onClick={() => handleTotalQuantity(row)}
            fontSize="small"
          />
        </div>
      )
    },
    ...columns.slice(1)
  ]

  // Format price with thousands separator
  const columnsWithFormatting = columnsWithActions.map((col) => {
    if (col.field === 'marketPrice') {
      return {
        ...col,
        renderCell: ({ row }: { row: any }) => (
          <span>
            {formatNumberWithThousandsSeparator(
              row?.guaranteeValuation?.marketPrice ?? '-',
              false,
              false
            )}
          </span>
        )
      }
    }
    return col
  })

  return (
    <div className="relative">
      {/* Spinner overlay */}
      {sendingGuarantee && (
        <div
          className="absolute inset-0 z-50 flex items-center justify-center bg-white/70"
          style={{ backdropFilter: 'blur(2px)' }}
        >
          <Spinner />
        </div>
      )}
      <NewTable
        columns={columnsWithFormatting}
        endpoint={endpoint}
        axiosInstanceKey={axiosInstanceKey}
        setDataRemote={handleSetDataRemote}
        rows={tableRows}
        setThereAreSelected={setThereAreSelected}
        disableRowSelectionOnClick={true}
      />
      <div className="flex w-full justify-end gap-3 py-4">
        <Button
          variant="text"
          size="large"
          sx={{ width: '240px' }}
          onClick={handleBack}
          disabled={sendingGuarantee}
        >
          Volver
        </Button>
        <Button
          size="large"
          sx={{ width: '240px' }}
          onClick={() =>
            openModal({
              title: actionLabels.confirmModalTitle,
              message:
                'Si deseas continuar, haz clic en aceptar, de lo contrario puedes cancelar y regresar a la pantalla anterior.',
              variant: 'warning',
              textSuccess: 'Aceptar',
              onConfirm: async () => {
                await handleSendGuarantee()
              }
            })
          }
          disabled={!isValidConfirm() || sendingGuarantee}
        >
          {actionLabels.confirmButtonText}
        </Button>
      </div>
      {modalConfig && (
        <ModalAlert
          title={modalConfig.title}
          message={modalConfig.message}
          textSuccess={modalConfig.textSuccess}
          onClick={handleConfirm}
          variant={modalConfig.variant}
          handleCancel={() => setModalConfig(null)}
          textCancel="Cancelar"
          disabled={isConfirmDisabled || sendingGuarantee}
          orientation="horizontal"
        />
      )}
      {modalAlert?.open && (
        <ModalAlert
          title={modalAlert.title}
          message={modalAlert.message}
          textSuccess={modalAlert.textSuccess}
          onClick={modalAlert.onClose}
          variant={modalAlert.variant}
        />
      )}
      <AlertMui
        message={alert?.message}
        severity={alert?.severity}
        onClose={() => setAlert(null)}
        open={alert?.open}
      />
    </div>
  )
}

export default GuaranteeList

```

## src/features/transfer-liberation-guarantees/components/LiberationForm.tsx

```tsx
import { DefaultComponents, Typography } from '@nuam/common-fe-lib-components'

import { formatNumberWithThousandsSeparator } from '@/shared/utils/formatNumberWithThousandsSeparator'

export interface GuaranteeSummary {
  guaranteeIntegerTotal: number
  guaranteeExigencyTotal: number
  amountAvailableRelease: number
  amountTotalRelease: number
  valid: boolean | null
  code: string | null
  reasonError: string | null
}

export const LiberationForm = ({
  guaranteeSummary
}: {
  guaranteeSummary: GuaranteeSummary
}) => {
  return (
    <DefaultComponents.Grid
      container
      className="flex-wrap justify-center gap-6 rounded-4px p-6 shadow-grey"
    >
      <div className="grid w-full grid-cols-2 gap-x-8 gap-y-6">
        <div className="flex items-end justify-between gap-3 border-b border-border-gray">
          <Typography
            variant="body1"
            className="text-sm font-bold md:text-base"
          >
            Entero de garantía
          </Typography>
          <div className="flex h-full w-full max-w-[330px] justify-end">
            <Typography variant="body1" className="text-sm md:text-base">
              {formatNumberWithThousandsSeparator(
                guaranteeSummary?.guaranteeIntegerTotal
              ) ?? '--'}
            </Typography>
          </div>
        </div>

        <div className="flex items-end justify-between gap-3 border-b border-border-gray">
          <Typography
            variant="body1"
            className="text-sm font-bold md:text-base"
          >
            Exigencia de garantía
          </Typography>
          <div className="flex h-full w-full max-w-[330px] justify-end">
            <Typography variant="body1" className="text-sm md:text-base">
              {formatNumberWithThousandsSeparator(
                guaranteeSummary?.guaranteeExigencyTotal
              ) ?? '--'}
            </Typography>
          </div>
        </div>
        <div className="flex items-end justify-between gap-3 border-b border-border-gray">
          <Typography
            variant="body1"
            className="text-sm font-bold md:text-base"
          >
            Monto disponible para liberar
          </Typography>
          <div className="flex h-full w-full max-w-[330px] justify-end">
            <Typography variant="body1" className="text-sm md:text-base">
              {formatNumberWithThousandsSeparator(
                guaranteeSummary?.amountAvailableRelease
              ) ?? '--'}
            </Typography>
          </div>
        </div>
        <div className="flex items-end justify-between gap-3 border-b border-border-gray">
          <Typography
            variant="body1"
            className="text-sm font-bold md:text-base"
          >
            Monto total a liberar
          </Typography>
          <div className="flex h-full w-full max-w-[330px] justify-end">
            <Typography
              variant="body1"
              className={`text-sm md:text-base ${
                guaranteeSummary?.reasonError ===
                'El monto a liberar es superior al monto disponible'
                  ? 'text-red-500'
                  : ''
              }`}
            >
              {formatNumberWithThousandsSeparator(
                guaranteeSummary?.amountTotalRelease
              ) ?? '--'}
            </Typography>
          </div>
        </div>
      </div>
    </DefaultComponents.Grid>
  )
}

```

## src/features/transfer-liberation-guarantees/components/OperationTab.tsx

```tsx
import { Typography } from '@nuam/common-fe-lib-components'
import { useState, useCallback, useMemo } from 'react'

import { CustomTabs } from 'remoteUtilities/components-mf-utilities'

import { OperationType } from '../hooks/useFilters'
import {
  sendGuaranteeToDeposit,
  sendGuaranteeToDepositTransfer
} from '../services/GuaranteeToDeposit'
import {
  validateGuaranteeQuantity,
  validateGuaranteeQuantityTransfer,
  getTotalGuaranteeAmount,
  getTotalGuaranteeAmountTransfer,
  calculateLiberationAmount,
  calculateLiberationAmountTransfer
} from '../services/validateLiberation'
import GuaranteeList from './GuarantiesList'
import { GuaranteeSummary, LiberationForm } from './LiberationForm'
import { TransferForm } from './TransferForm'

const OperationTab = ({
  guaranteeSummary,
  baseGuaranteeSummary,
  filterValues,
  onOperationTypeChange,
  currentOperationType,
  sharedListProps,
  canViewTabRelease,
  canViewTabTransfer
}: {
  guaranteeSummary: GuaranteeSummary
  baseGuaranteeSummary: GuaranteeSummary
  filterValues: any
  onOperationTypeChange?: (t: OperationType) => void
  currentOperationType?: OperationType
  isValid?: boolean
  triggerSearch?: () => void
  sharedListProps: {
    guaranteeList: any[]
    endpoint: string
    setGuaranteeSummary: (s: any) => void
    refreshData: () => void
    currentAxiosKey: string
  }
  canViewTabRelease?: boolean
  canViewTabTransfer?: boolean
}) => {
  const [transferContext, setTransferContext] = useState<{
    guaranteeTypeId?: number
    accountTypeId?: number
    investorId?: number
    isValid: boolean
    guaranteeGlobalAccountId?: number
    guaranteeParticularAccountId?: number
  }>({
    isValid: false
  })
  const handleTransferStateChange = useCallback(
    (state: {
      guaranteeTypeId?: number
      accountTypeId?: number
      investorId?: number
      isValid: boolean
    }) => {
      setTransferContext((prev) => {
        if (
          prev.guaranteeTypeId === state.guaranteeTypeId &&
          prev.accountTypeId === state.accountTypeId &&
          prev.investorId === state.investorId &&
          prev.isValid === state.isValid
        ) {
          return prev
        }
        return state
      })
    },
    []
  )
  // Filtrar las pestañas según los permisos
  const visibleTabs = useMemo(
    () => [
      ...(canViewTabTransfer ? [{ label: 'TRASLADO DE GARANTÍAS' }] : []),
      ...(canViewTabRelease ? [{ label: 'LIBERACIÓN DE GARANTÍAS' }] : [])
    ],
    [canViewTabTransfer, canViewTabRelease]
  )

  const visibleTabsContent = useMemo(
    () => [
      ...(canViewTabTransfer
        ? [
            <>
              <Typography
                variant="h2"
                className="py-2 text-xl md:text-2xl"
                fontWeight={500}
              >
                Información de las garantías
              </Typography>
              <TransferForm
                guaranteeSummary={guaranteeSummary}
                filterValues={filterValues}
                beneficiaryEditable={true}
                onSubmitTransfer={(data) => {
                  console.log('Transfer submit', data)
                }}
                onTransferStateChange={handleTransferStateChange}
              />
              <div className="mt-6">
                <GuaranteeList
                  guaranteeList={sharedListProps.guaranteeList}
                  endpoint={
                    sharedListProps?.endpoint
                      ? '/guarantee-transfer/all/search' +
                        sharedListProps?.endpoint
                      : ''
                  }
                  filterValues={filterValues}
                  guaranteeSummary={guaranteeSummary}
                  baseGuaranteeSummary={baseGuaranteeSummary}
                  setGuaranteeSummary={sharedListProps.setGuaranteeSummary}
                  refreshData={sharedListProps.refreshData}
                  axiosInstanceKey="httpGuaranteeTransfer"
                  validateGuaranteeQuantityFn={
                    validateGuaranteeQuantityTransfer
                  }
                  operationType="transfer"
                  getTotalGuaranteeAmountFn={getTotalGuaranteeAmountTransfer}
                  calculateLiberationAmountFn={
                    calculateLiberationAmountTransfer
                  }
                  sendGuaranteeFn={sendGuaranteeToDepositTransfer}
                  transferContext={transferContext}
                />
              </div>
            </>
          ]
        : []),
      ...(canViewTabRelease
        ? [
            <>
              <Typography
                variant="h2"
                className="py-2 text-xl md:text-2xl"
                fontWeight={500}
              >
                Información de las garantías
              </Typography>
              <LiberationForm guaranteeSummary={guaranteeSummary} />
              <div className="mt-6">
                <GuaranteeList
                  guaranteeList={sharedListProps.guaranteeList}
                  endpoint={
                    sharedListProps?.endpoint
                      ? '/guarantee-release/all/search' +
                        sharedListProps?.endpoint
                      : ''
                  }
                  filterValues={filterValues}
                  guaranteeSummary={guaranteeSummary}
                  baseGuaranteeSummary={baseGuaranteeSummary}
                  setGuaranteeSummary={sharedListProps.setGuaranteeSummary}
                  refreshData={sharedListProps.refreshData}
                  axiosInstanceKey="httpGuaranteeLiberation"
                  validateGuaranteeQuantityFn={validateGuaranteeQuantity}
                  operationType="release"
                  getTotalGuaranteeAmountFn={getTotalGuaranteeAmount}
                  calculateLiberationAmountFn={calculateLiberationAmount}
                  sendGuaranteeFn={sendGuaranteeToDeposit}
                />
              </div>
            </>
          ]
        : [])
    ],
    [
      canViewTabTransfer,
      canViewTabRelease,
      guaranteeSummary,
      filterValues,
      sharedListProps,
      transferContext,
      handleTransferStateChange
    ]
  )

  const [currentTab, setCurrentTab] = useState<number>(() => {
    if (currentOperationType === 'transfer' && canViewTabTransfer) return 0
    if (currentOperationType === 'release' && canViewTabRelease) {
      return canViewTabTransfer ? 1 : 0
    }
    return 0
  })

  const tabIndexToType = (idx: number): OperationType => {
    if (canViewTabTransfer && idx === 0) return 'transfer'
    return 'release'
  }

  const handleChangeTab = (idx: number) => {
    setCurrentTab(idx)
    const newType = tabIndexToType(idx)
    onOperationTypeChange?.(newType)
    // se elimina triggerSearch para no validar ni buscar automáticamente
  }

  return (
    <div className="my-6 flex w-full flex-col">
      <CustomTabs
        tabs={visibleTabs}
        tabsContent={visibleTabsContent}
        alignTabs="left"
        tabColor="#FF4201"
        currentTab={currentTab}
        onChange={handleChangeTab}
      />
    </div>
  )
}

export default OperationTab

```

## src/features/transfer-liberation-guarantees/components/TransferForm.tsx

```tsx
import { yupResolver } from '@hookform/resolvers/yup'
import { DefaultComponents, Typography } from '@nuam/common-fe-lib-components'
import { useEffect, useMemo, useState, useCallback, useRef } from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'

import {
  AutoCompleteInput,
  MuiSelect
} from 'remoteUtilities/components-mf-utilities'

import { formatNumberWithThousandsSeparator } from '@/shared/utils/formatNumberWithThousandsSeparator'

import {
  getAccountTypes,
  getBeneficiaries,
  getGuaranteeAccounts
} from '../services/filters'
import { GuaranteeSummary } from './LiberationForm'

export interface OptionItem {
  id: number
  label: string
  [k: string]: any
}

export interface TransferFormValues {
  accountTypeDestination: number | ''
  guaranteeAccountDestination: OptionItem | null
  finalBeneficiaryDestination: OptionItem | null
}

interface TransferFormProps {
  guaranteeSummary: GuaranteeSummary
  filterValues: Record<string, any>
  beneficiaryEditable: boolean
  onSubmitTransfer: (data: TransferFormValues) => void
  onTransferStateChange?: (state: {
    guaranteeTypeId?: number
    accountTypeId?: number
    investorId?: number
    isValid: boolean
  }) => void
}

export const TransferForm = ({
  guaranteeSummary,
  filterValues,
  beneficiaryEditable,
  onSubmitTransfer,
  onTransferStateChange
}: TransferFormProps) => {
  // Reemplazamos el estado previo por los elementos crudos del servicio
  const [accountTypesRaw, setAccountTypesRaw] = useState<any[]>([])

  // Cargar tipos de cuenta (misma fuente que FiltersForm)
  useEffect(() => {
    let mounted = true
    getAccountTypes().then((data: any[]) => {
      if (!mounted) return
      setAccountTypesRaw(data || [])
    })
    return () => {
      mounted = false
    }
  }, [])

  // Adaptamos a la estructura value/label que espera MuiSelect internamente (similar a FiltersForm)
  const accountTypeSelectOptions = useMemo(
    () =>
      accountTypesRaw.map((a) => ({
        id: String(a.id), // <- MuiSelect busca option.id
        name: a.detail || a.name || a.label
      })),
    [accountTypesRaw]
  )

  // IDs de países (ajustar según catálogo real)
  const COUNTRY_COLOMBIA = 37
  const COUNTRY_PERU = 135
  const COUNTRY_CHILE = 35
  const countryId = filterValues?.country

  // Regla: Colombia y Perú bloquean edición; Chile permite edición
  const isCountryNonEditable = [COUNTRY_COLOMBIA, COUNTRY_PERU].includes(
    countryId
  )
  const computedBeneficiaryEditable =
    !isCountryNonEditable && countryId === COUNTRY_CHILE

  const schema: yup.ObjectSchema<TransferFormValues> = useMemo(
    () =>
      yup
        .object({
          accountTypeDestination: yup
            .number()
            .transform((value, originalValue) => {
              // Normaliza '' / null / undefined a undefined para que required actúe correctamente,
              // y convierte strings numéricas a number.
              if (
                originalValue === '' ||
                originalValue === null ||
                typeof originalValue === 'undefined'
              )
                return undefined
              const parsed = Number(originalValue)
              return Number.isNaN(parsed) ? value : parsed
            })
            .typeError('Campo requerido')
            .required('Campo requerido'),
          guaranteeAccountDestination: yup
            .object({
              id: yup.number().required(),
              label: yup.string().required()
            })
            .nullable()
            .required('Campo requerido'),
          finalBeneficiaryDestination: yup
            .object({
              id: yup.number().required(),
              label: yup.string().required()
            })
            .nullable()
            .test(
              'required-if-editable',
              'Campo requerido',
              (v) => !computedBeneficiaryEditable || v !== null
            )
        })
        .required(),
    [computedBeneficiaryEditable]
  )

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: {}
  } = useForm<TransferFormValues>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      accountTypeDestination: '',
      guaranteeAccountDestination: null,
      finalBeneficiaryDestination: isCountryNonEditable
        ? filterValues?.beneficiary
          ? {
              id: filterValues.beneficiary.id,
              label: filterValues.beneficiary.label
            }
          : null
        : beneficiaryEditable
          ? null
          : filterValues?.beneficiary
            ? {
                id: filterValues.beneficiary.id,
                label: filterValues.beneficiary.label
              }
            : null
    }
  })

  const accountTypeDestination = watch('accountTypeDestination')
  const finalBeneficiaryDestination = watch('finalBeneficiaryDestination')
  const guaranteeAccountDestination = watch('guaranteeAccountDestination')

  // Reset cuenta garantía cuando cambian dependencias
  useEffect(() => {
    setValue('guaranteeAccountDestination', null)
  }, [accountTypeDestination, finalBeneficiaryDestination, setValue])

  // Sincroniza beneficiario destino cuando el país obliga bloqueo
  useEffect(() => {
    if (isCountryNonEditable && filterValues?.beneficiary) {
      setValue('finalBeneficiaryDestination', {
        id: filterValues.beneficiary.id,
        label: filterValues.beneficiary.label
      })
    }
  }, [isCountryNonEditable, filterValues?.beneficiary, setValue])

  // Tipado de retorno uniforme para los autocompletes (como en FiltersForm)
  interface FetchResult {
    data: OptionItem[]
    total: number
  }

  const fetchBeneficiariesDestination = useCallback(
    async (
      text: string = '',
      page: number = 0,
      size: number = 10
    ): Promise<FetchResult> => {
      // Si está bloqueado no buscamos ni permitimos cambio
      if (isCountryNonEditable) {
        return {
          data: filterValues?.beneficiary
            ? [
                {
                  id: filterValues.beneficiary.id,
                  label: filterValues.beneficiary.label
                }
              ]
            : [],
          total: filterValues?.beneficiary ? 1 : 0
        }
      }
      const countryId = filterValues?.country
      const data = await getBeneficiaries(page, size, text, countryId)
      const content = data?.content || []
      return {
        data: content.map((b: any) => ({
          id: b.id ?? b.consecutiveId,
          // nombre preferente
          label: b.name || b.fullName || b.label
        })),
        total: data?.total ?? content.length
      }
    },
    [isCountryNonEditable, filterValues?.beneficiary, filterValues?.country]
  )

  const fetchGuaranteeAccountsDestination = useCallback(
    async (
      text: string = '',
      page: number = 0,
      size: number = 10
    ): Promise<FetchResult> => {
      if (!accountTypeDestination || !finalBeneficiaryDestination) {
        return { data: [], total: 0 }
      }
      const countryId = filterValues?.country
      const investorId = finalBeneficiaryDestination.id
      const participantId =
        filterValues?.participant?.participantId ?? undefined
      const custodianId = filterValues?.participant?.custodianId ?? undefined
      const data = await getGuaranteeAccounts(
        page,
        size,
        text,
        countryId,
        accountTypeDestination as number,
        investorId,
        participantId,
        custodianId
      )
      const content = data?.content || []
      return {
        data: content.map((acc: any) => ({
          ...acc,
          id:
            acc.guaranteeGlobalAccountId ??
            acc.guaranteeParticularAccountId ??
            acc.id,
          label: acc.accountCode + ' ' + acc.accountName
        })),
        total: data?.total ?? content.length
      }
    },
    [
      accountTypeDestination,
      finalBeneficiaryDestination,
      filterValues?.country,
      filterValues?.participant
    ]
  )

  const exceeds =
    guaranteeSummary?.reasonError ===
    'El monto a Trasladar es superior al monto disponible'

  // Emite el estado necesario para el traslado (IDs + validez) evitando loops
  const lastEmittedRef = useRef<{
    guaranteeTypeId?: number
    accountTypeId?: number
    investorId?: number
    isValid: boolean
  } | null>(null)

  useEffect(() => {
    const nextState = {
      guaranteeTypeId: guaranteeAccountDestination?.id,
      accountTypeId:
        typeof accountTypeDestination === 'number'
          ? accountTypeDestination
          : undefined,
      investorId: finalBeneficiaryDestination?.id,
      isValid:
        !!guaranteeAccountDestination?.id &&
        typeof accountTypeDestination === 'number' &&
        !!finalBeneficiaryDestination?.id,
      guaranteeGlobalAccountId:
        guaranteeAccountDestination?.guaranteeGlobalAccountId,
      guaranteeParticularAccountId:
        guaranteeAccountDestination?.guaranteeParticularAccountId
    }

    const prev = lastEmittedRef.current
    const changed =
      !prev ||
      prev.guaranteeTypeId !== nextState.guaranteeTypeId ||
      prev.accountTypeId !== nextState.accountTypeId ||
      prev.investorId !== nextState.investorId ||
      prev.isValid !== nextState.isValid

    if (changed) {
      lastEmittedRef.current = nextState
      onTransferStateChange?.(nextState)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    guaranteeAccountDestination?.id,
    accountTypeDestination,
    finalBeneficiaryDestination?.id
  ])

  return (
    <form
      onSubmit={handleSubmit(onSubmitTransfer)}
      className="flex flex-col gap-6"
      noValidate
    >
      <DefaultComponents.Grid
        container
        className="flex-wrap justify-center gap-6 rounded-4px p-6 shadow-grey"
      >
        <div className="grid w-full grid-cols-2 gap-x-8 gap-y-6">
          {/* Métricas */}
          <div className="flex items-end justify-between gap-3 border-b border-border-gray">
            <Typography
              variant="body1"
              className="text-sm font-bold md:text-base"
            >
              Entero de garantía
            </Typography>
            <div className="flex h-full w-full max-w-[330px] justify-end">
              <Typography variant="body1" className="text-sm md:text-base">
                {formatNumberWithThousandsSeparator(
                  guaranteeSummary?.guaranteeIntegerTotal
                ) ?? '--'}
              </Typography>
            </div>
          </div>
          <div className="flex items-end justify-between gap-3 border-b border-border-gray">
            <Typography
              variant="body1"
              className="text-sm font-bold md:text-base"
            >
              Exigencia de garantía
            </Typography>
            <div className="flex h-full w-full max-w-[330px] justify-end">
              <Typography variant="body1" className="text-sm md:text-base">
                {formatNumberWithThousandsSeparator(
                  guaranteeSummary?.guaranteeExigencyTotal
                ) ?? '--'}
              </Typography>
            </div>
          </div>
          <div className="flex items-end justify-between gap-3 border-b border-border-gray">
            <Typography
              variant="body1"
              className="text-sm font-bold md:text-base"
            >
              Monto disponible
            </Typography>
            <div className="flex h-full w-full max-w-[330px] justify-end">
              <Typography variant="body1" className="text-sm md:text-base">
                {formatNumberWithThousandsSeparator(
                  guaranteeSummary?.amountAvailableRelease
                ) ?? '--'}
              </Typography>
            </div>
          </div>
          <div className="flex items-end justify-between gap-3 border-b border-border-gray">
            <Typography
              variant="body1"
              className="text-sm font-bold md:text-base"
            >
              Monto total a trasladar
            </Typography>
            <div className="flex h-full w-full max-w-[330px] justify-end">
              <Typography
                variant="body1"
                className={`text-sm md:text-base ${
                  exceeds ? 'text-red-500' : ''
                }`}
              >
                {formatNumberWithThousandsSeparator(
                  guaranteeSummary?.amountTotalRelease
                ) ?? '--'}
              </Typography>
            </div>
          </div>
          {/* Campos destino */}
          <div className="col-span-2 grid grid-cols-2 gap-x-8 gap-y-6 pt-4">
            <div className="flex items-end justify-between gap-3 border-b border-border-gray">
              <Typography
                variant="body1"
                className="text-sm font-bold md:text-base"
              >
                Tipo de cuenta (destino)
              </Typography>
              <div className="flex h-full w-full max-w-[330px] justify-end">
                <Controller
                  name="accountTypeDestination"
                  control={control}
                  render={({ field }) => (
                    <MuiSelect
                      {...field}
                      value={
                        field.value === '' || field.value === undefined
                          ? ''
                          : String(field.value) // <- siempre string para el select
                      }
                      options={accountTypeSelectOptions}
                      placeholder="Selecciona un tipo de cuenta"
                      onChange={(val: any) => {
                        // val llega como string (id seleccionado) o ''
                        const normalized =
                          val === '' ||
                          val === null ||
                          typeof val === 'undefined'
                            ? ''
                            : Number(val)
                        field.onChange(normalized)
                      }}
                    />
                  )}
                />
              </div>
            </div>
            <div className="flex items-end justify-between gap-3 border-b border-border-gray">
              <Typography
                variant="body1"
                className="text-sm font-bold md:text-base"
              >
                Cuenta garantía (destino)
              </Typography>
              <div className="flex h-full w-full max-w-[330px] justify-end">
                <Controller
                  name="guaranteeAccountDestination"
                  control={control}
                  render={({ field }) => (
                    <div className="w-full">
                      <AutoCompleteInput
                        {...field}
                        value={field.value}
                        placeholder="Selecciona una cuenta"
                        fetchOptions={fetchGuaranteeAccountsDestination}
                        minSearchLength={0}
                        debounceTime={300}
                        disabled={
                          !accountTypeDestination ||
                          !watch('finalBeneficiaryDestination')
                        }
                      />
                    </div>
                  )}
                />
              </div>
            </div>
            <div className="flex items-end justify-between gap-3 border-b border-border-gray">
              <Typography
                variant="body1"
                className="text-sm font-bold md:text-base"
              >
                Beneficiario final (destino)
              </Typography>
              <div className="flex h-full w-full max-w-[330px] justify-end">
                <Controller
                  name="finalBeneficiaryDestination"
                  control={control}
                  render={({ field }) => (
                    <div className="w-full">
                      <AutoCompleteInput
                        {...field}
                        value={field.value}
                        disabled={!computedBeneficiaryEditable}
                        placeholder="Selecciona un beneficiario"
                        fetchOptions={fetchBeneficiariesDestination}
                        minSearchLength={2}
                        debounceTime={300}
                      />
                    </div>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </DefaultComponents.Grid>
    </form>
  )
}

```

## src/features/transfer-liberation-guarantees/constants/endpoints.ts

```typescript
export const GUARANTEE_LIBERATION_TRANSFER_ENDPOINTS = Object.freeze({
  COUNTRY: '/country',
  PARTICIPANT_CUSTODIAN: `/participant/guarantee/release/search`,
  BENEFICIARIES: `/investor/guarantee/release/search`,
  ACCOUNT_TYPES: '/type/account/guarantee/release',
  GUARANTEE_ACCOUNTS: '/account/guarantee/release/search',
  USER_VALIDATION: '/guarantee-release/validate/user',
  SEARCH_GUARANTEE_INFO: '/guarantee-release/all/search',
  SEND_GUARANTEE_TO_DEPOSIT:
    '/guarantee-deposit/manual/guarantee-release/confirm',
  SEND_GUARANTEE_TO_TRANSFER: '/guarantee-transfer/all/search',
  SEARCH_GUARANTEE_INFO_TRANSFER: '/guarantee-transfer/all/search',
  SEND_GUARANTEE_TO_DEPOSIT_TRANSFER: '/guarantee-transfer/manual/confirm'
})

```

## src/features/transfer-liberation-guarantees/constants/filterRules.ts

```typescript
export const FILTER_DEPENDENCIES: Record<string, string[]> = {
  //participant: ['country'], // participante depende de país
  beneficiary: ['participant'], // beneficiario depende de participante
  accountType: ['beneficiary'], // tipo cuenta depende de beneficiario
  guaranteeAccount: ['accountType'] // cuenta garantía depende de tipo cuenta
}

```

## src/features/transfer-liberation-guarantees/constants/filtersConfig.ts

```typescript
import * as yup from 'yup'

import {
  getAccountTypes,
  getBeneficiaries,
  getCountries,
  getGuaranteeAccounts,
  getParticipantCustodian
} from '@/features/transfer-liberation-guarantees/services/filters'

import { AutocompleteOption } from '@/shared/types/AutoCompleteOption'
import { IAutoCompleteInput } from '@/shared/types/declare'

import { validateUser } from '../services/user'

type FetchOptionsFactory = (
  getValues: () => Record<string, any>
) => IAutoCompleteInput['fetchOptions']

export const fetchOptionsParticipants: FetchOptionsFactory =
  (getValues) =>
  async (query = '', page = 0, limit = 10) => {
    try {
      const validateUserType = await validateUser()
      if (!validateUserType?.showParticipantList) {
        const participant = validateUserType?.participant
        console
        const currentParticipant = {
          data: [
            {
              id: participant.participantId,
              label: participant.fullName,
              ...participant
            }
          ],
          total: 1
        }
        return currentParticipant
      }
      const countryId = getValues().country
      //if (!countryId) return { data: [], total: 0 }
      const response = await getParticipantCustodian(
        page,
        limit,
        query,
        countryId
      )
      const participants: AutocompleteOption[] = response.content.map(
        (item: any) => ({
          id: item.consecutiveId,
          label: item.fullName,
          ...item
        })
      )

      return {
        data: participants,
        total: response.total
      }
    } catch (error) {
      console.error('Error en fetchOptionsParticipants:', error)
      return { data: [], total: 0 }
    }
  }

export const fetchOptionsBeneficiaries: FetchOptionsFactory =
  (getValues) =>
  async (query = '', page = 0, limit = 10) => {
    try {
      const countryId = getValues().country
      //if (!countryId) return { data: [], total: 0 }
      const response = await getBeneficiaries(page, limit, query, countryId)
      if (!response || !Array.isArray(response.content)) {
        console.error('Respuesta inesperada de getBeneficiaries:', response)
        return { data: [], total: 0 }
      }
      const participants: AutocompleteOption[] = response.content.map(
        (item: any) => ({
          id: item.consecutiveId,
          label: item.fullName,
          ...item
        })
      )

      return {
        data: participants,
        total: response.total
      }
    } catch (error) {
      console.error('Error en fetchOptionsParticipants:', error)
      return { data: [], total: 0 }
    }
  }

export const fetchOptionsAccountGuarantee: FetchOptionsFactory =
  (getValues) =>
  async (query = '', page = 0, limit = 10) => {
    try {
      const countryId = getValues().country
      const investorId = getValues().beneficiary?.id
      const accountTypeId = getValues().accountType
      const participantId = getValues().participant?.participantId
      const custodianId = getValues().participant?.custodianId
      if (!accountTypeId) return { data: [], total: 0 }
      const response = await getGuaranteeAccounts(
        page,
        limit,
        query,
        countryId,
        accountTypeId,
        investorId,
        participantId,
        custodianId
      )
      const participants: AutocompleteOption[] = response.content.map(
        (item: any) => ({
          id: item.consecutiveId,
          label: item.accountCode + ' ' + item.accountName,
          ...item
        })
      )

      return {
        data: participants,
        total: response.total
      }
    } catch (error) {
      console.error('Error en fetchOptionsParticipants:', error)
      return { data: [], total: 0 }
    }
  }
export const guaranteeFiltersConfig = {
  country: {
    type: 'select',
    label: 'País',
    placeholder: 'Selecciona un país',
    validation: yup.mixed().nullable().optional(),
    options: (async () => {
      try {
        const validateUserType = await validateUser()
        if (validateUserType?.showCountryList) {
          const countries = await getCountries()
          return Array.isArray(countries)
            ? countries.map((country) => ({
                id: country.id || '',
                name: country.name || country.label || ''
              }))
            : []
        }
        const country = validateUserType?.country || {}
        return [
          {
            id: country.id || '',
            name: country.name || country.label || ''
          }
        ]
      } catch (error) {
        return []
      }
    })()
  },
  beneficiary: {
    type: 'autocomplete',
    label: 'Beneficiario final',
    placeholder: 'Digita o selecciona un beneficiario',
    validation: yup
      .mixed()
      .nullable()
      .required('El beneficiario es obligatorio'),
    fetchOptions: fetchOptionsBeneficiaries
  },
  participant: {
    type: 'autocomplete',
    label: 'Participante/Custodio que garantiza',
    placeholder: 'Selecciona un participante',
    validation: yup
      .mixed()
      .nullable()
      .required('El participante / custodio es obligatorio'),
    fetchOptions: fetchOptionsParticipants
  },
  accountType: {
    type: 'select',
    label: 'Tipo de cuenta',
    placeholder: 'Selecciona una cuenta',
    validation: yup.number().required('El tipo de cuenta es obligatorio'),
    options: getAccountTypes()
  },
  guaranteeAccount: {
    type: 'autocomplete',
    label: 'Cuenta garantía',
    placeholder: 'Selecciona una cuenta',
    validation: yup.mixed().nullable().optional(),
    fetchOptions: fetchOptionsAccountGuarantee
  }
}

```

## src/features/transfer-liberation-guarantees/constants/guaranteeMessages.tsx

```tsx
import { GuaranteeColumn } from '../types/guaranteeActions'

export const GUARANTEE_ACTION_LABELS = {
  transfer: {
    actionLabel: 'traslado',
    actionVerbCap: 'Trasladar',
    actionVerbLower: 'trasladar',
    confirmButtonText: 'Confirmar traslado',
    confirmModalTitle: '¿Estás seguro de confirmar el traslado de la garantía?',
    successMessage: (origen?: string, destino?: string) =>
      `Se realizó traslado de la garantía de la cuenta ${origen || 'origen'} hacia la cuenta ${destino || 'destino'}.`
  },
  release: {
    actionLabel: 'liberación',
    actionVerbCap: 'Liberar',
    actionVerbLower: 'liberar',
    confirmButtonText: 'Confirmar liberación',
    confirmModalTitle:
      '¿Estás seguro de confirmar la liberación de la garantía?',
    successMessage: 'Garantía liberada exitosamente.'
  }
}

export const ERROR_MESSAGES = {
  unexpectedError: {
    title: 'Ocurrió un error inesperado',
    message:
      'Vuelve a intentarlo, si el error persiste comunícate a xxxxxx@nuamx.com o 55555555.'
  }
}

export const GUARANTEE_COLUMNS: GuaranteeColumn[] = [
  {
    field: 'cantidadLiberar',
    headerName: 'Cantidad a {actionVerb}',
    minWidth: 200,
    dynamic: true
  },
  {
    field: 'guaranteeValuationQuantity',
    headerName: 'Cantidad Total',
    minWidth: 150,
    renderCell: ({ row }: { row: any }) => (
      <span>{row?.guaranteeValuation?.quantity ?? '-'}</span>
    )
  },
  {
    field: 'montoLiberar',
    headerName: 'Monto a {actionVerb}',
    minWidth: 150,
    dynamic: true,
    renderCell: ({ row }: { row: any }) => (
      <span>{row.montoLiberar ?? '-'}</span>
    )
  },
  {
    field: 'guaranteeValuationGuaranteeInteger',
    headerName: 'Monto Total',
    minWidth: 150,
    renderCell: ({ row }: { row: any }) => (
      <span>{row?.guaranteeValuation?.guaranteeInteger ?? '-'}</span>
    )
  },
  {
    field: 'registrationDate',
    headerName: 'Fecha de Registro',
    minWidth: 150,
    renderCell: ({ row }: { row: any }) => (
      <span>{row?.registrationDate ?? '-'}</span>
    )
  },
  {
    field: 'guaranteeNumber',
    headerName: 'No. de Garantía',
    minWidth: 150,
    renderCell: ({ row }: { row: any }) => (
      <span>{row?.guaranteeNumber ?? '-'}</span>
    )
  },
  {
    field: 'guaranteeNumberDeposit',
    headerName: 'No. de Garantía Destino',
    minWidth: 150,
    renderCell: ({ row }: { row: any }) => (
      <span>{row?.guaranteeNumberDeposit ?? '-'}</span>
    )
  },
  {
    field: 'depositoryCode',
    headerName: 'Depósito',
    minWidth: 150,
    renderCell: ({ row }: { row: any }) => (
      <span>{row?.depository?.code ?? '-'}</span>
    )
  },
  {
    field: 'classInstrumentDescription',
    headerName: 'Tipo de Instrumento',
    minWidth: 150,
    renderCell: ({ row }: { row: any }) => (
      <span>{row?.classInstrument?.description ?? '-'}</span>
    )
  },
  {
    field: 'securityTitleMnemonic',
    headerName: 'Nemotécnico',
    minWidth: 150,
    renderCell: ({ row }: { row: any }) => (
      <span>{row?.securityTitle?.mnemonic ?? '-'}</span>
    )
  },
  {
    field: 'isinNumberIsinNumber',
    headerName: 'ISIN',
    minWidth: 150,
    renderCell: ({ row }: { row: any }) => (
      <span>{row?.isinNumber?.isinNumber ?? '-'}</span>
    )
  },
  {
    field: 'guaranteeValuationMarketPrice',
    headerName: 'Precio',
    minWidth: 150,
    renderCell: ({ row }: { row: any }) => (
      <span>{row?.guaranteeValuation?.marketPrice ?? '-'}</span>
    )
  },
  {
    field: 'guaranteeValuationRiskPercentage',
    headerName: 'Riesgo',
    minWidth: 150,
    renderCell: ({ row }: { row: any }) => (
      <span>{row?.guaranteeValuation?.riskPercentage ?? '-'}</span>
    )
  }
]

```

## src/features/transfer-liberation-guarantees/hooks/useFilters.ts

```typescript
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
// import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import * as yup from 'yup'

// import { RootState } from 'remoteShell/mf-store'

import { FILTER_DEPENDENCIES } from '../constants/filterRules'
import {
  fetchOptionsAccountGuarantee,
  //fetchOptionsAccountGuarantee,
  fetchOptionsBeneficiaries,
  fetchOptionsParticipants
} from '../constants/filtersConfig'
import {
  searchGuaranteeInfo,
  searchGuaranteeInfoTransfer
} from '../services/filters'
import { validateUser } from '../services/user'
import {
  validateGuaranteeQuantity,
  validateGuaranteeQuantityTransfer
} from '../services/validateLiberation'
import { getFilterDependents } from '../utils/getFilterDependents'

type AnyRecord = Record<string, any>

export type OperationType = 'release' | 'transfer'

export const useFilters = (
  filtersConfig: any,
  initialOperationType: OperationType = 'release'
) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [userValidation, setUserValidation] = useState<any>(null)
  const [filterResponse, setFilterResponse] = useState<any>(null)
  const [endpoint, setEndpoint] = useState<any>(null)
  const [validateUserType, setValidateUserType] = useState<any>(null)
  const [guaranteeSummary, setGuaranteeSummary] = useState<any>(null)
  const [baseGuaranteeSummary, setBaseGuaranteeSummary] = useState<any>(null)
  const [operationType, setOperationType] =
    useState<OperationType>(initialOperationType)
  const [lastSearchOperationType, setLastSearchOperationType] =
    useState<OperationType>(initialOperationType)
  // Nuevo estado con snapshot solo al buscar
  const [submittedFilterValues, setSubmittedFilterValues] = useState<
    Record<string, any>
  >({})
  const [countryOptions, setCountryOptions] = useState<any[]>([])
  const [countryLoading, setCountryLoading] = useState<boolean>(true)
  const [accountTypeOptions, setAccountTypeOptions] = useState<any[]>([])
  const [accountTypeLoading, setAccountTypeLoading] = useState<boolean>(true)

  const schemaShape = Object.keys(filtersConfig).reduce((acc, key) => {
    if (filtersConfig[key].validation) {
      acc[key] = filtersConfig[key].validation
    }
    return acc
  }, {} as any)

  const {
    handleSubmit,
    control,
    setValue,
    watch,
    reset,
    getValues,
    trigger,
    formState: { errors, isValid }
  } = useForm({
    resolver: yupResolver(yup.object().shape(schemaShape)),
    // mode was 'onSubmit'; switched to 'onChange' for real-time validity
    mode: 'onChange',
    defaultValues: Object.fromEntries(
      Object.keys(filtersConfig).map((k) => [k, searchParams.get(k) || ''])
    )
  })

  useEffect(() => {
    const fetchValidation = async () => {
      try {
        const data = await validateUser()
        setValidateUserType(data)
      } catch (err) {
        console.error('validateUser (validateUserType) failed', err)
        setValidateUserType({}) // estado seguro
      }
    }
    fetchValidation()
  }, [])

  // Carga asíncrona de opciones de país y tipo de cuenta
  useEffect(() => {
    let mounted = true
    setCountryLoading(true)
    ;(async () => {
      try {
        const validateUserType = await validateUser()
        if (validateUserType?.showCountryList) {
          const countries = await filtersConfig.country.options // ya es promesa
          if (mounted) {
            setCountryOptions(Array.isArray(countries) ? countries : [])
          }
        } else {
          const country = validateUserType?.country || {}
          if (mounted) {
            setCountryOptions([
              {
                id: country.id || '',
                name: country.name || country.label || ''
              }
            ])
          }
        }
      } catch (error) {
        setCountryOptions([])
      } finally {
        if (mounted) setCountryLoading(false)
      }
    })()
    return () => {
      mounted = false
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    let mounted = true
    setAccountTypeLoading(true)
    ;(async () => {
      try {
        const options = await filtersConfig.accountType.options
        if (mounted)
          setAccountTypeOptions(Array.isArray(options) ? options : [])
      } catch (error) {
        setAccountTypeOptions([])
      } finally {
        if (mounted) setAccountTypeLoading(false)
      }
    })()
    return () => {
      mounted = false
    }
    // eslint-disable-next-line
  }, [])

  const enhancedFiltersConfig = {
    ...filtersConfig,
    country: {
      ...filtersConfig.country,
      options: countryOptions,
      loading: countryLoading
    },
    accountType: {
      ...filtersConfig.accountType,
      options: accountTypeOptions,
      loading: accountTypeLoading
    },
    participant: {
      ...filtersConfig.participant,
      fetchOptions: fetchOptionsParticipants(getValues)
    },
    beneficiary: {
      ...filtersConfig.beneficiary,
      fetchOptions: fetchOptionsBeneficiaries(getValues)
    },
    guaranteeAccount: {
      ...filtersConfig.guaranteeAccount,
      fetchOptions: fetchOptionsAccountGuarantee(getValues)
    }
  }

  const country = watch('country')

  useEffect(() => {
    if (validateUserType?.showCountryList === false) return
    if (!country) {
      setValue('participant', '', { shouldValidate: true })
      return
    }

    // limpiamos dependientes
    setValue('participant', '', { shouldValidate: true })
    setValue('beneficiary', '', { shouldValidate: true })
    setValue('guaranteeAccount', '', { shouldValidate: true })

    // Forzamos revalidación inmediata
    trigger(['participant', 'beneficiary', 'guaranteeAccount'])
    // 👇 aquí se puede forzar el refetch del participante
    // si tu componente de Autocomplete soporta `key` o `reload` puedes usarlo
    enhancedFiltersConfig.participant.fetchOptions('', 0, 10)
  }, [country, setValue, trigger])

  const isFieldEnabled = (fieldKey: string): boolean => {
    if (!userValidation?.showCountryList && fieldKey === 'country') return false
    if (!userValidation?.showParticipantList && fieldKey === 'participant')
      return false

    const deps = FILTER_DEPENDENCIES[fieldKey]
    if (!deps) return true // si no tiene dependencias, siempre activo

    return deps.every((dep) => !!watch(dep)) // solo activo si todas sus dependencias tienen valor
  }

  useEffect(() => {
    const fetchValidation = async () => {
      try {
        const data = await validateUser()
        setUserValidation(data)
        if (data && !data.showCountryList && data.country) {
          setValue('country', data.country.id)
        }
        if (data && !data.showParticipantList && data.participant) {
          const participant = data.participant
          setValue('participant', {
            id: participant.participantId,
            label: participant.fullName,
            ...participant
          })
        }
      } catch (err) {
        console.error('validateUser (userValidation) failed', err)
        setUserValidation({}) // estado seguro
      }
    }
    fetchValidation()
  }, [])

  useEffect(() => {
    const subscription = watch((_values, { name }) => {
      if (!name) return
      const dependents = getFilterDependents(name)
      if (!dependents.length) return

      dependents.forEach((dep) => {
        setValue(dep, '', { shouldValidate: true })
        const subDependents = getFilterDependents(dep)
        subDependents.forEach((sub) =>
          setValue(sub, '', { shouldValidate: true })
        )
      })

      // Revalida todo después de limpieza en cascada
      trigger()
    })
    return () => subscription.unsubscribe()
  }, [watch, setValue, trigger])

  const normalizeParams = (values: AnyRecord): Record<string, string> => {
    const normalized: Record<string, string> = {}

    if (values.country != null) {
      normalized.countryId = String(values.country)
    }

    if (values.participant) {
      const id =
        values.participant.participantId ?? values.participant.custodianId
      if (id != null) normalized.participantId = String(id)
    }

    if (values.beneficiary) {
      if (values.beneficiary.id != null)
        normalized.investorId = String(values.beneficiary.id)
    }

    if (values.accountType) {
      normalized.accountTypeId = String(values.accountType)
    }

    if (values.guaranteeAccount) {
      const id =
        values.guaranteeAccount.guaranteeGlobalAccountId ??
        values.guaranteeAccount.guaranteeParticularAccountId
      if (id != null) normalized.guaranteeGlobalAccountId = String(id)
    }

    return normalized
  }

  const hasSearchParams = (values: AnyRecord) => {
    const normalized = normalizeParams(values)
    return Object.keys(normalized).length > 0
  }

  const executeSearch = async (
    opType: OperationType,
    values: Record<string, any>
  ) => {
    setLastSearchOperationType(opType)
    const normalized = normalizeParams(values)
    if (Object.keys(normalized).length === 0) {
      // sin parámetros: no actualizamos endpoint ni disparamos servicios
      return
    }
    const params = new URLSearchParams(normalized)
    // const base = '' //endpointBaseMap[opType]
    setEndpoint('?' + (params.toString() ?? ''))
    setSearchParams(params)

    const v = getValues() // usamos valores actuales del formulario
    const countryId = v.country
    const accountTypeId = v.accountType
    const investorId = v.beneficiary?.id
    const participantId = v.participant?.participantId
    const custodianId = v.participant?.custodianId
    const guaranteeGlobalAccountId =
      v.guaranteeAccount?.guaranteeGlobalAccountId
    const guaranteeParticularAccountId =
      v.guaranteeAccount?.guaranteeParticularAccountId

    let guaranteesData
    let getGuaranteeCalculated
    if (opType === 'release') {
      guaranteesData = await searchGuaranteeInfo(
        countryId,
        accountTypeId,
        investorId,
        participantId,
        custodianId,
        guaranteeGlobalAccountId,
        guaranteeParticularAccountId
      )

      getGuaranteeCalculated = await validateGuaranteeQuantity([], {
        countryId,
        accountTypeId,
        investorId,
        participantId,
        custodianId,
        guaranteeGlobalAccountId,
        guaranteeParticularAccountId
      })
    } else {
      guaranteesData = await searchGuaranteeInfoTransfer(
        countryId,
        accountTypeId,
        investorId,
        participantId,
        custodianId,
        guaranteeGlobalAccountId,
        guaranteeParticularAccountId
      )
      getGuaranteeCalculated = await validateGuaranteeQuantityTransfer([], {
        //TRANSFER
        countryId,
        accountTypeId,
        investorId,
        participantId,
        custodianId,
        guaranteeGlobalAccountId,
        guaranteeParticularAccountId
      })
    }

    setGuaranteeSummary(getGuaranteeCalculated)
    setBaseGuaranteeSummary(getGuaranteeCalculated)
    setFilterResponse(guaranteesData)
  }

  // usado por el submit del form (usa operationType actual)
  const onSubmit = async (values: Record<string, any>) => {
    console.log('operationType', operationType)
    setSubmittedFilterValues(values) // snapshot al buscar
    await executeSearch(operationType, values)
  }

  // búsqueda manual permitiendo forzar operationType (para cambio de tab)
  const runSearch = async (opType?: OperationType) => {
    // usar solo valores ya confirmados (no los editados aún)
    if (!Object.keys(submittedFilterValues).length) return
    const target = opType || operationType
    await executeSearch(target, submittedFilterValues)
  }

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    reset,
    watch,
    filtersConfig: enhancedFiltersConfig,
    isFieldEnabled,
    getValues,
    filterResponse,
    endpoint,
    errors,
    isValid,
    setGuaranteeSummary,
    guaranteeSummary,
    baseGuaranteeSummary,
    operationType,
    setOperationType,
    runSearch,
    lastSearchOperationType,
    hasSearchParams,
    submittedFilterValues
  }
}

```

## src/features/transfer-liberation-guarantees/hooks/useGuaranteeActions.ts

```typescript
import { useState, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { RootState } from 'remoteShell/mf-store'
import { GenerateLogs } from 'remoteUtilities/components-mf-utilities'

import { STORAGE_KEYS } from '@/shared/constants/storageKeys'
import { useModalAction } from '@/shared/hooks/useModalAction'
import { getFromLocalStorage } from '@/shared/utils/getFromLocalStorage'

import {
  GUARANTEE_ACTION_LABELS,
  ERROR_MESSAGES
} from '../constants/guaranteeMessages'
import {
  GuaranteeActionParams,
  AlertState,
  ModalAlertState
} from '../types/guaranteeActions'
import { useGuaranteeTableState } from './useGuaranteeTableState'

// Utility function to check if an error is an API error with non-200 status code
const isApiError = (error: any) => {
  return error?.response?.status && error.response.status !== 200
}

export function useGuaranteeActions({
  guaranteeList,
  filterValues,
  guaranteeSummary,
  baseGuaranteeSummary,
  setGuaranteeSummary,
  refreshData,
  validateGuaranteeQuantityFn,
  calculateLiberationAmountFn,
  getTotalGuaranteeAmountFn,
  sendGuaranteeFn,
  operationType,
  transferContext
}: Omit<GuaranteeActionParams, 'endpoint' | 'axiosInstanceKey'>) {
  const { infoUserNubo } = useSelector((state: RootState) => state.auth)
  const [alert, setAlert] = useState<AlertState | null>(null)
  const [modalAlert, setModalAlert] = useState<ModalAlertState | null>(null)
  const [escapeListenerActive, setEscapeListenerActive] = useState(true)
  const [sendingGuarantee, setSendingGuarantee] = useState(false)

  const {
    tableRows,
    setTableRows,
    selectedGuarantees,
    selectCheckTable,
    setSelectCheckTable,
    updateRow,
    setThereAreSelected,
    prevSelectionRef
  } = useGuaranteeTableState(guaranteeList)

  const navigate = useNavigate()

  const {
    openModal,
    modalConfig,
    setModalConfig,
    isConfirmDisabled,
    handleConfirm
  } = useModalAction()

  // Handle escape key
  const handleBack = useCallback(() => {
    navigate('/guarantees-management')
  }, [navigate])

  useEffect(() => {
    if (modalConfig) {
      setEscapeListenerActive(false) // Disable listener when modal is open
    } else {
      setEscapeListenerActive(true) // Reactivate when modal closes
    }
  }, [modalConfig])

  // Escape key listener - only active when NO modal is visible
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && escapeListenerActive) {
        e.preventDefault()
        e.stopPropagation()
        handleBack()
      }
    }

    if (escapeListenerActive) {
      window.addEventListener('keydown', handleKeyDown, { capture: true })
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown, { capture: true })
    }
  }, [handleBack, escapeListenerActive])

  // Validate guarantee selection
  const handleValidateQuantity = useCallback(
    async (row?: any) => {
      // If a row is provided, add it with latest changes
      const guarantees = row
        ? [...selectedGuarantees.filter((g) => g.id !== row.id), row]
        : selectedGuarantees

      if (guarantees.length === 0) return

      const guaranteeSelected = guarantees.map((g) => ({
        guaranteeId: g.id,
        amountRelease: g.montoLiberar,
        amountTransfer: g.montoLiberar
      }))

      try {
        const validateQuantity = await validateGuaranteeQuantityFn(
          guaranteeSelected,
          {
            countryId: filterValues?.country,
            accountTypeId: filterValues?.accountType,
            investorId: filterValues?.beneficiary?.id,
            participantId: filterValues?.participant?.participantId || null,
            custodianId: filterValues?.participant?.custodianId || null
          }
        )

        if (validateQuantity?.valid) {
          updateGuaranteeSummary({
            amountTotalRelease: validateQuantity.amountTotalRelease
              ? validateQuantity.amountTotalRelease
              : validateQuantity.amountTotalTransfer,
            guaranteeIntegerTotal: validateQuantity.guaranteeIntegerTotal,
            guaranteeExigencyTotal: validateQuantity.guaranteeExigencyTotal,
            amountAvailableRelease: validateQuantity.amountAvailableRelease
              ? validateQuantity.amountAvailableRelease
              : validateQuantity.amountAvailableTransfer,
            isValid: true,
            reasonError: validateQuantity?.reasonError
          })
          setTableRows((prev) => prev.map((r) => ({ ...r, hasError: false })))
          if (validateQuantity?.reasonError) {
            setAlert({
              message: validateQuantity?.reasonError,
              open: true,
              severity: 'error'
            })
          }
        } else {
          const invalidIds = validateQuantity?.guaranteesError ?? []
          updateGuaranteeSummary({
            amountTotalRelease: validateQuantity.amountTotalRelease
              ? validateQuantity.amountTotalRelease
              : validateQuantity.amountTotalTransfer,
            guaranteeIntegerTotal: validateQuantity.guaranteeIntegerTotal,
            guaranteeExigencyTotal: validateQuantity.guaranteeExigencyTotal,
            amountAvailableRelease: validateQuantity.amountAvailableRelease
              ? validateQuantity.amountAvailableRelease
              : validateQuantity.amountAvailableTransfer,
            isValid: false,
            reasonError: validateQuantity?.reasonError
          })
          setTableRows((prev) =>
            prev.map((r) =>
              invalidIds.includes(r.id)
                ? { ...r, hasError: true }
                : { ...r, hasError: false }
            )
          )
          setAlert({
            message: validateQuantity?.reasonError,
            open: true,
            severity: 'error'
          })
        }
      } catch (error) {
        console.log('Entro al error', error)
        if (isApiError(error)) {
          setModalAlert({
            title: ERROR_MESSAGES.unexpectedError.title,
            message: ERROR_MESSAGES.unexpectedError.message,
            variant: 'error',
            textSuccess: 'Volver',
            open: true,
            onClose: () => setModalAlert(null)
          })
        }
        console.error('Error validating guarantee quantity', error)
      }
    },
    [
      selectedGuarantees,
      filterValues,
      guaranteeSummary,
      validateGuaranteeQuantityFn,
      setGuaranteeSummary,
      setTableRows,
      setModalAlert
    ]
  )

  const resetToBase = () => {
    if (baseGuaranteeSummary) {
      updateGuaranteeSummary(baseGuaranteeSummary)
    }
  }

  const updateGuaranteeSummary = useCallback(
    (patch: any) => {
      setGuaranteeSummary((prev: any) => ({
        ...prev,
        ...patch
      }))
    },
    [setGuaranteeSummary]
  )

  // Validation when selection changes
  useEffect(() => {
    if (selectCheckTable.length === 0) {
      // Reset reference to allow re-triggering on reselection
      prevSelectionRef.current = []
      resetToBase()
      return
    }

    const validateQuantity = async () => {
      // Build guaranteeSelected from selected IDs to avoid stale state
      const guaranteeSelected = selectCheckTable
        .map((id) => {
          const row = tableRows.find((r) => r.id === id)
          if (!row?.montoLiberar) {
            updateGuaranteeSummary({
              isValid: false
            })
            return null
          }
          return row
            ? {
                guaranteeId: row.id,
                amountRelease: row.montoLiberar,
                amountTransfer: row.montoLiberar
              }
            : null
        })
        .filter(Boolean)

      if (guaranteeSelected.length !== selectCheckTable.length) {
        return
      }
      if (guaranteeSelected.length === 0) return

      try {
        const validateQuantity = await validateGuaranteeQuantityFn(
          guaranteeSelected,
          {
            countryId: filterValues?.country,
            accountTypeId: filterValues?.accountType,
            investorId: filterValues?.beneficiary?.id,
            participantId: filterValues?.participant?.participantId || null,
            custodianId: filterValues?.participant?.custodianId || null
          }
        )

        if (validateQuantity && validateQuantity?.valid) {
          updateGuaranteeSummary({
            amountTotalRelease: validateQuantity?.amountTotalRelease
              ? validateQuantity?.amountTotalRelease
              : validateQuantity?.amountTotalTransfer,
            guaranteeIntegerTotal: validateQuantity?.guaranteeIntegerTotal,
            guaranteeExigencyTotal: validateQuantity?.guaranteeExigencyTotal,
            amountAvailableRelease: validateQuantity?.amountAvailableRelease
              ? validateQuantity?.amountAvailableRelease
              : validateQuantity?.amountAvailableTransfer,
            isValid: true,
            reasonError: validateQuantity?.reasonError
          })
          if (validateQuantity?.reasonError) {
            setAlert({
              message: validateQuantity?.reasonError,
              open: true,
              severity: 'error'
            })
          }
        } else {
          const invalidIds = validateQuantity?.guaranteesError ?? []
          updateGuaranteeSummary({
            amountTotalRelease: validateQuantity?.amountTotalRelease
              ? validateQuantity?.amountTotalRelease
              : validateQuantity?.amountTotalTransfer,
            guaranteeIntegerTotal: validateQuantity?.guaranteeIntegerTotal,
            guaranteeExigencyTotal: validateQuantity?.guaranteeExigencyTotal,
            amountAvailableRelease: validateQuantity?.amountAvailableRelease
              ? validateQuantity?.amountAvailableRelease
              : validateQuantity?.amountAvailableTransfer,
            isValid: false,
            reasonError: validateQuantity?.reasonError
          })
          setTableRows((prev) =>
            prev.map((row) =>
              invalidIds.includes(row.id)
                ? { ...row, hasError: true }
                : { ...row, hasError: false }
            )
          )
          setAlert({
            message: validateQuantity?.reasonError,
            open: true,
            severity: 'error'
          })
        }
      } catch (error) {
        if (isApiError(error)) {
          console.log('Entro al error', error)
          setModalAlert({
            title: ERROR_MESSAGES.unexpectedError.title,
            message: ERROR_MESSAGES.unexpectedError.message,
            variant: 'error',
            textSuccess: 'Volver',
            open: true,
            onClose: () => setModalAlert(null)
          })
        }
        console.error('Error validating quantity in selection change', error)
      }
    }

    validateQuantity()
  }, [
    selectCheckTable,
    tableRows,
    validateGuaranteeQuantityFn,
    filterValues,
    setAlert,
    prevSelectionRef
  ])

  // Handle input blur event
  const handleBlur = useCallback(
    async (row: any) => {
      if (row.cantidadLiberar == null) return
      try {
        const validateQuantity = await calculateLiberationAmountFn({
          guaranteeId: row.id,
          quantityRelease: row.cantidadLiberar
        })

        if (validateQuantity && validateQuantity?.valid) {
          const montoLiberar = validateQuantity?.amountRelease
            ? validateQuantity?.amountRelease
            : validateQuantity?.amountTransfer
          if (selectedGuarantees.some((g) => g.id === row.id)) {
            handleValidateQuantity({ ...row, montoLiberar })
          }
          updateRow(row.id, { montoLiberar: montoLiberar, hasError: false })
          if (validateQuantity.reasonError) {
            setAlert({
              message: validateQuantity.reasonError,
              open: true,
              severity: 'error'
            })
          }
        } else {
          setAlert({
            message: validateQuantity.reasonError,
            open: true,
            severity: 'error'
          })
          updateRow(row.id, { montoLiberar: null, hasError: true })
          if (selectedGuarantees.some((g) => g.id === row.id)) {
            handleValidateQuantity({
              ...row,
              montoLiberar: null
            })
          }
        }
      } catch (error) {
        if (isApiError(error)) {
          console.log('Entro al error', error)
          setModalAlert({
            title: ERROR_MESSAGES.unexpectedError.title,
            message: ERROR_MESSAGES.unexpectedError.message,
            variant: 'error',
            textSuccess: 'Volver',
            open: true,
            onClose: () => setModalAlert(null)
          })
        }
        console.error('Error calculating amount to release', error)
      }
    },
    [
      calculateLiberationAmountFn,
      selectedGuarantees,
      handleValidateQuantity,
      updateRow,
      setModalAlert
    ]
  )

  // Set total quantity
  const handleTotalQuantity = useCallback(
    async (row: any) => {
      try {
        const totalAmountData = await getTotalGuaranteeAmountFn(row.id)
        const totalAmount = totalAmountData.validateQuantityRelease
          ? totalAmountData.validateQuantityRelease.amountRelease
          : totalAmountData.validateQuantityTransfer.amountTransfer
        const isValidAmount = totalAmountData.validateQuantityRelease
          ? totalAmountData.validateQuantityRelease.valid
          : totalAmountData.validateQuantityTransfer.valid
        const errorMessage = totalAmountData.validateQuantityRelease
          ? totalAmountData.validateQuantityRelease.reasonError
          : totalAmountData.validateQuantityTransfer.reasonError

        if (selectedGuarantees.some((g) => g.id === row.id)) {
          handleValidateQuantity({
            ...row,
            montoLiberar: totalAmount
          })
        }

        updateRow(row.id, {
          cantidadLiberar: totalAmountData.guaranteeQuantity,
          montoLiberar: isValidAmount ? totalAmount : null,
          hasError: !isValidAmount
        })

        if (!isValidAmount) {
          setAlert({
            message: errorMessage,
            open: true,
            severity: 'error'
          })
        }
      } catch (error) {
        if (isApiError(error)) {
          console.log('Entro al error', error)
          setModalAlert({
            title: ERROR_MESSAGES.unexpectedError.title,
            message: ERROR_MESSAGES.unexpectedError.message,
            variant: 'error',
            textSuccess: 'Volver',
            open: true,
            onClose: () => setModalAlert(null)
          })
        }
        console.error('Error getting total guarantee amount', error)
      }
    },
    [
      getTotalGuaranteeAmountFn,
      selectedGuarantees,
      handleValidateQuantity,
      updateRow,
      setModalAlert
    ]
  )

  // Send guarantee action
  const handleSendGuarantee = useCallback(async () => {
    setSendingGuarantee(true)
    try {
      const guaranteeSelected =
        operationType === 'transfer'
          ? selectedGuarantees.map((g) => ({
              guaranteeId: g.id,
              quantityTransfer: g.cantidadLiberar || 0,
              guaranteeTypeId: transferContext?.guaranteeTypeId || 0,
              accountTypeId: transferContext?.accountTypeId || 0,
              investorId: transferContext?.investorId || 0,
              guaranteeGlobalAccountId:
                transferContext?.guaranteeGlobalAccountId,
              guaranteeParticularAccountId:
                transferContext?.guaranteeParticularAccountId
            }))
          : selectedGuarantees.map((g) => ({
              guaranteeId: g.id,
              quantityRelease: g.cantidadLiberar || 0
            }))

      const response = await sendGuaranteeFn(guaranteeSelected)

      const clientUser = getFromLocalStorage(STORAGE_KEYS.USERNAME)

      // Process responses based on operation type
      if (operationType === 'transfer') {
        // Handle transfer responses
        const { successGuarantees = [], errorsGuarantees = [] } = response

        // Show success toasts for each successful guarantee
        for (const guarantee of successGuarantees) {
          setAlert({
            message: guarantee.reasonSuccess,
            open: true,
            severity: 'success'
          })
          await new Promise((res) => setTimeout(res, 800)) // Espera entre alertas

          // Generate log for successful transfer
          if (clientUser) {
            await GenerateLogs(clientUser, {
              actionType: `Guarantee Transfer Success`,
              actionDestination: guarantee.reasonSuccess,
              participantId: infoUserNubo?.participantId,
              countryId: infoUserNubo?.country?.id,
              userNuboId: infoUserNubo?.id,
              statusId: infoUserNubo?.status?.id,
              guaranteeId: guarantee.guaranteeId,
              guaranteeNumber: guarantee.guaranteeNumber,
              guaranteeMovementId: guarantee.guaranteeMovementId
            })
          }
        }

        // Show error toasts for each failed guarantee
        for (const guarantee of errorsGuarantees) {
          setAlert({
            message: guarantee.reasonError,
            open: true,
            severity: 'error'
          })
          await new Promise((res) => setTimeout(res, 800)) // Espera entre alertas

          // Generate log for failed transfer
          if (clientUser) {
            await GenerateLogs(clientUser, {
              actionType: `Guarantee Transfer Error`,
              actionDestination: guarantee.reasonError,
              participantId: infoUserNubo?.participantId,
              countryId: infoUserNubo?.country?.id,
              userNuboId: infoUserNubo?.id,
              statusId: infoUserNubo?.status?.id,
              guaranteeId: guarantee.guaranteeId,
              guaranteeNumber: guarantee.guaranteeNumber,
              errorReason: guarantee.reasonError
            })
          }
        }
      } else {
        // Handle liberation responses (array format)
        const {
          successGuaranteesSendDeposit = [],
          errorsGuaranteesSendDeposit = []
        } = response
        // Process successful guarantees
        for (const guarantee of successGuaranteesSendDeposit || []) {
          setAlert({
            message: `Garantía ${guarantee.guaranteeNumber} liberada exitosamente`,
            open: true,
            severity: 'success'
          })
          await new Promise((res) => setTimeout(res, 800)) // Espera entre alertas

          // Generate log for successful liberation
          if (clientUser) {
            await GenerateLogs(clientUser, {
              actionType: `Guarantee Liberation Success`,
              actionDestination: `Garantía ${guarantee.guaranteeNumber} liberada exitosamente`,
              participantId: infoUserNubo?.participantId,
              countryId: infoUserNubo?.country?.id,
              userNuboId: infoUserNubo?.id,
              statusId: infoUserNubo?.status?.id,
              guaranteeId: guarantee.guaranteeId,
              guaranteeNumber: guarantee.guaranteeNumber,
              guaranteeMovementId: guarantee.guaranteeMovementId
            })
          }
        }

        // Process failed guarantees
        for (const guarantee of errorsGuaranteesSendDeposit || []) {
          setAlert({
            message: `Error al liberar garantía ${guarantee.guaranteeNumber}`,
            open: true,
            severity: 'error'
          })
          await new Promise((res) => setTimeout(res, 800)) // Espera entre alertas

          // Generate log for failed liberation
          if (clientUser) {
            await GenerateLogs(clientUser, {
              actionType: `Guarantee Liberation Error`,
              actionDestination: `Error al liberar garantía ${guarantee.guaranteeNumber}`,
              participantId: infoUserNubo?.participantId,
              countryId: infoUserNubo?.country?.id,
              userNuboId: infoUserNubo?.id,
              statusId: infoUserNubo?.status?.id,
              guaranteeId: guarantee.guaranteeId,
              guaranteeNumber: guarantee.guaranteeNumber
            })
          }
        }
      }

      await refreshData()
    } catch (error) {
      console.log('Entro al error', error)
      setModalAlert({
        title: ERROR_MESSAGES.unexpectedError.title,
        message: ERROR_MESSAGES.unexpectedError.message,
        variant: 'error',
        textSuccess: 'Volver',
        open: true,
        onClose: () => setModalAlert(null)
      })
    } finally {
      setSendingGuarantee(false)
    }
  }, [
    operationType,
    selectedGuarantees,
    transferContext,
    refreshData,
    setModalConfig,
    infoUserNubo,
    setAlert
  ])

  // Check if confirm is valid
  const isValidConfirm = useCallback(() => {
    if (!guaranteeSummary?.isValid || selectedGuarantees.length === 0)
      return false
    if (operationType === 'transfer') {
      return !!transferContext?.isValid
    }
    return true
  }, [guaranteeSummary, selectedGuarantees, operationType, transferContext])

  // Get action labels based on operation type
  const actionLabels =
    operationType === 'transfer'
      ? GUARANTEE_ACTION_LABELS.transfer
      : GUARANTEE_ACTION_LABELS.release

  return {
    tableRows,
    setTableRows,
    selectedGuarantees,
    selectCheckTable,
    setSelectCheckTable,
    alert,
    setAlert,
    modalAlert,
    setModalAlert,
    sendingGuarantee,
    updateRow,
    handleBlur,
    handleTotalQuantity,
    setThereAreSelected,
    handleSendGuarantee,
    isValidConfirm,
    handleBack,
    openModal,
    modalConfig,
    setModalConfig,
    isConfirmDisabled,
    actionLabels,
    handleConfirm
  }
}

```

## src/features/transfer-liberation-guarantees/hooks/useGuaranteeList.ts

```typescript
import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useModalAction } from '@/shared/hooks/useModalAction'

import { sendGuaranteeToDeposit } from '../services/GuaranteeToDeposit'
import {
  calculateLiberationAmount,
  getTotalGuaranteeAmount
} from '../services/validateLiberation'
import { GuaranteeItem } from '../types/guaranteeList'

interface UseGuaranteeListProps {
  guaranteeList: GuaranteeItem[]
  filterValues: Record<string, any>
  guaranteeSummary: any
  setGuaranteeSummary: (value: any) => void
  refreshData: () => void
  validateGuaranteeQuantityFn: (data?: any[], params?: any) => Promise<any>
}

export function useGuaranteeList({
  guaranteeList,
  filterValues,
  guaranteeSummary,
  setGuaranteeSummary,
  refreshData,
  validateGuaranteeQuantityFn
}: UseGuaranteeListProps) {
  const [selectCheckTable, setSelectCheckTable] = useState<number[]>([])
  const [tableRows, setTableRows] = useState<any[]>(guaranteeList)
  const [selectedGuarantees, setSelectedGuarantees] = useState<any[]>([])
  const [escapeListenerActive, setEscapeListenerActive] = useState(true)
  const [alert, setAlert] = useState<{
    message: string
    open: boolean
    severity: 'success' | 'error'
  } | null>(null)

  const navigate = useNavigate()

  const {
    openModal,
    modalConfig,
    inputValue,
    setInputValue,
    handleConfirm,
    setModalConfig,
    isConfirmDisabled
  } = useModalAction()

  useEffect(() => {
    setTableRows(guaranteeList)
  }, [guaranteeList])

  const getStatusById = useCallback((rows: any[], id: number) => {
    const item = rows.find((element) => element.id === id)
    return item ? item : null
  }, [])

  useEffect(() => {
    if (selectCheckTable.length === 0) {
      setSelectedGuarantees([])
      return
    }
    const newSelected = tableRows.filter((row) =>
      selectCheckTable.includes(row.id)
    )
    setSelectedGuarantees(newSelected)
  }, [selectCheckTable, tableRows])

  useEffect(() => {
    if (selectCheckTable.length === 0) return
    const lastSelectedId = selectCheckTable[selectCheckTable.length - 1]
    const itemSelected = getStatusById(tableRows, lastSelectedId)
    if (!itemSelected) return

    const validateQuantityAsync = async () => {
      const guaranteeSelected = selectedGuarantees.map((g) => ({
        guaranteeId: g.id,
        amountRelease: g.cantidadLiberar || 0
      }))
      const validateQuantity = await validateGuaranteeQuantityFn(
        guaranteeSelected,
        {
          countryId: filterValues.country,
          accountTypeId: filterValues.accountType
        }
      )
      if (validateQuantity && validateQuantity?.valid) {
        setGuaranteeSummary({
          ...guaranteeSummary,
          amountTotalRelease: validateQuantity?.amountTotalRelease
        })
      }
    }
    validateQuantityAsync()
  }, [
    selectedGuarantees,
    validateGuaranteeQuantityFn,
    filterValues,
    guaranteeSummary,
    selectCheckTable,
    tableRows,
    getStatusById
  ])

  const updateRow = useCallback(
    (rowId: number | string, update: Partial<any>) => {
      setTableRows((prev) =>
        prev.map((r) => (r.id === rowId ? { ...r, ...update } : r))
      )
    },
    []
  )

  const handleBlur = async (row: any) => {
    if (!row.cantidadLiberar) return
    try {
      const validateQuantity = await calculateLiberationAmount({
        guaranteeId: row.id,
        quantityRelease: row.cantidadLiberar
      })
      if (validateQuantity && validateQuantity?.valid) {
        const montoLiberar = validateQuantity.amountRelease
        updateRow(row.id, { montoLiberar })
      } else {
        updateRow(row.id, { montoLiberar: null })
      }
    } catch (err) {
      // Puedes manejar el error aquí si lo necesitas
    }
  }

  const handleTotalQauantity = async (row: any) => {
    const totalAmount = await getTotalGuaranteeAmount(row.id)
    updateRow(row.id, { cantidadLiberar: totalAmount.guaranteeQuantity })
  }

  const setThereAreSelected = (newSelection: number[]) => {
    setSelectCheckTable(newSelection)
  }

  const onSendGuaranteeToDeposit = async () => {
    try {
      const guaranteeSelected = selectedGuarantees.map((g) => ({
        guaranteeId: g.id,
        quantityRelease: g.cantidadLiberar || 0
      }))
      await sendGuaranteeToDeposit(guaranteeSelected)

      await refreshData()
      setAlert({
        message: 'Se aprobó exitosamente el registro de la Garantía.',
        open: true,
        severity: 'success'
      })
    } catch (error) {
      setAlert({
        message: 'Error al enviar garantías.',
        open: true,
        severity: 'error'
      })
    }
  }

  const isValidConfirm = () => {
    if (selectedGuarantees.length === 0) return false
    return true
  }

  useEffect(() => {
    if (modalConfig) {
      setEscapeListenerActive(false) // Desactivar listener cuando hay modal
    } else {
      setEscapeListenerActive(true) // Reactivar cuando se cierra el modal
    }
  }, [modalConfig])

  // función para volver
  const handleBack = useCallback(() => {
    navigate('/guarantees-management')
  }, [navigate])

  // listener para tecla Escape
  // listener para tecla Escape - solo activo cuando NO hay modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && escapeListenerActive) {
        e.preventDefault()
        e.stopPropagation()
        handleBack()
      }
    }

    if (escapeListenerActive) {
      window.addEventListener('keydown', handleKeyDown, { capture: true })
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown, { capture: true })
    }
  }, [handleBack, escapeListenerActive])

  return {
    tableRows,
    setTableRows,
    selectedGuarantees,
    setSelectedGuarantees,
    selectCheckTable,
    setSelectCheckTable,
    alert,
    setAlert,
    openModal,
    modalConfig,
    inputValue,
    setInputValue,
    handleConfirm,
    setModalConfig,
    isConfirmDisabled,
    updateRow,
    handleBlur,
    handleTotalQauantity,
    setThereAreSelected,
    onSendGuaranteeToDeposit,
    isValidConfirm,
    handleBack
  }
}

```

## src/features/transfer-liberation-guarantees/hooks/useGuaranteeTableState.ts

```typescript
import { useState, useEffect, useRef, useCallback } from 'react'

import { GuaranteeTableRow } from '../types/guaranteeActions'
import { GuaranteeItem } from '../types/guaranteeList'

export function useGuaranteeTableState(guaranteeList: GuaranteeItem[]) {
  const [selectCheckTable, setSelectCheckTable] = useState<number[]>([])
  const [tableRows, setTableRows] = useState<GuaranteeTableRow[]>(guaranteeList)
  const [selectedGuarantees, setSelectedGuarantees] = useState<
    GuaranteeTableRow[]
  >([])
  const prevSelectionRef = useRef<number[]>([])

  // Update table rows when guarantee list changes
  useEffect(() => {
    setTableRows(guaranteeList)
  }, [guaranteeList])

  // Update selected guarantees when selection changes
  useEffect(() => {
    if (selectCheckTable.length === 0) {
      setSelectedGuarantees([])
      return
    }

    // Rebuild the list of selected guarantees based on IDs
    const newSelected = tableRows.filter((row) =>
      selectCheckTable.includes(row.id)
    )

    setSelectedGuarantees(newSelected)
  }, [selectCheckTable, tableRows])

  // Get item by ID helper
  const getItemById = useCallback((rows: any[], id: number) => {
    return rows.find((element) => element.id === id) || null
  }, [])

  // Row update helper
  const updateRow = useCallback(
    (rowId: number | string, update: Partial<any>) => {
      setTableRows((prev) =>
        prev.map((r) => (r.id === rowId ? { ...r, ...update } : r))
      )
    },
    []
  )

  // Set selected IDs
  const setThereAreSelected = useCallback((newSelection: number[]) => {
    setSelectCheckTable(newSelection)
  }, [])

  return {
    tableRows,
    setTableRows,
    selectedGuarantees,
    setSelectedGuarantees,
    selectCheckTable,
    setSelectCheckTable,
    updateRow,
    setThereAreSelected,
    getItemById,
    prevSelectionRef
  }
}

```

## src/features/transfer-liberation-guarantees/pages/TransferLiberationGuarantees.tsx

```tsx
import { DefaultComponents } from '@nuam/common-fe-lib-components'
import { useCallback, useMemo } from 'react'

import { useScreenActions } from 'remoteShell/mf-shell-useScreenActions'
import { ContentWrapper } from 'remoteUtilities/components-mf-utilities'

import { GUARANTEE_TRANSFER_LIBERATION_ACTIONS } from '@/shared/constants/actionCodes'

import { FiltersForm } from '../components/FiltersForm'
import OperationTab from '../components/OperationTab'
import { guaranteeFiltersConfig } from '../constants/filtersConfig'
import { useFilters } from '../hooks/useFilters'

const TransferLiberationGuarantees = () => {
  const {
    control,
    handleSubmit,
    filtersConfig,
    isFieldEnabled,
    filterResponse,
    endpoint,
    errors,
    isValid,
    // getValues,
    setGuaranteeSummary,
    guaranteeSummary,
    operationType,
    setOperationType,
    runSearch,
    lastSearchOperationType,
    submittedFilterValues,
    baseGuaranteeSummary
  } = useFilters(guaranteeFiltersConfig, 'release')
  const { hasAction } = useScreenActions()
  const { canViewTabRelease, canViewTabTransfer } = useMemo(
    () => ({
      canViewTabRelease: hasAction(
        GUARANTEE_TRANSFER_LIBERATION_ACTIONS.REQUEST_RELEASE
      ),
      canViewTabTransfer: hasAction(
        GUARANTEE_TRANSFER_LIBERATION_ACTIONS.REQUEST_TRANSFER
      )
    }),
    [hasAction]
  )
  const axiosInstanceKeyMap = {
    release: 'httpGuaranteeLiberation',
    transfer: 'httpGuaranteeTransfer'
  } as const

  const hasAnyFilterValue = useCallback(() => {
    const v = submittedFilterValues
    return Object.values(v).some(
      (val) =>
        val !== '' &&
        val !== null &&
        val !== undefined &&
        !(typeof val === 'object' && Object.keys(val || {}).length === 0)
    )
  }, [submittedFilterValues])

  const handleOperationChange = (newType: 'release' | 'transfer') => {
    if (newType === operationType) return
    setOperationType(newType)
    // solo dispara si ya existen filtros buscados previamente
    if (hasAnyFilterValue()) {
      runSearch(newType)
    }
  }

  return (
    <ContentWrapper title="Movimiento de garantías" className="gap-2 p-2">
      <DefaultComponents.Grid
        container
        className="flex-wrap justify-center gap-6 rounded-4px p-6 shadow-grey"
      >
        <FiltersForm
          control={control}
          handleSubmit={handleSubmit}
          filtersConfig={filtersConfig}
          isFieldEnabled={isFieldEnabled}
          errors={errors}
          isValid={isValid}
        />
      </DefaultComponents.Grid>
      <OperationTab
        guaranteeSummary={guaranteeSummary}
        baseGuaranteeSummary={baseGuaranteeSummary}
        filterValues={submittedFilterValues} // snapshot solo al buscar
        onOperationTypeChange={handleOperationChange}
        currentOperationType={operationType}
        isValid={isValid}
        triggerSearch={() => runSearch()}
        canViewTabRelease={canViewTabRelease}
        canViewTabTransfer={canViewTabTransfer}
        sharedListProps={{
          guaranteeList: filterResponse?.content || [],
          endpoint,
          setGuaranteeSummary,
          refreshData: () => runSearch(),
          currentAxiosKey:
            axiosInstanceKeyMap[lastSearchOperationType || operationType]
        }}
      />
    </ContentWrapper>
  )
}

export default TransferLiberationGuarantees

```

## src/features/transfer-liberation-guarantees/services/GuaranteeToDeposit.ts

```typescript
import {
  httpGuaranteeDeposit,
  httpGuaranteeTransferCMD
} from 'remoteShell/mf-axiosConfig'

import { getHeaders } from '@/shared/utils/getHeaders'

import { GUARANTEE_LIBERATION_TRANSFER_ENDPOINTS } from '../constants/endpoints'

export const sendGuaranteeToDeposit = async (data: any[]) => {
  const headers = await getHeaders()
  const response = await httpGuaranteeDeposit.post(
    GUARANTEE_LIBERATION_TRANSFER_ENDPOINTS.SEND_GUARANTEE_TO_DEPOSIT,
    data,
    {
      headers
    }
  )
  return response.data
}

export const sendGuaranteeToDepositTransfer = async (data: any[]) => {
  const headers = await getHeaders()
  const response = await httpGuaranteeTransferCMD.post(
    GUARANTEE_LIBERATION_TRANSFER_ENDPOINTS.SEND_GUARANTEE_TO_DEPOSIT_TRANSFER,
    data,
    {
      headers
    }
  )
  return response.data
}

```

## src/features/transfer-liberation-guarantees/services/filters.ts

```typescript
import {
  httpGuaranteeLiberation,
  httpGuaranteeTransfer
} from 'remoteShell/mf-axiosConfig'

import { getHeaders } from '@/shared/utils/getHeaders'
import isDevMode from '@/shared/utils/isDevMode'

import { GUARANTEE_LIBERATION_TRANSFER_ENDPOINTS } from '../constants/endpoints'

export const getCountries = async () => {
  const headers = await getHeaders()
  const participants = await httpGuaranteeLiberation.get(
    GUARANTEE_LIBERATION_TRANSFER_ENDPOINTS.COUNTRY,
    { headers }
  )
  return participants.data
}

export const getParticipantCustodian = async (
  page: number,
  size: number,
  text: string | undefined,
  countryId: number | undefined
) => {
  try {
    const headers = await getHeaders()
    const response = await httpGuaranteeLiberation.get(
      GUARANTEE_LIBERATION_TRANSFER_ENDPOINTS.PARTICIPANT_CUSTODIAN,
      {
        headers,
        params: {
          text,
          page,
          size,
          countryId
        }
      }
    )
    return response.data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error fetching participant custodian:', error)
    }
  }
}

export const getBeneficiaries = async (
  page: number,
  size: number,
  text: string | undefined,
  countryId: number | undefined
) => {
  try {
    const headers = await getHeaders()
    const response = await httpGuaranteeLiberation.get(
      GUARANTEE_LIBERATION_TRANSFER_ENDPOINTS.BENEFICIARIES,
      {
        headers,
        params: {
          text,
          page,
          size,
          countryId: countryId || null
        }
      }
    )
    return response.data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error fetching participant custodian:', error)
    }
  }
}

export const getAccountTypes = async () => {
  try {
    const headers = await getHeaders()
    const accounts = await httpGuaranteeLiberation.get(
      GUARANTEE_LIBERATION_TRANSFER_ENDPOINTS.ACCOUNT_TYPES,
      { headers }
    )
    const formatAccounts = accounts.data.map((item: any) => ({
      name: item.detail,
      ...item
    }))
    return formatAccounts
  } catch (error) {
    if (isDevMode()) {
      console.error('Error fetching account types:', error)
    }
    return [] // fallback para no romper el import
  }
}

export const getGuaranteeAccounts = async (
  page: number,
  size: number,
  text: string | undefined,
  countryId: number | undefined,
  accountTypeId: number | undefined,
  investorId: number | undefined,
  participantId: number | undefined,
  custodianId: number | undefined
) => {
  try {
    const headers = await getHeaders()
    const response = await httpGuaranteeLiberation.get(
      GUARANTEE_LIBERATION_TRANSFER_ENDPOINTS.GUARANTEE_ACCOUNTS,
      {
        headers,
        params: {
          text,
          page,
          size,
          countryId,
          accountTypeId,
          investorId,
          participantId,
          custodianId
        }
      }
    )
    return response.data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error fetching guarantee account:', error)
    }
  }
}

export const searchGuaranteeInfo = async (
  countryId: any | undefined,
  accountTypeId: any | undefined,
  investorId: any | undefined,
  participantId: any | undefined,
  custodianId: any | undefined,
  guaranteeGlobalAccountId: any | undefined,
  guaranteeParticularAccountId: any | undefined
) => {
  try {
    const headers = await getHeaders()
    const params = Object.fromEntries(
      Object.entries({
        countryId,
        accountTypeId,
        investorId,
        participantId,
        custodianId,
        guaranteeGlobalAccountId,
        guaranteeParticularAccountId
      }).filter(
        ([_, value]) => value !== undefined && value !== null && value !== ''
      )
    )

    const response = await httpGuaranteeLiberation.get(
      GUARANTEE_LIBERATION_TRANSFER_ENDPOINTS.SEARCH_GUARANTEE_INFO,
      {
        headers,
        params
      }
    )
    return response.data
  } catch (error) {}
}

export const searchGuaranteeInfoTransfer = async (
  countryId: any | undefined,
  accountTypeId: any | undefined,
  investorId: any | undefined,
  participantId: any | undefined,
  custodianId: any | undefined,
  guaranteeGlobalAccountId: any | undefined,
  guaranteeParticularAccountId: any | undefined
) => {
  try {
    const headers = await getHeaders()
    //SEARCH_GUARANTEE_INFO
    const params = Object.fromEntries(
      Object.entries({
        countryId,
        accountTypeId,
        investorId,
        participantId,
        custodianId,
        guaranteeGlobalAccountId,
        guaranteeParticularAccountId
      }).filter(
        ([_, value]) => value !== undefined && value !== null && value !== ''
      )
    )

    const response = await httpGuaranteeTransfer.get(
      GUARANTEE_LIBERATION_TRANSFER_ENDPOINTS.SEARCH_GUARANTEE_INFO_TRANSFER,
      {
        headers,
        params
      }
    )
    return response.data
  } catch (error) {}
}

```

## src/features/transfer-liberation-guarantees/services/user.ts

```typescript
import { httpGuaranteeLiberation } from 'remoteShell/mf-axiosConfig'

import { getHeaders } from '@/shared/utils/getHeaders'

import { GUARANTEE_LIBERATION_TRANSFER_ENDPOINTS } from '../constants/endpoints'

export const validateUser = async () => {
  try {
    const headers = await getHeaders()
    const response = await httpGuaranteeLiberation.get(
      GUARANTEE_LIBERATION_TRANSFER_ENDPOINTS.USER_VALIDATION,
      { headers }
    )
    return response.data
  } catch (error) {
    console.error(error)
  }
}

```

## src/features/transfer-liberation-guarantees/services/validateLiberation.ts

```typescript
import {
  httpGuaranteeLiberation,
  httpGuaranteeTransfer
} from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

export const validateGuaranteeQuantity = async (data?: any[], params?: any) => {
  const headers = await getHeaders()
  const response = await httpGuaranteeLiberation.post(
    ENDPOINTS.VALIDATE_GUARANTEE_QUANTITY,
    data,
    {
      headers,
      params
    }
  )
  return response.data
}

export const calculateLiberationAmount = async (data: any) => {
  const headers = await getHeaders()
  const response = await httpGuaranteeLiberation.post(
    ENDPOINTS.CALCULATE_LIBERATION_AMOUNT,
    data,
    {
      headers
    }
  )
  return response.data
}

export const getTotalGuaranteeAmount = async (guaranteeId: any) => {
  const headers = await getHeaders()
  const response = await httpGuaranteeLiberation.get(
    ENDPOINTS.GET_TOTAL_GUARANTEE_AMOUNT + '/' + guaranteeId,
    {
      headers
    }
  )
  return response.data
}

export const validateGuaranteeQuantityTransfer = async (
  data?: any[],
  params?: any
) => {
  const headers = await getHeaders()
  const response = await httpGuaranteeTransfer.post(
    ENDPOINTS.VALIDATE_GUARANTEE_QUANTITY_TRANSFER,
    data,
    {
      headers,
      params
    }
  )
  return response.data
}

export const getTotalGuaranteeAmountTransfer = async (guaranteeId: any) => {
  const headers = await getHeaders()
  const response = await httpGuaranteeTransfer.get(
    ENDPOINTS.GET_TOTAL_GUARANTEE_AMOUNT_TRANSFER + '/' + guaranteeId,
    {
      headers
    }
  )
  return response.data
}

export const calculateLiberationAmountTransfer = async (data: any) => {
  const headers = await getHeaders()
  const response = await httpGuaranteeTransfer.post(
    ENDPOINTS.CALCULATE_LIBERATION_AMOUNT_TRANSFER,
    {
      guaranteeId: data.guaranteeId,
      quantityTransfer: data.quantityRelease
    },
    {
      headers
    }
  )
  return response.data
}

```

## src/features/transfer-liberation-guarantees/types/guaranteeActions.d.ts

```typescript
import { GuaranteeItem } from './guaranteeList'

export type OperationType = 'transfer' | 'release'

export interface AlertState {
  message: string
  open: boolean
  severity: 'success' | 'error'
}

export interface ModalAlertState {
  title: string
  message: string
  textSuccess?: string
  variant: 'warning' | 'error' | 'info' | 'success'
  open: boolean
  onClose?: () => void
}

export interface TransferContext {
  guaranteeTypeId?: number
  accountTypeId?: number
  investorId?: number
  isValid: boolean
  guaranteeGlobalAccountId?: number
  guaranteeParticularAccountId?: number
}

export interface GuaranteeActionParams {
  guaranteeList: GuaranteeItem[]
  endpoint: string
  filterValues: Record<string, any>
  guaranteeSummary: any
  setGuaranteeSummary: (value: any) => void
  refreshData: () => void
  axiosInstanceKey: string
  validateGuaranteeQuantityFn: (data?: any[], params?: any) => Promise<any>
  operationType: OperationType
  getTotalGuaranteeAmountFn: (guaranteeId: any) => Promise<any>
  calculateLiberationAmountFn: (data: any) => Promise<any>
  sendGuaranteeFn: (data: any[]) => Promise<any>
  transferContext?: TransferContext
  baseGuaranteeSummary: any
}

export interface GuaranteeTableRow extends GuaranteeItem {
  cantidadLiberar?: number
  montoLiberar?: number
  hasError?: boolean
}

export interface GuaranteeColumn {
  field: string
  headerName: string
  minWidth: number
  dynamic?: boolean
  renderCell?: (params: { row: any }) => React.ReactNode
}

```

## src/features/transfer-liberation-guarantees/types/guaranteeList.d.ts

```typescript
export interface GuaranteeItem {
  id: number
  registrationDate: string
  guaranteeNumber: string
  guaranteeNumberDeposit: string | null
  depository: {
    id: string
    code: string
  }
  classInstrument: {
    id: string
    description: string
  }
  securityTitle: {
    id: number
    mnemonic: string
  }
  isinNumber: {
    id: number
    isinNumber: string
  }
  status: {
    id: number
    description: string
    category: string
    detail: string
  }
  guaranteeValuation: {
    valuationDate: string
    marketPrice: number
    riskPercentage: string
    quantity: number
    guaranteeInteger: number
  } | null
}

```

## src/features/transfer-liberation-guarantees/utils/getFilterDependents.ts

```typescript
import { FILTER_DEPENDENCIES } from '../constants/filterRules'

export const getFilterDependents = (field: string): string[] => {
  return Object.keys(FILTER_DEPENDENCIES).filter((key) =>
    FILTER_DEPENDENCIES[key].includes(field)
  )
}

```

## src/features/view-guarantees/components/ErrorExecution.tsx

```tsx
import { NewTable } from 'remoteUtilities/components-mf-utilities'

import { columnsErrorExecuteGuarantee } from '../constants/columnsErrorExecuteGuarantee'
import { GuaranteeResponse } from '../types/executeGuarantees'

const ErrorExecution = ({
  data
}: {
  data: GuaranteeResponse['errorsGuaranteesSendDeposit']
}) => {
  const transform = data.map((guaranteError) => ({
    id: guaranteError.guaranteeId,
    ...guaranteError
  }))
  return (
    <div className="px-3">
      <NewTable
        columns={columnsErrorExecuteGuarantee}
        rows={transform}
        checkboxSelection={false}
      />
    </div>
  )
}

export default ErrorExecution

```

## src/features/view-guarantees/components/GuaranteeCards.tsx

```tsx
import { Typography, Box, Paper, useTheme } from '@mui/material'
import { DefaultComponents } from '@nuam/common-fe-lib-components'
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo
} from 'react'

import { Spinner } from 'remoteUtilities/components-mf-utilities'

import { GuaranteeDetail } from '@/features/view-guarantees/types/visualization'

import { capitalize, capitalizeEachWord } from '@/shared/utils/capitalize'
import { formatAmount } from '@/shared/utils/formatAmount'
import { formatNumberWithThousandsSeparator } from '@/shared/utils/formatNumberWithThousandsSeparator'
import { formatToLocalDate } from '@/shared/utils/formatToLocalDate'
import { fullNameToDisplay } from '@/shared/utils/fullNameToDisplay'
import { transformAmountToPercentage } from '@/shared/utils/transformAmountToPercentage'

import { IconEyesTracking } from './IconEyesTracking'

interface GuaranteeCardsProps {
  params: GuaranteeDetail
  setModalDetails: (value: boolean) => void
  setModalTracking: (value: boolean) => void
  setOrigin: (value: string) => void
  isLoading: boolean
  canGuaranteeTracking: boolean
}

// Create a context to manage heights for each section
const HeightContext = createContext<{
  registerHeight: (section: string, height: number) => void
  getHeight: (section: string) => number
}>({
  registerHeight: () => {},
  getHeight: () => 0
})

/**
 * Component that displays detailed information about a guarantee in card format.
 * The component is divided into three main sections:
 * - Beneficiary final information
 * - Title data
 * - Valuation summary
 *
 * The component uses a height context to maintain consistent heights across sections.
 * When loading, it displays a spinner.
 *
 * @param {Object} props - Component props
 * @param {Object} props.params - Object containing guarantee data, security title data, and guarantee valuation information
 * @param {Object} props.params.guarantee - Guarantee information including number, dates, participant, investor, etc.
 * @param {Object} props.params.securityTitle - Security title information including depository, country, class, etc.
 * @param {Object} props.params.guaranteeValuation - Valuation information including market price, risk, quantity, etc.
 * @param {Function} props.setModalDetails - Function to set the modal details state
 * @param {Function} props.setModalTracking - Function to set the modal tracking state
 * @param {Function} props.setOrigin - Function to set the origin state
 * @param {boolean} [props.isLoading=true] - Flag indicating if the component is in loading state
 *
 * @returns {JSX.Element} A component displaying guarantee information in card format or a spinner when loading
 */
export function GuaranteeCards({
  params,
  setModalDetails,
  setModalTracking,
  setOrigin,
  isLoading = true,
  canGuaranteeTracking
}: Readonly<GuaranteeCardsProps>) {
  const [sectionHeights, setSectionHeights] = useState<Record<string, number>>({
    beneficiary: 0,
    titleData: 0,
    valuation: 0
  })

  const registerHeight = useCallback((section: string, height: number) => {
    setSectionHeights((prev) => {
      if (height > (prev[section] || 0)) {
        return { ...prev, [section]: height }
      }
      return prev
    })
  }, [])

  const getHeight = useCallback(
    (section: string) => sectionHeights[section] || 0,
    [sectionHeights]
  )

  const contextValue = useMemo(
    () => ({
      registerHeight,
      getHeight
    }),
    [registerHeight, getHeight]
  )

  const theme = useTheme()
  if (isLoading) {
    return <Spinner />
  }
  const registrationDate = params?.registrationDate
  const valueDefault = (value?: string) => value ?? '-'
  const participant = params.participant
  const fund = params?.afpFund?.description
  const investor = params?.investor
  return (
    <HeightContext.Provider value={contextValue}>
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          display: isLoading ? 'none' : 'flex',
          borderTopLeftRadius: theme.shape.borderRadius,
          borderTopRightRadius: theme.shape.borderRadius,
          backgroundColor: 'white',
          width: '100%'
        }}
      >
        <Typography
          variant="h4"
          sx={{
            lineHeight: 1.5
          }}
          className="text-2xl"
        >
          {!isLoading && <>Detalle de la garantía {params?.guaranteeNumber}</>}
        </Typography>
      </Box>
      {/* Guarantee final beneficiary section */}
      <div>
        <h1 className="mb-4 text-start text-xl font-medium">
          Beneficiario final de la garantía
        </h1>
        <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
          <div className="flex flex-wrap gap-6">
            <ItemDetail
              section="beneficiary"
              title="Fecha de registro"
              value={valueDefault(formatToLocalDate(registrationDate))}
            />
            <ItemDetail
              section="beneficiary"
              title="Número garantía nubo"
              value={params?.guaranteeNumber}
            />
            <ItemDetail
              section="beneficiary"
              title="Número garantía depósito"
              value={params?.guaranteeNumberDeposit}
            />
            <ItemDetail
              section="beneficiary"
              title="Participante"
              value={participant?.codeAndName}
            />
            <ItemDetail
              section="beneficiary"
              title="Custodio"
              value={params?.custodian?.codeAndName}
            />
            <ItemDetail
              section="beneficiary"
              title="Fondo"
              value={fund === '0' ? '-' : fund}
            />
            <ItemDetail
              section="beneficiary"
              title="ID beneficiario final"
              value={`${investor?.identificationType?.code} - ${investor?.documentNumber}`}
            />
            <ItemDetail
              section="beneficiary"
              title="Nombre beneficiario final"
              value={fullNameToDisplay({
                firstName: investor?.firstName,
                lastName: investor?.lastName,
                companyName: investor?.companyName
              })}
            />
            <ItemDetail
              section="beneficiary"
              title="Estado"
              value={capitalize(params?.status?.description)}
            />
            {canGuaranteeTracking && (
              <ItemDetail
                section="beneficiary"
                title="Seguimiento"
                value={
                  <IconEyesTracking
                    setModalTracking={setModalTracking}
                    origin="details"
                    setModalDetails={setModalDetails}
                    setOrigin={setOrigin}
                  />
                }
              />
            )}
          </div>
        </Paper>
      </div>
      {/* Title Data */}
      <div>
        <h1 className="mb-4 text-start text-xl font-medium">
          Datos del título
        </h1>
        <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
          <div className="flex flex-wrap gap-6">
            <ItemDetail
              section="titleData"
              title="Depósito"
              value={valueDefault(params?.depository?.fullName)}
            />
            <ItemDetail
              section="titleData"
              title="Cuenta Origen"
              value={valueDefault(params?.accountOriginDescription)}
            />
            <ItemDetail
              section="titleData"
              title="País"
              value={valueDefault(capitalize(params?.country?.name))}
            />
            <ItemDetail
              section="titleData"
              title="Tipo garantía"
              value={params?.guaranteeType?.description}
            />
            <ItemDetail
              section="titleData"
              title="Clase título"
              value={params?.securityTitle?.class?.description}
            />
            <ItemDetail
              section="titleData"
              title="Nemotécnico"
              value={params?.securityTitle?.mnemonic}
            />
            <ItemDetail
              section="titleData"
              title="ISIN"
              value={valueDefault(params?.isinNumber?.isinNumber)}
            />
            <ItemDetail
              section="titleData"
              title="Fecha de vencimiento"
              value={valueDefault(
                formatToLocalDate(params?.isinNumber?.maturityDate)
              )}
            />
            <ItemDetail
              section="titleData"
              title="Moneda"
              value={valueDefault(params?.currency?.code)}
            />
            <div
              className={`flex w-full max-w-205px flex-row items-center justify-between gap-2 border-b border-solid border-[#E0E0E0] text-base text-[#3D3D3D]`}
            >
              <p className="font-bold">Titulo Objeto</p>
              <DefaultComponents.Checkbox
                disabled
                checked={params.titleObject}
              />
            </div>
          </div>
        </Paper>
      </div>

      <div>
        <h1 className="mb-4 text-start text-xl font-medium">
          Resumen de Asignación
        </h1>
        <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
          <div className="flex flex-wrap gap-6">
            <ItemDetail
              section="valuation"
              title="Precio"
              value={valueDefault(
                params?.guaranteeValuation?.marketPrice
                  ? formatNumberWithThousandsSeparator(
                      params?.guaranteeValuation?.marketPrice,
                      false,
                      true,
                      4
                    )
                  : undefined
              )}
            />
            <ItemDetail
              section="valuation"
              title="Riesgo"
              value={valueDefault(
                params?.guaranteeValuation?.riskPercentage
                  ? transformAmountToPercentage(
                      params?.guaranteeValuation?.riskPercentage
                    )
                  : undefined
              )}
            />
            <ItemDetail
              section="valuation"
              title="Cantidad"
              value={valueDefault(
                formatNumberWithThousandsSeparator(
                  params?.guaranteeValuation?.quantity
                    ? params?.guaranteeValuation?.quantity
                    : params?.guaranteeVolume,
                  false,
                  true,
                  4
                )
              )}
            />
            <ItemDetail
              section="valuation"
              title="Entero de garantía"
              value={valueDefault(
                params?.guaranteeValuation?.guaranteeInteger
                  ? formatAmount(params?.guaranteeValuation?.guaranteeInteger)
                  : undefined
              )}
            />
            <ItemDetail
              section="valuation"
              title="Tipo de bloqueo"
              value={valueDefault(
                params?.guaranteeValuation?.blockingType?.description
                  ? capitalizeEachWord(
                      params.guaranteeValuation?.blockingType?.description
                    )
                  : undefined
              )}
            />
          </div>
        </Paper>
      </div>
    </HeightContext.Provider>
  )
}

/**
 * Component that displays a detail item with title and value, maintaining consistent heights across sections.
 *
 * This component registers its content height with the HeightContext to ensure consistent
 * display heights for items in the same section. The content area will automatically
 * adjust its height based on the tallest item in its section and becomes scrollable
 * when content exceeds the allocated space.
 *
 * @param props - Component properties
 * @param props.title - The label displayed above the value
 * @param props.value - The content to display (can be any React node)
 * @param props.section - Identifier for the section this detail belongs to (used for height synchronization)
 *
 * @returns A styled detail item with synchronized height management
 */
const ItemDetail = ({
  title,
  value = '-',
  section,
  maxWidth = 'max-w-205px'
}: {
  title: string
  value?: React.ReactNode
  section: string
  maxWidth?: string
}) => {
  const { registerHeight, getHeight } = useContext(HeightContext)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      const height = contentRef.current.scrollHeight
      registerHeight(section, height)
    }
  }, [value, section, registerHeight])

  const currentHeight = getHeight(section)

  return (
    <div
      className={`w-full ${maxWidth} flex flex-col justify-between gap-2 border-b border-solid border-[#E0E0E0] text-base text-[#3D3D3D]`}
    >
      <p className="font-bold">{title}</p>
      <div
        ref={contentRef}
        className="flex-grow"
        style={{
          height: currentHeight > 0 ? `${currentHeight}px` : 'auto',
          overflow: 'auto'
        }}
      >
        <p className="font-normal">{value ?? '-'}</p>
      </div>
    </div>
  )
}

```

## src/features/view-guarantees/components/GuaranteeDetails.tsx

```tsx
import { Typography } from '@nuam/common-fe-lib-components'
import { useState } from 'react'

import {
  ModalContent,
  NewTable,
  Spinner
} from 'remoteUtilities/components-mf-utilities'

import { useAssignmentDetail } from '@/features/view-guarantees/hooks/useAssignmentDetail'
import { useAssignmentDetailTotals } from '@/features/view-guarantees/hooks/useAssignmentDetailTotals'
import { useGuaranteeDetail } from '@/features/view-guarantees/hooks/useGuaranteeDetail'
import { UseGuaranteeDetailResponse } from '@/features/view-guarantees/types/visualization'

import { ENDPOINTS } from '@/shared/constants/endpoints'

import { GuaranteeCards } from './GuaranteeCards'

interface GuaranteeDetailsProps {
  setModalDetails: (value: boolean) => void
  id: number
  setModalTracking: (value: boolean) => void
  setOrigin: (value: string) => void
  canGuaranteeTracking: boolean
}

/**
 * GuaranteeDetails component displays detailed information about a specific guarantee.
 *
 * This component renders a modal containing guarantee information cards and a data grid
 * with transaction details. It handles loading states and data fetching for guarantee
 * details and assignment information.
 *
 * @param {Object} props - Component props
 * @param {Function} props.setModalDetails - Function to control the visibility of the details modal
 * @param {string|number} props.id - The unique identifier of the guarantee to display
 * @param {Function} props.setModalTracking - Function to control the visibility of the tracking modal
 * @param {Function} props.setOrigin - Function to set the origin context
 *
 * @returns {JSX.Element} A modal containing guarantee details and a data grid with transaction information
 */
export const GuaranteeDetails = ({
  setModalDetails,
  id,
  setModalTracking,
  setOrigin,
  canGuaranteeTracking
}: GuaranteeDetailsProps) => {
  const [rows, setRows] = useState([])

  const { guaranteeDetail, isLoading } = useGuaranteeDetail({
    id
  }) as unknown as UseGuaranteeDetailResponse

  const { columnsModules, isLoadingTableData } = useAssignmentDetail({ id })
  const { CustomFooter, isLoadingTableTotals, tableTotals } =
    useAssignmentDetailTotals({ id })

  const setDataRemote = (_page: number, dataTable: []) => {
    setRows(dataTable)
  }

  if (isLoadingTableTotals || isLoadingTableData || isLoading) {
    return <Spinner />
  }
  const endpoint = `${ENDPOINTS.GUARANTEE_DETAIL_TRANSACTION}/${id}`

  return (
    <ModalContent
      ItShouldHaveButtons={false}
      showBtnAccept={false}
      showBtnClose={false}
      handleClose={() => setModalDetails(false)}
      handleAccept={() => {}}
      className="flex w-full max-w-[1228px] flex-col gap-4 rounded py-6 pl-6 pr-3"
      parentClassName="px-30px"
    >
      <div className="mt-[33px] h-[calc(100vh-200px)] overflow-y-auto">
        <div className="flex flex-col gap-y-6 pr-1">
          {!isLoading && !isLoadingTableData && !isLoadingTableTotals && (
            <GuaranteeCards
              params={guaranteeDetail}
              setModalDetails={setModalDetails}
              setOrigin={setOrigin}
              setModalTracking={setModalTracking}
              isLoading={
                isLoadingTableTotals || isLoadingTableData || isLoading
              }
              canGuaranteeTracking={canGuaranteeTracking}
            />
          )}

          {Object.entries(tableTotals).length > 0 && (
            <>
              <Typography
                variant="h5"
                className="text-start text-xl font-medium"
              >
                Detalle de asignación
              </Typography>
              <NewTable
                columns={columnsModules}
                setDataRemote={setDataRemote}
                rows={rows}
                height="710px"
                endpoint={endpoint}
                axiosInstanceKey={`httpGuarantees`}
                customFooter={CustomFooter}
                disableRowSelectionOnClick={false}
                provisionalId="guaranteeId"
                checkboxSelection={false}
                hideFooter={false}
                hideRightToolbar={true}
                hideFooterPagination={true}
              />
            </>
          )}
        </div>
      </div>
    </ModalContent>
  )
}

```

## src/features/view-guarantees/components/IconEyesTracking.tsx

```tsx
import { MaterialIcons } from '@nuam/common-fe-lib-components'

interface IconEyesTrackingProps {
  setModalTracking: (value: boolean) => void
  setCurrentId?: (id: number) => void
  id?: number
  origin?: string
  setModalDetails?: (value: boolean) => void
  setOrigin?: (value: string) => void
}

export const IconEyesTracking = ({
  setModalTracking,
  setCurrentId,
  id,
  origin,
  setModalDetails,
  setOrigin
}: IconEyesTrackingProps) => {
  return (
    <button
      className="flex h-[25px] w-[25px] cursor-pointer items-center justify-center rounded-full hover:text-[#FF411C]"
      onClick={() => {
        if (origin === 'details' && setModalDetails && setOrigin) {
          setModalDetails(false)
          setModalTracking(true)
          setOrigin('details')
        }
        if (origin === 'tracking' && id && setCurrentId && setOrigin) {
          console.log('🚀 ~ origin:', origin)
          setCurrentId(id)
          setModalTracking(true)
          setOrigin('tracking')
        }
      }}
      type="button"
    >
      <MaterialIcons.VisibilityOutlined />
    </button>
  )
}

```

## src/features/view-guarantees/components/TableValuationGuarantee.tsx

```tsx
import { DataGrid } from '@nuam/common-fe-lib-components'

import { ResponseCalculateValuationGuarantee } from '@/features/view-guarantees/types/bodyCalculateValuationGuarantee'

const TableValuationGuarantee = ({
  errors
}: {
  errors: ResponseCalculateValuationGuarantee['errors']
}) => {
  return (
    <DataGrid
      rows={errors}
      columns={[
        {
          field: 'registrationDate',
          headerName: 'Fecha Registro',
          sortable: false,
          flex: 1
        },
        {
          field: 'guaranteeNumberDeposit',
          headerName: 'No. garantía deposito',
          sortable: false,
          flex: 1
        },
        {
          field: 'guaranteeNumber',
          headerName: 'No. garantía nubo',
          sortable: false,
          flex: 1
        },
        {
          field: 'guaranteeTypeName',
          headerName: 'Tipo garantía',
          sortable: false,
          flex: 1
        },
        {
          field: 'participantName',
          headerName: 'Participante',
          sortable: false,
          flex: 1
        },
        {
          field: 'custodianName',
          headerName: 'Custodio',
          sortable: false,
          flex: 1
        },
        {
          field: 'investorName',
          headerName: 'Beneficiario',
          sortable: false,
          flex: 1
        },
        { field: 'reason', headerName: 'Motivo', sortable: false, flex: 1 }
      ]}
      hideFooter={true}
      hideRightToolbar={true}
      checkboxSelection={false}
      rowHeight={75}
      sx={{
        maxHeight: '875px',
        overflowY: 'auto'
      }}
    />
  )
}

export default TableValuationGuarantee

```

## src/features/view-guarantees/components/ValuationGuarantees.tsx

```tsx
import { Button } from '@nuam/common-fe-lib-components'
import { useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'remoteShell/mf-store'
import { ModalAlert, Toast } from 'remoteUtilities/components-mf-utilities'

import useActionCalculateValuation from '@/features/fixed-parameters-guarantees/hooks/useActionCalculateValuation'

import { USER_TYPE } from '@/shared/constants/userType'
import { ModalAlertState } from '@/shared/types/ModalAlertProps'
import { ToastState } from '@/shared/types/ToastState'

const ValuationGuarantees = ({
  selectCheckTable,
  onRefreshTable
}: {
  selectCheckTable: number[]
  onRefreshTable: () => void
}) => {
  const [modalAlert, setModalAlert] = useState<ModalAlertState>()
  const [toast, setToast] = useState<ToastState>()
  const { onModalConfirm } = useActionCalculateValuation({
    selectCheckTable,
    setModalAlert,
    setToast,
    onRefreshTable
  })
  const userType = useSelector(
    (state: RootState) => state.auth.infoUserNubo.userType
  )
  const userIsInternal = USER_TYPE.INTERNAL === userType
  return (
    <>
      {userIsInternal && (
        <>
          <Button
            variant="text"
            className="ml-13px text-13px"
            onClick={onModalConfirm}
            disabled={selectCheckTable.length === 0}
          >
            Valoración de garantías
          </Button>
          {modalAlert?.open && <ModalAlert {...modalAlert} />}
          {toast?.open && <Toast {...toast} />}
        </>
      )}
    </>
  )
}

export default ValuationGuarantees

```

## src/features/view-guarantees/components/ViewGuaranteesFilters.tsx

```tsx
import dayjs from 'dayjs'

import {
  FilterBar,
  useUrlParams
} from 'remoteUtilities/components-mf-utilities'

import { GuaranteeAccountSearch } from '@/shared/types/GuaranteeAccount'
import { transformOptionsAutoComplete } from '@/shared/utils/transformOptionsAutoComplete'

import { URL_KEYS } from '../constants/urlKeys'
import { getAllStatus } from '../services/getAllStatus'
import { getGuaranteeAccountSearch } from '../services/getGuaranteeAccountOptions'
import { getNumGuarantees } from '../services/getNumGuarantees'
import { getParticipantGuarantees } from '../services/getParticipantGuarantees'

const fetchStatusOptions = async () => {
  const statuses = await getAllStatus()
  return statuses.map((status: { id: number; description: string }) => ({
    id: status.id,
    name: status.description
  }))
}

export const ViewGuaranteesFilters = () => {
  const { getParam, updateParam } = useUrlParams()

  const fetchParticipantOptions = async (query?: string) => {
    const registerDate = getParam(URL_KEYS.REGISTER_DATE)
    const response = await getParticipantGuarantees({
      filters: {
        text: query,
        registrationDate: registerDate
          ? dayjs(registerDate).format('YYYY-MM-DD')
          : undefined
      },
      commonParams: { page: 0, size: 10 }
    })
    return {
      data: response.content.map(
        (item: { id: number; shortName: string; code: string }) => ({
          ...item,
          label: `${item.code} - ${item.shortName}`
        })
      ),
      total: response.totalElements
    }
  }

  const fetchAccountOptions = async (query?: string) => {
    const participantId = getParam(URL_KEYS.PARTICIPANT_ID)
    const registerDate = getParam(URL_KEYS.REGISTER_DATE)
    const response = await getGuaranteeAccountSearch({
      page: 0,
      size: '10',
      text: query,
      participantId: participantId ? Number(participantId) : undefined,
      registrationDate: registerDate
        ? dayjs(registerDate).format('YYYY-MM-DD')
        : undefined
    })
    return transformOptionsAutoComplete(response, (item) => ({
      id: item.consecutiveId,
      label: item.fullName,
      ...item
    }))
  }

  const fetchNumGuaranteeOptions = async (query?: string) => {
    const participantId = getParam(URL_KEYS.PARTICIPANT_ID)
    const registerDate = getParam(URL_KEYS.REGISTER_DATE)
    const response = await getNumGuarantees({
      page: 0,
      size: 10,
      text: query,
      participantId: participantId ?? undefined,
      registrationDate: registerDate
        ? dayjs(registerDate).format('YYYY-MM-DD')
        : undefined
    })
    return {
      data: response.content.map((item: { guaranteeNumber: string }) => ({
        id: item.guaranteeNumber,
        label: item.guaranteeNumber
      })),
      total: response.totalElements
    }
  }

  const handleParticipantChange = () => {
    updateParam(URL_KEYS.GUARANTEES_GLOBAL_ACCOUNT_ID, null)
    updateParam(URL_KEYS.GUARANTEES_PARTICULAR_ACCOUNT_ID, null)
    updateParam(URL_KEYS.GUARANTEE_NUMBER, null)
  }

  const handleAccountChange = (
    _name: string,
    item: GuaranteeAccountSearch | null
  ) => {
    if (!item) {
      updateParam(URL_KEYS.GUARANTEES_GLOBAL_ACCOUNT_ID, null)
      updateParam(URL_KEYS.GUARANTEES_PARTICULAR_ACCOUNT_ID, null)
      return
    }

    if (item.guaranteeGlobalAccountId) {
      updateParam(
        URL_KEYS.GUARANTEES_GLOBAL_ACCOUNT_ID,
        item.guaranteeGlobalAccountId
      )
      updateParam(URL_KEYS.GUARANTEES_PARTICULAR_ACCOUNT_ID, null)
    } else {
      updateParam(
        URL_KEYS.GUARANTEES_PARTICULAR_ACCOUNT_ID,
        item.guaranteeParticularAccountId
      )
      updateParam(URL_KEYS.GUARANTEES_GLOBAL_ACCOUNT_ID, null)
    }
  }

  return (
    <FilterBar
      config={[
        {
          name: URL_KEYS.REGISTER_DATE,
          label: 'Fecha de registro',
          type: 'datepicker',
          maxDate: dayjs()
        },
        {
          name: URL_KEYS.PARTICIPANT_ID,
          label: 'Participante',
          type: 'autocomplete',
          fetchOptions: fetchParticipantOptions,
          onChange: handleParticipantChange
        },
        {
          name: 'guaranteeAccount',
          label: 'Cuenta Garantía',
          type: 'autocomplete',
          fetchOptions: fetchAccountOptions,
          onChange: handleAccountChange
        },
        {
          name: URL_KEYS.GUARANTEE_NUMBER,
          label: 'Número de garantía',
          type: 'autocomplete',
          fetchOptions: fetchNumGuaranteeOptions
        },
        {
          name: URL_KEYS.STATUS_ID,
          label: 'Estado',
          type: 'select',
          loadOptions: fetchStatusOptions
        }
      ]}
      className="mb-6 mt-4 flex w-full flex-wrap justify-between gap-4"
    />
  )
}

```

## src/features/view-guarantees/components/WarrantyTracking.tsx

```tsx
import {
  ModalContent,
  TableList,
  Spinner
} from 'remoteUtilities/components-mf-utilities'

import { useWarrantyTracking } from '@/features/view-guarantees/hooks/useWarrantyTracking'
import { columnsMock } from '@/features/view-guarantees/mocks/tracking'

interface WarrantyTrackingProps {
  setModalTracking: (value: boolean) => void
  id: number
  origin?: string
  setModalDetails?: (value: boolean) => void
}

export const WarrantyTracking = ({
  setModalTracking,
  id,
  origin,
  setModalDetails
}: WarrantyTrackingProps) => {
  const { infoTop, rows, isLoading } = useWarrantyTracking(id)

  return (
    <ModalContent
      handleClose={() => {
        if (origin === 'details' && setModalDetails) {
          setModalTracking(false)
          setModalDetails(true)
        }
        if (origin === 'tracking') {
          setModalTracking(false)
        }
      }}
      ItShouldHaveButtons={false}
      showBtnAccept={false}
      showBtnCancel={false}
      className="flex w-full max-w-[1027px] flex-col gap-8 p-12"
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="flex text-xl">
            <div className="flex w-full items-center justify-center gap-x-1">
              <span className="font-bold">Seguimiento garantía:</span>
              <p>{infoTop.guaranteeNumber}</p>
            </div>

            <div className="flex w-full items-center justify-center gap-x-1">
              <span className="font-bold">Fecha de registro</span>
              <p>{infoTop.registrationDate}</p>
            </div>
          </div>
          <div>
            <p className="mb-3 text-lg font-bold">Estado de la garantía</p>

            <TableList columns={columnsMock} rows={rows} />
          </div>
        </>
      )}
    </ModalContent>
  )
}

```

## src/features/view-guarantees/constants/columnsErrorExecuteGuarantee.ts

```typescript
export const columnsErrorExecuteGuarantee = [
  {
    flex: 1,
    minWidth: 105,
    field: 'registrationDate',
    headerName: 'Fecha registro'
  },
  {
    flex: 1,
    minWidth: 80,
    field: 'guaranteeNumber',
    headerName: 'Nro. garantía'
  },
  {
    flex: 1,
    minWidth: 79,
    field: 'participant',
    headerName: 'Participante'
  },
  {
    flex: 1,
    minWidth: 82,
    field: 'mnemonic',
    headerName: 'Nemotécnico'
  },
  {
    flex: 1,
    minWidth: 76,
    field: 'isin',
    headerName: 'ISIN'
  },
  {
    flex: 1,
    minWidth: 300,
    field: 'reasonError',
    headerName: 'Motivo'
  }
]

```

## src/features/view-guarantees/constants/guaranteeApproval.ts

```typescript
// constants/rules.ts
export const MENU_RULES: Record<string, { allowedStatuses: string[] }> = {
  confirmRegistration: {
    allowedStatuses: ['INGRESADA', 'CONSTITUCIÓN EN PROCESO']
  },
  confirmLiberation: {
    allowedStatuses: ['LIBERACIÓN EN PROCESO']
  },
  confirmExecution: {
    allowedStatuses: ['EJECUCIÓN EN PROCESO']
  }
}

```

## src/features/view-guarantees/constants/guaranteeApprovalEndpoints.ts

```typescript
export const GUARANTEE_APPROVAL_ENDPOINTS = {
  APPROVAL_REGISTER: '/guarantee-approval/register',
  APPROVAL_LIBERATION: '/guarantee-approval/release',
  APPROVAL_EXECUTION: '/guarantee-approval/execution',
  APPROVAL_VALIDATE_GUARANTEE: '/guarantee-approval/validate/guarantee'
}

```

## src/features/view-guarantees/constants/status.ts

```typescript
export enum Status {
  Process_Liberation = 'En proceso de liberación'
}

```

## src/features/view-guarantees/constants/urlKeys.ts

```typescript
export const URL_KEYS = {
  REGISTER_DATE: 'registrationDate',
  PARTICIPANT_ID: 'participantId',
  GUARANTEES_GLOBAL_ACCOUNT_ID: 'guaranteeGlobalAccountId',
  GUARANTEES_PARTICULAR_ACCOUNT_ID: 'guaranteeParticularAccountId',
  GUARANTEE_NUMBER: 'guaranteeNumber',
  STATUS_ID: 'statusId'
}

```

## src/features/view-guarantees/hooks/useAssignmentDetail.tsx

```tsx
import { GridColDef } from '@mui/x-data-grid'
import { useEffect, useState } from 'react'

import { getGuaranteeDetailTransaction } from '@/features/view-guarantees/services/getGuaranteeDetailTransaction'

import { formatNumberWithThousandsSeparator } from '@/shared/utils/formatNumberWithThousandsSeparator'
import { formatToLocalDate } from '@/shared/utils/formatToLocalDate'
import isDevMode from '@/shared/utils/isDevMode'
import { transformAmountToPercentage } from '@/shared/utils/transformAmountToPercentage'

export function useAssignmentDetail({ id }: { id: number }) {
  const columnsModules: GridColDef[] = [
    {
      filterable: true,
      width: 150,
      field: 'accountTypeDescription',
      headerName: 'Tipo de cuenta',
      renderHeader: (params) => (
        <div
          tabIndex={0}
          aria-label={`Columna ${params.colDef.headerName}`}
          style={{ outline: 'none', fontWeight: 'bold' }}
        >
          {params.colDef.headerName}
        </div>
      ),
      renderCell: ({
        row
      }: {
        row: { accountType: { description: string } }
      }) => row.accountType.description
    },
    {
      filterable: true,
      width: 150,
      field: 'accountGuaranteeDescription',
      headerName: 'Cuenta garantía',
      renderHeader: (params) => (
        <div
          tabIndex={0}
          aria-label={`Columna ${params.colDef.headerName}`}
          style={{ outline: 'none', fontWeight: 'bold' }}
        >
          {params.colDef.headerName}
        </div>
      ),
      valueGetter: (value?: string) => value ?? '-'
    },
    {
      filterable: true,
      width: 150,
      field: 'clearingDate',
      headerName: 'Fecha cumplimiento',
      renderHeader: (params) => (
        <div
          tabIndex={0}
          aria-label={`Columna ${params.colDef.headerName}`}
          style={{ outline: 'none', fontWeight: 'bold' }}
        >
          {params.colDef.headerName}
        </div>
      ),
      valueGetter: (value) => (value ? formatToLocalDate(value) : '-')
    },
    {
      filterable: true,
      width: 150,
      field: 'daysCompliance',
      headerName: 'Días cumplimiento',
      renderHeader: (params) => (
        <div
          tabIndex={0}
          aria-label={`Columna ${params.colDef.headerName}`}
          style={{ outline: 'none', fontWeight: 'bold' }}
        >
          {params.colDef.headerName}
        </div>
      ),
      valueGetter: (value?: string) => value ?? '-'
    },
    {
      filterable: true,
      width: 150,
      field: 'side',
      headerName: 'Punta',
      renderHeader: (params) => (
        <div
          tabIndex={0}
          aria-label={`Columna ${params.colDef.headerName}`}
          style={{ outline: 'none', fontWeight: 'bold' }}
        >
          {params.colDef.headerName}
        </div>
      ),
      valueGetter: (value: { description?: string }) => {
        return value?.description
          ? value?.description
              .toLowerCase()
              .replace(/\b\w/g, (char: string) => char.toUpperCase())
          : '-'
      }
    },
    {
      filterable: true,
      width: 150,
      field: 'assignedQuantity',
      headerName: 'Cantidad asignada',
      renderHeader: (params) => (
        <div
          tabIndex={0}
          aria-label={`Columna ${params.colDef.headerName}`}
          style={{ outline: 'none', fontWeight: 'bold' }}
        >
          {params.colDef.headerName}
        </div>
      ),
      valueGetter(value: number) {
        return formatNumberWithThousandsSeparator(value, false, true) ?? '-'
      }
    },
    {
      filterable: true,
      width: 150,
      field: 'currencyRisk',
      headerName: 'Riesgo moneda',
      renderHeader: (params) => (
        <div
          tabIndex={0}
          aria-label={`Columna ${params.colDef.headerName}`}
          style={{ outline: 'none', fontWeight: 'bold' }}
        >
          {params.colDef.headerName}
        </div>
      ),
      valueGetter: (value?: number) => {
        return value ? transformAmountToPercentage(value) : '-'
      }
    },
    {
      filterable: true,
      width: 150,
      field: 'assignedAmount',
      headerName: 'Monto asignado',
      renderHeader: (params) => (
        <div
          tabIndex={0}
          aria-label={`Columna ${params.colDef.headerName}`}
          style={{ outline: 'none', fontWeight: 'bold' }}
        >
          {params.colDef.headerName}
        </div>
      ),
      valueGetter: (value?: number) =>
        value ? formatNumberWithThousandsSeparator(value) : '-'
    }
  ]

  const [tableData, setTableData] = useState([])
  const [isLoadingTableData, setIsLoadingTableData] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getGuaranteeDetailTransaction(id)
        setTableData(response?.content)
        setIsLoadingTableData(false)
      } catch (error) {
        setIsLoadingTableData(false)
        if (isDevMode()) {
          console.error('in hook fetch error', error)
        }
      }
    }
    fetchData()
  }, [id])

  return {
    columnsModules,
    tableData,
    isLoadingTableData
  }
}

```

## src/features/view-guarantees/hooks/useAssignmentDetailTotals.tsx

```tsx
/*
  TODO:
    - Se debe crear el entity para los campos de la tabla
    - Validar comportamiento o funcionalidad de los 3 puntos verticales 
*/
import { DefaultComponents } from '@nuam/common-fe-lib-components'
import { useEffect, useState, useCallback } from 'react'

import { getGuaranteeDetailTransactionTotals } from '@/features/view-guarantees/services/getGuaranteeDetailTransactionTotals'
import {
  TableTotals,
  AssignmentDetailTotalsHook
} from '@/features/view-guarantees/types/visualization'

import isDevMode from '@/shared/utils/isDevMode'

const { Paper, Typography, Box, useTheme } = DefaultComponents

// useAssignmentDetailTotals component
export function useAssignmentDetailTotals({
  id
}: {
  id: number
}): AssignmentDetailTotalsHook {
  const theme = useTheme()
  const [tableTotals, setTableTotals] = useState<TableTotals>({})
  const [isLoadingTableTotals, setIsLoadingTableTotals] = useState(true)

  // Format the numbers according to your existing formatter
  const formatAmount = useCallback((value: number | undefined) => {
    if (typeof value !== 'number' || isNaN(value)) return '--'
    const roundedNumber = value.toFixed(2)
    const [integerPart, decimalPart] = roundedNumber.split('.')
    const formattedIntegerPart = integerPart.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      '.'
    )
    return `${formattedIntegerPart},${decimalPart}`
  }, [])

  // Memoize the custom footer component to prevent unnecessary re-renders
  const CustomFooter = () => (
    <Paper
      elevation={0}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        width: '100%',
        py: 3.5,
        backgroundColor: '#F4F4F4',
        borderBottomLeftRadius: theme.shape.borderRadius,
        borderBottomRightRadius: theme.shape.borderRadius
      }}
    >
      <Box sx={{ display: 'flex', gap: 4 }}>
        <Typography variant="body1" color="text.primary" fontWeight={700}>
          Cantidad Total Asignada
        </Typography>
        <Typography variant="body1" color="text.primary" fontWeight={700}>
          {tableTotals?.assignedQuantityTotal
            ? tableTotals?.assignedQuantityTotal?.toLocaleString('es-ES')
            : '-'}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: 4 }}>
        <Typography variant="body1" color="text.primary" fontWeight={700}>
          Monto Total Asignado
        </Typography>
        <Typography variant="body1" color="text.primary" fontWeight={700}>
          {formatAmount(tableTotals?.assignedAmountTotal)}
        </Typography>
      </Box>
    </Paper>
  )

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getGuaranteeDetailTransactionTotals(id)
        setTableTotals(response)
        setIsLoadingTableTotals(false)
      } catch (error) {
        setIsLoadingTableTotals(false)
        // Mock the response
        setTableTotals({
          assignedQuantityTotal: 350,
          assignedAmountTotal: 3500000
        })
        if (isDevMode()) {
          console.error('in hook fetch error', error)
        }
      }
    }
    fetchData()
  }, [id])

  return {
    tableTotals,
    isLoadingTableTotals,
    CustomFooter
  }
}

```

## src/features/view-guarantees/hooks/useDownloadGenerateCSV.ts

```typescript
import dayjs from 'dayjs'
import { useSearchParams } from 'react-router-dom'

import { getDownloadGuarantees } from '../services/getDownloadGuarantees'
import { generateCSVUsers, HeaderTable } from '../utils/generateCSV'

export const useDownloadGenerateCSV = (columns: HeaderTable[]) => {
  const [searchParams] = useSearchParams()
  const currentDate = dayjs().format('YYYYMMDD')
  const onDownload = async () => {
    const dataDownloadUser = await getDownloadGuarantees({
      ...Object.fromEntries(searchParams),
      sort: 'id',
      order: 'desc'
    })
    await generateCSVUsers({
      data: dataDownloadUser,
      headersTable: columns,
      name: `${currentDate}_GarantiasConstituidas`
    })
  }
  return { onDownload }
}

```

## src/features/view-guarantees/hooks/useGuaranteeAlerts.ts

```typescript
import { useState } from 'react'

import { ERROR_MESSAGES } from '@/features/account-management/constants/errors'

import { ToastState } from '../types/toastExtends'
import { AppAlert, ModalAlertState } from '../types/visualization'

export const useGuaranteeAlerts = () => {
  const [alerts, setAlerts] = useState<AppAlert[]>([])
  const [modalAlert, setModalAlert] = useState<ModalAlertState | null>(null)
  const [toast, setToast] = useState<ToastState | null>()

  const showAlert = (message: string, severity: 'success' | 'error') => {
    const newAlert: AppAlert = {
      id: Date.now(),
      message,
      open: true,
      severity
    }
    setAlerts((prev) => [...prev, newAlert])
  }

  const showSuccessModal = (message: string) => {
    setModalAlert({
      open: true,
      title: message,
      message: '',
      variant: 'success',
      textSuccess: 'Aceptar',
      onClose: () => setModalAlert(null)
    })
  }

  const showUnexpectedErrorModal = () => {
    setModalAlert({
      open: true,
      title: 'Ocurrió un error inesperado',
      message: ERROR_MESSAGES.TRY_AGAIN,
      variant: 'error',
      textSuccess: 'Volver',
      onClose: () => setModalAlert(null)
    })
  }

  return {
    alerts,
    setAlerts,
    modalAlert,
    setModalAlert,
    toast,
    setToast,
    showAlert,
    showSuccessModal,
    showUnexpectedErrorModal
  }
}

```

## src/features/view-guarantees/hooks/useGuaranteeApprovalMenu.tsx

```tsx
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Dropdown } from 'remoteUtilities/components-mf-utilities'

import { USER_TYPE } from '@/shared/constants/userType'
import useGenerateLogs from '@/shared/hooks/useGenerateLogs'
import { SUBROUTES } from '@/shared/routes'

import ErrorExecution from '../components/ErrorExecution'
import ValuationGuarantees from '../components/ValuationGuarantees'
import { generateExecuteGuarantees } from '../services/executeGuarantee'
import {
  confirmExecutionService,
  confirmLiberationService,
  confirmRegistrationService,
  GuaranteeValidation,
  validateGuaranteeService
} from '../services/guaranteeApproval'
import { postGuaranteeConstitution } from '../services/postGuaranteeConstitution'
import { ToastState } from '../types/toastExtends'
import {
  GuaranteePermissions,
  IGuarantees,
  MenuOption,
  ModalAlertState
} from '../types/visualization'
import { validateMenuOption } from '../utils/guaranteeApproval'
import { handleServiceResponse } from '../utils/serviceResponseHandler'
import { useModalAction } from './useModalAction'

const FULLY_RELEASED_STATUS = 'LIBERADA TOTAL ACEPTADA'

const getStatusById = (rows: IGuarantees[], id: number) => {
  const item = rows.find((element) => element.id === id)
  return item ? item.status.description : null
}

interface UseGuaranteeApprovalMenuParams {
  rows: IGuarantees[]
  selectCheckTable: number[]
  userType?: string
  onRefreshTable: () => void
  showAlert: (message: string, severity: 'success' | 'error') => void
  showSuccessModal: (message: string) => void
  showUnexpectedErrorModal: () => void
  setModalAlert: (modal: ModalAlertState | null) => void
  setToast: (toast: ToastState | null) => void
}

export const useGuaranteeApprovalMenu = ({
  rows,
  selectCheckTable,
  userType,
  onRefreshTable,
  showAlert,
  showSuccessModal,
  showUnexpectedErrorModal,
  setModalAlert,
  setToast
}: UseGuaranteeApprovalMenuParams) => {
  const navigate = useNavigate()
  const { dispatchGenerateLog } = useGenerateLogs()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const toggleDropdown = (isOpen: boolean) => setIsDropdownOpen(isOpen)
  const [isLoading, setIsLoading] = useState(false)
  const [guaranteeValidation, setGuaranteeValidation] =
    useState<GuaranteeValidation | null>(null)

  const {
    openModal,
    modalConfig,
    inputValue,
    setInputValue,
    handleConfirm,
    setModalConfig,
    isConfirmDisabled
  } = useModalAction()

  const currentGuaranteeStatus = getStatusById(rows, selectCheckTable[0] || 0)
  const isGuaranteeFullyReleased =
    (currentGuaranteeStatus || '').trim().toUpperCase() ===
    FULLY_RELEASED_STATUS

  useEffect(() => {
    const fetchValidation = async () => {
      if (selectCheckTable.length === 1) {
        const id = selectCheckTable[0]
        const res = await validateGuaranteeService(id)
        setGuaranteeValidation(res.success && res.data ? res.data : null)
      } else {
        setGuaranteeValidation(null)
      }
    }
    fetchValidation()
  }, [selectCheckTable])

  const handleGuaranteesContitution = async (selectedRows: number[]) => {
    try {
      const response = await postGuaranteeConstitution(selectedRows)
      const hasErrors = response?.errorsGuaranteesSendDeposit?.length > 0
      const hasSuccess = response?.successGuaranteesSendDeposit?.length > 0

      if (hasErrors) {
        const errorMessages = response.errorsGuaranteesSendDeposit
          .map(
            (err: any) =>
              `Garantía ${err.guaranteeNumber}: ${err.reasonError || 'Error desconocido'}`
          )
          .join('\n')

        showAlert(
          `No se pudieron procesar algunas garantías:\n${errorMessages}`,
          'error'
        )
      }

      if (hasSuccess) {
        const showSuccess = () =>
          showAlert(
            'Se realizó envío exitoso de la(s) garantía(s) al depósito.',
            'success'
          )

        if (hasErrors) {
          setTimeout(showSuccess, 2500)
        } else {
          showSuccess()
        }
      }
      onRefreshTable()
    } catch (error) {
      console.error('Error enviando al depósito:', error)
      showAlert(
        'Ocurrió un error al enviar al depósito. Intenta nuevamente.',
        'error'
      )
    }
  }

  const processExecuteGuarantee = async () => {
    try {
      const response = await generateExecuteGuarantees(selectCheckTable)
      const message = response.message
      if (response.responseSuccess) {
        await dispatchGenerateLog({
          actionType: 'Ejecucion de garantia',
          actionDestination: 'Ejecucion de garantia exitosa'
        })
        setToast({
          text: message,
          open: true,
          onClose: () => {
            setToast(null)
            onRefreshTable()
          },
          duration: 1600,
          variant: 'success'
        })
      } else {
        await dispatchGenerateLog({
          actionType: 'Ejecucion de garantia',
          actionDestination: 'Error al ejecutar la garantia'
        })
        setModalAlert({
          open: true,
          title: `<b>${message}</b>`,
          textSuccess: 'Volver',
          onClose: () => setModalAlert(null),
          children: (
            <ErrorExecution data={response.errorsGuaranteesSendDeposit} />
          ),
          message: '',
          variant: 'warning',
          width: '85%'
        })
      }
    } catch (error: any) {
      await dispatchGenerateLog({
        actionType: 'Ejecucion de garantia',
        actionDestination: 'Error al ejecutar la garantia'
      })
      const message =
        error?.response?.data?.errorMessageDetail ??
        error?.response?.data?.message ??
        'Ocurrió un error inesperado al ejecutar la garantía. Intente nuevamente.'
      setModalAlert({
        title: 'Ocurrió un error inesperado',
        message,
        open: true,
        variant: 'error',
        textSuccess: 'Volver',
        onClose: () => setModalAlert(null)
      })
    }
  }

  const optionsWithSubmenus = (
    permissions: GuaranteePermissions
  ): MenuOption[] => [
    ...(permissions.canRegisterGuarantee
      ? [
          isGuaranteeFullyReleased
            ? {
                id: 'registro',
                label: 'Registro',
                disabled: true
              }
            : {
                id: 'registro',
                label: 'Registro',
                subItems: [
                  {
                    id: 'nueva-garantia',
                    label: 'Nueva Garantía',
                    action: () => {
                      setIsDropdownOpen(false)
                      setTimeout(
                        () => navigate(SUBROUTES.REGISTER_GUARANTEES),
                        50
                      )
                    }
                  },
                  {
                    id: 'envio-deposito',
                    label: 'Envío al Deposito',
                    action: () => {
                      if (selectCheckTable.length === 0) {
                        console.warn(
                          'No hay filas seleccionadas para enviar al depósito'
                        )
                        return
                      }
                      handleGuaranteesContitution(selectCheckTable)
                    }
                  }
                ]
              }
        ]
      : []),
    ...(permissions.canApproveRegister
      ? [
          {
            id: 'confirmRegistration',
            label: 'Confirmar Registro',
            disabled:
              !validateMenuOption(
                'confirmRegistration',
                currentGuaranteeStatus,
                guaranteeValidation || undefined
              ) ||
              selectCheckTable.length !== 1 ||
              userType === USER_TYPE.EXTERNAL ||
              isGuaranteeFullyReleased,
            action: () =>
              openModal({
                title: '¿Estás seguro de confirmar el registro de la garantía?',
                message:
                  'Por favor digita el número de garantía asociado ante el depósito',
                variant: 'warning',
                textSuccess: 'Confirmar Registro',
                requiresInput: true,
                minLength: 1,
                onConfirm: async (guaranteeNumber?: string) => {
                  setIsLoading(true)
                  handleServiceResponse(
                    confirmRegistrationService,
                    async (msg) => {
                      await dispatchGenerateLog({
                        actionType: 'Aprobación del Registro de garantía',
                        actionDestination:
                          'Aprobacion de registro de garantia exitosa'
                      })
                      setIsLoading(false)
                      showSuccessModal(msg)
                    },
                    async (msg) => {
                      await dispatchGenerateLog({
                        actionType: 'Aprobación del Registro de garantía',
                        actionDestination:
                          'Error de negocio al aprobar el registro de la garantia'
                      })
                      setIsLoading(false)
                      showAlert(msg, 'error')
                    },
                    async () => {
                      await dispatchGenerateLog({
                        actionType: 'Aprobación del Registro de garantía',
                        actionDestination:
                          'Error inesperado al aprobar el registro de la garantia'
                      })
                      setIsLoading(false)
                      showUnexpectedErrorModal()
                    },
                    onRefreshTable
                  )(selectCheckTable[0]!, { guaranteeNumber })
                }
              })
          }
        ]
      : []),
    {
      id: 'transferLiberation',
      label: 'Traslado / Liberación',
      disabled: isGuaranteeFullyReleased,
      action: () => {
        setIsDropdownOpen(false)
        setTimeout(
          () => navigate(SUBROUTES.TRRANSFER_LIBERATION_GUARANTEES),
          50
        )
      }
    },
    ...(permissions.canApproveRelease
      ? [
          {
            id: 'confirmLiberation',
            label: 'Confirmar Liberación',
            disabled:
              !validateMenuOption(
                'confirmLiberation',
                currentGuaranteeStatus,
                guaranteeValidation || undefined
              ) ||
              selectCheckTable.length !== 1 ||
              userType === USER_TYPE.EXTERNAL ||
              isGuaranteeFullyReleased,
            action: () =>
              openModal({
                title:
                  '¿Estás seguro de confirmar la liberación de la garantía?',
                message: '',
                variant: 'warning',
                textSuccess: 'Confirmar Liberación',
                onConfirm: async () => {
                  setIsLoading(true)
                  await handleServiceResponse(
                    confirmLiberationService,
                    async (msg) => {
                      await dispatchGenerateLog({
                        actionType: 'Aprobación de la liberación de garantía',
                        actionDestination:
                          'Aprobacion de liberacion de garantia exitosa'
                      })
                      setIsLoading(false)
                      showSuccessModal(msg)
                    },
                    async (msg) => {
                      await dispatchGenerateLog({
                        actionType: 'Aprobación de la liberación de garantía',
                        actionDestination:
                          'Error de negocio al aprobar la liberacion de la garantia'
                      })
                      setIsLoading(false)
                      showAlert(msg, 'error')
                    },
                    async () => {
                      await dispatchGenerateLog({
                        actionType: 'Aprobación de la liberación de garantía',
                        actionDestination:
                          'Error inesperado al aprobar la liberacion de la garantia'
                      })
                      setIsLoading(false)
                      showUnexpectedErrorModal()
                    },
                    onRefreshTable
                  )(selectCheckTable[0])
                }
              })
          }
        ]
      : []),
    ...(permissions.canApproveRelease
      ? [
          {
            id: 'ejecucion',
            label: 'Solicitar Ejecución',
            disabled: selectCheckTable.length === 0 || isGuaranteeFullyReleased,
            action: () =>
              openModal({
                title: '¿Desea realizar la ejecución de la garantía?',
                message:
                  '¿Estás seguro de enviar al deposito las garantías seleccionadas?',
                variant: 'warning',
                textSuccess: 'Confirmar',
                textCancel: 'Cancelar',
                handleCancel() {
                  setModalConfig(null)
                },
                onConfirm: processExecuteGuarantee
              })
          }
        ]
      : []),
    ...(permissions.canConfirmExecution
      ? [
          {
            id: 'confirmExecution',
            label: 'Confirmar Ejecución',
            disabled:
              !validateMenuOption(
                'confirmExecution',
                currentGuaranteeStatus,
                guaranteeValidation || undefined
              ) ||
              selectCheckTable.length !== 1 ||
              userType === USER_TYPE.EXTERNAL ||
              isGuaranteeFullyReleased,
            action: () =>
              openModal({
                title:
                  '¿Estás seguro de confirmar la ejecución de la garantía?',
                message: '',
                variant: 'warning',
                textSuccess: 'Confirmar Ejecución',
                onConfirm: async () => {
                  setIsLoading(true)
                  await handleServiceResponse(
                    confirmExecutionService,
                    async (msg) => {
                      await dispatchGenerateLog({
                        actionType: 'Aprobación de la ejecución de garantía',
                        actionDestination:
                          'Aprobacion de ejecucion de garantia exitosa'
                      })
                      setIsLoading(false)
                      showSuccessModal(msg)
                    },
                    async () => {
                      await dispatchGenerateLog({
                        actionType: 'Aprobación de la ejecución de garantía',
                        actionDestination:
                          'Error de negocio al aprobar la ejecucion de la garantia'
                      })
                      setIsLoading(false)
                      showUnexpectedErrorModal()
                    },
                    async () => {
                      await dispatchGenerateLog({
                        actionType: 'Aprobación de la ejecución de garantía',
                        actionDestination:
                          'Error inesperado al aprobar la ejecucion de la garantia'
                      })
                      setIsLoading(false)
                      showUnexpectedErrorModal()
                    },
                    onRefreshTable
                  )(selectCheckTable[0])
                }
              })
          },
          {
            id: 'downloadLiberation',
            label: 'Descarga liberacion',
            action: () =>
              navigate(`${SUBROUTES.DOWNLOAD_LIBERATION_GUARANTEES}`)
          }
        ]
      : [])
  ]

  const headerActionsLeft = (permissions: GuaranteePermissions) => (
    <>
      <Dropdown
        title="OPCIONES DE GARANTÍAS"
        isOpen={isDropdownOpen}
        onToggle={toggleDropdown}
        options={optionsWithSubmenus(permissions)}
      />
      {permissions.canEvaluateGuarantee && (
        <ValuationGuarantees
          selectCheckTable={selectCheckTable}
          onRefreshTable={onRefreshTable}
        />
      )}
    </>
  )

  return {
    headerActionsLeft,
    modalConfig,
    inputValue,
    setInputValue,
    handleConfirm,
    setModalConfig,
    isConfirmDisabled,
    isLoading,
    setIsLoading
  }
}

```

## src/features/view-guarantees/hooks/useGuaranteeDetail.tsx

```tsx
import { useEffect, useState } from 'react'

import { getGuaranteeDetail } from '@/features/view-guarantees/services/getGuaranteeDetail'

import isDevMode from '@/shared/utils/isDevMode'

export function useGuaranteeDetail({ id }: { id: number }) {
  const [guaranteeDetail, setGuaranteeDetail] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getGuaranteeDetail(id)
        setGuaranteeDetail(response)
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        if (isDevMode()) {
          console.error('in hook fetch error', error)
        }
      }
    }
    fetchData()
  }, [id])

  return {
    guaranteeDetail,
    isLoading
  }
}

```

## src/features/view-guarantees/hooks/useGuaranteeExpirationAlert.ts

```typescript
import { useEffect, useState } from 'react'

import isDevMode from '@/shared/utils/isDevMode'

import { getGuaranteesCount } from '../services/getGuaranteesCount'
import { ModalAlertState } from '../types/visualization'

const CHECK_TIMES_OF_DAY = [
  { hour: 8, minute: 0 },
  { hour: 12, minute: 0 },
  { hour: 17, minute: 0 }
]

const calculateNextTriggerDelay = () => {
  const now = new Date()

  const nextTarget =
    CHECK_TIMES_OF_DAY.find(
      ({ hour, minute }) =>
        hour > now.getHours() ||
        (hour === now.getHours() && minute > now.getMinutes())
    ) || CHECK_TIMES_OF_DAY[0]

  const nextTrigger = new Date(now)
  nextTrigger.setHours(nextTarget.hour, nextTarget.minute, 0, 0)

  if (nextTrigger <= now) {
    nextTrigger.setDate(nextTrigger.getDate() + 1)
  }

  return nextTrigger.getTime() - now.getTime()
}

interface UseGuaranteeExpirationAlertParams {
  runInitialCheck: boolean
  setModalAlert: (modal: ModalAlertState | null) => void
}

export const useGuaranteeExpirationAlert = ({
  runInitialCheck,
  setModalAlert
}: UseGuaranteeExpirationAlertParams) => {
  const [countsByColors, setCountsByColors] = useState({
    red: 0,
    yellow: 0,
    green: 0
  })

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>

    const fetchGuaranteesCount = async () => {
      try {
        const data = await getGuaranteesCount()
        const counts = {
          red: data.guaranteesRed || 0,
          yellow: data.guaranteesYellow || 0,
          green: data.guaranteesGreen || 0
        }
        setCountsByColors(counts)

        const hasExpiringGuarantees =
          counts.red > 0 || counts.yellow > 0 || counts.green > 0

        setModalAlert({
          title: '¡Importante!',
          message: 'Tienes garantías cercanas a la fecha de vencimiento.',
          variant: 'warning',
          textSuccess: 'Continuar',
          open: hasExpiringGuarantees,
          onClose: () => setModalAlert(null),
          onIconClose: () => setModalAlert(null),
          showIconClose: true
        })
      } catch (error) {
        if (isDevMode()) {
          console.error('Error fetching guarantees count:', error)
        }
      }
    }

    const scheduleNextCheck = () => {
      const timeUntilNextTrigger = calculateNextTriggerDelay()
      timeoutId = setTimeout(() => {
        fetchGuaranteesCount()
        scheduleNextCheck()
      }, timeUntilNextTrigger)
    }

    if (runInitialCheck) {
      fetchGuaranteesCount()
    }
    scheduleNextCheck()

    return () => {
      clearTimeout(timeoutId)
    }
    // Se ejecuta una sola vez al montar: runInitialCheck se lee solo en este momento a propósito.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { countsByColors }
}

```

## src/features/view-guarantees/hooks/useGuaranteeQueryFilters.ts

```typescript
import { useMemo, useState } from 'react'

import {
  useFilteredEndpoint,
  useUrlParams
} from 'remoteUtilities/components-mf-utilities'

import { ENDPOINTS } from '@/shared/constants/endpoints'

import { URL_KEYS } from '../constants/urlKeys'

export const tooltipMessages = {
  red: '1 a 2 días',
  yellow: '3 a 5 días',
  green: '6 a 7 días'
}

export const useGuaranteeQueryFilters = (participantAfp?: { id?: string }) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null)
  const { endpoint: filteredEndpoint } = useFilteredEndpoint(
    ENDPOINTS.GUARANTEE_ACCOUNT_FILTER
  )
  const { updateParam } = useUrlParams()

  const resetColor = () => setSelectedColor(null)

  const handleCircleClick = (type: string) => {
    if (selectedColor === type) {
      setSelectedColor(null)
    } else {
      setSelectedColor(type)
      Object.values(URL_KEYS).forEach((key) => updateParam(key, null))
    }
  }

  const endpoint = useMemo(() => {
    if (selectedColor) {
      return `/guarantees/guarantee-expire-color?stringColor=${selectedColor.toUpperCase().trim()}`
    }

    if (participantAfp?.id) {
      const [path, query = ''] = filteredEndpoint.split('?')
      const params = new URLSearchParams(query)
      params.append('investorId', participantAfp.id)
      return `${path}?${params.toString()}`
    }

    return filteredEndpoint
  }, [filteredEndpoint, selectedColor, participantAfp])

  return {
    endpoint,
    selectedColor,
    handleCircleClick,
    resetColor
  }
}

```

## src/features/view-guarantees/hooks/useGuaranteeTableData.tsx

```tsx
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import isDevMode from '@/shared/utils/isDevMode'

import { getTotalsGuarantee } from '../services/getTotalsGuarantee'
import { IGuarantees } from '../types/visualization'

export const useGuaranteeTableData = (onAfterRefresh: () => void) => {
  const [searchParams] = useSearchParams()
  const [rows, setRows] = useState<IGuarantees[]>([])
  const [totals, setTotals] = useState({ totalCount: 0, totalAmount: 0 })
  const [selectCheckTable, setSelectCheckTable] = useState<number[]>([])
  const [refreshTable, setRefreshTable] = useState(false)

  const setDataRemote = (_page: number, dataTable: []) => {
    setRows(dataTable)
  }

  const setThereAreSelected = (newSelection: number[]) => {
    setSelectCheckTable(newSelection)
  }

  const onRefreshTable = () => {
    setRefreshTable((current) => !current)
    onAfterRefresh()
  }

  useEffect(() => {
    const fetchTotals = async () => {
      try {
        const filterParams = Object.fromEntries(searchParams)
        const data = await getTotalsGuarantee(filterParams)
        setTotals({
          totalCount: data.guaranteesQuantity || 0,
          totalAmount: data.guaranteesTotalAmount || 0
        })
      } catch (error) {
        if (isDevMode()) {
          console.error('Error fetching totals:', error)
        }
      }
    }

    fetchTotals()
  }, [searchParams])

  const CustomFooter = () => (
    <div className="flex w-full items-center justify-center gap-8 bg-[#F4F4F4] py-[28.5px]">
      <div className="flex gap-8">
        <p className="text-text text-center text-base font-medium">
          Cantidad Total:
        </p>
        <p className="text-text text-center text-base font-medium">
          {totals.totalCount.toLocaleString('de-DE')}
        </p>
      </div>
      <div className="flex gap-8">
        <p className="text-text text-center text-base font-medium">
          Monto Total:
        </p>
        <p className="text-text text-center text-base font-medium">
          {totals.totalAmount.toLocaleString('es-ES', {
            minimumFractionDigits: 2
          })}
        </p>
      </div>
    </div>
  )

  return {
    rows,
    setDataRemote,
    selectCheckTable,
    setThereAreSelected,
    CustomFooter,
    refreshTable,
    onRefreshTable
  }
}

```

## src/features/view-guarantees/hooks/useGuaranteeVisualization.tsx

```tsx
import { useSelector } from 'react-redux'

import { RootState } from 'remoteShell/mf-store'

import useRegisterGuarantee from '@/features/register-guaranties/hooks/useRegisterGuarantee'

import { STATES_PROCESS_REGISTER } from '@/shared/constants/processRegister'

import { useGuaranteeAlerts } from './useGuaranteeAlerts'
import { useGuaranteeApprovalMenu } from './useGuaranteeApprovalMenu'
import { useGuaranteeExpirationAlert } from './useGuaranteeExpirationAlert'
import {
  tooltipMessages,
  useGuaranteeQueryFilters
} from './useGuaranteeQueryFilters'
import { useGuaranteeTableData } from './useGuaranteeTableData'

export const useGuaranteeVisualization = () => {
  const {
    actions: { setStateProcessRegister },
    stateRegister
  } = useRegisterGuarantee()

  const { userType, participantAfp } = useSelector(
    (state: RootState) =>
      state.auth.infoUserNubo?.[0] || state.auth.infoUserNubo
  )

  const {
    alerts,
    setAlerts,
    modalAlert,
    setModalAlert,
    toast,
    setToast,
    showAlert,
    showSuccessModal,
    showUnexpectedErrorModal
  } = useGuaranteeAlerts()

  const { endpoint, selectedColor, handleCircleClick, resetColor } =
    useGuaranteeQueryFilters(participantAfp)

  const { countsByColors } = useGuaranteeExpirationAlert({
    runInitialCheck: stateRegister?.state === STATES_PROCESS_REGISTER.IDLE,
    setModalAlert
  })

  const {
    rows,
    setDataRemote,
    selectCheckTable,
    setThereAreSelected,
    CustomFooter,
    refreshTable,
    onRefreshTable
  } = useGuaranteeTableData(() => setStateProcessRegister({ state: 'IDLE' }))

  const {
    headerActionsLeft,
    modalConfig,
    inputValue,
    setInputValue,
    handleConfirm,
    setModalConfig,
    isConfirmDisabled,
    isLoading,
    setIsLoading
  } = useGuaranteeApprovalMenu({
    rows,
    selectCheckTable,
    userType,
    onRefreshTable,
    showAlert,
    showSuccessModal,
    showUnexpectedErrorModal,
    setModalAlert,
    setToast
  })

  return {
    alerts,
    countsByColors,
    endpoint,
    selectedColor,
    modalAlert,
    refreshTable,
    rows,
    tooltipMessages,
    CustomFooter,
    handleCircleClick,
    headerActionsLeft,
    onRefreshTable,
    resetColor,
    setAlerts,
    setDataRemote,
    setThereAreSelected,
    modalConfig,
    inputValue,
    setInputValue,
    handleConfirm,
    setModalConfig,
    isConfirmDisabled,
    toast,
    isLoading,
    setIsLoading
  }
}

```

## src/features/view-guarantees/hooks/useModalAction.ts

```typescript
import { useState, useMemo, useEffect } from 'react'

import { ModalActionConfig } from '@/features/view-guarantees/types/modalActions'

export const useModalAction = () => {
  const [modalConfig, setModalConfig] = useState<ModalActionConfig | null>(null)
  const [inputValue, setInputValue] = useState<string>('')

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      console.log('Key pressed:', event.key)
      if (event.key === 'Escape') {
        setModalConfig(null)
      }
    }
    if (modalConfig) document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [modalConfig])

  const openModal = (config: ModalActionConfig) => {
    console.log('Opening modal with config:', config)
    setModalConfig(config)
  }

  const handleConfirm = async () => {
    if (!modalConfig) return
    try {
      await modalConfig.onConfirm(
        modalConfig.requiresInput ? inputValue : undefined
      )
    } finally {
      setModalConfig(null)
      setInputValue('')
    }
  }

  const isConfirmDisabled = useMemo(() => {
    if (!modalConfig) return true
    if (modalConfig.requiresInput) {
      if (!inputValue) return true
      if (modalConfig.minLength && inputValue.length < modalConfig.minLength)
        return true
    }
    return false
  }, [modalConfig, inputValue])

  return {
    modalConfig,
    inputValue,
    setInputValue,
    openModal,
    handleConfirm,
    setModalConfig,
    isConfirmDisabled
  }
}

```

## src/features/view-guarantees/hooks/useWarrantyTracking.tsx

```tsx
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

import { getGuarantees } from '@/features/view-guarantees/services/getGuarantees'
import useWebSocket from '@/features/view-guarantees/utils/webSocket'

import isDevMode from '@/shared/utils/isDevMode'

export const useWarrantyTracking = (id: number) => {
  const [isLoading, setIsLoading] = useState(false)
  const [rows, setRows] = useState<any[]>([])
  const [infoTop, setInfoTop] = useState({
    guaranteeNumber: '',
    registrationDate: ''
  })

  const path = import.meta.env.VITE_GUARANTEES_SOCKETS_URL
  const topic = `/topic/guarantees-tracking/guarantee/${id}`
  const { mensaje } = useWebSocket(path, topic)

  useEffect(() => {
    console.log('🚀🚀🚀🚀 rows', rows)
  }, [rows])

  useEffect(() => {
    if (mensaje) {
      console.log('🚀 ~ GuaranteeList ~ mensaje:', mensaje)
      try {
        const parsedMessage = JSON.parse(mensaje)
        if (parsedMessage.guaranteeStatusHistory) {
          setRows(parsedMessage.guaranteeStatusHistory)
        }
      } catch (error) {
        if (isDevMode()) {
          console.error('Error parsing WebSocket message:', error)
        }
      }
    }
  }, [mensaje])

  useEffect(() => {
    const handleClickTracking = async () => {
      setIsLoading(true)
      const data = await getGuarantees(id)
      if (data) {
        setIsLoading(false)
        console.log('🚀 ~ handleClickTracking ~ data:', data)
        setRows(data.guaranteeStatusHistory)
        setInfoTop({
          guaranteeNumber: data.guaranteeNumber,
          registrationDate: dayjs(data?.registrationDate).format('DD/MM/YYYY')
        })
      }
    }
    handleClickTracking()
  }, [])

  return {
    isLoading,
    rows,
    infoTop,
    setInfoTop,
    setRows,
    setIsLoading
  }
}

```

## src/features/view-guarantees/mocks/mocksFilters.ts

```typescript
export const mockStateOptions = [
  { id: 1, name: 'Activo' },
  { id: 2, name: 'Inactivo' },
  { id: 3, name: 'Pendiente' },
  { id: 4, name: 'Aprobado' },
  { id: 5, name: 'Rechazado' }
]

```

## src/features/view-guarantees/mocks/mocksVisualization.ts

```typescript
export const mockRows = [
  {
    id: 1,
    trade: {
      specialTrade: { recordDate: '2025-03-01' },
      clearingDate: '2025-03-15'
    },
    participant: { name: 'Participante 1' },
    state: { description: 'Activo' },
    custodianStatus: { description: 'Activo' },
    country: 'México',
    deposito: 'Depósito 1'
  },
  {
    id: 2,
    trade: {
      specialTrade: { recordDate: '2025-03-02' },
      clearingDate: '2025-03-16'
    },
    participant: { name: 'Participante 2' },
    state: { description: 'Activo' },
    custodianStatus: { description: 'Inactivo' },
    country: 'Colombia',
    deposito: 'Depósito 2'
  },
  {
    id: 3,
    trade: {
      specialTrade: { recordDate: '2025-03-03' },
      clearingDate: '2025-03-17'
    },
    participant: { name: 'Participante 3' },
    state: { description: 'Activo' },
    custodianStatus: { description: 'Pendiente' },
    country: 'Argentina',
    deposito: 'Depósito 3'
  }
]

```

## src/features/view-guarantees/mocks/tracking.tsx

```tsx
import dayjs from 'dayjs'
import { ReactNode } from 'react'

const Container = ({
  children,
  className
}: {
  children: ReactNode
  className?: string
}) => (
  <div className={`flex h-full w-full items-center justify-start ${className}`}>
    {children}
  </div>
)

export const columnsMock = [
  {
    width: 100,
    field: 'Time',
    headerName: 'Fecha',
    renderCell: ({ row }: { row: { time: string } }) => {
      return (
        <Container>
          <span>
            {' '}
            {row?.time ? dayjs(row.time).format('DD/MM/YYYY') : 'N/A'}
          </span>
        </Container>
      )
    }
  },
  {
    width: 100,
    field: 'Hour',
    headerName: 'Hora',
    renderCell: ({ row }: { row: { time: string } }) => {
      return (
        <Container>
          <span> {dayjs(row?.time).format('HH:mm') ?? 'N/A'}</span>
        </Container>
      )
    }
  },
  {
    width: 250,
    field: 'Participant',
    headerName: 'Participante',
    renderCell: ({
      row
    }: {
      row: { guarantee: { participant: { code: string; name: string } } }
    }) => {
      return (
        <Container>
          <span>
            {' '}
            {row?.guarantee.participant.code} -{' '}
            {row?.guarantee.participant.name}
          </span>
        </Container>
      )
    }
  },
  {
    width: 150,
    field: 'Status',
    headerName: 'Estado',
    renderCell: ({ row }: { row: { status: { description: string } } }) => {
      return (
        <Container>
          <span> {row?.status.description ?? 'N/A'}</span>
        </Container>
      )
    }
  },
  {
    width: 150,
    field: 'Detail',
    headerName: 'Detalle',
    renderCell: ({ row }: { row: { reasonSuccess: string } }) => {
      return (
        <Container>
          <span> {row?.reasonSuccess ?? 'N/A'}</span>
        </Container>
      )
    }
  }
]

export const rowsMock = [
  {
    id: 1,
    fecha: '10/11/2024',
    hora: '18:59',
    participante: '10-Valores Bancolombia',
    estado: 'Registrada',
    detalle: 'Garantía registrada'
  },
  {
    id: 2,
    fecha: '10/11/2024',
    hora: '18:59',
    participante: '10-Valores Bancolombia',
    estado: 'En proceso',
    detalle: 'Garantía en proceso'
  },
  {
    id: 3,
    fecha: '10/11/2024',
    hora: '18:59',
    participante: '10-Valores Bancolombia',
    estado: 'Registrada',
    detalle: 'Garantía registrada'
  },
  {
    id: 4,
    fecha: '10/11/2024',
    hora: '18:59',
    participante: '10-Valores Bancolombia',
    estado: 'En proceso',
    detalle: 'Garantía en proceso'
  },
  {
    id: 5,
    fecha: '10/11/2024',
    hora: '18:59',
    participante: '10-Valores Bancolombia',
    estado: 'Registrada',
    detalle: 'Garantía registrada'
  },
  {
    id: 6,
    fecha: '10/11/2024',
    hora: '18:59',
    participante: '10-Valores Bancolombia',
    estado: 'En proceso',
    detalle: 'Garantía en proceso'
  },
  {
    id: 7,
    fecha: '10/11/2024',
    hora: '18:59',
    participante: '10-Valores Bancolombia',
    estado: 'Registrada',
    detalle: 'Garantía registrada'
  },
  {
    id: 8,
    fecha: '10/11/2024',
    hora: '18:59',
    participante: '10-Valores Bancolombia',
    estado: 'En proceso',
    detalle: 'Garantía en proceso'
  },
  {
    id: 9,
    fecha: '10/11/2024',
    hora: '18:59',
    participante: '10-Valores Bancolombia',
    estado: 'Registrada',
    detalle: 'Garantía registrada'
  },
  {
    id: 10,
    fecha: '10/11/2024',
    hora: '18:59',
    participante: '10-Valores Bancolombia',
    estado: 'En proceso',
    detalle: 'Garantía en proceso'
  },
  {
    id: 11,
    fecha: '10/11/2024',
    hora: '18:59',
    participante: '10-Valores Bancolombia',
    estado: 'Registrada',
    detalle: 'Garantía registrada'
  },
  {
    id: 12,
    fecha: '10/11/2024',
    hora: '18:59',
    participante: '10-Valores Bancolombia',
    estado: 'En proceso',
    detalle: 'Garantía en proceso'
  },
  {
    id: 13,
    fecha: '10/11/2024',
    hora: '18:59',
    participante: '10-Valores Bancolombia',
    estado: 'Registrada',
    detalle: 'Garantía registrada'
  },
  {
    id: 14,
    fecha: '10/11/2024',
    hora: '18:59',
    participante: '10-Valores Bancolombia',
    estado: 'En proceso',
    detalle: 'Garantía en proceso'
  },
  {
    id: 15,
    fecha: '10/11/2024',
    hora: '18:59',
    participante: '10-Valores Bancolombia',
    estado: 'Registrada',
    detalle: 'Garantía registrada'
  },
  {
    id: 16,
    fecha: '10/11/2024',
    hora: '18:59',
    participante: '10-Valores Bancolombia',
    estado: 'En proceso',
    detalle: 'Garantía en proceso'
  }
]

```

## src/features/view-guarantees/pages/ViewGuarantees.tsx

```tsx
import dayjs from 'dayjs'
import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useScreenActions } from 'remoteShell/mf-shell-useScreenActions'
import {
  ContentWrapper,
  ModalAlert,
  NewTable,
  Toast,
  TrafficLight,
  Spinner,
  AlertStack
} from 'remoteUtilities/components-mf-utilities'

import useRegisterGuarantee from '@/features/register-guaranties/hooks/useRegisterGuarantee'
import { GuaranteeDetails } from '@/features/view-guarantees/components/GuaranteeDetails'
import { ViewGuaranteesFilters } from '@/features/view-guarantees/components/ViewGuaranteesFilters'
import { WarrantyTracking } from '@/features/view-guarantees/components/WarrantyTracking'
import { useGuaranteeVisualization } from '@/features/view-guarantees/hooks/useGuaranteeVisualization'
import { newRegisterGuaranteeService } from '@/features/view-guarantees/services/newRegisterGuarantees'
import { getColumnsVisualization } from '@/features/view-guarantees/utils/ColumnsVisualization'

import ErrorRegisterModal from '@/shared/components/ErrorRegisterModal'
import { GUARANTEE_MANAGEMENT_ACTIONS } from '@/shared/constants/actionCodes'
import { STATES_PROCESS_REGISTER } from '@/shared/constants/processRegister'
import useGenerateLogs from '@/shared/hooks/useGenerateLogs'
import { SUBROUTES } from '@/shared/routes'

import { useDownloadGenerateCSV } from '../hooks/useDownloadGenerateCSV'
import { GuaranteePermissions } from '../types/visualization'

const ViewGuarantees = () => {
  const navigate = useNavigate()
  const { dispatchGenerateLog } = useGenerateLogs()
  const {
    stateRegister,
    information,
    actions: { setStateProcessRegister, clearRegisters, setToStateError }
  } = useRegisterGuarantee()
  const {
    alerts,
    countsByColors,
    endpoint,
    modalAlert,
    refreshTable,
    rows,
    tooltipMessages,
    CustomFooter,
    handleCircleClick,
    headerActionsLeft,
    onRefreshTable,
    resetColor,
    setAlerts,
    setDataRemote,
    setThereAreSelected,
    modalConfig,
    inputValue,
    setInputValue,
    handleConfirm,
    setModalConfig,
    isConfirmDisabled,
    toast,
    isLoading
  } = useGuaranteeVisualization()

  const [modalTracking, setModalTracking] = useState(false)
  const [currentId, setCurrentId] = useState<number>(0)
  const [origin, setOrigin] = useState('tracking')
  const [modalDetails, setModalDetails] = useState(false)
  const onRowDoubleClick = (params: { row: { id: number } }) => {
    setCurrentId(params.row.id)
    setModalDetails(true)
  }

  const onCloseModalError = () =>
    setStateProcessRegister({ state: STATES_PROCESS_REGISTER.IDLE })

  const onBackRegister = () => navigate(SUBROUTES.REGISTER_GUARANTEES)
  const { hasAction } = useScreenActions()
  const permissions: GuaranteePermissions = useMemo(
    () => ({
      canRegisterGuarantee: hasAction(
        GUARANTEE_MANAGEMENT_ACTIONS.REGISTER_GUARANTEES
      ),
      canEvaluateGuarantee: hasAction(
        GUARANTEE_MANAGEMENT_ACTIONS.EVALUATE_WARRANTY
      ),
      canViewDetailColumn: hasAction(GUARANTEE_MANAGEMENT_ACTIONS.DETAIL),
      canApproveRegister: hasAction(
        GUARANTEE_MANAGEMENT_ACTIONS.APPROVE_REGISTER
      ),
      canApproveRelease: hasAction(
        GUARANTEE_MANAGEMENT_ACTIONS.APPROVE_RELEASE
      ),
      canConfirmExecution: hasAction(
        GUARANTEE_MANAGEMENT_ACTIONS.CONFIRM_EXECUTION
      ),
      canGuaranteeTracking: hasAction(
        GUARANTEE_MANAGEMENT_ACTIONS.GUARANTEE_TRACKING
      )
    }),
    [hasAction]
  )
  const stateIsUploadRegister =
    stateRegister?.state === STATES_PROCESS_REGISTER.UPLOADING_REGISTER

  const registerNewGuarantee = async () => {
    try {
      await newRegisterGuaranteeService({
        tittleObject: !!information?.titleObject,
        participantId: information?.participant?.id,
        custodianId: information?.custody?.id,
        afpFoundId: information?.fondo?.id,
        guaranteeTypeId: information?.typeGuarantee?.id,
        securityId: information?.mnemonic?.id as number,
        isinNumberId: information?.isin?.id,
        investorId: information?.finalBeneficiary?.id,
        investorAccountId: information?.investorOrigin?.id,
        participantBankAccountId: information?.participantOrigin?.id,
        depositoryId: information?.bank?.id?.toString() as string,
        countryId: information?.country?.id,
        currencyId: information?.money?.id,
        guaranteeQuantity: information?.quantityGuarantee?.value,
        guaranteeSelfRelease: information?.selfLiberation?.value as boolean,
        accountTypeId: information?.typeAccount?.id,
        guaranteeGlobalAccountId:
          information?.accountGuarantee?.guaranteeGlobalAccountId,
        guaranteeParticularAccountId:
          information?.accountGuarantee?.guaranteeParticularAccountId
      })

      await dispatchGenerateLog({
        actionType: `New params guarantees`,
        actionDestination: 'Visualización de parámetros de garantías'
      })
      clearRegisters()
      setStateProcessRegister({ state: STATES_PROCESS_REGISTER.SUCCESS })
    } catch (error: any) {
      const message = error?.response?.data?.errorMessageDetail ?? error
      setToStateError(message)
    }
  }

  useEffect(() => {
    if (stateIsUploadRegister) {
      registerNewGuarantee()
    }
  }, [stateIsUploadRegister])

  const columns = getColumnsVisualization({
    setModalTracking,
    setCurrentId,
    setModalDetails,
    canViewDetailColumn: permissions.canViewDetailColumn,
    setOrigin
  })

  const handleClose = (id: number) => {
    setAlerts((prev) => prev.filter((a) => a.id !== id))
  }

  const { onDownload } = useDownloadGenerateCSV(columns as [])
  if (isLoading) {
    return <Spinner />
  }
  return (
    <ContentWrapper
      title="Visualización de garantías"
      extraElement={
        <TrafficLight
          label="Garantías próximas a vencer"
          countsByColors={countsByColors}
          tooltipMessages={tooltipMessages}
          onCircleClick={handleCircleClick}
        />
      }
    >
      <ViewGuaranteesFilters />
      <NewTable
        columns={columns}
        setDataRemote={setDataRemote}
        rows={rows}
        endpoint={endpoint}
        axiosInstanceKey="httpGuarantees"
        customToolbar={headerActionsLeft({ ...permissions })}
        customFooter={CustomFooter}
        disableRowSelectionOnClick={true}
        onRowDoubleClick={
          permissions.canViewDetailColumn ? onRowDoubleClick : undefined
        }
        refresh={refreshTable}
        setThereAreSelected={setThereAreSelected}
        showDownload
        csvFileName={`${dayjs().format('YYYYMMDD')}_GarantiasConstituidas.csv`}
        handleDownload={async () => {
          setAlerts((prev) => [
            ...prev,
            {
              id: Date.now(),
              open: true,
              severity: 'success',
              message:
                'El documento está listo, en breve comenzará la descarga.'
            }
          ])
          await onDownload()
        }}
        sx={{
          maxHeight: 'calc(100dvh - 290px)'
        }}
      />
      {modalAlert?.open && (
        <ModalAlert
          title={modalAlert.title}
          message={modalAlert.message}
          textSuccess={modalAlert.textSuccess}
          textCancel={modalAlert.textCancel}
          onClick={modalAlert.onClose}
          variant={modalAlert.variant}
          handleCancel={modalAlert.handleCancel}
          children={modalAlert.children}
          width={modalAlert.width}
          showIconClose={modalAlert.showIconClose}
          onIconClose={modalAlert.onIconClose}
        />
      )}

      <AlertStack alerts={alerts} onClose={handleClose} />

      {modalTracking && (
        <WarrantyTracking
          setModalTracking={setModalTracking}
          setModalDetails={setModalDetails}
          id={currentId}
          origin={origin}
        />
      )}
      {modalDetails && (
        <GuaranteeDetails
          setModalDetails={setModalDetails}
          id={currentId}
          setModalTracking={setModalTracking}
          setOrigin={setOrigin}
          canGuaranteeTracking={permissions.canGuaranteeTracking}
        />
      )}
      {toast?.open && <Toast {...toast} />}
      {stateRegister?.state === STATES_PROCESS_REGISTER.SUCCESS && (
        <Toast
          text="Su solicitud de registro de garantía se ha guardado exitosamente."
          variant="success"
          onClose={() => {
            setStateProcessRegister({ state: STATES_PROCESS_REGISTER.IDLE })
            resetColor()
            onRefreshTable()
          }}
          duration={2000}
        />
      )}
      {stateRegister?.state === STATES_PROCESS_REGISTER.ERROR && (
        <ErrorRegisterModal
          showModalError={true}
          messageError={stateRegister.messageError}
          onBackModal={onBackRegister}
          onCloseModal={onCloseModalError}
        />
      )}
      {modalConfig && (
        <ModalAlert
          title={modalConfig.title}
          message={modalConfig.message}
          textSuccess={modalConfig.textSuccess}
          onClick={handleConfirm}
          variant={modalConfig.variant}
          handleCancel={() => setModalConfig(null)} // Optional: handle modal close without action
          textCancel="Cancelar"
          disabled={isConfirmDisabled}
          orientation="horizontal"
        >
          {modalConfig.requiresInput && (
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Número de garantía"
              className="mt-2 w-full rounded border px-3 py-2"
            />
          )}
        </ModalAlert>
      )}
    </ContentWrapper>
  )
}
export default ViewGuarantees

```

## src/features/view-guarantees/services/calculateValuationGuarantee.ts

```typescript
import { httpCalculateGuaranteeVolume } from 'remoteShell/mf-axiosConfig'

import { ResponseCalculateValuationGuarantee } from '@/features/view-guarantees/types/bodyCalculateValuationGuarantee'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

export const calculateValuationGuarantee = async (body: number[]) => {
  const headers = await getHeaders()
  const dataResponse =
    await httpCalculateGuaranteeVolume.post<ResponseCalculateValuationGuarantee>(
      ENDPOINTS.GUARANTEES_VOLUME_CALCULATE_MANUAL,
      body,
      { headers }
    )
  return dataResponse.data
}

```

## src/features/view-guarantees/services/confirmGuaranteeOperations.ts

```typescript
// services/index.ts
import { ServiceResponse } from '../utils/serviceResponseHandler'

export const confirmRegistrationService = async (
  id: string
): Promise<ServiceResponse> => {
  if (id === 'error')
    return { success: false, message: 'El número de garantía es inválido.' }
  return { success: true, message: `Registro ${id} confirmado exitosamente.` }
}

export const confirmLiberationService = async (): Promise<ServiceResponse> => {
  return {
    success: true,
    message: 'Se aprobó exitosamente la liberación de la Garantía.'
  }
}

export const confirmExecutionService = async (): Promise<ServiceResponse> => {
  // success: Se aprobó exitosamente la ejecución de la Garantía.
  throw new Error('Server error') // simula un 500
}

```

## src/features/view-guarantees/services/executeGuarantee.ts

```typescript
import { httpExecuteGuarantee } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

import { GuaranteeResponse } from '../types/executeGuarantees'

export const generateExecuteGuarantees = async (data: number[]) => {
  const headers = await getHeaders()
  const res = await httpExecuteGuarantee.post<GuaranteeResponse>(
    ENDPOINTS.EXECUTE_GUARANTEES,
    data,
    { headers }
  )
  return res.data
}

```

## src/features/view-guarantees/services/getAllStatus.ts

```typescript
import { httpGuarantees } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'
import isDevMode from '@/shared/utils/isDevMode'

export const getAllStatus = async () => {
  try {
    const headers = await getHeaders()
    const response = await httpGuarantees.get(ENDPOINTS.STATUS, {
      headers
    })
    return response.data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error fetching all status:', error)
    }
    throw error
  }
}

```

## src/features/view-guarantees/services/getDownloadGuarantees.ts

```typescript
import { httpGuaranteesReports } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

import { GuaranteeFilterParams } from '../types/getReports'

export const getDownloadGuarantees = async (params: GuaranteeFilterParams) => {
  const headers = await getHeaders()
  const results = await httpGuaranteesReports.get(ENDPOINTS.GUARANTEE_REPORTS, {
    headers,
    params
  })
  return results.data
}

```

## src/features/view-guarantees/services/getGuaranteeAccount.ts

```typescript
import { httpGuarantees } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { ServiceGuaranteeAccountFilter } from '@/shared/types/GuaranteeAccount'
import { getHeaders } from '@/shared/utils/getHeaders'
import isDevMode from '@/shared/utils/isDevMode'

export const getGuaranteeAccount = async () => {
  try {
    const headers = await getHeaders()
    const response = await httpGuarantees.get<ServiceGuaranteeAccountFilter>(
      ENDPOINTS.GUARANTEE_ACCOUNT,
      {
        headers
      }
    )
    return response.data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error fetching guarantee accounts:', error)
    }
    throw error
  }
}

```

## src/features/view-guarantees/services/getGuaranteeAccountOptions.ts

```typescript
import { httpGuarantees } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import {
  GuaranteeAccountParams,
  ServiceGuaranteeAccountSearch
} from '@/shared/types/GuaranteeAccount'
import { getHeaders } from '@/shared/utils/getHeaders'
import isDevMode from '@/shared/utils/isDevMode'

export const getGuaranteeAccountSearch = async (
  params: GuaranteeAccountParams
) => {
  try {
    const headers = await getHeaders()
    const response = await httpGuarantees.get<ServiceGuaranteeAccountSearch>(
      ENDPOINTS.GUARANTEE_ACCOUNT_SEARCH,
      {
        headers,
        params
      }
    )
    return response.data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error fetching guarantee accounts:', error)
    }
    throw error
  }
}

```

## src/features/view-guarantees/services/getGuaranteeDetail.ts

```typescript
import { httpGuarantees } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'
import isDevMode from '@/shared/utils/isDevMode'

export const getGuaranteeDetail = async (id: number) => {
  try {
    const headers = await getHeaders()
    const { data } = await httpGuarantees.get(
      `${ENDPOINTS.GUARANTEE_DETAIL}/${id}`,
      {
        headers
      }
    )
    return data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error fetching guarantee detail:', error)
    }
    throw error
  }
}

```

## src/features/view-guarantees/services/getGuaranteeDetailTransaction.ts

```typescript
import { httpGuarantees } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'
import isDevMode from '@/shared/utils/isDevMode'

export const getGuaranteeDetailTransaction = async (id: number) => {
  try {
    const headers = await getHeaders()
    const { data } = await httpGuarantees.get(
      `${ENDPOINTS.GUARANTEE_DETAIL_TRANSACTION}/${id}`,
      {
        headers
      }
    )
    return data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error fetching guarantee detail:', error)
    }
    throw error
  }
}

```

## src/features/view-guarantees/services/getGuaranteeDetailTransactionTotals.ts

```typescript
import { httpGuarantees } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'
import isDevMode from '@/shared/utils/isDevMode'

export const getGuaranteeDetailTransactionTotals = async (id: number) => {
  try {
    const headers = await getHeaders()
    const { data } = await httpGuarantees.get(
      `${ENDPOINTS.GUARANTEE_DETAIL_TRANSACTION_CALCULATION_TOTAL}/${id}`,
      {
        headers
      }
    )
    return data
  } catch (error) {
    if (isDevMode()) {
      console.error(
        'Error fetching getGuaranteeDetailTransactionsTotals:',
        error
      )
    }
    throw error
  }
}

```

## src/features/view-guarantees/services/getGuarantees.ts

```typescript
import { httpGuaranteesTracking } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'
import isDevMode from '@/shared/utils/isDevMode'

export const getGuarantees = async (id: number) => {
  try {
    const headers = await getHeaders()
    const { data } = await httpGuaranteesTracking.get(
      `${ENDPOINTS.GUARANTEES_TRACKING}/${id}`,
      {
        headers
      }
    )
    return data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error fetching user information:', error)
    }
    throw error
  }
}

```

## src/features/view-guarantees/services/getGuaranteesCount.ts

```typescript
import { httpGuarantees } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'
import isDevMode from '@/shared/utils/isDevMode'

export const getGuaranteesCount = async () => {
  try {
    const headers = await getHeaders()
    const response = await httpGuarantees.get(ENDPOINTS.GUARANTEES_COUNT, {
      headers
    })
    return response.data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error fetching total guarantees:', error)
    }
    throw error
  }
}

```

## src/features/view-guarantees/services/getGuaranteesReport.ts

```typescript
import { httpGuaranteesReports } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'
import isDevMode from '@/shared/utils/isDevMode'

export const getGuaranteesReport = async (
  params: Record<string, string | number | null>
) => {
  try {
    const headers = await getHeaders()
    const response = await httpGuaranteesReports.get(
      ENDPOINTS.GUARANTEES_REPORT,
      {
        headers,
        params
      }
    )
    return response.data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error fetching guarantees report:', error)
    }
    throw error
  }
}

```

## src/features/view-guarantees/services/getNumGuarantees.ts

```typescript
import { httpGuarantees } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'
import isDevMode from '@/shared/utils/isDevMode'

export const getNumGuarantees = async (params: {
  page: number
  size: number
  text?: string
  participantId?: string | number | undefined
  registrationDate?: string | number | undefined
}) => {
  try {
    const headers = await getHeaders()
    const response = await httpGuarantees.get(
      ENDPOINTS.GUARANTEES_SEARCH_BY_NUMBER,
      {
        headers,
        params
      }
    )
    return response.data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error fetching total guarantees:', error)
    }
    throw error
  }
}

```

## src/features/view-guarantees/services/getParticipantGuarantees.ts

```typescript
import { httpGuarantees } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'
import isDevMode from '@/shared/utils/isDevMode'

import { ParticipantsAutoComplete } from '../types/getParticipants'

export const getParticipantGuarantees = async ({
  commonParams,
  filters
}: {
  filters?: {
    text?: string
    registrationDate?: string | null
  }
  commonParams?: {
    page?: number
    size?: number
  }
}) => {
  try {
    const headers = await getHeaders()
    const response = await httpGuarantees.get<ParticipantsAutoComplete>(
      ENDPOINTS.PARTICIPANT_GUARANTEES,
      {
        headers,
        params: {
          ...commonParams,
          ...filters
        }
      }
    )
    return response.data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error fetching total guarantees:', error)
    }
    throw error
  }
}

```

## src/features/view-guarantees/services/getTotalsGuarantee.ts

```typescript
import { httpGuarantees } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'
import isDevMode from '@/shared/utils/isDevMode'

export const getTotalsGuarantee = async (
  filters: Record<string, string | undefined>
) => {
  try {
    const headers = await getHeaders()
    const response = await httpGuarantees.get(ENDPOINTS.TOTALS_GUARANTEE, {
      headers,
      params: filters
    })
    return response.data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error fetching total guarantees:', error)
    }
    throw error
  }
}

```

## src/features/view-guarantees/services/getTypeAccount.ts

```typescript
import { httpAdminGuarantees } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { GuaranteeAccount } from '@/shared/types/GuaranteeAccount'
import { getHeaders } from '@/shared/utils/getHeaders'
import isDevMode from '@/shared/utils/isDevMode'

export const getTypeAccountOptions = async () => {
  try {
    const headers = await getHeaders()
    const response = await httpAdminGuarantees.get<GuaranteeAccount[]>(
      ENDPOINTS.GUARANTEE_TYPE_ACCOUNT,
      {
        headers
      }
    )
    return response.data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error fetching guarantee accounts:', error)
    }
    throw error
  }
}

```

## src/features/view-guarantees/services/guaranteeApproval.ts

```typescript
import { httpGuaranteeApproval } from 'remoteShell/mf-axiosConfig'

import { getHeaders } from '@/shared/utils/getHeaders'

import { GUARANTEE_APPROVAL_ENDPOINTS } from '../constants/guaranteeApprovalEndpoints'

export interface ServiceResponse {
  success: boolean
  message: string
}

// New interface for validation data
export interface GuaranteeValidation {
  guaranteeId: number
  validRegister: boolean
  validRelease: boolean
  validExecution: boolean
}

export const confirmRegistrationService = async (
  id: number,
  data: Record<string, unknown>
): Promise<ServiceResponse> => {
  try {
    const headers = await getHeaders()

    const response = await httpGuaranteeApproval.post(
      GUARANTEE_APPROVAL_ENDPOINTS.APPROVAL_REGISTER,
      { guaranteeId: id, guaranteeNumberDeposit: data.guaranteeNumber },
      { headers }
    )

    return {
      success: true,
      message:
        response.data?.message ??
        `Se aprobó exitosamente el registro de Garantía`
    }
  } catch (error: any) {
    return {
      success: false,
      message:
        error.response?.data?.message ??
        'Error al confirmar el registro de la garantía.'
    }
  }
}

export const confirmLiberationService = async (
  id: number
): Promise<ServiceResponse> => {
  try {
    const headers = await getHeaders()

    const response = await httpGuaranteeApproval.post(
      GUARANTEE_APPROVAL_ENDPOINTS.APPROVAL_LIBERATION,
      { guaranteeId: id },
      { headers }
    )

    return {
      success: true,
      message:
        response.data?.message ??
        `Se aprobó exitosamente la liberación de Garantía`
    }
  } catch (error: any) {
    return {
      success: false,
      message:
        error.response?.data?.message ??
        'Error al confirmar la liberación de la garantía.'
    }
  }
}

export const confirmExecutionService = async (
  id: number
): Promise<ServiceResponse> => {
  try {
    const headers = await getHeaders()

    const response = await httpGuaranteeApproval.post(
      GUARANTEE_APPROVAL_ENDPOINTS.APPROVAL_EXECUTION,
      { guaranteeId: id },
      { headers }
    )

    return {
      success: true,
      message:
        response.data?.message ??
        `Se aprobó exitosamente la ejecución de la Garantía`
    }
  } catch (error: any) {
    return {
      success: false,
      message:
        error.response?.data?.message ??
        'Error al confirmar la ejecución de la garantía.'
    }
  }
}

// New service: validate guarantee
export const validateGuaranteeService = async (
  id: number
): Promise<{
  success: boolean
  message: string
  data?: GuaranteeValidation
}> => {
  try {
    const headers = await getHeaders()
    const response = await httpGuaranteeApproval.get(
      `${GUARANTEE_APPROVAL_ENDPOINTS.APPROVAL_VALIDATE_GUARANTEE}/${id}`,
      { headers }
    )
    return {
      success: true,
      message: response.data?.message ?? 'Se validó exitosamente la garantía',
      data: {
        guaranteeId: response.data.guaranteeId,
        validRegister: response.data.validRegister,
        validRelease: response.data.validRelease,
        validExecution: response.data.validExecution
      }
    }
  } catch (error: any) {
    return {
      success: false,
      message: error.response?.data?.message ?? 'Error al validar la garantía.'
    }
  }
}

```

## src/features/view-guarantees/services/newRegisterGuarantees.ts

```typescript
import { httpGuaranteesRegister } from 'remoteShell/mf-axiosConfig'

import { BodyNewRegisterGuarantee } from '@/features/view-guarantees/types/newRegisterGuarantee'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

export const newRegisterGuaranteeService = async (
  bodyRegister: Partial<BodyNewRegisterGuarantee>
) => {
  const headers = await getHeaders()
  const dataResponse = await httpGuaranteesRegister.post(
    ENDPOINTS.GUARANTEES_REGISTER,
    bodyRegister,
    { headers }
  )
  return dataResponse.data
}

```

## src/features/view-guarantees/services/postGuaranteeConstitution.ts

```typescript
import { httpGuaranteeConstitution } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

export const postGuaranteeConstitution = async (data: number[]) => {
  const headers = await getHeaders()
  const response = await httpGuaranteeConstitution.post(
    ENDPOINTS.GUARANTEE_CONSTITUTION_MANUAL, //Envio constitucion manual validar endpoint
    data,
    {
      headers
    }
  )
  console.log(response.data, 'garantias rechazadas enviada')
  return response.data
}

```

## src/features/view-guarantees/types/bodyCalculateValuationGuarantee.d.ts

```typescript
export interface ResponseCalculateValuationGuarantee {
  responseSuccess: boolean
  message: string
  errors: [
    {
      id: number
      registrationDate: string
      guaranteeNumber: string
      guaranteeNumberDeposit: string
      guaranteeTypeName: string
      participantName: string
      custodianName: string
      investorName: string
      reason: string
    }
  ]
}
export interface ResponseErrorCalculateValuationGuarantee {
  httpCode: string
  httpMethod: string
  url: string
  timestamp: string
  errorCode: string
  errorMessage: string
  errorMessageDetail: string
  errorDetails: [
    {
      id: string
      description: string
    }
  ]
}

```

## src/features/view-guarantees/types/colors.d.ts

```typescript
export type TrafficColor = 'YELLOW' | 'RED' | 'GREEN'

```

## src/features/view-guarantees/types/executeGuarantees.d.ts

```typescript
export interface GuaranteeResponse {
  responseSuccess: boolean
  message: string
  successGuaranteesSendDeposit: SuccessGuarantee[]
  errorsGuaranteesSendDeposit: ErrorGuarantee[]
}

export interface SuccessGuarantee {
  guaranteeId: number
  registrationDate: string
  guaranteeNumber: string
  participant: string
  mnemonic: string
  isin: string
  depository: string
  country: string
  matchId: string
  guaranteeMovementId: number
}

export interface ErrorGuarantee {
  guaranteeId: number
  registrationDate: string
  guaranteeNumber: string
  participant: string
  mnemonic: string
  isin: string
  status: Status
  depository: string
  country: string
  reasonError: string
}

export interface Status {
  id: number
  description: string
}

export type ApiGuaranteeResponse = GuaranteeResponse[]

```

## src/features/view-guarantees/types/getParticipants.d.ts

```typescript
import { CommonFilters } from '@/features/view-operations-guarantee/types/services/commonFilters'

export interface ParticipantOption {
  id: number
  code: string
  documentNumber: string
  name: string
  shortName: string
  codeAndName: string
}

export type ParticipantsAutoComplete = CommonFilters<ParticipantOption[]>

```

## src/features/view-guarantees/types/getReports.d.ts

```typescript
export interface GuaranteeFilterParams {
  registrationDate?: string | null
  participantId?: number | null
  guaranteeGlobalAccountId?: number | null
  guaranteeParticularAccountId?: number | null
  guaranteeNumber?: string | null
  statusId?: number | null
  investorId?: number | null
  order?: string
  sort?: string
}

```

## src/features/view-guarantees/types/guaranteDetail.d.ts

```typescript
export interface Participant {
  id: number
  code: string
  documentNumber: string | null
  name: string
  shortName: string | null
  codeAndName: string
}

export interface IdentificationType {
  id: number
  code: string
  description: string
}

export interface Investor {
  id: number
  name: string
  firstName: string
  lastName: string
  documentNumber: string
  identification: string
  identificationType: IdentificationType
  companyName: string
  fullName: string | null
}

export interface InvestorAccount {
  id: number
  accountNumber: string
}

export interface Status {
  id: number
  description: string
  category: string
  detail: string
}

export interface Country {
  id: number
  name: string
}

export interface Currency {
  id: number
  code: string
  name: string
}

export interface Depository {
  id: string
  description: string
  fullName: string
}

export interface SecurityClass {
  id: string
  description: string
}

export interface SecurityTitle {
  id: number
  mnemonic: string
  class: SecurityClass
}

export interface IsinNumber {
  id: number
  isinNumber: string
  maturityDate: string
}

export interface GuaranteeType {
  id: number
  description: string
  category: string | null
  detail: string | null
}

export interface AccountType {
  id: number
  description: string
  category: string | null
  detail: string | null
}

export interface GuaranteeAccount {
  id: number
  accountCode: string
  accountName: string
}

export interface BlockingType {
  id: number
  description: string
  category: string | null
  detail: string | null
}

export interface GuaranteeValuation {
  marketPrice: number
  riskPercentage: number
  quantity: number
  guaranteeInteger: number
  currencyRisk: number
  blockingType: BlockingType
}

export interface AfpFund {
  id: number
  afpFundCode: string
  description: string
}

export interface GuaranteeService {
  id: number
  titleObject: boolean
  registrationDate: string
  participant?: Participant
  custodian?: Participant
  afpFund: AfpFund | null
  investor: Investor
  accountOriginDescription: string
  investorAccount: InvestorAccount
  participantBankAccount: string | null
  guaranteeNumber: string
  guaranteeNumberDeposit: string
  status: Status
  country: Country
  currency: Currency
  depository: Depository
  market: string | null
  securityTitle: SecurityTitle
  isinNumber: IsinNumber
  guaranteeType: GuaranteeType
  guaranteePrice: number
  guaranteeQuantity: number
  guaranteeVolume: number
  accountType: AccountType
  guaranteeAccountDescription: string | null
  guaranteeGlobalAccount: GuaranteeAccount
  guaranteeParticularAccount: GuaranteeAccount | null
  guaranteeValuation: GuaranteeValuation
}

```

## src/features/view-guarantees/types/modalActions.d.ts

```typescript
// types.ts
export interface ModalActionConfig {
  title: string
  message: string
  variant: 'warning' | 'error' | 'info' | 'success'
  textSuccess?: string
  requiresInput?: boolean
  minLength?: number
  onConfirm: (inputValue?: string) => Promise<void>
  textCancel?: string
  handleCancel?: () => void
}

```

## src/features/view-guarantees/types/newRegisterGuarantee.d.ts

```typescript
export interface BodyNewRegisterGuarantee {
  tittleObject: boolean
  participantId?: number
  custodianId?: number
  afpFoundId?: number
  guaranteeTypeId: number
  securityId: number
  isinNumberId: number
  investorId: number
  investorAccountId: number
  participantBankAccountId: number
  depositoryId: string
  countryId: number
  currencyId: number
  guaranteeQuantity: number
  guaranteeSelfRelease: boolean
  accountTypeId: number
  guaranteeGlobalAccountId: number
  guaranteeParticularAccountId: number
}

```

## src/features/view-guarantees/types/toastExtends.d.ts

```typescript
import { ToastProps } from '@/shared/types/declare'

export interface ToastState extends ToastProps {
  open?: boolean
}

```

## src/features/view-guarantees/types/visualization.d.ts

```typescript
import { Participant } from '@/features/guarantee-administration/types/administration'

import { GuaranteeService } from './guaranteDetail'

export interface MenuOption {
  id: string
  label: string
  icon?: React.ReactNode
  action?: () => void
  textSize?: string
  textColor?: string
  subItems?: MenuOption[]
  disabled?: boolean
}

export interface ModalAlertState {
  title: string
  message: string
  textSuccess?: string
  textCancel?: string
  variant: 'warning' | 'error' | 'info' | 'success'
  open: boolean
  onClose?: () => void
  handleCancel?: () => void
  onClick?: () => void
  children?: React.ReactNode
  width?: string
  showIconClose?: boolean
  onIconClose?: () => void
}

export interface IGuarantees {
  id: number
  registrationDate: Date
  participant: Participant
  guaranteeType: { detail: string; id: number }
  accountType: { detail: string; id: number }
  isinNumber: { isinNumber: string; id: number }
  fund: string
  afpFund: { afpFundCode: string }
  investor: Investor
  guaranteeNumber: string
  custodian: { codeAndName: string }
  status: Status
  guaranteeAccount: GuaranteeAccount
  country: Country
  depository: Depository
  market: Depository
  securityTitle: SecurityTitle
  guaranteePrice: number
  guaranteeQuantity: number
  guaranteeVolume: number
  specificAccount: string
  guaranteeValuation: GuaranteeValuation
  limitRV?: null | number
  limitDP?: null | number
  limitPR?: null | number
  limitEF?: null | number
  limitIF?: null | number
}

export interface GuaranteeValuation {
  riskPercentage: number
  guaranteeInteger: number
  blockingType: null
  currencyRisk: number
  guaranteeInteger: number
  marketPrice: number
  quantity: number
  riskPercentage: number
}

export interface Country {
  id: number
  name: string
}

export interface Depository {
  id: string
  description: string
  fullName: string
  descriptionCountry: string
}

export interface GuaranteeAccount {
  id: number
  code: number
  name: string
}

export interface TableTotals {
  assignedQuantityTotal?: number
  assignedAmountTotal?: number
  content?: AssignmentDetailItem[]
}

export interface AssignmentDetailItem {
  id: number
  assignedQuantity: number
  assignedAmount: number
}

export interface AssignmentDetailTotalsHook {
  tableTotals: TableTotals
  isLoadingTableTotals: boolean
  CustomFooter: () => JSX.Element
}

export interface IdentificationType {
  description: string
}

export interface GuaranteeInvestor {
  identificationType: IdentificationType
  firstName: string
  lastName: string
  documentNumber: string
  companyName: string
}

export interface GuaranteeParticipant {
  codeAndName: string
  code: string
  name: string
}

export interface GuaranteeStatus {
  description: string
}

export interface InvestorAccount {
  accountNumber: string
}

export interface Guarantee {
  registrationDate: string
  guaranteeNumber: string
  guaranteeNumberDeposit: string
  participant: GuaranteeParticipant
  fund: string
  investor: GuaranteeInvestor
  status: GuaranteeStatus
  investorAccount: InvestorAccount
}

export interface BlockingType {
  description: string
}

export interface GuaranteeValuation {
  marketPrice: number
  riskPercentage: number
  quantity: number | string
  unassignedQuantity: number | string
  guaranteeInteger: number
  unassignedAmount: number
  blockingType: BlockingType
}

export interface SecurityClass {
  description: string
}

export interface GuaranteeCurrency {
  code: string
}

export interface GuaranteeSecurityTitle {
  depository: Depository
  country: Country
  currency: GuaranteeCurrency
  class: SecurityClass
  mnemonic: string
  isin: string
  delistingDate: string
}

export type GuaranteeDetail = GuaranteeService

export interface UseGuaranteeDetailResponse {
  guaranteeDetail: GuaranteeDetail
  isLoading: boolean
}

export interface SecurityTitle {
  id: number
  mnemonic: string
  isin: string
  delistingDate: Date
  country: Country
  currency: Currency
  depository: Class
  class: Class
}

export interface Class {
  id: string
  description: string
}

export interface Country {
  id: number
  name: string
}

export interface Currency {
  id: number
  code: string
  name: string
}

export type GuaranteePermissions = {
  canRegisterGuarantee: boolean
  canEvaluateGuarantee: boolean
  canViewDetailColumn: boolean
  canApproveRegister: boolean
  canApproveRelease: boolean
  canConfirmExecution: boolean
  canGuaranteeTracking: boolean
}

export type AppAlert = {
  id: number
  message: string
  open: boolean
  severity: 'success' | 'error'
}

```

## src/features/view-guarantees/utils/ColumnsVisualization.tsx

```tsx
import { GridRenderCellParams } from '@mui/x-data-grid'

import { IconEyesTracking } from '@/features/view-guarantees/components/IconEyesTracking'
import { IGuarantees } from '@/features/view-guarantees/types/visualization'

import { formatNumber } from '@/shared/utils/formatNumber'
import { formatNumberWithThousandsSeparator } from '@/shared/utils/formatNumberWithThousandsSeparator'
import { formatToLocalDate } from '@/shared/utils/formatToLocalDate'
import { transformAmountToPercentage } from '@/shared/utils/transformAmountToPercentage'

interface ColumnsVisualizationProps {
  setModalTracking: (arg: boolean) => void
  setCurrentId: (arg: number) => void
  setModalDetails: (arg: boolean) => void
  setOrigin: (arg: string) => void
  canViewDetailColumn: boolean
}

export const getColumnsVisualization = (
  {
    setModalTracking,
    setCurrentId,
    setModalDetails,
    setOrigin,
    canViewDetailColumn
  }: ColumnsVisualizationProps = {} as ColumnsVisualizationProps
) => {
  return [
    ...(canViewDetailColumn
      ? [
          {
            flex: 1,
            minWidth: 97,
            field: 'Detalles',
            headerName: 'Detalles',
            sortable: false,
            filterable: false,
            renderHeader: (params: GridRenderCellParams) => (
              <div
                tabIndex={0}
                aria-label={`Columna ${params.colDef.headerName}`}
                style={{ outline: 'none', fontWeight: 'bold' }}
              >
                {params.colDef.headerName}
              </div>
            ),
            renderCell: ({ row }: { row: IGuarantees }) => {
              return (
                <div className="flex h-full w-full items-center justify-start gap-1">
                  <button
                    onClick={() => {
                      setModalDetails(true)
                      setCurrentId(row.id)
                      setOrigin('details')
                    }}
                    className="text-red-500 underline decoration-solid"
                  >
                    Ver detalles
                  </button>
                </div>
              )
            }
          }
        ]
      : []),
    {
      flex: 1,
      minWidth: 97,
      field: 'registrationDate',
      headerName: 'Fecha registro',
      renderHeader: (params: GridRenderCellParams) => (
        <div
          tabIndex={0}
          aria-label={`Columna ${params.colDef.headerName}`}
          style={{ outline: 'none', fontWeight: 'bold' }}
        >
          {params.colDef.headerName}
        </div>
      ),
      valueGetter: (value: string) => formatToLocalDate(value.toString()) || '-'
    },
    {
      flex: 1,
      minWidth: 200,
      field: 'participantCodeAndName',
      headerName: 'Participante',
      renderHeader: (params: GridRenderCellParams) => (
        <div
          tabIndex={0}
          aria-label={`Columna ${params.colDef.headerName}`}
          style={{ outline: 'none', fontWeight: 'bold' }}
        >
          {params.colDef.headerName}
        </div>
      ),
      renderCell: ({ row }: { row: IGuarantees }) =>
        row?.participant?.codeAndName
    },
    {
      flex: 1,
      minWidth: 200,
      field: 'custodianCodeAndName',
      headerName: 'Custodio',
      renderHeader: (params: GridRenderCellParams) => (
        <div
          tabIndex={0}
          aria-label={`Columna ${params.colDef.headerName}`}
          style={{ outline: 'none', fontWeight: 'bold' }}
        >
          {params.colDef.headerName}
        </div>
      ),
      renderCell: ({ row }: { row: IGuarantees }) => row?.custodian?.codeAndName
    },
    {
      flex: 1,
      minWidth: 120,
      headerName: 'Fondo',
      renderHeader: (params: GridRenderCellParams) => (
        <div
          tabIndex={0}
          aria-label={`Columna ${params.colDef.headerName}`}
          style={{ outline: 'none', fontWeight: 'bold' }}
        >
          {params.colDef.headerName}
        </div>
      ),
      field: 'afpFundAfpFundCode',
      renderCell: ({ row }: { row: IGuarantees }) => row?.afpFund?.afpFundCode
    },
    {
      flex: 1,
      minWidth: 120,
      field: 'investorFullName',
      headerName: 'Beneficiario Final',
      renderHeader: (params: GridRenderCellParams) => (
        <div
          tabIndex={0}
          aria-label={`Columna ${params.colDef.headerName}`}
          style={{ outline: 'none', fontWeight: 'bold' }}
        >
          {params.colDef.headerName}
        </div>
      ),
      renderCell: ({ row }: { row: IGuarantees }) => row?.investor?.fullName
    },
    {
      flex: 1,
      minWidth: 120,
      field: 'guaranteeNumber',
      headerName: 'No. Garantía nuBO',
      renderHeader: (params: GridRenderCellParams) => (
        <div
          tabIndex={0}
          aria-label={`Columna ${params.colDef.headerName}`}
          style={{ outline: 'none', fontWeight: 'bold' }}
        >
          {params.colDef.headerName}
        </div>
      )
    },
    {
      flex: 1,
      minWidth: 120,
      field: 'guaranteeNumberDeposit',
      headerName: 'No. Garantía Deposito',
      renderHeader: (params: GridRenderCellParams) => (
        <div
          tabIndex={0}
          aria-label={`Columna ${params.colDef.headerName}`}
          style={{ outline: 'none', fontWeight: 'bold' }}
        >
          {params.colDef.headerName}
        </div>
      ),
      valueGetter: (guaranteeNumberDeposit?: string) => {
        return guaranteeNumberDeposit ?? '-'
      }
    },
    {
      flex: 1,
      minWidth: 120,
      field: 'titleObject',
      headerName: 'Título Objeto',
      renderHeader: (params: GridRenderCellParams) => (
        <div
          tabIndex={0}
          aria-label={`Columna ${params.colDef.headerName}`}
          style={{ outline: 'none', fontWeight: 'bold' }}
        >
          {params.colDef.headerName}
        </div>
      ),
      valueGetter: (value: string) => (value ? 'SI' : 'NO')
    },
    {
      width: 150,
      minWidth: 140,
      field: 'status',
      sortable: false,
      filterable: false,
      headerName: 'Estado',
      renderHeader: (params: GridRenderCellParams) => (
        <div
          tabIndex={0}
          aria-label={`Columna ${params.colDef.headerName}`}
          style={{ outline: 'none', fontWeight: 'bold' }}
        >
          {params.colDef.headerName}
        </div>
      ),
      renderCell: ({ row }: { row: IGuarantees }) => (
        <div className="flex h-full w-full items-center justify-start gap-1">
          <p>{row?.status?.description ?? '-'}</p>
          <IconEyesTracking
            setModalTracking={setModalTracking}
            setCurrentId={setCurrentId}
            id={row.id}
            origin="tracking"
            setOrigin={setOrigin}
          />
        </div>
      )
    },
    {
      flex: 1,
      minWidth: 120,
      field: 'accountTypeDetail',
      headerName: 'Tipo Cuenta',
      renderHeader: (params: GridRenderCellParams) => (
        <div
          tabIndex={0}
          aria-label={`Columna ${params.colDef.headerName}`}
          style={{ outline: 'none', fontWeight: 'bold' }}
        >
          {params.colDef.headerName}
        </div>
      ),
      renderCell: ({ row }: { row: IGuarantees }) => row?.accountType?.detail
    },
    {
      flex: 1,
      minWidth: 120,
      field: 'guaranteeAccountDescription',
      headerName: 'Cuenta Garantia',
      renderHeader: (params: GridRenderCellParams) => (
        <div
          tabIndex={0}
          aria-label={`Columna ${params.colDef.headerName}`}
          style={{ outline: 'none', fontWeight: 'bold' }}
        >
          {params.colDef.headerName}
        </div>
      )
    },
    {
      flex: 1,
      minWidth: 120,
      field: 'countryName',
      headerName: 'País',
      renderHeader: (params: GridRenderCellParams) => (
        <div
          tabIndex={0}
          aria-label={`Columna ${params.colDef.headerName}`}
          style={{ outline: 'none', fontWeight: 'bold' }}
        >
          {params.colDef.headerName}
        </div>
      ),
      renderCell: ({ row }: { row: IGuarantees }) => row?.country?.name
    },
    {
      flex: 1,
      minWidth: 120,
      field: 'depositoryFullName',
      headerName: 'Deposito',
      renderHeader: (params: GridRenderCellParams) => (
        <div
          tabIndex={0}
          aria-label={`Columna ${params.colDef.headerName}`}
          style={{ outline: 'none', fontWeight: 'bold' }}
        >
          {params.colDef.headerName}
        </div>
      ),
      renderCell: ({ row }: { row: IGuarantees }) =>
        row?.depository?.fullName || '-'
    },
    {
      flex: 1,
      minWidth: 120,
      field: 'guaranteeTypeDetail',
      headerName: 'Tipo Garantia',
      renderHeader: (params: GridRenderCellParams) => (
        <div
          tabIndex={0}
          aria-label={`Columna ${params.colDef.headerName}`}
          style={{ outline: 'none', fontWeight: 'bold' }}
        >
          {params.colDef.headerName}
        </div>
      ),
      renderCell: ({ row }: { row: IGuarantees }) => row?.guaranteeType?.detail
    },
    {
      flex: 1,
      minWidth: 120,
      field: 'securityTitleMnemonic',
      headerName: 'Nemotecnico',
      renderHeader: (params: GridRenderCellParams) => (
        <div
          tabIndex={0}
          aria-label={`Columna ${params.colDef.headerName}`}
          style={{ outline: 'none', fontWeight: 'bold' }}
        >
          {params.colDef.headerName}
        </div>
      ),
      renderCell: ({ row }: { row: IGuarantees }) =>
        row?.securityTitle?.mnemonic || '-'
    },
    {
      flex: 1,
      minWidth: 120,
      field: 'isinNumberIsinNumber',
      headerName: 'ISIN',
      renderHeader: (params: GridRenderCellParams) => (
        <div
          tabIndex={0}
          aria-label={`Columna ${params.colDef.headerName}`}
          style={{ outline: 'none', fontWeight: 'bold' }}
        >
          {params.colDef.headerName}
        </div>
      ),
      renderCell: ({ row }: { row: IGuarantees }) => (
        <div className="flex h-full w-full items-center justify-start gap-1">
          <p className="w-full">{row?.isinNumber?.isinNumber ?? '-'}</p>
        </div>
      )
    },
    {
      flex: 1,
      minWidth: 120,
      field: 'guaranteeValuationMarketPrice',
      headerName: 'Precio',
      renderHeader: (params: GridRenderCellParams) => (
        <div
          tabIndex={0}
          aria-label={`Columna ${params.colDef.headerName}`}
          style={{ outline: 'none', fontWeight: 'bold' }}
        >
          {params.colDef.headerName}
        </div>
      ),
      valueGetter(_: GridRenderCellParams, data: IGuarantees) {
        const value = data?.guaranteeValuation?.marketPrice
        return value ? formatNumber(value) : '-'
      }
    },
    {
      flex: 1,
      minWidth: 120,
      field: 'guaranteeValuationRiskPercentage',
      headerName: 'Riesgo',
      renderHeader: (params: GridRenderCellParams) => (
        <div
          tabIndex={0}
          aria-label={`Columna ${params.colDef.headerName}`}
          style={{ outline: 'none', fontWeight: 'bold' }}
        >
          {params.colDef.headerName}
        </div>
      ),
      valueGetter: (_: GridRenderCellParams, data: IGuarantees) => {
        const riskPercentage = data?.guaranteeValuation?.riskPercentage
        return riskPercentage
          ? transformAmountToPercentage(riskPercentage)
          : '-'
      }
    },
    {
      flex: 1,
      minWidth: 120,
      field: 'guaranteeValuationCurrencyRisk',
      headerName: 'Riesgo Moneda',
      renderHeader: (params: GridRenderCellParams) => (
        <div
          tabIndex={0}
          aria-label={`Columna ${params.colDef.headerName}`}
          style={{ outline: 'none', fontWeight: 'bold' }}
        >
          {params.colDef.headerName}
        </div>
      ),
      renderCell: (params: GridRenderCellParams) => {
        const value = params.row?.guaranteeValuation?.currencyRisk
        return (
          <div className="flex h-full w-full items-center justify-start gap-1">
            <p className="w-full">
              {value ? transformAmountToPercentage(value) : '-'}
            </p>
          </div>
        )
      }
    },
    {
      flex: 1,
      minWidth: 120,
      field: 'guaranteeValuationQuantity',
      headerName: 'Cantidad',
      renderHeader: (params: GridRenderCellParams) => (
        <div
          tabIndex={0}
          aria-label={`Columna ${params.colDef.headerName}`}
          style={{ outline: 'none', fontWeight: 'bold' }}
        >
          {params.colDef.headerName}
        </div>
      ),
      valueGetter(value: number, data: IGuarantees) {
        const quantity = data.guaranteeValuation?.quantity ?? value
        return formatNumber(quantity) ?? '-'
      }
    },
    {
      flex: 1,
      minWidth: 120,
      field: 'guaranteeValuationGuaranteeInteger',
      headerName: 'Entero Garantía',
      renderHeader: (params: GridRenderCellParams) => (
        <div
          tabIndex={0}
          aria-label={`Columna ${params.colDef.headerName}`}
          style={{ outline: 'none', fontWeight: 'bold' }}
        >
          {params.colDef.headerName}
        </div>
      ),
      valueGetter(_: number, data: IGuarantees) {
        return (
          formatNumberWithThousandsSeparator(
            data.guaranteeValuation?.guaranteeInteger,
            false,
            true
          ) ?? '-'
        )
      }
    },
    {
      flex: 1,
      minWidth: 120,
      field: 'limitRV',
      headerName: 'Limite RV',
      renderHeader: (params: GridRenderCellParams) => (
        <div
          tabIndex={0}
          aria-label={`Columna ${params.colDef.headerName}`}
          style={{ outline: 'none', fontWeight: 'bold' }}
        >
          {params.colDef.headerName}
        </div>
      ),
      valueGetter(_: number, data: IGuarantees) {
        return data?.limitRV
          ? formatNumberWithThousandsSeparator(data.limitRV, false, true)
          : '-'
      }
    },
    {
      flex: 1,
      minWidth: 120,
      field: 'limitDP',
      headerName: 'Limite DP',
      renderHeader: (params: GridRenderCellParams) => (
        <div
          tabIndex={0}
          aria-label={`Columna ${params.colDef.headerName}`}
          style={{ outline: 'none', fontWeight: 'bold' }}
        >
          {params.colDef.headerName}
        </div>
      ),
      valueGetter(_: number, data: IGuarantees) {
        return data?.limitDP
          ? formatNumberWithThousandsSeparator(data.limitDP, false, true)
          : '-'
      }
    },
    {
      flex: 1,
      minWidth: 120,
      field: 'limitPR',
      headerName: 'Limite PR',
      renderHeader: (params: GridRenderCellParams) => (
        <div
          tabIndex={0}
          aria-label={`Columna ${params.colDef.headerName}`}
          style={{ outline: 'none', fontWeight: 'bold' }}
        >
          {params.colDef.headerName}
        </div>
      ),
      valueGetter(_: number, data: IGuarantees) {
        return data?.limitPR
          ? formatNumberWithThousandsSeparator(data.limitPR, false, true)
          : '-'
      }
    },
    {
      flex: 1,
      minWidth: 120,
      field: 'limitEF',
      headerName: 'Limite EF',
      renderHeader: (params: GridRenderCellParams) => (
        <div
          tabIndex={0}
          aria-label={`Columna ${params.colDef.headerName}`}
          style={{ outline: 'none', fontWeight: 'bold' }}
        >
          {params.colDef.headerName}
        </div>
      ),
      valueGetter(_: number, data: IGuarantees) {
        return data?.limitEF
          ? formatNumberWithThousandsSeparator(data.limitEF, false, true)
          : '-'
      }
    },
    {
      flex: 1,
      minWidth: 120,
      field: 'limitIF',
      headerName: 'Limite IF',
      renderHeader: (params: GridRenderCellParams) => (
        <div
          tabIndex={0}
          aria-label={`Columna ${params.colDef.headerName}`}
          style={{ outline: 'none', fontWeight: 'bold' }}
        >
          {params.colDef.headerName}
        </div>
      ),
      valueGetter(_: number, data: IGuarantees) {
        return data?.limitIF
          ? formatNumberWithThousandsSeparator(data.limitIF, false, true)
          : '-'
      }
    }
  ]
}

```

## src/features/view-guarantees/utils/generateCSV.ts

```typescript
import { TRenderCellParams } from '@nuam/common-fe-lib-components'

import { formatNumberWithThousandsSeparator } from '@/shared/utils/formatNumberWithThousandsSeparator'
import { formatToLocalDate } from '@/shared/utils/formatToLocalDate'

export interface HeaderTable {
  width: number
  headerName: string
  field: string
  sortable: boolean
  filterable: boolean
  renderCell: (params: TRenderCellParams) => JSX.Element
  flex?: undefined
  cellClassName?: undefined
  noHidden?: undefined
  valueGetter: (data: any) => string
}

type GenerateTxtReport = {
  data: any
  name?: string
  headersTable: HeaderTable[]
}

export const generateCSVUsers = async ({
  data,
  name,
  headersTable
}: GenerateTxtReport) => {
  const reports: string[] = []

  const headersSetRows = new Set(headersTable)
  const headersSet = new Set()
  headersSetRows.forEach((header) => {
    if (header.field !== 'Detalles') {
      headersSet.add(header.headerName)
    }
  })
  const headers = [...headersSet].join(',')
  reports.push(headers)
  const setData = new Set(data)
  setData.forEach((row: any) => {
    const participant = row?.participant
    const depository = row?.depository
    const guaranteeType = row?.guaranteeType
    const securityTitle = row?.securityTitle
    const riskPercentage = row?.riskPercentage
    const guaranteeValuation = row?.guaranteeValuation
    const renderCells: Record<string, string> = {
      registrationDate:
        formatToLocalDate(row.registrationDate.toString()) || '-',
      participant: participant?.codeAndName,
      custodian: row?.custodian?.codeAndName,
      afpFund: row?.afpFund?.afpFundCode,
      investor: row?.investor?.fullName,
      status: row?.status?.description,
      accountType: row?.accountType?.detail,
      country: row?.country?.name,
      depository: depository?.fullName || '-',
      guaranteeType: guaranteeType?.detail,
      securityTitle: securityTitle?.value?.description ?? '-',
      securityMnemonic: securityTitle?.mnemonic,
      isinNumber: row?.isinNumber?.isinNumber ?? 'N/A',
      guaranteeValuation: guaranteeValuation?.riskPercentage
        ? `${guaranteeValuation?.riskPercentage}%`
        : 'N/A',
      riesgoMoneda: guaranteeValuation?.currencyRisk ?? 'N/A',
      guaranteeValuation_marketPrice:
        formatNumberWithThousandsSeparator(
          row?.guaranteeValuation?.marketPrice,
          false,
          false
        ) || '-',
      guaranteeValuation_riskPercentage: riskPercentage
        ? `${riskPercentage}%`
        : 'N/A',
      guaranteeValuation_currencyRisk:
        row?.guaranteeValuation?.currencyRisk ?? 'N/A',
      guaranteeValuation_quantity: row?.guaranteeValuation?.quantity,
      guaranteeInteger:
        formatNumberWithThousandsSeparator(
          row?.guaranteeValuation?.guaranteeInteger,
          false,
          true
        ) ?? 'N/A',
      titleObject: row.titleObject ? 'SI' : 'NO'
    }
    const rowRenderCells = Object.keys(renderCells)
    const item: string[] = []
    headersSetRows.forEach((header) => {
      const { field, headerName } = header
      const isRenderCell = rowRenderCells.includes(field)
      const headersNameHasField = [...headersSet].includes(headerName)
      if (headersNameHasField) {
        if (isRenderCell) {
          const valueRenderCell = renderCells[field as keyof typeof renderCells]
          item.push(valueRenderCell)
        } else {
          const valueRow = row?.[field] ?? ''
          item.push(valueRow)
        }
      }
    })
    reports.push(item.join(','))
  })

  const finalContent = reports.join('\n')
  const nameEntity = (name ?? 'default_name').replace(/\s+/g, '_')
  const fileName = `${nameEntity}.csv`
  const bom = new Uint8Array([0xef, 0xbb, 0xbf])
  const blob = new Blob([bom, finalContent], { type: 'text/csv;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = fileName
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

```

## src/features/view-guarantees/utils/guaranteeApproval.ts

```typescript
import { MENU_RULES } from '../constants/guaranteeApproval'

export const validateMenuOption = (
  optionId: string,
  currentStatus?: string | null,
  validation?: {
    validRegister: boolean
    validRelease: boolean
    validExecution: boolean
  }
): boolean => {
  const rule = MENU_RULES[optionId]
  const normalizedStatus = (currentStatus || '').trim().toUpperCase()
  const statusOk = !rule
    ? true
    : rule.allowedStatuses
        .map((allowed) => allowed.trim().toUpperCase())
        .includes(normalizedStatus)

  const flagMap: Record<string, boolean> = {
    confirmRegistration: validation?.validRegister ?? false,
    confirmLiberation: validation?.validRelease ?? false,
    confirmExecution: validation?.validExecution ?? false
  }
  const flagOk = flagMap[optionId] === undefined ? true : flagMap[optionId]

  return flagOk && statusOk
}

```

## src/features/view-guarantees/utils/serviceResponseHandler.ts

```typescript
// utils/serviceResponseHandler.ts
export interface ServiceResponse {
  success: boolean
  message: string
}

export const handleServiceResponse = <T extends any[]>(
  serviceCall: (...args: T) => Promise<ServiceResponse>,
  onSuccess: (message: string) => void,
  onError: (message: string) => void,
  onUnexpected: (message: string) => void,
  onAfterSuccess?: () => void
) => {
  return async (...args: T) => {
    try {
      const response = await serviceCall(...args)

      if (response.success) {
        onSuccess(response.message)
        if (onAfterSuccess) onAfterSuccess()
      } else {
        onError(
          response.message || 'Ocurrió un error al procesar la solicitud.'
        )
      }
    } catch (error) {
      onUnexpected(
        'Error inesperado en el servidor. Intente nuevamente más tarde.'
      )
    }
  }
}

```

## src/features/view-guarantees/utils/webSocket.ts

```typescript
import { Client } from '@stomp/stompjs'
import { useEffect, useState } from 'react'
import SockJS from 'sockjs-client'

import { STORAGE_KEYS } from '@/shared/constants/storageKeys'
import { getFromLocalStorage } from '@/shared/utils/getFromLocalStorage'

const useWebSocket = (path: string, topic: string) => {
  const [mensaje, setMensaje] = useState('')
  const [connected, setConnected] = useState(false)
  const token = getFromLocalStorage(STORAGE_KEYS.ACCESS_TOKEN)
  console.log('🚀 ~ useWebSocket ~ connected:', connected)
  console.log('🚀 ~ useWebSocket ~ mensaje:', mensaje)

  useEffect(() => {
    const client = new Client({
      brokerURL: `${path}`,
      connectHeaders: {
        Authorization: `Bearer ${token}`
      },
      debug: function (str: string) {
        console.log(str)
      },
      onConnect: () => {
        setConnected(true)

        client.subscribe(topic, (message: unknown) => {
          if (message && typeof message === 'object' && 'body' in message) {
            setMensaje(message.body as string)
          }
        })
      },
      onDisconnect: () => {
        setConnected(false)
      },

      webSocketFactory: () => new SockJS(`${path}`),
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000
    })

    client.activate()

    return () => {
      client.deactivate()
    }
  }, [path, topic, token])

  return { mensaje, connected }
}

export default useWebSocket

```

## src/features/view-operations-guarantee/components/BeneficiariesModalContent.tsx

```tsx
import {
  Button,
  DefaultComponents,
  Modal,
  Typography
} from '@nuam/common-fe-lib-components'

import { NewTable } from 'remoteUtilities/components-mf-utilities'

import { ColumnsBeneficiaries } from '../constants/columnsBeneficiaries'

interface BeneficiariesModalProps {
  open: boolean
  onClose: () => void
  beneficiariesParams: {
    tradeId?: number
    sideId?: string
    folio?: number
    matchDate?: Date
    participantCode?: string
    sideDescription?: string
  }
}

export const BeneficiariesModal = ({
  open,
  onClose,
  beneficiariesParams
}: BeneficiariesModalProps) => (
  <Modal
    open={open}
    onClose={onClose}
    boxProps={{
      sx: {
        borderRadius: '4px',
        padding: '48px',
        maxWidth: '1135px',
        border: 'none',
        width: '100%',
        outline: 'none',
        zIndex: 1
      }
    }}
  >
    <>
      <div>
        <Typography className="mb-4" variant="h5">
          Detalle beneficiario
        </Typography>
        <DefaultComponents.Grid
          container
          spacing={2}
          sx={{ mb: 3, px: 2 }}
          justifyContent={'center'}
        >
          <DefaultComponents.Grid maxWidth={441} width={'100%'}>
            <Typography variant="body1" gutterBottom>
              <strong>Fecha de Registro:</strong>
              <span style={{ marginLeft: 4 }}>
                {beneficiariesParams?.matchDate
                  ? new Date(beneficiariesParams?.matchDate).toLocaleDateString(
                      'es-PE'
                    )
                  : ''}
              </span>
            </Typography>
            <Typography variant="body1">
              <strong>Punta:</strong>
              <span style={{ marginLeft: 4 }}>
                {beneficiariesParams?.sideDescription || ''}
              </span>
            </Typography>
          </DefaultComponents.Grid>
          <DefaultComponents.Grid maxWidth={441} width={'100%'}>
            <Typography variant="body1" gutterBottom>
              <strong>Número de operación:</strong>
              <span style={{ marginLeft: 4 }}>
                {beneficiariesParams?.folio || ''}
              </span>
            </Typography>
            <Typography variant="body1">
              <strong>Participante:</strong>
              <span style={{ marginLeft: 4 }}>
                {beneficiariesParams?.participantCode || ''}
              </span>
            </Typography>
          </DefaultComponents.Grid>
        </DefaultComponents.Grid>
        <NewTable
          columns={ColumnsBeneficiaries()}
          endpoint={
            beneficiariesParams.tradeId && beneficiariesParams.sideId
              ? `/guarantees/trade/filter/investors?tradeId=${beneficiariesParams.tradeId}&sideId=${beneficiariesParams.sideId}`
              : undefined
          }
          disableRowSelectionOnClick={false}
          checkboxSelection={false}
          hideRightToolbar={true}
          axiosInstanceKey="httpGuaranteesForOperations"
        />
      </div>
      <div className="m-auto mt-4 flex w-full max-w-[197px] justify-center">
        <Button variant="contained" color="primary" onClick={onClose} fullWidth>
          Volver
        </Button>
      </div>
    </>
  </Modal>
)

```

## src/features/view-operations-guarantee/components/ChangeTypeAccount.tsx

```tsx
import { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'

import { useScreenActions } from 'remoteShell/mf-shell-useScreenActions'
import { RootState } from 'remoteShell/mf-store'
import {
  GenerateLogs,
  SelectNuam,
  Toast
} from 'remoteUtilities/components-mf-utilities'

import { ERROR_MESSAGES } from '@/features/account-management/constants/errors'
import { TypeAccount } from '@/features/view-operations-guarantee/enum/typeAccounts'
import { generateNewAccount } from '@/features/view-operations-guarantee/services/change-type-account/generateNewAccount'
import { saveNewAccount } from '@/features/view-operations-guarantee/services/change-type-account/saveAccount'
import {
  ChangeTypeAccountsProps,
  StateTypeAccount
} from '@/features/view-operations-guarantee/types/components/ChangeTypeAccount'

import { GUARANTEE_VIEW_OPERATIONS_ACTIONS } from '@/shared/constants/actionCodes'
import { STORAGE_KEYS } from '@/shared/constants/storageKeys'
import { ToastProps } from '@/shared/types/declare'
import { getFromLocalStorage } from '@/shared/utils/getFromLocalStorage'

const ChangeTypeAccount = ({
  onRefreshTable,
  setAlert,
  typeAccountDefault,
  tradeId,
  options,
  statusDescription
}: ChangeTypeAccountsProps) => {
  const { infoUserNubo } = useSelector((state: RootState) => state.auth)
  const { participantId, id, country, status } = infoUserNubo
  const clientUser = getFromLocalStorage(STORAGE_KEYS.USERNAME)
  const [typeAccount, setTypeAccount] = useState<StateTypeAccount | undefined>()
  const [toast, setToast] = useState<ToastProps>()
  const typeAccountFind = options.find(
    (option) => option.description === typeAccountDefault
  )
  const { hasAction } = useScreenActions()
  const canChangeAccountType = useMemo(
    () => hasAction(GUARANTEE_VIEW_OPERATIONS_ACTIONS.CHANGE_ACCOUNT_TYPE),
    [hasAction]
  )

  const isTypeEspecifica = typeAccount?.description
    ?.trim()
    .toUpperCase()
    .includes('ESPECIFICA')
  const isStatusLiquidada = statusDescription?.toUpperCase() === 'LIQUIDADA'

  const isEditable =
    canChangeAccountType && !isTypeEspecifica && !isStatusLiquidada

  const onAlertSuccess = () => {
    setAlert({
      open: true,
      title: '¿Estas seguro de guardar los cambios registrados?',
      message:
        'Si deseas continuar, haz clic en aceptar, de lo contrario puedes cancelar y regresar a la pantalla anterior.',
      textCancel: 'cancelar',
      textSuccess: 'aceptar',
      variant: 'warning',
      orientation: 'horizontal',
      width: '502px',
      handleCancel() {
        setAlert(undefined)
        setTypeAccount(typeAccountFind)
      },
      async onClick(this) {
        try {
          const resGenerateAccount = await generateNewAccount({
            accountType: 'SPECIFIC_ACCOUNT',
            guaranteeTradeId: tradeId
          })
          await saveNewAccount({
            accountNumber: resGenerateAccount.accountNumber,
            accountType: 'SPECIFIC_ACCOUNT',
            guaranteeTradeId: tradeId
          })
          GenerateLogs(clientUser || '', {
            actionType: 'Cambio de tipo de cuenta de General a Específica',
            actionDestination: 'Operaciones de garantía',
            participantId,
            countryId: country.id,
            userNuboId: id,
            statusId: status.id
          })
          setAlert(undefined)
          setToast({
            text: 'Tipo de cuenta modificado exitosamente.',
            variant: 'success',
            onClose: () => {
              onRefreshTable()
              setToast(undefined)
            },
            duration: 1800
          })
        } catch (error: any) {
          const message = error.response.data.errorMessageDetail
          onAlertError(message)
        }
      }
    })
  }
  const onAlertError = (error: string) => {
    setAlert({
      open: true,
      title: 'Ocurrió un error inesperado',
      message: error ?? ERROR_MESSAGES.TRY_AGAIN,
      textSuccess: 'aceptar',
      onClick() {
        setAlert(undefined)
        setTypeAccount(typeAccountFind)
      },
      variant: 'error'
    })
  }

  const changeTypeAccount = async () => {
    onAlertSuccess()
  }
  useEffect(() => {
    setTypeAccount(typeAccountFind)
  }, [options, typeAccountFind])

  useEffect(() => {
    if (
      typeAccount?.description === TypeAccount.ESPECIFICA &&
      typeAccountDefault === TypeAccount.GENERAL
    ) {
      changeTypeAccount()
    }
  }, [typeAccount, typeAccountDefault, typeAccountFind, tradeId])
  return (
    <>
      {isEditable ? (
        <SelectNuam
          label={!typeAccount ? 'Tipo de cuenta' : ''}
          options={options}
          value={typeAccount?.detail ?? ''}
          onChange={(e) => {
            setTypeAccount(e)
          }}
          size="small"
          formControlProps={{
            fullWidth: true,
            sx: {
              height: '28px',
              maxHeight: '28px',
              '& .MuiInputBase-root': {
                height: '100%',
                fontSize: '12px',
                alignItems: 'center',
                paddingTop: typeAccount ? '4px' : '0px'
              },
              '& .MuiSelect-select': {
                paddingY: '4px',
                fontSize: '12px',
                display: 'flex',
                alignItems: 'center'
              },
              '& .MuiInputLabel-root': {
                fontSize: '12px',
                top: '4px',
                transform: 'translate(14px, 4px) scale(1)',
                transition: 'all 0.2s ease',
                '&.MuiInputLabel-shrink': {
                  transform: 'translate(14px, -9px) scale(0.75)'
                },
                display: !typeAccount ? 'block' : 'none'
              }
            }
          }}
          showClearIndicator
          valueKey="detail"
          labelKey="detail"
        />
      ) : (
        <span className="text-13px">{typeAccount?.detail ?? ''}</span>
      )}
      {toast && <Toast {...toast} />}
    </>
  )
}

export default ChangeTypeAccount

```

## src/features/view-operations-guarantee/components/FiltersSearchTable.tsx

```tsx
import {
  FilterBar,
  useUrlParams
} from 'remoteUtilities/components-mf-utilities'

import { useTranslate } from '@/shared/hooks/useTranslate'

import useGetFolio from '../hooks/useGetFolio'
import useGetGuaranteeAccounts from '../hooks/useGetGuaranteeAccounts'
import useGetOptionsIsin from '../hooks/useGetOptionsIsin'
import useGetOptionsMnemonic from '../hooks/useGetOptionsMnemonic'
import useGetOptionsState from '../hooks/useGetOptionsState'
import useGetOptionsBeneficiary from '../hooks/useGetoptionsBeneficiary'
import useRenderFiltersForUser from '../hooks/useRenderFiltersForUser'

const FiltersSearchTable = () => {
  // const { filters, onChangeFilters } = props
  const trans = useTranslate('viewOperationGuarantee.filters')
  const { getOptionsFolio } = useGetFolio()
  const { getOptionsStatus } = useGetOptionsState()
  const { viewFilterForUser } = useRenderFiltersForUser()
  const { getOptionsAccountGuarantee } = useGetGuaranteeAccounts()
  const { getOptionsBeneficiary } = useGetOptionsBeneficiary()
  const { getOptionsMnemonic } = useGetOptionsMnemonic()
  const { getOptionsIsin } = useGetOptionsIsin()
  const { updateParam } = useUrlParams()
  return (
    <FilterBar
      config={[
        {
          label: trans('date-register'),
          type: 'datepicker',
          name: 'registrationDate'
        },
        {
          label: trans('folio'),
          type: 'autocomplete',
          name: 'folio',
          fetchOptions: getOptionsFolio
        },
        {
          label: trans('account-guarantee'),
          type: 'select',
          name: 'accountCode',
          loadOptions: getOptionsAccountGuarantee,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange: (e: string, i: any) => {
            const particularAccountId = i?.accountParticularCode
            updateParam('guaranteeAccountId', i?.accountId)
            updateParam(e, i?.accountCode ?? particularAccountId)
            updateParam('guaranteeAccountType', i?.accountType)
          }
        },
        {
          label: trans('state'),
          type: 'select',
          name: 'statusId',
          loadOptions: getOptionsStatus
        },
        ...viewFilterForUser,
        {
          label: trans('beneficiary'),
          type: 'autocomplete',
          name: 'investor',
          fetchOptions: getOptionsBeneficiary
        },
        {
          label: trans('mnemonic'),
          type: 'autocomplete',
          name: 'mnemonic',
          fetchOptions: getOptionsMnemonic
        },
        {
          label: trans('isin'),
          type: 'autocomplete',
          name: 'isinNumberId',
          fetchOptions: getOptionsIsin
        }
      ]}
      className="mb-6 mt-4 flex w-full flex-wrap justify-between gap-4"
    />
  )
}

export default FiltersSearchTable

```

## src/features/view-operations-guarantee/components/RenderOptionAutoComplete.tsx

```tsx
import { DefaultComponents } from '@nuam/common-fe-lib-components'
import React from 'react'

const RenderOptionAutoComplete = (
  props: React.HTMLAttributes<HTMLLIElement>,
  option: { id: number; label: string }
) => (
  <DefaultComponents.Box
    component="li"
    {...props}
    key={option.id}
    sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
  >
    {option.label}
  </DefaultComponents.Box>
)

export default RenderOptionAutoComplete

```

## src/features/view-operations-guarantee/components/RequirementCalculation.tsx

```tsx
import { Dispatch, SetStateAction, useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'remoteShell/mf-store'
import {
  AlertMui,
  GenerateLogs,
  ModalAlert,
  NewTable,
  Spinner
} from 'remoteUtilities/components-mf-utilities'

import { postManualCalculate } from '@/features/view-operations-guarantee/services/postManualCalculate'
import { ColumnsErrorTable } from '@/features/view-operations-guarantee/utils/ColumnsErrorTable'

import { STORAGE_KEYS } from '@/shared/constants/storageKeys'
import { getFromLocalStorage } from '@/shared/utils/getFromLocalStorage'
import isDevMode from '@/shared/utils/isDevMode'

interface Props {
  fieldsSelected: number[]
  setRequirement: Dispatch<SetStateAction<boolean>>
  onRefreshTable: () => void
}

export const RequirementCalculation = ({
  fieldsSelected,
  setRequirement,
  onRefreshTable
}: Props) => {
  const { infoUserNubo } = useSelector((state: RootState) => state.auth)
  const { participantId, id, status, country } = infoUserNubo
  const clientUser = getFromLocalStorage(STORAGE_KEYS.USERNAME)
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState<{
    show: boolean
    message: string
  }>({
    show: false,
    message: ''
  })
  const [alert, setAlert] = useState<{
    show: boolean
    title: string
    message?: string
    variant: string
    cancel?: boolean
    handleAcept?: () => void
  }>({
    show: true,
    cancel: true,
    title: '¿Está seguro de calcular nuevamente la exigencia de operacion?',
    message:
      'Si deseas continuar, haz clic en <b>aceptar</b>, de lo contrario puedes cancelar y verificar los datos ingresados.',
    variant: 'warning'
  })

  const [modalContent, setModalContent] = useState<{
    show: boolean
    title: string
    rows: []
  }>({
    show: false,
    title: '',
    rows: []
  })

  const handleClearAlert = () => {
    setAlert({ show: false, title: '', message: '', variant: '' })
  }

  const handleCalculate = async () => {
    try {
      setLoading(true)
      await postManualCalculate(fieldsSelected).then((response) => {
        if (response.responseSuccess) {
          setToast({ show: true, message: response.message })
        } else {
          setModalContent({
            show: true,
            title: response.message,
            rows: response.errors
          })
        }
        GenerateLogs(clientUser || '', {
          actionType: `Valoracion de operaciones`,
          actionDestination: 'Calculo realizado con exito',
          participantId,
          countryId: country.id,
          userNuboId: id,
          statusId: status.id
        })
      })
    } catch (error) {
      GenerateLogs(clientUser || '', {
        actionType: `Valoracion de operaciones`,
        actionDestination: 'Error al hacer el calculo',
        participantId,
        countryId: country.id,
        userNuboId: id,
        statusId: status.id
      })
      setAlert({
        show: true,
        title: 'Error',
        message: 'Error calculando',
        variant: 'error'
      })
      if (isDevMode()) {
        console.error('Error calculando:', error)
      }
    } finally {
      setLoading(false)
      onRefreshTable()
    }
  }

  if (alert.show) {
    return (
      <ModalAlert
        title={alert.title}
        message={alert.message}
        textSuccess={'Aceptar'}
        onClick={
          alert.cancel
            ? () => {
                handleCalculate()
                handleClearAlert()
              }
            : () => {
                handleClearAlert()
              }
        }
        handleCancel={
          alert.cancel
            ? () => {
                handleClearAlert()
                setRequirement(false)
              }
            : undefined
        }
        variant={alert.variant}
        orientation="horizontal"
      />
    )
  }

  if (toast.show) {
    return (
      <AlertMui
        open={toast?.show}
        message={toast?.message}
        onClose={() => setRequirement(false)}
      />
    )
  }

  if (modalContent.show) {
    return (
      <ModalAlert
        title={modalContent.title}
        variant="warning"
        width="90vw"
        padding="16px"
        textSuccess="Volver"
        onClick={() => {
          setModalContent({ show: false, title: '', rows: [] })
          setRequirement(false)
        }}
        buttonsAlign="center"
      >
        <div style={{ maxHeight: '70vh', overflow: 'auto', paddingRight: 8 }}>
          <NewTable
            columns={ColumnsErrorTable()}
            rows={modalContent.rows}
            checkboxSelection={false}
          />
        </div>
      </ModalAlert>
    )
  }

  if (loading) {
    return <Spinner />
  }
}

```

## src/features/view-operations-guarantee/components/TableViewOperationGuarantee.tsx

```tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
import dayjs from 'dayjs'
import { useCallback, useMemo, useState } from 'react'

import {
  ModalAlert,
  NewTable,
  Toast,
  useFilteredEndpoint
} from 'remoteUtilities/components-mf-utilities'

import { ColumnsTableGuaranteeOperation } from '@/features/view-operations-guarantee/constants/columnsTableGuaranteeOperation'
import useGetDataTable from '@/features/view-operations-guarantee/hooks/useGetDataTable'
import { useOnDownload } from '@/features/view-operations-guarantee/hooks/useOnDownload'
import {
  StateTotalTable,
  TableViewOperationGuaranteeProps
} from '@/features/view-operations-guarantee/types/components/TableViewOperationGuarantee'
import { ToastState } from '@/features/view-operations-guarantee/types/components/ToastState'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { ModalAlertState } from '@/shared/types/ModalAlertProps'

import { States } from '../enum/states'
import useCommonParamsFilters from '../hooks/useCommonParamsFilters'
import useGetOptionsTypeAccount from '../hooks/useGetOptionsTypeAccount'
import {
  ContentDataFields,
  DataViewOperationGuarantee
} from '../types/mocks/dataViewOperationGuarantee'
import { RequirementCalculation } from './RequirementCalculation'
import ToolbarGuaranteeOperation from './ToolbarGuaranteeOperation'
import TotalCalculation from './TotalCalculation'

const TableViewOperationGuarantee = ({
  setAlert,
  handleShowBeneficiaries
}: TableViewOperationGuaranteeProps) => {
  const { endpoint } = useFilteredEndpoint(ENDPOINTS.GUARANTEES_FILTER)
  const { getGuaranteeForOperation } = useGetDataTable()
  const [refreshTable, setRefreshTable] = useState(false)
  const [dataTable, setDataTable] = useState<ContentDataFields>([])
  const [totalAmountTable, setTotalAmountTable] = useState<StateTotalTable>()
  const [fieldsSelected, setFieldsSelected] = useState<number[]>([])
  const [toast, setToast] = useState<ToastState | undefined>()
  const [modalAlert, setModalAlert] = useState<ModalAlertState | undefined>()
  const [requirement, setRequirement] = useState<boolean>(false)
  const onRefreshTable = useCallback(() => {
    setRefreshTable((current) => !current)
  }, [])
  const { options } = useGetOptionsTypeAccount()

  const columnsTable = useMemo(
    () =>
      ColumnsTableGuaranteeOperation(
        onRefreshTable,
        setAlert,
        options,
        handleShowBeneficiaries
      ),
    [options, onRefreshTable, setAlert, handleShowBeneficiaries]
  )
  const onDownload = useOnDownload({
    columnsTable,
    getDataTable: getGuaranteeForOperation,
    setAlert,
    setToast
  })
  const TotalCalculationCallback = useCallback(
    () => (
      <TotalCalculation
        total={{
          ...totalAmountTable,
          totalDemand: totalAmountTable?.totalRequirement
        }}
      />
    ),
    [totalAmountTable]
  )

  const isStateUnfulfilled =
    fieldsSelected.length > 0
      ? fieldsSelected.every((field) =>
          dataTable.some((row) => {
            return row.id === field && String(row.status) === States.INCUMPLIDA
          })
        )
      : false
  const setDataRemote = (
    _page: number,
    dataTable: any,
    completeResult: DataViewOperationGuarantee
  ) => {
    const dataTotalMount = {
      totalAmount: completeResult.totalAmount,
      totalCount: completeResult.totalCount,
      totalRequirement: completeResult.totalRequirement
    }
    setDataTable(dataTable)
    setTotalAmountTable(dataTotalMount)
  }
  const extraParams = useCommonParamsFilters()
  const filteredExtra = Object.fromEntries(
    Object.entries(extraParams)
      .filter(([, v]) => v !== undefined)
      .map(([k, v]) => [k, String(v)])
  )
  const newEndpoint = Object.keys(filteredExtra).length
    ? `${endpoint}${endpoint.includes('?') ? '&' : '?'}${new URLSearchParams(filteredExtra).toString()}`
    : endpoint

  const csvFileName = `${dayjs().format('YYYYMMDD')}_operacionesporgarantizar.csv`
  return (
    <>
      <NewTable
        columns={columnsTable}
        customToolbar={
          <ToolbarGuaranteeOperation
            setRequirement={setRequirement}
            fieldsSelected={fieldsSelected}
            isStateUnfulfilled={isStateUnfulfilled}
            setModalAlert={setModalAlert}
            setToast={setToast}
            onRefreshTable={onRefreshTable}
          />
        }
        refresh={refreshTable}
        customFooter={TotalCalculationCallback}
        handleDownload={onDownload}
        csvFileName={csvFileName}
        showDownload
        setThereAreSelected={(newSelection: number[]) => {
          setFieldsSelected(newSelection)
        }}
        endpoint={newEndpoint}
        setDataRemote={setDataRemote}
        axiosInstanceKey="httpGuaranteesForOperations"
      />
      {requirement && (
        <RequirementCalculation
          fieldsSelected={fieldsSelected}
          setRequirement={setRequirement}
          onRefreshTable={onRefreshTable}
        />
      )}
      {modalAlert?.open && <ModalAlert {...modalAlert} />}
      {toast?.open && <Toast {...toast} />}
    </>
  )
}

export default TableViewOperationGuarantee

```

## src/features/view-operations-guarantee/components/ToolbarGuaranteeOperation.tsx

```tsx
import { Button } from '@nuam/common-fe-lib-components'
import { Dispatch, SetStateAction, useMemo } from 'react'

import { useScreenActions } from 'remoteShell/mf-shell-useScreenActions'

import { ToastState } from '@/features/view-operations-guarantee/types/components/ToastState'

import { GUARANTEE_VIEW_OPERATIONS_ACTIONS } from '@/shared/constants/actionCodes'
import { ModalAlertState } from '@/shared/types/ModalAlertProps'

import useOnUnfulfilled from '../hooks/useOnUnfulfilled'

interface Props {
  setRequirement: Dispatch<SetStateAction<boolean>>
  fieldsSelected: number[]
  isStateUnfulfilled?: boolean
  setModalAlert: Dispatch<SetStateAction<ModalAlertState | undefined>>
  setToast: Dispatch<SetStateAction<ToastState | undefined>>
  onRefreshTable: () => void
}

const ToolbarGuaranteeOperation = ({
  setRequirement,
  fieldsSelected,
  isStateUnfulfilled,
  setModalAlert,
  setToast,
  onRefreshTable
}: Props) => {
  const { onUnfulfilled } = useOnUnfulfilled({
    setModalAlert,
    fieldsSelected,
    setToast,
    onRefreshTable
  })
  const { hasAction } = useScreenActions()
  const { canEvaluateTransaction, canResolveNoncompliance } = useMemo(
    () => ({
      canEvaluateTransaction: hasAction(
        GUARANTEE_VIEW_OPERATIONS_ACTIONS.EVALUATE_TRANSACTION
      ),
      canResolveNoncompliance: hasAction(
        GUARANTEE_VIEW_OPERATIONS_ACTIONS.RESOLVE_NONCOMPLIANCE
      )
    }),
    [hasAction]
  )
  return (
    <div className="mx-1 flex gap-2">
      {!canResolveNoncompliance && (
        <Button
          variant="text"
          className="text-13px font-medium"
          disabled={!isStateUnfulfilled}
          onClick={onUnfulfilled}
        >
          resolver incumplimiento
        </Button>
      )}
      {!canEvaluateTransaction && (
        <Button
          disabled={fieldsSelected.length === 0}
          variant="text"
          className={`text-13px`}
          onClick={() => setRequirement(true)}
        >
          Valoración de operaciones
        </Button>
      )}
    </div>
  )
}

export default ToolbarGuaranteeOperation

```

## src/features/view-operations-guarantee/components/TotalCalculation.tsx

```tsx
import { Typography } from '@nuam/common-fe-lib-components'

import { TotalCalculationInterface } from '@/features/view-operations-guarantee/types/components/totalCalculation'

const TotalCalculation = (props: TotalCalculationInterface) => {
  const total = props?.total
  return (
    <div className="bg-[#F4F4F4] p-2">
      <div className="flex w-full items-center justify-center gap-8 border-b border-black py-5">
        <div className="flex gap-8">
          <Typography className="text-text text-center text-base font-medium">
            Cantidad Total:
          </Typography>
          <Typography className="text-text text-center text-base font-medium">
            {total?.totalCount ?? 0}
          </Typography>
        </div>
        <div className="flex gap-8">
          <Typography className="text-text text-center text-base font-medium">
            Monto Total:
          </Typography>
          <Typography className="text-text text-center text-base font-medium">
            {total?.totalAmount?.toLocaleString('es-ES', {
              minimumFractionDigits: 4
            }) ?? 0}
          </Typography>
        </div>
        <div className="flex gap-8">
          <Typography className="text-text text-center text-base font-medium">
            Exigencia total de garantías:
          </Typography>
          <Typography className="text-text text-center text-base font-medium">
            {total?.totalDemand?.toLocaleString('es-ES', {
              minimumFractionDigits: 4
            }) ?? 0}
          </Typography>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default TotalCalculation

```

## src/features/view-operations-guarantee/constants/FieldsTable.ts

```typescript
export const fieldsTable = {
  dateRegister: 'lastModifyDate',
  folio: 'trade',
  typeAccount: 'guaranteeAccountType',
  accountGuarantee: 'guaranteeAccount',
  status: 'status',
  repique: 'reopening',
  punta: 'punta',
  participant: 'participant',
  custodian: 'custodian',
  fund: 'afpFund',
  noBeneficiary: 'investor.investor',
  beneficiary: 'investor.investorAccount',
  mnemonic: 'mnemonic',
  isin: 'isinNumber',
  quantity: 'assignedQuantity',
  price: 'riskModelPrice',
  riskPercentage: 'riskModelPercentage',
  amount: 'assignedAmount',
  requirementAmount: 'requirementAmount'
}

```

## src/features/view-operations-guarantee/constants/columnsBeneficiaries.ts

```typescript
import { formatNumber } from '@/shared/utils/formatNumber'

import { BeneficiariesTable } from '../types/contants/ColumnsBeneficiaries'

interface Row {
  row: BeneficiariesTable
}
export const ColumnsBeneficiaries = () => {
  return [
    {
      width: 100,
      field: 'custodianCode',
      headerName: 'Custodio',
      renderCell: ({ row }: Row) => row?.custodian.code
    },
    {
      width: 100,
      field: 'investorIdentificationTypeCode',
      headerName: 'Tipo ID',
      renderCell: ({ row }: Row) => row?.investor.identificationType.code
    },
    {
      width: 150,
      field: 'investorDocumentNumber',
      headerName: 'Identificación',
      renderCell: ({ row }: Row) => row?.investor.documentNumber
    },
    {
      width: 180,
      field: 'investorInvestorName',
      headerName: 'Beneficiario',
      renderCell: ({ row }: Row) => row?.investor.investorName
    },
    {
      width: 180,
      field: 'guaranteeAccountTypeDetail',
      headerName: 'Tipo de cuenta',
      renderCell: ({ row }: Row) => row?.guaranteeAccountType.detail
    },
    {
      width: 180,
      field: 'guaranteeAccount',
      headerName: 'Cuenta Garantía',
      renderCell: ({ row }: Row) =>
        row?.guaranteeGlobalAccount?.accountCode ||
        row?.guaranteeParticularAccount?.accountParticularCode
    },
    {
      width: 100,
      field: 'reopening',
      headerName: 'Repique',
      renderCell: ({ row }: Row) => (row?.reopening ? 'Sí' : 'No')
    },
    {
      width: 150,
      field: 'assignedQuantity',
      headerName: 'Cantidad',
      align: 'right',
      renderCell: ({ row }: Row) =>
        row?.assignedQuantity != null
          ? formatNumber(row?.assignedQuantity)
          : '-'
    },
    {
      width: 150,
      field: 'riskModelPrice',
      headerName: 'Precio',
      align: 'right',
      renderCell: ({ row }: Row) =>
        row?.riskModelPrice != null ? formatNumber(row?.riskModelPrice) : '-'
    },
    {
      width: 100,
      field: 'riskModelPercentage',
      headerName: '% de Riesgo'
    },
    {
      width: 150,
      field: 'requirementAmount',
      headerName: 'Exigencia de Garantía'
    },
    {
      width: 120,
      field: 'statusShortName',
      headerName: 'Estado',
      renderCell: ({ row }: Row) => row?.status.shortName
    }
  ]
}

```

## src/features/view-operations-guarantee/constants/columnsTableGuaranteeOperation.tsx

```tsx
import { DefaultComponents, Link } from '@nuam/common-fe-lib-components'
import dayjs from 'dayjs'

import ChangeTypeAccount from '@/features/view-operations-guarantee/components/ChangeTypeAccount'
import { FuncColumnsOperation } from '@/features/view-operations-guarantee/types/contants/ColumnsTableGuaranteeOperation'
import { ContentDataField } from '@/features/view-operations-guarantee/types/mocks/dataViewOperationGuarantee'

import { formatNumber } from '@/shared/utils/formatNumber'

interface Row {
  row: ContentDataField
}
export const ColumnsTableGuaranteeOperation: FuncColumnsOperation = (
  onRefreshTable,
  setAlert,
  options,
  handleShowBeneficiaries
) => [
  {
    headerName: 'Fecha de registro',
    field: 'tradeMatchDate',
    sortable: false,
    flex: 1,
    minWidth: 132,
    renderCell: ({ row }: Row) =>
      row?.trade?.matchDate
        ? dayjs(row.trade.matchDate).format('DD/MM/YYYY')
        : '-'
  },
  {
    headerName: 'Número de folio',
    field: 'tradeFolio',
    sortable: false,
    flex: 1,
    minWidth: 123,
    align: 'right',
    renderCell: ({ row }: Row) =>
      row?.trade?.folio != null
        ? formatNumber(row?.trade?.folio, { minimumFractionDigits: 0 })
        : '-'
  },
  {
    headerName: 'Tipo de cuenta',
    field: 'guaranteeAccountTypeDetail',
    sortable: false,
    renderCell: ({ row }: Row) => (
      <div className="flex h-full w-full items-center justify-center">
        <ChangeTypeAccount
          onRefreshTable={onRefreshTable}
          setAlert={setAlert}
          typeAccountDefault={row?.guaranteeAccountType?.description}
          tradeId={row?.id}
          options={options}
          statusDescription={row?.status?.description}
        />
      </div>
    ),
    flex: 1,
    minWidth: 170
  },
  {
    headerName: 'Cuenta garantía',
    field: 'guaranteeAccount',
    sortable: false,
    flex: 1,
    minWidth: 139,
    renderCell: ({ row }: Row) =>
      row?.guaranteeParticularAccount?.accountParticularCode ??
      row?.guaranteeGlobalAccount?.accountCode ??
      '-'
  },
  {
    headerName: 'Estado',
    field: 'statusShortName',
    sortable: false,
    flex: 1,
    minWidth: 115,
    renderCell: ({ row }: Row) => row?.status?.shortName ?? '-'
  },
  {
    headerName: 'Repique',
    field: 'reopening',
    sortable: false,
    flex: 1,
    minWidth: 115,
    renderCell: ({ row }: Row) =>
      row?.reopening ? 'Sí' : row?.showInvestors ? '-' : 'No'
  },
  {
    headerName: 'Punta',
    field: 'sideDescription',
    sortable: false,
    flex: 1,
    minWidth: 73,
    renderCell: ({ row }: Row) => row?.side?.description ?? '-'
  },
  {
    headerName: 'Tipo de operación',
    field: 'tradeTypeDescription',
    sortable: false,
    flex: 1,
    minWidth: 73,
    renderCell: ({ row }: Row) => row?.trade?.type?.description ?? '-'
  },
  {
    headerName: 'Moneda',
    field: 'tradeCurrencyCode',
    sortable: false,
    flex: 1,
    minWidth: 99,
    renderCell: ({ row }: Row) => row?.trade?.currency?.code ?? '-'
  },
  {
    headerName: 'Participante',
    field: 'participantCode',
    sortable: false,
    flex: 1,
    minWidth: 99,
    renderCell: ({ row }: Row) => row?.participant?.code ?? '-'
  },
  {
    headerName: 'Custodio',
    field: 'custodianCode',
    sortable: false,
    flex: 1,
    minWidth: 99,
    renderCell: ({ row }: Row) => row?.custodian?.code ?? '-'
  },
  {
    headerName: 'Fondo',
    field: 'afpFundCode',
    sortable: false,
    flex: 1,
    minWidth: 85,
    renderCell: ({ row }: Row) => row?.afpFund?.afpFundCode ?? 'N/A'
  },
  {
    headerName: 'Beneficiario',
    field: 'investorInvestorName',
    sortable: false,
    flex: 1,
    minWidth: 221,
    renderCell: ({ row }: Row) =>
      row?.showInvestors ? (
        <Link
          component="button"
          variant="body2"
          onClick={() =>
            handleShowBeneficiaries(row?.trade?.tradeId, row?.side?.id, {
              matchDate: row?.trade?.matchDate,
              folio: row?.trade?.folio,
              sideDescription: row?.side?.description,
              participantCode: row?.participant?.code
            })
          }
          underline="hover"
        >
          Ver beneficiarios
        </Link>
      ) : (
        (row?.investor?.documentNumber ?? '-') +
        ' - ' +
        (row?.investor?.investorName ?? '-')
      )
  },
  {
    headerName: 'Nemo',
    field: 'securityTitleMnemonic',
    sortable: false,
    flex: 1,
    minWidth: 106,
    renderCell: ({ row }: Row) => row?.securityTitle?.mnemonic ?? '-'
  },
  {
    headerName: 'ISIN',
    field: 'isinIsinNumber',
    sortable: false,
    flex: 1,
    minWidth: 99,
    renderCell: ({ row }: Row) => row?.isin?.isinNumber ?? '-'
  },
  {
    field: 'tradeMatchDates',
    flex: 1,
    minWidth: 99,
    renderHeader: () => (
      <DefaultComponents.Tooltip title="Fecha cumplimento salida">
        <span className="font-medium">Fecha CS</span>
      </DefaultComponents.Tooltip>
    ),
    renderCell: ({ row }: Row) =>
      row?.trade?.matchDate
        ? new Date(row?.trade?.matchDate).toLocaleDateString('es-PE')
        : '-'
  },
  {
    field: 'tradeClearingDate',
    flex: 1,
    minWidth: 99,
    renderHeader: () => (
      <DefaultComponents.Tooltip title="Fecha cumplimiento regreso">
        <span className="font-medium">Fecha CR</span>
      </DefaultComponents.Tooltip>
    ),
    renderCell: ({ row }: Row) =>
      row?.trade?.clearingDate
        ? new Date(row?.trade?.clearingDate).toLocaleDateString('es-PE')
        : '-'
  },
  {
    headerName: 'Cantidad',
    field: 'assignedQuantity',
    sortable: false,
    flex: 1,
    minWidth: 78,
    align: 'right',
    renderCell: ({ row }: Row) =>
      row?.assignedQuantity != null
        ? formatNumber(row?.assignedQuantity, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          })
        : '-'
  },
  {
    headerName: 'Precio',
    field: 'riskModelPrice',
    sortable: false,
    flex: 1,
    minWidth: 87,
    align: 'right',
    renderCell: ({ row }: Row) =>
      row?.riskModelPrice != null ? formatNumber(row?.riskModelPrice) : '-'
  },
  {
    headerName: '% Riesgo',
    field: 'riskModelPercentage',
    sortable: false,
    flex: 1,
    minWidth: 78,
    align: 'right',
    renderCell: ({ row }: Row) =>
      row?.riskModelPercentage != null
        ? formatNumber(row?.riskModelPercentage)
        : '-'
  },
  {
    headerName: 'Monto operación',
    field: 'assignedAmount',
    sortable: false,
    flex: 1,
    minWidth: 129,
    align: 'right',
    renderCell: ({ row }: Row) =>
      row?.assignedAmount != null ? formatNumber(row?.assignedAmount) : '-'
  },
  {
    headerName: 'Exigencia garantía',
    field: 'requirementAmount',
    sortable: false,
    flex: 1,
    minWidth: 138,
    align: 'right',
    renderCell: ({ row }: Row) =>
      row?.requirementAmount != null
        ? formatNumber(row?.requirementAmount)
        : '-'
  }
]

```

## src/features/view-operations-guarantee/constants/commonStylesAutoComplete.ts

```typescript
export const commonStylesAutoComplete = {
  height: 40,
  sx: {
    minWidth: '176px',
    width: '100%',
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: 'var(--mui-palette-primary-main)'
      }
    },
    '& .MuiInputLabel-root': {
      display: 'flex',
      alignItems: 'center',
      transform: 'translate(44px, 36%)',
      '&.Mui-focused': {
        color: 'var(--mui-palette-primary-main)'
      },
      '&.MuiInputLabel-shrink': {
        transform: 'translate(12px, -10px) scale(0.75)'
      }
    }
  }
}

```

## src/features/view-operations-guarantee/constants/links.ts

```typescript
import { ROUTES, SUBROUTES } from '@/shared/routes'

export const links = [
  {
    name: 'Modulo de Garantias',
    path: `/${ROUTES.GUARANTEES_MANAGEMENT}`
  },
  {
    name: 'Operaciones por garantizar',
    path: `${SUBROUTES.VIEW_OPERATIONS_GUARANTEES}`
  }
]

```

## src/features/view-operations-guarantee/enum/states.ts

```typescript
export enum States {
  INCUMPLIDA = 'INCUMPLIDA'
}

```

## src/features/view-operations-guarantee/enum/typeAccounts.ts

```typescript
export enum TypeAccount {
  GENERAL = 'CUENTA GENERAL',
  ESPECIFICA = 'CUENTA ESPECIFICA'
}

```

## src/features/view-operations-guarantee/hooks/useCommonParamsFilters.ts

```typescript
import { useMemo } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'remoteShell/mf-store'

import { USER_TYPE } from '@/shared/constants/userType'

const useCommonParamsFilters = () => {
  const { participantIsCustodian, userType, participantId } = useSelector(
    (state: RootState) => state.auth.infoUserNubo
  )

  return useMemo(() => {
    if (userType === USER_TYPE.INTERNAL) {
      return {}
    }

    return {
      custodian: participantIsCustodian ? participantId : undefined,
      participant: !participantIsCustodian ? participantId : undefined
    }
  }, [participantIsCustodian, participantId, userType])
}

export default useCommonParamsFilters

```

## src/features/view-operations-guarantee/hooks/useGetCustodianOptions.ts

```typescript
import { useCallback } from 'react'

import { transformOptionsAutoComplete } from '@/shared/utils/transformOptionsAutoComplete'

import { getCustodiesFilter } from '../services/getCustodiesService'
import { ReturnOptionsAutoComplete } from '../types/common'
import { OptionCustodian } from '../types/services/getCustodianFilters'
import useCommonParamsFilters from './useCommonParamsFilters'

const useGetCustodianOptions = () => {
  const commonParams = useCommonParamsFilters()

  const getOptionsCustodian = useCallback(
    async (
      searchText: string,
      page: number,
      limit: number
    ): ReturnOptionsAutoComplete => {
      const resData = await getCustodiesFilter({
        ...commonParams,
        custodianSearch: searchText,
        page,
        size: limit
      })
      const options = transformOptionsAutoComplete<OptionCustodian>(
        resData,
        (i) => ({ id: i.custodianId, label: `${i.code} - ${i.name}` })
      )
      return options
    },
    [commonParams]
  )
  return { getOptionsCustodian }
}

export default useGetCustodianOptions

```

## src/features/view-operations-guarantee/hooks/useGetDataTable.ts

```typescript
import dayjs from 'dayjs'
import { useSelector } from 'react-redux'

import { RootState } from 'remoteShell/mf-store'

import { getDataGuaranteeForOperations } from '@/features/view-operations-guarantee/services/getDataGuaranteeForParticipant'

import { USER_TYPE } from '@/shared/constants/userType'

const useGetDataTable = () => {
  const { participantIsCustodian, userType, participantId } = useSelector(
    (state: RootState) => state.auth.infoUserNubo
  )
  const params = new URLSearchParams(window.location.search)
  const queryObject = Object.fromEntries(params.entries())
  const getGuaranteeForOperation = async (size?: number) => {
    const formattedDate = queryObject?.registrationDate
      ? dayjs(queryObject?.registrationDate).format('YYYY-MM-DD')
      : undefined
    const folio = queryObject?.folio
    const investor = queryObject?.investor
    const isin = queryObject?.isinNumberId
    const statusId = queryObject?.statusId
    const mnemonic = queryObject?.mnemonic
    const custodian = queryObject?.custodian
    const commonFilters = {
      folio: folio ? +folio : undefined,
      accountCode: queryObject?.accountCode,
      investor: investor ? +investor : undefined,
      isinNumberId: isin ? +isin : undefined,
      mnemonic: mnemonic ? +mnemonic : undefined,
      registrationDate: formattedDate,
      statusId: statusId ? +statusId : undefined
    }
    const filters = {
      [USER_TYPE.EXTERNAL]: {
        participant: !participantIsCustodian
          ? participantId
          : queryObject?.registrationDate,
        custodian: participantIsCustodian ? participantId : custodian,
        ...commonFilters
      },
      [USER_TYPE.INTERNAL]: {
        custodian,
        participant: queryObject?.participant,
        ...commonFilters
      }
    }
    const dataTable = await getDataGuaranteeForOperations({
      ...filters[userType as keyof typeof filters],
      size
    })
    return dataTable
  }

  return { getGuaranteeForOperation }
}

export default useGetDataTable

```

## src/features/view-operations-guarantee/hooks/useGetFolio.ts

```typescript
import { useCallback } from 'react'

import { transformOptionsAutoComplete } from '@/shared/utils/transformOptionsAutoComplete'

import { getFolioFilter } from '../services/getFolioService'
import { ReturnOptionsAutoComplete } from '../types/common'
import { FolioOption } from '../types/services/getFolio'
import useCommonParamsFilters from './useCommonParamsFilters'

const useGetFolio = () => {
  const commonParams = useCommonParamsFilters()

  const getOptionsFolio = useCallback(
    async (
      searchText: string,
      page: number,
      limit: number
    ): ReturnOptionsAutoComplete => {
      const resData = await getFolioFilter({
        matchId: searchText,
        ...commonParams,
        page,
        size: limit
      })
      const transformData = transformOptionsAutoComplete<FolioOption>(
        resData,
        (i) => ({ id: i.tradeId, label: i.folio })
      )
      return transformData
    },
    [commonParams]
  )
  return { getOptionsFolio }
}

export default useGetFolio

```

## src/features/view-operations-guarantee/hooks/useGetGuaranteeAccounts.ts

```typescript
import { useCallback } from 'react'

import { getAccountsGuaranteeFilter } from '../services/getAccountGuarantee'
import useCommonParamsFilters from './useCommonParamsFilters'

const useGetGuaranteeAccounts = () => {
  const commonParams = useCommonParamsFilters()

  const getOptionsAccountGuarantee = useCallback(async () => {
    const dataServiceAccount = await getAccountsGuaranteeFilter(commonParams)
    const data = dataServiceAccount.content.map((option) => {
      const name = option?.accountParticularCode ?? option?.accountCode
      return {
        ...option,
        label: name,
        name: name,
        id: name
      }
    })

    return data
  }, [commonParams])
  return {
    getOptionsAccountGuarantee
  }
}

export default useGetGuaranteeAccounts

```

## src/features/view-operations-guarantee/hooks/useGetOptionsIsin.ts

```typescript
import { useCallback } from 'react'

import { transformOptionsAutoComplete } from '@/shared/utils/transformOptionsAutoComplete'

import { getIsinFilter } from '../services/getIsinService'
import { ReturnOptionsAutoComplete } from '../types/common'
import { IsinOption } from '../types/services/getIsinFilter'
import useCommonParamsFilters from './useCommonParamsFilters'

const useGetOptionsIsin = () => {
  const commonParams = useCommonParamsFilters()
  const getOptionsIsin = useCallback(
    async (
      searchText: string,
      page: number,
      limit: number
    ): ReturnOptionsAutoComplete => {
      const resData = await getIsinFilter({
        ...commonParams,
        isinNumber: searchText,
        page,
        size: limit
      })
      const options = transformOptionsAutoComplete<IsinOption>(
        resData,
        (i) => ({ id: i.isinNumberId, label: i.isinNumber })
      )
      return options
    },
    [commonParams]
  )
  return { getOptionsIsin }
}

export default useGetOptionsIsin

```

## src/features/view-operations-guarantee/hooks/useGetOptionsMnemonic.ts

```typescript
import { useCallback } from 'react'

import { transformOptionsAutoComplete } from '@/shared/utils/transformOptionsAutoComplete'

import { getMnemonicFilter } from '../services/getMnemonicService'
import { ReturnOptionsAutoComplete } from '../types/common'
import { OptionMnemonic } from '../types/services/getMnemonicFilter'
import useCommonParamsFilters from './useCommonParamsFilters'

const useGetOptionsMnemonic = () => {
  const commonParams = useCommonParamsFilters()
  const getOptionsMnemonic = useCallback(
    async (
      searchText: string,
      page: number,
      limit: number
    ): ReturnOptionsAutoComplete => {
      const resData = await getMnemonicFilter({
        ...commonParams,
        mnemonic: searchText,
        page,
        size: limit
      })
      const options = transformOptionsAutoComplete<OptionMnemonic>(
        resData,
        (i) => ({ id: i.securityTitleId, label: i.mnemonic })
      )
      return options
    },
    [commonParams]
  )
  return { getOptionsMnemonic }
}

export default useGetOptionsMnemonic

```

## src/features/view-operations-guarantee/hooks/useGetOptionsState.ts

```typescript
import { useState } from 'react'

import { getStatusFilter } from '@/features/view-operations-guarantee/services/getFilterStatus'
import { OptionStatus } from '@/features/view-operations-guarantee/types/services/getFilterStatus'

const useGetOptionsState = () => {
  const [options, setOptions] = useState<OptionStatus[]>([])
  const getOptionsStatus = async () => {
    const resOptions = await getStatusFilter()
    const transform = resOptions.map((option) => ({
      id: option.id,
      name: option.description,
      label: option.description
    }))
    setOptions(resOptions)
    return transform
  }
  return { options, setOptions, getOptionsStatus }
}

export default useGetOptionsState

```

## src/features/view-operations-guarantee/hooks/useGetOptionsTypeAccount.ts

```typescript
import { useEffect, useState } from 'react'

import { getTypeAccount } from '@/features/view-operations-guarantee/services/getTypeAccounts'
import { OptionStatus } from '@/features/view-operations-guarantee/types/services/getFilterStatus'

const useGetOptionsTypeAccount = () => {
  const [options, setOptions] = useState<OptionStatus[]>([])
  const getOptionsStatus = async () => {
    const resOptions = await getTypeAccount()
    setOptions(resOptions)
  }
  useEffect(() => {
    getOptionsStatus()
  }, [])
  return { options, setOptions }
}

export default useGetOptionsTypeAccount

```

## src/features/view-operations-guarantee/hooks/useGetParticipantsOptions.ts

```typescript
import { useCallback } from 'react'

import { transformOptionsAutoComplete } from '@/shared/utils/transformOptionsAutoComplete'

import { getParticipantFilter } from '../services/getParticipantService'
import { ReturnOptionsAutoComplete } from '../types/common'
import { ParticipantOption } from '../types/services/getParticipantFilters'
import useCommonParamsFilters from './useCommonParamsFilters'

const useGetParticipantsOptions = () => {
  const commonParams = useCommonParamsFilters()

  const getOptionsParticipants = useCallback(
    async (
      searchText: string,
      page: number,
      limit: number
    ): ReturnOptionsAutoComplete => {
      const resData = await getParticipantFilter({
        ...commonParams,
        participantSearch: searchText,
        page,
        size: limit
      })
      const options = transformOptionsAutoComplete<ParticipantOption>(
        resData,
        (i) => ({ id: i.participantId, label: `${i.code} - ${i.name}` })
      )
      return options
    },
    [commonParams]
  )
  return { getOptionsParticipants }
}

export default useGetParticipantsOptions

```

## src/features/view-operations-guarantee/hooks/useGetoptionsBeneficiary.ts

```typescript
import { useCallback } from 'react'

import { transformOptionsAutoComplete } from '@/shared/utils/transformOptionsAutoComplete'

import { getBeneficiaryFilter } from '../services/getBeneficiaryService'
import { ReturnOptionsAutoComplete } from '../types/common'
import {
  BeneficiaryParams,
  OptionInvestor
} from '../types/services/getBeneficiaryService'
import useCommonParamsFilters from './useCommonParamsFilters'

const useGetOptionsBeneficiary = () => {
  const commonParams = useCommonParamsFilters()

  const getOptionsBeneficiary = useCallback(
    async (
      searchText: string,
      page: number,
      limit: number
    ): ReturnOptionsAutoComplete => {
      const validateNumber = /^\d+$/.test(searchText)
      const paramsFiltersBeneficiary: BeneficiaryParams = {
        ...commonParams,
        page,
        size: limit,
        documentNumber: undefined,
        investorName: undefined
      }
      if (validateNumber) {
        paramsFiltersBeneficiary.documentNumber = searchText
      } else {
        paramsFiltersBeneficiary.investorName = searchText
      }
      const resData = await getBeneficiaryFilter(paramsFiltersBeneficiary)
      const transformData = transformOptionsAutoComplete<OptionInvestor>(
        resData,
        (i) => ({
          id: i.investorId,
          label: `${i.documentNumber} - ${i.investorName}`
        })
      )
      return transformData
    },
    [commonParams]
  )
  return { getOptionsBeneficiary }
}

export default useGetOptionsBeneficiary

```

## src/features/view-operations-guarantee/hooks/useOnDownload.tsx

```tsx
import dayjs from 'dayjs'
import { Dispatch, SetStateAction } from 'react'

import { ERROR_MESSAGES } from '@/features/account-management/constants/errors'
import { DispatchAlertProps } from '@/features/view-operations-guarantee/types/components/DispatchSetAlert'
import { ToastState } from '@/features/view-operations-guarantee/types/components/ToastState'
import { ColumnTable } from '@/features/view-operations-guarantee/types/contants/ColumnsTableGuaranteeOperation'
import { DataViewOperationGuarantee } from '@/features/view-operations-guarantee/types/mocks/dataViewOperationGuarantee'
import { generateCSVOperationGuarantee } from '@/features/view-operations-guarantee/utils/generateCSV'

interface Props extends DispatchAlertProps {
  setToast: Dispatch<SetStateAction<ToastState | undefined>>
  getDataTable: (size?: number) => Promise<DataViewOperationGuarantee>
  columnsTable: ColumnTable[]
}

export const useOnDownload = ({
  setToast,
  setAlert,
  getDataTable,
  columnsTable
}: Props) => {
  const onDownload = async () => {
    setToast({
      open: true,
      text: 'El documento esta listo, en breve comenzara la descarga.',
      onClose: () => {},
      variant: 'success',
      width: '424px',
      onClickActionBtn() {
        setToast(undefined)
      }
    })
    const currentDate = dayjs().format('YYYYMMDD')
    try {
      const data = await getDataTable()
      await generateCSVOperationGuarantee({
        data: data.content,
        name: `${currentDate}_operacionesporgarantizar`,
        headersTable: columnsTable
      })
    } catch (error: any) {
      const errorResponse = error?.response?.data

      setToast(undefined)
      setAlert({
        open: true,
        title: 'Ocurrió un error inesperado',
        variant: 'error',
        message: errorResponse?.errorMessageDetail ?? ERROR_MESSAGES.TRY_AGAIN,
        textSuccess: 'VOLVER',
        onClick: () => {
          setAlert(undefined)
        },
        showIconClose: true,
        onIconClose: () => {
          setAlert(undefined)
        }
      })
    }
  }
  return onDownload
}

```

## src/features/view-operations-guarantee/hooks/useOnUnfulfilled.ts

```typescript
import { Dispatch, SetStateAction } from 'react'

import { ToastState } from '@/features/view-operations-guarantee/types/components/ToastState'

import useGenerateLogs from '@/shared/hooks/useGenerateLogs'
import { ModalAlertState } from '@/shared/types/ModalAlertProps'

import resolveUnfulfilled from '../services/resolveUnfulfilled'

const useOnUnfulfilled = ({
  fieldsSelected,
  setModalAlert,
  setToast,
  onRefreshTable
}: {
  fieldsSelected: number[]
  setModalAlert: Dispatch<SetStateAction<ModalAlertState | undefined>>
  setToast: Dispatch<SetStateAction<ToastState | undefined>>
  onRefreshTable: () => void
}) => {
  const { dispatchGenerateLog } = useGenerateLogs()
  const onUnfulfilled = async () => {
    setModalAlert({
      title: '¡Importante!',
      message: '¿Estás seguro de resolver el procedimiento de incumplimiento?',
      variant: 'warning',
      textCancel: 'cancelar',
      textSuccess: 'Aprobar',
      orientation: 'horizontal',
      onClick: async () => {
        try {
          await resolveUnfulfilled(fieldsSelected)
          onRefreshTable()
          setModalAlert(undefined)
          setToast({
            open: true,
            variant: 'success',
            text: 'Se registró exitosamente la resolución de incumplimiento.',
            onClose: () => {
              setToast(undefined)
            },
            duration: 1700
          })
          await dispatchGenerateLog({
            actionType: 'Resolución de Incumplimiento',
            actionDestination: 'Resolución de incumplimiento satisfactoria'
          })
          // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
        } catch (_error: any) {
          setModalAlert({
            title: 'Ocurrió un error inesperado',
            message:
              'Vuelve a intentarlo, si el error persiste comunícate a xxxxxx@nuamx.com o 55555555',
            variant: 'error',
            textSuccess: 'Volver',
            onClick: () => setModalAlert(undefined),
            open: true
          })
          await dispatchGenerateLog({
            actionType: 'Resolución de Incumplimiento',
            actionDestination: 'Error al resolver incumplimiento'
          })
        }
      },
      handleCancel() {
        setModalAlert(undefined)
      },
      open: true
    })
  }
  return { onUnfulfilled }
}

export default useOnUnfulfilled

```

## src/features/view-operations-guarantee/hooks/useRenderFiltersForUser.ts

```typescript
import { useSelector } from 'react-redux'

import { RootState } from 'remoteShell/mf-store'
import { FilterRendererProps } from 'remoteUtilities/components-mf-utilities'

import { USER_TYPE } from '@/shared/constants/userType'
import { useTranslate } from '@/shared/hooks/useTranslate'
import { UserType } from '@/shared/types/user-type'

import useGetCustodianOptions from './useGetCustodianOptions'
import useGetParticipantsOptions from './useGetParticipantsOptions'

const useRenderFiltersForUser = () => {
  const trans = useTranslate('viewOperationGuarantee.filters')
  const { getOptionsParticipants } = useGetParticipantsOptions()
  const { getOptionsCustodian } = useGetCustodianOptions()
  const { INTERNAL, PARTICIPANTE } = USER_TYPE
  const { userType, participantIsCustodian } = useSelector(
    (state: RootState) => state.auth.infoUserNubo
  )

  const renderParticipant: FilterRendererProps = {
    label: trans('participant'),
    type: 'autocomplete',
    name: 'participant',
    fetchOptions: getOptionsParticipants
  }
  const renderCustody: FilterRendererProps = {
    label: trans('custody'),
    type: 'autocomplete',
    name: 'custodian',
    fetchOptions: getOptionsCustodian
  }

  const typeUser = userType as UserType
  const filtersForUser = {
    [INTERNAL]: [renderParticipant, renderCustody],

    [PARTICIPANTE]: participantIsCustodian
      ? [renderParticipant]
      : [renderCustody]
  }
  const viewFilterForUser = filtersForUser?.[typeUser] ?? []
  return { viewFilterForUser }
}

export default useRenderFiltersForUser

```

## src/features/view-operations-guarantee/hooks/useShowModalAlertTime.tsx

```tsx
import { Dispatch, SetStateAction, useEffect, useId } from 'react'

import { ModalAlertState } from '@/features/view-operations-guarantee/types/components/AlertState'

const useShowModalAlertTime = ({
  alert,
  setAlert
}: {
  setAlert: Dispatch<SetStateAction<ModalAlertState | undefined>>
  alert?: ModalAlertState
}) => {
  const idAlert = useId()
  useEffect(() => {
    const alertTimes = [
      { hour: 16, minute: 0 },
      { hour: 18, minute: 0 }
    ]
    const timeouts: NodeJS.Timeout[] = []

    const getNextExecutionTime = (hour: number, minute: number) => {
      const now = new Date()
      const target = new Date(now)
      target.setHours(hour, minute, 0, 0)

      if (target.getTime() <= now.getTime()) {
        target.setDate(target.getDate() + 1)
      }

      return target.getTime() - now.getTime()
    }

    const showAlert = () => {
      setAlert({
        open: true,
        title: '¡Importante!',
        message: 'Tienes operaciones pendientes por garantizar.',
        variant: 'warning',
        textSuccess: 'Continuar',
        onClick: () => setAlert(undefined),
        onKeyDown(e) {
          if (e.key === 'Escape') {
            setAlert(undefined)
          }
        },
        idAlert,
        showIconClose: true,
        onIconClose() {
          setAlert(undefined)
        }
      })
    }

    alertTimes.forEach(({ hour, minute }) => {
      const delay = getNextExecutionTime(hour, minute)

      const timeout = setTimeout(() => {
        showAlert()
        const nextTimeout = setTimeout(showAlert, 24 * 60 * 60 * 1000)
        timeouts.push(nextTimeout)
      }, delay)

      timeouts.push(timeout)
    })

    return () => {
      timeouts.forEach(clearTimeout)
    }
  }, [setAlert])
  useEffect(() => {
    if (idAlert === alert?.idAlert) {
      window.addEventListener('keydown', (e) => {
        if (alert?.onKeyDown) {
          alert.onKeyDown(e)
        }
      })
    }
  }, [alert?.open, alert?.idAlert])
}

export default useShowModalAlertTime

```

## src/features/view-operations-guarantee/pages/ViewOperationsGuarantee.tsx

```tsx
import { useState } from 'react'

import {
  ContentWrapper,
  ModalAlert
} from 'remoteUtilities/components-mf-utilities'

import TableViewOperationGuarantee from '@/features/view-operations-guarantee/components/TableViewOperationGuarantee'
import { links } from '@/features/view-operations-guarantee/constants/links'
import useShowModalAlertTime from '@/features/view-operations-guarantee/hooks/useShowModalAlertTime'
import { ModalAlertState } from '@/features/view-operations-guarantee/types/components/AlertState'
import { FiltersSearchOperationsGuarantee } from '@/features/view-operations-guarantee/types/components/ViewOperationsGuarantee'

import { BeneficiariesModal } from '../components/BeneficiariesModalContent'
import FiltersSearchTable from '../components/FiltersSearchTable'
import { BeneficiaryHeaderData } from '../types/contants/ColumnsTableGuaranteeOperation'

const ViewOperationsGuarantee = () => {
  const [filtersVisualization] = useState<FiltersSearchOperationsGuarantee>()
  const [openBeneficiariesModal, setOpenBeneficiariesModal] = useState(false)
  const [beneficiariesParams, setBeneficiariesParams] = useState<{
    tradeId?: number
    sideId?: string
    folio?: number
    matchDate?: Date
    participantCode?: string
    sideDescription?: string
  }>({})

  const [alert, setAlert] = useState<ModalAlertState>()
  useShowModalAlertTime({ alert, setAlert })

  const handleShowBeneficiaries = (
    tradeId: number,
    sideId: string,
    data: BeneficiaryHeaderData
  ) => {
    setBeneficiariesParams({ tradeId, sideId, ...data })
    setOpenBeneficiariesModal(true)
  }

  const handleCloseBeneficiaries = () => {
    setOpenBeneficiariesModal(false)
  }

  return (
    <ContentWrapper
      title="Visualización de Operaciones para Garantía"
      links={links}
    >
      <div className="flex flex-1 flex-col">
        <FiltersSearchTable />
        <TableViewOperationGuarantee
          filtersVisualization={filtersVisualization}
          setAlert={setAlert}
          handleShowBeneficiaries={handleShowBeneficiaries}
        />
      </div>
      <BeneficiariesModal
        open={openBeneficiariesModal}
        onClose={handleCloseBeneficiaries}
        beneficiariesParams={beneficiariesParams}
      />
      {alert?.open && <ModalAlert {...alert} />}
    </ContentWrapper>
  )
}

export default ViewOperationsGuarantee

```

## src/features/view-operations-guarantee/services/change-type-account/generateNewAccount.ts

```typescript
import { httpGuaranteeAccountSave } from 'remoteShell/mf-axiosConfig'

import {
  GenerateAccountService,
  GenerateNewAccountBody
} from '@/features/view-operations-guarantee/types/services/change-type-account/generateNewAccount'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

export const generateNewAccount = async (body: GenerateNewAccountBody) => {
  const headers = await getHeaders()
  const response = await httpGuaranteeAccountSave.post<GenerateAccountService>(
    ENDPOINTS.GUARANTEE_ACCOUNT_GENERATE,
    body,
    {
      headers
    }
  )
  return response.data
}

```

## src/features/view-operations-guarantee/services/change-type-account/saveAccount.ts

```typescript
import { httpGuaranteeAccountSave } from 'remoteShell/mf-axiosConfig'

import {
  SaveAccountBody,
  SuccessSaveAccount
} from '@/features/view-operations-guarantee/types/services/change-type-account/saveAccount'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

export const saveNewAccount = async (body: SaveAccountBody) => {
  const headers = await getHeaders()
  const response = await httpGuaranteeAccountSave.post<SuccessSaveAccount>(
    ENDPOINTS.GUARANTEE_ACCOUNT_SAVE,
    body,
    {
      headers
    }
  )
  return response.data
}

```

## src/features/view-operations-guarantee/services/getAccountGuarantee.ts

```typescript
import { httpGuaranteesForOperations } from 'remoteShell/mf-axiosConfig'

import {
  AccountFilterParams,
  ServiceOptionsAccounts
} from '@/features/view-operations-guarantee/types/services/getAccountsGuarantee'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

export const getAccountsGuaranteeFilter = async (
  params?: AccountFilterParams
) => {
  const headers = await getHeaders()
  const response =
    await httpGuaranteesForOperations.get<ServiceOptionsAccounts>(
      ENDPOINTS.GUARANTEES_TRADING_BY_ACCOUNT,
      {
        headers,
        params
      }
    )
  return response.data
}

```

## src/features/view-operations-guarantee/services/getBeneficiaryService.ts

```typescript
import { httpGuaranteesForOperations } from 'remoteShell/mf-axiosConfig'

import {
  BeneficiaryParams,
  ServiceOptionsBeneficiary
} from '@/features/view-operations-guarantee/types/services/getBeneficiaryService'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

export const getBeneficiaryFilter = async (params: BeneficiaryParams) => {
  const headers = await getHeaders()
  const response =
    await httpGuaranteesForOperations.get<ServiceOptionsBeneficiary>(
      ENDPOINTS.INVESTORS_FILTER,
      {
        headers,
        params
      }
    )
  return response.data
}

```

## src/features/view-operations-guarantee/services/getCustodiesService.ts

```typescript
import { httpGuaranteesForOperations } from 'remoteShell/mf-axiosConfig'

import {
  CustodianSearchParams,
  OptionsServiceCustodian
} from '@/features/view-operations-guarantee/types/services/getCustodianFilters'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

export const getCustodiesFilter = async (params: CustodianSearchParams) => {
  const headers = await getHeaders()
  const response =
    await httpGuaranteesForOperations.get<OptionsServiceCustodian>(
      ENDPOINTS.GUARANTEES_TRADING_BY_CUSTODIAN,
      {
        headers,
        params
      }
    )
  return response.data
}

```

## src/features/view-operations-guarantee/services/getDataGuaranteeForParticipant.ts

```typescript
import { httpGuaranteesForOperations } from 'remoteShell/mf-axiosConfig'

import {
  DataViewOperationGuarantee,
  GuaranteeOperationQueryParams
} from '@/features/view-operations-guarantee/types/mocks/dataViewOperationGuarantee'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

export const getDataGuaranteeForOperations = async (
  params: GuaranteeOperationQueryParams
) => {
  const headers = await getHeaders()
  const response =
    await httpGuaranteesForOperations.get<DataViewOperationGuarantee>(
      ENDPOINTS.GUARANTEES_FILTER,
      {
        headers,
        params
      }
    )
  return response.data
}

```

## src/features/view-operations-guarantee/services/getFilterStatus.ts

```typescript
import { httpFilterParameters } from 'remoteShell/mf-axiosConfig'

import { ServiceStatus } from '@/features/view-operations-guarantee/types/services/getFilterStatus'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

export const getStatusFilter = async () => {
  const headers = await getHeaders()
  const response = await httpFilterParameters.get<ServiceStatus>(
    `${ENDPOINTS.STATUS_CATEGORY}/${encodeURIComponent('GARANTIA_OPERACION')}`,
    {
      headers
    }
  )
  return response.data
}

```

## src/features/view-operations-guarantee/services/getFolioService.ts

```typescript
import { httpGuaranteesForOperations } from 'remoteShell/mf-axiosConfig'

import {
  GetFolioParams,
  GetFolioResponse
} from '@/features/view-operations-guarantee/types/services/getFolio'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

export const getFolioFilter = async (params: GetFolioParams) => {
  const headers = await getHeaders()
  const response = await httpGuaranteesForOperations.get<GetFolioResponse>(
    ENDPOINTS.GUARANTEES_TRADING_BY_MATCH_ID,
    {
      headers,
      params
    }
  )
  return response.data
}

```

## src/features/view-operations-guarantee/services/getIsinService.ts

```typescript
import { httpGuaranteesForOperations } from 'remoteShell/mf-axiosConfig'

import {
  GetIsinFilterParams,
  ServiceFilterIsin
} from '@/features/view-operations-guarantee/types/services/getIsinFilter'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

export const getIsinFilter = async (params: GetIsinFilterParams) => {
  const headers = await getHeaders()
  const response = await httpGuaranteesForOperations.get<ServiceFilterIsin>(
    ENDPOINTS.GUARANTEES_TRADING_BY_ISIN_NUMBER,
    {
      headers,
      params
    }
  )
  return response.data
}

```

## src/features/view-operations-guarantee/services/getMnemonicService.ts

```typescript
import { httpGuaranteesForOperations } from 'remoteShell/mf-axiosConfig'

import {
  GetMnemonicFilterParams,
  ServiceOptionsMnemonic
} from '@/features/view-operations-guarantee/types/services/getMnemonicFilter'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

export const getMnemonicFilter = async (params: GetMnemonicFilterParams) => {
  const headers = await getHeaders()
  const response =
    await httpGuaranteesForOperations.get<ServiceOptionsMnemonic>(
      ENDPOINTS.GUARANTEES_TRADING_BY_MNEMONIC,
      {
        headers,
        params
      }
    )
  return response.data
}

```

## src/features/view-operations-guarantee/services/getParticipantService.ts

```typescript
import { httpGuaranteesForOperations } from 'remoteShell/mf-axiosConfig'

import {
  ParticipantOptions,
  ParticipantSearchParams
} from '@/features/view-operations-guarantee/types/services/getParticipantFilters'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

export const getParticipantFilter = async (params: ParticipantSearchParams) => {
  const headers = await getHeaders()
  const response = await httpGuaranteesForOperations.get<ParticipantOptions>(
    ENDPOINTS.GUARANTEES_TRADING_BY_PARTICIPANT,
    {
      headers,
      params
    }
  )
  return response.data
}

```

## src/features/view-operations-guarantee/services/getTypeAccounts.ts

```typescript
import { httpFilterParameters } from 'remoteShell/mf-axiosConfig'

import { ServiceStatus } from '@/features/view-operations-guarantee/types/services/getFilterStatus'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

export const getTypeAccount = async () => {
  const headers = await getHeaders()
  const response = await httpFilterParameters.get<ServiceStatus>(
    `${ENDPOINTS.TYPE_CATEGORY}/${encodeURIComponent('TIPO CUENTA GARANTIA')}`,
    {
      headers
    }
  )
  return response.data
}

```

## src/features/view-operations-guarantee/services/postManualCalculate.tsx

```tsx
import { httpGaranteeExigency } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

export const postManualCalculate = async (data: number[]) => {
  const headers = await getHeaders()
  const response = await httpGaranteeExigency.post(
    ENDPOINTS.GUARANTEE_EXIGENCY_CALCULATE_MANUAL,
    data,
    {
      headers
    }
  )
  return response.data
}

```

## src/features/view-operations-guarantee/services/resolveUnfulfilled.ts

```typescript
import { httpGuaranteeNonComplianceApi } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'

import { GuaranteeResponse } from '../types/resolveUnfulfilled'

const resolveUnfulfilled = async (body: number[]) => {
  const headers = await getHeaders()
  const service = await httpGuaranteeNonComplianceApi.post<GuaranteeResponse>(
    ENDPOINTS.GUARANTEE_NON_COMPLIANCE,
    body,
    { headers }
  )
  return service.data
}

export default resolveUnfulfilled

```

## src/features/view-operations-guarantee/types/common.d.ts

```typescript
export type ReturnOptionsAutoComplete = Promise<{
  data: AutocompleteOption[]
  total: number
}>

```

## src/features/view-operations-guarantee/types/components/AlertState.d.ts

```typescript
import { ModalAlertProps } from '@/shared/types/declare'

export interface ModalAlertState extends ModalAlertProps {
  open?: boolean
  idAlert?: string
}

```

## src/features/view-operations-guarantee/types/components/ChangeTypeAccount.d.ts

```typescript
import { OptionStatus } from '../services/getFilterStatus'
import { DispatchAlertProps } from './DispatchSetAlert'

export interface ChangeTypeAccountsProps extends DispatchAlertProps {
  onRefreshTable: () => void
  typeAccountDefault?: string
  tradeId: number
  options: OptionStatus[]
  statusDescription?: string
}

export interface StateTypeAccount {
  category?: string
  description?: string
  detail?: string
  id?: number
}

```

## src/features/view-operations-guarantee/types/components/DispatchSetAlert.d.ts

```typescript
import { Dispatch, SetStateAction } from 'react'

import { ModalAlertState } from './AlertState'

export interface DispatchAlertProps {
  setAlert: Dispatch<SetStateAction<ModalAlertState | undefined>>
}

```

## src/features/view-operations-guarantee/types/components/FiltersSearchTable.d.ts

```typescript
import { AutocompleteOption } from '@/shared/types/AutoCompleteOption'

import { FiltersSearchOperationsGuarantee } from './ViewOperationsGuarantee'

export interface FiltersSearchTableCommonProps {
  filters?: FiltersSearchOperationsGuarantee
  onChangeFilters: (newValue: Partial<FiltersSearchOperationsGuarantee>) => void
}
export interface FiltersSearchAutoComplete {
  value?: AutocompleteOption
  onChangeFilters: (newValue: Partial<FiltersSearchOperationsGuarantee>) => void
}

```

## src/features/view-operations-guarantee/types/components/GuaranteeAccounts.d.ts

```typescript
import { FiltersSearchTableCommonProps } from '@/features/view-operations-guarantee/types/components/FiltersSearchTable'
import { OptionAccount } from '@/features/view-operations-guarantee/types/services/getAccountsGuarantee'

interface GuaranteeAccountProps {
  onChangeValue: FiltersSearchTableCommonProps['onChangeFilters']
  value?: OptionAccount
}

```

## src/features/view-operations-guarantee/types/components/TableViewOperationGuarantee.d.ts

```typescript
import { BeneficiaryHeaderData } from '../contants/ColumnsTableGuaranteeOperation'
import { DispatchAlertProps } from './DispatchSetAlert'
import { FiltersSearchOperationsGuarantee } from './ViewOperationsGuarantee'

export interface TableViewOperationGuaranteeProps extends DispatchAlertProps {
  filtersVisualization?: FiltersSearchOperationsGuarantee
  handleShowBeneficiaries: (
    tradeId: number,
    sideId: string,
    data: BeneficiaryHeaderData
  ) => void
}

export interface StateTotalTable {
  totalCount: number
  totalAmount: number
  totalRequirement: number
}

```

## src/features/view-operations-guarantee/types/components/ToastState.d.ts

```typescript
import { ToastProps } from '@/shared/types/declare'

export interface ToastState extends ToastProps {
  open?: boolean
  text?: string
}

```

## src/features/view-operations-guarantee/types/components/ViewOperationsGuarantee.d.ts

```typescript
import { OptionAccount } from '@/features/view-operations-guarantee/types/services/getAccountsGuarantee'
import { OptionStatus } from '@/features/view-operations-guarantee/types/services/getFilterStatus'

import { AutocompleteOption } from '@/shared/types/AutoCompleteOption'

export interface FiltersSearchOperationsGuarantee {
  registrationDate?: string | null
  guaranteeAccount?: OptionAccount
  folio?: AutocompleteOption
  participant?: AutocompleteOption
  custody?: AutocompleteOption
  beneficiary?: AutocompleteOption
  mnemonic?: AutocompleteOption
  isin?: AutocompleteOption
  state?: OptionStatus
}

```

## src/features/view-operations-guarantee/types/components/totalCalculation.d.ts

```typescript
export interface TotalCalculationInterface {
  total?: {
    totalCount?: number
    totalAmount?: number
    totalDemand?: number
  }
}

```

## src/features/view-operations-guarantee/types/contants/ColumnsBeneficiaries.ts

```typescript
export interface BeneficiariesTable {
  id: number
  lastModifyDate: Date
  trade: Trade
  side: Side
  guaranteeAccountType: Type
  guaranteeGlobalAccount: GuaranteeGlobalAccount
  guaranteeParticularAccount: GuaranteeParticularAccount
  status: Status
  reopening: boolean
  participant: Custodian
  custodian: Custodian
  investor: Investor
  riskModelPrice: number
  riskModelPercentage: number
  assignedQuantity: number
  requirementAmount: number
}

export interface Custodian {
  participantId: number
  code: string
  name: string
}

export interface Type {
  id: number
  description: string
  detail: string
}

export interface GuaranteeGlobalAccount {
  id: number
  requiereGuarantee: boolean
  accountCode: string
}

export interface GuaranteeParticularAccount {
  id: number
  accountParticularCode: string
}

export interface Investor {
  investorId: number
  documentNumber: string
  investorName: string
  identificationType: IdentificationType
}

export interface IdentificationType {
  id: number
  description: string
  code: string
}

export interface Side {
  id: string
  description: string
}

export interface Status {
  id: number
  description: string
  shortName: string
}

export interface Trade {
  tradeId: number
  folio: number
  matchDate: Date
  clearingDate: Date
  currency: Currency
  type: Type
}

export interface Currency {
  id: number
  code: string
  name: string
}

```

## src/features/view-operations-guarantee/types/contants/ColumnsTableGuaranteeOperation.d.ts

```typescript
/* eslint-disable @typescript-eslint/no-explicit-any */
import { OptionStatus } from '../services/getFilterStatus'

export interface ColumnTable {
  field: string
  headerName?: string
  renderHeader?: () => JSX.Element
  sortable?: boolean
  flex?: number
  maxWidth?: number
  minWidth?: number
  renderCell?: any
}

export interface BeneficiaryHeaderData {
  matchDate?: Date
  folio?: number
  sideDescription?: string
  participantCode?: string
}

export type FuncColumnsOperation = (
  onRefreshTable: () => void,
  setAlert: DispatchAlertProps['setAlert'],
  options: OptionStatus[],
  handleShowBeneficiaries: (
    tradeId: number,
    sideId: string,
    data: BeneficiaryHeaderData
  ) => void
) => ColumnTable[]

```

## src/features/view-operations-guarantee/types/mocks/dataViewOperationGuarantee.d.ts

```typescript
export interface ContentDataField {
  id: number
  punta: string
  mnemonic: string
  isinNumber: string
  lastModifyDate: Date
  trade: Trade
  side: Side
  guaranteeAccountType: Type
  guaranteeGlobalAccount: GuaranteeGlobalAccount
  guaranteeParticularAccount: GuaranteeParticularAccount
  status: Status
  reopening: boolean
  participant: Custodian
  custodian: Custodian
  afpFund: AFPFund
  fraction: number
  investor: Investor
  securityTitle: SecurityTitle
  isin: Isin
  riskModelPrice: number
  riskModelPercentage: number
  assignedQuantity: number
  assignedAmount: number
  requirementAmount: number
  country: Country
  showInvestors: boolean
}

export interface AFPFund {
  afpFundId: number
  afpFundCode: string
  description: string
}

export interface Country {
  id: number
  code: string
  name: string
}

export interface Custodian {
  participantId: number
  code: string
  name: string
}

export interface Type {
  id: number
  description: string
  detail: string
}

export interface GuaranteeGlobalAccount {
  id: number
  requiereGuarantee: boolean
  accountCode: string
}

export interface GuaranteeParticularAccount {
  id: number
  accountParticularCode: string
}

export interface Investor {
  investorId: number
  documentNumber: string
  investorName: string
  identificationType: IdentificationType
}

export interface IdentificationType {
  id: number
  description: string
  code: string
}

export interface Isin {
  isinNumberId: number
  isinNumber: string
  description: string
  marketId: string
  issueDate: Date
  maturityDate: Date
  creditRating: string
  rateValue: number
}

export interface SecurityTitle {
  id: number
  mnemonic: string
}

export interface Side {
  id: string
  description: string
}

export interface Status {
  id: number
  description: string
  shortName: string
}

export interface Trade {
  tradeId: number
  folio: number
  matchDate: Date
  clearingDate: Date
  currency: Country
  type: Type
}

export type ContentDataFields = ContentDataField[]

export interface DataViewOperationGuarantee {
  content: ContentDataFields
  pageSize: number
  pageNumber: number
  totalElements: number
  totalPages: number
  totalCount: number
  totalAmount: number
  totalRequirement: number
}

export interface GuaranteeOperationQueryParams {
  registrationDate?: string | null
  guaranteeAccountType?: string
  accountCode?: string
  folio?: number
  participant?: number
  custodian?: number
  mnemonic?: number
  isinNumberId?: number
  investor?: number
  statusId?: number
  page?: number
  size?: number | `${number}`
}

```

## src/features/view-operations-guarantee/types/resolveUnfulfilled.d.ts

```typescript
export interface GuaranteeResponse {
  responseSuccess: boolean
  message: string
  success: GuaranteeSuccess[]
  errors: GuaranteeError[]
}

export interface GuaranteeSuccess {
  guaranteeTradeId: number
  tradeId: number
  fraction: number
  sideId: string
}

export interface GuaranteeError {
  guaranteeTradeId: number
  tradeId: number
  fraction: number
  sideId: string
  status: GuaranteeStatus
  reasonError: string
}

export interface GuaranteeStatus {
  id: number
  description: string
}

```

## src/features/view-operations-guarantee/types/services/change-type-account/generateNewAccount.d.ts

```typescript
export interface GenerateNewAccountBody {
  guaranteeTradeId: number
  accountType: 'SPECIFIC_ACCOUNT'
}
export interface GenerateAccountService {
  message: string
  accountNumber: string
}

```

## src/features/view-operations-guarantee/types/services/change-type-account/saveAccount.d.ts

```typescript
export interface SaveAccountBody {
  guaranteeTradeId: number
  accountType: 'SPECIFIC_ACCOUNT'
  accountNumber: string
}
export interface SuccessSaveAccount {
  message: string
}

```

## src/features/view-operations-guarantee/types/services/commonFilters.d.ts

```typescript
export interface CommonFilters<T> {
  content: T
  pageSize: number
  pageNumber: number
  totalElements: number
  totalPages: number
}
export interface CommonParams {
  custodian?: number
  participant?: number
  page?: number
  size?: number
}

```

## src/features/view-operations-guarantee/types/services/getAccountsGuarantee.d.ts

```typescript
import { CommonFilters, CommonParams } from './commonFilters'

export interface AccountFilterParams extends CommonParams {
  accountSearch?: string
}

export interface OptionAccount {
  accountType: string
  accountId: number
  accountCode: string
  accountName: string
  accountParticularCode: string
  requiereGuarantee: boolean
}
export type ServiceOptionsAccounts = CommonFilters<OptionAccount[]>

```

## src/features/view-operations-guarantee/types/services/getBeneficiaryService.d.ts

```typescript
import { CommonFilters, CommonParams } from './commonFilters'

export interface BeneficiaryParams extends CommonParams {
  investorName?: string
  documentNumber?: string
}

export interface OptionInvestor {
  investorId: number
  documentNumber: string
  investorName: string
}

export type ServiceOptionsBeneficiary = CommonFilters<OptionInvestor[]>

```

## src/features/view-operations-guarantee/types/services/getCustodianFilters.d.ts

```typescript
import { CommonFilters } from './commonFilters'

export interface CustodianSearchParams {
  custodianSearch?: string
  custodianId?: number
  page?: number
  size?: number
}

export interface OptionCustodian {
  custodianId: number
  code: string
  name: string
}
export type OptionsServiceCustodian = CommonFilters<OptionCustodian[]>

```

## src/features/view-operations-guarantee/types/services/getFilterStatus.d.ts

```typescript
export interface OptionStatus {
  id: 0
  shortName: string
  description: string
  category: string
  detail: string
  marketId: string
  countryId: 0
}
export type ServiceStatus = OptionStatus[]

```

## src/features/view-operations-guarantee/types/services/getFolio.d.ts

```typescript
import { CommonFilters, CommonParams } from './commonFilters'

export interface GetFolioParams extends CommonParams {
  matchId: string
}
export interface FolioOption {
  tradeId: number
  folio: number
}
export type GetFolioResponse = CommonFilters<FolioOption[]>

```

## src/features/view-operations-guarantee/types/services/getIsinFilter.d.ts

```typescript
import { CommonFilters, CommonParams } from './commonFilters'

export interface GetIsinFilterParams extends CommonParams {
  isinNumber?: string
}

export interface IsinOption {
  isinNumberId: number
  isinNumber: string
  description: string
  marketId: string
  issueDate: string
  maturityDate: string
  creditRating: string
  rateValue: number
}

export type ServiceFilterIsin = CommonFilters<IsinOption[]>

```

## src/features/view-operations-guarantee/types/services/getMnemonicFilter.d.ts

```typescript
import { CommonFilters, CommonParams } from './commonFilters'

export interface GetMnemonicFilterParams extends CommonParams {
  mnemonic?: string
}

export interface OptionMnemonic {
  mnemonic: string
  equityCode: string
  isin: string
  securityTitleId?: number
}

export type ServiceOptionsMnemonic = CommonFilters<OptionMnemonic[]>

```

## src/features/view-operations-guarantee/types/services/getParticipantFilters.d.ts

```typescript
import { CommonFilters } from './commonFilters'

export interface ParticipantSearchParams {
  participantId?: number
  participantSearch?: string
  page?: number
  size?: number
}

export interface ParticipantOption {
  participantId: number
  code: string
  name: string
}
export type ParticipantOptions = CommonFilters<ParticipantOption[]>

```

## src/features/view-operations-guarantee/utils/ColumnsErrorTable.tsx

```tsx
export const ColumnsErrorTable = () => {
  return [
    {
      flex: 1,
      minWidth: 10,
      field: 'registrationDate',
      headerName: 'Fecha registro'
    },
    {
      flex: 1,
      minWidth: 10,
      field: 'folio',
      headerName: 'Folio'
    },
    {
      flex: 1,
      minWidth: 10,
      field: 'participantName',
      headerName: 'Participante'
    },
    {
      flex: 1,
      minWidth: 10,
      field: 'custodianName',
      headerName: 'Custodio'
    },
    {
      flex: 1,
      minWidth: 10,
      field: 'investorName',
      headerName: 'Beneficiario'
    },
    {
      flex: 1,
      minWidth: 10,
      field: 'mnemonic',
      headerName: 'Nemotécnico'
    },
    {
      flex: 1,
      minWidth: 600,
      field: 'reason',
      headerName: 'Motivo'
    }
  ]
}

```

## src/features/view-operations-guarantee/utils/generateCSV.ts

```typescript
import { ColumnTable } from '@/features/view-operations-guarantee/types/contants/ColumnsTableGuaranteeOperation'
import { ContentDataFields } from '@/features/view-operations-guarantee/types/mocks/dataViewOperationGuarantee'

import { formatNumber } from '../../../shared/utils/formatNumber'

type GenerateTxtReport = {
  data: ContentDataFields
  name?: string
  headersTable: ColumnTable[]
}

function getValueByPath(obj: any, path: string) {
  return path.split('.').reduce((acc, key) => acc?.[key], obj)
}
export const generateCSVOperationGuarantee = async ({
  data,
  name,
  headersTable
}: GenerateTxtReport) => {
  let reports: string[] = []
  const headersSetRows = new Set(headersTable)
  const headersSet = new Set()
  headersSetRows.forEach((header) => {
    headersSet.add(header.headerName)
  })
  const headers = [...headersSet].join(',')
  reports.push(headers)
  const setData = new Set(data)
  setData.forEach((i) => {
    const item: string[] = []
    headersSetRows.forEach((header) => {
      let dataField = getValueByPath(i, header.field)
      if (dataField === null || dataField === undefined) {
        dataField = ''
      } else if (typeof dataField === 'boolean') {
        dataField = dataField ? 'Sí' : 'No'
      } else if (typeof dataField === 'number') {
        dataField = `"${formatNumber(dataField)}"`
      }
      item.push(dataField)
    })
    reports.push(item.join(','))
  })

  const finalContent = reports.join('\n')
  const nameEntity = (name ?? 'default_name').replace(/\s+/g, '_')
  const fileName = `${nameEntity}.csv`
  const bom = new Uint8Array([0xef, 0xbb, 0xbf])
  const blob = new Blob([bom, finalContent], { type: 'text/csv;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = fileName
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

```

## src/main.tsx

```tsx
import ErrorBoundary from '@/shared/components/ErrorBoundary.tsx'

import App from './App.tsx'

const Main = () => (
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
)

export default Main

```

## src/shared/assets/icons/close-square.svg

```xml
<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3955 8.09375L7.60352 12.8857" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.3956 12.8907L7.59961 8.09375" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.334 1.25H5.665C2.644 1.25 0.75 3.389 0.75 6.416V14.584C0.75 17.611 2.635 19.75 5.665 19.75H14.333C17.364 19.75 19.25 17.611 19.25 14.584V6.416C19.25 3.389 17.364 1.25 14.334 1.25Z" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

```

## src/shared/assets/icons/info-error.svg

```xml
<svg width="134" height="133" viewBox="0 0 134 133" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M67.0007 15.2422C95.3075 15.2422 118.261 38.1902 118.261 66.5026C118.261 94.8094 95.3075 117.763 67.0007 117.763C38.6883 117.763 15.7402 94.8094 15.7402 66.5026C15.7402 38.1902 38.6883 15.2422 67.0007 15.2422Z" stroke="#FD441E" stroke-width="8.3125" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M66.974 45.4688V69.9574" stroke="#FD441E" stroke-width="8.3125" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M66.9736 87.5404H67.029" stroke="#FD441E" stroke-width="11.0833" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

```

## src/shared/components/ContainerFieldRegister.tsx

```tsx
import { DefaultComponents, Typography } from '@nuam/common-fe-lib-components'
import { ReactNode } from 'react'

import { useTranslate } from '@/shared/hooks/useTranslate'

interface Props {
  field: ReactNode
  field2: ReactNode
  title: string
  title2: string
  textOptional?: boolean
  textOptional2?: boolean
  className?: string
  classNameItems?: string
  classNameTextOptional?: string
}
const ContainerFieldRegister = ({
  field,
  field2,
  title,
  textOptional,
  title2,
  textOptional2,
  className,
  classNameItems = '',
  classNameTextOptional = ''
}: Props) => {
  const t = useTranslate('fixed-parameters.modal-register.form')

  return (
    <>
      <DefaultComponents.Grid
        size={{ xs: 12, sm: 10, md: 5.6, lg: 5.7 }}
        className={`flex items-center justify-between gap-13px border-b border-border-gray ${className}`}
      >
        <Typography variant="body1" className="text-sm font-bold md:text-base">
          {title}
          {textOptional && <span className="ml-1">{t('optional')}</span>}
        </Typography>
        <div
          className={`flex h-full w-full justify-end ${classNameItems} max-w-190px`}
        >
          {field}
        </div>
      </DefaultComponents.Grid>
      <DefaultComponents.Grid
        size={{ xs: 12, sm: 10, md: 5.6, lg: 5.7 }}
        className={`flex items-center justify-between gap-13px border-b border-border-gray ${className}`}
      >
        <Typography variant="body1" className="text-sm font-bold md:text-base">
          {title2}
          {textOptional2 && (
            <span className={`ml-1 ${classNameTextOptional}`}>
              {t('optional')}
            </span>
          )}
        </Typography>
        <div
          className={`flex h-full w-full justify-end ${classNameItems} max-w-190px`}
        >
          {field2}
        </div>
      </DefaultComponents.Grid>
    </>
  )
}

export default ContainerFieldRegister

```

## src/shared/components/ErrorBoundary.tsx

```tsx
import { Component, ErrorInfo, ReactNode } from 'react'

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

interface ErrorBoundaryProps {
  children: ReactNode
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    console.error('Derived Error', error)
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error: ', error)
    console.error('Error Info: ', errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.state.error?.message) console.error(this.state.error.message)
      if (this.state.error?.stack) console.error(this.state.error.stack)
      return <h1>Oops! garantías falló</h1>
    }

    return this.props.children
  }
}

export default ErrorBoundary

```

## src/shared/components/ErrorRegisterModal.tsx

```tsx
import {
  Button,
  MaterialIcons,
  Modal,
  Typography
} from '@nuam/common-fe-lib-components'

import { ERROR_MESSAGES } from '@/features/account-management/constants/errors'

import InfoError from '@/shared/assets/icons/info-error.svg'

type Props = {
  messageError?: string
  showModalError: boolean
  onBackModal: () => void
  onCloseModal: () => void
}
const ErrorRegisterModal = ({
  onCloseModal,
  showModalError,
  messageError,
  onBackModal
}: Props) => {
  return (
    <Modal
      open={showModalError}
      boxProps={{}}
      sx={{
        '&> .MuiBox-root': {
          borderRadius: '4px',
          padding: '48px',
          paddingTop: '28px',
          width: '45%',
          maxWidth: '460px',
          minWidth: '320px',
          border: 'none',
          outline: 'none'
        }
      }}
    >
      <div className="relative flex flex-col items-center justify-center gap-30px">
        <div className="flex w-full flex-col items-center justify-center">
          <MaterialIcons.Close
            width="24px"
            height="24px"
            className="absolute -right-7 top-0 cursor-pointer self-end"
            onClick={onCloseModal}
          />
          <img src={InfoError} alt="info square" width="130" height="130" />
        </div>
        <Typography className="text-center text-lg font-medium md:text-xl">
          Ocurrió un error inesperado
        </Typography>
        <Typography className="w-full text-center">
          {messageError ?? ERROR_MESSAGES.TRY_AGAIN}
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={onBackModal}
          sx={{ width: '50%' }}
        >
          Volver
        </Button>
      </div>
    </Modal>
  )
}

export default ErrorRegisterModal

```

## src/shared/components/NumericInputField.tsx

```tsx
import { TextField } from '@nuam/common-fe-lib-components'

import { onKeyDownNumber } from '@/shared/utils/onKeyDownNumber'

interface NumericInputFieldProps {
  value?: any
  onChange: (value: number) => void
  onBlur?: (value: number) => void
  placeholder?: string
  className?: string
  size?: 'small' | 'medium'
  locale?: string // default 'es-CO'
  error?: boolean
}

const NumericInputField = ({
  value,
  onChange,
  onBlur,
  placeholder = 'Digite un valor',
  className = 'pl-1 w-full h-full rounded-4px',
  size = 'small',
  locale = 'es-CO',
  error = false
}: NumericInputFieldProps) => {
  const formattedValue =
    value !== undefined && value !== null && value !== ''
      ? new Intl.NumberFormat(locale).format(Number(value))
      : ''
  const parseValue = (val: string): number => {
    const strValFormatted = val.replace(/[.,\s]/g, '')
    return strValFormatted === '' || !/^\d+$/.test(strValFormatted)
      ? 0
      : Number(strValFormatted)
  }
  const handleChange = (val: string) => {
    onChange(parseValue(val))
  }

  const handleBlur = (val: string) => {
    if (onBlur) {
      onBlur(parseValue(val))
    }
  }

  return (
    <TextField
      value={formattedValue}
      placeholder={placeholder}
      onChange={(val: any) => {
        const newValue = typeof val === 'string' ? val : val.target.value
        handleChange(newValue)
      }}
      onBlur={(e: any) => handleBlur(e.target.value)}
      onKeyDown={onKeyDownNumber}
      type="text"
      className={className}
      size={size}
      error={error}
      sx={{
        '& > .MuiInputBase-root': {
          height: '90%'
        }
      }}
    />
  )
}

export default NumericInputField

```

## src/shared/components/SuspenseWithSpinner.tsx

```tsx
import { PropsWithChildren, Suspense } from 'react'

import { Spinner } from 'remoteUtilities/components-mf-utilities'

const SuspenseWithSpinner = ({ children }: PropsWithChildren) => (
  <Suspense fallback={<Spinner />}>{children}</Suspense>
)

export default SuspenseWithSpinner

```

## src/shared/constants/actionCodes.ts

```typescript
export const GUARANTEE_MANAGEMENT_ACTIONS = {
  CONFIRM_EXECUTION: '161',
  DETAIL: '157',
  REGISTER_GUARANTEES: '154',
  APPROVE_RELEASE: '160',
  SEND_DEPOT: '153',
  GUARANTEE_TRACKING: '158',
  EXECUTE_GUARANTEE: '155',
  EVALUATE_WARRANTY: '156',
  APPROVE_REGISTER: '159'
}

export const GUARANTEE_VIEW_OPERATIONS_ACTIONS = {
  EVALUATE_TRANSACTION: '168',
  RESOLVE_NONCOMPLIANCE: '169',
  CHANGE_ACCOUNT_TYPE: '170',
  BENEFICIARY_DETAILS: '171'
}

export const GUARANTEE_ADMINISTRATION_ACTIONS = {
  OPERATIONS: '147',
  GUARANTEES: '148',
  PARAMS: '149',
  ACCOUNT_MANAGER: '150',
  SCHEDULES: '151',
  REPORTS: '152'
}

export const GUARANTEE_TRANSFER_LIBERATION_ACTIONS = {
  REQUEST_RELEASE: '162',
  REQUEST_TRANSFER: '163'
}

```

## src/shared/constants/endpoints.ts

```typescript
export const ENDPOINTS = Object.freeze({
  CONDITION_MODEL_RISK: '/type/category/condition-model-risk',
  CONDITION_RISK_ADDITIONAL_FILTER: '/condition-risk-additional/filter',
  COUNTRY: '/country',
  CREATE_ACCOUNT: '/maintainer/create-account',
  FILTER_ACCOUNTS: '/filter/accounts',
  GUARANTEE_ACCOUNT: '/guarantee-account',
  GUARANTEE_TYPE_ACCOUNT: '/guarantee-account/type',
  GUARANTEE_ACCOUNT_FILTER: '/guarantees/guarantees-by-filters',
  GUARANTEE_ACCOUNT_SEARCH: '/guarantee-account/search',
  GUARANTEE_REPORTS: '/guarantees-reports/guarantees/all',
  GUARANTEE_ACCOUNT_COVERAGE: '/type/category/OPERACIÓN',
  GUARANTEE_ACCOUNT_DESTINATION: '/type/category/CUENTA_GARANTIA',
  GUARANTEE_ACCOUNT_GENERATE: '/guarantee-account/generate',
  GUARANTEE_ACCOUNT_MARKET: '/market/category/TIPO_ACTIVO',
  GUARANTEE_ACCOUNT_SAVE: '/guarantee-account/save',
  GUARANTEE_ACCOUNT_STATUS: '/status/category/CUENTA_GARANTIA',
  GUARANTEE_DETAIL: '/guarantee-detail/guarantee',
  GUARANTEE_DETAIL_TRANSACTION: '/guarantee-detail/assignment/guarantee',
  GUARANTEE_DETAIL_TRANSACTION_CALCULATION_TOTAL:
    '/guarantee-detail/assignment/calculation-total/guarantee',
  GUARANTEE_EXIGENCY_CALCULATE_MANUAL: '/guarantee-exigency/calculate/manual',
  GUARANTEE_REGISTER_SEARCH:
    '/security-title/mnemonic/guarantee/register/search',
  GUARANTEE_REGISTER_SEARCH_ACCOUNT: '/account/guarantee/register/search',
  GUARANTEE_REGISTER_SEARCH_ACCOUNT_ORIGIN:
    '/account/origin/guarantee/register/search',
  GUARANTEE_REGISTER_SEARCH_CURRENCY: '/currency/guarantee/register',
  GUARANTEE_REGISTER_SEARCH_CUSTODY:
    '/participant/custody/guarantee/register/search',
  GUARANTEE_REGISTER_SEARCH_DEPOSITORY: '/depository/guarantee/register/search',
  GUARANTEE_REGISTER_SEARCH_INVESTOR: '/investor/guarantee/register/search',
  GUARANTEE_REGISTER_AFP_FOUND: '/afp-found/guarantee/register',
  GUARANTEE_REGISTER_SEARCH_ISIN: '/isin-number/guarantee/register/search',
  GUARANTEE_REGISTER_SEARCH_PARTICIPANT:
    '/participant/guarantee/register/search',
  GUARANTEE_REGISTER_SEARCH_TYPE_ACCOUNT: '/type/account/guarantee/register',
  GUARANTEE_REGISTER_SEARCH_TYPE_GUARANTEE: '/type/guarantee/register',
  GUARANTEE_REGISTER_VALIDATE_ISIN: '/isin-number/guarantee/register/validate',
  GUARANTEE_REGISTER_VALIDATE_USER: '/guarantees/validate/user/register',
  GUARANTEES_COUNT: '/guarantees/guarantee-expire',
  GUARANTEES_FILTER: '/guarantees/filter',
  GUARANTEES_REGISTER: '/guarantees/register',
  GUARANTEES_REPORT: '/guarantees/reports-by-filters',
  GUARANTEES_SEARCH_BY_NUMBER: '/guarantees/search-by-number',
  GUARANTEES_SEARCH_BY_SPECIFIC_ACCOUNT:
    '/guarantees/search-by-specific-account',
  GUARANTEES_SELF_RELEASE_REGISTER: '/guarantees/self-release/register',
  GUARANTEES_TRACKING: '/guarantees-status-history/tracking/guarantee',
  GUARANTEES_TRADING_BY_ACCOUNT: '/guarantees/trades-by-account',
  GUARANTEES_TRADING_BY_CUSTODIAN: '/guarantees/trades-by-custodian',
  GUARANTEES_TRADING_BY_ISIN_NUMBER: '/guarantees/trades-by-isin-number',
  GUARANTEES_TRADING_BY_MATCH_ID: '/guarantees/trades-by-match-id',
  GUARANTEES_TRADING_BY_MNEMONIC: '/guarantees/trades-by-mnemonic',
  GUARANTEES_TRADING_BY_PARTICIPANT: '/guarantees/trades-by-participant',
  GUARANTEES_ADMIN_SEARCH: '/guarantees/guarantees-admin-by-filters',
  GUARANTEES_VOLUME_CALCULATE_MANUAL: '/guarantee-volume/calculate/manual',
  GUARANTEES_VOLUME_CALCULATE_REGISTER: '/guarantees/volume/calculate/register',
  INVESTOR_GUARANTEES: '/investor/search',
  INVESTORS_FILTER: '/investors/filter',
  PARAMETERS_MODEL_RISK: '/type/category/parameters-model-risk',
  PARTICIPANT_GUARANTEES: '/participant/search',
  REPORTS_RISK_ADDITIONAL_PARAMETERS:
    '/reports-risk-additional-parameters/generate/report/risk-model-additional',
  RISK_ADDITIONAL_PARAMETERS: '/risk-additional-parameters',
  RISK_ADDITIONAL_PARAMETERS_INACTIVE: '/risk-additional-parameters/inactive',
  RISK_ADDITIONAL_PARAMETERS_REGISTER: '/risk-additional-parameters/register',
  RISK_ADDITIONAL_PARAMETERS_STATUS_HISTORY_TRACKING:
    '/risk-additional-parameters-status-history/tracking/risk-additional',
  STATUS: '/status',
  STATUS_ACCOUNT: '/maintainer/status-account',
  STATUS_CATEGORY: '/status/category',
  STATUS_GUARANTEES: '/status/category/parameters-model-risk',
  TOTALS_GUARANTEE: '/guarantees/calculation-total-guarantees',
  TYPE_CATEGORY: '/type/category',
  VALIDATE_GUARANTEE_QUANTITY: '/guarantee-release/all/calculate',
  CALCULATE_LIBERATION_AMOUNT: '/guarantee-release/validate/quantity-release',
  GET_TOTAL_GUARANTEE_AMOUNT:
    '/guarantee-release/option/release-total/guarantee',
  EXECUTE_GUARANTEES: '/guarantee-deposit/manual/guarantee-execution/confirm',
  GUARANTEE_CONSTITUTION_MANUAL:
    'guarantee-constitution/manual/guarantee-constitution/confirm',
  BANKS: '/guarantee-download-release/depository',
  GUARANTEE_LIBERATION_DOWNLOAD: '/guarantee-download-release/all',
  GUARANTEE_LIBERATION_DOWNLOAD_HISTORY: '/guarantee-download-release/history',
  GUARANTEE_LIBERATION_DOWNLOAD_HISTORY_DETAIL:
    '/guarantee-download-release/detail/history',
  GUARANTEE_LIBERATION_GENERATE_DOWNLOAD:
    '/guarantee-release-bank/send-manual/bank',
  GUARANTEE_NON_COMPLIANCE: '/guarantee-noncompliance/confirm',
  DOWNLOAD_FILE: '/file-download/download/',
  VALIDATE_GUARANTEE_QUANTITY_TRANSFER: '/guarantee-transfer/all/calculate',
  GET_TOTAL_GUARANTEE_AMOUNT_TRANSFER:
    '/guarantee-transfer/option/transfer-total/guarantee',
  CALCULATE_LIBERATION_AMOUNT_TRANSFER:
    '/guarantee-transfer/validate/quantity-transfer',
  EXECUTE_GUARANTEES_TRANSFER: '/guarantee-transfer/manual/confirm',
  GUARANTEES_INVESTORS_DETAIL: '/guarantees/trade/filter/investors'
})

```

## src/shared/constants/enviroment.ts

```typescript
export const DEVELOPMENT_MODE = 'development'
export const NODE_ENV = import.meta.env.VITE_NODE_ENV || ''

```

## src/shared/constants/processRegister.ts

```typescript
import { StatesProcessRegister } from '@/shared/types/processRegister'

export const STATES_PROCESS_REGISTER: Record<
  StatesProcessRegister,
  StatesProcessRegister
> = {
  ERROR: 'ERROR',
  PROCESS_CONFIRM: 'PROCESS_CONFIRM',
  UPLOADING_REGISTER: 'UPLOADING_REGISTER',
  SUCCESS: 'SUCCESS',
  IDLE: 'IDLE'
}

```

## src/shared/constants/storageKeys.ts

```typescript
/**
 * Enum-like object containing all localStorage key names used in the application.
 * Centralizing these keys helps prevent typos and makes refactoring easier.
 */
export const STORAGE_KEYS = Object.freeze({
  ACCESS_TOKEN: 'access_token',
  USERNAME: 'username',
  LOGGED_IN: 'loggedIn',
  SESSION_START_TIME: 'sessionStartTime',
  LANGUAGE: 'language'
})

```

## src/shared/constants/toast.ts

```typescript
export const TOAST_INITIAL_STATE = {
  message: '',
  show: false
}

```

## src/shared/constants/userType.ts

```typescript
import { UserType } from '@/shared/types/user-type'

export const USER_TYPE: Record<UserType, UserType> = Object.freeze({
  EXTERNAL: 'EXTERNAL',
  INTERNAL: 'INTERNAL',
  PARTICIPANTE: 'EXTERNAL'
})

```

## src/shared/hooks/useGenerateLogs.tsx

```tsx
import { useSelector } from 'react-redux'

import { RootState } from 'remoteShell/mf-store'
import { GenerateLogs } from 'remoteUtilities/components-mf-utilities'

import { STORAGE_KEYS } from '@/shared/constants/storageKeys'
import { DispatchGenerateLogsProps } from '@/shared/types/generate-logs'
import { getFromLocalStorage } from '@/shared/utils/getFromLocalStorage'

const useGenerateLogs = () => {
  const { infoUserNubo } = useSelector((state: RootState) => state.auth)
  const { participantId, id, status, country } = infoUserNubo
  const clientUser = getFromLocalStorage(STORAGE_KEYS.USERNAME)

  const dispatchGenerateLog = async ({
    actionType,
    actionDestination
  }: DispatchGenerateLogsProps) => {
    await GenerateLogs(clientUser || '', {
      actionType,
      actionDestination,
      participantId,
      countryId: country.id,
      userNuboId: id,
      statusId: status.id
    })
  }
  return { dispatchGenerateLog }
}

export default useGenerateLogs

```

## src/shared/hooks/useModalAction.ts

```typescript
import { useState, useMemo, useEffect } from 'react'

import { ModalActionConfig } from '@/features/view-guarantees/types/modalActions'

export const useModalAction = () => {
  const [modalConfig, setModalConfig] = useState<ModalActionConfig | null>(null)
  const [inputValue, setInputValue] = useState<string>('')

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      console.log('Key pressed:', event.key)
      if (event.key === 'Escape') {
        setModalConfig(null)
      }
    }
    if (modalConfig) document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [modalConfig])

  const openModal = (config: ModalActionConfig) => {
    console.log('Opening modal with config:', config)
    setModalConfig(config)
  }

  const handleConfirm = async () => {
    setModalConfig(null)
    setInputValue('')
    if (!modalConfig) return
    try {
      await modalConfig.onConfirm(
        modalConfig.requiresInput ? inputValue : undefined
      )
    } catch (error) {
      console.error(error)
    }
  }

  const isConfirmDisabled = useMemo(() => {
    if (!modalConfig) return true
    if (modalConfig.requiresInput) {
      if (!inputValue) return true
      if (modalConfig.minLength && inputValue.length < modalConfig.minLength)
        return true
    }
    return false
  }, [modalConfig, inputValue])

  return {
    modalConfig,
    inputValue,
    setInputValue,
    openModal,
    handleConfirm,
    setModalConfig,
    isConfirmDisabled
  }
}

```

## src/shared/hooks/useStateRegisterGuarantees.ts

```typescript
import { useSelector } from 'react-redux'

import { selectRegisterGuarantees } from 'remoteShell/mf-registerGuarantees'

import { InitialStateRegister } from '@/shared/types/storeGuarantee'

export const useStateRegisterGuarantees = (): InitialStateRegister =>
  useSelector(selectRegisterGuarantees)

```

## src/shared/hooks/useTranslate.tsx

```tsx
import { useTranslation } from 'react-i18next'

export const useTranslate = (module?: string) => {
  const { t } = useTranslation('garantias')
  return (id: string) => t(module + '.' + id)
}

```

## src/shared/ia-config/.copilotrc.json

```json
{
  "project": {
    "name": "NUBO Frontend",
    "description": "Modular frontend architecture based on Clean Architecture, SOLID, and Screaming Architecture principles. Built with React, Vite, Redux Toolkit, and TypeScript.",
    "architecture": {
      "pattern": "Feature-based Modular Architecture",
      "principles": [
        "SOLID",
        "DRY",
        "Clean Code",
        "Single Responsibility Principle"
      ],
      "goals": [
        "High cohesion and low coupling between modules",
        "Reusability of components and hooks",
        "Predictable, scalable, and maintainable structure"
      ]
    }
  },
  "structure": {
    "/app": "Central app configuration layer (global state, store, routing).",
    "/providers": "Encapsulates global context providers (StoreProvider, ThemeProvider, etc.).",
    "/slices": "Redux slices for global state management.",
    "/features": "Functional modules grouped by domain (each self-contained).",
    "/shared": "Cross-feature reusable code (components, hooks, utils, constants).",
    "featureSubfolders": {
      "assets": "Module-specific images or icons.",
      "pages": "Complete pages for this module.",
      "components": "Reusable components within the module.",
      "hooks": "Custom hooks for the module.",
      "context": "Single context file for module-specific state.",
      "constants": "Constants like endpoints, roles, etc.",
      "providers": "Feature-level context providers.",
      "types": "TypeScript interfaces and types for the module.",
      "mocks": "Mock data for testing or development.",
      "utils": "Auxiliary functions."
    }
  },
  "namingConventions": {
    "folders": "kebab-case",
    "components": "PascalCase",
    "hooks": "camelCase (prefixed with 'use')",
    "functions": "camelCase",
    "files": "camelCase or PascalCase depending on type",
    "examples": {
      "component": "ParticipantDetails.tsx",
      "hook": "useAuth.ts",
      "folder": "/participant-history"
    }
  },
  "codingStyle": {
    "formatter": "Prettier",
    "plugins": ["@trivago/prettier-plugin-sort-imports"],
    "prettierRules": {
      "semi": false,
      "singleQuote": true,
      "printWidth": 80,
      "trailingComma": "none",
      "importOrder": [
        "<THIRD_PARTY_MODULES>",
        "^remote.*$",
        "^@/app/(.*)$",
        "^@/features/(.*)$",
        "^@/shared/(.*)$",
        "^[./]"
      ],
      "importOrderSeparation": true
    },
    "vsCodeSettings": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "avoid": ["magic strings", "magic numbers", "duplicated logic"],
    "prefer": [
      "typed constants in /shared/constants",
      "modular imports using @/",
      "SRP (Single Responsibility per hook, function, or component)"
    ]
  },
  "routing": {
    "routesLocation": "src/shared/routes/index.ts",
    "rule": "Centralize all routes and subroutes per functional module.",
    "breadcrumb": {
      "component": "ContentWrapper",
      "rules": [
        "Never hardcode text values. Always use t('...') for translations.",
        "The last breadcrumb represents the current view.",
        "The page title must match the last breadcrumb name."
      ],
      "example": {
        "title": "t('title.visualizationGuarantees')",
        "links": [
          {
            "name": "t('title.guaranteesModule')",
            "path": "/guarantees-management"
          },
          {
            "name": "t('title.issuedGuarantees')",
            "path": "/guarantees-management"
          }
        ]
      }
    }
  },
  "recommendedLibraries": {
    "usehooks-ts": "A collection of reusable React hooks written in TypeScript.",
    "nbo-utils": "Internal shared utilities library promoting SOLID and DRY principles."
  },
  "customUtilities": {
    "examples": {
      "isDevMode": "Returns true if VITE_NODE_ENV === 'development'.",
      "getUserIP": "Retrieves the user's public IP for backend request headers."
    }
  },
  "aiContext": {
    "goal": "Generate code consistent with the project's modular architecture and naming conventions.",
    "copilotBehavior": [
      "Do not inject UI or navigation logic inside reusable hooks.",
      "Respect SRP — separate business logic from DOM or routing.",
      "Use centralized typed constants instead of literals.",
      "Keep consistent import order and file naming."
    ],
    "testGuidelines": {
      "framework": "Vitest + React Testing Library",
      "rule": "One test per hook or component, named 'ComponentName.test.tsx'."
    }
  }
}

```

## src/shared/routes/index.ts

```typescript
export const ROUTES = Object.freeze({
  ACCOUNT_MANAGEMENT: 'account-management',
  ADMINISTRATION_GUARANTEES: 'administration-guarantees',
  FIXED_PARAMETERS_GUARANTEES: 'fixed-parameters-guarantees',
  GUARANTEES_MANAGEMENT: 'guarantees-management',
  HOME: '/',
  NOT_FOUND: '*',
  REGISTER_GUARANTEES: 'register-guarantees',
  VIEW_OPERATIONS_GUARANTEES: 'view-operations-guarantees',
  TRRANSFER_LIBERATION_GUARANTEES: 'transfer-liberation-guarantees',
  DOWNLOAD_LIBERATION_GUARANTEES: 'download-liberation-guarantees',
  CONCILIATION_GUARANTEES: 'conciliation-guarantees',
  LIMIT_GUARANTEES: 'limit-guarantees'
})

export const SUBROUTES = Object.freeze({
  ACCOUNT_MANAGEMENT: `/${ROUTES.GUARANTEES_MANAGEMENT}/account-management`,
  ADMINISTRATION_GUARANTEES: `/${ROUTES.GUARANTEES_MANAGEMENT}/administration-guarantees`,
  FIXED_PARAMETERS_GUARANTEES: `/${ROUTES.GUARANTEES_MANAGEMENT}/fixed-parameters-guarantees`,
  REGISTER_GUARANTEES: `/${ROUTES.GUARANTEES_MANAGEMENT}/register-guarantees`,
  VIEW_OPERATIONS_GUARANTEES: `/${ROUTES.GUARANTEES_MANAGEMENT}/${ROUTES.VIEW_OPERATIONS_GUARANTEES}/`,
  TRRANSFER_LIBERATION_GUARANTEES: `/${ROUTES.GUARANTEES_MANAGEMENT}/${ROUTES.TRRANSFER_LIBERATION_GUARANTEES}`,
  DOWNLOAD_LIBERATION_GUARANTEES: `/${ROUTES.GUARANTEES_MANAGEMENT}/download-liberation-guarantees`,
  CONCILIATION_GUARANTEES: `/${ROUTES.GUARANTEES_MANAGEMENT}/conciliation-guarantees`,
  LIMIT_GUARANTEES: `/${ROUTES.GUARANTEES_MANAGEMENT}/limit-guarantees`
})

```

## src/shared/types/AutoCompleteOption.d.ts

```typescript
export interface AutocompleteOption {
  id: any
  label: string | number
  [key: string]: any
}

```

## src/shared/types/GuaranteeAccount.d.ts

```typescript
import { CommonFilters } from '@/features/view-operations-guarantee/types/services/commonFilters'

export interface GuaranteeAccountFilterParams {
  page?: number
  size?: string
  sort?: string
  order?: string
  accountTypeId?: number
  text?: string
}

export interface GuaranteeAccountSearch {
  consecutiveId: number
  guaranteeGlobalAccountId: number
  guaranteeParticularAccountId: number
  fullName: string
}
export type ServiceGuaranteeAccountSearch = CommonFilters<
  GuaranteeAccountSearch[]
>

export type ServiceGuaranteeAccountFilter = CommonFilters<GuaranteeAccount[]>

export interface GuaranteeAccount {
  id: number
  description: string
  category: string
  detail: string
}
export interface GuaranteeAccountParams {
  page?: number
  size?: string
  sort?: string
  order?: string
  participantId?: number | string
  registrationDate?: number | string
  text?: string
}

```

## src/shared/types/ModalAlertProps.d.ts

```typescript
import { ModalAlertProps } from './declare'

export interface ModalAlertState extends ModalAlertProps {
  open?: boolean
  id?: string
}

```

## src/shared/types/ToastState.d.ts

```typescript
import { ToastProps } from './declare'

export interface ToastState extends ToastProps {
  open: true
}

```

## src/shared/types/TraficLightProps.d.ts

```typescript
export type CircleType = 'red' | 'yellow' | 'green'

export interface TrafficLightProps {
  readonly countsByColors?: {
    red: number
    yellow: number
    green: number
  }
  readonly tooltipMessages?: {
    red?: string
    yellow?: string
    green?: string
  }
  readonly label: string
  // Alternative approach with a single handler
  readonly onCircleClick?: (type: CircleType) => void
}

```

## src/shared/types/autoCompleteStructure.d.ts

```typescript
export interface AutoCompleteOptions<T> {
  pageNumber: number
  pageSize: number
  totalElements: number
  totalPages: number
  content: T[]
}

```

## src/shared/types/commonService.d.ts

```typescript
export interface CommonService<T> {
  pageNumber: number
  pageSize: number
  totalElements: number
  totalPages: number
  content: T
}

```

## src/shared/types/declare.d.ts

```typescript
import { DefaultComponents } from '@nuam/common-fe-lib-components'
import { ReactNode } from 'react'

import { AutocompleteOption } from './AutoCompleteOption'
import { CircleType } from './TraficLightProps'
import { InitialStateRegister } from './storeGuarantee'

export interface IButtonMui {
  text: string
  size?: 'small' | 'medium' | 'large'
  variant?: 'text' | 'outlined' | 'contained'
  styles?: React.CSSProperties
  className?: string
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
  handleClick: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  iconLeft?: boolean
  iconRight?: boolean
  icon?: string
  iconSize?: number
  onKeyDown?: (e: React.KeyboardEvent<HTMLButtonElement>) => void
}

export interface IMuiSeLect {
  options: any[]
  placeholder?: string
  onChange?: (
    dataReturn?: any,
    value?: string,
    placeholder?: string,
    id?: string
  ) => void
  disabled?: boolean
  id?: string
  dataReturn?: any
  className?: string
  width?: string
  height?: string
  value?: string
  direcReturn?: (arg: any) => void
}
export interface Column {
  name: string
  width: number
  noHidden?: boolean
  tooltip?: string | ((row: any) => string)
  render?: (row: any) => JSX.Element
}
export interface Action {
  label: string
  type: string
  url?: string
  disabled?: boolean
  limit?: boolean
  icon?: JSX.Element
  className?: string
  dropdown?: boolean
}
interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  rowsPerPage: number
  onRowsPerPageChange: (rows: number) => void
}
export interface NewTableProps {
  columns: Column[]
  data: any[]
  headerActions?: Action[]
  rows?: any[]
  getRowClassName?: (row: any) => string
  method?: 'GET' | 'POST'
  disableRowSelectionOnClick?: boolean
  onRowDoubleClick?: () => void
  height?: string
  width?: string
  customFooter?: any
  hideFooter?: boolean
  disableColumnMenu?: boolean
  disableColumnResize?: boolean
  disableColumnSorting?: boolean
  setRowAcomulated?: (arg: any) => void
  getRowHeight?: (params: { id: any; model: any }) => number | 'auto'
  rowFieldAcomulated?: string
  onAction?: (action: Action, appliedFilters: any) => void
  setDataRemote?: (page: number, data: []) => void
  rowsPerPageOptions?: number[]
  renderPagination?: (props: PaginationProps) => JSX.Element
  showSearch?: boolean
  isSettlement: boolean
  isIdSpecialTrade?: boolean
  provisionalId?: string
  showHeaders?: boolean
  filterKey?: string
  placeholderSearch?: string
  widthContent?: string
  panelFilters?: boolean
  setPanelFilters?: (value: boolean) => void
  filtersConfig?: any
  refresh?: boolean
  setRefresh?: (value: boolean) => void
  pagination?: boolean
  handleViewMore?: (row: any) => void
  viewMoreText?: string
  axiosInstanceKey: string
  columnGroupingModel?: any
  columnGroupHeaderHeight?: number
  filtersClear?: boolean
  filtersPanelOpen?: (value: boolean) => void
  onDoubleClick?: (arg: any) => void
  customToolbar: React.ReactNode
  setThereAreSelected?: (value: boolean) => void
  setCheckedAll?: (value: boolean) => void
  handleDownload?: () => void
  addMenuItems?: {
    text: string
    icon?: ReactNode
    onClick: () => void
  }[]
  className?: string
  headerActionsLeft?: ReactNode
  checkboxSelection?: boolean
  showDownload?: boolean
  bodyEnpoint?: any
  paramsAdditional?: any
  paginationMode?: boolean
  scrollToRowId?: string | number
}

export interface IDataPicker {
  label: string
  value: any
  width?: string
  onChange: (newValue: any) => void
  disabled?: boolean
  readOnly?: boolean
  className?: string
  height?: number
}

export interface IAutoCompleteInput {
  label: string
  placeholder?: string
  fetchOptions: (
    searchText: string,
    page: number,
    limit: number
  ) => Promise<{
    data: AutocompleteOption[]
    total: number
  }>
  onChange: (value?: AutocompleteOption | null) => void
  value?: AutocompleteOption | null
  disabled?: boolean
  required?: boolean
  error?: boolean
  helperText?: string
  itemsPerPage?: number
  height?: number | string
  minSearchLength?: number
  debounceTime?: number
  hideIcon?: boolean
  sx?: DefaultComponents.SxProps<DefaultComponents.Theme> | undefined
  minWidth?: string | number
  maxWidth?: string | number
  width?: string | number
}

export interface IDataGridBasic {
  width?: string
  headerActionsLeft?: ReactNode
  headerActionsRight?: ReactNode
  columns: any[]
  rows: any[]
  remoteRows: any[]
  endpoint?: string
  axiosInstanceKey?: string
  rowsPerPageOptions?: number[]
  setDataRemote: ((page: number, data: []) => void) | undefined
  setThereAreSelected?: (arg: any) => void
}

export interface IModal {
  children?: React.ReactNode
  disabled?: boolean
  handleClose: () => void
  showAcceptButton?: boolean
  handleAccept?: () => void
  closeButtonText?: string
  acceptButtonText?: string
}

export interface IDropdown {
  title: string
  options: string[]
  onSelect?: (option: string) => void
  disabled: boolean
}

export interface TrafficLightProps {
  readonly countsByColors?: {
    red: number
    yellow: number
    green: number
  }
  readonly tooltipMessages?: {
    red?: string
    yellow?: string
    green?: string
  }
  readonly label: string
  readonly onCircleClick?: (type: CircleType) => void
}

export interface ModalAlertProps {
  title: string
  message?: string | React.ReactNode
  variant?: 'success' | 'error' | 'warning'
  textSuccess?: string
  textCancel?: string
  handleCancel?: () => void
  onClick?: () => void
  children?: React.ReactNode
  orientation?: 'vertical' | 'horizontal'
  disabled?: boolean
  onKeyDown?: (e: any) => void
  autoFocus?: boolean
  customStyles?: React.CSSProperties
  containerClassName?: string
  contentClassName?: string
  iconClose?: boolean
  className?: string
  width?: string
  widthAccept?: string
  widthCancel?: string
  showIconClose?: boolean
  onIconClose?: () => void
}

export interface AlertMuiProps extends DefaultComponents.AlertProps {
  message: string
  iconMapping?: Partial<
    Record<
      NonNullable<DefaultComponents.AlertProps['severity']>,
      React.ReactNode
    >
  >
  duration?: number
  open: boolean
  onClose?: () => void
}
export interface IBreadcrumbLink {
  name: string
  path: string
}

export interface ContentWrapperProps {
  children: React.ReactNode
  title: string
  actionBack?: () => void
  width?: string
  textSize?: string
  className?: string
  viewTop?: boolean
  links?: IBreadcrumbLink[]
}
export interface ToastProps {
  text: string
  duration?: number
  onClose: () => void
  width?: string
  variant?: 'success' | 'error' | 'warning' | 'info'
  thereIsActionBtn?: boolean
  actionBtnText?: string
  onClickActionBtn?: () => void
}

export type RootState = {
  auth: Record<string, string>
  language: {
    language: string
  }
  UserManagementStore: unknown
  user: {
    data: unknown | null
    loading: boolean
    error: string | null
  }
  registerProfileStore: unknown
  modal: unknown
  registerGuarantes: InitialStateRegister
}

export interface AlertStackProps {
  alerts: StackAlert[]
  onClose: (id: number) => void
}

```

## src/shared/types/dispatchStateCommon.d.ts

```typescript
import { Dispatch, SetStateAction } from 'react'

export type DispatchStateCommon<T> = Dispatch<SetStateAction<T>>

```

## src/shared/types/generate-logs.d.ts

```typescript
export type DispatchGenerateLogsProps = {
  actionType: string
  actionDestination: string
}

```

## src/shared/types/global.d.ts

```typescript
interface UserNubo {
  participantId: number
  id: number
  status: {
    id: number
  }
  country: {
    id: number
  }
}

declare global {
  interface Window {
    GenerateLogs?: (
      user: string,
      logData: {
        actionType: string
        actionDestination: string
        participantId: number
        countryId: number
        userNuboId: number
        statusId: number
      }
    ) => Promise<any>

    infoUserNubo?: UserNubo
  }
}

export {}

```

## src/shared/types/processRegister.d.ts

```typescript
export type StatesProcessRegister =
  'ERROR' | 'PROCESS_CONFIRM' | 'UPLOADING_REGISTER' | 'SUCCESS' | 'IDLE'

```

## src/shared/types/storeGuarantee.d.ts

```typescript
import { AfpFound } from '@/features/register-guaranties/types/afpFound'
import { AccountGuaranteeOption } from '@/features/register-guaranties/types/getAccountGuarantee'

import { StatesProcessRegister } from './processRegister'

export interface GuaranteeData {
  custody: Partial<Custody>
  participant: Partial<Participant>
  typeGuarantee: Partial<TypeGuarantee>
  bank: Partial<Bank>
  country: Partial<CountryGuarantee>
  typeAccount: Partial<TypeAccount>
  accountGuarantee: Partial<AccountGuarantee>
  mnemonic: Partial<Mnemonic>
  money: Partial<Money>
  isin: Partial<ISIN>
  participantOrigin: Partial<ParticipantOrigin>
  investorOrigin: Partial<InvestorOrigin>
  originAccountRequired: Partial<InvestorOrigin>
  finalBeneficiary: Partial<FinalBeneficiary>
  quantityGuarantee: Partial<QuantityGuarantee>
  guaranteeVolume: Partial<GuaranteeVolume>
  selfLiberation: Partial<SelfLiberation>
  price: Partial<Price>
  titleObject: boolean
  fondo: AfpFound
}
// Subinterfaces

type CommonValue = string | number
export interface CountryGuarantee {
  id: number
  code: string
  name: string
}

export interface TypeGuarantee {
  id: number
  description: string
  category: string
  detail: string
}

export interface Bank {
  id: number
  label: string
  value: CommonValue
}

export interface TypeAccount {
  id: number
  description: string | null
  category: string | null
  detail: string | null
}

export interface AccountGuarantee extends AccountGuaranteeOption {
  id?: number
  label?: string
  value?: CommonValue
}

export interface Mnemonic {
  id: number
  label: string
  value: CommonValue
}

export interface Money {
  id: number
  code: string
  name: string
}

export interface ISIN {
  id?: number
  label: string
  value: number | string
}

export interface ParticipantOrigin {
  id: number
  label: string
  value: number | string
  required: boolean
}

export interface InvestorOrigin {
  id: number
  label: string
  value: number | string
  required: boolean
}

export interface FinalBeneficiary {
  id: number
  label: string
  value: number | string
}

export interface QuantityGuarantee {
  value: number
}

export interface GuaranteeVolume {
  value: number
  isValid: boolean
}

export interface SelfLiberation {
  value: boolean
  label: string
}

export interface Price {
  value: number
}

export interface ProcessRegister {
  state: StatesProcessRegister
  messageError?: string
}
export interface InitialStateRegister {
  processRegister?: ProcessRegister
  infoRegister: GuaranteeData
  errorInfoRegister: Record<string, string>
}

```

## src/shared/types/toast.d.ts

```typescript
export type ToastState = {
  show: boolean
  message: string
}

```

## src/shared/types/user-type.d.ts

```typescript
export type UserType = 'EXTERNAL' | 'INTERNAL' | 'PARTICIPANTE'

```

## src/shared/utils/capitalize.ts

```typescript
export const capitalize = (str: string) => {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

export const capitalizeEachWord = (str: string) => {
  if (!str) return ''

  // Split the string by spaces, capitalize each word, then join back with spaces
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

```

## src/shared/utils/encodeJson.ts

```typescript
export const encodeJson = (obj: unknown) => btoa(JSON.stringify(obj))
export const decodeJson = <T>(obj: string): T => JSON.parse(atob(obj))

```

## src/shared/utils/formatAmount.ts

```typescript
export const formatAmount = (value: number) => {
  if (typeof value !== 'number' || isNaN(value)) return '--'
  const roundedNumber = value.toFixed(2)
  const [integerPart, decimalPart] = roundedNumber.split('.')
  const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  return `${formattedIntegerPart},${decimalPart}`
}

```

## src/shared/utils/formatNumber.ts

```typescript
export const formatNumber = (
  number: number,
  options?: Intl.NumberFormatOptions
) => {
  const n = Number(number)
  if (isNaN(n)) return '-'

  return new Intl.NumberFormat(
    'de-DE',
    options ?? {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }
  ).format(number)
}

```

## src/shared/utils/formatNumberWithThousandsSeparator.ts

```typescript
export const formatNumberWithThousandsSeparator = (
  number: number | undefined,
  addDollarSign: boolean = false,
  includeDecimals: boolean = true,
  decimals = 2
) => {
  if (typeof number !== 'number' || isNaN(number)) return '--'
  const roundedNumber = includeDecimals
    ? number.toFixed(decimals)
    : number.toFixed(0)
  const [integerPart, decimalPart] = roundedNumber.split('.')
  const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  const formattedNumber =
    includeDecimals && decimalPart
      ? `${formattedIntegerPart},${decimalPart}`
      : formattedIntegerPart
  return addDollarSign ? `$${formattedNumber}` : formattedNumber
}

```

## src/shared/utils/formatToLocalDate.ts

```typescript
import isDevMode from '@/shared/utils/isDevMode'

/**
 * Formats a date string to DD/MM/YYYY format
 * Primarily designed for ISO format dates (YYYY-MM-DD)
 *
 * @param {string} dateString - The date string to format (e.g. "2024-05-05")
 * @return {string} The date formatted as DD/MM/YYYY (e.g. "05/05/2024")
 */
export const formatToLocalDate = (dateString: string): string => {
  if (!dateString) return '-'

  try {
    // Handle ISO format (YYYY-MM-DD)
    if (dateString.includes('-')) {
      const [year, month, day] = dateString.split('-')
      if (year && month && day) {
        return `${day}/${month}/${year}`
      }
    }

    // If it already has slashes, return as is (assuming it's already formatted)
    if (dateString.includes('/')) {
      return dateString
    }

    // Default fallback - just return the original string
    return dateString
  } catch (error) {
    if (isDevMode()) {
      console.error('Error formatting date:', error)
    }
    return dateString
  }
}

```

## src/shared/utils/formatterSpecificAccount.ts

```typescript
export const formatterSpecificAccount = (str: string) => {
  const specificAccount = str || ''
  const formattedAccount =
    specificAccount?.length > 8
      ? `${specificAccount.substring(0, 8)}.${specificAccount.substring(8)}`
      : specificAccount
  return formattedAccount
}

```

## src/shared/utils/fullNameToDisplay.ts

```typescript
export const fullNameToDisplay = ({
  lastName,
  firstName,
  companyName
}: {
  lastName: string
  firstName: string
  companyName: string
}) => {
  if (lastName && firstName) {
    const formattedFirstName = firstName
      .toLowerCase()
      .replace(/\b\w/g, (char: string) => char.toUpperCase())
    const formattedLastName = lastName
      .toLowerCase()
      .replace(/\b\w/g, (char: string) => char.toUpperCase())
    return `${formattedFirstName} ${formattedLastName}`
  }
  return companyName || '-'
}

```

## src/shared/utils/getCurrentDateTime.ts

```typescript
export const getCurrentDatetime = (): string => {
  const date = new Date()
  const offset = date.getTimezoneOffset() * 60000 // offset in milliseconds
  const localDate = new Date(date.getTime() - offset)
  return localDate.toISOString().split('.')[0]
}

```

## src/shared/utils/getFromLocalStorage.ts

```typescript
export const getFromLocalStorage = (propName: string) =>
  localStorage.getItem(propName)

```

## src/shared/utils/getHeaders.ts

```typescript
import { STORAGE_KEYS } from '@/shared/constants/storageKeys'
import { getCurrentDatetime } from '@/shared/utils/getCurrentDateTime'
import { getFromLocalStorage } from '@/shared/utils/getFromLocalStorage'

export const getHeaders = async () => {
  const token = getFromLocalStorage(STORAGE_KEYS.ACCESS_TOKEN)
  const client_datetime = getCurrentDatetime()

  return {
    Authorization: `Bearer ${token}`,
    client_datetime,
    client_user: getFromLocalStorage(STORAGE_KEYS.USERNAME)
  }
}

```

## src/shared/utils/isDevMode.ts

```typescript
import { DEVELOPMENT_MODE, NODE_ENV } from '@/shared/constants/enviroment'

const isDevMode = (): boolean => {
  return DEVELOPMENT_MODE === NODE_ENV
}

export default isDevMode

```

## src/shared/utils/onKeyDownNumber.ts

```typescript
import type { KeyboardEvent } from 'react'

export const onKeyDownNumber = (e: KeyboardEvent<HTMLDivElement>) => {
  if (['e', 'E', '+', '-'].includes(e.key)) e.preventDefault()
}

```

## src/shared/utils/transformAmountToPercentage.ts

```typescript
export const transformAmountToPercentage = (value: number) => {
  if (typeof value !== 'number' || isNaN(value)) return '--'

  const formattedValue = value.toFixed(3)
  const localizedValue = formattedValue.replace('.', ',')

  // Add % symbol
  return `${localizedValue} %`
}

```

## src/shared/utils/transformOptionsAutoComplete.ts

```typescript
import { AutocompleteOption } from '@/shared/types/AutoCompleteOption'
import { AutoCompleteOptions } from '@/shared/types/autoCompleteStructure'

export const transformOptionsAutoComplete = <T>(
  resService: AutoCompleteOptions<T>,
  callbackFn: (item: T) => AutocompleteOption
) => {
  const data = resService?.content.map((item) => callbackFn(item as T)) ?? []
  const options: AutocompleteOption[] = []
  const setData = new Set(resService.content)
  setData.forEach((option) => {
    const optionResult = callbackFn(option)
    options.push(optionResult)
  })
  return { data, total: resService.totalPages ?? 0 }
}

```

## src/vite-env.d.ts

```typescript
/// <reference types="vite/client" />

```

## tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'link-color': '#FF4201',
        primary: '#3D3D3D'
      },
      padding: {
        '3px': '3px',
        '5px': '5px',
        '14px': '14px',
        '30px': '30px'
      },
      fontSize: {
        '13px': '13px'
      },
      gap: {
        '13px': '13px',
        '15px': '15px',
        '30px': '30px'
      },
      borderColor: {
        'border-gray': '#E0E0E0'
      },
      borderRadius: {
        '4px': '4px'
      },
      boxShadow: {
        grey: '0px 3px 3px -2px #00000033, 0px 3px 4px 0px #00000024, 0px 1px 8px 0px #0000001F'
      },
      maxWidth: {
        '190px': '190px',
        '205px': '205px',
        '263px': '263px',
        '368px': '368px',
        '353px': '353px',
        '268px': '268px',
        '460px': '460px',
        '998px': '998px'
      },
      maxHeight: {
        '39px': '39px',
        '46px': '46px'
      },
      margin: {
        '10px': '10px',
        '15px': '15px',
        '13px': '13px'
      },
      width: {
        '45%': '45%',
        '99%': '99%'
      },
      zIndex: {
        100: '100'
      }
    }
  },
  fontFamily: {
    Roboto: ['"Roboto"', 'serif']
  },
  daisyui: { themes: false, base: false },
  plugins: []
}

```

## tsconfig.json

```json
{
  "compilerOptions": {
    "esModuleInterop": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"],
      "@assets/*": ["./src/assets/*"]
    },
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}

```

## vite.config.ts

```typescript
import federation from '@originjs/vite-plugin-federation'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import viteCompression from 'vite-plugin-compression'

import packageJson from './package.json'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
      react(),
      federation({
        name: 'remote-guarantees-management',
        remotes: {
          remoteUtilities: env.VITE_REMOTE_UTILITIES,
          remoteShell: env.VITE_REMOTE_PARENT
        },
        exposes: {
          './mf-guarantees-management': './src/main.tsx'
        },
        shared: packageJson.dependencies
      }),
      // ====================================
      // PRE-COMPRESIÓN GZIP
      // ====================================
      viteCompression({
        verbose: true, // Log de archivos comprimidos
        disable: false,
        threshold: 10240, // Solo comprimir archivos > 10KB
        algorithm: 'gzip',
        ext: '.gz',
        deleteOriginFile: false // Mantener archivo original
      })
    ],
    test: {
      environment: 'happy-dom'
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    build: {
      modulePreload: false,
      target: 'esnext',
      minify: false,
      cssCodeSplit: false
    }
  }
})

```
