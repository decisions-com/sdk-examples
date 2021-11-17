/**
 * Author:huzefa.ezzi@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../typings/core/generated/textmergeeditservice.d.ts" />
/// <reference path="../typings/core/generated/textmergeservice.d.ts" />
/// <reference path="../designers/common/mappingcontext.d.ts" />
declare namespace $DP.Controls.RichText {
    import DataDescription = $D.Framework.Design.Flow.Mapping.DataDescription;
    import DynamicTreeNode = $D.Framework.Design.Text.DynamicTreeNode;
    import MergeEditorNode = $D.Framework.Design.Text.MergeEditorNode;
    interface IMergeDataLoader {
        LoadData(path: string): JQueryPromise<DataDescription[]>;
    }
    interface IMergeFieldsValidation {
        getMissingFields(rawInputString: string): Promise<string[]>;
    }
    enum MergeTextType {
        Plain = 0,
        HTML = 1,
        PDF = 2,
        DOC = 3
    }
    interface IMergeWithDynamicDataLoader extends IMergeDataLoader {
        LoadDynamicCategories(path: string): JQueryPromise<DynamicTreeNode[]>;
        LoadDynamicData(path: string): JQueryPromise<DynamicTreeNode[]>;
    }
    interface IMergeWithCalculatedDataLoader extends IMergeDataLoader {
        LoadCalculateData(): JQueryPromise<string[]>;
    }
    interface IMergeExpander extends IMergeDataLoader {
        GetAutoExpandedNodes(): string[];
    }
    interface IMergeSelector extends IMergeExpander {
        GetAutoSelectNode(): string;
    }
    class AbstractDataDescriptionsLoader implements IMergeDataLoader, IMergeExpander {
        constructor();
        private allowedTypes;
        get AllowedTypes(): string[];
        set AllowedTypes(allowedTypes: string[]);
        private restrictTypes;
        get RestrictTypes(): boolean;
        set RestrictTypes(restrictTypes: boolean);
        LoadData(path: string): JQueryPromise<DataDescription[]>;
        private SortAndRestrictData;
        private IsTypeAllowed;
        GetAutoExpandedNodes(): string[];
        GetDescriptionsAsync(path: string): JQueryPromise<DataDescription[]>;
    }
    class MergeTextEditorDataLoader extends AbstractDataDescriptionsLoader implements IMergeWithDynamicDataLoader, ISearchDataLoader, IMergeFieldsValidation {
        private context;
        private iconsFilter;
        private mergeDataType;
        constructor(context: $DP.Common.MappingContext, allowFormating: boolean, iconsFilter?: string[]);
        private dataDescriptionDeffer;
        private GetRootDataDescription;
        GetDescriptionsAsync(path: string): JQueryPromise<DataDescription[]>;
        private Intersec;
        LoadDynamicCategories(path: string): JQueryPromise<DynamicTreeNode[]>;
        LoadDynamicData(path: string): JQueryPromise<DynamicTreeNode[]>;
        private filterIcons;
        searchNodes(query: string): Promise<MergeEditorNode[]>;
        getMissingFields(rawInputString: string): Promise<string[]>;
    }
    enum MergeEditorNodeType {
        Category = 0,
        Data = 1,
        DynamicData = 2,
        CalculatedData = 3
    }
    class MergeEditorDataTreeModel {
        private treeContainer;
        private loader;
        static DATA_NODE_NAME: string;
        static CALCULATED_FIELDS_NODE_NAME: string;
        static FLOW_CONSTANTS_NODE_NAME: string;
        static SYSTEM_CONSTANTS_NODE_NAME: string;
        constructor(treeContainer: JQuery, loader: IMergeDataLoader);
        tree: $DP.Common.DPTree;
        get TreeContainer(): JQuery;
        TreeLoader(elem: JQuery, onNodeSelect?: (node: $DP.Common.DPTreeContext) => void, afterNodeOpen?: (node: $DP.Common.DPTreeContext) => void, selectedPath?: string): $DP.Common.DPTree;
        private loadNodes;
        private expand;
        Initialize(): void;
        GetNodeTypeFromNode(node: JQuery): MergeEditorNodeType;
        loadData(context: $DP.Common.DPTreeContext): Promise<Array<$DP.Common.DPTreeNode>>;
        private getNodesFromDataDescriptions;
        getNodeText(text: string): string;
        getNodeTextFromDataDescription(value: $D.Framework.Design.Flow.Mapping.DataDescription): string;
        hasCaculatedData(): JQueryPromise<boolean>;
        getRootNodes(): Promise<Array<$DP.Common.DPTreeNode>>;
        destory(): void;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
