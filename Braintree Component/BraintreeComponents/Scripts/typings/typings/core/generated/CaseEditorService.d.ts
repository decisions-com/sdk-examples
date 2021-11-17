/// <reference path="./datatypes._base.d.ts" />

interface CaseEditorServiceStatic {

	CreateOrUpdate(state: $D.Framework.Design.DataStructure.CaseEditor.ExpectedFolderStateDto, successCallback: (data: { CreateOrUpdateResult: $D.Framework.Design.DataStructure.CaseEditor.ExpectedFolderStateDto }) => any, errorCallback?: () => any): JQueryPromise<{ CreateOrUpdateResult: $D.Framework.Design.DataStructure.CaseEditor.ExpectedFolderStateDto }>;

	CreateOrUpdate(state: $D.Framework.Design.DataStructure.CaseEditor.ExpectedFolderStateDto): { CreateOrUpdateResult: $D.Framework.Design.DataStructure.CaseEditor.ExpectedFolderStateDto };

	CreateOrUpdatePromise(state: $D.Framework.Design.DataStructure.CaseEditor.ExpectedFolderStateDto): Promise<$D.Framework.Design.DataStructure.CaseEditor.ExpectedFolderStateDto>;

	GetStatesByExtentionFolderId(extensionFolderId: string, successCallback: (data: { GetStatesByExtentionFolderIdResult: $D.Framework.Design.DataStructure.CaseEditor.ExpectedFolderStateDto[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetStatesByExtentionFolderIdResult: $D.Framework.Design.DataStructure.CaseEditor.ExpectedFolderStateDto[] }>;

	GetStatesByExtentionFolderId(extensionFolderId: string): { GetStatesByExtentionFolderIdResult: $D.Framework.Design.DataStructure.CaseEditor.ExpectedFolderStateDto[] };

	GetStatesByExtentionFolderIdPromise(extensionFolderId: string): Promise<$D.Framework.Design.DataStructure.CaseEditor.ExpectedFolderStateDto[]>;

	DeleteState(extensionFolderId: string, stateId: string, successCallback: (data: { DeleteStateResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteStateResult: void }>;

	DeleteState(extensionFolderId: string, stateId: string): { DeleteStateResult: void };

	DeleteStatePromise(extensionFolderId: string, stateId: string): Promise<void>;

	SaveStates(states: $D.Framework.Design.DataStructure.CaseEditor.ExpectedFolderStateDto[], successCallback: (data: { SaveStatesResult: $D.Framework.Design.DataStructure.CaseEditor.ExpectedFolderStateDto[] }) => any, errorCallback?: () => any): JQueryPromise<{ SaveStatesResult: $D.Framework.Design.DataStructure.CaseEditor.ExpectedFolderStateDto[] }>;

	SaveStates(states: $D.Framework.Design.DataStructure.CaseEditor.ExpectedFolderStateDto[]): { SaveStatesResult: $D.Framework.Design.DataStructure.CaseEditor.ExpectedFolderStateDto[] };

	SaveStatesPromise(states: $D.Framework.Design.DataStructure.CaseEditor.ExpectedFolderStateDto[]): Promise<$D.Framework.Design.DataStructure.CaseEditor.ExpectedFolderStateDto[]>;

	UpdateStep(step: $D.Framework.Design.DataStructure.CaseEditor.StateStepDto, successCallback: (data: { UpdateStepResult: $D.Framework.Design.DataStructure.CaseEditor.StateStepDto }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateStepResult: $D.Framework.Design.DataStructure.CaseEditor.StateStepDto }>;

	UpdateStep(step: $D.Framework.Design.DataStructure.CaseEditor.StateStepDto): { UpdateStepResult: $D.Framework.Design.DataStructure.CaseEditor.StateStepDto };

	UpdateStepPromise(step: $D.Framework.Design.DataStructure.CaseEditor.StateStepDto): Promise<$D.Framework.Design.DataStructure.CaseEditor.StateStepDto>;

	UpdateSteps(steps: $D.Framework.Design.DataStructure.CaseEditor.StateStepDto[], successCallback: (data: { UpdateStepsResult: $D.Framework.Design.DataStructure.CaseEditor.StateStepDto[] }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateStepsResult: $D.Framework.Design.DataStructure.CaseEditor.StateStepDto[] }>;

	UpdateSteps(steps: $D.Framework.Design.DataStructure.CaseEditor.StateStepDto[]): { UpdateStepsResult: $D.Framework.Design.DataStructure.CaseEditor.StateStepDto[] };

	UpdateStepsPromise(steps: $D.Framework.Design.DataStructure.CaseEditor.StateStepDto[]): Promise<$D.Framework.Design.DataStructure.CaseEditor.StateStepDto[]>;

	DeleteStep(stepId: string, successCallback: (data: { DeleteStepResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteStepResult: void }>;

	DeleteStep(stepId: string): { DeleteStepResult: void };

	DeleteStepPromise(stepId: string): Promise<void>;

	GetAllSharedFlows(successCallback: (data: { GetAllSharedFlowsResult: $D.Framework.Design.DataStructure.CaseEditor.SharedFlowDto[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllSharedFlowsResult: $D.Framework.Design.DataStructure.CaseEditor.SharedFlowDto[] }>;

	GetAllSharedFlows(): { GetAllSharedFlowsResult: $D.Framework.Design.DataStructure.CaseEditor.SharedFlowDto[] };

	GetAllSharedFlowsPromise(): Promise<$D.Framework.Design.DataStructure.CaseEditor.SharedFlowDto[]>;

	GetOtherItems(folderId: string, successCallback: (data: { GetOtherItemsResult: $D.Framework.Design.DataStructure.CaseEditor.ElementRegistrationDto[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetOtherItemsResult: $D.Framework.Design.DataStructure.CaseEditor.ElementRegistrationDto[] }>;

	GetOtherItems(folderId: string): { GetOtherItemsResult: $D.Framework.Design.DataStructure.CaseEditor.ElementRegistrationDto[] };

	GetOtherItemsPromise(folderId: string): Promise<$D.Framework.Design.DataStructure.CaseEditor.ElementRegistrationDto[]>;

	GetContextToRegisterSharedFlow(folderId: string, stateName: string, flowId: string, successCallback: (data: { GetContextToRegisterSharedFlowResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetContextToRegisterSharedFlowResult: string }>;

	GetContextToRegisterSharedFlow(folderId: string, stateName: string, flowId: string): { GetContextToRegisterSharedFlowResult: string };

	GetContextToRegisterSharedFlowPromise(folderId: string, stateName: string, flowId: string): Promise<string>;

	GetContextToCreateUserAction(folderId: string, stateName: string, successCallback: (data: { GetContextToCreateUserActionResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetContextToCreateUserActionResult: string }>;

	GetContextToCreateUserAction(folderId: string, stateName: string): { GetContextToCreateUserActionResult: string };

	GetContextToCreateUserActionPromise(folderId: string, stateName: string): Promise<string>;

	GetContextToCreateTransitionFlow(folderId: string, stateName: string, successCallback: (data: { GetContextToCreateTransitionFlowResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetContextToCreateTransitionFlowResult: string }>;

	GetContextToCreateTransitionFlow(folderId: string, stateName: string): { GetContextToCreateTransitionFlowResult: string };

	GetContextToCreateTransitionFlowPromise(folderId: string, stateName: string): Promise<string>;

	GetChangedStates(extensionFolderId: string, ids: string[], successCallback: (data: { GetChangedStatesResult: $D.Framework.Design.DataStructure.CaseEditor.ExpectedFolderStateDto[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetChangedStatesResult: $D.Framework.Design.DataStructure.CaseEditor.ExpectedFolderStateDto[] }>;

	GetChangedStates(extensionFolderId: string, ids: string[]): { GetChangedStatesResult: $D.Framework.Design.DataStructure.CaseEditor.ExpectedFolderStateDto[] };

	GetChangedStatesPromise(extensionFolderId: string, ids: string[]): Promise<$D.Framework.Design.DataStructure.CaseEditor.ExpectedFolderStateDto[]>;

	GetSessionUserContext(userId: string, password: string, successCallback: (data: { GetSessionUserContextResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext }) => any, errorCallback?: () => any): JQueryPromise<{ GetSessionUserContextResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext }>;

	GetSessionUserContext(userId: string, password: string): { GetSessionUserContextResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext };

	GetSessionUserContextPromise(userId: string, password: string): Promise<$D.Framework.ServiceLayer.Utilities.SessionUserContext>;

	GetPasswordUserContext(userId: string, password: string, successCallback: (data: { GetPasswordUserContextResult: $D.Framework.ServiceLayer.Utilities.PasswordCredentialsUserContext }) => any, errorCallback?: () => any): JQueryPromise<{ GetPasswordUserContextResult: $D.Framework.ServiceLayer.Utilities.PasswordCredentialsUserContext }>;

	GetPasswordUserContext(userId: string, password: string): { GetPasswordUserContextResult: $D.Framework.ServiceLayer.Utilities.PasswordCredentialsUserContext };

	GetPasswordUserContextPromise(userId: string, password: string): Promise<$D.Framework.ServiceLayer.Utilities.PasswordCredentialsUserContext>;

	GetGuestUserContext(successCallback: (data: { GetGuestUserContextResult: $D.Framework.ServiceLayer.Utilities.GuestUserContext }) => any, errorCallback?: () => any): JQueryPromise<{ GetGuestUserContextResult: $D.Framework.ServiceLayer.Utilities.GuestUserContext }>;

	GetGuestUserContext(): { GetGuestUserContextResult: $D.Framework.ServiceLayer.Utilities.GuestUserContext };

	GetGuestUserContextPromise(): Promise<$D.Framework.ServiceLayer.Utilities.GuestUserContext>;

	Exists(id: string, successCallback: (data: { ExistsResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ ExistsResult: boolean }>;

	Exists(id: string): { ExistsResult: boolean };

	ExistsPromise(id: string): Promise<boolean>;

	GetByFolderID(folderID: string, successCallback: (data: { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Folder.ExpectedFolderState[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Folder.ExpectedFolderState[] }>;

	GetByFolderID(folderID: string): { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Folder.ExpectedFolderState[] };

	GetByFolderIDPromise(folderID: string): Promise<$D.Framework.ServiceLayer.Services.Folder.ExpectedFolderState[]>;

	GetByIDs(ids: string[], successCallback: (data: { GetByIDsResult: $D.Framework.ServiceLayer.Services.Folder.ExpectedFolderState[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDsResult: $D.Framework.ServiceLayer.Services.Folder.ExpectedFolderState[] }>;

	GetByIDs(ids: string[]): { GetByIDsResult: $D.Framework.ServiceLayer.Services.Folder.ExpectedFolderState[] };

	GetByIDsPromise(ids: string[]): Promise<$D.Framework.ServiceLayer.Services.Folder.ExpectedFolderState[]>;

	GetByID(id: string, successCallback: (data: { GetByIDResult: $D.Framework.ServiceLayer.Services.Folder.ExpectedFolderState }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDResult: $D.Framework.ServiceLayer.Services.Folder.ExpectedFolderState }>;

	GetByID(id: string): { GetByIDResult: $D.Framework.ServiceLayer.Services.Folder.ExpectedFolderState };

	GetByIDPromise(id: string): Promise<$D.Framework.ServiceLayer.Services.Folder.ExpectedFolderState>;

	GetAll(successCallback: (data: { GetAllResult: $D.Framework.ServiceLayer.Services.Folder.ExpectedFolderState[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllResult: $D.Framework.ServiceLayer.Services.Folder.ExpectedFolderState[] }>;

	GetAll(): { GetAllResult: $D.Framework.ServiceLayer.Services.Folder.ExpectedFolderState[] };

	GetAllPromise(): Promise<$D.Framework.ServiceLayer.Services.Folder.ExpectedFolderState[]>;

	Save(entity: $D.Framework.ServiceLayer.Services.Folder.ExpectedFolderState, successCallback: (data: { SaveResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveResult: void }>;

	Save(entity: $D.Framework.ServiceLayer.Services.Folder.ExpectedFolderState): { SaveResult: void };

	SavePromise(entity: $D.Framework.ServiceLayer.Services.Folder.ExpectedFolderState): Promise<void>;

	Delete(id: string, successCallback: (data: { DeleteResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteResult: void }>;

	Delete(id: string): { DeleteResult: void };

	DeletePromise(id: string): Promise<void>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType, successCallback: (data: { SearchResult: $D.Framework.ServiceLayer.Services.Folder.ExpectedFolderState[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchResult: $D.Framework.ServiceLayer.Services.Folder.ExpectedFolderState[] }>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): { SearchResult: $D.Framework.ServiceLayer.Services.Folder.ExpectedFolderState[] };

	SearchPromise(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): Promise<$D.Framework.ServiceLayer.Services.Folder.ExpectedFolderState[]>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.Folder.ExpectedFolderState[], successCallback: (data: { SaveListResult: $D.Framework.ServiceLayer.Services.Folder.ExpectedFolderState[] }) => any, errorCallback?: () => any): JQueryPromise<{ SaveListResult: $D.Framework.ServiceLayer.Services.Folder.ExpectedFolderState[] }>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.Folder.ExpectedFolderState[]): { SaveListResult: $D.Framework.ServiceLayer.Services.Folder.ExpectedFolderState[] };

	SaveListPromise(entities: $D.Framework.ServiceLayer.Services.Folder.ExpectedFolderState[]): Promise<$D.Framework.ServiceLayer.Services.Folder.ExpectedFolderState[]>;
}

interface ServicesStatic {
	CaseEditorService(): CaseEditorServiceStatic;
}
