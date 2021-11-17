declare namespace $DP.Common {
    interface ThumbnailOptions {
        icon: JQuery;
        title: string;
        color: string;
        size?: {
            width: number | string;
            height: number | string;
        };
        headerHeight?: number;
        rootStyle?: $DP.Common.StyleProps;
        headerStyle?: $DP.Common.StyleProps;
    }
    class Thumbnail {
        private options;
        protected view: JQuery;
        constructor(options: ThumbnailOptions);
        getView(): JQuery;
        private render;
    }
}
