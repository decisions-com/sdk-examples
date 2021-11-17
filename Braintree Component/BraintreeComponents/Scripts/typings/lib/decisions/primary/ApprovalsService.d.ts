/// <reference path="./datatypes._base.d.ts" />

interface ApprovalsServiceStatic {

	CreateApprovalDataRule(folderId: string, ruleName: string, ruleTemplateId: string, inputData: $D.Framework.Design.Flow.FlowInputDataDescription[], successCallback: (data: { CreateApprovalDataRuleResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateApprovalDataRuleResult: string }>;

	CreateApprovalDataRule(folderId: string, ruleName: string, ruleTemplateId: string, inputData: $D.Framework.Design.Flow.FlowInputDataDescription[]): { CreateApprovalDataRuleResult: string };

	CreateApprovalDataRulePromise(folderId: string, ruleName: string, ruleTemplateId: string, inputData: $D.Framework.Design.Flow.FlowInputDataDescription[]): Promise<string>;

	SetApprovalChainRuleInputData(ruleIds: string[], inputData: $D.Framework.Design.Flow.FlowInputDataDescription[], successCallback: (data: { SetApprovalChainRuleInputDataResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetApprovalChainRuleInputDataResult: void }>;

	SetApprovalChainRuleInputData(ruleIds: string[], inputData: $D.Framework.Design.Flow.FlowInputDataDescription[]): { SetApprovalChainRuleInputDataResult: void };

	SetApprovalChainRuleInputDataPromise(ruleIds: string[], inputData: $D.Framework.Design.Flow.FlowInputDataDescription[]): Promise<void>;

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
	ApprovalsService(): ApprovalsServiceStatic;
}
