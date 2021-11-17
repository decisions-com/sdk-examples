declare namespace $DP.Portal {
    interface PortalPageOptions {
        readonly host: JQuery;
        readonly isStudio: boolean;
        readonly returnUrl: string;
        readonly baseUrl: string;
        readonly isDebuggingEnabled: boolean;
        readonly isUserInDesignersOrAdministratorGroup: boolean;
        readonly isAdministratorUser: boolean;
    }
    class PortalPage {
        private options;
        private $view;
        private $actionContainer;
        private portalTopBar;
        private appActions;
        private areActionsVisible;
        private areActionsPinned;
        private isPinnedForIe;
        private folderViewData;
        constructor(options: PortalPageOptions);
        getView(): JQuery;
        /**
         * true value indicates that actions are visible but will be hidden when click outside
         */
        private get areActionsHanging();
        private get areActionsSticked();
        private onNavigationComplete;
        private subscribeNavigationCompleted;
        private attachEvents;
        private render;
        private initializeNotifications;
        private lockTopBarAndActionsHorizontally;
        private renderTopBar;
        private renderActions;
        private attachClickOutside;
        private detachClickOutside;
        /**
         * Updates only provided properties
         */
        private updateActions;
        private handleOutsideClick;
    }
}
