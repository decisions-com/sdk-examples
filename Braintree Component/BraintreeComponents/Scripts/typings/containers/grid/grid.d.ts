declare namespace $DP.Common {
    interface GridOptions {
        rows: GridRow[];
        columns: GridColumn[];
        height?: number;
        width?: number;
        getCellPadding?: (cell: $DP.Common.GridCellProps) => $DP.Common.Edges;
    }
    interface GridColumn {
        width?: number;
    }
    interface GridRow {
        height?: number;
    }
    interface GridCellIndex {
        colIndex: number;
        rowIndex: number;
    }
    /**
     * defines the grid column and row span
     * { colSpan: 1, rowSpan: 1 } - means no span
     */
    interface GridSpan {
        rowSpan: number;
        colSpan: number;
    }
    interface GridSize {
        table: $DP.UI.Size;
        columns: number[];
        rows: number[];
    }
    /**
    * @param draggingElem element being dragged.
    * @return span from Grid parent or else default span.
    */
    function getRequestedSilverGridSpan(draggingElem: JQuery): GridSpan;
    class Grid {
        readonly options: GridOptions;
        private root;
        private dummyRow;
        private cachedCells;
        constructor(options: GridOptions);
        render(): JQuery;
        getView(): JQuery;
        private renderRow;
        private renderColumn;
        getCell(index: GridCellIndex): JQuery;
        addChild(el: JQuery, index: GridCellIndex, span?: GridSpan): void;
        getAllCells(): GridCellProps[];
        private clearCachedCells;
        setSize(size: $DP.Common.GridSize): void;
        isColumnOccupied(index: number): boolean;
        isRowOccupied(index: number): boolean;
        private calcCellSize;
        private setCellSize;
        getCellChildSize(props: GridCellProps): $DP.UI.Size;
        /**
         * Returns size for grid cell.
         * @param cell grid cell - <td> HTML element
         * @see getCell method to get cell
         */
        private getCellSize;
        spanCell(index: GridCellIndex, span: GridSpan): void;
        getOccupiedCells(): GridCellProps[];
        getOccupiedCellsInColumn(colIndex: number): GridCellProps[];
        getOccupiedCellsInRow(rowIndex: number): GridCellProps[];
        private setCellPadding;
        getCellPropsForChild(child: JQuery): GridCellProps;
        canSnapTo(point: $DP.Common.Point, dragContext?: $DP.Designers.Forms.ComponentDragContext): boolean;
        getSnaptoRectangle(point: $DP.Common.Point, dragContext?: $DP.Designers.Forms.ComponentDragContext, draggingElem?: JQuery): $DP.Common.Rectangle;
        /**
         * returns span for the dragging element if provided
         */
        private getRequestedSpan;
        private isCellAvailable;
        getCellPropsByCoordinates(coordinates: JQueryCoordinates): GridCellProps;
    }
}
