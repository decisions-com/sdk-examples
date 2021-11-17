/// <reference path="./datatypes._base.d.ts" />

interface NamedSessionServiceStatic {

	GetById(namedSessionId: string, successCallback: (data: { GetByIdResult: $D.Framework.ServiceLayer.Utilities.NamedSession }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIdResult: $D.Framework.ServiceLayer.Utilities.NamedSession }>;

	GetById(namedSessionId: string): { GetByIdResult: $D.Framework.ServiceLayer.Utilities.NamedSession };

	GetByIdPromise(namedSessionId: string): Promise<$D.Framework.ServiceLayer.Utilities.NamedSession>;

	GetAllNamedSession(successCallback: (data: { GetAllNamedSessionResult: $D.Framework.ServiceLayer.Utilities.NamedSession[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllNamedSessionResult: $D.Framework.ServiceLayer.Utilities.NamedSession[] }>;

	GetAllNamedSession(): { GetAllNamedSessionResult: $D.Framework.ServiceLayer.Utilities.NamedSession[] };

	GetAllNamedSessionPromise(): Promise<$D.Framework.ServiceLayer.Utilities.NamedSession[]>;

	GetSessionIdByValue(value: string, successCallback: (data: { GetSessionIdByValueResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetSessionIdByValueResult: string }>;

	GetSessionIdByValue(value: string): { GetSessionIdByValueResult: string };

	GetSessionIdByValuePromise(value: string): Promise<string>;

	GetSessionIdByNamedSessionId(namedSessionId: string, successCallback: (data: { GetSessionIdByNamedSessionIdResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetSessionIdByNamedSessionIdResult: string }>;

	GetSessionIdByNamedSessionId(namedSessionId: string): { GetSessionIdByNamedSessionIdResult: string };

	GetSessionIdByNamedSessionIdPromise(namedSessionId: string): Promise<string>;

	DeleteNamedSession(namedSessionId: string, successCallback: (data: { DeleteNamedSessionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteNamedSessionResult: void }>;

	DeleteNamedSession(namedSessionId: string): { DeleteNamedSessionResult: void };

	DeleteNamedSessionPromise(namedSessionId: string): Promise<void>;
}

interface ServicesStatic {
	NamedSessionService(): NamedSessionServiceStatic;
}
