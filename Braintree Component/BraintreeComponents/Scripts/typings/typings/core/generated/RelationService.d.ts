/// <reference path="./datatypes._base.d.ts" />

interface RelationServiceStatic {

	SearchRelations(searchText: string, desiredCount: number, successCallback: (data: { SearchRelationsResult: $D.Framework.ServiceLayer.Services.Relations.RelationSearchReturn }) => any, errorCallback?: () => any): JQueryPromise<{ SearchRelationsResult: $D.Framework.ServiceLayer.Services.Relations.RelationSearchReturn }>;

	SearchRelations(searchText: string, desiredCount: number): { SearchRelationsResult: $D.Framework.ServiceLayer.Services.Relations.RelationSearchReturn };

	SearchRelationsPromise(searchText: string, desiredCount: number): Promise<$D.Framework.ServiceLayer.Services.Relations.RelationSearchReturn>;

	GetRelationByName(relationName: string, successCallback: (data: { GetRelationByNameResult: $D.Framework.ServiceLayer.Services.Relations.RelationInfo }) => any, errorCallback?: () => any): JQueryPromise<{ GetRelationByNameResult: $D.Framework.ServiceLayer.Services.Relations.RelationInfo }>;

	GetRelationByName(relationName: string): { GetRelationByNameResult: $D.Framework.ServiceLayer.Services.Relations.RelationInfo };

	GetRelationByNamePromise(relationName: string): Promise<$D.Framework.ServiceLayer.Services.Relations.RelationInfo>;

	GetRelationsForAccount(accountId: string, includeFromGroups: boolean, successCallback: (data: { GetRelationsForAccountResult: $D.Framework.ServiceLayer.Services.Relations.Relation[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetRelationsForAccountResult: $D.Framework.ServiceLayer.Services.Relations.Relation[] }>;

	GetRelationsForAccount(accountId: string, includeFromGroups: boolean): { GetRelationsForAccountResult: $D.Framework.ServiceLayer.Services.Relations.Relation[] };

	GetRelationsForAccountPromise(accountId: string, includeFromGroups: boolean): Promise<$D.Framework.ServiceLayer.Services.Relations.Relation[]>;

	GetRelationsForGroup(groupId: string, successCallback: (data: { GetRelationsForGroupResult: $D.Framework.ServiceLayer.Services.Relations.Relation[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetRelationsForGroupResult: $D.Framework.ServiceLayer.Services.Relations.Relation[] }>;

	GetRelationsForGroup(groupId: string): { GetRelationsForGroupResult: $D.Framework.ServiceLayer.Services.Relations.Relation[] };

	GetRelationsForGroupPromise(groupId: string): Promise<$D.Framework.ServiceLayer.Services.Relations.Relation[]>;

	GetRelationsByRelationInfoId(relationInfoId: string, successCallback: (data: { GetRelationsByRelationInfoIdResult: $D.Framework.ServiceLayer.Services.Relations.Relation[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetRelationsByRelationInfoIdResult: $D.Framework.ServiceLayer.Services.Relations.Relation[] }>;

	GetRelationsByRelationInfoId(relationInfoId: string): { GetRelationsByRelationInfoIdResult: $D.Framework.ServiceLayer.Services.Relations.Relation[] };

	GetRelationsByRelationInfoIdPromise(relationInfoId: string): Promise<$D.Framework.ServiceLayer.Services.Relations.Relation[]>;

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

	GetByFolderID(folderID: string, successCallback: (data: { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Relations.RelationInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Relations.RelationInfo[] }>;

	GetByFolderID(folderID: string): { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Relations.RelationInfo[] };

	GetByFolderIDPromise(folderID: string): Promise<$D.Framework.ServiceLayer.Services.Relations.RelationInfo[]>;

	GetByIDs(ids: string[], successCallback: (data: { GetByIDsResult: $D.Framework.ServiceLayer.Services.Relations.RelationInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDsResult: $D.Framework.ServiceLayer.Services.Relations.RelationInfo[] }>;

	GetByIDs(ids: string[]): { GetByIDsResult: $D.Framework.ServiceLayer.Services.Relations.RelationInfo[] };

	GetByIDsPromise(ids: string[]): Promise<$D.Framework.ServiceLayer.Services.Relations.RelationInfo[]>;

	GetByID(id: string, successCallback: (data: { GetByIDResult: $D.Framework.ServiceLayer.Services.Relations.RelationInfo }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDResult: $D.Framework.ServiceLayer.Services.Relations.RelationInfo }>;

	GetByID(id: string): { GetByIDResult: $D.Framework.ServiceLayer.Services.Relations.RelationInfo };

	GetByIDPromise(id: string): Promise<$D.Framework.ServiceLayer.Services.Relations.RelationInfo>;

	GetAll(successCallback: (data: { GetAllResult: $D.Framework.ServiceLayer.Services.Relations.RelationInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllResult: $D.Framework.ServiceLayer.Services.Relations.RelationInfo[] }>;

	GetAll(): { GetAllResult: $D.Framework.ServiceLayer.Services.Relations.RelationInfo[] };

	GetAllPromise(): Promise<$D.Framework.ServiceLayer.Services.Relations.RelationInfo[]>;

	Save(entity: $D.Framework.ServiceLayer.Services.Relations.RelationInfo, successCallback: (data: { SaveResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveResult: void }>;

	Save(entity: $D.Framework.ServiceLayer.Services.Relations.RelationInfo): { SaveResult: void };

	SavePromise(entity: $D.Framework.ServiceLayer.Services.Relations.RelationInfo): Promise<void>;

	Delete(id: string, successCallback: (data: { DeleteResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteResult: void }>;

	Delete(id: string): { DeleteResult: void };

	DeletePromise(id: string): Promise<void>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType, successCallback: (data: { SearchResult: $D.Framework.ServiceLayer.Services.Relations.RelationInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchResult: $D.Framework.ServiceLayer.Services.Relations.RelationInfo[] }>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): { SearchResult: $D.Framework.ServiceLayer.Services.Relations.RelationInfo[] };

	SearchPromise(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): Promise<$D.Framework.ServiceLayer.Services.Relations.RelationInfo[]>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.Relations.RelationInfo[], successCallback: (data: { SaveListResult: $D.Framework.ServiceLayer.Services.Relations.RelationInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ SaveListResult: $D.Framework.ServiceLayer.Services.Relations.RelationInfo[] }>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.Relations.RelationInfo[]): { SaveListResult: $D.Framework.ServiceLayer.Services.Relations.RelationInfo[] };

	SaveListPromise(entities: $D.Framework.ServiceLayer.Services.Relations.RelationInfo[]): Promise<$D.Framework.ServiceLayer.Services.Relations.RelationInfo[]>;
}

interface ServicesStatic {
	RelationService(): RelationServiceStatic;
}
