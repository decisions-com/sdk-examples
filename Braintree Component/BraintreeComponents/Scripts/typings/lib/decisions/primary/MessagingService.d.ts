/// <reference path="./datatypes._base.d.ts" />

interface MessagingServiceStatic {

	GetMessage(messageQueue: string, messageHandlerId: string, messageFetchType: $D.Framework.Data.Messaging.MessageFetchType, blockForMessage: boolean, successCallback: (data: { GetMessageResult: $D.Framework.Data.Messaging.MessageQueueMessage }) => any, errorCallback?: () => any): JQueryPromise<{ GetMessageResult: $D.Framework.Data.Messaging.MessageQueueMessage }>;

	GetMessage(messageQueue: string, messageHandlerId: string, messageFetchType: $D.Framework.Data.Messaging.MessageFetchType, blockForMessage: boolean): { GetMessageResult: $D.Framework.Data.Messaging.MessageQueueMessage };

	GetMessagePromise(messageQueue: string, messageHandlerId: string, messageFetchType: $D.Framework.Data.Messaging.MessageFetchType, blockForMessage: boolean): Promise<$D.Framework.Data.Messaging.MessageQueueMessage>;

	RenewLessageLease(messageQueue: string, messageHandlerId: string, id: string, successCallback: (data: { RenewLessageLeaseResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RenewLessageLeaseResult: void }>;

	RenewLessageLease(messageQueue: string, messageHandlerId: string, id: string): { RenewLessageLeaseResult: void };

	RenewLessageLeasePromise(messageQueue: string, messageHandlerId: string, id: string): Promise<void>;

	ReleaseMessageLease(messageQueue: string, messageHandlerId: string, id: string, successCallback: (data: { ReleaseMessageLeaseResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ReleaseMessageLeaseResult: void }>;

	ReleaseMessageLease(messageQueue: string, messageHandlerId: string, id: string): { ReleaseMessageLeaseResult: void };

	ReleaseMessageLeasePromise(messageQueue: string, messageHandlerId: string, id: string): Promise<void>;

	CompleteMessageLease(messageQueue: string, messageHandlerId: string, id: string, successCallback: (data: { CompleteMessageLeaseResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CompleteMessageLeaseResult: void }>;

	CompleteMessageLease(messageQueue: string, messageHandlerId: string, id: string): { CompleteMessageLeaseResult: void };

	CompleteMessageLeasePromise(messageQueue: string, messageHandlerId: string, id: string): Promise<void>;

	AddMessage(messageQueue: string, id: string, data: number[], successCallback: (data: { AddMessageResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddMessageResult: void }>;

	AddMessage(messageQueue: string, id: string, data: number[]): { AddMessageResult: void };

	AddMessagePromise(messageQueue: string, id: string, data: number[]): Promise<void>;
}

interface ServicesStatic {
	MessagingService(): MessagingServiceStatic;
}
