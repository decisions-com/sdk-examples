declare namespace $DP.Control {
    class SilverRichTextDisplay extends FormComponentBase implements $DP.FormHost.IDataConsumer {
        options: Silverdark.Components.SilverRichTextDisplayOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverRichTextDisplayOptions);
        get showDisableControlOverlay(): boolean;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        lastSetValue: string;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        getControl(): JQuery;
        renderOnDesignTime(): JQuery;
        get renderDefaultViewOnDesignTime(): boolean;
        renderhtml(): JQuery;
    }
}
