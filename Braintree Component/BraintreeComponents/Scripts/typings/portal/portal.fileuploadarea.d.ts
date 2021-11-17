declare namespace $DP.Portal {
    interface FileDetail {
        fileName: string;
        filePath: string;
    }
    interface FileUploadAreaOptions {
        readonly host: JQuery;
    }
    class FileUploadArea {
        private options;
        private dragDropInstance;
        static PORTAL_DRAG_ZONE_ID: string;
        private folderData;
        private actions;
        private actionsDisplayName;
        constructor(options: FileUploadAreaOptions);
        private render;
        private initializeDropInstance;
        private get currentFolderId();
        private processingDroppedFilesComplete;
        private onFileUploadComplete;
        private onDropError;
        private uploadFileActionHandler;
        private runFlowWithFileActionHandler;
    }
    function openFileUploadedDialog(fileName: string, fileSize: number, buttons: ButtonOptions[]): void;
}
