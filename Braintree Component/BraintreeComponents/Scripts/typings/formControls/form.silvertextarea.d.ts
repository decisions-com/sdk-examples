declare namespace $DP.Control {
    class SilverTextArea extends DataContentBase implements $DP.FormHost.ICopyTextSourceControl {
        options: Silverdark.Components.SilverTextAreaOptions;
        private isValueChanged;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverTextAreaOptions);
        getText(): string;
        get $textArea(): JQuery;
        get showDisableControlOverlay(): boolean;
        onEnablityChange(isEnable: boolean): void;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        typingTimer: any;
        labelStyle: string;
        bindEvents(): void;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        getValue(): $DP.FormHost.DecisionsControlData[];
        getControl(): JQuery;
        renderhtml(): JQuery;
    }
}
