/**
 * Author:oleg@decisions.com
 * Notes: unauthorized, unlicensed use, redistribution, modification is not allowed.
*/
/// <reference path="../common/utils/string.utils.d.ts" />
/// <reference path="../typings/core/generated/FavoriteService.d.ts" />
declare namespace $DP.EntityPicker.Tree {
    import FavoriteType = $D.Framework.ServiceLayer.Services.Folder.FavoriteType;
    import EntityPickerSettings = $D.Framework.Design.Properties.Attributes.EntityPickerSettings;
    import PickerFolders = $D.Framework.Design.Properties.Attributes.PickerFolders;
    import EntityPickerItem = $D.Framework.ServiceLayer.Services.EntityPickerItem;
    import DecisionsTypePickerSettings = $D.Framework.ServiceLayer.Services.DecisionsTypePickerSettings;
    interface EpickTreeOptions {
        holder: JQuery;
        model: EntityPickerTreeModel;
        nodeSelected?: (node: EpickNode, el: JQuery) => void;
        criteria?: string;
        loaded?: () => void;
        extraThemes?: string[];
        onMultipleNodeSelected?: (node: EpickNode[]) => void;
        canPickMultiple?: boolean;
    }
    class PickerTreeBuilder {
        private static expandedNodes;
        static buildTree({ holder, model, nodeSelected, criteria, extraThemes, loaded, onMultipleNodeSelected, canPickMultiple }: EpickTreeOptions): Common.DPTree;
        static loadNodes(model: $DP.EntityPicker.Tree.EntityPickerTreeModel, context: $DP.Common.DPTreeContext, callback: (nodes: any[]) => void, criteria?: string): void;
        static createTreeNode(node: EpickNode): $DP.Common.DPTreeNode;
        private static filterNodeByText;
    }
    interface EpickNode {
        id: string;
        name: string;
        pickable?: boolean;
        canBeFav?: boolean;
        isFav?: boolean;
        favoriteType?: FavoriteType;
        isUnderFavorites?: boolean;
        note?: string;
        expandable?: boolean;
        expanded?: boolean;
        order?: number;
        entity?: EntityPickerItem;
        titleHtml?: string;
    }
    interface EntityPickerTreeModel {
        getRootNodes(): JQueryPromise<EpickNode[]>;
        getSubNodes(nodeId: string): JQueryPromise<EpickNode[]>;
        sortNodes?: (a: EpickNode, b: EpickNode) => number;
    }
    class DefaultEntityPickerTreeModel implements EntityPickerTreeModel {
        protected settings: EntityPickerSettings;
        protected dataFetcher: EntityPickerItemFetcher;
        private additionalRootNodes;
        constructor(settings: EntityPickerSettings, dataFetcher: EntityPickerItemFetcher, additionalRootNodes?: EpickNode[]);
        getRootNodes(): JQueryPromise<EpickNode[]>;
        sortNodes(a: EpickNode, b: EpickNode): number;
        getSubNodes(nodeId: string): JQueryPromise<EpickNode[]>;
        protected getSubNodesForFolder(folderId: string): JQueryPromise<EpickNode[]>;
        protected areFoldersPickableHere(): boolean;
        protected getFavoritesRootNode(): JQueryPromise<EpickNode>;
        protected getRecentRootNode(): JQueryPromise<EpickNode>;
        protected getRootFolderNode(): JQueryPromise<EpickNode>;
        protected getCurrentFolderNode(): JQueryPromise<EpickNode>;
        protected getAllRootNode(): JQueryPromise<EpickNode>;
        protected showFolder(pickerFolder: PickerFolders): boolean;
        protected expandFolder(pickerFolder: PickerFolders): boolean;
        private getRootFolders;
        private getFavoriteNodes;
        private getRecentNodes;
    }
    class GlobalSearchEntityPickerTreeModel implements EntityPickerTreeModel {
        private searchText;
        private settings;
        private dataFetcher;
        static highlightSearch(name: string, searchText: string): string;
        constructor(searchText: string, settings: EntityPickerSettings, dataFetcher: EntityPickerItemFetcher);
        getRootNodes(): JQueryPromise<EpickNode[]>;
        getSubNodes(nodeId: string): JQueryPromise<EpickNode[]>;
    }
    class DecisionsTypePickerTreeModel extends DefaultEntityPickerTreeModel {
        private _settings;
        static highlightTypeName(name: string): string;
        constructor(_settings: DecisionsTypePickerSettings, dataFetcher: EntityPickerItemFetcher);
        getRootNodes(): JQueryPromise<EpickNode[]>;
        getSubNodes(nodeId: string): JQueryPromise<EpickNode[]>;
    }
    class FolderPickerTreeModel extends DefaultEntityPickerTreeModel {
        constructor(settings: EntityPickerSettings, dataFetcher: EntityPickerItemFetcher);
        protected getSubNodesForFolder(folderId: string): JQueryPromise<EpickNode[]>;
        protected areFoldersPickableHere(): boolean;
    }
    class DecisionsTypeDropdownTreeModel extends DefaultEntityPickerTreeModel {
        private _settings;
        private nodes?;
        constructor(_settings: DecisionsTypePickerSettings, dataFetcher: EntityPickerItemFetcher, nodes?: EpickNode[]);
        getRootNodes(): JQueryPromise<EpickNode[]>;
        getSubNodes(nodeId: string): JQueryPromise<EpickNode[]>;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
