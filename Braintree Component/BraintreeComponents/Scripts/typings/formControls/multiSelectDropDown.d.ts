/**
 * Author:akash.singh@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
import ListControlItem = $DP.Common.ListControlItem;
import StyleProps = $DP.Common.StyleProps;
declare namespace $DP.Form.Controls {
    interface IMultiSelectDropDownOptions {
        host?: JQuery;
        onSelectionChanged?: (selectedItems: ListControlItem[]) => void;
        items?: ListControlItem[];
        selectedItemIds?: string[];
        placeholder?: string;
        caseSensitive?: boolean;
        tabIndex?: number;
        disable?: boolean;
        classNames?: {
            textBox?: StyleProps;
            layer?: string;
            arrowDownButton?: StyleProps;
            item?: StyleProps;
            list?: StyleProps;
        };
        onTypingTextChanged?: (text: string) => void;
        allowExternalValuesToBeSelected?: boolean;
    }
    enum Operation {
        Add = 0,
        Remove = 1
    }
    class MultiSelectDropDown {
        private options;
        private readonly instanceID;
        private readonly canRemoveItemClass;
        private dropDownContainer;
        private selectedItemContainer;
        private combo;
        private _canRemoveItem;
        private selectedItems;
        outsideValues: ListControlItem[];
        constructor(options: IMultiSelectDropDownOptions);
        get canRemoveItem(): boolean;
        set canRemoveItem(val: boolean);
        create(host: JQuery): void;
        getView(): JQuery;
        renderCombo(): JQuery;
        setSelectedItems(selectedIds: string[], raiseEvent?: boolean): void;
        setSelectedItemsWithExternalValues(selectedIds: string[]): void;
        /**
         * Remove the items from the curently selected list that are neigher present in the updated selected value list nor in the updated External value list.
         * */
        private removeStaleSelectedItemsFromDom;
        disableInput(): void;
        enableInput(): void;
        disable(): void;
        enable(): void;
        raiseEvent(): void;
        private getComboItems;
        addItemToSelectedList(selectedItem: ListControlItem): void;
        getItemView(selectedItem: ListControlItem): JQuery;
        attachEvents(): void;
        private updateSelectedItems;
        updateOutsideItems(items: ListControlItem[], operation: Operation): void;
        updateOutsideSelectedItemsView(doDomCleanup?: boolean): void;
        setItems(items: ListControlItem[]): void;
        updateComboItems(): void;
    }
}
interface JQuery {
    multiSelectDropDown(option: $DP.Form.Controls.IMultiSelectDropDownOptions): any;
    multiSelectDropDown(methodName: string, option: any): any;
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
