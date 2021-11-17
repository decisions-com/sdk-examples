/// <reference path="imagepicker.imagepreview.d.ts" />
/// <reference path="../fineUploader/fileupload.d.ts" />
/// <reference path="../common/generictree.d.ts" />
declare namespace $DP.ImagePicker {
    import FrameworkImageInfo = $D.Framework.ServiceLayer.Services.Image.ImageInfo;
    interface ImageInfo {
        storedImageId?: string;
        svgStoredImageId?: string;
        name?: string;
        svgName?: string;
        width?: number;
        height?: number;
        color?: string;
        embed?: boolean;
        imageSize?: string;
        info?: FrameworkImageInfo;
    }
    interface ImagePickerForm {
        getView: () => JQuery;
    }
    class ImagePickerBase {
        protected imageInfo: ImageInfo;
        constructor(imageInfo: ImageInfo);
        setImageInfo(id: string, width?: number, height?: number, color?: string): void;
    }
    class ImageUploaderForm extends ImagePickerBase implements ImagePickerForm {
        filterString: string[];
        private host;
        constructor(imageInfo: ImageInfo, filterString: string[]);
        private createUploader;
        getView(): JQuery;
        static getModeSwitchItem(): Common.RadioListItem;
        private getFormHtml;
    }
    class ImageURLForm extends ImagePickerBase implements ImagePickerForm {
        private host;
        constructor(imageInfo: ImageInfo);
        getView(): JQuery;
        static getModeSwitchItem(): Common.RadioListItem;
        private getFormHtml;
    }
    class ImageLibraryForm extends ImagePickerBase implements ImagePickerForm {
        private host;
        private initiallyImageInfo;
        private lastPath;
        constructor(imageInfo: ImageInfo);
        private getOrigImageName;
        private createSerch;
        private searchImages;
        private loadImageList;
        private showSVGList;
        private createPicker;
        private elementInViewport;
        private chkAndLoadImageForListElement;
        private attachEvents;
        private imageSelectFromList;
        getView(): JQuery;
        static getModeSwitchItem(): Common.RadioListItem;
        private getFormHtml;
    }
}
