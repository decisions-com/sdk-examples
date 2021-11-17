/**
 * Author:catface@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
 */
/// <reference path="dbg.tabs.d.ts" />
/// <reference path="../../typings/core/decisions.d.ts" />
/// <reference path="../../typings/jquery/jquery.d.ts" />
/// <reference path="../../typings/jqueryui/jqueryui.d.ts" />
/// <reference path="../../typings/core/generated/FlowDebugService.d.ts" />
/// <reference path="../../typings/core/generated/DebugDataService.d.ts" />
/// <reference path="../../typings/core/generated/PageService.d.ts" />
/// <reference path="../flowdesigner/fd.diagram.d.ts" />
/// <reference path="../../dialog/dialog.form.d.ts" />
/// <reference path="dbg.flow.d.ts" />
/// <reference path="dbg.rule.d.ts" />
/// <reference path="dbg.page.d.ts" />
/// <reference path="../../typings/core/generated/RuleDebugService.d.ts" />
/// <reference path="../../typings/core/generated/MatrixRuleDebugService.d.ts" />
declare namespace $DP.Designers.Debugger {
    import FlowDebugType = $D.Framework.Design.Flow.Service.Debugging.FlowDebugType;
    import DebugParameters = $D.Framework.Design.Flow.Service.Debugging.DebugParameters;
    import ProfileType = $DP.Designers.Unittests.ProfileType;
    type ElementType = "Flow" | "Rule" | "MatrixRule" | "Global";
    interface DebuggerOptions {
        entityId?: string;
        sessionId?: string;
        entityType: ElementType;
        host?: JQuery;
        runSampleId?: string;
        onClose?: () => void;
        entityName?: string;
        showRememberToRecents?: boolean;
        datasource?: $DP.Designers.Debugger.DebugInputDataSource;
        onInitialize?: (runSampleId?: string) => void;
    }
    class GenericDebugger {
        private options;
        private showDebugTabs;
        private lastSelectedNode;
        static start(options: DebuggerOptions, callback?: (d: GenericDebugger) => void): void;
        private entityType;
        private tabsControl;
        private tabsHeader;
        private tabsContainer;
        private startTab;
        private startContainer;
        private inputTab;
        private evContainer;
        private devContainer;
        private forms;
        private currentFormEvents;
        private visualizerTab;
        private visualizer;
        private tree;
        private stateInfo;
        private subTokens;
        private readonly host;
        private readonly topEntityId;
        private isGlobalActive;
        private lastGlobalSettings;
        private globalToggleHost;
        private readonly globalEditGroupingHost;
        private readonly globalEditCachingHost;
        constructor(options: DebuggerOptions);
        private hideNavigation;
        private showNavigation;
        get isGlobal(): boolean;
        private _globalToggleHandler;
        private renderGlobalDebuggerToggle;
        private _globalEditGroupingHandler;
        private renderGlobalEditGrouping;
        private _globalEditCachingHandler;
        private renderGlobalEditCaching;
        private updateTabSeparator;
        private getSessions;
        private keepAliveTimer;
        private keepSessionsAlive;
        private refreshState;
        private selectGlobalGrouping;
        private selectGlobalCacheTimeout;
        private toggleGlobalDebugger;
        private createNodeForEvent;
        private loadNodes;
        private getGroupNodes;
        private updateLoadLink;
        private cancelStart;
        private onNewSessionNodeSelected;
        private onSessionNodeSelected;
        private showSessionNodeActions;
        private setupInputsTab;
        private handleDebugEventEx;
        private areFormEventsMatching;
        private static getDate;
        private static formatTime;
        private handleDebugEvent;
        private createTab;
        private changeVisualizer;
        private pages;
        private basePageContextId;
        private setupDebuggerPages;
        lastHeight: number;
        lastWidth: number;
        lastRawHeight: number;
        lastRawWidth: number;
        resizeContent(width: number, height: number, isComputed?: boolean, tabToResize?: IDebuggerTab): void;
        static createFlowDebugParameters(flowId: string, topTrackingId?: string, registerInDebugger?: boolean): $D.Framework.Design.Flow.Service.Debugging.DebugParameters;
        static createDebugParameters(elementId: string, elementType: ElementType, dataId: string, dataSource: $DP.Designers.Debugger.DebugInputDataSource): DebugParameters;
        createFlowDebugParameters(flowId: string, topTrackingId: string): $D.Framework.Design.Flow.Service.Debugging.DebugParameters;
        static createRuleDebugParameters(ruleId: string, topTrackingId?: string, registerInDebugger?: boolean): $D.Framework.Design.Flow.Service.Debugging.DebugParameters;
        createRuleDebugParameters(ruleId: string, topTrackingId?: string): $D.Framework.Design.Flow.Service.Debugging.DebugParameters;
        static createMatrixRuleDebugParameters(ruleId: string, topTrackingId?: string, registerInDebugger?: boolean): $D.Framework.Design.Flow.Service.Debugging.DebugParameters;
        createMatrixRuleDebugParameters(ruleId: string, topTrackingId?: string): $D.Framework.Design.Flow.Service.Debugging.DebugParameters;
        private static registerSessionInDebugger;
        private delayCreateRootNode;
        private closeForms;
        private dispose;
        private setupNode;
        private updateNode;
        private isFormNode;
        private updateNodeInfo;
        private getNodeHtml;
        private static temporizedStart;
        static startDebug(elementId: string, elementType: ElementType, dataId?: string, dataSource?: DebugInputDataSource, debugType?: FlowDebugType, profileType?: ProfileType, rememberToRecents?: boolean): void;
        static startFlowProfiling(params: DebugParameters): Promise<void>;
        private static addProfileFlowParameter;
        private formClosed;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
 */
