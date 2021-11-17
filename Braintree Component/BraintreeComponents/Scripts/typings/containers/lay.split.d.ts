/// <reference path="lay.container.d.ts" />
/// <reference path="component.d.ts" />
/// <reference path="../formControls/form.componentbase.d.ts" />
/// <reference path="lay.interfaces.d.ts" />
/// <reference path="../common/split.d.ts" />
declare namespace $DP.Containers {
    import ComponentInfo = $D.Framework.Design.Form.FormComponentInfo;
    interface SplitContainerOptions extends ContainerOptions {
        orientation?: $DP.Common.SplitOrientation;
        initialPercent?: number;
        rememberPercent?: boolean;
    }
    class SplitContainer extends BaseContainer implements SnapTo {
        readonly options: SplitContainerOptions;
        private split;
        constructor(options: SplitContainerOptions);
        protected render(): JQuery;
        private getInitialFirstPanelSize;
        private get shouldUseLocalStorage();
        private getPanelSizeFromLocalStorage;
        private savePanelSizeInLocalStorage;
        private getLocalStorageKey;
        takeChild(el: JQuery, childInfo: SplitContainerChildInfo): void;
        protected layout(size: $DP.UI.Size): void;
        private layoutChildren;
        fillComponentInfoAtCursor(info: ComponentInfo, cursor: any): void;
        getOrientation(): $DP.Common.SplitOrientation;
        canSnapto(point: $DP.Common.Point): boolean;
        getSnaptoRectangle(point: $DP.Common.Point): $DP.Common.Rectangle;
    }
    class SilverSplitPanelVertical extends SplitContainer {
        constructor(options: SplitContainerOptions);
    }
    class SilverSplitPanelHorizontal extends SplitContainer {
        constructor(options: SplitContainerOptions);
    }
}
