/**
 * Author:ismail.bohri@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Common {
    export import TimeFormat = $D.Framework.ServiceLayer.Services.Portal.TimeFormats;
    interface DateTimePickerOptions extends DateTimePickerStyleOptions {
        defaultValue?: string;
        timeFormatType?: TimeFormat;
        timePickerDisplay?: string;
        format: string;
        holder?: JQuery;
        autoSubmitInterval?: number;
        tabIndex?: number;
        onValueChange?: (date: Date) => void;
        onCalendarClose?: (date: Date) => void;
        containerClass?: string;
        onEnter?: () => void;
        onExit?: () => void;
        dayNamesMin?: string[];
        monthNames?: string[];
        monthNamesShort?: string[];
        hourLabelText?: string;
        minuteLabelText?: string;
        todayLinkText?: string;
        clearLinkText?: string;
        nowLinkText?: string;
        dayNames?: string[];
        allowNull?: boolean;
        updateInvalidTextWithPreviousDate?: boolean;
        onLayerShown?: (event: {
            layer: PopupLayer;
            origin: DateTimePicker;
        }) => void;
    }
    class DateTimePickerDefaultOptions implements DateTimePickerOptions {
        updateInvalidTextWithPreviousDate: boolean;
        format: "";
    }
    interface DateTimePickerStyleOptions {
        textBoxCssClass?: string;
        buttonCssClass?: string;
        calendarCssClass?: string;
        timePickerCssClass?: string;
        layerCssClass?: string;
        fontStyle?: string;
    }
    interface IDateTimePicker {
        setDate(date: string | Date, rasieEvent: boolean): any;
        getDate(): Date;
        getDateAsync(): Promise<any>;
    }
    class DateTimePicker implements IDateTimePicker {
        private options;
        $view: JQuery;
        $picker: JQuery;
        $timePicker: JQuery;
        $icon: JQuery;
        $input: JQuery;
        $calendar: JQuery;
        suggestionToolTip: DateSuggestionToolTip;
        private timePicker;
        readonly instanceId: string;
        keydownTimer: number;
        suggestionTimer: number;
        isInitialized: boolean;
        value: moment.Moment;
        private setDatePromise;
        zIndex: number;
        calendar: $DP.Common.Calendar;
        private selectedTime;
        constructor(options: DateTimePickerOptions);
        private _dateFormat;
        get dateFormat(): string;
        private _timeFormat;
        get timeFormat(): string;
        get format(): string;
        create(): this;
        renderView(): void;
        attachEvents(): void;
        initializeDatePicker(): void;
        validateAndSetDate(dateText: string, setdate?: boolean): JQueryDeferred<any>;
        setDate(date: string | Date, rasieEvent?: boolean): void;
        hideDateTimePicker(): void;
        showDateTimePicker(): void;
        private makeSelectedHourAndMinuteVisible;
        getDate(): Date;
        getDateAsync(): Promise<any>;
        getFormattedDateTimeString(dateTime: string | moment.Moment | Date): string;
    }
}
interface DateTimeEditor {
    datetimepicker(option: $DP.Common.DateTimePickerOptions): $DP.Common.DateTimePicker;
    datetimepicker(methodName: "setDate", date: string | Date): void;
    datetimepicker(methodName: "setDate", date: string | Date, raiseEvent: boolean): void;
    datetimepicker(methodName: "getDate"): Date;
    datetimepicker(methodName: string, option?: any): any;
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
