/// <reference path="../typings/core/generated/FolderService.d.ts" />
/// <reference path="../typings/core/generated/CommonActionService.d.ts" />
/// <reference path="../common/utils/string.utils.d.ts" />
/// <reference path="portal.pinnedfolders.d.ts" />
/// <reference path="helpcenter.d.ts" />
/// <reference path="../layouts/decisions.ui.d.ts" />
declare namespace $DP.Portal {
    interface LeftPanelOptions {
        isStudio?: boolean;
        serviceCatalogPanelTitle: string;
        foldersPanelTitle: string;
        host: JQuery;
        hasStudioRights?: boolean;
        baseUrl: string;
    }
    class LeftPanel {
        private options;
        private showFavorites;
        private showWorkflowCatalog;
        private showFoldersCatalog;
        private isStudio;
        private portalSideBarDefaultPanel;
        serviceCatalogTree: $DP.UI.Controls.ServiceCatalog.ServiceCatalogTreeControl;
        pinnedFolders: PinnedFolders;
        private view;
        private folderTree;
        private folders;
        private leftPanelSwitch;
        constructor(options: LeftPanelOptions);
        initialize(): Promise<void>;
        private getView;
        private renderSwitchLinkView;
        private getPinnedFolderHolderView;
        private getSwitchView;
        private getServiceCatalogHolderView;
        private getFoldersHolderView;
        private getHeaderToggleView;
        private getValidationBoxHolderView;
        static get(elem: JQuery): LeftPanel;
        static addRootFolder(): Promise<void>;
        resize(): void;
        panelResize(): void;
        static initCreateRootFolderButton(): void;
        updateContentVisibility(): void;
        attachEvents: () => void;
        private switchAccordionItem;
        hideLeftPanel(): void;
        showLeftPanel(): void;
        toggleLeftPanel(show?: boolean): void;
    }
}
