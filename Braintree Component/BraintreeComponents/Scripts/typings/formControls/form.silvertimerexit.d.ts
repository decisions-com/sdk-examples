declare namespace $DP.Control {
    class SilverTimerExit extends ActionControl {
        options: Silverdark.Components.SilverTimerExitOptions;
        private static readonly INSTANCE_NAME;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverTimerExitOptions);
        hours: number;
        minutes: number;
        seconds: number;
        $formCloseMsg: JQuery;
        $autoExitCheckBox: JQuery;
        formTimer: number;
        controlId: string;
        confirmDialog: JQuery;
        confirmationTimer: number;
        isConfirmationDialogActive: boolean;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        initializeControl(): void;
        attachEvents(): void;
        reset(): void;
        static ResetTimer(eventdata: any, controlId: string): void;
        updateText(timeString: string): void;
        stopTimer(): void;
        hideTimer(): void;
        startTimer(): void;
        raiseClickEvent(): void;
        closeConfirmationDialog(): void;
        getControl(): JQuery;
        getActionName(): string;
        getTimeString(): string;
        renderhtml(): JQuery;
    }
}
