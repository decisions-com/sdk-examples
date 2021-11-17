declare namespace $DP.Control {
    class SilverTimePicker extends DataContentBase {
        options: Silverdark.Components.SilverTimePickerOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverTimePickerOptions);
        control: $DP.Common.ITimePicker;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        getFormattedValue(time: any): string;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        getValue(): $DP.FormHost.DecisionsControlData[];
        getControl(): JQuery;
        renderhtml(): JQuery;
    }
}
