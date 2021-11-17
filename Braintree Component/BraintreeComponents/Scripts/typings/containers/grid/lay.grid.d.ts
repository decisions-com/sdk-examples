declare namespace $DP.Containers {
    import Rectangle = $DP.Common.Rectangle;
    interface SilverGridOptionsExtended extends Silverdark.Designers.Forms.Containers.SilverGridOptions {
        host?: JQuery;
    }
    class SilverGrid extends BaseContainer implements SnapTo {
        readonly options: SilverGridOptionsExtended;
        private grid;
        constructor(options: SilverGridOptionsExtended);
        static get className(): string;
        render(): JQuery;
        takeChild(el: JQuery, childInfo: GridChildInfo): void;
        /**
        * how cell padding should be calculated
        */
        private getCellPadding;
        /**
         * how child positioned in grid (used for additional gap for page parts)
         */
        private getChildPosition;
        protected get shouldRespectMinMaxSizeForSelf(): boolean;
        protected layout(size: $DP.UI.Size): void;
        /**
         * calculates GridSize due to layout
         * @param size - the whole size
         */
        private calcGridSize;
        /**
         * calculates width of columns
         */
        private calcColumnsLayout;
        /**
         * calculates height of rows
         */
        private calcRowsLayout;
        /**
         * defines one column or row layout
         * @param entity - column/row configuration
         * @param elements - layout elements of the column/row children
         * @param margin - column/row margin
         */
        private makeLayoutEntity;
        private getColumnMargin;
        private getRowMargin;
        canSnapto(point: $DP.Common.Point, dragContext?: $DP.Designers.Forms.ComponentDragContext): boolean;
        getSnaptoRectangle(point: $DP.Common.Point, dragContext?: $DP.Designers.Forms.ComponentDragContext, draggingElem?: JQuery): $DP.Common.Rectangle;
        /**
         * overrides the container area, changes it to the table area instead of section
         */
        getDesignArea(): Rectangle;
        fillComponentInfoAtCursor(componentInfo: any, cursor: any): void;
        fillComponentInfo(componentInfo: any, child: JQuery): void;
    }
}
