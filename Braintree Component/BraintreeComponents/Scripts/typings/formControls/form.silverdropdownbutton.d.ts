/// <reference path="../common/popuplayer.d.ts" />
/// <reference path="form.componentbase.d.ts" />
/// <reference path="form.actioncontrol.d.ts" />
/// <reference path="../typings/jqueryui/jqueryui.d.ts" />
/// <reference path="../Decisions.Controls/Decisions.Controls.d.ts" />
/// <reference path="../Decisions.Controls/Decisions.FormHost.d.ts" />
declare namespace $DP.Control {
    class SilverDropDownButton extends ActionControl implements IActionableFormComponent {
        options: Silverdark.Components.SilverDropDownButtonOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverDropDownButtonOptions);
        $listItemsView: JQuery;
        layer: JQuery;
        outcomePath: string;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        attachEvents(): void;
        getListView(): JQuery;
        selectItem(elemToSelect: JQuery): void;
        toggleList(): void;
        hideLayer(): void;
        selectPath(outcomePath: string): void;
        getControl(): JQuery;
        getActionName(): string;
        raiseClickEvent(): void;
        doAction(): void;
        renderhtml(): JQuery;
    }
}
