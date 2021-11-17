/// <reference path="./datatypes._base.d.ts" />

interface DBQueryServiceStatic {

	GetConnectionStrings(successCallback: (data: { GetConnectionStringsResult: $D.Framework.ServiceLayer.Services.DBQuery.ConnectionString[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetConnectionStringsResult: $D.Framework.ServiceLayer.Services.DBQuery.ConnectionString[] }>;

	GetConnectionStrings(): { GetConnectionStringsResult: $D.Framework.ServiceLayer.Services.DBQuery.ConnectionString[] };

	GetConnectionStringsPromise(): Promise<$D.Framework.ServiceLayer.Services.DBQuery.ConnectionString[]>;

	UpdateQuery(query: $D.Framework.ServiceLayer.Services.DBQuery.DatabaseQueryDto, successCallback: (data: { UpdateQueryResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateQueryResult: void }>;

	UpdateQuery(query: $D.Framework.ServiceLayer.Services.DBQuery.DatabaseQueryDto): { UpdateQueryResult: void };

	UpdateQueryPromise(query: $D.Framework.ServiceLayer.Services.DBQuery.DatabaseQueryDto): Promise<void>;

	AddNewQuery(query: $D.Framework.ServiceLayer.Services.DBQuery.DatabaseQueryDto, successCallback: (data: { AddNewQueryResult: $D.Framework.ServiceLayer.Services.DBQuery.DatabaseQueryDto }) => any, errorCallback?: () => any): JQueryPromise<{ AddNewQueryResult: $D.Framework.ServiceLayer.Services.DBQuery.DatabaseQueryDto }>;

	AddNewQuery(query: $D.Framework.ServiceLayer.Services.DBQuery.DatabaseQueryDto): { AddNewQueryResult: $D.Framework.ServiceLayer.Services.DBQuery.DatabaseQueryDto };

	AddNewQueryPromise(query: $D.Framework.ServiceLayer.Services.DBQuery.DatabaseQueryDto): Promise<$D.Framework.ServiceLayer.Services.DBQuery.DatabaseQueryDto>;

	GetSavedQueryList(successCallback: (data: { GetSavedQueryListResult: $D.Framework.ServiceLayer.Services.DBQuery.DatabaseQueryDto[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetSavedQueryListResult: $D.Framework.ServiceLayer.Services.DBQuery.DatabaseQueryDto[] }>;

	GetSavedQueryList(): { GetSavedQueryListResult: $D.Framework.ServiceLayer.Services.DBQuery.DatabaseQueryDto[] };

	GetSavedQueryListPromise(): Promise<$D.Framework.ServiceLayer.Services.DBQuery.DatabaseQueryDto[]>;

	GetTables(connectionStringId: string, successCallback: (data: { GetTablesResult: $D.Framework.ServiceLayer.Services.DBQuery.Table[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetTablesResult: $D.Framework.ServiceLayer.Services.DBQuery.Table[] }>;

	GetTables(connectionStringId: string): { GetTablesResult: $D.Framework.ServiceLayer.Services.DBQuery.Table[] };

	GetTablesPromise(connectionStringId: string): Promise<$D.Framework.ServiceLayer.Services.DBQuery.Table[]>;

	GetViews(connectionStringId: string, successCallback: (data: { GetViewsResult: $D.Framework.ServiceLayer.Services.DBQuery.Table[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetViewsResult: $D.Framework.ServiceLayer.Services.DBQuery.Table[] }>;

	GetViews(connectionStringId: string): { GetViewsResult: $D.Framework.ServiceLayer.Services.DBQuery.Table[] };

	GetViewsPromise(connectionStringId: string): Promise<$D.Framework.ServiceLayer.Services.DBQuery.Table[]>;

	RunQuery(param: $D.Framework.ServiceLayer.Services.DBQuery.RunQueryParams, successCallback: (data: { RunQueryResult: $D.Framework.ServiceLayer.Services.DBQuery.RunQueryResultsDto }) => any, errorCallback?: () => any): JQueryPromise<{ RunQueryResult: $D.Framework.ServiceLayer.Services.DBQuery.RunQueryResultsDto }>;

	RunQuery(param: $D.Framework.ServiceLayer.Services.DBQuery.RunQueryParams): { RunQueryResult: $D.Framework.ServiceLayer.Services.DBQuery.RunQueryResultsDto };

	RunQueryPromise(param: $D.Framework.ServiceLayer.Services.DBQuery.RunQueryParams): Promise<$D.Framework.ServiceLayer.Services.DBQuery.RunQueryResultsDto>;

	GetQueryResults(queryId: string, successCallback: (data: { GetQueryResultsResult: $D.Framework.ServiceLayer.Services.DBQuery.SqlQueryDto }) => any, errorCallback?: () => any): JQueryPromise<{ GetQueryResultsResult: $D.Framework.ServiceLayer.Services.DBQuery.SqlQueryDto }>;

	GetQueryResults(queryId: string): { GetQueryResultsResult: $D.Framework.ServiceLayer.Services.DBQuery.SqlQueryDto };

	GetQueryResultsPromise(queryId: string): Promise<$D.Framework.ServiceLayer.Services.DBQuery.SqlQueryDto>;

	GetResultsPage(queryId: string, pageNumber: number, pageSize: number, successCallback: (data: { GetResultsPageResult: $D.Framework.ServiceLayer.Services.DBQuery.Page }) => any, errorCallback?: () => any): JQueryPromise<{ GetResultsPageResult: $D.Framework.ServiceLayer.Services.DBQuery.Page }>;

	GetResultsPage(queryId: string, pageNumber: number, pageSize: number): { GetResultsPageResult: $D.Framework.ServiceLayer.Services.DBQuery.Page };

	GetResultsPagePromise(queryId: string, pageNumber: number, pageSize: number): Promise<$D.Framework.ServiceLayer.Services.DBQuery.Page>;

	CancelQuery(queryId: string, successCallback: (data: { CancelQueryResult: $D.Framework.ServiceLayer.Services.DBQuery.SqlQueryDto }) => any, errorCallback?: () => any): JQueryPromise<{ CancelQueryResult: $D.Framework.ServiceLayer.Services.DBQuery.SqlQueryDto }>;

	CancelQuery(queryId: string): { CancelQueryResult: $D.Framework.ServiceLayer.Services.DBQuery.SqlQueryDto };

	CancelQueryPromise(queryId: string): Promise<$D.Framework.ServiceLayer.Services.DBQuery.SqlQueryDto>;

	DownloadAsCsv(queryId: string, name: string, successCallback: (data: { DownloadAsCsvResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ DownloadAsCsvResult: any }>;

	DownloadAsCsv(queryId: string, name: string): { DownloadAsCsvResult: any };

	DownloadAsCsvPromise(queryId: string, name: string): Promise<any>;

	GetByID(id: string, successCallback: (data: { GetByIDResult: $D.Framework.ServiceLayer.Services.DBQuery.DatabaseQueryDto }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDResult: $D.Framework.ServiceLayer.Services.DBQuery.DatabaseQueryDto }>;

	GetByID(id: string): { GetByIDResult: $D.Framework.ServiceLayer.Services.DBQuery.DatabaseQueryDto };

	GetByIDPromise(id: string): Promise<$D.Framework.ServiceLayer.Services.DBQuery.DatabaseQueryDto>;

	GetRecents(successCallback: (data: { GetRecentsResult: $D.Framework.ServiceLayer.Services.DBQuery.DatabaseQueryDto[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetRecentsResult: $D.Framework.ServiceLayer.Services.DBQuery.DatabaseQueryDto[] }>;

	GetRecents(): { GetRecentsResult: $D.Framework.ServiceLayer.Services.DBQuery.DatabaseQueryDto[] };

	GetRecentsPromise(): Promise<$D.Framework.ServiceLayer.Services.DBQuery.DatabaseQueryDto[]>;

	ContainsResult(id: string, successCallback: (data: { ContainsResultResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ ContainsResultResult: boolean }>;

	ContainsResult(id: string): { ContainsResultResult: boolean };

	ContainsResultPromise(id: string): Promise<boolean>;

	Exists(id: string, successCallback: (data: { ExistsResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ ExistsResult: boolean }>;

	Exists(id: string): { ExistsResult: boolean };

	ExistsPromise(id: string): Promise<boolean>;

	GetByFolderID(folderID: string, successCallback: (data: { GetByFolderIDResult: any[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByFolderIDResult: any[] }>;

	GetByFolderID(folderID: string): { GetByFolderIDResult: any[] };

	GetByFolderIDPromise(folderID: string): Promise<any[]>;

	GetByIDs(ids: string[], successCallback: (data: { GetByIDsResult: any[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDsResult: any[] }>;

	GetByIDs(ids: string[]): { GetByIDsResult: any[] };

	GetByIDsPromise(ids: string[]): Promise<any[]>;

	GetAll(successCallback: (data: { GetAllResult: any[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllResult: any[] }>;

	GetAll(): { GetAllResult: any[] };

	GetAllPromise(): Promise<any[]>;

	Save(entity: any, successCallback: (data: { SaveResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveResult: void }>;

	Save(entity: any): { SaveResult: void };

	SavePromise(entity: any): Promise<void>;

	Delete(id: string, successCallback: (data: { DeleteResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteResult: void }>;

	Delete(id: string): { DeleteResult: void };

	DeletePromise(id: string): Promise<void>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType, successCallback: (data: { SearchResult: any[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchResult: any[] }>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): { SearchResult: any[] };

	SearchPromise(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): Promise<any[]>;

	SaveList(entities: any[], successCallback: (data: { SaveListResult: any[] }) => any, errorCallback?: () => any): JQueryPromise<{ SaveListResult: any[] }>;

	SaveList(entities: any[]): { SaveListResult: any[] };

	SaveListPromise(entities: any[]): Promise<any[]>;

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
	DBQueryService(): DBQueryServiceStatic;
}
