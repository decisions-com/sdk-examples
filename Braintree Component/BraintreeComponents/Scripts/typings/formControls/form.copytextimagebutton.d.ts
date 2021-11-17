declare namespace $DP.Control {
    class CopyTextImageButton extends BaseCopyTextButton {
        options: Silverdark.Components.CopyTextImageButtonOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.CopyTextImageButtonOptions);
        getControl(): JQuery;
        getCopyButtonControl(): JQuery;
        renderhtml(): JQuery;
        bindEvents(): void;
    }
}
