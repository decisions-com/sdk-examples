/// <reference path="../../typings/wijmo/wijmo.d.ts" />
declare namespace $DP.Controls.Report {
    import ChartType = $D.Framework.Design.Report.ChartType;
    import SubCalcFieldDefinition = $D.Framework.Design.Report.SubcalcFields.SubCalcFieldDefinition;
    import DataPair = $D.Framework.ServiceLayer.Services.ContextData.DataPair;
    import PieLabelPosition = $D.Framework.Design.Report.PieLabelPosition;
    import ChartRenderData = $D.Framework.Design.Charts.ChartRenderData;
    import ChartConfiguration = $D.Framework.Design.Charts.ChartConfiguration;
    import ChartDatum = $D.Framework.Design.Charts.ChartDatum;
    interface ChartDataOptions {
        ReportId: string;
        FolderId: string;
        OldContextId: string;
        UseMatrixAssource: boolean;
        SeriesName: string[];
        ChartType: ChartType;
        GroupingField: string[];
        ChartId: string;
        ComponentId: string;
        ConfigurationStorageId: string;
        ReportContextId: string;
        FieldsDefinition: SubCalcFieldDefinition[];
        UseUserDefinedColors: boolean;
        UserDefinedColors: DataPair[];
        ChartTitle: string;
        PutAnyGroupOverXIntoOtherCategory: boolean;
        GroupsOverXCount: number;
        ShortenLabelsAt: number;
        DataDrillMode: string;
        BorderColor: string;
        InstanceId: string;
        ShowTooltip: boolean;
        ChartHeader: ChartHeader;
        PieLabelPosition: PieLabelPosition;
        AxisLabels: AxisLabels;
        YAxisOptions: YAxisSettings;
        PieIsDonut: boolean;
        AllowDataBrowsing: boolean;
        IsInDesignMode: boolean;
        IsAutoRefresh: boolean;
        RefreshTime: number;
        IsConfigureMinRefreshInterval: boolean;
        IsEventAutoRefresh: boolean;
        IntervalBetweenEvents: number;
        RefreshOnCurrentFolderChange: boolean;
        RefreshOnAnyFolderChange: boolean;
        RefreshOnContainedEntityChange: boolean;
        disableDrillDown: boolean;
        ReportInstanceId: string;
        overrideDrillDownTitle: boolean;
        drillDownTitle: string;
        overrideDrillDownReportTitle: boolean;
        drillDownReportTitle: string;
        defaultColors: string[];
        chartLabelFormatString: string;
        UseRow: boolean;
        ChartLabelType: $D.Framework.Design.Report.ChartLabelType;
        ElementsHaveBorder: boolean;
        ElementsBorderColor: $D.Silverlight.UI.Utilities.DesignerColor;
        AnimatePieOnHover: boolean;
        ChartLegendPosition: $D.Framework.Design.Report.ChartLegendPosition;
        ChartLegendType: $D.Framework.Design.Report.ChartLabelType;
        RotateLabels: boolean;
        RotateLabelsAngle: number;
    }
    interface ChartHeader {
        visible: boolean;
        text: string;
        textStyle: any;
    }
    interface AxisLabels {
        textVisible?: boolean;
        textStyle?: object;
        labels?: object;
    }
    interface YAxisSettings {
        visible: boolean;
        autoMin?: boolean;
        min?: number;
        autoMax?: boolean;
        max?: number;
    }
    interface ChartArrayModel {
        ReportId: string;
        FolderId: string;
        OldContextId: string;
        UseMatrixAssource: boolean;
        ChartType: ChartType;
        GroupingField: string[];
        FieldsDefinition: SubCalcFieldDefinition[];
        SeriesName: string;
        ReportContextId: string;
        IsInDesignMode: boolean;
    }
    interface ChartDrillModel {
        DrillObj: DrillData;
        Host: ChartHelper | TempChartHelper;
        ReportSearchKey: string;
    }
    interface DrillData {
        InstanceId: string;
        ChartId: string;
        ReportId: string;
        FolderId: string;
        ReportContextId: string;
        ChartElem: JQuery;
        ChartAvailableSeriesNames: string;
        ChartType: ChartType;
        DataDrillMode: string;
        IntersectionDataKey: string;
        Title: string;
        UseMatrixAsSource: boolean;
        disableDrillDown: boolean;
        overrideDrillDownTitle: boolean;
        drillDownTitle: string;
        overrideDrillDownReportTitle: boolean;
        drillDownReportTitle: string;
        seriesName: string;
        fieldDefinition: SubCalcFieldDefinition[];
    }
    interface ChartAggregatedItem {
        Label: string;
        DisplayLabel: string;
        Value: any;
        Navigable: boolean;
        ColorString: string;
        IntersectionDataKey: string;
        Title: string;
        RowName: string;
        ColumnName: string;
        ColorOpacity?: number;
    }
    /**
     * This mirrors Silverdark.Components.Page.Charts.ChartDataSourceMode in
     * core\DecisionsFramework\Design\Form\ComponentData\ChartDataSource.enums.cs,
     * which for some reason is not being exported by TypeScript generator.
     */
    enum ChartDataSourceMode {
        /** "Use report subtotals" */
        Report = 0,
        /** "Use matrix" */
        Matrix = 1,
        /** "Use flow" */
        Flow = 2
    }
    interface IChartHelper {
        render(): void;
        navigate(e: JQueryEventObject, originalData: ChartAggregatedItem[], index: number): void;
        getDrillObject(availableSeriesNames: any, originalDataItem?: ChartAggregatedItem): DrillData;
        getChartArrayModel(): ChartArrayModel;
        clear(): void;
        clearBreadcrumbs(): void;
        renderBreadcrumbs(): void;
        navigateForward(series: any): void;
        navigateBackward(index: any): void;
        attachEvents(data: any): void;
        resizeChartView(): void;
        isReportHeaderRightSide(): boolean;
        getReportHeaderHeight(): number;
        getReportHeaderWidth(): number;
        showDrilldownData(chartDrillModel: ChartDrillModel): void;
        gotoReportOption(model: ChartDrillModel): void;
        browseReportoption(model: ChartDrillModel): void;
    }
    /** A temporary "duplicate" class to assist in happy builds while migrating functionality to React-side of things. */
    class TempChartHelper implements IChartHelper {
        private chartData;
        private renderer;
        private resizer;
        private disposer;
        chartHost: JQuery;
        breadcrumb: JQuery;
        chartContainerId: string;
        chartContainer: JQuery;
        reportViewerPart: JQuery;
        zoomedKey: string;
        constructor(chartData: dpComponents.IChartProps, renderer: (data: {}) => void, resizer: () => void, disposer: () => void);
        render(): void;
        navigate(e: JQueryEventObject, originalData: ChartAggregatedItem[], index: number): void;
        onDataPointClick: (config: ChartConfiguration, datum: ChartDatum, clientX: number, clientY: number) => void;
        showData: (config: ChartConfiguration, data: ChartRenderData[]) => void;
        getDrillObject(availableSeriesNames: string, originalDataItem?: ChartAggregatedItem): DrillData;
        getChartArrayModel(): ChartArrayModel;
        clear(): void;
        clearBreadcrumbs(): void;
        renderBreadcrumbs(): void;
        navigateForward(series: any): void;
        navigateBackward: (_index: any) => void;
        attachEvents(data: any): void;
        resizeChartView(): void;
        isReportHeaderRightSide(): boolean;
        getReportHeaderHeight(): number;
        getReportHeaderWidth(): number;
        showDrilldownData(chartDrillModel: ChartDrillModel): void;
        gotoReportOption: (model: ChartDrillModel) => void;
        browseReportoption(model: ChartDrillModel): void;
    }
    class ChartHelper implements IChartHelper {
        private chartData;
        private renderer;
        private resizer;
        private disposer;
        private chartHost;
        private breadcrumb;
        private chartContainer;
        private chartContainerId;
        private reportViewerPart;
        constructor(chartData: ChartDataOptions | dpComponents.ChartIdModel, renderer: (data: DataPair) => void, resizer: () => void, disposer: () => void);
        render(): void;
        navigate(e: JQueryEventObject, originalData: ChartAggregatedItem[], index: number): void;
        getDrillObject(availableSeriesNames: any, originalDataItem?: ChartAggregatedItem): DrillData;
        getChartArrayModel(): ChartArrayModel;
        clear(): void;
        clearBreadcrumbs(): void;
        renderBreadcrumbs(): void;
        navigateForward(series: any): void;
        navigateBackward(index: any): void;
        static setChartHeight(chartData: any): void;
        attachEvents(data: any): void;
        resizeChartView(): void;
        isReportHeaderRightSide(): boolean;
        getReportHeaderHeight(): number;
        getReportHeaderWidth(): number;
        static showDrillIntoSubChartMenu(e: JQueryEventObject, model: ChartDrillModel, $this: ChartHelper | TempChartHelper, clientX?: number, clientY?: number): void;
        showDrilldownData(chartDrillModel: ChartDrillModel): void;
        static showDrilldownData(chartDrillModel: ChartDrillModel, chartElem: JQuery): void;
        gotoReportOption(model: ChartDrillModel): void;
        browseReportoption(model: ChartDrillModel): void;
        static updateColorString(chartData: ChartDataOptions, item: ChartAggregatedItem): boolean;
        static getDefaultChartColors(): string[];
        static updateChart(chartDiv: JQuery, chartParameters: any): void;
        static updateChartOnClick(chartElement: JQuery, chartData: ChartDataOptions): void;
    }
    class ChartRefreshHelper {
        private chartData;
        private instanceId;
        refreshComponents: string[];
        timerTokens: string[];
        refreshChartTokens: string[];
        chartDiv: JQuery;
        constructor(chartData: ChartDataOptions, instanceId: string);
        addToRefreshList(): void;
        CheckTokenPresent(instanceId: any): boolean;
        checkAndExecute(): void;
        refreshChartView(minimumRefreshTimer: any): void;
        removeRefreshComponent(): void;
        canRefreshChartNow(minimumRefreshTimer: any): boolean;
        isBusy(): boolean;
        removeOldTokens(): boolean;
    }
    class ChartConstants {
        static Seperator: string;
    }
}
