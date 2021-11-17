declare namespace $DP.Mobile.Common {
    import TimePickerOptions = $DP.Common.TimePickerOptions;
    import ITimePicker = $DP.Common.ITimePicker;
    class TimePicker implements ITimePicker {
        private options;
        private $input;
        readonly timeFormat = "h:mm:ss A";
        constructor(options: TimePickerOptions);
        static create(holder: JQuery, options: TimePickerOptions): TimePicker;
        initialize(): void;
        render(): void;
        private getDefaultTime;
        attachEvents(): void;
        private raiseEvent;
        setTime(time: string | number, raiseEvent?: boolean): void;
        getTime(): string;
    }
}
