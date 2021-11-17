/**
 * Author: alex@decisions.com
 * Notes: unauthorized, unlicensed use, redistribution, modification is not allowed.
*/
/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="svg.icons.d.ts" />
/// <reference path="styleprops.d.ts" />
declare namespace $DP.Common {
    interface HeaderAction {
        className: string;
        action: (event: JQueryEventObject) => void;
    }
    interface HeaderPanelOptions {
        readonly host?: JQuery;
        readonly title: string;
        readonly rootStyle?: StyleProps;
        readonly headerStyle?: StyleProps;
        readonly bodyStyle?: StyleProps;
        readonly titleStyle?: StyleProps;
        readonly isCollapsible?: boolean;
        readonly content?: JQuery;
        actions?: HeaderAction[];
        readonly onCollapsingChanged?: (event: {
            origin: HeaderPanel;
        }) => void;
        readonly animatedCollapsing?: boolean;
    }
    class HeaderPanel {
        private options;
        private static get DATA_KEY();
        private $view;
        private $header;
        private $title;
        private $customActions;
        private $collapseBtn;
        private $body;
        private collapsed;
        constructor(options: HeaderPanelOptions);
        get isCollapsed(): boolean;
        getHeader(): JQuery;
        getView(): JQuery;
        setTitle(title: string): void;
        setActions(actions: HeaderAction[]): void;
        setContent($content: JQuery): void;
        getBody(): JQuery;
        private render;
        private hasActions;
        private createActions;
        private createAction;
        private makeCollapsible;
        toggle(collapse: boolean): void;
        collapse(): void;
        expand(): void;
        private onCollapsingChanged;
    }
}
