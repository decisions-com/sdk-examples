/// <reference path="../typings/jquery/jquerymobile.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/popper.d.ts" />
/// <reference path="utils/dom.utils.d.ts" />
/// <reference path="utils/string.utils.d.ts" />
declare namespace $DP.Common {
    interface LayerOptions {
        /**
         * Used to prevent opening several layers by clickick on same stickTo
         */
        id?: string;
        stickTo: JQuery;
        /**
         * layer's className
         */
        style?: string;
        minHeight?: number;
        maxHeight?: number;
        /**
         * Layer's width
         * @default width of stickTo
         */
        width?: number | 'content' | 'auto';
        maxWidth?: number;
        minWidth?: number;
        /**
         * Indecates whether to use content's width or @member width
         * @default false
         */
        height?: number | 'content';
        zIndex?: number;
        onCreated?: (e: {
            origin: PopupLayer;
            data: Data;
        }) => void;
        /**
         * Indicates wheter to close layer when click outside layer
         */
        autoClose?: boolean;
        /**
         * Called after closing layer
         */
        onClose?: (event: {
            origin: PopupLayer;
            jqueryEvent: JQueryEventObject;
        }) => void;
        tabIndex?: number;
        /**
         * Layer's placement relative on @see stickTo
         */
        placement?: Popper.Placement;
        /**
         * Layer cannot overflow given element
         */
        boundariesElement?: JQuery | 'viewport' | 'window' | 'scrollParent';
        showArrow?: boolean;
        /**
         * Indicates whethe to use default style: background, shadow, borders
         */
        useDefaultStyle?: boolean;
        /**
         * Indicates whether to open layer when creating instance
         */
        autoOpen?: boolean;
        /**
         * Changes calculated position of layer.
         * For more information see https://popper.js.org/popper-documentation.html.
         *
         * Notice: To move layer into stickTo element you should select opposite placement and set negative offset.
         * @example <caption> Put layer on the right of element and move it inside stickTo element on 30px </caption>
         * $DP.Common.popupLayer(content, {
         *      layerPlacement: "left-end",
         *      offset: '20px, -40px',
         *      stickTo,
         * })
         */
        offset?: number | string;
        /**
         * The behavior used to change the layer’s placement when layer starts to overlap stickTo element.
         */
        behavior?: Behavior | Popper.Position[];
        /**
         * If available space less than layer width or height then they will be cut to available space
         */
        fitSize?: boolean;
        /**
         * Set this to true if you want popper to position it self in 'fixed' mode
         */
        positionFixed?: boolean;
    }
    /**
     * show content in a popup layer that's by default closed on outside click
     */
    function popupLayer(content: JQuery, options: LayerOptions): JQuery;
    function popupLayerForIFrame(content: JQuery, options: LayerOptions): JQuery;
    class PopupLayer {
        private content;
        private options;
        private popper;
        private $layer;
        static get DATA_KEY(): string;
        constructor(content: JQuery, options: LayerOptions);
        get id(): string;
        getView(): JQuery;
        show(): JQuery;
        isVisible(): boolean;
        /**
         * Updates size and position
         */
        update(newContent?: JQuery): void;
        remove(hardRemove?: boolean): void;
        private isExists;
        private attachEvents;
        private createRoot;
        private createLayer;
        updateSize(): void;
        private getResultHeight;
        private getResultWidth;
        private getOffset;
        private getZIndex;
    }
    /**
     * return how much space above stickTo element
     */
    function fitVerticallyHeight(stickTo: JQuery, contentHeight: number, boundariesElement?: JQuery): number;
    /**
     * return how much space below stickTo element
     */
    function fitToBottomHeight(stickTo: JQuery, contentHeight: number, boundariesElement: JQuery): number;
    function fitToTopHeight(stickTo: JQuery, contentHeight: number, boundariesElement: JQuery): number;
}
