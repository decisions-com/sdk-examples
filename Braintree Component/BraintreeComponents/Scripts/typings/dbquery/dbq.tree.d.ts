/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/jqueryui/jqueryui.d.ts" />
/// <reference path="../common/canvastable.d.ts" />
declare namespace $DP.DBQuery {
    import Table = $D.Framework.ServiceLayer.Services.DBQuery.Table;
    interface TablesTreeOptions {
        host: JQuery;
        rootStyles?: StyleProps;
        getTables: (event: {
            origin: TablesTree;
        }) => Promise<Table[]>;
        getViews: (event: {
            origin: TablesTree;
        }) => Promise<Table[]>;
        insertAtCursore: (event: {
            origin: TablesTree;
            text: string;
        }) => void;
        getScriptGenerator: (event: {
            origin: TablesTree;
            table: Table;
        }) => BaseGenerator;
    }
    class TablesTree {
        private options;
        private tables;
        private views;
        private $view;
        private $error;
        private tablesTree;
        constructor(options: TablesTreeOptions);
        getView(): JQuery;
        private render;
        private showErrorOnTablesTree;
        private getTablesAndViews;
        private createTree;
        private loatTables;
        private getViews;
        private getTableByName;
        private attachShowArrowOnHover;
        private createArrow;
        private attachContextMenuEventForTable;
        private showContextMenuForTable;
    }
}
