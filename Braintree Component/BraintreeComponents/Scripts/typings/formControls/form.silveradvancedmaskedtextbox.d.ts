declare namespace $DP.Control {
    class SilverAdvancedMaskedTextBox extends DataContentBase implements FormHost.IBeforeFormSubmit {
        options: Silverdark.Components.SilverAdvancedMaskedTextBoxOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverAdvancedMaskedTextBoxOptions);
        control: Common.MaskedTextBox;
        private isvalueChanged;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        getValue(): $DP.FormHost.DecisionsControlData[];
        getControl(): JQuery;
        renderhtml(): JQuery;
        onBeforeSubmit(): void;
    }
}
