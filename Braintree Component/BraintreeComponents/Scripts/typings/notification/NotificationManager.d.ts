/**
 * Author:ravi.tiwari@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../typings/jquery/jquery.cookie.d.ts" />
import DoNotShowNotificationType = $D.Framework.ServiceLayer.Services.Accounts.DoNotShowNotificationType;
declare namespace $DP.UI.Controls.Notification {
    interface NotificationAddedEvent {
        origin: NotificationManager;
        notification: NotificationItem;
        addSilently?: boolean;
    }
    class NotificationManager {
        private static __instance;
        static get instance(): NotificationManager;
        private notificationBox;
        private notificationSwitch;
        private notificationIcon;
        private notificationList;
        private notificationListPrev;
        private notificationListNext;
        private notificationFooter;
        private notificationCloseAll;
        private notificationListPaging;
        private lastIndex;
        private numberOfPages;
        private currentPage;
        private uiNotificationDictionary;
        private uiNotificationPagesDictionary;
        notificationItems: NotificationItem[];
        private maxNotificationItemHeight;
        private notificationShowTimer;
        private onClose;
        private onShow;
        private onNotificationAdded;
        private notificationSetting;
        constructor();
        private renderNotificationBox;
        initialize(props: {
            stickTo: JQuery;
            parent: JQuery;
            onClose: () => void;
            onShow: () => void;
            onNotificationAdded: (event: NotificationAddedEvent) => void;
            notificationSettings: $D.Framework.ServiceLayer.Services.Accounts.AccountPopupNotificationSetting;
        }): void;
        UpdateNotificationPanel: (eventId: string, outputValue: $D.Framework.ServiceLayer.Services.Notifications.NotificationMessage) => void;
        private getPopupTypeClass;
        addNotification(notificationItem: NotificationItem, addSilently?: boolean): void;
        arrangeNotificationItems(): void;
        showNotificationItems(startIndex: number): void;
        private resumeTimer;
        get isVisible(): boolean;
        toggleNotificationBox(): void;
        showNotificationBox(): void;
        private setPositionForNotificationBox;
        hideNotificationBox(): void;
        private attachClickOutside;
        notificationMouseEvents: () => void;
        private defaultEventHandler;
        private arrangeFooter;
        CurrentSessionField: () => void;
        TodayField: () => void;
        EverField: () => void;
        SetNotificatonSetting(doNotShowNotificationType: DoNotShowNotificationType): void;
        get shouldShowNotification(): boolean;
        private arrangeNotificationList;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
