declare namespace $DP.Actions {
    import SetFormsTitleAction = $D.Framework.ServiceLayer.Actions.Common.SetFormsTitleAction;
    import EntityAction = $D.Framework.ServiceLayer.Services.Folder.EntityAction;
    class SetFormsTitleActionHandler {
        static handle(entityId: string, action: SetFormsTitleAction): void;
        static handleMultiple(group: EntityAction[], action: SetFormsTitleAction): void;
        static registerContext(action: SetFormsTitleAction): Promise<string>;
    }
}
