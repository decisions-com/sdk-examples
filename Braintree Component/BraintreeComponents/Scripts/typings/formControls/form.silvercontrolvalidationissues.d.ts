declare namespace $DP.Control {
    class SilverControlValidationIssues extends SilverTextBlock {
        options: Silverdark.Components.SilverControlValidationIssuesOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverControlValidationIssuesOptions);
        getControl(): JQuery;
        renderhtml(): JQuery;
    }
}
