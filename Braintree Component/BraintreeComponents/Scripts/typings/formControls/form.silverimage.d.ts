declare namespace $DP.Control {
    class SilverImage extends FormComponentBase implements $DP.FormHost.IDataConsumer {
        options: Silverdark.Components.SilverImageOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverImageOptions);
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        controlId: string;
        $image: JQuery;
        lastSetValue: any;
        attachEvents(): void;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        getControl(): JQuery;
        renderhtml(): JQuery;
    }
}
