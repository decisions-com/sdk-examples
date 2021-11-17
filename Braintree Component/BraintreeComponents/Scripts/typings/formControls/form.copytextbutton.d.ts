declare namespace $DP.Control {
    class CopyTextButton extends BaseCopyTextButton {
        options: Silverdark.Components.CopyTextButtonOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.CopyTextButtonOptions);
        getControl(): JQuery;
        getCopyButtonControl(): JQuery;
        renderhtml(): JQuery;
    }
}
