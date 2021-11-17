/// <reference path="./datatypes._base.d.ts" />

interface RuleEditServiceStatic {

	OpenRuleForEditing(ruleId: string, successCallback: (data: { OpenRuleForEditingResult: $D.Framework.Design.Flow.Service.RuleEditSession }) => any, errorCallback?: () => any): JQueryPromise<{ OpenRuleForEditingResult: $D.Framework.Design.Flow.Service.RuleEditSession }>;

	OpenRuleForEditing(ruleId: string): { OpenRuleForEditingResult: $D.Framework.Design.Flow.Service.RuleEditSession };

	OpenRuleForEditingPromise(ruleId: string): Promise<$D.Framework.Design.Flow.Service.RuleEditSession>;

	RuleHasChanges(ruleSessionId: string, successCallback: (data: { RuleHasChangesResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ RuleHasChangesResult: boolean }>;

	RuleHasChanges(ruleSessionId: string): { RuleHasChangesResult: boolean };

	RuleHasChangesPromise(ruleSessionId: string): Promise<boolean>;

	SaveRule(ruleSessionId: string, successCallback: (data: { SaveRuleResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveRuleResult: void }>;

	SaveRule(ruleSessionId: string): { SaveRuleResult: void };

	SaveRulePromise(ruleSessionId: string): Promise<void>;

	SaveRuleWithPreview(ruleSessionId: string, preview: number[], thumbnail: number[], dispose: boolean, successCallback: (data: { SaveRuleWithPreviewResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveRuleWithPreviewResult: void }>;

	SaveRuleWithPreview(ruleSessionId: string, preview: number[], thumbnail: number[], dispose: boolean): { SaveRuleWithPreviewResult: void };

	SaveRuleWithPreviewPromise(ruleSessionId: string, preview: number[], thumbnail: number[], dispose: boolean): Promise<void>;

	SaveRuleWithPreviewAndComment(ruleSessionId: string, preview: number[], thumbnail: number[], comment: string, dispose: boolean, successCallback: (data: { SaveRuleWithPreviewAndCommentResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveRuleWithPreviewAndCommentResult: void }>;

	SaveRuleWithPreviewAndComment(ruleSessionId: string, preview: number[], thumbnail: number[], comment: string, dispose: boolean): { SaveRuleWithPreviewAndCommentResult: void };

	SaveRuleWithPreviewAndCommentPromise(ruleSessionId: string, preview: number[], thumbnail: number[], comment: string, dispose: boolean): Promise<void>;

	CancelRuleEdit(ruleSessionId: string, successCallback: (data: { CancelRuleEditResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CancelRuleEditResult: void }>;

	CancelRuleEdit(ruleSessionId: string): { CancelRuleEditResult: void };

	CancelRuleEditPromise(ruleSessionId: string): Promise<void>;

	GetDataDescriptions(ruleSessionId: string, successCallback: (data: { GetDataDescriptionsResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetDataDescriptionsResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }>;

	GetDataDescriptions(ruleSessionId: string): { GetDataDescriptionsResult: $D.Framework.Design.Flow.Mapping.DataDescription[] };

	GetDataDescriptionsPromise(ruleSessionId: string): Promise<$D.Framework.Design.Flow.Mapping.DataDescription[]>;

	GetSubDataDescriptions(ruleSessionId: string, path: string, successCallback: (data: { GetSubDataDescriptionsResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetSubDataDescriptionsResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }>;

	GetSubDataDescriptions(ruleSessionId: string, path: string): { GetSubDataDescriptionsResult: $D.Framework.Design.Flow.Mapping.DataDescription[] };

	GetSubDataDescriptionsPromise(ruleSessionId: string, path: string): Promise<$D.Framework.Design.Flow.Mapping.DataDescription[]>;

	GetDataDescriptionsForStep(ruleSessionId: string, ruleStepId: string, path: string, successCallback: (data: { GetDataDescriptionsForStepResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetDataDescriptionsForStepResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }>;

	GetDataDescriptionsForStep(ruleSessionId: string, ruleStepId: string, path: string): { GetDataDescriptionsForStepResult: $D.Framework.Design.Flow.Mapping.DataDescription[] };

	GetDataDescriptionsForStepPromise(ruleSessionId: string, ruleStepId: string, path: string): Promise<$D.Framework.Design.Flow.Mapping.DataDescription[]>;

	GetDataDescriptionsWithValueForStep(sessionId: string, stepId: string, path: string, successCallback: (data: { GetDataDescriptionsWithValueForStepResult: $D.Framework.Design.Flow.Service.Edit.DataDescriptionWithValue[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetDataDescriptionsWithValueForStepResult: $D.Framework.Design.Flow.Service.Edit.DataDescriptionWithValue[] }>;

	GetDataDescriptionsWithValueForStep(sessionId: string, stepId: string, path: string): { GetDataDescriptionsWithValueForStepResult: $D.Framework.Design.Flow.Service.Edit.DataDescriptionWithValue[] };

	GetDataDescriptionsWithValueForStepPromise(sessionId: string, stepId: string, path: string): Promise<$D.Framework.Design.Flow.Service.Edit.DataDescriptionWithValue[]>;

	SearchDataDescriptions(ruleSessionId: string, criteria: string, successCallback: (data: { SearchDataDescriptionsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchDataDescriptionsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	SearchDataDescriptions(ruleSessionId: string, criteria: string): { SearchDataDescriptionsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	SearchDataDescriptionsPromise(ruleSessionId: string, criteria: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	SearchDataDescriptionsForStep(ruleSessionId: string, ruleStepId: string, criteria: string, successCallback: (data: { SearchDataDescriptionsForStepResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchDataDescriptionsForStepResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	SearchDataDescriptionsForStep(ruleSessionId: string, ruleStepId: string, criteria: string): { SearchDataDescriptionsForStepResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	SearchDataDescriptionsForStepPromise(ruleSessionId: string, ruleStepId: string, criteria: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	SetStepAnchorData(ruleSessionId: string, ruleStepId: string, dataPath: string, successCallback: (data: { SetStepAnchorDataResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetStepAnchorDataResult: void }>;

	SetStepAnchorData(ruleSessionId: string, ruleStepId: string, dataPath: string): { SetStepAnchorDataResult: void };

	SetStepAnchorDataPromise(ruleSessionId: string, ruleStepId: string, dataPath: string): Promise<void>;

	SetTruthTableAnchorData(ruleSessionId: string, columnSteps: string[], dataPath: string, successCallback: (data: { SetTruthTableAnchorDataResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetTruthTableAnchorDataResult: void }>;

	SetTruthTableAnchorData(ruleSessionId: string, columnSteps: string[], dataPath: string): { SetTruthTableAnchorDataResult: void };

	SetTruthTableAnchorDataPromise(ruleSessionId: string, columnSteps: string[], dataPath: string): Promise<void>;

	SetStep(ruleSessionId: string, ruleStepId: string, toolboxNodes: string[], toolboxStepId: string, successCallback: (data: { SetStepResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetStepResult: void }>;

	SetStep(ruleSessionId: string, ruleStepId: string, toolboxNodes: string[], toolboxStepId: string): { SetStepResult: void };

	SetStepPromise(ruleSessionId: string, ruleStepId: string, toolboxNodes: string[], toolboxStepId: string): Promise<void>;

	SetTruthTableStep(ruleSessionId: string, columnSteps: string[], toolboxNodes: string[], toolboxStepId: string, successCallback: (data: { SetTruthTableStepResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetTruthTableStepResult: void }>;

	SetTruthTableStep(ruleSessionId: string, columnSteps: string[], toolboxNodes: string[], toolboxStepId: string): { SetTruthTableStepResult: void };

	SetTruthTableStepPromise(ruleSessionId: string, columnSteps: string[], toolboxNodes: string[], toolboxStepId: string): Promise<void>;

	GetStepDisplayData(ruleSessionId: string, applyFilter: boolean, successCallback: (data: { GetStepDisplayDataResult: $D.Framework.Design.Flow.Service.RuleStepDisplayData[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetStepDisplayDataResult: $D.Framework.Design.Flow.Service.RuleStepDisplayData[] }>;

	GetStepDisplayData(ruleSessionId: string, applyFilter: boolean): { GetStepDisplayDataResult: $D.Framework.Design.Flow.Service.RuleStepDisplayData[] };

	GetStepDisplayDataPromise(ruleSessionId: string, applyFilter: boolean): Promise<$D.Framework.Design.Flow.Service.RuleStepDisplayData[]>;

	AddStep(ruleSessionId: string, parentGroupId: string, successCallback: (data: { AddStepResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddStepResult: void }>;

	AddStep(ruleSessionId: string, parentGroupId: string): { AddStepResult: void };

	AddStepPromise(ruleSessionId: string, parentGroupId: string): Promise<void>;

	AddTruthTableStep(ruleSessionId: string, parentGroupIds: string[], successCallback: (data: { AddTruthTableStepResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ AddTruthTableStepResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	AddTruthTableStep(ruleSessionId: string, parentGroupIds: string[]): { AddTruthTableStepResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	AddTruthTableStepPromise(ruleSessionId: string, parentGroupIds: string[]): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	AddAnyGroupStep(ruleSessionId: string, parentGroupId: string, successCallback: (data: { AddAnyGroupStepResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddAnyGroupStepResult: void }>;

	AddAnyGroupStep(ruleSessionId: string, parentGroupId: string): { AddAnyGroupStepResult: void };

	AddAnyGroupStepPromise(ruleSessionId: string, parentGroupId: string): Promise<void>;

	AddAllGroupStep(ruleSessionId: string, parentGroupId: string, successCallback: (data: { AddAllGroupStepResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddAllGroupStepResult: void }>;

	AddAllGroupStep(ruleSessionId: string, parentGroupId: string): { AddAllGroupStepResult: void };

	AddAllGroupStepPromise(ruleSessionId: string, parentGroupId: string): Promise<void>;

	AddTruthTableRowWithEvents(ruleSessionId: string, rootGroupId: string, successCallback: (data: { AddTruthTableRowWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ AddTruthTableRowWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	AddTruthTableRowWithEvents(ruleSessionId: string, rootGroupId: string): { AddTruthTableRowWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	AddTruthTableRowWithEventsPromise(ruleSessionId: string, rootGroupId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	AddTruthTableRow(ruleSessionId: string, rootGroupId: string, successCallback: (data: { AddTruthTableRowResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddTruthTableRowResult: void }>;

	AddTruthTableRow(ruleSessionId: string, rootGroupId: string): { AddTruthTableRowResult: void };

	AddTruthTableRowPromise(ruleSessionId: string, rootGroupId: string): Promise<void>;

	MoveTruthTableRowUp(ruleSessionId: string, rowId: string, successCallback: (data: { MoveTruthTableRowUpResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ MoveTruthTableRowUpResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	MoveTruthTableRowUp(ruleSessionId: string, rowId: string): { MoveTruthTableRowUpResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	MoveTruthTableRowUpPromise(ruleSessionId: string, rowId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	MoveTruthTableRowDown(ruleSessionId: string, rowId: string, successCallback: (data: { MoveTruthTableRowDownResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ MoveTruthTableRowDownResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	MoveTruthTableRowDown(ruleSessionId: string, rowId: string): { MoveTruthTableRowDownResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	MoveTruthTableRowDownPromise(ruleSessionId: string, rowId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	MoveStepUp(ruleSessionId: string, stepId: string, successCallback: (data: { MoveStepUpResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ MoveStepUpResult: void }>;

	MoveStepUp(ruleSessionId: string, stepId: string): { MoveStepUpResult: void };

	MoveStepUpPromise(ruleSessionId: string, stepId: string): Promise<void>;

	MoveStepDown(ruleSessionId: string, stepId: string, successCallback: (data: { MoveStepDownResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ MoveStepDownResult: void }>;

	MoveStepDown(ruleSessionId: string, stepId: string): { MoveStepDownResult: void };

	MoveStepDownPromise(ruleSessionId: string, stepId: string): Promise<void>;

	RemoveStep(ruleSessionId: string, ruleStepId: string, successCallback: (data: { RemoveStepResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveStepResult: void }>;

	RemoveStep(ruleSessionId: string, ruleStepId: string): { RemoveStepResult: void };

	RemoveStepPromise(ruleSessionId: string, ruleStepId: string): Promise<void>;

	RemoveTruthTableColumn(ruleSessionId: string, ruleStepIds: string[], successCallback: (data: { RemoveTruthTableColumnResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveTruthTableColumnResult: void }>;

	RemoveTruthTableColumn(ruleSessionId: string, ruleStepIds: string[]): { RemoveTruthTableColumnResult: void };

	RemoveTruthTableColumnPromise(ruleSessionId: string, ruleStepIds: string[]): Promise<void>;

	SetTruthTableStepDisabled(ruleSessionId: string, ruleStepId: string, isDisabled: boolean, successCallback: (data: { SetTruthTableStepDisabledResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetTruthTableStepDisabledResult: void }>;

	SetTruthTableStepDisabled(ruleSessionId: string, ruleStepId: string, isDisabled: boolean): { SetTruthTableStepDisabledResult: void };

	SetTruthTableStepDisabledPromise(ruleSessionId: string, ruleStepId: string, isDisabled: boolean): Promise<void>;

	GetEditContextForRule(ruleSessionId: string, successCallback: (data: { GetEditContextForRuleResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetEditContextForRuleResult: string }>;

	GetEditContextForRule(ruleSessionId: string): { GetEditContextForRuleResult: string };

	GetEditContextForRulePromise(ruleSessionId: string): Promise<string>;

	GetEditContextForRuleInputData(ruleSessionId: string, successCallback: (data: { GetEditContextForRuleInputDataResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetEditContextForRuleInputDataResult: string }>;

	GetEditContextForRuleInputData(ruleSessionId: string): { GetEditContextForRuleInputDataResult: string };

	GetEditContextForRuleInputDataPromise(ruleSessionId: string): Promise<string>;

	GetEditContextForRuleOutputs(ruleSessionId: string, successCallback: (data: { GetEditContextForRuleOutputsResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetEditContextForRuleOutputsResult: string }>;

	GetEditContextForRuleOutputs(ruleSessionId: string): { GetEditContextForRuleOutputsResult: string };

	GetEditContextForRuleOutputsPromise(ruleSessionId: string): Promise<string>;

	GetEditContextForStep(ruleSessionId: string, ruleStepId: string, successCallback: (data: { GetEditContextForStepResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetEditContextForStepResult: string }>;

	GetEditContextForStep(ruleSessionId: string, ruleStepId: string): { GetEditContextForStepResult: string };

	GetEditContextForStepPromise(ruleSessionId: string, ruleStepId: string): Promise<string>;

	GetAnchorConverterFlowContextForStep(ruleSessionId: string, ruleStepId: string, successCallback: (data: { GetAnchorConverterFlowContextForStepResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetAnchorConverterFlowContextForStepResult: string }>;

	GetAnchorConverterFlowContextForStep(ruleSessionId: string, ruleStepId: string): { GetAnchorConverterFlowContextForStepResult: string };

	GetAnchorConverterFlowContextForStepPromise(ruleSessionId: string, ruleStepId: string): Promise<string>;

	GetInputMappingContextForStep(ruleSessionId: string, ruleStepId: string, successCallback: (data: { GetInputMappingContextForStepResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetInputMappingContextForStepResult: string }>;

	GetInputMappingContextForStep(ruleSessionId: string, ruleStepId: string): { GetInputMappingContextForStepResult: string };

	GetInputMappingContextForStepPromise(ruleSessionId: string, ruleStepId: string): Promise<string>;

	GetEditContextForTruthTableRowResult(ruleSessionId: string, ruleStepId: string, successCallback: (data: { GetEditContextForTruthTableRowResultResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetEditContextForTruthTableRowResultResult: string }>;

	GetEditContextForTruthTableRowResult(ruleSessionId: string, ruleStepId: string): { GetEditContextForTruthTableRowResultResult: string };

	GetEditContextForTruthTableRowResultPromise(ruleSessionId: string, ruleStepId: string): Promise<string>;

	GetEditContextForTruthTableSpecifiedResult(ruleSessionId: string, ruleStepId: string, resultName: string, successCallback: (data: { GetEditContextForTruthTableSpecifiedResultResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetEditContextForTruthTableSpecifiedResultResult: string }>;

	GetEditContextForTruthTableSpecifiedResult(ruleSessionId: string, ruleStepId: string, resultName: string): { GetEditContextForTruthTableSpecifiedResultResult: string };

	GetEditContextForTruthTableSpecifiedResultPromise(ruleSessionId: string, ruleStepId: string, resultName: string): Promise<string>;

	GetAnchorMappingContextForStep(ruleSessionId: string, ruleStepId: string, successCallback: (data: { GetAnchorMappingContextForStepResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetAnchorMappingContextForStepResult: string }>;

	GetAnchorMappingContextForStep(ruleSessionId: string, ruleStepId: string): { GetAnchorMappingContextForStepResult: string };

	GetAnchorMappingContextForStepPromise(ruleSessionId: string, ruleStepId: string): Promise<string>;

	GetEditContextForTruthTableRow(ruleSessionId: string, ruleStepId: string, startWithMappings: boolean, successCallback: (data: { GetEditContextForTruthTableRowResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetEditContextForTruthTableRowResult: string }>;

	GetEditContextForTruthTableRow(ruleSessionId: string, ruleStepId: string, startWithMappings: boolean): { GetEditContextForTruthTableRowResult: string };

	GetEditContextForTruthTableRowPromise(ruleSessionId: string, ruleStepId: string, startWithMappings: boolean): Promise<string>;

	GetValidationIssues(ruleSessionId: string, successCallback: (data: { GetValidationIssuesResult: $D.Framework.ValidationIssue[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetValidationIssuesResult: $D.Framework.ValidationIssue[] }>;

	GetValidationIssues(ruleSessionId: string): { GetValidationIssuesResult: $D.Framework.ValidationIssue[] };

	GetValidationIssuesPromise(ruleSessionId: string): Promise<$D.Framework.ValidationIssue[]>;

	GetValidationIssuesForStep(ruleSessionId: string, ruleStepId: string, successCallback: (data: { GetValidationIssuesForStepResult: $D.Framework.ValidationIssue[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetValidationIssuesForStepResult: $D.Framework.ValidationIssue[] }>;

	GetValidationIssuesForStep(ruleSessionId: string, ruleStepId: string): { GetValidationIssuesForStepResult: $D.Framework.ValidationIssue[] };

	GetValidationIssuesForStepPromise(ruleSessionId: string, ruleStepId: string): Promise<$D.Framework.ValidationIssue[]>;

	GetToolboxCategories(ruleSessionId: string, ruleStepId: string, nodes: string[], successCallback: (data: { GetToolboxCategoriesResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetToolboxCategoriesResult: string[] }>;

	GetToolboxCategories(ruleSessionId: string, ruleStepId: string, nodes: string[]): { GetToolboxCategoriesResult: string[] };

	GetToolboxCategoriesPromise(ruleSessionId: string, ruleStepId: string, nodes: string[]): Promise<string[]>;

	GetToolboxStepsInformation(ruleSessionId: string, ruleStepId: string, nodes: string[], successCallback: (data: { GetToolboxStepsInformationResult: $D.Framework.Design.Flow.FlowStepToolboxInformation[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetToolboxStepsInformationResult: $D.Framework.Design.Flow.FlowStepToolboxInformation[] }>;

	GetToolboxStepsInformation(ruleSessionId: string, ruleStepId: string, nodes: string[]): { GetToolboxStepsInformationResult: $D.Framework.Design.Flow.FlowStepToolboxInformation[] };

	GetToolboxStepsInformationPromise(ruleSessionId: string, ruleStepId: string, nodes: string[]): Promise<$D.Framework.Design.Flow.FlowStepToolboxInformation[]>;

	GetFlatToolboxStepsInformation(ruleSessionId: string, ruleStepId: string, successCallback: (data: { GetFlatToolboxStepsInformationResult: $D.Framework.Design.Flow.FlowStepToolboxInformation[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetFlatToolboxStepsInformationResult: $D.Framework.Design.Flow.FlowStepToolboxInformation[] }>;

	GetFlatToolboxStepsInformation(ruleSessionId: string, ruleStepId: string): { GetFlatToolboxStepsInformationResult: $D.Framework.Design.Flow.FlowStepToolboxInformation[] };

	GetFlatToolboxStepsInformationPromise(ruleSessionId: string, ruleStepId: string): Promise<$D.Framework.Design.Flow.FlowStepToolboxInformation[]>;

	SearchToolboxStepsInformation(ruleSessionId: string, ruleStepId: string, searchString: string, maxRecords: number, successCallback: (data: { SearchToolboxStepsInformationResult: $D.Framework.Design.Flow.FlowStepToolboxInformation[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchToolboxStepsInformationResult: $D.Framework.Design.Flow.FlowStepToolboxInformation[] }>;

	SearchToolboxStepsInformation(ruleSessionId: string, ruleStepId: string, searchString: string, maxRecords: number): { SearchToolboxStepsInformationResult: $D.Framework.Design.Flow.FlowStepToolboxInformation[] };

	SearchToolboxStepsInformationPromise(ruleSessionId: string, ruleStepId: string, searchString: string, maxRecords: number): Promise<$D.Framework.Design.Flow.FlowStepToolboxInformation[]>;

	CanPasteRuleStep(clientId: string, successCallback: (data: { CanPasteRuleStepResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ CanPasteRuleStepResult: boolean }>;

	CanPasteRuleStep(clientId: string): { CanPasteRuleStepResult: boolean };

	CanPasteRuleStepPromise(clientId: string): Promise<boolean>;

	CopyRuleStep(clientId: string, ruleSessionId: string, ruleStepId: string, successCallback: (data: { CopyRuleStepResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CopyRuleStepResult: void }>;

	CopyRuleStep(clientId: string, ruleSessionId: string, ruleStepId: string): { CopyRuleStepResult: void };

	CopyRuleStepPromise(clientId: string, ruleSessionId: string, ruleStepId: string): Promise<void>;

	PasteRuleStep(clientId: string, ruleSessionId: string, parentRuleStepId: string, successCallback: (data: { PasteRuleStepResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ PasteRuleStepResult: boolean }>;

	PasteRuleStep(clientId: string, ruleSessionId: string, parentRuleStepId: string): { PasteRuleStepResult: boolean };

	PasteRuleStepPromise(clientId: string, ruleSessionId: string, parentRuleStepId: string): Promise<boolean>;

	GetRuleStepEditors(ruleSessionId: string, ruleStepId: string, successCallback: (data: { GetRuleStepEditorsResult: $D.Framework.Design.Properties.ObjectEditorInformation }) => any, errorCallback?: () => any): JQueryPromise<{ GetRuleStepEditorsResult: $D.Framework.Design.Properties.ObjectEditorInformation }>;

	GetRuleStepEditors(ruleSessionId: string, ruleStepId: string): { GetRuleStepEditorsResult: $D.Framework.Design.Properties.ObjectEditorInformation };

	GetRuleStepEditorsPromise(ruleSessionId: string, ruleStepId: string): Promise<$D.Framework.Design.Properties.ObjectEditorInformation>;

	FindDuplicatesRules(ruleSessionId: string, ruleId: string, successCallback: (data: { FindDuplicatesRulesResult: $D.Framework.Design.Flow.Service.Edit.SimilarRule[] }) => any, errorCallback?: () => any): JQueryPromise<{ FindDuplicatesRulesResult: $D.Framework.Design.Flow.Service.Edit.SimilarRule[] }>;

	FindDuplicatesRules(ruleSessionId: string, ruleId: string): { FindDuplicatesRulesResult: $D.Framework.Design.Flow.Service.Edit.SimilarRule[] };

	FindDuplicatesRulesPromise(ruleSessionId: string, ruleId: string): Promise<$D.Framework.Design.Flow.Service.Edit.SimilarRule[]>;

	SetRuleStepNotState(ruleSessionId: string, ruleStepId: string, evaluateWithNot: boolean, successCallback: (data: { SetRuleStepNotStateResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetRuleStepNotStateResult: void }>;

	SetRuleStepNotState(ruleSessionId: string, ruleStepId: string, evaluateWithNot: boolean): { SetRuleStepNotStateResult: void };

	SetRuleStepNotStatePromise(ruleSessionId: string, ruleStepId: string, evaluateWithNot: boolean): Promise<void>;

	SetTruthTableNotState(ruleSessionId: string, columnSteps: string[], evaluateWithNot: boolean, successCallback: (data: { SetTruthTableNotStateResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetTruthTableNotStateResult: void }>;

	SetTruthTableNotState(ruleSessionId: string, columnSteps: string[], evaluateWithNot: boolean): { SetTruthTableNotStateResult: void };

	SetTruthTableNotStatePromise(ruleSessionId: string, columnSteps: string[], evaluateWithNot: boolean): Promise<void>;

	SetTruthTableEditableValue(ruleSessionId: string, ruleStepId: string, cellValue: string, successCallback: (data: { SetTruthTableEditableValueResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetTruthTableEditableValueResult: void }>;

	SetTruthTableEditableValue(ruleSessionId: string, ruleStepId: string, cellValue: string): { SetTruthTableEditableValueResult: void };

	SetTruthTableEditableValuePromise(ruleSessionId: string, ruleStepId: string, cellValue: string): Promise<void>;

	GetStepDisplayDataForDebugger(ruleId: string, successCallback: (data: { GetStepDisplayDataForDebuggerResult: $D.Framework.Design.Flow.Service.RuleStepDisplayData[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetStepDisplayDataForDebuggerResult: $D.Framework.Design.Flow.Service.RuleStepDisplayData[] }>;

	GetStepDisplayDataForDebugger(ruleId: string): { GetStepDisplayDataForDebuggerResult: $D.Framework.Design.Flow.Service.RuleStepDisplayData[] };

	GetStepDisplayDataForDebuggerPromise(ruleId: string): Promise<$D.Framework.Design.Flow.Service.RuleStepDisplayData[]>;

	HasInputData(ruleSessionId: string, successCallback: (data: { HasInputDataResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ HasInputDataResult: boolean }>;

	HasInputData(ruleSessionId: string): { HasInputDataResult: boolean };

	HasInputDataPromise(ruleSessionId: string): Promise<boolean>;

	GetRollForwardPointsForSession(sessionId: string, successCallback: (data: { GetRollForwardPointsForSessionResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetRollForwardPointsForSessionResult: string[] }>;

	GetRollForwardPointsForSession(sessionId: string): { GetRollForwardPointsForSessionResult: string[] };

	GetRollForwardPointsForSessionPromise(sessionId: string): Promise<string[]>;

	GetRollBackPointsForSession(sessionId: string, successCallback: (data: { GetRollBackPointsForSessionResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetRollBackPointsForSessionResult: string[] }>;

	GetRollBackPointsForSession(sessionId: string): { GetRollBackPointsForSessionResult: string[] };

	GetRollBackPointsForSessionPromise(sessionId: string): Promise<string[]>;

	RollBack(sessionId: string, rollbackName: string, successCallback: (data: { RollBackResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RollBackResult: void }>;

	RollBack(sessionId: string, rollbackName: string): { RollBackResult: void };

	RollBackPromise(sessionId: string, rollbackName: string): Promise<void>;

	RollForward(sessionId: string, rollbackName: string, successCallback: (data: { RollForwardResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RollForwardResult: void }>;

	RollForward(sessionId: string, rollbackName: string): { RollForwardResult: void };

	RollForwardPromise(sessionId: string, rollbackName: string): Promise<void>;

	GetAllRuleEntities(sessionId: string, applyFilter: boolean, successCallback: (data: { GetAllRuleEntitiesResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllRuleEntitiesResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	GetAllRuleEntities(sessionId: string, applyFilter: boolean): { GetAllRuleEntitiesResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	GetAllRuleEntitiesPromise(sessionId: string, applyFilter: boolean): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	OpenAndGetAllRuleEntities(ruleId: string, successCallback: (data: { OpenAndGetAllRuleEntitiesResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ OpenAndGetAllRuleEntitiesResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	OpenAndGetAllRuleEntities(ruleId: string): { OpenAndGetAllRuleEntitiesResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	OpenAndGetAllRuleEntitiesPromise(ruleId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	StartSampling(sessionId: string, samplingId: string, successCallback: (data: { StartSamplingResult: $D.Framework.Design.Flow.Service.Debugging.DebugData.RuleProgressDataHolder }) => any, errorCallback?: () => any): JQueryPromise<{ StartSamplingResult: $D.Framework.Design.Flow.Service.Debugging.DebugData.RuleProgressDataHolder }>;

	StartSampling(sessionId: string, samplingId: string): { StartSamplingResult: $D.Framework.Design.Flow.Service.Debugging.DebugData.RuleProgressDataHolder };

	StartSamplingPromise(sessionId: string, samplingId: string): Promise<$D.Framework.Design.Flow.Service.Debugging.DebugData.RuleProgressDataHolder>;

	StopSampling(sessionId: string, successCallback: (data: { StopSamplingResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ StopSamplingResult: void }>;

	StopSampling(sessionId: string): { StopSamplingResult: void };

	StopSamplingPromise(sessionId: string): Promise<void>;

	StartSamplingSet(sessionId: string, categoryId: string, successCallback: (data: { StartSamplingSetResult: $D.Framework.Design.Flow.Service.Debugging.Samples.RuleSampleSetEvaluation }) => any, errorCallback?: () => any): JQueryPromise<{ StartSamplingSetResult: $D.Framework.Design.Flow.Service.Debugging.Samples.RuleSampleSetEvaluation }>;

	StartSamplingSet(sessionId: string, categoryId: string): { StartSamplingSetResult: $D.Framework.Design.Flow.Service.Debugging.Samples.RuleSampleSetEvaluation };

	StartSamplingSetPromise(sessionId: string, categoryId: string): Promise<$D.Framework.Design.Flow.Service.Debugging.Samples.RuleSampleSetEvaluation>;

	StopSampleSet(sessionId: string, successCallback: (data: { StopSampleSetResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ StopSampleSetResult: void }>;

	StopSampleSet(sessionId: string): { StopSampleSetResult: void };

	StopSampleSetPromise(sessionId: string): Promise<void>;

	IgnoreValidationIssue(sessionId: string, issue: $D.Framework.ValidationIssue, successCallback: (data: { IgnoreValidationIssueResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ IgnoreValidationIssueResult: void }>;

	IgnoreValidationIssue(sessionId: string, issue: $D.Framework.ValidationIssue): { IgnoreValidationIssueResult: void };

	IgnoreValidationIssuePromise(sessionId: string, issue: $D.Framework.ValidationIssue): Promise<void>;

	UnignoreValidationIssue(sessionId: string, issue: $D.Framework.ValidationIssue, successCallback: (data: { UnignoreValidationIssueResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UnignoreValidationIssueResult: void }>;

	UnignoreValidationIssue(sessionId: string, issue: $D.Framework.ValidationIssue): { UnignoreValidationIssueResult: void };

	UnignoreValidationIssuePromise(sessionId: string, issue: $D.Framework.ValidationIssue): Promise<void>;

	StartSequenceEditingSession(ruleSessionId: string, stepId: string, successCallback: (data: { StartSequenceEditingSessionResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession }) => any, errorCallback?: () => any): JQueryPromise<{ StartSequenceEditingSessionResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession }>;

	StartSequenceEditingSession(ruleSessionId: string, stepId: string): { StartSequenceEditingSessionResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession };

	StartSequenceEditingSessionPromise(ruleSessionId: string, stepId: string): Promise<$D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession>;

	CompleteSequenceEditingSession(sequenceSessionId: string, successCallback: (data: { CompleteSequenceEditingSessionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CompleteSequenceEditingSessionResult: void }>;

	CompleteSequenceEditingSession(sequenceSessionId: string): { CompleteSequenceEditingSessionResult: void };

	CompleteSequenceEditingSessionPromise(sequenceSessionId: string): Promise<void>;

	CompleteSequenceEditingSessionWithEvents(sequenceSessionId: string, successCallback: (data: { CompleteSequenceEditingSessionWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ CompleteSequenceEditingSessionWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }>;

	CompleteSequenceEditingSessionWithEvents(sequenceSessionId: string): { CompleteSequenceEditingSessionWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn };

	CompleteSequenceEditingSessionWithEventsPromise(sequenceSessionId: string): Promise<$D.Framework.Design.Flow.FlowEditServiceEventsReturn>;

	SetRuleStepNotStateWithEvents(ruleSessionId: string, ruleId: string, evaluateWithNot: boolean, successCallback: (data: { SetRuleStepNotStateWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ SetRuleStepNotStateWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }>;

	SetRuleStepNotStateWithEvents(ruleSessionId: string, ruleId: string, evaluateWithNot: boolean): { SetRuleStepNotStateWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn };

	SetRuleStepNotStateWithEventsPromise(ruleSessionId: string, ruleId: string, evaluateWithNot: boolean): Promise<$D.Framework.Design.Flow.FlowEditServiceEventsReturn>;

	CopyRuleStepWithEvents(clientId: string, ruleSessionId: string, ruleStepId: string, successCallback: (data: { CopyRuleStepWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ CopyRuleStepWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }>;

	CopyRuleStepWithEvents(clientId: string, ruleSessionId: string, ruleStepId: string): { CopyRuleStepWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn };

	CopyRuleStepWithEventsPromise(clientId: string, ruleSessionId: string, ruleStepId: string): Promise<$D.Framework.Design.Flow.FlowEditServiceEventsReturn>;

	PasteRuleStepWithEvents(clientId: string, ruleSessionId: string, parentRuleStepId: string, successCallback: (data: { PasteRuleStepWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ PasteRuleStepWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }>;

	PasteRuleStepWithEvents(clientId: string, ruleSessionId: string, parentRuleStepId: string): { PasteRuleStepWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn };

	PasteRuleStepWithEventsPromise(clientId: string, ruleSessionId: string, parentRuleStepId: string): Promise<$D.Framework.Design.Flow.FlowEditServiceEventsReturn>;

	RemoveStepWithEvents(ruleSessionId: string, ruleStepId: string, successCallback: (data: { RemoveStepWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveStepWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }>;

	RemoveStepWithEvents(ruleSessionId: string, ruleStepId: string): { RemoveStepWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn };

	RemoveStepWithEventsPromise(ruleSessionId: string, ruleStepId: string): Promise<$D.Framework.Design.Flow.FlowEditServiceEventsReturn>;

	MoveStepDownWithEvents(ruleSessionId: string, stepId: string, successCallback: (data: { MoveStepDownWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ MoveStepDownWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }>;

	MoveStepDownWithEvents(ruleSessionId: string, stepId: string): { MoveStepDownWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn };

	MoveStepDownWithEventsPromise(ruleSessionId: string, stepId: string): Promise<$D.Framework.Design.Flow.FlowEditServiceEventsReturn>;

	MoveStepUpWithEvents(ruleSessionId: string, stepId: string, successCallback: (data: { MoveStepUpWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ MoveStepUpWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }>;

	MoveStepUpWithEvents(ruleSessionId: string, stepId: string): { MoveStepUpWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn };

	MoveStepUpWithEventsPromise(ruleSessionId: string, stepId: string): Promise<$D.Framework.Design.Flow.FlowEditServiceEventsReturn>;

	AddAllGroupStepWithEvents(ruleSessionId: string, parentGroupId: string, successCallback: (data: { AddAllGroupStepWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ AddAllGroupStepWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }>;

	AddAllGroupStepWithEvents(ruleSessionId: string, parentGroupId: string): { AddAllGroupStepWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn };

	AddAllGroupStepWithEventsPromise(ruleSessionId: string, parentGroupId: string): Promise<$D.Framework.Design.Flow.FlowEditServiceEventsReturn>;

	AddAnyGroupStepWithEvents(ruleSessionId: string, parentGroupId: string, successCallback: (data: { AddAnyGroupStepWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ AddAnyGroupStepWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }>;

	AddAnyGroupStepWithEvents(ruleSessionId: string, parentGroupId: string): { AddAnyGroupStepWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn };

	AddAnyGroupStepWithEventsPromise(ruleSessionId: string, parentGroupId: string): Promise<$D.Framework.Design.Flow.FlowEditServiceEventsReturn>;

	AddStepWithEvents(ruleSessionId: string, parentGroupId: string, successCallback: (data: { AddStepWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ AddStepWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }>;

	AddStepWithEvents(ruleSessionId: string, parentGroupId: string): { AddStepWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn };

	AddStepWithEventsPromise(ruleSessionId: string, parentGroupId: string): Promise<$D.Framework.Design.Flow.FlowEditServiceEventsReturn>;

	SetStepWithEvents(ruleSessionId: string, ruleStepId: string, toolboxNodes: string[], toolboxStepId: string, successCallback: (data: { SetStepWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ SetStepWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }>;

	SetStepWithEvents(ruleSessionId: string, ruleStepId: string, toolboxNodes: string[], toolboxStepId: string): { SetStepWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn };

	SetStepWithEventsPromise(ruleSessionId: string, ruleStepId: string, toolboxNodes: string[], toolboxStepId: string): Promise<$D.Framework.Design.Flow.FlowEditServiceEventsReturn>;

	GetRuleDisplayFilter(ruleSessionId: string, successCallback: (data: { GetRuleDisplayFilterResult: $D.Framework.Design.Flow.DisplayFilter }) => any, errorCallback?: () => any): JQueryPromise<{ GetRuleDisplayFilterResult: $D.Framework.Design.Flow.DisplayFilter }>;

	GetRuleDisplayFilter(ruleSessionId: string): { GetRuleDisplayFilterResult: $D.Framework.Design.Flow.DisplayFilter };

	GetRuleDisplayFilterPromise(ruleSessionId: string): Promise<$D.Framework.Design.Flow.DisplayFilter>;

	SetRuleDisplayFilter(ruleSessionId: string, displayFilter: $D.Framework.Design.Flow.DisplayFilter, successCallback: (data: { SetRuleDisplayFilterResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetRuleDisplayFilterResult: void }>;

	SetRuleDisplayFilter(ruleSessionId: string, displayFilter: $D.Framework.Design.Flow.DisplayFilter): { SetRuleDisplayFilterResult: void };

	SetRuleDisplayFilterPromise(ruleSessionId: string, displayFilter: $D.Framework.Design.Flow.DisplayFilter): Promise<void>;

	SetDesignerInfo(sessionId: string, info: $D.Framework.Design.Flow.Service.Edit.DesignerInfo, successCallback: (data: { SetDesignerInfoResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetDesignerInfoResult: void }>;

	SetDesignerInfo(sessionId: string, info: $D.Framework.Design.Flow.Service.Edit.DesignerInfo): { SetDesignerInfoResult: void };

	SetDesignerInfoPromise(sessionId: string, info: $D.Framework.Design.Flow.Service.Edit.DesignerInfo): Promise<void>;

	SetDesignerChanged(sessionId: string, successCallback: (data: { SetDesignerChangedResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetDesignerChangedResult: void }>;

	SetDesignerChanged(sessionId: string): { SetDesignerChangedResult: void };

	SetDesignerChangedPromise(sessionId: string): Promise<void>;

	AddTrueAction(ruleSessionId: string, parentGroupId: string, successCallback: (data: { AddTrueActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddTrueActionResult: void }>;

	AddTrueAction(ruleSessionId: string, parentGroupId: string): { AddTrueActionResult: void };

	AddTrueActionPromise(ruleSessionId: string, parentGroupId: string): Promise<void>;

	AddFalseAction(ruleSessionId: string, parentGroupId: string, successCallback: (data: { AddFalseActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddFalseActionResult: void }>;

	AddFalseAction(ruleSessionId: string, parentGroupId: string): { AddFalseActionResult: void };

	AddFalseActionPromise(ruleSessionId: string, parentGroupId: string): Promise<void>;

	AddActionOfTypeWithEvents(ruleSessionId: string, parentGroupId: string, actionTypeName: string, outputPath: $D.Framework.Design.Flow.RuleOutputPath, successCallback: (data: { AddActionOfTypeWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ AddActionOfTypeWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }>;

	AddActionOfTypeWithEvents(ruleSessionId: string, parentGroupId: string, actionTypeName: string, outputPath: $D.Framework.Design.Flow.RuleOutputPath): { AddActionOfTypeWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn };

	AddActionOfTypeWithEventsPromise(ruleSessionId: string, parentGroupId: string, actionTypeName: string, outputPath: $D.Framework.Design.Flow.RuleOutputPath): Promise<$D.Framework.Design.Flow.FlowEditServiceEventsReturn>;

	AddActionOfType(ruleSessionId: string, parentGroupId: string, actionTypeName: string, outputPath: $D.Framework.Design.Flow.RuleOutputPath, successCallback: (data: { AddActionOfTypeResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddActionOfTypeResult: void }>;

	AddActionOfType(ruleSessionId: string, parentGroupId: string, actionTypeName: string, outputPath: $D.Framework.Design.Flow.RuleOutputPath): { AddActionOfTypeResult: void };

	AddActionOfTypePromise(ruleSessionId: string, parentGroupId: string, actionTypeName: string, outputPath: $D.Framework.Design.Flow.RuleOutputPath): Promise<void>;

	ChangeActionValue(ruleSessionId: string, actionId: string, value: string, successCallback: (data: { ChangeActionValueResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ChangeActionValueResult: void }>;

	ChangeActionValue(ruleSessionId: string, actionId: string, value: string): { ChangeActionValueResult: void };

	ChangeActionValuePromise(ruleSessionId: string, actionId: string, value: string): Promise<void>;

	RemoveAction(ruleSessionId: string, actionId: string, successCallback: (data: { RemoveActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveActionResult: void }>;

	RemoveAction(ruleSessionId: string, actionId: string): { RemoveActionResult: void };

	RemoveActionPromise(ruleSessionId: string, actionId: string): Promise<void>;

	GetEditContextForAction(ruleSessionId: string, actionId: string, successCallback: (data: { GetEditContextForActionResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetEditContextForActionResult: string }>;

	GetEditContextForAction(ruleSessionId: string, actionId: string): { GetEditContextForActionResult: string };

	GetEditContextForActionPromise(ruleSessionId: string, actionId: string): Promise<string>;

	GetActionDataDescriptions(ruleSessionId: string, actionId: string, path: string, successCallback: (data: { GetActionDataDescriptionsResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetActionDataDescriptionsResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }>;

	GetActionDataDescriptions(ruleSessionId: string, actionId: string, path: string): { GetActionDataDescriptionsResult: $D.Framework.Design.Flow.Mapping.DataDescription[] };

	GetActionDataDescriptionsPromise(ruleSessionId: string, actionId: string, path: string): Promise<$D.Framework.Design.Flow.Mapping.DataDescription[]>;

	SetActionConstantValue(ruleSessionId: string, actionId: string, value: string, successCallback: (data: { SetActionConstantValueResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetActionConstantValueResult: void }>;

	SetActionConstantValue(ruleSessionId: string, actionId: string, value: string): { SetActionConstantValueResult: void };

	SetActionConstantValuePromise(ruleSessionId: string, actionId: string, value: string): Promise<void>;

	RunFlowEditorForAction(ruleSessionId: string, actionId: string, successCallback: (data: { RunFlowEditorForActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RunFlowEditorForActionResult: void }>;

	RunFlowEditorForAction(ruleSessionId: string, actionId: string): { RunFlowEditorForActionResult: void };

	RunFlowEditorForActionPromise(ruleSessionId: string, actionId: string): Promise<void>;

	GetContextToCreateLinkedActionFlow(ruleId: string, endStepId: string, outcomeType: $D.Framework.Design.Flow.RuleOutputPath, successCallback: (data: { GetContextToCreateLinkedActionFlowResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetContextToCreateLinkedActionFlowResult: string }>;

	GetContextToCreateLinkedActionFlow(ruleId: string, endStepId: string, outcomeType: $D.Framework.Design.Flow.RuleOutputPath): { GetContextToCreateLinkedActionFlowResult: string };

	GetContextToCreateLinkedActionFlowPromise(ruleId: string, endStepId: string, outcomeType: $D.Framework.Design.Flow.RuleOutputPath): Promise<string>;

	AddRunFlowActionWithFlow(ruleSessionId: string, endStepId: string, outcomeType: $D.Framework.Design.Flow.RuleOutputPath, flowId: string, successCallback: (data: { AddRunFlowActionWithFlowResult: $D.Framework.Design.Flow.Service.RuleActionDisplayData }) => any, errorCallback?: () => any): JQueryPromise<{ AddRunFlowActionWithFlowResult: $D.Framework.Design.Flow.Service.RuleActionDisplayData }>;

	AddRunFlowActionWithFlow(ruleSessionId: string, endStepId: string, outcomeType: $D.Framework.Design.Flow.RuleOutputPath, flowId: string): { AddRunFlowActionWithFlowResult: $D.Framework.Design.Flow.Service.RuleActionDisplayData };

	AddRunFlowActionWithFlowPromise(ruleSessionId: string, endStepId: string, outcomeType: $D.Framework.Design.Flow.RuleOutputPath, flowId: string): Promise<$D.Framework.Design.Flow.Service.RuleActionDisplayData>;

	GetAppliableActionTypes(ruleSessionId: string, successCallback: (data: { GetAppliableActionTypesResult: $D.Framework.Design.Flow.RuleAction.RuleActionTypeInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAppliableActionTypesResult: $D.Framework.Design.Flow.RuleAction.RuleActionTypeInfo[] }>;

	GetAppliableActionTypes(ruleSessionId: string): { GetAppliableActionTypesResult: $D.Framework.Design.Flow.RuleAction.RuleActionTypeInfo[] };

	GetAppliableActionTypesPromise(ruleSessionId: string): Promise<$D.Framework.Design.Flow.RuleAction.RuleActionTypeInfo[]>;

	SetMultipleOutputData(ruleSessionId: string, outputPath: $D.Framework.Design.Flow.RuleOutputPath, name: string, value: string, successCallback: (data: { SetMultipleOutputDataResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetMultipleOutputDataResult: void }>;

	SetMultipleOutputData(ruleSessionId: string, outputPath: $D.Framework.Design.Flow.RuleOutputPath, name: string, value: string): { SetMultipleOutputDataResult: void };

	SetMultipleOutputDataPromise(ruleSessionId: string, outputPath: $D.Framework.Design.Flow.RuleOutputPath, name: string, value: string): Promise<void>;

	UnSetMultipleOutputData(ruleSessionId: string, outputPath: $D.Framework.Design.Flow.RuleOutputPath, name: string, successCallback: (data: { UnSetMultipleOutputDataResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UnSetMultipleOutputDataResult: void }>;

	UnSetMultipleOutputData(ruleSessionId: string, outputPath: $D.Framework.Design.Flow.RuleOutputPath, name: string): { UnSetMultipleOutputDataResult: void };

	UnSetMultipleOutputDataPromise(ruleSessionId: string, outputPath: $D.Framework.Design.Flow.RuleOutputPath, name: string): Promise<void>;

	GetEditContextForSpecificOutcomeType(ruleSessionId: string, outputPath: $D.Framework.Design.Flow.RuleOutputPath, fieldName: string, successCallback: (data: { GetEditContextForSpecificOutcomeTypeResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetEditContextForSpecificOutcomeTypeResult: string }>;

	GetEditContextForSpecificOutcomeType(ruleSessionId: string, outputPath: $D.Framework.Design.Flow.RuleOutputPath, fieldName: string): { GetEditContextForSpecificOutcomeTypeResult: string };

	GetEditContextForSpecificOutcomeTypePromise(ruleSessionId: string, outputPath: $D.Framework.Design.Flow.RuleOutputPath, fieldName: string): Promise<string>;

	GetContextToAddOutputData(ruleSessionId: string, outputPath: $D.Framework.Design.Flow.RuleOutputPath, successCallback: (data: { GetContextToAddOutputDataResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetContextToAddOutputDataResult: string }>;

	GetContextToAddOutputData(ruleSessionId: string, outputPath: $D.Framework.Design.Flow.RuleOutputPath): { GetContextToAddOutputDataResult: string };

	GetContextToAddOutputDataPromise(ruleSessionId: string, outputPath: $D.Framework.Design.Flow.RuleOutputPath): Promise<string>;

	AddInputToOutputData(ruleSessionId: string, inputDataPath: string, successCallback: (data: { AddInputToOutputDataResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddInputToOutputDataResult: void }>;

	AddInputToOutputData(ruleSessionId: string, inputDataPath: string): { AddInputToOutputDataResult: void };

	AddInputToOutputDataPromise(ruleSessionId: string, inputDataPath: string): Promise<void>;

	DeleteOutputDataItem(ruleSessionId: string, itemName: string, successCallback: (data: { DeleteOutputDataItemResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteOutputDataItemResult: void }>;

	DeleteOutputDataItem(ruleSessionId: string, itemName: string): { DeleteOutputDataItemResult: void };

	DeleteOutputDataItemPromise(ruleSessionId: string, itemName: string): Promise<void>;

	EditOutputDataItem(ruleSessionId: string, index: number, successCallback: (data: { EditOutputDataItemResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ EditOutputDataItemResult: string }>;

	EditOutputDataItem(ruleSessionId: string, index: number): { EditOutputDataItemResult: string };

	EditOutputDataItemPromise(ruleSessionId: string, index: number): Promise<string>;

	StartEditingOutputDataItem(ruleSessionId: string, outputPath: $D.Framework.Design.Flow.RuleOutputPath, fieldName: string, successCallback: (data: { StartEditingOutputDataItemResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession }) => any, errorCallback?: () => any): JQueryPromise<{ StartEditingOutputDataItemResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession }>;

	StartEditingOutputDataItem(ruleSessionId: string, outputPath: $D.Framework.Design.Flow.RuleOutputPath, fieldName: string): { StartEditingOutputDataItemResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession };

	StartEditingOutputDataItemPromise(ruleSessionId: string, outputPath: $D.Framework.Design.Flow.RuleOutputPath, fieldName: string): Promise<$D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession>;

	EditOutputDataItemTruthTable(ruleSessionId: string, index: number, successCallback: (data: { EditOutputDataItemTruthTableResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ EditOutputDataItemTruthTableResult: string }>;

	EditOutputDataItemTruthTable(ruleSessionId: string, index: number): { EditOutputDataItemTruthTableResult: string };

	EditOutputDataItemTruthTablePromise(ruleSessionId: string, index: number): Promise<string>;

	EditDefaultValueItemTruthTable(ruleSessionId: string, index: number, successCallback: (data: { EditDefaultValueItemTruthTableResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ EditDefaultValueItemTruthTableResult: string }>;

	EditDefaultValueItemTruthTable(ruleSessionId: string, index: number): { EditDefaultValueItemTruthTableResult: string };

	EditDefaultValueItemTruthTablePromise(ruleSessionId: string, index: number): Promise<string>;

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
	RuleEditService(): RuleEditServiceStatic;
}
