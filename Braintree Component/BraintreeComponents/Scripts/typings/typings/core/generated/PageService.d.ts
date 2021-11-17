/// <reference path="./datatypes._base.d.ts" />

interface PageServiceStatic {

	CreatePrivatePageForPlatforms(folderId: string, name: string, order: number, templateId: string, platforms: string[], successCallback: (data: { CreatePrivatePageForPlatformsResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreatePrivatePageForPlatformsResult: string }>;

	CreatePrivatePageForPlatforms(folderId: string, name: string, order: number, templateId: string, platforms: string[]): { CreatePrivatePageForPlatformsResult: string };

	CreatePrivatePageForPlatformsPromise(folderId: string, name: string, order: number, templateId: string, platforms: string[]): Promise<string>;

	CreatePrivatePageFromTemplate(folderID: string, name: string, order: number, templateId: string, successCallback: (data: { CreatePrivatePageFromTemplateResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreatePrivatePageFromTemplateResult: string }>;

	CreatePrivatePageFromTemplate(folderID: string, name: string, order: number, templateId: string): { CreatePrivatePageFromTemplateResult: string };

	CreatePrivatePageFromTemplatePromise(folderID: string, name: string, order: number, templateId: string): Promise<string>;

	CreatePrivatePage(folderID: string, name: string, order: number, successCallback: (data: { CreatePrivatePageResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreatePrivatePageResult: string }>;

	CreatePrivatePage(folderID: string, name: string, order: number): { CreatePrivatePageResult: string };

	CreatePrivatePagePromise(folderID: string, name: string, order: number): Promise<string>;

	CreatePublicPageForPlatforms(folderID: string, configurationStorageFolderID: string, name: string, order: number, templateId: string, platforms: string[], successCallback: (data: { CreatePublicPageForPlatformsResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreatePublicPageForPlatformsResult: string }>;

	CreatePublicPageForPlatforms(folderID: string, configurationStorageFolderID: string, name: string, order: number, templateId: string, platforms: string[]): { CreatePublicPageForPlatformsResult: string };

	CreatePublicPageForPlatformsPromise(folderID: string, configurationStorageFolderID: string, name: string, order: number, templateId: string, platforms: string[]): Promise<string>;

	CreatePublicPage(folderID: string, configurationStorageFolderID: string, name: string, order: number, successCallback: (data: { CreatePublicPageResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreatePublicPageResult: string }>;

	CreatePublicPage(folderID: string, configurationStorageFolderID: string, name: string, order: number): { CreatePublicPageResult: string };

	CreatePublicPagePromise(folderID: string, configurationStorageFolderID: string, name: string, order: number): Promise<string>;

	CreatePublicPageFromTemplate(folderID: string, configurationStorageFolderID: string, name: string, order: number, templateId: string, successCallback: (data: { CreatePublicPageFromTemplateResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreatePublicPageFromTemplateResult: string }>;

	CreatePublicPageFromTemplate(folderID: string, configurationStorageFolderID: string, name: string, order: number, templateId: string): { CreatePublicPageFromTemplateResult: string };

	CreatePublicPageFromTemplatePromise(folderID: string, configurationStorageFolderID: string, name: string, order: number, templateId: string): Promise<string>;

	CreatePage(folderID: string, name: string, configurationStorageID: string, order: number, successCallback: (data: { CreatePageResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CreatePageResult: void }>;

	CreatePage(folderID: string, name: string, configurationStorageID: string, order: number): { CreatePageResult: void };

	CreatePagePromise(folderID: string, name: string, configurationStorageID: string, order: number): Promise<void>;

	CreatePageForPlatforms(folderID: string, name: string, configurationStorageID: string, order: number, platforms: string[], successCallback: (data: { CreatePageForPlatformsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CreatePageForPlatformsResult: void }>;

	CreatePageForPlatforms(folderID: string, name: string, configurationStorageID: string, order: number, platforms: string[]): { CreatePageForPlatformsResult: void };

	CreatePageForPlatformsPromise(folderID: string, name: string, configurationStorageID: string, order: number, platforms: string[]): Promise<void>;

	SetPageName(pageDataId: string, name: string, successCallback: (data: { SetPageNameResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetPageNameResult: void }>;

	SetPageName(pageDataId: string, name: string): { SetPageNameResult: void };

	SetPageNamePromise(pageDataId: string, name: string): Promise<void>;

	CreatePageCopy(pageDataID: string, newPageName: string, successCallback: (data: { CreatePageCopyResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CreatePageCopyResult: void }>;

	CreatePageCopy(pageDataID: string, newPageName: string): { CreatePageCopyResult: void };

	CreatePageCopyPromise(pageDataID: string, newPageName: string): Promise<void>;

	RegisterPageContextInfo(folderId: string, isPublicPage: boolean, successCallback: (data: { RegisterPageContextInfoResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ RegisterPageContextInfoResult: string }>;

	RegisterPageContextInfo(folderId: string, isPublicPage: boolean): { RegisterPageContextInfoResult: string };

	RegisterPageContextInfoPromise(folderId: string, isPublicPage: boolean): Promise<string>;

	UnRegisterPageContextInfo(pageInfoContextId: string, successCallback: (data: { UnRegisterPageContextInfoResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UnRegisterPageContextInfoResult: void }>;

	UnRegisterPageContextInfo(pageInfoContextId: string): { UnRegisterPageContextInfoResult: void };

	UnRegisterPageContextInfoPromise(pageInfoContextId: string): Promise<void>;

	GetPageInfoFromContext(contextId: string, successCallback: (data: { GetPageInfoFromContextResult: $D.Framework.ServiceLayer.Services.Folder.PageContextInfo }) => any, errorCallback?: () => any): JQueryPromise<{ GetPageInfoFromContextResult: $D.Framework.ServiceLayer.Services.Folder.PageContextInfo }>;

	GetPageInfoFromContext(contextId: string): { GetPageInfoFromContextResult: $D.Framework.ServiceLayer.Services.Folder.PageContextInfo };

	GetPageInfoFromContextPromise(contextId: string): Promise<$D.Framework.ServiceLayer.Services.Folder.PageContextInfo>;

	CreatePageFromContext(contextId: string, successCallback: (data: { CreatePageFromContextResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreatePageFromContextResult: string }>;

	CreatePageFromContext(contextId: string): { CreatePageFromContextResult: string };

	CreatePageFromContextPromise(contextId: string): Promise<string>;

	RegisterDisplayPageContextInfo(folderId: string, successCallback: (data: { RegisterDisplayPageContextInfoResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ RegisterDisplayPageContextInfoResult: string }>;

	RegisterDisplayPageContextInfo(folderId: string): { RegisterDisplayPageContextInfoResult: string };

	RegisterDisplayPageContextInfoPromise(folderId: string): Promise<string>;

	UnRegisterDisplayPageContextInfo(contextId: string, successCallback: (data: { UnRegisterDisplayPageContextInfoResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UnRegisterDisplayPageContextInfoResult: void }>;

	UnRegisterDisplayPageContextInfo(contextId: string): { UnRegisterDisplayPageContextInfoResult: void };

	UnRegisterDisplayPageContextInfoPromise(contextId: string): Promise<void>;

	DisplayExisitingPageFromContext(contextId: string, successCallback: (data: { DisplayExisitingPageFromContextResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DisplayExisitingPageFromContextResult: void }>;

	DisplayExisitingPageFromContext(contextId: string): { DisplayExisitingPageFromContextResult: void };

	DisplayExisitingPageFromContextPromise(contextId: string): Promise<void>;

	CreatePageContext(pageContextId: string, folderId: string, baseContextId: string, url: string, successCallback: (data: { CreatePageContextResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreatePageContextResult: string }>;

	CreatePageContext(pageContextId: string, folderId: string, baseContextId: string, url: string): { CreatePageContextResult: string };

	CreatePageContextPromise(pageContextId: string, folderId: string, baseContextId: string, url: string): Promise<string>;

	SetPageParameter(pageContextId: string, parm: $D.Framework.ServiceLayer.Services.ContextData.DataPair, successCallback: (data: { SetPageParameterResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetPageParameterResult: void }>;

	SetPageParameter(pageContextId: string, parm: $D.Framework.ServiceLayer.Services.ContextData.DataPair): { SetPageParameterResult: void };

	SetPageParameterPromise(pageContextId: string, parm: $D.Framework.ServiceLayer.Services.ContextData.DataPair): Promise<void>;

	SetPageParameters(pageContextId: string, parms: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], successCallback: (data: { SetPageParametersResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetPageParametersResult: void }>;

	SetPageParameters(pageContextId: string, parms: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): { SetPageParametersResult: void };

	SetPageParametersPromise(pageContextId: string, parms: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): Promise<void>;

	GetPageParameter(pageContextId: string, key: string, successCallback: (data: { GetPageParameterResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair }) => any, errorCallback?: () => any): JQueryPromise<{ GetPageParameterResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair }>;

	GetPageParameter(pageContextId: string, key: string): { GetPageParameterResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair };

	GetPageParameterPromise(pageContextId: string, key: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair>;

	GetPageParameters(pageContextId: string, filterKeys: string[], successCallback: (data: { GetPageParametersResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetPageParametersResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	GetPageParameters(pageContextId: string, filterKeys: string[]): { GetPageParametersResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	GetPageParametersPromise(pageContextId: string, filterKeys: string[]): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	ClearPageContext(pageContextId: string, successCallback: (data: { ClearPageContextResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ClearPageContextResult: void }>;

	ClearPageContext(pageContextId: string): { ClearPageContextResult: void };

	ClearPageContextPromise(pageContextId: string): Promise<void>;

	GetInitialPartsData(pageId: string, folderId: string, designerSessionId: string, successCallback: (data: { GetInitialPartsDataResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ GetInitialPartsDataResult: any }>;

	GetInitialPartsData(pageId: string, folderId: string, designerSessionId: string): { GetInitialPartsDataResult: any };

	GetInitialPartsDataPromise(pageId: string, folderId: string, designerSessionId: string): Promise<any>;

	GetPartData(pageId: string, partId: string[], personalization: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], designerSessionId: string, successCallback: (data: { GetPartDataResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ GetPartDataResult: any }>;

	GetPartData(pageId: string, partId: string[], personalization: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], designerSessionId: string): { GetPartDataResult: any };

	GetPartDataPromise(pageId: string, partId: string[], personalization: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], designerSessionId: string): Promise<any>;

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

	GetByFolderID(folderID: string, successCallback: (data: { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Folder.PageData[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Folder.PageData[] }>;

	GetByFolderID(folderID: string): { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Folder.PageData[] };

	GetByFolderIDPromise(folderID: string): Promise<$D.Framework.ServiceLayer.Services.Folder.PageData[]>;

	GetByIDs(ids: string[], successCallback: (data: { GetByIDsResult: $D.Framework.ServiceLayer.Services.Folder.PageData[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDsResult: $D.Framework.ServiceLayer.Services.Folder.PageData[] }>;

	GetByIDs(ids: string[]): { GetByIDsResult: $D.Framework.ServiceLayer.Services.Folder.PageData[] };

	GetByIDsPromise(ids: string[]): Promise<$D.Framework.ServiceLayer.Services.Folder.PageData[]>;

	GetByID(id: string, successCallback: (data: { GetByIDResult: $D.Framework.ServiceLayer.Services.Folder.PageData }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDResult: $D.Framework.ServiceLayer.Services.Folder.PageData }>;

	GetByID(id: string): { GetByIDResult: $D.Framework.ServiceLayer.Services.Folder.PageData };

	GetByIDPromise(id: string): Promise<$D.Framework.ServiceLayer.Services.Folder.PageData>;

	GetAll(successCallback: (data: { GetAllResult: $D.Framework.ServiceLayer.Services.Folder.PageData[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllResult: $D.Framework.ServiceLayer.Services.Folder.PageData[] }>;

	GetAll(): { GetAllResult: $D.Framework.ServiceLayer.Services.Folder.PageData[] };

	GetAllPromise(): Promise<$D.Framework.ServiceLayer.Services.Folder.PageData[]>;

	Save(entity: $D.Framework.ServiceLayer.Services.Folder.PageData, successCallback: (data: { SaveResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveResult: void }>;

	Save(entity: $D.Framework.ServiceLayer.Services.Folder.PageData): { SaveResult: void };

	SavePromise(entity: $D.Framework.ServiceLayer.Services.Folder.PageData): Promise<void>;

	Delete(id: string, successCallback: (data: { DeleteResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteResult: void }>;

	Delete(id: string): { DeleteResult: void };

	DeletePromise(id: string): Promise<void>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType, successCallback: (data: { SearchResult: $D.Framework.ServiceLayer.Services.Folder.PageData[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchResult: $D.Framework.ServiceLayer.Services.Folder.PageData[] }>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): { SearchResult: $D.Framework.ServiceLayer.Services.Folder.PageData[] };

	SearchPromise(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): Promise<$D.Framework.ServiceLayer.Services.Folder.PageData[]>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.Folder.PageData[], successCallback: (data: { SaveListResult: $D.Framework.ServiceLayer.Services.Folder.PageData[] }) => any, errorCallback?: () => any): JQueryPromise<{ SaveListResult: $D.Framework.ServiceLayer.Services.Folder.PageData[] }>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.Folder.PageData[]): { SaveListResult: $D.Framework.ServiceLayer.Services.Folder.PageData[] };

	SaveListPromise(entities: $D.Framework.ServiceLayer.Services.Folder.PageData[]): Promise<$D.Framework.ServiceLayer.Services.Folder.PageData[]>;
}

interface ServicesStatic {
	PageService(): PageServiceStatic;
}
