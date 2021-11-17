/**
 * Author:akash.singh@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, redistribution, modification is not allowed.
*/
/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/jqueryui/jqueryui.d.ts" />
/// <reference path="form.silverimagegallery.d.ts" />
/// <reference path="../dialog/dialog.message.d.ts" />
declare namespace $DP.Form.Controls {
    interface IImageGalleryOptions {
        instanceId?: string;
        previewInDialog?: boolean;
        imageGalleryMode?: Silverdark.Components.GalleryMode;
        galleryFileInfo?: GalleryFileInfo[];
        holder: JQuery;
        onAddFiles: (fileIds: string[]) => Promise<GalleryFileInfo[]>;
        onDeleteFile: (fileId: string) => void;
        onSelectionChanged: () => void;
    }
    interface ThumbnailIconInfo {
        hasIcon: boolean;
        iconUrl: string;
    }
    export import GalleryMode = Silverdark.Components.GalleryMode;
    enum ImageGalleryType {
        FileData = 0,
        FileReference = 1,
        Document = 2
    }
    interface GalleryFileInfo {
        fileName: string;
        filePath: string;
        imageUrl: string;
        id: string;
        elementId?: string;
    }
    class ImageGallery {
        private options;
        controlObjectHolder: $DP.Control.SilverImageGallery;
        imageGalleryContainer: JQuery;
        addImageLink: JQuery;
        imageContainer: JQuery;
        iframe: JQuery;
        selectedImageInfo: JQuery;
        imageContainerHeader: JQuery;
        slider: JQuery;
        searchBox: JQuery;
        zoomInOutCombo: JQuery;
        comboBoxItems: $DP.Common.ComboBoxItem[];
        zoomImageTools: JQuery;
        galleryElement: JQuery;
        selectedFileIds: string[];
        allowedImageExtensions: string[];
        images: HTMLElement[];
        constructor(options: IImageGalleryOptions);
        static create(options: IImageGalleryOptions): ImageGallery;
        initializeImageGalleryAndAttachEvents(): void;
        private initializeZoomTools;
        private selectImage;
        private raiseEvent;
        private deSelectImage;
        private removeImage;
        private iframeLoadComplete;
        private getStylesForIframe;
        private updateSelectionInfo;
        private deleteImage;
        getStyle(): string;
        render(): void;
        private showImage;
        private resetData;
        private getThumbnailIcon;
        private getThumbnail;
        private isImageFile;
        sliderZoomHandler: (e: any, ui: any) => void;
        onSelected: (item: $DP.Common.ComboBoxItem) => boolean;
        onHorizontalStretch: (e: any) => void;
        onVerticalStretch: (e: any) => void;
        onZoomFit: (e: any) => void;
        onZoomImageSize: (e: any) => void;
        search: (text: string) => void;
        getSelectedFile(): GalleryFileInfo[];
        getAllFiles(): GalleryFileInfo[];
        updateFiles(files: GalleryFileInfo[]): void;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
