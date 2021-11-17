/**
 * Author:catface@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="dbg.tabs.d.ts" />
/// <reference path="../../typings/jquery/jquery.d.ts" />
/// <reference path="../../typings/core/decisions.d.ts" />
/// <reference path="../../navigation.Helper.d.ts" />
/// <reference path="../../decisions.formhelper/decisions.formhelper.d.ts" />
/// <reference path="../../containers/lay.selectors.d.ts" />
/// <reference path="../../layouts/decisions.ui.d.ts" />
declare namespace $DP.Designers.Debugger {
    class DebuggerPageTab implements IDebuggerTab {
        host: JQuery;
        pageId: string;
        basePageContextId: string;
        debuggingId: string;
        private initialized;
        constructor(host: JQuery, pageId: string, basePageContextId: string, debuggingId: string);
        tabActivated(): void;
        tabDeactivated(): void;
        dataUpdated(): void;
        resize(width: number, height: number): void;
        dispose(): void;
        static ResizePreviewPageActionHandler(info: $DP.Form.DialogResizeObjectInfo): void;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
