/// <reference path="./datatypes._base.d.ts" />

interface PropertyEditorServiceStatic {

	SubmitStringArrayValue(editingContext: string, path: string[], selectedElements: string[], successCallback: (data: { SubmitStringArrayValueResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SubmitStringArrayValueResult: void }>;

	SubmitStringArrayValue(editingContext: string, path: string[], selectedElements: string[]): { SubmitStringArrayValueResult: void };

	SubmitStringArrayValuePromise(editingContext: string, path: string[], selectedElements: string[]): Promise<void>;

	SubmitDateTimeValueAsString(editingContextId: string, path: string[], dateTime: string, successCallback: (data: { SubmitDateTimeValueAsStringResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SubmitDateTimeValueAsStringResult: void }>;

	SubmitDateTimeValueAsString(editingContextId: string, path: string[], dateTime: string): { SubmitDateTimeValueAsStringResult: void };

	SubmitDateTimeValueAsStringPromise(editingContextId: string, path: string[], dateTime: string): Promise<void>;

	SubmitDateTimeValue(editingContextId: string, path: string[], dateTime: Date, successCallback: (data: { SubmitDateTimeValueResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SubmitDateTimeValueResult: void }>;

	SubmitDateTimeValue(editingContextId: string, path: string[], dateTime: Date): { SubmitDateTimeValueResult: void };

	SubmitDateTimeValuePromise(editingContextId: string, path: string[], dateTime: Date): Promise<void>;

	ParseDateTime(dateText: string, dateTimeFormat: string, successCallback: (data: { ParseDateTimeResult: $D.Framework.Design.Properties.ParseDateTimeResult }) => any, errorCallback?: () => any): JQueryPromise<{ ParseDateTimeResult: $D.Framework.Design.Properties.ParseDateTimeResult }>;

	ParseDateTime(dateText: string, dateTimeFormat: string): { ParseDateTimeResult: $D.Framework.Design.Properties.ParseDateTimeResult };

	ParseDateTimePromise(dateText: string, dateTimeFormat: string): Promise<$D.Framework.Design.Properties.ParseDateTimeResult>;

	UploadFileValue(editingContextId: string, path: string[], fileReferenceId: string, successCallback: (data: { UploadFileValueResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UploadFileValueResult: void }>;

	UploadFileValue(editingContextId: string, path: string[], fileReferenceId: string): { UploadFileValueResult: void };

	UploadFileValuePromise(editingContextId: string, path: string[], fileReferenceId: string): Promise<void>;

	PickMultiFileValue(editingContextId: string, path: string[], filesId: string[], successCallback: (data: { PickMultiFileValueResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ PickMultiFileValueResult: void }>;

	PickMultiFileValue(editingContextId: string, path: string[], filesId: string[]): { PickMultiFileValueResult: void };

	PickMultiFileValuePromise(editingContextId: string, path: string[], filesId: string[]): Promise<void>;

	SubmitFileReference(editingContextId: string, path: string[], fileReferenceId: string, successCallback: (data: { SubmitFileReferenceResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ SubmitFileReferenceResult: string }>;

	SubmitFileReference(editingContextId: string, path: string[], fileReferenceId: string): { SubmitFileReferenceResult: string };

	SubmitFileReferencePromise(editingContextId: string, path: string[], fileReferenceId: string): Promise<string>;

	AddGroupNameToList(editingContextId: string, path: string[], groupListBoxText: string[], successCallback: (data: { AddGroupNameToListResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddGroupNameToListResult: void }>;

	AddGroupNameToList(editingContextId: string, path: string[], groupListBoxText: string[]): { AddGroupNameToListResult: void };

	AddGroupNameToListPromise(editingContextId: string, path: string[], groupListBoxText: string[]): Promise<void>;

	RemoveGroupNameFromList(editingContextId: string, path: string[], listBoxText: string[], successCallback: (data: { RemoveGroupNameFromListResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveGroupNameFromListResult: void }>;

	RemoveGroupNameFromList(editingContextId: string, path: string[], listBoxText: string[]): { RemoveGroupNameFromListResult: void };

	RemoveGroupNameFromListPromise(editingContextId: string, path: string[], listBoxText: string[]): Promise<void>;

	SubmitChartSourcePickerEditorValue(editingContextId: string, path: string[], elementId: string, sourceMode: string, defaultSeries: string, successCallback: (data: { SubmitChartSourcePickerEditorValueResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SubmitChartSourcePickerEditorValueResult: void }>;

	SubmitChartSourcePickerEditorValue(editingContextId: string, path: string[], elementId: string, sourceMode: string, defaultSeries: string): { SubmitChartSourcePickerEditorValueResult: void };

	SubmitChartSourcePickerEditorValuePromise(editingContextId: string, path: string[], elementId: string, sourceMode: string, defaultSeries: string): Promise<void>;

	SubmitMergeTextEditorValue(editingContextId: string, path: string[], selectedvalue: string, successCallback: (data: { SubmitMergeTextEditorValueResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SubmitMergeTextEditorValueResult: void }>;

	SubmitMergeTextEditorValue(editingContextId: string, path: string[], selectedvalue: string): { SubmitMergeTextEditorValueResult: void };

	SubmitMergeTextEditorValuePromise(editingContextId: string, path: string[], selectedvalue: string): Promise<void>;

	SetNumericArrayValue(editingContextId: string, path: string[], value: string[], NumericArrayType: $D.Framework.Design.Properties.Attributes.NumericArrayEditorType, successCallback: (data: { SetNumericArrayValueResult: $D.Framework.ValidationIssue[] }) => any, errorCallback?: () => any): JQueryPromise<{ SetNumericArrayValueResult: $D.Framework.ValidationIssue[] }>;

	SetNumericArrayValue(editingContextId: string, path: string[], value: string[], NumericArrayType: $D.Framework.Design.Properties.Attributes.NumericArrayEditorType): { SetNumericArrayValueResult: $D.Framework.ValidationIssue[] };

	SetNumericArrayValuePromise(editingContextId: string, path: string[], value: string[], NumericArrayType: $D.Framework.Design.Properties.Attributes.NumericArrayEditorType): Promise<$D.Framework.ValidationIssue[]>;

	SubmitTimeSpanValue(editingContextId: string, path: string[], timeSpanValue: string, successCallback: (data: { SubmitTimeSpanValueResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SubmitTimeSpanValueResult: void }>;

	SubmitTimeSpanValue(editingContextId: string, path: string[], timeSpanValue: string): { SubmitTimeSpanValueResult: void };

	SubmitTimeSpanValuePromise(editingContextId: string, path: string[], timeSpanValue: string): Promise<void>;

	SubmitDigitsEditorValue(editingContext: string, path: string[], value: string, type: $D.Framework.Design.Properties.NumericEditorType, isnullableType: boolean, successCallback: (data: { SubmitDigitsEditorValueResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SubmitDigitsEditorValueResult: void }>;

	SubmitDigitsEditorValue(editingContext: string, path: string[], value: string, type: $D.Framework.Design.Properties.NumericEditorType, isnullableType: boolean): { SubmitDigitsEditorValueResult: void };

	SubmitDigitsEditorValuePromise(editingContext: string, path: string[], value: string, type: $D.Framework.Design.Properties.NumericEditorType, isnullableType: boolean): Promise<void>;

	AddValueAndOpenEditor(editingContextId: string, path: string[], itemType: string, successCallback: (data: { AddValueAndOpenEditorResult: $D.Framework.Design.Properties.ContextProviderNode }) => any, errorCallback?: () => any): JQueryPromise<{ AddValueAndOpenEditorResult: $D.Framework.Design.Properties.ContextProviderNode }>;

	AddValueAndOpenEditor(editingContextId: string, path: string[], itemType: string): { AddValueAndOpenEditorResult: $D.Framework.Design.Properties.ContextProviderNode };

	AddValueAndOpenEditorPromise(editingContextId: string, path: string[], itemType: string): Promise<$D.Framework.Design.Properties.ContextProviderNode>;

	EditValueAndOpenEditor(editingContextId: string, path: string[], itemIndex: number, successCallback: (data: { EditValueAndOpenEditorResult: $D.Framework.Design.Properties.ContextProviderNode }) => any, errorCallback?: () => any): JQueryPromise<{ EditValueAndOpenEditorResult: $D.Framework.Design.Properties.ContextProviderNode }>;

	EditValueAndOpenEditor(editingContextId: string, path: string[], itemIndex: number): { EditValueAndOpenEditorResult: $D.Framework.Design.Properties.ContextProviderNode };

	EditValueAndOpenEditorPromise(editingContextId: string, path: string[], itemIndex: number): Promise<$D.Framework.Design.Properties.ContextProviderNode>;

	RemoveDataDiagram(editingContextId: string, path: string[], diagramId: string, successCallback: (data: { RemoveDataDiagramResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveDataDiagramResult: void }>;

	RemoveDataDiagram(editingContextId: string, path: string[], diagramId: string): { RemoveDataDiagramResult: void };

	RemoveDataDiagramPromise(editingContextId: string, path: string[], diagramId: string): Promise<void>;

	SubmitCharArrayValue(editingContextId: string, path: string[], value: string, successCallback: (data: { SubmitCharArrayValueResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SubmitCharArrayValueResult: void }>;

	SubmitCharArrayValue(editingContextId: string, path: string[], value: string): { SubmitCharArrayValueResult: void };

	SubmitCharArrayValuePromise(editingContextId: string, path: string[], value: string): Promise<void>;
}

interface ServicesStatic {
	PropertyEditorService(): PropertyEditorServiceStatic;
}
