declare namespace $DP.Common {
    class GridUtils {
        static spanCell(cell: JQuery, span: GridSpan, onCellSpanned?: (cell: JQuery) => void): void;
        private static spanCols;
        static getCellByCoordinates(gridEl: JQuery, coordinates: JQueryCoordinates): JQuery;
        static getGridSpanRectangle(startCell: JQuery, gridSpan: GridSpan): Rectangle;
        static getAvailableCellsToRight(startCell: JQuery, cellsNumber: number, filter: (cell: JQuery) => boolean): JQuery[];
        /**
         * knows how many cells available to span
         * @param {JQuery} startCell - the initial cell
         * @param {GridSpan} requestedSpan - requested column and row span
         * @param {(cell: JQuery) => boolean} filter - cell condition
         * @returns {$DP.Common.GridSpan}
         */
        static getAvailableGridSpan(startCell: JQuery, requestedSpan: GridSpan, filter: (cell: JQuery) => boolean): GridSpan;
    }
    class GridCss {
        static get className(): string;
        static get cellClassName(): string;
        static get cellSelector(): string;
        static get spannedCellClassName(): string;
        static getRowSelector(rowIndex: number): string;
        static getCellSelector(colIndex: number): string;
        static getFullCellSelector(index: GridCellIndex): string;
        static getFirstLevelRows(): string;
        static getFirstLevelCells(): string;
        /**
         * returns first closest cell
         */
        static getParentCell(el: JQuery): JQuery;
    }
}
