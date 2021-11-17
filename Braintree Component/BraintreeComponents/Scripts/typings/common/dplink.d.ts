declare namespace $DP.Common {
    interface DPLink {
        title: string;
        click: (e: JQueryEventObject) => void | Promise<void>;
        separator?: "none" | "right";
        style?: string;
        floatInSet?: "left" | "right";
    }
    function renderLink(link: DPLink): JQuery;
    interface DPLinkSetOptions {
        links: DPLink[];
        host?: JQuery;
    }
    function renderLinkSet(options: DPLinkSetOptions): JQuery;
    interface LinkDropDownOptions {
        label?: {
            text: string;
            className?: string;
        };
        items: Array<{
            label: string;
            value: any;
            isSelected?: boolean;
        }>;
        onChange: (value: any) => void;
        className?: string;
    }
    function renderLinkDropDown(options: LinkDropDownOptions): JQuery;
}
