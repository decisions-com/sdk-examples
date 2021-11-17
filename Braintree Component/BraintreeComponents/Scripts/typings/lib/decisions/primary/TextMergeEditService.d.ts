/// <reference path="./datatypes._base.d.ts" />

interface TextMergeEditServiceStatic {

	OpenTextMergeForEditing(textId: string, successCallback: (data: { OpenTextMergeForEditingResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ OpenTextMergeForEditingResult: string }>;

	OpenTextMergeForEditing(textId: string): { OpenTextMergeForEditingResult: string };

	OpenTextMergeForEditingPromise(textId: string): Promise<string>;

	CancelTextMergeEdit(sessionId: string, successCallback: (data: { CancelTextMergeEditResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CancelTextMergeEditResult: void }>;

	CancelTextMergeEdit(sessionId: string): { CancelTextMergeEditResult: void };

	CancelTextMergeEditPromise(sessionId: string): Promise<void>;

	SessionExists(sessionId: string, successCallback: (data: { SessionExistsResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ SessionExistsResult: boolean }>;

	SessionExists(sessionId: string): { SessionExistsResult: boolean };

	SessionExistsPromise(sessionId: string): Promise<boolean>;

	SaveTextMerge(sessionId: string, text: string, successCallback: (data: { SaveTextMergeResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveTextMergeResult: void }>;

	SaveTextMerge(sessionId: string, text: string): { SaveTextMergeResult: void };

	SaveTextMergePromise(sessionId: string, text: string): Promise<void>;

	SaveTextMergeWithComment(sessionId: string, text: string, comment: string, successCallback: (data: { SaveTextMergeWithCommentResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveTextMergeWithCommentResult: void }>;

	SaveTextMergeWithComment(sessionId: string, text: string, comment: string): { SaveTextMergeWithCommentResult: void };

	SaveTextMergeWithCommentPromise(sessionId: string, text: string, comment: string): Promise<void>;

	SaveTextMergeWithPreview(sessionId: string, text: string, preview: number[], thumbnail: number[], successCallback: (data: { SaveTextMergeWithPreviewResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveTextMergeWithPreviewResult: void }>;

	SaveTextMergeWithPreview(sessionId: string, text: string, preview: number[], thumbnail: number[]): { SaveTextMergeWithPreviewResult: void };

	SaveTextMergeWithPreviewPromise(sessionId: string, text: string, preview: number[], thumbnail: number[]): Promise<void>;

	GetEditContextForTextMerge(sessionId: string, successCallback: (data: { GetEditContextForTextMergeResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetEditContextForTextMergeResult: string }>;

	GetEditContextForTextMerge(sessionId: string): { GetEditContextForTextMergeResult: string };

	GetEditContextForTextMergePromise(sessionId: string): Promise<string>;

	GetEditContextForFieldExtension(sessionId: string, fieldExtensionId: string, successCallback: (data: { GetEditContextForFieldExtensionResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetEditContextForFieldExtensionResult: string }>;

	GetEditContextForFieldExtension(sessionId: string, fieldExtensionId: string): { GetEditContextForFieldExtensionResult: string };

	GetEditContextForFieldExtensionPromise(sessionId: string, fieldExtensionId: string): Promise<string>;

	GetTextFromTextMerge(sessionId: string, successCallback: (data: { GetTextFromTextMergeResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetTextFromTextMergeResult: string }>;

	GetTextFromTextMerge(sessionId: string): { GetTextFromTextMergeResult: string };

	GetTextFromTextMergePromise(sessionId: string): Promise<string>;

	GetInputDataDescriptions(sessionId: string, successCallback: (data: { GetInputDataDescriptionsResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetInputDataDescriptionsResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }>;

	GetInputDataDescriptions(sessionId: string): { GetInputDataDescriptionsResult: $D.Framework.Design.Flow.Mapping.DataDescription[] };

	GetInputDataDescriptionsPromise(sessionId: string): Promise<$D.Framework.Design.Flow.Mapping.DataDescription[]>;

	GetInputSubDataDescriptions(sessionId: string, path: string, successCallback: (data: { GetInputSubDataDescriptionsResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetInputSubDataDescriptionsResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }>;

	GetInputSubDataDescriptions(sessionId: string, path: string): { GetInputSubDataDescriptionsResult: $D.Framework.Design.Flow.Mapping.DataDescription[] };

	GetInputSubDataDescriptionsPromise(sessionId: string, path: string): Promise<$D.Framework.Design.Flow.Mapping.DataDescription[]>;

	GetInputDataDescriptionByPath(sessionId: string, path: string, successCallback: (data: { GetInputDataDescriptionByPathResult: $D.Framework.Design.Flow.Mapping.DataDescription }) => any, errorCallback?: () => any): JQueryPromise<{ GetInputDataDescriptionByPathResult: $D.Framework.Design.Flow.Mapping.DataDescription }>;

	GetInputDataDescriptionByPath(sessionId: string, path: string): { GetInputDataDescriptionByPathResult: $D.Framework.Design.Flow.Mapping.DataDescription };

	GetInputDataDescriptionByPathPromise(sessionId: string, path: string): Promise<$D.Framework.Design.Flow.Mapping.DataDescription>;

	GetCalculatedFields(successCallback: (data: { GetCalculatedFieldsResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetCalculatedFieldsResult: string[] }>;

	GetCalculatedFields(): { GetCalculatedFieldsResult: string[] };

	GetCalculatedFieldsPromise(): Promise<string[]>;

	AddCalculatedField(sessionId: string, name: string, successCallback: (data: { AddCalculatedFieldResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddCalculatedFieldResult: string }>;

	AddCalculatedField(sessionId: string, name: string): { AddCalculatedFieldResult: string };

	AddCalculatedFieldPromise(sessionId: string, name: string): Promise<string>;

	AddKnownDataFieldExtension(sessionId: string, name: string, successCallback: (data: { AddKnownDataFieldExtensionResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddKnownDataFieldExtensionResult: string }>;

	AddKnownDataFieldExtension(sessionId: string, name: string): { AddKnownDataFieldExtensionResult: string };

	AddKnownDataFieldExtensionPromise(sessionId: string, name: string): Promise<string>;

	RemoveFieldExtension(sessionId: string, fieldExtensionId: string, successCallback: (data: { RemoveFieldExtensionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveFieldExtensionResult: void }>;

	RemoveFieldExtension(sessionId: string, fieldExtensionId: string): { RemoveFieldExtensionResult: void };

	RemoveFieldExtensionPromise(sessionId: string, fieldExtensionId: string): Promise<void>;

	GetDynamicTreeCategories(sessionId: string, path: string, successCallback: (data: { GetDynamicTreeCategoriesResult: $D.Framework.Design.Text.DynamicTreeNode[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetDynamicTreeCategoriesResult: $D.Framework.Design.Text.DynamicTreeNode[] }>;

	GetDynamicTreeCategories(sessionId: string, path: string): { GetDynamicTreeCategoriesResult: $D.Framework.Design.Text.DynamicTreeNode[] };

	GetDynamicTreeCategoriesPromise(sessionId: string, path: string): Promise<$D.Framework.Design.Text.DynamicTreeNode[]>;

	GetDynamicTreeDataNodes(sessionId: string, path: string, successCallback: (data: { GetDynamicTreeDataNodesResult: $D.Framework.Design.Text.DynamicTreeNode[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetDynamicTreeDataNodesResult: $D.Framework.Design.Text.DynamicTreeNode[] }>;

	GetDynamicTreeDataNodes(sessionId: string, path: string): { GetDynamicTreeDataNodesResult: $D.Framework.Design.Text.DynamicTreeNode[] };

	GetDynamicTreeDataNodesPromise(sessionId: string, path: string): Promise<$D.Framework.Design.Text.DynamicTreeNode[]>;

	RegisterContextProviderForInputs(textId: string, successCallback: (data: { RegisterContextProviderForInputsResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ RegisterContextProviderForInputsResult: string }>;

	RegisterContextProviderForInputs(textId: string): { RegisterContextProviderForInputsResult: string };

	RegisterContextProviderForInputsPromise(textId: string): Promise<string>;

	RegisterContextProviderForInputsWithData(textId: string, data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], successCallback: (data: { RegisterContextProviderForInputsWithDataResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ RegisterContextProviderForInputsWithDataResult: string }>;

	RegisterContextProviderForInputsWithData(textId: string, data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): { RegisterContextProviderForInputsWithDataResult: string };

	RegisterContextProviderForInputsWithDataPromise(textId: string, data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): Promise<string>;

	GetTextMergeInputs(textId: string, successCallback: (data: { GetTextMergeInputsResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetTextMergeInputsResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }>;

	GetTextMergeInputs(textId: string): { GetTextMergeInputsResult: $D.Framework.Design.Flow.Mapping.DataDescription[] };

	GetTextMergeInputsPromise(textId: string): Promise<$D.Framework.Design.Flow.Mapping.DataDescription[]>;

	DoTextMergeWithEditingData(textId: string, contextId: string, successCallback: (data: { DoTextMergeWithEditingDataResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ DoTextMergeWithEditingDataResult: string }>;

	DoTextMergeWithEditingData(textId: string, contextId: string): { DoTextMergeWithEditingDataResult: string };

	DoTextMergeWithEditingDataPromise(textId: string, contextId: string): Promise<string>;

	DoHtmlMergeWithEditingData(textId: string, contextId: string, successCallback: (data: { DoHtmlMergeWithEditingDataResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ DoHtmlMergeWithEditingDataResult: string }>;

	DoHtmlMergeWithEditingData(textId: string, contextId: string): { DoHtmlMergeWithEditingDataResult: string };

	DoHtmlMergeWithEditingDataPromise(textId: string, contextId: string): Promise<string>;

	DoPDFMergeWithEditingData(textId: string, contextId: string, successCallback: (data: { DoPDFMergeWithEditingDataResult: number[] }) => any, errorCallback?: () => any): JQueryPromise<{ DoPDFMergeWithEditingDataResult: number[] }>;

	DoPDFMergeWithEditingData(textId: string, contextId: string): { DoPDFMergeWithEditingDataResult: number[] };

	DoPDFMergeWithEditingDataPromise(textId: string, contextId: string): Promise<number[]>;

	DoDOCMergeWithEditingData(textId: string, contextId: string, successCallback: (data: { DoDOCMergeWithEditingDataResult: number[] }) => any, errorCallback?: () => any): JQueryPromise<{ DoDOCMergeWithEditingDataResult: number[] }>;

	DoDOCMergeWithEditingData(textId: string, contextId: string): { DoDOCMergeWithEditingDataResult: number[] };

	DoDOCMergeWithEditingDataPromise(textId: string, contextId: string): Promise<number[]>;

	DoCellsMergeWithEditingData(cellsMergeId: string, contextId: string, successCallback: (data: { DoCellsMergeWithEditingDataResult: $D.Framework.Design.Text.Cells.CellsMergeResult }) => any, errorCallback?: () => any): JQueryPromise<{ DoCellsMergeWithEditingDataResult: $D.Framework.Design.Text.Cells.CellsMergeResult }>;

	DoCellsMergeWithEditingData(cellsMergeId: string, contextId: string): { DoCellsMergeWithEditingDataResult: $D.Framework.Design.Text.Cells.CellsMergeResult };

	DoCellsMergeWithEditingDataPromise(cellsMergeId: string, contextId: string): Promise<$D.Framework.Design.Text.Cells.CellsMergeResult>;

	SetCellsMergeTableTemplate(cellsMergeSessionId: string, template: $D.Framework.Design.Report.Matrix.IntersectionTemplate.TableTemplate, successCallback: (data: { SetCellsMergeTableTemplateResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetCellsMergeTableTemplateResult: void }>;

	SetCellsMergeTableTemplate(cellsMergeSessionId: string, template: $D.Framework.Design.Report.Matrix.IntersectionTemplate.TableTemplate): { SetCellsMergeTableTemplateResult: void };

	SetCellsMergeTableTemplatePromise(cellsMergeSessionId: string, template: $D.Framework.Design.Report.Matrix.IntersectionTemplate.TableTemplate): Promise<void>;

	GetTableTemplateFromCellsMerge(cellsMergeSessionId: string, successCallback: (data: { GetTableTemplateFromCellsMergeResult: $D.Framework.Design.Report.Matrix.IntersectionTemplate.TableTemplate }) => any, errorCallback?: () => any): JQueryPromise<{ GetTableTemplateFromCellsMergeResult: $D.Framework.Design.Report.Matrix.IntersectionTemplate.TableTemplate }>;

	GetTableTemplateFromCellsMerge(cellsMergeSessionId: string): { GetTableTemplateFromCellsMergeResult: $D.Framework.Design.Report.Matrix.IntersectionTemplate.TableTemplate };

	GetTableTemplateFromCellsMergePromise(cellsMergeSessionId: string): Promise<$D.Framework.Design.Report.Matrix.IntersectionTemplate.TableTemplate>;

	SaveCellsMerge(sessionId: string, tableTemplate: $D.Framework.Design.Report.Matrix.IntersectionTemplate.TableTemplate, successCallback: (data: { SaveCellsMergeResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveCellsMergeResult: void }>;

	SaveCellsMerge(sessionId: string, tableTemplate: $D.Framework.Design.Report.Matrix.IntersectionTemplate.TableTemplate): { SaveCellsMergeResult: void };

	SaveCellsMergePromise(sessionId: string, tableTemplate: $D.Framework.Design.Report.Matrix.IntersectionTemplate.TableTemplate): Promise<void>;

	SaveCellsMergeWithPreview(sessionId: string, tableTemplate: $D.Framework.Design.Report.Matrix.IntersectionTemplate.TableTemplate, preview: number[], thumbnail: number[], successCallback: (data: { SaveCellsMergeWithPreviewResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveCellsMergeWithPreviewResult: void }>;

	SaveCellsMergeWithPreview(sessionId: string, tableTemplate: $D.Framework.Design.Report.Matrix.IntersectionTemplate.TableTemplate, preview: number[], thumbnail: number[]): { SaveCellsMergeWithPreviewResult: void };

	SaveCellsMergeWithPreviewPromise(sessionId: string, tableTemplate: $D.Framework.Design.Report.Matrix.IntersectionTemplate.TableTemplate, preview: number[], thumbnail: number[]): Promise<void>;

	SearchNodes(sessionId: string, criteria: string, successCallback: (data: { SearchNodesResult: $D.Framework.Design.Text.MergeEditorNode[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchNodesResult: $D.Framework.Design.Text.MergeEditorNode[] }>;

	SearchNodes(sessionId: string, criteria: string): { SearchNodesResult: $D.Framework.Design.Text.MergeEditorNode[] };

	SearchNodesPromise(sessionId: string, criteria: string): Promise<$D.Framework.Design.Text.MergeEditorNode[]>;

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
	TextMergeEditService(): TextMergeEditServiceStatic;
}
