/**
 * Author:dorin@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Designers.Forms {
    class FormDesignerExplorerLoader implements $DP.Common.AsyncTreeLoader {
        private nodes;
        constructor(nodes: $D.Framework.Design.Form.FormElementInfo[]);
        getNodeIdByElement(element: JQuery): string;
        loadNodesAsync(node: any, successCallback: (html: string) => void): void;
        protected loadNodes(nodeId: string, callback: (html: string) => void): void;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
