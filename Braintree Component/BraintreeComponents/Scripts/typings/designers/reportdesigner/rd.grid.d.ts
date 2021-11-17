/**
 * Author:dorin@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../../typings/jqgrid/jqgrid.d.ts" />
interface JQueryJqGridOptions {
    autowidth?: boolean;
    multisort?: boolean;
    grouping?: boolean;
    altRows?: boolean;
    altclass?: string;
    serializeGridData?: any;
    postData?: any;
    viewrecords?: boolean;
    gridview?: boolean;
    page?: number;
    sortable?: any;
    filterByField?: string;
    groupingView?: any;
    contextId?: string;
    beforeProcessing?: any;
    loadComplete?: any;
}
declare namespace $DP.Designers.Reports {
    import SortOrder = $D.Framework.Design.Report.SortOrder;
    interface GridColumn extends JQueryJqGridColumn {
        key: string;
        label: string;
        sortingOrder: number;
        allowSort: boolean;
        allowFilter: boolean;
        allowGroup: boolean;
        allowEdit: boolean;
        alignment: number;
        align: string;
        wrapping: number;
        hidden: boolean;
        id: string;
        remoteId: string;
    }
    interface GridModel {
        InstanceId: string;
        ColumnModel: GridColumn[];
        DataURL: string;
        Data: any[];
        GroupBy: string[];
        SortBy: string[];
        RowPerPage: number;
        NumberOfPages: number;
        AvailableWidth: number;
        AvailableHeight: number;
        FolderId: string;
        SQLText: string;
        loadCompletedCallback: (instanceId: string) => void;
    }
    class ColumnDataInfo {
        key: string;
        fieldName: string;
        sortingOrder: SortOrder;
        isGrouped: boolean;
        constructor(colModel: any);
    }
    class ReportDesignerGridView implements IViewController {
        private _selector;
        private _gridViewSelector;
        private _reportContextId;
        private _folderId;
        private _reportId;
        private _isInitialized;
        private _model;
        constructor(selector: JQuery, reportContextId: string, folderId: string, reportId?: string);
        get gridId(): string;
        attach(): void;
        detach(): void;
        get hidePreview(): boolean;
        empty(): void;
        private unLoadGrid;
        setModel(value: GridModel): void;
        getModel(): GridModel;
        private getGridWidth;
        private getGridHeight;
        private initializeModel;
        private prepareCallData;
        refresh(): void;
        getColumnKey(index: number): string;
        private setColumnSort;
        getColumnDataInfo(index: number): ColumnDataInfo;
        private getModelColumnDataInfoByName;
        getColumnDataInfoByName(name: string): ColumnDataInfo;
        private initialize;
        renderGrid(): void;
        private setColumnWidthHandler;
        private editColumnHandler;
        private deleteColumnHandler;
        private columnsOrderHandlder;
        private groupDataHandler;
        private sortDataHandler;
        private toggleSorting;
        private setPrimarySorting;
        private updateGridViewSorting;
        private getPostData;
        private getGridSortExpression;
        private getModelSortExpression;
        private updateColumnHeadersStyle;
        private renderColumnSorting;
        private clearGridViewSortedColumns;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
