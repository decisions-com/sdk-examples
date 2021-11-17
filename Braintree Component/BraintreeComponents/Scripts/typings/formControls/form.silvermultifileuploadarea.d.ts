declare namespace $DP.Control {
    class SilverMultiFileUploadArea extends ContentBase {
        options: Silverdark.Components.SilverMultiFileUploadAreaOptions;
        fileUpload: $DP.Common.FileUploadControl;
        getFileForFileDownloadIds: string[];
        private zIndex;
        private dropZone;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverMultiFileUploadAreaOptions);
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        renderhtml(): JQuery;
        private resetUploadedFiles;
        onEnablityChange(isEnable: boolean): void;
        private downloadFiles;
        private get SelectedFilesId();
        private getMaxFileSize;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        getValue(): $DP.FormHost.DecisionsControlData[];
        getControl(): JQuery;
    }
}
