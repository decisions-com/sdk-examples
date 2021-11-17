/// <reference path="./datatypes._base.d.ts" />

interface MatrixRuleEditServiceStatic {

	StartEditSession(matrixRuleId: string, successCallback: (data: { StartEditSessionResult: $D.Framework.Design.Flow.Service.Edit.MatrixRuleEditSessionCreated }) => any, errorCallback?: () => any): JQueryPromise<{ StartEditSessionResult: $D.Framework.Design.Flow.Service.Edit.MatrixRuleEditSessionCreated }>;

	StartEditSession(matrixRuleId: string): { StartEditSessionResult: $D.Framework.Design.Flow.Service.Edit.MatrixRuleEditSessionCreated };

	StartEditSessionPromise(matrixRuleId: string): Promise<$D.Framework.Design.Flow.Service.Edit.MatrixRuleEditSessionCreated>;

	MatrixRuleHasChanges(matrixSessionId: string, successCallback: (data: { MatrixRuleHasChangesResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ MatrixRuleHasChangesResult: boolean }>;

	MatrixRuleHasChanges(matrixSessionId: string): { MatrixRuleHasChangesResult: boolean };

	MatrixRuleHasChangesPromise(matrixSessionId: string): Promise<boolean>;

	SaveMatrixRule(matrixSessionId: string, successCallback: (data: { SaveMatrixRuleResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveMatrixRuleResult: void }>;

	SaveMatrixRule(matrixSessionId: string): { SaveMatrixRuleResult: void };

	SaveMatrixRulePromise(matrixSessionId: string): Promise<void>;

	SaveEditSession(sessionId: string, comment: string, dispose: boolean, preview: number[], successCallback: (data: { SaveEditSessionResult: $D.Framework.Design.Form.EventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ SaveEditSessionResult: $D.Framework.Design.Form.EventsReturn }>;

	SaveEditSession(sessionId: string, comment: string, dispose: boolean, preview: number[]): { SaveEditSessionResult: $D.Framework.Design.Form.EventsReturn };

	SaveEditSessionPromise(sessionId: string, comment: string, dispose: boolean, preview: number[]): Promise<$D.Framework.Design.Form.EventsReturn>;

	DisposeEditSession(sessionId: string, successCallback: (data: { DisposeEditSessionResult: $D.Framework.Design.Form.EventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ DisposeEditSessionResult: $D.Framework.Design.Form.EventsReturn }>;

	DisposeEditSession(sessionId: string): { DisposeEditSessionResult: $D.Framework.Design.Form.EventsReturn };

	DisposeEditSessionPromise(sessionId: string): Promise<$D.Framework.Design.Form.EventsReturn>;

	GetRootEditContext(sessionId: string, successCallback: (data: { GetRootEditContextResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetRootEditContextResult: string }>;

	GetRootEditContext(sessionId: string): { GetRootEditContextResult: string };

	GetRootEditContextPromise(sessionId: string): Promise<string>;

	EnsureLeftFlowEditingSession(sessionId: string, successCallback: (data: { EnsureLeftFlowEditingSessionResult: $D.Framework.Design.Form.EventsAndDataReturn }) => any, errorCallback?: () => any): JQueryPromise<{ EnsureLeftFlowEditingSessionResult: $D.Framework.Design.Form.EventsAndDataReturn }>;

	EnsureLeftFlowEditingSession(sessionId: string): { EnsureLeftFlowEditingSessionResult: $D.Framework.Design.Form.EventsAndDataReturn };

	EnsureLeftFlowEditingSessionPromise(sessionId: string): Promise<$D.Framework.Design.Form.EventsAndDataReturn>;

	EnsureTopFlowEditingSession(sessionId: string, successCallback: (data: { EnsureTopFlowEditingSessionResult: $D.Framework.Design.Form.EventsAndDataReturn }) => any, errorCallback?: () => any): JQueryPromise<{ EnsureTopFlowEditingSessionResult: $D.Framework.Design.Form.EventsAndDataReturn }>;

	EnsureTopFlowEditingSession(sessionId: string): { EnsureTopFlowEditingSessionResult: $D.Framework.Design.Form.EventsAndDataReturn };

	EnsureTopFlowEditingSessionPromise(sessionId: string): Promise<$D.Framework.Design.Form.EventsAndDataReturn>;

	GetEditContextForIntersection(sessionId: string, rowId: string, columnId: string, successCallback: (data: { GetEditContextForIntersectionResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetEditContextForIntersectionResult: string }>;

	GetEditContextForIntersection(sessionId: string, rowId: string, columnId: string): { GetEditContextForIntersectionResult: string };

	GetEditContextForIntersectionPromise(sessionId: string, rowId: string, columnId: string): Promise<string>;

	GetEditContextForRuleInputData(ruleSessionId: string, successCallback: (data: { GetEditContextForRuleInputDataResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetEditContextForRuleInputDataResult: string }>;

	GetEditContextForRuleInputData(ruleSessionId: string): { GetEditContextForRuleInputDataResult: string };

	GetEditContextForRuleInputDataPromise(ruleSessionId: string): Promise<string>;

	GetDataForIntersection(sessionId: string, path: string, successCallback: (data: { GetDataForIntersectionResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetDataForIntersectionResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }>;

	GetDataForIntersection(sessionId: string, path: string): { GetDataForIntersectionResult: $D.Framework.Design.Flow.Mapping.DataDescription[] };

	GetDataForIntersectionPromise(sessionId: string, path: string): Promise<$D.Framework.Design.Flow.Mapping.DataDescription[]>;

	GetContextToCreateLinkedActionFlow(ruleSessionId: string, rowId: string, columnId: string, successCallback: (data: { GetContextToCreateLinkedActionFlowResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetContextToCreateLinkedActionFlowResult: string }>;

	GetContextToCreateLinkedActionFlow(ruleSessionId: string, rowId: string, columnId: string): { GetContextToCreateLinkedActionFlowResult: string };

	GetContextToCreateLinkedActionFlowPromise(ruleSessionId: string, rowId: string, columnId: string): Promise<string>;

	AddActionOfType(ruleSessionId: string, rowId: string, columnId: string, actionType: string, successCallback: (data: { AddActionOfTypeResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddActionOfTypeResult: void }>;

	AddActionOfType(ruleSessionId: string, rowId: string, columnId: string, actionType: string): { AddActionOfTypeResult: void };

	AddActionOfTypePromise(ruleSessionId: string, rowId: string, columnId: string, actionType: string): Promise<void>;

	RemoveAction(ruleSessionId: string, actionId: string, successCallback: (data: { RemoveActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveActionResult: void }>;

	RemoveAction(ruleSessionId: string, actionId: string): { RemoveActionResult: void };

	RemoveActionPromise(ruleSessionId: string, actionId: string): Promise<void>;

	GetEditContextForAction(ruleSessionId: string, actionId: string, successCallback: (data: { GetEditContextForActionResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetEditContextForActionResult: string }>;

	GetEditContextForAction(ruleSessionId: string, actionId: string): { GetEditContextForActionResult: string };

	GetEditContextForActionPromise(ruleSessionId: string, actionId: string): Promise<string>;

	RunFlowEditorForAction(ruleSessionId: string, actionId: string, successCallback: (data: { RunFlowEditorForActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RunFlowEditorForActionResult: void }>;

	RunFlowEditorForAction(ruleSessionId: string, actionId: string): { RunFlowEditorForActionResult: void };

	RunFlowEditorForActionPromise(ruleSessionId: string, actionId: string): Promise<void>;

	GetActionDataDescriptions(ruleSessionId: string, actionId: string, path: string, successCallback: (data: { GetActionDataDescriptionsResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetActionDataDescriptionsResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }>;

	GetActionDataDescriptions(ruleSessionId: string, actionId: string, path: string): { GetActionDataDescriptionsResult: $D.Framework.Design.Flow.Mapping.DataDescription[] };

	GetActionDataDescriptionsPromise(ruleSessionId: string, actionId: string, path: string): Promise<$D.Framework.Design.Flow.Mapping.DataDescription[]>;

	ChangeActionValue(ruleSessionId: string, actionId: string, value: string, successCallback: (data: { ChangeActionValueResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ChangeActionValueResult: void }>;

	ChangeActionValue(ruleSessionId: string, actionId: string, value: string): { ChangeActionValueResult: void };

	ChangeActionValuePromise(ruleSessionId: string, actionId: string, value: string): Promise<void>;

	SetActionConstantValue(ruleSessionId: string, actionId: string, value: string, successCallback: (data: { SetActionConstantValueResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetActionConstantValueResult: void }>;

	SetActionConstantValue(ruleSessionId: string, actionId: string, value: string): { SetActionConstantValueResult: void };

	SetActionConstantValuePromise(ruleSessionId: string, actionId: string, value: string): Promise<void>;

	SetIntersectionValueAsString(sessionId: string, rowId: string, columnId: string, newValue: string, successCallback: (data: { SetIntersectionValueAsStringResult: $D.Framework.Design.Form.EventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ SetIntersectionValueAsStringResult: $D.Framework.Design.Form.EventsReturn }>;

	SetIntersectionValueAsString(sessionId: string, rowId: string, columnId: string, newValue: string): { SetIntersectionValueAsStringResult: $D.Framework.Design.Form.EventsReturn };

	SetIntersectionValueAsStringPromise(sessionId: string, rowId: string, columnId: string, newValue: string): Promise<$D.Framework.Design.Form.EventsReturn>;

	GetAllEntities(sessionId: string, successCallback: (data: { GetAllEntitiesResult: $D.Framework.Design.Flow.Service.Edit.MatrixRuleSessionData }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllEntitiesResult: $D.Framework.Design.Flow.Service.Edit.MatrixRuleSessionData }>;

	GetAllEntities(sessionId: string): { GetAllEntitiesResult: $D.Framework.Design.Flow.Service.Edit.MatrixRuleSessionData };

	GetAllEntitiesPromise(sessionId: string): Promise<$D.Framework.Design.Flow.Service.Edit.MatrixRuleSessionData>;

	GetRollBackPointsForSession(sessionId: string, successCallback: (data: { GetRollBackPointsForSessionResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetRollBackPointsForSessionResult: string[] }>;

	GetRollBackPointsForSession(sessionId: string): { GetRollBackPointsForSessionResult: string[] };

	GetRollBackPointsForSessionPromise(sessionId: string): Promise<string[]>;

	RollBack(sessionId: string, snapshotName: string, successCallback: (data: { RollBackResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RollBackResult: void }>;

	RollBack(sessionId: string, snapshotName: string): { RollBackResult: void };

	RollBackPromise(sessionId: string, snapshotName: string): Promise<void>;

	GetRollForwardPointsForSession(sessionId: string, successCallback: (data: { GetRollForwardPointsForSessionResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetRollForwardPointsForSessionResult: string[] }>;

	GetRollForwardPointsForSession(sessionId: string): { GetRollForwardPointsForSessionResult: string[] };

	GetRollForwardPointsForSessionPromise(sessionId: string): Promise<string[]>;

	RollForward(sessionId: string, snapshotName: string, successCallback: (data: { RollForwardResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RollForwardResult: void }>;

	RollForward(sessionId: string, snapshotName: string): { RollForwardResult: void };

	RollForwardPromise(sessionId: string, snapshotName: string): Promise<void>;

	StartSampling(sessionId: string, samplingId: string, successCallback: (data: { StartSamplingResult: $D.Framework.Design.Flow.Service.Debugging.DebugData.FlowProgressData[] }) => any, errorCallback?: () => any): JQueryPromise<{ StartSamplingResult: $D.Framework.Design.Flow.Service.Debugging.DebugData.FlowProgressData[] }>;

	StartSampling(sessionId: string, samplingId: string): { StartSamplingResult: $D.Framework.Design.Flow.Service.Debugging.DebugData.FlowProgressData[] };

	StartSamplingPromise(sessionId: string, samplingId: string): Promise<$D.Framework.Design.Flow.Service.Debugging.DebugData.FlowProgressData[]>;

	StopSampling(sessionId: string, successCallback: (data: { StopSamplingResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ StopSamplingResult: void }>;

	StopSampling(sessionId: string): { StopSamplingResult: void };

	StopSamplingPromise(sessionId: string): Promise<void>;

	StartSamplingSet(sessionId: string, sampleSetId: string, successCallback: (data: { StartSamplingSetResult: $D.Framework.Design.Flow.Service.Debugging.Samples.SampleSetDataCoverage }) => any, errorCallback?: () => any): JQueryPromise<{ StartSamplingSetResult: $D.Framework.Design.Flow.Service.Debugging.Samples.SampleSetDataCoverage }>;

	StartSamplingSet(sessionId: string, sampleSetId: string): { StartSamplingSetResult: $D.Framework.Design.Flow.Service.Debugging.Samples.SampleSetDataCoverage };

	StartSamplingSetPromise(sessionId: string, sampleSetId: string): Promise<$D.Framework.Design.Flow.Service.Debugging.Samples.SampleSetDataCoverage>;

	StopSampleSet(sessionId: string, successCallback: (data: { StopSampleSetResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ StopSampleSetResult: void }>;

	StopSampleSet(sessionId: string): { StopSampleSetResult: void };

	StopSampleSetPromise(sessionId: string): Promise<void>;

	GetValidationIssues(sessionId: string, successCallback: (data: { GetValidationIssuesResult: $D.Framework.ValidationIssue[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetValidationIssuesResult: $D.Framework.ValidationIssue[] }>;

	GetValidationIssues(sessionId: string): { GetValidationIssuesResult: $D.Framework.ValidationIssue[] };

	GetValidationIssuesPromise(sessionId: string): Promise<$D.Framework.ValidationIssue[]>;

	IgnoreValidationIssue(sessionId: string, issue: $D.Framework.ValidationIssue, successCallback: (data: { IgnoreValidationIssueResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ IgnoreValidationIssueResult: void }>;

	IgnoreValidationIssue(sessionId: string, issue: $D.Framework.ValidationIssue): { IgnoreValidationIssueResult: void };

	IgnoreValidationIssuePromise(sessionId: string, issue: $D.Framework.ValidationIssue): Promise<void>;

	UnignoreValidationIssue(sessionId: string, issue: $D.Framework.ValidationIssue, successCallback: (data: { UnignoreValidationIssueResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UnignoreValidationIssueResult: void }>;

	UnignoreValidationIssue(sessionId: string, issue: $D.Framework.ValidationIssue): { UnignoreValidationIssueResult: void };

	UnignoreValidationIssuePromise(sessionId: string, issue: $D.Framework.ValidationIssue): Promise<void>;

	SetTopFlowStepName(sessionId: string, stepId: string, name: string, successCallback: (data: { SetTopFlowStepNameResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetTopFlowStepNameResult: void }>;

	SetTopFlowStepName(sessionId: string, stepId: string, name: string): { SetTopFlowStepNameResult: void };

	SetTopFlowStepNamePromise(sessionId: string, stepId: string, name: string): Promise<void>;

	SetLeftFlowStepName(sessionId: string, stepId: string, name: string, successCallback: (data: { SetLeftFlowStepNameResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetLeftFlowStepNameResult: void }>;

	SetLeftFlowStepName(sessionId: string, stepId: string, name: string): { SetLeftFlowStepNameResult: void };

	SetLeftFlowStepNamePromise(sessionId: string, stepId: string, name: string): Promise<void>;

	SetChanged(sessionId: string, successCallback: (data: { SetChangedResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetChangedResult: void }>;

	SetChanged(sessionId: string): { SetChangedResult: void };

	SetChangedPromise(sessionId: string): Promise<void>;

	SetDesignerInfo(sessionId: string, info: $D.Framework.Design.Flow.Service.Edit.DesignerInfo, successCallback: (data: { SetDesignerInfoResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetDesignerInfoResult: void }>;

	SetDesignerInfo(sessionId: string, info: $D.Framework.Design.Flow.Service.Edit.DesignerInfo): { SetDesignerInfoResult: void };

	SetDesignerInfoPromise(sessionId: string, info: $D.Framework.Design.Flow.Service.Edit.DesignerInfo): Promise<void>;

	SetDesignerChanged(sessionId: string, successCallback: (data: { SetDesignerChangedResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetDesignerChangedResult: void }>;

	SetDesignerChanged(sessionId: string): { SetDesignerChangedResult: void };

	SetDesignerChangedPromise(sessionId: string): Promise<void>;

	GetMatrixRuleEditingSession(sessionId: string, successCallback: (data: { GetMatrixRuleEditingSessionResult: $D.Framework.Design.Flow.Service.Edit.MatrixRuleEditSessionCreated }) => any, errorCallback?: () => any): JQueryPromise<{ GetMatrixRuleEditingSessionResult: $D.Framework.Design.Flow.Service.Edit.MatrixRuleEditSessionCreated }>;

	GetMatrixRuleEditingSession(sessionId: string): { GetMatrixRuleEditingSessionResult: $D.Framework.Design.Flow.Service.Edit.MatrixRuleEditSessionCreated };

	GetMatrixRuleEditingSessionPromise(sessionId: string): Promise<$D.Framework.Design.Flow.Service.Edit.MatrixRuleEditSessionCreated>;
}

interface ServicesStatic {
	MatrixRuleEditService(): MatrixRuleEditServiceStatic;
}
