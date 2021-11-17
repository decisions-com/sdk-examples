/**
 * Author:dorin@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Designers.Forms {
    import Rectangle = $DP.Common.Rectangle;
    import ResizeDirection = $D.Framework.Design.Form.ResizeDirection;
    import ExpandType = $D.Framework.Design.Form.ExpandType;
    class AdornerInfo {
        name: string;
        left: number;
        top: number;
        width: number;
        height: number;
    }
    class AdornerThumbEvent {
        point: $DP.Common.Point;
        adornerInfo: AdornerInfo;
        resizeDirection: ResizeDirection;
        expandType: ExpandType;
        surface: JQuery;
    }
    class ComponentMouseEvent {
        point: $DP.Common.Point;
        component: JQuery;
    }
    class FormDesignerAdorners {
        private adornersSurface;
        private formSurface;
        private formElementsProvider;
        private adornersLayer;
        private validatorsLayer;
        private surfaceLayer;
        private editLayer;
        private selectionLayer;
        constructor(adornersSurface: JQuery, formSurface: JQuery, formElementsProvider: FormElementsProvider);
        dispose(): void;
        initialize(): void;
        private addAdorner;
        removeAdorner(adornerName: string): void;
        private getTopContainer;
        showSurfaceAdorner(): void;
        showBoundingBoxAdorner(boundingBox: ClientRect, id: string): void;
        buildSurfaceResizeAdorner(): Adorner;
        showElementAdorner(elementInfo: $D.Framework.Design.Form.FormElementInfo, useInteractionInfo?: boolean): void;
        showElementsAdorner(elementInfos: $D.Framework.Design.Form.FormElementInfo[], useInteractionInfo?: boolean): void;
        get boundingBoxAdornerName(): string;
        private updateBoundingBoxAdorner;
        showElementValidation(element: JQuery, id: string, isValidationError: boolean): void;
        showElementHighlight(element: JQuery, coordinates?: JQueryCoordinates, width?: number, height?: number): void;
        highlightRectangle(rect: Rectangle): void;
        showLassoLayer(left: number, top: number): void;
        updateLassoLayer(left: number, top: number): Rectangle;
        removeLassoLayer(): void;
        static getThumbResizeDirection(thumb: JQuery): ResizeDirection;
        static getAdornerInfoByName(adornerSurface: JQuery, name: string): AdornerInfo;
        static getAdornerRect(adornerSurface: JQuery, name: string): Rectangle;
        static getCursorForResizeDirection(resizeDirection: ResizeDirection): string;
        static resizeAdorner(adornerSurface: JQuery, adornerInfo: {
            name: string;
            left: number;
            top: number;
            width: number;
            height: number;
        }, deltaX: number, deltaY: number, resizeDirection: ResizeDirection): void;
        private static redrawAdroner;
        private addScrollHandler;
        private storeHandler;
        private getHandlerById;
        private getHandlersStorage;
        private clearHandlersStorage;
        private storeAdorner;
        private clearStoredAdorner;
        private getAdornerById;
        private getAdorners;
        private static getStoredAdorner;
        private static getAdornersStorage;
        private clearAdornersStorage;
    }
    class ComponentInfo {
        left: number;
        top: number;
        width: number;
        height: number;
        constructor(left: number, top: number, width: number, height: number);
        static stringify(value: ComponentInfo): string;
        static parse(value: string): ComponentInfo;
    }
    abstract class Adorner {
        componentId: string;
        left: number;
        top: number;
        width: number;
        height: number;
        componentInfo: ComponentInfo;
        protected solidCssClass: string;
        protected dashedCssClass: string;
        constructor(componentId: string, componentInfo: ComponentInfo);
        static get xmlNS(): string;
        static get xlinkNS(): string;
        buildVisual(adornerSurface: JQuery): SVGElement;
        protected setRectCss(): void;
        protected buildAdornerGroup(groupName: string): SVGElement;
        protected buildAdornerRectangle(css: string): SVGRectElement;
        protected inflate(left: number, top: number, right: number, bottom: number): void;
        static setOffset(adorner: SVGElement, leftOffset: number, topOffset: number): void;
        static getOffset(adorner: SVGElement): {
            x: number;
            y: number;
        };
        static translate(adorner: SVGGElement, leftOffset: number, topOffset: number): void;
    }
    class SurfaceResizeAdorner extends Adorner {
        constructor(componentId: string, componentInfo: ComponentInfo);
        buildVisual(adornerSurface: JQuery): SVGElement;
    }
    class SurfaceAdorner extends Adorner {
        buildVisual(adornerSurface: JQuery): SVGElement;
    }
    class LassoAdorner extends Adorner {
        buildVisual(adornerSurface: JQuery): SVGElement;
        protected setRectCss(): void;
    }
    class SelectionAdorner extends Adorner {
        buildVisual(adornerSurface: JQuery): SVGElement;
    }
    class RootContainerAdorner extends Adorner {
        constructor(componentId: string, componentInfo: ComponentInfo);
    }
    class ComponentAdorner extends Adorner {
        protected interactionInfo: $D.Framework.Design.Form.ElementInteractionInfo;
        constructor(componentId: string, componentInfo: ComponentInfo, interactionInfo?: $D.Framework.Design.Form.ElementInteractionInfo);
        buildVisual(adornerSurface: JQuery): SVGElement;
        private buildGenericVisual;
        private buildResizeInfoVisual;
        private buildThumbByDirection;
        private static getElementStyle;
        private buildPosition;
    }
    class SilverGridAdorner extends ComponentAdorner {
        constructor(componentId: string, componentInfo: ComponentInfo, interactionInfo?: $D.Framework.Design.Form.ElementInteractionInfo);
    }
    class DefaultAdorner extends ComponentAdorner {
        constructor(componentId: string, componentInfo: ComponentInfo, interactionInfo?: $D.Framework.Design.Form.ElementInteractionInfo);
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
