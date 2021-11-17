declare namespace $DP.WorkflowCatalog {
    class CatalogItemCss {
        static get className(): string;
        static get sideFront(): {
            className: string;
            selector: string;
        };
        static get sideBack(): {
            className: string;
            selector: string;
        };
        static get sideClassName(): string;
        static get bodyClassName(): string;
        static get actionsClassName(): string;
        static get iconHolderClassName(): string;
        static get footerClassName(): string;
        static get nameClassName(): string;
        static get descriptionHolderClassName(): string;
        static get descriptionClassName(): string;
        static get folderIconClassName(): string;
        static get cubeIconClassName(): string;
        static get itemReport(): {
            selector: string;
            className: string;
        };
    }
}
