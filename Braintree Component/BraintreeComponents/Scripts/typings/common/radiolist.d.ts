/**
 * Author:oleg@decisions.com
 * Notes:Unauthorized, unlicensed use, redistribution, modification is not allowed.
*/
declare namespace $DP.Common {
    class RadioListItem {
        value: any;
        title: string;
        note?: string;
        constructor(value: any, title: string, note?: string);
        getView(): string;
        private getNoteView;
    }
    class RadioList {
        private items;
        private onChecked;
        private verticalAlignment;
        private view;
        constructor(items: RadioListItem[], onChecked: (item: RadioListItem) => void, verticalAlignment?: boolean, activeItemValue?: string);
        getView(): JQuery;
        checkByValue(value: any): void;
        getCheckedItem(): RadioListItem;
        private createItemView;
        private getCheckedItemView;
        private getItemView;
        private check;
        private uncheck;
        private uncheckAll;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
