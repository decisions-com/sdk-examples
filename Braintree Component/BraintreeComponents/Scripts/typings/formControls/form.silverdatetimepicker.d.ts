declare namespace $DP.Control {
    class SilverDateTimePicker extends DataContentBase implements $DP.FormHost.IAsyncDataProducer {
        options: Silverdark.Components.SilverDateTimePickerOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverDateTimePickerOptions);
        control: $DP.Common.IDateTimePicker;
        private _dateTimeTextBox;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        getValue(): $DP.FormHost.DecisionsControlData[];
        private getControlValue;
        getValueAsync(): Promise<FormHost.DecisionsControlData[]>;
        isValidDateTime(dateTime: any): boolean;
        getControl(): JQuery;
        clearDateTimePicker(): boolean;
        getCurrentDateTimeFormat(): string;
        get dateTimeTextBox(): JQuery;
        renderhtml(): JQuery;
    }
}
