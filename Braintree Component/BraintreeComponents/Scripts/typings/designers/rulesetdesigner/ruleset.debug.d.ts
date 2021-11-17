declare namespace $DP.Designers.RuleSet {
    export import DebugTreeNodeType = $D.Framework.Design.Flow.Service.Debugging.DebugData.DebugTreeNodeType;
    import MatrixRuleCommandHandler = $DP.Designers.MatrixRule.MatrixRuleCommandHandler;
    import MatrixRuleType = $D.Framework.Design.Flow.Service.Edit.MatrixRuleType;
    import SideTreeNode = $DP.Designers.MatrixRule.SideTreeNode;
    import MatrixIntersection = $DP.Designers.MatrixRule.MatrixIntersection;
    import IntersectionEditorInfo = $DP.Designers.MatrixRule.IntersectionEditorInfo;
    import RuleDesignerSurface = $D.Framework.Design.Flow.Service.RuleDesignerSurface;
    interface DebugEvent {
        debugTreeEvent: $D.Framework.Design.Flow.Service.Debugging.DebugData.DebugTreeEvent;
        entityId?: string;
        ruleProgress?: $D.Framework.Design.Flow.Service.Debugging.DebugData.AbstractRuleProgressData[];
        isTruthTable?: boolean;
        ruleDesignerSurface?: RuleDesignerSurface;
        flowProgress?: $D.Framework.Design.Flow.Service.Debugging.DebugData.FlowStepProgressData[];
    }
    class DebuggerMatrixRule implements MatrixRuleCommandHandler {
        stickTo: JQuery;
        private debuggerId;
        history: $D.Framework.Design.Flow.Service.Debugging.DebugData.AbstractRuleProgressData[];
        diagram: Rules.Debug.DebuggerDiagram;
        popupLayerContent: JQuery;
        private view;
        constructor(stickTo: JQuery, debuggerId: string);
        private load;
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
    abstract class RuleSetDebug {
        private ruleDiagram;
        private flowDiagram;
        protected debugEvents: {
            [key: string]: DebugEvent[];
        };
        protected setChildId: string;
        protected viewMatrixRuleDebugInfo(stickTo: JQuery, debuggerId: string): Promise<void>;
        protected viewRuleDebugInfo(stickTo: JQuery, sapmleId: string, ruleId: string, isTruthTable: boolean, ruleDesignerSurface: RuleDesignerSurface): void;
        protected viewFlowDebugInfo(stickTo: JQuery, sapmleId: string, flowId: string): Promise<void>;
        private selectFlowHistory;
        private createExecutionCountAdorner;
        protected handleDebugEventEx(sampleId: string, evId: string, evData: any): void;
        protected abstract updateResults(sampleId: string, evData: $D.Framework.Design.Flow.Service.Debugging.FlowStoppedWithInstructionsEvent): any;
    }
}
