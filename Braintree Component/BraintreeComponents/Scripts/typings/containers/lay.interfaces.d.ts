/// <reference path="../typings/core/generated/datatypes._base.d.ts" />
declare namespace $DP.Containers {
    import DesignerColor = $D.Silverlight.UI.Utilities.DesignerColor;
    interface ContainerOptions extends $DP.Containers.ClientComponentOptions {
        clientChildrenInfo?: ChildInfo[];
        cssClass?: string;
        borderWidth?: number;
        designerCornerRadius?: number;
        borderDesignerColor?: DesignerColor;
        backgroundDesignerColor?: DesignerColor;
        backgroundType?: SilverContainerBackgroundType;
        transparentBackground?: boolean;
        backgroundImageSrc?: string;
        backgroundStretch?: boolean;
        backgroundAlignmentX?: SilverContainerBackgroundAlignmentX;
        backgroundAlignmentY?: SilverContainerBackgroundAlignmentY;
        children?: any;
    }
    interface LayoutContainer {
        doLayout(size?: $DP.UI.Size): any;
    }
    interface SizeInfo {
        height: number;
        width: number;
    }
    enum RootContainerType {
        Canvas = 0,
        Grid = 1,
        VerticalStack = 2,
        HorizontalStack = 3,
        Tabs = 4,
        Responsive = 5,
        GridLayout = 6
    }
    interface SnapTo {
        /**
         * checks if snap to allowed or not
         * @param {$DP.Common.Point} point - mouse coordinates
         * @returns {boolean}
         */
        canSnapto(point: $DP.Common.Point): boolean;
        /**
         * gives a rectangle to highlight
         * @param {$DP.Common.Point} point - mouse coordinates
         * @param {$DP.Designers.Forms.ComponentDragContext} dragContext - designer drag context
         * @param {JQuery} draggingElem - the dragging element
         * @returns {$DP.Common.Rectangle}
         */
        getSnaptoRectangle(point: $DP.Common.Point, dragContext?: $DP.Designers.Forms.ComponentDragContext, draggingElem?: JQuery, draggingElementSize?: SizeInfo): Common.Rectangle;
    }
    function isSnapTo(object: any): object is SnapTo;
    interface LayoutAware {
        onMoved(): any;
    }
    function isLayoutAware(object: any): object is LayoutAware;
}
