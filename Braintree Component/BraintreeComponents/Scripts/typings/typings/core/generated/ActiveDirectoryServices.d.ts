/// <reference path="./datatypes._base.d.ts" />

interface ActiveDirectoryServicesStatic {

	GetListForActiveDirectory(target: $D.Framework.ServiceLayer.Services.Accounts.ActiveDirectory.ActiveDirectoryServerRegistation, parentNode: string, isOrgUnit: boolean, successCallback: (data: { GetListForActiveDirectoryResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetListForActiveDirectoryResult: string[] }>;

	GetListForActiveDirectory(target: $D.Framework.ServiceLayer.Services.Accounts.ActiveDirectory.ActiveDirectoryServerRegistation, parentNode: string, isOrgUnit: boolean): { GetListForActiveDirectoryResult: string[] };

	GetListForActiveDirectoryPromise(target: $D.Framework.ServiceLayer.Services.Accounts.ActiveDirectory.ActiveDirectoryServerRegistation, parentNode: string, isOrgUnit: boolean): Promise<string[]>;

	GetLimitedListForActiveDirectory(target: $D.Framework.ServiceLayer.Services.Accounts.ActiveDirectory.ActiveDirectoryServerRegistation, parentNode: string, isOrgUnit: boolean, maxSize: number, successCallback: (data: { GetLimitedListForActiveDirectoryResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetLimitedListForActiveDirectoryResult: string[] }>;

	GetLimitedListForActiveDirectory(target: $D.Framework.ServiceLayer.Services.Accounts.ActiveDirectory.ActiveDirectoryServerRegistation, parentNode: string, isOrgUnit: boolean, maxSize: number): { GetLimitedListForActiveDirectoryResult: string[] };

	GetLimitedListForActiveDirectoryPromise(target: $D.Framework.ServiceLayer.Services.Accounts.ActiveDirectory.ActiveDirectoryServerRegistation, parentNode: string, isOrgUnit: boolean, maxSize: number): Promise<string[]>;

	GetOrgsForActiveDirectory(editingContextId: string, parentNode: string, isOrgUnit: boolean, maxSize: number, successCallback: (data: { GetOrgsForActiveDirectoryResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetOrgsForActiveDirectoryResult: string[] }>;

	GetOrgsForActiveDirectory(editingContextId: string, parentNode: string, isOrgUnit: boolean, maxSize: number): { GetOrgsForActiveDirectoryResult: string[] };

	GetOrgsForActiveDirectoryPromise(editingContextId: string, parentNode: string, isOrgUnit: boolean, maxSize: number): Promise<string[]>;

	SearchListForActiveDirectory(target: $D.Framework.ServiceLayer.Services.Accounts.ActiveDirectory.ActiveDirectoryServerRegistation, searchNode: string, isOrgUnit: boolean, successCallback: (data: { SearchListForActiveDirectoryResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchListForActiveDirectoryResult: string[] }>;

	SearchListForActiveDirectory(target: $D.Framework.ServiceLayer.Services.Accounts.ActiveDirectory.ActiveDirectoryServerRegistation, searchNode: string, isOrgUnit: boolean): { SearchListForActiveDirectoryResult: string[] };

	SearchListForActiveDirectoryPromise(target: $D.Framework.ServiceLayer.Services.Accounts.ActiveDirectory.ActiveDirectoryServerRegistation, searchNode: string, isOrgUnit: boolean): Promise<string[]>;

	SearchADListByEditingContextId(editingContextId: string, searchNode: string, isOrgUnit: boolean, successCallback: (data: { SearchADListByEditingContextIdResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchADListByEditingContextIdResult: string[] }>;

	SearchADListByEditingContextId(editingContextId: string, searchNode: string, isOrgUnit: boolean): { SearchADListByEditingContextIdResult: string[] };

	SearchADListByEditingContextIdPromise(editingContextId: string, searchNode: string, isOrgUnit: boolean): Promise<string[]>;

	GetActiveDirectoryServerRegistationForUser(adUser: string, successCallback: (data: { GetActiveDirectoryServerRegistationForUserResult: $D.Framework.ServiceLayer.Services.Accounts.ActiveDirectory.ActiveDirectoryServerRegistation }) => any, errorCallback?: () => any): JQueryPromise<{ GetActiveDirectoryServerRegistationForUserResult: $D.Framework.ServiceLayer.Services.Accounts.ActiveDirectory.ActiveDirectoryServerRegistation }>;

	GetActiveDirectoryServerRegistationForUser(adUser: string): { GetActiveDirectoryServerRegistationForUserResult: $D.Framework.ServiceLayer.Services.Accounts.ActiveDirectory.ActiveDirectoryServerRegistation };

	GetActiveDirectoryServerRegistationForUserPromise(adUser: string): Promise<$D.Framework.ServiceLayer.Services.Accounts.ActiveDirectory.ActiveDirectoryServerRegistation>;

	GetPortableServerRegistrations(successCallback: (data: { GetPortableServerRegistrationsResult: $D.Framework.ServiceLayer.Services.Accounts.ActiveDirectory.PortableActiveDirectoryServerRegistation[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetPortableServerRegistrationsResult: $D.Framework.ServiceLayer.Services.Accounts.ActiveDirectory.PortableActiveDirectoryServerRegistation[] }>;

	GetPortableServerRegistrations(): { GetPortableServerRegistrationsResult: $D.Framework.ServiceLayer.Services.Accounts.ActiveDirectory.PortableActiveDirectoryServerRegistation[] };

	GetPortableServerRegistrationsPromise(): Promise<$D.Framework.ServiceLayer.Services.Accounts.ActiveDirectory.PortableActiveDirectoryServerRegistation[]>;

	AddActiveDirectoryAccount(adUser: string, successCallback: (data: { AddActiveDirectoryAccountResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddActiveDirectoryAccountResult: void }>;

	AddActiveDirectoryAccount(adUser: string): { AddActiveDirectoryAccountResult: void };

	AddActiveDirectoryAccountPromise(adUser: string): Promise<void>;

	GetActiveDirectorySettings(successCallback: (data: { GetActiveDirectorySettingsResult: $D.Framework.ServiceLayer.Services.Accounts.ActiveDirectory.ActiveDirectorySettings }) => any, errorCallback?: () => any): JQueryPromise<{ GetActiveDirectorySettingsResult: $D.Framework.ServiceLayer.Services.Accounts.ActiveDirectory.ActiveDirectorySettings }>;

	GetActiveDirectorySettings(): { GetActiveDirectorySettingsResult: $D.Framework.ServiceLayer.Services.Accounts.ActiveDirectory.ActiveDirectorySettings };

	GetActiveDirectorySettingsPromise(): Promise<$D.Framework.ServiceLayer.Services.Accounts.ActiveDirectory.ActiveDirectorySettings>;

	TestLogin(domainAndUserName: string, password: string, successCallback: (data: { TestLoginResult: $D.Framework.ServiceLayer.Services.Accounts.ActiveDirectory.ActiveDirectoryLoginTestResult }) => any, errorCallback?: () => any): JQueryPromise<{ TestLoginResult: $D.Framework.ServiceLayer.Services.Accounts.ActiveDirectory.ActiveDirectoryLoginTestResult }>;

	TestLogin(domainAndUserName: string, password: string): { TestLoginResult: $D.Framework.ServiceLayer.Services.Accounts.ActiveDirectory.ActiveDirectoryLoginTestResult };

	TestLoginPromise(domainAndUserName: string, password: string): Promise<$D.Framework.ServiceLayer.Services.Accounts.ActiveDirectory.ActiveDirectoryLoginTestResult>;

	SyncFoundUsers(serverId: string, foundMembers: $D.Framework.ServiceLayer.Services.Accounts.ActiveDirectory.ActiveDirectoryMember[], successCallback: (data: { SyncFoundUsersResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ SyncFoundUsersResult: string[] }>;

	SyncFoundUsers(serverId: string, foundMembers: $D.Framework.ServiceLayer.Services.Accounts.ActiveDirectory.ActiveDirectoryMember[]): { SyncFoundUsersResult: string[] };

	SyncFoundUsersPromise(serverId: string, foundMembers: $D.Framework.ServiceLayer.Services.Accounts.ActiveDirectory.ActiveDirectoryMember[]): Promise<string[]>;

	GetUserIdentifiersForADLDAPServerId(serverId: string, successCallback: (data: { GetUserIdentifiersForADLDAPServerIdResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetUserIdentifiersForADLDAPServerIdResult: string[] }>;

	GetUserIdentifiersForADLDAPServerId(serverId: string): { GetUserIdentifiersForADLDAPServerIdResult: string[] };

	GetUserIdentifiersForADLDAPServerIdPromise(serverId: string): Promise<string[]>;

	DeactivateADLDAPUsers(serverId: string, userIds: string[], successCallback: (data: { DeactivateADLDAPUsersResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeactivateADLDAPUsersResult: void }>;

	DeactivateADLDAPUsers(serverId: string, userIds: string[]): { DeactivateADLDAPUsersResult: void };

	DeactivateADLDAPUsersPromise(serverId: string, userIds: string[]): Promise<void>;

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
	ActiveDirectoryServices(): ActiveDirectoryServicesStatic;
}
