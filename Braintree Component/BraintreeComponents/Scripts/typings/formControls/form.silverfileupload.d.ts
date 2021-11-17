/// <reference path="../typings/core/generated/control_options.d.ts" />
declare namespace $DP.Control {
    export import FileUploadButtonType = Silverdark.Components.FileUploadButtonType;
    /**
    * File output type for file upload controls
    */
    class SilverFileUpload extends ContentBase {
        options: Silverdark.Components.SilverFileUploadOptions;
        $fileDescription: JQuery;
        $buttonContainer: JQuery;
        private fileId;
        private fileName;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverFileUploadOptions);
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        attachEvents(): void;
        getFileUploadOptions(): Common.FileUploadOptions;
        private getFileUploadOptionsForMobile;
        private showFileDescription;
        private hideFileDescription;
        private removeUploadedFileInfo;
        private getMaxFileSize;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        getValue(): $DP.FormHost.DecisionsControlData[];
        getControl(): JQuery;
        renderhtml(): JQuery;
    }
}
