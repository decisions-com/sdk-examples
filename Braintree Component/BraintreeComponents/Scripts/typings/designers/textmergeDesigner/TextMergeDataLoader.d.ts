/**
 * Author:huzefa.ezzi@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../../typings/core/generated/textmergeeditservice.d.ts" />
/// <reference path="../../typings/core/generated/textmergeservice.d.ts" />
/// <reference path="../common/mappingcontext.d.ts" />
declare namespace $DP.Designers.TextMerge {
    import IMergeWithCalculatedDataLoader = $DP.Controls.RichText.IMergeWithCalculatedDataLoader;
    import ISearchDataLoader = $DP.Controls.RichText.ISearchDataLoader;
    import DynamicTreeNode = $D.Framework.Design.Text.DynamicTreeNode;
    import MergeEditorNode = $D.Framework.Design.Text.MergeEditorNode;
    class BaseTextMergeDataLoader extends $DP.Controls.RichText.AbstractDataDescriptionsLoader {
        TextMergeSessionId: string;
        constructor(TextMergeSessionId: string);
        GetDescriptionsAsync(path: string): JQueryPromise<$D.Framework.Design.Flow.Mapping.DataDescription[]>;
        LoadDynamicCategories(path: string): JQueryPromise<DynamicTreeNode[]>;
        LoadDynamicData(path: string): JQueryPromise<DynamicTreeNode[]>;
    }
    class TextMergeDataLoader extends BaseTextMergeDataLoader implements IMergeWithCalculatedDataLoader, ISearchDataLoader {
        TextMergeSessionId: string;
        constructor(TextMergeSessionId: string);
        LoadCalculateData(): JQueryPromise<string[]>;
        searchNodes(query: string): Promise<MergeEditorNode[]>;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
