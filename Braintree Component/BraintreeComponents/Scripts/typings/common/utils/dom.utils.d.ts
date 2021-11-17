declare namespace $DP.Common.DomUtils {
    /**
     * returns the portal content area size respecting subpixel rendering
     * window.innerHeight - the innerHeight property returns the height of a window's content area
     * $(document.documentElement).height() - returns the Height of the <html> element
     */
    function getContentAreaSize(): {
        width: number;
        height: number;
    };
    function getTextWidth(text: string, font: string): number;
    function copyToClipboard(text: string, contextElement?: JQuery): void;
    function showTitleIfEllipsed(element: JQuery): void;
    /**
     * Used for html element which still not in DOM, but when needing to get properties of html element when it will be added in dom.
     * For example:
     *  - height and width of text
     *  - real size of dynamic content
     * @param fn inside this function need to do calculations
     */
    function measure<T>($elem: JQuery, fn: (el: JQuery) => T): T;
    function inlineSvgImage(img: JQuery): void;
    function setVisibilityFast(el: JQuery, isVisible: boolean): void;
    function getLayerZIndex($elem: JQuery, defaultValue?: number): number;
    /**
     * Will restore scroll position of element after performing action.
     * We can use it when we need to rerender component and save same scroll position.
     */
    function keepScrollPositiion(element: JQuery | (() => JQuery), action: () => void): void;
    function createEvent(eventName: string): Event;
    function createCustomEvent(eventName: string, data?: any): CustomEvent;
    type ScrollCallBack = (event: {
        delta: any;
    }) => void;
    /**
     * We can specify handlers when we scroll down and up. We could do that by using "wheel" event and "deltaY" parameter,
     * but it doesn't support scrolling by touch pad in IE.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event
     */
    function attachVerticalScrollEvent(element: HTMLElement, scrollDown: ScrollCallBack, scrollUp: ScrollCallBack): void;
    function attachHorizontalScrollEvent(element: HTMLElement, scrollLeft: ScrollCallBack, scrollRight: ScrollCallBack): void;
    function findProvidedData(element: JQuery, dataName: string, options?: {
        checkParentDialog: boolean;
    }): any;
    function getKeyValue(keyCode: any): any;
    function getDataFromNode(element: HTMLElement, key: string): string;
    function getIconButton(iconClass?: string, buttonClass?: string): string;
    function disableButton(button: JQuery): void;
    function enableButton(button: JQuery): void;
}
interface JQueryStatic {
    triggerKeyDown(keyCode: number): JQuery;
    triggerKeyUp(keyCode: number): JQuery;
}
interface JQuery {
    unMountComponentOnRemove(): any;
}
