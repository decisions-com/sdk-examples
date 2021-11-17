/**
 * Author:catface@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../../common/favicon.d.ts" />
/// <reference path="../asynctreebuilder.d.ts" />
/// <reference path="../creation/create.ui.d.ts" />
/// <reference path="../../typings/core/generated/datatypes._base.d.ts" />
/// <reference path="../../typings/core/generated/FlowEditService.d.ts" />
/// <reference path="fd.step.d.ts" />
/// <reference path="../../typings/jstree/jstree.d.ts" />
declare namespace $DP.Designers.Flows {
    import FlowStepToolboxInformation = $D.Framework.Design.Flow.FlowStepToolboxInformation;
    class QuickAddDialog extends FlowStepDialogBase {
        private step;
        private path;
        private readonly x?;
        private readonly y?;
        private existingLinkId;
        private root;
        constructor(step: FlowStep, path: string, x?: number, y?: number, existingLinkId?: string);
        show(designer: FlowDesignerCommandHandler): void;
        private createDialog;
        private onResize;
    }
    class QuickAddRoot {
        holder: JQuery;
        step: FlowStep;
        designer: FlowDesignerCommandHandler;
        outboundPath: string;
        x: number;
        y: number;
        existingLinkId: string;
        private resizeCallback;
        private editorDiv;
        private selectedNodeId;
        private lastCriteria;
        private currentQATree;
        constructor(holder: JQuery, step: FlowStep, designer: FlowDesignerCommandHandler, outboundPath: string, x: number, y: number, existingLinkId: string, resizeCallback: () => void);
        onAddButtonClick(): void;
        private doSearch;
        private createQATree;
        private onQuickNodeSelected;
        private loadQuickNodeChildren;
        private loadSearchNodes;
        private getQuickAddNodeData;
        private getNodeContentHtml;
        private getIconView;
        private onSetupButtonClick;
        private onSetupButtonClickComplete;
    }
    interface IStepDefaultEditor {
        hasCustomUI(): boolean;
        setup(holder: JQuery, flowSessionId: string, flowStepId: string, flowStepName: string): void;
    }
    class ContextBasedStepDefaultEditor implements IStepDefaultEditor {
        constructor();
        setup(holder: JQuery, flowSessionId: string, flowStepId: string, flowStepName: string): Promise<void>;
        hasCustomUI(): boolean;
    }
    class ForEachDefaultEditor implements IStepDefaultEditor {
        private thing;
        private flowSessionId;
        private flowStepId;
        constructor();
        setup(holder: JQuery, flowSessionId: string, flowStepId: string, flowStepName: string): void;
        private loadNodes;
        private getNodeHtml;
        private oldNode;
        private onNodeSelected;
        hasCustomUI(): boolean;
    }
    class CreateOrPickEditor implements IStepDefaultEditor {
        constructor();
        setup(holder: JQuery, flowSessionId: string, flowStepId: string, flowStepName: string): void;
        hasCustomUI(): boolean;
    }
    class FlowStepDefaultEditorDialog extends FlowStepDialogBase {
        private step;
        private editor;
        private dialogHost;
        constructor(step: FlowStep, editor: IStepDefaultEditor);
        show(designer: FlowDesignerCommandHandler): void;
    }
    class QuickAddGalleryView {
        readonly rootElement: JQuery;
        readonly thumbsContainer: JQuery;
        thumbClickAction: (thumb: JQuery) => boolean;
        constructor(title: string, searchWatermark: string);
        private static createContent;
        loadContent(toolbox: FlowStepToolboxInformation[]): void;
        private renderNodes;
        static toNode(baseNode: QuickAddNode, toolbox: FlowStepToolboxInformation[]): QuickAddNode;
        static findNode(node: QuickAddNode, path: string): QuickAddNode;
        static createThumbnailThing(label: string, color: string, imageSource: string, data: {
            [p: string]: any;
        }, extraClasses?: string): JQuery;
        static createCategoryLabel(label: string, data: {
            [p: string]: any;
        }): JQuery;
    }
    class QuickAddGallery extends FlowStepDialogBase {
        private readonly step;
        private readonly path;
        private readonly x?;
        private readonly y?;
        private existingLinkId;
        private view;
        private designer;
        private quickAddPanel;
        constructor(step: FlowStep, path: string, x?: number, y?: number, existingLinkId?: string);
        show(designer: $DP.Designers.Flows.FlowDesigner): void;
        private loadContent;
        private closeQuickAdd;
        onSelectionChanged(): void;
        private onAddButtonClick;
        close(): void;
    }
    class QuickAddGalleryPanel implements $DP.Designers.SidebarPanel {
        private readonly designer;
        private readonly title;
        private container;
        private readonly view;
        constructor(designer: IFlowDesigner, title: string, searchWatermark: string);
        get header(): string;
        initialize(container: JQuery): void;
        private loadContent;
        protected drag(ev: JQueryEventObject, point: $DP.Common.Point, ui: JQuery, drop: boolean): void;
    }
    class QuickAddNode {
        Label: string;
        ToolBoxInformation?: FlowStepToolboxInformation[];
        ChildNodes?: QuickAddNode[];
        Path: string;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
