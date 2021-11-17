declare namespace $DP.Actions {
    interface DecimalActionModel {
        action: $D.Framework.ServiceLayer.Actions.Common.GetDecimalAction;
        entityId: string;
    }
    class GetDecimalAction {
        private decimalActionModel;
        decimalActionHolder: JQuery;
        private decimalActionSpinner;
        constructor(decimalActionModel: DecimalActionModel);
        show(): void;
        initializeSpinner(): Promise<void>;
        processAction(): void;
    }
}
