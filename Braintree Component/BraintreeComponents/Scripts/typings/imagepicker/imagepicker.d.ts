/// <reference path="imagepicker.forms.d.ts" />
declare namespace $DP.ImagePicker {
    import FrameworkImageInfo = $D.Framework.ServiceLayer.Services.Image.ImageInfo;
    interface ImagePickerOptions {
        instanceId: string;
        filterString?: string;
        readonly onGetImageFromUrl: (context: any) => void;
        readonly onSetValue: (content: any, dataPair: $D.Framework.ServiceLayer.Services.ContextData.DataPair) => void;
        frameworkImageInfo?: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
    }
    class ImagePicker {
        options: ImagePickerOptions;
        private host;
        private imageInfo;
        private radioItems;
        private formsRadioList;
        constructor(options: ImagePickerOptions);
        private switchMode;
        private addModeSwitch;
        private setValue;
        setImage(): void;
        afterGetImageUrl(data: any): void;
        getImageInfo(): FrameworkImageInfo;
        getView(): JQuery;
        private getContentHtml;
    }
    interface ImagePickerDialogOptions {
        title?: string;
        width?: number;
        height?: number;
        onOk?: () => void;
        onClosed?: () => void;
    }
    function showImagePickerDialog(picker: ImagePicker, options: ImagePickerDialogOptions): JQuery;
}
