/// <reference path="../designers/formdesigner/formdesigner.d.ts" />
/// <reference path="lay.interfaces.d.ts" />
declare namespace $DP.Containers {
    interface ScrollBoxOptions extends ContainerOptions {
    }
    class SilverScrollBox extends BaseContainer implements SnapTo {
        readonly options: ScrollBoxOptions;
        static get className(): string;
        constructor(options: ScrollBoxOptions);
        protected render(): JQuery;
        takeChild(el: JQuery, childInfo?: ChildInfo): void;
        protected layout(size: $DP.UI.Size): void;
        canSnapto(point: $DP.Common.Point): boolean;
        getSnaptoRectangle(point: $DP.Common.Point, dragContext?: $DP.Designers.Forms.ComponentDragContext): Common.Rectangle;
    }
    class ScrollBox {
        static get className(): string;
        constructor();
        render(): JQuery;
    }
}
