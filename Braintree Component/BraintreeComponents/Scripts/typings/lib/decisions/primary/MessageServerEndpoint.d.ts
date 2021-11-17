/// <reference path="./datatypes._base.d.ts" />

interface MessageServerEndpointStatic {

	PostMessages(message: $D.Framework.Data.Messaging.MessageQueueMessage[], successCallback: (data: { PostMessagesResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ PostMessagesResult: void }>;

	PostMessages(message: $D.Framework.Data.Messaging.MessageQueueMessage[]): { PostMessagesResult: void };

	PostMessagesPromise(message: $D.Framework.Data.Messaging.MessageQueueMessage[]): Promise<void>;

	PopMessagesByQuery(messageQueueName: string, handlerId: string, maxNumber: number, query: $D.Framework.Data.Messaging.MessageQueueQuery, successCallback: (data: { PopMessagesByQueryResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }) => any, errorCallback?: () => any): JQueryPromise<{ PopMessagesByQueryResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }>;

	PopMessagesByQuery(messageQueueName: string, handlerId: string, maxNumber: number, query: $D.Framework.Data.Messaging.MessageQueueQuery): { PopMessagesByQueryResult: $D.Framework.Data.Messaging.MessageQueueMessage[] };

	PopMessagesByQueryPromise(messageQueueName: string, handlerId: string, maxNumber: number, query: $D.Framework.Data.Messaging.MessageQueueQuery): Promise<$D.Framework.Data.Messaging.MessageQueueMessage[]>;

	PopMessages(messageQueueName: string, handlerId: string, maxNumber: number, successCallback: (data: { PopMessagesResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }) => any, errorCallback?: () => any): JQueryPromise<{ PopMessagesResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }>;

	PopMessages(messageQueueName: string, handlerId: string, maxNumber: number): { PopMessagesResult: $D.Framework.Data.Messaging.MessageQueueMessage[] };

	PopMessagesPromise(messageQueueName: string, handlerId: string, maxNumber: number): Promise<$D.Framework.Data.Messaging.MessageQueueMessage[]>;

	PopMessagesAfterDateTime(messageQueueName: string, handlerId: string, maxNumber: number, messagesAfterDateTime: Date, successCallback: (data: { PopMessagesAfterDateTimeResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }) => any, errorCallback?: () => any): JQueryPromise<{ PopMessagesAfterDateTimeResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }>;

	PopMessagesAfterDateTime(messageQueueName: string, handlerId: string, maxNumber: number, messagesAfterDateTime: Date): { PopMessagesAfterDateTimeResult: $D.Framework.Data.Messaging.MessageQueueMessage[] };

	PopMessagesAfterDateTimePromise(messageQueueName: string, handlerId: string, maxNumber: number, messagesAfterDateTime: Date): Promise<$D.Framework.Data.Messaging.MessageQueueMessage[]>;

	PopMessagesAfterSequence(messageQueueName: string, handlerId: string, maxNumber: number, sequenceNumber: number, successCallback: (data: { PopMessagesAfterSequenceResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }) => any, errorCallback?: () => any): JQueryPromise<{ PopMessagesAfterSequenceResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }>;

	PopMessagesAfterSequence(messageQueueName: string, handlerId: string, maxNumber: number, sequenceNumber: number): { PopMessagesAfterSequenceResult: $D.Framework.Data.Messaging.MessageQueueMessage[] };

	PopMessagesAfterSequencePromise(messageQueueName: string, handlerId: string, maxNumber: number, sequenceNumber: number): Promise<$D.Framework.Data.Messaging.MessageQueueMessage[]>;

	PopWaitForMessages(messageQueueName: string, handlerId: string, maxNumber: number, maxWaitTimeInSeconds: any, successCallback: (data: { PopWaitForMessagesResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }) => any, errorCallback?: () => any): JQueryPromise<{ PopWaitForMessagesResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }>;

	PopWaitForMessages(messageQueueName: string, handlerId: string, maxNumber: number, maxWaitTimeInSeconds: any): { PopWaitForMessagesResult: $D.Framework.Data.Messaging.MessageQueueMessage[] };

	PopWaitForMessagesPromise(messageQueueName: string, handlerId: string, maxNumber: number, maxWaitTimeInSeconds: any): Promise<$D.Framework.Data.Messaging.MessageQueueMessage[]>;

	GetMessagesByQuery(messageQueueName: string, handlerId: string, maxNumber: number, query: $D.Framework.Data.Messaging.MessageQueueQuery, successCallback: (data: { GetMessagesByQueryResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMessagesByQueryResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }>;

	GetMessagesByQuery(messageQueueName: string, handlerId: string, maxNumber: number, query: $D.Framework.Data.Messaging.MessageQueueQuery): { GetMessagesByQueryResult: $D.Framework.Data.Messaging.MessageQueueMessage[] };

	GetMessagesByQueryPromise(messageQueueName: string, handlerId: string, maxNumber: number, query: $D.Framework.Data.Messaging.MessageQueueQuery): Promise<$D.Framework.Data.Messaging.MessageQueueMessage[]>;

	GetMessages(messageQueueName: string, handlerId: string, maxNumber: number, successCallback: (data: { GetMessagesResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMessagesResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }>;

	GetMessages(messageQueueName: string, handlerId: string, maxNumber: number): { GetMessagesResult: $D.Framework.Data.Messaging.MessageQueueMessage[] };

	GetMessagesPromise(messageQueueName: string, handlerId: string, maxNumber: number): Promise<$D.Framework.Data.Messaging.MessageQueueMessage[]>;

	GetMessagesAfterDateTime(messageQueueName: string, handlerId: string, maxNumber: number, messagesAfterDateTime: Date, successCallback: (data: { GetMessagesAfterDateTimeResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMessagesAfterDateTimeResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }>;

	GetMessagesAfterDateTime(messageQueueName: string, handlerId: string, maxNumber: number, messagesAfterDateTime: Date): { GetMessagesAfterDateTimeResult: $D.Framework.Data.Messaging.MessageQueueMessage[] };

	GetMessagesAfterDateTimePromise(messageQueueName: string, handlerId: string, maxNumber: number, messagesAfterDateTime: Date): Promise<$D.Framework.Data.Messaging.MessageQueueMessage[]>;

	GetMessagesAfterSequence(messageQueueName: string, handlerId: string, maxNumber: number, sequenceNumber: number, successCallback: (data: { GetMessagesAfterSequenceResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMessagesAfterSequenceResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }>;

	GetMessagesAfterSequence(messageQueueName: string, handlerId: string, maxNumber: number, sequenceNumber: number): { GetMessagesAfterSequenceResult: $D.Framework.Data.Messaging.MessageQueueMessage[] };

	GetMessagesAfterSequencePromise(messageQueueName: string, handlerId: string, maxNumber: number, sequenceNumber: number): Promise<$D.Framework.Data.Messaging.MessageQueueMessage[]>;

	GetWaitForMessages(messageQueueName: string, handlerId: string, maxNumber: number, maxWaitTimeInSeconds: any, successCallback: (data: { GetWaitForMessagesResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetWaitForMessagesResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }>;

	GetWaitForMessages(messageQueueName: string, handlerId: string, maxNumber: number, maxWaitTimeInSeconds: any): { GetWaitForMessagesResult: $D.Framework.Data.Messaging.MessageQueueMessage[] };

	GetWaitForMessagesPromise(messageQueueName: string, handlerId: string, maxNumber: number, maxWaitTimeInSeconds: any): Promise<$D.Framework.Data.Messaging.MessageQueueMessage[]>;

	GetWaitForMessagesAfterDateTime(messageQueueName: string, handlerId: string, maxNumber: number, maxWaitTimeInSeconds: any, messagesAfterDateTime: Date, successCallback: (data: { GetWaitForMessagesAfterDateTimeResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetWaitForMessagesAfterDateTimeResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }>;

	GetWaitForMessagesAfterDateTime(messageQueueName: string, handlerId: string, maxNumber: number, maxWaitTimeInSeconds: any, messagesAfterDateTime: Date): { GetWaitForMessagesAfterDateTimeResult: $D.Framework.Data.Messaging.MessageQueueMessage[] };

	GetWaitForMessagesAfterDateTimePromise(messageQueueName: string, handlerId: string, maxNumber: number, maxWaitTimeInSeconds: any, messagesAfterDateTime: Date): Promise<$D.Framework.Data.Messaging.MessageQueueMessage[]>;

	GetWaitForMessagesAfterSequence(messageQueueName: string, handlerId: string, maxNumber: number, maxWaitTimeInSeconds: any, sequenceNumber: number, successCallback: (data: { GetWaitForMessagesAfterSequenceResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetWaitForMessagesAfterSequenceResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }>;

	GetWaitForMessagesAfterSequence(messageQueueName: string, handlerId: string, maxNumber: number, maxWaitTimeInSeconds: any, sequenceNumber: number): { GetWaitForMessagesAfterSequenceResult: $D.Framework.Data.Messaging.MessageQueueMessage[] };

	GetWaitForMessagesAfterSequencePromise(messageQueueName: string, handlerId: string, maxNumber: number, maxWaitTimeInSeconds: any, sequenceNumber: number): Promise<$D.Framework.Data.Messaging.MessageQueueMessage[]>;

	LeaseMessagesByQuery(messageQueueName: string, handlerId: string, maxNumber: number, query: $D.Framework.Data.Messaging.MessageQueueQuery, successCallback: (data: { LeaseMessagesByQueryResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }) => any, errorCallback?: () => any): JQueryPromise<{ LeaseMessagesByQueryResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }>;

	LeaseMessagesByQuery(messageQueueName: string, handlerId: string, maxNumber: number, query: $D.Framework.Data.Messaging.MessageQueueQuery): { LeaseMessagesByQueryResult: $D.Framework.Data.Messaging.MessageQueueMessage[] };

	LeaseMessagesByQueryPromise(messageQueueName: string, handlerId: string, maxNumber: number, query: $D.Framework.Data.Messaging.MessageQueueQuery): Promise<$D.Framework.Data.Messaging.MessageQueueMessage[]>;

	LeaseMessages(messageQueueName: string, handlerId: string, maxNumber: number, successCallback: (data: { LeaseMessagesResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }) => any, errorCallback?: () => any): JQueryPromise<{ LeaseMessagesResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }>;

	LeaseMessages(messageQueueName: string, handlerId: string, maxNumber: number): { LeaseMessagesResult: $D.Framework.Data.Messaging.MessageQueueMessage[] };

	LeaseMessagesPromise(messageQueueName: string, handlerId: string, maxNumber: number): Promise<$D.Framework.Data.Messaging.MessageQueueMessage[]>;

	LeaseMessagesAfterDateTime(messageQueueName: string, handlerId: string, maxNumber: number, messagesAfterDateTime: Date, successCallback: (data: { LeaseMessagesAfterDateTimeResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }) => any, errorCallback?: () => any): JQueryPromise<{ LeaseMessagesAfterDateTimeResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }>;

	LeaseMessagesAfterDateTime(messageQueueName: string, handlerId: string, maxNumber: number, messagesAfterDateTime: Date): { LeaseMessagesAfterDateTimeResult: $D.Framework.Data.Messaging.MessageQueueMessage[] };

	LeaseMessagesAfterDateTimePromise(messageQueueName: string, handlerId: string, maxNumber: number, messagesAfterDateTime: Date): Promise<$D.Framework.Data.Messaging.MessageQueueMessage[]>;

	LeaseMessagesAfterSequence(messageQueueName: string, handlerId: string, maxNumber: number, sequenceNumber: number, successCallback: (data: { LeaseMessagesAfterSequenceResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }) => any, errorCallback?: () => any): JQueryPromise<{ LeaseMessagesAfterSequenceResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }>;

	LeaseMessagesAfterSequence(messageQueueName: string, handlerId: string, maxNumber: number, sequenceNumber: number): { LeaseMessagesAfterSequenceResult: $D.Framework.Data.Messaging.MessageQueueMessage[] };

	LeaseMessagesAfterSequencePromise(messageQueueName: string, handlerId: string, maxNumber: number, sequenceNumber: number): Promise<$D.Framework.Data.Messaging.MessageQueueMessage[]>;

	LeaseWaitForMessages(messageQueueName: string, handlerId: string, maxNumber: number, maxWaitTimeInSeconds: any, successCallback: (data: { LeaseWaitForMessagesResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }) => any, errorCallback?: () => any): JQueryPromise<{ LeaseWaitForMessagesResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }>;

	LeaseWaitForMessages(messageQueueName: string, handlerId: string, maxNumber: number, maxWaitTimeInSeconds: any): { LeaseWaitForMessagesResult: $D.Framework.Data.Messaging.MessageQueueMessage[] };

	LeaseWaitForMessagesPromise(messageQueueName: string, handlerId: string, maxNumber: number, maxWaitTimeInSeconds: any): Promise<$D.Framework.Data.Messaging.MessageQueueMessage[]>;

	LeaseWaitForMessagesAfterDateTime(messageQueueName: string, handlerId: string, maxNumber: number, maxWaitTimeInSeconds: any, messagesAfterDateTime: Date, successCallback: (data: { LeaseWaitForMessagesAfterDateTimeResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }) => any, errorCallback?: () => any): JQueryPromise<{ LeaseWaitForMessagesAfterDateTimeResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }>;

	LeaseWaitForMessagesAfterDateTime(messageQueueName: string, handlerId: string, maxNumber: number, maxWaitTimeInSeconds: any, messagesAfterDateTime: Date): { LeaseWaitForMessagesAfterDateTimeResult: $D.Framework.Data.Messaging.MessageQueueMessage[] };

	LeaseWaitForMessagesAfterDateTimePromise(messageQueueName: string, handlerId: string, maxNumber: number, maxWaitTimeInSeconds: any, messagesAfterDateTime: Date): Promise<$D.Framework.Data.Messaging.MessageQueueMessage[]>;

	LeaseWaitForMessagesAfterSequence(messageQueueName: string, handlerId: string, maxNumber: number, maxWaitTimeInSeconds: any, sequenceNumber: number, successCallback: (data: { LeaseWaitForMessagesAfterSequenceResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }) => any, errorCallback?: () => any): JQueryPromise<{ LeaseWaitForMessagesAfterSequenceResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }>;

	LeaseWaitForMessagesAfterSequence(messageQueueName: string, handlerId: string, maxNumber: number, maxWaitTimeInSeconds: any, sequenceNumber: number): { LeaseWaitForMessagesAfterSequenceResult: $D.Framework.Data.Messaging.MessageQueueMessage[] };

	LeaseWaitForMessagesAfterSequencePromise(messageQueueName: string, handlerId: string, maxNumber: number, maxWaitTimeInSeconds: any, sequenceNumber: number): Promise<$D.Framework.Data.Messaging.MessageQueueMessage[]>;

	RenewMessageLease(messageQueueName: string, handlerId: string, id: string, successCallback: (data: { RenewMessageLeaseResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RenewMessageLeaseResult: void }>;

	RenewMessageLease(messageQueueName: string, handlerId: string, id: string): { RenewMessageLeaseResult: void };

	RenewMessageLeasePromise(messageQueueName: string, handlerId: string, id: string): Promise<void>;

	ReleaseMessageLease(messageQueueName: string, handlerId: string, id: string, successCallback: (data: { ReleaseMessageLeaseResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ReleaseMessageLeaseResult: void }>;

	ReleaseMessageLease(messageQueueName: string, handlerId: string, id: string): { ReleaseMessageLeaseResult: void };

	ReleaseMessageLeasePromise(messageQueueName: string, handlerId: string, id: string): Promise<void>;

	CompleteMessageLease(messageQueueName: string, handlerId: string, id: string, successCallback: (data: { CompleteMessageLeaseResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CompleteMessageLeaseResult: void }>;

	CompleteMessageLease(messageQueueName: string, handlerId: string, id: string): { CompleteMessageLeaseResult: void };

	CompleteMessageLeasePromise(messageQueueName: string, handlerId: string, id: string): Promise<void>;

	IsMessageLeased(messageQueueName: string, id: string, successCallback: (data: { IsMessageLeasedResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ IsMessageLeasedResult: boolean }>;

	IsMessageLeased(messageQueueName: string, id: string): { IsMessageLeasedResult: boolean };

	IsMessageLeasedPromise(messageQueueName: string, id: string): Promise<boolean>;

	GetMessagesByQueryWithFetchType(messageQueueName: string, handlerId: string, maxNumber: number, fetchType: $D.Framework.Data.Messaging.MessageFetchType, query: $D.Framework.Data.Messaging.MessageQueueQuery, successCallback: (data: { GetMessagesByQueryWithFetchTypeResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMessagesByQueryWithFetchTypeResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }>;

	GetMessagesByQueryWithFetchType(messageQueueName: string, handlerId: string, maxNumber: number, fetchType: $D.Framework.Data.Messaging.MessageFetchType, query: $D.Framework.Data.Messaging.MessageQueueQuery): { GetMessagesByQueryWithFetchTypeResult: $D.Framework.Data.Messaging.MessageQueueMessage[] };

	GetMessagesByQueryWithFetchTypePromise(messageQueueName: string, handlerId: string, maxNumber: number, fetchType: $D.Framework.Data.Messaging.MessageFetchType, query: $D.Framework.Data.Messaging.MessageQueueQuery): Promise<$D.Framework.Data.Messaging.MessageQueueMessage[]>;

	GetMessagesWithFetchType(messageQueueName: string, handlerId: string, maxNumber: number, fetchType: $D.Framework.Data.Messaging.MessageFetchType, successCallback: (data: { GetMessagesWithFetchTypeResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMessagesWithFetchTypeResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }>;

	GetMessagesWithFetchType(messageQueueName: string, handlerId: string, maxNumber: number, fetchType: $D.Framework.Data.Messaging.MessageFetchType): { GetMessagesWithFetchTypeResult: $D.Framework.Data.Messaging.MessageQueueMessage[] };

	GetMessagesWithFetchTypePromise(messageQueueName: string, handlerId: string, maxNumber: number, fetchType: $D.Framework.Data.Messaging.MessageFetchType): Promise<$D.Framework.Data.Messaging.MessageQueueMessage[]>;

	GetMessagesAfterDateTimeWithFetchType(messageQueueName: string, handlerId: string, maxNumber: number, fetchType: $D.Framework.Data.Messaging.MessageFetchType, messagesAfterDateTime: Date, successCallback: (data: { GetMessagesAfterDateTimeWithFetchTypeResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMessagesAfterDateTimeWithFetchTypeResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }>;

	GetMessagesAfterDateTimeWithFetchType(messageQueueName: string, handlerId: string, maxNumber: number, fetchType: $D.Framework.Data.Messaging.MessageFetchType, messagesAfterDateTime: Date): { GetMessagesAfterDateTimeWithFetchTypeResult: $D.Framework.Data.Messaging.MessageQueueMessage[] };

	GetMessagesAfterDateTimeWithFetchTypePromise(messageQueueName: string, handlerId: string, maxNumber: number, fetchType: $D.Framework.Data.Messaging.MessageFetchType, messagesAfterDateTime: Date): Promise<$D.Framework.Data.Messaging.MessageQueueMessage[]>;

	GetMessagesAfterSequenceWithFetchType(messageQueueName: string, handlerId: string, maxNumber: number, fetchType: $D.Framework.Data.Messaging.MessageFetchType, sequenceNumber: number, successCallback: (data: { GetMessagesAfterSequenceWithFetchTypeResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMessagesAfterSequenceWithFetchTypeResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }>;

	GetMessagesAfterSequenceWithFetchType(messageQueueName: string, handlerId: string, maxNumber: number, fetchType: $D.Framework.Data.Messaging.MessageFetchType, sequenceNumber: number): { GetMessagesAfterSequenceWithFetchTypeResult: $D.Framework.Data.Messaging.MessageQueueMessage[] };

	GetMessagesAfterSequenceWithFetchTypePromise(messageQueueName: string, handlerId: string, maxNumber: number, fetchType: $D.Framework.Data.Messaging.MessageFetchType, sequenceNumber: number): Promise<$D.Framework.Data.Messaging.MessageQueueMessage[]>;

	GetWaitForMessagesWithFetchType(messageQueueName: string, handlerId: string, maxNumber: number, fetchType: $D.Framework.Data.Messaging.MessageFetchType, maxWaitTimeInSeconds: any, successCallback: (data: { GetWaitForMessagesWithFetchTypeResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetWaitForMessagesWithFetchTypeResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }>;

	GetWaitForMessagesWithFetchType(messageQueueName: string, handlerId: string, maxNumber: number, fetchType: $D.Framework.Data.Messaging.MessageFetchType, maxWaitTimeInSeconds: any): { GetWaitForMessagesWithFetchTypeResult: $D.Framework.Data.Messaging.MessageQueueMessage[] };

	GetWaitForMessagesWithFetchTypePromise(messageQueueName: string, handlerId: string, maxNumber: number, fetchType: $D.Framework.Data.Messaging.MessageFetchType, maxWaitTimeInSeconds: any): Promise<$D.Framework.Data.Messaging.MessageQueueMessage[]>;

	GetWaitForMessagesInMultipleWithFetchType(messageQueueNames: string[], handlerId: string, maxNumber: number, fetchType: $D.Framework.Data.Messaging.MessageFetchType, maxWaitTimeInSeconds: any, successCallback: (data: { GetWaitForMessagesInMultipleWithFetchTypeResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetWaitForMessagesInMultipleWithFetchTypeResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }>;

	GetWaitForMessagesInMultipleWithFetchType(messageQueueNames: string[], handlerId: string, maxNumber: number, fetchType: $D.Framework.Data.Messaging.MessageFetchType, maxWaitTimeInSeconds: any): { GetWaitForMessagesInMultipleWithFetchTypeResult: $D.Framework.Data.Messaging.MessageQueueMessage[] };

	GetWaitForMessagesInMultipleWithFetchTypePromise(messageQueueNames: string[], handlerId: string, maxNumber: number, fetchType: $D.Framework.Data.Messaging.MessageFetchType, maxWaitTimeInSeconds: any): Promise<$D.Framework.Data.Messaging.MessageQueueMessage[]>;

	GetWaitForMessagesAfterDateTimeWithFetchType(messageQueueName: string, handlerId: string, maxNumber: number, fetchType: $D.Framework.Data.Messaging.MessageFetchType, maxWaitTimeInSeconds: any, messagesAfterDateTime: Date, successCallback: (data: { GetWaitForMessagesAfterDateTimeWithFetchTypeResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetWaitForMessagesAfterDateTimeWithFetchTypeResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }>;

	GetWaitForMessagesAfterDateTimeWithFetchType(messageQueueName: string, handlerId: string, maxNumber: number, fetchType: $D.Framework.Data.Messaging.MessageFetchType, maxWaitTimeInSeconds: any, messagesAfterDateTime: Date): { GetWaitForMessagesAfterDateTimeWithFetchTypeResult: $D.Framework.Data.Messaging.MessageQueueMessage[] };

	GetWaitForMessagesAfterDateTimeWithFetchTypePromise(messageQueueName: string, handlerId: string, maxNumber: number, fetchType: $D.Framework.Data.Messaging.MessageFetchType, maxWaitTimeInSeconds: any, messagesAfterDateTime: Date): Promise<$D.Framework.Data.Messaging.MessageQueueMessage[]>;

	GetWaitForMessagesInMultipleAfterDateTimeWithFetchType(messageQueueNames: string[], handlerId: string, maxNumber: number, fetchType: $D.Framework.Data.Messaging.MessageFetchType, maxWaitTimeInSeconds: any, messagesAfterDateTime: Date, successCallback: (data: { GetWaitForMessagesInMultipleAfterDateTimeWithFetchTypeResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetWaitForMessagesInMultipleAfterDateTimeWithFetchTypeResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }>;

	GetWaitForMessagesInMultipleAfterDateTimeWithFetchType(messageQueueNames: string[], handlerId: string, maxNumber: number, fetchType: $D.Framework.Data.Messaging.MessageFetchType, maxWaitTimeInSeconds: any, messagesAfterDateTime: Date): { GetWaitForMessagesInMultipleAfterDateTimeWithFetchTypeResult: $D.Framework.Data.Messaging.MessageQueueMessage[] };

	GetWaitForMessagesInMultipleAfterDateTimeWithFetchTypePromise(messageQueueNames: string[], handlerId: string, maxNumber: number, fetchType: $D.Framework.Data.Messaging.MessageFetchType, maxWaitTimeInSeconds: any, messagesAfterDateTime: Date): Promise<$D.Framework.Data.Messaging.MessageQueueMessage[]>;

	GetWaitForMessagesAfterSequenceWithFetchType(messageQueueName: string, handlerId: string, maxNumber: number, fetchType: $D.Framework.Data.Messaging.MessageFetchType, maxWaitTimeInSeconds: any, sequenceNumber: number, successCallback: (data: { GetWaitForMessagesAfterSequenceWithFetchTypeResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetWaitForMessagesAfterSequenceWithFetchTypeResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }>;

	GetWaitForMessagesAfterSequenceWithFetchType(messageQueueName: string, handlerId: string, maxNumber: number, fetchType: $D.Framework.Data.Messaging.MessageFetchType, maxWaitTimeInSeconds: any, sequenceNumber: number): { GetWaitForMessagesAfterSequenceWithFetchTypeResult: $D.Framework.Data.Messaging.MessageQueueMessage[] };

	GetWaitForMessagesAfterSequenceWithFetchTypePromise(messageQueueName: string, handlerId: string, maxNumber: number, fetchType: $D.Framework.Data.Messaging.MessageFetchType, maxWaitTimeInSeconds: any, sequenceNumber: number): Promise<$D.Framework.Data.Messaging.MessageQueueMessage[]>;

	GetWaitForMessagesInMultipleAfterSequenceWithFetchType(messageQueueNames: string[], handlerId: string, maxNumber: number, fetchType: $D.Framework.Data.Messaging.MessageFetchType, maxWaitTimeInSeconds: any, sequenceNumber: number, successCallback: (data: { GetWaitForMessagesInMultipleAfterSequenceWithFetchTypeResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetWaitForMessagesInMultipleAfterSequenceWithFetchTypeResult: $D.Framework.Data.Messaging.MessageQueueMessage[] }>;

	GetWaitForMessagesInMultipleAfterSequenceWithFetchType(messageQueueNames: string[], handlerId: string, maxNumber: number, fetchType: $D.Framework.Data.Messaging.MessageFetchType, maxWaitTimeInSeconds: any, sequenceNumber: number): { GetWaitForMessagesInMultipleAfterSequenceWithFetchTypeResult: $D.Framework.Data.Messaging.MessageQueueMessage[] };

	GetWaitForMessagesInMultipleAfterSequenceWithFetchTypePromise(messageQueueNames: string[], handlerId: string, maxNumber: number, fetchType: $D.Framework.Data.Messaging.MessageFetchType, maxWaitTimeInSeconds: any, sequenceNumber: number): Promise<$D.Framework.Data.Messaging.MessageQueueMessage[]>;
}

interface ServicesStatic {
	MessageServerEndpoint(): MessageServerEndpointStatic;
}
