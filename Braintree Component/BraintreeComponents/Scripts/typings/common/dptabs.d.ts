/**
 * Author: oleg@decisions.com
 * Notes: unauthorized, unlicensed use, distribution, modification is not allowed.
 */
/// <reference path="styleprops.d.ts" />
/// <reference path="popuplayer.d.ts" />
/// <reference path="svg.icons.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/site/site.d.ts" />
/// <reference path="../designers/utils.d.ts" />
declare namespace $DP.Common {
    enum TabHeadersPlacement {
        Top = 0,
        Left = 1
    }
    /**
     * Options for DPTabs control
     */
    interface DPTabsOptions {
        tabs: DPTab[];
        host?: JQuery;
        className?: string;
        headersPlacement?: TabHeadersPlacement;
        /**
         * inline style for tab item
         */
        headerStyle?: string;
        /**
         * Representing the width of container which contains tab items
         */
        tabNavWidth?: string | number;
        stretchHeaders?: boolean;
        activeArrow?: boolean;
        tabSeparator?: boolean;
        minHeaderWidth?: number;
        onChange?: (tab: DPTab) => void;
        onDropDownOpened?: (dropDown?: JQuery) => void;
    }
    interface ITabs {
        selectTabById(tabId: string): void;
        getTabView(id: string): JQuery;
        setVisibilityTab(tabId: string, isVisible: boolean): void;
        enableDisableTab(tabId: string, isEnable: boolean): void;
        getActiveTab(): DPTab;
        refreshDropDown(): void;
        getActiveTabView(): JQuery;
        getActiveTabIndex(): number;
        setTabContent(tabId: string, el: JQuery): any;
    }
    /**
     * Options for DPTabs item
     */
    interface DPTab {
        id?: string;
        title: string;
        content?: string | JQuery;
        className?: string;
        isActive?: boolean;
        tabButtonStyles?: StyleProps;
        iconURL?: string;
    }
    /**
     * Decisions tabs based on JQuery tabs
     */
    class DPTabs implements ITabs {
        private options;
        static get className(): string;
        static get(element: JQuery): DPTabs;
        private host;
        private dropDown;
        private dropDownLayer;
        private tabsDropDown;
        private moreButton;
        constructor(options: DPTabsOptions);
        getView(): JQuery;
        getDropDownLayer(): JQuery;
        selectTabById(id: string): void;
        getActiveTabView(): JQuery;
        setVisibilityTab(tabId: string, isVisible: boolean): void;
        enableDisableTab(tabId: string, isEnable: boolean): void;
        getActiveTabIndex(): number;
        getActiveTab(): DPTab;
        setTabContent(tabId: string, el: JQuery): void;
        refreshDropDown(): void;
        private render;
        private createTabView;
        getTabView(id: string): JQuery;
        private getTabData;
        private stretchHeaders;
        private getHeaders;
        private getActiveHeader;
    }
}
interface JQuery {
    dptabs(options?: $DP.Common.DPTabsOptions): JQuery;
    dptabs(methodName: "get"): $DP.Common.DPTabs;
    dptabs(methodName: string): any;
}
