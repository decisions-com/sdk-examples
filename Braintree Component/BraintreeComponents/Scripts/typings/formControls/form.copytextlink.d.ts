declare namespace $DP.Control {
    class CopyTextLink extends BaseCopyTextButton {
        options: Silverdark.Components.CopyTextLinkOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.CopyTextLinkOptions);
        getControl(): JQuery;
        getCopyButtonControl(): JQuery;
        renderhtml(): JQuery;
    }
}
