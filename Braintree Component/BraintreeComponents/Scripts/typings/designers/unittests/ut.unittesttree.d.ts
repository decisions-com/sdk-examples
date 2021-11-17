/// <reference path="ut.samples.d.ts" />
/// <reference path="ut.runner.d.ts" />
declare namespace $DP.Designers.Unittests {
    import UnitTest = $D.Framework.Design.Flow.Service.Debugging.UnitTest;
    interface UnitTestTreeOptions {
        apiConfig: ServerApiConfig;
        onUnitTestSelected?: (unittest: UnitTest) => void;
        onAddNewClick: () => void;
        unittestActions?: dpComponents.InlineAction[];
        selectId?: string;
        searchCriteria?: string;
        canRunAll?: boolean;
    }
    class UnitTestTree {
        private options;
        private view;
        private _treeId;
        private treeProps;
        constructor(options: UnitTestTreeOptions);
        get treeId(): string;
        getView(): JQuery;
        clearSelection(): void;
        private get mappingContext();
    }
}
