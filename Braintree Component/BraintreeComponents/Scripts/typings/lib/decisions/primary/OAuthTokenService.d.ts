/// <reference path="./datatypes._base.d.ts" />

interface OAuthTokenServiceStatic {

	StartTokenRequestAndGetAuthLink(providerId: string, tokenName: string, resourceIdentifier: string, scope: string, additionalValues: string, overrideResponseType: string, successCallback: (data: { StartTokenRequestAndGetAuthLinkResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ StartTokenRequestAndGetAuthLinkResult: string }>;

	StartTokenRequestAndGetAuthLink(providerId: string, tokenName: string, resourceIdentifier: string, scope: string, additionalValues: string, overrideResponseType: string): { StartTokenRequestAndGetAuthLinkResult: string };

	StartTokenRequestAndGetAuthLinkPromise(providerId: string, tokenName: string, resourceIdentifier: string, scope: string, additionalValues: string, overrideResponseType: string): Promise<string>;

	CreateClientCredentialsToken(providerId: string, tokenName: string, resourceIdentifier: string, scope: string, clientId: string, clientSecret: string, additionalValues: string, successCallback: (data: { CreateClientCredentialsTokenResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CreateClientCredentialsTokenResult: void }>;

	CreateClientCredentialsToken(providerId: string, tokenName: string, resourceIdentifier: string, scope: string, clientId: string, clientSecret: string, additionalValues: string): { CreateClientCredentialsTokenResult: void };

	CreateClientCredentialsTokenPromise(providerId: string, tokenName: string, resourceIdentifier: string, scope: string, clientId: string, clientSecret: string, additionalValues: string): Promise<void>;

	CreatePasswordGrantToken(providerId: string, tokenName: string, resourceIdentifier: string, scope: string, clientId: string, clientSecret: string, userName: string, password: string, additionalValues: string, successCallback: (data: { CreatePasswordGrantTokenResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CreatePasswordGrantTokenResult: void }>;

	CreatePasswordGrantToken(providerId: string, tokenName: string, resourceIdentifier: string, scope: string, clientId: string, clientSecret: string, userName: string, password: string, additionalValues: string): { CreatePasswordGrantTokenResult: void };

	CreatePasswordGrantTokenPromise(providerId: string, tokenName: string, resourceIdentifier: string, scope: string, clientId: string, clientSecret: string, userName: string, password: string, additionalValues: string): Promise<void>;

	ProcessTokenResponse(tokenResponseData: string, successCallback: (data: { ProcessTokenResponseResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessTokenResponseResult: void }>;

	ProcessTokenResponse(tokenResponseData: string): { ProcessTokenResponseResult: void };

	ProcessTokenResponsePromise(tokenResponseData: string): Promise<void>;

	ProcessManuallyEnteredResponse(providerId: string, tokenName: string, data: string, overrideConsumerKey: string, overrideConsumerSecret: string, successCallback: (data: { ProcessManuallyEnteredResponseResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessManuallyEnteredResponseResult: void }>;

	ProcessManuallyEnteredResponse(providerId: string, tokenName: string, data: string, overrideConsumerKey: string, overrideConsumerSecret: string): { ProcessManuallyEnteredResponseResult: void };

	ProcessManuallyEnteredResponsePromise(providerId: string, tokenName: string, data: string, overrideConsumerKey: string, overrideConsumerSecret: string): Promise<void>;

	GetAllProviders(successCallback: (data: { GetAllProvidersResult: $D.OAuth.OAuthProvider[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllProvidersResult: $D.OAuth.OAuthProvider[] }>;

	GetAllProviders(): { GetAllProvidersResult: $D.OAuth.OAuthProvider[] };

	GetAllProvidersPromise(): Promise<$D.OAuth.OAuthProvider[]>;

	GetAllTokens(successCallback: (data: { GetAllTokensResult: $D.OAuth.OAuthToken[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllTokensResult: $D.OAuth.OAuthToken[] }>;

	GetAllTokens(): { GetAllTokensResult: $D.OAuth.OAuthToken[] };

	GetAllTokensPromise(): Promise<$D.OAuth.OAuthToken[]>;

	RefreshAccessToken(tokenId: string, successCallback: (data: { RefreshAccessTokenResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ RefreshAccessTokenResult: string }>;

	RefreshAccessToken(tokenId: string): { RefreshAccessTokenResult: string };

	RefreshAccessTokenPromise(tokenId: string): Promise<string>;

	ResetClientCredentialsToken(tokenId: string, resourceIdentifier: string, scope: string, clientId: string, clientSecret: string, additionalValues: string, successCallback: (data: { ResetClientCredentialsTokenResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ResetClientCredentialsTokenResult: void }>;

	ResetClientCredentialsToken(tokenId: string, resourceIdentifier: string, scope: string, clientId: string, clientSecret: string, additionalValues: string): { ResetClientCredentialsTokenResult: void };

	ResetClientCredentialsTokenPromise(tokenId: string, resourceIdentifier: string, scope: string, clientId: string, clientSecret: string, additionalValues: string): Promise<void>;

	ResetPasswordGrantToken(tokenId: string, resourceIdentifier: string, scope: string, clientId: string, clientSecret: string, userName: string, password: string, additionalValues: string, successCallback: (data: { ResetPasswordGrantTokenResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ResetPasswordGrantTokenResult: void }>;

	ResetPasswordGrantToken(tokenId: string, resourceIdentifier: string, scope: string, clientId: string, clientSecret: string, userName: string, password: string, additionalValues: string): { ResetPasswordGrantTokenResult: void };

	ResetPasswordGrantTokenPromise(tokenId: string, resourceIdentifier: string, scope: string, clientId: string, clientSecret: string, userName: string, password: string, additionalValues: string): Promise<void>;
}

interface ServicesStatic {
	OAuthTokenService(): OAuthTokenServiceStatic;
}
