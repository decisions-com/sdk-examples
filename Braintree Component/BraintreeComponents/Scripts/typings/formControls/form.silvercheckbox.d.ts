declare namespace $DP.Control {
    class SilverCheckBox extends DataContentBase {
        options: Silverdark.Components.SilverCheckBoxOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverCheckBoxOptions);
        control: Common.CheckBox;
        checkBoxView: JQuery;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        getValue(): $DP.FormHost.DecisionsControlData[];
        getControl(): JQuery;
        renderhtml(): JQuery;
    }
}
