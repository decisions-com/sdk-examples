/// <reference path="./datatypes._base.d.ts" />

interface InterServerCommunicationServiceStatic {

	GetCurrentServerInfo(successCallback: (data: { GetCurrentServerInfoResult: $D.Framework.ServiceLayer.Services.ServerManagement.HostingServerInfo }) => any, errorCallback?: () => any): JQueryPromise<{ GetCurrentServerInfoResult: $D.Framework.ServiceLayer.Services.ServerManagement.HostingServerInfo }>;

	GetCurrentServerInfo(): { GetCurrentServerInfoResult: $D.Framework.ServiceLayer.Services.ServerManagement.HostingServerInfo };

	GetCurrentServerInfoPromise(): Promise<$D.Framework.ServiceLayer.Services.ServerManagement.HostingServerInfo>;

	GetLogFile(instanceName: string, successCallback: (data: { GetLogFileResult: $D.Framework.Data.DataTypes.FileData }) => any, errorCallback?: () => any): JQueryPromise<{ GetLogFileResult: $D.Framework.Data.DataTypes.FileData }>;

	GetLogFile(instanceName: string): { GetLogFileResult: $D.Framework.Data.DataTypes.FileData };

	GetLogFilePromise(instanceName: string): Promise<$D.Framework.Data.DataTypes.FileData>;

	GetUsageFile(instanceName: string, successCallback: (data: { GetUsageFileResult: $D.Framework.Data.DataTypes.FileData }) => any, errorCallback?: () => any): JQueryPromise<{ GetUsageFileResult: $D.Framework.Data.DataTypes.FileData }>;

	GetUsageFile(instanceName: string): { GetUsageFileResult: $D.Framework.Data.DataTypes.FileData };

	GetUsageFilePromise(instanceName: string): Promise<$D.Framework.Data.DataTypes.FileData>;

	GetPortalBaseUrl(successCallback: (data: { GetPortalBaseUrlResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetPortalBaseUrlResult: string }>;

	GetPortalBaseUrl(): { GetPortalBaseUrlResult: string };

	GetPortalBaseUrlPromise(): Promise<string>;

	StartInstance(instanceId: string, successCallback: (data: { StartInstanceResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ StartInstanceResult: void }>;

	StartInstance(instanceId: string): { StartInstanceResult: void };

	StartInstancePromise(instanceId: string): Promise<void>;

	StopInstance(instanceId: string, successCallback: (data: { StopInstanceResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ StopInstanceResult: void }>;

	StopInstance(instanceId: string): { StopInstanceResult: void };

	StopInstancePromise(instanceId: string): Promise<void>;

	RestartInstance(instanceId: string, successCallback: (data: { RestartInstanceResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RestartInstanceResult: void }>;

	RestartInstance(instanceId: string): { RestartInstanceResult: void };

	RestartInstancePromise(instanceId: string): Promise<void>;

	UninstallInstance(instanceId: string, successCallback: (data: { UninstallInstanceResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UninstallInstanceResult: void }>;

	UninstallInstance(instanceId: string): { UninstallInstanceResult: void };

	UninstallInstancePromise(instanceId: string): Promise<void>;

	GetInstanceStatus(instanceName: string, successCallback: (data: { GetInstanceStatusResult: $D.Framework.ServiceLayer.InstanceStatus }) => any, errorCallback?: () => any): JQueryPromise<{ GetInstanceStatusResult: $D.Framework.ServiceLayer.InstanceStatus }>;

	GetInstanceStatus(instanceName: string): { GetInstanceStatusResult: $D.Framework.ServiceLayer.InstanceStatus };

	GetInstanceStatusPromise(instanceName: string): Promise<$D.Framework.ServiceLayer.InstanceStatus>;

	GetInstanceClientStatistics(instanceName: string, successCallback: (data: { GetInstanceClientStatisticsResult: $D.Framework.ServiceLayer.Services.Statistics.ClientStatistic[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetInstanceClientStatisticsResult: $D.Framework.ServiceLayer.Services.Statistics.ClientStatistic[] }>;

	GetInstanceClientStatistics(instanceName: string): { GetInstanceClientStatisticsResult: $D.Framework.ServiceLayer.Services.Statistics.ClientStatistic[] };

	GetInstanceClientStatisticsPromise(instanceName: string): Promise<$D.Framework.ServiceLayer.Services.Statistics.ClientStatistic[]>;

	SyncObjectToInstance(instanceName: string, data: number[], options: $D.Framework.ServiceLayer.Services.ServerManagement.Sync.SyncOptions, successCallback: (data: { SyncObjectToInstanceResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SyncObjectToInstanceResult: void }>;

	SyncObjectToInstance(instanceName: string, data: number[], options: $D.Framework.ServiceLayer.Services.ServerManagement.Sync.SyncOptions): { SyncObjectToInstanceResult: void };

	SyncObjectToInstancePromise(instanceName: string, data: number[], options: $D.Framework.ServiceLayer.Services.ServerManagement.Sync.SyncOptions): Promise<void>;

	GetInstancePlatformServerSettings(instanceName: string, successCallback: (data: { GetInstancePlatformServerSettingsResult: $D.Framework.ServiceLayer.Services.ServerManagement.PlatformServerSettings }) => any, errorCallback?: () => any): JQueryPromise<{ GetInstancePlatformServerSettingsResult: $D.Framework.ServiceLayer.Services.ServerManagement.PlatformServerSettings }>;

	GetInstancePlatformServerSettings(instanceName: string): { GetInstancePlatformServerSettingsResult: $D.Framework.ServiceLayer.Services.ServerManagement.PlatformServerSettings };

	GetInstancePlatformServerSettingsPromise(instanceName: string): Promise<$D.Framework.ServiceLayer.Services.ServerManagement.PlatformServerSettings>;

	SetupPlatformServerToInstance(instanceName: string, platformServerSettings: $D.Framework.ServiceLayer.Services.ServerManagement.PlatformServerSettings, successCallback: (data: { SetupPlatformServerToInstanceResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetupPlatformServerToInstanceResult: void }>;

	SetupPlatformServerToInstance(instanceName: string, platformServerSettings: $D.Framework.ServiceLayer.Services.ServerManagement.PlatformServerSettings): { SetupPlatformServerToInstanceResult: void };

	SetupPlatformServerToInstancePromise(instanceName: string, platformServerSettings: $D.Framework.ServiceLayer.Services.ServerManagement.PlatformServerSettings): Promise<void>;

	DistributeSettingsToInstance(instanceName: string, settings: $D.Framework.ServiceLayer.Services.ServerManagement.DistributedInstanceSettings, successCallback: (data: { DistributeSettingsToInstanceResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DistributeSettingsToInstanceResult: void }>;

	DistributeSettingsToInstance(instanceName: string, settings: $D.Framework.ServiceLayer.Services.ServerManagement.DistributedInstanceSettings): { DistributeSettingsToInstanceResult: void };

	DistributeSettingsToInstancePromise(instanceName: string, settings: $D.Framework.ServiceLayer.Services.ServerManagement.DistributedInstanceSettings): Promise<void>;

	SetConstants(instanceName: string, constants: any[], successCallback: (data: { SetConstantsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetConstantsResult: void }>;

	SetConstants(instanceName: string, constants: any[]): { SetConstantsResult: void };

	SetConstantsPromise(instanceName: string, constants: any[]): Promise<void>;

	InstallModuleToInstance(instanceName: string, moduleName: string, successCallback: (data: { InstallModuleToInstanceResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ InstallModuleToInstanceResult: void }>;

	InstallModuleToInstance(instanceName: string, moduleName: string): { InstallModuleToInstanceResult: void };

	InstallModuleToInstancePromise(instanceName: string, moduleName: string): Promise<void>;
}

interface ServicesStatic {
	InterServerCommunicationService(): InterServerCommunicationServiceStatic;
}
