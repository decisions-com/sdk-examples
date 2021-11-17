/// <reference path="./datatypes._base.d.ts" />

interface DataServiceStatic {

	FetchData(id: string, successCallback: (data: { FetchDataResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ FetchDataResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	FetchData(id: string): { FetchDataResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	FetchDataPromise(id: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	PostContextResult(id: string, resultName: string, data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], successCallback: (data: { PostContextResultResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ PostContextResultResult: void }>;

	PostContextResult(id: string, resultName: string, data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): { PostContextResultResult: void };

	PostContextResultPromise(id: string, resultName: string, data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): Promise<void>;

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
	DataService(): DataServiceStatic;
}
