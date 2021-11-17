declare namespace $DP.Control {
    class SilverAutoCompleteBox extends ListBase {
        options: Silverdark.Components.SilverAutoCompleteBoxOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverAutoCompleteBoxOptions);
        control: $DP.Common.AutoCompleteBox;
        source: DataPair[];
        selected: string[];
        initialItems: any;
        initialSelectedItem: any;
        isInitialized: boolean;
        initializeControl(): void;
        setItems(items: DataPair[]): void;
        toListControlItem(items: DataPair[]): $DP.Control.ListControlItem[];
        setSelection(): void;
        private markSelectedItem;
        getControl(): JQuery;
        get renderDefaultViewOnDesignTime(): boolean;
        renderhtml(): JQuery;
    }
}
