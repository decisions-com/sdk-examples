declare namespace $DP.Control {
    class SilverNumberBox extends DataContentBase implements FormHost.IBeforeFormSubmit {
        options: Silverdark.Components.SilverNumberBoxOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverNumberBoxOptions);
        protected isvalueChanged: boolean;
        control: $DP.Form.Controls.NumberBox;
        value: number;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        initializeControl(): void;
        getValue(): $DP.FormHost.DecisionsControlData[];
        setValue(data: $DP.FormHost.DecisionsControlData[]): boolean;
        onEnablityChange(isEnable: boolean): void;
        getControl(): JQuery;
        renderhtml(): JQuery;
        onBeforeSubmit(): void;
    }
    enum NumericBoxOutputType {
        OutputAsDouble = 0,
        OutputAsInt = 1,
        OutputAsDecimal = 2
    }
}
