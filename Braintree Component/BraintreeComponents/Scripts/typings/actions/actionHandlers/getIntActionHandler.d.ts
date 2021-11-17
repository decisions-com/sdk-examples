declare namespace $DP.ActionHandlers {
    interface ActionInfo {
        minRange: number;
        maxRange: number;
        entityInfo?: $D.Framework.ServiceLayer.Services.Folder.EntityAction;
        currentValue?: number;
    }
    class GetIntActionHandler {
        private actionInfo;
        host: JQuery;
        lastVal: number;
        okButton: JQuery;
        cancelButton: JQuery;
        validationIssues: $D.Framework.ValidationIssue;
        constructor(actionInfo: ActionInfo);
        private attachEvents;
        private addSpinner;
        private validateAndCorrectValue;
        private hideSpinnerEnableButton;
        private refereshValidation;
        get hasValidation(): boolean;
    }
}
