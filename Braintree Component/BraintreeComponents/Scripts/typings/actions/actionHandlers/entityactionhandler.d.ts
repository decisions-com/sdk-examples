declare namespace $DP.Actions {
    interface EntityActionHandlerOptions {
        holder: JQuery;
        entityId: string;
        actionMessage: $D.Framework.Utilities.Messaging.ActionMessage;
        actionUniqueName: string;
        okActionName?: string;
        cancelActionName?: string;
    }
    abstract class EntityActionHandler {
        protected options: EntityActionHandlerOptions;
        constructor(options: EntityActionHandlerOptions);
        abstract getContextId(): Promise<string>;
        initialize(): Promise<void>;
    }
    class AddEntityActionHandler extends EntityActionHandler {
        getContextId(): Promise<string>;
    }
    class EditEntityActionHandler extends EntityActionHandler {
        getContextId(): Promise<string>;
    }
    class EditObjectActionHandler extends EntityActionHandler {
        getContextId(): Promise<string>;
    }
    class EditProviderActionHandler extends EntityActionHandler {
        getContextId(): Promise<string>;
    }
}
