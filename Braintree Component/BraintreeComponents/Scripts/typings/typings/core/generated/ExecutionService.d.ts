/// <reference path="./datatypes._base.d.ts" />

interface ExecutionServiceStatic {

	GetInputs(mapping: $D.Framework.Design.Flow.Service.MappingContext, successCallback: (data: { GetInputsResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetInputsResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }>;

	GetInputs(mapping: $D.Framework.Design.Flow.Service.MappingContext): { GetInputsResult: $D.Framework.Design.Flow.Mapping.DataDescription[] };

	GetInputsPromise(mapping: $D.Framework.Design.Flow.Service.MappingContext): Promise<$D.Framework.Design.Flow.Mapping.DataDescription[]>;

	RegisterContextProviderForInputsWithExclude(mapping: $D.Framework.Design.Flow.Service.MappingContext, editingContextId: string, excludedParameters: string[], successCallback: (data: { RegisterContextProviderForInputsWithExcludeResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ RegisterContextProviderForInputsWithExcludeResult: string }>;

	RegisterContextProviderForInputsWithExclude(mapping: $D.Framework.Design.Flow.Service.MappingContext, editingContextId: string, excludedParameters: string[]): { RegisterContextProviderForInputsWithExcludeResult: string };

	RegisterContextProviderForInputsWithExcludePromise(mapping: $D.Framework.Design.Flow.Service.MappingContext, editingContextId: string, excludedParameters: string[]): Promise<string>;

	RegisterContextProviderForInputs(mapping: $D.Framework.Design.Flow.Service.MappingContext, successCallback: (data: { RegisterContextProviderForInputsResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ RegisterContextProviderForInputsResult: string }>;

	RegisterContextProviderForInputs(mapping: $D.Framework.Design.Flow.Service.MappingContext): { RegisterContextProviderForInputsResult: string };

	RegisterContextProviderForInputsPromise(mapping: $D.Framework.Design.Flow.Service.MappingContext): Promise<string>;

	UnRegisterContextProviderForInputs(mapping: $D.Framework.Design.Flow.Service.MappingContext, contextId: string, successCallback: (data: { UnRegisterContextProviderForInputsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UnRegisterContextProviderForInputsResult: void }>;

	UnRegisterContextProviderForInputs(mapping: $D.Framework.Design.Flow.Service.MappingContext, contextId: string): { UnRegisterContextProviderForInputsResult: void };

	UnRegisterContextProviderForInputsPromise(mapping: $D.Framework.Design.Flow.Service.MappingContext, contextId: string): Promise<void>;

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
	ExecutionService(): ExecutionServiceStatic;
}
