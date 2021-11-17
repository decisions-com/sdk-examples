/// <reference path="./datatypes._base.d.ts" />

interface EntityPickerServiceStatic {

	AttachEntityToProject(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, elementId: string, successCallback: (data: { AttachEntityToProjectResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AttachEntityToProjectResult: void }>;

	AttachEntityToProject(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, elementId: string): { AttachEntityToProjectResult: void };

	AttachEntityToProjectPromise(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, elementId: string): Promise<void>;

	SearchEntitiesWithFilters(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], folderId: string, textToSearch: string, filterNames: string[], loadIcon: boolean, successCallback: (data: { SearchEntitiesWithFiltersResult: $D.Framework.ServiceLayer.Services.EntityPickerItem[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchEntitiesWithFiltersResult: $D.Framework.ServiceLayer.Services.EntityPickerItem[] }>;

	SearchEntitiesWithFilters(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], folderId: string, textToSearch: string, filterNames: string[], loadIcon: boolean): { SearchEntitiesWithFiltersResult: $D.Framework.ServiceLayer.Services.EntityPickerItem[] };

	SearchEntitiesWithFiltersPromise(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], folderId: string, textToSearch: string, filterNames: string[], loadIcon: boolean): Promise<$D.Framework.ServiceLayer.Services.EntityPickerItem[]>;

	GetEntityWithFilters(entityId: string, filterNames: string[], loadIcon: boolean, successCallback: (data: { GetEntityWithFiltersResult: $D.Framework.ServiceLayer.Services.EntityPickerItem }) => any, errorCallback?: () => any): JQueryPromise<{ GetEntityWithFiltersResult: $D.Framework.ServiceLayer.Services.EntityPickerItem }>;

	GetEntityWithFilters(entityId: string, filterNames: string[], loadIcon: boolean): { GetEntityWithFiltersResult: $D.Framework.ServiceLayer.Services.EntityPickerItem };

	GetEntityWithFiltersPromise(entityId: string, filterNames: string[], loadIcon: boolean): Promise<$D.Framework.ServiceLayer.Services.EntityPickerItem>;

	GetEntitiesWithFilters(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], folderId: string, filterNames: string[], loadIcon: boolean, successCallback: (data: { GetEntitiesWithFiltersResult: $D.Framework.ServiceLayer.Services.EntityPickerItem[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetEntitiesWithFiltersResult: $D.Framework.ServiceLayer.Services.EntityPickerItem[] }>;

	GetEntitiesWithFilters(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], folderId: string, filterNames: string[], loadIcon: boolean): { GetEntitiesWithFiltersResult: $D.Framework.ServiceLayer.Services.EntityPickerItem[] };

	GetEntitiesWithFiltersPromise(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], folderId: string, filterNames: string[], loadIcon: boolean): Promise<$D.Framework.ServiceLayer.Services.EntityPickerItem[]>;

	GetRootFoldersWithFilters(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], filterNames: string[], loadIcon: boolean, successCallback: (data: { GetRootFoldersWithFiltersResult: $D.Framework.ServiceLayer.Services.EntityPickerFolder[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetRootFoldersWithFiltersResult: $D.Framework.ServiceLayer.Services.EntityPickerFolder[] }>;

	GetRootFoldersWithFilters(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], filterNames: string[], loadIcon: boolean): { GetRootFoldersWithFiltersResult: $D.Framework.ServiceLayer.Services.EntityPickerFolder[] };

	GetRootFoldersWithFiltersPromise(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], filterNames: string[], loadIcon: boolean): Promise<$D.Framework.ServiceLayer.Services.EntityPickerFolder[]>;

	GetSubFoldersWithFilters(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], folderId: string, filterNames: string[], loadIcon: boolean, successCallback: (data: { GetSubFoldersWithFiltersResult: $D.Framework.ServiceLayer.Services.EntityPickerFolder[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetSubFoldersWithFiltersResult: $D.Framework.ServiceLayer.Services.EntityPickerFolder[] }>;

	GetSubFoldersWithFilters(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], folderId: string, filterNames: string[], loadIcon: boolean): { GetSubFoldersWithFiltersResult: $D.Framework.ServiceLayer.Services.EntityPickerFolder[] };

	GetSubFoldersWithFiltersPromise(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], folderId: string, filterNames: string[], loadIcon: boolean): Promise<$D.Framework.ServiceLayer.Services.EntityPickerFolder[]>;

	FilterEntity(entityId: string, filterNames: string[], successCallback: (data: { FilterEntityResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ FilterEntityResult: boolean }>;

	FilterEntity(entityId: string, filterNames: string[]): { FilterEntityResult: boolean };

	FilterEntityPromise(entityId: string, filterNames: string[]): Promise<boolean>;

	IsNeedToPickBlindly(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], folderId: string, successCallback: (data: { IsNeedToPickBlindlyResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ IsNeedToPickBlindlyResult: boolean }>;

	IsNeedToPickBlindly(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], folderId: string): { IsNeedToPickBlindlyResult: boolean };

	IsNeedToPickBlindlyPromise(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], folderId: string): Promise<boolean>;

	GetBlindPickEntityHeader(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], filters: string[], name: string, successCallback: (data: { GetBlindPickEntityHeaderResult: $D.Framework.ServiceLayer.Services.EntityPickerItem }) => any, errorCallback?: () => any): JQueryPromise<{ GetBlindPickEntityHeaderResult: $D.Framework.ServiceLayer.Services.EntityPickerItem }>;

	GetBlindPickEntityHeader(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], filters: string[], name: string): { GetBlindPickEntityHeaderResult: $D.Framework.ServiceLayer.Services.EntityPickerItem };

	GetBlindPickEntityHeaderPromise(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], filters: string[], name: string): Promise<$D.Framework.ServiceLayer.Services.EntityPickerItem>;

	GetEntityPickerSettingsForType(typeName: string, successCallback: (data: { GetEntityPickerSettingsForTypeResult: $D.Framework.Design.Properties.Attributes.EntityPickerSettings }) => any, errorCallback?: () => any): JQueryPromise<{ GetEntityPickerSettingsForTypeResult: $D.Framework.Design.Properties.Attributes.EntityPickerSettings }>;

	GetEntityPickerSettingsForType(typeName: string): { GetEntityPickerSettingsForTypeResult: $D.Framework.Design.Properties.Attributes.EntityPickerSettings };

	GetEntityPickerSettingsForTypePromise(typeName: string): Promise<$D.Framework.Design.Properties.Attributes.EntityPickerSettings>;

	GetDecisionsTypePickerSettings(filterNames: string[], successCallback: (data: { GetDecisionsTypePickerSettingsResult: $D.Framework.ServiceLayer.Services.DecisionsTypePickerSettings }) => any, errorCallback?: () => any): JQueryPromise<{ GetDecisionsTypePickerSettingsResult: $D.Framework.ServiceLayer.Services.DecisionsTypePickerSettings }>;

	GetDecisionsTypePickerSettings(filterNames: string[]): { GetDecisionsTypePickerSettingsResult: $D.Framework.ServiceLayer.Services.DecisionsTypePickerSettings };

	GetDecisionsTypePickerSettingsPromise(filterNames: string[]): Promise<$D.Framework.ServiceLayer.Services.DecisionsTypePickerSettings>;

	GetElementRegistrationPickerSettings(elementTypes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[], subElementType: string, includeEmptySubElementType: boolean, behaviorTypeName: string, successCallback: (data: { GetElementRegistrationPickerSettingsResult: $D.Framework.ServiceLayer.Services.ElementRegistrationPickerSettings }) => any, errorCallback?: () => any): JQueryPromise<{ GetElementRegistrationPickerSettingsResult: $D.Framework.ServiceLayer.Services.ElementRegistrationPickerSettings }>;

	GetElementRegistrationPickerSettings(elementTypes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[], subElementType: string, includeEmptySubElementType: boolean, behaviorTypeName: string): { GetElementRegistrationPickerSettingsResult: $D.Framework.ServiceLayer.Services.ElementRegistrationPickerSettings };

	GetElementRegistrationPickerSettingsPromise(elementTypes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[], subElementType: string, includeEmptySubElementType: boolean, behaviorTypeName: string): Promise<$D.Framework.ServiceLayer.Services.ElementRegistrationPickerSettings>;

	GetEntitiesInModuleForRegistration(forRegistrationId: string, filterNames: string[], loadedCount: number, loadCount: number, successCallback: (data: { GetEntitiesInModuleForRegistrationResult: $D.Framework.ServiceLayer.Services.EnitytPickerItemsResult }) => any, errorCallback?: () => any): JQueryPromise<{ GetEntitiesInModuleForRegistrationResult: $D.Framework.ServiceLayer.Services.EnitytPickerItemsResult }>;

	GetEntitiesInModuleForRegistration(forRegistrationId: string, filterNames: string[], loadedCount: number, loadCount: number): { GetEntitiesInModuleForRegistrationResult: $D.Framework.ServiceLayer.Services.EnitytPickerItemsResult };

	GetEntitiesInModuleForRegistrationPromise(forRegistrationId: string, filterNames: string[], loadedCount: number, loadCount: number): Promise<$D.Framework.ServiceLayer.Services.EnitytPickerItemsResult>;

	GetMyRecentPickedEntities(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], filterNames: string[], loadThumbnail: boolean, loadIcon: boolean, successCallback: (data: { GetMyRecentPickedEntitiesResult: $D.Framework.ServiceLayer.Services.EntityPickerItem[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMyRecentPickedEntitiesResult: $D.Framework.ServiceLayer.Services.EntityPickerItem[] }>;

	GetMyRecentPickedEntities(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], filterNames: string[], loadThumbnail: boolean, loadIcon: boolean): { GetMyRecentPickedEntitiesResult: $D.Framework.ServiceLayer.Services.EntityPickerItem[] };

	GetMyRecentPickedEntitiesPromise(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], filterNames: string[], loadThumbnail: boolean, loadIcon: boolean): Promise<$D.Framework.ServiceLayer.Services.EntityPickerItem[]>;

	GetMyFavoriteEntities(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], filterNames: string[], loadIcon: boolean, successCallback: (data: { GetMyFavoriteEntitiesResult: $D.Framework.ServiceLayer.Services.EntityPickerItem[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMyFavoriteEntitiesResult: $D.Framework.ServiceLayer.Services.EntityPickerItem[] }>;

	GetMyFavoriteEntities(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], filterNames: string[], loadIcon: boolean): { GetMyFavoriteEntitiesResult: $D.Framework.ServiceLayer.Services.EntityPickerItem[] };

	GetMyFavoriteEntitiesPromise(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], filterNames: string[], loadIcon: boolean): Promise<$D.Framework.ServiceLayer.Services.EntityPickerItem[]>;

	GetEntityPickerFolderById(folderId: string, loadIcon: boolean, successCallback: (data: { GetEntityPickerFolderByIdResult: $D.Framework.ServiceLayer.Services.EntityPickerFolder }) => any, errorCallback?: () => any): JQueryPromise<{ GetEntityPickerFolderByIdResult: $D.Framework.ServiceLayer.Services.EntityPickerFolder }>;

	GetEntityPickerFolderById(folderId: string, loadIcon: boolean): { GetEntityPickerFolderByIdResult: $D.Framework.ServiceLayer.Services.EntityPickerFolder };

	GetEntityPickerFolderByIdPromise(folderId: string, loadIcon: boolean): Promise<$D.Framework.ServiceLayer.Services.EntityPickerFolder>;

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
	EntityPickerService(): EntityPickerServiceStatic;
}
