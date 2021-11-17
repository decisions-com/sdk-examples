/// <reference path="./datatypes._base.d.ts" />

interface ThemeServiceStatic {

	GetThemeDataByName(userContext: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, themeName: string, successCallback: (data: { GetThemeDataByNameResult: $D.Framework.ServiceLayer.Services.Theme.ThemeData }) => any, errorCallback?: () => any): JQueryPromise<{ GetThemeDataByNameResult: $D.Framework.ServiceLayer.Services.Theme.ThemeData }>;

	GetThemeDataByName(userContext: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, themeName: string): { GetThemeDataByNameResult: $D.Framework.ServiceLayer.Services.Theme.ThemeData };

	GetThemeDataByNamePromise(userContext: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, themeName: string): Promise<$D.Framework.ServiceLayer.Services.Theme.ThemeData>;

	GetThemeIdByName(themeName: string, successCallback: (data: { GetThemeIdByNameResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetThemeIdByNameResult: string }>;

	GetThemeIdByName(themeName: string): { GetThemeIdByNameResult: string };

	GetThemeIdByNamePromise(themeName: string): Promise<string>;

	ThemeExists(themeName: string, successCallback: (data: { ThemeExistsResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ ThemeExistsResult: boolean }>;

	ThemeExists(themeName: string): { ThemeExistsResult: boolean };

	ThemeExistsPromise(themeName: string): Promise<boolean>;

	GetThemeDataById(themeId: string, successCallback: (data: { GetThemeDataByIdResult: $D.Framework.ServiceLayer.Services.Theme.ThemeData }) => any, errorCallback?: () => any): JQueryPromise<{ GetThemeDataByIdResult: $D.Framework.ServiceLayer.Services.Theme.ThemeData }>;

	GetThemeDataById(themeId: string): { GetThemeDataByIdResult: $D.Framework.ServiceLayer.Services.Theme.ThemeData };

	GetThemeDataByIdPromise(themeId: string): Promise<$D.Framework.ServiceLayer.Services.Theme.ThemeData>;

	GetThemeNameById(userContext: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, themeId: string, successCallback: (data: { GetThemeNameByIdResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetThemeNameByIdResult: string }>;

	GetThemeNameById(userContext: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, themeId: string): { GetThemeNameByIdResult: string };

	GetThemeNameByIdPromise(userContext: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, themeId: string): Promise<string>;

	GetDefaultThemeID(successCallback: (data: { GetDefaultThemeIDResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetDefaultThemeIDResult: string }>;

	GetDefaultThemeID(): { GetDefaultThemeIDResult: string };

	GetDefaultThemeIDPromise(): Promise<string>;

	SetDefaultTheme(themeID: string, successCallback: (data: { SetDefaultThemeResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetDefaultThemeResult: void }>;

	SetDefaultTheme(themeID: string): { SetDefaultThemeResult: void };

	SetDefaultThemePromise(themeID: string): Promise<void>;

	IsThemeDefault(themeId: string, successCallback: (data: { IsThemeDefaultResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ IsThemeDefaultResult: boolean }>;

	IsThemeDefault(themeId: string): { IsThemeDefaultResult: boolean };

	IsThemeDefaultPromise(themeId: string): Promise<boolean>;

	CreateTheme(themeName: string, themeData: $D.Framework.ServiceLayer.Services.Theme.ThemeData, folderId: string, successCallback: (data: { CreateThemeResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CreateThemeResult: void }>;

	CreateTheme(themeName: string, themeData: $D.Framework.ServiceLayer.Services.Theme.ThemeData, folderId: string): { CreateThemeResult: void };

	CreateThemePromise(themeName: string, themeData: $D.Framework.ServiceLayer.Services.Theme.ThemeData, folderId: string): Promise<void>;

	SaveThemeData(theme: $D.Framework.ServiceLayer.Services.Theme.ThemeData, themeId: string, successCallback: (data: { SaveThemeDataResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveThemeDataResult: void }>;

	SaveThemeData(theme: $D.Framework.ServiceLayer.Services.Theme.ThemeData, themeId: string): { SaveThemeDataResult: void };

	SaveThemeDataPromise(theme: $D.Framework.ServiceLayer.Services.Theme.ThemeData, themeId: string): Promise<void>;

	GetThemeNames(userContext: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, successCallback: (data: { GetThemeNamesResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetThemeNamesResult: string[] }>;

	GetThemeNames(userContext: $D.Framework.ServiceLayer.Utilities.AbstractUserContext): { GetThemeNamesResult: string[] };

	GetThemeNamesPromise(userContext: $D.Framework.ServiceLayer.Utilities.AbstractUserContext): Promise<string[]>;

	GetThemeNameAndIds(successCallback: (data: { GetThemeNameAndIdsResult: $D.Framework.ServiceLayer.Services.Theme.ThemeNameAndId[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetThemeNameAndIdsResult: $D.Framework.ServiceLayer.Services.Theme.ThemeNameAndId[] }>;

	GetThemeNameAndIds(): { GetThemeNameAndIdsResult: $D.Framework.ServiceLayer.Services.Theme.ThemeNameAndId[] };

	GetThemeNameAndIdsPromise(): Promise<$D.Framework.ServiceLayer.Services.Theme.ThemeNameAndId[]>;

	GetThemeCss(themeName: string, successCallback: (data: { GetThemeCssResult: $D.Framework.Utilities.ThemeCss }) => any, errorCallback?: () => any): JQueryPromise<{ GetThemeCssResult: $D.Framework.Utilities.ThemeCss }>;

	GetThemeCss(themeName: string): { GetThemeCssResult: $D.Framework.Utilities.ThemeCss };

	GetThemeCssPromise(themeName: string): Promise<$D.Framework.Utilities.ThemeCss>;

	GetDocumentData(id: string, successCallback: (data: { GetDocumentDataResult: number[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetDocumentDataResult: number[] }>;

	GetDocumentData(id: string): { GetDocumentDataResult: number[] };

	GetDocumentDataPromise(id: string): Promise<number[]>;

	GetSplashScreenSource(themeName: string, successCallback: (data: { GetSplashScreenSourceResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetSplashScreenSourceResult: string }>;

	GetSplashScreenSource(themeName: string): { GetSplashScreenSourceResult: string };

	GetSplashScreenSourcePromise(themeName: string): Promise<string>;

	GetThemeTimestamp(themeName: string, successCallback: (data: { GetThemeTimestampResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetThemeTimestampResult: string }>;

	GetThemeTimestamp(themeName: string): { GetThemeTimestampResult: string };

	GetThemeTimestampPromise(themeName: string): Promise<string>;

	GetMobileTheme(themeName: string, successCallback: (data: { GetMobileThemeResult: $D.Framework.Utilities.ThemeCss }) => any, errorCallback?: () => any): JQueryPromise<{ GetMobileThemeResult: $D.Framework.Utilities.ThemeCss }>;

	GetMobileTheme(themeName: string): { GetMobileThemeResult: $D.Framework.Utilities.ThemeCss };

	GetMobileThemePromise(themeName: string): Promise<$D.Framework.Utilities.ThemeCss>;

	GenerateCssFromTheme(themeName: string, themeCssData: string, generateDefault: boolean, successCallback: (data: { GenerateCssFromThemeResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ GenerateCssFromThemeResult: void }>;

	GenerateCssFromTheme(themeName: string, themeCssData: string, generateDefault: boolean): { GenerateCssFromThemeResult: void };

	GenerateCssFromThemePromise(themeName: string, themeCssData: string, generateDefault: boolean): Promise<void>;

	WriteThemeData(themeCssDatas: $D.Framework.ServiceLayer.Services.Theme.ThemeCssData[], successCallback: (data: { WriteThemeDataResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ WriteThemeDataResult: void }>;

	WriteThemeData(themeCssDatas: $D.Framework.ServiceLayer.Services.Theme.ThemeCssData[]): { WriteThemeDataResult: void };

	WriteThemeDataPromise(themeCssDatas: $D.Framework.ServiceLayer.Services.Theme.ThemeCssData[]): Promise<void>;

	GenerateThemeCssForMobile(pathToWrite: string, themeName: string, successCallback: (data: { GenerateThemeCssForMobileResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ GenerateThemeCssForMobileResult: void }>;

	GenerateThemeCssForMobile(pathToWrite: string, themeName: string): { GenerateThemeCssForMobileResult: void };

	GenerateThemeCssForMobilePromise(pathToWrite: string, themeName: string): Promise<void>;

	GetStudioThemeVariables(successCallback: (data: { GetStudioThemeVariablesResult: $D.Framework.ServiceLayer.Services.Theme.ThemeEdit.ThemeVariableNode[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetStudioThemeVariablesResult: $D.Framework.ServiceLayer.Services.Theme.ThemeEdit.ThemeVariableNode[] }>;

	GetStudioThemeVariables(): { GetStudioThemeVariablesResult: $D.Framework.ServiceLayer.Services.Theme.ThemeEdit.ThemeVariableNode[] };

	GetStudioThemeVariablesPromise(): Promise<$D.Framework.ServiceLayer.Services.Theme.ThemeEdit.ThemeVariableNode[]>;

	GetUserPortalThemeVariables(successCallback: (data: { GetUserPortalThemeVariablesResult: $D.Framework.ServiceLayer.Services.Theme.ThemeEdit.ThemeVariableNode[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetUserPortalThemeVariablesResult: $D.Framework.ServiceLayer.Services.Theme.ThemeEdit.ThemeVariableNode[] }>;

	GetUserPortalThemeVariables(): { GetUserPortalThemeVariablesResult: $D.Framework.ServiceLayer.Services.Theme.ThemeEdit.ThemeVariableNode[] };

	GetUserPortalThemeVariablesPromise(): Promise<$D.Framework.ServiceLayer.Services.Theme.ThemeEdit.ThemeVariableNode[]>;

	GetMobileThemeVariables(successCallback: (data: { GetMobileThemeVariablesResult: $D.Framework.ServiceLayer.Services.Theme.ThemeEdit.ThemeVariableNode[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMobileThemeVariablesResult: $D.Framework.ServiceLayer.Services.Theme.ThemeEdit.ThemeVariableNode[] }>;

	GetMobileThemeVariables(): { GetMobileThemeVariablesResult: $D.Framework.ServiceLayer.Services.Theme.ThemeEdit.ThemeVariableNode[] };

	GetMobileThemeVariablesPromise(): Promise<$D.Framework.ServiceLayer.Services.Theme.ThemeEdit.ThemeVariableNode[]>;

	GetStudioTreeCategory(path: string, search: string, successCallback: (data: { GetStudioTreeCategoryResult: $D.Framework.ServiceLayer.Services.Theme.ThemeEdit.ThemeTreeCategory }) => any, errorCallback?: () => any): JQueryPromise<{ GetStudioTreeCategoryResult: $D.Framework.ServiceLayer.Services.Theme.ThemeEdit.ThemeTreeCategory }>;

	GetStudioTreeCategory(path: string, search: string): { GetStudioTreeCategoryResult: $D.Framework.ServiceLayer.Services.Theme.ThemeEdit.ThemeTreeCategory };

	GetStudioTreeCategoryPromise(path: string, search: string): Promise<$D.Framework.ServiceLayer.Services.Theme.ThemeEdit.ThemeTreeCategory>;

	GetUserPortalTreeCategory(path: string, search: string, successCallback: (data: { GetUserPortalTreeCategoryResult: $D.Framework.ServiceLayer.Services.Theme.ThemeEdit.ThemeTreeCategory }) => any, errorCallback?: () => any): JQueryPromise<{ GetUserPortalTreeCategoryResult: $D.Framework.ServiceLayer.Services.Theme.ThemeEdit.ThemeTreeCategory }>;

	GetUserPortalTreeCategory(path: string, search: string): { GetUserPortalTreeCategoryResult: $D.Framework.ServiceLayer.Services.Theme.ThemeEdit.ThemeTreeCategory };

	GetUserPortalTreeCategoryPromise(path: string, search: string): Promise<$D.Framework.ServiceLayer.Services.Theme.ThemeEdit.ThemeTreeCategory>;

	GetMobileTreeCategory(path: string, search: string, successCallback: (data: { GetMobileTreeCategoryResult: $D.Framework.ServiceLayer.Services.Theme.ThemeEdit.ThemeTreeCategory }) => any, errorCallback?: () => any): JQueryPromise<{ GetMobileTreeCategoryResult: $D.Framework.ServiceLayer.Services.Theme.ThemeEdit.ThemeTreeCategory }>;

	GetMobileTreeCategory(path: string, search: string): { GetMobileTreeCategoryResult: $D.Framework.ServiceLayer.Services.Theme.ThemeEdit.ThemeTreeCategory };

	GetMobileTreeCategoryPromise(path: string, search: string): Promise<$D.Framework.ServiceLayer.Services.Theme.ThemeEdit.ThemeTreeCategory>;

	SetStudioTheme(variables: $D.Framework.ServiceLayer.Services.Theme.ThemeEdit.ThemeVariableNode[], successCallback: (data: { SetStudioThemeResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetStudioThemeResult: void }>;

	SetStudioTheme(variables: $D.Framework.ServiceLayer.Services.Theme.ThemeEdit.ThemeVariableNode[]): { SetStudioThemeResult: void };

	SetStudioThemePromise(variables: $D.Framework.ServiceLayer.Services.Theme.ThemeEdit.ThemeVariableNode[]): Promise<void>;

	SetUserPortalTheme(variables: $D.Framework.ServiceLayer.Services.Theme.ThemeEdit.ThemeVariableNode[], successCallback: (data: { SetUserPortalThemeResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetUserPortalThemeResult: void }>;

	SetUserPortalTheme(variables: $D.Framework.ServiceLayer.Services.Theme.ThemeEdit.ThemeVariableNode[]): { SetUserPortalThemeResult: void };

	SetUserPortalThemePromise(variables: $D.Framework.ServiceLayer.Services.Theme.ThemeEdit.ThemeVariableNode[]): Promise<void>;

	SetMobileTheme(variables: $D.Framework.ServiceLayer.Services.Theme.ThemeEdit.ThemeVariableNode[], successCallback: (data: { SetMobileThemeResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetMobileThemeResult: void }>;

	SetMobileTheme(variables: $D.Framework.ServiceLayer.Services.Theme.ThemeEdit.ThemeVariableNode[]): { SetMobileThemeResult: void };

	SetMobileThemePromise(variables: $D.Framework.ServiceLayer.Services.Theme.ThemeEdit.ThemeVariableNode[]): Promise<void>;

	Exists(id: string, successCallback: (data: { ExistsResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ ExistsResult: boolean }>;

	Exists(id: string): { ExistsResult: boolean };

	ExistsPromise(id: string): Promise<boolean>;

	GetByFolderID(folderID: string, successCallback: (data: { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Theme.ThemeEntity[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Theme.ThemeEntity[] }>;

	GetByFolderID(folderID: string): { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Theme.ThemeEntity[] };

	GetByFolderIDPromise(folderID: string): Promise<$D.Framework.ServiceLayer.Services.Theme.ThemeEntity[]>;

	GetByIDs(ids: string[], successCallback: (data: { GetByIDsResult: $D.Framework.ServiceLayer.Services.Theme.ThemeEntity[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDsResult: $D.Framework.ServiceLayer.Services.Theme.ThemeEntity[] }>;

	GetByIDs(ids: string[]): { GetByIDsResult: $D.Framework.ServiceLayer.Services.Theme.ThemeEntity[] };

	GetByIDsPromise(ids: string[]): Promise<$D.Framework.ServiceLayer.Services.Theme.ThemeEntity[]>;

	GetByID(id: string, successCallback: (data: { GetByIDResult: $D.Framework.ServiceLayer.Services.Theme.ThemeEntity }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDResult: $D.Framework.ServiceLayer.Services.Theme.ThemeEntity }>;

	GetByID(id: string): { GetByIDResult: $D.Framework.ServiceLayer.Services.Theme.ThemeEntity };

	GetByIDPromise(id: string): Promise<$D.Framework.ServiceLayer.Services.Theme.ThemeEntity>;

	GetAll(successCallback: (data: { GetAllResult: $D.Framework.ServiceLayer.Services.Theme.ThemeEntity[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllResult: $D.Framework.ServiceLayer.Services.Theme.ThemeEntity[] }>;

	GetAll(): { GetAllResult: $D.Framework.ServiceLayer.Services.Theme.ThemeEntity[] };

	GetAllPromise(): Promise<$D.Framework.ServiceLayer.Services.Theme.ThemeEntity[]>;

	Save(entity: $D.Framework.ServiceLayer.Services.Theme.ThemeEntity, successCallback: (data: { SaveResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveResult: void }>;

	Save(entity: $D.Framework.ServiceLayer.Services.Theme.ThemeEntity): { SaveResult: void };

	SavePromise(entity: $D.Framework.ServiceLayer.Services.Theme.ThemeEntity): Promise<void>;

	Delete(id: string, successCallback: (data: { DeleteResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteResult: void }>;

	Delete(id: string): { DeleteResult: void };

	DeletePromise(id: string): Promise<void>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType, successCallback: (data: { SearchResult: $D.Framework.ServiceLayer.Services.Theme.ThemeEntity[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchResult: $D.Framework.ServiceLayer.Services.Theme.ThemeEntity[] }>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): { SearchResult: $D.Framework.ServiceLayer.Services.Theme.ThemeEntity[] };

	SearchPromise(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): Promise<$D.Framework.ServiceLayer.Services.Theme.ThemeEntity[]>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.Theme.ThemeEntity[], successCallback: (data: { SaveListResult: $D.Framework.ServiceLayer.Services.Theme.ThemeEntity[] }) => any, errorCallback?: () => any): JQueryPromise<{ SaveListResult: $D.Framework.ServiceLayer.Services.Theme.ThemeEntity[] }>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.Theme.ThemeEntity[]): { SaveListResult: $D.Framework.ServiceLayer.Services.Theme.ThemeEntity[] };

	SaveListPromise(entities: $D.Framework.ServiceLayer.Services.Theme.ThemeEntity[]): Promise<$D.Framework.ServiceLayer.Services.Theme.ThemeEntity[]>;

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
	ThemeService(): ThemeServiceStatic;
}
