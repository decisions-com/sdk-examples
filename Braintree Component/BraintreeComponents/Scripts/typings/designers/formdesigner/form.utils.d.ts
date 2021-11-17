/**
 * Author:dorin@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Designers.Forms {
    import Point = $DP.Common.Point;
    enum MouseButton {
        None = 0,
        Left = 1,
        Right = 2
    }
    abstract class MouseContext {
        point: Point;
        constructor(point: Point);
    }
    class AdornerMouseContext extends MouseContext {
        onMouseUp: (adornerInfo: AdornerInfo) => any;
        adornerInfo: AdornerInfo;
        resizeDirection: $D.Framework.Design.Form.ResizeDirection;
        surface: JQuery;
        constructor(event: AdornerThumbEvent, onMouseUp: (adornerInfo: AdornerInfo) => any);
    }
    class ComponentMouseContext extends MouseContext {
        point: Point;
        componentId: string;
        mouseButton: MouseButton;
        onMouseDown: (point: Point, context: ComponentMouseContext) => any;
        onMouseMove: (point: Point, context: ComponentMouseContext) => any;
        onMouseUp: (point: Point, context: ComponentMouseContext) => any;
        static get MOUSE_DOWN_NAME(): string;
        static get MOUSE_MOVE_NAME(): string;
        static get MOUSE_UP_NAME(): string;
        constructor(point: Point, componentId: string, mouseButton: MouseButton, handlers: {
            name: string;
            callback: (point: Point, context: ComponentMouseContext) => any;
        }[]);
    }
    class ComponentDragContext extends ComponentMouseContext {
        point: Point;
        componentId: string;
        mouseButton: MouseButton;
        multipleSelection: boolean;
        isDnD: boolean;
        hitTests: Array<string>;
        isSnapped: boolean;
        availableGridSpan: $DP.Common.GridSpan;
        onStartDrag: (point: Point, context: ComponentDragContext) => any;
        onMoveDrag: (point: Point, context: ComponentDragContext) => any;
        onEndDrag: (point: Point, context: ComponentDragContext) => any;
        static get DRAG_START_NAME(): string;
        static get DRAG_MOVE_NAME(): string;
        static get DRAG_END_NAME(): string;
        constructor(point: Point, componentId: string, mouseButton: MouseButton, multipleSelection: boolean, handlers: {
            name: string;
            callback: (point: Point, context: ComponentDragContext) => any;
        }[]);
    }
    abstract class MouseTool {
        protected context: MouseContext;
        constructor(context: MouseContext);
        abstract mouseDown(point: Point): boolean;
        abstract mouseMove(point: Point): boolean;
        abstract mouseUp(point: Point): boolean;
    }
    class AdornerMouseTool extends MouseTool {
        protected context: AdornerMouseContext;
        constructor(context: AdornerMouseContext);
        mouseDown(point: Point): boolean;
        mouseMove(point: Point): boolean;
        mouseUp(point: Point): boolean;
    }
    class ComponentMoveTool extends MouseTool {
        protected context: ComponentDragContext;
        constructor(context: ComponentDragContext);
        mouseDown(point: Point): boolean;
        mouseMove(point: Point): boolean;
        mouseUp(point: Point): boolean;
    }
    class ComponentHoverTool extends MouseTool {
        protected context: ComponentMouseContext;
        constructor(context: ComponentMouseContext);
        mouseDown(point: Point): boolean;
        mouseMove(point: Point): boolean;
        mouseUp(point: Point): boolean;
    }
    class ComponentSelectTool extends MouseTool {
        protected context: ComponentMouseContext;
        constructor(context: ComponentMouseContext);
        mouseDown(point: Point): boolean;
        mouseMove(point: Point): boolean;
        mouseUp(point: Point): boolean;
    }
    class MouseToolSelector {
        static getMouseToolByContextType(context: MouseContext): any;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
