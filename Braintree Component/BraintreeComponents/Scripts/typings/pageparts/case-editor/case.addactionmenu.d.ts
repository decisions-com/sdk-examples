/**
 * Author: alex@decisions.com
 * Notes: unauthorized, unlicensed use, redistribution, modification is not allowed.
 */
/// <reference path="case.step.d.ts" />
/// <reference path="case.statesteps.d.ts" />
/// <reference path="case.addbutton.d.ts" />
/// <reference path="case.menuactions.d.ts" />
/// <reference path="../../common/styleprops.d.ts" />
/// <reference path="../../common/popuplayer.d.ts" />
declare namespace $DP.PageParts.CaseEditor {
    interface CaseActionOptions {
        icon?: JQuery;
        title: string;
        action: () => void;
        style?: $DP.Common.StyleProps;
    }
    class CaseActionMenuOptions {
        actions: CaseActionOptions[];
        onCreated?: (layer?: JQuery) => void;
    }
    class CaseActionMenu {
        private options;
        private $view;
        private $layer;
        constructor(options: CaseActionMenuOptions);
        show(stickTo: JQuery): void;
        private getView;
        private render;
        private createItem;
    }
}
