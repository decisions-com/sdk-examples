declare namespace $DP.ActionHandlers {
    interface IActionModel {
        BaseActionType: ConfirmAction;
        EntityActionsInfo: $D.Framework.ServiceLayer.Services.Folder.EntityAction[];
        ActionMessage: $D.Framework.Utilities.Messaging.ActionMessage;
        ActionUniqueName: string;
        EntityId: string;
    }
    interface ConfirmAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        Label: string;
        GroupActionConfirmationMessage: string;
        Title: string;
        ConfirmButtonLabel: string;
        NonConfirmButtonLabel: string;
    }
    interface ConfirmActionOptions {
        isGroupAction: boolean;
        actionModel: IActionModel;
        holder: JQuery;
    }
    class ConfirmActionHandler {
        options: ConfirmActionOptions;
        OkBtnText: string;
        CancelBtnText: string;
        constructor(options: ConfirmActionOptions);
        initialize(): void;
        getConfirmationMessage(): string;
        onCancel(e: JQueryEventObject): void;
        showConfirmationDialog(deleteCallback?: () => void, cancelCallBack?: (e: any) => void): void;
        attachEvents(): void;
        processingEntity(): void;
        processEntities(): void;
    }
}
