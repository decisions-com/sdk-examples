declare namespace $DP.Control {
    class EventImageButton extends ContentBase {
        options: Silverdark.Components.EventImageButtonOptions;
        $button: JQuery;
        buttonHolderStyle: string;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        getControl(): JQuery;
        constructor($controlLayout: JQuery, options: Silverdark.Components.EventImageButtonOptions);
        renderhtml(): JQuery;
    }
}
