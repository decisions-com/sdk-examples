/// <reference path="./datatypes._base.d.ts" />

interface ContactOrderPreferenceServiceStatic {

	GetContactOrderPreferenceByName(entityName: string, successCallback: (data: { GetContactOrderPreferenceByNameResult: $D.Framework.ServiceLayer.Services.Organization.ContactOrderPreference }) => any, errorCallback?: () => any): JQueryPromise<{ GetContactOrderPreferenceByNameResult: $D.Framework.ServiceLayer.Services.Organization.ContactOrderPreference }>;

	GetContactOrderPreferenceByName(entityName: string): { GetContactOrderPreferenceByNameResult: $D.Framework.ServiceLayer.Services.Organization.ContactOrderPreference };

	GetContactOrderPreferenceByNamePromise(entityName: string): Promise<$D.Framework.ServiceLayer.Services.Organization.ContactOrderPreference>;

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

	GetByFolderID(folderID: string, successCallback: (data: { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Organization.ContactOrderPreference[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Organization.ContactOrderPreference[] }>;

	GetByFolderID(folderID: string): { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Organization.ContactOrderPreference[] };

	GetByFolderIDPromise(folderID: string): Promise<$D.Framework.ServiceLayer.Services.Organization.ContactOrderPreference[]>;

	GetByIDs(ids: string[], successCallback: (data: { GetByIDsResult: $D.Framework.ServiceLayer.Services.Organization.ContactOrderPreference[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDsResult: $D.Framework.ServiceLayer.Services.Organization.ContactOrderPreference[] }>;

	GetByIDs(ids: string[]): { GetByIDsResult: $D.Framework.ServiceLayer.Services.Organization.ContactOrderPreference[] };

	GetByIDsPromise(ids: string[]): Promise<$D.Framework.ServiceLayer.Services.Organization.ContactOrderPreference[]>;

	GetByID(id: string, successCallback: (data: { GetByIDResult: $D.Framework.ServiceLayer.Services.Organization.ContactOrderPreference }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDResult: $D.Framework.ServiceLayer.Services.Organization.ContactOrderPreference }>;

	GetByID(id: string): { GetByIDResult: $D.Framework.ServiceLayer.Services.Organization.ContactOrderPreference };

	GetByIDPromise(id: string): Promise<$D.Framework.ServiceLayer.Services.Organization.ContactOrderPreference>;

	GetAll(successCallback: (data: { GetAllResult: $D.Framework.ServiceLayer.Services.Organization.ContactOrderPreference[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllResult: $D.Framework.ServiceLayer.Services.Organization.ContactOrderPreference[] }>;

	GetAll(): { GetAllResult: $D.Framework.ServiceLayer.Services.Organization.ContactOrderPreference[] };

	GetAllPromise(): Promise<$D.Framework.ServiceLayer.Services.Organization.ContactOrderPreference[]>;

	Save(entity: $D.Framework.ServiceLayer.Services.Organization.ContactOrderPreference, successCallback: (data: { SaveResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveResult: void }>;

	Save(entity: $D.Framework.ServiceLayer.Services.Organization.ContactOrderPreference): { SaveResult: void };

	SavePromise(entity: $D.Framework.ServiceLayer.Services.Organization.ContactOrderPreference): Promise<void>;

	Delete(id: string, successCallback: (data: { DeleteResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteResult: void }>;

	Delete(id: string): { DeleteResult: void };

	DeletePromise(id: string): Promise<void>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType, successCallback: (data: { SearchResult: $D.Framework.ServiceLayer.Services.Organization.ContactOrderPreference[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchResult: $D.Framework.ServiceLayer.Services.Organization.ContactOrderPreference[] }>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): { SearchResult: $D.Framework.ServiceLayer.Services.Organization.ContactOrderPreference[] };

	SearchPromise(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): Promise<$D.Framework.ServiceLayer.Services.Organization.ContactOrderPreference[]>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.Organization.ContactOrderPreference[], successCallback: (data: { SaveListResult: $D.Framework.ServiceLayer.Services.Organization.ContactOrderPreference[] }) => any, errorCallback?: () => any): JQueryPromise<{ SaveListResult: $D.Framework.ServiceLayer.Services.Organization.ContactOrderPreference[] }>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.Organization.ContactOrderPreference[]): { SaveListResult: $D.Framework.ServiceLayer.Services.Organization.ContactOrderPreference[] };

	SaveListPromise(entities: $D.Framework.ServiceLayer.Services.Organization.ContactOrderPreference[]): Promise<$D.Framework.ServiceLayer.Services.Organization.ContactOrderPreference[]>;
}

interface ServicesStatic {
	ContactOrderPreferenceService(): ContactOrderPreferenceServiceStatic;
}
