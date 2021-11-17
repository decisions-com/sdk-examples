declare namespace $DP.Common {
    interface NumberSpinnerOptions extends NumberSpinnerStyleOptions {
        minValue?: number;
        maxValue?: number;
        value?: string;
        decimalPlaces?: number;
        increment?: number;
        isEditable?: boolean;
        tabIndex?: number;
        onValueChange?: (value: number) => void;
        onExit?: () => void;
        onEnter?: () => void;
        holder?: JQuery;
        height?: number | 'full-height';
        width?: number | 'full-width';
    }
    interface NumberSpinnerStyleOptions {
        fontStyle?: string;
        textBoxClass?: string;
        upArrowClass?: string;
        downArrowClass?: string;
    }
    class NumberSpinner {
        private options;
        private view;
        private input;
        private spinner;
        private currentValue;
        private typingTimer;
        constructor(options: NumberSpinnerOptions);
        static get(host?: JQuery): any;
        create(): void;
        intializeSpinner(): void;
        attachEvents(): void;
        setValue(value: number, raiseEvent?: boolean, updateInput?: boolean): void;
        setStyles(): void;
        get value(): number;
    }
}
interface JQuery {
    numberspinner(options: $DP.Common.NumberSpinnerOptions): JQuery;
    numberspinner(methodName: 'get'): $DP.Common.NumberSpinner;
    numberspinner(methodName: string): any;
}
