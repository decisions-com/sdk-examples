/**
 * Author:catface@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../../typings/core/generated/ContextProviderService.d.ts" />
/// <reference path="../../typings/core/generated/FlowEditService.d.ts" />
/// <reference path="../../typings/goJS/gojs.d.ts" />
/// <reference path="../debugger/debugger.d.ts" />
/// <reference path="../settingscache.d.ts" />
/// <reference path="../utils.d.ts" />
/// <reference path="fd.templates.d.ts" />
/// <reference path="baseflowdesigner.d.ts" />
/// <reference path="../../ColorEditor/ColorStyleHelpers.d.ts" />
declare namespace $DP.Designers.Flows {
    import FlowAnnotation = $D.Framework.Design.Flow.Annotations.FlowAnnotation;
    class FlowDiagram {
        container: JQuery;
        readonly designerId: string;
        private forDebug;
        private diagramLoadedCallback;
        goModel: go.GraphLinksModel;
        goDiagram: go.Diagram;
        initialized: boolean;
        private tempDirty;
        constructor(container: JQuery, steps: FlowStep[], links: FlowLink[], annotations: FlowAnnotationView[], designerId: string, forDebug: boolean, displayData: $D.Framework.Design.Flow.FlowDisplayData, diagramLoadedCallback?: () => void, initialContentAlignment?: go.Spot, extraDiagramConfig?: any);
        private _defaultLinkColor;
        private _defaultNodeTextColor;
        private _defaultLinkTextColor;
        private _defaultNodeFont;
        private _defaultLinkFont;
        get steps(): FlowStep[];
        get annotations(): FlowAnnotation[];
        update(data: $D.Framework.Design.Flow.FlowDisplayData): void;
        get defaultLinkColor(): string;
        get defaultNodeTextColor(): string;
        get defaultLinkTextColor(): string;
        get defaultNodeFont(): string;
        get defaultLinkFont(): string;
        get isDebugMode(): boolean;
        addAnnotation(anno: FlowAnnotationView): void;
        findAnnotation(id: string): FlowAnnotationView;
        getDirtyItems(): FlowEntity[];
        private modelListeners;
        private diagramListeners;
        private diagramEventListeners;
        addModelChangeListener(listener: (e: go.ChangedEvent) => void): void;
        addDiagramChangeListener(listener: (e: go.ChangedEvent) => void): void;
        addDiagramEventListener(key: go.DiagramEventName, listener: (e: go.DiagramEvent) => void): void;
        clearResources(): void;
        clearListeners(): void;
        insertSwimLane(index: number): void;
        removeSwimLane(index: number): void;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
