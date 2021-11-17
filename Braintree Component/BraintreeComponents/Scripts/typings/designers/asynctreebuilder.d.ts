/**
 * Author:dorin@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/jstree/jstree.d.ts" />
/// <reference path="../typings/site/site.d.ts" />
/// <reference path="../typings/core/decisions.d.ts" />
declare namespace $DP.Common {
    interface AsyncTreeLoader {
        loadNodesAsync(node: any, successCallback: (html: string) => void): any;
    }
    interface AsyncTreeConfig {
        /**
         * theme name. to be used as { theme { theme: theme } }
         */
        theme?: string;
        themeCss?: string;
        fullThemeCss?: string;
        themeOverrides?: any;
        rtl?: boolean;
        extraPlugins?: string[];
        extraConfig?: any;
        extraBinds?: {
            [functionName: string]: (e: any, a: any) => void;
        };
        nodeSelected?: (node: JQuery) => void;
        selectionChanged?: () => void;
        notSelectableClass?: string;
        expandOnCreateCass?: string;
        toggleNotSelectable?: boolean;
    }
    class AsyncTreeBuilder {
        private _selector;
        private _rootNode;
        private _onLoadCompleted;
        private _onNodeExpand;
        private _onGetNodes;
        private _onNodeSelect;
        private _onSelectionChanged;
        private _config;
        buildTree(element: JQuery, treeLoader: AsyncTreeLoader, config?: AsyncTreeConfig): void;
        get onLoadCompleted(): Function;
        set onLoadCompleted(value: Function);
        get onNodeExpand(): Function;
        set onNodeExpand(value: Function);
        get onGetNodes(): Function;
        set onGetNodes(value: Function);
        get onNodeSelected(): (node: JQuery) => void;
        set onNodeSelected(value: (node: JQuery) => void);
        get onSelectionChanged(): () => void;
        set onSelectionChanged(value: () => void);
        get rootNode(): JQuery;
        private selectNode;
        private selectLI;
        private deselectNode;
        private deselectAll;
        private cleanNode;
        get selectedNode(): JQuery;
        deselect(): void;
        moveSelectionDown(): void;
        moveSelectionUp(): void;
        static createTree(element: JQuery, config: AsyncTreeConfig, loadNodesAsync: (node: any, successCallback: (html: string) => void) => void): AsyncTreeBuilder;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
