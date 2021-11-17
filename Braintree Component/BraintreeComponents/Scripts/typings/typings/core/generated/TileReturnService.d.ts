/// <reference path="./datatypes._base.d.ts" />

interface TileReturnServiceStatic {

	GetTileDataForMetrics(metrics: string[], folderId: string, reportDateRange: $D.Framework.Design.Flow.CoreSteps.Metro.ReportDateRange, overrideTileHandlerName: string, successCallback: (data: { GetTileDataForMetricsResult: $D.Framework.Design.Flow.CoreSteps.Metro.AbstractTileReturn[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetTileDataForMetricsResult: $D.Framework.Design.Flow.CoreSteps.Metro.AbstractTileReturn[] }>;

	GetTileDataForMetrics(metrics: string[], folderId: string, reportDateRange: $D.Framework.Design.Flow.CoreSteps.Metro.ReportDateRange, overrideTileHandlerName: string): { GetTileDataForMetricsResult: $D.Framework.Design.Flow.CoreSteps.Metro.AbstractTileReturn[] };

	GetTileDataForMetricsPromise(metrics: string[], folderId: string, reportDateRange: $D.Framework.Design.Flow.CoreSteps.Metro.ReportDateRange, overrideTileHandlerName: string): Promise<$D.Framework.Design.Flow.CoreSteps.Metro.AbstractTileReturn[]>;

	GetTileDataForBusinessFlow(folderId: string, reportDateRange: $D.Framework.Design.Flow.CoreSteps.Metro.ReportDateRange, businessFlowId: string, overrideTileHandlerName: string, successCallback: (data: { GetTileDataForBusinessFlowResult: $D.Framework.Design.Flow.CoreSteps.Metro.TileReturn[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetTileDataForBusinessFlowResult: $D.Framework.Design.Flow.CoreSteps.Metro.TileReturn[] }>;

	GetTileDataForBusinessFlow(folderId: string, reportDateRange: $D.Framework.Design.Flow.CoreSteps.Metro.ReportDateRange, businessFlowId: string, overrideTileHandlerName: string): { GetTileDataForBusinessFlowResult: $D.Framework.Design.Flow.CoreSteps.Metro.TileReturn[] };

	GetTileDataForBusinessFlowPromise(folderId: string, reportDateRange: $D.Framework.Design.Flow.CoreSteps.Metro.ReportDateRange, businessFlowId: string, overrideTileHandlerName: string): Promise<$D.Framework.Design.Flow.CoreSteps.Metro.TileReturn[]>;

	GetTileData(metricId: string, folderId: string, reportDateRange: $D.Framework.Design.Flow.CoreSteps.Metro.ReportDateRange, overrideTileHandlerName: string, successCallback: (data: { GetTileDataResult: $D.Framework.Design.Flow.CoreSteps.Metro.AbstractTileReturn[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetTileDataResult: $D.Framework.Design.Flow.CoreSteps.Metro.AbstractTileReturn[] }>;

	GetTileData(metricId: string, folderId: string, reportDateRange: $D.Framework.Design.Flow.CoreSteps.Metro.ReportDateRange, overrideTileHandlerName: string): { GetTileDataResult: $D.Framework.Design.Flow.CoreSteps.Metro.AbstractTileReturn[] };

	GetTileDataPromise(metricId: string, folderId: string, reportDateRange: $D.Framework.Design.Flow.CoreSteps.Metro.ReportDateRange, overrideTileHandlerName: string): Promise<$D.Framework.Design.Flow.CoreSteps.Metro.AbstractTileReturn[]>;

	GetTileHandlerNames(successCallback: (data: { GetTileHandlerNamesResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetTileHandlerNamesResult: string[] }>;

	GetTileHandlerNames(): { GetTileHandlerNamesResult: string[] };

	GetTileHandlerNamesPromise(): Promise<string[]>;
}

interface ServicesStatic {
	TileReturnService(): TileReturnServiceStatic;
}
