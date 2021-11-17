/// <reference path="../common/utils/string.utils.d.ts" />
declare namespace $DP.Containers {
    type ComponentHostType = "form" | "page";
    /**
    * the options of the component that can be rendered on client completely
    */
    interface ClientComponentOptions extends $D.Silverlight.UI.Forms.SilverFormComponentBaseOptions {
        host?: JQuery;
        hostType?: ComponentHostType;
        controlTypeName?: string;
        parentId?: string;
        cssClass?: string;
        left?: number;
        top?: number;
    }
    /**
     * controls that rendered completely on client
     */
    abstract class BaseClientComponent {
        protected options: ClientComponentOptions;
        protected sectionId: string;
        readonly host: JQuery;
        static get className(): string;
        constructor(options: ClientComponentOptions);
        private initialize;
        private renderComponent;
        private setSize;
        private setPosition;
        private compPos;
        get componentPosition(): ComponentPosition;
    }
}
