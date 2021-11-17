/// <reference path="./datatypes._base.d.ts" />

interface ImportExportServiceStatic {

	ExportEntity(entityID: string, includeSubEntities: boolean, moduleName: string, requiresApproval: boolean, changedEntitiesOnly: boolean, successCallback: (data: { ExportEntityResult: $D.Framework.Data.DataTypes.FileData }) => any, errorCallback?: () => any): JQueryPromise<{ ExportEntityResult: $D.Framework.Data.DataTypes.FileData }>;

	ExportEntity(entityID: string, includeSubEntities: boolean, moduleName: string, requiresApproval: boolean, changedEntitiesOnly: boolean): { ExportEntityResult: $D.Framework.Data.DataTypes.FileData };

	ExportEntityPromise(entityID: string, includeSubEntities: boolean, moduleName: string, requiresApproval: boolean, changedEntitiesOnly: boolean): Promise<$D.Framework.Data.DataTypes.FileData>;

	ExportEntityToServer(entityID: string, includeSubEntities: boolean, moduleName: string, requiresApproval: boolean, changedEntitiesOnly: boolean, successCallback: (data: { ExportEntityToServerResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ ExportEntityToServerResult: string }>;

	ExportEntityToServer(entityID: string, includeSubEntities: boolean, moduleName: string, requiresApproval: boolean, changedEntitiesOnly: boolean): { ExportEntityToServerResult: string };

	ExportEntityToServerPromise(entityID: string, includeSubEntities: boolean, moduleName: string, requiresApproval: boolean, changedEntitiesOnly: boolean): Promise<string>;

	ExportEntities(entityIDs: string[], includeSubEntities: boolean, moduleName: string, requiresApproval: boolean, changedEntitiesOnly: boolean, successCallback: (data: { ExportEntitiesResult: $D.Framework.Data.DataTypes.FileData }) => any, errorCallback?: () => any): JQueryPromise<{ ExportEntitiesResult: $D.Framework.Data.DataTypes.FileData }>;

	ExportEntities(entityIDs: string[], includeSubEntities: boolean, moduleName: string, requiresApproval: boolean, changedEntitiesOnly: boolean): { ExportEntitiesResult: $D.Framework.Data.DataTypes.FileData };

	ExportEntitiesPromise(entityIDs: string[], includeSubEntities: boolean, moduleName: string, requiresApproval: boolean, changedEntitiesOnly: boolean): Promise<$D.Framework.Data.DataTypes.FileData>;

	ExportEntitiesAndGetFileReference(entityIDs: string[], includeSubEntities: boolean, moduleName: string, requiresApproval: boolean, changedEntitiesOnly: boolean, successCallback: (data: { ExportEntitiesAndGetFileReferenceResult: $D.Framework.ServiceLayer.Services.FileReference.FileReference }) => any, errorCallback?: () => any): JQueryPromise<{ ExportEntitiesAndGetFileReferenceResult: $D.Framework.ServiceLayer.Services.FileReference.FileReference }>;

	ExportEntitiesAndGetFileReference(entityIDs: string[], includeSubEntities: boolean, moduleName: string, requiresApproval: boolean, changedEntitiesOnly: boolean): { ExportEntitiesAndGetFileReferenceResult: $D.Framework.ServiceLayer.Services.FileReference.FileReference };

	ExportEntitiesAndGetFileReferencePromise(entityIDs: string[], includeSubEntities: boolean, moduleName: string, requiresApproval: boolean, changedEntitiesOnly: boolean): Promise<$D.Framework.ServiceLayer.Services.FileReference.FileReference>;

	ExportEntitiesToServer(entityIDs: string[], includeSubEntities: boolean, moduleName: string, requiresApproval: boolean, changedEntitiesOnly: boolean, successCallback: (data: { ExportEntitiesToServerResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ ExportEntitiesToServerResult: string }>;

	ExportEntitiesToServer(entityIDs: string[], includeSubEntities: boolean, moduleName: string, requiresApproval: boolean, changedEntitiesOnly: boolean): { ExportEntitiesToServerResult: string };

	ExportEntitiesToServerPromise(entityIDs: string[], includeSubEntities: boolean, moduleName: string, requiresApproval: boolean, changedEntitiesOnly: boolean): Promise<string>;

	GetExportEntityObjectInfo(entityId: string, changedEntitiesOnly: boolean, successCallback: (data: { GetExportEntityObjectInfoResult: $D.Framework.ServiceLayer.Utilities.ExportObjectInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetExportEntityObjectInfoResult: $D.Framework.ServiceLayer.Utilities.ExportObjectInfo[] }>;

	GetExportEntityObjectInfo(entityId: string, changedEntitiesOnly: boolean): { GetExportEntityObjectInfoResult: $D.Framework.ServiceLayer.Utilities.ExportObjectInfo[] };

	GetExportEntityObjectInfoPromise(entityId: string, changedEntitiesOnly: boolean): Promise<$D.Framework.ServiceLayer.Utilities.ExportObjectInfo[]>;

	GetExportEntitiesObjectInfo(entityIDs: string[], changedEntitiesOnly: boolean, successCallback: (data: { GetExportEntitiesObjectInfoResult: $D.Framework.ServiceLayer.Utilities.ExportObjectInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetExportEntitiesObjectInfoResult: $D.Framework.ServiceLayer.Utilities.ExportObjectInfo[] }>;

	GetExportEntitiesObjectInfo(entityIDs: string[], changedEntitiesOnly: boolean): { GetExportEntitiesObjectInfoResult: $D.Framework.ServiceLayer.Utilities.ExportObjectInfo[] };

	GetExportEntitiesObjectInfoPromise(entityIDs: string[], changedEntitiesOnly: boolean): Promise<$D.Framework.ServiceLayer.Utilities.ExportObjectInfo[]>;

	ImportEntity(data: number[], successCallback: (data: { ImportEntityResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ImportEntityResult: void }>;

	ImportEntity(data: number[]): { ImportEntityResult: void };

	ImportEntityPromise(data: number[]): Promise<void>;

	ImportEntityInFolder(data: number[], parentFolderID: string, successCallback: (data: { ImportEntityInFolderResult: $D.Framework.ServiceLayer.Services.ImportExport.ImportResult }) => any, errorCallback?: () => any): JQueryPromise<{ ImportEntityInFolderResult: $D.Framework.ServiceLayer.Services.ImportExport.ImportResult }>;

	ImportEntityInFolder(data: number[], parentFolderID: string): { ImportEntityInFolderResult: $D.Framework.ServiceLayer.Services.ImportExport.ImportResult };

	ImportEntityInFolderPromise(data: number[], parentFolderID: string): Promise<$D.Framework.ServiceLayer.Services.ImportExport.ImportResult>;

	ImportFromFile(fileData: $D.Framework.Data.DataTypes.FileData, successCallback: (data: { ImportFromFileResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ImportFromFileResult: void }>;

	ImportFromFile(fileData: $D.Framework.Data.DataTypes.FileData): { ImportFromFileResult: void };

	ImportFromFilePromise(fileData: $D.Framework.Data.DataTypes.FileData): Promise<void>;

	ImportFromZip(fileData: $D.Framework.Data.DataTypes.FileData, successCallback: (data: { ImportFromZipResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ImportFromZipResult: void }>;

	ImportFromZip(fileData: $D.Framework.Data.DataTypes.FileData): { ImportFromZipResult: void };

	ImportFromZipPromise(fileData: $D.Framework.Data.DataTypes.FileData): Promise<void>;

	Import(files: $D.Framework.Data.DataTypes.FileData[], parentFolderId: string, importOptions: $D.Framework.ServiceLayer.Services.ImportExport.ImportOptions, successCallback: (data: { ImportResult: $D.Framework.ServiceLayer.Services.ImportExport.ImportResult }) => any, errorCallback?: () => any): JQueryPromise<{ ImportResult: $D.Framework.ServiceLayer.Services.ImportExport.ImportResult }>;

	Import(files: $D.Framework.Data.DataTypes.FileData[], parentFolderId: string, importOptions: $D.Framework.ServiceLayer.Services.ImportExport.ImportOptions): { ImportResult: $D.Framework.ServiceLayer.Services.ImportExport.ImportResult };

	ImportPromise(files: $D.Framework.Data.DataTypes.FileData[], parentFolderId: string, importOptions: $D.Framework.ServiceLayer.Services.ImportExport.ImportOptions): Promise<$D.Framework.ServiceLayer.Services.ImportExport.ImportResult>;

	GetInfoAboutEntitiesInFile(fileContents: number[], successCallback: (data: { GetInfoAboutEntitiesInFileResult: $D.Framework.ServiceLayer.Services.ImportExport.ImportableEntityInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetInfoAboutEntitiesInFileResult: $D.Framework.ServiceLayer.Services.ImportExport.ImportableEntityInfo[] }>;

	GetInfoAboutEntitiesInFile(fileContents: number[]): { GetInfoAboutEntitiesInFileResult: $D.Framework.ServiceLayer.Services.ImportExport.ImportableEntityInfo[] };

	GetInfoAboutEntitiesInFilePromise(fileContents: number[]): Promise<$D.Framework.ServiceLayer.Services.ImportExport.ImportableEntityInfo[]>;

	AttachToProject(entityId: string, projectName: string, successCallback: (data: { AttachToProjectResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AttachToProjectResult: void }>;

	AttachToProject(entityId: string, projectName: string): { AttachToProjectResult: void };

	AttachToProjectPromise(entityId: string, projectName: string): Promise<void>;

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
	ImportExportService(): ImportExportServiceStatic;
}
