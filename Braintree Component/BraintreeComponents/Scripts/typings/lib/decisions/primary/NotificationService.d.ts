/// <reference path="./datatypes._base.d.ts" />

interface NotificationServiceStatic {

	SendNotification(notificationTypeID: string, entityID: string, entityFolderID: string, message: $D.Framework.ServiceLayer.Services.Notifications.NotificationMessage, successCallback: (data: { SendNotificationResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SendNotificationResult: void }>;

	SendNotification(notificationTypeID: string, entityID: string, entityFolderID: string, message: $D.Framework.ServiceLayer.Services.Notifications.NotificationMessage): { SendNotificationResult: void };

	SendNotificationPromise(notificationTypeID: string, entityID: string, entityFolderID: string, message: $D.Framework.ServiceLayer.Services.Notifications.NotificationMessage): Promise<void>;

	SendNotificationToEmail(toUsers: string[], message: $D.Framework.ServiceLayer.Services.Notifications.NotificationMessage, successCallback: (data: { SendNotificationToEmailResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SendNotificationToEmailResult: void }>;

	SendNotificationToEmail(toUsers: string[], message: $D.Framework.ServiceLayer.Services.Notifications.NotificationMessage): { SendNotificationToEmailResult: void };

	SendNotificationToEmailPromise(toUsers: string[], message: $D.Framework.ServiceLayer.Services.Notifications.NotificationMessage): Promise<void>;

	SendNotificationToGroup(groupID: string, identifierType: $D.Framework.ServiceLayer.Utilities.GroupIdentifierType, communicationType: $D.Framework.ServiceLayer.Services.Notifications.NotificationCommunicationType, message: $D.Framework.ServiceLayer.Services.Notifications.NotificationMessage, successCallback: (data: { SendNotificationToGroupResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SendNotificationToGroupResult: void }>;

	SendNotificationToGroup(groupID: string, identifierType: $D.Framework.ServiceLayer.Utilities.GroupIdentifierType, communicationType: $D.Framework.ServiceLayer.Services.Notifications.NotificationCommunicationType, message: $D.Framework.ServiceLayer.Services.Notifications.NotificationMessage): { SendNotificationToGroupResult: void };

	SendNotificationToGroupPromise(groupID: string, identifierType: $D.Framework.ServiceLayer.Utilities.GroupIdentifierType, communicationType: $D.Framework.ServiceLayer.Services.Notifications.NotificationCommunicationType, message: $D.Framework.ServiceLayer.Services.Notifications.NotificationMessage): Promise<void>;

	SendNotificationToAccount(accountID: string, identifierType: $D.Framework.ServiceLayer.Utilities.UserIdentifierType, communicationType: $D.Framework.ServiceLayer.Services.Notifications.NotificationCommunicationType, message: $D.Framework.ServiceLayer.Services.Notifications.NotificationMessage, successCallback: (data: { SendNotificationToAccountResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SendNotificationToAccountResult: void }>;

	SendNotificationToAccount(accountID: string, identifierType: $D.Framework.ServiceLayer.Utilities.UserIdentifierType, communicationType: $D.Framework.ServiceLayer.Services.Notifications.NotificationCommunicationType, message: $D.Framework.ServiceLayer.Services.Notifications.NotificationMessage): { SendNotificationToAccountResult: void };

	SendNotificationToAccountPromise(accountID: string, identifierType: $D.Framework.ServiceLayer.Utilities.UserIdentifierType, communicationType: $D.Framework.ServiceLayer.Services.Notifications.NotificationCommunicationType, message: $D.Framework.ServiceLayer.Services.Notifications.NotificationMessage): Promise<void>;

	SendNotificationToAccounts(accountID: string[], identifierType: $D.Framework.ServiceLayer.Utilities.UserIdentifierType, communicationType: $D.Framework.ServiceLayer.Services.Notifications.NotificationCommunicationType, message: $D.Framework.ServiceLayer.Services.Notifications.NotificationMessage, successCallback: (data: { SendNotificationToAccountsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SendNotificationToAccountsResult: void }>;

	SendNotificationToAccounts(accountID: string[], identifierType: $D.Framework.ServiceLayer.Utilities.UserIdentifierType, communicationType: $D.Framework.ServiceLayer.Services.Notifications.NotificationCommunicationType, message: $D.Framework.ServiceLayer.Services.Notifications.NotificationMessage): { SendNotificationToAccountsResult: void };

	SendNotificationToAccountsPromise(accountID: string[], identifierType: $D.Framework.ServiceLayer.Utilities.UserIdentifierType, communicationType: $D.Framework.ServiceLayer.Services.Notifications.NotificationCommunicationType, message: $D.Framework.ServiceLayer.Services.Notifications.NotificationMessage): Promise<void>;

	SendNotificationToServerAdmin(message: $D.Framework.ServiceLayer.Services.Notifications.NotificationMessage, successCallback: (data: { SendNotificationToServerAdminResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SendNotificationToServerAdminResult: void }>;

	SendNotificationToServerAdmin(message: $D.Framework.ServiceLayer.Services.Notifications.NotificationMessage): { SendNotificationToServerAdminResult: void };

	SendNotificationToServerAdminPromise(message: $D.Framework.ServiceLayer.Services.Notifications.NotificationMessage): Promise<void>;

	QueueNotification(notificationTypeID: string, entityID: string, entityFolderID: string, message: $D.Framework.ServiceLayer.Services.Notifications.NotificationMessage, sendLater: any, successCallback: (data: { QueueNotificationResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ QueueNotificationResult: void }>;

	QueueNotification(notificationTypeID: string, entityID: string, entityFolderID: string, message: $D.Framework.ServiceLayer.Services.Notifications.NotificationMessage, sendLater: any): { QueueNotificationResult: void };

	QueueNotificationPromise(notificationTypeID: string, entityID: string, entityFolderID: string, message: $D.Framework.ServiceLayer.Services.Notifications.NotificationMessage, sendLater: any): Promise<void>;

	QueueNotificationToEmail(toUsers: string[], message: $D.Framework.ServiceLayer.Services.Notifications.NotificationMessage, sendLater: any, successCallback: (data: { QueueNotificationToEmailResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ QueueNotificationToEmailResult: void }>;

	QueueNotificationToEmail(toUsers: string[], message: $D.Framework.ServiceLayer.Services.Notifications.NotificationMessage, sendLater: any): { QueueNotificationToEmailResult: void };

	QueueNotificationToEmailPromise(toUsers: string[], message: $D.Framework.ServiceLayer.Services.Notifications.NotificationMessage, sendLater: any): Promise<void>;

	QueueNotificationToGroup(groupID: string, entityFolderID: string, identifierType: $D.Framework.ServiceLayer.Utilities.GroupIdentifierType, message: $D.Framework.ServiceLayer.Services.Notifications.NotificationMessage, communicationType: $D.Framework.ServiceLayer.Services.Notifications.NotificationCommunicationType, sendLater: any, successCallback: (data: { QueueNotificationToGroupResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ QueueNotificationToGroupResult: void }>;

	QueueNotificationToGroup(groupID: string, entityFolderID: string, identifierType: $D.Framework.ServiceLayer.Utilities.GroupIdentifierType, message: $D.Framework.ServiceLayer.Services.Notifications.NotificationMessage, communicationType: $D.Framework.ServiceLayer.Services.Notifications.NotificationCommunicationType, sendLater: any): { QueueNotificationToGroupResult: void };

	QueueNotificationToGroupPromise(groupID: string, entityFolderID: string, identifierType: $D.Framework.ServiceLayer.Utilities.GroupIdentifierType, message: $D.Framework.ServiceLayer.Services.Notifications.NotificationMessage, communicationType: $D.Framework.ServiceLayer.Services.Notifications.NotificationCommunicationType, sendLater: any): Promise<void>;

	QueueNotificationToAccount(accountID: string, entityFolderID: string, identifierType: $D.Framework.ServiceLayer.Utilities.UserIdentifierType, message: $D.Framework.ServiceLayer.Services.Notifications.NotificationMessage, communicationType: $D.Framework.ServiceLayer.Services.Notifications.NotificationCommunicationType, sendLater: any, successCallback: (data: { QueueNotificationToAccountResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ QueueNotificationToAccountResult: void }>;

	QueueNotificationToAccount(accountID: string, entityFolderID: string, identifierType: $D.Framework.ServiceLayer.Utilities.UserIdentifierType, message: $D.Framework.ServiceLayer.Services.Notifications.NotificationMessage, communicationType: $D.Framework.ServiceLayer.Services.Notifications.NotificationCommunicationType, sendLater: any): { QueueNotificationToAccountResult: void };

	QueueNotificationToAccountPromise(accountID: string, entityFolderID: string, identifierType: $D.Framework.ServiceLayer.Utilities.UserIdentifierType, message: $D.Framework.ServiceLayer.Services.Notifications.NotificationMessage, communicationType: $D.Framework.ServiceLayer.Services.Notifications.NotificationCommunicationType, sendLater: any): Promise<void>;

	QueueNotificationToAccounts(accountID: string[], entityFolderID: string, identifierType: $D.Framework.ServiceLayer.Utilities.UserIdentifierType, message: $D.Framework.ServiceLayer.Services.Notifications.NotificationMessage, communicationType: $D.Framework.ServiceLayer.Services.Notifications.NotificationCommunicationType, sendLater: any, successCallback: (data: { QueueNotificationToAccountsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ QueueNotificationToAccountsResult: void }>;

	QueueNotificationToAccounts(accountID: string[], entityFolderID: string, identifierType: $D.Framework.ServiceLayer.Utilities.UserIdentifierType, message: $D.Framework.ServiceLayer.Services.Notifications.NotificationMessage, communicationType: $D.Framework.ServiceLayer.Services.Notifications.NotificationCommunicationType, sendLater: any): { QueueNotificationToAccountsResult: void };

	QueueNotificationToAccountsPromise(accountID: string[], entityFolderID: string, identifierType: $D.Framework.ServiceLayer.Utilities.UserIdentifierType, message: $D.Framework.ServiceLayer.Services.Notifications.NotificationMessage, communicationType: $D.Framework.ServiceLayer.Services.Notifications.NotificationCommunicationType, sendLater: any): Promise<void>;

	GetNotificationType(notificationTypeID: string, successCallback: (data: { GetNotificationTypeResult: $D.Framework.ServiceLayer.Services.Notifications.NotificationType }) => any, errorCallback?: () => any): JQueryPromise<{ GetNotificationTypeResult: $D.Framework.ServiceLayer.Services.Notifications.NotificationType }>;

	GetNotificationType(notificationTypeID: string): { GetNotificationTypeResult: $D.Framework.ServiceLayer.Services.Notifications.NotificationType };

	GetNotificationTypePromise(notificationTypeID: string): Promise<$D.Framework.ServiceLayer.Services.Notifications.NotificationType>;

	GetNotificationTypes(successCallback: (data: { GetNotificationTypesResult: $D.Framework.ServiceLayer.Services.Notifications.NotificationType[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetNotificationTypesResult: $D.Framework.ServiceLayer.Services.Notifications.NotificationType[] }>;

	GetNotificationTypes(): { GetNotificationTypesResult: $D.Framework.ServiceLayer.Services.Notifications.NotificationType[] };

	GetNotificationTypesPromise(): Promise<$D.Framework.ServiceLayer.Services.Notifications.NotificationType[]>;

	AddNotification(notification: $D.Framework.ServiceLayer.Services.Notifications.Notification, successCallback: (data: { AddNotificationResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddNotificationResult: void }>;

	AddNotification(notification: $D.Framework.ServiceLayer.Services.Notifications.Notification): { AddNotificationResult: void };

	AddNotificationPromise(notification: $D.Framework.ServiceLayer.Services.Notifications.Notification): Promise<void>;

	GetNotification(notificationID: string, successCallback: (data: { GetNotificationResult: $D.Framework.ServiceLayer.Services.Notifications.Notification }) => any, errorCallback?: () => any): JQueryPromise<{ GetNotificationResult: $D.Framework.ServiceLayer.Services.Notifications.Notification }>;

	GetNotification(notificationID: string): { GetNotificationResult: $D.Framework.ServiceLayer.Services.Notifications.Notification };

	GetNotificationPromise(notificationID: string): Promise<$D.Framework.ServiceLayer.Services.Notifications.Notification>;

	GetNotificationTypeByName(typeName: string, successCallback: (data: { GetNotificationTypeByNameResult: $D.Framework.ServiceLayer.Services.Notifications.NotificationType }) => any, errorCallback?: () => any): JQueryPromise<{ GetNotificationTypeByNameResult: $D.Framework.ServiceLayer.Services.Notifications.NotificationType }>;

	GetNotificationTypeByName(typeName: string): { GetNotificationTypeByNameResult: $D.Framework.ServiceLayer.Services.Notifications.NotificationType };

	GetNotificationTypeByNamePromise(typeName: string): Promise<$D.Framework.ServiceLayer.Services.Notifications.NotificationType>;

	SendPopupNotificationToAccount(accountID: string, identifierType: $D.Framework.ServiceLayer.Utilities.UserIdentifierType, message: $D.Framework.ServiceLayer.Services.Notifications.NotificationMessage, successCallback: (data: { SendPopupNotificationToAccountResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SendPopupNotificationToAccountResult: void }>;

	SendPopupNotificationToAccount(accountID: string, identifierType: $D.Framework.ServiceLayer.Utilities.UserIdentifierType, message: $D.Framework.ServiceLayer.Services.Notifications.NotificationMessage): { SendPopupNotificationToAccountResult: void };

	SendPopupNotificationToAccountPromise(accountID: string, identifierType: $D.Framework.ServiceLayer.Utilities.UserIdentifierType, message: $D.Framework.ServiceLayer.Services.Notifications.NotificationMessage): Promise<void>;

	SendPopupNotificationToGroup(groupID: string, identifierType: $D.Framework.ServiceLayer.Utilities.GroupIdentifierType, message: $D.Framework.ServiceLayer.Services.Notifications.NotificationMessage, successCallback: (data: { SendPopupNotificationToGroupResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SendPopupNotificationToGroupResult: void }>;

	SendPopupNotificationToGroup(groupID: string, identifierType: $D.Framework.ServiceLayer.Utilities.GroupIdentifierType, message: $D.Framework.ServiceLayer.Services.Notifications.NotificationMessage): { SendPopupNotificationToGroupResult: void };

	SendPopupNotificationToGroupPromise(groupID: string, identifierType: $D.Framework.ServiceLayer.Utilities.GroupIdentifierType, message: $D.Framework.ServiceLayer.Services.Notifications.NotificationMessage): Promise<void>;

	GetSMSCarriers(successCallback: (data: { GetSMSCarriersResult: $D.Framework.ServiceLayer.Services.Notifications.SMSCarrier[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetSMSCarriersResult: $D.Framework.ServiceLayer.Services.Notifications.SMSCarrier[] }>;

	GetSMSCarriers(): { GetSMSCarriersResult: $D.Framework.ServiceLayer.Services.Notifications.SMSCarrier[] };

	GetSMSCarriersPromise(): Promise<$D.Framework.ServiceLayer.Services.Notifications.SMSCarrier[]>;

	GetSMSCarrierByName(carrierName: string, successCallback: (data: { GetSMSCarrierByNameResult: $D.Framework.ServiceLayer.Services.Notifications.SMSCarrier }) => any, errorCallback?: () => any): JQueryPromise<{ GetSMSCarrierByNameResult: $D.Framework.ServiceLayer.Services.Notifications.SMSCarrier }>;

	GetSMSCarrierByName(carrierName: string): { GetSMSCarrierByNameResult: $D.Framework.ServiceLayer.Services.Notifications.SMSCarrier };

	GetSMSCarrierByNamePromise(carrierName: string): Promise<$D.Framework.ServiceLayer.Services.Notifications.SMSCarrier>;

	GetNotificationsInFolderByTypes(folderID: string, notificationTypes: string[], successCallback: (data: { GetNotificationsInFolderByTypesResult: $D.Framework.ServiceLayer.Services.Notifications.Notification[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetNotificationsInFolderByTypesResult: $D.Framework.ServiceLayer.Services.Notifications.Notification[] }>;

	GetNotificationsInFolderByTypes(folderID: string, notificationTypes: string[]): { GetNotificationsInFolderByTypesResult: $D.Framework.ServiceLayer.Services.Notifications.Notification[] };

	GetNotificationsInFolderByTypesPromise(folderID: string, notificationTypes: string[]): Promise<$D.Framework.ServiceLayer.Services.Notifications.Notification[]>;

	EnableNotification(notificationID: string, successCallback: (data: { EnableNotificationResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ EnableNotificationResult: void }>;

	EnableNotification(notificationID: string): { EnableNotificationResult: void };

	EnableNotificationPromise(notificationID: string): Promise<void>;

	DisableNotification(notificationID: string, successCallback: (data: { DisableNotificationResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DisableNotificationResult: void }>;

	DisableNotification(notificationID: string): { DisableNotificationResult: void };

	DisableNotificationPromise(notificationID: string): Promise<void>;

	SaveNotificationToMe(notification: $D.Framework.ServiceLayer.Services.Notifications.Notification, successCallback: (data: { SaveNotificationToMeResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveNotificationToMeResult: void }>;

	SaveNotificationToMe(notification: $D.Framework.ServiceLayer.Services.Notifications.Notification): { SaveNotificationToMeResult: void };

	SaveNotificationToMePromise(notification: $D.Framework.ServiceLayer.Services.Notifications.Notification): Promise<void>;

	GetDefaultNotificationByTypes(notificationTypes: string[], successCallback: (data: { GetDefaultNotificationByTypesResult: $D.Framework.ServiceLayer.Services.Notifications.Notification[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetDefaultNotificationByTypesResult: $D.Framework.ServiceLayer.Services.Notifications.Notification[] }>;

	GetDefaultNotificationByTypes(notificationTypes: string[]): { GetDefaultNotificationByTypesResult: $D.Framework.ServiceLayer.Services.Notifications.Notification[] };

	GetDefaultNotificationByTypesPromise(notificationTypes: string[]): Promise<$D.Framework.ServiceLayer.Services.Notifications.Notification[]>;

	GetNotificationsInFolder(folderID: string, successCallback: (data: { GetNotificationsInFolderResult: $D.Framework.ServiceLayer.Services.Notifications.Notification[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetNotificationsInFolderResult: $D.Framework.ServiceLayer.Services.Notifications.Notification[] }>;

	GetNotificationsInFolder(folderID: string): { GetNotificationsInFolderResult: $D.Framework.ServiceLayer.Services.Notifications.Notification[] };

	GetNotificationsInFolderPromise(folderID: string): Promise<$D.Framework.ServiceLayer.Services.Notifications.Notification[]>;

	GetDefaultNotification(successCallback: (data: { GetDefaultNotificationResult: $D.Framework.ServiceLayer.Services.Notifications.Notification[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetDefaultNotificationResult: $D.Framework.ServiceLayer.Services.Notifications.Notification[] }>;

	GetDefaultNotification(): { GetDefaultNotificationResult: $D.Framework.ServiceLayer.Services.Notifications.Notification[] };

	GetDefaultNotificationPromise(): Promise<$D.Framework.ServiceLayer.Services.Notifications.Notification[]>;

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
	NotificationService(): NotificationServiceStatic;
}
