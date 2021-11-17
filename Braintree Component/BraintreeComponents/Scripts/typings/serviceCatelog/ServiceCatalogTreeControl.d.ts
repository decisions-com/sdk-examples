/**
 * Author:huzefa.ezzi@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../typings/decisions.components/decisions.components.d.ts" />
/// <reference path="../typings/core/generated/imageservice.d.ts" />
/// <reference path="../typings/core/generated/documentservice.d.ts" />
/// <reference path="../typings/core/generated/servicecatalogservice.d.ts" />
/// <reference path="../typings/core/generated/CommonActionService.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../designers/common/tree.d.ts" />
/// <reference path="../portal/foldertree.d.ts" />
/// <reference path="../common/utils/array.utils.d.ts" />
declare namespace $DP.UI.Controls.ServiceCatalog {
    import ServiceCatalogItem = $D.Framework.ServiceLayer.Services.ServiceCatalog.ServiceCatalogItem;
    import ImageInfo = $D.Framework.ServiceLayer.Services.Image.ImageInfo;
    import Folder = $D.Framework.ServiceLayer.Services.Folder.Folder;
    import DpTreeNode = $DP.Common.DPTreeNode;
    import DpTreeContext = $DP.Common.DPTreeContext;
    interface INodeProperties {
        id: string;
        entityName: string;
        catalogType: string;
        entityDescription: string;
        nodeType: ServiceCatalogTreeNodeType;
        isReportFoldersCatalogItem?: boolean;
        imageInfo?: string;
        isReportFolderTreeItem?: boolean;
    }
    class ServiceCatalogNodeOptions implements INodeProperties {
        constructor();
        id: string;
        entityName: string;
        catalogType: string;
        entityDescription: string;
        nodeType: ServiceCatalogTreeNodeType;
        isReportFoldersCatalogItem?: boolean;
        imageInfo?: string;
        isReportFolderTreeItem?: boolean;
        static getFolderNodeOptions(folder: Folder): ServiceCatalogNodeOptions;
        static getCatalogItemNodeOptions(catalog: ServiceCatalogItem): ServiceCatalogNodeOptions;
        static getReportNodeOptions(report: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration): ServiceCatalogNodeOptions;
    }
    class ServiceCatalogTreeControl {
        $ServiceCatalog: JQuery;
        private canRunWorkflowCatalog;
        static serviceCatalogFolderId: string;
        static serviceCatalogEvents_EventId: string;
        private defaultFolder;
        private folders;
        /**
         * key - folderId
         * value - child items
         */
        private folderCatalogMap;
        private subFolderToShow;
        private $Tree;
        private $PanelHeader;
        private isBusy;
        private dpTree;
        constructor($ServiceCatalog: JQuery);
        initialize(): void;
        private createTree;
        private iconLoader;
        private resizeFolderTree;
        private onAfterNodeCreate;
        private showContextChildMenu;
        private showContextMenu;
        private cleanCategoreis;
        private hideTree;
        private showTree;
        private loadTree;
        private triggerResize;
        /**
         * Function which need to call after open and close node event
         */
        static FolderTreeNodeOpenClose(event: any): void;
        private onNodeSelect;
        loadCategories(node: any, successCallback: (nodes: any[]) => void): void;
        createToolTip(treeAnchor?: JQuery): void;
        getServiceCatelogItem(id: string, callBack: (view: any[]) => void): Promise<void>;
        getReportsForReportFolderCatalog(reportFolderId: string, callBack: (view: any[]) => void): void;
        getFoldersNode(): any[];
        getNodeFromFolder(folder: Folder): DpTreeNode;
        getNodeFromCatalog(catalog: ServiceCatalogItem): DpTreeNode;
        getNodeFromReports(report: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementRegistration): DpTreeNode;
        generateNode(nodeOptions: INodeProperties): DpTreeNode;
        loadData(context: DpTreeContext, successCallback: (nodes: any[]) => void): void;
        loadImage(image: ImageInfo, callBack: (imageString: string) => void): void;
    }
    enum ServiceCatalogTreeNodeType {
        Folder = 0,
        ServiceCatalog = 1
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
