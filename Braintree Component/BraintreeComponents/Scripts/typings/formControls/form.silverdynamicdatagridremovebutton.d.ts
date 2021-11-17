declare namespace $DP.Control {
    class SilverDynamicDataGridRemoveButton extends ContentBase implements IActionableFormComponent {
        options: Silverdark.Components.SilverDynamicDataGridRemoveButtonOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverDynamicDataGridRemoveButtonOptions);
        getControl(): JQuery;
        doAction(): void;
        renderhtml(): JQuery;
    }
}
