# nbo-png-operaciones-front

Código fuente de producción y configuraciones. Captura local: 28/10/2026.

Paquete: operation-management. Se incluyen 314 archivos: 295 de TypeScript/JavaScript y 19 de estilos, recursos de texto, documentación y configuración.

Cada sección identifica la ruta original y conserva su contenido completo, salvo credenciales literales ocultadas en configuraciones. El código TypeScript/JavaScript se conserva sin cambios. Incluye componentes, páginas, hooks, servicios, tipos, rutas, estado, estilos, SVG, package.json, configuración de compilación y despliegue disponible.

Se excluyen tests y su configuración, dependencias instaladas, lockfiles, salidas generadas, cachés, metadatos de Git, instrucciones de agentes y recursos binarios. Los datos mock ubicados en el código de producción se conservan porque pueden ser consumidos por la aplicación.

Valores de credenciales ocultados: 0. Referencias a variables de entorno conservadas.

## Módulos

- custodians
- custodians-reports
- operations-management
- reports
- settlement-file
- shipping-cycles

## Dependencias de ejecución

- @hookform/resolvers: ^5.2.2
- @nuam/common-fe-lib-components: 1.34.0
- @react-pdf/renderer: ^4.1.5
- @reduxjs/toolkit: ^2.3.0
- axios: ^1.9.0
- date-fns: ^4.1.0
- dayjs: ^1.11.19
- file-saver: ^2.0.5
- i18next: ^25.3.2
- jszip: ^3.10.1
- papaparse: ^5.4.1
- patch-package: ^8.0.1
- react: ^18.3.1
- react-dom: ^18.3.1
- react-hook-form: ^7.64.0
- react-i18next: ^15.6.1
- react-redux: ^9.1.2
- react-router-dom: ^6.27.0
- xlsx: https://cdn.sheetjs.com/xlsx-0.20.3/xlsx-0.20.3.tgz
- yup: ^1.7.1

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
15. `src/Declares/declares.ts`
16. `src/Declares/index.ts`
17. `src/declares.d.ts`
18. `src/features/custodians-reports/CustodiansReports.tsx`
19. `src/features/custodians-reports/components/CustodianGenerateReport.tsx`
20. `src/features/custodians-reports/components/ReportPackageTab.tsx`
21. `src/features/custodians-reports/components/ReportUpdatesTab.tsx`
22. `src/features/custodians-reports/components/ToolbarActions.tsx`
23. `src/features/custodians-reports/constants/endpoints.ts`
24. `src/features/custodians-reports/index.ts`
25. `src/features/custodians-reports/services/custodiansReportsService.ts`
26. `src/features/custodians-reports/types/index.ts`
27. `src/features/custodians-reports/utils/columns.tsx`
28. `src/features/custodians-reports/utils/filtersConfig.ts`
29. `src/features/custodians-reports/utils/statusUtils.ts`
30. `src/features/custodians-reports/utils/updatesColumns.tsx`
31. `src/features/custodians-reports/utils/updatesFiltersConfig.ts`
32. `src/features/custodians/CustodianDetails.tsx`
33. `src/features/custodians/CustodianManagement.tsx`
34. `src/features/custodians/components/AdmissionModal.tsx`
35. `src/features/custodians/components/CustodianTotals.tsx`
36. `src/features/custodians/components/ModalErrorCustodian.tsx`
37. `src/features/custodians/components/RejectionForm.tsx`
38. `src/features/custodians/components/ToolbarActions.tsx`
39. `src/features/custodians/constants/custodianDetails.tsx`
40. `src/features/custodians/constants/index.ts`
41. `src/features/custodians/hooks/useCustodianActions.tsx`
42. `src/features/custodians/hooks/useCustodianColumns.tsx`
43. `src/features/custodians/hooks/useCustodianDetails.ts`
44. `src/features/custodians/hooks/useCustodianNotifications.ts`
45. `src/features/custodians/services/custodianService.ts`
46. `src/features/custodians/services/getCustodianDetails.ts`
47. `src/features/custodians/services/getIdentificationTypes.ts`
48. `src/features/custodians/services/getMnemonicSearch.ts`
49. `src/features/custodians/services/getOperationCustodians.ts`
50. `src/features/custodians/services/getOperationParticipants.ts`
51. `src/features/custodians/types/custodianDetails.d.ts`
52. `src/features/custodians/types/custodianPackages.d.ts`
53. `src/features/custodians/types/index.ts`
54. `src/features/custodians/types/resultsSearchMnemonic.ts`
55. `src/features/custodians/types/validationsAccountCommon.d.ts`
56. `src/features/custodians/utils/columns.tsx`
57. `src/features/custodians/utils/custodianOptionsToolbar.tsx`
58. `src/features/custodians/utils/errorColumns.tsx`
59. `src/features/custodians/utils/filtersConfig.ts`
60. `src/features/custodians/utils/selectCheckboxCustodian.ts`
61. `src/features/operations-management/components/AssignmentAccountTitle.tsx`
62. `src/features/operations-management/components/AssignmentAdministratorFicOptions.tsx`
63. `src/features/operations-management/components/AssignmentButtonAction.tsx`
64. `src/features/operations-management/components/AssignmentClosureModal.tsx`
65. `src/features/operations-management/components/AssignmentOperation.tsx`
66. `src/features/operations-management/components/AssignmentOriginOptions.tsx`
67. `src/features/operations-management/components/AssignmentToolbar.tsx`
68. `src/features/operations-management/components/BeneficiaryDetailTab.tsx`
69. `src/features/operations-management/components/BeneficiaryToolbar.tsx`
70. `src/features/operations-management/components/BeneficiaryTotals.tsx`
71. `src/features/operations-management/components/CorrectionButtonAction.tsx`
72. `src/features/operations-management/components/CorrectionConfirmationModal.tsx`
73. `src/features/operations-management/components/CorrectionDetailContent.tsx`
74. `src/features/operations-management/components/CorrectionDetailSection.tsx`
75. `src/features/operations-management/components/CorrectionModal.tsx`
76. `src/features/operations-management/components/CorrectionToolbar.tsx`
77. `src/features/operations-management/components/CustodianSelect.tsx`
78. `src/features/operations-management/components/CustomToolbarOperation.tsx`
79. `src/features/operations-management/components/FicAdministratorSelect.tsx`
80. `src/features/operations-management/components/FiltersComponent.tsx`
81. `src/features/operations-management/components/FolioTransfer.tsx`
82. `src/features/operations-management/components/InputAssignmentTable.tsx`
83. `src/features/operations-management/components/InputEdit.tsx`
84. `src/features/operations-management/components/OperationDetailTabsContainer.tsx`
85. `src/features/operations-management/components/OperationTrackingModal.tsx`
86. `src/features/operations-management/components/OperationsFilters.tsx`
87. `src/features/operations-management/components/OperationsToolbar.tsx`
88. `src/features/operations-management/components/SelectAssignmentTable.tsx`
89. `src/features/operations-management/components/TableAssignment.tsx`
90. `src/features/operations-management/components/VoucherDocumentC.tsx`
91. `src/features/operations-management/components/VoucherDocumentR.tsx`
92. `src/features/operations-management/components/WarningMasterAccount.tsx`
93. `src/features/operations-management/components/correct-assignment/CorrectAssignmentToolbar.tsx`
94. `src/features/operations-management/components/headerActionsRight.tsx`
95. `src/features/operations-management/components/hooks/useBeneficiaryDetail.tsx`
96. `src/features/operations-management/components/hooks/useOperationTabsData.ts`
97. `src/features/operations-management/components/hooks/useTradeHistory.ts`
98. `src/features/operations-management/constants/BeneficiaryDetailTab.tsx`
99. `src/features/operations-management/constants/FullViewBeneficiaries.ts`
100. `src/features/operations-management/constants/assignmentClosureTableLabels.ts`
101. `src/features/operations-management/constants/assignmentOptionMode.ts`
102. `src/features/operations-management/constants/countriesCodes.ts`
103. `src/features/operations-management/constants/endpoints.ts`
104. `src/features/operations-management/constants/fieldsAssignment.ts`
105. `src/features/operations-management/constants/keysEventDispatch.ts`
106. `src/features/operations-management/constants/messagesError.ts`
107. `src/features/operations-management/constants/operationDetails.tsx`
108. `src/features/operations-management/constants/operations.ts`
109. `src/features/operations-management/constants/timeShadeOperation.ts`
110. `src/features/operations-management/constants/tradeDetails.tsx`
111. `src/features/operations-management/hooks/UseOperation.tsx`
112. `src/features/operations-management/hooks/useAssignmentAlert.ts`
113. `src/features/operations-management/hooks/useAssignmentClosureConfirm.tsx`
114. `src/features/operations-management/hooks/useAssignmentClosurePreview.tsx`
115. `src/features/operations-management/hooks/useAssignmentColumns.tsx`
116. `src/features/operations-management/hooks/useBeneficiaryDetailAssignment.tsx`
117. `src/features/operations-management/hooks/useControlFractions.ts`
118. `src/features/operations-management/hooks/useCorrectionColumns.tsx`
119. `src/features/operations-management/hooks/useCorrectionFlow.ts`
120. `src/features/operations-management/hooks/useCorrectionTableColumns.tsx`
121. `src/features/operations-management/hooks/useFolioTransfer.tsx`
122. `src/features/operations-management/hooks/useFolioTransferData.tsx`
123. `src/features/operations-management/hooks/useFolioTransferValidation.tsx`
124. `src/features/operations-management/hooks/useGetOriginTrade.ts`
125. `src/features/operations-management/hooks/useHideShadeTable.tsx`
126. `src/features/operations-management/hooks/useOperationsActions.tsx`
127. `src/features/operations-management/hooks/useOperationsDownload.ts`
128. `src/features/operations-management/hooks/useOperationsFilters.ts`
129. `src/features/operations-management/hooks/useOptionsAssignment.ts`
130. `src/features/operations-management/hooks/useOptionsCountries.ts`
131. `src/features/operations-management/hooks/useSaveAssignment.ts`
132. `src/features/operations-management/hooks/useStateFraction.ts`
133. `src/features/operations-management/hooks/useTradeHistory.ts`
134. `src/features/operations-management/hooks/useValidateOptionsAssignment.ts`
135. `src/features/operations-management/hooks/useValidationsButtonsAssignment.ts`
136. `src/features/operations-management/hooks/useValidationsFractions.ts`
137. `src/features/operations-management/pages/OperationDetails.tsx`
138. `src/features/operations-management/pages/OperationsPage.tsx`
139. `src/features/operations-management/services/Beneficiary.ts`
140. `src/features/operations-management/services/administratorFICOptions.ts`
141. `src/features/operations-management/services/assigmentCorrectionsService.ts`
142. `src/features/operations-management/services/assignmentCalculationCounted.ts`
143. `src/features/operations-management/services/assignmentCashAccount.ts`
144. `src/features/operations-management/services/assignmentClosureService.ts`
145. `src/features/operations-management/services/assignmentOriginOptions.ts`
146. `src/features/operations-management/services/assignmentValidateAccount.ts`
147. `src/features/operations-management/services/custodianOptions.ts`
148. `src/features/operations-management/services/fetchFolioOptions.ts`
149. `src/features/operations-management/services/folioTransferService.ts`
150. `src/features/operations-management/services/fullViewBeneficiaries.ts`
151. `src/features/operations-management/services/getCountryAdministration.ts`
152. `src/features/operations-management/services/getSettlement.ts`
153. `src/features/operations-management/services/operationDetails.ts`
154. `src/features/operations-management/services/patchCommission.ts`
155. `src/features/operations-management/services/saveAssignment.ts`
156. `src/features/operations-management/services/saveCorrectionEndpoint.ts`
157. `src/features/operations-management/services/updateAssignment.ts`
158. `src/features/operations-management/services/validateAssignment.ts`
159. `src/features/operations-management/services/validateCorrectAssignment.ts`
160. `src/features/operations-management/styles/beneficiariesStyles.css`
161. `src/features/operations-management/styles/operationDetailsStyle.css`
162. `src/features/operations-management/types/FullViewBeneficiaries.d.ts`
163. `src/features/operations-management/types/correction.d.ts`
164. `src/features/operations-management/types/correctionsOperations.d.ts`
165. `src/features/operations-management/types/country.d.ts`
166. `src/features/operations-management/types/dispatchState.d.ts`
167. `src/features/operations-management/types/folioTransfer.ts`
168. `src/features/operations-management/types/index.d.ts`
169. `src/features/operations-management/types/item.d.ts`
170. `src/features/operations-management/types/operationDetails.d.ts`
171. `src/features/operations-management/types/responseValidateAccount.d.ts`
172. `src/features/operations-management/types/totalCalculation.d.ts`
173. `src/features/operations-management/types/validationAssinmentActions.d.ts`
174. `src/features/operations-management/utils/assignmentCalculation.ts`
175. `src/features/operations-management/utils/beneficiaries.ts`
176. `src/features/operations-management/utils/createNewRow.ts`
177. `src/features/operations-management/utils/folioTransferColumns.tsx`
178. `src/features/operations-management/utils/fractionHandleError.ts`
179. `src/features/operations-management/utils/generateCSVReport.ts`
180. `src/features/operations-management/utils/getSide.ts`
181. `src/features/operations-management/utils/handleCalculationAmount.ts`
182. `src/features/operations-management/utils/hasEqualAccountFraction.ts`
183. `src/features/operations-management/utils/investorName.ts`
184. `src/features/operations-management/utils/mapUpdatedRows.ts`
185. `src/features/operations-management/utils/operations.tsx`
186. `src/features/operations-management/utils/operationsColumns.tsx`
187. `src/features/operations-management/utils/opertationsHeaderActions.tsx`
188. `src/features/operations-management/utils/transformFractionToSave.ts`
189. `src/features/operations-management/utils/transformFractionToSaveCorrection.ts`
190. `src/features/operations-management/utils/transformLocalTime.ts`
191. `src/features/operations-management/utils/transformSettlementToFractionsDefault.ts`
192. `src/features/operations-management/utils/validateAccountAssignment.ts`
193. `src/features/operations-management/utils/validateIsOwnPosition.ts`
194. `src/features/operations-management/utils/validationsButtonsToolbarAssignment.ts`
195. `src/features/operations-management/utils/validationsFractionsAssignment.ts`
196. `src/features/reports/components/BaseReportTab.tsx`
197. `src/features/reports/components/CashRepoFileTab.tsx`
198. `src/features/reports/components/CashRepoFixedTab.tsx`
199. `src/features/reports/components/DailyFile.tsx`
200. `src/features/reports/components/DailyFileParticipant.tsx`
201. `src/features/reports/components/DailyFileReport.tsx`
202. `src/features/reports/components/DownloadFileReport.tsx`
203. `src/features/reports/components/GenerateReport.tsx`
204. `src/features/reports/components/GenerateReportWithDaily.tsx`
205. `src/features/reports/components/SpecialOpsFileTab.tsx`
206. `src/features/reports/components/SpecialOpsFixedTab.tsx`
207. `src/features/reports/constants/CashMassiveReceiptColumns.tsx`
208. `src/features/reports/constants/CashMassiveReceiptReport.tsx`
209. `src/features/reports/constants/CashRepoFixedTabColumns.tsx`
210. `src/features/reports/constants/cashRepoFileColumns.tsx`
211. `src/features/reports/constants/endpoints.ts`
212. `src/features/reports/constants/index.ts`
213. `src/features/reports/constants/reportEndpoints.ts`
214. `src/features/reports/constants/reportFormConfig.ts`
215. `src/features/reports/constants/reportTabs.ts`
216. `src/features/reports/constants/tabConfigs.ts`
217. `src/features/reports/constants/tabLabels.ts`
218. `src/features/reports/constants/tabsComponentsList.ts`
219. `src/features/reports/enums/fileTypeOptions.ts`
220. `src/features/reports/enums/statusOptions.ts`
221. `src/features/reports/hooks/useColumnsDailyFileRepo.tsx`
222. `src/features/reports/hooks/useColumnsDailyMassiveReceipt.tsx`
223. `src/features/reports/hooks/useCreateReport.tsx`
224. `src/features/reports/hooks/useCreateReportMassive.tsx`
225. `src/features/reports/hooks/useFetchParticipantReport.ts`
226. `src/features/reports/hooks/useFieldsReportsCashFile.ts`
227. `src/features/reports/hooks/useFieldsReportsMassiveReceipt.ts`
228. `src/features/reports/hooks/useGenerateReportState.ts`
229. `src/features/reports/hooks/usePaginateReport.tsx`
230. `src/features/reports/hooks/useReport.tsx`
231. `src/features/reports/hooks/useReportDaily.ts`
232. `src/features/reports/hooks/useReportHistoryData.ts`
233. `src/features/reports/pages/reports.tsx`
234. `src/features/reports/services/report.ts`
235. `src/features/reports/services/reportGenerate.ts`
236. `src/features/reports/types/index.ts`
237. `src/features/reports/types/reports.ts`
238. `src/features/reports/utils/columnDefinitions.tsx`
239. `src/features/reports/utils/downloadFileRepo.ts`
240. `src/features/reports/utils/rulesDateCashRepo.ts`
241. `src/features/reports/utils/rulesDateMassiveReceiptRepo.ts`
242. `src/features/reports/validation/generateReportSchema.ts`
243. `src/features/settlement-file/constants/endpoints.ts`
244. `src/features/settlement-file/constants/index.ts`
245. `src/features/settlement-file/services/trades.ts`
246. `src/features/settlement-file/types/index.d.ts`
247. `src/features/shipping-cycles/ShippingCycles.tsx`
248. `src/features/shipping-cycles/components/ToolbarActions.tsx`
249. `src/features/shipping-cycles/hooks/useColumnsShippingCycles.tsx`
250. `src/features/shipping-cycles/services/getCycleOptions.ts`
251. `src/features/shipping-cycles/services/getDownloadFile.ts`
252. `src/features/shipping-cycles/services/getUsers.ts`
253. `src/features/shipping-cycles/types/index.ts`
254. `src/features/shipping-cycles/utils/fetchUsers.ts`
255. `src/features/shipping-cycles/utils/filtersConfig.ts`
256. `src/main.tsx`
257. `src/shared/assets/icons/Vector.svg`
258. `src/shared/assets/icons/eyeIcon.svg`
259. `src/shared/assets/no_data.svg`
260. `src/shared/components/DownloadFileReport.tsx`
261. `src/shared/components/PendingAdmissionsAlert/PendingAdmissionsAlert.tsx`
262. `src/shared/components/PendingAdmissionsAlert/index.ts`
263. `src/shared/components/RejectionAlert/RejectionAlert.module.css`
264. `src/shared/components/RejectionAlert/RejectionAlert.tsx`
265. `src/shared/components/RejectionAlert/index.ts`
266. `src/shared/config/methods.ts`
267. `src/shared/constants/actionCodes.ts`
268. `src/shared/constants/endpoints.ts`
269. `src/shared/constants/enviroment.ts`
270. `src/shared/constants/index.ts`
271. `src/shared/constants/initialFraction.ts`
272. `src/shared/constants/nodeEnv.ts`
273. `src/shared/constants/storageKeys.ts`
274. `src/shared/hooks/useFilterBarConfig.ts`
275. `src/shared/hooks/useGenerateLogs.ts`
276. `src/shared/hooks/useIsInternalUser.ts`
277. `src/shared/hooks/useParticipantIsCustodioan.ts`
278. `src/shared/hooks/usePendingAdmissions.ts`
279. `src/shared/hooks/useRejectionAlert.ts`
280. `src/shared/hooks/useTranslate.ts`
281. `src/shared/hooks/useUrlParams.ts`
282. `src/shared/routes/index.ts`
283. `src/shared/services/getOperationStatus.ts`
284. `src/shared/services/getOperationsTypes.ts`
285. `src/shared/services/getStatusCorrection.ts`
286. `src/shared/services/index.ts`
287. `src/shared/services/operationValidations.ts`
288. `src/shared/types/Alerts.d.ts`
289. `src/shared/types/InvestorAccount.d.ts`
290. `src/shared/types/common.d.ts`
291. `src/shared/types/declares.d.ts`
292. `src/shared/types/index.d.ts`
293. `src/shared/types/methods.ts`
294. `src/shared/types/participant.d.ts`
295. `src/shared/types/participantAccount.d.ts`
296. `src/shared/types/settlement.d.ts`
297. `src/shared/types/trade.d.ts`
298. `src/shared/utils/ErrorBoundary.tsx`
299. `src/shared/utils/downloadFileReport.ts`
300. `src/shared/utils/errors.ts`
301. `src/shared/utils/getHeaders.ts`
302. `src/shared/utils/getInfoUser.ts`
303. `src/shared/utils/handleRequest.ts`
304. `src/shared/utils/headerServices.ts`
305. `src/shared/utils/isDevMode.ts`
306. `src/shared/utils/limitDecimals.ts`
307. `src/shared/utils/localStorage.ts`
308. `src/shared/utils/parsePercentage.ts`
309. `src/shared/utils/transformOptionsAutoComplete.ts`
310. `src/vite-env.d.ts`
311. `tailwind.config.js`
312. `tsconfig.app.json`
313. `tsconfig.json`
314. `vite.config.ts`

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
# Configs
# VITE_ID_MASTER_ACCOUNT=24

# urls
# VITE_REMOTE_UTILITIES=http://localhost:5001/assets/remoteEntry.js
# VITE_REMOTE_PARENT=http://localhost:5000/assets/remoteEntry.js
# VITE_DEV_USER_MANAGEMENT=https://apisix.nubo-dev.com/user-management-api/v1
# VITE_OPERATIONS_URL=https://apisix.nubo-dev.com/operations-api/v1
# VITE_MASTER_URL=https://apisix.nubo-dev.com/master-participant-api/v1

#dev
# VITE_REMOTE_UTILITIES=https://nubo.nubo-dev.com/utils/assets/remoteEntry.js
# VITE_REMOTE_PARENT=https://nubo.nubo-dev.com/assets/remoteEntry.js
# VITE_DEV_USER_MANAGEMENT=https://apisix.nubo-dev.com/user-management-api/v1
# VITE_OPERATIONS_URL=https://apisix.nubo-dev.com/operations-api/v1
# VITE_MASTER_URL=https://apisix.nubo-dev.com/master-participant-api/v1

# Despliegues
VITE_REMOTE_UTILITIES=VITE_REMOTE_UTILITIES
VITE_REMOTE_PARENT=VITE_REMOTE_PARENT
VITE_DEV_USER_MANAGEMENT=VITE_DEV_USER_MANAGEMENT
VITE_OPERATIONS_URL=VITE_OPERATIONS_URL
VITE_MASTER_URL=VITE_MASTER_URL
VITE_ID_MASTER_ACCOUNT=VITE_ID_MASTER_ACCOUNT

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
      registry_repository: operaciones-front
      registry_project: nubo
      ubuntu_version: latest
      port_exposed: 80
      mui_usage: 'true'
      manifest_dev: kustomization.yaml
      manifest_qa: kustomization.yaml
      manifest_preprod: kustomization.yaml
      manifest_path_dev: overlays/development/apps/operaciones-front
      manifest_path_qa: overlays/testing-qa/apps/operaciones-front
      manifest_path_preprod: overlays/release/apps/operaciones-front
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
  "plugins": ["@trivago/prettier-plugin-sort-imports"],
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
  "trailingComma": "none",
  "endOfLine": "lf"
}

```

## README.md

````markdown
# React + TypeScript + Vite

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
  }.
})
```

````

## eslint.config.js

```javascript
import js from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    parserOptions: {
      tsconfigRootDir: __dirname,
      project: ['./tsconfig.json']
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn'
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
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Operaciones</title>
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
  "name": "operation-management",
  "private": true,
  "version": "0.328.0-rc.5",
  "type": "module",
  "scripts": {
    "dev": "vite --port 5005 --strictPort",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview --port 5005 --strictPort",
    "serve": "vite preview --port 5005 --strictPort",
    "start": "npm run build && npm run preview",
    "watch": "npx vite build --watch",
    "test": "vitest run --coverage",
    "test:run": "vitest run",
    "test:coverage": "vitest run --coverage",
    "prepare": "husky"
  },
  "dependencies": {
    "@hookform/resolvers": "^5.2.2",
    "@nuam/common-fe-lib-components": "1.34.0",
    "@react-pdf/renderer": "^4.1.5",
    "@reduxjs/toolkit": "^2.3.0",
    "axios": "^1.9.0",
    "date-fns": "^4.1.0",
    "dayjs": "^1.11.19",
    "file-saver": "^2.0.5",
    "i18next": "^25.3.2",
    "jszip": "^3.10.1",
    "papaparse": "^5.4.1",
    "patch-package": "^8.0.1",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.64.0",
    "react-i18next": "^15.6.1",
    "react-redux": "^9.1.2",
    "react-router-dom": "^6.27.0",
    "xlsx": "https://cdn.sheetjs.com/xlsx-0.20.3/xlsx-0.20.3.tgz",
    "yup": "^1.7.1"
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
    "@vitejs/plugin-react": "^4.3.3",
    "@vitest/coverage-v8": "2.1.8",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.13.0",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.13",
    "globals": "^15.11.0",
    "happy-dom": "^15.11.7",
    "husky": "^9.1.7",
    "jsdom": "^25.0.1",
    "lint-staged": "^16.4.0",
    "patch-package": "^8.0.1",
    "postcss": "^8.4.45",
    "prettier": "^3.6.2",
    "tailwindcss": "^3.4.14",
    "typescript": "~5.6.2",
    "typescript-eslint": "^8.10.0",
    "vite": "^5.4.9",
    "vite-plugin-compression": "^0.5.1",
    "vitest": "^2.1.8"
  },
  "lint-staged": {
    "*.{ts,tsx,js,jsx,json,css,md}": "prettier --write"
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
@tailwind components;
@tailwind utilities;

```

## src/App.tsx

```tsx
import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Spinner } from 'remoteUtilities/components-mf-utilities'

import './App.css'
import { ROUTES } from './shared/routes'

// Lazy loaded components
const Operations = lazy(
  () => import('./features/operations-management/pages/OperationsPage')
)

const OperationDetails = lazy(
  () => import('./features/operations-management/pages/OperationDetails')
)

const ReportSubmodule = lazy(() =>
  import('./features/reports/pages/reports').then((m) => ({
    default: m.ReportSubmodule
  }))
)

const ShippingCycles = lazy(() =>
  import('./features/shipping-cycles/ShippingCycles').then((m) => ({
    default: m.default
  }))
)

const CustodianManagement = lazy(() =>
  import('./features/custodians/CustodianManagement').then((m) => ({
    default: m.CustodianManagement
  }))
)

const CustodianDetails = lazy(() =>
  import('./features/custodians/CustodianDetails').then((m) => ({
    default: m.CustodianDetails
  }))
)
const CustodiansReports = lazy(() =>
  import('./features/custodians-reports').then((m) => ({
    default: m.CustodiansReports
  }))
)

// comment
function App() {
  return (
    <>
      <Routes>
        <Route
          path={ROUTES.ROOT}
          element={
            <Suspense fallback={<Spinner />}>
              <Operations />
            </Suspense>
          }
        />
        <Route
          path={`${ROUTES.OPERATIONS}/:tradeId`}
          element={
            <Suspense fallback={<Spinner />}>
              <OperationDetails />
            </Suspense>
          }
        />

        <Route
          path={ROUTES.REPORTS}
          element={
            <Suspense fallback={<Spinner />}>
              <ReportSubmodule />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.SHIPPING_CYCLES}
          element={
            <Suspense fallback={<Spinner />}>
              <ShippingCycles />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.CUSTODIAN_MANAGEMENT}
          element={
            <Suspense fallback={<Spinner />}>
              <CustodianManagement />
            </Suspense>
          }
        />
        <Route
          path={`${ROUTES.CUSTODIAN_MANAGEMENT_DETAILS}/:packageNumber`}
          element={
            <Suspense fallback={<Spinner />}>
              <CustodianDetails />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.CUSTODIAN_REPORTS}
          element={
            <Suspense fallback={<Spinner />}>
              <CustodiansReports />
            </Suspense>
          }
        />
      </Routes>
    </>
  )
}

export default App

```

## src/Declares/declares.ts

```typescript
import { ReactNode } from 'react'

export interface CalendarRangeProps {
  onDateChange?: (date: { from?: Date; to?: Date }) => void
}

export interface SidePanelProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children?: React.ReactNode
}

export interface NewTableProps {
  columns: Column[]
  data: any[]
  headerActions?: Action[]
  placeholderSearch?: string
  onAction?: (action: Action) => void
  getData?: (data: []) => void
  rowsPerPageOptions?: number[]
  renderPagination?: (props: PaginationProps) => JSX.Element
  filtersClear?: boolean
  filtersPanelOpen?: (value: boolean) => void
}

export interface DataGridBasicProps {
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

export interface InputFieldProps {
  label: string
  variant: 'outlined' | 'filled' | 'standard'
  size?: 'small' | 'medium'
  className?: string
  onChange?: (value: string) => void
  onKeyDown?: (
    event: React.KeyboardEvent<HTMLInputElement>,
    value: string
  ) => void
}
export interface ModalContentProps {
  className?: string
  children: ReactNode
  handleClose: (arg: boolean) => void
  handleAccept: () => void
  title?: string
  description?: string
  btnAceptText?: string
  btnCancelText?: string
}

export interface CounterState {
  value: number
}
export interface StepperProps {
  active: number
}
export interface InputProps {
  label: string
  id: string
  type: string
}

export interface ModalLoadProps {
  reset: () => void
  progress: number
  message: string
  fileName: string
  closeButtonText?: string
}

export interface ButtonProps {
  name: string
  onClick: () => void
  type?: 'button' | 'submit' | 'reset'
  size?: 'small' | 'medium' | 'large'
  variant?: 'primary' | 'secondary' | 'outline'
  disabled?: boolean
  className?: string
}

interface Option {
  label: string
  value: string | number | boolean
}

export interface SelectProps {
  options: Option[] | { options: Option[] }
  onChange: (value: string | number | boolean) => void
  value: string | number | boolean
  error?: string
  className?: string
  placeholder?: string
  width?: string
}

export interface FilterSelectProps {
  label: string
  options: Option[] | { options: Option[] }
  required: boolean
  onChange: (label: string, value: string | number | boolean) => void
  value: string | number | boolean
  error?: string
  className?: string
  placeholder?: string
  width?: string
}

export interface HeaderProps {
  title: string
  user: string
  onClick: () => void
}

export interface InfoLabelsProps {
  info: { label: string; value: string }[]
  title?: string
}

export interface TableProps {
  data: { perfil: string; alcance: string }[]
}

export interface DataTableProps {
  title: string
  data: Array<{ [key: string]: any }>
  columns: Array<{ header: string; accessor: string }>
}

export interface ModalProps {
  children?: React.ReactNode
  disabled?: boolean
  handleClose: () => void
  showAcceptButton?: boolean
  handleAccept?: () => void
  closeButtonText?: string
  acceptButtonText?: string
}

export interface ModalWindowProps {
  title: string
  message: string // El mensaje puede contener HTML
  variant?: 'success' | 'error' | 'warning'
  textSuccess?: string
  textCancel?: string
  handleCancel?: () => void
  onClick: () => void
}

interface Column {
  name: string
  width: number
  render?: (row: any) => JSX.Element
}

interface Action {
  label: string
  type: string
  url?: string
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
  onAction?: (action: Action) => void
  rowsPerPageOptions?: number[]
  renderPagination?: (props: PaginationProps) => JSX.Element
}

export interface ToggleProps {
  checked: boolean
  onChange: () => void
  className?: string
}

export interface ModalAlertProps {
  title: string
  message?: string
  variant?: 'success' | 'error' | 'warning' | 'delete' | 'none'
  textSuccess?: string
  textCancel?: string
  handleCancel?: () => void
  onClick?: () => void
  children?: React.ReactNode
  orientation?: 'vertical' | 'horizontal'
  disabled?: boolean
  containerClassName?: string
  width?: string
  widthAccept?: string
  widthCancel?: string
  padding?: string
  marginTop?: string
  textAlign?: 'left' | 'center' | 'right'
  fontWeight?: string
  showIconClose?: boolean
  onIconClose?: () => void
  buttonsAlign?: 'center' | 'right'
}

export interface ToastProps {
  text: string
  duration?: number
  onClose: () => void
}

export interface ContentWrapperProps {
  children: React.ReactNode
  title: string
  actionBack?: () => void
  width?: string
  textSize?: string
  className?: string
}

export interface TooltipProps {
  message: string
  children: React.ReactNode
}

export interface BoxInfoProps {
  columns: Array<{
    title: string
    rows: Array<{
      label: string
      value: string | number
    }>
  }>
}

interface Tab {
  label: string
  content: React.ReactNode
}

export interface TabComponentProps {
  tabs: Tab[]
  children?: React.ReactNode
}

export interface ModalLoadProps {
  reset: () => void
  progress: number
  message: string
  fileName: string
  closeButtonText?: string
}

export interface TabsProps {
  contentSettlement: {
    content: React.ReactNode
  }
  contentReceipts?: React.ReactNode
  contentCorrectedOperations?: React.ReactNode
}

export interface FilterBarProps {
  config: any
}

export interface UseScheduleValidationParams {
  actionCode: string
  onSuccess: () => void
  onCancel?: () => void
  isClosingTimeSecondary?: boolean
}

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
  readonly onCircleClick?: (type: CircleType) => void
}

export interface StatusChipProps {
  /** Valor crudo que llega del backend. Puede ser cualquier string. */
  value: string | null | undefined
  /** Override del label. Si no se pasa, usa el canónico del mapa. */
  label?: string
  /** Tamaño del chip. Default: 'md' */
  size?: 'sm' | 'md'
  /** Clase CSS adicional para overrides puntuales */
  className?: string
}

export interface DefaultValueFieldProps {
  value?: string | null | boolean
  defaultValue?: string
  renderValue?: string | number
}

```

## src/Declares/index.ts

```typescript
export * from './declares'

```

## src/declares.d.ts

```typescript
/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'remoteUtilities/components-mf-utilities/NewTable' {
  import { NewTableProps } from './Declares/declares'
  export const NewTable: React.ComponentType<NewTableProps>
}
declare module 'remoteUtilities/components-mf-utilities/FilterBar' {
  import { FilterBarProps } from './Declares/declares'
  export const FilterBar: React.ComponentType<FilterBarProps>
}
declare module 'remoteUtilities/components-mf-utilities/ContentWrapper' {
  import { ContentWrapperProps } from './Declares/declares'
  export const ContentWrapper: React.ComponentType<ContentWrapperProps>
}
declare module 'remoteUtilities/components-mf-utilities/ModalAlert' {
  import { ModalAlertProps } from './Declares/declares'
  export const ModalAlert: React.ComponentType<ModalAlertProps>
}
declare module 'remoteUtilities/components-mf-utilities/Spinner' {
  import { SpinnerProps } from './Declares/declares'
  export const Spinner: React.ComponentType<SpinnerProps>
}
declare module 'remoteUtilities/components-mf-utilities/Toast' {
  import { ToastProps } from './Declares/declares'
  export const Toast: React.ComponentType<ToastProps>
}
declare module 'remoteUtilities/components-mf-utilities/useFilteredEndpoint' {
  import { useFilteredEndpointProps } from './Declares/declares'
  export const useFilteredEndpoint: (str: string) => useFilteredEndpointProps
}
declare module 'remoteUtilities/components-mf-utilities' {
  import {
    ButtonProps,
    HeaderProps,
    InfoLabelsProps,
    InputProps,
    BoxInfoProps,
    SelectProps,
    StepperProps,
    TableProps,
    DataTableProps,
    ModalProps,
    ModalWindowProps,
    TabComponentProps,
    NewTableProps,
    ToggleProps,
    ModalAlertProps,
    ToastProps,
    ContentWrapperProps,
    TooltipProps,
    SidePanelProps,
    ModalLoadProps,
    CalendarRangeProps,
    FilterSelectProps,
    ModalContentProps,
    DataGridBasicProps,
    InputFieldProps,
    TabsProps,
    FilterBarProps,
    CustomTabsProps,
    IDropdown
  } from './Declares/declares'

  export const Input: React.ComponentType<InputProps>
  export const InputForm: React.ComponentType<InputFormProps>
  export const Button: React.ComponentType<ButtonProps>
  export const ButtonMui: React.ComponentType<ButtonProps>
  export const Select: React.ComponentType<SelectProps>
  export const FilterSelect: React.ComponentType<FilterSelectProps>
  export const TableSelect: React.ComponentType<SelectProps>
  export const Stepper: React.ComponentType<StepperProps>
  export const Spinner: React.ComponentType
  export const Header: React.ComponentType<HeaderProps>
  export const InfoLabels: React.ComponentType<InfoLabelsProps>
  export const SearchSelect: React.ComponentType<SelectProps>
  export const Table: React.ComponentType<TableProps>
  export const DataTable: React.ComponentType<DataTableProps>
  export const Modal: React.ComponentType<ModalProps>
  export const ModalWindow: React.ComponentType<ModalWindowProps>
  export const NewTable2: React.ComponentType<NewTableProps>
  export const NewTable: React.ComponentType<NewTableProps>
  export const NewTableBeneficiaries: React.ComponentType<NewTableProps>
  export const NewTableOperations: React.ComponentType<NewTableProps>
  export const Toggle: React.ComponentType<ToggleProps>
  export const ModalAlert: React.ComponentType<ModalAlertProps>
  export const Toast: React.ComponentType<ToastProps>
  export const ContentWrapper: React.ComponentType<ContentWrapperProps>
  export const Tooltip: React.ComponentType<TooltipProps>
  export const BoxInfo: React.ComponentType<BoxInfoProps>
  export const TabComponent: React.ComponentType<TabComponentProps>
  export const SidePanel: React.ComponentType<SidePanelProps>
  export const TableSearch: React.ComponentType<SelectProps>
  export const CalendarRange: React.ComponentType<CalendarRangeProps>
  export const DataGridBasic: React.ComponentType<DataGridBasicProps>
  export const ModalLoad: React.ComponentType<ModalLoadProps>
  export const ModalContent: React.ComponentType<ModalContentProps>
  export const InputField: React.ComponentType<InputFieldProps>
  export const InputBasic: React.ComponentType<NewTableProps>
  export const MuiSelect: React.ComponentType<NewTableProps>
  export const Tabs: React.ComponentType<TabsProps>
  export const AutoCompleteInput: React.ComponentType<InputFieldProps>
  export const DataPicker: React.ComponentType<DataPickerProps>
  export const InputModal: React.ComponentType<InputFieldProps>
  export const GenerateLogs: (client_user: string, data) => void
  export const FilterBar: React.ComponentType<FilterBarProps>
  export const useFilteredEndpoint: (str: string) => endpoint
  export const CustomTabs: React.ComponentType<CustomTabsProps>
  export const BasicTable: React.ComponentType<BasicTableProps>
  export const Dropdown: React.ComponentType<IDropdown>
  export const SelectNuam: React.ComponentType<{
    label?: string
    options?: any[]
    value?: any
    onChange?: (value: any) => void
    formControlProps: {
      fullWidth: boolean
      size?: 'small' | 'medium' | 'large'
    }
    size?: 'small' | 'medium' | 'large'
    labelKey?: string
    valueKey?: string
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
    fetchOptions?: (
      page: number
    ) => Promise<CommonResponseAutoComplete<FICOptions[]>>
  }>
  export const TrafficLight: React.ComponentType<TrafficLightProps>
}

declare module 'remoteShell/mf-axiosConfig' {
  import { AxiosInstance } from 'axios'

  export const http: AxiosInstance
  export const httpOperations: AxiosInstance
  export const httpReceipts: AxiosInstance
  export const httpInvestor: AxiosInstance
  export const httpOperationsRules: AxiosInstance
  export const httpOperationsRepo: AxiosInstance
  export const httpOperationsConsultFolios: AxiosInstance
  export const httpOperationsReceipts: AxiosInstance
  export const httpParticipants: AxiosInstance
  export const httpSettlementCycle: AxiosInstance
  export const httpOperationCorrection: AxiosInstance
  export const httpOperationDownloadReports: AxiosInstance
  export const httpAdminGuarantees: AxiosInstance
  export const httpOperationsQuery: AxiosInstance
  export const httpCustodyStatus: AxiosInstance
  export const httpFilterParameters: AxiosInstance
  export const httpOperationsCmd: AxiosInstance
  export const httpOperationsCustodyTransfer: AxiosInstance
  export const httpActionCustody: AxiosInstance
}

declare module 'remoteShell/mf-store' {
  export type RootState = ReturnType<typeof store.getState>
}

declare module 'remoteShell/mf-shell-authSlice' {
  export const onPressCalculator: (payload: boolean) => PayloadAction
}

declare module 'remoteShell/mf-shell-useScreenActions' {
  import { ScreenActionsState } from '@/shared/types/screenActions'
  export const useScreenActions: () => ScreenActionsState
}

declare module 'remoteShell/mf-shell-useRefreshTable' {
  export const useRefreshTable: () => {
    refreshTable: () => void
    loadingTable: boolean
  }
}

declare module 'remoteUtilities/formatToUserLocalTime' {
  export const formatToUserLocalTime: (dateString: string | Date) => string
  export const formatToServerTime: () => string
}
declare module 'remoteUtilities/formattedDate' {
  export const formattedDate: (params?: {
    date?: string | Date | Dayjs
    format?: string
  }) => string
}
declare module 'remoteUtilities/formattedTime' {
  export const formattedTime: (params?: {
    date?: string | Date
    format?: string
  }) => string
}
declare module 'remoteUtilities/formattedNumber' {
  const formatNumberWithThousandsSeparator: (
    number: number | undefined,
    addDollarSign?: boolean,
    includeDecimals?: boolean
  ) => string
}

declare module 'remoteShell/mf-scheduleInterceptor' {
  export function setupScheduleInterceptor(): void
}

declare module 'remoteShell/mf-shell-useScheduleValidation' {
  import { type UseScheduleValidationParams } from './Declares/declares'

  const useScheduleValidation: () => {
    validate: ({
      actionCode,
      onSuccess,
      onCancel,
      isClosingTimeSecondary
    }: UseScheduleValidationParams) => Promise<void>
  }
}

declare module 'remoteShell/mf-shell-ErrorBoundary' {
  export function ErrorBoundary({
    children
  }: {
    children: React.ReactNode
  }): React.JSX.Element
}

declare module 'remoteUtilities/statusChip' {
  import { StatusChipProps } from './Declares/declares'
  export const StatusChip: React.ComponentType<StatusChipProps>
}
declare module 'remoteUtilities/defaultValueField' {
  export interface DefaultValueFieldProps {
    value?: string | null | boolean
    defaultValue?: string
    renderValue?: string | number | React.ReactNode
  }
  export const defaultValueField: (props: DefaultValueFieldProps) => string
}

```

## src/features/custodians-reports/CustodiansReports.tsx

```tsx
import React, { useState } from 'react'

import {
  ContentWrapper,
  CustomTabs
} from 'remoteUtilities/components-mf-utilities'

import useTranslate from '@/shared/hooks/useTranslate'

import { ReportPackageTab } from './components/ReportPackageTab'

// import { ReportUpdatesTab } from './components/ReportUpdatesTab'

const TABS = [
  { labelKey: 'tabs.packageReport', Component: ReportPackageTab }
  // { labelKey: 'tabs.updatesReport', Component: ReportUpdatesTab }
] as const

export const CustodiansReports: React.FC = () => {
  const { t } = useTranslate({ keyPrefix: 'custodianReports' })
  const [currentTab, setCurrentTab] = useState(0)

  return (
    <ContentWrapper title={t('title')}>
      <CustomTabs
        tabs={TABS.map(({ labelKey }) => ({ label: t(labelKey) }))}
        currentTab={currentTab}
        onChange={setCurrentTab}
        alignTabs="left"
        variant="fullWidth"
        tabColor="#FF4201"
        tabsContent={TABS.map(({ labelKey, Component }) => (
          <Component key={labelKey} />
        ))}
      />
    </ContentWrapper>
  )
}

export default CustodiansReports

```

## src/features/custodians-reports/components/CustodianGenerateReport.tsx

```tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
import { yupResolver } from '@hookform/resolvers/yup'
import {
  Typography,
  Button,
  DefaultComponents
} from '@nuam/common-fe-lib-components'
import { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { useMemo, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useSelector } from 'react-redux'
import * as yup from 'yup'

import {
  AutoCompleteInput,
  DataPicker,
  ModalAlert,
  SelectNuam,
  Spinner
} from 'remoteUtilities/components-mf-utilities'

import { getUserInfo } from '@/shared/utils/getInfoUser'

import type { CustodianReportFieldConfig } from '../types'

dayjs.extend(customParseFormat)

export interface CustodianGenerateReportProps {
  fields: CustodianReportFieldConfig[]
  titleReport?: string
  onGenerate: (values: Record<string, any>, userId: number) => Promise<void>
  onSuccess?: () => void
  successTitle?: string
  successMessage?: string
  errorTitle?: string
  errorMessage?: string
}

interface AlertState {
  title: string
  message: string
  variant: 'success' | 'error'
}

export const CustodianGenerateReport = ({
  fields,
  titleReport = 'Generar reportes',
  onGenerate,
  onSuccess,
  successTitle = 'Se ha generado un nuevo reporte',
  successMessage = 'El archivo se ha generado con éxito, la descarga comenzará cuando esté listo',
  errorTitle = 'Error de búsqueda de archivos',
  errorMessage = 'No se encontró ningún registro relacionado, prueba cambiando los criterios de búsqueda.'
}: CustodianGenerateReportProps) => {
  const { id } = useSelector(getUserInfo)
  const [isLoading, setIsLoading] = useState(false)
  const [alert, setAlert] = useState<AlertState | null>(null)

  const validationSchema = useMemo(
    () =>
      yup.object(
        fields.reduce<Record<string, yup.AnySchema>>((acc, f) => {
          acc[f.name] = f.schema
          return acc
        }, {})
      ),
    [fields]
  ) as yup.ObjectSchema<Record<string, any>>

  const defaultValues = useMemo(
    () =>
      fields.reduce<Record<string, any>>((acc, f) => {
        acc[f.name] =
          (f.componentProps as Record<string, any>)?.defaultValue ?? null
        return acc
      }, {}),
    [fields]
  )

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<Record<string, any>>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema) as any,
    defaultValues
  })

  const submit = async (data: Record<string, any>) => {
    setIsLoading(true)
    try {
      await onGenerate(data, id)
      setAlert({
        title: successTitle,
        message: successMessage,
        variant: 'success'
      })
      onSuccess?.()
    } catch (e) {
      setAlert({
        title: errorTitle,
        message: errorMessage,
        variant: 'error'
      })
    } finally {
      setIsLoading(false)
    }
  }

  const fieldRenderers: Record<
    CustodianReportFieldConfig['type'],
    (cfg: CustodianReportFieldConfig) => JSX.Element | null
  > = {
    date: (cfg) => (
      <Controller
        key={cfg.name}
        name={cfg.name}
        control={control}
        render={({ field }) => (
          <div className="flex flex-col w-full">
            <DataPicker
              label={cfg.label}
              value={field.value ? dayjs(field.value) : null}
              onChange={(newValue: Dayjs) =>
                field.onChange(newValue ? newValue.toDate() : null)
              }
              returnAs="dayjs"
              height={40}
              width="100%"
              format="YYYY/MM/DD"
              inputFormat="YYYY/MM/DD"
              {...(cfg.componentProps || {})}
              showClearIndicator={true}
            />
            {errors[cfg.name]?.message && (
              <span className="text-xs text-red-600 mt-1">
                {String(errors[cfg.name]?.message)}
              </span>
            )}
          </div>
        )}
      />
    ),
    autocomplete: (cfg) => (
      <Controller
        key={cfg.name}
        name={cfg.name}
        control={control}
        render={({ field }) => {
          const {
            fetchOptions,
            minSearchLength = 3,
            debounceTime = 300,
            itemsPerPage = 10,
            label = cfg.label,
            ...rest
          } = (cfg.componentProps || {}) as Record<string, any>
          return (
            <div className="flex flex-col w-full">
              <AutoCompleteInput
                label={label}
                fetchOptions={fetchOptions}
                onChange={(val: { id: number; label: string } | null) =>
                  field.onChange(val)
                }
                value={field.value}
                itemsPerPage={itemsPerPage}
                minSearchLength={minSearchLength}
                debounceTime={debounceTime}
                key={`${cfg.name}-${field.value?.id ?? 'none'}`}
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
                {...rest}
              />
              {errors[cfg.name]?.message && (
                <span className="text-xs text-red-600 mt-1">
                  {String(errors[cfg.name]?.message)}
                </span>
              )}
            </div>
          )
        }}
      />
    ),
    text: (cfg) => (
      <Controller
        key={cfg.name}
        name={cfg.name}
        control={control}
        render={({ field }) => {
          const { label = cfg.label, ...rest } = (cfg.componentProps ||
            {}) as Record<string, any>
          return (
            <DefaultComponents.TextField
              label={label}
              value={field.value ?? ''}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                field.onChange(e.target.value)
              }
              fullWidth
              size="small"
              {...rest}
            />
          )
        }}
      />
    ),
    select: (cfg) => (
      <Controller
        key={cfg.name}
        name={cfg.name}
        control={control}
        render={({ field }) => {
          const {
            options = [],
            placeholder = cfg.label,
            ...rest
          } = (cfg.componentProps || {}) as Record<string, any>

          const handle = (eventOrValue: any) => {
            let newValue: any
            if (eventOrValue && typeof eventOrValue === 'object') {
              if ('target' in eventOrValue && eventOrValue.target) {
                newValue = eventOrValue.target.value
              } else if ('value' in eventOrValue) {
                newValue = eventOrValue.value
              } else if ('id' in eventOrValue) {
                newValue = eventOrValue
              } else {
                newValue = eventOrValue
              }
            } else {
              newValue = eventOrValue
            }
            field.onChange(newValue)
          }
          const findValue = options.find(
            (option: any) => option?.name === field?.value?.name
          )
          return (
            <div className="flex flex-col w-full">
              <DefaultComponents.Box width="100%">
                <SelectNuam
                  label={cfg.label}
                  key={findValue}
                  options={options}
                  onChange={handle}
                  placeholder={placeholder}
                  value={findValue}
                  {...rest}
                  formControlProps={{
                    fullWidth: true
                  }}
                  showClearIndicator
                  size="small"
                  labelKey="name"
                  valueKey="name"
                />
              </DefaultComponents.Box>
              {errors[cfg.name]?.message && (
                <span className="text-xs text-red-600 mt-1">
                  {String(errors[cfg.name]?.message)}
                </span>
              )}
            </div>
          )
        }}
      />
    )
  }

  const orderedFieldNodes = useMemo(
    () =>
      fields.map((f) => (
        <div key={f.name} className="min-w-0">
          {fieldRenderers[f.type](f)}
        </div>
      )),
    [fields, errors]
  )

  return (
    <>
      <Typography variant="h6" className="font-medium text-[#3D3D3D] mt-3">
        {titleReport}
      </Typography>
      <form
        onSubmit={handleSubmit(submit)}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full pt-2 pb-2 gap-4"
      >
        {orderedFieldNodes}
        <div className="flex items-end">
          <Button
            size="large"
            type="submit"
            disabled={isLoading}
            className="text-[15px] px-4 font-medium w-full h-[40px] min-h-[40px]"
          >
            Generar
          </Button>
        </div>
      </form>
      {alert && (
        <ModalAlert
          title={alert.title}
          message={alert.message}
          variant={alert.variant}
          textSuccess="Volver"
          onClick={() => setAlert(null)}
        />
      )}
      {isLoading && <Spinner />}
    </>
  )
}

```

## src/features/custodians-reports/components/ReportPackageTab.tsx

```tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography } from '@nuam/common-fe-lib-components'
import React, { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'remoteShell/mf-store'
import { NewTable } from 'remoteUtilities/components-mf-utilities'

import useParticipantIsCustodian from '@/shared/hooks/useParticipantIsCustodioan'
import useTranslate from '@/shared/hooks/useTranslate'
import { getUserInfo } from '@/shared/utils/getInfoUser'

import {
  generateCustodianReport,
  getPackageStatusOptions,
  getOperationTypesOptions
} from '../services/custodiansReportsService'
import type { CustodianReportItem, CustodianSelectOption } from '../types'
import { columns } from '../utils/columns'
import { getFiltersConfig } from '../utils/filtersConfig'
import { CustodianGenerateReport } from './CustodianGenerateReport'
import { ToolbarActions } from './ToolbarActions'

const REPORT_PACKAGES_ENDPOINT = '/custodian-report/search/history/user/'

const formatDateYMD = (value: Date | null | undefined): string | null => {
  if (!value) return null
  const y = value.getFullYear()
  const m = String(value.getMonth() + 1).padStart(2, '0')
  const d = String(value.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

export const ReportPackageTab: React.FC = () => {
  const { t } = useTranslate({ keyPrefix: 'custodianReports' })
  const { infoUserNubo } = useSelector((state: RootState) => state.auth)
  const { isCustodianUser } = useParticipantIsCustodian()
  const { participantId, code: participantCode } = useSelector(getUserInfo)

  const [rows, setRows] = useState<CustodianReportItem[]>([])
  const [refreshTable, setRefreshTable] = useState(false)
  const [packageStatusOptions, setPackageStatusOptions] = useState<
    CustodianSelectOption[]
  >([])
  const [operationTypeOptions, setOperationTypeOptions] = useState<
    CustodianSelectOption[]
  >([])

  useEffect(() => {
    getPackageStatusOptions().then(setPackageStatusOptions)
    getOperationTypesOptions().then(setOperationTypeOptions)
  }, [])

  const fields = useMemo(
    () =>
      getFiltersConfig(
        t,
        packageStatusOptions,
        operationTypeOptions,
        isCustodianUser,
        participantId,
        participantCode
      ),
    [
      t,
      packageStatusOptions,
      operationTypeOptions,
      isCustodianUser,
      participantId,
      participantCode
    ]
  )

  const handleGenerate = async (
    values: Record<string, any>,
    userId: number
  ): Promise<void> => {
    const complianceDate = formatDateYMD(values.complianceDate)
    const packageCreationDate = formatDateYMD(values.packageCreationDate)

    await generateCustodianReport({
      userId,
      packageClearingDate: complianceDate,
      packageCreationDate: packageCreationDate,
      custodian: values.custodian?.paCustodianId
        ? String(values.custodian.paCustodianId)
        : values.custodian?.id
          ? String(values.custodian.id)
          : null,
      fic: values.fic?.id ? String(values.fic.id) : null,
      packageNumber: values.packageNumber ? String(values.packageNumber) : null,
      packageStatus: values.packageStatus?.name ?? values.packageStatus ?? null,
      operationType: values.operationType?.name ?? values.operationType ?? null
    })
  }

  const setDataRemote = (_page: number, dataTable: CustodianReportItem[]) => {
    setRows(dataTable)
  }

  const userId = infoUserNubo?.id
  const reportPackagesEndpoint = userId
    ? `${REPORT_PACKAGES_ENDPOINT}${userId}`
    : ''

  return (
    <div className="flex flex-col gap-2 flex-1">
      <CustodianGenerateReport
        fields={fields}
        onGenerate={handleGenerate}
        onSuccess={() => setRefreshTable((r) => !r)}
        titleReport={t('generateReport.title')}
      />
      <Typography variant="h6" className="font-medium text-[#3D3D3D]">
        {t('table.heading')}
      </Typography>
      <NewTable
        columns={columns}
        endpoint={reportPackagesEndpoint}
        axiosInstanceKey="httpOperationsReceipts"
        customToolbar={<ToolbarActions />}
        setDataRemote={setDataRemote}
        height="auto"
        rows={rows}
        refresh={refreshTable}
        disableRowSelectionOnClick
      />
    </div>
  )
}

```

## src/features/custodians-reports/components/ReportUpdatesTab.tsx

```tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography } from '@nuam/common-fe-lib-components'
import React, { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'remoteShell/mf-store'
import { NewTable } from 'remoteUtilities/components-mf-utilities'

import useTranslate from '@/shared/hooks/useTranslate'

import {
  generateCustodianUpdatesReport,
  getPackageStatusOptions,
  getSideOptions
} from '../services/custodiansReportsService'
import type { CustodianReportItem, CustodianSelectOption } from '../types'
import { getUpdatesColumns } from '../utils/updatesColumns'
import { getUpdateFiltersConfig } from '../utils/updatesFiltersConfig'
import { CustodianGenerateReport } from './CustodianGenerateReport'

const REPORT_UPDATE_ENDPOINT = '/custodian-updates-report/history/user/'

const formatDateYMD = (value: Date | null | undefined): string | null => {
  if (!value) return null
  const y = value.getFullYear()
  const m = String(value.getMonth() + 1).padStart(2, '0')
  const d = String(value.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

export const ReportUpdatesTab: React.FC = () => {
  const { t } = useTranslate({ keyPrefix: 'custodianReports' })
  const { infoUserNubo } = useSelector((state: RootState) => state.auth)

  const [rows, setRows] = useState<CustodianReportItem[]>([])
  const [refreshTable, setRefreshTable] = useState(false)
  const [eventOptions, setEventOptions] = useState<CustodianSelectOption[]>([])
  const [sideOptions, setSideOptions] = useState<CustodianSelectOption[]>([])

  useEffect(() => {
    getPackageStatusOptions().then(setEventOptions)
    getSideOptions().then(setSideOptions)
  }, [])

  const fields = useMemo(
    () => getUpdateFiltersConfig(t, eventOptions, sideOptions),
    [t, eventOptions, sideOptions]
  )

  const handleGenerate = async (
    values: Record<string, any>,
    userId: number
  ): Promise<void> => {
    const complianceDate = formatDateYMD(values.complianceDate)
    const packageCreationDate = formatDateYMD(values.packageCreationDate)

    await generateCustodianUpdatesReport({
      userId,
      complianceDate,
      packageCreationDate,
      custodian: values.custodian?.paCustodianId
        ? String(values.custodian.paCustodianId)
        : null,
      affiliatedCode: values.affiliateCode?.paAffiliatedCode
        ? String(values.affiliateCode.paAffiliatedCode)
        : null,
      packageNumber: values.packageNumber ? String(values.packageNumber) : null,
      side: values.side?.name ?? null,
      status: values.status?.name ?? null,
      registrationDate: true
    })
  }

  const columns = useMemo(() => getUpdatesColumns(), [])

  const setDataRemote = (_page: number, dataTable: CustodianReportItem[]) => {
    setRows(dataTable)
  }

  const userId = infoUserNubo?.id
  const reportUpdateEndpoint = userId
    ? `${REPORT_UPDATE_ENDPOINT}${userId}`
    : ''

  return (
    <div className="flex flex-col gap-2 flex-1">
      <CustodianGenerateReport
        fields={fields}
        onGenerate={handleGenerate}
        onSuccess={() => setRefreshTable((r) => !r)}
        titleReport={t('generateReport.title')}
      />
      <Typography variant="h6" className="font-medium text-[#3D3D3D]">
        {t('table.heading')}
      </Typography>
      <NewTable
        columns={columns}
        endpoint={reportUpdateEndpoint}
        axiosInstanceKey="httpOperationsReceipts"
        setDataRemote={setDataRemote}
        height="auto"
        rows={rows}
        refresh={refreshTable}
        disableRowSelectionOnClick
      />
    </div>
  )
}

```

## src/features/custodians-reports/components/ToolbarActions.tsx

```tsx
import React from 'react'

export const ToolbarActions: React.FC = () => {
  // TODO: Add custom toolbar actions if needed (e.g. bulk download)
  return <></>
}

```

## src/features/custodians-reports/constants/endpoints.ts

```typescript
export const CUSTODIANS_REPORTS_ENDPOINTS = {
  REPORT_PACKAGE_CUSTODIANS: '/participants/custodians/report-package',
  FIC_ADMINISTRATORS: '/fic-administrators',
  PARTICIPANTS: '/participants',
  SIDE_OPERATION: '/side/operation',
  GENERATE_REPORT_PACKAGE: (userId: number | undefined) =>
    `/custodian-report/generate/report/user/${userId}`,
  CUSTODIAN_UPDATES_REPORT_HISTORY: '/custodian-updates-report/history/user/',
  GENERATE_CUSTODIAN_UPDATES_REPORT: (userId: number | undefined) =>
    `/custodian-updates-report/generate/report/user/${userId}`
}

```

## src/features/custodians-reports/index.ts

```typescript
export { default as CustodiansReports } from './CustodiansReports'
export * from './types'

```

## src/features/custodians-reports/services/custodiansReportsService.ts

```typescript
import {
  httpFilterParameters,
  httpOperationsReceipts
} from 'remoteShell/mf-axiosConfig'

import { get } from '@/shared/config/methods'
import { getOperationStatus } from '@/shared/services/getOperationStatus'
import { getOperationsTypes } from '@/shared/services/getOperationsTypes'
import { handleRequest } from '@/shared/utils/handleRequest'
import { buildStandardHeaders } from '@/shared/utils/headerServices'
import isDevMode from '@/shared/utils/isDevMode'

import { CUSTODIANS_REPORTS_ENDPOINTS } from '../constants/endpoints'
import type {
  CustodianReportOption,
  CustodianReportPackageContent,
  CustodianReportPayload,
  CustodianSelectOption,
  CustodianUpdatesReportPayload,
  FicAdministratorContent,
  OperationSideContent,
  ParticipantContent
} from '../types'

export const generateCustodianReport = async (
  payload: CustodianReportPayload
): Promise<void> => {
  const { userId, participantId, ...body } = payload

  await handleRequest(async () => {
    const headers = await buildStandardHeaders()
    return httpOperationsReceipts.post(
      CUSTODIANS_REPORTS_ENDPOINTS.GENERATE_REPORT_PACKAGE(userId),
      body,
      {
        headers,
        params: participantId != null ? { participantId } : undefined
      }
    )
  }, 'Error generating custodian report:')
}

export const generateCustodianUpdatesReport = async (
  payload: CustodianUpdatesReportPayload
): Promise<void> => {
  const { userId, ...body } = payload

  await handleRequest(async () => {
    const headers = await buildStandardHeaders()
    return httpOperationsReceipts.post(
      CUSTODIANS_REPORTS_ENDPOINTS.GENERATE_CUSTODIAN_UPDATES_REPORT(userId),
      body,
      { headers }
    )
  }, 'Error generating custodian updates report:')
}

export const getCustodioOptions = async (
  searchTerm = '',
  page = 0,
  size = 10
): Promise<{ data: CustodianReportOption[]; total: number }> => {
  const searchParams = new URLSearchParams()
  if (searchTerm) searchParams.append('search', searchTerm)
  searchParams.append('page', page.toString())
  searchParams.append('size', size.toString())

  const urlWithParams = `${CUSTODIANS_REPORTS_ENDPOINTS.REPORT_PACKAGE_CUSTODIANS}?${searchParams.toString()}`

  try {
    const { data } = await get({
      axiosInstance: httpFilterParameters,
      urlWithParams
    })

    return {
      data: data.content.map((item: CustodianReportPackageContent) => ({
        id: item.id,
        label: item.codeName,
        code: item.code,
        paCustodianId: item.paCustodianId
      })),
      total: data.totalElements
    }
  } catch (error) {
    if (isDevMode()) {
      console.error('Error fetching custodian report package options:', error)
    }
    return { data: [], total: 0 }
  }
}

export const getFicOptions = async (
  searchTerm = '',
  page = 0,
  size = 10
): Promise<{ data: CustodianReportOption[]; total: number }> => {
  const searchParams = new URLSearchParams()
  if (searchTerm) searchParams.append('search', searchTerm)
  searchParams.append('page', page.toString())
  searchParams.append('size', size.toString())

  const urlWithParams = `${CUSTODIANS_REPORTS_ENDPOINTS.FIC_ADMINISTRATORS}?${searchParams.toString()}`

  try {
    const { data } = await get({
      axiosInstance: httpFilterParameters,
      urlWithParams
    })

    return {
      data: data.content.map((item: FicAdministratorContent) => ({
        id: item.id,
        label: item.codeName
      })),
      total: data.totalElements
    }
  } catch (error) {
    if (isDevMode()) {
      console.error('Error fetching FIC administrator options:', error)
    }
    return { data: [], total: 0 }
  }
}

export const getParticipantOptions = async (
  searchTerm = '',
  page = 0,
  size = 10
): Promise<{ data: CustodianReportOption[]; total: number }> => {
  const searchParams = new URLSearchParams()
  if (searchTerm) searchParams.append('search', searchTerm)
  searchParams.append('page', page.toString())
  searchParams.append('size', size.toString())

  const urlWithParams = `${CUSTODIANS_REPORTS_ENDPOINTS.PARTICIPANTS}?${searchParams.toString()}`

  try {
    const { data } = await get({
      axiosInstance: httpFilterParameters,
      urlWithParams
    })

    return {
      data: data.content.map((item: ParticipantContent) => ({
        id: item.id,
        label: item.codeName,
        code: item.code
      })),
      total: data.totalElements
    }
  } catch (error) {
    if (isDevMode()) {
      console.error('Error fetching participant options:', error)
    }
    return { data: [], total: 0 }
  }
}

export const getSideOptions = async (): Promise<CustodianSelectOption[]> => {
  try {
    const { data } = await get({
      axiosInstance: httpFilterParameters,
      urlWithParams: CUSTODIANS_REPORTS_ENDPOINTS.SIDE_OPERATION
    })

    return data.map((item: OperationSideContent) => ({
      id: item.id,
      name: item.description
    }))
  } catch (error) {
    if (isDevMode()) {
      console.error('Error fetching operation side options:', error)
    }
    return []
  }
}

export const getPackageStatusOptions = async (): Promise<
  CustodianSelectOption[]
> => {
  try {
    return await getOperationStatus()
  } catch (error) {
    if (isDevMode()) {
      console.error('Error fetching estado de paquete options:', error)
    }
    return []
  }
}

export const getOperationTypesOptions = async (): Promise<
  CustodianSelectOption[]
> => {
  try {
    return await getOperationsTypes()
  } catch (error) {
    if (isDevMode()) {
      console.error('Error fetching tipo de operacion options:', error)
    }
    return []
  }
}

```

## src/features/custodians-reports/types/index.ts

```typescript
import type { AnySchema } from 'yup'

export type CustodianReportFieldType =
  'date' | 'autocomplete' | 'select' | 'text'

export interface CustodianReportFieldConfig {
  name: string
  label: string
  type: CustodianReportFieldType
  schema: AnySchema
  componentProps?: Record<string, unknown>
}

export interface CustodianReportItem {
  id: string | number
  generatedAt?: string | Date | null
  generatedBy?: string | null
  operationStatus?: {
    id?: number | string
    description?: string | null
    category?: string | null
  } | null
  generationStatus?: {
    id?: number | string
    description?: string | null
    category?: string | null
  } | null
  participant?: {
    id?: number | string
    code?: string | null
    name?: string | null
    shortName?: string | null
  } | null
  country?: unknown
  type?: {
    id?: number | string
    description?: string | null
    category?: string | null
  } | null
  totalTrades?: number | null
  fileConsecutive?: number | null
  message?: string | null
  reportDate?: string | Date | null
  fileName?: string | null
  fileType?: string | null
  filePath?: string | null
  fechaHoraGeneracion?: string | null
  usuarioGenera?: string | null
  estadoReporte?: string | null
}

export interface CustodianReportPayload {
  userId: number
  participantId?: number | null
  packageClearingDate?: string | null
  packageCreationDate?: string | null
  custodian?: string | null
  fic?: string | null
  packageNumber?: string | null
  packageStatus?: string | null
  operationType?: string | null
}

export interface CustodianUpdatesReportPayload {
  userId: number
  complianceDate?: string | null
  packageCreationDate?: string | null
  custodian?: string | null
  affiliatedCode?: string | null
  packageNumber?: string | null
  side?: string | null
  status?: string | null
  registrationDate?: boolean
}

export interface CustodianReportOption {
  id: number | string
  label: string
  code?: string
}

export interface CustodianSelectOption {
  id: string | number
  name: string
}

export interface CustodianReportPackageContent {
  id: number
  code: string
  description: string
  codeName: string
  paCustodianId: number | string
}

export interface FicAdministratorContent {
  id: number
  code: string
  description: string
  codeName: string
}

export interface ParticipantContent {
  id: number
  code: string
  description: string
  codeName: string
}

export interface OperationSideContent {
  id: number
  description: string
  category?: string
  detail?: string
}

```

## src/features/custodians-reports/utils/columns.tsx

```tsx
import type { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'

import { formattedTime } from 'remoteUtilities/formattedTime'
import { StatusChip } from 'remoteUtilities/statusChip'

import DownloadFileReport from '@/shared/components/DownloadFileReport'
import { keepOriginalFileName } from '@/shared/utils/downloadFileReport'

import type { CustodianReportItem } from '../types'
import { getStatusLabel } from './statusUtils'

export const columns: GridColDef<CustodianReportItem>[] = [
  {
    field: 'generatedAt',
    headerName: 'Fecha y hora de generación',
    flex: 1,
    minWidth: 200,
    renderCell: (params: GridRenderCellParams<CustodianReportItem>) => {
      const value = params.value as string | Date | undefined

      return (
        <span>
          {formattedTime({ date: value, format: 'DD/MM/YYYY HH:mm' })}
        </span>
      )
    }
  },
  {
    field: 'generatedBy',
    headerName: 'Usuario que genera',
    flex: 1,
    minWidth: 180
  },
  {
    field: 'generationStatus',
    headerName: 'Estado del reporte',
    flex: 1,
    minWidth: 180,
    renderCell: (params: GridRenderCellParams<CustodianReportItem>) => (
      <StatusChip value={getStatusLabel(params.value)} />
    )
  },
  {
    field: 'acciones',
    headerName: 'Acciones',
    flex: 1,
    minWidth: 120,
    sortable: false,
    renderCell: (params: GridRenderCellParams<CustodianReportItem>) => {
      const isEnabled = params.row.generationStatus?.description === 'GENERADO'
      return (
        <DownloadFileReport
          isEnabled={isEnabled}
          fileId={Number(params.row.id)}
          actionType="Descarga de archivo reporte de paquetes"
          formatFileName={keepOriginalFileName}
        />
      )
    }
  }
]

```

## src/features/custodians-reports/utils/filtersConfig.ts

```typescript
import dayjs from 'dayjs'
import { type TFunction } from 'i18next'
import * as yup from 'yup'

import {
  getCustodioOptions,
  getFicOptions
} from '../services/custodiansReportsService'
import type { CustodianReportFieldConfig } from '../types'

export const getFiltersConfig = (
  t: TFunction<'operaciones', string>,
  packageStatusOptions: { id: string | number; name: string }[] = [],
  operationTypeOptions: { id: string | number; name: string }[] = [],
  isCustodianUser = false,
  participantId?: number,
  participantCode?: string
): CustodianReportFieldConfig[] => [
  {
    name: 'complianceDate',
    label: t('generateReport.fields.complianceDate'),
    type: 'date',
    schema: yup
      .date()
      .nullable()
      .required('Este campo es requerido') as yup.AnySchema
  },
  {
    name: 'packageCreationDate',
    label: t('generateReport.fields.packageCreationDate'),
    type: 'date',
    schema: yup
      .date()
      .nullable()
      .max(dayjs().endOf('day').toDate(), 'La fecha no puede ser mayor a hoy')
      .required('Este campo es requerido') as yup.AnySchema,
    componentProps: {
      maxDate: dayjs()
    }
  },
  {
    name: 'custodian',
    label: t('generateReport.fields.custodian'),
    type: 'autocomplete',
    schema: yup
      .object()
      .nullable()
      .required('Este campo es requerido') as yup.AnySchema,
    componentProps: {
      fetchOptions: getCustodioOptions,
      itemsPerPage: 10,
      minSearchLength: 2,
      debounceTime: 300,
      disabled: isCustodianUser,
      defaultValue:
        isCustodianUser && participantId
          ? { id: participantId, label: participantCode || '' }
          : undefined
    }
  },
  {
    name: 'fic',
    label: t('generateReport.fields.fic'),
    type: 'autocomplete',
    schema: yup.object().nullable().optional() as yup.AnySchema,
    componentProps: {
      fetchOptions: getFicOptions,
      itemsPerPage: 10,
      minSearchLength: 2,
      debounceTime: 300
    }
  },
  {
    name: 'packageNumber',
    label: t('generateReport.fields.packageNumber'),
    type: 'text',
    schema: yup.string().nullable().optional() as yup.AnySchema,
    componentProps: {
      type: 'number'
    }
  },
  {
    name: 'packageStatus',
    label: t('generateReport.fields.packageStatus'),
    type: 'select',
    schema: yup.mixed().nullable().optional() as yup.AnySchema,
    componentProps: {
      options: packageStatusOptions
    }
  },
  {
    name: 'operationType',
    label: t('generateReport.fields.operationType'),
    type: 'select',
    schema: yup.mixed().nullable().optional() as yup.AnySchema,
    componentProps: {
      options: operationTypeOptions
    }
  }
]

```

## src/features/custodians-reports/utils/statusUtils.ts

```typescript
export const getStatusLabel = (value: unknown): string => {
  if (!value) return '-'
  if (typeof value === 'string') return value
  if (typeof value === 'object' && 'description' in value) {
    const description = (value as { description?: unknown }).description
    return typeof description === 'string' ? description : '-'
  }
  return '-'
}

```

## src/features/custodians-reports/utils/updatesColumns.tsx

```tsx
import type { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'

import { formattedTime } from 'remoteUtilities/formattedTime'
import { StatusChip } from 'remoteUtilities/statusChip'

import DownloadFileReport from '@/shared/components/DownloadFileReport'
import { keepOriginalFileName } from '@/shared/utils/downloadFileReport'

import type { CustodianReportItem } from '../types'
import { getStatusLabel } from './statusUtils'

export const getUpdatesColumns = (): GridColDef<CustodianReportItem>[] => [
  {
    field: 'generatedAt',
    headerName: 'Fecha y hora de generación',
    flex: 1,
    minWidth: 200,
    renderCell: (params: GridRenderCellParams<CustodianReportItem>) => {
      const value = params.value as string | Date | undefined
      return (
        <span>
          {formattedTime({ date: value, format: 'DD/MM/YYYY HH:mm' })}
        </span>
      )
    }
  },
  {
    field: 'generatedBy',
    headerName: 'Usuario que genera',
    flex: 1,
    minWidth: 180
  },
  {
    field: 'generationStatus',
    headerName: 'Estado del reporte',
    flex: 1,
    minWidth: 160,
    renderCell: (params: GridRenderCellParams<CustodianReportItem>) => (
      <StatusChip value={getStatusLabel(params.value)} />
    )
  },
  {
    field: 'acciones',
    headerName: 'Acciones',
    flex: 1,
    minWidth: 100,
    sortable: false,
    renderCell: (params: GridRenderCellParams<CustodianReportItem>) => {
      const isEnabled = params.row.generationStatus?.description === 'GENERADO'
      return (
        <DownloadFileReport
          isEnabled={isEnabled}
          fileId={Number(params.row.id)}
          actionType="Descarga de archivo reporte de novedades"
          formatFileName={keepOriginalFileName}
        />
      )
    }
  }
]

```

## src/features/custodians-reports/utils/updatesFiltersConfig.ts

```typescript
import dayjs from 'dayjs'
import { type TFunction } from 'i18next'
import * as yup from 'yup'

import {
  getCustodioOptions,
  getParticipantOptions
} from '../services/custodiansReportsService'
import type { CustodianReportFieldConfig } from '../types'

export const getUpdateFiltersConfig = (
  t: TFunction<'operaciones', string>,
  eventOptions: { id: string | number; name: string }[] = [],
  sideOptions: { id: string | number; name: string }[] = []
): CustodianReportFieldConfig[] => [
  {
    name: 'complianceDate',
    label: t('updates.fields.complianceDate'),
    type: 'date',
    schema: yup
      .date()
      .nullable()
      .required('Este campo es requerido') as yup.AnySchema
  },
  {
    name: 'packageCreationDate',
    label: t('updates.fields.packageCreationDate'),
    type: 'date',
    schema: yup
      .date()
      .nullable()
      .max(dayjs().endOf('day').toDate(), 'La fecha no puede ser mayor a hoy')
      .optional() as yup.AnySchema,
    componentProps: {
      maxDate: dayjs()
    }
  },
  {
    name: 'custodian',
    label: t('updates.fields.custodian'),
    type: 'autocomplete',
    schema: yup
      .object()
      .nullable()
      .required('Este campo es requerido') as yup.AnySchema,
    componentProps: {
      fetchOptions: getCustodioOptions,
      itemsPerPage: 10,
      minSearchLength: 2,
      debounceTime: 300
    }
  },
  {
    name: 'affiliateCode',
    label: t('updates.fields.affiliateCode'),
    type: 'autocomplete',
    schema: yup.object().nullable().optional() as yup.AnySchema,
    componentProps: {
      fetchOptions: getParticipantOptions,
      itemsPerPage: 10,
      minSearchLength: 2,
      debounceTime: 300
    }
  },
  {
    name: 'packageNumber',
    label: t('updates.fields.packageCode'),
    type: 'text',
    schema: yup.string().nullable().optional() as yup.AnySchema,
    componentProps: {
      type: 'number'
    }
  },
  {
    name: 'side',
    label: t('updates.fields.side'),
    type: 'select',
    schema: yup.mixed().nullable().optional() as yup.AnySchema,
    componentProps: {
      options: sideOptions
    }
  },
  {
    name: 'status',
    label: t('updates.fields.event'),
    type: 'select',
    schema: yup.object().nullable().optional() as yup.AnySchema,
    componentProps: {
      options: eventOptions
    }
  }
]

```

## src/features/custodians/CustodianDetails.tsx

```tsx
import { NuamThemeWrapper } from '@nuam/common-fe-lib-components'
import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  BoxInfo,
  ContentWrapper,
  NewTable,
  Spinner
} from 'remoteUtilities/components-mf-utilities'

import { ROUTES } from '@/shared/routes'

import CustodianTotals from './components/CustodianTotals'
import { useCustodianDetails } from './hooks/useCustodianDetails'

export const CustodianDetails: React.FC = () => {
  const navigate = useNavigate()
  const {
    totals,
    isLoading,
    headerColumns,
    tableColumns,
    endpoint,
    handleTableData
  } = useCustodianDetails()

  const TotalsFooter = useCallback(
    () => (totals ? <CustodianTotals totals={totals} /> : null),
    [totals]
  )

  if (isLoading) {
    return <Spinner />
  }

  return (
    <NuamThemeWrapper>
      <ContentWrapper
        title={'Detalle de Custodio'}
        actionBack={() => {
          navigate(
            `${ROUTES.OPERATIONS_MANAGEMENT}${ROUTES.CUSTODIAN_MANAGEMENT}`
          )
        }}
        useSmartBreadcrumbs={false}
        links={[
          {
            name: 'Gestión de Custodios',
            path: `${ROUTES.OPERATIONS_MANAGEMENT}${ROUTES.CUSTODIAN_MANAGEMENT}`
          },
          {
            name: 'Detalle de Custodio',
            path: ROUTES.CUSTODIAN_MANAGEMENT_DETAILS
          }
        ]}
      >
        <div className={'mb-6 mt-4'}>
          {/* Header info */}
          <BoxInfo columns={headerColumns} />
        </div>

        {/* Table */}
        <div className="flex flex-col flex-1">
          <NewTable
            columns={tableColumns}
            endpoint={endpoint}
            axiosInstanceKey="httpOperationsQuery"
            checkboxSelection={false}
            showDownload={false}
            customFooter={TotalsFooter}
            hideFooter={false}
            setDataRemote={handleTableData}
          />
        </div>
      </ContentWrapper>
    </NuamThemeWrapper>
  )
}

export default CustodianDetails

```

## src/features/custodians/CustodianManagement.tsx

```tsx
import React, {
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import { useSelector } from 'react-redux'

import { useScreenActions } from 'remoteShell/mf-shell-useScreenActions'
import { ContentWrapper } from 'remoteUtilities/components-mf-utilities/ContentWrapper'
import { FilterBar } from 'remoteUtilities/components-mf-utilities/FilterBar'
import { ModalAlert } from 'remoteUtilities/components-mf-utilities/ModalAlert'
import { NewTable } from 'remoteUtilities/components-mf-utilities/NewTable'
import { Spinner } from 'remoteUtilities/components-mf-utilities/Spinner'
import { Toast } from 'remoteUtilities/components-mf-utilities/Toast'
import { useFilteredEndpoint } from 'remoteUtilities/components-mf-utilities/useFilteredEndpoint'

import { OPERATION_CUSTODIAN_ACTIONS } from '@/shared/constants/actionCodes'
import { ENDPOINTS } from '@/shared/constants/endpoints'
import {
  useFilterBarConfig,
  type FieldRule
} from '@/shared/hooks/useFilterBarConfig'
import useIsInternalUser from '@/shared/hooks/useIsInternalUser'
import useParticipantIsCustodian from '@/shared/hooks/useParticipantIsCustodioan'
import { usePendingAdmissions } from '@/shared/hooks/usePendingAdmissions'
import useTranslate from '@/shared/hooks/useTranslate'
import { getUserInfo } from '@/shared/utils/getInfoUser'

import { ToolbarActions } from './components/ToolbarActions'
import { ERROR_MESSAGES_TRANSLATIONS } from './constants'
import useCustodianColumns from './hooks/useCustodianColumns'
import { useCustodianNotifications } from './hooks/useCustodianNotifications'
import type { CustodianItem, SelectedCustodianItem } from './types'
import { getFiltersConfig } from './utils/filtersConfig'

const AdmissionModal = React.lazy(() =>
  import('./components/AdmissionModal').then((module) => ({
    default: module.AdmissionModal
  }))
)
const ModalErrorCustodian = React.lazy(
  () => import('./components/ModalErrorCustodian')
)
const PendingAdmissionsAlert = React.lazy(() =>
  import('@/shared/components/PendingAdmissionsAlert/PendingAdmissionsAlert').then(
    (module) => ({
      default: module.PendingAdmissionsAlert
    })
  )
)

export const CustodianManagement: React.FC = () => {
  const [rows, setRows] = useState<CustodianItem[]>([])
  const [selectedItems, setSelectedItems] = useState<SelectedCustodianItem[]>(
    []
  )
  const [isLoading, setIsLoading] = useState(false)
  const [refreshTable, setRefreshTable] = useState(false)
  const {
    userType,
    participantId,
    code: participantCode
  } = useSelector(getUserInfo)
  const { isInternalUser } = useIsInternalUser()
  const { isCustodianUser } = useParticipantIsCustodian()
  const hasInvalidSelectionRef = useRef(false)
  const { t: tToolbar } = useTranslate({
    keyPrefix: 'custodians.toolbar'
  })

  const { hasAction } = useScreenActions()
  const permissions = useMemo(
    () => ({
      canShowDetail: hasAction(OPERATION_CUSTODIAN_ACTIONS.SHOW_DETAIL)
    }),
    [hasAction]
  )

  const filterRules = useMemo<FieldRule[]>(
    () => [
      {
        name: 'custodianId',
        condition: isCustodianUser,
        defaultValue: participantId
          ? { id: participantId, label: participantCode }
          : undefined
      },
      {
        name: 'participantId',
        condition: !isCustodianUser && !isInternalUser,
        defaultValue: participantId
          ? { id: participantId, label: participantCode }
          : undefined
      }
    ],
    [isCustodianUser, isInternalUser, participantId, participantCode]
  )

  const { defaultValues, patchFilters } = useFilterBarConfig(filterRules)

  const {
    modalConfig,
    hasErrorData,
    showModal,
    closeModal,
    toastList,
    showToast,
    closeToast
  } = useCustodianNotifications()

  const {
    showAlert: showPendingAdmissionsAlert,
    handleContinue: handlePendingAdmissionsContinue,
    closeAlert: closePendingAdmissionsAlert
  } = usePendingAdmissions({
    params: {
      participantId: participantId ? Number(participantId) : undefined,
      userType: userType
    },
    autoCheck: true,
    enabled: true
  })

  const baseEndpoint = ENDPOINTS.PACKAGE_CUSTODIAN

  const { endpoint } = useFilteredEndpoint(baseEndpoint)

  const { t: tFilters } = useTranslate({
    keyPrefix: 'custodians.filters'
  })
  const filtersConfig = useMemo(
    () =>
      patchFilters(
        getFiltersConfig(
          isInternalUser,
          isCustodianUser,
          tFilters,
          participantId,
          participantCode
        )
      ),
    [
      isInternalUser,
      isCustodianUser,
      participantId,
      participantCode,
      tFilters,
      patchFilters
    ]
  )

  const handleDataChange = useCallback(
    (_page: number, dataTable: CustodianItem[]) => {
      setRows(dataTable)
    },
    []
  )

  const handleRowSelectionChange = useCallback(
    async (selectedIds: (string | number)[]) => {
      const { selectCheckboxCustodian } =
        await import('./utils/selectCheckboxCustodian')
      const newSelectedItems = selectCheckboxCustodian(rows, selectedIds)
      setSelectedItems(newSelectedItems)
    },
    [rows]
  )

  const handleLoadingChange = useCallback((loading: boolean) => {
    setIsLoading(loading)
  }, [])

  useEffect(() => {
    const hasInvalidSelection = selectedItems.length > 1

    if (hasInvalidSelection && !hasInvalidSelectionRef.current) {
      showToast({
        message: tToolbar(ERROR_MESSAGES_TRANSLATIONS.SINGLE_ITEM_REQUIRED),
        variant: 'warning'
      })
    }

    hasInvalidSelectionRef.current = hasInvalidSelection
  }, [selectedItems.length, showToast, tToolbar])

  const { t } = useTranslate({ keyPrefix: 'custodians' })

  const { columns } = useCustodianColumns(permissions)
  if (isLoading) {
    return <Spinner />
  }

  return (
    <ContentWrapper title="Gestión de Custodios" keyTranslation="operaciones">
      <FilterBar
        config={filtersConfig}
        className={
          isInternalUser
            ? 'mb-6 mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
            : undefined
        }
        defaultValues={defaultValues}
      />

      <NewTable
        columns={columns}
        endpoint={endpoint}
        axiosInstanceKey="httpOperationsQuery"
        customToolbar={
          <ToolbarActions
            selectedItems={selectedItems}
            custodianId={participantId}
            onShowModal={showModal}
            custodianStatus={selectedItems.map(
              (item) => item.packageStatus?.description || ''
            )}
            onCloseModal={closeModal}
            onShowToast={showToast}
            onLoadingChange={handleLoadingChange}
            onRefreshTable={() => setRefreshTable((r) => !r)}
          />
        }
        setDataRemote={handleDataChange}
        height="auto"
        rows={rows}
        checkboxSelection
        showDownload
        handleRowSelectionModelChange={handleRowSelectionChange}
        refresh={refreshTable}
        provisionalId={'packageCustodianId'}
      />

      {modalConfig && modalConfig.type === 'admission' && (
        <Suspense fallback={<Spinner />}>
          <AdmissionModal
            open
            onClose={closeModal}
            onAdmit={modalConfig.onClick!}
            isSingleSelection={selectedItems.length === 1}
            tradeId={selectedItems[0]?.tradeId}
            sideId={selectedItems[0]?.sideId}
            originId={selectedItems[0]?.sourceQuoteTypeId}
            custodianId={participantId ? Number(participantId) : undefined}
            fraction={selectedItems[0]?.fraction}
            onShowToast={showToast}
            onRefreshTable={() => setRefreshTable((r) => !r)}
            onShowModal={showModal}
            onCloseModal={closeModal}
          />
        </Suspense>
      )}

      {modalConfig && !hasErrorData && modalConfig.type !== 'admission' && (
        <ModalAlert
          title={modalConfig.title}
          message={modalConfig.message}
          variant={modalConfig.variant}
          onClick={modalConfig.onClick}
          handleCancel={modalConfig.handleCancel}
          textCancel={modalConfig.textCancel}
          textSuccess={modalConfig.textSuccess}
          orientation={modalConfig.orientation}
          children={modalConfig.children}
        />
      )}

      {modalConfig && hasErrorData && (
        <Suspense fallback={<Spinner />}>
          <ModalErrorCustodian
            closeModal={closeModal}
            modalConfig={modalConfig}
          />
        </Suspense>
      )}
      {toastList.map((toast, index) => (
        <Toast
          key={index}
          text={toast.message}
          variant={toast.variant}
          width="424px"
          onClose={() => closeToast(index)}
          positionIndex={index}
        />
      ))}
      {showPendingAdmissionsAlert && (
        <Suspense fallback={<Spinner />}>
          <PendingAdmissionsAlert
            open={showPendingAdmissionsAlert}
            onContinue={handlePendingAdmissionsContinue}
            onClose={closePendingAdmissionsAlert}
            title={t('admission.title')}
            message={t('admission.message')}
            continueText={t('admission.textSuccess')}
          />
        </Suspense>
      )}
    </ContentWrapper>
  )
}

export default CustodianManagement

```

## src/features/custodians/components/AdmissionModal.tsx

```tsx
import {
  Button,
  DefaultComponents,
  MaterialIcons,
  Modal,
  TextField,
  Typography
} from '@nuam/common-fe-lib-components'
import { useCallback, useEffect, useState } from 'react'

import { SelectNuam } from 'remoteUtilities/components-mf-utilities'

import useGenerateLogs from '@/shared/hooks/useGenerateLogs'
import useTranslate from '@/shared/hooks/useTranslate'

import {
  BUTTON_LABELS_TRANSLATIONS,
  ERROR_MESSAGES_TRANSLATIONS,
  MODAL_MESSAGES_TRANSLATIONS,
  MODAL_TITLES_TRANSLATIONS,
  SUCCESS_MESSAGES_TRANSLATIONS
} from '../constants'
import { executeAdmitChangeAccount } from '../services/custodianService'
import { validateAccountAssignment } from '../services/custodianService'
import { getIdentificationTypes } from '../services/getIdentificationTypes'
import type { ModalConfig, ToastMessage } from '../types'

interface IIdTypeOption {
  value: string
  label: string
}

export interface IAccountModification {
  accountNumber: string
  investorName: string
  idType: string
  idNumber: string
}

interface IAccountIds {
  investorAccountId: number | null
  participantAccountId: number | null
}

interface IAdmissionModalProps {
  open: boolean
  onClose: () => void
  onAdmit: () => void
  isSingleSelection: boolean
  onSaveAccount?: (data: IAccountModification) => void
  tradeId?: number
  sideId?: string
  originId?: number
  custodianId?: number
  fraction?: number
  onShowToast: (config: ToastMessage) => void
  onRefreshTable?: () => void
  onLoadingChange?: (isLoading: boolean) => void
  onShowModal: (config: ModalConfig) => void
  onCloseModal: () => void
}

const INITIAL_ACCOUNT_DATA: IAccountModification = {
  accountNumber: '',
  investorName: '',
  idType: '',
  idNumber: ''
}

const INITIAL_ACCOUNT_IDS: IAccountIds = {
  investorAccountId: null,
  participantAccountId: null
}

export const AdmissionModal: React.FC<IAdmissionModalProps> = ({
  open,
  onClose,
  onAdmit,
  isSingleSelection,
  tradeId,
  sideId,
  originId,
  custodianId,
  fraction,
  onShowToast,
  onRefreshTable,
  onLoadingChange,
  onShowModal,
  onCloseModal
}) => {
  const { t } = useTranslate({ keyPrefix: 'custodians' })
  const { t: trans } = useTranslate({ keyPrefix: 'custodians.adminCustodian' })
  const { generateLogs } = useGenerateLogs()
  const [admitEnabled, setAdmitEnabled] = useState(false)
  const [accountData, setAccountData] =
    useState<IAccountModification>(INITIAL_ACCOUNT_DATA)
  const [accountIds, setAccountIds] = useState<IAccountIds>(INITIAL_ACCOUNT_IDS)
  const [isValidating, setIsValidating] = useState(false)
  const [isAccountValidated, setIsAccountValidated] = useState(false)
  const [accountError, setAccountError] = useState(false)
  const [idTypeOptions, setIdTypeOptions] = useState<IIdTypeOption[]>([])

  useEffect(() => {
    if (!open) return
    getIdentificationTypes()
      .then((options) => setIdTypeOptions(options))
      .catch(() => setIdTypeOptions([]))
  }, [open])

  const handleSwitchChange = useCallback(() => {
    setAdmitEnabled((prev) => !prev)
  }, [])

  const handleClose = useCallback(() => {
    setAdmitEnabled(false)
    setAccountData(INITIAL_ACCOUNT_DATA)
    setAccountIds(INITIAL_ACCOUNT_IDS)
    setIsAccountValidated(false)
    setAccountError(false)
    onClose()
  }, [onClose])

  const handleAccountNumberChange = useCallback(
    (value: string) => {
      setAccountData((prev) => ({ ...prev, accountNumber: value }))
      setAccountError(false)
      setAccountIds(INITIAL_ACCOUNT_IDS)
      if (isAccountValidated) {
        setIsAccountValidated(false)
        setAccountData((prev) => ({
          ...prev,
          accountNumber: value,
          investorName: '',
          idType: '',
          idNumber: ''
        }))
      }
    },
    [isAccountValidated]
  )

  const handleInvestorNameChange = useCallback((value: string) => {
    setAccountData((prev) => ({ ...prev, investorName: value }))
  }, [])

  const handleIdTypeChange = useCallback((option: IIdTypeOption) => {
    if (!option) return
    setAccountData((prev) => ({ ...prev, idType: option.value }))
  }, [])

  const handleIdNumberChange = useCallback((value: string) => {
    setAccountData((prev) => ({ ...prev, idNumber: value }))
  }, [])

  const handleAccountBlur = useCallback(
    async (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const inputValue = (e.target as HTMLInputElement).value?.trim()
      if (!inputValue || !tradeId || !sideId || isAccountValidated) return

      try {
        setIsValidating(true)
        const response = await validateAccountAssignment({
          accountNumber: inputValue,
          packageCustodianId: tradeId
        })

        const investor = response?.investor
        const participant = response?.participant

        if (investor) {
          const investorName = investor.companyName
            ? investor.companyName
            : `${investor.firstName ?? ''} ${investor.lastName ?? ''}`.trim()

          const idTypeDescription =
            investor.identificationType?.description ?? ''

          setAccountData((prev) => ({
            ...prev,
            investorName,
            idType: idTypeDescription,
            idNumber: investor.documentNumber ?? ''
          }))
          setAccountIds({
            investorAccountId: response?.investor?.id ?? null,
            participantAccountId: null
          })
          setIsAccountValidated(true)
        } else if (participant) {
          const participantName =
            participant.name ?? participant.shortName ?? ''

          const idTypeDescription =
            participant.identificationType?.description ?? ''

          setAccountData((prev) => ({
            ...prev,
            investorName: participantName,
            idType: idTypeDescription,
            idNumber: participant.documentNumber ?? ''
          }))
          setAccountIds({
            investorAccountId: null,
            participantAccountId: response.participant!.id
          })
          setIsAccountValidated(true)
        }
      } catch (error) {
        console.error('Error validating account:', error)
        setIsAccountValidated(false)
        setAccountError(true)
      } finally {
        setIsValidating(false)
      }
    },
    [tradeId, sideId, originId, isAccountValidated]
  )

  const handleAccountKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      ;(e.target as HTMLInputElement).blur()
    }
  }, [])

  const handleAdmit = useCallback(async () => {
    if (admitEnabled) {
      if (
        isAccountValidated &&
        tradeId != null &&
        sideId != null &&
        custodianId != null &&
        fraction != null
      ) {
        try {
          onLoadingChange?.(true)
          const response = await executeAdmitChangeAccount({
            packageId: tradeId,
            custodianId,
            investorAccountId: accountIds.investorAccountId,
            participantAccountId: accountIds.participantAccountId,
            sourceQuoteTypeId: originId
          })
          if (
            !response.valid &&
            response.message === 'Fracciones sin admitir'
          ) {
            generateLogs({
              actionDestination: 'custodian-management',
              actionType: `Admisión con modificación de cuenta rechazada por negocio (package: ${tradeId})`
            })
            handleClose()

            onShowModal({
              title: t(MODAL_TITLES_TRANSLATIONS.ADMISSION_ERRORS),
              message: t(MODAL_MESSAGES_TRANSLATIONS.ADMISSION_ERRORS),
              variant: 'error',
              errorData: response.errorsSettlements,
              onClick: onCloseModal,
              textSuccess: t(BUTTON_LABELS_TRANSLATIONS.BACK)
            })
            onShowToast({
              message: t(ERROR_MESSAGES_TRANSLATIONS.ADMISSION_FAILED_TABLE),
              variant: 'error'
            })
            return
          }
          // log de auditoria de admisión exitosa con cambio de cuenta
          generateLogs({
            actionDestination: 'custodian-management',
            actionType: `Admisión ejecutada exitosamente (package: ${tradeId})`
          })
          onShowToast?.({
            // message: 'Cuenta Títulos Modificada',
            message: t(SUCCESS_MESSAGES_TRANSLATIONS.ACCOUNT_TITLE_MODIFIED),
            variant: 'success'
          })
          onShowToast?.({
            message: t(SUCCESS_MESSAGES_TRANSLATIONS.ADMISSION),
            variant: 'success'
          })
          onRefreshTable?.()
          handleClose()
        } catch (error) {
          console.error('Error changing account title:', error)
          generateLogs({
            actionDestination: 'custodian-management',
            actionType: `Error técnico en admisión con modificación de cuenta (package: ${tradeId})`
          })
          onShowToast?.({
            // message: 'No fue posible Modificar la cuenta Títulos',
            message: t(SUCCESS_MESSAGES_TRANSLATIONS.NOT_MODIFY_ACCOUNT_TITLE),
            variant: 'error'
          })
        } finally {
          onLoadingChange?.(false)
        }
      }
    } else {
      onAdmit()
    }
  }, [
    admitEnabled,
    isAccountValidated,
    tradeId,
    onCloseModal,
    onShowModal,
    sideId,
    custodianId,
    fraction,
    accountIds,
    originId,
    onAdmit,
    generateLogs,
    onShowToast,
    onRefreshTable,
    onLoadingChange,
    handleClose,
    t
  ])
  if (!isSingleSelection) {
    return (
      <Modal
        open={open}
        onClose={handleClose}
        boxProps={{ sx: { maxWidth: 929, borderRadius: 2, width: '100%' } }}
      >
        <>
          <Typography variant="h4" sx={{ mb: 3, mt: 4 }}>
            {/* Admisión de Custodios */}
            {trans('adminCustodian')}
          </Typography>

          <DefaultComponents.Paper
            elevation={1}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              mb: 2,
              p: '16px'
            }}
          >
            <MaterialIcons.ErrorOutline sx={{ color: 'error.main', mr: 1.5 }} />
            <DefaultComponents.Box>
              <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
                {/* Admisión de Custodios */}
                {t('adminCustodian')}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {/* ¿Estás seguro de admitir las fracciones seleccionadas previamente? */}
                {t('confirmAdmission')}
              </Typography>
            </DefaultComponents.Box>
          </DefaultComponents.Paper>

          <DefaultComponents.Box
            sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}
          >
            <Button variant="outlined" onClick={handleClose} size="medium">
              {t(BUTTON_LABELS_TRANSLATIONS.CANCEL)}
            </Button>
            <Button variant="contained" onClick={onAdmit} size="medium">
              {t(BUTTON_LABELS_TRANSLATIONS.ADMIT)}
            </Button>
          </DefaultComponents.Box>
        </>
      </Modal>
    )
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      boxProps={{ sx: { maxWidth: 929, borderRadius: 2, width: '100%' } }}
    >
      <>
        <Typography variant="h4" sx={{ mb: 3 }}>
          {/* Admisión de Custodios */}
          {trans('adminCustodian')}
        </Typography>
        <DefaultComponents.Paper elevation={1} sx={{ mb: 2, p: '16px' }}>
          <DefaultComponents.Box
            sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}
          >
            <MaterialIcons.ErrorOutline
              sx={{ color: 'error.main', fontSize: 18.5, flexShrink: 0 }}
            />
            <DefaultComponents.Box>
              <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
                {/* Admisión de custodios */}
                {trans('adminCustodian')}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {/* ¿Estás seguro de admitir las fracciones seleccionadas previamente? */}
                {trans('confirmAdmission')}
              </Typography>
            </DefaultComponents.Box>
          </DefaultComponents.Box>
          <DefaultComponents.Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              mt: 0.5,
              pl: '30px'
            }}
          >
            <Typography variant="subtitle1">
              {/* Admitir Custodio */}
              {trans('admitCustodian')}
            </Typography>
            <DefaultComponents.Switch
              checked={admitEnabled}
              onChange={handleSwitchChange}
              color="primary"
              size="small"
            />
          </DefaultComponents.Box>
        </DefaultComponents.Paper>

        <DefaultComponents.Accordion
          expanded={admitEnabled}
          onChange={handleSwitchChange}
          elevation={1}
          disableGutters
          sx={{ '&:before': { display: 'none' } }}
        >
          <DefaultComponents.AccordionSummary
            expandIcon={<MaterialIcons.ExpandMore />}
          >
            <DefaultComponents.Box
              sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}
            >
              <MaterialIcons.BorderColorOutlined
                sx={{
                  fontSize: 18.5,
                  color: admitEnabled ? 'primary.main' : 'text.secondary'
                }}
              />
              <DefaultComponents.Box>
                <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
                  {/* Modificar Cuenta Títulos */}
                  {trans('modifyAccount')}
                </Typography>
                <DefaultComponents.Box
                  sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: admitEnabled ? 'primary.main' : 'text.secondary'
                    }}
                  >
                    {/* Editar */}
                    {trans('edit')}
                  </Typography>
                </DefaultComponents.Box>
              </DefaultComponents.Box>
            </DefaultComponents.Box>
          </DefaultComponents.AccordionSummary>
          <DefaultComponents.AccordionDetails>
            <DefaultComponents.Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 2,
                mt: 1
              }}
            >
              <TextField
                size="small"
                // placeholder="Ingresa la cuenta títulos *"
                placeholder={trans('enterAccountPlaceholder')}
                value={accountData.accountNumber}
                onChange={handleAccountNumberChange}
                onBlur={handleAccountBlur}
                onKeyDown={handleAccountKeyDown}
                disabled={isValidating}
                error={accountError}
                helperText={accountError ? trans('notFoundAccount') : undefined}
                slotProps={{
                  input: {
                    endAdornment: isValidating ? (
                      <DefaultComponents.CircularProgress size={20} />
                    ) : undefined
                  }
                }}
              />
              <TextField
                // label="Nombre Inversionista"
                label={trans('investorName')}
                size="small"
                // placeholder="Ingresa Nombre del inversionista"
                placeholder={trans('enterInvestorName')}
                value={accountData.investorName}
                onChange={handleInvestorNameChange}
                disabled
              />
              <DefaultComponents.Box
                sx={{
                  '& .MuiInputLabel-root': { color: 'rgba(0, 0, 0, 0.38)' }
                }}
              >
                <SelectNuam
                  // label="Tipo ID"
                  label={trans('typeID')}
                  size="small"
                  options={idTypeOptions}
                  value={accountData.idType}
                  valueKey="value"
                  labelKey="label"
                  onChange={handleIdTypeChange}
                  formControlProps={{ fullWidth: true, size: 'small' }}
                  MenuProps={{
                    disablePortal: true,
                    PaperProps: { sx: { zIndex: 2000 } }
                  }}
                  sx={{
                    '& .MuiSelect-select.Mui-disabled': {
                      WebkitTextFillColor: 'rgba(0, 0, 0, 0.38)'
                    }
                  }}
                  disabled
                />
              </DefaultComponents.Box>
              <TextField
                size="small"
                // placeholder="Ingresa el numero de ID"
                placeholder={trans('enterIDNumber')}
                value={accountData.idNumber}
                onChange={handleIdNumberChange}
                disabled
              />
            </DefaultComponents.Box>
          </DefaultComponents.AccordionDetails>
        </DefaultComponents.Accordion>

        <DefaultComponents.Box
          sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}
        >
          <Button variant="outlined" onClick={handleClose}>
            {t(BUTTON_LABELS_TRANSLATIONS.CANCEL)}
          </Button>
          <Button
            variant="contained"
            onClick={handleAdmit}
            disabled={admitEnabled && (isValidating || !isAccountValidated)}
          >
            {t(BUTTON_LABELS_TRANSLATIONS.ADMIT)}
          </Button>
        </DefaultComponents.Box>
      </>
    </Modal>
  )
}

```

## src/features/custodians/components/CustodianTotals.tsx

```tsx
import { Typography } from '@nuam/common-fe-lib-components'

import useTranslate from '@/shared/hooks/useTranslate'

import type { CustodianDetailTotals } from '../types/custodianDetails'

interface CustodianTotalsProps {
  totals: CustodianDetailTotals
}

const fmt = (value: number) =>
  value.toLocaleString('es-ES', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })

const TotalItem = ({ label, value }: { label: string; value: number }) => (
  <div className="flex gap-2 sm:gap-4 md:gap-8">
    <Typography className="whitespace-nowrap text-center text-sm sm:text-base font-medium">
      {label}
    </Typography>
    <Typography className="whitespace-nowrap text-center text-sm sm:text-base font-medium">
      {fmt(value)}
    </Typography>
  </div>
)

const CustodianTotals = ({ totals }: CustodianTotalsProps) => {
  const { t } = useTranslate({ keyPrefix: 'custodianDetails.totals' })

  return (
    <div className="p-2">
      <div className="overflow-x-auto">
        <div className="flex min-w-max items-center justify-center gap-4 border-b border-black py-5 px-4 sm:gap-6 md:gap-8 lg:min-w-full lg:justify-center">
          <TotalItem label={t('quantityTotal')} value={totals.quantityTotal} />
          <TotalItem
            label={t('outFlowAmount')}
            value={totals.outFlowAmountTotal}
          />
          <TotalItem label={t('commission')} value={totals.commissionTotal} />
          <TotalItem label={t('tax')} value={totals.taxTotal} />
          <TotalItem label={t('netAmount')} value={totals.netAmountTotal} />
        </div>
      </div>
    </div>
  )
}

export default CustodianTotals

```

## src/features/custodians/components/ModalErrorCustodian.tsx

```tsx
import { Button, Typography } from '@nuam/common-fe-lib-components'

import { Modal } from 'remoteUtilities/components-mf-utilities'
import { NewTable } from 'remoteUtilities/components-mf-utilities/NewTable'

import useTranslate from '@/shared/hooks/useTranslate'

import type { ModalConfig } from '../types'
import { errorColumns } from '../utils/errorColumns'

interface ModalErrorCustodianProps {
  modalConfig: ModalConfig | null
  closeModal: () => void
}
const ModalErrorCustodian = ({
  modalConfig,
  closeModal
}: ModalErrorCustodianProps) => {
  const { t: tColumnsError } = useTranslate({
    keyPrefix: 'custodians.columnsError'
  })
  const { t } = useTranslate({ keyPrefix: 'custodians' })

  return (
    <Modal
      open
      showCancelButton={false}
      hiddenIconClose={true}
      boxProps={{
        sx: {
          width: '80%',
          maxWidth: 900,
          maxHeight: '80vh',
          overflow: 'auto'
        }
      }}
    >
      <>
        <Typography variant="h5" sx={{ mb: 2 }}>
          {modalConfig?.title}
        </Typography>

        <Typography variant="body2" sx={{ mb: 3 }}>
          {modalConfig?.message}
        </Typography>

        <NewTable
          columns={errorColumns(tColumnsError)}
          rows={modalConfig?.errorData!.map((item, index) => ({
            ...item,
            id: `${item.settlement?.trade?.id}-${item.settlement?.fraction}-${index}`
          }))}
          endpoint=""
          disableRowSelectionOnClick
          checkboxSelection={false}
          noShowNoData
          hideRightToolbar
          enableBackendPagination={false}
          hideFooter
          axiosInstanceKey="httpOperationsQuery"
        />

        <div className="mt-6 flex justify-end">
          <Button
            variant="contained"
            color="primary"
            onClick={closeModal}
            sx={{ width: 200 }}
          >
            {modalConfig?.textSuccess || t('back')}
          </Button>
        </div>
      </>
    </Modal>
  )
}

export default ModalErrorCustodian

```

## src/features/custodians/components/RejectionForm.tsx

```tsx
import {
  DefaultComponents,
  TextField,
  Typography
} from '@nuam/common-fe-lib-components'
import { useState, forwardRef, useImperativeHandle } from 'react'

import { SelectNuam } from 'remoteUtilities/components-mf-utilities'

import useTranslate from '@/shared/hooks/useTranslate'

import type { RejectionReason, RejectionFormRef } from '../types'

interface IRejectionFormProps {
  options: RejectionReason[]
  onChange: (value: RejectionReason | null) => void
  externalError?: string | null
}

export const RejectionForm = forwardRef<RejectionFormRef, IRejectionFormProps>(
  ({ options, onChange }, ref) => {
    const [selectedReason, setSelectedReason] =
      useState<RejectionReason | null>(null)
    const { t } = useTranslate({ keyPrefix: 'custodians' })
    const [isOther, setIsOther] = useState(false)
    const [otherRejectReason, setOtherRejectReason] = useState('')

    const [selectError, setSelectError] = useState<string | null>(null)
    const [otherError, setOtherError] = useState<string | null>(null)

    const handleChange = (option: RejectionReason | null) => {
      if (option) setSelectError(null)

      setSelectedReason(option)
      onChange(option)

      const selectedOption = options.find((o) => o.id === option?.id)
      const nameNormalized = selectedOption?.description
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim()
        .toLowerCase()
      const isOtherSelected = nameNormalized === 'otro'
      setIsOther(isOtherSelected)
    }

    const updateOtherReason = (value: string) => {
      setOtherRejectReason(value)

      if (selectedReason) {
        const updated = { ...selectedReason, otherReason: value }
        setSelectedReason(updated)
        onChange(updated)
      }

      if (value.trim()) setOtherError(null)
    }

    useImperativeHandle(ref, () => ({
      showError: (message: string) => setSelectError(message),
      showOtherError: (message: string) => setOtherError(message)
    }))

    return (
      <DefaultComponents.Box>
        <div className="mx-auto max-w-md space-y-4 text-left">
          <p>
            {/* Seleccione una opción. */}
            {t('selectOption')}
          </p>
          <SelectNuam
            id="rejection-reason-select"
            label=""
            size="small"
            options={options}
            valueKey="id"
            labelKey="description"
            value={selectedReason}
            onChange={handleChange}
            formControlProps={{ fullWidth: true }}
            MenuProps={{
              disablePortal: true,
              PaperProps: { sx: { zIndex: 2000 } }
            }}
            sx={{ width: '100%' }}
            required={true}
            error={!!selectError}
          />
          {selectError && (
            <Typography variant="caption" color="primary">
              {selectError as string}
            </Typography>
          )}
          {isOther && (
            <TextField
              value={otherRejectReason}
              // label="Escriba la razón del rechazo"
              label={t('enterRejectionReason')}
              onChange={(e: any) => {
                const value = e?.target?.value ?? String(e ?? '')
                updateOtherReason(value)
              }}
              type="text"
              size="small"
              fullWidth
              required
            />
          )}
          {otherError && (
            <Typography variant="caption" color="primary">
              {otherError as string}
            </Typography>
          )}
        </div>
      </DefaultComponents.Box>
    )
  }
)

```

## src/features/custodians/components/ToolbarActions.tsx

```tsx
import { useMemo } from 'react'

import { useScreenActions } from 'remoteShell/mf-shell-useScreenActions'
import { Dropdown } from 'remoteUtilities/components-mf-utilities'

import { OPERATION_CUSTODIAN_ACTIONS } from '@/shared/constants/actionCodes'
import useTranslate from '@/shared/hooks/useTranslate'

import { DROPDOWN_TITLE_TRANSLATIONS } from '../constants'
import { useCustodianActions } from '../hooks/useCustodianActions'
import type { ModalConfig, SelectedCustodianItem, ToastMessage } from '../types'
import { getCustodianDropdownOptions } from '../utils/custodianOptionsToolbar'

interface ToolbarActionsProps {
  selectedItems: SelectedCustodianItem[]
  custodianId?: number
  onShowModal: (config: ModalConfig) => void
  onCloseModal: () => void
  onShowToast: (config: ToastMessage) => void
  onLoadingChange?: (isLoading: boolean) => void
  custodianStatus?: string[]
  onRefreshTable: () => void
}

export const ToolbarActions: React.FC<ToolbarActionsProps> = ({
  selectedItems,
  custodianId,
  onShowModal,
  onCloseModal,
  onShowToast,
  onLoadingChange,
  custodianStatus,
  onRefreshTable
}) => {
  const { handleAction } = useCustodianActions({
    selectedItems,
    custodianId,
    onShowModal,
    onCloseModal,
    onShowToast,
    onRefreshTable,
    onLoadingChange,
    totalElements: selectedItems[0]?.totalElements || 0
  })

  const { hasAction } = useScreenActions()
  const permissions = useMemo(
    () => ({
      canAdmit: hasAction(OPERATION_CUSTODIAN_ACTIONS.ADMIT),
      canPrematch: hasAction(OPERATION_CUSTODIAN_ACTIONS.PREMATCH),
      canReject: hasAction(OPERATION_CUSTODIAN_ACTIONS.REJECT)
    }),
    [hasAction]
  )

  const hasSelectedItems = selectedItems.length === 1
  const { t } = useTranslate({ keyPrefix: 'custodians.toolbar' })
  const dropdownOptions = getCustodianDropdownOptions(
    handleAction,
    t,
    custodianStatus,
    permissions
  )

  return (
    <div className="flex gap-2">
      <Dropdown
        title={t(DROPDOWN_TITLE_TRANSLATIONS)}
        options={dropdownOptions}
        disabled={!hasSelectedItems}
      />
    </div>
  )
}

```

## src/features/custodians/constants/custodianDetails.tsx

```tsx
import { GridColDef } from '@mui/x-data-grid'

import { defaultValueField } from 'remoteUtilities/defaultValueField'
import { formattedDate } from 'remoteUtilities/formattedDate'
import { formatNumberWithThousandsSeparator } from 'remoteUtilities/formattedNumber'

import { CustodianDetailHeader } from '../types/custodianDetails'

export const buildCustodianDetailHeaderColumns = (
  header: CustodianDetailHeader | null,
  t: (key: string) => string
) => [
  {
    title: 'col1',
    rows: [
      { label: t('packageCode'), value: header?.packageCode ?? '' },
      { label: t('packageReference'), value: header?.referencePackage ?? '' },
      { label: t('mnemonic'), value: header?.mnemonic ?? '' },
      { label: t('investorIdType'), value: header?.investorIdType ?? '' }
    ]
  },
  {
    title: 'col2',
    rows: [
      { label: t('ficAdministrator'), value: header?.ficAdministrator ?? '' },
      { label: t('participant'), value: header?.participant ?? '' },
      { label: t('isin'), value: header?.isin ?? '' },
      { label: t('investorId'), value: header?.investorId ?? '' }
    ]
  },
  {
    title: 'col3',
    rows: [
      { label: t('custodian'), value: header?.custodian ?? '' },
      { label: t('side'), value: header?.side ?? '' },
      { label: t('depository'), value: header?.depository ?? '' }
    ]
  }
]

export const buildCustodianDetailTableColumns = (
  t: (key: string) => string
): GridColDef[] => [
  {
    field: 'operationTypeCode',
    headerName: t('columns.operationType'),
    width: 130
  },
  {
    field: 'registrationDate',
    headerName: t('columns.registrationDate'),
    width: 150,
    valueGetter: (value) => {
      const registrationDate = formattedDate({
        date: value
      })
      return defaultValueField({ value: registrationDate })
    }
  },
  {
    field: 'clearingDate',
    headerName: t('columns.settlementDate'),
    width: 150,
    valueGetter: (value) => {
      const registrationDate = formattedDate({
        date: value
      })
      return defaultValueField({ value: registrationDate })
    }
  },
  {
    field: 'returnClearingDate',
    headerName: t('columns.returnSettlementDate'),
    width: 200,
    valueGetter: (value) => {
      const registrationDate = formattedDate({
        date: value
      })
      return defaultValueField({ value: registrationDate })
    }
  },
  {
    field: 'tradeId',
    headerName: t('columns.operationId'),
    width: 130,
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'fraction',
    headerName: t('columns.fractionNumber'),
    width: 120,
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'securitiesAccount',
    headerName: t('columns.titleAccount'),
    width: 130,
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'quantity',
    headerName: t('columns.quantity'),
    width: 110,
    align: 'right',
    headerAlign: 'right',
    valueGetter: (_, data) => {
      const quantity = data.quantity
      return formatNumberWithThousandsSeparator(quantity, false, false)
    }
  },
  {
    field: 'price',
    headerName: t('columns.price'),
    width: 160,
    align: 'right',
    headerAlign: 'right',
    valueGetter: (_, data) => {
      const price = data.price
      return formatNumberWithThousandsSeparator(price, false, true)
    }
  },
  {
    field: 'rate',
    headerName: t('columns.rate'),
    width: 90,
    align: 'right',
    headerAlign: 'right',
    valueGetter: (_, data) => {
      const rate = data.rate
      if (rate == null) return ''
      return `${formatNumberWithThousandsSeparator(rate, false, true)}%`
    }
  },
  {
    field: 'grossValue',
    headerName: t('columns.grossValue'),
    width: 160,
    align: 'right',
    headerAlign: 'right',
    valueGetter: (_, data) => {
      const grossValue = data.grossValue
      return formatNumberWithThousandsSeparator(grossValue, false, true)
    }
  },
  {
    field: 'commissionPercentage',
    headerName: t('columns.commissionPercentage'),
    width: 130,
    align: 'right',
    headerAlign: 'right',
    valueGetter: (_, data) => {
      const commissionPercentage = data.commissionPercentage
      if (commissionPercentage == null) return ''
      const value = `${commissionPercentage.toLocaleString('es-CO', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 4
      })}%`
      return value
    }
  },
  {
    field: 'commissionAmount',
    headerName:
      t('columns.commissionAmount') === 'columns.commissionAmount'
        ? 'Valor Comisión'
        : t('columns.commissionAmount'),
    width: 160,
    align: 'right',
    headerAlign: 'right',
    valueGetter: (_, data) => {
      const commissionAmount = data.commissionAmount
      return formatNumberWithThousandsSeparator(commissionAmount, false, true)
    }
  },
  {
    field: 'valTaxAmount',
    headerName:
      t('columns.valTaxAmount') === 'columns.valTaxAmount'
        ? 'IVA comisión'
        : t('columns.valTaxAmount'),
    width: 140,
    align: 'right',
    headerAlign: 'right',
    valueGetter: (_, data) => {
      const valTaxAmount = data.valTaxAmount
      return formatNumberWithThousandsSeparator(valTaxAmount, false, true)
    }
  },
  {
    field: 'netTotal',
    headerName:
      t('columns.netOutFlowTotal') === 'columns.netOutFlowTotal'
        ? 'Total Neto'
        : t('columns.netOutFlowTotal'),
    width: 140,
    align: 'right',
    headerAlign: 'right',
    valueGetter: (_, data) => {
      const netTotal = data.netTotal
      return formatNumberWithThousandsSeparator(netTotal, false, true)
    }
  },
  {
    field: 'netReturnValue',
    headerName:
      t('columns.totalNetReturn') === 'columns.totalNetReturn'
        ? 'Valor neto de regreso'
        : t('columns.totalNetReturn'),
    width: 180,
    align: 'right',
    headerAlign: 'right',
    valueGetter: (_, data) => {
      const netReturnValue = data.netReturnValue
      const value = formatNumberWithThousandsSeparator(
        netReturnValue,
        false,
        true
      ).trim()
      return defaultValueField({ value, defaultValue: '0' })
    }
  },
  {
    field: 'transferValue',
    headerName:
      t('columns.outFlowTurnoverValue') === 'columns.outFlowTurnoverValue'
        ? 'Valor de Giro'
        : t('columns.outFlowTurnoverValue'),
    width: 140,
    align: 'right',
    headerAlign: 'right',
    valueGetter: (_, data) => {
      const transferValue = data.transferValue
      return formatNumberWithThousandsSeparator(transferValue, false, true)
    }
  },
  {
    field: 'returnTurnoverValue',
    headerName:
      t('columns.returnTurnoverValue') === 'columns.returnTurnoverValue'
        ? 'Valor de Giro Regreso'
        : t('columns.returnTurnoverValue'),
    width: 180,
    align: 'right',
    headerAlign: 'right',
    valueGetter: (_, data) => {
      const returnTurnoverValue = data.returnTurnoverValue
      return formatNumberWithThousandsSeparator(
        returnTurnoverValue,
        false,
        true
      )
    }
  }
]

```

## src/features/custodians/constants/index.ts

```typescript
export const CUSTODIAN_ACTIONS = {
  PRE_MATCH: 'preMatch',
  ADMISSION: 'admissionCustodian',
  REJECTION: 'rejectionCustodian'
} as const

export type CustodianAction =
  (typeof CUSTODIAN_ACTIONS)[keyof typeof CUSTODIAN_ACTIONS]

export const SUCCESS_MESSAGES = {
  PRE_MATCH: 'Fracción Pre-admitida.',
  ADMISSION: 'Fracción admitida.',
  REJECTION: 'Fracción rechazada.'
} as const
export const SUCCESS_MESSAGES_TRANSLATIONS = {
  // PRE_MATCH: 'Fracción Pre-admitida.',
  PRE_MATCH: 'fractionPreMatch',
  // ADMISSION: 'Fracción admitida.',
  ADMISSION: 'fractionAdmission',
  // REJECTION: 'Fracción rechazada.'
  REJECTION: 'fractionRejection',
  // ACCOUNT_TITLE_MODIFIED: 'Cuenta Títulos Modificada'
  ACCOUNT_TITLE_MODIFIED: 'accountTitleModified',
  // NOT_MODIFY_ACCOUNT_TITLE: 'No fue posible Modificar la cuenta Títulos',
  NOT_MODIFY_ACCOUNT_TITLE: 'notModifyAccountTitle'
} as const

export const ERROR_MESSAGES = {
  PRE_MATCH_FAILED: 'No se pudo ejecutar el Pre-Match. Intente nuevamente.',
  ADMISSION_FAILED: 'No se pudo admitir las fracciones. Intente nuevamente.',
  REJECTION_FAILED: 'No se pudo rechazar las fracciones. Intente nuevamente.',
  REJECT_FAILED: 'No se pudo rechazar las fracciones. Intente nuevamente.',
  ADMISSION_FAILED_TABLE: 'No fue posible admitir la fracción.',
  REJECTION_REASON_REQUIRED:
    'Es necesario seleccionar un motivo de rechazo para continuar.',
  REJECT_FAILED_CUSTODIAN:
    'El participante debe ser custodio para realizar esta acción.',
  GENERIC_ERROR: 'Ha ocurrido un error. Intente nuevamente.'
} as const

export const ERROR_MESSAGES_TRANSLATIONS = {
  PRE_MATCH_FAILED: 'preMatchFailed',
  ADMISSION_FAILED: 'admissionFailed',
  REJECTION_FAILED: 'rejectionFailed',
  REJECT_FAILED: 'rejectFailed',
  ADMISSION_FAILED_TABLE: 'admissionFailedTable',
  REJECTION_REASON_REQUIRED: 'rejectionReasonRequired',
  REJECT_FAILED_CUSTODIAN: 'rejectFailedCustodian',
  GENERIC_ERROR: 'genericError',
  SINGLE_ITEM_REQUIRED: 'singleItemRequired'
} as const

export const MODAL_TITLES = {
  CONFIRM_PRE_MATCH:
    '¿Estás seguro de pre admitir las fracciones seleccionadas previamente?',
  CONFIRM_ADMISSION:
    '¿Estás seguro de admitir las fracciones seleccionadas previamentessss?',
  PRE_MATCH_ERRORS: 'Fracciones sin pre-admitir',
  ADMISSION_ERRORS: 'Fracciones sin admitir',
  REJECTION_ERRORS: 'Fracciones sin rechazar',
  CONFIRM_REJECTION:
    '¿Estás seguro de rechazar las fracciones seleccionadas previamente?',
  ERROR: 'Error'
} as const
export const MODAL_TITLES_TRANSLATIONS = {
  // CONFIRM_PRE_MATCH: '¿Estás seguro de pre admitir las fracciones seleccionadas previamente?',
  CONFIRM_PRE_MATCH: 'confirmPreMatch',
  // CONFIRM_ADMISSION: '¿Estás seguro de admitir las fracciones seleccionadas previamentessss?',
  CONFIRM_ADMISSION: 'confirmAdmission',
  // PRE_MATCH_ERRORS: 'Fracciones sin pre-admitir',
  PRE_MATCH_ERRORS: 'withoutPreMatch',
  // ADMISSION_ERRORS: 'Fracciones sin admitir',
  ADMISSION_ERRORS: 'withoutAdmission',
  // REJECTION_ERRORS: 'Fracciones sin rechazar',
  REJECTION_ERRORS: 'withoutRejection',
  // CONFIRM_REJECTION: '¿Estás seguro de rechazar las fracciones seleccionadas previamente?',
  CONFIRM_REJECTION: 'confirmRejection',
  CONFIRM_REJECTION_DESCRIPTION: 'confirmRejectionDescription',
  // ERROR: 'Error',
  ERROR: 'error'
} as const

export const MODAL_MESSAGES = {
  PRE_MATCH_ERRORS:
    'No es posible realizar pre match de las siguientes fracciones:',
  ADMISSION_ERRORS: 'No es posible admitir las siguientes fracciones:',
  REJECTION_ERRORS: 'No es posible rechazar las siguientes fracciones:'
} as const
export const MODAL_MESSAGES_TRANSLATIONS = {
  // PRE_MATCH_ERRORS: 'No es posible realizar pre match de las siguientes fracciones:',
  PRE_MATCH_ERRORS: 'notPosiblePreMatch',
  // ADMISSION_ERRORS: 'No es posible admitir las siguientes fracciones:',
  ADMISSION_ERRORS: 'notPosibleAdmission',
  // REJECTION_ERRORS: 'No es posible rechazar las siguientes fracciones:'
  REJECTION_ERRORS: 'notPosibleRejection'
} as const

export const BUTTON_LABELS = {
  CANCEL: 'CANCELAR',
  BACK: 'VOLVER',
  PRE_MATCH: 'REALIZAR PRE-MATCH',
  ADMIT: 'ADMITIR',
  REJECT: 'RECHAZAR'
} as const
export const BUTTON_LABELS_TRANSLATIONS = {
  // CANCEL: 'CANCELAR',
  CANCEL: 'cancel',
  // BACK: 'VOLVER',
  BACK: 'back',
  // PRE_MATCH: 'REALIZAR PRE-MATCH',
  PRE_MATCH: 'preMatch',
  // ADMIT: 'ADMITIR',
  ADMIT: 'admit',
  // REJECT: 'RECHAZAR'
  REJECT: 'reject'
} as const

export const DROPDOWN_TITLE = 'Opciones de Custodio'

export const PAGE_TITLE_TRANSLATIONS = 'title'
export const DROPDOWN_TITLE_TRANSLATIONS = 'custodianOptions'

export const TOOLBAR_CUSTODIAN_OPTIONS = {
  // preMatch: 'Pre-Match',
  preMatch: 'preMatch',
  // adminCustodian: 'Admisión Custodio',
  adminCustodian: 'adminCustodian',
  // custodianRejection: 'Rechazo Custodio'
  custodianRejection: 'custodianRejection'
}

```

## src/features/custodians/hooks/useCustodianActions.tsx

```tsx
import { useCallback, useMemo, useRef } from 'react'
import { useSelector } from 'react-redux'

import useGenerateLogs from '@/shared/hooks/useGenerateLogs'
import useParticipantIsCustodian from '@/shared/hooks/useParticipantIsCustodioan'
import useTranslate from '@/shared/hooks/useTranslate'
import isDevMode from '@/shared/utils/isDevMode'

import { RejectionForm } from '../components/RejectionForm'
import {
  BUTTON_LABELS_TRANSLATIONS,
  CUSTODIAN_ACTIONS,
  ERROR_MESSAGES_TRANSLATIONS,
  MODAL_MESSAGES_TRANSLATIONS,
  MODAL_TITLES_TRANSLATIONS,
  SUCCESS_MESSAGES_TRANSLATIONS,
  type CustodianAction
} from '../constants'
import {
  executeAdmitCustody,
  executePrematchCustody,
  executeRejectCustody,
  executeRejectCustodyParticipant,
  getRejectReasons
} from '../services/custodianService'
import type {
  CustodianApiResponse,
  ModalConfig,
  RejectionReason,
  SelectedCustodianItem,
  ToastMessage,
  RejectionFormRef
} from '../types'

interface IUseCustodianActionsParams {
  totalElements: number
  selectedItems: SelectedCustodianItem[]
  custodianId?: number
  onShowModal: (config: ModalConfig) => void
  onCloseModal: () => void
  onShowToast: (config: ToastMessage) => void
  onRefreshTable: () => void
  onLoadingChange?: (isLoading: boolean) => void
}

export const useCustodianActions = ({
  totalElements,
  selectedItems,
  custodianId,
  onShowModal,
  onCloseModal,
  onShowToast,
  onRefreshTable,
  onLoadingChange
}: IUseCustodianActionsParams) => {
  const { t } = useTranslate({ keyPrefix: 'custodians' })
  const { generateLogs } = useGenerateLogs()
  const selectedRejectionReasonRef = useRef<RejectionReason | null>(null)
  const rejectionFormRef = useRef<RejectionFormRef>(null)
  const { isCustodianUser } = useParticipantIsCustodian()

  const lastModifyDate = useSelector(
    (state: any) => state?.auth?.infoUserNubo?.lastModifyDate // eslint-disable-line @typescript-eslint/no-explicit-any
  )

  const isClosingTimeSecondary = useMemo(() => {
    if (!lastModifyDate) return false
    const today = lastModifyDate.split('T')[0]
    return selectedItems.some((item) => {
      const dateToCompare =
        item.tradeType === 'REPO' ? item.returnClearingDate : item.clearingDate
      if (!dateToCompare) return false
      const day = String(dateToCompare).split('T')[0]
      return day === today
    })
  }, [selectedItems, lastModifyDate])
  const executePreMatch = useCallback(async () => {
    try {
      onLoadingChange?.(true)
      const body = { packageId: selectedItems[0].packageId }
      const response: CustodianApiResponse = await executePrematchCustody(
        body,
        isClosingTimeSecondary
      )

      if (!response.valid && response.errorsSettlements?.length > 0) {
        onCloseModal()
        onShowModal({
          title: t(MODAL_TITLES_TRANSLATIONS.PRE_MATCH_ERRORS),
          message: t(MODAL_MESSAGES_TRANSLATIONS.PRE_MATCH_ERRORS),
          variant: 'error',
          errorData: response.errorsSettlements,
          onClick: onCloseModal,
          textSuccess: t(BUTTON_LABELS_TRANSLATIONS.BACK)
        })
        return
      }
      generateLogs({
        actionType: `Pre-match ejecutado para el paquete: ${selectedItems.map((item) => `packageCustodianId: ${item.packageId}`).join(', ')}`,
        actionDestination: 'custodian-management'
      })
      onCloseModal()
      onShowToast({
        message: t(SUCCESS_MESSAGES_TRANSLATIONS.PRE_MATCH),
        variant: 'success'
      })
      onRefreshTable?.()
    } catch (error) {
      console.error('Error al ejecutar Pre-Match:', error)
      onShowModal({
        title: t(MODAL_TITLES_TRANSLATIONS.ERROR),
        message: t(ERROR_MESSAGES_TRANSLATIONS.PRE_MATCH_FAILED),
        variant: 'error',
        onClick: onCloseModal
      })
    } finally {
      onLoadingChange?.(false)
    }
  }, [
    selectedItems,
    isClosingTimeSecondary,
    onShowModal,
    onCloseModal,
    onShowToast,
    onRefreshTable,
    onLoadingChange,
    generateLogs
  ])

  const executeAdmission = useCallback(async () => {
    try {
      onLoadingChange?.(true)
      const body = {
        packageId: selectedItems[0].packageId,
        custodianId: custodianId
      }
      const response: CustodianApiResponse = await executeAdmitCustody(
        body,
        isClosingTimeSecondary
      )

      if (!response.valid && response.errorsSettlements?.length > 0) {
        onCloseModal()

        onShowModal({
          title: t(MODAL_TITLES_TRANSLATIONS.ADMISSION_ERRORS),
          message: t(MODAL_MESSAGES_TRANSLATIONS.ADMISSION_ERRORS),
          variant: 'error',
          errorData: response.errorsSettlements,
          onClick: onCloseModal,
          textSuccess: t(BUTTON_LABELS_TRANSLATIONS.BACK)
        })
        onShowToast({
          message: t(ERROR_MESSAGES_TRANSLATIONS.ADMISSION_FAILED_TABLE),
          variant: 'error'
        })
        return
      }
      generateLogs({
        actionType: `Admisión ejecutada para el paquete: ${selectedItems.map((item) => `packageCustodianId: ${item.packageId}`).join(', ')}`,
        actionDestination: 'custodian-management'
      })
      onCloseModal()
      onShowToast({
        message: t(SUCCESS_MESSAGES_TRANSLATIONS.ADMISSION),
        variant: 'success'
      })
      onRefreshTable?.()
    } catch (error) {
      console.error('Error al admitir las fracciones:', error)
      onCloseModal()
      onShowToast({
        message: t(ERROR_MESSAGES_TRANSLATIONS.ADMISSION_FAILED_TABLE),
        variant: 'error'
      })
    } finally {
      onLoadingChange?.(false)
    }
  }, [
    selectedItems,
    custodianId,
    isClosingTimeSecondary,
    onShowModal,
    onCloseModal,
    onShowToast,
    onRefreshTable,
    onLoadingChange,
    generateLogs
  ])

  const executeRejection = useCallback(async () => {
    try {
      const reason = selectedRejectionReasonRef.current

      if (!reason) {
        rejectionFormRef.current?.showError(
          t(ERROR_MESSAGES_TRANSLATIONS.REJECTION_REASON_REQUIRED)
        )
        return
      }
      if (reason.id === 23 && !reason.otherReason?.trim()) {
        rejectionFormRef.current?.showOtherError(
          'Debe escribir la razón del rechazo'
        )
        return
      }

      // const body = {
      //   custodianId,
      //   items: {...selectedItems, custodianId: custodianId, rejectionReasonId: reason.id, otherReason: reason.id === 23 ? reason.otherReason : undefined},
      //   rejectionReasonId: reason.id,
      //   otherReason: reason.id === 23 ? reason.otherReason : undefined
      // }

      const body = {
        packageId: selectedItems[0].packageId,
        custodianId: custodianId,
        rejectionReasonId: reason.id,
        otherReason: reason.id === 23 ? reason.otherReason : undefined
      }

      const packageStatus = selectedItems[0]?.packageStatus?.description

      const requestFn =
        packageStatus !== 'TRASLADADA'
          ? executeRejectCustody
          : executeRejectCustodyParticipant
      const response: CustodianApiResponse = await requestFn(
        body,
        isClosingTimeSecondary
      )
      if (!response.valid && response.errorsSettlements?.length > 0) {
        onCloseModal()
        onShowModal({
          title: t(MODAL_TITLES_TRANSLATIONS.REJECTION_ERRORS),
          message: t(MODAL_MESSAGES_TRANSLATIONS.REJECTION_ERRORS),
          variant: 'error',
          errorData: response.errorsSettlements,
          onClick: onCloseModal,
          textSuccess: t(BUTTON_LABELS_TRANSLATIONS.BACK)
        })
        return
      }
      generateLogs({
        actionType: `Rechazo ejecutado para el paquete: ${selectedItems.map((item) => `packageCustodianId: ${item.packageId}`).join(', ')}`,
        actionDestination: 'custodian-management'
      })
      onCloseModal()
      onShowToast({
        message: t(SUCCESS_MESSAGES_TRANSLATIONS.REJECTION),
        variant: 'success'
      })
      onRefreshTable?.()
    } catch (error: any) {
      if (isDevMode()) {
        console.error('Error al Rechazar las fracciones:', error)
      }
      const errorCode = error?.response?.data?.errorCode

      if (errorCode === 'PARTICIPANT_MUST_BE_CUSTODIAN') {
        onShowModal({
          title: t(MODAL_TITLES_TRANSLATIONS.ERROR),
          message: t(ERROR_MESSAGES_TRANSLATIONS.REJECT_FAILED_CUSTODIAN),
          variant: 'error',
          onClick: onCloseModal
        })
        return
      }

      onShowModal({
        title: t(MODAL_TITLES_TRANSLATIONS.ERROR),
        message: t(ERROR_MESSAGES_TRANSLATIONS.REJECT_FAILED),
        variant: 'error',
        onClick: onCloseModal
      })
    } finally {
      onLoadingChange?.(false)
    }
  }, [
    selectedItems,
    custodianId,
    isClosingTimeSecondary,
    isCustodianUser,
    onShowToast
  ])

  const confirmPreMatch = useCallback(() => {
    onShowModal({
      title: t(MODAL_TITLES_TRANSLATIONS.CONFIRM_PRE_MATCH),
      message: '',
      variant: 'warning',
      onClick: executePreMatch,
      handleCancel: onCloseModal,
      textCancel: t(BUTTON_LABELS_TRANSLATIONS.CANCEL),
      textSuccess: t(BUTTON_LABELS_TRANSLATIONS.PRE_MATCH),
      orientation: 'horizontal'
    })
  }, [executePreMatch, onShowModal, onCloseModal])

  const confirmAdmission = useCallback(() => {
    onShowModal({
      title: t(MODAL_TITLES_TRANSLATIONS.CONFIRM_ADMISSION),
      message: '',
      variant: 'warning',
      onClick: executeAdmission,
      handleCancel: onCloseModal,
      textCancel: t(BUTTON_LABELS_TRANSLATIONS.CANCEL),
      textSuccess: t(BUTTON_LABELS_TRANSLATIONS.ADMIT),
      orientation: 'horizontal',
      type: 'admission'
    })
  }, [executeAdmission, onShowModal, onCloseModal])

  const confirmRejection = useCallback(async () => {
    selectedRejectionReasonRef.current = null
    const reasons = await getRejectReasons()

    onShowModal({
      title: `${t(MODAL_TITLES_TRANSLATIONS.CONFIRM_REJECTION)} ${totalElements} ?`,
      message: t(MODAL_TITLES_TRANSLATIONS.CONFIRM_REJECTION_DESCRIPTION),
      variant: 'warning',
      onClick: executeRejection,
      handleCancel: () => {
        selectedRejectionReasonRef.current = null
        onCloseModal()
      },
      textCancel: t(BUTTON_LABELS_TRANSLATIONS.CANCEL),
      textSuccess: t(BUTTON_LABELS_TRANSLATIONS.REJECT),
      orientation: 'horizontal',
      children: (
        <RejectionForm
          ref={rejectionFormRef}
          options={reasons}
          onChange={(val) => {
            selectedRejectionReasonRef.current = val
          }}
        />
      )
    })
  }, [executeRejection, onShowModal, onCloseModal])

  const handleAction = useCallback(
    (action: CustodianAction) => {
      switch (action) {
        case CUSTODIAN_ACTIONS.PRE_MATCH:
          confirmPreMatch()
          break
        case CUSTODIAN_ACTIONS.ADMISSION:
          confirmAdmission()
          break
        case CUSTODIAN_ACTIONS.REJECTION:
          confirmRejection()
          break
        default:
          console.warn('Acción no reconocida:', action)
      }
    },
    [confirmPreMatch, confirmAdmission, confirmRejection]
  )
  return { handleAction }
}

export type UseCustodianActionsReturn = ReturnType<typeof useCustodianActions>

```

## src/features/custodians/hooks/useCustodianColumns.tsx

```tsx
import type { GridColDef } from '@mui/x-data-grid'
import { Link, TRenderCellParams } from '@nuam/common-fe-lib-components'
import { useNavigate } from 'react-router-dom'

import { defaultValueField } from 'remoteUtilities/defaultValueField'
import { formattedDate } from 'remoteUtilities/formattedDate'
import { formatNumberWithThousandsSeparator } from 'remoteUtilities/formattedNumber'
import { StatusChip } from 'remoteUtilities/statusChip'

import useTranslate from '@/shared/hooks/useTranslate'
import { SUBROUTES } from '@/shared/routes'

import type { PackageCustodians } from '../types/custodianPackages'

const useCustodianColumns = (permissions: { canShowDetail: any }) => {
  const { t } = useTranslate({ keyPrefix: 'custodians.columns' })
  const navigate = useNavigate()
  const { canShowDetail } = permissions

  const columns: GridColDef<PackageCustodians>[] = [
    ...(canShowDetail
      ? [
          {
            width: 97,
            // headerName: 'Detalles',
            headerName: t('details'),
            sortable: false,
            filterable: false,
            field: 'details',
            renderCell: (params: TRenderCellParams) => (
              <div className="hover:underline group-hover:inline-block">
                <Link
                  onClick={() => {
                    console.log(
                      'params.row.id',
                      SUBROUTES.OPERATION_CUSTODIAN_BY_ID(
                        params.row.packageNumber
                      )
                    )
                    console.log(
                      '2',
                      SUBROUTES.OPERATION_CUSTODIAN_BY_ID(
                        params.row.packageNumber
                      )
                    )
                    navigate(
                      SUBROUTES.OPERATION_CUSTODIAN_BY_ID(
                        params.row.packageNumber
                      )
                    )
                  }}
                >
                  Ver detalles
                  {/* {t('viewDetail')} */}
                </Link>
              </div>
            )
          }
        ]
      : []),
    {
      field: 'tradeType',
      //   headerName: 'Tipo de operación',
      headerName: t('tradeType'),
      flex: 1,
      minWidth: 150,
      valueGetter: (_, data) => {
        const value = data?.type?.description
        return defaultValueField({ value })
      }
    },
    {
      field: 'packageDate',
      // headerName: 'Fecha del paquete', // Pendiente Back
      headerName: t('packageDate'),
      flex: 1,
      minWidth: 100,
      valueGetter: (packageDate: any) => {
        return defaultValueField({
          value: packageDate,
          renderValue: formattedDate({ date: packageDate })
        })
      }
    },
    {
      //
      field: 'packageNumber',
      // headerName: 'Cód. de paquete', //Pendiente Back
      headerName: t('packageCode'),
      description: t('packageCodeDescription'),
      flex: 1,
      minWidth: 100
    },
    {
      field: 'participant',
      // headerName: 'Participante',
      headerName: t('participant'),
      flex: 1,
      minWidth: 150,
      valueGetter: (_, data) => {
        const value = data?.participant?.code
        return defaultValueField({ value })
      }
    },
    {
      field: 'referencePackage',
      // headerName: 'Referencia Paquete',
      headerName: t('referencePackage'),
      description: t('referencePackageDescription'),
      flex: 1,
      minWidth: 150,
      valueGetter: (value) => {
        return defaultValueField({ value })
      }
    },
    {
      field: 'custodianCode',
      //   headerName: 'Cod. Custodio',
      headerName: t('custodian'),
      flex: 1,
      minWidth: 120,
      valueGetter: (_, data) => {
        const value = data?.custodian?.code
        return defaultValueField({ value })
      }
    },
    {
      field: 'ficAdministratorCode',
      // headerName: 'Administrador FIC',
      headerName: t('ficAdministratorCode'),
      flex: 1,
      minWidth: 120,
      valueGetter: (_, data) => {
        const value = data?.ficAdministrator?.code
        return defaultValueField({ value })
      }
    },
    {
      field: 'side',
      //   headerName: 'Punta',
      headerName: t('side'),
      flex: 1,
      minWidth: 100,
      valueGetter: (_, data) => {
        const value = data?.side?.description
        return defaultValueField({ value })
      }
    },
    {
      field: 'clearingDate',
      //   headerName: 'Fecha Cumplimiento',
      headerName: t('clearingDate'),
      flex: 1,
      minWidth: 100,
      valueGetter: (clearingDate: any) => {
        return defaultValueField({
          value: clearingDate,
          renderValue: formattedDate({ date: clearingDate })
        })
      }
    },
    {
      field: 'symbol',
      //   headerName: 'Nemotécnico',
      headerName: t('mnemonic'),
      flex: 1,
      minWidth: 120,
      valueGetter: (_, data) => {
        const value = data?.securityTitle?.mnemonic
        return defaultValueField({ value })
      }
    },
    {
      field: 'returnClearingDate',
      //   headerName: 'Fecha de cumplimiento regreso',
      headerName: t('returnClearingDate'),
      flex: 1,
      minWidth: 120,
      valueGetter: (returnClearingDate: any) => {
        return defaultValueField({
          value: returnClearingDate,
          renderValue: formattedDate({ date: returnClearingDate })
        })
      }
    },
    {
      field: 'investorIdentificationType',
      // headerName: 'Tipo de Identificación del inversionista', // Pendiente Back
      headerName: t('investorIdentificationType'),
      flex: 1,
      minWidth: 100,
      valueGetter: (_, data) => {
        const value = data?.investor?.identificationType?.code
        return defaultValueField({ value })
      }
    },
    {
      field: 'investorDocumentNumberID',
      // headerName: 'Número de documento del inversionista', // Pendiente Back
      headerName: t('investorDocumentNumberID'),
      flex: 1,
      minWidth: 100,
      valueGetter: (_, data) => {
        const value = data?.investor?.documentNumber
        return defaultValueField({ value })
      }
    },
    {
      field: 'deposit',
      // headerName: 'Depósito', // Pendiente Back
      headerName: t('deposit'),
      flex: 1,
      minWidth: 100,
      valueGetter: (_, data) => {
        const value = data?.depository?.description
        return defaultValueField({ value })
      }
    },
    {
      field: 'investorAccount',
      //   headerName: 'Cuenta títulos / RUT',
      headerName: t('investorAccount'),
      flex: 1,
      minWidth: 120,
      valueGetter: (_, data) => {
        const value = data?.investorAccount?.accountNumber
        return defaultValueField({ value })
      }
    },
    {
      field: 'fractionQuantity',
      //   headerName: 'Cantidad',
      headerName: t('quantity'), // actualizar regla "Suma de las cantidades de las operaciones que conforman el paquete"
      flex: 1,
      minWidth: 120,
      renderCell: ({ row }) => {
        const quantity = row?.totalFractionQuantity
        return (
          <div>
            {formatNumberWithThousandsSeparator(quantity, false, false)}
          </div>
        )
      }
    },
    {
      field: 'price',
      //   headerName: 'Precio',
      headerName: t('price'), // Actualizar regla de "precio promedio del paquete"
      flex: 1,
      minWidth: 120,
      valueGetter: (_, data) => {
        const price = data?.averagePrice
        return formatNumberWithThousandsSeparator(price, false, true)
      }
    },
    {
      field: 'rate',
      // headerName: 'Tasa', // Pendiente Back
      headerName: t('rate'),
      flex: 1,
      minWidth: 100,
      valueGetter: (_, data) => {
        const rate = data?.averageRate ?? 0
        return formatNumberWithThousandsSeparator(rate, false, true)
      }
    },
    {
      field: 'commissionValue',
      // headerName: 'Valor comisión', // Pendiente Back
      headerName: t('commissionValue'),
      flex: 1,
      minWidth: 100,
      valueGetter: (_, data) => {
        const commissionValue = data?.totalCommissionAmount
        return formatNumberWithThousandsSeparator(commissionValue, false, true)
      }
    },
    {
      field: 'IVAValue',
      // headerName: 'Valor IVA', // Pendiente Back
      headerName: t('taxValue'),
      flex: 1,
      minWidth: 100,
      valueGetter: (_, data) => {
        const taxValue = data?.totalValTaxAmount
        return formatNumberWithThousandsSeparator(taxValue, false, true)
      }
    },
    {
      field: 'netValue',
      // headerName: 'Valor Neto', // Pendiente Back
      headerName: t('netAmount'),
      flex: 1,
      minWidth: 100,
      valueGetter: (_, data) => {
        const netValue = data?.totalNetAmount ?? 0
        return formatNumberWithThousandsSeparator(netValue, false, true)
      }
    },
    {
      field: 'totalNetReturn',
      // headerName: 'Total Neto Regreso', // Pendiente Back
      headerName: t('totalNetReturn'),
      flex: 1,
      minWidth: 100,
      valueGetter: (_, data) => {
        const totalNetReturn = data?.returnNetAmount
        return formatNumberWithThousandsSeparator(totalNetReturn, false, true)
      }
    },
    {
      field: 'packageStatus',
      // headerName: 'Estado del paquete', // Pendiente Back
      headerName: t('packageStatus'),
      flex: 1,
      minWidth: 100,
      valueGetter: (_, data) => {
        const value = data?.packageStatus?.description
        return defaultValueField({ value })
      },
      renderCell: ({ row }) => {
        const value = row?.packageStatus?.description
        const defaultValue = defaultValueField({ value })
        return value ? <StatusChip value={value} /> : defaultValue
      }
    },
    {
      field: 'compliancePercentage',
      // headerName: 'Porcentaje de cumplimiento', // Pendiente Back
      headerName: t('compliancePercentage'),
      flex: 1,
      minWidth: 100,
      valueGetter: (_, data) => {
        const compliancePercentage = data?.clearingPercentage ?? 0
        return formatNumberWithThousandsSeparator(
          compliancePercentage,
          false,
          true
        )
      }
    }
  ]
  return { columns }
}

export default useCustodianColumns

```

## src/features/custodians/hooks/useCustodianDetails.ts

```typescript
import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import useTranslate from '@/shared/hooks/useTranslate'

import {
  buildCustodianDetailHeaderColumns,
  buildCustodianDetailTableColumns
} from '../constants/custodianDetails'
import { getCustodianDetailHeader } from '../services/getCustodianDetails'
import type {
  CustodianDetailHeader,
  CustodianDetailTotals
} from '../types/custodianDetails'

export const useCustodianDetails = () => {
  const { packageNumber = '' } = useParams<{ packageNumber: string }>()

  const { t } = useTranslate({ keyPrefix: 'custodianDetails' })

  const [header, setHeader] = useState<CustodianDetailHeader | null>(null)
  const [packageCustodianId, setPackageCustodianId] = useState<number | null>(
    null
  )
  const [totals, setTotals] = useState<CustodianDetailTotals | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!packageNumber) return

    setIsLoading(true)

    getCustodianDetailHeader(packageNumber)
      .then(({ header: headerData, packageCustodianId: id }) => {
        setHeader(headerData)
        setPackageCustodianId(id)
      })
      .finally(() => setIsLoading(false))
  }, [packageNumber])

  const handleTableData = useCallback(
    (_page: number, _content: any[], fullData: any) => {
      if (fullData?.totals) {
        setTotals({
          quantityTotal: fullData.totals.totalQuantity,
          outFlowAmountTotal: fullData.totals.totalGrossValue,
          commissionTotal: fullData.totals.totalCommission,
          taxTotal: fullData.totals.totalTax,
          netAmountTotal: fullData.totals.totalNet
        })
      }
    },
    []
  )

  const headerColumns = buildCustodianDetailHeaderColumns(header, t)
  const tableColumns = buildCustodianDetailTableColumns(t)

  const endpoint = packageCustodianId
    ? `${ENDPOINTS.PACKAGE_CUSTODIAN}/${packageCustodianId}/detail`
    : ''

  return {
    packageNumber,
    header,
    totals,
    isLoading,
    headerColumns,
    tableColumns,
    endpoint,
    handleTableData,
    t
  }
}

```

## src/features/custodians/hooks/useCustodianNotifications.ts

```typescript
import { useCallback, useState } from 'react'

import type { ModalConfig, ToastMessage } from '../types'

export const useCustodianNotifications = () => {
  const [modalConfig, setModalConfig] = useState<ModalConfig | null>(null)
  const [toastList, setToastList] = useState<ToastMessage[]>([])

  const showModal = useCallback((config: ModalConfig) => {
    setModalConfig(config)
  }, [])

  const closeModal = useCallback(() => {
    setModalConfig(null)
  }, [])

  const showToast = useCallback((config: ToastMessage) => {
    setToastList((prev) => [...prev, config])
  }, [])

  const closeToast = useCallback((index: number) => {
    setToastList((prev) => prev.filter((_, i) => i !== index))
  }, [])

  const hasErrorData =
    modalConfig?.errorData && modalConfig.errorData.length > 0

  return {
    modalConfig,
    hasErrorData,
    showModal,
    closeModal,
    toastList,
    showToast,
    closeToast
  }
}

export type UseCustodianNotificationsReturn = ReturnType<
  typeof useCustodianNotifications
>

```

## src/features/custodians/services/custodianService.ts

```typescript
import {
  httpActionCustody,
  httpOperationsQuery
} from 'remoteShell/mf-axiosConfig'

import { post, get } from '@/shared/config/methods'
import { ENDPOINTS } from '@/shared/constants/endpoints'

import type {
  AdmitChangeAccountBody,
  CustodianApiResponse,
  CustodianOperationBody,
  CustodianRejectionBody,
  RejectionReasonContent,
  RejectionReason,
  AccountValidationPackageResponse
} from '../types'

/**
 * Ejecuta la operación de Pre-Match de custodia.
 *
 * @param body - Datos de la operación con items seleccionados
 * @returns Respuesta de la API con resultado de la operación
 * @throws Error si la petición falla
 */

export const executePrematchCustody = async (
  body: CustodianOperationBody,
  isClosingTimeSecondary?: boolean
): Promise<CustodianApiResponse> => {
  try {
    const { data } = await post({
      axiosInstance: httpActionCustody,
      urlWithParams: ENDPOINTS.PREMATCH_CUSTODY,
      data: body,
      customHeaders: {
        'X-Closing-Time-Secondary': String(isClosingTimeSecondary ?? false)
      }
    })

    return data
  } catch (error) {
    console.error(
      'Error executing prematch custody (executePrematchCustody):',
      error
    )
    throw error
  }
}

/**
 * Ejecuta la operación de Admisión de custodia.
 *
 * @param body - Datos de la operación con custodianId e items seleccionados
 * @returns Respuesta de la API con resultado de la operación
 * @throws Error si la petición falla
 */
export const executeAdmitCustody = async (
  body: CustodianOperationBody,
  isClosingTimeSecondary?: boolean
): Promise<CustodianApiResponse> => {
  try {
    const { data } = await post({
      axiosInstance: httpActionCustody,
      urlWithParams: ENDPOINTS.ADMIT_CUSTODY,
      data: body,
      customHeaders: {
        'X-Closing-Time-Secondary': String(isClosingTimeSecondary ?? false)
      }
    })

    return data
  } catch (error) {
    console.error('Error executing admit custody (executeAdmitCustody):', error)
    throw error
  }
}

/**
 * Ejecuta la operación de Admisión con cambio de cuenta títulos (1 a 1).
 *
 * @param body - Datos con custodianId e items con cuentas a cambiar
 * @returns Respuesta de la API con resultado de la operación
 * @throws Error si la petición falla
 */
export const executeAdmitChangeAccount = async (
  body: AdmitChangeAccountBody
): Promise<CustodianApiResponse> => {
  try {
    const { data } = await post({
      axiosInstance: httpActionCustody,
      urlWithParams: ENDPOINTS.ADMIT_CHANGE_ACCOUNT,
      data: body
    })

    return data
  } catch (error) {
    console.error(
      'Error executing admit change account (executeAdmitChangeAccount):',
      error
    )
    throw error
  }
}

/**
 * Ejecuta la operación de Rechazo de custodia.
 *
 * @param body - Datos de la operación con custodianId e items seleccionados
 * @returns Respuesta de la API con resultado de la operación
 * @throws Error si la petición falla
 */
export const executeRejectCustody = async (
  body: CustodianRejectionBody,
  isClosingTimeSecondary?: boolean
): Promise<CustodianApiResponse> => {
  try {
    const { data } = await post({
      axiosInstance: httpActionCustody,
      urlWithParams: ENDPOINTS.REJECT_CUSTODY,
      data: body,
      customHeaders: {
        'X-Closing-Time-Secondary': String(isClosingTimeSecondary ?? false)
      }
    })

    return data
  } catch (error) {
    console.error(
      'Error executing reject custody (executeRejectCustody):',
      error
    )
    throw error
  }
}

export const executeRejectCustodyParticipant = async (
  body: CustodianRejectionBody,
  isClosingTimeSecondary?: boolean
): Promise<CustodianApiResponse> => {
  try {
    const { data } = await post({
      axiosInstance: httpActionCustody,
      urlWithParams: ENDPOINTS.REJECT_CUSTODY_PARTICIPANT,
      data: body,
      customHeaders: {
        'X-Closing-Time-Secondary': String(isClosingTimeSecondary ?? false)
      }
    })

    return data
  } catch (error) {
    console.error(
      'Error executing reject custody participant (executeRejectCustodyParticipant):',
      error
    )
    throw error
  }
}

/**
 * Se obtienen las razones del rechazo.
 *
 * @returns Respuesta de la API con resultado de la operación
 * @throws Error si la petición falla
 */
export const getRejectReasons = async (): Promise<RejectionReason[]> => {
  const urlApi = `${ENDPOINTS.REJECTON_REASON}`

  const { data } = await get({
    axiosInstance: httpActionCustody,
    urlWithParams: urlApi
  })

  return (data as RejectionReasonContent[]).map((item) => ({
    id: Number(item.id),
    description: item.reason
  }))
}

/**
 * Valida la cuenta títulos para la asignación de fracción contada.
 *
 * @param params - Parámetros de la validación (accountNumber, tradeId, sideId, originId)
 * @returns Respuesta de la API con datos de la cuenta validada
 * @throws Error si la petición falla
 */
export const validateAccountAssignment = async (params: {
  accountNumber: string
  packageCustodianId: number
}): Promise<AccountValidationPackageResponse> => {
  try {
    const url = ENDPOINTS.VALIDATE_ACCOUNT_ASSIGNMENT_PACKAGES(params)

    const { data } = await get({
      axiosInstance: httpOperationsQuery,
      urlWithParams: url
    })

    return data as AccountValidationPackageResponse
  } catch (error) {
    console.error(
      'Error validating account assignment (validateAccountAssignment):',
      error
    )
    throw error
  }
}

```

## src/features/custodians/services/getCustodianDetails.ts

```typescript
import { httpOperationsQuery } from 'remoteShell/mf-axiosConfig'

import { get } from '@/shared/config/methods'
import { ENDPOINTS } from '@/shared/constants/endpoints'

import type { CustodianDetailHeader } from '../types/custodianDetails'

interface PackageCustodianParticipant {
  code: string
  name: string
  documentNumber: string
  identificationType: { code: string; description: string }
}

interface PackageCustodianContent {
  packageCustodianId: number
  packageNumber: string
  referencePackage: string
  securityTitle: { mnemonic: string; isin: string }
  participant: PackageCustodianParticipant
  custodian: PackageCustodianParticipant
  ficAdministrator: PackageCustodianParticipant
  side: { id: string; description: string }
  depository: { id: string; description: string }
  investor: {
    documentNumber: string
    identificationType: { code: string; description: string }
  }
  participantCode: string
}

interface PackageCustodianResponse {
  content: PackageCustodianContent[]
  totalElements: number
  totalPages: number
}

const mapToHeader = (item: PackageCustodianContent): CustodianDetailHeader => ({
  packageCode: item.packageNumber ?? '',
  referencePackage: String(item.referencePackage ?? ''),
  mnemonic: item.securityTitle?.mnemonic ?? '',
  investorIdType: item.investor?.identificationType?.code ?? '',
  ficAdministrator: item.ficAdministrator?.code ?? '',
  participant: item.participant?.code ?? '',
  participantCode: item.participantCode ?? '',
  isin: item.securityTitle?.isin ?? '',
  investorId: item.investor?.documentNumber ?? '',
  custodian: item.custodian?.code ?? '',
  side: item.side?.description ?? '',
  depository: item.depository?.description ?? ''
})
export interface CustodianHeaderResult {
  header: CustodianDetailHeader
  packageCustodianId: number
}

export const getCustodianDetailHeader = async (
  packageNumber: string
): Promise<CustodianHeaderResult> => {
  const { data } = await get({
    axiosInstance: httpOperationsQuery,
    urlWithParams: `${ENDPOINTS.PACKAGE_CUSTODIAN}?packageNumber=${packageNumber}`
  })
  const response = data as PackageCustodianResponse
  const item = response.content[0]
  if (!item) {
    throw new Error('No package custodian data found')
  }
  return {
    header: mapToHeader(item),
    packageCustodianId: item.packageCustodianId
  }
}

```

## src/features/custodians/services/getIdentificationTypes.ts

```typescript
import { httpFilterParameters } from 'remoteShell/mf-axiosConfig'

import { get } from '@/shared/config/methods'
import { ENDPOINTS } from '@/shared/constants/endpoints'
import isDevMode from '@/shared/utils/isDevMode'

export const getIdentificationTypes = async () => {
  const urlWithParams = `${ENDPOINTS.IDENTIFICATION_TYPES}`
  try {
    const { data } = await get({
      axiosInstance: httpFilterParameters,
      urlWithParams
    })
    return data.map((item: { id: string; description: string }) => ({
      id: item.id,
      name: item.description
    }))
  } catch (error) {
    if (isDevMode()) {
      console.error('Error getting identification types:', error)
    }
    throw error
  }
}

```

## src/features/custodians/services/getMnemonicSearch.ts

```typescript
import { httpFilterParameters } from 'remoteShell/mf-axiosConfig'

import { get } from '@/shared/config/methods'
import { ENDPOINTS } from '@/shared/constants/endpoints'
import isDevMode from '@/shared/utils/isDevMode'

import type { AutocompleteOption } from '../types'
import type { Mnemonic } from '../types/resultsSearchMnemonic'

interface PaginatedResponse {
  data: AutocompleteOption[]
  total: number
}

/**
 * Obtiene participantes de operaciones con formato para AutoCompleteInput.
 *
 * El resultado viene formateado para usarse directamente en componentes
 * de autocompletado (id + label concatenado).
 *
 * @param params - Parámetros de paginación (page, size)
 * @returns Datos formateados y total de elementos para paginación
 */

export const getMnemonicSearch = async (
  searchText: string = '',
  page: number = 0,
  size: number = 10
): Promise<PaginatedResponse> => {
  const searchParams = new URLSearchParams()
  if (searchText) searchParams.append('search', searchText)
  searchParams.append('page', page.toString())
  searchParams.append('size', size.toString())

  const urlWithParams = `${ENDPOINTS.MNEMONIC_SEARCH}?${searchParams.toString()}`

  try {
    const { data } = await get({
      axiosInstance: httpFilterParameters,
      urlWithParams
    })

    return {
      data: data.content.map((item: Mnemonic) => ({
        id: item.id,
        label: item.mnemonic
      })),
      total: data.totalElements
    }
  } catch (error) {
    if (isDevMode()) {
      console.error('Error fetching mnemonic search results:', error)
    }
    return { data: [], total: 0 }
  }
}

```

## src/features/custodians/services/getOperationCustodians.ts

```typescript
import { httpFilterParameters } from 'remoteShell/mf-axiosConfig'

import { get } from '@/shared/config/methods'
import { ENDPOINTS } from '@/shared/constants/endpoints'
import isDevMode from '@/shared/utils/isDevMode'

import type { AutocompleteOption, OperationCustodiansContent } from '../types'

interface PaginatedResponse {
  data: AutocompleteOption[]
  total: number
}

/**
 * Obtiene custodios de operaciones con formato para AutoCompleteInput.
 *
 * El resultado viene formateado para usarse directamente en componentes
 * de autocompletado (id + label concatenado).
 *
 * @param params - Parámetros de paginación (page, size)
 * @returns Datos formateados y total de elementos para paginación
 */
export const getOperationCustodians = async (
  searchText: string = '',
  page: number = 0,
  size: number = 10
): Promise<PaginatedResponse> => {
  const searchParams = new URLSearchParams()
  if (searchText) searchParams.append('search', searchText)

  searchParams.append('page', page.toString())
  searchParams.append('size', size.toString())

  const urlWithParams = `${ENDPOINTS.OPERATIONS_CUSTODIANS}?${searchParams.toString()}`

  try {
    const { data } = await get({
      axiosInstance: httpFilterParameters,
      urlWithParams
    })

    return {
      data: data.content.map((item: OperationCustodiansContent) => ({
        id: item.id,
        label: item.codeName
      })),
      total: data.totalElements
    }
  } catch (error) {
    if (isDevMode()) {
      console.error('Error fetching operation custodians:', error)
    }
    return { data: [], total: 0 }
  }
}

```

## src/features/custodians/services/getOperationParticipants.ts

```typescript
import { httpFilterParameters } from 'remoteShell/mf-axiosConfig'

import { get } from '@/shared/config/methods'
import { ENDPOINTS } from '@/shared/constants/endpoints'
import isDevMode from '@/shared/utils/isDevMode'

import type { AutocompleteOption, OperationParticipantContent } from '../types'

interface PaginatedResponse {
  data: AutocompleteOption[]
  total: number
}

/**
 * Obtiene participantes de operaciones con formato para AutoCompleteInput.
 *
 * El resultado viene formateado para usarse directamente en componentes
 * de autocompletado (id + label concatenado).
 *
 * @param params - Parámetros de paginación (page, size)
 * @returns Datos formateados y total de elementos para paginación
 */

export const getOperationParticipants = async (
  searchText: string = '',
  page: number = 0,
  size: number = 10
): Promise<PaginatedResponse> => {
  const searchParams = new URLSearchParams()
  if (searchText) searchParams.append('search', searchText)
  searchParams.append('page', page.toString())
  searchParams.append('size', size.toString())

  const urlWithParams = `${ENDPOINTS.OPERATIONS_PARTICIPANTS}?${searchParams.toString()}`

  try {
    const { data } = await get({
      axiosInstance: httpFilterParameters,
      urlWithParams
    })

    return {
      data: data.content.map((item: OperationParticipantContent) => ({
        id: item.id,
        label: item.codeName
      })),
      total: data.totalElements
    }
  } catch (error) {
    if (isDevMode()) {
      console.error('Error fetching operation participants:', error)
    }
    return { data: [], total: 0 }
  }
}

```

## src/features/custodians/types/custodianDetails.d.ts

```typescript
export interface CustodianDetailHeader {
  packageCode: string
  referencePackage: string
  mnemonic: string
  investorIdType: string
  ficAdministrator: string
  participant: string
  isin: string
  investorId: string
  custodian: string
  side: string
  depository: string
  participantCode: string
}

export interface CustodianDetailRow {
  id: number | string
  operationType: string
  registrationDate: string
  settlementDate: string
  returnSettlementDate: string
  operationId: number
  fractionNumber: number
  titleAccount: string
  quantity: number
  price: number
  rate: number
  grossValue: number
  returnClearingDate: string
}

export interface CustodianDetailTotals {
  quantityTotal: number
  outFlowAmountTotal: number
  commissionTotal: number
  taxTotal: number
  netAmountTotal: number
}

export interface CustodianDetailResponse {
  header: CustodianDetailHeader
  totals: CustodianDetailTotals
}

```

## src/features/custodians/types/custodianPackages.d.ts

```typescript
import type { SecurityTitle } from '@/features/settlement-file/types'

import type { BusinessType } from '@/shared/types'
import type {
  AccountValidationInvestor,
  AccountValidationInvestorAccount
} from '@/shared/types/InvestorAccount'
import { Participant } from '@/shared/types/participant'

interface PackageCustodians {
  packageCustodianId: number
  packageDate: string
  market: BusinessType
  packageStatus: BusinessType
  type: BusinessType
  packageNumber: string
  participantCode: string
  participant: Participant
  custodian: Participant
  ficAdministrator: Participant
  side: {
    id: string
    description: string
  }
  clearingDate: string
  returnClearingDate: string
  totalFractionQuantity: number
  averagePrice: number
  averageRate: number
  totalCommissionAmount: number
  totalValTaxAmount: number
  totalNetAmount: number
  returnNetAmount: number
  clearingPercentage: number
  uniqueFractionId: number
  investorAccount: AccountValidationInvestorAccount
  investor: AccountValidationInvestor
  depository: {
    id: string
    description: string
  }
  securityTitle: SecurityTitle
}

```

## src/features/custodians/types/index.ts

```typescript
import { BusinessType } from '@/shared/types'
import type { AccountValidationInvestorAccount } from '@/shared/types/InvestorAccount'
import { Participant as ParticipantLarge } from '@/shared/types/participant'
import type { AccountValidationParticipantAccount } from '@/shared/types/participantAccount'

import { AccountValidationStatus } from './validationsAccountCommon'

export type * from './custodianDetails'

export type AlertVariant = 'success' | 'error' | 'warning' | 'info'

export type ModalOrientation = 'vertical' | 'horizontal'

export interface AutocompleteOption {
  id: number
  label: string
  description?: string
}

export interface SelectedCustodianItem {
  tradeId: number
  fraction: number
  sideId: string
  custodianStatus: string
  sourceQuoteTypeId?: number
  clearingDate?: string
  returnClearingDate?: string
  matchDate?: string
  tradeType?: string
  packageId: number
  packageStatus: any
  custodianId?: number
  rejectionReasonId?: number
  totalElements?: number
}
export interface ModalConfig {
  title: string
  message: string
  variant: AlertVariant
  onClick?: () => void
  handleCancel?: () => void
  textCancel?: string
  textSuccess?: string
  orientation?: ModalOrientation
  errorData?: ErrorSettlement[]
  children?: React.ReactNode
  type?: 'admission'
}

export interface ToastMessage {
  message: string
  variant: AlertVariant | ''
}

export interface ErrorSettlementTrade {
  id: number
  matchDate: string
  matchId: number
  clearingDate: string
  participantSell: {
    id: number
    code: string
    name: string
  }
  participantBuy: {
    id: number
    code: string
    name: string
  }
}

export interface ErrorSettlement {
  settlement: {
    trade: ErrorSettlementTrade
    fraction: number
    side: {
      id: string
      description: string
    }
    status: {
      id: number
      description: string
      category: string | null
      detail: string | null
    }
  }
  reasonError: string
}

export interface CustodianApiResponse {
  valid: boolean
  message: string
  successSettlements: unknown[]
  errorsSettlements: ErrorSettlement[]
}
export interface CustodianOperationBody {
  custodianId?: number
  items?: SelectedCustodianItem[]
  packageId?: number
  rejectionReasonId?: number
  otherReason?: string
}

export interface CustodianRejectionBody {
  custodianId?: number
  // items: SelectedCustodianItem[]
  rejectionReasonId: number
  otherReason?: string
  packageId?: number
}

export interface AdmitChangeAccountItem {
  tradeId: number
  fraction: number
  sideId: number
  investorAccountId: number | null
  participantAccountId: number | null
  sourceQuoteTypeId?: number
}

export interface AdmitChangeAccountBody {
  packageId: number
  custodianId: number
  investorAccountId: number | null
  participantAccountId: number | null
  sourceQuoteTypeId?: number
}

export type CustodianItem = {
  id: number
  tradeId: number
  fraction: number
  matchDate: Date
  clearingDate: Date
  market: string
  tradeType: string
  side: Side
  symbol: string
  isin: string
  fractionQuantity: number
  price: number
  fractionVolume: number
  participant: Participant
  investorDocumentType: string
  investorDocumentNumber: string
  investorName: string
  investorAccount: {
    originType: BusinessType
  }
  custodianId: number
  custodianName: string
  custodianStatus: string
  cashAccount: string
  rejectionReason: null
  sourceQuoteTypeId?: number
  originId?: number
  packageCustodianId: number
  packageStatus: string
  totalElements: number
}

export interface Participant {
  id: number
  code: string
  documentNumber: string
  name: string
  shortName?: string
  identificationType: IdentificationType
}

export type Side = {
  id: string
  description: string
}

export enum CashAccount {
  String = 'string'
}

export interface Custodian {
  id: number
  code: CashAccount
  documentNumber: CashAccount
  identificationType: IdentificationType
  name: CashAccount
  shortName: CashAccount
  type: CustodianStatus
  mnemonic: CashAccount
  country: Country
  registrationDate: Date
  taxCode: CashAccount
  status: CustodianStatus
  nitClearingHouse: CashAccount
  taxStatus: TradingSystem
  typeEntity: CashAccount
  marginAccount: CashAccount
  masterAccount: CashAccount
  directAllocation: CashAccount
  marketMaker: CashAccount
  enabled: boolean
  custodian: boolean
}

export interface Country {
  id: number
  code: CashAccount
  name: CashAccount
  currency: Currency
  timeZone: CashAccount
}

export interface Currency {
  id: number
  code: CashAccount
  name: CashAccount
}

export interface IdentificationType {
  id: number
  description: CashAccount
  code: CashAccount
}

export interface CustodianStatus {
  id: number
  description: CashAccount
  category: CashAccount
  shortName?: CashAccount
}

export interface TradingSystem {
  id: number
  description: CashAccount
}

export interface Investor {
  id: number
  code: CashAccount
  firstName: CashAccount
  lastName: CashAccount
  companyName: CashAccount
  type: CustodianStatus
  status: CustodianStatus
  country: Country
  documentNumber: CashAccount
  identificationType: IdentificationType
  nationality: CashAccount
  clearinghouseCode: CashAccount
  gics: TradingSystem
  moneyLaunderingFlag: boolean
  taxStatus: TradingSystem
}

export interface Account {
  id: number
  investor?: Investor
  accountNumber: CashAccount
  status: CustodianStatus
  originType: CustodianStatus
  type: CustodianStatus
  depository?: Side
  participant: Custodian
}

export interface ParticipantBankAccount {
  id: number
  bankId: number
  participantId: number
  bankAccount: CashAccount
  principal: boolean
}

export interface CustodianFilter {
  custodios?: string
  tipoOperacion?: string
  codigoParticipante?: string
  fechaRegistro?: string
  fechaCumplimientoSalido?: string
  estado?: string
}

export interface CustodianOption {
  id: string
  name: string
}

export interface OperationParticipantResponse {
  content: OperationParticipantContent[]
  pageSize: number
  pageNumber: number
  totalElements: number
  totalPages: number
}

export interface OperationParticipantContent {
  id: number
  name: string
  code: string
  codeName: string
}

export interface OperationCustodiansResponse {
  content: OperationCustodiansContent[]
  pageSize: number
  pageNumber: number
  totalElements: number
  totalPages: number
}

export interface OperationCustodiansContent {
  id: number
  name: string
  code: string
  codeName: string
}

export interface RejectionReasonContent {
  id: string
  reason: string
}

export interface RejectionReason {
  id: number
  description: string
  otherReason?: string
}

export interface RejectionFormRef {
  showError: (message: string) => void
  showOtherError: (message: string) => void
}

// ===== Account Validation Types =====

export interface AccountValidationResponse {
  participantAccount: AccountValidationParticipantAccount | null
  investorAccount: AccountValidationInvestorAccount | null
  sourceQuoteType: AccountValidationStatus | null
  fiduciarySpecialist: boolean
  jointAccount: boolean
  masterAccount: boolean
  custodian: ParticipantLarge | null
}

export interface AccountValidationPackageResponse {
  participant: Participant | null
  investor: Investor | null
  originType: BusinessType | null
  id: number
  depository: BusinessType | null
  accountNumber: string
  status: AccountValidationStatus | null
  type: AccountValidationStatus | null
  taxExemp: boolean
}

```

## src/features/custodians/types/resultsSearchMnemonic.ts

```typescript
import { CommonResponseAutoComplete } from '../../../shared/types/common'

export interface Mnemonic {
  id: number
  mnemonic: string
  isin: string
}
export type MnemonicSearchResult = CommonResponseAutoComplete<Mnemonic[]>

```

## src/features/custodians/types/validationsAccountCommon.d.ts

```typescript
export interface AccountValidationStatus {
  id: number
  description: string
  category: string
}

export interface AccountValidationCurrency {
  id: number
  code: string
  name: string
}

export interface AccountValidationCountry {
  id: number
  code: string
  name: string
  currency: AccountValidationCurrency
  timeZone: string
}

export interface AccountValidationIdentificationType {
  id: number
  description: string
  code: string
}

```

## src/features/custodians/utils/columns.tsx

```tsx
import type { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'

import { formatNumberWithThousandsSeparator } from 'remoteUtilities/formattedNumber'
import { StatusChip } from 'remoteUtilities/statusChip'

import { CustodianItem } from '../types'

export const columns: GridColDef[] = [
  {
    field: 'matchDate',
    headerName: 'Fecha Registro',
    flex: 1,
    minWidth: 100
  },
  {
    field: 'clearingDate',
    headerName: 'Fecha Cumplimiento',
    flex: 1,
    minWidth: 100
  },
  {
    field: 'matchId',
    headerName: 'ID Operación',
    flex: 1,
    minWidth: 150
  },
  {
    field: 'market',
    headerName: 'Mercado',
    flex: 1,
    minWidth: 100
  },
  {
    field: 'tradeType',
    headerName: 'Tipo de operación',
    flex: 1,
    minWidth: 150
  },
  {
    field: 'participantCode',
    headerName: 'Código participante',
    flex: 1,
    minWidth: 150,
    valueGetter: (_: GridRenderCellParams, data: CustodianItem) =>
      data?.participant?.code,
    renderCell: (params: any) => {
      return params?.participant?.code
    }
  },
  {
    field: 'participantName',
    headerName: 'Nombre Participante',
    flex: 1,
    minWidth: 180,
    valueGetter: (_: GridRenderCellParams, data: CustodianItem) =>
      data?.participant?.name,
    renderCell: (params: any) => {
      return params?.participant?.name
    }
  },
  {
    field: 'side',
    headerName: 'Punta',
    flex: 1,
    minWidth: 100,
    renderCell: ({ row }: GridRenderCellParams) => {
      const side = row.side.description as string
      return <div>{side}</div>
    }
  },
  {
    field: 'custodianCode',
    headerName: 'Cod. Custodio',
    flex: 1,
    minWidth: 120
  },
  {
    field: 'custodianName',
    headerName: 'Nombre custodio',
    flex: 1,
    minWidth: 180
  },
  {
    field: 'custodianStatus',
    headerName: 'Estado Custodio',
    flex: 1,
    minWidth: 150,
    renderCell: ({ row }: GridRenderCellParams<CustodianItem>) => (
      <StatusChip value={(row.custodianStatus as string) ?? '-'} />
    )
  },
  {
    field: 'symbol',
    headerName: 'Nemotécnico',
    flex: 1,
    minWidth: 120
  },
  {
    field: 'isin',
    headerName: 'ISIN',
    flex: 1,
    minWidth: 150
  },
  {
    field: 'fraction',
    headerName: 'ID Fracción ',
    flex: 1,
    minWidth: 120
  },
  {
    field: 'fractionQuantity',
    headerName: 'Cantidad',
    flex: 1,
    minWidth: 120,
    renderCell: ({ row }: GridRenderCellParams) => {
      const quantity = row.fractionQuantity as number
      return (
        <div>
          {formatNumberWithThousandsSeparator(Number(quantity), false, false)}
        </div>
      )
    }
  },
  {
    field: 'price',
    headerName: 'Precio',
    flex: 1,
    minWidth: 120,
    renderCell: ({ row }: GridRenderCellParams) => {
      const price = row.price as number
      return (
        <div>
          {formatNumberWithThousandsSeparator(Number(price), false, true)}
        </div>
      )
    }
  },
  {
    field: 'fractionVolume',
    headerName: 'Monto',
    flex: 1,
    minWidth: 120,
    renderCell: ({ row }: GridRenderCellParams) => {
      const volume = row.fractionVolume as number
      return (
        <div>
          {formatNumberWithThousandsSeparator(Number(volume), false, true)}
        </div>
      )
    }
  },
  {
    field: 'investorAccount',
    headerName: 'Cuenta títulos / RUT',
    flex: 1,
    minWidth: 120
  },
  {
    field: 'investorDocumentType',
    headerName: 'Tipo ID beneficiario',
    flex: 1,
    minWidth: 120
  },
  {
    field: 'investorDocumentNumber',
    headerName: 'ID beneficiario',
    flex: 1,
    minWidth: 120
  },
  {
    field: 'investorName',
    headerName: 'Nombre beneficiario',
    flex: 1,
    minWidth: 120
  },
  {
    field: 'cashAccount',
    headerName: 'Cuenta Efectivo',
    flex: 1,
    minWidth: 120
  },
  {
    field: 'rejectionReason',
    headerName: 'Causal de rechazo',
    flex: 1,
    minWidth: 120
  }
]

```

## src/features/custodians/utils/custodianOptionsToolbar.tsx

```tsx
import { type TFunction } from 'i18next'

import useIsInternalUser from '@/shared/hooks/useIsInternalUser'
import useParticipantIsCustodian from '@/shared/hooks/useParticipantIsCustodioan'

import {
  CUSTODIAN_ACTIONS,
  TOOLBAR_CUSTODIAN_OPTIONS,
  type CustodianAction
} from '../constants'

interface CustodianDropdownOption {
  id: CustodianAction
  label: string
  action: () => void
  disabled?: boolean
}

interface ICustodianPermissions {
  canAdmit: boolean
  canPrematch: boolean
  canReject: boolean
}

type CustodianActionHandler = (action: CustodianAction) => void

export const getCustodianDropdownOptions = (
  onActionClick: CustodianActionHandler,
  t: TFunction<'operaciones', string>,
  custodianStatus?: string[],
  permissions?: ICustodianPermissions
): CustodianDropdownOption[] => {
  const { isCustodianUser } = useParticipantIsCustodian()
  const { isInternalUser } = useIsInternalUser()
  const statuses = custodianStatus ?? []
  const isExternalNonCustodianUser = !isCustodianUser && !isInternalUser

  const canRejectByStatus = isExternalNonCustodianUser
    ? statuses.includes('TRASLADADA')
    : statuses.some((status) =>
        ['TRASLADADA', 'PRE-MATCH', 'ADMITIDA'].includes(status)
      )

  const allOptions: CustodianDropdownOption[] = [
    {
      id: CUSTODIAN_ACTIONS.PRE_MATCH,
      // label: 'Pre-Match',
      label: t(TOOLBAR_CUSTODIAN_OPTIONS.preMatch),
      action: () => onActionClick(CUSTODIAN_ACTIONS.PRE_MATCH),
      disabled: isExternalNonCustodianUser || !statuses.includes('TRASLADADA')
    },
    {
      id: CUSTODIAN_ACTIONS.ADMISSION,
      // label: 'Admisión Custodio',
      label: t(TOOLBAR_CUSTODIAN_OPTIONS.adminCustodian),
      action: () => onActionClick(CUSTODIAN_ACTIONS.ADMISSION),
      disabled:
        isExternalNonCustodianUser ||
        (!statuses.includes('TRASLADADA') && !statuses.includes('PRE-MATCH'))
    },
    {
      id: CUSTODIAN_ACTIONS.REJECTION,
      // label: 'Rechazo Custodio',
      label: t(TOOLBAR_CUSTODIAN_OPTIONS.custodianRejection),
      action: () => onActionClick(CUSTODIAN_ACTIONS.REJECTION),
      disabled: statuses.includes('RECHAZADA') || !canRejectByStatus
    }
  ]
  if (!permissions) return allOptions

  return allOptions.filter((option) => {
    if (option.id === CUSTODIAN_ACTIONS.ADMISSION) return permissions.canAdmit
    if (option.id === CUSTODIAN_ACTIONS.PRE_MATCH)
      return permissions.canPrematch
    if (option.id === CUSTODIAN_ACTIONS.REJECTION) return permissions.canReject

    return false
  })
}

```

## src/features/custodians/utils/errorColumns.tsx

```tsx
import { XDataGridLib } from '@nuam/common-fe-lib-components'
import { type TFunction } from 'i18next'

export const errorColumns = (
  t: TFunction<'operaciones', string>
): XDataGridLib.GridColDef[] => [
  {
    field: 'reasonError',
    // headerName: 'Causal',
    headerName: t('reasonError'),
    flex: 1,
    minWidth: 200
  },
  {
    field: 'matchDate',
    // headerName: 'Fecha de registro',
    headerName: t('matchDate'),
    flex: 1,
    minWidth: 130,
    renderCell: ({ row }: XDataGridLib.GridRenderCellParams) =>
      row.settlement?.trade?.matchDate || '-'
  },
  {
    field: 'tradeId',
    // headerName: 'Nº de Folio',
    headerName: t('tradeId'),
    flex: 1,
    minWidth: 120,
    renderCell: ({ row }: XDataGridLib.GridRenderCellParams) =>
      row.settlement?.trade?.matchId || '-'
  },
  {
    field: 'clearingDate',
    // headerName: 'Fecha de cumplimiento',
    headerName: t('clearingDate'),
    flex: 1,
    minWidth: 150,
    renderCell: ({ row }: XDataGridLib.GridRenderCellParams) =>
      row.settlement?.trade?.clearingDate || '-'
  },
  {
    field: 'side',
    // headerName: 'Punta',
    headerName: t('side'),
    flex: 1,
    minWidth: 100,
    renderCell: ({ row }: XDataGridLib.GridRenderCellParams) =>
      row.settlement?.side?.description || '-'
  },
  {
    field: 'fraction',
    // headerName: 'ID Fracción',
    headerName: t('fraction'),
    flex: 1,
    minWidth: 100,
    renderCell: ({ row }: XDataGridLib.GridRenderCellParams) =>
      row.settlement?.fraction || '-'
  },
  {
    field: 'participantCode',
    // headerName: 'Participante',
    headerName: t('participantCode'),
    flex: 1,
    minWidth: 120,
    renderCell: ({ row }: XDataGridLib.GridRenderCellParams) => {
      const trade = row.settlement?.trade
      const sideId = Number(row.settlement?.side?.id)

      const participant =
        sideId === 1 ? trade?.participantBuy : trade?.participantSell

      return participant?.code ?? '-'
    }
  }
]

```

## src/features/custodians/utils/filtersConfig.ts

```typescript
import dayjs from 'dayjs'
import { type TFunction } from 'i18next'

import { type FilterConfig } from '@/features/shipping-cycles/types'

import { getOperationStatus } from '@/shared/services/getOperationStatus'
import { getOperationsTypes } from '@/shared/services/getOperationsTypes'

import { getMnemonicSearch } from '../services/getMnemonicSearch'
import { getOperationCustodians } from '../services/getOperationCustodians'
import { getOperationParticipants } from '../services/getOperationParticipants'

export const getFiltersConfig = (
  isInternalUser: boolean,
  isCustodianUser: boolean,
  t: TFunction<'operaciones', string>,
  participantId?: number | undefined,
  participantCode?: string | undefined
): FilterConfig[] => {
  const filters: FilterConfig[] = [
    {
      name: 'clearingDate',
      // label: 'Fecha de cumplimiento salida',
      label: t('settlementDateTo'),
      type: 'datepicker',
      maxDate: dayjs().add(1, 'year').format('YYYY-MM-DD'),
      minDate: dayjs().subtract(2, 'month').format('YYYY-MM-DD'),
      format: 'DD-MM-YYYY'
    },
    {
      name: 'registrationDateFrom',
      // label: 'Fecha de paquete',
      label: t('packageDate'),
      type: 'datepicker',
      monthsBack: 2,
      format: 'DD-MM-YYYY'
    },

    {
      name: 'custodianId',
      // label: 'Custodios',
      label: t('custodian'),
      type: 'autocomplete',
      fetchOptions: getOperationCustodians,
      itemsPerPage: 10,
      minSearchLength: 3,
      debounceTime: 300,
      disabled: isCustodianUser,
      defaultValue:
        isCustodianUser && participantId
          ? { id: participantId, label: participantCode || '' }
          : undefined
    },
    {
      name: 'participantId',
      // label: 'Código Participante',
      label: t('participantCode'),
      type: 'autocomplete',
      fetchOptions: getOperationParticipants,
      itemsPerPage: 10,
      minSearchLength: 3,
      debounceTime: 300,
      disabled: !isCustodianUser && !isInternalUser,
      defaultValue:
        !isCustodianUser && !isInternalUser && participantId
          ? { id: participantId, label: participantCode || '' }
          : undefined
    },
    {
      name: 'packageNumber',
      label: t('packageNumber'),
      type: 'textfield',
      inputType: 'text', // o "text"
      minChars: 3,
      maxLength: 18,
      regex: /^[0-9]*$/ // Solo permite dígitos
    },
    {
      name: 'statusId',
      // label: 'Estado',
      label: t('status'),
      type: 'select',
      loadOptions: getOperationStatus
    },
    {
      name: 'operationTypeId',
      // label: 'Tipo de operación',
      label: t('operationType'),
      type: 'select',
      loadOptions: getOperationsTypes
    },
    {
      name: 'securityTittleId',
      // label: 'Nemotécnico',
      label: t('nemotecnic'),
      type: 'autocomplete',
      fetchOptions: getMnemonicSearch,
      itemsPerPage: 10,
      minSearchLength: 2,
      debounceTime: 300
    }
  ]

  return filters
}

```

## src/features/custodians/utils/selectCheckboxCustodian.ts

```typescript
export const selectCheckboxCustodian = (
  rows: any[],
  selectedIds: (string | number)[]
) => {
  const newSelectedItems = rows
    .filter((row) => selectedIds.includes(row.packageCustodianId))
    .map((row) => ({
      tradeId: row.packageCustodianId,
      packageId: row.packageCustodianId,
      packageStatus: row.packageStatus || '',
      fraction: row.fraction || 0,
      sideId: row.side.id || '',
      custodianStatus: row.custodianStatus || '',
      sourceQuoteTypeId: row?.investorAccount?.originType?.id || 1,
      clearingDate: row.clearingDate ? String(row.clearingDate) : undefined,
      matchDate: row.matchDate ? String(row.matchDate) : undefined,
      tradeType: row.tradeType || '',
      totalElements: row.totalElements || 0
    }))
  return newSelectedItems
}

```

## src/features/operations-management/components/AssignmentAccountTitle.tsx

```tsx
import { useCallback, useMemo } from 'react'

import { HTTP_CODES } from '@/shared/constants'
import useGenerateLogs from '@/shared/hooks/useGenerateLogs'
import useTranslate from '@/shared/hooks/useTranslate'
import { type ErrorResponse } from '@/shared/types'
import { type ModalAlertState } from '@/shared/types/Alerts'

import { FRACTION_ERROR_CODES } from '../constants/FullViewBeneficiaries'
import { FieldsAssignment } from '../constants/fieldsAssignment'
import { messageErrorAssignment } from '../constants/messagesError'
import {
  AlertAction,
  type HandleAlertAction
} from '../hooks/useAssignmentAlert'
import { type Fraction, type ObjectValue } from '../hooks/useStateFraction'
import { type IDetailOperation } from '../types'
import assignmentCalculation from '../utils/assignmentCalculation'
import validateAccountAssignment from '../utils/validateAccountAssignment'
import InputAssignmentTable from './InputAssignmentTable'

interface Props {
  side: string
  trade: IDetailOperation['trade']
  updateFraction: (index: number, updateFraction: Partial<Fraction>) => void
  origin: ObjectValue
  changeAlert: HandleAlertAction
  fraction: Fraction
  fractions?: Fraction[]
  isCorrection?: boolean
}

type ErrorCode = keyof typeof messageErrorAssignment

const AssignmentAccountTitle = ({
  side,
  trade,
  origin,
  updateFraction,
  changeAlert,
  fraction,
  fractions,
  isCorrection
}: Props) => {
  const { generateLogs } = useGenerateLogs()
  const { t } = useTranslate({
    keyPrefix: 'operationDetail.tabs.beneficiary.messagesValidations'
  })
  const commonEmpty = useMemo(
    () => ({
      [FieldsAssignment.participantAccount]: null,
      [FieldsAssignment.investorAccount]: null,
      [FieldsAssignment.id]: fraction[FieldsAssignment.id]
    }),
    [fraction]
  )
  const value = fraction[FieldsAssignment.account]
  const showAlert = useCallback(
    (value: null | Partial<ModalAlertState>) => {
      const info: AlertAction = {
        variant: 'modal',
        info: {
          open: true,
          // textSuccess: 'Aceptar',
          textSuccess: t('textSuccess'),
          variant: 'warning',
          ...value
        }
      }
      changeAlert?.(info)
    },
    [changeAlert, t]
  )
  const changeFraction = useCallback(
    (update: Partial<Fraction>) => {
      const index = fraction[FieldsAssignment.index]
      updateFraction(index, update)
    },
    [fraction, updateFraction]
  )
  const alertError = useCallback(
    ({
      valueInput,
      codeError,
      updateInfo
    }: {
      valueInput: string
      codeError: ErrorCode
      updateInfo?: Partial<Fraction>
    }) => {
      const messagesError: {
        [key in ErrorCode]: string
      } = {
        // notActiveAccount: 'Cuenta Inactiva',
        notActiveAccount: t('inactiveAccount'),
        // notFoundAccount: 'Cuenta no existe',
        notFoundAccount: t('notFoundAccount'),
        // serviceError: 'Error en el servicio',
        serviceError: t('serviceError'),
        // masterAccountNotAllowed: 'Cuenta no permitida'
        masterAccountNotAllowed: t('accountNotAllowed')
      }
      const messageError = messagesError[codeError]
      changeFraction({
        [FieldsAssignment.account]: {
          value: valueInput,
          error: { error: true, message: messageError }
        },
        ...commonEmpty,
        ...updateInfo
      })
      const excludeAlertErrors: ErrorCode[] = ['masterAccountNotAllowed']
      if (!excludeAlertErrors.includes(codeError)) {
        showAlert({
          title: t(messageErrorAssignment[codeError])
        })
      }
      generateLogs({
        actionDestination: 'Validacion de cuenta en asignación',
        actionType: messageError
      })
    },
    [commonEmpty, generateLogs, showAlert, changeFraction, t]
  )
  const handleAction = useCallback(
    async (value: string) => {
      if (side && trade) {
        const valueInput = value.trim()
        if (valueInput.length > 0) {
          const handleAlertError = (
            codeError: ErrorCode,
            updateInfo?: Partial<Fraction>
          ) => alertError({ valueInput, codeError, updateInfo })
          try {
            const { commonUpdate, masterAccount, custodian, valueAccount } =
              await validateAccountAssignment({
                valueInput,
                side,
                tradeId: trade.id,
                origin,
                fractions: fractions ?? [],
                fraction,
                isCorrection
              })
            const validateCustodian =
              valueAccount?.accountNumber &&
              !fraction[FieldsAssignment.hasPreviousCustodian] &&
              custodian?.id !== fraction[FieldsAssignment.custodian]?.id
            if (!isCorrection && custodian && validateCustodian) {
              commonUpdate[FieldsAssignment.custodian] = {
                id: custodian.id,
                name: `${custodian?.code} ${custodian?.name}`
              }
              showAlert({
                title: t('custodianAutoAssigned', {
                  code: custodian.code,
                  name: custodian.name
                })
              })
            }

            if (
              fraction[FieldsAssignment.quantity] &&
              fraction[FieldsAssignment.commissionPercentage]
            ) {
              await assignmentCalculation({
                trade,
                side,
                commonUpdate,
                changeFraction,
                fraction,
                valueAccount
              })
            } else {
              changeFraction(commonUpdate)
            }
            // Validación específica para corrección y cuenta master
            if (isCorrection && masterAccount) {
              changeFraction({
                ...commonUpdate,
                [FieldsAssignment.account]: {
                  value: valueInput,
                  error: { error: true, message: 'Cuenta Master' }
                }
              })
            }
            return valueInput
          } catch (error) {
            const err = error as ErrorResponse
            const errorCode = err?.response?.data?.errorCode
            const statusCode = err?.response?.status
            if (errorCode === FRACTION_ERROR_CODES.ACCOUNT_NOT_ACTIVE) {
              handleAlertError('notActiveAccount', {
                [FieldsAssignment.isMasterAccount]: false
              })
            } else if (
              errorCode ===
              FRACTION_ERROR_CODES.PARTICIPANT_ACCOUNT_OR_INVESTOR_ACCOUNT_NOT_FOUND
            ) {
              handleAlertError('notFoundAccount', {
                [FieldsAssignment.isMasterAccount]: false
              })
            } else if (
              errorCode ===
                FRACTION_ERROR_CODES.CORRECTION_MASTER_ACCOUNT_NOT_ALLOWED &&
              isCorrection
            ) {
              handleAlertError('masterAccountNotAllowed', {
                [FieldsAssignment.isMasterAccount]: true
              })
            } else if (statusCode !== HTTP_CODES.UNAUTHORIZED) {
              handleAlertError('serviceError', {
                [FieldsAssignment.isMasterAccount]: false
              })
            }
          }
        } else {
          changeFraction({
            [FieldsAssignment.account]: { value: valueInput },
            [FieldsAssignment.isMasterAccount]: false,
            ...commonEmpty
          })
          return valueInput
        }
      }
    },
    [
      alertError,
      changeFraction,
      commonEmpty,
      origin,
      side,
      trade,
      fractions,
      fraction,
      isCorrection,
      showAlert,
      t
    ]
  )
  const account =
    fraction[FieldsAssignment.participantAccount] ??
    fraction[FieldsAssignment.investorAccount]
  const typeId = account?.typeId ?? ''
  const updateValue = useCallback(
    (e?: string) => {
      changeFraction({
        [FieldsAssignment.account]: {
          value: e
        },
        [FieldsAssignment.isMasterAccount]: false,
        ...commonEmpty
      })
    },
    [changeFraction, commonEmpty]
  )
  const { executeCalculationInitial } = fraction
  return (
    <InputAssignmentTable
      currentValue={value?.value}
      initialValue={''}
      action={handleAction}
      error={value?.error}
      disabled={fraction?.isEditable === false}
      executeActionInitial={
        (!executeCalculationInitial || !typeId) && !value?.error?.error
      }
      updateValue={updateValue}
    />
  )
}

export default AssignmentAccountTitle

```

## src/features/operations-management/components/AssignmentAdministratorFicOptions.tsx

```tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
import useTranslate from '@/shared/hooks/useTranslate'

import { FieldsAssignment } from '../constants/fieldsAssignment'
import { type HandleAlertAction } from '../hooks/useAssignmentAlert'
import { type Fraction } from '../hooks/useStateFraction'
import { administratorFICOptions } from '../services/administratorFICOptions'
import { type AssignmentCashAccountResponse } from '../services/assignmentCashAccount'
import SelectAssignmentTable from './SelectAssignmentTable'

const AssignmentAdministratorOptions = ({
  updateFraction,
  fraction,
  changeAlert,
  cashAccountDefault
}: {
  updateFraction: (index: number, updateFraction: Partial<Fraction>) => void
  fraction: Fraction
  changeAlert: HandleAlertAction
  cashAccountDefault: AssignmentCashAccountResponse | null
}) => {
  const { t } = useTranslate({
    keyPrefix: 'operationDetail.tabs.beneficiary.messagesValidations'
  })
  const value = fraction[FieldsAssignment.administrator]

  const disabled =
    !fraction[FieldsAssignment.custodian]?.id || fraction?.isEditable === false
  const fetchOptions = async (page?: number) => {
    const data = await administratorFICOptions({
      changeOptions: () => {},
      page
    })
    return data
  }
  const selectValue = value?.label
    ? {
        code: value?.label,
        id: value?.value
      }
    : undefined
  return (
    <SelectAssignmentTable
      keyValue="code"
      disabled={disabled}
      onChange={(value: any) => {
        const newValue = {
          [FieldsAssignment.administrator]: value
            ? {
                value: value?.id,
                label: value?.code
              }
            : undefined
        }
        if (value) {
          changeAlert({
            variant: 'modal',
            info: {
              title:
                // '¿Deseas actualizar la cuenta efectivo con la asignación del administrador FIC?',
                t('updateCashAccountWithFICAssignment'),
              // message: `La cuenta efectivo del Administrador FIC seleccionado es: ${value?.bank_account ?? ''}`,
              message: t('selectedFICAdministratorCashAccount', {
                bankAccount: value?.bank_account ?? ''
              }),
              open: true,
              variant: 'warning',
              onClick() {
                updateFraction(fraction[FieldsAssignment.index], {
                  ...newValue,
                  [FieldsAssignment.cashAccount]: value
                    ? { value: value?.bank_account }
                    : { value: '', error: { error: true } }
                })
              },
              handleCancel() {
                updateFraction(fraction[FieldsAssignment.index], {
                  ...newValue
                })

                changeAlert({ variant: 'modal' })
              },
              textCancel: 'Cancelar',
              textSuccess: 'Aceptar'
            }
          })
        } else {
          changeAlert({
            variant: 'modal',
            info: {
              // title: '¿Estás seguro de eliminar el administrador FIC?',
              title: t('confirmDeleteFICAdministrator'),
              open: true,
              variant: 'warning',
              onClick() {
                updateFraction(fraction[FieldsAssignment.index], {
                  [FieldsAssignment.administrator]: null,
                  [FieldsAssignment.cashAccount]: {
                    value: cashAccountDefault?.bankAccount || '',
                    error: cashAccountDefault ? undefined : { error: true }
                  }
                })
              },
              handleCancel() {
                changeAlert({ variant: 'modal' })
              },
              textCancel: 'No',
              textSuccess: 'Sí'
            }
          })
        }
      }}
      value={selectValue}
      showClearIndicator={!disabled}
      fetchOptions={fetchOptions}
    />
  )
}

export default AssignmentAdministratorOptions

```

## src/features/operations-management/components/AssignmentButtonAction.tsx

```tsx
import { Button } from '@nuam/common-fe-lib-components'
import { useCallback } from 'react'

import useTranslate from '@/shared/hooks/useTranslate'
import { type ITrades } from '@/shared/types/trade'

import { AssignmentOptionMode } from '../constants/assignmentOptionMode'
import { type HandleAlertAction } from '../hooks/useAssignmentAlert'
import useSaveAssignment from '../hooks/useSaveAssignment'
import { type Fraction } from '../hooks/useStateFraction'

const AssignmentButtonAction = ({
  mode,
  side,
  trade,
  fractions,
  disabled,
  handleClose,
  changeAlert,
  hasCustodianFractions
}: {
  mode: AssignmentOptionMode
  trade: ITrades
  side: string
  fractions: Fraction[]
  disabled?: boolean
  handleClose?: () => void
  changeAlert: HandleAlertAction
  hasCustodianFractions?: boolean
}) => {
  const { t } = useTranslate({
    keyPrefix: 'operationDetail.tabs.beneficiary.modalAssignment'
  })
  const closeModal = useCallback(() => {
    changeAlert({ variant: 'modal' })
  }, [changeAlert])

  const { handleSaveAssignment, handleSaveReassignment } = useSaveAssignment({
    changeAlert,
    fractions,
    handleClose,
    side,
    tradeId: trade?.id ?? 0,
    hasCustodianFractions
  })
  const handleModalConfirmSave = useCallback(async () => {
    changeAlert({
      variant: 'modal',
      info: {
        open: true,
        variant: 'warning',
        // title: '¿Estás seguro de guardar la asignación ingresada?',
        title: t('modalConfirm.titleAssignment'),
        // textCancel: 'Cancelar',
        textCancel: t('modalConfirm.cancel'),
        // textSuccess: 'Si, Guardar',
        textSuccess: t('modalConfirm.textSuccess'),
        handleCancel: () => {
          closeModal()
        },
        onClick: async () => {
          handleSaveAssignment()
        }
      }
    })
  }, [changeAlert, closeModal, handleSaveAssignment, t])
  const handleModalConfirmReassignment = useCallback(async () => {
    changeAlert({
      variant: 'modal',
      info: {
        open: true,
        variant: 'warning',
        // title: '¿Estás seguro de guardar la reasignación ingresada?',
        title: t('modalConfirm.title'),
        // textCancel: 'Cancelar',
        textCancel: t('modalConfirm.cancel'),
        // textSuccess: 'Si, Guardar',
        textSuccess: t('modalConfirm.textSuccess'),
        handleCancel: () => {
          closeModal()
        },
        onClick: async () => {
          handleSaveReassignment()
        }
      }
    })
  }, [changeAlert, closeModal, handleSaveReassignment, t])
  const OptionsMode = {
    [AssignmentOptionMode.NEW]: {
      label: 'save',
      onclick: handleModalConfirmSave
    },
    [AssignmentOptionMode.EDIT]: {
      label: 'save',
      onclick: handleModalConfirmReassignment
    }
  }
  const currentMode = OptionsMode[mode]
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => currentMode.onclick()}
      disabled={disabled}
    >
      {t(currentMode.label)}
    </Button>
  )
}

export default AssignmentButtonAction

```

## src/features/operations-management/components/AssignmentClosureModal.tsx

```tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Typography,
  DefaultComponents,
  NuamThemeWrapper
} from '@nuam/common-fe-lib-components'
import { useEffect } from 'react'

import {
  BasicTable,
  ModalAlert,
  Toast
} from 'remoteUtilities/components-mf-utilities'

import { ASSIGNMENT_CLOSURE_TABLE_LABELS } from '../constants/assignmentClosureTableLabels'
import useAssignmentClosureConfirm from '../hooks/useAssignmentClosureConfirm'
import useAssignmentClosurePreview from '../hooks/useAssignmentClosurePreview'

interface AssignmentClosureModalProps {
  isOpen: boolean
  onClose: () => void
  selectedTradeIds: number[]
  userConfirmed?: boolean
  onScheduleConfirmed?: () => void
  resetUserAccepted: () => void
  isClosingTimeSecondary?: boolean
}

const AssignmentClosureModal = ({
  isOpen,
  onClose,
  selectedTradeIds,
  userConfirmed = false,
  resetUserAccepted,
  isClosingTimeSecondary
}: AssignmentClosureModalProps) => {
  const {
    handleGetAssignmentClosurePreview,
    isLoadingPreview,
    formatPreviewDataForTable,
    getTableColumns,
    modalContent: previewModalContent,
    selectedItems,
    setSelectedItems,
    previewData,
    setPreviewData,
    setModalContent
  } = useAssignmentClosurePreview(onClose, isClosingTimeSecondary)

  const {
    handleConfirmAssignmentClosure,
    isConfirming,
    confirmModalContent,
    setConfirmModalContent,
    failedTradesData,
    setFailedTradesData,
    showSuccessToast,
    setShowSuccessToast
  } = useAssignmentClosureConfirm(onClose)

  const showFailedTradesContent = failedTradesData.length > 0
  const showPreviewContent = previewData && previewData.length > 0
  const isLoading = isLoadingPreview || isConfirming

  useEffect(() => {
    if (isOpen && selectedTradeIds.length > 0) {
      handleGetAssignmentClosurePreview(selectedTradeIds, userConfirmed)
    }
  }, [isOpen, selectedTradeIds, userConfirmed])

  const clearAllStates = () => {
    setFailedTradesData([])
    setConfirmModalContent(null)
    setModalContent(null)
    setSelectedItems([])
    setPreviewData(null)
  }

  const handleClose = () => {
    clearAllStates()
    onClose()
    resetUserAccepted()
  }

  const handleAcceptClick = async () => {
    setConfirmModalContent({
      title: 'Enviar Asignación Definitiva a CCP',
      message: '¿Estás seguro de confirmar la Asignación definitiva?',
      variant: 'warning',
      textSuccess: 'Aceptar',
      textCancel: 'Cancelar',
      orientation: 'horizontal',
      onClick: async () => {
        const result = await handleConfirmAssignmentClosure(selectedItems)
        if (result.success) {
          handleClose()
        }
      },
      handleCancel: () => {
        setConfirmModalContent(null)
      }
    })
  }

  return (
    <>
      {isOpen && !confirmModalContent && (
        <ModalAlert
          title="Enviar Asignación Definitiva a CCP"
          marginTop="0"
          variant="none"
          width="1140px"
          textAlign="left"
          fontWeight="normal"
          padding="12px"
          orientation="horizontal"
          buttonsAlign="right"
          textCancel="VOLVER"
          textSuccess={showFailedTradesContent ? undefined : 'ACEPTAR'}
          handleCancel={handleClose}
          onClick={
            showFailedTradesContent
              ? undefined
              : isLoading || selectedItems.length === 0
                ? undefined
                : handleAcceptClick
          }
        >
          <div className="flex gap-6 mb-6 -mt-[6px]">
            <Typography
              variant="body1"
              style={{
                fontWeight: 400,
                fontSize: '1rem',
                lineHeight: '150%',
                letterSpacing: '0.15px',
                verticalAlign: 'middle'
              }}
            >
              {showFailedTradesContent
                ? 'No es posible enviar la asignación definitiva de las siguientes puntas:'
                : '¿Estás seguro de confirmar la Asignación definitiva?'}
            </Typography>
          </div>
          <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
            {isLoading ? (
              <NuamThemeWrapper>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '20px'
                  }}
                >
                  <DefaultComponents.CircularProgress />
                </div>
              </NuamThemeWrapper>
            ) : showFailedTradesContent ? (
              <BasicTable
                columns={[
                  {
                    headerName: ASSIGNMENT_CLOSURE_TABLE_LABELS.CAUSAL,
                    field: ASSIGNMENT_CLOSURE_TABLE_LABELS.CAUSAL,
                    align: 'left' as const,
                    flex: 1,
                    minWidth: 120,
                    renderCell: (row: Record<string, any>) => (
                      <div
                        style={{
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap'
                        }}
                        title={row[ASSIGNMENT_CLOSURE_TABLE_LABELS.CAUSAL]}
                      >
                        {row[ASSIGNMENT_CLOSURE_TABLE_LABELS.CAUSAL]}
                      </div>
                    )
                  },
                  {
                    headerName: ASSIGNMENT_CLOSURE_TABLE_LABELS.FECHA_REGISTRO,
                    field: ASSIGNMENT_CLOSURE_TABLE_LABELS.FECHA_REGISTRO,
                    align: 'left' as const
                  },
                  {
                    headerName: ASSIGNMENT_CLOSURE_TABLE_LABELS.NUMERO_FOLIO,
                    field: ASSIGNMENT_CLOSURE_TABLE_LABELS.NUMERO_FOLIO,
                    align: 'left' as const
                  },
                  {
                    headerName:
                      ASSIGNMENT_CLOSURE_TABLE_LABELS.FECHA_CUMPLIMIENTO,
                    field: ASSIGNMENT_CLOSURE_TABLE_LABELS.FECHA_CUMPLIMIENTO,
                    align: 'left' as const
                  },
                  {
                    headerName: ASSIGNMENT_CLOSURE_TABLE_LABELS.PUNTA,
                    field: ASSIGNMENT_CLOSURE_TABLE_LABELS.PUNTA,
                    align: 'left' as const
                  },
                  {
                    headerName: ASSIGNMENT_CLOSURE_TABLE_LABELS.PARTICIPANTE,
                    field: ASSIGNMENT_CLOSURE_TABLE_LABELS.PARTICIPANTE,
                    align: 'left' as const
                  }
                ]}
                rows={failedTradesData}
                height="auto"
              />
            ) : showPreviewContent ? (
              <BasicTable
                columns={getTableColumns()}
                rows={formatPreviewDataForTable()}
                height="auto"
              />
            ) : null}
          </div>
        </ModalAlert>
      )}

      {showSuccessToast && (
        <Toast
          text="Cierre de asignación confirmado exitosamente"
          variant="success"
          onClose={() => setShowSuccessToast(false)}
        />
      )}

      {previewModalContent && <ModalAlert {...previewModalContent} />}

      {confirmModalContent && <ModalAlert {...confirmModalContent} />}
    </>
  )
}

export default AssignmentClosureModal

```

## src/features/operations-management/components/AssignmentOperation.tsx

```tsx
import {
  Button,
  DefaultComponents,
  Divider,
  Typography
} from '@nuam/common-fe-lib-components'
import { useEffect, useMemo, useState } from 'react'

import { ModalAlert, Toast } from 'remoteUtilities/components-mf-utilities'

import useTranslate from '@/shared/hooks/useTranslate'

import { AssignmentOptionMode } from '../constants/assignmentOptionMode'
import { SIDE_TYPES } from '../constants/operations'
import useAssignmentAlert from '../hooks/useAssignmentAlert'
import { useAssignmentColumns } from '../hooks/useAssignmentColumns'
import { useControlFractions } from '../hooks/useControlFractions'
import { type Fraction } from '../hooks/useStateFraction'
import { type IDetailOperation } from '../types'
import AssignmentButtonAction from './AssignmentButtonAction'
import AssignmentToolbar from './AssignmentToolbar'
import TableAssignment from './TableAssignment'

interface Props {
  trade: IDetailOperation
  side: string
  handleClose: () => void
  maxFractions: number
  isOwnPosition: boolean
}
export interface SelectedFractions {
  fractions: Fraction[]
  ids: Set<string | number>
}

const AssignmentOperation = ({
  side,
  trade: { trade },
  maxFractions,
  handleClose,
  isOwnPosition
}: Props) => {
  const { t } = useTranslate({
    keyPrefix: 'operationDetail.tabs.beneficiary.modalAssignment'
  })

  const { changeAlert, modalAlert, toast } = useAssignmentAlert()
  const sideText = useMemo(
    () => (side === '1' ? SIDE_TYPES.BUY.label : SIDE_TYPES.SELL.label),
    [side]
  )
  const limitQuantity = trade?.quantity || 0

  const [thereAreSelectedFractions, setThereAreSelectedFractions] = useState<{
    fractions: Fraction[]
    ids: Set<string | number>
  }>({ fractions: [], ids: new Set() })

  const controlFractions = useControlFractions({
    side,
    changeAlert,
    trade,
    isOwnPosition
  })

  const {
    updateFraction,
    fractions,
    settlement,
    validations,
    cashAccountDefault
  } = controlFractions
  const columns = useAssignmentColumns({
    trade,
    side,
    updateFraction,
    changeAlert,
    fractions,
    cashAccountDefault
  })
  const othersValidations = validations?.othersValidations
  const quantityIsMoreThanLimit =
    othersValidations?.quantityAvailableToAssign &&
    othersValidations.quantityAvailableToAssign > limitQuantity
  useEffect(() => {
    if (quantityIsMoreThanLimit) {
      changeAlert({
        variant: 'modal',
        info: {
          open: true,
          variant: 'warning',
          title:
            // 'La cantidad ingresada excede el valor pendiente de asignación',
            t('quantityExceedsPendingAssignment'),
          // textSuccess: 'Aceptar'
          textSuccess: t('textSuccess')
        }
      })
    }
  }, [quantityIsMoreThanLimit])
  const mode =
    settlement && settlement.length > 0
      ? AssignmentOptionMode.EDIT
      : AssignmentOptionMode.NEW

  return (
    <DefaultComponents.Box
      sx={{ display: 'flex', flexDirection: 'column', maxHeight: '78dvh' }}
    >
      <DefaultComponents.Box>
        <Typography
          variant="h2"
          sx={{
            fontSize: '14px',
            marginBottom: '12px'
          }}
          fontWeight="500"
        >
          {/* Folio {trade?.matchId} - {sideText} */}
          {t('title', { matchId: trade?.matchId, side: sideText })}
        </Typography>
      </DefaultComponents.Box>
      <TableAssignment
        Toolbar={
          <AssignmentToolbar
            thereAreSelectedFractions={thereAreSelectedFractions}
            disabledFractions={othersValidations?.quantityIsMinorLimit}
            changeAlert={changeAlert}
            maxFractions={maxFractions}
            {...controlFractions}
          />
        }
        columns={columns}
        fractions={fractions}
        setThereAreSelectedFractions={setThereAreSelectedFractions}
      />

      <Divider />
      <DefaultComponents.Box
        mt={2}
        sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}
      >
        <Button
          variant="text"
          color="primary"
          sx={{ mr: 2 }}
          onClick={handleClose}
        >
          {/* Volver */}
          {t('back')}
        </Button>
        <AssignmentButtonAction
          mode={mode}
          fractions={fractions}
          side={side}
          trade={trade!}
          disabled={!othersValidations?.availableToSave}
          handleClose={handleClose}
          changeAlert={changeAlert}
          hasCustodianFractions={othersValidations?.hasCustodianFractions}
        />
      </DefaultComponents.Box>
      {modalAlert?.open && <ModalAlert {...modalAlert} />}
      {toast?.open && <Toast {...toast} />}
    </DefaultComponents.Box>
  )
}

export default AssignmentOperation

```

## src/features/operations-management/components/AssignmentOriginOptions.tsx

```tsx
import { useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'remoteShell/mf-store'

import { BusinessType } from '@/features/settlement-file/types'

import { FieldsAssignment } from '../constants/fieldsAssignment'
import { Fraction } from '../hooks/useStateFraction'
import SelectAssignmentTable from './SelectAssignmentTable'

const AssignmentOriginOptions = ({
  updateFraction,
  fraction,
  origin,
  options
}: {
  updateFraction: (index: number, updateFraction: Partial<Fraction>) => void
  fraction: Fraction
  origin: BusinessType
  options: BusinessType[]
}) => {
  const index = fraction[FieldsAssignment.index]
  const { userType } = useSelector(
    (state: RootState) => state.auth.infoUserNubo
  )
  const isInternalUser = userType === 'INTERNAL'
  const valueOrigin = useMemo(
    () => ({
      value: origin?.id,
      label: origin?.shortName ?? origin?.description
    }),
    [origin]
  )
  const sourceLabel = !fraction[FieldsAssignment.source]?.label
  useEffect(() => {
    if (sourceLabel) {
      updateFraction(index, {
        [FieldsAssignment.source]: valueOrigin
      })
    }
  }, [index, updateFraction, valueOrigin, sourceLabel])
  return (
    <SelectAssignmentTable
      options={options}
      keyValue="description"
      disabled={!isInternalUser || fraction?.isEditable === false}
      onChange={(value: BusinessType) => {
        const isOriginOwn = value.id === 121
        const valueCommission = isOriginOwn
          ? '0'
          : fraction[FieldsAssignment.commissionPercentage]

        updateFraction(index, {
          [FieldsAssignment.source]: {
            value: value.id,
            label: value.description
          },
          [FieldsAssignment.investorAccount]: null,
          [FieldsAssignment.participantAccount]: null,
          [FieldsAssignment.account]: { value: '' },
          [FieldsAssignment.commissionPercentage]: valueCommission,
          [FieldsAssignment.commission]: 0,
          [FieldsAssignment.impCommission]: 0,
          [FieldsAssignment.netAmount]: 0,
          [FieldsAssignment.returnAmount]: 0,
          [FieldsAssignment.amount]: 0,
          [FieldsAssignment.valTax]: 0
        })
      }}
      value={fraction[FieldsAssignment.source]?.label}
      showClearIndicator={false}
      onClick={(event) => event?.stopPropagation()}
    />
  )
}

export default AssignmentOriginOptions

```

## src/features/operations-management/components/AssignmentToolbar.tsx

```tsx
import { Button, MaterialIcons } from '@nuam/common-fe-lib-components'

import useTranslate from '@/shared/hooks/useTranslate'

import { type HandleAlertAction } from '../hooks/useAssignmentAlert'
import { type Fraction } from '../hooks/useStateFraction'
import { useValidationsButtonsAssignment } from '../hooks/useValidationsButtonsAssignment'
import { type SelectedFractions } from './AssignmentOperation'

interface Props {
  addFraction: () => void
  deleteFractions: (indexes: SelectedFractions['ids']) => void
  thereAreSelectedFractions: SelectedFractions
  fractions: Fraction[]
  disabledFractions?: boolean
  changeAlert?: HandleAlertAction
  maxFractions: number
  disabledEditAssignment?: boolean
  isCorrection?: boolean
}
const AssignmentToolbar = ({
  addFraction,
  thereAreSelectedFractions,
  deleteFractions,
  fractions,
  disabledFractions,
  maxFractions,
  disabledEditAssignment,
  isCorrection
}: Props) => {
  const { t } = useTranslate({
    keyPrefix: 'operationDetail.tabs.beneficiary.modalAssignment.toolbar'
  })
  const { disabledButtons } = useValidationsButtonsAssignment({
    fractions,
    thereAreSelected: thereAreSelectedFractions.fractions,
    quantityIsMinorLimit: disabledFractions ?? false,
    maxFractions,
    isCorrection
  })

  return (
    <>
      <Button
        variant="text"
        sx={{ fontSize: '13px', width: { xs: 'min-content' } }}
        onClick={addFraction}
        disabled={
          disabledEditAssignment || (disabledButtons?.addFraction ?? true)
        }
      >
        <MaterialIcons.PersonAddAlt sx={{ mr: '2px' }} />
        {/* Agregar fracción */}
        {t('addFraction')}
      </Button>
      <Button
        variant="text"
        sx={{ fontSize: '13px', width: { xs: 'min-content' } }}
        onClick={() => deleteFractions(thereAreSelectedFractions.ids)}
        disabled={
          disabledEditAssignment || (disabledButtons?.deleteFraction ?? true)
        }
      >
        <MaterialIcons.DeleteOutline sx={{ mr: '2px' }} />
        {/* Eliminar fracción */}
        {t('deleteFraction')}
      </Button>
    </>
  )
}

export default AssignmentToolbar

```

## src/features/operations-management/components/BeneficiaryDetailTab.tsx

```tsx
import React, { lazy, Suspense, useState } from 'react'

import {
  NewTable,
  CustomTabs,
  ModalContent,
  Toast,
  ModalAlert,
  Spinner
} from 'remoteUtilities/components-mf-utilities'
import { formattedDate } from 'remoteUtilities/formattedDate'

import { IDetailOperation } from '@/features/operations-management/types'

import useTranslate from '@/shared/hooks/useTranslate'
import {
  type ModalAlertState,
  type ModalContentState,
  type ToastState
} from '@/shared/types/Alerts'

import useBeneficiaryDetailAssignment from '../hooks/useBeneficiaryDetailAssignment'
import { ModalHistory, Row } from '../types/operationDetails'
import { BeneficiaryToolbar } from './BeneficiaryToolbar'
import { useBeneficiaryDetail } from './hooks/useBeneficiaryDetail'

const CorrectionModal = lazy(() =>
  import('./CorrectionModal').then((module) => ({
    default: module.CorrectionModal
  }))
)
const CorrectionConfirmationModal = lazy(() =>
  import('./CorrectionConfirmationModal').then((module) => ({
    default: module.CorrectionConfirmationModal
  }))
)
interface BeneficiaryDetailTabProps {
  tradeData: IDetailOperation
  tradeId?: string
  handleJointMembers: (
    client_user: string,
    row: Row,
    setModalDetailAccount: React.Dispatch<
      React.SetStateAction<ModalHistory | null>
    >,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>
  setModalDetailAccount: React.Dispatch<
    React.SetStateAction<ModalHistory | null>
  >
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const BeneficiaryDetailTab: React.FC<BeneficiaryDetailTabProps> = ({
  tradeData,
  tradeId,
  handleJointMembers,
  setModalDetailAccount,
  setIsModalOpen
}) => {
  const [modalContent, setModalContent] = useState<ModalContentState | null>(
    null
  )
  const [modalState, setToast] = useState<ToastState | null>(null)
  const [modalAlertState, setModalAlertState] =
    useState<ModalAlertState | null>(null)
  const {
    activeTab,
    setActiveTab,
    setDataRemote,
    columns,
    filteredTabs,
    endpoint,
    shouldShowTable,
    TotalCalculationCallback,
    activeSideId
  } = useBeneficiaryDetail({
    tradeData,
    tradeId,
    handleJointMembers,
    setModalDetailAccount,
    setIsModalOpen
  })
  const currentDate = formattedDate({ format: 'YYYY-MM-DD' })
  const nameFile = `Reporte_Beneficiario_Final_${currentDate}.csv`
  // Transformar filteredTabs al formato esperado por CustomTabs
  const tabs = filteredTabs.map((item) => ({
    label: item.label,
    disabled: item?.disabled || false
  }))
  const tabsContent = filteredTabs.map((item) => item.content)
  const { assignmentOptions, correctionModalProps, disabledOptions } =
    useBeneficiaryDetailAssignment({
      activeTab,
      setToast,
      setModalContent,
      setModalAlertState,
      tradeData,
      sideId: activeSideId
    })
  const { t } = useTranslate({ keyPrefix: 'operationDetail.tabs.beneficiary' })
  // Componente toolbar personalizado que combina custom toolbar + BeneficiaryToolbar
  const beneficiaryCustomToolbar = (
    <div className="flex gap-4 items-center">
      <BeneficiaryToolbar
        options={assignmentOptions}
        buttonLabel={t('dropdownAssignment')}
        hasPendingCorrection={disabledOptions?.hasPendingCorrection}
      />
    </div>
  )

  return (
    <div className="flex flex-col my-6 w-full flex-1">
      <div>
        <CustomTabs
          tabs={tabs}
          tabsContent={tabsContent}
          currentTab={activeTab}
          onChange={setActiveTab}
          alignTabs="left"
        />
      </div>
      {modalContent?.open && <ModalContent {...modalContent} />}
      {modalState?.open && <Toast {...modalState} />}
      {modalAlertState?.open && <ModalAlert {...modalAlertState} />}
      {/* Modales de corrección */}
      {correctionModalProps.confirmationModal.open && (
        <Suspense fallback={<Spinner />}>
          <CorrectionConfirmationModal
            {...correctionModalProps.confirmationModal}
          />
        </Suspense>
      )}
      {correctionModalProps.correctionModal.open && (
        <Suspense fallback={<Spinner />}>
          <CorrectionModal {...correctionModalProps.correctionModal} />
        </Suspense>
      )}

      {shouldShowTable && (
        <>
          <div className="mt-[24px] flex flex-col flex-1">
            <NewTable
              key={`${activeTab}`}
              columns={columns}
              customToolbar={beneficiaryCustomToolbar}
              widthContent="4500px"
              endpoint={endpoint}
              customFooter={TotalCalculationCallback}
              setDataRemote={setDataRemote}
              axiosInstanceKey="httpOperationsQuery"
              checkboxSelection={false}
              showDownload={true}
              csvFileName={nameFile}
            />
          </div>
          {/* <div className="mt-6 w-full h-full">
            <BoxInfo columns={dataBeneficiariesBottom} />
          </div> */}
        </>
      )}
    </div>
  )
}

```

## src/features/operations-management/components/BeneficiaryToolbar.tsx

```tsx
import React, { useState, useCallback, memo } from 'react'
import { createPortal } from 'react-dom'

import { Dropdown, Toast } from 'remoteUtilities/components-mf-utilities'

import { ToastState } from '@/shared/types/Alerts'

export interface AssignmentOption {
  id: string
  label: string
  icon?: React.ReactNode
  onClick: () => void
  disabled?: boolean | undefined
}

interface BeneficiaryToolbarProps {
  options: AssignmentOption[]
  buttonLabel?: string
  disabled?: boolean
  hasPendingCorrection?: boolean
}

export const BeneficiaryToolbar: React.FC<BeneficiaryToolbarProps> = memo(
  ({
    options,
    buttonLabel = 'Opciones de asignación',
    disabled = false,
    hasPendingCorrection = false
  }) => {
    const [toast, setToast] = useState<ToastState | null>(null)

    const handleOptionClick = useCallback((option: AssignmentOption) => {
      if (!option.disabled) {
        option.onClick()
      }
    }, [])

    const handleOpen = useCallback(() => {
      if (hasPendingCorrection) {
        setToast({
          open: true,
          text: 'Hay una corrección en curso',
          variant: 'warning',
          onClose: () => setToast(null)
        })
      }
    }, [hasPendingCorrection])

    // Transformar opciones al formato esperado por Dropdown
    const dropdownOptions = options.map((option) => ({
      value: option.id,
      label: option.label,
      icon: option.icon,
      disabled: option.disabled,
      action: () => handleOptionClick(option)
    }))

    return (
      <>
        <Dropdown
          title={buttonLabel}
          options={dropdownOptions}
          disabled={disabled}
          onOpen={handleOpen}
        />
        {toast?.open && createPortal(<Toast {...toast} />, document.body)}
      </>
    )
  }
)

```

## src/features/operations-management/components/BeneficiaryTotals.tsx

```tsx
import { Typography } from '@nuam/common-fe-lib-components'

import useTranslate from '@/shared/hooks/useTranslate'

import { TotalCalculationInterface } from '../types/totalCalculation'

const TotalCalculation = (props: TotalCalculationInterface) => {
  const total = props?.total
  const operationType = props?.operationType
  const { t } = useTranslate({
    keyPrefix: 'operationDetail.tabs.beneficiary.totals'
  })
  return (
    <div className="p-2">
      <div className="overflow-x-auto">
        <div className="flex min-w-max items-center justify-center gap-4 border-b border-black py-5 px-4 sm:gap-6 md:gap-8 lg:min-w-full lg:justify-center">
          <div className="flex gap-2 sm:gap-4 md:gap-8">
            <Typography className="whitespace-nowrap text-center text-sm sm:text-base font-medium">
              {/* Cantidad: */}
              {t('quantity')}
            </Typography>
            <Typography className="whitespace-nowrap text-center text-sm sm:text-base font-medium">
              {total?.quantityTotal?.toLocaleString('es-ES', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) ?? 0}
            </Typography>
          </div>
          <div className="flex gap-2 sm:gap-4 md:gap-8">
            <Typography className="whitespace-nowrap text-center text-sm sm:text-base font-medium">
              {/* Valor Comisión: */}
              {t('valueCommission')}
            </Typography>
            <Typography className="whitespace-nowrap text-center text-sm sm:text-base font-medium">
              {total?.commissionAmountTotal?.toLocaleString('es-ES', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) ?? 0}
            </Typography>
          </div>
          <div className="flex gap-2 sm:gap-4 md:gap-8">
            <Typography className=" whitespace-nowrap text-center text-sm sm:text-base font-medium">
              {/* Imp Comisión: */}
              {t('impCommission')}
            </Typography>
            <Typography className=" whitespace-nowrap text-center text-sm sm:text-base font-medium">
              {total?.valTaxAmountTotal?.toLocaleString('es-ES', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) ?? 0}
            </Typography>
          </div>
          {operationType == 60 ? (
            <>
              <div className="flex gap-2 sm:gap-4 md:gap-8">
                <Typography className=" whitespace-nowrap text-center text-sm sm:text-base font-medium">
                  {/* Monto: */}
                  {t('amount')}
                </Typography>
                <Typography className=" whitespace-nowrap text-center text-sm sm:text-base font-medium">
                  {total?.transferValueTotal?.toLocaleString('es-ES', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  }) ?? 0}
                </Typography>
              </div>
              <div className="flex gap-2 sm:gap-4 md:gap-8">
                <Typography className=" whitespace-nowrap text-center text-sm sm:text-base font-medium">
                  {/* Monto Neto: */}
                  {t('netAmount')}
                </Typography>
                <Typography className=" whitespace-nowrap text-center text-sm sm:text-base font-medium">
                  {total?.netAmountTotal?.toLocaleString('es-ES', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  }) ?? 0}
                </Typography>
              </div>
            </>
          ) : (
            <>
              <div className="flex gap-2 sm:gap-4 md:gap-8">
                <Typography className=" whitespace-nowrap text-center text-sm sm:text-base font-medium">
                  {/* Monto Salida: */}
                  {t('outFlowTurnoverValue')}
                </Typography>
                <Typography className=" whitespace-nowrap text-center text-sm sm:text-base font-medium">
                  {total?.outFlowTurnoverValueTotal?.toLocaleString('es-ES', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  }) ?? 0}
                </Typography>
              </div>
              <div className="flex gap-2 sm:gap-4 md:gap-8">
                <Typography className=" whitespace-nowrap text-center text-sm sm:text-base font-medium">
                  {/* Monto Neto Salida: */}
                  {t('netOutFlowTotal')}
                </Typography>
                <Typography className=" whitespace-nowrap text-center text-sm sm:text-base font-medium">
                  {total?.netOutFlowTotal?.toLocaleString('es-ES', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  }) ?? 0}
                </Typography>
              </div>
              <div className="flex gap-2 sm:gap-4 md:gap-8">
                <Typography className=" whitespace-nowrap text-center text-sm sm:text-base font-medium">
                  {/* Monto Neto Regreso: */}
                  {t('netReturnTurnoverValue')}
                </Typography>
                <Typography className=" whitespace-nowrap text-center text-sm sm:text-base font-medium">
                  {total?.returnTurnoverValueTotal?.toLocaleString('es-ES', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  }) ?? 0}
                </Typography>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default TotalCalculation

```

## src/features/operations-management/components/CorrectionButtonAction.tsx

```tsx
import { Button } from '@nuam/common-fe-lib-components'

import { useRefreshTable } from 'remoteShell/mf-shell-useRefreshTable'

import useGenerateLogs from '@/shared/hooks/useGenerateLogs'
import useTranslate from '@/shared/hooks/useTranslate'
import { ErrorResponse } from '@/shared/types'
import { ToastState } from '@/shared/types/Alerts'
import { type Participant } from '@/shared/types/participant'
import { ITrades } from '@/shared/types/trade'

import { FRACTION_ERROR_CODES } from '../constants/FullViewBeneficiaries'
import { type HandleAlertAction } from '../hooks/useAssignmentAlert'
import { type Fraction } from '../hooks/useStateFraction'
import { saveCorrectionEndpoint } from '../services/saveCorrectionEndpoint'

interface CorrectionButtonActionProps {
  trade: ITrades
  side: string
  fractions: Fraction[]
  disabled?: boolean
  handleClose?: () => void
  changeAlert: HandleAlertAction
  custodian: Participant | null
  buttonText?: string
  correctionSelected?: {
    label: string
    value: string
  }
  setToast?: React.Dispatch<React.SetStateAction<ToastState | null>>
}

const DUPLICATE_ACCOUNT_ERROR_CODES = [
  FRACTION_ERROR_CODES.PARTICIPANT_ACCOUNT_DUPLICATED,
  FRACTION_ERROR_CODES.INVESTOR_ACCOUNT_DUPLICATED
]

/**
 * Componente de botón de acción para correcciones de asignación.
 *
 * Principios SOLID aplicados:
 * - Single Responsibility: Solo maneja el flujo de corrección
 * - Open/Closed: Extensible vía props (buttonText, handlers personalizados)
 * - Dependency Inversion: Recibe dependencias (changeAlert, handleClose) como props
 */
const CorrectionButtonAction = ({
  trade,
  side,
  fractions,
  disabled,
  handleClose,
  changeAlert,
  custodian,
  buttonText = 'Guardar CORRECCIÓN',
  correctionSelected,
  setToast
}: CorrectionButtonActionProps) => {
  const { t } = useTranslate({
    keyPrefix: 'operationDetail.tabs.beneficiary.modalConfirmCorrection'
  })
  const { generateLogs } = useGenerateLogs()
  const { refreshTable } = useRefreshTable()

  const closeModal = () => {
    changeAlert({ variant: 'modal' })
  }

  const logAction = (
    actionDestination: string,
    actionType: string,
    statusID: string | undefined
  ) => {
    generateLogs({ actionDestination, actionType, statusID })
  }

  const handleDuplicateAccountError = () => {
    changeAlert({
      variant: 'modal',
      info: {
        open: true,
        variant: 'error',
        // title: 'Cuenta inversionista no se puede repetir'
        title: t('duplicateAccountErrorTitle')
      }
    })
    logAction(
      'Guardar Corrección',
      `Error al guardar corrección, cuenta repetida (tradeId: ${trade?.id}, sideId: ${side})`,
      '500'
    )
  }

  const handleServiceError = () => {
    changeAlert({
      variant: 'error_service',
      info: {
        onClick: closeModal
      }
    })
    logAction(
      'Guardar Corrección',
      `Error al guardar corrección (tradeId: ${trade?.id}, sideId: ${side})`,
      '500'
    )
  }

  const saveCorrection = async () => {
    if (!trade?.id) return
    await saveCorrectionEndpoint({
      params: {
        tradeId: trade.id,
        sideId: side,
        correctionTypeId: correctionSelected?.value || 'null'
      },
      body: fractions,
      custodian
    })

    logAction(
      'Guardar Corrección',
      `Guardar corrección exitosamente (tradeId: ${trade.id}, sideId: ${side})`,
      '200'
    )
  }

  const handleConfirmCorrection = async () => {
    try {
      await saveCorrection()
      setToast?.({
        open: true,
        duration: 1000,
        text: 'Corrección Solicitada',
        onClose: () => {
          closeModal()
          handleClose?.()
          refreshTable()
        }
      })
      handleClose?.()
    } catch (error) {
      const errorResponse = (error as ErrorResponse)?.response?.data
      const errorCode = errorResponse?.errorCode ?? ''

      if (DUPLICATE_ACCOUNT_ERROR_CODES.includes(errorCode)) {
        handleDuplicateAccountError()
      } else if (FRACTION_ERROR_CODES.ERROR_BUSINESS_RULE === errorCode) {
        changeAlert({
          variant: 'modal',
          info: {
            onClick: closeModal,
            title: 'Atención',
            open: true,
            textSuccess: 'Cerrar',
            variant: 'error',
            message: errorResponse?.errorMessageDetail ?? ''
          }
        })
        logAction(
          'Guardar Corrección',
          `Error al guardar corrección (tradeId: ${trade?.id}, sideId: ${side})`,
          '500'
        )
      } else {
        handleServiceError()
      }
    }
  }

  const handleClick = () => {
    changeAlert({
      variant: 'modal',
      info: {
        open: true,
        variant: 'warning',
        // title: '¿Estás seguro de guardar la corrección ingresada?',
        title: t('confirmSaveCorrection'),
        // textCancel: 'Cancelar',
        textCancel: t('textCancel'),
        // textSuccess: 'Sí, Guardar',
        textSuccess: t('textSuccess'),
        handleCancel: closeModal,
        onClick: handleConfirmCorrection
      }
    })
  }

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleClick}
      disabled={disabled}
    >
      {buttonText}
    </Button>
  )
}

export default CorrectionButtonAction

```

## src/features/operations-management/components/CorrectionConfirmationModal.tsx

```tsx
import { DefaultComponents, Typography } from '@nuam/common-fe-lib-components'
import { useEffect, useState } from 'react'

import { ModalAlert, SelectNuam } from 'remoteUtilities/components-mf-utilities'

import useTranslate from '@/shared/hooks/useTranslate'

import {
  CorrectionOption,
  getAssignmentCorrectionsOptions
} from '../services/assigmentCorrectionsService'
import { getSide, SideTab } from '../utils/getSide'

interface CorrectionConfirmationModalProps {
  open: boolean
  onClose: () => void
  onConfirm: (selectedOption?: { label: string; value: string }) => void
  isInternalUser: boolean
  sideId: SideTab // 1 para compra, 2 para venta
  tradeId?: number | string
}

export const CorrectionConfirmationModal: React.FC<
  CorrectionConfirmationModalProps
> = ({ open, onClose, onConfirm, isInternalUser, sideId, tradeId }) => {
  const { t } = useTranslate({
    keyPrefix: 'operationDetail.tabs.beneficiary.modalConfirmCorrection'
  })
  const [selectedOption, setSelectedOption] = useState<{
    label: string
    value: string
  } | null>(null)

  const [hasSupports, setHasSupports] = useState(false)
  const [correctionOptions, setCorrectionOptions] = useState<
    CorrectionOption[]
  >([])
  const [isLoadingOptions, setIsLoadingOptions] = useState(false)

  // Cargar opciones dinámicamente según tipo de operación
  useEffect(() => {
    const loadOptions = async () => {
      const side = getSide(sideId)
      if (open && isInternalUser && side) {
        setIsLoadingOptions(true)
        try {
          const options = await getAssignmentCorrectionsOptions(
            Number(tradeId),
            Number(side)
          )
          setCorrectionOptions(options)
        } catch (error) {
          console.error('Error al cargar opciones de corrección:', error)
          // En caso de error, usar opciones por defecto
          setCorrectionOptions([])
        } finally {
          setIsLoadingOptions(false)
        }
      }
    }

    loadOptions()
  }, [open, isInternalUser, sideId, tradeId])

  // Resetear estado cuando el modal se cierra o abre
  useEffect(() => {
    if (!open) {
      setSelectedOption(null)
      setHasSupports(false)
    }
  }, [open])

  const handleConfirm = () => {
    if (isInternalUser && selectedOption) {
      onConfirm(selectedOption)
    } else {
      onConfirm()
    }
  }

  const isConfirmEnabled = () => {
    if (isInternalUser) {
      return hasSupports && selectedOption
    }
    return hasSupports
  }

  const renderInternalUserContent = () => (
    <>
      <Typography variant="body2" className="mb-4 text-gray-700">
        Selecciona la forma de aprobación
      </Typography>

      <SelectNuam
        label="Tipo de corrección"
        options={correctionOptions.map((option) => ({
          value: option.value,
          label: option.label
        }))}
        value={selectedOption}
        onChange={(value: { label: string; value: string }) =>
          setSelectedOption(value)
        }
        showClearIndicator
        formControlProps={{ fullWidth: true }}
        MenuProps={{
          style: { zIndex: 9999 }
        }}
        disabled={isLoadingOptions}
      />
      {isLoadingOptions && (
        <Typography variant="caption" className="mt-1 text-gray-500">
          {/* Cargando opciones... */}
          {t('loadOptions')}
        </Typography>
      )}
      <Typography variant="body2" className="mt-4 text-gray-700">
        {/* La corrección post-cumplimiento genera un costo que será facturado al
        Participante: */}
        {t('postComplianceCorrectionCost')}
      </Typography>
      <DefaultComponents.FormControlLabel
        control={
          <DefaultComponents.Checkbox
            checked={hasSupports}
            onChange={(e) => setHasSupports(e.target.checked)}
          />
        }
        // label="¿El Participante cuenta con los soportes para realizar la corrección?"
        label={t('hasSupports')}
        className="mt-4"
      />
    </>
  )

  const renderExternalUserContent = () => (
    <>
      <DefaultComponents.FormControlLabel
        control={
          <DefaultComponents.Checkbox
            checked={hasSupports}
            onChange={(e) => setHasSupports(e.target.checked)}
          />
        }
        // label="¿Cuentas con los soportes para realizar la corrección?"
        label={t('hasSupportsExternal')}
        className="mb-4"
      />

      <Typography variant="body2" className="mb-2 text-gray-700">
        {/* La corrección post-cumplimiento genera un costo que será facturado al
        Participante */}
        {t('postComplianceCorrectionCost')}
      </Typography>

      <Typography variant="body2" className="text-gray-700">
        {/* El cobro será generado conforme el instructivo de tarifas. */}
        {t('chargeAccordingToTariff')}
      </Typography>
    </>
  )

  // No renderizar si no está abierto
  if (!open) {
    return null
  }

  return (
    <ModalAlert
      // title="¿Deseas hacer una corrección?"
      title={t('titleConfirm')}
      onClick={handleConfirm}
      handleCancel={onClose}
      // textSuccess="Aprobar Corrección"
      textSuccess={t('textConfirm')}
      // textCancel="Volver"
      textCancel={t('back')}
      disabled={!isConfirmEnabled()}
      width="600px"
      orientation="horizontal"
      showIconClose={true}
      onIconClose={onClose}
      variant="warning"
      padding="32px"
      textAlign="center"
      fontWeight="semibold"
    >
      {isInternalUser
        ? renderInternalUserContent()
        : renderExternalUserContent()}
    </ModalAlert>
  )
}

```

## src/features/operations-management/components/CorrectionDetailContent.tsx

```tsx
import { DatePicker } from '@nuam/common-fe-lib-components'
import dayjs from 'dayjs'
import { useMemo } from 'react'

import { NewTable, SelectNuam } from 'remoteUtilities/components-mf-utilities'
import { formattedDate } from 'remoteUtilities/formattedDate'

import { API_ROUTES } from '@/shared/constants/endpoints'
import useTranslate from '@/shared/hooks/useTranslate'
import { BusinessType } from '@/shared/types'

import useCorrectionTableColumns from '../hooks/useCorrectionTableColumns'
import { type IDetailOperation } from '../types'

interface Props {
  side: {
    label: string
    value: number
  }
  optionsStatus: BusinessType[]
  currentSideFilter: {
    status: BusinessType | null
    dateRegister: string | null
  }
  changeSideFilter: (
    field:
      | Partial<{
          status: BusinessType | null
          dateRegister: string | null
        }>
      | undefined
  ) => void
  trade: IDetailOperation['trade']
}

const CorrectionDetailContent = ({
  side,
  optionsStatus,
  changeSideFilter,
  currentSideFilter,
  trade
}: Props) => {
  const endpoint = useMemo(() => {
    const url = API_ROUTES.VALIDATE_CORRECTION_SETTLEMENT()
    const valuesFilter = Object.fromEntries(
      Object.entries({
        sideId: side.value.toString(),
        tradeId: trade?.id?.toString() || '',
        statusId: currentSideFilter?.status?.id,
        dateOfCorrection: currentSideFilter?.dateRegister
          ? formattedDate({
              date: currentSideFilter.dateRegister,
              format: 'YYYY-MM-DD'
            })
          : undefined
      }).filter(([, v]) => v !== undefined)
    ) as Record<string, string>
    const queryParams = new URLSearchParams(valuesFilter)
    return `${url}?${queryParams.toString()}`
  }, [
    side.value,
    trade?.id,
    currentSideFilter?.status?.id,
    currentSideFilter?.dateRegister
  ])

  const today = dayjs()
  const oneYearAgo = today.subtract(1, 'year')
  const { columns } = useCorrectionTableColumns()
  const { t } = useTranslate({ keyPrefix: 'operationDetail.tabs.corrections' })
  //prueba
  return (
    <>
      <div className="mb-6 mt-4 flex flex-wrap gap-4">
        <div className="flex-1">
          <SelectNuam
            // label="Estado"
            label={t('status')}
            options={optionsStatus}
            labelKey="description"
            valueKey="description"
            formControlProps={{ fullWidth: true }}
            size="small"
            value={currentSideFilter?.status || null}
            onChange={(value) =>
              changeSideFilter({ status: value as BusinessType | null })
            }
          />
        </div>
        <DatePicker
          // label="Fecha de registro"
          label={t('registerDate')}
          sx={{ flex: '1' }}
          minDate={oneYearAgo}
          maxDate={today}
          format="DD-MM-YYYY"
          slotProps={{
            textField: {
              size: 'small'
            }
          }}
          value={currentSideFilter?.dateRegister ?? null}
          onChange={(value) =>
            changeSideFilter({ dateRegister: value ?? null })
          }
        />
      </div>
      <NewTable
        columns={columns}
        axiosInstanceKey={'httpOperationsQuery'}
        endpoint={endpoint}
      />
    </>
  )
}

export default CorrectionDetailContent

```

## src/features/operations-management/components/CorrectionDetailSection.tsx

```tsx
import { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'remoteShell/mf-store'
import { CustomTabs } from 'remoteUtilities/components-mf-utilities'

import { USER_TYPES } from '@/shared/constants'
import useTranslate from '@/shared/hooks/useTranslate'
import { getStatusCorrection } from '@/shared/services/getStatusCorrection'
import { BusinessType } from '@/shared/types'

import { IDetailOperation } from '../types'
import CorrectionDetailContent from './CorrectionDetailContent'

interface Props {
  trade: IDetailOperation['trade']
}
const CorrectionDetailSection = ({ trade }: Props) => {
  const { participantId, userType } = useSelector(
    (state: RootState) => state.auth.infoUserNubo
  )
  const userIsNotInternal = userType !== USER_TYPES.INTERNAL
  const isNotParticipantBuy = trade?.participantBuy?.id !== participantId
  const isNotParticipantSell = trade?.participantSell?.id !== participantId
  const { t } = useTranslate({ keyPrefix: 'operationDetail.tabs.beneficiary' })
  const tabs = [
    {
      // label: 'Compra',
      label: t('tabBuy'),
      disabled: userIsNotInternal && isNotParticipantBuy
    },
    {
      // label: 'Venta',
      label: t('tabSell'),
      disabled: userIsNotInternal && isNotParticipantSell
    }
  ]
  const [currentTab, setCurrentTab] = useState<number>(0)
  const sides = {
    0: { label: t('tabBuy'), value: 1, position: 0 },
    1: { label: t('tabSell'), value: 2, position: 1 }
  }
  const currentSide = useMemo(
    () => sides[currentTab as keyof typeof sides],
    [currentTab]
  )
  const [optionsStatus, setOptionStatus] = useState<BusinessType[]>([])
  const [sideFilter, setSideFilter] = useState<{
    [side: number]: { status: BusinessType | null; dateRegister: string | null }
  }>({})

  const changeSideFilter = (
    position: number,
    field: Partial<Partial<typeof sideFilter>[number]>
  ) => {
    setSideFilter((prev) => ({
      ...prev,
      [position]: { ...prev[position], ...field }
    }))
  }
  const handleRequestCorrection = async () => {
    const response = await getStatusCorrection()
    setOptionStatus(response)
  }

  useEffect(() => {
    handleRequestCorrection()
  }, [])
  useEffect(() => {
    if (tabs[currentTab]?.disabled) {
      const enabledTab = tabs.findIndex((tab) => !tab.disabled)
      if (enabledTab !== -1) {
        setCurrentTab(enabledTab)
      }
    }
  }, [tabs])
  return (
    <div className="flex flex-col flex-1">
      <CustomTabs
        tabs={tabs}
        currentTab={currentSide.position}
        tabsContent={[
          <CorrectionDetailContent
            side={sides[0 as keyof typeof sides]}
            optionsStatus={optionsStatus}
            currentSideFilter={sideFilter[0]}
            changeSideFilter={(field) =>
              changeSideFilter(sides[0].position, field)
            }
            trade={trade}
          />,
          <CorrectionDetailContent
            side={sides[1 as keyof typeof sides]}
            optionsStatus={optionsStatus}
            currentSideFilter={sideFilter[1]}
            changeSideFilter={(field) =>
              changeSideFilter(sides[1].position, field)
            }
            trade={trade}
          />
        ]}
        handleChange={(index: number) => setCurrentTab(index)}
        alignTabs="left"
      />
    </div>
  )
}

export default CorrectionDetailSection

```

## src/features/operations-management/components/CorrectionModal.tsx

```tsx
import {
  Button,
  DefaultComponents,
  Divider,
  Typography
} from '@nuam/common-fe-lib-components'
import { lazy, Suspense, useMemo, useState } from 'react'

import {
  ModalAlert,
  ModalContent,
  Spinner,
  Toast
} from 'remoteUtilities/components-mf-utilities'

import useTranslate from '@/shared/hooks/useTranslate'
import { ToastState } from '@/shared/types/Alerts'

import { FieldsAssignment } from '../constants/fieldsAssignment'
import useAssignmentAlert from '../hooks/useAssignmentAlert'
import { useControlFractions } from '../hooks/useControlFractions'
import { useCorrectionColumns } from '../hooks/useCorrectionColumns'
import useGetOriginTrade from '../hooks/useGetOriginTrade'
import { type IDetailOperation } from '../types'
import { type SelectedFractions } from './AssignmentOperation'
import AssignmentToolbar from './AssignmentToolbar'
import CorrectionButtonAction from './CorrectionButtonAction'
import TableAssignment from './TableAssignment'

const WarningMasterAccount = lazy(() => import('./WarningMasterAccount'))

interface CorrectionModalProps {
  open: boolean
  onClose: () => void
  side?: string
  trade: IDetailOperation['trade']
  maxFractions: number
  correctionType?: string
  tradeId?: string | number | undefined
  correctionSelected?: {
    label: string
    value: string
  }
  setToast?: React.Dispatch<React.SetStateAction<ToastState | null>>
}

export const CorrectionModal: React.FC<CorrectionModalProps> = ({
  open,
  onClose,
  side,
  correctionType,
  // tradeId,
  trade,
  maxFractions,
  correctionSelected,
  setToast
}) => {
  const { t } = useTranslate({
    keyPrefix: 'operationDetail.tabs.beneficiary.modalCorrection'
  })
  const { changeAlert, modalAlert, toast } = useAssignmentAlert()

  const [thereAreSelectedFractions, setThereAreSelectedFractions] =
    useState<SelectedFractions>({
      fractions: [],
      ids: new Set()
    })

  // Configuración específica para corrección
  const origin = useGetOriginTrade({ side: side ?? '', trade })

  const sideText = useMemo(() => (side === '1' ? 'Compra' : 'Venta'), [side])

  // Reutilizar hook de control de fracciones
  const controlFractions = useControlFractions({
    trade,
    side: side || '',
    changeAlert,
    isCorrection: true
  })

  const { updateFraction, fractions, validations } = controlFractions
  const othersValidations = validations?.othersValidations

  // Columnas específicas para corrección
  const correctionColumns = useCorrectionColumns({
    trade: trade!,
    side: side || '',
    updateFraction,
    origin: origin!,
    changeAlert,
    fractions,
    custodian: null,
    cashAccountDefault: null,
    correctionType
  })

  const isSomeAccountFraction = fractions.some(
    (fraction) => fraction[FieldsAssignment.isMasterAccount]
  )

  if (!open) {
    return null
  }

  return (
    <ModalContent
      // title="Corregir asignación"
      title={t('title')}
      className="w-[92%] max-h-full p-4 xl:p-8 gap-3 xl:gap-4 xl:my-8"
      ItShouldHaveButtons={false}
      handleClose={onClose}
    >
      <DefaultComponents.Box
        sx={{ display: 'flex', flexDirection: 'column', maxHeight: '78dvh' }}
      >
        <DefaultComponents.Box>
          <Typography
            variant="h2"
            sx={{ fontSize: '14px', marginBottom: '8px' }}
            fontWeight="500"
          >
            {/* Folio {trade?.matchId} - {sideText} */}
            {t('subtitle', { matchId: trade?.matchId, side: sideText })}
          </Typography>
        </DefaultComponents.Box>
        {isSomeAccountFraction && (
          <Suspense fallback={<Spinner />}>
            <WarningMasterAccount />
          </Suspense>
        )}
        <TableAssignment
          Toolbar={
            <AssignmentToolbar
              thereAreSelectedFractions={thereAreSelectedFractions}
              disabledFractions={othersValidations?.quantityIsMinorLimit}
              changeAlert={changeAlert}
              maxFractions={maxFractions}
              disabledEditAssignment={correctionType === 'LOCAL'}
              isCorrection={true}
              {...controlFractions}
            />
          }
          columns={correctionColumns}
          fractions={fractions}
          setThereAreSelectedFractions={setThereAreSelectedFractions}
        />

        <Divider />
        <DefaultComponents.Box
          mt={2}
          sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}
        >
          <Button
            variant="text"
            color="primary"
            sx={{ mr: 2 }}
            onClick={onClose}
          >
            {/* Volver */}
            {t('back')}
          </Button>
          <CorrectionButtonAction
            trade={trade!}
            side={side || ''}
            fractions={fractions}
            disabled={!othersValidations?.availableToSave}
            handleClose={onClose}
            changeAlert={changeAlert}
            custodian={null}
            correctionSelected={correctionSelected}
            setToast={setToast}
            buttonText={t('buttonText')}
          />
        </DefaultComponents.Box>

        {modalAlert?.open && <ModalAlert {...modalAlert} />}
        {toast?.open && <Toast {...toast} />}
      </DefaultComponents.Box>
    </ModalContent>
  )
}

```

## src/features/operations-management/components/CorrectionToolbar.tsx

```tsx
import { Button, DefaultComponents } from '@nuam/common-fe-lib-components'

import useTranslate from '@/shared/hooks/useTranslate'
import { type Participant } from '@/shared/types/participant'

import { type Fraction } from '../hooks/useStateFraction'
import { type SelectedFractions } from './AssignmentOperation'

interface CorrectionToolbarProps {
  thereAreSelectedFractions: SelectedFractions
  currentCustodian: Participant | null
  disabledFractions?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  changeAlert: (alert: any) => void
  fractions: Fraction[]
}

/**
 * Toolbar personalizado para el modal de corrección.
 * Proporciona acciones específicas para edición de correcciones.
 */
const CorrectionToolbar: React.FC<CorrectionToolbarProps> = ({
  thereAreSelectedFractions,
  currentCustodian,
  changeAlert,
  fractions
}) => {
  const { t } = useTranslate({
    keyPrefix: 'operationDetail.tabs.beneficiary.modalCorrection'
  })
  const handleBulkEdit = () => {
    if (thereAreSelectedFractions.ids.size === 0) {
      changeAlert({
        variant: 'modal',
        info: {
          open: true,
          variant: 'warning',
          // title: 'Seleccione al menos una fracción',
          title: t('selectAtLeastOneFraction'),
          // textSuccess: 'Aceptar'
          textSuccess: t('textSuccess')
        }
      })
      return
    }

    // TODO: Implementar lógica de edición masiva
    console.log('Edición masiva en corrección:', thereAreSelectedFractions)
  }

  const handleValidate = () => {
    // TODO: Implementar validación de fracciones
    console.log('Validando fracciones:', fractions)
  }

  return (
    <DefaultComponents.Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
      <Button
        variant="outlined"
        onClick={handleBulkEdit}
        disabled={thereAreSelectedFractions.ids.size === 0 || !currentCustodian}
      >
        {/* Editar Seleccionadas */}
        {t('editSelected')}
      </Button>

      <Button
        variant="outlined"
        onClick={handleValidate}
        disabled={fractions.length === 0}
      >
        {/* Validar Fracciones */}
        {t('validateFractions')}
      </Button>
    </DefaultComponents.Box>
  )
}

export default CorrectionToolbar

```

## src/features/operations-management/components/CustodianSelect.tsx

```tsx
import { SelectNuam } from 'remoteUtilities/components-mf-utilities'

interface ICustodianOption {
  id: number
  name: string
}

interface ICustodianSelectProps {
  options: ICustodianOption[]
  value?: ICustodianOption | null
  onChange?: (custodian: ICustodianOption | null) => void
  disabled?: boolean
  label?: string
}

export const CustodianSelect = ({
  options,
  value,
  onChange,
  disabled = false
}: ICustodianSelectProps) => {
  const mappedOptions = options.map((opt) => ({
    value: opt.id,
    label: opt.name
  }))

  // Pasar el objeto completo para que getSelectLabel muestre el label en vez del id
  const selectedOption = value
    ? (mappedOptions.find((opt) => opt.value === value.id) ?? '')
    : ''

  return (
    <SelectNuam
      options={mappedOptions}
      placeholder="Custodio"
      formControlProps={{
        fullWidth: true
      }}
      sx={{
        minWidth: '200px',
        minHeight: '30px',
        height: '30px',
        '& .MuiInputBase-root, & .MuiOutlinedInput-root': {
          minHeight: '30px',
          height: '30px',
          boxSizing: 'border-box',
          alignItems: 'center'
        }
      }}
      value={selectedOption}
      onChange={(selected) => {
        if (!selected) {
          onChange?.(null)
          return
        }
        const s = selected as { value: number; label: string }
        const fullOption = options.find((opt) => opt.id === s.value) ?? null
        onChange?.(fullOption)
      }}
      disabled={disabled}
      size="small"
    />
  )
}

```

## src/features/operations-management/components/CustomToolbarOperation.tsx

```tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@nuam/common-fe-lib-components'
import { Suspense, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from 'remoteShell/mf-store'
import { Dropdown, Spinner } from 'remoteUtilities/components-mf-utilities'

import { OPERATION_ACTIONS } from '@/shared/constants/actionCodes'
import useTranslate from '@/shared/hooks/useTranslate'
import { ModalContentState } from '@/shared/types/Alerts'

import { ACTIONS } from '../constants/operations'
import useFolioTransfer from '../hooks/useFolioTransfer'
import useFolioTransferValidation from '../hooks/useFolioTransferValidation'
import { DownloadAction } from '../types'
import { DispatchState } from '../types/dispatchState'
import { ItemModel } from '../types/item'
import { getHeaderActions } from '../utils/opertationsHeaderActions'
import AssignmentClosureModal from './AssignmentClosureModal'

const CustomToolbarOperation = ({
  thereAreSelected,
  setModalContent,
  currentItems,
  onConfirmDownload,
  permissions,
  setModalContentTransfer,
  data,
  participantId,
  onFolioTransferSuccess,
  onActionStart,
  onActionEnd
}: {
  thereAreSelected: any[]
  setModalContent: (value: any) => void
  currentItems: any[]
  onConfirmDownload: (
    action: DownloadAction,
    tradeIdList: string[],
    tradeDataList: any[],
    thereAreSelected: number[],
    currentItems: ItemModel[]
  ) => Promise<void>
  permissions: {
    canShowEyeIcon: any
    canShowDetail: any
    canDownloadMassive: any
    canDownloadIndividual: any
    canTransfer: any
    canDoAssignmentClosure: boolean
  }
  setModalContentTransfer: DispatchState<ModalContentState> | undefined
  data: ItemModel[]
  participantId: number
  onFolioTransferSuccess?: (
    message: string,
    variant: 'success' | 'error'
  ) => void
  onActionStart?: () => void
  onActionEnd?: () => void
}) => {
  const { canTransfer } = useFolioTransferValidation({
    selectedIds: thereAreSelected,
    data
  })

  const countryId = useSelector(
    (state: RootState) => state.auth.infoUserNubo.participantCountry
  )

  const lastModifyDate = useSelector(
    (state: any) => state?.auth?.infoUserNubo?.lastModifyDate // eslint-disable-line @typescript-eslint/no-explicit-any
  )

  const isClosingTimeSecondary = useMemo(() => {
    if (!lastModifyDate) return false
    const today = lastModifyDate.split('T')[0]
    return currentItems.some((item) => {
      const dateToCompare =
        item.tradeType === 'REPO' ? item.returnClearingDate : item.clearingDate
      if (!dateToCompare) return false
      const day = String(dateToCompare).split('T')[0]
      return day === today
    })
  }, [currentItems, lastModifyDate])

  const userAccepted = useSelector(
    (state: RootState) => state.scheduleModal.userAccepted
  )
  const dispatch = useDispatch()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [pendingAction, setPendingAction] = useState<
    'assignment-closure' | 'folio-transfer' | null
  >(null)

  const actions = async (action: DownloadAction) => {
    if (
      action.type === ACTIONS.DOWNLOAD_PDF ||
      action.type === ACTIONS.DOWNLOAD_CSV
    ) {
      const tradeIdList = currentItems.map((item) => item.id.toString())
      const tradeDataList = [...currentItems]

      setModalContent({
        title: 'Confirmación de descarga',
        message: `¿Está seguro de generar ${thereAreSelected.length} comprobante/s con esta información?`,
        variant: 'warning',
        textSuccess: 'Sí',
        textCancel: 'No',
        handleCancel: () => setModalContent(null),
        onClick: async () =>
          onConfirmDownload(
            action,
            tradeIdList,
            tradeDataList,
            thereAreSelected,
            currentItems
          )
      })
    }
  }

  const { handleFolioTransfer } = useFolioTransfer({
    setModalContent: setModalContentTransfer,
    onTransferSuccess: onFolioTransferSuccess,
    actionCode: OPERATION_ACTIONS.CUSTODIAN_TRANSFER,
    onActionEnd,
    isClosingTimeSecondary
  })

  const handleAssignmentClosureClick = () => {
    setPendingAction('assignment-closure')
    setIsModalOpen(true)
  }

  const resetUserAccepted = () => {
    if (userAccepted) {
      dispatch({ type: 'scheduleModal/resetUserAccepted' })
    }
  }

  const { t } = useTranslate({
    keyPrefix: 'operationManagement.toolbar'
  })

  const { buttonActions, dropdownActions } = getHeaderActions({
    downloadIndividual: {
      isVisible: permissions.canDownloadIndividual,
      disabled: thereAreSelected.length !== 1,
      onClick: () => {
        actions({ type: ACTIONS.DOWNLOAD_PDF })
      }
    },
    // downloadMassive: {
    //   isVisible: permissions.canDownloadMassive,
    //   disabled: thereAreSelected.length <= 1,
    //   onClick: () => {
    //     actions({ type: ACTIONS.DOWNLOAD_CSV })
    //   }
    // },

    folioTransfer: {
      isVisible:
        permissions.canTransfer && (countryId === 37 || countryId === 135),
      disabled: !canTransfer,
      onClick: () => {
        onActionStart?.()
        handleFolioTransfer(thereAreSelected, participantId)
      }
    },
    assignmentClosure: {
      isVisible: permissions.canDoAssignmentClosure,
      disabled: thereAreSelected.length === 0,
      onClick: handleAssignmentClosureClick
    },
    t
  })

  const showDropdown = dropdownActions.length > 0

  return (
    <>
      <div className="flex items-center gap-2">
        {buttonActions.map((action, index) => (
          <Button
            size="small"
            variant="text"
            disabled={action.disabled}
            onClick={action?.onClick}
            key={index + action.type}
          >
            {action.icon}
            {action.label}
          </Button>
        ))}

        {showDropdown && (
          <Dropdown title="Opciones custodio" options={dropdownActions} />
        )}
      </div>
      {((userAccepted && pendingAction === 'assignment-closure') ||
        isModalOpen) && (
        <Suspense fallback={<Spinner />}>
          <AssignmentClosureModal
            isOpen={true}
            onClose={() => {
              setIsModalOpen(false)
              setPendingAction(null)
            }}
            selectedTradeIds={thereAreSelected}
            userConfirmed={
              userAccepted && pendingAction === 'assignment-closure'
            }
            resetUserAccepted={() => {
              resetUserAccepted()
              setPendingAction(null)
            }}
            isClosingTimeSecondary={isClosingTimeSecondary}
          />
        </Suspense>
      )}
    </>
  )
}

export default CustomToolbarOperation

```

## src/features/operations-management/components/FicAdministratorSelect.tsx

```tsx
import { DefaultComponents } from '@nuam/common-fe-lib-components'
import { useMemo } from 'react'

import { IFicAdministrator } from '../services/folioTransferService'

interface IFicAdministratorOption {
  id: number
  label: string
  code: string
  name: string
}

interface IFicAdministratorSelectProps {
  options: IFicAdministratorOption[]
  value?: IFicAdministrator | null
  onChange?: (administrator: IFicAdministrator | null) => void
  disabled?: boolean
  label?: string
}

export const FicAdministratorSelect = ({
  options,
  value,
  onChange,
  disabled = false,
  label = 'Administrador FIC'
}: IFicAdministratorSelectProps) => {
  const selectedOption = useMemo(() => {
    if (!value) return null
    return options.find((opt) => opt.id === value.id) ?? null
  }, [value, options])

  return (
    <DefaultComponents.Autocomplete
      options={options}
      value={selectedOption}
      onChange={(_, newValue: IFicAdministratorOption | null) => {
        if (!newValue) {
          onChange?.(null)
          return
        }
        onChange?.({
          id: newValue.id,
          code: newValue.code,
          name: newValue.name
        })
      }}
      getOptionLabel={(option: IFicAdministratorOption) => option.label}
      isOptionEqualToValue={(
        a: IFicAdministratorOption,
        b: IFicAdministratorOption
      ) => a.id === b.id}
      disabled={disabled}
      size="small"
      renderInput={(params: any) => (
        <DefaultComponents.TextField {...params} label={label} size="small" />
      )}
      sx={{
        minWidth: '200px',
        '& .MuiInputBase-root': {
          minHeight: '30px',
          height: '30px'
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
          {
            borderColor: '#FF411C'
          }
      }}
      renderOption={(
        props: React.HTMLAttributes<HTMLLIElement>,
        option: IFicAdministratorOption
      ) => (
        <li
          {...props}
          key={option.id}
          style={{ display: 'flex', alignItems: 'center', gap: 8 }}
        >
          {option.label}
        </li>
      )}
    />
  )
}

export type { IFicAdministratorOption }

```

## src/features/operations-management/components/FiltersComponent.tsx

```tsx
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'remoteShell/mf-store'
import { Button, FilterSelect } from 'remoteUtilities/components-mf-utilities'

import { getSelects } from '@/features/settlement-file/services/trades'

import STORAGE_KEYS from '@/shared/constants/storageKeys'
import isDevMode from '@/shared/utils/isDevMode'
import { getFromLocalStorage } from '@/shared/utils/localStorage'

interface Props {
  setUrlFilter: (value: string) => void
  sidePanel: (value: boolean) => void
  setClearFilters: (value: boolean) => void
}

export const FiltersComponent: React.FC<Props> = ({
  setUrlFilter,
  sidePanel,
  setClearFilters
}) => {
  const [selectedFilters, setSelectedFilters] = useState<{
    [key: string]: string
  }>({})
  const [selectCountry, setSelectCountry] = useState<
    { label: string; value: string }[]
  >([])
  const [selectType, setSelectType] = useState<
    { label: string; value: string }[]
  >([])
  const [selectStatus, setSelectStatus] = useState<
    { label: string; value: string }[]
  >([])
  const client_user = getFromLocalStorage(STORAGE_KEYS.USERNAME)
  const userType = useSelector(
    (state: RootState) => state.auth.infoUserNubo.userType
  )

  useEffect(() => {
    const getSelectOptions = async () => {
      try {
        const responseCountry = await getSelects(client_user, 'country')
        setSelectCountry(responseCountry)
        const responseType = await getSelects(client_user, 'type')
        setSelectType(responseType)
        const responseStatus = await getSelects(client_user, 'status')
        setSelectStatus(responseStatus)
      } catch (error) {
        if (isDevMode()) {
          console.error('Error fetching selects:', error)
        }
      }
    }

    getSelectOptions()
  }, [])

  useEffect(() => {
    const currentUrl = new URL(window.location.href)
    const params = new URLSearchParams(currentUrl.search)
    if (params.size > 0) {
      const filterMapping: { [key: string]: string } = {
        depositoryId: 'Deposito',
        countryId: 'Pais',
        typeId: 'Tipo',
        statusId: 'Estado'
      }

      const savedFilters: { [key: string]: string } = {}
      params.forEach((value, key) => {
        savedFilters[filterMapping[key]] = value
      })
      setSelectedFilters(savedFilters)
    }
  }, [])

  const handleSelectChanged = (label: string, value: string) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [label]: value
    }))
  }

  const handleClearFilters = () => {
    const currentUrl = new URL(window.location.href)
    currentUrl.search = ''
    window.history.pushState({}, '', currentUrl.toString())
    setSelectedFilters({})
  }

  const handleCreateUrl = () => {
    const filterMapping: { [key: string]: string } = {
      Deposito: 'depositoryId',
      Pais: 'countryId',
      Tipo: 'typeId',
      Estado: 'statusId'
    }

    const queryString = Object.entries(selectedFilters)
      .map(([key, value]) => `${filterMapping[key] || key}=${value}`)
      .join('')
    const urlPrefix = userType === 'INTERNAL' ? '?' : '&'
    setUrlFilter(`${urlPrefix}${queryString}`)
    const currentUrl = new URL(window.location.href)
    queryString.split('&').forEach((param) => {
      const [key, value] = param.split('=')
      if (key && value) {
        currentUrl.searchParams.set(key, value)
      }
    })
    window.history.pushState({}, '', currentUrl.toString())
    setClearFilters(true)
    sidePanel(false)
  }

  return (
    <>
      <FilterSelect
        label="Pais"
        options={selectCountry}
        onChange={handleSelectChanged}
        value={selectedFilters['Pais'] || ''}
      />
      <FilterSelect
        label="Tipo"
        options={selectType}
        onChange={handleSelectChanged}
        value={selectedFilters['Tipo'] || ''}
      />
      <FilterSelect
        label="Estado"
        options={selectStatus}
        onChange={handleSelectChanged}
        value={selectedFilters['Estado'] || ''}
      />
      <div className="w-full flex gap-4 justify-end mt-6">
        <Button
          name="Limpiar filtros"
          type="button"
          variant="secondary"
          onClick={handleClearFilters}
          disabled={Object.keys(selectedFilters).length === 0}
        />
        <Button name="Filtrar" type="button" onClick={handleCreateUrl} />
      </div>
    </>
  )
}

```

## src/features/operations-management/components/FolioTransfer.tsx

```tsx
import {
  Button,
  DefaultComponents,
  Divider,
  Typography
} from '@nuam/common-fe-lib-components'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'remoteShell/mf-store'
import {
  NewTable,
  Spinner,
  Toast,
  ModalAlert
} from 'remoteUtilities/components-mf-utilities'

import { RejectionAlert } from '@/shared/components/RejectionAlert'
import useGenerateLogs from '@/shared/hooks/useGenerateLogs'
import { useRejectionAlert } from '@/shared/hooks/useRejectionAlert'
import { ModalAlertState } from '@/shared/types/Alerts'

import { IFicAdministratorOption } from '../components/FicAdministratorSelect'
import { useFolioTransferData } from '../hooks/useFolioTransferData'
import {
  IFicAdministrator,
  transferFolios,
  IFolioTransferPayload,
  getCustodianOptionsForTransfer,
  getFicAdministrators
} from '../services/folioTransferService'
import { getFolioTransferColumns } from '../utils/folioTransferColumns'

interface Props {
  handleClose: () => void
  tradeIds: number[]
  participantId: number
  onTransferSuccess?: (message: string, variant: 'success' | 'error') => void
  isClosingTimeSecondary?: boolean
}

// Columnas para la tabla de rechazo
const rejectionColumns = [
  {
    field: 'rejectionReason',
    headerName: 'Causal',
    width: 150
  },
  {
    field: 'matchDate',
    headerName: 'Fecha de registro',
    width: 150
  },
  {
    field: 'matchId',
    headerName: 'N° de Folio',
    width: 120
  },
  {
    field: 'clearingDate',
    headerName: 'Fecha de cumplimiento',
    width: 180
  },
  {
    field: 'side.description',
    headerName: 'Punta',
    width: 100,
    renderCell: (params: any) => params.row?.side?.description
  },
  {
    field: 'fraction',
    headerName: 'ID Fracción',
    width: 120,
    renderCell: (params: any) =>
      params.row.fraction === 0 ? 1 : params?.row?.fraction
  },
  {
    field: 'participant.code',
    headerName: 'Participante',
    width: 120,
    renderCell: (params: any) => params.row?.participant?.code
  }
]

const FolioTransfer = ({
  handleClose,
  tradeIds,
  participantId,
  onTransferSuccess,
  isClosingTimeSecondary
}: Props) => {
  const [modalAlertState, setModalAlertState] =
    useState<ModalAlertState | null>(null)
  const [settlementData, setSettlementData] = useState<any[]>([])
  const [custodians, setCustodians] = useState<
    Record<string, { id: number; name: string } | null>
  >({})
  const [custodianOptions, setCustodianOptions] = useState<
    Record<number, any[]>
  >({})
  const [selectedRows, setSelectedRows] = useState<any>([])
  const [isTransferring, setIsTransferring] = useState(false)
  const [ficAdministrators, setFicAdministrators] = useState<
    Record<string, IFicAdministrator | null>
  >({})
  const [currentItems, setCurrentItems] = useState<any[]>([])

  const [ficAdministratorOptions, setFicAdministratorOptions] = useState<
    IFicAdministratorOption[]
  >([])
  // Estado para refrescar la tabla
  const [refreshTable, setRefreshTable] = useState(false)

  // Estados para manejar el toast de errores (solo errores locales)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  // Estado para el modal de confirmación
  const [showConfirmModal, setShowConfirmModal] = useState(false)

  // Hook personalizado para manejar alertas de rechazo
  const { alertState, showRejectionAlert, hideRejectionAlert } =
    useRejectionAlert()

  const {
    data: _,
    isLoading,
    error
  } = useFolioTransferData({
    tradeIds,
    participantId,
    enabled: true
  })

  const countryId = useSelector(
    (state: RootState) => state.auth.infoUserNubo.participantCountry
  )

  const { generateLogs } = useGenerateLogs()

  const handleFicAdministratorChange = useCallback(
    (rowId: string, administrator: IFicAdministrator | null) => {
      setFicAdministrators((prev) => ({
        ...prev,
        [rowId]: administrator ? { ...administrator } : null
      }))
    },
    []
  )

  const handleCustodianChange = useCallback(
    (rowId: string, custodian: { id: number; name: string } | null) => {
      setCustodians((prev) => ({
        ...prev,
        [rowId]: custodian ? { ...custodian } : null
      }))
    },
    []
  )

  const columns = useMemo(
    () =>
      getFolioTransferColumns({
        countryId,
        onFicAdministratorChange: handleFicAdministratorChange,
        ficAdministrators,
        ficAdministratorOptions,
        custodianOptions,
        custodians,
        onCustodianChange: handleCustodianChange
      }),
    [
      countryId,
      ficAdministrators,
      ficAdministratorOptions,
      custodianOptions,
      custodians,
      handleFicAdministratorChange,
      handleCustodianChange
    ]
  )

  const handleTransferClick = () => {
    if (selectedRows?.length === 0) {
      setToastMessage('No se han seleccionado filas para transferir')
      setShowToast(true)
      return
    }

    const missingCustodian = currentItems.some((row) => {
      const rowId =
        row.uniqueRowId || `${row.tradeId}-${row.fraction}-${row.side.id}`
      return !(custodians[rowId] ?? row.custodian)
    })

    if (missingCustodian) {
      setToastMessage(
        'Todos los folios seleccionados deben tener un custodio asignado'
      )
      setShowToast(true)
      return
    }

    // Mostrar modal de confirmación
    setShowConfirmModal(true)
  }

  const handleConfirmTransfer = async () => {
    // Cerrar modal de confirmación
    setShowConfirmModal(false)

    try {
      setIsTransferring(true)

      // Construir el payload desde las filas seleccionadas
      const payload: IFolioTransferPayload[] = currentItems.map((row) => {
        const rowId =
          row.uniqueRowId || `${row.tradeId}-${row.fraction}-${row.side.id}`
        const rowCustodian = custodians[rowId] ?? row.custodian
        const rowFicAdmin = ficAdministrators[rowId] ?? row.ficAdministrator
        return {
          tradeId: row.tradeId,
          fraction: row.fraction,
          sideId: row.side.id,
          custodianId: rowCustodian?.id,
          ficAdministratorId: rowFicAdmin?.id || null
        }
      })

      const transferResponse = await transferFolios(
        payload,
        isClosingTimeSecondary
      )
      generateLogs({
        actionType: 'Traslado custodios',
        actionDestination: 'Envío a custodio exitoso',
        statusID: '200'
      })

      // Refrescar la tabla después de la transferencia
      setRefreshTable((prev) => !prev)

      // Filtrar solo los items con isValid === false
      const rejectedItems =
        transferResponse?.filter((item: any) => item.isValid === false) || []

      if (rejectedItems.length > 0) {
        // Mostrar alerta de rechazo solo con los items rechazados
        showRejectionAlert(rejectedItems)
      } else {
        // Cerrar modal primero
        handleClose()
        // Luego notificar éxito al padre para mostrar el Toast
        setTimeout(() => {
          onTransferSuccess?.(
            'Las operaciones/fracciones han sido enviadas al custodio, revise el seguimiento',
            'success'
          )
        }, 100)
      }
    } catch (error: any) {
      // Refrescar la tabla incluso en caso de error
      setRefreshTable((prev) => !prev)
      setTimeout(() => {
        onTransferSuccess?.(
          'error al enviar las operaciones/fracciones al custodio, intente nuevamente',
          'error'
        )
      }, 100)
      generateLogs({
        actionType: 'Traslado custodios',
        actionDestination: 'Error en el envío a custodio',
        statusID: '500'
      })
    } finally {
      setIsTransferring(false)
    }
  }

  const endpoint = `/settlement/by-list-tradeid-participant-user?tradeId=${tradeIds.join(',')}`

  const setDataRemote = (_page: number, dataTable: []) => {
    const dataWithUniqueId = dataTable.map((row: any) => ({
      ...row,
      uniqueRowId: `${row.tradeId}-${row.fraction}-${row.side.id}`
    }))
    setSettlementData(dataWithUniqueId)
    if (dataTable.length === 0) {
      const closeModal = () => {
        setModalAlertState(null)
        handleClose()
      }
      setModalAlertState({
        open: true,
        title:
          'Las operaciones seleccionadas no tienen un estado válido para ser trasladadas.',
        message: '',
        textSuccess: 'Cerrar',
        variant: 'warning',
        onClick: closeModal,
        onIconClose: () => {
          closeModal()
        },
        showIconClose: true
      })
    }
  }

  const filterSelectedItems = (items: any[] = []) => {
    setCurrentItems(items)
    setSelectedRows(items)
  }

  // Derivar tradeIds únicos para estabilizar el fetch de opciones de custodio
  const uniqueTradeIdsKey = useMemo(() => {
    const ids = [
      ...new Set(settlementData.map((row) => row.tradeId as number))
    ].sort((a, b) => a - b)
    return ids.join(',')
  }, [settlementData])

  useEffect(() => {
    if (!uniqueTradeIdsKey) return
    const fetchCustodianOptions = async () => {
      // const uniqueTradeIds = uniqueTradeIdsKey.split(',').map(Number)
      const entries = await Promise.all(
        settlementData.map(async ({ tradeId, trade }) => {
          try {
            const list = await getCustodianOptionsForTransfer({
              countryId: trade?.country?.id
            }) // Replace with actual countryId if needed
            return [tradeId, list] as [number, any[]]
          } catch (err) {
            console.error(
              `Error fetching custodian options for tradeId ${tradeId}:`,
              err
            )
            return [tradeId, []] as [number, any[]]
          }
        })
      )
      setCustodianOptions(Object.fromEntries(entries))
    }
    fetchCustodianOptions()
  }, [settlementData, countryId])

  // Fetch FIC administrators una sola vez (solo para Colombia)
  useEffect(() => {
    if (countryId !== 37) return
    const fetchFicOptions = async () => {
      try {
        const { data } = await getFicAdministrators('', 0, 500)
        setFicAdministratorOptions(
          data.map((a) => ({
            id: a.id,
            label: `${a.code} - ${a.name}`,
            code: a.code,
            name: a.name
          }))
        )
      } catch (err) {
        console.error('Error fetching FIC administrator options:', err)
      }
    }
    fetchFicOptions()
  }, [countryId])

  return (
    <>
      <DefaultComponents.Box>
        <DefaultComponents.Box mt={2} mb={3}>
          <Typography fontSize={'14px'} fontWeight="500">
            Selecciona las fracciones que vas a trasladar a un custodio.
          </Typography>
        </DefaultComponents.Box>

        {isLoading && <Spinner />}

        {error && <Typography sx={{ my: 2 }}>{error}</Typography>}

        {!isLoading && !error && (
          <NewTable
            columns={columns}
            endpoint={endpoint}
            axiosInstanceKey="httpOperationsCustodyTransfer"
            disableRowSelectionOnClick
            showDownload={false}
            setDataRemote={setDataRemote}
            isSettlement
            columnVisibilityModel={{
              uniqueRowId: false
            }}
            handleSelectionCheckbox={(data: any) => {
              filterSelectedItems(data)
            }}

            refresh={refreshTable}
            paramsAdditional={{ execute: false }}
          />
        )}

        <Divider />
        <DefaultComponents.Box
          mt={2}
          sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}
        >
          <Button
            variant="text"
            color="primary"
            sx={{ mr: 2 }}
            onClick={handleClose}
          >
            Volver
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleTransferClick}
            disabled={isLoading || selectedRows.length === 0 || isTransferring}
          >
            {isTransferring ? 'Enviando...' : 'Enviar a Custodio'}
          </Button>
        </DefaultComponents.Box>

        {/* Modal de confirmación */}
        {showConfirmModal && (
          <ModalAlert
            title="¿Deseas enviar las operaciones seleccionadas al custodio?"
            message=""
            variant="warning"
            textSuccess="Aceptar"
            textCancel="Cancelar"
            onClick={handleConfirmTransfer}
            handleCancel={() => setShowConfirmModal(false)}
            disabled={isTransferring}
            orientation="horizontal"
          />
        )}
        {modalAlertState?.open && <ModalAlert {...modalAlertState} />}

        {/* Alerta de rechazo reutilizable */}
        <RejectionAlert
          open={alertState.isOpen}
          onClose={hideRejectionAlert}
          rejectedItems={alertState.rejectedItems}
          message={alertState.message}
          columns={rejectionColumns}
          title="Enviar Trasladar al custodio"
        />
      </DefaultComponents.Box>

      {/* Toast para errores locales */}
      {showToast && (
        <Toast
          open={showToast}
          text={toastMessage}
          variant="error"
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  )
}

export default FolioTransfer

```

## src/features/operations-management/components/InputAssignmentTable.tsx

```tsx
import { TextField } from '@nuam/common-fe-lib-components'
import { useEffect, useRef, useState } from 'react'

import keysEventDispatch from '../constants/keysEventDispatch'
import { ValueError } from '../hooks/useStateFraction'

const InputAssignmentTable = ({
  action,
  currentValue,
  validateNewValue,
  disabled = false,
  initialValue = '',
  transformValue,
  isNumber,
  error,
  disabledEvents,
  executeActionInitial = false,
  updateValue
}: {
  action?: (value: string) => Promise<string | void>
  currentValue?: string
  initialValue?: string
  validateNewValue?: (value: string) => boolean
  disabled?: boolean
  transformValue?: (value: string) => string
  isNumber?: boolean
  error?: ValueError['error']
  disabledEvents?: typeof keysEventDispatch
  executeActionInitial?: boolean
  updateValue?: (value?: string) => void
}) => {
  const valueTransformed = transformValue?.(currentValue ?? initialValue)
  const defaultValue = valueTransformed ?? currentValue ?? initialValue
  const focused = useRef(false)
  const [value, setValue] = useState(defaultValue)
  const changeEventValue = async (newValue?: string) => {
    const currentValue = newValue ?? value
    const result = await action?.(currentValue)
    const resultValue =
      transformValue?.(result ?? defaultValue) ?? result ?? defaultValue
    setValue(resultValue)
  }
  const shouldExecuteActionInitial = executeActionInitial && !focused.current
  useEffect(() => {
    if (shouldExecuteActionInitial) {
      action?.(defaultValue)
    }
  }, [shouldExecuteActionInitial])
  const isDifferentValue =
    currentValue &&
    value &&
    (transformValue ? valueTransformed !== value : currentValue !== value)
  const executeChangeValue = isDifferentValue && !focused.current
  useEffect(() => {
    if (executeChangeValue) {
      setValue(defaultValue)
    }
  }, [defaultValue, executeChangeValue])
  return (
    <TextField
      value={value}
      size="small"
      disabled={disabled}
      onChange={(e) => {
        const newValue = transformValue ? transformValue(e) : e
        const isValid = validateNewValue ? validateNewValue?.(newValue) : true
        if (e.length > 0) {
          if (isValid && !disabled) {
            setValue(newValue)
            updateValue?.(newValue)
          }
        } else {
          setValue('')
          updateValue?.('')
        }
      }}
      onClick={(e) => e.stopPropagation()}
      onFocus={() => (focused.current = true)}
      onBlur={async () => {
        await changeEventValue()
        focused.current = false
      }}
      onKeyDown={async ({ code }) => {
        const keyRows = ['ArrowUp', 'ArrowDown']
        if (keysEventDispatch.includes(code)) {
          await changeEventValue()
        } else if (isNumber && keyRows.includes(code)) {
          let newValue = Number(value) || 0
          if (code === 'ArrowUp') {
            newValue += 1
          } else if (code === 'ArrowDown') {
            newValue -= 1
          }
          setValue(newValue.toString())
          updateValue?.(newValue.toString())
        }
      }}
      onKeyDownCapture={(e) => {
        const keyRows = ['ArrowUp', 'ArrowDown']
        if (
          !keysEventDispatch.includes(e.code) ||
          (disabledEvents ? disabledEvents?.includes(e.code) : false) ||
          (isNumber && !keyRows.includes(e.code))
        ) {
          e.stopPropagation()
        }
      }}
      error={!!error?.error}
      helperText={error?.message}
      sx={{ paddingTop: error?.message ? '24px' : '' }}
    />
  )
}

export default InputAssignmentTable

```

## src/features/operations-management/components/InputEdit.tsx

```tsx
import { TextField } from '@nuam/common-fe-lib-components'
import { useState } from 'react'

import {
  calculationComissionAdd,
  calculationComissionEdit,
  rangeQuantity,
  validateAccount
} from '@/features/operations-management/services/fullViewBeneficiaries'
import { RowData } from '@/features/operations-management/types'

import STORAGE_KEYS from '@/shared/constants/storageKeys'
import { ErrorResponse } from '@/shared/types'
import isDevMode from '@/shared/utils/isDevMode'
import { getFromLocalStorage } from '@/shared/utils/localStorage'

type Props = {
  placeholder?: string
  accountType?: number
  participantId?: number
  width?: string
  account?: boolean
  reference?: boolean
  quantity?: boolean
  trade?: number
  fraction?: number
  side?: string | number | null
  row?: any
  isRepo: boolean | null
  rows?: RowData[]
  comission?: boolean
  value?: string | number // Añadir esta prop para pasar el valor de la cuenta
  onAccountDataFetched?: (data: any) => void | undefined
  setViewToast?: (value: boolean) => void
  setTextToast?: (arg: string) => void
  setModalContent?: (
    arg: {
      title: string
      message: string
      variant: 'success' | 'error'
      onClick: () => void
    } | null
  ) => void
  setVariantToast?: (arg: 'success' | 'error') => void
  onChangeQuantity?: (value: number, data: any) => void
  onReferenceChange?: (value: string) => void
  onComissionDataFetched?: (data: any) => void
  price?: number
  country?: any
  setInputEmpty?: (value: boolean) => void
  setThereIsChange?: (value: boolean) => void
}

export const InputEdit = ({
  placeholder,
  onComissionDataFetched,
  width = '84px',
  account = false,
  isRepo,
  price = 0,
  reference = false,
  comission = false,
  quantity = false,
  side,
  rows,
  row,
  onAccountDataFetched,
  setViewToast,
  setTextToast,
  setVariantToast,
  setModalContent,
  value,
  onChangeQuantity,
  onReferenceChange,
  country,
  setInputEmpty,
  setThereIsChange
}: Props) => {
  const [inputValue, setInputValue] = useState<string | number>(
    comission ? value || 0 : value || ''
  )
  const queryParams = new URLSearchParams(location.search)
  const tradeIdResponse = queryParams.get('tradeId')
  const [hasError, setHasError] = useState<boolean>(false)

  const handleInputChange = (value: string | number) => {
    const stringValue = String(value)

    if (comission) {
      // Permitir números decimales correctamente, incluyendo casos como "5.", "0.5", "5.8", "100"
      const regex = /^(100|[0-9]{1,2})(\.\d{0,2})?$/
      if (
        stringValue === '' ||
        stringValue === '.' ||
        regex.test(stringValue)
      ) {
        setInputValue(stringValue)
      }
    } else if (reference) {
      // Validar entrada de referencia (varchar)
      setInputValue(stringValue)
      if (stringValue.length > 0) {
        setThereIsChange?.(true)
      }
    } else {
      // Validación predeterminada para otros inputs numéricos
      const regex = /^[0-9]*[.,]?[0-9]*$/
      if (stringValue === '' || regex.test(stringValue)) {
        setInputValue(stringValue)
      }
    }
  }

  const handleBlur = async () => {
    // Validar el valor final al perder el foco
    if (comission) {
      if (inputValue === '') {
        setInputValue('0') // Establecer 0 si el campo está vacío
      } else {
        const parsedValue = parseFloat(inputValue.toString())
        if (isNaN(parsedValue) || parsedValue < 0 || parsedValue > 100) {
          setInputValue('') // Restablecer si el valor no es válido
        } else {
          setInputValue(parsedValue.toFixed(2)) // Formatear a 2 decimales
        }
      }
    }

    if (account && inputValue === '') {
      setInputValue('')
      setInputEmpty && setInputEmpty(true)
      setHasError(true)
    }
    if (account && inputValue !== '') {
      setInputEmpty && setInputEmpty(false)
      setHasError(false)
    }

    if ((account && inputValue === '') || (reference && inputValue === '')) {
      setInputValue('')
    }

    if (reference && onReferenceChange) {
      onReferenceChange(inputValue as string)
    }

    // Ejecutar la lógica de handleKeyPress como si fuera Enter
    const fakeEvent = {
      key: 'Enter',
      preventDefault: () => {}
    } as React.KeyboardEvent<HTMLInputElement>
    await handleKeyPress(fakeEvent)
  }

  const handleKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === 'Enter' || e.key === 'Tab') && account) {
      const accountExists = rows?.some(
        (row) =>
          row.participantAccount?.accountNumber === inputValue ||
          row.investorAccount?.accountNumber === inputValue
      )

      if (accountExists && rows && rows?.length > 1) {
        if (setModalContent && value) {
          if (setTextToast) setTextToast('Cuenta ya existe')
          if (setVariantToast) setVariantToast('error')
          if (setViewToast) setViewToast(true)
          setInputValue(value)
        }
        return
      }

      try {
        const response = await validateAccount(
          getFromLocalStorage(STORAGE_KEYS.USERNAME),
          tradeIdResponse,
          inputValue,
          side,
          isRepo || false
        )
        setInputValue(
          response.participantAccount
            ? response.participantAccount.accountNumber
            : response.investorAccount.accountNumber
        )
        if (onAccountDataFetched) {
          onAccountDataFetched(response)
        }
        setInputEmpty && setInputEmpty(false)
        setThereIsChange?.(true)
      } catch (error) {
        const err = error as ErrorResponse

        if (
          err?.response?.data?.errorCode ===
          'OWN_POSITION_NOT_CORRESPOND_TO_ORIGIN'
        ) {
          if (setModalContent) {
            setModalContent({
              title: 'Ocurrió un error',
              message:
                'Los datos de asignación no corresponden con el origen Posición Propia',
              variant: 'error',
              onClick: () => {
                setModalContent(null)
              }
            })
          }
        }
        if (
          err?.response?.data?.errorCode ===
          'THIRD_PARTIES_COLLECTIVE_PORTFOLIOS_NOT_CORRESPOND_TO_ORIGIN'
        ) {
          if (setModalContent) {
            setModalContent({
              title: 'Ocurrió un error',
              message:
                'Los datos de asignación no corresponden con el origen Terceros/Carteras Colectivas',
              variant: 'error',
              onClick: () => {
                setModalContent(null)
              }
            })
          }
        }

        if (err?.response?.data?.httpCode === '404') {
          setTextToast && setTextToast('Cuenta títulos no existe en Deceval')
          setVariantToast && setVariantToast('error')
          setViewToast && setViewToast(true)
        }
        if (err?.response?.data?.httpCode === '500') {
          setTextToast && setTextToast('Error interno del servidor')
          setVariantToast && setVariantToast('error')
          setViewToast && setViewToast(true)
        }
      }
    }
    if ((e.key === 'Enter' || e.key === 'Tab') && comission) {
      if (inputValue === '') {
        setInputValue('0') // Establecer 0 si el campo está vacío
      }

      const body = {
        commission: Number(inputValue) ?? 0,
        price: price,
        quantity: row.editedFractionQuantity
          ? row.editedFractionQuantity
          : row.fractionQuantity,
        valTax: row.valTax,
        sideId: side ?? null
      }

      try {
        const response = await calculationComissionEdit(
          getFromLocalStorage(STORAGE_KEYS.USERNAME),
          body,
          tradeIdResponse || '',
          isRepo || false
        )

        setThereIsChange?.(true)
        if (onComissionDataFetched) {
          onComissionDataFetched(response)
        }
      } catch {
        if (isDevMode()) {
          console.error('Error fetching account data')
        }
      }
    }
    if ((e.key === 'Enter' || e.key === 'Tab') && quantity) {
      const fractionQuantities = rows
        ? rows.map((r: { fraction: number; fractionQuantity: number }) => {
            return {
              fractionQuantity:
                r.fraction === row.fraction
                  ? parseFloat((inputValue as string).replace(',', '.'))
                  : r.fractionQuantity || 0
            }
          })
        : []

      try {
        let body = {
          commission: row.commissionPercentage ?? 0,
          price: price,
          quantity: inputValue as number,
          sideId: side ?? null
        }

        let countryId = country?.id

        const response = await calculationComissionAdd(
          getFromLocalStorage(STORAGE_KEYS.USERNAME),
          body,
          tradeIdResponse,
          countryId,
          isRepo
        )

        await rangeQuantity(
          getFromLocalStorage(STORAGE_KEYS.USERNAME),
          fractionQuantities,
          tradeIdResponse ?? '',
          isRepo
        )

        if (onChangeQuantity) {
          // Enviar el valor original como string para preservar los ceros
          onChangeQuantity(Number(inputValue), response)
        }

        setThereIsChange?.(true)
        setHasError(false)
      } catch (error) {
        if (isDevMode()) {
          console.error('Error validating maximum quantity:', error)
        }
        setHasError(true)
        if (setVariantToast && setTextToast && setViewToast) {
          setVariantToast('error')
          setTextToast(
            'La suma de las cantidades supera el 100%. Verifica e inténtalo nuevamente.'
          )
          setViewToast(true)
        }
      }
    }
  }

  return (
    <TextField
      type="text"
      placeholder={placeholder}
      value={inputValue}
      onChange={handleInputChange}
      onKeyDown={handleKeyPress}
      onBlur={handleBlur}
      error={hasError}
      variant="outlined"
      size="small"
      sx={{
        width,
        '& .MuiOutlinedInput-root': {
          height: '32px',
          backgroundColor: hasError ? 'transparent' : '',
          '& fieldset': {
            borderColor: hasError ? '#FF411C' : ''
          },
          '&:hover fieldset': {
            borderColor: hasError ? '#FF411C' : ''
          },
          '&.Mui-focused fieldset': {
            borderColor: hasError ? '#FF411C' : ''
          }
        },
        '& .MuiOutlinedInput-input': {
          padding: '0 12px',
          fontSize: '14px'
        }
      }}
    />
  )
}

```

## src/features/operations-management/components/OperationDetailTabsContainer.tsx

```tsx
import React, { useMemo, useState } from 'react'

import { useScreenActions } from 'remoteShell/mf-shell-useScreenActions'
import { CustomTabs } from 'remoteUtilities/components-mf-utilities'

import { buildDefaultTabs } from '@/features/operations-management/constants/operationDetails'

import eyeIcon from '@/shared/assets/icons/eyeIcon.svg'
import { OPERATION_MANAGEMENTE_ACTIONS } from '@/shared/constants/actionCodes'
import useTranslate from '@/shared/hooks/useTranslate'

import { OperationDetailTabsContainerProps } from '../types/operationDetails'
import { useOperationTabsData } from './hooks/useOperationTabsData'

/**
 * Contenedor de detalle de operaciones basado en CustomTabs.
 * Recibe tabs dinámicos y renderiza su contenido en el mismo orden.
 * Maneja su propio estado interno para el tab activo.
 */
export const OperationDetailTabsContainer: React.FC<
  OperationDetailTabsContainerProps & {
    currentTab?: number
    onChange?: (tab: number) => void
  }
> = ({
  tabs,
  alignTabs = 'left',
  tabColor = '#FF4201',
  tradeData,
  handleTradeHistory,
  //new Items
  tradeId,
  handleJointMembers,
  setModalDetailAccount,
  setIsModalOpen,
  currentTab,
  onChange
}) => {
  // Permite ser controlado desde el padre
  const [internalTab, setInternalTab] = useState(0)
  const activeTab = typeof currentTab === 'number' ? currentTab : internalTab
  const handleTabChange = onChange || setInternalTab

  const { hasAction } = useScreenActions()
  const permissions = useMemo(
    () => ({
      canShowEyeIcon: hasAction(OPERATION_MANAGEMENTE_ACTIONS.EYE_ICON),
      canShowDetail: hasAction(OPERATION_MANAGEMENTE_ACTIONS.SHOW_DETAIL),
      canDownloadMassive: hasAction(
        OPERATION_MANAGEMENTE_ACTIONS.DOWNLOAD_MASSIVE
      ),
      canDownloadIndividual: hasAction(
        OPERATION_MANAGEMENTE_ACTIONS.DOWNLOAD_INDIVIDUAL
      ),
      canTransfer: hasAction(OPERATION_MANAGEMENTE_ACTIONS.CUSTODIAN_TRANSFER)
    }),
    [hasAction]
  )
  const { t } = useTranslate({ keyPrefix: 'operationDetail.tabs' })
  const tabsToUse =
    tabs && tabs.length
      ? tabs
      : buildDefaultTabs({
          tradeData,
          eyeIcon: permissions.canShowEyeIcon ? eyeIcon : undefined,
          handleTradeHistory,
          //new Items
          tradeId,
          handleJointMembers,
          setModalDetailAccount,
          setIsModalOpen,
          t
        })
  const { labels, contents } = useOperationTabsData(tabsToUse)

  return (
    <CustomTabs
      tabs={labels.map((label) => ({ label }))}
      tabsContent={contents}
      currentTab={activeTab}
      onChange={handleTabChange}
      alignTabs={alignTabs}
      tabColor={tabColor}
      variant="left"
    />
  )
}

```

## src/features/operations-management/components/OperationTrackingModal.tsx

```tsx
import { Typography } from '@nuam/common-fe-lib-components'

import { BasicTable, Modal } from 'remoteUtilities/components-mf-utilities'

interface ModalInfoProps {
  setIsModalOpen: (isOpen: boolean) => void
  title: string
  subtitle: { bold: string; text: string | number }
  subtitle2?: { bold: string; text: string | number }
  statusColumns: { [key: string]: any }[]
  custodianStatusColumns: { [key: string]: any }[]
}

export const OperationTrackingModal = ({
  setIsModalOpen,
  title,
  subtitle,
  subtitle2,
  statusColumns,
  custodianStatusColumns
}: ModalInfoProps) => {
  // Get unique headers
  const statusHeaders =
    statusColumns.length > 0 ? Object.keys(statusColumns[0]) : []

  // Convert headers to BasicTable column format
  const width = {
    0: 120,
    1: 60,
    5: 412
  }
  const tableStatusColumns = statusHeaders.map((header, i) => {
    return {
      headerName: header,
      field: header,
      align: 'left' as const,
      width: width[i as keyof typeof width] || undefined
    }
  })

  const custodianHeaders =
    custodianStatusColumns.length > 0
      ? Object.keys(custodianStatusColumns[0])
      : []

  const tableCustodianStatusColumns = custodianHeaders.map((header, i) => {
    return {
      headerName: header,
      field: header,
      align: 'left' as const,
      width: width[i as keyof typeof width] || undefined
    }
  })

  return (
    <Modal
      handleClose={() => setIsModalOpen(false)}
      showCancelButton={false}
      width="80vw"
    >
      <div
        style={{
          maxHeight: 'calc(90vh - 90px)',
          overflowY: 'auto'
        }}
        className="flex flex-col w-full"
      >
        <div className="flex flex-col w-full">
          <Typography className="text-xl">{title}</Typography>
          <div className="grid grid-cols-2 gap-3 my-3 justify-between mt-6 ml-[6px]">
            <Typography className="text-text pb-2">
              <span
                style={{
                  fontWeight: 'bold',
                  color: 'var(--mui-palette-text-primary)'
                }}
              >
                {subtitle.bold}
              </span>{' '}
              <span
                style={{
                  color: 'var(--mui-palette-text-primary)'
                }}
              >
                {subtitle.text}
              </span>
            </Typography>
            {subtitle2 && (
              <Typography className="text-text pb-2">
                <span
                  className="font-bold"
                  style={{
                    color: 'var(--mui-palette-text-primary)'
                  }}
                >
                  {subtitle2.bold + ' '}
                </span>
                <span
                  style={{
                    color: 'var(--mui-palette-text-primary)'
                  }}
                >
                  {subtitle2.text}
                </span>
              </Typography>
            )}
          </div>

          <div style={{ marginTop: '8px' }} className="flex flex-col flex-1">
            <Typography className="text-text pb-2">
              <span
                className="font-bold"
                style={{
                  color: 'var(--mui-palette-text-primary)'
                }}
              >
                Estado
              </span>
            </Typography>
            <div
              style={{ maxHeight: '250px', overflowY: 'auto' }}
              className="flex flex-col flex-1 "
            >
              <BasicTable
                columns={tableStatusColumns}
                rows={statusColumns}
                height="auto"
                classNameContainer="flex flex-col flex-1"
                classNameTable="max-h-[190px] min-h-[190px] xl:min-h-[205px]  xl:max-h-[205px]"
                classNameCell="py-[10px] "
              />
            </div>
          </div>

          <div style={{ marginTop: '24px' }}>
            <Typography className="text-text pb-2">
              <span
                className="font-bold"
                style={{
                  color: 'var(--mui-palette-text-primary)'
                }}
              >
                Estado de Custodio
              </span>
            </Typography>
            <div
              style={{
                maxHeight: '250px',
                overflowY: 'auto',
                marginTop: '8px'
              }}
              className="flex flex-col flex-1 "
            >
              <BasicTable
                columns={tableCustodianStatusColumns}
                rows={custodianStatusColumns}
                height="auto"
                classNameContainer="flex flex-col flex-1"
                classNameTable="max-h-[190px] min-h-[190px] xl:min-h-[205px]  xl:max-h-[205px]"
                classNameCell="py-[10px] "
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

```

## src/features/operations-management/components/OperationsFilters.tsx

```tsx
import { DatePicker } from '@nuam/common-fe-lib-components'
import dayjs, { Dayjs } from 'dayjs'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'remoteShell/mf-store'
import {
  AutoCompleteInput,
  SelectNuam
} from 'remoteUtilities/components-mf-utilities'

import { USER_TYPES } from '@/shared/constants'
import useTranslate from '@/shared/hooks/useTranslate'
import { getUserInfo } from '@/shared/utils/getInfoUser'
import { transformOptionsAutoComplete } from '@/shared/utils/transformOptionsAutoComplete'

import useOptionsCountries from '../hooks/useOptionsCountries'
import { fetchFolioOptions } from '../services/fetchFolioOptions'

type DataDate = Dayjs | null
export type DatesFilter = {
  registerDate: DataDate
  complianceDate: DataDate
} | null
interface OperationsFiltersProps {
  selectedCountry: { id: number | null; name: string } | null
  onCountryChange: (value: { id: number | null; name: string } | null) => void

  selectedMatchId: { id: number; name: string } | null
  onMatchIdChange: (value: { id: number; name: string } | null) => void

  dates: DatesFilter
  setDates: (value: DatesFilter) => void
}

const OperationsFilters: React.FC<OperationsFiltersProps> = ({
  selectedCountry,
  onCountryChange,
  selectedMatchId,
  onMatchIdChange,
  dates,
  setDates
}) => {
  const { t } = useTranslate({ keyPrefix: 'operationManagement.filters' })
  const { participantId } = useSelector(
    (state: RootState) =>
      state.auth.infoUserNubo?.[0] || state.auth.infoUserNubo
  )
  const { userType } = useSelector(getUserInfo)
  const participant = userType === USER_TYPES.INTERNAL ? null : participantId
  const fetchOptions = useCallback(
    async (text?: string, page: number = 0, size: number = 10) => {
      const data = await fetchFolioOptions({
        matchId: text,
        page,
        size,
        dates
      })
      const transformData = transformOptionsAutoComplete(data, (e) => ({
        id: e?.toString(),
        label: e?.toString()
      }))
      return transformData
    },
    [participant, dates]
  )

  const { countryOptions } = useOptionsCountries()
  return (
    <div className="mb-6 w-full flex justify-between flex-wrap gap-4">
      <div className="w-full flex-1 min-w-190px">
        <SelectNuam
          size="small"
          formControlProps={{ fullWidth: true }}
          options={countryOptions}
          onChange={(value) => {
            if (!value || value.id === null) {
              onCountryChange(null)
            } else {
              onCountryChange(value as { id: number; name: string })
            }
          }}
          valueKey="id"
          labelKey="name"
          // label="País"
          label={t('country')}
          value={selectedCountry}
        />
      </div>

      <DatePicker
        // label="Fecha cumplimiento salida"
        label={t('complianceDate')}
        format="DD-MM-YYYY"
        value={dates?.complianceDate}
        onChange={(newValue: Date | null) => {
          if (newValue) {
            setDates({
              registerDate: dates?.registerDate ? dates?.registerDate : null,
              complianceDate: dayjs(newValue)
            })
          } else {
            setDates({
              registerDate: dates?.registerDate ?? null,
              complianceDate: null
            })
          }
        }}
        showClearIndicator={true}
        disabled={!!dates?.registerDate}
        slotProps={{
          textField: {
            size: 'small',
            fullWidth: true,
            className: 'min-w-190px'
          }
        }}
        className="flex-1"
      />

      <DatePicker
        // label="Fecha de registro"
        label={t('registerDate')}
        format="DD-MM-YYYY"
        value={dates?.registerDate}
        onChange={(newValue: Date | null) => {
          if (newValue) {
            setDates({
              registerDate: dayjs(newValue),
              complianceDate: dates?.complianceDate ?? null
            })
          } else {
            setDates({
              registerDate: null,
              complianceDate: dates?.complianceDate ?? null
            })
          }
        }}
        showClearIndicator={true}
        disabled={!!dates?.complianceDate}
        slotProps={{
          textField: {
            size: 'small',
            fullWidth: true,
            className: 'min-w-190px'
          }
        }}
        className="flex-1 min-w-190px"
      />
      <div className="w-full flex-1 min-w-190px">
        <AutoCompleteInput
          // label="Folio"
          label={t('matchId')}
          size="small"
          formControlProps={{ fullWidth: true }}
          onChange={onMatchIdChange}
          fetchOptions={fetchOptions}
          value={selectedMatchId ?? ''}
        />
      </div>
    </div>
  )
}

export default OperationsFilters

```

## src/features/operations-management/components/OperationsToolbar.tsx

```tsx
// components/OperationsToolbar.tsx
import { Button } from '@nuam/common-fe-lib-components'
import { ReactNode } from 'react'

interface Props {
  actions: (action: DownloadAction) => void
  headerActions: HeaderAction[]
}

export interface DownloadAction {
  type: string
}

export interface HeaderAction {
  label: string
  disabled: boolean
  type: string
  icon: ReactNode
}

export const OperationsToolbar: React.FC<Props> = ({
  actions,
  headerActions
}) => (
  <div>
    {headerActions.map((action, index) => (
      <Button
        key={index}
        size="small"
        variant="text"
        disabled={action.disabled}
        onClick={() => actions({ type: action.type })}
      >
        {action.icon}
        {action.label}
      </Button>
    ))}
  </div>
)

```

## src/features/operations-management/components/SelectAssignmentTable.tsx

```tsx
import { SelectNuam } from 'remoteUtilities/components-mf-utilities'

import useTranslate from '@/shared/hooks/useTranslate'
import { CommonResponseAutoComplete } from '@/shared/types/common'

interface Props {
  options?: unknown[]
  disabled?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: ((value: any) => void) | undefined
  value?: unknown
  showClearIndicator?: boolean
  keyValue: string
  label?: string
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  fetchOptions?: (page?: number) => Promise<CommonResponseAutoComplete<any[]>>
}
const SelectAssignmentTable = ({
  label,
  options,
  disabled,
  onChange,
  value,
  keyValue,
  showClearIndicator = false,
  fetchOptions,
  onClick
}: Props) => {
  const { t } = useTranslate({
    keyPrefix: 'operationDetail.tabs.beneficiary.columns'
  })
  const labelDefault = 'selectOption'
  return (
    <SelectNuam
      label={label ? label : t(labelDefault)}
      options={options}
      formControlProps={{ fullWidth: true }}
      size="small"
      valueKey={keyValue}
      labelKey={keyValue}
      disabled={disabled}
      onChange={onChange}
      value={value}
      showClearIndicator={showClearIndicator}
      MenuProps={{
        PaperProps: {
          sx: {
            maxHeight: 150
          }
        }
      }}
      onClick={onClick}
      fetchOptions={fetchOptions}
    />
  )
}

export default SelectAssignmentTable

```

## src/features/operations-management/components/TableAssignment.tsx

```tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataGrid } from '@nuam/common-fe-lib-components'
import { useCallback, useState } from 'react'

import { FieldsAssignment } from '../constants/fieldsAssignment'
import { type Fraction } from '../hooks/useStateFraction'

interface Props {
  Toolbar: React.ReactNode
  columns: Record<string, any>[]
  fractions: Fraction[]
  setThereAreSelectedFractions: React.Dispatch<
    React.SetStateAction<{
      fractions: Fraction[]
      ids: Set<string | number>
    }>
  >
}
const TableAssignment = ({
  Toolbar,
  columns,
  fractions,
  setThereAreSelectedFractions
}: Props) => {
  const [rowSelectionModel, setRowSelectionModel] = useState<{
    type: 'include' | 'exclude'
    ids: Set<any>
  }>({
    type: 'include',
    ids: new Set<any>([])
  })
  const onRowSelectionModelChange = useCallback(
    (newRowSelectionModel: any) => {
      setRowSelectionModel(newRowSelectionModel)

      // Determinar los IDs seleccionados según el tipo
      let selectedIds: (string | number)[] = []
      const selectedFractions = []
      if (newRowSelectionModel?.type === 'include') {
        // Tipo "include": usar directamente los IDs del Set
        selectedIds = newRowSelectionModel.ids
          ? Array.from(newRowSelectionModel.ids)
          : []
      }
      // Tipo "exclude": todos los IDs menos los excluidos
      const excludedIds = new Set(
        newRowSelectionModel.ids ? Array.from(newRowSelectionModel.ids) : []
      )
      for (let index = 0; index < fractions.length; index++) {
        const fraction = fractions[index]
        const fractionId = fraction[FieldsAssignment.id]
        if (
          fractionId &&
          !excludedIds.has(fractionId) &&
          newRowSelectionModel?.type === 'exclude'
        ) {
          selectedIds.push(fractionId)
        }
        if (fractionId != null && selectedIds.includes(fractionId)) {
          selectedFractions.push(fraction)
        }
      }

      setThereAreSelectedFractions({
        fractions: selectedFractions,
        ids: new Set(selectedIds)
      })
    },
    [fractions, setThereAreSelectedFractions]
  )
  return (
    <DataGrid
      density="compact"
      customToolbar={Toolbar}
      columns={columns}
      rows={fractions}
      getRowId={(row: Fraction) => {
        return row[FieldsAssignment.id] || ''
      }}
      onRowSelectionModelChange={onRowSelectionModelChange}
      getRowHeight={({ model }: any) => {
        const fraction = model as Fraction
        const error =
          fraction[FieldsAssignment.account]?.error?.message ||
          fraction[FieldsAssignment.quantity]?.error?.message ||
          fraction[FieldsAssignment.cashAccount]?.error?.message ||
          fraction[FieldsAssignment.referencePackage]?.error?.message
        return error ? 94 : 68
      }}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10
          }
        }
      }}
      rowSelectionModel={rowSelectionModel}
      pageSizeOptions={[10, 20, 50]}
      sx={{
        '& .MuiDataGrid-cell': {
          display: 'flex',
          alignItems: 'center',
          pt: '4px',
          pb: '2px'
        },
        maxHeight: 'none',
        minHeight: '100%'
      }}
      showDownload={false}
      checkboxSelection
      showToolbar
    />
  )
}

export default TableAssignment

```

## src/features/operations-management/components/VoucherDocumentC.tsx

```tsx
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'

import { formatNumberWithThousandsSeparator } from 'remoteUtilities/formattedNumber'

import STORAGE_KEYS from '@/shared/constants/storageKeys'
import { IReportOperation } from '@/shared/types'
import { getFromLocalStorage } from '@/shared/utils/localStorage'

interface VoucherDocumentProps {
  data: IReportOperation | null
}

interface VoucherPageProps {
  footerText: string
  data: IReportOperation | null
}

const styles = StyleSheet.create({
  page: {
    padding: 20
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  leftColumn: {
    width: '50%',
    borderTop: '1px solid black',
    borderBottom: '1px solid black',
    borderLeft: '1px solid black',
    padding: 8
  },
  rightColumn: {
    width: '50%',
    border: '1px solid black',
    padding: 8,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: 5
  },
  box: {
    border: '1px solid black',
    padding: 8
  },
  boxWithOutBottom: {
    borderTop: '1px solid black',
    borderLeft: '1px solid black',
    borderRight: '1px solid black',
    padding: 8
  },
  boxWithOutTop: {
    borderBottom: '1px solid black',
    borderLeft: '1px solid black',
    borderRight: '1px solid black',
    padding: 8
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4
  },
  column: {
    width: '50%'
  },
  title: {
    fontSize: 9
  },
  text: {
    fontSize: 9
  },
  textSm: {
    fontSize: 8
  },
  textBold: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    fontWeight: 'bold'
  },
  boxObservations: {
    // borderTop: '1px solid black',
    borderLeft: '1px solid black',
    borderRight: '1px solid black'
  },
  bottomRightBox: {
    borderBottom: '1px solid black',
    height: 50
  }
})

const VoucherPage: React.FC<VoucherPageProps> = ({ footerText, data }) => {
  const currentDateTime = new Date().toLocaleString()
  const userName = getFromLocalStorage(STORAGE_KEYS.USERNAME)
  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <View style={styles.leftColumn}>
          <></>
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.title}>COMPROBANTE DE LIQUIDACIÓN </Text>
          <Text style={[styles.title, { textAlign: 'center' }]}>
            DE OPERACION
          </Text>
          <Text style={[styles.title, { textAlign: 'center' }]}>
            SISTEMA CENTRALIZADO DE OPERACION
          </Text>
          <Text style={styles.title}>DE LA BOLSA DE VALORES DE COLOMBIA</Text>
          <Text style={[styles.title, { textAlign: 'center' }]}>
            NIT: 830.085.426-1 MEC
          </Text>
        </View>
      </View>
      <View style={[styles.boxWithOutTop, { gap: 4 }]}>
        <View style={styles.row}>
          <Text style={styles.text}>Compra/Venta</Text>
          <Text style={styles.text}>
            {Number(data?.settlement?.side?.id) === 1 ? 'Compra' : 'Venta'}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Fecha de operación: </Text>
          <Text style={styles.text}>{data?.trade?.matchDate?.toString()}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Consecutivo</Text>
          <Text style={styles.text}>{data?.trade?.matchId}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>N° Fracción</Text>
          <Text style={styles.text}>{data?.settlement?.fraction}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Fecha de cumplimento</Text>
          <Text style={styles.text}>
            {data?.trade?.clearingDate?.toString()}
          </Text>
        </View>
      </View>
      <View style={[styles.boxWithOutTop, { gap: 4 }]}>
        <View style={styles.row}>
          <Text style={styles.textBold}>TITULO NEGOCIADO</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Nemotecnico:</Text>
          <Text style={styles.text}>{data?.securityTitle?.mnemonic}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Descripcion de la especie:</Text>
          <Text style={styles.text}>{data?.securityTitle?.mnemonic}</Text>
        </View>
      </View>
      <View style={[styles.boxWithOutTop, { gap: 4 }]}>
        <Text style={styles.textBold}>BENEFICIARIO(S)</Text>
        <View style={styles.row}>
          <Text style={styles.text}>Clientes (s)</Text>
          <Text style={styles.text}>
            {data?.investor?.fullName ?? data?.participant?.name}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Tipo ID Beneficiario final</Text>
          <Text style={styles.text}>
            {data?.investor?.identificationType?.code ??
              data?.participant?.identificationType?.code}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>ID Beneficiario final</Text>
          <Text style={styles.text}>
            {data?.investor?.documentNumber ??
              data?.participant?.documentNumber}
          </Text>
        </View>
      </View>
      <View style={[styles.boxWithOutTop, { gap: 4 }]}>
        <Text style={styles.textBold}>PARTICIPANTE</Text>
        <View style={styles.row}>
          <Text style={styles.text}>Participante</Text>
          <Text style={styles.text}>
            {Number(data?.settlement?.side?.id) === 1
              ? data?.participantBuy?.name
              : data?.participantSell?.name}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Tipo ID Participante</Text>
          <Text style={styles.text}>
            {Number(data?.settlement?.side?.id) === 1
              ? data?.participantBuy?.type?.description
              : data?.participantSell?.type?.description}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>ID Participante</Text>
          <Text style={styles.text}>
            {Number(data?.settlement?.side?.id) === 1
              ? data?.participantBuy?.documentNumber
              : data?.participantSell?.documentNumber}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Usuario</Text>
          <Text style={styles.text}>{userName}</Text>
        </View>
      </View>
      <View style={[styles.boxWithOutTop, { gap: 4, padding: 0 }]}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: '4'
          }}
        >
          <View
            style={{
              width: '50%',
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              borderRight: '1px solid black',
              paddingRight: '4px',
              paddingLeft: '8px',
              paddingTop: '8px',
              paddingBottom: '8px'
            }}
          >
            <Text style={styles.textBold}>CARACTERISTICAS DE LA OPERACIÓN</Text>
            <View style={styles.row}>
              <Text style={styles.text}>Tipo de Operación</Text>
              <Text style={styles.text}>{data?.trade?.type?.description}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Código del participante</Text>
              <Text style={styles.text}>
                {Number(data?.settlement?.side?.id) === 1
                  ? data?.participantBuy?.code
                  : data?.participantSell?.code}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Tipo de negocio</Text>
              <Text style={styles.text}>
                {data?.trade?.businessType?.description}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Mercado</Text>
              <Text style={styles.text}>
                {data?.trade?.marketType?.description}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Origen de la operación</Text>
              <Text style={styles.text}>
                {data?.trade?.tradingSystem?.description}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Depósito</Text>
              <Text style={styles.text}>
                {data?.trade?.depository?.description}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Plazo</Text>
              <Text style={styles.text}>{data?.trade?.daysToSettlement}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Monto Inicial</Text>
              <Text style={styles.text}>
                {formatNumberWithThousandsSeparator(
                  data?.settlement?.outFlowTurnoverValue,
                  true
                )}
              </Text>
            </View>
          </View>
          <View
            style={{
              width: '50%',
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              padding: '8px'
            }}
          >
            <View style={styles.row}>
              <Text style={styles.text}>Monto regreso</Text>
              <Text style={styles.text}>
                {formatNumberWithThousandsSeparator(
                  data?.settlement?.returnTurnoverValue,
                  true
                )}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Tasa de Negociación</Text>
              <Text style={styles.text}>{data?.trade?.repurchaseRate}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Cantidad Nominal</Text>
              <Text style={styles.text}>
                {formatNumberWithThousandsSeparator(
                  data?.settlement?.fractionQuantity,
                  true
                )}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Precio de registro</Text>
              <Text style={styles.text}>
                {formatNumberWithThousandsSeparator(data?.trade?.price, true)}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Valor</Text>
              <Text style={styles.text}>
                {formatNumberWithThousandsSeparator(
                  data?.settlement?.fractionVolume,
                  true
                )}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Moneda</Text>
              <Text style={styles.text}>{data?.trade?.currency?.name}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>%Comisión</Text>
              <Text style={styles.text}>
                {data?.settlement?.commissionPercentage}%
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Valor de Comisión</Text>
              <Text style={styles.text}>
                {formatNumberWithThousandsSeparator(
                  data?.settlement?.commissionAmount,
                  true
                )}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Servicio de nuam</Text>
              <Text style={styles.text}>
                {formatNumberWithThousandsSeparator(
                  data?.settlement?.brokerageService,
                  true
                )}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.boxWithOutTop, { gap: 4 }]}>
        <Text style={styles.textBold}>VALOR NETO</Text>
        <View style={styles.row}>
          <Text style={styles.text}>Valor neto</Text>
          <Text style={styles.text}>
            {formatNumberWithThousandsSeparator(
              data?.settlement?.netAmount,
              true
            )}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Iva sobre comisión</Text>
          <Text style={styles.text}>
            {formatNumberWithThousandsSeparator(
              data?.settlement?.valTaxAmount,
              true
            )}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Sanción Extemporáneo</Text>
          <Text style={styles.text}>
            {data?.settlement?.latePenalty || '--'}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.textBold}>VALOR NETO INCLUIDO IVA</Text>
          <Text style={styles.textBold}>
            {formatNumberWithThousandsSeparator(
              data?.settlement?.netValTax,
              true
            )}
          </Text>
        </View>
      </View>
      <View style={[styles.boxObservations, { height: 110 }]}>
        <Text style={[styles.textBold, { padding: 8 }]}>OBSERVACIONES:</Text>
        <Text style={[styles.text, { flexShrink: 1, flexGrow: 1 }]}></Text>
        <View
          style={{
            borderTop: '1px solid black',
            borderLeft: '1px solid black',
            alignSelf: 'flex-end',
            width: '50%',
            padding: 8,
            marginTop: 'auto',
            marginLeft: 'auto'
          }}
        >
          <View style={styles.bottomRightBox}>
            <Text style={styles.text}>
              {data?.settlement?.issuedReceipt &&
                `El presente comprobante reemplaza al identificado con el número de control ${data?.settlement?.issuedReceiptNumberPrevious}`}{' '}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.box,
          {
            gap: 5,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }
        ]}
      >
        <Text style={styles.text}>Número de control</Text>
        <Text style={styles.text}>{data?.settlement?.issuedReceiptNumber}</Text>
        <Text style={styles.text}>Fecha y hora de impresión</Text>
        <Text style={styles.text}>{currentDateTime}</Text>
      </View>
      <View style={[styles.row, { flexWrap: 'wrap' }]}>
        <Text style={styles.textSm}>
          -Proveedor del Software: Bolsa de Valores de Colombia.S.A Nit:
          830085426-1
        </Text>
        <Text style={styles.textSm}>
          VIGILADO Superintenendcia Financiera de Colombia
        </Text>
      </View>
      <View style={[styles.row, { flexWrap: 'wrap' }]}>
        <Text style={styles.textSm}>-Software: NUBO</Text>
      </View>
      <Text
        style={[
          styles.textBold,
          {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
          }
        ]}
      >
        - {footerText} -
      </Text>
    </Page>
  )
}

export const VoucherDocumentC: React.FC<VoucherDocumentProps> = ({ data }) => {
  return (
    <Document>
      <VoucherPage footerText="AFILIADO" data={data} />
      <VoucherPage footerText="CLIENTE o COPIA" data={data} />
    </Document>
  )
}

```

## src/features/operations-management/components/VoucherDocumentR.tsx

```tsx
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'

import { formatNumberWithThousandsSeparator } from 'remoteUtilities/formattedNumber'

import STORAGE_KEYS from '@/shared/constants/storageKeys'
import { IReportOperation } from '@/shared/types'
import { getFromLocalStorage } from '@/shared/utils/localStorage'

interface VoucherDocumentProps {
  data: IReportOperation | null
}

interface VoucherPageProps {
  footerText: string
  data: IReportOperation | null
}

const styles = StyleSheet.create({
  page: {
    padding: 20
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  leftColumn: {
    width: '50%',
    borderTop: '1px solid black',
    borderBottom: '1px solid black',
    borderLeft: '1px solid black',
    padding: 8
  },
  rightColumn: {
    width: '50%',
    border: '1px solid black',
    padding: 8,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: 5
  },
  box: {
    border: '1px solid black',
    padding: 8
  },
  boxWithOutBottom: {
    borderTop: '1px solid black',
    borderLeft: '1px solid black',
    borderRight: '1px solid black',
    padding: 8
  },
  boxWithOutTop: {
    borderBottom: '1px solid black',
    borderLeft: '1px solid black',
    borderRight: '1px solid black',
    padding: 8
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4
  },
  column: {
    width: '50%'
  },
  title: {
    fontSize: 8
  },
  text: {
    fontSize: 8
  },
  textSm: {
    fontSize: 7
  },
  textBold: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    fontWeight: 'bold'
  },
  boxObservations: {
    // borderTop: '1px solid black',
    borderLeft: '1px solid black',
    borderRight: '1px solid black'
  },
  bottomRightBox: {
    borderBottom: '1px solid black',
    height: 50
  }
})

const formatPercentage = (value: number | undefined): string => {
  if (value === undefined) return '--'
  return `${(value / 100).toFixed(2)}%`
}

const VoucherPage: React.FC<VoucherPageProps> = ({ footerText, data }) => {
  const currentDateTime = new Date().toLocaleString()
  const userName = getFromLocalStorage(STORAGE_KEYS.USERNAME)

  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <View style={styles.leftColumn}>
          <></>
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.title}>COMPROBANTE DE LIQUIDACIÓN </Text>
          <Text style={[styles.title, { textAlign: 'center' }]}>
            DE OPERACION
          </Text>
          <Text style={[styles.title, { textAlign: 'center' }]}>
            SISTEMA CENTRALIZADO DE OPERACION
          </Text>
          <Text style={styles.title}>DE LA BOLSA DE VALORES DE COLOMBIA</Text>
          <Text style={[styles.title, { textAlign: 'center' }]}>
            NIT: 830.085.426-1 MEC
          </Text>
        </View>
      </View>
      <View style={[styles.boxWithOutTop, { gap: 4 }]}>
        <View style={styles.row}>
          <Text style={styles.text}>Compra/Venta </Text>
          <Text style={styles.text}>
            {Number(data?.settlement?.side?.id) === 1 ? 'Compra' : 'Venta'}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Fecha de operación: </Text>
          <Text style={styles.text}>{data?.trade?.matchDate?.toString()}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Consecutivo</Text>
          <Text style={styles.text}>{data?.trade?.matchId}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>N° Fracción</Text>
          <Text style={styles.text}>{data?.settlement?.fraction}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Fecha de cumplimento</Text>
          <Text style={styles.text}>
            {data?.trade?.clearingDate?.toString()}
          </Text>
        </View>
      </View>
      <View style={[styles.boxWithOutTop, { gap: 4 }]}>
        <View style={styles.row}>
          <Text style={styles.textBold}>TITULO NEGOCIADO</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Nemotecnico:</Text>
          <Text style={styles.text}>{data?.securityTitle?.mnemonic}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Descripcion de la especie:</Text>
          <Text style={styles.text}>{data?.securityTitle?.equityCode}</Text>
        </View>
      </View>
      <View style={[styles.boxWithOutTop, { gap: 4 }]}>
        <Text style={styles.textBold}>BENEFICIARIO(S)</Text>
        <View style={styles.row}>
          <Text style={styles.text}>Clientes (s)</Text>
          <Text style={styles.text}>
            {data?.investor?.fullName ?? data?.participant?.fullName}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Tipo ID Beneficiario final</Text>
          <Text style={styles.text}>
            {data?.investor?.identificationType?.code ??
              data?.participant?.identificationType?.code}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>ID Beneficiario final</Text>
          <Text style={styles.text}>
            {data?.investor?.documentNumber ??
              data?.participant?.documentNumber}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Condición fiscal</Text>
          <Text style={styles.text}>
            {data?.investor?.taxStatus?.description ??
              data?.participant?.taxStatus?.description}
          </Text>
        </View>
      </View>
      <View style={[styles.boxWithOutTop, { gap: 4 }]}>
        <Text style={styles.textBold}>PARTICIPANTE</Text>
        <View style={styles.row}>
          <Text style={styles.text}>Participante</Text>
          <Text style={styles.text}>
            {Number(data?.settlement?.side?.id) === 1
              ? data?.participantBuy?.name
              : data?.participantSell?.name}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Tipo ID Participante</Text>
          <Text style={styles.text}>
            {Number(data?.settlement?.side?.id) === 1
              ? data?.participantBuy?.type?.description
              : data?.participantSell?.type?.description}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>ID Participante</Text>
          <Text style={styles.text}>
            {Number(data?.settlement?.side?.id) === 1
              ? data?.participantBuy?.documentNumber
              : data?.participantSell?.documentNumber}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Usuario</Text>
          <Text style={styles.text}>{userName}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Condición fiscal</Text>
          <Text style={styles.text}>
            {Number(data?.settlement?.side?.id) === 1
              ? data?.participantBuy?.taxStatus?.description
              : data?.participantSell?.taxStatus?.description}
          </Text>
        </View>
      </View>
      <View style={[styles.boxWithOutTop, { gap: 4, padding: 0 }]}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: '4'
          }}
        >
          <View
            style={{
              width: '50%',
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              borderRight: '1px solid black',
              paddingRight: '4px',
              paddingLeft: '8px',
              paddingTop: '8px',
              paddingBottom: '8px'
            }}
          >
            <Text style={styles.textBold}>CARACTERISTICAS DE LA OPERACIÓN</Text>
            <View style={styles.row}>
              <Text style={styles.text}>Tipo de Operación</Text>
              <Text style={styles.text}>{data?.trade?.type?.description}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Código del participante</Text>
              <Text style={styles.text}>
                {Number(data?.settlement?.side?.id) === 1
                  ? data?.participantBuy?.code
                  : data?.participantSell?.code}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Tipo de negocio</Text>
              <Text style={styles.text}>
                {data?.trade?.businessType?.description}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Mercado</Text>
              <Text style={styles.text}>
                {data?.trade?.marketType?.description}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Origen de la operación</Text>
              <Text style={styles.text}>
                {data?.trade?.tradingSystem?.description}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Depósito</Text>
              <Text style={styles.text}>
                {data?.trade?.depository?.description}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Tasa recompra</Text>
              <Text style={styles.text}>
                {formatPercentage(data?.trade?.repurchaseRate)}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Fecha Recompra</Text>
              <Text style={styles.text}>
                {data?.trade?.repurchaseAgreementDate?.toString()}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Días recompra</Text>
              <Text style={styles.text}>--</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Valor de recompra</Text>

              <Text style={styles.text}>
                {formatNumberWithThousandsSeparator(
                  data?.settlement?.repoRate,
                  true
                )}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Valor de captación</Text>
              <Text style={styles.text}>
                {formatNumberWithThousandsSeparator(
                  data?.settlement?.repoAmount,
                  true
                )}
              </Text>
            </View>
          </View>
          <View
            style={{
              width: '50%',
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              padding: '8px'
            }}
          >
            <View style={styles.row}>
              <Text style={styles.text}>Precio o tasa de captación</Text>
              <Text style={styles.text}>
                {formatNumberWithThousandsSeparator(data?.trade?.price, true)}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Plazo</Text>
              <Text style={styles.text}>{data?.trade?.daysToSettlement}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Monto Inicial</Text>
              <Text style={styles.text}>
                {formatNumberWithThousandsSeparator(
                  data?.settlement?.outFlowTurnoverValue,
                  true
                )}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Monto regreso</Text>
              <Text style={styles.text}>
                {formatNumberWithThousandsSeparator(
                  data?.settlement?.returnTurnoverValue,
                  true
                )}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Tasa de Negociación</Text>
              <Text style={styles.text}>
                {formatPercentage(data?.trade?.repurchaseRate)}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Cantidad Nominal</Text>
              <Text style={styles.text}>
                {formatNumberWithThousandsSeparator(
                  data?.settlement?.fractionQuantity
                )}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Precio de registro</Text>
              <Text style={styles.text}>{data?.trade?.repurchaseRate}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Valor</Text>
              <Text style={styles.text}>
                {formatNumberWithThousandsSeparator(
                  data?.settlement?.fractionVolume,
                  true
                )}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Moneda</Text>
              <Text style={styles.text}>{data?.trade?.currency?.name}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>%Comisión</Text>
              <Text style={styles.text}>
                {data?.settlement?.commissionPercentage}%
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Valor de Comisión</Text>
              <Text style={styles.text}>
                {formatNumberWithThousandsSeparator(
                  data?.settlement?.commissionPercentage,
                  true
                )}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Servicio de nuam</Text>
              <Text style={styles.text}>
                {formatNumberWithThousandsSeparator(
                  data?.settlement?.brokerageService,
                  true
                )}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.boxWithOutTop, { gap: 4 }]}>
        <Text style={styles.textBold}>VALOR NETO</Text>
        <View style={styles.row}>
          <Text style={styles.text}>Valor neto</Text>
          <Text style={styles.text}>
            {formatNumberWithThousandsSeparator(
              data?.settlement?.netAmount,
              true
            )}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Iva sobre comisión</Text>
          <Text style={styles.text}>
            {formatNumberWithThousandsSeparator(
              data?.settlement?.valTaxAmount,
              true
            )}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Sanción Extemporáneo</Text>
          <Text style={styles.text}>
            {data?.settlement?.latePenalty || '--'}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.textBold}>VALOR NETO INCLUIDO IVA</Text>
          <Text style={styles.textBold}>
            {formatNumberWithThousandsSeparator(
              data?.settlement?.netValTax,
              true
            )}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.textBold}>Ent CONTRA PAGO</Text>
          <Text style={styles.textBold}>
            {formatNumberWithThousandsSeparator(
              data?.settlement?.deliveryVersusPaymentValue,
              true
            )}
          </Text>
        </View>
      </View>
      <View style={[styles.boxObservations, { height: 110 }]}>
        <Text style={[styles.textBold, { padding: 8 }]}>OBSERVACIONES:</Text>
        <View
          style={{
            borderTop: '1px solid black',
            borderLeft: '1px solid black',
            alignSelf: 'flex-end',
            width: '50%',
            padding: 8,
            marginTop: 'auto',
            marginLeft: 'auto'
          }}
        >
          <View style={styles.bottomRightBox}>
            <Text style={styles.text}>
              {data?.settlement?.issuedReceipt &&
                `El presente comprobante reemplaza al identificado con el número de control ${data?.settlement.issuedReceiptNumberPrevious}`}{' '}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.box,
          {
            gap: 5,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }
        ]}
      >
        <Text style={styles.text}>Número de control</Text>
        <Text style={styles.text}>{data?.settlement?.issuedReceiptNumber}</Text>
        <Text style={styles.text}>Fecha y hora de impresión</Text>
        <Text style={styles.text}>{currentDateTime}</Text>
      </View>
      <View style={[styles.row, { flexWrap: 'wrap' }]}>
        <Text style={styles.textSm}>
          -Proveedor del Software: Bolsa de Valores de Colombia.S.A Nit:
          830085426-1
        </Text>
        <Text style={styles.textSm}>
          VIGILADO Superintenendcia Financiera de Colombia
        </Text>
      </View>
      <View style={[styles.row, { flexWrap: 'wrap' }]}>
        <Text style={styles.textSm}>-Software: NUBO</Text>
      </View>
      <Text
        style={[
          styles.textBold,
          {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
          }
        ]}
      >
        - {footerText} -
      </Text>
    </Page>
  )
}

export const VoucherDocumentR: React.FC<VoucherDocumentProps> = ({ data }) => {
  return (
    <Document>
      <VoucherPage footerText="AFILIADO" data={data} />
      <VoucherPage footerText="CLIENTE o COPIA" data={data} />
    </Document>
  )
}

```

## src/features/operations-management/components/WarningMasterAccount.tsx

```tsx
import {
  DefaultComponents,
  Typography,
  MaterialIcons,
  NuamThemeWrapper
} from '@nuam/common-fe-lib-components'

import useTranslate from '@/shared/hooks/useTranslate'

const WarningMasterAccount = () => {
  const { t } = useTranslate({
    keyPrefix: 'operationDetail.tabs.beneficiary.modalCorrection'
  })
  return (
    <DefaultComponents.Box
      display="flex"
      gap={3}
      p={2}
      bgcolor={'var(--mui-palette-cardActionBackground)'}
      mb={1}
    >
      <NuamThemeWrapper>
        <MaterialIcons.ErrorOutline />
      </NuamThemeWrapper>
      <Typography>
        {/* Para el proceso de corrección no puedes ingresar cuentas master. */}
        {t('warningMessageMaster')}
      </Typography>
    </DefaultComponents.Box>
  )
}

export default WarningMasterAccount

```

## src/features/operations-management/components/correct-assignment/CorrectAssignmentToolbar.tsx

```tsx
import { Button, MaterialIcons } from '@nuam/common-fe-lib-components'

import { Participant } from '@/shared/types/participant'

import { HandleAlertAction } from '../../hooks/useAssignmentAlert'
import { Fraction } from '../../hooks/useStateFraction'
import { useValidationsButtonsAssignment } from '../../hooks/useValidationsButtonsAssignment'
import { type SelectedFractions } from '../AssignmentOperation'

interface Props {
  addFraction: () => void
  deleteCustodianFromFractions: (
    indexes: SelectedFractions['fractions']
  ) => void
  addCustodianToFraction: (indexes: SelectedFractions['fractions']) => void
  deleteFractions: (indexes: SelectedFractions['ids']) => void
  thereAreSelectedFractions: SelectedFractions
  currentCustodian: Participant | null
  fractions: Fraction[]
  disabledFractions?: boolean
  changeAlert?: HandleAlertAction
  maxFractions: number
}
const CorrectAssignmentToolbar = ({
  addFraction,
  thereAreSelectedFractions,
  deleteFractions,
  // currentCustodian,
  fractions,
  disabledFractions,
  maxFractions
}: Props) => {
  const { disabledButtons } = useValidationsButtonsAssignment({
    fractions,
    thereAreSelected: thereAreSelectedFractions.fractions,
    quantityIsMinorLimit: disabledFractions ?? false,
    maxFractions
  })
  return (
    <>
      <Button
        variant="text"
        sx={{ fontSize: '13px', width: { xs: 'min-content' } }}
        onClick={addFraction}
        disabled={disabledButtons?.addFraction ?? true}
      >
        <MaterialIcons.PersonAddAlt sx={{ mr: '2px' }} />
        Agregar fracción
      </Button>
      <Button
        variant="text"
        sx={{ fontSize: '13px', width: { xs: 'min-content' } }}
        onClick={() => deleteFractions(thereAreSelectedFractions.ids)}
        disabled={disabledButtons?.deleteFraction ?? true}
      >
        <MaterialIcons.DeleteOutline sx={{ mr: '2px' }} />
        Eliminar fracción
      </Button>
      {/* <>
        <Button
          variant="text"
          sx={{ fontSize: '13px' }}
          disabled={false}
          onClick={() => {
            changeAlert?.({
              variant: 'toast',
              info: {
                text: 'Custodio asignado preliminarmente, para trasladar guarde la asignación',
                open: true,
                duration: 2500
              }
            })
            addCustodianToFraction(thereAreSelectedFractions.fractions)
          }}
        >
          Asignar custodio
        </Button>
        <Button
          variant="text"
          sx={{ fontSize: '13px' }}
          disabled={disabledButtons?.deleteCustodian}
          onClick={() => {
            changeAlert?.({
              variant: 'toast',
              info: {
                text: 'Se removió el custodio en las fracciones seleccionadas',
                open: true,
                duration: 2500
              }
            })
            deleteCustodianFromFractions(thereAreSelectedFractions.fractions)
          }}
        >
          Quitar custodio
        </Button>
      </> */}
    </>
  )
}

export default CorrectAssignmentToolbar

```

## src/features/operations-management/components/headerActionsRight.tsx

```tsx
import { Button, MaterialIcons } from '@nuam/common-fe-lib-components'

interface Props {
  hasMasterAccount: boolean
  thereAreSelected: any[]
  handleAddClick: () => void
  handleDeleteRow: (rows: any[]) => void
  handleEditClick: () => void
}

export const HeaderActionsRight = ({
  hasMasterAccount,
  thereAreSelected,
  handleAddClick,
  handleDeleteRow,
  handleEditClick
}: Props) => (
  <>
    <Button
      variant="text"
      disabled={!hasMasterAccount}
      className={`${!hasMasterAccount ? 'text-[#ccc]' : 'text-[#FF411C]'} flex items-center outline-none w-[166px] py-1 px-[5px] font-Roboto font-medium gap-0 text-[13px] uppercase`}
      onClick={handleAddClick}
    >
      <MaterialIcons.PersonAddAlt1Outlined fontSize="small" />
      Agregar Fracción
    </Button>

    <Button
      variant="text"
      disabled={thereAreSelected.length < 1 || !hasMasterAccount}
      className={`${thereAreSelected.length < 1 || !hasMasterAccount ? 'text-[#ccc]' : 'text-[#FF411C]'} flex items-center outline-none w-[166px] py-1 px-[5px] font-Roboto font-medium gap-0 text-[13px] uppercase`}
      onClick={() => {
        handleDeleteRow(thereAreSelected)
      }}
    >
      <MaterialIcons.DeleteOutlined fontSize="small" />
      Eliminar Fracción
    </Button>

    <Button
      variant="text"
      className="text-[#FF411C] flex items-center outline-none w-auto py-1 px-[5px] font-Roboto font-medium gap-0 text-[13px] uppercase"
      onClick={handleEditClick}
    >
      <MaterialIcons.DriveFileRenameOutlineOutlined sx={{ fontSize: 20 }} />
      Modificar Asignación
    </Button>
  </>
)

```

## src/features/operations-management/components/hooks/useBeneficiaryDetail.tsx

```tsx
import { useCallback, useEffect, useRef, useState } from 'react'

import { BoxInfo } from 'remoteUtilities/components-mf-utilities'
import { formatNumberWithThousandsSeparator } from 'remoteUtilities/formattedNumber'

import {
  SIDE_TYPES,
  TRADE_TYPES
} from '@/features/operations-management/constants/operations'
import { IDetailOperation } from '@/features/operations-management/types'
import { ContentSettlement } from '@/features/settlement-file/types'

import STORAGE_KEYS from '@/shared/constants/storageKeys'
import useTranslate from '@/shared/hooks/useTranslate'
import { getFromLocalStorage } from '@/shared/utils/localStorage'

import {
  buildTableColumnsContado,
  buildTableColumnsRepo,
  buyColumns,
  buyColumnsRepo,
  sellColumns,
  sellColumnsRepo
} from '../../constants/BeneficiaryDetailTab'
import { getCalculationTotalAmount } from '../../services/operationDetails'
import { ModalHistory, Row } from '../../types/operationDetails'
import TotalCalculation from '../BeneficiaryTotals'

interface UseBeneficiaryDetailProps {
  tradeData: IDetailOperation
  tradeId?: string
  handleJointMembers: (
    client_user: string,
    row: Row,
    setModalDetailAccount: React.Dispatch<
      React.SetStateAction<ModalHistory | null>
    >,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>
  setModalDetailAccount: React.Dispatch<
    React.SetStateAction<ModalHistory | null>
  >
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const useBeneficiaryDetail = ({
  tradeData,
  tradeId,
  handleJointMembers,
  setModalDetailAccount,
  setIsModalOpen
}: UseBeneficiaryDetailProps) => {
  const { t } = useTranslate({ keyPrefix: 'operationDetail.tabs.beneficiary' })

  const client_user = getFromLocalStorage(STORAGE_KEYS.USERNAME) as string

  const [activeTab, setActiveTab] = useState<number>(0)
  const [records, setRecords] = useState<ContentSettlement[]>()
  const [hasMasterAccount, setHasMasterAccount] = useState(false)
  const [dataBeneficiariesBottom, setDataBeneficiariesBottom] = useState([
    {
      title: '1',
      rows: [
        {
          //  label: 'Monto neto total compra',
          label: t('totalNetAmountBuy'),
          value: '0'
        }
      ]
    },
    {
      title: '2',
      rows: [
        {
          // label: 'Valor de giro total compra',
          label: t('valueTurnTotalBuy'),
          value: '0'
        }
      ]
    }
  ])
  const [totalsAmount, setTotalsAmount] = useState({
    transferValueTotal: 0,
    netAmountTotal: 0
  })

  const lastSideIdRef = useRef<string | null>(null)

  const setDataRemote = (_page: number, dataTable: []) => {
    setRecords(dataTable)
  }
  const { t: trans } = useTranslate({
    keyPrefix: 'operationDetail.tabs.beneficiary.columns'
  })
  const commonColumnsContado = buildTableColumnsContado(
    client_user,
    setHasMasterAccount,
    handleJointMembers,
    setModalDetailAccount,
    setIsModalOpen,
    hasMasterAccount,
    () => {}, // handleUpdateCommissionPercentage - vacío en este contexto
    () => {}, // handleUpdateCommissionPercentageBlur - vacío en este contexto,
    trans,
    tradeData?.trade?.country?.id
  )
  const commonColumnsRepo = buildTableColumnsRepo(
    client_user,
    setHasMasterAccount,
    handleJointMembers,
    setModalDetailAccount,
    setIsModalOpen,
    hasMasterAccount,
    () => {}, // handleUpdateCommissionPercentage - vacío en este contexto
    () => {}, // handleUpdateCommissionPercentageBlur - vacío en este contexto
    trans,
    tradeData?.trade?.country?.id
  )
  const columns =
    tradeData?.trade?.type?.id === TRADE_TYPES.R
      ? commonColumnsRepo
      : commonColumnsContado

  const tabs = [
    ...(tradeData?.canSeeSideBuy
      ? [
          {
            // label: SIDE_TYPES.BUY.label,
            label: t('tabBuy'),
            side: SIDE_TYPES.BUY.id,
            content: (
              <BoxInfo
                columns={
                  tradeData?.trade?.type?.id === TRADE_TYPES.R
                    ? buyColumnsRepo(tradeData, SIDE_TYPES.BUY.id, trans)
                    : buyColumns(tradeData, SIDE_TYPES.BUY.id, trans)
                }
              />
            ),
            id: tradeData?.trade?.participantBuy?.id,
            disabled: !tradeData?.canSeeSideBuy,
            className: 'flex-0'
          }
        ]
      : []),
    ...(tradeData?.canSeeSideSell
      ? [
          {
            // label: SIDE_TYPES.SELL.label,
            label: t('tabSell'),
            side: SIDE_TYPES.SELL.id,
            content: (
              <BoxInfo
                columns={
                  tradeData?.trade?.type?.id === TRADE_TYPES.R
                    ? sellColumnsRepo(tradeData, SIDE_TYPES.SELL.id, trans)
                    : sellColumns(tradeData, SIDE_TYPES.SELL.id, trans)
                }
              />
            ),
            id: tradeData?.trade?.participantSell?.id,
            disabled: !tradeData?.canSeeSideSell,
            className: 'flex-0'
          }
        ]
      : [])
  ]

  const filteredTabs = tabs
  const activeSideId = filteredTabs[activeTab]?.side ?? SIDE_TYPES.BUY.id

  // Obtener totales solo cuando cambia el sideId efectivo o los records
  useEffect(() => {
    const sideId = filteredTabs[activeTab]?.side ?? SIDE_TYPES.BUY.id

    // Solo hacer el llamado si el sideId cambió y el tab no está deshabilitado
    if (!filteredTabs[activeTab]?.disabled && tradeId) {
      const fetchCalculationTotalAmount = async () => {
        const responseCalculationTotalAmount = await getCalculationTotalAmount(
          client_user,
          tradeId,
          sideId
        )
        setTotalsAmount(responseCalculationTotalAmount)
      }

      fetchCalculationTotalAmount()
      // Actualizar lastSideIdRef después de hacer el llamado
      lastSideIdRef.current = sideId
    }
  }, [
    activeTab,
    tradeId,
    client_user,
    filteredTabs[activeTab]?.disabled,
    records
  ])

  useEffect(() => {
    let totalAmount = 0
    let totalSettlementAmount = 0
    if (records) {
      totalAmount = records!.reduce(
        (acc, current) => acc + current.netAmount,
        0
      )
      totalSettlementAmount = records!.reduce(
        (acc, current) => acc + current.settlementAmount,
        0
      )
    }
    setDataBeneficiariesBottom((prevState) => {
      const newState = [...prevState]
      const index1 = newState.findIndex((item) => item.title === '1')
      const index2 = newState.findIndex((item) => item.title === '2')

      if (index1 !== -1) {
        newState[index1].rows[0].value = formatNumberWithThousandsSeparator(
          totalAmount,
          true
        )
      } else {
        newState.push({
          title: '1',
          rows: [
            {
              // label: 'Monto neto total compra',
              label: t('totalNetAmountBuy'),
              value: formatNumberWithThousandsSeparator(totalAmount, true)
            }
          ]
        })
      }

      if (index2 !== -1) {
        newState[index2].rows[0].value = formatNumberWithThousandsSeparator(
          totalSettlementAmount,
          true
        )
      } else {
        newState.push({
          title: '2',
          rows: [
            {
              // label: 'Valor de giro total compra',
              label: t('valueTurnTotalBuy'),
              value: formatNumberWithThousandsSeparator(
                totalSettlementAmount,
                true
              )
            }
          ]
        })
      }

      return newState
    })
  }, [records])

  const endpoint = `/settlement?tradeId=${tradeId}&sideId=${filteredTabs[activeTab]?.side ?? SIDE_TYPES.BUY.id}`
  const shouldShowTable = true

  const TotalCalculationCallback = useCallback(
    () => (
      <TotalCalculation
        total={totalsAmount}
        operationType={tradeData.trade?.type?.id}
      />
    ),
    [totalsAmount, tradeData.trade?.type?.id, records]
  )

  return {
    activeTab,
    setActiveTab,
    records,
    setDataRemote,
    dataBeneficiariesBottom,
    columns,
    filteredTabs,
    endpoint,
    shouldShowTable,
    tradeId,
    TotalCalculationCallback,
    activeSideId
  }
}

```

## src/features/operations-management/components/hooks/useOperationTabsData.ts

```typescript
import React, { useMemo } from 'react'

export interface TabDescriptor {
  label: string
  content: React.ReactNode
}

/**
 * Memoiza los arreglos de etiquetas y contenidos desde los descriptores de tabs.
 */
export const useOperationTabsData = (tabs: TabDescriptor[]) => {
  const labels = useMemo(() => tabs.map((t) => t.label), [tabs])
  const contents = useMemo(() => tabs.map((t) => t.content ?? null), [tabs])

  return { labels, contents }
}

```

## src/features/operations-management/components/hooks/useTradeHistory.ts

```typescript
import { useCallback, useState } from 'react'
import { useParams } from 'react-router-dom'

import { formatToUserLocalTime } from 'remoteUtilities/formatToUserLocalTime'
import { formattedDate } from 'remoteUtilities/formattedDate'

import { SIDE_TYPES } from '@/features/operations-management/constants/operations'
import { ModalHistory } from '@/features/operations-management/types/operationDetails'

import STORAGE_KEYS from '@/shared/constants/storageKeys'
import { getTradeHistory } from '@/shared/services'
import { ModalAlertProps } from '@/shared/types/declares'
import isDevMode from '@/shared/utils/isDevMode'
import { getFromLocalStorage } from '@/shared/utils/localStorage'

interface UseTradeHistoryReturn {
  modalHistory: ModalHistory | null
  isModalFollowUp: boolean
  modalFollowUpColumns: Array<{
    Fecha: string
    Hora: string
    Estado: string
    Punta: string
    Detalle: string
  }>
  isLoading: boolean
  fetchTradeHistory: () => Promise<void>
  setIsModalFollowUp: (open: boolean) => void
  setModalContent: (content: ModalAlertProps | null) => void
  modalContent: ModalAlertProps | null
}

interface UseTradeHistoryProps {
  tradeMatchId?: string | number | null
  tradeMatchDate?: string | null
}

export const useTradeHistory = ({
  tradeMatchId,
  tradeMatchDate
}: UseTradeHistoryProps): UseTradeHistoryReturn => {
  const [modalHistory, setModalHistory] = useState<ModalHistory | null>(null)
  const [isModalFollowUp, setIsModalFollowUp] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [modalContent, setModalContent] = useState<ModalAlertProps | null>(null)
  const [modalFollowUpColumns, setModalFollowUpColumns] = useState<
    Array<{
      Fecha: string
      Hora: string
      Estado: string
      Punta: string
      Detalle: string
    }>
  >([])
  const { tradeId } = useParams<{ tradeId: string }>()
  const client_user = getFromLocalStorage(STORAGE_KEYS.USERNAME) as string

  const transformTradeHistoryData = useCallback((historyData: any[]) => {
    return historyData.map((history) => {
      const dateTime = formatToUserLocalTime(history?.time)
        ?.split(',')[1]
        ?.trim()
      const formatDate = formattedDate({
        date: history.time,
        format: 'YYYY-MM-DD'
      })
      const valuePoint =
        history.side?.id === SIDE_TYPES.BUY.id
          ? SIDE_TYPES.BUY.label
          : SIDE_TYPES.SELL.label

      return {
        Fecha: formatDate,
        Hora: dateTime,
        Estado: history.status.description,
        Punta: history.side?.id ? valuePoint : '',
        Detalle: history.status.detail
      }
    })
  }, [])

  const formatMatchDate = useCallback((dateString: string | null) => {
    if (!dateString) return 'N/A'

    const formatDate = formattedDate({
      date: dateString,
      format: 'YYYY-MM-DD'
    })
    return formatDate
  }, [])

  const fetchTradeHistory = useCallback(async () => {
    if (!tradeId) return

    try {
      setIsLoading(true)
      const data = await getTradeHistory(client_user, tradeId)

      if (!data?.trackingTrade) {
        throw new Error('No tracking data available')
      }

      const transformedColumns = transformTradeHistoryData(data.trackingTrade)
      setModalFollowUpColumns(transformedColumns)

      setModalHistory({
        title: 'Seguimiento de la operación',
        subtitle: {
          bold: 'Folio',
          text: tradeMatchId?.toString() || 'N/A'
        },
        subtitle2: {
          bold: 'Fecha de registro:',
          text: formatMatchDate(tradeMatchDate || null)
        },
        columns: transformedColumns
      })

      setIsModalFollowUp(true)
    } catch (error) {
      if (isDevMode()) {
        console.error('Error fetching trade history:', error)
      }

      setModalContent({
        title: 'Error en el servidor',
        message:
          'Ha ocurrido un error en el servidor. Por favor, inténtelo de nuevo más tarde.',
        variant: 'error',
        onClick: () => {
          setModalContent(null)
          setIsModalFollowUp(false)
        }
      })
    } finally {
      setIsLoading(false)
    }
  }, [
    tradeId,
    client_user,
    tradeMatchId,
    tradeMatchDate,
    transformTradeHistoryData,
    formatMatchDate
  ])

  return {
    modalHistory,
    isModalFollowUp,
    modalFollowUpColumns,
    isLoading,
    fetchTradeHistory,
    setIsModalFollowUp,
    setModalContent,
    modalContent
  }
}

```

## src/features/operations-management/constants/BeneficiaryDetailTab.tsx

```tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DefaultComponents,
  GridColDef,
  MaterialIcons,
  TRenderCellParams
} from '@nuam/common-fe-lib-components'
import { type TFunction } from 'i18next'

import { defaultValueField } from 'remoteUtilities/defaultValueField'
import { formatNumberWithThousandsSeparator } from 'remoteUtilities/formattedNumber'
import { StatusChip } from 'remoteUtilities/statusChip'

import { Settlement } from '@/shared/types/settlement'

import { ModalHistory, Row } from '../types/operationDetails'

type TradeData = any

const statusBadge = (condition?: boolean) => (
  <div
    className={`px-3 border border-transparent w-9 h-8 flex justify-center items-center text-sm font-bold text-black rounded-[4px_20px_4px_4px] ${
      condition ? 'bg-[#9DF4D9]' : 'bg-[#CCCCCC]'
    }`}
  >
    {condition ? 'Sí' : 'No'}
  </div>
)

// Sell columns contado
export const sellColumns = (
  tradeData: TradeData,
  side: string,
  t: TFunction<'operaciones', string>
) => {
  const participantSell = tradeData?.trade?.participantSell
  return [
    {
      title: 'Column 1',
      rows: [
        {
          // label: 'Participante',
          label: t('participant'),
          value: participantSell
            ? participantSell?.code + ' ' + participantSell?.shortName
            : 'N/A'
        },
        // {
        //   label: 'Código comisionista extranjero venta',
        //   value: tradeData?.tradeEquity?.foreignBrokerSell?.description ?? ' '
        // },
        {
          // label: 'Monto',
          label: t('amount'),
          value:
            tradeData?.trade?.quantity && tradeData?.trade?.price
              ? formatNumberWithThousandsSeparator(tradeData?.trade?.amount)
              : ''
        },
        {
          // label: 'Asignación Definitiva',
          label: t('finalAssignment'),
          value: (
            <div
              className={`px-3 border border-transparent text-black w-9 h-8 flex justify-center items-center text-sm font-bold rounded-[4px_20px_4px_4px] ${tradeData?.trade?.finalAssignmentMarkSell ? 'bg-[#9DF4D9]' : 'bg-[#CCCCCC]'}`}
            >
              {tradeData?.trade?.finalAssignmentMarkSell ? 'Sí' : 'No'}
            </div>
          )
        }
      ]
    },
    {
      title: 'Column 2',
      rows: [
        {
          // label: 'Operador directo venta',
          label: t('directOperatorSell'),
          value: tradeData?.trade?.enteringFirmSell || ' '
        }, //custodianBuy o custodianSell
        {
          // label: 'Cantidad',
          label: t('quantity'),
          value:
            tradeData?.trade?.quantity &&
            formatNumberWithThousandsSeparator(
              tradeData?.trade?.quantity,
              false,
              false
            )
        },
        {
          // label: 'Moneda',
          label: t('currency'),
          value: tradeData?.trade?.currency?.code
        },
        ...(tradeData?.trade?.country?.id === 35
          ? [
              {
                // label: 'Ciclo Previo',
                label: t('previousCycle'),
                value: tradeData?.trade?.previousCycle || ' '
              }
            ]
          : [])
        // {
        //   label: 'Indicador de reasignación por venta',
        //   value: (
        //     <div
        //       className={`px-3 border border-transparent text-black w-9 h-8 flex justify-center items-center text-sm font-bold rounded-[4px_20px_4px_4px] ${tradeData?.trade?.assignmentMarkSell ? 'bg-[#9DF4D9]' : 'bg-[#CCCCCC]'}`}
        //     >
        //       {tradeData?.trade?.assignmentMarkSell ? 'Sí' : 'No'}
        //     </div>
        //   )
        // }
      ]
    },
    {
      title: 'Column 3',
      rows: [
        {
          // label: 'Depósito',
          label: t('depository'),
          value: tradeData?.trade?.depositorySell?.description || ' '
        },
        {
          // label: 'Precio',
          label: t('price'),
          value:
            tradeData?.trade?.price &&
            formatNumberWithThousandsSeparator(tradeData?.trade?.price)
        },

        {
          // label: 'Estado Punta',
          label: t('statusTip'),
          value:
            side === '1'
              ? tradeData?.trade?.buyStatus?.shortName
              : tradeData?.trade?.sellStatus?.shortName
        }
      ]
    }
  ]
}
// Buy columns contado
export const buyColumns = (
  tradeData: TradeData,
  side: string,
  t: TFunction<'operaciones', string>
) => {
  const participantBuy = tradeData?.trade?.participantBuy
  return [
    {
      title: 'Column 1',
      rows: [
        {
          // label: 'Participante',
          label: t('participant'),
          value: participantBuy
            ? participantBuy?.code + ' ' + participantBuy?.shortName
            : 'N/A'
        },
        // {
        //   label: 'Código comisionista extranjero compra',
        //   value: tradeData?.tradeEquity?.foreignBrokerBuy?.description ?? ' '
        // },
        {
          // label: 'Monto',
          label: t('amount'),
          value:
            tradeData?.trade?.quantity && tradeData?.trade?.price
              ? formatNumberWithThousandsSeparator(tradeData?.trade?.amount)
              : ''
        },
        {
          // label: 'Asignación Definitiva',
          label: t('finalAssignment'),
          value: (
            <div
              className={`px-3 border border-transparent text-black w-9 h-8 flex justify-center items-center text-sm font-bold rounded-[4px_20px_4px_4px] ${tradeData?.trade?.finalAssignmentMarkBuy ? 'bg-[#9DF4D9]' : 'bg-[#CCCCCC]'}`}
            >
              {tradeData?.trade?.finalAssignmentMarkBuy ? 'Sí' : 'No'}
            </div>
          )
        }
      ]
    },
    {
      title: 'Column 2',
      rows: [
        {
          // label: 'Operador directo compra',
          label: t('directOperatorBuy'),
          value: tradeData?.trade?.enteringFirmBuy || ' '
        },
        {
          // label: 'Cantidad',
          label: t('quantity'),
          value:
            tradeData?.trade?.quantity &&
            formatNumberWithThousandsSeparator(
              tradeData?.trade?.quantity,
              false,
              false
            )
        },
        {
          // label: 'Moneda',
          label: t('currency'),
          value: tradeData?.trade?.currency?.code
        },
        ...(tradeData?.trade?.country?.id === 35
          ? [
              {
                label: 'Ciclo Posterior',
                value: tradeData?.trade?.posteriorCycle || ' '
              }
            ]
          : [])

        // {
        //   label: 'Indicador de reasignación por compra',
        //   value: (
        //     <div
        //       className={`px-3 border border-transparent text-black w-9 h-8 flex justify-center items-center text-sm font-bold rounded-[4px_20px_4px_4px] ${tradeData?.trade?.assignmentMarkBuy ? 'bg-[#9DF4D9]' : 'bg-[#CCCCCC]'}`}
        //     >
        //       {tradeData?.trade?.assignmentMarkBuy ? 'Sí' : 'No'}
        //     </div>
        //   )
        // }
      ]
    },
    {
      title: 'Column 3',
      rows: [
        {
          // label: 'Depósito',
          label: t('depository'),
          value: tradeData?.trade?.depositoryBuy?.description || ' '
        },
        {
          // label: 'Precio',
          label: t('price'),
          value:
            tradeData?.trade?.price &&
            formatNumberWithThousandsSeparator(tradeData?.trade?.price)
        },

        {
          // label: 'Estado Punta',
          label: t('statusTip'),
          value:
            side === '1'
              ? tradeData?.trade?.buyStatus?.shortName
              : tradeData?.trade?.sellStatus?.shortName
        }
      ]
    }
  ]
}

// Sell columns repo
export const sellColumnsRepo = (
  tradeData: TradeData,
  side: string,
  t: TFunction<'operaciones', string>
) => [
  {
    title: 'Column 1',
    rows: [
      {
        // label: 'Participante',
        label: t('participant'),
        value:
          tradeData?.trade?.participantSell?.code +
            ' ' +
            tradeData?.trade?.participantSell?.shortName || ' '
      },
      {
        // label: 'Depósito',
        label: t('depository'),
        value: tradeData?.trade?.depositorySell?.description || ' '
      },
      {
        // label: 'Depósito',
        label: t('depository'),
        value: tradeData?.trade?.depositorySell?.description || ' '
      },
      {
        // label: 'Monto Repo',
        label: t('repoAmount'),
        value:
          tradeData?.trade?.volume &&
          formatNumberWithThousandsSeparator(tradeData?.trade?.volume)
      },
      {
        // label: 'Precio Regreso',
        label: t('forwardPrice'),
        value:
          tradeData?.trade?.forwardPrice != null &&
          formatNumberWithThousandsSeparator(tradeData?.trade?.forwardPrice)
      }
      // {
      //   label: 'Indicador de reasignación por venta',
      //   value: (
      //     <div
      //       className={`px-3 border border-transparent text-black w-9 h-8 flex justify-center items-center text-sm font-bold rounded-[4px_20px_4px_4px] ${tradeData?.trade?.assignmentMarkSell ? 'bg-[#9DF4D9]' : 'bg-[#CCCCCC]'}`}
      //     >
      //       {tradeData?.trade?.assignmentMarkSell ? 'Sí' : 'No'}
      //     </div>
      //   )
      // }
    ]
  },
  {
    title: 'Column 2',
    rows: [
      {
        // label: 'Operador directo venta',
        label: 'directOperatorSell',
        value: tradeData?.trade?.enteringFirmSell || ' '
      },
      {
        // label: 'Cantidad',
        label: t('quantity'),
        value:
          tradeData?.trade?.quantity &&
          formatNumberWithThousandsSeparator(
            tradeData?.trade?.quantity,
            false,
            false
          )
      },
      {
        // label: 'Moneda',
        label: t('currency'),
        value: tradeData?.trade?.currency?.code
      },

      {
        // label: 'Estado Punta',
        label: t('statusTip'),
        value:
          side === '1'
            ? tradeData?.trade?.buyStatus?.shortName
            : tradeData?.trade?.sellStatus?.shortName
      }
    ]
  },
  {
    title: 'Column 3',
    rows: [
      // {
      //   label: 'Código comisionista extranjero venta',
      //   value: tradeData?.tradeEquity?.foreignBrokerSell?.description ?? ' '
      // },
      {
        // label: 'Tasa Repo',
        label: t('repoRate'),
        value: tradeData?.trade?.repoRate
          ? `${tradeData?.trade?.repoRate}%`
          : ' '
      },
      {
        // label: 'Precio',
        label: t('price'),
        value:
          tradeData?.trade?.price &&
          formatNumberWithThousandsSeparator(tradeData?.trade?.price)
      },

      {
        // label: 'Asignación Definitiva',
        label: t('finalAssignment'),
        value: (
          <div
            className={`px-3 border border-transparent text-black w-9 h-8 flex justify-center items-center text-sm font-bold rounded-[4px_20px_4px_4px] ${tradeData?.trade?.finalAssignmentMarkSell ? 'bg-[#9DF4D9]' : 'bg-[#CCCCCC]'}`}
          >
            {tradeData?.trade?.finalAssignmentMarkSell ? 'Sí' : 'No'}
          </div>
        )
      }
    ]
  }
]

export const buyColumnsRepo = (
  tradeData: TradeData,
  side: string,
  t: TFunction<'operaciones', string>
) => [
  {
    title: 'Column 1',
    rows: [
      {
        // label: 'Participante',
        label: t('participant'),
        value:
          tradeData?.trade?.participantBuy?.code +
            ' ' +
            tradeData?.trade?.participantBuy?.shortName || 'N/A'
      },
      {
        // label: 'Depósito',
        label: t('depository'),
        value: tradeData?.trade?.depositoryBuy?.description || ' '
      },
      {
        // label: 'Monto Repo',
        label: t('repoAmount'),
        value:
          tradeData?.trade?.volume &&
          formatNumberWithThousandsSeparator(tradeData?.trade?.volume)
      },
      {
        // label: 'Precio Regreso',
        label: t('forwardPrice'),
        value:
          tradeData?.trade?.forwardPrice != null &&
          formatNumberWithThousandsSeparator(tradeData?.trade?.forwardPrice)
      }
      // {
      //   label: 'Indicador de asignación por compra',
      //   value: (
      //     <div
      //       className={`px-3 border border-transparent text-black w-9 h-8 flex justify-center items-center text-sm font-bold rounded-[4px_20px_4px_4px] ${tradeData?.trade?.assignmentMarkSell ? 'bg-[#9DF4D9]' : 'bg-[#CCCCCC]'}`}
      //     >
      //       {tradeData?.trade?.assignmentMarkBuy ? 'Sí' : 'No'}
      //     </div>
      //   )
      // },
    ]
  },
  {
    title: 'Column 2',
    rows: [
      {
        // label: 'Operador directo compra',
        label: t('directOperatorBuy'),
        value: tradeData?.trade?.enteringFirmBuy || ' '
      },
      {
        // label: 'Cantidad',
        label: t('quantity'),
        value:
          tradeData?.trade?.quantity &&
          formatNumberWithThousandsSeparator(
            tradeData?.trade?.quantity,
            false,
            false
          )
      },
      {
        // label: 'Moneda',
        label: t('currency'),
        value: tradeData?.trade?.currency?.code
      },

      {
        // label: 'Estado Punta',
        label: t('statusTip'),
        value:
          side === '1'
            ? tradeData?.trade?.buyStatus?.shortName
            : tradeData?.trade?.sellStatus?.shortName
      }
    ]
  },
  {
    title: 'Column 3',
    rows: [
      // {
      //   label: 'Código comisionista extranjero compra',
      //   value: tradeData?.tradeEquity?.foreignBrokerBuy?.description ?? ' '
      // },
      {
        // label: 'Tasa Repo',
        label: t('repoRate'),
        value: tradeData?.trade?.repoRate
          ? `${tradeData?.trade?.repoRate}%`
          : ' '
      },
      {
        // label: 'Precio',
        label: t('price'),
        value:
          tradeData?.trade?.price &&
          formatNumberWithThousandsSeparator(tradeData?.trade?.price)
      },
      {
        // label: 'Asignación Definitiva',
        label: t('finalAssignment'),
        value: (
          <div
            className={`px-3 border border-transparent text-black w-9 h-8 flex justify-center items-center text-sm font-bold rounded-[4px_20px_4px_4px] ${tradeData?.trade?.finalAssignmentMarkBuy ? 'bg-[#9DF4D9]' : 'bg-[#CCCCCC]'}`}
          >
            {tradeData?.trade?.finalAssignmentMarkBuy ? 'Sí' : 'No'}
          </div>
        )
      }
    ]
  }
]

export const buildTableColumnsContado = (
  clientUser: any,
  setHasMasterAccount: (value: boolean) => void,
  handleJointMembers: (
    client_user: string,
    row: Row,
    setModalDetailAccount: React.Dispatch<
      React.SetStateAction<ModalHistory | null>
    >,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>,
  setModalDetailAccount: (value: any) => void,
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
  hasMasterAccount: boolean,
  _handleUpdateCommissionPercentage: any,
  _handleUpdateCommissionPercentageBlur: any,
  t: TFunction<'operaciones', string>,
  country?: number
) => {
  const columns: GridColDef<Settlement>[] = [
    {
      width: 40,
      field: 'fraction',
      headerName: 'N°',
      valueGetter: (_, data) => {
        return data?.fraction === 0 ? 1 : data?.fraction
      }
    },
    {
      width: 70,
      field: 'investor.identificationType',
      // headerName: 'Tipo',
      headerName: t('type'),
      valueGetter: (_: TRenderCellParams, data: any) => {
        return (
          data?.investor?.identificationType?.code ??
          data?.participantAccount?.participant?.identificationType?.code ??
          'NIT'
        )
      }
    },
    {
      width: 120,
      field: 'investor.documentNumber',
      // headerName: 'ID',
      headerName: t('id'),
      valueGetter: (_: TRenderCellParams, data: any) => {
        const value =
          data?.investor?.documentNumber ??
          data?.participantAccount?.participant?.documentNumber
        return defaultValueField({ value: value })
      }
    },
    {
      width: 150,
      field: 'firstName',
      // headerName: 'Nombre',
      headerName: t('name'),
      valueGetter: (_params, data) => {
        return defaultValueField({
          value:
            data?.investorAccount?.accountName ??
            data?.participantAccount?.participant?.shortName
        })
      }
    },
    {
      width: 140,
      field: 'investorAccount',
      // headerName: 'RUT/Cuenta Títulos',
      headerName: t('rutTitleAccount'),
      valueGetter: (_, data) => {
        return (
          data?.investorAccount?.accountNumber ??
          data?.participantAccount?.accountNumber ??
          ' '
        )
      },
      renderCell: ({ row }: TRenderCellParams) => {
        if (row.masterAccount && !hasMasterAccount) {
          setHasMasterAccount(true)
        }

        return (
          <div className="relative flex gap-2 group">
            {row.jointAccount && (
              <DefaultComponents.Tooltip title="Cuenta mancomunada, has clic para ver todos los miembros">
                <span
                  className="opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  onClick={() =>
                    handleJointMembers(
                      clientUser,
                      row,
                      setModalDetailAccount,
                      setIsModalOpen
                    )
                  }
                >
                  <MaterialIcons.Groups2Outlined
                    sx={{ color: '#000', '&:hover': { color: '#ff4201' } }}
                  />
                </span>
              </DefaultComponents.Tooltip>
            )}
            <span>
              {row?.investorAccount?.accountNumber ??
                row?.participantAccount?.accountNumber ??
                ' '}
            </span>
          </div>
        )
      }
    },
    {
      width: 200,
      field: 'masterAccount',
      // headerName: 'Indicador de cuenta master',
      headerName: t('masterAccountIndicator'),
      renderCell: ({ row }: TRenderCellParams) => (
        <div className="h-full flex items-center">
          {statusBadge(row?.masterAccount)}
        </div>
      )
    },
    {
      width: 120,
      field: 'custodian',
      // headerName: 'Custodio',
      headerName: t('custodian'),
      valueGetter: (_, data) => {
        return defaultValueField({ value: data.custodian?.code })
      }
    },
    ...(country === 37
      ? [
          {
            width: 150,
            field: 'cashAccount',
            // headerName: 'Cuenta efectivo',
            headerName: t('cashAccount'),
            valueGetter: (cashAccount: string) => {
              return cashAccount || ' '
            }
          }
        ]
      : []),
    {
      width: 110,
      field: 'fractionQuantity',
      // headerName: 'Cantidad',
      headerName: t('quantity'),
      valueGetter: (fractionQuantity?: number) => {
        return formatNumberWithThousandsSeparator(
          fractionQuantity,
          false,
          false
        )
      }
    },
    {
      width: 120,
      field: 'commissionPercentage',
      // headerName: '% comisión ',
      headerName: t('commissionPercentage'),
      valueGetter: (commissionPercentage?: number) => {
        if (commissionPercentage == null) return ''
        return `${commissionPercentage.toLocaleString('es-CO', {
          minimumFractionDigits: 0,
          maximumFractionDigits: 4
        })}%`
      }
    },
    {
      width: 150,
      field: 'commissionAmount',
      // headerName: 'Valor comisión',
      headerName: t('valueCommission'),
      valueGetter: (commissionAmount: number) => {
        return formatNumberWithThousandsSeparator(commissionAmount)
      }
    },
    {
      width: 110,
      field: 'valTaxAmount',
      // headerName: 'Imp Comisión',
      headerName: t('commissionTax'),
      valueGetter: (valTaxAmount?: number) => {
        return formatNumberWithThousandsSeparator(valTaxAmount)
      }
    },
    {
      width: 110,
      field: 'fractionVolume',
      // headerName: 'Monto',
      headerName: t('amount'),
      valueGetter: (fractionVolume?: number) => {
        return formatNumberWithThousandsSeparator(fractionVolume)
      }
    },
    {
      width: 110,
      field: 'netAmount',
      // headerName: 'Monto neto',
      headerName: t('netAmount'),
      valueGetter: (netAmount?: number) => {
        return formatNumberWithThousandsSeparator(netAmount)
      }
    },
    {
      width: 130,
      field: 'referenceAllocId',
      // headerName: 'Referencia',
      headerName: t('reference'),
      valueGetter: (_: TRenderCellParams, data: any) => {
        const value =
          data?.referenceAllocId && data.referenceAllocId !== ''
            ? data.referenceAllocId
            : data?.reference
        return defaultValueField({ value: value })
      }
    },
    {
      width: 150,
      field: 'sourceQuoteType',
      // headerName: 'Origen',
      headerName: t('source'),
      valueGetter: (_: TRenderCellParams, data: any) => {
        return data?.sourceQuoteType?.description ?? ' '
      }
    },
    ...(country === 37
      ? [
          {
            width: 150,
            field: 'ficAdministrator.description',
            // headerName: '	Administrador FIC',
            headerName: t('ficAdministrator'),
            valueGetter: (_: TRenderCellParams, data: any) => {
              return defaultValueField({
                value: data?.ficAdministrator?.shortName
              })
            }
          },
          {
            width: 150,
            field: 'ficAdministrator.code',
            // headerName: 'Cód. FIC',
            headerName: t('ficCode'),
            valueGetter: (_: TRenderCellParams, data: any) => {
              return defaultValueField({
                value: data?.ficAdministrator?.code
              })
            }
          }
        ]
      : []),
    {
      width: 150,
      field: 'custodianStatus',
      // headerName: 'Estado custodio',
      headerName: t('custodianStatus'),
      valueGetter: (_, data: any) => {
        return defaultValueField({
          value: data?.custodianStatus?.shortName
        })
      }
    },
    {
      width: 150,
      field: 'packageCode',
      // headerName: 'Código paquete',
      headerName: t('packageCode'),
      valueGetter: (_, data: any) => {
        return defaultValueField({ value: data?.packageCode })
      }
    },
    {
      width: 150,
      field: 'packageReference',
      // headerName: 'Código paquete',
      headerName: t('packageReference'),
      valueGetter: (_: TRenderCellParams, data: any) => {
        return defaultValueField({ value: data?.referencePackage })
      }
    }
  ]
  return columns
}

export const buildTableColumnsRepo = (
  clientUser: any,
  setHasMasterAccount: (value: boolean) => void,
  handleJointMembers: (
    clientUser: string,
    row: Row,
    setModalDetailAccount: React.Dispatch<
      React.SetStateAction<ModalHistory | null>
    >,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>,
  setModalDetailAccount: (value: any) => void,
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
  hasMasterAccount: boolean,
  _handleUpdateCommissionPercentage: any,
  _handleUpdateCommissionPercentageBlur: any,
  t: TFunction<'operaciones', string>,
  country?: number
) => [
  {
    width: 40,
    field: 'fraction',
    headerName: 'N°',
    valueGetter: (_: TRenderCellParams, data: any) => {
      return data?.fraction === 0 ? 1 : data?.fraction
    }
  },
  {
    width: 70,
    field: 'investor.identificationType',
    // headerName: 'Tipo',
    headerName: t('type'),
    valueGetter: (_: TRenderCellParams, data: any) => {
      return (
        data?.investor?.identificationType?.code ??
        data?.participantAccount?.participant?.identificationType?.code ??
        'NIT'
      )
    }
  },
  {
    width: 120,
    field: 'investor.documentNumber',
    // headerName: 'ID',
    headerName: t('id'),
    valueGetter: (_: TRenderCellParams, data: any) => {
      const value =
        data?.investor?.documentNumber ??
        data?.participantAccount?.participant?.documentNumber
      return defaultValueField({ value: value })
    }
  },
  {
    width: 180,
    field: 'firstName',
    // headerName: 'Nombre',
    headerName: t('name'),
    valueGetter: (_params: TRenderCellParams, data: any) => {
      const value =
        data?.investorAccount?.accountName ??
        data?.participantAccount?.participant?.shortName
      return defaultValueField({ value: value })
    }
  },
  {
    width: 150,
    field: 'investorAccount',
    // headerName: 'RUT/Cuenta Títulos',
    headerName: t('rutTitleAccount'),
    valueGetter: (_: TRenderCellParams, data: any) => {
      return (
        data?.investorAccount?.accountNumber ??
        data?.participantAccount?.accountNumber ??
        ' '
      )
    },
    renderCell: ({ row }: TRenderCellParams) => {
      if (row.masterAccount && !hasMasterAccount) {
        setHasMasterAccount(true)
      }

      return (
        <div className="relative flex gap-2 group">
          {row.jointAccount && (
            <DefaultComponents.Tooltip title="Cuenta mancomunada, has clic para ver todos los miembros">
              <span
                className="opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                onClick={() =>
                  handleJointMembers(
                    clientUser,
                    row,
                    setModalDetailAccount,
                    setIsModalOpen
                  )
                }
              >
                <MaterialIcons.Groups2Outlined
                  sx={{ color: '#000', '&:hover': { color: '#ff4201' } }}
                />
              </span>
            </DefaultComponents.Tooltip>
          )}
          <span>
            {row?.investorAccount?.accountNumber ??
              row?.participantAccount?.accountNumber ??
              '--'}
          </span>
        </div>
      )
    }
  },
  ...(country === 37
    ? [
        {
          width: 150,
          field: 'cashAccount',
          // headerName: 'Cuenta efectivo',
          headerName: t('cashAccount'),
          valueGetter: (cashAccount: string) => {
            return cashAccount || ' '
          }
        }
      ]
    : []),
  {
    width: 110,
    field: 'fractionQuantity',
    // headerName: 'Cantidad',
    headerName: t('quantity'),
    valueGetter: (fractionQuantity?: number) => {
      return formatNumberWithThousandsSeparator(fractionQuantity, false, false)
    }
  },
  {
    width: 120,
    field: 'commissionPercentage',
    // headerName: '% comisión ',
    headerName: t('commissionPercentage'),
    valueGetter: (commissionPercentage?: number) => {
      if (commissionPercentage == null) return ''
      return `${commissionPercentage.toLocaleString('es-CO', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 4
      })}%`
    }
  },
  {
    width: 130,
    field: 'commissionAmount',
    // headerName: 'Valor comisión',
    headerName: t('valueCommission'),
    valueGetter: (commissionAmount: number) => {
      return formatNumberWithThousandsSeparator(commissionAmount)
    }
  },
  {
    width: 110,
    field: 'valTaxAmount',
    // headerName: 'Imp Comisión',
    headerName: t('valTaxAmount'),
    valueGetter: (valTaxAmount?: number) => {
      return formatNumberWithThousandsSeparator(valTaxAmount)
    }
  },
  {
    width: 110,
    field: 'outFlowTurnoverValue',
    // headerName: 'Monto Salida',
    headerName: t('outFlowTurnoverValue'),
    valueGetter: (outFlowTurnoverValue: number) => {
      return formatNumberWithThousandsSeparator(outFlowTurnoverValue)
    }
  },
  {
    width: 150,
    field: 'netOutFlowTotal',
    // headerName: 'Monto Neto Salida',
    headerName: t('netOutFlowTotal'),
    valueGetter: (netOutFlowTotal: number) => {
      return formatNumberWithThousandsSeparator(netOutFlowTotal)
    }
  },
  {
    width: 130,
    field: 'returnTurnoverValue',
    // headerName: 'Monto Regreso',
    headerName: t('returnAmount'),
    valueGetter: (returnTurnoverValue: number) => {
      return formatNumberWithThousandsSeparator(returnTurnoverValue)
    }
  },
  {
    width: 130,
    field: 'referenceAllocId',
    // headerName: 'Referencia',
    headerName: t('reference'),
    valueGetter: (_: TRenderCellParams, data: any) => {
      return data?.referenceAllocId && data.referenceAllocId !== ''
        ? data.referenceAllocId
        : data?.reference && data.reference !== ''
          ? data.reference
          : ' '
    }
  },
  {
    width: 130,
    field: 'sourceQuoteType',
    // headerName: 'Origen',
    headerName: t('sourceQuoteType'),
    valueGetter: (_: TRenderCellParams, data: any) => {
      return data?.sourceQuoteType?.description ?? ' '
    }
  },
  {
    width: 130,
    field: 'investor',
    // headerName: 'Custodio',
    headerName: t('custodian'),
    valueGetter: (_: TRenderCellParams, data: any) => {
      return data.custodian?.code ?? ' '
    }
  },
  {
    width: 150,
    field: 'packageStatus',
    headerName: 'Estado del paquete'
    // valueGetter: (_: TRenderCellParams, data: any) => {
    //   return data.custodian?.code ?? ' '
    // }
  },
  {
    width: 150,
    field: 'packageCode',
    // headerName: 'Código paquete',
    headerName: t('packageCode'),
    valueGetter: (_: TRenderCellParams, data: any) => {
      return data?.packageCode ?? ' '
    }
  },
  ...(country === 37
    ? [
        {
          width: 150,
          field: 'ficAdministrator.description',
          // headerName: '	Administrador FIC',
          headerName: t('ficAdministrator'),
          valueGetter: (_: TRenderCellParams, data: any) => {
            return data?.ficAdministrator?.shortName ?? ' '
          }
        },
        {
          width: 150,
          field: 'ficAdministrator.code',
          // headerName: 'Cód. FIC',
          headerName: t('ficCode'),
          // description: 'Código Administrador',
          description: t('ficCodeDescription'),
          valueGetter: (_: TRenderCellParams, data: any) => {
            return data?.ficAdministrator?.code ?? ' '
          }
        }
      ]
    : []),
  {
    width: 150,
    field: 'custodianStatus',
    // headerName: 'Estado custodio',
    headerName: t('custodianStatus'),
    valueGetter: (_: TRenderCellParams, data: any) => {
      return data?.custodianStatus?.shortName ?? ' '
    },
    renderCell: (_: TRenderCellParams, data: any) => {
      return <StatusChip value={data?.custodianStatus?.shortName ?? ' '} />
    }
  }
]

```

## src/features/operations-management/constants/FullViewBeneficiaries.ts

```typescript
export const FRACTION_ERROR_CODES = {
  FRACTION_CANNOT_MODIFIED_WITH_MASTER_ACCOUNT:
    'FRACTION_CANNOT_MODIFIED_WITH_MASTER_ACCOUNT',
  THIRD_PARTIES_COLLECTIVE_PORTFOLIOS_NOT_CORRESPOND_TO_ORIGIN:
    'THIRD_PARTIES_COLLECTIVE_PORTFOLIOS_NOT_CORRESPOND_TO_ORIGIN',
  FRACTION_TOTAL_QUANTITY_NOT_CORRESPOND_QUANTITY_TRADE:
    'FRACTION_TOTAL_QUANTITY_NOT_CORRESPOND_QUANTITY_TRADE',
  OWN_POSITION_NOT_CORRESPOND_TO_ORIGIN:
    'OWN_POSITION_NOT_CORRESPOND_TO_ORIGIN',
  FRACTION_TOTAL_QUANTITY_EXCEED_QUANTITY_TRADE:
    'FRACTION_TOTAL_QUANTITY_EXCEED_QUANTITY_TRADE',
  ACCOUNT_NOT_ACTIVE: 'ACCOUNT_NOT_ACTIVE',
  PARTICIPANT_ACCOUNT_OR_INVESTOR_ACCOUNT_NOT_FOUND:
    'PARTICIPANT_ACCOUNT_OR_INVESTOR_ACCOUNT_NOT_FOUND',
  FINAL_ASSIGNMENT_HAS_ALREADY_SENT: 'FINAL_ASSIGNMENT_HAS_ALREADY_SENT',
  PARTICIPANT_ACCOUNT_DUPLICATED: 'PARTICIPANT_ACCOUNT_DUPLICATED',
  INVESTOR_ACCOUNT_DUPLICATED: 'INVESTOR_ACCOUNT_DUPLICATED',
  OWN_POSITION_ONLY_ONE_FRACTION_ALLOWED:
    'OWN_POSITION_ONLY_ONE_FRACTION_ALLOWED',
  CORRECTION_MASTER_ACCOUNT_NOT_ALLOWED:
    'CORRECTION_MASTER_ACCOUNT_NOT_ALLOWED',
  ERROR_BUSINESS_RULE: 'ERROR_BUSINESS_RULE'
}

```

## src/features/operations-management/constants/assignmentClosureTableLabels.ts

```typescript
export const ASSIGNMENT_CLOSURE_TABLE_LABELS = {
  CAUSAL: 'Causal',
  FECHA_REGISTRO: 'Fecha de registro',
  NUMERO_FOLIO: 'N° de Folio',
  FECHA_CUMPLIMIENTO: 'Fecha de cumplimiento',
  PUNTA: 'Punta',
  PARTICIPANTE: 'Participante'
} as const

export const MAX_FRACTIONS = 99

```

## src/features/operations-management/constants/assignmentOptionMode.ts

```typescript
export enum AssignmentOptionMode {
  NEW = 'new',
  EDIT = 'edit'
}

```

## src/features/operations-management/constants/countriesCodes.ts

```typescript
export const CountriesCodes = Object.freeze({
  CO: 'CO',
  PE: 'PE',
  CL: 'CL'
})

```

## src/features/operations-management/constants/endpoints.ts

```typescript
export const OPERATIONS_API_ROUTES = {
  CREATE_FRACTION: (
    tradeId: number | string | null,
    sideId: number | string | null,
    repo: boolean | null
  ) =>
    `/fractionation/${repo ? 'repo-operation' : 'counted-operation'}/create-fractions/trade/${tradeId}/side/${sideId}`,

  UPDATE_FRACTION: (
    tradeId: number | string | null,
    sideId: number | string | null,
    repo: boolean | null
  ) =>
    `/fractionation/${repo ? 'repo-operation' : 'counted-operation'}/update-assignments/trade/${tradeId}/side/${sideId}`,

  VALIDATE_ACCOUNT: (
    accountNumber: string | number,
    tradeId: number | string | null,
    sideId: number | string | null,
    repo: boolean | null
  ) =>
    `/validate/${repo ? 'repo-fraction' : 'counted-fraction'}/correction/account-fraction/account-number/${accountNumber}/trade/${tradeId}/side/${sideId}`,

  VALIDATE_DEPOSITORY: (
    tradeId: number | string | null,
    sideId: number | string | null,
    repo: boolean | null
  ) =>
    `/validate/${repo ? 'repo-fraction' : 'counted-fraction'}/correction/direct-depositor/trade/${tradeId}/side/${sideId}`,

  VALIDATE_MAXIMUM_QUANTITY: (
    tradeId: number | string | null,
    repo: boolean | null
  ) =>
    `/validate/${repo ? 'repo-fraction' : 'counted-fraction'}/correction/quantity-fractions/trade/${tradeId}`,

  VALIDATE_MAXIMUM_FRACTIONS: (
    tradeId: number | string | null,
    repo: boolean | null
  ) =>
    `/validate/${repo ? 'repo-fraction' : 'counted-fraction'}/correction/maximum-limit-fractions/trade/${tradeId}`,

  RANGE_QUANTITY: (tradeId: number | string | null, repo: boolean | null) =>
    `/validate/${repo ? 'repo-fraction' : 'counted-fraction'}/correction/range-quantity-fractions/trade/${tradeId}`,

  // ---------------------- COMMISSIONS ----------------------
  CALCULATION_COMMISSION_ADD: (
    tradeId: number | string | null,
    countryId: number | undefined,
    repo: boolean | null
  ) =>
    `/calculation/${repo ? 'repo-operation' : 'counted-operation'}/trade/${tradeId}/country/${countryId}`,

  CALCULATION_COMMISSION_EDIT: (
    tradeId: number | string | null,
    repo: boolean | null
  ) =>
    `/calculation/${repo ? 'repo-operation' : 'counted-operation'}/trade/${tradeId}`,

  GET_CALCULATION_TOTAL_AMOUNT: (
    tradeId: string | number,
    sideId: string | number
  ) => `/all-trade/calculation-total-amount/trade/${tradeId}/side/${sideId}`,

  GET_TRADE_BY_ID: (tradeId: string | number) => `/trade/${tradeId}`,
  GET_TRADE_SEARCH: () => `/trade/all-trade-id`,
  VALIDATE_ASSIGNMENT: (tradeId: number, side: string) =>
    `/validate/counted-operation/assignment/allow/trade/${tradeId}/side/${side}`,
  GET_CUSTODIAN_OPTIONS: ({ countryId }: { countryId: number }) => {
    const url = `/participants/custodians?countryId=${countryId}`
    return url
  },
  GET_FIC_ADMINISTRATOR_OPTIONS: (page?: number) => {
    const params = new URLSearchParams()
    if (page !== undefined) {
      params.append('page', page.toString())
    }
    return `/fic-administrator?${params.toString()}`
  },
  GET_ASSIGNMENT_ORIGIN_OPTIONS: () =>
    `/type/category/${encodeURIComponent('ORIGEN PUNTA')}`,
  GET_ACCOUNT_VALIDATION: ({
    accountNumber,
    tradeId,
    sideId,
    originId,
    isCorrection
  }: {
    accountNumber: string
    tradeId: number
    sideId: string
    originId: number
    isCorrection?: boolean
  }) =>
    `/validate/counted-fraction/assignment/account-fraction/account-number/${accountNumber}/trade/${tradeId}/side/${sideId}/origin/${originId}?isLocalCorrection=${isCorrection ?? false}`,
  GET_CASH_ACCOUNT: ({
    tradeId,
    sideId
  }: {
    tradeId: number
    sideId: string
  }) =>
    `/validate/counted-fraction/assignment/cud-account/trade/${tradeId}/side/${sideId}`,
  CALCULATION_COUNTED: ({
    tradeId,
    countryId,
    accountNumber,
    accountSourceType
  }: {
    tradeId: number
    countryId: number
    accountNumber: string
    accountSourceType: number
  }) =>
    `/calculation/counted-operation/trade/${tradeId}/country/${countryId}?accountNumber=${accountNumber}&accountSourceType=${accountSourceType}`,
  SAVE_ASSIGNMENT: ({ sideId, tradeId }: { tradeId: number; sideId: string }) =>
    `/fractionation/counted-operation/create-fractions/trade/${tradeId}/side/${sideId}`,
  UPDATE_ASSIGNMENT: ({
    sideId,
    tradeId
  }: {
    tradeId: number
    sideId: string
  }) =>
    `/fractionation/counted-operation/update-assignments/trade/${tradeId}/side/${sideId}`,
  GET_SETTLEMENT: ({
    tradeId,
    side,
    isEditable
  }: {
    tradeId: number
    side: string
    isEditable?: boolean
  }) => {
    let url = `/settlement?tradeId=${tradeId}&sideId=${side}&all=true`
    if (isEditable) {
      url += `&reassignment=true`
    }
    return url
  },
  ASSIGNMENT_CLOSURE_PREVIEW: (userConfirmed?: boolean) =>
    `/assignment-closure/search-by-side${userConfirmed === true ? '?execute=false' : ''}`,
  ASSIGNMENT_CLOSURE_CONFIRM: (userConfirmed?: boolean) =>
    `/assignment-closure/confirm-definitive${userConfirmed === true ? '?execute=false' : ''}`,

  // ---------------------- CORRECTIONS ----------------------
  SAVE_CORRECTION: ({
    sideId,
    tradeId,
    correctionTypeId
  }: {
    tradeId: number
    sideId: string
    correctionTypeId: string
  }) =>
    `/fractionation/counted-operation/update-corrections/trade/${tradeId}/side/${sideId}/correction/${correctionTypeId}`,
  // VERIFY_CORRECTION: ({
  //   sideId,
  //   tradeId
  // }: {
  //   tradeId: number
  //   sideId: number
  // }) =>
  //   `/validate/counted-operation/verify-correction-allowed/trade/${tradeId}/side/${sideId}`,
  CORRECTION_TYPE_OPTIONS: ({
    tradeId,
    sideId
  }: {
    tradeId: number
    sideId: number
  }) =>
    `/validate/counted-operation/correction-dropdown-data/trade/${tradeId}/side/${sideId}`
}

```

## src/features/operations-management/constants/fieldsAssignment.ts

```typescript
export enum FieldsAssignment {
  id = 'id',
  typeId = 'typeId',
  finalBeneficiaryId = 'finalBeneficiaryId',
  finalBeneficiaryName = 'finalBeneficiaryName',
  index = 'index',
  account = 'account',
  investorAccount = 'investorAccount',
  participantAccount = 'participantAccount',
  cashAccount = 'cashAccount',
  source = 'source',
  quantity = 'quantity',
  amount = 'amount',
  commissionPercentage = 'commissionPercentage',
  commission = 'commission',
  impCommission = 'impCommission',
  impCommissionDescription = 'Impuesto comisión',
  netAmount = 'netAmount',
  returnAmount = 'returnAmount',
  custodian = 'custodian',
  hasPreviousCustodian = 'hasPreviousCustodian',
  hasCustodian = 'hasCustodian',
  custodianStatus = 'custodianStatus',
  administrator = 'administrator',
  reference = 'reference',
  valTax = 'valTax',
  isEditable = 'isEditable',
  masterAccount = 'masterAccount',
  isMasterAccount = 'isMasterAccount',
  isPreloadedLocalAccount = 'isPreloadedLocalAccount',
  fraction = 'fraction',
  isNewFraction = 'isNewFraction',
  milaLocal = 'milaLocal',
  referencePackage = 'referencePackage',
  executeCalculationInitial = 'executeCalculationInitial'
}

```

## src/features/operations-management/constants/keysEventDispatch.ts

```typescript
const keysEventDispatch = ['Space', 'Enter']
export default keysEventDispatch

```

## src/features/operations-management/constants/messagesError.ts

```typescript
export const messageErrorAssignmentTranslation = {
  notFoundAccount: 'notFoundAccountMessage',
  notActiveAccount: 'inactiveAccountMessage',
  serviceError: 'serviceErrorMessage',
  masterAccountNotAllowed: 'accountNotAllowedMessage'
}
export const messageErrorAssignment = {
  // notFoundAccount: 'No se encontró una cuenta para el origen definido',
  notFoundAccount: messageErrorAssignmentTranslation.notFoundAccount,
  // notActiveAccount: 'La cuenta títulos no está activa en el depósito',
  notActiveAccount: messageErrorAssignmentTranslation.notActiveAccount,
  // serviceError: 'Error en el servicio',
  serviceError: messageErrorAssignmentTranslation.serviceError,
  // masterAccountNotAllowed: 'No puedes ingresar cuenta master en las correcciones'
  masterAccountNotAllowed:
    messageErrorAssignmentTranslation.masterAccountNotAllowed
}

```

## src/features/operations-management/constants/operationDetails.tsx

```tsx
import { BoxInfo } from 'remoteUtilities/components-mf-utilities'

import { BeneficiaryDetailTab } from '../components/BeneficiaryDetailTab'
import CorrectionDetailSection from '../components/CorrectionDetailSection'
import { TabDescriptor } from '../components/hooks/useOperationTabsData'
import { ModalHistory, Row } from '../types/operationDetails'
import { TRADE_TYPES } from './operations'
import { buildGeneralDataContado, buildGeneralDataRepo } from './tradeDetails'

// export const COUNTRY_EXCLUDED_ID = 35
// export const COUNTRY_RESTRICTED_ID = 135

export const buildDefaultTabs = ({
  t,
  eyeIcon,
  handleJointMembers,
  setModalDetailAccount,
  setIsModalOpen,
  tradeData,
  handleTradeHistory,
  tradeId
}: {
  tradeData?: any
  eyeIcon?: string
  handleTradeHistory?: () => Promise<void>
  tradeId?: string
  handleJointMembers?: (
    client_user: string,
    row: Row,
    setModalDetailAccount: React.Dispatch<
      React.SetStateAction<ModalHistory | null>
    >,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>
  setModalDetailAccount?: (value: any) => void
  t: (key: string, options?: Record<string, string>) => string
  setIsModalOpen?: React.Dispatch<React.SetStateAction<boolean>>
}): TabDescriptor[] => [
  {
    // label: 'Datos Generales',
    label: t('general.title'),
    content: (
      <BoxInfo
        columns={
          tradeData?.trade?.type?.id === TRADE_TYPES.C
            ? buildGeneralDataContado(
                tradeData,
                !!eyeIcon,
                eyeIcon || '',
                handleTradeHistory || (() => Promise.resolve()),
                t
              )
            : buildGeneralDataRepo(
                tradeData,
                !!eyeIcon,
                eyeIcon || '',
                handleTradeHistory || (() => Promise.resolve()),
                t
              )
        }
      />
    )
  },
  {
    // label: 'Beneficiarios Finales',
    label: t('beneficiary.title'),
    content: (
      <BeneficiaryDetailTab
        tradeData={tradeData || {}}
        tradeId={tradeId}
        handleJointMembers={handleJointMembers || (() => Promise.resolve())}
        setModalDetailAccount={setModalDetailAccount || (() => {})}
        setIsModalOpen={setIsModalOpen || (() => {})}
      />
    )
  },
  {
    // label: 'Correcciones',
    label: t('corrections.title'),
    content: <CorrectionDetailSection trade={tradeData?.trade} />
  }
]

```

## src/features/operations-management/constants/operations.ts

```typescript
export const COUNTRIES = [
  { id: 35, name: 'CHILE' },
  { id: 37, name: 'COLOMBIA' },
  { id: 135, name: 'PERÚ' }
] as const

export const FILE_EXTENSIONS = {
  PDF: 'pdf',
  ZIP: 'zip',
  CSV: 'csv'
} as const

export const MESSAGES = {
  SERVER_ERROR:
    'Ha ocurrido un error en el servidor. Por favor, inténtelo de nuevo más tarde.',
  DOWNLOAD_CONFIRM: (count: number) =>
    `¿Está seguro de generar ${count} comprobante/s con esta información?`
} as const

export const ACTIONS = {
  DOWNLOAD_PDF: 'download-pdf',
  DOWNLOAD_CSV: 'download-csv',
  SIDE_PANEL_TRUE: 'side-panel-true',
  FOLIO_TRANSFER: 'folio-transfer',
  ASSIGNMENT_CLOSURE: 'assignment-closure'
} as const

export const DOWNLOAD_CONFIRMATION = (count: number) => ({
  title: 'Confirmación de descarga',
  message: `¿Está seguro de generar ${count} comprobante/s con esta información?`,
  variant: 'warning',
  textSuccess: 'Sí',
  textCancel: 'No'
})

export const SERVER_ERROR_MODAL = {
  title: 'Error en el servidor',
  message:
    'Ha ocurrido un error en el servidor. Por favor, inténtelo de nuevo más tarde.',
  variant: 'error'
} as const

export const ERROR_MESSAGES = {
  // SERVER_ERROR:
  //   'Ha ocurrido un error en el servidor. Por favor, inténtelo de nuevo más tarde.',
  SERVER_ERROR: 'message',
  CONFIRM_DOWNLOAD: (count: number) =>
    `¿Está seguro de generar ${count} comprobante/s con esta información?`
} as const

export const TRADE_TYPES = {
  R: 61,
  C: 60
} as const

export const BASE_TRADE_PATH = '/trade'
export const BASE_TRADE_PATH_CUSTODIAN = '/trade/custodian'
export const BASE_TRADE_DOWNLOAD_PATH = '/trade/csv'
export const QUERY_KEYS = {
  COUNTRY_ID: 'countryId',
  MATCH_ID: 'matchId',
  START_MATCH_DATE: 'startMatchDate',
  END_MATCH_DATE: 'endMatchDate',
  START_CLEARING_DATE: 'startClearingDate',
  END_CLEARING_DATE: 'endClearingDate',
  PARTICIPANT_ID: 'participantId'
} as const

export const SIDE_TYPES = {
  BUY: { id: '1', label: 'Compra' },
  SELL: { id: '2', label: 'Venta' },
  BUY_AND_SELL: 'Compra y Venta',
  NO_CHARGE: 'sin generar cobro'
} as const

export const TRADE_TYPE_DESCRIPTIONS = {
  REPO: 'REPO',
  CONTADO: 'CONTADO'
} as const

```

## src/features/operations-management/constants/timeShadeOperation.ts

```typescript
export const timeShadeOperation = 10

```

## src/features/operations-management/constants/tradeDetails.tsx

```tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
import { formatNumberWithThousandsSeparator } from 'remoteUtilities/formattedNumber'

type HandleHistoryFn = (
  tradeId: string,
  matchId: number,
  matchDate: Date
) => void | Promise<void>
type HandleHistoryCallback = () => void | Promise<void>
type TradeData = any // aquí puedes usar tu tipo real

//Mapeo de campos para operaciones contado
export const buildGeneralDataContado = (
  tradeData: TradeData,
  canViewEyeIcon: boolean,
  eyeIcon: string,
  handleTradeHistory: HandleHistoryFn,
  t: (value: string, options?: Record<string, string>) => string
) => [
  {
    title: 'Column 1',
    rows: [
      {
        // label: 'Fecha de Registro',
        label: t('general.registrationDate'),
        value: tradeData?.trade?.matchDate
      },
      {
        // label: 'Días al cumplimiento',
        label: t('general.daysToSettlement'),
        value: tradeData?.trade?.daysToSettlement
      },
      {
        // label: 'Tipo de instrumento',
        label: t('general.instrumentType'),
        value: tradeData.trade?.securityTitle?.class?.description
      },
      {
        // label: 'ISIN',
        label: t('general.isin'),
        value: tradeData.trade?.securityTitle?.isin
      },
      {
        // label: 'Monto',
        label: t('general.amount'),
        value:
          tradeData?.trade?.quantity && tradeData?.trade?.price
            ? formatNumberWithThousandsSeparator(tradeData?.trade?.amount)
            : ''
      },
      {
        // label: 'Rueda de negociación',
        label: t('general.negotiation'),
        value: tradeData.trade?.tradingSession?.description
      },
      canViewEyeIcon && {
        // label: 'Seguimiento',
        label: t('general.tracking'),
        value: historyButton(eyeIcon, () =>
          handleTradeHistory(
            tradeData?.trade?.id?.toString() || '',
            tradeData?.trade?.matchId,
            tradeData?.trade?.matchDate
          )
        )
      }
    ]
  },
  {
    title: 'Column 2',
    rows: [
      {
        // label: 'Folio',
        label: t('general.folio'),
        value: tradeData?.trade?.matchId
      },
      // { label: 'Depósito', value: tradeData?.trade?.depository?.description ?? '' },
      {
        // label: 'País de origen del activo',
        label: t('general.countryOfOrigin'),
        value: tradeData?.trade?.country?.code
      },
      {
        // label: 'Tipo de Operación',
        label: t('general.operationType'),
        value: tradeData?.trade?.type?.id === 61 ? 'Repo' : 'Contado'
      },
      {
        // label: 'Cantidad',
        label: t('general.quantity'),
        value:
          tradeData?.trade?.quantity &&
          formatNumberWithThousandsSeparator(
            tradeData?.trade?.quantity,
            false,
            false
          )
      },
      {
        // label: 'Moneda',
        label: t('general.currency'),
        value: tradeData?.trade?.currency?.code
      },
      {
        // label: 'Indicador anticipo ',
        label: t('general.indicator'),
        value: statusBadge(tradeData?.trade?.resettlementIndicatorAdvance)
      }
    ]
  },
  {
    title: 'Column 3',
    rows: [
      {
        // label: 'Fecha de cumplimiento',
        label: t('general.clearingDate'),

        value: tradeData?.trade?.clearingDate
      },
      {
        // label: 'Mercado',
        label: t('general.market'),
        value: tradeData.trade?.market?.description
      },
      {
        // label: 'Nemotécnico',
        label: t('general.mnemonic'),
        value: tradeData?.trade?.securityTitle?.mnemonic
      },
      {
        // label: 'Precio',
        label: t('general.price'),
        value: formatNumberWithThousandsSeparator(tradeData?.trade?.price)
      },
      {
        // label: 'Sistema de negociación',
        label: t('general.tradingSystem'),
        value: tradeData.trade?.tradingSystem.description
      },
      {
        // label: 'Estado de la operación',
        label: t('general.operationStatus'),
        value: tradeData?.trade?.status?.shortName
      }
    ]
  }
]

export const buildGeneralDataRepo = (
  tradeData: TradeData,
  canViewEyeIcon: boolean,
  eyeIcon: string,
  handleTradeHistory: HandleHistoryFn,
  t: (value: string, options?: Record<string, string>) => string
) => [
  {
    title: 'Column 1',
    rows: [
      {
        // label: 'Fecha de Registro',
        label: t('general.registrationDate'),
        value: tradeData?.trade?.matchDate
      },
      {
        // label: 'Fecha de cumplimiento regreso',
        label: t('general.returnClearingDate'),
        value: tradeData?.trade?.returnClearingDate
      },
      {
        // label: 'Mercado',
        label: t('general.market'),
        value: tradeData?.trade?.market?.description
      },
      {
        // label: 'Nemotécnico',
        label: t('general.mnemonic'),
        value: tradeData?.trade?.securityTitle?.mnemonic
      },
      {
        // label: 'Tasa Repo',
        label: t('general.repoRate'),
        value: tradeData?.trade?.repoRate
          ? `${tradeData?.trade?.repoRate}%`
          : ' '
      },
      {
        // label: 'Precio regreso',
        label: t('general.returnPrice'),
        value:
          tradeData?.trade?.forwardPrice != null
            ? formatNumberWithThousandsSeparator(tradeData?.trade?.forwardPrice)
            : ' '
      }, // returnTurnoverValue
      {
        // label: 'Rueda de negociación',
        label: t('general.negotiation'),
        value: tradeData?.trade?.tradingSession?.description
      },
      canViewEyeIcon && {
        label: t('general.tracking'),
        value: historyButton(eyeIcon, () =>
          handleTradeHistory(
            tradeData?.trade?.id?.toString() || '',
            tradeData?.trade?.matchId,
            tradeData?.trade?.matchDate
          )
        )
      }
    ]
  },
  {
    title: 'Column 2',
    rows: [
      {
        // label: 'Folio',
        label: t('general.folio'),
        value: tradeData?.trade?.matchId
      },
      {
        // label: 'Días al cumplimiento',
        label: t('general.daysToSettlement'),
        value: tradeData?.trade?.daysToSettlement
      },
      {
        // label: 'Tipo de instrumento',
        label: t('general.instrumentType'),
        value: tradeData.trade?.securityTitle?.class?.description
      },
      {
        // label: 'ISIN',
        label: t('general.isin'),
        value: tradeData?.trade?.securityTitle?.isin
      },
      {
        // label: 'Monto Repo',
        label: t('general.repoAmount'),
        value: formatNumberWithThousandsSeparator(tradeData?.trade?.volume)
      },
      {
        // label: 'Moneda',
        label: t('general.currency'),
        value: tradeData?.trade?.currency?.code
      },
      {
        // label: 'Indicador anticipo ',
        label: t('indicator'),
        value: statusBadge(tradeData?.trade?.resettlementIndicatorAdvance)
      }
    ]
  },
  {
    title: 'Column 3',
    rows: [
      {
        // label: 'Fecha de cumplimiento salida',
        label: t('general.clearingDateOut'),
        value: tradeData?.trade?.clearingDate
      },
      // { label: 'Depósito', value: tradeData?.trade?.depository?.description ?? '' },
      {
        // label: 'País de origen del activo',
        label: t('general.countryOfOrigin'),
        value: tradeData?.trade?.country?.code
      },
      {
        // label: 'Tipo de Operación',
        label: t('general.operationType'),
        value: tradeData?.trade?.type?.id === 61 ? 'Repo' : 'Contado'
      },
      {
        // label: 'Cantidad',
        label: t('general.quantity'),
        value:
          tradeData?.trade?.quantity &&
          formatNumberWithThousandsSeparator(
            tradeData?.trade?.quantity,
            false,
            false
          )
      },
      {
        // label: 'Precio',
        label: t('general.price'),
        value: formatNumberWithThousandsSeparator(tradeData?.trade?.price)
      },
      {
        // label: 'Sistema de negociación',
        label: t('tradingSystem'),
        value: tradeData?.trade?.tradingSystem?.description
      },
      {
        // label: 'Estado de la operación',
        label: t('general.operationStatus'),
        value: tradeData?.trade?.status?.shortName
      }
    ]
  }
]

/** 🔹 Helpers reutilizables */
const statusBadge = (condition?: boolean) => (
  <div
    className={`px-3 border border-transparent w-9 h-8 flex justify-center items-center text-sm font-bold text-black rounded-[4px_20px_4px_4px] ${
      condition ? 'bg-[#9DF4D9]' : 'bg-[#CCCCCC]'
    }`}
  >
    {condition ? 'Sí' : 'No'}
  </div>
)

const historyButton = (eyeIcon: string, onClick: HandleHistoryCallback) => (
  <img
    src={eyeIcon}
    alt="eyeIcon"
    className="cursor-pointer"
    onClick={(e) => {
      e.preventDefault()
      onClick()
    }}
  />
)

```

## src/features/operations-management/hooks/UseOperation.tsx

```tsx
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { useRefreshTable } from 'remoteShell/mf-shell-useRefreshTable'

import { IDetailOperation } from '@/features/operations-management/types'
import {
  JointMemberDetail,
  ModalHistory,
  Row
} from '@/features/operations-management/types/operationDetails'

import STORAGE_KEYS from '@/shared/constants/storageKeys'
import { getInvestorAccountDetails, getTradesDetails } from '@/shared/services'
import { getFromLocalStorage } from '@/shared/utils/localStorage'

export const useOperation = () => {
  const client_user = getFromLocalStorage(STORAGE_KEYS.USERNAME) as string
  const [loading, setLoading] = useState(false)
  const { tradeId } = useParams<{ tradeId: string }>()
  const [isToastVisible, setIsToastVisible] = useState<{
    show: boolean
    text: string
  }>({
    show: false,
    text: ''
  })

  const [tradeData, setTradeData] = useState<IDetailOperation>({
    trade: null,
    tradeEquity: null,
    settlement: null,
    canSeeSideBuy: null,
    canSeeSideSell: null
  })
  const [activeTab, setActiveTab] = useState<number>(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalDetailAccount, setModalDetailAccount] =
    useState<ModalHistory | null>(null)

  const navigate = useNavigate()

  const handleJointMembers = async (
    client_user: string,
    row: Row,
    setModalDetailAccount: React.Dispatch<
      React.SetStateAction<ModalHistory | null>
    >,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true)
      const investorAccountDetails: JointMemberDetail[] =
        await getInvestorAccountDetails(client_user, row.investorAccount.id)
      const columns = investorAccountDetails.map((detail) => ({
        Tipo: detail.identificationType.description,
        ID: detail.documentNumber,
        Nombre: `${detail.firstName} ${detail.lastName}`
      }))
      setModalDetailAccount({
        title: 'Detalle de la cuenta',
        subtitle: {
          bold: 'Cuenta',
          text: row?.investorAccount?.accountNumber || 'N/A'
        },
        columns: columns
      })
      setIsModalOpen(true)
    } finally {
      setLoading(false)
    }
  }

  const handleTabChange = (index: number) => {
    setActiveTab(index)
  }

  const { loadingTable } = useRefreshTable()
  useEffect(() => {
    const fetchTradeData = async () => {
      try {
        setLoading(true)
        const dataDetails = (await getTradesDetails(
          tradeId,
          client_user
        )) as any
        if (dataDetails.length < 1) {
          // continue
        } else {
          setTradeData({
            trade: dataDetails.trade,
            tradeEquity: dataDetails.tradeEquity,
            settlement: dataDetails.settlement,
            canSeeSideBuy: dataDetails?.canSeeSideBuy,
            canSeeSideSell: dataDetails?.canSeeSideSell
          })
        }
      } finally {
        setLoading(false)
      }
    }

    fetchTradeData()
  }, [client_user, tradeId, navigate, loadingTable])

  return {
    tradeData,
    navigate,
    loading,
    tradeId,
    isToastVisible,
    setIsToastVisible,
    activeTab,
    handleTabChange,
    isModalOpen,
    setIsModalOpen,
    modalDetailAccount,
    handleJointMembers,
    setModalDetailAccount
  }
}

```

## src/features/operations-management/hooks/useAssignmentAlert.ts

```typescript
import { useCallback, useState } from 'react'

import useGenerateLogs from '@/shared/hooks/useGenerateLogs'
import useTranslate from '@/shared/hooks/useTranslate'
import { type ModalAlertState, type ToastState } from '@/shared/types/Alerts'

export type KeysVariants =
  | 'modal'
  | 'error_service'
  | 'OWN_POSITION_ONLY_ONE_FRACTION_ALLOWED'
export type AlertAction =
  | {
      variant: KeysVariants
      info?: null | Partial<ModalAlertState>
    }
  | { variant: 'toast'; info?: null | Partial<ToastState> }
export type HandleAlertAction = ({ variant, info }: AlertAction) => void
const useAssignmentAlert = () => {
  const { generateLogs } = useGenerateLogs()
  const [modalAlert, setModalAlert] =
    useState<Partial<ModalAlertState> | null>()
  const [toast, setToast] = useState<Partial<ToastState> | null>()
  const { t } = useTranslate({
    keyPrefix: 'operationDetail.tabs.beneficiary.modalAssignment'
  })
  const changeAlert = useCallback(({ variant, info }: AlertAction) => {
    {
      if (variant === 'modal') {
        setModalAlert({
          orientation: 'horizontal',
          ...info,
          onClick: () => {
            setModalAlert(null)
            info?.onClick?.()
          }
        })
      } else if (variant === 'OWN_POSITION_ONLY_ONE_FRACTION_ALLOWED') {
        setModalAlert({
          open: true,
          // title:
          //   'La punta es de origen posición propia y solo puede tener 1 beneficiario final.',
          title: t('messageOriginOwn'),
          variant: 'warning',
          // textSuccess: 'Volver',
          textSuccess: t('back'),
          onClick: () => {
            setModalAlert(null)
            info?.onClick?.()
          }
        })
      } else if (variant === 'error_service') {
        setModalAlert({
          open: true,
          // title: 'Ocurrió un error inesperado',
          title: t('titleErrorService'),
          variant: 'error',
          // textSuccess: 'Volver',
          textSuccess: t('back'),
          onClick: () => {
            generateLogs({
              actionType: 'Error en servicio',
              actionDestination:
                info?.message ||
                'Ocurrió un error al consumir el servicio para obtener los datos.'
            })
            setModalAlert?.(null)
            const valueInfo = info
            valueInfo?.onClick?.()
          },
          className: 'w-[427px] gap-4 py-12 px-6',
          message: t('messageErrorService')
        })
      } else if (variant === 'toast') {
        setToast({
          ...info,
          onClose: () => {
            info?.onClose?.()
            setToast(null)
          }
        })
      }
    }
  }, [])
  return { modalAlert, toast, changeAlert, setModalAlert, setToast }
}

export default useAssignmentAlert

```

## src/features/operations-management/hooks/useAssignmentClosureConfirm.tsx

```tsx
import { useState } from 'react'

import { ModalAlertState } from '@/features/reports/types'

import useGenerateLogs from '@/shared/hooks/useGenerateLogs'

import { ASSIGNMENT_CLOSURE_TABLE_LABELS } from '../constants/assignmentClosureTableLabels'
import {
  confirmAssignmentClosure,
  AssignmentClosureConfirmPayload
} from '../services/assignmentClosureService'

const useAssignmentClosureConfirm = (onError?: () => void) => {
  const { generateLogs } = useGenerateLogs()

  const [isConfirming, setIsConfirming] = useState(false)
  const [confirmModalContent, setConfirmModalContent] =
    useState<Partial<ModalAlertState> | null>(null)
  const [failedTradesData, setFailedTradesData] = useState<any[]>([])
  const [showSuccessToast, setShowSuccessToast] = useState(false)

  const handleConfirmAssignmentClosure = async (selectedIds: string[]) => {
    setIsConfirming(true)
    setConfirmModalContent(null)
    try {
      const payload: AssignmentClosureConfirmPayload[] = selectedIds.map(
        (compositeId) => {
          const [tradeId, sideId] = compositeId.split('-')
          return {
            tradeId: parseInt(tradeId),
            sideId: sideId
          }
        }
      )

      const response = await confirmAssignmentClosure(payload, false)

      if (response.errorAssignmentClosure.length === 0) {
        setShowSuccessToast(true)

        const successTradeIds = response.successfulAssignmentClosure.map(
          (item) => ({
            tradeId: item.tradeId,
            sideId: item.side?.id
          })
        )
        const baseMessage =
          'Envio exitoso de la asignación Definitiva de las puntas. Trade-Side: '

        const actionType = buildLogWithLimit(successTradeIds, baseMessage)
        generateLogs({
          actionType,
          actionDestination: 'Asignación definitiva'
        })

        return { success: true }
      } else {
        try {
          const formattedFailedTrades = response.errorAssignmentClosure.map(
            (item) => ({
              [ASSIGNMENT_CLOSURE_TABLE_LABELS.CAUSAL]: item.message,
              [ASSIGNMENT_CLOSURE_TABLE_LABELS.FECHA_REGISTRO]: item.matchDate,
              [ASSIGNMENT_CLOSURE_TABLE_LABELS.NUMERO_FOLIO]:
                item.matchId?.toString(),
              [ASSIGNMENT_CLOSURE_TABLE_LABELS.FECHA_CUMPLIMIENTO]:
                item.clearingDate,
              [ASSIGNMENT_CLOSURE_TABLE_LABELS.PUNTA]: item.side?.description,
              [ASSIGNMENT_CLOSURE_TABLE_LABELS.PARTICIPANTE]:
                item.participant?.code
            })
          )
          setFailedTradesData(formattedFailedTrades)

          const failedTradeIds = response.errorAssignmentClosure.map(
            (item) => ({
              tradeId: item.tradeId,
              sideId: item.side?.id
            })
          )

          const baseMessage =
            'No fue posible enviar la asignación definitiva de las puntas. Trade-Side: '
          const actionType = buildLogWithLimit(failedTradeIds, baseMessage)
          generateLogs({
            actionType,
            actionDestination: 'Asignación definitiva'
          })
        } catch (error) {
          onError?.()
          setConfirmModalContent({
            title: 'Error en el proceso',
            message:
              (error as Error).message ||
              response.errorAssignmentClosure[0]?.message ||
              'Error al procesar cierre de asignación',
            variant: 'error',
            onClick: () => {
              setConfirmModalContent(null)
            }
          })
          generateLogs({
            actionType: `Error al enviar la asignación definitiva de las puntas: ${error}`,
            actionDestination: 'Asignación definitiva'
          })
        }
        return { success: false }
      }
    } catch (error) {
      console.error('Error confirming assignment closure:', error)
      setConfirmModalContent({
        title: 'Error en el servidor',
        message: 'Error al confirmar cierre de asignación',
        variant: 'error',
        onClick: () => setConfirmModalContent(null)
      })

      generateLogs({
        actionType: formatErrorForLog(error),
        actionDestination: 'Asignación definitiva'
      })

      return { success: false }
    } finally {
      setIsConfirming(false)
    }
  }

  const buildLogWithLimit = (
    items: { tradeId: number; sideId?: string }[],
    baseMessage: string,
    maxLength = 250
  ): string => {
    const parts: string[] = []

    for (const { tradeId, sideId } of items) {
      const part = `(${tradeId}-${sideId})`
      const nextText = parts.concat(part).join(', ')

      if ((baseMessage + nextText).length > maxLength) {
        parts.push('...')
        break
      }

      parts.push(part)
    }

    return baseMessage + parts.join(', ')
  }

  const formatErrorForLog = (error: unknown, maxLength = 250): string => {
    let message = ''

    if (error instanceof Error) {
      message = error.message
    } else if (typeof error === 'string') {
      message = error
    } else {
      try {
        message = JSON.stringify(error)
      } catch {
        message = 'Unknown error'
      }
    }

    const base = 'Error al enviar la asignación definitiva: '
    const fullMessage = base + message

    return fullMessage.length > maxLength
      ? fullMessage.slice(0, maxLength - 3) + '...'
      : fullMessage
  }

  return {
    handleConfirmAssignmentClosure,
    isConfirming,
    confirmModalContent,
    setConfirmModalContent,
    failedTradesData,
    setFailedTradesData,
    showSuccessToast,
    setShowSuccessToast
  }
}

export default useAssignmentClosureConfirm

```

## src/features/operations-management/hooks/useAssignmentClosurePreview.tsx

```tsx
import { Checkbox } from '@nuam/common-fe-lib-components'
import { useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'remoteShell/mf-store'

import { USER_TYPES } from '@/shared/constants'
import { getUserInfo } from '@/shared/utils/getInfoUser'

import { ASSIGNMENT_CLOSURE_TABLE_LABELS } from '../constants/assignmentClosureTableLabels'
import {
  getAssignmentClosurePreview,
  AssignmentClosurePayload,
  AssignmentClosurePreviewResponse
} from '../services/assignmentClosureService'

const useAssignmentClosurePreview = (
  onError?: () => void,
  isClosingTimeSecondary?: boolean
) => {
  const [isLoadingPreview, setIsLoadingPreview] = useState(false)
  const [previewData, setPreviewData] =
    useState<AssignmentClosurePreviewResponse | null>(null)
  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const [modalContent, setModalContent] = useState<any>(null)

  const participantId = useSelector(
    (state: RootState) => state.auth.infoUserNubo.participantId
  )
  const { userType } = useSelector(getUserInfo)

  const handleGetAssignmentClosurePreview = async (
    selectedIds: number[],
    userConfirmed = false
  ) => {
    setIsLoadingPreview(true)
    setModalContent(null)
    try {
      const payload: AssignmentClosurePayload[] = selectedIds.map(
        (tradeId) => ({
          tradeId,
          participantId: userType === USER_TYPES.INTERNAL ? null : participantId
        })
      )

      const response = await getAssignmentClosurePreview(
        payload,
        userConfirmed,
        isClosingTimeSecondary
      )
      setPreviewData(response)
      const allIds = response.map((item) => `${item.tradeId}-${item.side.id}`)
      setSelectedItems(allIds)
    } catch (error) {
      console.error(error)
      onError?.()
      setModalContent({
        title: 'Ocurrió un error inesperado',
        message: 'Error al obtener vista previa de cierre de asignación',
        variant: 'error',
        onClick: () => setModalContent(null)
      })
    } finally {
      setIsLoadingPreview(false)
    }
  }

  const formatPreviewDataForTable = () => {
    if (!previewData) return []

    return previewData.map((item) => {
      const compositeId = `${item.tradeId}-${item.side.id}`
      return {
        '': (
          <Checkbox
            checked={selectedItems.includes(compositeId)}
            onChange={(event) => {
              const checked = event.target.checked
              if (checked) {
                setSelectedItems((prev) => [...prev, compositeId])
              } else {
                setSelectedItems((prev) =>
                  prev.filter((id) => id !== compositeId)
                )
              }
            }}
          />
        ),
        [ASSIGNMENT_CLOSURE_TABLE_LABELS.FECHA_REGISTRO]: item.matchDate,
        [ASSIGNMENT_CLOSURE_TABLE_LABELS.NUMERO_FOLIO]: item.matchId,
        [ASSIGNMENT_CLOSURE_TABLE_LABELS.FECHA_CUMPLIMIENTO]: item.clearingDate,
        [ASSIGNMENT_CLOSURE_TABLE_LABELS.PUNTA]: item.side.description,
        [ASSIGNMENT_CLOSURE_TABLE_LABELS.PARTICIPANTE]: item.participant.code
      }
    })
  }

  const getTableColumns = () => {
    if (!previewData) return []

    const allIds = previewData.map((item) => `${item.tradeId}-${item.side.id}`)
    const isAllSelected =
      allIds.length > 0 && allIds.every((id) => selectedItems.includes(id))
    const isIndeterminate =
      selectedItems.length > 0 && selectedItems.length < allIds.length

    const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.checked) {
        setSelectedItems(allIds)
      } else {
        setSelectedItems([])
      }
    }

    return [
      {
        headerName: (
          <Checkbox
            checked={isAllSelected}
            indeterminate={isIndeterminate}
            onChange={handleSelectAll}
          />
        ),
        field: '',
        align: 'left' as const,
        renderCell: (row: Record<string, any>) => row['']
      },
      {
        headerName: ASSIGNMENT_CLOSURE_TABLE_LABELS.FECHA_REGISTRO,
        field: ASSIGNMENT_CLOSURE_TABLE_LABELS.FECHA_REGISTRO,
        align: 'left' as const
      },
      {
        headerName: ASSIGNMENT_CLOSURE_TABLE_LABELS.NUMERO_FOLIO,
        field: ASSIGNMENT_CLOSURE_TABLE_LABELS.NUMERO_FOLIO,
        align: 'left' as const
      },
      {
        headerName: ASSIGNMENT_CLOSURE_TABLE_LABELS.FECHA_CUMPLIMIENTO,
        field: ASSIGNMENT_CLOSURE_TABLE_LABELS.FECHA_CUMPLIMIENTO,
        align: 'left' as const
      },
      {
        headerName: ASSIGNMENT_CLOSURE_TABLE_LABELS.PUNTA,
        field: ASSIGNMENT_CLOSURE_TABLE_LABELS.PUNTA,
        align: 'left' as const
      },
      {
        headerName: ASSIGNMENT_CLOSURE_TABLE_LABELS.PARTICIPANTE,
        field: ASSIGNMENT_CLOSURE_TABLE_LABELS.PARTICIPANTE,
        align: 'left' as const
      }
    ]
  }

  return {
    handleGetAssignmentClosurePreview,
    isLoadingPreview,
    formatPreviewDataForTable,
    getTableColumns,
    selectedItems,
    setSelectedItems,
    modalContent,
    setModalContent,
    previewData,
    setPreviewData
  }
}

export default useAssignmentClosurePreview

```

## src/features/operations-management/hooks/useAssignmentColumns.tsx

```tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react'

import { formatNumberWithThousandsSeparator } from 'remoteUtilities/formattedNumber'

import useTranslate from '@/shared/hooks/useTranslate'
import { type ITrades } from '@/shared/types/trade'
import { parsePercentage } from '@/shared/utils/parsePercentage'

import AssignmentAccountTitle from '../components/AssignmentAccountTitle'
import AssignmentAdministratorOptions from '../components/AssignmentAdministratorFicOptions'
import AssignmentOriginOptions from '../components/AssignmentOriginOptions'
import InputAssignmentTable from '../components/InputAssignmentTable'
import SelectAssignmentTable from '../components/SelectAssignmentTable'
import { CountriesCodes } from '../constants/countriesCodes'
import { FieldsAssignment } from '../constants/fieldsAssignment'
import { type AssignmentCashAccountResponse } from '../services/assignmentCashAccount'
import { handleCalculationAmount } from '../utils/handleCalculationAmount'
import { type HandleAlertAction } from './useAssignmentAlert'
import useGetOriginTrade from './useGetOriginTrade'
import useOptionsAssignment from './useOptionsAssignment'
import { type Fraction } from './useStateFraction'

export const useAssignmentColumns = ({
  side,
  trade,
  updateFraction,
  changeAlert,
  fractions,
  cashAccountDefault
}: {
  side: string
  trade: ITrades | null
  updateFraction: (index: number, updateFraction: Partial<Fraction>) => void
  changeAlert: HandleAlertAction
  fractions?: Fraction[]
  cashAccountDefault: AssignmentCashAccountResponse | null
}) => {
  const origin = useGetOriginTrade({ side, trade })
  const { optionsCustodian, originOptions } = useOptionsAssignment({
    changeAlert,
    sideId: side,
    tradeId: trade?.id as number,
    countryId: trade?.country?.id!
  })
  const { t } = useTranslate({
    keyPrefix: 'operationDetail.tabs.beneficiary.columns'
  })
  const columns = useMemo(() => {
    const columnsTable = [
      {
        // headerName: 'Cuenta títulos',
        headerName: t('accountTitle'),
        field: FieldsAssignment.account,
        width: 122,
        valueGetter: (_: any, fraction: Fraction) => {
          const value = fraction[FieldsAssignment.account]
          return value?.value ?? ''
        },

        renderCell: (params: any) => {
          const fraction = params.row as Fraction
          const source = fraction[FieldsAssignment.source] ?? {
            value: origin?.id ?? 0,
            label: origin?.shortName ?? origin?.description ?? ''
          }
          return (
            <AssignmentAccountTitle
              side={side}
              trade={trade!}
              updateFraction={updateFraction}
              origin={source}
              changeAlert={changeAlert}
              fraction={fraction}
              fractions={fractions}
            />
          )
        }
      },
      {
        // headerName: 'Tipo ID',
        headerName: t('typeId'),
        field: FieldsAssignment.typeId,
        width: 78,
        valueGetter: (_: any, data: Fraction) => {
          const account =
            data[FieldsAssignment.participantAccount] ??
            data[FieldsAssignment.investorAccount]
          return account?.typeId ?? ''
        }
      },
      {
        // headerName: 'Número de Documento',
        headerName: t('documentNumber'),
        field: FieldsAssignment.finalBeneficiaryId,
        width: 182,
        valueGetter: (_: any, data: Fraction) => {
          const account =
            data[FieldsAssignment.participantAccount] ??
            data[FieldsAssignment.investorAccount]
          return account?.documentNumber ?? ''
        }
      },
      {
        // headerName: 'Nombre/Razón social',
        headerName: t('nameBeneficiary'),
        field: FieldsAssignment.finalBeneficiaryName,
        width: 162,
        valueGetter: (_: any, data: Fraction) => {
          const account =
            data[FieldsAssignment.participantAccount] ??
            data[FieldsAssignment.investorAccount]
          return account?.shortName || account?.name || ''
        }
      },
      ...(trade?.country.code === CountriesCodes.CO
        ? [
            {
              // headerName: 'Cuenta efectivo',
              headerName: t('cashAccount'),
              field: FieldsAssignment.cashAccount,
              width: 174,
              valueGetter: (_: any, fraction: Fraction) => {
                const value = fraction[FieldsAssignment.cashAccount]
                return value?.value ?? ''
              },

              renderCell: (params: any) => {
                const fraction = params.row as Fraction
                const value = fraction[FieldsAssignment.cashAccount]
                const changeFractionValue = (newInfo: Partial<Fraction>) => {
                  updateFraction(fraction[FieldsAssignment.index], newInfo)
                }
                return (
                  <InputAssignmentTable
                    currentValue={value?.value}
                    validateNewValue={(value) => {
                      const valid = /^\d{0,20}$/.test(value)
                      return valid
                    }}
                    updateValue={(value) => {
                      changeFractionValue({
                        [FieldsAssignment.cashAccount]: {
                          value,
                          error:
                            value?.length === 0
                              ? { message: t('invalidAccount'), error: true }
                              : undefined
                        }
                      })
                    }}
                    disabled={fraction?.isEditable === false}
                    error={value?.error}
                  />
                )
              }
            }
          ]
        : []),
      {
        // headerName: 'Origen',
        headerName: t('origin'),
        field: FieldsAssignment.source,
        width: 210,
        valueGetter: (_: any, fraction: Fraction) => {
          const value = fraction[FieldsAssignment.source]
          return value?.label ?? ''
        },
        renderCell: (params: any) => {
          const fraction = params.row as Fraction
          return (
            <AssignmentOriginOptions
              updateFraction={updateFraction}
              origin={origin}
              fraction={fraction}
              options={originOptions}
            />
          )
        }
      },
      {
        // headerName: 'Cantidad',
        headerName: t('quantity'),
        field: FieldsAssignment.quantity,
        width: 153,
        valueGetter: (_: any, data: Fraction) => {
          const value = data[FieldsAssignment.quantity]
          return value?.value ?? 0
        },
        renderCell: (params: any) => {
          const fraction = params.row as Fraction
          const value = fraction[FieldsAssignment.quantity]
          return (
            <InputAssignmentTable
              currentValue={value?.value?.toString()}
              initialValue={'0'}
              disabled={fraction?.isEditable === false}
              transformValue={(value) => {
                const numericString = value.replace(/\./g, '')
                const numberValue = Number(numericString)
                const newValue = value.length > 0 ? numberValue : 0
                return formatNumberWithThousandsSeparator(
                  newValue,
                  false,
                  false
                )
              }}
              action={async (value) => {
                const numericString = value.replace(/\./g, '')
                const numberValue = Number(numericString)
                try {
                  const currentValue = `${value}`?.length > 0 ? numberValue : 0

                  await handleCalculationAmount({
                    fraction,
                    trade,
                    side,
                    updateFraction,
                    value: {
                      [FieldsAssignment.quantity]: { value: currentValue }
                    },
                    dataBody: { quantity: currentValue },
                    changeAlert,
                    t
                  })
                  return currentValue.toString()
                } catch {
                  changeAlert({ variant: 'error_service' })
                }
                return value
              }}
              validateNewValue={(value) => {
                const isValid = /^(?:\d+|\d{1,3}(?:\.\d{3})*)$/.test(value)
                return isValid
              }}
              updateValue={(value) => {
                if (value === '') {
                  updateFraction(fraction[FieldsAssignment.index], {
                    [FieldsAssignment.quantity]: { value: 0 }
                  })
                } else if (value) {
                  updateFraction(fraction[FieldsAssignment.index], {
                    [FieldsAssignment.quantity]: {
                      value: Number(value.replace(/\./g, ''))
                    }
                  })
                }
              }}
              error={value?.error}
            />
          )
        }
      },
      {
        // headerName: 'Monto',
        headerName: t('amount'),
        field: FieldsAssignment.amount,
        width: 100,
        valueGetter: (value: any) => {
          return value !== undefined || value !== null || value != ''
            ? formatNumberWithThousandsSeparator(value, true)
            : ''
        }
      },
      {
        // headerName: '% Comisión',
        headerName: t('commissionPercentage'),
        field: FieldsAssignment.commissionPercentage,
        width: 153,
        valueGetter: (_: any, data: Fraction) => {
          const value = data[FieldsAssignment.commissionPercentage]
          const transformValue = value?.endsWith('%') ? value : `${value}%`
          return transformValue?.toString()
        },
        renderCell: (params: any) => {
          const fraction = params.row as Fraction
          const value = fraction[FieldsAssignment.commissionPercentage]
          const transformValue = value?.endsWith('%') ? value : `${value}%`
          const isOriginOwn = fraction[FieldsAssignment.source]?.value === 121
          const validation = /^\d{1,2}(\.\d{0,4})?%?$/

          return (
            <InputAssignmentTable
              currentValue={transformValue}
              action={async (value) => {
                try {
                  const transformValue = parsePercentage(value)
                  const result = await handleCalculationAmount({
                    fraction,
                    trade,
                    side,
                    updateFraction,
                    value: {
                      [FieldsAssignment.commissionPercentage]:
                        value.length > 0 ? value : '0%'
                    },
                    dataBody: {
                      commission:
                        value.length > 0 && transformValue ? transformValue : 0,
                      quantity: fraction[FieldsAssignment.quantity]?.value
                    },
                    changeAlert,
                    t
                  })
                  return result?.[
                    FieldsAssignment.commissionPercentage
                  ] as string
                } catch {
                  changeAlert({ variant: 'error_service' })
                }
              }}
              initialValue={'0%'}
              validateNewValue={(value) => {
                if (value.length === 0) {
                  return true
                }
                const transformValue = parsePercentage(value)
                if (
                  transformValue === null ||
                  transformValue < 0 ||
                  transformValue > 100
                )
                  return false
                else {
                  const isValid = validation.test(transformValue.toString())
                  return isValid
                }
              }}
              disabled={isOriginOwn || fraction?.isEditable === false}
              updateValue={(value?: string) => {
                const transformValue = parsePercentage(value)
                if (
                  transformValue === null ||
                  transformValue < 0 ||
                  transformValue > 100
                ) {
                  updateFraction(fraction[FieldsAssignment.index], {
                    [FieldsAssignment.commissionPercentage]:
                      value && value?.length > 0 ? value : '0%'
                  })
                } else {
                  const isValid = validation.test(transformValue.toString())

                  updateFraction(fraction[FieldsAssignment.index], {
                    [FieldsAssignment.commissionPercentage]: isValid
                      ? transformValue.toString()
                      : '0%'
                  })
                }
              }}
            />
          )
        }
      },
      {
        // headerName: 'Valor comisión',
        headerName: t('valueCommission'),
        field: FieldsAssignment.commission,
        width: 140,
        valueGetter: (value: any) => {
          return value !== undefined || value !== null || value != ''
            ? formatNumberWithThousandsSeparator(value, true)
            : ''
        }
      },
      {
        // headerName: 'IMP comisión',
        headerName: t('commissionTax'),
        // description: 'Impuesto comisión',
        description: t('commissionTaxDescription'),
        field: FieldsAssignment.impCommission,
        width: 140,
        valueGetter: (value: any) => {
          return value !== undefined || value !== null || value != ''
            ? formatNumberWithThousandsSeparator(value, true)
            : ''
        }
      },
      {
        // headerName: 'Monto Neto',
        headerName: t('netAmount'),
        field: FieldsAssignment.netAmount,
        width: 140,
        valueGetter: (value: any) => {
          return value !== undefined || value !== null || value != ''
            ? formatNumberWithThousandsSeparator(value, true)
            : ''
        }
      },
      ...(trade?.type?.description != 'CONTADO'
        ? [
            {
              // headerName: 'Monto Regreso',
              headerName: t('returnAmount'),
              field: FieldsAssignment.returnAmount,
              width: 140,
              valueGetter: (value: any) => {
                return value !== undefined || value !== null || value != ''
                  ? formatNumberWithThousandsSeparator(value, true)
                  : ''
              }
            }
          ]
        : []),
      ...(trade?.country.code === CountriesCodes.CO ||
      trade?.country.code === CountriesCodes.PE
        ? [
            {
              // headerName: 'Custodio',
              headerName: t('custodian'),
              field: FieldsAssignment.custodian,
              width: 186,
              valueGetter: (_: any, data: Fraction) => {
                const value = data[FieldsAssignment.custodian]
                const valueCustodianPrevious = value?.name ?? value?.shortName
                return valueCustodianPrevious ?? ''
              },
              renderCell: (params: any) => {
                const fraction = params.row as Fraction
                const value = fraction[FieldsAssignment.custodian]
                const milaLocal = fraction[FieldsAssignment.milaLocal]

                const disabledOption =
                  fraction[FieldsAssignment.isEditable] === false ||
                  !!milaLocal?.id ||
                  fraction[FieldsAssignment.isMasterAccount]

                return (
                  <SelectAssignmentTable
                    value={value}
                    keyValue="name"
                    onChange={(e) => {
                      updateFraction(fraction[FieldsAssignment.index], {
                        [FieldsAssignment.custodian]: e,
                        [FieldsAssignment.administrator]: !e
                          ? undefined
                          : fraction[FieldsAssignment.administrator],
                        [FieldsAssignment.cashAccount]: !e
                          ? { value: cashAccountDefault?.bankAccount || '' }
                          : fraction[FieldsAssignment.cashAccount],
                        [FieldsAssignment.referencePackage]: !e
                          ? { value: '' }
                          : fraction[FieldsAssignment.referencePackage]
                      })
                    }}
                    options={optionsCustodian}
                    disabled={disabledOption}
                    showClearIndicator={!disabledOption}
                    key={`custodio-${value?.id}`}
                  />
                )
              }
            }
          ]
        : []),
      ...(trade?.country.code === CountriesCodes.CO
        ? [
            {
              // headerName: 'Administrador FIC',
              headerName: t('administratorFIC'),
              field: FieldsAssignment.administrator,
              width: 186,
              valueGetter: (_: any, fraction: Fraction) => {
                const value = fraction[FieldsAssignment.administrator]
                return value?.label ?? ''
              },
              renderCell: (params: any) => {
                const fraction = params.row as Fraction
                return (
                  <AssignmentAdministratorOptions
                    updateFraction={updateFraction}
                    fraction={fraction}
                    changeAlert={changeAlert}
                    cashAccountDefault={cashAccountDefault}
                  />
                )
              }
            }
          ]
        : []),
      {
        // headerName: 'Referencia',
        headerName: t('reference'),
        field: FieldsAssignment.reference,
        width: 186,
        valueGetter: (_: any, fraction: Fraction) => {
          const value = fraction[FieldsAssignment.reference]
          return value?.toString()
        },
        renderCell: (params: any) => {
          const fraction = params.row as Fraction
          const value = fraction[FieldsAssignment.reference]
          return (
            <InputAssignmentTable
              currentValue={value}
              initialValue=""
              validateNewValue={(value) => {
                const valid = /^.{0,50}$/.test(value)
                return valid
              }}
              disabled={fraction?.isEditable === false}
              disabledEvents={['Space']}
              updateValue={async (value) => {
                updateFraction(fraction[FieldsAssignment.index], {
                  [FieldsAssignment.reference]: value
                })
              }}
            />
          )
        }
      },
      {
        headerName: 'Referencia paquete',
        field: FieldsAssignment.referencePackage,
        width: 200,
        renderCell: (params: any) => {
          const fraction = params.row as Fraction
          const value = fraction[FieldsAssignment.referencePackage]
          const disabled =
            fraction?.isEditable === false ||
            !fraction?.[FieldsAssignment.custodian]
          return (
            <InputAssignmentTable
              currentValue={value?.value}
              initialValue=""
              validateNewValue={(value) => {
                const valid = /^[a-zA-Z0-9]{1,3}$$/.test(value)
                return valid
              }}
              disabled={disabled}
              disabledEvents={['Space']}
              updateValue={async (value) => {
                updateFraction(fraction[FieldsAssignment.index], {
                  [FieldsAssignment.referencePackage]: {
                    value
                  }
                })
              }}
              error={value && disabled === false ? value?.error : undefined}
            />
          )
        }
      }
    ]
    return columnsTable
  }, [
    side,
    trade,
    updateFraction,
    origin,
    changeAlert,
    fractions,
    originOptions,
    cashAccountDefault,
    optionsCustodian,
    t
  ])
  return columns
}

```

## src/features/operations-management/hooks/useBeneficiaryDetailAssignment.tsx

```tsx
import { type TFunction } from 'i18next'
import { lazy, Suspense, useMemo } from 'react'
import { useSelector } from 'react-redux'

import { useScheduleValidation } from 'remoteShell/mf-shell-useScheduleValidation'
import { useScreenActions } from 'remoteShell/mf-shell-useScreenActions'
import { RootState } from 'remoteShell/mf-store'
import { Spinner } from 'remoteUtilities/components-mf-utilities'

import { COUNTRY_IDS, USER_TYPES } from '@/shared/constants'
import { OPERATION_DETAIL_ACTIONS } from '@/shared/constants/actionCodes'
import useTranslate from '@/shared/hooks/useTranslate'
import {
  ModalAlertState,
  ModalContentState,
  ToastState
} from '@/shared/types/Alerts'

import { AssignmentOption } from '../components/BeneficiaryToolbar'
import { IDetailOperation } from '../types'
import { DispatchState } from '../types/dispatchState'
import { type SideTab } from '../utils/getSide'
import { useCorrectionFlow } from './useCorrectionFlow'
import useValidateOptionsAssignment from './useValidateOptionsAssignment'

const AssignmentOperation = lazy(
  () => import('../components/AssignmentOperation')
)
type Option<T extends string> = Record<T, (activeTab: number) => void> & {
  disabled?: boolean
  hasPermission?: boolean
}
// comment
const createAssignmentOptions = ({
  activeTab,
  options: { add, correct },
  countryId,
  t
}: {
  activeTab: number
  options: {
    add: Option<'onAddAssignment'>
    correct: Option<'onCorrectAssignment'>
  }
  countryId: number
  t: TFunction<'operaciones', string>
}): AssignmentOption[] => {
  const optionList: AssignmentOption[] = []

  if (add.hasPermission) {
    optionList.unshift({
      id: 'add',
      // label: 'Gestionar asignación',
      label: t('manageAssignment'),
      disabled: add.disabled,
      onClick: async () => {
        await add.onAddAssignment(activeTab)
      }
    })
  }

  if (correct.hasPermission && countryId === COUNTRY_IDS.COLOMBIA) {
    optionList.push({
      id: 'correct',
      // label: 'Corregir Asignación',
      label: t('correctAssignment'),
      disabled: correct.disabled,
      onClick: async () => {
        await correct.onCorrectAssignment(activeTab)
      }
    })
  }

  return optionList
}
const useBeneficiaryDetailAssignment = ({
  activeTab,
  setModalContent,
  tradeData,
  setModalAlertState,
  setToast,
  sideId
}: {
  activeTab: number
  setModalContent?: DispatchState<ModalContentState>
  setModalAlertState?: DispatchState<ModalAlertState>
  tradeData: IDetailOperation
  setToast?: React.Dispatch<React.SetStateAction<ToastState | null>>
  sideId: string
}) => {
  const { hasAction } = useScreenActions()
  const { validate } = useScheduleValidation()
  const { t } = useTranslate({ keyPrefix: 'operationDetail.tabs.beneficiary' })
  const SideId = Number(sideId)

  const countryId = useSelector(
    (state: RootState) => state.auth.infoUserNubo.participantCountry
  )

  const lastModifyDate = useSelector(
    (state: any) => state?.auth?.infoUserNubo?.lastModifyDate
  )

  const isClosingTimeSecondary = useMemo(() => {
    if (!lastModifyDate || !tradeData?.trade) return false
    const today = lastModifyDate.split('T')[0]
    const trade = tradeData.trade
    const dateToCompare =
      trade.type?.description === 'REPO'
        ? trade.returnClearingDate
        : trade.clearingDate
    if (!dateToCompare) return false
    const day = String(dateToCompare).split('T')[0]
    return day === today
  }, [lastModifyDate, tradeData?.trade])

  const { disabledOptions, valueSide } = useValidateOptionsAssignment({
    activeTab: SideId,
    tradeId: tradeData?.trade?.id,
    setModalAlertState
  })

  // Estado para almacenar el resultado de la validación de corrección
  // const [correctionValidationResult, setCorrectionValidationResult] =
  //   useState<CorrectionValidationResponse | null>(null)

  const infoUserNubo = useSelector(
    (state: RootState) =>
      state.auth.infoUserNubo?.[0] || state.auth.infoUserNubo || {}
  )

  // // Ejecutar validación solo una vez en la carga inicial
  // useEffect(() => {
  //   const validateCorrection = async () => {
  //     try {
  //       const result = await getCorrectionValidation(
  //         tradeData?.trade?.id ?? 0,
  //         SideId
  //       )
  //       setCorrectionValidationResult(result)
  //     } catch {
  //       setCorrectionValidationResult(null)
  //     }
  //   }

  //   validateCorrection()
  // }, [activeTab, tradeData?.trade?.id])

  const isInternalUser = infoUserNubo?.userType === USER_TYPES.INTERNAL
  const correctionFlow = useCorrectionFlow({
    isInternalUser,
    tradeId: tradeData?.trade?.id,
    side: valueSide,
    isBillable: disabledOptions?.billable
  })

  const handleAddAssignment = async () => {
    const handleClose = () => {
      setModalContent?.(null)
    }
    await validate({
      actionCode: OPERATION_DETAIL_ACTIONS.MANAGE_ASSIGNMENT,
      isClosingTimeSecondary,
      onSuccess: () => {
        setModalContent?.({
          open: true,
          title: t('btnAssignment'),
          children: (
            <>
              <Suspense fallback={<Spinner />}>
                <AssignmentOperation
                  trade={tradeData}
                  side={valueSide.toString()}
                  handleClose={handleClose}
                  maxFractions={disabledOptions?.maxFractions ?? 0}
                  isOwnPosition={disabledOptions?.isOwnPosition ?? false}
                />
              </Suspense>
            </>
          ),
          ItShouldHaveButtons: false,
          className: 'w-[92%] max-h-full p-4 xl:p-8 gap-3 xl:gap-4 xl:my-8',
          handleClose
        })
      },
      onCancel: () => {
        handleClose()
      }
    })
  }

  const handleCorrectAssignment = async () => {
    await validate({
      actionCode: OPERATION_DETAIL_ACTIONS.CORRECT_ASSIGNMENT,
      isClosingTimeSecondary,
      onSuccess: () => {
        correctionFlow.openCorrectionFlow()
      },
      onCancel: () => {
        // No action needed on cancel
      }
    })
  }

  const hasPermissionAddAssignment = hasAction(
    OPERATION_DETAIL_ACTIONS.MANAGE_ASSIGNMENT
  )
  const hasPermissionCorrectAssignment = hasAction(
    OPERATION_DETAIL_ACTIONS.CORRECT_ASSIGNMENT
  )

  const assignmentOptions = createAssignmentOptions({
    activeTab,
    options: {
      add: {
        onAddAssignment: handleAddAssignment,
        disabled: !disabledOptions.isValidAssignment,
        hasPermission: hasPermissionAddAssignment
      },

      correct: {
        onCorrectAssignment: handleCorrectAssignment,
        disabled: !disabledOptions.isValidCorrection,
        hasPermission: hasPermissionCorrectAssignment
      }
    },
    countryId,
    t
  })

  return {
    assignmentOptions,
    correctionModalProps: {
      confirmationModal: {
        open: correctionFlow.isConfirmationOpen,
        onClose: correctionFlow.handleConfirmationCancel,
        onConfirm: correctionFlow.handleConfirmationAccept,
        isInternalUser,
        sideId: (Number(sideId) - 1) as SideTab,
        tradeId: correctionFlow.tradeId
      },
      correctionModal: {
        open: correctionFlow.isCorrectionOpen,
        onClose: correctionFlow.handleCorrectionClose,
        correctionType: disabledOptions?.correctionType,
        tradeId: correctionFlow.tradeId,
        side: correctionFlow.side?.toString(),
        trade: tradeData?.trade,
        maxFractions: disabledOptions?.maxFractions ?? 0,
        correctionSelected: correctionFlow.correctionType,
        setToast: setToast
      }
    },
    disabledOptions
  }
}

export default useBeneficiaryDetailAssignment

```

## src/features/operations-management/hooks/useControlFractions.ts

```typescript
import { useCallback, useTransition } from 'react'

import { type ITrades } from '@/shared/types/trade'

import { initialFraction } from '../../../shared/constants/initialFraction'
import { type SelectedFractions } from '../components/AssignmentOperation'
import { CountriesCodes } from '../constants/countriesCodes'
import { FieldsAssignment } from '../constants/fieldsAssignment'
import { type HandleAlertAction } from './useAssignmentAlert'
import useGetOriginTrade from './useGetOriginTrade'
import { type Fraction, useStateFraction } from './useStateFraction'
import { useValidationsFractions } from './useValidationsFractions'

export const useControlFractions = ({
  side,
  changeAlert,
  isCorrection = false,
  isOwnPosition = false,
  trade
}: {
  side: string
  isCorrection?: boolean
  changeAlert: HandleAlertAction
  isOwnPosition?: boolean
  trade: ITrades | null
}) => {
  const tradeId = trade?.id
  const limitQuantity = trade?.quantity || 0
  const origin = useGetOriginTrade({ side, trade })
  const countryTrade = trade?.country
  const [, startTransition] = useTransition()
  const {
    fractions,
    setFractions,
    settlement,
    cashAccountDefault,
    setSettlement
  } = useStateFraction({
    tradeId,
    side,
    changeAlert
  })

  const { validations } = useValidationsFractions({
    fractions,
    limitQuantity,
    isCorrection,
    countryCodeTrade: countryTrade?.code as keyof typeof CountriesCodes,
    changeAlert
  })

  const updateFraction = useCallback(
    (index: number, updateFraction: Partial<Fraction>) => {
      startTransition(() => {
        setFractions((prevFractions) => {
          const copyFractions: Fraction[] = [...prevFractions]
          const id = updateFraction?.[FieldsAssignment.id]
          const fractionIndex = copyFractions[index]?.[FieldsAssignment.id]
          if (id ? fractionIndex === id : true) {
            copyFractions[index] = {
              ...copyFractions[index],
              ...updateFraction
            }
          } else if (id) {
            let newUpdateFraction: Fraction | undefined
            for (let index = 0; index < copyFractions.length; index++) {
              const element = copyFractions[index]
              if (element[FieldsAssignment.id] === id) {
                newUpdateFraction = element
                break
              }
            }
            if (newUpdateFraction) {
              copyFractions[newUpdateFraction[FieldsAssignment.index]] = {
                ...newUpdateFraction,
                ...updateFraction
              }
            }
          }
          return copyFractions
        })
      })
    },
    [setFractions]
  )

  const othersValidations = validations?.othersValidations
  const addFraction = useCallback(() => {
    startTransition(() => {
      setFractions((prevFractions) => {
        if (isOwnPosition && prevFractions.length >= 1) {
          changeAlert({
            variant: 'OWN_POSITION_ONLY_ONE_FRACTION_ALLOWED'
          })
          return prevFractions
        } else {
          const copyFractions: Fraction[] = [...prevFractions]
          for (
            let index = 0, length = copyFractions.length;
            index < length;
            index++
          ) {
            const element = copyFractions[index]
            element[FieldsAssignment.index] = index + 1
          }
          const quantity =
            limitQuantity - (othersValidations?.quantityAvailableToAssign || 0)
          const id = crypto.randomUUID()
          const newFractions = [
            {
              ...initialFraction,
              [FieldsAssignment.index]: 0,
              [FieldsAssignment.id]: id,
              [FieldsAssignment.source]: origin?.id
                ? {
                    value: origin?.id,
                    label: origin?.shortName ?? origin?.description ?? ''
                  }
                : undefined,
              [FieldsAssignment.quantity]: {
                value: quantity
              },
              [FieldsAssignment.cashAccount]: {
                value: !isCorrection
                  ? (cashAccountDefault?.bankAccount ?? '')
                  : ''
              },
              [FieldsAssignment.isNewFraction]: true
            },
            ...copyFractions
          ]
          return newFractions
        }
      })
    })
  }, [
    limitQuantity,
    othersValidations?.quantityAvailableToAssign,
    origin,
    cashAccountDefault,
    setFractions
  ])

  const deleteFractions = (idFractions: SelectedFractions['ids']) => {
    startTransition(() => {
      setFractions((prevFractions) => {
        const copyFractions: Fraction[] = []
        let indexFraction = 0
        for (
          let index = 0, length = prevFractions.length;
          index < length;
          index++
        ) {
          const element = prevFractions[index]
          if (!idFractions.has(element.id as string)) {
            element[FieldsAssignment.index] = indexFraction
            copyFractions.push(element)
            indexFraction++
          }
        }
        return copyFractions
      })
    })
  }
  const deleteCustodianFromFractions = (
    selectFractions: SelectedFractions['fractions']
  ) => {
    startTransition(() => {
      setFractions((prevFractions) => {
        const newFractions: Fraction[] = [...prevFractions]
        for (
          let index = 0, length = selectFractions.length;
          index < length;
          index++
        ) {
          const fraction = selectFractions[index]
          const prevFraction = newFractions[fraction.index]
          if (
            fraction[FieldsAssignment.id] ===
              prevFraction[FieldsAssignment.id] &&
            fraction[FieldsAssignment.isEditable] !== false
          ) {
            prevFraction[FieldsAssignment.custodian] = null
            prevFraction[FieldsAssignment.administrator] = null
          }
        }
        return newFractions
      })
    })
  }

  return {
    fractions,
    settlement,
    validations,
    addFraction,
    deleteFractions,
    deleteCustodianFromFractions,
    updateFraction,
    setSettlement,
    cashAccountDefault
  }
}

```

## src/features/operations-management/hooks/useCorrectionColumns.tsx

```tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useMemo, useState } from 'react'

import { formatNumberWithThousandsSeparator } from 'remoteUtilities/formattedNumber'

import useTranslate from '@/shared/hooks/useTranslate'
import { type BusinessType } from '@/shared/types'
import { type Participant } from '@/shared/types/participant'
import { type ITrades } from '@/shared/types/trade'
import { parsePercentage } from '@/shared/utils/parsePercentage'

import AssignmentAccountTitle from '../components/AssignmentAccountTitle'
import AssignmentOriginOptions from '../components/AssignmentOriginOptions'
import InputAssignmentTable from '../components/InputAssignmentTable'
import { CountriesCodes } from '../constants/countriesCodes'
import { FieldsAssignment } from '../constants/fieldsAssignment'
import {
  administratorFICOptions,
  type FICOptions
} from '../services/administratorFICOptions'
import { type AssignmentCashAccountResponse } from '../services/assignmentCashAccount'
import { assignmentOriginOptions } from '../services/assignmentOriginOptions'
import { handleCalculationAmount } from '../utils/handleCalculationAmount'
import { type HandleAlertAction } from './useAssignmentAlert'
import { type Fraction } from './useStateFraction'

export const useCorrectionColumns = ({
  origin,
  side,
  trade,
  updateFraction,
  changeAlert,
  fractions,
  custodian,
  cashAccountDefault,
  correctionType
}: {
  side: string
  trade: ITrades | null
  updateFraction: (index: number, updateFraction: Partial<Fraction>) => void
  origin: BusinessType
  changeAlert: HandleAlertAction
  fractions?: Fraction[]
  custodian: Participant | null
  cashAccountDefault: AssignmentCashAccountResponse | null
  correctionType?: string
}) => {
  const { t } = useTranslate({
    keyPrefix: 'operationDetail.tabs.beneficiary.columns'
  })
  const [optionsFicAdministrator, setOptionsFicAdministrator] = useState<
    FICOptions[]
  >([])
  const [originOptions, setOriginOptions] = useState<BusinessType[]>([])
  const changeOriginOptions = (value: BusinessType[]) => {
    setOriginOptions(value)
  }
  const handleGetAssignmentOriginOptions = useCallback(async () => {
    try {
      await assignmentOriginOptions({ changeOptions: changeOriginOptions })
    } catch {
      changeAlert({
        variant: 'error_service',
        // info: { message: 'Error al cargar las opciones de origen' }
        info: { message: t('errorLoadingOriginOptions') }
      })
    }
  }, [])
  const changeOptions = (value: FICOptions[]) => {
    setOptionsFicAdministrator(value)
  }
  const handleGetAdministrationFICOptions = useCallback(async () => {
    try {
      await administratorFICOptions({ changeOptions })
    } catch {
      changeAlert({
        variant: 'error_service',
        // info: { message: 'Error al cargar las opciones de administrador FIC' }
        info: { message: t('errorLoadingFICOptions') }
      })
    }
  }, [])
  useEffect(() => {
    handleGetAssignmentOriginOptions()
  }, [handleGetAssignmentOriginOptions])

  useEffect(() => {
    handleGetAdministrationFICOptions()
  }, [handleGetAdministrationFICOptions])

  const columns = useMemo(() => {
    const columnsTable = [
      {
        // headerName: 'Cuenta títulos',
        headerName: t('accountTitle'),
        field: FieldsAssignment.account,
        width: 122,
        renderCell: (params: any) => {
          const fraction = params.row as Fraction
          const source = fraction[FieldsAssignment.source] ?? {
            value: origin?.id ?? 0,
            label: origin?.shortName ?? origin?.description ?? ''
          }

          return (
            <AssignmentAccountTitle
              side={side}
              trade={trade!}
              updateFraction={updateFraction}
              origin={source}
              changeAlert={changeAlert}
              fraction={fraction}
              fractions={fractions}
              isCorrection={true}
            />
          )
        }
      },
      {
        // headerName: 'Tipo ID',
        headerName: t('typeId'),
        field: FieldsAssignment.typeId,
        width: 78,
        valueGetter: (_: any, data: Fraction) => {
          const account =
            data[FieldsAssignment.participantAccount] ??
            data[FieldsAssignment.investorAccount]
          return account?.typeId ?? ''
        }
      },
      {
        // headerName: 'Número de Documento',
        headerName: t('documentNumber'),
        field: FieldsAssignment.finalBeneficiaryId,
        width: 182,
        valueGetter: (_: any, data: Fraction) => {
          const account =
            data[FieldsAssignment.participantAccount] ??
            data[FieldsAssignment.investorAccount]
          return account?.documentNumber ?? ''
        }
      },
      {
        // headerName: 'Nombre/Razón social',
        headerName: t('nameOrCompanyName'),
        // description: 'Nombre beneficiario final',
        description: t('nameOrCompanyNameDescription'),
        field: FieldsAssignment.finalBeneficiaryName,
        width: 162,
        valueGetter: (_: any, data: Fraction) => {
          const account =
            data[FieldsAssignment.participantAccount] ??
            data[FieldsAssignment.investorAccount]
          return account?.shortName ?? account?.name ?? ''
        }
      },
      ...[
        trade?.country.code === CountriesCodes.CO && {
          // headerName: 'Cuenta efectivo',
          headerName: t('cashAccount'),
          field: FieldsAssignment.cashAccount,
          width: 174,
          renderCell: (params: any) => {
            const fraction = params.row as Fraction
            const value = fraction[FieldsAssignment.cashAccount]
            return (
              <InputAssignmentTable
                currentValue={value?.value}
                action={async (value) => {
                  updateFraction(fraction[FieldsAssignment.index], {
                    [FieldsAssignment.cashAccount]: {
                      value,
                      error: undefined
                      // value.length === 0
                      //   ? { message: 'Cuenta Invalida', error: false }
                      //   : undefined
                    },
                    [FieldsAssignment.id]: fraction.id
                  })
                  return value
                }}
                validateNewValue={(value) => {
                  const valid = /^\d{0,20}$/.test(value)
                  return valid
                }}
                key={`${FieldsAssignment.cashAccount}-${value?.value}`}
                disabled={true}
                error={value?.error}
              />
            )
          }
        }
      ],
      {
        // headerName: 'Origen',
        headerName: t('source'),
        field: FieldsAssignment.source,
        width: 210,
        renderCell: (params: any) => {
          const fraction = params.row as Fraction
          return (
            <AssignmentOriginOptions
              updateFraction={updateFraction}
              origin={origin}
              fraction={fraction}
              options={originOptions}
            />
          )
        }
      },
      {
        // headerName: 'Cantidad',
        headerName: t('quantity'),
        field: FieldsAssignment.quantity,
        width: 153,
        renderCell: (params: any) => {
          const fraction = params.row as Fraction
          const value = fraction[FieldsAssignment.quantity]
          return correctionType === 'EXTERNAL' &&
            (fraction[FieldsAssignment.isNewFraction] ||
              fraction[FieldsAssignment.masterAccount] ||
              fraction[FieldsAssignment.isMasterAccount]) ? (
            <InputAssignmentTable
              currentValue={value?.value?.toString()}
              initialValue={'0'}
              disabled={fraction?.isEditable === false}
              transformValue={(value) => {
                const numericString = value.replace(/\./g, '')
                const numberValue = Number(numericString)
                const newValue = value.length > 0 ? numberValue : 0
                return formatNumberWithThousandsSeparator(
                  newValue,
                  false,
                  false
                )
              }}
              action={async (value) => {
                const numericString = value.replace(/\./g, '')
                const numberValue = Number(numericString)
                try {
                  const currentValue = `${value}`?.length > 0 ? numberValue : 0

                  await handleCalculationAmount({
                    fraction,
                    trade,
                    side,
                    updateFraction,
                    value: {
                      [FieldsAssignment.quantity]: { value: currentValue }
                    },
                    dataBody: { quantity: currentValue },
                    changeAlert,
                    t
                  })
                  return currentValue.toString()
                } catch {
                  changeAlert({ variant: 'error_service' })
                }
                return value
              }}
              validateNewValue={(value) => {
                const isValid = /^(?:\d+|\d{1,3}(?:\.\d{3})*)$/.test(value)
                return isValid
              }}
              updateValue={(value) => {
                if (value === '') {
                  updateFraction(fraction[FieldsAssignment.index], {
                    [FieldsAssignment.quantity]: { value: 0 }
                  })
                } else if (value) {
                  updateFraction(fraction[FieldsAssignment.index], {
                    [FieldsAssignment.quantity]: {
                      value: Number(value.replace(/\./g, ''))
                    }
                  })
                }
              }}
              error={value?.error}
            />
          ) : (
            formatNumberWithThousandsSeparator(
              Number(value?.value?.toString()),
              false,
              false
            )
          )
        }
      },
      {
        // headerName: 'Monto',
        headerName: t('amount'),
        field: FieldsAssignment.amount,
        width: 100,
        valueGetter: (value: any) => {
          return value !== undefined || value !== null || value != ''
            ? formatNumberWithThousandsSeparator(value, true)
            : ''
        }
      },
      {
        // headerName: '% Comisión',
        headerName: t('commissionPercentage'),
        field: FieldsAssignment.commissionPercentage,
        width: 153,
        renderCell: (params: any) => {
          const fraction = params.row as Fraction
          const value = fraction[FieldsAssignment.commissionPercentage]
          const rawValue = value == null ? '' : String(value).replace('.', ',')
          const transformValue = rawValue?.endsWith('%')
            ? rawValue
            : `${rawValue}%`
          const isOriginOwn = fraction[FieldsAssignment.source]?.value === 121

          return (
            <InputAssignmentTable
              currentValue={transformValue}
              action={async (value) => {
                try {
                  const transformValue = parsePercentage(value)
                  const result = await handleCalculationAmount({
                    fraction,
                    trade,
                    side,
                    updateFraction,
                    value: {
                      [FieldsAssignment.commissionPercentage]:
                        value.length > 0 ? value : '0%'
                    },
                    dataBody: {
                      commission:
                        value.length > 0 && transformValue ? transformValue : 0,
                      quantity: fraction[FieldsAssignment.quantity]?.value
                    },
                    changeAlert,
                    t
                  })
                  return result?.[
                    FieldsAssignment.commissionPercentage
                  ] as string
                } catch {
                  changeAlert({ variant: 'error_service' })
                }
              }}
              initialValue={'0%'}
              validateNewValue={(value) => {
                if (value.length === 0) {
                  return true
                }
                const transformValue = parsePercentage(value)
                if (
                  transformValue === null ||
                  transformValue < 0 ||
                  transformValue > 100
                )
                  return false
                else {
                  const isValid = /^\d{1,2}(\.\d{0,4})?%?$/.test(
                    transformValue.toString()
                  )
                  return isValid
                }
              }}
              disabled={isOriginOwn || fraction?.isEditable === false}
              key={`${FieldsAssignment.commissionPercentage}-${value}`}
            />
          )
        }
      },
      {
        // headerName: 'Valor comisión',
        headerName: t('valueCommission'),
        field: FieldsAssignment.commission,
        width: 140,
        valueGetter: (value: any) => {
          return value !== undefined || value !== null || value != ''
            ? formatNumberWithThousandsSeparator(value, true)
            : ''
        }
      },
      {
        // headerName: 'IMP comisión',
        headerName: t('commissionTax'),
        // description: 'Impuesto comisión',
        description: t('commissionTaxDescription'),
        field: FieldsAssignment.impCommission,
        width: 140,
        valueGetter: (value: any) => {
          return value !== undefined || value !== null || value != ''
            ? formatNumberWithThousandsSeparator(value, true)
            : ''
        }
      },
      {
        // headerName: 'Monto Neto',
        headerName: t('netAmount'),
        field: FieldsAssignment.netAmount,
        width: 140,
        valueGetter: (value: any) => {
          return value !== undefined || value !== null || value != ''
            ? formatNumberWithThousandsSeparator(value, true)
            : ''
        }
      },
      ...[
        trade?.type?.description != 'CONTADO' && {
          // headerName: 'Monto Regreso',
          headerName: t('returnAmount'),
          field: FieldsAssignment.returnAmount,
          width: 140,
          valueGetter: (value: any) => {
            return value !== undefined || value !== null || value != ''
              ? formatNumberWithThousandsSeparator(value, true)
              : ''
          }
        }
      ],
      // {
      //   headerName: 'Custodio',
      //   field: FieldsAssignment.custodian,
      //   width: 100,
      //   valueGetter: (_: any, data: Fraction) => {
      //     const value = data[FieldsAssignment.custodian]
      //     const valueCustodianPrevious = value?.name ?? value?.shortName
      //     const hasCustodian = data[FieldsAssignment.hasCustodian]
      //     const textCustodian = custodian?.shortName ?? custodian?.name
      //     return hasCustodian ? (textCustodian ?? valueCustodianPrevious) : ''
      //   }
      // },
      // ...[
      //   trade?.country.code === 'CO' && {
      //     headerName: 'Administrador FIC',
      //     field: FieldsAssignment.administrator,
      //     width: 186,
      //     renderCell: (params: any) => {
      //       const fraction = params.row as Fraction
      //       const value = fraction[FieldsAssignment.administrator]
      //       return (
      //         <AssignmentAdministratorOptions
      //           value={value}
      //           updateFraction={updateFraction}
      //           fraction={fraction}
      //           changeAlert={changeAlert}
      //           options={optionsFicAdministrator}
      //           cashAccountDefault={cashAccountDefault}
      //         />
      //       )
      //     }
      //   }
      // ],
      {
        // headerName: 'Referencia',
        headerName: t('reference'),
        field: FieldsAssignment.reference,
        width: 186,
        renderCell: (params: any) => {
          const fraction = params.row as Fraction
          const value = fraction[FieldsAssignment.reference]
          return (
            <InputAssignmentTable
              currentValue={value}
              initialValue=""
              action={async (value) => {
                updateFraction(fraction[FieldsAssignment.index], {
                  [FieldsAssignment.reference]: value
                })
                return value
              }}
              validateNewValue={(value) => {
                const valid = /^.{0,50}$/.test(value)
                return valid
              }}
              disabled={fraction?.isEditable === false}
              disabledEvents={['Space']}
            />
          )
        }
      }
    ].filter((item) => item !== false)
    return columnsTable
  }, [
    side,
    trade,
    updateFraction,
    origin,
    changeAlert,
    fractions,
    originOptions,
    optionsFicAdministrator,
    custodian,
    cashAccountDefault
  ])
  return columns
}

```

## src/features/operations-management/hooks/useCorrectionFlow.ts

```typescript
import { useState } from 'react'

interface CorrectionFlowState {
  isConfirmationOpen: boolean
  isCorrectionOpen: boolean
  correctionType?: {
    label: string
    value: string
  }
}

interface UseCorrectionFlowProps {
  isInternalUser: boolean
  tradeId?: string | number
  side?: number | string
  isBillable?: boolean
}

export const useCorrectionFlow = ({
  isInternalUser,
  tradeId,
  side,
  isBillable
}: UseCorrectionFlowProps) => {
  const [state, setState] = useState<CorrectionFlowState>({
    isConfirmationOpen: false,
    isCorrectionOpen: false,
    correctionType: undefined
  })

  const openCorrectionFlow = () => {
    // Operaciones Repo van directamente al modal de corrección
    if (isBillable) {
      setState({
        isConfirmationOpen: true,
        isCorrectionOpen: false,
        correctionType: undefined
      })
      return
    }

    // Operaciones Contado requieren confirmación primero
    setState({
      isConfirmationOpen: false,
      isCorrectionOpen: true,
      correctionType: undefined
    })
  }

  const handleConfirmationAccept = (selectedOption?: {
    label: string
    value: string
  }) => {
    setState({
      isConfirmationOpen: false,
      isCorrectionOpen: true,
      correctionType: selectedOption
    })
  }

  const handleConfirmationCancel = () => {
    setState({
      isConfirmationOpen: false,
      isCorrectionOpen: false,
      correctionType: undefined
    })
  }

  const handleCorrectionClose = () => {
    setState({
      isConfirmationOpen: false,
      isCorrectionOpen: false,
      correctionType: undefined
    })
  }

  return {
    // State
    isConfirmationOpen: state.isConfirmationOpen,
    isCorrectionOpen: state.isCorrectionOpen,
    correctionType: state.correctionType,
    tradeId,
    side,

    // Actions
    openCorrectionFlow,
    handleConfirmationAccept,
    handleConfirmationCancel,
    handleCorrectionClose,

    // Context
    isInternalUser
  }
}

```

## src/features/operations-management/hooks/useCorrectionTableColumns.tsx

```tsx
import { XDataGridLib } from '@nuam/common-fe-lib-components'
import dayjs from 'dayjs'

import { defaultValueField } from 'remoteUtilities/defaultValueField'
import { formatToUserLocalTime } from 'remoteUtilities/formatToUserLocalTime'
import { formattedDate } from 'remoteUtilities/formattedDate'
import { StatusChip } from 'remoteUtilities/statusChip'

import useTranslate from '@/shared/hooks/useTranslate'

import { CorrectionOperation } from '../types/correctionsOperations'

const useCorrectionTableColumns = () => {
  const { t } = useTranslate({
    keyPrefix: 'operationDetail.tabs.beneficiary.columns'
  })
  const columns: XDataGridLib.GridColDef<CorrectionOperation>[] = [
    {
      field: 'fraction',
      //   headerName: 'ID',
      headerName: t('id'),
      minWidth: 40,
      renderCell: (value) => {
        return value.api.getRowIndexRelativeToVisibleRows(value.id)
      }
    },
    {
      field: 'clearingDate',
      //   headerName: 'Fecha de cumplimiento',
      headerName: t('clearingDate'),
      minWidth: 185,
      valueGetter: (_, data) => {
        const date = formattedDate({ date: data?.trade?.clearingDate })
        return defaultValueField({ value: date })
      }
    },
    {
      field: 'requestDate',
      //   headerName: 'Fecha solicitud',
      headerName: t('requestDate'),
      minWidth: 110,
      valueGetter: (_, data) => {
        const date = data?.requestDate
        const dateTransformed = formattedDate({ date })
        return defaultValueField({ value: dateTransformed })
      }
    },
    {
      field: 'requestTime',
      //   headerName: 'Hora solicitud',
      headerName: t('requestTime'),
      minWidth: 110,
      valueGetter: (_, data) => {
        const date = dayjs(`${data?.requestDate} ${data?.requestTime}`).format(
          'YYYY-MM-DDTHH:mm:ss'
        )
        const dateTransformed = formatToUserLocalTime(date)
        return dateTransformed.slice(dateTransformed.indexOf(',') + 1)
      }
    },
    {
      field: 'tittleAccount',
      //   headerName: 'Cuenta Títulos Inicial',
      headerName: t('initialTitleAccount'),
      minWidth: 123,
      valueGetter: (_, data) => {
        const investorAccount = data?.initialInvestorAccountNumber
        const participantAccount = data?.initialParticipantAccountNumber
        const value = defaultValueField({
          value:
            investorAccount?.accountNumber || participantAccount?.accountNumber
        })
        return value
      }
    },
    {
      field: 'typeId',
      //   headerName: 'Tipo ID',
      headerName: t('typeId'),
      minWidth: 88,
      valueGetter: (_, data) => {
        const investorAccount = data?.initialInvestorAccountNumber
        const participantAccount = data?.initialParticipantAccountNumber
        const value = defaultValueField({
          value:
            investorAccount?.investor?.identificationType?.code ||
            participantAccount?.participant?.identificationType?.code
        })
        return value
      }
    },
    {
      field: 'idBeneficiary',
      //   headerName: 'ID Beneficiario',
      headerName: t('beneficiaryId'),
      minWidth: 88,
      valueGetter: (_, data) => {
        const investorAccount = data?.initialInvestorAccountNumber
        const participantAccount = data?.initialParticipantAccountNumber
        const value = defaultValueField({
          value:
            investorAccount?.investor?.documentNumber ||
            participantAccount?.participant?.documentNumber
        })
        return value
      }
    },
    {
      field: 'name',
      //   headerName: 'Nombre',
      headerName: t('name'),
      minWidth: 89,
      valueGetter: (_, data) => {
        const investorAccount = data?.initialInvestorAccountNumber
        const participantAccount = data?.initialParticipantAccountNumber
        const value = defaultValueField({
          value:
            investorAccount?.investor?.firstName ||
            participantAccount?.participant?.shortName
        })
        return value
      }
    },
    {
      field: 'rut',
      //   headerName: 'Cuenta títulos nueva',
      headerName: t('newTitleAccount'),
      minWidth: 107,
      valueGetter: (_, data) => {
        const investorAccount = data?.finalInvestorAccountNumber
        const participantAccount = data?.finalParticipantAccountNumber
        const value = defaultValueField({
          value:
            investorAccount?.accountNumber || participantAccount?.accountNumber
        })
        return value
      }
    },
    {
      field: 'typeNewBeneficiaryId',
      //   headerName: 'Tipo ID Beneficiario Nuevo',
      headerName: t('typeNewBeneficiaryId'),
      minWidth: 100,
      valueGetter: (_, data) => {
        const investorAccount = data?.finalInvestorAccountNumber
        const participantAccount = data?.finalParticipantAccountNumber
        const value = defaultValueField({
          value:
            investorAccount?.investor?.identificationType?.code ||
            participantAccount?.participant?.identificationType?.code
        })
        return value
      }
    },
    {
      field: 'newBeneficiaryId',
      //   headerName: 'ID Beneficiario nuevo',
      headerName: t('newBeneficiaryId'),
      minWidth: 108,
      valueGetter: (_, data) => {
        const investorAccount = data?.finalInvestorAccountNumber
        const participantAccount = data?.finalParticipantAccountNumber
        const value = defaultValueField({
          value:
            investorAccount?.investor?.documentNumber ||
            participantAccount?.participant?.documentNumber
        })
        return value
      }
    },
    {
      field: 'newBeneficiaryName',
      //   headerName: 'Nombre Beneficiario Nuevo',
      headerName: t('newBeneficiaryName'),
      minWidth: 108,
      valueGetter: (_, data) => {
        const investorAccount = data?.finalInvestorAccountNumber
        const participantAccount = data?.finalParticipantAccountNumber
        const value = defaultValueField({
          value:
            investorAccount?.investor?.firstName ||
            participantAccount?.participant?.shortName
        })
        return value
      }
    },
    {
      field: 'status',
      //   headerName: 'Estado',
      headerName: t('status'),
      minWidth: 146,
      valueGetter: (_: any, data: CorrectionOperation) => {
        return defaultValueField({ value: data?.status?.description })
      },
      renderCell: (
        params: XDataGridLib.GridRenderCellParams<CorrectionOperation>
      ) => {
        const data = params.row
        return <StatusChip value={data?.status?.description ?? ' '} />
      }
    },
    {
      field: 'detail',
      //   headerName: 'Detalle del rechazo',
      headerName: t('rejectionDetail'),
      minWidth: 140
    }
  ]

  return { columns }
}

export default useCorrectionTableColumns

```

## src/features/operations-management/hooks/useFolioTransfer.tsx

```tsx
import { lazy, Suspense } from 'react'

import { useScheduleValidation } from 'remoteShell/mf-shell-useScheduleValidation'
import { Spinner } from 'remoteUtilities/components-mf-utilities'

import { ModalContentState } from '@/shared/types/Alerts'

import { DispatchState } from '../types/dispatchState'

const FolioTransfer = lazy(() => import('../components/FolioTransfer'))

const useFolioTransfer = ({
  setModalContent,
  onTransferSuccess,
  actionCode,
  onActionEnd,
  isClosingTimeSecondary
}: {
  setModalContent?: DispatchState<ModalContentState>
  onTransferSuccess?: (message: string, variant: 'success' | 'error') => void
  actionCode: string
  onActionEnd?: () => void
  isClosingTimeSecondary?: boolean
}) => {
  const { validate } = useScheduleValidation()

  const handleFolioTransfer = async (
    tradeIds: number[],
    participantId: number
  ) => {
    const handleClose = () => {
      setModalContent?.(null)
      onActionEnd?.()
    }

    await validate({
      actionCode,
      isClosingTimeSecondary,
      onSuccess: () => {
        setModalContent?.({
          open: true,
          title: 'Traslado a custodio',
          children: (
            <Suspense fallback={<Spinner />}>
              <FolioTransfer
                handleClose={handleClose}
                tradeIds={tradeIds}
                participantId={participantId}
                onTransferSuccess={onTransferSuccess}
                isClosingTimeSecondary={isClosingTimeSecondary}
              />
            </Suspense>
          ),
          ItShouldHaveButtons: false,
          className: 'w-[90%] max-w-[90vw]',
          handleClose
        })
      },
      onCancel: () => {
        handleClose()
      }
    })
  }

  return { handleFolioTransfer }
}

export default useFolioTransfer

```

## src/features/operations-management/hooks/useFolioTransferData.tsx

```tsx
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'remoteShell/mf-store'

import { folioTransferService } from '../services/folioTransferService'
import { FolioTransferSettlement } from '../types/folioTransfer'

interface UseFolioTransferDataParams {
  tradeIds: number[]
  participantId: number
  enabled: boolean
}

export const useFolioTransferData = ({
  tradeIds,
  participantId,
  enabled
}: UseFolioTransferDataParams) => {
  const [data, setData] = useState<FolioTransferSettlement[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { userType } = useSelector(
    (state: RootState) => state.auth.infoUserNubo
  )

  useEffect(() => {
    if (!enabled || tradeIds.length === 0) {
      return
    }

    const fetchData = async () => {
      setIsLoading(true)
      setError(null)

      try {
        return
        const settlements = await folioTransferService.getSettlementsByTradeIds(
          {
            page: 0,
            size: 100,
            sort: 'id',
            order: 'asc',
            tradeId: tradeIds,
            participantId,
            userType
          }
        )

        setData(settlements)
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : 'Error al cargar datos'
        setError(errorMessage)
        console.error('Error fetching folio transfer data:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [tradeIds, participantId, userType, enabled])

  return { data, isLoading, error }
}

```

## src/features/operations-management/hooks/useFolioTransferValidation.tsx

```tsx
import { useMemo } from 'react'

import { ItemModel } from '../types/item'

interface UseFolioTransferValidationProps {
  selectedIds: number[]
  data: ItemModel[]
}

interface ValidationResult {
  isValid: boolean
  canTransfer: boolean
}

const ASSIGNED_STATUS = 'ASIGNADA'

/**
 * Hook que valida si las operaciones seleccionadas pueden ser trasladadas a custodio
 *
 * @param selectedIds - IDs de las filas seleccionadas
 * @param data - Datos completos de las operaciones
 * @returns Objeto con isValid (hay selección) y canTransfer (cumple requisitos)
 */
const useFolioTransferValidation = ({
  selectedIds,
  data
}: UseFolioTransferValidationProps): ValidationResult => {
  const validationResult = useMemo(() => {
    // Si no hay selección, no se puede transferir
    if (!selectedIds || selectedIds.length === 0) {
      return {
        isValid: false,
        canTransfer: false
      }
    } else {
      return {
        isValid: true,
        canTransfer: true
      }
    }

    // Buscar las operaciones seleccionadas en data
    const selectedOperations = data.filter((item) =>
      selectedIds.includes(item.id)
    )

    // Verificar que existan operaciones seleccionadas
    if (selectedOperations.length === 0) {
      return {
        isValid: false,
        canTransfer: false
      }
    }

    // Validar que al menos una operación tenga estado ASIGNADA
    const hasAssignedStatus = selectedOperations.some((operation) => {
      const hasBuyAccess = !!operation.participantBuy
      const hasSellAccess = !!operation.participantSell
      const isValidDepositary =
        operation?.depository?.description === 'DVL' ||
        operation?.depository?.description === 'CAVALI'

      const buyStatusIsAssigned =
        operation.buyStatus?.description === ASSIGNED_STATUS
      const sellStatusIsAssigned =
        operation.sellStatus?.description === ASSIGNED_STATUS

      if (!isValidDepositary) {
        return false
      }

      // Si tiene acceso a ambas puntas, validar que al menos una esté asignada
      if (hasBuyAccess && hasSellAccess) {
        return buyStatusIsAssigned || sellStatusIsAssigned
      }

      // Si solo tiene acceso a la punta de compra, validar buyStatus
      if (hasBuyAccess && !hasSellAccess) {
        return buyStatusIsAssigned
      }

      // Si solo tiene acceso a la punta de venta, validar sellStatus
      if (!hasBuyAccess && hasSellAccess) {
        return sellStatusIsAssigned
      }

      // Si no tiene acceso a ninguna punta, no puede transferir
      return false
    })

    return {
      isValid: true,
      canTransfer: hasAssignedStatus
    }
  }, [selectedIds, data])

  return validationResult
}

export default useFolioTransferValidation

```

## src/features/operations-management/hooks/useGetOriginTrade.ts

```typescript
import { type ITrades } from '@/shared/types/trade'

const useGetOriginTrade = ({
  side,
  trade
}: {
  side: string
  trade: ITrades | null
}) => {
  const origin = (
    side === '1' ? trade?.sourceQuoteBuyType : trade?.sourceQuoteSellType
  )!
  return origin
}

export default useGetOriginTrade

```

## src/features/operations-management/hooks/useHideShadeTable.tsx

```tsx
import dayjs from 'dayjs'
import { useEffect, useRef } from 'react'

import { timeShadeOperation } from '../constants/timeShadeOperation'
import { type ItemModel } from '../types/item'
import { transformLocalTime } from '../utils/transformLocalTime'

// Programa actualizaciones por fila sin umbrales.
// Si una operación fue creada hace menos de 120s (o está adelantada),
// programa timeouts para cuando debe pintarse y despintarse.
const useHideShadeTable = ({
  columns,
  onClassUpdate
}: {
  columns: ItemModel[]
  onClassUpdate: () => void
}) => {
  // Guardamos múltiples timeouts (uno por fila relevante) para poder limpiarlos.
  const timeoutsRef = useRef<number[]>([])

  useEffect(() => {
    // Limpiar timeouts previos
    if (timeoutsRef.current.length) {
      timeoutsRef.current.forEach((id) => window.clearTimeout(id))
      timeoutsRef.current = []
    }

    const now = dayjs()

    // Iterar filas y programar actualizaciones exactas
    for (const row of columns) {
      const mt = row.lastModifyDate
      const dtTransform = transformLocalTime(mt)

      if (!dtTransform) continue

      const diffSec = now.diff(dtTransform, 'second')

      // Caso 1: lastModifyDate está en el futuro (diffSec < 0)
      if (diffSec < 0) {
        const secsUntilStart = Math.abs(diffSec)
        const msUntilStart = secsUntilStart * 1000

        // Programar renderizado cuando llegue el momento (diffSec = 0)
        const tidStart = window.setTimeout(
          () => {
            onClassUpdate() // Se pinta cuando llega el momento
          },
          Math.max(10, msUntilStart)
        )

        timeoutsRef.current.push(tidStart)

        const msUntilHide = (secsUntilStart + timeShadeOperation) * 1000
        const tidHide = window.setTimeout(
          () => {
            onClassUpdate() // Se oculta después de 120s
          },
          Math.max(10, msUntilHide)
        )

        timeoutsRef.current.push(tidHide)
      }
      // Caso 2: lastModifyDate está en el pasado pero dentro de 10s (0 <= diffSec < 10)
      else if (diffSec >= 0 && diffSec <= timeShadeOperation) {
        const msUntilHide = (timeShadeOperation - diffSec) * 1000

        // Programar actualización cuando deje de ser "nueva"
        const tid = window.setTimeout(
          () => {
            onClassUpdate() // fuerza el recálculo de getRowClassName
          },
          Math.max(10, msUntilHide)
        )

        timeoutsRef.current.push(tid)
      }
      // Caso 3: lastModifyDate tiene más de 10s (diffSec >= 10)
      // No hacer nada, ya no es "nueva"
    }

    // Cleanup al cambiar dependencias o desmontar
    return () => {
      if (timeoutsRef.current.length) {
        timeoutsRef.current.forEach((id) => window.clearTimeout(id))
        timeoutsRef.current = []
      }
    }
  }, [columns, onClassUpdate])
}

export default useHideShadeTable

```

## src/features/operations-management/hooks/useOperationsActions.tsx

```tsx
import { useState } from 'react'

import {
  FILE_EXTENSIONS,
  TRADE_TYPES
} from '@/features/operations-management/constants/operations'
import { generateFileName } from '@/features/operations-management/utils/operations'

export const useOperationsActions = () => {
  const [isLoadingModal, setIsLoadingModal] = useState(false)
  const [progress, setProgress] = useState(0)

  const generatePDF = async (record: any) => {
    const fileName = generateFileName(record, FILE_EXTENSIONS.PDF)

    let blob
    try {
      const { pdf } = await import('@react-pdf/renderer')

      if (record.trade?.type?.id == TRADE_TYPES.C) {
        const { VoucherDocumentC } =
          await import('../components/VoucherDocumentC')

        const template = <VoucherDocumentC data={record} />
        blob = await pdf(template).toBlob()
      } else {
        const { VoucherDocumentR } =
          await import('../components/VoucherDocumentR')

        const template = <VoucherDocumentR data={record} />
        blob = await pdf(template).toBlob()
      }
    } catch (error) {
      console.error('Error generating PDF blob:', error)
      throw error
    }

    return { blob, fileName }
  }

  const downloadMultiplePDF = async (records: any[]) => {
    const { default: JSZip } = await import('jszip')
    const { saveAs } = await import('file-saver')
    const zip = new JSZip()
    for (let i = 0; i < records.length; i++) {
      const { blob, fileName } = await generatePDF(records[i])
      if (blob) zip.file(fileName, blob)
      setProgress(Math.round(((i + 1) / records.length) * 100))
    }
    const zipBlob = await zip.generateAsync({ type: 'blob' })
    saveAs(zipBlob, `comprobantes_${Date.now()}.${FILE_EXTENSIONS.ZIP}`)
  }

  return {
    generatePDF,
    downloadMultiplePDF,
    isLoadingModal,
    progress,
    setIsLoadingModal
  }
}

```

## src/features/operations-management/hooks/useOperationsDownload.ts

```typescript
import { useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'remoteShell/mf-store'
import { GenerateLogs } from 'remoteUtilities/components-mf-utilities'

import {
  ACTIONS,
  SERVER_ERROR_MODAL
} from '@/features/operations-management/constants/operations'
import { ItemModel } from '@/features/operations-management/types/item'
import {
  handleGenerateCSV,
  handleGeneratePDF
} from '@/features/operations-management/utils/operations'
import { reportOperations } from '@/features/settlement-file/services/trades'

import { USER_TYPES } from '@/shared/constants'
import useGenerateLogs from '@/shared/hooks/useGenerateLogs'
import isDevMode from '@/shared/utils/isDevMode'

import { useOperationsActions } from './useOperationsActions'

export interface DownloadAction {
  type: string
}

interface UseOperationsDownloadParams {
  client_user: string | null
  setProgress: React.Dispatch<React.SetStateAction<number>>
  setExtension: React.Dispatch<React.SetStateAction<string>>
  setModalContent: React.Dispatch<React.SetStateAction<any>>
  setTotalRecords: React.Dispatch<React.SetStateAction<number>>
  setIsToastVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export const useOperationsDownload = ({
  client_user,
  setProgress,
  setExtension,
  setModalContent,
  setTotalRecords,
  setIsToastVisible
}: UseOperationsDownloadParams) => {
  const { generatePDF } = useOperationsActions()
  const [isLoadingModal, setIsLoadingModal] = useState(false)
  const { generateLogs } = useGenerateLogs()
  const {
    userType,
    name,
    identification,
    id: id_user_nubo,
    country,
    status: { id: statusId },
    participantId
  } = useSelector((state: RootState) => state.auth.infoUserNubo)

  const onConfirmDownload = async (
    action: DownloadAction,
    _tradeIdList: string[],
    tradeDataList: any[],
    thereAreSelected: number[],
    currentItems: ItemModel[]
  ): Promise<void> => {
    setModalContent(null)
    try {
      if (thereAreSelected.length === 1) {
        const tradeId = thereAreSelected[0].toString()
        // const tradeData = tradeDataList[0]
        const participantBuy =
          tradeDataList[0]?.participantBuy?.id === participantId
        const participantSell =
          tradeDataList[0]?.participantSell?.id === participantId

        let sideId: { sideId: string }[] = []
        if (
          userType === USER_TYPES.INTERNAL ||
          (participantBuy && participantSell)
        ) {
          sideId = [{ sideId: '1' }, { sideId: '2' }]
        } else if (participantBuy) {
          sideId = [{ sideId: '1' }]
        } else if (participantSell) {
          sideId = [{ sideId: '2' }]
        }

        const result = await reportOperations(
          client_user,
          tradeId,
          sideId as any
        )
        if (Array.isArray(result) && result.length === 0) {
          if (isDevMode()) {
            console.error('No records found in the additional request')
          }
          setIsLoadingModal(false)
          setModalContent({
            title: '¡Atención!',
            message:
              'Está pendiente la asignación. Es importante asignar beneficiario a esta operación para continuar.',
            variant: 'warning',
            onClick: () => {
              setModalContent(null)
            }
          })
          return
        }
        const totalRecords = Array.isArray(result) ? result.length : 0
        setTotalRecords(totalRecords)
        if (action.type === ACTIONS.DOWNLOAD_PDF) {
          await handleGeneratePDF({
            result,
            actionType: action.type,
            name,
            client_user,
            setProgress,
            setExtension,
            setModalContent,
            generatePDF
          })
        }
      } else if (
        thereAreSelected.length >= 2 &&
        action.type === ACTIONS.DOWNLOAD_CSV
      ) {
        await handleGenerateCSV({
          currentItems,
          client_user,
          id_user_nubo,
          name,
          setProgress,
          setExtension
        })
      }

      setIsToastVisible(true)
      if (client_user) {
        GenerateLogs(client_user, {
          actionType: `Generación de comprobantes de operación por el usuario con identificación ${identification} NUAM NUBO`,
          actionDestination: 'OperationDetails',
          participantId,
          countryId: country.id,
          userNuboId: id_user_nubo,
          statusId
        })
      }
    } catch (error) {
      if (isDevMode()) {
        console.error('Error fetching data:', error)
      }
      generateLogs({
        actionType: 'Generación de archivo',
        actionDestination: 'Error en la generación de archivo de operaciones'
      })
      setModalContent({
        ...SERVER_ERROR_MODAL,
        onClick: () => setModalContent(null)
      })
    } finally {
      setIsLoadingModal(false)
    }
  }

  return {
    onConfirmDownload,
    isLoadingModal,
    setIsLoadingModal,
    participantId
  }
}

```

## src/features/operations-management/hooks/useOperationsFilters.ts

```typescript
import dayjs, { Dayjs } from 'dayjs'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'remoteShell/mf-store'

import {
  BASE_TRADE_PATH_CUSTODIAN,
  QUERY_KEYS
} from '@/features/operations-management/constants/operations'
import { Columnfilter } from '@/features/operations-management/types'

import { USER_TYPES } from '@/shared/constants'

export const useOperationsFilters = () => {
  const { userType, participantId } = useSelector(
    (state: RootState) => state.auth.infoUserNubo
  )
  const url =
    userType === USER_TYPES.INTERNAL
      ? BASE_TRADE_PATH_CUSTODIAN
      : participantId
        ? `${BASE_TRADE_PATH_CUSTODIAN}?${QUERY_KEYS.PARTICIPANT_ID}=${participantId}`
        : BASE_TRADE_PATH_CUSTODIAN
  const [filter, setFilter] = useState<Columnfilter>({
    url
  })

  const [selectedCountry, setSelectedCountry] = useState<{
    id: number | null
    name: string
  } | null>(null)
  const [dates, setDates] = useState<{
    registerDate: null | Dayjs
    complianceDate: null | Dayjs
  } | null>(null)
  const [selectedMatchId, setSelectedMatchId] = useState<{
    id: number
    name: string
  } | null>(null)

  useEffect(() => {
    const params = new URLSearchParams()

    if (selectedCountry) {
      const countryId = selectedCountry.id === 0 ? '' : selectedCountry.id
      params.append(QUERY_KEYS.COUNTRY_ID, countryId?.toString() ?? '')
    }
    if (selectedMatchId)
      params.append(QUERY_KEYS.MATCH_ID, selectedMatchId.id.toString())
    if (dates?.registerDate) {
      const dateStr = dates.registerDate.toISOString().split('T')[0]
      params.append(QUERY_KEYS.START_MATCH_DATE, dateStr)
      params.append(QUERY_KEYS.END_MATCH_DATE, dateStr)
    } else if (!dates?.complianceDate) {
      const currentDate = dayjs().format('YYYY-MM-DD')
      params.append(QUERY_KEYS.START_MATCH_DATE, currentDate)
      params.append(QUERY_KEYS.END_MATCH_DATE, currentDate)
    }
    if (dates?.complianceDate) {
      const dateStr = dates.complianceDate.toISOString().split('T')[0]
      params.append(QUERY_KEYS.START_CLEARING_DATE, dateStr)
      params.append(QUERY_KEYS.END_CLEARING_DATE, dateStr)
    }

    const url = params.toString()
      ? userType === USER_TYPES.EXTERNAL
        ? `${BASE_TRADE_PATH_CUSTODIAN}?${params.toString()}&participantId=${participantId}`
        : `${BASE_TRADE_PATH_CUSTODIAN}?${params.toString()}`
      : userType === USER_TYPES.EXTERNAL
        ? `${BASE_TRADE_PATH_CUSTODIAN}?participantId=${participantId}`
        : BASE_TRADE_PATH_CUSTODIAN
    setFilter((prev) => ({ ...prev, url }))
  }, [selectedCountry, selectedMatchId, dates])

  const getUrlFilters = (value: string) => {
    const url =
      userType === USER_TYPES.INTERNAL
        ? `${BASE_TRADE_PATH_CUSTODIAN}${value}`
        : `${BASE_TRADE_PATH_CUSTODIAN}?${QUERY_KEYS.PARTICIPANT_ID}=${participantId}${value}`
    setFilter({ url })
  }

  return {
    filter,
    selectedCountry,
    dates,
    selectedMatchId,
    setSelectedCountry,
    setDates,
    setSelectedMatchId,
    getUrlFilters
  }
}

```

## src/features/operations-management/hooks/useOptionsAssignment.ts

```typescript
import { useCallback, useEffect, useState } from 'react'

import useTranslate from '@/shared/hooks/useTranslate'
import { type BusinessType } from '@/shared/types'
import type { ParticipantShort } from '@/shared/types/participant'

import { assignmentOriginOptions } from '../services/assignmentOriginOptions'
import { getCustodianOptions } from '../services/custodianOptions'
import { type HandleAlertAction } from './useAssignmentAlert'

const useOptionsAssignment = ({
  changeAlert,
  sideId,
  tradeId,
  countryId
}: {
  changeAlert: HandleAlertAction
  sideId: string
  tradeId: number
  countryId: number
}) => {
  const { t } = useTranslate({
    keyPrefix: 'operationDetail.tabs.beneficiary.columns'
  })

  const [originOptions, setOriginOptions] = useState<BusinessType[]>([])
  const changeOriginOptions = (value: BusinessType[]) => {
    setOriginOptions(value)
  }
  const [optionsCustodian, setOptionsCustodian] = useState<ParticipantShort[]>(
    []
  )
  const changeOptionsCustodian = (value: ParticipantShort[]) => {
    const options = value.map((item) => ({
      ...item,
      name: item.codeName
    }))
    setOptionsCustodian(options)
  }
  const handleGetCustodian = useCallback(
    async (countryId: number) => {
      try {
        await getCustodianOptions({
          changeOptionsCustodian: changeOptionsCustodian,
          countryId: countryId
        })
      } catch {
        changeAlert?.({ variant: 'error_service' })
      }
    },
    [changeAlert, sideId, tradeId]
  )
  const handleGetAssignmentOriginOptions = useCallback(async () => {
    try {
      await assignmentOriginOptions({ changeOptions: changeOriginOptions })
    } catch {
      changeAlert({
        variant: 'error_service',
        // info: { message: 'Error al cargar las opciones de origen' }
        info: { message: t('errorLoadingOriginOptions') }
      })
    }
  }, [])

  useEffect(() => {
    handleGetAssignmentOriginOptions()
  }, [handleGetAssignmentOriginOptions])

  useEffect(() => {
    handleGetCustodian(countryId)
  }, [handleGetCustodian, countryId])
  return { originOptions, optionsCustodian }
}

export default useOptionsAssignment

```

## src/features/operations-management/hooks/useOptionsCountries.ts

```typescript
import { useEffect, useState } from 'react'

import isDevMode from '@/shared/utils/isDevMode'

import { getCountryAdministration } from '../services/getCountryAdministration'
import { CountryOptions } from '../types/country'

const useOptionsCountries = () => {
  const [countryOptions, setCountryOptions] = useState<CountryOptions>([])
  useEffect(() => {
    const fetchStateOptions = async () => {
      try {
        const countryData = await getCountryAdministration()

        setCountryOptions(countryData)
      } catch (error) {
        if (isDevMode()) {
          console.error('Error fetching state or account options:', error)
        }
      }
    }

    fetchStateOptions()
  }, [])
  return { countryOptions }
}

export default useOptionsCountries

```

## src/features/operations-management/hooks/useSaveAssignment.ts

```typescript
import { useCallback, useMemo } from 'react'

import { useRefreshTable } from 'remoteShell/mf-shell-useRefreshTable'

import useGenerateLogs from '@/shared/hooks/useGenerateLogs'
import useTranslate from '@/shared/hooks/useTranslate'
import { type ErrorResponse } from '@/shared/types'

import { FRACTION_ERROR_CODES } from '../constants/FullViewBeneficiaries'
import { saveAssignmentEndpoint } from '../services/saveAssignment'
import { updateAssignmentEndpoint } from '../services/updateAssignment'
import { HandleAlertAction } from './useAssignmentAlert'
import { type Fraction } from './useStateFraction'

const useSaveAssignment = ({
  tradeId,
  side,
  changeAlert,
  handleClose,
  fractions,
  hasCustodianFractions
}: {
  tradeId: number
  side: string
  handleClose?: () => void
  changeAlert: HandleAlertAction
  fractions: Fraction[]
  hasCustodianFractions?: boolean
}) => {
  const { t } = useTranslate({
    keyPrefix: 'operationDetail.tabs.beneficiary.modalAssignment'
  })
  const hasAnyFractionsCustodian = hasCustodianFractions
  const { generateLogs } = useGenerateLogs()
  const { refreshTable } = useRefreshTable()
  const messageSaveAssignmentCustodian = () => {
    changeAlert({
      variant: 'modal',
      info: {
        open: true,
        title: 'Asignación guardada con éxito',
        message:
          'Las fracciones asignadas a un custodio se trasladarán automáticamente en el siguiente corte. Si desea hacerlo antes, puede realizar el traslado individual desde la gestión de operaciones.',
        variant: 'success',
        onClick() {
          closeModal()
          handleClose?.()
        }
      }
    })
  }
  const saveAssignment = useCallback(async () => {
    if (tradeId) {
      await saveAssignmentEndpoint({
        params: { tradeId: tradeId, sideId: side },
        body: fractions
      })
      generateLogs({
        actionDestination: 'Guardar asignación',
        actionType: `Guardar asignación exitosamente (tradeId: ${tradeId}, sideId: ${side})`
      })
      refreshTable()
    }
  }, [tradeId, side, fractions, generateLogs, refreshTable])
  const closeModal = useCallback(() => {
    changeAlert({ variant: 'modal' })
  }, [changeAlert])
  const errors = useMemo(
    () => [
      FRACTION_ERROR_CODES.PARTICIPANT_ACCOUNT_DUPLICATED,
      FRACTION_ERROR_CODES.INVESTOR_ACCOUNT_DUPLICATED
    ],
    []
  )
  const showError = useCallback(
    (
      error: 'error_service' | 'error_assignment' | 'error_fractions',
      processType: 'Asignación' | 'Reasignación' = 'Reasignación'
    ) => {
      switch (error) {
        case 'error_service':
          changeAlert?.({
            variant: 'error_service',
            info: {
              onClick() {
                closeModal()
              }
            }
          })
          generateLogs({
            actionDestination: `Guardar ${processType}`,
            actionType: `Error al guardar ${processType.toLowerCase()} (tradeId: ${tradeId}, sideId: ${side})`
          })
          break
        case 'error_assignment':
          generateLogs({
            actionDestination: `Guardar ${processType}`,
            actionType: `Error al guardar ${processType.toLowerCase()}, cuenta repetida (tradeId: ${tradeId}, sideId: ${side})`
          })
          changeAlert?.({
            variant: 'modal',
            info: {
              open: true,
              variant: 'error',
              // title: 'Cuenta inversionista no se puede repetir'
              title: t('errorAccountRepeat')
            }
          })
          break
        case 'error_fractions':
          changeAlert?.({
            variant: 'OWN_POSITION_ONLY_ONE_FRACTION_ALLOWED'
          })
          break
      }
    },
    [changeAlert, closeModal, generateLogs, side, tradeId, t]
  )
  const handleSaveAssignment = useCallback(async () => {
    try {
      await saveAssignment()
      if (hasAnyFractionsCustodian) {
        messageSaveAssignmentCustodian()
      } else {
        changeAlert({
          variant: 'toast',
          info: {
            // text: 'Asignación guardada, por favor confírmela para enviarla a CCP',
            text: t('saveAssignmentSuccess'),
            open: true,
            duration: 1700,
            onClose() {
              closeModal()
              handleClose?.()
            }
          }
        })
      }
    } catch (error) {
      const err = error as ErrorResponse
      const errorCode = err?.response?.data?.errorCode ?? ''
      if (errors.includes(errorCode)) {
        showError('error_assignment', 'Asignación')
      } else if (
        errorCode ===
        FRACTION_ERROR_CODES.OWN_POSITION_ONLY_ONE_FRACTION_ALLOWED
      ) {
        showError('error_fractions', 'Asignación')
      } else {
        showError('error_service', 'Asignación')
      }
    }
  }, [
    changeAlert,
    handleClose,
    saveAssignment,
    closeModal,
    errors,
    showError,
    t
  ])

  const handleSaveReassignment = useCallback(async () => {
    if (tradeId) {
      try {
        await updateAssignmentEndpoint({
          params: { tradeId: tradeId, sideId: side },
          body: fractions
        })
        if (hasAnyFractionsCustodian) {
          messageSaveAssignmentCustodian()
        } else {
          closeModal()
          handleClose?.()
        }
        generateLogs({
          actionDestination: 'Guardar Reasignación',
          actionType: `Guardar reasignación exitosamente (tradeId: ${tradeId}, sideId: ${side})`
        })

        refreshTable()
      } catch (error) {
        const errorCode =
          (error as ErrorResponse)?.response?.data?.errorCode ?? ''
        if (errors.includes(errorCode)) {
          showError('error_assignment')
        } else if (
          errorCode ===
          FRACTION_ERROR_CODES.OWN_POSITION_ONLY_ONE_FRACTION_ALLOWED
        ) {
          showError('error_fractions')
        } else {
          showError('error_service')
        }
      }
    }
  }, [
    generateLogs,
    handleClose,
    side,
    tradeId,
    errors,
    refreshTable,
    showError,
    fractions
  ])
  return {
    handleSaveAssignment,
    handleSaveReassignment
  }
}

export default useSaveAssignment

```

## src/features/operations-management/hooks/useStateFraction.ts

```typescript
import { useEffect, useState, useCallback } from 'react'

import useTranslate from '@/shared/hooks/useTranslate'
import { BusinessType } from '@/shared/types'
import { Participant } from '@/shared/types/participant'
import { Settlement } from '@/shared/types/settlement'

import { FieldsAssignment } from '../constants/fieldsAssignment'
import {
  assignmentCashAccount,
  AssignmentCashAccountResponse
} from '../services/assignmentCashAccount'
import { getSettlement } from '../services/getSettlement'
import { MilaDirectDepository } from '../types/responseValidateAccount'
import { transformSettlementToFractions } from '../utils/transformSettlementToFractionsDefault'
import { type HandleAlertAction } from './useAssignmentAlert'

export const useStateFraction = (params: {
  tradeId?: number
  side: string
  changeAlert?: HandleAlertAction
}) => {
  const { t } = useTranslate({
    keyPrefix: 'operationDetail.tabs.beneficiary.messagesValidations'
  })
  const { side, tradeId, changeAlert } = params
  const [cashAccountDefault, setDefaultCashAccount] =
    useState<AssignmentCashAccountResponse | null>(null)
  // cuenta de efectivo por defecto

  const [settlement, setSettlement] = useState<Settlement[] | null>([])
  const [fractions, setFractions] = useState<StateFractions['fractions']>([])

  const getValueCashAccount = useCallback(async () => {
    try {
      const getValue = await assignmentCashAccount({
        sideId: side,
        tradeId: tradeId!
      })
      setDefaultCashAccount(getValue)
    } catch {
      changeAlert?.({
        variant: 'error_service',
        info: {
          // message: 'Error en el servicio al cargar la cuenta de efectivo'
          message: t('errorLoadingCashAccount')
        }
      })
    }
  }, [side, tradeId])
  useEffect(() => {
    getValueCashAccount()
    return () => {
      setDefaultCashAccount(null)
    }
  }, [getValueCashAccount])
  const handleGetSettlement = useCallback(async () => {
    try {
      const data = await getSettlement({
        side: side,
        tradeId: tradeId!,
        setSettlement
      })
      if (data.length > 0) {
        const transformedData = transformSettlementToFractions(data ?? [])
        setFractions(transformedData)
      }
    } catch {
      changeAlert?.({
        variant: 'error_service',
        // info: { message: 'Error en el servicio al cargar las fracciones' }
        info: { message: t('errorLoadingFractions') }
      })
    }
  }, [side, tradeId])
  useEffect(() => {
    if (tradeId) {
      handleGetSettlement()
    }
  }, [tradeId, handleGetSettlement])

  return {
    setFractions,
    settlement,
    cashAccountDefault,
    fractions,
    setSettlement
  }
}

export interface ObjectValue {
  label: string
  value: number | string
}
export interface ParticipantValue {
  idParticipant: number
  idAccount: number
  accountNumber: string
  accountSourceType?: number
  documentNumber?: string
  name: string
  shortName: string
  typeId?: string
}
export interface ValueError<T = string> {
  value?: T
  error?: { message?: string | null; error?: boolean | null }
}
export interface Fraction {
  [FieldsAssignment.id]?: number | string | null
  [FieldsAssignment.index]: number
  [FieldsAssignment.account]?: ValueError | null
  [FieldsAssignment.participantAccount]?: Partial<ParticipantValue> | null
  [FieldsAssignment.investorAccount]?: Partial<ParticipantValue> | null
  [FieldsAssignment.cashAccount]?: ValueError<string> | null
  [FieldsAssignment.source]?: ObjectValue
  [FieldsAssignment.quantity]?: ValueError<number>
  [FieldsAssignment.amount]?: number
  [FieldsAssignment.commissionPercentage]?: string
  [FieldsAssignment.commission]?: number
  [FieldsAssignment.impCommission]?: number
  [FieldsAssignment.impCommissionDescription]?: string
  [FieldsAssignment.netAmount]?: number
  [FieldsAssignment.returnAmount]?: number
  [FieldsAssignment.custodian]?: Partial<Participant> | null
  [FieldsAssignment.hasPreviousCustodian]?: boolean
  [FieldsAssignment.custodianStatus]?: BusinessType | null
  [FieldsAssignment.administrator]?: Partial<ObjectValue> | null
  [FieldsAssignment.reference]?: string
  [FieldsAssignment.valTax]?: number
  [FieldsAssignment.isEditable]?: boolean
  [FieldsAssignment.masterAccount]?: string
  [FieldsAssignment.isMasterAccount]?: boolean
  [FieldsAssignment.isPreloadedLocalAccount]?: boolean
  [FieldsAssignment.isNewFraction]?: boolean
  [FieldsAssignment.fraction]?: number
  [FieldsAssignment.milaLocal]?: MilaDirectDepository | null
  [FieldsAssignment.referencePackage]?: ValueError<string> | null
  [FieldsAssignment.executeCalculationInitial]?: boolean
}
interface StateFractions {
  fractions: Fraction[]
}

```

## src/features/operations-management/hooks/useTradeHistory.ts

```typescript
import { useState } from 'react'

import { formatToUserLocalTime } from 'remoteUtilities/formatToUserLocalTime'
import { formattedDate } from 'remoteUtilities/formattedDate'

import {
  ERROR_MESSAGES,
  SIDE_TYPES
} from '@/features/operations-management/constants/operations'
import {
  getCustodianTradeHistory,
  getTradeHistory
} from '@/features/settlement-file/services/trades'

import useTranslate from '@/shared/hooks/useTranslate'
import isDevMode from '@/shared/utils/isDevMode'

export const useTradeHistory = (client_user: string) => {
  const [modalFollowUpColumns, setModalFollowUpColumns] = useState<any[]>([])
  const [modalCustodyColumns, setModalCustodyColumns] = useState<any[]>([])
  const [modalHistory, setModalHistory] = useState<any>(null)
  const [isModalFollowUp, setIsModalFollowUp] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [modalContent, setModalContent] = useState<any>(null)
  const { t } = useTranslate({ keyPrefix: 'common.modalFollowUp' })
  const { t: tCommon } = useTranslate({ keyPrefix: 'common.modalServerError' })

  const mapTrackingData = (trackingTrade: any[], isCustody?: boolean) => {
    return trackingTrade.map((history) => {
      const timeString = history?.time?.toString() || ''
      const dateTime =
        formatToUserLocalTime(timeString)?.split(',')[1]?.trim() || ''

      const valuePoint =
        history?.side?.id === SIDE_TYPES.BUY.id
          ? SIDE_TYPES.BUY.label
          : SIDE_TYPES.SELL.label
      const valueFraction = history?.fraction === 0 ? 1 : history?.fraction
      let value = {}
      if (isCustody) {
        value = { [t('packageCode')]: history?.packageNumber }
      } else {
        value = { [t('fraction')]: valueFraction }
      }
      return {
        // Fecha: formattedDate({ date: timeString }),
        [t('date')]: formattedDate({ date: timeString }),
        // Hora: dateTime,
        [t('hour')]: dateTime,
        // Estado: history?.status?.description,
        [t('status')]: history?.status?.description,
        // Punta: history?.side?.id ? valuePoint : '',
        [t('side')]: history?.side?.id ? valuePoint : '',
        // Fracción: history?.fraction === 0 ? 1 : history?.fraction,
        ...value,
        // Detalle: history?.detail || ''
        [t('detail')]: history?.detail || ''
      }
    })
  }

  const handleTradeHistory = async (
    tradeId: string,
    matchId: number,
    matchDate: Date
  ) => {
    try {
      setIsLoading(true)
      const data = await getTradeHistory(client_user, tradeId)
      const custodyData = await getCustodianTradeHistory(client_user, tradeId)

      const followUpColumns = mapTrackingData(data.trackingTrade)
      const custodyColumns = mapTrackingData(
        custodyData.trackingTrade || [],
        true
      )

      setModalFollowUpColumns(followUpColumns)
      setModalCustodyColumns(custodyColumns)
      setModalHistory({
        // title: 'Seguimiento de la operación',
        title: t('title'),
        subtitle: { bold: t('matchId'), text: matchId.toString() },
        subtitle2: {
          bold: t('subtitle2'),
          text: matchDate.toString().split('T')[0]
        },
        columns: followUpColumns
      })
      setIsModalFollowUp(true)
    } catch (error) {
      if (isDevMode()) {
        console.error('Error fetching trade history:', error)
      }
      setModalContent({
        // title: 'Error en el servidor',
        title: tCommon('title'),
        // message: ERROR_MESSAGES.SERVER_ERROR,
        message: tCommon(ERROR_MESSAGES.SERVER_ERROR),
        variant: 'error',
        onClick: () => {
          setModalContent(null)
          setIsModalFollowUp(false)
        }
      })
    } finally {
      setIsLoading(false)
    }
  }

  return {
    modalFollowUpColumns,
    modalHistory,
    isModalFollowUp,
    isLoading,
    modalContent,
    setModalContent,
    setIsModalFollowUp,
    handleTradeHistory,
    modalCustodyColumns
  }
}

```

## src/features/operations-management/hooks/useValidateOptionsAssignment.ts

```typescript
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, useCallback } from 'react'

import { ErrorResponse } from '@/shared/types'
import { type ModalAlertState } from '@/shared/types/Alerts'

import { FRACTION_ERROR_CODES } from '../constants/FullViewBeneficiaries'
import { validateAssignment } from '../services/validateAssignment'
import { DispatchState } from '../types/dispatchState'
import { ValidateAssignmentResponse } from '../types/validationAssinmentActions'

const initialAssign: Partial<ValidateAssignmentResponse> = {
  isValidCorrection: false,
  isValidAssignment: false,
  maxFractions: 0,
  isOwnPosition: false,
  assignation: {
    allowed: false,
    description: ''
  },
  billable: false,
  hasPendingCorrection: false,
  correctionType: '',
  correction: {
    allowed: false,
    description: null
  }
}
type OptionsPartial = Partial<typeof initialAssign>
const useValidateOptionsAssignment = ({
  activeTab,
  tradeId,
  setModalAlertState
}: {
  activeTab: number
  tradeId?: number
  setModalAlertState?: DispatchState<ModalAlertState>
}) => {
  const [disabledOptions, setDisabledOptions] =
    useState<Partial<ValidateAssignmentResponse>>(initialAssign)

  const valueSide = activeTab

  const updateDisabledOptions = (options: OptionsPartial) => {
    setDisabledOptions((current) => ({ ...current, ...options }))
  }
  const handleAssignmentValidation = useCallback(async () => {
    if (tradeId && valueSide) {
      try {
        await validateAssignment({
          setValidationOptions: updateDisabledOptions,
          tradeId,
          side: valueSide as any
        })
      } catch (error) {
        const err = error as ErrorResponse
        updateDisabledOptions({
          // add: { disabled: true },
          isValidAssignment: false,
          maxFractions: 0,
          isOwnPosition: false
        })
        if (
          err?.response?.data?.errorCode ===
          FRACTION_ERROR_CODES.FINAL_ASSIGNMENT_HAS_ALREADY_SENT
        ) {
          setModalAlertState?.({
            open: true,
            title: 'La asignación definitiva ya se envió a CCP',
            message: '',
            variant: 'warning',
            onClick() {
              setModalAlertState?.(null)
            }
          })
        }
      }
    }
  }, [setModalAlertState, tradeId, valueSide])
  useEffect(() => {
    handleAssignmentValidation()
  }, [handleAssignmentValidation])

  return {
    disabledOptions,
    valueSide
  }
}

export default useValidateOptionsAssignment

```

## src/features/operations-management/hooks/useValidationsButtonsAssignment.ts

```typescript
import { useMemo } from 'react'

import { validationButtonsToolbarAssignment } from '../utils/validationsButtonsToolbarAssignment'
import { type Fraction } from './useStateFraction'

export const useValidationsButtonsAssignment = ({
  fractions,
  quantityIsMinorLimit,
  thereAreSelected,
  maxFractions,
  isCorrection
}: {
  fractions: Fraction[] | null
  quantityIsMinorLimit: boolean
  thereAreSelected?: Fraction[]
  maxFractions: number
  isCorrection?: boolean
}) => {
  const disabledButtons = useMemo(
    () =>
      validationButtonsToolbarAssignment({
        thereAreSelectedFractions: thereAreSelected,
        fractions: fractions || [],
        quantityIsMinorLimit: quantityIsMinorLimit,
        maxFractions,
        isCorrection
      }),
    [fractions, quantityIsMinorLimit, thereAreSelected, maxFractions]
  )

  return { disabledButtons }
}

```

## src/features/operations-management/hooks/useValidationsFractions.ts

```typescript
import { useMemo } from 'react'

import { CountriesCodes } from '../constants/countriesCodes'
import {
  validationsFractionsAssignment,
  ValidationsResult
} from '../utils/validationsFractionsAssignment'
import type { HandleAlertAction } from './useAssignmentAlert'
import type { Fraction } from './useStateFraction'

export const useValidationsFractions = ({
  fractions,
  limitQuantity,
  isCorrection = false,
  countryCodeTrade,
  changeAlert
}: {
  fractions: Fraction[] | null
  limitQuantity: number
  isCorrection?: boolean
  countryCodeTrade: keyof typeof CountriesCodes
  changeAlert: HandleAlertAction
}) => {
  const validations: ValidationsResult | null = useMemo(
    () =>
      validationsFractionsAssignment({
        fractions: fractions || [],
        limitQuantity,
        isCorrection,
        countryCodeTrade,
        changeAlert
      }),
    [fractions, limitQuantity, isCorrection, countryCodeTrade]
  )
  return { validations }
}

```

## src/features/operations-management/pages/OperationDetails.tsx

```tsx
import { NuamThemeWrapper } from '@nuam/common-fe-lib-components'

import {
  ContentWrapper,
  ModalAlert,
  Spinner,
  Toast
} from 'remoteUtilities/components-mf-utilities'

import { OperationTrackingModal } from '@/features/operations-management/components/OperationTrackingModal'
import '@/features/operations-management/styles/operationDetailsStyle.css'

import STORAGE_KEYS from '@/shared/constants/storageKeys'
import useTranslate from '@/shared/hooks/useTranslate'
import { ROUTES, SUBROUTES } from '@/shared/routes'
import { getFromLocalStorage } from '@/shared/utils/localStorage'

import { OperationDetailTabsContainer } from '../components/OperationDetailTabsContainer'
import { useOperation } from '../hooks/UseOperation'
import { useTradeHistory } from '../hooks/useTradeHistory'

export const OperationDetails = () => {
  const client_user = getFromLocalStorage(STORAGE_KEYS.USERNAME)

  const {
    tradeData,
    navigate,
    loading,
    tradeId,
    isToastVisible,
    setIsToastVisible,
    activeTab,
    handleTabChange,
    isModalOpen,
    setIsModalOpen,
    modalDetailAccount,
    handleJointMembers,
    setModalDetailAccount
  } = useOperation()

  const {
    modalFollowUpColumns,
    modalHistory,
    isModalFollowUp,
    modalContent,
    setIsModalFollowUp,
    handleTradeHistory,
    modalCustodyColumns
  } = useTradeHistory(client_user ?? '')
  const { t } = useTranslate({ keyPrefix: 'operationDetail' })
  const { t: trans } = useTranslate({ keyPrefix: 'breadcrumbs' })
  const operationType = tradeData?.trade?.type?.id === 61 ? 'Repo' : 'Contado'
  return (
    <NuamThemeWrapper>
      <ContentWrapper
        // title={
        //   `${'Folio ' + tradeData?.trade?.matchId}` +
        //   ' de Operaciones ' +
        //   (tradeData?.trade?.type?.id === 61 ? 'Repo' : 'Contado')
        // }
        title={t('title', {
          matchId: tradeData?.trade?.matchId,
          operationType: operationType
        })}
        actionBack={() => {
          navigate(ROUTES.OPERATIONS_MANAGEMENT)
        }}
        useSmartBreadcrumbs={false}
        links={[
          {
            name: trans('operationsMaintainer'),
            path: ROUTES.OPERATIONS_MANAGEMENT
          },
          {
            name: trans('operationsFolio', {
              matchId: tradeData?.trade?.matchId
            }),
            path: tradeId
              ? SUBROUTES.OPERATION_BY_ID(Number(tradeId))
              : ROUTES.OPERATIONS_MANAGEMENT
          }
        ]}
      >
        {loading && <Spinner />}
        <>
          <OperationDetailTabsContainer
            tradeData={tradeData}
            currentTab={activeTab}
            onChange={handleTabChange}
            handleTradeHistory={
              handleTradeHistory as unknown as () => Promise<void>
            }
            tradeId={tradeId}
            handleJointMembers={handleJointMembers}
            setModalDetailAccount={setModalDetailAccount}
            setIsModalOpen={setIsModalOpen}
          />
        </>

        {isToastVisible.show && (
          <Toast
            text={isToastVisible.text}
            onClose={() =>
              setIsToastVisible({
                show: false,
                text: ''
              })
            }
          />
        )}

        {isModalOpen && (
          <OperationTrackingModal
            setIsModalOpen={setIsModalOpen}
            title={modalDetailAccount?.title ?? ''}
            subtitle={modalDetailAccount?.subtitle || { bold: '', text: '' }}
            subtitle2={modalDetailAccount?.subtitle2 || { bold: '', text: '' }}
            statusColumns={modalFollowUpColumns}
            custodianStatusColumns={modalCustodyColumns} /* pendiente mapeo*/
          />
        )}
        {isModalFollowUp && (
          <OperationTrackingModal
            setIsModalOpen={setIsModalFollowUp}
            title={modalHistory?.title ?? ''}
            subtitle={modalHistory?.subtitle || { bold: '', text: '' }}
            subtitle2={modalHistory?.subtitle2 || { bold: '', text: '' }}
            statusColumns={modalFollowUpColumns}
            custodianStatusColumns={modalCustodyColumns} /* pendiente mapeo*/
          />
        )}
        {modalContent && (
          <ModalAlert
            title={modalContent.title}
            message={modalContent.message}
            variant={modalContent.variant}
            onClick={modalContent.onClick}
            handleCancel={modalContent.handleCancel}
            textCancel={modalContent.textCancel}
            textSuccess={modalContent.textSuccess}
          />
        )}
      </ContentWrapper>
    </NuamThemeWrapper>
  )
}

export default OperationDetails

```

## src/features/operations-management/pages/OperationsPage.tsx

```tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
import '@/App.css'
import dayjs from 'dayjs'
import {
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react'
import { useNavigate } from 'react-router-dom'

import { useScreenActions } from 'remoteShell/mf-shell-useScreenActions'
import {
  ContentWrapper,
  ModalAlert,
  ModalContent,
  ModalLoad,
  NewTable,
  Spinner,
  Toast
} from 'remoteUtilities/components-mf-utilities'
import { formattedDate } from 'remoteUtilities/formattedDate'

import OperationsFilters from '@/features/operations-management/components/OperationsFilters'
import { useOperationsDownload } from '@/features/operations-management/hooks/useOperationsDownload'
import { useOperationsFilters } from '@/features/operations-management/hooks/useOperationsFilters'
import { useTradeHistory } from '@/features/operations-management/hooks/useTradeHistory'
import { ItemModel } from '@/features/operations-management/types/item'
import { useGetOperationsColumns } from '@/features/operations-management/utils/operationsColumns'

import { OPERATION_MANAGEMENTE_ACTIONS } from '@/shared/constants/actionCodes'
import STORAGE_KEYS from '@/shared/constants/storageKeys'
import useTranslate from '@/shared/hooks/useTranslate'
import { SUBROUTES } from '@/shared/routes'
import { getFromLocalStorage } from '@/shared/utils/localStorage'

import { timeShadeOperation } from '../constants/timeShadeOperation'
import useHideShadeTable from '../hooks/useHideShadeTable'
import { transformLocalTime } from '../utils/transformLocalTime'

const CustomToolbarOperation = lazy(
  () => import('../components/CustomToolbarOperation')
)
const OperationTrackingModal = lazy(() =>
  import('../components/OperationTrackingModal').then((m) => ({
    default: m.OperationTrackingModal
  }))
)
const Operations = () => {
  const navigate = useNavigate()
  const client_user = getFromLocalStorage(STORAGE_KEYS.USERNAME)
  const [data, setData] = useState<ItemModel[]>([])
  const [totalRecords, setTotalRecords] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isToastVisible, setIsToastVisible] = useState(false)
  const [toastMessage, setToastMessage] = useState('Descarga completada')
  const [toastVariant, setToastVariant] = useState<'success' | 'error'>(
    'success'
  )
  const [extension, setExtension] = useState('')
  const [thereAreSelected, setThereAreSelected] = useState<number[]>([])
  const [currentItems, setCurrentItems] = useState<any[]>([])

  // Mover a hook propio de transfer folios
  const [modalContentTransfer, setModalContentTransfer] = useState<any>(null)
  const [disableAutoFetch, setDisableAutoFetch] = useState(false)

  const { t } = useTranslate()

  const { hasAction } = useScreenActions()
  const permissions = useMemo(
    () => ({
      canShowEyeIcon: hasAction(OPERATION_MANAGEMENTE_ACTIONS.EYE_ICON),
      canShowDetail: hasAction(OPERATION_MANAGEMENTE_ACTIONS.SHOW_DETAIL),
      canDownloadMassive: hasAction(
        OPERATION_MANAGEMENTE_ACTIONS.DOWNLOAD_MASSIVE
      ),
      canDownloadIndividual: hasAction(
        OPERATION_MANAGEMENTE_ACTIONS.DOWNLOAD_INDIVIDUAL
      ),
      canTransfer: hasAction(OPERATION_MANAGEMENTE_ACTIONS.CUSTODIAN_TRANSFER),
      canDoAssignmentClosure: hasAction(
        OPERATION_MANAGEMENTE_ACTIONS.ASSIGNMENT_CLOSURE
      )
    }),
    [hasAction]
  )

  const {
    modalFollowUpColumns,
    modalHistory,
    isModalFollowUp,
    isLoading,
    modalContent,
    setModalContent,
    setIsModalFollowUp,
    handleTradeHistory,
    modalCustodyColumns
  } = useTradeHistory(client_user ?? '')

  const {
    onConfirmDownload,
    isLoadingModal,
    setIsLoadingModal,
    participantId
  } = useOperationsDownload({
    client_user,
    setProgress,
    setExtension,
    setModalContent,
    setTotalRecords,
    setIsToastVisible
  })

  const {
    filter,
    selectedCountry,
    dates,
    selectedMatchId,
    setSelectedCountry,
    setDates,
    setSelectedMatchId
  } = useOperationsFilters()

  const filterSelectedItems = (thereAreSelected: number[]) => {
    if (thereAreSelected.length > 0) {
      const items = data.filter((item) => thereAreSelected.includes(item.id))
      setCurrentItems(items)
    }
  }

  const setDataRemote = (_page: number, dataTable: []) => {
    setData(dataTable)
    filterSelectedItems(dataTable)
  }

  useEffect(() => {
    filterSelectedItems(thereAreSelected)
  }, [data, thereAreSelected])

  const columnsModules = useGetOperationsColumns(
    handleTradeHistory,
    permissions
  )
  const [refreshClassField, setRefreshClassField] = useState(false)
  const getRowClassNameMemo = useCallback(
    (params: any) => {
      const lastUpdateStatus = params.row?.lastModifyDate
      const dateLastStatus = transformLocalTime(lastUpdateStatus)

      const now = dayjs()
      const diffSecondsLastStatus = now.diff(dateLastStatus, 'second')
      const validation = (seconds: number) => {
        return seconds >= 0 && seconds <= timeShadeOperation
      }
      const isStatusChanged = validation(diffSecondsLastStatus)

      if (isStatusChanged && lastUpdateStatus) {
        return 'shade-field'
      } else {
        return ''
      }
    },
    [refreshClassField]
  )

  // Callback para actualizar solo las clases de las filas
  const handleClassUpdate = useCallback(() => {
    setRefreshClassField((prev) => !prev)
  }, [])

  useHideShadeTable({ columns: data, onClassUpdate: handleClassUpdate })
  const currentDate = formattedDate({ format: 'YYYY-MM-DD' })
  const nameFile = `OperacionesRV_${currentDate}.csv`

  const onRowDoubleClick = (params: { row: { id: number } }) => {
    const rowId = params.row.id
    navigate(SUBROUTES.OPERATION_BY_ID(rowId))
  }

  const handleFolioTransferSuccess = (
    message: string,
    variant: 'success' | 'error'
  ) => {
    setToastMessage(message)
    setToastVariant(variant)
    setIsToastVisible(true)
  }

  return (
    <>
      <ContentWrapper title={t('operationManagement.title')}>
        <OperationsFilters
          selectedCountry={selectedCountry}
          onCountryChange={setSelectedCountry}
          selectedMatchId={selectedMatchId}
          onMatchIdChange={setSelectedMatchId}
          dates={dates}
          setDates={setDates}
        />
        {isLoading && <Spinner />}
        {filter.url && participantId && (
          <div className="flex flex-col flex-1">
            <NewTable
              columns={columnsModules}
              endpoint={filter.url}
              customToolbar={
                <Suspense fallback={<Spinner />}>
                  <CustomToolbarOperation
                    currentItems={currentItems}
                    onConfirmDownload={onConfirmDownload}
                    permissions={permissions}
                    setModalContent={setModalContent}
                    thereAreSelected={thereAreSelected}
                    setModalContentTransfer={setModalContentTransfer}
                    data={data}
                    participantId={participantId}
                    onFolioTransferSuccess={handleFolioTransferSuccess}
                    onActionStart={() => setDisableAutoFetch(true)}
                    onActionEnd={() => setDisableAutoFetch(false)}
                  />
                </Suspense>
              }
              setDataRemote={setDataRemote}
              axiosInstanceKey="httpOperationsQuery"
              onRowDoubleClick={
                permissions.canShowDetail ? onRowDoubleClick : undefined
              }
              setThereAreSelected={(selected: number[]) => {
                const value = Array.isArray(selected) ? selected : []
                setThereAreSelected(value)
              }}
              rowsPerPageOptions={[25, 50, 75, 100]}
              showDownload={true}
              getRowClassName={getRowClassNameMemo}
              sx={{
                ' & .shade-field': {
                  bgcolor:
                    'color-mix(in srgb, var(--mui-palette-secondary-main) 8%, transparent)'
                }
              }}
              csvFileName={nameFile}
              disableAutoFetch={disableAutoFetch}
            />
          </div>
        )}
      </ContentWrapper>
      {isModalFollowUp && (
        <Suspense fallback={<Spinner />}>
          <OperationTrackingModal
            setIsModalOpen={setIsModalFollowUp}
            title={modalHistory?.title || ''}
            subtitle={modalHistory?.subtitle || { bold: '', text: '' }}
            subtitle2={modalHistory?.subtitle2}
            statusColumns={modalFollowUpColumns}
            custodianStatusColumns={modalCustodyColumns} /* pendiente mapeo*/
          />
        </Suspense>
      )}
      {modalContent &&
        (modalContent.modalContent ? (
          <ModalContent {...modalContent} />
        ) : (
          <ModalAlert {...modalContent} />
        ))}
      {isLoadingModal && (
        <ModalLoad
          reset={() => setIsLoadingModal(false)}
          progress={progress}
          message="Estamos preparando la descarga:"
          fileName={totalRecords === 1 ? '' : `comprobante/s.${extension}`}
          closeButtonText="Cancelar"
        />
      )}
      {isToastVisible && (
        <Toast
          text={toastMessage}
          variant={toastVariant}
          onClose={() => setIsToastVisible(false)}
        />
      )}
      {modalContentTransfer?.open && <ModalContent {...modalContentTransfer} />}
      {/* {modalState?.open && <Toast {...modalState} />} */}
    </>
  )
}
export default Operations

```

## src/features/operations-management/services/Beneficiary.ts

```typescript

```

## src/features/operations-management/services/administratorFICOptions.ts

```typescript
import { httpCustodyStatus } from 'remoteShell/mf-axiosConfig'

import { get } from '@/shared/config/methods'
import { BusinessType } from '@/shared/types'
import { CommonResponseAutoComplete } from '@/shared/types/common'

import { OPERATIONS_API_ROUTES } from '../constants/endpoints'

export interface FICOptions {
  id: number
  code: string
  name: string
  shortName: string
  type: BusinessType
  status: BusinessType
  identificationType: BusinessType
  bank_account: string
}

export const administratorFICOptions = async ({
  changeOptions,
  page
}: {
  changeOptions: (newValue: FICOptions[]) => void
  page?: number
}) => {
  const response = await get({
    axiosInstance: httpCustodyStatus,
    urlWithParams: OPERATIONS_API_ROUTES.GET_FIC_ADMINISTRATOR_OPTIONS(page)
  })
  const result = response.data as CommonResponseAutoComplete<FICOptions[]>
  changeOptions(result.content)
  return result
}

```

## src/features/operations-management/services/assigmentCorrectionsService.ts

```typescript
/**
 * Servicio simulado para obtener opciones de corrección
 * según el tipo de operación (compra o venta)
 */
import { httpOperationsQuery } from 'remoteShell/mf-axiosConfig'

import { get } from '@/shared/config/methods'

import { OPERATIONS_API_ROUTES } from '../constants/endpoints'

export interface CorrectionOption {
  id: string
  label: string
  value: string
  description?: string
}

export enum OperationType {
  BUY = 1,
  SELL = 2
}

/**
 * Simula la obtención de opciones de corrección desde un servicio
 * @param sideId - 1 para compra, 2 para venta
 * @returns Promise con las opciones de corrección disponibles
 */
export const getAssignmentCorrectionsOptions = async (
  tradeId: number,
  sideId: number
): Promise<CorrectionOption[]> => {
  const response = await get({
    axiosInstance: httpOperationsQuery,
    urlWithParams: OPERATIONS_API_ROUTES.CORRECTION_TYPE_OPTIONS({
      tradeId,
      sideId
    })
  })

  return (
    response.data?.availableStatuses?.map((item: CorrectionOption) => ({
      ...item,
      label: item?.description,
      value: item?.id
    })) || []
  )
}

/**
 * Simula la obtención de información de validación de corrección
 * @param tradeId - ID de la operación
 * @param sideId - 1 para compra, 2 para venta
 * @returns Promise con los datos de validación de corrección
 */
// export const getCorrectionValidation = async (
//   tradeId: number,
//   sideId: number
// ): Promise<CorrectionValidationResponse> => {
//   const response = await get({
//     axiosInstance: httpOperationsQuery,
//     urlWithParams: OPERATIONS_API_ROUTES.VERIFY_CORRECTION({ tradeId, sideId })
//   })

//   return response.data
// }

```

## src/features/operations-management/services/assignmentCalculationCounted.ts

```typescript
import { httpOperationsQuery } from 'remoteShell/mf-axiosConfig'

import { post } from '@/shared/config/methods'

import { OPERATIONS_API_ROUTES } from '../constants/endpoints'

export interface AssignmentCalculationCountedResponse {
  valTax: number
  commissionPercentage: number
  amount: number
  commissionAmount: number
  valTaxAmount: number
  netAmount: number
  transferValue: number
  returnAmount: number
}
export const assignmentCalculationCounted = async ({
  body,
  ...params
}: {
  tradeId: number
  countryId: number
  accountNumber: string
  accountSourceType: number
  body: {
    quantity: number
    price: number
    commission: number
    sideId: string
  }
}) => {
  const response = await post({
    axiosInstance: httpOperationsQuery,
    urlWithParams: OPERATIONS_API_ROUTES.CALCULATION_COUNTED(params),
    data: body
  })
  return response.data as AssignmentCalculationCountedResponse
}

```

## src/features/operations-management/services/assignmentCashAccount.ts

```typescript
import { httpOperationsCmd } from 'remoteShell/mf-axiosConfig'

import { get } from '@/shared/config/methods'

import { OPERATIONS_API_ROUTES } from '../constants/endpoints'

export interface AssignmentCashAccountResponse {
  id: number
  bankId: number
  participantId: number
  bankAccount: string
  principal: boolean
}
export const assignmentCashAccount = async ({
  sideId,
  tradeId
}: {
  tradeId: number
  sideId: string
}) => {
  const response = await get({
    axiosInstance: httpOperationsCmd,
    urlWithParams: OPERATIONS_API_ROUTES.GET_CASH_ACCOUNT({
      tradeId: tradeId,
      sideId: sideId
    })
  })
  return response.data as AssignmentCashAccountResponse
}

```

## src/features/operations-management/services/assignmentClosureService.ts

```typescript
import {
  httpOperationsQuery,
  httpOperationsCmd
} from 'remoteShell/mf-axiosConfig'

import { post } from '@/shared/config/methods'

import { OPERATIONS_API_ROUTES } from '../constants/endpoints'

export interface AssignmentClosurePayload {
  tradeId: number
  participantId: string | null
}

export interface AssignmentClosurePreviewResponse extends Array<AssignmentClosurePreviewItem> {}

export interface AssignmentClosurePreviewItem {
  tradeId: number
  matchDate: string
  matchId: number
  clearingDate: string
  side: {
    id: string
    description: string
  }
  participant: {
    id: number
    code: string
    name: string
  }
}

export interface AssignmentClosureConfirmPayload {
  tradeId: number
  sideId: string
}

export interface AssignmentClosureConfirmResponse {
  successfulAssignmentClosure: AssignmentClosureConfirmItem[]
  errorAssignmentClosure: AssignmentClosureConfirmItem[]
}

export interface AssignmentClosureConfirmItem {
  tradeId: number
  message: string
  matchDate: string | null
  matchId: number | null
  clearingDate: string | null
  side: {
    id: string
    description: string
  } | null
  participant: {
    id: number
    code: string
    name: string
  } | null
}

export const getAssignmentClosurePreview = async (
  payload: AssignmentClosurePayload[],
  userConfirmed = false,
  isClosingTimeSecondary?: boolean
): Promise<AssignmentClosurePreviewResponse> => {
  try {
    const response = await post({
      axiosInstance: httpOperationsQuery,
      urlWithParams:
        OPERATIONS_API_ROUTES.ASSIGNMENT_CLOSURE_PREVIEW(userConfirmed),
      data: payload,
      customHeaders: {
        'X-Closing-Time-Secondary': String(isClosingTimeSecondary ?? false)
      }
    })
    return response.data
  } catch (error) {
    console.error('Error getting assignment closure preview:', error)
    throw new Error('Error al obtener vista previa de cierre de asignación')
  }
}

export const confirmAssignmentClosure = async (
  payload: AssignmentClosureConfirmPayload[],
  userConfirmed = false
): Promise<AssignmentClosureConfirmResponse> => {
  try {
    const response = await post({
      axiosInstance: httpOperationsCmd,
      urlWithParams:
        OPERATIONS_API_ROUTES.ASSIGNMENT_CLOSURE_CONFIRM(userConfirmed),
      data: payload
    })
    return response.data
  } catch (error) {
    console.error('Error confirming assignment closure:', error)
    throw new Error('Error al confirmar cierre de asignación')
  }
}

```

## src/features/operations-management/services/assignmentOriginOptions.ts

```typescript
import { httpFilterParameters } from 'remoteShell/mf-axiosConfig'

import { BusinessType } from '@/features/settlement-file/types'

import { get } from '@/shared/config/methods'

import { OPERATIONS_API_ROUTES } from '../constants/endpoints'

export interface FICOptions {
  id: number
  ficAdministratorCode: string
  description: string
}
export const assignmentOriginOptions = async ({
  changeOptions
}: {
  changeOptions: (newValue: BusinessType[]) => void
}) => {
  const response = await get({
    axiosInstance: httpFilterParameters,
    urlWithParams: OPERATIONS_API_ROUTES.GET_ASSIGNMENT_ORIGIN_OPTIONS()
  })
  const result = response.data as BusinessType[]

  changeOptions(result)
  return result
}

```

## src/features/operations-management/services/assignmentValidateAccount.ts

```typescript
import { httpOperationsCmd } from 'remoteShell/mf-axiosConfig'

import { get } from '@/shared/config/methods'

import { OPERATIONS_API_ROUTES } from '../constants/endpoints'
import { type AccountPayload } from '../types/responseValidateAccount'

const assignmentValidateAccount = async ({
  account,
  originId,
  sideId,
  tradeId,
  isCorrection
}: {
  account: string
  sideId: string
  tradeId: number
  isCorrection?: boolean
  originId: number
}) => {
  const url = OPERATIONS_API_ROUTES.GET_ACCOUNT_VALIDATION({
    accountNumber: account,
    sideId,
    tradeId,
    isCorrection,
    originId
  })
  const data = await get({
    axiosInstance: httpOperationsCmd,
    urlWithParams: url
  })
  return data.data as AccountPayload
}
export default assignmentValidateAccount

```

## src/features/operations-management/services/custodianOptions.ts

```typescript
import { httpFilterParameters } from 'remoteShell/mf-axiosConfig'

import { get } from '@/shared/config/methods'
import { CommonResponseAutoComplete } from '@/shared/types/common'
import { ParticipantShort } from '@/shared/types/participant'

import { OPERATIONS_API_ROUTES } from '../constants/endpoints'

export const getCustodianOptions = async ({
  changeOptionsCustodian,
  countryId
}: {
  changeOptionsCustodian: (newValue: ParticipantShort[]) => void
  countryId: number
}) => {
  const response = await get({
    axiosInstance: httpFilterParameters,
    urlWithParams: OPERATIONS_API_ROUTES.GET_CUSTODIAN_OPTIONS({ countryId })
  })
  const data = response.data as CommonResponseAutoComplete<ParticipantShort[]>
  changeOptionsCustodian(data.content)
  return response
}

```

## src/features/operations-management/services/fetchFolioOptions.ts

```typescript
import { httpOperationsQuery } from 'remoteShell/mf-axiosConfig'
import { formattedDate } from 'remoteUtilities/formattedDate'

import { type CommonResponseAutoComplete } from '@/shared/types/common'
import { buildCustomHeaders } from '@/shared/utils/headerServices'

import { type DatesFilter } from '../components/OperationsFilters'
import { OPERATIONS_API_ROUTES } from '../constants/endpoints'

export const fetchFolioOptions = async (params: {
  matchId?: string
  page?: number
  size?: number
  dates: DatesFilter
}) => {
  const { dates } = params
  const formatDate = 'YYYY-MM-DD'
  const registerDate = !dates?.complianceDate
    ? formattedDate({
        date: dates?.registerDate ?? new Date(),
        format: formatDate
      })
    : undefined
  const complianceDate =
    dates?.complianceDate && !dates?.registerDate
      ? formattedDate({
          date: dates?.complianceDate,
          format: formatDate
        })
      : undefined
  const filtersParams = {
    startMatchDate: registerDate,
    endMatchDate: registerDate,
    startClearingDate: complianceDate,
    endClearingDate: complianceDate,
    matchId:
      params.matchId && params.matchId?.length > 0 ? params.matchId : undefined
  }

  const data = await httpOperationsQuery.get<
    CommonResponseAutoComplete<number[]>
  >(OPERATIONS_API_ROUTES.GET_TRADE_SEARCH(), {
    headers: await buildCustomHeaders({}),
    params: filtersParams
  })
  return data.data
}

```

## src/features/operations-management/services/folioTransferService.ts

```typescript
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  httpOperationsCustodyTransfer,
  httpCustodyStatus,
  httpFilterParameters,
  httpActionCustody
} from 'remoteShell/mf-axiosConfig'

import { get, post } from '@/shared/config/methods'

import { OPERATIONS_API_ROUTES } from '../constants/endpoints'
import {
  FolioTransferSettlement,
  FolioTransferParams
} from '../types/folioTransfer'

/**
 * Parámetros para consultar admisiones pendientes
 */
export interface IPendingAdmissionsParams {
  page?: number
  size?: number
  sort?: string
  order?: 'asc' | 'desc'
  participantId?: number
  userType: string
}

/**
 * Respuesta del endpoint de admisiones pendientes
 */
export interface IPendingAdmissionsResponse {
  content: any[]
  totalElements: number
  totalPages: number
  size: number
  number: number
}

const BASE_URL =
  '/operations-custody-transfer-api/v1/settlement/by-list-tradeid-participant-user'

export const folioTransferService = {
  /**
   * Obtiene la lista de liquidaciones para transferencia de folios
   */
  async getSettlementsByTradeIds(
    params: FolioTransferParams
  ): Promise<FolioTransferSettlement[]> {
    const { data } = await httpOperationsCustodyTransfer.get<
      FolioTransferSettlement[]
    >(BASE_URL, {
      params: {
        page: params.page,
        size: params.size,
        sort: params.sort,
        order: params.order,
        tradeId: params.tradeId,
        participantId: params.participantId,
        userType: params.userType
      }
    })
    return data
  }
}

export interface IFicAdministrator {
  id: number
  code: string
  name: string
}

export interface IFolioTransferPayload {
  tradeId: number
  fraction: number
  sideId: string
  custodianId: number
  ficAdministratorId: number
  statusId?: number
}

/**
 * Obtiene la lista de administradores FIC
 * @returns Promise con el array de administradores FIC
 */
export interface IFicAdminsResult {
  data: IFicAdministrator[]
  total: number
}

export const getFicAdministrators = async (
  search: string = '',
  page: number = 0,
  size: number = 10
): Promise<IFicAdminsResult> => {
  try {
    const response = await get({
      axiosInstance: httpCustodyStatus,
      urlWithParams: OPERATIONS_API_ROUTES.GET_FIC_ADMINISTRATOR_OPTIONS(),
      params: { search, page, size }
    })
    const result = response.data as any
    let data: IFicAdministrator[] = []
    let total = 0

    if (Array.isArray(result)) {
      data = result as IFicAdministrator[]
      total = data.length
    } else if (result && typeof result === 'object') {
      if (Array.isArray(result.content)) {
        data = result.content as IFicAdministrator[]
        total = Number(result.totalElements ?? data.length)
      } else {
        data = (result.data ?? result.items ?? []) as IFicAdministrator[]
        total = Number(result.total ?? data.length ?? 0)
      }
    }

    return { data, total }
  } catch (error) {
    console.error('Error fetching FIC administrators:', error)
    throw new Error('Error al cargar administradores FIC')
  }
}

/**
 * Transfiere folios seleccionados a un custodio
 * @param payload Array con la información de las filas a transferir
 * @returns Promise con la respuesta del servidor
 */
export const transferFolios = async (
  payload: IFolioTransferPayload[],
  isClosingTimeSecondary?: boolean
): Promise<any> => {
  try {
    const response = await post({
      axiosInstance: httpActionCustody,
      urlWithParams: '/custody-actions/transfer',
      data: payload,
      customHeaders: {
        'X-Closing-Time-Secondary': String(isClosingTimeSecondary ?? false)
      }
    })
    return response.data
  } catch (error) {
    console.error('Error transferring folios:', error)
    throw new Error('Error al transferir folios')
  }
}

/**
 * Obtiene la lista de custodios disponibles para transferencia
 * @param tradeId ID del trade para filtrar custodios
 * @returns Promise con el array de participantes custodios
 */
export const getCustodianOptionsForTransfer = async ({
  countryId
}: {
  countryId: number
}): Promise<any[]> => {
  try {
    const response = await get({
      axiosInstance: httpFilterParameters,
      urlWithParams: `/participants/custodians?countryId=${countryId}`
    })
    return response.data?.content
  } catch (error) {
    console.error('Error fetching custodian options for transfer:', error)
    throw new Error('Error al cargar opciones de custodio')
  }
}

/**
 * Verifica si existen admisiones de traslado pendientes
 * @param params Parámetros de consulta
 * @returns Promise con la respuesta de admisiones pendientes
 */
export const getPendingAdmissions = async (
  params: IPendingAdmissionsParams
): Promise<IPendingAdmissionsResponse> => {
  try {
    const response = await get({
      axiosInstance: httpOperationsCustodyTransfer,
      urlWithParams: '/settlement/pending-admissions',
      params: {
        page: params.page ?? 0,
        size: params.size ?? 10,
        sort: params.sort ?? 'id',
        order: params.order ?? 'asc',
        participantId: params.participantId,
        userType: params.userType
      }
    })

    // Handle different response structures
    const result = response.data as any

    if (result && typeof result === 'object') {
      if ('content' in result) {
        return result as IPendingAdmissionsResponse
      }
      // If response is an array, wrap it
      if (Array.isArray(result)) {
        return {
          content: result,
          totalElements: result.length,
          totalPages: 1,
          size: result.length,
          number: 0
        }
      }
    }

    return {
      content: [],
      totalElements: 0,
      totalPages: 0,
      size: 0,
      number: 0
    }
  } catch (error) {
    console.error('Error fetching pending admissions:', error)
    throw new Error('Error al verificar admisiones pendientes')
  }
}

/**
 * Verifica si el usuario tiene admisiones pendientes
 * @param params Parámetros de consulta
 * @returns Promise<boolean> - true si hay admisiones pendientes
 */
export const hasPendingAdmissions = async (
  params: IPendingAdmissionsParams
): Promise<boolean> => {
  try {
    const response = await getPendingAdmissions({ ...params, size: 1 })
    return response.totalElements > 0
  } catch (error) {
    console.error('Error checking pending admissions:', error)
    return false
  }
}

```

## src/features/operations-management/services/fullViewBeneficiaries.ts

```typescript
import { httpOperations, httpOperationsRepo } from 'remoteShell/mf-axiosConfig'
import { formatToServerTime } from 'remoteUtilities/formatToUserLocalTime'

import { OPERATIONS_API_ROUTES } from '@/features/operations-management/constants/endpoints'

import { buildCustomHeaders } from '@/shared/utils/headerServices'
import isDevMode from '@/shared/utils/isDevMode'

interface comissionBody {
  commission: string | number
  price: number
  quantity: number
  valTax?: number
  sideId: number | string | null
}

interface FractionBody {
  fraction: number
  investorAccountId: number
  participantAccountId: number
  fiduciarySpecialist: boolean
  sourceQuoteTypeId: number
  reference: string
  fractionQuantity: number
  commissionPercentage: number
  valTax: number
  statusId?: number
}

export const calculationComissionAdd = async (
  client_user: string | null,
  body: comissionBody,
  tradeId: number | string | null,
  countryId: undefined | number,
  repo: boolean | null
) => {
  try {
    const httpClient = repo ? httpOperationsRepo : httpOperations

    const response = await httpClient.post(
      OPERATIONS_API_ROUTES.CALCULATION_COMMISSION_ADD(
        tradeId,
        countryId,
        repo
      ),
      body,
      {
        headers: await buildCustomHeaders({ client_user: client_user ?? '' })
      }
    )
    return response.data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error validation repo:', error)
    }
    throw error
  }
}

export const createFraction = async (
  client_user: string | null,
  body: FractionBody[],
  tradeId: number | string | null,
  sideId: number | string | null,
  repo: boolean | null
) => {
  try {
    const httpClient = repo ? httpOperationsRepo : httpOperations

    const response = await httpClient.post(
      OPERATIONS_API_ROUTES.CREATE_FRACTION(tradeId, sideId, repo),
      body,
      {
        headers: await buildCustomHeaders({ client_user: client_user ?? '' })
      }
    )
    return response.data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error validation repo:', error)
    }
    throw error
  }
}

export const updateFraction = async (
  client_user: string | null,
  body: FractionBody[],
  tradeId: number | string | null,
  sideId: number | string | null,
  repo: boolean | null
) => {
  try {
    const httpClient = repo ? httpOperationsRepo : httpOperations

    const response = await httpClient.put(
      OPERATIONS_API_ROUTES.UPDATE_FRACTION(tradeId, sideId, repo),
      body,
      {
        headers: await buildCustomHeaders({ client_user: client_user ?? '' })
      }
    )
    return response.data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error validation repo:', error)
    }
    throw error
  }
}

export const validateAccount = async (
  client_user: string | null,
  tradeId: number | string | null,
  accountNumber: string | number,
  sideId: any,
  repo: boolean | null
) => {
  try {
    const httpClient = repo ? httpOperationsRepo : httpOperations

    const response = await httpClient.get(
      OPERATIONS_API_ROUTES.VALIDATE_ACCOUNT(
        accountNumber,
        tradeId,
        sideId,
        repo
      ),
      {
        headers: await buildCustomHeaders({ client_user: client_user ?? '' })
      }
    )
    return response.data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error validation repo:', error)
    }
    throw error
  }
}

export const validateDepository = async (
  client_user: string | null,
  tradeId: number | string | null,
  sideId: number | string | null,
  repo: boolean | null
): Promise<boolean> => {
  try {
    const httpClient = repo ? httpOperationsRepo : httpOperations

    const response = await httpClient.get(
      OPERATIONS_API_ROUTES.VALIDATE_DEPOSITORY(tradeId, sideId, repo),
      {
        headers: await buildCustomHeaders({ client_user: client_user ?? '' })
      }
    )
    return response.data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error validation custodian:', error)
    }
    throw error
  }
}

export const validateMaximumQuantity = async (
  client_user: string | null,
  body: { fractionQuantity: number }[],
  tradeId: string | number | null,
  isRepo: boolean | null
): Promise<boolean> => {
  try {
    const httpClient = isRepo ? httpOperationsRepo : httpOperations

    const response = await httpClient.post(
      OPERATIONS_API_ROUTES.VALIDATE_MAXIMUM_QUANTITY(tradeId, isRepo),
      body,
      {
        headers: await buildCustomHeaders({ client_user: client_user ?? '' })
      }
    )

    return response.data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error validation maximum quantity:', error)
    }
    throw error
  }
}

export const validateMaximumFractions = async (
  client_user: string | null,
  tradeId: string | number | null,
  body: { fractionQuantity: number }[],
  isRepo: boolean | null
): Promise<boolean> => {
  try {
    const httpClient = isRepo ? httpOperationsRepo : httpOperations

    const response = await httpClient.post(
      OPERATIONS_API_ROUTES.VALIDATE_MAXIMUM_FRACTIONS(tradeId, isRepo),
      body,
      {
        headers: await buildCustomHeaders({ client_user: client_user ?? '' })
      }
    )
    return response.data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error validation maximum fractions:', error)
    }
    throw error
  }
}

export const calculationComissionEdit = async (
  client_user: string | null,
  body: comissionBody,
  tradeId: number | string | null,
  repo: boolean | null
) => {
  try {
    const httpClient = repo ? httpOperationsRepo : httpOperations

    const response = await httpClient.post(
      OPERATIONS_API_ROUTES.CALCULATION_COMMISSION_EDIT(tradeId, repo),
      body,
      {
        headers: await buildCustomHeaders({ client_user: client_user ?? '' })
      }
    )
    return response.data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error validation repo:', error)
    }
    throw error
  }
}

export const rangeQuantity = async (
  client_user: string | null,
  body: { fractionQuantity: number }[],
  tradeId: number | string | null,
  repo: boolean | null
) => {
  try {
    const httpClient = repo ? httpOperationsRepo : httpOperations

    const response = await httpClient.post(
      OPERATIONS_API_ROUTES.RANGE_QUANTITY(tradeId, repo),
      body,
      {
        headers: await buildCustomHeaders({ client_user: client_user ?? '' })
      }
    )
    return response.data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error validation repo:', error)
    }
    throw error
  }
}

export const getTradeById = async (
  tradeId: string | number,
  client_user: string | null
): Promise<{ price: number; country: any }> => {
  try {
    const { data } = await httpOperations.get(
      OPERATIONS_API_ROUTES.GET_TRADE_BY_ID(tradeId),
      {
        headers: await buildCustomHeaders({
          client_datetime: formatToServerTime(),
          client_user: client_user ?? ''
        })
      }
    )

    return data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error fetching trade data:', error)
    }
    throw error
  }
}

```

## src/features/operations-management/services/getCountryAdministration.ts

```typescript
import { httpParticipants } from 'remoteShell/mf-axiosConfig'

import { ENDPOINTS } from '@/shared/constants/endpoints'
import { getHeaders } from '@/shared/utils/getHeaders'
import isDevMode from '@/shared/utils/isDevMode'

import { CountryOptions } from '../types/country'

export const getCountryAdministration = async () => {
  try {
    const headers = await getHeaders()
    const response = await httpParticipants.get<CountryOptions>(
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

## src/features/operations-management/services/getSettlement.ts

```typescript
import { httpOperationsQuery } from 'remoteShell/mf-axiosConfig'

import { get } from '@/shared/config/methods'
import { CommonResponseAutoComplete } from '@/shared/types/common'
import { type Settlement } from '@/shared/types/settlement'

import { OPERATIONS_API_ROUTES } from '../constants/endpoints'
import { DispatchState } from '../types/dispatchState'

export const getSettlement = async (params: {
  tradeId: number
  side: string
  setSettlement: DispatchState<Settlement[]>
}) => {
  const response = await get({
    axiosInstance: httpOperationsQuery,
    urlWithParams: OPERATIONS_API_ROUTES.GET_SETTLEMENT({
      ...params,
      isEditable: true
    })
  })
  const data = response.data as CommonResponseAutoComplete<Settlement[]>
  params.setSettlement(data.content)
  return data.content
}

```

## src/features/operations-management/services/operationDetails.ts

```typescript
import { httpOperationsQuery } from 'remoteShell/mf-axiosConfig'

import { OPERATIONS_API_ROUTES } from '@/features/operations-management/constants/endpoints'

import { buildCustomHeaders } from '@/shared/utils/headerServices'
import isDevMode from '@/shared/utils/isDevMode'

export const getCalculationTotalAmount = async (
  client_user: string | null,
  tradeId: string,
  sideId: string
) => {
  try {
    const response = await httpOperationsQuery.get(
      OPERATIONS_API_ROUTES.GET_CALCULATION_TOTAL_AMOUNT(tradeId, sideId),
      {
        headers: await buildCustomHeaders({ client_user: client_user ?? '' })
      }
    )
    return response.data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error fetching user information:', error)
    }
    throw error
  }
}

```

## src/features/operations-management/services/patchCommission.ts

```typescript
import { httpOperations } from 'remoteShell/mf-axiosConfig'

import { buildStandardHeaders } from '@/shared/utils/headerServices'
import isDevMode from '@/shared/utils/isDevMode'

export const patchCommission = async (
  trade: number,
  fraction: number,
  side: number,
  valueCommission: string
) => {
  try {
    const data = {
      commissionPercentage: Number(valueCommission)
    }
    const headers = await buildStandardHeaders()
    const response = await httpOperations.patch(
      `/settlement/update-commission/trade/${trade}/fraction/${fraction}/side/${side}`,
      data,
      { headers }
    )
    return response.data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error saving commission:', error)
    }
    throw error
  }
}

```

## src/features/operations-management/services/saveAssignment.ts

```typescript
import { httpOperationsCmd } from 'remoteShell/mf-axiosConfig'

import { post } from '@/shared/config/methods'

import { OPERATIONS_API_ROUTES } from '../constants/endpoints'
import { type Fraction } from '../hooks/useStateFraction'
import { transformFractionToSave } from '../utils/transformFractionToSave'

export interface BodyAssignment {
  investorAccountId: number
  participantAccountId: number
  fiduciarySpecialist: boolean
  sourceQuoteTypeId: number
  reference?: string
  fractionQuantity: number
  commissionPercentage: number
  valTax: number
  cashAccount?: number | string
  custodianId?: number
  ficAdministratorId: number
  returnTurnoverValue?: number
  fraction?: number
  milaDirectDepositorId?: number
  referencePackage?: string
}
export type BodySaveAssignment = BodyAssignment[]

export const saveAssignmentEndpoint = async ({
  params,
  body
}: {
  params: { tradeId: number; sideId: string }
  body: Fraction[]
}) => {
  const transformBody = transformFractionToSave({
    body
  })
  const response = await post({
    axiosInstance: httpOperationsCmd,
    urlWithParams: OPERATIONS_API_ROUTES.SAVE_ASSIGNMENT(params),
    data: transformBody
  })
  return response.data
}

```

## src/features/operations-management/services/saveCorrectionEndpoint.ts

```typescript
import { httpOperationsCmd } from 'remoteShell/mf-axiosConfig'

import { put } from '@/shared/config/methods'
import { type Participant } from '@/shared/types/participant'

import { OPERATIONS_API_ROUTES } from '../constants/endpoints'
import { type Fraction } from '../hooks/useStateFraction'
import { transformFractionToSaveCorrection } from '../utils/transformFractionToSaveCorrection'

export interface SaveCorrectionParams {
  params: { tradeId: number; sideId: string; correctionTypeId: string }
  body: Fraction[]
  custodian: Participant | null
}

/**
 * Guarda la corrección de asignación para una operación específica
 *
 * @param params - Parámetros del trade y side
 * @param body - Fracciones a corregir
 * @param custodian - Custodio asociado
 * @returns Promise con la respuesta del servidor
 */
export const saveCorrectionEndpoint = async ({
  params,
  body
}: SaveCorrectionParams) => {
  const transformBody = transformFractionToSaveCorrection({
    body
  })

  const response = await put({
    axiosInstance: httpOperationsCmd,
    urlWithParams: OPERATIONS_API_ROUTES.SAVE_CORRECTION(params),
    data: transformBody
  })

  return response.data
}

```

## src/features/operations-management/services/updateAssignment.ts

```typescript
import { httpOperationsCmd } from 'remoteShell/mf-axiosConfig'

import { put } from '@/shared/config/methods'

import { OPERATIONS_API_ROUTES } from '../constants/endpoints'
import { type Fraction } from '../hooks/useStateFraction'
import { transformFractionToSave } from '../utils/transformFractionToSave'

export const updateAssignmentEndpoint = async ({
  params,
  body
}: {
  params: { tradeId: number; sideId: string }
  body: Fraction[]
}) => {
  const transformBody = transformFractionToSave({
    body
  })
  const response = await put({
    axiosInstance: httpOperationsCmd,
    urlWithParams: OPERATIONS_API_ROUTES.UPDATE_ASSIGNMENT(params),
    data: transformBody
  })
  return response.data
}

```

## src/features/operations-management/services/validateAssignment.ts

```typescript
import { httpOperationsQuery } from 'remoteShell/mf-axiosConfig'

import { get } from '@/shared/config/methods'

import { OPERATIONS_API_ROUTES } from '../constants/endpoints'
import type { ValidateAssignmentResponse } from '../types/validationAssinmentActions'

export const validateAssignment = async ({
  tradeId,
  side,
  setValidationOptions
}: {
  tradeId: number
  side: string
  setValidationOptions: (options: ValidateAssignmentResponse) => void
}) => {
  const response = await get({
    axiosInstance: httpOperationsQuery,
    urlWithParams: OPERATIONS_API_ROUTES.VALIDATE_ASSIGNMENT(tradeId, side)
  })
  const data = response.data as ValidateAssignmentResponse
  setValidationOptions(data)
  return response
}

```

## src/features/operations-management/services/validateCorrectAssignment.ts

```typescript
import { Side } from '@/shared/types'

interface ValidateCorrectAssignmentParams {
  tradeId: number
  side: Side
}

/**
 * Valida si es posible corregir la asignación para una operación específica
 *
 * @returns Promise<boolean> - true si se puede corregir, false en caso contrario
 *
 * TODO: Integrar con el servicio real cuando esté disponible
 * Endpoint esperado: GET /api/assignments/{tradeId}/validate-correction?side={side}
 */
export const validateCorrectAssignment = async ({
  tradeId,
  side
}: ValidateCorrectAssignmentParams): Promise<boolean> => {
  // Implementación temporal - siempre retorna true
  // Simula una llamada asíncrona
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(
        `[MOCK] Validando corrección de asignación - TradeId: ${tradeId}, Side: ${side}`
      )
      resolve(true)
    }, 100)
  })

  /* 
  // Implementación futura con el servicio real:
  try {
    const response = await httpOperations.get(
      `/assignments/${tradeId}/validate-correction`,
      { params: { side } }
    )
    return response.data.canCorrect ?? false
  } catch (error) {
    console.error('Error validando corrección de asignación:', error)
    throw error
  }
  */
}

```

## src/features/operations-management/styles/beneficiariesStyles.css

```css
.beneficiaries-container-checkbox {
  @apply w-full flex gap-x-1;
}

.beneficiaries-btn-checkbox {
  @apply w-5 h-5 rounded-[4px] border-[1px] flex justify-center items-center;
}

```

## src/features/operations-management/styles/operationDetailsStyle.css

```css
.create-pdf-div div {
  margin: 10px;
  text-align: center;
}

```

## src/features/operations-management/types/FullViewBeneficiaries.d.ts

```typescript
export interface Account {
  id: string
  participant?: { depositoryId?: string }
  investor?: { depositoryId?: string }
  accountNumber: string
}

export interface Row {
  fraction?: number
  investorAccount?: Account | null
  participantAccount?: Account | null
  fiduciarySpeciafalist?: boolean
  sourceQuoteType?: { id: string }
  editedReference?: string
  referenceAllocId?: string
  editedFractionQuantity?: number
  fractionQuantity?: number
  commissionPercentage?: number
  directDepositor?: { id: string }
  valTax?: number
}

export interface UserInfo {
  id: string
  participantId: string
  status: { id: string }
  country: { id: string; code: string }
  userType: string
}

export type ToastVariant = 'success' | 'error'

export interface BeneficiaryFormData {
  cuenta: string
  referencia: string
  cantidad: string
  comision: string
}

export interface AccountData {
  investorAccount?: {
    id?: string
    accountNumber?: string
    investor?: {
      id?: string
      name?: string
      lastName?: string
      code?: string
      firstName?: string
      documentNumber?: string
      companyName?: string
      identificationType?: {
        description?: string
      }
    }
  }
  participantAccount?: {
    id?: string
    accountNumber?: string
    participant?: {
      name?: string
      code?: string
      documentNumber?: string
      identificationType?: {
        description?: string
      }
    }
  }
  sourceQuoteType?: {
    id?: string
    description?: string
  }
  fiduciarySpecialist?: string
  masterAccount?: string
  outFlowTurnoverValue?: string
  custodianName?: string
  custodianId?: string
}

export interface CommissionData {
  quantity?: string
  commissionPercentage?: string
  commissionAmount?: string
  valTax?: string
  netAmount?: string
  transferValue?: string
}

export interface DepositoryData {
  id?: string
  code?: string
}

```

## src/features/operations-management/types/correction.d.ts

```typescript
export interface CorrectionValidationResponse {
  billable: boolean
  hasPendingCorrection: boolean
  correction: {
    allowed: boolean
    status: string
    description: string
  }
  correctionType: string
}

export interface BodyCorrection {
  investorAccountId: number
  participantAccountId: number
  directDepositorId?: number
  fiduciarySpecialist: boolean
  sourceQuoteTypeId: number
  reference?: string
  fractionQuantity: number
  commissionPercentage: number
  valTax: number
  cashAccount?: number | string
  custodianId?: number
  ficAdministratorId: number
  returnTurnoverValue?: number
  fraction?: number | null
}

```

## src/features/operations-management/types/correctionsOperations.d.ts

```typescript
import { BusinessType } from '@/shared/types'
import { Participant } from '@/shared/types/participant'
import { ITrades } from '@/shared/types/trade'

interface ParticipantAccountNumber {
  id: number
  participant?: Participant
  investor?: Participant
  accountNumber: string
  status: BusinessType
  type: BusinessType
  originType: BusinessType
}
export interface CorrectionOperation {
  trade: ITrades
  fraction: number
  side: {
    id: string
    description: string
  }
  requestDate: string
  requestTime: string
  initialParticipantAccountNumber: ParticipantAccountNumber
  initialInvestorAccountNumber: ParticipantAccountNumber
  finalParticipantAccountNumber: ParticipantAccountNumber
  finalInvestorAccountNumber: ParticipantAccountNumber
  detail: string
  processType: BusinessType
  status: BusinessType
}

```

## src/features/operations-management/types/country.d.ts

```typescript
export interface CountryOption {
  code: string
  id?: number
  name: string
}

export type CountryOptions = CountryOption[]

```

## src/features/operations-management/types/dispatchState.d.ts

```typescript
export type DispatchState<T> = React.Dispatch<React.SetStateAction<T | null>>

```

## src/features/operations-management/types/folioTransfer.ts

```typescript
export interface FolioTransferSettlement {
  uniqueRowId?: string // ID único generado para la fila
  tradeId: number
  fraction: number
  side: {
    id: string
    description: string
  }
  investor: {
    id: number
    code: string
    firstName: string
    lastName: string
    companyName: string
    documentNumber: string
    identificationType: {
      id: number
      description: string
    }
  }
  investorAccount: {
    id: number
    accountNumber: string
    accountName: string | null
  }
  fractionQuantity: number
  custodian: {
    id: number
    code: string
    name: string
    shortName: string
  }
  ficAdministrator?: {
    id: number
    ficAdministratorCode: string
    description: string
  }
  trade: {
    id: number
    matchDate: string
    clearingDate: string
    matchId: number
    participantBuy: {
      id: number
      code: string
      name: string
    }
    participantSell: {
      id: number
      code: string
      name: string
    }
  }
  ficAdministratorId?: number
  participantAccount?: {
    id: number
    accountNumber: string
    participant: {
      id: number
      code: string
      name: string
    }
  }
}

export interface FolioTransferParams {
  page: number
  size: number
  sort: string
  order: string
  tradeId: number[]
  participantId: number
  userType: string
}

```

## src/features/operations-management/types/index.d.ts

```typescript
import { Settlement } from '@/shared/types/settlement'
import { ITrades } from '@/shared/types/trade'

import { ACTIONS } from '../constants/operations'

export interface ModalHistory {
  title: string
  subtitle: { bold: string; text: string }
  subtitle2?: { bold: string; text: string }
  columns: any[]
}

export interface Columnfilter {
  sort?: string
  order?: boolean
  url: string
}

export interface Country {
  id: number
  name: string
}

export interface HeaderAction {
  label: string
  disabled: boolean
  type: string
  icon: ReactNode
}

export interface TradeData {
  id: number
  matchId?: number
  participantBuy: { id: string }
  participantSell: { id: string }
  [key: string]: unknown
}

export interface DownloadAction {
  type: ACTIONS
}

export interface IDetailOperation {
  trade: ITrades | null
  tradeEquity: TradeEquity | null
  settlement: Settlement[] | null
  canSeeSideBuy: boolean | null
  canSeeSideSell: boolean | null
}

export interface InputChangeEvent {
  target: {
    name: string
    value: string
  }
}

export interface RowData {
  id: number
  investor: Investor
  tradeId: number
  country?: { name: string; id: number }
  fraction: number
  side: { id: number }
  masterAccount: boolean
  jointAccount: boolean
  accountNumber: string
  investorAccount: InvestorAccount
  fiduciarySpecialist: boolean
  referenceAllocId: number
  fractionQuantity: number
  participantAccount: Account
  commissionPercentage: number
  commissionAmount: number
  valTax: number
  netAmount: number
  outFlowTurnoverValue: number
  custodianId: number
  netOutFlowTotal: number
  totalNetReturn: number
  sourceQuoteType: { id: number; description: string; category: string }
  deliveryVersusPaymentValue: number
  returnTurnoverValue: number
  editedFractionQuantity?: number
  editedReference?: string
  transferValue?: number
  reference?: string
  directDepositor: { code: string; name: string }
  settlementAmount: number
  valTaxAmount: number
  custodian?: any
}

export interface RowDataMui {
  row: RowData
}

export interface Data {
  participantAccount: Account
  investorAccount: InvestorAccount
  sourceQuoteType: SourceQuoteType
  fiduciarySpecialist: boolean
  jointAccount: boolean
  masterAccount: boolean
  fractionQuantity: number
}

```

## src/features/operations-management/types/item.d.ts

```typescript
import { Country } from './country.model'
import { Currency } from './currency.model'

export interface SecurityTitle {
  isin: string
}

export interface ItemModel {
  id: number
  matchDate: string
  matchId: number
  clearingDate: string
  returnClearingDate: string
  depository: any
  country: Country
  type: string
  participantIdBuy: number
  participantIdSell: number
  custodianMarkBuy: boolean
  custodianMarkSell: boolean
  assignmentMarkBuy: boolean
  assignmentMarkSell: boolean
  fractionalMarkBuy: boolean
  fractionalMarkSell: boolean
  advanceStatus: number
  exitIndicatorSettlement: boolean
  returnIndicatorSettlement: boolean
  canceledStatus: boolean
  quantity: number
  price: number
  volumen: number
  securityTitle: SecurityTitle
  isin: string
  reourchaseRate: number
  reourchaseAmount: number
  status: string
  currency: Currency
  matchTime: string
  buyStatus?: any
  sellStatus?: any
  participantBuy?: any
  participantSell?: any
  lastModifyDate: string
}

export interface ItemModelCsv {
  id: number
  matchDate: string
  matchId: number
  clearingDate: string
  returnClearingDate: string
  depository: string
  country: string
  type: string
  participantIdBuy: number
  participantIdSell: number
  custodianMarkBuy: boolean
  custodianMarkSell: boolean
  assignmentMarkBuy: boolean
  assignmentMarkSell: boolean
  fractionalMarkBuy: boolean
  fractionalMarkSell: boolean
  advanceStatus: number
  exitIndicatorSettlement: boolean
  returnIndicatorSettlement: boolean
  canceledStatus: boolean
  quantity: number
  price: number
  volumen: number
  isin: string
  reourchaseRate: number
  reourchaseAmount: number
  status: string
  currency: string
  matchTime: string
}

export const emptyItem: ItemModel = {
  id: 0,
  matchDate: '',
  matchId: 0,
  clearingDate: '',
  returnClearingDate: '',
  depository: '',
  country: {
    id: 0,
    code: '',
    name: '',
    currency: {
      id: 0,
      code: '',
      name: ''
    },
    timeZone: ''
  },
  type: '',
  participantIdBuy: 0,
  participantIdSell: 0,
  custodianMarkBuy: false,
  custodianMarkSell: false,
  assignmentMarkBuy: false,
  assignmentMarkSell: false,
  fractionalMarkBuy: false,
  fractionalMarkSell: false,
  advanceStatus: 0,
  exitIndicatorSettlement: false,
  returnIndicatorSettlement: false,
  canceledStatus: false,
  quantity: 0,
  price: 0,
  volumen: 0,
  isin: '',
  reourchaseRate: 0,
  reourchaseAmount: 0,
  status: '',
  currency: {
    id: 0,
    code: '',
    name: ''
  },
  matchTime: '',
  securityTitle: {
    isin: ''
  }
}

```

## src/features/operations-management/types/operationDetails.d.ts

```typescript
export interface Investor {
  id: string
  firstName: string
  lastName: string
  type: string
  documentType: string
  documentNumber: string
}

export interface InvestorAccount {
  number: string
  status: string
  investorId: number
  accountNumber: string
  id: number
}
export interface Row {
  tradeId: number
  firstName: string
  lastName: string
  lastModifyDate: string
  investor: Investor
  participantAccount: IParticipantAccount
  masterAccount: boolean
  jointAccount: boolean
  investorAccount: InvestorAccount
}

export interface IParticipantAccount {
  type: Type
  accountNumber: string
  id: number
}
export interface Type {
  category: string
  description: string
  id: number
}

export interface ModalHistory {
  title: string
  subtitle: { bold: string; text: string | number }
  subtitle2?: { bold: string; text: string | number }
  columns: any[]
}

export interface JointMemberDetail {
  identificationType: { description: string }
  documentNumber: string
  firstName: string
  lastName: string
}

export interface ContentSettlement {
  tradeId: number
  fraction: number
  side: Side
  investor: Investor
  investorAccount: InvestorAccount
  participantAccount: ParticipantAccount
  fractionQuantity: number
  fractionVolume: number
  fiduciarySpecialist: string
  commissionPercentage: number
  commissionAmount: number
  valTax: number
  valTaxAmount: number
  withholdingTax: number
  withholdingTaxAmount: number
  netAmount: number
  transferValue: number
  issuedReceipt: boolean
  issuedReceiptNumber: string
  referenceAllocId: number
  repoAmount: number
  fundingAmount: number
  netOutFlowTotal: number
  outFlowTurnoverValue: number
  returnTurnoverValue: number
  deliveryVersusPaymentValue: number
  tradingSystemId: number
  status: Status
  brokerageService: number
  custodianId: number
  settlementAmount: number
}

export interface OperationDetailTabsContainerProps {
  /** Tabs with label and content to render */
  tabs?: TabDescriptor[]
  /** Controlled active tab index */
  currentTab?: number
  /** Controlled change handler */
  onChange?: (newValue: number) => void
  /** Tabs alignment */
  alignTabs?: 'left' | 'center'
  /** Selected tab underline/border color */
  tabColor?: string
  /** MUI variant passthrough */
  variant?: 'fullWidth' | 'scrollable' | 'standard'
  /** Datos de la operación para "Datos Generales" */
  tradeData?: any
  buildRepoData?: any[]
  buildNonRepoData?: any[]
  handleTradeHistory?: () => Promise<void>
  tradeId?: string
  handleJointMembers?: (
    client_user: string,
    row: Row,
    setModalDetailAccount: React.Dispatch<
      React.SetStateAction<ModalHistory | null>
    >,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>
  setModalDetailAccount?: (value: any) => void
  setIsModalOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

```

## src/features/operations-management/types/responseValidateAccount.d.ts

```typescript
import { type BusinessType } from '@/features/settlement-file/types'

import { Participant } from '@/shared/types/participant'

export interface ParticipantAccount {
  id: number
  participant: Participant
  accountNumber: string
  taxExemp?: boolean | null
  status: Status
  type: IdDescription
  originType: IdDescription
}

// ===== Investor =====

export interface Investor {
  id: number
  code: string
  firstName: string
  lastName: string
  companyName: string
  type: BusinessType
  status: BusinessType
  country: BusinessType
  documentNumber: string
  identificationType: BusinessType
  nationality: string
  clearinghouseCode: string
  gics: BusinessType
  moneyLaunderingFlag: boolean
  taxStatus: BusinessType
}

// ===== Investor Account =====

export interface InvestorAccount {
  id: number
  investor: Investor
  accountNumber: string
  accountName: string | null
  taxExemp?: boolean | null
  status: Status
  originType: IdDescription
  type: BusinessType
  depository: {
    id: string
    description: string
  }
  participant: Participant
}

export interface AccountPayload {
  participantAccount: ParticipantAccount | null
  investorAccount: InvestorAccount | null
  sourceQuoteType: sourceQuoteType
  fiduciarySpecialist: boolean
  jointAccount: boolean
  masterAccount: boolean
  custodian: Participant | null
  milaDirectDepositor: MilaDirectDepository
}

export interface MilaDirectDepository {
  id: number
  code: string
  identificationTypeId: number
  documentNumber: string
  directDepositoryNumber: string
}

```

## src/features/operations-management/types/totalCalculation.d.ts

```typescript
export interface TotalCalculationInterface {
  total?: {
    totalCount?: number
    totalAmount?: number
    totalDemand?: number
    commissionAmountTotal?: number
    transferValueTotal?: number
    valTaxAmountTotal?: number
    quantityTotal?: number
    netAmountTotal?: number
    netOutFlowTotal?: number
    outFlowTurnoverValueTotal?: number
    returnTurnoverValueTotal?: number
  }
  operationType?: number
}

```

## src/features/operations-management/types/validationAssinmentActions.d.ts

```typescript
export interface ValidateAssignmentResponse {
  isValidAssignment: boolean
  maxFractions: number
  isOwnPosition: boolean
  assignation: {
    allowed: boolean
    description: string
  }
  isValidCorrection: boolean
  billable: boolean
  hasPendingCorrection: boolean
  correctionType: string
  correction: {
    allowed: boolean
    description: string | null
  }
}

```

## src/features/operations-management/utils/assignmentCalculation.ts

```typescript
import { type ITrades } from '@/shared/types/trade'
import { parsePercentage } from '@/shared/utils/parsePercentage'

import { FieldsAssignment } from '../constants/fieldsAssignment'
import { type Fraction } from '../hooks/useStateFraction'
import { assignmentCalculationCounted } from '../services/assignmentCalculationCounted'

const assignmentCalculation = async ({
  trade,
  side,
  commonUpdate,
  changeFraction,
  fraction,
  valueAccount
}: {
  trade: ITrades | null
  side: string
  commonUpdate: Partial<Fraction>
  changeFraction: (update: Partial<Fraction>) => void
  fraction: Fraction
  valueAccount: {
    accountNumber?: string
    accountSourceType?: number
  }
}) => {
  const valueCommission =
    parsePercentage(fraction[FieldsAssignment.commissionPercentage]) ?? 0
  try {
    const data = await assignmentCalculationCounted({
      tradeId: trade!.id,
      countryId: trade!.country.id as number,
      accountNumber: valueAccount.accountNumber ?? '',
      accountSourceType: valueAccount.accountSourceType ?? 2,
      body: {
        price: trade!.price,
        sideId: side,
        commission: valueCommission,
        quantity: fraction[FieldsAssignment.quantity]?.value ?? 0
      }
    })
    changeFraction({
      [FieldsAssignment.commission]: data.commissionAmount,
      [FieldsAssignment.impCommission]: data.valTaxAmount,
      [FieldsAssignment.netAmount]: data.netAmount,
      [FieldsAssignment.returnAmount]: data.returnAmount,
      [FieldsAssignment.amount]: data.amount,
      [FieldsAssignment.valTax]: data.valTax ?? 0,
      [FieldsAssignment.id]: fraction[FieldsAssignment.id],
      [FieldsAssignment.executeCalculationInitial]: true,
      ...commonUpdate
    })
  } catch {
    changeFraction(commonUpdate)
  }
}

export default assignmentCalculation

```

## src/features/operations-management/utils/beneficiaries.ts

```typescript
import { SIDE_TYPES } from '@/features/operations-management/constants/operations'

import { API_ROUTES } from '@/shared/constants/endpoints'

export const buildEndpoint = (
  label: string,
  tradeId: string,
  sideId?: string | null,
  activeTab?: number,
  activeTabParams?: string
) => {
  if (
    [SIDE_TYPES.BUY.label, SIDE_TYPES.SELL.label].includes(
      label as typeof SIDE_TYPES.BUY.label | typeof SIDE_TYPES.SELL.label
    )
  ) {
    return API_ROUTES.GET_SETTLEMENT(Number(tradeId), Number(sideId))
  }
  if (label === SIDE_TYPES.NO_CHARGE) {
    const tabSideId = activeTabParams === '0' ? 1 : 2
    return API_ROUTES.GET_SETTLEMENT(Number(tradeId), Number(tabSideId))
  }
  if (label === SIDE_TYPES.BUY_AND_SELL) {
    const tabSideId = activeTab === 0 ? 1 : 2
    return API_ROUTES.GET_SETTLEMENT(Number(tradeId), Number(tabSideId))
  }
  return undefined
}

```

## src/features/operations-management/utils/createNewRow.ts

```typescript
import { RowData } from '@/features/operations-management/types'

import { FormData } from '@/shared/types'

export const createNewRow = (
  accountData: any,
  comissionData: any,
  depository: any,
  formData: FormData,
  rows: RowData[]
) => ({
  fraction: rows.length + 1,
  investorAccount: accountData?.investorAccount.investor
    ? {
        accountNumber: accountData?.investorAccount.accountNumber,
        investor: {
          name: accountData?.investorAccount.investor.companyName ?? '--',
          lastName: accountData?.investorAccount.investor?.lastName ?? '--',
          code: accountData?.investorAccount.investor?.code ?? '--',
          depositoryId: depository.id ?? '--',
          firstName: accountData?.investorAccount.investor.firstName ?? '--',
          documentNumber:
            accountData?.investorAccount.investor?.documentNumber ?? '--',
          identificationType: {
            description:
              accountData?.investorAccount.investor?.identificationType
                ?.description ?? '--'
          },
          companyName:
            accountData?.investorAccount.investor?.companyName ?? 'revisar'
        },
        id: accountData?.investorAccount.id ?? '--'
      }
    : null,
  investorAccountId: accountData?.investorAccount.investor?.id ?? '--',
  reference: formData.referencia,
  fractionQuantity: comissionData.quantity,
  commissionPercentage: comissionData.commissionPercentage,
  commissionAmount: comissionData.commissionAmount,
  participantAccount: accountData.participantAccount
    ? {
        accountNumber: accountData.participantAccount?.accountNumber ?? '--',
        id: accountData.participantAccount?.id ?? '--',
        participant: {
          name: accountData.participantAccount?.participant?.name ?? '--',
          code: depository.code ?? '--',
          depositoryId: depository.id ?? '--',
          documentNumber:
            accountData.participantAccount?.participant?.documentNumber ?? '--',
          identificationType: {
            description:
              accountData.participantAccount?.participant?.identificationType
                ?.description ?? '--'
          },
          companyName: 'revisar'
        }
      }
    : null,
  sourceQuoteType: {
    id: accountData.sourceQuoteType?.id ?? '--',
    description: accountData.sourceQuoteType?.description ?? '--'
  },
  fiduciarySpecialist: accountData.fiduciarySpecialist ?? '--',
  masterAccount: accountData.masterAccount ?? '--',
  depositoryCode: depository.code ?? 'revisar',
  valTax: comissionData.valTax ?? 'revisar',
  netAmount: comissionData.netAmount ?? '--',
  transferValue: comissionData.transferValue ?? '--',
  outFlowTurnoverValue: accountData.outFlowTurnoverValue ?? '--',
  custodianName: accountData.custodianName ?? '--',
  custodianId: accountData.custodianId ?? '--'
})

```

## src/features/operations-management/utils/folioTransferColumns.tsx

```tsx
import { TRenderCellParams, XDataGridLib } from '@nuam/common-fe-lib-components'

import { defaultValueField } from 'remoteUtilities/defaultValueField'

import { SIDE_TYPES } from '@/features/operations-management/constants/operations'

import { CustodianSelect } from '../components/CustodianSelect'
import {
  FicAdministratorSelect,
  IFicAdministratorOption
} from '../components/FicAdministratorSelect'
import { IFicAdministrator } from '../services/folioTransferService'
import { FolioTransferSettlement } from '../types/folioTransfer'

interface ICustodianOption {
  id: number
  name: string
}

interface IGetFolioTransferColumnsParams {
  countryId?: number
  onFicAdministratorChange?: (rowId: string, administrator: any) => void
  ficAdministrators?: Record<string, IFicAdministrator | null>
  ficAdministratorOptions?: IFicAdministratorOption[]
  custodianOptions?: Record<number, ICustodianOption[]>
  custodians?: Record<string, ICustodianOption | null>
  onCustodianChange?: (
    rowId: string,
    custodian: ICustodianOption | null
  ) => void
}

export const getFolioTransferColumns = ({
  countryId,
  onFicAdministratorChange,
  ficAdministrators = {},
  ficAdministratorOptions = [],
  custodianOptions = {},
  custodians = {},
  onCustodianChange
}: IGetFolioTransferColumnsParams): XDataGridLib.GridColDef[] => [
  // Columna oculta con identificador único
  {
    headerName: 'ID Único',
    field: 'uniqueRowId',
    width: 0,
    valueGetter: (_value, row: FolioTransferSettlement) =>
      `${row.tradeId}-${row.fraction}-${row.side?.id || ''}`
  },
  {
    headerName: 'Fecha de Registro',
    field: 'matchDate',
    width: 150,
    valueGetter: (_value, row: FolioTransferSettlement) =>
      defaultValueField({ value: row.trade?.matchDate })
  },
  {
    headerName: 'Folio',
    field: 'trade',
    width: 122,
    valueGetter: (_value, row: FolioTransferSettlement) =>
      row?.trade?.matchId || ' '
  },
  {
    headerName: 'Fecha de Cumplimiento',
    field: 'clearingDate',
    width: 150,
    valueGetter: (_value, row: FolioTransferSettlement) =>
      defaultValueField({ value: row.trade?.clearingDate })
  },
  {
    headerName: 'Participante',
    field: 'participantTradeCode',
    width: 150,
    sortable: false,
    valueGetter: (_value, row: FolioTransferSettlement) => {
      const isSell = row.side?.id === SIDE_TYPES.SELL.id

      return isSell
        ? (row.trade?.participantSell?.code ?? ' ')
        : (row.trade?.participantBuy?.code ?? ' ')
    }
  },
  {
    headerName: 'Custodio',
    field: 'custodian',
    width: 250,
    renderCell: (params: XDataGridLib.GridRenderCellParams) => {
      const rowId =
        params.row.uniqueRowId ||
        `${params.row.tradeId}-${params.row.fraction}-${params.row.side.id}`
      const currentValue = custodians[rowId] ?? params.row.custodian ?? null
      const rowCustodianOptions = custodianOptions?.[params.row.tradeId] ?? []

      return (
        <div className="w-full flex items-center justify-center mt-[2px]">
          <CustodianSelect
            key={rowId}
            value={currentValue}
            options={rowCustodianOptions}
            onChange={(custodian) => {
              if (onCustodianChange) {
                onCustodianChange(rowId, custodian)
              }
            }}
          />
        </div>
      )
    }
    // valueGetter: (_value: any, row: FolioTransferSettlement) =>
    //   row.custodian?.name || ' '
  },
  ...(countryId === 37
    ? [
        {
          headerName: 'Administrador FIC',
          field: 'ficAdministrator',
          width: 300,
          renderCell: (params: XDataGridLib.GridRenderCellParams) => {
            const rowId =
              params.row.uniqueRowId ||
              `${params.row.tradeId}-${params.row.fraction}-${params.row.side.id}`
            const currentValue =
              ficAdministrators[rowId] ?? params.row.ficAdministrator ?? null

            return (
              <div style={{ marginTop: 2 }}>
                <FicAdministratorSelect
                  key={rowId}
                  options={ficAdministratorOptions}
                  value={currentValue}
                  onChange={(administrator) => {
                    if (onFicAdministratorChange) {
                      onFicAdministratorChange(rowId, administrator)
                    }
                  }}
                  disabled={false}
                  label=""
                />
              </div>
            )
          },
          valueGetter: (_value: any, row: FolioTransferSettlement) =>
            row.ficAdministrator?.description || ' '
        }
      ]
    : []),
  {
    headerName: 'Punta',
    field: 'side',
    width: 100,
    valueGetter: (_value, row: FolioTransferSettlement) =>
      defaultValueField({ value: row.side?.description })
  },
  {
    headerName: 'ID Fracción',
    field: 'fraction',
    width: 120,
    valueGetter: (_value, row: FolioTransferSettlement) =>
      row.fraction == 0 ? 1 : row.fraction || ' '
  },
  {
    headerName: 'Cuenta Títulos/RUT',
    field: 'investorAccount',
    width: 150,
    valueGetter: (_: XDataGridLib.GridRenderCellParams, data: any) => {
      const info =
        data?.investorAccount?.accountNumber ??
        data?.participantAccount?.accountNumber
      return defaultValueField({ value: info })
    }
  },
  {
    headerName: 'Tipo ID',
    field: 'identificationType',
    width: 78,
    valueGetter: (_: XDataGridLib.GridRenderCellParams, data: any) => {
      const info =
        data?.investor?.identificationType?.code ??
        data?.participantAccount?.participant?.identificationType?.code
      return defaultValueField({ value: info })
    }
  },
  {
    headerName: 'Nombre Beneficiario',
    field: 'beneficiaryName',
    width: 182,
    valueGetter: (_params: TRenderCellParams, data: any) => {
      const dataInfo =
        data?.investorAccount?.accountName ??
        data?.participantAccount?.participant?.shortName
      return defaultValueField({ value: dataInfo })
    }
  },
  {
    headerName: 'Cantidad',
    field: 'fractionQuantity',
    width: 153,
    valueGetter: (_value, row: FolioTransferSettlement) => {
      const data = row.fractionQuantity?.toLocaleString('es-CO')
      return defaultValueField({ value: data })
    }
  }
]

```

## src/features/operations-management/utils/fractionHandleError.ts

```typescript
import { FRACTION_ERROR_CODES } from '@/features/operations-management/constants/FullViewBeneficiaries'

import { HTTP_CODES } from '@/shared/constants'
import { ErrorResponse } from '@/shared/types'

export const handleError = (
  error: ErrorResponse,
  setTextToast: (value: string) => void,
  setVariantToast: (value: 'success' | 'error') => void,
  setViewToast: (value: boolean) => void
) => {
  if (
    error?.response?.data?.errorCode ===
    FRACTION_ERROR_CODES.OWN_POSITION_NOT_CORRESPOND_TO_ORIGIN
  ) {
    setTextToast(
      'Los datos de asignación no corresponden con el origen Posición Propia.'
    )
  } else if (
    error?.response?.data?.errorCode ===
    FRACTION_ERROR_CODES.THIRD_PARTIES_COLLECTIVE_PORTFOLIOS_NOT_CORRESPOND_TO_ORIGIN
  ) {
    setTextToast(
      'Los datos de asignación no corresponden con el origen Terceros/Carteras Colectivas.'
    )
  } else if (
    error?.response?.data?.httpCode === HTTP_CODES.NOT_FOUND.toLocaleString()
  ) {
    setTextToast('Cuenta títulos no existe en Deceval')
  } else if (
    error?.response?.data?.errorCode ===
    FRACTION_ERROR_CODES.FRACTION_TOTAL_QUANTITY_EXCEED_QUANTITY_TRADE
  ) {
    setTextToast(
      'La suma de las cantidades supera el 100%. Verifica e inténtalo nuevamente.'
    )
  } else {
    setTextToast('Ha ocurrido un error inesperado.')
  }
  setVariantToast('error')
  setViewToast(true)
}

```

## src/features/operations-management/utils/generateCSVReport.ts

```typescript
import JSZip from 'jszip'

import { formatNumberWithThousandsSeparator } from 'remoteUtilities/formattedNumber'

type GenerateTxtReport = {
  data: any
  name?: string
  setProgress: (progress: number) => void
}

export const generateCSVReport = async ({
  data,
  name,
  setProgress
}: GenerateTxtReport) => {
  const client_user = localStorage.getItem('username') ?? 'unknown_user'

  try {
    const zip = new JSZip()
    let reports: string[] = []
    const dataArray = Array.isArray(data) ? data : [data]
    const totalRecords = dataArray.length // Total de registros para el cálculo del progreso

    const now = new Date()
    const fechaDeGeneracion = now
      .toLocaleDateString('es-ES')
      .replace(/\//g, '-')

    const headers = [
      'Compra/venta',
      'Fecha de operación',
      'Consecutivo',
      'N° Fracción',
      'Fecha de Cumplimiento ',
      'Nemotécnico',
      'Descripción de la especie',
      'Cliente(s)',
      'Tipo ID Beneficiario final',
      'ID Beneficiario final',
      'Condición fiscal',
      'Participante',
      'Tipo ID Participante',
      'ID Participante',
      'Usuario',
      'Condición fiscal',
      'Tipo de Operación',
      'Código del participante',
      'Tipo de Negocio',
      'Mercado',
      'Origen de la Operación',
      'Depósito',
      'Plazo',
      'Monto inicial',
      'Monto regreso',
      'Tasa de Negociación',
      'Cantidad Nominal',
      'Precio de Registro',
      'Valor',
      'Moneda',
      '% Comisión',
      'Valor de comisión',
      'Servicio de nuam',
      'Valor neto',
      'Iva sobre Comisión',
      'Sanción Extemporáneo',
      'VALOR NETO INCLUIDO IVA',
      'OBSERVACIONES',
      'Fecha y hora de generación'
    ].join(',')

    reports.push(headers) // Agregar los headers como la primera fila

    for (let i = 0; i < totalRecords; i++) {
      const item = dataArray[i]

      const {
        side,
        fraction,
        commissionPercentage,
        commissionAmount,
        brokerageService,
        netAmount,
        fractionVolume,
        valTaxAmount,
        latePenality,
        netValTax,
        outFlowTurnoverValue,
        returnTurnoverValue,
        fractionQuantity
      } = item.settlement

      const {
        matchDate,
        matchId,
        clearingDate,
        marketType,
        businessType,
        depository,
        daysToSettlement,
        price,
        currency,
        type,
        tradingSystem,
        repurchaseRate
      } = item.trade

      const { fullName, identificationType, documentNumber, taxStatus } =
        item?.investor ?? {}

      const { userName, securityTitle, participantBuy, participantSell } = item

      let participipantCurrent
      if (participantBuy) {
        participipantCurrent = participantBuy
      }
      if (participantSell) {
        participipantCurrent = participantSell
      }

      const formattedLine = [
        String(side?.description ?? '')
          .replace(/[-_.]/g, '')
          .substring(0, 6)
          .padStart(6, ' '), // longitud 6
        String(matchDate ?? '')
          .replace(/[-_.]/g, '')
          .substring(0, 8)
          .padStart(8, ' '), // longitud 8
        (
          String(matchDate ?? '').replace(/[-_.]/g, '') +
          '-' +
          String(matchId ?? '').replace(/[-_.]/g, '')
        )
          .substring(0, 20)
          .padStart(20, ' '), // longitud 18
        String(fraction?.toString() ?? '')
          .replace(/[-_.]/g, '')
          .substring(0, 6)
          .padStart(6, ' '), // longitud 6
        String(clearingDate ?? '')
          .replace(/[-_.]/g, '')
          .substring(0, 8)
          .padStart(8, ' '), // longitud 8
        String(securityTitle?.mnemonic ?? '')
          .replace(/[-_.\s]/g, '')
          .substring(0, 12)
          .padStart(12, ' '), // longitud 12
        String(securityTitle?.equityCode ?? '')
          .replace(/[-_.\s]/g, '')
          .substring(0, 33)
          .padStart(33, ' '), // longitud 33
        String(fullName ?? '')
          .replace(/[^a-zA-Z0-9]/g, '')
          .substring(0, 44)
          .padStart(44, ' '), // longitud 44
        String(identificationType?.code ?? '')
          .replace(/[-_.\s]/g, '')
          .padStart(3, ' '), // longitud 3
        String(documentNumber ?? '')
          .replace(/[-_.]/g, '')
          .substring(0, 15)
          .padStart(15, ' '), // longitud 15
        String(taxStatus?.description ?? '')
          .replace(/[-_.\s]/g, '')
          .substring(0, 12)
          .padStart(12, ' '), // longitud 12
        String(participipantCurrent?.name ?? '')
          .replace(/[-_.\s]/g, '')
          .substring(0, 35)
          .padStart(35, ' '), // longitud 35
        String(participipantCurrent?.identificationType?.code ?? '')
          .replace(/[-_.\s]/g, '')
          .padStart(3, ' '), // longitud min 3
        String(participipantCurrent?.documentNumber ?? '')
          .replace(/[-_.]/g, '')
          .substring(0, 15)
          .padStart(15, ' '), // longitud 15
        String(userName ?? '')
          .replace(/[-_\s]/g, '')
          .substring(0, 44)
          .padStart(44, ' '), // longitud 44
        String(participipantCurrent?.taxStatus?.description ?? '')
          .replace(/[-_.\s]/g, '')
          .padStart(12, ' '), // longitud 12
        String(type?.description ?? '')
          .replace(/[-_.\s]/g, '')
          .substring(0, 17)
          .padStart(17, ' '), // longitud 17
        String(participipantCurrent?.code ?? '')
          .replace(/[-_.\s]/g, '')
          .padStart(5, ' '), // longitud mínima 4
        String(businessType?.description ?? '')
          .replace(/[-_.\s]/g, '')
          .substring(0, 15)
          .padStart(15, ' '), // longitud 15
        String(marketType?.description ?? '')
          .replace(/[-_.\s]/g, '')
          .substring(0, 10)
          .padStart(10, ' '), // longitud 10
        String(tradingSystem?.description ?? '')
          .replace(/[-_.\s]/g, '')
          .substring(0, 11)
          .padStart(11, ' '), // longitud 11
        String(depository?.description ?? '')
          .replace(/[-_.\s]/g, '')
          .substring(0, 10)
          .padStart(10, ' '), // longitud 10
        String(daysToSettlement?.toString() ?? '')
          .replace(/[-_.]/g, '')
          .substring(0, 6)
          .padStart(6, ' '), // longitud 6
        String(outFlowTurnoverValue?.toString() ?? '')
          .replace(/[-_.]/g, '')
          .substring(0, 25)
          .padStart(25, ' '), // longitud 25
        String(returnTurnoverValue?.toString() ?? '')
          .replace(/[-_.]/g, '')
          .substring(0, 1)
          .padStart(1, ' '), // longitud 1
        '"' +
          String(repurchaseRate?.toString() ?? '')
            .replace(/[-_]/g, '')
            .replace('.', ',')
            .substring(0, 9)
            .padStart(9, ' ') +
          '"', // longitud 9
        String(fractionQuantity?.toString() ?? '')
          .replace(/[-_.]/g, '')
          .substring(0, 25)
          .padStart(25, ' '), // longitud 25
        '"' +
          String(formatNumberWithThousandsSeparator(price)?.toString() ?? '')
            .replace(/[-_]/g, '')
            .padStart(25, ' ') +
          '"', // longitud 25
        '"' +
          String(
            formatNumberWithThousandsSeparator(fractionVolume)?.toString() ?? ''
          )
            .replace(/[-_]/g, '')
            .padStart(25, ' ') +
          '"', // longitud 25
        String(currency?.code ?? '')
          .replace(/[-_.\s]/g, '')
          .substring(0, 3)
          .padStart(3, ' '), // longitud 3
        '"' +
          String(commissionPercentage?.toString() ?? '')
            .replace(/[-_]/g, '')
            .replace('.', ',')
            .substring(0, 8)
            .padStart(8, ' ') +
          '"', // longitud 8
        '"' +
          String(
            formatNumberWithThousandsSeparator(commissionAmount)?.toString() ??
              ''
          )
            .replace(/[-_]/g, '')
            .padStart(25, ' ') +
          '"', // longitud 25
        '"' +
          String(
            formatNumberWithThousandsSeparator(brokerageService)?.toString() ??
              ''
          )
            .replace(/[-_]/g, '')
            .padStart(25, ' ') +
          '"', // longitud 25
        '"' +
          String(
            formatNumberWithThousandsSeparator(netAmount)?.toString() ?? ''
          )
            .replace(/[-_]/g, '')
            .padStart(25, ' ') +
          '"', // longitud 25
        '"' +
          String(
            formatNumberWithThousandsSeparator(valTaxAmount)?.toString() ?? ''
          )
            .replace(/[-_]/g, '')
            .padStart(25, ' ') +
          '"', // longitud 25
        String(latePenality?.toString() ?? '')
          .replace(/[-_.]/g, '')
          .substring(0, 25)
          .padStart(25, ' '), // longitud 25
        '"' +
          String(
            formatNumberWithThousandsSeparator(netValTax)?.toString() ?? ''
          )
            .replace(/[-_]/g, '')
            .padStart(25, ' ') +
          '"', // longitud 25
        ''.padStart(200, ' '), // longitud 200
        (fechaDeGeneracion ?? '')
          .replace(/[-_.]/g, '')
          .substring(0, 8)
          .padStart(8, ' ') // longitud 8
      ].join(',')

      reports.push(formattedLine)

      // 🟢 Actualizar progreso
      setProgress(Math.round(((i + 1) / totalRecords) * 100))
    }

    const finalContent = reports.join('\n')

    const nameEntity = (name ?? 'default_name').replace(/\s+/g, '_')

    const fileName = `${nameEntity}_${fechaDeGeneracion}_${client_user}.csv`

    zip.file(fileName, finalContent)

    const zipBlob = await zip.generateAsync({ type: 'blob' })

    const zipUrl = URL.createObjectURL(zipBlob)

    const link = document.createElement('a')
    link.href = zipUrl
    link.download = `${nameEntity}_${fechaDeGeneracion}_${client_user}.zip`
    document.body.appendChild(link)
    link.click()

    document.body.removeChild(link)
    URL.revokeObjectURL(zipUrl)

    // 🔵 Finaliza en 100%
    setProgress(100)
  } catch (error) {
    console.error('Error generating ZIP file:')
    throw error
  }
}

```

## src/features/operations-management/utils/getSide.ts

```typescript
export type SideTab = 0 | 1 | 1
export const getSide = (side: SideTab) => {
  if (side === 0) {
    return '1'
  } else if (side === 1) {
    return '2'
  } else {
    return ''
  }
}

```

## src/features/operations-management/utils/handleCalculationAmount.ts

```typescript
import { type TFunction } from 'i18next'

import { limitDecimals } from '@/shared/utils/limitDecimals'
import { parsePercentage } from '@/shared/utils/parsePercentage'

import { FieldsAssignment } from '../constants/fieldsAssignment'
import { type HandleAlertAction } from '../hooks/useAssignmentAlert'
import { type Fraction } from '../hooks/useStateFraction'
import { assignmentCalculationCounted } from '../services/assignmentCalculationCounted'
import { type IDetailOperation } from '../types'

export const handleCalculationAmount = async ({
  fraction,
  trade,
  side,
  value,
  dataBody = { commission: 0, quantity: 0 },
  updateFraction,
  changeAlert,
  t
}: {
  fraction: Fraction
  trade: IDetailOperation['trade']
  side: string
  value: Partial<Fraction>
  updateFraction: (index: number, updateFraction: Partial<Fraction>) => void
  dataBody?: { quantity?: number; commission?: number }
  changeAlert: HandleAlertAction
  t: TFunction<'operaciones', string>
}) => {
  const index = fraction[FieldsAssignment.index]
  const account = fraction.investorAccount ?? fraction.participantAccount
  if (
    account?.accountNumber &&
    account?.accountSourceType &&
    value &&
    fraction.commissionPercentage &&
    trade!.country.id
  ) {
    const valueCommission =
      dataBody?.commission ??
      parsePercentage(fraction.commissionPercentage ?? '0%')
    const roundValue = valueCommission && limitDecimals(valueCommission)
    try {
      const data = await assignmentCalculationCounted({
        tradeId: trade!.id,
        countryId: trade!.country.id,
        accountNumber: account?.accountNumber ?? '',
        accountSourceType: account?.accountSourceType ?? 2,
        body: {
          price: trade!.price,
          sideId: side,
          commission: roundValue ? +roundValue : 0,
          quantity:
            dataBody?.quantity ??
            fraction[FieldsAssignment.quantity]?.value ??
            0
        }
      })
      const newValue: Partial<Fraction> = {
        [FieldsAssignment.commissionPercentage]:
          dataBody?.commission?.toString().replace('.', ',') ??
          fraction.commissionPercentage,
        [FieldsAssignment.commission]: data.commissionAmount,
        [FieldsAssignment.impCommission]: data.valTaxAmount,
        [FieldsAssignment.netAmount]: data.netAmount,
        [FieldsAssignment.returnAmount]: data.returnAmount,
        [FieldsAssignment.amount]: data.amount,
        [FieldsAssignment.valTax]: data.valTax ?? 0,
        [FieldsAssignment.quantity]: {
          value:
            dataBody?.quantity ?? fraction[FieldsAssignment.quantity]?.value
        },
        [FieldsAssignment.id]: fraction[FieldsAssignment.id]
      }
      updateFraction(index, newValue)
    } catch {
      changeAlert({
        variant: 'error_service',
        // info: { message: 'Error en el servicio de cálculo de montos' }
        info: { message: t('errorCalculationAmount') }
      })
    }
  } else {
    updateFraction(index, {
      ...value
    })
  }
  return value
}

```

## src/features/operations-management/utils/hasEqualAccountFraction.ts

```typescript
import { FieldsAssignment } from '../constants/fieldsAssignment'
import { type Fraction } from '../hooks/useStateFraction'

const hasEqualAccountFraction = ({
  fractions,
  isCorrection,
  fraction,
  valueInput
}: {
  fractions: Fraction[]
  isCorrection: boolean
  valueInput: string
  fraction: Fraction
}) => {
  let hasEqualAccount = false
  for (
    let index = 0, fractionsLength = fractions?.length ?? 0;
    index < fractionsLength;
    index++
  ) {
    const element = fractions?.[index]
    if (
      element?.[FieldsAssignment.account]?.value === valueInput &&
      element?.[FieldsAssignment.index] !== fraction[FieldsAssignment.index]
    ) {
      hasEqualAccount = true
      break
    }
  }
  let valueMessage = ''
  if (isCorrection && hasEqualAccount) {
    valueMessage = 'Cuenta ya ingresada'
  } else if (hasEqualAccount) {
    valueMessage = 'Cuenta duplicada'
  } else {
    valueMessage = ''
  }
  return { valueMessage, hasEqualAccount }
}

export default hasEqualAccountFraction

```

## src/features/operations-management/utils/investorName.ts

```typescript
import { Investor } from '../types/responseValidateAccount'

type InvestorWithRequiredCompanyName = Omit<
  Partial<Investor>,
  'companyName'
> & {
  companyName?: Investor['companyName'] | null
}

export const investorName = (investor?: InvestorWithRequiredCompanyName) => {
  return investor?.companyName ?? ''
}

```

## src/features/operations-management/utils/mapUpdatedRows.ts

```typescript
/* eslint-disable @typescript-eslint/no-explicit-any */
export const mapUpdatedRows = ({
  newRows,
  rows,
  executeAction
}: {
  newRows: any[]
  rows: any[]
  executeAction: () => void
}) => {
  const data: any[] = []
  const setNewRows = new Set(newRows)
  let anyFieldIsEmpty = false
  let sendDeposit: boolean = false
  let iterator = 0
  setNewRows.forEach((row) => {
    const lastRow = rows[iterator]
    const validateSendDeposit =
      lastRow?.participantAccount?.accountNumber !==
        row.participantAccount?.accountNumber ||
      lastRow?.investorAccount?.accountNumber !==
        row.investorAccount?.accountNumber
    const valueSendDeposit =
      rows.length === newRows.length ? validateSendDeposit : true
    const value = {
      fraction: row.fraction || 0,
      investorAccountId: row.investorAccount?.id ?? null,
      participantAccountId: row.participantAccount?.id ?? null,
      fiduciarySpecialist: row.fiduciarySpeciafalist || false,
      sourceQuoteTypeId: row.sourceQuoteType?.id ?? null,
      reference: row.editedReference ?? row.referenceAllocId ?? '',
      fractionQuantity: row.editedFractionQuantity ?? row.fractionQuantity,
      commissionPercentage: row.commissionPercentage || 0,
      directDepositorId:
        row.participantAccount?.participant?.depositoryId ??
        row.investorAccount?.investor?.depositoryId ??
        row?.directDepositor?.id ??
        null,
      valTax: row.valTax || 0,
      sendDeposit: valueSendDeposit
    }
    if (!sendDeposit) {
      sendDeposit = valueSendDeposit
    }
    if (!anyFieldIsEmpty) {
      anyFieldIsEmpty =
        (!row.investorAccount && !row.participantAccount) ||
        (row.editedFractionQuantity === undefined &&
          row.fractionQuantity === undefined) ||
        row.commissionPercentage === undefined
    }
    data.push(value)
    ++iterator
  })
  if (anyFieldIsEmpty) {
    executeAction()
  }
  return { columns: data, sendDeposit }
}

```

## src/features/operations-management/utils/operations.tsx

```tsx
import { formattedDate } from 'remoteUtilities/formattedDate'

import { ACTIONS } from '@/features/operations-management/constants/operations'

import { type IReportOperation } from '@/shared/types'
import isDevMode from '@/shared/utils/isDevMode'

export const generateFileName = (
  record: IReportOperation,
  extension: string
): string => {
  const nro =
    record?.settlement.fraction === 0
      ? record?.trade.matchId
      : `${record?.trade.matchId}_${record?.settlement.fraction}`
  const currentDate = formattedDate()
  const nombreEntidad =
    Number(record?.settlement.side.id) === 1
      ? record?.participantBuy.name
      : record?.participantSell.name
  const userName = record?.userName || ''
  return `Comp_${nro}_${nombreEntidad}_${currentDate}_${userName}.${extension}`
}

const handleDownloadWithFallback = async (
  blob: Blob,
  fileName: string,
  setModalContent: any
) => {
  try {
    const { saveAs } = await import('file-saver')
    saveAs(blob, fileName)
  } catch (error) {
    if (isDevMode()) console.error('Download blocked or failed:', error)
    setModalContent?.({
      title: '¡Falló al descargar!',
      message: `La descarga automática fue bloqueada. Si no se inició la descarga, verifica los permisos del navegador.`,
      variant: 'error',
      onClick: () => {
        setModalContent?.(null)
      }
    })
  }
}

export const handleGeneratePDF = async ({
  result,
  actionType,
  name,
  client_user,
  setProgress,
  setExtension,
  setModalContent,
  generatePDF
}: any) => {
  const totalRecords = result.length
  const validateFraction = result.some(
    (item: any) => item.settlement.fraction > 0
  )
  const currentDate = formattedDate()

  try {
    if (validateFraction && actionType === ACTIONS.DOWNLOAD_PDF) {
      // ZIP con múltiples PDFs
      const { default: JSZip } = await import('jszip')
      const zip = new JSZip()
      setExtension('zip')

      for (let i = 0; i < totalRecords; i++) {
        const data = result[i]
        const { blob, fileName } = await generatePDF(data)
        if (blob) {
          zip.file(`${fileName.replace('.pdf', '')}.pdf`, blob)
        } else {
          if (isDevMode()) {
            console.error(`Failed to generate PDF for record ${data.trade.id}`)
          }
        }
        setProgress(Math.round(((i + 1) / totalRecords) * 100))
      }

      const from = totalRecords > 0 ? 1 : 0
      const to = totalRecords >= 1 ? totalRecords : 0
      const zipBlob = await zip.generateAsync({ type: 'blob' })
      const nameDownload = `${from}-${to}_${name}_${currentDate}_${client_user}.zip`
      await handleDownloadWithFallback(zipBlob, nameDownload, setModalContent)
    } else if (!validateFraction && actionType === ACTIONS.DOWNLOAD_PDF) {
      // Un solo PDF
      for (let i = 0; i < totalRecords; i++) {
        const data = result[i]
        const { blob, fileName } = await generatePDF(data)
        if (blob) {
          await handleDownloadWithFallback(blob, fileName, setModalContent)
        } else {
          if (isDevMode()) {
            console.error(`Failed to generate PDF for record ${data.trade.id}`)
          }
        }
        setExtension('pdf')
        setProgress(Math.round(((i + 1) / totalRecords) * 100))
      }
    }
  } catch (error) {
    if (isDevMode()) {
      console.error('Error generating PDF files:', error)
    }
    setModalContent?.({
      title: '¡Falló al generar PDF!',
      message:
        'Ocurrió un error al intentar generar el Archivo PDF. Por favor, inténtelo de nuevo más tarde.',
      variant: 'error',
      onClick: () => {
        setModalContent?.(null)
      }
    })
  }
}

export const handleGenerateCSV = async ({
  currentItems,
  client_user,
  id_user_nubo,
  name,
  setProgress,
  setExtension
}: any) => {
  setExtension('zip')
  const getTradeId = currentItems.map((item: any) => ({ tradeId: item.id }))
  const { reportCsvMassive } =
    await import('@/features/settlement-file/services/trades')
  const result = await reportCsvMassive(client_user, getTradeId, id_user_nubo)

  if (Array.isArray(result) && result.length === 0) {
    if (isDevMode()) {
      console.error('No records found in the additional request')
    }
    return
  }
  const generateCSVReport = await import('./generateCSVReport').then(
    (m) => m.generateCSVReport
  )
  await generateCSVReport({ data: result, name, setProgress })
}

```

## src/features/operations-management/utils/operationsColumns.tsx

```tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, type TRenderCellParams } from '@nuam/common-fe-lib-components'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { RootState } from 'remoteShell/mf-store'
import { defaultValueField } from 'remoteUtilities/defaultValueField'
import { formattedDate } from 'remoteUtilities/formattedDate'
import { StatusChip } from 'remoteUtilities/statusChip'

import { TRADE_TYPE_DESCRIPTIONS } from '@/features/operations-management/constants/operations'

import eyeIcon from '@/shared/assets/icons/eyeIcon.svg'
import useTranslate from '@/shared/hooks/useTranslate'
import { SUBROUTES } from '@/shared/routes'

const checkParticipant = (
  participantId: string,
  valueBuy: string,
  valueSell: string
) => {
  if (participantId === valueBuy && participantId === valueSell) {
    return true
  } else if (participantId === valueBuy) {
    return 'compra'
  } else if (participantId === valueSell) {
    return 'venta'
  } else {
    return false
  }
}

export const useGetOperationsColumns = (
  handleTradeHistory: (
    tradeId: string,
    matchId: number,
    matchDate: Date
  ) => Promise<void>,
  permissions: {
    canShowEyeIcon: any
    canShowDetail: any
    canDownloadMassive: any
    canDownloadIndividual: any
  }
) => {
  const navigate = useNavigate()
  const { canShowDetail, canShowEyeIcon } = permissions
  const participantId = useSelector(
    (state: RootState) => state.auth.infoUserNubo.participantId
  )
  const { t } = useTranslate({ keyPrefix: 'operationManagement.columns' })
  return [
    ...(canShowDetail
      ? [
          {
            width: 97,
            // headerName: 'Detalles',
            headerName: t('details'),
            sortable: false,
            filterable: false,
            field: 'details',
            renderCell: (params: TRenderCellParams) => (
              <div className="hover:underline group-hover:inline-block">
                <Link
                  onClick={() => {
                    navigate(SUBROUTES.OPERATION_BY_ID(params.row.id))
                  }}
                >
                  {/* Ver detalles */}
                  {t('viewDetail')}
                </Link>
              </div>
            )
          }
        ]
      : []),
    {
      // headerName: 'Fecha registro',
      headerName: t('matchDate'),
      field: 'matchDate',
      valueGetter: (matchDate: any) => {
        return defaultValueField({
          value: matchDate,
          renderValue: formattedDate({ date: matchDate })
        })
      }
    },
    {
      // headerName: 'Folio',
      headerName: t('matchId'),
      field: 'matchId',
      width: 120
    },
    {
      // headerName: 'Fecha Cumplimiento',
      headerName: t('clearingDate'),
      // description: 'Fecha cumplimiento Salida',
      description: t('clearingDateDescription'),
      field: 'clearingDate',
      width: 150,
      valueGetter: (clearingDate: any, data: any) => {
        if (!clearingDate || !data) return '-'
        const { typeDescription } = data

        const showDateIn =
          (typeDescription === TRADE_TYPE_DESCRIPTIONS.REPO ||
            typeDescription === TRADE_TYPE_DESCRIPTIONS.CONTADO) &&
          clearingDate
        return defaultValueField({
          value: showDateIn,
          renderValue: formattedDate({ date: clearingDate })
        })
      }
    },
    {
      // headerName: 'Fecha CR',
      headerName: t('returnClearingDate'),
      // description: 'Fecha cumplimiento regreso',
      description: t('returnClearingDateDescription'),
      field: 'returnClearingDate',
      width: 140,
      valueGetter: (_: any, data: any) => {
        if (!data) return '--'
        const { returnClearingDate, type } = data
        const showDateOut =
          type?.description === TRADE_TYPE_DESCRIPTIONS.REPO &&
          returnClearingDate
        return defaultValueField({
          value: showDateOut,
          renderValue: formattedDate({ date: returnClearingDate })
        })
      }
    },
    {
      // headerName: 'País',
      headerName: t('country'),
      field: 'countryCode',
      width: 80
    },
    {
      // headerName: 'Tipo Operación',
      headerName: t('operationType'),
      field: 'typeDescription',
      width: 125
    },

    {
      // headerName: 'Nemotécnico',
      headerName: t('mnemonic'),
      width: 140,
      field: 'securityTitleMnemonic'
    },
    {
      // headerName: 'Estado de la operación',
      headerName: t('statusDescription'),
      field: 'statusDescription',
      width: 169,
      cellClassName: 'multiline-cell',
      valueGetter: (_params: TRenderCellParams, data: any) => {
        const value = data?.status
        return value?.shortName ?? value?.description ?? ''
      },
      renderCell: (params: TRenderCellParams) => {
        const status = params.row.status
        return (
          <div className="flex gap-2 items-center h-full justify-between">
            <StatusChip
              value={status?.shortName ?? status?.description ?? '-'}
            />
            {canShowEyeIcon && (
              <div className="flex items-center hover:underline group-hover:inline-block">
                <img
                  src={eyeIcon}
                  alt="eyeIcon"
                  className="cursor-pointer w-6 h-6"
                  onClick={async () =>
                    await handleTradeHistory(
                      params.row?.id,
                      params.row?.matchId,
                      params.row?.matchDate
                    )
                  }
                />
              </div>
            )}
          </div>
        )
      }
    },
    {
      // headerName: 'P. Compra',
      headerName: t('participantBuy'),
      // description: 'Participante Compra',
      description: t('participantBuyDescription'),
      field: 'participantBuyCode',
      width: 100,
      valueGetter: (_: any, data: any) => {
        const type = checkParticipant(
          participantId,
          data?.participantBuy?.id,
          data?.participantSell?.id
        )
        // return type === 'venta' ? '-' : (data?.participantBuy?.code ?? '-')
        return defaultValueField({
          value: type !== 'venta',
          renderValue: data?.participantBuy?.code
        })
      },
      renderCell: (params: TRenderCellParams) => {
        const type = checkParticipant(
          participantId,
          params.row?.participantBuy?.id,
          params.row?.participantSell?.id
        )

        const value = defaultValueField({
          value: type !== 'venta',
          renderValue: params?.row?.participantBuy?.code
        })

        return (
          <div className="flex justify-start items-center h-full">{value}</div>
        )
      }
    },
    {
      // headerName: 'Cus Compra',
      headerName: t('custodianBuy'),
      // description: 'Custodio Compra',
      description: t('custodianBuyDescription'),
      field: 'custodianBuyCode',
      width: 100,
      valueGetter: (_: any, data: any) => {
        if (!data) return '--'

        const type = checkParticipant(
          participantId,
          data?.participantBuy?.id,
          data?.participantSell?.id
        )
        // return type === 'venta' ? '-' : (data?.custodianBuy?.code ?? '-')
        return defaultValueField({
          value: type !== 'venta',
          renderValue: data?.custodianBuy?.code
        })
      },
      renderCell: (params: TRenderCellParams) => {
        const type = checkParticipant(
          participantId,
          params.row?.participantBuy?.id,
          params.row?.participantSell?.id
        )

        const value = defaultValueField({
          value: type !== 'venta',
          renderValue: params.row?.custodianBuy?.code
        })

        return (
          <div className="flex justify-start items-center h-full">
            {value ?? '-'}
          </div>
        )
      }
    },
    {
      width: 100,
      // headerName: 'P. Venta',
      headerName: t('participantSell'),
      // description: 'Participante Venta',
      description: t('participantSellDescription'),
      field: 'participantSellCode',
      valueGetter: (_: any, data: any) => {
        if (!data) return '--'
        const type = checkParticipant(
          participantId,
          data?.participantBuy?.id,
          data?.participantSell?.id
        )
        // return type === 'compra' ? '-' : (data?.participantSell?.code ?? '-')
        return defaultValueField({
          value: type !== 'compra',
          renderValue: data?.participantSell?.code
        })
      },
      renderCell: (params: TRenderCellParams) => {
        const type = checkParticipant(
          participantId,
          params.row?.participantBuy?.id,
          params.row?.participantSell?.id
        )

        const value = defaultValueField({
          value: type !== 'compra',
          renderValue: params.row?.participantSell?.code
        })

        return (
          <div className="flex justify-start items-center h-full">{value}</div>
        )
      }
    },

    {
      // headerName: 'Cus Venta',
      headerName: t('custodianSell'),
      // description: 'Custodio Venta',
      description: t('custodianSellDescription'),
      field: 'custodianSellCode',
      width: 100,
      valueGetter: (_: any, data: any) => {
        if (!data) return '--'
        const type = checkParticipant(
          participantId,
          data?.participantBuy?.id,
          data?.participantSell?.id
        )
        // return type === 'compra' ? '-' : (data?.custodianSell?.code ?? '-')
        return defaultValueField({
          value: type !== 'compra',
          renderValue: data?.custodianSell?.code
        })
      },
      renderCell: (params: TRenderCellParams) => {
        const type = checkParticipant(
          participantId,
          params.row?.participantBuy?.id,
          params.row?.participantSell?.id
        )

        const value = defaultValueField({
          value: type !== 'compra',
          renderValue: params.row?.custodianSell?.code
        })

        return (
          <div className="flex justify-start items-center h-full">{value}</div>
        )
      }
    },
    {
      // headerName: 'Estado punta C',
      headerName: t('statusC'),
      width: 118,
      field: 'buyStatus',
      valueGetter: (value: any) => {
        return defaultValueField({
          value: value?.shortName ?? value?.description
        })
      },
      renderCell: ({ row }: any) => {
        const status = row?.buyStatus?.shortName ?? row?.buyStatus?.description
        const value = defaultValueField({
          value: status
        })
        return status ? <StatusChip value={status} /> : value
      }
    },
    {
      // headerName: 'Estado punta V',
      headerName: t('statusV'),
      field: 'sellStatus',
      width: 118,
      valueGetter: (value: any) => {
        return defaultValueField({
          value: value?.shortName ?? value?.description
        })
      },
      renderCell: ({ row }: any) => {
        const status =
          row?.sellStatus?.shortName ?? row?.sellStatus?.description
        const value = defaultValueField({
          value: status
        })

        return status ? <StatusChip value={status} /> : value
      }
    }
  ].filter(Boolean)
}

```

## src/features/operations-management/utils/opertationsHeaderActions.tsx

```tsx
interface HeaderAction {
  label: string
  disabled: boolean
  type: string
  icon?: JSX.Element
  onClick?: () => void
}

interface DropdownAction {
  id: string
  label: string
  disabled: boolean
  icon?: JSX.Element
  action?: () => void
}

interface DownloadAction {
  isVisible: boolean
  disabled: boolean
  onClick?: () => void
}

interface PropsHeaders {
  // downloadMassive: DownloadAction
  downloadIndividual: DownloadAction
  folioTransfer: DownloadAction
  assignmentClosure: DownloadAction
  t: (value: string) => string
}

interface HeaderActionsResult {
  buttonActions: HeaderAction[]
  dropdownActions: DropdownAction[]
}

export const getHeaderActions = ({
  downloadIndividual,
  // downloadMassive,
  folioTransfer,
  assignmentClosure,
  t
}: PropsHeaders): HeaderActionsResult => {
  const buttonActions: (HeaderAction | false)[] = [
    assignmentClosure.isVisible && {
      // label: 'Cerrar asignación',
      label: t('assignmentClosure'),
      disabled: assignmentClosure.disabled,
      type: 'assignment-closure',
      onClick: assignmentClosure?.onClick
    },
    downloadIndividual.isVisible && {
      // label: 'Comprobante',
      label: t('individualReceipt'),
      disabled: downloadIndividual.disabled,
      type: 'download-pdf',
      onClick: downloadIndividual?.onClick
    },
    // downloadMassive.isVisible && {
    //   // label: 'Comprobante masivo',
    //   label: t('massiveReceipt'),
    //   disabled: downloadMassive.disabled,
    //   type: 'download-csv',
    //   onClick: downloadMassive?.onClick
    // },
    folioTransfer.isVisible && {
      // label: 'Traslado a custodio',
      label: t('folioTransfer'),
      disabled: folioTransfer.disabled,
      type: 'folio-transfer',
      onClick: folioTransfer?.onClick
    }
  ]

  const dropdownActions: (DropdownAction | false)[] = [
    // folioTransfer.isVisible && {
    //   id: 'folio-transfer',
    //   label: 'Traslado a custodio',
    //   disabled: folioTransfer.disabled,
    //   action: folioTransfer?.onClick
    // }
  ]

  return {
    buttonActions: buttonActions.filter((action): action is HeaderAction =>
      Boolean(action)
    ),
    dropdownActions: dropdownActions.filter(
      (action): action is DropdownAction => Boolean(action)
    )
  }
}

```

## src/features/operations-management/utils/transformFractionToSave.ts

```typescript
import { limitDecimals } from '@/shared/utils/limitDecimals'
import { parsePercentage } from '@/shared/utils/parsePercentage'

import { type Fraction } from '../hooks/useStateFraction'
import { BodyAssignment } from '../services/saveAssignment'

export const transformFractionToSave = ({ body }: { body: Fraction[] }) => {
  const transformBody: BodyAssignment[] = body.map((item) => {
    const valueCommission =
      parsePercentage(item.commissionPercentage?.replace('.', ',')) ?? 0
    const isOriginOwn = item.source?.value === 121
    const value: BodyAssignment = {
      investorAccountId: item.investorAccount?.idAccount as number,
      participantAccountId: item.participantAccount?.idAccount as number,
      fiduciarySpecialist: false,
      sourceQuoteTypeId: item.source?.value as number,
      reference: item.reference,
      fractionQuantity: item.quantity?.value as number,
      commissionPercentage: isOriginOwn ? 0 : limitDecimals(valueCommission),
      valTax: item.valTax as number,
      custodianId: item.custodian?.id as number,
      ficAdministratorId: item?.administrator?.value as number,
      cashAccount: item?.cashAccount?.value,
      milaDirectDepositorId: item?.milaLocal?.id,
      referencePackage: item?.referencePackage?.value
    }
    return value
  })
  return transformBody
}

```

## src/features/operations-management/utils/transformFractionToSaveCorrection.ts

```typescript
import { limitDecimals } from '@/shared/utils/limitDecimals'
import { parsePercentage } from '@/shared/utils/parsePercentage'

import { type Fraction } from '../hooks/useStateFraction'
import { BodyCorrection } from '../types/correction'

export const transformFractionToSaveCorrection = ({
  body
}: {
  body: Fraction[]
}) => {
  const transformBody: BodyCorrection[] = body.map((item) => {
    const rawValue =
      item.commissionPercentage == null
        ? ''
        : String(item.commissionPercentage).replace('.', ',')
    const valueCommission = parsePercentage(rawValue) ?? 0
    const isOriginOwn = item.source?.value === 121

    const value: BodyCorrection = {
      investorAccountId: item.investorAccount?.idAccount as number,
      participantAccountId: item.participantAccount?.idAccount as number,
      fiduciarySpecialist: false,
      sourceQuoteTypeId: item.source?.value as number,
      reference: item.reference,
      fractionQuantity: item.quantity?.value as number,
      commissionPercentage: isOriginOwn ? 0 : limitDecimals(valueCommission),
      valTax: item.valTax as number,
      custodianId: item.custodian?.id as number,
      ficAdministratorId: item?.administrator?.value as number,
      cashAccount: item?.cashAccount?.value,
      fraction: item?.fraction ?? null
    }
    return value
  })
  return transformBody
}

```

## src/features/operations-management/utils/transformLocalTime.ts

```typescript
import { formattedDate } from 'remoteUtilities/formattedDate'

export const transformLocalTime = (
  dateTimeString: string,
  format: string = 'YYYY-MM-DD HH:mm:ss'
) => {
  const dtTransform = formattedDate({ date: dateTimeString, format })
  return dtTransform
}

```

## src/features/operations-management/utils/transformSettlementToFractionsDefault.ts

```typescript
import { Settlement } from '@/shared/types/settlement'

import { FieldsAssignment } from '../constants/fieldsAssignment'
import { Fraction } from '../hooks/useStateFraction'

export const transformSettlementToFractions = (settlement: Settlement[]) => {
  const settlementValues = settlement ?? []
  const dataTransform: Fraction[] = []
  for (
    let index = 0, length = settlementValues?.length ?? 0;
    index < length;
    index++
  ) {
    const item = settlementValues[index]
    const participantAccount = item.participantAccount
    const investorAccount = item.investorAccount
    const account = item.investorAccount ?? participantAccount
    const investor = investorAccount?.investor
    const nameInvestor = investorAccount?.accountName ?? ''
    const value: Fraction = {
      [FieldsAssignment.id]: crypto.randomUUID(),
      [FieldsAssignment.index]: index,
      [FieldsAssignment.account]: {
        value: account?.accountNumber
      },
      [FieldsAssignment.quantity]: { value: item.fractionQuantity },
      [FieldsAssignment.source]: {
        value: item.sourceQuoteType?.id ?? 1,
        label: item.sourceQuoteType?.description || ''
      },
      [FieldsAssignment.custodian]: item?.custodian
        ? {
            ...item.custodian,
            name: `${item.custodian?.code} ${item.custodian?.name}`
          }
        : null,
      [FieldsAssignment.hasPreviousCustodian]: !!item.custodianId,
      [FieldsAssignment.custodianStatus]: item.custodianStatus,
      [FieldsAssignment.commissionPercentage]:
        item.commissionPercentage.toString().replace('.', ',') + '%',
      [FieldsAssignment.reference]: item.reference,
      [FieldsAssignment.participantAccount]: participantAccount && {
        idParticipant: participantAccount.participant?.id,
        idAccount: participantAccount.id,
        accountNumber: participantAccount.accountNumber,
        accountSourceType: 1,
        documentNumber: participantAccount.participant?.documentNumber,
        name: participantAccount.participant?.name,
        shortName: participantAccount.participant?.shortName,
        typeId:
          participantAccount?.participant?.identificationType?.code?.toString()
      },
      [FieldsAssignment.investorAccount]: investorAccount && {
        idParticipant: investor?.id,
        idAccount: investorAccount.id,
        accountNumber: investorAccount.accountNumber,
        accountSourceType: 2,
        documentNumber: investor?.documentNumber,
        name: nameInvestor,
        shortName: nameInvestor,
        typeId: investor?.identificationType?.code?.toString()
      },
      [FieldsAssignment.commission]: item.commissionAmount,
      [FieldsAssignment.valTax]: item?.valTax,
      [FieldsAssignment.amount]: item?.amount,
      [FieldsAssignment.impCommission]: item?.valTaxAmount,
      [FieldsAssignment.netAmount]: item?.netAmount,
      [FieldsAssignment.returnAmount]: item?.returnAmount,
      [FieldsAssignment.administrator]: {
        value: item.ficAdministrator?.id,
        label: item.ficAdministrator?.code || ''
      },
      [FieldsAssignment.cashAccount]: { value: item?.cashAccount ?? '' },
      [FieldsAssignment.isEditable]: item?.isEditable,
      [FieldsAssignment.isNewFraction]: false,
      [FieldsAssignment.masterAccount]: item?.masterAccount ?? '',
      [FieldsAssignment.isPreloadedLocalAccount]:
        item?.isPreloadedLocalAccount ?? false,
      [FieldsAssignment.fraction]: item?.fraction,
      [FieldsAssignment.milaLocal]: item?.milaDirectDepositor,
      [FieldsAssignment.referencePackage]: { value: item?.referencePackage }
    }
    dataTransform.push(value)
  }

  return dataTransform
}

```

## src/features/operations-management/utils/validateAccountAssignment.ts

```typescript
import { FieldsAssignment } from '../constants/fieldsAssignment'
import {
  Fraction,
  ObjectValue,
  ParticipantValue
} from '../hooks/useStateFraction'
import assignmentValidateAccount from '../services/assignmentValidateAccount'
import hasEqualAccountFraction from './hasEqualAccountFraction'

const validateAccountAssignment = async ({
  valueInput,
  side,
  tradeId,
  origin,
  fractions,
  fraction,
  isCorrection
}: {
  valueInput: string
  side: string
  tradeId: number
  origin: ObjectValue
  fractions: Fraction[]
  fraction: Fraction
  isCorrection: boolean | undefined
}) => {
  const response = await assignmentValidateAccount({
    account: valueInput,
    sideId: side,
    tradeId: tradeId,
    originId: origin.value as number,
    isCorrection: isCorrection ?? false
  })
  const { participantAccount, investorAccount, masterAccount, custodian } =
    response
  const investorDisplayName = investorAccount?.accountName ?? ''
  const valueAccount: Partial<ParticipantValue> | null = {
    accountNumber:
      participantAccount?.accountNumber ?? investorAccount?.accountNumber,
    idParticipant:
      participantAccount?.participant?.id ?? investorAccount?.investor?.id,
    name: participantAccount?.participant?.name ?? investorDisplayName,
    shortName:
      participantAccount?.participant?.shortName ?? investorDisplayName,
    typeId:
      participantAccount?.participant?.identificationType?.code ??
      investorAccount?.investor.identificationType.code,
    documentNumber:
      participantAccount?.participant?.documentNumber ??
      investorAccount?.investor.documentNumber,
    idAccount: participantAccount?.id ?? investorAccount?.id,
    accountSourceType: participantAccount ? 1 : 2
  }

  const { hasEqualAccount, valueMessage } = hasEqualAccountFraction({
    fractions,
    fraction,
    isCorrection: isCorrection ?? false,
    valueInput
  })

  const commonUpdate: Partial<Fraction> = {
    [FieldsAssignment.account]: {
      value: valueInput,
      error: {
        error: hasEqualAccount,
        message: valueMessage
      }
    },
    [FieldsAssignment.participantAccount]: response?.participantAccount
      ? valueAccount
      : null,
    [FieldsAssignment.investorAccount]: response?.investorAccount
      ? valueAccount
      : null,
    [FieldsAssignment.milaLocal]: response.milaDirectDepositor,
    [FieldsAssignment.isMasterAccount]: masterAccount
  }
  return { commonUpdate, masterAccount, custodian, valueAccount }
}

export default validateAccountAssignment

```

## src/features/operations-management/utils/validateIsOwnPosition.ts

```typescript
const validateIsOwnPosition = (position: number) => {
  const validatePosition = position === 121
  return validatePosition
}

export default validateIsOwnPosition

```

## src/features/operations-management/utils/validationsButtonsToolbarAssignment.ts

```typescript
import { type Fraction } from '../hooks/useStateFraction'

export interface DisabledButtons {
  addFraction?: boolean
  deleteFraction?: boolean
}
export const validationButtonsToolbarAssignment = ({
  fractions,
  thereAreSelectedFractions,
  quantityIsMinorLimit,
  maxFractions,
  isCorrection = false
}: {
  fractions: Fraction[]
  thereAreSelectedFractions?: Fraction[]
  quantityIsMinorLimit: boolean
  maxFractions: number
  isCorrection?: boolean
}) => {
  const fractionsLength = fractions.length
  const isValidSelection = thereAreSelectedFractions?.length === 0
  const disabledButtons: DisabledButtons = {
    addFraction: !quantityIsMinorLimit || fractionsLength >= maxFractions,
    deleteFraction: isValidSelection
  }
  for (
    let index = 0, checkboxSelected = thereAreSelectedFractions?.length ?? 0;
    index < checkboxSelected;
    index++
  ) {
    const fraction = thereAreSelectedFractions?.[index]
    if (disabledButtons.deleteFraction) {
      break
    } else {
      const isNewFraction = fraction?.isNewFraction ?? false
      const masterAccount = fraction?.masterAccount ?? false
      const isPreloadedLocalAccount =
        isCorrection && Boolean(!masterAccount && !isNewFraction)

      const isEditable = fraction?.isEditable === false
      if (!disabledButtons.deleteFraction) {
        disabledButtons.deleteFraction =
          isValidSelection ||
          fractionsLength === 1 ||
          fractionsLength === checkboxSelected ||
          isEditable ||
          isPreloadedLocalAccount
      }
    }
  }
  return disabledButtons
}

```

## src/features/operations-management/utils/validationsFractionsAssignment.ts

```typescript
import { CountriesCodes } from '../constants/countriesCodes'
import { FieldsAssignment } from '../constants/fieldsAssignment'
import { type HandleAlertAction } from '../hooks/useAssignmentAlert'
import { type Fraction } from '../hooks/useStateFraction'
import validateIsOwnPosition from './validateIsOwnPosition'

const { quantity, account, cashAccount } = FieldsAssignment
const keyQuantity = quantity
const keyAccount = account

export interface ValidationsValues {
  quantity: {
    total: number
    isComplete: boolean
  }
  account: {
    isComplete: boolean
    error: boolean
  }

  cashAccount: {
    hasError: boolean
  }
  isOwnPosition: boolean
}

export interface ValidationsResult {
  othersValidations: {
    quantityAvailableToAssign: number
    quantityIsMinorLimit: boolean
    availableToSave: boolean
    hasCustodianFractions: boolean
  }
}
export const validationsFractionsAssignment = ({
  fractions,
  limitQuantity,
  isCorrection = false,
  countryCodeTrade,
  changeAlert
}: {
  fractions: Fraction[]
  limitQuantity: number
  isCorrection?: boolean
  countryCodeTrade: keyof typeof CountriesCodes
  changeAlert: HandleAlertAction
}): ValidationsResult => {
  const validationsValues: ValidationsValues = {
    [keyQuantity]: { total: 0, isComplete: false },
    [keyAccount]: { isComplete: false, error: false },
    [cashAccount]: {
      hasError: false
    },
    ['isOwnPosition']: false
  }
  const {
    [keyAccount]: accountValidation,
    [keyQuantity]: quantityValidation,
    [cashAccount]: cashAccountValidation
  } = validationsValues
  let fieldsEmptyCashAccount = 0
  let errorAccount = 0
  let quantityFieldsNotValid = 0
  let countCustodianFractions = 0

  const handleValidateCashAccount = (fraction: Fraction) => {
    const error = fraction[FieldsAssignment.cashAccount]?.error
    const errorCashAccount =
      !fraction[FieldsAssignment.cashAccount]?.value?.trim() ||
      !!error?.message ||
      !!error?.error
    if (errorCashAccount && countryCodeTrade === CountriesCodes.CO) {
      ++fieldsEmptyCashAccount
    }
  }
  const validateAccount = (fraction: Fraction) => {
    const valueAccount = fraction?.[keyAccount]

    if (
      (!valueAccount?.value ||
        !!valueAccount?.error?.error ||
        !!valueAccount?.error?.message) &&
      errorAccount === 0
    ) {
      errorAccount++
    }
  }
  const validateQuantity = (fraction: Fraction) => {
    const currentQuantity = fraction?.[keyQuantity]

    if (!(currentQuantity?.value && !!currentQuantity.value)) {
      quantityFieldsNotValid++
    }
  }
  const validateSourceIsOwn = (fraction: Fraction) => {
    const isOwnPosition = validateIsOwnPosition(
      Number(fraction[FieldsAssignment.source]?.value)
    )
    if (isOwnPosition) {
      validationsValues['isOwnPosition'] = true
    }
  }
  const validateCustodian = (fraction: Fraction) => {
    if (fraction[FieldsAssignment.custodian]?.id) {
      countCustodianFractions++
    }
  }
  for (let index = 0, length = fractions.length; index < length; index++) {
    const fraction = fractions[index]
    const currentQuantity = fraction?.[keyQuantity]
    validationsValues[keyQuantity].total += currentQuantity?.value || 0
    handleValidateCashAccount(fraction)
    validateAccount(fraction)
    validateQuantity(fraction)
    validateSourceIsOwn(fraction)
    validateCustodian(fraction)
  }

  validationsValues[cashAccount].hasError = fieldsEmptyCashAccount > 0
  validationsValues[keyAccount].error = errorAccount > 0
  validationsValues[keyQuantity].isComplete = quantityFieldsNotValid === 0
  accountValidation.isComplete = errorAccount === 0
  const hasCustodianFractions = countCustodianFractions > 0
  errorAccount = 0
  fieldsEmptyCashAccount = 0
  quantityFieldsNotValid = 0
  countCustodianFractions = 0

  const quantityAvailableToAssign = quantityValidation.total
  const quantityIsMinorLimit = quantityAvailableToAssign < limitQuantity
  const quantityIsEqualLimit = quantityAvailableToAssign === limitQuantity
  const availableSourcesFractions = validationsValues['isOwnPosition']
    ? fractions.length === 1
    : true
  const availableToSave =
    quantityIsEqualLimit &&
    quantityValidation.isComplete &&
    accountValidation.isComplete &&
    !accountValidation.error &&
    (isCorrection ||
      (!cashAccountValidation.hasError && availableSourcesFractions))

  if (!availableSourcesFractions && !isCorrection) {
    changeAlert({
      variant: 'OWN_POSITION_ONLY_ONE_FRACTION_ALLOWED'
    })
  }
  return {
    othersValidations: {
      quantityAvailableToAssign,
      quantityIsMinorLimit,
      availableToSave,
      hasCustodianFractions
    }
  }
}

```

## src/features/reports/components/BaseReportTab.tsx

```tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography } from '@nuam/common-fe-lib-components'

import { useScreenActions } from 'remoteShell/mf-shell-useScreenActions'
import { NewTable } from 'remoteUtilities/components-mf-utilities'

import { useReport } from '@/features/reports/hooks/useReport'

import { OPERATION_REPORTS_ACTIONS } from '@/shared/constants/actionCodes'

// import { useReportHistoryData } from '@/features/reports/hooks/useReportHistoryData'
import {
  GenerateReport,
  GenerateReportProps,
  ReportFormFieldConfig
} from './GenerateReport'

export interface BaseReportTabProps {
  heading?: string
  generateProps: Omit<GenerateReportProps, 'fields'>
  columnsHook?: () => { columnsDate: any }
  columns?: any[] // nuevo: columnas específicas por tab
  rowsHook?: () => { reportHistory: any }
  tableProps?: {
    axiosInstanceKey?: string
    endpoint?: string
    setDataRemote?: any
    rows?: any[]
  }
  onRefresh?: () => void
  formFields: ReportFormFieldConfig[] // nuevo
}

export const BaseReportTab = ({
  heading = 'Archivos generados',
  generateProps,
  columnsHook,
  columns,
  // rowsHook = useReportHistoryData,
  tableProps,
  onRefresh,
  formFields
}: BaseReportTabProps) => {
  let resolvedColumns = columns
  if (!resolvedColumns) {
    const hook = columnsHook || useReport
    const { columnsDate } = hook()
    resolvedColumns = columnsDate
  }
  const { hasAction } = useScreenActions()
  const permissionGenerateFile = hasAction(
    OPERATION_REPORTS_ACTIONS.GENERATE_FILE
  )

  return (
    <div className="flex flex-col gap-2 flex-1">
      {permissionGenerateFile && (
        <GenerateReport
          {...generateProps}
          fields={formFields}
          onSuccess={() => {
            onRefresh?.()
            generateProps?.onSuccess?.()
          }}
        />
      )}
      <Typography variant="h6" className="font-medium text-[#3D3D3D]">
        {heading}
      </Typography>
      <NewTable
        disableRowSelectionOnClick
        axiosInstanceKey={tableProps?.axiosInstanceKey || 'httpOperations'}
        columns={resolvedColumns}
        rows={tableProps?.rows} //reportHistory
        endpoint={tableProps?.endpoint}
        setDataRemote={tableProps?.setDataRemote}
      />
    </div>
  )
}

```

## src/features/reports/components/CashRepoFileTab.tsx

```tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'

import { useScreenActions } from 'remoteShell/mf-shell-useScreenActions'
import { Spinner, ModalAlert } from 'remoteUtilities/components-mf-utilities'

import useTranslate from '@/shared/hooks/useTranslate'

import {
  getCashRepoFileColumnsExternal,
  getCashRepoFileColumnsInternal
} from '../constants/cashRepoFileColumns'
import { FileTypeOptionsEnum } from '../enums/fileTypeOptions'
import useColumnsDailyFileRepo from '../hooks/useColumnsDailyFileRepo'
import useCreateReport from '../hooks/useCreateReport'
import useFetchParticipantReport from '../hooks/useFetchParticipantReport'
import useFieldsReportsCashFile from '../hooks/useFieldsReportsCashFile'
import usePaginateReport from '../hooks/usePaginateReport'
import { useReportDaily } from '../hooks/useReportDaily'
import type { ModalAlertState } from '../types'
import type { GenerateReportPayload } from './GenerateReport'
import { GenerateReportWithDaily } from './GenerateReportWithDaily'

// Columnas exclusivas de este tab (versión completa para usuario interno)

export const CashRepoFileTab = () => {
  const [modalAlertState, setModalAlertState] = useState<ModalAlertState>(null)

  const { fields, isInternalUser, participantSelected } =
    useFieldsReportsCashFile()

  const { endpoint, rows, setDataRemote, refresh } = usePaginateReport({
    typeReport: FileTypeOptionsEnum.HISTORICO,
    selectParticipant: participantSelected
  })

  const [isGenerating, setIsGenerating] = useState(false)

  const { hasAction } = useScreenActions()

  const { t } = useTranslate({ keyPrefix: 'report.columns' })
  const resolvedColumns = isInternalUser
    ? getCashRepoFileColumnsInternal({ hasAction, t })
    : getCashRepoFileColumnsExternal({ hasAction, t })

  // Adaptador de payload (independiente de GenerateReport) extendido
  const payloadAdapter = (
    values: Record<string, any>,
    ctx: { userId: number }
  ): GenerateReportPayload => {
    const participantName = values.participant?.label || null

    return {
      userId: ctx.userId,
      participantId: values.participant?.id ?? null,
      date: values.date,
      statusId: values.statusId ?? null,
      participantName
    }
  }

  const { handleCreateReport } = useCreateReport({
    isInternalUser,
    refresh,
    setIsGenerating,
    setModalAlertState
  })

  const baseReport = {
    formFields: fields,
    columns: resolvedColumns,
    generateProps: {
      showParticipant: true,
      payloadAdapter,
      onGenerate: handleCreateReport,
      messages: {
        success: '',
        confirmTitle: 'Confirmar generación',
        confirmQuestion: '¿Deseas generar Cash Repo File?'
      },
      titleReport: 'Generación de archivo histórico'
    },
    tableProps: {
      axiosInstanceKey: 'httpOperationsReceipts',
      endpoint,
      setDataRemote,
      rows
    }
  }
  const {
    participantSelected: participantDaily,
    handleOptionChange: handleOptionChangeDaily
  } = useFetchParticipantReport({
    countryId: null
  })
  const { rows: rowsTableDaily } = useReportDaily({
    selectParticipant: participantDaily
  })
  const { columns: columnsDaily } = useColumnsDailyFileRepo()
  return (
    <>
      <GenerateReportWithDaily
        baseReport={baseReport}
        dailyReport={{
          changeParticipant: handleOptionChangeDaily,
          participantSelected: participantDaily,
          columnsTable: columnsDaily,
          isInternalUser,
          rowsTable: rowsTableDaily
        }}
        modalAlertState={modalAlertState}
        isGenerating={isGenerating}
      />
      {isGenerating && <Spinner />}

      {modalAlertState?.open && <ModalAlert {...modalAlertState} />}
    </>
  )
}

```

## src/features/reports/components/CashRepoFixedTab.tsx

```tsx
import { useState } from 'react'
import { useSelector } from 'react-redux'
import * as yup from 'yup'

import { RootState } from 'remoteShell/mf-store'
import {
  ModalAlert,
  Toast,
  Spinner
} from 'remoteUtilities/components-mf-utilities'
import { formattedDate } from 'remoteUtilities/formattedDate'

import { useReport } from '@/features/reports/hooks/useReport'

import useGenerateLogs from '@/shared/hooks/useGenerateLogs'

import { STATUS_OPTIONS_OP_CORREGIDAS } from '../constants'
import {
  getCashRepoFixedColumnsInternal,
  getCashRepoFixedColumnsExternal
} from '../constants/CashRepoFixedTabColumns'
import { FileTypeOptionsEnum } from '../enums/fileTypeOptions'
import usePaginateReport from '../hooks/usePaginateReport'
import { downloadReportFile } from '../services/report'
import {
  generateCorrectedReportsRequest,
  validateCorrectedReportsRequest
} from '../services/reportGenerate'
import { BaseReportTab } from './BaseReportTab'
import { ReportFormFieldConfig, GenerateReportPayload } from './GenerateReport'

const twoMonthsBack = (() => {
  const d = new Date()
  d.setMonth(d.getMonth() - 2)
  d.setHours(0, 0, 0, 0)
  return d
})()

const today = (() => {
  const d = new Date()
  d.setHours(0, 0, 0, 0)
  return d
})()

export const CashRepoFixedTab = () => {
  const {
    onChangeStatus,
    currentStatus,
    isInternalUser,
    fetchOptionsParticipants,
    handleOptionChange
  } = useReport()
  const { endpoint, rows, setDataRemote, refresh } = usePaginateReport({
    typeReport: FileTypeOptionsEnum.CORRECCIONES
  })

  // Estados locales para flujo de validación / generación
  const [generateModal, setGenerateModal] = useState<{
    open: boolean
    total: number
    payload: {
      startDate: string
      endDate: string
      participantId: number | null
      statusId: number | null
    }
  } | null>(null)
  const [notFoundModal, setNotFoundModal] = useState(false)

  const [toastCfg, setToastCfg] = useState<{
    open: boolean
    message: string
    variant: 'success' | 'error'
  }>({
    open: false,
    message: '',
    variant: 'success'
  })
  const [loadingGeneration, setLoadingGeneration] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)
  const [resultModal, setResultModal] = useState<{
    type: 'success' | 'error'
    data?: any
  } | null>(null)

  const { generateLogs } = useGenerateLogs()
  const { participantId } = useSelector(
    (state: RootState) => state.auth.infoUserNubo
  )

  const handleDownload = async (row: any) => {
    if (!row?.id) return
    try {
      setIsDownloading(true)
      const { blob, fileName } = await downloadReportFile(row.id)
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = fileName
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(url)
      setToastCfg({
        open: true,
        message: 'Archivo descargado correctamente',
        variant: 'success'
      })
    } catch (e) {
      console.error('Error descargando archivo', e)
      setToastCfg({
        open: true,
        message: 'No se pudo descargar el archivo',
        variant: 'error'
      })
    } finally {
      setIsDownloading(false)
    }
  }

  const resolvedColumns = isInternalUser
    ? getCashRepoFixedColumnsInternal(handleDownload)
    : getCashRepoFixedColumnsExternal(handleDownload)

  const fields: ReportFormFieldConfig[] = [
    {
      name: 'startDate',
      label: 'Fecha Inicial',
      type: 'date',
      minDate: twoMonthsBack,
      maxDate: today,
      schema: yup
        .date()
        .required('Requerido')
        .min(twoMonthsBack, 'Máx 2 meses atrás')
        .max(today, 'No puede ser mayor al día actual')
        .test('lte-end', 'Inicio > Fin', function (v) {
          const end = (this.parent as any).endDate
          if (!v || !end) return true
          return v <= end
        })
    },
    {
      name: 'endDate',
      label: 'Fecha Final',
      type: 'date',
      minDate: twoMonthsBack,
      maxDate: today,
      schema: yup
        .date()
        .required('Requerido')
        .min(twoMonthsBack, 'Máx 2 meses atrás')
        .max(today, 'No puede ser mayor al día actual')
        .test('gte-start', 'Fin < Inicio', function (v) {
          const start = (this.parent as any).startDate
          if (!v || !start) return true
          return v >= start
        })
    },
    {
      name: 'participant',
      label: 'Participante',
      type: 'autocomplete',
      schema: yup
        .object({
          id: yup.number().required(),
          label: yup.string().required()
        })
        .nullable(),
      shouldRender: isInternalUser,
      componentProps: {
        fetchOptions: fetchOptionsParticipants,
        minSearchLength: 3,
        debounceTime: 300,
        onSelected: handleOptionChange
      }
    },
    {
      name: 'statusId',
      label: 'Estado de la operación',
      type: 'select',
      schema: yup.number().nullable(),
      componentProps: {
        options: STATUS_OPTIONS_OP_CORREGIDAS,
        onChangeHook: onChangeStatus,
        externalValue: currentStatus
      }
    }
  ]

  const payloadAdapter = (
    values: Record<string, any>,
    ctx: { userId: number }
  ): GenerateReportPayload => ({
    userId: ctx.userId,
    participantId: values.participant?.id ?? null,
    startDate: values.startDate,
    endDate: values.endDate,
    statusId: values.statusId ?? null
  })

  const formatDate = (d?: Date) =>
    formattedDate({ date: d, format: 'YYYY-MM-DD' })

  // onGenerate reemplazado: primero valida y según resultado abre modal
  const handleValidateAndModal = async (payload: GenerateReportPayload) => {
    if (!payload.startDate || !payload.endDate) return
    const correctedPayload = {
      startDate: formatDate(payload.startDate),
      endDate: formatDate(payload.endDate),
      participantId: isInternalUser
        ? (payload.participantId ?? null)
        : participantId, // sin participante seleccionado en este tab
      statusId: payload.statusId ?? null
    }
    try {
      const res: any = await validateCorrectedReportsRequest(correctedPayload)
      const total =
        res?.totalElements ?? res?.data?.totalElements ?? res?.data ?? 0
      if (total > 0) {
        setGenerateModal({ open: true, total, payload: correctedPayload })
      } else {
        setNotFoundModal(true)
      }
    } catch (e) {
      // En caso de error tratamos como "no encontrados"
      setNotFoundModal(true)
      console.error('Error validando reporte corregido', e)
    }
  }

  const handleConfirmGeneration = async () => {
    if (!generateModal?.payload) return
    setLoadingGeneration(true)
    try {
      // const correctedPayload = {
      //   startDate: formatDate(rawPayload.startDate),
      //   endDate: formatDate(rawPayload.endDate),
      //   participantId: rawPayload.participantId ?? null,
      //   statusId: rawPayload.statusId ?? null
      // }
      const res: any = await generateCorrectedReportsRequest({
        ...generateModal.payload,
        participantId: isInternalUser
          ? (generateModal.payload.participantId ?? null)
          : participantId
      }) //correctedPayload

      if (res?.status === 200 || (res && !res.error)) {
        setToastCfg({
          open: true,
          message: 'El reporte ha sido generado exitosamente',
          variant: 'success'
        })
      }
      generateLogs({
        actionType: 'Generación de reporte operaciones corregidas',
        actionDestination: 'Generación del reporte exitosa',
        statusID: '200'
      })

      const success =
        res &&
        (res.data?.fileGenerateId !== undefined ||
          (res.data?.generationStatus && res.data?.participant))
      if (success) {
        setResultModal({ type: 'success', data: res.data })
        refresh()
      } else {
        setResultModal({ type: 'error' })
        generateLogs({
          actionType: 'Generación de reporte operaciones corregidas',
          actionDestination: 'Generación del reporte fallida',
          statusID: '500'
        })
      }
    } catch (e) {
      console.error('Error generando reporte corregido', e)
      setResultModal({ type: 'error' })
      generateLogs({
        actionType: 'Generación de reporte operaciones corregidas',
        actionDestination: 'Generación del reporte fallida',
        statusID: '500'
      })
    } finally {
      setLoadingGeneration(false)
      setGenerateModal(null)
    }
  }

  return (
    <>
      <BaseReportTab
        formFields={fields}
        columns={resolvedColumns}
        generateProps={{
          showParticipant: false,
          payloadAdapter,
          onGenerate: async (payload: GenerateReportPayload) => {
            //await handleConfirmGeneration(payload)
            await handleValidateAndModal(payload)
            return {}
          },
          successMessageBuilder: () => '',
          messages: {
            success: ''
          }
        }}
        tableProps={{
          axiosInstanceKey: 'httpOperationsReceipts',
          endpoint,
          setDataRemote,
          rows
        }}
      />
      {/* Modal de generación (info) */}
      {generateModal?.open && (
        <ModalAlert
          title="Generación de archivo"
          variant="warning"
          textCancel="Cancelar"
          textSuccess={loadingGeneration ? 'Generando...' : 'Generar archivo'}
          handleCancel={() => setGenerateModal(null)}
          onClick={handleConfirmGeneration}
          disabled={loadingGeneration}
          orientation="horizontal"
          className="w-[427px] gap-4 py-12 px-6"
        >
          <p className="text-[#3D3D3D] text-center">
            Se han encontrado {generateModal.total} registros. ¿Desea generar el
            archivo?
          </p>
        </ModalAlert>
      )}
      {/* Modal de no encontrados (warning) */}
      {notFoundModal && (
        <ModalAlert
          title="Generación de archivo"
          variant="error"
          textSuccess="Entendido"
          onClick={() => setNotFoundModal(false)}
          className="w-[427px] gap-4 py-12 px-6"
        >
          <p className="text-[#3D3D3D] text-center">
            No se encontró ningún registro relacionado, prueba cambiado los
            criterios de búsqueda.
          </p>
        </ModalAlert>
      )}
      {toastCfg.open && (
        <Toast
          text={toastCfg.message}
          variant={toastCfg.variant}
          width="424px"
          onClose={() => setToastCfg((t) => ({ ...t, open: false }))}
        />
      )}
      {resultModal?.type === 'success' && (
        <ModalAlert
          title="Se ha generado un nuevo reporte"
          variant="warning"
          textSuccess="Volver"
          onClick={() => setResultModal(null)}
          className="w-[427px] gap-4 py-12 px-6"
        >
          <p className="text-[#3D3D3D] text-center">
            {isInternalUser
              ? (() => {
                  const p = resultModal.data?.participant
                  const participantLabel = p ? `${p.code} - ${p.name}` : ''
                  const countryName = p?.country?.name ?? ''
                  //validación para el caso de participante no seleccionado
                  return participantLabel
                    ? `Se ha generado exitosamente el reporte de operaciones corregidas para el participante "${participantLabel}" de ${countryName}. Una vez generado podrá descargarlo en la tabla de archivos.`
                    : 'Se ha generado exitosamente el reporte de operaciones corregidas. Una vez generado podrá descargarlo en la tabla de archivos.'
                })()
              : 'Se ha generado exitosamente el reporte de operaciones corregidas. Una vez generado podrá descargarlo en la tabla de archivos.'}
          </p>
        </ModalAlert>
      )}
      {resultModal?.type === 'error' && (
        <ModalAlert
          title="Ocurrió un error inesperado"
          variant="error"
          textSuccess="Volver"
          onClick={() => setResultModal(null)}
          className="w-[427px] gap-4 py-12 px-6"
        >
          <p className="text-[#3D3D3D] text-center">
            Vuelve a intentarlo, si el error persiste comunícate a{' '}
            xxxxx@nuamx.com o 55555555
          </p>
        </ModalAlert>
      )}
      {(isDownloading || loadingGeneration) && <Spinner />}
    </>
  )
}

```

## src/features/reports/components/DailyFile.tsx

```tsx
import {
  DefaultComponents,
  MaterialIcons,
  Typography
} from '@nuam/common-fe-lib-components'
import { XDataGridLib } from '@nuam/common-fe-lib-components'

import { useScreenActions } from 'remoteShell/mf-shell-useScreenActions'
import {
  AutoCompleteInput,
  BasicTable
} from 'remoteUtilities/components-mf-utilities'
import { formattedDate } from 'remoteUtilities/formattedDate'
import { StatusChip } from 'remoteUtilities/statusChip'

import { OPERATION_REPORTS_ACTIONS } from '@/shared/constants/actionCodes'
import useTranslate from '@/shared/hooks/useTranslate'

import useFetchParticipantReport from '../hooks/useFetchParticipantReport'
import { useReportDaily } from '../hooks/useReportDaily'
import DownloadFileReport from './DownloadFileReport'

const DailyFile = ({
  isInternalUser
}: {
  isInternalUser: boolean
  columns: XDataGridLib.GridColDef[]
}) => {
  const { t } = useTranslate({ keyPrefix: 'report' })
  const { t: tColumns } = useTranslate({ keyPrefix: 'report.columns' })
  const { fetchOptionsParticipants, handleOptionChange, participantSelected } =
    useFetchParticipantReport({
      countryId: null
    })
  const { rows } = useReportDaily({
    selectParticipant: participantSelected
  })

  const { hasAction } = useScreenActions()
  const permissionDownload = hasAction(OPERATION_REPORTS_ACTIONS.FILE_DOWNLOAD)
  return (
    <DefaultComponents.Box>
      <div className="flex gap-4 items-center mt-4">
        <Typography variant="h2" fontSize="20px" fontWeight="500">
          {/* Archivo Diario */}
          {t('dailyFileTitle')}
        </Typography>
        <DefaultComponents.Tooltip
          // title="Archivo generado de manera automática cada 15 minutos"
          title={t('dailyFileTooltip')}
          placement="top"
        >
          <MaterialIcons.InfoOutline sx={{ marginBottom: '4px' }} />
        </DefaultComponents.Tooltip>
      </div>
      {isInternalUser && (
        <div className=" w-full my-4 max-w-290px">
          <AutoCompleteInput
            // label={'Participante'}
            label={t('generateReport.participant')}
            fetchOptions={fetchOptionsParticipants}
            onChange={(val: { id: number; label: string } | null) => {
              handleOptionChange({
                id: val?.id ?? 0,
                name: val?.label ?? '',
                label: val?.label ?? ''
              })
            }}
            value={participantSelected ?? null}
            itemsPerPage={10}
            minSearchLength={3}
            debounceTime={300}
            key={`participant-${participantSelected?.id ?? 'none'}`}
          />
        </div>
      )}
      <BasicTable
        columns={[
          {
            // headerName: 'Fecha y hora generacion',
            headerName: tColumns('dateTime'),
            field: 'generatedAt',
            renderCell: (row: (typeof rows)[number]) => {
              const format = formattedDate({
                date: row.generatedAt,
                format: 'DD/MM/YYYY - HH:mm'
              })
              return format
            }
          },
          {
            field: 'operationStatusDescription',
            // headerName: 'Estado de la operación',
            headerName: tColumns('status'),
            minWidth: 200,
            flex: 2,
            renderCell: (row: (typeof rows)[number]) => {
              const statusDescription = row?.operationStatus.description || ''
              return (
                <StatusChip
                  value={statusDescription}
                  label={statusDescription}
                />
              )
            }
          },
          {
            // headerName: 'Estado del reporte',
            headerName: tColumns('statusReport'),
            field: 'estadoDelReporte',
            renderCell: (row: (typeof rows)[number]) => {
              const status = row.generationStatus
              return (
                <StatusChip
                  value={status.description}
                  label={status.description}
                />
              )
            }
          },
          {
            // headerName: 'Acciones',
            headerName: tColumns('actions'),
            field: 'acciones',
            renderCell: (row: (typeof rows)[number]) => {
              const isEnabled = row.generationStatus.description === 'GENERADO'
              return (
                permissionDownload && (
                  <DownloadFileReport isEnabled={isEnabled} fileId={row.id} />
                )
              )
            }
          }
        ]}
        rows={rows ?? []}
        height="auto"
        classNameContainer="flex flex-col flex-1"
        classNameTable="max-h-[190px] min-h-[190px] xl:min-h-[205px]  xl:max-h-[205px]"
        classNameCell="py-[10px] "
      />
    </DefaultComponents.Box>
  )
}

export default DailyFile

```

## src/features/reports/components/DailyFileParticipant.tsx

```tsx
import { AutoCompleteInput } from 'remoteUtilities/components-mf-utilities'

const DailyFileParticipant = () => {
  return <AutoCompleteInput />
}

export default DailyFileParticipant

```

## src/features/reports/components/DailyFileReport.tsx

```tsx
import {
  DefaultComponents,
  MaterialIcons,
  Typography
} from '@nuam/common-fe-lib-components'
import { ReactNode } from 'react'

import {
  AutoCompleteInput,
  BasicTable
} from 'remoteUtilities/components-mf-utilities'

import useTranslate from '@/shared/hooks/useTranslate'

import useFetchParticipantReport from '../hooks/useFetchParticipantReport'
import type { OptionType } from '../types'
import type { IInfoReport } from '../types/reports'

export interface DailyFileReportProps {
  isInternalUser: boolean
  rowsTable: IInfoReport[]
  columnsTable: {
    field: string
    headerName: string
    renderCell: (row: IInfoReport) => ReactNode
    minWidth?: number
    flex?: number
  }[]
  participantSelected: OptionType | null
  changeParticipant: (option: OptionType | null) => void
}
const DailyFileReport = ({
  isInternalUser,
  participantSelected,
  changeParticipant,
  columnsTable,
  rowsTable
}: DailyFileReportProps) => {
  const { t } = useTranslate({ keyPrefix: 'report' })
  const { fetchOptionsParticipants } = useFetchParticipantReport({
    countryId: null
  })

  return (
    <DefaultComponents.Box>
      <div className="flex gap-4 items-center mt-4">
        <Typography variant="h2" fontSize="20px" fontWeight="500">
          {/* Archivo Diario */}
          {t('dailyFileTitle')}
        </Typography>
        <DefaultComponents.Tooltip
          // title="Archivo generado de manera automática cada 15 minutos"
          title={t('dailyFileTooltip')}
          placement="top"
        >
          <MaterialIcons.InfoOutline sx={{ marginBottom: '4px' }} />
        </DefaultComponents.Tooltip>
      </div>
      {isInternalUser && (
        <div className=" w-full my-4 max-w-[290px]">
          <AutoCompleteInput
            // label={'Participante'}
            label={t('generateReport.participant')}
            fetchOptions={fetchOptionsParticipants}
            onChange={(val: { id: number; label: string } | null) => {
              changeParticipant({
                id: val?.id ?? 0,
                name: val?.label ?? '',
                label: val?.label ?? ''
              })
            }}
            value={participantSelected ?? null}
            itemsPerPage={10}
            minSearchLength={3}
            debounceTime={300}
            key={`participant-${participantSelected?.id ?? 'none'}`}
          />
        </div>
      )}
      <BasicTable
        columns={columnsTable}
        rows={rowsTable ?? []}
        height="auto"
        classNameContainer="flex flex-col flex-1"
        classNameTable="h-auto max-h-[190px] xl:max-h-[205px]"
        classNameCell="py-[10px] "
      />
    </DefaultComponents.Box>
  )
}

export default DailyFileReport

```

## src/features/reports/components/DownloadFileReport.tsx

```tsx
import { MaterialIcons, NuamThemeWrapper } from '@nuam/common-fe-lib-components'
import { useState } from 'react'
import { createPortal } from 'react-dom'

import { Spinner, Toast } from 'remoteUtilities/components-mf-utilities'

import useGenerateLogs from '@/shared/hooks/useGenerateLogs'
import useTranslate from '@/shared/hooks/useTranslate'

import { downloadFileReport } from '../utils/downloadFileRepo'

const DownloadFileReport = ({
  isEnabled,
  fileId
}: {
  isEnabled: boolean
  fileId: number
}) => {
  const { t } = useTranslate({ keyPrefix: 'report' })
  const [downloadToast, setDownloadToast] = useState<{
    open: boolean
    variant: 'success' | 'error'
    message: string
  }>({ open: false, variant: 'success', message: '' })

  const [isDownloading, setIsDownloading] = useState(false)
  const { generateLogs } = useGenerateLogs()
  const handleDownload = async () => {
    await downloadFileReport({
      fileId,
      setIsDownloading,
      setDownloadToast,
      t,
      generateLogs
    })
  }

  return (
    <>
      <button
        className="flex items-center justify-center"
        onClick={isEnabled ? async () => await handleDownload() : undefined}
        // title="Descargar archivo"
        title={t('downloadFile')}
        disabled={!isEnabled}
        style={{
          background: 'none',
          border: 'none',
          padding: 0,
          opacity: isEnabled ? 1 : 0.5,
          cursor: isEnabled ? 'pointer' : 'not-allowed',
          display: 'flex',
          alignItems: 'center',
          height: '100%'
        }}
      >
        <NuamThemeWrapper>
          <MaterialIcons.FileDownloadOutlined color="primary" />
        </NuamThemeWrapper>
      </button>
      {isDownloading && createPortal(<Spinner />, document.body)}
      {downloadToast.open && (
        <Toast
          text={downloadToast.message}
          variant={downloadToast.variant}
          width="424px"
          onClose={() => setDownloadToast((prev) => ({ ...prev, open: false }))}
        />
      )}
    </>
  )
}

export default DownloadFileReport

```

## src/features/reports/components/GenerateReport.tsx

```tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
import { yupResolver } from '@hookform/resolvers/yup'
import {
  Typography,
  Button,
  DefaultComponents
} from '@nuam/common-fe-lib-components'
import { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { useEffect, useMemo } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useSelector } from 'react-redux'
import * as yup from 'yup'

import {
  AutoCompleteInput,
  DataPicker,
  ModalAlert,
  SelectNuam,
  Spinner,
  Toast
} from 'remoteUtilities/components-mf-utilities'

import { useGenerateReportState } from '@/features/reports/hooks/useGenerateReportState'

import { getUserInfo } from '@/shared/utils/getInfoUser'

dayjs.extend(customParseFormat)

export type ReportFieldType = 'date' | 'autocomplete' | 'select' | 'text'
export interface ReportFormFieldConfig {
  name: string
  label: string
  type: ReportFieldType
  schema: yup.AnySchema
  // AHORA: bandera simple. false => no se muestra ni se valida.
  shouldRender?: boolean
  minDate?: Date
  maxDate?: Date
  componentProps?: Record<string, any>
  dataSource?: string
}

export interface GenerateReportPayload {
  userId: number
  // Mantiene compatibilidad pero GenerateReport ya no infiere nombres
  participantId?: number | null
  startDate?: Date
  endDate?: Date
  statusId?: number | null
  // Permite campos adicionales
  [k: string]: any
}

export interface GenerateReportProps {
  showParticipant?: boolean
  onGenerate: (
    payload: GenerateReportPayload
  ) => Promise<void | string | { message?: string }>
  validate?: (values: Record<string, any>, ctx: { userType: string }) => boolean
  messages?: {
    success?: string
    notFound?: string
    confirmTitle?: string
    confirmQuestion?: string
  }
  onSuccess?: () => void
  fields: ReportFormFieldConfig[]
  // NUEVO: adaptador para construir payload sin depender de nombres internos
  payloadAdapter?: (
    values: Record<string, any>,
    ctx: { userId: number; userType: string }
  ) => GenerateReportPayload
  // NUEVO: genera mensaje dinámico según payload y tipo de usuario
  successMessageBuilder?: (
    payload: GenerateReportPayload,
    ctx: { userType: string }
  ) => string
  // NUEVO: modal dinámico de éxito
  successModalBuilder?: (
    payload: GenerateReportPayload,
    ctx: { userType: string }
  ) => {
    title: string
    description: string
    primaryText?: string
    secondaryText?: string
    onPrimary?: () => void
    onSecondary?: () => void
  } | null
  // NUEVO: modal dinámico de error
  errorModalBuilder?: (
    error: unknown,
    payload: GenerateReportPayload | null,
    ctx: { userType: string }
  ) => {
    title: string
    description: string
    primaryText?: string
    secondaryText?: string
    onPrimary?: () => void
    onSecondary?: () => void
  } | null
  titleReport?: string
}

const DEFAULT_MESSAGES = {
  success:
    'El archivo se ha generado con éxito, la descarga comenzará cuando esté listo',
  notFound:
    'No se encontró ningún registro relacionado, prueba cambiando los criterios de búsqueda.',
  confirmTitle: '¿Generar reportes?',
  confirmQuestion: '¿Deseas generar el archivo?'
}

export const GenerateReport = ({
  onGenerate,
  validate,
  messages = DEFAULT_MESSAGES,
  onSuccess,
  fields,
  payloadAdapter,
  successMessageBuilder,
  successModalBuilder,
  errorModalBuilder,
  titleReport = 'Generar reportes'
}: GenerateReportProps) => {
  const {
    generateReportModal,
    setGenerateReportModal,
    viewToast,
    setViewToast,
    pushMessage,
    setPushMessage,
    isLoading,
    setIsLoading,
    modalAlert,
    setModalAlert
  } = useGenerateReportState()

  const { userType, id } = useSelector(getUserInfo)

  // Visible fields: sólo aquellos cuyo shouldRender !== false
  const visibleFields = useMemo(
    () => fields.filter((f) => f.shouldRender !== false),
    [fields]
  )

  // Validation schema dinámico
  const validationSchema = useMemo(
    () =>
      yup.object(
        visibleFields.reduce<Record<string, yup.AnySchema>>((acc, f) => {
          acc[f.name] = f.schema
          return acc
        }, {})
      ),
    [visibleFields]
  ) as yup.ObjectSchema<Record<string, any>>

  // Default values
  const defaultValues = useMemo(
    () =>
      visibleFields.reduce<Record<string, any>>((acc, f) => {
        acc[f.name] = null
        return acc
      }, {}),
    [visibleFields]
  )

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { isValid }
  } = useForm<Record<string, any>>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema) as any,
    defaultValues
  })

  // Valores actuales para validación externa
  const allValues = watch()

  // Validación externa genérica
  const externalValid = validate ? validate(allValues, { userType }) : true
  const finalValid = isValid && externalValid

  // Sincronizador genérico de externalValue (si un campo necesita setearse desde fuera)
  useEffect(() => {
    visibleFields.forEach((f) => {
      const extVal = f.componentProps?.externalValue
      if (extVal !== undefined) {
        const current = getValues(f.name)
        if (current !== extVal) {
          setValue(f.name, extVal, { shouldValidate: true })
        }
      }
    })
  }, [visibleFields, getValues, setValue])

  // Submit genérico
  const submit = async (data: Record<string, any>) => {
    setGenerateReportModal(false)
    setIsLoading(true)
    // Preparar payload fuera de try para usarlo en catch
    const payload: GenerateReportPayload = payloadAdapter
      ? payloadAdapter(data, { userId: id, userType })
      : {
          userId: id,
          participantId: data.participant?.id ?? null,
          startDate: data.startDate ?? undefined,
          endDate: data.endDate ?? undefined,
          statusId: data.statusId ?? null,
          ...data
        }
    try {
      const genResult = await onGenerate(payload)

      let successMsg: string | undefined
      if (successModalBuilder) {
        const cfg = successModalBuilder(payload, { userType })
        if (cfg) {
          setModalAlert({
            title: cfg.title,
            message: cfg.description,
            variant: 'success',
            textSuccess: cfg.primaryText || 'Volver',
            textCancel: cfg.secondaryText,
            open: true,
            onClick: () => {
              cfg?.onPrimary?.()
              setModalAlert(null)
            },
            handleCancel: cfg.secondaryText
              ? () => {
                  cfg?.onSecondary?.()
                  setModalAlert(null)
                }
              : undefined
          } as any)
        } else {
          successMsg =
            successMessageBuilder?.(payload, { userType }) ||
            messages.success ||
            DEFAULT_MESSAGES.success
        }
      } else {
        if (typeof genResult === 'string') {
          successMsg = genResult
        } else if (
          genResult &&
          typeof genResult === 'object' &&
          (genResult as any).message
        ) {
          successMsg = (genResult as any).message
        }
        if (!successMsg) {
          successMsg =
            successMessageBuilder?.(payload, { userType }) ||
            messages.success ||
            DEFAULT_MESSAGES.success
        }
      }
      if (successMsg) {
        setPushMessage({
          message: successMsg,
          variant: 'success'
        })
        // setViewToast(true)
      }
      onSuccess?.()
    } catch (err) {
      if (errorModalBuilder) {
        const cfg = errorModalBuilder(err, payload, { userType })
        console.log('Error modal config:', cfg)
        if (cfg) {
          setModalAlert({
            title: cfg.title,
            message: cfg.description,
            variant: 'error',
            textSuccess: cfg.primaryText || 'Volver',
            textCancel: cfg.secondaryText,
            open: true,
            onClick: () => {
              cfg?.onPrimary?.()
              setModalAlert(null)
            },
            handleCancel: cfg.secondaryText
              ? () => {
                  cfg?.onSecondary?.()
                  setModalAlert(null)
                }
              : undefined
          } as any)
        } else {
          setModalAlert({
            title: 'Error',
            message: messages.notFound || DEFAULT_MESSAGES.notFound,
            variant: 'error',
            textSuccess: 'Volver',
            open: true,
            onClick: () => setModalAlert(null) // <-- Asegura el botón "Volver"
          })
        }
      } else {
        setModalAlert({
          title: 'Error de búsqueda de archivos',
          message: messages.notFound || DEFAULT_MESSAGES.notFound,
          variant: 'error',
          textSuccess: 'Volver',
          open: true,
          onClick: () => setModalAlert(null) // <-- Asegura el botón "Volver"
        })
      }
    } finally {
      setIsLoading(false)
    }
  }

  // Render genérico por tipo (sin lógica condicional por nombre / dataSource)
  const fieldRenderers: Record<
    ReportFieldType,
    (cfg: ReportFormFieldConfig) => JSX.Element | null
  > = {
    date: (cfg) => (
      <Controller
        key={cfg.name}
        name={cfg.name}
        control={control}
        render={({ field }) => (
          <DataPicker
            // Permite digitar formato AAAA/MM/DD (YYYY/MM/DD)
            // Si el consumidor ya pasa format / inputFormat en componentProps no se sobreescribe
            label={cfg.label}
            value={field.value ? dayjs(field.value) : null}
            onChange={(newValue: Dayjs) =>
              field.onChange(newValue ? newValue.toDate() : null)
            }
            returnAs="dayjs"
            height={40}
            width="100%"
            minDate={cfg.minDate ? dayjs(cfg.minDate) : undefined}
            maxDate={cfg.maxDate ? dayjs(cfg.maxDate) : undefined}
            {...(!cfg.componentProps?.format && { format: 'YYYY/MM/DD' })}
            {...(!cfg.componentProps?.inputFormat && {
              inputFormat: 'YYYY/MM/DD'
            })}
            {...(cfg.componentProps || {})}
            showClearIndicator={true}
          />
        )}
      />
    ),
    autocomplete: (cfg) => (
      <Controller
        key={cfg.name}
        name={cfg.name}
        control={control}
        render={({ field }) => {
          const {
            fetchOptions,
            minSearchLength = 3,
            debounceTime = 300,
            onSelected,
            itemsPerPage = 10,
            label = cfg.label,
            ...rest
          } = cfg.componentProps || {}
          return (
            <AutoCompleteInput
              label={label}
              fetchOptions={fetchOptions}
              onChange={(val: { id: number; label: string } | null) => {
                field.onChange(val)
                onSelected?.(val)
              }}
              value={field.value}
              itemsPerPage={itemsPerPage}
              minSearchLength={minSearchLength}
              debounceTime={debounceTime}
              key={`${cfg.name}-${field.value?.id ?? 'none'}`}
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
              {...rest}
            />
          )
        }}
      />
    ),
    text: (cfg) => (
      <Controller
        key={cfg.name}
        name={cfg.name}
        control={control}
        render={({ field }) => {
          const { label = cfg.label, ...rest } = cfg.componentProps || {}
          return (
            <DefaultComponents.TextField
              label={label}
              value={field.value ?? ''}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                field.onChange(e.target.value)
              }
              fullWidth
              size="small"
              {...rest}
            />
          )
        }}
      />
    ),
    select: (cfg) => (
      <Controller
        key={cfg.name}
        name={cfg.name}
        control={control}
        render={({ field }) => {
          const {
            options = [],
            placeholder = cfg.label,
            onChangeHook,
            ...rest
          } = cfg.componentProps || {}

          // Normaliza cualquier forma de respuesta (evento, objeto opción, valor primitivo)
          // y asegura que onChangeHook reciba un objeto con target.value
          const handle = (eventOrValue: any) => {
            let newValue: any
            if (eventOrValue && typeof eventOrValue === 'object') {
              if ('target' in eventOrValue && eventOrValue.target) {
                newValue = eventOrValue.target.value
              } else if ('value' in eventOrValue) {
                newValue = eventOrValue.value
              } else if ('id' in eventOrValue) {
                newValue = eventOrValue
              } else {
                newValue = eventOrValue
              }
            } else {
              newValue = eventOrValue
            }
            field.onChange(newValue)
            onChangeHook?.({ target: { value: newValue } })
          }
          const findValue = options.find(
            (option: any) => option?.value === field?.value
          )
          return (
            <DefaultComponents.Box width="100%">
              <SelectNuam
                label={cfg.label}
                key={findValue}
                options={options}
                onChange={handle}
                placeholder={placeholder}
                value={findValue}
                {...rest}
                formControlProps={{
                  fullWidth: true
                }}
                size="small"
                labelKey="name"
                valueKey="name"
              />
            </DefaultComponents.Box>
          )
        }}
      />
    )
  }

  const orderedFieldNodes = useMemo(
    () =>
      visibleFields.map((f) => (
        <div key={f.name} className="min-w-0">
          {fieldRenderers[f.type](f)}
        </div>
      )),
    [visibleFields]
  )

  return (
    <>
      <Typography variant="h6" className="font-medium text-[#3D3D3D] mt-3">
        {titleReport}
      </Typography>
      <form
        onSubmit={handleSubmit(submit)}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full pt-2 pb-2 gap-4"
      >
        {orderedFieldNodes}
        <div className="flex items-end">
          <Button
            size="large"
            type="submit"
            disabled={!finalValid || isLoading}
            className="text-[15px] px-4 font-medium w-full h-[40px] min-h-[40px]"
          >
            Generar
          </Button>
        </div>
      </form>
      {generateReportModal && (
        <ModalAlert
          title={messages.confirmTitle || DEFAULT_MESSAGES.confirmTitle}
          variant="warning"
          textSuccess="Generar archivo"
          textCancel="Cancelar"
          handleCancel={() => setGenerateReportModal(false)}
          onClick={() => handleSubmit(submit)()}
          orientation="horizontal"
          disabled={!finalValid || isLoading}
          customStyles={{}}
          className="w-[427px] gap-4 py-12 px-6"
        >
          <p className="text-[#3D3D3D] text-center">
            {messages.confirmQuestion || DEFAULT_MESSAGES.confirmQuestion}
          </p>
        </ModalAlert>
      )}
      {viewToast && (
        <Toast
          text={pushMessage.message}
          variant={pushMessage.variant}
          width="424px"
          onClose={() => setViewToast(!viewToast)}
        />
      )}
      {modalAlert && (
        <ModalAlert
          title={modalAlert.title}
          textSuccess={modalAlert.textSuccess}
          message={modalAlert.message}
          variant={modalAlert.variant}
          onClick={modalAlert.onClick} //modalAlert.onClose
        />
      )}
      {isLoading && <Spinner />}
    </>
  )
}

```

## src/features/reports/components/GenerateReportWithDaily.tsx

```tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Spinner, ModalAlert } from 'remoteUtilities/components-mf-utilities'

import { type ModalAlertState } from '../types'
import { BaseReportTab, BaseReportTabProps } from './BaseReportTab'
import DailyFileReport, { DailyFileReportProps } from './DailyFileReport'

// Columnas exclusivas de este tab (versión completa para usuario interno)

interface GenerateReportWithDailyProps {
  baseReport: BaseReportTabProps
  dailyReport: DailyFileReportProps
  modalAlertState: ModalAlertState
  isGenerating: boolean
}
export const GenerateReportWithDaily = ({
  baseReport,
  dailyReport,
  modalAlertState,
  isGenerating
}: GenerateReportWithDailyProps) => {
  return (
    <>
      <DailyFileReport {...dailyReport} />
      <BaseReportTab {...baseReport} />
      {isGenerating && <Spinner />}

      {modalAlertState?.open && <ModalAlert {...modalAlertState} />}
    </>
  )
}

```

## src/features/reports/components/SpecialOpsFileTab.tsx

```tsx
import * as yup from 'yup'

import { REPORT_ENDPOINTS } from '../constants/reportEndpoints'
import { generateReportRequest } from '../services/reportGenerate'
import { BaseReportTab } from './BaseReportTab'
import { ReportFormFieldConfig } from './GenerateReport'

const twoMonthsBack = (() => {
  const d = new Date()
  d.setMonth(d.getMonth() - 2)
  d.setHours(0, 0, 0, 0)
  return d
})()

const fields: ReportFormFieldConfig[] = [
  {
    name: 'startDate',
    label: 'Fecha Inicio',
    type: 'date',
    schema: yup
      .date()
      .required()
      .min(twoMonthsBack, 'Máx 2 meses')
      .test('lte-end', 'Inicio > Fin', function (v) {
        const end = this.parent.endDate
        if (!v || !end) return true
        return v <= end
      })
  },
  {
    name: 'endDate',
    label: 'Fecha Final',
    type: 'date',
    schema: yup
      .date()
      .required()
      .min(twoMonthsBack, 'Máx 2 meses')
      .test('gte-start', 'Fin < Inicio', function (v) {
        const start = this.parent.startDate
        if (!v || !start) return true
        return v >= start
      })
  },
  {
    name: 'participant',
    label: 'Participante',
    type: 'autocomplete',
    schema: yup
      .object({
        id: yup.number().required(),
        label: yup.string().required()
      })
      .nullable()
      .required('Participante requerido'),
    shouldRender: true
  },
  {
    name: 'statusId',
    label: 'Estado',
    type: 'select',
    schema: yup
      .number()
      .typeError('Estado inválido')
      .required('Estado requerido')
  }
]

export const SpecialOpsFileTab = () => (
  <BaseReportTab
    formFields={fields}
    generateProps={{
      showParticipant: true,
      onGenerate: async (payload) =>
        generateReportRequest(REPORT_ENDPOINTS.SPECIAL_OPS_FILE, payload),
      validate: ({ startDate, endDate, participant, statusId }) =>
        !!startDate && !!endDate && !!participant && !!statusId,
      messages: {
        success: 'Special Ops File en proceso'
      }
    }}
    tableProps={{ axiosInstanceKey: 'httpOperations' }}
  />
)

```

## src/features/reports/components/SpecialOpsFixedTab.tsx

```tsx
import * as yup from 'yup'

import { REPORT_ENDPOINTS } from '../constants/reportEndpoints'
import { generateReportRequest } from '../services/reportGenerate'
import { BaseReportTab } from './BaseReportTab'
import { ReportFormFieldConfig } from './GenerateReport'

const twoMonthsBack = (() => {
  const d = new Date()
  d.setMonth(d.getMonth() - 2)
  d.setHours(0, 0, 0, 0)
  return d
})()

const fields: ReportFormFieldConfig[] = [
  {
    name: 'startDate',
    label: 'Fecha Inicio',
    type: 'date',
    schema: yup
      .date()
      .required()
      .min(twoMonthsBack, 'Máx 2 meses')
      .test('lte-end', 'Inicio > Fin', function (v) {
        const end = this.parent.endDate
        if (!v || !end) return true
        return v <= end
      })
  },
  {
    name: 'endDate',
    label: 'Fecha Final',
    type: 'date',
    schema: yup
      .date()
      .required()
      .min(twoMonthsBack, 'Máx 2 meses')
      .test('gte-start', 'Fin < Inicio', function (v) {
        const start = this.parent.startDate
        if (!v || !start) return true
        return v >= start
      })
  },
  {
    name: 'statusId',
    label: 'Estado',
    type: 'select',
    schema: yup
      .number()
      .typeError('Estado inválido')
      .required('Estado requerido')
  }
]

export const SpecialOpsFixedTab = () => (
  <BaseReportTab
    formFields={fields}
    generateProps={{
      showParticipant: false,
      onGenerate: async (payload) =>
        generateReportRequest(REPORT_ENDPOINTS.SPECIAL_OPS_FIXED, payload),
      validate: ({ startDate, endDate, statusId }) =>
        !!startDate && !!endDate && !!statusId,
      messages: {
        success: 'Special Ops Fixed en proceso'
      }
    }}
    tableProps={{ axiosInstanceKey: 'httpOperations' }}
  />
)

```

## src/features/reports/constants/CashMassiveReceiptColumns.tsx

```tsx
import { XDataGridLib } from '@nuam/common-fe-lib-components'
import { TFunction } from 'i18next'

import { formatToUserLocalTime } from 'remoteUtilities/formatToUserLocalTime'
import { formattedDate } from 'remoteUtilities/formattedDate'
import { StatusChip } from 'remoteUtilities/statusChip'

import { OPERATION_REPORTS_ACTIONS } from '@/shared/constants/actionCodes'

import DownloadFileReport from '../components/DownloadFileReport'
import { IInfoReport } from '../types/reports'

export const getCashMassiveReceiptRepoColumns = ({
  hasAction,
  t
}: {
  hasAction: (actionCode: string) => boolean
  t: TFunction<'report', string>
}) => [
  {
    field: 'generatedAt',
    // headerName: 'Fecha y hora de generación',
    headerName: t('dateTime'),
    minWidth: 180,
    flex: 2,
    renderCell: ({ row }: XDataGridLib.GridRenderCellParams<IInfoReport>) => {
      const dateTime = formatToUserLocalTime(row?.generatedAt)
      return (
        <div className="flex items-center w-full">
          <span>{dateTime}</span>
        </div>
      )
    }
  },
  {
    field: 'reportDate',
    headerName: t('registerDate'),
    minWidth: 180,
    flex: 2,
    renderCell: ({ row }: XDataGridLib.GridRenderCellParams<IInfoReport>) => {
      const dateTime = formattedDate({ date: row?.reportDate })
      return (
        <div className="flex items-center w-full">
          <span>{dateTime}</span>
        </div>
      )
    }
  },
  {
    field: 'generatedBy',
    // headerName: 'Usuario que genera',
    headerName: t('generateBy'),
    minWidth: 220,
    flex: 3,
    renderCell: ({ row }: XDataGridLib.GridRenderCellParams<IInfoReport>) => (
      <div className="flex items-center w-full">
        <span>{row?.generatedBy}</span>
      </div>
    )
  },
  {
    field: 'generationStatusDescription',
    // headerName: 'Estado del reporte',
    headerName: t('statusReport'),
    minWidth: 180,
    flex: 2,
    renderCell: ({ row }: XDataGridLib.GridRenderCellParams<IInfoReport>) => (
      <StatusChip
        value={row?.generationStatus.description}
        label={row?.generationStatus.description}
      />
    )
  },
  {
    field: 'actions',
    // headerName: 'Acciones',
    headerName: t('actions'),
    width: 100, // fixed, no flex so other columns consume remaining space
    renderCell: ({ row }: XDataGridLib.GridRenderCellParams<IInfoReport>) => {
      const isEnabled = row?.generationStatus.description === 'GENERADO'
      const permissionDownload = hasAction(
        OPERATION_REPORTS_ACTIONS.FILE_DOWNLOAD
      )
      return (
        permissionDownload && (
          <DownloadFileReport isEnabled={isEnabled} fileId={row.id} />
        )
      )
    }
  }
]

```

## src/features/reports/constants/CashMassiveReceiptReport.tsx

```tsx
import { useState } from 'react'

import { useScreenActions } from 'remoteShell/mf-shell-useScreenActions'
import { ModalAlert, Spinner } from 'remoteUtilities/components-mf-utilities'

import useTranslate from '@/shared/hooks/useTranslate'

import { GenerateReportPayload } from '../components/GenerateReport'
import { GenerateReportWithDaily } from '../components/GenerateReportWithDaily'
import { FileTypeOptionsEnum } from '../enums/fileTypeOptions'
import useColumnsDailyMassiveReceipt from '../hooks/useColumnsDailyMassiveReceipt'
import useCreateReportMassive from '../hooks/useCreateReportMassive'
import useFetchParticipantReport from '../hooks/useFetchParticipantReport'
import useFieldsReportsMassiveReceipt from '../hooks/useFieldsReportsMassiveReceipt'
import usePaginateReport from '../hooks/usePaginateReport'
import { useReportDaily } from '../hooks/useReportDaily'
import type { ModalAlertState } from '../types'
import { getCashMassiveReceiptRepoColumns } from './CashMassiveReceiptColumns'

const CashMassiveReceiptReport = () => {
  const [modalAlertState, setModalAlertState] = useState<ModalAlertState>(null)

  const { fields, isInternalUser, participantSelected } =
    useFieldsReportsMassiveReceipt()

  const { endpoint, rows, setDataRemote, refresh } = usePaginateReport({
    typeReport: FileTypeOptionsEnum.PAPELETA_HISTORICO,
    selectParticipant: participantSelected
  })

  const [isGenerating, setIsGenerating] = useState(false)

  const { hasAction } = useScreenActions()

  const { t: tColumns } = useTranslate({ keyPrefix: 'report.columns' })
  const { t } = useTranslate({ keyPrefix: 'report' })
  const resolvedColumns = getCashMassiveReceiptRepoColumns({
    hasAction,
    t: tColumns
  })

  // Adaptador de payload (independiente de GenerateReport) extendido
  const payloadAdapter = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    values: Record<string, any>,
    ctx: { userId: number }
  ): GenerateReportPayload => {
    const participantName = values.participant?.label || null

    return {
      userId: ctx.userId,
      participantId: values.participant?.id ?? null,
      date: values.date,
      statusId: values.statusId ?? null,
      participantName
    }
  }

  const { handleCreateReport } = useCreateReportMassive({
    isInternalUser,
    refresh,
    setIsGenerating,
    setModalAlertState
  })

  const baseReport = {
    formFields: fields,
    columns: resolvedColumns,
    generateProps: {
      showParticipant: true,
      payloadAdapter,
      onGenerate: handleCreateReport,
      messages: {
        success: '',
        // confirmTitle: 'Confirmar generación',
        confirmTitle: t('titleConfirmHistorical'),
        // confirmQuestion: '¿Deseas generar Cash Repo File?'
        confirmQuestion: t('confirmQuestionHistorical')
      },
      // titleReport: 'Generación de archivo histórico'
      titleReport: t('historicalFileTitle')
    },
    tableProps: {
      axiosInstanceKey: 'httpOperationsReceipts',
      endpoint,
      setDataRemote,
      rows
    }
  }
  const { participantSelected: participantDaily, handleOptionChange } =
    useFetchParticipantReport({
      countryId: null
    })
  const { rows: rowsTableDaily } = useReportDaily({
    selectParticipant: participantDaily,
    typeReport: FileTypeOptionsEnum.PAPELETA_DIARIO
  })
  const { columns: columnsDaily } = useColumnsDailyMassiveReceipt()
  return (
    <>
      <GenerateReportWithDaily
        baseReport={baseReport}
        dailyReport={{
          changeParticipant: handleOptionChange,
          participantSelected: participantDaily,
          columnsTable: columnsDaily,
          isInternalUser,
          rowsTable: rowsTableDaily
        }}
        modalAlertState={modalAlertState}
        isGenerating={isGenerating}
      />
      {isGenerating && <Spinner />}

      {modalAlertState?.open && <ModalAlert {...modalAlertState} />}
    </>
  )
}

export default CashMassiveReceiptReport

```

## src/features/reports/constants/CashRepoFixedTabColumns.tsx

```tsx
import { TRenderCellParams } from '@nuam/common-fe-lib-components'

import { formatToUserLocalTime } from 'remoteUtilities/formatToUserLocalTime'
import { StatusChip } from 'remoteUtilities/statusChip'

import VectorIcon from '@/shared/assets/icons/Vector.svg'

export const getCashRepoFixedColumnsInternal = (
  onDownload: (row: any) => void
) => [
  {
    field: 'fileConsecutive',
    headerName: 'Consecutivo del archivo',
    minWidth: 220,
    flex: 3,
    valueGetter: (_params: TRenderCellParams, row: any) =>
      row?.fileConsecutive || ''
  },
  {
    field: 'generatedAt',
    headerName: 'Fecha y hora de generación',
    minWidth: 180,
    flex: 2,
    renderCell: ({ row }: any) => {
      const dateTime = formatToUserLocalTime(row?.generatedAt)
      return (
        <div className="flex items-center w-full">
          <span>{dateTime}</span>
        </div>
      )
    }
  },
  {
    field: 'participantName',
    headerName: 'Nombre del participante',
    minWidth: 230,
    flex: 3,
    renderCell: ({ row }: any) => (
      <div className="flex items-center w-full">
        <span>{row?.participantName ? row.participantName : 'TODOS'}</span>
      </div>
    )
  },
  {
    field: 'generatedBy',
    headerName: 'Usuario que generó el archivo',
    minWidth: 220,
    flex: 3,
    renderCell: ({ row }: any) => (
      <div className="flex items-center w-full">
        <span>{row?.generatedBy}</span>
      </div>
    )
  },
  {
    field: 'generationStatusDescription',
    headerName: 'Estado de generación',
    minWidth: 180,
    flex: 2,
    renderCell: ({ row }: any) => (
      <StatusChip value={row?.generationStatusDescription ?? '-'} />
    )
  },
  {
    field: 'actions',
    headerName: 'Acciones',
    width: 100, // fixed, no flex so other columns consume remaining space
    renderCell: ({ row }: any) => {
      const isEnabled = row?.generationStatusDescription === 'GENERADO'
      return (
        <button
          className="flex items-center justify-center"
          onClick={isEnabled ? () => onDownload(row) : undefined}
          title="Descargar archivo"
          disabled={!isEnabled}
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            opacity: isEnabled ? 1 : 0.5,
            cursor: isEnabled ? 'pointer' : 'not-allowed',
            display: 'flex',
            alignItems: 'center',
            height: '100%'
          }}
        >
          <img
            src={VectorIcon}
            alt="Descargar"
            style={{
              width: 20,
              height: 20,
              cursor: isEnabled ? 'pointer' : 'not-allowed',
              filter: isEnabled ? undefined : 'grayscale(100%)'
            }}
          />
        </button>
      )
    }
  }
]

export const getCashRepoFixedColumnsExternal = (
  onDownload: (row: any) => void
) => [
  {
    field: 'generatedAt',
    headerName: 'Fecha y hora de generación',
    minWidth: 180,
    flex: 2,
    renderCell: ({ row }: any) => {
      const dateTime = formatToUserLocalTime(row?.generatedAt)
      return (
        <div className="flex items-center w-full">
          <span>{dateTime}</span>
        </div>
      )
    }
  },
  {
    field: 'generatedBy',
    headerName: 'Usuario que generó el archivo',
    minWidth: 220,
    flex: 3,
    renderCell: ({ row }: any) => (
      <div className="flex items-center w-full">
        <span>{row?.generatedBy}</span>
      </div>
    )
  },
  {
    field: 'generationStatusDescription',
    headerName: 'Estado de generación',
    minWidth: 180,
    flex: 2,
    // renderCell: ({ row }: any) => (
    //   <div className="flex items-center w-full">
    //     <span>{row?.generationStatusDescription}</span>
    //   </div>
    // )
    renderCell: ({ row }: any) => {
      return <StatusChip value={row?.generationStatusDescription ?? '-'} />
    }
  },
  {
    field: 'actions',
    headerName: 'Acciones',
    width: 100, // fixed, no flex so other columns consume remaining space
    renderCell: ({ row }: any) => {
      const isEnabled = row?.generationStatusDescription === 'GENERADO'
      return (
        <button
          className="flex items-center justify-center"
          onClick={isEnabled ? () => onDownload(row) : undefined}
          title="Descargar archivo"
          disabled={!isEnabled}
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            opacity: isEnabled ? 1 : 0.5,
            cursor: isEnabled ? 'pointer' : 'not-allowed',
            display: 'flex',
            alignItems: 'center',
            height: '100%'
          }}
        >
          <img
            src={VectorIcon}
            alt="Descargar"
            style={{
              width: 20,
              height: 20,
              cursor: isEnabled ? 'pointer' : 'not-allowed',
              filter: isEnabled ? undefined : 'grayscale(100%)'
            }}
          />
        </button>
      )
    }
  }
]

```

## src/features/reports/constants/cashRepoFileColumns.tsx

```tsx
import type { XDataGridLib } from '@nuam/common-fe-lib-components'
import type { TFunction } from 'i18next'

import { formatToUserLocalTime } from 'remoteUtilities/formatToUserLocalTime'
import { formattedDate } from 'remoteUtilities/formattedDate'
import { StatusChip } from 'remoteUtilities/statusChip'

import { OPERATION_REPORTS_ACTIONS } from '@/shared/constants/actionCodes'

import DownloadFileReport from '../components/DownloadFileReport'
import { type IInfoReport } from '../types/reports'

export const getCashRepoFileColumnsInternal = ({
  hasAction,
  t
}: {
  hasAction: (actionCode: string) => boolean
  t: TFunction<'report', string>
}) => [
  {
    field: 'generatedAt',
    // headerName: 'Fecha y hora de generación',
    headerName: t('dateTime'),
    minWidth: 180,
    flex: 2,
    renderCell: ({ row }: XDataGridLib.GridRenderCellParams<IInfoReport>) => {
      const dateTime = formatToUserLocalTime(row?.generatedAt)
      return (
        <div className="flex items-center w-full">
          <span>{dateTime}</span>
        </div>
      )
    }
  },
  {
    field: 'reportDate',
    headerName: t('registerDate'),
    minWidth: 180,
    flex: 2,
    renderCell: ({ row }: XDataGridLib.GridRenderCellParams<IInfoReport>) => {
      const dateTime = formattedDate({ date: row?.reportDate })
      return (
        <div className="flex items-center w-full">
          <span>{dateTime}</span>
        </div>
      )
    }
  },
  {
    field: 'generatedBy',
    // headerName: 'Usuario que genera',
    headerName: t('generateBy'),
    minWidth: 220,
    flex: 3,
    renderCell: ({ row }: XDataGridLib.GridRenderCellParams<IInfoReport>) => (
      <div className="flex items-center w-full">
        <span>{row?.generatedBy}</span>
      </div>
    )
  },
  {
    field: 'operationStatusDescription',
    // headerName: 'Estado de la operación',
    headerName: t('status'),
    minWidth: 200,
    flex: 2,
    renderCell: ({ row }: XDataGridLib.GridRenderCellParams<IInfoReport>) => {
      const statusDescription = row?.operationStatus.description || '-'
      return <StatusChip value={statusDescription} label={statusDescription} />
    }
  },

  {
    field: 'generationStatusDescription',
    // headerName: 'Estado del reporte',
    headerName: t('statusReport'),
    minWidth: 180,
    flex: 2,
    renderCell: ({ row }: XDataGridLib.GridRenderCellParams<IInfoReport>) => (
      <StatusChip
        value={row?.generationStatus.description}
        label={row?.generationStatus.description}
      />
    )
  },
  {
    field: 'actions',
    // headerName: 'Acciones',
    headerName: t('actions'),
    width: 100, // fixed, no flex so other columns consume remaining space
    renderCell: ({ row }: XDataGridLib.GridRenderCellParams<IInfoReport>) => {
      const isEnabled = row?.generationStatus.description === 'GENERADO'
      const permissionDownload = hasAction(
        OPERATION_REPORTS_ACTIONS.FILE_DOWNLOAD
      )
      return (
        permissionDownload && (
          <DownloadFileReport isEnabled={isEnabled} fileId={row.id} />
        )
      )
    }
  }
]

export const getCashRepoFileColumnsExternal = ({
  hasAction,
  t
}: {
  hasAction: (actionCode: string) => boolean
  t: TFunction<'report', string>
}) =>
  // onDownload: (fileId: number) => void
  [
    {
      field: 'generatedAt',
      // headerName: 'Fecha y hora de generación',
      headerName: t('dateTime'),
      minWidth: 300,
      flex: 4,
      renderCell: ({ row }: XDataGridLib.GridRenderCellParams<IInfoReport>) => {
        const dateTime = formatToUserLocalTime(row?.generatedAt)
        return (
          <div className="flex items-center w-full">
            <span>{dateTime}</span>
          </div>
        )
      }
    },
    {
      field: 'reportDate',
      headerName: 'Fecha de registro',
      minWidth: 180,
      flex: 2,
      renderCell: ({ row }: XDataGridLib.GridRenderCellParams<IInfoReport>) => {
        const dateTime = formattedDate({ date: row?.reportDate })
        return (
          <div className="flex items-center w-full">
            <span>{dateTime}</span>
          </div>
        )
      }
    },
    {
      field: 'generatedBy',
      // headerName: 'Usuario que genera',
      headerName: t('generateBy'),
      minWidth: 340,
      flex: 5,
      renderCell: ({ row }: XDataGridLib.GridRenderCellParams<IInfoReport>) => (
        <div className="flex items-center w-full">
          <span>{row?.generatedBy}</span>
        </div>
      )
    },
    {
      field: 'generationStatusDescription',
      // headerName: 'Estado de generación del archivo',
      headerName: t('statusFile'),
      minWidth: 300,
      flex: 4,
      renderCell: ({ row }: XDataGridLib.GridRenderCellParams<IInfoReport>) => (
        <div className="flex items-center w-full">
          <span>{row?.generationStatus.description}</span>
        </div>
      )
    },
    {
      field: 'actions',
      // headerName: 'Acciones',
      headerName: t('actions'),
      width: 100,
      renderCell: ({ row }: XDataGridLib.GridRenderCellParams<IInfoReport>) => {
        const isEnabled = row?.generationStatus.description === 'GENERADO'
        const permissionDownload = hasAction(
          OPERATION_REPORTS_ACTIONS.FILE_DOWNLOAD
        )

        return (
          permissionDownload && (
            <DownloadFileReport isEnabled={isEnabled} fileId={row.id} />
          )
        )
      }
    }
  ]

```

## src/features/reports/constants/endpoints.ts

```typescript
export const API_ROUTES_REPORTS = {
  PARTICIPANT_SEARCH: '/participant/search',
  PARTICIPANTS: '/participants',

  CREATE_REPORT: (userId: number | undefined) =>
    `/settlement-report/generate/report-liquida/user/${userId}`,
  CREATE_REPORT_MASSIVE: (userId: number | undefined) =>
    `/settlement-report/generate/report-papeleta/user/${userId}`,

  SEARCH_PARTICIPANT: (query: string | undefined, page: number, size: number) =>
    `/settlement-report-operation/generate/report/settlement/rv/${query}/${page}/${size}`,

  REPORT_HISTORY: (userId: number) =>
    `/settlement-report/report/history/user/${userId}/dynamic`,
  VALIDATE_CORRECTED_REPORT: '/corrected-reports-operations/validate',
  GENERATE_CORRECTED_REPORT: '/corrected-reports-operations/generate',
  FILE_DOWNLOAD: (id: number) => `/file-download/download/${id}`,
  PARTICIPANT_SEARCH_CASH_FILE:
    '/settlement-report-operation/all-settlement-participants'
}

```

## src/features/reports/constants/index.ts

```typescript
import { StatusOptions } from '../enums/statusOptions'

export const STATUS_OPTIONS = [
  { id: 1, name: StatusOptions.REGISTRADAS, value: 1 },
  { id: 2, name: StatusOptions.ASIGNADAS, value: 2 }
]
export const STATUS_OPTIONS_OBJECT = {
  1: { id: 1, name: StatusOptions.REGISTRADAS, value: 1 },
  2: { id: 2, name: StatusOptions.ASIGNADAS, value: 2 }
}

export const REPORT_PARAMS = {
  PARTICIPANTE: 'PARTICIPANTE'
}

export const STATUS_OPTIONS_OP_CORREGIDAS = [
  { id: 9, name: 'CORRECCION ACEPTADA', value: 9 },
  { id: 10, name: 'CORRECCION RECHAZADA', value: 10 }
]

```

## src/features/reports/constants/reportEndpoints.ts

```typescript
export const REPORT_ENDPOINTS = {
  CASH_REPO_FILE: '/api/reports/cash-repo/file',
  CASH_REPO_FIXED: '/api/reports/cash-repo/fixed',
  SPECIAL_OPS_FILE: '/api/reports/special-ops/file',
  SPECIAL_OPS_FIXED: '/api/reports/special-ops/fixed'
} as const
export type ReportEndpoint =
  (typeof REPORT_ENDPOINTS)[keyof typeof REPORT_ENDPOINTS]

```

## src/features/reports/constants/reportFormConfig.ts

```typescript
export type ReportFieldType = 'date' | 'autocomplete' | 'select'

export interface ReportFormFieldConfig {
  name: string
  label: string
  type: ReportFieldType
  required?: boolean
  // Condición para mostrar el campo según contexto dinámico
  shouldRender?: (ctx: {
    showParticipant: boolean
    isInternalUser: boolean
  }) => boolean
}

export const REPORT_FORM_FIELDS: ReportFormFieldConfig[] = [
  {
    name: 'startDate',
    label: 'Fecha Inicio',
    type: 'date',
    required: true
  },
  {
    name: 'endDate',
    label: 'Fecha Final',
    type: 'date',
    required: true
  },
  {
    name: 'participant',
    label: 'Participante',
    type: 'autocomplete',
    shouldRender: ({ showParticipant, isInternalUser }) =>
      showParticipant && isInternalUser
  },
  {
    name: 'statusId',
    label: 'Estado',
    type: 'select'
  }
]

```

## src/features/reports/constants/reportTabs.ts

```typescript
export const REPORT_TAB_LABELS = {
  ARCHIVO_LIQ_CONTADO_REPO: 'ARCHIVO LIQUIDA CONTADO Y REPO',
  OP_COMPROBANTES_MASIVOS: 'Comprobantes Masivos',
  OP_CORREGIDAS_CONTADO_REPO: 'Operaciones Corregidas Contado y Repo',
  ARCHIVO_LIQ_OP_ESPECIALES: 'Archivo Liquida Operaciones Especiales',
  OP_CORREGIDAS_OP_ESPECIALES: 'Operaciones Corregidas Operaciones Especiales'
} as const

export type ReportTabLabel =
  (typeof REPORT_TAB_LABELS)[keyof typeof REPORT_TAB_LABELS]

```

## src/features/reports/constants/tabConfigs.ts

```typescript
export const REPORT_TYPE_IDS = {
  CASH_REPO_FILE: 160,
  CASH_REPO_FIXED: 163
} as const
// Agregar más tipos según se requiera.

```

## src/features/reports/constants/tabLabels.ts

```typescript
export const REPORT_TAB_LABELS = {
  ARCHIVO_LIQ_CONTADO_REPO: 'ARCHIVO LIQUIDA CONTADO Y REPO',
  OP_CORREGIDAS_CONTADO_REPO: 'Operaciones Corregidas Contado y Repo',
  ARCHIVO_LIQ_OP_ESPECIALES: 'Archivo Liquida Operaciones Especiales',
  OP_CORREGIDAS_OP_ESPECIALES: 'Operaciones Corregidas Operaciones Especiales'
} as const

export type ReportTabLabel =
  (typeof REPORT_TAB_LABELS)[keyof typeof REPORT_TAB_LABELS]

```

## src/features/reports/constants/tabsComponentsList.ts

```typescript
import { CashRepoFileTab } from '../components/CashRepoFileTab'
import { CashRepoFixedTab } from '../components/CashRepoFixedTab'
import { SpecialOpsFileTab } from '../components/SpecialOpsFileTab'
import { SpecialOpsFixedTab } from '../components/SpecialOpsFixedTab'
import { REPORT_TAB_LABELS } from '../constants/reportTabs'
import CashMassiveReceiptReport from './CashMassiveReceiptReport'

// Config declarativa y escalable
export const TAB_COMPONENTS = [
  {
    label: REPORT_TAB_LABELS.ARCHIVO_LIQ_CONTADO_REPO,
    Component: CashRepoFileTab,
    enabled: true
  },
  {
    label: REPORT_TAB_LABELS.OP_COMPROBANTES_MASIVOS,
    Component: CashMassiveReceiptReport,
    enabled: true
  },
  {
    label: REPORT_TAB_LABELS.OP_CORREGIDAS_CONTADO_REPO,
    Component: CashRepoFixedTab,
    enabled: false
  },
  {
    label: REPORT_TAB_LABELS.ARCHIVO_LIQ_OP_ESPECIALES,
    Component: SpecialOpsFileTab,
    enabled: true
  },
  {
    label: REPORT_TAB_LABELS.OP_CORREGIDAS_OP_ESPECIALES,
    Component: SpecialOpsFixedTab,
    enabled: true
  }
]
// Puedes poner enabled: false en cualquiera para ocultarla.

```

## src/features/reports/enums/fileTypeOptions.ts

```typescript
export enum FileTypeOptionsEnum {
  HISTORICO = 'LIQUIDA_HISTORICO',
  DIARIO = 'LIQUIDA_DIARIO',
  PAPELETA_DIARIO = 'PAPELETA_DIARIO',
  PAPELETA_HISTORICO = 'PAPELETA_HISTORICO',
  CORRECCIONES = 'CORRECCIONES'
}

```

## src/features/reports/enums/statusOptions.ts

```typescript
export enum StatusOptions {
  REGISTRADAS = 'REGISTRADAS',
  ASIGNADAS = 'ASIGNADAS'
}

```

## src/features/reports/hooks/useColumnsDailyFileRepo.tsx

```tsx
import { ReactNode } from 'react'

import { useScreenActions } from 'remoteShell/mf-shell-useScreenActions'
import { formattedDate } from 'remoteUtilities/formattedDate'
import { StatusChip } from 'remoteUtilities/statusChip'

import { OPERATION_REPORTS_ACTIONS } from '@/shared/constants/actionCodes'
import useTranslate from '@/shared/hooks/useTranslate'

import DownloadFileReport from '../components/DownloadFileReport'
import { IInfoReport } from '../types/reports'

const useColumnsDailyFileRepo = () => {
  const { t: tColumns } = useTranslate({ keyPrefix: 'report.columns' })
  const { hasAction } = useScreenActions()
  const permissionDownload = hasAction(OPERATION_REPORTS_ACTIONS.FILE_DOWNLOAD)
  const columns: {
    field: string
    headerName: string
    renderCell: (row: IInfoReport) => ReactNode
    minWidth?: number
    flex?: number
  }[] = [
    {
      field: 'generatedAt',
      // headerName: 'Fecha y hora generacion',
      headerName: tColumns('dateTime'),
      renderCell: (row: IInfoReport) => {
        const format = formattedDate({
          date: row.generatedAt,
          format: 'DD/MM/YYYY - HH:mm'
        })
        return format
      }
    },
    {
      field: 'operationStatusDescription',
      // headerName: 'Estado de la operación',
      headerName: tColumns('status'),
      minWidth: 200,
      flex: 2,
      renderCell: (row: IInfoReport) => {
        const statusDescription = row?.operationStatus.description || ''
        return (
          <StatusChip value={statusDescription} label={statusDescription} />
        )
      }
    },
    {
      field: 'estadoDelReporte',
      // headerName: 'Estado del reporte',
      headerName: tColumns('statusReport'),
      renderCell: (row: IInfoReport) => {
        const status = row.generationStatus
        return (
          <StatusChip value={status.description} label={status.description} />
        )
      }
    },
    {
      field: 'acciones',
      // headerName: 'Acciones',
      headerName: tColumns('actions'),
      renderCell: (row: IInfoReport) => {
        const isEnabled = row.generationStatus.description === 'GENERADO'
        return (
          permissionDownload && (
            <DownloadFileReport isEnabled={isEnabled} fileId={row.id} />
          )
        )
      }
    }
  ]
  return { columns }
}

export default useColumnsDailyFileRepo

```

## src/features/reports/hooks/useColumnsDailyMassiveReceipt.tsx

```tsx
import { ReactNode } from 'react'

import { useScreenActions } from 'remoteShell/mf-shell-useScreenActions'
import { formattedDate } from 'remoteUtilities/formattedDate'
import { StatusChip } from 'remoteUtilities/statusChip'

import { OPERATION_REPORTS_ACTIONS } from '@/shared/constants/actionCodes'
import useTranslate from '@/shared/hooks/useTranslate'

import DownloadFileReport from '../components/DownloadFileReport'
import type { IInfoReport } from '../types/reports'

const useColumnsDailyMassiveReceipt = () => {
  const { t: tColumns } = useTranslate({ keyPrefix: 'report.columns' })
  const { hasAction } = useScreenActions()
  const permissionDownload = hasAction(OPERATION_REPORTS_ACTIONS.FILE_DOWNLOAD)
  const columns: {
    field: string
    headerName: string
    renderCell: (row: IInfoReport) => ReactNode
    minWidth?: number
    flex?: number
  }[] = [
    {
      field: 'generatedAt',
      // headerName: 'Fecha y hora generacion',
      headerName: tColumns('dateTime'),
      renderCell: (row: IInfoReport) => {
        const format = formattedDate({
          date: row.generatedAt,
          format: 'DD/MM/YYYY - HH:mm'
        })
        return format
      }
    },
    {
      field: 'estadoDelReporte',
      // headerName: 'Estado del reporte',
      headerName: tColumns('statusReport'),
      renderCell: (row: IInfoReport) => {
        const status = row.generationStatus
        return (
          <StatusChip value={status.description} label={status.description} />
        )
      }
    },
    {
      field: 'acciones',
      // headerName: 'Acciones',
      headerName: tColumns('actions'),
      renderCell: (row: IInfoReport) => {
        const isEnabled = row.generationStatus.description === 'GENERADO'
        return (
          permissionDownload && (
            <DownloadFileReport isEnabled={isEnabled} fileId={row.id} />
          )
        )
      }
    }
  ]
  return { columns }
}

export default useColumnsDailyMassiveReceipt

```

## src/features/reports/hooks/useCreateReport.tsx

```tsx
import useGenerateLogs from '../../../shared/hooks/useGenerateLogs'
import { GenerateReportPayload } from '../components/GenerateReport'
import { STATUS_OPTIONS_OBJECT } from '../constants'
import { createReport } from '../services/report'
import { ModalAlertState } from '../types'

const useCreateReport = ({
  setIsGenerating,
  isInternalUser,
  refresh,
  setModalAlertState
}: {
  setIsGenerating: (value: boolean) => void
  isInternalUser: boolean
  refresh: () => void
  setModalAlertState: (state: ModalAlertState | null) => void
}) => {
  const { generateLogs } = useGenerateLogs()
  const setModalError = (info: Partial<ModalAlertState>) => {
    setModalAlertState({
      ...info,
      title: info?.title || 'Ocurrió un error inesperado',
      message:
        info?.message ||
        'Vuelve a intentarlo, si el error persiste comunícate a xxxxx@nuamx.com o 55555555',
      onClick: () => setModalAlertState(null),
      variant: 'error',
      textSuccess: 'Volver',
      className: 'w-[427px] gap-4 py-12 px-6',
      open: true
    })
  }

  const handleCreateReport = async (payload: GenerateReportPayload) => {
    if (!payload.date || !payload.statusId) return {}
    setIsGenerating(true)
    try {
      const statusLabel =
        STATUS_OPTIONS_OBJECT[
          payload.statusId as keyof typeof STATUS_OPTIONS_OBJECT
        ]?.name
      const res = await createReport({
        userId: payload.userId,
        startDate: payload.date,
        status: statusLabel,
        participantId: isInternalUser ? payload?.participantId : undefined
      })
      const status = res?.operationStatus.id ? 200 : undefined // fallback si solo devuelve data
      if (status === 200) {
        const encabezadoInterno = `Se ha generado exitosamente el reporte liquida para el participante ${res.participant?.code} - ${res.participant?.shortName || 'N/D'}, una vez se genere, podrá descargarlo en la tabla de Archivos generados`
        const encabezadoExterno =
          'Se ha generado exitosamente el reporte liquida, una vez se genere, podrá descargarlo en la tabla de Archivos generados'
        const textModalAlert = isInternalUser
          ? encabezadoInterno
          : encabezadoExterno
        setModalAlertState({
          open: true,
          title: 'Se ha generado un nuevo reporte',
          variant: 'warning',
          textSuccess: 'Volver',
          onClick: () => setModalAlertState(null),
          className: 'w-[427px] gap-4 py-12 px-6',
          children: (
            <p className="text-[#3D3D3D] text-center">{textModalAlert}</p>
          )
        })
        refresh()
        generateLogs({
          actionType: 'Generación de reporte archivo liquida',
          actionDestination: 'Generación del reporte exitosa',
          statusID: '200'
        })
      } else {
        setModalError({
          message:
            'No se encontró ningún registro seleccionado, prueba cambiando los criterios de búsqueda. '
        })
        generateLogs({
          actionType: 'Generación de reporte archivo liquida',
          actionDestination: 'Generación del reporte fallida',
          statusID: status ?? ''
        })
      }
    } catch (e: unknown) {
      const codeError =
        e && typeof e === 'object' && 'response' in e
          ? (e as { response?: { data?: { errorCode?: string } } }).response
              ?.data?.errorCode
          : undefined

      generateLogs({
        actionType: 'Generación de reporte archivo liquida',
        actionDestination: 'Generación del reporte fallida',
        statusID: '500'
      })
      console.error('Error generating Cash Repo File report:', e)
      if (codeError === 'NOT_DATA_FOUND' || codeError === 'TRADE_NOT_FOUND') {
        setModalError({
          title: 'Generación de archivo',
          message:
            'No se encontró ningún registro relacionado, prueba cambiando los criterios de búsqueda.'
        })
      } else {
        setModalError({
          message:
            'Vuelve a intentarlo, si el error persiste comunícate a xxxxx@nuamx.com o 55555555'
        })
      }
    } finally {
      setIsGenerating(false)
    }
    return {}
  }
  return { handleCreateReport }
}

export default useCreateReport

```

## src/features/reports/hooks/useCreateReportMassive.tsx

```tsx
import useGenerateLogs from '../../../shared/hooks/useGenerateLogs'
import { GenerateReportPayload } from '../components/GenerateReport'
import { createReportMassive } from '../services/report'
import { ModalAlertState } from '../types'

const useCreateReportMassive = ({
  setIsGenerating,
  isInternalUser,
  refresh,
  setModalAlertState
}: {
  setIsGenerating: (value: boolean) => void
  isInternalUser: boolean
  refresh: () => void
  setModalAlertState: (state: ModalAlertState | null) => void
}) => {
  const { generateLogs } = useGenerateLogs()
  const setModalError = (info: Partial<ModalAlertState>) => {
    setModalAlertState({
      ...info,
      title: info?.title || 'Ocurrió un error inesperado',
      message:
        info?.message ||
        'Vuelve a intentarlo, si el error persiste comunícate a xxxxx@nuamx.com o 55555555',
      onClick: () => setModalAlertState(null),
      variant: 'error',
      textSuccess: 'Volver',
      className: 'w-[427px] gap-4 py-12 px-6',
      open: true
    })
  }

  const handleCreateReport = async (payload: GenerateReportPayload) => {
    if (!payload.date) return {}
    setIsGenerating(true)
    try {
      const res = await createReportMassive({
        userId: payload.userId,
        startDate: payload.date,
        participantId: isInternalUser ? payload?.participantId : undefined
      })
      const status = res?.operationStatus.id ? 200 : undefined // fallback si solo devuelve data
      if (status === 200) {
        const encabezadoInterno = `Se ha generado exitosamente el reporte masivo para el participante ${res.participant?.code} - ${res.participant?.shortName || 'N/D'}, una vez se genere, podrá descargarlo en la tabla de Archivos generados`
        const encabezadoExterno =
          'Se ha generado exitosamente el reporte masivo, una vez se genere, podrá descargarlo en la tabla de Archivos generados'
        const textModalAlert = isInternalUser
          ? encabezadoInterno
          : encabezadoExterno
        setModalAlertState({
          open: true,
          title: 'Se ha generado un nuevo reporte',
          variant: 'warning',
          textSuccess: 'Volver',
          onClick: () => setModalAlertState(null),
          className: 'w-[427px] gap-4 py-12 px-6',
          children: (
            <p className="text-[#3D3D3D] text-center">{textModalAlert}</p>
          )
        })
        refresh()
        generateLogs({
          actionType: 'Generación de reporte archivo masiva',
          actionDestination: 'Generación del reporte exitosa',
          statusID: '200'
        })
      } else {
        setModalError({
          message:
            'No se encontró ningún registro seleccionado, prueba cambiando los criterios de búsqueda. '
        })
        generateLogs({
          actionType: 'Generación de reporte archivo masiva',
          actionDestination: 'Generación del reporte fallida',
          statusID: status ?? ''
        })
      }
    } catch (e: unknown) {
      const codeError =
        e && typeof e === 'object' && 'response' in e
          ? (e as { response?: { data?: { errorCode?: string } } }).response
              ?.data?.errorCode
          : undefined

      generateLogs({
        actionType: 'Generación de reporte archivo masiva',
        actionDestination: 'Generación del reporte fallida',
        statusID: '500'
      })
      console.error('Error generating Cash Repo File report:', e)
      if (codeError === 'NOT_DATA_FOUND' || codeError === 'TRADE_NOT_FOUND') {
        setModalError({
          title: 'Generación de archivo',
          message:
            'No se encontró ningún registro relacionado, prueba cambiando los criterios de búsqueda.'
        })
      } else {
        setModalError({
          message:
            'Vuelve a intentarlo, si el error persiste comunícate a xxxxx@nuamx.com o 55555555'
        })
      }
    } finally {
      setIsGenerating(false)
    }
    return {}
  }
  return { handleCreateReport }
}

export default useCreateReportMassive

```

## src/features/reports/hooks/useFetchParticipantReport.ts

```typescript
import { useCallback, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import isDevMode from '@/shared/utils/isDevMode'

import { getParticipantCashReport } from '../services/report'
import { type OptionType } from '../types'

const useFetchParticipantReport = ({
  countryId,
  nameQueryParam
}: {
  countryId: number | null
  nameQueryParam?: string
}) => {
  const [participantSearchQuery, setParticipantSearchQuery] =
    useState<string>('')
  const [participantSelected, setParticipantSelected] =
    useState<OptionType | null>(null)
  const [searchParams, setSearchParams] = useSearchParams()

  const fetchOptionsParticipants = useCallback(
    async (query?: string, page: number = 0, size: number = 10) => {
      try {
        const search = query ?? ''
        setParticipantSearchQuery(search)
        // const newResponse = await getParticipantCashReport(
        //   page,
        //   size,
        //   query,
        //   countryId != null ? countryId : undefined
        // )

        // console.log('newResponse en hook:', newResponse)
        // NUEVO: pasar countryId como query param opcional
        //getParticipantReport

        const response = (await getParticipantCashReport(
          page,
          size,
          query ? query : undefined
          // countryId != null ? countryId : undefined
        )) as {
          content: {
            id: number
            name: string
            code: string
            codeName: string
          }[]
          totalElements: number
        }
        return {
          data: response.content.map((item) => ({
            ...item,
            label: item.codeName
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
    [countryId] // <-- dependemos del país
  )

  const handleOptionChange = useCallback(
    (option: OptionType | null) => {
      setParticipantSelected(option)
      if (option && nameQueryParam) {
        searchParams.set(nameQueryParam, option.name.toString())
      } else if (nameQueryParam) {
        searchParams.delete(nameQueryParam)
      }
      setSearchParams(searchParams)
    },
    [searchParams, setSearchParams, nameQueryParam]
  )
  return {
    fetchOptionsParticipants,
    participantSearchQuery,
    participantSelected,
    handleOptionChange,
    setParticipantSelected
  }
}

export default useFetchParticipantReport

```

## src/features/reports/hooks/useFieldsReportsCashFile.ts

```typescript
import * as yup from 'yup'

import useTranslate from '@/shared/hooks/useTranslate'

import { ReportFormFieldConfig } from '../components/GenerateReport'
import { maxDay, monthsBack } from '../utils/rulesDateCashRepo'
import { useReport } from './useReport'

const useFieldsReportsCashFile = () => {
  // NUEVO: controla reseteo del campo participante (undefined => sin forzar, null => limpiar)
  const { t } = useTranslate({ keyPrefix: 'report.generateReport' })
  const {
    onChangeStatus,
    optionsStatus,
    currentStatus,
    fetchOptionsParticipants,
    handleOptionChange,
    isInternalUser,
    participantSelected
  } = useReport()

  const fields: ReportFormFieldConfig[] = [
    {
      name: 'date',
      // label: 'Fecha registro',
      label: t('date'),
      type: 'date',
      minDate: monthsBack,
      maxDate: maxDay,
      schema: yup
        .date()
        // .required('Requerido')
        .required(t('required'))
        // .min(monthsBack, 'Máx 12 meses atrás')
        .min(monthsBack, t('maxMonthsBack'))
        // .max(maxDay, 'No puede ser mayor al día actual')
        .max(maxDay, t('maxDateToday'))
    },
    {
      name: 'participant',
      // label: 'Participante',
      label: t('participant'),
      type: 'autocomplete',
      schema: yup
        .object({
          id: yup.number().required(),
          label: yup.string().required()
        })
        .nullable()
        // .required('Participante requerido'),
        .required(t('participantRequired')),
      shouldRender: isInternalUser,
      componentProps: {
        fetchOptions: fetchOptionsParticipants,
        minSearchLength: 3,
        debounceTime: 300,
        onSelected: handleOptionChange
        // NUEVO: externalValue para limpiar control al cambiar país
        // externalValue: participantExternalValue
      }
    },
    {
      name: 'statusId',
      // label: 'Estado',
      label: t('status'),
      type: 'select',
      schema: yup.number().required(),
      componentProps: {
        options: optionsStatus,
        onChangeHook: onChangeStatus,
        externalValue: currentStatus
      }
    }
  ]
  return {
    fields,
    isInternalUser,
    participantSelected,
    handleOptionChange
  }
}

export default useFieldsReportsCashFile

```

## src/features/reports/hooks/useFieldsReportsMassiveReceipt.ts

```typescript
import * as yup from 'yup'

import useTranslate from '@/shared/hooks/useTranslate'

import { ReportFormFieldConfig } from '../components/GenerateReport'
import {
  maxDay,
  monthsBackExternal,
  monthsBackInternal
} from '../utils/rulesDateMassiveReceiptRepo'
import { useReport } from './useReport'

const useFieldsReportsMassiveReceipt = () => {
  // NUEVO: controla reseteo del campo participante (undefined => sin forzar, null => limpiar)
  const { t } = useTranslate({ keyPrefix: 'report.generateReport' })
  const {
    fetchOptionsParticipants,
    handleOptionChange,
    isInternalUser,
    participantSelected
  } = useReport()
  const fields: ReportFormFieldConfig[] = [
    {
      name: 'date',
      // label: 'Fecha registro',
      label: t('date'),
      type: 'date',
      minDate: isInternalUser ? monthsBackInternal : monthsBackExternal,
      maxDate: maxDay,
      schema: yup
        .date()
        // .required('Requerido')
        .required(t('required'))
        // .min(monthsBack, 'Máx 12 meses atrás')
        .min(
          isInternalUser ? monthsBackInternal : monthsBackExternal,
          t('maxMonthsBack')
        )
        // .max(maxDay, 'No puede ser mayor al día actual')
        .max(maxDay, t('maxDateToday'))
    },
    {
      name: 'participant',
      // label: 'Participante',
      label: t('participant'),
      type: 'autocomplete',
      schema: yup
        .object({
          id: yup.number().required(),
          label: yup.string().required()
        })
        .nullable()
        // .required('Participante requerido'),
        .required(t('participantRequired')),
      shouldRender: isInternalUser,
      componentProps: {
        fetchOptions: fetchOptionsParticipants,
        minSearchLength: 3,
        debounceTime: 300,
        onSelected: handleOptionChange
        // NUEVO: externalValue para limpiar control al cambiar país
        // externalValue: participantExternalValue
      }
    }
  ]
  return {
    fields,
    isInternalUser,
    participantSelected
  }
}

export default useFieldsReportsMassiveReceipt

```

## src/features/reports/hooks/useGenerateReportState.ts

```typescript
import { useState } from 'react'

import { ModalAlertState, ToastMessage } from '@/features/reports/types'

export const useGenerateReportState = () => {
  const [generateReportModal, setGenerateReportModal] = useState(false)
  const [viewToast, setViewToast] = useState(false)
  const [pushMessage, setPushMessage] = useState<ToastMessage>({
    message: '',
    variant: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [modalAlert, setModalAlert] = useState<ModalAlertState>(null)

  return {
    generateReportModal,
    setGenerateReportModal,
    viewToast,
    setViewToast,
    pushMessage,
    setPushMessage,
    isLoading,
    setIsLoading,
    modalAlert,
    setModalAlert
  }
}

```

## src/features/reports/hooks/usePaginateReport.tsx

```tsx
import dayjs from 'dayjs'
import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { RootState } from 'remoteShell/mf-store'

import useIsInternalUser from '@/shared/hooks/useIsInternalUser'
import { ROUTES } from '@/shared/routes'

import { API_ROUTES_REPORTS } from '../constants/endpoints'
import { FileTypeOptionsEnum } from '../enums/fileTypeOptions'
import { type OptionType } from '../types'
import { type IInfoReport } from '../types/reports'

const usePaginateReport = ({
  typeReport,
  selectParticipant
}: {
  typeReport?: FileTypeOptionsEnum
  selectParticipant?: OptionType | null
}) => {
  const [rows, setRows] = useState<IInfoReport[]>([])
  const [refreshKey, setRefreshKey] = useState(0)
  const navigate = useNavigate()

  const infoUserNubo = useSelector(
    (state: RootState) =>
      state.auth.infoUserNubo?.[0] || state.auth.infoUserNubo || {}
  )

  const { id, participantId } = infoUserNubo || {}
  const { isInternalUser } = useIsInternalUser()
  const participantInternal = selectParticipant?.id ?? undefined
  const participantFiltered = isInternalUser
    ? participantInternal
    : participantId
  const objectParams = {
    // participantId: participantFiltered,
    typeReport: typeReport ?? FileTypeOptionsEnum.HISTORICO
  }
  const otherParams = new URLSearchParams(objectParams)
  if (participantFiltered) {
    otherParams.set('participantId', participantFiltered)
  }

  const endpoint = useMemo(() => {
    const params = new URLSearchParams(window.location.search)
    params.set('_refresh', String(refreshKey))
    return `${API_ROUTES_REPORTS.REPORT_HISTORY(id)}?${params.toString()}&${otherParams.toString()}`
  }, [id, refreshKey, typeReport, participantFiltered])

  const setDataRemote = (_page: number, dataTable: IInfoReport[]) => {
    const reportsToday = dataTable.filter((report) =>
      dayjs(report.generatedAt).isSame(dayjs(), 'day')
    )
    setRows(reportsToday)
  }
  const actionBack = () => navigate(ROUTES.HOME)
  const refresh = () => setRefreshKey((k) => k + 1)

  return {
    endpoint,
    rows,
    actionBack,
    setDataRemote,
    refresh
  }
}

export default usePaginateReport

```

## src/features/reports/hooks/useReport.tsx

```tsx
import { useEffect, useState } from 'react'

import { REPORT_PARAMS, STATUS_OPTIONS } from '@/features/reports/constants'
import { Column } from '@/features/reports/types'
import { buildColumns } from '@/features/reports/utils/columnDefinitions'

import useIsInternalUser from '@/shared/hooks/useIsInternalUser'
import isDevMode from '@/shared/utils/isDevMode'

import useFetchParticipantReport from './useFetchParticipantReport'

// Se agrega parámetro opcional para permitir inyectar isInternalUser si fuera necesario.
export const useReport = () => {
  const [columnsDate, setColumnsDate] = useState<Column[]>([])
  const [currentStatus, setCurrentStatus] = useState<number>()

  const {
    fetchOptionsParticipants,
    participantSearchQuery,
    handleOptionChange,
    participantSelected,
    setParticipantSelected
  } = useFetchParticipantReport({
    countryId: null
  })
  const { isInternalUser } = useIsInternalUser()

  const onChangeStatus = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const val = (e.target as HTMLInputElement).value
    setCurrentStatus(val ? Number(val) : undefined)
  }

  useEffect(() => {
    setColumnsDate(buildColumns())
  }, [])

  useEffect(() => {
    if (participantSelected) {
      fetchOptionsParticipants(participantSearchQuery)
    }
  }, [participantSelected, fetchOptionsParticipants, participantSearchQuery])

  const handleParticipantId = async (participantId: string) => {
    try {
      const response = await fetchOptionsParticipants()
      const participant = response.data.find(
        (item: { id: number; label: string }) =>
          item.id === Number(participantId)
      )
      if (participant) {
        setParticipantSelected(participant)
      }
    } catch (error) {
      if (isDevMode()) {
        console.error('Error fetching participant by ID:', error)
      }
    }
  }

  const initializeFiltersFromURL = async () => {
    const searchParams = new URLSearchParams(window.location.search)
    const participantId = searchParams.get(REPORT_PARAMS.PARTICIPANTE)

    const promises: Promise<void>[] = []

    if (participantId) {
      promises.push(handleParticipantId(participantId))
    }

    await Promise.all(promises)
  }

  useEffect(() => {
    initializeFiltersFromURL()
  }, [fetchOptionsParticipants])

  return {
    onChangeStatus,
    optionsStatus: STATUS_OPTIONS,
    currentStatus,
    fetchOptionsParticipants,
    handleOptionChange,
    isInternalUser,
    columnsDate,
    participantSelected
  }
}

```

## src/features/reports/hooks/useReportDaily.ts

```typescript
import { useEffect, useCallback } from 'react'

import { httpOperationsReceipts } from 'remoteShell/mf-axiosConfig'
import { useRefreshTable } from 'remoteShell/mf-shell-useRefreshTable'

import { get } from '@/shared/config/methods'

import { FileTypeOptionsEnum } from '../enums/fileTypeOptions'
import { type OptionType } from '../types'
import { type Reports } from '../types/reports'
import usePaginateReport from './usePaginateReport'

export const useReportDaily = ({
  selectParticipant,
  typeReport = FileTypeOptionsEnum.DIARIO
}: {
  selectParticipant?: OptionType | null
  typeReport?: FileTypeOptionsEnum
}) => {
  const { loadingTable } = useRefreshTable()
  const { endpoint, setDataRemote, rows } = usePaginateReport({
    typeReport,
    selectParticipant
  })
  const getReportDaily = useCallback(async () => {
    const info = (
      await get({
        axiosInstance: httpOperationsReceipts,
        urlWithParams: endpoint
      })
    ).data as Reports

    const reports = info.content

    setDataRemote(info.pageNumber, reports ?? [])
  }, [endpoint])

  useEffect(() => {
    getReportDaily()
  }, [getReportDaily, loadingTable])
  return { rows }
}

```

## src/features/reports/hooks/useReportHistoryData.ts

```typescript
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'remoteShell/mf-store'

import * as ReportService from '@/features/reports/services/report'

import isDevMode from '@/shared/utils/isDevMode'

export const useReportHistoryData = () => {
  const [reportHistory, setReportHistory] = useState<any[]>([])

  const userId = useSelector(
    (state: RootState) =>
      state.auth.infoUserNubo?.[0]?.id ?? state.auth.infoUserNubo?.id
  )

  useEffect(() => {
    const fetchReportHistory = async () => {
      if (!userId) return
      try {
        const data = await ReportService.getReportHistory(userId)
        setReportHistory(data)
      } catch (error) {
        if (isDevMode()) {
          console.error('Error fetching report history:', error)
        }
      }
    }

    fetchReportHistory()
  }, [userId])

  return { reportHistory }
}

```

## src/features/reports/pages/reports.tsx

```tsx
import { useState, useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { useScreenActions } from 'remoteShell/mf-shell-useScreenActions'
import { RootState } from 'remoteShell/mf-store'
import {
  ContentWrapper,
  CustomTabs
} from 'remoteUtilities/components-mf-utilities'

import { OPERATION_REPORTS_ACTIONS } from '@/shared/constants/actionCodes'
import useGenerateLogs from '@/shared/hooks/useGenerateLogs'
import useTranslate from '@/shared/hooks/useTranslate'
import { ROUTES } from '@/shared/routes'

import { REPORT_TAB_LABELS } from '../constants/reportTabs'
import { TAB_COMPONENTS } from '../constants/tabsComponentsList'
import { getParticipantReport } from '../services/report'

// Valida si un código existe en el objeto de acciones.
// Busca coincidencias en el "code" del módulo y en los "code" de cada acción dentro de "actions".
export const hasCodeInActionsMap = (
  actionsMap: Record<
    string,
    { code?: string; actions?: Array<{ code?: string }> }
  >,
  codeToFind: string
): boolean => {
  if (!actionsMap || typeof actionsMap !== 'object' || !codeToFind) return false

  for (const key of Object.keys(actionsMap)) {
    const entry = actionsMap[key]
    if (!entry || typeof entry !== 'object') continue

    // Coincidencia con el código del módulo
    if (entry.code === codeToFind) return true

    // Coincidencia con los códigos de acciones
    if (Array.isArray(entry.actions)) {
      for (const action of entry.actions) {
        if (action?.code === codeToFind) return true
      }
    }
  }

  return false
}

// Devuelve el nombre del país del participante cuyo id coincide con participantId
const getParticipantCountryName = (
  participantId: number,
  participants: any[] | undefined
): string | undefined => {
  if (!Array.isArray(participants)) return undefined
  const found = participants.find((p) => p?.id === participantId)
  return found?.country?.name
}

export const ReportSubmodule = () => {
  const { t } = useTranslate({ keyPrefix: 'report' })
  const navigate = useNavigate()
  const [currentTab, setCurrentTab] = useState(0)

  const { participantId, code } = useSelector(
    (state: RootState) =>
      state.auth.infoUserNubo?.[0] || state.auth.infoUserNubo
  )

  const { actions: actionsMap } = useSelector(
    (state: RootState) => state.screenActions
  )

  const { hasAction } = useScreenActions()
  const canViewTabFileLiquidates = hasAction(
    OPERATION_REPORTS_ACTIONS.FILE_LIQUIDATES
  )
  const canViewTabCorrected = hasAction(
    OPERATION_REPORTS_ACTIONS.CORRECTED_OPERATIONS
  )

  // Nuevo: lista de participantes desde servicio (ya no del store)
  const [serviceParticipants, setServiceParticipants] = useState<
    any[] | undefined
  >(undefined)

  useEffect(() => {
    let active = true
    ;(async () => {
      try {
        const list: any = await getParticipantReport(0, 10, code)
        if (active) setServiceParticipants(list.content)
      } catch (e) {
        console.error('Error fetching participants from service', e)
        if (active) setServiceParticipants(undefined)
      }
    })()
    return () => {
      active = false
    }
  }, [participantId])

  const participantCountryName = useMemo(
    () => getParticipantCountryName(participantId, serviceParticipants),
    [participantId, serviceParticipants]
  )

  const visibleTabs = useMemo(() => {
    return TAB_COMPONENTS.map((t) => {
      // Control por país
      if (t.label === REPORT_TAB_LABELS.OP_CORREGIDAS_CONTADO_REPO) {
        return { ...t, enabled: participantCountryName === 'COLOMBIA' }
      }
      return t
    }).filter((t) => {
      // Control de permisos: filtrar tabs según los permisos
      if (t.label === REPORT_TAB_LABELS.ARCHIVO_LIQ_CONTADO_REPO) {
        return canViewTabFileLiquidates
      }
      if (t.label === REPORT_TAB_LABELS.OP_CORREGIDAS_CONTADO_REPO) {
        return canViewTabCorrected && participantCountryName === 'COLOMBIA'
      }
      if (t.label === REPORT_TAB_LABELS.ARCHIVO_LIQ_OP_ESPECIALES) {
        return hasCodeInActionsMap(
          actionsMap,
          OPERATION_REPORTS_ACTIONS.FILE_LIQUIDATES_OPES
        )
      }
      if (t.label === REPORT_TAB_LABELS.OP_CORREGIDAS_OP_ESPECIALES) {
        return hasCodeInActionsMap(
          actionsMap,
          OPERATION_REPORTS_ACTIONS.CORRECTED_OPERATIONS_OPES
        )
      }
      // Otros tabs se muestran si enabled !== false
      return (t as any).enabled !== false
    })
  }, [
    participantCountryName,
    canViewTabFileLiquidates,
    canViewTabCorrected,
    actionsMap
  ])

  // Asegura que currentTab siempre sea válido si cambian los tabs activos
  useEffect(() => {
    if (currentTab >= visibleTabs.length) {
      setCurrentTab(0)
    }
  }, [currentTab, visibleTabs.length])

  const { generateLogs } = useGenerateLogs()

  const handleTabChange = (tabIdx: number) => {
    setCurrentTab(tabIdx)
    // Log dinámico por cambio de tab
    const tabLabel = visibleTabs[tabIdx]?.label ?? `#${tabIdx}`
    generateLogs({
      actionType: 'reports',
      actionDestination: `acceso tab ${tabLabel}`
    })
    navigate(`${ROUTES.OPERATIONS_MANAGEMENT}${ROUTES.REPORTS}`, {
      replace: true
    })
  }

  return (
    <ContentWrapper
      //  title="Generación de reportes"
      title={t('title')}
    >
      <CustomTabs
        tabs={visibleTabs.map((t) => ({ label: t.label }))}
        currentTab={currentTab}
        onChange={handleTabChange}
        alignTabs="left"
        variant="fullWidth"
        tabColor="#FF4201"
        tabsContent={visibleTabs.map(({ label, Component }) => (
          <Component key={label} />
        ))}
      />
    </ContentWrapper>
  )
}

```

## src/features/reports/services/report.ts

```typescript
import { AxiosResponse } from 'axios'

import {
  httpParticipants,
  httpOperationsReceipts,
  httpOperationDownloadReports,
  httpFilterParameters
} from 'remoteShell/mf-axiosConfig'

import { API_ROUTES_REPORTS } from '@/features/reports/constants/endpoints'

import { getFile } from '@/shared/config/methods'
import { BusinessType } from '@/shared/types'
import { handleRequest } from '@/shared/utils/handleRequest'
import {
  buildCustomHeaders,
  buildStandardHeaders
} from '@/shared/utils/headerServices'

import { StatusOptions } from '../enums/statusOptions'

export interface CreateReportPayload {
  participantId?: number | null
  startDate: string | Date
  status?: StatusOptions | null
  userId: number
  countryId?: number | null
}

export interface Participant {
  id: number
  code: string
  name: string
  shortName: string
}

export interface FileReportResponse {
  id: number
  fileName: string
  fileType: string
  filePath: string
  generatedAt: string
  generatedBy: string
  operationStatus: BusinessType
  generationStatus: BusinessType
  participant: Participant
  country: string | null
  type: BusinessType
  totalTrades: number
  fileConsecutive: number
  message: string
}

// Helper para formatear fechas a YYYY-MM-DD (sin cambio de día por timezone)
const formatYMD = (value: string | Date): string => {
  if (value instanceof Date) {
    const y = value.getFullYear()
    const m = String(value.getMonth() + 1).padStart(2, '0')
    const d = String(value.getDate()).padStart(2, '0')
    return `${y}-${m}-${d}`
  }
  // Si ya viene en formato correcto lo dejamos
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value
  const asDate = new Date(value)
  if (!isNaN(asDate.getTime())) return formatYMD(asDate)
  return value
}

export const getParticipantReport = async (
  page: number,
  size: number,
  participantCodeName: string | undefined,
  countryId?: number
) => {
  console.log('countryId en servicio:', countryId)
  const headers = await buildStandardHeaders()
  const params = { text: participantCodeName, page, size, countryId }

  return handleRequest(
    () =>
      httpParticipants.get(API_ROUTES_REPORTS.PARTICIPANT_SEARCH, {
        headers,
        params
      }),
    'Error fetching participant report:'
  )
}

export const createReport = async (
  payload: CreateReportPayload
): Promise<FileReportResponse> => {
  const rawQuery = {
    participantId: payload.participantId,
    date: formatYMD(payload.startDate),
    status: payload.status ?? null,
    countryId: payload.countryId
  }

  const params = Object.fromEntries(
    Object.entries(rawQuery).filter(([, v]) => v != null)
  )

  // Retornar la respuesta de la API
  return handleRequest(async () => {
    const headers = await buildStandardHeaders()
    return httpOperationsReceipts.post(
      API_ROUTES_REPORTS.CREATE_REPORT(payload.userId),
      rawQuery,
      { headers, params }
    )
  }, 'Error creating report:')
}
export const createReportMassive = async (
  payload: Omit<CreateReportPayload, 'status' | 'countryId'>
): Promise<FileReportResponse> => {
  const rawQuery = {
    participantId: payload.participantId,
    date: formatYMD(payload.startDate)
  }

  const params = Object.fromEntries(
    Object.entries(rawQuery).filter(([, v]) => v != null)
  )

  // Retornar la respuesta de la API
  return handleRequest(async () => {
    const headers = await buildStandardHeaders()
    return httpOperationsReceipts.post(
      API_ROUTES_REPORTS.CREATE_REPORT_MASSIVE(payload.userId),
      rawQuery,
      { headers, params }
    )
  }, 'Error creating report:')
}

export const searchParticipant = async (
  clientUser: string | null,
  page: number,
  size: number,
  query: string | undefined
): Promise<any[]> => {
  const headers = await buildCustomHeaders({ client_user: clientUser ?? '' })

  return handleRequest(
    () =>
      httpOperationsReceipts.get(
        API_ROUTES_REPORTS.SEARCH_PARTICIPANT(query, page, size),
        { headers }
      ),
    'Error searching participant:'
  )
}

export const getReportHistory = async (userId: number): Promise<any[]> => {
  const headers = await buildStandardHeaders()
  return handleRequest(
    () =>
      httpOperationsReceipts.get(API_ROUTES_REPORTS.REPORT_HISTORY(userId), {
        headers
      }),
    'Error fetching report history:'
  )
}
// Nuevo servicio descarga
export const downloadReportFile = async (
  id: number
): Promise<{
  blob: Blob
  fileName: string
  size: number
  mimeType: string
}> => {
  try {
    const response: AxiosResponse<Blob> = await getFile({
      axiosInstance: httpOperationDownloadReports,
      urlWithParams: API_ROUTES_REPORTS.FILE_DOWNLOAD(id),
      includeAccept: true
    })

    console.log('Respuesta descarga archivo:', response)
    console.log('Headers recibidos:', response?.headers)

    const headers = response.headers || {}

    const rawFullName =
      headers['x-full-file-name'] ||
      headers['x_full_file_name'] ||
      headers['X-Full-File-Name']

    const fileNameHeader =
      headers['x-file-name'] ||
      headers['x_file_name'] ||
      headers['X-File-Name'] ||
      ''

    const fileExtHeader =
      headers['x-file-extension'] ||
      headers['x_file_extension'] ||
      headers['X-File-Extension'] ||
      ''

    const mimeHeader =
      headers['x-mime-type'] ||
      headers['x_mime_type'] ||
      headers['X-Mime-Type'] ||
      headers['content-type'] ||
      'application/octet-stream'

    const sizeHeader =
      headers['x-file-size'] ||
      headers['x_file_size'] ||
      headers['X-File-Size'] ||
      headers['content-length'] ||
      ''

    // Extra fallback desde content-disposition
    const cd = headers['content-disposition']
    console.log('Content-Disposition header:', cd)
    let parsedFromContentDisposition = ''
    if (cd) {
      // Primero intenta RFC 5987 (filename*=UTF-8''nombre)
      const rfc5987Match = cd.match(/filename\*=UTF-8''([^;]+)/i)
      if (rfc5987Match && rfc5987Match[1]) {
        // Decodificar URL encoding
        parsedFromContentDisposition = decodeURIComponent(rfc5987Match[1])
      } else {
        // Fallback a formatos estándar
        const match =
          cd.match(/filename="([^"]+)"/i) || cd.match(/filename=([^;]+)/i)
        if (match && match[1]) {
          const raw = match[1].replace(/^"|"$/g, '').trim()
          // Intentar decodificar si tiene encoding
          try {
            parsedFromContentDisposition = decodeURIComponent(raw)
          } catch {
            parsedFromContentDisposition = raw
          }
        }
      }
    }

    // Construir nombre final
    let finalFileName =
      rawFullName ||
      (fileNameHeader && fileExtHeader
        ? `${fileNameHeader}.${fileExtHeader}`
        : '') ||
      parsedFromContentDisposition

    if (!finalFileName) {
      finalFileName = `archivo_${id}${
        fileExtHeader ? `.${fileExtHeader}` : '.csv'
      }`
    }

    // Asegurar extensión si no la tiene y existe fileExtHeader
    if (
      fileExtHeader &&
      !finalFileName.toLowerCase().endsWith(`.${fileExtHeader.toLowerCase()}`)
    ) {
      finalFileName = `${finalFileName}.${fileExtHeader}`
    }

    const size = Number(sizeHeader) || response.data.size || 0

    console.log('Metadatos descarga ->', {
      finalFileName,
      size,
      mimeType: mimeHeader
    })

    return {
      blob: response.data,
      fileName: finalFileName,
      size,
      mimeType: mimeHeader
    }
  } catch (e) {
    console.error('Error downloading report:', e)
    throw e
  }
}

export const getParticipantCashReport = async (
  page: number,
  size: number,
  participantCodeName?: string
) => {
  const headers = await buildStandardHeaders()
  const params = new URLSearchParams({
    page: String(page),
    size: String(size)
  })

  if (participantCodeName?.trim()) {
    params.set('search', participantCodeName.trim())
  }

  return handleRequest(
    () =>
      httpFilterParameters.get(
        `${API_ROUTES_REPORTS.PARTICIPANTS}?${params.toString()}`,
        {
          headers
        }
      ),
    'Error fetching participant report:'
  )
}

```

## src/features/reports/services/reportGenerate.ts

```typescript
import { httpOperationCorrection } from 'remoteShell/mf-axiosConfig'

import { post } from '@/shared/config/methods'

import { GenerateReportPayload } from '../components/GenerateReport'
import { API_ROUTES_REPORTS } from '../constants/endpoints'
import { ReportEndpoint } from '../constants/reportEndpoints'

// Asegúrate que este path existe; ajustar si difiere.

// Nuevo payload específico para los servicios de corrected reports
export interface CorrectedReportsPayload {
  startDate: string
  endDate: string
  participantId: number | null
  statusId: number | null
}

// Helper interno para evitar duplicación
const correctedReportsPost = (
  endpoint: string,
  payload: CorrectedReportsPayload
) =>
  post({
    axiosInstance: httpOperationCorrection,
    urlWithParams: endpoint,
    data: payload
  })

// Servicio 1: validar rango / criterios
export const validateCorrectedReportsRequest = (
  payload: CorrectedReportsPayload
) => correctedReportsPost(API_ROUTES_REPORTS.VALIDATE_CORRECTED_REPORT, payload)

// Servicio 2: generar reporte corregido
export const generateCorrectedReportsRequest = (
  payload: CorrectedReportsPayload
) => correctedReportsPost(API_ROUTES_REPORTS.GENERATE_CORRECTED_REPORT, payload)

export const generateReportRequest = async (
  endpoint: ReportEndpoint,
  payload: GenerateReportPayload
) => {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  if (!res.ok) throw new Error('Report generation failed')
  return res.json()
}

```

## src/features/reports/types/index.ts

```typescript
export interface Column {
  width: number
  field: string
  headerName: string
  renderCell: (params: any) => React.ReactNode
}

export interface OptionType {
  label: string
  id: number
  country?: { name: string }
  recordDate?: string
  settlementDate?: string
}

export interface IReport {
  userId: number | undefined
  participantId: number
  startDate: string
  endDate: string
  statusId: number
}

export type ModalAlertState = {
  title: string
  message?: string
  variant: string
  textSuccess?: string
  textCancel?: string
  orientation?: 'vertical' | 'horizontal'
  open: boolean
  onClose?: () => void
  onClick: () => void
  handleCancel?: () => void
  className?: string
  children?: React.ReactNode
} | null

export type ToastMessage = {
  message: string
  variant: string
}

export interface OptionType {
  label: string
  name: string
  id: number
  country?: { name: string }
  recordDate?: string
  settlementDate?: string
}

```

## src/features/reports/types/reports.ts

```typescript
import { BusinessType } from '@/shared/types'
import { type CommonResponseList } from '@/shared/types/common'

export type Reports = CommonResponseList<IInfoReport>

type Status = Omit<BusinessType, 'shortName'>
type Participant = Pick<BusinessType, 'description' | 'category'> & {
  code: string
  name: string
}
export interface IInfoReport {
  country: null
  fileConsecutive: 754
  fileName: string
  filePath: null
  fileType: string
  generatedAt: string
  generatedBy: string
  generationStatus: Status
  id: number
  message: null
  operationStatus: Status
  participant: Participant
  totalTrades: number
  type: Status
  reportDate: string
}

```

## src/features/reports/utils/columnDefinitions.tsx

```tsx
import { format } from 'date-fns'

import { StatusChip } from 'remoteUtilities/statusChip'

import { Column } from '@/features/reports/types'

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="flex justify-start items-center w-full h-full">
    {children}
  </div>
)

export const buildColumns = (): Column[] => [
  {
    width: 200,
    field: 'Date',
    headerName: 'Fecha y hora de generación',
    renderCell: ({ row }) => (
      <Container>
        <span>{format(row?.generatedAt, "yyyy-MM-dd' - 'HH:mm:ss")}</span>
      </Container>
    )
  },
  {
    width: 300,
    field: 'User',
    headerName: 'Usuario que genera',
    renderCell: ({ row }) => (
      <Container>
        <span>{row?.generatedBy}</span>
      </Container>
    )
  },
  {
    width: 200,
    field: 'Status',
    headerName: 'Estado de la operación',
    renderCell: ({ row }) => (
      <StatusChip value={row?.operationStatusDescription ?? '-'} />
    )
  },
  {
    width: 300,
    field: 'Participant',
    headerName: 'Participante',
    renderCell: ({ row }) => (
      <Container>
        <span>{row?.participantName}</span>
      </Container>
    )
  },
  {
    width: 200,
    field: 'Operations',
    headerName: 'Número de operaciones',
    renderCell: ({ row }) => (
      <Container>
        <span>{row?.totalTrades}</span>
      </Container>
    )
  },
  {
    width: 250,
    field: 'ReportStatus',
    headerName: 'Estado del reporte',
    renderCell: ({ row }) => {
      const value =
        typeof row?.ReportStatus === 'function'
          ? row.ReportStatus()
          : row?.generationStatusDescription
      return <StatusChip value={value ?? '-'} />
    }
  }
]

```

## src/features/reports/utils/downloadFileRepo.ts

```typescript
import type { TFunction } from 'i18next'

import {
  downloadFileReport as downloadFileReportShared,
  type GenerateLogsFn
} from '@/shared/utils/downloadFileReport'

export const downloadFileReport = async ({
  fileId,
  setIsDownloading,
  setDownloadToast,
  t,
  generateLogs
}: {
  fileId: number
  setIsDownloading: (isDownloading: boolean) => void
  setDownloadToast: (toast: {
    open: boolean
    variant: 'success' | 'error'
    message: string
  }) => void
  t: TFunction<'report', string>
  generateLogs: GenerateLogsFn
}) => {
  await downloadFileReportShared({
    fileId,
    setIsDownloading,
    setDownloadToast,
    t,
    generateLogs,
    actionType: 'Descarga de archivo liquida',
    logOnError: true
  })
}

```

## src/features/reports/utils/rulesDateCashRepo.ts

```typescript
export const monthsBack = (() => {
  const d = new Date()
  d.setMonth(d.getMonth() - 12)
  d.setHours(0, 0, 0, 0)
  return d
})()

export const maxDay = (() => {
  const d = new Date()
  d.setHours(0, 0, 0, 0)
  d.setDate(d.getDate() - 1)
  return d
})()

```

## src/features/reports/utils/rulesDateMassiveReceiptRepo.ts

```typescript
export const monthsBackExternal = (() => {
  const d = new Date()
  d.setMonth(d.getMonth() - 12)
  d.setHours(0, 0, 0, 0)
  return d
})()
export const monthsBackInternal = (() => {
  const d = new Date()
  d.setHours(0, 0, 0, 0)
  d.setDate(d.getDate() - 10)
  return d
})()

export const maxDay = (() => {
  const d = new Date()
  d.setHours(0, 0, 0, 0)
  d.setDate(d.getDate() - 1)
  return d
})()

```

## src/features/reports/validation/generateReportSchema.ts

```typescript
import * as yup from 'yup'

const TWO_MONTHS_BACK = (() => {
  const d = new Date()
  d.setMonth(d.getMonth() - 2)
  d.setHours(0, 0, 0, 0)
  return d
})()

interface BuildSchemaParams {
  requireParticipant: boolean
}

export const buildGenerateReportSchema = ({
  requireParticipant
}: BuildSchemaParams) =>
  yup
    .object({
      startDate: yup
        .date()
        .typeError('Fecha de inicio inválida')
        .required('Fecha de inicio requerida')
        .min(TWO_MONTHS_BACK, 'No puede ser anterior a 2 meses')
        .test(
          'lte-end',
          'Fecha inicio no puede ser mayor que la fecha final',
          function (value) {
            const end = this.parent.endDate
            if (!value || !end) return true
            return value <= end
          }
        ),
      endDate: yup
        .date()
        .typeError('Fecha final inválida')
        .required('Fecha final requerida')
        .min(TWO_MONTHS_BACK, 'No puede ser anterior a 2 meses')
        .test(
          'gte-start',
          'Fecha final no puede ser menor que la fecha inicio',
          function (value) {
            const start = this.parent.startDate
            if (!value || !start) return true
            return value >= start
          }
        ),
      participant: requireParticipant
        ? yup
            .object({
              id: yup.number().required(),
              label: yup.string().required()
            })
            .nullable()
            .required('Participante requerido')
        : yup.mixed().nullable(),
      statusId: yup
        .number()
        .nullable()
        .transform((v) => (v === '' ? null : v))
    })
    .required()

export type GenerateReportFormSchema = yup.InferType<
  ReturnType<typeof buildGenerateReportSchema>
>

```

## src/features/settlement-file/constants/endpoints.ts

```typescript
export const API_ROUTES_SETTLEMENT_FILE = {
  // Master
  MASTER_COUNTRY: 'country',
  MASTER_STATUS: 'status',
  MASTER_TYPE: 'type',

  // Operations
  TRADE: '/trade',
  TRADE_BY_ID: (id: string | number) => `/trade/${id}`,
  TRADE_EQUITY_BY_ID: (id: string) => `/trade-equity/trade/${id}`,
  SETTLEMENT_BY_ID: (id: string) => `/settlement?tradeId=${id}`,
  ALL_TRADE_BY_ID: (id: string) => `/all-trade/${id}`,
  TRADE_BY_PARTICIPANT: (participantId: string, size: number) =>
    `/trade?participantId=${participantId}&size=${size}`,

  // Investor
  INVESTOR_ACCOUNT_DETAILS: (id: string | number) =>
    `/joint-account/investor-account/${id}`,

  // Consult Folios
  TRADE_HISTORY: (id: string) => `/tracking-trade/${id}`,

  // Receipts
  REPORT_OPERATIONS: (id: string) =>
    `/receipt-operation/generate/settlement/trade/${id}`,
  REPORT_MASSIVE: (userId: string) =>
    `/receipt-operation/generate/receipt/massive/folios/user/${userId}`,

  // Custodian trade history
  CUSTODIAN_TRADE_HISTORY: (id: string) =>
    `/tracking-trade/${id}/settlement/custodian`
} as const

```

## src/features/settlement-file/constants/index.ts

```typescript
import { API_ROUTES_SETTLEMENT_FILE } from './endpoints'

export const FILE_NAMES = {
  settlementFile: 'Archivo_Liquida.xlsx',
  settlementFileWithoutExt: 'Archivo_Liquida'
}

type SelectOption = { label: string; value: string }
type ApiResponseItem = { id: string; name?: string; description?: string }

export const mapResponseByType: Record<
  string,
  (item: ApiResponseItem) => SelectOption
> = {
  [API_ROUTES_SETTLEMENT_FILE.MASTER_COUNTRY]: (item) => ({
    label: item.name ?? '',
    value: item.id.toString()
  }),
  [API_ROUTES_SETTLEMENT_FILE.MASTER_STATUS]: (item) => ({
    label: item.description ?? '',
    value: item.id.toString()
  }),
  [API_ROUTES_SETTLEMENT_FILE.MASTER_TYPE]: (item) => ({
    label: item.description ?? '',
    value: item.id.toString()
  })
}

```

## src/features/settlement-file/services/trades.ts

```typescript
import axios from 'axios'

import {
  httpOperationsConsultFolios,
  httpReceipts
} from 'remoteShell/mf-axiosConfig'

import { mapResponseByType } from '@/features/settlement-file/constants'
import { API_ROUTES_SETTLEMENT_FILE } from '@/features/settlement-file/constants/endpoints'
import { ITradeHistory } from '@/features/settlement-file/types'

import { IReportOperation } from '@/shared/types'
import { handleRequest } from '@/shared/utils/handleRequest'
import { buildCustomHeaders } from '@/shared/utils/headerServices'
import isDevMode from '@/shared/utils/isDevMode'

export const getSelects = async (
  client_user: string | null,
  type: string
): Promise<{ label: string; value: string }[]> => {
  try {
    const masterUrl = import.meta.env.VITE_MASTER_URL
    const response = await axios.get(`${masterUrl}/${type}`, {
      headers: await buildCustomHeaders({ client_user: client_user ?? '' })
    })
    const mapper = mapResponseByType[type]
    return mapper ? response.data.map(mapper) : []
  } catch (error) {
    if (isDevMode()) {
      console.error('Error fetching user information:', error)
    }
    throw error
  }
}

export const getTradeHistory = async (
  client_user: string | null,
  tradeId: string | undefined
): Promise<ITradeHistory> => {
  const headers = await buildCustomHeaders({ client_user: client_user ?? '' })
  return handleRequest(
    () =>
      httpOperationsConsultFolios.get(
        API_ROUTES_SETTLEMENT_FILE.TRADE_HISTORY(tradeId || ''),
        { headers }
      ),
    'Error getting trade history:'
  )
}

export const reportOperations = async (
  client_user: string | null,
  tradeId: string,
  sideId: string[] | undefined
) => {
  const headers = await buildCustomHeaders({ client_user: client_user ?? '' })

  return handleRequest(
    () =>
      httpReceipts.post<IReportOperation[]>(
        API_ROUTES_SETTLEMENT_FILE.REPORT_OPERATIONS(tradeId || ''),
        sideId,
        { headers }
      ),
    'Error getting report operations:'
  )
}

export const reportCsvMassive = async (
  client_user: string | null,
  getTradeId: any,
  userId: string | undefined
) => {
  const headers = await buildCustomHeaders({ client_user: client_user ?? '' })

  return handleRequest(
    () =>
      httpReceipts.post(
        API_ROUTES_SETTLEMENT_FILE.REPORT_MASSIVE(userId || ''),
        getTradeId,
        { headers }
      ),
    'Error getting report operations:'
  )
}

export const getCustodianTradeHistory = async (
  client_user: string | null,
  tradeId: string | undefined
): Promise<ITradeHistory> => {
  const headers = await buildCustomHeaders({ client_user: client_user ?? '' })
  return handleRequest(
    () =>
      httpOperationsConsultFolios.get(
        API_ROUTES_SETTLEMENT_FILE.CUSTODIAN_TRADE_HISTORY(tradeId || ''),
        { headers }
      ),
    'Error getting trade history:'
  )
}

```

## src/features/settlement-file/types/index.d.ts

```typescript
export interface ITrades {
  id: number
  matchDate: Date
  matchId: number
  clearingDate: Date
  returnClearingDate: Date
  depository: Depository
  country: Country
  type: BusinessType
  market: Depository
  securityTitle: SecurityTitle
  participantBuy: CustodianSell
  participantSell: CustodianSell
  custodianBuy: null
  custodianSell: CustodianSell
  assignmentMarkBuy: boolean
  assignmentMarkSell: boolean
  fractionalMarkBuy: boolean
  fractionalMarkSell: boolean
  advanceStatus: number
  exitIndicatorSettlement: boolean
  returnIndicatorSettlement: boolean
  canceledStatus: boolean
  quantity: number
  price: number
  volume: number
  isin: string
  repurchaseRate: number
  repurchaseAmount: number
  status: BusinessType
  matchTime: Date
  ownPositionSell: boolean
  ownPositionBuy: boolean
  currency: Currency
  tradingSystemId: number
  tradingSessionId: string
  repurchaseAgreementDate: Date
  daysToSettlement: number
  repoRate: number
  repoAmount: number
  fundingAmount: number
  netOutFlowTotal: number
  outFlowTurnOverValue: number
  totalNetReturn: number
  returnTurnoverValue: number
  deliveryVersusPaymentValue: number
  reallocationIndicator: boolean
  businessType: BusinessType
  marketType: BusinessType
  originType: BusinessType
}

export interface ITradeHistory {
  tradeId: number
  matchDate: Date
  matchId: number
  trackingTrade: SettlementHistory[]
}

export interface BusinessType {
  id: number
  description: string
  category: string
  shortName?: string
  code?: string
}

export interface CustodianSell {
  id: number
  code: string
  name: string
  shortName: string
  type: BusinessType
  mnemonic: string
  country: Country
  registrationDate: Date
  taxCode: string
  department: Depository
  mainAddress: string
  webPage: string
  phoneNumber: string
  status: BusinessType
  nitClearingHouse: string
  taxStatus: string
  typeEntity: string
  marginAccount: string
  directAllocation: string
  marketMaker: string
  enabled: boolean
  masterAccount: string
}

export interface Depository {
  id: string
  description: string
}

export interface SettlementHistory {
  tradeId: number
  fraction: number
  side: { id: string }
  time: Date
  status: { description: string; detail: string; shortName?: string }
  description: string
}

export interface ISettlement {
  content: Content[]
  pageSize: number
  pageNumber: number
  totalElements: number
  totalPages: number
}
export interface ContentSettlement {
  tradeId: number
  fraction: number
  side: Side
  investor: Investor
  investorAccount: InvestorAccount
  participantAccount: ParticipantAccount
  fractionQuantity: number
  fractionVolume: number
  fiduciarySpecialist: string
  commissionPercentage: number
  commissionAmount: number
  valTax: number
  valTaxAmount: number
  withholdingTax: number
  withholdingTaxAmount: number
  netAmount: number
  transferValue: number
  issuedReceipt: boolean
  issuedReceiptNumber: string
  referenceAllocId: number
  repoAmount: number
  fundingAmount: number
  netOutFlowTotal: number
  outFlowTurnoverValue: number
  returnTurnoverValue: number
  deliveryVersusPaymentValue: number
  tradingSystemId: number
  status: Status
  brokerageService: number
  custodianId: number
  settlementAmount: number
}

export interface Investor {
  id: number
  code: string
  firstName: string
  lastName: string
  companyName: string
  type: Status
  status: Status
  country: Country
  department: Side
  city: City
  documentNumber: string
  documentType: string
  nationality: string
  address: string
  phoneNumber: string
  email: string
  clearinghouseCode: string
  gicsId: number
  moneyLaunderingFlag: string
  taxStatusId: number
}

export interface City {
  id: number
  description: string
}

export interface Status {
  id: number
  description: string
  category: string
}

export interface InvestorAccount {
  id: number
  investorId: number
  accountNumber: string
  status: Status
  type: Status
  depository: Side
  participantId: number
}

export interface ParticipantAccount {
  id: number
  participantId: number
  accountNumber: string
  status: Status
  type: Status
}

export interface Side {
  id: string
  description: string
}

export interface ITradeEquity {
  tradeId: number
  foreignBrokerBuy: number
  foreignBrokerSell: number
  directDepositorBuy: number
  directDepositorSell: number
  sourceIndicatorBuy: number
  sourceIndicatorSell: number
  responsibleTradeBuy: number
  responsibleTradeSell: number
  referenceBuy: string
  referenceSell: string
  orderBookId: number
  prearrangedOperation: boolean
  aggressiveTip: number
  exdividendPeriod: boolean
}

export interface InvestorAccount {
  id: number
  number: string
  investorId: number
  status: string
  type: string
  accountNumber: string
  depository: string
  participantId: number
  fiduciaryTrust: string
}

export interface ParticipantAccount {
  id: number
  participantId: number
  number: string
  status: string
  type: string
}

export interface CombinedTradeData {
  trade: ITrades | null
  equity: ITradeEquity | null
  settlement: ISettlement | null
}

export interface ICountry {
  id: number
  code: string
  name: string
  currency: Currency
  timeZone: string
}

export interface ICurrency {
  id: number
  code: string
  name: string
}

export interface Participant {
  id: number
  code: string
  name: string
  shortName: string
  type: string
  mnemonic: string
  country: Country
  registrationDate: Date
  taxCode: string
  department: string
  mainAddress: string
  webPage: string
  phoneNumber: string
  status: string
  nitClearingHouse: string
  taxStatus: string
  typeEntity: string
  marginAccount: string
  directAllocation: string
  marketMaker: string
  enabled: boolean
}

export interface SecurityTitle {
  id: number
  market: Depository
  equityCode: string
  mnemonic: string
  isin: string
  cfi: Depository
  currencyId: number
  settlementPeriod: string
  listingDate: Date
  delistingDate: Date
  parent: boolean
  parentId: number
  status: BusinessType
  issuerId: number
  countryId: number
  amountIssued: number
  classId: string
  segmentId: number
  category: string
  depository: Depository
  punishmentRepo: number
  regulatoryCode: string
}

```

## src/features/shipping-cycles/ShippingCycles.tsx

```tsx
import React, { useState } from 'react'

import {
  ContentWrapper,
  FilterBar,
  NewTable,
  useFilteredEndpoint
} from 'remoteUtilities/components-mf-utilities'

import useTranslate from '@/shared/hooks/useTranslate'

import { ToolbarActions } from './components/ToolbarActions'
import useColumnsShippingCycles from './hooks/useColumnsShippingCycles'
import { ShippingCycleItem } from './types'
import { filtersConfig } from './utils/filtersConfig'

export const ShippingCycles: React.FC = () => {
  const [rows, setRows] = useState<ShippingCycleItem[]>([])
  const { endpoint } = useFilteredEndpoint('/dcv/query')

  const setDataRemote = (_page: number, dataTable: ShippingCycleItem[]) => {
    setRows(dataTable)
  }
  const { t } = useTranslate({ keyPrefix: 'shippingCycles' })
  const config = filtersConfig(t)
  const { columns } = useColumnsShippingCycles()
  return (
    <ContentWrapper title={t('title')}>
      <FilterBar config={config} />
      <NewTable
        columns={columns}
        endpoint={endpoint}
        axiosInstanceKey="httpSettlementCycle"
        customToolbar={<ToolbarActions />}
        setDataRemote={setDataRemote}
        height="auto"
        rows={rows}
      />
    </ContentWrapper>
  )
}

export default ShippingCycles

```

## src/features/shipping-cycles/components/ToolbarActions.tsx

```tsx
import { Button } from '@nuam/common-fe-lib-components'
import React, { useMemo } from 'react'

import { useScreenActions } from 'remoteShell/mf-shell-useScreenActions'

import { OPERATION_SHIPPING_CYCLES_ACTIONS } from '@/shared/constants/actionCodes'
import useTranslate from '@/shared/hooks/useTranslate'

export const ToolbarActions: React.FC = () => {
  const { hasAction } = useScreenActions()
  const { canSendCycleOne, canSendCycleTwo } = useMemo(
    () => ({
      canSendCycleOne: hasAction(
        OPERATION_SHIPPING_CYCLES_ACTIONS.SEND_CYCLE_1
      ),
      canSendCycleTwo: hasAction(OPERATION_SHIPPING_CYCLES_ACTIONS.SEND_CYCLE_2)
    }),
    [hasAction]
  )
  const handleEnviarCiclo1 = () => {
    console.log('ENVIAR CICLO 1 - TODO: Implementar')
  }
  const handleEnviarCiclo3 = () => {
    console.log('ENVIAR CICLO 3 - TODO: Implementar')
  }
  const { t } = useTranslate({ keyPrefix: 'shippingCycles.toolbar' })
  return (
    <div className="flex gap-2">
      {canSendCycleOne && (
        <Button variant="text" onClick={handleEnviarCiclo1}>
          {/* ENVIAR CICLO 1 */}
          {t('sendCycle1')}
        </Button>
      )}
      {canSendCycleTwo && (
        <Button variant="text" onClick={handleEnviarCiclo3}>
          {/* ENVIAR CICLO 3 */}
          {t('sendCycle3')}
        </Button>
      )}
    </div>
  )
}

```

## src/features/shipping-cycles/hooks/useColumnsShippingCycles.tsx

```tsx
import { type XDataGridLib } from '@nuam/common-fe-lib-components'
import { parseISO, format } from 'date-fns'

import { StatusChip } from 'remoteUtilities/statusChip'

import useTranslate from '@/shared/hooks/useTranslate'

import {
  getDownloadFileResponse,
  getDownloadFileSend
} from '../services/getDownloadFile'

const useColumnsShippingCycles = () => {
  const { t } = useTranslate({ keyPrefix: 'shippingCycles.columns' })
  const columns: XDataGridLib.GridColDef[] = [
    {
      field: 'sendDateTime',
      // headerName: 'Fecha y hora del envío',
      headerName: t('sendDateTime'),
      flex: 1,
      minWidth: 170,
      renderCell: (params) => {
        const value = params.value
        if (!value) return ''
        try {
          const date = parseISO(value)
          return format(date, 'dd/MM/yy - HH:mm')
        } catch {
          return value
        }
      }
    },
    {
      field: 'fileType',
      // headerName: 'Tipo de archivo',
      headerName: t('fileType'),
      flex: 1,
      minWidth: 120
    },
    {
      field: 'sendStatus',
      // headerName: 'Estado del archivo',
      headerName: t('sendStatus'),
      flex: 1,
      minWidth: 140,
      renderCell: (params: any) => <StatusChip value={params.value ?? '-'} />
    },
    {
      field: 'sendOrigin',
      // headerName: 'Origen del envío',
      headerName: t('sendOrigin'),
      flex: 1,
      minWidth: 120
    },
    {
      field: 'downloadUrl',
      // headerName: 'Cant. registros archivo enviado',
      headerName: t('recordsCount'),
      flex: 1,
      minWidth: 200,
      renderCell: (params) => {
        if (params.row.nameFileSend) {
          return (
            <a
              href={params.row.downloadUrl}
              className="text-[#FF411C] underline text-sm font-normal"
              onClick={() => getDownloadFileSend(params.row.nameFileSend)}
            >
              {params.row.nameFileSend}{' '}
              {params.row.recordsCount !== null &&
              params.row.recordsCount !== undefined
                ? `(${params.row.recordsCount})`
                : ''}
            </a>
          )
        } else {
          return <span style={{ color: 'red' }}>N/A</span>
        }
      }
    },
    {
      field: 'responseDetailUrl',
      // headerName: 'Detalle respuesta',
      headerName: t('responseDetail'),
      flex: 1,
      minWidth: 160,
      renderCell: (params) => {
        if (params.row.fileResponseName) {
          return (
            <a
              href={params.row.downloadUrl}
              className="text-[#FF411C] underline text-sm font-normal"
              onClick={() =>
                getDownloadFileResponse(params.row.fileResponseName)
              }
            >
              {params.row.fileResponseName}
            </a>
          )
        } else {
          return <span style={{ color: 'red' }}>N/A</span>
        }
      }
    }
  ]
  return { columns }
}

export default useColumnsShippingCycles

```

## src/features/shipping-cycles/services/getCycleOptions.ts

```typescript
import { httpSettlementCycle } from 'remoteShell/mf-axiosConfig'

import { get } from '@/shared/config/methods'
import { ENDPOINTS } from '@/shared/constants/endpoints'
import isDevMode from '@/shared/utils/isDevMode'

export const getCycleOptions = async () => {
  const urlWithParams = `${ENDPOINTS.CYCLE_OPTIONS}`
  try {
    const { data } = await get({
      axiosInstance: httpSettlementCycle,
      urlWithParams
    })
    return data.map((item: any) => ({
      id: item.detail,
      name: item.description
    }))
  } catch (error) {
    if (isDevMode()) {
      console.error('Error getting special trade:', error)
    }
    throw error
  }
}

```

## src/features/shipping-cycles/services/getDownloadFile.ts

```typescript
import { httpSettlementCycle } from 'remoteShell/mf-axiosConfig'

import { get } from '@/shared/config/methods'
import { ENDPOINTS } from '@/shared/constants/endpoints'
import isDevMode from '@/shared/utils/isDevMode'

export const getDownloadFileSend = async (fileName: string) => {
  const urlWithParams = `${ENDPOINTS.DOWNLOAD_FILE_FTP_SEND}?fileName=${fileName}`
  try {
    const { data } = await get({
      axiosInstance: httpSettlementCycle,
      urlWithParams
    })
    return data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error getting download file send:', error)
    }
    throw error
  }
}

export const getDownloadFileResponse = async (fileName: string) => {
  const urlWithParams = `${ENDPOINTS.DOWNLOAD_FILE_FTP_RESPONSE}?fileName=${fileName}`
  try {
    const { data } = await get({
      axiosInstance: httpSettlementCycle,
      urlWithParams
    })
    return data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error getting download file response:', error)
    }
    throw error
  }
}

```

## src/features/shipping-cycles/services/getUsers.ts

```typescript
import { httpSettlementCycle } from 'remoteShell/mf-axiosConfig'

import { get } from '@/shared/config/methods'
import { ENDPOINTS } from '@/shared/constants/endpoints'
import isDevMode from '@/shared/utils/isDevMode'

type Params = {
  username?: string
  page: number
  size: number
}

export const getUsers = async (params: Params) => {
  const searchParams = new URLSearchParams()
  if (params.username) searchParams.append('username', params.username)
  searchParams.append('page', params.page.toString())
  searchParams.append('size', params.size.toString())

  const urlWithParams = `${ENDPOINTS.USERS}?${searchParams.toString()}`
  try {
    const { data } = await get({
      axiosInstance: httpSettlementCycle,
      urlWithParams
    })
    return data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error getting users:', error)
    }
    throw error
  }
}

```

## src/features/shipping-cycles/types/index.ts

```typescript
import dayjs from 'dayjs'

// Tipos base para opciones
export interface SelectOption {
  id: string | number
  name: string
}

// Datepicker
export interface DatepickerFilterConfig {
  name: string
  label: string
  type: 'datepicker'
  minDate?: string | dayjs.Dayjs
  maxDate?: string | dayjs.Dayjs
  monthsBack?: number
}

// Select
export interface SelectFilterConfig {
  name: string
  label: string
  type: 'select'
  loadOptions?: any // Función para cargar opciones de forma asíncrona
  options?: any
}

// Autocomplete
export interface AutocompleteFilterConfig {
  name: string
  label: string
  type: 'autocomplete'
  fetchOptions: any
  itemsPerPage: number
  minSearchLength: number
  debounceTime: number
  maxLength?: number
  disabled?: boolean
  defaultValue?: { id: string | number; label: string }
}

export interface TextFieldFilterConfig {
  name: string
  label: string
  type: string
  inputType: string // o "text"
  minChars: number // escribe en URL solo desde X caracteres
  maxLength: number
  regex?: RegExp
  format?: string
}

// Unión de todos los tipos de filtro
export type FilterConfig =
  | DatepickerFilterConfig
  | SelectFilterConfig
  | AutocompleteFilterConfig
  | TextFieldFilterConfig

export interface ShippingCycleItem {
  id: string
  fechaHoraEnvio: string
  tipoArchivo: string
  estadoArchivo: string
  origenEnvio: string
  cantidadRegistros: string
  detalleRespuesta: string
}

```

## src/features/shipping-cycles/utils/fetchUsers.ts

```typescript
import { getUsers } from '@/features/shipping-cycles/services/getUsers'

import isDevMode from '@/shared/utils/isDevMode'

export const fetchUsers = async (
  username?: string,
  page: number = 0,
  size: number = 10
) => {
  try {
    const response = await getUsers({ page, size, username })
    return {
      data: response.content.map((item: { userName: string }) => ({
        ...item,
        id: item.userName,
        label: item.userName
      })),
      total: response.totalElements
    }
  } catch (error) {
    if (isDevMode()) {
      console.error('Error fetching users:', error)
    }
    return { data: [], total: 0 }
  }
}

```

## src/features/shipping-cycles/utils/filtersConfig.ts

```typescript
import { type TFunction } from 'i18next'

import { getCycleOptions } from '@/features/shipping-cycles/services/getCycleOptions'
import { FilterConfig } from '@/features/shipping-cycles/types'

import { fetchUsers } from './fetchUsers'

export const filtersConfig = (
  t: TFunction<'shippingCycles', string>
): FilterConfig[] => [
  {
    name: 'sendDate',
    // label: 'Fecha de envío',
    label: t('filters.sendDate'),
    type: 'datepicker'
  },
  {
    name: 'cycle',
    // label: 'Tipo de archivo',
    label: t('filters.fileType'),
    type: 'select',
    loadOptions: getCycleOptions
  },
  {
    name: 'user',
    // label: 'Usuario',
    label: t('filters.user'),
    type: 'autocomplete',
    fetchOptions: fetchUsers,
    itemsPerPage: 10,
    minSearchLength: 3,
    debounceTime: 300,
    maxLength: 100
  }
]

```

## src/main.tsx

```tsx
import App from './App.tsx'
import ErrorBoundary from './shared/utils/ErrorBoundary.tsx'

const Main = () => (
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
)

export default Main

```

## src/shared/assets/icons/Vector.svg

```xml
<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.1223 13.4363V1.39526M10.1223 13.4363L13.0383 10.5086M10.1223 13.4363L7.20627 10.5086M14.7551 6.12816H15.6881C17.7231 6.12816 19.3721 7.77716 19.3721 9.81316V14.6972C19.3721 16.7272 17.7271 18.3722 15.6971 18.3722H4.55707C2.52207 18.3722 0.87207 16.7222 0.87207 14.6872V9.80216C0.87207 7.77316 2.51807 6.12816 4.54707 6.12816H5.48907" stroke="#FF4201" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

```

## src/shared/assets/icons/eyeIcon.svg

```xml
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.1609 12.0536C15.1609 13.7996 13.7449 15.2146 11.9989 15.2146C10.2529 15.2146 8.83789 13.7996 8.83789 12.0536C8.83789 10.3066 10.2529 8.8916 11.9989 8.8916C13.7449 8.8916 15.1609 10.3066 15.1609 12.0536Z" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.998 19.355C15.806 19.355 19.289 16.617 21.25 12.053C19.289 7.48898 15.806 4.75098 11.998 4.75098H12.002C8.194 4.75098 4.711 7.48898 2.75 12.053C4.711 16.617 8.194 19.355 12.002 19.355H11.998Z" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

```

## src/shared/assets/no_data.svg

```xml
<svg width="281" height="280" viewBox="0 0 281 280" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M63.6905 184.424C64.3193 184.064 71.4156 181.06 106.719 197.518C106.616 197.658 106.572 197.724 106.572 197.724C106.572 197.724 69.8711 210.084 62.6803 194.857C60.533 190.324 61.1483 187.203 63.6292 184.459L63.6905 184.424Z" fill="#E53C16"/>
<path d="M182.347 190.652C174.677 197.1 162.649 201.78 151.043 195.557C152.877 194.385 154.771 193.178 156.703 191.929C168.358 184.44 178.625 189.451 182.347 190.652Z" fill="#E53C16"/>
<path d="M196.085 111.349C203.921 176.6 185.299 188.443 183.226 190.242C182.625 190.763 182.382 190.725 181.475 190.491L181.459 190.5C177.618 189.482 168.359 184.44 156.703 191.928C154.771 193.176 152.876 194.384 151.042 195.555C139.152 203.096 129.55 208.411 122.633 205.326C116.765 202.333 111.475 199.743 106.719 197.518C71.4157 181.059 64.3194 184.064 63.6907 184.424C64.4202 184.026 71.1126 180.317 80.1239 173.793C80.1545 173.775 80.1852 173.758 80.1918 173.734C92.2365 165.005 108.367 151.249 119.961 133.554C127.854 121.521 135.576 91.0168 150.475 85.0315C181.094 73.6089 194.814 98.076 196.085 111.349Z" fill="#FF623D"/>
<path d="M162.228 110.204C163.179 107.694 163.086 105.333 162.021 104.93C160.957 104.526 159.323 106.234 158.372 108.744C157.422 111.254 157.515 113.615 158.579 114.018C159.644 114.421 161.278 112.714 162.228 110.204Z" fill="#FFFBFA"/>
<path d="M181.724 113.406C182.398 110.808 182.051 108.471 180.948 108.185C179.846 107.899 178.407 109.774 177.733 112.371C177.06 114.969 177.407 117.307 178.509 117.593C179.611 117.878 181.051 116.004 181.724 113.406Z" fill="#FFFBFA"/>
</svg>

```

## src/shared/components/DownloadFileReport.tsx

```tsx
import { MaterialIcons, NuamThemeWrapper } from '@nuam/common-fe-lib-components'
import { useState } from 'react'
import { createPortal } from 'react-dom'

import { Spinner, Toast } from 'remoteUtilities/components-mf-utilities'

import useGenerateLogs from '@/shared/hooks/useGenerateLogs'
import useTranslate from '@/shared/hooks/useTranslate'
import { downloadFileReport } from '@/shared/utils/downloadFileReport'

const DownloadFileReport = ({
  isEnabled,
  fileId,
  actionType,
  logOnError,
  formatFileName
}: {
  isEnabled: boolean
  fileId: number
  actionType: string
  logOnError?: boolean
  formatFileName?: (fileName: string) => string
}) => {
  const { t } = useTranslate({ keyPrefix: 'report' })
  const [downloadToast, setDownloadToast] = useState<{
    open: boolean
    variant: 'success' | 'error'
    message: string
  }>({ open: false, variant: 'success', message: '' })

  const [isDownloading, setIsDownloading] = useState(false)
  const { generateLogs } = useGenerateLogs()
  const handleDownload = async () => {
    await downloadFileReport({
      fileId,
      setIsDownloading,
      setDownloadToast,
      t,
      generateLogs,
      actionType,
      logOnError,
      formatFileName
    })
  }

  return (
    <>
      <button
        className="flex items-center justify-center"
        onClick={isEnabled ? async () => await handleDownload() : undefined}
        title={t('downloadFile')}
        disabled={!isEnabled}
        style={{
          background: 'none',
          border: 'none',
          padding: 0,
          opacity: isEnabled ? 1 : 0.5,
          cursor: isEnabled ? 'pointer' : 'not-allowed',
          display: 'flex',
          alignItems: 'center',
          height: '100%'
        }}
      >
        <NuamThemeWrapper>
          <MaterialIcons.FileDownloadOutlined color="primary" />
        </NuamThemeWrapper>
      </button>
      {isDownloading && createPortal(<Spinner />, document.body)}
      {downloadToast.open && (
        <Toast
          text={downloadToast.message}
          variant={downloadToast.variant}
          width="424px"
          onClose={() => setDownloadToast((prev) => ({ ...prev, open: false }))}
        />
      )}
    </>
  )
}

export default DownloadFileReport

```

## src/shared/components/PendingAdmissionsAlert/PendingAdmissionsAlert.tsx

````tsx
import { ModalAlert } from 'remoteUtilities/components-mf-utilities'

export interface IPendingAdmissionsAlertProps {
  /** Si el modal está abierto */
  open: boolean
  /** Callback al hacer click en continuar */
  onContinue: () => void
  /** Título del modal (opcional) */
  title?: string
  /** Mensaje del modal (opcional) */
  message?: string
  /** Texto del botón de continuar (opcional) */
  continueText?: string
  /** Callback al cerrar con el icono X (opcional) */
  onClose?: () => void
}

/**
 * Componente de alerta reutilizable para notificar al usuario sobre
 * operaciones de traslado pendientes por admitir.
 *
 * @example
 * ```tsx
 * <PendingAdmissionsAlert
 *   open={showAlert}
 *   onContinue={handleContinue}
 *   onClose={closeAlert}
 * />
 * ```
 */
export const PendingAdmissionsAlert = ({
  open,
  onContinue,
  title = '¡Importante!',
  message = 'Tienes operaciones de traslado pendientes por admitir.',
  continueText = 'CONTINUAR',
  onClose
}: IPendingAdmissionsAlertProps) => {
  if (!open) return null

  return (
    <ModalAlert
      title={title}
      message={message}
      variant="warning"
      textSuccess={continueText}
      onClick={onContinue}
      showIconClose={!!onClose}
      onIconClose={onClose}
      width="450px"
      textAlign="center"
      fontWeight="bold"
    />
  )
}

````

## src/shared/components/PendingAdmissionsAlert/index.ts

```typescript
export * from './PendingAdmissionsAlert'

```

## src/shared/components/RejectionAlert/RejectionAlert.module.css

```css
.rejection-alert-modal {
  z-index: 1500 !important;
}

.rejection-alert-content {
  z-index: 1500 !important;
  max-width: 90vw !important;
}

.rejection-alert-table-container {
  max-width: 90vw !important;
  overflow-x: auto;
}

```

## src/shared/components/RejectionAlert/RejectionAlert.tsx

```tsx
import { GridColDef } from '@mui/x-data-grid'
import {
  Button,
  DefaultComponents,
  Typography
} from '@nuam/common-fe-lib-components'
import { useMemo } from 'react'

import { ModalContent, NewTable } from 'remoteUtilities/components-mf-utilities'

import { IRejectedItem } from '@/shared/hooks/useRejectionAlert'

import './RejectionAlert.module.css'

interface IRejectionAlertProps {
  open: boolean
  onClose: () => void
  rejectedItems: IRejectedItem[]
  message?: string
  columns?: GridColDef[]
  title?: string
  endpoint?: string
  axiosInstanceKey?: string
}

const DEFAULT_COLUMNS: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 100,
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'reason',
    headerName: 'Motivo de rechazo',
    flex: 1,
    minWidth: 300
  }
]

export const RejectionAlert = ({
  open,
  onClose,
  rejectedItems,
  message = 'No fue posible enviar a trasladar las fracciones al custodio',
  columns = DEFAULT_COLUMNS,
  title = 'Enviar Trasladar al custodio',
  endpoint,
  axiosInstanceKey
}: IRejectionAlertProps) => {
  const tableRows = useMemo(() => {
    return rejectedItems.map((item, index) => ({
      ...item,
      id: item.id ?? index
    }))
  }, [rejectedItems])

  const showPagination = tableRows.length > 5

  if (!open) return null

  return (
    <ModalContent
      open={open}
      handleClose={() => onClose()}
      handleAccept={() => onClose()}
      title={title}
      ItShouldHaveButtons={false}
      iconClose={true}
      className="w-[92%] max-h-full p-4 xl:p-8 gap-3 xl:gap-4 xl:my-8"
    >
      <DefaultComponents.Box mt={{ lg: 2, xs: 0 }}>
        {/* Header Message */}
        <DefaultComponents.Box sx={{ mb: 2 }}>
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: 400
            }}
          >
            {message}
          </Typography>
        </DefaultComponents.Box>
        {endpoint && axiosInstanceKey ? (
          <NewTable
            columns={columns}
            endpoint={endpoint}
            axiosInstanceKey={axiosInstanceKey}
            checkboxSelection={false}
            showDownload={false}
            disableRowSelectionOnClick
            hideFooter={!showPagination}
            rowsPerPageOptions={[5, 10, 25]}
            showToolbar={false}
          />
        ) : (
          <NewTable
            columns={columns}
            rows={tableRows}
            endpoint=""
            axiosInstanceKey="default"
            checkboxSelection={false}
            showDownload={false}
            disableRowSelectionOnClick
            hideFooter={!showPagination}
            rowsPerPageOptions={[5, 10, 25]}
            showToolbar={false}
          />
        )}
        {/* Action Button - Solo botón Volver */}
        <DefaultComponents.Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={onClose}
            sx={{
              minWidth: '120px',
              textTransform: 'none',
              marginTop: '16px'
            }}
          >
            Volver
          </Button>
        </DefaultComponents.Box>
      </DefaultComponents.Box>
    </ModalContent>
  )
}

```

## src/shared/components/RejectionAlert/index.ts

```typescript
export { RejectionAlert } from './RejectionAlert'

```

## src/shared/config/methods.ts

```typescript
import { AxiosResponse } from 'axios'

import { formatToServerTime } from 'remoteUtilities/formatToUserLocalTime'

import STORAGE_KEYS from '@/shared/constants/storageKeys'
import { MethodsProps } from '@/shared/types/methods'
import { getFromLocalStorage } from '@/shared/utils/localStorage'

export const post = async (props: MethodsProps): Promise<AxiosResponse> => {
  const accessToken = getFromLocalStorage(STORAGE_KEYS.ACCESS_TOKEN)
  const client_user = getFromLocalStorage(STORAGE_KEYS.USERNAME)

  const {
    axiosInstance,
    data = null,
    urlWithParams,
    customHeaders
  } = props || {}

  return await axiosInstance.post(urlWithParams, data, {
    headers: {
      client_datetime: formatToServerTime(),
      client_user,
      Authorization: `Bearer ${accessToken}`,
      ...customHeaders
    }
  })
}

export const get = async (props: MethodsProps): Promise<AxiosResponse> => {
  const accessToken = getFromLocalStorage(STORAGE_KEYS.ACCESS_TOKEN)
  const client_user = getFromLocalStorage(STORAGE_KEYS.USERNAME)
  const { axiosInstance, urlWithParams, params } = props || {}

  return await axiosInstance.get(urlWithParams, {
    headers: {
      client_datetime: formatToServerTime(),
      client_user,
      Authorization: `Bearer ${accessToken}`
    },
    params
  })
}

export const patch = async (props: MethodsProps): Promise<AxiosResponse> => {
  const accessToken = getFromLocalStorage(STORAGE_KEYS.ACCESS_TOKEN)
  const client_user = getFromLocalStorage(STORAGE_KEYS.USERNAME)
  const { axiosInstance, urlWithParams, data, customHeaders } = props || {}

  return await axiosInstance.patch(urlWithParams, data, {
    headers: {
      client_datetime: formatToServerTime(),
      client_user,
      Authorization: `Bearer ${accessToken}`,
      ...customHeaders
    }
  })
}

export const put = async (props: MethodsProps): Promise<AxiosResponse> => {
  const accessToken = getFromLocalStorage(STORAGE_KEYS.ACCESS_TOKEN)
  const client_user = getFromLocalStorage(STORAGE_KEYS.USERNAME)
  const { axiosInstance, urlWithParams, data } = props || {}

  return await axiosInstance.put(urlWithParams, data, {
    headers: {
      client_datetime: formatToServerTime(),
      client_user,
      Authorization: `Bearer ${accessToken}`
    }
  })
}

// New helper for file / blob downloads (does not require changing MethodsProps)
export const getFile = async (
  props: MethodsProps & {
    customClientUser?: string
    includeAuthorization?: boolean
    includeAccept?: boolean
  }
): Promise<AxiosResponse<Blob>> => {
  const accessToken = getFromLocalStorage(STORAGE_KEYS.ACCESS_TOKEN)
  const storedClientUser = getFromLocalStorage(STORAGE_KEYS.USERNAME)
  const {
    axiosInstance,
    urlWithParams,
    customClientUser,
    includeAuthorization = true,
    includeAccept = true
  } = props || {}

  return await axiosInstance.get(urlWithParams, {
    headers: {
      client_datetime: formatToServerTime(),
      client_user: customClientUser ?? storedClientUser,
      ...(includeAuthorization && { Authorization: `Bearer ${accessToken}` }),
      ...(includeAccept && { Accept: 'application/octet-stream' })
    },
    responseType: 'blob'
  })
}

```

## src/shared/constants/actionCodes.ts

```typescript
export const OPERATION_MANAGEMENTE_ACTIONS = {
  EYE_ICON: '079',
  DOWNLOAD_MASSIVE: '078',
  SHOW_DETAIL: '080',
  DOWNLOAD_INDIVIDUAL: '081',
  CUSTODIAN_TRANSFER: '237',
  ASSIGNMENT_CLOSURE: '239'
}

export const OPERATION_DETAIL_ACTIONS = {
  EYE_ICON: '082',
  MODIFY_OPERATION: '083',
  MANAGE_ASSIGNMENT: '238',
  CORRECT_ASSIGNMENT: '253'
}

export const OPERATION_REPORTS_ACTIONS = {
  FILE_LIQUIDATES: '137',
  CORRECTED_OPERATIONS: '138',
  FILE_LIQUIDATES_OPES: '139',
  CORRECTED_OPERATIONS_OPES: '140',
  FILE_DOWNLOAD: '272',
  GENERATE_FILE: '273'
}

export const OPERATION_SHIPPING_CYCLES_ACTIONS = {
  SEND_CYCLE_1: '084',
  SEND_CYCLE_2: '085'
}

export const OPERATION_ACTIONS = {
  EYE_ICON: '079',
  DOWNLOAD_MASSIVE: '078',
  SHOW_DETAIL: '080',
  DOWNLOAD_INDIVIDUAL: '081',
  CUSTODIAN_TRANSFER: '237'
}

export const OPERATION_CUSTODIAN_ACTIONS = {
  ADMIT: '245',
  PREMATCH: '246',
  REJECT: '247',
  SHOW_DETAIL: '275'
}

```

## src/shared/constants/endpoints.ts

```typescript
export const API_ROUTES = {
  GET_SETTLEMENT: (tradeId: number, sideId?: number) =>
    `/settlement?tradeId=${tradeId}&sideId=${sideId}`,
  VALIDATE_COUNTED_OPERATION: (tradeId: number | string) =>
    `/validate/counted-operation/correction/trade/${tradeId}`,

  VALIDATE_REPO_OPERATION: (tradeId: number | string) =>
    `/validate/counted-operation/correction/trade/${tradeId}`,

  VALIDATE_DAYS_ALLOWED: (tradeId: number | string) =>
    `/validate/counted-operation/correction/days-allowed/trade/${tradeId}`,
  VALIDATE_CORRECTION_SETTLEMENT: () => '/settlement-corrections/corrections'
}

export const ENDPOINTS = {
  CUSTODIAN_MANAGMENT: '',
  CYCLE_OPTIONS: `/type`,
  DOWNLOAD_FILE_FTP_SEND: `/dcv/query/download/file/send`,
  DOWNLOAD_FILE_FTP_RESPONSE: `/dcv/query/download/file/response`,
  USERS: `/users`,
  COUNTRY: 'country/nuam',
  OPERATIONS_TYPES: '/type/category/operation',
  OPERATIONS_STATUS: '/status/category/custodian',
  OPERATIONS_PARTICIPANTS: '/participants',
  OPERATIONS_CUSTODIANS: '/participants/custodians',
  PREMATCH_CUSTODY: '/custody-actions/prematch',
  ADMIT_CUSTODY: '/custody-actions/admit',
  ADMIT_CHANGE_ACCOUNT: '/custody-actions/admit',
  REJECT_CUSTODY: '/custody-actions/reject',
  REJECT_CUSTODY_PARTICIPANT: '/custody-actions/package/reject',
  REJECTON_REASON: '/rejection-reason/category/rejected-custody',
  IDENTIFICATION_TYPES: '/identification',
  VALIDATE_ACCOUNT_ASSIGNMENT: ({
    accountNumber,
    tradeId,
    sideId,
    originId
  }: {
    accountNumber: string
    tradeId: number
    sideId: string
    originId: number
  }) =>
    `/validate/counted-fraction/assignment/account-fraction/account-number/${accountNumber}/trade/${tradeId}/side/${sideId}/origin/${originId}`,
  STATUS_CORRECTIONS: '/status/category/REASIGNACION_CORRECCION',
  PACKAGE_CUSTODIAN: '/package-custodian',
  MNEMONIC_SEARCH: '/security-title',
  VALIDATE_ACCOUNT_ASSIGNMENT_PACKAGES: ({
    accountNumber,
    packageCustodianId
  }: {
    accountNumber: string
    packageCustodianId: number
  }) =>
    `/package-custodian/custody/account-custody/account-number/${accountNumber}/package-custodian/${packageCustodianId}`
}

```

## src/shared/constants/enviroment.ts

```typescript
export const DEVELOPMENT_MODE = 'development'
export const NODE_ENV = import.meta.env.VITE_NODE_ENV || ''

```

## src/shared/constants/index.ts

```typescript
export const USER_TYPES = {
  INTERNAL: 'INTERNAL',
  EXTERNAL: 'EXTERNAL'
}

export const HTTP_CODES = {
  UNAUTHORIZED: 401,
  SERVER_ERROR: 500,
  NOT_FOUND: 404
}

export const COUNTRY_IDS = {
  COLOMBIA: 37
}

export const PARTICIPANTS_TYPES = {
  CUSTODIAN: 'CUSTODIO'
}

```

## src/shared/constants/initialFraction.ts

```typescript
import { FieldsAssignment } from '../../features/operations-management/constants/fieldsAssignment'
import { Fraction } from '../../features/operations-management/hooks/useStateFraction'

export const initialFraction: Partial<Fraction> = {
  [FieldsAssignment.administrator]: null,
  [FieldsAssignment.amount]: 0,
  [FieldsAssignment.cashAccount]: { value: '' },
  [FieldsAssignment.commissionPercentage]: '0%',
  [FieldsAssignment.commission]: 0,
  [FieldsAssignment.impCommission]: 0,
  [FieldsAssignment.netAmount]: 0,
  [FieldsAssignment.quantity]: { value: 0 },
  [FieldsAssignment.reference]: '',
  [FieldsAssignment.returnAmount]: 0,
  [FieldsAssignment.source]: { label: '', value: '' },
  [FieldsAssignment.custodian]: null,
  [FieldsAssignment.account]: { value: '' },
  [FieldsAssignment.id]: null,
  [FieldsAssignment.valTax]: 0
}

```

## src/shared/constants/nodeEnv.ts

```typescript
export const NODE_ENV = {
  DEVELOPMENT: 'development',
  PRODUCTION: 'production'
}

```

## src/shared/constants/storageKeys.ts

```typescript
/**
 * Enum-like object containing all localStorage key names used in the application.
 * Centralizing these keys helps prevent typos and makes refactoring easier.
 */
const STORAGE_KEYS = Object.freeze({
  USERNAME: 'username',
  ACCESS_TOKEN: 'access_token'
})

export default STORAGE_KEYS

```

## src/shared/hooks/useFilterBarConfig.ts

```typescript
import { useEffect, useMemo, useRef } from 'react'

import type { FilterConfig } from '@/features/shipping-cycles/types'

import { useUrlParams } from './useUrlParams'

/**
 * A single rule that drives a FilterBar field's disabled state and default value.
 *
 * @template TValue - The shape of the default value for this field.
 *
 * @example
 * // Custodian field: disabled + pre-filled when the user IS a custodian
 * { name: 'custodianId', condition: isCustodianUser, defaultValue: { id: participantId, label: '...' } }
 *
 * // Participant field: disabled + pre-filled when the user IS external
 * { name: 'participantId', condition: !isInternalUser, defaultValue: { id: participantId, label: '...' } }
 */
export interface FieldRule<TValue = unknown> {
  /** Name of the filter field (must match the `name` in FilterConfig). */
  name: string
  /**
   * When `true`: the field is disabled and `defaultValue` is applied.
   * When `false`: the field is enabled and no default is applied.
   */
  condition: boolean
  /**
   * Value set as the field default when `condition` is `true`.
   * For autocomplete fields use `{ id, label }`.
   * For select/text fields use a plain string or number.
   */
  defaultValue?: TValue
}

export interface FilterBarConfigResult {
  /** Object to pass directly to FilterBar's `defaultValues` prop. */
  defaultValues: Record<string, unknown>
  /**
   * Pure function that patches a FilterConfig array, applying `disabled`
   * based on each matching rule. Call it inside a `useMemo` together with
   * the original `getFiltersConfig()` result.
   */
  patchFilters: (filters: FilterConfig[]) => FilterConfig[]
}

/**
 * Generic hook that manages FilterBar default values, disabled states and URL
 * param synchronisation based on a set of declarative field rules.
 *
 * **Rules must be stable (memoized) to avoid unnecessary effect runs.**
 *
 * @param rules - Array of FieldRule objects. Wrap with `useMemo` at the call-site.
 * @returns `defaultValues` for FilterBar and `patchFilters` to disable/enable fields.
 *
 * @example
 * const rules = useMemo<FieldRule[]>(() => [
 *   {
 *     name: 'custodianId',
 *     condition: isCustodianUser,
 *     defaultValue: participantId ? { id: participantId, label: String(participantId) } : undefined,
 *   },
 * ], [isCustodianUser, participantId])
 *
 * const { defaultValues, patchFilters } = useFilterBarConfig(rules)
 *
 * const filtersConfig = useMemo(
 *   () => patchFilters(getFiltersConfig(isInternalUser, tFilters)),
 *   [isInternalUser, tFilters, patchFilters]
 * )
 */
export const useFilterBarConfig = (
  rules: FieldRule[]
): FilterBarConfigResult => {
  const { updateParam } = useUrlParams()

  /**
   * Keep a ref to the latest updateParam so the sync effect below does not
   * need it as a dependency. This prevents the effect from re-running every
   * time the URL changes (which can happen if setSearchParams is unstable in
   * the project's react-router version).
   */
  const updateParamRef = useRef(updateParam)
  useEffect(() => {
    updateParamRef.current = updateParam
  })

  /**
   * Build the `defaultValues` map.
   * Only fields whose `condition` is `true` and have a `defaultValue` are included.
   */
  const defaultValues = useMemo(
    () =>
      rules.reduce<Record<string, unknown>>((acc, rule) => {
        if (rule.condition && rule.defaultValue !== undefined) {
          acc[rule.name] = rule.defaultValue
        }
        return acc
      }, {}),
    [rules]
  )

  /**
   * Sync URL params only for rules where condition is TRUE (locked defaults).
   * Rules with condition=false are intentionally ignored — those fields are
   * freely controlled by the user via FilterBar and must never be cleared here.
   * The effect only re-runs when the rules themselves change (condition flips
   * or defaultValue changes), not on every user filter interaction.
   */
  useEffect(() => {
    rules
      .filter((rule) => rule.condition && rule.defaultValue !== undefined)
      .forEach((rule) => {
        updateParamRef.current(rule.name, rule.defaultValue)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rules])

  /**
   * Return a stable patching function that applies the `disabled` flag to each
   * matching filter. Fields not covered by any rule are returned unchanged.
   */
  const patchFilters = useMemo(
    () =>
      (filters: FilterConfig[]): FilterConfig[] =>
        filters.map((filter) => {
          const rule = rules.find((r) => r.name === filter.name)
          if (!rule) return filter
          return { ...filter, disabled: rule.condition }
        }),
    [rules]
  )

  return { defaultValues, patchFilters }
}

```

## src/shared/hooks/useGenerateLogs.ts

```typescript
import { useSelector } from 'react-redux'

import { RootState } from 'remoteShell/mf-store'
import { GenerateLogs } from 'remoteUtilities/components-mf-utilities'

const useGenerateLogs = () => {
  const client_user = localStorage.getItem('username')
  const {
    id: id_user_nubo,
    participantId,
    country,
    status
  } = useSelector((state: RootState) => state.auth.infoUserNubo)

  const generateLogs = ({
    actionDestination,
    actionType,
    statusID
  }: {
    actionType: string
    actionDestination: string
    statusID?: string
  }) => {
    GenerateLogs(client_user!, {
      actionType,
      actionDestination,
      countryId: country.id,
      participantId: participantId,
      statusId: statusID ?? status.id,
      userNuboId: id_user_nubo
    })
  }
  return { generateLogs }
}

export default useGenerateLogs

```

## src/shared/hooks/useIsInternalUser.ts

```typescript
import { useSelector } from 'react-redux'

import { USER_TYPES } from '../constants'
import { getUserInfo } from '../utils/getInfoUser'

const useIsInternalUser = () => {
  const { userType } = useSelector(getUserInfo)
  const isInternalUser = userType === USER_TYPES.INTERNAL

  return { isInternalUser, userType }
}

export default useIsInternalUser

```

## src/shared/hooks/useParticipantIsCustodioan.ts

```typescript
import { useSelector } from 'react-redux'

import { PARTICIPANTS_TYPES } from '../constants'
import { getUserInfo } from '../utils/getInfoUser'

const useParticipantIsCustodian = () => {
  const { participantType } = useSelector(getUserInfo)
  const isCustodianUser =
    participantType?.description === PARTICIPANTS_TYPES.CUSTODIAN

  return { isCustodianUser, participantType }
}

export default useParticipantIsCustodian

```

## src/shared/hooks/usePendingAdmissions.ts

```typescript
import { useState, useEffect, useCallback, useRef } from 'react'

import {
  hasPendingAdmissions,
  type IPendingAdmissionsParams
} from '@/features/operations-management/services/folioTransferService'

export interface IUsePendingAdmissionsOptions {
  /** Parámetros para la consulta de admisiones pendientes */
  params: IPendingAdmissionsParams
  /** Si se debe verificar automáticamente al montar el componente */
  autoCheck?: boolean
  /** Callback cuando el usuario cierra o confirma la alerta */
  onContinue?: () => void
  /** Habilitar o deshabilitar la verificación */
  enabled?: boolean
}

export interface IUsePendingAdmissionsReturn {
  /** Si la alerta debe mostrarse */
  showAlert: boolean
  /** Si está cargando la verificación */
  isLoading: boolean
  /** Si hay admisiones pendientes */
  hasPending: boolean
  /** Error si ocurrió alguno */
  error: string | null
  /** Función para cerrar la alerta */
  closeAlert: () => void
  /** Función para verificar manualmente */
  checkPendingAdmissions: () => Promise<void>
  /** Función para manejar el click en continuar */
  handleContinue: () => void
}

/**
 * Hook para gestionar la verificación y alerta de admisiones pendientes
 * @param options Opciones de configuración
 * @returns Estado y funciones para gestionar la alerta
 */
export const usePendingAdmissions = (
  options: IUsePendingAdmissionsOptions
): IUsePendingAdmissionsReturn => {
  const { params, autoCheck = true, onContinue, enabled = true } = options

  const [showAlert, setShowAlert] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [hasPending, setHasPending] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Track if we've already checked to prevent multiple calls
  const hasCheckedRef = useRef(false)
  // Store params in ref to avoid dependency issues
  const paramsRef = useRef(params)
  paramsRef.current = params

  const checkPendingAdmissions = useCallback(async () => {
    if (!enabled) return

    setIsLoading(true)
    setError(null)

    try {
      const pending = await hasPendingAdmissions(paramsRef.current)
      setHasPending(pending)
      setShowAlert(pending)
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Error al verificar admisiones'
      setError(errorMessage)
      console.error('Error checking pending admissions:', err)
    } finally {
      setIsLoading(false)
    }
  }, [enabled])

  const closeAlert = useCallback(() => {
    setShowAlert(false)
  }, [])

  const handleContinue = useCallback(() => {
    setShowAlert(false)
    onContinue?.()
  }, [onContinue])

  // Only run once on mount when autoCheck is true and enabled
  useEffect(() => {
    if (autoCheck && enabled && !hasCheckedRef.current) {
      hasCheckedRef.current = true
      checkPendingAdmissions()
    }
  }, [autoCheck, enabled, checkPendingAdmissions])

  return {
    showAlert,
    isLoading,
    hasPending,
    error,
    closeAlert,
    checkPendingAdmissions,
    handleContinue
  }
}

```

## src/shared/hooks/useRejectionAlert.ts

```typescript
import { useState, useCallback } from 'react'

export interface IRejectedItem {
  id: string | number
  [key: string]: any
}

export interface IRejectionAlertState {
  isOpen: boolean
  rejectedItems: IRejectedItem[]
  message: string
}

export const useRejectionAlert = () => {
  const [alertState, setAlertState] = useState<IRejectionAlertState>({
    isOpen: false,
    rejectedItems: [],
    message: ''
  })

  const showRejectionAlert = useCallback(
    (rejectedItems: IRejectedItem[], message?: string) => {
      setAlertState({
        isOpen: true,
        rejectedItems,
        message:
          message || 'Los siguientes registros no pudieron ser procesados'
      })
    },
    []
  )

  const hideRejectionAlert = useCallback(() => {
    setAlertState({
      isOpen: false,
      rejectedItems: [],
      message: ''
    })
  }, [])

  return {
    alertState,
    showRejectionAlert,
    hideRejectionAlert
  }
}

```

## src/shared/hooks/useTranslate.ts

```typescript
import { useTranslation, type UseTranslationOptions } from 'react-i18next'

const keyTranslation = 'operaciones'
const useTranslate = (options?: UseTranslationOptions<string>) => {
  const { t } = useTranslation(keyTranslation, options)
  return { t }
}

export default useTranslate

```

## src/shared/hooks/useUrlParams.ts

```typescript
import { useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'

export const useUrlParams = () => {
  const [params, setParams] = useSearchParams()

  const updateParam = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (name: string, value: any) => {
      setParams(
        (prevParams) => {
          const params = new URLSearchParams(window.location.search)
          const queryObject = Object.fromEntries(params.entries())
          const newParams = new URLSearchParams({
            ...prevParams,
            ...queryObject
          })

          if (value) {
            const paramValue =
              typeof value === 'object' && value.id ? value.id : value
            newParams.set(name, paramValue)
          } else {
            newParams.delete(name)
          }
          return newParams
        },
        { replace: true }
      )
    },
    [setParams]
  )

  const getParam = useCallback(
    (name: string): string | null => {
      return params.get(name)
    },
    [params]
  )

  return { updateParam, getParam, params }
}

```

## src/shared/routes/index.ts

```typescript
export const ROUTES: Record<string, `/${string}`> = Object.freeze({
  ROOT: '/',
  SETTLEMENT_FILE: '/settlement-file',
  OPERATIONS: '/operation',
  OPERATIONS_MANAGEMENT: '/operation-management',
  REPORTS: '/reports',
  SHIPPING_CYCLES: '/shipping-cycles',
  CUSTODIAN_MANAGEMENT: '/custodian-management',
  HOME: '/home',
  CUSTODIAN_MANAGEMENT_DETAILS: '/custodian-management/details',
  CUSTODIAN_REPORTS: '/custodians-reports'
})

export const SUBROUTES = Object.freeze({
  OPERATION_BY_ID: (tradeId: number) =>
    `${ROUTES.OPERATIONS_MANAGEMENT}${ROUTES.OPERATIONS}/${tradeId}`,
  OPERATION_FULL_VIEW_BENEFICIARIES: (tradeId: string) =>
    `${ROUTES.OPERATIONS}/${tradeId}/full-view-beneficiaries`,
  OPERATION_FULL_VIEW_BENEFICIARIES_WITH_PARAMS: (
    tradeId: string,
    option: string,
    activeTab?: number
  ) =>
    `${ROUTES.OPERATIONS_MANAGEMENT}${ROUTES.OPERATIONS}/${tradeId}/full-view-beneficiaries?tradeId=${tradeId}&tab=${activeTab}&label=${option}`,
  OPERATION_CUSTODIAN_BY_ID: (packageNumber: number) =>
    `${ROUTES.OPERATIONS_MANAGEMENT}${ROUTES.CUSTODIAN_MANAGEMENT_DETAILS}/${packageNumber}`
})

```

## src/shared/services/getOperationStatus.ts

```typescript
import { httpFilterParameters } from 'remoteShell/mf-axiosConfig'

import { get } from '../config/methods'
import { ENDPOINTS } from '../constants/endpoints'
import isDevMode from '../utils/isDevMode'

interface OperationStatusContent {
  id: number
  description: string
  category: string
  detail: string
}

export const getOperationStatus = async () => {
  const urlWithParams = `${ENDPOINTS.OPERATIONS_STATUS}`
  try {
    const { data } = await get({
      axiosInstance: httpFilterParameters,
      urlWithParams
    })
    console.log('🚀 ~ getOperationStatus ~ data:', data)
    return data.map((item: OperationStatusContent) => ({
      id: item.id,
      name: item.description
    }))
  } catch (error) {
    if (isDevMode()) {
      console.error('Error getting operation status:', error)
    }
    throw error
  }
}

```

## src/shared/services/getOperationsTypes.ts

```typescript
import { httpFilterParameters } from 'remoteShell/mf-axiosConfig'

import { get } from '../config/methods'
import { ENDPOINTS } from '../constants/endpoints'
import isDevMode from '../utils/isDevMode'

interface OperationTypesContent {
  id: number
  description: string
  category: string
  detail: string
}

export const getOperationsTypes = async () => {
  const urlWithParams = `${ENDPOINTS.OPERATIONS_TYPES}`
  try {
    const { data } = await get({
      axiosInstance: httpFilterParameters,
      urlWithParams
    })
    return data.map((item: OperationTypesContent) => ({
      id: item.id,
      name: item.description
    }))
  } catch (error) {
    if (isDevMode()) {
      console.error('Error getting operation types:', error)
    }
    throw error
  }
}

```

## src/shared/services/getStatusCorrection.ts

```typescript
import { httpFilterParameters } from 'remoteShell/mf-axiosConfig'

import { get } from '../config/methods'
import { ENDPOINTS } from '../constants/endpoints'

export const getStatusCorrection = async () => {
  const res = await get({
    axiosInstance: httpFilterParameters,
    urlWithParams: ENDPOINTS.STATUS_CORRECTIONS
  })
  return res.data
}

```

## src/shared/services/index.ts

```typescript
import {
  httpInvestor,
  // httpOperations,
  httpOperationsConsultFolios,
  httpOperationsQuery,
  httpReceipts
} from 'remoteShell/mf-axiosConfig'

import { API_ROUTES_SETTLEMENT_FILE } from '@/features/settlement-file/constants/endpoints'

import { IReportOperation, ITradeHistory } from '@/shared/types'
import { handleRequest } from '@/shared/utils/handleRequest'
import { buildCustomHeaders } from '@/shared/utils/headerServices'

export const getInvestorAccountDetails = async (
  client_user: string | null,
  investorAccountId: string | number
): Promise<any[]> => {
  const headers = await buildCustomHeaders({ client_user: client_user ?? '' })
  return await handleRequest(
    () =>
      httpInvestor.get(
        API_ROUTES_SETTLEMENT_FILE.INVESTOR_ACCOUNT_DETAILS(investorAccountId),
        { headers }
      ),
    'Error fetching investor details:'
  )
}

export const getTradeHistory = async (
  client_user: string | null,
  tradeId: string | undefined
): Promise<ITradeHistory> => {
  const headers = await buildCustomHeaders({ client_user: client_user ?? '' })
  return handleRequest(
    () =>
      httpOperationsConsultFolios.get(
        API_ROUTES_SETTLEMENT_FILE.TRADE_HISTORY(tradeId || ''),
        { headers }
      ),
    'Error getting trade history:'
  )
}

export const getTradesDetails = async (
  tradeId: string | undefined,
  client_user: string | null
) => {
  const headers = await buildCustomHeaders({ client_user: client_user ?? '' })
  return handleRequest(
    () =>
      httpOperationsQuery.get(
        API_ROUTES_SETTLEMENT_FILE.ALL_TRADE_BY_ID(tradeId || ''),
        { headers }
      ),
    'Error fetching user information:'
  )
}

export const reportOperations = async (
  client_user: string | null,
  tradeId: string,
  sideId: string[] | undefined
) => {
  const headers = await buildCustomHeaders({ client_user: client_user ?? '' })

  return handleRequest(
    () =>
      httpReceipts.post<IReportOperation[]>(
        API_ROUTES_SETTLEMENT_FILE.REPORT_OPERATIONS(tradeId || ''),
        sideId,
        { headers }
      ),
    'Error getting report operations:'
  )
}

```

## src/shared/services/operationValidations.ts

```typescript
import { httpOperationsQuery } from 'remoteShell/mf-axiosConfig'

import { API_ROUTES } from '@/shared/constants/endpoints'
import { buildCustomHeaders } from '@/shared/utils/headerServices'
import isDevMode from '@/shared/utils/isDevMode'

export const validateTypeCounted = async (
  client_user: string | null,
  tradeId: number | string
): Promise<boolean> => {
  try {
    const response = await httpOperationsQuery.get(
      API_ROUTES.VALIDATE_COUNTED_OPERATION(tradeId),
      {
        headers: await buildCustomHeaders({ client_user: client_user ?? '' })
      }
    )
    return response.data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error validation counted:', error)
    }
    throw error
  }
}

export const validateTypeRepo = async (
  client_user: string | null,
  tradeId: number | string
): Promise<boolean> => {
  try {
    const response = await httpOperationsQuery.get(
      API_ROUTES.VALIDATE_REPO_OPERATION(tradeId),
      {
        headers: await buildCustomHeaders({ client_user: client_user ?? '' })
      }
    )
    return response.data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error validation repo:', error)
    }
    throw error
  }
}

export const validationDays = async (
  client_user: string | null,
  tradeId: number | string
): Promise<boolean> => {
  try {
    const httpClient = httpOperationsQuery

    const response = await httpClient.get(
      API_ROUTES.VALIDATE_DAYS_ALLOWED(tradeId),
      {
        headers: await buildCustomHeaders({ client_user: client_user ?? '' })
      }
    )
    return response.data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error validation days:', error)
    }
    throw error
  }
}

```

## src/shared/types/Alerts.d.ts

```typescript
import { ModalAlertProps, ModalContentProps, ToastProps } from './declares'

export interface ModalContentState extends ModalContentProps {
  open?: boolean
}
export interface ModalAlertState extends ModalAlertProps {
  open?: boolean
}

export interface ToastState extends ToastProps {
  open?: boolean
}

```

## src/shared/types/InvestorAccount.d.ts

```typescript
import {
  AccountValidationCountry,
  AccountValidationIdentificationType,
  AccountValidationStatus
} from '@/features/custodians/types/validationsAccountCommon'

export interface AccountValidationInvestor {
  id: number
  code: string
  firstName: string
  lastName: string
  companyName: string
  type: AccountValidationStatus
  status: AccountValidationStatus
  country: AccountValidationCountry
  documentNumber: string
  identificationType: AccountValidationIdentificationType
  nationality: string
  clearinghouseCode: string
  gics: {
    id: number
    description: string
  }
  moneyLaunderingFlag: boolean
  taxStatus: {
    id: number
    description: string
  }
}

export interface AccountValidationInvestorAccount {
  id: number
  investor: AccountValidationInvestor
  accountNumber: string
  status: AccountValidationStatus
  originType: AccountValidationStatus
  type: AccountValidationStatus
  depository: {
    id: string
    description: string
  }
  participant: AccountValidationParticipant
}

```

## src/shared/types/common.d.ts

```typescript
export interface CommonResponseAutoComplete<T> {
  pageNumber: number
  pageSize: number
  totalElements: number
  totalPages: number
  content: T
}

export interface CommonResponseList<T> {
  pageNumber: number
  pageSize: number
  totalElements: number
  totalPages: number
  content: T[]
}

```

## src/shared/types/declares.d.ts

```typescript
import { ReactNode } from 'react'

export interface CalendarRangeProps {
  onDateChange?: (date: { from?: Date; to?: Date }) => void
}

export interface SidePanelProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children?: React.ReactNode
}

export interface NewTableProps {
  columns: Column[]
  data: any[]
  headerActions?: Action[]
  placeholderSearch?: string
  onAction?: (action: Action) => void
  getData?: (data: []) => void
  rowsPerPageOptions?: number[]
  renderPagination?: (props: PaginationProps) => JSX.Element
  filtersClear?: boolean
  filtersPanelOpen?: (value: boolean) => void
}

export interface DataGridBasicProps {
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

export interface InputFieldProps {
  label: string
  variant: 'outlined' | 'filled' | 'standard'
  size?: 'small' | 'medium'
  className?: string
  onChange?: (value: string) => void
  onKeyDown?: (
    event: React.KeyboardEvent<HTMLInputElement>,
    value: string
  ) => void
}
export interface ModalContentProps {
  className?: string
  children?: ReactNode
  handleClose?: (arg: boolean) => void
  handleAccept?: () => void
  title?: string
  description?: string
  btnAceptText?: string
  btnCancelText?: string
  ItShouldHaveButtons?: boolean
}

export interface CounterState {
  value: number
}
export interface StepperProps {
  active: number
}
export interface InputProps {
  label: string
  id: string
  type: string
}

export interface ModalLoadProps {
  reset: () => void
  progress: number
  message: string
  fileName: string
  closeButtonText?: string
}

export interface ButtonProps {
  name: string
  onClick: () => void
  type?: 'button' | 'submit' | 'reset'
  size?: 'small' | 'medium' | 'large'
  variant?: 'primary' | 'secondary' | 'outline'
  disabled?: boolean
  className?: string
}

interface Option {
  label: string
  value: string | number | boolean
}

export interface SelectProps {
  options: Option[] | { options: Option[] }
  onChange: (value: string | number | boolean) => void
  value: string | number | boolean
  error?: string
  className?: string
  placeholder?: string
  width?: string
}

export interface FilterSelectProps {
  label: string
  options: Option[] | { options: Option[] }
  required: boolean
  onChange: (label: string, value: string | number | boolean) => void
  value: string | number | boolean
  error?: string
  className?: string
  placeholder?: string
  width?: string
}

export interface HeaderProps {
  title: string
  user: string
  onClick: () => void
}

export interface InfoLabelsProps {
  info: { label: string; value: string }[]
  title?: string
}

export interface TableProps {
  data: { perfil: string; alcance: string }[]
}

export interface DataTableProps {
  title: string
  data: Array<{ [key: string]: any }>
  columns: Array<{ header: string; accessor: string }>
}

export interface ModalProps {
  children?: React.ReactNode
  disabled?: boolean
  handleClose: () => void
  showAcceptButton?: boolean
  handleAccept?: () => void
  closeButtonText?: string
  acceptButtonText?: string
}

export interface ModalWindowProps {
  title: string
  message: string // El mensaje puede contener HTML
  variant?: 'success' | 'error' | 'warning'
  textSuccess?: string
  textCancel?: string
  handleCancel?: () => void
  onClick: () => void
}

interface Column {
  name: string
  width: number
  render?: (row: any) => JSX.Element
}

interface Action {
  label: string
  type: string
  url?: string
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
  onAction?: (action: Action) => void
  rowsPerPageOptions?: number[]
  renderPagination?: (props: PaginationProps) => JSX.Element
}

export interface ToggleProps {
  checked: boolean
  onChange: () => void
  className?: string
}

export interface ModalAlertProps {
  title: string
  message: string
  variant?: 'success' | 'error' | 'warning' | 'delete'
  textSuccess?: string
  textCancel?: string
  handleCancel?: () => void
  onClick: () => void
  className?: string
  children?: React.ReactNode
  orientation?: 'horizontal' | 'vertical'
  showIconClose?: boolean
  onIconClose?: () => void
}

export interface ToastProps {
  text: string
  duration?: number
  onClose: () => void
  variant?: 'success' | 'error' | 'warning' | 'info'
}

export interface ContentWrapperProps {
  children: React.ReactNode
  title: string
  actionBack?: () => void
  width?: string
  textSize?: string
  className?: string
}

export interface TooltipProps {
  message: string
  children: React.ReactNode
}

export interface BoxInfoProps {
  columns: Array<{
    title: string
    rows: Array<{
      label: string
      value: string | number
    }>
  }>
}

interface Tab {
  label: string
  content: React.ReactNode
}

export interface TabComponentProps {
  tabs: Tab[]
  children?: React.ReactNode
}

export interface ModalLoadProps {
  reset: () => void
  progress: number
  message: string
  fileName: string
  closeButtonText?: string
}

export interface TabsProps {
  contentSettlement: {
    content: React.ReactNode
  }
  contentReceipts?: React.ReactNode
  contentCorrectedOperations?: React.ReactNode
}

export interface FilterBarProps {
  config: any
}

export interface IDropdown {
  title: string
  options: string[]
  onSelect?: (option: string) => void
  disabled: boolean
}

```

## src/shared/types/index.d.ts

```typescript
export interface IReportOperation {
  settlement: Settlement
  trade: Trade
  securityTitle: SecurityTitle
  investor: Investor
  participantBuy: Participant
  participantSell: Participant
  userName: string
  observations: null
  participant: Participant
}

export interface Investor {
  fullName: string
  documentNumber: string
  identificationType: documentType
  taxStatus: TaxStatus
}
export interface Participant {
  fullName: string
  documentNumber: string
  identificationType: documentType
  taxStatus: TaxStatus
}

export interface documentType {
  description: string
  id: number
  code: string
}

export interface TaxStatus {
  id: number
  description: string
}

export interface Participant {
  code: string
  documentNumber: string
  name: string
  type: TaxStatus
  taxStatus: TaxStatus
}

export interface SecurityTitle {
  id: number
  mnemonic: string
  equityCode: string
}

export interface Settlement {
  fraction: number
  side: Side
  fractionQuantity: number
  fractionVolume: number
  commissionPercentage: number
  commissionAmount: number
  valTaxAmount: number
  netAmount: number
  repoAmount: number
  outFlowTurnoverValue: number
  returnTurnoverValue: number
  brokerageService: number
  deliveryVersusPaymentValue: number
  latePenalty: number
  repoRate: number
  netValTax: number
  issuedReceiptNumber: string
  issuedReceipt: boolean
  issuedReceiptNumberPrevious: string
}

export interface Side {
  id: string
  description: string
}

export interface Trade {
  id: number
  matchDate: Date
  matchId: number
  clearingDate: Date
  depository: Depository
  type: TaxStatus
  fractionalMarkBuy: boolean
  fractionalMarkSell: boolean
  price: number
  repurchaseRate: number
  currency: Currency
  tradingSystem: TaxStatus
  repurchaseAgreementDate: Date
  daysToSettlement: number
  businessType: TaxStatus
  marketType: TaxStatus
}

export interface Currency {
  name: string
}

export interface Depository {
  id: string
  description: string
}

export interface ITradeHistory {
  tradeId: number
  matchDate: Date
  matchId: number
  trackingTrade: SettlementHistory[]
}

export interface ErrorResponse {
  response?: {
    data?: {
      httpCode?: string
      errorCode?: string
      errorMessageDetail?: string
    }
    status?: number
  }
}

export interface Country {
  id: number
  code: string
  name: string
  currency: Currency
  timeZone: string
}

export interface FormData {
  cuenta: string
  referencia: string
  cantidad: string
  comision: string
}
export interface BusinessType {
  id: number
  description: string
  category: string
  shortName?: string
}

```

## src/shared/types/methods.ts

```typescript
import type { AxiosInstance } from 'axios'

export type MethodsProps = {
  axiosInstance: AxiosInstance
  data?: any // eslint-disable-line @typescript-eslint/no-explicit-any
  urlWithParams: string
  params?: any
  customHeaders?: Record<string, string>
}

```

## src/shared/types/participant.d.ts

```typescript
import type {
  SecurityTitle,
  BusinessType,
  Country,
  Depository
} from '@/features/settlement-file/types'

export interface Participant {
  id: number
  code: string
  firstName: string
  name: string
  shortName: string
  type: BusinessType
  mnemonic: string
  country: Country
  registrationDate: Date
  taxCode: string
  department: Depository
  mainAddress: string
  webPage: string
  phoneNumber: string
  status: BusinessType
  nitClearingHouse: string
  taxStatus: string
  typeEntity: string
  marginAccount: string
  directAllocation: string
  marketMaker: string
  enabled: boolean
  masterAccount: string
  documentNumber?: string
  identificationType?: BusinessType
  custodian?: boolean
  securityTitle: SecurityTitle
}

export interface ParticipantShort {
  id: number
  name: string
  code: string
  codeName: string
}

```

## src/shared/types/participantAccount.d.ts

```typescript
import type { AccountValidationStatus } from '@/features/custodians/types/validationsAccountCommon'

import type { Participant } from './participant'

export interface AccountValidationParticipantAccount {
  id: number
  participant: Participant
  accountNumber: string
  status: AccountValidationStatus
  type: AccountValidationStatus
  originType: AccountValidationStatus
}

```

## src/shared/types/settlement.d.ts

```typescript
import { type MilaDirectDepository } from '@/features/operations-management/types/responseValidateAccount'

import { type BusinessType, type Side } from '.'
import { type Participant } from './participant'

interface Account {
  id: number
  participant: Participant
  investor: Participant & { lastName: string; companyName: string }
  accountNumber: string
  accountName: string | null
  taxExemp?: boolean | null
  status: BusinessType
  type: BusinessType
  originType: BusinessType
}
interface Administrator extends BusinessType {
  code: string
}
export interface Settlement {
  tradeId: number
  fraction: number
  side: Side
  investor: null
  investorAccount?: Account
  participantAccount?: Account
  fractionQuantity: number
  fractionVolume: number
  fiduciarySpecialist: boolean
  commissionPercentage: number
  commissionAmount: number
  valTax: number
  valTaxAmount: number
  withholdingTax: number | null
  withholdingTaxAmount: number | null
  netAmount: number
  amount: number
  transferValue: number | null
  issuedReceipt: null
  issuedReceiptNumber: null
  referenceAllocId: null
  repoAmount: null
  fundingAmount: null
  netOutFlowTotal: null
  outFlowTurnoverValue: null
  returnTurnoverValue: null
  deliveryVersusPaymentValue: null
  settlementAmount: number
  tradingSystem: {
    id: number
    description: string
  }
  status: BusinessType
  brokerageService: null
  custodianId: number
  custodian: Participant
  custodianStatus: BusinessType
  bankAccountId: null | number
  reference: string
  capitalGainValue: null | number
  disbursementValue: null | number
  sourceQuoteType: BusinessType
  ficAdministrator: Administrator
  directDepositor: Participant | null
  jointAccount: null
  masterAccount: null
  participantBankAccount: null
  cashAccount: null
  returnAmount?: number
  isEditable?: boolean
  isPreloadedLocalAccount?: boolean
  milaDirectDepositor: MilaDirectDepository | null
  referencePackage?: string
}

```

## src/shared/types/trade.d.ts

```typescript
import { CountryOption } from '@/features/operations-management/types/country'
import { BusinessType, Depository } from '@/features/settlement-file/types'

export interface ITrades {
  id: number
  matchDate: Date
  matchId: number
  clearingDate: Date
  returnClearingDate: Date
  depository: Depository
  country: CountryOption
  type: BusinessType
  market: Depository
  securityTitle: SecurityTitle
  participantBuy: CustodianSell
  participantSell: CustodianSell
  custodianBuy: null
  custodianSell: CustodianSell
  assignmentMarkBuy: boolean
  assignmentMarkSell: boolean
  fractionalMarkBuy: boolean
  fractionalMarkSell: boolean
  advanceStatus: number
  exitIndicatorSettlement: boolean
  returnIndicatorSettlement: boolean
  canceledStatus: boolean
  quantity: number
  price: number
  volume: number
  isin: string
  repurchaseRate: number
  repurchaseAmount: number
  status: BusinessType
  matchTime: Date
  ownPositionSell: boolean
  ownPositionBuy: boolean
  currency: Currency
  tradingSystemId: number
  tradingSessionId: string
  repurchaseAgreementDate: Date
  daysToSettlement: number
  repoRate: number
  repoAmount: number
  fundingAmount: number
  netOutFlowTotal: number
  outFlowTurnOverValue: number
  totalNetReturn: number
  returnTurnoverValue: number
  deliveryVersusPaymentValue: number
  reallocationIndicator: boolean
  businessType: BusinessType
  marketType: BusinessType
  originType: BusinessType
  sourceQuoteSellType: BusinessType
  sourceQuoteBuyType: BusinessType
}

```

## src/shared/utils/ErrorBoundary.tsx

```tsx
import { Component, ErrorInfo, ReactNode } from 'react'

import isDevMode from './isDevMode'

interface ErrorBoundaryState {
  hasError: boolean
}

interface ErrorBoundaryProps {
  children: ReactNode
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    if (isDevMode()) {
      console.log('Derived Error', error)
    }

    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    if (isDevMode()) {
      console.log('Error Info: ', errorInfo)
      console.log('Error: ', error)
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="mx-auto mt-8 w-2/4">
          <div className="rounded-md border border-red-200 bg-red-50 p-4">
            <h3 className="text-lg font-medium text-red-800">
              Módulo no disponible
            </h3>
            <p className="mt-2 text-sm text-red-700">
              Este componente no está disponible en este momento. Por favor,
              intente nuevamente más tarde.
            </p>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary

```

## src/shared/utils/downloadFileReport.ts

```typescript
import type { TFunction } from 'i18next'

import { downloadReportFile } from '@/features/reports/services/report'

export type GenerateLogsFn = (params: {
  actionType: string
  actionDestination: string
  statusID?: string
}) => void

export const forceFileExtension = (
  fileName: string,
  extension: string
): string => {
  const suffix = `.${extension}`
  if (fileName.toLowerCase().endsWith(suffix)) return fileName
  const lastDotIndex = fileName.lastIndexOf('.')
  return lastDotIndex !== -1
    ? `${fileName.substring(0, lastDotIndex)}${suffix}`
    : `${fileName}${suffix}`
}

export const keepOriginalFileName = (fileName: string): string => fileName

export const downloadFileReport = async ({
  fileId,
  setIsDownloading,
  setDownloadToast,
  t,
  generateLogs,
  actionType,
  logOnError = false,
  formatFileName = (fileName: string) => forceFileExtension(fileName, 'dat')
}: {
  fileId: number
  setIsDownloading: (isDownloading: boolean) => void
  setDownloadToast: (toast: {
    open: boolean
    variant: 'success' | 'error'
    message: string
  }) => void
  t: TFunction<'report', string>
  generateLogs: GenerateLogsFn
  actionType: string
  logOnError?: boolean
  formatFileName?: (fileName: string) => string
}) => {
  if (!fileId) return
  try {
    setIsDownloading(true)
    const { blob, fileName, mimeType } = await downloadReportFile(fileId)
    let finalBlob = blob
    const looksLikeText =
      (mimeType && /text|csv/.test(mimeType)) ||
      fileName.toLowerCase().endsWith('.csv')
    if (looksLikeText) {
      const ab = await blob.arrayBuffer()
      const latin1Text = new TextDecoder('latin1').decode(ab)
      if (/Ã./.test(latin1Text)) {
        finalBlob = new Blob([latin1Text], {
          type: 'text/csv;charset=utf-8'
        })
      }
    }

    const finalFileName = formatFileName(fileName)

    const url = URL.createObjectURL(finalBlob)
    const a = document.createElement('a')
    a.href = url
    a.download = finalFileName
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
    generateLogs({
      actionType,
      actionDestination: 'Archivo descargado correctamente'
    })
    setDownloadToast({
      open: true,
      variant: 'success',
      message: t('successDownloadFile')
    })
  } catch (e) {
    console.error('Error descargando archivo', e)
    if (logOnError) {
      generateLogs({
        actionType,
        actionDestination: 'Error al descargar el archivo'
      })
    }
    setDownloadToast({
      open: true,
      variant: 'error',
      message: t('errorDownloadFile')
    })
  } finally {
    setIsDownloading(false)
  }
}

```

## src/shared/utils/errors.ts

```typescript
import axios from 'axios'

export enum KeysErrors {
  UNAUTHORIZED = 'UNAUTHORIZED',
  COUNT_FILE_GENERATE_EXCEEDED = 'COUNT_FILE_GENERATE_EXCEEDED',
  NOT_DATA_FOUND = 'NOT_DATA_FOUND',
  COMMISSION_SETTLEMENT_DATE_COMPLIANCE_AFTER = 'COMMISSION_SETTLEMENT_DATE_COMPLIANCE_AFTER',
  COMMISSION_CANNOT_EXCEED_REPO_AMOUNT = 'COMMISSION_CANNOT_EXCEED_REPO_AMOUNT'
}

export const errorMessagesController: { [key: string]: string } = {
  [KeysErrors.UNAUTHORIZED]: 'Por favor inicia sesión de nuevo.',
  [KeysErrors.COUNT_FILE_GENERATE_EXCEEDED]:
    'Se excedió la cantidad de archivos generados',
  [KeysErrors.NOT_DATA_FOUND]:
    'No se encontraron datos para el rango de fechas indicado',
  [KeysErrors.COMMISSION_SETTLEMENT_DATE_COMPLIANCE_AFTER]:
    'La comisión no puede ser modificada porque la fecha de cumplimiento es posterior a la fecha de modificación.',
  [KeysErrors.COMMISSION_CANNOT_EXCEED_REPO_AMOUNT]:
    'El valor de la comisión no puede exceder el monto del valor de captación'
}
export const getErrorMessage = (key: string): string => {
  return errorMessagesController[key] || 'Ocurrió un error desconocido.'
}

export const errorMessagesService = {
  unknownError: 'Error desconocido',
  serverError: 'Error en el servidor.'
}

export const errorManagment = (error: any) => {
  let message = errorMessagesService.unknownError
  if (axios.isAxiosError(error)) {
    message = getErrorMessage(error.response?.data?.errorCode)
    if (error.response?.data?.httpCode === '500')
      message = errorMessagesService.serverError
  }
  return message
}

```

## src/shared/utils/getHeaders.ts

```typescript
import { formatToServerTime } from 'remoteUtilities/formatToUserLocalTime'

import STORAGE_KEYS from '../constants/storageKeys'
import { getFromLocalStorage } from './localStorage'

export const getHeaders = async () => {
  const token = getFromLocalStorage(STORAGE_KEYS.ACCESS_TOKEN)
  const client_datetime = formatToServerTime()

  return {
    Authorization: `Bearer ${token}`,
    client_datetime,
    client_user: getFromLocalStorage(STORAGE_KEYS.USERNAME)
  }
}

```

## src/shared/utils/getInfoUser.ts

```typescript
import { RootState } from 'remoteShell/mf-store'

export type UserInfo = {
  userType: string
  participants?: any[]
  participantId?: number
  id: number
  participantType?: { description: string }
  code?: string
}

export const getUserInfo = (state: RootState): UserInfo => {
  const userInfo = state?.auth?.infoUserNubo?.[0] || state?.auth?.infoUserNubo
  return {
    userType: userInfo?.userType || '',
    participants: userInfo?.participants,
    participantId: userInfo?.participantId,
    id: userInfo?.id,
    participantType: userInfo?.participantType,
    code: userInfo?.code
  }
}

export const getParticipantCountry = (
  participantId: number,
  participants: any[] | undefined
): number | undefined => {
  if (!Array.isArray(participants)) return undefined
  const found = participants.find((p) => p?.id === participantId)
  return found?.country?.id
}

```

## src/shared/utils/handleRequest.ts

```typescript
import isDevMode from './isDevMode'

export const handleRequest = async <T>(
  requestFn: () => Promise<any>,
  errorMessage?: string
): Promise<T> => {
  try {
    const response = await requestFn()
    return response.data
  } catch (error) {
    if (isDevMode()) {
      console.error(errorMessage, error)
    }
    throw error
  }
}

```

## src/shared/utils/headerServices.ts

```typescript
import { formatToServerTime } from 'remoteUtilities/formatToUserLocalTime'

import STORAGE_KEYS from '@/shared/constants/storageKeys'

import { getFromLocalStorage } from './localStorage'

type Headers = Record<string, string>

const getBaseHeaders = async (): Promise<Headers> => ({
  client_datetime: formatToServerTime(),
  Authorization: `Bearer ${getFromLocalStorage(STORAGE_KEYS.ACCESS_TOKEN) || ''}`,
  client_user: getFromLocalStorage(STORAGE_KEYS.USERNAME) || ''
})

export const buildStandardHeaders = async (): Promise<Headers> => {
  const baseHeaders = await getBaseHeaders()

  const headers: Headers = {
    ...baseHeaders
  }

  return headers
}

export const buildCustomHeaders = async (
  additionalHeaders: Headers
): Promise<Headers> => {
  const baseHeaders = await getBaseHeaders()
  return {
    ...baseHeaders,
    ...additionalHeaders
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

## src/shared/utils/limitDecimals.ts

```typescript
export const limitDecimals = (
  value: number,
  maxDecimals: number = 4
): number => {
  const factor = Math.pow(10, maxDecimals)
  return Math.trunc(value * factor) / factor
}

```

## src/shared/utils/localStorage.ts

```typescript
export const getFromLocalStorage = (propName: string) =>
  localStorage.getItem(propName)

```

## src/shared/utils/parsePercentage.ts

```typescript
export function parsePercentage(value: unknown): number | null {
  if (value == null) return null
  if (typeof value === 'number' && !isNaN(value)) {
    return value
  }
  if (typeof value === 'string') {
    const trimmed = value.trim()
    if (trimmed === '%') {
      return 0
    }

    // Regex: 1 o 2 dígitos, coma opcional + 0-4 decimales, opcional %
    const regex = /^\d{1,2}(,\d{0,4})?\s*%?$/

    if (!regex.test(trimmed)) {
      return null
    }

    // Reemplaza coma decimal por punto
    let numeric = trimmed.replace(',', '.')

    // Elimina %
    numeric = numeric.replace(/\s*%$/, '')

    // Si termina en punto (ej: "10.") agregamos cero
    if (numeric.endsWith('.')) {
      numeric += '0'
    }

    return parseFloat(numeric) // parseFloat mantiene decimales como .0
  }

  return null
}

```

## src/shared/utils/transformOptionsAutoComplete.ts

```typescript
import { CommonResponseAutoComplete } from '../types/common'

type CommonValue = string | number | boolean | undefined

interface ObjectCommon<O> {
  [key: string]: O | object
}
export const transformOptionsAutoComplete = <T>(
  resService: CommonResponseAutoComplete<T[]> | undefined | null,
  callbackFn: (
    item: T
  ) => ObjectCommon<
    ObjectCommon<CommonValue | ObjectCommon<CommonValue>> | CommonValue
  >
) => {
  if (!resService) {
    return { data: [], total: 0 }
  }
  const data = []
  const content = [...resService.content]
  for (let index = 0; index < content.length; index++) {
    const item = content[index]
    const transformedItem = callbackFn(item as T)
    data.push(transformedItem)
  }
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
  corePlugins: {
    preflight: false
  },
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        '80%': '80%'
      },
      minWidth: {
        '290px': '290px',
        '210px': '210px',
        '190px': '190px'
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

## tsconfig.app.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "paths": {
      "@/*": ["./src/*"]
    },
    /* Bundler mode */
    "moduleResolution": "Bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src"]
}

```

## tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "paths": {
      "@/*": ["./src/*"]
    },
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "Bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
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
        name: 'remote-operation-management',
        remotes: {
          remoteUtilities: env.VITE_REMOTE_UTILITIES,
          remoteShell: env.VITE_REMOTE_PARENT
        },
        exposes: {
          './mf-operation-management': './src/main.tsx'
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
      modulePreload: true,
      target: 'esnext',
      minify: false,
      cssCodeSplit: false
    }
  }
})

```
