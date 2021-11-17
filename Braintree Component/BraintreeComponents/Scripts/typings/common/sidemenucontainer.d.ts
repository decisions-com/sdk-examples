declare namespace $DP.Common {
    interface SideMenuContainerOptions {
        holder: JQuery;
        tabs: DPTab[];
        onChange: (tab: DPTab) => void;
        headersPlacement?: TabHeadersPlacement;
        headerStyle: string;
    }
    class SideMenuContainer implements ITabs {
        private options;
        constructor(options: SideMenuContainerOptions);
        private activeTab;
        private moreButton;
        private root;
        static get className(): string;
        static initialize(options: SideMenuContainerOptions): SideMenuContainer;
        get tabClass(): string;
        get activeTabClass(): string;
        get menuClass(): string;
        get activeMenuClass(): string;
        render(): void;
        refreshDropDown(): void;
        setActiveTab(): void;
        createTabs(): JQuery;
        createMenus(): JQuery;
        getMenuId(tabId: string): string;
        getTabByTabId(id: string): DPTab;
        getMenuView(tab: DPTab): JQuery;
        createTabView(tab: DPTab): JQuery;
        setTabContent(id: string, content: JQuery): void;
        setMenuActive(id: string): void;
        setTabActive(id: string): void;
        selectTabById(id: string): void;
        getActiveTabView(): JQuery;
        getActiveTabIndex(): number;
        getTabView(id: string): JQuery;
        setVisibilityTab(tabId: string, isVisible: boolean): void;
        enableDisableTab(tabId: string, isEnable: boolean): void;
        getActiveTab(): DPTab;
    }
    interface TabsMoreButtonOptions {
        tabs: DPTab[];
        getTabByTabId: (tabId: string) => JQuery;
        holder: JQuery;
        headersPlacement: TabHeadersPlacement;
        getActiveTab: () => DPTab;
        headerStyle: string;
        isActiveHeader: (tab: JQuery) => boolean;
        onClick: (tab: JQuery) => void;
        onDropDownOpened?: (dropDownLayer: JQuery) => void;
    }
    class TabsMoreButton {
        private options;
        constructor(options: TabsMoreButtonOptions);
        private dropDown;
        private tabsDropDown;
        private dropDownLayer;
        static render(options: TabsMoreButtonOptions): TabsMoreButton;
        refreshDropDown(): void;
        private showAllTabs;
        private getTabs;
        private getTabsWidth;
        private getTabSpace;
        private getTabsForDropDown;
        private showDropDownLayer;
        private hideDropDownLayer;
        private tabItemToDropDownItem;
        private setDropDownCount;
        private createDropDown;
        renderDropDown(): void;
        private getAvailableSpace;
        private getTabsHeight;
        private getTabsSpace;
    }
}
