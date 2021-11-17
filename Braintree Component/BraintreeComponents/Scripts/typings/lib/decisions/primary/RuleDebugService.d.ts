/// <reference path="./datatypes._base.d.ts" />

interface RuleDebugServiceStatic {

	RunRuleWithTrackingId(ruleId: string, ruleTrackingId: string, successCallback: (data: { RunRuleWithTrackingIdResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair }) => any, errorCallback?: () => any): JQueryPromise<{ RunRuleWithTrackingIdResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair }>;

	RunRuleWithTrackingId(ruleId: string, ruleTrackingId: string): { RunRuleWithTrackingIdResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair };

	RunRuleWithTrackingIdPromise(ruleId: string, ruleTrackingId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair>;

	RunRuleWithDataAndTrackingId(ruleId: string, data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], ruleTrackingId: string, successCallback: (data: { RunRuleWithDataAndTrackingIdResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair }) => any, errorCallback?: () => any): JQueryPromise<{ RunRuleWithDataAndTrackingIdResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair }>;

	RunRuleWithDataAndTrackingId(ruleId: string, data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], ruleTrackingId: string): { RunRuleWithDataAndTrackingIdResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair };

	RunRuleWithDataAndTrackingIdPromise(ruleId: string, data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], ruleTrackingId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair>;

	RunRuleWithEditingDataAndTrackingId(ruleId: string, contextId: string, ruleTrackingId: string, successCallback: (data: { RunRuleWithEditingDataAndTrackingIdResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair }) => any, errorCallback?: () => any): JQueryPromise<{ RunRuleWithEditingDataAndTrackingIdResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair }>;

	RunRuleWithEditingDataAndTrackingId(ruleId: string, contextId: string, ruleTrackingId: string): { RunRuleWithEditingDataAndTrackingIdResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair };

	RunRuleWithEditingDataAndTrackingIdPromise(ruleId: string, contextId: string, ruleTrackingId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair>;

	RunRuleFromStoredDataAndTrackingId(ruleId: string, ruleInputDataId: string, ruleTrackingId: string, successCallback: (data: { RunRuleFromStoredDataAndTrackingIdResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair }) => any, errorCallback?: () => any): JQueryPromise<{ RunRuleFromStoredDataAndTrackingIdResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair }>;

	RunRuleFromStoredDataAndTrackingId(ruleId: string, ruleInputDataId: string, ruleTrackingId: string): { RunRuleFromStoredDataAndTrackingIdResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair };

	RunRuleFromStoredDataAndTrackingIdPromise(ruleId: string, ruleInputDataId: string, ruleTrackingId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair>;

	GetOverrideDebugUIClassName(ruleId: string, successCallback: (data: { GetOverrideDebugUIClassNameResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetOverrideDebugUIClassNameResult: string }>;

	GetOverrideDebugUIClassName(ruleId: string): { GetOverrideDebugUIClassNameResult: string };

	GetOverrideDebugUIClassNamePromise(ruleId: string): Promise<string>;

	AddUnitTestFromContextId(ruleId: string, contextId: string, successCallback: (data: { AddUnitTestFromContextIdResult: $D.Framework.Design.Flow.Service.Debugging.UnitTest }) => any, errorCallback?: () => any): JQueryPromise<{ AddUnitTestFromContextIdResult: $D.Framework.Design.Flow.Service.Debugging.UnitTest }>;

	AddUnitTestFromContextId(ruleId: string, contextId: string): { AddUnitTestFromContextIdResult: $D.Framework.Design.Flow.Service.Debugging.UnitTest };

	AddUnitTestFromContextIdPromise(ruleId: string, contextId: string): Promise<$D.Framework.Design.Flow.Service.Debugging.UnitTest>;

	GetUnitTestsForRule(ruleId: string, successCallback: (data: { GetUnitTestsForRuleResult: $D.Framework.Design.Flow.Service.Debugging.UnitTest[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetUnitTestsForRuleResult: $D.Framework.Design.Flow.Service.Debugging.UnitTest[] }>;

	GetUnitTestsForRule(ruleId: string): { GetUnitTestsForRuleResult: $D.Framework.Design.Flow.Service.Debugging.UnitTest[] };

	GetUnitTestsForRulePromise(ruleId: string): Promise<$D.Framework.Design.Flow.Service.Debugging.UnitTest[]>;

	EvaluateUnitTestForRule(ruleId: string, unitTestId: string, successCallback: (data: { EvaluateUnitTestForRuleResult: $D.Framework.Design.Flow.Service.Debugging.UnitTestResult }) => any, errorCallback?: () => any): JQueryPromise<{ EvaluateUnitTestForRuleResult: $D.Framework.Design.Flow.Service.Debugging.UnitTestResult }>;

	EvaluateUnitTestForRule(ruleId: string, unitTestId: string): { EvaluateUnitTestForRuleResult: $D.Framework.Design.Flow.Service.Debugging.UnitTestResult };

	EvaluateUnitTestForRulePromise(ruleId: string, unitTestId: string): Promise<$D.Framework.Design.Flow.Service.Debugging.UnitTestResult>;

	RunRuleWithUnitTestAndTrackingId(ruleId: string, unitTestId: string, ruleTrackingId: string, successCallback: (data: { RunRuleWithUnitTestAndTrackingIdResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair }) => any, errorCallback?: () => any): JQueryPromise<{ RunRuleWithUnitTestAndTrackingIdResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair }>;

	RunRuleWithUnitTestAndTrackingId(ruleId: string, unitTestId: string, ruleTrackingId: string): { RunRuleWithUnitTestAndTrackingIdResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair };

	RunRuleWithUnitTestAndTrackingIdPromise(ruleId: string, unitTestId: string, ruleTrackingId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair>;

	SaveUnitTestFromContextId(unitTestId: string, contextId: string, successCallback: (data: { SaveUnitTestFromContextIdResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveUnitTestFromContextIdResult: void }>;

	SaveUnitTestFromContextId(unitTestId: string, contextId: string): { SaveUnitTestFromContextIdResult: void };

	SaveUnitTestFromContextIdPromise(unitTestId: string, contextId: string): Promise<void>;

	DeleteUnitTest(unitTestId: string, successCallback: (data: { DeleteUnitTestResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteUnitTestResult: void }>;

	DeleteUnitTest(unitTestId: string): { DeleteUnitTestResult: void };

	DeleteUnitTestPromise(unitTestId: string): Promise<void>;

	GetRuleInputsForDebug(ruleId: string, successCallback: (data: { GetRuleInputsForDebugResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetRuleInputsForDebugResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }>;

	GetRuleInputsForDebug(ruleId: string): { GetRuleInputsForDebugResult: $D.Framework.Design.Flow.Mapping.DataDescription[] };

	GetRuleInputsForDebugPromise(ruleId: string): Promise<$D.Framework.Design.Flow.Mapping.DataDescription[]>;

	RuleHasInputsForDebug(ruleId: string, successCallback: (data: { RuleHasInputsForDebugResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ RuleHasInputsForDebugResult: boolean }>;

	RuleHasInputsForDebug(ruleId: string): { RuleHasInputsForDebugResult: boolean };

	RuleHasInputsForDebugPromise(ruleId: string): Promise<boolean>;

	StartRuleDebug(parameters: $D.Framework.Design.Flow.Service.Debugging.DebugParameters, successCallback: (data: { StartRuleDebugResult: $D.Framework.Design.Flow.Service.Debugging.DebugData.DebugDataInfo }) => any, errorCallback?: () => any): JQueryPromise<{ StartRuleDebugResult: $D.Framework.Design.Flow.Service.Debugging.DebugData.DebugDataInfo }>;

	StartRuleDebug(parameters: $D.Framework.Design.Flow.Service.Debugging.DebugParameters): { StartRuleDebugResult: $D.Framework.Design.Flow.Service.Debugging.DebugData.DebugDataInfo };

	StartRuleDebugPromise(parameters: $D.Framework.Design.Flow.Service.Debugging.DebugParameters): Promise<$D.Framework.Design.Flow.Service.Debugging.DebugData.DebugDataInfo>;

	GetSessionUserContext(userId: string, password: string, successCallback: (data: { GetSessionUserContextResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext }) => any, errorCallback?: () => any): JQueryPromise<{ GetSessionUserContextResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext }>;

	GetSessionUserContext(userId: string, password: string): { GetSessionUserContextResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext };

	GetSessionUserContextPromise(userId: string, password: string): Promise<$D.Framework.ServiceLayer.Utilities.SessionUserContext>;

	GetPasswordUserContext(userId: string, password: string, successCallback: (data: { GetPasswordUserContextResult: $D.Framework.ServiceLayer.Utilities.PasswordCredentialsUserContext }) => any, errorCallback?: () => any): JQueryPromise<{ GetPasswordUserContextResult: $D.Framework.ServiceLayer.Utilities.PasswordCredentialsUserContext }>;

	GetPasswordUserContext(userId: string, password: string): { GetPasswordUserContextResult: $D.Framework.ServiceLayer.Utilities.PasswordCredentialsUserContext };

	GetPasswordUserContextPromise(userId: string, password: string): Promise<$D.Framework.ServiceLayer.Utilities.PasswordCredentialsUserContext>;

	GetGuestUserContext(successCallback: (data: { GetGuestUserContextResult: $D.Framework.ServiceLayer.Utilities.GuestUserContext }) => any, errorCallback?: () => any): JQueryPromise<{ GetGuestUserContextResult: $D.Framework.ServiceLayer.Utilities.GuestUserContext }>;

	GetGuestUserContext(): { GetGuestUserContextResult: $D.Framework.ServiceLayer.Utilities.GuestUserContext };

	GetGuestUserContextPromise(): Promise<$D.Framework.ServiceLayer.Utilities.GuestUserContext>;

	RunRule(ruleId: string, successCallback: (data: { RunRuleResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair }) => any, errorCallback?: () => any): JQueryPromise<{ RunRuleResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair }>;

	RunRule(ruleId: string): { RunRuleResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair };

	RunRulePromise(ruleId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair>;

	RunRuleWithData(ruleId: string, data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], successCallback: (data: { RunRuleWithDataResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair }) => any, errorCallback?: () => any): JQueryPromise<{ RunRuleWithDataResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair }>;

	RunRuleWithData(ruleId: string, data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): { RunRuleWithDataResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair };

	RunRuleWithDataPromise(ruleId: string, data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair>;

	RunRuleFromStoredData(ruleInputDataId: string, successCallback: (data: { RunRuleFromStoredDataResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair }) => any, errorCallback?: () => any): JQueryPromise<{ RunRuleFromStoredDataResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair }>;

	RunRuleFromStoredData(ruleInputDataId: string): { RunRuleFromStoredDataResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair };

	RunRuleFromStoredDataPromise(ruleInputDataId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair>;

	GetRuleInputs(ruleId: string, successCallback: (data: { GetRuleInputsResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetRuleInputsResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }>;

	GetRuleInputs(ruleId: string): { GetRuleInputsResult: $D.Framework.Design.Flow.Mapping.DataDescription[] };

	GetRuleInputsPromise(ruleId: string): Promise<$D.Framework.Design.Flow.Mapping.DataDescription[]>;

	UnRegisterContextProviderForInputs(contextId: string, successCallback: (data: { UnRegisterContextProviderForInputsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UnRegisterContextProviderForInputsResult: void }>;

	UnRegisterContextProviderForInputs(contextId: string): { UnRegisterContextProviderForInputsResult: void };

	UnRegisterContextProviderForInputsPromise(contextId: string): Promise<void>;

	GetRuleInputDataValues(ruleInputDataId: string, successCallback: (data: { GetRuleInputDataValuesResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetRuleInputDataValuesResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	GetRuleInputDataValues(ruleInputDataId: string): { GetRuleInputDataValuesResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	GetRuleInputDataValuesPromise(ruleInputDataId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	SaveRuleInputData(ruleInputDataId: string, values: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], successCallback: (data: { SaveRuleInputDataResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveRuleInputDataResult: void }>;

	SaveRuleInputData(ruleInputDataId: string, values: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): { SaveRuleInputDataResult: void };

	SaveRuleInputDataPromise(ruleInputDataId: string, values: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): Promise<void>;

	AddRuleInputData(folderId: string, ruleId: string, name: string, values: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], successCallback: (data: { AddRuleInputDataResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddRuleInputDataResult: string }>;

	AddRuleInputData(folderId: string, ruleId: string, name: string, values: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): { AddRuleInputDataResult: string };

	AddRuleInputDataPromise(folderId: string, ruleId: string, name: string, values: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): Promise<string>;

	SetReportSampleSetProvider(ruleId: string, reportId: string, successCallback: (data: { SetReportSampleSetProviderResult: $D.Framework.Design.Flow.Service.Debugging.Samples.SampleCategory }) => any, errorCallback?: () => any): JQueryPromise<{ SetReportSampleSetProviderResult: $D.Framework.Design.Flow.Service.Debugging.Samples.SampleCategory }>;

	SetReportSampleSetProvider(ruleId: string, reportId: string): { SetReportSampleSetProviderResult: $D.Framework.Design.Flow.Service.Debugging.Samples.SampleCategory };

	SetReportSampleSetProviderPromise(ruleId: string, reportId: string): Promise<$D.Framework.Design.Flow.Service.Debugging.Samples.SampleCategory>;

	RunSampleSet(ruleId: string, sampleSetId: string, successCallback: (data: { RunSampleSetResult: $D.Framework.Design.Flow.Service.Debugging.Samples.RuleSampleSetEvaluation }) => any, errorCallback?: () => any): JQueryPromise<{ RunSampleSetResult: $D.Framework.Design.Flow.Service.Debugging.Samples.RuleSampleSetEvaluation }>;

	RunSampleSet(ruleId: string, sampleSetId: string): { RunSampleSetResult: $D.Framework.Design.Flow.Service.Debugging.Samples.RuleSampleSetEvaluation };

	RunSampleSetPromise(ruleId: string, sampleSetId: string): Promise<$D.Framework.Design.Flow.Service.Debugging.Samples.RuleSampleSetEvaluation>;
}

interface ServicesStatic {
	RuleDebugService(): RuleDebugServiceStatic;
}
