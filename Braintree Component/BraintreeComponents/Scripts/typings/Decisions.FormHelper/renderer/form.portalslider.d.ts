/**
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Renderer {
    class FormInPortalSlider {
        static isPortalSlider(surface: JQuery): boolean;
        static getPortalSliderId(elem: JQuery): string;
        static onLoad(surface: JQuery, title: string, onClose: () => void): void;
        private static resize;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
