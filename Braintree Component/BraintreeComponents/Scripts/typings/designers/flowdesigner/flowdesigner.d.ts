/**
 * Author:catface@decisions.com
 * Notes:Unauthorized, unlicensed use, redistribution, modification is not allowed.
 */
/// <reference path="../validation/validationdisplay.d.ts" />
/// <reference path="../unittests/ut.sidebar.d.ts" />
/// <reference path="../../common/utils/string.utils.d.ts" />
/// <reference path="../../typings/core/generated/ContextProviderService.d.ts" />
/// <reference path="../../typings/core/generated/FlowEditService.d.ts" />
/// <reference path="../../typings/goJS/gojs.d.ts" />
/// <reference path="../../typings/jquery/jquery.d.ts" />
/// <reference path="../../typings/jquery/jquery.cookie.d.ts" />
/// <reference path="../../typings/jqueryui/jqueryui.d.ts" />
/// <reference path="../../typings/es6-promise/es6-promise.d.ts" />
/// <reference path="../common/remote.contextprovider.d.ts" />
/// <reference path="../debugger/debugger.d.ts" />
/// <reference path="../sidebar.d.ts" />
/// <reference path="../sidebar.host.d.ts" />
/// <reference path="../sidebar.panels.d.ts" />
/// <reference path="../settingscache.d.ts" />
/// <reference path="../utils.d.ts" />
/// <reference path="../designer.header.d.ts" />
/// <reference path="fd.diagram.d.ts" />
/// <reference path="fd.link.d.ts" />
/// <reference path="fd.quickadd.d.ts" />
/// <reference path="fd.editors.d.ts" />
/// <reference path="fd.step.d.ts" />
/// <reference path="fd.templates.d.ts" />
/// <reference path="fd.utils.d.ts" />
/// <reference path="fd.annotations.d.ts" />
/// <reference path="fd.toolbox.d.ts" />
/// <reference path="fd.explorer.d.ts" />
/// <reference path="../../typings/pubsub/pubsub.d.ts" />
/// <reference path="../designer.loaders.d.ts" />
/// <reference path="../../dialog/dialog.save.d.ts" />
/// <reference path="baseflowdesigner.d.ts" />
declare namespace $DP.Designers.Flows {
    import BaseFlowDesigner = $DP.Designers.Flows.BaseFlowDesigner;
    class FlowDesigner extends BaseFlowDesigner {
        private toolboxPanel;
        private propertiesPanel;
        private toolboxParent;
        static propagate(element: JQuery, designer: FlowDesigner): void;
        static getInstance(element: JQuery): FlowDesigner;
        constructor(uiroot: JQuery, instanceId: string, flowId: string, sampleId?: string | undefined, flowName?: string | undefined);
        protected onNodeLinkRemoved(link: FlowLink): void;
        protected onDiagramSelectionChanged(): void;
        protected initializeRightBar(): void;
        protected get shouldShowLeftSidebar(): boolean;
        protected initializeLeftBar(): Promise<void>;
        protected onStepCreatedInternal(step: FlowStep): boolean;
        private toggleStepActionDisable;
        private multiSelectionLayer;
        updateMultiselectionView(autoSelectFlow?: boolean, showProperties?: boolean): void;
        private refreshGroupAdornments;
        private distributeSelectionHorizontally;
        private distributeSelectionVertically;
        private static readonly ALIGN_PADDING;
        private getAlignInfo;
        private alignX;
        private alignSelectionLeft;
        private alignSelectionRight;
        private alignSelectionCenter;
        private alignY;
        private alignSelectionTop;
        private alignSelectionBottom;
        private alignSelectionMiddle;
        private lastClickedNodeContextId;
        showQuickAddWizard(step: FlowStep, pathName: string, location: go.Point, existingLinkId?: string): JQuery;
        selectNode(stepId: string): void;
        loadPropertiesForEntity(entity: FlowEntity): void;
        selectPanel(panel: 'toolbox' | 'properties'): boolean;
        refreshToolbox(path: string[] | undefined): boolean;
        submitProperties(): Promise<void>;
        nodeDeleted(node: $DP.Designers.Flows.FlowStep): void;
        selectionTimer: number;
        entitiesToSelect: $DP.Designers.Flows.FlowEntity[];
        handleSelection(entities: $DP.Designers.Flows.FlowEntity[]): Promise<void>;
        handleSingleSelection(entity: $DP.Designers.Flows.FlowEntity | undefined): Promise<void>;
        loadContextForFlow(): Promise<void>;
        static loadProperties(entity: $DP.Designers.Flows.FlowEntity, propertiesPanel: $DP.Designers.Flows.FlowPropertiesPanel, designer: IFlowDesigner): Promise<void>;
    }
    class StandardSelectionManager {
        static loadProperties(entity: $DP.Designers.Flows.FlowEntity, propertiesPanel: FlowPropertiesPanel, designer: IFlowDesigner): Promise<void>;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
 */
