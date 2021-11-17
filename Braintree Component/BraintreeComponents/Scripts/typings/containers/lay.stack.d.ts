declare module Silverdark.Designers.Forms.Containers {
    interface SilverContainerBaseOptions {
        host?: JQuery;
    }
    interface SilverStackBaseOptions {
        orientation?: $DP.Common.StackOrientation;
        constrainChildren?: boolean;
    }
}
declare namespace $DP.Containers {
    import ComponentInfo = $D.Framework.Design.Form.FormComponentInfo;
    import LayoutElement = $DP.Layout.LayoutElement;
    export import StackFillMode = Silverdark.Designers.Forms.Containers.SilverStackFillMode;
    class StackContainer extends BaseContainer implements SnapTo {
        readonly options: Silverdark.Designers.Forms.Containers.SilverStackBaseOptions;
        protected stack: $DP.Common.Stack;
        constructor(options: Silverdark.Designers.Forms.Containers.SilverStackBaseOptions);
        protected render(): JQuery;
        get className(): string;
        takeChild(el: JQuery): void;
        protected layout(size: $DP.UI.Size): void;
        /**
         * make and compute stack layout
         */
        protected makeLayout(children: JQuery, size: $DP.UI.Size): LayoutElement[];
        /**
        * how cell padding should be calculated
        * @param index - cell index
        * @param total - total number of cells
        */
        protected getCellPadding(index: number, total: number, child?: JQuery): $DP.Common.Edges;
        /**
         * how child positioned in stack, used for additional page part margins
         */
        protected getChildPosition(index: number, total: number): ComponentPosition;
        /**
         * computes stack layout due to FillMode and size
         */
        static computeStackLayout(elements: LayoutElement[], fillMode: StackFillMode, size: number): LayoutElement[];
        getOrientation(): $DP.Common.StackOrientation;
        fillComponentInfoAtCursor(info: ComponentInfo, cursor: any): void;
        canSnapto(point: $DP.Common.Point): boolean;
        getSnaptoRectangle(point: $DP.Common.Point, dragContext?: $DP.Designers.Forms.ComponentDragContext, draggingElem?: JQuery, draggingElementSize?: SizeInfo): $DP.Common.Rectangle;
    }
    class SilverHorizontalStack extends StackContainer {
        constructor(options: Silverdark.Designers.Forms.Containers.SilverHorizontalStackOptions);
    }
    class SilverVerticalStack extends StackContainer {
        constructor(options: Silverdark.Designers.Forms.Containers.SilverVerticalStackOptions);
    }
    /**React vertical stack, will grow itself as per the content  */
    class ResponsiveVerticalStack extends StackContainer {
        private container;
        private formHost;
        private renderPromises;
        constructor(options: Silverdark.Designers.Forms.Containers.SilverVerticalStackOptions);
        render(): JQuery;
        private attachEvents;
        private getButtonPanelHolder;
        protected layout(size: $DP.UI.Size): void;
        doLayout(): void;
        private resizeHost;
        renderhtml(forHost: $DP.FormHost.DecisionsFormSurface): Promise<void>;
    }
}
