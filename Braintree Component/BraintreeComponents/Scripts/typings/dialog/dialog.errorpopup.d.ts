/**
 * Author:huzefa.ezzi@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../typings/core/generated/ClientEventsService.d.ts" />
declare namespace $DP.Dialogs {
    import ActionHeader = $D.Framework.ServiceLayer.Actions.ActionHeader;
    import DialogButtonOptions = JQueryUI.DialogButtonOptions;
    class ErrorPopup {
        message: string;
        description: string;
        title: string;
        entityId: string;
        entityTypeName: string;
        errorDialogContainer: JQuery;
        dialogClass?: string;
        static ERROR_MESSAGE: string;
        static showExceptionMessage(error: any, defaultTitle: string, defaultMessage: string): void;
        static showError(message: string, description: string, title: string, entityId?: string, entityTypeName?: string): ErrorPopup;
        static showBuisnessRuleException(description: any): ErrorPopup;
        constructor(message: string, description: string, title?: string, entityId?: string, entityTypeName?: string, errorDialogContainer?: JQuery, dialogClass?: string);
        private __isOtherDialogOpen;
        private $dialog;
        show(): void;
        close(): void;
        getActionButtons(entityId: string, entityTypeName: string, actions: ActionHeader[]): DialogButtonOptions[];
        private autoHideTimerToken;
        private showErrorDialog;
        showBuisnessRuleOrSecruirtyException(message: any): void;
        private getErrorDialog;
        addToNotificationBox(eventOrElement?: JQueryEventObject | JQuery): void;
        private checkForInvalidSession;
        get isEndpointNotFoundException(): boolean;
        get isInitializationInProgressException(): boolean;
        private get detailsLink();
        private get copyTextLink();
        private hideErrorDitails;
        private showErrorDetails;
        private getDialogHeight;
        private getBuisnnessRuleOrSecurityException;
        static getExceptionMessage(raw: string | {
            responseText: string;
        }): {
            message: string;
            isBusinessRule: boolean;
            isSecurity: boolean;
        };
        private static getExceptionFromNode;
        private static parseErrorMessage;
        static ShowErrorDialog(error: string): void;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
