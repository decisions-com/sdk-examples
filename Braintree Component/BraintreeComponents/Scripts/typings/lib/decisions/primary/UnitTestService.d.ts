/// <reference path="./datatypes._base.d.ts" />

interface UnitTestServiceStatic {

	GetTestsInFolder(folderId: string, successCallback: (data: { GetTestsInFolderResult: $D.Framework.Design.Flow.Service.Debugging.UnitTest[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetTestsInFolderResult: $D.Framework.Design.Flow.Service.Debugging.UnitTest[] }>;

	GetTestsInFolder(folderId: string): { GetTestsInFolderResult: $D.Framework.Design.Flow.Service.Debugging.UnitTest[] };

	GetTestsInFolderPromise(folderId: string): Promise<$D.Framework.Design.Flow.Service.Debugging.UnitTest[]>;

	ExecuteUnitTestsForFlow(flowId: string, throwExceptionOnNoUnitTests: boolean, successCallback: (data: { ExecuteUnitTestsForFlowResult: $D.Framework.ServiceLayer.Services.UnitTesting.UnitTestResult[] }) => any, errorCallback?: () => any): JQueryPromise<{ ExecuteUnitTestsForFlowResult: $D.Framework.ServiceLayer.Services.UnitTesting.UnitTestResult[] }>;

	ExecuteUnitTestsForFlow(flowId: string, throwExceptionOnNoUnitTests: boolean): { ExecuteUnitTestsForFlowResult: $D.Framework.ServiceLayer.Services.UnitTesting.UnitTestResult[] };

	ExecuteUnitTestsForFlowPromise(flowId: string, throwExceptionOnNoUnitTests: boolean): Promise<$D.Framework.ServiceLayer.Services.UnitTesting.UnitTestResult[]>;

	ExecuteUnitTestsForRule(ruleId: string, throwExceptionOnNoUnitTests: boolean, successCallback: (data: { ExecuteUnitTestsForRuleResult: $D.Framework.ServiceLayer.Services.UnitTesting.UnitTestResult[] }) => any, errorCallback?: () => any): JQueryPromise<{ ExecuteUnitTestsForRuleResult: $D.Framework.ServiceLayer.Services.UnitTesting.UnitTestResult[] }>;

	ExecuteUnitTestsForRule(ruleId: string, throwExceptionOnNoUnitTests: boolean): { ExecuteUnitTestsForRuleResult: $D.Framework.ServiceLayer.Services.UnitTesting.UnitTestResult[] };

	ExecuteUnitTestsForRulePromise(ruleId: string, throwExceptionOnNoUnitTests: boolean): Promise<$D.Framework.ServiceLayer.Services.UnitTesting.UnitTestResult[]>;

	ExecuteUnitTestsForDesignerFolder(folderId: string, successCallback: (data: { ExecuteUnitTestsForDesignerFolderResult: $D.Framework.ServiceLayer.Services.UnitTesting.UnitTestResult[] }) => any, errorCallback?: () => any): JQueryPromise<{ ExecuteUnitTestsForDesignerFolderResult: $D.Framework.ServiceLayer.Services.UnitTesting.UnitTestResult[] }>;

	ExecuteUnitTestsForDesignerFolder(folderId: string): { ExecuteUnitTestsForDesignerFolderResult: $D.Framework.ServiceLayer.Services.UnitTesting.UnitTestResult[] };

	ExecuteUnitTestsForDesignerFolderPromise(folderId: string): Promise<$D.Framework.ServiceLayer.Services.UnitTesting.UnitTestResult[]>;

	RegisterContextToAddUnitTest(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, inputsContextId: string, successCallback: (data: { RegisterContextToAddUnitTestResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ RegisterContextToAddUnitTestResult: string }>;

	RegisterContextToAddUnitTest(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, inputsContextId: string): { RegisterContextToAddUnitTestResult: string };

	RegisterContextToAddUnitTestPromise(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, inputsContextId: string): Promise<string>;

	GetUnitTests(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, successCallback: (data: { GetUnitTestsResult: $D.Framework.Design.Flow.Service.Debugging.UnitTest[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetUnitTestsResult: $D.Framework.Design.Flow.Service.Debugging.UnitTest[] }>;

	GetUnitTests(mappingContext: $D.Framework.Design.Flow.Service.MappingContext): { GetUnitTestsResult: $D.Framework.Design.Flow.Service.Debugging.UnitTest[] };

	GetUnitTestsPromise(mappingContext: $D.Framework.Design.Flow.Service.MappingContext): Promise<$D.Framework.Design.Flow.Service.Debugging.UnitTest[]>;

	GetUnitTest(unitTestId: string, successCallback: (data: { GetUnitTestResult: $D.Framework.Design.Flow.Service.Debugging.UnitTest }) => any, errorCallback?: () => any): JQueryPromise<{ GetUnitTestResult: $D.Framework.Design.Flow.Service.Debugging.UnitTest }>;

	GetUnitTest(unitTestId: string): { GetUnitTestResult: $D.Framework.Design.Flow.Service.Debugging.UnitTest };

	GetUnitTestPromise(unitTestId: string): Promise<$D.Framework.Design.Flow.Service.Debugging.UnitTest>;

	RegisterContextForEditUnitTest(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, unitTestId: string, successCallback: (data: { RegisterContextForEditUnitTestResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ RegisterContextForEditUnitTestResult: string }>;

	RegisterContextForEditUnitTest(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, unitTestId: string): { RegisterContextForEditUnitTestResult: string };

	RegisterContextForEditUnitTestPromise(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, unitTestId: string): Promise<string>;

	RegisterContextForCopyUnitTest(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, unitTestId: string, successCallback: (data: { RegisterContextForCopyUnitTestResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ RegisterContextForCopyUnitTestResult: string }>;

	RegisterContextForCopyUnitTest(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, unitTestId: string): { RegisterContextForCopyUnitTestResult: string };

	RegisterContextForCopyUnitTestPromise(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, unitTestId: string): Promise<string>;

	AddUnitTestFromContextId(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, contextId: string, successCallback: (data: { AddUnitTestFromContextIdResult: $D.Framework.Design.Flow.Service.Debugging.UnitTest }) => any, errorCallback?: () => any): JQueryPromise<{ AddUnitTestFromContextIdResult: $D.Framework.Design.Flow.Service.Debugging.UnitTest }>;

	AddUnitTestFromContextId(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, contextId: string): { AddUnitTestFromContextIdResult: $D.Framework.Design.Flow.Service.Debugging.UnitTest };

	AddUnitTestFromContextIdPromise(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, contextId: string): Promise<$D.Framework.Design.Flow.Service.Debugging.UnitTest>;

	SaveUnitTestFromContextId(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, unitTestId: string, contextId: string, successCallback: (data: { SaveUnitTestFromContextIdResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveUnitTestFromContextIdResult: void }>;

	SaveUnitTestFromContextId(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, unitTestId: string, contextId: string): { SaveUnitTestFromContextIdResult: void };

	SaveUnitTestFromContextIdPromise(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, unitTestId: string, contextId: string): Promise<void>;

	EvaluateUnitTest(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, unitTestId: string, successCallback: (data: { EvaluateUnitTestResult: $D.Framework.Design.Flow.Service.Debugging.UnitTestResult }) => any, errorCallback?: () => any): JQueryPromise<{ EvaluateUnitTestResult: $D.Framework.Design.Flow.Service.Debugging.UnitTestResult }>;

	EvaluateUnitTest(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, unitTestId: string): { EvaluateUnitTestResult: $D.Framework.Design.Flow.Service.Debugging.UnitTestResult };

	EvaluateUnitTestPromise(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, unitTestId: string): Promise<$D.Framework.Design.Flow.Service.Debugging.UnitTestResult>;

	DeleteUnitTest(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, unitTestId: string, successCallback: (data: { DeleteUnitTestResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteUnitTestResult: void }>;

	DeleteUnitTest(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, unitTestId: string): { DeleteUnitTestResult: void };

	DeleteUnitTestPromise(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, unitTestId: string): Promise<void>;

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
	UnitTestService(): UnitTestServiceStatic;
}
