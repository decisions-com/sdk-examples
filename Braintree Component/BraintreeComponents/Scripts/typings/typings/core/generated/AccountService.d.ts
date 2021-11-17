/// <reference path="./datatypes._base.d.ts" />

interface AccountServiceStatic {

	LoginUser(context: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, successCallback: (data: { LoginUserResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext }) => any, errorCallback?: () => any): JQueryPromise<{ LoginUserResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext }>;

	LoginUser(context: $D.Framework.ServiceLayer.Utilities.AbstractUserContext): { LoginUserResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext };

	LoginUserPromise(context: $D.Framework.ServiceLayer.Utilities.AbstractUserContext): Promise<$D.Framework.ServiceLayer.Utilities.SessionUserContext>;

	LoginUserWithIP(context: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, userIPAddress: string, successCallback: (data: { LoginUserWithIPResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext }) => any, errorCallback?: () => any): JQueryPromise<{ LoginUserWithIPResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext }>;

	LoginUserWithIP(context: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, userIPAddress: string): { LoginUserWithIPResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext };

	LoginUserWithIPPromise(context: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, userIPAddress: string): Promise<$D.Framework.ServiceLayer.Utilities.SessionUserContext>;

	LoginWithoutSharedSession(context: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, successCallback: (data: { LoginWithoutSharedSessionResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext }) => any, errorCallback?: () => any): JQueryPromise<{ LoginWithoutSharedSessionResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext }>;

	LoginWithoutSharedSession(context: $D.Framework.ServiceLayer.Utilities.AbstractUserContext): { LoginWithoutSharedSessionResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext };

	LoginWithoutSharedSessionPromise(context: $D.Framework.ServiceLayer.Utilities.AbstractUserContext): Promise<$D.Framework.ServiceLayer.Utilities.SessionUserContext>;

	LoginUserWithTimeZoneInfo(timeZoneId: string, successCallback: (data: { LoginUserWithTimeZoneInfoResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext }) => any, errorCallback?: () => any): JQueryPromise<{ LoginUserWithTimeZoneInfoResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext }>;

	LoginUserWithTimeZoneInfo(timeZoneId: string): { LoginUserWithTimeZoneInfoResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext };

	LoginUserWithTimeZoneInfoPromise(timeZoneId: string): Promise<$D.Framework.ServiceLayer.Utilities.SessionUserContext>;

	LoginWithoutSharedSessionWithTimeZoneInfo(timeZoneId: string, successCallback: (data: { LoginWithoutSharedSessionWithTimeZoneInfoResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext }) => any, errorCallback?: () => any): JQueryPromise<{ LoginWithoutSharedSessionWithTimeZoneInfoResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext }>;

	LoginWithoutSharedSessionWithTimeZoneInfo(timeZoneId: string): { LoginWithoutSharedSessionWithTimeZoneInfoResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext };

	LoginWithoutSharedSessionWithTimeZoneInfoPromise(timeZoneId: string): Promise<$D.Framework.ServiceLayer.Utilities.SessionUserContext>;

	SpecifySessionTimezone(context: $D.Framework.ServiceLayer.Utilities.SessionUserContext, timeZoneId: string, successCallback: (data: { SpecifySessionTimezoneResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SpecifySessionTimezoneResult: void }>;

	SpecifySessionTimezone(context: $D.Framework.ServiceLayer.Utilities.SessionUserContext, timeZoneId: string): { SpecifySessionTimezoneResult: void };

	SpecifySessionTimezonePromise(context: $D.Framework.ServiceLayer.Utilities.SessionUserContext, timeZoneId: string): Promise<void>;

	IsInstanceUsingDefaultSettings(successCallback: (data: { IsInstanceUsingDefaultSettingsResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ IsInstanceUsingDefaultSettingsResult: boolean }>;

	IsInstanceUsingDefaultSettings(): { IsInstanceUsingDefaultSettingsResult: boolean };

	IsInstanceUsingDefaultSettingsPromise(): Promise<boolean>;

	SetEmailAddress(accountId: string, newEmailAddress: string, successCallback: (data: { SetEmailAddressResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetEmailAddressResult: void }>;

	SetEmailAddress(accountId: string, newEmailAddress: string): { SetEmailAddressResult: void };

	SetEmailAddressPromise(accountId: string, newEmailAddress: string): Promise<void>;

	SetMyEmailAddress(context: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, newEmailAddress: string, successCallback: (data: { SetMyEmailAddressResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetMyEmailAddressResult: void }>;

	SetMyEmailAddress(context: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, newEmailAddress: string): { SetMyEmailAddressResult: void };

	SetMyEmailAddressPromise(context: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, newEmailAddress: string): Promise<void>;

	SendUserOldPassword(emailAddress: string, successCallback: (data: { SendUserOldPasswordResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SendUserOldPasswordResult: void }>;

	SendUserOldPassword(emailAddress: string): { SendUserOldPasswordResult: void };

	SendUserOldPasswordPromise(emailAddress: string): Promise<void>;

	SendUserOldPasswordCustomText(emailAddress: string, fromAddress: string, subject: string, bodyTextWithParams: string, successCallback: (data: { SendUserOldPasswordCustomTextResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SendUserOldPasswordCustomTextResult: void }>;

	SendUserOldPasswordCustomText(emailAddress: string, fromAddress: string, subject: string, bodyTextWithParams: string): { SendUserOldPasswordCustomTextResult: void };

	SendUserOldPasswordCustomTextPromise(emailAddress: string, fromAddress: string, subject: string, bodyTextWithParams: string): Promise<void>;

	ChangeUserPassword(emailAddress: string, oldPassword: string, newPassword: string, successCallback: (data: { ChangeUserPasswordResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ChangeUserPasswordResult: void }>;

	ChangeUserPassword(emailAddress: string, oldPassword: string, newPassword: string): { ChangeUserPasswordResult: void };

	ChangeUserPasswordPromise(emailAddress: string, oldPassword: string, newPassword: string): Promise<void>;

	ResetAndSendUserPassword(emailAddress: string, successCallback: (data: { ResetAndSendUserPasswordResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ResetAndSendUserPasswordResult: void }>;

	ResetAndSendUserPassword(emailAddress: string): { ResetAndSendUserPasswordResult: void };

	ResetAndSendUserPasswordPromise(emailAddress: string): Promise<void>;

	ResetAndSendUserPasswordCustomText(emailAddress: string, fromAddress: string, subject: string, bodyTextWithParams: string, successCallback: (data: { ResetAndSendUserPasswordCustomTextResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ResetAndSendUserPasswordCustomTextResult: void }>;

	ResetAndSendUserPasswordCustomText(emailAddress: string, fromAddress: string, subject: string, bodyTextWithParams: string): { ResetAndSendUserPasswordCustomTextResult: void };

	ResetAndSendUserPasswordCustomTextPromise(emailAddress: string, fromAddress: string, subject: string, bodyTextWithParams: string): Promise<void>;

	CheckUserContext(context: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, successCallback: (data: { CheckUserContextResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CheckUserContextResult: void }>;

	CheckUserContext(context: $D.Framework.ServiceLayer.Utilities.AbstractUserContext): { CheckUserContextResult: void };

	CheckUserContextPromise(context: $D.Framework.ServiceLayer.Utilities.AbstractUserContext): Promise<void>;

	GetAccountIDBySessionID(sessionID: string, successCallback: (data: { GetAccountIDBySessionIDResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetAccountIDBySessionIDResult: string }>;

	GetAccountIDBySessionID(sessionID: string): { GetAccountIDBySessionIDResult: string };

	GetAccountIDBySessionIDPromise(sessionID: string): Promise<string>;

	GetCurrentAccountID(userContext: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, successCallback: (data: { GetCurrentAccountIDResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetCurrentAccountIDResult: string }>;

	GetCurrentAccountID(userContext: $D.Framework.ServiceLayer.Utilities.AbstractUserContext): { GetCurrentAccountIDResult: string };

	GetCurrentAccountIDPromise(userContext: $D.Framework.ServiceLayer.Utilities.AbstractUserContext): Promise<string>;

	GetCurrentAccount(userContext: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, successCallback: (data: { GetCurrentAccountResult: $D.Framework.ServiceLayer.Services.Accounts.Account }) => any, errorCallback?: () => any): JQueryPromise<{ GetCurrentAccountResult: $D.Framework.ServiceLayer.Services.Accounts.Account }>;

	GetCurrentAccount(userContext: $D.Framework.ServiceLayer.Utilities.AbstractUserContext): { GetCurrentAccountResult: $D.Framework.ServiceLayer.Services.Accounts.Account };

	GetCurrentAccountPromise(userContext: $D.Framework.ServiceLayer.Utilities.AbstractUserContext): Promise<$D.Framework.ServiceLayer.Services.Accounts.Account>;

	Logout(context: $D.Framework.ServiceLayer.Utilities.SessionUserContext, successCallback: (data: { LogoutResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ LogoutResult: void }>;

	Logout(context: $D.Framework.ServiceLayer.Utilities.SessionUserContext): { LogoutResult: void };

	LogoutPromise(context: $D.Framework.ServiceLayer.Utilities.SessionUserContext): Promise<void>;

	LogoutBySessionId(sessionId: string, successCallback: (data: { LogoutBySessionIdResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ LogoutBySessionIdResult: void }>;

	LogoutBySessionId(sessionId: string): { LogoutBySessionIdResult: void };

	LogoutBySessionIdPromise(sessionId: string): Promise<void>;

	AddNewAccountByGroupsIDs(account: $D.Framework.ServiceLayer.Services.Accounts.Account, memberOf: string[], password: string, successCallback: (data: { AddNewAccountByGroupsIDsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddNewAccountByGroupsIDsResult: void }>;

	AddNewAccountByGroupsIDs(account: $D.Framework.ServiceLayer.Services.Accounts.Account, memberOf: string[], password: string): { AddNewAccountByGroupsIDsResult: void };

	AddNewAccountByGroupsIDsPromise(account: $D.Framework.ServiceLayer.Services.Accounts.Account, memberOf: string[], password: string): Promise<void>;

	AddNewAccount(account: $D.Framework.ServiceLayer.Services.Accounts.Account, memberOf: $D.Framework.ServiceLayer.Services.Accounts.Group[], password: string, successCallback: (data: { AddNewAccountResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddNewAccountResult: string }>;

	AddNewAccount(account: $D.Framework.ServiceLayer.Services.Accounts.Account, memberOf: $D.Framework.ServiceLayer.Services.Accounts.Group[], password: string): { AddNewAccountResult: string };

	AddNewAccountPromise(account: $D.Framework.ServiceLayer.Services.Accounts.Account, memberOf: $D.Framework.ServiceLayer.Services.Accounts.Group[], password: string): Promise<string>;

	AddNewAccountWithoutUserContext(accountObj: $D.Framework.ServiceLayer.Services.Accounts.Account, memberOf: $D.Framework.ServiceLayer.Services.Accounts.Group[], password: string, addressObj: $D.Framework.ServiceLayer.Services.Organization.Address, persoData: $D.Framework.ServiceLayer.Services.Organization.PersonData, phoneNumber: string, successCallback: (data: { AddNewAccountWithoutUserContextResult: $D.Framework.ServiceLayer.Services.Accounts.Account }) => any, errorCallback?: () => any): JQueryPromise<{ AddNewAccountWithoutUserContextResult: $D.Framework.ServiceLayer.Services.Accounts.Account }>;

	AddNewAccountWithoutUserContext(accountObj: $D.Framework.ServiceLayer.Services.Accounts.Account, memberOf: $D.Framework.ServiceLayer.Services.Accounts.Group[], password: string, addressObj: $D.Framework.ServiceLayer.Services.Organization.Address, persoData: $D.Framework.ServiceLayer.Services.Organization.PersonData, phoneNumber: string): { AddNewAccountWithoutUserContextResult: $D.Framework.ServiceLayer.Services.Accounts.Account };

	AddNewAccountWithoutUserContextPromise(accountObj: $D.Framework.ServiceLayer.Services.Accounts.Account, memberOf: $D.Framework.ServiceLayer.Services.Accounts.Group[], password: string, addressObj: $D.Framework.ServiceLayer.Services.Organization.Address, persoData: $D.Framework.ServiceLayer.Services.Organization.PersonData, phoneNumber: string): Promise<$D.Framework.ServiceLayer.Services.Accounts.Account>;

	SetPassword(accountId: string, newPassword: string, successCallback: (data: { SetPasswordResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetPasswordResult: void }>;

	SetPassword(accountId: string, newPassword: string): { SetPasswordResult: void };

	SetPasswordPromise(accountId: string, newPassword: string): Promise<void>;

	ChangePassword(oldPassword: string, newPassword: string, successCallback: (data: { ChangePasswordResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ChangePasswordResult: void }>;

	ChangePassword(oldPassword: string, newPassword: string): { ChangePasswordResult: void };

	ChangePasswordPromise(oldPassword: string, newPassword: string): Promise<void>;

	GetByEmail(emailAddress: string, successCallback: (data: { GetByEmailResult: $D.Framework.ServiceLayer.Services.Accounts.Account }) => any, errorCallback?: () => any): JQueryPromise<{ GetByEmailResult: $D.Framework.ServiceLayer.Services.Accounts.Account }>;

	GetByEmail(emailAddress: string): { GetByEmailResult: $D.Framework.ServiceLayer.Services.Accounts.Account };

	GetByEmailPromise(emailAddress: string): Promise<$D.Framework.ServiceLayer.Services.Accounts.Account>;

	GetByEmails(emailAddresses: string[], successCallback: (data: { GetByEmailsResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByEmailsResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }>;

	GetByEmails(emailAddresses: string[]): { GetByEmailsResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] };

	GetByEmailsPromise(emailAddresses: string[]): Promise<$D.Framework.ServiceLayer.Services.Accounts.Account[]>;

	GetByUserIdentifier(userIdentifier: string, includeDeletedAccounts: boolean, successCallback: (data: { GetByUserIdentifierResult: $D.Framework.ServiceLayer.Services.Accounts.Account }) => any, errorCallback?: () => any): JQueryPromise<{ GetByUserIdentifierResult: $D.Framework.ServiceLayer.Services.Accounts.Account }>;

	GetByUserIdentifier(userIdentifier: string, includeDeletedAccounts: boolean): { GetByUserIdentifierResult: $D.Framework.ServiceLayer.Services.Accounts.Account };

	GetByUserIdentifierPromise(userIdentifier: string, includeDeletedAccounts: boolean): Promise<$D.Framework.ServiceLayer.Services.Accounts.Account>;

	AddModuleRights(accountId: string, moduleRightsClassName: string, isModuleRightsAdministrator: boolean, successCallback: (data: { AddModuleRightsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddModuleRightsResult: void }>;

	AddModuleRights(accountId: string, moduleRightsClassName: string, isModuleRightsAdministrator: boolean): { AddModuleRightsResult: void };

	AddModuleRightsPromise(accountId: string, moduleRightsClassName: string, isModuleRightsAdministrator: boolean): Promise<void>;

	RemoveModuleRights(accountId: string, moduleRightsClassName: string, successCallback: (data: { RemoveModuleRightsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveModuleRightsResult: void }>;

	RemoveModuleRights(accountId: string, moduleRightsClassName: string): { RemoveModuleRightsResult: void };

	RemoveModuleRightsPromise(accountId: string, moduleRightsClassName: string): Promise<void>;

	GetAllModuleRights(successCallback: (data: { GetAllModuleRightsResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllModuleRightsResult: string[] }>;

	GetAllModuleRights(): { GetAllModuleRightsResult: string[] };

	GetAllModuleRightsPromise(): Promise<string[]>;

	GetAccountModuleRightsList(accountId: string, successCallback: (data: { GetAccountModuleRightsListResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAccountModuleRightsListResult: string[] }>;

	GetAccountModuleRightsList(accountId: string): { GetAccountModuleRightsListResult: string[] };

	GetAccountModuleRightsListPromise(accountId: string): Promise<string[]>;

	SetAccountGroups(accountId: string, groupsIds: string[], successCallback: (data: { SetAccountGroupsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetAccountGroupsResult: void }>;

	SetAccountGroups(accountId: string, groupsIds: string[]): { SetAccountGroupsResult: void };

	SetAccountGroupsPromise(accountId: string, groupsIds: string[]): Promise<void>;

	RemoveAccountFromGroup(accountId: string, groupId: string, successCallback: (data: { RemoveAccountFromGroupResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveAccountFromGroupResult: void }>;

	RemoveAccountFromGroup(accountId: string, groupId: string): { RemoveAccountFromGroupResult: void };

	RemoveAccountFromGroupPromise(accountId: string, groupId: string): Promise<void>;

	GetAccountsForFolder(userContext: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, folderid: string, desiredCount: number, successCallback: (data: { GetAccountsForFolderResult: $D.Framework.ServiceLayer.Services.Accounts.AccountSearchReturn }) => any, errorCallback?: () => any): JQueryPromise<{ GetAccountsForFolderResult: $D.Framework.ServiceLayer.Services.Accounts.AccountSearchReturn }>;

	GetAccountsForFolder(userContext: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, folderid: string, desiredCount: number): { GetAccountsForFolderResult: $D.Framework.ServiceLayer.Services.Accounts.AccountSearchReturn };

	GetAccountsForFolderPromise(userContext: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, folderid: string, desiredCount: number): Promise<$D.Framework.ServiceLayer.Services.Accounts.AccountSearchReturn>;

	SearchAccounts(userContext: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, searchText: string, folderId: string, groupId: string, desiredCount: number, successCallback: (data: { SearchAccountsResult: $D.Framework.ServiceLayer.Services.Accounts.AccountSearchReturn }) => any, errorCallback?: () => any): JQueryPromise<{ SearchAccountsResult: $D.Framework.ServiceLayer.Services.Accounts.AccountSearchReturn }>;

	SearchAccounts(userContext: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, searchText: string, folderId: string, groupId: string, desiredCount: number): { SearchAccountsResult: $D.Framework.ServiceLayer.Services.Accounts.AccountSearchReturn };

	SearchAccountsPromise(userContext: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, searchText: string, folderId: string, groupId: string, desiredCount: number): Promise<$D.Framework.ServiceLayer.Services.Accounts.AccountSearchReturn>;

	SearchAccountsAndReturnInfos(searchText: string, desiredCount: number, successCallback: (data: { SearchAccountsAndReturnInfosResult: $D.Framework.ServiceLayer.Services.Accounts.AccountInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchAccountsAndReturnInfosResult: $D.Framework.ServiceLayer.Services.Accounts.AccountInfo[] }>;

	SearchAccountsAndReturnInfos(searchText: string, desiredCount: number): { SearchAccountsAndReturnInfosResult: $D.Framework.ServiceLayer.Services.Accounts.AccountInfo[] };

	SearchAccountsAndReturnInfosPromise(searchText: string, desiredCount: number): Promise<$D.Framework.ServiceLayer.Services.Accounts.AccountInfo[]>;

	SearchAccountsInFolderAndSubFolders(userContext: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, searchText: string, folderId: string, groupId: string, desiredCount: number, successCallback: (data: { SearchAccountsInFolderAndSubFoldersResult: $D.Framework.ServiceLayer.Services.Accounts.AccountSearchReturn }) => any, errorCallback?: () => any): JQueryPromise<{ SearchAccountsInFolderAndSubFoldersResult: $D.Framework.ServiceLayer.Services.Accounts.AccountSearchReturn }>;

	SearchAccountsInFolderAndSubFolders(userContext: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, searchText: string, folderId: string, groupId: string, desiredCount: number): { SearchAccountsInFolderAndSubFoldersResult: $D.Framework.ServiceLayer.Services.Accounts.AccountSearchReturn };

	SearchAccountsInFolderAndSubFoldersPromise(userContext: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, searchText: string, folderId: string, groupId: string, desiredCount: number): Promise<$D.Framework.ServiceLayer.Services.Accounts.AccountSearchReturn>;

	GetSpecifiedAccountsICanImpersonate(context: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, successCallback: (data: { GetSpecifiedAccountsICanImpersonateResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetSpecifiedAccountsICanImpersonateResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }>;

	GetSpecifiedAccountsICanImpersonate(context: $D.Framework.ServiceLayer.Utilities.AbstractUserContext): { GetSpecifiedAccountsICanImpersonateResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] };

	GetSpecifiedAccountsICanImpersonatePromise(context: $D.Framework.ServiceLayer.Utilities.AbstractUserContext): Promise<$D.Framework.ServiceLayer.Services.Accounts.Account[]>;

	GetImpersonationSession(emailAddress: string, successCallback: (data: { GetImpersonationSessionResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetImpersonationSessionResult: string }>;

	GetImpersonationSession(emailAddress: string): { GetImpersonationSessionResult: string };

	GetImpersonationSessionPromise(emailAddress: string): Promise<string>;

	GetAccountIdsICanImpersonate(context: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, successCallback: (data: { GetAccountIdsICanImpersonateResult: $D.Framework.ServiceLayer.Services.Folder.EntityIdentifier[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAccountIdsICanImpersonateResult: $D.Framework.ServiceLayer.Services.Folder.EntityIdentifier[] }>;

	GetAccountIdsICanImpersonate(context: $D.Framework.ServiceLayer.Utilities.AbstractUserContext): { GetAccountIdsICanImpersonateResult: $D.Framework.ServiceLayer.Services.Folder.EntityIdentifier[] };

	GetAccountIdsICanImpersonatePromise(context: $D.Framework.ServiceLayer.Utilities.AbstractUserContext): Promise<$D.Framework.ServiceLayer.Services.Folder.EntityIdentifier[]>;

	AddModuleRightsInstance(accountID: string, rights: $D.Framework.ServiceLayer.AbstractModuleRights, successCallback: (data: { AddModuleRightsInstanceResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddModuleRightsInstanceResult: void }>;

	AddModuleRightsInstance(accountID: string, rights: $D.Framework.ServiceLayer.AbstractModuleRights): { AddModuleRightsInstanceResult: void };

	AddModuleRightsInstancePromise(accountID: string, rights: $D.Framework.ServiceLayer.AbstractModuleRights): Promise<void>;

	GetAccountAndGroupInfo(id: string[], successCallback: (data: { GetAccountAndGroupInfoResult: $D.Framework.ServiceLayer.Services.Accounts.AccountAndGroupsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ GetAccountAndGroupInfoResult: $D.Framework.ServiceLayer.Services.Accounts.AccountAndGroupsReturn }>;

	GetAccountAndGroupInfo(id: string[]): { GetAccountAndGroupInfoResult: $D.Framework.ServiceLayer.Services.Accounts.AccountAndGroupsReturn };

	GetAccountAndGroupInfoPromise(id: string[]): Promise<$D.Framework.ServiceLayer.Services.Accounts.AccountAndGroupsReturn>;

	AddAccountToGroups(accountId: string, groupIds: string[], successCallback: (data: { AddAccountToGroupsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddAccountToGroupsResult: void }>;

	AddAccountToGroups(accountId: string, groupIds: string[]): { AddAccountToGroupsResult: void };

	AddAccountToGroupsPromise(accountId: string, groupIds: string[]): Promise<void>;

	SaveWithoutUserContext(account: $D.Framework.ServiceLayer.Services.Accounts.Account, successCallback: (data: { SaveWithoutUserContextResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveWithoutUserContextResult: void }>;

	SaveWithoutUserContext(account: $D.Framework.ServiceLayer.Services.Accounts.Account): { SaveWithoutUserContextResult: void };

	SaveWithoutUserContextPromise(account: $D.Framework.ServiceLayer.Services.Accounts.Account): Promise<void>;

	UpdateAccount(account: $D.Framework.ServiceLayer.Services.Accounts.Account, successCallback: (data: { UpdateAccountResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateAccountResult: string }>;

	UpdateAccount(account: $D.Framework.ServiceLayer.Services.Accounts.Account): { UpdateAccountResult: string };

	UpdateAccountPromise(account: $D.Framework.ServiceLayer.Services.Accounts.Account): Promise<string>;

	GetAccountByPhoneNumber(phoneNumber: string, successCallback: (data: { GetAccountByPhoneNumberResult: $D.Framework.ServiceLayer.Services.Accounts.Account }) => any, errorCallback?: () => any): JQueryPromise<{ GetAccountByPhoneNumberResult: $D.Framework.ServiceLayer.Services.Accounts.Account }>;

	GetAccountByPhoneNumber(phoneNumber: string): { GetAccountByPhoneNumberResult: $D.Framework.ServiceLayer.Services.Accounts.Account };

	GetAccountByPhoneNumberPromise(phoneNumber: string): Promise<$D.Framework.ServiceLayer.Services.Accounts.Account>;

	ActivateAccount(emailAddress: string, successCallback: (data: { ActivateAccountResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ActivateAccountResult: void }>;

	ActivateAccount(emailAddress: string): { ActivateAccountResult: void };

	ActivateAccountPromise(emailAddress: string): Promise<void>;

	DeactivateAccount(emailAddress: string, successCallback: (data: { DeactivateAccountResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeactivateAccountResult: void }>;

	DeactivateAccount(emailAddress: string): { DeactivateAccountResult: void };

	DeactivateAccountPromise(emailAddress: string): Promise<void>;

	CheckAccountIsConfirmed(account: $D.Framework.ServiceLayer.Services.Accounts.Account, successCallback: (data: { CheckAccountIsConfirmedResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ CheckAccountIsConfirmedResult: boolean }>;

	CheckAccountIsConfirmed(account: $D.Framework.ServiceLayer.Services.Accounts.Account): { CheckAccountIsConfirmedResult: boolean };

	CheckAccountIsConfirmedPromise(account: $D.Framework.ServiceLayer.Services.Accounts.Account): Promise<boolean>;

	ConfirmAccount(confirmationCode: string, successCallback: (data: { ConfirmAccountResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ ConfirmAccountResult: string }>;

	ConfirmAccount(confirmationCode: string): { ConfirmAccountResult: string };

	ConfirmAccountPromise(confirmationCode: string): Promise<string>;

	SendConfirmationEmailToAccount(emailAddress: string, successCallback: (data: { SendConfirmationEmailToAccountResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SendConfirmationEmailToAccountResult: void }>;

	SendConfirmationEmailToAccount(emailAddress: string): { SendConfirmationEmailToAccountResult: void };

	SendConfirmationEmailToAccountPromise(emailAddress: string): Promise<void>;

	SendConfirmationEmailToAccountWithParameters(emailAddress: string, parameters: string[], successCallback: (data: { SendConfirmationEmailToAccountWithParametersResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SendConfirmationEmailToAccountWithParametersResult: void }>;

	SendConfirmationEmailToAccountWithParameters(emailAddress: string, parameters: string[]): { SendConfirmationEmailToAccountWithParametersResult: void };

	SendConfirmationEmailToAccountWithParametersPromise(emailAddress: string, parameters: string[]): Promise<void>;

	CloneAccountConfiguration(importerAccountId: string, exporterAccountId: string, successCallback: (data: { CloneAccountConfigurationResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CloneAccountConfigurationResult: void }>;

	CloneAccountConfiguration(importerAccountId: string, exporterAccountId: string): { CloneAccountConfigurationResult: void };

	CloneAccountConfigurationPromise(importerAccountId: string, exporterAccountId: string): Promise<void>;

	GetSecurityQuestionForAccount(emailAddress: string, successCallback: (data: { GetSecurityQuestionForAccountResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetSecurityQuestionForAccountResult: string }>;

	GetSecurityQuestionForAccount(emailAddress: string): { GetSecurityQuestionForAccountResult: string };

	GetSecurityQuestionForAccountPromise(emailAddress: string): Promise<string>;

	ConfirmSecurityAnswerForAccount(emailAddress: string, securityAnswer: string, successCallback: (data: { ConfirmSecurityAnswerForAccountResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ ConfirmSecurityAnswerForAccountResult: boolean }>;

	ConfirmSecurityAnswerForAccount(emailAddress: string, securityAnswer: string): { ConfirmSecurityAnswerForAccountResult: boolean };

	ConfirmSecurityAnswerForAccountPromise(emailAddress: string, securityAnswer: string): Promise<boolean>;

	CheckSecurityAnswerAndSetPassword(emailAddress: string, securityAnswer: string, newPassword: string, successCallback: (data: { CheckSecurityAnswerAndSetPasswordResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CheckSecurityAnswerAndSetPasswordResult: void }>;

	CheckSecurityAnswerAndSetPassword(emailAddress: string, securityAnswer: string, newPassword: string): { CheckSecurityAnswerAndSetPasswordResult: void };

	CheckSecurityAnswerAndSetPasswordPromise(emailAddress: string, securityAnswer: string, newPassword: string): Promise<void>;

	GetSecurityQuestionsForAccount(emailAddress: string, successCallback: (data: { GetSecurityQuestionsForAccountResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetSecurityQuestionsForAccountResult: string[] }>;

	GetSecurityQuestionsForAccount(emailAddress: string): { GetSecurityQuestionsForAccountResult: string[] };

	GetSecurityQuestionsForAccountPromise(emailAddress: string): Promise<string[]>;

	ConfirmSecurityQuestionAndAnswerForAccount(emailAddress: string, securityQuestion: string, securityAnswer: string, successCallback: (data: { ConfirmSecurityQuestionAndAnswerForAccountResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ ConfirmSecurityQuestionAndAnswerForAccountResult: boolean }>;

	ConfirmSecurityQuestionAndAnswerForAccount(emailAddress: string, securityQuestion: string, securityAnswer: string): { ConfirmSecurityQuestionAndAnswerForAccountResult: boolean };

	ConfirmSecurityQuestionAndAnswerForAccountPromise(emailAddress: string, securityQuestion: string, securityAnswer: string): Promise<boolean>;

	CheckSecurityQuestionAndAnswerAndSetPassword(emailAddress: string, securityQuestion: string, securityAnswer: string, newPassword: string, successCallback: (data: { CheckSecurityQuestionAndAnswerAndSetPasswordResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CheckSecurityQuestionAndAnswerAndSetPasswordResult: void }>;

	CheckSecurityQuestionAndAnswerAndSetPassword(emailAddress: string, securityQuestion: string, securityAnswer: string, newPassword: string): { CheckSecurityQuestionAndAnswerAndSetPasswordResult: void };

	CheckSecurityQuestionAndAnswerAndSetPasswordPromise(emailAddress: string, securityQuestion: string, securityAnswer: string, newPassword: string): Promise<void>;

	IsValidPassword(password: string, successCallback: (data: { IsValidPasswordResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ IsValidPasswordResult: boolean }>;

	IsValidPassword(password: string): { IsValidPasswordResult: boolean };

	IsValidPasswordPromise(password: string): Promise<boolean>;

	IsValidActiveDirectoryUser(username: string, password: string, successCallback: (data: { IsValidActiveDirectoryUserResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ IsValidActiveDirectoryUserResult: boolean }>;

	IsValidActiveDirectoryUser(username: string, password: string): { IsValidActiveDirectoryUserResult: boolean };

	IsValidActiveDirectoryUserPromise(username: string, password: string): Promise<boolean>;

	GetAccountByHomeFolderId(homeFolderId: string, successCallback: (data: { GetAccountByHomeFolderIdResult: $D.Framework.ServiceLayer.Services.Accounts.Account }) => any, errorCallback?: () => any): JQueryPromise<{ GetAccountByHomeFolderIdResult: $D.Framework.ServiceLayer.Services.Accounts.Account }>;

	GetAccountByHomeFolderId(homeFolderId: string): { GetAccountByHomeFolderIdResult: $D.Framework.ServiceLayer.Services.Accounts.Account };

	GetAccountByHomeFolderIdPromise(homeFolderId: string): Promise<$D.Framework.ServiceLayer.Services.Accounts.Account>;

	GetAccountByConfirmationCode(confirmationCode: string, successCallback: (data: { GetAccountByConfirmationCodeResult: $D.Framework.ServiceLayer.Services.Accounts.Account }) => any, errorCallback?: () => any): JQueryPromise<{ GetAccountByConfirmationCodeResult: $D.Framework.ServiceLayer.Services.Accounts.Account }>;

	GetAccountByConfirmationCode(confirmationCode: string): { GetAccountByConfirmationCodeResult: $D.Framework.ServiceLayer.Services.Accounts.Account };

	GetAccountByConfirmationCodePromise(confirmationCode: string): Promise<$D.Framework.ServiceLayer.Services.Accounts.Account>;

	GetAuthenticationId(successCallback: (data: { GetAuthenticationIdResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetAuthenticationIdResult: string }>;

	GetAuthenticationId(): { GetAuthenticationIdResult: string };

	GetAuthenticationIdPromise(): Promise<string>;

	AccountHasManager(accountId: string, successCallback: (data: { AccountHasManagerResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ AccountHasManagerResult: boolean }>;

	AccountHasManager(accountId: string): { AccountHasManagerResult: boolean };

	AccountHasManagerPromise(accountId: string): Promise<boolean>;

	GetAccountManager(accountId: string, successCallback: (data: { GetAccountManagerResult: $D.Framework.ServiceLayer.Services.Accounts.Account }) => any, errorCallback?: () => any): JQueryPromise<{ GetAccountManagerResult: $D.Framework.ServiceLayer.Services.Accounts.Account }>;

	GetAccountManager(accountId: string): { GetAccountManagerResult: $D.Framework.ServiceLayer.Services.Accounts.Account };

	GetAccountManagerPromise(accountId: string): Promise<$D.Framework.ServiceLayer.Services.Accounts.Account>;

	GetAccountsByEmployeeId(employeeId: string, successCallback: (data: { GetAccountsByEmployeeIdResult: $D.Framework.ServiceLayer.Services.Accounts.Account }) => any, errorCallback?: () => any): JQueryPromise<{ GetAccountsByEmployeeIdResult: $D.Framework.ServiceLayer.Services.Accounts.Account }>;

	GetAccountsByEmployeeId(employeeId: string): { GetAccountsByEmployeeIdResult: $D.Framework.ServiceLayer.Services.Accounts.Account };

	GetAccountsByEmployeeIdPromise(employeeId: string): Promise<$D.Framework.ServiceLayer.Services.Accounts.Account>;

	GetAccountsByFirstAndLastName(firstName: string, lastName: string, successCallback: (data: { GetAccountsByFirstAndLastNameResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAccountsByFirstAndLastNameResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }>;

	GetAccountsByFirstAndLastName(firstName: string, lastName: string): { GetAccountsByFirstAndLastNameResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] };

	GetAccountsByFirstAndLastNamePromise(firstName: string, lastName: string): Promise<$D.Framework.ServiceLayer.Services.Accounts.Account[]>;

	SetCurrentAccountCulture(userContext: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, cultureName: string, successCallback: (data: { SetCurrentAccountCultureResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetCurrentAccountCultureResult: void }>;

	SetCurrentAccountCulture(userContext: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, cultureName: string): { SetCurrentAccountCultureResult: void };

	SetCurrentAccountCulturePromise(userContext: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, cultureName: string): Promise<void>;

	SetSessionActionsType(userContext: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, actionType: $D.Framework.ServiceLayer.Actions.EntityActionType[], successCallback: (data: { SetSessionActionsTypeResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetSessionActionsTypeResult: void }>;

	SetSessionActionsType(userContext: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, actionType: $D.Framework.ServiceLayer.Actions.EntityActionType[]): { SetSessionActionsTypeResult: void };

	SetSessionActionsTypePromise(userContext: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, actionType: $D.Framework.ServiceLayer.Actions.EntityActionType[]): Promise<void>;

	CheckUserContextWithIpAddress(context: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, contextToCheck: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, callerIPAddress: string, successCallback: (data: { CheckUserContextWithIpAddressResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CheckUserContextWithIpAddressResult: void }>;

	CheckUserContextWithIpAddress(context: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, contextToCheck: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, callerIPAddress: string): { CheckUserContextWithIpAddressResult: void };

	CheckUserContextWithIpAddressPromise(context: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, contextToCheck: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, callerIPAddress: string): Promise<void>;

	CheckUserContextWithIpAddressWithoutLogin(callerIPAddress: string, contextToCheck: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, successCallback: (data: { CheckUserContextWithIpAddressWithoutLoginResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CheckUserContextWithIpAddressWithoutLoginResult: void }>;

	CheckUserContextWithIpAddressWithoutLogin(callerIPAddress: string, contextToCheck: $D.Framework.ServiceLayer.Utilities.AbstractUserContext): { CheckUserContextWithIpAddressWithoutLoginResult: void };

	CheckUserContextWithIpAddressWithoutLoginPromise(callerIPAddress: string, contextToCheck: $D.Framework.ServiceLayer.Utilities.AbstractUserContext): Promise<void>;

	LoginAndGetJWTToken(userName: string, password: string, successCallback: (data: { LoginAndGetJWTTokenResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ LoginAndGetJWTTokenResult: string }>;

	LoginAndGetJWTToken(userName: string, password: string): { LoginAndGetJWTTokenResult: string };

	LoginAndGetJWTTokenPromise(userName: string, password: string): Promise<string>;

	GetContextFromJWTToken(token: string, successCallback: (data: { GetContextFromJWTTokenResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext }) => any, errorCallback?: () => any): JQueryPromise<{ GetContextFromJWTTokenResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext }>;

	GetContextFromJWTToken(token: string): { GetContextFromJWTTokenResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext };

	GetContextFromJWTTokenPromise(token: string): Promise<$D.Framework.ServiceLayer.Utilities.SessionUserContext>;

	SendResetPasswordLink(emailAddress: string, successCallback: (data: { SendResetPasswordLinkResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SendResetPasswordLinkResult: void }>;

	SendResetPasswordLink(emailAddress: string): { SendResetPasswordLinkResult: void };

	SendResetPasswordLinkPromise(emailAddress: string): Promise<void>;

	AuthenticateResetPasswordTokenKey(tokenKey: string, successCallback: (data: { AuthenticateResetPasswordTokenKeyResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AuthenticateResetPasswordTokenKeyResult: void }>;

	AuthenticateResetPasswordTokenKey(tokenKey: string): { AuthenticateResetPasswordTokenKeyResult: void };

	AuthenticateResetPasswordTokenKeyPromise(tokenKey: string): Promise<void>;

	SetPasswordByTokenKey(tokenKey: string, encryptedPassword: string, successCallback: (data: { SetPasswordByTokenKeyResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetPasswordByTokenKeyResult: void }>;

	SetPasswordByTokenKey(tokenKey: string, encryptedPassword: string): { SetPasswordByTokenKeyResult: void };

	SetPasswordByTokenKeyPromise(tokenKey: string, encryptedPassword: string): Promise<void>;

	GetPopupNotificationSettings(successCallback: (data: { GetPopupNotificationSettingsResult: $D.Framework.ServiceLayer.Services.Accounts.AccountPopupNotificationSetting }) => any, errorCallback?: () => any): JQueryPromise<{ GetPopupNotificationSettingsResult: $D.Framework.ServiceLayer.Services.Accounts.AccountPopupNotificationSetting }>;

	GetPopupNotificationSettings(): { GetPopupNotificationSettingsResult: $D.Framework.ServiceLayer.Services.Accounts.AccountPopupNotificationSetting };

	GetPopupNotificationSettingsPromise(): Promise<$D.Framework.ServiceLayer.Services.Accounts.AccountPopupNotificationSetting>;

	SavePopupNotificationSettings(doNotShowNotificationType: $D.Framework.ServiceLayer.Services.Accounts.DoNotShowNotificationType, successCallback: (data: { SavePopupNotificationSettingsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SavePopupNotificationSettingsResult: void }>;

	SavePopupNotificationSettings(doNotShowNotificationType: $D.Framework.ServiceLayer.Services.Accounts.DoNotShowNotificationType): { SavePopupNotificationSettingsResult: void };

	SavePopupNotificationSettingsPromise(doNotShowNotificationType: $D.Framework.ServiceLayer.Services.Accounts.DoNotShowNotificationType): Promise<void>;

	GetGroupCountByAccountId(AccountId: string, successCallback: (data: { GetGroupCountByAccountIdResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ GetGroupCountByAccountIdResult: any }>;

	GetGroupCountByAccountId(AccountId: string): { GetGroupCountByAccountIdResult: any };

	GetGroupCountByAccountIdPromise(AccountId: string): Promise<any>;

	GetGroupsByAccountId(AccountId: string, Limit: any, successCallback: (data: { GetGroupsByAccountIdResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetGroupsByAccountIdResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] }>;

	GetGroupsByAccountId(AccountId: string, Limit: any): { GetGroupsByAccountIdResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] };

	GetGroupsByAccountIdPromise(AccountId: string, Limit: any): Promise<$D.Framework.ServiceLayer.Services.Accounts.Group[]>;

	FilterAssociatedGroupsByAccountId(AccountId: string, FilterString: string, Limit: any, successCallback: (data: { FilterAssociatedGroupsByAccountIdResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] }) => any, errorCallback?: () => any): JQueryPromise<{ FilterAssociatedGroupsByAccountIdResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] }>;

	FilterAssociatedGroupsByAccountId(AccountId: string, FilterString: string, Limit: any): { FilterAssociatedGroupsByAccountIdResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] };

	FilterAssociatedGroupsByAccountIdPromise(AccountId: string, FilterString: string, Limit: any): Promise<$D.Framework.ServiceLayer.Services.Accounts.Group[]>;

	GetAbstainedGroupCountByAccountId(AccountId: string, successCallback: (data: { GetAbstainedGroupCountByAccountIdResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ GetAbstainedGroupCountByAccountIdResult: any }>;

	GetAbstainedGroupCountByAccountId(AccountId: string): { GetAbstainedGroupCountByAccountIdResult: any };

	GetAbstainedGroupCountByAccountIdPromise(AccountId: string): Promise<any>;

	GetAbstainedGroupsByAccountId(AccountId: string, Limit: any, successCallback: (data: { GetAbstainedGroupsByAccountIdResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAbstainedGroupsByAccountIdResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] }>;

	GetAbstainedGroupsByAccountId(AccountId: string, Limit: any): { GetAbstainedGroupsByAccountIdResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] };

	GetAbstainedGroupsByAccountIdPromise(AccountId: string, Limit: any): Promise<$D.Framework.ServiceLayer.Services.Accounts.Group[]>;

	FilterAbstainedGroupsByAccountId(AccountId: string, FilterString: string, Limit: any, successCallback: (data: { FilterAbstainedGroupsByAccountIdResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] }) => any, errorCallback?: () => any): JQueryPromise<{ FilterAbstainedGroupsByAccountIdResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] }>;

	FilterAbstainedGroupsByAccountId(AccountId: string, FilterString: string, Limit: any): { FilterAbstainedGroupsByAccountIdResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] };

	FilterAbstainedGroupsByAccountIdPromise(AccountId: string, FilterString: string, Limit: any): Promise<$D.Framework.ServiceLayer.Services.Accounts.Group[]>;

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

	GetByFolderID(folderID: string, successCallback: (data: { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }>;

	GetByFolderID(folderID: string): { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] };

	GetByFolderIDPromise(folderID: string): Promise<$D.Framework.ServiceLayer.Services.Accounts.Account[]>;

	GetByIDs(ids: string[], successCallback: (data: { GetByIDsResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDsResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }>;

	GetByIDs(ids: string[]): { GetByIDsResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] };

	GetByIDsPromise(ids: string[]): Promise<$D.Framework.ServiceLayer.Services.Accounts.Account[]>;

	GetByID(id: string, successCallback: (data: { GetByIDResult: $D.Framework.ServiceLayer.Services.Accounts.Account }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDResult: $D.Framework.ServiceLayer.Services.Accounts.Account }>;

	GetByID(id: string): { GetByIDResult: $D.Framework.ServiceLayer.Services.Accounts.Account };

	GetByIDPromise(id: string): Promise<$D.Framework.ServiceLayer.Services.Accounts.Account>;

	GetAll(successCallback: (data: { GetAllResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }>;

	GetAll(): { GetAllResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] };

	GetAllPromise(): Promise<$D.Framework.ServiceLayer.Services.Accounts.Account[]>;

	Save(entity: $D.Framework.ServiceLayer.Services.Accounts.Account, successCallback: (data: { SaveResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveResult: void }>;

	Save(entity: $D.Framework.ServiceLayer.Services.Accounts.Account): { SaveResult: void };

	SavePromise(entity: $D.Framework.ServiceLayer.Services.Accounts.Account): Promise<void>;

	Delete(id: string, successCallback: (data: { DeleteResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteResult: void }>;

	Delete(id: string): { DeleteResult: void };

	DeletePromise(id: string): Promise<void>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType, successCallback: (data: { SearchResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): { SearchResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] };

	SearchPromise(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): Promise<$D.Framework.ServiceLayer.Services.Accounts.Account[]>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.Accounts.Account[], successCallback: (data: { SaveListResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }) => any, errorCallback?: () => any): JQueryPromise<{ SaveListResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.Accounts.Account[]): { SaveListResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] };

	SaveListPromise(entities: $D.Framework.ServiceLayer.Services.Accounts.Account[]): Promise<$D.Framework.ServiceLayer.Services.Accounts.Account[]>;
}

interface ServicesStatic {
	AccountService(): AccountServiceStatic;
}
