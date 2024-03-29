/**
 * Author:akash.singh@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare function onItemSelect(actionBaseUrl: any, instanceId: any, displayViewType: any, entityTypeName: any, entityId: any, selectedItem: any, container: any, foldedrID: any, menuInstanceID: any): void;
declare function refreshReport(reportViewerPartID: any): void;
declare function LoadWithPreviousSplitterPosition_ReportViewer(instanceid: any, previewWidth: any, previewHeight: any): void;
declare function SetColumnModel(instanceId: any, colModel: any, storedGridSettingData: any): void;
declare function settingHeightOfReportViewerDependingOnViewmode(instanceId: any, viewSwitchMode: any): void;
declare function handleReportGridSplitterMouseDown(instanceId: any): void;
declare function handleStylingInCaseOfFavoriteReport(instanceId: any, isReportFavorite: any, reportId: any): void;
declare function handleDocumentClickForReportViewer(instanceId: any, e: any): void;
declare function isAllRvspLoaded(def: any): any;
declare function CheckAndRunReportRowSelectFlowHandler(instanceId: any, selectionParam: any, rowId: any): void;
declare function BuildCurrentGridSetting(instanceId: any, currentGroups: any, currentSorts: any): void;
declare function ShowAction(menuHolder: any, divid: any, instanceid: any, entityid: any, leftnew: any, topnew: any, menuInstanceID: any, newLeftForMenu: any, menuType: any, callback: any): void;
declare var previousTotalPageCountWidth: number;
declare var previousCurrentPageCountWidth: number;
declare var minusPageCount: boolean;
declare function UpdatePager(instanceId: any, resultRows: any, pageCount: any, pageIndex: any, totalRowsCount: any): void;
declare function showTagPicker(foldertypename: any, entityid: any, entitytypename: any, e: any): void;
declare function showTagScrollBarButtons(elementId: any, instanceId: any, viewswitchmode: any): void;
declare function hideNavigationLayer(elem: any): void;
declare function showActionOnRightClick(e: any, instanceId: any, entityId: any, entityTypeName: any): void;
declare function showGroupActionForTextReport(elem: any, instanceId: any): void;
declare function getGroupActions(rowData: any, instanceId: any, callBack: any, event: any): void;
declare function ShowGroupActions(instanceID: any, baseUrl: any, rowIds: any, event: any, currentGrid: any): void;
declare function AttachReportViewerEvents(instanceId: any): void;
declare function SelectFirst(instanceId: any): void;
declare function SelectLast(instanceId: any): void;
declare function SingleSelect(instanceId: any): void;
declare function getAcitonsForTextReport(isParagraphClicked: any): void;
declare function DisplayActionsOrOpenDefaultActionForTextReport(data: any, isParagraphClicked: any, instanceID: any, entityId: any): void;
declare function scrollIntoView(element: any, container: any): void;
declare function resizeAndSetSelection(instanceId: any, finalResize: any): void;
declare function setRTEPropertiesPosition(instanceId: any): void;
declare var refreshingViaContextNodeChanged: boolean;
declare function onContextNodeChanged(currentElement: any, value: any, valueConverter: any): void;
declare function prerenderRTEFilter(InstanceID: any, newWidth: any, callBack: any): boolean;
declare function checkRTEFilterAvialableSpace(elements: any, containerWidth: any, childrenCount: any, originalCheck: any): any;
declare function renderRTEFilter(InstanceID: any, containerWidth: any, childRequiredWidth: any, widthArr: any, childCount: any, textWidthArr: any, originalRun: any, callBackFunction: any): void;
declare function setActionsDescriptionPanel(displayViewType: any, instanceID: any, actionDescriptionPanel: any): void;
declare function setReportRowColor(rowElement: any): void;
declare function setReportRowSelectedColor(rowElement: any): void;
declare function resetCellReportRowColor(): void;
declare function setCellReportRowColor(rowElement: any): void;
declare function setCellReportRowSelectedColor(rowElem: any): void;
declare function SetReportSplitterDraggable(instanceId: any, previewMode: any, folderId: any, componentId: any, saveGridSettingsMode: any): void;
declare function ResetReportViewerGridSetting(instanceId: any, saveGridSettingMode: any, viewSwitchMode: any): void;
declare function ConstructMenuForAdHocCharts(instanceId: any, reportId: any, folderId: any, componentId: any, chartCount: any): string;
declare function setReportViewerSilverPartMenuOptions(instanceId: any, viewSwitchMode: any): void;
declare function getColumnsStoredId(instanceId: any, reportId: any): string;
declare function resetSelectedChartForTabs(instanceid: any, elem: any): void;
declare function EnableFavouriteButtonOnReportSelction(isFavourite: any, instanceId: any): void;
declare function ShowHideRemoveChartButton(instanceId: any, show: any): void;
declare function AddRuntimeFilterChangeListener(componentElemId: any, reportContextID: any, instanceId: any): void;
declare function ResizeGridAndGetMenuForSingleItem(instanceId: any, folderId: any, descriptionMenuInstanceIdHeader: any, singleCheckBoxMenuInstanceIdHeader: any, curentViewMode: any): void;
declare function getReportViewerContainer(instanceId: any, isDrillReport: any): any;
declare function SetResetViewModeButtons(instanceId: any, currentMode: any, viewSwitchMode: any): void;
declare function ReportViewerPartUIDispose(reportContextId: any, reportId: any, folderId: any, componentId: any, instanceId: any): void;
declare function pagingInReportViewer(e: any, instanceId: any): void;
declare function ReportGridDocumentLoad(instanceId: any, reportId: any, folderId: any, componentId: any, dataUrl: any, defaultGrouping: any, defaultSorting: any, columnsData: any, defaultFilters: any): void;
declare function setGroupingHeaderPosition(gridElement: any, instanceId: any): void;
declare function UnRegisterTextReportEvents(instanceId: any): void;
declare function ShowHideViewModes(instanceId: any): void;
declare function DocumentReadyForBlurbReportView(instanceId: any, ControlElem: any): void;
declare function selectGridReportRow(instanceId: any): void;
declare function selectBlurbAndCellReportRow(instanceId: any, autoSelectFirstRow: any, isBlurb: any): void;
declare function GetActionsForTextReportView(element: any, instanceId: any): void;
declare function DeselctAllReportRowsInText(instanceId: any): void;
declare function SelectDeselectTextTextReportRow(rowElement: any, instanceId: any): void;
declare function ExpandCollapseTextGroups(e: any, instanceId: any): void;
declare function SaveSnapshotAsync(instanceId: any, snapShotName: any): void;
declare function ReportViewerBodyClickEventListner(instanceId: any): void;
declare function showCalendarReport(instanceId: any, reportId: any, folderId: any, defaultReportId: any, displayViewType: any, outputOption: any, allowReportSelection: any, contextId: any, date: any, isTodayClicked: any): void;
declare function SearchData(instanceId: any, reportId: any, folderId: any): void;
declare function buildQueryString(params: any): string;
declare function set_part(queryString: any, key: any, value: any): any;
declare function setPagingBarVisibility(instanceId: any, pageIndex: any, pageCount: any, rowCount: any): void;
declare function resizeReportViewer(elementId: any, newHeight: any, newWidth: any): void;
declare function ResizeReportViewerPart(instanceId: any, newHeight: any, newWidth: any, finalResize: any): void;
declare function OpenDrillDownWindow(instanceId: any, title: any): void;
declare function OpenDrillViewReportWindowModel(drillModel: any): void;
declare function OpenDrillViewReportWindow(instanceId: any, data: any, title: any, ids: any, reportcontextid: any, isdrill: any, searchKey: any, usematrixassource: any, isDrillForTile: any, tileType: any, tileID: any): void;
declare function ResizeDrillDownReportViewer(instanceId: any, dialogCurrentHeight: any, dialogCurrentWidth: any, mode: any): void;
declare function scrollHeader(instanceId: any): void;
declare function ReportViewPickerFolderTreeSetting(element: any, instanceId: any): void;
declare function ResetActionDescriptionPanel(instanceId: any): void;
declare function horizontalScrollBarLeftScrolling(evnt: any, elem: any, slidingVariable: any, slideStep: any, animationTime: any): boolean;
declare function horizontalScrollBarRightScrolling(evnt: any, elem: any, slidingVariable: any, slideStep: any, animationTime: any): boolean;
declare function CloseFilter(elem: any, instanceId: any): void;
declare function GetFirstTabButtonEnable(viewswitchmode: any, instanceId: any): void;
declare function setFirstRowSelected(instanceid: any): void;
declare function OnBlurbRowClicked(e: any, instanceId: any, FolderId: any, selectedElement: any, entityTypename: any, entityId: any, isContextMenu: any): void;
declare function DisplayActionOrOpenDefaultActionForBlurbReport(data: any, entityId: any, entityTypename: any, instanceId: any, selectedElement: any, isContextMenu: any): void;
declare var groupNo: number;
declare function resizeTextAndBlurb(instanceId: any, outputMode: any, dialogCurrentHeight: any, dialogCurrentWidth: any): void;
declare function resizeCellView(instanceId: any): void;
declare function resizeCalendarView(instanceId: any, height: any, width: any): void;
declare function adjustCalendarCellsHeightWidth(instanceId: any): void;
declare function bindCellViewAllEvents(instanceId: any, showCellActionInButton: any): void;
declare function refreshReportViewer(reportViewerRefreshSettingsId: any, reportViewerPartDivId: any, minimumRefreshTimeInterval: any): void;
declare function refreshReportViewerOnFolderChangedEvent(reportViewerRefreshSettingsId: any, reportViewerPartDivId: any, minimumRefreshTimer: any, eventData: any): void;
declare function refreshReportViewerOnContainEntityChangedEvent(reportViewerRefreshSettingsId: any, reportViewerPartDivId: any, minimumRefreshTimer: any, eventData: any): void;
declare function refreshReportViewerOnCurrentFolderChangedEvent(reportViewerRefreshSettingsId: any, reportViewerPartDivId: any, minimumRefreshTimer: any, eventData: any): void;
declare function refreshReportViewerOnTreeChangedEvent(reportViewerRefreshSettingsId: any, reportViewerPartDivId: any, minimumRefreshTimer: any, eventData: any): void;
declare function refreshReportViewerByFolderOrKey(reportViewerRefreshSettingsId: any, reportViewerPartDivId: any, minimumRefreshTimer: any, eventData: any): void;
declare function isRvspLoaded(instanceID: any, promise: JQueryPromise<unknown>): void;
declare function refreshReportViewerOnRuntimeFilterChanged(instanceID: any, reportContextID: any, reportViewerPartDivId: any, eventData: any): void;
declare function refreshReportViewerOnReportContextChanged(reportViewerRefreshSettingsId: any, reportViewerPartDivId: any, minimumRefreshTimer: any, eventData: any): boolean;
declare function ReloadReport(instanceId: any): void;
declare function showMoreGroupByOptions(elem: any, menuId: any, instanceId: any): void;
declare function ShowException(instanceID: any): void;
declare function GetViewModeFromClasses(presentDisplayModeClass: any, instanceId: any): string;
declare function getGroupsInReport(instanceId: any): string;
declare function resizeReportViewGridModeOnSplitter(instanceId: any, dragStartPosition: any, dragEndPosition: any, dragMode: any): boolean;
declare function saveSplitterPosition(instanceId: any, folderId: any, componentId: any, saveGridSettingsMode: any): void;
declare function DehighlightFolderTreeNode(): void;
declare function ShowActionForCellReport(element: any, instanceId: any): void;
declare function showActionForCalendarInnerItem(element: any): void;
declare function GetSearchingString(instanceId: any): string;
declare var RowIndexSettingsFormat: string;
declare function LoadGridRowIndex(instanceId: any): any;
declare function getReportViewerPartByInstanceId(instaneId: any): any;
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
