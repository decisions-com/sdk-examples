/**
 * Author:catface@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../../containers/lay.utils.d.ts" />
/// <reference path="../../ChartSeriesEditor/chart_series_editor.d.ts" />
/// <reference path="../../typings/core/generated/datatypes._base.d.ts" />
/// <reference path="../../typings/core/generated/FlowEditService.d.ts" />
/// <reference path="../../typings/core/generated/FolderService.d.ts" />
/// <reference path="../../typings/goJS/gojs.d.ts" />
/// <reference path="../../actions/actionExecuter.d.ts" />
/// <reference path="../../actions/actionhandlers.d.ts" />
/// <reference path="../../common/datadeftree.d.ts" />
/// <reference path="../common/mappingcontext.d.ts" />
/// <reference path="../common/objecteditor.d.ts" />
/// <reference path="../utils.d.ts" />
/// <reference path="flowdesigner.d.ts" />
/// <reference path="fd.link.d.ts" />
declare namespace $DP.Designers.Flows {
    import SegmentDataWithColor = $D.Framework.Design.Flow.Annotations.SegmentDataWithColor;
    import LineDefinition = $D.Framework.Design.Flow.Annotations.LineDefinition;
    import LabelAnchorPoint = $D.Framework.Design.Flow.Annotations.LabelAnchorPoint;
    import LegendData = $D.Framework.Design.Flow.Annotations.LegendData;
    import ImageInfo = $D.Framework.ServiceLayer.Services.Image.ImageInfo;
    import GanttChartInfo = $D.Framework.Design.Flow.Annotations.GanttChartInfo;
    import FlowSwimLaneInfo = $D.Framework.Design.Flow.FlowSwimlaneInfo;
    abstract class FlowEntity {
        protected designerId: string;
        debuggerOpacity: number;
        debuggerExecutions: number;
        private dirty;
        private visible;
        static get PROPERTY_CHANGED_EVENT(): string;
        protected constructor(designerId: string);
        abstract get id(): string;
        abstract getUpdatedInfo(resetDirty?: boolean): any;
        get isDirty(): boolean;
        set isDirty(value: boolean);
        get isVisible(): boolean;
        set isVisible(value: boolean);
        protected setDirtyFlag(value: boolean, raiseEvent?: boolean): void;
        protected triggerPropertyChanged(propertyName: string): void;
        getViewPart(diagram: go.Diagram): go.Part | undefined;
        addedToDiagram(diagram?: go.Diagram | undefined): void;
        removedFromDiagram(diagram?: go.Diagram | undefined): void;
    }
    class FlowStep extends FlowEntity {
        protected info: $D.Framework.Design.Flow.StepDisplayData;
        private validationIssues;
        private _location;
        private _width;
        private _height;
        private _angle;
        private _zorder;
        private _text;
        private storedTemplateKey;
        protected shapeSettings: $D.Framework.Design.Flow.FlowStepShapeSettings;
        private wasDeleted;
        private _diagram;
        private _swimlaneId;
        private _isSimulated;
        constructor(designerId: string, info: $D.Framework.Design.Flow.StepDisplayData, validationIssues: $D.Framework.ValidationIssue[]);
        get DisplayData(): $D.Framework.Design.Flow.StepDisplayData;
        testCustomSetting(setting: string): boolean;
        getCustomSetting(setting: string): string | undefined;
        private get isArrowStep();
        private get isRichTextStep();
        private get allowNegativeSize();
        private get isLabelAnnotation();
        private get richText();
        private getLabelOverride;
        get arrowGeometry(): go.Geometry;
        get flowDiagram(): FlowDiagram;
        set flowDiagram(value: FlowDiagram);
        protected diagramChanged(): void;
        get id(): string;
        get text(): string;
        set text(value: string);
        get infoLabel(): string;
        getMinWidth(): number;
        get width(): number;
        set width(value: number);
        getMinHeight(): number;
        get height(): number;
        set height(value: number);
        get location(): go.Point;
        set location(value: go.Point);
        get angle(): number;
        set angle(value: number);
        get zorder(): number;
        set zorder(value: number);
        get isSimulated(): boolean;
        protected getHtmlColor(dc: $D.Silverlight.UI.Utilities.DesignerColor): string;
        getHtmlBackgroundColor(defaultColor?: string): string;
        getHtmlBorderColor(defaultColor?: string): string;
        private backgroundOverride;
        get backgroundBrush(): go.BrushLike;
        set backgroundBrush(value: go.BrushLike);
        private borderWidthOverride;
        get borderWidth(): number;
        set borderWidth(value: number);
        private borderBrushOverride;
        get borderBrush(): go.BrushLike;
        set borderBrush(value: go.BrushLike);
        get templateKey(): string;
        set templateKey(value: string);
        protected getImageUrl(settings: $D.Framework.Design.Flow.FlowStepShapeSettings, overrideImage?: ImageInfo | undefined): string;
        get icon(): string;
        get hasIcon(): boolean;
        get iconWidth(): number;
        get iconHeight(): number;
        get iconOpacity(): number;
        getValidationIssues(): $D.Framework.ValidationIssue[];
        getAllValidationIssues(): $D.Framework.ValidationIssue[];
        get deleted(): boolean;
        set deleted(value: boolean);
        get fromLinkable(): boolean;
        get toLinkable(): boolean;
        private _showLoosePaths;
        get showLoosePaths(): boolean;
        set showLoosePaths(value: boolean);
        private loosePathsTimeout;
        private constrainedAdornment;
        private constrainedTimeout;
        mouseEnter(node: go.Node): void;
        mouseLeave(node: go.Node): void;
        private createConstrainedAdorner;
        get font(): string;
        get fontSize(): number;
        get fontColor(): string;
        protected getForcedFontColor(): string | undefined;
        get labelAnchorPoint(): LabelAnchorPoint;
        get isWordWrapping(): boolean;
        get deleteConfirmationMessage(): string;
        get configurationFlowId(): string | undefined;
        get isChart(): boolean;
        get isChartLegend(): boolean;
        private chartHolder;
        getIconElement(width: number, height: number): HTMLImageElement | HTMLCanvasElement;
        protected getCanvasHolder(): JQuery;
        get arrowPointFrom(): go.Point;
        set arrowPointFrom(value: go.Point);
        get arrowPointTo(): go.Point;
        set arrowPointTo(value: go.Point);
        get chartValue(): number;
        get chartUpperBound(): number;
        get chartColor(): string;
        private makeSolidDesignerColor;
        get chartSegments(): SegmentDataWithColor[];
        get chartLineDefinitions(): LineDefinition[];
        get chartLegendItems(): LegendData[];
        get ganttChartInfo(): GanttChartInfo;
        get groupId(): string;
        get group(): string;
        set group(value: string);
        updateDisplayData(newData: $D.Framework.Design.Flow.StepDisplayData, issues: $D.Framework.ValidationIssue[], model?: go.Model, diagram?: go.Diagram, changedProperties?: string[]): void;
        getUpdatedInfo(resetDirty?: boolean): $D.Framework.Design.Flow.StepDisplayData;
        getOutcomes(designer?: FlowDesignerCommandHandler): {
            toStep?: FlowStep;
            path: string;
        }[];
        getIncomes(designer: FlowDesignerCommandHandler): {
            fromStep?: FlowStep;
            path: string;
        }[];
        static getNodeTemplateKey(step: FlowStep): string;
        showFlowDataDialog(flowSessionId: string): void;
        get hasConfigurationFlow(): boolean;
        get showPropertyGrid(): boolean;
        get configurationFlowWidth(): any;
        private changeZOrder;
        bringIntoForeground(diagram: go.Diagram): void;
        bringForward(diagram: go.Diagram): void;
        sendBackward(diagram: go.Diagram): void;
        sendToBackground(diagram: go.Diagram): void;
        private fakeArrowData;
        private fakeRichTextContainer;
        private fakeRichTextListeners;
        private fakeRichTextCanvasThing;
        get fakeRichTextCanvasElement(): HTMLElement;
        getViewPart(diagram: go.Diagram): go.Part | undefined;
        addedToDiagram(diagram?: go.Diagram | undefined): void;
        private getFakeRichTextView;
        private updateFakeRichText;
        removedFromDiagram(diagram?: go.Diagram | undefined): void;
        supportsAdhocLinks(): boolean;
        get isSupportingAdhocLinks(): boolean;
    }
    interface FlowStepDialog {
        forEntity(): FlowEntity;
        forEntityId(): string;
        show(designer: IFlowDesigner): void;
        closedEventName(): string;
        close(): void;
        nodeLinkRemoved?(link: FlowLink): void;
        useSidePanel: boolean;
        onSelectionChanged(): void;
    }
    abstract class FlowStepDialogBase implements FlowStepDialog {
        protected entity: FlowEntity;
        protected dialog: JQuery;
        useSidePanel: boolean;
        constructor(entity: FlowEntity);
        forEntity(): FlowEntity;
        forEntityId(): string;
        abstract show(designer: FlowDesigner): void;
        closedEventName(): string;
        close(): void;
        protected triggerClose(): void;
        getDialog(): JQuery;
        onSelectionChanged(): void;
    }
    class FlowStepMultiSelectionDialog extends FlowStepDialogBase {
        private entityIds;
        private contextId;
        private mappingContext;
        constructor(entityIds: string[]);
        show(designer: FlowDesigner): void;
        private createSelectionDialog;
        close(): void;
        initializeSelectionLayer(holder: JQuery, designer: FlowDesigner, contextLoadedCallback?: (contextId: string) => any): Promise<void>;
        resizeSelectionLayer(holder?: JQuery): void;
    }
    abstract class FlowGroupBase extends FlowEntity {
        protected constructor(designerId: string);
        get isGroup(): boolean;
        createSelectionDialog(existingContextId?: string): $DP.Designers.Flows.FlowStepDialog;
        getUpdatedInfo(resetDirty?: boolean): any;
    }
    interface IOrientableLane {
        makeHorizontal(diagram: go.Diagram): void;
        makeVertical(diagram: go.Diagram): void;
    }
    class FlowPool extends FlowGroupBase implements IOrientableLane {
        private _id;
        static get ID(): string;
        private vertical;
        constructor(designerId: string, _id?: string | undefined);
        get id(): string;
        templateKey: string;
        loc: string;
        makeVertical(diagram: go.Diagram): void;
        makeHorizontal(diagram: go.Diagram): void;
        get isVertical(): boolean;
    }
    class FlowSwimmingLane extends FlowGroupBase implements IOrientableLane {
        private info;
        private groupKey;
        private _size;
        private _index;
        private _offset;
        private _delete;
        private vertical;
        constructor(designerId: string, info: FlowSwimLaneInfo, groupKey: go.Key);
        get id(): string;
        update(diagram: go.Diagram, updatedInfo: FlowSwimLaneInfo): void;
        get group(): go.Key;
        get background(): string;
        get location(): go.Point;
        set location(value: go.Point);
        templateKey: string;
        makeVertical(diagram: go.Diagram): void;
        makeHorizontal(diagram: go.Diagram): void;
        get isVertical(): boolean;
        get size(): go.Size;
        set size(value: go.Size);
        get rawSize(): number;
        set rawSize(value: number);
        get rawLength(): number;
        set rawLength(value: number);
        getUpdatedInfo(resetDirty?: boolean): any;
        get text(): string;
        get index(): number;
        set index(value: number);
        get offset(): number;
        set offset(value: number);
        get shouldDelete(): boolean;
        set shouldDelete(value: boolean);
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
