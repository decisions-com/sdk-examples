/// <reference path="./datatypes._base.d.ts" />

interface DataDesignerServiceStatic {

	StartSessionForEditor(editingContextId: string, path: string[], mappingContext: $D.Framework.Design.Flow.Service.MappingContext, successCallback: (data: { StartSessionForEditorResult: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignSession }) => any, errorCallback?: () => any): JQueryPromise<{ StartSessionForEditorResult: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignSession }>;

	StartSessionForEditor(editingContextId: string, path: string[], mappingContext: $D.Framework.Design.Flow.Service.MappingContext): { StartSessionForEditorResult: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignSession };

	StartSessionForEditorPromise(editingContextId: string, path: string[], mappingContext: $D.Framework.Design.Flow.Service.MappingContext): Promise<$D.Framework.Design.Flow.Service.Edit.InputData.DataDesignSession>;

	StartSessionForDesignPattern(patternId: string, initiatorContext: $D.Framework.Design.Flow.Service.MappingContext, successCallback: (data: { StartSessionForDesignPatternResult: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignSession }) => any, errorCallback?: () => any): JQueryPromise<{ StartSessionForDesignPatternResult: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignSession }>;

	StartSessionForDesignPattern(patternId: string, initiatorContext: $D.Framework.Design.Flow.Service.MappingContext): { StartSessionForDesignPatternResult: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignSession };

	StartSessionForDesignPatternPromise(patternId: string, initiatorContext: $D.Framework.Design.Flow.Service.MappingContext): Promise<$D.Framework.Design.Flow.Service.Edit.InputData.DataDesignSession>;

	StartSession(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, successCallback: (data: { StartSessionResult: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignSession }) => any, errorCallback?: () => any): JQueryPromise<{ StartSessionResult: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignSession }>;

	StartSession(mappingContext: $D.Framework.Design.Flow.Service.MappingContext): { StartSessionResult: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignSession };

	StartSessionPromise(mappingContext: $D.Framework.Design.Flow.Service.MappingContext): Promise<$D.Framework.Design.Flow.Service.Edit.InputData.DataDesignSession>;

	SaveSession(sessionId: string, successCallback: (data: { SaveSessionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveSessionResult: void }>;

	SaveSession(sessionId: string): { SaveSessionResult: void };

	SaveSessionPromise(sessionId: string): Promise<void>;

	CancelSession(sessionId: string, successCallback: (data: { CancelSessionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CancelSessionResult: void }>;

	CancelSession(sessionId: string): { CancelSessionResult: void };

	CancelSessionPromise(sessionId: string): Promise<void>;

	GetDataFields(sessionId: string, surfaceType: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignerSurfaceType, inputDataId: string, path: string, successCallback: (data: { GetDataFieldsResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetDataFieldsResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }>;

	GetDataFields(sessionId: string, surfaceType: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignerSurfaceType, inputDataId: string, path: string): { GetDataFieldsResult: $D.Framework.Design.Flow.Mapping.DataDescription[] };

	GetDataFieldsPromise(sessionId: string, surfaceType: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignerSurfaceType, inputDataId: string, path: string): Promise<$D.Framework.Design.Flow.Mapping.DataDescription[]>;

	AddDiagram(sessionId: string, surfaceType: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignerSurfaceType, diagram: $D.Framework.Design.Flow.Service.Edit.InputData.DisplayData.AddDiagramDisplayData, ignoreChanges: any, successCallback: (data: { AddDiagramResult: $D.Framework.Design.Flow.Service.Edit.InputData.DiagramDisplayData }) => any, errorCallback?: () => any): JQueryPromise<{ AddDiagramResult: $D.Framework.Design.Flow.Service.Edit.InputData.DiagramDisplayData }>;

	AddDiagram(sessionId: string, surfaceType: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignerSurfaceType, diagram: $D.Framework.Design.Flow.Service.Edit.InputData.DisplayData.AddDiagramDisplayData, ignoreChanges: any): { AddDiagramResult: $D.Framework.Design.Flow.Service.Edit.InputData.DiagramDisplayData };

	AddDiagramPromise(sessionId: string, surfaceType: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignerSurfaceType, diagram: $D.Framework.Design.Flow.Service.Edit.InputData.DisplayData.AddDiagramDisplayData, ignoreChanges: any): Promise<$D.Framework.Design.Flow.Service.Edit.InputData.DiagramDisplayData>;

	UpdateDiagramView(sessionId: string, surfaceType: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignerSurfaceType, inputDataId: string, view: $D.Framework.Design.Flow.Service.Edit.InputData.DiagramView, successCallback: (data: { UpdateDiagramViewResult: $D.Framework.Design.Flow.Service.Edit.InputData.DiagramDisplayData }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateDiagramViewResult: $D.Framework.Design.Flow.Service.Edit.InputData.DiagramDisplayData }>;

	UpdateDiagramView(sessionId: string, surfaceType: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignerSurfaceType, inputDataId: string, view: $D.Framework.Design.Flow.Service.Edit.InputData.DiagramView): { UpdateDiagramViewResult: $D.Framework.Design.Flow.Service.Edit.InputData.DiagramDisplayData };

	UpdateDiagramViewPromise(sessionId: string, surfaceType: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignerSurfaceType, inputDataId: string, view: $D.Framework.Design.Flow.Service.Edit.InputData.DiagramView): Promise<$D.Framework.Design.Flow.Service.Edit.InputData.DiagramDisplayData>;

	UpdateDiagram(sessionId: string, surfaceType: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignerSurfaceType, inputDataId: string, diagramUpdate: $D.Framework.Design.Flow.Service.Edit.InputData.DisplayData.DiagramUpdateData, successCallback: (data: { UpdateDiagramResult: $D.Framework.Design.Flow.Service.Edit.InputData.DiagramDisplayData }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateDiagramResult: $D.Framework.Design.Flow.Service.Edit.InputData.DiagramDisplayData }>;

	UpdateDiagram(sessionId: string, surfaceType: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignerSurfaceType, inputDataId: string, diagramUpdate: $D.Framework.Design.Flow.Service.Edit.InputData.DisplayData.DiagramUpdateData): { UpdateDiagramResult: $D.Framework.Design.Flow.Service.Edit.InputData.DiagramDisplayData };

	UpdateDiagramPromise(sessionId: string, surfaceType: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignerSurfaceType, inputDataId: string, diagramUpdate: $D.Framework.Design.Flow.Service.Edit.InputData.DisplayData.DiagramUpdateData): Promise<$D.Framework.Design.Flow.Service.Edit.InputData.DiagramDisplayData>;

	DeleteDiagrams(sessionId: string, surfaceType: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignerSurfaceType, inputDataIds: string[], ignoreChanges: any, successCallback: (data: { DeleteDiagramsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteDiagramsResult: void }>;

	DeleteDiagrams(sessionId: string, surfaceType: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignerSurfaceType, inputDataIds: string[], ignoreChanges: any): { DeleteDiagramsResult: void };

	DeleteDiagramsPromise(sessionId: string, surfaceType: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignerSurfaceType, inputDataIds: string[], ignoreChanges: any): Promise<void>;

	GetInfoPanelContext(sessionId: string, successCallback: (data: { GetInfoPanelContextResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetInfoPanelContextResult: string }>;

	GetInfoPanelContext(sessionId: string): { GetInfoPanelContextResult: string };

	GetInfoPanelContextPromise(sessionId: string): Promise<string>;

	HasChanges(sessionId: string, successCallback: (data: { HasChangesResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ HasChangesResult: boolean }>;

	HasChanges(sessionId: string): { HasChangesResult: boolean };

	HasChangesPromise(sessionId: string): Promise<boolean>;

	GetRollForwardPointsForSession(sessionId: string, successCallback: (data: { GetRollForwardPointsForSessionResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetRollForwardPointsForSessionResult: string[] }>;

	GetRollForwardPointsForSession(sessionId: string): { GetRollForwardPointsForSessionResult: string[] };

	GetRollForwardPointsForSessionPromise(sessionId: string): Promise<string[]>;

	GetRollBackPointsForSession(sessionId: string, successCallback: (data: { GetRollBackPointsForSessionResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetRollBackPointsForSessionResult: string[] }>;

	GetRollBackPointsForSession(sessionId: string): { GetRollBackPointsForSessionResult: string[] };

	GetRollBackPointsForSessionPromise(sessionId: string): Promise<string[]>;

	RollBack(sessionId: string, rollbackName: string, successCallback: (data: { RollBackResult: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignSession }) => any, errorCallback?: () => any): JQueryPromise<{ RollBackResult: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignSession }>;

	RollBack(sessionId: string, rollbackName: string): { RollBackResult: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignSession };

	RollBackPromise(sessionId: string, rollbackName: string): Promise<$D.Framework.Design.Flow.Service.Edit.InputData.DataDesignSession>;

	RollForward(sessionId: string, rollbackName: string, successCallback: (data: { RollForwardResult: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignSession }) => any, errorCallback?: () => any): JQueryPromise<{ RollForwardResult: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignSession }>;

	RollForward(sessionId: string, rollbackName: string): { RollForwardResult: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignSession };

	RollForwardPromise(sessionId: string, rollbackName: string): Promise<$D.Framework.Design.Flow.Service.Edit.InputData.DataDesignSession>;

	IgnoreValidationIssue(sessionId: string, surfaceType: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignerSurfaceType, issue: $D.Framework.ValidationIssue, successCallback: (data: { IgnoreValidationIssueResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ IgnoreValidationIssueResult: void }>;

	IgnoreValidationIssue(sessionId: string, surfaceType: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignerSurfaceType, issue: $D.Framework.ValidationIssue): { IgnoreValidationIssueResult: void };

	IgnoreValidationIssuePromise(sessionId: string, surfaceType: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignerSurfaceType, issue: $D.Framework.ValidationIssue): Promise<void>;

	UnignoreValidationIssue(sessionId: string, surfaceType: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignerSurfaceType, issue: $D.Framework.ValidationIssue, successCallback: (data: { UnignoreValidationIssueResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UnignoreValidationIssueResult: void }>;

	UnignoreValidationIssue(sessionId: string, surfaceType: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignerSurfaceType, issue: $D.Framework.ValidationIssue): { UnignoreValidationIssueResult: void };

	UnignoreValidationIssuePromise(sessionId: string, surfaceType: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignerSurfaceType, issue: $D.Framework.ValidationIssue): Promise<void>;

	MoveDiagramUp(sessionId: string, surfaceType: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignerSurfaceType, inputId: string, successCallback: (data: { MoveDiagramUpResult: $D.Framework.Design.Flow.Service.Edit.InputData.DiagramDisplayData[] }) => any, errorCallback?: () => any): JQueryPromise<{ MoveDiagramUpResult: $D.Framework.Design.Flow.Service.Edit.InputData.DiagramDisplayData[] }>;

	MoveDiagramUp(sessionId: string, surfaceType: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignerSurfaceType, inputId: string): { MoveDiagramUpResult: $D.Framework.Design.Flow.Service.Edit.InputData.DiagramDisplayData[] };

	MoveDiagramUpPromise(sessionId: string, surfaceType: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignerSurfaceType, inputId: string): Promise<$D.Framework.Design.Flow.Service.Edit.InputData.DiagramDisplayData[]>;

	MoveDiagramDown(sessionId: string, surfaceType: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignerSurfaceType, inputId: string, successCallback: (data: { MoveDiagramDownResult: $D.Framework.Design.Flow.Service.Edit.InputData.DiagramDisplayData[] }) => any, errorCallback?: () => any): JQueryPromise<{ MoveDiagramDownResult: $D.Framework.Design.Flow.Service.Edit.InputData.DiagramDisplayData[] }>;

	MoveDiagramDown(sessionId: string, surfaceType: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignerSurfaceType, inputId: string): { MoveDiagramDownResult: $D.Framework.Design.Flow.Service.Edit.InputData.DiagramDisplayData[] };

	MoveDiagramDownPromise(sessionId: string, surfaceType: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignerSurfaceType, inputId: string): Promise<$D.Framework.Design.Flow.Service.Edit.InputData.DiagramDisplayData[]>;

	GetEditDiagramMappingContextId(sessionId: string, inputDataId: string, successCallback: (data: { GetEditDiagramMappingContextIdResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetEditDiagramMappingContextIdResult: string }>;

	GetEditDiagramMappingContextId(sessionId: string, inputDataId: string): { GetEditDiagramMappingContextIdResult: string };

	GetEditDiagramMappingContextIdPromise(sessionId: string, inputDataId: string): Promise<string>;

	StartEditingSelectInputMapping(sessionId: string, inputDataId: string, successCallback: (data: { StartEditingSelectInputMappingResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession }) => any, errorCallback?: () => any): JQueryPromise<{ StartEditingSelectInputMappingResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession }>;

	StartEditingSelectInputMapping(sessionId: string, inputDataId: string): { StartEditingSelectInputMappingResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession };

	StartEditingSelectInputMappingPromise(sessionId: string, inputDataId: string): Promise<$D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession>;

	SetConstantMappingValue(sessionId: string, inputDataId: string, value: string, successCallback: (data: { SetConstantMappingValueResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetConstantMappingValueResult: void }>;

	SetConstantMappingValue(sessionId: string, inputDataId: string, value: string): { SetConstantMappingValueResult: void };

	SetConstantMappingValuePromise(sessionId: string, inputDataId: string, value: string): Promise<void>;

	CreateDataTypeContext(sessionId: string, surfaceType: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignerSurfaceType, folderId: string, successCallback: (data: { CreateDataTypeContextResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateDataTypeContextResult: string }>;

	CreateDataTypeContext(sessionId: string, surfaceType: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignerSurfaceType, folderId: string): { CreateDataTypeContextResult: string };

	CreateDataTypeContextPromise(sessionId: string, surfaceType: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignerSurfaceType, folderId: string): Promise<string>;

	SubmitCreateDataTypeContext(sessionId: string, dataTypeContextId: string, successCallback: (data: { SubmitCreateDataTypeContextResult: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignSession }) => any, errorCallback?: () => any): JQueryPromise<{ SubmitCreateDataTypeContextResult: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignSession }>;

	SubmitCreateDataTypeContext(sessionId: string, dataTypeContextId: string): { SubmitCreateDataTypeContextResult: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignSession };

	SubmitCreateDataTypeContextPromise(sessionId: string, dataTypeContextId: string): Promise<$D.Framework.Design.Flow.Service.Edit.InputData.DataDesignSession>;

	PickSampleSet(sessionId: string, reportId: string, successCallback: (data: { PickSampleSetResult: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignSession }) => any, errorCallback?: () => any): JQueryPromise<{ PickSampleSetResult: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignSession }>;

	PickSampleSet(sessionId: string, reportId: string): { PickSampleSetResult: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignSession };

	PickSampleSetPromise(sessionId: string, reportId: string): Promise<$D.Framework.Design.Flow.Service.Edit.InputData.DataDesignSession>;

	UploadSampleSet(sessionId: string, fileId: string, successCallback: (data: { UploadSampleSetResult: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignSession }) => any, errorCallback?: () => any): JQueryPromise<{ UploadSampleSetResult: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignSession }>;

	UploadSampleSet(sessionId: string, fileId: string): { UploadSampleSetResult: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignSession };

	UploadSampleSetPromise(sessionId: string, fileId: string): Promise<$D.Framework.Design.Flow.Service.Edit.InputData.DataDesignSession>;

	GetPropertiesSnapshot(sessionId: string, surfaceType: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignerSurfaceType, diagramId: string, isListView: boolean, successCallback: (data: { GetPropertiesSnapshotResult: $D.Framework.Design.Properties.ContextProviderNode }) => any, errorCallback?: () => any): JQueryPromise<{ GetPropertiesSnapshotResult: $D.Framework.Design.Properties.ContextProviderNode }>;

	GetPropertiesSnapshot(sessionId: string, surfaceType: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignerSurfaceType, diagramId: string, isListView: boolean): { GetPropertiesSnapshotResult: $D.Framework.Design.Properties.ContextProviderNode };

	GetPropertiesSnapshotPromise(sessionId: string, surfaceType: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignerSurfaceType, diagramId: string, isListView: boolean): Promise<$D.Framework.Design.Properties.ContextProviderNode>;

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
	DataDesignerService(): DataDesignerServiceStatic;
}
