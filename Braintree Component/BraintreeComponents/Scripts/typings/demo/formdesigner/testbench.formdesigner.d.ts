/**
 * Author:dorin@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../../typings/site/site.d.ts" />
/// <reference path="../../typings/core/generated/FormDesignerService.d.ts" />
declare namespace Testbench.FormDesigner {
    class SurfaceTreeNodeLoader implements $DP.Common.AsyncTreeLoader {
        private nodes;
        constructor(nodes: $D.Framework.Design.Form.FormElementInfo[]);
        getNodeIdByElement(element: JQuery): string;
        loadNodesAsync(node: any, successCallback: (html: string) => void): void;
        protected loadNodes(nodeId: string, callback: (html: string) => void): void;
    }
    class ContentManager {
        private folderId;
        private formId;
        private layoutRoot;
        private designerSurface;
        private textBoxPath;
        private buttonLoad;
        private buttonSave;
        private buttonClose;
        private inspectorTree;
        private propertyGridHost;
        private adornersSurface;
        private formSurface;
        private service;
        private sessionId;
        private formElements;
        private contextId;
        private selectedComponentId;
        constructor();
        initialize(): void;
        private getFormElementById;
        private loadForm;
        private getComponentIdAt;
        private loadSurface;
        private onComponentSelected;
        private removeAdorners;
        private showSelectComponentContextMenu;
        private getSelectedComponentElement;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
