/// <reference path="./datatypes._base.d.ts" />

interface ReplayServiceStatic {

	StartRecord(replayId: string, successCallback: (data: { StartRecordResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ StartRecordResult: void }>;

	StartRecord(replayId: string): { StartRecordResult: void };

	StartRecordPromise(replayId: string): Promise<void>;

	CompleteRecord(successCallback: (data: { CompleteRecordResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CompleteRecordResult: void }>;

	CompleteRecord(): { CompleteRecordResult: void };

	CompleteRecordPromise(): Promise<void>;

	PlayBackStep(stepInfo: $D.Framework.ServiceLayer.Services.Replay.PlayBackStepInfo, successCallback: (data: { PlayBackStepResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ PlayBackStepResult: void }>;

	PlayBackStep(stepInfo: $D.Framework.ServiceLayer.Services.Replay.PlayBackStepInfo): { PlayBackStepResult: void };

	PlayBackStepPromise(stepInfo: $D.Framework.ServiceLayer.Services.Replay.PlayBackStepInfo): Promise<void>;

	GetStepsInReplay(replayId: string, successCallback: (data: { GetStepsInReplayResult: number }) => any, errorCallback?: () => any): JQueryPromise<{ GetStepsInReplayResult: number }>;

	GetStepsInReplay(replayId: string): { GetStepsInReplayResult: number };

	GetStepsInReplayPromise(replayId: string): Promise<number>;

	DeleteReplay(replayId: string, successCallback: (data: { DeleteReplayResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteReplayResult: void }>;

	DeleteReplay(replayId: string): { DeleteReplayResult: void };

	DeleteReplayPromise(replayId: string): Promise<void>;

	GetReplayNames(successCallback: (data: { GetReplayNamesResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetReplayNamesResult: string[] }>;

	GetReplayNames(): { GetReplayNamesResult: string[] };

	GetReplayNamesPromise(): Promise<string[]>;

	GetPlayBackStepInfo(replayId: string, successCallback: (data: { GetPlayBackStepInfoResult: $D.Framework.ServiceLayer.Services.Replay.PlayBackStepInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetPlayBackStepInfoResult: $D.Framework.ServiceLayer.Services.Replay.PlayBackStepInfo[] }>;

	GetPlayBackStepInfo(replayId: string): { GetPlayBackStepInfoResult: $D.Framework.ServiceLayer.Services.Replay.PlayBackStepInfo[] };

	GetPlayBackStepInfoPromise(replayId: string): Promise<$D.Framework.ServiceLayer.Services.Replay.PlayBackStepInfo[]>;

	PlaybackRecordingWithRecordedWaitTimes(sessionName: string, replayId: string, successCallback: (data: { PlaybackRecordingWithRecordedWaitTimesResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ PlaybackRecordingWithRecordedWaitTimesResult: string }>;

	PlaybackRecordingWithRecordedWaitTimes(sessionName: string, replayId: string): { PlaybackRecordingWithRecordedWaitTimesResult: string };

	PlaybackRecordingWithRecordedWaitTimesPromise(sessionName: string, replayId: string): Promise<string>;

	PlaybackRecordingWithArtificalWaitTimes(sessionName: string, replayId: string, minTimeInSeconds: number, maxTimeInSeconds: number, successCallback: (data: { PlaybackRecordingWithArtificalWaitTimesResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ PlaybackRecordingWithArtificalWaitTimesResult: string }>;

	PlaybackRecordingWithArtificalWaitTimes(sessionName: string, replayId: string, minTimeInSeconds: number, maxTimeInSeconds: number): { PlaybackRecordingWithArtificalWaitTimesResult: string };

	PlaybackRecordingWithArtificalWaitTimesPromise(sessionName: string, replayId: string, minTimeInSeconds: number, maxTimeInSeconds: number): Promise<string>;

	PlaybackRecordingWithNoWaitTimes(sessionName: string, replayId: string, successCallback: (data: { PlaybackRecordingWithNoWaitTimesResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ PlaybackRecordingWithNoWaitTimesResult: string }>;

	PlaybackRecordingWithNoWaitTimes(sessionName: string, replayId: string): { PlaybackRecordingWithNoWaitTimesResult: string };

	PlaybackRecordingWithNoWaitTimesPromise(sessionName: string, replayId: string): Promise<string>;

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
	ReplayService(): ReplayServiceStatic;
}
