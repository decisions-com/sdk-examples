declare namespace $DP.Control {
    abstract class BaseCloseButton extends ContentBase implements IActionableFormComponent {
        options: $D.Framework.Design.Form.ComponentData.BaseCloseButtonOptions;
        private confirmationMessage;
        private confirmDialogYesButtonText;
        private confirmDialogNoButtonText;
        constructor($controlLayout: JQuery, options: $D.Framework.Design.Form.ComponentData.BaseCloseButtonOptions);
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        private $closeButton;
        abstract getCloseButton(): JQuery;
        attachEvents(): void;
        closeForm(): void;
        closeBrowserWindow(): void;
        getControl(): JQuery;
        doAction(): void;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
    }
}
