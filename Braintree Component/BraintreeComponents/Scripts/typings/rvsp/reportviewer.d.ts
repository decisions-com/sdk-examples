/// <reference path="../typings/report-helper/report-helper.d.ts" />
/// <reference path="reportheader/reportheader.d.ts" />
/// <reference path="../typings/jqgrid/jqgrid.d.ts" />
/// <reference path="../common/spinner.d.ts" />
/// <reference path="../eventListener/clientlistener.d.ts" />
/// <reference path="../navigation.Helper.d.ts" />
/// <reference path="../typings/core/decisions.d.ts" />
/// <reference path="gridview/rvsp.gridview.d.ts" />
/// <reference path="../typings/linq/linq.d.ts" />
declare function setLoadedAttributeValue(id: string): any;
declare namespace $DP.Controls.Report {
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
        autoRefreshInterval: number;
        autoRefresh: boolean;
        getReportIdFromSelectionBus: string;
        selectionBusName: string;
        showBusyIndicator: boolean;
        busyIndicatorText: string;
        defaultViewName: string;
    }
    interface IReportViewerOptions {
        host: JQuery;
        reportViewerPart: IReportViewerPart;
        instanceId: string;
        isDesignMode: boolean;
        pageContextId: string;
        folderId: string;
        isEventAutoRefresh: boolean;
    }
    enum ReportViews {
        Default = 0,
        Data = 1,
        Matrix = 2,
        Charts = 3,
        Tiles = 4,
        Blurb = 5,
        Text = 6,
        Calendar = 7,
        Cells = 8,
        Columns = 9,
        Hierarchical = 10
    }
    class ReportViewer {
        private options;
        reportViewer: IReportViewerPart;
        loadReportRequest: JQueryXHR;
        constructor(options: IReportViewerOptions);
        initialize(): void;
        attachEvents(): void;
        static getInstance(instanceId: string): any;
        load(): void;
        update(): void;
        private getReportViews;
        private getNavigationFilters;
        private showSpinner;
        private hideSpinner;
    }
}
