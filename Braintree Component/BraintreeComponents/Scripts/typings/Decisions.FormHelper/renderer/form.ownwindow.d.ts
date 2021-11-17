/**
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="form.d.ts" />
declare namespace $DP.Renderer {
    class FormInOwnWindow {
        static isOwnWindow(surface: JQuery): boolean;
        static onLoad(options: {
            surface: JQuery;
            beforeUnload: () => void;
        }): void;
        /**
         * Form resize in own window
         * called for mobile too
         */
        static resize(surface: JQuery, presetSize?: UI.Size): void;
        static setBgColor(elem: JQuery): void;
        private static getFormSize;
        private static getSizeForMobile;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
