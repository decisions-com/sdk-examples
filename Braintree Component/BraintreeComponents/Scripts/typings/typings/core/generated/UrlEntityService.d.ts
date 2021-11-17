/// <reference path="./datatypes._base.d.ts" />

interface UrlEntityServiceStatic {

	GetSessionUserContext(userId: string, password: string, successCallback: (data: { GetSessionUserContextResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext }) => any, errorCallback?: () => any): JQueryPromise<{ GetSessionUserContextResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext }>;

	GetSessionUserContext(userId: string, password: string): { GetSessionUserContextResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext };

	GetSessionUserContextPromise(userId: string, password: string): Promise<$D.Framework.ServiceLayer.Utilities.SessionUserContext>;

	GetPasswordUserContext(userId: string, password: string, successCallback: (data: { GetPasswordUserContextResult: $D.Framework.ServiceLayer.Utilities.PasswordCredentialsUserContext }) => any, errorCallback?: () => any): JQueryPromise<{ GetPasswordUserContextResult: $D.Framework.ServiceLayer.Utilities.PasswordCredentialsUserContext }>;

	GetPasswordUserContext(userId: string, password: string): { GetPasswordUserContextResult: $D.Framework.ServiceLayer.Utilities.PasswordCredentialsUserContext };

	GetPasswordUserContextPromise(userId: string, password: string): Promise<$D.Framework.ServiceLayer.Utilities.PasswordCredentialsUserContext>;

	GetGuestUserContext(successCallback: (data: { GetGuestUserContextResult: $D.Framework.ServiceLayer.Utilities.GuestUserContext }) => any, errorCallback?: () => any): JQueryPromise<{ GetGuestUserContextResult: $D.Framework.ServiceLayer.Utilities.GuestUserContext }>;

	GetGuestUserContext(): { GetGuestUserContextResult: $D.Framework.ServiceLayer.Utilities.GuestUserContext };

	GetGuestUserContextPromise(): Promise<$D.Framework.ServiceLayer.Utilities.GuestUserContext>;

	Exists(id: string, successCallback: (data: { ExistsResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ ExistsResult: boolean }>;

	Exists(id: string): { ExistsResult: boolean };

	ExistsPromise(id: string): Promise<boolean>;

	GetByFolderID(folderID: string, successCallback: (data: { GetByFolderIDResult: any[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByFolderIDResult: any[] }>;

	GetByFolderID(folderID: string): { GetByFolderIDResult: any[] };

	GetByFolderIDPromise(folderID: string): Promise<any[]>;

	GetByIDs(ids: string[], successCallback: (data: { GetByIDsResult: any[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDsResult: any[] }>;

	GetByIDs(ids: string[]): { GetByIDsResult: any[] };

	GetByIDsPromise(ids: string[]): Promise<any[]>;

	GetByID(id: string, successCallback: (data: { GetByIDResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDResult: any }>;

	GetByID(id: string): { GetByIDResult: any };

	GetByIDPromise(id: string): Promise<any>;

	GetAll(successCallback: (data: { GetAllResult: any[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllResult: any[] }>;

	GetAll(): { GetAllResult: any[] };

	GetAllPromise(): Promise<any[]>;

	Save(entity: any, successCallback: (data: { SaveResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveResult: void }>;

	Save(entity: any): { SaveResult: void };

	SavePromise(entity: any): Promise<void>;

	Delete(id: string, successCallback: (data: { DeleteResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteResult: void }>;

	Delete(id: string): { DeleteResult: void };

	DeletePromise(id: string): Promise<void>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType, successCallback: (data: { SearchResult: any[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchResult: any[] }>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): { SearchResult: any[] };

	SearchPromise(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): Promise<any[]>;

	SaveList(entities: any[], successCallback: (data: { SaveListResult: any[] }) => any, errorCallback?: () => any): JQueryPromise<{ SaveListResult: any[] }>;

	SaveList(entities: any[]): { SaveListResult: any[] };

	SaveListPromise(entities: any[]): Promise<any[]>;
}

interface ServicesStatic {
	UrlEntityService(): UrlEntityServiceStatic;
}
