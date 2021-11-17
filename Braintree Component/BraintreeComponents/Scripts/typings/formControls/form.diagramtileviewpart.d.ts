declare namespace $DP.Control {
    class DiagramTileViewPart extends SilverPart {
        options: Silverdark.Components.Page.DiagramTileViewPartOptions;
        setValue(data: FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        getValue(): FormHost.DecisionsControlData[];
        getControl(): JQuery;
        constructor($controlLayout: JQuery, options: Silverdark.Components.Page.DiagramTileViewPartOptions);
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        renderhtml(): JQuery;
    }
}
