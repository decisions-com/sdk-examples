declare namespace $DP.Control {
    class SilverButton extends ActionControl implements IActionableFormComponent, $DP.FormHost.IDataConsumer {
        options: Silverdark.Components.SilverButtonOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverButtonOptions);
        renderhtml(forHost: $DP.FormHost.DecisionsFormSurface): JQuery;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        get $button(): JQuery;
        private confirmationMessage;
        private confirmDialogYesButtonText;
        private confirmDialogNoButtonText;
        bindEvents(): void;
        doAction(): void;
        getControl(): JQuery;
        raiseClickEvent(): void;
        getActionName(): string;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
    }
    abstract class ContentButtonBase extends ContentBase {
    }
}
