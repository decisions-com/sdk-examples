/// <reference path="./datatypes._base.d.ts" />

interface AddressServiceStatic {

	GetByID(addressID: string, successCallback: (data: { GetByIDResult: $D.Framework.ServiceLayer.Services.Organization.Address }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDResult: $D.Framework.ServiceLayer.Services.Organization.Address }>;

	GetByID(addressID: string): { GetByIDResult: $D.Framework.ServiceLayer.Services.Organization.Address };

	GetByIDPromise(addressID: string): Promise<$D.Framework.ServiceLayer.Services.Organization.Address>;

	GetAllAddressesForOwner(ownerId: string, successCallback: (data: { GetAllAddressesForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.Address[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllAddressesForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.Address[] }>;

	GetAllAddressesForOwner(ownerId: string): { GetAllAddressesForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.Address[] };

	GetAllAddressesForOwnerPromise(ownerId: string): Promise<$D.Framework.ServiceLayer.Services.Organization.Address[]>;

	GetPermittedAddressesForOwner(ownerID: string, isReadonlyMode: boolean, successCallback: (data: { GetPermittedAddressesForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.Address[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetPermittedAddressesForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.Address[] }>;

	GetPermittedAddressesForOwner(ownerID: string, isReadonlyMode: boolean): { GetPermittedAddressesForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.Address[] };

	GetPermittedAddressesForOwnerPromise(ownerID: string, isReadonlyMode: boolean): Promise<$D.Framework.ServiceLayer.Services.Organization.Address[]>;

	Save(address: $D.Framework.ServiceLayer.Services.Organization.Address, successCallback: (data: { SaveResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveResult: void }>;

	Save(address: $D.Framework.ServiceLayer.Services.Organization.Address): { SaveResult: void };

	SavePromise(address: $D.Framework.ServiceLayer.Services.Organization.Address): Promise<void>;

	GetAddressForContactInfo(contactInfoId: string, successCallback: (data: { GetAddressForContactInfoResult: $D.Framework.ServiceLayer.Services.Organization.Address }) => any, errorCallback?: () => any): JQueryPromise<{ GetAddressForContactInfoResult: $D.Framework.ServiceLayer.Services.Organization.Address }>;

	GetAddressForContactInfo(contactInfoId: string): { GetAddressForContactInfoResult: $D.Framework.ServiceLayer.Services.Organization.Address };

	GetAddressForContactInfoPromise(contactInfoId: string): Promise<$D.Framework.ServiceLayer.Services.Organization.Address>;

	AddAddress(address: $D.Framework.ServiceLayer.Services.Organization.Address, ownerId: string, successCallback: (data: { AddAddressResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddAddressResult: void }>;

	AddAddress(address: $D.Framework.ServiceLayer.Services.Organization.Address, ownerId: string): { AddAddressResult: void };

	AddAddressPromise(address: $D.Framework.ServiceLayer.Services.Organization.Address, ownerId: string): Promise<void>;

	AddAddressCheckAutoAdd(address: $D.Framework.ServiceLayer.Services.Organization.Address, ownerId: string, successCallback: (data: { AddAddressCheckAutoAddResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddAddressCheckAutoAddResult: void }>;

	AddAddressCheckAutoAdd(address: $D.Framework.ServiceLayer.Services.Organization.Address, ownerId: string): { AddAddressCheckAutoAddResult: void };

	AddAddressCheckAutoAddPromise(address: $D.Framework.ServiceLayer.Services.Organization.Address, ownerId: string): Promise<void>;

	UpdateAddress(address: $D.Framework.ServiceLayer.Services.Organization.Address, ownerId: string, successCallback: (data: { UpdateAddressResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateAddressResult: void }>;

	UpdateAddress(address: $D.Framework.ServiceLayer.Services.Organization.Address, ownerId: string): { UpdateAddressResult: void };

	UpdateAddressPromise(address: $D.Framework.ServiceLayer.Services.Organization.Address, ownerId: string): Promise<void>;

	AddAddressFromEditorContext(editorID: string, ownerID: string, successCallback: (data: { AddAddressFromEditorContextResult: $D.Framework.ServiceLayer.Services.Organization.Address }) => any, errorCallback?: () => any): JQueryPromise<{ AddAddressFromEditorContextResult: $D.Framework.ServiceLayer.Services.Organization.Address }>;

	AddAddressFromEditorContext(editorID: string, ownerID: string): { AddAddressFromEditorContextResult: $D.Framework.ServiceLayer.Services.Organization.Address };

	AddAddressFromEditorContextPromise(editorID: string, ownerID: string): Promise<$D.Framework.ServiceLayer.Services.Organization.Address>;

	DeleteAddress(address: $D.Framework.ServiceLayer.Services.Organization.Address, successCallback: (data: { DeleteAddressResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteAddressResult: void }>;

	DeleteAddress(address: $D.Framework.ServiceLayer.Services.Organization.Address): { DeleteAddressResult: void };

	DeleteAddressPromise(address: $D.Framework.ServiceLayer.Services.Organization.Address): Promise<void>;

	DeleteAllAddressForOwner(ownerId: string, successCallback: (data: { DeleteAllAddressForOwnerResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteAllAddressForOwnerResult: void }>;

	DeleteAllAddressForOwner(ownerId: string): { DeleteAllAddressForOwnerResult: void };

	DeleteAllAddressForOwnerPromise(ownerId: string): Promise<void>;

	GetPrimaryAddressForOwner(ownerId: string, successCallback: (data: { GetPrimaryAddressForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.Address }) => any, errorCallback?: () => any): JQueryPromise<{ GetPrimaryAddressForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.Address }>;

	GetPrimaryAddressForOwner(ownerId: string): { GetPrimaryAddressForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.Address };

	GetPrimaryAddressForOwnerPromise(ownerId: string): Promise<$D.Framework.ServiceLayer.Services.Organization.Address>;

	GetPrimaryOrFirstAddressForOwner(ownerId: string, successCallback: (data: { GetPrimaryOrFirstAddressForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.Address }) => any, errorCallback?: () => any): JQueryPromise<{ GetPrimaryOrFirstAddressForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.Address }>;

	GetPrimaryOrFirstAddressForOwner(ownerId: string): { GetPrimaryOrFirstAddressForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.Address };

	GetPrimaryOrFirstAddressForOwnerPromise(ownerId: string): Promise<$D.Framework.ServiceLayer.Services.Organization.Address>;

	GetAddressDetailLists(successCallback: (data: { GetAddressDetailListsResult: $D.Framework.ServiceLayer.Services.Organization.AddressDetailOwner }) => any, errorCallback?: () => any): JQueryPromise<{ GetAddressDetailListsResult: $D.Framework.ServiceLayer.Services.Organization.AddressDetailOwner }>;

	GetAddressDetailLists(): { GetAddressDetailListsResult: $D.Framework.ServiceLayer.Services.Organization.AddressDetailOwner };

	GetAddressDetailListsPromise(): Promise<$D.Framework.ServiceLayer.Services.Organization.AddressDetailOwner>;

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
	AddressService(): AddressServiceStatic;
}
