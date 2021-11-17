/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/jqueryui/jqueryui.d.ts" />
/// <reference path="../common/canvastable.d.ts" />
declare namespace $DP.DBQuery {
    interface DBQResultDataTableOptions {
        host: JQuery;
        columns: Array<{
            name: string;
            width: number;
        }>;
        onColumnResized?: (event: {
            table: DBQResultDataTable;
            column: string;
            width: number;
        }) => void;
        getPage(pageNumber: number, pageSize: number): Promise<any[]>;
    }
    class DBQResultDataTable {
        private options;
        private $view;
        private table;
        constructor(options: DBQResultDataTableOptions);
        private render;
        updateSize(): void;
        private createHeaders;
        private createGrid;
        private toEntity;
        getView(): JQuery;
    }
}
