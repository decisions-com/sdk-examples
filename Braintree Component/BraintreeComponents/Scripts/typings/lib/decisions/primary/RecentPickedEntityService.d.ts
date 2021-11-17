/// <reference path="./datatypes._base.d.ts" />

interface RecentPickedEntityServiceStatic {

	AddMyRecentPickedEntity(entityId: string, successCallback: (data: { AddMyRecentPickedEntityResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddMyRecentPickedEntityResult: void }>;

	AddMyRecentPickedEntity(entityId: string): { AddMyRecentPickedEntityResult: void };

	AddMyRecentPickedEntityPromise(entityId: string): Promise<void>;

	AddRecentPickedEntity(entityId: string, accountId: string, successCallback: (data: { AddRecentPickedEntityResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddRecentPickedEntityResult: void }>;

	AddRecentPickedEntity(entityId: string, accountId: string): { AddRecentPickedEntityResult: void };

	AddRecentPickedEntityPromise(entityId: string, accountId: string): Promise<void>;

	AddRecentPickedEntityForList(entityId: string, accountId: string, listName: string, successCallback: (data: { AddRecentPickedEntityForListResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddRecentPickedEntityForListResult: void }>;

	AddRecentPickedEntityForList(entityId: string, accountId: string, listName: string): { AddRecentPickedEntityForListResult: void };

	AddRecentPickedEntityForListPromise(entityId: string, accountId: string, listName: string): Promise<void>;

	GetMyRecentPickedEntities(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], filterNames: string[], successCallback: (data: { GetMyRecentPickedEntitiesResult: $D.Framework.Data.ORMapper.EntityHeaderData[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMyRecentPickedEntitiesResult: $D.Framework.Data.ORMapper.EntityHeaderData[] }>;

	GetMyRecentPickedEntities(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], filterNames: string[]): { GetMyRecentPickedEntitiesResult: $D.Framework.Data.ORMapper.EntityHeaderData[] };

	GetMyRecentPickedEntitiesPromise(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], filterNames: string[]): Promise<$D.Framework.Data.ORMapper.EntityHeaderData[]>;

	GetMyRecentPickedEntitiesLimited(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], filterNames: string[], limit: number, successCallback: (data: { GetMyRecentPickedEntitiesLimitedResult: $D.Framework.Data.ORMapper.EntityHeaderData[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMyRecentPickedEntitiesLimitedResult: $D.Framework.Data.ORMapper.EntityHeaderData[] }>;

	GetMyRecentPickedEntitiesLimited(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], filterNames: string[], limit: number): { GetMyRecentPickedEntitiesLimitedResult: $D.Framework.Data.ORMapper.EntityHeaderData[] };

	GetMyRecentPickedEntitiesLimitedPromise(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], filterNames: string[], limit: number): Promise<$D.Framework.Data.ORMapper.EntityHeaderData[]>;

	GetRecentPickedEntitiesForAccount(accountId: string, types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], filterNames: string[], successCallback: (data: { GetRecentPickedEntitiesForAccountResult: $D.Framework.Data.ORMapper.EntityHeaderData[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetRecentPickedEntitiesForAccountResult: $D.Framework.Data.ORMapper.EntityHeaderData[] }>;

	GetRecentPickedEntitiesForAccount(accountId: string, types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], filterNames: string[]): { GetRecentPickedEntitiesForAccountResult: $D.Framework.Data.ORMapper.EntityHeaderData[] };

	GetRecentPickedEntitiesForAccountPromise(accountId: string, types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], filterNames: string[]): Promise<$D.Framework.Data.ORMapper.EntityHeaderData[]>;

	GetMyRecentPickedEntitiesForList(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], filterNames: string[], listName: string, successCallback: (data: { GetMyRecentPickedEntitiesForListResult: $D.Framework.Data.ORMapper.EntityHeaderData[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMyRecentPickedEntitiesForListResult: $D.Framework.Data.ORMapper.EntityHeaderData[] }>;

	GetMyRecentPickedEntitiesForList(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], filterNames: string[], listName: string): { GetMyRecentPickedEntitiesForListResult: $D.Framework.Data.ORMapper.EntityHeaderData[] };

	GetMyRecentPickedEntitiesForListPromise(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], filterNames: string[], listName: string): Promise<$D.Framework.Data.ORMapper.EntityHeaderData[]>;

	GetMyRecentPickedEntitiesLimitedForList(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], filterNames: string[], limit: number, listName: string, successCallback: (data: { GetMyRecentPickedEntitiesLimitedForListResult: $D.Framework.Data.ORMapper.EntityHeaderData[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMyRecentPickedEntitiesLimitedForListResult: $D.Framework.Data.ORMapper.EntityHeaderData[] }>;

	GetMyRecentPickedEntitiesLimitedForList(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], filterNames: string[], limit: number, listName: string): { GetMyRecentPickedEntitiesLimitedForListResult: $D.Framework.Data.ORMapper.EntityHeaderData[] };

	GetMyRecentPickedEntitiesLimitedForListPromise(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], filterNames: string[], limit: number, listName: string): Promise<$D.Framework.Data.ORMapper.EntityHeaderData[]>;

	GetRecentPickedEntitiesForAccountForList(accountId: string, types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], filterNames: string[], listName: string, successCallback: (data: { GetRecentPickedEntitiesForAccountForListResult: $D.Framework.Data.ORMapper.EntityHeaderData[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetRecentPickedEntitiesForAccountForListResult: $D.Framework.Data.ORMapper.EntityHeaderData[] }>;

	GetRecentPickedEntitiesForAccountForList(accountId: string, types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], filterNames: string[], listName: string): { GetRecentPickedEntitiesForAccountForListResult: $D.Framework.Data.ORMapper.EntityHeaderData[] };

	GetRecentPickedEntitiesForAccountForListPromise(accountId: string, types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], filterNames: string[], listName: string): Promise<$D.Framework.Data.ORMapper.EntityHeaderData[]>;

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
	RecentPickedEntityService(): RecentPickedEntityServiceStatic;
}
