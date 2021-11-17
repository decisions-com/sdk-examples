/// <reference path="./datatypes._base.d.ts" />

interface FormServiceStatic {

	StartFlowWithForm(flowID: string, successCallback: (data: { StartFlowWithFormResult: $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction }) => any, errorCallback?: () => any): JQueryPromise<{ StartFlowWithFormResult: $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction }>;

	StartFlowWithForm(flowID: string): { StartFlowWithFormResult: $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction };

	StartFlowWithFormPromise(flowID: string): Promise<$D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction>;

	StartFlowWithFormAndData(flowID: string, data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], successCallback: (data: { StartFlowWithFormAndDataResult: $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction }) => any, errorCallback?: () => any): JQueryPromise<{ StartFlowWithFormAndDataResult: $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction }>;

	StartFlowWithFormAndData(flowID: string, data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): { StartFlowWithFormAndDataResult: $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction };

	StartFlowWithFormAndDataPromise(flowID: string, data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): Promise<$D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction>;

	GetFormData(flowTrackingId: string, stepTrackingId: string, successCallback: (data: { GetFormDataResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetFormDataResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	GetFormData(flowTrackingId: string, stepTrackingId: string): { GetFormDataResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	GetFormDataPromise(flowTrackingId: string, stepTrackingId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	ProcessForm(flowTrackingId: string, stepTrackingId: string, resultName: string, resultData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], successCallback: (data: { ProcessFormResult: $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessFormResult: $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction }>;

	ProcessForm(flowTrackingId: string, stepTrackingId: string, resultName: string, resultData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): { ProcessFormResult: $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction };

	ProcessFormPromise(flowTrackingId: string, stepTrackingId: string, resultName: string, resultData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): Promise<$D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction>;

	GetCurrentInstructions(flowTrackingId: string, successCallback: (data: { GetCurrentInstructionsResult: $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction }) => any, errorCallback?: () => any): JQueryPromise<{ GetCurrentInstructionsResult: $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction }>;

	GetCurrentInstructions(flowTrackingId: string): { GetCurrentInstructionsResult: $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction };

	GetCurrentInstructionsPromise(flowTrackingId: string): Promise<$D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction>;

	SaveInProcessFormSession(flowTrackingId: string, notes: string, successCallback: (data: { SaveInProcessFormSessionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveInProcessFormSessionResult: void }>;

	SaveInProcessFormSession(flowTrackingId: string, notes: string): { SaveInProcessFormSessionResult: void };

	SaveInProcessFormSessionPromise(flowTrackingId: string, notes: string): Promise<void>;

	SaveAndAssignInProcessFormSession(flowTrackingId: string, userIdentifer: string, userIDType: $D.Framework.ServiceLayer.Utilities.UserIdentifierType, notes: string, successCallback: (data: { SaveAndAssignInProcessFormSessionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveAndAssignInProcessFormSessionResult: void }>;

	SaveAndAssignInProcessFormSession(flowTrackingId: string, userIdentifer: string, userIDType: $D.Framework.ServiceLayer.Utilities.UserIdentifierType, notes: string): { SaveAndAssignInProcessFormSessionResult: void };

	SaveAndAssignInProcessFormSessionPromise(flowTrackingId: string, userIdentifer: string, userIDType: $D.Framework.ServiceLayer.Utilities.UserIdentifierType, notes: string): Promise<void>;

	AssignForm(flowTrackingId: string, userIdentifer: string, userIDType: $D.Framework.ServiceLayer.Utilities.UserIdentifierType, notes: string, successCallback: (data: { AssignFormResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AssignFormResult: void }>;

	AssignForm(flowTrackingId: string, userIdentifer: string, userIDType: $D.Framework.ServiceLayer.Utilities.UserIdentifierType, notes: string): { AssignFormResult: void };

	AssignFormPromise(flowTrackingId: string, userIdentifer: string, userIDType: $D.Framework.ServiceLayer.Utilities.UserIdentifierType, notes: string): Promise<void>;

	RunRuleOrFlow(flowTrackingId: string, flowStepTrackingId: string, ruleOrFlowId: string, inputData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], successCallback: (data: { RunRuleOrFlowResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ RunRuleOrFlowResult: boolean }>;

	RunRuleOrFlow(flowTrackingId: string, flowStepTrackingId: string, ruleOrFlowId: string, inputData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): { RunRuleOrFlowResult: boolean };

	RunRuleOrFlowPromise(flowTrackingId: string, flowStepTrackingId: string, ruleOrFlowId: string, inputData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): Promise<boolean>;

	RunComplexRuleOrFlow(flowTrackingId: string, stepTrackingId: string, ruleOrFlowId: string, inputData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], successCallback: (data: { RunComplexRuleOrFlowResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ RunComplexRuleOrFlowResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	RunComplexRuleOrFlow(flowTrackingId: string, stepTrackingId: string, ruleOrFlowId: string, inputData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): { RunComplexRuleOrFlowResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	RunComplexRuleOrFlowPromise(flowTrackingId: string, stepTrackingId: string, ruleOrFlowId: string, inputData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	RunComplexRulesOrFlows(flowTrackingId: string, flowStepTrackingId: string, ruleRunInfo: $D.Framework.Design.Form.RuleRunInfo[], successCallback: (data: { RunComplexRulesOrFlowsResult: $D.Framework.Design.Form.RuleOrFlowReturn[] }) => any, errorCallback?: () => any): JQueryPromise<{ RunComplexRulesOrFlowsResult: $D.Framework.Design.Form.RuleOrFlowReturn[] }>;

	RunComplexRulesOrFlows(flowTrackingId: string, flowStepTrackingId: string, ruleRunInfo: $D.Framework.Design.Form.RuleRunInfo[]): { RunComplexRulesOrFlowsResult: $D.Framework.Design.Form.RuleOrFlowReturn[] };

	RunComplexRulesOrFlowsPromise(flowTrackingId: string, flowStepTrackingId: string, ruleRunInfo: $D.Framework.Design.Form.RuleRunInfo[]): Promise<$D.Framework.Design.Form.RuleOrFlowReturn[]>;

	GetInstructionFromAssignment(assignmentId: string, successCallback: (data: { GetInstructionFromAssignmentResult: $D.Framework.Design.Flow.Service.Execution.BaseFormInSessionInstruction }) => any, errorCallback?: () => any): JQueryPromise<{ GetInstructionFromAssignmentResult: $D.Framework.Design.Flow.Service.Execution.BaseFormInSessionInstruction }>;

	GetInstructionFromAssignment(assignmentId: string): { GetInstructionFromAssignmentResult: $D.Framework.Design.Flow.Service.Execution.BaseFormInSessionInstruction };

	GetInstructionFromAssignmentPromise(assignmentId: string): Promise<$D.Framework.Design.Flow.Service.Execution.BaseFormInSessionInstruction>;

	GetAnyInstructionFromAssignment(assignmentId: string, successCallback: (data: { GetAnyInstructionFromAssignmentResult: $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction }) => any, errorCallback?: () => any): JQueryPromise<{ GetAnyInstructionFromAssignmentResult: $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction }>;

	GetAnyInstructionFromAssignment(assignmentId: string): { GetAnyInstructionFromAssignmentResult: $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction };

	GetAnyInstructionFromAssignmentPromise(assignmentId: string): Promise<$D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction>;

	FormClosed(formCloseData: $D.Framework.Design.Form.FormCloseData, successCallback: (data: { FormClosedResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ FormClosedResult: void }>;

	FormClosed(formCloseData: $D.Framework.Design.Form.FormCloseData): { FormClosedResult: void };

	FormClosedPromise(formCloseData: $D.Framework.Design.Form.FormCloseData): Promise<void>;

	LockAssignedForm(assigmentId: string, successCallback: (data: { LockAssignedFormResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ LockAssignedFormResult: void }>;

	LockAssignedForm(assigmentId: string): { LockAssignedFormResult: void };

	LockAssignedFormPromise(assigmentId: string): Promise<void>;

	KeepFormAlive(formSessionInfoId: string, successCallback: (data: { KeepFormAliveResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ KeepFormAliveResult: boolean }>;

	KeepFormAlive(formSessionInfoId: string): { KeepFormAliveResult: boolean };

	KeepFormAlivePromise(formSessionInfoId: string): Promise<boolean>;

	GetSubDialogData(flowTrackingId: string, successCallback: (data: { GetSubDialogDataResult: $D.Framework.Design.Flow.Service.Execution.FlowCompletedInstruction }) => any, errorCallback?: () => any): JQueryPromise<{ GetSubDialogDataResult: $D.Framework.Design.Flow.Service.Execution.FlowCompletedInstruction }>;

	GetSubDialogData(flowTrackingId: string): { GetSubDialogDataResult: $D.Framework.Design.Flow.Service.Execution.FlowCompletedInstruction };

	GetSubDialogDataPromise(flowTrackingId: string): Promise<$D.Framework.Design.Flow.Service.Execution.FlowCompletedInstruction>;

	GetViewOnlyFormInstruction(assignmentId: string, successCallback: (data: { GetViewOnlyFormInstructionResult: $D.Framework.Design.Flow.Service.Execution.ViewOnlyFormInstruction }) => any, errorCallback?: () => any): JQueryPromise<{ GetViewOnlyFormInstructionResult: $D.Framework.Design.Flow.Service.Execution.ViewOnlyFormInstruction }>;

	GetViewOnlyFormInstruction(assignmentId: string): { GetViewOnlyFormInstructionResult: $D.Framework.Design.Flow.Service.Execution.ViewOnlyFormInstruction };

	GetViewOnlyFormInstructionPromise(assignmentId: string): Promise<$D.Framework.Design.Flow.Service.Execution.ViewOnlyFormInstruction>;

	GetNextFormInSessionInstruction(flowTrackingId: string, stepTrackingId: string, successCallback: (data: { GetNextFormInSessionInstructionResult: $D.Framework.Design.Flow.Service.Execution.NextFormInSessionInstruction }) => any, errorCallback?: () => any): JQueryPromise<{ GetNextFormInSessionInstructionResult: $D.Framework.Design.Flow.Service.Execution.NextFormInSessionInstruction }>;

	GetNextFormInSessionInstruction(flowTrackingId: string, stepTrackingId: string): { GetNextFormInSessionInstructionResult: $D.Framework.Design.Flow.Service.Execution.NextFormInSessionInstruction };

	GetNextFormInSessionInstructionPromise(flowTrackingId: string, stepTrackingId: string): Promise<$D.Framework.Design.Flow.Service.Execution.NextFormInSessionInstruction>;

	GetNextFormInInstructionForRunFlowWithFormInstruction(instruction: $D.Framework.Design.Form.RunFlowWithFormInstruction, successCallback: (data: { GetNextFormInInstructionForRunFlowWithFormInstructionResult: $D.Framework.Design.Flow.Service.Execution.NextFormInSessionInstruction }) => any, errorCallback?: () => any): JQueryPromise<{ GetNextFormInInstructionForRunFlowWithFormInstructionResult: $D.Framework.Design.Flow.Service.Execution.NextFormInSessionInstruction }>;

	GetNextFormInInstructionForRunFlowWithFormInstruction(instruction: $D.Framework.Design.Form.RunFlowWithFormInstruction): { GetNextFormInInstructionForRunFlowWithFormInstructionResult: $D.Framework.Design.Flow.Service.Execution.NextFormInSessionInstruction };

	GetNextFormInInstructionForRunFlowWithFormInstructionPromise(instruction: $D.Framework.Design.Form.RunFlowWithFormInstruction): Promise<$D.Framework.Design.Flow.Service.Execution.NextFormInSessionInstruction>;

	UpdateFormSessionData(formSessionInfoId: string, values: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], successCallback: (data: { UpdateFormSessionDataResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateFormSessionDataResult: void }>;

	UpdateFormSessionData(formSessionInfoId: string, values: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): { UpdateFormSessionDataResult: void };

	UpdateFormSessionDataPromise(formSessionInfoId: string, values: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): Promise<void>;

	GetFormSessionSurface(formSessionInfoId: string, successCallback: (data: { GetFormSessionSurfaceResult: number[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetFormSessionSurfaceResult: number[] }>;

	GetFormSessionSurface(formSessionInfoId: string): { GetFormSessionSurfaceResult: number[] };

	GetFormSessionSurfacePromise(formSessionInfoId: string): Promise<number[]>;

	GetFormSessionSurfaceJson(formSessionInfoId: string, successCallback: (data: { GetFormSessionSurfaceJsonResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetFormSessionSurfaceJsonResult: string }>;

	GetFormSessionSurfaceJson(formSessionInfoId: string): { GetFormSessionSurfaceJsonResult: string };

	GetFormSessionSurfaceJsonPromise(formSessionInfoId: string): Promise<string>;

	GetFormSessionBackgroundSurface(formSessionInfoId: string, backgroundFormId: string, successCallback: (data: { GetFormSessionBackgroundSurfaceResult: number[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetFormSessionBackgroundSurfaceResult: number[] }>;

	GetFormSessionBackgroundSurface(formSessionInfoId: string, backgroundFormId: string): { GetFormSessionBackgroundSurfaceResult: number[] };

	GetFormSessionBackgroundSurfacePromise(formSessionInfoId: string, backgroundFormId: string): Promise<number[]>;

	SelectPath(formSessionInfoId: string, outcomeName: string, controlsData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], ruleSessionInfos: $D.Framework.Design.Form.RunRuleSessionInfo[], successCallback: (data: { SelectPathResult: $D.Framework.Design.Form.EventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ SelectPathResult: $D.Framework.Design.Form.EventsReturn }>;

	SelectPath(formSessionInfoId: string, outcomeName: string, controlsData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], ruleSessionInfos: $D.Framework.Design.Form.RunRuleSessionInfo[]): { SelectPathResult: $D.Framework.Design.Form.EventsReturn };

	SelectPathPromise(formSessionInfoId: string, outcomeName: string, controlsData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], ruleSessionInfos: $D.Framework.Design.Form.RunRuleSessionInfo[]): Promise<$D.Framework.Design.Form.EventsReturn>;

	RunRulesOrFlows(formSessionInfoId: string, runRuleSession: $D.Framework.Design.Form.RunRuleSessionInfo, triggeredBy: string, controlsData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], successCallback: (data: { RunRulesOrFlowsResult: $D.Framework.Design.Form.EventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ RunRulesOrFlowsResult: $D.Framework.Design.Form.EventsReturn }>;

	RunRulesOrFlows(formSessionInfoId: string, runRuleSession: $D.Framework.Design.Form.RunRuleSessionInfo, triggeredBy: string, controlsData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): { RunRulesOrFlowsResult: $D.Framework.Design.Form.EventsReturn };

	RunRulesOrFlowsPromise(formSessionInfoId: string, runRuleSession: $D.Framework.Design.Form.RunRuleSessionInfo, triggeredBy: string, controlsData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): Promise<$D.Framework.Design.Form.EventsReturn>;

	RunRulesForSurfaces(formSessionInfoId: string, ruleSessionInfos: $D.Framework.Design.Form.RunRuleSessionInfo[], controlsData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], successCallback: (data: { RunRulesForSurfacesResult: $D.Framework.Design.Form.EventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ RunRulesForSurfacesResult: $D.Framework.Design.Form.EventsReturn }>;

	RunRulesForSurfaces(formSessionInfoId: string, ruleSessionInfos: $D.Framework.Design.Form.RunRuleSessionInfo[], controlsData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): { RunRulesForSurfacesResult: $D.Framework.Design.Form.EventsReturn };

	RunRulesForSurfacesPromise(formSessionInfoId: string, ruleSessionInfos: $D.Framework.Design.Form.RunRuleSessionInfo[], controlsData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): Promise<$D.Framework.Design.Form.EventsReturn>;

	GetContextForAddEditDataGridRow(formSessionInfoId: string, componentId: string, rowId: string, data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], successCallback: (data: { GetContextForAddEditDataGridRowResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetContextForAddEditDataGridRowResult: string }>;

	GetContextForAddEditDataGridRow(formSessionInfoId: string, componentId: string, rowId: string, data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): { GetContextForAddEditDataGridRowResult: string };

	GetContextForAddEditDataGridRowPromise(formSessionInfoId: string, componentId: string, rowId: string, data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): Promise<string>;

	ProcessSubFlowData(formSessionInfoId: string, surfaceComponentInfo: $D.Framework.Design.Form.SurfaceComponentInfo, flowTrackingId: string, successCallback: (data: { ProcessSubFlowDataResult: $D.Framework.Design.Form.EventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessSubFlowDataResult: $D.Framework.Design.Form.EventsReturn }>;

	ProcessSubFlowData(formSessionInfoId: string, surfaceComponentInfo: $D.Framework.Design.Form.SurfaceComponentInfo, flowTrackingId: string): { ProcessSubFlowDataResult: $D.Framework.Design.Form.EventsReturn };

	ProcessSubFlowDataPromise(formSessionInfoId: string, surfaceComponentInfo: $D.Framework.Design.Form.SurfaceComponentInfo, flowTrackingId: string): Promise<$D.Framework.Design.Form.EventsReturn>;

	GetFileStream(formSessionInfoId: string, componentId: string, fileId: string, downloadFile: boolean, successCallback: (data: { GetFileStreamResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ GetFileStreamResult: any }>;

	GetFileStream(formSessionInfoId: string, componentId: string, fileId: string, downloadFile: boolean): { GetFileStreamResult: any };

	GetFileStreamPromise(formSessionInfoId: string, componentId: string, fileId: string, downloadFile: boolean): Promise<any>;

	StartSubDataFlow(formSessionInfoId: string, surfaceComponentInfo: $D.Framework.Design.Form.SurfaceComponentInfo, successCallback: (data: { StartSubDataFlowResult: $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction }) => any, errorCallback?: () => any): JQueryPromise<{ StartSubDataFlowResult: $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction }>;

	StartSubDataFlow(formSessionInfoId: string, surfaceComponentInfo: $D.Framework.Design.Form.SurfaceComponentInfo): { StartSubDataFlowResult: $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction };

	StartSubDataFlowPromise(formSessionInfoId: string, surfaceComponentInfo: $D.Framework.Design.Form.SurfaceComponentInfo): Promise<$D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction>;

	GetFileForCSVEditor(formSessionInfoId: string, componentId: string, successCallback: (data: { GetFileForCSVEditorResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ GetFileForCSVEditorResult: any }>;

	GetFileForCSVEditor(formSessionInfoId: string, componentId: string): { GetFileForCSVEditorResult: any };

	GetFileForCSVEditorPromise(formSessionInfoId: string, componentId: string): Promise<any>;

	UpdateCSVEditorRows(formSessionInfoId: string, componentName: string, rows: $D.Framework.Data.DataTypes.CSVEditorRow[], pageIndex: number, successCallback: (data: { UpdateCSVEditorRowsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateCSVEditorRowsResult: void }>;

	UpdateCSVEditorRows(formSessionInfoId: string, componentName: string, rows: $D.Framework.Data.DataTypes.CSVEditorRow[], pageIndex: number): { UpdateCSVEditorRowsResult: void };

	UpdateCSVEditorRowsPromise(formSessionInfoId: string, componentName: string, rows: $D.Framework.Data.DataTypes.CSVEditorRow[], pageIndex: number): Promise<void>;

	GetCSVEditorRowsFromFile(formSessionInfoId: string, componentId: string, fileId: string, successCallback: (data: { GetCSVEditorRowsFromFileResult: $D.Framework.Data.DataTypes.CSVEditorFileData }) => any, errorCallback?: () => any): JQueryPromise<{ GetCSVEditorRowsFromFileResult: $D.Framework.Data.DataTypes.CSVEditorFileData }>;

	GetCSVEditorRowsFromFile(formSessionInfoId: string, componentId: string, fileId: string): { GetCSVEditorRowsFromFileResult: $D.Framework.Data.DataTypes.CSVEditorFileData };

	GetCSVEditorRowsFromFilePromise(formSessionInfoId: string, componentId: string, fileId: string): Promise<$D.Framework.Data.DataTypes.CSVEditorFileData>;

	RegisterFormSession(formId: string, successCallback: (data: { RegisterFormSessionResult: $D.Framework.Design.Form.FormSessionInfoData }) => any, errorCallback?: () => any): JQueryPromise<{ RegisterFormSessionResult: $D.Framework.Design.Form.FormSessionInfoData }>;

	RegisterFormSession(formId: string): { RegisterFormSessionResult: $D.Framework.Design.Form.FormSessionInfoData };

	RegisterFormSessionPromise(formId: string): Promise<$D.Framework.Design.Form.FormSessionInfoData>;

	UpdateDataDependentControlsData(formSessionInfoId: string, formData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], controlsToUpdate: string[], successCallback: (data: { UpdateDataDependentControlsDataResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateDataDependentControlsDataResult: void }>;

	UpdateDataDependentControlsData(formSessionInfoId: string, formData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], controlsToUpdate: string[]): { UpdateDataDependentControlsDataResult: void };

	UpdateDataDependentControlsDataPromise(formSessionInfoId: string, formData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], controlsToUpdate: string[]): Promise<void>;

	DownloadFilesAsZip(formSessionInfoId: string, componentId: string, fileIds: string, zipName: string, successCallback: (data: { DownloadFilesAsZipResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ DownloadFilesAsZipResult: any }>;

	DownloadFilesAsZip(formSessionInfoId: string, componentId: string, fileIds: string, zipName: string): { DownloadFilesAsZipResult: any };

	DownloadFilesAsZipPromise(formSessionInfoId: string, componentId: string, fileIds: string, zipName: string): Promise<any>;

	AddImagesForImageGallery(formSessionInfoId: string, componentId: string, fileIds: string[], successCallback: (data: { AddImagesForImageGalleryResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ AddImagesForImageGalleryResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	AddImagesForImageGallery(formSessionInfoId: string, componentId: string, fileIds: string[]): { AddImagesForImageGalleryResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	AddImagesForImageGalleryPromise(formSessionInfoId: string, componentId: string, fileIds: string[]): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	RemoveImageForImageGallery(formSessionInfoId: string, componentId: string, fileId: string, successCallback: (data: { RemoveImageForImageGalleryResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveImageForImageGalleryResult: void }>;

	RemoveImageForImageGallery(formSessionInfoId: string, componentId: string, fileId: string): { RemoveImageForImageGalleryResult: void };

	RemoveImageForImageGalleryPromise(formSessionInfoId: string, componentId: string, fileId: string): Promise<void>;

	RunStartupValidations(formSessionInfoId: string, ruleSessionInfo: $D.Framework.Design.Form.RunRuleSessionInfo, successCallback: (data: { RunStartupValidationsResult: $D.Framework.Design.Form.EventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ RunStartupValidationsResult: $D.Framework.Design.Form.EventsReturn }>;

	RunStartupValidations(formSessionInfoId: string, ruleSessionInfo: $D.Framework.Design.Form.RunRuleSessionInfo): { RunStartupValidationsResult: $D.Framework.Design.Form.EventsReturn };

	RunStartupValidationsPromise(formSessionInfoId: string, ruleSessionInfo: $D.Framework.Design.Form.RunRuleSessionInfo): Promise<$D.Framework.Design.Form.EventsReturn>;

	ExecuteForm(executionData: $D.Framework.Design.Form.FormExecutionData, successCallback: (data: { ExecuteFormResult: $D.Framework.Design.Flow.Service.Execution.StandAloneFormInstruction }) => any, errorCallback?: () => any): JQueryPromise<{ ExecuteFormResult: $D.Framework.Design.Flow.Service.Execution.StandAloneFormInstruction }>;

	ExecuteForm(executionData: $D.Framework.Design.Form.FormExecutionData): { ExecuteFormResult: $D.Framework.Design.Flow.Service.Execution.StandAloneFormInstruction };

	ExecuteFormPromise(executionData: $D.Framework.Design.Form.FormExecutionData): Promise<$D.Framework.Design.Flow.Service.Execution.StandAloneFormInstruction>;

	FormLoadComplete(formSessionInfoId: string, successCallback: (data: { FormLoadCompleteResult: $D.Framework.Design.Form.EventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ FormLoadCompleteResult: $D.Framework.Design.Form.EventsReturn }>;

	FormLoadComplete(formSessionInfoId: string): { FormLoadCompleteResult: $D.Framework.Design.Form.EventsReturn };

	FormLoadCompletePromise(formSessionInfoId: string): Promise<$D.Framework.Design.Form.EventsReturn>;

	DeleteAdvancedDataGridRow(formSessionInfoId: string, componentId: string, rowIds: string[], successCallback: (data: { DeleteAdvancedDataGridRowResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteAdvancedDataGridRowResult: boolean }>;

	DeleteAdvancedDataGridRow(formSessionInfoId: string, componentId: string, rowIds: string[]): { DeleteAdvancedDataGridRowResult: boolean };

	DeleteAdvancedDataGridRowPromise(formSessionInfoId: string, componentId: string, rowIds: string[]): Promise<boolean>;

	GetFormDataDescriptions(formSessionInfoId: string, componentId: string, path: string, successCallback: (data: { GetFormDataDescriptionsResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetFormDataDescriptionsResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }>;

	GetFormDataDescriptions(formSessionInfoId: string, componentId: string, path: string): { GetFormDataDescriptionsResult: $D.Framework.Design.Flow.Mapping.DataDescription[] };

	GetFormDataDescriptionsPromise(formSessionInfoId: string, componentId: string, path: string): Promise<$D.Framework.Design.Flow.Mapping.DataDescription[]>;

	GetImageForFormControl(formSessionInfoId: string, componentId: string, propertyName: string, successCallback: (data: { GetImageForFormControlResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ GetImageForFormControlResult: any }>;

	GetImageForFormControl(formSessionInfoId: string, componentId: string, propertyName: string): { GetImageForFormControlResult: any };

	GetImageForFormControlPromise(formSessionInfoId: string, componentId: string, propertyName: string): Promise<any>;

	SyncContolsWithSameDataName(formSessionInfoId: string, componentId: string, values: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], successCallback: (data: { SyncContolsWithSameDataNameResult: $D.Framework.Design.Form.EventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ SyncContolsWithSameDataNameResult: $D.Framework.Design.Form.EventsReturn }>;

	SyncContolsWithSameDataName(formSessionInfoId: string, componentId: string, values: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): { SyncContolsWithSameDataNameResult: $D.Framework.Design.Form.EventsReturn };

	SyncContolsWithSameDataNamePromise(formSessionInfoId: string, componentId: string, values: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): Promise<$D.Framework.Design.Form.EventsReturn>;

	GetCSVEditorRows(formSessionInfoId: string, componentId: string, pageIndex: number, successCallback: (data: { GetCSVEditorRowsResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetCSVEditorRowsResult: string }>;

	GetCSVEditorRows(formSessionInfoId: string, componentId: string, pageIndex: number): { GetCSVEditorRowsResult: string };

	GetCSVEditorRowsPromise(formSessionInfoId: string, componentId: string, pageIndex: number): Promise<string>;

	UpdateAndGetCSVEditorRows(formSessionInfoId: string, componentName: string, componentId: string, rows: $D.Framework.Data.DataTypes.CSVEditorRow[], lastPageIndex: number, currentPageIndex: number, successCallback: (data: { UpdateAndGetCSVEditorRowsResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateAndGetCSVEditorRowsResult: string }>;

	UpdateAndGetCSVEditorRows(formSessionInfoId: string, componentName: string, componentId: string, rows: $D.Framework.Data.DataTypes.CSVEditorRow[], lastPageIndex: number, currentPageIndex: number): { UpdateAndGetCSVEditorRowsResult: string };

	UpdateAndGetCSVEditorRowsPromise(formSessionInfoId: string, componentName: string, componentId: string, rows: $D.Framework.Data.DataTypes.CSVEditorRow[], lastPageIndex: number, currentPageIndex: number): Promise<string>;

	IsFormSessionInfoOwner(formSessionInfoId: string, successCallback: (data: { IsFormSessionInfoOwnerResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ IsFormSessionInfoOwnerResult: boolean }>;

	IsFormSessionInfoOwner(formSessionInfoId: string): { IsFormSessionInfoOwnerResult: boolean };

	IsFormSessionInfoOwnerPromise(formSessionInfoId: string): Promise<boolean>;

	RemoveFormSessionInfoOwner(formSessionInfoId: string, successCallback: (data: { RemoveFormSessionInfoOwnerResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveFormSessionInfoOwnerResult: boolean }>;

	RemoveFormSessionInfoOwner(formSessionInfoId: string): { RemoveFormSessionInfoOwnerResult: boolean };

	RemoveFormSessionInfoOwnerPromise(formSessionInfoId: string): Promise<boolean>;

	GetOfflineFormSurfacesForFlow(flowId: string, successCallback: (data: { GetOfflineFormSurfacesForFlowResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetOfflineFormSurfacesForFlowResult: string[] }>;

	GetOfflineFormSurfacesForFlow(flowId: string): { GetOfflineFormSurfacesForFlowResult: string[] };

	GetOfflineFormSurfacesForFlowPromise(flowId: string): Promise<string[]>;

	SubmitOfflineForms(flowId: string, formSubmissions: $D.Framework.Design.Form.OfflineFormSubmission[], successCallback: (data: { SubmitOfflineFormsResult: $D.Framework.Design.Form.EventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ SubmitOfflineFormsResult: $D.Framework.Design.Form.EventsReturn }>;

	SubmitOfflineForms(flowId: string, formSubmissions: $D.Framework.Design.Form.OfflineFormSubmission[]): { SubmitOfflineFormsResult: $D.Framework.Design.Form.EventsReturn };

	SubmitOfflineFormsPromise(flowId: string, formSubmissions: $D.Framework.Design.Form.OfflineFormSubmission[]): Promise<$D.Framework.Design.Form.EventsReturn>;

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
	FormService(): FormServiceStatic;
}
