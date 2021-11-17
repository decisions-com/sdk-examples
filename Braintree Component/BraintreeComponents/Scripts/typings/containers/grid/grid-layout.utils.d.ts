declare namespace $DP.Common {
    export interface CssGridCellStyle {
        className: string;
        css: string;
    }
    export class GridLayoutCssHelpers {
        static makeGridCssClass(options: CssGridOptions): string;
        static getGridChildCss(options: CssGridOptions, child: CssGridChild, designMode?: boolean): CssGridCellStyle;
        static getSpansFromClassName: typeof getSpansFromClassName;
        static getChildPositionForIE: typeof getChildPositionForIE;
    }
    /**
     * For IE, spacer columns/rows are added for row/col gaps, so row and column values
     * have to be adjusted accordingly
     * @param rowIndex indexed zero
     * @param colIndex indexed zero
     * @param rowSpan
     * @param colSpan
     * @returns adjusted CSS position
     */
    function getChildPositionForIE({ rowGap, columnGap }: CssGridOptions, { rowIndex, colIndex, rowSpan, colSpan }: ChildPosition): ChildPosition;
    function getSpansFromClassName(jqElement: JQuery): GridSpan;
    export {};
}
