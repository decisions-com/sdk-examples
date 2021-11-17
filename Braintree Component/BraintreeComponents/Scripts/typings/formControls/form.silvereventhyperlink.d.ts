declare namespace $DP.Control {
    class SilverEventHyperlink extends ContentBase implements IActionableFormComponent {
        options: Silverdark.Components.SilverEventHyperlinkOptions;
        $button: JQuery;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        doAction(): void;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverEventHyperlinkOptions);
        getControl(): JQuery;
        renderhtml(): JQuery;
    }
}
