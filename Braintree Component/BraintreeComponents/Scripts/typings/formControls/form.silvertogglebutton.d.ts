declare namespace $DP.Control {
    class SilverToggleButton extends DataContentBase implements IActionableFormComponent {
        options: Silverdark.Components.SilverToggleButtonOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverToggleButtonOptions);
        control: $DP.Common.ToggleButton;
        $toggleButton: JQuery;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        getValue(): $DP.FormHost.DecisionsControlData[];
        getControl(): JQuery;
        doAction(): any;
        renderhtml(): JQuery;
    }
}
