/// <reference path="./datatypes._base.d.ts" />

interface EntityIDServiceStatic {

	GetNextIDFillWithPadChar(prefix: string, padChar: string, length: number, successCallback: (data: { GetNextIDFillWithPadCharResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetNextIDFillWithPadCharResult: string }>;

	GetNextIDFillWithPadChar(prefix: string, padChar: string, length: number): { GetNextIDFillWithPadCharResult: string };

	GetNextIDFillWithPadCharPromise(prefix: string, padChar: string, length: number): Promise<string>;

	GetNextID(prefix: string, successCallback: (data: { GetNextIDResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetNextIDResult: string }>;

	GetNextID(prefix: string): { GetNextIDResult: string };

	GetNextIDPromise(prefix: string): Promise<string>;

	GetNextNumber(prefix: string, successCallback: (data: { GetNextNumberResult: number }) => any, errorCallback?: () => any): JQueryPromise<{ GetNextNumberResult: number }>;

	GetNextNumber(prefix: string): { GetNextNumberResult: number };

	GetNextNumberPromise(prefix: string): Promise<number>;

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

	GetByFolderID(folderID: string, successCallback: (data: { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.EntityID.EntityIDData[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByFolderIDResult: $D.Framework.ServiceLayer.Services.EntityID.EntityIDData[] }>;

	GetByFolderID(folderID: string): { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.EntityID.EntityIDData[] };

	GetByFolderIDPromise(folderID: string): Promise<$D.Framework.ServiceLayer.Services.EntityID.EntityIDData[]>;

	GetByIDs(ids: string[], successCallback: (data: { GetByIDsResult: $D.Framework.ServiceLayer.Services.EntityID.EntityIDData[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDsResult: $D.Framework.ServiceLayer.Services.EntityID.EntityIDData[] }>;

	GetByIDs(ids: string[]): { GetByIDsResult: $D.Framework.ServiceLayer.Services.EntityID.EntityIDData[] };

	GetByIDsPromise(ids: string[]): Promise<$D.Framework.ServiceLayer.Services.EntityID.EntityIDData[]>;

	GetByID(id: string, successCallback: (data: { GetByIDResult: $D.Framework.ServiceLayer.Services.EntityID.EntityIDData }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDResult: $D.Framework.ServiceLayer.Services.EntityID.EntityIDData }>;

	GetByID(id: string): { GetByIDResult: $D.Framework.ServiceLayer.Services.EntityID.EntityIDData };

	GetByIDPromise(id: string): Promise<$D.Framework.ServiceLayer.Services.EntityID.EntityIDData>;

	GetAll(successCallback: (data: { GetAllResult: $D.Framework.ServiceLayer.Services.EntityID.EntityIDData[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllResult: $D.Framework.ServiceLayer.Services.EntityID.EntityIDData[] }>;

	GetAll(): { GetAllResult: $D.Framework.ServiceLayer.Services.EntityID.EntityIDData[] };

	GetAllPromise(): Promise<$D.Framework.ServiceLayer.Services.EntityID.EntityIDData[]>;

	Save(entity: $D.Framework.ServiceLayer.Services.EntityID.EntityIDData, successCallback: (data: { SaveResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveResult: void }>;

	Save(entity: $D.Framework.ServiceLayer.Services.EntityID.EntityIDData): { SaveResult: void };

	SavePromise(entity: $D.Framework.ServiceLayer.Services.EntityID.EntityIDData): Promise<void>;

	Delete(id: string, successCallback: (data: { DeleteResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteResult: void }>;

	Delete(id: string): { DeleteResult: void };

	DeletePromise(id: string): Promise<void>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType, successCallback: (data: { SearchResult: $D.Framework.ServiceLayer.Services.EntityID.EntityIDData[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchResult: $D.Framework.ServiceLayer.Services.EntityID.EntityIDData[] }>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): { SearchResult: $D.Framework.ServiceLayer.Services.EntityID.EntityIDData[] };

	SearchPromise(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): Promise<$D.Framework.ServiceLayer.Services.EntityID.EntityIDData[]>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.EntityID.EntityIDData[], successCallback: (data: { SaveListResult: $D.Framework.ServiceLayer.Services.EntityID.EntityIDData[] }) => any, errorCallback?: () => any): JQueryPromise<{ SaveListResult: $D.Framework.ServiceLayer.Services.EntityID.EntityIDData[] }>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.EntityID.EntityIDData[]): { SaveListResult: $D.Framework.ServiceLayer.Services.EntityID.EntityIDData[] };

	SaveListPromise(entities: $D.Framework.ServiceLayer.Services.EntityID.EntityIDData[]): Promise<$D.Framework.ServiceLayer.Services.EntityID.EntityIDData[]>;
}

interface ServicesStatic {
	EntityIDService(): EntityIDServiceStatic;
}
