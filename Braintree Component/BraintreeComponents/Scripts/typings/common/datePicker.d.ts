/**
 * Author:akash.singh@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="popuplayer.d.ts" />
/// <reference path="utils/date.utils.d.ts" />
declare namespace $DP.Common {
    enum NavigationType {
        Next = 0,
        Previous = 1
    }
    interface DatePickerOptions extends DatePickerStyleOptions {
        value?: Date;
        defaultValue?: Date;
        format?: string;
        tabIndex?: number;
        holder?: JQuery;
        autoSubmitInterval?: number;
        onDateChange?: (date: Date) => void;
        onInputEnter?: () => void;
        onInputExit?: () => void;
        dayNamesMin?: string[];
        monthNames?: string[];
        monthNamesShort?: string[];
        dayNames?: string[];
        displayText?: string;
        turnOffAllSuggestions?: boolean;
        turnOffDatePicker?: boolean;
        todayLinkText?: string;
        clearLinkText?: string;
        onLayerShown?: (layer: $DP.Common.PopupLayer) => void;
    }
    interface DatePickerStyleOptions {
        calendarCssClass?: string;
        textBoxCssClass?: string;
        buttonCssClass?: string;
        fontStyle?: string;
        containerClass?: string;
    }
    interface IDatePicker {
        getDate(): Date;
        setDate(date: string | Date, raiseEvent: boolean): any;
        getDateAsync(): Promise<any>;
    }
    class DatePicker implements IDatePicker {
        private options;
        $view: JQuery;
        $input: JQuery;
        $icon: JQuery;
        $calendar: JQuery;
        suggestionToolTip: DateSuggestionToolTip;
        readonly instanceId: string;
        submitTimer: number;
        keyDownTimer: number;
        isDatePickerInitialized: boolean;
        lastSetDate: string;
        private setDatePromise;
        zIndex: number;
        calendar: $DP.Common.Calendar;
        constructor(options: DatePickerOptions);
        get dateFormat(): string;
        create(): this;
        renderView(): void;
        attachEvents(): void;
        raiseExitEvent(): void;
        hideSuggestionToolTip(): void;
        initializeCalendar(): void;
        validateAndSetDate(dateText: string, setDate?: boolean): Promise<void>;
        raiseEvent(date: Date): void;
        setDate(date: string | Date, raiseValueChangeEvent?: boolean): void;
        hideCalendar(): void;
        calendarVisible(): boolean;
        showCalendar(): void;
        getDate(): Date;
        getDateAsync(): Promise<any>;
        private set lastDate(value);
    }
    interface SuggestionTooltipOptions {
        showOnElement: JQuery;
        invalidSuggestionMessage: string;
        onSuggetionClick?: (suggestion: string) => void;
    }
    class SuggestionToolTip {
        options: SuggestionTooltipOptions;
        $suggestionToolTip: JQuery;
        instanceId: string;
        $layer: JQuery;
        constructor(options: SuggestionTooltipOptions);
        renderView(): void;
        attachEvents(): void;
        hide(): void;
        show(suggestion: string, suggestedDate: string): void;
    }
    interface DateSuggestionToolTipOptions extends SuggestionTooltipOptions {
        dateFormat: string;
        updateInvalidTextWithPreviousDate: boolean;
    }
    class DateSuggestionToolTip extends SuggestionToolTip {
        options: DateSuggestionToolTipOptions;
        constructor(options: DateSuggestionToolTipOptions);
        get momentFormat(): string;
        validateDate(dateText: string, lastSetDate: string): Promise<string>;
    }
}
interface JQuery {
    dpDatePicker(options: $DP.Common.DatePickerOptions): $DP.Common.DatePicker;
    dpDatePicker(methodName: "setDate", dateText: string | Date, raisevalueChangeEvent: boolean): void;
    dpDatePicker(methodName: "getDate"): Date;
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
