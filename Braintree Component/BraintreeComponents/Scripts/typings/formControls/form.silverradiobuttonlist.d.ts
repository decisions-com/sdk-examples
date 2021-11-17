declare namespace $DP.Control {
    class SilverRadioButtonList extends ListBase {
        options: Silverdark.Components.SilverRadioButtonListOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverRadioButtonListOptions);
        control: $DP.Common.RadioButtonList;
        get showDisableControlOverlay(): boolean;
        initializeControl(): void;
        setSelection(): void;
        getControl(): JQuery;
        setItems(items: DataPair[]): void;
        get renderDefaultViewOnDesignTime(): boolean;
        renderhtml(): JQuery;
    }
}
