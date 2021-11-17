/// <reference path="./datatypes._base.d.ts" />

interface ClientEventsServiceStatic {

	UnRegisterSession(clientEventsSessionId: string, successCallback: (data: { UnRegisterSessionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UnRegisterSessionResult: void }>;

	UnRegisterSession(clientEventsSessionId: string): { UnRegisterSessionResult: void };

	UnRegisterSessionPromise(clientEventsSessionId: string): Promise<void>;

	RegisterSession(clientEventsSessionId: string, successCallback: (data: { RegisterSessionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RegisterSessionResult: void }>;

	RegisterSession(clientEventsSessionId: string): { RegisterSessionResult: void };

	RegisterSessionPromise(clientEventsSessionId: string): Promise<void>;

	Ping(clientEventsSessionId: string, successCallback: (data: { PingResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ PingResult: boolean }>;

	Ping(clientEventsSessionId: string): { PingResult: boolean };

	PingPromise(clientEventsSessionId: string): Promise<boolean>;

	PingWithFolders(clientEventsSessionId: string, folderIds: string[], clientEvents: string[], successCallback: (data: { PingWithFoldersResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ PingWithFoldersResult: boolean }>;

	PingWithFolders(clientEventsSessionId: string, folderIds: string[], clientEvents: string[]): { PingWithFoldersResult: boolean };

	PingWithFoldersPromise(clientEventsSessionId: string, folderIds: string[], clientEvents: string[]): Promise<boolean>;

	PingWithFoldersAndClientParameters(clientEventsSessionId: string, folderIds: string[], clientEvents: string[], parms: $D.Framework.ServiceLayer.Services.ClientEvents.SessionParameters[], successCallback: (data: { PingWithFoldersAndClientParametersResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ PingWithFoldersAndClientParametersResult: boolean }>;

	PingWithFoldersAndClientParameters(clientEventsSessionId: string, folderIds: string[], clientEvents: string[], parms: $D.Framework.ServiceLayer.Services.ClientEvents.SessionParameters[]): { PingWithFoldersAndClientParametersResult: boolean };

	PingWithFoldersAndClientParametersPromise(clientEventsSessionId: string, folderIds: string[], clientEvents: string[], parms: $D.Framework.ServiceLayer.Services.ClientEvents.SessionParameters[]): Promise<boolean>;

	HasSessionParameters(clientEventsSessionId: string, successCallback: (data: { HasSessionParametersResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ HasSessionParametersResult: boolean }>;

	HasSessionParameters(clientEventsSessionId: string): { HasSessionParametersResult: boolean };

	HasSessionParametersPromise(clientEventsSessionId: string): Promise<boolean>;

	SetSessionParameters(clientEventsSessionId: string, parms: $D.Framework.ServiceLayer.Services.ClientEvents.SessionParameters[], successCallback: (data: { SetSessionParametersResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetSessionParametersResult: void }>;

	SetSessionParameters(clientEventsSessionId: string, parms: $D.Framework.ServiceLayer.Services.ClientEvents.SessionParameters[]): { SetSessionParametersResult: void };

	SetSessionParametersPromise(clientEventsSessionId: string, parms: $D.Framework.ServiceLayer.Services.ClientEvents.SessionParameters[]): Promise<void>;

	SetSessionParameter(clientEventsSessionId: string, name: string, value: string, successCallback: (data: { SetSessionParameterResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetSessionParameterResult: void }>;

	SetSessionParameter(clientEventsSessionId: string, name: string, value: string): { SetSessionParameterResult: void };

	SetSessionParameterPromise(clientEventsSessionId: string, name: string, value: string): Promise<void>;

	RemoveFolderRegistration(clientEventSessionId: string, folderID: string, successCallback: (data: { RemoveFolderRegistrationResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveFolderRegistrationResult: void }>;

	RemoveFolderRegistration(clientEventSessionId: string, folderID: string): { RemoveFolderRegistrationResult: void };

	RemoveFolderRegistrationPromise(clientEventSessionId: string, folderID: string): Promise<void>;

	RegisterForEvents(clientEventsSessionId: string, eventIDs: string[], successCallback: (data: { RegisterForEventsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RegisterForEventsResult: void }>;

	RegisterForEvents(clientEventsSessionId: string, eventIDs: string[]): { RegisterForEventsResult: void };

	RegisterForEventsPromise(clientEventsSessionId: string, eventIDs: string[]): Promise<void>;

	UnRegisterForEvents(clientEventsSessionId: string, eventIDs: string[], successCallback: (data: { UnRegisterForEventsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UnRegisterForEventsResult: void }>;

	UnRegisterForEvents(clientEventsSessionId: string, eventIDs: string[]): { UnRegisterForEventsResult: void };

	UnRegisterForEventsPromise(clientEventsSessionId: string, eventIDs: string[]): Promise<void>;

	RegisterForEvent(clientEventsSessionId: string, eventID: string, successCallback: (data: { RegisterForEventResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RegisterForEventResult: void }>;

	RegisterForEvent(clientEventsSessionId: string, eventID: string): { RegisterForEventResult: void };

	RegisterForEventPromise(clientEventsSessionId: string, eventID: string): Promise<void>;

	UnRegisterForEvent(clientEventsSessionId: string, eventID: string, successCallback: (data: { UnRegisterForEventResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UnRegisterForEventResult: void }>;

	UnRegisterForEvent(clientEventsSessionId: string, eventID: string): { UnRegisterForEventResult: void };

	UnRegisterForEventPromise(clientEventsSessionId: string, eventID: string): Promise<void>;

	GetEventsForSession(clientEventsSessionId: string, clientEvents: string[], successCallback: (data: { GetEventsForSessionResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetEventsForSessionResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	GetEventsForSession(clientEventsSessionId: string, clientEvents: string[]): { GetEventsForSessionResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	GetEventsForSessionPromise(clientEventsSessionId: string, clientEvents: string[]): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	BroadcastEvent(clientEventsSessionId: string, eventID: string, message: $D.Framework.Utilities.Messaging.ActionMessage, successCallback: (data: { BroadcastEventResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ BroadcastEventResult: void }>;

	BroadcastEvent(clientEventsSessionId: string, eventID: string, message: $D.Framework.Utilities.Messaging.ActionMessage): { BroadcastEventResult: void };

	BroadcastEventPromise(clientEventsSessionId: string, eventID: string, message: $D.Framework.Utilities.Messaging.ActionMessage): Promise<void>;

	Echo(successCallback: (data: { EchoResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ EchoResult: void }>;

	Echo(): { EchoResult: void };

	EchoPromise(): Promise<void>;

	SaveClientSideMonitoringEntries(logEntries: $D.Framework.Utilities.Logging.ClientSideMonitoringEntry[], successCallback: (data: { SaveClientSideMonitoringEntriesResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveClientSideMonitoringEntriesResult: void }>;

	SaveClientSideMonitoringEntries(logEntries: $D.Framework.Utilities.Logging.ClientSideMonitoringEntry[]): { SaveClientSideMonitoringEntriesResult: void };

	SaveClientSideMonitoringEntriesPromise(logEntries: $D.Framework.Utilities.Logging.ClientSideMonitoringEntry[]): Promise<void>;

	IsClientEventsSessionCacheOwner(clientEventsSessionId: string, successCallback: (data: { IsClientEventsSessionCacheOwnerResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ IsClientEventsSessionCacheOwnerResult: boolean }>;

	IsClientEventsSessionCacheOwner(clientEventsSessionId: string): { IsClientEventsSessionCacheOwnerResult: boolean };

	IsClientEventsSessionCacheOwnerPromise(clientEventsSessionId: string): Promise<boolean>;

	RemoveClientEventsSessionCacheOwner(clientEventsSessionId: string, successCallback: (data: { RemoveClientEventsSessionCacheOwnerResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveClientEventsSessionCacheOwnerResult: boolean }>;

	RemoveClientEventsSessionCacheOwner(clientEventsSessionId: string): { RemoveClientEventsSessionCacheOwnerResult: boolean };

	RemoveClientEventsSessionCacheOwnerPromise(clientEventsSessionId: string): Promise<boolean>;

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
	ClientEventsService(): ClientEventsServiceStatic;
}
