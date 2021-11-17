/// <reference path="ruleset.debug.d.ts" />
declare namespace $DP.Designers.RuleSet {
    class RuleSetEvaluateSet extends RuleSetDebug {
        private host;
        private evalutionData;
        static get EXCEPTION_KEY_NAME(): string;
        private $table;
        private subscribeIds;
        static get className(): string;
        constructor(host: JQuery, evalutionData: $D.FlowSets.RuleSetSampleSetEvaluation);
        private renderTiles;
        private renderFirstTableRow;
        private setupRows;
        private lazyLoadResults;
        private attachEvents;
        private runDebug;
        private collapseAll;
        private subTableHeader;
        private resultsTableHeader;
        private resultsTableRows;
        protected updateResults(sampleId: string, evData: $D.Framework.Design.Flow.Service.Debugging.FlowStoppedWithInstructionsEvent): void;
        stop(): void;
    }
}
