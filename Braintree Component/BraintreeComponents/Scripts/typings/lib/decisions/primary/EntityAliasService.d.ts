/// <reference path="./datatypes._base.d.ts" />

interface EntityAliasServiceStatic {

	GetEntityId(alias: string, successCallback: (data: { GetEntityIdResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetEntityIdResult: string }>;

	GetEntityId(alias: string): { GetEntityIdResult: string };

	GetEntityIdPromise(alias: string): Promise<string>;

	AddEntityAlias(entityId: string, alias: string, successCallback: (data: { AddEntityAliasResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddEntityAliasResult: void }>;

	AddEntityAlias(entityId: string, alias: string): { AddEntityAliasResult: void };

	AddEntityAliasPromise(entityId: string, alias: string): Promise<void>;

	GetEntityAliases(entityId: string, successCallback: (data: { GetEntityAliasesResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetEntityAliasesResult: string[] }>;

	GetEntityAliases(entityId: string): { GetEntityAliasesResult: string[] };

	GetEntityAliasesPromise(entityId: string): Promise<string[]>;

	RemoveEntityAlias(alias: string, successCallback: (data: { RemoveEntityAliasResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveEntityAliasResult: void }>;

	RemoveEntityAlias(alias: string): { RemoveEntityAliasResult: void };

	RemoveEntityAliasPromise(alias: string): Promise<void>;

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

	GetByFolderID(folderID: string, successCallback: (data: { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Aliases.EntityAlias[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Aliases.EntityAlias[] }>;

	GetByFolderID(folderID: string): { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Aliases.EntityAlias[] };

	GetByFolderIDPromise(folderID: string): Promise<$D.Framework.ServiceLayer.Services.Aliases.EntityAlias[]>;

	GetByIDs(ids: string[], successCallback: (data: { GetByIDsResult: $D.Framework.ServiceLayer.Services.Aliases.EntityAlias[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDsResult: $D.Framework.ServiceLayer.Services.Aliases.EntityAlias[] }>;

	GetByIDs(ids: string[]): { GetByIDsResult: $D.Framework.ServiceLayer.Services.Aliases.EntityAlias[] };

	GetByIDsPromise(ids: string[]): Promise<$D.Framework.ServiceLayer.Services.Aliases.EntityAlias[]>;

	GetByID(id: string, successCallback: (data: { GetByIDResult: $D.Framework.ServiceLayer.Services.Aliases.EntityAlias }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDResult: $D.Framework.ServiceLayer.Services.Aliases.EntityAlias }>;

	GetByID(id: string): { GetByIDResult: $D.Framework.ServiceLayer.Services.Aliases.EntityAlias };

	GetByIDPromise(id: string): Promise<$D.Framework.ServiceLayer.Services.Aliases.EntityAlias>;

	GetAll(successCallback: (data: { GetAllResult: $D.Framework.ServiceLayer.Services.Aliases.EntityAlias[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllResult: $D.Framework.ServiceLayer.Services.Aliases.EntityAlias[] }>;

	GetAll(): { GetAllResult: $D.Framework.ServiceLayer.Services.Aliases.EntityAlias[] };

	GetAllPromise(): Promise<$D.Framework.ServiceLayer.Services.Aliases.EntityAlias[]>;

	Save(entity: $D.Framework.ServiceLayer.Services.Aliases.EntityAlias, successCallback: (data: { SaveResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveResult: void }>;

	Save(entity: $D.Framework.ServiceLayer.Services.Aliases.EntityAlias): { SaveResult: void };

	SavePromise(entity: $D.Framework.ServiceLayer.Services.Aliases.EntityAlias): Promise<void>;

	Delete(id: string, successCallback: (data: { DeleteResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteResult: void }>;

	Delete(id: string): { DeleteResult: void };

	DeletePromise(id: string): Promise<void>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType, successCallback: (data: { SearchResult: $D.Framework.ServiceLayer.Services.Aliases.EntityAlias[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchResult: $D.Framework.ServiceLayer.Services.Aliases.EntityAlias[] }>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): { SearchResult: $D.Framework.ServiceLayer.Services.Aliases.EntityAlias[] };

	SearchPromise(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): Promise<$D.Framework.ServiceLayer.Services.Aliases.EntityAlias[]>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.Aliases.EntityAlias[], successCallback: (data: { SaveListResult: $D.Framework.ServiceLayer.Services.Aliases.EntityAlias[] }) => any, errorCallback?: () => any): JQueryPromise<{ SaveListResult: $D.Framework.ServiceLayer.Services.Aliases.EntityAlias[] }>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.Aliases.EntityAlias[]): { SaveListResult: $D.Framework.ServiceLayer.Services.Aliases.EntityAlias[] };

	SaveListPromise(entities: $D.Framework.ServiceLayer.Services.Aliases.EntityAlias[]): Promise<$D.Framework.ServiceLayer.Services.Aliases.EntityAlias[]>;
}

interface ServicesStatic {
	EntityAliasService(): EntityAliasServiceStatic;
}
