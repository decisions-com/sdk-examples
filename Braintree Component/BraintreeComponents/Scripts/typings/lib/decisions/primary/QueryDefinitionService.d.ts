/// <reference path="./datatypes._base.d.ts" />

interface QueryDefinitionServiceStatic {

	GetRequestStatus(requestId: string, successCallback: (data: { GetRequestStatusResult: $D.Framework.ServiceLayer.RequestStatus }) => any, errorCallback?: () => any): JQueryPromise<{ GetRequestStatusResult: $D.Framework.ServiceLayer.RequestStatus }>;

	GetRequestStatus(requestId: string): { GetRequestStatusResult: $D.Framework.ServiceLayer.RequestStatus };

	GetRequestStatusPromise(requestId: string): Promise<$D.Framework.ServiceLayer.RequestStatus>;

	GetRequestStatusWithTimeout(requestId: string, maxTime: string, successCallback: (data: { GetRequestStatusWithTimeoutResult: $D.Framework.ServiceLayer.RequestStatus }) => any, errorCallback?: () => any): JQueryPromise<{ GetRequestStatusWithTimeoutResult: $D.Framework.ServiceLayer.RequestStatus }>;

	GetRequestStatusWithTimeout(requestId: string, maxTime: string): { GetRequestStatusWithTimeoutResult: $D.Framework.ServiceLayer.RequestStatus };

	GetRequestStatusWithTimeoutPromise(requestId: string, maxTime: string): Promise<$D.Framework.ServiceLayer.RequestStatus>;

	GetRequestError(requestId: string, successCallback: (data: { GetRequestErrorResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetRequestErrorResult: string }>;

	GetRequestError(requestId: string): { GetRequestErrorResult: string };

	GetRequestErrorPromise(requestId: string): Promise<string>;

	GetQueries(databaseId: string, successCallback: (data: { GetQueriesResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseQueryDefinition[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetQueriesResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseQueryDefinition[] }>;

	GetQueries(databaseId: string): { GetQueriesResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseQueryDefinition[] };

	GetQueriesPromise(databaseId: string): Promise<$D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseQueryDefinition[]>;

	AddQuery(folderId: string, query: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseQueryDefinition, preview: $D.Framework.Data.DataTypes.QueryPreview, successCallback: (data: { AddQueryResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddQueryResult: void }>;

	AddQuery(folderId: string, query: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseQueryDefinition, preview: $D.Framework.Data.DataTypes.QueryPreview): { AddQueryResult: void };

	AddQueryPromise(folderId: string, query: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseQueryDefinition, preview: $D.Framework.Data.DataTypes.QueryPreview): Promise<void>;

	UpdateQuery(query: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseQueryDefinition, preview: $D.Framework.Data.DataTypes.QueryPreview, successCallback: (data: { UpdateQueryResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateQueryResult: void }>;

	UpdateQuery(query: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseQueryDefinition, preview: $D.Framework.Data.DataTypes.QueryPreview): { UpdateQueryResult: void };

	UpdateQueryPromise(query: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseQueryDefinition, preview: $D.Framework.Data.DataTypes.QueryPreview): Promise<void>;

	RunQuerySync(type: $D.Framework.ServiceLayer.DataBaseTypeEnum, connectionString: string, query: string, parameters: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], agentId: string, databaseFolderId: string, successCallback: (data: { RunQuerySyncResult: number }) => any, errorCallback?: () => any): JQueryPromise<{ RunQuerySyncResult: number }>;

	RunQuerySync(type: $D.Framework.ServiceLayer.DataBaseTypeEnum, connectionString: string, query: string, parameters: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], agentId: string, databaseFolderId: string): { RunQuerySyncResult: number };

	RunQuerySyncPromise(type: $D.Framework.ServiceLayer.DataBaseTypeEnum, connectionString: string, query: string, parameters: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], agentId: string, databaseFolderId: string): Promise<number>;

	StartRunQuery(type: $D.Framework.ServiceLayer.DataBaseTypeEnum, connectionString: string, query: string, parameters: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], agentId: string, databaseFolderId: string, successCallback: (data: { StartRunQueryResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ StartRunQueryResult: string }>;

	StartRunQuery(type: $D.Framework.ServiceLayer.DataBaseTypeEnum, connectionString: string, query: string, parameters: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], agentId: string, databaseFolderId: string): { StartRunQueryResult: string };

	StartRunQueryPromise(type: $D.Framework.ServiceLayer.DataBaseTypeEnum, connectionString: string, query: string, parameters: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], agentId: string, databaseFolderId: string): Promise<string>;

	GetRunQueryResult(requestId: string, successCallback: (data: { GetRunQueryResultResult: number }) => any, errorCallback?: () => any): JQueryPromise<{ GetRunQueryResultResult: number }>;

	GetRunQueryResult(requestId: string): { GetRunQueryResultResult: number };

	GetRunQueryResultPromise(requestId: string): Promise<number>;

	RunQueryForCountSync(type: $D.Framework.ServiceLayer.DataBaseTypeEnum, connectionString: string, query: string, parameters: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], agentId: string, databaseFolderId: string, successCallback: (data: { RunQueryForCountSyncResult: number }) => any, errorCallback?: () => any): JQueryPromise<{ RunQueryForCountSyncResult: number }>;

	RunQueryForCountSync(type: $D.Framework.ServiceLayer.DataBaseTypeEnum, connectionString: string, query: string, parameters: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], agentId: string, databaseFolderId: string): { RunQueryForCountSyncResult: number };

	RunQueryForCountSyncPromise(type: $D.Framework.ServiceLayer.DataBaseTypeEnum, connectionString: string, query: string, parameters: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], agentId: string, databaseFolderId: string): Promise<number>;

	StartRunQueryForCount(type: $D.Framework.ServiceLayer.DataBaseTypeEnum, connectionString: string, query: string, parameters: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], agentId: string, databaseFolderId: string, successCallback: (data: { StartRunQueryForCountResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ StartRunQueryForCountResult: string }>;

	StartRunQueryForCount(type: $D.Framework.ServiceLayer.DataBaseTypeEnum, connectionString: string, query: string, parameters: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], agentId: string, databaseFolderId: string): { StartRunQueryForCountResult: string };

	StartRunQueryForCountPromise(type: $D.Framework.ServiceLayer.DataBaseTypeEnum, connectionString: string, query: string, parameters: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], agentId: string, databaseFolderId: string): Promise<string>;

	GetRunQueryForCountResult(requestId: string, successCallback: (data: { GetRunQueryForCountResultResult: number }) => any, errorCallback?: () => any): JQueryPromise<{ GetRunQueryForCountResultResult: number }>;

	GetRunQueryForCountResult(requestId: string): { GetRunQueryForCountResultResult: number };

	GetRunQueryForCountResultPromise(requestId: string): Promise<number>;

	RunQueryForResultsSync(type: $D.Framework.ServiceLayer.DataBaseTypeEnum, connectionString: string, query: string, parameters: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], limit: any, agentId: string, databaseFolderId: string, successCallback: (data: { RunQueryForResultsSyncResult: $D.Framework.Data.DataTypes.QueryPreview }) => any, errorCallback?: () => any): JQueryPromise<{ RunQueryForResultsSyncResult: $D.Framework.Data.DataTypes.QueryPreview }>;

	RunQueryForResultsSync(type: $D.Framework.ServiceLayer.DataBaseTypeEnum, connectionString: string, query: string, parameters: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], limit: any, agentId: string, databaseFolderId: string): { RunQueryForResultsSyncResult: $D.Framework.Data.DataTypes.QueryPreview };

	RunQueryForResultsSyncPromise(type: $D.Framework.ServiceLayer.DataBaseTypeEnum, connectionString: string, query: string, parameters: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], limit: any, agentId: string, databaseFolderId: string): Promise<$D.Framework.Data.DataTypes.QueryPreview>;

	StartRunQueryForResults(type: $D.Framework.ServiceLayer.DataBaseTypeEnum, connectionString: string, query: string, parameters: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], limit: any, agentId: string, databaseFolderId: string, successCallback: (data: { StartRunQueryForResultsResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ StartRunQueryForResultsResult: string }>;

	StartRunQueryForResults(type: $D.Framework.ServiceLayer.DataBaseTypeEnum, connectionString: string, query: string, parameters: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], limit: any, agentId: string, databaseFolderId: string): { StartRunQueryForResultsResult: string };

	StartRunQueryForResultsPromise(type: $D.Framework.ServiceLayer.DataBaseTypeEnum, connectionString: string, query: string, parameters: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], limit: any, agentId: string, databaseFolderId: string): Promise<string>;

	GetRunQueryForResultsResult(requestId: string, successCallback: (data: { GetRunQueryForResultsResultResult: $D.Framework.Data.DataTypes.QueryPreview }) => any, errorCallback?: () => any): JQueryPromise<{ GetRunQueryForResultsResultResult: $D.Framework.Data.DataTypes.QueryPreview }>;

	GetRunQueryForResultsResult(requestId: string): { GetRunQueryForResultsResultResult: $D.Framework.Data.DataTypes.QueryPreview };

	GetRunQueryForResultsResultPromise(requestId: string): Promise<$D.Framework.Data.DataTypes.QueryPreview>;

	RunNoReturnSqlStatementSync(type: $D.Framework.ServiceLayer.DataBaseTypeEnum, connectionString: string, statement: any, agentId: string, databaseFolderId: string, successCallback: (data: { RunNoReturnSqlStatementSyncResult: number }) => any, errorCallback?: () => any): JQueryPromise<{ RunNoReturnSqlStatementSyncResult: number }>;

	RunNoReturnSqlStatementSync(type: $D.Framework.ServiceLayer.DataBaseTypeEnum, connectionString: string, statement: any, agentId: string, databaseFolderId: string): { RunNoReturnSqlStatementSyncResult: number };

	RunNoReturnSqlStatementSyncPromise(type: $D.Framework.ServiceLayer.DataBaseTypeEnum, connectionString: string, statement: any, agentId: string, databaseFolderId: string): Promise<number>;

	StartRunNoReturnSqlStatement(type: $D.Framework.ServiceLayer.DataBaseTypeEnum, connectionString: string, statement: any, agentId: string, databaseFolderId: string, successCallback: (data: { StartRunNoReturnSqlStatementResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ StartRunNoReturnSqlStatementResult: string }>;

	StartRunNoReturnSqlStatement(type: $D.Framework.ServiceLayer.DataBaseTypeEnum, connectionString: string, statement: any, agentId: string, databaseFolderId: string): { StartRunNoReturnSqlStatementResult: string };

	StartRunNoReturnSqlStatementPromise(type: $D.Framework.ServiceLayer.DataBaseTypeEnum, connectionString: string, statement: any, agentId: string, databaseFolderId: string): Promise<string>;

	GetRunNoReturnSqlStatementResult(requestId: string, successCallback: (data: { GetRunNoReturnSqlStatementResultResult: number }) => any, errorCallback?: () => any): JQueryPromise<{ GetRunNoReturnSqlStatementResultResult: number }>;

	GetRunNoReturnSqlStatementResult(requestId: string): { GetRunNoReturnSqlStatementResultResult: number };

	GetRunNoReturnSqlStatementResultPromise(requestId: string): Promise<number>;

	RunReturnSetSQLStatementSync(type: $D.Framework.ServiceLayer.DataBaseTypeEnum, connectionString: string, statement: any, agentId: string, databaseFolderId: string, successCallback: (data: { RunReturnSetSQLStatementSyncResult: $D.Framework.Data.DataTypes.QueryPreview }) => any, errorCallback?: () => any): JQueryPromise<{ RunReturnSetSQLStatementSyncResult: $D.Framework.Data.DataTypes.QueryPreview }>;

	RunReturnSetSQLStatementSync(type: $D.Framework.ServiceLayer.DataBaseTypeEnum, connectionString: string, statement: any, agentId: string, databaseFolderId: string): { RunReturnSetSQLStatementSyncResult: $D.Framework.Data.DataTypes.QueryPreview };

	RunReturnSetSQLStatementSyncPromise(type: $D.Framework.ServiceLayer.DataBaseTypeEnum, connectionString: string, statement: any, agentId: string, databaseFolderId: string): Promise<$D.Framework.Data.DataTypes.QueryPreview>;

	StartRunReturnSetSQLStatement(type: $D.Framework.ServiceLayer.DataBaseTypeEnum, connectionString: string, statement: any, agentId: string, databaseFolderId: string, successCallback: (data: { StartRunReturnSetSQLStatementResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ StartRunReturnSetSQLStatementResult: string }>;

	StartRunReturnSetSQLStatement(type: $D.Framework.ServiceLayer.DataBaseTypeEnum, connectionString: string, statement: any, agentId: string, databaseFolderId: string): { StartRunReturnSetSQLStatementResult: string };

	StartRunReturnSetSQLStatementPromise(type: $D.Framework.ServiceLayer.DataBaseTypeEnum, connectionString: string, statement: any, agentId: string, databaseFolderId: string): Promise<string>;

	GetRunReturnSetSQLStatementResult(requestId: string, successCallback: (data: { GetRunReturnSetSQLStatementResultResult: $D.Framework.Data.DataTypes.QueryPreview }) => any, errorCallback?: () => any): JQueryPromise<{ GetRunReturnSetSQLStatementResultResult: $D.Framework.Data.DataTypes.QueryPreview }>;

	GetRunReturnSetSQLStatementResult(requestId: string): { GetRunReturnSetSQLStatementResultResult: $D.Framework.Data.DataTypes.QueryPreview };

	GetRunReturnSetSQLStatementResultPromise(requestId: string): Promise<$D.Framework.Data.DataTypes.QueryPreview>;

	RunReturnCountSQLStatementSync(type: $D.Framework.ServiceLayer.DataBaseTypeEnum, connectionString: string, statement: any, agentId: string, databaseFolderId: string, successCallback: (data: { RunReturnCountSQLStatementSyncResult: number }) => any, errorCallback?: () => any): JQueryPromise<{ RunReturnCountSQLStatementSyncResult: number }>;

	RunReturnCountSQLStatementSync(type: $D.Framework.ServiceLayer.DataBaseTypeEnum, connectionString: string, statement: any, agentId: string, databaseFolderId: string): { RunReturnCountSQLStatementSyncResult: number };

	RunReturnCountSQLStatementSyncPromise(type: $D.Framework.ServiceLayer.DataBaseTypeEnum, connectionString: string, statement: any, agentId: string, databaseFolderId: string): Promise<number>;

	StartRunReturnCountSQLStatement(type: $D.Framework.ServiceLayer.DataBaseTypeEnum, connectionString: string, statement: any, agentId: string, databaseFolderId: string, successCallback: (data: { StartRunReturnCountSQLStatementResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ StartRunReturnCountSQLStatementResult: string }>;

	StartRunReturnCountSQLStatement(type: $D.Framework.ServiceLayer.DataBaseTypeEnum, connectionString: string, statement: any, agentId: string, databaseFolderId: string): { StartRunReturnCountSQLStatementResult: string };

	StartRunReturnCountSQLStatementPromise(type: $D.Framework.ServiceLayer.DataBaseTypeEnum, connectionString: string, statement: any, agentId: string, databaseFolderId: string): Promise<string>;

	GetRunReturnCountSQLStatementResult(requestId: string, successCallback: (data: { GetRunReturnCountSQLStatementResultResult: number }) => any, errorCallback?: () => any): JQueryPromise<{ GetRunReturnCountSQLStatementResultResult: number }>;

	GetRunReturnCountSQLStatementResult(requestId: string): { GetRunReturnCountSQLStatementResultResult: number };

	GetRunReturnCountSQLStatementResultPromise(requestId: string): Promise<number>;

	RunInsertAndGetLastId(dbType: $D.Framework.ServiceLayer.DataBaseTypeEnum, connectionString: string, insertStatement: any, getLastId: $D.Framework.Data.ORMapper.SqlStatementCommand, agentId: string, databaseFolderId: string, successCallback: (data: { RunInsertAndGetLastIdResult: number }) => any, errorCallback?: () => any): JQueryPromise<{ RunInsertAndGetLastIdResult: number }>;

	RunInsertAndGetLastId(dbType: $D.Framework.ServiceLayer.DataBaseTypeEnum, connectionString: string, insertStatement: any, getLastId: $D.Framework.Data.ORMapper.SqlStatementCommand, agentId: string, databaseFolderId: string): { RunInsertAndGetLastIdResult: number };

	RunInsertAndGetLastIdPromise(dbType: $D.Framework.ServiceLayer.DataBaseTypeEnum, connectionString: string, insertStatement: any, getLastId: $D.Framework.Data.ORMapper.SqlStatementCommand, agentId: string, databaseFolderId: string): Promise<number>;

	GetPrefixVariable(databaseId: string, successCallback: (data: { GetPrefixVariableResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetPrefixVariableResult: string }>;

	GetPrefixVariable(databaseId: string): { GetPrefixVariableResult: string };

	GetPrefixVariablePromise(databaseId: string): Promise<string>;

	ExecuteQueryByContextId(contextId: string, limit: number, successCallback: (data: { ExecuteQueryByContextIdResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DefinitionServices.QueryResultsForPreview }) => any, errorCallback?: () => any): JQueryPromise<{ ExecuteQueryByContextIdResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DefinitionServices.QueryResultsForPreview }>;

	ExecuteQueryByContextId(contextId: string, limit: number): { ExecuteQueryByContextIdResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DefinitionServices.QueryResultsForPreview };

	ExecuteQueryByContextIdPromise(contextId: string, limit: number): Promise<$D.Framework.ServiceLayer.Services.DatabaseIntegration.DefinitionServices.QueryResultsForPreview>;

	GetQueryContextId(databaseId: string, successCallback: (data: { GetQueryContextIdResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetQueryContextIdResult: string }>;

	GetQueryContextId(databaseId: string): { GetQueryContextIdResult: string };

	GetQueryContextIdPromise(databaseId: string): Promise<string>;

	GetSessionUserContext(userId: string, password: string, successCallback: (data: { GetSessionUserContextResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext }) => any, errorCallback?: () => any): JQueryPromise<{ GetSessionUserContextResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext }>;

	GetSessionUserContext(userId: string, password: string): { GetSessionUserContextResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext };

	GetSessionUserContextPromise(userId: string, password: string): Promise<$D.Framework.ServiceLayer.Utilities.SessionUserContext>;

	GetPasswordUserContext(userId: string, password: string, successCallback: (data: { GetPasswordUserContextResult: $D.Framework.ServiceLayer.Utilities.PasswordCredentialsUserContext }) => any, errorCallback?: () => any): JQueryPromise<{ GetPasswordUserContextResult: $D.Framework.ServiceLayer.Utilities.PasswordCredentialsUserContext }>;

	GetPasswordUserContext(userId: string, password: string): { GetPasswordUserContextResult: $D.Framework.ServiceLayer.Utilities.PasswordCredentialsUserContext };

	GetPasswordUserContextPromise(userId: string, password: string): Promise<$D.Framework.ServiceLayer.Utilities.PasswordCredentialsUserContext>;

	GetGuestUserContext(successCallback: (data: { GetGuestUserContextResult: $D.Framework.ServiceLayer.Utilities.GuestUserContext }) => any, errorCallback?: () => any): JQueryPromise<{ GetGuestUserContextResult: $D.Framework.ServiceLayer.Utilities.GuestUserContext }>;

	GetGuestUserContext(): { GetGuestUserContextResult: $D.Framework.ServiceLayer.Utilities.GuestUserContext };

	GetGuestUserContextPromise(): Promise<$D.Framework.ServiceLayer.Utilities.GuestUserContext>;

	Exists(id: string, successCallback: (data: { ExistsResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ ExistsResult: boolean }>;

	Exists(id: string): { ExistsResult: boolean };

	ExistsPromise(id: string): Promise<boolean>;

	GetByFolderID(folderID: string, successCallback: (data: { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseQueryDefinition[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByFolderIDResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseQueryDefinition[] }>;

	GetByFolderID(folderID: string): { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseQueryDefinition[] };

	GetByFolderIDPromise(folderID: string): Promise<$D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseQueryDefinition[]>;

	GetByIDs(ids: string[], successCallback: (data: { GetByIDsResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseQueryDefinition[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDsResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseQueryDefinition[] }>;

	GetByIDs(ids: string[]): { GetByIDsResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseQueryDefinition[] };

	GetByIDsPromise(ids: string[]): Promise<$D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseQueryDefinition[]>;

	GetByID(id: string, successCallback: (data: { GetByIDResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseQueryDefinition }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseQueryDefinition }>;

	GetByID(id: string): { GetByIDResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseQueryDefinition };

	GetByIDPromise(id: string): Promise<$D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseQueryDefinition>;

	GetAll(successCallback: (data: { GetAllResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseQueryDefinition[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseQueryDefinition[] }>;

	GetAll(): { GetAllResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseQueryDefinition[] };

	GetAllPromise(): Promise<$D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseQueryDefinition[]>;

	Save(entity: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseQueryDefinition, successCallback: (data: { SaveResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveResult: void }>;

	Save(entity: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseQueryDefinition): { SaveResult: void };

	SavePromise(entity: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseQueryDefinition): Promise<void>;

	Delete(id: string, successCallback: (data: { DeleteResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteResult: void }>;

	Delete(id: string): { DeleteResult: void };

	DeletePromise(id: string): Promise<void>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType, successCallback: (data: { SearchResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseQueryDefinition[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseQueryDefinition[] }>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): { SearchResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseQueryDefinition[] };

	SearchPromise(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): Promise<$D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseQueryDefinition[]>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseQueryDefinition[], successCallback: (data: { SaveListResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseQueryDefinition[] }) => any, errorCallback?: () => any): JQueryPromise<{ SaveListResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseQueryDefinition[] }>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseQueryDefinition[]): { SaveListResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseQueryDefinition[] };

	SaveListPromise(entities: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseQueryDefinition[]): Promise<$D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseQueryDefinition[]>;
}

interface ServicesStatic {
	QueryDefinitionService(): QueryDefinitionServiceStatic;
}
