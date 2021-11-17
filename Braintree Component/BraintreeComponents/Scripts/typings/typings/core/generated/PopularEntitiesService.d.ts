/// <reference path="./datatypes._base.d.ts" />

interface PopularEntitiesServiceStatic {

	AddToPopularEntities(entiyId: string, entityType: string, successCallback: (data: { AddToPopularEntitiesResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddToPopularEntitiesResult: void }>;

	AddToPopularEntities(entiyId: string, entityType: string): { AddToPopularEntitiesResult: void };

	AddToPopularEntitiesPromise(entiyId: string, entityType: string): Promise<void>;

	GetPopularEntitiesByType(entityType: string, folderId: string, successCallback: (data: { GetPopularEntitiesByTypeResult: $D.Framework.Data.ORMapper.EntityHeaderData[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetPopularEntitiesByTypeResult: $D.Framework.Data.ORMapper.EntityHeaderData[] }>;

	GetPopularEntitiesByType(entityType: string, folderId: string): { GetPopularEntitiesByTypeResult: $D.Framework.Data.ORMapper.EntityHeaderData[] };

	GetPopularEntitiesByTypePromise(entityType: string, folderId: string): Promise<$D.Framework.Data.ORMapper.EntityHeaderData[]>;

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
	PopularEntitiesService(): PopularEntitiesServiceStatic;
}
