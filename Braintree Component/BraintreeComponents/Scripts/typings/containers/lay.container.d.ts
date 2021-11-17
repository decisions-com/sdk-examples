/// <reference path="component.d.ts" />
/// <reference path="lay.styling.d.ts" />
/// <reference path="lay.selectors.d.ts" />
/// <reference path="lay.servertypes.d.ts" />
declare namespace $DP.Containers {
    import FormComponentInfo = $D.Framework.Design.Form.FormComponentInfo;
    interface LayoutChildOptions {
        width?: number | string;
        height?: number | 'auto' | '100%';
        left?: number;
        top?: number;
        relativePosition?: ComponentPosition;
    }
    /**
     * size definiiton that components resize events expect
     */
    interface TriggerSize {
        width: number;
        height: number | 'auto';
    }
    /**
     * See https://sites.google.com/a/decisions.com/dev-team-wiki/dev-guidelines-and-cookbooks/layout-containers
     */
    abstract class BaseContainer extends BaseClientComponent implements LayoutContainer {
        readonly options: ContainerOptions;
        protected childrenHolder: JQuery;
        protected childElems: JQuery;
        private initialLayout;
        private currentSize;
        protected root: JQuery;
        /**
         * set to true to track whether a container is the root container.
         */
        isRoot: boolean;
        JSViewName: string;
        static getInstance(el: JQuery): BaseContainer;
        /**
        * trying to find the first parent container above the element
        */
        static getParentContainer(el: JQuery): BaseContainer;
        get logPrefix(): string;
        static get dataKey(): string;
        static get afterLayoutEvent(): string;
        static get className(): string;
        static get containerChildrenClassName(): string;
        constructor(options: ContainerOptions);
        /**
         * render defines a root element, optional since might be rendered on server
         */
        protected render(): JQuery;
        get canRelayout(): boolean;
        get isResponsive(): boolean;
        getHeight(): number;
        /**
         * by default container appends to root
         * @param el
         * @param childInfo
         */
        takeChild(el: JQuery, childInfo?: ChildInfo): void;
        /**
         * by default container set style on it's section
         */
        protected setStyle(): void;
        /**
         * sets size on self and lays down children
         * @param size - can be omitted to redo layout
         * @param embedPixelSize - false to skip adding fixed pixel sizes. Default is `true` (for legacy reasons)
         */
        doLayout(size?: $DP.UI.Size, embedPixelSize?: boolean): void;
        reLayout(): void;
        /**
         * this flag is saying if container needs to respect min/max on setting size
         * this works only in case container is root one, as otherwise it's size reconsidered by parent container during the layout
         */
        protected get shouldRespectMinMaxSizeForSelf(): boolean;
        private getHostSize;
        protected layout(size: $DP.UI.Size): void;
        attachAfterLayoutEvent(action: () => void): void;
        protected takeChildrenRenderedOnServer(): void;
        protected errorWhenChildNotFound(childInfo: ChildInfo): boolean;
        protected getChildInfoById(id: string): any;
        private ensureMinSize;
        private ensureMaxSize;
        private getContentSize;
        protected layoutChild(el: JQuery, options?: LayoutChildOptions): void;
        private setChildStyleInDom;
        /**
         * returns the requested size in px
         * if size provided as string, returns size in DOM
        */
        private getPixelSize;
        /**
         * if child has no requested width/height defined, layout should specify it (i.e. for resize in designer)
         */
        private checkRequestedSizeInData;
        private triggerResize;
        protected get children(): JQuery;
        hasChild(componentId: string): boolean;
        private onResize;
        fillComponentInfoAtCursor(info: FormComponentInfo, cursor: Common.Point): void;
        fillComponentInfo(info: FormComponentInfo, component: JQuery): void;
        /**
         * used if container needs to specify the overlay, i.e. header container
         */
        getDesignOverlay(): JQuery;
        /**
         * used if container needs to specify the drop area, i.e. grid introduces a new dummy row
         */
        getDesignArea(): any;
        /**
         * used to attach help text events for page containers, for form we attach it from formcomponentbase
         * */
        attachHelpTextEventOnPage(): void;
    }
}
