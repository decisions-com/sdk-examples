/// <reference path="./datatypes._base.d.ts" />

interface DatabaseViewDefinitionServiceStatic {

	GetViews(databaseId: string, successCallback: (data: { GetViewsResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseViewDefinition[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetViewsResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseViewDefinition[] }>;

	GetViews(databaseId: string): { GetViewsResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseViewDefinition[] };

	GetViewsPromise(databaseId: string): Promise<$D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseViewDefinition[]>;

	AddView(databaseId: string, view: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseViewDefinition, successCallback: (data: { AddViewResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddViewResult: void }>;

	AddView(databaseId: string, view: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseViewDefinition): { AddViewResult: void };

	AddViewPromise(databaseId: string, view: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseViewDefinition): Promise<void>;

	UpdateView(view: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseViewDefinition, successCallback: (data: { UpdateViewResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateViewResult: void }>;

	UpdateView(view: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseViewDefinition): { UpdateViewResult: void };

	UpdateViewPromise(view: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseViewDefinition): Promise<void>;

	DoesDBViewExist(databaseId: string, tableId: string, successCallback: (data: { DoesDBViewExistResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ DoesDBViewExistResult: boolean }>;

	DoesDBViewExist(databaseId: string, tableId: string): { DoesDBViewExistResult: boolean };

	DoesDBViewExistPromise(databaseId: string, tableId: string): Promise<boolean>;

	DoesViewExist(viewName: string, connectionName: string, definitionId: string, successCallback: (data: { DoesViewExistResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ DoesViewExistResult: boolean }>;

	DoesViewExist(viewName: string, connectionName: string, definitionId: string): { DoesViewExistResult: boolean };

	DoesViewExistPromise(viewName: string, connectionName: string, definitionId: string): Promise<boolean>;

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

	GetByFolderID(folderID: string, successCallback: (data: { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseViewDefinition[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByFolderIDResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseViewDefinition[] }>;

	GetByFolderID(folderID: string): { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseViewDefinition[] };

	GetByFolderIDPromise(folderID: string): Promise<$D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseViewDefinition[]>;

	GetByIDs(ids: string[], successCallback: (data: { GetByIDsResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseViewDefinition[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDsResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseViewDefinition[] }>;

	GetByIDs(ids: string[]): { GetByIDsResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseViewDefinition[] };

	GetByIDsPromise(ids: string[]): Promise<$D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseViewDefinition[]>;

	GetByID(id: string, successCallback: (data: { GetByIDResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseViewDefinition }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseViewDefinition }>;

	GetByID(id: string): { GetByIDResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseViewDefinition };

	GetByIDPromise(id: string): Promise<$D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseViewDefinition>;

	GetAll(successCallback: (data: { GetAllResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseViewDefinition[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseViewDefinition[] }>;

	GetAll(): { GetAllResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseViewDefinition[] };

	GetAllPromise(): Promise<$D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseViewDefinition[]>;

	Save(entity: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseViewDefinition, successCallback: (data: { SaveResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveResult: void }>;

	Save(entity: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseViewDefinition): { SaveResult: void };

	SavePromise(entity: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseViewDefinition): Promise<void>;

	Delete(id: string, successCallback: (data: { DeleteResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteResult: void }>;

	Delete(id: string): { DeleteResult: void };

	DeletePromise(id: string): Promise<void>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType, successCallback: (data: { SearchResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseViewDefinition[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseViewDefinition[] }>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): { SearchResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseViewDefinition[] };

	SearchPromise(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): Promise<$D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseViewDefinition[]>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseViewDefinition[], successCallback: (data: { SaveListResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseViewDefinition[] }) => any, errorCallback?: () => any): JQueryPromise<{ SaveListResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseViewDefinition[] }>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseViewDefinition[]): { SaveListResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseViewDefinition[] };

	SaveListPromise(entities: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseViewDefinition[]): Promise<$D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseViewDefinition[]>;
}

interface ServicesStatic {
	DatabaseViewDefinitionService(): DatabaseViewDefinitionServiceStatic;
}
