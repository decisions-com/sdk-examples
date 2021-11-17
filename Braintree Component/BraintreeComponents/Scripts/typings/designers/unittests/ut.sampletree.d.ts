/// <reference path="ut.samples.d.ts" />
/// <reference path="ut.runner.d.ts" />
declare namespace $DP.Designers.Unittests {
    import SampleForTree = $D.Framework.Design.Flow.Service.Debugging.Samples.SampleForTree;
    import SampleCategory = $D.Framework.Design.Flow.Service.Debugging.Samples.SampleCategory;
    interface SampleTreeOptions {
        apiConfig: ServerApiConfig;
        onSampleSelected?: (sample: SampleForTree) => void;
        onCategorySelected?: (sampleCategory: SampleCategory) => void;
        onAddNewClick: () => void;
        sampleActions?: dpComponents.InlineAction[];
        categoryActions?: dpComponents.InlineAction[];
        selectId?: string;
        defaultId?: string;
        searchCriteria?: string;
    }
    class SampleTree {
        private options;
        private view;
        private _treeId;
        private treeProps;
        constructor(options: SampleTreeOptions);
        get treeId(): string;
        getView(): JQuery;
        clearSelection(): void;
        private get mappingContext();
    }
}
