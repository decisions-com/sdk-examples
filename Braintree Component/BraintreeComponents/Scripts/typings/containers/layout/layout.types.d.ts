declare namespace $DP.Layout {
    enum LayoutElementType {
        Fixed = 0,
        Grow = 1,
        Resize = 2
    }
    enum Orientation {
        Horizontal = 0,
        Vertical = 1
    }
    enum StackFillMode {
        Scroll = 0,
        ExpandChildrenThenScroll = 1,
        FitChildren = 2
    }
    class LayoutElement {
        readonly requested: number;
        readonly min: number;
        readonly max: number;
        readonly type: LayoutElementType;
        readonly el?: JQuery;
        final: number;
        constructor(requested: number, min: number, max: number, type: LayoutElementType, el?: JQuery);
        get isFull(): boolean;
        get isFullMax(): boolean;
        get isFullMin(): boolean;
        clearOverFlow(): number;
        isResizable(deltaSize: number): boolean;
    }
}
