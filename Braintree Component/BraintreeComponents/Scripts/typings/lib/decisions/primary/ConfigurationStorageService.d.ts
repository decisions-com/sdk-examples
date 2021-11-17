/// <reference path="./datatypes._base.d.ts" />

interface ConfigurationStorageServiceStatic {

	GetNewRegistrationCategories(folderId: string, actionKey: string, successCallback: (data: { GetNewRegistrationCategoriesResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.NewRegistrationFactory[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetNewRegistrationCategoriesResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.NewRegistrationFactory[] }>;

	GetNewRegistrationCategories(folderId: string, actionKey: string): { GetNewRegistrationCategoriesResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.NewRegistrationFactory[] };

	GetNewRegistrationCategoriesPromise(folderId: string, actionKey: string): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.NewRegistrationFactory[]>;

	GetNewRegistrationItems(folderId: string, actionKey: string, categoryKey: string, successCallback: (data: { GetNewRegistrationItemsResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.NewRegistrationItem[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetNewRegistrationItemsResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.NewRegistrationItem[] }>;

	GetNewRegistrationItems(folderId: string, actionKey: string, categoryKey: string): { GetNewRegistrationItemsResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.NewRegistrationItem[] };

	GetNewRegistrationItemsPromise(folderId: string, actionKey: string, categoryKey: string): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.NewRegistrationItem[]>;

	GetNewRegistrationItemsForElementType(folderId: string, elementType: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType, behaviorTypeName: string, successCallback: (data: { GetNewRegistrationItemsForElementTypeResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.NewRegistrationItem[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetNewRegistrationItemsForElementTypeResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.NewRegistrationItem[] }>;

	GetNewRegistrationItemsForElementType(folderId: string, elementType: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType, behaviorTypeName: string): { GetNewRegistrationItemsForElementTypeResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.NewRegistrationItem[] };

	GetNewRegistrationItemsForElementTypePromise(folderId: string, elementType: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType, behaviorTypeName: string): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.NewRegistrationItem[]>;

	CreateNewRegistrationItemForElementType(folderId: string, elementType: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType, itemId: string, providedName: string, successCallback: (data: { CreateNewRegistrationItemForElementTypeResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.NewRegistrationResult }) => any, errorCallback?: () => any): JQueryPromise<{ CreateNewRegistrationItemForElementTypeResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.NewRegistrationResult }>;

	CreateNewRegistrationItemForElementType(folderId: string, elementType: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType, itemId: string, providedName: string): { CreateNewRegistrationItemForElementTypeResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.NewRegistrationResult };

	CreateNewRegistrationItemForElementTypePromise(folderId: string, elementType: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType, itemId: string, providedName: string): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.NewRegistrationResult>;

	GetNewRegistrationItemIssues(elementName: string, successCallback: (data: { GetNewRegistrationItemIssuesResult: $D.Framework.ValidationIssue[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetNewRegistrationItemIssuesResult: $D.Framework.ValidationIssue[] }>;

	GetNewRegistrationItemIssues(elementName: string): { GetNewRegistrationItemIssuesResult: $D.Framework.ValidationIssue[] };

	GetNewRegistrationItemIssuesPromise(elementName: string): Promise<$D.Framework.ValidationIssue[]>;

	CreateNewRegistration(folderId: string, actionKey: string, categoryKey: string, itemId: string, providedName: string, successCallback: (data: { CreateNewRegistrationResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.NewRegistrationResult }) => any, errorCallback?: () => any): JQueryPromise<{ CreateNewRegistrationResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.NewRegistrationResult }>;

	CreateNewRegistration(folderId: string, actionKey: string, categoryKey: string, itemId: string, providedName: string): { CreateNewRegistrationResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.NewRegistrationResult };

	CreateNewRegistrationPromise(folderId: string, actionKey: string, categoryKey: string, itemId: string, providedName: string): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.NewRegistrationResult>;

	AddFavorite(templateId: string, templateName: string, successCallback: (data: { AddFavoriteResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddFavoriteResult: void }>;

	AddFavorite(templateId: string, templateName: string): { AddFavoriteResult: void };

	AddFavoritePromise(templateId: string, templateName: string): Promise<void>;

	RemoveFavorite(templateId: string, successCallback: (data: { RemoveFavoriteResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveFavoriteResult: void }>;

	RemoveFavorite(templateId: string): { RemoveFavoriteResult: void };

	RemoveFavoritePromise(templateId: string): Promise<void>;

	FindConfigurations(attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[], successCallback: (data: { FindConfigurationsResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] }) => any, errorCallback?: () => any): JQueryPromise<{ FindConfigurationsResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] }>;

	FindConfigurations(attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[]): { FindConfigurationsResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] };

	FindConfigurationsPromise(attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[]): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[]>;

	FindConfigurationsByBehaviour(behaviourType: string, successCallback: (data: { FindConfigurationsByBehaviourResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] }) => any, errorCallback?: () => any): JQueryPromise<{ FindConfigurationsByBehaviourResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] }>;

	FindConfigurationsByBehaviour(behaviourType: string): { FindConfigurationsByBehaviourResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] };

	FindConfigurationsByBehaviourPromise(behaviourType: string): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[]>;

	FindConfigurationsInFolder(folderID: string, attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[], successCallback: (data: { FindConfigurationsInFolderResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] }) => any, errorCallback?: () => any): JQueryPromise<{ FindConfigurationsInFolderResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] }>;

	FindConfigurationsInFolder(folderID: string, attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[]): { FindConfigurationsInFolderResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] };

	FindConfigurationsInFolderPromise(folderID: string, attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[]): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[]>;

	FindConfigurationsInFolderAndSubFolders(folderID: string, attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[], successCallback: (data: { FindConfigurationsInFolderAndSubFoldersResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] }) => any, errorCallback?: () => any): JQueryPromise<{ FindConfigurationsInFolderAndSubFoldersResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] }>;

	FindConfigurationsInFolderAndSubFolders(folderID: string, attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[]): { FindConfigurationsInFolderAndSubFoldersResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] };

	FindConfigurationsInFolderAndSubFoldersPromise(folderID: string, attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[]): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[]>;

	FindConfigurationsInFolderByBehaviorType(folderID: string, inputData: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementDataQueryDefinition[], attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[], fetchOnlyValids: boolean, behaviourType: $D.Framework.Design.Flow.Mapping.DecisionsType, successCallback: (data: { FindConfigurationsInFolderByBehaviorTypeResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] }) => any, errorCallback?: () => any): JQueryPromise<{ FindConfigurationsInFolderByBehaviorTypeResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] }>;

	FindConfigurationsInFolderByBehaviorType(folderID: string, inputData: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementDataQueryDefinition[], attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[], fetchOnlyValids: boolean, behaviourType: $D.Framework.Design.Flow.Mapping.DecisionsType): { FindConfigurationsInFolderByBehaviorTypeResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] };

	FindConfigurationsInFolderByBehaviorTypePromise(folderID: string, inputData: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementDataQueryDefinition[], attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[], fetchOnlyValids: boolean, behaviourType: $D.Framework.Design.Flow.Mapping.DecisionsType): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[]>;

	FindConfigurationsInFolderByQuery(folderID: string, filter: $D.Framework.ServiceLayer.Services.ConfigurationStorage.BaseElementRegistrationFilter, successCallback: (data: { FindConfigurationsInFolderByQueryResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] }) => any, errorCallback?: () => any): JQueryPromise<{ FindConfigurationsInFolderByQueryResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] }>;

	FindConfigurationsInFolderByQuery(folderID: string, filter: $D.Framework.ServiceLayer.Services.ConfigurationStorage.BaseElementRegistrationFilter): { FindConfigurationsInFolderByQueryResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] };

	FindConfigurationsInFolderByQueryPromise(folderID: string, filter: $D.Framework.ServiceLayer.Services.ConfigurationStorage.BaseElementRegistrationFilter): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[]>;

	FindConfigurationsInFolderByName(folderID: string, name: string, successCallback: (data: { FindConfigurationsInFolderByNameResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] }) => any, errorCallback?: () => any): JQueryPromise<{ FindConfigurationsInFolderByNameResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] }>;

	FindConfigurationsInFolderByName(folderID: string, name: string): { FindConfigurationsInFolderByNameResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] };

	FindConfigurationsInFolderByNamePromise(folderID: string, name: string): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[]>;

	FindConfigurationInFolderByNameAndClassName(folderID: string, name: string, className: string, elementType: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType, successCallback: (data: { FindConfigurationInFolderByNameAndClassNameResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration }) => any, errorCallback?: () => any): JQueryPromise<{ FindConfigurationInFolderByNameAndClassNameResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration }>;

	FindConfigurationInFolderByNameAndClassName(folderID: string, name: string, className: string, elementType: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType): { FindConfigurationInFolderByNameAndClassNameResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration };

	FindConfigurationInFolderByNameAndClassNamePromise(folderID: string, name: string, className: string, elementType: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration>;

	StoreElementUsageDatas(elementRegistrationId: string, elementRegistrationUsages: $D.Framework.Design.ElementUsageData[], successCallback: (data: { StoreElementUsageDatasResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ StoreElementUsageDatasResult: void }>;

	StoreElementUsageDatas(elementRegistrationId: string, elementRegistrationUsages: $D.Framework.Design.ElementUsageData[]): { StoreElementUsageDatasResult: void };

	StoreElementUsageDatasPromise(elementRegistrationId: string, elementRegistrationUsages: $D.Framework.Design.ElementUsageData[]): Promise<void>;

	SearchConfigurations(searchText: string, attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[], successCallback: (data: { SearchConfigurationsResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchConfigurationsResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] }>;

	SearchConfigurations(searchText: string, attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[]): { SearchConfigurationsResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] };

	SearchConfigurationsPromise(searchText: string, attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[]): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[]>;

	SearchConfigurationsByQuery(filter: $D.Framework.ServiceLayer.Services.ConfigurationStorage.BaseElementRegistrationFilter, successCallback: (data: { SearchConfigurationsByQueryResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchConfigurationsByQueryResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] }>;

	SearchConfigurationsByQuery(filter: $D.Framework.ServiceLayer.Services.ConfigurationStorage.BaseElementRegistrationFilter): { SearchConfigurationsByQueryResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] };

	SearchConfigurationsByQueryPromise(filter: $D.Framework.ServiceLayer.Services.ConfigurationStorage.BaseElementRegistrationFilter): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[]>;

	FindConfigurationsByClassName(className: string, attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[], successCallback: (data: { FindConfigurationsByClassNameResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] }) => any, errorCallback?: () => any): JQueryPromise<{ FindConfigurationsByClassNameResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] }>;

	FindConfigurationsByClassName(className: string, attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[]): { FindConfigurationsByClassNameResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] };

	FindConfigurationsByClassNamePromise(className: string, attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[]): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[]>;

	FindSubFoldersWithConfigurationsByQuery(folderID: string, filter: $D.Framework.ServiceLayer.Services.ConfigurationStorage.BaseElementRegistrationFilter, successCallback: (data: { FindSubFoldersWithConfigurationsByQueryResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }) => any, errorCallback?: () => any): JQueryPromise<{ FindSubFoldersWithConfigurationsByQueryResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }>;

	FindSubFoldersWithConfigurationsByQuery(folderID: string, filter: $D.Framework.ServiceLayer.Services.ConfigurationStorage.BaseElementRegistrationFilter): { FindSubFoldersWithConfigurationsByQueryResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] };

	FindSubFoldersWithConfigurationsByQueryPromise(folderID: string, filter: $D.Framework.ServiceLayer.Services.ConfigurationStorage.BaseElementRegistrationFilter): Promise<$D.Framework.ServiceLayer.Services.Folder.Folder[]>;

	FindSubFoldersWithConfigurations(folderID: string, attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[], successCallback: (data: { FindSubFoldersWithConfigurationsResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }) => any, errorCallback?: () => any): JQueryPromise<{ FindSubFoldersWithConfigurationsResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }>;

	FindSubFoldersWithConfigurations(folderID: string, attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[]): { FindSubFoldersWithConfigurationsResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] };

	FindSubFoldersWithConfigurationsPromise(folderID: string, attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[]): Promise<$D.Framework.ServiceLayer.Services.Folder.Folder[]>;

	FindRootFoldersWithConfigurationsByQuery(filter: $D.Framework.ServiceLayer.Services.ConfigurationStorage.BaseElementRegistrationFilter, successCallback: (data: { FindRootFoldersWithConfigurationsByQueryResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }) => any, errorCallback?: () => any): JQueryPromise<{ FindRootFoldersWithConfigurationsByQueryResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }>;

	FindRootFoldersWithConfigurationsByQuery(filter: $D.Framework.ServiceLayer.Services.ConfigurationStorage.BaseElementRegistrationFilter): { FindRootFoldersWithConfigurationsByQueryResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] };

	FindRootFoldersWithConfigurationsByQueryPromise(filter: $D.Framework.ServiceLayer.Services.ConfigurationStorage.BaseElementRegistrationFilter): Promise<$D.Framework.ServiceLayer.Services.Folder.Folder[]>;

	FindRootFoldersWithConfigurations(attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[], successCallback: (data: { FindRootFoldersWithConfigurationsResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }) => any, errorCallback?: () => any): JQueryPromise<{ FindRootFoldersWithConfigurationsResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }>;

	FindRootFoldersWithConfigurations(attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[]): { FindRootFoldersWithConfigurationsResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] };

	FindRootFoldersWithConfigurationsPromise(attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[]): Promise<$D.Framework.ServiceLayer.Services.Folder.Folder[]>;

	GetConfigurationData(registrationID: string, successCallback: (data: { GetConfigurationDataResult: number[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetConfigurationDataResult: number[] }>;

	GetConfigurationData(registrationID: string): { GetConfigurationDataResult: number[] };

	GetConfigurationDataPromise(registrationID: string): Promise<number[]>;

	GetAnyConfigurationData(registrationID: string, successCallback: (data: { GetAnyConfigurationDataResult: number[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAnyConfigurationDataResult: number[] }>;

	GetAnyConfigurationData(registrationID: string): { GetAnyConfigurationDataResult: number[] };

	GetAnyConfigurationDataPromise(registrationID: string): Promise<number[]>;

	HasConfigurationData(registrationID: string, successCallback: (data: { HasConfigurationDataResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ HasConfigurationDataResult: boolean }>;

	HasConfigurationData(registrationID: string): { HasConfigurationDataResult: boolean };

	HasConfigurationDataPromise(registrationID: string): Promise<boolean>;

	SetConfigurationData(registrationID: string, data: number[], successCallback: (data: { SetConfigurationDataResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetConfigurationDataResult: void }>;

	SetConfigurationData(registrationID: string, data: number[]): { SetConfigurationDataResult: void };

	SetConfigurationDataPromise(registrationID: string, data: number[]): Promise<void>;

	SaveWithConfigurationData(configuration: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration, data: number[], successCallback: (data: { SaveWithConfigurationDataResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveWithConfigurationDataResult: void }>;

	SaveWithConfigurationData(configuration: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration, data: number[]): { SaveWithConfigurationDataResult: void };

	SaveWithConfigurationDataPromise(configuration: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration, data: number[]): Promise<void>;

	SaveWithHistory(configuration: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration, data: number[], thumbnail: number[], preview: number[], successCallback: (data: { SaveWithHistoryResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveWithHistoryResult: void }>;

	SaveWithHistory(configuration: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration, data: number[], thumbnail: number[], preview: number[]): { SaveWithHistoryResult: void };

	SaveWithHistoryPromise(configuration: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration, data: number[], thumbnail: number[], preview: number[]): Promise<void>;

	GetThumbnail(registrationId: string, successCallback: (data: { GetThumbnailResult: number[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetThumbnailResult: number[] }>;

	GetThumbnail(registrationId: string): { GetThumbnailResult: number[] };

	GetThumbnailPromise(registrationId: string): Promise<number[]>;

	GetPreviewImage(registrationId: string, successCallback: (data: { GetPreviewImageResult: number[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetPreviewImageResult: number[] }>;

	GetPreviewImage(registrationId: string): { GetPreviewImageResult: number[] };

	GetPreviewImagePromise(registrationId: string): Promise<number[]>;

	GetElementTypeIcon(elementType: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType, successCallback: (data: { GetElementTypeIconResult: $D.Framework.ServiceLayer.Services.Image.ImageInfo }) => any, errorCallback?: () => any): JQueryPromise<{ GetElementTypeIconResult: $D.Framework.ServiceLayer.Services.Image.ImageInfo }>;

	GetElementTypeIcon(elementType: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType): { GetElementTypeIconResult: $D.Framework.ServiceLayer.Services.Image.ImageInfo };

	GetElementTypeIconPromise(elementType: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType): Promise<$D.Framework.ServiceLayer.Services.Image.ImageInfo>;

	RestoreBackup(registrationId: string, successCallback: (data: { RestoreBackupResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RestoreBackupResult: void }>;

	RestoreBackup(registrationId: string): { RestoreBackupResult: void };

	RestoreBackupPromise(registrationId: string): Promise<void>;

	AddComment(registrationId: string, comment: string, successCallback: (data: { AddCommentResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddCommentResult: void }>;

	AddComment(registrationId: string, comment: string): { AddCommentResult: void };

	AddCommentPromise(registrationId: string, comment: string): Promise<void>;

	CreateCheckpoint(registrationId: string, checkpointName: string, description: string, successCallback: (data: { CreateCheckpointResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CreateCheckpointResult: void }>;

	CreateCheckpoint(registrationId: string, checkpointName: string, description: string): { CreateCheckpointResult: void };

	CreateCheckpointPromise(registrationId: string, checkpointName: string, description: string): Promise<void>;

	GetAvailableNamespacesForInvokeMethodStep(successCallback: (data: { GetAvailableNamespacesForInvokeMethodStepResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAvailableNamespacesForInvokeMethodStepResult: string[] }>;

	GetAvailableNamespacesForInvokeMethodStep(): { GetAvailableNamespacesForInvokeMethodStepResult: string[] };

	GetAvailableNamespacesForInvokeMethodStepPromise(): Promise<string[]>;

	GetAvailableClassesForInvokeMethodStep(Namespace: string, successCallback: (data: { GetAvailableClassesForInvokeMethodStepResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAvailableClassesForInvokeMethodStepResult: string[] }>;

	GetAvailableClassesForInvokeMethodStep(Namespace: string): { GetAvailableClassesForInvokeMethodStepResult: string[] };

	GetAvailableClassesForInvokeMethodStepPromise(Namespace: string): Promise<string[]>;

	GetAvailableMethodsForInvokeMethodStep(className: string, successCallback: (data: { GetAvailableMethodsForInvokeMethodStepResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAvailableMethodsForInvokeMethodStepResult: string[] }>;

	GetAvailableMethodsForInvokeMethodStep(className: string): { GetAvailableMethodsForInvokeMethodStepResult: string[] };

	GetAvailableMethodsForInvokeMethodStepPromise(className: string): Promise<string[]>;

	CreateInvokeMethodStep(name: string, invokeClassName: string, invokeMethodName: string, registerForAgentFlows: boolean, parentFolderID: string, matrixSteps: boolean, successCallback: (data: { CreateInvokeMethodStepResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateInvokeMethodStepResult: string }>;

	CreateInvokeMethodStep(name: string, invokeClassName: string, invokeMethodName: string, registerForAgentFlows: boolean, parentFolderID: string, matrixSteps: boolean): { CreateInvokeMethodStepResult: string };

	CreateInvokeMethodStepPromise(name: string, invokeClassName: string, invokeMethodName: string, registerForAgentFlows: boolean, parentFolderID: string, matrixSteps: boolean): Promise<string>;

	UpdateInvokeMethodStep(stepElementId: string, invokeClassName: string, invokeMethodName: string, registerForAgentFlows: boolean, matrixSteps: boolean, successCallback: (data: { UpdateInvokeMethodStepResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateInvokeMethodStepResult: string }>;

	UpdateInvokeMethodStep(stepElementId: string, invokeClassName: string, invokeMethodName: string, registerForAgentFlows: boolean, matrixSteps: boolean): { UpdateInvokeMethodStepResult: string };

	UpdateInvokeMethodStepPromise(stepElementId: string, invokeClassName: string, invokeMethodName: string, registerForAgentFlows: boolean, matrixSteps: boolean): Promise<string>;

	GetClassesForStepRegistration(successCallback: (data: { GetClassesForStepRegistrationResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetClassesForStepRegistrationResult: string[] }>;

	GetClassesForStepRegistration(): { GetClassesForStepRegistrationResult: string[] };

	GetClassesForStepRegistrationPromise(): Promise<string[]>;

	CreatePage(folderId: string, name: string, successCallback: (data: { CreatePageResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreatePageResult: string }>;

	CreatePage(folderId: string, name: string): { CreatePageResult: string };

	CreatePagePromise(folderId: string, name: string): Promise<string>;

	CreatePageWithSubType(folderId: string, name: string, subElementType: string, successCallback: (data: { CreatePageWithSubTypeResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreatePageWithSubTypeResult: string }>;

	CreatePageWithSubType(folderId: string, name: string, subElementType: string): { CreatePageWithSubTypeResult: string };

	CreatePageWithSubTypePromise(folderId: string, name: string, subElementType: string): Promise<string>;

	CreatePageFromTemplate(folderId: string, name: string, templateId: string, successCallback: (data: { CreatePageFromTemplateResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreatePageFromTemplateResult: string }>;

	CreatePageFromTemplate(folderId: string, name: string, templateId: string): { CreatePageFromTemplateResult: string };

	CreatePageFromTemplatePromise(folderId: string, name: string, templateId: string): Promise<string>;

	CreatePageWithSubTypeFromTemplate(folderId: string, name: string, subElementType: string, templateId: string, successCallback: (data: { CreatePageWithSubTypeFromTemplateResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreatePageWithSubTypeFromTemplateResult: string }>;

	CreatePageWithSubTypeFromTemplate(folderId: string, name: string, subElementType: string, templateId: string): { CreatePageWithSubTypeFromTemplateResult: string };

	CreatePageWithSubTypeFromTemplatePromise(folderId: string, name: string, subElementType: string, templateId: string): Promise<string>;

	CreateForm(folderId: string, name: string, successCallback: (data: { CreateFormResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateFormResult: string }>;

	CreateForm(folderId: string, name: string): { CreateFormResult: string };

	CreateFormPromise(folderId: string, name: string): Promise<string>;

	CreateFormWithId(folderId: string, name: string, formId: string, successCallback: (data: { CreateFormWithIdResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateFormWithIdResult: string }>;

	CreateFormWithId(folderId: string, name: string, formId: string): { CreateFormWithIdResult: string };

	CreateFormWithIdPromise(folderId: string, name: string, formId: string): Promise<string>;

	CreateFormFromTemplate(folderId: string, name: string, templateId: string, successCallback: (data: { CreateFormFromTemplateResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateFormFromTemplateResult: string }>;

	CreateFormFromTemplate(folderId: string, name: string, templateId: string): { CreateFormFromTemplateResult: string };

	CreateFormFromTemplatePromise(folderId: string, name: string, templateId: string): Promise<string>;

	CreateFormFromBehavior(folderId: string, name: string, templateId: string, formBehaviorType: string, successCallback: (data: { CreateFormFromBehaviorResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateFormFromBehaviorResult: string }>;

	CreateFormFromBehavior(folderId: string, name: string, templateId: string, formBehaviorType: string): { CreateFormFromBehaviorResult: string };

	CreateFormFromBehaviorPromise(folderId: string, name: string, templateId: string, formBehaviorType: string): Promise<string>;

	CreateFormBackground(folderId: string, name: string, successCallback: (data: { CreateFormBackgroundResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateFormBackgroundResult: string }>;

	CreateFormBackground(folderId: string, name: string): { CreateFormBackgroundResult: string };

	CreateFormBackgroundPromise(folderId: string, name: string): Promise<string>;

	CreateFormBackgroundFromTemplate(folderId: string, name: string, templateId: string, successCallback: (data: { CreateFormBackgroundFromTemplateResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateFormBackgroundFromTemplateResult: string }>;

	CreateFormBackgroundFromTemplate(folderId: string, name: string, templateId: string): { CreateFormBackgroundFromTemplateResult: string };

	CreateFormBackgroundFromTemplatePromise(folderId: string, name: string, templateId: string): Promise<string>;

	CreateEndForm(folderId: string, name: string, successCallback: (data: { CreateEndFormResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateEndFormResult: string }>;

	CreateEndForm(folderId: string, name: string): { CreateEndFormResult: string };

	CreateEndFormPromise(folderId: string, name: string): Promise<string>;

	CreateEndFormFromTemplate(folderId: string, name: string, templateId: string, successCallback: (data: { CreateEndFormFromTemplateResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateEndFormFromTemplateResult: string }>;

	CreateEndFormFromTemplate(folderId: string, name: string, templateId: string): { CreateEndFormFromTemplateResult: string };

	CreateEndFormFromTemplatePromise(folderId: string, name: string, templateId: string): Promise<string>;

	CreateFlow(folderId: string, name: string, successCallback: (data: { CreateFlowResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateFlowResult: string }>;

	CreateFlow(folderId: string, name: string): { CreateFlowResult: string };

	CreateFlowPromise(folderId: string, name: string): Promise<string>;

	CreateFlowWithId(flowId: string, folderId: string, name: string, successCallback: (data: { CreateFlowWithIdResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateFlowWithIdResult: string }>;

	CreateFlowWithId(flowId: string, folderId: string, name: string): { CreateFlowWithIdResult: string };

	CreateFlowWithIdPromise(flowId: string, folderId: string, name: string): Promise<string>;

	CreateFlowFromTemplate(folderId: string, name: string, templateId: string, successCallback: (data: { CreateFlowFromTemplateResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateFlowFromTemplateResult: string }>;

	CreateFlowFromTemplate(folderId: string, name: string, templateId: string): { CreateFlowFromTemplateResult: string };

	CreateFlowFromTemplatePromise(folderId: string, name: string, templateId: string): Promise<string>;

	CreateFlowFromTemplateAndBehaviorType(folderId: string, name: string, templateId: string, flowBehaviorType: string, successCallback: (data: { CreateFlowFromTemplateAndBehaviorTypeResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateFlowFromTemplateAndBehaviorTypeResult: string }>;

	CreateFlowFromTemplateAndBehaviorType(folderId: string, name: string, templateId: string, flowBehaviorType: string): { CreateFlowFromTemplateAndBehaviorTypeResult: string };

	CreateFlowFromTemplateAndBehaviorTypePromise(folderId: string, name: string, templateId: string, flowBehaviorType: string): Promise<string>;

	CreateFlowWithExtraSettings(folderId: string, name: string, inputs: $D.Framework.Design.Flow.FlowInputDataDescription[], storeFlowExecutionsInFolderId: string, flowRunIdPrefix: string, successCallback: (data: { CreateFlowWithExtraSettingsResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateFlowWithExtraSettingsResult: string }>;

	CreateFlowWithExtraSettings(folderId: string, name: string, inputs: $D.Framework.Design.Flow.FlowInputDataDescription[], storeFlowExecutionsInFolderId: string, flowRunIdPrefix: string): { CreateFlowWithExtraSettingsResult: string };

	CreateFlowWithExtraSettingsPromise(folderId: string, name: string, inputs: $D.Framework.Design.Flow.FlowInputDataDescription[], storeFlowExecutionsInFolderId: string, flowRunIdPrefix: string): Promise<string>;

	CreateAgentFlow(folderId: string, name: string, successCallback: (data: { CreateAgentFlowResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateAgentFlowResult: string }>;

	CreateAgentFlow(folderId: string, name: string): { CreateAgentFlowResult: string };

	CreateAgentFlowPromise(folderId: string, name: string): Promise<string>;

	CreateAgentFlowFromTemplate(folderId: string, name: string, templateId: string, successCallback: (data: { CreateAgentFlowFromTemplateResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateAgentFlowFromTemplateResult: string }>;

	CreateAgentFlowFromTemplate(folderId: string, name: string, templateId: string): { CreateAgentFlowFromTemplateResult: string };

	CreateAgentFlowFromTemplatePromise(folderId: string, name: string, templateId: string): Promise<string>;

	CreateRuleWithId(ruleId: string, folderId: string, name: string, successCallback: (data: { CreateRuleWithIdResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateRuleWithIdResult: string }>;

	CreateRuleWithId(ruleId: string, folderId: string, name: string): { CreateRuleWithIdResult: string };

	CreateRuleWithIdPromise(ruleId: string, folderId: string, name: string): Promise<string>;

	CreateRule(folderId: string, name: string, successCallback: (data: { CreateRuleResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateRuleResult: string }>;

	CreateRule(folderId: string, name: string): { CreateRuleResult: string };

	CreateRulePromise(folderId: string, name: string): Promise<string>;

	CreateRuleFromTemplate(folderId: string, name: string, templateId: string, successCallback: (data: { CreateRuleFromTemplateResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateRuleFromTemplateResult: string }>;

	CreateRuleFromTemplate(folderId: string, name: string, templateId: string): { CreateRuleFromTemplateResult: string };

	CreateRuleFromTemplatePromise(folderId: string, name: string, templateId: string): Promise<string>;

	CreateRuleFromTemplateAndBehavior(folderId: string, name: string, templateId: string, behavior: string, successCallback: (data: { CreateRuleFromTemplateAndBehaviorResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateRuleFromTemplateAndBehaviorResult: string }>;

	CreateRuleFromTemplateAndBehavior(folderId: string, name: string, templateId: string, behavior: string): { CreateRuleFromTemplateAndBehaviorResult: string };

	CreateRuleFromTemplateAndBehaviorPromise(folderId: string, name: string, templateId: string, behavior: string): Promise<string>;

	CreateTruthTable(folderId: string, name: string, successCallback: (data: { CreateTruthTableResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateTruthTableResult: string }>;

	CreateTruthTable(folderId: string, name: string): { CreateTruthTableResult: string };

	CreateTruthTablePromise(folderId: string, name: string): Promise<string>;

	CreateTruthTableFromTemplate(folderId: string, name: string, templateId: string, successCallback: (data: { CreateTruthTableFromTemplateResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateTruthTableFromTemplateResult: string }>;

	CreateTruthTableFromTemplate(folderId: string, name: string, templateId: string): { CreateTruthTableFromTemplateResult: string };

	CreateTruthTableFromTemplatePromise(folderId: string, name: string, templateId: string): Promise<string>;

	CreateTruthTableFromTemplateAndBehavior(folderId: string, name: string, templateId: string, behavior: string, successCallback: (data: { CreateTruthTableFromTemplateAndBehaviorResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateTruthTableFromTemplateAndBehaviorResult: string }>;

	CreateTruthTableFromTemplateAndBehavior(folderId: string, name: string, templateId: string, behavior: string): { CreateTruthTableFromTemplateAndBehaviorResult: string };

	CreateTruthTableFromTemplateAndBehaviorPromise(folderId: string, name: string, templateId: string, behavior: string): Promise<string>;

	CreateRuleTable(folderId: string, name: string, successCallback: (data: { CreateRuleTableResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateRuleTableResult: string }>;

	CreateRuleTable(folderId: string, name: string): { CreateRuleTableResult: string };

	CreateRuleTablePromise(folderId: string, name: string): Promise<string>;

	CreateRuleTableFromTemplate(folderId: string, name: string, templateId: string, successCallback: (data: { CreateRuleTableFromTemplateResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateRuleTableFromTemplateResult: string }>;

	CreateRuleTableFromTemplate(folderId: string, name: string, templateId: string): { CreateRuleTableFromTemplateResult: string };

	CreateRuleTableFromTemplatePromise(folderId: string, name: string, templateId: string): Promise<string>;

	CreateRuleTableFromTemplateAndBehavior(folderId: string, name: string, templateId: string, behavior: string, successCallback: (data: { CreateRuleTableFromTemplateAndBehaviorResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateRuleTableFromTemplateAndBehaviorResult: string }>;

	CreateRuleTableFromTemplateAndBehavior(folderId: string, name: string, templateId: string, behavior: string): { CreateRuleTableFromTemplateAndBehaviorResult: string };

	CreateRuleTableFromTemplateAndBehaviorPromise(folderId: string, name: string, templateId: string, behavior: string): Promise<string>;

	CreateMatrixRule(folderId: string, name: string, successCallback: (data: { CreateMatrixRuleResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateMatrixRuleResult: string }>;

	CreateMatrixRule(folderId: string, name: string): { CreateMatrixRuleResult: string };

	CreateMatrixRulePromise(folderId: string, name: string): Promise<string>;

	CreateMatrixRuleWithBehavior(folderId: string, name: string, behaviorName: string, successCallback: (data: { CreateMatrixRuleWithBehaviorResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateMatrixRuleWithBehaviorResult: string }>;

	CreateMatrixRuleWithBehavior(folderId: string, name: string, behaviorName: string): { CreateMatrixRuleWithBehaviorResult: string };

	CreateMatrixRuleWithBehaviorPromise(folderId: string, name: string, behaviorName: string): Promise<string>;

	CreateMatrixRuleFromTemplate(folderId: string, name: string, templateId: string, successCallback: (data: { CreateMatrixRuleFromTemplateResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateMatrixRuleFromTemplateResult: string }>;

	CreateMatrixRuleFromTemplate(folderId: string, name: string, templateId: string): { CreateMatrixRuleFromTemplateResult: string };

	CreateMatrixRuleFromTemplatePromise(folderId: string, name: string, templateId: string): Promise<string>;

	CreateReport(folderId: string, name: string, successCallback: (data: { CreateReportResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateReportResult: string }>;

	CreateReport(folderId: string, name: string): { CreateReportResult: string };

	CreateReportPromise(folderId: string, name: string): Promise<string>;

	CreateReportFromTemplate(folderId: string, name: string, templateId: string, successCallback: (data: { CreateReportFromTemplateResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateReportFromTemplateResult: string }>;

	CreateReportFromTemplate(folderId: string, name: string, templateId: string): { CreateReportFromTemplateResult: string };

	CreateReportFromTemplatePromise(folderId: string, name: string, templateId: string): Promise<string>;

	CreateReportWithId(reportId: string, folderId: string, name: string, successCallback: (data: { CreateReportWithIdResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateReportWithIdResult: string }>;

	CreateReportWithId(reportId: string, folderId: string, name: string): { CreateReportWithIdResult: string };

	CreateReportWithIdPromise(reportId: string, folderId: string, name: string): Promise<string>;

	CreateTextMerge(folderId: string, name: string, successCallback: (data: { CreateTextMergeResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateTextMergeResult: string }>;

	CreateTextMerge(folderId: string, name: string): { CreateTextMergeResult: string };

	CreateTextMergePromise(folderId: string, name: string): Promise<string>;

	CreateTextMergeFromTemplate(folderId: string, name: string, templateId: string, successCallback: (data: { CreateTextMergeFromTemplateResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateTextMergeFromTemplateResult: string }>;

	CreateTextMergeFromTemplate(folderId: string, name: string, templateId: string): { CreateTextMergeFromTemplateResult: string };

	CreateTextMergeFromTemplatePromise(folderId: string, name: string, templateId: string): Promise<string>;

	CreateTextMergeFromTemplateAndBehavior(folderId: string, name: string, templateId: string, behavior: string, successCallback: (data: { CreateTextMergeFromTemplateAndBehaviorResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateTextMergeFromTemplateAndBehaviorResult: string }>;

	CreateTextMergeFromTemplateAndBehavior(folderId: string, name: string, templateId: string, behavior: string): { CreateTextMergeFromTemplateAndBehaviorResult: string };

	CreateTextMergeFromTemplateAndBehaviorPromise(folderId: string, name: string, templateId: string, behavior: string): Promise<string>;

	CreateTextMergeWithSubType(folderId: string, name: string, subElementType: string, templateId: string, successCallback: (data: { CreateTextMergeWithSubTypeResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateTextMergeWithSubTypeResult: string }>;

	CreateTextMergeWithSubType(folderId: string, name: string, subElementType: string, templateId: string): { CreateTextMergeWithSubTypeResult: string };

	CreateTextMergeWithSubTypePromise(folderId: string, name: string, subElementType: string, templateId: string): Promise<string>;

	CreateTextMergeWithSubTypeFromBehavior(folderId: string, name: string, subElementType: string, behaviorType: string, successCallback: (data: { CreateTextMergeWithSubTypeFromBehaviorResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateTextMergeWithSubTypeFromBehaviorResult: string }>;

	CreateTextMergeWithSubTypeFromBehavior(folderId: string, name: string, subElementType: string, behaviorType: string): { CreateTextMergeWithSubTypeFromBehaviorResult: string };

	CreateTextMergeWithSubTypeFromBehaviorPromise(folderId: string, name: string, subElementType: string, behaviorType: string): Promise<string>;

	CreateDesignerElementTemplate(folderId: string, elementType: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType, subElementType: string, name: string, data: number[], successCallback: (data: { CreateDesignerElementTemplateResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateDesignerElementTemplateResult: string }>;

	CreateDesignerElementTemplate(folderId: string, elementType: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType, subElementType: string, name: string, data: number[]): { CreateDesignerElementTemplateResult: string };

	CreateDesignerElementTemplatePromise(folderId: string, elementType: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType, subElementType: string, name: string, data: number[]): Promise<string>;

	RegisterElementInfoContext(folderId: string, elementType: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType, preselectedTemplateId: string, preselectedBehaviorType: string, subElementType: string, defaultName: string, successCallback: (data: { RegisterElementInfoContextResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ RegisterElementInfoContextResult: string }>;

	RegisterElementInfoContext(folderId: string, elementType: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType, preselectedTemplateId: string, preselectedBehaviorType: string, subElementType: string, defaultName: string): { RegisterElementInfoContextResult: string };

	RegisterElementInfoContextPromise(folderId: string, elementType: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType, preselectedTemplateId: string, preselectedBehaviorType: string, subElementType: string, defaultName: string): Promise<string>;

	CreateElementRegistrationFromContext(contextId: string, successCallback: (data: { CreateElementRegistrationFromContextResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateElementRegistrationFromContextResult: string }>;

	CreateElementRegistrationFromContext(contextId: string): { CreateElementRegistrationFromContextResult: string };

	CreateElementRegistrationFromContextPromise(contextId: string): Promise<string>;

	GetElementInfoFromContext(contextProviderRegistrationId: string, successCallback: (data: { GetElementInfoFromContextResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementContextInfo }) => any, errorCallback?: () => any): JQueryPromise<{ GetElementInfoFromContextResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementContextInfo }>;

	GetElementInfoFromContext(contextProviderRegistrationId: string): { GetElementInfoFromContextResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementContextInfo };

	GetElementInfoFromContextPromise(contextProviderRegistrationId: string): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementContextInfo>;

	UnRegisterElementInfoContext(contextProviderRegistrationId: string, successCallback: (data: { UnRegisterElementInfoContextResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UnRegisterElementInfoContextResult: void }>;

	UnRegisterElementInfoContext(contextProviderRegistrationId: string): { UnRegisterElementInfoContextResult: void };

	UnRegisterElementInfoContextPromise(contextProviderRegistrationId: string): Promise<void>;

	CreatePageCopy(registrationID: string, newPageName: string, folderId: string, successCallback: (data: { CreatePageCopyResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreatePageCopyResult: string }>;

	CreatePageCopy(registrationID: string, newPageName: string, folderId: string): { CreatePageCopyResult: string };

	CreatePageCopyPromise(registrationID: string, newPageName: string, folderId: string): Promise<string>;

	CreateFlowCopy(registrationID: string, newFlowName: string, folderId: string, successCallback: (data: { CreateFlowCopyResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateFlowCopyResult: string }>;

	CreateFlowCopy(registrationID: string, newFlowName: string, folderId: string): { CreateFlowCopyResult: string };

	CreateFlowCopyPromise(registrationID: string, newFlowName: string, folderId: string): Promise<string>;

	CreateRuleCopy(registrationID: string, newRuleName: string, folderId: string, successCallback: (data: { CreateRuleCopyResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateRuleCopyResult: string }>;

	CreateRuleCopy(registrationID: string, newRuleName: string, folderId: string): { CreateRuleCopyResult: string };

	CreateRuleCopyPromise(registrationID: string, newRuleName: string, folderId: string): Promise<string>;

	CreateFormCopy(registrationID: string, newFormName: string, folderId: string, successCallback: (data: { CreateFormCopyResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateFormCopyResult: string }>;

	CreateFormCopy(registrationID: string, newFormName: string, folderId: string): { CreateFormCopyResult: string };

	CreateFormCopyPromise(registrationID: string, newFormName: string, folderId: string): Promise<string>;

	CreateEndFormCopy(registrationID: string, newEndFormName: string, folderId: string, successCallback: (data: { CreateEndFormCopyResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateEndFormCopyResult: string }>;

	CreateEndFormCopy(registrationID: string, newEndFormName: string, folderId: string): { CreateEndFormCopyResult: string };

	CreateEndFormCopyPromise(registrationID: string, newEndFormName: string, folderId: string): Promise<string>;

	CreateReportCopy(registrationID: string, newReportName: string, folderId: string, successCallback: (data: { CreateReportCopyResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateReportCopyResult: string }>;

	CreateReportCopy(registrationID: string, newReportName: string, folderId: string): { CreateReportCopyResult: string };

	CreateReportCopyPromise(registrationID: string, newReportName: string, folderId: string): Promise<string>;

	CreateBackGroundFormCopy(registrationID: string, newReportName: string, folderId: string, successCallback: (data: { CreateBackGroundFormCopyResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateBackGroundFormCopyResult: string }>;

	CreateBackGroundFormCopy(registrationID: string, newReportName: string, folderId: string): { CreateBackGroundFormCopyResult: string };

	CreateBackGroundFormCopyPromise(registrationID: string, newReportName: string, folderId: string): Promise<string>;

	CopyRuleToFolder(registrationId: string, newRuleName: string, folderId: string, successCallback: (data: { CopyRuleToFolderResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CopyRuleToFolderResult: string }>;

	CopyRuleToFolder(registrationId: string, newRuleName: string, folderId: string): { CopyRuleToFolderResult: string };

	CopyRuleToFolderPromise(registrationId: string, newRuleName: string, folderId: string): Promise<string>;

	MultiCopyRuleToFolder(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], folderID: string, successCallback: (data: { MultiCopyRuleToFolderResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ MultiCopyRuleToFolderResult: void }>;

	MultiCopyRuleToFolder(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], folderID: string): { MultiCopyRuleToFolderResult: void };

	MultiCopyRuleToFolderPromise(entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[], folderID: string): Promise<void>;

	GetFlowIdByAlias(flowAlias: string, successCallback: (data: { GetFlowIdByAliasResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetFlowIdByAliasResult: string }>;

	GetFlowIdByAlias(flowAlias: string): { GetFlowIdByAliasResult: string };

	GetFlowIdByAliasPromise(flowAlias: string): Promise<string>;

	GetDesignerItems(folderId: string, successCallback: (data: { GetDesignerItemsResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.DesignerFolderItem[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetDesignerItemsResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.DesignerFolderItem[] }>;

	GetDesignerItems(folderId: string): { GetDesignerItemsResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.DesignerFolderItem[] };

	GetDesignerItemsPromise(folderId: string): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.DesignerFolderItem[]>;

	GetDesignerFolderFilterAbilities(folderId: string, successCallback: (data: { GetDesignerFolderFilterAbilitiesResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.DesignerFolderFilterAbilities }) => any, errorCallback?: () => any): JQueryPromise<{ GetDesignerFolderFilterAbilitiesResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.DesignerFolderFilterAbilities }>;

	GetDesignerFolderFilterAbilities(folderId: string): { GetDesignerFolderFilterAbilitiesResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.DesignerFolderFilterAbilities };

	GetDesignerFolderFilterAbilitiesPromise(folderId: string): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.DesignerFolderFilterAbilities>;

	GetElementRegistrationDesignerItems(folderId: string, successCallback: (data: { GetElementRegistrationDesignerItemsResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.DesignerFolderItem[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetElementRegistrationDesignerItemsResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.DesignerFolderItem[] }>;

	GetElementRegistrationDesignerItems(folderId: string): { GetElementRegistrationDesignerItemsResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.DesignerFolderItem[] };

	GetElementRegistrationDesignerItemsPromise(folderId: string): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.DesignerFolderItem[]>;

	GetFilteredDesignerItems(folderId: string, filter: $D.Framework.ServiceLayer.Services.ConfigurationStorage.DesignerFolderFilter, successCallback: (data: { GetFilteredDesignerItemsResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.DesignerFolderItem[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetFilteredDesignerItemsResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.DesignerFolderItem[] }>;

	GetFilteredDesignerItems(folderId: string, filter: $D.Framework.ServiceLayer.Services.ConfigurationStorage.DesignerFolderFilter): { GetFilteredDesignerItemsResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.DesignerFolderItem[] };

	GetFilteredDesignerItemsPromise(folderId: string, filter: $D.Framework.ServiceLayer.Services.ConfigurationStorage.DesignerFolderFilter): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.DesignerFolderItem[]>;

	GetDesignerFolderFilterForPage(folderId: string, pageContextId: string, successCallback: (data: { GetDesignerFolderFilterForPageResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.DesignerFolderFilter }) => any, errorCallback?: () => any): JQueryPromise<{ GetDesignerFolderFilterForPageResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.DesignerFolderFilter }>;

	GetDesignerFolderFilterForPage(folderId: string, pageContextId: string): { GetDesignerFolderFilterForPageResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.DesignerFolderFilter };

	GetDesignerFolderFilterForPagePromise(folderId: string, pageContextId: string): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.DesignerFolderFilter>;

	GetDesignerItem(elementRegistrationId: string, successCallback: (data: { GetDesignerItemResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.DesignerFolderItem }) => any, errorCallback?: () => any): JQueryPromise<{ GetDesignerItemResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.DesignerFolderItem }>;

	GetDesignerItem(elementRegistrationId: string): { GetDesignerItemResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.DesignerFolderItem };

	GetDesignerItemPromise(elementRegistrationId: string): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.DesignerFolderItem>;

	GetUpdatedDesignerItems(entityIds: string[], successCallback: (data: { GetUpdatedDesignerItemsResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.DesignerFolderItem[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetUpdatedDesignerItemsResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.DesignerFolderItem[] }>;

	GetUpdatedDesignerItems(entityIds: string[]): { GetUpdatedDesignerItemsResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.DesignerFolderItem[] };

	GetUpdatedDesignerItemsPromise(entityIds: string[]): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.DesignerFolderItem[]>;

	FindDesignerItems(criteria: string, folderId: string, tags: string[], types: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[], successCallback: (data: { FindDesignerItemsResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.DesignerFolderItem[] }) => any, errorCallback?: () => any): JQueryPromise<{ FindDesignerItemsResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.DesignerFolderItem[] }>;

	FindDesignerItems(criteria: string, folderId: string, tags: string[], types: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[]): { FindDesignerItemsResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.DesignerFolderItem[] };

	FindDesignerItemsPromise(criteria: string, folderId: string, tags: string[], types: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[]): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.DesignerFolderItem[]>;

	SearchDesignerItems(criteria: string, folderId: string, tags: string[], types: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[], subElementType: string, successCallback: (data: { SearchDesignerItemsResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.DesignerFolderItem[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchDesignerItemsResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.DesignerFolderItem[] }>;

	SearchDesignerItems(criteria: string, folderId: string, tags: string[], types: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[], subElementType: string): { SearchDesignerItemsResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.DesignerFolderItem[] };

	SearchDesignerItemsPromise(criteria: string, folderId: string, tags: string[], types: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[], subElementType: string): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.DesignerFolderItem[]>;

	GetElementsForTree(folderIds: string[], includeFavorites: boolean, includeEmptyFolders: boolean, attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[], filter: $D.Framework.ServiceLayer.Services.ConfigurationStorage.BaseElementRegistrationFilter, successCallback: (data: { GetElementsForTreeResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementForTree[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetElementsForTreeResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementForTree[] }>;

	GetElementsForTree(folderIds: string[], includeFavorites: boolean, includeEmptyFolders: boolean, attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[], filter: $D.Framework.ServiceLayer.Services.ConfigurationStorage.BaseElementRegistrationFilter): { GetElementsForTreeResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementForTree[] };

	GetElementsForTreePromise(folderIds: string[], includeFavorites: boolean, includeEmptyFolders: boolean, attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[], filter: $D.Framework.ServiceLayer.Services.ConfigurationStorage.BaseElementRegistrationFilter): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementForTree[]>;

	GetSubElementsForTree(folderId: string, includeEmptyFolders: boolean, attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[], filter: $D.Framework.ServiceLayer.Services.ConfigurationStorage.BaseElementRegistrationFilter, successCallback: (data: { GetSubElementsForTreeResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementForTree[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetSubElementsForTreeResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementForTree[] }>;

	GetSubElementsForTree(folderId: string, includeEmptyFolders: boolean, attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[], filter: $D.Framework.ServiceLayer.Services.ConfigurationStorage.BaseElementRegistrationFilter): { GetSubElementsForTreeResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementForTree[] };

	GetSubElementsForTreePromise(folderId: string, includeEmptyFolders: boolean, attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[], filter: $D.Framework.ServiceLayer.Services.ConfigurationStorage.BaseElementRegistrationFilter): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementForTree[]>;

	GetHistoryFolder(id: string, createIfMissing: boolean, successCallback: (data: { GetHistoryFolderResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetHistoryFolderResult: string }>;

	GetHistoryFolder(id: string, createIfMissing: boolean): { GetHistoryFolderResult: string };

	GetHistoryFolderPromise(id: string, createIfMissing: boolean): Promise<string>;

	SaveDefaultHeaderData(elementRegistrationId: string, data: $D.Framework.ServiceLayer.Services.ConfigurationStorage.DefaultHeaderData, successCallback: (data: { SaveDefaultHeaderDataResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveDefaultHeaderDataResult: void }>;

	SaveDefaultHeaderData(elementRegistrationId: string, data: $D.Framework.ServiceLayer.Services.ConfigurationStorage.DefaultHeaderData): { SaveDefaultHeaderDataResult: void };

	SaveDefaultHeaderDataPromise(elementRegistrationId: string, data: $D.Framework.ServiceLayer.Services.ConfigurationStorage.DefaultHeaderData): Promise<void>;

	GetElementRegisterationInfo(folderId: string, attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[], successCallback: (data: { GetElementRegisterationInfoResult: $D.Framework.ServiceLayer.Services.Folder.ElementRegistrationInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetElementRegisterationInfoResult: $D.Framework.ServiceLayer.Services.Folder.ElementRegistrationInfo[] }>;

	GetElementRegisterationInfo(folderId: string, attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[]): { GetElementRegisterationInfoResult: $D.Framework.ServiceLayer.Services.Folder.ElementRegistrationInfo[] };

	GetElementRegisterationInfoPromise(folderId: string, attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[]): Promise<$D.Framework.ServiceLayer.Services.Folder.ElementRegistrationInfo[]>;

	GetElementInputTypeDescription(elementRegistrationID: string, successCallback: (data: { GetElementInputTypeDescriptionResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementInputTypeDescription }) => any, errorCallback?: () => any): JQueryPromise<{ GetElementInputTypeDescriptionResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementInputTypeDescription }>;

	GetElementInputTypeDescription(elementRegistrationID: string): { GetElementInputTypeDescriptionResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementInputTypeDescription };

	GetElementInputTypeDescriptionPromise(elementRegistrationID: string): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementInputTypeDescription>;

	GetElementInputTypeDescriptionString(elementRegistrationID: string, contentType: $D.Framework.ServiceLayer.Services.ExternalServiceReference.RESTService.RestContentType, successCallback: (data: { GetElementInputTypeDescriptionStringResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetElementInputTypeDescriptionStringResult: string }>;

	GetElementInputTypeDescriptionString(elementRegistrationID: string, contentType: $D.Framework.ServiceLayer.Services.ExternalServiceReference.RESTService.RestContentType): { GetElementInputTypeDescriptionStringResult: string };

	GetElementInputTypeDescriptionStringPromise(elementRegistrationID: string, contentType: $D.Framework.ServiceLayer.Services.ExternalServiceReference.RESTService.RestContentType): Promise<string>;

	GetIntegrationSchemaStructures(elementRegistrationID: string, schemaType: $D.Framework.ServiceLayer.Services.ExternalServiceReference.RESTService.IntegrationSchemaType, successCallback: (data: { GetIntegrationSchemaStructuresResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.IntegrationSchemaStructure }) => any, errorCallback?: () => any): JQueryPromise<{ GetIntegrationSchemaStructuresResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.IntegrationSchemaStructure }>;

	GetIntegrationSchemaStructures(elementRegistrationID: string, schemaType: $D.Framework.ServiceLayer.Services.ExternalServiceReference.RESTService.IntegrationSchemaType): { GetIntegrationSchemaStructuresResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.IntegrationSchemaStructure };

	GetIntegrationSchemaStructuresPromise(elementRegistrationID: string, schemaType: $D.Framework.ServiceLayer.Services.ExternalServiceReference.RESTService.IntegrationSchemaType): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.IntegrationSchemaStructure>;

	GetServiceIntegrationData(serviceIntegrationModel: $D.Framework.ServiceLayer.Services.ServiceManagement.ServiceIntegrationModel, successCallback: (data: { GetServiceIntegrationDataResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetServiceIntegrationDataResult: string }>;

	GetServiceIntegrationData(serviceIntegrationModel: $D.Framework.ServiceLayer.Services.ServiceManagement.ServiceIntegrationModel): { GetServiceIntegrationDataResult: string };

	GetServiceIntegrationDataPromise(serviceIntegrationModel: $D.Framework.ServiceLayer.Services.ServiceManagement.ServiceIntegrationModel): Promise<string>;

	GetElementRegistrationIntegrationData(registrationModel: $D.Framework.ServiceLayer.Services.ServiceManagement.ElementRegistrationIntegrationModel, successCallback: (data: { GetElementRegistrationIntegrationDataResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistrationIntegrationStructure }) => any, errorCallback?: () => any): JQueryPromise<{ GetElementRegistrationIntegrationDataResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistrationIntegrationStructure }>;

	GetElementRegistrationIntegrationData(registrationModel: $D.Framework.ServiceLayer.Services.ServiceManagement.ElementRegistrationIntegrationModel): { GetElementRegistrationIntegrationDataResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistrationIntegrationStructure };

	GetElementRegistrationIntegrationDataPromise(registrationModel: $D.Framework.ServiceLayer.Services.ServiceManagement.ElementRegistrationIntegrationModel): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistrationIntegrationStructure>;

	GetElementOutputTypeDescriptionString(elementRegistrationID: string, contentType: $D.Framework.ServiceLayer.Services.ExternalServiceReference.RESTService.RestContentType, successCallback: (data: { GetElementOutputTypeDescriptionStringResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementOutputTypeDescription[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetElementOutputTypeDescriptionStringResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementOutputTypeDescription[] }>;

	GetElementOutputTypeDescriptionString(elementRegistrationID: string, contentType: $D.Framework.ServiceLayer.Services.ExternalServiceReference.RESTService.RestContentType): { GetElementOutputTypeDescriptionStringResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementOutputTypeDescription[] };

	GetElementOutputTypeDescriptionStringPromise(elementRegistrationID: string, contentType: $D.Framework.ServiceLayer.Services.ExternalServiceReference.RESTService.RestContentType): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementOutputTypeDescription[]>;

	GetElementOutputTypeDescription(elementRegistrationID: string, successCallback: (data: { GetElementOutputTypeDescriptionResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementOutputTypeDescription[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetElementOutputTypeDescriptionResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementOutputTypeDescription[] }>;

	GetElementOutputTypeDescription(elementRegistrationID: string): { GetElementOutputTypeDescriptionResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementOutputTypeDescription[] };

	GetElementOutputTypeDescriptionPromise(elementRegistrationID: string): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementOutputTypeDescription[]>;

	FindConfigurationIdByFullPath(fullPath: string, successCallback: (data: { FindConfigurationIdByFullPathResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ FindConfigurationIdByFullPathResult: string }>;

	FindConfigurationIdByFullPath(fullPath: string): { FindConfigurationIdByFullPathResult: string };

	FindConfigurationIdByFullPathPromise(fullPath: string): Promise<string>;

	GetElementAttributesByDesignerId(elementRegistrationId: string, successCallback: (data: { GetElementAttributesByDesignerIdResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetElementAttributesByDesignerIdResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[] }>;

	GetElementAttributesByDesignerId(elementRegistrationId: string): { GetElementAttributesByDesignerIdResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[] };

	GetElementAttributesByDesignerIdPromise(elementRegistrationId: string): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[]>;

	CreateElement(folderId: string, name: string, templateId: string, elementType: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType, behaviorType: string, id: string, successCallback: (data: { CreateElementResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateElementResult: string }>;

	CreateElement(folderId: string, name: string, templateId: string, elementType: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType, behaviorType: string, id: string): { CreateElementResult: string };

	CreateElementPromise(folderId: string, name: string, templateId: string, elementType: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType, behaviorType: string, id: string): Promise<string>;

	ValidateElementRegistrationInputs(elementRegistrationId: string, successCallback: (data: { ValidateElementRegistrationInputsResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ ValidateElementRegistrationInputsResult: string }>;

	ValidateElementRegistrationInputs(elementRegistrationId: string): { ValidateElementRegistrationInputsResult: string };

	ValidateElementRegistrationInputsPromise(elementRegistrationId: string): Promise<string>;

	FindRootFoldersWithExternalFormReferences(successCallback: (data: { FindRootFoldersWithExternalFormReferencesResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }) => any, errorCallback?: () => any): JQueryPromise<{ FindRootFoldersWithExternalFormReferencesResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }>;

	FindRootFoldersWithExternalFormReferences(): { FindRootFoldersWithExternalFormReferencesResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] };

	FindRootFoldersWithExternalFormReferencesPromise(): Promise<$D.Framework.ServiceLayer.Services.Folder.Folder[]>;

	FindSubFoldersWithExternalFormReferences(folderId: string, successCallback: (data: { FindSubFoldersWithExternalFormReferencesResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }) => any, errorCallback?: () => any): JQueryPromise<{ FindSubFoldersWithExternalFormReferencesResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }>;

	FindSubFoldersWithExternalFormReferences(folderId: string): { FindSubFoldersWithExternalFormReferencesResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] };

	FindSubFoldersWithExternalFormReferencesPromise(folderId: string): Promise<$D.Framework.ServiceLayer.Services.Folder.Folder[]>;

	FindIdByUrl(elementServiceUrl: string, successCallback: (data: { FindIdByUrlResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ FindIdByUrlResult: string }>;

	FindIdByUrl(elementServiceUrl: string): { FindIdByUrlResult: string };

	FindIdByUrlPromise(elementServiceUrl: string): Promise<string>;

	FindTypeById(elementRegistrationId: string, successCallback: (data: { FindTypeByIdResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType }) => any, errorCallback?: () => any): JQueryPromise<{ FindTypeByIdResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType }>;

	FindTypeById(elementRegistrationId: string): { FindTypeByIdResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType };

	FindTypeByIdPromise(elementRegistrationId: string): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType>;

	GetAllowedHttpMethods(elementRegistrationId: string, successCallback: (data: { GetAllowedHttpMethodsResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllowedHttpMethodsResult: string }>;

	GetAllowedHttpMethods(elementRegistrationId: string): { GetAllowedHttpMethodsResult: string };

	GetAllowedHttpMethodsPromise(elementRegistrationId: string): Promise<string>;

	GetServiceIntegrationDataForJavascript(serviceIntegrationModel: $D.Framework.ServiceLayer.Services.ServiceManagement.ServiceIntegrationModel, successCallback: (data: { GetServiceIntegrationDataForJavascriptResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetServiceIntegrationDataForJavascriptResult: string }>;

	GetServiceIntegrationDataForJavascript(serviceIntegrationModel: $D.Framework.ServiceLayer.Services.ServiceManagement.ServiceIntegrationModel): { GetServiceIntegrationDataForJavascriptResult: string };

	GetServiceIntegrationDataForJavascriptPromise(serviceIntegrationModel: $D.Framework.ServiceLayer.Services.ServiceManagement.ServiceIntegrationModel): Promise<string>;

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

	GetByFolderID(folderID: string, successCallback: (data: { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByFolderIDResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] }>;

	GetByFolderID(folderID: string): { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] };

	GetByFolderIDPromise(folderID: string): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[]>;

	GetByIDs(ids: string[], successCallback: (data: { GetByIDsResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDsResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] }>;

	GetByIDs(ids: string[]): { GetByIDsResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] };

	GetByIDsPromise(ids: string[]): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[]>;

	GetByID(id: string, successCallback: (data: { GetByIDResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration }>;

	GetByID(id: string): { GetByIDResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration };

	GetByIDPromise(id: string): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration>;

	GetAll(successCallback: (data: { GetAllResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] }>;

	GetAll(): { GetAllResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] };

	GetAllPromise(): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[]>;

	Save(entity: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration, successCallback: (data: { SaveResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveResult: void }>;

	Save(entity: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration): { SaveResult: void };

	SavePromise(entity: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration): Promise<void>;

	Delete(id: string, successCallback: (data: { DeleteResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteResult: void }>;

	Delete(id: string): { DeleteResult: void };

	DeletePromise(id: string): Promise<void>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType, successCallback: (data: { SearchResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] }>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): { SearchResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] };

	SearchPromise(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[]>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[], successCallback: (data: { SaveListResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] }) => any, errorCallback?: () => any): JQueryPromise<{ SaveListResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] }>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[]): { SaveListResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[] };

	SaveListPromise(entities: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[]): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[]>;
}

interface ServicesStatic {
	ConfigurationStorageService(): ConfigurationStorageServiceStatic;
}
