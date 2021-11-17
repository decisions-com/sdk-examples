/// <reference path="grid/lay.grid.d.ts" />
/// <reference path="component.d.ts" />
/// <reference path="lay.container.d.ts" />
declare namespace $DP.Containers {
    class DOMSelectors {
        /**
        * controls that rendered completely on client
        */
        static get clientControl(): string;
        static get controlOverlay(): string;
        static get containerControl(): string;
        static get gridContainer(): string;
        static get gridLayoutContainer(): string;
        static get topContainer(): string;
        static findTopContainer(host: JQuery): JQuery;
        static get control(): string;
        static get firstControl(): string;
        static getControlById(id: string): string;
    }
}
