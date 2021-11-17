declare namespace $DP.Control {
    class SilverPreviousButton extends SilverPreviousButtonBase {
        options: Silverdark.Components.SilverPreviousButtonOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverPreviousButtonOptions);
        getButtonControl(): JQuery;
        getControl(): JQuery;
        renderhtml(): JQuery;
    }
}
