/// <reference path="./datatypes._base.d.ts" />

interface ClientStatisticServiceStatic {

	GetStatisticsByEntityId(entityId: string, successCallback: (data: { GetStatisticsByEntityIdResult: $D.Framework.ServiceLayer.Services.Statistics.ClientStatistic }) => any, errorCallback?: () => any): JQueryPromise<{ GetStatisticsByEntityIdResult: $D.Framework.ServiceLayer.Services.Statistics.ClientStatistic }>;

	GetStatisticsByEntityId(entityId: string): { GetStatisticsByEntityIdResult: $D.Framework.ServiceLayer.Services.Statistics.ClientStatistic };

	GetStatisticsByEntityIdPromise(entityId: string): Promise<$D.Framework.ServiceLayer.Services.Statistics.ClientStatistic>;

	GetStatisticsBySessionId(sessionId: string, successCallback: (data: { GetStatisticsBySessionIdResult: $D.Framework.ServiceLayer.Services.Statistics.ClientStatistic[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetStatisticsBySessionIdResult: $D.Framework.ServiceLayer.Services.Statistics.ClientStatistic[] }>;

	GetStatisticsBySessionId(sessionId: string): { GetStatisticsBySessionIdResult: $D.Framework.ServiceLayer.Services.Statistics.ClientStatistic[] };

	GetStatisticsBySessionIdPromise(sessionId: string): Promise<$D.Framework.ServiceLayer.Services.Statistics.ClientStatistic[]>;

	SetClientStatistics(clientStatistic: $D.Framework.ServiceLayer.Services.Statistics.ClientStatistic, successCallback: (data: { SetClientStatisticsResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ SetClientStatisticsResult: string }>;

	SetClientStatistics(clientStatistic: $D.Framework.ServiceLayer.Services.Statistics.ClientStatistic): { SetClientStatisticsResult: string };

	SetClientStatisticsPromise(clientStatistic: $D.Framework.ServiceLayer.Services.Statistics.ClientStatistic): Promise<string>;

	QueueClientStatistics(clientStatistic: $D.Framework.ServiceLayer.Services.Statistics.ClientStatistic, successCallback: (data: { QueueClientStatisticsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ QueueClientStatisticsResult: void }>;

	QueueClientStatistics(clientStatistic: $D.Framework.ServiceLayer.Services.Statistics.ClientStatistic): { QueueClientStatisticsResult: void };

	QueueClientStatisticsPromise(clientStatistic: $D.Framework.ServiceLayer.Services.Statistics.ClientStatistic): Promise<void>;

	LoadAllClientStatistics(successCallback: (data: { LoadAllClientStatisticsResult: $D.Framework.ServiceLayer.Services.Statistics.ClientStatistic[] }) => any, errorCallback?: () => any): JQueryPromise<{ LoadAllClientStatisticsResult: $D.Framework.ServiceLayer.Services.Statistics.ClientStatistic[] }>;

	LoadAllClientStatistics(): { LoadAllClientStatisticsResult: $D.Framework.ServiceLayer.Services.Statistics.ClientStatistic[] };

	LoadAllClientStatisticsPromise(): Promise<$D.Framework.ServiceLayer.Services.Statistics.ClientStatistic[]>;

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
	ClientStatisticService(): ClientStatisticServiceStatic;
}
