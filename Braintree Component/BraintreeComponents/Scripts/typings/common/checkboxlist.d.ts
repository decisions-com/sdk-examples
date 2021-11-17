declare namespace $DP.Common {
    interface CheckBoxListOptions extends ListControlStyleOptions {
        items?: ListControlItem[];
        selectedIds?: string[];
        onSelect?: (selectedItems: ListControlItem[]) => boolean;
        host?: JQuery;
        tabIndex?: number;
        showSearchBox?: boolean;
        isHorizontal?: boolean;
        listCssClass?: string;
    }
    class CheckBoxList implements IListControl {
        private options;
        constructor(options: CheckBoxListOptions);
        private root;
        private searchBoxHolder;
        static get(hostElem: JQuery): any;
        getCheckBoxView(item: ListControlItem, index: number): JQuery;
        getView(): JQuery[];
        setSelection(selectedIds: string[]): void;
        unCheckAll(): void;
        selectCheckBox(index: number): void;
        create(host?: JQuery): void;
        render(): void;
        createItemsView(): void;
        setItems(items: ListControlItem[]): void;
        search(text: string, checkBoxes: JQuery): void;
        static get highlightClass(): string;
        static highlightCheckBox($cb: JQuery): void;
        AttachEvents(): void;
        onSelectionChanged(checkBox: JQuery): void;
        getSelectedCheckBox(): ListControlItem[];
        ChangeCheckBoxMode(element: any): void;
    }
}
interface JQuery {
    checkboxlist(options: $DP.Common.CheckBoxListOptions): JQuery;
    checkboxlist(methodName: 'get'): $DP.Common.CheckBoxList;
}
