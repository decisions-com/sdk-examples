/// <reference path="../designers/common/graphics.d.ts" />
declare namespace $DP.Common {
    /**
     * calculates the visible part of an element and creates a dummy element
     */
    class DummyStickToForIFrame {
        private stickTo;
        private stickToRect;
        private dummyStickTo;
        private iFrameDocument;
        constructor(stickTo: JQuery, stickToRect?: Rectangle);
        static getDummyStickToRectangle(stickTo: JQuery): Rectangle;
        private create;
        show(): void;
        getDummyStickTo(): JQuery;
        getDocument(): JQuery;
        getStickToRectangle(): Rectangle;
        remove(): void;
    }
}
