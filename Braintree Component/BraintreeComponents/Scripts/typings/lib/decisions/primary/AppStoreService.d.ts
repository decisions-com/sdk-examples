/// <reference path="./datatypes._base.d.ts" />

interface AppStoreServiceStatic {

	StartInstallApplicationSession(successCallback: (data: { StartInstallApplicationSessionResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ StartInstallApplicationSessionResult: string }>;

	StartInstallApplicationSession(): { StartInstallApplicationSessionResult: string };

	StartInstallApplicationSessionPromise(): Promise<string>;

	FinishSession(sessionId: string, successCallback: (data: { FinishSessionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ FinishSessionResult: void }>;

	FinishSession(sessionId: string): { FinishSessionResult: void };

	FinishSessionPromise(sessionId: string): Promise<void>;

	GetModulesNameForTree(sessionId: string, successCallback: (data: { GetModulesNameForTreeResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetModulesNameForTreeResult: string[] }>;

	GetModulesNameForTree(sessionId: string): { GetModulesNameForTreeResult: string[] };

	GetModulesNameForTreePromise(sessionId: string): Promise<string[]>;

	GetDescriptionUrl(sessionId: string, storageName: string, moduleName: string, successCallback: (data: { GetDescriptionUrlResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetDescriptionUrlResult: string }>;

	GetDescriptionUrl(sessionId: string, storageName: string, moduleName: string): { GetDescriptionUrlResult: string };

	GetDescriptionUrlPromise(sessionId: string, storageName: string, moduleName: string): Promise<string>;

	GetRequiredProjects(sessionId: string, storageName: string, moduleName: string, successCallback: (data: { GetRequiredProjectsResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetRequiredProjectsResult: string[] }>;

	GetRequiredProjects(sessionId: string, storageName: string, moduleName: string): { GetRequiredProjectsResult: string[] };

	GetRequiredProjectsPromise(sessionId: string, storageName: string, moduleName: string): Promise<string[]>;

	GetRequiredProjectsBySelectedNode(sessionId: string, selectedNode: string, successCallback: (data: { GetRequiredProjectsBySelectedNodeResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetRequiredProjectsBySelectedNodeResult: string[] }>;

	GetRequiredProjectsBySelectedNode(sessionId: string, selectedNode: string): { GetRequiredProjectsBySelectedNodeResult: string[] };

	GetRequiredProjectsBySelectedNodePromise(sessionId: string, selectedNode: string): Promise<string[]>;

	GetModuleNameBySelectedNode(sessionId: string, selectedNode: string, successCallback: (data: { GetModuleNameBySelectedNodeResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetModuleNameBySelectedNodeResult: string }>;

	GetModuleNameBySelectedNode(sessionId: string, selectedNode: string): { GetModuleNameBySelectedNodeResult: string };

	GetModuleNameBySelectedNodePromise(sessionId: string, selectedNode: string): Promise<string>;

	GetStorageNameBySelectedNode(sessionId: string, selectedNode: string, successCallback: (data: { GetStorageNameBySelectedNodeResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetStorageNameBySelectedNodeResult: string }>;

	GetStorageNameBySelectedNode(sessionId: string, selectedNode: string): { GetStorageNameBySelectedNodeResult: string };

	GetStorageNameBySelectedNodePromise(sessionId: string, selectedNode: string): Promise<string>;

	GetDescriptionURLBySelectedNode(sessionId: string, selectedNode: string, successCallback: (data: { GetDescriptionURLBySelectedNodeResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetDescriptionURLBySelectedNodeResult: string }>;

	GetDescriptionURLBySelectedNode(sessionId: string, selectedNode: string): { GetDescriptionURLBySelectedNodeResult: string };

	GetDescriptionURLBySelectedNodePromise(sessionId: string, selectedNode: string): Promise<string>;

	GetDescriptionBySelectedNode(sessionId: string, selectedNode: string, successCallback: (data: { GetDescriptionBySelectedNodeResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetDescriptionBySelectedNodeResult: string }>;

	GetDescriptionBySelectedNode(sessionId: string, selectedNode: string): { GetDescriptionBySelectedNodeResult: string };

	GetDescriptionBySelectedNodePromise(sessionId: string, selectedNode: string): Promise<string>;

	GetModuleCreatedBy(sessionId: string, selectedNode: string, successCallback: (data: { GetModuleCreatedByResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetModuleCreatedByResult: string }>;

	GetModuleCreatedBy(sessionId: string, selectedNode: string): { GetModuleCreatedByResult: string };

	GetModuleCreatedByPromise(sessionId: string, selectedNode: string): Promise<string>;

	GetModuleCreatedOn(sessionId: string, selectedNode: string, successCallback: (data: { GetModuleCreatedOnResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ GetModuleCreatedOnResult: any }>;

	GetModuleCreatedOn(sessionId: string, selectedNode: string): { GetModuleCreatedOnResult: any };

	GetModuleCreatedOnPromise(sessionId: string, selectedNode: string): Promise<any>;

	ForceCopy(sessionId: string, selectedNode: string, successCallback: (data: { ForceCopyResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ ForceCopyResult: boolean }>;

	ForceCopy(sessionId: string, selectedNode: string): { ForceCopyResult: boolean };

	ForceCopyPromise(sessionId: string, selectedNode: string): Promise<boolean>;

	CanInstall(sessionId: string, selectedNode: string, successCallback: (data: { CanInstallResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ CanInstallResult: boolean }>;

	CanInstall(sessionId: string, selectedNode: string): { CanInstallResult: boolean };

	CanInstallPromise(sessionId: string, selectedNode: string): Promise<boolean>;

	GetModuleWithDescription(sessionId: string, storageName: string, moduleName: string, successCallback: (data: { GetModuleWithDescriptionResult: $D.DesignerRepository.ModuleDetails }) => any, errorCallback?: () => any): JQueryPromise<{ GetModuleWithDescriptionResult: $D.DesignerRepository.ModuleDetails }>;

	GetModuleWithDescription(sessionId: string, storageName: string, moduleName: string): { GetModuleWithDescriptionResult: $D.DesignerRepository.ModuleDetails };

	GetModuleWithDescriptionPromise(sessionId: string, storageName: string, moduleName: string): Promise<$D.DesignerRepository.ModuleDetails>;

	GetProjectCopyContextId(sessionId: string, selectedNode: string, targetFolderId: string, successCallback: (data: { GetProjectCopyContextIdResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetProjectCopyContextIdResult: string }>;

	GetProjectCopyContextId(sessionId: string, selectedNode: string, targetFolderId: string): { GetProjectCopyContextIdResult: string };

	GetProjectCopyContextIdPromise(sessionId: string, selectedNode: string, targetFolderId: string): Promise<string>;

	CopyAppFolderByContextId(contextId: string, successCallback: (data: { CopyAppFolderByContextIdResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CopyAppFolderByContextIdResult: void }>;

	CopyAppFolderByContextId(contextId: string): { CopyAppFolderByContextIdResult: void };

	CopyAppFolderByContextIdPromise(contextId: string): Promise<void>;

	GetModuleResources(storageName: string, appName: string, successCallback: (data: { GetModuleResourcesResult: $D.DesignerRepository.Client.CheckoutResources }) => any, errorCallback?: () => any): JQueryPromise<{ GetModuleResourcesResult: $D.DesignerRepository.Client.CheckoutResources }>;

	GetModuleResources(storageName: string, appName: string): { GetModuleResourcesResult: $D.DesignerRepository.Client.CheckoutResources };

	GetModuleResourcesPromise(storageName: string, appName: string): Promise<$D.DesignerRepository.Client.CheckoutResources>;

	GetAccessInfo(storageName: string, successCallback: (data: { GetAccessInfoResult: $D.DesignerRepository.Client.Service.AbstractRepositoryProxyAccessInfo }) => any, errorCallback?: () => any): JQueryPromise<{ GetAccessInfoResult: $D.DesignerRepository.Client.Service.AbstractRepositoryProxyAccessInfo }>;

	GetAccessInfo(storageName: string): { GetAccessInfoResult: $D.DesignerRepository.Client.Service.AbstractRepositoryProxyAccessInfo };

	GetAccessInfoPromise(storageName: string): Promise<$D.DesignerRepository.Client.Service.AbstractRepositoryProxyAccessInfo>;

	GetAppStores(successCallback: (data: { GetAppStoresResult: $D.Framework.ServiceLayer.Services.DesignerRepository.AppStoreConfiguration[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAppStoresResult: $D.Framework.ServiceLayer.Services.DesignerRepository.AppStoreConfiguration[] }>;

	GetAppStores(): { GetAppStoresResult: $D.Framework.ServiceLayer.Services.DesignerRepository.AppStoreConfiguration[] };

	GetAppStoresPromise(): Promise<$D.Framework.ServiceLayer.Services.DesignerRepository.AppStoreConfiguration[]>;

	GetAppsFromAppStore(successCallback: (data: { GetAppsFromAppStoreResult: $D.DesignerRepository.ModuleDetails[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAppsFromAppStoreResult: $D.DesignerRepository.ModuleDetails[] }>;

	GetAppsFromAppStore(): { GetAppsFromAppStoreResult: $D.DesignerRepository.ModuleDetails[] };

	GetAppsFromAppStorePromise(): Promise<$D.DesignerRepository.ModuleDetails[]>;

	GetMyApps(parentFolderId: string, successCallback: (data: { GetMyAppsResult: $D.DesignerRepository.ModuleDetails[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMyAppsResult: $D.DesignerRepository.ModuleDetails[] }>;

	GetMyApps(parentFolderId: string): { GetMyAppsResult: $D.DesignerRepository.ModuleDetails[] };

	GetMyAppsPromise(parentFolderId: string): Promise<$D.DesignerRepository.ModuleDetails[]>;

	StartInstallApp(appStoreId: string, moduleFolderId: string, destinationFolderId: string, successCallback: (data: { StartInstallAppResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ StartInstallAppResult: void }>;

	StartInstallApp(appStoreId: string, moduleFolderId: string, destinationFolderId: string): { StartInstallAppResult: void };

	StartInstallAppPromise(appStoreId: string, moduleFolderId: string, destinationFolderId: string): Promise<void>;

	CreateInstallAppContext(appStoreId: string, moduleName: string, targetFolderId: string, successCallback: (data: { CreateInstallAppContextResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateInstallAppContextResult: string }>;

	CreateInstallAppContext(appStoreId: string, moduleName: string, targetFolderId: string): { CreateInstallAppContextResult: string };

	CreateInstallAppContextPromise(appStoreId: string, moduleName: string, targetFolderId: string): Promise<string>;

	EditCompleteAppContext(contextId: string, editCompleteType: $D.Framework.Design.Properties.EditCompleteType, successCallback: (data: { EditCompleteAppContextResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ EditCompleteAppContextResult: void }>;

	EditCompleteAppContext(contextId: string, editCompleteType: $D.Framework.Design.Properties.EditCompleteType): { EditCompleteAppContextResult: void };

	EditCompleteAppContextPromise(contextId: string, editCompleteType: $D.Framework.Design.Properties.EditCompleteType): Promise<void>;

	GetAppClientProxy(appStoreId: string, successCallback: (data: { GetAppClientProxyResult: $D.DesignerRepository.Client.Service.AppClientProxyAccessInfo }) => any, errorCallback?: () => any): JQueryPromise<{ GetAppClientProxyResult: $D.DesignerRepository.Client.Service.AppClientProxyAccessInfo }>;

	GetAppClientProxy(appStoreId: string): { GetAppClientProxyResult: $D.DesignerRepository.Client.Service.AppClientProxyAccessInfo };

	GetAppClientProxyPromise(appStoreId: string): Promise<$D.DesignerRepository.Client.Service.AppClientProxyAccessInfo>;

	GetInfoFiles(projectName: string, appStoreId: string, successCallback: (data: { GetInfoFilesResult: $D.DesignerRepository.ModuleInfoFile[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetInfoFilesResult: $D.DesignerRepository.ModuleInfoFile[] }>;

	GetInfoFiles(projectName: string, appStoreId: string): { GetInfoFilesResult: $D.DesignerRepository.ModuleInfoFile[] };

	GetInfoFilesPromise(projectName: string, appStoreId: string): Promise<$D.DesignerRepository.ModuleInfoFile[]>;

	CheckoutFromAppStore(projectName: string, appStoreId: string, successCallback: (data: { CheckoutFromAppStoreResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CheckoutFromAppStoreResult: string }>;

	CheckoutFromAppStore(projectName: string, appStoreId: string): { CheckoutFromAppStoreResult: string };

	CheckoutFromAppStorePromise(projectName: string, appStoreId: string): Promise<string>;

	GetModuleDetailInfo(appStoreID: string, moduleName: string, successCallback: (data: { GetModuleDetailInfoResult: $D.DesignerRepository.ModuleDetails }) => any, errorCallback?: () => any): JQueryPromise<{ GetModuleDetailInfoResult: $D.DesignerRepository.ModuleDetails }>;

	GetModuleDetailInfo(appStoreID: string, moduleName: string): { GetModuleDetailInfoResult: $D.DesignerRepository.ModuleDetails };

	GetModuleDetailInfoPromise(appStoreID: string, moduleName: string): Promise<$D.DesignerRepository.ModuleDetails>;

	GetModules(successCallback: (data: { GetModulesResult: $D.Framework.ServiceLayer.Services.Module.ModuleInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetModulesResult: $D.Framework.ServiceLayer.Services.Module.ModuleInfo[] }>;

	GetModules(): { GetModulesResult: $D.Framework.ServiceLayer.Services.Module.ModuleInfo[] };

	GetModulesPromise(): Promise<$D.Framework.ServiceLayer.Services.Module.ModuleInfo[]>;

	InstallModule(moduleName: string, successCallback: (data: { InstallModuleResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ InstallModuleResult: void }>;

	InstallModule(moduleName: string): { InstallModuleResult: void };

	InstallModulePromise(moduleName: string): Promise<void>;

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
	AppStoreService(): AppStoreServiceStatic;
}
