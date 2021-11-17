/// <reference path="./datatypes._base.d.ts" />

interface ReportViewServiceStatic {

	GetMyFavouriteReports(successCallback: (data: { GetMyFavouriteReportsResult: $D.Framework.Design.Report.Service.Comunication.ReportInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMyFavouriteReportsResult: $D.Framework.Design.Report.Service.Comunication.ReportInfo[] }>;

	GetMyFavouriteReports(): { GetMyFavouriteReportsResult: $D.Framework.Design.Report.Service.Comunication.ReportInfo[] };

	GetMyFavouriteReportsPromise(): Promise<$D.Framework.Design.Report.Service.Comunication.ReportInfo[]>;

	IsReportFavorite(reportRegistrationId: string, successCallback: (data: { IsReportFavoriteResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ IsReportFavoriteResult: boolean }>;

	IsReportFavorite(reportRegistrationId: string): { IsReportFavoriteResult: boolean };

	IsReportFavoritePromise(reportRegistrationId: string): Promise<boolean>;

	AddReportToFavorites(reportRegistrationID: string, successCallback: (data: { AddReportToFavoritesResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddReportToFavoritesResult: void }>;

	AddReportToFavorites(reportRegistrationID: string): { AddReportToFavoritesResult: void };

	AddReportToFavoritesPromise(reportRegistrationID: string): Promise<void>;

	RemoveReportFromFavorites(reportRegistrationID: string, successCallback: (data: { RemoveReportFromFavoritesResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveReportFromFavoritesResult: void }>;

	RemoveReportFromFavorites(reportRegistrationID: string): { RemoveReportFromFavoritesResult: void };

	RemoveReportFromFavoritesPromise(reportRegistrationID: string): Promise<void>;

	GetReportViewInfo(elementRegistrationId: string, successCallback: (data: { GetReportViewInfoResult: $D.Framework.Design.Report.Service.Comunication.ReportViewInfo }) => any, errorCallback?: () => any): JQueryPromise<{ GetReportViewInfoResult: $D.Framework.Design.Report.Service.Comunication.ReportViewInfo }>;

	GetReportViewInfo(elementRegistrationId: string): { GetReportViewInfoResult: $D.Framework.Design.Report.Service.Comunication.ReportViewInfo };

	GetReportViewInfoPromise(elementRegistrationId: string): Promise<$D.Framework.Design.Report.Service.Comunication.ReportViewInfo>;

	BuildReportViewInfo(elementRegistrationId: string, folderId: string, oldContextId: string, snapshotName: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, pageIndex: number, type: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType, successCallback: (data: { BuildReportViewInfoResult: $D.Framework.Design.Report.Service.Comunication.ReportViewContext }) => any, errorCallback?: () => any): JQueryPromise<{ BuildReportViewInfoResult: $D.Framework.Design.Report.Service.Comunication.ReportViewContext }>;

	BuildReportViewInfo(elementRegistrationId: string, folderId: string, oldContextId: string, snapshotName: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, pageIndex: number, type: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType): { BuildReportViewInfoResult: $D.Framework.Design.Report.Service.Comunication.ReportViewContext };

	BuildReportViewInfoPromise(elementRegistrationId: string, folderId: string, oldContextId: string, snapshotName: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, pageIndex: number, type: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType): Promise<$D.Framework.Design.Report.Service.Comunication.ReportViewContext>;

	BuildFormSessionBasedReportViewInfo(elementRegistrationId: string, folderId: string, oldContextId: string, snapshotName: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, pageIndex: number, type: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType, formSessionId: string, successCallback: (data: { BuildFormSessionBasedReportViewInfoResult: $D.Framework.Design.Report.Service.Comunication.ReportViewContext }) => any, errorCallback?: () => any): JQueryPromise<{ BuildFormSessionBasedReportViewInfoResult: $D.Framework.Design.Report.Service.Comunication.ReportViewContext }>;

	BuildFormSessionBasedReportViewInfo(elementRegistrationId: string, folderId: string, oldContextId: string, snapshotName: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, pageIndex: number, type: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType, formSessionId: string): { BuildFormSessionBasedReportViewInfoResult: $D.Framework.Design.Report.Service.Comunication.ReportViewContext };

	BuildFormSessionBasedReportViewInfoPromise(elementRegistrationId: string, folderId: string, oldContextId: string, snapshotName: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, pageIndex: number, type: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType, formSessionId: string): Promise<$D.Framework.Design.Report.Service.Comunication.ReportViewContext>;

	BuildJsonReportViewInfo(elementRegistrationId: string, folderId: string, oldContextId: string, snapshotName: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, pageIndex: number, textOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType, successCallback: (data: { BuildJsonReportViewInfoResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ BuildJsonReportViewInfoResult: string }>;

	BuildJsonReportViewInfo(elementRegistrationId: string, folderId: string, oldContextId: string, snapshotName: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, pageIndex: number, textOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType): { BuildJsonReportViewInfoResult: string };

	BuildJsonReportViewInfoPromise(elementRegistrationId: string, folderId: string, oldContextId: string, snapshotName: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, pageIndex: number, textOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType): Promise<string>;

	BuildMatrixViewInfo(elementRegistrationId: string, folderId: string, oldContextId: string, snapshotName: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, successCallback: (data: { BuildMatrixViewInfoResult: $D.Framework.Design.Report.Service.Comunication.ReportViewContext }) => any, errorCallback?: () => any): JQueryPromise<{ BuildMatrixViewInfoResult: $D.Framework.Design.Report.Service.Comunication.ReportViewContext }>;

	BuildMatrixViewInfo(elementRegistrationId: string, folderId: string, oldContextId: string, snapshotName: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration): { BuildMatrixViewInfoResult: $D.Framework.Design.Report.Service.Comunication.ReportViewContext };

	BuildMatrixViewInfoPromise(elementRegistrationId: string, folderId: string, oldContextId: string, snapshotName: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration): Promise<$D.Framework.Design.Report.Service.Comunication.ReportViewContext>;

	BuildRuntimeEditContext(reportViewContextId: string, successCallback: (data: { BuildRuntimeEditContextResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ BuildRuntimeEditContextResult: string }>;

	BuildRuntimeEditContext(reportViewContextId: string): { BuildRuntimeEditContextResult: string };

	BuildRuntimeEditContextPromise(reportViewContextId: string): Promise<string>;

	BuildReportColumnRuntimeEditContext(reportViewContextId: string, columnId: string, successCallback: (data: { BuildReportColumnRuntimeEditContextResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ BuildReportColumnRuntimeEditContextResult: string }>;

	BuildReportColumnRuntimeEditContext(reportViewContextId: string, columnId: string): { BuildReportColumnRuntimeEditContextResult: string };

	BuildReportColumnRuntimeEditContextPromise(reportViewContextId: string, columnId: string): Promise<string>;

	UpdateReportViewInfo(reportViewContextId: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, pageIndex: number, textOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType, successCallback: (data: { UpdateReportViewInfoResult: $D.Framework.Design.Report.Service.Comunication.ReportViewContext }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateReportViewInfoResult: $D.Framework.Design.Report.Service.Comunication.ReportViewContext }>;

	UpdateReportViewInfo(reportViewContextId: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, pageIndex: number, textOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType): { UpdateReportViewInfoResult: $D.Framework.Design.Report.Service.Comunication.ReportViewContext };

	UpdateReportViewInfoPromise(reportViewContextId: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, pageIndex: number, textOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType): Promise<$D.Framework.Design.Report.Service.Comunication.ReportViewContext>;

	UpdateReportViewInfoAndGetTiles(reportViewContextId: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, successCallback: (data: { UpdateReportViewInfoAndGetTilesResult: $D.Framework.Design.Report.Tiles.Tile[] }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateReportViewInfoAndGetTilesResult: $D.Framework.Design.Report.Tiles.Tile[] }>;

	UpdateReportViewInfoAndGetTiles(reportViewContextId: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration): { UpdateReportViewInfoAndGetTilesResult: $D.Framework.Design.Report.Tiles.Tile[] };

	UpdateReportViewInfoAndGetTilesPromise(reportViewContextId: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration): Promise<$D.Framework.Design.Report.Tiles.Tile[]>;

	UpdateTextViewReultData(reportViewContextId: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, pageIndex: number, successCallback: (data: { UpdateTextViewReultDataResult: $D.Framework.Design.Report.Service.Comunication.TextViewResultData }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateTextViewReultDataResult: $D.Framework.Design.Report.Service.Comunication.TextViewResultData }>;

	UpdateTextViewReultData(reportViewContextId: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, pageIndex: number): { UpdateTextViewReultDataResult: $D.Framework.Design.Report.Service.Comunication.TextViewResultData };

	UpdateTextViewReultDataPromise(reportViewContextId: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, pageIndex: number): Promise<$D.Framework.Design.Report.Service.Comunication.TextViewResultData>;

	UpdateJsonReportViewInfo(reportViewContextId: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, pageIndex: number, textOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType, successCallback: (data: { UpdateJsonReportViewInfoResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateJsonReportViewInfoResult: string }>;

	UpdateJsonReportViewInfo(reportViewContextId: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, pageIndex: number, textOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType): { UpdateJsonReportViewInfoResult: string };

	UpdateJsonReportViewInfoPromise(reportViewContextId: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, pageIndex: number, textOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType): Promise<string>;

	RefreshReportData(reportViewContextId: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, pageIndex: number, textOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType, successCallback: (data: { RefreshReportDataResult: $D.Framework.Design.Report.Service.Comunication.ReportViewContext }) => any, errorCallback?: () => any): JQueryPromise<{ RefreshReportDataResult: $D.Framework.Design.Report.Service.Comunication.ReportViewContext }>;

	RefreshReportData(reportViewContextId: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, pageIndex: number, textOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType): { RefreshReportDataResult: $D.Framework.Design.Report.Service.Comunication.ReportViewContext };

	RefreshReportDataPromise(reportViewContextId: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, pageIndex: number, textOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType): Promise<$D.Framework.Design.Report.Service.Comunication.ReportViewContext>;

	RefreshJsonReportData(reportViewContextId: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, pageIndex: number, textOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType, successCallback: (data: { RefreshJsonReportDataResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ RefreshJsonReportDataResult: string }>;

	RefreshJsonReportData(reportViewContextId: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, pageIndex: number, textOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType): { RefreshJsonReportDataResult: string };

	RefreshJsonReportDataPromise(reportViewContextId: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, pageIndex: number, textOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType): Promise<string>;

	LoadReportData(reportViewContextId: string, pageIndex: number, textOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType, successCallback: (data: { LoadReportDataResult: $D.Framework.Design.Report.Service.Comunication.ReportViewResult }) => any, errorCallback?: () => any): JQueryPromise<{ LoadReportDataResult: $D.Framework.Design.Report.Service.Comunication.ReportViewResult }>;

	LoadReportData(reportViewContextId: string, pageIndex: number, textOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType): { LoadReportDataResult: $D.Framework.Design.Report.Service.Comunication.ReportViewResult };

	LoadReportDataPromise(reportViewContextId: string, pageIndex: number, textOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType): Promise<$D.Framework.Design.Report.Service.Comunication.ReportViewResult>;

	LoadJsonReportData(reportViewContextId: string, pageIndex: number, textOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType, successCallback: (data: { LoadJsonReportDataResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ LoadJsonReportDataResult: string }>;

	LoadJsonReportData(reportViewContextId: string, pageIndex: number, textOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType): { LoadJsonReportDataResult: string };

	LoadJsonReportDataPromise(reportViewContextId: string, pageIndex: number, textOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType): Promise<string>;

	LoadReportIntersectionData(reportViewContextId: string, pageIndex: number, textOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType, intersection: $D.Framework.Design.Report.Matrix.IntersectionData, useMatrix: boolean, successCallback: (data: { LoadReportIntersectionDataResult: $D.Framework.Design.Report.Service.Comunication.ReportViewContext }) => any, errorCallback?: () => any): JQueryPromise<{ LoadReportIntersectionDataResult: $D.Framework.Design.Report.Service.Comunication.ReportViewContext }>;

	LoadReportIntersectionData(reportViewContextId: string, pageIndex: number, textOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType, intersection: $D.Framework.Design.Report.Matrix.IntersectionData, useMatrix: boolean): { LoadReportIntersectionDataResult: $D.Framework.Design.Report.Service.Comunication.ReportViewContext };

	LoadReportIntersectionDataPromise(reportViewContextId: string, pageIndex: number, textOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType, intersection: $D.Framework.Design.Report.Matrix.IntersectionData, useMatrix: boolean): Promise<$D.Framework.Design.Report.Service.Comunication.ReportViewContext>;

	LoadJsonReportIntersectionData(reportViewContextId: string, pageIndex: number, textOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType, intersection: $D.Framework.Design.Report.Matrix.IntersectionData, useMatrix: boolean, successCallback: (data: { LoadJsonReportIntersectionDataResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ LoadJsonReportIntersectionDataResult: string }>;

	LoadJsonReportIntersectionData(reportViewContextId: string, pageIndex: number, textOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType, intersection: $D.Framework.Design.Report.Matrix.IntersectionData, useMatrix: boolean): { LoadJsonReportIntersectionDataResult: string };

	LoadJsonReportIntersectionDataPromise(reportViewContextId: string, pageIndex: number, textOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType, intersection: $D.Framework.Design.Report.Matrix.IntersectionData, useMatrix: boolean): Promise<string>;

	LoadReportTileData(reportViewContextId: string, pageIndex: number, textOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType, tileId: string, tileName: string, successCallback: (data: { LoadReportTileDataResult: $D.Framework.Design.Report.Service.Comunication.ReportViewContext }) => any, errorCallback?: () => any): JQueryPromise<{ LoadReportTileDataResult: $D.Framework.Design.Report.Service.Comunication.ReportViewContext }>;

	LoadReportTileData(reportViewContextId: string, pageIndex: number, textOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType, tileId: string, tileName: string): { LoadReportTileDataResult: $D.Framework.Design.Report.Service.Comunication.ReportViewContext };

	LoadReportTileDataPromise(reportViewContextId: string, pageIndex: number, textOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType, tileId: string, tileName: string): Promise<$D.Framework.Design.Report.Service.Comunication.ReportViewContext>;

	LoadJsonReportTileData(reportViewContextId: string, pageIndex: number, textOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType, tileId: string, tileName: string, successCallback: (data: { LoadJsonReportTileDataResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ LoadJsonReportTileDataResult: string }>;

	LoadJsonReportTileData(reportViewContextId: string, pageIndex: number, textOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType, tileId: string, tileName: string): { LoadJsonReportTileDataResult: string };

	LoadJsonReportTileDataPromise(reportViewContextId: string, pageIndex: number, textOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType, tileId: string, tileName: string): Promise<string>;

	LoadReportRawData(elementRegistrationId: string, folderId: string, successCallback: (data: { LoadReportRawDataResult: $D.Framework.Design.Report.Service.Comunication.ReportViewResult }) => any, errorCallback?: () => any): JQueryPromise<{ LoadReportRawDataResult: $D.Framework.Design.Report.Service.Comunication.ReportViewResult }>;

	LoadReportRawData(elementRegistrationId: string, folderId: string): { LoadReportRawDataResult: $D.Framework.Design.Report.Service.Comunication.ReportViewResult };

	LoadReportRawDataPromise(elementRegistrationId: string, folderId: string): Promise<$D.Framework.Design.Report.Service.Comunication.ReportViewResult>;

	LoadReportRawDataWithQueryString(elementRegistrationId: string, folderId: string, queryString: string, successCallback: (data: { LoadReportRawDataWithQueryStringResult: $D.Framework.Design.Report.Service.Comunication.ReportViewResult }) => any, errorCallback?: () => any): JQueryPromise<{ LoadReportRawDataWithQueryStringResult: $D.Framework.Design.Report.Service.Comunication.ReportViewResult }>;

	LoadReportRawDataWithQueryString(elementRegistrationId: string, folderId: string, queryString: string): { LoadReportRawDataWithQueryStringResult: $D.Framework.Design.Report.Service.Comunication.ReportViewResult };

	LoadReportRawDataWithQueryStringPromise(elementRegistrationId: string, folderId: string, queryString: string): Promise<$D.Framework.Design.Report.Service.Comunication.ReportViewResult>;

	LoadJsonReportRawData(elementRegistrationId: string, folderId: string, successCallback: (data: { LoadJsonReportRawDataResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ LoadJsonReportRawDataResult: string }>;

	LoadJsonReportRawData(elementRegistrationId: string, folderId: string): { LoadJsonReportRawDataResult: string };

	LoadJsonReportRawDataPromise(elementRegistrationId: string, folderId: string): Promise<string>;

	HideMatrixDimensionByName(reportViewContextId: string, dimensionId: string, dimensionName: string, isRow: boolean, successCallback: (data: { HideMatrixDimensionByNameResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ HideMatrixDimensionByNameResult: void }>;

	HideMatrixDimensionByName(reportViewContextId: string, dimensionId: string, dimensionName: string, isRow: boolean): { HideMatrixDimensionByNameResult: void };

	HideMatrixDimensionByNamePromise(reportViewContextId: string, dimensionId: string, dimensionName: string, isRow: boolean): Promise<void>;

	ShowMatrixDimensionByName(reportViewContextId: string, dimensionId: string, dimensionName: string, isRow: boolean, successCallback: (data: { ShowMatrixDimensionByNameResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ShowMatrixDimensionByNameResult: void }>;

	ShowMatrixDimensionByName(reportViewContextId: string, dimensionId: string, dimensionName: string, isRow: boolean): { ShowMatrixDimensionByNameResult: void };

	ShowMatrixDimensionByNamePromise(reportViewContextId: string, dimensionId: string, dimensionName: string, isRow: boolean): Promise<void>;

	LoadTableTemplate(reportViewContextId: string, isSummaryTemplate: boolean, successCallback: (data: { LoadTableTemplateResult: $D.Framework.Design.Report.Matrix.IntersectionTemplate.TableTemplate }) => any, errorCallback?: () => any): JQueryPromise<{ LoadTableTemplateResult: $D.Framework.Design.Report.Matrix.IntersectionTemplate.TableTemplate }>;

	LoadTableTemplate(reportViewContextId: string, isSummaryTemplate: boolean): { LoadTableTemplateResult: $D.Framework.Design.Report.Matrix.IntersectionTemplate.TableTemplate };

	LoadTableTemplatePromise(reportViewContextId: string, isSummaryTemplate: boolean): Promise<$D.Framework.Design.Report.Matrix.IntersectionTemplate.TableTemplate>;

	UpdateTableTemplate(reportViewContextId: string, template: $D.Framework.Design.Report.Matrix.IntersectionTemplate.TableTemplate, isSummaryTemplate: boolean, successCallback: (data: { UpdateTableTemplateResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateTableTemplateResult: void }>;

	UpdateTableTemplate(reportViewContextId: string, template: $D.Framework.Design.Report.Matrix.IntersectionTemplate.TableTemplate, isSummaryTemplate: boolean): { UpdateTableTemplateResult: void };

	UpdateTableTemplatePromise(reportViewContextId: string, template: $D.Framework.Design.Report.Matrix.IntersectionTemplate.TableTemplate, isSummaryTemplate: boolean): Promise<void>;

	ComputeReportViewInfoMatrix(reportViewContextId: string, successCallback: (data: { ComputeReportViewInfoMatrixResult: $D.Framework.Design.Report.Matrix.Output }) => any, errorCallback?: () => any): JQueryPromise<{ ComputeReportViewInfoMatrixResult: $D.Framework.Design.Report.Matrix.Output }>;

	ComputeReportViewInfoMatrix(reportViewContextId: string): { ComputeReportViewInfoMatrixResult: $D.Framework.Design.Report.Matrix.Output };

	ComputeReportViewInfoMatrixPromise(reportViewContextId: string): Promise<$D.Framework.Design.Report.Matrix.Output>;

	ComputeFilteredReportViewInfoMatrix(reportViewContextId: string, filterText: string, successCallback: (data: { ComputeFilteredReportViewInfoMatrixResult: $D.Framework.Design.Report.Matrix.Output }) => any, errorCallback?: () => any): JQueryPromise<{ ComputeFilteredReportViewInfoMatrixResult: $D.Framework.Design.Report.Matrix.Output }>;

	ComputeFilteredReportViewInfoMatrix(reportViewContextId: string, filterText: string): { ComputeFilteredReportViewInfoMatrixResult: $D.Framework.Design.Report.Matrix.Output };

	ComputeFilteredReportViewInfoMatrixPromise(reportViewContextId: string, filterText: string): Promise<$D.Framework.Design.Report.Matrix.Output>;

	GetReportViewMatrixIntersectionData(reportViewContextId: string, intersection: $D.Framework.Design.Report.Matrix.IntersectionData, successCallback: (data: { GetReportViewMatrixIntersectionDataResult: $D.Framework.Design.Report.Service.Comunication.ReportViewResult }) => any, errorCallback?: () => any): JQueryPromise<{ GetReportViewMatrixIntersectionDataResult: $D.Framework.Design.Report.Service.Comunication.ReportViewResult }>;

	GetReportViewMatrixIntersectionData(reportViewContextId: string, intersection: $D.Framework.Design.Report.Matrix.IntersectionData): { GetReportViewMatrixIntersectionDataResult: $D.Framework.Design.Report.Service.Comunication.ReportViewResult };

	GetReportViewMatrixIntersectionDataPromise(reportViewContextId: string, intersection: $D.Framework.Design.Report.Matrix.IntersectionData): Promise<$D.Framework.Design.Report.Service.Comunication.ReportViewResult>;

	GetJsonReportViewMatrixIntersectionData(reportViewContextId: string, intersection: $D.Framework.Design.Report.Matrix.IntersectionData, successCallback: (data: { GetJsonReportViewMatrixIntersectionDataResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetJsonReportViewMatrixIntersectionDataResult: string }>;

	GetJsonReportViewMatrixIntersectionData(reportViewContextId: string, intersection: $D.Framework.Design.Report.Matrix.IntersectionData): { GetJsonReportViewMatrixIntersectionDataResult: string };

	GetJsonReportViewMatrixIntersectionDataPromise(reportViewContextId: string, intersection: $D.Framework.Design.Report.Matrix.IntersectionData): Promise<string>;

	GetReportViewAggregationIntersectionData(reportViewContextId: string, intersection: $D.Framework.Design.Report.Matrix.IntersectionData, successCallback: (data: { GetReportViewAggregationIntersectionDataResult: $D.Framework.Design.Report.Service.Comunication.ReportViewResult }) => any, errorCallback?: () => any): JQueryPromise<{ GetReportViewAggregationIntersectionDataResult: $D.Framework.Design.Report.Service.Comunication.ReportViewResult }>;

	GetReportViewAggregationIntersectionData(reportViewContextId: string, intersection: $D.Framework.Design.Report.Matrix.IntersectionData): { GetReportViewAggregationIntersectionDataResult: $D.Framework.Design.Report.Service.Comunication.ReportViewResult };

	GetReportViewAggregationIntersectionDataPromise(reportViewContextId: string, intersection: $D.Framework.Design.Report.Matrix.IntersectionData): Promise<$D.Framework.Design.Report.Service.Comunication.ReportViewResult>;

	GetJsonReportViewAggregationIntersectionData(reportViewContextId: string, intersection: $D.Framework.Design.Report.Matrix.IntersectionData, successCallback: (data: { GetJsonReportViewAggregationIntersectionDataResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetJsonReportViewAggregationIntersectionDataResult: string }>;

	GetJsonReportViewAggregationIntersectionData(reportViewContextId: string, intersection: $D.Framework.Design.Report.Matrix.IntersectionData): { GetJsonReportViewAggregationIntersectionDataResult: string };

	GetJsonReportViewAggregationIntersectionDataPromise(reportViewContextId: string, intersection: $D.Framework.Design.Report.Matrix.IntersectionData): Promise<string>;

	GetCalendar(reportViewContextId: string, startDate: Date, endDate: Date, limitItems: any, successCallback: (data: { GetCalendarResult: $D.Framework.Design.Report.Calendar.CalendarItem[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetCalendarResult: $D.Framework.Design.Report.Calendar.CalendarItem[] }>;

	GetCalendar(reportViewContextId: string, startDate: Date, endDate: Date, limitItems: any): { GetCalendarResult: $D.Framework.Design.Report.Calendar.CalendarItem[] };

	GetCalendarPromise(reportViewContextId: string, startDate: Date, endDate: Date, limitItems: any): Promise<$D.Framework.Design.Report.Calendar.CalendarItem[]>;

	DrillCalendar(reportViewContextId: string, startDate: Date, endDate: Date, textOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType, successCallback: (data: { DrillCalendarResult: $D.Framework.Design.Report.Service.Comunication.ReportViewContext }) => any, errorCallback?: () => any): JQueryPromise<{ DrillCalendarResult: $D.Framework.Design.Report.Service.Comunication.ReportViewContext }>;

	DrillCalendar(reportViewContextId: string, startDate: Date, endDate: Date, textOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType): { DrillCalendarResult: $D.Framework.Design.Report.Service.Comunication.ReportViewContext };

	DrillCalendarPromise(reportViewContextId: string, startDate: Date, endDate: Date, textOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType): Promise<$D.Framework.Design.Report.Service.Comunication.ReportViewContext>;

	DrillMatrix(reportViewContextId: string, pageIndex: number, textOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType, cellId: string, successCallback: (data: { DrillMatrixResult: $D.Framework.Design.Report.Service.Comunication.ReportViewContext }) => any, errorCallback?: () => any): JQueryPromise<{ DrillMatrixResult: $D.Framework.Design.Report.Service.Comunication.ReportViewContext }>;

	DrillMatrix(reportViewContextId: string, pageIndex: number, textOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType, cellId: string): { DrillMatrixResult: $D.Framework.Design.Report.Service.Comunication.ReportViewContext };

	DrillMatrixPromise(reportViewContextId: string, pageIndex: number, textOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType, cellId: string): Promise<$D.Framework.Design.Report.Service.Comunication.ReportViewContext>;

	GetCalendarForCalendarSummary(reportViewContextId: string, startDate: Date, endDate: Date, limitItems: any, successCallback: (data: { GetCalendarForCalendarSummaryResult: $D.Framework.Design.Report.Calendar.CalendarItem[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetCalendarForCalendarSummaryResult: $D.Framework.Design.Report.Calendar.CalendarItem[] }>;

	GetCalendarForCalendarSummary(reportViewContextId: string, startDate: Date, endDate: Date, limitItems: any): { GetCalendarForCalendarSummaryResult: $D.Framework.Design.Report.Calendar.CalendarItem[] };

	GetCalendarForCalendarSummaryPromise(reportViewContextId: string, startDate: Date, endDate: Date, limitItems: any): Promise<$D.Framework.Design.Report.Calendar.CalendarItem[]>;

	GetTiles(reportViewContextId: string, successCallback: (data: { GetTilesResult: $D.Framework.Design.Report.Tiles.Tile[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetTilesResult: $D.Framework.Design.Report.Tiles.Tile[] }>;

	GetTiles(reportViewContextId: string): { GetTilesResult: $D.Framework.Design.Report.Tiles.Tile[] };

	GetTilesPromise(reportViewContextId: string): Promise<$D.Framework.Design.Report.Tiles.Tile[]>;

	GetTileData(reportViewContextId: string, tileId: string, tileName: string, successCallback: (data: { GetTileDataResult: $D.Framework.Design.Report.Service.Comunication.ReportViewResult }) => any, errorCallback?: () => any): JQueryPromise<{ GetTileDataResult: $D.Framework.Design.Report.Service.Comunication.ReportViewResult }>;

	GetTileData(reportViewContextId: string, tileId: string, tileName: string): { GetTileDataResult: $D.Framework.Design.Report.Service.Comunication.ReportViewResult };

	GetTileDataPromise(reportViewContextId: string, tileId: string, tileName: string): Promise<$D.Framework.Design.Report.Service.Comunication.ReportViewResult>;

	GetJsonTileData(reportViewContextId: string, tileId: string, tileName: string, successCallback: (data: { GetJsonTileDataResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetJsonTileDataResult: string }>;

	GetJsonTileData(reportViewContextId: string, tileId: string, tileName: string): { GetJsonTileDataResult: string };

	GetJsonTileDataPromise(reportViewContextId: string, tileId: string, tileName: string): Promise<string>;

	ReportViewSnapshotExists(reportViewContextId: string, snapshotName: string, successCallback: (data: { ReportViewSnapshotExistsResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ ReportViewSnapshotExistsResult: boolean }>;

	ReportViewSnapshotExists(reportViewContextId: string, snapshotName: string): { ReportViewSnapshotExistsResult: boolean };

	ReportViewSnapshotExistsPromise(reportViewContextId: string, snapshotName: string): Promise<boolean>;

	SaveReportViewSnapshot(reportViewContextId: string, snapshotName: string, successCallback: (data: { SaveReportViewSnapshotResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveReportViewSnapshotResult: void }>;

	SaveReportViewSnapshot(reportViewContextId: string, snapshotName: string): { SaveReportViewSnapshotResult: void };

	SaveReportViewSnapshotPromise(reportViewContextId: string, snapshotName: string): Promise<void>;

	ReleaseReportContext(reportViewContextId: string, successCallback: (data: { ReleaseReportContextResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ReleaseReportContextResult: void }>;

	ReleaseReportContext(reportViewContextId: string): { ReleaseReportContextResult: void };

	ReleaseReportContextPromise(reportViewContextId: string): Promise<void>;

	ReleaseDrillDownDataTable(reportViewContextId: string, successCallback: (data: { ReleaseDrillDownDataTableResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ReleaseDrillDownDataTableResult: void }>;

	ReleaseDrillDownDataTable(reportViewContextId: string): { ReleaseDrillDownDataTableResult: void };

	ReleaseDrillDownDataTablePromise(reportViewContextId: string): Promise<void>;

	RunSelectedRowFlowHandler(reportViewContextId: string, selectedRowFlowHandler: string, row: $D.Framework.Design.Report.Service.Comunication.ReportRow, successCallback: (data: { RunSelectedRowFlowHandlerResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RunSelectedRowFlowHandlerResult: void }>;

	RunSelectedRowFlowHandler(reportViewContextId: string, selectedRowFlowHandler: string, row: $D.Framework.Design.Report.Service.Comunication.ReportRow): { RunSelectedRowFlowHandlerResult: void };

	RunSelectedRowFlowHandlerPromise(reportViewContextId: string, selectedRowFlowHandler: string, row: $D.Framework.Design.Report.Service.Comunication.ReportRow): Promise<void>;

	RunRowFlowHandler(reportViewContextId: string, selectedRowFlowHandler: string, rowId: number, successCallback: (data: { RunRowFlowHandlerResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RunRowFlowHandlerResult: void }>;

	RunRowFlowHandler(reportViewContextId: string, selectedRowFlowHandler: string, rowId: number): { RunRowFlowHandlerResult: void };

	RunRowFlowHandlerPromise(reportViewContextId: string, selectedRowFlowHandler: string, rowId: number): Promise<void>;

	RunReportFlowLink(reportViewContextId: string, flowId: string, rowId: number, forUI: boolean, successCallback: (data: { RunReportFlowLinkResult: $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction }) => any, errorCallback?: () => any): JQueryPromise<{ RunReportFlowLinkResult: $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction }>;

	RunReportFlowLink(reportViewContextId: string, flowId: string, rowId: number, forUI: boolean): { RunReportFlowLinkResult: $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction };

	RunReportFlowLinkPromise(reportViewContextId: string, flowId: string, rowId: number, forUI: boolean): Promise<$D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction>;

	RunReportFlowGroupAction(reportViewContextId: string, flowId: string, rowIds: number[], forUI: boolean, successCallback: (data: { RunReportFlowGroupActionResult: $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction }) => any, errorCallback?: () => any): JQueryPromise<{ RunReportFlowGroupActionResult: $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction }>;

	RunReportFlowGroupAction(reportViewContextId: string, flowId: string, rowIds: number[], forUI: boolean): { RunReportFlowGroupActionResult: $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction };

	RunReportFlowGroupActionPromise(reportViewContextId: string, flowId: string, rowIds: number[], forUI: boolean): Promise<$D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction>;

	GetViewReportContext(elementRegistrationtId: string, folderId: string, successCallback: (data: { GetViewReportContextResult: $D.Framework.Design.Report.Service.Comunication.ViewReportContext }) => any, errorCallback?: () => any): JQueryPromise<{ GetViewReportContextResult: $D.Framework.Design.Report.Service.Comunication.ViewReportContext }>;

	GetViewReportContext(elementRegistrationtId: string, folderId: string): { GetViewReportContextResult: $D.Framework.Design.Report.Service.Comunication.ViewReportContext };

	GetViewReportContextPromise(elementRegistrationtId: string, folderId: string): Promise<$D.Framework.Design.Report.Service.Comunication.ViewReportContext>;

	GetViewReportContextWithValues(elementRegistrationId: string, folderId: string, filterValues: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], successCallback: (data: { GetViewReportContextWithValuesResult: $D.Framework.Design.Report.Service.Comunication.ViewReportContext }) => any, errorCallback?: () => any): JQueryPromise<{ GetViewReportContextWithValuesResult: $D.Framework.Design.Report.Service.Comunication.ViewReportContext }>;

	GetViewReportContextWithValues(elementRegistrationId: string, folderId: string, filterValues: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): { GetViewReportContextWithValuesResult: $D.Framework.Design.Report.Service.Comunication.ViewReportContext };

	GetViewReportContextWithValuesPromise(elementRegistrationId: string, folderId: string, filterValues: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): Promise<$D.Framework.Design.Report.Service.Comunication.ViewReportContext>;

	GetPaginatedReportData(elementRegistrationId: string, folderId: string, pageIndex: number, rowsperPage: number, usePaging: any, filters: string[], columns: $D.Framework.Design.Report.Service.Comunication.ReportColumnInfo[], successCallback: (data: { GetPaginatedReportDataResult: $D.Framework.Design.Report.Service.Comunication.PagedResultData }) => any, errorCallback?: () => any): JQueryPromise<{ GetPaginatedReportDataResult: $D.Framework.Design.Report.Service.Comunication.PagedResultData }>;

	GetPaginatedReportData(elementRegistrationId: string, folderId: string, pageIndex: number, rowsperPage: number, usePaging: any, filters: string[], columns: $D.Framework.Design.Report.Service.Comunication.ReportColumnInfo[]): { GetPaginatedReportDataResult: $D.Framework.Design.Report.Service.Comunication.PagedResultData };

	GetPaginatedReportDataPromise(elementRegistrationId: string, folderId: string, pageIndex: number, rowsperPage: number, usePaging: any, filters: string[], columns: $D.Framework.Design.Report.Service.Comunication.ReportColumnInfo[]): Promise<$D.Framework.Design.Report.Service.Comunication.PagedResultData>;

	GetPaginatedReportDataWithValues(elementRegistrationId: string, folderId: string, pageIndex: number, rowsperPage: number, usePaging: any, filters: string[], columns: $D.Framework.Design.Report.Service.Comunication.ReportColumnInfo[], filterValues: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], successCallback: (data: { GetPaginatedReportDataWithValuesResult: $D.Framework.Design.Report.Service.Comunication.PagedResultData }) => any, errorCallback?: () => any): JQueryPromise<{ GetPaginatedReportDataWithValuesResult: $D.Framework.Design.Report.Service.Comunication.PagedResultData }>;

	GetPaginatedReportDataWithValues(elementRegistrationId: string, folderId: string, pageIndex: number, rowsperPage: number, usePaging: any, filters: string[], columns: $D.Framework.Design.Report.Service.Comunication.ReportColumnInfo[], filterValues: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): { GetPaginatedReportDataWithValuesResult: $D.Framework.Design.Report.Service.Comunication.PagedResultData };

	GetPaginatedReportDataWithValuesPromise(elementRegistrationId: string, folderId: string, pageIndex: number, rowsperPage: number, usePaging: any, filters: string[], columns: $D.Framework.Design.Report.Service.Comunication.ReportColumnInfo[], filterValues: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): Promise<$D.Framework.Design.Report.Service.Comunication.PagedResultData>;

	GetViewReportContextWithRTEFilters(reportViewContextId: string, folderId: string, successCallback: (data: { GetViewReportContextWithRTEFiltersResult: $D.Framework.Design.Report.Service.Comunication.ViewReportContext }) => any, errorCallback?: () => any): JQueryPromise<{ GetViewReportContextWithRTEFiltersResult: $D.Framework.Design.Report.Service.Comunication.ViewReportContext }>;

	GetViewReportContextWithRTEFilters(reportViewContextId: string, folderId: string): { GetViewReportContextWithRTEFiltersResult: $D.Framework.Design.Report.Service.Comunication.ViewReportContext };

	GetViewReportContextWithRTEFiltersPromise(reportViewContextId: string, folderId: string): Promise<$D.Framework.Design.Report.Service.Comunication.ViewReportContext>;

	GetReportTextOutput(reportId: string, folderId: string, type: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType, successCallback: (data: { GetReportTextOutputResult: $D.Framework.Design.Report.Service.Comunication.ReportTextOutput[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetReportTextOutputResult: $D.Framework.Design.Report.Service.Comunication.ReportTextOutput[] }>;

	GetReportTextOutput(reportId: string, folderId: string, type: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType): { GetReportTextOutputResult: $D.Framework.Design.Report.Service.Comunication.ReportTextOutput[] };

	GetReportTextOutputPromise(reportId: string, folderId: string, type: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType): Promise<$D.Framework.Design.Report.Service.Comunication.ReportTextOutput[]>;

	GetTextOutputWithRTEFilters(reportViewContextId: string, folderId: string, type: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType, successCallback: (data: { GetTextOutputWithRTEFiltersResult: $D.Framework.Design.Report.Service.Comunication.ReportTextOutput[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetTextOutputWithRTEFiltersResult: $D.Framework.Design.Report.Service.Comunication.ReportTextOutput[] }>;

	GetTextOutputWithRTEFilters(reportViewContextId: string, folderId: string, type: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType): { GetTextOutputWithRTEFiltersResult: $D.Framework.Design.Report.Service.Comunication.ReportTextOutput[] };

	GetTextOutputWithRTEFiltersPromise(reportViewContextId: string, folderId: string, type: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType): Promise<$D.Framework.Design.Report.Service.Comunication.ReportTextOutput[]>;

	GetOutputReportUrl(reportId: string, reportViewContextId: string, currentFolderId: string, host: string, type: $D.Framework.Design.Report.Service.Utils.OutputReportType, successCallback: (data: { GetOutputReportUrlResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetOutputReportUrlResult: string }>;

	GetOutputReportUrl(reportId: string, reportViewContextId: string, currentFolderId: string, host: string, type: $D.Framework.Design.Report.Service.Utils.OutputReportType): { GetOutputReportUrlResult: string };

	GetOutputReportUrlPromise(reportId: string, reportViewContextId: string, currentFolderId: string, host: string, type: $D.Framework.Design.Report.Service.Utils.OutputReportType): Promise<string>;

	GetOutputPreviewReport(reportId: string, reportViewContextId: string, currentFolderId: string, successCallback: (data: { GetOutputPreviewReportResult: $D.Framework.Design.Report.Service.Comunication.OutputReportResultData }) => any, errorCallback?: () => any): JQueryPromise<{ GetOutputPreviewReportResult: $D.Framework.Design.Report.Service.Comunication.OutputReportResultData }>;

	GetOutputPreviewReport(reportId: string, reportViewContextId: string, currentFolderId: string): { GetOutputPreviewReportResult: $D.Framework.Design.Report.Service.Comunication.OutputReportResultData };

	GetOutputPreviewReportPromise(reportId: string, reportViewContextId: string, currentFolderId: string): Promise<$D.Framework.Design.Report.Service.Comunication.OutputReportResultData>;

	GetOutputPreviewReportByKey(key: string, successCallback: (data: { GetOutputPreviewReportByKeyResult: $D.Framework.Design.Report.Service.Comunication.OutputReportResultData }) => any, errorCallback?: () => any): JQueryPromise<{ GetOutputPreviewReportByKeyResult: $D.Framework.Design.Report.Service.Comunication.OutputReportResultData }>;

	GetOutputPreviewReportByKey(key: string): { GetOutputPreviewReportByKeyResult: $D.Framework.Design.Report.Service.Comunication.OutputReportResultData };

	GetOutputPreviewReportByKeyPromise(key: string): Promise<$D.Framework.Design.Report.Service.Comunication.OutputReportResultData>;

	SaveSnapshot(elementRegistrationtID: string, folderId: string, snapshotName: string, successCallback: (data: { SaveSnapshotResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveSnapshotResult: void }>;

	SaveSnapshot(elementRegistrationtID: string, folderId: string, snapshotName: string): { SaveSnapshotResult: void };

	SaveSnapshotPromise(elementRegistrationtID: string, folderId: string, snapshotName: string): Promise<void>;

	SaveSnapshotWithRTEFilters(reportViewContextId: string, folderId: string, snapshotName: string, successCallback: (data: { SaveSnapshotWithRTEFiltersResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveSnapshotWithRTEFiltersResult: void }>;

	SaveSnapshotWithRTEFilters(reportViewContextId: string, folderId: string, snapshotName: string): { SaveSnapshotWithRTEFiltersResult: void };

	SaveSnapshotWithRTEFiltersPromise(reportViewContextId: string, folderId: string, snapshotName: string): Promise<void>;

	GetReportSnapshotNames(reportId: string, fromDate: any, toDate: any, successCallback: (data: { GetReportSnapshotNamesResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetReportSnapshotNamesResult: string[] }>;

	GetReportSnapshotNames(reportId: string, fromDate: any, toDate: any): { GetReportSnapshotNamesResult: string[] };

	GetReportSnapshotNamesPromise(reportId: string, fromDate: any, toDate: any): Promise<string[]>;

	GetSnapshotContext(reportId: string, snapshotName: string, successCallback: (data: { GetSnapshotContextResult: $D.Framework.Design.Report.Service.Comunication.ReportSnapshotContext }) => any, errorCallback?: () => any): JQueryPromise<{ GetSnapshotContextResult: $D.Framework.Design.Report.Service.Comunication.ReportSnapshotContext }>;

	GetSnapshotContext(reportId: string, snapshotName: string): { GetSnapshotContextResult: $D.Framework.Design.Report.Service.Comunication.ReportSnapshotContext };

	GetSnapshotContextPromise(reportId: string, snapshotName: string): Promise<$D.Framework.Design.Report.Service.Comunication.ReportSnapshotContext>;

	IsExistSnapshotName(reportId: string, snapshotName: string, successCallback: (data: { IsExistSnapshotNameResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ IsExistSnapshotNameResult: boolean }>;

	IsExistSnapshotName(reportId: string, snapshotName: string): { IsExistSnapshotNameResult: boolean };

	IsExistSnapshotNamePromise(reportId: string, snapshotName: string): Promise<boolean>;

	GetChartSubtotals(reportId: string, useMatrix: boolean, successCallback: (data: { GetChartSubtotalsResult: $D.Framework.Design.Report.SubcalcFields.SubCalcFieldDefinition[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetChartSubtotalsResult: $D.Framework.Design.Report.SubcalcFields.SubCalcFieldDefinition[] }>;

	GetChartSubtotals(reportId: string, useMatrix: boolean): { GetChartSubtotalsResult: $D.Framework.Design.Report.SubcalcFields.SubCalcFieldDefinition[] };

	GetChartSubtotalsPromise(reportId: string, useMatrix: boolean): Promise<$D.Framework.Design.Report.SubcalcFields.SubCalcFieldDefinition[]>;

	GetReportsForTree(defaultReportId: string, defaultFolderId: string, currentFolderId: string, includeFolderDefaultReports: boolean, includeFavorites: boolean, includeSnapshots: boolean, from: any, to: any, filters: $D.Framework.ServiceLayer.Services.ConfigurationStorage.BaseElementRegistrationFilter, successCallback: (data: { GetReportsForTreeResult: $D.Framework.Design.Report.Service.Comunication.ReportForTree[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetReportsForTreeResult: $D.Framework.Design.Report.Service.Comunication.ReportForTree[] }>;

	GetReportsForTree(defaultReportId: string, defaultFolderId: string, currentFolderId: string, includeFolderDefaultReports: boolean, includeFavorites: boolean, includeSnapshots: boolean, from: any, to: any, filters: $D.Framework.ServiceLayer.Services.ConfigurationStorage.BaseElementRegistrationFilter): { GetReportsForTreeResult: $D.Framework.Design.Report.Service.Comunication.ReportForTree[] };

	GetReportsForTreePromise(defaultReportId: string, defaultFolderId: string, currentFolderId: string, includeFolderDefaultReports: boolean, includeFavorites: boolean, includeSnapshots: boolean, from: any, to: any, filters: $D.Framework.ServiceLayer.Services.ConfigurationStorage.BaseElementRegistrationFilter): Promise<$D.Framework.Design.Report.Service.Comunication.ReportForTree[]>;

	GetReportsWithMatrixForTree(defaultReportId: string, defaultFolderId: string, currentFolderId: string, includeFolderDefaultReports: boolean, includeFavorites: boolean, includeSnapshots: boolean, from: any, to: any, successCallback: (data: { GetReportsWithMatrixForTreeResult: $D.Framework.Design.Report.Service.Comunication.ReportForTree[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetReportsWithMatrixForTreeResult: $D.Framework.Design.Report.Service.Comunication.ReportForTree[] }>;

	GetReportsWithMatrixForTree(defaultReportId: string, defaultFolderId: string, currentFolderId: string, includeFolderDefaultReports: boolean, includeFavorites: boolean, includeSnapshots: boolean, from: any, to: any): { GetReportsWithMatrixForTreeResult: $D.Framework.Design.Report.Service.Comunication.ReportForTree[] };

	GetReportsWithMatrixForTreePromise(defaultReportId: string, defaultFolderId: string, currentFolderId: string, includeFolderDefaultReports: boolean, includeFavorites: boolean, includeSnapshots: boolean, from: any, to: any): Promise<$D.Framework.Design.Report.Service.Comunication.ReportForTree[]>;

	GetFolderReportsForTree(folderId: string, includeSnapshots: boolean, from: any, to: any, successCallback: (data: { GetFolderReportsForTreeResult: $D.Framework.Design.Report.Service.Comunication.ReportForTree[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetFolderReportsForTreeResult: $D.Framework.Design.Report.Service.Comunication.ReportForTree[] }>;

	GetFolderReportsForTree(folderId: string, includeSnapshots: boolean, from: any, to: any): { GetFolderReportsForTreeResult: $D.Framework.Design.Report.Service.Comunication.ReportForTree[] };

	GetFolderReportsForTreePromise(folderId: string, includeSnapshots: boolean, from: any, to: any): Promise<$D.Framework.Design.Report.Service.Comunication.ReportForTree[]>;

	BuildChartsSourcesFromReports(defaultFolderId: string, currentFolderId: string, includeFavorites: boolean, successCallback: (data: { BuildChartsSourcesFromReportsResult: $D.Framework.Design.Report.Service.Comunication.ChartSourceForTree[] }) => any, errorCallback?: () => any): JQueryPromise<{ BuildChartsSourcesFromReportsResult: $D.Framework.Design.Report.Service.Comunication.ChartSourceForTree[] }>;

	BuildChartsSourcesFromReports(defaultFolderId: string, currentFolderId: string, includeFavorites: boolean): { BuildChartsSourcesFromReportsResult: $D.Framework.Design.Report.Service.Comunication.ChartSourceForTree[] };

	BuildChartsSourcesFromReportsPromise(defaultFolderId: string, currentFolderId: string, includeFavorites: boolean): Promise<$D.Framework.Design.Report.Service.Comunication.ChartSourceForTree[]>;

	BuildChartsSourcesFromMatrices(defaultFolderId: string, currentFolderId: string, includeFavorites: boolean, successCallback: (data: { BuildChartsSourcesFromMatricesResult: $D.Framework.Design.Report.Service.Comunication.ChartSourceForTree[] }) => any, errorCallback?: () => any): JQueryPromise<{ BuildChartsSourcesFromMatricesResult: $D.Framework.Design.Report.Service.Comunication.ChartSourceForTree[] }>;

	BuildChartsSourcesFromMatrices(defaultFolderId: string, currentFolderId: string, includeFavorites: boolean): { BuildChartsSourcesFromMatricesResult: $D.Framework.Design.Report.Service.Comunication.ChartSourceForTree[] };

	BuildChartsSourcesFromMatricesPromise(defaultFolderId: string, currentFolderId: string, includeFavorites: boolean): Promise<$D.Framework.Design.Report.Service.Comunication.ChartSourceForTree[]>;

	BuildChartsSourcesFromReport(reportId: string, useMatrix: boolean, successCallback: (data: { BuildChartsSourcesFromReportResult: $D.Framework.Design.Report.Service.Comunication.ChartSourceForTree[] }) => any, errorCallback?: () => any): JQueryPromise<{ BuildChartsSourcesFromReportResult: $D.Framework.Design.Report.Service.Comunication.ChartSourceForTree[] }>;

	BuildChartsSourcesFromReport(reportId: string, useMatrix: boolean): { BuildChartsSourcesFromReportResult: $D.Framework.Design.Report.Service.Comunication.ChartSourceForTree[] };

	BuildChartsSourcesFromReportPromise(reportId: string, useMatrix: boolean): Promise<$D.Framework.Design.Report.Service.Comunication.ChartSourceForTree[]>;

	ComputeMatrix(reportId: string, folderId: string, successCallback: (data: { ComputeMatrixResult: $D.Framework.Design.Report.Matrix.Output }) => any, errorCallback?: () => any): JQueryPromise<{ ComputeMatrixResult: $D.Framework.Design.Report.Matrix.Output }>;

	ComputeMatrix(reportId: string, folderId: string): { ComputeMatrixResult: $D.Framework.Design.Report.Matrix.Output };

	ComputeMatrixPromise(reportId: string, folderId: string): Promise<$D.Framework.Design.Report.Matrix.Output>;

	GetAggregationOutput(reportId: string, folderId: string, successCallback: (data: { GetAggregationOutputResult: $D.Framework.Design.Report.Matrix.Output }) => any, errorCallback?: () => any): JQueryPromise<{ GetAggregationOutputResult: $D.Framework.Design.Report.Matrix.Output }>;

	GetAggregationOutput(reportId: string, folderId: string): { GetAggregationOutputResult: $D.Framework.Design.Report.Matrix.Output };

	GetAggregationOutputPromise(reportId: string, folderId: string): Promise<$D.Framework.Design.Report.Matrix.Output>;

	GetMatrixIntersectionData(reportId: string, folderId: string, intersection: $D.Framework.Design.Report.Matrix.IntersectionData, successCallback: (data: { GetMatrixIntersectionDataResult: $D.Framework.Design.Report.Service.Comunication.ViewReportResultData }) => any, errorCallback?: () => any): JQueryPromise<{ GetMatrixIntersectionDataResult: $D.Framework.Design.Report.Service.Comunication.ViewReportResultData }>;

	GetMatrixIntersectionData(reportId: string, folderId: string, intersection: $D.Framework.Design.Report.Matrix.IntersectionData): { GetMatrixIntersectionDataResult: $D.Framework.Design.Report.Service.Comunication.ViewReportResultData };

	GetMatrixIntersectionDataPromise(reportId: string, folderId: string, intersection: $D.Framework.Design.Report.Matrix.IntersectionData): Promise<$D.Framework.Design.Report.Service.Comunication.ViewReportResultData>;

	GetAggregationIntersectionData(reportId: string, folderId: string, intersection: $D.Framework.Design.Report.Matrix.IntersectionData, successCallback: (data: { GetAggregationIntersectionDataResult: $D.Framework.Design.Report.Service.Comunication.ViewReportResultData }) => any, errorCallback?: () => any): JQueryPromise<{ GetAggregationIntersectionDataResult: $D.Framework.Design.Report.Service.Comunication.ViewReportResultData }>;

	GetAggregationIntersectionData(reportId: string, folderId: string, intersection: $D.Framework.Design.Report.Matrix.IntersectionData): { GetAggregationIntersectionDataResult: $D.Framework.Design.Report.Service.Comunication.ViewReportResultData };

	GetAggregationIntersectionDataPromise(reportId: string, folderId: string, intersection: $D.Framework.Design.Report.Matrix.IntersectionData): Promise<$D.Framework.Design.Report.Service.Comunication.ViewReportResultData>;

	GetFields(reportViewContextId: string, successCallback: (data: { GetFieldsResult: $D.Framework.Design.Report.Service.Comunication.ReportFieldInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetFieldsResult: $D.Framework.Design.Report.Service.Comunication.ReportFieldInfo[] }>;

	GetFields(reportViewContextId: string): { GetFieldsResult: $D.Framework.Design.Report.Service.Comunication.ReportFieldInfo[] };

	GetFieldsPromise(reportViewContextId: string): Promise<$D.Framework.Design.Report.Service.Comunication.ReportFieldInfo[]>;

	GetDimensionsForType(fullTypeName: string, successCallback: (data: { GetDimensionsForTypeResult: $D.Framework.Design.Report.Matrix.AbstractDimension[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetDimensionsForTypeResult: $D.Framework.Design.Report.Matrix.AbstractDimension[] }>;

	GetDimensionsForType(fullTypeName: string): { GetDimensionsForTypeResult: $D.Framework.Design.Report.Matrix.AbstractDimension[] };

	GetDimensionsForTypePromise(fullTypeName: string): Promise<$D.Framework.Design.Report.Matrix.AbstractDimension[]>;

	CreateAndEditMatrixDimension(reportViewContextId: string, dimensionType: string, field: string, isRowDimension: boolean, successCallback: (data: { CreateAndEditMatrixDimensionResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateAndEditMatrixDimensionResult: string }>;

	CreateAndEditMatrixDimension(reportViewContextId: string, dimensionType: string, field: string, isRowDimension: boolean): { CreateAndEditMatrixDimensionResult: string };

	CreateAndEditMatrixDimensionPromise(reportViewContextId: string, dimensionType: string, field: string, isRowDimension: boolean): Promise<string>;

	CreateMatrixDimension(reportViewContextId: string, dimensionType: string, field: string, isRowDimension: boolean, successCallback: (data: { CreateMatrixDimensionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CreateMatrixDimensionResult: void }>;

	CreateMatrixDimension(reportViewContextId: string, dimensionType: string, field: string, isRowDimension: boolean): { CreateMatrixDimensionResult: void };

	CreateMatrixDimensionPromise(reportViewContextId: string, dimensionType: string, field: string, isRowDimension: boolean): Promise<void>;

	SaveReport(reportViewContextId: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, successCallback: (data: { SaveReportResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveReportResult: void }>;

	SaveReport(reportViewContextId: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration): { SaveReportResult: void };

	SaveReportPromise(reportViewContextId: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration): Promise<void>;

	SaveReportAs(reportViewContextId: string, reportName: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, shared: boolean, successCallback: (data: { SaveReportAsResult: $D.Framework.Design.Report.Service.Comunication.ReportViewContext }) => any, errorCallback?: () => any): JQueryPromise<{ SaveReportAsResult: $D.Framework.Design.Report.Service.Comunication.ReportViewContext }>;

	SaveReportAs(reportViewContextId: string, reportName: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, shared: boolean): { SaveReportAsResult: $D.Framework.Design.Report.Service.Comunication.ReportViewContext };

	SaveReportAsPromise(reportViewContextId: string, reportName: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, shared: boolean): Promise<$D.Framework.Design.Report.Service.Comunication.ReportViewContext>;

	DiscardChanges(reportViewContextId: string, successCallback: (data: { DiscardChangesResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DiscardChangesResult: void }>;

	DiscardChanges(reportViewContextId: string): { DiscardChangesResult: void };

	DiscardChangesPromise(reportViewContextId: string): Promise<void>;

	DiscardDrillDownChanges(reportViewContextId: string, successCallback: (data: { DiscardDrillDownChangesResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DiscardDrillDownChangesResult: void }>;

	DiscardDrillDownChanges(reportViewContextId: string): { DiscardDrillDownChangesResult: void };

	DiscardDrillDownChangesPromise(reportViewContextId: string): Promise<void>;

	GetReportSummary(folderId: string, reportId: string, historicalValueSourceId: string, successCallback: (data: { GetReportSummaryResult: $D.Framework.Design.Report.Service.Comunication.ReportSummary }) => any, errorCallback?: () => any): JQueryPromise<{ GetReportSummaryResult: $D.Framework.Design.Report.Service.Comunication.ReportSummary }>;

	GetReportSummary(folderId: string, reportId: string, historicalValueSourceId: string): { GetReportSummaryResult: $D.Framework.Design.Report.Service.Comunication.ReportSummary };

	GetReportSummaryPromise(folderId: string, reportId: string, historicalValueSourceId: string): Promise<$D.Framework.Design.Report.Service.Comunication.ReportSummary>;

	GetReportSummaryBySnapshot(folderId: string, reportId: string, snapshotsFrom: any, snapshotsTo: any, successCallback: (data: { GetReportSummaryBySnapshotResult: $D.Framework.Design.Report.Service.Comunication.ReportSummary }) => any, errorCallback?: () => any): JQueryPromise<{ GetReportSummaryBySnapshotResult: $D.Framework.Design.Report.Service.Comunication.ReportSummary }>;

	GetReportSummaryBySnapshot(folderId: string, reportId: string, snapshotsFrom: any, snapshotsTo: any): { GetReportSummaryBySnapshotResult: $D.Framework.Design.Report.Service.Comunication.ReportSummary };

	GetReportSummaryBySnapshotPromise(folderId: string, reportId: string, snapshotsFrom: any, snapshotsTo: any): Promise<$D.Framework.Design.Report.Service.Comunication.ReportSummary>;

	AddColumn(reportViewContextId: string, columInfo: string, isCalculated: boolean, successCallback: (data: { AddColumnResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddColumnResult: string }>;

	AddColumn(reportViewContextId: string, columInfo: string, isCalculated: boolean): { AddColumnResult: string };

	AddColumnPromise(reportViewContextId: string, columInfo: string, isCalculated: boolean): Promise<string>;

	AddColumns(reportViewContextId: string, columnsInfo: $D.Framework.Design.Report.ColumnInfo[], successCallback: (data: { AddColumnsResult: $D.Framework.Design.Report.Service.Comunication.ReportColumnInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ AddColumnsResult: $D.Framework.Design.Report.Service.Comunication.ReportColumnInfo[] }>;

	AddColumns(reportViewContextId: string, columnsInfo: $D.Framework.Design.Report.ColumnInfo[]): { AddColumnsResult: $D.Framework.Design.Report.Service.Comunication.ReportColumnInfo[] };

	AddColumnsPromise(reportViewContextId: string, columnsInfo: $D.Framework.Design.Report.ColumnInfo[]): Promise<$D.Framework.Design.Report.Service.Comunication.ReportColumnInfo[]>;

	EditColumn(reportViewContextId: string, columnId: string, successCallback: (data: { EditColumnResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ EditColumnResult: string }>;

	EditColumn(reportViewContextId: string, columnId: string): { EditColumnResult: string };

	EditColumnPromise(reportViewContextId: string, columnId: string): Promise<string>;

	DeleteColumn(reportViewContextId: string, columnId: string, successCallback: (data: { DeleteColumnResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteColumnResult: void }>;

	DeleteColumn(reportViewContextId: string, columnId: string): { DeleteColumnResult: void };

	DeleteColumnPromise(reportViewContextId: string, columnId: string): Promise<void>;

	DeleteColumns(reportViewContextId: string, columnIds: string[], successCallback: (data: { DeleteColumnsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteColumnsResult: void }>;

	DeleteColumns(reportViewContextId: string, columnIds: string[]): { DeleteColumnsResult: void };

	DeleteColumnsPromise(reportViewContextId: string, columnIds: string[]): Promise<void>;

	UpdateReportViewContextUserAccess(reportViewContextId: string, successCallback: (data: { UpdateReportViewContextUserAccessResult: $D.Framework.Design.Report.Service.Comunication.ReportViewInfo }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateReportViewContextUserAccessResult: $D.Framework.Design.Report.Service.Comunication.ReportViewInfo }>;

	UpdateReportViewContextUserAccess(reportViewContextId: string): { UpdateReportViewContextUserAccessResult: $D.Framework.Design.Report.Service.Comunication.ReportViewInfo };

	UpdateReportViewContextUserAccessPromise(reportViewContextId: string): Promise<$D.Framework.Design.Report.Service.Comunication.ReportViewInfo>;

	ProcessQueryStringForReportContext(reportViewContextId: string, queryString: string, successCallback: (data: { ProcessQueryStringForReportContextResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessQueryStringForReportContextResult: void }>;

	ProcessQueryStringForReportContext(reportViewContextId: string, queryString: string): { ProcessQueryStringForReportContextResult: void };

	ProcessQueryStringForReportContextPromise(reportViewContextId: string, queryString: string): Promise<void>;

	ProcessReportForOutput(reportId: string, handlerId: string, folderId: string, successCallback: (data: { ProcessReportForOutputResult: $D.Framework.Data.DataTypes.FileData }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessReportForOutputResult: $D.Framework.Data.DataTypes.FileData }>;

	ProcessReportForOutput(reportId: string, handlerId: string, folderId: string): { ProcessReportForOutputResult: $D.Framework.Data.DataTypes.FileData };

	ProcessReportForOutputPromise(reportId: string, handlerId: string, folderId: string): Promise<$D.Framework.Data.DataTypes.FileData>;

	ProcessReportContextForOutput(reportViewContextId: string, handlerId: string, successCallback: (data: { ProcessReportContextForOutputResult: $D.Framework.Data.DataTypes.FileData }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessReportContextForOutputResult: $D.Framework.Data.DataTypes.FileData }>;

	ProcessReportContextForOutput(reportViewContextId: string, handlerId: string): { ProcessReportContextForOutputResult: $D.Framework.Data.DataTypes.FileData };

	ProcessReportContextForOutputPromise(reportViewContextId: string, handlerId: string): Promise<$D.Framework.Data.DataTypes.FileData>;

	AdjustColumnProperties(reportViewContextId: string, columnId: string, isHideFieldNameProperty: boolean, successCallback: (data: { AdjustColumnPropertiesResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AdjustColumnPropertiesResult: string }>;

	AdjustColumnProperties(reportViewContextId: string, columnId: string, isHideFieldNameProperty: boolean): { AdjustColumnPropertiesResult: string };

	AdjustColumnPropertiesPromise(reportViewContextId: string, columnId: string, isHideFieldNameProperty: boolean): Promise<string>;

	GetRuntimeFiltersData(reportViewContextId: string, successCallback: (data: { GetRuntimeFiltersDataResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetRuntimeFiltersDataResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	GetRuntimeFiltersData(reportViewContextId: string): { GetRuntimeFiltersDataResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	GetRuntimeFiltersDataPromise(reportViewContextId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	GetRuntimeFiltersDisplayValue(reportViewContextId: string, successCallback: (data: { GetRuntimeFiltersDisplayValueResult: $D.Framework.Design.Report.Service.Comunication.RuntimeFilterInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetRuntimeFiltersDisplayValueResult: $D.Framework.Design.Report.Service.Comunication.RuntimeFilterInfo[] }>;

	GetRuntimeFiltersDisplayValue(reportViewContextId: string): { GetRuntimeFiltersDisplayValueResult: $D.Framework.Design.Report.Service.Comunication.RuntimeFilterInfo[] };

	GetRuntimeFiltersDisplayValuePromise(reportViewContextId: string): Promise<$D.Framework.Design.Report.Service.Comunication.RuntimeFilterInfo[]>;

	ValidateAndSaveRow(reportViewContextId: string, rowId: string, valuesToUpdate: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], successCallback: (data: { ValidateAndSaveRowResult: $D.Framework.ValidationIssue[] }) => any, errorCallback?: () => any): JQueryPromise<{ ValidateAndSaveRowResult: $D.Framework.ValidationIssue[] }>;

	ValidateAndSaveRow(reportViewContextId: string, rowId: string, valuesToUpdate: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): { ValidateAndSaveRowResult: $D.Framework.ValidationIssue[] };

	ValidateAndSaveRowPromise(reportViewContextId: string, rowId: string, valuesToUpdate: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): Promise<$D.Framework.ValidationIssue[]>;

	GetGridViewResultData(reportViewContextId: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, selectionParams: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], pageIndex: number, isInDesignMode: boolean, successCallback: (data: { GetGridViewResultDataResult: $D.Framework.Design.Report.Service.Comunication.GridViewResultData }) => any, errorCallback?: () => any): JQueryPromise<{ GetGridViewResultDataResult: $D.Framework.Design.Report.Service.Comunication.GridViewResultData }>;

	GetGridViewResultData(reportViewContextId: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, selectionParams: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], pageIndex: number, isInDesignMode: boolean): { GetGridViewResultDataResult: $D.Framework.Design.Report.Service.Comunication.GridViewResultData };

	GetGridViewResultDataPromise(reportViewContextId: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, selectionParams: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], pageIndex: number, isInDesignMode: boolean): Promise<$D.Framework.Design.Report.Service.Comunication.GridViewResultData>;

	GetImageDataById(imageId: string, successCallback: (data: { GetImageDataByIdResult: number[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetImageDataByIdResult: number[] }>;

	GetImageDataById(imageId: string): { GetImageDataByIdResult: number[] };

	GetImageDataByIdPromise(imageId: string): Promise<number[]>;

	UpdateGridViewResultData(reportViewContextId: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, selectionParams: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], pageIndex: number, isInDesignMode: boolean, reportTextOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType, successCallback: (data: { UpdateGridViewResultDataResult: $D.Framework.Design.Report.Service.Comunication.GridViewResultData }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateGridViewResultDataResult: $D.Framework.Design.Report.Service.Comunication.GridViewResultData }>;

	UpdateGridViewResultData(reportViewContextId: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, selectionParams: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], pageIndex: number, isInDesignMode: boolean, reportTextOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType): { UpdateGridViewResultDataResult: $D.Framework.Design.Report.Service.Comunication.GridViewResultData };

	UpdateGridViewResultDataPromise(reportViewContextId: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, selectionParams: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], pageIndex: number, isInDesignMode: boolean, reportTextOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType): Promise<$D.Framework.Design.Report.Service.Comunication.GridViewResultData>;

	UpdateDrillDownGridViewResultData(reportViewContextId: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, selectionParams: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], pageIndex: number, isInDesignMode: boolean, reportTextOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType, successCallback: (data: { UpdateDrillDownGridViewResultDataResult: $D.Framework.Design.Report.Service.Comunication.GridViewResultData }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateDrillDownGridViewResultDataResult: $D.Framework.Design.Report.Service.Comunication.GridViewResultData }>;

	UpdateDrillDownGridViewResultData(reportViewContextId: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, selectionParams: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], pageIndex: number, isInDesignMode: boolean, reportTextOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType): { UpdateDrillDownGridViewResultDataResult: $D.Framework.Design.Report.Service.Comunication.GridViewResultData };

	UpdateDrillDownGridViewResultDataPromise(reportViewContextId: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, selectionParams: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], pageIndex: number, isInDesignMode: boolean, reportTextOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType): Promise<$D.Framework.Design.Report.Service.Comunication.GridViewResultData>;

	UpdateColumnsPosition(reportViewContextId: string, columns: $D.Framework.Design.Report.Service.Comunication.ReportColumnInfo[], successCallback: (data: { UpdateColumnsPositionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateColumnsPositionResult: void }>;

	UpdateColumnsPosition(reportViewContextId: string, columns: $D.Framework.Design.Report.Service.Comunication.ReportColumnInfo[]): { UpdateColumnsPositionResult: void };

	UpdateColumnsPositionPromise(reportViewContextId: string, columns: $D.Framework.Design.Report.Service.Comunication.ReportColumnInfo[]): Promise<void>;

	ResetReportFilters(reportViewContextId: string, successCallback: (data: { ResetReportFiltersResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ResetReportFiltersResult: void }>;

	ResetReportFilters(reportViewContextId: string): { ResetReportFiltersResult: void };

	ResetReportFiltersPromise(reportViewContextId: string): Promise<void>;

	ClearReportFilters(reportViewContextId: string, successCallback: (data: { ClearReportFiltersResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ClearReportFiltersResult: void }>;

	ClearReportFilters(reportViewContextId: string): { ClearReportFiltersResult: void };

	ClearReportFiltersPromise(reportViewContextId: string): Promise<void>;

	GetRuntimeFilterDataByColumn(reportViewContextId: string, columnId: string, successCallback: (data: { GetRuntimeFilterDataByColumnResult: $D.Framework.Design.Report.Service.Comunication.RuntimeFilterInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetRuntimeFilterDataByColumnResult: $D.Framework.Design.Report.Service.Comunication.RuntimeFilterInfo[] }>;

	GetRuntimeFilterDataByColumn(reportViewContextId: string, columnId: string): { GetRuntimeFilterDataByColumnResult: $D.Framework.Design.Report.Service.Comunication.RuntimeFilterInfo[] };

	GetRuntimeFilterDataByColumnPromise(reportViewContextId: string, columnId: string): Promise<$D.Framework.Design.Report.Service.Comunication.RuntimeFilterInfo[]>;

	GetHierarchicalViewResultData(reportViewContextId: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, selectionParams: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], parentId: string, pageIndex: number, expandedRows: string[], successCallback: (data: { GetHierarchicalViewResultDataResult: $D.Framework.Design.Report.Service.Comunication.GridViewResultData }) => any, errorCallback?: () => any): JQueryPromise<{ GetHierarchicalViewResultDataResult: $D.Framework.Design.Report.Service.Comunication.GridViewResultData }>;

	GetHierarchicalViewResultData(reportViewContextId: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, selectionParams: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], parentId: string, pageIndex: number, expandedRows: string[]): { GetHierarchicalViewResultDataResult: $D.Framework.Design.Report.Service.Comunication.GridViewResultData };

	GetHierarchicalViewResultDataPromise(reportViewContextId: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, selectionParams: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], parentId: string, pageIndex: number, expandedRows: string[]): Promise<$D.Framework.Design.Report.Service.Comunication.GridViewResultData>;

	GetReportViewContextById(reportViewContextId: string, successCallback: (data: { GetReportViewContextByIdResult: $D.Framework.Design.Report.Service.Comunication.ReportViewContext }) => any, errorCallback?: () => any): JQueryPromise<{ GetReportViewContextByIdResult: $D.Framework.Design.Report.Service.Comunication.ReportViewContext }>;

	GetReportViewContextById(reportViewContextId: string): { GetReportViewContextByIdResult: $D.Framework.Design.Report.Service.Comunication.ReportViewContext };

	GetReportViewContextByIdPromise(reportViewContextId: string): Promise<$D.Framework.Design.Report.Service.Comunication.ReportViewContext>;

	GetReportViewData(reportViewContextId: string, pageIndex: number, textOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType, successCallback: (data: { GetReportViewDataResult: $D.Framework.Design.Report.Service.Comunication.ReportViewContext }) => any, errorCallback?: () => any): JQueryPromise<{ GetReportViewDataResult: $D.Framework.Design.Report.Service.Comunication.ReportViewContext }>;

	GetReportViewData(reportViewContextId: string, pageIndex: number, textOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType): { GetReportViewDataResult: $D.Framework.Design.Report.Service.Comunication.ReportViewContext };

	GetReportViewDataPromise(reportViewContextId: string, pageIndex: number, textOutputType: $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType): Promise<$D.Framework.Design.Report.Service.Comunication.ReportViewContext>;

	GetGridViewConfiguration(reportViewContextId: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, pageIndex: number, successCallback: (data: { GetGridViewConfigurationResult: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration }) => any, errorCallback?: () => any): JQueryPromise<{ GetGridViewConfigurationResult: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration }>;

	GetGridViewConfiguration(reportViewContextId: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, pageIndex: number): { GetGridViewConfigurationResult: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration };

	GetGridViewConfigurationPromise(reportViewContextId: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, pageIndex: number): Promise<$D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration>;

	GetDrillDownGridViewConfiguration(reportViewContextId: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, pageIndex: number, successCallback: (data: { GetDrillDownGridViewConfigurationResult: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration }) => any, errorCallback?: () => any): JQueryPromise<{ GetDrillDownGridViewConfigurationResult: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration }>;

	GetDrillDownGridViewConfiguration(reportViewContextId: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, pageIndex: number): { GetDrillDownGridViewConfigurationResult: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration };

	GetDrillDownGridViewConfigurationPromise(reportViewContextId: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, pageIndex: number): Promise<$D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration>;

	UpdateReportViewConfiguration(reportViewContextId: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration, successCallback: (data: { UpdateReportViewConfigurationResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateReportViewConfigurationResult: void }>;

	UpdateReportViewConfiguration(reportViewContextId: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration): { UpdateReportViewConfigurationResult: void };

	UpdateReportViewConfigurationPromise(reportViewContextId: string, configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration): Promise<void>;

	IsReportViewContextCacheOwner(reportViewContextId: string, successCallback: (data: { IsReportViewContextCacheOwnerResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ IsReportViewContextCacheOwnerResult: boolean }>;

	IsReportViewContextCacheOwner(reportViewContextId: string): { IsReportViewContextCacheOwnerResult: boolean };

	IsReportViewContextCacheOwnerPromise(reportViewContextId: string): Promise<boolean>;

	RemoveReportViewContextOwner(reportViewContextId: string, successCallback: (data: { RemoveReportViewContextOwnerResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveReportViewContextOwnerResult: boolean }>;

	RemoveReportViewContextOwner(reportViewContextId: string): { RemoveReportViewContextOwnerResult: boolean };

	RemoveReportViewContextOwnerPromise(reportViewContextId: string): Promise<boolean>;

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
	ReportViewService(): ReportViewServiceStatic;
}
