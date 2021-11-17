/**
 * Author:ravi.tiwari@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../editors/SuggestionBox.d.ts" />
/// <reference path="../merge/MergeTreeDataLoader.d.ts" />
/// <reference path="../common/combobox/comboboxitem.d.ts" />
/// <reference path="../common/combobox/comboboxfield.d.ts" />
import ReportFieldsCalcMergeDataLoader = $DP.Designers.Reports.ReportFieldsCalcMergeDataLoader;
import ReportImagesDataLoader = $DP.Designers.Reports.ReportImagesDataLoader;
declare module $DP.Editors {
    interface ComboPickerOptions extends $DP.Common.ComboBoxOptions {
        reportContextId: string;
        isImageDataLoader: boolean;
        editingContext: string;
        dataPath: string[];
    }
    class ReportFieldSelector extends $DP.Common.ComboBox {
        selectDialog: ReportFieldSelectorDialog;
        SelectedFieldName: string;
        SelectedFieldTitle: string;
        ExpandedNode: string;
        editingContext: string;
        dataPath: string[];
        dataLoader: ReportFieldsCalcMergeDataLoader;
        treeModel: $DP.Controls.RichText.MergeEditorDataTreeModel;
        isImageDataLoader: boolean;
        hideReportFieldOptions: boolean;
        constructor(options: ComboPickerOptions);
        get SelectorDialog(): ReportFieldSelectorDialog;
        get RootElement(): JQuery;
        get Content(): JQuery;
        EnsureDialog(): void;
        RaiseSelectionChanged(): void;
        SelectedElementChanged: (fieldName: any, fieldTitle: any) => void;
        GetAutoSelectNode(): string;
        UpdateSelection(fieldTitle: string, fieldName?: string, raiseChange?: boolean): void;
        HideDropDown(): void;
        getLayerConent(): JQuery;
    }
    class ReportFieldSelectorDialog {
        ReportFieldSelector: ReportFieldSelector;
        target: JQuery;
        treeModel: $DP.Controls.RichText.MergeEditorDataTreeModel;
        constructor(ReportFieldSelector: ReportFieldSelector);
        Destory(): void;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
