declare namespace $DP.Common.Actions {
    import ActionHeader = $D.Framework.ServiceLayer.Actions.ActionHeader;
    import ActionDisplayType = $D.Framework.ServiceLayer.Actions.ActionDisplayType;
    /**
     * On the server side we can work with ActionHeader like with BaseActionType because it has special getters.
     * To work with ActionHeader like with BaseActionType on the client side you can use this functionality.
     */
    interface ServerActionHeader extends ActionHeader {
        ActionUniqueName: string;
        Name: string;
        Category: string;
        SubCategory: string;
        Order: number;
        Favorite: string;
        Translate: string;
        IsDefaultGridAction: boolean;
        AllowSingleActions: boolean;
        DisplayType: string;
        IsViewElementPreviewAction: boolean;
        IsGetTitleDescriptionAndFileAction: boolean;
        IsGetFileAction: boolean;
        IsCreateRootFolderAction: boolean;
        IsAddSubFolderWithBehavior: boolean;
        IsCreateElementAction: boolean;
    }
    function createServcerHeaderObject(actionHeader: ActionHeader): ServerActionHeader;
    function forPortalActionSection(actionHeader: ActionHeader): boolean;
    function isDefaultGridAction(actionHeader: ActionHeader): boolean;
    function doesAllowSingleActions(actionHeader: ActionHeader): boolean;
    function isGetFileAction(actionHeader: ActionHeader): boolean;
    function isAddSubFolderWithBehavior(actionHeader: ActionHeader): boolean;
    function isCreateRootFolderAction(actionHeader: ActionHeader): boolean;
    function isGetTitleDescriptionAndFileAction(actionHeader: ActionHeader): boolean;
    function isCreateElementAction(actionHeader: ActionHeader): boolean;
    function isViewElementPreviewAction(actionHeader: ActionHeader): boolean;
    function isPrimary(actionHeader: ActionHeader): boolean;
    function isSecondary(actionHeader: ActionHeader): boolean;
    function getDisplayType(action: ActionHeader): ActionDisplayType;
    function getDisplayTypeAsString(action: ActionHeader): string;
    function convertDisplayTypeToFlgFormat(action: ActionDisplayType): "0" | "1" | "2";
}
