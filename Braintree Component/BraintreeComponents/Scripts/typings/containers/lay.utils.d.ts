declare namespace $DP.Containers.Utils {
    import LayoutElement = $DP.Layout.LayoutElement;
    import LayoutElementType = $DP.Layout.LayoutElementType;
    function findTopContainerInstance(host: JQuery): $DP.Containers.BaseContainer;
    /**
     * this is only for Forms as respects the Form Background
     * @param surface  - form surface
     */
    function findTopContainerOnForm(surface: JQuery): JQuery;
    function skipScrollBarSize(scrollContainer: JQuery, size: $DP.UI.Size): $DP.UI.Size;
    function getSizeFromURLParams(): $DP.UI.Size;
    function initializeClientContainers(surface: JQuery, includeSelf?: boolean): void;
    function layoutContainers(host: JQuery, size: $DP.UI.Size, includeSelf?: boolean): void;
    function getRenderedChildren(root: JQuery, componentId: string): JQuery;
    function getContainers(holder: JQuery): BaseContainer[];
    /**
     * finds the parent container and calls relayout if possible
     */
    function relayoutAbove(el: JQuery): void;
    function isResponsiveContainer(el: JQuery): boolean;
    function isPagePart(el: JQuery): boolean;
    function createHorizontalLayout(el: JQuery, type: LayoutElementType, gap?: number): LayoutElement;
    function createVerticalLayout(el: JQuery, type: LayoutElementType, useHeightAsMinHeight?: boolean, gap?: number): LayoutElement;
    function getRequestedHeight(el: JQuery): number;
    function getRequestedWidth(el: JQuery): number;
    function setRequestedSize(el: JQuery, { width, height }: {
        width?: number;
        height?: number;
    }): void;
    function getTopContainerSize(topContainer: JQuery, defaultWidth: number, defaultHeight: number): $DP.UI.Size;
}
