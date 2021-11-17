declare namespace $DP.Designers.RuleSet {
    interface RuleSetStatsViewOptions {
        host: JQuery;
        title: string;
        onChange: (v: any) => void;
        instances?: $D.FlowSets.DropDownItem[];
    }
    class RuleSetStatsView implements SampleSetStatsView {
        private readonly options;
        private ruleSetEvaluate;
        private header;
        constructor(options: RuleSetStatsViewOptions);
        showStats(stats: $D.FlowSets.RuleSetSampleSetEvaluation): void;
        showRerun(rerun: () => void): void;
        getElement(): JQuery;
        dispose(): void;
    }
    class RuleSetSampleHandler {
        static create(options: SampleHandlerOptions, getInstanceId: () => string, onChange: (v: any) => void, instances?: $D.FlowSets.DropDownItem[]): DefaultSampleHandler;
    }
}
