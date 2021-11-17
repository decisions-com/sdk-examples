/**
 * Author:catface@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../typings/core/generated/CommonActionService.d.ts" />
declare namespace $DP.Actions {
    class DisplayHtmlTextAction {
        private actionName;
        private actionUniqueName;
        private entityId;
        constructor(actionName: string, actionUniqueName: string, entityId: string);
        show(): void;
        private copyToClipboard;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
