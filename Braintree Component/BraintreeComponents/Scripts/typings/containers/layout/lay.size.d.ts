declare namespace $DP.UI {
    class Size {
        width: number;
        height: number;
        constructor(width: any, height: any);
        toString(): string;
        IsEmpty(): boolean;
        isEqual(size: Size): boolean;
        static getMaxSize(size1: Size, size2: Size): Size;
        static getMinSize(size1: Size, size2: Size): Size;
        static skipElementBorder(size: Size, el: JQuery): Size;
        static skipEdges(size: Size, edges: $DP.Common.Edges): Size;
        static setToElement(size: Size, el: JQuery): void;
    }
}
