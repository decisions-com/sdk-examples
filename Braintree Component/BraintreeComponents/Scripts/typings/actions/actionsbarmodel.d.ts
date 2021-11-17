declare namespace $DP.Common.Actions {
    import ActionHeader = $D.Framework.ServiceLayer.Actions.ActionHeader;
    interface ActionsBarModel extends CreateActionBarOptions {
        primaryGroupInfo: ActionBarButton[];
        secondaryGroupInfo: ActionBarButton[];
        isInDesignMode?: boolean;
    }
    function createActionBarModel(props?: Readonly<CreateActionBarOptions>): ActionsBarModel;
    function getActions(entityId: string, entityTypeName: string, folderId: string): Promise<ActionHeader[]>;
    function createModelForEntity(props: Readonly<CreateActionBarOptions>): Promise<ActionsBarModel>;
    function createModel(props: Readonly<{
        actionHeaders: ActionHeader[];
    } & CreateActionBarOptions>): ActionsBarModel;
    function createModelForDesigner(props: Pick<CreateActionBarOptions, 'actionButtonCssClass' | 'menuCssClass' | 'showAllButton' | 'primaryActionsCssClass' | 'secondaryActionsCssClass' | 'actionBarCssClass'>): ActionsBarModel;
}
