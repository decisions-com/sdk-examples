/// <reference path="./datatypes._base.d.ts" />

interface FlowEditServiceStatic {

	GetRollForwardPointsForSession(flowSessionId: string, successCallback: (data: { GetRollForwardPointsForSessionResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetRollForwardPointsForSessionResult: string[] }>;

	GetRollForwardPointsForSession(flowSessionId: string): { GetRollForwardPointsForSessionResult: string[] };

	GetRollForwardPointsForSessionPromise(flowSessionId: string): Promise<string[]>;

	GetRollBackPointsForSession(flowSessionId: string, successCallback: (data: { GetRollBackPointsForSessionResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetRollBackPointsForSessionResult: string[] }>;

	GetRollBackPointsForSession(flowSessionId: string): { GetRollBackPointsForSessionResult: string[] };

	GetRollBackPointsForSessionPromise(flowSessionId: string): Promise<string[]>;

	RollBack(flowSessionId: string, rollbackName: string, successCallback: (data: { RollBackResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RollBackResult: void }>;

	RollBack(flowSessionId: string, rollbackName: string): { RollBackResult: void };

	RollBackPromise(flowSessionId: string, rollbackName: string): Promise<void>;

	RollForward(flowSessionId: string, rollbackName: string, successCallback: (data: { RollForwardResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RollForwardResult: void }>;

	RollForward(flowSessionId: string, rollbackName: string): { RollForwardResult: void };

	RollForwardPromise(flowSessionId: string, rollbackName: string): Promise<void>;

	OpenFlowForEditing(flowId: string, successCallback: (data: { OpenFlowForEditingResult: $D.Framework.Design.Flow.FlowEditSession }) => any, errorCallback?: () => any): JQueryPromise<{ OpenFlowForEditingResult: $D.Framework.Design.Flow.FlowEditSession }>;

	OpenFlowForEditing(flowId: string): { OpenFlowForEditingResult: $D.Framework.Design.Flow.FlowEditSession };

	OpenFlowForEditingPromise(flowId: string): Promise<$D.Framework.Design.Flow.FlowEditSession>;

	FlowHasChanges(flowSessionId: string, successCallback: (data: { FlowHasChangesResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ FlowHasChangesResult: boolean }>;

	FlowHasChanges(flowSessionId: string): { FlowHasChangesResult: boolean };

	FlowHasChangesPromise(flowSessionId: string): Promise<boolean>;

	SaveFlow(flowSessionId: string, successCallback: (data: { SaveFlowResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveFlowResult: void }>;

	SaveFlow(flowSessionId: string): { SaveFlowResult: void };

	SaveFlowPromise(flowSessionId: string): Promise<void>;

	SaveFlowWithPreview(flowSessionId: string, preview: number[], thumbnail: number[], successCallback: (data: { SaveFlowWithPreviewResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveFlowWithPreviewResult: void }>;

	SaveFlowWithPreview(flowSessionId: string, preview: number[], thumbnail: number[]): { SaveFlowWithPreviewResult: void };

	SaveFlowWithPreviewPromise(flowSessionId: string, preview: number[], thumbnail: number[]): Promise<void>;

	SaveFlowWithPreviewAndComment(flowSessionId: string, preview: number[], thumbnail: number[], comment: string, successCallback: (data: { SaveFlowWithPreviewAndCommentResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveFlowWithPreviewAndCommentResult: void }>;

	SaveFlowWithPreviewAndComment(flowSessionId: string, preview: number[], thumbnail: number[], comment: string): { SaveFlowWithPreviewAndCommentResult: void };

	SaveFlowWithPreviewAndCommentPromise(flowSessionId: string, preview: number[], thumbnail: number[], comment: string): Promise<void>;

	DisableStartupScreen(flowSessionId: string, successCallback: (data: { DisableStartupScreenResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DisableStartupScreenResult: void }>;

	DisableStartupScreen(flowSessionId: string): { DisableStartupScreenResult: void };

	DisableStartupScreenPromise(flowSessionId: string): Promise<void>;

	EnableStartupScreen(flowSessionId: string, successCallback: (data: { EnableStartupScreenResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ EnableStartupScreenResult: void }>;

	EnableStartupScreen(flowSessionId: string): { EnableStartupScreenResult: void };

	EnableStartupScreenPromise(flowSessionId: string): Promise<void>;

	CancelFlowEdit(flowSessionId: string, successCallback: (data: { CancelFlowEditResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CancelFlowEditResult: void }>;

	CancelFlowEdit(flowSessionId: string): { CancelFlowEditResult: void };

	CancelFlowEditPromise(flowSessionId: string): Promise<void>;

	RollbackFlowEdits(flowId: string, successCallback: (data: { RollbackFlowEditsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RollbackFlowEditsResult: void }>;

	RollbackFlowEdits(flowId: string): { RollbackFlowEditsResult: void };

	RollbackFlowEditsPromise(flowId: string): Promise<void>;

	PublishFlow(flowId: string, successCallback: (data: { PublishFlowResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ PublishFlowResult: void }>;

	PublishFlow(flowId: string): { PublishFlowResult: void };

	PublishFlowPromise(flowId: string): Promise<void>;

	CreateFlowStepTemplate(flowSessionId: string, stepId: string, folderId: string, name: string, successCallback: (data: { CreateFlowStepTemplateResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CreateFlowStepTemplateResult: void }>;

	CreateFlowStepTemplate(flowSessionId: string, stepId: string, folderId: string, name: string): { CreateFlowStepTemplateResult: void };

	CreateFlowStepTemplatePromise(flowSessionId: string, stepId: string, folderId: string, name: string): Promise<void>;

	GetFlowDataDescriptions(flowSessionId: string, path: string, descriptionType: $D.Framework.Utilities.Data.DataDescriptionType, successCallback: (data: { GetFlowDataDescriptionsResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetFlowDataDescriptionsResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }>;

	GetFlowDataDescriptions(flowSessionId: string, path: string, descriptionType: $D.Framework.Utilities.Data.DataDescriptionType): { GetFlowDataDescriptionsResult: $D.Framework.Design.Flow.Mapping.DataDescription[] };

	GetFlowDataDescriptionsPromise(flowSessionId: string, path: string, descriptionType: $D.Framework.Utilities.Data.DataDescriptionType): Promise<$D.Framework.Design.Flow.Mapping.DataDescription[]>;

	GetDataDescriptionsWithValue(flowSessionId: string, descriptionType: $D.Framework.Utilities.Data.DataDescriptionType, successCallback: (data: { GetDataDescriptionsWithValueResult: $D.Framework.Design.Flow.Service.Edit.DataDescriptionWithValue[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetDataDescriptionsWithValueResult: $D.Framework.Design.Flow.Service.Edit.DataDescriptionWithValue[] }>;

	GetDataDescriptionsWithValue(flowSessionId: string, descriptionType: $D.Framework.Utilities.Data.DataDescriptionType): { GetDataDescriptionsWithValueResult: $D.Framework.Design.Flow.Service.Edit.DataDescriptionWithValue[] };

	GetDataDescriptionsWithValuePromise(flowSessionId: string, descriptionType: $D.Framework.Utilities.Data.DataDescriptionType): Promise<$D.Framework.Design.Flow.Service.Edit.DataDescriptionWithValue[]>;

	GetSubDataDescriptionsWithValue(flowSessionId: string, descriptionType: $D.Framework.Utilities.Data.DataDescriptionType, path: string, successCallback: (data: { GetSubDataDescriptionsWithValueResult: $D.Framework.Design.Flow.Service.Edit.DataDescriptionWithValue[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetSubDataDescriptionsWithValueResult: $D.Framework.Design.Flow.Service.Edit.DataDescriptionWithValue[] }>;

	GetSubDataDescriptionsWithValue(flowSessionId: string, descriptionType: $D.Framework.Utilities.Data.DataDescriptionType, path: string): { GetSubDataDescriptionsWithValueResult: $D.Framework.Design.Flow.Service.Edit.DataDescriptionWithValue[] };

	GetSubDataDescriptionsWithValuePromise(flowSessionId: string, descriptionType: $D.Framework.Utilities.Data.DataDescriptionType, path: string): Promise<$D.Framework.Design.Flow.Service.Edit.DataDescriptionWithValue[]>;

	GetDataDescriptionsForStep(flowSessionId: string, flowStepId: string, descriptionType: $D.Framework.Utilities.Data.DataDescriptionType, successCallback: (data: { GetDataDescriptionsForStepResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetDataDescriptionsForStepResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }>;

	GetDataDescriptionsForStep(flowSessionId: string, flowStepId: string, descriptionType: $D.Framework.Utilities.Data.DataDescriptionType): { GetDataDescriptionsForStepResult: $D.Framework.Design.Flow.Mapping.DataDescription[] };

	GetDataDescriptionsForStepPromise(flowSessionId: string, flowStepId: string, descriptionType: $D.Framework.Utilities.Data.DataDescriptionType): Promise<$D.Framework.Design.Flow.Mapping.DataDescription[]>;

	GetDataDescriptionsWithValueForStep(flowSessionId: string, flowStepId: string, descriptionType: $D.Framework.Utilities.Data.DataDescriptionType, successCallback: (data: { GetDataDescriptionsWithValueForStepResult: $D.Framework.Design.Flow.Service.Edit.DataDescriptionWithValue[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetDataDescriptionsWithValueForStepResult: $D.Framework.Design.Flow.Service.Edit.DataDescriptionWithValue[] }>;

	GetDataDescriptionsWithValueForStep(flowSessionId: string, flowStepId: string, descriptionType: $D.Framework.Utilities.Data.DataDescriptionType): { GetDataDescriptionsWithValueForStepResult: $D.Framework.Design.Flow.Service.Edit.DataDescriptionWithValue[] };

	GetDataDescriptionsWithValueForStepPromise(flowSessionId: string, flowStepId: string, descriptionType: $D.Framework.Utilities.Data.DataDescriptionType): Promise<$D.Framework.Design.Flow.Service.Edit.DataDescriptionWithValue[]>;

	GetSubDataDescriptionsForStep(flowSessionId: string, flowStepId: string, path: string, descriptionType: $D.Framework.Utilities.Data.DataDescriptionType, successCallback: (data: { GetSubDataDescriptionsForStepResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetSubDataDescriptionsForStepResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }>;

	GetSubDataDescriptionsForStep(flowSessionId: string, flowStepId: string, path: string, descriptionType: $D.Framework.Utilities.Data.DataDescriptionType): { GetSubDataDescriptionsForStepResult: $D.Framework.Design.Flow.Mapping.DataDescription[] };

	GetSubDataDescriptionsForStepPromise(flowSessionId: string, flowStepId: string, path: string, descriptionType: $D.Framework.Utilities.Data.DataDescriptionType): Promise<$D.Framework.Design.Flow.Mapping.DataDescription[]>;

	GetSubDataDescriptionsForStepPaths(flowSessionId: string, flowStepId: string, paths: string[], descriptionType: $D.Framework.Utilities.Data.DataDescriptionType, successCallback: (data: { GetSubDataDescriptionsForStepPathsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetSubDataDescriptionsForStepPathsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	GetSubDataDescriptionsForStepPaths(flowSessionId: string, flowStepId: string, paths: string[], descriptionType: $D.Framework.Utilities.Data.DataDescriptionType): { GetSubDataDescriptionsForStepPathsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	GetSubDataDescriptionsForStepPathsPromise(flowSessionId: string, flowStepId: string, paths: string[], descriptionType: $D.Framework.Utilities.Data.DataDescriptionType): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	GetSubDataDescriptionsWithValueForStep(flowSessionId: string, flowStepId: string, path: string, descriptionType: $D.Framework.Utilities.Data.DataDescriptionType, successCallback: (data: { GetSubDataDescriptionsWithValueForStepResult: $D.Framework.Design.Flow.Service.Edit.DataDescriptionWithValue[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetSubDataDescriptionsWithValueForStepResult: $D.Framework.Design.Flow.Service.Edit.DataDescriptionWithValue[] }>;

	GetSubDataDescriptionsWithValueForStep(flowSessionId: string, flowStepId: string, path: string, descriptionType: $D.Framework.Utilities.Data.DataDescriptionType): { GetSubDataDescriptionsWithValueForStepResult: $D.Framework.Design.Flow.Service.Edit.DataDescriptionWithValue[] };

	GetSubDataDescriptionsWithValueForStepPromise(flowSessionId: string, flowStepId: string, path: string, descriptionType: $D.Framework.Utilities.Data.DataDescriptionType): Promise<$D.Framework.Design.Flow.Service.Edit.DataDescriptionWithValue[]>;

	SearchDataDescriptions(flowSessionId: string, criteria: string, descriptionType: $D.Framework.Utilities.Data.DataDescriptionType, successCallback: (data: { SearchDataDescriptionsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchDataDescriptionsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	SearchDataDescriptions(flowSessionId: string, criteria: string, descriptionType: $D.Framework.Utilities.Data.DataDescriptionType): { SearchDataDescriptionsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	SearchDataDescriptionsPromise(flowSessionId: string, criteria: string, descriptionType: $D.Framework.Utilities.Data.DataDescriptionType): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	SearchDataDescriptionsWithValue(flowSessionId: string, criteria: string, descriptionType: $D.Framework.Utilities.Data.DataDescriptionType, successCallback: (data: { SearchDataDescriptionsWithValueResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchDataDescriptionsWithValueResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	SearchDataDescriptionsWithValue(flowSessionId: string, criteria: string, descriptionType: $D.Framework.Utilities.Data.DataDescriptionType): { SearchDataDescriptionsWithValueResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	SearchDataDescriptionsWithValuePromise(flowSessionId: string, criteria: string, descriptionType: $D.Framework.Utilities.Data.DataDescriptionType): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	SearchDataDescriptionsForStep(flowSessionId: string, flowStepId: string, criteria: string, descriptionType: $D.Framework.Utilities.Data.DataDescriptionType, successCallback: (data: { SearchDataDescriptionsForStepResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchDataDescriptionsForStepResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	SearchDataDescriptionsForStep(flowSessionId: string, flowStepId: string, criteria: string, descriptionType: $D.Framework.Utilities.Data.DataDescriptionType): { SearchDataDescriptionsForStepResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	SearchDataDescriptionsForStepPromise(flowSessionId: string, flowStepId: string, criteria: string, descriptionType: $D.Framework.Utilities.Data.DataDescriptionType): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	GetOutboundDataForStep(flowSessionId: string, flowStepId: string, outcomePath: string, dataPath: string, descriptionType: $D.Framework.Utilities.Data.DataDescriptionType, includeExisting: boolean, successCallback: (data: { GetOutboundDataForStepResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetOutboundDataForStepResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }>;

	GetOutboundDataForStep(flowSessionId: string, flowStepId: string, outcomePath: string, dataPath: string, descriptionType: $D.Framework.Utilities.Data.DataDescriptionType, includeExisting: boolean): { GetOutboundDataForStepResult: $D.Framework.Design.Flow.Mapping.DataDescription[] };

	GetOutboundDataForStepPromise(flowSessionId: string, flowStepId: string, outcomePath: string, dataPath: string, descriptionType: $D.Framework.Utilities.Data.DataDescriptionType, includeExisting: boolean): Promise<$D.Framework.Design.Flow.Mapping.DataDescription[]>;

	GetOutboundDataWithValueForStep(flowSessionId: string, flowStepId: string, outcomePath: string, dataPath: string, descriptionType: $D.Framework.Utilities.Data.DataDescriptionType, includeExisting: boolean, successCallback: (data: { GetOutboundDataWithValueForStepResult: $D.Framework.Design.Flow.Service.Edit.DataDescriptionWithValue[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetOutboundDataWithValueForStepResult: $D.Framework.Design.Flow.Service.Edit.DataDescriptionWithValue[] }>;

	GetOutboundDataWithValueForStep(flowSessionId: string, flowStepId: string, outcomePath: string, dataPath: string, descriptionType: $D.Framework.Utilities.Data.DataDescriptionType, includeExisting: boolean): { GetOutboundDataWithValueForStepResult: $D.Framework.Design.Flow.Service.Edit.DataDescriptionWithValue[] };

	GetOutboundDataWithValueForStepPromise(flowSessionId: string, flowStepId: string, outcomePath: string, dataPath: string, descriptionType: $D.Framework.Utilities.Data.DataDescriptionType, includeExisting: boolean): Promise<$D.Framework.Design.Flow.Service.Edit.DataDescriptionWithValue[]>;

	GetPreviousSteps(flowSessionId: string, flowStepId: string, incluseSelf: boolean, successCallback: (data: { GetPreviousStepsResult: $D.Framework.Design.Flow.PreviousStepInformation[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetPreviousStepsResult: $D.Framework.Design.Flow.PreviousStepInformation[] }>;

	GetPreviousSteps(flowSessionId: string, flowStepId: string, incluseSelf: boolean): { GetPreviousStepsResult: $D.Framework.Design.Flow.PreviousStepInformation[] };

	GetPreviousStepsPromise(flowSessionId: string, flowStepId: string, incluseSelf: boolean): Promise<$D.Framework.Design.Flow.PreviousStepInformation[]>;

	GetPreviousStepsAndSelf(flowSessionId: string, flowStepId: string, outcomePath: string, successCallback: (data: { GetPreviousStepsAndSelfResult: $D.Framework.Design.Flow.PreviousStepInformation[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetPreviousStepsAndSelfResult: $D.Framework.Design.Flow.PreviousStepInformation[] }>;

	GetPreviousStepsAndSelf(flowSessionId: string, flowStepId: string, outcomePath: string): { GetPreviousStepsAndSelfResult: $D.Framework.Design.Flow.PreviousStepInformation[] };

	GetPreviousStepsAndSelfPromise(flowSessionId: string, flowStepId: string, outcomePath: string): Promise<$D.Framework.Design.Flow.PreviousStepInformation[]>;

	GetDataUsageInformation(flowSessionId: string, dataPath: string, successCallback: (data: { GetDataUsageInformationResult: $D.Framework.Design.Flow.StepDataInformation[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetDataUsageInformationResult: $D.Framework.Design.Flow.StepDataInformation[] }>;

	GetDataUsageInformation(flowSessionId: string, dataPath: string): { GetDataUsageInformationResult: $D.Framework.Design.Flow.StepDataInformation[] };

	GetDataUsageInformationPromise(flowSessionId: string, dataPath: string): Promise<$D.Framework.Design.Flow.StepDataInformation[]>;

	GetStepDisplayData(flowSessionId: string, successCallback: (data: { GetStepDisplayDataResult: $D.Framework.Design.Flow.StepDisplayData[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetStepDisplayDataResult: $D.Framework.Design.Flow.StepDisplayData[] }>;

	GetStepDisplayData(flowSessionId: string): { GetStepDisplayDataResult: $D.Framework.Design.Flow.StepDisplayData[] };

	GetStepDisplayDataPromise(flowSessionId: string): Promise<$D.Framework.Design.Flow.StepDisplayData[]>;

	SetStepDisplayData(flowSessionId: string, displayData: $D.Framework.Design.Flow.StepDisplayData[], successCallback: (data: { SetStepDisplayDataResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetStepDisplayDataResult: void }>;

	SetStepDisplayData(flowSessionId: string, displayData: $D.Framework.Design.Flow.StepDisplayData[]): { SetStepDisplayDataResult: void };

	SetStepDisplayDataPromise(flowSessionId: string, displayData: $D.Framework.Design.Flow.StepDisplayData[]): Promise<void>;

	GetExternalFormStepInfoForFlowInSession(flowSessionId: string, flowStepId: string, successCallback: (data: { GetExternalFormStepInfoForFlowInSessionResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ExternalFormStepInfo }) => any, errorCallback?: () => any): JQueryPromise<{ GetExternalFormStepInfoForFlowInSessionResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ExternalFormStepInfo }>;

	GetExternalFormStepInfoForFlowInSession(flowSessionId: string, flowStepId: string): { GetExternalFormStepInfoForFlowInSessionResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ExternalFormStepInfo };

	GetExternalFormStepInfoForFlowInSessionPromise(flowSessionId: string, flowStepId: string): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.ExternalFormStepInfo>;

	GetExternalFormStepInfoForFlow(flowId: string, flowStepId: string, successCallback: (data: { GetExternalFormStepInfoForFlowResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ExternalFormStepInfo }) => any, errorCallback?: () => any): JQueryPromise<{ GetExternalFormStepInfoForFlowResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ExternalFormStepInfo }>;

	GetExternalFormStepInfoForFlow(flowId: string, flowStepId: string): { GetExternalFormStepInfoForFlowResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ExternalFormStepInfo };

	GetExternalFormStepInfoForFlowPromise(flowId: string, flowStepId: string): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.ExternalFormStepInfo>;

	GetAllExternalFormStepInfoForFlow(flowId: string, successCallback: (data: { GetAllExternalFormStepInfoForFlowResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.StepInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllExternalFormStepInfoForFlowResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.StepInfo[] }>;

	GetAllExternalFormStepInfoForFlow(flowId: string): { GetAllExternalFormStepInfoForFlowResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.StepInfo[] };

	GetAllExternalFormStepInfoForFlowPromise(flowId: string): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.StepInfo[]>;

	UpdateDisplayDatas(flowSessionId: string, newData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], successCallback: (data: { UpdateDisplayDatasResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateDisplayDatasResult: void }>;

	UpdateDisplayDatas(flowSessionId: string, newData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): { UpdateDisplayDatasResult: void };

	UpdateDisplayDatasPromise(flowSessionId: string, newData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): Promise<void>;

	AddStep(flowSessionId: string, stepConfigNodes: string[], stepConfigId: string, x: number, y: number, width: number, height: number, successCallback: (data: { AddStepResult: $D.Framework.Design.Flow.NewFlowEntityInfo }) => any, errorCallback?: () => any): JQueryPromise<{ AddStepResult: $D.Framework.Design.Flow.NewFlowEntityInfo }>;

	AddStep(flowSessionId: string, stepConfigNodes: string[], stepConfigId: string, x: number, y: number, width: number, height: number): { AddStepResult: $D.Framework.Design.Flow.NewFlowEntityInfo };

	AddStepPromise(flowSessionId: string, stepConfigNodes: string[], stepConfigId: string, x: number, y: number, width: number, height: number): Promise<$D.Framework.Design.Flow.NewFlowEntityInfo>;

	DuplicateStep(flowSessionId: string, flowStepId: string, x: number, y: number, additionalInfo: $D.Framework.Design.Flow.StepCreationInfo, successCallback: (data: { DuplicateStepResult: $D.Framework.Design.Flow.NewFlowEntityInfo }) => any, errorCallback?: () => any): JQueryPromise<{ DuplicateStepResult: $D.Framework.Design.Flow.NewFlowEntityInfo }>;

	DuplicateStep(flowSessionId: string, flowStepId: string, x: number, y: number, additionalInfo: $D.Framework.Design.Flow.StepCreationInfo): { DuplicateStepResult: $D.Framework.Design.Flow.NewFlowEntityInfo };

	DuplicateStepPromise(flowSessionId: string, flowStepId: string, x: number, y: number, additionalInfo: $D.Framework.Design.Flow.StepCreationInfo): Promise<$D.Framework.Design.Flow.NewFlowEntityInfo>;

	AddStepWithAdditionalInfo(flowSessionId: string, stepConfigNodes: string[], stepConfigId: string, x: number, y: number, width: number, height: number, additionalInfo: $D.Framework.Design.Flow.StepCreationInfo, successCallback: (data: { AddStepWithAdditionalInfoResult: $D.Framework.Design.Flow.NewFlowEntityInfo }) => any, errorCallback?: () => any): JQueryPromise<{ AddStepWithAdditionalInfoResult: $D.Framework.Design.Flow.NewFlowEntityInfo }>;

	AddStepWithAdditionalInfo(flowSessionId: string, stepConfigNodes: string[], stepConfigId: string, x: number, y: number, width: number, height: number, additionalInfo: $D.Framework.Design.Flow.StepCreationInfo): { AddStepWithAdditionalInfoResult: $D.Framework.Design.Flow.NewFlowEntityInfo };

	AddStepWithAdditionalInfoPromise(flowSessionId: string, stepConfigNodes: string[], stepConfigId: string, x: number, y: number, width: number, height: number, additionalInfo: $D.Framework.Design.Flow.StepCreationInfo): Promise<$D.Framework.Design.Flow.NewFlowEntityInfo>;

	ReplaceStep(flowSessionId: string, existingStepId: string, stepConfigNodes: string[], stepConfigId: string, successCallback: (data: { ReplaceStepResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ReplaceStepResult: void }>;

	ReplaceStep(flowSessionId: string, existingStepId: string, stepConfigNodes: string[], stepConfigId: string): { ReplaceStepResult: void };

	ReplaceStepPromise(flowSessionId: string, existingStepId: string, stepConfigNodes: string[], stepConfigId: string): Promise<void>;

	ReplaceStepWithAdditionalInfo(flowSessionId: string, existingStepId: string, stepConfigNodes: string[], stepConfigId: string, additionalInfo: $D.Framework.Design.Flow.StepCreationInfo, successCallback: (data: { ReplaceStepWithAdditionalInfoResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ReplaceStepWithAdditionalInfoResult: void }>;

	ReplaceStepWithAdditionalInfo(flowSessionId: string, existingStepId: string, stepConfigNodes: string[], stepConfigId: string, additionalInfo: $D.Framework.Design.Flow.StepCreationInfo): { ReplaceStepWithAdditionalInfoResult: void };

	ReplaceStepWithAdditionalInfoPromise(flowSessionId: string, existingStepId: string, stepConfigNodes: string[], stepConfigId: string, additionalInfo: $D.Framework.Design.Flow.StepCreationInfo): Promise<void>;

	RemoveStep(flowSessionId: string, flowStepId: string, successCallback: (data: { RemoveStepResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveStepResult: void }>;

	RemoveStep(flowSessionId: string, flowStepId: string): { RemoveStepResult: void };

	RemoveStepPromise(flowSessionId: string, flowStepId: string): Promise<void>;

	PlaceStepOnConnection(flowSessionId: string, stepConnectionId: string, stepConfigNodes: string[], stepConfigId: string, x: number, y: number, width: number, height: number, additionalInfo: $D.Framework.Design.Flow.StepCreationInfo, successCallback: (data: { PlaceStepOnConnectionResult: $D.Framework.Design.Flow.NewFlowEntityInfo }) => any, errorCallback?: () => any): JQueryPromise<{ PlaceStepOnConnectionResult: $D.Framework.Design.Flow.NewFlowEntityInfo }>;

	PlaceStepOnConnection(flowSessionId: string, stepConnectionId: string, stepConfigNodes: string[], stepConfigId: string, x: number, y: number, width: number, height: number, additionalInfo: $D.Framework.Design.Flow.StepCreationInfo): { PlaceStepOnConnectionResult: $D.Framework.Design.Flow.NewFlowEntityInfo };

	PlaceStepOnConnectionPromise(flowSessionId: string, stepConnectionId: string, stepConfigNodes: string[], stepConfigId: string, x: number, y: number, width: number, height: number, additionalInfo: $D.Framework.Design.Flow.StepCreationInfo): Promise<$D.Framework.Design.Flow.NewFlowEntityInfo>;

	ImageDropped(flowSessionId: string, imageName: string, uploadedDocumentId: string, x: number, y: number, successCallback: (data: { ImageDroppedResult: $D.Framework.Design.Flow.NewFlowEntityInfo }) => any, errorCallback?: () => any): JQueryPromise<{ ImageDroppedResult: $D.Framework.Design.Flow.NewFlowEntityInfo }>;

	ImageDropped(flowSessionId: string, imageName: string, uploadedDocumentId: string, x: number, y: number): { ImageDroppedResult: $D.Framework.Design.Flow.NewFlowEntityInfo };

	ImageDroppedPromise(flowSessionId: string, imageName: string, uploadedDocumentId: string, x: number, y: number): Promise<$D.Framework.Design.Flow.NewFlowEntityInfo>;

	GetDefaultEditorDataForStep(flowSessionId: string, flowStepId: string, successCallback: (data: { GetDefaultEditorDataForStepResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetDefaultEditorDataForStepResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	GetDefaultEditorDataForStep(flowSessionId: string, flowStepId: string): { GetDefaultEditorDataForStepResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	GetDefaultEditorDataForStepPromise(flowSessionId: string, flowStepId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	GetDefaultHtmlEditorDataForStep(flowSessionId: string, flowStepId: string, successCallback: (data: { GetDefaultHtmlEditorDataForStepResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetDefaultHtmlEditorDataForStepResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	GetDefaultHtmlEditorDataForStep(flowSessionId: string, flowStepId: string): { GetDefaultHtmlEditorDataForStepResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	GetDefaultHtmlEditorDataForStepPromise(flowSessionId: string, flowStepId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	GetStepConnectionData(flowSessionId: string, successCallback: (data: { GetStepConnectionDataResult: $D.Framework.Design.Flow.StepConnectionData[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetStepConnectionDataResult: $D.Framework.Design.Flow.StepConnectionData[] }>;

	GetStepConnectionData(flowSessionId: string): { GetStepConnectionDataResult: $D.Framework.Design.Flow.StepConnectionData[] };

	GetStepConnectionDataPromise(flowSessionId: string): Promise<$D.Framework.Design.Flow.StepConnectionData[]>;

	SetStepConnectionDisplayData(flowSessionId: string, displayData: $D.Framework.Design.Flow.StepConnectionData[], successCallback: (data: { SetStepConnectionDisplayDataResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetStepConnectionDisplayDataResult: void }>;

	SetStepConnectionDisplayData(flowSessionId: string, displayData: $D.Framework.Design.Flow.StepConnectionData[]): { SetStepConnectionDisplayDataResult: void };

	SetStepConnectionDisplayDataPromise(flowSessionId: string, displayData: $D.Framework.Design.Flow.StepConnectionData[]): Promise<void>;

	AddStepConnection(flowSessionId: string, fromStepId: string, fromStepPathName: string, fromPortNumber: number, toStepId: string, toPortNumber: number, successCallback: (data: { AddStepConnectionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddStepConnectionResult: void }>;

	AddStepConnection(flowSessionId: string, fromStepId: string, fromStepPathName: string, fromPortNumber: number, toStepId: string, toPortNumber: number): { AddStepConnectionResult: void };

	AddStepConnectionPromise(flowSessionId: string, fromStepId: string, fromStepPathName: string, fromPortNumber: number, toStepId: string, toPortNumber: number): Promise<void>;

	AddStepConnectionWithAdditionalInfo(flowSessionId: string, fromStepId: string, fromStepPathName: string, fromPortNumber: number, toStepId: string, toPortNumber: number, additionalInfo: $D.Framework.Design.Flow.StepConnectionCreationInfo, successCallback: (data: { AddStepConnectionWithAdditionalInfoResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddStepConnectionWithAdditionalInfoResult: void }>;

	AddStepConnectionWithAdditionalInfo(flowSessionId: string, fromStepId: string, fromStepPathName: string, fromPortNumber: number, toStepId: string, toPortNumber: number, additionalInfo: $D.Framework.Design.Flow.StepConnectionCreationInfo): { AddStepConnectionWithAdditionalInfoResult: void };

	AddStepConnectionWithAdditionalInfoPromise(flowSessionId: string, fromStepId: string, fromStepPathName: string, fromPortNumber: number, toStepId: string, toPortNumber: number, additionalInfo: $D.Framework.Design.Flow.StepConnectionCreationInfo): Promise<void>;

	RemoveStepConnection(flowSessionId: string, stepConnectionId: string, successCallback: (data: { RemoveStepConnectionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveStepConnectionResult: void }>;

	RemoveStepConnection(flowSessionId: string, stepConnectionId: string): { RemoveStepConnectionResult: void };

	RemoveStepConnectionPromise(flowSessionId: string, stepConnectionId: string): Promise<void>;

	GetAllFlowEntities(flowSessionId: string, successCallback: (data: { GetAllFlowEntitiesResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllFlowEntitiesResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	GetAllFlowEntities(flowSessionId: string): { GetAllFlowEntitiesResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	GetAllFlowEntitiesPromise(flowSessionId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	GetAnnotations(flowSessionId: string, successCallback: (data: { GetAnnotationsResult: $D.Framework.Design.Flow.Annotations.FlowAnnotation[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAnnotationsResult: $D.Framework.Design.Flow.Annotations.FlowAnnotation[] }>;

	GetAnnotations(flowSessionId: string): { GetAnnotationsResult: $D.Framework.Design.Flow.Annotations.FlowAnnotation[] };

	GetAnnotationsPromise(flowSessionId: string): Promise<$D.Framework.Design.Flow.Annotations.FlowAnnotation[]>;

	UpdateAnnotations(flowSessionId: string, newOrUpdatedAnnotations: $D.Framework.Design.Flow.Annotations.FlowAnnotation[], annotationsToBeDeleted: string[], successCallback: (data: { UpdateAnnotationsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateAnnotationsResult: void }>;

	UpdateAnnotations(flowSessionId: string, newOrUpdatedAnnotations: $D.Framework.Design.Flow.Annotations.FlowAnnotation[], annotationsToBeDeleted: string[]): { UpdateAnnotationsResult: void };

	UpdateAnnotationsPromise(flowSessionId: string, newOrUpdatedAnnotations: $D.Framework.Design.Flow.Annotations.FlowAnnotation[], annotationsToBeDeleted: string[]): Promise<void>;

	GetEditContextForAnnotation(flowSessionId: string, annotationId: string, successCallback: (data: { GetEditContextForAnnotationResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetEditContextForAnnotationResult: string }>;

	GetEditContextForAnnotation(flowSessionId: string, annotationId: string): { GetEditContextForAnnotationResult: string };

	GetEditContextForAnnotationPromise(flowSessionId: string, annotationId: string): Promise<string>;

	GetEditContextForFlow(flowSessionId: string, successCallback: (data: { GetEditContextForFlowResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetEditContextForFlowResult: string }>;

	GetEditContextForFlow(flowSessionId: string): { GetEditContextForFlowResult: string };

	GetEditContextForFlowPromise(flowSessionId: string): Promise<string>;

	GetEditContextForStep(flowSessionId: string, flowStepId: string, includeMapping: boolean, successCallback: (data: { GetEditContextForStepResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetEditContextForStepResult: string }>;

	GetEditContextForStep(flowSessionId: string, flowStepId: string, includeMapping: boolean): { GetEditContextForStepResult: string };

	GetEditContextForStepPromise(flowSessionId: string, flowStepId: string, includeMapping: boolean): Promise<string>;

	GetInputMappingContextForStep(flowSessionId: string, flowStepId: string, outputMappingContextId: string, successCallback: (data: { GetInputMappingContextForStepResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetInputMappingContextForStepResult: string }>;

	GetInputMappingContextForStep(flowSessionId: string, flowStepId: string, outputMappingContextId: string): { GetInputMappingContextForStepResult: string };

	GetInputMappingContextForStepPromise(flowSessionId: string, flowStepId: string, outputMappingContextId: string): Promise<string>;

	GetOutputMappingContextForStep(flowSessionId: string, flowStepId: string, successCallback: (data: { GetOutputMappingContextForStepResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetOutputMappingContextForStepResult: string }>;

	GetOutputMappingContextForStep(flowSessionId: string, flowStepId: string): { GetOutputMappingContextForStepResult: string };

	GetOutputMappingContextForStepPromise(flowSessionId: string, flowStepId: string): Promise<string>;

	GetEditContextForEntities(flowSessionId: string, entityIds: string[], successCallback: (data: { GetEditContextForEntitiesResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetEditContextForEntitiesResult: string }>;

	GetEditContextForEntities(flowSessionId: string, entityIds: string[]): { GetEditContextForEntitiesResult: string };

	GetEditContextForEntitiesPromise(flowSessionId: string, entityIds: string[]): Promise<string>;

	GetEditContextForConnection(flowSessionId: string, connectionId: string, successCallback: (data: { GetEditContextForConnectionResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetEditContextForConnectionResult: string }>;

	GetEditContextForConnection(flowSessionId: string, connectionId: string): { GetEditContextForConnectionResult: string };

	GetEditContextForConnectionPromise(flowSessionId: string, connectionId: string): Promise<string>;

	GetEditContextForFlowInputData(flowSessionId: string, successCallback: (data: { GetEditContextForFlowInputDataResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetEditContextForFlowInputDataResult: string }>;

	GetEditContextForFlowInputData(flowSessionId: string): { GetEditContextForFlowInputDataResult: string };

	GetEditContextForFlowInputDataPromise(flowSessionId: string): Promise<string>;

	GetCustomInputMappingContextId(flowSessionId: string, flowStepId: string, successCallback: (data: { GetCustomInputMappingContextIdResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetCustomInputMappingContextIdResult: string }>;

	GetCustomInputMappingContextId(flowSessionId: string, flowStepId: string): { GetCustomInputMappingContextIdResult: string };

	GetCustomInputMappingContextIdPromise(flowSessionId: string, flowStepId: string): Promise<string>;

	GetCustomDataDescriptionsForStep(flowSessionId: string, flowStepId: string, path: string, descriptionType: $D.Framework.Utilities.Data.DataDescriptionType, successCallback: (data: { GetCustomDataDescriptionsForStepResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetCustomDataDescriptionsForStepResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }>;

	GetCustomDataDescriptionsForStep(flowSessionId: string, flowStepId: string, path: string, descriptionType: $D.Framework.Utilities.Data.DataDescriptionType): { GetCustomDataDescriptionsForStepResult: $D.Framework.Design.Flow.Mapping.DataDescription[] };

	GetCustomDataDescriptionsForStepPromise(flowSessionId: string, flowStepId: string, path: string, descriptionType: $D.Framework.Utilities.Data.DataDescriptionType): Promise<$D.Framework.Design.Flow.Mapping.DataDescription[]>;

	GetValidationIssues(flowSessionId: string, successCallback: (data: { GetValidationIssuesResult: $D.Framework.ValidationIssue[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetValidationIssuesResult: $D.Framework.ValidationIssue[] }>;

	GetValidationIssues(flowSessionId: string): { GetValidationIssuesResult: $D.Framework.ValidationIssue[] };

	GetValidationIssuesPromise(flowSessionId: string): Promise<$D.Framework.ValidationIssue[]>;

	GetValidationIssuesForStep(flowSessionId: string, flowStepId: string, successCallback: (data: { GetValidationIssuesForStepResult: $D.Framework.ValidationIssue[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetValidationIssuesForStepResult: $D.Framework.ValidationIssue[] }>;

	GetValidationIssuesForStep(flowSessionId: string, flowStepId: string): { GetValidationIssuesForStepResult: $D.Framework.ValidationIssue[] };

	GetValidationIssuesForStepPromise(flowSessionId: string, flowStepId: string): Promise<$D.Framework.ValidationIssue[]>;

	IgnoreValidationIssue(flowSessionId: string, issue: $D.Framework.ValidationIssue, successCallback: (data: { IgnoreValidationIssueResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ IgnoreValidationIssueResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }>;

	IgnoreValidationIssue(flowSessionId: string, issue: $D.Framework.ValidationIssue): { IgnoreValidationIssueResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn };

	IgnoreValidationIssuePromise(flowSessionId: string, issue: $D.Framework.ValidationIssue): Promise<$D.Framework.Design.Flow.FlowEditServiceEventsReturn>;

	UnignoreValidationIssue(flowSessionId: string, issue: $D.Framework.ValidationIssue, successCallback: (data: { UnignoreValidationIssueResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ UnignoreValidationIssueResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }>;

	UnignoreValidationIssue(flowSessionId: string, issue: $D.Framework.ValidationIssue): { UnignoreValidationIssueResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn };

	UnignoreValidationIssuePromise(flowSessionId: string, issue: $D.Framework.ValidationIssue): Promise<$D.Framework.Design.Flow.FlowEditServiceEventsReturn>;

	GetToolboxCategories(flowSessionId: string, nodes: string[], successCallback: (data: { GetToolboxCategoriesResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetToolboxCategoriesResult: string[] }>;

	GetToolboxCategories(flowSessionId: string, nodes: string[]): { GetToolboxCategoriesResult: string[] };

	GetToolboxCategoriesPromise(flowSessionId: string, nodes: string[]): Promise<string[]>;

	GetToolboxStepsInformation(flowSessionId: string, nodes: string[], successCallback: (data: { GetToolboxStepsInformationResult: $D.Framework.Design.Flow.FlowStepToolboxInformation[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetToolboxStepsInformationResult: $D.Framework.Design.Flow.FlowStepToolboxInformation[] }>;

	GetToolboxStepsInformation(flowSessionId: string, nodes: string[]): { GetToolboxStepsInformationResult: $D.Framework.Design.Flow.FlowStepToolboxInformation[] };

	GetToolboxStepsInformationPromise(flowSessionId: string, nodes: string[]): Promise<$D.Framework.Design.Flow.FlowStepToolboxInformation[]>;

	GetToolboxInformationForStep(flowSessionId: string, stepId: string, successCallback: (data: { GetToolboxInformationForStepResult: $D.Framework.Design.Flow.FlowStepToolboxInformation[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetToolboxInformationForStepResult: $D.Framework.Design.Flow.FlowStepToolboxInformation[] }>;

	GetToolboxInformationForStep(flowSessionId: string, stepId: string): { GetToolboxInformationForStepResult: $D.Framework.Design.Flow.FlowStepToolboxInformation[] };

	GetToolboxInformationForStepPromise(flowSessionId: string, stepId: string): Promise<$D.Framework.Design.Flow.FlowStepToolboxInformation[]>;

	SearchToolboxForStep(flowSessionId: string, stepId: string, searchString: string, successCallback: (data: { SearchToolboxForStepResult: $D.Framework.Design.Flow.FlowStepToolboxInformation[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchToolboxForStepResult: $D.Framework.Design.Flow.FlowStepToolboxInformation[] }>;

	SearchToolboxForStep(flowSessionId: string, stepId: string, searchString: string): { SearchToolboxForStepResult: $D.Framework.Design.Flow.FlowStepToolboxInformation[] };

	SearchToolboxForStepPromise(flowSessionId: string, stepId: string, searchString: string): Promise<$D.Framework.Design.Flow.FlowStepToolboxInformation[]>;

	GetToolboxStepsForDataDescription(data: $D.Framework.Design.Flow.Mapping.DataDescription, flowSessionId: string, successCallback: (data: { GetToolboxStepsForDataDescriptionResult: $D.Framework.Design.Flow.FlowStepToolboxInformation[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetToolboxStepsForDataDescriptionResult: $D.Framework.Design.Flow.FlowStepToolboxInformation[] }>;

	GetToolboxStepsForDataDescription(data: $D.Framework.Design.Flow.Mapping.DataDescription, flowSessionId: string): { GetToolboxStepsForDataDescriptionResult: $D.Framework.Design.Flow.FlowStepToolboxInformation[] };

	GetToolboxStepsForDataDescriptionPromise(data: $D.Framework.Design.Flow.Mapping.DataDescription, flowSessionId: string): Promise<$D.Framework.Design.Flow.FlowStepToolboxInformation[]>;

	SearchToolboxStepsForDataDescription(data: $D.Framework.Design.Flow.Mapping.DataDescription, flowSessionId: string, searchText: string, successCallback: (data: { SearchToolboxStepsForDataDescriptionResult: $D.Framework.Design.Flow.FlowStepToolboxInformation[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchToolboxStepsForDataDescriptionResult: $D.Framework.Design.Flow.FlowStepToolboxInformation[] }>;

	SearchToolboxStepsForDataDescription(data: $D.Framework.Design.Flow.Mapping.DataDescription, flowSessionId: string, searchText: string): { SearchToolboxStepsForDataDescriptionResult: $D.Framework.Design.Flow.FlowStepToolboxInformation[] };

	SearchToolboxStepsForDataDescriptionPromise(data: $D.Framework.Design.Flow.Mapping.DataDescription, flowSessionId: string, searchText: string): Promise<$D.Framework.Design.Flow.FlowStepToolboxInformation[]>;

	SearchToolboxStepsInformation(flowSessionId: string, searchString: string, maxRecords: number, successCallback: (data: { SearchToolboxStepsInformationResult: $D.Framework.Design.Flow.FlowStepToolboxInformation[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchToolboxStepsInformationResult: $D.Framework.Design.Flow.FlowStepToolboxInformation[] }>;

	SearchToolboxStepsInformation(flowSessionId: string, searchString: string, maxRecords: number): { SearchToolboxStepsInformationResult: $D.Framework.Design.Flow.FlowStepToolboxInformation[] };

	SearchToolboxStepsInformationPromise(flowSessionId: string, searchString: string, maxRecords: number): Promise<$D.Framework.Design.Flow.FlowStepToolboxInformation[]>;

	GetToolboxFavoriteSteps(flowSessionId: string, successCallback: (data: { GetToolboxFavoriteStepsResult: $D.Framework.Design.Flow.FlowStepToolboxInformation[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetToolboxFavoriteStepsResult: $D.Framework.Design.Flow.FlowStepToolboxInformation[] }>;

	GetToolboxFavoriteSteps(flowSessionId: string): { GetToolboxFavoriteStepsResult: $D.Framework.Design.Flow.FlowStepToolboxInformation[] };

	GetToolboxFavoriteStepsPromise(flowSessionId: string): Promise<$D.Framework.Design.Flow.FlowStepToolboxInformation[]>;

	GetToolboxRecentSteps(flowSessionId: string, successCallback: (data: { GetToolboxRecentStepsResult: $D.Framework.Data.ORMapper.EntityHeaderData[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetToolboxRecentStepsResult: $D.Framework.Data.ORMapper.EntityHeaderData[] }>;

	GetToolboxRecentSteps(flowSessionId: string): { GetToolboxRecentStepsResult: $D.Framework.Data.ORMapper.EntityHeaderData[] };

	GetToolboxRecentStepsPromise(flowSessionId: string): Promise<$D.Framework.Data.ORMapper.EntityHeaderData[]>;

	SetWrapperStepTarget(flowSessionId: string, flowStepId: string, registrationId: string, successCallback: (data: { SetWrapperStepTargetResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetWrapperStepTargetResult: void }>;

	SetWrapperStepTarget(flowSessionId: string, flowStepId: string, registrationId: string): { SetWrapperStepTargetResult: void };

	SetWrapperStepTargetPromise(flowSessionId: string, flowStepId: string, registrationId: string): Promise<void>;

	UpdateWrapperSteps(flowSessionId: string, registrationId: string, successCallback: (data: { UpdateWrapperStepsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateWrapperStepsResult: void }>;

	UpdateWrapperSteps(flowSessionId: string, registrationId: string): { UpdateWrapperStepsResult: void };

	UpdateWrapperStepsPromise(flowSessionId: string, registrationId: string): Promise<void>;

	GroupSteps(flowSessionId: string, flowStepIds: string[], successCallback: (data: { GroupStepsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ GroupStepsResult: void }>;

	GroupSteps(flowSessionId: string, flowStepIds: string[]): { GroupStepsResult: void };

	GroupStepsPromise(flowSessionId: string, flowStepIds: string[]): Promise<void>;

	GroupStepsWithEvents(flowSessionId: string, flowStepIds: string[], successCallback: (data: { GroupStepsWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ GroupStepsWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }>;

	GroupStepsWithEvents(flowSessionId: string, flowStepIds: string[]): { GroupStepsWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn };

	GroupStepsWithEventsPromise(flowSessionId: string, flowStepIds: string[]): Promise<$D.Framework.Design.Flow.FlowEditServiceEventsReturn>;

	UnGroupSteps(flowSessionId: string, groupId: string, successCallback: (data: { UnGroupStepsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UnGroupStepsResult: void }>;

	UnGroupSteps(flowSessionId: string, groupId: string): { UnGroupStepsResult: void };

	UnGroupStepsPromise(flowSessionId: string, groupId: string): Promise<void>;

	UnGroupStepsWithEvents(flowSessionId: string, groupId: string, successCallback: (data: { UnGroupStepsWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ UnGroupStepsWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }>;

	UnGroupStepsWithEvents(flowSessionId: string, groupId: string): { UnGroupStepsWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn };

	UnGroupStepsWithEventsPromise(flowSessionId: string, groupId: string): Promise<$D.Framework.Design.Flow.FlowEditServiceEventsReturn>;

	CanPasteFlowStep(clientId: string, successCallback: (data: { CanPasteFlowStepResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ CanPasteFlowStepResult: boolean }>;

	CanPasteFlowStep(clientId: string): { CanPasteFlowStepResult: boolean };

	CanPasteFlowStepPromise(clientId: string): Promise<boolean>;

	CopyFlowStep(clientId: string, flowSessionId: string, flowStepId: string, successCallback: (data: { CopyFlowStepResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CopyFlowStepResult: void }>;

	CopyFlowStep(clientId: string, flowSessionId: string, flowStepId: string): { CopyFlowStepResult: void };

	CopyFlowStepPromise(clientId: string, flowSessionId: string, flowStepId: string): Promise<void>;

	CutFlowStep(clientId: string, flowSessionId: string, flowStepId: string, successCallback: (data: { CutFlowStepResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CutFlowStepResult: void }>;

	CutFlowStep(clientId: string, flowSessionId: string, flowStepId: string): { CutFlowStepResult: void };

	CutFlowStepPromise(clientId: string, flowSessionId: string, flowStepId: string): Promise<void>;

	PasteFlowStep(clientId: string, flowSessionId: string, successCallback: (data: { PasteFlowStepResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ PasteFlowStepResult: boolean }>;

	PasteFlowStep(clientId: string, flowSessionId: string): { PasteFlowStepResult: boolean };

	PasteFlowStepPromise(clientId: string, flowSessionId: string): Promise<boolean>;

	CreateLinkedRuleForStep(flowSessionId: string, flowStepId: string, ruleName: string, dataPaths: string[], successCallback: (data: { CreateLinkedRuleForStepResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateLinkedRuleForStepResult: string }>;

	CreateLinkedRuleForStep(flowSessionId: string, flowStepId: string, ruleName: string, dataPaths: string[]): { CreateLinkedRuleForStepResult: string };

	CreateLinkedRuleForStepPromise(flowSessionId: string, flowStepId: string, ruleName: string, dataPaths: string[]): Promise<string>;

	CreateLinkedTruthTableForStep(flowSessionId: string, flowStepId: string, truthTableName: string, dataPaths: string[], successCallback: (data: { CreateLinkedTruthTableForStepResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateLinkedTruthTableForStepResult: string }>;

	CreateLinkedTruthTableForStep(flowSessionId: string, flowStepId: string, truthTableName: string, dataPaths: string[]): { CreateLinkedTruthTableForStepResult: string };

	CreateLinkedTruthTableForStepPromise(flowSessionId: string, flowStepId: string, truthTableName: string, dataPaths: string[]): Promise<string>;

	CreateLinkedFlowForStep(flowSessionId: string, flowStepId: string, flowName: string, dataPaths: string[], successCallback: (data: { CreateLinkedFlowForStepResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateLinkedFlowForStepResult: string }>;

	CreateLinkedFlowForStep(flowSessionId: string, flowStepId: string, flowName: string, dataPaths: string[]): { CreateLinkedFlowForStepResult: string };

	CreateLinkedFlowForStepPromise(flowSessionId: string, flowStepId: string, flowName: string, dataPaths: string[]): Promise<string>;

	SetAnchorData(flowSessionId: string, flowStepId: string, dataPath: string, successCallback: (data: { SetAnchorDataResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetAnchorDataResult: void }>;

	SetAnchorData(flowSessionId: string, flowStepId: string, dataPath: string): { SetAnchorDataResult: void };

	SetAnchorDataPromise(flowSessionId: string, flowStepId: string, dataPath: string): Promise<void>;

	GetFlowInfo(flowId: string, successCallback: (data: { GetFlowInfoResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.FlowInfo }) => any, errorCallback?: () => any): JQueryPromise<{ GetFlowInfoResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.FlowInfo }>;

	GetFlowInfo(flowId: string): { GetFlowInfoResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.FlowInfo };

	GetFlowInfoPromise(flowId: string): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.FlowInfo>;

	OpenAndGetAllFlowEntities(flowId: string, successCallback: (data: { OpenAndGetAllFlowEntitiesResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ OpenAndGetAllFlowEntitiesResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	OpenAndGetAllFlowEntities(flowId: string): { OpenAndGetAllFlowEntitiesResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	OpenAndGetAllFlowEntitiesPromise(flowId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	UpdateFlowStepPosition(flowSessionId: string, stepId: string, x: number, y: number, width: number, height: number, successCallback: (data: { UpdateFlowStepPositionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateFlowStepPositionResult: void }>;

	UpdateFlowStepPosition(flowSessionId: string, stepId: string, x: number, y: number, width: number, height: number): { UpdateFlowStepPositionResult: void };

	UpdateFlowStepPositionPromise(flowSessionId: string, stepId: string, x: number, y: number, width: number, height: number): Promise<void>;

	UpdateFlowStepText(flowSessionId: string, stepId: string, text: string, successCallback: (data: { UpdateFlowStepTextResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateFlowStepTextResult: void }>;

	UpdateFlowStepText(flowSessionId: string, stepId: string, text: string): { UpdateFlowStepTextResult: void };

	UpdateFlowStepTextPromise(flowSessionId: string, stepId: string, text: string): Promise<void>;

	GetQuickAddTreeNodes(flowSessionId: string, stepId: string, outcomePath: string, parent: $D.Framework.Design.Flow.QuickAddTreeNode, successCallback: (data: { GetQuickAddTreeNodesResult: $D.Framework.Design.Flow.QuickAddTreeNode[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetQuickAddTreeNodesResult: $D.Framework.Design.Flow.QuickAddTreeNode[] }>;

	GetQuickAddTreeNodes(flowSessionId: string, stepId: string, outcomePath: string, parent: $D.Framework.Design.Flow.QuickAddTreeNode): { GetQuickAddTreeNodesResult: $D.Framework.Design.Flow.QuickAddTreeNode[] };

	GetQuickAddTreeNodesPromise(flowSessionId: string, stepId: string, outcomePath: string, parent: $D.Framework.Design.Flow.QuickAddTreeNode): Promise<$D.Framework.Design.Flow.QuickAddTreeNode[]>;

	GetQuickAddDataTreeNodes(flowSessionId: string, stepId: string, outcomePath: string, flowDataPath: string, parent: $D.Framework.Design.Flow.QuickAddTreeNode, successCallback: (data: { GetQuickAddDataTreeNodesResult: $D.Framework.Design.Flow.QuickAddTreeNode[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetQuickAddDataTreeNodesResult: $D.Framework.Design.Flow.QuickAddTreeNode[] }>;

	GetQuickAddDataTreeNodes(flowSessionId: string, stepId: string, outcomePath: string, flowDataPath: string, parent: $D.Framework.Design.Flow.QuickAddTreeNode): { GetQuickAddDataTreeNodesResult: $D.Framework.Design.Flow.QuickAddTreeNode[] };

	GetQuickAddDataTreeNodesPromise(flowSessionId: string, stepId: string, outcomePath: string, flowDataPath: string, parent: $D.Framework.Design.Flow.QuickAddTreeNode): Promise<$D.Framework.Design.Flow.QuickAddTreeNode[]>;

	SearchQuickAddTree(flowSessionId: string, stepId: string, outcomePath: string, flowDataPath: string, criteria: string, successCallback: (data: { SearchQuickAddTreeResult: $D.Framework.Design.Flow.QuickAddTreeNode[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchQuickAddTreeResult: $D.Framework.Design.Flow.QuickAddTreeNode[] }>;

	SearchQuickAddTree(flowSessionId: string, stepId: string, outcomePath: string, flowDataPath: string, criteria: string): { SearchQuickAddTreeResult: $D.Framework.Design.Flow.QuickAddTreeNode[] };

	SearchQuickAddTreePromise(flowSessionId: string, stepId: string, outcomePath: string, flowDataPath: string, criteria: string): Promise<$D.Framework.Design.Flow.QuickAddTreeNode[]>;

	StartSampling(sessionId: string, samplingId: string, successCallback: (data: { StartSamplingResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ StartSamplingResult: void }>;

	StartSampling(sessionId: string, samplingId: string): { StartSamplingResult: void };

	StartSamplingPromise(sessionId: string, samplingId: string): Promise<void>;

	StopSampling(sessionId: string, successCallback: (data: { StopSamplingResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ StopSamplingResult: void }>;

	StopSampling(sessionId: string): { StopSamplingResult: void };

	StopSamplingPromise(sessionId: string): Promise<void>;

	AddStepWithEvents(flowSessionId: string, stepConfigNodes: string[], stepConfigId: string, x: number, y: number, width: number, height: number, additionalInfo: $D.Framework.Design.Flow.StepCreationInfo, successCallback: (data: { AddStepWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ AddStepWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }>;

	AddStepWithEvents(flowSessionId: string, stepConfigNodes: string[], stepConfigId: string, x: number, y: number, width: number, height: number, additionalInfo: $D.Framework.Design.Flow.StepCreationInfo): { AddStepWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn };

	AddStepWithEventsPromise(flowSessionId: string, stepConfigNodes: string[], stepConfigId: string, x: number, y: number, width: number, height: number, additionalInfo: $D.Framework.Design.Flow.StepCreationInfo): Promise<$D.Framework.Design.Flow.FlowEditServiceEventsReturn>;

	RemoveFlowEntitiesWithEvents(flowSessionId: string, flowStepIds: string[], flowLinkIds: string[], successCallback: (data: { RemoveFlowEntitiesWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveFlowEntitiesWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }>;

	RemoveFlowEntitiesWithEvents(flowSessionId: string, flowStepIds: string[], flowLinkIds: string[]): { RemoveFlowEntitiesWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn };

	RemoveFlowEntitiesWithEventsPromise(flowSessionId: string, flowStepIds: string[], flowLinkIds: string[]): Promise<$D.Framework.Design.Flow.FlowEditServiceEventsReturn>;

	DuplicateStepWithEvents(flowSessionId: string, flowStepId: string, x: number, y: number, additionalInfo: $D.Framework.Design.Flow.StepCreationInfo, successCallback: (data: { DuplicateStepWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ DuplicateStepWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }>;

	DuplicateStepWithEvents(flowSessionId: string, flowStepId: string, x: number, y: number, additionalInfo: $D.Framework.Design.Flow.StepCreationInfo): { DuplicateStepWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn };

	DuplicateStepWithEventsPromise(flowSessionId: string, flowStepId: string, x: number, y: number, additionalInfo: $D.Framework.Design.Flow.StepCreationInfo): Promise<$D.Framework.Design.Flow.FlowEditServiceEventsReturn>;

	PlaceStepOnConnectionWithEvents(flowSessionId: string, stepConnectionId: string, stepConfigNodes: string[], stepConfigId: string, x: number, y: number, width: number, height: number, additionalInfo: $D.Framework.Design.Flow.StepCreationInfo, successCallback: (data: { PlaceStepOnConnectionWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ PlaceStepOnConnectionWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }>;

	PlaceStepOnConnectionWithEvents(flowSessionId: string, stepConnectionId: string, stepConfigNodes: string[], stepConfigId: string, x: number, y: number, width: number, height: number, additionalInfo: $D.Framework.Design.Flow.StepCreationInfo): { PlaceStepOnConnectionWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn };

	PlaceStepOnConnectionWithEventsPromise(flowSessionId: string, stepConnectionId: string, stepConfigNodes: string[], stepConfigId: string, x: number, y: number, width: number, height: number, additionalInfo: $D.Framework.Design.Flow.StepCreationInfo): Promise<$D.Framework.Design.Flow.FlowEditServiceEventsReturn>;

	ReplaceStepWithEvents(flowSessionId: string, existingStepId: string, stepConfigNodes: string[], stepConfigId: string, additionalInfo: $D.Framework.Design.Flow.StepCreationInfo, successCallback: (data: { ReplaceStepWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ ReplaceStepWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }>;

	ReplaceStepWithEvents(flowSessionId: string, existingStepId: string, stepConfigNodes: string[], stepConfigId: string, additionalInfo: $D.Framework.Design.Flow.StepCreationInfo): { ReplaceStepWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn };

	ReplaceStepWithEventsPromise(flowSessionId: string, existingStepId: string, stepConfigNodes: string[], stepConfigId: string, additionalInfo: $D.Framework.Design.Flow.StepCreationInfo): Promise<$D.Framework.Design.Flow.FlowEditServiceEventsReturn>;

	CutStepWithEvents(clientId: string, flowSessionId: string, flowStepId: string, successCallback: (data: { CutStepWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ CutStepWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }>;

	CutStepWithEvents(clientId: string, flowSessionId: string, flowStepId: string): { CutStepWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn };

	CutStepWithEventsPromise(clientId: string, flowSessionId: string, flowStepId: string): Promise<$D.Framework.Design.Flow.FlowEditServiceEventsReturn>;

	PasteStepWithEvents(clientId: string, flowSessionId: string, successCallback: (data: { PasteStepWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ PasteStepWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }>;

	PasteStepWithEvents(clientId: string, flowSessionId: string): { PasteStepWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn };

	PasteStepWithEventsPromise(clientId: string, flowSessionId: string): Promise<$D.Framework.Design.Flow.FlowEditServiceEventsReturn>;

	AddStepConnectionWithEvents(flowSessionId: string, fromStepId: string, fromStepPathName: string, fromPortNumber: number, toStepId: string, toPortNumber: number, additionalInfo: $D.Framework.Design.Flow.StepConnectionCreationInfo, successCallback: (data: { AddStepConnectionWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ AddStepConnectionWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }>;

	AddStepConnectionWithEvents(flowSessionId: string, fromStepId: string, fromStepPathName: string, fromPortNumber: number, toStepId: string, toPortNumber: number, additionalInfo: $D.Framework.Design.Flow.StepConnectionCreationInfo): { AddStepConnectionWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn };

	AddStepConnectionWithEventsPromise(flowSessionId: string, fromStepId: string, fromStepPathName: string, fromPortNumber: number, toStepId: string, toPortNumber: number, additionalInfo: $D.Framework.Design.Flow.StepConnectionCreationInfo): Promise<$D.Framework.Design.Flow.FlowEditServiceEventsReturn>;

	UpdateDisplayDatasWithEvents(flowSessionId: string, newData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], successCallback: (data: { UpdateDisplayDatasWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateDisplayDatasWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }>;

	UpdateDisplayDatasWithEvents(flowSessionId: string, newData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): { UpdateDisplayDatasWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn };

	UpdateDisplayDatasWithEventsPromise(flowSessionId: string, newData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): Promise<$D.Framework.Design.Flow.FlowEditServiceEventsReturn>;

	UpdateStepPositionWithEvents(flowSessionId: string, infos: $D.Framework.Design.Flow.FlowStepPositionInfo[], successCallback: (data: { UpdateStepPositionWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateStepPositionWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }>;

	UpdateStepPositionWithEvents(flowSessionId: string, infos: $D.Framework.Design.Flow.FlowStepPositionInfo[]): { UpdateStepPositionWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn };

	UpdateStepPositionWithEventsPromise(flowSessionId: string, infos: $D.Framework.Design.Flow.FlowStepPositionInfo[]): Promise<$D.Framework.Design.Flow.FlowEditServiceEventsReturn>;

	UpdateStepTextWithEvents(flowSessionId: string, stepId: string, text: string, successCallback: (data: { UpdateStepTextWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateStepTextWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }>;

	UpdateStepTextWithEvents(flowSessionId: string, stepId: string, text: string): { UpdateStepTextWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn };

	UpdateStepTextWithEventsPromise(flowSessionId: string, stepId: string, text: string): Promise<$D.Framework.Design.Flow.FlowEditServiceEventsReturn>;

	UpdateAnnotationsWithEvents(flowSessionId: string, newOrUpdatedAnnotations: $D.Framework.Design.Flow.Annotations.FlowAnnotation[], annotationsToBeDeleted: string[], successCallback: (data: { UpdateAnnotationsWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateAnnotationsWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }>;

	UpdateAnnotationsWithEvents(flowSessionId: string, newOrUpdatedAnnotations: $D.Framework.Design.Flow.Annotations.FlowAnnotation[], annotationsToBeDeleted: string[]): { UpdateAnnotationsWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn };

	UpdateAnnotationsWithEventsPromise(flowSessionId: string, newOrUpdatedAnnotations: $D.Framework.Design.Flow.Annotations.FlowAnnotation[], annotationsToBeDeleted: string[]): Promise<$D.Framework.Design.Flow.FlowEditServiceEventsReturn>;

	SetAnchorDataWithEvents(flowSessionId: string, flowStepId: string, dataPath: string, successCallback: (data: { SetAnchorDataWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ SetAnchorDataWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }>;

	SetAnchorDataWithEvents(flowSessionId: string, flowStepId: string, dataPath: string): { SetAnchorDataWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn };

	SetAnchorDataWithEventsPromise(flowSessionId: string, flowStepId: string, dataPath: string): Promise<$D.Framework.Design.Flow.FlowEditServiceEventsReturn>;

	SetWrapperStepTargetWithEvents(flowSessionId: string, flowStepId: string, registrationId: string, successCallback: (data: { SetWrapperStepTargetWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ SetWrapperStepTargetWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }>;

	SetWrapperStepTargetWithEvents(flowSessionId: string, flowStepId: string, registrationId: string): { SetWrapperStepTargetWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn };

	SetWrapperStepTargetWithEventsPromise(flowSessionId: string, flowStepId: string, registrationId: string): Promise<$D.Framework.Design.Flow.FlowEditServiceEventsReturn>;

	CompareFlowVersions(flowId: string, leftVersionId: string, rightVersionId: string, successCallback: (data: { CompareFlowVersionsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ CompareFlowVersionsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	CompareFlowVersions(flowId: string, leftVersionId: string, rightVersionId: string): { CompareFlowVersionsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	CompareFlowVersionsPromise(flowId: string, leftVersionId: string, rightVersionId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	SetDesignerInfo(sessionId: string, info: $D.Framework.Design.Flow.Service.Edit.DesignerInfo, successCallback: (data: { SetDesignerInfoResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetDesignerInfoResult: void }>;

	SetDesignerInfo(sessionId: string, info: $D.Framework.Design.Flow.Service.Edit.DesignerInfo): { SetDesignerInfoResult: void };

	SetDesignerInfoPromise(sessionId: string, info: $D.Framework.Design.Flow.Service.Edit.DesignerInfo): Promise<void>;

	SetDesignerChanged(sessionId: string, successCallback: (data: { SetDesignerChangedResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetDesignerChangedResult: void }>;

	SetDesignerChanged(sessionId: string): { SetDesignerChangedResult: void };

	SetDesignerChangedPromise(sessionId: string): Promise<void>;

	RunFlowValidations(sessionId: string, successCallback: (data: { RunFlowValidationsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RunFlowValidationsResult: void }>;

	RunFlowValidations(sessionId: string): { RunFlowValidationsResult: void };

	RunFlowValidationsPromise(sessionId: string): Promise<void>;

	GetFlowInfoFromCache(flowSessionId: string, successCallback: (data: { GetFlowInfoFromCacheResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ GetFlowInfoFromCacheResult: any }>;

	GetFlowInfoFromCache(flowSessionId: string): { GetFlowInfoFromCacheResult: any };

	GetFlowInfoFromCachePromise(flowSessionId: string): Promise<any>;

	IsFlowInfoCacheOwner(flowSessionId: string, successCallback: (data: { IsFlowInfoCacheOwnerResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ IsFlowInfoCacheOwnerResult: boolean }>;

	IsFlowInfoCacheOwner(flowSessionId: string): { IsFlowInfoCacheOwnerResult: boolean };

	IsFlowInfoCacheOwnerPromise(flowSessionId: string): Promise<boolean>;

	RemovesFlowInfoCacheOwner(formSessionInfoId: string, successCallback: (data: { RemovesFlowInfoCacheOwnerResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ RemovesFlowInfoCacheOwnerResult: boolean }>;

	RemovesFlowInfoCacheOwner(formSessionInfoId: string): { RemovesFlowInfoCacheOwnerResult: boolean };

	RemovesFlowInfoCacheOwnerPromise(formSessionInfoId: string): Promise<boolean>;

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
	FlowEditService(): FlowEditServiceStatic;
}
