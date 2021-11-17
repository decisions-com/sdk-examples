declare namespace $DP.Control {
    abstract class BaseCopyTextButton extends FormComponentBase {
        options: Silverdark.Components.BaseCopyTextButtonOptions;
        button: JQuery;
        elementId: string;
        constructor($controlLayout: JQuery, options: Silverdark.Components.BaseCopyTextButtonOptions);
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        abstract getCopyButtonControl(): JQuery;
        bindEvents(): void;
        private copyText;
    }
}
