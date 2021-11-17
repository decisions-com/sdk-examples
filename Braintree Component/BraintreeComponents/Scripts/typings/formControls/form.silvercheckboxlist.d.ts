declare namespace $DP.Control {
    class SilverCheckBoxList extends ListBase {
        options: Silverdark.Components.SilverCheckBoxListOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverCheckBoxListOptions);
        control: $DP.Common.IListControl;
        initializeControl(): void;
        get showDisableControlOverlay(): boolean;
        setItems(items: DataPair[]): void;
        setSelection(): void;
        getControl(): JQuery;
        get renderDefaultViewOnDesignTime(): boolean;
        renderhtml(): JQuery;
    }
}
