/**
 * Author:akash.singh@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Portal {
    interface TopBarOptions {
        readonly host: JQuery;
        readonly headerOptions: dpComponents.IPortalHeaderProps;
        readonly chrome?: ChromeSetting;
        readonly isActionsVisible: boolean;
        readonly getHomeFolderId: () => string;
        readonly onActionVisibilityChanged?: (event: {
            origin: TopBar;
            isVisible: boolean;
        }) => void;
        readonly onHeaderRendered?: dpComponents.RenderCallback;
        readonly isStudio?: boolean;
        readonly logoUrl?: string;
    }
    class TopBar {
        private options;
        private view;
        private header;
        private isActionsVisible;
        constructor(options: TopBarOptions);
        getView(): JQuery;
        update(folderData: $D.Framework.ServiceLayer.Services.Folder.FolderViewData): void;
        updateCurrentFolder(FolderName: string): void;
        getNotificationMenuItem(): JQuery;
        toggleNotificationActivity(isActive?: boolean): void;
        indicateNotificationRecieved(): void;
        updateActionsToggler(isActionsVisible: boolean): void;
        private render;
        private renderHeader;
        private renderNavigationPanel;
        private renderLogo;
        private attachEvents;
    }
    function appendSmallTopbar(host: JQuery, options: {
        isDebuggingEnabled: boolean;
    }): void;
    function createImpersonation(impersonatedUser: string): string;
    function removeSmallTopbar(host?: JQuery): void;
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
