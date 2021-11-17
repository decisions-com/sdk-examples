/// <reference path="./datatypes._base.d.ts" />

interface CommonActionServiceStatic {

	GetActionHeadersForAnyEntity(actionTypes: $D.Framework.ServiceLayer.Actions.EntityActionType[], typeName: string, entityID: string, successCallback: (data: { GetActionHeadersForAnyEntityResult: $D.Framework.ServiceLayer.Actions.ActionHeader[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetActionHeadersForAnyEntityResult: $D.Framework.ServiceLayer.Actions.ActionHeader[] }>;

	GetActionHeadersForAnyEntity(actionTypes: $D.Framework.ServiceLayer.Actions.EntityActionType[], typeName: string, entityID: string): { GetActionHeadersForAnyEntityResult: $D.Framework.ServiceLayer.Actions.ActionHeader[] };

	GetActionHeadersForAnyEntityPromise(actionTypes: $D.Framework.ServiceLayer.Actions.EntityActionType[], typeName: string, entityID: string): Promise<$D.Framework.ServiceLayer.Actions.ActionHeader[]>;

	GetGlobalActionHeaders(actionTypes: $D.Framework.ServiceLayer.Actions.EntityActionType[], successCallback: (data: { GetGlobalActionHeadersResult: $D.Framework.ServiceLayer.Actions.ActionHeader[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetGlobalActionHeadersResult: $D.Framework.ServiceLayer.Actions.ActionHeader[] }>;

	GetGlobalActionHeaders(actionTypes: $D.Framework.ServiceLayer.Actions.EntityActionType[]): { GetGlobalActionHeadersResult: $D.Framework.ServiceLayer.Actions.ActionHeader[] };

	GetGlobalActionHeadersPromise(actionTypes: $D.Framework.ServiceLayer.Actions.EntityActionType[]): Promise<$D.Framework.ServiceLayer.Actions.ActionHeader[]>;

	ProcessTextAction(actionUniqueName: string, entityID: string, text: string, successCallback: (data: { ProcessTextActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessTextActionResult: void }>;

	ProcessTextAction(actionUniqueName: string, entityID: string, text: string): { ProcessTextActionResult: void };

	ProcessTextActionPromise(actionUniqueName: string, entityID: string, text: string): Promise<void>;

	ProcessMultiTextAction(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], text: string, successCallback: (data: { ProcessMultiTextActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessMultiTextActionResult: void }>;

	ProcessMultiTextAction(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], text: string): { ProcessMultiTextActionResult: void };

	ProcessMultiTextActionPromise(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], text: string): Promise<void>;

	ProcessIntAction(actionUniqueName: string, entityID: string, value: number, successCallback: (data: { ProcessIntActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessIntActionResult: void }>;

	ProcessIntAction(actionUniqueName: string, entityID: string, value: number): { ProcessIntActionResult: void };

	ProcessIntActionPromise(actionUniqueName: string, entityID: string, value: number): Promise<void>;

	ProcessMultiIntAction(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], value: number, successCallback: (data: { ProcessMultiIntActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessMultiIntActionResult: void }>;

	ProcessMultiIntAction(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], value: number): { ProcessMultiIntActionResult: void };

	ProcessMultiIntActionPromise(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], value: number): Promise<void>;

	ProcessDecimalAction(actionUniqueName: string, entityID: string, value: number, successCallback: (data: { ProcessDecimalActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessDecimalActionResult: void }>;

	ProcessDecimalAction(actionUniqueName: string, entityID: string, value: number): { ProcessDecimalActionResult: void };

	ProcessDecimalActionPromise(actionUniqueName: string, entityID: string, value: number): Promise<void>;

	ProcessNullableDecimalAction(actionUniqueName: string, entityID: string, value: any, successCallback: (data: { ProcessNullableDecimalActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessNullableDecimalActionResult: void }>;

	ProcessNullableDecimalAction(actionUniqueName: string, entityID: string, value: any): { ProcessNullableDecimalActionResult: void };

	ProcessNullableDecimalActionPromise(actionUniqueName: string, entityID: string, value: any): Promise<void>;

	ProcessMultiDecimalAction(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], value: number, successCallback: (data: { ProcessMultiDecimalActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessMultiDecimalActionResult: void }>;

	ProcessMultiDecimalAction(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], value: number): { ProcessMultiDecimalActionResult: void };

	ProcessMultiDecimalActionPromise(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], value: number): Promise<void>;

	ProcessMultiNullableDecimalAction(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], value: any, successCallback: (data: { ProcessMultiNullableDecimalActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessMultiNullableDecimalActionResult: void }>;

	ProcessMultiNullableDecimalAction(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], value: any): { ProcessMultiNullableDecimalActionResult: void };

	ProcessMultiNullableDecimalActionPromise(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], value: any): Promise<void>;

	ProcessDateTimeAction(actionUniqueName: string, entityID: string, value: Date, successCallback: (data: { ProcessDateTimeActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessDateTimeActionResult: void }>;

	ProcessDateTimeAction(actionUniqueName: string, entityID: string, value: Date): { ProcessDateTimeActionResult: void };

	ProcessDateTimeActionPromise(actionUniqueName: string, entityID: string, value: Date): Promise<void>;

	ProcessMultiDateTimeAction(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], value: Date, successCallback: (data: { ProcessMultiDateTimeActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessMultiDateTimeActionResult: void }>;

	ProcessMultiDateTimeAction(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], value: Date): { ProcessMultiDateTimeActionResult: void };

	ProcessMultiDateTimeActionPromise(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], value: Date): Promise<void>;

	ProcessTimespanAction(actionUniqueName: string, entityID: string, value: string, successCallback: (data: { ProcessTimespanActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessTimespanActionResult: void }>;

	ProcessTimespanAction(actionUniqueName: string, entityID: string, value: string): { ProcessTimespanActionResult: void };

	ProcessTimespanActionPromise(actionUniqueName: string, entityID: string, value: string): Promise<void>;

	ProcessMultiTimespanAction(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], value: string, successCallback: (data: { ProcessMultiTimespanActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessMultiTimespanActionResult: void }>;

	ProcessMultiTimespanAction(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], value: string): { ProcessMultiTimespanActionResult: void };

	ProcessMultiTimespanActionPromise(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], value: string): Promise<void>;

	ProcessFileAction(actionUniqueName: string, entityID: string, value: $D.Framework.Data.DataTypes.FileData, successCallback: (data: { ProcessFileActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessFileActionResult: void }>;

	ProcessFileAction(actionUniqueName: string, entityID: string, value: $D.Framework.Data.DataTypes.FileData): { ProcessFileActionResult: void };

	ProcessFileActionPromise(actionUniqueName: string, entityID: string, value: $D.Framework.Data.DataTypes.FileData): Promise<void>;

	ProcessMultiFileAction(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], value: $D.Framework.Data.DataTypes.FileData, successCallback: (data: { ProcessMultiFileActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessMultiFileActionResult: void }>;

	ProcessMultiFileAction(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], value: $D.Framework.Data.DataTypes.FileData): { ProcessMultiFileActionResult: void };

	ProcessMultiFileActionPromise(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], value: $D.Framework.Data.DataTypes.FileData): Promise<void>;

	FetchFileActionFile(actionUniqueName: string, entityID: string, successCallback: (data: { FetchFileActionFileResult: $D.Framework.Data.DataTypes.FileData }) => any, errorCallback?: () => any): JQueryPromise<{ FetchFileActionFileResult: $D.Framework.Data.DataTypes.FileData }>;

	FetchFileActionFile(actionUniqueName: string, entityID: string): { FetchFileActionFileResult: $D.Framework.Data.DataTypes.FileData };

	FetchFileActionFilePromise(actionUniqueName: string, entityID: string): Promise<$D.Framework.Data.DataTypes.FileData>;

	ProcessBoolAction(actionUniqueName: string, entityID: string, value: boolean, successCallback: (data: { ProcessBoolActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessBoolActionResult: void }>;

	ProcessBoolAction(actionUniqueName: string, entityID: string, value: boolean): { ProcessBoolActionResult: void };

	ProcessBoolActionPromise(actionUniqueName: string, entityID: string, value: boolean): Promise<void>;

	ProcessMultiBoolAction(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], value: boolean, successCallback: (data: { ProcessMultiBoolActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessMultiBoolActionResult: void }>;

	ProcessMultiBoolAction(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], value: boolean): { ProcessMultiBoolActionResult: void };

	ProcessMultiBoolActionPromise(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], value: boolean): Promise<void>;

	ProcessTitleAndDescriptionAction(actionUniqueName: string, entityID: string, value: $D.Framework.ServiceLayer.Actions.Common.TitleAndDescription, successCallback: (data: { ProcessTitleAndDescriptionActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessTitleAndDescriptionActionResult: void }>;

	ProcessTitleAndDescriptionAction(actionUniqueName: string, entityID: string, value: $D.Framework.ServiceLayer.Actions.Common.TitleAndDescription): { ProcessTitleAndDescriptionActionResult: void };

	ProcessTitleAndDescriptionActionPromise(actionUniqueName: string, entityID: string, value: $D.Framework.ServiceLayer.Actions.Common.TitleAndDescription): Promise<void>;

	ProcessMultiTitleAndDescriptionAction(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], value: $D.Framework.ServiceLayer.Actions.Common.TitleAndDescription, successCallback: (data: { ProcessMultiTitleAndDescriptionActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessMultiTitleAndDescriptionActionResult: void }>;

	ProcessMultiTitleAndDescriptionAction(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], value: $D.Framework.ServiceLayer.Actions.Common.TitleAndDescription): { ProcessMultiTitleAndDescriptionActionResult: void };

	ProcessMultiTitleAndDescriptionActionPromise(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], value: $D.Framework.ServiceLayer.Actions.Common.TitleAndDescription): Promise<void>;

	ProcessTitleDescriptionAndFileAction(actionUniqueName: string, entityID: string, value: $D.Framework.ServiceLayer.Actions.Common.TitleDescriptionAndFile, successCallback: (data: { ProcessTitleDescriptionAndFileActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessTitleDescriptionAndFileActionResult: void }>;

	ProcessTitleDescriptionAndFileAction(actionUniqueName: string, entityID: string, value: $D.Framework.ServiceLayer.Actions.Common.TitleDescriptionAndFile): { ProcessTitleDescriptionAndFileActionResult: void };

	ProcessTitleDescriptionAndFileActionPromise(actionUniqueName: string, entityID: string, value: $D.Framework.ServiceLayer.Actions.Common.TitleDescriptionAndFile): Promise<void>;

	ProcessMultiTitleDescriptionAndFileAction(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], value: $D.Framework.ServiceLayer.Actions.Common.TitleDescriptionAndFile, successCallback: (data: { ProcessMultiTitleDescriptionAndFileActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessMultiTitleDescriptionAndFileActionResult: void }>;

	ProcessMultiTitleDescriptionAndFileAction(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], value: $D.Framework.ServiceLayer.Actions.Common.TitleDescriptionAndFile): { ProcessMultiTitleDescriptionAndFileActionResult: void };

	ProcessMultiTitleDescriptionAndFileActionPromise(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], value: $D.Framework.ServiceLayer.Actions.Common.TitleDescriptionAndFile): Promise<void>;

	FetchTitleDescriptionAndFileActionFile(actionUniqueName: string, entityID: string, successCallback: (data: { FetchTitleDescriptionAndFileActionFileResult: $D.Framework.Data.DataTypes.FileData }) => any, errorCallback?: () => any): JQueryPromise<{ FetchTitleDescriptionAndFileActionFileResult: $D.Framework.Data.DataTypes.FileData }>;

	FetchTitleDescriptionAndFileActionFile(actionUniqueName: string, entityID: string): { FetchTitleDescriptionAndFileActionFileResult: $D.Framework.Data.DataTypes.FileData };

	FetchTitleDescriptionAndFileActionFilePromise(actionUniqueName: string, entityID: string): Promise<$D.Framework.Data.DataTypes.FileData>;

	ProcessSimpleAction(actionUniqueName: string, entityID: string, successCallback: (data: { ProcessSimpleActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessSimpleActionResult: void }>;

	ProcessSimpleAction(actionUniqueName: string, entityID: string): { ProcessSimpleActionResult: void };

	ProcessSimpleActionPromise(actionUniqueName: string, entityID: string): Promise<void>;

	ProcessMultiSimpleAction(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], successCallback: (data: { ProcessMultiSimpleActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessMultiSimpleActionResult: void }>;

	ProcessMultiSimpleAction(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[]): { ProcessMultiSimpleActionResult: void };

	ProcessMultiSimpleActionPromise(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[]): Promise<void>;

	ProcessConfirmAction(actionUniqueName: string, entityID: string, successCallback: (data: { ProcessConfirmActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessConfirmActionResult: void }>;

	ProcessConfirmAction(actionUniqueName: string, entityID: string): { ProcessConfirmActionResult: void };

	ProcessConfirmActionPromise(actionUniqueName: string, entityID: string): Promise<void>;

	ProcessMultiConfirmAction(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], successCallback: (data: { ProcessMultiConfirmActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessMultiConfirmActionResult: void }>;

	ProcessMultiConfirmAction(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[]): { ProcessMultiConfirmActionResult: void };

	ProcessMultiConfirmActionPromise(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[]): Promise<void>;

	ProcessConfirmWithBoolAnswerAction(actionUniqueName: string, entityID: string, value: boolean, successCallback: (data: { ProcessConfirmWithBoolAnswerActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessConfirmWithBoolAnswerActionResult: void }>;

	ProcessConfirmWithBoolAnswerAction(actionUniqueName: string, entityID: string, value: boolean): { ProcessConfirmWithBoolAnswerActionResult: void };

	ProcessConfirmWithBoolAnswerActionPromise(actionUniqueName: string, entityID: string, value: boolean): Promise<void>;

	ProcessApproveAction(actionUniqueName: string, entityID: string, text: string, successCallback: (data: { ProcessApproveActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessApproveActionResult: void }>;

	ProcessApproveAction(actionUniqueName: string, entityID: string, text: string): { ProcessApproveActionResult: void };

	ProcessApproveActionPromise(actionUniqueName: string, entityID: string, text: string): Promise<void>;

	ProcessMultiApproveAction(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], text: string, successCallback: (data: { ProcessMultiApproveActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessMultiApproveActionResult: void }>;

	ProcessMultiApproveAction(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], text: string): { ProcessMultiApproveActionResult: void };

	ProcessMultiApproveActionPromise(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], text: string): Promise<void>;

	ProcessRejectAction(actionUniqueName: string, entityID: string, text: string, successCallback: (data: { ProcessRejectActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessRejectActionResult: void }>;

	ProcessRejectAction(actionUniqueName: string, entityID: string, text: string): { ProcessRejectActionResult: void };

	ProcessRejectActionPromise(actionUniqueName: string, entityID: string, text: string): Promise<void>;

	ProcessMultiRejectAction(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], text: string, successCallback: (data: { ProcessMultiRejectActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessMultiRejectActionResult: void }>;

	ProcessMultiRejectAction(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], text: string): { ProcessMultiRejectActionResult: void };

	ProcessMultiRejectActionPromise(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], text: string): Promise<void>;

	ProcessMakeSelectionAction(actionUniqueName: string, entityID: string, idOfSelection: string, successCallback: (data: { ProcessMakeSelectionActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessMakeSelectionActionResult: void }>;

	ProcessMakeSelectionAction(actionUniqueName: string, entityID: string, idOfSelection: string): { ProcessMakeSelectionActionResult: void };

	ProcessMakeSelectionActionPromise(actionUniqueName: string, entityID: string, idOfSelection: string): Promise<void>;

	ProcessMultiMakeSelectionAction(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], idOfSelection: string, successCallback: (data: { ProcessMultiMakeSelectionActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessMultiMakeSelectionActionResult: void }>;

	ProcessMultiMakeSelectionAction(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], idOfSelection: string): { ProcessMultiMakeSelectionActionResult: void };

	ProcessMultiMakeSelectionActionPromise(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], idOfSelection: string): Promise<void>;

	ProcessMakeSelectionSearchAction(actionUniqueName: string, entityID: string, idOfSelection: string, successCallback: (data: { ProcessMakeSelectionSearchActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessMakeSelectionSearchActionResult: void }>;

	ProcessMakeSelectionSearchAction(actionUniqueName: string, entityID: string, idOfSelection: string): { ProcessMakeSelectionSearchActionResult: void };

	ProcessMakeSelectionSearchActionPromise(actionUniqueName: string, entityID: string, idOfSelection: string): Promise<void>;

	ProcessMultiMakeSelectionSearchAction(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], idOfSelection: string, successCallback: (data: { ProcessMultiMakeSelectionSearchActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessMultiMakeSelectionSearchActionResult: void }>;

	ProcessMultiMakeSelectionSearchAction(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], idOfSelection: string): { ProcessMultiMakeSelectionSearchActionResult: void };

	ProcessMultiMakeSelectionSearchActionPromise(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], idOfSelection: string): Promise<void>;

	SearchMakeSelectionSearchActionItems(actionUniqueName: string, entityID: string, searchText: string, successCallback: (data: { SearchMakeSelectionSearchActionItemsResult: $D.Framework.ServiceLayer.Actions.Common.ActionSelectionItem[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchMakeSelectionSearchActionItemsResult: $D.Framework.ServiceLayer.Actions.Common.ActionSelectionItem[] }>;

	SearchMakeSelectionSearchActionItems(actionUniqueName: string, entityID: string, searchText: string): { SearchMakeSelectionSearchActionItemsResult: $D.Framework.ServiceLayer.Actions.Common.ActionSelectionItem[] };

	SearchMakeSelectionSearchActionItemsPromise(actionUniqueName: string, entityID: string, searchText: string): Promise<$D.Framework.ServiceLayer.Actions.Common.ActionSelectionItem[]>;

	ProcessMakeMultiSelectionAction(actionUniqueName: string, entityID: string, idsOfSelection: string[], successCallback: (data: { ProcessMakeMultiSelectionActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessMakeMultiSelectionActionResult: void }>;

	ProcessMakeMultiSelectionAction(actionUniqueName: string, entityID: string, idsOfSelection: string[]): { ProcessMakeMultiSelectionActionResult: void };

	ProcessMakeMultiSelectionActionPromise(actionUniqueName: string, entityID: string, idsOfSelection: string[]): Promise<void>;

	ProcessMultiMakeMultiSelectionAction(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], idsOfSelection: string[], successCallback: (data: { ProcessMultiMakeMultiSelectionActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessMultiMakeMultiSelectionActionResult: void }>;

	ProcessMultiMakeMultiSelectionAction(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], idsOfSelection: string[]): { ProcessMultiMakeMultiSelectionActionResult: void };

	ProcessMultiMakeMultiSelectionActionPromise(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], idsOfSelection: string[]): Promise<void>;

	ProcessEditListAction(actionUniqueName: string, entityID: string, list: string[], successCallback: (data: { ProcessEditListActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessEditListActionResult: void }>;

	ProcessEditListAction(actionUniqueName: string, entityID: string, list: string[]): { ProcessEditListActionResult: void };

	ProcessEditListActionPromise(actionUniqueName: string, entityID: string, list: string[]): Promise<void>;

	ProcessMultiEditListAction(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], list: string[], successCallback: (data: { ProcessMultiEditListActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessMultiEditListActionResult: void }>;

	ProcessMultiEditListAction(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], list: string[]): { ProcessMultiEditListActionResult: void };

	ProcessMultiEditListActionPromise(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], list: string[]): Promise<void>;

	ProcessDownloadFileAction(actionUniqueName: string, entityID: string, successCallback: (data: { ProcessDownloadFileActionResult: $D.Framework.Data.DataTypes.FileData }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessDownloadFileActionResult: $D.Framework.Data.DataTypes.FileData }>;

	ProcessDownloadFileAction(actionUniqueName: string, entityID: string): { ProcessDownloadFileActionResult: $D.Framework.Data.DataTypes.FileData };

	ProcessDownloadFileActionPromise(actionUniqueName: string, entityID: string): Promise<$D.Framework.Data.DataTypes.FileData>;

	ProcessDownloadFileActionForFileReference(actionUniqueName: string, entityID: string, successCallback: (data: { ProcessDownloadFileActionForFileReferenceResult: $D.Framework.ServiceLayer.Services.FileReference.FileReference }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessDownloadFileActionForFileReferenceResult: $D.Framework.ServiceLayer.Services.FileReference.FileReference }>;

	ProcessDownloadFileActionForFileReference(actionUniqueName: string, entityID: string): { ProcessDownloadFileActionForFileReferenceResult: $D.Framework.ServiceLayer.Services.FileReference.FileReference };

	ProcessDownloadFileActionForFileReferencePromise(actionUniqueName: string, entityID: string): Promise<$D.Framework.ServiceLayer.Services.FileReference.FileReference>;

	ProcessDownloadFileMultipleAction(actionUniqueName: string, entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], successCallback: (data: { ProcessDownloadFileMultipleActionResult: $D.Framework.Data.DataTypes.FileData }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessDownloadFileMultipleActionResult: $D.Framework.Data.DataTypes.FileData }>;

	ProcessDownloadFileMultipleAction(actionUniqueName: string, entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[]): { ProcessDownloadFileMultipleActionResult: $D.Framework.Data.DataTypes.FileData };

	ProcessDownloadFileMultipleActionPromise(actionUniqueName: string, entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[]): Promise<$D.Framework.Data.DataTypes.FileData>;

	ProcessDisplayMethodReturnAction(actionUniqueName: string, entityID: string, successCallback: (data: { ProcessDisplayMethodReturnActionResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessDisplayMethodReturnActionResult: string }>;

	ProcessDisplayMethodReturnAction(actionUniqueName: string, entityID: string): { ProcessDisplayMethodReturnActionResult: string };

	ProcessDisplayMethodReturnActionPromise(actionUniqueName: string, entityID: string): Promise<string>;

	RegisterEditObjectActionContextID(actionUniqueName: string, successCallback: (data: { RegisterEditObjectActionContextIDResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ RegisterEditObjectActionContextIDResult: string }>;

	RegisterEditObjectActionContextID(actionUniqueName: string): { RegisterEditObjectActionContextIDResult: string };

	RegisterEditObjectActionContextIDPromise(actionUniqueName: string): Promise<string>;

	RegisterMergeEditorsObjectActionContextID(actionUniqueName: string, isSwitch: boolean, successCallback: (data: { RegisterMergeEditorsObjectActionContextIDResult: $D.Framework.ServiceLayer.Actions.Common.MergeEditorModel }) => any, errorCallback?: () => any): JQueryPromise<{ RegisterMergeEditorsObjectActionContextIDResult: $D.Framework.ServiceLayer.Actions.Common.MergeEditorModel }>;

	RegisterMergeEditorsObjectActionContextID(actionUniqueName: string, isSwitch: boolean): { RegisterMergeEditorsObjectActionContextIDResult: $D.Framework.ServiceLayer.Actions.Common.MergeEditorModel };

	RegisterMergeEditorsObjectActionContextIDPromise(actionUniqueName: string, isSwitch: boolean): Promise<$D.Framework.ServiceLayer.Actions.Common.MergeEditorModel>;

	RegisterEditEntityActionContextID(actionUniqueName: string, entityID: string, successCallback: (data: { RegisterEditEntityActionContextIDResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ RegisterEditEntityActionContextIDResult: string }>;

	RegisterEditEntityActionContextID(actionUniqueName: string, entityID: string): { RegisterEditEntityActionContextIDResult: string };

	RegisterEditEntityActionContextIDPromise(actionUniqueName: string, entityID: string): Promise<string>;

	RegisterAddEntityActionContextID(actionUniqueName: string, entityFolderID: string, successCallback: (data: { RegisterAddEntityActionContextIDResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ RegisterAddEntityActionContextIDResult: string }>;

	RegisterAddEntityActionContextID(actionUniqueName: string, entityFolderID: string): { RegisterAddEntityActionContextIDResult: string };

	RegisterAddEntityActionContextIDPromise(actionUniqueName: string, entityFolderID: string): Promise<string>;

	RegisterEditProviderActionContextID(actionUniqueName: string, successCallback: (data: { RegisterEditProviderActionContextIDResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ RegisterEditProviderActionContextIDResult: string }>;

	RegisterEditProviderActionContextID(actionUniqueName: string): { RegisterEditProviderActionContextIDResult: string };

	RegisterEditProviderActionContextIDPromise(actionUniqueName: string): Promise<string>;

	DeleteEntityAction(actionUniqueName: string, entityID: string, successCallback: (data: { DeleteEntityActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteEntityActionResult: void }>;

	DeleteEntityAction(actionUniqueName: string, entityID: string): { DeleteEntityActionResult: void };

	DeleteEntityActionPromise(actionUniqueName: string, entityID: string): Promise<void>;

	DeleteMultiEntityAction(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], successCallback: (data: { DeleteMultiEntityActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteMultiEntityActionResult: void }>;

	DeleteMultiEntityAction(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[]): { DeleteMultiEntityActionResult: void };

	DeleteMultiEntityActionPromise(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[]): Promise<void>;

	PickEntity(actionUniqueName: string, entityID: string, data: $D.Framework.ServiceLayer.Actions.Common.FolderEntityData, successCallback: (data: { PickEntityResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ PickEntityResult: void }>;

	PickEntity(actionUniqueName: string, entityID: string, data: $D.Framework.ServiceLayer.Actions.Common.FolderEntityData): { PickEntityResult: void };

	PickEntityPromise(actionUniqueName: string, entityID: string, data: $D.Framework.ServiceLayer.Actions.Common.FolderEntityData): Promise<void>;

	MultiPickEntity(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], data: $D.Framework.ServiceLayer.Actions.Common.FolderEntityData, successCallback: (data: { MultiPickEntityResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ MultiPickEntityResult: void }>;

	MultiPickEntity(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], data: $D.Framework.ServiceLayer.Actions.Common.FolderEntityData): { MultiPickEntityResult: void };

	MultiPickEntityPromise(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], data: $D.Framework.ServiceLayer.Actions.Common.FolderEntityData): Promise<void>;

	GetEntityBrowseData(actionUniqueName: string, entityID: string, successCallback: (data: { GetEntityBrowseDataResult: $D.Framework.Design.Report.Service.Comunication.ResultData }) => any, errorCallback?: () => any): JQueryPromise<{ GetEntityBrowseDataResult: $D.Framework.Design.Report.Service.Comunication.ResultData }>;

	GetEntityBrowseData(actionUniqueName: string, entityID: string): { GetEntityBrowseDataResult: $D.Framework.Design.Report.Service.Comunication.ResultData };

	GetEntityBrowseDataPromise(actionUniqueName: string, entityID: string): Promise<$D.Framework.Design.Report.Service.Comunication.ResultData>;

	ProcessConfirmGoToFolderAction(actionUniqueName: string, entityID: string, successCallback: (data: { ProcessConfirmGoToFolderActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessConfirmGoToFolderActionResult: void }>;

	ProcessConfirmGoToFolderAction(actionUniqueName: string, entityID: string): { ProcessConfirmGoToFolderActionResult: void };

	ProcessConfirmGoToFolderActionPromise(actionUniqueName: string, entityID: string): Promise<void>;

	ProcessMultiConfirmGoToFolderAction(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], successCallback: (data: { ProcessMultiConfirmGoToFolderActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessMultiConfirmGoToFolderActionResult: void }>;

	ProcessMultiConfirmGoToFolderAction(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[]): { ProcessMultiConfirmGoToFolderActionResult: void };

	ProcessMultiConfirmGoToFolderActionPromise(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[]): Promise<void>;

	PickFolder(actionUniqueName: string, entityID: string, folderID: string, successCallback: (data: { PickFolderResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ PickFolderResult: void }>;

	PickFolder(actionUniqueName: string, entityID: string, folderID: string): { PickFolderResult: void };

	PickFolderPromise(actionUniqueName: string, entityID: string, folderID: string): Promise<void>;

	MultiPickFolder(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], folderID: string, successCallback: (data: { MultiPickFolderResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ MultiPickFolderResult: void }>;

	MultiPickFolder(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], folderID: string): { MultiPickFolderResult: void };

	MultiPickFolderPromise(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], folderID: string): Promise<void>;

	PickFolderByBehaviorType(actionUniqueName: string, entityID: string, folderID: string, successCallback: (data: { PickFolderByBehaviorTypeResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ PickFolderByBehaviorTypeResult: void }>;

	PickFolderByBehaviorType(actionUniqueName: string, entityID: string, folderID: string): { PickFolderByBehaviorTypeResult: void };

	PickFolderByBehaviorTypePromise(actionUniqueName: string, entityID: string, folderID: string): Promise<void>;

	MultiPickFolderByBehaviorType(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], folderID: string, successCallback: (data: { MultiPickFolderByBehaviorTypeResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ MultiPickFolderByBehaviorTypeResult: void }>;

	MultiPickFolderByBehaviorType(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], folderID: string): { MultiPickFolderByBehaviorTypeResult: void };

	MultiPickFolderByBehaviorTypePromise(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], folderID: string): Promise<void>;

	PickAccounts(actionUniqueName: string, entityID: string, accounts: $D.Framework.ServiceLayer.Services.Accounts.Account[], successCallback: (data: { PickAccountsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ PickAccountsResult: void }>;

	PickAccounts(actionUniqueName: string, entityID: string, accounts: $D.Framework.ServiceLayer.Services.Accounts.Account[]): { PickAccountsResult: void };

	PickAccountsPromise(actionUniqueName: string, entityID: string, accounts: $D.Framework.ServiceLayer.Services.Accounts.Account[]): Promise<void>;

	MultiPickAccounts(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], accounts: $D.Framework.ServiceLayer.Services.Accounts.Account[], successCallback: (data: { MultiPickAccountsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ MultiPickAccountsResult: void }>;

	MultiPickAccounts(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], accounts: $D.Framework.ServiceLayer.Services.Accounts.Account[]): { MultiPickAccountsResult: void };

	MultiPickAccountsPromise(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], accounts: $D.Framework.ServiceLayer.Services.Accounts.Account[]): Promise<void>;

	PickGroups(actionUniqueName: string, entityID: string, groups: $D.Framework.ServiceLayer.Services.Accounts.Group[], successCallback: (data: { PickGroupsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ PickGroupsResult: void }>;

	PickGroups(actionUniqueName: string, entityID: string, groups: $D.Framework.ServiceLayer.Services.Accounts.Group[]): { PickGroupsResult: void };

	PickGroupsPromise(actionUniqueName: string, entityID: string, groups: $D.Framework.ServiceLayer.Services.Accounts.Group[]): Promise<void>;

	MultiPickGroups(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], groups: $D.Framework.ServiceLayer.Services.Accounts.Group[], successCallback: (data: { MultiPickGroupsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ MultiPickGroupsResult: void }>;

	MultiPickGroups(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], groups: $D.Framework.ServiceLayer.Services.Accounts.Group[]): { MultiPickGroupsResult: void };

	MultiPickGroupsPromise(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], groups: $D.Framework.ServiceLayer.Services.Accounts.Group[]): Promise<void>;

	ReorderItems(actionUniqueName: string, entityID: string, accounts: $D.Framework.ServiceLayer.Services.ServiceCatalog.ReorderItemKeyValuePair[], successCallback: (data: { ReorderItemsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ReorderItemsResult: void }>;

	ReorderItems(actionUniqueName: string, entityID: string, accounts: $D.Framework.ServiceLayer.Services.ServiceCatalog.ReorderItemKeyValuePair[]): { ReorderItemsResult: void };

	ReorderItemsPromise(actionUniqueName: string, entityID: string, accounts: $D.Framework.ServiceLayer.Services.ServiceCatalog.ReorderItemKeyValuePair[]): Promise<void>;

	MultiReorderItems(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], accounts: $D.Framework.ServiceLayer.Services.ServiceCatalog.ReorderItemKeyValuePair[], successCallback: (data: { MultiReorderItemsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ MultiReorderItemsResult: void }>;

	MultiReorderItems(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], accounts: $D.Framework.ServiceLayer.Services.ServiceCatalog.ReorderItemKeyValuePair[]): { MultiReorderItemsResult: void };

	MultiReorderItemsPromise(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], accounts: $D.Framework.ServiceLayer.Services.ServiceCatalog.ReorderItemKeyValuePair[]): Promise<void>;

	TryLease(actionUniqueName: string, successCallback: (data: { TryLeaseResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ TryLeaseResult: string }>;

	TryLease(actionUniqueName: string): { TryLeaseResult: string };

	TryLeasePromise(actionUniqueName: string): Promise<string>;

	BreakLease(actionUniqueName: string, successCallback: (data: { BreakLeaseResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ BreakLeaseResult: void }>;

	BreakLease(actionUniqueName: string): { BreakLeaseResult: void };

	BreakLeasePromise(actionUniqueName: string): Promise<void>;

	SendPortalUrl(actionUniqueName: string, email: $D.Framework.ServiceLayer.Actions.Common.SimpleEmail, successCallback: (data: { SendPortalUrlResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SendPortalUrlResult: void }>;

	SendPortalUrl(actionUniqueName: string, email: $D.Framework.ServiceLayer.Actions.Common.SimpleEmail): { SendPortalUrlResult: void };

	SendPortalUrlPromise(actionUniqueName: string, email: $D.Framework.ServiceLayer.Actions.Common.SimpleEmail): Promise<void>;

	ProcessSendEmailAction(actionUniqueName: string, entityId: string, email: $D.Framework.ServiceLayer.Actions.Common.SimpleEmail, successCallback: (data: { ProcessSendEmailActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessSendEmailActionResult: void }>;

	ProcessSendEmailAction(actionUniqueName: string, entityId: string, email: $D.Framework.ServiceLayer.Actions.Common.SimpleEmail): { ProcessSendEmailActionResult: void };

	ProcessSendEmailActionPromise(actionUniqueName: string, entityId: string, email: $D.Framework.ServiceLayer.Actions.Common.SimpleEmail): Promise<void>;

	ProcessMultiSendEmailAction(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], email: $D.Framework.ServiceLayer.Actions.Common.SimpleEmail, successCallback: (data: { ProcessMultiSendEmailActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessMultiSendEmailActionResult: void }>;

	ProcessMultiSendEmailAction(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], email: $D.Framework.ServiceLayer.Actions.Common.SimpleEmail): { ProcessMultiSendEmailActionResult: void };

	ProcessMultiSendEmailActionPromise(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], email: $D.Framework.ServiceLayer.Actions.Common.SimpleEmail): Promise<void>;

	ProcessRunFlowFromInstructionAction(actionUniqueName: string, entityId: string, successCallback: (data: { ProcessRunFlowFromInstructionActionResult: $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessRunFlowFromInstructionActionResult: $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction }>;

	ProcessRunFlowFromInstructionAction(actionUniqueName: string, entityId: string): { ProcessRunFlowFromInstructionActionResult: $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction };

	ProcessRunFlowFromInstructionActionPromise(actionUniqueName: string, entityId: string): Promise<$D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction>;

	SelectEntityAction(actionUniqueName: string, entityID: string, selectedEntityID: string, successCallback: (data: { SelectEntityActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SelectEntityActionResult: void }>;

	SelectEntityAction(actionUniqueName: string, entityID: string, selectedEntityID: string): { SelectEntityActionResult: void };

	SelectEntityActionPromise(actionUniqueName: string, entityID: string, selectedEntityID: string): Promise<void>;

	SelectMultipleEntitiesAction(actionUniqueName: string, entityID: string, selectedEntityIDs: string[], successCallback: (data: { SelectMultipleEntitiesActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SelectMultipleEntitiesActionResult: void }>;

	SelectMultipleEntitiesAction(actionUniqueName: string, entityID: string, selectedEntityIDs: string[]): { SelectMultipleEntitiesActionResult: void };

	SelectMultipleEntitiesActionPromise(actionUniqueName: string, entityID: string, selectedEntityIDs: string[]): Promise<void>;

	SelectEntitiesAction(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], selectedEntityID: string, successCallback: (data: { SelectEntitiesActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SelectEntitiesActionResult: void }>;

	SelectEntitiesAction(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], selectedEntityID: string): { SelectEntitiesActionResult: void };

	SelectEntitiesActionPromise(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], selectedEntityID: string): Promise<void>;

	GetEntitiesForFolder(folderid: string, typeNames: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], desiredCount: number, successCallback: (data: { GetEntitiesForFolderResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ GetEntitiesForFolderResult: any }>;

	GetEntitiesForFolder(folderid: string, typeNames: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], desiredCount: number): { GetEntitiesForFolderResult: any };

	GetEntitiesForFolderPromise(folderid: string, typeNames: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], desiredCount: number): Promise<any>;

	GetElementRegistrationEntitiesForFolder(folderid: string, types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], elementTypes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[], desiredCount: number, successCallback: (data: { GetElementRegistrationEntitiesForFolderResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ GetElementRegistrationEntitiesForFolderResult: any }>;

	GetElementRegistrationEntitiesForFolder(folderid: string, types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], elementTypes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[], desiredCount: number): { GetElementRegistrationEntitiesForFolderResult: any };

	GetElementRegistrationEntitiesForFolderPromise(folderid: string, types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], elementTypes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[], desiredCount: number): Promise<any>;

	GetByGroupName(groupName: string, successCallback: (data: { GetByGroupNameResult: $D.Framework.ServiceLayer.Services.Accounts.Group }) => any, errorCallback?: () => any): JQueryPromise<{ GetByGroupNameResult: $D.Framework.ServiceLayer.Services.Accounts.Group }>;

	GetByGroupName(groupName: string): { GetByGroupNameResult: $D.Framework.ServiceLayer.Services.Accounts.Group };

	GetByGroupNamePromise(groupName: string): Promise<$D.Framework.ServiceLayer.Services.Accounts.Group>;

	GetByEmail(emailAddress: string, successCallback: (data: { GetByEmailResult: $D.Framework.ServiceLayer.Services.Accounts.Account }) => any, errorCallback?: () => any): JQueryPromise<{ GetByEmailResult: $D.Framework.ServiceLayer.Services.Accounts.Account }>;

	GetByEmail(emailAddress: string): { GetByEmailResult: $D.Framework.ServiceLayer.Services.Accounts.Account };

	GetByEmailPromise(emailAddress: string): Promise<$D.Framework.ServiceLayer.Services.Accounts.Account>;

	SearchEntities(textToSearch: string, entityType: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], excludeHidden: boolean, searchDescription: boolean, createdBefore: any, createdAfter: any, createdByMe: boolean, lastUpdatedByMe: boolean, updatedAfter: any, notUpdatedAfter: any, tags: string[], rootFolderId: string, folderSearchType: any, successCallback: (data: { SearchEntitiesResult: $D.Framework.Data.ORMapper.EntityHeaderData[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchEntitiesResult: $D.Framework.Data.ORMapper.EntityHeaderData[] }>;

	SearchEntities(textToSearch: string, entityType: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], excludeHidden: boolean, searchDescription: boolean, createdBefore: any, createdAfter: any, createdByMe: boolean, lastUpdatedByMe: boolean, updatedAfter: any, notUpdatedAfter: any, tags: string[], rootFolderId: string, folderSearchType: any): { SearchEntitiesResult: $D.Framework.Data.ORMapper.EntityHeaderData[] };

	SearchEntitiesPromise(textToSearch: string, entityType: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], excludeHidden: boolean, searchDescription: boolean, createdBefore: any, createdAfter: any, createdByMe: boolean, lastUpdatedByMe: boolean, updatedAfter: any, notUpdatedAfter: any, tags: string[], rootFolderId: string, folderSearchType: any): Promise<$D.Framework.Data.ORMapper.EntityHeaderData[]>;

	SearchConfigurations(searchText: string, attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[], successCallback: (data: { SearchConfigurationsResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchConfigurationsResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] }>;

	SearchConfigurations(searchText: string, attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[]): { SearchConfigurationsResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] };

	SearchConfigurationsPromise(searchText: string, attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[]): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[]>;

	FindRootFoldersWithConfigForUser(attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[], successCallback: (data: { FindRootFoldersWithConfigForUserResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }) => any, errorCallback?: () => any): JQueryPromise<{ FindRootFoldersWithConfigForUserResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }>;

	FindRootFoldersWithConfigForUser(attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[]): { FindRootFoldersWithConfigForUserResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] };

	FindRootFoldersWithConfigForUserPromise(attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[]): Promise<$D.Framework.ServiceLayer.Services.Folder.Folder[]>;

	FindRootFoldersForTreeWithConfigForUser(attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[], successCallback: (data: { FindRootFoldersForTreeWithConfigForUserResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree[] }) => any, errorCallback?: () => any): JQueryPromise<{ FindRootFoldersForTreeWithConfigForUserResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree[] }>;

	FindRootFoldersForTreeWithConfigForUser(attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[]): { FindRootFoldersForTreeWithConfigForUserResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree[] };

	FindRootFoldersForTreeWithConfigForUserPromise(attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[]): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderForTree[]>;

	GetRootFoldersForTree(successCallback: (data: { GetRootFoldersForTreeResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetRootFoldersForTreeResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree[] }>;

	GetRootFoldersForTree(): { GetRootFoldersForTreeResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree[] };

	GetRootFoldersForTreePromise(): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderForTree[]>;

	GetFolderByID(id: string, successCallback: (data: { GetFolderByIDResult: $D.Framework.ServiceLayer.Services.Folder.Folder }) => any, errorCallback?: () => any): JQueryPromise<{ GetFolderByIDResult: $D.Framework.ServiceLayer.Services.Folder.Folder }>;

	GetFolderByID(id: string): { GetFolderByIDResult: $D.Framework.ServiceLayer.Services.Folder.Folder };

	GetFolderByIDPromise(id: string): Promise<$D.Framework.ServiceLayer.Services.Folder.Folder>;

	GetFolderForTreeByID(id: string, successCallback: (data: { GetFolderForTreeByIDResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree }) => any, errorCallback?: () => any): JQueryPromise<{ GetFolderForTreeByIDResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree }>;

	GetFolderForTreeByID(id: string): { GetFolderForTreeByIDResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree };

	GetFolderForTreeByIDPromise(id: string): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderForTree>;

	GetMyRecentFoldersForTree(successCallback: (data: { GetMyRecentFoldersForTreeResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMyRecentFoldersForTreeResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree[] }>;

	GetMyRecentFoldersForTree(): { GetMyRecentFoldersForTreeResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree[] };

	GetMyRecentFoldersForTreePromise(): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderForTree[]>;

	GetMyFavoritesForTree(successCallback: (data: { GetMyFavoritesForTreeResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMyFavoritesForTreeResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree[] }>;

	GetMyFavoritesForTree(): { GetMyFavoritesForTreeResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree[] };

	GetMyFavoritesForTreePromise(): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderForTree[]>;

	GetSubFoldersForTreeNode(id: string, successCallback: (data: { GetSubFoldersForTreeNodeResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetSubFoldersForTreeNodeResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree[] }>;

	GetSubFoldersForTreeNode(id: string): { GetSubFoldersForTreeNodeResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree[] };

	GetSubFoldersForTreeNodePromise(id: string): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderForTree[]>;

	FindSubFoldersWithConfigForUser(folderID: string, attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[], successCallback: (data: { FindSubFoldersWithConfigForUserResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }) => any, errorCallback?: () => any): JQueryPromise<{ FindSubFoldersWithConfigForUserResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }>;

	FindSubFoldersWithConfigForUser(folderID: string, attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[]): { FindSubFoldersWithConfigForUserResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] };

	FindSubFoldersWithConfigForUserPromise(folderID: string, attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[]): Promise<$D.Framework.ServiceLayer.Services.Folder.Folder[]>;

	FindSubFoldersForTreeWithConfigForUser(folderID: string, attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[], successCallback: (data: { FindSubFoldersForTreeWithConfigForUserResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree[] }) => any, errorCallback?: () => any): JQueryPromise<{ FindSubFoldersForTreeWithConfigForUserResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree[] }>;

	FindSubFoldersForTreeWithConfigForUser(folderID: string, attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[]): { FindSubFoldersForTreeWithConfigForUserResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree[] };

	FindSubFoldersForTreeWithConfigForUserPromise(folderID: string, attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[]): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderForTree[]>;

	GetAllEntities(id: string, successCallback: (data: { GetAllEntitiesResult: $D.Framework.Data.ORMapper.EntityHeaderData[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllEntitiesResult: $D.Framework.Data.ORMapper.EntityHeaderData[] }>;

	GetAllEntities(id: string): { GetAllEntitiesResult: $D.Framework.Data.ORMapper.EntityHeaderData[] };

	GetAllEntitiesPromise(id: string): Promise<$D.Framework.Data.ORMapper.EntityHeaderData[]>;

	RegisterSetFormsTitleActionContextID(actionUniqueName: string, successCallback: (data: { RegisterSetFormsTitleActionContextIDResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ RegisterSetFormsTitleActionContextIDResult: string }>;

	RegisterSetFormsTitleActionContextID(actionUniqueName: string): { RegisterSetFormsTitleActionContextIDResult: string };

	RegisterSetFormsTitleActionContextIDPromise(actionUniqueName: string): Promise<string>;

	SetFormsTitle(actionUniqueName: string, entityID: string, contextId: string, successCallback: (data: { SetFormsTitleResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetFormsTitleResult: void }>;

	SetFormsTitle(actionUniqueName: string, entityID: string, contextId: string): { SetFormsTitleResult: void };

	SetFormsTitlePromise(actionUniqueName: string, entityID: string, contextId: string): Promise<void>;

	MultiSetFormsTitle(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], contextId: string, successCallback: (data: { MultiSetFormsTitleResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ MultiSetFormsTitleResult: void }>;

	MultiSetFormsTitle(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], contextId: string): { MultiSetFormsTitleResult: void };

	MultiSetFormsTitlePromise(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], contextId: string): Promise<void>;

	CheckAndDeleteEntities(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], successCallback: (data: { CheckAndDeleteEntitiesResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CheckAndDeleteEntitiesResult: void }>;

	CheckAndDeleteEntities(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[]): { CheckAndDeleteEntitiesResult: void };

	CheckAndDeleteEntitiesPromise(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[]): Promise<void>;

	ProcessMultiConfirmActionWithWarning(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], successCallback: (data: { ProcessMultiConfirmActionWithWarningResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessMultiConfirmActionWithWarningResult: void }>;

	ProcessMultiConfirmActionWithWarning(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[]): { ProcessMultiConfirmActionWithWarningResult: void };

	ProcessMultiConfirmActionWithWarningPromise(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[]): Promise<void>;

	ProcessCreateFolderAction(actionUniqueName: string, folderName: string, addAtRoot: boolean, createDesignerFolder: boolean, successCallback: (data: { ProcessCreateFolderActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessCreateFolderActionResult: void }>;

	ProcessCreateFolderAction(actionUniqueName: string, folderName: string, addAtRoot: boolean, createDesignerFolder: boolean): { ProcessCreateFolderActionResult: void };

	ProcessCreateFolderActionPromise(actionUniqueName: string, folderName: string, addAtRoot: boolean, createDesignerFolder: boolean): Promise<void>;

	GetCreateFolderActionIssues(actionUniqueName: string, folderName: string, addAtRoot: boolean, successCallback: (data: { GetCreateFolderActionIssuesResult: $D.Framework.ValidationIssue[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetCreateFolderActionIssuesResult: $D.Framework.ValidationIssue[] }>;

	GetCreateFolderActionIssues(actionUniqueName: string, folderName: string, addAtRoot: boolean): { GetCreateFolderActionIssuesResult: $D.Framework.ValidationIssue[] };

	GetCreateFolderActionIssuesPromise(actionUniqueName: string, folderName: string, addAtRoot: boolean): Promise<$D.Framework.ValidationIssue[]>;

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
	CommonActionService(): CommonActionServiceStatic;
}
