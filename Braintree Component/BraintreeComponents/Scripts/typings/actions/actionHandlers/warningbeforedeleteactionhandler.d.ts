declare namespace $DP.ActionHandlers {
    interface WarningBeforeDeleteActionOptions extends ConfirmActionOptions {
    }
    class WarningBeforeDeleteActionHandler extends ConfirmActionHandler {
        options: WarningBeforeDeleteActionOptions;
        constructor(options: WarningBeforeDeleteActionOptions);
        getWarningsContainer(warnings: string[]): JQuery;
        getWarningTitle(warnings: string[]): string;
        showConfirmationDialog(deleteCallback?: () => void, cancelCallBack?: (e: any) => void): void;
        processEntities(): void;
        showWarningDialog(warnings: string[]): void;
        foreceDeleteEntities(): void;
    }
}
