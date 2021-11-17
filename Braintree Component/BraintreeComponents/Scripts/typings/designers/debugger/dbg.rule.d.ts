/**
 * Author:catface@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../../typings/core/generated/DebugDataService.d.ts" />
/// <reference path="../../typings/core/generated/RuleEditService.d.ts" />
/// <reference path="../../typings/core/generated/MatrixRuleDebugService.d.ts" />
/// <reference path="../../typings/es6-promise/es6-promise.d.ts" />
/// <reference path="../common/mappingcontext.d.ts" />
/// <reference path="../matrixrule/matrixruledesigner.d.ts" />
/// <reference path="../matrixrule/mrd.inlineediting.d.ts" />
/// <reference path="../ruledesigner/ruledesigner.d.ts" />
/// <reference path="../ruledesigner/rule.debug.d.ts" />
/// <reference path="dbg.tabs.d.ts" />
/// <reference path="../utils.d.ts" />
declare namespace $DP.Designers.Debugger {
    import MatrixRuleCommandHandler = $DP.Designers.MatrixRule.MatrixRuleCommandHandler;
    import MatrixRuleType = $D.Framework.Design.Flow.Service.Edit.MatrixRuleType;
    import SideTreeNode = $DP.Designers.MatrixRule.SideTreeNode;
    import MatrixIntersection = $DP.Designers.MatrixRule.MatrixIntersection;
    import IntersectionEditorInfo = $DP.Designers.MatrixRule.IntersectionEditorInfo;
    import RuleProgressDataHolder = $D.Framework.Design.Flow.Service.Debugging.DebugData.RuleProgressDataHolder;
    class DebuggerRuleTab implements IDebuggerTab {
        host: JQuery;
        private debuggerId;
        private ruleSessionId?;
        private topEntityId?;
        history: $D.Framework.Design.Flow.Service.Debugging.DebugData.AbstractRuleProgressData[];
        loaded: boolean;
        diagram: Rules.Debug.DebuggerDiagram;
        slider: JQuery;
        constructor(host: JQuery, debuggerId: string, ruleSessionId?: string, topEntityId?: string);
        tabActivated(): void;
        tabDeactivated(): void;
        resize(width: number, height: number): void;
        dispose(): void;
        dataUpdated(): void;
        setup(progressData: RuleProgressDataHolder): void;
        updateHistory(data: $D.Framework.Design.Flow.Service.Debugging.DebugData.AbstractRuleProgressData[]): void;
        selectHistory(index: number): void;
    }
    class DebuggerMatrixRuleTab implements IDebuggerTab, MatrixRuleCommandHandler {
        host: JQuery;
        private debuggerId;
        private matrixRuleSessionId?;
        history: $D.Framework.Design.Flow.Service.Debugging.DebugData.AbstractRuleProgressData[];
        loaded: boolean;
        diagram: Rules.Debug.DebuggerDiagram;
        slider: JQuery;
        private isActive;
        private loadOnActivate;
        private view;
        constructor(host: JQuery, debuggerId: string, matrixRuleSessionId?: string);
        private load;
        tabActivated(): void;
        tabDeactivated(): void;
        resize(width: number, height: number): void;
        dispose(): void;
        dataUpdated(): void;
        private setView;
        getMappingContext(): $DP.Common.MappingContext;
        matrixType: MatrixRuleType;
        setLeftFlowStepName(stepId: string, value: string): void;
        setTopFlowStepName(stepId: string, value: string): void;
        createLeftTree(createFlow: boolean): Promise<void>;
        createTopTree(createFlow: boolean): Promise<void>;
        addAfterLeftTreeNode(node: SideTreeNode): Promise<void>;
        addAfterTopTreeNode(node: SideTreeNode): Promise<void>;
        editLeftTreeNode(node: SideTreeNode): void;
        editTopTreeNode(node: SideTreeNode): void;
        removeLeftTreeNode(node: SideTreeNode): Promise<void>;
        removeTopTreeNode(node: SideTreeNode): Promise<void>;
        editIntersection(leftId: string, topId: string): void;
        setMatrixIntersectionStringValue(intersection: MatrixIntersection, value: string): Promise<void>;
        setIntersectionStringValue(intersection: IntersectionEditorInfo, value: string): Promise<void>;
        isInDebugger(): boolean;
        viewRefreshedCallback?: () => void;
        getActionTypes(): $D.Framework.Design.Flow.RuleAction.RuleActionTypeInfo[];
        addActionOfType(rowId: string, colId: string, actionType: string): Promise<void>;
        removeAction(rowId: string, colId: string, actionId: string): Promise<void>;
        get sessionId(): string;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
