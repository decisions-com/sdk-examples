/// <reference path="./datatypes._base.d.ts" />

interface UserMessageServiceStatic {

	CreateMessage(message: any, successCallback: (data: { CreateMessageResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateMessageResult: string }>;

	CreateMessage(message: any): { CreateMessageResult: string };

	CreateMessagePromise(message: any): Promise<string>;

	GetMessages(includeArchived: boolean, successCallback: (data: { GetMessagesResult: any[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMessagesResult: any[] }>;

	GetMessages(includeArchived: boolean): { GetMessagesResult: any[] };

	GetMessagesPromise(includeArchived: boolean): Promise<any[]>;

	UpdateMessageStatus(messageId: string, status: $D.Framework.ServiceLayer.Services.UserMessage.UserMessageStatus, successCallback: (data: { UpdateMessageStatusResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateMessageStatusResult: void }>;

	UpdateMessageStatus(messageId: string, status: $D.Framework.ServiceLayer.Services.UserMessage.UserMessageStatus): { UpdateMessageStatusResult: void };

	UpdateMessageStatusPromise(messageId: string, status: $D.Framework.ServiceLayer.Services.UserMessage.UserMessageStatus): Promise<void>;

	ArchiveMessage(messageId: string, successCallback: (data: { ArchiveMessageResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ArchiveMessageResult: void }>;

	ArchiveMessage(messageId: string): { ArchiveMessageResult: void };

	ArchiveMessagePromise(messageId: string): Promise<void>;

	GetById(messageId: string, successCallback: (data: { GetByIdResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIdResult: any }>;

	GetById(messageId: string): { GetByIdResult: any };

	GetByIdPromise(messageId: string): Promise<any>;

	GetMessagesThreadByMessageId(messageId: string, successCallback: (data: { GetMessagesThreadByMessageIdResult: any[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMessagesThreadByMessageIdResult: any[] }>;

	GetMessagesThreadByMessageId(messageId: string): { GetMessagesThreadByMessageIdResult: any[] };

	GetMessagesThreadByMessageIdPromise(messageId: string): Promise<any[]>;

	GetMessagesThreadByThreadId(threadId: string, successCallback: (data: { GetMessagesThreadByThreadIdResult: any[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMessagesThreadByThreadIdResult: any[] }>;

	GetMessagesThreadByThreadId(threadId: string): { GetMessagesThreadByThreadIdResult: any[] };

	GetMessagesThreadByThreadIdPromise(threadId: string): Promise<any[]>;

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
	UserMessageService(): UserMessageServiceStatic;
}
