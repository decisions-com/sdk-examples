/// <reference path="./datatypes._base.d.ts" />

interface DataDefinitionsEditServiceStatic {

	GetEditDataDefinitionContext(context: $D.Framework.Design.Flow.Service.Edit.DataDefinitions.DataDefinitionContext, successCallback: (data: { GetEditDataDefinitionContextResult: $D.Framework.Design.Flow.Service.Edit.EditDataDefinitionContext }) => any, errorCallback?: () => any): JQueryPromise<{ GetEditDataDefinitionContextResult: $D.Framework.Design.Flow.Service.Edit.EditDataDefinitionContext }>;

	GetEditDataDefinitionContext(context: $D.Framework.Design.Flow.Service.Edit.DataDefinitions.DataDefinitionContext): { GetEditDataDefinitionContextResult: $D.Framework.Design.Flow.Service.Edit.EditDataDefinitionContext };

	GetEditDataDefinitionContextPromise(context: $D.Framework.Design.Flow.Service.Edit.DataDefinitions.DataDefinitionContext): Promise<$D.Framework.Design.Flow.Service.Edit.EditDataDefinitionContext>;

	AddDataDefinition(context: $D.Framework.Design.Flow.Service.Edit.DataDefinitions.DataDefinitionContext, successCallback: (data: { AddDataDefinitionResult: $D.Framework.Design.Flow.Service.Edit.DataDefinitionForEdit }) => any, errorCallback?: () => any): JQueryPromise<{ AddDataDefinitionResult: $D.Framework.Design.Flow.Service.Edit.DataDefinitionForEdit }>;

	AddDataDefinition(context: $D.Framework.Design.Flow.Service.Edit.DataDefinitions.DataDefinitionContext): { AddDataDefinitionResult: $D.Framework.Design.Flow.Service.Edit.DataDefinitionForEdit };

	AddDataDefinitionPromise(context: $D.Framework.Design.Flow.Service.Edit.DataDefinitions.DataDefinitionContext): Promise<$D.Framework.Design.Flow.Service.Edit.DataDefinitionForEdit>;

	GetAllDataDefinitions(context: $D.Framework.Design.Flow.Service.Edit.DataDefinitions.DataDefinitionContext, successCallback: (data: { GetAllDataDefinitionsResult: $D.Framework.Design.Flow.Service.Edit.DataDefinitionForEdit[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllDataDefinitionsResult: $D.Framework.Design.Flow.Service.Edit.DataDefinitionForEdit[] }>;

	GetAllDataDefinitions(context: $D.Framework.Design.Flow.Service.Edit.DataDefinitions.DataDefinitionContext): { GetAllDataDefinitionsResult: $D.Framework.Design.Flow.Service.Edit.DataDefinitionForEdit[] };

	GetAllDataDefinitionsPromise(context: $D.Framework.Design.Flow.Service.Edit.DataDefinitions.DataDefinitionContext): Promise<$D.Framework.Design.Flow.Service.Edit.DataDefinitionForEdit[]>;

	GetDataDefinition(context: $D.Framework.Design.Flow.Service.Edit.DataDefinitions.DataDefinitionContext, successCallback: (data: { GetDataDefinitionResult: $D.Framework.Design.Flow.Service.Edit.DataDefinitionForEdit }) => any, errorCallback?: () => any): JQueryPromise<{ GetDataDefinitionResult: $D.Framework.Design.Flow.Service.Edit.DataDefinitionForEdit }>;

	GetDataDefinition(context: $D.Framework.Design.Flow.Service.Edit.DataDefinitions.DataDefinitionContext): { GetDataDefinitionResult: $D.Framework.Design.Flow.Service.Edit.DataDefinitionForEdit };

	GetDataDefinitionPromise(context: $D.Framework.Design.Flow.Service.Edit.DataDefinitions.DataDefinitionContext): Promise<$D.Framework.Design.Flow.Service.Edit.DataDefinitionForEdit>;

	SetDataDefinition(context: $D.Framework.Design.Flow.Service.Edit.DataDefinitions.DataDefinitionContext, name: string, type: $D.Framework.Design.Flow.Mapping.DecisionsType, isList: boolean, successCallback: (data: { SetDataDefinitionResult: $D.Framework.Design.Flow.Service.Edit.DataDefinitionForEdit }) => any, errorCallback?: () => any): JQueryPromise<{ SetDataDefinitionResult: $D.Framework.Design.Flow.Service.Edit.DataDefinitionForEdit }>;

	SetDataDefinition(context: $D.Framework.Design.Flow.Service.Edit.DataDefinitions.DataDefinitionContext, name: string, type: $D.Framework.Design.Flow.Mapping.DecisionsType, isList: boolean): { SetDataDefinitionResult: $D.Framework.Design.Flow.Service.Edit.DataDefinitionForEdit };

	SetDataDefinitionPromise(context: $D.Framework.Design.Flow.Service.Edit.DataDefinitions.DataDefinitionContext, name: string, type: $D.Framework.Design.Flow.Mapping.DecisionsType, isList: boolean): Promise<$D.Framework.Design.Flow.Service.Edit.DataDefinitionForEdit>;

	Submit(context: $D.Framework.Design.Flow.Service.Edit.DataDefinitions.DataDefinitionContext, successCallback: (data: { SubmitResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SubmitResult: void }>;

	Submit(context: $D.Framework.Design.Flow.Service.Edit.DataDefinitions.DataDefinitionContext): { SubmitResult: void };

	SubmitPromise(context: $D.Framework.Design.Flow.Service.Edit.DataDefinitions.DataDefinitionContext): Promise<void>;

	GetInputValueContext(context: $D.Framework.Design.Flow.Service.Edit.DataDefinitions.DataDefinitionContext, successCallback: (data: { GetInputValueContextResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetInputValueContextResult: string }>;

	GetInputValueContext(context: $D.Framework.Design.Flow.Service.Edit.DataDefinitions.DataDefinitionContext): { GetInputValueContextResult: string };

	GetInputValueContextPromise(context: $D.Framework.Design.Flow.Service.Edit.DataDefinitions.DataDefinitionContext): Promise<string>;

	StartEditingInputValue(context: $D.Framework.Design.Flow.Service.Edit.DataDefinitions.DataDefinitionContext, successCallback: (data: { StartEditingInputValueResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession }) => any, errorCallback?: () => any): JQueryPromise<{ StartEditingInputValueResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession }>;

	StartEditingInputValue(context: $D.Framework.Design.Flow.Service.Edit.DataDefinitions.DataDefinitionContext): { StartEditingInputValueResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession };

	StartEditingInputValuePromise(context: $D.Framework.Design.Flow.Service.Edit.DataDefinitions.DataDefinitionContext): Promise<$D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession>;

	SetConstantMappingValue(context: $D.Framework.Design.Flow.Service.Edit.DataDefinitions.DataDefinitionContext, value: string, successCallback: (data: { SetConstantMappingValueResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetConstantMappingValueResult: void }>;

	SetConstantMappingValue(context: $D.Framework.Design.Flow.Service.Edit.DataDefinitions.DataDefinitionContext, value: string): { SetConstantMappingValueResult: void };

	SetConstantMappingValuePromise(context: $D.Framework.Design.Flow.Service.Edit.DataDefinitions.DataDefinitionContext, value: string): Promise<void>;

	SetValueMapping(context: $D.Framework.Design.Flow.Service.Edit.DataDefinitions.DataDefinitionContext, mappingType: string, successCallback: (data: { SetValueMappingResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetValueMappingResult: void }>;

	SetValueMapping(context: $D.Framework.Design.Flow.Service.Edit.DataDefinitions.DataDefinitionContext, mappingType: string): { SetValueMappingResult: void };

	SetValueMappingPromise(context: $D.Framework.Design.Flow.Service.Edit.DataDefinitions.DataDefinitionContext, mappingType: string): Promise<void>;

	CreateReduceDataContext(context: $D.Framework.Design.Flow.Service.Edit.DataDefinitions.DataDefinitionContext, folderId: string, successCallback: (data: { CreateReduceDataContextResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateReduceDataContextResult: string }>;

	CreateReduceDataContext(context: $D.Framework.Design.Flow.Service.Edit.DataDefinitions.DataDefinitionContext, folderId: string): { CreateReduceDataContextResult: string };

	CreateReduceDataContextPromise(context: $D.Framework.Design.Flow.Service.Edit.DataDefinitions.DataDefinitionContext, folderId: string): Promise<string>;

	SubmitReduceDataContext(context: $D.Framework.Design.Flow.Service.Edit.DataDefinitions.DataDefinitionContext, reduceDataContextId: string, successCallback: (data: { SubmitReduceDataContextResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SubmitReduceDataContextResult: void }>;

	SubmitReduceDataContext(context: $D.Framework.Design.Flow.Service.Edit.DataDefinitions.DataDefinitionContext, reduceDataContextId: string): { SubmitReduceDataContextResult: void };

	SubmitReduceDataContextPromise(context: $D.Framework.Design.Flow.Service.Edit.DataDefinitions.DataDefinitionContext, reduceDataContextId: string): Promise<void>;

	UploadSampleSet(context: $D.Framework.Design.Flow.Service.Edit.DataDefinitions.DataDefinitionContext, fileId: string, successCallback: (data: { UploadSampleSetResult: $D.Framework.Design.Flow.Service.Debugging.Samples.SampleCategory }) => any, errorCallback?: () => any): JQueryPromise<{ UploadSampleSetResult: $D.Framework.Design.Flow.Service.Debugging.Samples.SampleCategory }>;

	UploadSampleSet(context: $D.Framework.Design.Flow.Service.Edit.DataDefinitions.DataDefinitionContext, fileId: string): { UploadSampleSetResult: $D.Framework.Design.Flow.Service.Debugging.Samples.SampleCategory };

	UploadSampleSetPromise(context: $D.Framework.Design.Flow.Service.Edit.DataDefinitions.DataDefinitionContext, fileId: string): Promise<$D.Framework.Design.Flow.Service.Debugging.Samples.SampleCategory>;

	PickSampleSet(context: $D.Framework.Design.Flow.Service.Edit.DataDefinitions.DataDefinitionContext, reportId: string, successCallback: (data: { PickSampleSetResult: $D.Framework.Design.Flow.Service.Debugging.Samples.SampleCategory }) => any, errorCallback?: () => any): JQueryPromise<{ PickSampleSetResult: $D.Framework.Design.Flow.Service.Debugging.Samples.SampleCategory }>;

	PickSampleSet(context: $D.Framework.Design.Flow.Service.Edit.DataDefinitions.DataDefinitionContext, reportId: string): { PickSampleSetResult: $D.Framework.Design.Flow.Service.Debugging.Samples.SampleCategory };

	PickSampleSetPromise(context: $D.Framework.Design.Flow.Service.Edit.DataDefinitions.DataDefinitionContext, reportId: string): Promise<$D.Framework.Design.Flow.Service.Debugging.Samples.SampleCategory>;

	GetAllValidationIssues(context: $D.Framework.Design.Flow.Service.Edit.DataDefinitions.DataDefinitionContext, successCallback: (data: { GetAllValidationIssuesResult: $D.Framework.ValidationIssue[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllValidationIssuesResult: $D.Framework.ValidationIssue[] }>;

	GetAllValidationIssues(context: $D.Framework.Design.Flow.Service.Edit.DataDefinitions.DataDefinitionContext): { GetAllValidationIssuesResult: $D.Framework.ValidationIssue[] };

	GetAllValidationIssuesPromise(context: $D.Framework.Design.Flow.Service.Edit.DataDefinitions.DataDefinitionContext): Promise<$D.Framework.ValidationIssue[]>;

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
	DataDefinitionsEditService(): DataDefinitionsEditServiceStatic;
}
