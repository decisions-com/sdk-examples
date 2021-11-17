/// <reference path="./datatypes._base.d.ts" />

interface TruthTableServiceStatic {

	GetRules(successCallback: (data: { GetRulesResult: $D.Framework.Design.Flow.Service.TruthTable.RuleExtension[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetRulesResult: $D.Framework.Design.Flow.Service.TruthTable.RuleExtension[] }>;

	GetRules(): { GetRulesResult: $D.Framework.Design.Flow.Service.TruthTable.RuleExtension[] };

	GetRulesPromise(): Promise<$D.Framework.Design.Flow.Service.TruthTable.RuleExtension[]>;

	CreateTruthTable(folderId: string, name: string, successCallback: (data: { CreateTruthTableResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateTruthTableResult: string }>;

	CreateTruthTable(folderId: string, name: string): { CreateTruthTableResult: string };

	CreateTruthTablePromise(folderId: string, name: string): Promise<string>;

	StartEditSession(ruleId: string, successCallback: (data: { StartEditSessionResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ StartEditSessionResult: string }>;

	StartEditSession(ruleId: string): { StartEditSessionResult: string };

	StartEditSessionPromise(ruleId: string): Promise<string>;

	SaveRule(editSessionId: string, successCallback: (data: { SaveRuleResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveRuleResult: void }>;

	SaveRule(editSessionId: string): { SaveRuleResult: void };

	SaveRulePromise(editSessionId: string): Promise<void>;

	CancelEdit(editSessionId: string, successCallback: (data: { CancelEditResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CancelEditResult: void }>;

	CancelEdit(editSessionId: string): { CancelEditResult: void };

	CancelEditPromise(editSessionId: string): Promise<void>;

	DeleteTruthTable(ruleId: string, successCallback: (data: { DeleteTruthTableResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteTruthTableResult: void }>;

	DeleteTruthTable(ruleId: string): { DeleteTruthTableResult: void };

	DeleteTruthTablePromise(ruleId: string): Promise<void>;

	AddRule(name: string, editSessionId: string, ruleId: string, evaluateAsNot: boolean, successCallback: (data: { AddRuleResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddRuleResult: void }>;

	AddRule(name: string, editSessionId: string, ruleId: string, evaluateAsNot: boolean): { AddRuleResult: void };

	AddRulePromise(name: string, editSessionId: string, ruleId: string, evaluateAsNot: boolean): Promise<void>;

	RemoveRuleByInput(editSessionId: string, name: string, removeInput: boolean, successCallback: (data: { RemoveRuleByInputResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveRuleByInputResult: void }>;

	RemoveRuleByInput(editSessionId: string, name: string, removeInput: boolean): { RemoveRuleByInputResult: void };

	RemoveRuleByInputPromise(editSessionId: string, name: string, removeInput: boolean): Promise<void>;

	RemoveRuleByPosition(editSessionId: string, column: number, successCallback: (data: { RemoveRuleByPositionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveRuleByPositionResult: void }>;

	RemoveRuleByPosition(editSessionId: string, column: number): { RemoveRuleByPositionResult: void };

	RemoveRuleByPositionPromise(editSessionId: string, column: number): Promise<void>;

	AddRuleReturn(editSessionId: string, name: string, dataTypeName: string, isList: boolean, successCallback: (data: { AddRuleReturnResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddRuleReturnResult: void }>;

	AddRuleReturn(editSessionId: string, name: string, dataTypeName: string, isList: boolean): { AddRuleReturnResult: void };

	AddRuleReturnPromise(editSessionId: string, name: string, dataTypeName: string, isList: boolean): Promise<void>;

	RemoveRuleReturn(editSessionId: string, name: string, successCallback: (data: { RemoveRuleReturnResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveRuleReturnResult: void }>;

	RemoveRuleReturn(editSessionId: string, name: string): { RemoveRuleReturnResult: void };

	RemoveRuleReturnPromise(editSessionId: string, name: string): Promise<void>;

	GetRuleReturns(editSessionId: string, successCallback: (data: { GetRuleReturnsResult: $D.Framework.Design.Flow.Service.TruthTable.RuleParameter[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetRuleReturnsResult: $D.Framework.Design.Flow.Service.TruthTable.RuleParameter[] }>;

	GetRuleReturns(editSessionId: string): { GetRuleReturnsResult: $D.Framework.Design.Flow.Service.TruthTable.RuleParameter[] };

	GetRuleReturnsPromise(editSessionId: string): Promise<$D.Framework.Design.Flow.Service.TruthTable.RuleParameter[]>;

	CreateRuleRow(editSessionId: string, data: $D.Framework.Design.Flow.Service.TruthTable.RuleEditStructure[], successCallback: (data: { CreateRuleRowResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateRuleRowResult: string }>;

	CreateRuleRow(editSessionId: string, data: $D.Framework.Design.Flow.Service.TruthTable.RuleEditStructure[]): { CreateRuleRowResult: string };

	CreateRuleRowPromise(editSessionId: string, data: $D.Framework.Design.Flow.Service.TruthTable.RuleEditStructure[]): Promise<string>;

	UpdateRuleRow(editSessionId: string, ruleDataId: string, data: $D.Framework.Design.Flow.Service.TruthTable.RuleEditStructure[], successCallback: (data: { UpdateRuleRowResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateRuleRowResult: void }>;

	UpdateRuleRow(editSessionId: string, ruleDataId: string, data: $D.Framework.Design.Flow.Service.TruthTable.RuleEditStructure[]): { UpdateRuleRowResult: void };

	UpdateRuleRowPromise(editSessionId: string, ruleDataId: string, data: $D.Framework.Design.Flow.Service.TruthTable.RuleEditStructure[]): Promise<void>;

	UpdateRuleRowField(editSessionId: string, ruleDataId: string, data: $D.Framework.Design.Flow.Service.TruthTable.RuleEditStructure, successCallback: (data: { UpdateRuleRowFieldResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateRuleRowFieldResult: void }>;

	UpdateRuleRowField(editSessionId: string, ruleDataId: string, data: $D.Framework.Design.Flow.Service.TruthTable.RuleEditStructure): { UpdateRuleRowFieldResult: void };

	UpdateRuleRowFieldPromise(editSessionId: string, ruleDataId: string, data: $D.Framework.Design.Flow.Service.TruthTable.RuleEditStructure): Promise<void>;

	GetRuleRow(editSessionId: string, ruleDataId: string, successCallback: (data: { GetRuleRowResult: $D.Framework.Design.Flow.Service.TruthTable.RuleStructure[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetRuleRowResult: $D.Framework.Design.Flow.Service.TruthTable.RuleStructure[] }>;

	GetRuleRow(editSessionId: string, ruleDataId: string): { GetRuleRowResult: $D.Framework.Design.Flow.Service.TruthTable.RuleStructure[] };

	GetRuleRowPromise(editSessionId: string, ruleDataId: string): Promise<$D.Framework.Design.Flow.Service.TruthTable.RuleStructure[]>;

	GetRuleRows(editSessionId: string, successCallback: (data: { GetRuleRowsResult: $D.Framework.Design.Flow.Service.TruthTable.RuleRowStructure[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetRuleRowsResult: $D.Framework.Design.Flow.Service.TruthTable.RuleRowStructure[] }>;

	GetRuleRows(editSessionId: string): { GetRuleRowsResult: $D.Framework.Design.Flow.Service.TruthTable.RuleRowStructure[] };

	GetRuleRowsPromise(editSessionId: string): Promise<$D.Framework.Design.Flow.Service.TruthTable.RuleRowStructure[]>;

	GetRuleParameters(ruleId: string, successCallback: (data: { GetRuleParametersResult: $D.Framework.Design.Flow.Service.TruthTable.RuleParameter[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetRuleParametersResult: $D.Framework.Design.Flow.Service.TruthTable.RuleParameter[] }>;

	GetRuleParameters(ruleId: string): { GetRuleParametersResult: $D.Framework.Design.Flow.Service.TruthTable.RuleParameter[] };

	GetRuleParametersPromise(ruleId: string): Promise<$D.Framework.Design.Flow.Service.TruthTable.RuleParameter[]>;

	GetRuleParametersFromSession(ruleSessionId: string, successCallback: (data: { GetRuleParametersFromSessionResult: $D.Framework.Design.Flow.Service.TruthTable.RuleParameter[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetRuleParametersFromSessionResult: $D.Framework.Design.Flow.Service.TruthTable.RuleParameter[] }>;

	GetRuleParametersFromSession(ruleSessionId: string): { GetRuleParametersFromSessionResult: $D.Framework.Design.Flow.Service.TruthTable.RuleParameter[] };

	GetRuleParametersFromSessionPromise(ruleSessionId: string): Promise<$D.Framework.Design.Flow.Service.TruthTable.RuleParameter[]>;

	GetTruthTableStructure(editSessionId: string, successCallback: (data: { GetTruthTableStructureResult: $D.Framework.Design.Flow.Service.TruthTable.TruthTableStructure }) => any, errorCallback?: () => any): JQueryPromise<{ GetTruthTableStructureResult: $D.Framework.Design.Flow.Service.TruthTable.TruthTableStructure }>;

	GetTruthTableStructure(editSessionId: string): { GetTruthTableStructureResult: $D.Framework.Design.Flow.Service.TruthTable.TruthTableStructure };

	GetTruthTableStructurePromise(editSessionId: string): Promise<$D.Framework.Design.Flow.Service.TruthTable.TruthTableStructure>;

	DeleteRuleRow(editSessionId: string, ruleDataId: string, successCallback: (data: { DeleteRuleRowResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteRuleRowResult: void }>;

	DeleteRuleRow(editSessionId: string, ruleDataId: string): { DeleteRuleRowResult: void };

	DeleteRuleRowPromise(editSessionId: string, ruleDataId: string): Promise<void>;

	RunRule(ruleId: string, data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], executionType: $D.Framework.Design.Flow.Service.TruthTable.DataRuleExecutionType, successCallback: (data: { RunRuleResult: $D.Framework.Design.Flow.Service.TruthTable.RuleReturnStructure[] }) => any, errorCallback?: () => any): JQueryPromise<{ RunRuleResult: $D.Framework.Design.Flow.Service.TruthTable.RuleReturnStructure[] }>;

	RunRule(ruleId: string, data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], executionType: $D.Framework.Design.Flow.Service.TruthTable.DataRuleExecutionType): { RunRuleResult: $D.Framework.Design.Flow.Service.TruthTable.RuleReturnStructure[] };

	RunRulePromise(ruleId: string, data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], executionType: $D.Framework.Design.Flow.Service.TruthTable.DataRuleExecutionType): Promise<$D.Framework.Design.Flow.Service.TruthTable.RuleReturnStructure[]>;

	DeleteAllRows(editSessionId: string, successCallback: (data: { DeleteAllRowsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteAllRowsResult: void }>;

	DeleteAllRows(editSessionId: string): { DeleteAllRowsResult: void };

	DeleteAllRowsPromise(editSessionId: string): Promise<void>;

	CreateRuleRows(editSessionId: string, data: $D.Framework.Design.Flow.Service.TruthTable.RuleEditStructureList[], deleteAllExistingRowsBeforeAdding: boolean, successCallback: (data: { CreateRuleRowsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CreateRuleRowsResult: void }>;

	CreateRuleRows(editSessionId: string, data: $D.Framework.Design.Flow.Service.TruthTable.RuleEditStructureList[], deleteAllExistingRowsBeforeAdding: boolean): { CreateRuleRowsResult: void };

	CreateRuleRowsPromise(editSessionId: string, data: $D.Framework.Design.Flow.Service.TruthTable.RuleEditStructureList[], deleteAllExistingRowsBeforeAdding: boolean): Promise<void>;

	GetTruthTableType(editSessionId: string, successCallback: (data: { GetTruthTableTypeResult: $D.Framework.Design.Flow.RuleType }) => any, errorCallback?: () => any): JQueryPromise<{ GetTruthTableTypeResult: $D.Framework.Design.Flow.RuleType }>;

	GetTruthTableType(editSessionId: string): { GetTruthTableTypeResult: $D.Framework.Design.Flow.RuleType };

	GetTruthTableTypePromise(editSessionId: string): Promise<$D.Framework.Design.Flow.RuleType>;

	SetTruthTableSpecifiedResultValue(ruleSessionId: string, specResult: $D.Framework.Design.Flow.Service.TruthTable.TruthTableSpecifiedResult, successCallback: (data: { SetTruthTableSpecifiedResultValueResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetTruthTableSpecifiedResultValueResult: void }>;

	SetTruthTableSpecifiedResultValue(ruleSessionId: string, specResult: $D.Framework.Design.Flow.Service.TruthTable.TruthTableSpecifiedResult): { SetTruthTableSpecifiedResultValueResult: void };

	SetTruthTableSpecifiedResultValuePromise(ruleSessionId: string, specResult: $D.Framework.Design.Flow.Service.TruthTable.TruthTableSpecifiedResult): Promise<void>;

	SetDefaultResultValue(ruleSessionId: string, specResult: $D.Framework.Design.Flow.Service.TruthTable.TruthTableSpecifiedResult, successCallback: (data: { SetDefaultResultValueResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetDefaultResultValueResult: void }>;

	SetDefaultResultValue(ruleSessionId: string, specResult: $D.Framework.Design.Flow.Service.TruthTable.TruthTableSpecifiedResult): { SetDefaultResultValueResult: void };

	SetDefaultResultValuePromise(ruleSessionId: string, specResult: $D.Framework.Design.Flow.Service.TruthTable.TruthTableSpecifiedResult): Promise<void>;

	SetHasNoMatchOutcome(ruleSessionId: string, value: boolean, successCallback: (data: { SetHasNoMatchOutcomeResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetHasNoMatchOutcomeResult: void }>;

	SetHasNoMatchOutcome(ruleSessionId: string, value: boolean): { SetHasNoMatchOutcomeResult: void };

	SetHasNoMatchOutcomePromise(ruleSessionId: string, value: boolean): Promise<void>;

	RunSampleSet(ruleId: string, sampleSetId: string, successCallback: (data: { RunSampleSetResult: $D.Framework.Design.Flow.Service.Debugging.Samples.SampleSetDataCoverage }) => any, errorCallback?: () => any): JQueryPromise<{ RunSampleSetResult: $D.Framework.Design.Flow.Service.Debugging.Samples.SampleSetDataCoverage }>;

	RunSampleSet(ruleId: string, sampleSetId: string): { RunSampleSetResult: $D.Framework.Design.Flow.Service.Debugging.Samples.SampleSetDataCoverage };

	RunSampleSetPromise(ruleId: string, sampleSetId: string): Promise<$D.Framework.Design.Flow.Service.Debugging.Samples.SampleSetDataCoverage>;

	SetRunTruthTableOptionsOnProvider(ruleSessionId: string, providerId: string, options: $D.Framework.Design.Flow.Service.TruthTable.RunTruthTableOptions, successCallback: (data: { SetRunTruthTableOptionsOnProviderResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetRunTruthTableOptionsOnProviderResult: void }>;

	SetRunTruthTableOptionsOnProvider(ruleSessionId: string, providerId: string, options: $D.Framework.Design.Flow.Service.TruthTable.RunTruthTableOptions): { SetRunTruthTableOptionsOnProviderResult: void };

	SetRunTruthTableOptionsOnProviderPromise(ruleSessionId: string, providerId: string, options: $D.Framework.Design.Flow.Service.TruthTable.RunTruthTableOptions): Promise<void>;

	ConvertToRegularTruthTable(externatTruthTableId: string, newTruthTableName: string, successCallback: (data: { ConvertToRegularTruthTableResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ ConvertToRegularTruthTableResult: string }>;

	ConvertToRegularTruthTable(externatTruthTableId: string, newTruthTableName: string): { ConvertToRegularTruthTableResult: string };

	ConvertToRegularTruthTablePromise(externatTruthTableId: string, newTruthTableName: string): Promise<string>;
}

interface ServicesStatic {
	TruthTableService(): TruthTableServiceStatic;
}
