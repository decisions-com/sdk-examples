/**
 * Author: alex@decisions.com
 * Notes: Unauthorized, unlicensed use, distribution, modification is not allowed.
 */
/// <reference path="dialog.d.ts" />
declare namespace $DP.Dialogs {
    interface EitherOrDialogOptions<T> {
        render: (container: HTMLElement, props: T, callback?: () => void) => void;
        props: T;
        dialogOptions: DialogOptions;
    }
    /**
     * Either or dialog wrapper. It is supposed to be replaced with React Dialog.
     */
    class EitherOrDialog {
        static show<T extends dpComponents.IEitherOrBasedDialogProps>(options: EitherOrDialogOptions<T>): JQuery;
    }
}
