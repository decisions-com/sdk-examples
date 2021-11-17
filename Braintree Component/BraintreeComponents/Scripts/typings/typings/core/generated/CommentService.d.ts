/// <reference path="./datatypes._base.d.ts" />

interface CommentServiceStatic {

	AddComment(entityid: string, comment: $D.Framework.ServiceLayer.Services.Comment.Comment, successCallback: (data: { AddCommentResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddCommentResult: void }>;

	AddComment(entityid: string, comment: $D.Framework.ServiceLayer.Services.Comment.Comment): { AddCommentResult: void };

	AddCommentPromise(entityid: string, comment: $D.Framework.ServiceLayer.Services.Comment.Comment): Promise<void>;

	AddDocumentComment(entityid: string, comment: $D.Framework.ServiceLayer.Services.Comment.Comment, file: $D.Framework.Data.DataTypes.FileData, successCallback: (data: { AddDocumentCommentResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddDocumentCommentResult: void }>;

	AddDocumentComment(entityid: string, comment: $D.Framework.ServiceLayer.Services.Comment.Comment, file: $D.Framework.Data.DataTypes.FileData): { AddDocumentCommentResult: void };

	AddDocumentCommentPromise(entityid: string, comment: $D.Framework.ServiceLayer.Services.Comment.Comment, file: $D.Framework.Data.DataTypes.FileData): Promise<void>;

	AddAuditComment(entityid: string, comment: $D.Framework.ServiceLayer.Services.Comment.Comment, successCallback: (data: { AddAuditCommentResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddAuditCommentResult: void }>;

	AddAuditComment(entityid: string, comment: $D.Framework.ServiceLayer.Services.Comment.Comment): { AddAuditCommentResult: void };

	AddAuditCommentPromise(entityid: string, comment: $D.Framework.ServiceLayer.Services.Comment.Comment): Promise<void>;

	AddSystemComment(entityid: string, comment: $D.Framework.ServiceLayer.Services.Comment.Comment, successCallback: (data: { AddSystemCommentResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddSystemCommentResult: void }>;

	AddSystemComment(entityid: string, comment: $D.Framework.ServiceLayer.Services.Comment.Comment): { AddSystemCommentResult: void };

	AddSystemCommentPromise(entityid: string, comment: $D.Framework.ServiceLayer.Services.Comment.Comment): Promise<void>;

	AddQuickComment(folderid: string, description: string, successCallback: (data: { AddQuickCommentResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddQuickCommentResult: void }>;

	AddQuickComment(folderid: string, description: string): { AddQuickCommentResult: void };

	AddQuickCommentPromise(folderid: string, description: string): Promise<void>;

	AddQuickCommentWithSharing(folderid: string, description: string, accountIds: string[], successCallback: (data: { AddQuickCommentWithSharingResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddQuickCommentWithSharingResult: void }>;

	AddQuickCommentWithSharing(folderid: string, description: string, accountIds: string[]): { AddQuickCommentWithSharingResult: void };

	AddQuickCommentWithSharingPromise(folderid: string, description: string, accountIds: string[]): Promise<void>;

	GetFolderComments(folderid: string, successCallback: (data: { GetFolderCommentsResult: $D.Framework.ServiceLayer.Services.Comment.Comment[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetFolderCommentsResult: $D.Framework.ServiceLayer.Services.Comment.Comment[] }>;

	GetFolderComments(folderid: string): { GetFolderCommentsResult: $D.Framework.ServiceLayer.Services.Comment.Comment[] };

	GetFolderCommentsPromise(folderid: string): Promise<$D.Framework.ServiceLayer.Services.Comment.Comment[]>;

	GetUserCommentsforFolder(folderid: string, successCallback: (data: { GetUserCommentsforFolderResult: $D.Framework.ServiceLayer.Services.Comment.Comment[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetUserCommentsforFolderResult: $D.Framework.ServiceLayer.Services.Comment.Comment[] }>;

	GetUserCommentsforFolder(folderid: string): { GetUserCommentsforFolderResult: $D.Framework.ServiceLayer.Services.Comment.Comment[] };

	GetUserCommentsforFolderPromise(folderid: string): Promise<$D.Framework.ServiceLayer.Services.Comment.Comment[]>;

	AddCommentWithSharing(folderid: string, comment: $D.Framework.ServiceLayer.Services.Comment.Comment, accountIds: string[], successCallback: (data: { AddCommentWithSharingResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddCommentWithSharingResult: string }>;

	AddCommentWithSharing(folderid: string, comment: $D.Framework.ServiceLayer.Services.Comment.Comment, accountIds: string[]): { AddCommentWithSharingResult: string };

	AddCommentWithSharingPromise(folderid: string, comment: $D.Framework.ServiceLayer.Services.Comment.Comment, accountIds: string[]): Promise<string>;

	AddLink(entityFolderID: string, name: string, link: string, description: string, successCallback: (data: { AddLinkResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddLinkResult: void }>;

	AddLink(entityFolderID: string, name: string, link: string, description: string): { AddLinkResult: void };

	AddLinkPromise(entityFolderID: string, name: string, link: string, description: string): Promise<void>;

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

	GetByFolderID(folderID: string, successCallback: (data: { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Comment.Comment[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Comment.Comment[] }>;

	GetByFolderID(folderID: string): { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Comment.Comment[] };

	GetByFolderIDPromise(folderID: string): Promise<$D.Framework.ServiceLayer.Services.Comment.Comment[]>;

	GetByIDs(ids: string[], successCallback: (data: { GetByIDsResult: $D.Framework.ServiceLayer.Services.Comment.Comment[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDsResult: $D.Framework.ServiceLayer.Services.Comment.Comment[] }>;

	GetByIDs(ids: string[]): { GetByIDsResult: $D.Framework.ServiceLayer.Services.Comment.Comment[] };

	GetByIDsPromise(ids: string[]): Promise<$D.Framework.ServiceLayer.Services.Comment.Comment[]>;

	GetByID(id: string, successCallback: (data: { GetByIDResult: $D.Framework.ServiceLayer.Services.Comment.Comment }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDResult: $D.Framework.ServiceLayer.Services.Comment.Comment }>;

	GetByID(id: string): { GetByIDResult: $D.Framework.ServiceLayer.Services.Comment.Comment };

	GetByIDPromise(id: string): Promise<$D.Framework.ServiceLayer.Services.Comment.Comment>;

	GetAll(successCallback: (data: { GetAllResult: $D.Framework.ServiceLayer.Services.Comment.Comment[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllResult: $D.Framework.ServiceLayer.Services.Comment.Comment[] }>;

	GetAll(): { GetAllResult: $D.Framework.ServiceLayer.Services.Comment.Comment[] };

	GetAllPromise(): Promise<$D.Framework.ServiceLayer.Services.Comment.Comment[]>;

	Save(entity: $D.Framework.ServiceLayer.Services.Comment.Comment, successCallback: (data: { SaveResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveResult: void }>;

	Save(entity: $D.Framework.ServiceLayer.Services.Comment.Comment): { SaveResult: void };

	SavePromise(entity: $D.Framework.ServiceLayer.Services.Comment.Comment): Promise<void>;

	Delete(id: string, successCallback: (data: { DeleteResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteResult: void }>;

	Delete(id: string): { DeleteResult: void };

	DeletePromise(id: string): Promise<void>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType, successCallback: (data: { SearchResult: $D.Framework.ServiceLayer.Services.Comment.Comment[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchResult: $D.Framework.ServiceLayer.Services.Comment.Comment[] }>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): { SearchResult: $D.Framework.ServiceLayer.Services.Comment.Comment[] };

	SearchPromise(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): Promise<$D.Framework.ServiceLayer.Services.Comment.Comment[]>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.Comment.Comment[], successCallback: (data: { SaveListResult: $D.Framework.ServiceLayer.Services.Comment.Comment[] }) => any, errorCallback?: () => any): JQueryPromise<{ SaveListResult: $D.Framework.ServiceLayer.Services.Comment.Comment[] }>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.Comment.Comment[]): { SaveListResult: $D.Framework.ServiceLayer.Services.Comment.Comment[] };

	SaveListPromise(entities: $D.Framework.ServiceLayer.Services.Comment.Comment[]): Promise<$D.Framework.ServiceLayer.Services.Comment.Comment[]>;
}

interface ServicesStatic {
	CommentService(): CommentServiceStatic;
}
