/// <reference path="./datatypes._base.d.ts" />

interface CommonDesignerServiceStatic {

	GetDesignerInfo(elementRegistrationId: string, successCallback: (data: { GetDesignerInfoResult: $D.Framework.Design.Flow.Service.Edit.DesignerInfo }) => any, errorCallback?: () => any): JQueryPromise<{ GetDesignerInfoResult: $D.Framework.Design.Flow.Service.Edit.DesignerInfo }>;

	GetDesignerInfo(elementRegistrationId: string): { GetDesignerInfoResult: $D.Framework.Design.Flow.Service.Edit.DesignerInfo };

	GetDesignerInfoPromise(elementRegistrationId: string): Promise<$D.Framework.Design.Flow.Service.Edit.DesignerInfo>;

	SetDesignerInfo(elementRegistrationId: string, info: $D.Framework.Design.Flow.Service.Edit.DesignerInfo, successCallback: (data: { SetDesignerInfoResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetDesignerInfoResult: void }>;

	SetDesignerInfo(elementRegistrationId: string, info: $D.Framework.Design.Flow.Service.Edit.DesignerInfo): { SetDesignerInfoResult: void };

	SetDesignerInfoPromise(elementRegistrationId: string, info: $D.Framework.Design.Flow.Service.Edit.DesignerInfo): Promise<void>;

	SetDesignerChanged(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, successCallback: (data: { SetDesignerChangedResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetDesignerChangedResult: void }>;

	SetDesignerChanged(mappingContext: $D.Framework.Design.Flow.Service.MappingContext): { SetDesignerChangedResult: void };

	SetDesignerChangedPromise(mappingContext: $D.Framework.Design.Flow.Service.MappingContext): Promise<void>;

	ApplyDesignPattern(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, patternId: string, successCallback: (data: { ApplyDesignPatternResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ApplyDesignPatternResult: void }>;

	ApplyDesignPattern(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, patternId: string): { ApplyDesignPatternResult: void };

	ApplyDesignPatternPromise(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, patternId: string): Promise<void>;

	UnApplyDesignPattern(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, successCallback: (data: { UnApplyDesignPatternResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UnApplyDesignPatternResult: void }>;

	UnApplyDesignPattern(mappingContext: $D.Framework.Design.Flow.Service.MappingContext): { UnApplyDesignPatternResult: void };

	UnApplyDesignPatternPromise(mappingContext: $D.Framework.Design.Flow.Service.MappingContext): Promise<void>;

	GetSaveDesignerInfo(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, successCallback: (data: { GetSaveDesignerInfoResult: $D.Framework.Design.SaveDesignerInfo }) => any, errorCallback?: () => any): JQueryPromise<{ GetSaveDesignerInfoResult: $D.Framework.Design.SaveDesignerInfo }>;

	GetSaveDesignerInfo(mappingContext: $D.Framework.Design.Flow.Service.MappingContext): { GetSaveDesignerInfoResult: $D.Framework.Design.SaveDesignerInfo };

	GetSaveDesignerInfoPromise(mappingContext: $D.Framework.Design.Flow.Service.MappingContext): Promise<$D.Framework.Design.SaveDesignerInfo>;

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
	CommonDesignerService(): CommonDesignerServiceStatic;
}
