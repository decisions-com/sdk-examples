declare namespace $DP.Mobile.Common {
    import IDatePicker = $DP.Common.IDatePicker;
    import DatePickerOptions = $DP.Common.DatePickerOptions;
    class DatePicker implements IDatePicker {
        private options;
        $input: JQuery;
        private readonly dateFormat;
        constructor(options: DatePickerOptions);
        static create(holder: JQuery, options: DatePickerOptions): DatePicker;
        intialize(): void;
        attachEvents(): void;
        raiseValueChangeEvent(): void;
        setDate(date: string | Date, raiseEvent?: boolean): void;
        getDate(): Date;
        getDateAsync(): Promise<any>;
    }
}
