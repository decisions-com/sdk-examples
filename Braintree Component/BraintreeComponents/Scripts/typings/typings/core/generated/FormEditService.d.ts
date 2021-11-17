/// <reference path="./datatypes._base.d.ts" />

interface FormEditServiceStatic {

	GetToolboxCategories(nodes: string[], folderId: string, elementType: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType, successCallback: (data: { GetToolboxCategoriesResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetToolboxCategoriesResult: string[] }>;

	GetToolboxCategories(nodes: string[], folderId: string, elementType: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType): { GetToolboxCategoriesResult: string[] };

	GetToolboxCategoriesPromise(nodes: string[], folderId: string, elementType: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType): Promise<string[]>;

	GetToolboxInformation(nodes: string[], folderId: string, elementType: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType, successCallback: (data: { GetToolboxInformationResult: $D.Framework.Design.Form.FormToolboxInformation[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetToolboxInformationResult: $D.Framework.Design.Form.FormToolboxInformation[] }>;

	GetToolboxInformation(nodes: string[], folderId: string, elementType: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType): { GetToolboxInformationResult: $D.Framework.Design.Form.FormToolboxInformation[] };

	GetToolboxInformationPromise(nodes: string[], folderId: string, elementType: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType): Promise<$D.Framework.Design.Form.FormToolboxInformation[]>;

	SearchToolboxInformation(searchString: string, maxRecords: number, currentFolderId: string, elementType: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType, successCallback: (data: { SearchToolboxInformationResult: $D.Framework.Design.Form.FormToolboxInformation[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchToolboxInformationResult: $D.Framework.Design.Form.FormToolboxInformation[] }>;

	SearchToolboxInformation(searchString: string, maxRecords: number, currentFolderId: string, elementType: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType): { SearchToolboxInformationResult: $D.Framework.Design.Form.FormToolboxInformation[] };

	SearchToolboxInformationPromise(searchString: string, maxRecords: number, currentFolderId: string, elementType: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType): Promise<$D.Framework.Design.Form.FormToolboxInformation[]>;

	GetToolboxFavoriteSteps(formDesignerSessionInfoId: string, successCallback: (data: { GetToolboxFavoriteStepsResult: $D.Framework.Design.Form.FormToolboxInformation[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetToolboxFavoriteStepsResult: $D.Framework.Design.Form.FormToolboxInformation[] }>;

	GetToolboxFavoriteSteps(formDesignerSessionInfoId: string): { GetToolboxFavoriteStepsResult: $D.Framework.Design.Form.FormToolboxInformation[] };

	GetToolboxFavoriteStepsPromise(formDesignerSessionInfoId: string): Promise<$D.Framework.Design.Form.FormToolboxInformation[]>;

	GetToolboxRecentSteps(formDesignerSessionInfoId: string, limit: number, successCallback: (data: { GetToolboxRecentStepsResult: $D.Framework.Design.Form.FormToolboxInformation[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetToolboxRecentStepsResult: $D.Framework.Design.Form.FormToolboxInformation[] }>;

	GetToolboxRecentSteps(formDesignerSessionInfoId: string, limit: number): { GetToolboxRecentStepsResult: $D.Framework.Design.Form.FormToolboxInformation[] };

	GetToolboxRecentStepsPromise(formDesignerSessionInfoId: string, limit: number): Promise<$D.Framework.Design.Form.FormToolboxInformation[]>;

	GetEditObjectContext(dataPair: $D.Framework.ServiceLayer.Services.ContextData.DataPair, successCallback: (data: { GetEditObjectContextResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetEditObjectContextResult: string }>;

	GetEditObjectContext(dataPair: $D.Framework.ServiceLayer.Services.ContextData.DataPair): { GetEditObjectContextResult: string };

	GetEditObjectContextPromise(dataPair: $D.Framework.ServiceLayer.Services.ContextData.DataPair): Promise<string>;

	GetEditedObject(contextProviderRegistrationId: string, successCallback: (data: { GetEditedObjectResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair }) => any, errorCallback?: () => any): JQueryPromise<{ GetEditedObjectResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair }>;

	GetEditedObject(contextProviderRegistrationId: string): { GetEditedObjectResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair };

	GetEditedObjectPromise(contextProviderRegistrationId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair>;

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
	FormEditService(): FormEditServiceStatic;
}
