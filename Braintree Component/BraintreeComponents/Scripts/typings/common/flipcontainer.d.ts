declare namespace $DP.Common {
    class FlipContainerOptions {
        front: JQuery;
        back: JQuery;
        rootStyle?: StyleProps;
    }
    class FlipContainer {
        private options;
        view: JQuery;
        constructor(options: FlipContainerOptions);
        getView(): JQuery;
        private render;
    }
}
