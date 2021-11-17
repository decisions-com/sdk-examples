/// <reference path="./datatypes._base.d.ts" />

interface PhoneServiceStatic {

	GetByID(phoneNumberID: string, successCallback: (data: { GetByIDResult: $D.Framework.ServiceLayer.Services.Organization.Phone }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDResult: $D.Framework.ServiceLayer.Services.Organization.Phone }>;

	GetByID(phoneNumberID: string): { GetByIDResult: $D.Framework.ServiceLayer.Services.Organization.Phone };

	GetByIDPromise(phoneNumberID: string): Promise<$D.Framework.ServiceLayer.Services.Organization.Phone>;

	GetAllPhoneForOwner(ownerId: string, successCallback: (data: { GetAllPhoneForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.Phone[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllPhoneForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.Phone[] }>;

	GetAllPhoneForOwner(ownerId: string): { GetAllPhoneForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.Phone[] };

	GetAllPhoneForOwnerPromise(ownerId: string): Promise<$D.Framework.ServiceLayer.Services.Organization.Phone[]>;

	GetPermittedPhonesForOwner(ownerID: string, isReadonlyMode: boolean, successCallback: (data: { GetPermittedPhonesForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.Phone[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetPermittedPhonesForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.Phone[] }>;

	GetPermittedPhonesForOwner(ownerID: string, isReadonlyMode: boolean): { GetPermittedPhonesForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.Phone[] };

	GetPermittedPhonesForOwnerPromise(ownerID: string, isReadonlyMode: boolean): Promise<$D.Framework.ServiceLayer.Services.Organization.Phone[]>;

	Save(phone: $D.Framework.ServiceLayer.Services.Organization.Phone, successCallback: (data: { SaveResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveResult: void }>;

	Save(phone: $D.Framework.ServiceLayer.Services.Organization.Phone): { SaveResult: void };

	SavePromise(phone: $D.Framework.ServiceLayer.Services.Organization.Phone): Promise<void>;

	AddPhone(phone: $D.Framework.ServiceLayer.Services.Organization.Phone, ownerId: string, successCallback: (data: { AddPhoneResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddPhoneResult: void }>;

	AddPhone(phone: $D.Framework.ServiceLayer.Services.Organization.Phone, ownerId: string): { AddPhoneResult: void };

	AddPhonePromise(phone: $D.Framework.ServiceLayer.Services.Organization.Phone, ownerId: string): Promise<void>;

	GetPhoneForContactInfo(contactInfoId: string, successCallback: (data: { GetPhoneForContactInfoResult: $D.Framework.ServiceLayer.Services.Organization.Phone }) => any, errorCallback?: () => any): JQueryPromise<{ GetPhoneForContactInfoResult: $D.Framework.ServiceLayer.Services.Organization.Phone }>;

	GetPhoneForContactInfo(contactInfoId: string): { GetPhoneForContactInfoResult: $D.Framework.ServiceLayer.Services.Organization.Phone };

	GetPhoneForContactInfoPromise(contactInfoId: string): Promise<$D.Framework.ServiceLayer.Services.Organization.Phone>;

	UpdatePhone(phone: $D.Framework.ServiceLayer.Services.Organization.Phone, ownerId: string, successCallback: (data: { UpdatePhoneResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdatePhoneResult: void }>;

	UpdatePhone(phone: $D.Framework.ServiceLayer.Services.Organization.Phone, ownerId: string): { UpdatePhoneResult: void };

	UpdatePhonePromise(phone: $D.Framework.ServiceLayer.Services.Organization.Phone, ownerId: string): Promise<void>;

	AddPhoneFromEditorContext(editorID: string, ownerID: string, type: $D.Framework.ServiceLayer.Services.Organization.PhoneType, isValidPhoneType: boolean, successCallback: (data: { AddPhoneFromEditorContextResult: $D.Framework.ServiceLayer.Services.Organization.Phone }) => any, errorCallback?: () => any): JQueryPromise<{ AddPhoneFromEditorContextResult: $D.Framework.ServiceLayer.Services.Organization.Phone }>;

	AddPhoneFromEditorContext(editorID: string, ownerID: string, type: $D.Framework.ServiceLayer.Services.Organization.PhoneType, isValidPhoneType: boolean): { AddPhoneFromEditorContextResult: $D.Framework.ServiceLayer.Services.Organization.Phone };

	AddPhoneFromEditorContextPromise(editorID: string, ownerID: string, type: $D.Framework.ServiceLayer.Services.Organization.PhoneType, isValidPhoneType: boolean): Promise<$D.Framework.ServiceLayer.Services.Organization.Phone>;

	DeletePhone(phone: $D.Framework.ServiceLayer.Services.Organization.Phone, successCallback: (data: { DeletePhoneResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeletePhoneResult: void }>;

	DeletePhone(phone: $D.Framework.ServiceLayer.Services.Organization.Phone): { DeletePhoneResult: void };

	DeletePhonePromise(phone: $D.Framework.ServiceLayer.Services.Organization.Phone): Promise<void>;

	DeleteAllPhoneForOwner(ownerId: string, successCallback: (data: { DeleteAllPhoneForOwnerResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteAllPhoneForOwnerResult: void }>;

	DeleteAllPhoneForOwner(ownerId: string): { DeleteAllPhoneForOwnerResult: void };

	DeleteAllPhoneForOwnerPromise(ownerId: string): Promise<void>;

	GetPrimaryPhoneForOwner(ownerId: string, successCallback: (data: { GetPrimaryPhoneForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.Phone }) => any, errorCallback?: () => any): JQueryPromise<{ GetPrimaryPhoneForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.Phone }>;

	GetPrimaryPhoneForOwner(ownerId: string): { GetPrimaryPhoneForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.Phone };

	GetPrimaryPhoneForOwnerPromise(ownerId: string): Promise<$D.Framework.ServiceLayer.Services.Organization.Phone>;

	GetPrimaryOrFirstPhoneForOwner(ownerId: string, successCallback: (data: { GetPrimaryOrFirstPhoneForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.Phone }) => any, errorCallback?: () => any): JQueryPromise<{ GetPrimaryOrFirstPhoneForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.Phone }>;

	GetPrimaryOrFirstPhoneForOwner(ownerId: string): { GetPrimaryOrFirstPhoneForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.Phone };

	GetPrimaryOrFirstPhoneForOwnerPromise(ownerId: string): Promise<$D.Framework.ServiceLayer.Services.Organization.Phone>;

	GetPrimaryOrFirstMobilePhoneForOwner(ownerId: string, successCallback: (data: { GetPrimaryOrFirstMobilePhoneForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.Phone }) => any, errorCallback?: () => any): JQueryPromise<{ GetPrimaryOrFirstMobilePhoneForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.Phone }>;

	GetPrimaryOrFirstMobilePhoneForOwner(ownerId: string): { GetPrimaryOrFirstMobilePhoneForOwnerResult: $D.Framework.ServiceLayer.Services.Organization.Phone };

	GetPrimaryOrFirstMobilePhoneForOwnerPromise(ownerId: string): Promise<$D.Framework.ServiceLayer.Services.Organization.Phone>;

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
	PhoneService(): PhoneServiceStatic;
}
