declare namespace $DP.Common {
    interface NumberBoxOptions {
        readonly id?: string;
        readonly host: JQuery;
        readonly allowDecimal?: boolean;
        readonly groupSeparator?: string;
        readonly decimalSeparator?: string;
        readonly tabIndex?: number;
        readonly value?: number | string;
        readonly showValidation?: boolean;
        readonly rootStyle?: StyleProps;
        readonly onChange?: (event: {
            origin: NumberBox;
            value: number;
            strValue: string;
        }) => void;
        readonly onFocusOut?: (event: {
            origin: NumberBox;
        }) => void;
        readonly onFocusIn?: (event: {
            origin: NumberBox;
        }) => void;
    }
    class NumberBox {
        private options;
        private $view;
        private allowedValueRegex;
        private lastValue;
        constructor(options: NumberBoxOptions);
        isValid(): boolean;
        /**
         * returns text from input as it is
         */
        getInputValue(): string;
        /**
         * converts value which returns @method getValue() to formatted string
         */
        getFormattedValue(ignoreGroupSeparator?: boolean): string;
        /**
         * convert text from input to number
         */
        getValue(): number;
        focus(): void;
        getView(): JQuery;
        setValue(value: string | number, raiseEvent?: boolean): void;
        private checkNumberValidity;
        private render;
        private keyDownHandler;
        private keyUpHandler;
    }
}
