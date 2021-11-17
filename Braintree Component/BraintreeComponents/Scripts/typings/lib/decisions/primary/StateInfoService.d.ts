/// <reference path="./datatypes._base.d.ts" />

interface StateInfoServiceStatic {

	GetStatesByCountry(countryName: string, successCallback: (data: { GetStatesByCountryResult: $D.Framework.ServiceLayer.Services.Organization.StateInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetStatesByCountryResult: $D.Framework.ServiceLayer.Services.Organization.StateInfo[] }>;

	GetStatesByCountry(countryName: string): { GetStatesByCountryResult: $D.Framework.ServiceLayer.Services.Organization.StateInfo[] };

	GetStatesByCountryPromise(countryName: string): Promise<$D.Framework.ServiceLayer.Services.Organization.StateInfo[]>;

	GetStateByName(stateName: string, successCallback: (data: { GetStateByNameResult: $D.Framework.ServiceLayer.Services.Organization.StateInfo }) => any, errorCallback?: () => any): JQueryPromise<{ GetStateByNameResult: $D.Framework.ServiceLayer.Services.Organization.StateInfo }>;

	GetStateByName(stateName: string): { GetStateByNameResult: $D.Framework.ServiceLayer.Services.Organization.StateInfo };

	GetStateByNamePromise(stateName: string): Promise<$D.Framework.ServiceLayer.Services.Organization.StateInfo>;

	GetStateByCode(stateCode: string, successCallback: (data: { GetStateByCodeResult: $D.Framework.ServiceLayer.Services.Organization.StateInfo }) => any, errorCallback?: () => any): JQueryPromise<{ GetStateByCodeResult: $D.Framework.ServiceLayer.Services.Organization.StateInfo }>;

	GetStateByCode(stateCode: string): { GetStateByCodeResult: $D.Framework.ServiceLayer.Services.Organization.StateInfo };

	GetStateByCodePromise(stateCode: string): Promise<$D.Framework.ServiceLayer.Services.Organization.StateInfo>;

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

	GetByFolderID(folderID: string, successCallback: (data: { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Organization.StateInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Organization.StateInfo[] }>;

	GetByFolderID(folderID: string): { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Organization.StateInfo[] };

	GetByFolderIDPromise(folderID: string): Promise<$D.Framework.ServiceLayer.Services.Organization.StateInfo[]>;

	GetByIDs(ids: string[], successCallback: (data: { GetByIDsResult: $D.Framework.ServiceLayer.Services.Organization.StateInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDsResult: $D.Framework.ServiceLayer.Services.Organization.StateInfo[] }>;

	GetByIDs(ids: string[]): { GetByIDsResult: $D.Framework.ServiceLayer.Services.Organization.StateInfo[] };

	GetByIDsPromise(ids: string[]): Promise<$D.Framework.ServiceLayer.Services.Organization.StateInfo[]>;

	GetByID(id: string, successCallback: (data: { GetByIDResult: $D.Framework.ServiceLayer.Services.Organization.StateInfo }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDResult: $D.Framework.ServiceLayer.Services.Organization.StateInfo }>;

	GetByID(id: string): { GetByIDResult: $D.Framework.ServiceLayer.Services.Organization.StateInfo };

	GetByIDPromise(id: string): Promise<$D.Framework.ServiceLayer.Services.Organization.StateInfo>;

	GetAll(successCallback: (data: { GetAllResult: $D.Framework.ServiceLayer.Services.Organization.StateInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllResult: $D.Framework.ServiceLayer.Services.Organization.StateInfo[] }>;

	GetAll(): { GetAllResult: $D.Framework.ServiceLayer.Services.Organization.StateInfo[] };

	GetAllPromise(): Promise<$D.Framework.ServiceLayer.Services.Organization.StateInfo[]>;

	Save(entity: $D.Framework.ServiceLayer.Services.Organization.StateInfo, successCallback: (data: { SaveResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveResult: void }>;

	Save(entity: $D.Framework.ServiceLayer.Services.Organization.StateInfo): { SaveResult: void };

	SavePromise(entity: $D.Framework.ServiceLayer.Services.Organization.StateInfo): Promise<void>;

	Delete(id: string, successCallback: (data: { DeleteResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteResult: void }>;

	Delete(id: string): { DeleteResult: void };

	DeletePromise(id: string): Promise<void>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType, successCallback: (data: { SearchResult: $D.Framework.ServiceLayer.Services.Organization.StateInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchResult: $D.Framework.ServiceLayer.Services.Organization.StateInfo[] }>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): { SearchResult: $D.Framework.ServiceLayer.Services.Organization.StateInfo[] };

	SearchPromise(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): Promise<$D.Framework.ServiceLayer.Services.Organization.StateInfo[]>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.Organization.StateInfo[], successCallback: (data: { SaveListResult: $D.Framework.ServiceLayer.Services.Organization.StateInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ SaveListResult: $D.Framework.ServiceLayer.Services.Organization.StateInfo[] }>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.Organization.StateInfo[]): { SaveListResult: $D.Framework.ServiceLayer.Services.Organization.StateInfo[] };

	SaveListPromise(entities: $D.Framework.ServiceLayer.Services.Organization.StateInfo[]): Promise<$D.Framework.ServiceLayer.Services.Organization.StateInfo[]>;
}

interface ServicesStatic {
	StateInfoService(): StateInfoServiceStatic;
}
