declare namespace $DP.ActionHandlers {
    function confirmWithBoolAnswerActionHandler({ action, entityId }: {
        action: $D.Framework.ServiceLayer.Actions.Common.ConfirmWithBoolAnswerAction;
        entityId: string;
    }): void;
}
