/// <reference path="./datatypes._base.d.ts" />

interface FileReferenceServiceStatic {

	StartUpload(fileName: string, size: number, fileDateTime: Date, successCallback: (data: { StartUploadResult: $D.Framework.ServiceLayer.Services.FileReference.FileReference }) => any, errorCallback?: () => any): JQueryPromise<{ StartUploadResult: $D.Framework.ServiceLayer.Services.FileReference.FileReference }>;

	StartUpload(fileName: string, size: number, fileDateTime: Date): { StartUploadResult: $D.Framework.ServiceLayer.Services.FileReference.FileReference };

	StartUploadPromise(fileName: string, size: number, fileDateTime: Date): Promise<$D.Framework.ServiceLayer.Services.FileReference.FileReference>;

	StartPersistentUpload(fileName: string, size: number, fileDateTime: Date, successCallback: (data: { StartPersistentUploadResult: $D.Framework.ServiceLayer.Services.FileReference.FileReference }) => any, errorCallback?: () => any): JQueryPromise<{ StartPersistentUploadResult: $D.Framework.ServiceLayer.Services.FileReference.FileReference }>;

	StartPersistentUpload(fileName: string, size: number, fileDateTime: Date): { StartPersistentUploadResult: $D.Framework.ServiceLayer.Services.FileReference.FileReference };

	StartPersistentUploadPromise(fileName: string, size: number, fileDateTime: Date): Promise<$D.Framework.ServiceLayer.Services.FileReference.FileReference>;

	StartUploadWithFixedFileName(fileName: string, size: number, fileDateTime: Date, successCallback: (data: { StartUploadWithFixedFileNameResult: $D.Framework.ServiceLayer.Services.FileReference.FileReference }) => any, errorCallback?: () => any): JQueryPromise<{ StartUploadWithFixedFileNameResult: $D.Framework.ServiceLayer.Services.FileReference.FileReference }>;

	StartUploadWithFixedFileName(fileName: string, size: number, fileDateTime: Date): { StartUploadWithFixedFileNameResult: $D.Framework.ServiceLayer.Services.FileReference.FileReference };

	StartUploadWithFixedFileNamePromise(fileName: string, size: number, fileDateTime: Date): Promise<$D.Framework.ServiceLayer.Services.FileReference.FileReference>;

	DownloadFile(id: string, filename: string, successCallback: (data: { DownloadFileResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ DownloadFileResult: any }>;

	DownloadFile(id: string, filename: string): { DownloadFileResult: any };

	DownloadFilePromise(id: string, filename: string): Promise<any>;

	UploadChunk(id: string, chunk: number[], successCallback: (data: { UploadChunkResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UploadChunkResult: void }>;

	UploadChunk(id: string, chunk: number[]): { UploadChunkResult: void };

	UploadChunkPromise(id: string, chunk: number[]): Promise<void>;

	UploadChunkInStream(stream: any, successCallback: (data: { UploadChunkInStreamResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ UploadChunkInStreamResult: string }>;

	UploadChunkInStream(stream: any): { UploadChunkInStreamResult: string };

	UploadChunkInStreamPromise(stream: any): Promise<string>;

	FinishUpload(id: string, successCallback: (data: { FinishUploadResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ FinishUploadResult: void }>;

	FinishUpload(id: string): { FinishUploadResult: void };

	FinishUploadPromise(id: string): Promise<void>;

	FinishPersistentUpload(id: string, successCallback: (data: { FinishPersistentUploadResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ FinishPersistentUploadResult: void }>;

	FinishPersistentUpload(id: string): { FinishPersistentUploadResult: void };

	FinishPersistentUploadPromise(id: string): Promise<void>;

	GetData(fileReference: $D.Framework.ServiceLayer.Services.FileReference.FileReference, offset: number, chunkSize: number, successCallback: (data: { GetDataResult: $D.Framework.Data.DataTypes.FileData }) => any, errorCallback?: () => any): JQueryPromise<{ GetDataResult: $D.Framework.Data.DataTypes.FileData }>;

	GetData(fileReference: $D.Framework.ServiceLayer.Services.FileReference.FileReference, offset: number, chunkSize: number): { GetDataResult: $D.Framework.Data.DataTypes.FileData };

	GetDataPromise(fileReference: $D.Framework.ServiceLayer.Services.FileReference.FileReference, offset: number, chunkSize: number): Promise<$D.Framework.Data.DataTypes.FileData>;

	GetFileState(id: string, successCallback: (data: { GetFileStateResult: $D.Framework.ServiceLayer.Services.FileReference.FileState }) => any, errorCallback?: () => any): JQueryPromise<{ GetFileStateResult: $D.Framework.ServiceLayer.Services.FileReference.FileState }>;

	GetFileState(id: string): { GetFileStateResult: $D.Framework.ServiceLayer.Services.FileReference.FileState };

	GetFileStatePromise(id: string): Promise<$D.Framework.ServiceLayer.Services.FileReference.FileState>;

	DeleteFile(id: string, successCallback: (data: { DeleteFileResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteFileResult: void }>;

	DeleteFile(id: string): { DeleteFileResult: void };

	DeleteFilePromise(id: string): Promise<void>;

	GetDirectDownloadURLFromBase(id: string, baseURL: string, successCallback: (data: { GetDirectDownloadURLFromBaseResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetDirectDownloadURLFromBaseResult: string }>;

	GetDirectDownloadURLFromBase(id: string, baseURL: string): { GetDirectDownloadURLFromBaseResult: string };

	GetDirectDownloadURLFromBasePromise(id: string, baseURL: string): Promise<string>;

	GetDirectDownloadURL(id: string, successCallback: (data: { GetDirectDownloadURLResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetDirectDownloadURLResult: string }>;

	GetDirectDownloadURL(id: string): { GetDirectDownloadURLResult: string };

	GetDirectDownloadURLPromise(id: string): Promise<string>;

	CreateEntityFromFileReference(reference: $D.Framework.ServiceLayer.Services.FileReference.FileReference, folderId: string, successCallback: (data: { CreateEntityFromFileReferenceResult: $D.Framework.ServiceLayer.Services.FileReference.FileReferenceEntity }) => any, errorCallback?: () => any): JQueryPromise<{ CreateEntityFromFileReferenceResult: $D.Framework.ServiceLayer.Services.FileReference.FileReferenceEntity }>;

	CreateEntityFromFileReference(reference: $D.Framework.ServiceLayer.Services.FileReference.FileReference, folderId: string): { CreateEntityFromFileReferenceResult: $D.Framework.ServiceLayer.Services.FileReference.FileReferenceEntity };

	CreateEntityFromFileReferencePromise(reference: $D.Framework.ServiceLayer.Services.FileReference.FileReference, folderId: string): Promise<$D.Framework.ServiceLayer.Services.FileReference.FileReferenceEntity>;

	GetFileReferenceEntityByReferenceId(id: string, successCallback: (data: { GetFileReferenceEntityByReferenceIdResult: $D.Framework.ServiceLayer.Services.FileReference.FileReferenceEntity }) => any, errorCallback?: () => any): JQueryPromise<{ GetFileReferenceEntityByReferenceIdResult: $D.Framework.ServiceLayer.Services.FileReference.FileReferenceEntity }>;

	GetFileReferenceEntityByReferenceId(id: string): { GetFileReferenceEntityByReferenceIdResult: $D.Framework.ServiceLayer.Services.FileReference.FileReferenceEntity };

	GetFileReferenceEntityByReferenceIdPromise(id: string): Promise<$D.Framework.ServiceLayer.Services.FileReference.FileReferenceEntity>;

	GetFile(id: string, successCallback: (data: { GetFileResult: $D.Framework.ServiceLayer.Services.FileReference.FileReference }) => any, errorCallback?: () => any): JQueryPromise<{ GetFileResult: $D.Framework.ServiceLayer.Services.FileReference.FileReference }>;

	GetFile(id: string): { GetFileResult: $D.Framework.ServiceLayer.Services.FileReference.FileReference };

	GetFilePromise(id: string): Promise<$D.Framework.ServiceLayer.Services.FileReference.FileReference>;

	ConvertHTMLToDocFile(html: string, successCallback: (data: { ConvertHTMLToDocFileResult: $D.Framework.Data.DataTypes.FileData }) => any, errorCallback?: () => any): JQueryPromise<{ ConvertHTMLToDocFileResult: $D.Framework.Data.DataTypes.FileData }>;

	ConvertHTMLToDocFile(html: string): { ConvertHTMLToDocFileResult: $D.Framework.Data.DataTypes.FileData };

	ConvertHTMLToDocFilePromise(html: string): Promise<$D.Framework.Data.DataTypes.FileData>;

	GetFileDataWithPath(fileReferenceId: string, successCallback: (data: { GetFileDataWithPathResult: $D.Framework.Data.DataTypes.FileDataWithReferencePath }) => any, errorCallback?: () => any): JQueryPromise<{ GetFileDataWithPathResult: $D.Framework.Data.DataTypes.FileDataWithReferencePath }>;

	GetFileDataWithPath(fileReferenceId: string): { GetFileDataWithPathResult: $D.Framework.Data.DataTypes.FileDataWithReferencePath };

	GetFileDataWithPathPromise(fileReferenceId: string): Promise<$D.Framework.Data.DataTypes.FileDataWithReferencePath>;

	WriteFile(fileName: string, relativeDirectory: string[], fileData: number[], successCallback: (data: { WriteFileResult: $D.Framework.ServiceLayer.Services.FileReference.FileReference }) => any, errorCallback?: () => any): JQueryPromise<{ WriteFileResult: $D.Framework.ServiceLayer.Services.FileReference.FileReference }>;

	WriteFile(fileName: string, relativeDirectory: string[], fileData: number[]): { WriteFileResult: $D.Framework.ServiceLayer.Services.FileReference.FileReference };

	WriteFilePromise(fileName: string, relativeDirectory: string[], fileData: number[]): Promise<$D.Framework.ServiceLayer.Services.FileReference.FileReference>;

	ReadFileBytes(filePath: string, successCallback: (data: { ReadFileBytesResult: number[] }) => any, errorCallback?: () => any): JQueryPromise<{ ReadFileBytesResult: number[] }>;

	ReadFileBytes(filePath: string): { ReadFileBytesResult: number[] };

	ReadFileBytesPromise(filePath: string): Promise<number[]>;

	WriteToFile(filePath: string, bytes: number[], successCallback: (data: { WriteToFileResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ WriteToFileResult: void }>;

	WriteToFile(filePath: string, bytes: number[]): { WriteToFileResult: void };

	WriteToFilePromise(filePath: string, bytes: number[]): Promise<void>;

	AddEntityAssociations(filePath: string, fileId: string, fileContents: number[], successCallback: (data: { AddEntityAssociationsResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ AddEntityAssociationsResult: string }>;

	AddEntityAssociations(filePath: string, fileId: string, fileContents: number[]): { AddEntityAssociationsResult: string };

	AddEntityAssociationsPromise(filePath: string, fileId: string, fileContents: number[]): Promise<string>;

	MoveFileAndAssociateToEntity(filePath: string, relativeDirectory: string[], type: any, typeId: string, id: string, successCallback: (data: { MoveFileAndAssociateToEntityResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ MoveFileAndAssociateToEntityResult: string }>;

	MoveFileAndAssociateToEntity(filePath: string, relativeDirectory: string[], type: any, typeId: string, id: string): { MoveFileAndAssociateToEntityResult: string };

	MoveFileAndAssociateToEntityPromise(filePath: string, relativeDirectory: string[], type: any, typeId: string, id: string): Promise<string>;

	WriteFileAssociatedToEntity(fileName: string, relativeDirectory: string[], fileData: number[], typeName: string, typeId: string, successCallback: (data: { WriteFileAssociatedToEntityResult: $D.Framework.ServiceLayer.Services.FileReference.FileReference }) => any, errorCallback?: () => any): JQueryPromise<{ WriteFileAssociatedToEntityResult: $D.Framework.ServiceLayer.Services.FileReference.FileReference }>;

	WriteFileAssociatedToEntity(fileName: string, relativeDirectory: string[], fileData: number[], typeName: string, typeId: string): { WriteFileAssociatedToEntityResult: $D.Framework.ServiceLayer.Services.FileReference.FileReference };

	WriteFileAssociatedToEntityPromise(fileName: string, relativeDirectory: string[], fileData: number[], typeName: string, typeId: string): Promise<$D.Framework.ServiceLayer.Services.FileReference.FileReference>;

	WriteExpiringFile(fileName: string, relativeDirectory: string[], fileData: number[], cleanUpDate: Date, successCallback: (data: { WriteExpiringFileResult: $D.Framework.ServiceLayer.Services.FileReference.FileReference }) => any, errorCallback?: () => any): JQueryPromise<{ WriteExpiringFileResult: $D.Framework.ServiceLayer.Services.FileReference.FileReference }>;

	WriteExpiringFile(fileName: string, relativeDirectory: string[], fileData: number[], cleanUpDate: Date): { WriteExpiringFileResult: $D.Framework.ServiceLayer.Services.FileReference.FileReference };

	WriteExpiringFilePromise(fileName: string, relativeDirectory: string[], fileData: number[], cleanUpDate: Date): Promise<$D.Framework.ServiceLayer.Services.FileReference.FileReference>;

	WriteTempFile(fileName: string, fileDateTime: Date, fileData: number[], isFullFilePath: boolean, successCallback: (data: { WriteTempFileResult: $D.Framework.ServiceLayer.Services.FileReference.FileReference }) => any, errorCallback?: () => any): JQueryPromise<{ WriteTempFileResult: $D.Framework.ServiceLayer.Services.FileReference.FileReference }>;

	WriteTempFile(fileName: string, fileDateTime: Date, fileData: number[], isFullFilePath: boolean): { WriteTempFileResult: $D.Framework.ServiceLayer.Services.FileReference.FileReference };

	WriteTempFilePromise(fileName: string, fileDateTime: Date, fileData: number[], isFullFilePath: boolean): Promise<$D.Framework.ServiceLayer.Services.FileReference.FileReference>;

	WritePersistentFile(fileName: string, fileData: number[], successCallback: (data: { WritePersistentFileResult: $D.Framework.ServiceLayer.Services.FileReference.FileReference }) => any, errorCallback?: () => any): JQueryPromise<{ WritePersistentFileResult: $D.Framework.ServiceLayer.Services.FileReference.FileReference }>;

	WritePersistentFile(fileName: string, fileData: number[]): { WritePersistentFileResult: $D.Framework.ServiceLayer.Services.FileReference.FileReference };

	WritePersistentFilePromise(fileName: string, fileData: number[]): Promise<$D.Framework.ServiceLayer.Services.FileReference.FileReference>;

	ReWriteTempFile(filePath: string, contents: number[], successCallback: (data: { ReWriteTempFileResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ ReWriteTempFileResult: string }>;

	ReWriteTempFile(filePath: string, contents: number[]): { ReWriteTempFileResult: string };

	ReWriteTempFilePromise(filePath: string, contents: number[]): Promise<string>;

	GetFileData(fileName: string, successCallback: (data: { GetFileDataResult: $D.Framework.Data.DataTypes.FileData }) => any, errorCallback?: () => any): JQueryPromise<{ GetFileDataResult: $D.Framework.Data.DataTypes.FileData }>;

	GetFileData(fileName: string): { GetFileDataResult: $D.Framework.Data.DataTypes.FileData };

	GetFileDataPromise(fileName: string): Promise<$D.Framework.Data.DataTypes.FileData>;

	GetFileDataFromPath(path: string[], fileName: string, successCallback: (data: { GetFileDataFromPathResult: $D.Framework.Data.DataTypes.FileData }) => any, errorCallback?: () => any): JQueryPromise<{ GetFileDataFromPathResult: $D.Framework.Data.DataTypes.FileData }>;

	GetFileDataFromPath(path: string[], fileName: string): { GetFileDataFromPathResult: $D.Framework.Data.DataTypes.FileData };

	GetFileDataFromPathPromise(path: string[], fileName: string): Promise<$D.Framework.Data.DataTypes.FileData>;

	DownloadJmeterScript(componentRegistrationId: string, postUrl: string, postData: string, successCallback: (data: { DownloadJmeterScriptResult: $D.Framework.Data.DataTypes.FileData }) => any, errorCallback?: () => any): JQueryPromise<{ DownloadJmeterScriptResult: $D.Framework.Data.DataTypes.FileData }>;

	DownloadJmeterScript(componentRegistrationId: string, postUrl: string, postData: string): { DownloadJmeterScriptResult: $D.Framework.Data.DataTypes.FileData };

	DownloadJmeterScriptPromise(componentRegistrationId: string, postUrl: string, postData: string): Promise<$D.Framework.Data.DataTypes.FileData>;

	DownloadPostmanCollection(componentRegistrationId: string, postUrl: string, postData: string, successCallback: (data: { DownloadPostmanCollectionResult: $D.Framework.Data.DataTypes.FileData }) => any, errorCallback?: () => any): JQueryPromise<{ DownloadPostmanCollectionResult: $D.Framework.Data.DataTypes.FileData }>;

	DownloadPostmanCollection(componentRegistrationId: string, postUrl: string, postData: string): { DownloadPostmanCollectionResult: $D.Framework.Data.DataTypes.FileData };

	DownloadPostmanCollectionPromise(componentRegistrationId: string, postUrl: string, postData: string): Promise<$D.Framework.Data.DataTypes.FileData>;

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

	GetByFolderID(folderID: string, successCallback: (data: { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.FileReference.FileReferenceEntity[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByFolderIDResult: $D.Framework.ServiceLayer.Services.FileReference.FileReferenceEntity[] }>;

	GetByFolderID(folderID: string): { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.FileReference.FileReferenceEntity[] };

	GetByFolderIDPromise(folderID: string): Promise<$D.Framework.ServiceLayer.Services.FileReference.FileReferenceEntity[]>;

	GetByIDs(ids: string[], successCallback: (data: { GetByIDsResult: $D.Framework.ServiceLayer.Services.FileReference.FileReferenceEntity[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDsResult: $D.Framework.ServiceLayer.Services.FileReference.FileReferenceEntity[] }>;

	GetByIDs(ids: string[]): { GetByIDsResult: $D.Framework.ServiceLayer.Services.FileReference.FileReferenceEntity[] };

	GetByIDsPromise(ids: string[]): Promise<$D.Framework.ServiceLayer.Services.FileReference.FileReferenceEntity[]>;

	GetByID(id: string, successCallback: (data: { GetByIDResult: $D.Framework.ServiceLayer.Services.FileReference.FileReferenceEntity }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDResult: $D.Framework.ServiceLayer.Services.FileReference.FileReferenceEntity }>;

	GetByID(id: string): { GetByIDResult: $D.Framework.ServiceLayer.Services.FileReference.FileReferenceEntity };

	GetByIDPromise(id: string): Promise<$D.Framework.ServiceLayer.Services.FileReference.FileReferenceEntity>;

	GetAll(successCallback: (data: { GetAllResult: $D.Framework.ServiceLayer.Services.FileReference.FileReferenceEntity[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllResult: $D.Framework.ServiceLayer.Services.FileReference.FileReferenceEntity[] }>;

	GetAll(): { GetAllResult: $D.Framework.ServiceLayer.Services.FileReference.FileReferenceEntity[] };

	GetAllPromise(): Promise<$D.Framework.ServiceLayer.Services.FileReference.FileReferenceEntity[]>;

	Save(entity: $D.Framework.ServiceLayer.Services.FileReference.FileReferenceEntity, successCallback: (data: { SaveResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveResult: void }>;

	Save(entity: $D.Framework.ServiceLayer.Services.FileReference.FileReferenceEntity): { SaveResult: void };

	SavePromise(entity: $D.Framework.ServiceLayer.Services.FileReference.FileReferenceEntity): Promise<void>;

	Delete(id: string, successCallback: (data: { DeleteResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteResult: void }>;

	Delete(id: string): { DeleteResult: void };

	DeletePromise(id: string): Promise<void>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType, successCallback: (data: { SearchResult: $D.Framework.ServiceLayer.Services.FileReference.FileReferenceEntity[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchResult: $D.Framework.ServiceLayer.Services.FileReference.FileReferenceEntity[] }>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): { SearchResult: $D.Framework.ServiceLayer.Services.FileReference.FileReferenceEntity[] };

	SearchPromise(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): Promise<$D.Framework.ServiceLayer.Services.FileReference.FileReferenceEntity[]>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.FileReference.FileReferenceEntity[], successCallback: (data: { SaveListResult: $D.Framework.ServiceLayer.Services.FileReference.FileReferenceEntity[] }) => any, errorCallback?: () => any): JQueryPromise<{ SaveListResult: $D.Framework.ServiceLayer.Services.FileReference.FileReferenceEntity[] }>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.FileReference.FileReferenceEntity[]): { SaveListResult: $D.Framework.ServiceLayer.Services.FileReference.FileReferenceEntity[] };

	SaveListPromise(entities: $D.Framework.ServiceLayer.Services.FileReference.FileReferenceEntity[]): Promise<$D.Framework.ServiceLayer.Services.FileReference.FileReferenceEntity[]>;
}

interface ServicesStatic {
	FileReferenceService(): FileReferenceServiceStatic;
}
