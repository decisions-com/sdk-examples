declare namespace $DP.Control {
    class SilverHyperlinkButton extends ContentBase implements IActionableFormComponent, $DP.FormHost.IDataConsumer {
        options: Silverdark.Components.SilverHyperlinkButtonOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverHyperlinkButtonOptions);
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
}
