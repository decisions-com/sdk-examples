declare namespace $DP.Common.Actions {
    import ActionHeader = $D.Framework.ServiceLayer.Actions.ActionHeader;
    import GroupAction = $D.Framework.ServiceLayer.Services.Folder.GroupAction;
    import NavigateActionHeader = $D.Framework.ServiceLayer.Actions.NavigateActionHeader;
    import NavigateType = $D.Framework.ServiceLayer.Actions.NavigateType;
    function isNavigateAction(actionHeader: ActionHeader): boolean;
    function parseNavigationAction(action: NavigateActionHeader): {
        actionFolderId: string;
        pageName: any;
        navigateType: NavigateType;
    };
    function isSeparator(actionHeader: ActionHeader): boolean;
    function createSeparator(order: number): ActionHeader & {
        IsDummy: boolean;
    };
    function isMobileAction(action: ActionHeader): boolean;
    function filterMobileActions(actions: ActionHeader[]): ActionHeader[];
    function isPortalAction(action: ActionHeader): boolean;
    function filterPortalActions(actions: ActionHeader[]): ActionHeader[];
    function categorizeActions(groups: ActionBarButton[], id: string): ActionHeader[];
    function actionsHasSameCategory(actions: ActionHeader[]): boolean;
    /**
     * Method doesn't modify actions. It returns new actions.
     * TODO alex: we need to move this logic to the context menu
     */
    function cleanCategories(actions: ActionHeader[]): ActionHeader[];
    function isGroupAction(action: ActionHeader | BaseActionType): boolean;
    function isActionSupported(action: ActionHeader | BaseActionType, isGroupActions: boolean): boolean;
    interface ActionFilterOptions {
        readonly folderId?: string;
        readonly entityId?: string;
        readonly isGroupActions?: boolean;
        readonly showNavigationInNewWindowOnly?: boolean;
        readonly ignoreNavigation?: boolean;
        readonly ignoreParentNavigation?: boolean;
    }
    function doActionFiltering<T extends (ActionHeader | GroupAction)>(actions: T[], options?: ActionFilterOptions): T[];
    function createNoActions(): {
        Ca: string;
        Flg: string;
        Fv: any;
        Id: string;
        Nm: string;
        Or: number;
        SCa: any;
        Tp: string;
        Tr: boolean;
        IsDummy: boolean;
    };
    function getActionHeader(action: ActionHeader | GroupAction, isGroupActions: boolean): ActionHeader;
}
