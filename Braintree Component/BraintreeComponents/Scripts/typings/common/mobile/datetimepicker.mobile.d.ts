declare namespace $DP.Mobile.Common {
    import IDateTimePicker = $DP.Common.IDateTimePicker;
    import DateTimePickerOptions = $DP.Common.DateTimePickerOptions;
    class DateTimePicker implements IDateTimePicker {
        private options;
        readonly dateFormat = "YYYY-MM-DDTHH:mm";
        $input: JQuery;
        constructor(options: DateTimePickerOptions);
        static create(holder: JQuery, options: DateTimePickerOptions): DateTimePicker;
        initialize(): void;
        attachEvents(): void;
        render(): void;
        setDate(date: string | Date, rasieEvent: boolean): void;
        getDate(): Date;
        getDateAsync(): Promise<any>;
        private getFormattedDate;
    }
}
