/// <reference path="./datatypes._base.d.ts" />

interface PersonServiceStatic {

	SetPrimaryEmailAddress(id: string, emailAddress: string, successCallback: (data: { SetPrimaryEmailAddressResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetPrimaryEmailAddressResult: void }>;

	SetPrimaryEmailAddress(id: string, emailAddress: string): { SetPrimaryEmailAddressResult: void };

	SetPrimaryEmailAddressPromise(id: string, emailAddress: string): Promise<void>;

	AddEmailAddress(id: string, emailAddress: $D.Framework.ServiceLayer.Services.Organization.EmailAddress, successCallback: (data: { AddEmailAddressResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddEmailAddressResult: void }>;

	AddEmailAddress(id: string, emailAddress: $D.Framework.ServiceLayer.Services.Organization.EmailAddress): { AddEmailAddressResult: void };

	AddEmailAddressPromise(id: string, emailAddress: $D.Framework.ServiceLayer.Services.Organization.EmailAddress): Promise<void>;

	RemoveEmailAddress(id: string, emailAddress: string, successCallback: (data: { RemoveEmailAddressResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveEmailAddressResult: void }>;

	RemoveEmailAddress(id: string, emailAddress: string): { RemoveEmailAddressResult: void };

	RemoveEmailAddressPromise(id: string, emailAddress: string): Promise<void>;

	GetPrimaryEmailAddress(id: string, successCallback: (data: { GetPrimaryEmailAddressResult: $D.Framework.ServiceLayer.Services.Organization.EmailAddress }) => any, errorCallback?: () => any): JQueryPromise<{ GetPrimaryEmailAddressResult: $D.Framework.ServiceLayer.Services.Organization.EmailAddress }>;

	GetPrimaryEmailAddress(id: string): { GetPrimaryEmailAddressResult: $D.Framework.ServiceLayer.Services.Organization.EmailAddress };

	GetPrimaryEmailAddressPromise(id: string): Promise<$D.Framework.ServiceLayer.Services.Organization.EmailAddress>;

	GetAllEmailAddresses(id: string, successCallback: (data: { GetAllEmailAddressesResult: $D.Framework.ServiceLayer.Services.Organization.EmailAddress[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllEmailAddressesResult: $D.Framework.ServiceLayer.Services.Organization.EmailAddress[] }>;

	GetAllEmailAddresses(id: string): { GetAllEmailAddressesResult: $D.Framework.ServiceLayer.Services.Organization.EmailAddress[] };

	GetAllEmailAddressesPromise(id: string): Promise<$D.Framework.ServiceLayer.Services.Organization.EmailAddress[]>;

	GetEmailByEmailAddress(id: string, emailAddress: string, successCallback: (data: { GetEmailByEmailAddressResult: $D.Framework.ServiceLayer.Services.Organization.EmailAddress }) => any, errorCallback?: () => any): JQueryPromise<{ GetEmailByEmailAddressResult: $D.Framework.ServiceLayer.Services.Organization.EmailAddress }>;

	GetEmailByEmailAddress(id: string, emailAddress: string): { GetEmailByEmailAddressResult: $D.Framework.ServiceLayer.Services.Organization.EmailAddress };

	GetEmailByEmailAddressPromise(id: string, emailAddress: string): Promise<$D.Framework.ServiceLayer.Services.Organization.EmailAddress>;

	AddAddress(id: string, address: $D.Framework.ServiceLayer.Services.Organization.Address, successCallback: (data: { AddAddressResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddAddressResult: void }>;

	AddAddress(id: string, address: $D.Framework.ServiceLayer.Services.Organization.Address): { AddAddressResult: void };

	AddAddressPromise(id: string, address: $D.Framework.ServiceLayer.Services.Organization.Address): Promise<void>;

	SetPrimaryAddress(id: string, addressId: string, successCallback: (data: { SetPrimaryAddressResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetPrimaryAddressResult: void }>;

	SetPrimaryAddress(id: string, addressId: string): { SetPrimaryAddressResult: void };

	SetPrimaryAddressPromise(id: string, addressId: string): Promise<void>;

	GetPrimaryAddress(id: string, successCallback: (data: { GetPrimaryAddressResult: $D.Framework.ServiceLayer.Services.Organization.Address }) => any, errorCallback?: () => any): JQueryPromise<{ GetPrimaryAddressResult: $D.Framework.ServiceLayer.Services.Organization.Address }>;

	GetPrimaryAddress(id: string): { GetPrimaryAddressResult: $D.Framework.ServiceLayer.Services.Organization.Address };

	GetPrimaryAddressPromise(id: string): Promise<$D.Framework.ServiceLayer.Services.Organization.Address>;

	GetAddresses(id: string, successCallback: (data: { GetAddressesResult: $D.Framework.ServiceLayer.Services.Organization.Address[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAddressesResult: $D.Framework.ServiceLayer.Services.Organization.Address[] }>;

	GetAddresses(id: string): { GetAddressesResult: $D.Framework.ServiceLayer.Services.Organization.Address[] };

	GetAddressesPromise(id: string): Promise<$D.Framework.ServiceLayer.Services.Organization.Address[]>;

	RemoveAddress(id: string, addressID: string, successCallback: (data: { RemoveAddressResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveAddressResult: void }>;

	RemoveAddress(id: string, addressID: string): { RemoveAddressResult: void };

	RemoveAddressPromise(id: string, addressID: string): Promise<void>;

	SetPrimaryPhoneNumber(id: string, phoneNumber: string, successCallback: (data: { SetPrimaryPhoneNumberResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetPrimaryPhoneNumberResult: void }>;

	SetPrimaryPhoneNumber(id: string, phoneNumber: string): { SetPrimaryPhoneNumberResult: void };

	SetPrimaryPhoneNumberPromise(id: string, phoneNumber: string): Promise<void>;

	AddPhoneNumber(id: string, phoneNumber: $D.Framework.ServiceLayer.Services.Organization.Phone, successCallback: (data: { AddPhoneNumberResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddPhoneNumberResult: void }>;

	AddPhoneNumber(id: string, phoneNumber: $D.Framework.ServiceLayer.Services.Organization.Phone): { AddPhoneNumberResult: void };

	AddPhoneNumberPromise(id: string, phoneNumber: $D.Framework.ServiceLayer.Services.Organization.Phone): Promise<void>;

	RemovePhoneNumber(id: string, phoneNumber: string, successCallback: (data: { RemovePhoneNumberResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemovePhoneNumberResult: void }>;

	RemovePhoneNumber(id: string, phoneNumber: string): { RemovePhoneNumberResult: void };

	RemovePhoneNumberPromise(id: string, phoneNumber: string): Promise<void>;

	GetPrimaryPhoneNumber(id: string, successCallback: (data: { GetPrimaryPhoneNumberResult: $D.Framework.ServiceLayer.Services.Organization.Phone }) => any, errorCallback?: () => any): JQueryPromise<{ GetPrimaryPhoneNumberResult: $D.Framework.ServiceLayer.Services.Organization.Phone }>;

	GetPrimaryPhoneNumber(id: string): { GetPrimaryPhoneNumberResult: $D.Framework.ServiceLayer.Services.Organization.Phone };

	GetPrimaryPhoneNumberPromise(id: string): Promise<$D.Framework.ServiceLayer.Services.Organization.Phone>;

	GetAllPhoneNumbers(id: string, successCallback: (data: { GetAllPhoneNumbersResult: $D.Framework.ServiceLayer.Services.Organization.Phone[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllPhoneNumbersResult: $D.Framework.ServiceLayer.Services.Organization.Phone[] }>;

	GetAllPhoneNumbers(id: string): { GetAllPhoneNumbersResult: $D.Framework.ServiceLayer.Services.Organization.Phone[] };

	GetAllPhoneNumbersPromise(id: string): Promise<$D.Framework.ServiceLayer.Services.Organization.Phone[]>;

	GetPhoneByPhoneNumber(id: string, phoneNumber: string, successCallback: (data: { GetPhoneByPhoneNumberResult: $D.Framework.ServiceLayer.Services.Organization.Phone }) => any, errorCallback?: () => any): JQueryPromise<{ GetPhoneByPhoneNumberResult: $D.Framework.ServiceLayer.Services.Organization.Phone }>;

	GetPhoneByPhoneNumber(id: string, phoneNumber: string): { GetPhoneByPhoneNumberResult: $D.Framework.ServiceLayer.Services.Organization.Phone };

	GetPhoneByPhoneNumberPromise(id: string, phoneNumber: string): Promise<$D.Framework.ServiceLayer.Services.Organization.Phone>;

	AddInstantMessengerAddress(id: string, imAddress: $D.Framework.ServiceLayer.Services.Organization.InstantMessengerAddress, successCallback: (data: { AddInstantMessengerAddressResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddInstantMessengerAddressResult: void }>;

	AddInstantMessengerAddress(id: string, imAddress: $D.Framework.ServiceLayer.Services.Organization.InstantMessengerAddress): { AddInstantMessengerAddressResult: void };

	AddInstantMessengerAddressPromise(id: string, imAddress: $D.Framework.ServiceLayer.Services.Organization.InstantMessengerAddress): Promise<void>;

	RemoveInstantMessengerAddress(id: string, imAddress: string, successCallback: (data: { RemoveInstantMessengerAddressResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveInstantMessengerAddressResult: void }>;

	RemoveInstantMessengerAddress(id: string, imAddress: string): { RemoveInstantMessengerAddressResult: void };

	RemoveInstantMessengerAddressPromise(id: string, imAddress: string): Promise<void>;

	GetInstantMessengerAddresses(id: string, successCallback: (data: { GetInstantMessengerAddressesResult: $D.Framework.ServiceLayer.Services.Organization.InstantMessengerAddress[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetInstantMessengerAddressesResult: $D.Framework.ServiceLayer.Services.Organization.InstantMessengerAddress[] }>;

	GetInstantMessengerAddresses(id: string): { GetInstantMessengerAddressesResult: $D.Framework.ServiceLayer.Services.Organization.InstantMessengerAddress[] };

	GetInstantMessengerAddressesPromise(id: string): Promise<$D.Framework.ServiceLayer.Services.Organization.InstantMessengerAddress[]>;

	AddOtherContact(id: string, otherContact: $D.Framework.ServiceLayer.Services.Organization.OtherContact, successCallback: (data: { AddOtherContactResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddOtherContactResult: void }>;

	AddOtherContact(id: string, otherContact: $D.Framework.ServiceLayer.Services.Organization.OtherContact): { AddOtherContactResult: void };

	AddOtherContactPromise(id: string, otherContact: $D.Framework.ServiceLayer.Services.Organization.OtherContact): Promise<void>;

	RemoveOtherContact(id: string, otherContact: string, successCallback: (data: { RemoveOtherContactResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveOtherContactResult: void }>;

	RemoveOtherContact(id: string, otherContact: string): { RemoveOtherContactResult: void };

	RemoveOtherContactPromise(id: string, otherContact: string): Promise<void>;

	GetOtherContacts(id: string, successCallback: (data: { GetOtherContactsResult: $D.Framework.ServiceLayer.Services.Organization.OtherContact[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetOtherContactsResult: $D.Framework.ServiceLayer.Services.Organization.OtherContact[] }>;

	GetOtherContacts(id: string): { GetOtherContactsResult: $D.Framework.ServiceLayer.Services.Organization.OtherContact[] };

	GetOtherContactsPromise(id: string): Promise<$D.Framework.ServiceLayer.Services.Organization.OtherContact[]>;

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
	PersonService(): PersonServiceStatic;
}
