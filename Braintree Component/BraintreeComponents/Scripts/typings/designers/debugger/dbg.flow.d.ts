/**
 * Author:catface@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../../typings/core/generated/DebugDataService.d.ts" />
/// <reference path="../flowdesigner/flowdesigner.d.ts" />
/// <reference path="../../typings/core/generated/datatypes._base.d.ts" />
declare namespace $DP.Designers.Debugger {
    class DebuggerFlowTab implements IDebuggerTab {
        host: JQuery;
        private debuggerId;
        private flowSessionId;
        history: ($D.Framework.Design.Flow.Service.Debugging.DebugData.FlowStepProgressData & {
            designColor?: string;
        })[];
        slider: JQuery;
        loaded: boolean;
        diagram: Flows.FlowDiagram;
        diagramHost: JQuery;
        sliderCanvas: JQuery;
        private isActive;
        private loadOnActivate;
        private pubsubToken;
        constructor(host: JQuery, debuggerId: string, flowSessionId?: string | undefined);
        setupFlow(flowId: string, flowSessionId?: string | undefined): Promise<void>;
        private handleFlowEvent;
        private selectionDialog;
        private hideSelectionDialog;
        private showSelectionDialog;
        private createExecutionAdorner;
        private createExecutionCountAdorner;
        selectHistory(index: number): void;
        private isPlaying;
        private playIndex;
        private playHandler;
        private playClicked;
        private doPlay;
        dataUpdated(): void;
        updateHistory(data: $D.Framework.Design.Flow.Service.Debugging.DebugData.FlowStepProgressData[]): void;
        getColorForStep(info: ($D.Framework.Design.Flow.Service.Debugging.DebugData.FlowStepProgressData & {
            designColor?: string;
        })): string;
        redrawSliderCanvas(): void;
        tabActivated(): void;
        tabDeactivated(): void;
        lastWidth: number;
        lastHeight: number;
        resize(width: number, height: number): void;
        dispose(): void;
    }
    class DebuggerFlowTabSelectionDialog {
        private diagram;
        private part;
        private step;
        private history;
        private holder;
        private anchor;
        constructor(diagram: go.Diagram, part: go.Part, step: Flows.FlowStep, history: ($D.Framework.Design.Flow.Service.Debugging.DebugData.FlowStepProgressData & {
            designColor?: string;
        })[]);
        private getHistoryMenuItem;
        private onHistoryMenuClick;
        private onLoadHistoryMenuItemsClick;
        show(): void;
        close(): void;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
