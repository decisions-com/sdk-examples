declare namespace $DP.Common {
    class GridCellProps {
        readonly el: JQuery;
        constructor(el: JQuery);
        get index(): GridCellIndex;
        get colIndex(): number;
        get rowIndex(): number;
        get row(): JQuery;
        get span(): GridSpan;
        get colSpan(): number;
        get rowSpan(): number;
        get isSpanned(): boolean;
        get isEmpty(): boolean;
        get isAvailable(): boolean;
        private _child;
        get child(): JQuery;
        getPosition(colsNumber: number, rowsNumber: number): $DP.Containers.ComponentPosition;
    }
}
