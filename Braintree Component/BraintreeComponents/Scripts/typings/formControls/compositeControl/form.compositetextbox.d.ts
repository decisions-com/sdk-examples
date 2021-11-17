declare namespace $DP.Control {
    class CompositeTextBox extends DataContentBase implements FormHost.IBeforeFormSubmit, $DP.FormHost.ICopyTextSourceControl {
        options: Silverdark.Components.SilverTextBoxOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverTextBoxOptions);
        getText(): string;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        typingTimer: any;
        isValueChanged: boolean;
        input: JQuery;
        bindEvents(): void;
        private setTextValue;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        getValue(): $DP.FormHost.DecisionsControlData[];
        getControl(): JQuery;
        renderhtml(): JQuery;
        onBeforeSubmit(): void;
    }
}
