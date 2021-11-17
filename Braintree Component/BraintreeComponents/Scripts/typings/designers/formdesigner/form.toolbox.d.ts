/**
 * Author:dorin@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Designers.Forms {
    class FormDesignerDataToolbox extends $DP.Designers.BaseToolboxPanel {
        private designer;
        private dpTree;
        constructor(designer: FormDesigner);
        get header(): string;
        get hasSearch(): boolean;
        get isDrag(): boolean;
        get footer(): JQuery;
        dispose(): void;
        protected createToolboxTree(criteria?: string): void;
        protected loadNodes(context: $DP.Common.DPTreeContext, callback: (nodes: any[]) => void): void;
        protected onAfterNodeCreated(context: Common.DPTreeContext): void;
        private buildTreeNode;
        protected searchNodes(criteria: string, callback: (nodes: any[]) => void): void;
        protected drag(context: $DP.Common.DPTreeContext, ev: JQueryEventObject, point?: $DP.Common.Point): void;
        protected dragStopped(context: $DP.Common.DPTreeContext, ev: JQueryEventObject, point?: $DP.Common.Point): void;
    }
    class FormDesignerToolbox extends $DP.Designers.BaseToolboxPanel {
        private designer;
        private pubSubTokens;
        constructor(designer: FormDesigner);
        initialize(container: JQuery): void;
        dispose(): void;
        get header(): string;
        get isDrag(): boolean;
        protected createDragTarget(node: any): JQuery;
        protected loadNodes(context: $DP.Common.DPTreeContext, callback: (nodes: any[]) => void): void;
        protected onAfterNodeCreated(context: Common.DPTreeContext): Promise<void>;
        protected onAfterTreeCreated(): Promise<void>;
        private getRootNodeForTemplates;
        private nodeLabelWithIcon;
        protected searchNodes(criteria: string, callback: (nodes: any[]) => void): void;
        private getNodeIcon;
        protected drag(context: $DP.Common.DPTreeContext, ev: JQueryEventObject, point?: $DP.Common.Point): void;
        protected dragStopped(context: $DP.Common.DPTreeContext, ev: JQueryEventObject, point?: $DP.Common.Point): void;
        protected getFavoriteActionEntity(): string;
        protected getRecentElementType(): $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType;
    }
    class LegacyFormDesignerProperties extends BasePropertiesPanel {
        sessionId?: string;
        constructor(selectionProvider: FormSelectionProvider);
        protected getRefreshUrl(): string;
        protected getRefreshData(currentContextId: string, newContextId: string): any;
    }
    class BaseExplorer implements $DP.Designers.SidebarPanel {
        protected container: JQuery;
        protected treeContainer: JQuery;
        protected treeLoaded: boolean;
        protected isRefreshing: boolean;
        protected selectionProvider: FormSelectionProvider;
        protected eventProvider: FormEventProvider;
        protected formElements: $D.Framework.Design.Form.FormElementInfo[];
        tree: $DP.Common.DPTree;
        get header(): string;
        group: SidebarGroup;
        constructor(selectionProvider: FormSelectionProvider, formElements: $D.Framework.Design.Form.FormElementInfo[], group?: SidebarGroup);
        initialize(container: JQuery): void;
        protected onSelectionChanged(): void;
        refreshSelection(added: string[], removed: string[]): void;
        refresh(formElements: $D.Framework.Design.Form.FormElementInfo[]): void;
        protected createUIElements(uiRoot: JQuery): void;
        protected createToolboxTree(criteria?: string): void;
        protected computeTreeHeight(requestedHeight: number): number;
        protected renderFormElementNode(nodeId: string, formElement: $D.Framework.Design.Form.FormElementInfo, highlight: string, counter: number): string;
        protected processElements(elements: $D.Framework.Design.Form.FormElementInfo[], counter: {
            value: number;
        }): $D.Framework.Design.Form.FormElementInfo[];
        protected getViewByComponentId(componentId: string): JQuery;
    }
    class FormTabEditor extends BaseExplorer {
        private designer;
        eventProvider: FormEventProvider;
        constructor(designer: FormDesigner, selectionProvider: FormSelectionProvider, formElements: $D.Framework.Design.Form.FormElementInfo[], eventProvider: FormEventProvider, group?: SidebarGroup);
        dispose(): void;
        get header(): string;
        protected createUIElements(uiRoot: JQuery): void;
        private attachEvents;
        protected createToolboxTree(criteria?: string): void;
        refreshSelection(added: string[], removed: string[]): void;
        setSelected(selectedId: string): void;
        private getFlattenedControls;
        private getChildren;
    }
    class FormDesignerExplorer extends BaseExplorer {
        eventProvider: FormEventProvider;
        private lastCriteria;
        constructor(selectionProvider: FormSelectionProvider, formElements: $D.Framework.Design.Form.FormElementInfo[], eventProvider: FormEventProvider, group?: SidebarGroup);
        dispose(): void;
        get header(): string;
        protected createUIElements(uiRoot: JQuery): void;
        protected createToolboxTree(criteria?: string): void;
        private hasUpdatedSelection;
        private loadNodes;
        createTreeNode(node: $D.Framework.Design.Form.FormElementInfo): {
            text: string;
            children: boolean;
            data: {
                info: $D.Framework.Design.Form.FormElementInfo;
                id: string;
            };
            id: string;
        };
        private doSearch;
    }
    class ExplorerNodesLoader implements $DP.Common.AsyncTreeLoader {
        constructor(criteria: string, formElements: $D.Framework.Design.Form.FormElementInfo[], nodeRender: (nodeId: string, formElement: $D.Framework.Design.Form.FormElementInfo, highlight?: string, counter?: number) => string, nodeProcessor: (elements: $D.Framework.Design.Form.FormElementInfo[], counter: {
            value: number;
        }) => $D.Framework.Design.Form.FormElementInfo[]);
        static filterElements(haystack: $D.Framework.Design.Form.FormElementInfo[], neddle: string): $D.Framework.Design.Form.FormElementInfo[];
        loadNodesAsync(node: any, successCallback: (html: string) => void): void;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
