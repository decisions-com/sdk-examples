/// <reference path="./datatypes._base.d.ts" />

interface ChartServiceStatic {

	GetConfiguration(chartId: string, pageId: string, designerSessionId: string, successCallback: (data: { GetConfigurationResult: $D.Framework.Design.Charts.ChartConfiguration }) => any, errorCallback?: () => any): JQueryPromise<{ GetConfigurationResult: $D.Framework.Design.Charts.ChartConfiguration }>;

	GetConfiguration(chartId: string, pageId: string, designerSessionId: string): { GetConfigurationResult: $D.Framework.Design.Charts.ChartConfiguration };

	GetConfigurationPromise(chartId: string, pageId: string, designerSessionId: string): Promise<$D.Framework.Design.Charts.ChartConfiguration>;

	SetConfiguration(chartId: string, config: $D.Framework.Design.Charts.ChartConfiguration, successCallback: (data: { SetConfigurationResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetConfigurationResult: void }>;

	SetConfiguration(chartId: string, config: $D.Framework.Design.Charts.ChartConfiguration): { SetConfigurationResult: void };

	SetConfigurationPromise(chartId: string, config: $D.Framework.Design.Charts.ChartConfiguration): Promise<void>;

	GetRawData(chartId: string, pageId: string, folderId: string, successCallback: (data: { GetRawDataResult: $D.Framework.Design.Charts.ChartRenderData[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetRawDataResult: $D.Framework.Design.Charts.ChartRenderData[] }>;

	GetRawData(chartId: string, pageId: string, folderId: string): { GetRawDataResult: $D.Framework.Design.Charts.ChartRenderData[] };

	GetRawDataPromise(chartId: string, pageId: string, folderId: string): Promise<$D.Framework.Design.Charts.ChartRenderData[]>;

	GetFilteredData(pageId: string, chartId: string, folderId: string, personalization: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], path: string[], designerSessionId: string, successCallback: (data: { GetFilteredDataResult: $D.Framework.Design.Charts.ChartRenderData[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetFilteredDataResult: $D.Framework.Design.Charts.ChartRenderData[] }>;

	GetFilteredData(pageId: string, chartId: string, folderId: string, personalization: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], path: string[], designerSessionId: string): { GetFilteredDataResult: $D.Framework.Design.Charts.ChartRenderData[] };

	GetFilteredDataPromise(pageId: string, chartId: string, folderId: string, personalization: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], path: string[], designerSessionId: string): Promise<$D.Framework.Design.Charts.ChartRenderData[]>;

	GetFullModel(chartId: string, pageId: string, folderId: string, personalization: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], designerSessionId: string, successCallback: (data: { GetFullModelResult: $D.Framework.Design.Charts.ChartModel }) => any, errorCallback?: () => any): JQueryPromise<{ GetFullModelResult: $D.Framework.Design.Charts.ChartModel }>;

	GetFullModel(chartId: string, pageId: string, folderId: string, personalization: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], designerSessionId: string): { GetFullModelResult: $D.Framework.Design.Charts.ChartModel };

	GetFullModelPromise(chartId: string, pageId: string, folderId: string, personalization: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], designerSessionId: string): Promise<$D.Framework.Design.Charts.ChartModel>;

	GetFullModelInternal(pageId: string, part: any, folderId: string, personalization: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], designerSessionId: string, successCallback: (data: { GetFullModelInternalResult: $D.Framework.Design.Charts.ChartModel }) => any, errorCallback?: () => any): JQueryPromise<{ GetFullModelInternalResult: $D.Framework.Design.Charts.ChartModel }>;

	GetFullModelInternal(pageId: string, part: any, folderId: string, personalization: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], designerSessionId: string): { GetFullModelInternalResult: $D.Framework.Design.Charts.ChartModel };

	GetFullModelInternalPromise(pageId: string, part: any, folderId: string, personalization: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], designerSessionId: string): Promise<$D.Framework.Design.Charts.ChartModel>;

	UpdateConfiguration(chartId: string, configContextId: string, forAll: boolean, successCallback: (data: { UpdateConfigurationResult: $D.Framework.Design.Charts.ChartConfiguration }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateConfigurationResult: $D.Framework.Design.Charts.ChartConfiguration }>;

	UpdateConfiguration(chartId: string, configContextId: string, forAll: boolean): { UpdateConfigurationResult: $D.Framework.Design.Charts.ChartConfiguration };

	UpdateConfigurationPromise(chartId: string, configContextId: string, forAll: boolean): Promise<$D.Framework.Design.Charts.ChartConfiguration>;

	UpdateDataSourceControls(chartId: string, dataFilterContextId: string, forAll: boolean, successCallback: (data: { UpdateDataSourceControlsResult: $D.Framework.Design.Charts.ChartRenderData[] }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateDataSourceControlsResult: $D.Framework.Design.Charts.ChartRenderData[] }>;

	UpdateDataSourceControls(chartId: string, dataFilterContextId: string, forAll: boolean): { UpdateDataSourceControlsResult: $D.Framework.Design.Charts.ChartRenderData[] };

	UpdateDataSourceControlsPromise(chartId: string, dataFilterContextId: string, forAll: boolean): Promise<$D.Framework.Design.Charts.ChartRenderData[]>;

	ResetConfiguration(chartId: string, configContextId: string, successCallback: (data: { ResetConfigurationResult: $D.Framework.Design.Charts.ChartConfiguration }) => any, errorCallback?: () => any): JQueryPromise<{ ResetConfigurationResult: $D.Framework.Design.Charts.ChartConfiguration }>;

	ResetConfiguration(chartId: string, configContextId: string): { ResetConfigurationResult: $D.Framework.Design.Charts.ChartConfiguration };

	ResetConfigurationPromise(chartId: string, configContextId: string): Promise<$D.Framework.Design.Charts.ChartConfiguration>;

	RestDataSourceControls(chartId: string, dataFilterContextId: string, successCallback: (data: { RestDataSourceControlsResult: $D.Framework.Design.Charts.ChartRenderData[] }) => any, errorCallback?: () => any): JQueryPromise<{ RestDataSourceControlsResult: $D.Framework.Design.Charts.ChartRenderData[] }>;

	RestDataSourceControls(chartId: string, dataFilterContextId: string): { RestDataSourceControlsResult: $D.Framework.Design.Charts.ChartRenderData[] };

	RestDataSourceControlsPromise(chartId: string, dataFilterContextId: string): Promise<$D.Framework.Design.Charts.ChartRenderData[]>;

	GetEditContext(id: string, folderId: string, personalization: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], successCallback: (data: { GetEditContextResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetEditContextResult: string }>;

	GetEditContext(id: string, folderId: string, personalization: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): { GetEditContextResult: string };

	GetEditContextPromise(id: string, folderId: string, personalization: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): Promise<string>;

	GetConfigEditContext(id: string, pageId: string, folderId: string, personalization: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], successCallback: (data: { GetConfigEditContextResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetConfigEditContextResult: string }>;

	GetConfigEditContext(id: string, pageId: string, folderId: string, personalization: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): { GetConfigEditContextResult: string };

	GetConfigEditContextPromise(id: string, pageId: string, folderId: string, personalization: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): Promise<string>;

	GetDataEditContext(id: string, pageId: string, folderId: string, personalization: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], successCallback: (data: { GetDataEditContextResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetDataEditContextResult: string }>;

	GetDataEditContext(id: string, pageId: string, folderId: string, personalization: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): { GetDataEditContextResult: string };

	GetDataEditContextPromise(id: string, pageId: string, folderId: string, personalization: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): Promise<string>;

	FilterEditComplete(chartId: string, pageId: string, editingContextId: string, editCompleteType: $D.Framework.Design.Properties.EditCompleteType, successCallback: (data: { FilterEditCompleteResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ FilterEditCompleteResult: void }>;

	FilterEditComplete(chartId: string, pageId: string, editingContextId: string, editCompleteType: $D.Framework.Design.Properties.EditCompleteType): { FilterEditCompleteResult: void };

	FilterEditCompletePromise(chartId: string, pageId: string, editingContextId: string, editCompleteType: $D.Framework.Design.Properties.EditCompleteType): Promise<void>;

	GetReportPartChartData(reportContextId: string, useMatrixAsSource: boolean, fieldsDefinitions: $D.Framework.Design.Report.SubcalcFields.SubCalcFieldDefinition[], path: string[], groupOverX: number, colorsForLabels: any, sorting: $D.Framework.Design.Charts.ChartSorting, takeFirstCount: number, successCallback: (data: { GetReportPartChartDataResult: $D.Framework.Design.Charts.ChartRenderData[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetReportPartChartDataResult: $D.Framework.Design.Charts.ChartRenderData[] }>;

	GetReportPartChartData(reportContextId: string, useMatrixAsSource: boolean, fieldsDefinitions: $D.Framework.Design.Report.SubcalcFields.SubCalcFieldDefinition[], path: string[], groupOverX: number, colorsForLabels: any, sorting: $D.Framework.Design.Charts.ChartSorting, takeFirstCount: number): { GetReportPartChartDataResult: $D.Framework.Design.Charts.ChartRenderData[] };

	GetReportPartChartDataPromise(reportContextId: string, useMatrixAsSource: boolean, fieldsDefinitions: $D.Framework.Design.Report.SubcalcFields.SubCalcFieldDefinition[], path: string[], groupOverX: number, colorsForLabels: any, sorting: $D.Framework.Design.Charts.ChartSorting, takeFirstCount: number): Promise<$D.Framework.Design.Charts.ChartRenderData[]>;

	ConfigurationEditComplete(editingContextId: string, editCompleteType: $D.Framework.Design.Properties.EditCompleteType, chartId: string, pageId: string, userScope: $D.Framework.Design.Page.Personalization.PersonalizationUserScope, successCallback: (data: { ConfigurationEditCompleteResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ConfigurationEditCompleteResult: void }>;

	ConfigurationEditComplete(editingContextId: string, editCompleteType: $D.Framework.Design.Properties.EditCompleteType, chartId: string, pageId: string, userScope: $D.Framework.Design.Page.Personalization.PersonalizationUserScope): { ConfigurationEditCompleteResult: void };

	ConfigurationEditCompletePromise(editingContextId: string, editCompleteType: $D.Framework.Design.Properties.EditCompleteType, chartId: string, pageId: string, userScope: $D.Framework.Design.Page.Personalization.PersonalizationUserScope): Promise<void>;

	ResetAndLoadChartPersonalization(personalization: $D.Framework.Design.Page.Personalization.Personalization, successCallback: (data: { ResetAndLoadChartPersonalizationResult: $D.Framework.Design.Page.Personalization.Personalization[] }) => any, errorCallback?: () => any): JQueryPromise<{ ResetAndLoadChartPersonalizationResult: $D.Framework.Design.Page.Personalization.Personalization[] }>;

	ResetAndLoadChartPersonalization(personalization: $D.Framework.Design.Page.Personalization.Personalization): { ResetAndLoadChartPersonalizationResult: $D.Framework.Design.Page.Personalization.Personalization[] };

	ResetAndLoadChartPersonalizationPromise(personalization: $D.Framework.Design.Page.Personalization.Personalization): Promise<$D.Framework.Design.Page.Personalization.Personalization[]>;
}

interface ServicesStatic {
	ChartService(): ChartServiceStatic;
}
