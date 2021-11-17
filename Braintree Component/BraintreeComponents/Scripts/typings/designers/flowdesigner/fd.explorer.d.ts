/**
 * Author:oleg@decisions.com
 * Notes:Unauthorized, unlicensed use, redistribution, modification is not allowed.
*/
/// <reference path="../../typings/core/generated/FlowEditService.d.ts" />
/// <reference path="../../typings/jstree/jstree.d.ts" />
/// <reference path="../../common/dptree.d.ts" />
declare namespace $DP.Designers.Flows {
    class StepsTreePanel implements $DP.Designers.SidebarPanel {
        private type;
        private diagram;
        private _header;
        private container;
        private treeContainer;
        private steps;
        protected client: FlowEditServiceStatic;
        constructor(header: string, type: dpComponents.StepsTreeType, diagram: FlowDiagram);
        private assignSteps;
        private getStepName;
        get header(): string;
        onNodeSelected: (nodeId: any) => void;
        initialize(container: JQuery): void;
        reload(): void;
        createTree(): void;
        isVisible(): boolean;
        onExpanded: () => void;
    }
    class FlowDesignerDataExplorerPanel implements $DP.Designers.SidebarPanel {
        private flowSessionId;
        private treeContainer;
        constructor(flowSessionId: string);
        isVisible(): boolean;
        get header(): string;
        initialize(container: JQuery): void;
        reload(): void;
        onDataSelected: (path: any) => void;
        onCollapsed: () => void;
        onExpanded: () => void;
        createTree(): void;
    }
    class DataDescriptionHtmlBuilder {
        static getSampledValueHtml(value: string): string;
        static getDataDescriptionTypeHtml(data: $D.Framework.Design.Flow.Mapping.DataDescription): string;
        static getTypeHtml(typeName: string, isList: boolean, maxLength?: number): string;
        static compareDataDescriptionsName(a: any, b: any): any;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
