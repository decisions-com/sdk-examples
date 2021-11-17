/**
 * Author:dorin@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Designers {
    class SidebarHost {
        static RESIZED_EVENT: string;
        private options;
        private sidebarTabs;
        private sideBarId;
        constructor(options: SidebarOptions);
        isCollapsable(): boolean;
        get helpCenterElem(): JQuery;
        private findPanelHeader;
        addPanel(panel: SidebarPanel, activate?: boolean, group?: SidebarGroup, initialize?: boolean, insertAfter?: string): void;
        toggleTabsResize: () => void;
        private updateDotsVisibility;
        private getTabsForContexMenu;
        private updateHiddenState;
        private get tabsWidth();
        private addEllipsisToLast;
        private resetEllipsises;
        activatePanel(panel: SidebarPanel): void;
        removePanel(panel: SidebarPanel): void;
        private updateGroupsVisibility;
        private updateSidebarElementVisibility;
        resize(width: number, height: number): void;
        collapse(): void;
        expand(): void;
        setGroupWidth(sidebarGroup: SidebarGroup, width: number, height?: number): void;
        private handlePanelClick;
        private deactivateAllPanels;
        private deactivatePanels;
        private setupHostSplitter;
        setWidth(width: number): void;
        getWidth(): number;
        private setupGroupSplitter;
        private getHostSplitter;
        private getGroupSplitter;
        private getPanelsRoot;
        private getGroupPanel;
        private getPanelToggler;
        private render;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
