/// <reference path="./datatypes._base.d.ts" />

interface DatabaseStoredProcedureDefinitionServiceStatic {

	GetRequestStatus(requestId: string, successCallback: (data: { GetRequestStatusResult: $D.Framework.ServiceLayer.RequestStatus }) => any, errorCallback?: () => any): JQueryPromise<{ GetRequestStatusResult: $D.Framework.ServiceLayer.RequestStatus }>;

	GetRequestStatus(requestId: string): { GetRequestStatusResult: $D.Framework.ServiceLayer.RequestStatus };

	GetRequestStatusPromise(requestId: string): Promise<$D.Framework.ServiceLayer.RequestStatus>;

	GetRequestStatusWithTimeout(requestId: string, maxTime: string, successCallback: (data: { GetRequestStatusWithTimeoutResult: $D.Framework.ServiceLayer.RequestStatus }) => any, errorCallback?: () => any): JQueryPromise<{ GetRequestStatusWithTimeoutResult: $D.Framework.ServiceLayer.RequestStatus }>;

	GetRequestStatusWithTimeout(requestId: string, maxTime: string): { GetRequestStatusWithTimeoutResult: $D.Framework.ServiceLayer.RequestStatus };

	GetRequestStatusWithTimeoutPromise(requestId: string, maxTime: string): Promise<$D.Framework.ServiceLayer.RequestStatus>;

	GetRequestError(requestId: string, successCallback: (data: { GetRequestErrorResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetRequestErrorResult: string }>;

	GetRequestError(requestId: string): { GetRequestErrorResult: string };

	GetRequestErrorPromise(requestId: string): Promise<string>;

	AddProcedure(databaseId: string, procedure: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseStoredProcedureDefinition, successCallback: (data: { AddProcedureResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddProcedureResult: void }>;

	AddProcedure(databaseId: string, procedure: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseStoredProcedureDefinition): { AddProcedureResult: void };

	AddProcedurePromise(databaseId: string, procedure: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseStoredProcedureDefinition): Promise<void>;

	EditProcedure(databaseId: string, procedure: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseStoredProcedureDefinition, successCallback: (data: { EditProcedureResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ EditProcedureResult: void }>;

	EditProcedure(databaseId: string, procedure: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseStoredProcedureDefinition): { EditProcedureResult: void };

	EditProcedurePromise(databaseId: string, procedure: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseStoredProcedureDefinition): Promise<void>;

	GetProcedures(databaseId: string, successCallback: (data: { GetProceduresResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseStoredProcedureDefinition[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetProceduresResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseStoredProcedureDefinition[] }>;

	GetProcedures(databaseId: string): { GetProceduresResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseStoredProcedureDefinition[] };

	GetProceduresPromise(databaseId: string): Promise<$D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseStoredProcedureDefinition[]>;

	DeleteProcedures(databaseId: string, Ids: string[], successCallback: (data: { DeleteProceduresResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteProceduresResult: void }>;

	DeleteProcedures(databaseId: string, Ids: string[]): { DeleteProceduresResult: void };

	DeleteProceduresPromise(databaseId: string, Ids: string[]): Promise<void>;

	DoesDBProcedureExist(databaseId: string, procedureId: string, successCallback: (data: { DoesDBProcedureExistResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ DoesDBProcedureExistResult: boolean }>;

	DoesDBProcedureExist(databaseId: string, procedureId: string): { DoesDBProcedureExistResult: boolean };

	DoesDBProcedureExistPromise(databaseId: string, procedureId: string): Promise<boolean>;

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

	GetByFolderID(folderID: string, successCallback: (data: { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseStoredProcedureDefinition[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByFolderIDResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseStoredProcedureDefinition[] }>;

	GetByFolderID(folderID: string): { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseStoredProcedureDefinition[] };

	GetByFolderIDPromise(folderID: string): Promise<$D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseStoredProcedureDefinition[]>;

	GetByIDs(ids: string[], successCallback: (data: { GetByIDsResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseStoredProcedureDefinition[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDsResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseStoredProcedureDefinition[] }>;

	GetByIDs(ids: string[]): { GetByIDsResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseStoredProcedureDefinition[] };

	GetByIDsPromise(ids: string[]): Promise<$D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseStoredProcedureDefinition[]>;

	GetByID(id: string, successCallback: (data: { GetByIDResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseStoredProcedureDefinition }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseStoredProcedureDefinition }>;

	GetByID(id: string): { GetByIDResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseStoredProcedureDefinition };

	GetByIDPromise(id: string): Promise<$D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseStoredProcedureDefinition>;

	GetAll(successCallback: (data: { GetAllResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseStoredProcedureDefinition[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseStoredProcedureDefinition[] }>;

	GetAll(): { GetAllResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseStoredProcedureDefinition[] };

	GetAllPromise(): Promise<$D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseStoredProcedureDefinition[]>;

	Save(entity: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseStoredProcedureDefinition, successCallback: (data: { SaveResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveResult: void }>;

	Save(entity: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseStoredProcedureDefinition): { SaveResult: void };

	SavePromise(entity: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseStoredProcedureDefinition): Promise<void>;

	Delete(id: string, successCallback: (data: { DeleteResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteResult: void }>;

	Delete(id: string): { DeleteResult: void };

	DeletePromise(id: string): Promise<void>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType, successCallback: (data: { SearchResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseStoredProcedureDefinition[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseStoredProcedureDefinition[] }>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): { SearchResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseStoredProcedureDefinition[] };

	SearchPromise(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): Promise<$D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseStoredProcedureDefinition[]>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseStoredProcedureDefinition[], successCallback: (data: { SaveListResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseStoredProcedureDefinition[] }) => any, errorCallback?: () => any): JQueryPromise<{ SaveListResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseStoredProcedureDefinition[] }>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseStoredProcedureDefinition[]): { SaveListResult: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseStoredProcedureDefinition[] };

	SaveListPromise(entities: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseStoredProcedureDefinition[]): Promise<$D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseStoredProcedureDefinition[]>;
}

interface ServicesStatic {
	DatabaseStoredProcedureDefinitionService(): DatabaseStoredProcedureDefinitionServiceStatic;
}
