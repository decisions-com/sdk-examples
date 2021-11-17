/**
 * Author:oleg@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="styleprops.d.ts" />
/// <reference path="utils/string.utils.d.ts" />
/// <reference path="../layouts/decisions.ui.d.ts" />
declare namespace $DP.Common {
    interface CheckBoxOptions {
        holder?: JQuery;
        label?: string;
        /**
         * class name for component
         */
        class?: string;
        threeState?: boolean;
        id?: string;
        value?: boolean;
        onchange?: (checked: boolean) => void;
        tabIndex?: number;
        labelStyle?: StyleProps;
        checkBoxSize?: $DP.UI.Size;
        isDisabled?: boolean;
    }
    class CheckBox {
        private options;
        get checkbox(): JQuery;
        get value(): boolean;
        set value(checkBoxValue: boolean);
        static create(options: CheckBoxOptions): CheckBox;
        static get(host: JQuery): CheckBox;
        private view;
        private input;
        constructor(options: CheckBoxOptions);
        setValue(value?: boolean): void;
        getView(): JQuery;
        private buildLabelStyle;
        private handleThreeStateClick;
    }
}
interface JQuery {
    checkBox(options: $DP.Common.CheckBoxOptions): JQuery;
    checkBox(methodName: 'get'): $DP.Common.CheckBox;
    checkBox(methodName: 'getBox'): JQuery;
    checkBox(methodName: string): any;
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
