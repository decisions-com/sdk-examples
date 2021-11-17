declare namespace $DP.Control {
    abstract class OpenUrlControlBase extends ContentButtonBase implements FormHost.IDataConsumer, IActionableFormComponent {
        options: Silverdark.Components.OpenURLComponents.BaseOpenURLOptions;
        toolbar?: string;
        constructor($controlLayout: JQuery, options: Silverdark.Components.OpenURLComponents.BaseOpenURLOptions);
        lastSetValue: string;
        $button: JQuery;
        abstract getButton(): JQuery;
        get windowOptions(): string;
        get url(): string;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        bindEvents(): void;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        getValue(): $DP.FormHost.DecisionsControlData[];
        doAction(): void;
    }
}
