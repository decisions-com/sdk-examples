/// <reference path="./datatypes._base.d.ts" />

interface AssociationServiceStatic {

	AddAssociationType(type: $D.Framework.ServiceLayer.Services.Association.AssociationType, successCallback: (data: { AddAssociationTypeResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddAssociationTypeResult: void }>;

	AddAssociationType(type: $D.Framework.ServiceLayer.Services.Association.AssociationType): { AddAssociationTypeResult: void };

	AddAssociationTypePromise(type: $D.Framework.ServiceLayer.Services.Association.AssociationType): Promise<void>;

	EnsureAssociationType(type: $D.Framework.ServiceLayer.Services.Association.AssociationType, successCallback: (data: { EnsureAssociationTypeResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ EnsureAssociationTypeResult: void }>;

	EnsureAssociationType(type: $D.Framework.ServiceLayer.Services.Association.AssociationType): { EnsureAssociationTypeResult: void };

	EnsureAssociationTypePromise(type: $D.Framework.ServiceLayer.Services.Association.AssociationType): Promise<void>;

	EnsureTypesAreRelated(firstType: $D.Framework.ServiceLayer.Services.Association.AssociationType, secondType: $D.Framework.ServiceLayer.Services.Association.AssociationType, successCallback: (data: { EnsureTypesAreRelatedResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ EnsureTypesAreRelatedResult: void }>;

	EnsureTypesAreRelated(firstType: $D.Framework.ServiceLayer.Services.Association.AssociationType, secondType: $D.Framework.ServiceLayer.Services.Association.AssociationType): { EnsureTypesAreRelatedResult: void };

	EnsureTypesAreRelatedPromise(firstType: $D.Framework.ServiceLayer.Services.Association.AssociationType, secondType: $D.Framework.ServiceLayer.Services.Association.AssociationType): Promise<void>;

	GetAssociationTypeById(typeId: string, successCallback: (data: { GetAssociationTypeByIdResult: $D.Framework.ServiceLayer.Services.Association.AssociationType }) => any, errorCallback?: () => any): JQueryPromise<{ GetAssociationTypeByIdResult: $D.Framework.ServiceLayer.Services.Association.AssociationType }>;

	GetAssociationTypeById(typeId: string): { GetAssociationTypeByIdResult: $D.Framework.ServiceLayer.Services.Association.AssociationType };

	GetAssociationTypeByIdPromise(typeId: string): Promise<$D.Framework.ServiceLayer.Services.Association.AssociationType>;

	GetAllAssociationTypes(successCallback: (data: { GetAllAssociationTypesResult: $D.Framework.ServiceLayer.Services.Association.AssociationType[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllAssociationTypesResult: $D.Framework.ServiceLayer.Services.Association.AssociationType[] }>;

	GetAllAssociationTypes(): { GetAllAssociationTypesResult: $D.Framework.ServiceLayer.Services.Association.AssociationType[] };

	GetAllAssociationTypesPromise(): Promise<$D.Framework.ServiceLayer.Services.Association.AssociationType[]>;

	GetAssociationType(fromTypeName: string, fromExtensionTypeName: string, toTypeName: string, toExtensionTypeName: string, successCallback: (data: { GetAssociationTypeResult: $D.Framework.ServiceLayer.Services.Association.AssociationType }) => any, errorCallback?: () => any): JQueryPromise<{ GetAssociationTypeResult: $D.Framework.ServiceLayer.Services.Association.AssociationType }>;

	GetAssociationType(fromTypeName: string, fromExtensionTypeName: string, toTypeName: string, toExtensionTypeName: string): { GetAssociationTypeResult: $D.Framework.ServiceLayer.Services.Association.AssociationType };

	GetAssociationTypePromise(fromTypeName: string, fromExtensionTypeName: string, toTypeName: string, toExtensionTypeName: string): Promise<$D.Framework.ServiceLayer.Services.Association.AssociationType>;

	GetAssociationTypesFrom(fromTypeName: string, fromExtensionTypeName: string, successCallback: (data: { GetAssociationTypesFromResult: $D.Framework.ServiceLayer.Services.Association.AssociationType[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAssociationTypesFromResult: $D.Framework.ServiceLayer.Services.Association.AssociationType[] }>;

	GetAssociationTypesFrom(fromTypeName: string, fromExtensionTypeName: string): { GetAssociationTypesFromResult: $D.Framework.ServiceLayer.Services.Association.AssociationType[] };

	GetAssociationTypesFromPromise(fromTypeName: string, fromExtensionTypeName: string): Promise<$D.Framework.ServiceLayer.Services.Association.AssociationType[]>;

	AddAssociation(association: $D.Framework.ServiceLayer.Services.Association.Association, successCallback: (data: { AddAssociationResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddAssociationResult: void }>;

	AddAssociation(association: $D.Framework.ServiceLayer.Services.Association.Association): { AddAssociationResult: void };

	AddAssociationPromise(association: $D.Framework.ServiceLayer.Services.Association.Association): Promise<void>;

	GetAssociationById(associationId: string, successCallback: (data: { GetAssociationByIdResult: $D.Framework.ServiceLayer.Services.Association.Association }) => any, errorCallback?: () => any): JQueryPromise<{ GetAssociationByIdResult: $D.Framework.ServiceLayer.Services.Association.Association }>;

	GetAssociationById(associationId: string): { GetAssociationByIdResult: $D.Framework.ServiceLayer.Services.Association.Association };

	GetAssociationByIdPromise(associationId: string): Promise<$D.Framework.ServiceLayer.Services.Association.Association>;

	GetAssociation(fromEntityId: string, toEntityId: string, typeId: string, successCallback: (data: { GetAssociationResult: $D.Framework.ServiceLayer.Services.Association.Association }) => any, errorCallback?: () => any): JQueryPromise<{ GetAssociationResult: $D.Framework.ServiceLayer.Services.Association.Association }>;

	GetAssociation(fromEntityId: string, toEntityId: string, typeId: string): { GetAssociationResult: $D.Framework.ServiceLayer.Services.Association.Association };

	GetAssociationPromise(fromEntityId: string, toEntityId: string, typeId: string): Promise<$D.Framework.ServiceLayer.Services.Association.Association>;

	GetAssociationsFromEntity(fromEntityId: string, successCallback: (data: { GetAssociationsFromEntityResult: $D.Framework.ServiceLayer.Services.Association.Association[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAssociationsFromEntityResult: $D.Framework.ServiceLayer.Services.Association.Association[] }>;

	GetAssociationsFromEntity(fromEntityId: string): { GetAssociationsFromEntityResult: $D.Framework.ServiceLayer.Services.Association.Association[] };

	GetAssociationsFromEntityPromise(fromEntityId: string): Promise<$D.Framework.ServiceLayer.Services.Association.Association[]>;

	GetAssociationsFromEntityAndTypeName(fromEntityId: string, typeName: string, successCallback: (data: { GetAssociationsFromEntityAndTypeNameResult: $D.Framework.ServiceLayer.Services.Association.Association[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAssociationsFromEntityAndTypeNameResult: $D.Framework.ServiceLayer.Services.Association.Association[] }>;

	GetAssociationsFromEntityAndTypeName(fromEntityId: string, typeName: string): { GetAssociationsFromEntityAndTypeNameResult: $D.Framework.ServiceLayer.Services.Association.Association[] };

	GetAssociationsFromEntityAndTypeNamePromise(fromEntityId: string, typeName: string): Promise<$D.Framework.ServiceLayer.Services.Association.Association[]>;

	DeleteAssociationById(associationId: string, successCallback: (data: { DeleteAssociationByIdResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteAssociationByIdResult: void }>;

	DeleteAssociationById(associationId: string): { DeleteAssociationByIdResult: void };

	DeleteAssociationByIdPromise(associationId: string): Promise<void>;

	DeleteAssociation(fromEntityId: string, toEntityId: string, typeId: string, successCallback: (data: { DeleteAssociationResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteAssociationResult: void }>;

	DeleteAssociation(fromEntityId: string, toEntityId: string, typeId: string): { DeleteAssociationResult: void };

	DeleteAssociationPromise(fromEntityId: string, toEntityId: string, typeId: string): Promise<void>;

	DeleteFolderLinkAssociation(folderEntityAssociationId: string, successCallback: (data: { DeleteFolderLinkAssociationResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteFolderLinkAssociationResult: void }>;

	DeleteFolderLinkAssociation(folderEntityAssociationId: string): { DeleteFolderLinkAssociationResult: void };

	DeleteFolderLinkAssociationPromise(folderEntityAssociationId: string): Promise<void>;

	AddFolderLinkAssociation(roleName: string, inverseRoleName: string, fromFolderId: string, toEntityId: string, successCallback: (data: { AddFolderLinkAssociationResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddFolderLinkAssociationResult: void }>;

	AddFolderLinkAssociation(roleName: string, inverseRoleName: string, fromFolderId: string, toEntityId: string): { AddFolderLinkAssociationResult: void };

	AddFolderLinkAssociationPromise(roleName: string, inverseRoleName: string, fromFolderId: string, toEntityId: string): Promise<void>;

	AddEntityAssociation(roleName: string, inverseRoleName: string, fromEntityId: string, toEntityId: string, successCallback: (data: { AddEntityAssociationResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddEntityAssociationResult: void }>;

	AddEntityAssociation(roleName: string, inverseRoleName: string, fromEntityId: string, toEntityId: string): { AddEntityAssociationResult: void };

	AddEntityAssociationPromise(roleName: string, inverseRoleName: string, fromEntityId: string, toEntityId: string): Promise<void>;

	AddEntityAssociationWithName(roleName: string, inverseRoleName: string, fromEntityId: string, toEntityId: string, entityName: string, inverseEntityName: string, successCallback: (data: { AddEntityAssociationWithNameResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddEntityAssociationWithNameResult: void }>;

	AddEntityAssociationWithName(roleName: string, inverseRoleName: string, fromEntityId: string, toEntityId: string, entityName: string, inverseEntityName: string): { AddEntityAssociationWithNameResult: void };

	AddEntityAssociationWithNamePromise(roleName: string, inverseRoleName: string, fromEntityId: string, toEntityId: string, entityName: string, inverseEntityName: string): Promise<void>;

	GetAssociationTypeByName(roleName: string, successCallback: (data: { GetAssociationTypeByNameResult: $D.Framework.ServiceLayer.Services.Association.AssociationType }) => any, errorCallback?: () => any): JQueryPromise<{ GetAssociationTypeByNameResult: $D.Framework.ServiceLayer.Services.Association.AssociationType }>;

	GetAssociationTypeByName(roleName: string): { GetAssociationTypeByNameResult: $D.Framework.ServiceLayer.Services.Association.AssociationType };

	GetAssociationTypeByNamePromise(roleName: string): Promise<$D.Framework.ServiceLayer.Services.Association.AssociationType>;

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
	AssociationService(): AssociationServiceStatic;
}
