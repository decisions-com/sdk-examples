declare namespace $DP.Utils {
    interface OverlayPosition {
        Left: number;
        Top: number;
        UseOppositeArrow: boolean;
        IsLayoutAdjust: boolean;
        ArrowRelativePosition?: {
            Top: number;
            Left: number;
        };
    }
    /**
     * Overlay utils
     * (moved here from the deleted Decisions.Container.Helper.js)
     */
    class OverlayElement {
        static TopArrowHtml: string;
        static BottomArrowHtml: string;
        static PositionType: {
            TopLeft: number;
            TopCenter: number;
            TopRight: number;
            LeftCenter: number;
            RightCenter: number;
            BottomLeft: number;
            BottomCenter: number;
            BottomRight: number;
        };
        static AdjustPositionType: {
            ExtremeOpp: number;
            SlightMove: number;
        };
        static GetPointsToShowOverlay(showOnElement: any, overlayHtml: any, expectedPositionType: any, arrowHtml: any, adjustPositionType: any, oppositeArrowHtml: any): OverlayPosition;
        static CalculatePosition(showOnElement: any, overlaySize: any, expectedPositionType: any, arrowSize: any, adjustPositionType: any, oppositeArrowSize: any): OverlayPosition;
        static GetElementSize(elem: any): {
            Height: number;
            Width: number;
        };
        static GetPositionsForTopLeft(showOnElementData: any, overlayHtmlSize: any, arrowSize: any, portalSize: any, adjustPositionType: any, oppositeArrowSize: any): OverlayPosition;
        static GetPositionsForBottomRight(showOnElementData: any, overlayHtmlSize: any, arrowSize: any, portalSize: any, adjustPositionType: any, oppositeArrowSize: any): OverlayPosition;
        static GetPositionsForBottomLeft(showOnElementData: any, overlayHtmlSize: any, arrowSize: any, portalSize: any, adjustPositionType: any, oppositeArrowSize: any): OverlayPosition;
        static GetPositionsForBottomCenter(showOnElementData: any, overlayHtmlSize: any, arrowSize: any, portalSize: any, adjustPositionType: any, oppositeArrowSize: any): {
            Left: number;
            Top: number;
            UseOppositeArrow: boolean;
            IsLayoutAdjust: boolean;
            ArrowRelativePosition: {
                Top: number;
                Left: number;
            };
        };
        static GetPositionsForLeftCenter(showOnElementData: any, overlayHtmlSize: any, arrowSize: any, portalSize: any, adjustPositionType: any, oppositeArrowSize: any): {
            Left: number;
            Top: number;
            UseOppositeArrow: boolean;
            IsLayoutAdjust: boolean;
            ArrowRelativePosition: {
                Top: number;
                Left: number;
            };
        };
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
