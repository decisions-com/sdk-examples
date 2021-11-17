/// <reference path="./datatypes._base.d.ts" />

interface TruthTableEditServiceStatic {

	AddActionWithEvents(ruleSessionId: string, parentGroupId: string, successCallback: (data: { AddActionWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ AddActionWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	AddActionWithEvents(ruleSessionId: string, parentGroupId: string): { AddActionWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	AddActionWithEventsPromise(ruleSessionId: string, parentGroupId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	RemoveStepWithEvents(ruleSessionId: string, ruleStepId: string, successCallback: (data: { RemoveStepWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveStepWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	RemoveStepWithEvents(ruleSessionId: string, ruleStepId: string): { RemoveStepWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	RemoveStepWithEventsPromise(ruleSessionId: string, ruleStepId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	RemoveColumnWithEvents(ruleSessionId: string, ruleStepIds: string[], successCallback: (data: { RemoveColumnWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveColumnWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	RemoveColumnWithEvents(ruleSessionId: string, ruleStepIds: string[]): { RemoveColumnWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	RemoveColumnWithEventsPromise(ruleSessionId: string, ruleStepIds: string[]): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	DeleteOutputDataItemWithEvents(ruleSessionId: string, itemName: string, successCallback: (data: { DeleteOutputDataItemWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteOutputDataItemWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	DeleteOutputDataItemWithEvents(ruleSessionId: string, itemName: string): { DeleteOutputDataItemWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	DeleteOutputDataItemWithEventsPromise(ruleSessionId: string, itemName: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	LoadMore(ruleSessionId: string, ruleId: string, successCallback: (data: { LoadMoreResult: $D.Framework.Design.Flow.ExternalDataRuleExecutionData[] }) => any, errorCallback?: () => any): JQueryPromise<{ LoadMoreResult: $D.Framework.Design.Flow.ExternalDataRuleExecutionData[] }>;

	LoadMore(ruleSessionId: string, ruleId: string): { LoadMoreResult: $D.Framework.Design.Flow.ExternalDataRuleExecutionData[] };

	LoadMorePromise(ruleSessionId: string, ruleId: string): Promise<$D.Framework.Design.Flow.ExternalDataRuleExecutionData[]>;

	StartSamplingSet(sessionId: string, sampleSetId: string, successCallback: (data: { StartSamplingSetResult: $D.Framework.Design.Flow.Service.Debugging.Samples.SampleSetDataCoverage }) => any, errorCallback?: () => any): JQueryPromise<{ StartSamplingSetResult: $D.Framework.Design.Flow.Service.Debugging.Samples.SampleSetDataCoverage }>;

	StartSamplingSet(sessionId: string, sampleSetId: string): { StartSamplingSetResult: $D.Framework.Design.Flow.Service.Debugging.Samples.SampleSetDataCoverage };

	StartSamplingSetPromise(sessionId: string, sampleSetId: string): Promise<$D.Framework.Design.Flow.Service.Debugging.Samples.SampleSetDataCoverage>;

	GetAnchorConverterFlowContextForStep(ruleSessionId: string, ruleStepId: string, successCallback: (data: { GetAnchorConverterFlowContextForStepResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetAnchorConverterFlowContextForStepResult: string }>;

	GetAnchorConverterFlowContextForStep(ruleSessionId: string, ruleStepId: string): { GetAnchorConverterFlowContextForStepResult: string };

	GetAnchorConverterFlowContextForStepPromise(ruleSessionId: string, ruleStepId: string): Promise<string>;

	StartSequenceEditingSession(truthTableSessionId: string, stepId: string, successCallback: (data: { StartSequenceEditingSessionResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession }) => any, errorCallback?: () => any): JQueryPromise<{ StartSequenceEditingSessionResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession }>;

	StartSequenceEditingSession(truthTableSessionId: string, stepId: string): { StartSequenceEditingSessionResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession };

	StartSequenceEditingSessionPromise(truthTableSessionId: string, stepId: string): Promise<$D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession>;

	CompleteSequenceEditingSession(sequenceSessionId: string, stepIds: string[], successCallback: (data: { CompleteSequenceEditingSessionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CompleteSequenceEditingSessionResult: void }>;

	CompleteSequenceEditingSession(sequenceSessionId: string, stepIds: string[]): { CompleteSequenceEditingSessionResult: void };

	CompleteSequenceEditingSessionPromise(sequenceSessionId: string, stepIds: string[]): Promise<void>;

	StartEditingForTruthTableSpecificResult(truthTableSessionId: string, stepId: string, resultName: string, successCallback: (data: { StartEditingForTruthTableSpecificResultResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession }) => any, errorCallback?: () => any): JQueryPromise<{ StartEditingForTruthTableSpecificResultResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession }>;

	StartEditingForTruthTableSpecificResult(truthTableSessionId: string, stepId: string, resultName: string): { StartEditingForTruthTableSpecificResultResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession };

	StartEditingForTruthTableSpecificResultPromise(truthTableSessionId: string, stepId: string, resultName: string): Promise<$D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession>;

	StartEditingContextForTruthTableRowResult(truthTableSessionId: string, stepId: string, successCallback: (data: { StartEditingContextForTruthTableRowResultResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession }) => any, errorCallback?: () => any): JQueryPromise<{ StartEditingContextForTruthTableRowResultResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession }>;

	StartEditingContextForTruthTableRowResult(truthTableSessionId: string, stepId: string): { StartEditingContextForTruthTableRowResultResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession };

	StartEditingContextForTruthTableRowResultPromise(truthTableSessionId: string, stepId: string): Promise<$D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession>;

	StartEditingDefaultValueItem(truthTableSessionId: string, index: number, successCallback: (data: { StartEditingDefaultValueItemResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession }) => any, errorCallback?: () => any): JQueryPromise<{ StartEditingDefaultValueItemResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession }>;

	StartEditingDefaultValueItem(truthTableSessionId: string, index: number): { StartEditingDefaultValueItemResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession };

	StartEditingDefaultValueItemPromise(truthTableSessionId: string, index: number): Promise<$D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession>;

	StartEditingStepValue(truthTableSessionId: string, stepId: string, successCallback: (data: { StartEditingStepValueResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession }) => any, errorCallback?: () => any): JQueryPromise<{ StartEditingStepValueResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession }>;

	StartEditingStepValue(truthTableSessionId: string, stepId: string): { StartEditingStepValueResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession };

	StartEditingStepValuePromise(truthTableSessionId: string, stepId: string): Promise<$D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession>;

	AddRowBeforeWithEvents(ruleSessionId: string, beforeRowId: string, successCallback: (data: { AddRowBeforeWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ AddRowBeforeWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	AddRowBeforeWithEvents(ruleSessionId: string, beforeRowId: string): { AddRowBeforeWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	AddRowBeforeWithEventsPromise(ruleSessionId: string, beforeRowId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	AddRowAfterWithEvents(ruleSessionId: string, afterRowId: string, successCallback: (data: { AddRowAfterWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ AddRowAfterWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	AddRowAfterWithEvents(ruleSessionId: string, afterRowId: string): { AddRowAfterWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	AddRowAfterWithEventsPromise(ruleSessionId: string, afterRowId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	AddColumnBeforeWithEvents(ruleSessionId: string, beforeHeaderStepId: string, successCallback: (data: { AddColumnBeforeWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ AddColumnBeforeWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	AddColumnBeforeWithEvents(ruleSessionId: string, beforeHeaderStepId: string): { AddColumnBeforeWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	AddColumnBeforeWithEventsPromise(ruleSessionId: string, beforeHeaderStepId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	AddColumnAfterWithEvents(ruleSessionId: string, afterHeaderStepId: string, successCallback: (data: { AddColumnAfterWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ AddColumnAfterWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	AddColumnAfterWithEvents(ruleSessionId: string, afterHeaderStepId: string): { AddColumnAfterWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	AddColumnAfterWithEventsPromise(ruleSessionId: string, afterHeaderStepId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	MoveColumnToRightWithEvents(ruleSessionId: string, headerStepId: string, successCallback: (data: { MoveColumnToRightWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ MoveColumnToRightWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	MoveColumnToRightWithEvents(ruleSessionId: string, headerStepId: string): { MoveColumnToRightWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	MoveColumnToRightWithEventsPromise(ruleSessionId: string, headerStepId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	MoveColumnToLeftWithEvents(ruleSessionId: string, headerStepId: string, successCallback: (data: { MoveColumnToLeftWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ MoveColumnToLeftWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	MoveColumnToLeftWithEvents(ruleSessionId: string, headerStepId: string): { MoveColumnToLeftWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	MoveColumnToLeftWithEventsPromise(ruleSessionId: string, headerStepId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

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
	TruthTableEditService(): TruthTableEditServiceStatic;
}
