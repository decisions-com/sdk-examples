declare namespace $DP.Control {
    class SilverMultiSelectDropDown extends SilverCombo {
        private multiSelectControl;
        get isControlSupportedInMobile(): boolean;
        get controlName(): string;
        get showDisableControlOverlay(): boolean;
        initializeControl(): void;
        onEnablityChange(isEnable: boolean): void;
        setItems(items: DataPair[]): void;
        setSelection(): void;
        getControl(): JQuery;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        getValue(): $DP.FormHost.DecisionsControlData[];
        private getOutsideValues;
        private isOutsideValue;
        renderhtml(): JQuery;
    }
}
