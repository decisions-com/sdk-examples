/// <reference path="../entitypicker/epick.ui.d.ts" />
/// <reference path="../ColorEditor/colorpick.d.ts" />
/// <reference path="../ColorEditor/colorpick.editor.d.ts" />
/// <reference path="../ColorEditor/ColorConverterHelpers.d.ts" />
declare namespace $DP.ImagePicker {
    import DesignerColor = $D.Silverlight.UI.Utilities.DesignerColor;
    interface IImageParams {
        svgName: string;
        width: number;
        height: number;
        color: string;
    }
    class ImagePreview extends ImagePickerBase {
        private host;
        private editor;
        private zoomSlider;
        private comboBoxItems;
        private recentFiles;
        constructor(imageInfo: ImageInfo, images: JQuery);
        protected get isSvgImage(): boolean;
        static getDesignerColorFromString(color: string): DesignerColor;
        private chkAndLoadImage;
        private createZoomSlider;
        private getImageInfoFromElement;
        private setPreviewImageInfo;
        private getImagePreview;
        getView(): JQuery;
        private showImageElement;
        private getContentHtml;
    }
}
