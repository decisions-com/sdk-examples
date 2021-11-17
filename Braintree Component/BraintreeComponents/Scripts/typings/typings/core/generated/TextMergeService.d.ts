/// <reference path="./datatypes._base.d.ts" />

interface TextMergeServiceStatic {

	DoHTMLMerge(textMergeId: string, inputs: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], successCallback: (data: { DoHTMLMergeResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ DoHTMLMergeResult: string }>;

	DoHTMLMerge(textMergeId: string, inputs: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): { DoHTMLMergeResult: string };

	DoHTMLMergePromise(textMergeId: string, inputs: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): Promise<string>;

	DoTextMerge(textMergeId: string, inputs: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], successCallback: (data: { DoTextMergeResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ DoTextMergeResult: string }>;

	DoTextMerge(textMergeId: string, inputs: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): { DoTextMergeResult: string };

	DoTextMergePromise(textMergeId: string, inputs: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): Promise<string>;

	DoPDFMerge(textMergeId: string, inputs: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], successCallback: (data: { DoPDFMergeResult: number[] }) => any, errorCallback?: () => any): JQueryPromise<{ DoPDFMergeResult: number[] }>;

	DoPDFMerge(textMergeId: string, inputs: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): { DoPDFMergeResult: number[] };

	DoPDFMergePromise(textMergeId: string, inputs: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): Promise<number[]>;

	DoDOCMerge(textMergeId: string, inputs: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], successCallback: (data: { DoDOCMergeResult: number[] }) => any, errorCallback?: () => any): JQueryPromise<{ DoDOCMergeResult: number[] }>;

	DoDOCMerge(textMergeId: string, inputs: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): { DoDOCMergeResult: number[] };

	DoDOCMergePromise(textMergeId: string, inputs: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): Promise<number[]>;

	DoCellsMerge(cellsMergeId: string, inputs: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], successCallback: (data: { DoCellsMergeResult: $D.Framework.Design.Text.Cells.CellsMergeResult }) => any, errorCallback?: () => any): JQueryPromise<{ DoCellsMergeResult: $D.Framework.Design.Text.Cells.CellsMergeResult }>;

	DoCellsMerge(cellsMergeId: string, inputs: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): { DoCellsMergeResult: $D.Framework.Design.Text.Cells.CellsMergeResult };

	DoCellsMergePromise(cellsMergeId: string, inputs: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): Promise<$D.Framework.Design.Text.Cells.CellsMergeResult>;

	GetTextMergePreviewOptions(textMergeId: string, successCallback: (data: { GetTextMergePreviewOptionsResult: $D.Framework.Design.Text.TextMergePreviewOptions }) => any, errorCallback?: () => any): JQueryPromise<{ GetTextMergePreviewOptionsResult: $D.Framework.Design.Text.TextMergePreviewOptions }>;

	GetTextMergePreviewOptions(textMergeId: string): { GetTextMergePreviewOptionsResult: $D.Framework.Design.Text.TextMergePreviewOptions };

	GetTextMergePreviewOptionsPromise(textMergeId: string): Promise<$D.Framework.Design.Text.TextMergePreviewOptions>;

	GetCellsMergeHTMLOutputUrl(cellsMergeId: string, inputsContextId: string, successCallback: (data: { GetCellsMergeHTMLOutputUrlResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetCellsMergeHTMLOutputUrlResult: string }>;

	GetCellsMergeHTMLOutputUrl(cellsMergeId: string, inputsContextId: string): { GetCellsMergeHTMLOutputUrlResult: string };

	GetCellsMergeHTMLOutputUrlPromise(cellsMergeId: string, inputsContextId: string): Promise<string>;

	GetDynamicTreeDataNodes(path: string, data: $D.Framework.Design.Flow.Mapping.DataDescription[], type: $D.Framework.Utilities.Data.MergeDataType, successCallback: (data: { GetDynamicTreeDataNodesResult: $D.Framework.Design.Text.DynamicTreeNode[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetDynamicTreeDataNodesResult: $D.Framework.Design.Text.DynamicTreeNode[] }>;

	GetDynamicTreeDataNodes(path: string, data: $D.Framework.Design.Flow.Mapping.DataDescription[], type: $D.Framework.Utilities.Data.MergeDataType): { GetDynamicTreeDataNodesResult: $D.Framework.Design.Text.DynamicTreeNode[] };

	GetDynamicTreeDataNodesPromise(path: string, data: $D.Framework.Design.Flow.Mapping.DataDescription[], type: $D.Framework.Utilities.Data.MergeDataType): Promise<$D.Framework.Design.Text.DynamicTreeNode[]>;

	GetDynamicTreeCategories(path: string, data: $D.Framework.Design.Flow.Mapping.DataDescription[], type: $D.Framework.Utilities.Data.MergeDataType, successCallback: (data: { GetDynamicTreeCategoriesResult: $D.Framework.Design.Text.DynamicTreeNode[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetDynamicTreeCategoriesResult: $D.Framework.Design.Text.DynamicTreeNode[] }>;

	GetDynamicTreeCategories(path: string, data: $D.Framework.Design.Flow.Mapping.DataDescription[], type: $D.Framework.Utilities.Data.MergeDataType): { GetDynamicTreeCategoriesResult: $D.Framework.Design.Text.DynamicTreeNode[] };

	GetDynamicTreeCategoriesPromise(path: string, data: $D.Framework.Design.Flow.Mapping.DataDescription[], type: $D.Framework.Utilities.Data.MergeDataType): Promise<$D.Framework.Design.Text.DynamicTreeNode[]>;

	FetchHtmlFromUrl(url: string, successCallback: (data: { FetchHtmlFromUrlResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ FetchHtmlFromUrlResult: string }>;

	FetchHtmlFromUrl(url: string): { FetchHtmlFromUrlResult: string };

	FetchHtmlFromUrlPromise(url: string): Promise<string>;

	GetDynamicDesignText(path: string, successCallback: (data: { GetDynamicDesignTextResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetDynamicDesignTextResult: string }>;

	GetDynamicDesignText(path: string): { GetDynamicDesignTextResult: string };

	GetDynamicDesignTextPromise(path: string): Promise<string>;

	SearchNodes(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, criteria: string, type: $D.Framework.Utilities.Data.MergeDataType, successCallback: (data: { SearchNodesResult: $D.Framework.Design.Text.MergeEditorNode[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchNodesResult: $D.Framework.Design.Text.MergeEditorNode[] }>;

	SearchNodes(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, criteria: string, type: $D.Framework.Utilities.Data.MergeDataType): { SearchNodesResult: $D.Framework.Design.Text.MergeEditorNode[] };

	SearchNodesPromise(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, criteria: string, type: $D.Framework.Utilities.Data.MergeDataType): Promise<$D.Framework.Design.Text.MergeEditorNode[]>;

	GetMissingFields(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, rawInputString: string, type: $D.Framework.Utilities.Data.MergeDataType, successCallback: (data: { GetMissingFieldsResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMissingFieldsResult: string[] }>;

	GetMissingFields(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, rawInputString: string, type: $D.Framework.Utilities.Data.MergeDataType): { GetMissingFieldsResult: string[] };

	GetMissingFieldsPromise(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, rawInputString: string, type: $D.Framework.Utilities.Data.MergeDataType): Promise<string[]>;

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
	TextMergeService(): TextMergeServiceStatic;
}
