/// <reference path="./datatypes._base.d.ts" />

interface ContactPriorityServiceStatic {

	GetContactPriorityByName(entityName: string, successCallback: (data: { GetContactPriorityByNameResult: $D.Framework.ServiceLayer.Services.Organization.ContactPriority }) => any, errorCallback?: () => any): JQueryPromise<{ GetContactPriorityByNameResult: $D.Framework.ServiceLayer.Services.Organization.ContactPriority }>;

	GetContactPriorityByName(entityName: string): { GetContactPriorityByNameResult: $D.Framework.ServiceLayer.Services.Organization.ContactPriority };

	GetContactPriorityByNamePromise(entityName: string): Promise<$D.Framework.ServiceLayer.Services.Organization.ContactPriority>;

	GetHighestContactPriority(successCallback: (data: { GetHighestContactPriorityResult: $D.Framework.ServiceLayer.Services.Organization.ContactPriority }) => any, errorCallback?: () => any): JQueryPromise<{ GetHighestContactPriorityResult: $D.Framework.ServiceLayer.Services.Organization.ContactPriority }>;

	GetHighestContactPriority(): { GetHighestContactPriorityResult: $D.Framework.ServiceLayer.Services.Organization.ContactPriority };

	GetHighestContactPriorityPromise(): Promise<$D.Framework.ServiceLayer.Services.Organization.ContactPriority>;

	GetHighestContactPriorityID(successCallback: (data: { GetHighestContactPriorityIDResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetHighestContactPriorityIDResult: string }>;

	GetHighestContactPriorityID(): { GetHighestContactPriorityIDResult: string };

	GetHighestContactPriorityIDPromise(): Promise<string>;

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

	GetByFolderID(folderID: string, successCallback: (data: { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Organization.ContactPriority[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Organization.ContactPriority[] }>;

	GetByFolderID(folderID: string): { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Organization.ContactPriority[] };

	GetByFolderIDPromise(folderID: string): Promise<$D.Framework.ServiceLayer.Services.Organization.ContactPriority[]>;

	GetByIDs(ids: string[], successCallback: (data: { GetByIDsResult: $D.Framework.ServiceLayer.Services.Organization.ContactPriority[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDsResult: $D.Framework.ServiceLayer.Services.Organization.ContactPriority[] }>;

	GetByIDs(ids: string[]): { GetByIDsResult: $D.Framework.ServiceLayer.Services.Organization.ContactPriority[] };

	GetByIDsPromise(ids: string[]): Promise<$D.Framework.ServiceLayer.Services.Organization.ContactPriority[]>;

	GetByID(id: string, successCallback: (data: { GetByIDResult: $D.Framework.ServiceLayer.Services.Organization.ContactPriority }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDResult: $D.Framework.ServiceLayer.Services.Organization.ContactPriority }>;

	GetByID(id: string): { GetByIDResult: $D.Framework.ServiceLayer.Services.Organization.ContactPriority };

	GetByIDPromise(id: string): Promise<$D.Framework.ServiceLayer.Services.Organization.ContactPriority>;

	GetAll(successCallback: (data: { GetAllResult: $D.Framework.ServiceLayer.Services.Organization.ContactPriority[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllResult: $D.Framework.ServiceLayer.Services.Organization.ContactPriority[] }>;

	GetAll(): { GetAllResult: $D.Framework.ServiceLayer.Services.Organization.ContactPriority[] };

	GetAllPromise(): Promise<$D.Framework.ServiceLayer.Services.Organization.ContactPriority[]>;

	Save(entity: $D.Framework.ServiceLayer.Services.Organization.ContactPriority, successCallback: (data: { SaveResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveResult: void }>;

	Save(entity: $D.Framework.ServiceLayer.Services.Organization.ContactPriority): { SaveResult: void };

	SavePromise(entity: $D.Framework.ServiceLayer.Services.Organization.ContactPriority): Promise<void>;

	Delete(id: string, successCallback: (data: { DeleteResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteResult: void }>;

	Delete(id: string): { DeleteResult: void };

	DeletePromise(id: string): Promise<void>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType, successCallback: (data: { SearchResult: $D.Framework.ServiceLayer.Services.Organization.ContactPriority[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchResult: $D.Framework.ServiceLayer.Services.Organization.ContactPriority[] }>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): { SearchResult: $D.Framework.ServiceLayer.Services.Organization.ContactPriority[] };

	SearchPromise(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): Promise<$D.Framework.ServiceLayer.Services.Organization.ContactPriority[]>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.Organization.ContactPriority[], successCallback: (data: { SaveListResult: $D.Framework.ServiceLayer.Services.Organization.ContactPriority[] }) => any, errorCallback?: () => any): JQueryPromise<{ SaveListResult: $D.Framework.ServiceLayer.Services.Organization.ContactPriority[] }>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.Organization.ContactPriority[]): { SaveListResult: $D.Framework.ServiceLayer.Services.Organization.ContactPriority[] };

	SaveListPromise(entities: $D.Framework.ServiceLayer.Services.Organization.ContactPriority[]): Promise<$D.Framework.ServiceLayer.Services.Organization.ContactPriority[]>;
}

interface ServicesStatic {
	ContactPriorityService(): ContactPriorityServiceStatic;
}
