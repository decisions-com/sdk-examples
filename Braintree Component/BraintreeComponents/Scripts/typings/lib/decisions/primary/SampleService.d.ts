/// <reference path="./datatypes._base.d.ts" />

interface SampleServiceStatic {

	GetSampleEntityById(sampleId: string, successCallback: (data: { GetSampleEntityByIdResult: $D.Framework.Design.Flow.Service.Debugging.Samples.SampleForTree }) => any, errorCallback?: () => any): JQueryPromise<{ GetSampleEntityByIdResult: $D.Framework.Design.Flow.Service.Debugging.Samples.SampleForTree }>;

	GetSampleEntityById(sampleId: string): { GetSampleEntityByIdResult: $D.Framework.Design.Flow.Service.Debugging.Samples.SampleForTree };

	GetSampleEntityByIdPromise(sampleId: string): Promise<$D.Framework.Design.Flow.Service.Debugging.Samples.SampleForTree>;

	GetSamples(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, category: string, limitCount: any, pageIndex: number, successCallback: (data: { GetSamplesResult: $D.Framework.Design.Flow.Service.Debugging.Samples.SampleForTree[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetSamplesResult: $D.Framework.Design.Flow.Service.Debugging.Samples.SampleForTree[] }>;

	GetSamples(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, category: string, limitCount: any, pageIndex: number): { GetSamplesResult: $D.Framework.Design.Flow.Service.Debugging.Samples.SampleForTree[] };

	GetSamplesPromise(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, category: string, limitCount: any, pageIndex: number): Promise<$D.Framework.Design.Flow.Service.Debugging.Samples.SampleForTree[]>;

	SearchSamples(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, searchCriteria: string, successCallback: (data: { SearchSamplesResult: $D.Framework.Design.Flow.Service.Debugging.Samples.SampleForTree[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchSamplesResult: $D.Framework.Design.Flow.Service.Debugging.Samples.SampleForTree[] }>;

	SearchSamples(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, searchCriteria: string): { SearchSamplesResult: $D.Framework.Design.Flow.Service.Debugging.Samples.SampleForTree[] };

	SearchSamplesPromise(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, searchCriteria: string): Promise<$D.Framework.Design.Flow.Service.Debugging.Samples.SampleForTree[]>;

	RegisterContextToAddSample(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, inputsContextId: string, successCallback: (data: { RegisterContextToAddSampleResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ RegisterContextToAddSampleResult: string }>;

	RegisterContextToAddSample(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, inputsContextId: string): { RegisterContextToAddSampleResult: string };

	RegisterContextToAddSamplePromise(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, inputsContextId: string): Promise<string>;

	RegisterContextToEditSample(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, sampleId: string, successCallback: (data: { RegisterContextToEditSampleResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ RegisterContextToEditSampleResult: string }>;

	RegisterContextToEditSample(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, sampleId: string): { RegisterContextToEditSampleResult: string };

	RegisterContextToEditSamplePromise(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, sampleId: string): Promise<string>;

	AddSampleFromContextId(contextId: string, successCallback: (data: { AddSampleFromContextIdResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddSampleFromContextIdResult: string }>;

	AddSampleFromContextId(contextId: string): { AddSampleFromContextIdResult: string };

	AddSampleFromContextIdPromise(contextId: string): Promise<string>;

	SaveSampleFromContextId(sampleId: string, contextId: string, successCallback: (data: { SaveSampleFromContextIdResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveSampleFromContextIdResult: void }>;

	SaveSampleFromContextId(sampleId: string, contextId: string): { SaveSampleFromContextIdResult: void };

	SaveSampleFromContextIdPromise(sampleId: string, contextId: string): Promise<void>;

	DeleteSample(sampleId: string, successCallback: (data: { DeleteSampleResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteSampleResult: void }>;

	DeleteSample(sampleId: string): { DeleteSampleResult: void };

	DeleteSamplePromise(sampleId: string): Promise<void>;

	UnRegisterContextProvider(contextId: string, successCallback: (data: { UnRegisterContextProviderResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UnRegisterContextProviderResult: void }>;

	UnRegisterContextProvider(contextId: string): { UnRegisterContextProviderResult: void };

	UnRegisterContextProviderPromise(contextId: string): Promise<void>;

	GetSampleCategories(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, successCallback: (data: { GetSampleCategoriesResult: $D.Framework.Design.Flow.Service.Debugging.Samples.SampleCategory[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetSampleCategoriesResult: $D.Framework.Design.Flow.Service.Debugging.Samples.SampleCategory[] }>;

	GetSampleCategories(mappingContext: $D.Framework.Design.Flow.Service.MappingContext): { GetSampleCategoriesResult: $D.Framework.Design.Flow.Service.Debugging.Samples.SampleCategory[] };

	GetSampleCategoriesPromise(mappingContext: $D.Framework.Design.Flow.Service.MappingContext): Promise<$D.Framework.Design.Flow.Service.Debugging.Samples.SampleCategory[]>;

	GetSampleCategory(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, sampleId: string, successCallback: (data: { GetSampleCategoryResult: $D.Framework.Design.Flow.Service.Debugging.Samples.SampleCategory }) => any, errorCallback?: () => any): JQueryPromise<{ GetSampleCategoryResult: $D.Framework.Design.Flow.Service.Debugging.Samples.SampleCategory }>;

	GetSampleCategory(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, sampleId: string): { GetSampleCategoryResult: $D.Framework.Design.Flow.Service.Debugging.Samples.SampleCategory };

	GetSampleCategoryPromise(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, sampleId: string): Promise<$D.Framework.Design.Flow.Service.Debugging.Samples.SampleCategory>;

	EditSampleCategory(context: $D.Framework.Design.Flow.Service.MappingContext, categoryId: string, successCallback: (data: { EditSampleCategoryResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ EditSampleCategoryResult: void }>;

	EditSampleCategory(context: $D.Framework.Design.Flow.Service.MappingContext, categoryId: string): { EditSampleCategoryResult: void };

	EditSampleCategoryPromise(context: $D.Framework.Design.Flow.Service.MappingContext, categoryId: string): Promise<void>;

	RemoveSampleCategory(context: $D.Framework.Design.Flow.Service.MappingContext, categoryId: string, successCallback: (data: { RemoveSampleCategoryResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveSampleCategoryResult: void }>;

	RemoveSampleCategory(context: $D.Framework.Design.Flow.Service.MappingContext, categoryId: string): { RemoveSampleCategoryResult: void };

	RemoveSampleCategoryPromise(context: $D.Framework.Design.Flow.Service.MappingContext, categoryId: string): Promise<void>;

	SetSampleSetProviderSettings(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, providerId: string, settings: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], successCallback: (data: { SetSampleSetProviderSettingsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetSampleSetProviderSettingsResult: void }>;

	SetSampleSetProviderSettings(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, providerId: string, settings: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): { SetSampleSetProviderSettingsResult: void };

	SetSampleSetProviderSettingsPromise(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, providerId: string, settings: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): Promise<void>;

	AddInputToDataHost(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, inputData: string, successCallback: (data: { AddInputToDataHostResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddInputToDataHostResult: void }>;

	AddInputToDataHost(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, inputData: string): { AddInputToDataHostResult: void };

	AddInputToDataHostPromise(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, inputData: string): Promise<void>;

	SyncAllData(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, successCallback: (data: { SyncAllDataResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SyncAllDataResult: void }>;

	SyncAllData(mappingContext: $D.Framework.Design.Flow.Service.MappingContext): { SyncAllDataResult: void };

	SyncAllDataPromise(mappingContext: $D.Framework.Design.Flow.Service.MappingContext): Promise<void>;

	AddInputToSampleSet(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, inputName: string, successCallback: (data: { AddInputToSampleSetResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddInputToSampleSetResult: void }>;

	AddInputToSampleSet(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, inputName: string): { AddInputToSampleSetResult: void };

	AddInputToSampleSetPromise(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, inputName: string): Promise<void>;

	Exists(id: string, successCallback: (data: { ExistsResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ ExistsResult: boolean }>;

	Exists(id: string): { ExistsResult: boolean };

	ExistsPromise(id: string): Promise<boolean>;

	GetByFolderID(folderID: string, successCallback: (data: { GetByFolderIDResult: any[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByFolderIDResult: any[] }>;

	GetByFolderID(folderID: string): { GetByFolderIDResult: any[] };

	GetByFolderIDPromise(folderID: string): Promise<any[]>;

	GetByIDs(ids: string[], successCallback: (data: { GetByIDsResult: any[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDsResult: any[] }>;

	GetByIDs(ids: string[]): { GetByIDsResult: any[] };

	GetByIDsPromise(ids: string[]): Promise<any[]>;

	GetByID(id: string, successCallback: (data: { GetByIDResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDResult: any }>;

	GetByID(id: string): { GetByIDResult: any };

	GetByIDPromise(id: string): Promise<any>;

	GetAll(successCallback: (data: { GetAllResult: any[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllResult: any[] }>;

	GetAll(): { GetAllResult: any[] };

	GetAllPromise(): Promise<any[]>;

	Save(entity: any, successCallback: (data: { SaveResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveResult: void }>;

	Save(entity: any): { SaveResult: void };

	SavePromise(entity: any): Promise<void>;

	Delete(id: string, successCallback: (data: { DeleteResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteResult: void }>;

	Delete(id: string): { DeleteResult: void };

	DeletePromise(id: string): Promise<void>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType, successCallback: (data: { SearchResult: any[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchResult: any[] }>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): { SearchResult: any[] };

	SearchPromise(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): Promise<any[]>;

	SaveList(entities: any[], successCallback: (data: { SaveListResult: any[] }) => any, errorCallback?: () => any): JQueryPromise<{ SaveListResult: any[] }>;

	SaveList(entities: any[]): { SaveListResult: any[] };

	SaveListPromise(entities: any[]): Promise<any[]>;

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
	SampleService(): SampleServiceStatic;
}
