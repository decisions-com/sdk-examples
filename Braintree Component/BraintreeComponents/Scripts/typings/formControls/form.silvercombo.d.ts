/// <reference path="form.listcontrolbase.d.ts" />
/// <reference path="form.componentbase.d.ts" />
/// <reference path="../Decisions.Controls/Decisions.FormHost.d.ts" />
/// <reference path="../common/combobox/combobox.d.ts" />
/// <reference path="../common/mobile/combobox.mobile.d.ts" />
declare namespace $DP.Control {
    class SilverCombo extends ListBase implements $DP.FormHost.IDataDependentControl {
        options: Silverdark.Components.SilverComboOptions;
        dependentDataNames: string[];
        typedInText: string;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverComboOptions);
        get TypedInTextDataName(): string;
        control: $DP.Common.IComboBox;
        protected updateSelectedWhenItemSourceUpdated: boolean;
        initializeControl(): void;
        getValue(): $DP.FormHost.DecisionsControlData[];
        setItems(items: DataPair[]): void;
        onTypingTextChanged(text: string): void;
        setSelection(): void;
        private toComboItems;
        private toSelectedItem;
        getControl(): JQuery;
        renderhtml(): JQuery;
    }
}
