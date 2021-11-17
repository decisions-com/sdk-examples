declare namespace $DP.Containers {
    import SilverGridLayoutEntity = Silverdark.Designers.Forms.Containers.SilverGridLayoutEntity;
    interface GridLayoutContainerOptions extends ContainerOptions {
        rows: SilverGridLayoutEntity[];
        columns: SilverGridLayoutEntity[];
        marginTop?: number;
        marginLeft?: number;
        marginBottom?: number;
        marginRight?: number;
        rowGap?: number;
        columnGap?: number;
    }
    interface GridLayoutChildInfo extends Silverdark.Designers.Forms.Containers.SilverContainerChildInfo {
        column: number;
        columnSpan: number;
        row: number;
        rowSpan: number;
    }
    class GridLayout extends BaseContainer implements SnapTo {
        readonly options: Silverdark.Designers.Forms.Containers.GridLayoutOptions;
        protected grid: $DP.Common.CssGrid;
        private childMatrix;
        static useCompositeControl: boolean;
        constructor(options: Silverdark.Designers.Forms.Containers.GridLayoutOptions);
        static get className(): string;
        render(): JQuery;
        takeChild(el: JQuery, childInfo: GridLayoutChildInfo): void;
        protected layout(size: $DP.UI.Size): void;
        doLayout(size: $DP.UI.Size): void;
        canSnapto(point: $DP.Common.Point, dragContext?: $DP.Designers.Forms.ComponentDragContext): boolean;
        getSnaptoRectangle(point: $DP.Common.Point, dragContext?: $DP.Designers.Forms.ComponentDragContext, draggingElem?: JQuery): $DP.Common.Rectangle;
        /**
         * Overrides the container area. Legacy design area logic does not account for elements having padding,
         * so we provide our own here.
         */
        getDesignArea(): Common.Rectangle;
        fillComponentInfoAtCursor(componentInfo: any, cursor: any): void;
        fillComponentInfo(componentInfo: any, child: JQuery): void;
        private makeCssGridChild;
        static getSizeForLayoutElements(elements: SilverGridLayoutEntity[]): string[];
        static getSizeForLayoutElement({ layoutType, requestedSize }: SilverGridLayoutEntity): string;
    }
    class SimpleGridLayout extends GridLayout {
        render(): JQuery;
        doLayout(size: $DP.UI.Size): void;
        renderhtml(forHost: $DP.FormHost.DecisionsFormSurface): Promise<void>;
    }
}
