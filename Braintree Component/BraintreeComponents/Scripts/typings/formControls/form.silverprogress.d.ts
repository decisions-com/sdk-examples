declare namespace $DP.Control {
    class SilverProgress extends ContentBase implements $DP.FormHost.IDataConsumer {
        options: Silverdark.Components.SilverProgressOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverProgressOptions);
        value?: number;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        getControl(): JQuery;
        loadProgressBar(): void;
        getPercentValue(): number;
        renderhtml(): JQuery;
    }
}
