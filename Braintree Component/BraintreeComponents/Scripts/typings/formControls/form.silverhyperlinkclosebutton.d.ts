declare namespace $DP.Control {
    class SilverHyperlinkCloseButton extends BaseCloseButton {
        options: Silverdark.Components.SilverHyperlinkCloseButtonOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverHyperlinkCloseButtonOptions);
        getCloseButton(): JQuery;
        renderhtml(forHost: $DP.FormHost.DecisionsFormSurface): JQuery;
    }
}
