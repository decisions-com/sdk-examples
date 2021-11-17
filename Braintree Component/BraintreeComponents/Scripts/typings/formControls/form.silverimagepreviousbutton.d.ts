declare namespace $DP.Control {
    class SilverImagePreviousButton extends SilverPreviousButtonBase {
        options: Silverdark.Components.SilverImagePreviousButtonOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverImagePreviousButtonOptions);
        getButtonControl(): JQuery;
        getControl(): JQuery;
        renderhtml(): JQuery;
    }
}
