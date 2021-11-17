declare namespace $DP.Control {
    class SilverImageCloseButton extends BaseCloseButton {
        options: Silverdark.Components.SilverImageCloseButtonOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverImageCloseButtonOptions);
        getCloseButton(): JQuery;
        renderhtml(): JQuery;
    }
}
