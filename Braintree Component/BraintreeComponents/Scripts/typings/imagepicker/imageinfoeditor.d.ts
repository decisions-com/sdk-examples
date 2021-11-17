/// <reference path="../typings/core/generated/FolderService.d.ts" />
/// <reference path="../typings/core/generated/ContextProviderService.d.ts" />
/// <reference path="imagepicker.d.ts" />
declare namespace $DP.ImageInfoEditor {
    class ImageInfoEditor {
        private host;
        editorId: string;
        pathString: string;
        instanceId: string;
        private imageEditorBox;
        constructor(host: JQuery, editorId: string, pathString: string, instanceId: string);
        private bindEvents;
        private getBtns;
        private btnClearImageClick;
    }
}
