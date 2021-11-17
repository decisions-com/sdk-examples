/**
 * Author:akash.singh@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Portal {
    class Header {
        private host;
        private options;
        constructor(host: JQuery, options: dpComponents.IPortalHeaderProps, onRendered?: dpComponents.RenderCallback);
        updateCurrentFolder(folderName: string): void;
        getNotificationMenuItem(): JQuery;
        toggleNotificationActivity(isActive?: boolean): JQuery;
        indicateNotificationRecieved(): void;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
