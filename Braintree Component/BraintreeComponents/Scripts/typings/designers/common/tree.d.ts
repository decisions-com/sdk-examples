/**
 * Author:oleg@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Common {
    class TreeLoader {
        private element;
        private onNodeSelect;
        private onNodeExpand;
        private onGetNodes;
        private onLoadComplete;
        private extraPlugins?;
        private extraConfig?;
        private treeClass;
        constructor(element: any, onNodeSelect: any, onNodeExpand: any, onGetNodes: any, onLoadComplete: any, extraPlugins?: any, extraConfig?: any, treeClass?: string);
        Load(): any;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
