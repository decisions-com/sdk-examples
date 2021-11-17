/// <reference path="./datatypes._base.d.ts" />

interface SSOServiceStatic {

	GetSSOHandlerTypeName(successCallback: (data: { GetSSOHandlerTypeNameResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetSSOHandlerTypeNameResult: string }>;

	GetSSOHandlerTypeName(): { GetSSOHandlerTypeNameResult: string };

	GetSSOHandlerTypeNamePromise(): Promise<string>;

	IsSSOEnabled(successCallback: (data: { IsSSOEnabledResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ IsSSOEnabledResult: boolean }>;

	IsSSOEnabled(): { IsSSOEnabledResult: boolean };

	IsSSOEnabledPromise(): Promise<boolean>;
}

interface ServicesStatic {
	SSOService(): SSOServiceStatic;
}
