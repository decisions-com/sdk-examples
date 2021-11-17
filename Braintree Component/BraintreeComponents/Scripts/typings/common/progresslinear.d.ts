declare namespace $DP.Common {
    interface ProgressLinearOptions {
        host?: JQuery;
        percent: number;
        showPercentNumber?: boolean;
        backgroundColor?: string;
        progressColor?: string;
    }
    class ProgressLinear {
        private options;
        static get DATA_KEY(): string;
        static get(host: JQuery): ProgressLinear;
        private $view;
        private reactivePercent;
        get percent(): number;
        set percent(percent: number);
        constructor(options: ProgressLinearOptions);
        getView(): JQuery;
        private redrawProgress;
        private render;
        private getLayout;
        private getDeterminate;
        private getPercent;
    }
}
