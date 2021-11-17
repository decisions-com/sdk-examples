/// <reference path="./datatypes._base.d.ts" />

interface SupportServiceStatic {

	SendSupportData(successCallback: (data: { SendSupportDataResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SendSupportDataResult: void }>;

	SendSupportData(): { SendSupportDataResult: void };

	SendSupportDataPromise(): Promise<void>;

	SendSupportDataWithSpecificInfo(specificInfo: string, successCallback: (data: { SendSupportDataWithSpecificInfoResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SendSupportDataWithSpecificInfoResult: void }>;

	SendSupportDataWithSpecificInfo(specificInfo: string): { SendSupportDataWithSpecificInfoResult: void };

	SendSupportDataWithSpecificInfoPromise(specificInfo: string): Promise<void>;

	GetFSHealth(successCallback: (data: { GetFSHealthResult: $D.Framework.ServiceLayer.Services.Support.FSHealthCheckData }) => any, errorCallback?: () => any): JQueryPromise<{ GetFSHealthResult: $D.Framework.ServiceLayer.Services.Support.FSHealthCheckData }>;

	GetFSHealth(): { GetFSHealthResult: $D.Framework.ServiceLayer.Services.Support.FSHealthCheckData };

	GetFSHealthPromise(): Promise<$D.Framework.ServiceLayer.Services.Support.FSHealthCheckData>;

	GetDBHealth(successCallback: (data: { GetDBHealthResult: $D.Framework.ServiceLayer.Services.Support.DatabaseHealthCheckData }) => any, errorCallback?: () => any): JQueryPromise<{ GetDBHealthResult: $D.Framework.ServiceLayer.Services.Support.DatabaseHealthCheckData }>;

	GetDBHealth(): { GetDBHealthResult: $D.Framework.ServiceLayer.Services.Support.DatabaseHealthCheckData };

	GetDBHealthPromise(): Promise<$D.Framework.ServiceLayer.Services.Support.DatabaseHealthCheckData>;

	SimulateOutageOnHealthCheckPage(seconds: number, successCallback: (data: { SimulateOutageOnHealthCheckPageResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SimulateOutageOnHealthCheckPageResult: void }>;

	SimulateOutageOnHealthCheckPage(seconds: number): { SimulateOutageOnHealthCheckPageResult: void };

	SimulateOutageOnHealthCheckPagePromise(seconds: number): Promise<void>;

	CancelSimulatedOutageOnHealthCheck(successCallback: (data: { CancelSimulatedOutageOnHealthCheckResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CancelSimulatedOutageOnHealthCheckResult: void }>;

	CancelSimulatedOutageOnHealthCheck(): { CancelSimulatedOutageOnHealthCheckResult: void };

	CancelSimulatedOutageOnHealthCheckPromise(): Promise<void>;

	IsSimulatedOutageActive(successCallback: (data: { IsSimulatedOutageActiveResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ IsSimulatedOutageActiveResult: boolean }>;

	IsSimulatedOutageActive(): { IsSimulatedOutageActiveResult: boolean };

	IsSimulatedOutageActivePromise(): Promise<boolean>;

	SubmitSupportTicket(supportChatTicket: $D.Framework.ServiceLayer.Services.Support.SupportChatTicket, successCallback: (data: { SubmitSupportTicketResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ SubmitSupportTicketResult: boolean }>;

	SubmitSupportTicket(supportChatTicket: $D.Framework.ServiceLayer.Services.Support.SupportChatTicket): { SubmitSupportTicketResult: boolean };

	SubmitSupportTicketPromise(supportChatTicket: $D.Framework.ServiceLayer.Services.Support.SupportChatTicket): Promise<boolean>;

	RunCommandFlow(command: string, channelId: string, successCallback: (data: { RunCommandFlowResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ RunCommandFlowResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	RunCommandFlow(command: string, channelId: string): { RunCommandFlowResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	RunCommandFlowPromise(command: string, channelId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	UploadFileToChat(channelId: string, file: $D.Framework.Data.DataTypes.FileData, successCallback: (data: { UploadFileToChatResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UploadFileToChatResult: void }>;

	UploadFileToChat(channelId: string, file: $D.Framework.Data.DataTypes.FileData): { UploadFileToChatResult: void };

	UploadFileToChatPromise(channelId: string, file: $D.Framework.Data.DataTypes.FileData): Promise<void>;

	RunSQLQueryFlow(query: string, channelId: string, successCallback: (data: { RunSQLQueryFlowResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ RunSQLQueryFlowResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	RunSQLQueryFlow(query: string, channelId: string): { RunSQLQueryFlowResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	RunSQLQueryFlowPromise(query: string, channelId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

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
	SupportService(): SupportServiceStatic;
}
