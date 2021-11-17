/// <reference path="./datatypes._base.d.ts" />

interface TaggingServiceStatic {

	AddTag(objectID: string, objectType: string, objectShortType: string, tag: string, successCallback: (data: { AddTagResult: $D.Framework.ServiceLayer.Services.Tagging.TagData }) => any, errorCallback?: () => any): JQueryPromise<{ AddTagResult: $D.Framework.ServiceLayer.Services.Tagging.TagData }>;

	AddTag(objectID: string, objectType: string, objectShortType: string, tag: string): { AddTagResult: $D.Framework.ServiceLayer.Services.Tagging.TagData };

	AddTagPromise(objectID: string, objectType: string, objectShortType: string, tag: string): Promise<$D.Framework.ServiceLayer.Services.Tagging.TagData>;

	RemoveTag(objectID: string, objectType: string, tag: string, successCallback: (data: { RemoveTagResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveTagResult: void }>;

	RemoveTag(objectID: string, objectType: string, tag: string): { RemoveTagResult: void };

	RemoveTagPromise(objectID: string, objectType: string, tag: string): Promise<void>;

	ClearTags(objectID: string, objectType: string, successCallback: (data: { ClearTagsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ClearTagsResult: void }>;

	ClearTags(objectID: string, objectType: string): { ClearTagsResult: void };

	ClearTagsPromise(objectID: string, objectType: string): Promise<void>;

	GetTags(objectID: string, objectType: string, successCallback: (data: { GetTagsResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetTagsResult: string[] }>;

	GetTags(objectID: string, objectType: string): { GetTagsResult: string[] };

	GetTagsPromise(objectID: string, objectType: string): Promise<string[]>;

	GetAllTags(successCallback: (data: { GetAllTagsResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllTagsResult: string[] }>;

	GetAllTags(): { GetAllTagsResult: string[] };

	GetAllTagsPromise(): Promise<string[]>;

	GetAllTagCounts(successCallback: (data: { GetAllTagCountsResult: $D.Framework.ServiceLayer.Services.Tagging.TagSummary[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllTagCountsResult: $D.Framework.ServiceLayer.Services.Tagging.TagSummary[] }>;

	GetAllTagCounts(): { GetAllTagCountsResult: $D.Framework.ServiceLayer.Services.Tagging.TagSummary[] };

	GetAllTagCountsPromise(): Promise<$D.Framework.ServiceLayer.Services.Tagging.TagSummary[]>;

	GetTypeCounts(tagName: string, successCallback: (data: { GetTypeCountsResult: $D.Framework.ServiceLayer.Services.Tagging.TagSummary[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetTypeCountsResult: $D.Framework.ServiceLayer.Services.Tagging.TagSummary[] }>;

	GetTypeCounts(tagName: string): { GetTypeCountsResult: $D.Framework.ServiceLayer.Services.Tagging.TagSummary[] };

	GetTypeCountsPromise(tagName: string): Promise<$D.Framework.ServiceLayer.Services.Tagging.TagSummary[]>;

	GetTaggedObjects(tagName: string, successCallback: (data: { GetTaggedObjectsResult: $D.Framework.ServiceLayer.Services.Tagging.TagData[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetTaggedObjectsResult: $D.Framework.ServiceLayer.Services.Tagging.TagData[] }>;

	GetTaggedObjects(tagName: string): { GetTaggedObjectsResult: $D.Framework.ServiceLayer.Services.Tagging.TagData[] };

	GetTaggedObjectsPromise(tagName: string): Promise<$D.Framework.ServiceLayer.Services.Tagging.TagData[]>;

	CreateTag(tag: string, description: string, folderId: string, extensionObject: $D.Framework.ServiceLayer.AbstractEntityExtensionData, successCallback: (data: { CreateTagResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateTagResult: string }>;

	CreateTag(tag: string, description: string, folderId: string, extensionObject: $D.Framework.ServiceLayer.AbstractEntityExtensionData): { CreateTagResult: string };

	CreateTagPromise(tag: string, description: string, folderId: string, extensionObject: $D.Framework.ServiceLayer.AbstractEntityExtensionData): Promise<string>;

	CreateTagList(tagList: $D.Framework.ServiceLayer.Services.Tagging.TagList, successCallback: (data: { CreateTagListResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateTagListResult: string }>;

	CreateTagList(tagList: $D.Framework.ServiceLayer.Services.Tagging.TagList): { CreateTagListResult: string };

	CreateTagListPromise(tagList: $D.Framework.ServiceLayer.Services.Tagging.TagList): Promise<string>;

	DeleteTag(tag: string, successCallback: (data: { DeleteTagResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteTagResult: void }>;

	DeleteTag(tag: string): { DeleteTagResult: void };

	DeleteTagPromise(tag: string): Promise<void>;

	GetAllTagsByExtensionType(extensionTypeName: string, successCallback: (data: { GetAllTagsByExtensionTypeResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllTagsByExtensionTypeResult: string[] }>;

	GetAllTagsByExtensionType(extensionTypeName: string): { GetAllTagsByExtensionTypeResult: string[] };

	GetAllTagsByExtensionTypePromise(extensionTypeName: string): Promise<string[]>;

	GetTagItemByTag(tagName: string, successCallback: (data: { GetTagItemByTagResult: $D.Framework.ServiceLayer.Services.Tagging.TagList }) => any, errorCallback?: () => any): JQueryPromise<{ GetTagItemByTagResult: $D.Framework.ServiceLayer.Services.Tagging.TagList }>;

	GetTagItemByTag(tagName: string): { GetTagItemByTagResult: $D.Framework.ServiceLayer.Services.Tagging.TagList };

	GetTagItemByTagPromise(tagName: string): Promise<$D.Framework.ServiceLayer.Services.Tagging.TagList>;

	CheckUserCanCreateTags(successCallback: (data: { CheckUserCanCreateTagsResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ CheckUserCanCreateTagsResult: boolean }>;

	CheckUserCanCreateTags(): { CheckUserCanCreateTagsResult: boolean };

	CheckUserCanCreateTagsPromise(): Promise<boolean>;

	RenameTag(oldName: string, newName: string, successCallback: (data: { RenameTagResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RenameTagResult: void }>;

	RenameTag(oldName: string, newName: string): { RenameTagResult: void };

	RenameTagPromise(oldName: string, newName: string): Promise<void>;

	SaveTag(tag: $D.Framework.ServiceLayer.Services.Tagging.TagList, successCallback: (data: { SaveTagResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveTagResult: void }>;

	SaveTag(tag: $D.Framework.ServiceLayer.Services.Tagging.TagList): { SaveTagResult: void };

	SaveTagPromise(tag: $D.Framework.ServiceLayer.Services.Tagging.TagList): Promise<void>;

	GetAllTagsForTree(successCallback: (data: { GetAllTagsForTreeResult: $D.Framework.ServiceLayer.Services.Tagging.TagForTree[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllTagsForTreeResult: $D.Framework.ServiceLayer.Services.Tagging.TagForTree[] }>;

	GetAllTagsForTree(): { GetAllTagsForTreeResult: $D.Framework.ServiceLayer.Services.Tagging.TagForTree[] };

	GetAllTagsForTreePromise(): Promise<$D.Framework.ServiceLayer.Services.Tagging.TagForTree[]>;

	GetCategoriesAndTagsForTree(ownerEntityTypeName: string, successCallback: (data: { GetCategoriesAndTagsForTreeResult: $D.Framework.ServiceLayer.Services.Tagging.TagForTree[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetCategoriesAndTagsForTreeResult: $D.Framework.ServiceLayer.Services.Tagging.TagForTree[] }>;

	GetCategoriesAndTagsForTree(ownerEntityTypeName: string): { GetCategoriesAndTagsForTreeResult: $D.Framework.ServiceLayer.Services.Tagging.TagForTree[] };

	GetCategoriesAndTagsForTreePromise(ownerEntityTypeName: string): Promise<$D.Framework.ServiceLayer.Services.Tagging.TagForTree[]>;

	CanAddTag(ownerEntityTypeName: string, tagName: string, ownerEntityShortTypeName: string, successCallback: (data: { CanAddTagResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ CanAddTagResult: boolean }>;

	CanAddTag(ownerEntityTypeName: string, tagName: string, ownerEntityShortTypeName: string): { CanAddTagResult: boolean };

	CanAddTagPromise(ownerEntityTypeName: string, tagName: string, ownerEntityShortTypeName: string): Promise<boolean>;

	CanBrowseTag(ownerEntityTypeName: string, tagName: string, successCallback: (data: { CanBrowseTagResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ CanBrowseTagResult: boolean }>;

	CanBrowseTag(ownerEntityTypeName: string, tagName: string): { CanBrowseTagResult: boolean };

	CanBrowseTagPromise(ownerEntityTypeName: string, tagName: string): Promise<boolean>;

	AddTagNote(tagName: string, note: string, entityId: string, successCallback: (data: { AddTagNoteResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddTagNoteResult: void }>;

	AddTagNote(tagName: string, note: string, entityId: string): { AddTagNoteResult: void };

	AddTagNotePromise(tagName: string, note: string, entityId: string): Promise<void>;

	GetNoteForTag(tagName: string, entityId: string, successCallback: (data: { GetNoteForTagResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetNoteForTagResult: string }>;

	GetNoteForTag(tagName: string, entityId: string): { GetNoteForTagResult: string };

	GetNoteForTagPromise(tagName: string, entityId: string): Promise<string>;

	DeleteTagNote(tagName: string, entityId: string, successCallback: (data: { DeleteTagNoteResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteTagNoteResult: void }>;

	DeleteTagNote(tagName: string, entityId: string): { DeleteTagNoteResult: void };

	DeleteTagNotePromise(tagName: string, entityId: string): Promise<void>;

	GetTagsByObjectID(entityID: string, entityTypeName: string, successCallback: (data: { GetTagsByObjectIDResult: $D.Framework.ServiceLayer.Services.Tagging.TagData[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetTagsByObjectIDResult: $D.Framework.ServiceLayer.Services.Tagging.TagData[] }>;

	GetTagsByObjectID(entityID: string, entityTypeName: string): { GetTagsByObjectIDResult: $D.Framework.ServiceLayer.Services.Tagging.TagData[] };

	GetTagsByObjectIDPromise(entityID: string, entityTypeName: string): Promise<$D.Framework.ServiceLayer.Services.Tagging.TagData[]>;

	GetTagsByObjectIDs(entityIDs: string[], entityTypeName: string, successCallback: (data: { GetTagsByObjectIDsResult: $D.Framework.ServiceLayer.Services.Tagging.TagDataWrapper[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetTagsByObjectIDsResult: $D.Framework.ServiceLayer.Services.Tagging.TagDataWrapper[] }>;

	GetTagsByObjectIDs(entityIDs: string[], entityTypeName: string): { GetTagsByObjectIDsResult: $D.Framework.ServiceLayer.Services.Tagging.TagDataWrapper[] };

	GetTagsByObjectIDsPromise(entityIDs: string[], entityTypeName: string): Promise<$D.Framework.ServiceLayer.Services.Tagging.TagDataWrapper[]>;

	SaveTagData(tagData: $D.Framework.ServiceLayer.Services.Tagging.TagData, successCallback: (data: { SaveTagDataResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveTagDataResult: void }>;

	SaveTagData(tagData: $D.Framework.ServiceLayer.Services.Tagging.TagData): { SaveTagDataResult: void };

	SaveTagDataPromise(tagData: $D.Framework.ServiceLayer.Services.Tagging.TagData): Promise<void>;

	CheckTagExists(tag: string, successCallback: (data: { CheckTagExistsResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ CheckTagExistsResult: boolean }>;

	CheckTagExists(tag: string): { CheckTagExistsResult: boolean };

	CheckTagExistsPromise(tag: string): Promise<boolean>;

	AddTagList(tag: string, successCallback: (data: { AddTagListResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddTagListResult: void }>;

	AddTagList(tag: string): { AddTagListResult: void };

	AddTagListPromise(tag: string): Promise<void>;

	GetBrowseableTagsForEntity(ownerEntityTypeName: string, successCallback: (data: { GetBrowseableTagsForEntityResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetBrowseableTagsForEntityResult: string[] }>;

	GetBrowseableTagsForEntity(ownerEntityTypeName: string): { GetBrowseableTagsForEntityResult: string[] };

	GetBrowseableTagsForEntityPromise(ownerEntityTypeName: string): Promise<string[]>;

	GetHintText(successCallback: (data: { GetHintTextResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetHintTextResult: string }>;

	GetHintText(): { GetHintTextResult: string };

	GetHintTextPromise(): Promise<string>;

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
	TaggingService(): TaggingServiceStatic;
}
