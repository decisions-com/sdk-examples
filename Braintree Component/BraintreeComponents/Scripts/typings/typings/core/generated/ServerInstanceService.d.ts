/// <reference path="./datatypes._base.d.ts" />

interface ServerInstanceServiceStatic {

	AssignCurrentServerToInstance(instanceId: string, successCallback: (data: { AssignCurrentServerToInstanceResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AssignCurrentServerToInstanceResult: void }>;

	AssignCurrentServerToInstance(instanceId: string): { AssignCurrentServerToInstanceResult: void };

	AssignCurrentServerToInstancePromise(instanceId: string): Promise<void>;

	UnassignInstanceFromCurrentServer(instanceId: string, successCallback: (data: { UnassignInstanceFromCurrentServerResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UnassignInstanceFromCurrentServerResult: void }>;

	UnassignInstanceFromCurrentServer(instanceId: string): { UnassignInstanceFromCurrentServerResult: void };

	UnassignInstanceFromCurrentServerPromise(instanceId: string): Promise<void>;

	GetServerInstance(serverId: string, instanceId: string, successCallback: (data: { GetServerInstanceResult: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance }) => any, errorCallback?: () => any): JQueryPromise<{ GetServerInstanceResult: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance }>;

	GetServerInstance(serverId: string, instanceId: string): { GetServerInstanceResult: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance };

	GetServerInstancePromise(serverId: string, instanceId: string): Promise<$D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance>;

	GetServersHostingInstanceByName(instanceName: string, successCallback: (data: { GetServersHostingInstanceByNameResult: $D.Framework.ServiceLayer.Services.ServerManagement.Server[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetServersHostingInstanceByNameResult: $D.Framework.ServiceLayer.Services.ServerManagement.Server[] }>;

	GetServersHostingInstanceByName(instanceName: string): { GetServersHostingInstanceByNameResult: $D.Framework.ServiceLayer.Services.ServerManagement.Server[] };

	GetServersHostingInstanceByNamePromise(instanceName: string): Promise<$D.Framework.ServiceLayer.Services.ServerManagement.Server[]>;

	GetByInstance(instanceId: string, successCallback: (data: { GetByInstanceResult: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByInstanceResult: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance[] }>;

	GetByInstance(instanceId: string): { GetByInstanceResult: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance[] };

	GetByInstancePromise(instanceId: string): Promise<$D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance[]>;

	GetStartedServerInstances(instanceId: string, successCallback: (data: { GetStartedServerInstancesResult: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetStartedServerInstancesResult: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance[] }>;

	GetStartedServerInstances(instanceId: string): { GetStartedServerInstancesResult: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance[] };

	GetStartedServerInstancesPromise(instanceId: string): Promise<$D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance[]>;

	GetByServer(serverId: string, successCallback: (data: { GetByServerResult: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByServerResult: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance[] }>;

	GetByServer(serverId: string): { GetByServerResult: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance[] };

	GetByServerPromise(serverId: string): Promise<$D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance[]>;

	StartServerInstance(serverInstance: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance, successCallback: (data: { StartServerInstanceResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ StartServerInstanceResult: void }>;

	StartServerInstance(serverInstance: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance): { StartServerInstanceResult: void };

	StartServerInstancePromise(serverInstance: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance): Promise<void>;

	StopServerInstance(serverInstance: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance, successCallback: (data: { StopServerInstanceResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ StopServerInstanceResult: void }>;

	StopServerInstance(serverInstance: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance): { StopServerInstanceResult: void };

	StopServerInstancePromise(serverInstance: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance): Promise<void>;

	UninstallServerInstance(serverInstance: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance, successCallback: (data: { UninstallServerInstanceResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UninstallServerInstanceResult: void }>;

	UninstallServerInstance(serverInstance: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance): { UninstallServerInstanceResult: void };

	UninstallServerInstancePromise(serverInstance: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance): Promise<void>;

	RestartServerInstance(serverInstance: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance, successCallback: (data: { RestartServerInstanceResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RestartServerInstanceResult: void }>;

	RestartServerInstance(serverInstance: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance): { RestartServerInstanceResult: void };

	RestartServerInstancePromise(serverInstance: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance): Promise<void>;

	GetServerInstanceStatus(serverInstanceId: string, successCallback: (data: { GetServerInstanceStatusResult: $D.Framework.ServiceLayer.InstanceStatus }) => any, errorCallback?: () => any): JQueryPromise<{ GetServerInstanceStatusResult: $D.Framework.ServiceLayer.InstanceStatus }>;

	GetServerInstanceStatus(serverInstanceId: string): { GetServerInstanceStatusResult: $D.Framework.ServiceLayer.InstanceStatus };

	GetServerInstanceStatusPromise(serverInstanceId: string): Promise<$D.Framework.ServiceLayer.InstanceStatus>;

	RefreshServerInstanceStatus(serverInstanceId: string, successCallback: (data: { RefreshServerInstanceStatusResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RefreshServerInstanceStatusResult: void }>;

	RefreshServerInstanceStatus(serverInstanceId: string): { RefreshServerInstanceStatusResult: void };

	RefreshServerInstanceStatusPromise(serverInstanceId: string): Promise<void>;

	GetServerIntancesForUser(email: string, successCallback: (data: { GetServerIntancesForUserResult: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetServerIntancesForUserResult: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance[] }>;

	GetServerIntancesForUser(email: string): { GetServerIntancesForUserResult: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance[] };

	GetServerIntancesForUserPromise(email: string): Promise<$D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance[]>;

	SetInstanceToServer(instanceId: string, serverId: string, successCallback: (data: { SetInstanceToServerResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetInstanceToServerResult: void }>;

	SetInstanceToServer(instanceId: string, serverId: string): { SetInstanceToServerResult: void };

	SetInstanceToServerPromise(instanceId: string, serverId: string): Promise<void>;

	RequestLogFile(serverInstanceId: string, successCallback: (data: { RequestLogFileResult: $D.Framework.Data.DataTypes.FileData }) => any, errorCallback?: () => any): JQueryPromise<{ RequestLogFileResult: $D.Framework.Data.DataTypes.FileData }>;

	RequestLogFile(serverInstanceId: string): { RequestLogFileResult: $D.Framework.Data.DataTypes.FileData };

	RequestLogFilePromise(serverInstanceId: string): Promise<$D.Framework.Data.DataTypes.FileData>;

	RequestUsageFile(serverInstanceId: string, successCallback: (data: { RequestUsageFileResult: $D.Framework.Data.DataTypes.FileData }) => any, errorCallback?: () => any): JQueryPromise<{ RequestUsageFileResult: $D.Framework.Data.DataTypes.FileData }>;

	RequestUsageFile(serverInstanceId: string): { RequestUsageFileResult: $D.Framework.Data.DataTypes.FileData };

	RequestUsageFilePromise(serverInstanceId: string): Promise<$D.Framework.Data.DataTypes.FileData>;

	AssignAndStartInstanceOnServer(instanceId: string, serverId: string, successCallback: (data: { AssignAndStartInstanceOnServerResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AssignAndStartInstanceOnServerResult: void }>;

	AssignAndStartInstanceOnServer(instanceId: string, serverId: string): { AssignAndStartInstanceOnServerResult: void };

	AssignAndStartInstanceOnServerPromise(instanceId: string, serverId: string): Promise<void>;

	GetServerInstancesByStatus(status: $D.Framework.ServiceLayer.InstanceStatus, successCallback: (data: { GetServerInstancesByStatusResult: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetServerInstancesByStatusResult: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance[] }>;

	GetServerInstancesByStatus(status: $D.Framework.ServiceLayer.InstanceStatus): { GetServerInstancesByStatusResult: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance[] };

	GetServerInstancesByStatusPromise(status: $D.Framework.ServiceLayer.InstanceStatus): Promise<$D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance[]>;

	GetServersAssignedToInstance(instanceID: string, successCallback: (data: { GetServersAssignedToInstanceResult: $D.Framework.ServiceLayer.Services.ServerManagement.Server[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetServersAssignedToInstanceResult: $D.Framework.ServiceLayer.Services.ServerManagement.Server[] }>;

	GetServersAssignedToInstance(instanceID: string): { GetServersAssignedToInstanceResult: $D.Framework.ServiceLayer.Services.ServerManagement.Server[] };

	GetServersAssignedToInstancePromise(instanceID: string): Promise<$D.Framework.ServiceLayer.Services.ServerManagement.Server[]>;

	AssignInstanceToServer(serverName: string, instanceId: string, successCallback: (data: { AssignInstanceToServerResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AssignInstanceToServerResult: void }>;

	AssignInstanceToServer(serverName: string, instanceId: string): { AssignInstanceToServerResult: void };

	AssignInstanceToServerPromise(serverName: string, instanceId: string): Promise<void>;

	UnassignInstanceFromServer(serverName: string, instanceId: string, successCallback: (data: { UnassignInstanceFromServerResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UnassignInstanceFromServerResult: void }>;

	UnassignInstanceFromServer(serverName: string, instanceId: string): { UnassignInstanceFromServerResult: void };

	UnassignInstanceFromServerPromise(serverName: string, instanceId: string): Promise<void>;

	SetInstanceToServers(instanceId: string, servers: string[], successCallback: (data: { SetInstanceToServersResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetInstanceToServersResult: void }>;

	SetInstanceToServers(instanceId: string, servers: string[]): { SetInstanceToServersResult: void };

	SetInstanceToServersPromise(instanceId: string, servers: string[]): Promise<void>;

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

	GetByFolderID(folderID: string, successCallback: (data: { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByFolderIDResult: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance[] }>;

	GetByFolderID(folderID: string): { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance[] };

	GetByFolderIDPromise(folderID: string): Promise<$D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance[]>;

	GetByIDs(ids: string[], successCallback: (data: { GetByIDsResult: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDsResult: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance[] }>;

	GetByIDs(ids: string[]): { GetByIDsResult: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance[] };

	GetByIDsPromise(ids: string[]): Promise<$D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance[]>;

	GetByID(id: string, successCallback: (data: { GetByIDResult: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDResult: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance }>;

	GetByID(id: string): { GetByIDResult: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance };

	GetByIDPromise(id: string): Promise<$D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance>;

	GetAll(successCallback: (data: { GetAllResult: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllResult: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance[] }>;

	GetAll(): { GetAllResult: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance[] };

	GetAllPromise(): Promise<$D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance[]>;

	Save(entity: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance, successCallback: (data: { SaveResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveResult: void }>;

	Save(entity: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance): { SaveResult: void };

	SavePromise(entity: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance): Promise<void>;

	Delete(id: string, successCallback: (data: { DeleteResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteResult: void }>;

	Delete(id: string): { DeleteResult: void };

	DeletePromise(id: string): Promise<void>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType, successCallback: (data: { SearchResult: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchResult: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance[] }>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): { SearchResult: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance[] };

	SearchPromise(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): Promise<$D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance[]>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance[], successCallback: (data: { SaveListResult: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance[] }) => any, errorCallback?: () => any): JQueryPromise<{ SaveListResult: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance[] }>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance[]): { SaveListResult: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance[] };

	SaveListPromise(entities: $D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance[]): Promise<$D.Framework.ServiceLayer.Services.ServerManagement.ServerInstance[]>;
}

interface ServicesStatic {
	ServerInstanceService(): ServerInstanceServiceStatic;
}
