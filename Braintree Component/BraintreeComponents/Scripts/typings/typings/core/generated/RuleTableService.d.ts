/// <reference path="./datatypes._base.d.ts" />

interface RuleTableServiceStatic {

	StartEditSession(dmnRuleId: string, successCallback: (data: { StartEditSessionResult: $D.Framework.Design.Flow.Service.RuleEditSession }) => any, errorCallback?: () => any): JQueryPromise<{ StartEditSessionResult: $D.Framework.Design.Flow.Service.RuleEditSession }>;

	StartEditSession(dmnRuleId: string): { StartEditSessionResult: $D.Framework.Design.Flow.Service.RuleEditSession };

	StartEditSessionPromise(dmnRuleId: string): Promise<$D.Framework.Design.Flow.Service.RuleEditSession>;

	SaveRule(editSessionId: string, successCallback: (data: { SaveRuleResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveRuleResult: void }>;

	SaveRule(editSessionId: string): { SaveRuleResult: void };

	SaveRulePromise(editSessionId: string): Promise<void>;

	OpenAndGetAllEntities(dmnRuleId: string, successCallback: (data: { OpenAndGetAllEntitiesResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ OpenAndGetAllEntitiesResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	OpenAndGetAllEntities(dmnRuleId: string): { OpenAndGetAllEntitiesResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	OpenAndGetAllEntitiesPromise(dmnRuleId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	CancelEdit(editSessionId: string, successCallback: (data: { CancelEditResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CancelEditResult: void }>;

	CancelEdit(editSessionId: string): { CancelEditResult: void };

	CancelEditPromise(editSessionId: string): Promise<void>;

	GetHeaders(dmnRuleId: string, successCallback: (data: { GetHeadersResult: $D.Framework.Design.Flow.RuleTable.RuleTableHeaderDisplayData[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetHeadersResult: $D.Framework.Design.Flow.RuleTable.RuleTableHeaderDisplayData[] }>;

	GetHeaders(dmnRuleId: string): { GetHeadersResult: $D.Framework.Design.Flow.RuleTable.RuleTableHeaderDisplayData[] };

	GetHeadersPromise(dmnRuleId: string): Promise<$D.Framework.Design.Flow.RuleTable.RuleTableHeaderDisplayData[]>;

	GetHeadersForSession(editSessionId: string, successCallback: (data: { GetHeadersForSessionResult: $D.Framework.Design.Flow.RuleTable.RuleTableHeaderDisplayData[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetHeadersForSessionResult: $D.Framework.Design.Flow.RuleTable.RuleTableHeaderDisplayData[] }>;

	GetHeadersForSession(editSessionId: string): { GetHeadersForSessionResult: $D.Framework.Design.Flow.RuleTable.RuleTableHeaderDisplayData[] };

	GetHeadersForSessionPromise(editSessionId: string): Promise<$D.Framework.Design.Flow.RuleTable.RuleTableHeaderDisplayData[]>;

	Create(folderId: string, name: string, successCallback: (data: { CreateResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateResult: string }>;

	Create(folderId: string, name: string): { CreateResult: string };

	CreatePromise(folderId: string, name: string): Promise<string>;

	Delete(ruleId: string, successCallback: (data: { DeleteResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteResult: void }>;

	Delete(ruleId: string): { DeleteResult: void };

	DeletePromise(ruleId: string): Promise<void>;

	StartSequenceEditingSession(editSessionId: string, headerId: string, successCallback: (data: { StartSequenceEditingSessionResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession }) => any, errorCallback?: () => any): JQueryPromise<{ StartSequenceEditingSessionResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession }>;

	StartSequenceEditingSession(editSessionId: string, headerId: string): { StartSequenceEditingSessionResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession };

	StartSequenceEditingSessionPromise(editSessionId: string, headerId: string): Promise<$D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession>;

	GetAnchorConverterFlowContextForHeader(editSessionId: string, headerId: string, successCallback: (data: { GetAnchorConverterFlowContextForHeaderResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetAnchorConverterFlowContextForHeaderResult: string }>;

	GetAnchorConverterFlowContextForHeader(editSessionId: string, headerId: string): { GetAnchorConverterFlowContextForHeaderResult: string };

	GetAnchorConverterFlowContextForHeaderPromise(editSessionId: string, headerId: string): Promise<string>;

	GetAnchorMappingContextForHeader(editSessionId: string, headerId: string, successCallback: (data: { GetAnchorMappingContextForHeaderResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetAnchorMappingContextForHeaderResult: string }>;

	GetAnchorMappingContextForHeader(editSessionId: string, headerId: string): { GetAnchorMappingContextForHeaderResult: string };

	GetAnchorMappingContextForHeaderPromise(editSessionId: string, headerId: string): Promise<string>;

	CompleteSequenceEditingSession(sequenceSessionId: string, successCallback: (data: { CompleteSequenceEditingSessionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CompleteSequenceEditingSessionResult: void }>;

	CompleteSequenceEditingSession(sequenceSessionId: string): { CompleteSequenceEditingSessionResult: void };

	CompleteSequenceEditingSessionPromise(sequenceSessionId: string): Promise<void>;

	AddHeader(editSessionId: string, successCallback: (data: { AddHeaderResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ AddHeaderResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	AddHeader(editSessionId: string): { AddHeaderResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	AddHeaderPromise(editSessionId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	DeleteHeader(editSessionId: string, headerId: string, successCallback: (data: { DeleteHeaderResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteHeaderResult: void }>;

	DeleteHeader(editSessionId: string, headerId: string): { DeleteHeaderResult: void };

	DeleteHeaderPromise(editSessionId: string, headerId: string): Promise<void>;

	AddRow(editSessionId: string, successCallback: (data: { AddRowResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddRowResult: string }>;

	AddRow(editSessionId: string): { AddRowResult: string };

	AddRowPromise(editSessionId: string): Promise<string>;

	MoveRowUp(ruleSessionId: string, rowId: string, successCallback: (data: { MoveRowUpResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ MoveRowUpResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	MoveRowUp(ruleSessionId: string, rowId: string): { MoveRowUpResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	MoveRowUpPromise(ruleSessionId: string, rowId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	MoveRowDown(editSessionId: string, rowId: string, successCallback: (data: { MoveRowDownResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ MoveRowDownResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	MoveRowDown(editSessionId: string, rowId: string): { MoveRowDownResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	MoveRowDownPromise(editSessionId: string, rowId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	AddRuleStep(editSessionId: string, headerId: string, rowId: string, successCallback: (data: { AddRuleStepResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddRuleStepResult: string }>;

	AddRuleStep(editSessionId: string, headerId: string, rowId: string): { AddRuleStepResult: string };

	AddRuleStepPromise(editSessionId: string, headerId: string, rowId: string): Promise<string>;

	RemoveStep(editSessionId: string, ruleStepId: string, successCallback: (data: { RemoveStepResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveStepResult: void }>;

	RemoveStep(editSessionId: string, ruleStepId: string): { RemoveStepResult: void };

	RemoveStepPromise(editSessionId: string, ruleStepId: string): Promise<void>;

	SetStepWithEvents(editSessionId: string, ruleStepId: string, toolboxNodes: string[], toolboxStepId: string, successCallback: (data: { SetStepWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ SetStepWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn }>;

	SetStepWithEvents(editSessionId: string, ruleStepId: string, toolboxNodes: string[], toolboxStepId: string): { SetStepWithEventsResult: $D.Framework.Design.Flow.FlowEditServiceEventsReturn };

	SetStepWithEventsPromise(editSessionId: string, ruleStepId: string, toolboxNodes: string[], toolboxStepId: string): Promise<$D.Framework.Design.Flow.FlowEditServiceEventsReturn>;

	DeleteOutputDataItemWithEvents(editSessionId: string, outputName: string, successCallback: (data: { DeleteOutputDataItemWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteOutputDataItemWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	DeleteOutputDataItemWithEvents(editSessionId: string, outputName: string): { DeleteOutputDataItemWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	DeleteOutputDataItemWithEventsPromise(editSessionId: string, outputName: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	AddRowAfterWithEvents(editSessionId: string, afterRowId: string, successCallback: (data: { AddRowAfterWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ AddRowAfterWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	AddRowAfterWithEvents(editSessionId: string, afterRowId: string): { AddRowAfterWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	AddRowAfterWithEventsPromise(editSessionId: string, afterRowId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	AddRowBeforeWithEvents(editSessionId: string, beforeRowId: string, successCallback: (data: { AddRowBeforeWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ AddRowBeforeWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	AddRowBeforeWithEvents(editSessionId: string, beforeRowId: string): { AddRowBeforeWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	AddRowBeforeWithEventsPromise(editSessionId: string, beforeRowId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	MoveColumnToRight(editSessionId: string, headerId: string, successCallback: (data: { MoveColumnToRightResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ MoveColumnToRightResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	MoveColumnToRight(editSessionId: string, headerId: string): { MoveColumnToRightResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	MoveColumnToRightPromise(editSessionId: string, headerId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	MoveColumnToLeft(editSessionId: string, headerId: string, successCallback: (data: { MoveColumnToLeftResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ MoveColumnToLeftResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	MoveColumnToLeft(editSessionId: string, headerId: string): { MoveColumnToLeftResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	MoveColumnToLeftPromise(editSessionId: string, headerId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	AddColumnBeforeWithEvents(editSessionId: string, beforeHeaderId: string, successCallback: (data: { AddColumnBeforeWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ AddColumnBeforeWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	AddColumnBeforeWithEvents(editSessionId: string, beforeHeaderId: string): { AddColumnBeforeWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	AddColumnBeforeWithEventsPromise(editSessionId: string, beforeHeaderId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	AddColumnAfterWithEvents(editSessionId: string, afterHeaderId: string, successCallback: (data: { AddColumnAfterWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ AddColumnAfterWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	AddColumnAfterWithEvents(editSessionId: string, afterHeaderId: string): { AddColumnAfterWithEventsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	AddColumnAfterWithEventsPromise(editSessionId: string, afterHeaderId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;
}

interface ServicesStatic {
	RuleTableService(): RuleTableServiceStatic;
}
