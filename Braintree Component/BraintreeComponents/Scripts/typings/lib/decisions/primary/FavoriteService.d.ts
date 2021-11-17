/// <reference path="./datatypes._base.d.ts" />

interface FavoriteServiceStatic {

	SetFlowStepFavorite(flowSessionId: string, referenceId: string, favoriteType: $D.Framework.ServiceLayer.Services.Folder.FavoriteType, successCallback: (data: { SetFlowStepFavoriteResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetFlowStepFavoriteResult: void }>;

	SetFlowStepFavorite(flowSessionId: string, referenceId: string, favoriteType: $D.Framework.ServiceLayer.Services.Folder.FavoriteType): { SetFlowStepFavoriteResult: void };

	SetFlowStepFavoritePromise(flowSessionId: string, referenceId: string, favoriteType: $D.Framework.ServiceLayer.Services.Folder.FavoriteType): Promise<void>;

	SetFolderFavorite(folderId: string, favoriteType: $D.Framework.ServiceLayer.Services.Folder.FavoriteType, successCallback: (data: { SetFolderFavoriteResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetFolderFavoriteResult: void }>;

	SetFolderFavorite(folderId: string, favoriteType: $D.Framework.ServiceLayer.Services.Folder.FavoriteType): { SetFolderFavoriteResult: void };

	SetFolderFavoritePromise(folderId: string, favoriteType: $D.Framework.ServiceLayer.Services.Folder.FavoriteType): Promise<void>;

	SetFavoriteByReferenceType(referenceId: string, favoriteReferenceType: $D.Framework.ServiceLayer.Services.FavoriteReferenceType, favoriteType: $D.Framework.ServiceLayer.Services.Folder.FavoriteType, successCallback: (data: { SetFavoriteByReferenceTypeResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetFavoriteByReferenceTypeResult: void }>;

	SetFavoriteByReferenceType(referenceId: string, favoriteReferenceType: $D.Framework.ServiceLayer.Services.FavoriteReferenceType, favoriteType: $D.Framework.ServiceLayer.Services.Folder.FavoriteType): { SetFavoriteByReferenceTypeResult: void };

	SetFavoriteByReferenceTypePromise(referenceId: string, favoriteReferenceType: $D.Framework.ServiceLayer.Services.FavoriteReferenceType, favoriteType: $D.Framework.ServiceLayer.Services.Folder.FavoriteType): Promise<void>;

	SetEntityFavorite(entityId: string, favoriteType: $D.Framework.ServiceLayer.Services.Folder.FavoriteType, successCallback: (data: { SetEntityFavoriteResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetEntityFavoriteResult: void }>;

	SetEntityFavorite(entityId: string, favoriteType: $D.Framework.ServiceLayer.Services.Folder.FavoriteType): { SetEntityFavoriteResult: void };

	SetEntityFavoritePromise(entityId: string, favoriteType: $D.Framework.ServiceLayer.Services.Folder.FavoriteType): Promise<void>;

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
	FavoriteService(): FavoriteServiceStatic;
}
