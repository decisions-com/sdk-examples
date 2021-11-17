/**
 * Author:sachin.jadhav@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
import GridViewResultData = $D.Framework.Design.Report.Service.Comunication.GridViewResultData;
import ReportColumnInfo = $D.Framework.Design.Report.Service.Comunication.ReportColumnInfo;
import RuntimeFilterInfo = $D.Framework.Design.Report.Service.Comunication.RuntimeFilterInfo;
declare namespace $DP.Controls.Report.Grid {
    interface GridActionInfo {
        name: string;
        onClick: (rowData: any) => void;
    }
    interface ReportGridOptions extends ReportGridEvents {
        rowsHolderStyle?: dpComponents.StyleProps;
        instanceId?: string;
        isDesignTime?: boolean;
        reportContextOptions?: ReportContextOptions;
        holder?: JQuery;
        filterActionHolder?: JQuery;
        selectedRowIds?: string[];
        resetSelection: boolean;
        allowSelection: boolean;
        $paginationHolder?: JQuery;
        customActions?: GridActionInfo[];
        autoSelectFirstRow?: boolean;
        previewPanelClass?: string;
        height?: number;
        width?: number;
        id?: string;
        showEntityActions?: boolean;
        extraParams?: any;
        canGroup?: boolean;
        usePaging?: boolean;
        reportTextOutputType?: ReportTextOutputType;
        columnRuntimeFiltersData?: ColumnRuntimeFilterInfo[];
        hideGroupActionsButton?: boolean;
        treeGrid?: boolean;
        parentFieldName?: string;
        childFieldName?: string;
        showSelectedRowIndicator?: boolean;
        includeAllPagesInMultiSelection?: boolean;
        allRowIds?: string[];
        doNotResetSelectedOnRowSelection?: boolean;
        defaultSelectedRowIds?: string[];
        defaultSelectAll?: boolean;
        headerClassName?: string;
    }
    interface ReportGridEvents {
        onRowSelectionChange?: (rowIds: string[]) => void;
        onLoadComplete?: () => void;
        onRowValueChange?: () => void;
        beforePageChange?: () => void;
        onSaveCell?: (savingCellPromise?: Promise<$D.Framework.ValidationIssue[]>) => void;
        onMultiSelectChange?: (info: dpComponents.IMultiSelectionChangeInfo) => void;
        onMultiSelectionRangeChange?: (info: dpComponents.IMultiSelectRowsInfo[], ids: string[]) => void;
    }
    interface ReportViewerPart {
        isHideColumnHeader: boolean;
        previewDisplayMode: $DP.Common.PreviewDisplayMode;
        previewWidthInPercentage: number;
        isSpecifyPreviewPercentage: boolean;
        resetSelectionOnRefresh: boolean;
        startInMultiSelectMode: boolean;
        collapseGroupsOnLoading: boolean;
        previewShowActions: boolean;
        showBusyIndicator: boolean;
        allowAdjustingColumnProperties: boolean;
        noDataMessage: string;
        noDataMessageCssClass: string;
        actionHeight: number;
        previewWidth: number;
        previewHeight: number;
        saveGridSelectedRow: boolean;
        showGroupActionsButton: boolean;
        rowsPerPage: number;
        autoSelectFirstRow: boolean;
        replaceColumnFilterWithRuntimeFilters: boolean;
        allowFiltering: boolean;
        allowGrouping?: boolean;
        intervalBetweenEvents: string;
        autoRefreshInterval: string;
        autoRefresh: boolean;
        showSelectedRowIndicator: boolean;
        hideNoActionMenu: boolean;
    }
    interface ReportGridSettings {
        isAlternateRowsBackground: boolean;
        rightIndicatorDisplay: RightSideIndicatorDisplay;
        isGridStretchModeEnable: boolean;
        gridIconType: GridIconType;
        newGridActionType: NewGridActionType;
        selectedRowsStyle: SelectedRowsStyle;
        isRowNumerationEnable: boolean;
        actionButtonName: string;
        showGroupTitle: string;
        canAddColumns: boolean;
        reportRowNumbering: ReportRowNumberingOptions;
        isGroupingEnable: boolean;
        isSortingEnable: boolean;
        showSelectedRowIndicator: boolean;
        rowRightClickActionType: GridRowClickActionType;
        rowLeftClickActionType: GridRowClickActionType;
        canAddMultipleColumns: boolean;
    }
    interface ReportContextOptions {
        rowsPerPage: number;
        textFilter: string;
        actionHeight: number;
        previewWidth: number;
        previewHeight: number;
        isEditable: boolean;
        contextId: string;
        hasSubTotals: boolean;
        postData: any;
        isDrillDown: boolean;
        reportDataUrl: string;
        folderId: string;
        reportId: string;
        componentId: string;
        defaultSorting: string[];
        defaultFiltering: string[];
        columnRuntimeFilters: ColumnRuntimeFilterInfo[];
        defaultGrouping: string[];
        columns: JQueryJqGridColumn[];
        reportGridSettings: ReportGridSettings;
        reportViewerPart: ReportViewerPart;
        filterActions: boolean;
        filterActionByName: boolean;
        actionCategoriesToShow: string[];
        actionNamesToShow: string[];
        gridModeNavigateBehavior: NavigateBehavior;
        gridModelShowLinkOnHover: boolean;
        configuration: string;
        autoSelectFirstRow: boolean;
        selectRowFromParameter: boolean;
        selectRowParamterName: string;
        selectionBusMappingColumnFieldName: string;
    }
    interface ColumnRuntimeFilterInfo {
        columnName: string;
        filterData: RuntimeFilterInfo[];
    }
    interface SortingInfo {
        columnName: string;
        sortingOrder: string;
    }
    interface ColumnFilterInfo {
        columnName: string;
        filterValue: string;
    }
    enum SortOrder {
        None = 0,
        Ascending = 1,
        Descending = 2
    }
    enum ReportGridMode {
        SingleSelect = 0,
        MultiSelect = 1,
        InlineEdit = 2,
        InfoOnly = 3
    }
    enum NavigateBehavior {
        Default = 0,
        Layer = 1,
        Window = 2,
        Portal = 3
    }
    enum ReportRowNumberingOptions {
        ResetNumbers = 0,
        ContinueNumber = 1
    }
    enum GridRowClickActionType {
        ShowSlider = 0,
        ShowActions = 1,
        DefaultAction = 2,
        NoActions = 3
    }
    enum SelectedRowsStyle {
        LeftSideIndicator = 0,
        RowBackground = 1,
        RowBackGroundAndRightSideIndicator = 2,
        LeftAndRightSideIndicator = 3
    }
    enum RightSideIndicatorDisplay {
        Arrow = 0,
        On = 1,
        Off = 2
    }
    enum NewGridActionType {
        ClickAnyWhereElse = 0,
        Button = 1,
        LeftSideText = 2,
        RightSideText = 3
    }
    enum GridIconType {
        None = 0,
        Circle = 1,
        GhostCircle = 2,
        Image = 3
    }
    enum ShowGroupTitleReportOptions {
        Default = 0,
        Never = 1,
        NotOnSingleGrouping = 2,
        Always = 3
    }
    class GridViewDefaultOptions implements ReportGridOptions {
        autoSelectFirstRow: boolean;
        resetSelection: boolean;
        allowSelection: boolean;
        showEntityActions: boolean;
        canGroup: boolean;
        reportTextOutputType: ReportTextOutputType;
    }
    class GridView {
        protected options: ReportGridOptions;
        grid: $DP.Common.ReportViewerGrid;
        private $gridHolder;
        protected static instanceHolder: {
            [key: string]: GridView;
        };
        isBusy: boolean;
        configuration: ReportViewConfiguration;
        static instanceName: string;
        private actionDef;
        constructor(options: ReportGridOptions);
        private _gridMode;
        get gridMode(): ReportGridMode;
        store(): void;
        clear(): void;
        static create(options: ReportGridOptions): GridView;
        static getInstance(instanceId: string): GridView;
        private onDefaultGridAction;
        initialize(): void;
        attachEvents(): void;
        get contextId(): string;
        static GetCurrentReportGridData(instanceId: string): typeof GridView;
    }
}
declare namespace $DP.Common.Report {
    class ReportHelper {
        private static configurationHolder;
        private static navigationParameteres;
        static saveReportGridSettingsToLocalStorage(instanceId: string): void;
        static ReloadReportGridView(instanceId: string): void;
        static addConfiguration(reportContextId: string, configuration: ReportViewConfiguration): void;
        static updateConfiguration(reportContextId: string, configuration: ReportViewConfiguration): void;
        static getConfiguration(reportContextId: string): ReportViewConfiguration;
        static removeConfiguration(reportContextId: string): void;
        static addNavigationParameters(reportContextId: string, sharedFilters: string[], runtimeFilters: string[]): void;
        static updateNavigationParameters(reportContextId: string, navigationParameters: object): void;
        static getNavigationParameters(reportContextId: string): object;
        static removeNavigationParameters(reportContextId: string): void;
        static updateRuntimeFiltersData(instanceId: string, reportContextId: string): void;
        static getRunTimeEditableFiltersHeight(instanceId: string): number;
        static clearNavigationParameters(instanceId: string, reportContextId?: string): void;
        static getNavigationParametersFromReportColumn(columns: ReportColumnInfo[]): {};
        static updateRuntimeFiltersDisplayData(instanceId: string): void;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
