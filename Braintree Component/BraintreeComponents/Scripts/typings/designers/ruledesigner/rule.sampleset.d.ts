declare namespace $DP.Designers.Rules {
    import RuleSampleSetEvaluation = $D.Framework.Design.Flow.Service.Debugging.Samples.RuleSampleSetEvaluation;
    interface RuleSampleSetViewOptions {
        host: JQuery;
        title: string;
    }
    class RuleSampleSetView implements SampleSetStatsView {
        private readonly options;
        private $view;
        private header;
        private $statsHolder;
        constructor(options: RuleSampleSetViewOptions);
        static get className(): string;
        private render;
        showStats(stats: RuleSampleSetEvaluation): void;
        showRerun(rerun: () => void): void;
        getElement(): JQuery;
        private renderTiles;
        private renderExecTime;
        dispose(): void;
    }
}
