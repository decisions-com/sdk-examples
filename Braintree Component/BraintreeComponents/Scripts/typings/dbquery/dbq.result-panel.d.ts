/// <reference path="dbq.result-data-table.d.ts" />
/// <reference path="dbq.querysettings.d.ts" />
/// <reference path="monaco-loader.d.ts" />
/// <reference path="../typings/core/generated/DBQueryService.d.ts" />
declare namespace $DP.DBQuery {
    import SqlQueryDto = $D.Framework.ServiceLayer.Services.DBQuery.SqlQueryDto;
    import QueryResultsDto = $D.Framework.ServiceLayer.Services.DBQuery.RunQueryResultsDto;
    interface DBQResultPanelOptions {
        queryResult?: QueryResultsDto;
        host: JQuery;
        getPage(queryId: string, pageNumber: number, pageSize: number): Promise<any[]>;
        onDownloadClick: (query: SqlQueryDto, queryIndex: number) => void;
    }
    class DBQResultPanel {
        private options;
        private $view;
        private settings;
        private dataTable;
        constructor(options: DBQResultPanelOptions);
        private render;
        getView(): JQuery;
        updateSize(): void;
        private attachOnRemove;
        private createTabsForQueries;
        private resetBorderBottomColorTabs;
        private createResultPanel;
        private getTemplate;
        private createError;
        private createDataTable;
    }
    interface DBQErrorResultOptions {
        error: string;
        host?: JQuery;
    }
    class DBQErrorResult {
        private options;
        private view;
        constructor(options: DBQErrorResultOptions);
        render(): JQuery;
        private getView;
    }
}
