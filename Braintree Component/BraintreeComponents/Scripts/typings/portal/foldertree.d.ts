/**
 * Author: vlad@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/pubsub/pubsub.d.ts" />
/// <reference path="../common/utils/string.utils.d.ts" />
/// <reference path="../typings/core/generated/datatypes._base.d.ts" />
/// <reference path="folder.api.d.ts" />
declare namespace $DP.Portal {
    import FolderCountResults = $D.Framework.ServiceLayer.Services.Folder.FolderCountResults;
    interface FolderTreeOptions {
        globalActionCache?: any;
        nodeLoader?: dpComponents.IFolderNodeLoader;
    }
    class FolderTree {
        private parentElem;
        static globalActionCache: any;
        private loader;
        private treeId;
        constructor(options: $DP.Portal.FolderTreeOptions, elem: JQuery);
        static get(elem: JQuery): FolderTree;
        loadFoldersTree(): void;
        updateFolderCount(countResult: FolderCountResults): void;
        static getValidOrderNumber(orderNumber: number): number;
        addNode(folderMessage: dpComponents.IFolderMessage): void;
        deleteNode(folderId: string): void;
        refreshNode(folderId: string): void;
        loadAndSelectNode(folderId: string, pageName?: string): void;
        getParentFolderIds(folderId: string): any[];
        hasNode(folderId: string): JQuery;
    }
}
interface JQuery {
    folderTree(options: $DP.Portal.FolderTreeOptions): $DP.Portal.FolderTree;
    folderTree(methodName: 'get'): $DP.Portal.FolderTree;
}
