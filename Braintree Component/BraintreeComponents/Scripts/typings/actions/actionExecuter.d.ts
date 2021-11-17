/**
 * Author:huzefa.ezzi@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
 */
/// <reference path="../typings/core/decisions.d.ts" />
/// <reference path="../common/spinner.d.ts" />
/// <reference path="../Decisions.Controls/Decisions.Controls.d.ts" />
/// <reference path="../layouts/decisions.ui.d.ts" />
/// <reference path="../typings/actionhandler/actionhandlers.d.ts" />
/// <reference path="../typings/core/generated/FolderService.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/jqueryui/jqueryui.d.ts" />
/// <reference path="actionsmenu/menu.helpers.d.ts" />
/// <reference path="../dialog/dialog.propertygrid.d.ts" />
/// <reference path="../dialog/dialog.form.d.ts" />
/// <reference path="../containers/layout/layout.types.d.ts" />
/// <reference path="actionhandlers.d.ts" />
declare namespace $DP.Common.Actions {
    import BaseActionType = $D.Framework.ServiceLayer.Actions.BaseActionType;
    const FolderType: string;
    const DocumentType: string;
    const ElementRegistrationType: string;
    const CommentType: string;
    const actionExecutedEvent = "actionExecutedEvent";
    interface EntityActionInfo {
        entityId: string;
        entityType: string;
        name: string;
        category?: string;
        subCategory?: string;
        clientActionId?: string;
    }
    interface AddDocumentInfo {
        fileName?: string;
        filepath?: string;
        actionUniqueName?: string;
        title?: string;
        description?: string;
        entityId?: string;
        actionName?: string;
        actionTypeName?: string;
        actionID?: string;
        entityClassName?: string;
        folderID?: string;
        refreshScope?: string;
        requiresLeaseCheck?: boolean;
        senderSessionId?: boolean;
    }
    class ActionExecutor {
        static getDialogOptionsFromElement(dialogElement: JQuery, actionName: string, dialogOptions?: DialogOptions, forceactionNameAsDialogTitle?: boolean): DialogOptions;
        static runActionSync(action: BaseActionType, onActionNotFound?: (action: BaseActionType) => void, entityInfo?: any, openActionMode?: string, target?: HTMLElement | JQuery | string, className?: string, isGroupAction?: boolean): void;
        static runActionViaController(action: any, dialogOptions?: DialogOptions): void;
        static runAction(actionLoader: JQueryDeferred<BaseActionType>, onActionNotFound?: (action: BaseActionType) => void, entityId?: string, openActionMode?: string, target?: HTMLElement | JQuery | string, className?: string, isGroupAction?: boolean): void;
        static selectAndShowDialog(content: JQuery, actionName: string, mvcActionHandler: string, dialogOptions?: DialogOptions): JQuery;
        static handleLoading(html: string): boolean;
        static handleErrorInHtml(html: string): boolean;
        static runActionInDialog(htmlLoader: JQueryPromise<string>, actionName?: string, showLoadingIndicatorOutsideDialog?: boolean, dialogOptions?: DialogOptions, mvcActionHandler?: string, forceactionNameAsDialogTitle?: boolean): JQueryDeferred<JQuery>;
        static runFlowInDialog: (message: {
            FlowId: string;
            InputData: Array<{
                Name: string;
                OutputValue: any;
            }>;
        }) => void;
        static startFlow(flowId: string, data: {
            [key: string]: any;
        }): void;
        static getActionsForEntityPromise(entity: {
            Id: string;
            OrmTypeName: string;
        }): JQueryPromise<BaseActionType[]>;
        static getActionsForEntity(entityId: string, entityType: string, callback: (result: {
            entityId: string;
            entityType: string;
            actions?: $D.Framework.ServiceLayer.Actions.BaseActionType[];
            error?: string;
        }) => void): void;
        static getActionForEntity(entityAction: EntityActionInfo): JQueryPromise<BaseActionType>;
        static showActionsForEntity(entityId: string, entityType: string, anchor: JQuery | {
            x: number;
            y: number;
            w: number;
            h: number;
        }, position?: $DP.ActionHelper.MenuPosition, onClose?: () => void): void;
        static showActionsContextMenu(entityId: string, entityType: string, actions: $D.Framework.ServiceLayer.Actions.BaseActionType[] | $D.Framework.ServiceLayer.Actions.ActionHeader[], anchor: JQuery | HTMLElement | {
            x: number;
            y: number;
            w: number;
            h: number;
        }, position?: $DP.ActionHelper.MenuPosition, onClose?: () => void, menuType?: $DP.ActionHelper.MenuType): void;
        static actionExecutionCompleted: (folderId: any, entityId: any, action: any) => void;
        static runBaseAction(entityId: string, baseAction: ActionHeader, entityType?: string, actionElement?: JQuery | string): Promise<void>;
        /**
         * Runs action by unique name
         * @param uniqueName Name of format "|!~|...|!~|...|!~|...|!~|"
         */
        static runActionByUniqueName(uniqueName: string): Promise<void>;
        static attachActionOnClick(element: JQuery, entityAction: EntityActionInfo): void;
        static addDocument(options: AddDocumentInfo): Promise<void>;
        static showActions(actions: any, element: JQuery | HTMLElement, menuPosition: $DP.ActionHelper.MenuPosition, entityId: string, menuId: string, menuType?: $DP.ActionHelper.MenuType): void;
        private static overrideActionsClick;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
