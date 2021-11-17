/// <reference path="../designers/utils.d.ts" />
declare namespace $DP.WorkflowCatalog {
    interface ResponsiveGridOptions {
        size: $DP.UI.Size;
        items?: JQuery[];
        minItemSize: $DP.UI.Size;
        maxItemsInRow: number;
        margin?: number;
    }
    class ResponsiveGrid {
        private options;
        private view;
        /**
        * last calculated amout of items in row
        */
        private lastItemsInRow;
        constructor(options: ResponsiveGridOptions);
        getView(): JQuery;
        setItems(items: JQuery[]): void;
        getItems(): JQuery[];
        resize(size: $DP.UI.Size): void;
        private render;
        private needResize;
        private itemsToRows;
        private appendRows;
        private getRowHeight;
        private createCell;
        /**
        * Count of rows, which component can show at the same time
        */
        private getAbleCountVisibleRows;
        /**
        * Count of rows, which component are showing at the same time
        */
        private getCountVisibleRows;
        private calcItemsInRow;
    }
}
