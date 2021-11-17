/// <reference path="./datatypes._base.d.ts" />

interface GroupServiceStatic {

	AddNewGroup(group: $D.Framework.ServiceLayer.Services.Accounts.Group, successCallback: (data: { AddNewGroupResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddNewGroupResult: void }>;

	AddNewGroup(group: $D.Framework.ServiceLayer.Services.Accounts.Group): { AddNewGroupResult: void };

	AddNewGroupPromise(group: $D.Framework.ServiceLayer.Services.Accounts.Group): Promise<void>;

	GetByGroupName(groupName: string, successCallback: (data: { GetByGroupNameResult: $D.Framework.ServiceLayer.Services.Accounts.Group }) => any, errorCallback?: () => any): JQueryPromise<{ GetByGroupNameResult: $D.Framework.ServiceLayer.Services.Accounts.Group }>;

	GetByGroupName(groupName: string): { GetByGroupNameResult: $D.Framework.ServiceLayer.Services.Accounts.Group };

	GetByGroupNamePromise(groupName: string): Promise<$D.Framework.ServiceLayer.Services.Accounts.Group>;

	GetByGroupLDAPObjectId(LDAPObjectId: string, successCallback: (data: { GetByGroupLDAPObjectIdResult: $D.Framework.ServiceLayer.Services.Accounts.Group }) => any, errorCallback?: () => any): JQueryPromise<{ GetByGroupLDAPObjectIdResult: $D.Framework.ServiceLayer.Services.Accounts.Group }>;

	GetByGroupLDAPObjectId(LDAPObjectId: string): { GetByGroupLDAPObjectIdResult: $D.Framework.ServiceLayer.Services.Accounts.Group };

	GetByGroupLDAPObjectIdPromise(LDAPObjectId: string): Promise<$D.Framework.ServiceLayer.Services.Accounts.Group>;

	GetByGroupNames(groupNames: string[], successCallback: (data: { GetByGroupNamesResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByGroupNamesResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] }>;

	GetByGroupNames(groupNames: string[]): { GetByGroupNamesResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] };

	GetByGroupNamesPromise(groupNames: string[]): Promise<$D.Framework.ServiceLayer.Services.Accounts.Group[]>;

	AddModuleRights(groupId: string, moduleRightsClassName: string, isModuleRightsAdministrator: boolean, successCallback: (data: { AddModuleRightsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddModuleRightsResult: void }>;

	AddModuleRights(groupId: string, moduleRightsClassName: string, isModuleRightsAdministrator: boolean): { AddModuleRightsResult: void };

	AddModuleRightsPromise(groupId: string, moduleRightsClassName: string, isModuleRightsAdministrator: boolean): Promise<void>;

	GetGroupModuleRightsList(groupId: string, successCallback: (data: { GetGroupModuleRightsListResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetGroupModuleRightsListResult: string[] }>;

	GetGroupModuleRightsList(groupId: string): { GetGroupModuleRightsListResult: string[] };

	GetGroupModuleRightsListPromise(groupId: string): Promise<string[]>;

	RemoveModuleRights(groupId: string, moduleRightsClassName: string, successCallback: (data: { RemoveModuleRightsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveModuleRightsResult: void }>;

	RemoveModuleRights(groupId: string, moduleRightsClassName: string): { RemoveModuleRightsResult: void };

	RemoveModuleRightsPromise(groupId: string, moduleRightsClassName: string): Promise<void>;

	SetGroupAccounts(groupId: string, accountIds: string[], successCallback: (data: { SetGroupAccountsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetGroupAccountsResult: void }>;

	SetGroupAccounts(groupId: string, accountIds: string[]): { SetGroupAccountsResult: void };

	SetGroupAccountsPromise(groupId: string, accountIds: string[]): Promise<void>;

	SearchGroups(userContext: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, text: string, countDesired: number, successCallback: (data: { SearchGroupsResult: $D.Framework.ServiceLayer.Services.Groups.GroupSearchReturn }) => any, errorCallback?: () => any): JQueryPromise<{ SearchGroupsResult: $D.Framework.ServiceLayer.Services.Groups.GroupSearchReturn }>;

	SearchGroups(userContext: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, text: string, countDesired: number): { SearchGroupsResult: $D.Framework.ServiceLayer.Services.Groups.GroupSearchReturn };

	SearchGroupsPromise(userContext: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, text: string, countDesired: number): Promise<$D.Framework.ServiceLayer.Services.Groups.GroupSearchReturn>;

	AddModuleRightsInstance(groupID: string, rights: $D.Framework.ServiceLayer.AbstractModuleRights, successCallback: (data: { AddModuleRightsInstanceResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddModuleRightsInstanceResult: void }>;

	AddModuleRightsInstance(groupID: string, rights: $D.Framework.ServiceLayer.AbstractModuleRights): { AddModuleRightsInstanceResult: void };

	AddModuleRightsInstancePromise(groupID: string, rights: $D.Framework.ServiceLayer.AbstractModuleRights): Promise<void>;

	GetAccountsForGroup(groupID: string, successCallback: (data: { GetAccountsForGroupResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAccountsForGroupResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }>;

	GetAccountsForGroup(groupID: string): { GetAccountsForGroupResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] };

	GetAccountsForGroupPromise(groupID: string): Promise<$D.Framework.ServiceLayer.Services.Accounts.Account[]>;

	GetLimitedAccountsForGroup(groupID: string, searchText: string, count: number, successCallback: (data: { GetLimitedAccountsForGroupResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetLimitedAccountsForGroupResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }>;

	GetLimitedAccountsForGroup(groupID: string, searchText: string, count: number): { GetLimitedAccountsForGroupResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] };

	GetLimitedAccountsForGroupPromise(groupID: string, searchText: string, count: number): Promise<$D.Framework.ServiceLayer.Services.Accounts.Account[]>;

	GetGroupsForAccount(accountId: string, successCallback: (data: { GetGroupsForAccountResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetGroupsForAccountResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] }>;

	GetGroupsForAccount(accountId: string): { GetGroupsForAccountResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] };

	GetGroupsForAccountPromise(accountId: string): Promise<$D.Framework.ServiceLayer.Services.Accounts.Group[]>;

	GetMyGroups(userContext: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, successCallback: (data: { GetMyGroupsResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMyGroupsResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] }>;

	GetMyGroups(userContext: $D.Framework.ServiceLayer.Utilities.AbstractUserContext): { GetMyGroupsResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] };

	GetMyGroupsPromise(userContext: $D.Framework.ServiceLayer.Utilities.AbstractUserContext): Promise<$D.Framework.ServiceLayer.Services.Accounts.Group[]>;

	GetGroupMemberCount(GroupId: string, successCallback: (data: { GetGroupMemberCountResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ GetGroupMemberCountResult: any }>;

	GetGroupMemberCount(GroupId: string): { GetGroupMemberCountResult: any };

	GetGroupMemberCountPromise(GroupId: string): Promise<any>;

	GetUsersInGroupByGroupId(GroupId: string, Limit: any, successCallback: (data: { GetUsersInGroupByGroupIdResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetUsersInGroupByGroupIdResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }>;

	GetUsersInGroupByGroupId(GroupId: string, Limit: any): { GetUsersInGroupByGroupIdResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] };

	GetUsersInGroupByGroupIdPromise(GroupId: string, Limit: any): Promise<$D.Framework.ServiceLayer.Services.Accounts.Account[]>;

	FilterAssociatedAccountsByGroupId(GroupId: string, FilterString: string, Limit: any, successCallback: (data: { FilterAssociatedAccountsByGroupIdResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }) => any, errorCallback?: () => any): JQueryPromise<{ FilterAssociatedAccountsByGroupIdResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }>;

	FilterAssociatedAccountsByGroupId(GroupId: string, FilterString: string, Limit: any): { FilterAssociatedAccountsByGroupIdResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] };

	FilterAssociatedAccountsByGroupIdPromise(GroupId: string, FilterString: string, Limit: any): Promise<$D.Framework.ServiceLayer.Services.Accounts.Account[]>;

	GetAbstainedAccountCountByGroupId(GroupId: string, successCallback: (data: { GetAbstainedAccountCountByGroupIdResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ GetAbstainedAccountCountByGroupIdResult: any }>;

	GetAbstainedAccountCountByGroupId(GroupId: string): { GetAbstainedAccountCountByGroupIdResult: any };

	GetAbstainedAccountCountByGroupIdPromise(GroupId: string): Promise<any>;

	GetAbstainedAccountsByGroupId(GroupId: string, Limit: any, successCallback: (data: { GetAbstainedAccountsByGroupIdResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAbstainedAccountsByGroupIdResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }>;

	GetAbstainedAccountsByGroupId(GroupId: string, Limit: any): { GetAbstainedAccountsByGroupIdResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] };

	GetAbstainedAccountsByGroupIdPromise(GroupId: string, Limit: any): Promise<$D.Framework.ServiceLayer.Services.Accounts.Account[]>;

	FilterAbstainedAccountsByGroupId(GroupId: string, FilterString: string, Limit: any, successCallback: (data: { FilterAbstainedAccountsByGroupIdResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }) => any, errorCallback?: () => any): JQueryPromise<{ FilterAbstainedAccountsByGroupIdResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }>;

	FilterAbstainedAccountsByGroupId(GroupId: string, FilterString: string, Limit: any): { FilterAbstainedAccountsByGroupIdResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] };

	FilterAbstainedAccountsByGroupIdPromise(GroupId: string, FilterString: string, Limit: any): Promise<$D.Framework.ServiceLayer.Services.Accounts.Account[]>;

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

	GetByFolderID(folderID: string, successCallback: (data: { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] }>;

	GetByFolderID(folderID: string): { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] };

	GetByFolderIDPromise(folderID: string): Promise<$D.Framework.ServiceLayer.Services.Accounts.Group[]>;

	GetByIDs(ids: string[], successCallback: (data: { GetByIDsResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDsResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] }>;

	GetByIDs(ids: string[]): { GetByIDsResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] };

	GetByIDsPromise(ids: string[]): Promise<$D.Framework.ServiceLayer.Services.Accounts.Group[]>;

	GetByID(id: string, successCallback: (data: { GetByIDResult: $D.Framework.ServiceLayer.Services.Accounts.Group }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDResult: $D.Framework.ServiceLayer.Services.Accounts.Group }>;

	GetByID(id: string): { GetByIDResult: $D.Framework.ServiceLayer.Services.Accounts.Group };

	GetByIDPromise(id: string): Promise<$D.Framework.ServiceLayer.Services.Accounts.Group>;

	GetAll(successCallback: (data: { GetAllResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] }>;

	GetAll(): { GetAllResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] };

	GetAllPromise(): Promise<$D.Framework.ServiceLayer.Services.Accounts.Group[]>;

	Save(entity: $D.Framework.ServiceLayer.Services.Accounts.Group, successCallback: (data: { SaveResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveResult: void }>;

	Save(entity: $D.Framework.ServiceLayer.Services.Accounts.Group): { SaveResult: void };

	SavePromise(entity: $D.Framework.ServiceLayer.Services.Accounts.Group): Promise<void>;

	Delete(id: string, successCallback: (data: { DeleteResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteResult: void }>;

	Delete(id: string): { DeleteResult: void };

	DeletePromise(id: string): Promise<void>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType, successCallback: (data: { SearchResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] }>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): { SearchResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] };

	SearchPromise(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): Promise<$D.Framework.ServiceLayer.Services.Accounts.Group[]>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.Accounts.Group[], successCallback: (data: { SaveListResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] }) => any, errorCallback?: () => any): JQueryPromise<{ SaveListResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] }>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.Accounts.Group[]): { SaveListResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] };

	SaveListPromise(entities: $D.Framework.ServiceLayer.Services.Accounts.Group[]): Promise<$D.Framework.ServiceLayer.Services.Accounts.Group[]>;
}

interface ServicesStatic {
	GroupService(): GroupServiceStatic;
}
