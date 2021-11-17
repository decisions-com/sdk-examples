/// <reference path="./datatypes._base.d.ts" />

interface CssServiceStatic {

	GetAllNonDefaultCssDocuments(successCallback: (data: { GetAllNonDefaultCssDocumentsResult: $D.Framework.ServiceLayer.Services.Document.Document[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllNonDefaultCssDocumentsResult: $D.Framework.ServiceLayer.Services.Document.Document[] }>;

	GetAllNonDefaultCssDocuments(): { GetAllNonDefaultCssDocumentsResult: $D.Framework.ServiceLayer.Services.Document.Document[] };

	GetAllNonDefaultCssDocumentsPromise(): Promise<$D.Framework.ServiceLayer.Services.Document.Document[]>;

	GetAllDefaultCssDocuments(successCallback: (data: { GetAllDefaultCssDocumentsResult: $D.Framework.ServiceLayer.Services.Document.Document[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllDefaultCssDocumentsResult: $D.Framework.ServiceLayer.Services.Document.Document[] }>;

	GetAllDefaultCssDocuments(): { GetAllDefaultCssDocumentsResult: $D.Framework.ServiceLayer.Services.Document.Document[] };

	GetAllDefaultCssDocumentsPromise(): Promise<$D.Framework.ServiceLayer.Services.Document.Document[]>;

	GetAllDefaultCssDocumentIds(successCallback: (data: { GetAllDefaultCssDocumentIdsResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllDefaultCssDocumentIdsResult: string[] }>;

	GetAllDefaultCssDocumentIds(): { GetAllDefaultCssDocumentIdsResult: string[] };

	GetAllDefaultCssDocumentIdsPromise(): Promise<string[]>;

	GetCssByDocumentIds(documentIds: string[], successCallback: (data: { GetCssByDocumentIdsResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetCssByDocumentIdsResult: string }>;

	GetCssByDocumentIds(documentIds: string[]): { GetCssByDocumentIdsResult: string };

	GetCssByDocumentIdsPromise(documentIds: string[]): Promise<string>;

	GetClassesInDocuments(documentIds: string[], successCallback: (data: { GetClassesInDocumentsResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetClassesInDocumentsResult: string[] }>;

	GetClassesInDocuments(documentIds: string[]): { GetClassesInDocumentsResult: string[] };

	GetClassesInDocumentsPromise(documentIds: string[]): Promise<string[]>;

	GetDocumentsByDocumentIds(documentIds: string[], successCallback: (data: { GetDocumentsByDocumentIdsResult: $D.Framework.ServiceLayer.Services.Document.Document[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetDocumentsByDocumentIdsResult: $D.Framework.ServiceLayer.Services.Document.Document[] }>;

	GetDocumentsByDocumentIds(documentIds: string[]): { GetDocumentsByDocumentIdsResult: $D.Framework.ServiceLayer.Services.Document.Document[] };

	GetDocumentsByDocumentIdsPromise(documentIds: string[]): Promise<$D.Framework.ServiceLayer.Services.Document.Document[]>;

	MakeDocumentDefault(docId: string, isDefault: boolean, successCallback: (data: { MakeDocumentDefaultResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ MakeDocumentDefaultResult: void }>;

	MakeDocumentDefault(docId: string, isDefault: boolean): { MakeDocumentDefaultResult: void };

	MakeDocumentDefaultPromise(docId: string, isDefault: boolean): Promise<void>;

	MarkAsTileCSS(docId: string, isTileCSS: boolean, successCallback: (data: { MarkAsTileCSSResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ MarkAsTileCSSResult: void }>;

	MarkAsTileCSS(docId: string, isTileCSS: boolean): { MarkAsTileCSSResult: void };

	MarkAsTileCSSPromise(docId: string, isTileCSS: boolean): Promise<void>;

	UpdateCssDocument(documentId: string, fileData: $D.Framework.Data.DataTypes.FileData, successCallback: (data: { UpdateCssDocumentResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateCssDocumentResult: void }>;

	UpdateCssDocument(documentId: string, fileData: $D.Framework.Data.DataTypes.FileData): { UpdateCssDocumentResult: void };

	UpdateCssDocumentPromise(documentId: string, fileData: $D.Framework.Data.DataTypes.FileData): Promise<void>;

	RenameCssDocument(documentId: string, newDocumentName: string, successCallback: (data: { RenameCssDocumentResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RenameCssDocumentResult: void }>;

	RenameCssDocument(documentId: string, newDocumentName: string): { RenameCssDocumentResult: void };

	RenameCssDocumentPromise(documentId: string, newDocumentName: string): Promise<void>;

	GenrateCssForDocumentsIfNotExist(successCallback: (data: { GenrateCssForDocumentsIfNotExistResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ GenrateCssForDocumentsIfNotExistResult: void }>;

	GenrateCssForDocumentsIfNotExist(): { GenrateCssForDocumentsIfNotExistResult: void };

	GenrateCssForDocumentsIfNotExistPromise(): Promise<void>;

	DeleteFile(documentId: string, successCallback: (data: { DeleteFileResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteFileResult: void }>;

	DeleteFile(documentId: string): { DeleteFileResult: void };

	DeleteFilePromise(documentId: string): Promise<void>;
}

interface ServicesStatic {
	CssService(): CssServiceStatic;
}
