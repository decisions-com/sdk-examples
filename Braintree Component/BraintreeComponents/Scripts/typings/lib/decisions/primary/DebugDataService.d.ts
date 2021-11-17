/// <reference path="./datatypes._base.d.ts" />

interface DebugDataServiceStatic {

	GetFlowProgress(debuggingId: string, resetDirtyFlag: boolean, successCallback: (data: { GetFlowProgressResult: $D.Framework.Design.Flow.Service.Debugging.DebugData.FlowProgressData }) => any, errorCallback?: () => any): JQueryPromise<{ GetFlowProgressResult: $D.Framework.Design.Flow.Service.Debugging.DebugData.FlowProgressData }>;

	GetFlowProgress(debuggingId: string, resetDirtyFlag: boolean): { GetFlowProgressResult: $D.Framework.Design.Flow.Service.Debugging.DebugData.FlowProgressData };

	GetFlowProgressPromise(debuggingId: string, resetDirtyFlag: boolean): Promise<$D.Framework.Design.Flow.Service.Debugging.DebugData.FlowProgressData>;

	GetRuleProgress(debuggingId: string, resetDirtyFlag: boolean, successCallback: (data: { GetRuleProgressResult: $D.Framework.Design.Flow.Service.Debugging.DebugData.RuleProgressDataHolder }) => any, errorCallback?: () => any): JQueryPromise<{ GetRuleProgressResult: $D.Framework.Design.Flow.Service.Debugging.DebugData.RuleProgressDataHolder }>;

	GetRuleProgress(debuggingId: string, resetDirtyFlag: boolean): { GetRuleProgressResult: $D.Framework.Design.Flow.Service.Debugging.DebugData.RuleProgressDataHolder };

	GetRuleProgressPromise(debuggingId: string, resetDirtyFlag: boolean): Promise<$D.Framework.Design.Flow.Service.Debugging.DebugData.RuleProgressDataHolder>;

	GetMatrixRuleProgress(debuggingId: string, resetDirtyFlag: boolean, successCallback: (data: { GetMatrixRuleProgressResult: $D.Framework.Design.Flow.Service.Debugging.DebugData.FlowProgressData[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMatrixRuleProgressResult: $D.Framework.Design.Flow.Service.Debugging.DebugData.FlowProgressData[] }>;

	GetMatrixRuleProgress(debuggingId: string, resetDirtyFlag: boolean): { GetMatrixRuleProgressResult: $D.Framework.Design.Flow.Service.Debugging.DebugData.FlowProgressData[] };

	GetMatrixRuleProgressPromise(debuggingId: string, resetDirtyFlag: boolean): Promise<$D.Framework.Design.Flow.Service.Debugging.DebugData.FlowProgressData[]>;

	GetPages(debuggingId: string, successCallback: (data: { GetPagesResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetPagesResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	GetPages(debuggingId: string): { GetPagesResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	GetPagesPromise(debuggingId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	GetSessionDebugPages(debuggingId: string, successCallback: (data: { GetSessionDebugPagesResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetSessionDebugPagesResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	GetSessionDebugPages(debuggingId: string): { GetSessionDebugPagesResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	GetSessionDebugPagesPromise(debuggingId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	GetInputDataForNode(debuggingId: string, successCallback: (data: { GetInputDataForNodeResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetInputDataForNodeResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	GetInputDataForNode(debuggingId: string): { GetInputDataForNodeResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	GetInputDataForNodePromise(debuggingId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	LoadNodes(debuggingId: string, startIndex: number, count: number, successCallback: (data: { LoadNodesResult: $D.Framework.Design.Flow.Service.Debugging.DebugData.DebugTreeEvent[] }) => any, errorCallback?: () => any): JQueryPromise<{ LoadNodesResult: $D.Framework.Design.Flow.Service.Debugging.DebugData.DebugTreeEvent[] }>;

	LoadNodes(debuggingId: string, startIndex: number, count: number): { LoadNodesResult: $D.Framework.Design.Flow.Service.Debugging.DebugData.DebugTreeEvent[] };

	LoadNodesPromise(debuggingId: string, startIndex: number, count: number): Promise<$D.Framework.Design.Flow.Service.Debugging.DebugData.DebugTreeEvent[]>;

	LoadAllNodes(debuggingId: string, successCallback: (data: { LoadAllNodesResult: $D.Framework.Design.Flow.Service.Debugging.DebugData.DebugTreeEvent[] }) => any, errorCallback?: () => any): JQueryPromise<{ LoadAllNodesResult: $D.Framework.Design.Flow.Service.Debugging.DebugData.DebugTreeEvent[] }>;

	LoadAllNodes(debuggingId: string): { LoadAllNodesResult: $D.Framework.Design.Flow.Service.Debugging.DebugData.DebugTreeEvent[] };

	LoadAllNodesPromise(debuggingId: string): Promise<$D.Framework.Design.Flow.Service.Debugging.DebugData.DebugTreeEvent[]>;

	KeepSessionsAlive(debuggingSessionIds: string[], successCallback: (data: { KeepSessionsAliveResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ KeepSessionsAliveResult: string[] }>;

	KeepSessionsAlive(debuggingSessionIds: string[]): { KeepSessionsAliveResult: string[] };

	KeepSessionsAlivePromise(debuggingSessionIds: string[]): Promise<string[]>;

	DisposeSessions(debuggingSessionIds: string[], successCallback: (data: { DisposeSessionsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DisposeSessionsResult: void }>;

	DisposeSessions(debuggingSessionIds: string[]): { DisposeSessionsResult: void };

	DisposeSessionsPromise(debuggingSessionIds: string[]): Promise<void>;

	GetViewFormInstruction(debuggingId: string, successCallback: (data: { GetViewFormInstructionResult: $D.Framework.Design.Flow.Service.Execution.ViewOnlyFormInstruction }) => any, errorCallback?: () => any): JQueryPromise<{ GetViewFormInstructionResult: $D.Framework.Design.Flow.Service.Execution.ViewOnlyFormInstruction }>;

	GetViewFormInstruction(debuggingId: string): { GetViewFormInstructionResult: $D.Framework.Design.Flow.Service.Execution.ViewOnlyFormInstruction };

	GetViewFormInstructionPromise(debuggingId: string): Promise<$D.Framework.Design.Flow.Service.Execution.ViewOnlyFormInstruction>;

	ProcessAssignedForm(assignmentId: string, flowTrackingId: string, stepTrackingId: string, successCallback: (data: { ProcessAssignedFormResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessAssignedFormResult: boolean }>;

	ProcessAssignedForm(assignmentId: string, flowTrackingId: string, stepTrackingId: string): { ProcessAssignedFormResult: boolean };

	ProcessAssignedFormPromise(assignmentId: string, flowTrackingId: string, stepTrackingId: string): Promise<boolean>;

	GetFlowProfilePages(debuggingId: string, successCallback: (data: { GetFlowProfilePagesResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetFlowProfilePagesResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	GetFlowProfilePages(debuggingId: string): { GetFlowProfilePagesResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	GetFlowProfilePagesPromise(debuggingId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	TurnOnGlobalDebugging(successCallback: (data: { TurnOnGlobalDebuggingResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ TurnOnGlobalDebuggingResult: boolean }>;

	TurnOnGlobalDebugging(): { TurnOnGlobalDebuggingResult: boolean };

	TurnOnGlobalDebuggingPromise(): Promise<boolean>;

	TurnOffGlobalDebugging(successCallback: (data: { TurnOffGlobalDebuggingResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ TurnOffGlobalDebuggingResult: boolean }>;

	TurnOffGlobalDebugging(): { TurnOffGlobalDebuggingResult: boolean };

	TurnOffGlobalDebuggingPromise(): Promise<boolean>;

	GetGlobalDebuggingState(successCallback: (data: { GetGlobalDebuggingStateResult: $D.Framework.Design.Flow.Service.Debugging.DebugData.GlobalDebuggerStateEvent }) => any, errorCallback?: () => any): JQueryPromise<{ GetGlobalDebuggingStateResult: $D.Framework.Design.Flow.Service.Debugging.DebugData.GlobalDebuggerStateEvent }>;

	GetGlobalDebuggingState(): { GetGlobalDebuggingStateResult: $D.Framework.Design.Flow.Service.Debugging.DebugData.GlobalDebuggerStateEvent };

	GetGlobalDebuggingStatePromise(): Promise<$D.Framework.Design.Flow.Service.Debugging.DebugData.GlobalDebuggerStateEvent>;

	IgnoreEntityInGlobalDebugger(entityId: string, successCallback: (data: { IgnoreEntityInGlobalDebuggerResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ IgnoreEntityInGlobalDebuggerResult: void }>;

	IgnoreEntityInGlobalDebugger(entityId: string): { IgnoreEntityInGlobalDebuggerResult: void };

	IgnoreEntityInGlobalDebuggerPromise(entityId: string): Promise<void>;

	UnIgnoreEntityInGlobalDebugger(entityId: string, successCallback: (data: { UnIgnoreEntityInGlobalDebuggerResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UnIgnoreEntityInGlobalDebuggerResult: void }>;

	UnIgnoreEntityInGlobalDebugger(entityId: string): { UnIgnoreEntityInGlobalDebuggerResult: void };

	UnIgnoreEntityInGlobalDebuggerPromise(entityId: string): Promise<void>;

	ClearGlobalDebugging(successCallback: (data: { ClearGlobalDebuggingResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ClearGlobalDebuggingResult: void }>;

	ClearGlobalDebugging(): { ClearGlobalDebuggingResult: void };

	ClearGlobalDebuggingPromise(): Promise<void>;

	SetGlobalGroupingStyle(groupingStyle: $D.Framework.Design.Flow.Service.Debugging.DebugData.GlobalDebugGroupingStyle, successCallback: (data: { SetGlobalGroupingStyleResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetGlobalGroupingStyleResult: void }>;

	SetGlobalGroupingStyle(groupingStyle: $D.Framework.Design.Flow.Service.Debugging.DebugData.GlobalDebugGroupingStyle): { SetGlobalGroupingStyleResult: void };

	SetGlobalGroupingStylePromise(groupingStyle: $D.Framework.Design.Flow.Service.Debugging.DebugData.GlobalDebugGroupingStyle): Promise<void>;

	SetGlobalCacheTimeout(totalSeconds: number, successCallback: (data: { SetGlobalCacheTimeoutResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetGlobalCacheTimeoutResult: void }>;

	SetGlobalCacheTimeout(totalSeconds: number): { SetGlobalCacheTimeoutResult: void };

	SetGlobalCacheTimeoutPromise(totalSeconds: number): Promise<void>;
}

interface ServicesStatic {
	DebugDataService(): DebugDataServiceStatic;
}
