declare namespace $DP.Control {
    abstract class SilverPreviousButtonBase extends ActionControl implements IActionableFormComponent {
        constructor($controlLayout: JQuery, options: Silverdark.Components.BasePreviousButtonOptions);
        $button: JQuery;
        getActionName(): string;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        bindEvents(): void;
        doAction(): void;
        abstract getButtonControl(): JQuery;
    }
}
