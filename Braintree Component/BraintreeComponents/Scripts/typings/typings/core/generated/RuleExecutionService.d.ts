/// <reference path="./datatypes._base.d.ts" />

interface RuleExecutionServiceStatic {

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

	GetSessionUserContext(userId: string, password: string, successCallback: (data: { GetSessionUserContextResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext }) => any, errorCallback?: () => any): JQueryPromise<{ GetSessionUserContextResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext }>;

	GetSessionUserContext(userId: string, password: string): { GetSessionUserContextResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext };

	GetSessionUserContextPromise(userId: string, password: string): Promise<$D.Framework.ServiceLayer.Utilities.SessionUserContext>;

	GetPasswordUserContext(userId: string, password: string, successCallback: (data: { GetPasswordUserContextResult: $D.Framework.ServiceLayer.Utilities.PasswordCredentialsUserContext }) => any, errorCallback?: () => any): JQueryPromise<{ GetPasswordUserContextResult: $D.Framework.ServiceLayer.Utilities.PasswordCredentialsUserContext }>;

	GetPasswordUserContext(userId: string, password: string): { GetPasswordUserContextResult: $D.Framework.ServiceLayer.Utilities.PasswordCredentialsUserContext };

	GetPasswordUserContextPromise(userId: string, password: string): Promise<$D.Framework.ServiceLayer.Utilities.PasswordCredentialsUserContext>;

	GetGuestUserContext(successCallback: (data: { GetGuestUserContextResult: $D.Framework.ServiceLayer.Utilities.GuestUserContext }) => any, errorCallback?: () => any): JQueryPromise<{ GetGuestUserContextResult: $D.Framework.ServiceLayer.Utilities.GuestUserContext }>;

	GetGuestUserContext(): { GetGuestUserContextResult: $D.Framework.ServiceLayer.Utilities.GuestUserContext };

	GetGuestUserContextPromise(): Promise<$D.Framework.ServiceLayer.Utilities.GuestUserContext>;
}

interface ServicesStatic {
	RuleExecutionService(): RuleExecutionServiceStatic;
}
