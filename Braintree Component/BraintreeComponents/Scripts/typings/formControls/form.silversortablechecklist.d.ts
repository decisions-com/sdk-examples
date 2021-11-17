declare namespace $DP.Control {
    class SilverSortableCheckBoxList extends ListBase {
        options: Silverdark.Components.SilverSortableCheckBoxListOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverSortableCheckBoxListOptions);
        private control;
        initializeControl(): void;
        setSelection(): void;
        get showDisableControlOverlay(): boolean;
        getControl(): JQuery;
        setItems(items: DataPair[]): void;
        get renderDefaultViewOnDesignTime(): boolean;
        renderhtml(): JQuery;
    }
}
/**
 * Author:akash.singh@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
