/**
 * Author:amey.mhatre@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Common {
    class AnchorPoint {
        point: Point;
        rx: number;
        ry: number;
        constructor(point: Point, radiusX?: number, radiusY?: number);
        buildElement(): SVGElement;
    }
    class SVGAnchorPoint {
        private anchorPoint;
        private dataPath;
        private isHightlighter;
        constructor(anchorPoint: AnchorPoint, dataPath: string, isHightlighter?: boolean);
        static get ATTRIBUTE(): string;
        static get ATTRIBUTE_SELECTOR(): string;
        buildElement(): Element;
    }
    class Arrow {
        from: string;
        to: string;
        private _points;
        constructor(from: string, to: string, startPoint: Point, endPoint: Point);
        buildElement(showArrow?: boolean, hasErrors?: boolean, isCustomDataLink?: boolean): SVGElement;
    }
    class AdornerSurface {
        private layoutRoot;
        private surface;
        private isAbsoluteSurface;
        private _surfaceWidth;
        private _surfaceHeight;
        private _maxTop;
        constructor(layoutRoot: JQuery, surface: JQuery, isAbsoluteSurface: boolean);
        showAnchorPoint(key: string, elementList: JQuery, leftPort: any): void;
        showLink(from: string, to: string, fromElements: JQuery, toElements: JQuery, hasErrors?: boolean, isCustomDataLink?: boolean): boolean;
        showArrow(element: JQuery, x: number, y: number, fromLeftPort: any): boolean;
        moveMappingArrow(x: number, y: number, snap?: boolean): void;
        removeArrow(): void;
        clearSurface(): void;
        mouseMove(point: Point): void;
        getHighligthedLinkInfo(point: Point): {
            from: string;
            to: string;
        };
        getMiddlePointOnLink(info: {
            from: string;
            to: string;
        }): Point;
        private pointIsAtDistance;
        getElementAnchorPoint(key: string, elementList: JQuery, leftPort: boolean): Point;
        getElementAnchor(key: string, elementList: JQuery): JQuery;
        private getElementPortPosition;
    }
}
