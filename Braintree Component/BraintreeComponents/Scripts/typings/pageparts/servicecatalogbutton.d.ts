declare namespace $DP.Components.Page {
    enum ServiceCatalogButtonType {
        Link = 0,
        Button = 1,
        Image = 2,
        PrimaryActionButton = 3,
        SecondaryActionButton = 4
    }
    interface ServiceCatalogButtonOptions {
        instanceId: string;
        holder: JQuery;
        selectedButtonType: ServiceCatalogButtonType;
        tabIndex: number;
        buttonText: string;
        imageInfo: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
        isInDesignMode: boolean;
        catalogItemId: string;
        catalogItemName: string;
    }
    class ServiceCatalogButton {
        private options;
        constructor(options: ServiceCatalogButtonOptions);
        static initialize(options: ServiceCatalogButtonOptions): void;
        render(): void;
        attachEvents(): void;
        buttonText: string;
        getView(): string;
        getLinkView(): string;
        getImageView(): string;
        getButtonView(): string;
    }
}
