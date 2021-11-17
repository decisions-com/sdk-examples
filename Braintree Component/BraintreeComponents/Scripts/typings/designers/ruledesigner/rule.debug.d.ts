/**
 * Author:oleg@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="truthtable/tt.container.d.ts" />
/// <reference path="../../common/utils/array.utils.d.ts" />
/// <reference path="../utils.d.ts" />
declare namespace $DP.Designers.Rules.Debug {
    import AllGroupModel = $DP.Designers.Rules.AllGroupModel;
    import AbstractRuleProgress = $D.Framework.Design.Flow.Service.Debugging.DebugData.AbstractRuleProgressData;
    import RuleExecutionResult = $D.Framework.Design.Flow.Service.Debugging.Events.RuleExecutionResult;
    import RuleStepEvaluation = $D.Framework.Design.Flow.Service.Debugging.DebugData.RuleStepEvaluation;
    import RuleStepDisplayData = $D.Framework.Design.Flow.Service.RuleStepDisplayData;
    import RuleDesignerSurface = $D.Framework.Design.Flow.Service.RuleDesignerSurface;
    const Styles: {
        normal: string;
        success: string;
        failure: string;
        missing: string;
    };
    interface DebuggerDiagramOptions {
        ruleId: string;
        ruleSessionId?: string;
        isTruthTable: boolean;
        ruleDesignerSurface: RuleDesignerSurface;
        displayData: RuleStepDisplayData[];
        onInitialized: () => void;
    }
    class DebuggerDiagram {
        private $host;
        private $view;
        private $ruleSurface;
        private root;
        private ruleId;
        private isTruthTable;
        private ruleDesignerSurface;
        private ruleContainer;
        private ttContainer;
        OnInitialized: () => void;
        constructor($host: JQuery);
        initialize(options: DebuggerDiagramOptions): void;
        initializeRule(): void;
        initializeTruthTable(): void;
        handleProgress(currentProgress: AbstractRuleProgress, allHistory: AbstractRuleProgress[]): void;
    }
    function unEvaluateRule(root: AllGroupModel): void;
    function evaluateRuleModel(root: AllGroupModel, allHistory: AbstractRuleProgress[], currentProgress?: AbstractRuleProgress): void;
    function getExecutionResult(currentProgress: AbstractRuleProgress): ExecutionInfo;
    function isStepExecutedProgress(data: AbstractRuleProgress): boolean;
    function isRuleExecutionCompletedProgress(data: AbstractRuleProgress): boolean;
    function isRuleExceptionProgress(data: AbstractRuleProgress): boolean;
    class RuleStepDebugModel {
        private valueChanged;
        private completed;
        private current;
        private currentPath;
        private normal;
        private eval;
        private enumEvals;
        constructor(valueChanged: $DP.Common.Subject);
        set evaluation(value: RuleStepEvaluation);
        get evaluation(): RuleStepEvaluation;
        get isSuccess(): boolean;
        get isFailure(): boolean;
        get isBeyondThePath(): boolean;
        set enumEvaluations(value: RuleStepEvaluation[]);
        get enumEvaluations(): RuleStepEvaluation[];
        clearEvaluation(): void;
        clearState(): void;
        set isCompleted(value: boolean);
        get isCompleted(): boolean;
        set isNormal(value: boolean);
        get isNormal(): boolean;
        set isCurrent(value: boolean);
        get isCurrent(): boolean;
        set isCurrentPath(value: boolean);
        get isCurrentPath(): boolean;
    }
    class ExecutionResultHelper {
        static handleRootExecutionResult(rootContainer: AllRuleTextContainer): void;
        static updateExecutionDuration(executionDuration: JQuery, durationExecution: string): void;
        static buildExecutionDuration(): string;
        static buildLogicalResultRow(): string;
        static getResultBackgroundColor(result: RuleExecutionResult): "" | "rgb(230, 255, 230)" | "rgb(254, 235, 235)";
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
