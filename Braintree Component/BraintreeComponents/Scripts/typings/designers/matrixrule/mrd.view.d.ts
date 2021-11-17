/**
 * Author: catface@decisions.com
 * Notes: Unauthorized, unlicensed use, redistribution, modification is not allowed.
*/
/// <reference path="../utils.d.ts" />
/// <reference path="matrixruledesigner.d.ts" />
/// <reference path="mrd.model.d.ts" />
/// <reference path="mrd.intersectioncell.d.ts" />
/// <reference path="../ruledesigner/containers/rule.actionlist.d.ts" />
/// <reference path="../../typings/jquery/jquery.d.ts" />
declare namespace $DP.Designers.MatrixRule {
    type MatrixRuleAxis = 'column' | 'row';
    class ViewMatrix {
        readonly container: JQuery;
        private readonly commandHandler;
        private left;
        private top;
        private matrix;
        private redrawAction;
        private leftTreeDebugData;
        private topTreeDebugData;
        constructor(container: JQuery, commandHandler: MatrixRuleCommandHandler);
        setLeftTree(tree: SideTree): void;
        setTopTree(tree: SideTree): void;
        setMatrix(matrix: Matrix): void;
        timedRedraw(): void;
        private redraw;
        updateIntersectionCell(cell: JQuery): void;
        updateIntersection(rowId: string, columnId: string, value: MatrixIntersection): void;
        inlineEditIntersection(rowId: string, columnId: string): void;
        setDebugData(data: $D.Framework.Design.Flow.Service.Debugging.DebugData.FlowProgressData[]): void;
        private wasTopNodeExecuted;
        private wasLeftNodeExecuted;
        private static wasNodeExecuted;
    }
}
/**
 * Copyright Decisions 2017. For License or Copyright information please contact support@decisions.com
*/
