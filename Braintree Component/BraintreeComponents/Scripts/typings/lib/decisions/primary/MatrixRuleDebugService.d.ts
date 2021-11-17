/// <reference path="./datatypes._base.d.ts" />

interface MatrixRuleDebugServiceStatic {

	StartMatrixRuleDebug(parameters: $D.Framework.Design.Flow.Service.Debugging.DebugParameters, successCallback: (data: { StartMatrixRuleDebugResult: $D.Framework.Design.Flow.Service.Debugging.DebugData.DebugDataInfo }) => any, errorCallback?: () => any): JQueryPromise<{ StartMatrixRuleDebugResult: $D.Framework.Design.Flow.Service.Debugging.DebugData.DebugDataInfo }>;

	StartMatrixRuleDebug(parameters: $D.Framework.Design.Flow.Service.Debugging.DebugParameters): { StartMatrixRuleDebugResult: $D.Framework.Design.Flow.Service.Debugging.DebugData.DebugDataInfo };

	StartMatrixRuleDebugPromise(parameters: $D.Framework.Design.Flow.Service.Debugging.DebugParameters): Promise<$D.Framework.Design.Flow.Service.Debugging.DebugData.DebugDataInfo>;

	GetMatrixRuleEntities(debuggingEntityId: string, successCallback: (data: { GetMatrixRuleEntitiesResult: $D.Framework.Design.Flow.Service.Debugging.MatrixRuleDebugEntities }) => any, errorCallback?: () => any): JQueryPromise<{ GetMatrixRuleEntitiesResult: $D.Framework.Design.Flow.Service.Debugging.MatrixRuleDebugEntities }>;

	GetMatrixRuleEntities(debuggingEntityId: string): { GetMatrixRuleEntitiesResult: $D.Framework.Design.Flow.Service.Debugging.MatrixRuleDebugEntities };

	GetMatrixRuleEntitiesPromise(debuggingEntityId: string): Promise<$D.Framework.Design.Flow.Service.Debugging.MatrixRuleDebugEntities>;

	GetMatrixRuleEntitiesFromSession(sessionId: string, successCallback: (data: { GetMatrixRuleEntitiesFromSessionResult: $D.Framework.Design.Flow.Service.Debugging.MatrixRuleDebugEntities }) => any, errorCallback?: () => any): JQueryPromise<{ GetMatrixRuleEntitiesFromSessionResult: $D.Framework.Design.Flow.Service.Debugging.MatrixRuleDebugEntities }>;

	GetMatrixRuleEntitiesFromSession(sessionId: string): { GetMatrixRuleEntitiesFromSessionResult: $D.Framework.Design.Flow.Service.Debugging.MatrixRuleDebugEntities };

	GetMatrixRuleEntitiesFromSessionPromise(sessionId: string): Promise<$D.Framework.Design.Flow.Service.Debugging.MatrixRuleDebugEntities>;

	AddUnitTestFromContextId(matrixRuleId: string, contextId: string, successCallback: (data: { AddUnitTestFromContextIdResult: $D.Framework.Design.Flow.Service.Debugging.UnitTest }) => any, errorCallback?: () => any): JQueryPromise<{ AddUnitTestFromContextIdResult: $D.Framework.Design.Flow.Service.Debugging.UnitTest }>;

	AddUnitTestFromContextId(matrixRuleId: string, contextId: string): { AddUnitTestFromContextIdResult: $D.Framework.Design.Flow.Service.Debugging.UnitTest };

	AddUnitTestFromContextIdPromise(matrixRuleId: string, contextId: string): Promise<$D.Framework.Design.Flow.Service.Debugging.UnitTest>;

	GetUnitTests(matrixRuleId: string, successCallback: (data: { GetUnitTestsResult: $D.Framework.Design.Flow.Service.Debugging.UnitTest[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetUnitTestsResult: $D.Framework.Design.Flow.Service.Debugging.UnitTest[] }>;

	GetUnitTests(matrixRuleId: string): { GetUnitTestsResult: $D.Framework.Design.Flow.Service.Debugging.UnitTest[] };

	GetUnitTestsPromise(matrixRuleId: string): Promise<$D.Framework.Design.Flow.Service.Debugging.UnitTest[]>;

	EvaluateUnitTestForRule(matrixRuleId: string, unitTestId: string, successCallback: (data: { EvaluateUnitTestForRuleResult: $D.Framework.Design.Flow.Service.Debugging.UnitTestResult }) => any, errorCallback?: () => any): JQueryPromise<{ EvaluateUnitTestForRuleResult: $D.Framework.Design.Flow.Service.Debugging.UnitTestResult }>;

	EvaluateUnitTestForRule(matrixRuleId: string, unitTestId: string): { EvaluateUnitTestForRuleResult: $D.Framework.Design.Flow.Service.Debugging.UnitTestResult };

	EvaluateUnitTestForRulePromise(matrixRuleId: string, unitTestId: string): Promise<$D.Framework.Design.Flow.Service.Debugging.UnitTestResult>;

	RegisterContextForEditUnitTest(mapping: $D.Framework.Design.Flow.Service.MappingContext, unitTestId: string, successCallback: (data: { RegisterContextForEditUnitTestResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ RegisterContextForEditUnitTestResult: string }>;

	RegisterContextForEditUnitTest(mapping: $D.Framework.Design.Flow.Service.MappingContext, unitTestId: string): { RegisterContextForEditUnitTestResult: string };

	RegisterContextForEditUnitTestPromise(mapping: $D.Framework.Design.Flow.Service.MappingContext, unitTestId: string): Promise<string>;

	SaveUnitTestFromContextId(unitTestId: string, contextId: string, successCallback: (data: { SaveUnitTestFromContextIdResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveUnitTestFromContextIdResult: void }>;

	SaveUnitTestFromContextId(unitTestId: string, contextId: string): { SaveUnitTestFromContextIdResult: void };

	SaveUnitTestFromContextIdPromise(unitTestId: string, contextId: string): Promise<void>;

	DeleteUnitTest(unitTestId: string, successCallback: (data: { DeleteUnitTestResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteUnitTestResult: void }>;

	DeleteUnitTest(unitTestId: string): { DeleteUnitTestResult: void };

	DeleteUnitTestPromise(unitTestId: string): Promise<void>;

	MatrixRuleHasInputsForDebug(ruleId: string, successCallback: (data: { MatrixRuleHasInputsForDebugResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ MatrixRuleHasInputsForDebugResult: boolean }>;

	MatrixRuleHasInputsForDebug(ruleId: string): { MatrixRuleHasInputsForDebugResult: boolean };

	MatrixRuleHasInputsForDebugPromise(ruleId: string): Promise<boolean>;

	GetMatrixRuleInputsForDebug(ruleId: string, successCallback: (data: { GetMatrixRuleInputsForDebugResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMatrixRuleInputsForDebugResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }>;

	GetMatrixRuleInputsForDebug(ruleId: string): { GetMatrixRuleInputsForDebugResult: $D.Framework.Design.Flow.Mapping.DataDescription[] };

	GetMatrixRuleInputsForDebugPromise(ruleId: string): Promise<$D.Framework.Design.Flow.Mapping.DataDescription[]>;

	GetSessionUserContext(userId: string, password: string, successCallback: (data: { GetSessionUserContextResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext }) => any, errorCallback?: () => any): JQueryPromise<{ GetSessionUserContextResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext }>;

	GetSessionUserContext(userId: string, password: string): { GetSessionUserContextResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext };

	GetSessionUserContextPromise(userId: string, password: string): Promise<$D.Framework.ServiceLayer.Utilities.SessionUserContext>;

	GetPasswordUserContext(userId: string, password: string, successCallback: (data: { GetPasswordUserContextResult: $D.Framework.ServiceLayer.Utilities.PasswordCredentialsUserContext }) => any, errorCallback?: () => any): JQueryPromise<{ GetPasswordUserContextResult: $D.Framework.ServiceLayer.Utilities.PasswordCredentialsUserContext }>;

	GetPasswordUserContext(userId: string, password: string): { GetPasswordUserContextResult: $D.Framework.ServiceLayer.Utilities.PasswordCredentialsUserContext };

	GetPasswordUserContextPromise(userId: string, password: string): Promise<$D.Framework.ServiceLayer.Utilities.PasswordCredentialsUserContext>;

	GetGuestUserContext(successCallback: (data: { GetGuestUserContextResult: $D.Framework.ServiceLayer.Utilities.GuestUserContext }) => any, errorCallback?: () => any): JQueryPromise<{ GetGuestUserContextResult: $D.Framework.ServiceLayer.Utilities.GuestUserContext }>;

	GetGuestUserContext(): { GetGuestUserContextResult: $D.Framework.ServiceLayer.Utilities.GuestUserContext };

	GetGuestUserContextPromise(): Promise<$D.Framework.ServiceLayer.Utilities.GuestUserContext>;

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
}

interface ServicesStatic {
	MatrixRuleDebugService(): MatrixRuleDebugServiceStatic;
}
