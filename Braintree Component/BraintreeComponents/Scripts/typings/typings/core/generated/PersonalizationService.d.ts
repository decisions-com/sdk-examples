/// <reference path="./datatypes._base.d.ts" />

interface PersonalizationServiceStatic {

	GetFilterElements(folderId: string, pageId: string, partId: string, userScope: $D.Framework.Design.Page.Personalization.PersonalizationUserScope, successCallback: (data: { GetFilterElementsResult: $D.Framework.Design.Page.Filters.AbstractDataFilter[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetFilterElementsResult: $D.Framework.Design.Page.Filters.AbstractDataFilter[] }>;

	GetFilterElements(folderId: string, pageId: string, partId: string, userScope: $D.Framework.Design.Page.Personalization.PersonalizationUserScope): { GetFilterElementsResult: $D.Framework.Design.Page.Filters.AbstractDataFilter[] };

	GetFilterElementsPromise(folderId: string, pageId: string, partId: string, userScope: $D.Framework.Design.Page.Personalization.PersonalizationUserScope): Promise<$D.Framework.Design.Page.Filters.AbstractDataFilter[]>;

	GetFilterElementsForPage(folderId: string, pageId: string, userScope: $D.Framework.Design.Page.Personalization.PersonalizationUserScope, successCallback: (data: { GetFilterElementsForPageResult: $D.Framework.Design.Page.Filters.AbstractDataFilter[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetFilterElementsForPageResult: $D.Framework.Design.Page.Filters.AbstractDataFilter[] }>;

	GetFilterElementsForPage(folderId: string, pageId: string, userScope: $D.Framework.Design.Page.Personalization.PersonalizationUserScope): { GetFilterElementsForPageResult: $D.Framework.Design.Page.Filters.AbstractDataFilter[] };

	GetFilterElementsForPagePromise(folderId: string, pageId: string, userScope: $D.Framework.Design.Page.Personalization.PersonalizationUserScope): Promise<$D.Framework.Design.Page.Filters.AbstractDataFilter[]>;

	SaveFilterElement(folderId: string, pageId: string, partId: string, filter: $D.Framework.Design.Page.Filters.AbstractDataFilter, successCallback: (data: { SaveFilterElementResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveFilterElementResult: void }>;

	SaveFilterElement(folderId: string, pageId: string, partId: string, filter: $D.Framework.Design.Page.Filters.AbstractDataFilter): { SaveFilterElementResult: void };

	SaveFilterElementPromise(folderId: string, pageId: string, partId: string, filter: $D.Framework.Design.Page.Filters.AbstractDataFilter): Promise<void>;

	SaveFilterElementForSession(folderId: string, pageId: string, partId: string, scope: $D.Framework.Design.Page.Personalization.PersonalizationScope, filter: $D.Framework.Design.Page.Filters.AbstractDataFilter, successCallback: (data: { SaveFilterElementForSessionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveFilterElementForSessionResult: void }>;

	SaveFilterElementForSession(folderId: string, pageId: string, partId: string, scope: $D.Framework.Design.Page.Personalization.PersonalizationScope, filter: $D.Framework.Design.Page.Filters.AbstractDataFilter): { SaveFilterElementForSessionResult: void };

	SaveFilterElementForSessionPromise(folderId: string, pageId: string, partId: string, scope: $D.Framework.Design.Page.Personalization.PersonalizationScope, filter: $D.Framework.Design.Page.Filters.AbstractDataFilter): Promise<void>;

	SavePersonalization(value: $D.Framework.ServiceLayer.Services.ContextData.DataPair, folderId: string, pageId: string, scope: $D.Framework.Design.Page.Personalization.PersonalizationScope, userScope: $D.Framework.Design.Page.Personalization.PersonalizationUserScope, partId: string, successCallback: (data: { SavePersonalizationResult: $D.Framework.Design.Page.Personalization.Personalization }) => any, errorCallback?: () => any): JQueryPromise<{ SavePersonalizationResult: $D.Framework.Design.Page.Personalization.Personalization }>;

	SavePersonalization(value: $D.Framework.ServiceLayer.Services.ContextData.DataPair, folderId: string, pageId: string, scope: $D.Framework.Design.Page.Personalization.PersonalizationScope, userScope: $D.Framework.Design.Page.Personalization.PersonalizationUserScope, partId: string): { SavePersonalizationResult: $D.Framework.Design.Page.Personalization.Personalization };

	SavePersonalizationPromise(value: $D.Framework.ServiceLayer.Services.ContextData.DataPair, folderId: string, pageId: string, scope: $D.Framework.Design.Page.Personalization.PersonalizationScope, userScope: $D.Framework.Design.Page.Personalization.PersonalizationUserScope, partId: string): Promise<$D.Framework.Design.Page.Personalization.Personalization>;

	SavePersonalizations(personalizations: $D.Framework.Design.Page.Personalization.Personalization[], successCallback: (data: { SavePersonalizationsResult: $D.Framework.Design.Page.Personalization.Personalization[] }) => any, errorCallback?: () => any): JQueryPromise<{ SavePersonalizationsResult: $D.Framework.Design.Page.Personalization.Personalization[] }>;

	SavePersonalizations(personalizations: $D.Framework.Design.Page.Personalization.Personalization[]): { SavePersonalizationsResult: $D.Framework.Design.Page.Personalization.Personalization[] };

	SavePersonalizationsPromise(personalizations: $D.Framework.Design.Page.Personalization.Personalization[]): Promise<$D.Framework.Design.Page.Personalization.Personalization[]>;

	GetPersonalizations(folderId: string, pageId: string, partId: string, userScope: $D.Framework.Design.Page.Personalization.PersonalizationUserScope, successCallback: (data: { GetPersonalizationsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetPersonalizationsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	GetPersonalizations(folderId: string, pageId: string, partId: string, userScope: $D.Framework.Design.Page.Personalization.PersonalizationUserScope): { GetPersonalizationsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	GetPersonalizationsPromise(folderId: string, pageId: string, partId: string, userScope: $D.Framework.Design.Page.Personalization.PersonalizationUserScope): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	GetPersonalizationsForPage(folderId: string, pageId: string, userScope: $D.Framework.Design.Page.Personalization.PersonalizationUserScope, successCallback: (data: { GetPersonalizationsForPageResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetPersonalizationsForPageResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	GetPersonalizationsForPage(folderId: string, pageId: string, userScope: $D.Framework.Design.Page.Personalization.PersonalizationUserScope): { GetPersonalizationsForPageResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	GetPersonalizationsForPagePromise(folderId: string, pageId: string, userScope: $D.Framework.Design.Page.Personalization.PersonalizationUserScope): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	GetPagePersonalizationModel(folderId: string, pageId: string, userScope: $D.Framework.Design.Page.Personalization.PersonalizationUserScope, successCallback: (data: { GetPagePersonalizationModelResult: $D.Framework.Design.Page.Personalization.PagePersonalizationModel }) => any, errorCallback?: () => any): JQueryPromise<{ GetPagePersonalizationModelResult: $D.Framework.Design.Page.Personalization.PagePersonalizationModel }>;

	GetPagePersonalizationModel(folderId: string, pageId: string, userScope: $D.Framework.Design.Page.Personalization.PersonalizationUserScope): { GetPagePersonalizationModelResult: $D.Framework.Design.Page.Personalization.PagePersonalizationModel };

	GetPagePersonalizationModelPromise(folderId: string, pageId: string, userScope: $D.Framework.Design.Page.Personalization.PersonalizationUserScope): Promise<$D.Framework.Design.Page.Personalization.PagePersonalizationModel>;

	ClearPersonalizationValuesByArea(folderId: string, pageId: string, partId: string, scope: $D.Framework.Design.Page.Personalization.PersonalizationScope, userScope: $D.Framework.Design.Page.Personalization.PersonalizationUserScope, area: $D.Framework.Design.Page.Personalization.PersonalizationArea, successCallback: (data: { ClearPersonalizationValuesByAreaResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ClearPersonalizationValuesByAreaResult: void }>;

	ClearPersonalizationValuesByArea(folderId: string, pageId: string, partId: string, scope: $D.Framework.Design.Page.Personalization.PersonalizationScope, userScope: $D.Framework.Design.Page.Personalization.PersonalizationUserScope, area: $D.Framework.Design.Page.Personalization.PersonalizationArea): { ClearPersonalizationValuesByAreaResult: void };

	ClearPersonalizationValuesByAreaPromise(folderId: string, pageId: string, partId: string, scope: $D.Framework.Design.Page.Personalization.PersonalizationScope, userScope: $D.Framework.Design.Page.Personalization.PersonalizationUserScope, area: $D.Framework.Design.Page.Personalization.PersonalizationArea): Promise<void>;

	LoadAllForPage(folderId: string, pageId: string, successCallback: (data: { LoadAllForPageResult: $D.Framework.Design.Page.Personalization.Personalization[] }) => any, errorCallback?: () => any): JQueryPromise<{ LoadAllForPageResult: $D.Framework.Design.Page.Personalization.Personalization[] }>;

	LoadAllForPage(folderId: string, pageId: string): { LoadAllForPageResult: $D.Framework.Design.Page.Personalization.Personalization[] };

	LoadAllForPagePromise(folderId: string, pageId: string): Promise<$D.Framework.Design.Page.Personalization.Personalization[]>;

	LoadPersonalizationForScope(folderId: string, pageId: string, scope: $D.Framework.Design.Page.Personalization.PersonalizationScope, userScope: $D.Framework.Design.Page.Personalization.PersonalizationUserScope, partId: string, successCallback: (data: { LoadPersonalizationForScopeResult: $D.Framework.Design.Page.Personalization.Personalization[] }) => any, errorCallback?: () => any): JQueryPromise<{ LoadPersonalizationForScopeResult: $D.Framework.Design.Page.Personalization.Personalization[] }>;

	LoadPersonalizationForScope(folderId: string, pageId: string, scope: $D.Framework.Design.Page.Personalization.PersonalizationScope, userScope: $D.Framework.Design.Page.Personalization.PersonalizationUserScope, partId: string): { LoadPersonalizationForScopeResult: $D.Framework.Design.Page.Personalization.Personalization[] };

	LoadPersonalizationForScopePromise(folderId: string, pageId: string, scope: $D.Framework.Design.Page.Personalization.PersonalizationScope, userScope: $D.Framework.Design.Page.Personalization.PersonalizationUserScope, partId: string): Promise<$D.Framework.Design.Page.Personalization.Personalization[]>;

	ClearPersonalizationByResetOption(chartResetOption: $D.Framework.Design.Page.Personalization.ChartResetOptions, partId: string, pageId: string, successCallback: (data: { ClearPersonalizationByResetOptionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ClearPersonalizationByResetOptionResult: void }>;

	ClearPersonalizationByResetOption(chartResetOption: $D.Framework.Design.Page.Personalization.ChartResetOptions, partId: string, pageId: string): { ClearPersonalizationByResetOptionResult: void };

	ClearPersonalizationByResetOptionPromise(chartResetOption: $D.Framework.Design.Page.Personalization.ChartResetOptions, partId: string, pageId: string): Promise<void>;
}

interface ServicesStatic {
	PersonalizationService(): PersonalizationServiceStatic;
}
