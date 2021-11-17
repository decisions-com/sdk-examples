/// <reference path="./datatypes._base.d.ts" />

interface ProfileSessionServiceStatic {

	GetProfileSessionData(profileSessionDataId: string, successCallback: (data: { GetProfileSessionDataResult: $D.Framework.Utilities.Profiler.ProfileSession }) => any, errorCallback?: () => any): JQueryPromise<{ GetProfileSessionDataResult: $D.Framework.Utilities.Profiler.ProfileSession }>;

	GetProfileSessionData(profileSessionDataId: string): { GetProfileSessionDataResult: $D.Framework.Utilities.Profiler.ProfileSession };

	GetProfileSessionDataPromise(profileSessionDataId: string): Promise<$D.Framework.Utilities.Profiler.ProfileSession>;

	GetLoadedSession(successCallback: (data: { GetLoadedSessionResult: $D.Framework.Utilities.Profiler.ProfileSession }) => any, errorCallback?: () => any): JQueryPromise<{ GetLoadedSessionResult: $D.Framework.Utilities.Profiler.ProfileSession }>;

	GetLoadedSession(): { GetLoadedSessionResult: $D.Framework.Utilities.Profiler.ProfileSession };

	GetLoadedSessionPromise(): Promise<$D.Framework.Utilities.Profiler.ProfileSession>;

	LoadProfileSession(sessionId: string, successCallback: (data: { LoadProfileSessionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ LoadProfileSessionResult: void }>;

	LoadProfileSession(sessionId: string): { LoadProfileSessionResult: void };

	LoadProfileSessionPromise(sessionId: string): Promise<void>;

	GetProfileResults(successCallback: (data: { GetProfileResultsResult: $D.Framework.Utilities.Profiler.Control.ProfileResultsWrapper[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetProfileResultsResult: $D.Framework.Utilities.Profiler.Control.ProfileResultsWrapper[] }>;

	GetProfileResults(): { GetProfileResultsResult: $D.Framework.Utilities.Profiler.Control.ProfileResultsWrapper[] };

	GetProfileResultsPromise(): Promise<$D.Framework.Utilities.Profiler.Control.ProfileResultsWrapper[]>;

	GetLoadedSessionId(successCallback: (data: { GetLoadedSessionIdResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetLoadedSessionIdResult: string }>;

	GetLoadedSessionId(): { GetLoadedSessionIdResult: string };

	GetLoadedSessionIdPromise(): Promise<string>;

	EndProfilingSession(successCallback: (data: { EndProfilingSessionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ EndProfilingSessionResult: void }>;

	EndProfilingSession(): { EndProfilingSessionResult: void };

	EndProfilingSessionPromise(): Promise<void>;
}

interface ServicesStatic {
	ProfileSessionService(): ProfileSessionServiceStatic;
}
