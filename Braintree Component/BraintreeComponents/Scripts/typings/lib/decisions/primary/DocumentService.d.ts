/// <reference path="./datatypes._base.d.ts" />

interface DocumentServiceStatic {

	AddDocument(folderId: string, fileData: $D.Framework.ServiceLayer.Actions.Common.TitleDescriptionAndFile, successCallback: (data: { AddDocumentResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddDocumentResult: string }>;

	AddDocument(folderId: string, fileData: $D.Framework.ServiceLayer.Actions.Common.TitleDescriptionAndFile): { AddDocumentResult: string };

	AddDocumentPromise(folderId: string, fileData: $D.Framework.ServiceLayer.Actions.Common.TitleDescriptionAndFile): Promise<string>;

	AddDocumentInFolder(d: $D.Framework.ServiceLayer.Services.Document.Document, data: $D.Framework.Data.DataTypes.FileData, successCallback: (data: { AddDocumentInFolderResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddDocumentInFolderResult: string }>;

	AddDocumentInFolder(d: $D.Framework.ServiceLayer.Services.Document.Document, data: $D.Framework.Data.DataTypes.FileData): { AddDocumentInFolderResult: string };

	AddDocumentInFolderPromise(d: $D.Framework.ServiceLayer.Services.Document.Document, data: $D.Framework.Data.DataTypes.FileData): Promise<string>;

	AddDocumentFromUrlToPath(path: string, titleAndDescription: $D.Framework.ServiceLayer.Actions.Common.TitleAndDescription, urlToHttpGetFrom: string, documentExistsBehavior: $D.Framework.ServiceLayer.Services.Document.DocumentExistsBehavior, successCallback: (data: { AddDocumentFromUrlToPathResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddDocumentFromUrlToPathResult: string }>;

	AddDocumentFromUrlToPath(path: string, titleAndDescription: $D.Framework.ServiceLayer.Actions.Common.TitleAndDescription, urlToHttpGetFrom: string, documentExistsBehavior: $D.Framework.ServiceLayer.Services.Document.DocumentExistsBehavior): { AddDocumentFromUrlToPathResult: string };

	AddDocumentFromUrlToPathPromise(path: string, titleAndDescription: $D.Framework.ServiceLayer.Actions.Common.TitleAndDescription, urlToHttpGetFrom: string, documentExistsBehavior: $D.Framework.ServiceLayer.Services.Document.DocumentExistsBehavior): Promise<string>;

	AddDocumentFromUrlToFolder(folderId: string, titleAndDescription: $D.Framework.ServiceLayer.Actions.Common.TitleAndDescription, urlToHttpGetFrom: string, successCallback: (data: { AddDocumentFromUrlToFolderResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddDocumentFromUrlToFolderResult: string }>;

	AddDocumentFromUrlToFolder(folderId: string, titleAndDescription: $D.Framework.ServiceLayer.Actions.Common.TitleAndDescription, urlToHttpGetFrom: string): { AddDocumentFromUrlToFolderResult: string };

	AddDocumentFromUrlToFolderPromise(folderId: string, titleAndDescription: $D.Framework.ServiceLayer.Actions.Common.TitleAndDescription, urlToHttpGetFrom: string): Promise<string>;

	AddFileAsDocument(fileReferenceId: string, folderId: string, successCallback: (data: { AddFileAsDocumentResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddFileAsDocumentResult: string }>;

	AddFileAsDocument(fileReferenceId: string, folderId: string): { AddFileAsDocumentResult: string };

	AddFileAsDocumentPromise(fileReferenceId: string, folderId: string): Promise<string>;

	GetDocument(documentID: string, successCallback: (data: { GetDocumentResult: $D.Framework.ServiceLayer.Services.Document.Document }) => any, errorCallback?: () => any): JQueryPromise<{ GetDocumentResult: $D.Framework.ServiceLayer.Services.Document.Document }>;

	GetDocument(documentID: string): { GetDocumentResult: $D.Framework.ServiceLayer.Services.Document.Document };

	GetDocumentPromise(documentID: string): Promise<$D.Framework.ServiceLayer.Services.Document.Document>;

	DeleteDocument(documentID: string, successCallback: (data: { DeleteDocumentResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteDocumentResult: void }>;

	DeleteDocument(documentID: string): { DeleteDocumentResult: void };

	DeleteDocumentPromise(documentID: string): Promise<void>;

	AddDocumentInFolderPath(path: string, documentInfo: $D.Framework.ServiceLayer.Actions.Common.TitleDescriptionAndFile, existsBehavior: $D.Framework.ServiceLayer.Services.Document.DocumentExistsBehavior, successCallback: (data: { AddDocumentInFolderPathResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddDocumentInFolderPathResult: string }>;

	AddDocumentInFolderPath(path: string, documentInfo: $D.Framework.ServiceLayer.Actions.Common.TitleDescriptionAndFile, existsBehavior: $D.Framework.ServiceLayer.Services.Document.DocumentExistsBehavior): { AddDocumentInFolderPathResult: string };

	AddDocumentInFolderPathPromise(path: string, documentInfo: $D.Framework.ServiceLayer.Actions.Common.TitleDescriptionAndFile, existsBehavior: $D.Framework.ServiceLayer.Services.Document.DocumentExistsBehavior): Promise<string>;

	AddThumbnailToDocument(documentID: string, fileData: $D.Framework.Data.DataTypes.FileData, successCallback: (data: { AddThumbnailToDocumentResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddThumbnailToDocumentResult: void }>;

	AddThumbnailToDocument(documentID: string, fileData: $D.Framework.Data.DataTypes.FileData): { AddThumbnailToDocumentResult: void };

	AddThumbnailToDocumentPromise(documentID: string, fileData: $D.Framework.Data.DataTypes.FileData): Promise<void>;

	RenameDocument(documentID: string, newDocumentName: string, successCallback: (data: { RenameDocumentResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RenameDocumentResult: void }>;

	RenameDocument(documentID: string, newDocumentName: string): { RenameDocumentResult: void };

	RenameDocumentPromise(documentID: string, newDocumentName: string): Promise<void>;

	GetDocumentsWithTumbnailsByFolderId(folderId: string, successCallback: (data: { GetDocumentsWithTumbnailsByFolderIdResult: $D.Framework.ServiceLayer.Services.Document.Document[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetDocumentsWithTumbnailsByFolderIdResult: $D.Framework.ServiceLayer.Services.Document.Document[] }>;

	GetDocumentsWithTumbnailsByFolderId(folderId: string): { GetDocumentsWithTumbnailsByFolderIdResult: $D.Framework.ServiceLayer.Services.Document.Document[] };

	GetDocumentsWithTumbnailsByFolderIdPromise(folderId: string): Promise<$D.Framework.ServiceLayer.Services.Document.Document[]>;

	GetPublicDocumentFileInfo(documentId: string, successCallback: (data: { GetPublicDocumentFileInfoResult: $D.Framework.Data.DataTypes.FileInfoData }) => any, errorCallback?: () => any): JQueryPromise<{ GetPublicDocumentFileInfoResult: $D.Framework.Data.DataTypes.FileInfoData }>;

	GetPublicDocumentFileInfo(documentId: string): { GetPublicDocumentFileInfoResult: $D.Framework.Data.DataTypes.FileInfoData };

	GetPublicDocumentFileInfoPromise(documentId: string): Promise<$D.Framework.Data.DataTypes.FileInfoData>;

	GetPublicDocumentData(documentId: string, successCallback: (data: { GetPublicDocumentDataResult: $D.Framework.Data.DataTypes.FileData }) => any, errorCallback?: () => any): JQueryPromise<{ GetPublicDocumentDataResult: $D.Framework.Data.DataTypes.FileData }>;

	GetPublicDocumentData(documentId: string): { GetPublicDocumentDataResult: $D.Framework.Data.DataTypes.FileData };

	GetPublicDocumentDataPromise(documentId: string): Promise<$D.Framework.Data.DataTypes.FileData>;

	UpdateDocument(documentID: string, fileData: $D.Framework.Data.DataTypes.FileData, archive: boolean, successCallback: (data: { UpdateDocumentResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateDocumentResult: void }>;

	UpdateDocument(documentID: string, fileData: $D.Framework.Data.DataTypes.FileData, archive: boolean): { UpdateDocumentResult: void };

	UpdateDocumentPromise(documentID: string, fileData: $D.Framework.Data.DataTypes.FileData, archive: boolean): Promise<void>;

	GetDocumentData(documentID: string, successCallback: (data: { GetDocumentDataResult: $D.Framework.Data.DataTypes.FileData }) => any, errorCallback?: () => any): JQueryPromise<{ GetDocumentDataResult: $D.Framework.Data.DataTypes.FileData }>;

	GetDocumentData(documentID: string): { GetDocumentDataResult: $D.Framework.Data.DataTypes.FileData };

	GetDocumentDataPromise(documentID: string): Promise<$D.Framework.Data.DataTypes.FileData>;

	GetDocumentDataAsPng(documentID: string, successCallback: (data: { GetDocumentDataAsPngResult: $D.Framework.Data.DataTypes.FileData }) => any, errorCallback?: () => any): JQueryPromise<{ GetDocumentDataAsPngResult: $D.Framework.Data.DataTypes.FileData }>;

	GetDocumentDataAsPng(documentID: string): { GetDocumentDataAsPngResult: $D.Framework.Data.DataTypes.FileData };

	GetDocumentDataAsPngPromise(documentID: string): Promise<$D.Framework.Data.DataTypes.FileData>;

	GetDocumentThumbnailData(documentID: string, successCallback: (data: { GetDocumentThumbnailDataResult: $D.Framework.Data.DataTypes.FileData }) => any, errorCallback?: () => any): JQueryPromise<{ GetDocumentThumbnailDataResult: $D.Framework.Data.DataTypes.FileData }>;

	GetDocumentThumbnailData(documentID: string): { GetDocumentThumbnailDataResult: $D.Framework.Data.DataTypes.FileData };

	GetDocumentThumbnailDataPromise(documentID: string): Promise<$D.Framework.Data.DataTypes.FileData>;

	GetDocumentDataURL(documentID: string, host: string, successCallback: (data: { GetDocumentDataURLResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetDocumentDataURLResult: string }>;

	GetDocumentDataURL(documentID: string, host: string): { GetDocumentDataURLResult: string };

	GetDocumentDataURLPromise(documentID: string, host: string): Promise<string>;

	GetDocumentFileInfo(documentID: string, successCallback: (data: { GetDocumentFileInfoResult: $D.Framework.Data.DataTypes.FileInfoData }) => any, errorCallback?: () => any): JQueryPromise<{ GetDocumentFileInfoResult: $D.Framework.Data.DataTypes.FileInfoData }>;

	GetDocumentFileInfo(documentID: string): { GetDocumentFileInfoResult: $D.Framework.Data.DataTypes.FileInfoData };

	GetDocumentFileInfoPromise(documentID: string): Promise<$D.Framework.Data.DataTypes.FileInfoData>;

	GetArchivedDocumentData(documentID: string, successCallback: (data: { GetArchivedDocumentDataResult: $D.Framework.ServiceLayer.Services.Document.Document[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetArchivedDocumentDataResult: $D.Framework.ServiceLayer.Services.Document.Document[] }>;

	GetArchivedDocumentData(documentID: string): { GetArchivedDocumentDataResult: $D.Framework.ServiceLayer.Services.Document.Document[] };

	GetArchivedDocumentDataPromise(documentID: string): Promise<$D.Framework.ServiceLayer.Services.Document.Document[]>;

	UnArchive(documentID: string, documentName: string, successCallback: (data: { UnArchiveResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UnArchiveResult: void }>;

	UnArchive(documentID: string, documentName: string): { UnArchiveResult: void };

	UnArchivePromise(documentID: string, documentName: string): Promise<void>;

	GetDocumentsByTypeAndPath(folderPath: string, ext: string, successCallback: (data: { GetDocumentsByTypeAndPathResult: $D.Framework.ServiceLayer.Services.Document.Document[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetDocumentsByTypeAndPathResult: $D.Framework.ServiceLayer.Services.Document.Document[] }>;

	GetDocumentsByTypeAndPath(folderPath: string, ext: string): { GetDocumentsByTypeAndPathResult: $D.Framework.ServiceLayer.Services.Document.Document[] };

	GetDocumentsByTypeAndPathPromise(folderPath: string, ext: string): Promise<$D.Framework.ServiceLayer.Services.Document.Document[]>;

	GetDocumentsByType(folderId: string, ext: string, successCallback: (data: { GetDocumentsByTypeResult: $D.Framework.ServiceLayer.Services.Document.Document[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetDocumentsByTypeResult: $D.Framework.ServiceLayer.Services.Document.Document[] }>;

	GetDocumentsByType(folderId: string, ext: string): { GetDocumentsByTypeResult: $D.Framework.ServiceLayer.Services.Document.Document[] };

	GetDocumentsByTypePromise(folderId: string, ext: string): Promise<$D.Framework.ServiceLayer.Services.Document.Document[]>;

	GetDocumentTypeByExtension(extension: string, successCallback: (data: { GetDocumentTypeByExtensionResult: $D.Framework.ServiceLayer.Services.Document.DocumentType }) => any, errorCallback?: () => any): JQueryPromise<{ GetDocumentTypeByExtensionResult: $D.Framework.ServiceLayer.Services.Document.DocumentType }>;

	GetDocumentTypeByExtension(extension: string): { GetDocumentTypeByExtensionResult: $D.Framework.ServiceLayer.Services.Document.DocumentType };

	GetDocumentTypeByExtensionPromise(extension: string): Promise<$D.Framework.ServiceLayer.Services.Document.DocumentType>;

	GetDocumentsByFolderId(folderId: string, successCallback: (data: { GetDocumentsByFolderIdResult: $D.Framework.ServiceLayer.Services.Document.Document[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetDocumentsByFolderIdResult: $D.Framework.ServiceLayer.Services.Document.Document[] }>;

	GetDocumentsByFolderId(folderId: string): { GetDocumentsByFolderIdResult: $D.Framework.ServiceLayer.Services.Document.Document[] };

	GetDocumentsByFolderIdPromise(folderId: string): Promise<$D.Framework.ServiceLayer.Services.Document.Document[]>;

	GetDocumentByFolderIdAndName(persistentFolderId: string, fileName: string, successCallback: (data: { GetDocumentByFolderIdAndNameResult: $D.Framework.ServiceLayer.Services.Document.Document }) => any, errorCallback?: () => any): JQueryPromise<{ GetDocumentByFolderIdAndNameResult: $D.Framework.ServiceLayer.Services.Document.Document }>;

	GetDocumentByFolderIdAndName(persistentFolderId: string, fileName: string): { GetDocumentByFolderIdAndNameResult: $D.Framework.ServiceLayer.Services.Document.Document };

	GetDocumentByFolderIdAndNamePromise(persistentFolderId: string, fileName: string): Promise<$D.Framework.ServiceLayer.Services.Document.Document>;

	UpdateDocumentByReference(documentId: string, fileReferenceId: string, archive: boolean, successCallback: (data: { UpdateDocumentByReferenceResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateDocumentByReferenceResult: void }>;

	UpdateDocumentByReference(documentId: string, fileReferenceId: string, archive: boolean): { UpdateDocumentByReferenceResult: void };

	UpdateDocumentByReferencePromise(documentId: string, fileReferenceId: string, archive: boolean): Promise<void>;

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

	GetByFolderID(folderID: string, successCallback: (data: { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Document.Document[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Document.Document[] }>;

	GetByFolderID(folderID: string): { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Document.Document[] };

	GetByFolderIDPromise(folderID: string): Promise<$D.Framework.ServiceLayer.Services.Document.Document[]>;

	GetByIDs(ids: string[], successCallback: (data: { GetByIDsResult: $D.Framework.ServiceLayer.Services.Document.Document[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDsResult: $D.Framework.ServiceLayer.Services.Document.Document[] }>;

	GetByIDs(ids: string[]): { GetByIDsResult: $D.Framework.ServiceLayer.Services.Document.Document[] };

	GetByIDsPromise(ids: string[]): Promise<$D.Framework.ServiceLayer.Services.Document.Document[]>;

	GetByID(id: string, successCallback: (data: { GetByIDResult: $D.Framework.ServiceLayer.Services.Document.Document }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDResult: $D.Framework.ServiceLayer.Services.Document.Document }>;

	GetByID(id: string): { GetByIDResult: $D.Framework.ServiceLayer.Services.Document.Document };

	GetByIDPromise(id: string): Promise<$D.Framework.ServiceLayer.Services.Document.Document>;

	GetAll(successCallback: (data: { GetAllResult: $D.Framework.ServiceLayer.Services.Document.Document[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllResult: $D.Framework.ServiceLayer.Services.Document.Document[] }>;

	GetAll(): { GetAllResult: $D.Framework.ServiceLayer.Services.Document.Document[] };

	GetAllPromise(): Promise<$D.Framework.ServiceLayer.Services.Document.Document[]>;

	Save(entity: $D.Framework.ServiceLayer.Services.Document.Document, successCallback: (data: { SaveResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveResult: void }>;

	Save(entity: $D.Framework.ServiceLayer.Services.Document.Document): { SaveResult: void };

	SavePromise(entity: $D.Framework.ServiceLayer.Services.Document.Document): Promise<void>;

	Delete(id: string, successCallback: (data: { DeleteResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteResult: void }>;

	Delete(id: string): { DeleteResult: void };

	DeletePromise(id: string): Promise<void>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType, successCallback: (data: { SearchResult: $D.Framework.ServiceLayer.Services.Document.Document[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchResult: $D.Framework.ServiceLayer.Services.Document.Document[] }>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): { SearchResult: $D.Framework.ServiceLayer.Services.Document.Document[] };

	SearchPromise(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): Promise<$D.Framework.ServiceLayer.Services.Document.Document[]>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.Document.Document[], successCallback: (data: { SaveListResult: $D.Framework.ServiceLayer.Services.Document.Document[] }) => any, errorCallback?: () => any): JQueryPromise<{ SaveListResult: $D.Framework.ServiceLayer.Services.Document.Document[] }>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.Document.Document[]): { SaveListResult: $D.Framework.ServiceLayer.Services.Document.Document[] };

	SaveListPromise(entities: $D.Framework.ServiceLayer.Services.Document.Document[]): Promise<$D.Framework.ServiceLayer.Services.Document.Document[]>;
}

interface ServicesStatic {
	DocumentService(): DocumentServiceStatic;
}
