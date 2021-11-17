/**
 * Author:Jinesh@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/jquery/jquerymobile.d.ts" />
declare namespace $Portal {
    interface SpinnerOptions {
        color?: string;
        /**
         * Text is displayd together with spinner
         */
        text?: string;
        /**
         * Determines whether to hide three dots (...) after text
         * @default false
         */
        hideDots?: boolean;
        /**
         * @deprecated
         */
        position?: string;
        /**
         * Spinner size in pixels
         * @default 60
         */
        size?: number;
        /**
         * Can shrink spinner size if element size is smaller than spinner size
         * @default false
         */
        canShrinkSpinner?: boolean;
    }
    interface OverlayOptions {
        spinnerOptions?: SpinnerOptions;
        top?: number | string;
        className?: string;
        /**
         * Delay in milliseconds.
         */
        delay?: number;
    }
    class Progress {
        static get defaultSize(): number;
        static get defaultDelay(): number;
        static get spinnerClassName(): string;
        /**
         * @deprecated We need to make this method private and don't use outside this class
         */
        static showSpinner(options: SpinnerOptions, target: JQuery | HTMLElement): JQuery;
        /**
         * Shows spinner on dialog element
         * @param dialogElement dialog or element located on dialog
         */
        static showSpinnerOnDialog(dialogElement: JQuery | HTMLElement, options?: OverlayOptions): void;
        /**
         * Shows spinner on any element
         * @returns overlay layer
         */
        static showSpinnerOnElement(element: JQuery | HTMLElement, options?: OverlayOptions): JQuery;
        /**
         * Hide spinner on dialog element
         * @param dialogElement dialog contained spinner or element located on dialog
         */
        static hideSpinnerOnDialog(dialogElement: JQuery | HTMLElement): void;
        /**
         * Hide spinner on any element
         * @param $element element contained spinner
         */
        static hideSpinnerOnElement($element: JQuery | HTMLElement): void;
        /**
         * Shows fullscreen loading indicator.
         */
        static showLoadingIndicator(props?: dpComponents.IPortalLoadingProps): JQuery;
        static showLoadingIndicatorWithCancelBtn(options?: {
            onClosed?: (e: JQueryEventObject) => void;
            additionalText?: string;
        }): JQuery;
        static applyZIndexOnLoadingIndicator(loadingOverlay: JQuery, $target: JQuery): void;
        static wrapWithLoadingIndicator<T>(request: Promise<T>): Promise<T>;
        /**
         * Hides fullscreen loading indicator
         */
        static hideLoadingIndicator(): void;
        private static hideAllSpinners;
        private static showAllSpinners;
        static showSpinnerAsDialog(): JQuery;
        private static get hasLoadingIndicator();
        /**
         * Returns dialog which contains given element
         * @param element element located in a dialog
         */
        static getDialog(element: JQuery | HTMLElement): JQuery;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
