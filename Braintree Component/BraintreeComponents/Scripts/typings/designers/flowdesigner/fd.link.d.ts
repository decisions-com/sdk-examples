/**
 * Author:catface@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Designers.Flows {
    class FlowLinkShapeSettings {
        orthogonal: boolean;
        avoidNodes: boolean;
        jumpOver: boolean;
    }
    class FlowLink extends FlowEntity {
        info: $D.Framework.Design.Flow.StepConnectionData;
        private validationIssues?;
        private _label;
        private _fromId;
        private _toId;
        private wasDeleted;
        private _diagram;
        shapeSettings: FlowLinkShapeSettings;
        debuggerOpacity: number;
        debuggerLinkColor: string;
        constructor(info: $D.Framework.Design.Flow.StepConnectionData, designerId: string, validationIssues?: $D.Framework.ValidationIssue[]);
        removedFromDiagram(diagram?: go.Diagram | undefined): void;
        get flowDiagram(): FlowDiagram;
        set flowDiagram(value: FlowDiagram);
        get id(): string;
        get label(): string;
        get path(): string;
        get fromId(): string;
        get toId(): string;
        set toId(value: string);
        get fromPortId(): string;
        set fromPortId(value: string);
        get toPortId(): string;
        set toPortId(value: string);
        lastPoints: go.List<go.Point>;
        get waypoints(): go.List<go.Point>;
        set waypoints(value: go.List<go.Point>);
        get showArrowHead(): boolean;
        getViewPart(diagram: go.Diagram): go.Part | undefined;
        getLabelSegmentIndex(txt: go.TextBlock): number;
        get deleted(): boolean;
        set deleted(value: boolean);
        get showLabel(): boolean;
        private _overrideLinkColor;
        get linkColor(): string;
        set linkColor(color: string);
        private _overrideLinkWidth;
        get linkWidth(): number;
        set linkWidth(value: number);
        private _overrideDashArray;
        get dashArray(): number[];
        set dashArray(value: number[]);
        get font(): string;
        get fontColor(): string;
        createSelectionDialog(): FlowStepDialog;
        private testConnectClosest;
        update(info: $D.Framework.Design.Flow.StepConnectionData): void;
        changeShapeSettings(settings: FlowLinkShapeSettings): void;
        getUpdatedInfo(resetDirty?: boolean): any;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
