/// <reference path="./datatypes._base.d.ts" />

interface DesignerRepositoryClientServiceStatic {

	GetModules(successCallback: (data: { GetModulesResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetModulesResult: string[] }>;

	GetModules(): { GetModulesResult: string[] };

	GetModulesPromise(): Promise<string[]>;

	GetBranches(moduleName: string, successCallback: (data: { GetBranchesResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetBranchesResult: string[] }>;

	GetBranches(moduleName: string): { GetBranchesResult: string[] };

	GetBranchesPromise(moduleName: string): Promise<string[]>;

	IsEntityFromModule(entityId: string, moduleName: string, successCallback: (data: { IsEntityFromModuleResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ IsEntityFromModuleResult: boolean }>;

	IsEntityFromModule(entityId: string, moduleName: string): { IsEntityFromModuleResult: boolean };

	IsEntityFromModulePromise(entityId: string, moduleName: string): Promise<boolean>;

	IsModuleCheckout(moduleName: string, successCallback: (data: { IsModuleCheckoutResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ IsModuleCheckoutResult: boolean }>;

	IsModuleCheckout(moduleName: string): { IsModuleCheckoutResult: boolean };

	IsModuleCheckoutPromise(moduleName: string): Promise<boolean>;

	GetBranchForModule(moduleName: string, successCallback: (data: { GetBranchForModuleResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetBranchForModuleResult: string }>;

	GetBranchForModule(moduleName: string): { GetBranchForModuleResult: string };

	GetBranchForModulePromise(moduleName: string): Promise<string>;

	ModuleExistsOnServer(moduleName: string, successCallback: (data: { ModuleExistsOnServerResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ ModuleExistsOnServerResult: boolean }>;

	ModuleExistsOnServer(moduleName: string): { ModuleExistsOnServerResult: boolean };

	ModuleExistsOnServerPromise(moduleName: string): Promise<boolean>;

	GetDetailDisplayLimit(successCallback: (data: { GetDetailDisplayLimitResult: number }) => any, errorCallback?: () => any): JQueryPromise<{ GetDetailDisplayLimitResult: number }>;

	GetDetailDisplayLimit(): { GetDetailDisplayLimitResult: number };

	GetDetailDisplayLimitPromise(): Promise<number>;

	GetInfoFiles(moduleName: string, branchName: string, successCallback: (data: { GetInfoFilesResult: $D.DesignerRepository.ModuleInfoFile[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetInfoFilesResult: $D.DesignerRepository.ModuleInfoFile[] }>;

	GetInfoFiles(moduleName: string, branchName: string): { GetInfoFilesResult: $D.DesignerRepository.ModuleInfoFile[] };

	GetInfoFilesPromise(moduleName: string, branchName: string): Promise<$D.DesignerRepository.ModuleInfoFile[]>;

	GetInfoFilesByDate(moduleName: string, branchName: string, date: Date, successCallback: (data: { GetInfoFilesByDateResult: $D.DesignerRepository.ModuleInfoFile[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetInfoFilesByDateResult: $D.DesignerRepository.ModuleInfoFile[] }>;

	GetInfoFilesByDate(moduleName: string, branchName: string, date: Date): { GetInfoFilesByDateResult: $D.DesignerRepository.ModuleInfoFile[] };

	GetInfoFilesByDatePromise(moduleName: string, branchName: string, date: Date): Promise<$D.DesignerRepository.ModuleInfoFile[]>;

	GetInfoFilesByRevision(moduleName: string, branchName: string, revision: string, successCallback: (data: { GetInfoFilesByRevisionResult: $D.DesignerRepository.ModuleInfoFile[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetInfoFilesByRevisionResult: $D.DesignerRepository.ModuleInfoFile[] }>;

	GetInfoFilesByRevision(moduleName: string, branchName: string, revision: string): { GetInfoFilesByRevisionResult: $D.DesignerRepository.ModuleInfoFile[] };

	GetInfoFilesByRevisionPromise(moduleName: string, branchName: string, revision: string): Promise<$D.DesignerRepository.ModuleInfoFile[]>;

	GetInfoFileCount(moduleName: string, branchName: string, successCallback: (data: { GetInfoFileCountResult: number }) => any, errorCallback?: () => any): JQueryPromise<{ GetInfoFileCountResult: number }>;

	GetInfoFileCount(moduleName: string, branchName: string): { GetInfoFileCountResult: number };

	GetInfoFileCountPromise(moduleName: string, branchName: string): Promise<number>;

	GetInfoFileCountByDate(moduleName: string, branchName: string, date: Date, successCallback: (data: { GetInfoFileCountByDateResult: number }) => any, errorCallback?: () => any): JQueryPromise<{ GetInfoFileCountByDateResult: number }>;

	GetInfoFileCountByDate(moduleName: string, branchName: string, date: Date): { GetInfoFileCountByDateResult: number };

	GetInfoFileCountByDatePromise(moduleName: string, branchName: string, date: Date): Promise<number>;

	GetInfoFileCountByRevision(moduleName: string, branchName: string, revision: string, successCallback: (data: { GetInfoFileCountByRevisionResult: number }) => any, errorCallback?: () => any): JQueryPromise<{ GetInfoFileCountByRevisionResult: number }>;

	GetInfoFileCountByRevision(moduleName: string, branchName: string, revision: string): { GetInfoFileCountByRevisionResult: number };

	GetInfoFileCountByRevisionPromise(moduleName: string, branchName: string, revision: string): Promise<number>;

	GetCheckoutResources(moduleName: string, repositoryResources: $D.DesignerRepository.ModuleInfoFile[], successCallback: (data: { GetCheckoutResourcesResult: $D.DesignerRepository.Client.CheckoutResources }) => any, errorCallback?: () => any): JQueryPromise<{ GetCheckoutResourcesResult: $D.DesignerRepository.Client.CheckoutResources }>;

	GetCheckoutResources(moduleName: string, repositoryResources: $D.DesignerRepository.ModuleInfoFile[]): { GetCheckoutResourcesResult: $D.DesignerRepository.Client.CheckoutResources };

	GetCheckoutResourcesPromise(moduleName: string, repositoryResources: $D.DesignerRepository.ModuleInfoFile[]): Promise<$D.DesignerRepository.Client.CheckoutResources>;

	GetCheckoutResourceCounts(checkoutId: string, successCallback: (data: { GetCheckoutResourceCountsResult: $D.DesignerRepository.Client.CheckoutResourceCounts }) => any, errorCallback?: () => any): JQueryPromise<{ GetCheckoutResourceCountsResult: $D.DesignerRepository.Client.CheckoutResourceCounts }>;

	GetCheckoutResourceCounts(checkoutId: string): { GetCheckoutResourceCountsResult: $D.DesignerRepository.Client.CheckoutResourceCounts };

	GetCheckoutResourceCountsPromise(checkoutId: string): Promise<$D.DesignerRepository.Client.CheckoutResourceCounts>;

	GetCheckoutResourcesForCheckout(checkoutId: string, successCallback: (data: { GetCheckoutResourcesForCheckoutResult: $D.DesignerRepository.Client.CheckoutResources }) => any, errorCallback?: () => any): JQueryPromise<{ GetCheckoutResourcesForCheckoutResult: $D.DesignerRepository.Client.CheckoutResources }>;

	GetCheckoutResourcesForCheckout(checkoutId: string): { GetCheckoutResourcesForCheckoutResult: $D.DesignerRepository.Client.CheckoutResources };

	GetCheckoutResourcesForCheckoutPromise(checkoutId: string): Promise<$D.DesignerRepository.Client.CheckoutResources>;

	StartCheckout(moduleName: string, branchName: string, revisionId: string, accessInfo: $D.DesignerRepository.Client.Service.AbstractRepositoryProxyAccessInfo, successCallback: (data: { StartCheckoutResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ StartCheckoutResult: string }>;

	StartCheckout(moduleName: string, branchName: string, revisionId: string, accessInfo: $D.DesignerRepository.Client.Service.AbstractRepositoryProxyAccessInfo): { StartCheckoutResult: string };

	StartCheckoutPromise(moduleName: string, branchName: string, revisionId: string, accessInfo: $D.DesignerRepository.Client.Service.AbstractRepositoryProxyAccessInfo): Promise<string>;

	StartCheckoutofDate(moduleName: string, branchName: string, date: Date, successCallback: (data: { StartCheckoutofDateResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ StartCheckoutofDateResult: string }>;

	StartCheckoutofDate(moduleName: string, branchName: string, date: Date): { StartCheckoutofDateResult: string };

	StartCheckoutofDatePromise(moduleName: string, branchName: string, date: Date): Promise<string>;

	CommitCheckout(checkoutId: string, accessInfo: $D.DesignerRepository.Client.Service.AbstractRepositoryProxyAccessInfo, successCallback: (data: { CommitCheckoutResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CommitCheckoutResult: void }>;

	CommitCheckout(checkoutId: string, accessInfo: $D.DesignerRepository.Client.Service.AbstractRepositoryProxyAccessInfo): { CommitCheckoutResult: void };

	CommitCheckoutPromise(checkoutId: string, accessInfo: $D.DesignerRepository.Client.Service.AbstractRepositoryProxyAccessInfo): Promise<void>;

	CancelCheckout(checkoutId: string, errorMessage: string, accessInfo: $D.DesignerRepository.Client.Service.AbstractRepositoryProxyAccessInfo, successCallback: (data: { CancelCheckoutResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CancelCheckoutResult: void }>;

	CancelCheckout(checkoutId: string, errorMessage: string, accessInfo: $D.DesignerRepository.Client.Service.AbstractRepositoryProxyAccessInfo): { CancelCheckoutResult: void };

	CancelCheckoutPromise(checkoutId: string, errorMessage: string, accessInfo: $D.DesignerRepository.Client.Service.AbstractRepositoryProxyAccessInfo): Promise<void>;

	StartImportResources(moduleName: string, branchName: string, destinationFolderId: string, resources: $D.DesignerRepository.Client.CheckoutResources, accessInfo: $D.DesignerRepository.Client.Service.AbstractRepositoryProxyAccessInfo, successCallback: (data: { StartImportResourcesResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ StartImportResourcesResult: string }>;

	StartImportResources(moduleName: string, branchName: string, destinationFolderId: string, resources: $D.DesignerRepository.Client.CheckoutResources, accessInfo: $D.DesignerRepository.Client.Service.AbstractRepositoryProxyAccessInfo): { StartImportResourcesResult: string };

	StartImportResourcesPromise(moduleName: string, branchName: string, destinationFolderId: string, resources: $D.DesignerRepository.Client.CheckoutResources, accessInfo: $D.DesignerRepository.Client.Service.AbstractRepositoryProxyAccessInfo): Promise<string>;

	StartImportResourcesForCheckout(destinationFolderId: string, checkoutId: string, successCallback: (data: { StartImportResourcesForCheckoutResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ StartImportResourcesForCheckoutResult: string }>;

	StartImportResourcesForCheckout(destinationFolderId: string, checkoutId: string): { StartImportResourcesForCheckoutResult: string };

	StartImportResourcesForCheckoutPromise(destinationFolderId: string, checkoutId: string): Promise<string>;

	IsCheckoutCompleted(importSessionId: string, successCallback: (data: { IsCheckoutCompletedResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ IsCheckoutCompletedResult: boolean }>;

	IsCheckoutCompleted(importSessionId: string): { IsCheckoutCompletedResult: boolean };

	IsCheckoutCompletedPromise(importSessionId: string): Promise<boolean>;

	GetCheckoutRepositoryResourcesStats(importSessionId: string, successCallback: (data: { GetCheckoutRepositoryResourcesStatsResult: $D.DesignerRepository.Client.Service.CheckoutRepositoryResourcesStats }) => any, errorCallback?: () => any): JQueryPromise<{ GetCheckoutRepositoryResourcesStatsResult: $D.DesignerRepository.Client.Service.CheckoutRepositoryResourcesStats }>;

	GetCheckoutRepositoryResourcesStats(importSessionId: string): { GetCheckoutRepositoryResourcesStatsResult: $D.DesignerRepository.Client.Service.CheckoutRepositoryResourcesStats };

	GetCheckoutRepositoryResourcesStatsPromise(importSessionId: string): Promise<$D.DesignerRepository.Client.Service.CheckoutRepositoryResourcesStats>;

	GetCheckoutRepositoryResourcesCounts(importSessionId: string, successCallback: (data: { GetCheckoutRepositoryResourcesCountsResult: $D.DesignerRepository.Client.Service.CheckoutRepositoryResourcesStats }) => any, errorCallback?: () => any): JQueryPromise<{ GetCheckoutRepositoryResourcesCountsResult: $D.DesignerRepository.Client.Service.CheckoutRepositoryResourcesStats }>;

	GetCheckoutRepositoryResourcesCounts(importSessionId: string): { GetCheckoutRepositoryResourcesCountsResult: $D.DesignerRepository.Client.Service.CheckoutRepositoryResourcesStats };

	GetCheckoutRepositoryResourcesCountsPromise(importSessionId: string): Promise<$D.DesignerRepository.Client.Service.CheckoutRepositoryResourcesStats>;

	RetryCheckoutResources(importSessionId: string, moduleName: string, branchName: string, accessInfo: $D.DesignerRepository.Client.Service.AbstractRepositoryProxyAccessInfo, successCallback: (data: { RetryCheckoutResourcesResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RetryCheckoutResourcesResult: void }>;

	RetryCheckoutResources(importSessionId: string, moduleName: string, branchName: string, accessInfo: $D.DesignerRepository.Client.Service.AbstractRepositoryProxyAccessInfo): { RetryCheckoutResourcesResult: void };

	RetryCheckoutResourcesPromise(importSessionId: string, moduleName: string, branchName: string, accessInfo: $D.DesignerRepository.Client.Service.AbstractRepositoryProxyAccessInfo): Promise<void>;

	AddMergedIssues(importSessionId: string, resources: $D.DesignerRepository.Client.CheckoutResources, successCallback: (data: { AddMergedIssuesResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddMergedIssuesResult: void }>;

	AddMergedIssues(importSessionId: string, resources: $D.DesignerRepository.Client.CheckoutResources): { AddMergedIssuesResult: void };

	AddMergedIssuesPromise(importSessionId: string, resources: $D.DesignerRepository.Client.CheckoutResources): Promise<void>;

	AddRemovedIssues(importSessionId: string, resources: $D.DesignerRepository.Client.CheckoutResources, successCallback: (data: { AddRemovedIssuesResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddRemovedIssuesResult: void }>;

	AddRemovedIssues(importSessionId: string, resources: $D.DesignerRepository.Client.CheckoutResources): { AddRemovedIssuesResult: void };

	AddRemovedIssuesPromise(importSessionId: string, resources: $D.DesignerRepository.Client.CheckoutResources): Promise<void>;

	FinishImportResources(importSessionId: string, moduleName: string, branchName: string, destinationFolderId: string, resources: $D.DesignerRepository.Client.CheckoutResources, successCallback: (data: { FinishImportResourcesResult: $D.Framework.ServiceLayer.Services.ImportExport.ImportResult }) => any, errorCallback?: () => any): JQueryPromise<{ FinishImportResourcesResult: $D.Framework.ServiceLayer.Services.ImportExport.ImportResult }>;

	FinishImportResources(importSessionId: string, moduleName: string, branchName: string, destinationFolderId: string, resources: $D.DesignerRepository.Client.CheckoutResources): { FinishImportResourcesResult: $D.Framework.ServiceLayer.Services.ImportExport.ImportResult };

	FinishImportResourcesPromise(importSessionId: string, moduleName: string, branchName: string, destinationFolderId: string, resources: $D.DesignerRepository.Client.CheckoutResources): Promise<$D.Framework.ServiceLayer.Services.ImportExport.ImportResult>;

	FinishImportResourcesForCheckout(checkoutId: string, importSessionId: string, successCallback: (data: { FinishImportResourcesForCheckoutResult: $D.Framework.ServiceLayer.Services.ImportExport.ImportResult }) => any, errorCallback?: () => any): JQueryPromise<{ FinishImportResourcesForCheckoutResult: $D.Framework.ServiceLayer.Services.ImportExport.ImportResult }>;

	FinishImportResourcesForCheckout(checkoutId: string, importSessionId: string): { FinishImportResourcesForCheckoutResult: $D.Framework.ServiceLayer.Services.ImportExport.ImportResult };

	FinishImportResourcesForCheckoutPromise(checkoutId: string, importSessionId: string): Promise<$D.Framework.ServiceLayer.Services.ImportExport.ImportResult>;

	ForceCheckout(moduleName: string, branchName: string, destinationFolderId: string, revision: string, successCallback: (data: { ForceCheckoutResult: $D.Framework.ServiceLayer.Services.ImportExport.ImportResult }) => any, errorCallback?: () => any): JQueryPromise<{ ForceCheckoutResult: $D.Framework.ServiceLayer.Services.ImportExport.ImportResult }>;

	ForceCheckout(moduleName: string, branchName: string, destinationFolderId: string, revision: string): { ForceCheckoutResult: $D.Framework.ServiceLayer.Services.ImportExport.ImportResult };

	ForceCheckoutPromise(moduleName: string, branchName: string, destinationFolderId: string, revision: string): Promise<$D.Framework.ServiceLayer.Services.ImportExport.ImportResult>;

	GetModuleDataForFolder(moduleName: string, folderId: string, includeSubFolders: boolean, excludeHistoryFolders: boolean, excludeHiddenItems: boolean, successCallback: (data: { GetModuleDataForFolderResult: $D.Framework.ServiceLayer.Services.ImportExport.ExportModuleData[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetModuleDataForFolderResult: $D.Framework.ServiceLayer.Services.ImportExport.ExportModuleData[] }>;

	GetModuleDataForFolder(moduleName: string, folderId: string, includeSubFolders: boolean, excludeHistoryFolders: boolean, excludeHiddenItems: boolean): { GetModuleDataForFolderResult: $D.Framework.ServiceLayer.Services.ImportExport.ExportModuleData[] };

	GetModuleDataForFolderPromise(moduleName: string, folderId: string, includeSubFolders: boolean, excludeHistoryFolders: boolean, excludeHiddenItems: boolean): Promise<$D.Framework.ServiceLayer.Services.ImportExport.ExportModuleData[]>;

	GetCheckinInfos(moduleName: string, branchName: string, successCallback: (data: { GetCheckinInfosResult: $D.DesignerRepository.ResourceCheckinInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetCheckinInfosResult: $D.DesignerRepository.ResourceCheckinInfo[] }>;

	GetCheckinInfos(moduleName: string, branchName: string): { GetCheckinInfosResult: $D.DesignerRepository.ResourceCheckinInfo[] };

	GetCheckinInfosPromise(moduleName: string, branchName: string): Promise<$D.DesignerRepository.ResourceCheckinInfo[]>;

	GetCheckinInfoStats(moduleName: string, branchName: string, successCallback: (data: { GetCheckinInfoStatsResult: $D.DesignerRepository.Client.Service.CheckinTypeStats }) => any, errorCallback?: () => any): JQueryPromise<{ GetCheckinInfoStatsResult: $D.DesignerRepository.Client.Service.CheckinTypeStats }>;

	GetCheckinInfoStats(moduleName: string, branchName: string): { GetCheckinInfoStatsResult: $D.DesignerRepository.Client.Service.CheckinTypeStats };

	GetCheckinInfoStatsPromise(moduleName: string, branchName: string): Promise<$D.DesignerRepository.Client.Service.CheckinTypeStats>;

	GetRecentChanges(successCallback: (data: { GetRecentChangesResult: $D.DesignerRepository.ResourceCheckinInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetRecentChangesResult: $D.DesignerRepository.ResourceCheckinInfo[] }>;

	GetRecentChanges(): { GetRecentChangesResult: $D.DesignerRepository.ResourceCheckinInfo[] };

	GetRecentChangesPromise(): Promise<$D.DesignerRepository.ResourceCheckinInfo[]>;

	Checkin(moduleName: string, branchName: string, infos: $D.DesignerRepository.ResourceCheckinInfo[], notes: string, successCallback: (data: { CheckinResult: $D.DesignerRepository.Client.CheckinResult }) => any, errorCallback?: () => any): JQueryPromise<{ CheckinResult: $D.DesignerRepository.Client.CheckinResult }>;

	Checkin(moduleName: string, branchName: string, infos: $D.DesignerRepository.ResourceCheckinInfo[], notes: string): { CheckinResult: $D.DesignerRepository.Client.CheckinResult };

	CheckinPromise(moduleName: string, branchName: string, infos: $D.DesignerRepository.ResourceCheckinInfo[], notes: string): Promise<$D.DesignerRepository.Client.CheckinResult>;

	ForceCheckin(moduleName: string, branchName: string, infos: $D.DesignerRepository.ResourceCheckinInfo[], notes: string, successCallback: (data: { ForceCheckinResult: $D.DesignerRepository.Client.CheckinResult }) => any, errorCallback?: () => any): JQueryPromise<{ ForceCheckinResult: $D.DesignerRepository.Client.CheckinResult }>;

	ForceCheckin(moduleName: string, branchName: string, infos: $D.DesignerRepository.ResourceCheckinInfo[], notes: string): { ForceCheckinResult: $D.DesignerRepository.Client.CheckinResult };

	ForceCheckinPromise(moduleName: string, branchName: string, infos: $D.DesignerRepository.ResourceCheckinInfo[], notes: string): Promise<$D.DesignerRepository.Client.CheckinResult>;

	GetMissingParents(infos: $D.DesignerRepository.ResourceCheckinInfo[], successCallback: (data: { GetMissingParentsResult: $D.Framework.ServiceLayer.Services.ImportExport.ExportModuleData[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMissingParentsResult: $D.Framework.ServiceLayer.Services.ImportExport.ExportModuleData[] }>;

	GetMissingParents(infos: $D.DesignerRepository.ResourceCheckinInfo[]): { GetMissingParentsResult: $D.Framework.ServiceLayer.Services.ImportExport.ExportModuleData[] };

	GetMissingParentsPromise(infos: $D.DesignerRepository.ResourceCheckinInfo[]): Promise<$D.Framework.ServiceLayer.Services.ImportExport.ExportModuleData[]>;

	AddExtraResourceToModule(data: $D.Framework.ServiceLayer.Services.ImportExport.ExportModuleData[], moduleName: string, branchName: string, successCallback: (data: { AddExtraResourceToModuleResult: $D.DesignerRepository.ResourceCheckinInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ AddExtraResourceToModuleResult: $D.DesignerRepository.ResourceCheckinInfo[] }>;

	AddExtraResourceToModule(data: $D.Framework.ServiceLayer.Services.ImportExport.ExportModuleData[], moduleName: string, branchName: string): { AddExtraResourceToModuleResult: $D.DesignerRepository.ResourceCheckinInfo[] };

	AddExtraResourceToModulePromise(data: $D.Framework.ServiceLayer.Services.ImportExport.ExportModuleData[], moduleName: string, branchName: string): Promise<$D.DesignerRepository.ResourceCheckinInfo[]>;

	StartCheckin(moduleName: string, branchName: string, infos: $D.DesignerRepository.ResourceCheckinInfo[], notes: string, forceCheckin: boolean, successCallback: (data: { StartCheckinResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ StartCheckinResult: string }>;

	StartCheckin(moduleName: string, branchName: string, infos: $D.DesignerRepository.ResourceCheckinInfo[], notes: string, forceCheckin: boolean): { StartCheckinResult: string };

	StartCheckinPromise(moduleName: string, branchName: string, infos: $D.DesignerRepository.ResourceCheckinInfo[], notes: string, forceCheckin: boolean): Promise<string>;

	IsCheckinCompleted(checkinSessionId: string, successCallback: (data: { IsCheckinCompletedResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ IsCheckinCompletedResult: boolean }>;

	IsCheckinCompleted(checkinSessionId: string): { IsCheckinCompletedResult: boolean };

	IsCheckinCompletedPromise(checkinSessionId: string): Promise<boolean>;

	GetCheckinRepositoryResourcesStats(checkinSessionId: string, successCallback: (data: { GetCheckinRepositoryResourcesStatsResult: $D.DesignerRepository.Client.Service.CheckinRepositoryResourcesStats }) => any, errorCallback?: () => any): JQueryPromise<{ GetCheckinRepositoryResourcesStatsResult: $D.DesignerRepository.Client.Service.CheckinRepositoryResourcesStats }>;

	GetCheckinRepositoryResourcesStats(checkinSessionId: string): { GetCheckinRepositoryResourcesStatsResult: $D.DesignerRepository.Client.Service.CheckinRepositoryResourcesStats };

	GetCheckinRepositoryResourcesStatsPromise(checkinSessionId: string): Promise<$D.DesignerRepository.Client.Service.CheckinRepositoryResourcesStats>;

	RetryCheckinResources(checkinSessionId: string, successCallback: (data: { RetryCheckinResourcesResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RetryCheckinResourcesResult: void }>;

	RetryCheckinResources(checkinSessionId: string): { RetryCheckinResourcesResult: void };

	RetryCheckinResourcesPromise(checkinSessionId: string): Promise<void>;

	CommitCheckin(checkinSessionId: string, successCallback: (data: { CommitCheckinResult: $D.DesignerRepository.Client.Service.CheckinResultStats }) => any, errorCallback?: () => any): JQueryPromise<{ CommitCheckinResult: $D.DesignerRepository.Client.Service.CheckinResultStats }>;

	CommitCheckin(checkinSessionId: string): { CommitCheckinResult: $D.DesignerRepository.Client.Service.CheckinResultStats };

	CommitCheckinPromise(checkinSessionId: string): Promise<$D.DesignerRepository.Client.Service.CheckinResultStats>;

	CancelCheckin(checkinSessionId: string, successCallback: (data: { CancelCheckinResult: $D.DesignerRepository.Client.CheckinResult }) => any, errorCallback?: () => any): JQueryPromise<{ CancelCheckinResult: $D.DesignerRepository.Client.CheckinResult }>;

	CancelCheckin(checkinSessionId: string): { CancelCheckinResult: $D.DesignerRepository.Client.CheckinResult };

	CancelCheckinPromise(checkinSessionId: string): Promise<$D.DesignerRepository.Client.CheckinResult>;

	GetResourcesToRevert(moduleName: string, branchName: string, successCallback: (data: { GetResourcesToRevertResult: $D.DesignerRepository.ResourceCheckinInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetResourcesToRevertResult: $D.DesignerRepository.ResourceCheckinInfo[] }>;

	GetResourcesToRevert(moduleName: string, branchName: string): { GetResourcesToRevertResult: $D.DesignerRepository.ResourceCheckinInfo[] };

	GetResourcesToRevertPromise(moduleName: string, branchName: string): Promise<$D.DesignerRepository.ResourceCheckinInfo[]>;

	Revert(moduleName: string, branchName: string, destinationFolderId: string, resources: $D.DesignerRepository.ModuleInfoFile[], successCallback: (data: { RevertResult: $D.Framework.ServiceLayer.Services.ImportExport.ImportResult }) => any, errorCallback?: () => any): JQueryPromise<{ RevertResult: $D.Framework.ServiceLayer.Services.ImportExport.ImportResult }>;

	Revert(moduleName: string, branchName: string, destinationFolderId: string, resources: $D.DesignerRepository.ModuleInfoFile[]): { RevertResult: $D.Framework.ServiceLayer.Services.ImportExport.ImportResult };

	RevertPromise(moduleName: string, branchName: string, destinationFolderId: string, resources: $D.DesignerRepository.ModuleInfoFile[]): Promise<$D.Framework.ServiceLayer.Services.ImportExport.ImportResult>;

	GetChekinLogs(moduleName: string, branchName: string, count: number, successCallback: (data: { GetChekinLogsResult: $D.DesignerRepository.ModuleCheckinInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetChekinLogsResult: $D.DesignerRepository.ModuleCheckinInfo[] }>;

	GetChekinLogs(moduleName: string, branchName: string, count: number): { GetChekinLogsResult: $D.DesignerRepository.ModuleCheckinInfo[] };

	GetChekinLogsPromise(moduleName: string, branchName: string, count: number): Promise<$D.DesignerRepository.ModuleCheckinInfo[]>;

	CalculateDifferences(moduleName: string, successCallback: (data: { CalculateDifferencesResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CalculateDifferencesResult: void }>;

	CalculateDifferences(moduleName: string): { CalculateDifferencesResult: void };

	CalculateDifferencesPromise(moduleName: string): Promise<void>;

	NotifyOnNewerRevision(resourceId: string, successCallback: (data: { NotifyOnNewerRevisionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ NotifyOnNewerRevisionResult: void }>;

	NotifyOnNewerRevision(resourceId: string): { NotifyOnNewerRevisionResult: void };

	NotifyOnNewerRevisionPromise(resourceId: string): Promise<void>;

	GetLastModuleDifferences(successCallback: (data: { GetLastModuleDifferencesResult: $D.DesignerRepository.Client.Service.DiffModuleClientInfo }) => any, errorCallback?: () => any): JQueryPromise<{ GetLastModuleDifferencesResult: $D.DesignerRepository.Client.Service.DiffModuleClientInfo }>;

	GetLastModuleDifferences(): { GetLastModuleDifferencesResult: $D.DesignerRepository.Client.Service.DiffModuleClientInfo };

	GetLastModuleDifferencesPromise(): Promise<$D.DesignerRepository.Client.Service.DiffModuleClientInfo>;

	IsRepositoryServerConfigured(successCallback: (data: { IsRepositoryServerConfiguredResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ IsRepositoryServerConfiguredResult: boolean }>;

	IsRepositoryServerConfigured(): { IsRepositoryServerConfiguredResult: boolean };

	IsRepositoryServerConfiguredPromise(): Promise<boolean>;

	IsRepositoryServerAccessible(successCallback: (data: { IsRepositoryServerAccessibleResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ IsRepositoryServerAccessibleResult: boolean }>;

	IsRepositoryServerAccessible(): { IsRepositoryServerAccessibleResult: boolean };

	IsRepositoryServerAccessiblePromise(): Promise<boolean>;

	UserHasValidCredentialsForRepository(successCallback: (data: { UserHasValidCredentialsForRepositoryResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ UserHasValidCredentialsForRepositoryResult: boolean }>;

	UserHasValidCredentialsForRepository(): { UserHasValidCredentialsForRepositoryResult: boolean };

	UserHasValidCredentialsForRepositoryPromise(): Promise<boolean>;

	UpdateUserCredentials(email: string, password: string, updateAccount: boolean, successCallback: (data: { UpdateUserCredentialsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateUserCredentialsResult: void }>;

	UpdateUserCredentials(email: string, password: string, updateAccount: boolean): { UpdateUserCredentialsResult: void };

	UpdateUserCredentialsPromise(email: string, password: string, updateAccount: boolean): Promise<void>;

	GetRepositoryUser(successCallback: (data: { GetRepositoryUserResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetRepositoryUserResult: string }>;

	GetRepositoryUser(): { GetRepositoryUserResult: string };

	GetRepositoryUserPromise(): Promise<string>;

	ResetCachedCredentials(successCallback: (data: { ResetCachedCredentialsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ResetCachedCredentialsResult: void }>;

	ResetCachedCredentials(): { ResetCachedCredentialsResult: void };

	ResetCachedCredentialsPromise(): Promise<void>;

	GetServerRemovedResources(removedClientResources: $D.ServiceHost.ModuleResource[], successCallback: (data: { GetServerRemovedResourcesResult: $D.DesignerRepository.ResourceCheckinInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetServerRemovedResourcesResult: $D.DesignerRepository.ResourceCheckinInfo[] }>;

	GetServerRemovedResources(removedClientResources: $D.ServiceHost.ModuleResource[]): { GetServerRemovedResourcesResult: $D.DesignerRepository.ResourceCheckinInfo[] };

	GetServerRemovedResourcesPromise(removedClientResources: $D.ServiceHost.ModuleResource[]): Promise<$D.DesignerRepository.ResourceCheckinInfo[]>;

	GetClientRemovedResources(entityId: string, typeName: string, successCallback: (data: { GetClientRemovedResourcesResult: $D.ServiceHost.ModuleResource[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetClientRemovedResourcesResult: $D.ServiceHost.ModuleResource[] }>;

	GetClientRemovedResources(entityId: string, typeName: string): { GetClientRemovedResourcesResult: $D.ServiceHost.ModuleResource[] };

	GetClientRemovedResourcesPromise(entityId: string, typeName: string): Promise<$D.ServiceHost.ModuleResource[]>;

	RemoveFromClient(resources: $D.ServiceHost.ModuleResource[], successCallback: (data: { RemoveFromClientResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveFromClientResult: void }>;

	RemoveFromClient(resources: $D.ServiceHost.ModuleResource[]): { RemoveFromClientResult: void };

	RemoveFromClientPromise(resources: $D.ServiceHost.ModuleResource[]): Promise<void>;

	RemoveModule(moduleClientInfoId: string, successCallback: (data: { RemoveModuleResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveModuleResult: void }>;

	RemoveModule(moduleClientInfoId: string): { RemoveModuleResult: void };

	RemoveModulePromise(moduleClientInfoId: string): Promise<void>;

	RemoveModuleLocalOnly(moduleClientInfoId: string, successCallback: (data: { RemoveModuleLocalOnlyResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveModuleLocalOnlyResult: void }>;

	RemoveModuleLocalOnly(moduleClientInfoId: string): { RemoveModuleLocalOnlyResult: void };

	RemoveModuleLocalOnlyPromise(moduleClientInfoId: string): Promise<void>;

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
	DesignerRepositoryClientService(): DesignerRepositoryClientServiceStatic;
}
