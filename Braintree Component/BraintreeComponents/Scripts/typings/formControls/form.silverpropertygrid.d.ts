declare namespace $DP.Control {
    class SilverPropertyGrid extends FormComponentBase implements $DP.FormHost.IDataConsumer {
        options: Silverdark.Components.SilverPropertyGridOptions;
        propertyGrid: $DP.PropertyGrid.PropertyGrid;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverPropertyGridOptions);
        lastSetValue: any;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        /**
         * Because property nodes are no longer coming down as pre-rendered HTML, some of the parsing
         * and setup needs to happen _after_ we have fetched the context provider snapshot.
         */
        onSetValue(): void;
        updatePropertyGridView(data: any): void;
        getControl(): JQuery;
        renderhtml(): JQuery;
    }
}
