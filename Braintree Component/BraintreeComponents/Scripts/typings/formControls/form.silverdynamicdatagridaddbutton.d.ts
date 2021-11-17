declare namespace $DP.Control {
    class SilverDynamicDataGridAddButton extends ContentBase implements IActionableFormComponent {
        options: Silverdark.Components.SilverDynamicDataGridAddButtonOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverDynamicDataGridAddButtonOptions);
        getControl(): JQuery;
        doAction(): void;
        renderhtml(): JQuery;
    }
}
