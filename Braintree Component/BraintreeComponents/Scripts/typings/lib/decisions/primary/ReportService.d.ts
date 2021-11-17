/// <reference path="./datatypes._base.d.ts" />

interface ReportServiceStatic {

	GetReportImagesDataDescriptions(reportContextId: string, successCallback: (data: { GetReportImagesDataDescriptionsResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetReportImagesDataDescriptionsResult: string[] }>;

	GetReportImagesDataDescriptions(reportContextId: string): { GetReportImagesDataDescriptionsResult: string[] };

	GetReportImagesDataDescriptionsPromise(reportContextId: string): Promise<string[]>;

	UpdateColumnsOnReport(reportContextId: string, columnsToAdd: $D.Framework.Design.Report.Service.Comunication.ReportFieldInfo[], columnsToRemove: string[], successCallback: (data: { UpdateColumnsOnReportResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateColumnsOnReportResult: void }>;

	UpdateColumnsOnReport(reportContextId: string, columnsToAdd: $D.Framework.Design.Report.Service.Comunication.ReportFieldInfo[], columnsToRemove: string[]): { UpdateColumnsOnReportResult: void };

	UpdateColumnsOnReportPromise(reportContextId: string, columnsToAdd: $D.Framework.Design.Report.Service.Comunication.ReportFieldInfo[], columnsToRemove: string[]): Promise<void>;

	GetDesignerGridViewResultData(reportContextId: string, folderId: string, limitRows: number, sorting: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], grouping: string[], columnOrder: string[], successCallback: (data: { GetDesignerGridViewResultDataResult: $D.Framework.Design.Report.Service.Comunication.GridViewResultData }) => any, errorCallback?: () => any): JQueryPromise<{ GetDesignerGridViewResultDataResult: $D.Framework.Design.Report.Service.Comunication.GridViewResultData }>;

	GetDesignerGridViewResultData(reportContextId: string, folderId: string, limitRows: number, sorting: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], grouping: string[], columnOrder: string[]): { GetDesignerGridViewResultDataResult: $D.Framework.Design.Report.Service.Comunication.GridViewResultData };

	GetDesignerGridViewResultDataPromise(reportContextId: string, folderId: string, limitRows: number, sorting: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], grouping: string[], columnOrder: string[]): Promise<$D.Framework.Design.Report.Service.Comunication.GridViewResultData>;

	UpdateDesignerGridViewResultData(reportContextId: string, folderId: string, limitRows: number, sorting: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], grouping: string[], columnOrder: string[], usePercentageWidthUnit: boolean, columnWidth: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], successCallback: (data: { UpdateDesignerGridViewResultDataResult: $D.Framework.Design.Report.Service.Comunication.GridViewResultData }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateDesignerGridViewResultDataResult: $D.Framework.Design.Report.Service.Comunication.GridViewResultData }>;

	UpdateDesignerGridViewResultData(reportContextId: string, folderId: string, limitRows: number, sorting: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], grouping: string[], columnOrder: string[], usePercentageWidthUnit: boolean, columnWidth: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): { UpdateDesignerGridViewResultDataResult: $D.Framework.Design.Report.Service.Comunication.GridViewResultData };

	UpdateDesignerGridViewResultDataPromise(reportContextId: string, folderId: string, limitRows: number, sorting: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], grouping: string[], columnOrder: string[], usePercentageWidthUnit: boolean, columnWidth: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): Promise<$D.Framework.Design.Report.Service.Comunication.GridViewResultData>;

	GetReportDesignerColumnsViewData(reportContextId: string, folderId: string, limitRows: any, successCallback: (data: { GetReportDesignerColumnsViewDataResult: $D.Framework.Design.Report.Tiles.DesignTileData }) => any, errorCallback?: () => any): JQueryPromise<{ GetReportDesignerColumnsViewDataResult: $D.Framework.Design.Report.Tiles.DesignTileData }>;

	GetReportDesignerColumnsViewData(reportContextId: string, folderId: string, limitRows: any): { GetReportDesignerColumnsViewDataResult: $D.Framework.Design.Report.Tiles.DesignTileData };

	GetReportDesignerColumnsViewDataPromise(reportContextId: string, folderId: string, limitRows: any): Promise<$D.Framework.Design.Report.Tiles.DesignTileData>;

	GetReportDesignerTilesViewData(reportContextId: string, folderId: string, limitRows: any, successCallback: (data: { GetReportDesignerTilesViewDataResult: $D.Framework.Design.Report.Tiles.Tile[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetReportDesignerTilesViewDataResult: $D.Framework.Design.Report.Tiles.Tile[] }>;

	GetReportDesignerTilesViewData(reportContextId: string, folderId: string, limitRows: any): { GetReportDesignerTilesViewDataResult: $D.Framework.Design.Report.Tiles.Tile[] };

	GetReportDesignerTilesViewDataPromise(reportContextId: string, folderId: string, limitRows: any): Promise<$D.Framework.Design.Report.Tiles.Tile[]>;

	IsReportDefinitionCacheOwner(reportContextId: string, successCallback: (data: { IsReportDefinitionCacheOwnerResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ IsReportDefinitionCacheOwnerResult: boolean }>;

	IsReportDefinitionCacheOwner(reportContextId: string): { IsReportDefinitionCacheOwnerResult: boolean };

	IsReportDefinitionCacheOwnerPromise(reportContextId: string): Promise<boolean>;

	RemoveReportDefinitionCacheOwner(reportContextId: string, successCallback: (data: { RemoveReportDefinitionCacheOwnerResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveReportDefinitionCacheOwnerResult: boolean }>;

	RemoveReportDefinitionCacheOwner(reportContextId: string): { RemoveReportDefinitionCacheOwnerResult: boolean };

	RemoveReportDefinitionCacheOwnerPromise(reportContextId: string): Promise<boolean>;

	SaveReport(reportContextId: string, successCallback: (data: { SaveReportResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveReportResult: void }>;

	SaveReport(reportContextId: string): { SaveReportResult: void };

	SaveReportPromise(reportContextId: string): Promise<void>;

	SaveReportWithPreview(reportContextId: string, preview: number[], thumb: number[], successCallback: (data: { SaveReportWithPreviewResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveReportWithPreviewResult: void }>;

	SaveReportWithPreview(reportContextId: string, preview: number[], thumb: number[]): { SaveReportWithPreviewResult: void };

	SaveReportWithPreviewPromise(reportContextId: string, preview: number[], thumb: number[]): Promise<void>;

	SaveReportWithPreviewAndComment(reportContextId: string, preview: number[], thumb: number[], comment: string, successCallback: (data: { SaveReportWithPreviewAndCommentResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveReportWithPreviewAndCommentResult: void }>;

	SaveReportWithPreviewAndComment(reportContextId: string, preview: number[], thumb: number[], comment: string): { SaveReportWithPreviewAndCommentResult: void };

	SaveReportWithPreviewAndCommentPromise(reportContextId: string, preview: number[], thumb: number[], comment: string): Promise<void>;

	ValidateReport(reportContextId: string, successCallback: (data: { ValidateReportResult: $D.Framework.Design.Report.Service.Comunication.ReportValidationInfo }) => any, errorCallback?: () => any): JQueryPromise<{ ValidateReportResult: $D.Framework.Design.Report.Service.Comunication.ReportValidationInfo }>;

	ValidateReport(reportContextId: string): { ValidateReportResult: $D.Framework.Design.Report.Service.Comunication.ReportValidationInfo };

	ValidateReportPromise(reportContextId: string): Promise<$D.Framework.Design.Report.Service.Comunication.ReportValidationInfo>;

	SetReportSorting(reportContextId: string, columnName: string, order: $D.Framework.Design.Report.SortOrder, successCallback: (data: { SetReportSortingResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetReportSortingResult: void }>;

	SetReportSorting(reportContextId: string, columnName: string, order: $D.Framework.Design.Report.SortOrder): { SetReportSortingResult: void };

	SetReportSortingPromise(reportContextId: string, columnName: string, order: $D.Framework.Design.Report.SortOrder): Promise<void>;

	GetDesignPreview(folderId: string, reportContextId: string, limitRows: any, fetchData: boolean, successCallback: (data: { GetDesignPreviewResult: $D.Framework.Design.Report.Service.Comunication.DesignReportResultData }) => any, errorCallback?: () => any): JQueryPromise<{ GetDesignPreviewResult: $D.Framework.Design.Report.Service.Comunication.DesignReportResultData }>;

	GetDesignPreview(folderId: string, reportContextId: string, limitRows: any, fetchData: boolean): { GetDesignPreviewResult: $D.Framework.Design.Report.Service.Comunication.DesignReportResultData };

	GetDesignPreviewPromise(folderId: string, reportContextId: string, limitRows: any, fetchData: boolean): Promise<$D.Framework.Design.Report.Service.Comunication.DesignReportResultData>;

	GetDisplayData(reportContextId: string, successCallback: (data: { GetDisplayDataResult: $D.Framework.Design.Report.Service.Comunication.ReportDisplayData }) => any, errorCallback?: () => any): JQueryPromise<{ GetDisplayDataResult: $D.Framework.Design.Report.Service.Comunication.ReportDisplayData }>;

	GetDisplayData(reportContextId: string): { GetDisplayDataResult: $D.Framework.Design.Report.Service.Comunication.ReportDisplayData };

	GetDisplayDataPromise(reportContextId: string): Promise<$D.Framework.Design.Report.Service.Comunication.ReportDisplayData>;

	RefreshDesignPreview(folderId: string, reportContextId: string, limitRows: any, successCallback: (data: { RefreshDesignPreviewResult: $D.Framework.Design.Report.Service.Comunication.DesignReportResultData }) => any, errorCallback?: () => any): JQueryPromise<{ RefreshDesignPreviewResult: $D.Framework.Design.Report.Service.Comunication.DesignReportResultData }>;

	RefreshDesignPreview(folderId: string, reportContextId: string, limitRows: any): { RefreshDesignPreviewResult: $D.Framework.Design.Report.Service.Comunication.DesignReportResultData };

	RefreshDesignPreviewPromise(folderId: string, reportContextId: string, limitRows: any): Promise<$D.Framework.Design.Report.Service.Comunication.DesignReportResultData>;

	GetReportContext(folderId: string, elementRegistrationtID: string, limitRows: any, successCallback: (data: { GetReportContextResult: $D.Framework.Design.Report.Service.Comunication.DesignReportContext }) => any, errorCallback?: () => any): JQueryPromise<{ GetReportContextResult: $D.Framework.Design.Report.Service.Comunication.DesignReportContext }>;

	GetReportContext(folderId: string, elementRegistrationtID: string, limitRows: any): { GetReportContextResult: $D.Framework.Design.Report.Service.Comunication.DesignReportContext };

	GetReportContextPromise(folderId: string, elementRegistrationtID: string, limitRows: any): Promise<$D.Framework.Design.Report.Service.Comunication.DesignReportContext>;

	BuildReportViewContext(reportContextId: string, folderId: string, limitRows: any, sort: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], groups: string[], columnOrder: string[], successCallback: (data: { BuildReportViewContextResult: $D.Framework.Design.Report.Service.Comunication.ReportViewContext }) => any, errorCallback?: () => any): JQueryPromise<{ BuildReportViewContextResult: $D.Framework.Design.Report.Service.Comunication.ReportViewContext }>;

	BuildReportViewContext(reportContextId: string, folderId: string, limitRows: any, sort: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], groups: string[], columnOrder: string[]): { BuildReportViewContextResult: $D.Framework.Design.Report.Service.Comunication.ReportViewContext };

	BuildReportViewContextPromise(reportContextId: string, folderId: string, limitRows: any, sort: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], groups: string[], columnOrder: string[]): Promise<$D.Framework.Design.Report.Service.Comunication.ReportViewContext>;

	AddFilterToReport(reportContextId: string, filterID: string, name: string, successCallback: (data: { AddFilterToReportResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddFilterToReportResult: string }>;

	AddFilterToReport(reportContextId: string, filterID: string, name: string): { AddFilterToReportResult: string };

	AddFilterToReportPromise(reportContextId: string, filterID: string, name: string): Promise<string>;

	AddColumnAndDataSourceToReport(reportContextId: string, columnName: string, dataSourceRegistrationId: string, dataSourceName: string, successCallback: (data: { AddColumnAndDataSourceToReportResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddColumnAndDataSourceToReportResult: string }>;

	AddColumnAndDataSourceToReport(reportContextId: string, columnName: string, dataSourceRegistrationId: string, dataSourceName: string): { AddColumnAndDataSourceToReportResult: string };

	AddColumnAndDataSourceToReportPromise(reportContextId: string, columnName: string, dataSourceRegistrationId: string, dataSourceName: string): Promise<string>;

	RemoveFilterFromReport(reportContextId: string, filterContextID: string, successCallback: (data: { RemoveFilterFromReportResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveFilterFromReportResult: void }>;

	RemoveFilterFromReport(reportContextId: string, filterContextID: string): { RemoveFilterFromReportResult: void };

	RemoveFilterFromReportPromise(reportContextId: string, filterContextID: string): Promise<void>;

	UpdateFilterName(reportContextId: string, filterContextID: string, newTitle: string, successCallback: (data: { UpdateFilterNameResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateFilterNameResult: void }>;

	UpdateFilterName(reportContextId: string, filterContextID: string, newTitle: string): { UpdateFilterNameResult: void };

	UpdateFilterNamePromise(reportContextId: string, filterContextID: string, newTitle: string): Promise<void>;

	GetAvailableElementsForReport(reportContextId: string, folderID: string, successCallback: (data: { GetAvailableElementsForReportResult: $D.Framework.Design.Report.Service.Comunication.ReportElementInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAvailableElementsForReportResult: $D.Framework.Design.Report.Service.Comunication.ReportElementInfo[] }>;

	GetAvailableElementsForReport(reportContextId: string, folderID: string): { GetAvailableElementsForReportResult: $D.Framework.Design.Report.Service.Comunication.ReportElementInfo[] };

	GetAvailableElementsForReportPromise(reportContextId: string, folderID: string): Promise<$D.Framework.Design.Report.Service.Comunication.ReportElementInfo[]>;

	GetCalculatedColumnTypes(reportContextId: string, successCallback: (data: { GetCalculatedColumnTypesResult: $D.Framework.Design.Report.Service.Comunication.ReportElementInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetCalculatedColumnTypesResult: $D.Framework.Design.Report.Service.Comunication.ReportElementInfo[] }>;

	GetCalculatedColumnTypes(reportContextId: string): { GetCalculatedColumnTypesResult: $D.Framework.Design.Report.Service.Comunication.ReportElementInfo[] };

	GetCalculatedColumnTypesPromise(reportContextId: string): Promise<$D.Framework.Design.Report.Service.Comunication.ReportElementInfo[]>;

	SearchCalculatedColumns(repoortContextId: string, searchCriteria: string, successCallback: (data: { SearchCalculatedColumnsResult: $D.Framework.Design.Report.Service.Comunication.ReportElementInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchCalculatedColumnsResult: $D.Framework.Design.Report.Service.Comunication.ReportElementInfo[] }>;

	SearchCalculatedColumns(repoortContextId: string, searchCriteria: string): { SearchCalculatedColumnsResult: $D.Framework.Design.Report.Service.Comunication.ReportElementInfo[] };

	SearchCalculatedColumnsPromise(repoortContextId: string, searchCriteria: string): Promise<$D.Framework.Design.Report.Service.Comunication.ReportElementInfo[]>;

	GetDataSourceFields(reportContextId: string, elementRegistrationId: string, successCallback: (data: { GetDataSourceFieldsResult: $D.Framework.Design.Report.Service.Comunication.ReportFieldInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetDataSourceFieldsResult: $D.Framework.Design.Report.Service.Comunication.ReportFieldInfo[] }>;

	GetDataSourceFields(reportContextId: string, elementRegistrationId: string): { GetDataSourceFieldsResult: $D.Framework.Design.Report.Service.Comunication.ReportFieldInfo[] };

	GetDataSourceFieldsPromise(reportContextId: string, elementRegistrationId: string): Promise<$D.Framework.Design.Report.Service.Comunication.ReportFieldInfo[]>;

	GetDataSources(reportContextId: string, successCallback: (data: { GetDataSourcesResult: $D.Framework.Design.Report.Service.Comunication.ReportElementInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetDataSourcesResult: $D.Framework.Design.Report.Service.Comunication.ReportElementInfo[] }>;

	GetDataSources(reportContextId: string): { GetDataSourcesResult: $D.Framework.Design.Report.Service.Comunication.ReportElementInfo[] };

	GetDataSourcesPromise(reportContextId: string): Promise<$D.Framework.Design.Report.Service.Comunication.ReportElementInfo[]>;

	FindSubFoldersWithConfigurations(reportContextId: string, folderID: string, successCallback: (data: { FindSubFoldersWithConfigurationsResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }) => any, errorCallback?: () => any): JQueryPromise<{ FindSubFoldersWithConfigurationsResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }>;

	FindSubFoldersWithConfigurations(reportContextId: string, folderID: string): { FindSubFoldersWithConfigurationsResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] };

	FindSubFoldersWithConfigurationsPromise(reportContextId: string, folderID: string): Promise<$D.Framework.ServiceLayer.Services.Folder.Folder[]>;

	GetColumns(reportContextId: string, successCallback: (data: { GetColumnsResult: $D.Framework.Design.Report.Service.Comunication.ReportColumnInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetColumnsResult: $D.Framework.Design.Report.Service.Comunication.ReportColumnInfo[] }>;

	GetColumns(reportContextId: string): { GetColumnsResult: $D.Framework.Design.Report.Service.Comunication.ReportColumnInfo[] };

	GetColumnsPromise(reportContextId: string): Promise<$D.Framework.Design.Report.Service.Comunication.ReportColumnInfo[]>;

	GetMissingFields(reportContextId: string, successCallback: (data: { GetMissingFieldsResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMissingFieldsResult: string[] }>;

	GetMissingFields(reportContextId: string): { GetMissingFieldsResult: string[] };

	GetMissingFieldsPromise(reportContextId: string): Promise<string[]>;

	GetColumnByContextId(reportContextId: string, columnContextId: string, successCallback: (data: { GetColumnByContextIdResult: $D.Framework.Design.Report.Service.Comunication.ReportColumnInfo }) => any, errorCallback?: () => any): JQueryPromise<{ GetColumnByContextIdResult: $D.Framework.Design.Report.Service.Comunication.ReportColumnInfo }>;

	GetColumnByContextId(reportContextId: string, columnContextId: string): { GetColumnByContextIdResult: $D.Framework.Design.Report.Service.Comunication.ReportColumnInfo };

	GetColumnByContextIdPromise(reportContextId: string, columnContextId: string): Promise<$D.Framework.Design.Report.Service.Comunication.ReportColumnInfo>;

	GetColumnsForReport(reportContextId: string, successCallback: (data: { GetColumnsForReportResult: $D.Framework.Design.Report.Service.Comunication.ReportFieldInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetColumnsForReportResult: $D.Framework.Design.Report.Service.Comunication.ReportFieldInfo[] }>;

	GetColumnsForReport(reportContextId: string): { GetColumnsForReportResult: $D.Framework.Design.Report.Service.Comunication.ReportFieldInfo[] };

	GetColumnsForReportPromise(reportContextId: string): Promise<$D.Framework.Design.Report.Service.Comunication.ReportFieldInfo[]>;

	SearchReportColumn(reportContextId: string, searchCriteria: string, successCallback: (data: { SearchReportColumnResult: $D.Framework.Design.Report.Service.Comunication.ReportFieldInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchReportColumnResult: $D.Framework.Design.Report.Service.Comunication.ReportFieldInfo[] }>;

	SearchReportColumn(reportContextId: string, searchCriteria: string): { SearchReportColumnResult: $D.Framework.Design.Report.Service.Comunication.ReportFieldInfo[] };

	SearchReportColumnPromise(reportContextId: string, searchCriteria: string): Promise<$D.Framework.Design.Report.Service.Comunication.ReportFieldInfo[]>;

	AddColumnToReport(reportContextId: string, columnName: string, dataSourceName: string, successCallback: (data: { AddColumnToReportResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddColumnToReportResult: string }>;

	AddColumnToReport(reportContextId: string, columnName: string, dataSourceName: string): { AddColumnToReportResult: string };

	AddColumnToReportPromise(reportContextId: string, columnName: string, dataSourceName: string): Promise<string>;

	AddColumnsToReport(reportContextId: string, fieldInfos: $D.Framework.Design.Report.Service.Comunication.ReportFieldInfo[], successCallback: (data: { AddColumnsToReportResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddColumnsToReportResult: void }>;

	AddColumnsToReport(reportContextId: string, fieldInfos: $D.Framework.Design.Report.Service.Comunication.ReportFieldInfo[]): { AddColumnsToReportResult: void };

	AddColumnsToReportPromise(reportContextId: string, fieldInfos: $D.Framework.Design.Report.Service.Comunication.ReportFieldInfo[]): Promise<void>;

	UpdateColumnTitle(reportContextId: string, columnContectId: string, newTitle: string, successCallback: (data: { UpdateColumnTitleResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateColumnTitleResult: void }>;

	UpdateColumnTitle(reportContextId: string, columnContectId: string, newTitle: string): { UpdateColumnTitleResult: void };

	UpdateColumnTitlePromise(reportContextId: string, columnContectId: string, newTitle: string): Promise<void>;

	UpdateColumnWidth(reportContextId: string, columnContextId: string, width: number, successCallback: (data: { UpdateColumnWidthResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateColumnWidthResult: void }>;

	UpdateColumnWidth(reportContextId: string, columnContextId: string, width: number): { UpdateColumnWidthResult: void };

	UpdateColumnWidthPromise(reportContextId: string, columnContextId: string, width: number): Promise<void>;

	UpdateColumnsVisisbleOrder(reportContextId: string, columnsContextIDs: string[], successCallback: (data: { UpdateColumnsVisisbleOrderResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateColumnsVisisbleOrderResult: void }>;

	UpdateColumnsVisisbleOrder(reportContextId: string, columnsContextIDs: string[]): { UpdateColumnsVisisbleOrderResult: void };

	UpdateColumnsVisisbleOrderPromise(reportContextId: string, columnsContextIDs: string[]): Promise<void>;

	RemoveColumn(reportContextId: string, columnName: string, dataSourceName: string, successCallback: (data: { RemoveColumnResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveColumnResult: void }>;

	RemoveColumn(reportContextId: string, columnName: string, dataSourceName: string): { RemoveColumnResult: void };

	RemoveColumnPromise(reportContextId: string, columnName: string, dataSourceName: string): Promise<void>;

	RemoveColumnByColumnContextId(reportContextId: string, columnContextId: string, successCallback: (data: { RemoveColumnByColumnContextIdResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveColumnByColumnContextIdResult: void }>;

	RemoveColumnByColumnContextId(reportContextId: string, columnContextId: string): { RemoveColumnByColumnContextIdResult: void };

	RemoveColumnByColumnContextIdPromise(reportContextId: string, columnContextId: string): Promise<void>;

	RemoveColumnsByColumnContextId(reportContextId: string, columnsContextId: string[], successCallback: (data: { RemoveColumnsByColumnContextIdResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveColumnsByColumnContextIdResult: void }>;

	RemoveColumnsByColumnContextId(reportContextId: string, columnsContextId: string[]): { RemoveColumnsByColumnContextIdResult: void };

	RemoveColumnsByColumnContextIdPromise(reportContextId: string, columnsContextId: string[]): Promise<void>;

	UpdateGroupedColumns(reportContextId: string, groupedColumns: string[], successCallback: (data: { UpdateGroupedColumnsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateGroupedColumnsResult: void }>;

	UpdateGroupedColumns(reportContextId: string, groupedColumns: string[]): { UpdateGroupedColumnsResult: void };

	UpdateGroupedColumnsPromise(reportContextId: string, groupedColumns: string[]): Promise<void>;

	SetColumnSorting(reportContextId: string, columnContextId: string, sortOrder: $D.Framework.Design.Report.SortOrder, successCallback: (data: { SetColumnSortingResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetColumnSortingResult: void }>;

	SetColumnSorting(reportContextId: string, columnContextId: string, sortOrder: $D.Framework.Design.Report.SortOrder): { SetColumnSortingResult: void };

	SetColumnSortingPromise(reportContextId: string, columnContextId: string, sortOrder: $D.Framework.Design.Report.SortOrder): Promise<void>;

	SetPrimarySorting(reportContextId: string, columnContextId: string, successCallback: (data: { SetPrimarySortingResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetPrimarySortingResult: void }>;

	SetPrimarySorting(reportContextId: string, columnContextId: string): { SetPrimarySortingResult: void };

	SetPrimarySortingPromise(reportContextId: string, columnContextId: string): Promise<void>;

	GetGroupedColumns(reportContextId: string, successCallback: (data: { GetGroupedColumnsResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetGroupedColumnsResult: string[] }>;

	GetGroupedColumns(reportContextId: string): { GetGroupedColumnsResult: string[] };

	GetGroupedColumnsPromise(reportContextId: string): Promise<string[]>;

	GetCalculatedFieldsForReport(reportContextId: string, successCallback: (data: { GetCalculatedFieldsForReportResult: $D.Framework.Design.Report.InlineFields.InlineField[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetCalculatedFieldsForReportResult: $D.Framework.Design.Report.InlineFields.InlineField[] }>;

	GetCalculatedFieldsForReport(reportContextId: string): { GetCalculatedFieldsForReportResult: $D.Framework.Design.Report.InlineFields.InlineField[] };

	GetCalculatedFieldsForReportPromise(reportContextId: string): Promise<$D.Framework.Design.Report.InlineFields.InlineField[]>;

	AddCalculatedColumnByTypeToReport(reportContextId: string, calcColumnTypeName: string, successCallback: (data: { AddCalculatedColumnByTypeToReportResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddCalculatedColumnByTypeToReportResult: string }>;

	AddCalculatedColumnByTypeToReport(reportContextId: string, calcColumnTypeName: string): { AddCalculatedColumnByTypeToReportResult: string };

	AddCalculatedColumnByTypeToReportPromise(reportContextId: string, calcColumnTypeName: string): Promise<string>;

	UpdateInlineMergeFieldData(reportContextId: string, columnContextId: string, mergeText: string, successCallback: (data: { UpdateInlineMergeFieldDataResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateInlineMergeFieldDataResult: void }>;

	UpdateInlineMergeFieldData(reportContextId: string, columnContextId: string, mergeText: string): { UpdateInlineMergeFieldDataResult: void };

	UpdateInlineMergeFieldDataPromise(reportContextId: string, columnContextId: string, mergeText: string): Promise<void>;

	GetInlineMergeFieldData(columnContextId: string, successCallback: (data: { GetInlineMergeFieldDataResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetInlineMergeFieldDataResult: string }>;

	GetInlineMergeFieldData(columnContextId: string): { GetInlineMergeFieldDataResult: string };

	GetInlineMergeFieldDataPromise(columnContextId: string): Promise<string>;

	AddChart(reportContextId: string, title: string, chartType: $D.Framework.Design.Report.ChartType, fieldsDefinition: $D.Framework.Design.Report.SubcalcFields.SubCalcFieldDefinition[], legendName: string, successCallback: (data: { AddChartResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddChartResult: void }>;

	AddChart(reportContextId: string, title: string, chartType: $D.Framework.Design.Report.ChartType, fieldsDefinition: $D.Framework.Design.Report.SubcalcFields.SubCalcFieldDefinition[], legendName: string): { AddChartResult: void };

	AddChartPromise(reportContextId: string, title: string, chartType: $D.Framework.Design.Report.ChartType, fieldsDefinition: $D.Framework.Design.Report.SubcalcFields.SubCalcFieldDefinition[], legendName: string): Promise<void>;

	RemoveChart(reportContextId: string, chartContextId: string, successCallback: (data: { RemoveChartResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveChartResult: void }>;

	RemoveChart(reportContextId: string, chartContextId: string): { RemoveChartResult: void };

	RemoveChartPromise(reportContextId: string, chartContextId: string): Promise<void>;

	CanUseCharts(reportContextId: string, successCallback: (data: { CanUseChartsResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ CanUseChartsResult: boolean }>;

	CanUseCharts(reportContextId: string): { CanUseChartsResult: boolean };

	CanUseChartsPromise(reportContextId: string): Promise<boolean>;

	GetChartInfo(reportContextId: string, successCallback: (data: { GetChartInfoResult: $D.Framework.Design.Report.ChartInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetChartInfoResult: $D.Framework.Design.Report.ChartInfo[] }>;

	GetChartInfo(reportContextId: string): { GetChartInfoResult: $D.Framework.Design.Report.ChartInfo[] };

	GetChartInfoPromise(reportContextId: string): Promise<$D.Framework.Design.Report.ChartInfo[]>;

	AddAreasChart(reportContextId: string, successCallback: (data: { AddAreasChartResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddAreasChartResult: string }>;

	AddAreasChart(reportContextId: string): { AddAreasChartResult: string };

	AddAreasChartPromise(reportContextId: string): Promise<string>;

	AddBubblesChart(reportContextId: string, successCallback: (data: { AddBubblesChartResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddBubblesChartResult: string }>;

	AddBubblesChart(reportContextId: string): { AddBubblesChartResult: string };

	AddBubblesChartPromise(reportContextId: string): Promise<string>;

	AddBarsChart(reportContextId: string, successCallback: (data: { AddBarsChartResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddBarsChartResult: string }>;

	AddBarsChart(reportContextId: string): { AddBarsChartResult: string };

	AddBarsChartPromise(reportContextId: string): Promise<string>;

	AddSimpleBarsChart(reportContextId: string, successCallback: (data: { AddSimpleBarsChartResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddSimpleBarsChartResult: string }>;

	AddSimpleBarsChart(reportContextId: string): { AddSimpleBarsChartResult: string };

	AddSimpleBarsChartPromise(reportContextId: string): Promise<string>;

	AddMixedBarsChart(reportContextId: string, successCallback: (data: { AddMixedBarsChartResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddMixedBarsChartResult: string }>;

	AddMixedBarsChart(reportContextId: string): { AddMixedBarsChartResult: string };

	AddMixedBarsChartPromise(reportContextId: string): Promise<string>;

	AddStackedBarsChart(reportContextId: string, successCallback: (data: { AddStackedBarsChartResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddStackedBarsChartResult: string }>;

	AddStackedBarsChart(reportContextId: string): { AddStackedBarsChartResult: string };

	AddStackedBarsChartPromise(reportContextId: string): Promise<string>;

	AddWinLossBarsChart(reportContextId: string, successCallback: (data: { AddWinLossBarsChartResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddWinLossBarsChartResult: string }>;

	AddWinLossBarsChart(reportContextId: string): { AddWinLossBarsChartResult: string };

	AddWinLossBarsChartPromise(reportContextId: string): Promise<string>;

	AddBulletChart(reportContextId: string, successCallback: (data: { AddBulletChartResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddBulletChartResult: string }>;

	AddBulletChart(reportContextId: string): { AddBulletChartResult: string };

	AddBulletChartPromise(reportContextId: string): Promise<string>;

	AddColumnsChart(reportContextId: string, successCallback: (data: { AddColumnsChartResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddColumnsChartResult: string }>;

	AddColumnsChart(reportContextId: string): { AddColumnsChartResult: string };

	AddColumnsChartPromise(reportContextId: string): Promise<string>;

	AddDotsChart(reportContextId: string, successCallback: (data: { AddDotsChartResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddDotsChartResult: string }>;

	AddDotsChart(reportContextId: string): { AddDotsChartResult: string };

	AddDotsChartPromise(reportContextId: string): Promise<string>;

	AddLinesChart(reportContextId: string, successCallback: (data: { AddLinesChartResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddLinesChartResult: string }>;

	AddLinesChart(reportContextId: string): { AddLinesChartResult: string };

	AddLinesChartPromise(reportContextId: string): Promise<string>;

	AddPiesChart(reportContextId: string, successCallback: (data: { AddPiesChartResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddPiesChartResult: string }>;

	AddPiesChart(reportContextId: string): { AddPiesChartResult: string };

	AddPiesChartPromise(reportContextId: string): Promise<string>;

	AddGaugesChart(reportContextId: string, successCallback: (data: { AddGaugesChartResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddGaugesChartResult: string }>;

	AddGaugesChart(reportContextId: string): { AddGaugesChartResult: string };

	AddGaugesChartPromise(reportContextId: string): Promise<string>;

	AddCounterChart(reportContextId: string, successCallback: (data: { AddCounterChartResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddCounterChartResult: string }>;

	AddCounterChart(reportContextId: string): { AddCounterChartResult: string };

	AddCounterChartPromise(reportContextId: string): Promise<string>;

	AddCountersChart(reportContextId: string, successCallback: (data: { AddCountersChartResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddCountersChartResult: string }>;

	AddCountersChart(reportContextId: string): { AddCountersChartResult: string };

	AddCountersChartPromise(reportContextId: string): Promise<string>;

	AddRingChart(reportContextId: string, successCallback: (data: { AddRingChartResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddRingChartResult: string }>;

	AddRingChart(reportContextId: string): { AddRingChartResult: string };

	AddRingChartPromise(reportContextId: string): Promise<string>;

	UpdateClientData(reportContextId: string, data: $D.Framework.Design.Report.Service.Comunication.ReportClientData, successCallback: (data: { UpdateClientDataResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateClientDataResult: void }>;

	UpdateClientData(reportContextId: string, data: $D.Framework.Design.Report.Service.Comunication.ReportClientData): { UpdateClientDataResult: void };

	UpdateClientDataPromise(reportContextId: string, data: $D.Framework.Design.Report.Service.Comunication.ReportClientData): Promise<void>;

	UpdateReportViews(reportContextId: string, data: $D.Framework.Design.Report.Service.Comunication.ReportClientData, successCallback: (data: { UpdateReportViewsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateReportViewsResult: void }>;

	UpdateReportViews(reportContextId: string, data: $D.Framework.Design.Report.Service.Comunication.ReportClientData): { UpdateReportViewsResult: void };

	UpdateReportViewsPromise(reportContextId: string, data: $D.Framework.Design.Report.Service.Comunication.ReportClientData): Promise<void>;

	GetReportSQLText(reportContextId: string, successCallback: (data: { GetReportSQLTextResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetReportSQLTextResult: string }>;

	GetReportSQLText(reportContextId: string): { GetReportSQLTextResult: string };

	GetReportSQLTextPromise(reportContextId: string): Promise<string>;

	MakeFilterRuntimeEditable(reportContextId: string, filterContextID: string, isRuntimeEditable: boolean, successCallback: (data: { MakeFilterRuntimeEditableResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ MakeFilterRuntimeEditableResult: void }>;

	MakeFilterRuntimeEditable(reportContextId: string, filterContextID: string, isRuntimeEditable: boolean): { MakeFilterRuntimeEditableResult: void };

	MakeFilterRuntimeEditablePromise(reportContextId: string, filterContextID: string, isRuntimeEditable: boolean): Promise<void>;

	GetFilterRuntimeEditable(reportContextId: string, filterContextID: string, successCallback: (data: { GetFilterRuntimeEditableResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ GetFilterRuntimeEditableResult: boolean }>;

	GetFilterRuntimeEditable(reportContextId: string, filterContextID: string): { GetFilterRuntimeEditableResult: boolean };

	GetFilterRuntimeEditablePromise(reportContextId: string, filterContextID: string): Promise<boolean>;

	GetEntityDescription(entityType: string, entityID: string, successCallback: (data: { GetEntityDescriptionResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetEntityDescriptionResult: string }>;

	GetEntityDescription(entityType: string, entityID: string): { GetEntityDescriptionResult: string };

	GetEntityDescriptionPromise(entityType: string, entityID: string): Promise<string>;

	GetDesignerTreeInfo(reportContextId: string, folderID: string, nodesType: $D.Framework.Design.Report.Service.Comunication.ReportElementType, successCallback: (data: { GetDesignerTreeInfoResult: $D.Framework.Design.Report.Service.Comunication.ReportDesignerFolderInfo }) => any, errorCallback?: () => any): JQueryPromise<{ GetDesignerTreeInfoResult: $D.Framework.Design.Report.Service.Comunication.ReportDesignerFolderInfo }>;

	GetDesignerTreeInfo(reportContextId: string, folderID: string, nodesType: $D.Framework.Design.Report.Service.Comunication.ReportElementType): { GetDesignerTreeInfoResult: $D.Framework.Design.Report.Service.Comunication.ReportDesignerFolderInfo };

	GetDesignerTreeInfoPromise(reportContextId: string, folderID: string, nodesType: $D.Framework.Design.Report.Service.Comunication.ReportElementType): Promise<$D.Framework.Design.Report.Service.Comunication.ReportDesignerFolderInfo>;

	SearchDesignerTreeInfo(reportContextId: string, searchCriteria: string, nodesType: $D.Framework.Design.Report.Service.Comunication.ReportElementType, successCallback: (data: { SearchDesignerTreeInfoResult: $D.Framework.Design.Report.Service.Comunication.ReportDesignerFolderInfo }) => any, errorCallback?: () => any): JQueryPromise<{ SearchDesignerTreeInfoResult: $D.Framework.Design.Report.Service.Comunication.ReportDesignerFolderInfo }>;

	SearchDesignerTreeInfo(reportContextId: string, searchCriteria: string, nodesType: $D.Framework.Design.Report.Service.Comunication.ReportElementType): { SearchDesignerTreeInfoResult: $D.Framework.Design.Report.Service.Comunication.ReportDesignerFolderInfo };

	SearchDesignerTreeInfoPromise(reportContextId: string, searchCriteria: string, nodesType: $D.Framework.Design.Report.Service.Comunication.ReportElementType): Promise<$D.Framework.Design.Report.Service.Comunication.ReportDesignerFolderInfo>;

	GetMatrixDefinition(reportContextId: string, successCallback: (data: { GetMatrixDefinitionResult: $D.Framework.Design.Report.Matrix.MatrixDefinition }) => any, errorCallback?: () => any): JQueryPromise<{ GetMatrixDefinitionResult: $D.Framework.Design.Report.Matrix.MatrixDefinition }>;

	GetMatrixDefinition(reportContextId: string): { GetMatrixDefinitionResult: $D.Framework.Design.Report.Matrix.MatrixDefinition };

	GetMatrixDefinitionPromise(reportContextId: string): Promise<$D.Framework.Design.Report.Matrix.MatrixDefinition>;

	UpdateMatrixDefinition(reportContextId: string, matrixDefinition: $D.Framework.Design.Report.Matrix.MatrixDefinition, successCallback: (data: { UpdateMatrixDefinitionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateMatrixDefinitionResult: void }>;

	UpdateMatrixDefinition(reportContextId: string, matrixDefinition: $D.Framework.Design.Report.Matrix.MatrixDefinition): { UpdateMatrixDefinitionResult: void };

	UpdateMatrixDefinitionPromise(reportContextId: string, matrixDefinition: $D.Framework.Design.Report.Matrix.MatrixDefinition): Promise<void>;

	ComputeMatrix(reportContextId: string, limitRows: any, successCallback: (data: { ComputeMatrixResult: $D.Framework.Design.Report.Matrix.Output }) => any, errorCallback?: () => any): JQueryPromise<{ ComputeMatrixResult: $D.Framework.Design.Report.Matrix.Output }>;

	ComputeMatrix(reportContextId: string, limitRows: any): { ComputeMatrixResult: $D.Framework.Design.Report.Matrix.Output };

	ComputeMatrixPromise(reportContextId: string, limitRows: any): Promise<$D.Framework.Design.Report.Matrix.Output>;

	GetMatrixElementEditContext(reportContextId: string, dimensionContextId: string, successCallback: (data: { GetMatrixElementEditContextResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetMatrixElementEditContextResult: string }>;

	GetMatrixElementEditContext(reportContextId: string, dimensionContextId: string): { GetMatrixElementEditContextResult: string };

	GetMatrixElementEditContextPromise(reportContextId: string, dimensionContextId: string): Promise<string>;

	GetPercentDimensionEditContext(reportContextId: string, dimensionContextId: string, successCallback: (data: { GetPercentDimensionEditContextResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetPercentDimensionEditContextResult: string }>;

	GetPercentDimensionEditContext(reportContextId: string, dimensionContextId: string): { GetPercentDimensionEditContextResult: string };

	GetPercentDimensionEditContextPromise(reportContextId: string, dimensionContextId: string): Promise<string>;

	GetTotalDimensionEditContext(reportContextId: string, dimensionContextId: string, successCallback: (data: { GetTotalDimensionEditContextResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetTotalDimensionEditContextResult: string }>;

	GetTotalDimensionEditContext(reportContextId: string, dimensionContextId: string): { GetTotalDimensionEditContextResult: string };

	GetTotalDimensionEditContextPromise(reportContextId: string, dimensionContextId: string): Promise<string>;

	GetMatrixIntersectionData(reportContextId: string, intersection: $D.Framework.Design.Report.Matrix.IntersectionData, limitRows: any, successCallback: (data: { GetMatrixIntersectionDataResult: $D.Framework.Design.Report.Service.Comunication.ViewReportResultData }) => any, errorCallback?: () => any): JQueryPromise<{ GetMatrixIntersectionDataResult: $D.Framework.Design.Report.Service.Comunication.ViewReportResultData }>;

	GetMatrixIntersectionData(reportContextId: string, intersection: $D.Framework.Design.Report.Matrix.IntersectionData, limitRows: any): { GetMatrixIntersectionDataResult: $D.Framework.Design.Report.Service.Comunication.ViewReportResultData };

	GetMatrixIntersectionDataPromise(reportContextId: string, intersection: $D.Framework.Design.Report.Matrix.IntersectionData, limitRows: any): Promise<$D.Framework.Design.Report.Service.Comunication.ViewReportResultData>;

	GetAggregationIntersectionData(reportContextId: string, intersection: $D.Framework.Design.Report.Matrix.IntersectionData, limitRows: any, successCallback: (data: { GetAggregationIntersectionDataResult: $D.Framework.Design.Report.Service.Comunication.ViewReportResultData }) => any, errorCallback?: () => any): JQueryPromise<{ GetAggregationIntersectionDataResult: $D.Framework.Design.Report.Service.Comunication.ViewReportResultData }>;

	GetAggregationIntersectionData(reportContextId: string, intersection: $D.Framework.Design.Report.Matrix.IntersectionData, limitRows: any): { GetAggregationIntersectionDataResult: $D.Framework.Design.Report.Service.Comunication.ViewReportResultData };

	GetAggregationIntersectionDataPromise(reportContextId: string, intersection: $D.Framework.Design.Report.Matrix.IntersectionData, limitRows: any): Promise<$D.Framework.Design.Report.Service.Comunication.ViewReportResultData>;

	AddMatrixChildElement(reportContextId: string, parentId: string, successCallback: (data: { AddMatrixChildElementResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddMatrixChildElementResult: string }>;

	AddMatrixChildElement(reportContextId: string, parentId: string): { AddMatrixChildElementResult: string };

	AddMatrixChildElementPromise(reportContextId: string, parentId: string): Promise<string>;

	AddMatrixRowDimension(reportContextId: string, type: string, successCallback: (data: { AddMatrixRowDimensionResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddMatrixRowDimensionResult: string }>;

	AddMatrixRowDimension(reportContextId: string, type: string): { AddMatrixRowDimensionResult: string };

	AddMatrixRowDimensionPromise(reportContextId: string, type: string): Promise<string>;

	AddMatrixColumnDimension(reportContextId: string, type: string, successCallback: (data: { AddMatrixColumnDimensionResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddMatrixColumnDimensionResult: string }>;

	AddMatrixColumnDimension(reportContextId: string, type: string): { AddMatrixColumnDimensionResult: string };

	AddMatrixColumnDimensionPromise(reportContextId: string, type: string): Promise<string>;

	AddAllDimension(reportContextId: string, forRow: boolean, successCallback: (data: { AddAllDimensionResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddAllDimensionResult: string }>;

	AddAllDimension(reportContextId: string, forRow: boolean): { AddAllDimensionResult: string };

	AddAllDimensionPromise(reportContextId: string, forRow: boolean): Promise<string>;

	AddLabelDimension(reportContextId: string, forRow: boolean, successCallback: (data: { AddLabelDimensionResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddLabelDimensionResult: string }>;

	AddLabelDimension(reportContextId: string, forRow: boolean): { AddLabelDimensionResult: string };

	AddLabelDimensionPromise(reportContextId: string, forRow: boolean): Promise<string>;

	AddFieldDimension(reportContextId: string, forRow: boolean, successCallback: (data: { AddFieldDimensionResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddFieldDimensionResult: string }>;

	AddFieldDimension(reportContextId: string, forRow: boolean): { AddFieldDimensionResult: string };

	AddFieldDimensionPromise(reportContextId: string, forRow: boolean): Promise<string>;

	AddDateDimension(reportContextId: string, forRow: boolean, successCallback: (data: { AddDateDimensionResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddDateDimensionResult: string }>;

	AddDateDimension(reportContextId: string, forRow: boolean): { AddDateDimensionResult: string };

	AddDateDimensionPromise(reportContextId: string, forRow: boolean): Promise<string>;

	AddAgingDimension(reportContextId: string, forRow: boolean, successCallback: (data: { AddAgingDimensionResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddAgingDimensionResult: string }>;

	AddAgingDimension(reportContextId: string, forRow: boolean): { AddAgingDimensionResult: string };

	AddAgingDimensionPromise(reportContextId: string, forRow: boolean): Promise<string>;

	AddNumericRangeDimension(reportContextId: string, forRow: boolean, successCallback: (data: { AddNumericRangeDimensionResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddNumericRangeDimensionResult: string }>;

	AddNumericRangeDimension(reportContextId: string, forRow: boolean): { AddNumericRangeDimensionResult: string };

	AddNumericRangeDimensionPromise(reportContextId: string, forRow: boolean): Promise<string>;

	AddSummarizedValueDimension(reportContextId: string, forRow: boolean, successCallback: (data: { AddSummarizedValueDimensionResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddSummarizedValueDimensionResult: string }>;

	AddSummarizedValueDimension(reportContextId: string, forRow: boolean): { AddSummarizedValueDimensionResult: string };

	AddSummarizedValueDimensionPromise(reportContextId: string, forRow: boolean): Promise<string>;

	AddCalculatedDimension(reportContextId: string, forRow: boolean, successCallback: (data: { AddCalculatedDimensionResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddCalculatedDimensionResult: string }>;

	AddCalculatedDimension(reportContextId: string, forRow: boolean): { AddCalculatedDimensionResult: string };

	AddCalculatedDimensionPromise(reportContextId: string, forRow: boolean): Promise<string>;

	RemoveMatrixElement(reportContextId: string, elementId: string, successCallback: (data: { RemoveMatrixElementResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveMatrixElementResult: boolean }>;

	RemoveMatrixElement(reportContextId: string, elementId: string): { RemoveMatrixElementResult: boolean };

	RemoveMatrixElementPromise(reportContextId: string, elementId: string): Promise<boolean>;

	SetDimensionPercentage(reportContextId: string, dimensionId: string, enable: boolean, successCallback: (data: { SetDimensionPercentageResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetDimensionPercentageResult: void }>;

	SetDimensionPercentage(reportContextId: string, dimensionId: string, enable: boolean): { SetDimensionPercentageResult: void };

	SetDimensionPercentagePromise(reportContextId: string, dimensionId: string, enable: boolean): Promise<void>;

	SetDimensionTotal(reportContextId: string, dimensionId: string, enable: boolean, successCallback: (data: { SetDimensionTotalResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetDimensionTotalResult: void }>;

	SetDimensionTotal(reportContextId: string, dimensionId: string, enable: boolean): { SetDimensionTotalResult: void };

	SetDimensionTotalPromise(reportContextId: string, dimensionId: string, enable: boolean): Promise<void>;

	SetMatrixTotal(reportContextId: string, forRow: boolean, enable: boolean, successCallback: (data: { SetMatrixTotalResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetMatrixTotalResult: void }>;

	SetMatrixTotal(reportContextId: string, forRow: boolean, enable: boolean): { SetMatrixTotalResult: void };

	SetMatrixTotalPromise(reportContextId: string, forRow: boolean, enable: boolean): Promise<void>;

	MoveMatrixElement(reportContextId: string, elementId: string, up: boolean, successCallback: (data: { MoveMatrixElementResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ MoveMatrixElementResult: boolean }>;

	MoveMatrixElement(reportContextId: string, elementId: string, up: boolean): { MoveMatrixElementResult: boolean };

	MoveMatrixElementPromise(reportContextId: string, elementId: string, up: boolean): Promise<boolean>;

	GetEditContext(id: string, successCallback: (data: { GetEditContextResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetEditContextResult: string }>;

	GetEditContext(id: string): { GetEditContextResult: string };

	GetEditContextPromise(id: string): Promise<string>;

	GetEditContextForFilter(reportContextId: string, filterId: string, successCallback: (data: { GetEditContextForFilterResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetEditContextForFilterResult: string }>;

	GetEditContextForFilter(reportContextId: string, filterId: string): { GetEditContextForFilterResult: string };

	GetEditContextForFilterPromise(reportContextId: string, filterId: string): Promise<string>;

	GetEditContextForField(reportContextId: string, fieldId: string, successCallback: (data: { GetEditContextForFieldResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetEditContextForFieldResult: string }>;

	GetEditContextForField(reportContextId: string, fieldId: string): { GetEditContextForFieldResult: string };

	GetEditContextForFieldPromise(reportContextId: string, fieldId: string): Promise<string>;

	GetEditContextForChart(reportContextId: string, chartId: string, successCallback: (data: { GetEditContextForChartResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetEditContextForChartResult: string }>;

	GetEditContextForChart(reportContextId: string, chartId: string): { GetEditContextForChartResult: string };

	GetEditContextForChartPromise(reportContextId: string, chartId: string): Promise<string>;

	GetCellTemplate(reportContextId: string, successCallback: (data: { GetCellTemplateResult: $D.Framework.Design.Report.Matrix.IntersectionTemplate.TableTemplate }) => any, errorCallback?: () => any): JQueryPromise<{ GetCellTemplateResult: $D.Framework.Design.Report.Matrix.IntersectionTemplate.TableTemplate }>;

	GetCellTemplate(reportContextId: string): { GetCellTemplateResult: $D.Framework.Design.Report.Matrix.IntersectionTemplate.TableTemplate };

	GetCellTemplatePromise(reportContextId: string): Promise<$D.Framework.Design.Report.Matrix.IntersectionTemplate.TableTemplate>;

	AddTextCellTemplate(reportContextId: string, row: number, column: number, successCallback: (data: { AddTextCellTemplateResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddTextCellTemplateResult: string }>;

	AddTextCellTemplate(reportContextId: string, row: number, column: number): { AddTextCellTemplateResult: string };

	AddTextCellTemplatePromise(reportContextId: string, row: number, column: number): Promise<string>;

	AddFieldCellTemplate(reportContextId: string, row: number, column: number, successCallback: (data: { AddFieldCellTemplateResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddFieldCellTemplateResult: string }>;

	AddFieldCellTemplate(reportContextId: string, row: number, column: number): { AddFieldCellTemplateResult: string };

	AddFieldCellTemplatePromise(reportContextId: string, row: number, column: number): Promise<string>;

	AddImageCellTemplate(reportContextId: string, row: number, column: number, successCallback: (data: { AddImageCellTemplateResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddImageCellTemplateResult: string }>;

	AddImageCellTemplate(reportContextId: string, row: number, column: number): { AddImageCellTemplateResult: string };

	AddImageCellTemplatePromise(reportContextId: string, row: number, column: number): Promise<string>;

	AddSpacerCellTemplate(reportContextId: string, row: number, column: number, successCallback: (data: { AddSpacerCellTemplateResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddSpacerCellTemplateResult: string }>;

	AddSpacerCellTemplate(reportContextId: string, row: number, column: number): { AddSpacerCellTemplateResult: string };

	AddSpacerCellTemplatePromise(reportContextId: string, row: number, column: number): Promise<string>;

	AddIntersectionTemplate(reportContextId: string, row: number, column: number, addTemplateType: $D.Framework.Design.Report.AddTemplateType, isSummaryTemplate: boolean, successCallback: (data: { AddIntersectionTemplateResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddIntersectionTemplateResult: string }>;

	AddIntersectionTemplate(reportContextId: string, row: number, column: number, addTemplateType: $D.Framework.Design.Report.AddTemplateType, isSummaryTemplate: boolean): { AddIntersectionTemplateResult: string };

	AddIntersectionTemplatePromise(reportContextId: string, row: number, column: number, addTemplateType: $D.Framework.Design.Report.AddTemplateType, isSummaryTemplate: boolean): Promise<string>;

	EditTableTemplateSlot(reportContextId: string, index: number, isRow: boolean, successCallback: (data: { EditTableTemplateSlotResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ EditTableTemplateSlotResult: string }>;

	EditTableTemplateSlot(reportContextId: string, index: number, isRow: boolean): { EditTableTemplateSlotResult: string };

	EditTableTemplateSlotPromise(reportContextId: string, index: number, isRow: boolean): Promise<string>;

	EditTableTemplateCell(reportContextId: string, row: number, column: number, successCallback: (data: { EditTableTemplateCellResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ EditTableTemplateCellResult: string }>;

	EditTableTemplateCell(reportContextId: string, row: number, column: number): { EditTableTemplateCellResult: string };

	EditTableTemplateCellPromise(reportContextId: string, row: number, column: number): Promise<string>;

	EditTableTemplateCellData(reportContextId: string, row: number, column: number, index: number, successCallback: (data: { EditTableTemplateCellDataResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ EditTableTemplateCellDataResult: string }>;

	EditTableTemplateCellData(reportContextId: string, row: number, column: number, index: number): { EditTableTemplateCellDataResult: string };

	EditTableTemplateCellDataPromise(reportContextId: string, row: number, column: number, index: number): Promise<string>;

	EditIntersectionTableTemplateSlot(reportContextId: string, index: number, isRow: boolean, isSummaryTemplate: boolean, successCallback: (data: { EditIntersectionTableTemplateSlotResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ EditIntersectionTableTemplateSlotResult: string }>;

	EditIntersectionTableTemplateSlot(reportContextId: string, index: number, isRow: boolean, isSummaryTemplate: boolean): { EditIntersectionTableTemplateSlotResult: string };

	EditIntersectionTableTemplateSlotPromise(reportContextId: string, index: number, isRow: boolean, isSummaryTemplate: boolean): Promise<string>;

	EditIntersectionTableTemplateCell(reportContextId: string, row: number, column: number, isSummaryTemplate: boolean, successCallback: (data: { EditIntersectionTableTemplateCellResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ EditIntersectionTableTemplateCellResult: string }>;

	EditIntersectionTableTemplateCell(reportContextId: string, row: number, column: number, isSummaryTemplate: boolean): { EditIntersectionTableTemplateCellResult: string };

	EditIntersectionTableTemplateCellPromise(reportContextId: string, row: number, column: number, isSummaryTemplate: boolean): Promise<string>;

	EditIntersectionTableTemplateCellData(reportContextId: string, row: number, column: number, index: number, isSummaryTemplate: boolean, successCallback: (data: { EditIntersectionTableTemplateCellDataResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ EditIntersectionTableTemplateCellDataResult: string }>;

	EditIntersectionTableTemplateCellData(reportContextId: string, row: number, column: number, index: number, isSummaryTemplate: boolean): { EditIntersectionTableTemplateCellDataResult: string };

	EditIntersectionTableTemplateCellDataPromise(reportContextId: string, row: number, column: number, index: number, isSummaryTemplate: boolean): Promise<string>;

	InsertSlot(reportContextId: string, atIndex: number, forRow: boolean, successCallback: (data: { InsertSlotResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ InsertSlotResult: void }>;

	InsertSlot(reportContextId: string, atIndex: number, forRow: boolean): { InsertSlotResult: void };

	InsertSlotPromise(reportContextId: string, atIndex: number, forRow: boolean): Promise<void>;

	InsertIntersectionSlot(reportContextId: string, atIndex: number, forRow: boolean, isSummaryTemplate: boolean, successCallback: (data: { InsertIntersectionSlotResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ InsertIntersectionSlotResult: void }>;

	InsertIntersectionSlot(reportContextId: string, atIndex: number, forRow: boolean, isSummaryTemplate: boolean): { InsertIntersectionSlotResult: void };

	InsertIntersectionSlotPromise(reportContextId: string, atIndex: number, forRow: boolean, isSummaryTemplate: boolean): Promise<void>;

	MoveCellTemplate(reportContextId: string, fromRow: number, fromColumn: number, toRow: number, toColumn: number, successCallback: (data: { MoveCellTemplateResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ MoveCellTemplateResult: void }>;

	MoveCellTemplate(reportContextId: string, fromRow: number, fromColumn: number, toRow: number, toColumn: number): { MoveCellTemplateResult: void };

	MoveCellTemplatePromise(reportContextId: string, fromRow: number, fromColumn: number, toRow: number, toColumn: number): Promise<void>;

	MoveIntersectionTemplate(reportContextId: string, fromRow: number, fromColumn: number, toRow: number, toColumn: number, isSummaryTemplate: boolean, successCallback: (data: { MoveIntersectionTemplateResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ MoveIntersectionTemplateResult: void }>;

	MoveIntersectionTemplate(reportContextId: string, fromRow: number, fromColumn: number, toRow: number, toColumn: number, isSummaryTemplate: boolean): { MoveIntersectionTemplateResult: void };

	MoveIntersectionTemplatePromise(reportContextId: string, fromRow: number, fromColumn: number, toRow: number, toColumn: number, isSummaryTemplate: boolean): Promise<void>;

	ChangeCellDataTemplateIndex(reportContextId: string, row: number, column: number, fromIndex: number, toIndex: number, successCallback: (data: { ChangeCellDataTemplateIndexResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ChangeCellDataTemplateIndexResult: void }>;

	ChangeCellDataTemplateIndex(reportContextId: string, row: number, column: number, fromIndex: number, toIndex: number): { ChangeCellDataTemplateIndexResult: void };

	ChangeCellDataTemplateIndexPromise(reportContextId: string, row: number, column: number, fromIndex: number, toIndex: number): Promise<void>;

	ChangeIntersectionCellDataTemplateIndex(reportContextId: string, row: number, column: number, fromIndex: number, toIndex: number, isSummaryTemplate: boolean, successCallback: (data: { ChangeIntersectionCellDataTemplateIndexResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ChangeIntersectionCellDataTemplateIndexResult: void }>;

	ChangeIntersectionCellDataTemplateIndex(reportContextId: string, row: number, column: number, fromIndex: number, toIndex: number, isSummaryTemplate: boolean): { ChangeIntersectionCellDataTemplateIndexResult: void };

	ChangeIntersectionCellDataTemplateIndexPromise(reportContextId: string, row: number, column: number, fromIndex: number, toIndex: number, isSummaryTemplate: boolean): Promise<void>;

	MoveCelDataTemplate(reportContextId: string, fromIndex: number, fromRow: number, fromColumn: number, toRow: number, toColumn: number, successCallback: (data: { MoveCelDataTemplateResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ MoveCelDataTemplateResult: void }>;

	MoveCelDataTemplate(reportContextId: string, fromIndex: number, fromRow: number, fromColumn: number, toRow: number, toColumn: number): { MoveCelDataTemplateResult: void };

	MoveCelDataTemplatePromise(reportContextId: string, fromIndex: number, fromRow: number, fromColumn: number, toRow: number, toColumn: number): Promise<void>;

	MoveIntersectionCelDataTemplate(reportContextId: string, fromIndex: number, fromRow: number, fromColumn: number, toRow: number, toColumn: number, isSummaryTemplate: boolean, successCallback: (data: { MoveIntersectionCelDataTemplateResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ MoveIntersectionCelDataTemplateResult: void }>;

	MoveIntersectionCelDataTemplate(reportContextId: string, fromIndex: number, fromRow: number, fromColumn: number, toRow: number, toColumn: number, isSummaryTemplate: boolean): { MoveIntersectionCelDataTemplateResult: void };

	MoveIntersectionCelDataTemplatePromise(reportContextId: string, fromIndex: number, fromRow: number, fromColumn: number, toRow: number, toColumn: number, isSummaryTemplate: boolean): Promise<void>;

	DeleteCellDataTemplate(reportContextId: string, row: number, column: number, index: number, successCallback: (data: { DeleteCellDataTemplateResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteCellDataTemplateResult: void }>;

	DeleteCellDataTemplate(reportContextId: string, row: number, column: number, index: number): { DeleteCellDataTemplateResult: void };

	DeleteCellDataTemplatePromise(reportContextId: string, row: number, column: number, index: number): Promise<void>;

	DeleteIntersectionCellDataTemplate(reportContextId: string, row: number, column: number, index: number, isSummaryTemplate: boolean, successCallback: (data: { DeleteIntersectionCellDataTemplateResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteIntersectionCellDataTemplateResult: void }>;

	DeleteIntersectionCellDataTemplate(reportContextId: string, row: number, column: number, index: number, isSummaryTemplate: boolean): { DeleteIntersectionCellDataTemplateResult: void };

	DeleteIntersectionCellDataTemplatePromise(reportContextId: string, row: number, column: number, index: number, isSummaryTemplate: boolean): Promise<void>;

	SetReportCellSummaryTemplate(reportContextId: string, template: $D.Framework.Design.Report.Matrix.IntersectionTemplate.TableTemplate, successCallback: (data: { SetReportCellSummaryTemplateResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetReportCellSummaryTemplateResult: void }>;

	SetReportCellSummaryTemplate(reportContextId: string, template: $D.Framework.Design.Report.Matrix.IntersectionTemplate.TableTemplate): { SetReportCellSummaryTemplateResult: void };

	SetReportCellSummaryTemplatePromise(reportContextId: string, template: $D.Framework.Design.Report.Matrix.IntersectionTemplate.TableTemplate): Promise<void>;

	ComputeCellTemplateOutput(reportContextId: string, limitRows: any, successCallback: (data: { ComputeCellTemplateOutputResult: $D.Framework.Design.Report.Service.Comunication.ReportCells }) => any, errorCallback?: () => any): JQueryPromise<{ ComputeCellTemplateOutputResult: $D.Framework.Design.Report.Service.Comunication.ReportCells }>;

	ComputeCellTemplateOutput(reportContextId: string, limitRows: any): { ComputeCellTemplateOutputResult: $D.Framework.Design.Report.Service.Comunication.ReportCells };

	ComputeCellTemplateOutputPromise(reportContextId: string, limitRows: any): Promise<$D.Framework.Design.Report.Service.Comunication.ReportCells>;

	GetTableTemplate(reportContextId: string, isSummaryTemplate: boolean, successCallback: (data: { GetTableTemplateResult: $D.Framework.Design.Report.Matrix.IntersectionTemplate.TableTemplate }) => any, errorCallback?: () => any): JQueryPromise<{ GetTableTemplateResult: $D.Framework.Design.Report.Matrix.IntersectionTemplate.TableTemplate }>;

	GetTableTemplate(reportContextId: string, isSummaryTemplate: boolean): { GetTableTemplateResult: $D.Framework.Design.Report.Matrix.IntersectionTemplate.TableTemplate };

	GetTableTemplatePromise(reportContextId: string, isSummaryTemplate: boolean): Promise<$D.Framework.Design.Report.Matrix.IntersectionTemplate.TableTemplate>;

	ReleaseDesignReportContext(reportContextId: string, successCallback: (data: { ReleaseDesignReportContextResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ReleaseDesignReportContextResult: void }>;

	ReleaseDesignReportContext(reportContextId: string): { ReleaseDesignReportContextResult: void };

	ReleaseDesignReportContextPromise(reportContextId: string): Promise<void>;

	SaveReportProperties(reportContextId: string, reportPropertyData: $D.Framework.Design.Report.Service.Comunication.ReportPropertyData, successCallback: (data: { SaveReportPropertiesResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ SaveReportPropertiesResult: string }>;

	SaveReportProperties(reportContextId: string, reportPropertyData: $D.Framework.Design.Report.Service.Comunication.ReportPropertyData): { SaveReportPropertiesResult: string };

	SaveReportPropertiesPromise(reportContextId: string, reportPropertyData: $D.Framework.Design.Report.Service.Comunication.ReportPropertyData): Promise<string>;

	ReplaceDateColumn(reportContextId: string, columnToReplaceId: string, calcColumnTypeName: string, successCallback: (data: { ReplaceDateColumnResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ReplaceDateColumnResult: void }>;

	ReplaceDateColumn(reportContextId: string, columnToReplaceId: string, calcColumnTypeName: string): { ReplaceDateColumnResult: void };

	ReplaceDateColumnPromise(reportContextId: string, columnToReplaceId: string, calcColumnTypeName: string): Promise<void>;

	GetDataDescriptions(reportContextId: string, path: string, successCallback: (data: { GetDataDescriptionsResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetDataDescriptionsResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }>;

	GetDataDescriptions(reportContextId: string, path: string): { GetDataDescriptionsResult: $D.Framework.Design.Flow.Mapping.DataDescription[] };

	GetDataDescriptionsPromise(reportContextId: string, path: string): Promise<$D.Framework.Design.Flow.Mapping.DataDescription[]>;

	GetReportExampleQueryParameters(reportId: string, successCallback: (data: { GetReportExampleQueryParametersResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetReportExampleQueryParametersResult: string[] }>;

	GetReportExampleQueryParameters(reportId: string): { GetReportExampleQueryParametersResult: string[] };

	GetReportExampleQueryParametersPromise(reportId: string): Promise<string[]>;

	GetCalculatedDataDescriptions(reportContextId: string, successCallback: (data: { GetCalculatedDataDescriptionsResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetCalculatedDataDescriptionsResult: string[] }>;

	GetCalculatedDataDescriptions(reportContextId: string): { GetCalculatedDataDescriptionsResult: string[] };

	GetCalculatedDataDescriptionsPromise(reportContextId: string): Promise<string[]>;

	GetSessionUserContext(userId: string, password: string, successCallback: (data: { GetSessionUserContextResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext }) => any, errorCallback?: () => any): JQueryPromise<{ GetSessionUserContextResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext }>;

	GetSessionUserContext(userId: string, password: string): { GetSessionUserContextResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext };

	GetSessionUserContextPromise(userId: string, password: string): Promise<$D.Framework.ServiceLayer.Utilities.SessionUserContext>;

	GetPasswordUserContext(userId: string, password: string, successCallback: (data: { GetPasswordUserContextResult: $D.Framework.ServiceLayer.Utilities.PasswordCredentialsUserContext }) => any, errorCallback?: () => any): JQueryPromise<{ GetPasswordUserContextResult: $D.Framework.ServiceLayer.Utilities.PasswordCredentialsUserContext }>;

	GetPasswordUserContext(userId: string, password: string): { GetPasswordUserContextResult: $D.Framework.ServiceLayer.Utilities.PasswordCredentialsUserContext };

	GetPasswordUserContextPromise(userId: string, password: string): Promise<$D.Framework.ServiceLayer.Utilities.PasswordCredentialsUserContext>;

	GetGuestUserContext(successCallback: (data: { GetGuestUserContextResult: $D.Framework.ServiceLayer.Utilities.GuestUserContext }) => any, errorCallback?: () => any): JQueryPromise<{ GetGuestUserContextResult: $D.Framework.ServiceLayer.Utilities.GuestUserContext }>;

	GetGuestUserContext(): { GetGuestUserContextResult: $D.Framework.ServiceLayer.Utilities.GuestUserContext };

	GetGuestUserContextPromise(): Promise<$D.Framework.ServiceLayer.Utilities.GuestUserContext>;
}

interface ServicesStatic {
	ReportService(): ReportServiceStatic;
}
