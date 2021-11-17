/**
 * Author:akash.singh@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../typings/core/generated/propertyeditorservice.d.ts" />
declare namespace $DP.Editors {
    interface IMultiFilePickerEditorOptions {
        holder: JQuery;
        editingContextId?: string;
        path?: string[];
        fileDetails?: Array<$DP.Common.FileDetails>;
    }
    class MultiFilePickerEditor {
        editingContextId: string;
        path: string[];
        uploadExistingFiles: boolean;
        fileDetails: Array<$DP.Common.FileDetails>;
        holder: JQuery;
        fileUpload: $DP.Common.FileUploadControl;
        constructor(options: IMultiFilePickerEditorOptions);
        onProgress: (id: any, fileName: any, loaded: any, total: any) => void;
        onAllComplete: (succeeded: any, failed: any) => Promise<void>;
        onReset: () => Promise<void>;
        submitFiles(fileName?: string): Promise<void>;
        private createMultiFileUploader;
        private getHtmlContent;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
