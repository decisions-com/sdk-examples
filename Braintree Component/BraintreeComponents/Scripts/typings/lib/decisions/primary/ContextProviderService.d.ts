/// <reference path="./datatypes._base.d.ts" />

interface ContextProviderServiceStatic {

	CreateContext(entityId: string, successCallback: (data: { CreateContextResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateContextResult: string }>;

	CreateContext(entityId: string): { CreateContextResult: string };

	CreateContextPromise(entityId: string): Promise<string>;

	RegisterEditor(contextProviderId: string, successCallback: (data: { RegisterEditorResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ RegisterEditorResult: string }>;

	RegisterEditor(contextProviderId: string): { RegisterEditorResult: string };

	RegisterEditorPromise(contextProviderId: string): Promise<string>;

	UnregisterEditor(contextProviderRegistrationId: string, successCallback: (data: { UnregisterEditorResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UnregisterEditorResult: void }>;

	UnregisterEditor(contextProviderRegistrationId: string): { UnregisterEditorResult: void };

	UnregisterEditorPromise(contextProviderRegistrationId: string): Promise<void>;

	KeepContextAlive(contextProviderRegistrationId: string, successCallback: (data: { KeepContextAliveResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ KeepContextAliveResult: void }>;

	KeepContextAlive(contextProviderRegistrationId: string): { KeepContextAliveResult: void };

	KeepContextAlivePromise(contextProviderRegistrationId: string): Promise<void>;

	GetSnapshot(contextProviderRegistrationId: string, successCallback: (data: { GetSnapshotResult: $D.Framework.Design.Properties.ContextProviderNode }) => any, errorCallback?: () => any): JQueryPromise<{ GetSnapshotResult: $D.Framework.Design.Properties.ContextProviderNode }>;

	GetSnapshot(contextProviderRegistrationId: string): { GetSnapshotResult: $D.Framework.Design.Properties.ContextProviderNode };

	GetSnapshotPromise(contextProviderRegistrationId: string): Promise<$D.Framework.Design.Properties.ContextProviderNode>;

	RegisterEditorAndGetSnapshot(contextProviderRegistrationId: string, successCallback: (data: { RegisterEditorAndGetSnapshotResult: $D.Framework.Design.Properties.ContextProviderNode }) => any, errorCallback?: () => any): JQueryPromise<{ RegisterEditorAndGetSnapshotResult: $D.Framework.Design.Properties.ContextProviderNode }>;

	RegisterEditorAndGetSnapshot(contextProviderRegistrationId: string): { RegisterEditorAndGetSnapshotResult: $D.Framework.Design.Properties.ContextProviderNode };

	RegisterEditorAndGetSnapshotPromise(contextProviderRegistrationId: string): Promise<$D.Framework.Design.Properties.ContextProviderNode>;

	GetPartialSnapshot(contextProviderRegistrationId: string, path: string[], successCallback: (data: { GetPartialSnapshotResult: $D.Framework.Design.Properties.ContextProviderNode }) => any, errorCallback?: () => any): JQueryPromise<{ GetPartialSnapshotResult: $D.Framework.Design.Properties.ContextProviderNode }>;

	GetPartialSnapshot(contextProviderRegistrationId: string, path: string[]): { GetPartialSnapshotResult: $D.Framework.Design.Properties.ContextProviderNode };

	GetPartialSnapshotPromise(contextProviderRegistrationId: string, path: string[]): Promise<$D.Framework.Design.Properties.ContextProviderNode>;

	GetPartialSnapshots(contextProviderRegistrationId: string, paths: string[], successCallback: (data: { GetPartialSnapshotsResult: $D.Framework.Design.Properties.ContextProviderNode[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetPartialSnapshotsResult: $D.Framework.Design.Properties.ContextProviderNode[] }>;

	GetPartialSnapshots(contextProviderRegistrationId: string, paths: string[]): { GetPartialSnapshotsResult: $D.Framework.Design.Properties.ContextProviderNode[] };

	GetPartialSnapshotsPromise(contextProviderRegistrationId: string, paths: string[]): Promise<$D.Framework.Design.Properties.ContextProviderNode[]>;

	SetValue(contextProviderRegistrationId: string, path: string[], value: $D.Framework.ServiceLayer.Services.ContextData.DataPair, successCallback: (data: { SetValueResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetValueResult: void }>;

	SetValue(contextProviderRegistrationId: string, path: string[], value: $D.Framework.ServiceLayer.Services.ContextData.DataPair): { SetValueResult: void };

	SetValuePromise(contextProviderRegistrationId: string, path: string[], value: $D.Framework.ServiceLayer.Services.ContextData.DataPair): Promise<void>;

	SetListValue(contextProviderRegistrationId: string, path: string[], index: number, value: $D.Framework.ServiceLayer.Services.ContextData.DataPair, successCallback: (data: { SetListValueResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetListValueResult: void }>;

	SetListValue(contextProviderRegistrationId: string, path: string[], index: number, value: $D.Framework.ServiceLayer.Services.ContextData.DataPair): { SetListValueResult: void };

	SetListValuePromise(contextProviderRegistrationId: string, path: string[], index: number, value: $D.Framework.ServiceLayer.Services.ContextData.DataPair): Promise<void>;

	GetListValue(contextProviderRegistrationId: string, path: string[], index: number, successCallback: (data: { GetListValueResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ GetListValueResult: any }>;

	GetListValue(contextProviderRegistrationId: string, path: string[], index: number): { GetListValueResult: any };

	GetListValuePromise(contextProviderRegistrationId: string, path: string[], index: number): Promise<any>;

	AddValue(contextProviderRegistrationId: string, path: string[], itemType: string, successCallback: (data: { AddValueResult: number }) => any, errorCallback?: () => any): JQueryPromise<{ AddValueResult: number }>;

	AddValue(contextProviderRegistrationId: string, path: string[], itemType: string): { AddValueResult: number };

	AddValuePromise(contextProviderRegistrationId: string, path: string[], itemType: string): Promise<number>;

	InsertValue(contextProviderRegistrationId: string, path: string[], index: number, itemType: string, successCallback: (data: { InsertValueResult: number }) => any, errorCallback?: () => any): JQueryPromise<{ InsertValueResult: number }>;

	InsertValue(contextProviderRegistrationId: string, path: string[], index: number, itemType: string): { InsertValueResult: number };

	InsertValuePromise(contextProviderRegistrationId: string, path: string[], index: number, itemType: string): Promise<number>;

	RemoveValue(contextProviderRegistrationId: string, path: string[], index: number, successCallback: (data: { RemoveValueResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveValueResult: void }>;

	RemoveValue(contextProviderRegistrationId: string, path: string[], index: number): { RemoveValueResult: void };

	RemoveValuePromise(contextProviderRegistrationId: string, path: string[], index: number): Promise<void>;

	MoveValueUp(contextProviderRegistrationId: string, path: string[], index: number, successCallback: (data: { MoveValueUpResult: number }) => any, errorCallback?: () => any): JQueryPromise<{ MoveValueUpResult: number }>;

	MoveValueUp(contextProviderRegistrationId: string, path: string[], index: number): { MoveValueUpResult: number };

	MoveValueUpPromise(contextProviderRegistrationId: string, path: string[], index: number): Promise<number>;

	MoveValueDown(contextProviderRegistrationId: string, path: string[], index: number, successCallback: (data: { MoveValueDownResult: number }) => any, errorCallback?: () => any): JQueryPromise<{ MoveValueDownResult: number }>;

	MoveValueDown(contextProviderRegistrationId: string, path: string[], index: number): { MoveValueDownResult: number };

	MoveValueDownPromise(contextProviderRegistrationId: string, path: string[], index: number): Promise<number>;

	RemoveCommand(contextProviderRegistrationId: string, successCallback: (data: { RemoveCommandResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveCommandResult: void }>;

	RemoveCommand(contextProviderRegistrationId: string): { RemoveCommandResult: void };

	RemoveCommandPromise(contextProviderRegistrationId: string): Promise<void>;

	GetInvalidReasons(contextProviderRegistrationId: string, successCallback: (data: { GetInvalidReasonsResult: $D.Framework.ValidationIssue[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetInvalidReasonsResult: $D.Framework.ValidationIssue[] }>;

	GetInvalidReasons(contextProviderRegistrationId: string): { GetInvalidReasonsResult: $D.Framework.ValidationIssue[] };

	GetInvalidReasonsPromise(contextProviderRegistrationId: string): Promise<$D.Framework.ValidationIssue[]>;

	GetInvalidReasonsForPath(contextProviderRegistrationId: string, path: string[], successCallback: (data: { GetInvalidReasonsForPathResult: $D.Framework.ValidationIssue[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetInvalidReasonsForPathResult: $D.Framework.ValidationIssue[] }>;

	GetInvalidReasonsForPath(contextProviderRegistrationId: string, path: string[]): { GetInvalidReasonsForPathResult: $D.Framework.ValidationIssue[] };

	GetInvalidReasonsForPathPromise(contextProviderRegistrationId: string, path: string[]): Promise<$D.Framework.ValidationIssue[]>;

	EditComplete(contextProviderRegistrationId: string, completeType: $D.Framework.Design.Properties.EditCompleteType, successCallback: (data: { EditCompleteResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ EditCompleteResult: void }>;

	EditComplete(contextProviderRegistrationId: string, completeType: $D.Framework.Design.Properties.EditCompleteType): { EditCompleteResult: void };

	EditCompletePromise(contextProviderRegistrationId: string, completeType: $D.Framework.Design.Properties.EditCompleteType): Promise<void>;

	EditCompleteWithEvents(eventId: string, contextProviderRegistrationId: string, completeType: $D.Framework.Design.Properties.EditCompleteType, successCallback: (data: { EditCompleteWithEventsResult: $D.Framework.Design.Properties.ResultWithEvents }) => any, errorCallback?: () => any): JQueryPromise<{ EditCompleteWithEventsResult: $D.Framework.Design.Properties.ResultWithEvents }>;

	EditCompleteWithEvents(eventId: string, contextProviderRegistrationId: string, completeType: $D.Framework.Design.Properties.EditCompleteType): { EditCompleteWithEventsResult: $D.Framework.Design.Properties.ResultWithEvents };

	EditCompleteWithEventsPromise(eventId: string, contextProviderRegistrationId: string, completeType: $D.Framework.Design.Properties.EditCompleteType): Promise<$D.Framework.Design.Properties.ResultWithEvents>;

	AllEditComplete(editingContexts: string[], completeType: $D.Framework.Design.Properties.EditCompleteType, successCallback: (data: { AllEditCompleteResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AllEditCompleteResult: void }>;

	AllEditComplete(editingContexts: string[], completeType: $D.Framework.Design.Properties.EditCompleteType): { AllEditCompleteResult: void };

	AllEditCompletePromise(editingContexts: string[], completeType: $D.Framework.Design.Properties.EditCompleteType): Promise<void>;

	Submit(contextProviderRegistrationId: string, successCallback: (data: { SubmitResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SubmitResult: void }>;

	Submit(contextProviderRegistrationId: string): { SubmitResult: void };

	SubmitPromise(contextProviderRegistrationId: string): Promise<void>;

	CreateContextForProperty(contextProviderRegistrationId: string, path: string[], successCallback: (data: { CreateContextForPropertyResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateContextForPropertyResult: string }>;

	CreateContextForProperty(contextProviderRegistrationId: string, path: string[]): { CreateContextForPropertyResult: string };

	CreateContextForPropertyPromise(contextProviderRegistrationId: string, path: string[]): Promise<string>;

	CreateContextForPropertyWithIndex(contextProviderRegistrationId: string, path: string[], index: number, successCallback: (data: { CreateContextForPropertyWithIndexResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateContextForPropertyWithIndexResult: string }>;

	CreateContextForPropertyWithIndex(contextProviderRegistrationId: string, path: string[], index: number): { CreateContextForPropertyWithIndexResult: string };

	CreateContextForPropertyWithIndexPromise(contextProviderRegistrationId: string, path: string[], index: number): Promise<string>;

	AddValueAndCreateContext(contextProviderRegistrationId: string, path: string[], itemType: string, successCallback: (data: { AddValueAndCreateContextResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddValueAndCreateContextResult: string }>;

	AddValueAndCreateContext(contextProviderRegistrationId: string, path: string[], itemType: string): { AddValueAndCreateContextResult: string };

	AddValueAndCreateContextPromise(contextProviderRegistrationId: string, path: string[], itemType: string): Promise<string>;

	GetObjectEditors(contextProviderRegistrationId: string, successCallback: (data: { GetObjectEditorsResult: $D.Framework.Design.Properties.ObjectEditorInformation }) => any, errorCallback?: () => any): JQueryPromise<{ GetObjectEditorsResult: $D.Framework.Design.Properties.ObjectEditorInformation }>;

	GetObjectEditors(contextProviderRegistrationId: string): { GetObjectEditorsResult: $D.Framework.Design.Properties.ObjectEditorInformation };

	GetObjectEditorsPromise(contextProviderRegistrationId: string): Promise<$D.Framework.Design.Properties.ObjectEditorInformation>;

	Cancel(contextProviderRegistrationId: string, successCallback: (data: { CancelResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CancelResult: void }>;

	Cancel(contextProviderRegistrationId: string): { CancelResult: void };

	CancelPromise(contextProviderRegistrationId: string): Promise<void>;

	CommitChanges(contextProviderRegistrationId: string, successCallback: (data: { CommitChangesResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CommitChangesResult: void }>;

	CommitChanges(contextProviderRegistrationId: string): { CommitChangesResult: void };

	CommitChangesPromise(contextProviderRegistrationId: string): Promise<void>;

	CanCancel(contextProviderRegistrationId: string, successCallback: (data: { CanCancelResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ CanCancelResult: boolean }>;

	CanCancel(contextProviderRegistrationId: string): { CanCancelResult: boolean };

	CanCancelPromise(contextProviderRegistrationId: string): Promise<boolean>;

	SetPropertyValueFromContext(contextProviderRegistrationId: string, propertyContextId: string, propertyPath: string[], isList: boolean, index: number, successCallback: (data: { SetPropertyValueFromContextResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetPropertyValueFromContextResult: void }>;

	SetPropertyValueFromContext(contextProviderRegistrationId: string, propertyContextId: string, propertyPath: string[], isList: boolean, index: number): { SetPropertyValueFromContextResult: void };

	SetPropertyValueFromContextPromise(contextProviderRegistrationId: string, propertyContextId: string, propertyPath: string[], isList: boolean, index: number): Promise<void>;

	SetPropertyValueByEditingContext(contextProviderRegistrationId: string, propertyContextId: string, propertyPath: string[], isList: boolean, index: number, successCallback: (data: { SetPropertyValueByEditingContextResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetPropertyValueByEditingContextResult: void }>;

	SetPropertyValueByEditingContext(contextProviderRegistrationId: string, propertyContextId: string, propertyPath: string[], isList: boolean, index: number): { SetPropertyValueByEditingContextResult: void };

	SetPropertyValueByEditingContextPromise(contextProviderRegistrationId: string, propertyContextId: string, propertyPath: string[], isList: boolean, index: number): Promise<void>;

	CreateContextForType(typeName: string, successCallback: (data: { CreateContextForTypeResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateContextForTypeResult: string }>;

	CreateContextForType(typeName: string): { CreateContextForTypeResult: string };

	CreateContextForTypePromise(typeName: string): Promise<string>;

	CreateContextForEntityClone(entityId: string, successCallback: (data: { CreateContextForEntityCloneResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateContextForEntityCloneResult: string }>;

	CreateContextForEntityClone(entityId: string): { CreateContextForEntityCloneResult: string };

	CreateContextForEntityClonePromise(entityId: string): Promise<string>;

	CreateContextForEntity(entityId: string, successCallback: (data: { CreateContextForEntityResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateContextForEntityResult: string }>;

	CreateContextForEntity(entityId: string): { CreateContextForEntityResult: string };

	CreateContextForEntityPromise(entityId: string): Promise<string>;

	ContextHasObjectInProperty(contextProviderRegistrationId: string, propertyPath: string[], successCallback: (data: { ContextHasObjectInPropertyResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ ContextHasObjectInPropertyResult: boolean }>;

	ContextHasObjectInProperty(contextProviderRegistrationId: string, propertyPath: string[]): { ContextHasObjectInPropertyResult: boolean };

	ContextHasObjectInPropertyPromise(contextProviderRegistrationId: string, propertyPath: string[]): Promise<boolean>;

	SetSerailizedData(contextProviderRegistrationId: string, rootpath: string, content: string, successCallback: (data: { SetSerailizedDataResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetSerailizedDataResult: void }>;

	SetSerailizedData(contextProviderRegistrationId: string, rootpath: string, content: string): { SetSerailizedDataResult: void };

	SetSerailizedDataPromise(contextProviderRegistrationId: string, rootpath: string, content: string): Promise<void>;

	EditExistingSuggestionList(listName: string, propertyName: string, addPropertyToList: boolean, successCallback: (data: { EditExistingSuggestionListResult: $D.Framework.Design.Properties.ContextProviderNode }) => any, errorCallback?: () => any): JQueryPromise<{ EditExistingSuggestionListResult: $D.Framework.Design.Properties.ContextProviderNode }>;

	EditExistingSuggestionList(listName: string, propertyName: string, addPropertyToList: boolean): { EditExistingSuggestionListResult: $D.Framework.Design.Properties.ContextProviderNode };

	EditExistingSuggestionListPromise(listName: string, propertyName: string, addPropertyToList: boolean): Promise<$D.Framework.Design.Properties.ContextProviderNode>;

	UnHookPropertyFromSuggestions(listName: string, propertyName: string, successCallback: (data: { UnHookPropertyFromSuggestionsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UnHookPropertyFromSuggestionsResult: void }>;

	UnHookPropertyFromSuggestions(listName: string, propertyName: string): { UnHookPropertyFromSuggestionsResult: void };

	UnHookPropertyFromSuggestionsPromise(listName: string, propertyName: string): Promise<void>;

	HookPropertyToSuggestions(listName: string, propertyName: string, successCallback: (data: { HookPropertyToSuggestionsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ HookPropertyToSuggestionsResult: void }>;

	HookPropertyToSuggestions(listName: string, propertyName: string): { HookPropertyToSuggestionsResult: void };

	HookPropertyToSuggestionsPromise(listName: string, propertyName: string): Promise<void>;

	GetAllSuggestionsListNames(successCallback: (data: { GetAllSuggestionsListNamesResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllSuggestionsListNamesResult: string[] }>;

	GetAllSuggestionsListNames(): { GetAllSuggestionsListNamesResult: string[] };

	GetAllSuggestionsListNamesPromise(): Promise<string[]>;

	AddValueToSuggestionList(listName: string, value: string, suggestToAddNewValue: boolean, successCallback: (data: { AddValueToSuggestionListResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddValueToSuggestionListResult: void }>;

	AddValueToSuggestionList(listName: string, value: string, suggestToAddNewValue: boolean): { AddValueToSuggestionListResult: void };

	AddValueToSuggestionListPromise(listName: string, value: string, suggestToAddNewValue: boolean): Promise<void>;

	IsContextProviderCacheOwner(contextProviderRegistrationId: string, successCallback: (data: { IsContextProviderCacheOwnerResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ IsContextProviderCacheOwnerResult: boolean }>;

	IsContextProviderCacheOwner(contextProviderRegistrationId: string): { IsContextProviderCacheOwnerResult: boolean };

	IsContextProviderCacheOwnerPromise(contextProviderRegistrationId: string): Promise<boolean>;

	RemovContextProviderCacheOwner(contextProviderRegistrationId: string, successCallback: (data: { RemovContextProviderCacheOwnerResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ RemovContextProviderCacheOwnerResult: boolean }>;

	RemovContextProviderCacheOwner(contextProviderRegistrationId: string): { RemovContextProviderCacheOwnerResult: boolean };

	RemovContextProviderCacheOwnerPromise(contextProviderRegistrationId: string): Promise<boolean>;

	GetContextProvider(contextProviderRegistrationId: string, successCallback: (data: { GetContextProviderResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ GetContextProviderResult: any }>;

	GetContextProvider(contextProviderRegistrationId: string): { GetContextProviderResult: any };

	GetContextProviderPromise(contextProviderRegistrationId: string): Promise<any>;

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
	ContextProviderService(): ContextProviderServiceStatic;
}
