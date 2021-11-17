declare namespace $DP.Common {
    /**
     * used to handle a new dynamically shown row
     */
    class GridDummyRow {
        private grid;
        private dummyRow;
        private host;
        constructor(grid: Grid);
        handle(coordinates: JQueryCoordinates): void;
        static isNewRow(row: JQuery): boolean;
        private hasDummyRow;
        showDummyRow(rowIndex?: number, above?: boolean): JQuery;
        hideDummyRow(): void;
        private getNewRowByCoordinates;
        private shouldAddRow;
    }
}
