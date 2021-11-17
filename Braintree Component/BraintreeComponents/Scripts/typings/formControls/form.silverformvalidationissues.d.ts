declare namespace $DP.Control {
    enum ValidationIssueType {
        All = 0,
        Fatal = 1,
        Warning = 2
    }
    class SilverFormValidationIssues extends SilverTextBlock {
        options: Silverdark.Components.SilverFormValidationIssuesOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverFormValidationIssuesOptions);
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        renderhtml(): JQuery;
        getControl(): JQuery;
        private updateValidations;
        private showValidations;
        private clear;
    }
}
