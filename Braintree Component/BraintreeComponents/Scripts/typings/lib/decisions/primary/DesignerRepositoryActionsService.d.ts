/// <reference path="./datatypes._base.d.ts" />

interface DesignerRepositoryActionsServiceStatic {

	GetDownloadObjectContextId(objectFolderId: string, successCallback: (data: { GetDownloadObjectContextIdResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetDownloadObjectContextIdResult: string }>;

	GetDownloadObjectContextId(objectFolderId: string): { GetDownloadObjectContextIdResult: string };

	GetDownloadObjectContextIdPromise(objectFolderId: string): Promise<string>;

	GetDownloadObjectByDateContextId(objectFolderId: string, successCallback: (data: { GetDownloadObjectByDateContextIdResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetDownloadObjectByDateContextIdResult: string }>;

	GetDownloadObjectByDateContextId(objectFolderId: string): { GetDownloadObjectByDateContextIdResult: string };

	GetDownloadObjectByDateContextIdPromise(objectFolderId: string): Promise<string>;

	GetDownloadObjectByRevisionContextId(objectFolderId: string, successCallback: (data: { GetDownloadObjectByRevisionContextIdResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetDownloadObjectByRevisionContextIdResult: string }>;

	GetDownloadObjectByRevisionContextId(objectFolderId: string): { GetDownloadObjectByRevisionContextIdResult: string };

	GetDownloadObjectByRevisionContextIdPromise(objectFolderId: string): Promise<string>;

	GetDownloadFilePathFromContext(contextId: string, successCallback: (data: { GetDownloadFilePathFromContextResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetDownloadFilePathFromContextResult: string }>;

	GetDownloadFilePathFromContext(contextId: string): { GetDownloadFilePathFromContextResult: string };

	GetDownloadFilePathFromContextPromise(contextId: string): Promise<string>;

	GetResourcePathByFacadeFolder(folderId: string, maxLengt: any, successCallback: (data: { GetResourcePathByFacadeFolderResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetResourcePathByFacadeFolderResult: string }>;

	GetResourcePathByFacadeFolder(folderId: string, maxLengt: any): { GetResourcePathByFacadeFolderResult: string };

	GetResourcePathByFacadeFolderPromise(folderId: string, maxLengt: any): Promise<string>;

	GetBranchFolderIdByFacadeFolder(folderId: string, successCallback: (data: { GetBranchFolderIdByFacadeFolderResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetBranchFolderIdByFacadeFolderResult: string }>;

	GetBranchFolderIdByFacadeFolder(folderId: string): { GetBranchFolderIdByFacadeFolderResult: string };

	GetBranchFolderIdByFacadeFolderPromise(folderId: string): Promise<string>;

	GetBranchFolderIdByFolder(folderId: string, successCallback: (data: { GetBranchFolderIdByFolderResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetBranchFolderIdByFolderResult: string }>;

	GetBranchFolderIdByFolder(folderId: string): { GetBranchFolderIdByFolderResult: string };

	GetBranchFolderIdByFolderPromise(folderId: string): Promise<string>;

	FindResourceInBranches(resourceFolderId: string, successCallback: (data: { FindResourceInBranchesResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ FindResourceInBranchesResult: string[] }>;

	FindResourceInBranches(resourceFolderId: string): { FindResourceInBranchesResult: string[] };

	FindResourceInBranchesPromise(resourceFolderId: string): Promise<string[]>;

	IsResourceDeleted(resourceFolderId: string, successCallback: (data: { IsResourceDeletedResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ IsResourceDeletedResult: boolean }>;

	IsResourceDeleted(resourceFolderId: string): { IsResourceDeletedResult: boolean };

	IsResourceDeletedPromise(resourceFolderId: string): Promise<boolean>;

	DeleteResourceFromBranches(resourceFolderId: string, branchNames: string[], successCallback: (data: { DeleteResourceFromBranchesResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteResourceFromBranchesResult: void }>;

	DeleteResourceFromBranches(resourceFolderId: string, branchNames: string[]): { DeleteResourceFromBranchesResult: void };

	DeleteResourceFromBranchesPromise(resourceFolderId: string, branchNames: string[]): Promise<void>;

	DeleteRepositoryResourceAtRevision(resourceFolderId: string, successCallback: (data: { DeleteRepositoryResourceAtRevisionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteRepositoryResourceAtRevisionResult: void }>;

	DeleteRepositoryResourceAtRevision(resourceFolderId: string): { DeleteRepositoryResourceAtRevisionResult: void };

	DeleteRepositoryResourceAtRevisionPromise(resourceFolderId: string): Promise<void>;
}

interface ServicesStatic {
	DesignerRepositoryActionsService(): DesignerRepositoryActionsServiceStatic;
}
