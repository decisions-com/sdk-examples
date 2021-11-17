/// <reference path="./datatypes._base.d.ts" />

interface BusinessMetricServiceStatic {

	GetBusinessMetricData(category: string, subCategory: string, metricName: string, dateRange: $D.Framework.Design.Flow.CoreSteps.Metro.ReportDateRange, successCallback: (data: { GetBusinessMetricDataResult: $D.Framework.ServiceLayer.Services.Statistics.BusinessMetricData }) => any, errorCallback?: () => any): JQueryPromise<{ GetBusinessMetricDataResult: $D.Framework.ServiceLayer.Services.Statistics.BusinessMetricData }>;

	GetBusinessMetricData(category: string, subCategory: string, metricName: string, dateRange: $D.Framework.Design.Flow.CoreSteps.Metro.ReportDateRange): { GetBusinessMetricDataResult: $D.Framework.ServiceLayer.Services.Statistics.BusinessMetricData };

	GetBusinessMetricDataPromise(category: string, subCategory: string, metricName: string, dateRange: $D.Framework.Design.Flow.CoreSteps.Metro.ReportDateRange): Promise<$D.Framework.ServiceLayer.Services.Statistics.BusinessMetricData>;

	GetBusinessMetricDataById(metricId: string, dateRange: $D.Framework.Design.Flow.CoreSteps.Metro.ReportDateRange, successCallback: (data: { GetBusinessMetricDataByIdResult: $D.Framework.ServiceLayer.Services.Statistics.BusinessMetricData }) => any, errorCallback?: () => any): JQueryPromise<{ GetBusinessMetricDataByIdResult: $D.Framework.ServiceLayer.Services.Statistics.BusinessMetricData }>;

	GetBusinessMetricDataById(metricId: string, dateRange: $D.Framework.Design.Flow.CoreSteps.Metro.ReportDateRange): { GetBusinessMetricDataByIdResult: $D.Framework.ServiceLayer.Services.Statistics.BusinessMetricData };

	GetBusinessMetricDataByIdPromise(metricId: string, dateRange: $D.Framework.Design.Flow.CoreSteps.Metro.ReportDateRange): Promise<$D.Framework.ServiceLayer.Services.Statistics.BusinessMetricData>;

	GetBusinessModelDisplayData(executionData: any, successCallback: (data: { GetBusinessModelDisplayDataResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetBusinessModelDisplayDataResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	GetBusinessModelDisplayData(executionData: any): { GetBusinessModelDisplayDataResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	GetBusinessModelDisplayDataPromise(executionData: any): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	GetFormBusinessModelDisplayData(executionData: any, successCallback: (data: { GetFormBusinessModelDisplayDataResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetFormBusinessModelDisplayDataResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	GetFormBusinessModelDisplayData(executionData: any): { GetFormBusinessModelDisplayDataResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	GetFormBusinessModelDisplayDataPromise(executionData: any): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;
}

interface ServicesStatic {
	BusinessMetricService(): BusinessMetricServiceStatic;
}
