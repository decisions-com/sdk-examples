declare namespace $DP.Control {
    class SilverImageButton extends ActionControl implements IActionableFormComponent {
        options: Silverdark.Components.SilverImageButtonOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverImageButtonOptions);
        $button: JQuery;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        getActionName(): string;
        private confirmationMessage;
        private confirmDialogYesButtonText;
        private confirmDialogNoButtonText;
        bindEvents(): void;
        raiseClickEvent(): void;
        getControl(): JQuery;
        doAction(): void;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        renderhtml(): JQuery;
    }
}
