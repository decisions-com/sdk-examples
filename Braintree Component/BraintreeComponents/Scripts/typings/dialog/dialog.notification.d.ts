/**
 * Author:akash.singh@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="dialog.d.ts" />
declare namespace $DP.Dialogs.Notification {
    interface MessageDialogOptions {
        dialogOptions?: $DP.DialogOptions;
        message: string;
        otherOptions?: any;
        dialogClass?: string;
        messageClass?: string;
    }
    enum DialogType {
        Warning = 0,
        Info = 1
    }
    function showWarningInfoDialog(message: string, dialogType?: $DP.Dialogs.Notification.DialogType, dialogOptions?: $DP.DialogOptions): void;
    class ShowMessage {
        static showMessage(options: MessageDialogOptions): JQuery;
        static defaultOptions: {
            modal: boolean;
            canMaximize: boolean;
            draggable: boolean;
            resizable: boolean;
            closeable: boolean;
            width: number;
            height: number;
            buttons: {
                id: string;
                text: string;
                class: string;
                click(): void;
            }[];
            closeOnEscape: boolean;
            autoOpen: boolean;
            minWidth: number;
            minHeight: number;
            position: {
                at: string;
            };
            dialogClass: string;
        };
        static applyStylesToExistinDialog(dialog: JQuery, messageContainer: JQuery, closeDialogOnOverlayClick?: boolean): JQuery;
        static removeStyleFromExistinDialog(dialog: JQuery): JQuery;
    }
}
interface JQuery {
    notificationDialog(options: $DP.Dialogs.Notification.MessageDialogOptions): JQuery;
    notificationDialog(methodName: string): any;
    notificationDialog(dialog: JQuery, messageContainer?: JQuery, closeDialogOnOverlayClick?: boolean): JQuery;
    notificationDialog(method: string, dialog: JQuery): JQuery;
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
