/// <reference path="../../typings/jquery/jquery.d.ts" />
/// <reference path="../../typings/core/generated/datatypes._base.d.ts" />
declare namespace $DP.Designers.Help {
    import Outcome = $D.Framework.Design.Properties.Help.Outcome;
    interface OutcomeListOptions {
        $host?: JQuery;
        outcomes: Outcome[];
        shortenNames?: boolean;
    }
    class OutcomeList {
        private options;
        private $view;
        private $outputList;
        constructor(options: OutcomeListOptions);
        getView(): JQuery;
        private render;
        private hasSomeOutcomeOutputs;
        private hasSingleOutcomeWithoutOutputs;
        private createOutcomeList;
        private createOutputList;
        private createOutcome;
        private onOutcomeClick;
    }
}
