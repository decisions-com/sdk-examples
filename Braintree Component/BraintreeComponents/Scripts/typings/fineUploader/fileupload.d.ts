/**
 * Author:akash.singh@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Common {
    interface FileUploadDisplayOptions {
        button?: FileUploadButtonDisplayOptions;
        fileName?: StyleProps;
        dragFileLabel?: FileUploadDragFileLabelOptions;
        chooseFileLabel?: ChooseFileLabelOptions;
    }
    interface FileUploadButtonDisplayOptions extends StyleProps {
        buttonText?: string;
        buttonType?: Silverdark.Components.FileUploadButtonType | Silverdark.Components.MultiFileUploadButtonType;
        buttonCssClass?: string;
        fontStyle?: string;
        useFullSize?: boolean;
        clipCssClass?: string;
        horizontalAlignmentClass?: string;
        verticalAlignmentClass?: string;
        linkCssClass?: string;
    }
    interface FileUploadDragFileLabelOptions extends StyleProps {
        dragFileLabelText?: string;
    }
    interface ChooseFileLabelOptions extends StyleProps {
        chooseFileLabelText?: string;
    }
    interface FileUploadOptions {
        id?: string;
        maxFileSize?: number;
        IsMultiFileUpload: boolean;
        processingSelectedFiles?: (id: any, fileName: any, loaded: any, total: any) => void;
        processingSelectedFilesComplete?: (id: any, fileName: any, responseJSON: any) => void;
        processingDroppedFiles?: () => void;
        processingDroppedFilesComplete?: (files: any, dropTarget: any) => void;
        dragedFileOnProcess?: (id: any, fileName: any, loaded: any, total: any) => void;
        dragedFileProcessComplete?: (id: any, fileName: any, responseJSON: any) => void;
        afterFileUploadCompleted?: () => void;
        dialogOkClick?: (event?: {
            component: FileUploadControl;
        }) => void;
        onAllComplete?: (succeeded: any, failed: any) => void;
        allowedExtensions?: string[];
        onError?: (id: any, name: any, errorReason: any, xhr: any) => void;
        onDropError?: (errorCode: any, errorRelatedData: any) => void;
        openInDialog?: boolean;
        resetUploadedFile?: () => void;
        promise?: any;
        Translate?: boolean;
        displayOptions?: FileUploadDisplayOptions;
        downloadFile?: (id: any, fileName: any, fileNameWithId: any) => void;
        invalidExtensionMessage?: string;
        dialogOkBtnText?: string;
        dialogCancelBtnText?: string;
        dialogTitleText?: string;
        isDisabled?: boolean;
        customFileName?: string;
        dialogHeaderClass?: string;
        dialogBodyClass?: string;
        dialogFooterClass?: string;
        isPersistentFile?: boolean;
        tabindex?: number;
    }
    interface FileUploadOptionsForMobile extends FileUploadOptions {
        MobileUploaderTemplateId: string;
    }
    interface UploadExistingFileOption extends FileUploadOptions {
        FileDetails: FileDetails[];
    }
    interface FileDetails {
        fileName: string;
        fileSize: string;
        filePath?: string;
        fileNameWithId?: string;
    }
    interface ProgressBarInfo {
        fileName: string;
        progressBarTemplate: JQuery;
    }
    class FileUploadControl {
        private options;
        private dataFileHolder;
        openInDialog: boolean;
        IsMultiFileUpload: boolean;
        container: JQuery;
        progressBarTemplate: JQuery;
        processingSelectedFiles: (id: any, fileName: any, loaded: any, total: any) => void;
        processingSelectedFilesComplete: (id: any, fileName: any, responseJSON: any) => void;
        processingDroppedFiles: () => void;
        processingDroppedFilesComplete: (files: any, dropTarget: any) => void;
        afterFileUploadCompleted: () => void;
        Done: (event: {
            component: FileUploadControl;
        }) => void;
        MobileUploaderTemplateId: string;
        FileDetails: FileDetails[];
        allowedExtensions: string[];
        dragedFileOnProcess: (id: any, fileName: any, loaded: any, total: any) => void;
        dragedFileProcessComplete: (id: any, fileName: any, responseJSON: any) => void;
        onAllComplete: (succeeded: any, failed: any) => void;
        onError: (id: any, name: any, errorReason: any, xhr: any) => void;
        resetUploadedFile: () => void;
        promise: any;
        Translate: boolean;
        fineUploaderTemplateId: string;
        maxFileSize?: number;
        displayOptions: FileUploadDisplayOptions;
        downloadFile?: (id: any, fileName: any, fileNameWithId: any) => void;
        static seperator: string;
        progressBarInfo: ProgressBarInfo[];
        private filesInProgress;
        private fineUploader;
        private dragDropUploader;
        private filesUploadedUsingDragDrop;
        private isMobile;
        constructor(options: FileUploadOptions, dataFileHolder: JQuery);
        static showFileUploadDialog(option: $DP.Common.FileUploadOptions): void;
        private initDisplayOptions;
        getFilePaths(): string[];
        getFileNames(): string[];
        private getProgressBarByFileName;
        private get fileUploadDragArea();
        private get infoContainer();
        private get fileAreaContainer();
        private isSameFileNotExists;
        private get uploadedFileName();
        private get okButton();
        private updateProgressBar;
        private updateTotalFileSize;
        private updatePercentage;
        private updateFileName;
        private getCommonUploadFile;
        private findProgressBarByFileName;
        private createUploader;
        static showMessage: (errorMessage: string, title?: string) => JQuery;
        private addDragArea;
        private removeDragArea;
        private fileUploadCompleted;
        private updateResponseFilePath;
        private removeFileFromUploadList;
        private removeSubmittedFiles;
        private enableOkButton;
        private disableOkButton;
        render(uploadExistingFile?: boolean): any;
        private createDialog;
        onFileUploadCancelClick(e: any): void;
        resetUploadedFiles(): void;
        private getFileUploadHtml;
        private getMobileButtonView;
        private getDragAreaView;
        private getChooseFileButtonText;
        private getDragAreaText;
        private getChooseFileLabelText;
        private getFineUploaderTemplate;
        private getProgressBarHtml;
        FileUploaderForMobile(): void;
        private selectedFileProcessCompleteMobile;
        private fileAreaDialogEvents;
        private attachUploadCancelEvent;
        private UploadExistingFiles;
        private createTemplateForFileDetails;
    }
}
interface JQuery {
    fileUploader(option: $DP.Common.FileUploadOptions): any;
    fileUploader(methodName: string, option: any): any;
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
