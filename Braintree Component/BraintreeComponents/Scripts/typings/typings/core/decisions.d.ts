/// <reference path="../site/site.d.ts" />

interface LocalServicesStatic {
    CachingService: CachingServicesStatic;
    FolderDataHelper: FolderDataHelperStatic;
    GetCurrentUserContext(): $D.Framework.ServiceLayer.Utilities.SessionUserContext;
}

interface NavigationItemStorageStatic {
    GetNavigationItemById(id: string);
    GetChildren(item, folderViewData, callback: (item) => void, force);
}


interface CachingServicesStatic {
    GetFolderViewData(folderId: string, successCallback: (folderViewData: $D.Framework.ServiceLayer.Services.Folder.FolderViewData) => void);
    ClearCacheForFolder(folderId);
}

interface FolderDataHelperStatic {
    SaveDataElement(folderId: string, newValue, dataName);
    GetDataElement(folderid, dataName, successCallBack);
}

interface DialogOptionsStatic {
    closeOnEscape: boolean;
    autoOpen: boolean;
    minWidth: number;
    minHeight: number;
    close: Function;
    dialogClass: string;
}

declare enum FolderMode { "portal", "window", "layer" }

interface NavigationStatic {
    navigationParameter: {};
    subwindow_defaults: DialogOptionsStatic;
    navigateToFolder(folderId: string, pageName?: string, folderViewData?, navigationParameters?, onNavigationComplete?: () => void);
    currentFolderId: string;
    currentPageName: string;
    Ui: any;
    runActionsInNewWindow?: string;
    refresh(folderid?: string);
    updateNavigationParameter(params: {});
    updateQueryString(property: string, value: any, url: string);
    isportalLocked: boolean;
    OpenPortalUrlInNewWindow(url: string);
    NavigationService: NavigationServiceStatic;
    openFolderInNewWindow: (folderId, pageName?, navigationalParms?) => any;
    lastClickedReportComponent: JQuery;
    lastSelectedRow: JQuery;
    getCurrentFolderViewData(): $D.Framework.ServiceLayer.Services.Folder.FolderViewData;
    pageContextId: string;
}

interface NavigationServiceStatic {
    addVisibleFolder(mode: FolderMode, folderId: string);
    removeVisibleFolder(mode: FolderMode, folderId: string);
    getVisibleFolders: () => string[];

}

interface PinnnedFoldersViewStatic {
    initialize(): void;
}
interface ClientEventsHandlerStatic {
    HandleClientEventsWithWait(successCallback?: () => void, errorCallback?: () => void): void;
    RegisterForEvent(eventId: string, asyncCallback?: () => any);
    UnRegisterForEvent(eventId: string, callback?: () => any);
    SendNotificationToClient(eventName, eventData);
}

/**
 * For client side logging use DecisionsLogger
 * @deprecated
 */
interface LoggingStatic {
    IsLoggingOut: boolean;
    PortalStartedOn: Date;
    subwindow_defaults: any;

    ViewErrorDetails(errorDetails: string, description: string, title: string): void;
}

interface DecisionsStatic {
    LocalServices: LocalServicesStatic;
    ClientEventsHandler: ClientEventsHandlerStatic;
    ContextMenuHelper: ContextMenuHelperStatic;
    Navigation: NavigationStatic;
    PinnnedFoldersView: PinnnedFoldersViewStatic;
    // DialogHelper: DialogHelperStatic;
    // PropertygridHelper: any;
    MessageDialog: MessageDialogStatic;
    PropertyGrid: any;

    Logging: LoggingStatic;

    GenerateNewGUID(): string;
    NavigationItemStorage: NavigationItemStorageStatic
}

declare function GetQueryStringParameters(): string[];
declare function GenerateGuid(): string;
declare function goBack(): void;
declare var virtualPath: string;
declare var CURRENT_DECISIONS_VERSION: string;
declare function SetContextProviderValue(editingContext: string, path: string[], dataPair: $D.Framework.ServiceLayer.Services.ContextData.DataPair, element: JQuery, callbackfunction?: Function): void;
declare function displayActionButtons(container: JQuery, width: number): void;

declare function Open_Action_In_New_Window(params: any, method: any, actionName: string);
declare function hideExistingMenu();