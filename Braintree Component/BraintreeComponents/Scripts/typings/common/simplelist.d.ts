declare namespace $DP.Common {
    interface SimpleListControlOptions extends ListControlStyleOptions {
        items: ListControlItem[];
        selectedIds: string[];
        tabOrder?: number;
        host?: JQuery;
        isMultiSelect?: boolean;
        listCssClass?: string;
        onSelect?: (selectedItems: ListControlItem[]) => void;
    }
    interface IListControl {
        setSelection(selectedIds: string[]): void;
        setItems(items: ListControlItem[]): any;
    }
    class SimpleListControl implements IListControl {
        private options;
        private listItems;
        private activeListItem;
        constructor(options: SimpleListControlOptions);
        static get(hostElem: JQuery): any;
        private container;
        create(host?: JQuery): void;
        getListView(item: ListControlItem, index: number): JQuery;
        setSelection(selectedIds: string[]): void;
        createItemsView(): JQuery;
        AttachEvents(): void;
        private isSelected;
        ChangeStateOnSelection(element: any): void;
        SelectElement(element: any, raiseEvent?: boolean): void;
        getSelectItems(): ListControlItem[];
        UnSelectElement(element: any): void;
        UnSelectAllElements(): void;
        setItems(items: ListControlItem[]): void;
    }
}
interface JQuery {
    simplelist(options: $DP.Common.SimpleListControlOptions): JQuery;
    simplelist(methodName: 'get'): $DP.Common.SimpleListControl;
}
