/**
 * Author:vivek.nalawade@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../common/preview.d.ts" />
/// <reference path="../designers/creation/create.handlers.d.ts" />
/// <reference path="../designers/creation/create.registration.d.ts" />
/// <reference path="../entitypicker/epick.actions.d.ts" />
/// <reference path="../dbquery/dbq.action.d.ts" />
/// <reference path="../assignment/assignment.action.d.ts" />
/// <reference path="../typings/core/generated/FlowExecutionService.d.ts" />
/// <reference path="../dialog/dialog.errorpopup.d.ts" />
/// <reference path="actionHandlers/CreateFormWithBackgroundActionHandler.d.ts" />
/// <reference path="../definedTypeEditor/definedTypeEditor.d.ts" />
/// <reference path="actionHandlers/openfileactionhandler.d.ts" />
/// <reference path="../TextMergePreview/TextPreviewHost.d.ts" />
/// <reference path="actionHandlers/createFolderActionHandler.d.ts" />
/// <reference path="actionHandlers/createFromDesignPatternActionHandler.d.ts" />
import DebuggerOptions = $DP.Designers.Debugger.DebuggerOptions;
import CreateNewRegistrationAction = $D.Framework.ServiceLayer.Services.ConfigurationStorage.CreateNewRegistrationAction;
interface ChangePageOptionsExtended extends ChangePageOptions {
    contentType: string;
}
declare var action_handlers: any[];
declare function openFlowInNewWindow(flowId: string): void;
declare function showDebuggerAction(entityType: $DP.Designers.Debugger.ElementType, entityId: string, action: {
    SampleId: string;
    ElementId: string;
}): void;
declare function runMobileAction(actionName: any, controllerName: any, title: any, pairs: any): void;
declare let currentdate: Date;
declare let getTime: () => string;
declare let isShowingFolderonDilaog: boolean;
declare let showWindowedFolder: (entityId: any, folderId: any, pageName: any, title: any, navigationalParms?: any) => void;
declare let openAction: (element: HTMLElement | JQuery | string, actionName: string, entityId: string, actionUniqueId: string, openActionMode?: any, entityname?: string, formobile?: boolean, controller?: string, className?: string, isGroupAction?: boolean, forceactionNameAsDialogTitle?: boolean) => JQueryDeferred<BaseActionType>;
declare function switchPortal(url: string, isStudio: boolean): void;
declare function AccountsLogout(returnUrl?: string, uid?: string): void;
declare function SystemInformation(): void;
declare function ExecuteEntityPickerFunction(element: any): void;
declare function OpenRequiredFieldDialogForEntityPicker(requiredMsg: any): void;
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
