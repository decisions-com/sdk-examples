/// <reference path="../typings/core/generated/FolderService.d.ts" />
/// <reference path="../typings/core/generated/ContextProviderService.d.ts" />
declare namespace $DP.ImagePicker {
    import ImageInfo = $D.Framework.ServiceLayer.Services.Image.ImageInfo;
    interface ImageEditorOptions {
        host: JQuery;
        readonly instanceId: string;
        readonly onImageValueUpdated?: (value: string) => void;
        readonly onSetValue: (content: any, dataPair: $D.Framework.ServiceLayer.Services.ContextData.DataPair) => void;
        imageInfo?: ImageInfo;
        labelName?: string;
    }
    class ImageEditor {
        options: ImageEditorOptions;
        private static get DATA_KEY();
        private instanceId;
        private picker;
        private frameworkImageInfo;
        constructor(options: ImageEditorOptions);
        updateImageInfo(imageInfo: ImageInfo): void;
        static get(element: JQuery): ImageEditor;
        private getHtml;
        private getEmptyIcon;
        btnOpenDialogClick(): void;
        update(): void;
    }
}
