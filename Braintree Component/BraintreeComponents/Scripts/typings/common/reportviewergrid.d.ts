declare function EnableGridResetAction(instanceId: string): any;
declare namespace $DP.Common {
    export interface IReportViewerGridOptions {
        gridHolder: JQuery;
        filterLayerHolder: JQuery;
        showRowNumber?: boolean;
        onDefaultGridActionClick?: (action: {
            entityId: string;
            entityType: string;
        }, element: Element) => Promise<boolean>;
        onContextMenu?: (action: {
            entityId: string;
            entityType: string;
        }, e: any) => void;
        contextId: string;
        instanceId: string;
        isDesignTime?: boolean;
        configuration?: ReportViewConfiguration;
        usePaging?: boolean;
        folderId: string;
        gridIconType?: $DP.Controls.Report.Grid.GridIconType;
        onRowSelectionChange?: (rowIds: any) => void;
        autoSelectFirstRow?: boolean;
        isCollaped?: boolean;
        stretchModeEnable: boolean;
        resetSelectionOnRefresh?: boolean;
        startGridInMultiSelectMode?: boolean;
        noDataMessageOptions?: {
            class: string;
            message: string;
        };
        showActionsOnRightClick: boolean;
        canEdit?: boolean;
        canGroup?: boolean;
        canFilter?: boolean;
        canSort?: boolean;
        showGroupTitle: dpComponents.ShowGroupTitleReportOptions;
        showGroupActionsButton?: boolean;
        showLinkOnHover?: boolean;
        hideColumnHeader?: boolean;
        allowAdjustingColumnProperties?: boolean;
        canAddColumns?: boolean;
        autoRefresh?: boolean;
        autoRefreshInterval?: number;
        minimumEventInterval?: number;
        rememberSelectedGridRow?: boolean;
        selectRowFromParameter?: boolean;
        selectRowParamterName?: string;
        selectionBusMappingColumnFieldName?: string;
        showSelectedRowIndicator?: boolean;
        rowRightClickActionType: $DP.Controls.Report.Grid.GridRowClickActionType;
        rowLeftClickActionType: $DP.Controls.Report.Grid.GridRowClickActionType;
        selectedRowStyle?: $DP.Controls.Report.Grid.SelectedRowsStyle;
        rightIndicatorDisplay?: $DP.Controls.Report.Grid.RightSideIndicatorDisplay;
        onLoadComplete?: (result: any) => void;
        gridMode: $DP.Controls.Report.Grid.ReportGridMode;
        treeGrid?: boolean;
        parentFieldName?: string;
        childFieldName?: string;
        showLoadingIndicator: boolean;
        rowsHolderStyle?: dpComponents.StyleProps;
        customActions?: $DP.Controls.Report.Grid.GridActionInfo[];
        onSaveCell?: (savingCellPromise?: Promise<$D.Framework.ValidationIssue[]>) => void;
        onMultiSelectChange?: (info: dpComponents.IMultiSelectionChangeInfo) => void;
        onMultiSelectionRangeChange?: (info: dpComponents.IMultiSelectRowsInfo[], ids: string[]) => void;
        canAddMultipleColumns: boolean;
        includeAllPagesInMultiSelection?: boolean;
        allRowIds?: string[];
        doNotResetSelectedOnRowSelection?: boolean;
        defaultSelectedRowIds?: string[];
        defaultSelectAll?: boolean;
        headerClassName?: string;
        reportRowNumbering: $DP.Controls.Report.Grid.ReportRowNumberingOptions;
    }
    export interface IMultiSelectRowsInfo {
        rowId: string;
        element?: Element;
        action: {
            entityId: string;
            entityType: string;
        };
        keyField?: string;
    }
    export class ReportViewerGrid {
        private options;
        grid: ReportViewerGridManager;
        constructor(options: IReportViewerGridOptions);
        private setup;
    }
    abstract class ReportViewerGridManager {
        private options;
        protected SORT_ORDER_SPLITTER: string;
        protected ALLCOLUMNS_PLACEHOLDER_ID: string;
        protected COLUMN_SPLITTER: string;
        protected columns: dpComponents.IReportGridColProps[];
        rows: any[];
        protected gridViewProps: dpComponents.IReportGridContainerProps;
        protected reactGridHolder: JQuery;
        protected selectedRows: IMultiSelectRowsInfo[];
        protected abstract onRowSelectionChange(info: dpComponents.ISelectedRowInfo): any;
        protected abstract handleDefaultActionClick(action: {
            entityId: string;
            entityType: string;
        } | undefined, element: Element, rowId: string): any;
        protected abstract onRowRightClick(info: dpComponents.ISelectedRowInfo): any;
        protected abstract showMultiSelectMenu(selectedRows: dpComponents.IMultiSelectRowsInfo[]): any;
        protected designerContentHolder: JQuery;
        private reportHeaderContainer;
        private chartButton;
        private expandCollapseAllButton;
        protected reportViewerPart: JQuery;
        protected runtimeFilterHolder: JQuery;
        protected reportHeader: $DP.Controls.Report.ReportHeader;
        protected currentSelectedRowId: string;
        private isDrillDownReport;
        constructor(options: $DP.Common.IReportViewerGridOptions);
        initilaize(): Promise<void>;
        getRowData(rowId: string): any;
        get selectedRowIds(): string[];
        get selectedRowKeys(): string[];
        setSelectedRowsByKeyField(selectedRowIds: string[]): void;
        private getSelectedRow;
        private getSelectRowFromSelectionBus;
        private toggleChartButton;
        private toggleExpandCollapseButton;
        private toggleConfigurationIcon;
        private showHideChartViewModeButton;
        private renderReactGrid;
        private clearNavigationParama;
        private attachEvents;
        private hideMenu;
        protected getColumnsForReportGrid(): dpComponents.IReportGridColProps[];
        getSortings(): string[];
        getGroupings(): string[];
        /**
         * Reload grid with updated selection, selected ids will get ignored if selectAll is true
         * @param selectedRowIds
         * @param selectAll
         */
        reloadGrid(selectedRowIds?: string[], selectAll?: boolean): void;
        reloadGridWithUpdatedRows(selectedRowIds?: string[], selectAll?: boolean, updatedRowIds?: string[]): void;
    }
    export {};
}
