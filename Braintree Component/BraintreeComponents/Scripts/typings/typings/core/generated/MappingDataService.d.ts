/// <reference path="./datatypes._base.d.ts" />

interface MappingDataServiceStatic {

	SetMapping(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, editingContext: string, path: string[], mappingType: string, value: string, successCallback: (data: { SetMappingResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetMappingResult: void }>;

	SetMapping(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, editingContext: string, path: string[], mappingType: string, value: string): { SetMappingResult: void };

	SetMappingPromise(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, editingContext: string, path: string[], mappingType: string, value: string): Promise<void>;

	GetSuggestions(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, searchString: string, maxLevels: number, successCallback: (data: { GetSuggestionsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetSuggestionsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	GetSuggestions(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, searchString: string, maxLevels: number): { GetSuggestionsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	GetSuggestionsPromise(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, searchString: string, maxLevels: number): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	AddInput(param: $D.Framework.Design.Flow.Service.Edit.Mapping.AddInputParams, successCallback: (data: { AddInputResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddInputResult: void }>;

	AddInput(param: $D.Framework.Design.Flow.Service.Edit.Mapping.AddInputParams): { AddInputResult: void };

	AddInputPromise(param: $D.Framework.Design.Flow.Service.Edit.Mapping.AddInputParams): Promise<void>;
}

interface ServicesStatic {
	MappingDataService(): MappingDataServiceStatic;
}
