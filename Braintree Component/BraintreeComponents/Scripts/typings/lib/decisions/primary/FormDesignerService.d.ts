/// <reference path="./datatypes._base.d.ts" />

interface FormDesignerServiceStatic {

	Load(elementRegistrationtID: string, folderId: string, flowSessionId: string, flowStepId: string, successCallback: (data: { LoadResult: $D.Framework.Design.Form.FormDesignInfo }) => any, errorCallback?: () => any): JQueryPromise<{ LoadResult: $D.Framework.Design.Form.FormDesignInfo }>;

	Load(elementRegistrationtID: string, folderId: string, flowSessionId: string, flowStepId: string): { LoadResult: $D.Framework.Design.Form.FormDesignInfo };

	LoadPromise(elementRegistrationtID: string, folderId: string, flowSessionId: string, flowStepId: string): Promise<$D.Framework.Design.Form.FormDesignInfo>;

	Close(formDesignerSessionInfoId: string, successCallback: (data: { CloseResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CloseResult: void }>;

	Close(formDesignerSessionInfoId: string): { CloseResult: void };

	ClosePromise(formDesignerSessionInfoId: string): Promise<void>;

	FormHasChanges(formDesignerSessionInfoId: string, successCallback: (data: { FormHasChangesResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ FormHasChangesResult: boolean }>;

	FormHasChanges(formDesignerSessionInfoId: string): { FormHasChangesResult: boolean };

	FormHasChangesPromise(formDesignerSessionInfoId: string): Promise<boolean>;

	Save(formDesignerSessionInfoId: string, successCallback: (data: { SaveResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveResult: void }>;

	Save(formDesignerSessionInfoId: string): { SaveResult: void };

	SavePromise(formDesignerSessionInfoId: string): Promise<void>;

	SaveWithPreview(formDesignerSessionInfoId: string, preview: number[], successCallback: (data: { SaveWithPreviewResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveWithPreviewResult: void }>;

	SaveWithPreview(formDesignerSessionInfoId: string, preview: number[]): { SaveWithPreviewResult: void };

	SaveWithPreviewPromise(formDesignerSessionInfoId: string, preview: number[]): Promise<void>;

	SaveWithPreviewAndComment(formDesignerSessionInfoId: string, preview: number[], comment: string, successCallback: (data: { SaveWithPreviewAndCommentResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveWithPreviewAndCommentResult: void }>;

	SaveWithPreviewAndComment(formDesignerSessionInfoId: string, preview: number[], comment: string): { SaveWithPreviewAndCommentResult: void };

	SaveWithPreviewAndCommentPromise(formDesignerSessionInfoId: string, preview: number[], comment: string): Promise<void>;

	GetDesignerSurface(formDesignerSessionInfoId: string, successCallback: (data: { GetDesignerSurfaceResult: number[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetDesignerSurfaceResult: number[] }>;

	GetDesignerSurface(formDesignerSessionInfoId: string): { GetDesignerSurfaceResult: number[] };

	GetDesignerSurfacePromise(formDesignerSessionInfoId: string): Promise<number[]>;

	GetDesignerTree(formDesignerSessionInfoId: string, successCallback: (data: { GetDesignerTreeResult: $D.Framework.Design.Form.FormElementInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetDesignerTreeResult: $D.Framework.Design.Form.FormElementInfo[] }>;

	GetDesignerTree(formDesignerSessionInfoId: string): { GetDesignerTreeResult: $D.Framework.Design.Form.FormElementInfo[] };

	GetDesignerTreePromise(formDesignerSessionInfoId: string): Promise<$D.Framework.Design.Form.FormElementInfo[]>;

	GetFormDesignInfo(formDesignerSessionInfoId: string, successCallback: (data: { GetFormDesignInfoResult: $D.Framework.Design.Form.FormDesignInfo }) => any, errorCallback?: () => any): JQueryPromise<{ GetFormDesignInfoResult: $D.Framework.Design.Form.FormDesignInfo }>;

	GetFormDesignInfo(formDesignerSessionInfoId: string): { GetFormDesignInfoResult: $D.Framework.Design.Form.FormDesignInfo };

	GetFormDesignInfoPromise(formDesignerSessionInfoId: string): Promise<$D.Framework.Design.Form.FormDesignInfo>;

	GetEditObjectContext(formDesignerSessionInfoId: string, componentIds: string[], successCallback: (data: { GetEditObjectContextResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetEditObjectContextResult: string }>;

	GetEditObjectContext(formDesignerSessionInfoId: string, componentIds: string[]): { GetEditObjectContextResult: string };

	GetEditObjectContextPromise(formDesignerSessionInfoId: string, componentIds: string[]): Promise<string>;

	AddFormInputData(formDesignerSessionInfoId: string, successCallback: (data: { AddFormInputDataResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddFormInputDataResult: string }>;

	AddFormInputData(formDesignerSessionInfoId: string): { AddFormInputDataResult: string };

	AddFormInputDataPromise(formDesignerSessionInfoId: string): Promise<string>;

	GetQuickEditObjectContext(formDesignerSessionInfoId: string, componentId: string, genericComponent: boolean, successCallback: (data: { GetQuickEditObjectContextResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetQuickEditObjectContextResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	GetQuickEditObjectContext(formDesignerSessionInfoId: string, componentId: string, genericComponent: boolean): { GetQuickEditObjectContextResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	GetQuickEditObjectContextPromise(formDesignerSessionInfoId: string, componentId: string, genericComponent: boolean): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	SetComponentQuickEditValue(formDesignerSessionInfoId: string, componentId: string, value: string, successCallback: (data: { SetComponentQuickEditValueResult: $D.Framework.Design.Form.EventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ SetComponentQuickEditValueResult: $D.Framework.Design.Form.EventsReturn }>;

	SetComponentQuickEditValue(formDesignerSessionInfoId: string, componentId: string, value: string): { SetComponentQuickEditValueResult: $D.Framework.Design.Form.EventsReturn };

	SetComponentQuickEditValuePromise(formDesignerSessionInfoId: string, componentId: string, value: string): Promise<$D.Framework.Design.Form.EventsReturn>;

	ReplaceComponent(formDesignerSessionInfoId: string, componentId: string, replacement: $D.Framework.Design.Form.ControlReplacementInfo, successCallback: (data: { ReplaceComponentResult: $D.Framework.Design.Form.EventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ ReplaceComponentResult: $D.Framework.Design.Form.EventsReturn }>;

	ReplaceComponent(formDesignerSessionInfoId: string, componentId: string, replacement: $D.Framework.Design.Form.ControlReplacementInfo): { ReplaceComponentResult: $D.Framework.Design.Form.EventsReturn };

	ReplaceComponentPromise(formDesignerSessionInfoId: string, componentId: string, replacement: $D.Framework.Design.Form.ControlReplacementInfo): Promise<$D.Framework.Design.Form.EventsReturn>;

	GetComponentEditors(formDesignerSessionInfoId: string, componentId: string, includeQuickAdd: boolean, successCallback: (data: { GetComponentEditorsResult: $D.Framework.Design.Properties.EditorInformation[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetComponentEditorsResult: $D.Framework.Design.Properties.EditorInformation[] }>;

	GetComponentEditors(formDesignerSessionInfoId: string, componentId: string, includeQuickAdd: boolean): { GetComponentEditorsResult: $D.Framework.Design.Properties.EditorInformation[] };

	GetComponentEditorsPromise(formDesignerSessionInfoId: string, componentId: string, includeQuickAdd: boolean): Promise<$D.Framework.Design.Properties.EditorInformation[]>;

	AddGridRow(formDesignerSessionInfoId: string, componentId: string, successCallback: (data: { AddGridRowResult: $D.Framework.Design.Form.EventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ AddGridRowResult: $D.Framework.Design.Form.EventsReturn }>;

	AddGridRow(formDesignerSessionInfoId: string, componentId: string): { AddGridRowResult: $D.Framework.Design.Form.EventsReturn };

	AddGridRowPromise(formDesignerSessionInfoId: string, componentId: string): Promise<$D.Framework.Design.Form.EventsReturn>;

	AddGridColumn(formDesignerSessionInfoId: string, componentId: string, successCallback: (data: { AddGridColumnResult: $D.Framework.Design.Form.EventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ AddGridColumnResult: $D.Framework.Design.Form.EventsReturn }>;

	AddGridColumn(formDesignerSessionInfoId: string, componentId: string): { AddGridColumnResult: $D.Framework.Design.Form.EventsReturn };

	AddGridColumnPromise(formDesignerSessionInfoId: string, componentId: string): Promise<$D.Framework.Design.Form.EventsReturn>;

	InsertRowAt(formDesignerSessionInfoId: string, currentRowIndex: number, componentId: string, insertAt: $D.Framework.Design.Form.InsertColumnRowAt, successCallback: (data: { InsertRowAtResult: $D.Framework.Design.Form.EventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ InsertRowAtResult: $D.Framework.Design.Form.EventsReturn }>;

	InsertRowAt(formDesignerSessionInfoId: string, currentRowIndex: number, componentId: string, insertAt: $D.Framework.Design.Form.InsertColumnRowAt): { InsertRowAtResult: $D.Framework.Design.Form.EventsReturn };

	InsertRowAtPromise(formDesignerSessionInfoId: string, currentRowIndex: number, componentId: string, insertAt: $D.Framework.Design.Form.InsertColumnRowAt): Promise<$D.Framework.Design.Form.EventsReturn>;

	InsertColumnAt(formDesignerSessionInfoId: string, currentColumnIndex: number, componentId: string, insertAt: $D.Framework.Design.Form.InsertColumnRowAt, successCallback: (data: { InsertColumnAtResult: $D.Framework.Design.Form.EventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ InsertColumnAtResult: $D.Framework.Design.Form.EventsReturn }>;

	InsertColumnAt(formDesignerSessionInfoId: string, currentColumnIndex: number, componentId: string, insertAt: $D.Framework.Design.Form.InsertColumnRowAt): { InsertColumnAtResult: $D.Framework.Design.Form.EventsReturn };

	InsertColumnAtPromise(formDesignerSessionInfoId: string, currentColumnIndex: number, componentId: string, insertAt: $D.Framework.Design.Form.InsertColumnRowAt): Promise<$D.Framework.Design.Form.EventsReturn>;

	InsertRowAtViaContextId(editingContextId: string, currentRowIndex: number, path: string[], insertAt: $D.Framework.Design.Form.InsertColumnRowAt, successCallback: (data: { InsertRowAtViaContextIdResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ InsertRowAtViaContextIdResult: void }>;

	InsertRowAtViaContextId(editingContextId: string, currentRowIndex: number, path: string[], insertAt: $D.Framework.Design.Form.InsertColumnRowAt): { InsertRowAtViaContextIdResult: void };

	InsertRowAtViaContextIdPromise(editingContextId: string, currentRowIndex: number, path: string[], insertAt: $D.Framework.Design.Form.InsertColumnRowAt): Promise<void>;

	InsertColumnAtViaContextId(editingContextId: string, currentColumnIndex: number, path: string[], insertAt: $D.Framework.Design.Form.InsertColumnRowAt, successCallback: (data: { InsertColumnAtViaContextIdResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ InsertColumnAtViaContextIdResult: void }>;

	InsertColumnAtViaContextId(editingContextId: string, currentColumnIndex: number, path: string[], insertAt: $D.Framework.Design.Form.InsertColumnRowAt): { InsertColumnAtViaContextIdResult: void };

	InsertColumnAtViaContextIdPromise(editingContextId: string, currentColumnIndex: number, path: string[], insertAt: $D.Framework.Design.Form.InsertColumnRowAt): Promise<void>;

	ConvertToGridLayout(formDesignerSessionInfoId: string, componentId: string, recursive: boolean, successCallback: (data: { ConvertToGridLayoutResult: $D.Framework.Design.Form.EventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ ConvertToGridLayoutResult: $D.Framework.Design.Form.EventsReturn }>;

	ConvertToGridLayout(formDesignerSessionInfoId: string, componentId: string, recursive: boolean): { ConvertToGridLayoutResult: $D.Framework.Design.Form.EventsReturn };

	ConvertToGridLayoutPromise(formDesignerSessionInfoId: string, componentId: string, recursive: boolean): Promise<$D.Framework.Design.Form.EventsReturn>;

	UpdateUserDefinedComponentFormId(formDesignerSessionInfoId: string, componentId: string, formId: string, successCallback: (data: { UpdateUserDefinedComponentFormIdResult: $D.Framework.Design.Form.EventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateUserDefinedComponentFormIdResult: $D.Framework.Design.Form.EventsReturn }>;

	UpdateUserDefinedComponentFormId(formDesignerSessionInfoId: string, componentId: string, formId: string): { UpdateUserDefinedComponentFormIdResult: $D.Framework.Design.Form.EventsReturn };

	UpdateUserDefinedComponentFormIdPromise(formDesignerSessionInfoId: string, componentId: string, formId: string): Promise<$D.Framework.Design.Form.EventsReturn>;

	AddComponent(formDesignerSessionInfoId: string, componentInfo: $D.Framework.Design.Form.FormComponentCreationInfo, successCallback: (data: { AddComponentResult: $D.Framework.Design.Form.EventsAndDataReturn }) => any, errorCallback?: () => any): JQueryPromise<{ AddComponentResult: $D.Framework.Design.Form.EventsAndDataReturn }>;

	AddComponent(formDesignerSessionInfoId: string, componentInfo: $D.Framework.Design.Form.FormComponentCreationInfo): { AddComponentResult: $D.Framework.Design.Form.EventsAndDataReturn };

	AddComponentPromise(formDesignerSessionInfoId: string, componentInfo: $D.Framework.Design.Form.FormComponentCreationInfo): Promise<$D.Framework.Design.Form.EventsAndDataReturn>;

	CreateLabelForComponent(formDesignerSessionInfoId: string, componentId: string, label: string, labelInfo: $D.Framework.Design.Form.FormComponentCreationInfo, successCallback: (data: { CreateLabelForComponentResult: $D.Framework.Design.Form.EventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ CreateLabelForComponentResult: $D.Framework.Design.Form.EventsReturn }>;

	CreateLabelForComponent(formDesignerSessionInfoId: string, componentId: string, label: string, labelInfo: $D.Framework.Design.Form.FormComponentCreationInfo): { CreateLabelForComponentResult: $D.Framework.Design.Form.EventsReturn };

	CreateLabelForComponentPromise(formDesignerSessionInfoId: string, componentId: string, label: string, labelInfo: $D.Framework.Design.Form.FormComponentCreationInfo): Promise<$D.Framework.Design.Form.EventsReturn>;

	MoveComponent(formDesignerSessionInfoId: string, componentInfo: $D.Framework.Design.Form.FormComponentMoveInfo, successCallback: (data: { MoveComponentResult: $D.Framework.Design.Form.EventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ MoveComponentResult: $D.Framework.Design.Form.EventsReturn }>;

	MoveComponent(formDesignerSessionInfoId: string, componentInfo: $D.Framework.Design.Form.FormComponentMoveInfo): { MoveComponentResult: $D.Framework.Design.Form.EventsReturn };

	MoveComponentPromise(formDesignerSessionInfoId: string, componentInfo: $D.Framework.Design.Form.FormComponentMoveInfo): Promise<$D.Framework.Design.Form.EventsReturn>;

	MoveComponents(formDesignerSessionInfoId: string, componentInfos: $D.Framework.Design.Form.FormComponentMoveInfo[], successCallback: (data: { MoveComponentsResult: $D.Framework.Design.Form.EventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ MoveComponentsResult: $D.Framework.Design.Form.EventsReturn }>;

	MoveComponents(formDesignerSessionInfoId: string, componentInfos: $D.Framework.Design.Form.FormComponentMoveInfo[]): { MoveComponentsResult: $D.Framework.Design.Form.EventsReturn };

	MoveComponentsPromise(formDesignerSessionInfoId: string, componentInfos: $D.Framework.Design.Form.FormComponentMoveInfo[]): Promise<$D.Framework.Design.Form.EventsReturn>;

	UpdateComponent(formDesignerSessionInfoId: string, componentInfo: $D.Framework.Design.Form.FormComponentInfo, successCallback: (data: { UpdateComponentResult: $D.Framework.Design.Form.EventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateComponentResult: $D.Framework.Design.Form.EventsReturn }>;

	UpdateComponent(formDesignerSessionInfoId: string, componentInfo: $D.Framework.Design.Form.FormComponentInfo): { UpdateComponentResult: $D.Framework.Design.Form.EventsReturn };

	UpdateComponentPromise(formDesignerSessionInfoId: string, componentInfo: $D.Framework.Design.Form.FormComponentInfo): Promise<$D.Framework.Design.Form.EventsReturn>;

	UpdateComponents(formDesignerSessionInfoId: string, componentInfos: $D.Framework.Design.Form.FormComponentInfo[], successCallback: (data: { UpdateComponentsResult: $D.Framework.Design.Form.EventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateComponentsResult: $D.Framework.Design.Form.EventsReturn }>;

	UpdateComponents(formDesignerSessionInfoId: string, componentInfos: $D.Framework.Design.Form.FormComponentInfo[]): { UpdateComponentsResult: $D.Framework.Design.Form.EventsReturn };

	UpdateComponentsPromise(formDesignerSessionInfoId: string, componentInfos: $D.Framework.Design.Form.FormComponentInfo[]): Promise<$D.Framework.Design.Form.EventsReturn>;

	RemoveComponents(formDesignerSessionInfoId: string, componentIds: string[], successCallback: (data: { RemoveComponentsResult: $D.Framework.Design.Form.EventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveComponentsResult: $D.Framework.Design.Form.EventsReturn }>;

	RemoveComponents(formDesignerSessionInfoId: string, componentIds: string[]): { RemoveComponentsResult: $D.Framework.Design.Form.EventsReturn };

	RemoveComponentsPromise(formDesignerSessionInfoId: string, componentIds: string[]): Promise<$D.Framework.Design.Form.EventsReturn>;

	GetToolboxCategories(formDesignerSessionInfoId: string, nodes: string[], successCallback: (data: { GetToolboxCategoriesResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetToolboxCategoriesResult: string[] }>;

	GetToolboxCategories(formDesignerSessionInfoId: string, nodes: string[]): { GetToolboxCategoriesResult: string[] };

	GetToolboxCategoriesPromise(formDesignerSessionInfoId: string, nodes: string[]): Promise<string[]>;

	GetToolboxInformation(formDesignerSessionInfoId: string, nodes: string[], successCallback: (data: { GetToolboxInformationResult: $D.Framework.Design.Form.FormToolboxInformation[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetToolboxInformationResult: $D.Framework.Design.Form.FormToolboxInformation[] }>;

	GetToolboxInformation(formDesignerSessionInfoId: string, nodes: string[]): { GetToolboxInformationResult: $D.Framework.Design.Form.FormToolboxInformation[] };

	GetToolboxInformationPromise(formDesignerSessionInfoId: string, nodes: string[]): Promise<$D.Framework.Design.Form.FormToolboxInformation[]>;

	GetToolboxRecent(formDesignerSessionInfoId: string, successCallback: (data: { GetToolboxRecentResult: $D.Framework.Design.Form.FormToolboxInformation[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetToolboxRecentResult: $D.Framework.Design.Form.FormToolboxInformation[] }>;

	GetToolboxRecent(formDesignerSessionInfoId: string): { GetToolboxRecentResult: $D.Framework.Design.Form.FormToolboxInformation[] };

	GetToolboxRecentPromise(formDesignerSessionInfoId: string): Promise<$D.Framework.Design.Form.FormToolboxInformation[]>;

	SearchToolboxInformation(formDesignerSessionInfoId: string, searchString: string, successCallback: (data: { SearchToolboxInformationResult: $D.Framework.Design.Form.FormToolboxInformation[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchToolboxInformationResult: $D.Framework.Design.Form.FormToolboxInformation[] }>;

	SearchToolboxInformation(formDesignerSessionInfoId: string, searchString: string): { SearchToolboxInformationResult: $D.Framework.Design.Form.FormToolboxInformation[] };

	SearchToolboxInformationPromise(formDesignerSessionInfoId: string, searchString: string): Promise<$D.Framework.Design.Form.FormToolboxInformation[]>;

	GetToolboxFavoriteSteps(formDesignerSessionInfoId: string, successCallback: (data: { GetToolboxFavoriteStepsResult: $D.Framework.Design.Form.FormToolboxInformation[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetToolboxFavoriteStepsResult: $D.Framework.Design.Form.FormToolboxInformation[] }>;

	GetToolboxFavoriteSteps(formDesignerSessionInfoId: string): { GetToolboxFavoriteStepsResult: $D.Framework.Design.Form.FormToolboxInformation[] };

	GetToolboxFavoriteStepsPromise(formDesignerSessionInfoId: string): Promise<$D.Framework.Design.Form.FormToolboxInformation[]>;

	GetToolboxDataInformation(formDesignerSessionInfoId: string, nodes: string[], successCallback: (data: { GetToolboxDataInformationResult: $D.Framework.Design.Form.FormToolboxInformation[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetToolboxDataInformationResult: $D.Framework.Design.Form.FormToolboxInformation[] }>;

	GetToolboxDataInformation(formDesignerSessionInfoId: string, nodes: string[]): { GetToolboxDataInformationResult: $D.Framework.Design.Form.FormToolboxInformation[] };

	GetToolboxDataInformationPromise(formDesignerSessionInfoId: string, nodes: string[]): Promise<$D.Framework.Design.Form.FormToolboxInformation[]>;

	SearchToolboxDataInformation(formDesignerSessionInfoId: string, searchString: string, successCallback: (data: { SearchToolboxDataInformationResult: $D.Framework.Design.Form.FormToolboxInformation[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchToolboxDataInformationResult: $D.Framework.Design.Form.FormToolboxInformation[] }>;

	SearchToolboxDataInformation(formDesignerSessionInfoId: string, searchString: string): { SearchToolboxDataInformationResult: $D.Framework.Design.Form.FormToolboxInformation[] };

	SearchToolboxDataInformationPromise(formDesignerSessionInfoId: string, searchString: string): Promise<$D.Framework.Design.Form.FormToolboxInformation[]>;

	GetRollBackPointsForSession(formDesignerSessionInfoId: string, successCallback: (data: { GetRollBackPointsForSessionResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetRollBackPointsForSessionResult: string[] }>;

	GetRollBackPointsForSession(formDesignerSessionInfoId: string): { GetRollBackPointsForSessionResult: string[] };

	GetRollBackPointsForSessionPromise(formDesignerSessionInfoId: string): Promise<string[]>;

	RollBack(formDesignerSessionInfoId: string, snapshootName: string, successCallback: (data: { RollBackResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RollBackResult: void }>;

	RollBack(formDesignerSessionInfoId: string, snapshootName: string): { RollBackResult: void };

	RollBackPromise(formDesignerSessionInfoId: string, snapshootName: string): Promise<void>;

	GetRollForwardPointsForSession(formDesignerSessionInfoId: string, successCallback: (data: { GetRollForwardPointsForSessionResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetRollForwardPointsForSessionResult: string[] }>;

	GetRollForwardPointsForSession(formDesignerSessionInfoId: string): { GetRollForwardPointsForSessionResult: string[] };

	GetRollForwardPointsForSessionPromise(formDesignerSessionInfoId: string): Promise<string[]>;

	RollForward(formDesignerSessionInfoId: string, snapshootName: string, successCallback: (data: { RollForwardResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RollForwardResult: void }>;

	RollForward(formDesignerSessionInfoId: string, snapshootName: string): { RollForwardResult: void };

	RollForwardPromise(formDesignerSessionInfoId: string, snapshootName: string): Promise<void>;

	CanPaste(formDesignerSessionInfoId: string, successCallback: (data: { CanPasteResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ CanPasteResult: boolean }>;

	CanPaste(formDesignerSessionInfoId: string): { CanPasteResult: boolean };

	CanPastePromise(formDesignerSessionInfoId: string): Promise<boolean>;

	Copy(formDesignerSessionInfoId: string, componentId: string, successCallback: (data: { CopyResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CopyResult: void }>;

	Copy(formDesignerSessionInfoId: string, componentId: string): { CopyResult: void };

	CopyPromise(formDesignerSessionInfoId: string, componentId: string): Promise<void>;

	Cut(formDesignerSessionInfoId: string, componentId: string, successCallback: (data: { CutResult: $D.Framework.Design.Form.EventsReturn }) => any, errorCallback?: () => any): JQueryPromise<{ CutResult: $D.Framework.Design.Form.EventsReturn }>;

	Cut(formDesignerSessionInfoId: string, componentId: string): { CutResult: $D.Framework.Design.Form.EventsReturn };

	CutPromise(formDesignerSessionInfoId: string, componentId: string): Promise<$D.Framework.Design.Form.EventsReturn>;

	Paste(formDesignerSessionInfoId: string, componentInfo: $D.Framework.Design.Form.FormComponentInfo, successCallback: (data: { PasteResult: $D.Framework.Design.Form.EventsAndDataReturn }) => any, errorCallback?: () => any): JQueryPromise<{ PasteResult: $D.Framework.Design.Form.EventsAndDataReturn }>;

	Paste(formDesignerSessionInfoId: string, componentInfo: $D.Framework.Design.Form.FormComponentInfo): { PasteResult: $D.Framework.Design.Form.EventsAndDataReturn };

	PastePromise(formDesignerSessionInfoId: string, componentInfo: $D.Framework.Design.Form.FormComponentInfo): Promise<$D.Framework.Design.Form.EventsAndDataReturn>;

	SetResetComponentsTabOrder(formDesignerSessionInfoId: string, isSelected: boolean, successCallback: (data: { SetResetComponentsTabOrderResult: $D.Framework.Design.Form.EventsAndDataReturn }) => any, errorCallback?: () => any): JQueryPromise<{ SetResetComponentsTabOrderResult: $D.Framework.Design.Form.EventsAndDataReturn }>;

	SetResetComponentsTabOrder(formDesignerSessionInfoId: string, isSelected: boolean): { SetResetComponentsTabOrderResult: $D.Framework.Design.Form.EventsAndDataReturn };

	SetResetComponentsTabOrderPromise(formDesignerSessionInfoId: string, isSelected: boolean): Promise<$D.Framework.Design.Form.EventsAndDataReturn>;

	SetComponentsTabOrder(formDesignerSessionInfoId: string, formElementTabInfos: $D.Framework.Design.Form.FormElementTabInfo[], successCallback: (data: { SetComponentsTabOrderResult: $D.Framework.Design.Form.EventsAndDataReturn }) => any, errorCallback?: () => any): JQueryPromise<{ SetComponentsTabOrderResult: $D.Framework.Design.Form.EventsAndDataReturn }>;

	SetComponentsTabOrder(formDesignerSessionInfoId: string, formElementTabInfos: $D.Framework.Design.Form.FormElementTabInfo[]): { SetComponentsTabOrderResult: $D.Framework.Design.Form.EventsAndDataReturn };

	SetComponentsTabOrderPromise(formDesignerSessionInfoId: string, formElementTabInfos: $D.Framework.Design.Form.FormElementTabInfo[]): Promise<$D.Framework.Design.Form.EventsAndDataReturn>;

	SetDefinedColumnEditorValue(editingContextId: string, typeName: string, successCallback: (data: { SetDefinedColumnEditorValueResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetDefinedColumnEditorValueResult: void }>;

	SetDefinedColumnEditorValue(editingContextId: string, typeName: string): { SetDefinedColumnEditorValueResult: void };

	SetDefinedColumnEditorValuePromise(editingContextId: string, typeName: string): Promise<void>;

	UpdateDesignTimeTabId(formDesignerSessionInfoId: string, componentId: string, tabIndex: string, successCallback: (data: { UpdateDesignTimeTabIdResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateDesignTimeTabIdResult: void }>;

	UpdateDesignTimeTabId(formDesignerSessionInfoId: string, componentId: string, tabIndex: string): { UpdateDesignTimeTabIdResult: void };

	UpdateDesignTimeTabIdPromise(formDesignerSessionInfoId: string, componentId: string, tabIndex: string): Promise<void>;

	GetRootFormDataDescriptions(formDesignerSessionInfoId: string, successCallback: (data: { GetRootFormDataDescriptionsResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetRootFormDataDescriptionsResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }>;

	GetRootFormDataDescriptions(formDesignerSessionInfoId: string): { GetRootFormDataDescriptionsResult: $D.Framework.Design.Flow.Mapping.DataDescription[] };

	GetRootFormDataDescriptionsPromise(formDesignerSessionInfoId: string): Promise<$D.Framework.Design.Flow.Mapping.DataDescription[]>;

	GetDataDescriptionsByFullName(fullName: string, descriptionType: $D.Framework.Utilities.Data.DataDescriptionType, successCallback: (data: { GetDataDescriptionsByFullNameResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetDataDescriptionsByFullNameResult: $D.Framework.Design.Flow.Mapping.DataDescription[] }>;

	GetDataDescriptionsByFullName(fullName: string, descriptionType: $D.Framework.Utilities.Data.DataDescriptionType): { GetDataDescriptionsByFullNameResult: $D.Framework.Design.Flow.Mapping.DataDescription[] };

	GetDataDescriptionsByFullNamePromise(fullName: string, descriptionType: $D.Framework.Utilities.Data.DataDescriptionType): Promise<$D.Framework.Design.Flow.Mapping.DataDescription[]>;

	GetBeforeSaveNotes(formDesignerSessionInfoId: string, successCallback: (data: { GetBeforeSaveNotesResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetBeforeSaveNotesResult: string }>;

	GetBeforeSaveNotes(formDesignerSessionInfoId: string): { GetBeforeSaveNotesResult: string };

	GetBeforeSaveNotesPromise(formDesignerSessionInfoId: string): Promise<string>;

	SetDesignerInfo(formDesignerSessionInfoId: string, info: $D.Framework.Design.Flow.Service.Edit.DesignerInfo, successCallback: (data: { SetDesignerInfoResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetDesignerInfoResult: void }>;

	SetDesignerInfo(formDesignerSessionInfoId: string, info: $D.Framework.Design.Flow.Service.Edit.DesignerInfo): { SetDesignerInfoResult: void };

	SetDesignerInfoPromise(formDesignerSessionInfoId: string, info: $D.Framework.Design.Flow.Service.Edit.DesignerInfo): Promise<void>;

	GetEditInputDataContext(formDesignerSessionInfoId: string, successCallback: (data: { GetEditInputDataContextResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetEditInputDataContextResult: string }>;

	GetEditInputDataContext(formDesignerSessionInfoId: string): { GetEditInputDataContextResult: string };

	GetEditInputDataContextPromise(formDesignerSessionInfoId: string): Promise<string>;

	SetDesignerChanged(formDesignerSessionInfoId: string, successCallback: (data: { SetDesignerChangedResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetDesignerChangedResult: void }>;

	SetDesignerChanged(formDesignerSessionInfoId: string): { SetDesignerChangedResult: void };

	SetDesignerChangedPromise(formDesignerSessionInfoId: string): Promise<void>;

	IsFormDesignerSessionInfoOwner(formSessionInfoId: string, successCallback: (data: { IsFormDesignerSessionInfoOwnerResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ IsFormDesignerSessionInfoOwnerResult: boolean }>;

	IsFormDesignerSessionInfoOwner(formSessionInfoId: string): { IsFormDesignerSessionInfoOwnerResult: boolean };

	IsFormDesignerSessionInfoOwnerPromise(formSessionInfoId: string): Promise<boolean>;

	RemoveFormDesignerSessionInfoOwner(formSessionInfoId: string, successCallback: (data: { RemoveFormDesignerSessionInfoOwnerResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveFormDesignerSessionInfoOwnerResult: boolean }>;

	RemoveFormDesignerSessionInfoOwner(formSessionInfoId: string): { RemoveFormDesignerSessionInfoOwnerResult: boolean };

	RemoveFormDesignerSessionInfoOwnerPromise(formSessionInfoId: string): Promise<boolean>;
}

interface ServicesStatic {
	FormDesignerService(): FormDesignerServiceStatic;
}
