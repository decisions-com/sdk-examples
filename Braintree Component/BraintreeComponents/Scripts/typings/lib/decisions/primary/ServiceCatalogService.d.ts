/// <reference path="./datatypes._base.d.ts" />

interface ServiceCatalogServiceStatic {

	GetCatalogItemsAndSubfolders(folderId: string, successCallback: (data: { GetCatalogItemsAndSubfoldersResult: $D.Framework.ServiceLayer.Services.ServiceCatalog.CatalogItemDto[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetCatalogItemsAndSubfoldersResult: $D.Framework.ServiceLayer.Services.ServiceCatalog.CatalogItemDto[] }>;

	GetCatalogItemsAndSubfolders(folderId: string): { GetCatalogItemsAndSubfoldersResult: $D.Framework.ServiceLayer.Services.ServiceCatalog.CatalogItemDto[] };

	GetCatalogItemsAndSubfoldersPromise(folderId: string): Promise<$D.Framework.ServiceLayer.Services.ServiceCatalog.CatalogItemDto[]>;

	CreateURLServiceCatalogItem(folderID: string, url: string, successCallback: (data: { CreateURLServiceCatalogItemResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateURLServiceCatalogItemResult: string }>;

	CreateURLServiceCatalogItem(folderID: string, url: string): { CreateURLServiceCatalogItemResult: string };

	CreateURLServiceCatalogItemPromise(folderID: string, url: string): Promise<string>;

	CreateFlowServiceCatalogItem(folderID: string, flowID: string, successCallback: (data: { CreateFlowServiceCatalogItemResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateFlowServiceCatalogItemResult: string }>;

	CreateFlowServiceCatalogItem(folderID: string, flowID: string): { CreateFlowServiceCatalogItemResult: string };

	CreateFlowServiceCatalogItemPromise(folderID: string, flowID: string): Promise<string>;

	GetActionHeadersForActions(entityID: string, actionsName: string[], successCallback: (data: { GetActionHeadersForActionsResult: $D.Framework.ServiceLayer.Actions.ActionHeader[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetActionHeadersForActionsResult: $D.Framework.ServiceLayer.Actions.ActionHeader[] }>;

	GetActionHeadersForActions(entityID: string, actionsName: string[]): { GetActionHeadersForActionsResult: $D.Framework.ServiceLayer.Actions.ActionHeader[] };

	GetActionHeadersForActionsPromise(entityID: string, actionsName: string[]): Promise<$D.Framework.ServiceLayer.Actions.ActionHeader[]>;

	CreateInternalLinkServiceCatalogItem(entityFolderID: string, folderID: string, successCallback: (data: { CreateInternalLinkServiceCatalogItemResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateInternalLinkServiceCatalogItemResult: string }>;

	CreateInternalLinkServiceCatalogItem(entityFolderID: string, folderID: string): { CreateInternalLinkServiceCatalogItemResult: string };

	CreateInternalLinkServiceCatalogItemPromise(entityFolderID: string, folderID: string): Promise<string>;

	GetServiceCatalogItemsByFolderId(folderID: string, successCallback: (data: { GetServiceCatalogItemsByFolderIdResult: $D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetServiceCatalogItemsByFolderIdResult: $D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem[] }>;

	GetServiceCatalogItemsByFolderId(folderID: string): { GetServiceCatalogItemsByFolderIdResult: $D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem[] };

	GetServiceCatalogItemsByFolderIdPromise(folderID: string): Promise<$D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem[]>;

	GetAllOfflineCatalogItems(successCallback: (data: { GetAllOfflineCatalogItemsResult: $D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllOfflineCatalogItemsResult: $D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem[] }>;

	GetAllOfflineCatalogItems(): { GetAllOfflineCatalogItemsResult: $D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem[] };

	GetAllOfflineCatalogItemsPromise(): Promise<$D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem[]>;

	GetAllOfflineFormSurfaces(successCallback: (data: { GetAllOfflineFormSurfacesResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllOfflineFormSurfacesResult: any }>;

	GetAllOfflineFormSurfaces(): { GetAllOfflineFormSurfacesResult: any };

	GetAllOfflineFormSurfacesPromise(): Promise<any>;

	SubmitOfflineForms(catalogItemId: string, formSubmissions: $D.Framework.Design.Form.OfflineFormSubmission[], successCallback: (data: { SubmitOfflineFormsResult: $D.Framework.Design.Form.EventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ SubmitOfflineFormsResult: $D.Framework.Design.Form.EventsReturn }>;

	SubmitOfflineForms(catalogItemId: string, formSubmissions: $D.Framework.Design.Form.OfflineFormSubmission[]): { SubmitOfflineFormsResult: $D.Framework.Design.Form.EventsReturn };

	SubmitOfflineFormsPromise(catalogItemId: string, formSubmissions: $D.Framework.Design.Form.OfflineFormSubmission[]): Promise<$D.Framework.Design.Form.EventsReturn>;

	GetAllMobileServiceCatalogItems(successCallback: (data: { GetAllMobileServiceCatalogItemsResult: $D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllMobileServiceCatalogItemsResult: $D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem[] }>;

	GetAllMobileServiceCatalogItems(): { GetAllMobileServiceCatalogItemsResult: $D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem[] };

	GetAllMobileServiceCatalogItemsPromise(): Promise<$D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem[]>;

	GetMobileServiceCatalogItemsByFolderId(folderID: string, successCallback: (data: { GetMobileServiceCatalogItemsByFolderIdResult: $D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMobileServiceCatalogItemsByFolderIdResult: $D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem[] }>;

	GetMobileServiceCatalogItemsByFolderId(folderID: string): { GetMobileServiceCatalogItemsByFolderIdResult: $D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem[] };

	GetMobileServiceCatalogItemsByFolderIdPromise(folderID: string): Promise<$D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem[]>;

	ExistsItemByCategoryIDAndName(categoryID: string, itemName: string, successCallback: (data: { ExistsItemByCategoryIDAndNameResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ ExistsItemByCategoryIDAndNameResult: boolean }>;

	ExistsItemByCategoryIDAndName(categoryID: string, itemName: string): { ExistsItemByCategoryIDAndNameResult: boolean };

	ExistsItemByCategoryIDAndNamePromise(categoryID: string, itemName: string): Promise<boolean>;

	GetCatalogsWithItems(successCallback: (data: { GetCatalogsWithItemsResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetCatalogsWithItemsResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }>;

	GetCatalogsWithItems(): { GetCatalogsWithItemsResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] };

	GetCatalogsWithItemsPromise(): Promise<$D.Framework.ServiceLayer.Services.Folder.Folder[]>;

	GetCatalogsWithItemsForTree(successCallback: (data: { GetCatalogsWithItemsForTreeResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetCatalogsWithItemsForTreeResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree[] }>;

	GetCatalogsWithItemsForTree(): { GetCatalogsWithItemsForTreeResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree[] };

	GetCatalogsWithItemsForTreePromise(): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderForTree[]>;

	GetHeadersForCatalogItems(folderId: string, successCallback: (data: { GetHeadersForCatalogItemsResult: $D.Framework.Data.ORMapper.EntityHeaderData[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetHeadersForCatalogItemsResult: $D.Framework.Data.ORMapper.EntityHeaderData[] }>;

	GetHeadersForCatalogItems(folderId: string): { GetHeadersForCatalogItemsResult: $D.Framework.Data.ORMapper.EntityHeaderData[] };

	GetHeadersForCatalogItemsPromise(folderId: string): Promise<$D.Framework.Data.ORMapper.EntityHeaderData[]>;

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

	GetByFolderID(folderID: string, successCallback: (data: { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByFolderIDResult: $D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem[] }>;

	GetByFolderID(folderID: string): { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem[] };

	GetByFolderIDPromise(folderID: string): Promise<$D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem[]>;

	GetByIDs(ids: string[], successCallback: (data: { GetByIDsResult: $D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDsResult: $D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem[] }>;

	GetByIDs(ids: string[]): { GetByIDsResult: $D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem[] };

	GetByIDsPromise(ids: string[]): Promise<$D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem[]>;

	GetByID(id: string, successCallback: (data: { GetByIDResult: $D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDResult: $D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem }>;

	GetByID(id: string): { GetByIDResult: $D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem };

	GetByIDPromise(id: string): Promise<$D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem>;

	GetAll(successCallback: (data: { GetAllResult: $D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllResult: $D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem[] }>;

	GetAll(): { GetAllResult: $D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem[] };

	GetAllPromise(): Promise<$D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem[]>;

	Save(entity: $D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem, successCallback: (data: { SaveResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveResult: void }>;

	Save(entity: $D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem): { SaveResult: void };

	SavePromise(entity: $D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem): Promise<void>;

	Delete(id: string, successCallback: (data: { DeleteResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteResult: void }>;

	Delete(id: string): { DeleteResult: void };

	DeletePromise(id: string): Promise<void>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType, successCallback: (data: { SearchResult: $D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchResult: $D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem[] }>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): { SearchResult: $D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem[] };

	SearchPromise(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): Promise<$D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem[]>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem[], successCallback: (data: { SaveListResult: $D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem[] }) => any, errorCallback?: () => any): JQueryPromise<{ SaveListResult: $D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem[] }>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem[]): { SaveListResult: $D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem[] };

	SaveListPromise(entities: $D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem[]): Promise<$D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem[]>;
}

interface ServicesStatic {
	ServiceCatalogService(): ServiceCatalogServiceStatic;
}
