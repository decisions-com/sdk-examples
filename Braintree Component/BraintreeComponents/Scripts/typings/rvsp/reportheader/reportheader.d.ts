/// <reference path="../../typings/core/generated/printexportservice.d.ts" />
/// <reference path="../../typings/report-helper/report-helper.d.ts" />
declare function UpdateReportConfigurationAsync(model: any, modelType: any, outputType?: any): any;
declare namespace $DP.Controls.Report {
    interface IReportHeader extends IReport {
        userCharts: ChartInfo[];
        isFavoriteReport: boolean;
        usePaging: boolean;
        isDrillDown: boolean;
        hasRuntimeFilters: boolean;
        numberOfRows: number;
        pageCount: number;
        pageIndex: number;
        hasSetting: boolean;
        isShowFavoriteIconAsButton: boolean;
        outputOptionMode: string;
        showFavouriteIcon: boolean;
        showGridModeButton: boolean;
        showTileModeButton: boolean;
        showMatrixModeButton: boolean;
        showCalendarModeButton: boolean;
        showBlurbModeButton: boolean;
        showTextModeButton: boolean;
        showCellsModeButton: boolean;
        showChartModeButton: boolean;
        showHierarchicalModeButton: boolean;
        showColumnsViewButton: boolean;
        defaultMode: string;
        reportViewerPart: IReportViewerPart;
        charts: ChartInfo[];
        isNewGridStyle: boolean;
        showViewsSwitchControls: boolean;
        calendarViewModes: CalendarViewMode[];
        reportName: string;
        canEditReport: boolean;
        isHeaderForMatrixPart: boolean;
        allowMatrixCustomization: boolean;
        runtimeFiltersCount: number;
        reportDataUrl: string;
        showReportHeaderConfigurationButton: boolean;
        totalRowsCount: number;
        textFilter: string;
        rowsPerPage: number;
        showSaveSnapShotButton: boolean;
        overrideRuntimeFilterDialogTitle: boolean;
        runTimeFilterDialogTitle: string;
        groupingFields: string[];
        reportColumnsForGrid: $D.Framework.Design.Report.Service.Comunication.ReportColumnInfo[];
        viewsLabel: string;
        changeReportLabel: string;
        changeActionsLabel: string;
        chartTypeLabel: string;
        actionsLabel: string;
        groupsLabel: string;
        sortLabel: string;
    }
    interface IReportViewerPart {
        hideSilverpartHeader: boolean;
        viewSwitchMode: ViewSwitchMode;
        saveGridSettingsMode: SettingsSaveMode;
        toolbarMode: boolean;
        reportViews: Views;
        noDataMessage: string;
        selectedPickReportSource: string[];
        keepSearchOpen: boolean;
        selectedReportViews: string[];
        allowReportSelection: boolean;
        dataDrillView: DataDrillView;
        componentId: string;
        previewDisplayMode: PreviewDisplayMode;
        rootFolderLabel: string;
        showExportButton: OptionShowMode;
        showRefreshButton: OptionShowMode;
        showRTEButton: OptionShowMode;
        showReportSaveButton: OptionShowMode;
        showGroupExpanderMode: OptionShowMode;
        showChartButtonsMode: OptionShowMode;
        showFavoriteButton: OptionShowMode;
        startInMultiSelectMode: boolean;
        gridModeShowLinkOnHover: boolean;
        collapseGroupsOnLoading: boolean;
        showSearch: boolean;
        defaultExcelTemplateId: string;
        showDefaultReportList: boolean;
        defaultReportID: string;
        defaultFolderID: string;
        showGroupActionsButton: boolean;
        title: string;
        previewShowActions: boolean;
        noDataMessageCssClass: string;
        iconWidth: number;
        iconHeight: number;
        defaultCalendarViewName: string;
        disableDrillDown?: boolean;
    }
    enum OptionShowMode {
        Button = 0,
        Menu = 1,
        None = 2
    }
    enum CalendarViewMode {
        Day = 0,
        Month = 1,
        Week = 2,
        List = 3
    }
    enum SettingsSaveMode {
        CurrentFolder = 0,
        CurrentView = 1,
        No = 2
    }
    enum ViewSwitchMode {
        Button = 0,
        Menu = 1,
        Tabs = 2
    }
    enum ReportViewMode {
        Data = 0,
        Tile = 1,
        Matrix = 2,
        Blurb = 3,
        Text = 4,
        Cells = 5,
        Chart = 6,
        Calendar = 7,
        MatrixPart = 8,
        Hierarchical = 9,
        Columns = 10
    }
    enum Views {
        None = 0,
        Data = 2,
        Matrix = 4,
        Charts = 8,
        Tiles = 16,
        Blurb = 32,
        Text = 64,
        Calendar = 128,
        Cells = 256
    }
    enum DataDrillView {
        Grid = 2,
        Blurb = 32,
        Text = 64
    }
    enum PreviewDisplayMode {
        Inline = 0,
        Outside = 1,
        Tooltip = 2,
        None = 3,
        RightSide = 4
    }
    class ReportHeader {
        private reportHeaderElem;
        private options;
        reportHeaderElement: JQuery;
        reportViewerPartElem: JQuery;
        isShowFavoriteIconAsButton: boolean;
        isMatrixHeader: boolean;
        rvspHolder: JQuery;
        isHeaderRightSide: boolean;
        reportHeaderContainer: JQuery;
        reportViewPickerContent: JQuery;
        reportViewerPartHiddenElem: JQuery;
        defaultViewMode: ReportViewMode;
        reportPickerTree: $DP.Controls.ReportViewer.ReportViewerTree;
        currentViewMode: ReportViewMode;
        pageIndexes: number[];
        filterLayerHolder: JQuery;
        textFilter: string;
        runtimeFilters: RuntimeFilters;
        private paginationBar;
        private gridView;
        isInMultiSelectMode: boolean;
        searchBar: SearchBar;
        searchBarHolder: JQuery;
        resetReportActionView: JQuery;
        hasRuntimeFilters: boolean;
        private runtimeFiltersHost;
        private runtimeFilterIcon;
        showChartModeButton: boolean;
        private popupLayer;
        private scrollTimer;
        constructor(reportHeaderElem: JQuery, options: IReportHeader);
        private _height;
        get height(): number;
        get gridViewInstance(): Grid.GridView;
        get hierarchicalView(): Grid.GridView;
        static getInstance(instanceId: string): ReportHeader;
        private getViewMode;
        get hasConfigurationIconVisible(): boolean;
        toggleConfigurationIcon(): void;
        Initialize(): void;
        get MultiSelectIconContainer(): JQuery;
        get searchBox(): JQuery;
        private appendSearchBoxContainer;
        showMultiselectIcon(): void;
        hideMultiSelectIcon(): void;
        showHideMultiSelectIcon(): void;
        private toggleSearchBar;
        private toggleRuntimeFilter;
        private toggleResetAction;
        setMultiSelectMode(isInMultiSelectMode: boolean, icon?: JQuery): void;
        getReportHeaderContainer(): JQuery;
        private setUserChartData;
        private documentReadyForReportHeader;
        private setReportViewerSilverPartMenuOptions;
        handleStylingInCaseOfFavoriteReport(): void;
        showTagsScrollBarButton(elementId: string): void;
        setReportHeaderSplitter(): void;
        resizeReportHeaderOnSplitter(splitterEndPosition: number, splitterStartPosition: number, reportHeaderSplitterElem: JQuery): void;
        enableFavouriteButtonOnReportSelction(): void;
        showViewPickerTree(): void;
        private showReportPickerDialog;
        private preRenderRTEFilderRightSide;
        setRTEPropertiesPosition(runtimeContainer: JQuery): void;
        generateReportHeaderDialog(): string;
        loadViewModes(): string;
        loadChangeReportOption(): string;
        loadActions(): string;
        get headerDialogViews(): boolean[];
        get headerDialogActions(): boolean[];
        get showActions(): boolean;
        get showExportAction(): boolean;
        get showSaveSnapshotAction(): boolean;
        get showResetReportAction(): boolean;
        get showEditReportAction(): boolean;
        get showSaveReportAction(): boolean;
        get renderAdHocChartAction(): boolean;
        get showAdHocChartAction(): boolean;
        get renderExpandCollapseAction(): boolean;
        get showExpandCollapseAction(): boolean;
        get showRefreshAction(): boolean;
        get showMultiSelectAction(): boolean;
        exportAction(): JQuery;
        saveReportAction(): JQuery;
        filterAction(): JQuery;
        addHocChartAction(): JQuery;
        expandCollapseAction(): JQuery;
        saveSnapshotAction(): JQuery;
        resetReportAction(): JQuery;
        editReportAction(): JQuery;
        refreshAction(): JQuery;
        multiSelectAction(): JQuery;
        loadCalendarModesHtml(): string;
        loadCalendarModes(reportHeaderDialog: JQuery): void;
        loadRightSideHeader(): string;
        private appendPaginationBar;
        updatePaginationBar(pageCount: number, pageIndex: number, totalRowsCount: number): void;
        static getPaginationBarHeight(reportHolder: JQuery, instanceId: string): number;
        setPositionOfReportHeaderDialog(): void;
        hideReportHeaderDialog(): void;
        static loadGroupingOptions(instanceId: string, groupingOptions: string[] | DataPair[], viewName: string, selected: string, onSelectionChange: (comboBoxItem: $DP.Common.ComboBoxItem) => void): void;
        static loadSortingOptions(instanceId: string, sortingOptions: string[], viewName: string, onSelectionChange: (item: $DP.Common.ComboBoxItem) => void, selected: string, forceCreate?: boolean): void;
        private convertUserChartToChartInfo;
        addUserChartToChartsData(userChart: IChartInfo): void;
        addUserChartToChartsOptions(userChart: IChartInfo): void;
        private convertChartInfoToComboBoxItems;
        private resetChartModes;
        private showHideChartViewModeButton;
        private removeChartByChartName;
        private loadChartModes;
        attachReportHeaderDialogEvent(): void;
        registerReportHeaderEvents(): void;
        showHideSearchBoxContainer(show: boolean): void;
        changeReportViewModes(elem: JQuery, currentMode: ReportViewMode): void;
        private showGroupingOptions;
        private showSortingOptions;
        private setExpandCollapseButtonVisibilty;
        private setReportHeaderWithGroupOptions;
        private setPagingAndResizeReportHeader;
        private enableViewModeButton;
        ResetReport(): Promise<void>;
        reportHeaderActions(element: JQuery): void;
        saveSnapShots(): void;
        saveSnapshotAsync(snapShotName: string): void;
        setViewModeTabHeight(parentContainerSize?: UI.Rect): UI.Rect;
        preRenderRteFilter(newWidth: number, rteContainer: JQuery, callBack?: any): boolean;
        private renderRteFilter;
        private checkRTEFilterAvialableSpace;
        changeExpandCollapseButtonStyle(element: JQuery): void;
        resetActionDescriptionPanel(): void;
        enableGridResetAction(): void;
        disableGridResetAction(): void;
        resizeReportHeader(allowReportselection?: any, usepaging?: boolean, newWidth?: number): void;
        editReport(): void;
        getPrintReportWindow(height: number, resizable: boolean, title: string, printReportData: IPrintReportWindow): Promise<void>;
        printReport(forDownload: boolean, contextId: string, printDialog: JQuery): void;
        reportViewPickerFolderTreeSetting(element: JQuery): void;
        horizontalScrollBarLeftScrolling(event: JQueryEventObject, elem: JQuery, slidingVariable: boolean, slideStep: number, animationTime: number): void;
        horizontalScrollBarRightScrolling(event: JQueryEventObject, element: JQuery, slidingVariable: boolean, slidingStep: number, animationTime: number): void;
        showHideRemoveChartButton(showRemoveChartButton: boolean): void;
        static hideShowReportFilterDataOverlay(instanceId: string, e: JQueryEventObject): void;
        static changeTitlForMultiselectionButton(element: any): void;
        showHideViewMode(): void;
        static showSearchButtonOnReportHeader(instanceId: string, keepSearchBoxOpen: boolean): void;
    }
}
