/// <reference path="./datatypes._base.d.ts" />

interface MatrixRuleExecutionServiceStatic {

	RunMatrixRule(matrixRuleId: string, successCallback: (data: { RunMatrixRuleResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair }) => any, errorCallback?: () => any): JQueryPromise<{ RunMatrixRuleResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair }>;

	RunMatrixRule(matrixRuleId: string): { RunMatrixRuleResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair };

	RunMatrixRulePromise(matrixRuleId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair>;

	RunMatrixRuleWithData(matrixRuleId: string, data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], successCallback: (data: { RunMatrixRuleWithDataResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair }) => any, errorCallback?: () => any): JQueryPromise<{ RunMatrixRuleWithDataResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair }>;

	RunMatrixRuleWithData(matrixRuleId: string, data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): { RunMatrixRuleWithDataResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair };

	RunMatrixRuleWithDataPromise(matrixRuleId: string, data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair>;

	RunMatrixRuleFromStoredData(inputDataId: string, successCallback: (data: { RunMatrixRuleFromStoredDataResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair }) => any, errorCallback?: () => any): JQueryPromise<{ RunMatrixRuleFromStoredDataResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair }>;

	RunMatrixRuleFromStoredData(inputDataId: string): { RunMatrixRuleFromStoredDataResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair };

	RunMatrixRuleFromStoredDataPromise(inputDataId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair>;

	RunMatrixRuleFromInputContext(matrixRuleId: string, contextId: string, successCallback: (data: { RunMatrixRuleFromInputContextResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair }) => any, errorCallback?: () => any): JQueryPromise<{ RunMatrixRuleFromInputContextResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair }>;

	RunMatrixRuleFromInputContext(matrixRuleId: string, contextId: string): { RunMatrixRuleFromInputContextResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair };

	RunMatrixRuleFromInputContextPromise(matrixRuleId: string, contextId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair>;

	GetMatrixRuleInputs(matrixRuleId: string, successCallback: (data: { GetMatrixRuleInputsResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMatrixRuleInputsResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }>;

	GetMatrixRuleInputs(matrixRuleId: string): { GetMatrixRuleInputsResult: $D.Framework.Design.Flow.Mapping.DataDescription[] };

	GetMatrixRuleInputsPromise(matrixRuleId: string): Promise<$D.Framework.Design.Flow.Mapping.DataDescription[]>;

	RegisterContextProviderForInputData(inputDataId: string, successCallback: (data: { RegisterContextProviderForInputDataResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ RegisterContextProviderForInputDataResult: string }>;

	RegisterContextProviderForInputData(inputDataId: string): { RegisterContextProviderForInputDataResult: string };

	RegisterContextProviderForInputDataPromise(inputDataId: string): Promise<string>;

	UnRegisterContextProviderForInputs(contextId: string, successCallback: (data: { UnRegisterContextProviderForInputsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UnRegisterContextProviderForInputsResult: void }>;

	UnRegisterContextProviderForInputs(contextId: string): { UnRegisterContextProviderForInputsResult: void };

	UnRegisterContextProviderForInputsPromise(contextId: string): Promise<void>;

	GetInputDataValues(ruleInputDataId: string, successCallback: (data: { GetInputDataValuesResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetInputDataValuesResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	GetInputDataValues(ruleInputDataId: string): { GetInputDataValuesResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	GetInputDataValuesPromise(ruleInputDataId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	GetInputDataValuesFromContext(contextId: string, successCallback: (data: { GetInputDataValuesFromContextResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetInputDataValuesFromContextResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	GetInputDataValuesFromContext(contextId: string): { GetInputDataValuesFromContextResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	GetInputDataValuesFromContextPromise(contextId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	SaveRuleInputData(ruleInputDataId: string, values: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], successCallback: (data: { SaveRuleInputDataResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveRuleInputDataResult: void }>;

	SaveRuleInputData(ruleInputDataId: string, values: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): { SaveRuleInputDataResult: void };

	SaveRuleInputDataPromise(ruleInputDataId: string, values: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): Promise<void>;

	AddRuleInputData(folderId: string, matrixRuleId: string, name: string, values: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], successCallback: (data: { AddRuleInputDataResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddRuleInputDataResult: string }>;

	AddRuleInputData(folderId: string, matrixRuleId: string, name: string, values: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): { AddRuleInputDataResult: string };

	AddRuleInputDataPromise(folderId: string, matrixRuleId: string, name: string, values: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): Promise<string>;

	RunSampleSet(ruleId: string, sampleSetId: string, successCallback: (data: { RunSampleSetResult: $D.Framework.Design.Flow.Service.Debugging.Samples.SampleSetDataCoverage }) => any, errorCallback?: () => any): JQueryPromise<{ RunSampleSetResult: $D.Framework.Design.Flow.Service.Debugging.Samples.SampleSetDataCoverage }>;

	RunSampleSet(ruleId: string, sampleSetId: string): { RunSampleSetResult: $D.Framework.Design.Flow.Service.Debugging.Samples.SampleSetDataCoverage };

	RunSampleSetPromise(ruleId: string, sampleSetId: string): Promise<$D.Framework.Design.Flow.Service.Debugging.Samples.SampleSetDataCoverage>;

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
	MatrixRuleExecutionService(): MatrixRuleExecutionServiceStatic;
}
