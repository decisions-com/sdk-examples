/// <reference path="./datatypes._base.d.ts" />

interface InputDataServiceStatic {

	GetInputData(inputDataId: string, successCallback: (data: { GetInputDataResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetInputDataResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	GetInputData(inputDataId: string): { GetInputDataResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	GetInputDataPromise(inputDataId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	SaveInputData(elementRegistrationId: string, data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], successCallback: (data: { SaveInputDataResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveInputDataResult: void }>;

	SaveInputData(elementRegistrationId: string, data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): { SaveInputDataResult: void };

	SaveInputDataPromise(elementRegistrationId: string, data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): Promise<void>;

	AddFlowInputData(flowId: string, name: string, data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], successCallback: (data: { AddFlowInputDataResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddFlowInputDataResult: string }>;

	AddFlowInputData(flowId: string, name: string, data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): { AddFlowInputDataResult: string };

	AddFlowInputDataPromise(flowId: string, name: string, data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): Promise<string>;

	AddRuleInputData(ruleId: string, name: string, data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], successCallback: (data: { AddRuleInputDataResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddRuleInputDataResult: string }>;

	AddRuleInputData(ruleId: string, name: string, data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): { AddRuleInputDataResult: string };

	AddRuleInputDataPromise(ruleId: string, name: string, data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): Promise<string>;

	EditInputData(inputDataId: string, editingContext: string, successCallback: (data: { EditInputDataResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ EditInputDataResult: void }>;

	EditInputData(inputDataId: string, editingContext: string): { EditInputDataResult: void };

	EditInputDataPromise(inputDataId: string, editingContext: string): Promise<void>;

	SaveEditedInputData(inputDataId: string, editingContext: string, successCallback: (data: { SaveEditedInputDataResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveEditedInputDataResult: void }>;

	SaveEditedInputData(inputDataId: string, editingContext: string): { SaveEditedInputDataResult: void };

	SaveEditedInputDataPromise(inputDataId: string, editingContext: string): Promise<void>;

	AddEditedFlowInputData(flowId: string, name: string, editingContext: string, successCallback: (data: { AddEditedFlowInputDataResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddEditedFlowInputDataResult: string }>;

	AddEditedFlowInputData(flowId: string, name: string, editingContext: string): { AddEditedFlowInputDataResult: string };

	AddEditedFlowInputDataPromise(flowId: string, name: string, editingContext: string): Promise<string>;

	AddEditedRuleInputData(ruleId: string, name: string, editingContext: string, successCallback: (data: { AddEditedRuleInputDataResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddEditedRuleInputDataResult: string }>;

	AddEditedRuleInputData(ruleId: string, name: string, editingContext: string): { AddEditedRuleInputDataResult: string };

	AddEditedRuleInputDataPromise(ruleId: string, name: string, editingContext: string): Promise<string>;

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
	InputDataService(): InputDataServiceStatic;
}
