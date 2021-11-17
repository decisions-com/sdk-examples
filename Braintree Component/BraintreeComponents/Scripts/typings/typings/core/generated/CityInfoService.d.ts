/// <reference path="./datatypes._base.d.ts" />

interface CityInfoServiceStatic {

	GetCitiesByCounty(countyName: string, successCallback: (data: { GetCitiesByCountyResult: $D.Framework.ServiceLayer.Services.Organization.CityInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetCitiesByCountyResult: $D.Framework.ServiceLayer.Services.Organization.CityInfo[] }>;

	GetCitiesByCounty(countyName: string): { GetCitiesByCountyResult: $D.Framework.ServiceLayer.Services.Organization.CityInfo[] };

	GetCitiesByCountyPromise(countyName: string): Promise<$D.Framework.ServiceLayer.Services.Organization.CityInfo[]>;

	GetCityByName(cityName: string, successCallback: (data: { GetCityByNameResult: $D.Framework.ServiceLayer.Services.Organization.CityInfo }) => any, errorCallback?: () => any): JQueryPromise<{ GetCityByNameResult: $D.Framework.ServiceLayer.Services.Organization.CityInfo }>;

	GetCityByName(cityName: string): { GetCityByNameResult: $D.Framework.ServiceLayer.Services.Organization.CityInfo };

	GetCityByNamePromise(cityName: string): Promise<$D.Framework.ServiceLayer.Services.Organization.CityInfo>;

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

	GetByFolderID(folderID: string, successCallback: (data: { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Organization.CityInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Organization.CityInfo[] }>;

	GetByFolderID(folderID: string): { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Organization.CityInfo[] };

	GetByFolderIDPromise(folderID: string): Promise<$D.Framework.ServiceLayer.Services.Organization.CityInfo[]>;

	GetByIDs(ids: string[], successCallback: (data: { GetByIDsResult: $D.Framework.ServiceLayer.Services.Organization.CityInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDsResult: $D.Framework.ServiceLayer.Services.Organization.CityInfo[] }>;

	GetByIDs(ids: string[]): { GetByIDsResult: $D.Framework.ServiceLayer.Services.Organization.CityInfo[] };

	GetByIDsPromise(ids: string[]): Promise<$D.Framework.ServiceLayer.Services.Organization.CityInfo[]>;

	GetByID(id: string, successCallback: (data: { GetByIDResult: $D.Framework.ServiceLayer.Services.Organization.CityInfo }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDResult: $D.Framework.ServiceLayer.Services.Organization.CityInfo }>;

	GetByID(id: string): { GetByIDResult: $D.Framework.ServiceLayer.Services.Organization.CityInfo };

	GetByIDPromise(id: string): Promise<$D.Framework.ServiceLayer.Services.Organization.CityInfo>;

	GetAll(successCallback: (data: { GetAllResult: $D.Framework.ServiceLayer.Services.Organization.CityInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllResult: $D.Framework.ServiceLayer.Services.Organization.CityInfo[] }>;

	GetAll(): { GetAllResult: $D.Framework.ServiceLayer.Services.Organization.CityInfo[] };

	GetAllPromise(): Promise<$D.Framework.ServiceLayer.Services.Organization.CityInfo[]>;

	Save(entity: $D.Framework.ServiceLayer.Services.Organization.CityInfo, successCallback: (data: { SaveResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveResult: void }>;

	Save(entity: $D.Framework.ServiceLayer.Services.Organization.CityInfo): { SaveResult: void };

	SavePromise(entity: $D.Framework.ServiceLayer.Services.Organization.CityInfo): Promise<void>;

	Delete(id: string, successCallback: (data: { DeleteResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteResult: void }>;

	Delete(id: string): { DeleteResult: void };

	DeletePromise(id: string): Promise<void>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType, successCallback: (data: { SearchResult: $D.Framework.ServiceLayer.Services.Organization.CityInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchResult: $D.Framework.ServiceLayer.Services.Organization.CityInfo[] }>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): { SearchResult: $D.Framework.ServiceLayer.Services.Organization.CityInfo[] };

	SearchPromise(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): Promise<$D.Framework.ServiceLayer.Services.Organization.CityInfo[]>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.Organization.CityInfo[], successCallback: (data: { SaveListResult: $D.Framework.ServiceLayer.Services.Organization.CityInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ SaveListResult: $D.Framework.ServiceLayer.Services.Organization.CityInfo[] }>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.Organization.CityInfo[]): { SaveListResult: $D.Framework.ServiceLayer.Services.Organization.CityInfo[] };

	SaveListPromise(entities: $D.Framework.ServiceLayer.Services.Organization.CityInfo[]): Promise<$D.Framework.ServiceLayer.Services.Organization.CityInfo[]>;
}

interface ServicesStatic {
	CityInfoService(): CityInfoServiceStatic;
}
