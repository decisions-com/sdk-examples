declare namespace $DP.Control {
    class SilverCloseFormButton extends BaseCloseButton {
        options: Silverdark.Components.SilverCloseFormButtonOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverCloseFormButtonOptions);
        getCloseButton(): JQuery;
        renderhtml(forHost: $DP.FormHost.DecisionsFormSurface): JQuery;
    }
}
