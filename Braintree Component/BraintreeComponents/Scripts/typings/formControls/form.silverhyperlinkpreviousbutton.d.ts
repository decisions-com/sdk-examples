declare namespace $DP.Control {
    class SilverHyperLinkPreviousButton extends SilverPreviousButtonBase {
        options: Silverdark.Components.SilverHyperLinkPreviousButtonOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverHyperLinkPreviousButtonOptions);
        getButtonControl(): JQuery;
        getControl(): JQuery;
        renderhtml(): JQuery;
    }
}
