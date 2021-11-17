declare namespace $DP.Mobile.Common {
    import ListControlItem = $DP.Common.ListControlItem;
    import CheckBoxListOptions = $DP.Common.CheckBoxListOptions;
    import IListControl = $DP.Common.IListControl;
    class CheckBoxList implements IListControl {
        private options;
        $container: JQuery;
        selectedItems: ListControlItem[];
        constructor(options: CheckBoxListOptions);
        static create(host: JQuery, options: CheckBoxListOptions): CheckBoxList;
        initialize(): void;
        render(): void;
        createItemsView(items: ListControlItem[]): void;
        setSelection(selectedIds: string[]): void;
        setItems(items: ListControlItem[]): void;
        unCheckAll(): void;
    }
}
