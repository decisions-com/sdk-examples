/**
 * Author: alex@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="catalogitemcss.d.ts" />
/// <reference path="../common/utils/dom.utils.d.ts" />
/// <reference path="../common/svg.icons.d.ts" />
/// <reference path="../ColorEditor/ColorStyleHelpers.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../actions/actionhandlers.d.ts" />
/// <reference path="../typings/core/generated/CommonActionService.d.ts" />
/// <reference path="../typings/core/generated/imageservice.d.ts" />
/// <reference path="../typings/core/generated/documentservice.d.ts" />
declare namespace $DP.WorkflowCatalog {
    import CatalogItemDto = $D.Framework.ServiceLayer.Services.ServiceCatalog.CatalogItemDto;
    abstract class BaseCatalogItem {
        protected item: CatalogItemDto;
        protected view: JQuery;
        protected imageAsString: string;
        protected get actionEl(): JQuery;
        protected abstract getDefaultImage(): JQuery;
        constructor(item: CatalogItemDto);
        getView(): JQuery;
        refreshContentPosition(): void;
        protected render(): JQuery;
        private getBaseItemCatalogView;
        protected getFrontItemCatalogView(): JQuery;
        protected getBackItemCatalogView(): JQuery;
        private createDescription;
        private showDescription;
        private showImage;
        protected setImage(imgContainer: JQuery, image: JQuery): void;
        protected setImageTo(imgContainer: JQuery): void;
        protected hasImage(): string | number[];
        protected setImageFromSrc(imgContainer: JQuery, src: string): void;
        protected createImageFromSrc(src: string): JQuery;
    }
    /**
     * Displays catalog item in workflow catalog (Add Open Page, Add Open URL, Add Report, ...)
     */
    class CatalogItem extends $DP.WorkflowCatalog.BaseCatalogItem {
        private ActionDeffered;
        constructor(item: CatalogItemDto);
        protected getDefaultImage(): JQuery;
        protected render(): JQuery;
        private appendReports;
        /**
         * Gets reports for Report Folder catalog items
         */
        protected getReports(): Promise<$D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration[]>;
        private attachHandlers;
        private showContextMenu;
        private handleRunDefaultAction;
    }
    /**
     * Displays sub folder item in workflow catalog
     */
    class FolderCatalogItem extends $DP.WorkflowCatalog.BaseCatalogItem {
        constructor(item: CatalogItemDto);
        protected getDefaultImage(): JQuery;
        render(): JQuery;
        private attachEvents;
    }
}
