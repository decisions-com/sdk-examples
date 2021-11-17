/// <reference path="./datatypes._base.d.ts" />

interface FolderUserActionServiceStatic {

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

	GetByFolderID(folderID: string, successCallback: (data: { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Folder.FolderUserActions.FolderUserAction[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Folder.FolderUserActions.FolderUserAction[] }>;

	GetByFolderID(folderID: string): { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Folder.FolderUserActions.FolderUserAction[] };

	GetByFolderIDPromise(folderID: string): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderUserActions.FolderUserAction[]>;

	GetByIDs(ids: string[], successCallback: (data: { GetByIDsResult: $D.Framework.ServiceLayer.Services.Folder.FolderUserActions.FolderUserAction[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDsResult: $D.Framework.ServiceLayer.Services.Folder.FolderUserActions.FolderUserAction[] }>;

	GetByIDs(ids: string[]): { GetByIDsResult: $D.Framework.ServiceLayer.Services.Folder.FolderUserActions.FolderUserAction[] };

	GetByIDsPromise(ids: string[]): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderUserActions.FolderUserAction[]>;

	GetByID(id: string, successCallback: (data: { GetByIDResult: $D.Framework.ServiceLayer.Services.Folder.FolderUserActions.FolderUserAction }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDResult: $D.Framework.ServiceLayer.Services.Folder.FolderUserActions.FolderUserAction }>;

	GetByID(id: string): { GetByIDResult: $D.Framework.ServiceLayer.Services.Folder.FolderUserActions.FolderUserAction };

	GetByIDPromise(id: string): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderUserActions.FolderUserAction>;

	GetAll(successCallback: (data: { GetAllResult: $D.Framework.ServiceLayer.Services.Folder.FolderUserActions.FolderUserAction[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllResult: $D.Framework.ServiceLayer.Services.Folder.FolderUserActions.FolderUserAction[] }>;

	GetAll(): { GetAllResult: $D.Framework.ServiceLayer.Services.Folder.FolderUserActions.FolderUserAction[] };

	GetAllPromise(): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderUserActions.FolderUserAction[]>;

	Save(entity: $D.Framework.ServiceLayer.Services.Folder.FolderUserActions.FolderUserAction, successCallback: (data: { SaveResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveResult: void }>;

	Save(entity: $D.Framework.ServiceLayer.Services.Folder.FolderUserActions.FolderUserAction): { SaveResult: void };

	SavePromise(entity: $D.Framework.ServiceLayer.Services.Folder.FolderUserActions.FolderUserAction): Promise<void>;

	Delete(id: string, successCallback: (data: { DeleteResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteResult: void }>;

	Delete(id: string): { DeleteResult: void };

	DeletePromise(id: string): Promise<void>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType, successCallback: (data: { SearchResult: $D.Framework.ServiceLayer.Services.Folder.FolderUserActions.FolderUserAction[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchResult: $D.Framework.ServiceLayer.Services.Folder.FolderUserActions.FolderUserAction[] }>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): { SearchResult: $D.Framework.ServiceLayer.Services.Folder.FolderUserActions.FolderUserAction[] };

	SearchPromise(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderUserActions.FolderUserAction[]>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.Folder.FolderUserActions.FolderUserAction[], successCallback: (data: { SaveListResult: $D.Framework.ServiceLayer.Services.Folder.FolderUserActions.FolderUserAction[] }) => any, errorCallback?: () => any): JQueryPromise<{ SaveListResult: $D.Framework.ServiceLayer.Services.Folder.FolderUserActions.FolderUserAction[] }>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.Folder.FolderUserActions.FolderUserAction[]): { SaveListResult: $D.Framework.ServiceLayer.Services.Folder.FolderUserActions.FolderUserAction[] };

	SaveListPromise(entities: $D.Framework.ServiceLayer.Services.Folder.FolderUserActions.FolderUserAction[]): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderUserActions.FolderUserAction[]>;
}

interface ServicesStatic {
	FolderUserActionService(): FolderUserActionServiceStatic;
}
