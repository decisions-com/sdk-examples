/**
 * Author:vlad@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="dialog.d.ts" />
/// <reference path="../Decisions.FormHelper/renderer/form.d.ts" />
/// <reference path="../Decisions.FormHelper/renderer/form.ownwindow.d.ts" />
declare module $DP.Dialogs {
    interface DialogFormOption {
        autoOpen?: boolean;
        modal?: boolean;
        title?: string;
        width?: string | number | ((d: JQuery) => string);
        height?: string | number | ((d: JQuery) => string);
        minHeight?: string | number;
        minWidth?: string | number;
        close?: (e: any, i: any, t: any) => void;
        afterOpen?: (e: any) => void;
        canMaximize?: boolean;
        canMinimize?: boolean;
        resizable?: boolean;
        originalPosition?: DialogPosition;
        currentState?: DialogStates;
        position?: number[];
        closeOnEscape?: boolean;
    }
    /**
     * dialog for both Form and Page
     * it is not opened by default
     * opened when Form/Page loaded
     * if top container exists, need to call layout
     * top container might be missing for special Form content like SuggestNextForm
     */
    class Form {
        static show(content: JQuery, options?: DialogFormOption): JQuery;
        static isFormDialog(content: JQuery): boolean;
        static closeDialog(element: JQuery): void;
        static onLoad(surface: JQuery, title: string, onClose: () => void): void;
        static onFormDialogContentChanged(dialogElem: JQuery): void;
    }
}
