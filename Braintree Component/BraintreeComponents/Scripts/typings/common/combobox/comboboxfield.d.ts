/// <reference path="comboboxitem.d.ts" />
/// <reference path="../styleprops.d.ts" />
declare namespace $DP.Common {
    interface ComboBoxFieldOptions {
        readonly host?: JQuery;
        readonly classNames?: {
            root?: string;
            textBox?: StyleProps;
            arrowDownButton?: StyleProps;
        };
        readonly placeholder?: string;
        readonly hideArrowButton?: boolean;
        readonly hasClear?: boolean;
        readonly tabIndex?: number | string;
        readonly disableSpellCheck?: boolean;
        readonly selectedItem?: ComboBoxItem | Promise<ComboBoxItem>;
        /**
         * Is fired synchronously when the value is changed
         */
        readonly onInput?: (e: {
            origin: ComboBoxField;
            value: string;
        }) => void;
        /**
         * Is Fired when element removed from DOM
         */
        readonly onDispose?: (e: {
            origin: ComboBoxField;
        }) => void;
        readonly onClearClick?: (e: {
            origin: ComboBoxField;
        }) => void;
        readonly onArrowClick?: (e: {
            origin: ComboBoxField;
        }) => void;
        /**
         * Is fired when a key is released.
         */
        readonly onInputKeyUp?: (e: {
            origin: ComboBoxField;
            jqueryEvent: JQueryKeyEventObject;
            /**
             * Allow prevent onTypingTextChanged event
             */
            preventTypingTextChanged: () => void;
            prevValue: string;
            currentValue: string;
        }) => void;
        /**
         * Is fired when text is changed by keyup event
         */
        readonly onTypingTextChanged?: (e: {
            origin: ComboBoxField;
            jqueryEvent: JQueryKeyEventObject;
        }) => void;
        readonly onFocusOut?: (e: {
            origin: ComboBoxField;
            jqueryEvent: JQueryEventObject;
        }) => void;
        readonly onFocusIn?: (e: {
            origin: ComboBoxField;
            jqueryEvent: JQueryEventObject;
        }) => void;
        readonly onSelected?: (e: {
            origin: ComboBoxField;
            item: ComboBoxItem;
        }) => boolean;
    }
    class ComboBoxField {
        private readonly options;
        private $view;
        private $input;
        private _selectedItem;
        private get $arrow();
        constructor(options: ComboBoxFieldOptions);
        get selectedItem(): ComboBoxItem;
        focus(): void;
        get text(): string;
        set text(val: string);
        getView(): JQuery;
        getInput(): JQuery;
        showHideDownArrow(showArrow: boolean): void;
        disable(): void;
        enable(): void;
        private render;
        private getInputAttrs;
        private getStyleForInput;
        private attachArrowDownEvents;
        private attachInputEvents;
        private onInputKeyDown;
        private lastText;
        private timer;
        protected onInputKeyUp(e: JQueryKeyEventObject): void;
        private toggleClearButtonVisibility;
        selectItem(item: ComboBoxItem, raiseEvent?: boolean, setFocusOnInput?: boolean): void;
        private selectItemProvidedInOptions;
        private setItemToInput;
        private getItemText;
    }
}
