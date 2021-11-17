declare namespace $DP.Common {
    interface ResponsiveCell {
        el: JQuery;
        minWidth?: number;
        height?: number;
        isFullWidth?: boolean;
    }
    interface ResponsiveGridExOptions {
        cells: ResponsiveCell[];
        width: number;
        margin?: number;
        style?: string;
    }
    class ResponsiveGridEx {
        private options;
        private view;
        constructor(options: ResponsiveGridExOptions);
        static get className(): string;
        static get cellClassName(): string;
        render(): JQuery;
        private createMap;
        private getCellPercentWidth;
        private createRow;
        private createCell;
        getView(): JQuery;
    }
}
