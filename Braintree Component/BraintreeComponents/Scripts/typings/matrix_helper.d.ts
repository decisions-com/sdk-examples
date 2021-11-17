/**
 * Author:khuzema@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare function ScrollDiv(e: any, elem: any, lastLeftScrollVal: any, lastTopScrollVal: any): void;
declare function setWidthConditionalDataCell(componentId: any, showIntersectionData: any, renderColMode: any, value: any, callFrom: any): void;
declare function setWidthDataCell(componentId: any, showIntersectionData: any): void;
declare function setHeightDataCell(componentId: any, rowCount: any, showIntersectionData: any): void;
declare function setHeightConditionalDataCell(componentId: any, rowCount: any, showIntersectionData: any, renderColMode: any, value: any): void;
declare function setHeightAsPerDataCell(componentId: any): void;
declare function setSizeConditionalItem(componentId: any, showIntersectionData: any, renderItemMode: any, renderColMode: any, renderRowMode: any, conditionalItemWidth: any, conditionalItemHeight: any, wholeCellDataTableTd: any): void;
declare function getParentColumn(id: any, componentId: any): JQuery;
declare function getParentRow(id: any, componentId: any): JQuery;
declare function getClosestVisibleColumnParent(dataCellId: any, componentId: any): JQuery;
declare function getClosestVisibleRowParent(dataCell: any, componentId: any): JQuery;
declare function setMaxHeightCompare_Cell_Row(dataCell: any, componentId: any): void;
declare function setMinHeightCompare_Cell_Row(dataCell: any, componentId: any): void;
declare function CollapseColumn(id: any, callFrom: any, componentId: any, showIntersectionData: any, collapsedColumn: any, expandedColumn: any, collapsedRow: any, expandedRow: any): void;
declare function ExpandColumn(id: any, callFrom: any, componentId: any, showIntersectionData: any, collapsedColumn: any, expandedColumn: any, collapsedRow: any, expandedRow: any): void;
declare function CollapseRow(id: any, callFrom: any, componentId: any, showIntersectionData: any, collapsedColumn: any, expandedColumn: any, collapsedRow: any, expandedRow: any): void;
declare function ExpandRow(id: any, callFrom: any, componentId: any, showIntersectionData: any, collapsedColumn: any, expandedColumn: any, collapsedRow: any, expandedRow: any): void;
declare function ShowIntersectionAction(elem: any, componentId: any): void;
declare function renderMatrixPart(componentId: any, instanceIdForReportHeader: any, reportConetxtID: any, reportId: any, folderId: any): void;
declare function LoadMatrixViewInfoAsync(componentId: any, reportHeaderInstanceId: any, reportId: any, folderId: any, selectedReportName: any, oldReportContextId: any): void;
declare function autoRefreshMatrixPart(componentId: any, instanceIdForReportHeader: any, totalMiliseconds: any): void;
declare function RefreshDataInReportMatrixView(componentId: any, instanceIdForReportHeader: any): void;
declare function matrixPartDataLoad(componentId: any, instanceIdForReportHeader: any, reportId: any, folderId: any, reportContextId: any, showData: any, showIntersectionData: any, rowChildrenCount: any, isItemConditionalRender: any, renderItemMode: any, renderColMode: any, renderRowMode: any, conditionalItemWidth: any, conditionalItemHeight: any, isColConditionalRender: any, conditionalColValue: any, rowIdCount: any, isRowConditionalRender: any, conditionalRowValue: any, isFirstLoad: any, showConfiguration: any): void;
declare function SetPositionForCofigureButton(componentId: any, showConfiguration: any, matrixContainer: any): void;
declare function RunTimeFilterSearchMatrixView(componentId: any, instanceIdForReportHeader: any, editingContextId: any): void;
declare function changeIntersectionDataDisplay(elem: any, componentId: any): void;
declare function ShowHideColumn(obj: any, componentId: any, showIntersectionData: any, collapsedColumn: any, expandedColumn: any, collapsedRow: any, expandedRow: any): void;
declare function ShowHideRow(obj: any, componentId: any, showIntersectionData: any, collapsedColumn: any, expandedColumn: any, collapsedRow: any, expandedRow: any): void;
declare function ShowCellData(elem: any): void;
declare function matrixPartResize(componentId: any): boolean;
declare function registerMatrixForEvents(componentId: any, reportId: any, instanceIdForReportHeader: any, minimumRefreshInterval: any, onAnyFolderChange: any, onContainedEntityChange: any, onCurrentFolderChanged: any, onTreeChange: any): void;
declare function refreshMatrixPartOnFolderChanged(componentId: any, eventData: any): void;
declare function refreshMatrixPart(componentId: any): void;
declare function pingServrer(): void;
declare function CloseMatrixFilter(elem: any, componentId: any, instanceIdForReportHeader: any): void;
declare function showCloseButton(elem: any, showConfiguration: any, componentId: any): void;
declare function hideCloseButton(elem: any, showConfiguration: any, componentId: any): void;
declare function showCloseIconRow(elem: any, showConfiguration: any): void;
declare function hideCloseIconRow(elem: any, showConfiguration: any): void;
declare function CalculateAndSetHeightWidthMatrixPart(instanceIdForReportHeader: any, componentId: any): void;
declare function AttachMatrixViewEvents(): void;
declare function MatrixShowConfiguraion(configButton: any): void;
declare function RunAddWizard(componentId: any, isRestore: any, restoreVal: any, restoreData: any): void;
declare function fieldPickerStep(elem: any): void;
declare function dimensionPickerStep(elem: any): void;
declare function UpdateStylingForMatrxDimentionEditor(componentId: any): void;
declare function ShowMatrixDimensionByName(elem: any): void;
declare function closeMatrixAddWizard(elem: any): void;
declare function MatrixDimentionEditingCompleted(elem: any): void;
declare function CreateMatrixDimension(elem: any, dimensionFullName: any, field: any, isRow: any): void;
declare function BooleanToLowerString(val: any): any;
declare function MatrixPartDisposed(reportContextId: any, compomentId: any, isMatrixPartControl: any): void;
declare function ClearMatrixTempUIElement(compomentId: any): void;
declare function UpdateCustomizationButtonStatus(componentId: any, hasChanges: any): void;
declare function MatrixHandlerForContextProviderNodeChangedNotification(componentId: any, matrixWizardPropertyContainerElem: any, eventData: any): void;
declare function ShowEditTemplateDialog(clickElem: any, componentId: any, isSummaryTemplate: any): void;
declare function ConfirmEditIntersectionTemplate(extraInfo: any, componentId: any): void;
declare function CancelEditIntersectionTemplate(extraInfo: any, componentId: any): void;
declare function LoadMatrixPartOnReportChange(instanceId: any, selectedReportId: any): void;
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
