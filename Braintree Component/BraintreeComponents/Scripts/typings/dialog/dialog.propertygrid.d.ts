/**
 * Author:vlad@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="dialog.d.ts" />
declare namespace $DP.Dialogs {
    interface DialogPropGridOptions {
        title?: string;
        width?: string | number | ((d: JQuery) => string);
        height?: string | number | ((d: JQuery) => string);
        minHeight?: string | number;
        minWidth?: string | number;
        close?: (e: any, i: any, t: any) => void;
        buttons?: ButtonOptions[];
        originalPosition?: DialogPosition;
        currentState?: DialogStates;
        position?: number[];
        /**
         * @default true
         */
        canMaximize?: boolean;
    }
    interface SubDialogPropGridOptions {
        instanceId?: string;
        classes?: string;
        contextProvider?: Promise<string>;
        paramaters?: any;
        title?: string;
        width?: string | number | ((d: JQuery) => string);
        height?: string | number | ((d: JQuery) => string);
        minWidth?: string | number;
        minHeight?: string | number;
        /**
         * @default true
         */
        canMaximize?: boolean;
        close?: () => void;
    }
    class PropertyGrid {
        static showSubWindow(options: SubDialogPropGridOptions): Promise<void>;
        static show(content: JQuery, options: DialogPropGridOptions): JQuery;
        static isPropertyGridDialog(content: JQuery): boolean;
    }
}
