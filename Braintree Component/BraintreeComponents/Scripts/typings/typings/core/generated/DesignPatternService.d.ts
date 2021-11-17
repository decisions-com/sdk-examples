/// <reference path="./datatypes._base.d.ts" />

interface DesignPatternServiceStatic {

	CreateElementRegistration(designPatternId: string, folderId: string, elementType: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType, newName: string, successCallback: (data: { CreateElementRegistrationResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.NewRegistrationResult }) => any, errorCallback?: () => any): JQueryPromise<{ CreateElementRegistrationResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.NewRegistrationResult }>;

	CreateElementRegistration(designPatternId: string, folderId: string, elementType: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType, newName: string): { CreateElementRegistrationResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.NewRegistrationResult };

	CreateElementRegistrationPromise(designPatternId: string, folderId: string, elementType: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType, newName: string): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.NewRegistrationResult>;

	GetAllDto(folderId: string, successCallback: (data: { GetAllDtoResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.DeclaredInterfaceDto[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllDtoResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.DeclaredInterfaceDto[] }>;

	GetAllDto(folderId: string): { GetAllDtoResult: $D.Framework.ServiceLayer.Services.ConfigurationStorage.DeclaredInterfaceDto[] };

	GetAllDtoPromise(folderId: string): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.DeclaredInterfaceDto[]>;

	ApplyDesignPattern(registrationId: string, patternId: string, successCallback: (data: { ApplyDesignPatternResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ApplyDesignPatternResult: void }>;

	ApplyDesignPattern(registrationId: string, patternId: string): { ApplyDesignPatternResult: void };

	ApplyDesignPatternPromise(registrationId: string, patternId: string): Promise<void>;

	UnApplyDesignPattern(registrationId: string, successCallback: (data: { UnApplyDesignPatternResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UnApplyDesignPatternResult: void }>;

	UnApplyDesignPattern(registrationId: string): { UnApplyDesignPatternResult: void };

	UnApplyDesignPatternPromise(registrationId: string): Promise<void>;

	ProcessCreateFromDesignPatternAction(actionUniqueName: string, elementName: string, successCallback: (data: { ProcessCreateFromDesignPatternActionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessCreateFromDesignPatternActionResult: void }>;

	ProcessCreateFromDesignPatternAction(actionUniqueName: string, elementName: string): { ProcessCreateFromDesignPatternActionResult: void };

	ProcessCreateFromDesignPatternActionPromise(actionUniqueName: string, elementName: string): Promise<void>;

	GetCreateFromDesignPatternIssues(actionUniqueName: string, elementName: string, successCallback: (data: { GetCreateFromDesignPatternIssuesResult: $D.Framework.ValidationIssue[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetCreateFromDesignPatternIssuesResult: $D.Framework.ValidationIssue[] }>;

	GetCreateFromDesignPatternIssues(actionUniqueName: string, elementName: string): { GetCreateFromDesignPatternIssuesResult: $D.Framework.ValidationIssue[] };

	GetCreateFromDesignPatternIssuesPromise(actionUniqueName: string, elementName: string): Promise<$D.Framework.ValidationIssue[]>;

	GetElementRegistrationIssues(elementName: string, successCallback: (data: { GetElementRegistrationIssuesResult: $D.Framework.ValidationIssue[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetElementRegistrationIssuesResult: $D.Framework.ValidationIssue[] }>;

	GetElementRegistrationIssues(elementName: string): { GetElementRegistrationIssuesResult: $D.Framework.ValidationIssue[] };

	GetElementRegistrationIssuesPromise(elementName: string): Promise<$D.Framework.ValidationIssue[]>;

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

	GetByFolderID(folderID: string, successCallback: (data: { GetByFolderIDResult: $D.Framework.Design.Flow.DeclaredInterface[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByFolderIDResult: $D.Framework.Design.Flow.DeclaredInterface[] }>;

	GetByFolderID(folderID: string): { GetByFolderIDResult: $D.Framework.Design.Flow.DeclaredInterface[] };

	GetByFolderIDPromise(folderID: string): Promise<$D.Framework.Design.Flow.DeclaredInterface[]>;

	GetByIDs(ids: string[], successCallback: (data: { GetByIDsResult: $D.Framework.Design.Flow.DeclaredInterface[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDsResult: $D.Framework.Design.Flow.DeclaredInterface[] }>;

	GetByIDs(ids: string[]): { GetByIDsResult: $D.Framework.Design.Flow.DeclaredInterface[] };

	GetByIDsPromise(ids: string[]): Promise<$D.Framework.Design.Flow.DeclaredInterface[]>;

	GetByID(id: string, successCallback: (data: { GetByIDResult: $D.Framework.Design.Flow.DeclaredInterface }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDResult: $D.Framework.Design.Flow.DeclaredInterface }>;

	GetByID(id: string): { GetByIDResult: $D.Framework.Design.Flow.DeclaredInterface };

	GetByIDPromise(id: string): Promise<$D.Framework.Design.Flow.DeclaredInterface>;

	GetAll(successCallback: (data: { GetAllResult: $D.Framework.Design.Flow.DeclaredInterface[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllResult: $D.Framework.Design.Flow.DeclaredInterface[] }>;

	GetAll(): { GetAllResult: $D.Framework.Design.Flow.DeclaredInterface[] };

	GetAllPromise(): Promise<$D.Framework.Design.Flow.DeclaredInterface[]>;

	Save(entity: $D.Framework.Design.Flow.DeclaredInterface, successCallback: (data: { SaveResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveResult: void }>;

	Save(entity: $D.Framework.Design.Flow.DeclaredInterface): { SaveResult: void };

	SavePromise(entity: $D.Framework.Design.Flow.DeclaredInterface): Promise<void>;

	Delete(id: string, successCallback: (data: { DeleteResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteResult: void }>;

	Delete(id: string): { DeleteResult: void };

	DeletePromise(id: string): Promise<void>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType, successCallback: (data: { SearchResult: $D.Framework.Design.Flow.DeclaredInterface[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchResult: $D.Framework.Design.Flow.DeclaredInterface[] }>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): { SearchResult: $D.Framework.Design.Flow.DeclaredInterface[] };

	SearchPromise(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): Promise<$D.Framework.Design.Flow.DeclaredInterface[]>;

	SaveList(entities: $D.Framework.Design.Flow.DeclaredInterface[], successCallback: (data: { SaveListResult: $D.Framework.Design.Flow.DeclaredInterface[] }) => any, errorCallback?: () => any): JQueryPromise<{ SaveListResult: $D.Framework.Design.Flow.DeclaredInterface[] }>;

	SaveList(entities: $D.Framework.Design.Flow.DeclaredInterface[]): { SaveListResult: $D.Framework.Design.Flow.DeclaredInterface[] };

	SaveListPromise(entities: $D.Framework.Design.Flow.DeclaredInterface[]): Promise<$D.Framework.Design.Flow.DeclaredInterface[]>;
}

interface ServicesStatic {
	DesignPatternService(): DesignPatternServiceStatic;
}
