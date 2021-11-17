/// <reference path="../typings/cheetah-grid.d.ts" />
declare namespace $DP.Common {
    interface CanvasColumnOptions {
        field: string;
        caption: string;
        width: number;
        style?: any;
    }
    class CanvasPagingSource {
        pageSize: number;
        getPage: (pageNumber: number, pageSize: number) => Promise<any[]>;
        constructor(pageSize: number, getPage: (pageNumber: number, pageSize: number) => Promise<any[]>);
    }
    interface CanvasTableOptions {
        host: JQuery;
        headers: CanvasColumnOptions[];
        source?: any[] | CanvasPagingSource;
        frozenColCount: number;
        defaultColWidth: number;
        styleProps?: $DP.Common.StyleProps;
        onColumnResized?: (e: {
            origin: CanvasTable;
            column: string;
            width: number;
        }) => void;
    }
    class CanvasTable {
        private options;
        private $view;
        private grid;
        constructor(options: CanvasTableOptions);
        getView(): JQuery;
        redraw(): void;
        getColWidth(colIndex: number): number;
        setColWidth(colIndex: number, width: number): void;
        updateSize(): void;
        private renderRoot;
        protected render(): void;
        protected createStaticGrid(): void;
        protected createAutoPagingGrid(): void;
    }
}
