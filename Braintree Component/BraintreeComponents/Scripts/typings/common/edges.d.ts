declare namespace $DP.Common {
    class Edges {
        top: number;
        right: number;
        bottom: number;
        left: number;
        constructor(top: number, right: number, bottom: number, left: number);
        static getPadding(el: JQuery): Edges;
        static getMargin(el: JQuery): Edges;
        static setPadding(el: JQuery, padding: Edges): void;
        static setMargin(el: JQuery, margin: Edges): void;
        toString(): string;
        static get empty(): Edges;
        get isEmpty(): boolean;
        add(more: Edges): void;
    }
}
