declare namespace $DP.Control {
    class SilverFormSteps extends ContentBase {
        options: Silverdark.Components.SilverFormStepsOptions;
        $view: JQuery;
        steps?: string[];
        selectedStep?: string;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverFormStepsOptions);
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        get listHolder(): JQuery;
        renderView(): void;
        get renderDefaultViewOnDesignTime(): boolean;
        renderhtml(): JQuery;
        getView(): JQuery;
        setSelected(selectedStepName: string): void;
        getStepView(stepName: string): string;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        getValue(): $DP.FormHost.DecisionsControlData[];
        getControl(): JQuery;
    }
}
