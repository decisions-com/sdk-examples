declare namespace $DP.Control {
    class SilverNumberSpinner extends DataContentBase implements $DP.FormHost.IAsyncDataConsumer {
        options: Silverdark.Components.SilverNumberSpinnerOptions;
        private isvalueChanged;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverNumberSpinnerOptions);
        control: $DP.Common.NumberSpinner;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        bindEvents(): void;
        getValue(): $DP.FormHost.DecisionsControlData[];
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        setValueAsync(data: $DP.FormHost.DecisionsControlData[]): Promise<boolean>;
        getControl(): JQuery;
        renderhtml(): JQuery;
    }
}
