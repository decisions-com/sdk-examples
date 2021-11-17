declare namespace $DP.Designers.Sampling {
    interface SampleHeaderOptions {
        host: JQuery;
        title: string;
        $middle?: JQuery;
    }
    class SampleStatsHeader {
        private readonly options;
        private $view;
        constructor(options: SampleHeaderOptions);
        showRerun(rerun: () => void): void;
    }
}
