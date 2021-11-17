declare namespace $DP.Common {
    enum StackOrientation {
        Horizontal = 0,
        Vertical = 1
    }
    interface StackOptions {
        size?: $DP.UI.Size;
        constrainChildren?: boolean;
        fillMode: Silverdark.Designers.Forms.Containers.SilverStackFillMode;
        getCellPadding?: (index: number, total: number, child: JQuery) => Edges;
    }
    abstract class Stack {
        readonly options: StackOptions;
        protected root: JQuery;
        protected children: JQuery;
        abstract className(): string;
        protected get cellClassName(): string;
        constructor(options: StackOptions);
        render(): JQuery;
        getView(): JQuery;
        addChild(el: JQuery): void;
        getChildren(): JQuery;
        protected createCell(): JQuery;
        protected getAllCellsHeight(): number;
        protected getAllCellsWidth(): number;
        protected getCells(): JQuery;
        abstract setSize(size: number, cellSizes: number[]): any;
        abstract getSnaptoRectangle(draggingElementSize?: $DP.Containers.SizeInfo, point?: $DP.Common.Point): Rectangle;
        abstract getChildIndex(coordinates: JQueryCoordinates): number;
    }
    class HorizontalStack extends Stack {
        readonly options: StackOptions;
        static get horizontalClassName(): string;
        className(): string;
        constructor(options: StackOptions);
        setSize(size: number, cellSizes: number[]): void;
        getSnaptoRectangle(): Rectangle;
        getChildIndex(coordinates: JQueryCoordinates): number;
    }
    class VerticalStack extends Stack {
        readonly options: StackOptions;
        static get verticalClassName(): string;
        static get autoverticalClassName(): string;
        className(): string;
        constructor(options: StackOptions);
        setSize(size: number, cellSizes: number[]): void;
        getSnaptoRectangle(draggingElementSize?: $DP.Containers.SizeInfo, point?: $DP.Common.Point): Rectangle;
        getChildIndex(coordinates: JQueryCoordinates): number;
    }
    class ResponsiveVerticalStack extends Stack {
        readonly options: StackOptions;
        static get responsiveVerticalClassName(): string;
        static get autoverticalClassName(): string;
        className(): string;
        constructor(options: StackOptions);
        addChild(el: JQuery): void;
        protected getCells(): JQuery;
        setSize(size: number, cellSizes: number[]): void;
        getSnaptoRectangle(draggingElementSize?: $DP.Containers.SizeInfo, point?: $DP.Common.Point): Rectangle;
        getChildIndex(coordinates: JQueryCoordinates): number;
    }
}
