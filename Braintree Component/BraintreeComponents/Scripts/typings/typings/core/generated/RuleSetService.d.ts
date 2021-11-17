/// <reference path="./datatypes._base.d.ts" />

interface RuleSetServiceStatic {

	GetAllResults(resultFolderId: string, successCallback: (data: { GetAllResultsResult: any[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllResultsResult: any[] }>;

	GetAllResults(resultFolderId: string): { GetAllResultsResult: any[] };

	GetAllResultsPromise(resultFolderId: string): Promise<any[]>;

	GetInterceptedResults(resultFolderId: string, successCallback: (data: { GetInterceptedResultsResult: any[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetInterceptedResultsResult: any[] }>;

	GetInterceptedResults(resultFolderId: string): { GetInterceptedResultsResult: any[] };

	GetInterceptedResultsPromise(resultFolderId: string): Promise<any[]>;

	GetLatestResult(resultFolderId: string, successCallback: (data: { GetLatestResultResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ GetLatestResultResult: any }>;

	GetLatestResult(resultFolderId: string): { GetLatestResultResult: any };

	GetLatestResultPromise(resultFolderId: string): Promise<any>;
}

interface ServicesStatic {
	RuleSetService(): RuleSetServiceStatic;
}
