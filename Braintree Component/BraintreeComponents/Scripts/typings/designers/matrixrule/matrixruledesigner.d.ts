/**
 * Author: catface@decisions.com
 * Notes: Unauthorized, unlicensed use, redistribution, modification is not allowed.
*/
/// <reference path="../designer.header.d.ts" />
/// <reference path="../../typings/pubsub/pubsub.d.ts" />
/// <reference path="../sidebar.d.ts" />
/// <reference path="../../dialog/dialog.save.d.ts" />
/// <reference path="../sidebar.host.d.ts" />
/// <reference path="../sidebar.panels.d.ts" />
/// <reference path="mrd.inlineediting.d.ts" />
/// <reference path="../common/mappingcontext.d.ts" />
/// <reference path="../../typings/core/generated/MatrixRuleEditService.d.ts" />
/// <reference path="../common/inputs.prompt.d.ts" />
/// <reference path="mrd.toolbox.d.ts" />
/// <reference path="mrd.model.d.ts" />
/// <reference path="mrd.view.d.ts" />
/// <reference path="../designer.loaders.d.ts" />
/// <reference path="../validation/validationgroup.d.ts" />
/// <reference path="../validation/validationdisplay.d.ts" />
declare namespace $DP.Designers.MatrixRule {
    import MatrixRuleType = $D.Framework.Design.Flow.Service.Edit.MatrixRuleType;
    import IntersectionEditorInfo = $DP.Designers.MatrixRule.IntersectionEditorInfo;
    import RuleActionTypeInfo = $D.Framework.Design.Flow.RuleAction.RuleActionTypeInfo;
    interface MatrixRuleCommandHandler {
        getMappingContext(): $DP.Common.MappingContext;
        matrixType: MatrixRuleType;
        createLeftTree(createFlow: boolean): Promise<void>;
        createTopTree(createFlow: boolean): Promise<void>;
        addAfterLeftTreeNode(node: SideTreeNode): Promise<void>;
        addAfterTopTreeNode(node: SideTreeNode): Promise<void>;
        editLeftTreeNode(node: SideTreeNode): void;
        editTopTreeNode(node: SideTreeNode): void;
        setTopFlowStepName(stepId: string, value: string): void;
        setLeftFlowStepName(stepId: string, value: string): void;
        removeLeftTreeNode(node: SideTreeNode): Promise<void>;
        removeTopTreeNode(node: SideTreeNode): Promise<void>;
        editIntersection(leftId: string, topId: string): void;
        setMatrixIntersectionStringValue(intersection: MatrixIntersection, value: string): Promise<void>;
        setIntersectionStringValue(intersection: IntersectionEditorInfo, value: string): Promise<void>;
        isInDebugger(): boolean;
        viewRefreshedCallback?: (() => void) | undefined;
        getActionTypes(): RuleActionTypeInfo[];
        addActionOfType(rowId: string, colId: string, actionType: string): Promise<void>;
        sessionId: string;
    }
    class MatrixRuleDesigner implements MatrixRuleCommandHandler {
        private readonly uiroot;
        readonly instanceId: string;
        readonly matrixRuleId: string;
        static create(instanceId: string, matrixRuleId: string, onInitialized?: (designer: MatrixRuleDesigner) => void): Promise<MatrixRuleDesigner>;
        private createSession;
        private lastSession;
        private features;
        private isBusy;
        private rightBar;
        private propertiesPanel;
        private leftTree;
        private topTree;
        private matrix;
        private view;
        private inputMismatchMessage;
        private leftBar;
        private infoPanel;
        private samplePanel;
        private sampleHandler;
        private currentEditInputsType;
        private canLoadSampleSet;
        private service;
        private flowService;
        private sampleService;
        private leftTreeToken;
        private topTreeToken;
        private eventToken;
        private editingContextId;
        private headerProps;
        private headerHolder;
        private promptHolder;
        constructor(uiroot: JQuery, instanceId: string, matrixRuleId: string);
        initialize(): Promise<void>;
        get sessionId(): string;
        private buildHeaderProps;
        private refreshHeader;
        private initHeader;
        private loadRule;
        private initMismatchMessage;
        private showInputDataDialog;
        private renderPrompt;
        private isFeatureVisible;
        private initializeSampleHandler;
        private initializeSampling;
        private initializeLeftBar;
        private initializeRightBar;
        private onResize;
        private resizeSurface;
        private doSave;
        private save;
        private unSubscribePubSub;
        private doClose;
        private startDebugger;
        private handleEvent;
        private handleRefreshMatrixRule;
        private handleRuleActionChangeEvent;
        private handleMatrixEvent;
        private handleFlowStepEvent;
        private handleFlowConnectionEvent;
        private handleMatrixRuleEvent;
        private refreshGlobalValidation;
        private handleUpdateIntersection;
        private handlePropertyChangedEvent;
        private updateMismatchMessage;
        viewRefreshedCallback?: (() => void) | undefined;
        private updateSampling;
        getActionTypes(): RuleActionTypeInfo[];
        addActionOfType(rowId: string, colId: string, actionType: string): Promise<void>;
        removeAction(rowId: string, colId: string, actionId: string): Promise<void>;
        createLeftTree(createFlow?: boolean, entities?: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): Promise<void>;
        createTopTree(createFlow?: boolean, entities?: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): Promise<void>;
        addAfterLeftTreeNode(node: SideTreeNode): Promise<void>;
        addAfterTopTreeNode(node: SideTreeNode): Promise<void>;
        removeLeftTreeNode(node: SideTreeNode): Promise<void>;
        removeTopTreeNode(node: SideTreeNode): Promise<void>;
        editLeftTreeNode(node: SideTreeNode): void;
        editTopTreeNode(node: SideTreeNode): void;
        private editTreeNode;
        private _mappingContext;
        getMappingContext(): $DP.Common.MappingContext;
        get matrixType(): MatrixRuleType;
        get matrixTypeName(): string;
        setTopFlowStepName(stepId: string, value: string): void;
        setLeftFlowStepName(stepId: string, value: string): void;
        editIntersection(leftId: string, topId: string): Promise<void>;
        setMatrixIntersectionStringValue(intersection: MatrixIntersection, value: string): Promise<void>;
        setIntersectionStringValue(intersection: IntersectionEditorInfo, value: string): Promise<void>;
        showFullEditor(intersection: IntersectionEditorInfo): void;
        moveLeft(current: IntersectionEditorInfo): boolean;
        moveUp(current: IntersectionEditorInfo): boolean;
        moveRight(current: IntersectionEditorInfo): boolean;
        moveDown(current: IntersectionEditorInfo): boolean;
        moveNext(current: IntersectionEditorInfo): boolean;
        isInDebugger(): boolean;
        /**
         * Forbids to user to interact with UI because some work is in progress.
         */
        private makeBusy;
        /**
         * Allows to user to interact with UI again because work has been finished.
         */
        private makeFree;
    }
}
/**
 * Copyright Decisions 2017. For License or Copyright information please contact support@decisions.com
*/
