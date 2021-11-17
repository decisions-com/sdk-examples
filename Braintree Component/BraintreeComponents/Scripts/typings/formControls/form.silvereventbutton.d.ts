declare namespace $DP.Control {
    class SilverEventButton extends ContentBase implements IActionableFormComponent, $DP.FormHost.IDataConsumer {
        options: Silverdark.Components.SilverEventButtonOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverEventButtonOptions);
        $button: JQuery;
        buttonHolderStyle: string;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        getControl(): JQuery;
        doAction(): void;
        buildStyle(): void;
        setValue(data: FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        renderhtml(): JQuery;
    }
}
