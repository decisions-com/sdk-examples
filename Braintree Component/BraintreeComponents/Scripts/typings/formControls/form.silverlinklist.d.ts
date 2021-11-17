declare namespace $DP.Control {
    class SilverLinkList extends ListBase implements $DP.FormHost.DecisionsActionControl {
        options: Silverdark.Components.SilverLinkListOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverLinkListOptions);
        get showDisableControlOverlay(): boolean;
        private control;
        initializeControl(): void;
        raiseEvent(...events: $DP.FormHost.DecisionsControlEvent[]): void;
        setSelection(): void;
        setItems(items: DataPair[]): void;
        getControl(): JQuery;
        rasieClickEvent(): void;
        getActionName(): string;
        get renderDefaultViewOnDesignTime(): boolean;
        renderhtml(): JQuery;
    }
}
