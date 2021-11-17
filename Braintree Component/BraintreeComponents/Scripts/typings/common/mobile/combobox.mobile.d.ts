/// <reference path="../styleprops.d.ts" />
declare namespace $DP.Mobile.Common {
    import ComboBoxItem = $DP.Common.ComboBoxItem;
    import IComboBox = $DP.Common.IComboBox;
    interface ComboBoxOptions {
        host?: JQuery;
        items?: ComboBoxItem[];
        selectedItem?: ComboBoxItem;
        onSelected?: (item: ComboBoxItem) => boolean;
        style?: $DP.Common.StyleProps;
    }
    class ComboBox implements IComboBox {
        private options;
        $select: JQuery;
        selectedItem: ComboBoxItem;
        constructor(options: ComboBoxOptions);
        static create(host: JQuery, options: ComboBoxOptions): ComboBox;
        intialize(): void;
        render(): void;
        attachEvents(): void;
        raiseValueChangeEvent(): void;
        createItemsView(): void;
        select(itemToSelect: ComboBoxItem, raiseEvent?: boolean): void;
        setItems(items: ComboBoxItem[]): void;
        private resetSelection;
    }
}
