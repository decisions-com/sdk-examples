/// <reference path="./datatypes._base.d.ts" />

interface ContactInfoServiceStatic {

	GetAllContactInfoForOwner(ownerId: string, successCallback: (data: { GetAllContactInfoForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.AbstractContactEntity[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllContactInfoForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.AbstractContactEntity[] }>;

	GetAllContactInfoForOwner(ownerId: string): { GetAllContactInfoForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.AbstractContactEntity[] };

	GetAllContactInfoForOwnerPromise(ownerId: string): Promise<$D.Framework.ServiceLayer.Services.Organization.AbstractContactEntity[]>;

	AddContactInfoEntity(contactInfoEntity: $D.Framework.ServiceLayer.Services.Organization.ContactInfoEntity, successCallback: (data: { AddContactInfoEntityResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddContactInfoEntityResult: void }>;

	AddContactInfoEntity(contactInfoEntity: $D.Framework.ServiceLayer.Services.Organization.ContactInfoEntity): { AddContactInfoEntityResult: void };

	AddContactInfoEntityPromise(contactInfoEntity: $D.Framework.ServiceLayer.Services.Organization.ContactInfoEntity): Promise<void>;

	DeleteContactInfoEntity(contactInfoEntityId: string, successCallback: (data: { DeleteContactInfoEntityResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteContactInfoEntityResult: void }>;

	DeleteContactInfoEntity(contactInfoEntityId: string): { DeleteContactInfoEntityResult: void };

	DeleteContactInfoEntityPromise(contactInfoEntityId: string): Promise<void>;

	GetContactInfoEntityById(contactInfoEntityId: string, successCallback: (data: { GetContactInfoEntityByIdResult: $D.Framework.ServiceLayer.Services.Organization.ContactInfoEntity }) => any, errorCallback?: () => any): JQueryPromise<{ GetContactInfoEntityByIdResult: $D.Framework.ServiceLayer.Services.Organization.ContactInfoEntity }>;

	GetContactInfoEntityById(contactInfoEntityId: string): { GetContactInfoEntityByIdResult: $D.Framework.ServiceLayer.Services.Organization.ContactInfoEntity };

	GetContactInfoEntityByIdPromise(contactInfoEntityId: string): Promise<$D.Framework.ServiceLayer.Services.Organization.ContactInfoEntity>;

	GetContactInfoOwnerForFolder(folderID: string, successCallback: (data: { GetContactInfoOwnerForFolderResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetContactInfoOwnerForFolderResult: string }>;

	GetContactInfoOwnerForFolder(folderID: string): { GetContactInfoOwnerForFolderResult: string };

	GetContactInfoOwnerForFolderPromise(folderID: string): Promise<string>;

	GetContactInfoOwnerIdForFolder(folderID: string, successCallback: (data: { GetContactInfoOwnerIdForFolderResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetContactInfoOwnerIdForFolderResult: string }>;

	GetContactInfoOwnerIdForFolder(folderID: string): { GetContactInfoOwnerIdForFolderResult: string };

	GetContactInfoOwnerIdForFolderPromise(folderID: string): Promise<string>;

	GetOrCreateContactInfoOwnerIdForFolder(folderID: string, createIfDoesNotExist: boolean, successCallback: (data: { GetOrCreateContactInfoOwnerIdForFolderResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetOrCreateContactInfoOwnerIdForFolderResult: string }>;

	GetOrCreateContactInfoOwnerIdForFolder(folderID: string, createIfDoesNotExist: boolean): { GetOrCreateContactInfoOwnerIdForFolderResult: string };

	GetOrCreateContactInfoOwnerIdForFolderPromise(folderID: string, createIfDoesNotExist: boolean): Promise<string>;

	AddAddressToContactInfoInFolder(folderID: string, address: $D.Framework.ServiceLayer.Services.Organization.Address, successCallback: (data: { AddAddressToContactInfoInFolderResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddAddressToContactInfoInFolderResult: void }>;

	AddAddressToContactInfoInFolder(folderID: string, address: $D.Framework.ServiceLayer.Services.Organization.Address): { AddAddressToContactInfoInFolderResult: void };

	AddAddressToContactInfoInFolderPromise(folderID: string, address: $D.Framework.ServiceLayer.Services.Organization.Address): Promise<void>;

	AddPhoneToContactInfoInFolder(folderID: string, phone: $D.Framework.ServiceLayer.Services.Organization.Phone, successCallback: (data: { AddPhoneToContactInfoInFolderResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddPhoneToContactInfoInFolderResult: void }>;

	AddPhoneToContactInfoInFolder(folderID: string, phone: $D.Framework.ServiceLayer.Services.Organization.Phone): { AddPhoneToContactInfoInFolderResult: void };

	AddPhoneToContactInfoInFolderPromise(folderID: string, phone: $D.Framework.ServiceLayer.Services.Organization.Phone): Promise<void>;

	AddEmailToContactInfoInFolder(folderID: string, email: $D.Framework.ServiceLayer.Services.Organization.EmailAddress, successCallback: (data: { AddEmailToContactInfoInFolderResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddEmailToContactInfoInFolderResult: void }>;

	AddEmailToContactInfoInFolder(folderID: string, email: $D.Framework.ServiceLayer.Services.Organization.EmailAddress): { AddEmailToContactInfoInFolderResult: void };

	AddEmailToContactInfoInFolderPromise(folderID: string, email: $D.Framework.ServiceLayer.Services.Organization.EmailAddress): Promise<void>;

	GetContactInfoForOwner(ownerID: string, successCallback: (data: { GetContactInfoForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.ContactInfoOwner }) => any, errorCallback?: () => any): JQueryPromise<{ GetContactInfoForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.ContactInfoOwner }>;

	GetContactInfoForOwner(ownerID: string): { GetContactInfoForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.ContactInfoOwner };

	GetContactInfoForOwnerPromise(ownerID: string): Promise<$D.Framework.ServiceLayer.Services.Organization.ContactInfoOwner>;

	GetSecuredContactInfoForOwner(ownerID: string, isReadonlyMode: boolean, successCallback: (data: { GetSecuredContactInfoForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.ContactInfoOwner }) => any, errorCallback?: () => any): JQueryPromise<{ GetSecuredContactInfoForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.ContactInfoOwner }>;

	GetSecuredContactInfoForOwner(ownerID: string, isReadonlyMode: boolean): { GetSecuredContactInfoForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.ContactInfoOwner };

	GetSecuredContactInfoForOwnerPromise(ownerID: string, isReadonlyMode: boolean): Promise<$D.Framework.ServiceLayer.Services.Organization.ContactInfoOwner>;

	GetContactInfoByPreferenceOrder(ownerID: string, successCallback: (data: { GetContactInfoByPreferenceOrderResult: $D.Framework.ServiceLayer.Services.Organization.AbstractContactEntity[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetContactInfoByPreferenceOrderResult: $D.Framework.ServiceLayer.Services.Organization.AbstractContactEntity[] }>;

	GetContactInfoByPreferenceOrder(ownerID: string): { GetContactInfoByPreferenceOrderResult: $D.Framework.ServiceLayer.Services.Organization.AbstractContactEntity[] };

	GetContactInfoByPreferenceOrderPromise(ownerID: string): Promise<$D.Framework.ServiceLayer.Services.Organization.AbstractContactEntity[]>;

	GetContactSummariesByPreferenceOrder(ownerID: string, successCallback: (data: { GetContactSummariesByPreferenceOrderResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetContactSummariesByPreferenceOrderResult: string[] }>;

	GetContactSummariesByPreferenceOrder(ownerID: string): { GetContactSummariesByPreferenceOrderResult: string[] };

	GetContactSummariesByPreferenceOrderPromise(ownerID: string): Promise<string[]>;

	GetContactEntityByContactInfoID(contactInfoID: string, successCallback: (data: { GetContactEntityByContactInfoIDResult: $D.Framework.ServiceLayer.Services.Organization.AbstractContactEntity }) => any, errorCallback?: () => any): JQueryPromise<{ GetContactEntityByContactInfoIDResult: $D.Framework.ServiceLayer.Services.Organization.AbstractContactEntity }>;

	GetContactEntityByContactInfoID(contactInfoID: string): { GetContactEntityByContactInfoIDResult: $D.Framework.ServiceLayer.Services.Organization.AbstractContactEntity };

	GetContactEntityByContactInfoIDPromise(contactInfoID: string): Promise<$D.Framework.ServiceLayer.Services.Organization.AbstractContactEntity>;

	GetContactInfoSettings(successCallback: (data: { GetContactInfoSettingsResult: $D.Framework.ServiceLayer.Services.Organization.ContactInfoSettings }) => any, errorCallback?: () => any): JQueryPromise<{ GetContactInfoSettingsResult: $D.Framework.ServiceLayer.Services.Organization.ContactInfoSettings }>;

	GetContactInfoSettings(): { GetContactInfoSettingsResult: $D.Framework.ServiceLayer.Services.Organization.ContactInfoSettings };

	GetContactInfoSettingsPromise(): Promise<$D.Framework.ServiceLayer.Services.Organization.ContactInfoSettings>;

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
	ContactInfoService(): ContactInfoServiceStatic;
}
