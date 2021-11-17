/// <reference path="./datatypes._base.d.ts" />

interface EmailAddressServiceStatic {

	GetByID(emailAddressID: string, successCallback: (data: { GetByIDResult: $D.Framework.ServiceLayer.Services.Organization.EmailAddress }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDResult: $D.Framework.ServiceLayer.Services.Organization.EmailAddress }>;

	GetByID(emailAddressID: string): { GetByIDResult: $D.Framework.ServiceLayer.Services.Organization.EmailAddress };

	GetByIDPromise(emailAddressID: string): Promise<$D.Framework.ServiceLayer.Services.Organization.EmailAddress>;

	GetAllEmailForOwner(ownerId: string, successCallback: (data: { GetAllEmailForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.EmailAddress[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllEmailForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.EmailAddress[] }>;

	GetAllEmailForOwner(ownerId: string): { GetAllEmailForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.EmailAddress[] };

	GetAllEmailForOwnerPromise(ownerId: string): Promise<$D.Framework.ServiceLayer.Services.Organization.EmailAddress[]>;

	GetPermittedEmailAddressesForOwner(ownerID: string, isReadonlyMode: boolean, successCallback: (data: { GetPermittedEmailAddressesForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.EmailAddress[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetPermittedEmailAddressesForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.EmailAddress[] }>;

	GetPermittedEmailAddressesForOwner(ownerID: string, isReadonlyMode: boolean): { GetPermittedEmailAddressesForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.EmailAddress[] };

	GetPermittedEmailAddressesForOwnerPromise(ownerID: string, isReadonlyMode: boolean): Promise<$D.Framework.ServiceLayer.Services.Organization.EmailAddress[]>;

	AddEmailAddress(emailAddress: $D.Framework.ServiceLayer.Services.Organization.EmailAddress, ownerId: string, successCallback: (data: { AddEmailAddressResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddEmailAddressResult: void }>;

	AddEmailAddress(emailAddress: $D.Framework.ServiceLayer.Services.Organization.EmailAddress, ownerId: string): { AddEmailAddressResult: void };

	AddEmailAddressPromise(emailAddress: $D.Framework.ServiceLayer.Services.Organization.EmailAddress, ownerId: string): Promise<void>;

	GetEmailAddressForContactInfo(contactInfoId: string, successCallback: (data: { GetEmailAddressForContactInfoResult: $D.Framework.ServiceLayer.Services.Organization.EmailAddress }) => any, errorCallback?: () => any): JQueryPromise<{ GetEmailAddressForContactInfoResult: $D.Framework.ServiceLayer.Services.Organization.EmailAddress }>;

	GetEmailAddressForContactInfo(contactInfoId: string): { GetEmailAddressForContactInfoResult: $D.Framework.ServiceLayer.Services.Organization.EmailAddress };

	GetEmailAddressForContactInfoPromise(contactInfoId: string): Promise<$D.Framework.ServiceLayer.Services.Organization.EmailAddress>;

	Save(address: $D.Framework.ServiceLayer.Services.Organization.EmailAddress, successCallback: (data: { SaveResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveResult: void }>;

	Save(address: $D.Framework.ServiceLayer.Services.Organization.EmailAddress): { SaveResult: void };

	SavePromise(address: $D.Framework.ServiceLayer.Services.Organization.EmailAddress): Promise<void>;

	UpdateEmailAddress(emailAddress: $D.Framework.ServiceLayer.Services.Organization.EmailAddress, ownerId: string, successCallback: (data: { UpdateEmailAddressResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateEmailAddressResult: void }>;

	UpdateEmailAddress(emailAddress: $D.Framework.ServiceLayer.Services.Organization.EmailAddress, ownerId: string): { UpdateEmailAddressResult: void };

	UpdateEmailAddressPromise(emailAddress: $D.Framework.ServiceLayer.Services.Organization.EmailAddress, ownerId: string): Promise<void>;

	AddEmailAddressFromEditorContext(editorID: string, ownerID: string, successCallback: (data: { AddEmailAddressFromEditorContextResult: $D.Framework.ServiceLayer.Services.Organization.EmailAddress }) => any, errorCallback?: () => any): JQueryPromise<{ AddEmailAddressFromEditorContextResult: $D.Framework.ServiceLayer.Services.Organization.EmailAddress }>;

	AddEmailAddressFromEditorContext(editorID: string, ownerID: string): { AddEmailAddressFromEditorContextResult: $D.Framework.ServiceLayer.Services.Organization.EmailAddress };

	AddEmailAddressFromEditorContextPromise(editorID: string, ownerID: string): Promise<$D.Framework.ServiceLayer.Services.Organization.EmailAddress>;

	GetAccountOwnerOfEmail(emailAddress: string, successCallback: (data: { GetAccountOwnerOfEmailResult: $D.Framework.ServiceLayer.Services.Accounts.Account }) => any, errorCallback?: () => any): JQueryPromise<{ GetAccountOwnerOfEmailResult: $D.Framework.ServiceLayer.Services.Accounts.Account }>;

	GetAccountOwnerOfEmail(emailAddress: string): { GetAccountOwnerOfEmailResult: $D.Framework.ServiceLayer.Services.Accounts.Account };

	GetAccountOwnerOfEmailPromise(emailAddress: string): Promise<$D.Framework.ServiceLayer.Services.Accounts.Account>;

	DeleteEmailAddress(emailAddress: $D.Framework.ServiceLayer.Services.Organization.EmailAddress, successCallback: (data: { DeleteEmailAddressResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteEmailAddressResult: void }>;

	DeleteEmailAddress(emailAddress: $D.Framework.ServiceLayer.Services.Organization.EmailAddress): { DeleteEmailAddressResult: void };

	DeleteEmailAddressPromise(emailAddress: $D.Framework.ServiceLayer.Services.Organization.EmailAddress): Promise<void>;

	DeleteAllEmailAddressForOwner(ownerId: string, successCallback: (data: { DeleteAllEmailAddressForOwnerResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteAllEmailAddressForOwnerResult: void }>;

	DeleteAllEmailAddressForOwner(ownerId: string): { DeleteAllEmailAddressForOwnerResult: void };

	DeleteAllEmailAddressForOwnerPromise(ownerId: string): Promise<void>;

	GetPrimaryEmailAddressForOwner(ownerId: string, successCallback: (data: { GetPrimaryEmailAddressForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.EmailAddress }) => any, errorCallback?: () => any): JQueryPromise<{ GetPrimaryEmailAddressForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.EmailAddress }>;

	GetPrimaryEmailAddressForOwner(ownerId: string): { GetPrimaryEmailAddressForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.EmailAddress };

	GetPrimaryEmailAddressForOwnerPromise(ownerId: string): Promise<$D.Framework.ServiceLayer.Services.Organization.EmailAddress>;

	GetPrimaryOrFirstEmailAddressForOwner(ownerId: string, successCallback: (data: { GetPrimaryOrFirstEmailAddressForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.EmailAddress }) => any, errorCallback?: () => any): JQueryPromise<{ GetPrimaryOrFirstEmailAddressForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.EmailAddress }>;

	GetPrimaryOrFirstEmailAddressForOwner(ownerId: string): { GetPrimaryOrFirstEmailAddressForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.EmailAddress };

	GetPrimaryOrFirstEmailAddressForOwnerPromise(ownerId: string): Promise<$D.Framework.ServiceLayer.Services.Organization.EmailAddress>;

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
	EmailAddressService(): EmailAddressServiceStatic;
}
