declare namespace $DP.Portal {
    class PortalActionsOptionsBar {
        host: JQuery;
        isPinned: boolean;
        showPinButton: boolean;
        onPinChanged?: (event: {
            origin: PortalActionsBar;
            isPinned: boolean;
        }) => void;
        onSwitchClick?: (event: {
            origin: PortalActionsBar;
        }) => void;
    }
    class PortalActionsBar {
        private options;
        private $view;
        private isPinned;
        constructor(options: PortalActionsOptionsBar);
        getView(): JQuery;
        updateIsPinned(isPinned: boolean): void;
        update(folderViewData: $D.Framework.ServiceLayer.Services.Folder.FolderViewData): void;
        private render;
        private attachEvents;
    }
}
