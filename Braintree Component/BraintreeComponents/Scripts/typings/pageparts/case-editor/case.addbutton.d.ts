/**
 * Author: alex@decisions.com
 * Notes: unauthorized, unlicensed use, redistribution, modification is not allowed.
*/
/// <reference path="../../common/styleprops.d.ts" />
/// <reference path="../../typings/jquery/jquery.d.ts" />
declare namespace $DP.PageParts.CaseEditor {
    class AddButtonOptions {
        host?: JQuery;
        style?: $DP.Common.StyleProps;
        text: string;
        onClick?: (e?: JQueryEventObject) => void;
    }
    class AddButton {
        private options;
        private view;
        constructor(options: AddButtonOptions);
        render(): JQuery;
        getView(): JQuery;
    }
}
