/// <reference path="../typings/core/generated/control_options.d.ts" />
declare namespace $DP.Control {
    class SilverFileUploadArea extends ContentBase {
        options: Silverdark.Components.SilverFileUploadAreaOptions;
        private fileId;
        private zIndex;
        private dropZone;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverFileUploadAreaOptions);
        renderhtml(): JQuery;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        private getFileUploadOptions;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        getValue(): $DP.FormHost.DecisionsControlData[];
        onEnablityChange(isEnable: boolean): void;
        getControl(): JQuery;
        private getMaxFileSize;
    }
}
