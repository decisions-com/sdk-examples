declare namespace $DP.Common {
    interface SearchDropDownOptions {
        readonly host?: JQuery;
        /**
        * css class names for child elements
        */
        readonly classNames?: {
            root?: string;
            textBox?: StyleProps;
            layer?: string;
            arrowDownButton?: StyleProps;
        };
        readonly tabIndex?: number | string;
        readonly selectedItem?: ComboBoxItem | Promise<ComboBoxItem>;
        readonly hasClear?: boolean;
        readonly layerHeight?: number;
        readonly disableSpellCheck?: boolean;
        readonly placeholder?: string;
        /**
         * automatically select item if text entered in textbox is present in items list
         */
        readonly autoSelectItem?: boolean;
        /**
         *  select item on focusout if any item starts with entered text, only valid when autoSelectItem is true
         */
        readonly allowPartialMatch?: boolean;
        readonly onTypingTextChanged?: (event: {
            origin: SearchDropDown;
            text: string;
        }) => void;
        readonly doNotShowEmptyList?: boolean;
        /**
         * Allow to customize item's view in combobox layer
         */
        readonly createItemView?: (item: ComboBoxItem, searchText?: string) => JQuery;
        readonly onSelected?: (item: ComboBoxItem) => boolean;
        readonly onFocusOut?: (event: {
            origin: SearchDropDown;
            jqueryEvent: JQueryEventObject;
        }) => void;
        readonly onFocusIn?: (e: {
            origin: SearchDropDown;
            jqueryEvent: JQueryEventObject;
        }) => void;
        readonly onInput?: (text: string) => void;
        readonly onLayerShown?: (e: {
            origin: SearchDropDown;
            layer: ComboBoxLayer;
        }) => void;
        readonly onLayerClosed?: (e: {
            origin: SearchDropDown;
            layer: ComboBoxLayer;
        }) => void;
        readonly pageSize?: number;
        readonly loadItems: (e: {
            origin: SearchDropDown;
            text: string;
            loadedCount: number;
            pageSize: number;
        }) => Promise<$DP.Common.ComboBoxItem[]>;
    }
    class SearchDropDown {
        private options;
        private combobox;
        private loadedCount;
        private lastLoadedCount;
        private suggestions;
        constructor(options: SearchDropDownOptions);
        getView(): JQuery;
        focus(): void;
        private render;
        private createLoadMoreButton;
        private clickLoadMore;
        private resetSearchResults;
        private appendLoadMore;
        private getSuggestions;
        private createItemView;
    }
}
