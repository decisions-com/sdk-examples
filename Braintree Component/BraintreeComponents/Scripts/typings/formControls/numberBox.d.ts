/**
 * Author:akash.singh@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, redistribution, modification is not allowed.
*/
/// <reference path="../accounting/accounting.d.ts" />
declare namespace $DP.Form.Controls {
    import NumberFormatOptions = $D.Framework.Utilities.Data.NumberFormatOptions;
    interface INumberBoxOptions {
        isEditable?: boolean;
        increment?: number;
        useNumberGroupSeparator?: boolean;
        autoPopulate?: boolean;
        settings?: IFormatSettings;
        NumberFormatOptions?: NumberFormatOptions;
        outputType?: OutputType;
        doNotFormatWholeNumber?: boolean;
        autoSelectOnFocus?: boolean;
        fontStyle?: string;
        numberBoxInputClass?: string;
        tabOrder?: number;
        watermarkText?: string;
        allowNullValue?: boolean;
        onValueChange?: (value: number) => void;
        onEnter?: () => void;
        onExit?: (isValueChanged: boolean) => void;
        template?: string;
    }
    interface IFormatSettings {
        precision?: number;
        autofix?: boolean;
        groupSeprator?: string;
        decimalSeprator?: string;
        maxValue?: number;
        minValue?: number;
        useMaxMin?: boolean;
        initialValue?: string;
        allow_negative?: boolean;
    }
    interface ISelection {
        start: number;
        end: number;
    }
    enum OutputType {
        OutputAsDouble = 0,
        OutputAsInt = 1,
        OutputAsDecimal = 2
    }
    class NumberBox {
        options: INumberBoxOptions;
        numberBox: JQuery;
        view: JQuery;
        typingTimer: number;
        lastSetValue: number | string;
        selection: ISelection;
        numberBoxFormatFactory: BaseFormatProvider;
        constructor(holder: JQuery, options: INumberBoxOptions);
        static create(holder: JQuery, options: INumberBoxOptions): NumberBox;
        render(holder: JQuery): void;
        intialize(): void;
        attachEvents(): void;
        setValue(val: string, raiseEvent?: boolean): boolean;
        checkRange(value: number | string): string;
        getValue(): number;
        getValueAsString(): string | number;
        raiseValueChangeEvent(): void;
        private maintainCursorPosition;
        private resetCursorPosition;
        private updateNumber;
        getFormattedValue(value?: string): string;
        getFormattedServerValue(value: any): string;
        static isNonPrintableKey(keycode: number): boolean;
    }
    class NumberBoxFormatFacotry {
        options: INumberBoxOptions;
        constructor(options: INumberBoxOptions);
        getFactory(): BaseFormatProvider;
    }
    abstract class BaseFormatProvider {
        options: INumberBoxOptions;
        constructor(options: INumberBoxOptions);
        abstract validate(value: string): boolean;
        abstract format(value: string): string;
        protected validateNumber(value: string): boolean;
        getValidNumberFromText(value: string): number;
    }
    class SettingsFormatProvider extends BaseFormatProvider {
        options: INumberBoxOptions;
        constructor(options: INumberBoxOptions);
        validate(value: string): boolean;
        format(value: string): string;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
