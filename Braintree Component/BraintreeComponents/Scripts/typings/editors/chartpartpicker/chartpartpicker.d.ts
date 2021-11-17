/**
 * Author: ravi.tiwari@waveinfotech.com.com
 * Notes: unauthorized, unlicensed use, redistribution, modification is not allowed.
*/
/// <reference path="../../common/combobox/combobox.d.ts" />
declare namespace $DP.Editors {
    import DataPair = $D.Framework.ServiceLayer.Services.ContextData.DataPair;
    class ChartPartPicker {
        private host;
        private editingContextId;
        private dataPath;
        private availableCharts;
        private selectedValue;
        comboBoxItems: $DP.Common.ComboBoxItem[];
        selectedItem: $DP.Common.ComboBoxItem;
        comboBoxOptions: $DP.Common.ComboBoxOptions;
        constructor(host: JQuery, editingContextId: string, dataPath: string[], availableCharts: DataPair[], selectedValue: string);
        addComboBoxItems(): void;
        onSelected: (item: $DP.Common.ComboBoxItem) => boolean;
        getSelectedItem(): Common.ComboBoxItem;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
