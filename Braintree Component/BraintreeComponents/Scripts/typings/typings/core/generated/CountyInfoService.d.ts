/// <reference path="./datatypes._base.d.ts" />

interface CountyInfoServiceStatic {

	GetCountiesByState(stateName: string, successCallback: (data: { GetCountiesByStateResult: $D.Framework.ServiceLayer.Services.Organization.CountyInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetCountiesByStateResult: $D.Framework.ServiceLayer.Services.Organization.CountyInfo[] }>;

	GetCountiesByState(stateName: string): { GetCountiesByStateResult: $D.Framework.ServiceLayer.Services.Organization.CountyInfo[] };

	GetCountiesByStatePromise(stateName: string): Promise<$D.Framework.ServiceLayer.Services.Organization.CountyInfo[]>;

	GetCountyByName(countyName: string, successCallback: (data: { GetCountyByNameResult: $D.Framework.ServiceLayer.Services.Organization.CountyInfo }) => any, errorCallback?: () => any): JQueryPromise<{ GetCountyByNameResult: $D.Framework.ServiceLayer.Services.Organization.CountyInfo }>;

	GetCountyByName(countyName: string): { GetCountyByNameResult: $D.Framework.ServiceLayer.Services.Organization.CountyInfo };

	GetCountyByNamePromise(countyName: string): Promise<$D.Framework.ServiceLayer.Services.Organization.CountyInfo>;

	GetCountyByStateAndName(stateName: string, countyName: string, successCallback: (data: { GetCountyByStateAndNameResult: $D.Framework.ServiceLayer.Services.Organization.CountyInfo }) => any, errorCallback?: () => any): JQueryPromise<{ GetCountyByStateAndNameResult: $D.Framework.ServiceLayer.Services.Organization.CountyInfo }>;

	GetCountyByStateAndName(stateName: string, countyName: string): { GetCountyByStateAndNameResult: $D.Framework.ServiceLayer.Services.Organization.CountyInfo };

	GetCountyByStateAndNamePromise(stateName: string, countyName: string): Promise<$D.Framework.ServiceLayer.Services.Organization.CountyInfo>;

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

	GetByFolderID(folderID: string, successCallback: (data: { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Organization.CountyInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Organization.CountyInfo[] }>;

	GetByFolderID(folderID: string): { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Organization.CountyInfo[] };

	GetByFolderIDPromise(folderID: string): Promise<$D.Framework.ServiceLayer.Services.Organization.CountyInfo[]>;

	GetByIDs(ids: string[], successCallback: (data: { GetByIDsResult: $D.Framework.ServiceLayer.Services.Organization.CountyInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDsResult: $D.Framework.ServiceLayer.Services.Organization.CountyInfo[] }>;

	GetByIDs(ids: string[]): { GetByIDsResult: $D.Framework.ServiceLayer.Services.Organization.CountyInfo[] };

	GetByIDsPromise(ids: string[]): Promise<$D.Framework.ServiceLayer.Services.Organization.CountyInfo[]>;

	GetByID(id: string, successCallback: (data: { GetByIDResult: $D.Framework.ServiceLayer.Services.Organization.CountyInfo }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDResult: $D.Framework.ServiceLayer.Services.Organization.CountyInfo }>;

	GetByID(id: string): { GetByIDResult: $D.Framework.ServiceLayer.Services.Organization.CountyInfo };

	GetByIDPromise(id: string): Promise<$D.Framework.ServiceLayer.Services.Organization.CountyInfo>;

	GetAll(successCallback: (data: { GetAllResult: $D.Framework.ServiceLayer.Services.Organization.CountyInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllResult: $D.Framework.ServiceLayer.Services.Organization.CountyInfo[] }>;

	GetAll(): { GetAllResult: $D.Framework.ServiceLayer.Services.Organization.CountyInfo[] };

	GetAllPromise(): Promise<$D.Framework.ServiceLayer.Services.Organization.CountyInfo[]>;

	Save(entity: $D.Framework.ServiceLayer.Services.Organization.CountyInfo, successCallback: (data: { SaveResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveResult: void }>;

	Save(entity: $D.Framework.ServiceLayer.Services.Organization.CountyInfo): { SaveResult: void };

	SavePromise(entity: $D.Framework.ServiceLayer.Services.Organization.CountyInfo): Promise<void>;

	Delete(id: string, successCallback: (data: { DeleteResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteResult: void }>;

	Delete(id: string): { DeleteResult: void };

	DeletePromise(id: string): Promise<void>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType, successCallback: (data: { SearchResult: $D.Framework.ServiceLayer.Services.Organization.CountyInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchResult: $D.Framework.ServiceLayer.Services.Organization.CountyInfo[] }>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): { SearchResult: $D.Framework.ServiceLayer.Services.Organization.CountyInfo[] };

	SearchPromise(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): Promise<$D.Framework.ServiceLayer.Services.Organization.CountyInfo[]>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.Organization.CountyInfo[], successCallback: (data: { SaveListResult: $D.Framework.ServiceLayer.Services.Organization.CountyInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ SaveListResult: $D.Framework.ServiceLayer.Services.Organization.CountyInfo[] }>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.Organization.CountyInfo[]): { SaveListResult: $D.Framework.ServiceLayer.Services.Organization.CountyInfo[] };

	SaveListPromise(entities: $D.Framework.ServiceLayer.Services.Organization.CountyInfo[]): Promise<$D.Framework.ServiceLayer.Services.Organization.CountyInfo[]>;
}

interface ServicesStatic {
	CountyInfoService(): CountyInfoServiceStatic;
}
