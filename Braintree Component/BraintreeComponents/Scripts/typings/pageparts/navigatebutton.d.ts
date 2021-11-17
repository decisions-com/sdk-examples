declare namespace $DP.Components.Page {
    enum NavigateButtonType {
        Link = 0,
        Button = 1,
        Image = 2,
        PrimaryActionButton = 3,
        SecondaryActionButton = 4
    }
    interface NavigateButtonOptions {
        instanceId: string;
        holder: JQuery;
        selectedButtonType: NavigateButtonType;
        tabIndex: number;
        buttonText: string;
        cssClass: string;
        imageInfo: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
        isInDesignMode: boolean;
        folderId: string;
        openInNewWindow: boolean;
        pageName: string;
    }
    class NavigateButton {
        private options;
        constructor(options: NavigateButtonOptions);
        static initialize(options: NavigateButtonOptions): void;
        render(): void;
        attachEvents(): void;
        buttonText: string;
        getView(): string;
        getLinkView(): string;
        getImageView(): string;
        getButtonView(): string;
    }
}
