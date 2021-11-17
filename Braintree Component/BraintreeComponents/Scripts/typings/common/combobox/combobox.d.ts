/**
 * Author: oleg@decisions.com
 * Notes: unauthorized, unlicensed use, redistribution, modification is not allowed.
*/
/// <reference path="comboboxitem.d.ts" />
/// <reference path="comboboxlayer.d.ts" />
/// <reference path="comboboxfield.d.ts" />
/// <reference path="../popuplayer.d.ts" />
/// <reference path="../utils/string.utils.d.ts" />
/// <reference path="../styleprops.d.ts" />
/// <reference path="../../typings/jqueryui/jqueryui.d.ts" />
declare namespace $DP.Common {
    type ComboboxLayerWidthMode = 'full' | 'input';
    interface ComboBoxOptions {
        readonly host?: JQuery;
        /**
        * determines whether the search is case sensitive
        */
        readonly caseSensitive?: boolean;
        /**
        * css class names for child elements
        */
        readonly classNames?: {
            root?: string;
            textBox?: StyleProps;
            layer?: string;
            arrowDownButton?: StyleProps;
        };
        readonly layerZIndex?: number;
        readonly tabIndex?: number | string;
        items?: ComboBoxItem[];
        readonly selectedItem?: ComboBoxItem | Promise<ComboBoxItem>;
        readonly hasClear?: boolean;
        readonly layerHeight?: number;
        readonly disableSpellCheck?: boolean;
        readonly placeholder?: string;
        /**
         * full - layer width = combobox width
         * input - layer width = input element of combobox
         */
        readonly layerWidthMode?: ComboboxLayerWidthMode;
        /**
         * @default false
         */
        readonly hideArrowButton?: boolean;
        readonly maxSuggestionsCount?: number;
        /**
         * automatically select item if text entered in textbox is present in items list
         */
        readonly autoSelectItem?: boolean;
        /**
         *  select item on focusout if any item starts with entered text, only valid when autoSelectItem is true
         */
        readonly allowPartialMatch?: boolean;
        readonly onTypingTextChanged?: (event: {
            origin: ComboBox;
            text: string;
        }) => void;
        readonly doNotShowEmptyList?: boolean;
        /**
         * Determines items in list will be sorted by name or not
         */
        readonly sortValues?: boolean;
        /**
         * @default false
         * clear selection if text is cleared from textbox
         */
        readonly clearSelectionOnTextClear?: boolean;
        /**
         * Allow to customize item's view in combobox layer
         */
        readonly createItemView?: (item: ComboBoxItem, searchText?: string) => JQuery;
        /**
         * Allow to override default way getting suggestions.
         */
        readonly getSuggestions?: (event: {
            origin: ComboBox;
            text: string;
        }) => ComboBoxItem[] | Promise<ComboBoxItem[]>;
        readonly onSelected?: (item: ComboBoxItem) => boolean;
        readonly onFocusOut?: (event: {
            origin: ComboBox;
            jqueryEvent: JQueryEventObject;
        }) => void;
        readonly onFocusIn?: (e: {
            origin: ComboBox;
            jqueryEvent: JQueryEventObject;
        }) => void;
        readonly onInput?: (text: string) => void;
        readonly onLayerShown?: (e: {
            origin: ComboBox;
            layer: ComboBoxLayer;
        }) => void;
        readonly onLayerClosed?: (e: {
            origin: ComboBox;
            layer: ComboBoxLayer;
        }) => void;
        readonly onClearClick?: () => void;
    }
    interface ComboBoxItem {
        id: string;
        name?: string;
        /**
         * Custom className for Root combobox item
         */
        style?: string;
        /**
         * Custom styling for name @see name
         */
        nameStyle?: StyleProps;
        leftIcon?: JQuery;
    }
    interface IComboBox {
        setItems(items: ComboBoxItem[], clear?: boolean): any;
        select(item: ComboBoxItem, raiseEvent?: boolean): any;
    }
    class ComboBox implements IComboBox {
        options: ComboBoxOptions;
        static get DATA_KEY(): string;
        static get DATA_KEY_ITEM(): string;
        static get(host: JQuery): ComboBox;
        get text(): string;
        protected input: ComboBoxField;
        private root;
        private layer;
        /**
         * Cache of layer content with all items.
         */
        private $layerContent;
        constructor(options: ComboBoxOptions);
        setItems(items: ComboBoxItem[], clear?: boolean): void;
        get SelectedItem(): ComboBoxItem;
        getView(): JQuery;
        getLayer(): ComboBoxLayer;
        clear(triggerEvent?: boolean): void;
        isLayerOpened(): boolean;
        focus(): void;
        remove(): void;
        closeLayer(): void;
        select(item: ComboBoxItem, raiseEvent?: boolean): void;
        selectById(itemId: string, raiseEvent?: boolean): void;
        disable(): void;
        enable(): void;
        showHideDownArrow(showArrow: boolean): void;
        protected showLayerWithContent(content: JQuery, onLayerShown?: ($layer: JQuery) => void): void;
        getSelectedItemId(): string;
        protected getLayerConent(): JQuery;
        private updateSelectedItem;
        protected getSuggestionsContent(searchText: string): Promise<JQuery>;
        private render;
        private showSuggestionsLayer;
        private focusOnLayer;
        private getLayerWidth;
        private createItemView;
        private createDefaultItemView;
        private getItemText;
        private getSuggestions;
        private getSuggestionsFromOptions;
        private getSuggestionsDefault;
        private toggleLayer;
        private selectItem;
    }
}
interface JQuery {
    comboBox(options: $DP.Common.ComboBoxOptions): JQuery;
    comboBox(methodName: 'get'): $DP.Common.ComboBox;
    comboBox(methodName: 'getBox'): JQuery;
    comboBox(methodName: string): any;
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
