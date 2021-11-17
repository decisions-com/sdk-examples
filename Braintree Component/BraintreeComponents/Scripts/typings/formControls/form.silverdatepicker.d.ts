declare namespace $DP.Control {
    class SilverDatePicker extends DataContentBase implements $DP.FormHost.IAsyncDataProducer {
        options: Silverdark.Components.SilverDatePickerOptions;
        _datePickerInputBox: JQuery;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverDatePickerOptions);
        control: $DP.Common.IDatePicker;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        getValue(): $DP.FormHost.DecisionsControlData[];
        private getControlValue;
        getValueAsync(): Promise<FormHost.DecisionsControlData[]>;
        isValidDate(date: any): boolean;
        getControl(): JQuery;
        get datePickerInputBox(): JQuery;
        renderhtml(): JQuery;
    }
}
