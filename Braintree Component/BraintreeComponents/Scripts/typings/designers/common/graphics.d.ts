/**
 * Author:dorin@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Common {
    class Point {
        x: number;
        y: number;
        static E(): number;
        constructor(x: number, y: number);
        static fromSVGPoint(point: SVGPoint): Point;
        equals(point: Point): boolean;
        get isValid(): boolean;
        get isVisible(): boolean;
        get isZero(): boolean;
        moveTo(offsetX: number, offsetY: number): Point;
        distanceToPoint(point: Point): number;
        distanceToSegment(a: Point, b: Point): number;
        isInside(x: number, y: number, width: number, height: number): boolean;
        isInsideRect(rectangle: Rectangle): boolean;
    }
    class Rectangle {
        x: number;
        y: number;
        width?: number;
        height?: number;
        private _right;
        private _bottom;
        constructor(x: number, y: number, width?: number, height?: number);
        static get empty(): Rectangle;
        get right(): number;
        set right(value: number);
        get bottom(): number;
        set bottom(value: number);
        setTopLeft(left: number, top: number): void;
        static getRectange(value: ClientRect): Rectangle;
        static getBoundingBox(element: JQuery): Rectangle;
        static mergeBoundingBox(element: JQuery, boundingBox: Rectangle): void;
    }
    class SVGUtils {
        static getTranslateTransform(transformList: SVGTransformList): SVGTransform;
        static getTranslateMatrix(transformList: SVGTransformList): SVGMatrix;
        static setTranslateTransform(element: SVGElement, x: number, y: number, snapPixels?: boolean): void;
        static subpixelSnap(value: number): number;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
