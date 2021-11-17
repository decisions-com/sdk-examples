/**
 * Author:catface@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../typings/core/generated/PortalSettingsService.d.ts" />
declare namespace $DP {
    import DesignerSettings = $D.Framework.Design.DesignerSettings;
    import DecisionsSettingInfo = $D.Framework.ServiceLayer.Services.Portal.DecisionsSettingInfo;
    const DESIGNER_SETTINGS_SAVED_KEY = "DesignerSettings.Saved";
    class SettingsCache {
        private static designerSettings;
        private static decisionsSettingInfo;
        static initialize(): void;
        static subscribeOnChange(): void;
        static getDesignerSettings(): DesignerSettings;
        static getDecisionsSettingInfo(): DecisionsSettingInfo;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
