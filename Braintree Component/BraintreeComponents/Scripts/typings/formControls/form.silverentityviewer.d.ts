declare namespace $DP.Control {
    class SilverEntityViewer extends ContentBase {
        options: Silverdark.Components.SilverEntityViewerOptions;
        readonly instanceId: string;
        private entityID;
        private entityTypeName;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverEntityViewerOptions);
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        get renderDefaultViewOnDesignTime(): boolean;
        renderhtml(): JQuery;
        getRowsAndDescription(): void;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        getValue(): $DP.FormHost.DecisionsControlData[];
        getControl(): JQuery;
    }
}
