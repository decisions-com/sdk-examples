declare namespace $DP.Common {
    interface AutoCompleteBoxOptions {
        listItems?: ListControlItem[];
        selected?: ListControlItem;
        holder?: JQuery;
        textBoxclass?: string;
        tabIndex?: number;
        instanceId?: string;
        fontStyle?: $D.Silverlight.UI.Utilities.LabelAttributes;
        listItemsCssClass?: string;
        onExit?: (selected: ListControlItem) => void;
        onSelect?: (selected: ListControlItem) => void;
        waterMarkText?: string;
        clearSelectionOnTextClear?: boolean;
    }
    class AutoCompleteBox {
        private options;
        private input;
        private autocomplete;
        private static readonly INSTANCE_NAME;
        private typingTimer;
        constructor(options: AutoCompleteBoxOptions);
        static get(host: JQuery): any;
        create(): JQuery;
        initializeAutoComplete(): void;
        attachEvents(): void;
        select(item: ListControlItem): void;
        clear(): void;
        get selectedItem(): ListControlItem;
        setItems(items: ListControlItem[]): void;
    }
}
interface JQuery {
    autocompletebox(options: $DP.Common.AutoCompleteBoxOptions): JQuery;
    autocompletebox(methodName: 'get'): $DP.Common.AutoCompleteBox;
}
