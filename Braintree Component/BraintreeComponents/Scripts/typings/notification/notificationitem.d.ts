declare namespace $DP.UI.Controls.Notification {
    interface NotificationItemOptions {
        readonly title: string;
        readonly description: string;
        readonly onClick: (event: {
            origin: NotificationItem;
        }) => void;
        readonly autoHideTimeout?: number;
        readonly onRemoved?: (event: {
            origin: NotificationItem;
        }) => void;
    }
    class NotificationItem {
        private options;
        private __id;
        $item: JQuery;
        private __timerToken;
        constructor(options: NotificationItemOptions);
        get id(): string;
        private startTimer;
        private clearTimer;
        private getElement;
        remove(silent?: boolean): void;
        attachEvents(): void;
    }
}
