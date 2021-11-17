/// <reference path="./datatypes._base.d.ts" />

interface TranslationServiceStatic {

	GetLanguages(successCallback: (data: { GetLanguagesResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetLanguagesResult: string[] }>;

	GetLanguages(): { GetLanguagesResult: string[] };

	GetLanguagesPromise(): Promise<string[]>;

	GetLanguageFolder(key: string, successCallback: (data: { GetLanguageFolderResult: $D.Framework.ServiceLayer.Services.Folder.Folder }) => any, errorCallback?: () => any): JQueryPromise<{ GetLanguageFolderResult: $D.Framework.ServiceLayer.Services.Folder.Folder }>;

	GetLanguageFolder(key: string): { GetLanguageFolderResult: $D.Framework.ServiceLayer.Services.Folder.Folder };

	GetLanguageFolderPromise(key: string): Promise<$D.Framework.ServiceLayer.Services.Folder.Folder>;

	AddLanguage(languageName: string, successCallback: (data: { AddLanguageResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddLanguageResult: void }>;

	AddLanguage(languageName: string): { AddLanguageResult: void };

	AddLanguagePromise(languageName: string): Promise<void>;

	GetTranslations(languageName: string, successCallback: (data: { GetTranslationsResult: $D.Framework.ServiceLayer.Services.Translation.TranslationData[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetTranslationsResult: $D.Framework.ServiceLayer.Services.Translation.TranslationData[] }>;

	GetTranslations(languageName: string): { GetTranslationsResult: $D.Framework.ServiceLayer.Services.Translation.TranslationData[] };

	GetTranslationsPromise(languageName: string): Promise<$D.Framework.ServiceLayer.Services.Translation.TranslationData[]>;

	GetMyTranslations(successCallback: (data: { GetMyTranslationsResult: $D.Framework.ServiceLayer.Services.Translation.TranslationData[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMyTranslationsResult: $D.Framework.ServiceLayer.Services.Translation.TranslationData[] }>;

	GetMyTranslations(): { GetMyTranslationsResult: $D.Framework.ServiceLayer.Services.Translation.TranslationData[] };

	GetMyTranslationsPromise(): Promise<$D.Framework.ServiceLayer.Services.Translation.TranslationData[]>;

	GetTranslation(languageName: string, forString: string, successCallback: (data: { GetTranslationResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetTranslationResult: string }>;

	GetTranslation(languageName: string, forString: string): { GetTranslationResult: string };

	GetTranslationPromise(languageName: string, forString: string): Promise<string>;

	GetMyTranslation(forString: string, successCallback: (data: { GetMyTranslationResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetMyTranslationResult: string }>;

	GetMyTranslation(forString: string): { GetMyTranslationResult: string };

	GetMyTranslationPromise(forString: string): Promise<string>;

	NeedsTranslation(elements: string[], successCallback: (data: { NeedsTranslationResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ NeedsTranslationResult: void }>;

	NeedsTranslation(elements: string[]): { NeedsTranslationResult: void };

	NeedsTranslationPromise(elements: string[]): Promise<void>;

	SetLanguage(languageName: string, successCallback: (data: { SetLanguageResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetLanguageResult: void }>;

	SetLanguage(languageName: string): { SetLanguageResult: void };

	SetLanguagePromise(languageName: string): Promise<void>;

	SetLanguageForUser(accountId: string, languageName: string, successCallback: (data: { SetLanguageForUserResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetLanguageForUserResult: void }>;

	SetLanguageForUser(accountId: string, languageName: string): { SetLanguageForUserResult: void };

	SetLanguageForUserPromise(accountId: string, languageName: string): Promise<void>;

	SetTranslation(languageName: string, fromString: string, translatedString: string, successCallback: (data: { SetTranslationResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetTranslationResult: void }>;

	SetTranslation(languageName: string, fromString: string, translatedString: string): { SetTranslationResult: void };

	SetTranslationPromise(languageName: string, fromString: string, translatedString: string): Promise<void>;

	GetUntranslatedStringsForLanguage(languageName: string, successCallback: (data: { GetUntranslatedStringsForLanguageResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetUntranslatedStringsForLanguageResult: string[] }>;

	GetUntranslatedStringsForLanguage(languageName: string): { GetUntranslatedStringsForLanguageResult: string[] };

	GetUntranslatedStringsForLanguagePromise(languageName: string): Promise<string[]>;

	GetAllStringsToBeTranslated(successCallback: (data: { GetAllStringsToBeTranslatedResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllStringsToBeTranslatedResult: string[] }>;

	GetAllStringsToBeTranslated(): { GetAllStringsToBeTranslatedResult: string[] };

	GetAllStringsToBeTranslatedPromise(): Promise<string[]>;

	HasUntranslatedStrings(languageName: string, successCallback: (data: { HasUntranslatedStringsResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ HasUntranslatedStringsResult: boolean }>;

	HasUntranslatedStrings(languageName: string): { HasUntranslatedStringsResult: boolean };

	HasUntranslatedStringsPromise(languageName: string): Promise<boolean>;

	GetAllHelpMessages(successCallback: (data: { GetAllHelpMessagesResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllHelpMessagesResult: string[] }>;

	GetAllHelpMessages(): { GetAllHelpMessagesResult: string[] };

	GetAllHelpMessagesPromise(): Promise<string[]>;

	AddHelpMessageNeeded(messageKey: string, defaultMessage: string, successCallback: (data: { AddHelpMessageNeededResult: $D.Framework.ServiceLayer.Services.Translation.TranslationEntity }) => any, errorCallback?: () => any): JQueryPromise<{ AddHelpMessageNeededResult: $D.Framework.ServiceLayer.Services.Translation.TranslationEntity }>;

	AddHelpMessageNeeded(messageKey: string, defaultMessage: string): { AddHelpMessageNeededResult: $D.Framework.ServiceLayer.Services.Translation.TranslationEntity };

	AddHelpMessageNeededPromise(messageKey: string, defaultMessage: string): Promise<$D.Framework.ServiceLayer.Services.Translation.TranslationEntity>;

	CheckAndAddHelpMessageNeeded(messageKey: string, defaultMessage: string, successCallback: (data: { CheckAndAddHelpMessageNeededResult: $D.Framework.ServiceLayer.Services.Translation.TranslationEntity }) => any, errorCallback?: () => any): JQueryPromise<{ CheckAndAddHelpMessageNeededResult: $D.Framework.ServiceLayer.Services.Translation.TranslationEntity }>;

	CheckAndAddHelpMessageNeeded(messageKey: string, defaultMessage: string): { CheckAndAddHelpMessageNeededResult: $D.Framework.ServiceLayer.Services.Translation.TranslationEntity };

	CheckAndAddHelpMessageNeededPromise(messageKey: string, defaultMessage: string): Promise<$D.Framework.ServiceLayer.Services.Translation.TranslationEntity>;

	GetHelpMessage(messageKey: string, successCallback: (data: { GetHelpMessageResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetHelpMessageResult: string }>;

	GetHelpMessage(messageKey: string): { GetHelpMessageResult: string };

	GetHelpMessagePromise(messageKey: string): Promise<string>;

	GetHelpMessageForLanguage(languageName: string, messageKey: string, successCallback: (data: { GetHelpMessageForLanguageResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetHelpMessageForLanguageResult: string }>;

	GetHelpMessageForLanguage(languageName: string, messageKey: string): { GetHelpMessageForLanguageResult: string };

	GetHelpMessageForLanguagePromise(languageName: string, messageKey: string): Promise<string>;

	AddTextsToTranslationList(text: string, successCallback: (data: { AddTextsToTranslationListResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddTextsToTranslationListResult: void }>;

	AddTextsToTranslationList(text: string): { AddTextsToTranslationListResult: void };

	AddTextsToTranslationListPromise(text: string): Promise<void>;

	GetTranslationsForTag(language: string, tag: string, includeOnlyUntranslated: boolean, successCallback: (data: { GetTranslationsForTagResult: $D.Framework.ServiceLayer.Services.Translation.LanguageTranslationData[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetTranslationsForTagResult: $D.Framework.ServiceLayer.Services.Translation.LanguageTranslationData[] }>;

	GetTranslationsForTag(language: string, tag: string, includeOnlyUntranslated: boolean): { GetTranslationsForTagResult: $D.Framework.ServiceLayer.Services.Translation.LanguageTranslationData[] };

	GetTranslationsForTagPromise(language: string, tag: string, includeOnlyUntranslated: boolean): Promise<$D.Framework.ServiceLayer.Services.Translation.LanguageTranslationData[]>;

	GetTranslationsForTagAllLanguages(tag: string, includeOnlyUntranslated: boolean, includeMasterTranslationList: boolean, successCallback: (data: { GetTranslationsForTagAllLanguagesResult: $D.Framework.ServiceLayer.Services.Translation.LanguageTranslationData[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetTranslationsForTagAllLanguagesResult: $D.Framework.ServiceLayer.Services.Translation.LanguageTranslationData[] }>;

	GetTranslationsForTagAllLanguages(tag: string, includeOnlyUntranslated: boolean, includeMasterTranslationList: boolean): { GetTranslationsForTagAllLanguagesResult: $D.Framework.ServiceLayer.Services.Translation.LanguageTranslationData[] };

	GetTranslationsForTagAllLanguagesPromise(tag: string, includeOnlyUntranslated: boolean, includeMasterTranslationList: boolean): Promise<$D.Framework.ServiceLayer.Services.Translation.LanguageTranslationData[]>;

	GetTranslatedTexts(texts: string[], successCallback: (data: { GetTranslatedTextsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetTranslatedTextsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	GetTranslatedTexts(texts: string[]): { GetTranslatedTextsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	GetTranslatedTextsPromise(texts: string[]): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

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
	TranslationService(): TranslationServiceStatic;
}
