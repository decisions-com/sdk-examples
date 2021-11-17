declare namespace $DP.Common {
    export interface CssGridOptions {
        /**
         * Id passed from BaseControlOptions
         */
        componentId?: string;
        /**
         * name passed from BaseControlOptions
         */
        componentName?: string;
        /**
         * CSS class, from ContainerOptions
         */
        cssClass?: string;
        /** Host JQ Object */
        host: JQuery;
        /**
         * corresponds to grid-template-rows
         */
        rows: string[];
        /**
         * corresponds to grid-template-columns
         */
        columns: string[];
        /**
         * to be rendered as padding top
         */
        marginTop?: number;
        /**
         * to be rendered as padding right
         */
        marginRight?: number;
        /**
         * to be rendered as padding Left
         */
        marginLeft?: number;
        /**
         * to be rendered as padding bottom
         */
        marginBottom?: number;
        /**
         * horizontal gutter spacing between rows, css row-gap
         */
        rowGap?: number;
        /**
         * vertical gutter between columns
         */
        columnGap?: number;
        height?: number;
        width?: number;
        isInDesignMode?: boolean;
    }
    export interface GridArea {
        colStart: number;
        colEnd: number;
        rowStart: number;
        rowEnd: number;
    }
    export interface GridSpan {
        rowSpan: number;
        colSpan: number;
    }
    export interface ChildPosition extends GridSpan {
        rowIndex: number;
        colIndex: number;
    }
    export interface CssGridChild extends ChildPosition {
        id: string;
        element: HTMLElement;
    }
    export interface CssGridPreviewCell extends CssGridChild {
        isFilled?: boolean;
    }
    interface ChildMap {
        [indexOrId: string]: CssGridChild;
    }
    export const GRID_LAYOUT_CLASS = "dp-grid-layout";
    /**
     * A CSS Grid implementation.
     */
    export class CssGrid {
        protected options: CssGridOptions;
        protected root: HTMLElement;
        private style;
        protected previewCells: HTMLDivElement[];
        protected previewCellProps: ChildPosition[];
        protected previewCellsByRow: CssGridPreviewCell[][];
        protected childrenByElementId: ChildMap;
        protected dummyRow: HTMLDivElement;
        private dummyRowHitRects;
        private dummyRowIndex;
        private dummyRowHitCol;
        constructor(options: CssGridOptions);
        render(options: CssGridOptions): HTMLElement;
        getView(): JQuery;
        appendChild(child: CssGridChild): void;
        canSnapTo(point: $DP.Common.Point, dragContext?: $DP.Designers.Forms.ComponentDragContext): boolean;
        getSnapToRectangle({ x, y }: $DP.Common.Point, dragContext?: $DP.Designers.Forms.ComponentDragContext, draggingElem?: JQuery): $DP.Common.Rectangle;
        /**
         * @returns design area rectangle based on `getBoundingClientRect`
         */
        getDesignArea(): Rectangle;
        private getRequestedSpan;
        getCellPositionByCoordinates(x: number, y: number): ChildPosition;
        isNewRow: () => boolean;
        getCellPropsForChild(child: JQuery): ChildPosition;
        /**
         * @param previewEl element to find props for
         * @returns props or `undefined` if cell is already filled.
         */
        private getPreviewForGridCell;
        private getAvailableSpan;
        /**
         * @param startCell cell starting with
         * @param endIndex row and col index of cell to span to
         * @param the cell preview element.
         */
        private getSpannedCell;
        /**
         * @param startCell starting position
         * @param requestedSpan requested span
         * @returns row and column indexes of furthest available cell within requested span.
         */
        private getSpannedCellIndexes;
        private getColSpanIndexesPerRow;
        /**
         * @param row positions to check against.
         * @param startIndex
         * @param maxColIndex
         */
        private getFreeCellIndexToRight;
        /**
         * Marks a cell as filled and hides the preview.
         * @param childPosition to mark as filled.
         */
        protected markCellsFilled({ rowIndex, rowSpan, colIndex, colSpan }: ChildPosition): void;
        protected isCellFilled(position: ChildPosition): boolean;
        private getColumnCss;
        private joinRowColCss;
        /** Claims host, or create grid containing element. NOOP if already done. */
        protected claimOrCreateGridElement(): void;
        private renderCellPreviews;
        private getCellPreviewElement;
        protected getPreviewProps(element: HTMLElement, rowIndex: any, colIndex: any): CssGridPreviewCell;
        findCellForCoords(x: number, y: number): HTMLDivElement;
        private pointIsInCell;
        private getRectForCells;
        /**
         * Add custom style attributes to elements to support IE11 (and 10?)
         * TODO remove when we drop IE Studio support.
         * @param child to style
         */
        private addChildStylesForIE;
        private showDummyRow;
        private hideDummyRow;
        private getDummyRowRect;
        private buildDummyRowHitRects;
        private createDummyRowCols;
        private getDummyRowIndex;
        private getLastCell;
        get dummyRowWidth(): number;
        get dummyRowLeft(): number;
    }
    export class SimpleCssGrid extends CssGrid {
        private formHost;
        private renderPromises;
        render(options: CssGridOptions): HTMLElement;
        renderhtml(forHost: $DP.FormHost.DecisionsFormSurface): Promise<void>;
        private attachEvents;
        private afterLoadComplete;
        protected markCellsFilled({ rowIndex, rowSpan, colIndex, colSpan }: ChildPosition): void;
    }
    export {};
}
