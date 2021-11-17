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
declare namespace $DP.Designers.Flows {
    import FlowDesignerFeature = $D.Framework.Design.Flow.FlowDesignerFeature;
    import FlowDesignerType = $D.Framework.Design.Flow.FlowDesignerType;
    import FlowDisplayData = $D.Framework.Design.Flow.FlowDisplayData;
    import ValidationIssue = $D.Framework.ValidationIssue;
    import HeaderProps = dpComponents.IDesignerHeaderProps;
    interface FlowDesignerCommandHandler {
        sessionId: string;
        goModel?: go.GraphLinksModel;
        goDiagram?: go.Diagram;
        findStep(stepId: string): FlowStep;
        setCreationEditor(stepId: string, editor: IStepDefaultEditor): any;
        selectQuickAddedNode(stepId: string): any;
    }
    interface OpenFlowInitialResult {
        flowSessionId: string;
        session: $D.Framework.Design.Flow.FlowEditSession;
        steps: $D.Framework.Design.Flow.StepDisplayData[];
        links: $D.Framework.Design.Flow.StepConnectionData[];
        annotations: $D.Framework.Design.Flow.Service.FlowServiceAnnotationNotification[];
        validations: $D.Framework.ValidationIssue[];
        shapeSettings: $D.Framework.Design.Flow.FlowStepShapeSettings;
        displayData: $D.Framework.Design.Flow.FlowDisplayData;
    }
    interface IFlowDesigner extends FlowDesignerCommandHandler {
        sessionId: string;
        isFeatureVisible(feature: FlowDesignerFeature): boolean;
        designerType: FlowDesignerType;
        goDiagram: go.Diagram;
        diagram: FlowDiagram;
        validationIssues?: ValidationIssue[];
        initialize(data: OpenFlowInitialResult): Promise<void>;
        getStepCanvasHolder(): JQuery;
        findStep(stepId: string): FlowStep;
        showPartEditor(node: go.Part | string | $DP.Designers.Flows.FlowEntity, forcePropertyGrid?: boolean): void;
        handleNodeClick(node: go.Node): void;
        removeStep(step: FlowStep | string): void;
        showQuickAddGallery(step: FlowStep, pathName: string, location: go.Point, existingLinkId?: string): JQuery;
        showQuickAddWizard(step: FlowStep, pathName: string, location: go.Point, existingLinkId?: string): JQuery;
        removeLinkData(link: FlowLink): void;
        saveDirtyItems(): void;
        selectNode(stepId: string, showPartEditor?: boolean): void;
        removeLink(fromStepId: string, toStepId: string, path: string): void;
        updateMultiselectionView(autoSelectFlow?: boolean, showProperties?: boolean): any;
        canCopySelected: boolean;
        copySelected(): any;
        canCutSelected: boolean;
        cutSelected(): any;
        canPaste: boolean;
        paste(): any;
        undo(): any;
        redo(): any;
        onSelectionMoved(save: boolean): any;
        uiroot: JQuery;
        shouldGridBeVisible: boolean;
        runOnQueue<T>(queue: 'PGRID', action: () => T): Promise<T>;
        leftBar: $DP.Designers.SidebarHost;
        rightBar: $DP.Designers.SidebarHost;
        onResize(): any;
        suspendAutoSidebarSelection(): any;
        resumeAutoSidebarSelection(): any;
        insertSwimLane(index: number): void;
        removeSwimLane(index: number): void;
    }
    interface FlowDesignerInstance {
        flowSessionId: String;
        flowDesigner: IFlowDesigner;
        goDiagram: go.Diagram;
        goModel: go.GraphLinksModel;
        disposed?: boolean;
    }
    const designerInstances: {
        [key: string]: FlowDesignerInstance;
    };
    function getFlowDesignerInstance(designerId: string): IFlowDesigner;
    function getFlowDesignerProperty<K extends keyof IFlowDesigner>(designerId: string, propName: K): IFlowDesigner[K] | undefined;
    function runFlowDesignerFunction<R, K extends keyof IFlowDesigner = keyof IFlowDesigner>(designerId: string, functionName: K, ...args: any[]): R | undefined;
    function findFlowDesignerBySessionId(sessionId: string): IFlowDesigner | undefined;
    interface IFlowDesignerOptions {
        host: JQuery;
        instanceId: string;
        flowId: string;
        sampleId?: string;
        flowName?: string;
    }
    const designerCreators: {
        [key: string]: (options: IFlowDesignerOptions) => IFlowDesigner;
    };
    type IDisposableTool = {
        disposeTool(): void;
    };
    function createFlowDesigner(host: JQuery, instanceId: string, flowId: string, sampleId?: string, flowName?: string): Promise<IFlowDesigner | undefined>;
    abstract class BaseFlowDesigner implements IFlowDesigner {
        readonly uiroot: JQuery;
        readonly instanceId: string;
        readonly flowId: string;
        protected sampleId?: string | undefined;
        protected flowName?: string | undefined;
        static clientId: string;
        static LOG: IDecisionsLogger;
        protected session: $D.Framework.Design.Flow.FlowEditSession;
        isBusy: boolean;
        diagram: $DP.Designers.Flows.FlowDiagram;
        goDiagram: go.Diagram;
        goModel: go.GraphLinksModel;
        sessionId: string;
        validationIssues?: ValidationIssue[];
        leftBar: $DP.Designers.SidebarHost;
        rightBar: $DP.Designers.SidebarHost;
        private headerHolder;
        private promptHolder;
        protected headerProps: HeaderProps;
        private stepsExplorer;
        private stepTypesExplorer;
        private dataExplorer;
        private samplePanel;
        private infoPanel;
        private userMessage;
        private lastLinkShapeSettings;
        private validation;
        protected displayData: FlowDisplayData | undefined;
        private btnPaste;
        private btnDelete;
        private zoomSlider;
        private lnkShowGrid;
        private lnkCanRotate;
        private showGrid;
        private canRotate;
        private lastClickedNodeId;
        private sessionActions;
        private clientWrapper;
        protected constructor(uiroot: JQuery, instanceId: string, flowId: string, sampleId?: string | undefined, flowName?: string | undefined);
        initialize(data: $DP.Designers.Flows.OpenFlowInitialResult): Promise<void>;
        private fileUploadComplete;
        private addDesignerMessages;
        private loadInitialEntities;
        protected configureDiagram(config: any): any;
        getMappingContext(): Common.MappingContext;
        private buildHeaderProps;
        private zoomHandler;
        protected refreshHeader(): Promise<void>;
        private initializeTopBar;
        private startDebugger;
        protected initializeLeftBar(): Promise<void>;
        protected get shouldShowLeftSidebar(): boolean;
        private static createDataAdorner;
        private static createDataSurroundAdorner;
        private doSampling;
        protected initializeRightBar(): void;
        private showInputDataDialog;
        private renderPrompt;
        lastDialog: FlowStepDialog;
        private lastDialogCloseHandle;
        detachLastDialog(): void;
        protected showLastDialog(): void;
        private tokens;
        private syncQueues;
        private toolsToDispose;
        private addDisposableTool;
        runOnQueue<T>(queue: 'PGRID', action: () => T): Promise<T>;
        private clearResources;
        private stepsToRemove;
        private linksToRemove;
        private removeAction;
        protected queueRemoveStep(stepId: string): void;
        protected queueRemoveLink(link: FlowLink | string): void;
        protected onNodeLinkRemoved(link: FlowLink): void;
        private handleFlowEvent;
        private addOrUpdateNode;
        private onStepCreated;
        protected onStepCreatedInternal(step: FlowStep): boolean;
        private updateFlowDisplayData;
        private updateLinkSettings;
        private updateFlowDesiredSizeDisplay;
        private updateUserMessage;
        onResize(): void;
        protected positionDiagram(): {
            surfaceWidth: number;
            surfaceHeight: number;
            umHeight: number;
            ipHeight: number;
        } | undefined;
        private refreshLinkLabelVisibility;
        private onModelChanged;
        onSelectionMoved(save?: boolean): void;
        protected onDiagramSelectionChanged(): void;
        private updateStepsExplore;
        private updateDataExplore;
        private toggleFlag;
        get shouldGridBeVisible(): boolean;
        private zoomReset;
        private toggleGrid;
        private updateToggleGridLink;
        private toggleRotation;
        private updateToggleRotateLink;
        private initializeCopyPaste;
        private updatePasteButton;
        private deleteSelected;
        get canCopySelected(): boolean;
        copySelected(): Promise<void>;
        get canCutSelected(): boolean;
        cutSelected(): any;
        get canPaste(): boolean;
        paste(): Promise<{
            PasteFlowStepResult: boolean;
        }>;
        undo(): void;
        redo(): void;
        private rollbackEntities;
        saveDirtyItems(): void;
        private delaySaveDirtyItems;
        private doSave;
        private saveDesignerInfo;
        private save;
        private doClose;
        get designerType(): FlowDesignerType;
        get stepCatalogTitle(): string;
        get stepCatalogSearchWatermark(): string;
        getStepCanvasHolder(): JQuery;
        isFeatureVisible(feature: string | FlowDesignerFeature): boolean;
        findStep(stepId: string): FlowStep;
        protected selectNodeOnAddId: string;
        protected editorToLoad: {
            stepId: string;
            editor: IStepDefaultEditor;
        };
        selectQuickAddedNode(stepId: string): void;
        setCreationEditor(stepId: string, editor: IStepDefaultEditor): void;
        updateMultiselectionView(autoSelectFlow?: boolean, showProperties?: boolean): void;
        removeStep(step: FlowStep | string): void;
        removeLink(fromStepId: string, toStepId: string, path: string): void;
        removeLinkData(link: FlowLink): void;
        abstract selectNode(stepId: string, showPartEditor?: boolean): void;
        selectNodes(stepIds: string[]): void;
        handleNodeClick(node: go.Node): void;
        abstract handleSelection(entities: $DP.Designers.Flows.FlowEntity[]): Promise<void>;
        abstract loadContextForFlow(): Promise<void>;
        showQuickAddGallery(step: $DP.Designers.Flows.FlowStep, pathName: string, location: go.Point, existingLinkId?: string): JQuery;
        abstract showQuickAddWizard(step: $DP.Designers.Flows.FlowStep, pathName: string, location: go.Point, existingLinkId?: string): JQuery;
        onNodeRemoved(node: FlowStep): void;
        abstract refreshToolbox(path: string[] | undefined): boolean;
        abstract submitProperties(): Promise<void>;
        abstract selectPanel(panel: string): boolean;
        private autoSidebarSelectionSuspended;
        suspendAutoSidebarSelection(): void;
        resumeAutoSidebarSelection(): void;
        protected get isAutoSidebarSelectionOn(): boolean;
        insertSwimLane(index: number): void;
        removeSwimLane(index: number): void;
        showPartEditor(node: go.Part | string | $DP.Designers.Flows.FlowEntity, forcePropertyGrid?: boolean): void;
        abstract loadPropertiesForEntity(entity: FlowEntity | undefined): any;
        /**
         * Forbids to user to interact with UI because some work is in progress.
         */
        protected makeBusy(): void;
        /**
         * Allows to user to interact with UI again because work has been finished.
         */
        protected makeFree(): void;
    }
    class FlowDesignerGoJSResizeTool extends go.ResizingTool implements IDisposableTool {
        private designer;
        constructor(designer: IFlowDesigner);
        disposeTool(): void;
        doMouseMove(): void;
        doDeactivate(): void;
        private isLengthening;
        static computeMinLaneSize(lane: go.Group): go.Size;
        static computeMinPoolSize(pool: go.Group): go.Size;
        static computeLaneSize(lane: go.Group): go.Size;
        computeMinSize(): go.Size;
        resize(newr: go.Rect): void;
        computeResize(newPoint: go.Point, spot: go.Spot, min: go.Size, max: go.Size, cell: go.Size, reshape: boolean): go.Rect;
    }
}
