/**
 * Author:catface@decisions.com
 * Notes:Unauthorized, unlicensed use, redistribution, modification is not allowed.
*/
/// <reference path="fd.utils.d.ts" />
/// <reference path="fd.link.d.ts" />
/// <reference path="fd.step.d.ts" />
/// <reference path="../common/remote.contextprovider.d.ts" />
/// <reference path="../sidebar.panels.d.ts" />
/// <reference path="../utils.d.ts" />
/// <reference path="../../typings/core/generated/FlowEditService.d.ts" />
/// <reference path="../../typings/core/generated/RecentPickedEntityService.d.ts" />
/// <reference path="../../typings/goJS/gojs.d.ts" />
/// <reference path="../../typings/jstree/jstree.d.ts" />
/// <reference path="../../common/dptree.d.ts" />
declare namespace $DP.Designers.Flows {
    export class FlowDesignerToolboxPanel extends $DP.Designers.BaseToolboxPanel {
        private flowSessionId;
        constructor(flowSessionId: string);
        get header(): string;
        protected loadNodes(context: $DP.Common.DPTreeContext, callback: (nodes: any[]) => void): void;
        protected searchNodes(criteria: string, callback: (nodes: any[]) => void): void;
        protected dragStopped(context: $DP.Common.DPTreeContext, ev: JQueryEventObject): void;
        protected getFavoriteActionEntity(): string;
        protected getRecentElementType(): $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType;
        protected getFavouriteIdPrefix(): string | undefined;
        protected onAfterNodeCreated(context: Common.DPTreeContext): Promise<void>;
        private pubSubToken;
        protected onAfterTreeCreated(): Promise<void>;
    }
    interface FlowPropertiesPanelOptions extends DesignerPropertiesPanelOptions {
        flowSessionId: string;
        flowId: string;
    }
    export class FlowPropertiesPanel extends $DP.Designers.DesignerPropertiesPanel {
        flowId: string;
        flowSessionId: string;
        constructor(options: FlowPropertiesPanelOptions);
        loadContextForFlow(force?: boolean): Promise<string>;
        loadContextForStep(flowStepId: string): Promise<string>;
        loadContextForLink(flowLinkId: string): Promise<string>;
        protected contextCreated(contextId: string, deferred?: JQueryDeferred<string>): JQueryDeferred<string>;
    }
    export function getFlowEditingContextId(flowSessionId: string, flowId: string): string;
    export {};
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
