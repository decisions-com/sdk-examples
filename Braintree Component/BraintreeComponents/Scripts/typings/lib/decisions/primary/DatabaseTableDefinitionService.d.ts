/// <reference path="./datatypes._base.d.ts" />

interface DatabaseTableDefinitionServiceStatic {

	GetTables(databaseId: string, successCallback: (data: { GetTablesResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseTableDefinition[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetTablesResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseTableDefinition[] }>;

	GetTables(databaseId: string): { GetTablesResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseTableDefinition[] };

	GetTablesPromise(databaseId: string): Promise<$D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseTableDefinition[]>;

	AddTable(databaseId: string, table: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseTableDefinition, successCallback: (data: { AddTableResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddTableResult: void }>;

	AddTable(databaseId: string, table: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseTableDefinition): { AddTableResult: void };

	AddTablePromise(databaseId: string, table: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseTableDefinition): Promise<void>;

	UpdateTable(table: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseTableDefinition, successCallback: (data: { UpdateTableResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateTableResult: void }>;

	UpdateTable(table: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseTableDefinition): { UpdateTableResult: void };

	UpdateTablePromise(table: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseTableDefinition): Promise<void>;

	DoesDBTableExist(databaseId: string, tableId: string, successCallback: (data: { DoesDBTableExistResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ DoesDBTableExistResult: boolean }>;

	DoesDBTableExist(databaseId: string, tableId: string): { DoesDBTableExistResult: boolean };

	DoesDBTableExistPromise(databaseId: string, tableId: string): Promise<boolean>;

	DoesTableExist(tableName: string, connectionName: string, definitionId: string, successCallback: (data: { DoesTableExistResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ DoesTableExistResult: boolean }>;

	DoesTableExist(tableName: string, connectionName: string, definitionId: string): { DoesTableExistResult: boolean };

	DoesTableExistPromise(tableName: string, connectionName: string, definitionId: string): Promise<boolean>;

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

	GetByFolderID(folderID: string, successCallback: (data: { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseTableDefinition[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByFolderIDResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseTableDefinition[] }>;

	GetByFolderID(folderID: string): { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseTableDefinition[] };

	GetByFolderIDPromise(folderID: string): Promise<$D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseTableDefinition[]>;

	GetByIDs(ids: string[], successCallback: (data: { GetByIDsResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseTableDefinition[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDsResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseTableDefinition[] }>;

	GetByIDs(ids: string[]): { GetByIDsResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseTableDefinition[] };

	GetByIDsPromise(ids: string[]): Promise<$D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseTableDefinition[]>;

	GetByID(id: string, successCallback: (data: { GetByIDResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseTableDefinition }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseTableDefinition }>;

	GetByID(id: string): { GetByIDResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseTableDefinition };

	GetByIDPromise(id: string): Promise<$D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseTableDefinition>;

	GetAll(successCallback: (data: { GetAllResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseTableDefinition[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseTableDefinition[] }>;

	GetAll(): { GetAllResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseTableDefinition[] };

	GetAllPromise(): Promise<$D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseTableDefinition[]>;

	Save(entity: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseTableDefinition, successCallback: (data: { SaveResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveResult: void }>;

	Save(entity: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseTableDefinition): { SaveResult: void };

	SavePromise(entity: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseTableDefinition): Promise<void>;

	Delete(id: string, successCallback: (data: { DeleteResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteResult: void }>;

	Delete(id: string): { DeleteResult: void };

	DeletePromise(id: string): Promise<void>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType, successCallback: (data: { SearchResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseTableDefinition[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseTableDefinition[] }>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): { SearchResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseTableDefinition[] };

	SearchPromise(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): Promise<$D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseTableDefinition[]>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseTableDefinition[], successCallback: (data: { SaveListResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseTableDefinition[] }) => any, errorCallback?: () => any): JQueryPromise<{ SaveListResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseTableDefinition[] }>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseTableDefinition[]): { SaveListResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseTableDefinition[] };

	SaveListPromise(entities: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseTableDefinition[]): Promise<$D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseTableDefinition[]>;
}

interface ServicesStatic {
	DatabaseTableDefinitionService(): DatabaseTableDefinitionServiceStatic;
}
