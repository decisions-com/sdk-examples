declare namespace $DP.Control {
    class DataRepeaterAddButton extends ContentBase implements IActionableFormComponent {
        options: Silverdark.Components.DataRepeaterAddButtonOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.DataRepeaterAddButtonOptions);
        getControl(): JQuery;
        doAction(): void;
        renderhtml(): JQuery;
    }
    class DataRepeaterRemoveButton extends ContentBase implements IActionableFormComponent {
        options: Silverdark.Components.DataRepeaterRemoveButtonOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.DataRepeaterRemoveButtonOptions);
        getControl(): JQuery;
        doAction(): void;
        renderhtml(): JQuery;
    }
}
