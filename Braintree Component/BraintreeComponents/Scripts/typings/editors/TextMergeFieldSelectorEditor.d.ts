/**
 * Author:huzefa.ezzi@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Editors {
    class TextMergeFieldSelectorEditor {
        $Target: JQuery;
        TextMergeSessionId: string;
        private allowedTypes;
        private editingContext;
        private dataPath;
        private value;
        dropDown: $DP.Common.Merge.MergeFieldSelector;
        $FieldContainer: JQuery;
        constructor($Target: JQuery, TextMergeSessionId: string, allowedTypes: string[], editingContext: string, dataPath: string[], value: string);
        Initialize(): void;
    }
    class TextMergeFieldSelectorDataLoader extends $DP.Controls.RichText.AbstractDataDescriptionsLoader implements $DP.Controls.RichText.IMergeWithDynamicDataLoader, $DP.Controls.RichText.IMergeSelector {
        MergeFieldSelectorEditor: TextMergeFieldSelectorEditor;
        TextMergeSessionId: string;
        constructor(MergeFieldSelectorEditor: TextMergeFieldSelectorEditor);
        GetDescriptionsAsync(path: string): JQueryPromise<$D.Framework.Design.Flow.Mapping.DataDescription[]>;
        LoadDynamicCategories(path: string): JQueryPromise<$D.Framework.Design.Text.DynamicTreeNode[]>;
        LoadDynamicData(path: string): JQueryPromise<$D.Framework.Design.Text.DynamicTreeNode[]>;
        GetAutoExpandedNodes(): string[];
        GetAutoSelectNode(): string;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
