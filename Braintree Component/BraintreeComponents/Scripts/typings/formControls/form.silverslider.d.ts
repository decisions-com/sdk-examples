declare namespace $DP.Control {
    class SilverSlider extends DataContentBase {
        options: Silverdark.Components.SilverSliderOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverSliderOptions);
        control: $DP.Form.Controls.ISliderControl;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        initializeSlider(): void;
        bindEvents(): void;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        getValue(): $DP.FormHost.DecisionsControlData[];
        getControl(): JQuery;
        renderhtml(): JQuery;
    }
}
