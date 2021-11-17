/// <reference path="../typings/core/generated/servicecatalogservice.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="catalogpanel.d.ts" />
declare namespace $DP.WorkflowCatalog {
    class ServiceCatalogConatiner {
        catalogPanel: CatalogPanel;
        private ComponenetId;
        private ContainerElementId;
        private ContainerElement;
        private SubElement;
        private static isBusy;
        constructor(componenetId: string);
        static unregisterServiceCatalogEvent(token: any): void;
        private initialize;
        AttachResizeHandler(): void;
        resize(): void;
        createPanel(): Promise<any>;
        private get folderName();
        private generateNoDataHtml;
        private GetServiceCatalogItemsByFolderId;
        private getSize;
    }
}
