interface UserbackStatic {
    access_token?: string;
    widget_settings?: object;
    open?: () => void;
}
interface Window {
    Userback: UserbackStatic;
}
declare var Userback: UserbackStatic;
declare namespace $DP.Portal {
    import FolderViewData = $D.Framework.ServiceLayer.Services.Folder.FolderViewData;
    import ViewPageData = $D.Framework.ServiceLayer.Services.Folder.ViewPageData;
    /**
     * Initialize "userback.io" tool to allow users give us feedback
     */
    function initlializeUserBack(): void;
    function getNumberofItemToShow(): number;
    function getPortalLogoUrl(): string;
    function getSubPages(folderView: FolderViewData): ViewPageData[];
    function getPageLinks(folderView: FolderViewData, currentPageName: string): dpComponents.PageLinkPathProps[];
    function getFolderPath(folderView: FolderViewData): dpComponents.FolderPathElement[];
    function dispatchPortalResize(): void;
    function listenPortalResize(listen: (event: {
        width: number;
        height: number;
    }) => void): void;
    function isBrowserSupported(isStudio: boolean, browserName: string): boolean;
    function showMessageForUnsupportedStudioBrowser(browserName: string): void;
    function openPortal(): void;
}
