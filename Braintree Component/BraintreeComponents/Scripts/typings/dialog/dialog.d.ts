/**
 * Author:catface@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../typings/jqueryui/jqueryui.d.ts" />
/// <reference path="../common/utils/string.utils.d.ts" />
/// <reference path="../typings/core/decisions.d.ts" />
/// <reference path="../typings/jquery/jquerymobile.d.ts" />
/// <reference path="../typings/helpers.d.ts" />
declare namespace $DP {
    type DialogStates = 'normal' | 'minimized' | 'maximized';
    interface DialogOptions {
        dialogClass?: string;
        dialogClasses?: string[];
        containerHeaderClass?: string;
        containerContentClass?: string;
        containerFooterClass?: string;
        modal?: boolean;
        title?: string;
        showTitle?: boolean;
        canMaximize?: boolean;
        canMinimize?: boolean;
        resizable?: boolean;
        width?: string | number | ((d: JQuery) => string);
        height?: string | number | ((d: JQuery) => string);
        closeOnEscape?: boolean;
        autoOpen?: boolean;
        close?: (e: Event, i: JQueryUI.DialogUIParams, t: HTMLElement) => void;
        beforeClose?: (e: Event, i: JQueryUI.DialogUIParams) => any;
        create?: JQueryUI.DialogEvent;
        open?: (event: Event, ui: JQueryUI.DialogUIParams, content: HTMLElement) => void;
        resize?: (dialog: JQuery, contentWidth?: number, contentHeight?: number) => void;
        dragStop?: JQueryUI.DialogEvent;
        drag?: JQueryUI.DialogEvent;
        dragStart?: JQueryUI.DialogEvent;
        buttons?: ButtonOptions[];
        handleContentSize?: boolean;
        autoFocus?: boolean;
        resizeOnOpen?: boolean;
        minHeight?: string | number;
        minWidth?: string | number;
        noPropertyWindow?: boolean;
        uppercaseButtonsText?: boolean;
        originalPosition?: DialogPosition;
        currentState?: DialogStates;
        position?: number[] | JQueryUI.JQueryPositionOptions;
        handleTabbing?: boolean;
    }
    interface DialogPosition {
        left?: string | number;
        top?: string | number;
        width?: string | number;
        height?: string | number;
    }
    interface ButtonOptions {
        id: string;
        text: string;
        class?: string;
        keyCode?: number;
        click: (e: JQueryEventObject) => void;
    }
    class Dialog {
        static get materialClassName(): string;
        static get materialClassNameWhite(): string;
        static get subWindow(): string;
        static closeDialog(e: JQueryEventObject): boolean;
        static closeParentDialog($elem: JQuery): boolean;
        /**
         * Returns root content of dialog where we can call jquery ui dialog methods.
         * @param $elem any child element of dialog
         */
        static getParentDialogContent($elem: JQuery | HTMLElement): JQuery;
        static getDialogContent($dialog: JQuery): JQuery;
        static createContentWrapper(): JQuery;
        static getParentDialog($elem: JQuery): JQuery;
        /**
         * Returns dialog title by given element
         * @param $elem An element inside dialog
         */
        static getDialogTitleElement($elem: JQuery): JQuery;
        /**
         * Returns dialog titlebar by given element
         * @param $elem An element inside dialog
         */
        static getDialogTitleBarElement($elem: JQuery): JQuery;
        static getDialogSizeAndPosition(dialogContent: JQuery): DialogPosition;
        static setMaximizeBtnVisibility(dialog: JQuery, canMaximize: boolean): void;
        /**
         * Updates existing dialog
         *
         * @param content element which has been returned by [[Dialog.show]] method
         * @param options set of options which should be updated
         */
        static updateOptions(content: JQuery, options: Partial<DialogOptions>): void;
        static show(content: JQuery, options: DialogOptions): JQuery;
        private static handleButtonKeys;
        private static setAutoFocus;
        static showOkDialog(content: JQuery, title: string, onOk: (e: any) => void, width?: number, height?: number, okText?: string): JQuery;
        static showOkCancelDialog(content: JQuery, title: string, onOk: (e: any) => void, onCancel: (e: any) => void, width: number, height: number, options: DialogOptions): JQuery;
    }
}
interface JQuery {
    dialogIt(options: $DP.DialogOptions): JQuery;
    dialogIt(methodName: 'ok', title: string, onOk: (e: any) => void, okText?: string, width?: number, height?: number): JQuery;
    dialogIt(methodName: 'okCancel', title: string, onOk: (e: any) => void, onCancel: (e: any) => void, width?: number, height?: number, options?: $DP.DialogOptions): JQuery;
    dialogIt(methodName: 'close'): JQuery;
    dialogIt(methodName: string, title: string, onOk: (e: any) => void, onCancel: (e: any) => void, width?: number, height?: number): JQuery;
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
