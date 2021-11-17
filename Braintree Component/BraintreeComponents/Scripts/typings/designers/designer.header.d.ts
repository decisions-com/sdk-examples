/**
 * Author:oleg@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../typings/core/generated/MatrixRuleEditService.d.ts" />
/// <reference path="../typings/core/generated/FlowEditService.d.ts" />
/// <reference path="../typings/core/generated/RuleEditService.d.ts" />
/// <reference path="../typings/core/generated/FormDesignerService.d.ts" />
/// <reference path="../common/utils/promise.utils.d.ts" />
declare namespace $DP.Designers.Header {
    type UndoableService = FlowEditServiceStatic | FormDesignerServiceStatic | RuleEditServiceStatic | MatrixRuleEditServiceStatic;
    const DEPENDENCIES_ACTION_NAME = "dependencies";
    const VALIDATE_ACTION_NAME = "validate";
    const ViewIntegrationAction: ActionLink;
    const ViewHistoryAction: ActionLink;
    interface ActionLink {
        name: string;
        title: string;
        hidden?: boolean;
        category?: string;
    }
    interface ActionLabelHeader {
        name: string;
        link: JQuery;
    }
    enum separatorType {
        left = 0,
        right = 1,
        both = 2
    }
    function categoryClick(el: JQuery): void;
    function actionClick(el: JQuery): void;
    function createCheckpoint(entityId: string, beforeCreateCheckpoint?: () => Promise<any>): void;
    function getActionLinksGroup(entityId: string, actionLinks: ActionLink[]): Promise<dpComponents.IDesignerAction[]>;
    function createActionLinksGroup(headerHolder: JQuery, groupName: string, entityId: string, actions: ActionLink[], callBack?: () => void): JQuery;
    function createSeparator(): JQuery;
    function getUndoRedoActions(serviceClient: UndoableService, sessionId: string, callBack: (isUndo: boolean) => Promise<void>, beforeRestoreCallback?: () => Promise<void>): dpComponents.IDesignerAction[];
    function resizeTitlebar(toolbarHolder: JQuery): void;
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
