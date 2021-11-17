/// <reference path="./datatypes._base.d.ts" />

interface DataStructureServiceStatic {

	AddDataStructure(data: $D.Framework.Design.DataStructure.DefinedDataStructure, successCallback: (data: { AddDataStructureResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddDataStructureResult: void }>;

	AddDataStructure(data: $D.Framework.Design.DataStructure.DefinedDataStructure): { AddDataStructureResult: void };

	AddDataStructurePromise(data: $D.Framework.Design.DataStructure.DefinedDataStructure): Promise<void>;

	UpdateDataStructure(data: $D.Framework.Design.DataStructure.DefinedDataStructure, successCallback: (data: { UpdateDataStructureResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateDataStructureResult: void }>;

	UpdateDataStructure(data: $D.Framework.Design.DataStructure.DefinedDataStructure): { UpdateDataStructureResult: void };

	UpdateDataStructurePromise(data: $D.Framework.Design.DataStructure.DefinedDataStructure): Promise<void>;

	AddEnumStructure(namespaceName: string, name: string, values: string[], folderID: string, successCallback: (data: { AddEnumStructureResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddEnumStructureResult: void }>;

	AddEnumStructure(namespaceName: string, name: string, values: string[], folderID: string): { AddEnumStructureResult: void };

	AddEnumStructurePromise(namespaceName: string, name: string, values: string[], folderID: string): Promise<void>;

	AddEnumStructureObj(data: $D.Framework.Design.DataStructure.EnumDataType, successCallback: (data: { AddEnumStructureObjResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddEnumStructureObjResult: void }>;

	AddEnumStructureObj(data: $D.Framework.Design.DataStructure.EnumDataType): { AddEnumStructureObjResult: void };

	AddEnumStructureObjPromise(data: $D.Framework.Design.DataStructure.EnumDataType): Promise<void>;

	ChangeEnumValues(namespaceName: string, name: string, values: string[], successCallback: (data: { ChangeEnumValuesResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ChangeEnumValuesResult: void }>;

	ChangeEnumValues(namespaceName: string, name: string, values: string[]): { ChangeEnumValuesResult: void };

	ChangeEnumValuesPromise(namespaceName: string, name: string, values: string[]): Promise<void>;

	SaveDataStructure(data: $D.Framework.Design.DataStructure.DefinedDataStructure, successCallback: (data: { SaveDataStructureResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveDataStructureResult: void }>;

	SaveDataStructure(data: $D.Framework.Design.DataStructure.DefinedDataStructure): { SaveDataStructureResult: void };

	SaveDataStructurePromise(data: $D.Framework.Design.DataStructure.DefinedDataStructure): Promise<void>;

	SaveAndGetDefinedDataStructure(data: $D.Framework.Design.DataStructure.DefinedDataStructure, successCallback: (data: { SaveAndGetDefinedDataStructureResult: $D.Framework.Design.DataStructure.DefinedDataStructure }) => any, errorCallback?: () => any): JQueryPromise<{ SaveAndGetDefinedDataStructureResult: $D.Framework.Design.DataStructure.DefinedDataStructure }>;

	SaveAndGetDefinedDataStructure(data: $D.Framework.Design.DataStructure.DefinedDataStructure): { SaveAndGetDefinedDataStructureResult: $D.Framework.Design.DataStructure.DefinedDataStructure };

	SaveAndGetDefinedDataStructurePromise(data: $D.Framework.Design.DataStructure.DefinedDataStructure): Promise<$D.Framework.Design.DataStructure.DefinedDataStructure>;

	SaveXmlDataStructure(editObject: $D.Framework.Design.DataStructure.XmlDataStructureEditObject, successCallback: (data: { SaveXmlDataStructureResult: $D.Framework.Design.DataStructure.XmlDataStructure }) => any, errorCallback?: () => any): JQueryPromise<{ SaveXmlDataStructureResult: $D.Framework.Design.DataStructure.XmlDataStructure }>;

	SaveXmlDataStructure(editObject: $D.Framework.Design.DataStructure.XmlDataStructureEditObject): { SaveXmlDataStructureResult: $D.Framework.Design.DataStructure.XmlDataStructure };

	SaveXmlDataStructurePromise(editObject: $D.Framework.Design.DataStructure.XmlDataStructureEditObject): Promise<$D.Framework.Design.DataStructure.XmlDataStructure>;

	SaveXsdDataStructure(editObject: $D.Framework.Design.DataStructure.XSDDataStructureEditObject, successCallback: (data: { SaveXsdDataStructureResult: $D.Framework.Design.DataStructure.XSDDataStructure }) => any, errorCallback?: () => any): JQueryPromise<{ SaveXsdDataStructureResult: $D.Framework.Design.DataStructure.XSDDataStructure }>;

	SaveXsdDataStructure(editObject: $D.Framework.Design.DataStructure.XSDDataStructureEditObject): { SaveXsdDataStructureResult: $D.Framework.Design.DataStructure.XSDDataStructure };

	SaveXsdDataStructurePromise(editObject: $D.Framework.Design.DataStructure.XSDDataStructureEditObject): Promise<$D.Framework.Design.DataStructure.XSDDataStructure>;

	SaveJsonDataStructure(editObject: $D.Framework.Design.DataStructure.JsonDataStructureEditObject, successCallback: (data: { SaveJsonDataStructureResult: $D.Framework.Design.DataStructure.JsonDataStructure }) => any, errorCallback?: () => any): JQueryPromise<{ SaveJsonDataStructureResult: $D.Framework.Design.DataStructure.JsonDataStructure }>;

	SaveJsonDataStructure(editObject: $D.Framework.Design.DataStructure.JsonDataStructureEditObject): { SaveJsonDataStructureResult: $D.Framework.Design.DataStructure.JsonDataStructure };

	SaveJsonDataStructurePromise(editObject: $D.Framework.Design.DataStructure.JsonDataStructureEditObject): Promise<$D.Framework.Design.DataStructure.JsonDataStructure>;

	SaveEnumStructure(enumType: $D.Framework.Design.DataStructure.EnumDataType, successCallback: (data: { SaveEnumStructureResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveEnumStructureResult: void }>;

	SaveEnumStructure(enumType: $D.Framework.Design.DataStructure.EnumDataType): { SaveEnumStructureResult: void };

	SaveEnumStructurePromise(enumType: $D.Framework.Design.DataStructure.EnumDataType): Promise<void>;

	SaveAndGetEnumStructure(enumType: $D.Framework.Design.DataStructure.EnumDataType, successCallback: (data: { SaveAndGetEnumStructureResult: $D.Framework.Design.DataStructure.EnumDataType }) => any, errorCallback?: () => any): JQueryPromise<{ SaveAndGetEnumStructureResult: $D.Framework.Design.DataStructure.EnumDataType }>;

	SaveAndGetEnumStructure(enumType: $D.Framework.Design.DataStructure.EnumDataType): { SaveAndGetEnumStructureResult: $D.Framework.Design.DataStructure.EnumDataType };

	SaveAndGetEnumStructurePromise(enumType: $D.Framework.Design.DataStructure.EnumDataType): Promise<$D.Framework.Design.DataStructure.EnumDataType>;

	RemoveDataStructureByName(fullname: string, successCallback: (data: { RemoveDataStructureByNameResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveDataStructureByNameResult: void }>;

	RemoveDataStructureByName(fullname: string): { RemoveDataStructureByNameResult: void };

	RemoveDataStructureByNamePromise(fullname: string): Promise<void>;

	RemoveDataStructureByNamespaceAndName(namespaceName: string, name: string, successCallback: (data: { RemoveDataStructureByNamespaceAndNameResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveDataStructureByNamespaceAndNameResult: void }>;

	RemoveDataStructureByNamespaceAndName(namespaceName: string, name: string): { RemoveDataStructureByNamespaceAndNameResult: void };

	RemoveDataStructureByNamespaceAndNamePromise(namespaceName: string, name: string): Promise<void>;

	GetDataStructureByName(fullName: string, successCallback: (data: { GetDataStructureByNameResult: $D.Framework.Design.DataStructure.AbstractDataType }) => any, errorCallback?: () => any): JQueryPromise<{ GetDataStructureByNameResult: $D.Framework.Design.DataStructure.AbstractDataType }>;

	GetDataStructureByName(fullName: string): { GetDataStructureByNameResult: $D.Framework.Design.DataStructure.AbstractDataType };

	GetDataStructureByNamePromise(fullName: string): Promise<$D.Framework.Design.DataStructure.AbstractDataType>;

	GetDataStructureByNamespaceAndName(namespaceName: string, name: string, successCallback: (data: { GetDataStructureByNamespaceAndNameResult: $D.Framework.Design.DataStructure.AbstractDataType }) => any, errorCallback?: () => any): JQueryPromise<{ GetDataStructureByNamespaceAndNameResult: $D.Framework.Design.DataStructure.AbstractDataType }>;

	GetDataStructureByNamespaceAndName(namespaceName: string, name: string): { GetDataStructureByNamespaceAndNameResult: $D.Framework.Design.DataStructure.AbstractDataType };

	GetDataStructureByNamespaceAndNamePromise(namespaceName: string, name: string): Promise<$D.Framework.Design.DataStructure.AbstractDataType>;

	RegisterNativeType(namespaceName: string, name: string, folderID: string, successCallback: (data: { RegisterNativeTypeResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RegisterNativeTypeResult: void }>;

	RegisterNativeType(namespaceName: string, name: string, folderID: string): { RegisterNativeTypeResult: void };

	RegisterNativeTypePromise(namespaceName: string, name: string, folderID: string): Promise<void>;

	RegisterNativeTypeWithClientImplementation(namespaceName: string, name: string, folderID: string, successCallback: (data: { RegisterNativeTypeWithClientImplementationResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RegisterNativeTypeWithClientImplementationResult: void }>;

	RegisterNativeTypeWithClientImplementation(namespaceName: string, name: string, folderID: string): { RegisterNativeTypeWithClientImplementationResult: void };

	RegisterNativeTypeWithClientImplementationPromise(namespaceName: string, name: string, folderID: string): Promise<void>;

	ListAllDataStructures(successCallback: (data: { ListAllDataStructuresResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ ListAllDataStructuresResult: string[] }>;

	ListAllDataStructures(): { ListAllDataStructuresResult: string[] };

	ListAllDataStructuresPromise(): Promise<string[]>;

	ListAllDataStructuresForEditor(successCallback: (data: { ListAllDataStructuresForEditorResult: $D.Framework.Design.DataStructure.DataTypeInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ ListAllDataStructuresForEditorResult: $D.Framework.Design.DataStructure.DataTypeInfo[] }>;

	ListAllDataStructuresForEditor(): { ListAllDataStructuresForEditorResult: $D.Framework.Design.DataStructure.DataTypeInfo[] };

	ListAllDataStructuresForEditorPromise(): Promise<$D.Framework.Design.DataStructure.DataTypeInfo[]>;

	ListAllDataStructuresInNamespace(namespaceName: string, successCallback: (data: { ListAllDataStructuresInNamespaceResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ ListAllDataStructuresInNamespaceResult: string[] }>;

	ListAllDataStructuresInNamespace(namespaceName: string): { ListAllDataStructuresInNamespaceResult: string[] };

	ListAllDataStructuresInNamespacePromise(namespaceName: string): Promise<string[]>;

	FindDataStructures(searchString: string, successCallback: (data: { FindDataStructuresResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ FindDataStructuresResult: string[] }>;

	FindDataStructures(searchString: string): { FindDataStructuresResult: string[] };

	FindDataStructuresPromise(searchString: string): Promise<string[]>;

	GetChildDataStructuresByDecisionsType(type: $D.Framework.Design.Flow.Mapping.DecisionsDefinedType, successCallback: (data: { GetChildDataStructuresByDecisionsTypeResult: $D.Framework.Design.DataStructure.ContainedDataInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetChildDataStructuresByDecisionsTypeResult: $D.Framework.Design.DataStructure.ContainedDataInfo[] }>;

	GetChildDataStructuresByDecisionsType(type: $D.Framework.Design.Flow.Mapping.DecisionsDefinedType): { GetChildDataStructuresByDecisionsTypeResult: $D.Framework.Design.DataStructure.ContainedDataInfo[] };

	GetChildDataStructuresByDecisionsTypePromise(type: $D.Framework.Design.Flow.Mapping.DecisionsDefinedType): Promise<$D.Framework.Design.DataStructure.ContainedDataInfo[]>;

	GetChildDataStructuresByName(fullName: string, successCallback: (data: { GetChildDataStructuresByNameResult: $D.Framework.Design.DataStructure.ContainedDataInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetChildDataStructuresByNameResult: $D.Framework.Design.DataStructure.ContainedDataInfo[] }>;

	GetChildDataStructuresByName(fullName: string): { GetChildDataStructuresByNameResult: $D.Framework.Design.DataStructure.ContainedDataInfo[] };

	GetChildDataStructuresByNamePromise(fullName: string): Promise<$D.Framework.Design.DataStructure.ContainedDataInfo[]>;

	GetChildDataStructuresByNamespaceAndName(namespaceName: string, name: string, successCallback: (data: { GetChildDataStructuresByNamespaceAndNameResult: $D.Framework.Design.DataStructure.ContainedDataInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetChildDataStructuresByNamespaceAndNameResult: $D.Framework.Design.DataStructure.ContainedDataInfo[] }>;

	GetChildDataStructuresByNamespaceAndName(namespaceName: string, name: string): { GetChildDataStructuresByNamespaceAndNameResult: $D.Framework.Design.DataStructure.ContainedDataInfo[] };

	GetChildDataStructuresByNamespaceAndNamePromise(namespaceName: string, name: string): Promise<$D.Framework.Design.DataStructure.ContainedDataInfo[]>;

	GetAllUnRegisteredDotNetTypes(successCallback: (data: { GetAllUnRegisteredDotNetTypesResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllUnRegisteredDotNetTypesResult: string[] }>;

	GetAllUnRegisteredDotNetTypes(): { GetAllUnRegisteredDotNetTypesResult: string[] };

	GetAllUnRegisteredDotNetTypesPromise(): Promise<string[]>;

	GetAllFolderEntityTypes(successCallback: (data: { GetAllFolderEntityTypesResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllFolderEntityTypesResult: string[] }>;

	GetAllFolderEntityTypes(): { GetAllFolderEntityTypesResult: string[] };

	GetAllFolderEntityTypesPromise(): Promise<string[]>;

	GetEnumValuesByName(fullName: string, successCallback: (data: { GetEnumValuesByNameResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetEnumValuesByNameResult: string[] }>;

	GetEnumValuesByName(fullName: string): { GetEnumValuesByNameResult: string[] };

	GetEnumValuesByNamePromise(fullName: string): Promise<string[]>;

	GetEnumValuesByNamespaceAndName(namespaceName: string, name: string, successCallback: (data: { GetEnumValuesByNamespaceAndNameResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetEnumValuesByNamespaceAndNameResult: string[] }>;

	GetEnumValuesByNamespaceAndName(namespaceName: string, name: string): { GetEnumValuesByNamespaceAndNameResult: string[] };

	GetEnumValuesByNamespaceAndNamePromise(namespaceName: string, name: string): Promise<string[]>;

	GenerateStubbedSolutionFromDataStructure(fullName: string, containedTypesToGenerate: string[], includeWindowsAction: boolean, includeSilverLightAction: boolean, inlcudeWin32Action: boolean, successCallback: (data: { GenerateStubbedSolutionFromDataStructureResult: $D.Framework.Data.DataTypes.FileData }) => any, errorCallback?: () => any): JQueryPromise<{ GenerateStubbedSolutionFromDataStructureResult: $D.Framework.Data.DataTypes.FileData }>;

	GenerateStubbedSolutionFromDataStructure(fullName: string, containedTypesToGenerate: string[], includeWindowsAction: boolean, includeSilverLightAction: boolean, inlcudeWin32Action: boolean): { GenerateStubbedSolutionFromDataStructureResult: $D.Framework.Data.DataTypes.FileData };

	GenerateStubbedSolutionFromDataStructurePromise(fullName: string, containedTypesToGenerate: string[], includeWindowsAction: boolean, includeSilverLightAction: boolean, inlcudeWin32Action: boolean): Promise<$D.Framework.Data.DataTypes.FileData>;

	GetDefinedDataStructureValidationIssues(dataStructure: $D.Framework.Design.DataStructure.DefinedDataStructure, successCallback: (data: { GetDefinedDataStructureValidationIssuesResult: $D.Framework.ValidationIssue[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetDefinedDataStructureValidationIssuesResult: $D.Framework.ValidationIssue[] }>;

	GetDefinedDataStructureValidationIssues(dataStructure: $D.Framework.Design.DataStructure.DefinedDataStructure): { GetDefinedDataStructureValidationIssuesResult: $D.Framework.ValidationIssue[] };

	GetDefinedDataStructureValidationIssuesPromise(dataStructure: $D.Framework.Design.DataStructure.DefinedDataStructure): Promise<$D.Framework.ValidationIssue[]>;

	GetDecisionsTypeByFullName(fullName: string, successCallback: (data: { GetDecisionsTypeByFullNameResult: $D.Framework.Design.Flow.Mapping.DecisionsType }) => any, errorCallback?: () => any): JQueryPromise<{ GetDecisionsTypeByFullNameResult: $D.Framework.Design.Flow.Mapping.DecisionsType }>;

	GetDecisionsTypeByFullName(fullName: string): { GetDecisionsTypeByFullNameResult: $D.Framework.Design.Flow.Mapping.DecisionsType };

	GetDecisionsTypeByFullNamePromise(fullName: string): Promise<$D.Framework.Design.Flow.Mapping.DecisionsType>;

	GetDataStructureByExtensionFolderId(extentionFolderId: string, successCallback: (data: { GetDataStructureByExtensionFolderIdResult: $D.Framework.Design.DataStructure.CaseEditor.DefinedDataStructureDto }) => any, errorCallback?: () => any): JQueryPromise<{ GetDataStructureByExtensionFolderIdResult: $D.Framework.Design.DataStructure.CaseEditor.DefinedDataStructureDto }>;

	GetDataStructureByExtensionFolderId(extentionFolderId: string): { GetDataStructureByExtensionFolderIdResult: $D.Framework.Design.DataStructure.CaseEditor.DefinedDataStructureDto };

	GetDataStructureByExtensionFolderIdPromise(extentionFolderId: string): Promise<$D.Framework.Design.DataStructure.CaseEditor.DefinedDataStructureDto>;

	GetDecisionsTypeFullName(type: $D.Framework.Design.Flow.Mapping.DecisionsType, successCallback: (data: { GetDecisionsTypeFullNameResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetDecisionsTypeFullNameResult: string }>;

	GetDecisionsTypeFullName(type: $D.Framework.Design.Flow.Mapping.DecisionsType): { GetDecisionsTypeFullNameResult: string };

	GetDecisionsTypeFullNamePromise(type: $D.Framework.Design.Flow.Mapping.DecisionsType): Promise<string>;

	GetDefinedDataStructureInfo(fullName: string, successCallback: (data: { GetDefinedDataStructureInfoResult: $D.Framework.Design.DataStructure.DefinedTypeInfo }) => any, errorCallback?: () => any): JQueryPromise<{ GetDefinedDataStructureInfoResult: $D.Framework.Design.DataStructure.DefinedTypeInfo }>;

	GetDefinedDataStructureInfo(fullName: string): { GetDefinedDataStructureInfoResult: $D.Framework.Design.DataStructure.DefinedTypeInfo };

	GetDefinedDataStructureInfoPromise(fullName: string): Promise<$D.Framework.Design.DataStructure.DefinedTypeInfo>;

	Exists(fullName: string, successCallback: (data: { ExistsResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ ExistsResult: boolean }>;

	Exists(fullName: string): { ExistsResult: boolean };

	ExistsPromise(fullName: string): Promise<boolean>;

	GetDecisionsSimpleTypesAndUserDefineTypeInFolder(folderId: string, successCallback: (data: { GetDecisionsSimpleTypesAndUserDefineTypeInFolderResult: $D.Framework.Design.Flow.Mapping.DecisionsType[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetDecisionsSimpleTypesAndUserDefineTypeInFolderResult: $D.Framework.Design.Flow.Mapping.DecisionsType[] }>;

	GetDecisionsSimpleTypesAndUserDefineTypeInFolder(folderId: string): { GetDecisionsSimpleTypesAndUserDefineTypeInFolderResult: $D.Framework.Design.Flow.Mapping.DecisionsType[] };

	GetDecisionsSimpleTypesAndUserDefineTypeInFolderPromise(folderId: string): Promise<$D.Framework.Design.Flow.Mapping.DecisionsType[]>;

	GetXmlDataDtructureTypeFromFolder(folderId: string, successCallback: (data: { GetXmlDataDtructureTypeFromFolderResult: $D.Framework.Design.Flow.Mapping.DecisionsType[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetXmlDataDtructureTypeFromFolderResult: $D.Framework.Design.Flow.Mapping.DecisionsType[] }>;

	GetXmlDataDtructureTypeFromFolder(folderId: string): { GetXmlDataDtructureTypeFromFolderResult: $D.Framework.Design.Flow.Mapping.DecisionsType[] };

	GetXmlDataDtructureTypeFromFolderPromise(folderId: string): Promise<$D.Framework.Design.Flow.Mapping.DecisionsType[]>;

	GetDecisionsTypesFromXmlDataStructure(xmlStructure: $D.Framework.Design.DataStructure.XmlDataStructure, successCallback: (data: { GetDecisionsTypesFromXmlDataStructureResult: $D.Framework.Design.Flow.Mapping.DecisionsType[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetDecisionsTypesFromXmlDataStructureResult: $D.Framework.Design.Flow.Mapping.DecisionsType[] }>;

	GetDecisionsTypesFromXmlDataStructure(xmlStructure: $D.Framework.Design.DataStructure.XmlDataStructure): { GetDecisionsTypesFromXmlDataStructureResult: $D.Framework.Design.Flow.Mapping.DecisionsType[] };

	GetDecisionsTypesFromXmlDataStructurePromise(xmlStructure: $D.Framework.Design.DataStructure.XmlDataStructure): Promise<$D.Framework.Design.Flow.Mapping.DecisionsType[]>;

	GetDecisionsTypesFromXsdDataStructure(xsdStructure: $D.Framework.Design.DataStructure.XSDDataStructure, successCallback: (data: { GetDecisionsTypesFromXsdDataStructureResult: $D.Framework.Design.Flow.Mapping.DecisionsType[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetDecisionsTypesFromXsdDataStructureResult: $D.Framework.Design.Flow.Mapping.DecisionsType[] }>;

	GetDecisionsTypesFromXsdDataStructure(xsdStructure: $D.Framework.Design.DataStructure.XSDDataStructure): { GetDecisionsTypesFromXsdDataStructureResult: $D.Framework.Design.Flow.Mapping.DecisionsType[] };

	GetDecisionsTypesFromXsdDataStructurePromise(xsdStructure: $D.Framework.Design.DataStructure.XSDDataStructure): Promise<$D.Framework.Design.Flow.Mapping.DecisionsType[]>;

	GetDecisionsTypesFromJsonDataStructure(jsonDataStructure: $D.Framework.Design.DataStructure.JsonDataStructure, successCallback: (data: { GetDecisionsTypesFromJsonDataStructureResult: $D.Framework.Design.Flow.Mapping.DecisionsType[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetDecisionsTypesFromJsonDataStructureResult: $D.Framework.Design.Flow.Mapping.DecisionsType[] }>;

	GetDecisionsTypesFromJsonDataStructure(jsonDataStructure: $D.Framework.Design.DataStructure.JsonDataStructure): { GetDecisionsTypesFromJsonDataStructureResult: $D.Framework.Design.Flow.Mapping.DecisionsType[] };

	GetDecisionsTypesFromJsonDataStructurePromise(jsonDataStructure: $D.Framework.Design.DataStructure.JsonDataStructure): Promise<$D.Framework.Design.Flow.Mapping.DecisionsType[]>;

	GetDecisionsTypesFromDefinedDataStructure(ddStructure: $D.Framework.Design.DataStructure.DefinedDataStructure, successCallback: (data: { GetDecisionsTypesFromDefinedDataStructureResult: $D.Framework.Design.Flow.Mapping.DecisionsType[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetDecisionsTypesFromDefinedDataStructureResult: $D.Framework.Design.Flow.Mapping.DecisionsType[] }>;

	GetDecisionsTypesFromDefinedDataStructure(ddStructure: $D.Framework.Design.DataStructure.DefinedDataStructure): { GetDecisionsTypesFromDefinedDataStructureResult: $D.Framework.Design.Flow.Mapping.DecisionsType[] };

	GetDecisionsTypesFromDefinedDataStructurePromise(ddStructure: $D.Framework.Design.DataStructure.DefinedDataStructure): Promise<$D.Framework.Design.Flow.Mapping.DecisionsType[]>;

	GetDecisionsTypesFromEnumDataStructure(enumStructure: $D.Framework.Design.DataStructure.EnumDataType, successCallback: (data: { GetDecisionsTypesFromEnumDataStructureResult: $D.Framework.Design.Flow.Mapping.DecisionsType[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetDecisionsTypesFromEnumDataStructureResult: $D.Framework.Design.Flow.Mapping.DecisionsType[] }>;

	GetDecisionsTypesFromEnumDataStructure(enumStructure: $D.Framework.Design.DataStructure.EnumDataType): { GetDecisionsTypesFromEnumDataStructureResult: $D.Framework.Design.Flow.Mapping.DecisionsType[] };

	GetDecisionsTypesFromEnumDataStructurePromise(enumStructure: $D.Framework.Design.DataStructure.EnumDataType): Promise<$D.Framework.Design.Flow.Mapping.DecisionsType[]>;

	GetDecisionsTypeFriendlyName(type: $D.Framework.Design.Flow.Mapping.DecisionsType, successCallback: (data: { GetDecisionsTypeFriendlyNameResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetDecisionsTypeFriendlyNameResult: string }>;

	GetDecisionsTypeFriendlyName(type: $D.Framework.Design.Flow.Mapping.DecisionsType): { GetDecisionsTypeFriendlyNameResult: string };

	GetDecisionsTypeFriendlyNamePromise(type: $D.Framework.Design.Flow.Mapping.DecisionsType): Promise<string>;

	GetDecisionsTypeFriendlyNames(successCallback: (data: { GetDecisionsTypeFriendlyNamesResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetDecisionsTypeFriendlyNamesResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	GetDecisionsTypeFriendlyNames(): { GetDecisionsTypeFriendlyNamesResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	GetDecisionsTypeFriendlyNamesPromise(): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	RemoveDataMemberById(sessionId: string, id: string, successCallback: (data: { RemoveDataMemberByIdResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveDataMemberByIdResult: any }>;

	RemoveDataMemberById(sessionId: string, id: string): { RemoveDataMemberByIdResult: any };

	RemoveDataMemberByIdPromise(sessionId: string, id: string): Promise<any>;

	CreateDefinedDataStructure(folderId: string, dataStructureTypeName: string, successCallback: (data: { CreateDefinedDataStructureResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ CreateDefinedDataStructureResult: any }>;

	CreateDefinedDataStructure(folderId: string, dataStructureTypeName: string): { CreateDefinedDataStructureResult: any };

	CreateDefinedDataStructurePromise(folderId: string, dataStructureTypeName: string): Promise<any>;

	CreateOwnedDefinedDataStructure(sessionId: string, isEnumList: boolean, successCallback: (data: { CreateOwnedDefinedDataStructureResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ CreateOwnedDefinedDataStructureResult: any }>;

	CreateOwnedDefinedDataStructure(sessionId: string, isEnumList: boolean): { CreateOwnedDefinedDataStructureResult: any };

	CreateOwnedDefinedDataStructurePromise(sessionId: string, isEnumList: boolean): Promise<any>;

	EditDefinedDataStructure(sessionId: string, entityType: string, successCallback: (data: { EditDefinedDataStructureResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ EditDefinedDataStructureResult: any }>;

	EditDefinedDataStructure(sessionId: string, entityType: string): { EditDefinedDataStructureResult: any };

	EditDefinedDataStructurePromise(sessionId: string, entityType: string): Promise<any>;

	EditDefinedDataStructureByName(id: string, entityType: string, successCallback: (data: { EditDefinedDataStructureByNameResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ EditDefinedDataStructureByNameResult: any }>;

	EditDefinedDataStructureByName(id: string, entityType: string): { EditDefinedDataStructureByNameResult: any };

	EditDefinedDataStructureByNamePromise(id: string, entityType: string): Promise<any>;

	CommitDataStructureEditSession(sessionId: string, successCallback: (data: { CommitDataStructureEditSessionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CommitDataStructureEditSessionResult: void }>;

	CommitDataStructureEditSession(sessionId: string): { CommitDataStructureEditSessionResult: void };

	CommitDataStructureEditSessionPromise(sessionId: string): Promise<void>;

	CancelDefinedDataStructureEdit(sessionId: string, successCallback: (data: { CancelDefinedDataStructureEditResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CancelDefinedDataStructureEditResult: void }>;

	CancelDefinedDataStructureEdit(sessionId: string): { CancelDefinedDataStructureEditResult: void };

	CancelDefinedDataStructureEditPromise(sessionId: string): Promise<void>;

	CancelDataStructureOwnedSessionEdit(sessionId: string, successCallback: (data: { CancelDataStructureOwnedSessionEditResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CancelDataStructureOwnedSessionEditResult: void }>;

	CancelDataStructureOwnedSessionEdit(sessionId: string): { CancelDataStructureOwnedSessionEditResult: void };

	CancelDataStructureOwnedSessionEditPromise(sessionId: string): Promise<void>;

	ChangeDataStructureName(sessionId: string, newName: string, successCallback: (data: { ChangeDataStructureNameResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ChangeDataStructureNameResult: void }>;

	ChangeDataStructureName(sessionId: string, newName: string): { ChangeDataStructureNameResult: void };

	ChangeDataStructureNamePromise(sessionId: string, newName: string): Promise<void>;

	AddDataStructureMember(sessionId: string, name: string, successCallback: (data: { AddDataStructureMemberResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ AddDataStructureMemberResult: any }>;

	AddDataStructureMember(sessionId: string, name: string): { AddDataStructureMemberResult: any };

	AddDataStructureMemberPromise(sessionId: string, name: string): Promise<any>;

	AddNewMember(sessionId: string, name: string, type: string, successCallback: (data: { AddNewMemberResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ AddNewMemberResult: any }>;

	AddNewMember(sessionId: string, name: string, type: string): { AddNewMemberResult: any };

	AddNewMemberPromise(sessionId: string, name: string, type: string): Promise<any>;

	GetEditContextForMember(sessionId: string, id: string, successCallback: (data: { GetEditContextForMemberResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetEditContextForMemberResult: string }>;

	GetEditContextForMember(sessionId: string, id: string): { GetEditContextForMemberResult: string };

	GetEditContextForMemberPromise(sessionId: string, id: string): Promise<string>;

	GetEditorIdForMember(sessionId: string, id: string, successCallback: (data: { GetEditorIdForMemberResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetEditorIdForMemberResult: string }>;

	GetEditorIdForMember(sessionId: string, id: string): { GetEditorIdForMemberResult: string };

	GetEditorIdForMemberPromise(sessionId: string, id: string): Promise<string>;

	GetEditContextForQuickAdd(isEnumDataType: boolean, successCallback: (data: { GetEditContextForQuickAddResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetEditContextForQuickAddResult: string }>;

	GetEditContextForQuickAdd(isEnumDataType: boolean): { GetEditContextForQuickAddResult: string };

	GetEditContextForQuickAddPromise(isEnumDataType: boolean): Promise<string>;

	SubmitDataMemberQuickAddValues(editingContextId: string, sessionId: string, isEnumList: boolean, successCallback: (data: { SubmitDataMemberQuickAddValuesResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ SubmitDataMemberQuickAddValuesResult: any }>;

	SubmitDataMemberQuickAddValues(editingContextId: string, sessionId: string, isEnumList: boolean): { SubmitDataMemberQuickAddValuesResult: any };

	SubmitDataMemberQuickAddValuesPromise(editingContextId: string, sessionId: string, isEnumList: boolean): Promise<any>;

	GetDataStructureEditContext(sessionId: string, successCallback: (data: { GetDataStructureEditContextResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetDataStructureEditContextResult: string }>;

	GetDataStructureEditContext(sessionId: string): { GetDataStructureEditContextResult: string };

	GetDataStructureEditContextPromise(sessionId: string): Promise<string>;

	GetDataStructureEditorId(sessionId: string, successCallback: (data: { GetDataStructureEditorIdResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetDataStructureEditorIdResult: string }>;

	GetDataStructureEditorId(sessionId: string): { GetDataStructureEditorIdResult: string };

	GetDataStructureEditorIdPromise(sessionId: string): Promise<string>;

	SetDataMemberName(sessionId: string, id: string, name: string, successCallback: (data: { SetDataMemberNameResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ SetDataMemberNameResult: any }>;

	SetDataMemberName(sessionId: string, id: string, name: string): { SetDataMemberNameResult: any };

	SetDataMemberNamePromise(sessionId: string, id: string, name: string): Promise<any>;

	SetEnumDataTypeValue(sessionId: string, id: string, values: string[], successCallback: (data: { SetEnumDataTypeValueResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ SetEnumDataTypeValueResult: any }>;

	SetEnumDataTypeValue(sessionId: string, id: string, values: string[]): { SetEnumDataTypeValueResult: any };

	SetEnumDataTypeValuePromise(sessionId: string, id: string, values: string[]): Promise<any>;

	SetValueListDataType(sessionId: string, value: string, successCallback: (data: { SetValueListDataTypeResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ SetValueListDataTypeResult: any }>;

	SetValueListDataType(sessionId: string, value: string): { SetValueListDataTypeResult: any };

	SetValueListDataTypePromise(sessionId: string, value: string): Promise<any>;

	SetDataMemberType(sessionId: string, id: string, value: string, successCallback: (data: { SetDataMemberTypeResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ SetDataMemberTypeResult: any }>;

	SetDataMemberType(sessionId: string, id: string, value: string): { SetDataMemberTypeResult: any };

	SetDataMemberTypePromise(sessionId: string, id: string, value: string): Promise<any>;

	SetDataMemberComplexType(sessionId: string, id: string, value: string, successCallback: (data: { SetDataMemberComplexTypeResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ SetDataMemberComplexTypeResult: any }>;

	SetDataMemberComplexType(sessionId: string, id: string, value: string): { SetDataMemberComplexTypeResult: any };

	SetDataMemberComplexTypePromise(sessionId: string, id: string, value: string): Promise<any>;

	SetDataMemberIsList(sessionId: string, id: string, isList: boolean, successCallback: (data: { SetDataMemberIsListResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ SetDataMemberIsListResult: any }>;

	SetDataMemberIsList(sessionId: string, id: string, isList: boolean): { SetDataMemberIsListResult: any };

	SetDataMemberIsListPromise(sessionId: string, id: string, isList: boolean): Promise<any>;

	CheckDataStructureValidationIssues(sessionId: string, successCallback: (data: { CheckDataStructureValidationIssuesResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ CheckDataStructureValidationIssuesResult: any }>;

	CheckDataStructureValidationIssues(sessionId: string): { CheckDataStructureValidationIssuesResult: any };

	CheckDataStructureValidationIssuesPromise(sessionId: string): Promise<any>;

	GetAllValidationIssuesForDataStructure(sessionId: string[], successCallback: (data: { GetAllValidationIssuesForDataStructureResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllValidationIssuesForDataStructureResult: any }>;

	GetAllValidationIssuesForDataStructure(sessionId: string[]): { GetAllValidationIssuesForDataStructureResult: any };

	GetAllValidationIssuesForDataStructurePromise(sessionId: string[]): Promise<any>;

	CheckDataMemberValidationIssues(sessionId: string, id: string, successCallback: (data: { CheckDataMemberValidationIssuesResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ CheckDataMemberValidationIssuesResult: any }>;

	CheckDataMemberValidationIssues(sessionId: string, id: string): { CheckDataMemberValidationIssuesResult: any };

	CheckDataMemberValidationIssuesPromise(sessionId: string, id: string): Promise<any>;

	SetDataStructureName(sessionId: string, name: string, successCallback: (data: { SetDataStructureNameResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ SetDataStructureNameResult: any }>;

	SetDataStructureName(sessionId: string, name: string): { SetDataStructureNameResult: any };

	SetDataStructureNamePromise(sessionId: string, name: string): Promise<any>;

	SetDataStructureNamespace(sessionId: string, dsNamespace: string, successCallback: (data: { SetDataStructureNamespaceResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ SetDataStructureNamespaceResult: any }>;

	SetDataStructureNamespace(sessionId: string, dsNamespace: string): { SetDataStructureNamespaceResult: any };

	SetDataStructureNamespacePromise(sessionId: string, dsNamespace: string): Promise<any>;

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
	DataStructureService(): DataStructureServiceStatic;
}
