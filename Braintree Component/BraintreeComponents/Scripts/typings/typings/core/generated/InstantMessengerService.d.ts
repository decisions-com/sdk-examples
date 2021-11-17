/// <reference path="./datatypes._base.d.ts" />

interface InstantMessengerServiceStatic {

	GetByID(messengerID: string, successCallback: (data: { GetByIDResult: $D.Framework.ServiceLayer.Services.Organization.InstantMessengerAddress }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDResult: $D.Framework.ServiceLayer.Services.Organization.InstantMessengerAddress }>;

	GetByID(messengerID: string): { GetByIDResult: $D.Framework.ServiceLayer.Services.Organization.InstantMessengerAddress };

	GetByIDPromise(messengerID: string): Promise<$D.Framework.ServiceLayer.Services.Organization.InstantMessengerAddress>;

	GetAllInstantMessengerForOwner(contactInfoId: string, successCallback: (data: { GetAllInstantMessengerForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.InstantMessengerAddress[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllInstantMessengerForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.InstantMessengerAddress[] }>;

	GetAllInstantMessengerForOwner(contactInfoId: string): { GetAllInstantMessengerForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.InstantMessengerAddress[] };

	GetAllInstantMessengerForOwnerPromise(contactInfoId: string): Promise<$D.Framework.ServiceLayer.Services.Organization.InstantMessengerAddress[]>;

	GetPermittedInstantMessengerAddressesForOwner(ownerID: string, isReadonlyMode: boolean, successCallback: (data: { GetPermittedInstantMessengerAddressesForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.InstantMessengerAddress[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetPermittedInstantMessengerAddressesForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.InstantMessengerAddress[] }>;

	GetPermittedInstantMessengerAddressesForOwner(ownerID: string, isReadonlyMode: boolean): { GetPermittedInstantMessengerAddressesForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.InstantMessengerAddress[] };

	GetPermittedInstantMessengerAddressesForOwnerPromise(ownerID: string, isReadonlyMode: boolean): Promise<$D.Framework.ServiceLayer.Services.Organization.InstantMessengerAddress[]>;

	AddInstantMessengerAddress(instantMessengerAddress: $D.Framework.ServiceLayer.Services.Organization.InstantMessengerAddress, ownerId: string, successCallback: (data: { AddInstantMessengerAddressResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddInstantMessengerAddressResult: void }>;

	AddInstantMessengerAddress(instantMessengerAddress: $D.Framework.ServiceLayer.Services.Organization.InstantMessengerAddress, ownerId: string): { AddInstantMessengerAddressResult: void };

	AddInstantMessengerAddressPromise(instantMessengerAddress: $D.Framework.ServiceLayer.Services.Organization.InstantMessengerAddress, ownerId: string): Promise<void>;

	GetInstantMessengerAddressForContactInfo(contactInfoId: string, successCallback: (data: { GetInstantMessengerAddressForContactInfoResult: $D.Framework.ServiceLayer.Services.Organization.InstantMessengerAddress }) => any, errorCallback?: () => any): JQueryPromise<{ GetInstantMessengerAddressForContactInfoResult: $D.Framework.ServiceLayer.Services.Organization.InstantMessengerAddress }>;

	GetInstantMessengerAddressForContactInfo(contactInfoId: string): { GetInstantMessengerAddressForContactInfoResult: $D.Framework.ServiceLayer.Services.Organization.InstantMessengerAddress };

	GetInstantMessengerAddressForContactInfoPromise(contactInfoId: string): Promise<$D.Framework.ServiceLayer.Services.Organization.InstantMessengerAddress>;

	Save(instantMessengerAddress: $D.Framework.ServiceLayer.Services.Organization.InstantMessengerAddress, successCallback: (data: { SaveResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveResult: void }>;

	Save(instantMessengerAddress: $D.Framework.ServiceLayer.Services.Organization.InstantMessengerAddress): { SaveResult: void };

	SavePromise(instantMessengerAddress: $D.Framework.ServiceLayer.Services.Organization.InstantMessengerAddress): Promise<void>;

	UpdateInstantMessengerAddress(instantMessenger: $D.Framework.ServiceLayer.Services.Organization.InstantMessengerAddress, ownerId: string, successCallback: (data: { UpdateInstantMessengerAddressResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateInstantMessengerAddressResult: void }>;

	UpdateInstantMessengerAddress(instantMessenger: $D.Framework.ServiceLayer.Services.Organization.InstantMessengerAddress, ownerId: string): { UpdateInstantMessengerAddressResult: void };

	UpdateInstantMessengerAddressPromise(instantMessenger: $D.Framework.ServiceLayer.Services.Organization.InstantMessengerAddress, ownerId: string): Promise<void>;

	AddInstantMessengerFromEditorContext(editorID: string, ownerID: string, successCallback: (data: { AddInstantMessengerFromEditorContextResult: $D.Framework.ServiceLayer.Services.Organization.InstantMessengerAddress }) => any, errorCallback?: () => any): JQueryPromise<{ AddInstantMessengerFromEditorContextResult: $D.Framework.ServiceLayer.Services.Organization.InstantMessengerAddress }>;

	AddInstantMessengerFromEditorContext(editorID: string, ownerID: string): { AddInstantMessengerFromEditorContextResult: $D.Framework.ServiceLayer.Services.Organization.InstantMessengerAddress };

	AddInstantMessengerFromEditorContextPromise(editorID: string, ownerID: string): Promise<$D.Framework.ServiceLayer.Services.Organization.InstantMessengerAddress>;

	DeleteInstantMessengerAddress(instantMessenger: $D.Framework.ServiceLayer.Services.Organization.InstantMessengerAddress, successCallback: (data: { DeleteInstantMessengerAddressResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteInstantMessengerAddressResult: void }>;

	DeleteInstantMessengerAddress(instantMessenger: $D.Framework.ServiceLayer.Services.Organization.InstantMessengerAddress): { DeleteInstantMessengerAddressResult: void };

	DeleteInstantMessengerAddressPromise(instantMessenger: $D.Framework.ServiceLayer.Services.Organization.InstantMessengerAddress): Promise<void>;

	DeleteAllInstantMessengerForOwner(ownerId: string, successCallback: (data: { DeleteAllInstantMessengerForOwnerResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteAllInstantMessengerForOwnerResult: void }>;

	DeleteAllInstantMessengerForOwner(ownerId: string): { DeleteAllInstantMessengerForOwnerResult: void };

	DeleteAllInstantMessengerForOwnerPromise(ownerId: string): Promise<void>;

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
	InstantMessengerService(): InstantMessengerServiceStatic;
}
