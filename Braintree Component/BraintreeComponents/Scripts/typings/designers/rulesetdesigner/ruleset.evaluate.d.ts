/// <reference path="statistics/grid.d.ts" />
/// <reference path="ruleset.debug.d.ts" />
declare namespace $DP.Designers.RuleSet {
    export interface RuleSetEvaluateOptions {
        host: JQuery;
        title: string;
        sampleId: string;
        data: $D.Framework.Design.Flow.Service.Debugging.DebugData.DebugDataInfo;
        instances?: Array<{
            label: string;
            value: any;
            isSelected?: boolean;
        }>;
        onChange?: (v: any) => void;
    }
    enum RulesSetRuleType {
        EvaluationRule = 0,
        ActionRule = 1,
        InterceptRule = 2,
        TruthTable = 3,
        EvaluationFlow = 4,
        ChangeDataFlow = 5,
        PassThroughFlow = 6,
        MatrixRule = 7
    }
    export interface BaseFlowSetRunResult {
        EndedInException: boolean;
        ExceptionDetails: string;
        ExecutionTime: string;
        Id: string;
        Name: string;
        RuleResult?: boolean;
        RuleResultData: string;
        RuleType: RulesSetRuleType;
        NotRun: boolean;
    }
    export interface FlowResultDetails {
        details: string[];
        executionTime: number;
        count: number;
    }
    export class RuleSetEvaluate extends RuleSetDebug {
        private options;
        static get EXCEPTION_KEY_NAME(): string;
        private $view;
        private $grid;
        private $middleHeader?;
        private grid;
        private header;
        private ruleSetResults;
        static get className(): string;
        constructor(options: RuleSetEvaluateOptions);
        static getHeaderCellHtml(cellData: any): string;
        private setupHeaderRow;
        private fillRuleSetResults;
        protected updateResults(sampleId: string, evData: $D.Framework.Design.Flow.Service.Debugging.FlowStoppedWithInstructionsEvent): void;
        private updateRowDefinition;
        private getStringResult;
        private getStringDuration;
        private getRowCellHtml;
        private getSampleResultRowContent;
        private getSampleEmptyRowContent;
        private addGridRow;
        private viewExceptionDetails;
        stop(): void;
    }
    export {};
}
