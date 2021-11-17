declare namespace $DP.Control {
    class SilverCurrencyBox extends SilverNumberBox {
        options: Silverdark.Components.SilverCurrencyBoxOptions;
        control: $DP.Form.Controls.NumberBox;
        value: number;
        numberAlignmentStyle: string;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverCurrencyBoxOptions);
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        intializeControl(): void;
        getValue(): $DP.FormHost.DecisionsControlData[];
        setValue(data: $DP.FormHost.DecisionsControlData[]): boolean;
        getControl(): JQuery;
        renderhtml(): JQuery;
    }
}
