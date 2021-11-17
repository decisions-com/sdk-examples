/**
 * Author:huzefa.ezzi@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
import ImageInfoType = $D.Framework.ServiceLayer.Services.Image.ImageInfoType;
declare var GlobalActions: any;
declare var folderViewDataCache: any;
declare var folderTreeCache: any;
declare var dialogCount: number;
declare var checkRecentFolder: any;
declare var designerViewName: any;
declare var currentFolderActionsId: any;
declare var folderCatalogItems: any[];
declare var callBackFuntionForActionHolder: any;
declare var allowShowingLoader: boolean;
declare var ServiceCatalogTreeNodeType: {
    Folder: number;
    ServiceCatalog: number;
};
declare function updateFolders(currentFolderViewData: any, folderId: any): void;
declare function getFoldersAndEntityFolderIdsForBackButton(currentFolderViewData: any): {
    Folders: any;
    EntityFolderIds: string;
};
declare var bindTileReportBackButton: (instanceId: any) => void;
declare function loadCalender(contextId: any, instanceId: any, date: any): void;
declare function loadReport(reportId: any, folderId: any, mode: any, instanceId: any, isFiltered: any, filteredContextId: any, componentId: any): void;
declare function loadReportWithParams(parameters: any): void;
declare var bindCalanderReportEvents: (element: any, instanceId: any, contextId: any) => void;
declare var openTextReportActions: (options: any) => void;
declare function bindSearchBoxEvents(container: any): void;
declare var bindFolderPanelEvents: (isRoot: any) => void;
declare var showOnlyServiceCatalogItems: () => void;
declare var bindServiceCatalogElements: () => void;
declare var appendServiceCatalogFolderData: (node: any) => void;
declare var getCatalogItems: (folderID: any) => void;
declare var hideServiceCatalog: () => void;
declare var showServiceCatalog: () => void;
declare var onServiceCatalogItemSelect: (node: any) => void;
declare var onLoadImageOfServiceCatalogItems: (image: any, callBack: any) => void;
declare var appendServiceCatalogItems: (folderView: any, appendBackButton: any, elementFolderName: any) => void;
declare var addServiceCatalogItems: (folderView: any) => string;
declare var arrayBufferToBase64: (buffer: any) => string;
declare var bindActionsPanelEvents: () => void;
declare var getKeyForReport: () => string;
declare var bindReportForTreeViewEvents: (holder: any, componentId: any) => void;
declare var getEntityActionCacheKey: (actionEntityName: any, actionEntityId: any, folderId: any) => any;
declare var appendSearchedFolder: (entityHeaderData: any) => void;
declare var appendRootFolder: () => void;
declare var appendFolder: (folderView: any, appenBackButton: any) => void;
declare var appendActions: (folderId: any, element: any) => void;
declare var refreshActionsPanel: (element: any, panel: any) => void;
declare var remakeActionsPanel: (element: any) => void;
declare var addRemoveClassFromElement: (selector: any, classToAdd: any, classToRemove: any) => void;
declare var emptyActions: (actionHolder: any) => void;
declare var appendPages: (folderId: any, folderView: any, applyMargin: any) => void;
declare function getSubItemMarkup(folderId: any, folderName: any, pageName: any): string;
declare var appendEntityAction: (actionEntityName: any, actionEntityId: any, folderId: any, name: any, panel: any) => void;
declare var appendEntityActionAndRefreshLists: (actionsAndDescription: any, entityId: any, actionEntityName: any, panel: any) => void;
declare var setEntityDescription: (entityType: any, entityId: any, callback: any, panel: any) => void;
declare var processDescription: (description: any) => any;
declare var appendEntityDescription: (mainElement: any, actionElement: any, descriptionToAppend: any) => void;
declare var appendEntityNameOnActionPanel: (entityName: any, panel: any) => void;
declare var updateMobilePage: (folderId: any, pageName: any) => void;
declare var updateHeaderFolderName: (folderName: any) => void;
declare var updateMobileHistory: (folderId: any, folderView: any, pageName: any, replace: any, shouldAppendFolderNameToTopBar: any) => void;
declare var GetQueryStringParameters: () => string[];
declare var getFolderViewData: (folderId: any) => any;
declare var getGlobalActions: () => any;
declare var getFolderForTree: (baseFolderId: any, callBack: any, elementEntityFolderId: any) => any;
declare function CacheHolder(): void;
declare function setSelection(entityId: any): void;
declare function resetSelection(element: any): void;
declare var searchFolderByName: (searchingKey: any) => void;
declare function loadReportMobile(reportId: any, folderId: any, outputMode: any, instanceId: any, searchKey: any): void;
declare var loadMainPage: (folderId: any, pagename: any) => void;
declare var SetHelpMessage: () => any;
declare function FuncToExecuteforAction(): void;
declare function loadAsync(parameters: any): JQueryXHR;
declare function checkInput(type: any): boolean;
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
