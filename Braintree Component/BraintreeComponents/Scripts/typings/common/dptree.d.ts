/**
 * Author:catface@decisions.com
 * Notes:Unauthorized, unlicensed use, redistribution, modification is not allowed.
*/
/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/jstree/jstree.d.ts" />
/// <reference path="../layouts/decisions.ui.d.ts" />
/// <reference path="utils/array.utils.d.ts" />
declare namespace $DP.Common {
    interface DPTreeContext {
        tree: DPTree;
        node: any;
        li: JQuery;
        a: JQuery;
        textContent: JQuery;
        event?: JQueryEventObject;
    }
    interface DPTreeNode {
        id?: string;
        text: string;
        li_attr?: {
            class: string;
        };
        state?: {
            opened?: boolean;
            selected?: boolean;
            disabled?: boolean;
        };
        children?: boolean | Array<DPTreeNode | string>;
        data?: any;
        a_attr?: {
            class?: string;
            title?: string;
        };
    }
    interface DPTreeOptions {
        /**
         * jQuery host where tree will be created.
         * It's not required, and will be ignored, when you are using the jquery plugin to create the tree.
         */
        holder?: JQuery;
        /**
         * theme name. to be used as { theme { theme: name } }
         * you probably want to use 'extraThemes' property and not this one.
         */
        theme?: string;
        /**
         * theme names. to be added to css classes of host element.
         */
        extraThemes?: string[];
        themeOverrides?: any;
        rtl?: boolean;
        extraPlugins?: string[];
        extraConfig?: any;
        extraBinds?: {
            [functionName: string]: (e: any, a: any) => void;
        };
        nodeSelected?: (node: DPTreeContext) => void;
        selectionChanged?: (nodes: DPTreeContext[]) => void;
        loaded?: (event: {
            origin: DPTree;
        }) => void;
        nodeLoader?: (context: DPTreeContext, callback: (nodes: Array<DPTreeNode | string>) => void) => any;
        afterNodeCreate?: (context: DPTreeContext) => any;
        afterNodeOpen?: (context: DPTreeContext) => void;
        noAutoDispose?: boolean;
        noAutoScroll?: boolean;
        multiple?: boolean;
    }
    class DPTree {
        private options;
        /***
         * Array of initially opened nodes. Used to prevent scroll to nodes which are initially opened.
         */
        private openedOnInitialize;
        static create(options: DPTreeOptions): DPTree;
        constructor(options: DPTreeOptions);
        addHoverOnSelect(node: any): void;
        private addHover;
        removeHover(): void;
        static get(element: JQuery): DPTree;
        get root(): JQuery;
        getNode(key: string | JQuery | any, dom?: boolean): any;
        getNodeContext(key: string | JQuery | any): DPTreeContext;
        createNode(parent: string | JQuery | any, node: string | any, pos?: string | number): string;
        deleteNode(node: string | JQuery | any): any;
        hideNode(node: string | JQuery | any, skip_redraw: boolean): any;
        showNode(node: string | JQuery | any, skip_redraw: boolean): any;
        refreshNode(node: string | JQuery | any): any;
        renameNode(node: string | JQuery | any, value: string): any;
        deselectAll(): void;
        get selectedNode(): DPTreeContext;
        get selectedNodes(): DPTreeContext[];
        selectNode(node: string | JQuery | any, singleSelection?: boolean): void;
        deSelectNode(node: string | JQuery | any): void;
        hoverNode(node: string | JQuery | any): void;
        deHoverNode(node: string | JQuery | any): void;
        openNode(node: string | JQuery | any, callback?: () => void, animation?: number): void;
        closeNode(node: string | JQuery | any, callback?: () => void, animation?: number): void;
        toggleNode(node: string | JQuery | any, callback?: () => void, animation?: number): void;
        setNodeText(node: string | JQuery | any, text: string): void;
        dispose(): void;
        moveSelectionUp(): void;
        moveSelectionDown(): void;
        selectFirstNode(): void;
        refresh(): void;
        openAll(): void;
        private isOpenInitially;
        private isOpened;
        selectNodeByPath(path: string): void;
        private selectNodeByPathInt;
    }
}
interface JQuery {
    dptree(options?: $DP.Common.DPTreeOptions): JQuery;
    dptree(methodName: 'get'): $DP.Common.DPTree;
    dptree(methodName: string): any;
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
