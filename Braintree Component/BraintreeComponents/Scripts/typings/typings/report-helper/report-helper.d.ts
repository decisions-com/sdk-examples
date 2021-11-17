interface Window {
    ResizeDrillDownReportViewer(instanceId, dialogCurrentHeight, dialogCurrentWidth, mode);
    ResizeReportViewerPart(instanceId, newHeight?, newWidth?, finalResize?);
    MatrixPartContainerResize(e);
    SetPositionForReportHeaderSearchBox(instanceId);
    showReportLoadingIndicator(instanceId);
    hideReportLoadingIndicator(instanceId);
}

interface ReportSettingsHelperStatic {
    DefaultReportSetting: () => void;
    GridSettingsInfo: () => void;
    ReportSettingsInfo: () => void;
    GridRowIndexInfo: () => void;
    SaveGridSettings: (settingsId: string, gridSettingsInfo: any) => void;
    LoadViewerSettings: (settingsId: string, successCallback?: (...params) => void) => any;
    GetReportColumn(settingsId: string): any;
    SaveViewerSettings: (settingsId: string, savingObject: Object) => any;
    UpdateGroupingAndSortingInformation: (sttingsId: string, groupingfields: string[], sortingfields: string[]) => any;
    RemoveFromLocalStorage: (instanceId: string) => any;
    GetChartData: (instanceId: string) => any;
    RemoveSingleChart(instanceId: string, chartName: string): void;
    RemoveChartData(instanceId: string): void;
    ChartInfo(): void;
    SetChartData(instanceId: string, chartData: IChartInfo[]);
}

interface IChartInfo {
    ChartName: string;
    ChartTypeName: string;
    IsUserDefined: boolean;
    ChartFieldName: string[];
    FieldDefination: FieldsDefinition[];
}

interface DecisionsStatic {
    ReportSettingsHelper: ReportSettingsHelperStatic;
    ChartPlotHelper: ChartPlot;
    ReportRefreshHelper: any;
    BlurbReportViewHelper: IBlurbReportViewHelper;
    ReportViewerHelper: IReportViewerHelper;
}

interface ChartPlot {
    PlotChart: (chartData: any) => void;
    ShowNoDataMessage: (chartId: string) => void;
}

interface ErrorDetails {
    title: string;
    description: string;
}

interface ReportParameters extends IReport {
    instanceId: string,
    componentId: string;
    sortBy: string;
    groupBy: string;
    searchKey: string;
    filterBy: string;
    reportOutputType: string;
    isDrillDown: boolean;
    pageIndex: number;
    isMatrixPart: boolean;
    isUpdateReport?: boolean;
    isRefresh?: boolean;
    noDataMessage?: string;
    noDataMessageCssClass?: string;
    textGroupNo?: number;
    groupNo?: number;
    initialData?: Object;
}

interface IBlurbReportViewHelper {
    setEntityActionsBarForBlurbReportView(instaceId: string, parentelem: JQuery): void;
    RenderEntityActionForEntity(table: JQuery, folderId: string, minPriAct: any, minSecAct: any): void;
    renderEntityActionBar(data: Object, element: JQuery): void;
}

interface IReportViewerHelper {
    ReportViewMode: any;
}

interface IReport {
    instanceId: string;
    reportId: string;
    defaultReportId: string;
    folderId: string;
    defaultFolderId: string;
    reportContextId: string;
    configuration: ReportViewConfiguration
}

interface IPrintReportWindow {
    reportId: string;
    folderid: string;
    outputMode: string;
    instanceId: string;
    reportContextId: string;
    defaultExcelTemplateId: string;
    selectedReportViews: string[];
    isDrill: boolean;
    isMatrixPart: boolean;
}

interface IReportViews {
    Resize();
    Display();
}

declare function DisplaySilverPartActionButtton(instanceId: string, componentId: string): void;

interface IFilteredActionData {
    EntityId: string;
    EntityTypeName: string;
    InstanceId: string;
}

interface ChartInfo {
    title: string,
    chartType: string,
    objectContextId: string,
    fieldsDefinition: FieldsDefinition[],
    id: string,
    fieldNames?: string[];
    isUserDefined?: boolean;
}

interface FieldsDefinition {
    fieldName;
}

interface CellColoringOptions {
    RowID: string
    ColumnName: string
    BackGroundColor: string
    ForeGroundColor: string
    BackGroundSelectedColor: string
    ForeGroundSelectedColor: string
    IconImageUrl: string
}

interface RowsInfo {
    Rows: object[];
    ColumnColoring: CellColoringOptions[];
    RowColoring: CellColoringOptions[];
    selectedrowIndex: number;
}

interface GridResult {
    gridRowColoring: CellColoringOptions[];
    gridColumnColoring: CellColoringOptions[];
    aggData: any;
    aggSeries: any;
    rows: object[];
}

declare function getFilteredActionBasedOnNameAndCategories(model: IFilteredActionData, successCallback?: (actions: $D.Framework.ServiceLayer.Actions.BaseActionType[]) => void);
declare function RunReportLinkFlow(flowId: string, reportContextId: string, rowId: string, showUI: string): void;
declare function GetCurrentVisibleViewMode(instanceId: string);
declare function renderOnReportSelection(reportId: string, reportName: string, instanceID: string, folderId: string, defaultReportID: string, componentID: string, InitialData: string, shouldLoadTree: boolean);
declare function doGridGrouping(event: JQueryEventObject, elem: JQuery, columnName: string, gridContainerID: string);
declare function doGridFiltering(elem: JQuery, columnName: string, gridContainerId: string, columnId: string);
declare function ReloadReportData(instanceId: string);
//TODO:- Need to move this in ts
declare function hideHeaderActionMenu(e: Event, componentId: string);
declare function GetOnlyHtmlOfElement(element: JQuery);
declare function GetLoadReportParameters(instanceId: string): ReportParameters;
//declare function EnableMultiSelectionForTextReport(instanceId: string, folderId: string, descriptionMenuInstanceIdHeader: string, singleCheckBoxMenuInstanceIdHeader: string);
declare function closeGroupActions(instanceId: string);
declare function resizeGrid(instanceId: string);
declare function HideRemoveChartButton_ReportHeader(instanceId: string);
declare function ViewModeSwitching_ReportHeader(instanceid: string, viewModeTypeToDisplay: string);
declare function expandCollapseGroups(expandAll: boolean, instanceId: string, resetLocalStorage: boolean, showActionAndDescriptionOnLoad?: boolean);
declare function getReportGridSettingsId(instanceId: string, saveReportSetting?: boolean);
declare function GetDefaultGroupsAndSorts(instanceId: string);
declare function SetResetReportHeaderActionButtons(instanceId: string, reset: boolean);
declare function getReportViewerSettingsId(instanceId: string, componentId?: string, saveReportSetting?: boolean);
declare function GetMenuForSingleItem(actionURL: string, instanceId: string, showDescription?: boolean, displayViewType?: number, folderId?: string, descriptionMenuInstanceId?, singleCheckBoxMenuInstanceId?, textReportId?, rowId?, elementToWhichAttachedMenu?, grid?);
declare function resetTextModeGroubyPosition(instanceId: string, newWidth: number);
declare function resetTileModeGroupByPoisition(instanceId: string, newWidth: number);
declare function showSuggestedReport(instanceId: string, defaultReportId: string, defaultFolderId: string, folderId: string);
declare function SetReportHeaderIconPosition(highlightIcons: boolean, currentTh: JQuery, e: JQueryEventObject);
declare function setPagingArrows(instanceId: string);
declare function showRunTimeEditableFilters(contextID: string, InstanceID: string, ShowRTEFilter?: string, callBack?);
declare function setChartsOption(instanceId: string, viewswitchmode?: number);
declare function GenerateFavouriteMarker(instanceId: string, isFav: boolean);
declare function GetCurrentVisibleViewMode(instanceId: string);
declare function GetMaximumZIndexFromElement(searchElem: JQuery);
declare function getReportDefaultSettingId(instanceId: string, selectedReportId: string);
declare function ResizeReportViewerModes(instanceId: string, finalResize?: boolean);
declare function SwitchReportModes(instanceId: string, reportMode: string);
declare function ResetReportHeaderWithGroupOptions(instanceId: string);
declare function DisplayGrid(instanceId: string, isUpdate?: boolean, isDefaultPageIndex?: number, reportContextId?: string, pageIndex?: number);
declare function SelectReportRow(currentMode: number, instanceId: string);
declare function setResetPagingBar(instanceId: string, set: boolean);
declare function hideReportLoadingIndicator(instanceId: string);
declare function resizeReportHeader(instanceid: string, allowReportselection: boolean, usepaging: boolean, newWidth?: number);
declare function DisplayTile(instanceId: string, isUpdate?: boolean);
declare function DisplayColumns(instanceId: string);
declare function DisplayMatrix(instanceId: string, isUpdate?: boolean);
declare function DisplayBlurb(instanceId: string, isUpdate?: boolean);
declare function DisplayHierarchicalView(instanceId: string);
declare function DisplayText(instanceId: string, isUpdate?: boolean);
declare function UpdateReportConfigurationAsync(model: Object, modelType: string, outputType: string);
declare function HandleReportError(instanceID: string, errorDetails: Object);
declare function DisplayCells(instanceId: string, isUpdate?: boolean);
declare function DisplayCalendar(instanceId: string, isUpdate?: boolean, isRefresh?: boolean, defaultMode?);
declare function DisplayChart(instanceId: string, allowReportSelection: boolean, reportId: string, folderId: string, usePaging: boolean, chartTitle: string, chartType: number, numberOfCharts: number, fieldName?: string, isUserDefinedChart?: boolean, disableDrillDown?: boolean);
declare function refreshReportViewerByModes(instanceId: string);
declare function DisableToolTip(element: JQuery);
declare function searchInReportViewer(et: JQueryEventObject, instanceId: string);
declare function RenderChartForReport_ReportHeader(instanceid: string, chartTitle: string, chartType: string, reportId: string, folderId: string, noDataMessege: string, dataDrillViewMode, fieldName?: string, isUserDefinedChart?: boolean, disableDrillDown?: boolean);
declare function GenerateStar(canvas: HTMLElement, color: string);
declare function ResizeReportViewerModes(instanceId: string, finalResize: boolean);
declare function UpdateReport(instanceId: string, reportContextId: string, useConfiguration: boolean, clearTextFilter?: boolean): JQueryDeferred<any>;
declare function EnableDisableResetSettingButton(instanceId: string);
declare function showReportLoadingIndicator(instanceId: string, isDrillDown?: boolean, forceShow?: boolean);
declare function hideGridSubSortMenu(instanceId: string);
declare function updateReportData(instanceId: string, isUpdate?: boolean);
declare function updateFiltersOnConfiguration(reportContextId: string, filters: DataPair[]);
declare function UpdateChartView(instanceId: string);
declare function ShowRuntimeEditableFiltersResult(instanceId: string);
declare function clearNonActiveViewContent(instanceId: string);