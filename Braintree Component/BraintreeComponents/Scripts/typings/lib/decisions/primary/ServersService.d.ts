/// <reference path="./datatypes._base.d.ts" />

interface ServersServiceStatic {

	RegisterServer(server: $D.Framework.ServiceLayer.Services.ServerManagement.Server, successCallback: (data: { RegisterServerResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RegisterServerResult: void }>;

	RegisterServer(server: $D.Framework.ServiceLayer.Services.ServerManagement.Server): { RegisterServerResult: void };

	RegisterServerPromise(server: $D.Framework.ServiceLayer.Services.ServerManagement.Server): Promise<void>;

	GetCurrentServerType(successCallback: (data: { GetCurrentServerTypeResult: $D.Framework.ServiceLayer.Utilities.ServerType }) => any, errorCallback?: () => any): JQueryPromise<{ GetCurrentServerTypeResult: $D.Framework.ServiceLayer.Utilities.ServerType }>;

	GetCurrentServerType(): { GetCurrentServerTypeResult: $D.Framework.ServiceLayer.Utilities.ServerType };

	GetCurrentServerTypePromise(): Promise<$D.Framework.ServiceLayer.Utilities.ServerType>;

	SetCurrentServerType(serverType: $D.Framework.ServiceLayer.Utilities.ServerType, successCallback: (data: { SetCurrentServerTypeResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetCurrentServerTypeResult: void }>;

	SetCurrentServerType(serverType: $D.Framework.ServiceLayer.Utilities.ServerType): { SetCurrentServerTypeResult: void };

	SetCurrentServerTypePromise(serverType: $D.Framework.ServiceLayer.Utilities.ServerType): Promise<void>;

	GetCurrentServer(successCallback: (data: { GetCurrentServerResult: $D.Framework.ServiceLayer.Services.ServerManagement.Server }) => any, errorCallback?: () => any): JQueryPromise<{ GetCurrentServerResult: $D.Framework.ServiceLayer.Services.ServerManagement.Server }>;

	GetCurrentServer(): { GetCurrentServerResult: $D.Framework.ServiceLayer.Services.ServerManagement.Server };

	GetCurrentServerPromise(): Promise<$D.Framework.ServiceLayer.Services.ServerManagement.Server>;

	GetServerByName(serverName: string, successCallback: (data: { GetServerByNameResult: $D.Framework.ServiceLayer.Services.ServerManagement.Server }) => any, errorCallback?: () => any): JQueryPromise<{ GetServerByNameResult: $D.Framework.ServiceLayer.Services.ServerManagement.Server }>;

	GetServerByName(serverName: string): { GetServerByNameResult: $D.Framework.ServiceLayer.Services.ServerManagement.Server };

	GetServerByNamePromise(serverName: string): Promise<$D.Framework.ServiceLayer.Services.ServerManagement.Server>;

	GetCurrentHostingServerInfo(successCallback: (data: { GetCurrentHostingServerInfoResult: $D.Framework.ServiceLayer.Services.ServerManagement.HostingServerInfo }) => any, errorCallback?: () => any): JQueryPromise<{ GetCurrentHostingServerInfoResult: $D.Framework.ServiceLayer.Services.ServerManagement.HostingServerInfo }>;

	GetCurrentHostingServerInfo(): { GetCurrentHostingServerInfoResult: $D.Framework.ServiceLayer.Services.ServerManagement.HostingServerInfo };

	GetCurrentHostingServerInfoPromise(): Promise<$D.Framework.ServiceLayer.Services.ServerManagement.HostingServerInfo>;

	GetCurrentDatabaseServerName(successCallback: (data: { GetCurrentDatabaseServerNameResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetCurrentDatabaseServerNameResult: string }>;

	GetCurrentDatabaseServerName(): { GetCurrentDatabaseServerNameResult: string };

	GetCurrentDatabaseServerNamePromise(): Promise<string>;

	UpdateInfoForAllServers(successCallback: (data: { UpdateInfoForAllServersResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateInfoForAllServersResult: void }>;

	UpdateInfoForAllServers(): { UpdateInfoForAllServersResult: void };

	UpdateInfoForAllServersPromise(): Promise<void>;

	CreateServerGroup(serverGroupInfo: any, successCallback: (data: { CreateServerGroupResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CreateServerGroupResult: void }>;

	CreateServerGroup(serverGroupInfo: any): { CreateServerGroupResult: void };

	CreateServerGroupPromise(serverGroupInfo: any): Promise<void>;

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

	GetByFolderID(folderID: string, successCallback: (data: { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.ServerManagement.Server[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByFolderIDResult: $D.Framework.ServiceLayer.Services.ServerManagement.Server[] }>;

	GetByFolderID(folderID: string): { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.ServerManagement.Server[] };

	GetByFolderIDPromise(folderID: string): Promise<$D.Framework.ServiceLayer.Services.ServerManagement.Server[]>;

	GetByIDs(ids: string[], successCallback: (data: { GetByIDsResult: $D.Framework.ServiceLayer.Services.ServerManagement.Server[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDsResult: $D.Framework.ServiceLayer.Services.ServerManagement.Server[] }>;

	GetByIDs(ids: string[]): { GetByIDsResult: $D.Framework.ServiceLayer.Services.ServerManagement.Server[] };

	GetByIDsPromise(ids: string[]): Promise<$D.Framework.ServiceLayer.Services.ServerManagement.Server[]>;

	GetByID(id: string, successCallback: (data: { GetByIDResult: $D.Framework.ServiceLayer.Services.ServerManagement.Server }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDResult: $D.Framework.ServiceLayer.Services.ServerManagement.Server }>;

	GetByID(id: string): { GetByIDResult: $D.Framework.ServiceLayer.Services.ServerManagement.Server };

	GetByIDPromise(id: string): Promise<$D.Framework.ServiceLayer.Services.ServerManagement.Server>;

	GetAll(successCallback: (data: { GetAllResult: $D.Framework.ServiceLayer.Services.ServerManagement.Server[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllResult: $D.Framework.ServiceLayer.Services.ServerManagement.Server[] }>;

	GetAll(): { GetAllResult: $D.Framework.ServiceLayer.Services.ServerManagement.Server[] };

	GetAllPromise(): Promise<$D.Framework.ServiceLayer.Services.ServerManagement.Server[]>;

	Save(entity: $D.Framework.ServiceLayer.Services.ServerManagement.Server, successCallback: (data: { SaveResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveResult: void }>;

	Save(entity: $D.Framework.ServiceLayer.Services.ServerManagement.Server): { SaveResult: void };

	SavePromise(entity: $D.Framework.ServiceLayer.Services.ServerManagement.Server): Promise<void>;

	Delete(id: string, successCallback: (data: { DeleteResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteResult: void }>;

	Delete(id: string): { DeleteResult: void };

	DeletePromise(id: string): Promise<void>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType, successCallback: (data: { SearchResult: $D.Framework.ServiceLayer.Services.ServerManagement.Server[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchResult: $D.Framework.ServiceLayer.Services.ServerManagement.Server[] }>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): { SearchResult: $D.Framework.ServiceLayer.Services.ServerManagement.Server[] };

	SearchPromise(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): Promise<$D.Framework.ServiceLayer.Services.ServerManagement.Server[]>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.ServerManagement.Server[], successCallback: (data: { SaveListResult: $D.Framework.ServiceLayer.Services.ServerManagement.Server[] }) => any, errorCallback?: () => any): JQueryPromise<{ SaveListResult: $D.Framework.ServiceLayer.Services.ServerManagement.Server[] }>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.ServerManagement.Server[]): { SaveListResult: $D.Framework.ServiceLayer.Services.ServerManagement.Server[] };

	SaveListPromise(entities: $D.Framework.ServiceLayer.Services.ServerManagement.Server[]): Promise<$D.Framework.ServiceLayer.Services.ServerManagement.Server[]>;
}

interface ServicesStatic {
	ServersService(): ServersServiceStatic;
}
