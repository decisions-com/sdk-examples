/**
 * Author:khuzema@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
interface DecisionsStatic {
    ActionHelper: ActionHelperStatic;
    CompactTagHelper: CompactTagHelperStatic;
    RichText: RichTextStatic;
    SHMDown: any;
}
declare var Decisions: DecisionsStatic;
interface ActionHelperStatic {
    RegenrateMenu(menuid: string): any;
    GetActionHeaderObject(actionHeaderObject: any): any;
    BuildActionObject: BuildActionObjectStatic;
    RenderActionMenu(entityId: any, actions: any, targetDivSelector: any, targetMenuClass: any, targetMenuId: any, isForPortalToolbar: any, isGroupAction: any, isForMobile: any, elementToWhichAttachedMenu: any, entityTypeName: any, isPrimaryMenu: any, expectedMenuPosition: any, doNotHideOnClickOf: any, showArrow: any, menuType: any, buildActionObject: any, onClosed?: any, groupActionBehavior?: any): any;
    MenuPosition: $DP.ActionHelper.MenuPosition;
    HideMenu(e: any): any;
    GetNewGuidForMenu(): string;
    HideGroupActionMenus(): void;
    ShowMenuWithEntityIdAndType(entityId: string, entityTypeName: string, targetElement: JQuery | Element): any;
    GenereateMenuId(entityId: string, entityTypeName: string): string;
    CurrentClick: $DP.ActionHelper.ClickType;
    ClickType: any;
    LastMouseClickObject: any;
    HideSubMenus(): any;
    DocumentScrollMenuHandling(e: any): any;
    OnActionExecutionComplete(actionMessage: $D.Framework.Utilities.Messaging.ActionMessage): any;
}
interface RichTextStatic {
    Initialize(editorId: string, destroyIfInitialized?: boolean): RichTextStatic;
    ResizeSendPortalUrlActionHandler(uiniqueId: any, editorName: any, elementsToConsiderForHeight: any, info: any): void;
    getHtml(): string;
}
interface BuildActionObjectStatic {
    new (folderId: any, ignoreNavigateAction: any, ignoreNavigateToParent: any, navigateInNewWindow: any, buildType: any, showOnPoints: any, menuFor: any, menuContainerId: any, showLoadingActionIndicator: any, currentTarget: any): BuildActionObjectStatic;
    GetActions: (callback: (actions: $D.Framework.ServiceLayer.Actions.BaseActionType[]) => void) => void;
}
interface CompactTagHelperStatic {
    SetTagsData(tagDatas: any, uniqueId: any): any;
    ResizeCompactTagcontrolFromPage(data: any): any;
    CurrentCompactTagDataHolder: any;
}
declare namespace $DP {
    namespace ActionHelper {
        enum MenuPosition {
            Left = 0,
            Right = 1,
            Top = 2,
            Bottom = 3
        }
        enum ClickType {
            Left = 0,
            Right = 1,
            Scroll_Middle = 2
        }
        enum MenuType {
            ActionAndDescription = 0,
            RightClick = 1,
            LeftClick = 2,
            LeftPanelFolder = 3,
            ToolTip = 4,
            None = 5,
            GroupAction = 6,
            LeftPanelAction = 7,
            ActionsBar = 8,
            PortalActionButton = 9,
            LoadingActions = 10,
            ServiceCatalogAction = 11,
            LeftPanelActionsButton = 12
        }
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
