/// <reference path="./datatypes._base.d.ts" />

interface MergeEditorServiceStatic {

	RegisterContextProviderForProperty(ParentContextId: string, propertyName: string, propertyPath: string[], isListValueUpdate: boolean, index: number, successCallback: (data: { RegisterContextProviderForPropertyResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ RegisterContextProviderForPropertyResult: string }>;

	RegisterContextProviderForProperty(ParentContextId: string, propertyName: string, propertyPath: string[], isListValueUpdate: boolean, index: number): { RegisterContextProviderForPropertyResult: string };

	RegisterContextProviderForPropertyPromise(ParentContextId: string, propertyName: string, propertyPath: string[], isListValueUpdate: boolean, index: number): Promise<string>;

	SwitchMergeEditorOjects(mergeEditActionUniqueName: string, isSwitched: boolean, successCallback: (data: { SwitchMergeEditorOjectsResult: $D.Framework.ServiceLayer.Actions.Common.MergeEditorModel }) => any, errorCallback?: () => any): JQueryPromise<{ SwitchMergeEditorOjectsResult: $D.Framework.ServiceLayer.Actions.Common.MergeEditorModel }>;

	SwitchMergeEditorOjects(mergeEditActionUniqueName: string, isSwitched: boolean): { SwitchMergeEditorOjectsResult: $D.Framework.ServiceLayer.Actions.Common.MergeEditorModel };

	SwitchMergeEditorOjectsPromise(mergeEditActionUniqueName: string, isSwitched: boolean): Promise<$D.Framework.ServiceLayer.Actions.Common.MergeEditorModel>;

	CopyPropertyValueFromOneContextToAnother(copyFromContextId: string, copyToContextId: string, propertyPath: string[], isListValueUpdate: boolean, index: number, successCallback: (data: { CopyPropertyValueFromOneContextToAnotherResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ CopyPropertyValueFromOneContextToAnotherResult: boolean }>;

	CopyPropertyValueFromOneContextToAnother(copyFromContextId: string, copyToContextId: string, propertyPath: string[], isListValueUpdate: boolean, index: number): { CopyPropertyValueFromOneContextToAnotherResult: boolean };

	CopyPropertyValueFromOneContextToAnotherPromise(copyFromContextId: string, copyToContextId: string, propertyPath: string[], isListValueUpdate: boolean, index: number): Promise<boolean>;

	SetNullValueToProperty(contextId: string, propertyPath: string[], isListValueUpdate: boolean, index: number, successCallback: (data: { SetNullValueToPropertyResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ SetNullValueToPropertyResult: boolean }>;

	SetNullValueToProperty(contextId: string, propertyPath: string[], isListValueUpdate: boolean, index: number): { SetNullValueToPropertyResult: boolean };

	SetNullValueToPropertyPromise(contextId: string, propertyPath: string[], isListValueUpdate: boolean, index: number): Promise<boolean>;

	GetTargetByContextId(contextId: string, successCallback: (data: { GetTargetByContextIdResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair }) => any, errorCallback?: () => any): JQueryPromise<{ GetTargetByContextIdResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair }>;

	GetTargetByContextId(contextId: string): { GetTargetByContextIdResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair };

	GetTargetByContextIdPromise(contextId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair>;

	GetMergeEditorModel(ObjectToKeepPair: $D.Framework.ServiceLayer.Services.ContextData.DataPair, ObjectToDeletePair: $D.Framework.ServiceLayer.Services.ContextData.DataPair, isSwitch: boolean, successCallback: (data: { GetMergeEditorModelResult: $D.Framework.ServiceLayer.Actions.Common.MergeEditorModel }) => any, errorCallback?: () => any): JQueryPromise<{ GetMergeEditorModelResult: $D.Framework.ServiceLayer.Actions.Common.MergeEditorModel }>;

	GetMergeEditorModel(ObjectToKeepPair: $D.Framework.ServiceLayer.Services.ContextData.DataPair, ObjectToDeletePair: $D.Framework.ServiceLayer.Services.ContextData.DataPair, isSwitch: boolean): { GetMergeEditorModelResult: $D.Framework.ServiceLayer.Actions.Common.MergeEditorModel };

	GetMergeEditorModelPromise(ObjectToKeepPair: $D.Framework.ServiceLayer.Services.ContextData.DataPair, ObjectToDeletePair: $D.Framework.ServiceLayer.Services.ContextData.DataPair, isSwitch: boolean): Promise<$D.Framework.ServiceLayer.Actions.Common.MergeEditorModel>;

	GetObjectString(ObjectPair: $D.Framework.ServiceLayer.Services.ContextData.DataPair, successCallback: (data: { GetObjectStringResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetObjectStringResult: string }>;

	GetObjectString(ObjectPair: $D.Framework.ServiceLayer.Services.ContextData.DataPair): { GetObjectStringResult: string };

	GetObjectStringPromise(ObjectPair: $D.Framework.ServiceLayer.Services.ContextData.DataPair): Promise<string>;
}

interface ServicesStatic {
	MergeEditorService(): MergeEditorServiceStatic;
}
