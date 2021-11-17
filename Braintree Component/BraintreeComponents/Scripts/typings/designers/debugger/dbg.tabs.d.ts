/**
 * Author:catface@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="debugger.d.ts" />
/// <reference path="../unittests/ut.api.d.ts" />
/// <reference path="../unittests/ut.runner.d.ts" />
declare namespace $DP.Designers.Debugger {
    interface IDebuggerTab {
        host: JQuery;
        tabActivated(): any;
        tabDeactivated(): any;
        resize(width: number, height: number): any;
        dispose(): any;
        dataUpdated(): any;
    }
    class DebuggerTabStatics {
        static getDebugger(host: JQuery): GenericDebugger;
        static tabActivated(host: JQuery): void;
        static tabDeactivated(host: JQuery): void;
        static refreshTab(host: JQuery): void;
        static registerTab(tab: IDebuggerTab): void;
        static getRegisteredTab(host: JQuery): IDebuggerTab;
        static unregisterTab(tab: IDebuggerTab): void;
        static selectTab(tab: IDebuggerTab): void;
        static getSelectedTab(host: JQuery): any;
        static updateHeader(tab: JQuery | IDebuggerTab, headerText: string): JQuery;
        static findHeaderByIndex(host: JQuery, index: number): JQuery;
        static findHeaderText(header: JQuery): JQuery;
        static updateLoading(tab: JQuery | IDebuggerTab, isLoading?: boolean): void;
    }
    class DebuggerStartTab implements IDebuggerTab {
        host: JQuery;
        hasInputs: boolean;
        private hasOutputs;
        private topEntityId;
        private entityType;
        private showRememberToRecent;
        private sessionId;
        canCancel: boolean;
        private onCancel;
        activated: boolean;
        utRunner: Unittests.UnittestRunner;
        constructor(host: JQuery, hasInputs: boolean, hasOutputs: boolean, topEntityId: string, entityType: ElementType, showRememberToRecent: boolean, sessionId: string, canCancel: boolean, onCancel: () => void);
        initialize(debuggingId?: string, runSampleId?: string, datasource?: DebugInputDataSource): void;
        tabActivated(): void;
        tabDeactivated(): void;
        lastWidth: number;
        lastHeight: number;
        resize(width: number, height: number): void;
        dispose(): void;
        dataUpdated(): void;
    }
    class DebuggerInputsTab implements IDebuggerTab {
        host: JQuery;
        activated: boolean;
        active: boolean;
        nodeId: string;
        extraInfo: any;
        div: JQuery;
        constructor(host: JQuery, nodeId: string);
        setNodeId(nodeId: string, extra?: any): void;
        tabActivated(): void;
        tabDeactivated(): void;
        resize(width: number, height: number): void;
        dispose(): void;
        dataUpdated(): void;
    }
    class DebuggerFormTab implements IDebuggerTab {
        host: JQuery;
        private nodeId;
        constructor(dbg: GenericDebugger, host: JQuery, nodeId: string);
        tabActivated(): void;
        tabDeactivated(): void;
        resize(width: number, height: number): void;
        dispose(): void;
        dataUpdated(): void;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
