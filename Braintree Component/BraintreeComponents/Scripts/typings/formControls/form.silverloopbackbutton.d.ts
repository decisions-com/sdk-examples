declare namespace $DP.Control {
    class SilverLoopBackButton extends ActionControl implements IActionableFormComponent {
        options: Silverdark.Components.SilverLoopBackButtonOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverLoopBackButtonOptions);
        getActionName(): string;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        attachEvents(): void;
        getControl(): JQuery;
        doAction(): void;
        renderhtml(): JQuery;
    }
}
