declare namespace $DP.Actions {
    import ApproveRejectActionType = $D.Framework.ServiceLayer.Actions.Common.ApproveRejectAction;
    import EntityAction = $D.Framework.ServiceLayer.Services.Folder.EntityAction;
    interface ApproveRejectActionModel {
        action: ApproveRejectActionType;
        entityActionsInfo: EntityAction[];
        entityId: string;
    }
    class ApproveRejectAction {
        private approveRejectActionModel;
        content: JQuery;
        textarea: JQuery;
        isRequireApproveNotes: boolean;
        isRequireRejectNotes: boolean;
        isAskForNotes: boolean;
        constructor(approveRejectActionModel: ApproveRejectActionModel);
        show(): void;
        getLabel(): string;
        getTextArea(): "" | "<textarea class=\"approve-reject-note full-size\" rows = \"12\" cols = \"80\"></textarea>";
        processAction(isApproveAction: boolean): void;
        getTextAreaValue(): any;
    }
}
