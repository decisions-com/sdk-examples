declare namespace $DP.Common {
    interface FileUploadEditorOptions {
        holder?: JQuery;
        fileDetails: FileDetails[];
        editingContextId: string;
        path: string[];
    }
    class FileUploadEditor {
        private options?;
        private view;
        constructor(options?: FileUploadEditorOptions);
        render(holder: JQuery): JQuery;
        getView(): JQuery;
        private onComplete;
        private resetUploadedFile;
        private createUploader;
        private getStyleClass;
        private getContentHtml;
    }
}
