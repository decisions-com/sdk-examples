declare namespace $DP.Control {
    export import MultiFileOutputType = Silverdark.Components.MultiFileOutputType;
    class SilverMultiFileUpload extends ContentBase {
        options: Silverdark.Components.SilverMultiFileUploadOptions;
        $fileUploadButton: JQuery;
        $fileNamesConatiner: JQuery;
        private filesInfo;
        private fileUpload;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverMultiFileUploadOptions);
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        renderhtml(): JQuery;
        private attachEvents;
        private getFileUploadOptions;
        private getFileUploadOptionsForMobile;
        updateFileInfo(responsefilepath: string): void;
        updateFileNames(): void;
        private getMaxFileSize;
        private getFileNameView;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        getValue(): $DP.FormHost.DecisionsControlData[];
        getControl(): JQuery;
    }
}
