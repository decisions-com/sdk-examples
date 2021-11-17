/**
 * Author:dorin@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Designers.Reports {
    import ReportClientData = $D.Framework.Design.Report.Service.Comunication.ReportClientData;
    import ChartInfo = $D.Framework.Design.Report.ChartInfo;
    interface ViewConfigOptions {
        ComponentId: string;
        Type: string;
        ViewName: string;
        ViewPrefix: string;
        IsRemovable: boolean;
        IsSelectable: boolean;
        ReportContextId: string;
        RemoteContextId: string;
        HasDesignerControls: boolean;
        HasPreview: boolean;
    }
    interface ChartViewConfigOptions extends ViewConfigOptions {
        ChartTitle: string;
    }
    interface IViewContent {
        initialize(): void;
        refresh(): void;
        refreshPreview(limitRows: number): void;
    }
    interface IViewController {
        attach(): void;
        detach(): void;
        hidePreview: boolean;
    }
    class ViewsHeaderManager {
        private host;
        constructor(host: JQuery);
        addHeaderView(view: JQuery): void;
        clearHeaderViews(): void;
        getViewUI(viewId: string): JQuery;
    }
    class DesignerViewOptions {
        ReportLayoutHost: JQuery;
        ViewsHeaderHost: JQuery;
        ViewsListHost: JQuery;
        ViewsHost: JQuery;
        DesignerContentHost: JQuery;
        PreviewContentHost: JQuery;
        ViewsConfig: ViewConfigOptions[];
        ReportClientData: ReportClientData;
        LimitRows: number;
    }
    class DesignerViews {
        private _componentId;
        private _reportContextId;
        private _options;
        private _views;
        private _selectedViewId;
        private _viewNameToAdd;
        private filterActionHolder;
        static get VIEW_ATTACHED_EVENT_NAME(): string;
        static get VIEW_DETACHED_EVENT_NAME(): string;
        static get INITIALIZE_EVENT_NAME(): string;
        static get REFRESH_PREVIEW_EVENT_NAME(): string;
        static get REPORT_PROPERTY_CHANGED(): string;
        static get UPDATE_EVENT_NAME(): string;
        static get RESIZE_EVENT_NAME(): string;
        static get REMOVED_EVENT_NAME(): string;
        static get REMOTE_PROPERTY_CHANGED(): string;
        constructor(componentId: string, reportContextId: string, options: DesignerViewOptions);
        private get ReportClientData();
        get SelectedViewOptions(): ViewConfigOptions;
        get BlurbMergeData(): string;
        set BlurbMergeData(value: string);
        get SummaryMergeData(): string;
        set SummaryMergeData(value: string);
        get TextMergeData(): string;
        set TextMergeData(value: string);
        get CalendarMergeData(): string;
        set CalendarMergeData(value: string);
        getAvailableViews(): Array<{
            name: string;
            category: string;
            cssClass: string;
        }>;
        addView(viewName: string): void;
        getAddViewsActions(): any[];
        beginEditChartInfo(editContextId: string): void;
        refreshViews(): void;
        selectView(viewId: string, forceSelect?: boolean): void;
        initializeSelectedView(): void;
        updateSelectedView(): void;
        refreshPreview(limitRows: number): void;
        raiseResize(): void;
        remotePropertyChanged(messageType: string, remoteContextId: string, propertyName: string): void;
        onReportPropertyChanged(contextId: string, propertyName: string): void;
        get selectedViewType(): string;
        get isSelectedViewGrid(): boolean;
        private renderViews;
        private insertViewCallback;
        removeView(viewId: string): void;
        private onViewRemoved;
        selectDefaultView(): void;
        setPreviewLimitData(limitRows: number): void;
        setViewChartInfo(chartInfo: ChartInfo): void;
        addChartView(chartInfo: ChartInfo): void;
        addMatrixView(): void;
        addRowSummaryView(): void;
        addBlurbSummaryView(): void;
        addTextSummaryView(): void;
        addCellSummaryView(): void;
        addCalendarSummaryView(): void;
        addTileView(): void;
        addColumnsView(): void;
        addHierarchicalView(): void;
        private onViewConfigAdded;
        private setSelectionState;
        private getViewById;
        private buildDesignerView;
        private sendReportChangedNotification;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
