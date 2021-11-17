declare namespace $DP.Common {
    enum Position {
        LeftTop = 0,
        RightTop = 1,
        RightBottom = 2,
        LeftBottom = 3
    }
    interface Badge {
        element: JQuery;
        position?: Position;
    }
    interface ListBoxItemDisplayOptions {
        root?: StyleProps;
    }
    interface ListItemOptions {
        /**
        * @description badge displays on avatar
        */
        badge?: Badge;
        primaryText?: string;
        secondaryText?: string;
        leftAvatar?: JQuery;
        righIconButton?: JQuery;
        entity?: any;
        displayOptions?: ListBoxItemDisplayOptions;
    }
    class ListBoxItemCss {
        static get primaryTextClassName(): string;
        static get secondaryTextClassName(): string;
        static get deletedPrimaryTextSelector(): string;
    }
    class ListBoxItem {
        protected options: ListItemOptions;
        protected view: JQuery;
        protected primaryText: JQuery;
        protected secondaryText: JQuery;
        protected leftAvatar: JQuery;
        protected rightIconButton: JQuery;
        constructor(options: ListItemOptions);
        getView(): JQuery;
        getEntity(): any;
        protected render(): JQuery;
        private setBadgePosition;
        private getRootElementAttrs;
    }
}
