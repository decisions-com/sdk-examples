/**
 * Author:khuzema@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="fineuploader.d.ts" />
/// <reference path="../typings/core/generated/FileReferenceService.d.ts" />
declare namespace $DP.Helpers {
    export interface FineUploaderOptions {
        element: HTMLElement;
        maxFileSize?: number;
        uniqueId: string;
        allowedExtensions?: string[];
        allowMultipleItems?: boolean;
        invalidExtensionMessage?: string;
        isDisposableDragDrop?: boolean;
        isPersistentFile?: boolean;
    }
    export interface FineUploaderCallBack extends CommonCallBack {
        onProgress?: (id: any, fileName: any, loaded: any, total: any) => void;
        onComplete?: (id: any, fileName: any, responseJSON: any) => void;
    }
    export interface FineDragDropCallBack extends CommonCallBack {
        processingDroppedFiles?: () => void;
        processingDroppedFilesComplete?: (files: any, dropTarget: any, deff: any) => void;
        dragedFileOnProcess?: (id: any, fileName: any, loaded: any, total: any) => void;
        dragedFileProcessComplete?: (id: any, fileName: any, responseJSON: any) => void;
        dropError?: (errorCode: any, errorRelatedData: any) => void;
    }
    interface CommonCallBack {
        onAllComplete?: (succeeded: any, failed: any) => void;
        onError?: (id: any, name: any, errorReason: any, xhr: any) => void;
        filterFiles?: (files: File[]) => File[];
    }
    export interface ChunkUploaderInfo {
        fileName: string;
        chunkUploader: ChunkUploader;
    }
    export class FineUploader {
        private chunkSize;
        allowedExtensions: string[];
        fineUploader: any;
        fineUploaderBasicInstance: any;
        fineUploaderDragArea: any;
        invalidExtensionMessage?: string;
        private chunkUploaderInfo;
        private fileUploadOptions;
        submittedFiles: File[];
        dragEnterListener: any;
        private inputFile;
        DROP_AREA_ACTIVE_CLASS: string;
        createFileUploader(options: FineUploaderOptions, callBacks: FineUploaderCallBack, templateId: string): void;
        createFileDragDropUploader(options: FineUploaderOptions, callBacks: FineDragDropCallBack, classes: string): any;
        private dropErrorHandler;
        private addDisposeListner;
        private dispose;
        cancelUpload(fileName: string): void;
        private isValidFilesSize;
        private getFileWithTooLargeSize;
        private KBytesToBytes;
        private fileListToFileArray;
        private uploadWithCheckingMaxSize;
        /**
         * Returns the files that has not been already uploaded
         * @param files
         */
        private filterFiles;
        private uploadFilesDirectly;
        private uploadFile;
        private isValidFileDrag;
        private getValidFiles;
        private isValidFileExtension;
        private validateExtensionFromSetting;
        private validateExtensionFromOptions;
        private getMessageForUser;
    }
    export {};
}
interface JQuery {
    fineUploader(option: $DP.Helpers.FineUploaderOptions, callBacks: $DP.Helpers.FineUploaderCallBack): $DP.Helpers.FineUploader;
    fineUploader(methodName: string, option: $DP.Helpers.FineUploaderOptions, callBacks: any, classes?: string): $DP.Helpers.FineUploader;
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
