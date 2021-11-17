declare namespace $DP.Common {
    interface CalendarOptions {
        holder?: JQuery;
        inline?: boolean;
        showOn?: JQuery;
        onSelect: (dateText: string) => void;
        format?: string;
        value?: string;
        showOtherMonths?: boolean;
        selectOtherMonths?: boolean;
        showButtonPanel?: boolean;
        currentText?: string;
        closeText?: string;
        numberOfMonths?: number;
        showOptions?: any;
        calendarClass?: string;
        dayNamesMin?: string[];
        monthNames?: string[];
        monthNamesShort?: string[];
        dayNames?: string[];
        onLayerShown?: (layer: PopupLayer) => void;
    }
    class Calendar {
        private options;
        private $calendar;
        private popupLayer;
        constructor(options: CalendarOptions);
        get view(): JQuery;
        get dateFormat(): string;
        create(): void;
        attachCalendarEvents(): void;
        renderYearForCalender(): void;
        navigateYear(type: NavigationType): void;
        getYearView(yearRangeStart: number): string;
        selectYear(year: number): void;
        getMonthView(): string;
        renderMonthForCalendar(): void;
        navigateMonth(type: NavigationType): void;
        selectMonth(month: number): void;
        updateTabIndex(): void;
        setDate(date: string | Date, raiseEvent?: boolean): void;
        getDate(): Date;
        positionCalendar(inputElement: JQuery, calendarElement?: JQuery): void;
        remove(): void;
    }
}
interface JQuery {
    calendar(options: $DP.Common.CalendarOptions): JQuery;
    calendar(methodName: 'setDate', date: string | Date): void;
    calendar(methodName: 'setDate', date: string | Date, raiseEvent: boolean): void;
    calendar(methodName: 'getDate'): Date;
}
