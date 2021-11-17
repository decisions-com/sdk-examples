/// <reference path="./datatypes._base.d.ts" />

interface DatabaseIntegrationServiceStatic {

	GetDatabaseSettingsContextId(successCallback: (data: { GetDatabaseSettingsContextIdResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetDatabaseSettingsContextIdResult: string }>;

	GetDatabaseSettingsContextId(): { GetDatabaseSettingsContextIdResult: string };

	GetDatabaseSettingsContextIdPromise(): Promise<string>;

	GetDatabaseSettingsContextIdByObjectId(objectId: string, successCallback: (data: { GetDatabaseSettingsContextIdByObjectIdResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetDatabaseSettingsContextIdByObjectIdResult: string }>;

	GetDatabaseSettingsContextIdByObjectId(objectId: string): { GetDatabaseSettingsContextIdByObjectIdResult: string };

	GetDatabaseSettingsContextIdByObjectIdPromise(objectId: string): Promise<string>;

	TestConnection(connectionContextId: string, successCallback: (data: { TestConnectionResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ TestConnectionResult: string }>;

	TestConnection(connectionContextId: string): { TestConnectionResult: string };

	TestConnectionPromise(connectionContextId: string): Promise<string>;

	GetDependentDefinitions(connectionContextId: string, successCallback: (data: { GetDependentDefinitionsResult: $D.Framework.Data.ORMapper.EntityHeaderData[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetDependentDefinitionsResult: $D.Framework.Data.ORMapper.EntityHeaderData[] }>;

	GetDependentDefinitions(connectionContextId: string): { GetDependentDefinitionsResult: $D.Framework.Data.ORMapper.EntityHeaderData[] };

	GetDependentDefinitionsPromise(connectionContextId: string): Promise<$D.Framework.Data.ORMapper.EntityHeaderData[]>;

	ReloadConnectionInfo(objectContextId: string, successCallback: (data: { ReloadConnectionInfoResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ReloadConnectionInfoResult: void }>;

	ReloadConnectionInfo(objectContextId: string): { ReloadConnectionInfoResult: void };

	ReloadConnectionInfoPromise(objectContextId: string): Promise<void>;

	GetDatabaseObjectContextIdByObectId(connectionContextId: string, objectId: string, successCallback: (data: { GetDatabaseObjectContextIdByObectIdResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetDatabaseObjectContextIdByObectIdResult: string }>;

	GetDatabaseObjectContextIdByObectId(connectionContextId: string, objectId: string): { GetDatabaseObjectContextIdByObectIdResult: string };

	GetDatabaseObjectContextIdByObectIdPromise(connectionContextId: string, objectId: string): Promise<string>;

	GetDatabaseObjectContextId(connectionContextId: string, folderId: string, objectType: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DefinitionServices.DatabaseObjectType, successCallback: (data: { GetDatabaseObjectContextIdResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetDatabaseObjectContextIdResult: string }>;

	GetDatabaseObjectContextId(connectionContextId: string, folderId: string, objectType: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DefinitionServices.DatabaseObjectType): { GetDatabaseObjectContextIdResult: string };

	GetDatabaseObjectContextIdPromise(connectionContextId: string, folderId: string, objectType: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DefinitionServices.DatabaseObjectType): Promise<string>;

	GetConnectionStringByContextId(connectionContextId: string, successCallback: (data: { GetConnectionStringByContextIdResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetConnectionStringByContextIdResult: string }>;

	GetConnectionStringByContextId(connectionContextId: string): { GetConnectionStringByContextIdResult: string };

	GetConnectionStringByContextIdPromise(connectionContextId: string): Promise<string>;

	GetConnectionByContextId(connectionContextId: string, successCallback: (data: { GetConnectionByContextIdResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseData }) => any, errorCallback?: () => any): JQueryPromise<{ GetConnectionByContextIdResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseData }>;

	GetConnectionByContextId(connectionContextId: string): { GetConnectionByContextIdResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseData };

	GetConnectionByContextIdPromise(connectionContextId: string): Promise<$D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseData>;

	UnRegisterContext(contextId: string, successCallback: (data: { UnRegisterContextResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UnRegisterContextResult: void }>;

	UnRegisterContext(contextId: string): { UnRegisterContextResult: void };

	UnRegisterContextPromise(contextId: string): Promise<void>;

	StoreDatabaseObjectFromContext(contextId: string, successCallback: (data: { StoreDatabaseObjectFromContextResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ StoreDatabaseObjectFromContextResult: void }>;

	StoreDatabaseObjectFromContext(contextId: string): { StoreDatabaseObjectFromContextResult: void };

	StoreDatabaseObjectFromContextPromise(contextId: string): Promise<void>;

	GetCreateConnectionContextId(successCallback: (data: { GetCreateConnectionContextIdResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetCreateConnectionContextIdResult: string }>;

	GetCreateConnectionContextId(): { GetCreateConnectionContextIdResult: string };

	GetCreateConnectionContextIdPromise(): Promise<string>;

	CreateConnection(contextId: string, successCallback: (data: { CreateConnectionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CreateConnectionResult: void }>;

	CreateConnection(contextId: string): { CreateConnectionResult: void };

	CreateConnectionPromise(contextId: string): Promise<void>;

	DeleteConnection(contextId: string, successCallback: (data: { DeleteConnectionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteConnectionResult: void }>;

	DeleteConnection(contextId: string): { DeleteConnectionResult: void };

	DeleteConnectionPromise(contextId: string): Promise<void>;

	TestConnectionByConnectionString(dataBaseType: $D.Framework.ServiceLayer.DataBaseTypeEnum, connectionString: string, successCallback: (data: { TestConnectionByConnectionStringResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ TestConnectionByConnectionStringResult: boolean }>;

	TestConnectionByConnectionString(dataBaseType: $D.Framework.ServiceLayer.DataBaseTypeEnum, connectionString: string): { TestConnectionByConnectionStringResult: boolean };

	TestConnectionByConnectionStringPromise(dataBaseType: $D.Framework.ServiceLayer.DataBaseTypeEnum, connectionString: string): Promise<boolean>;
}

interface ServicesStatic {
	DatabaseIntegrationService(): DatabaseIntegrationServiceStatic;
}
