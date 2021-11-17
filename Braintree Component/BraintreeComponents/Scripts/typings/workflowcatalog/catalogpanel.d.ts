/// <reference path="cataloggrid.d.ts" />
/// <reference path="catalogitem.d.ts" />
declare namespace $DP.WorkflowCatalog {
    interface CatalogPanelOptions {
        size?: $DP.UI.Size;
        items: BaseCatalogItem[];
    }
    /**
     * Contains set of catalog items
     */
    class CatalogPanel {
        private options;
        private grid;
        private view;
        constructor(options: CatalogPanelOptions);
        resize(size?: $DP.UI.Size): void;
        getView(): JQuery;
        get countItems(): number;
        private render;
        private refreshContentPosition;
    }
}
