/// <reference path="./datatypes._base.d.ts" />

interface OtherContactServiceStatic {

	GetByID(otherContactID: string, successCallback: (data: { GetByIDResult: $D.Framework.ServiceLayer.Services.Organization.OtherContact }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDResult: $D.Framework.ServiceLayer.Services.Organization.OtherContact }>;

	GetByID(otherContactID: string): { GetByIDResult: $D.Framework.ServiceLayer.Services.Organization.OtherContact };

	GetByIDPromise(otherContactID: string): Promise<$D.Framework.ServiceLayer.Services.Organization.OtherContact>;

	GetAllOtherContactsForOwner(ownerId: string, successCallback: (data: { GetAllOtherContactsForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.OtherContact[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllOtherContactsForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.OtherContact[] }>;

	GetAllOtherContactsForOwner(ownerId: string): { GetAllOtherContactsForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.OtherContact[] };

	GetAllOtherContactsForOwnerPromise(ownerId: string): Promise<$D.Framework.ServiceLayer.Services.Organization.OtherContact[]>;

	GetPermittedOtherContactsForOwner(ownerID: string, isReadonlyMode: boolean, successCallback: (data: { GetPermittedOtherContactsForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.OtherContact[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetPermittedOtherContactsForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.OtherContact[] }>;

	GetPermittedOtherContactsForOwner(ownerID: string, isReadonlyMode: boolean): { GetPermittedOtherContactsForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.OtherContact[] };

	GetPermittedOtherContactsForOwnerPromise(ownerID: string, isReadonlyMode: boolean): Promise<$D.Framework.ServiceLayer.Services.Organization.OtherContact[]>;

	Save(otherContact: $D.Framework.ServiceLayer.Services.Organization.OtherContact, successCallback: (data: { SaveResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveResult: void }>;

	Save(otherContact: $D.Framework.ServiceLayer.Services.Organization.OtherContact): { SaveResult: void };

	SavePromise(otherContact: $D.Framework.ServiceLayer.Services.Organization.OtherContact): Promise<void>;

	AddOtherContact(otherContact: $D.Framework.ServiceLayer.Services.Organization.OtherContact, ownerId: string, successCallback: (data: { AddOtherContactResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddOtherContactResult: void }>;

	AddOtherContact(otherContact: $D.Framework.ServiceLayer.Services.Organization.OtherContact, ownerId: string): { AddOtherContactResult: void };

	AddOtherContactPromise(otherContact: $D.Framework.ServiceLayer.Services.Organization.OtherContact, ownerId: string): Promise<void>;

	GetOtherContactForContactInfo(contactInfoId: string, successCallback: (data: { GetOtherContactForContactInfoResult: $D.Framework.ServiceLayer.Services.Organization.OtherContact }) => any, errorCallback?: () => any): JQueryPromise<{ GetOtherContactForContactInfoResult: $D.Framework.ServiceLayer.Services.Organization.OtherContact }>;

	GetOtherContactForContactInfo(contactInfoId: string): { GetOtherContactForContactInfoResult: $D.Framework.ServiceLayer.Services.Organization.OtherContact };

	GetOtherContactForContactInfoPromise(contactInfoId: string): Promise<$D.Framework.ServiceLayer.Services.Organization.OtherContact>;

	UpdateOtherContact(otherContact: $D.Framework.ServiceLayer.Services.Organization.OtherContact, ownerId: string, successCallback: (data: { UpdateOtherContactResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateOtherContactResult: void }>;

	UpdateOtherContact(otherContact: $D.Framework.ServiceLayer.Services.Organization.OtherContact, ownerId: string): { UpdateOtherContactResult: void };

	UpdateOtherContactPromise(otherContact: $D.Framework.ServiceLayer.Services.Organization.OtherContact, ownerId: string): Promise<void>;

	DeleteOtherContact(otherContact: $D.Framework.ServiceLayer.Services.Organization.OtherContact, successCallback: (data: { DeleteOtherContactResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteOtherContactResult: void }>;

	DeleteOtherContact(otherContact: $D.Framework.ServiceLayer.Services.Organization.OtherContact): { DeleteOtherContactResult: void };

	DeleteOtherContactPromise(otherContact: $D.Framework.ServiceLayer.Services.Organization.OtherContact): Promise<void>;

	DeleteAllOtherContactForOwner(ownerId: string, successCallback: (data: { DeleteAllOtherContactForOwnerResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteAllOtherContactForOwnerResult: void }>;

	DeleteAllOtherContactForOwner(ownerId: string): { DeleteAllOtherContactForOwnerResult: void };

	DeleteAllOtherContactForOwnerPromise(ownerId: string): Promise<void>;

	GetTwitterOtherContactForOwner(ownerId: string, successCallback: (data: { GetTwitterOtherContactForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.OtherContact }) => any, errorCallback?: () => any): JQueryPromise<{ GetTwitterOtherContactForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.OtherContact }>;

	GetTwitterOtherContactForOwner(ownerId: string): { GetTwitterOtherContactForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.OtherContact };

	GetTwitterOtherContactForOwnerPromise(ownerId: string): Promise<$D.Framework.ServiceLayer.Services.Organization.OtherContact>;

	AddOtherContactFromEditorContext(editorID: string, ownerID: string, successCallback: (data: { AddOtherContactFromEditorContextResult: $D.Framework.ServiceLayer.Services.Organization.OtherContact }) => any, errorCallback?: () => any): JQueryPromise<{ AddOtherContactFromEditorContextResult: $D.Framework.ServiceLayer.Services.Organization.OtherContact }>;

	AddOtherContactFromEditorContext(editorID: string, ownerID: string): { AddOtherContactFromEditorContextResult: $D.Framework.ServiceLayer.Services.Organization.OtherContact };

	AddOtherContactFromEditorContextPromise(editorID: string, ownerID: string): Promise<$D.Framework.ServiceLayer.Services.Organization.OtherContact>;

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
	OtherContactService(): OtherContactServiceStatic;
}
