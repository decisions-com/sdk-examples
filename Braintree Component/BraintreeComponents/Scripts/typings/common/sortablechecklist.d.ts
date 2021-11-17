declare namespace $DP.Common {
    interface SortableCheckBoxListOptions extends ListControlStyleOptions {
        host?: JQuery;
        items?: ListControlItem[];
        selectedItemIds: string[];
        onSelect?: (item: ListControlItem | ListControlItem[]) => boolean;
        onArrowUpDown?: (item: ListControlItem | ListControlItem[]) => boolean;
        tabOrder?: number;
        showSearchBox?: boolean;
        listCssClass?: string;
    }
    class SortableCheckBoxList {
        private options;
        constructor(options: SortableCheckBoxListOptions);
        private searchBoxHolder;
        private root;
        get upDownArrow(): string;
        create(host?: JQuery): void;
        renderItemsView(): JQuery;
        setItems(items: ListControlItem[]): void;
        static get(hostElem: JQuery): any;
        setSelection(selectedIds: string[]): void;
        unCheckAll(): void;
        search(text: string, checkBoxes: JQuery): void;
        selectCheckBox(index: number): void;
        getCheckBoxView(item: ListControlItem, index: number): JQuery;
        getView(): JQuery[];
        toggleCheckBox(elem: JQuery, raiseEvent?: boolean): void;
        checkCheckBox(checkBox: JQuery, raiseEvent?: boolean): void;
        unCheckCheckBox(checkBox: JQuery, raiseEvent?: boolean): void;
        getSelectedCheckBox(): ListControlItem[];
        onArrowUpDownChange: any;
        AttachEvents(): void;
    }
}
interface JQuery {
    sortablecheckboxlist(options: $DP.Common.SortableCheckBoxListOptions): JQuery;
    sortablecheckboxlist(methodName: 'get'): $DP.Common.SortableCheckBoxList;
}
