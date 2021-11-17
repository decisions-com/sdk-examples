/// <reference path="../common/dptabs.d.ts" />
/// <reference path="lay.container.d.ts" />
/// <reference path="../formControls/form.componentbase.d.ts" />
declare namespace Silverdark.Designers.Forms.Containers {
    interface SilverTabContainerOptions {
        onTabChange?: (tab: $DP.Common.DPTab) => void;
        hostType?: $DP.Containers.ComponentHostType;
    }
}
declare namespace $DP.Containers {
    type TabChildInfo = ChildInfo & {
        tabIndex: number;
        tabId: string;
    };
    class SilverTabContainer extends BaseContainer implements SnapTo {
        readonly options: Silverdark.Designers.Forms.Containers.SilverTabContainerOptions;
        private sessionId;
        protected tabs: $DP.Common.ITabs;
        protected get headerStyle(): string;
        constructor(options: Silverdark.Designers.Forms.Containers.SilverTabContainerOptions);
        static get className(): string;
        protected render(): JQuery;
        protected onTabChange(tab: $DP.Common.DPTab): void;
        /**
         * Shouldn't load tab content in design time and for forms, because tab container already has content.
         */
        private shouldLoadTabContent;
        private setDesignTimeSelectedTabId;
        private getDesignerSessionId;
        protected createTabs(): $DP.Common.DPTab[];
        getTab(p: Silverdark.Designers.Forms.Containers.TabPageInformation): Common.DPTab;
        takeChild(el: JQuery, childInfo: TabChildInfo): void;
        protected layout(size: $DP.UI.Size): void;
        fillComponentInfoAtCursor(componentInfo: any, cursor: any): void;
        canSnapto(point: $DP.Common.Point): boolean;
        getSnaptoRectangle(point: $DP.Common.Point, dragContext?: $DP.Designers.Forms.ComponentDragContext): Common.Rectangle;
        setVisibilityTab(tabId: string, isVisible: boolean): void;
        setEnableDisableTab(tabId: string, isEnable: boolean): void;
        protected errorWhenChildNotFound(childInfo: TabChildInfo): boolean;
        private loadTab;
        selectTabById(tabId: string): void;
    }
    class SideMenuContainer extends SilverTabContainer {
        readonly options: Silverdark.Designers.Forms.Containers.SideMenuContainerOptions;
        constructor(options: Silverdark.Designers.Forms.Containers.SideMenuContainerOptions);
        protected render(): JQuery;
        protected createTabs(): $DP.Common.DPTab[];
    }
}
