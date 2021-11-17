/// <reference path="../layouts/decisions.ui.d.ts" />
/// <reference path="../common/headerpanel.d.ts" />
/// <reference path="../ColorEditor/ColorStyleHelpers.d.ts" />
/// <reference path="../designers/common/graphics.d.ts" />
/// <reference path="../designers/formdesigner/form.utils.d.ts" />
/// <reference path="lay.container.d.ts" />
/// <reference path="lay.interfaces.d.ts" />
/// <reference path="lay.styling.d.ts" />
/// <reference path="lay.servertypes.d.ts" />
declare namespace $DP.Containers {
    enum HeaderContainerBorder {
        Full = 0,
        Bottom = 1,
        Off = 2
    }
    class SilverPartContainer extends BaseContainer implements SnapTo {
        readonly options: Silverdark.Designers.Forms.Containers.SilverPartContainerOptions;
        private panel;
        constructor(options: Silverdark.Designers.Forms.Containers.SilverPartContainerOptions);
        protected render(): JQuery;
        takeChild(el: JQuery): void;
        protected layout(size: $DP.UI.Size): void;
        canSnapto(point: $DP.Common.Point): boolean;
        getSnaptoRectangle(point: $DP.Common.Point, dragContext?: $DP.Designers.Forms.ComponentDragContext): Common.Rectangle;
        getDesignOverlay(): JQuery;
        getHeight(): number;
        private createContentStyle;
        private createContentBorderStyle;
        private createHeaderStyle;
        private getHeaderBorderStyle;
        toggle(collapse: boolean): void;
    }
}
