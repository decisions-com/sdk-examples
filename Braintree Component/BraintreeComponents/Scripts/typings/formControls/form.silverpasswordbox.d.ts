declare namespace $DP.Control {
    class SilverPasswordBox extends DataContentBase {
        options: Silverdark.Components.SilverPasswordBoxOptions;
        input: JQuery;
        typingTimer: any;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        bindEvents(): void;
        renderhtml(): JQuery;
        setValue(data: FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        getValue(): FormHost.DecisionsControlData[];
        getControl(): JQuery;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverPasswordBoxOptions);
    }
}
