declare namespace $DP.Control {
    class SilverList extends ListBase {
        options: Silverdark.Components.SilverListOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverListOptions);
        get showDisableControlOverlay(): boolean;
        private control;
        initializeControl(): void;
        setItems(items: DataPair[]): void;
        setSelection(): void;
        getControl(): JQuery;
        get renderDefaultViewOnDesignTime(): boolean;
        renderhtml(): JQuery;
    }
}
