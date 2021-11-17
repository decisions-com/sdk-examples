/// <reference path="../common/dptree.d.ts" />
/// <reference path="../common/utils/string.utils.d.ts" />
declare namespace $DP.ThemeEditor {
    import ThemeEditVariable = $D.Framework.ServiceLayer.Services.Theme.ThemeEdit.ThemeVariableNode;
    interface ThemeTreeOptions {
        host?: JQuery;
        themeType: string;
        onDataSelected?: (data: $DP.Common.DPTreeContext, themeVariable: ThemeEditVariable) => void;
        searchCriteria?: string;
        scrollExpandedNode?: boolean;
    }
    class ThemeTree {
        private options;
        private tree;
        private selectedDataPath;
        private themeService;
        static get MaxSearchResultsNumber(): number;
        constructor(options: ThemeTreeOptions);
        render(): JQuery;
        getSelectedDataPath(): string;
        setSelectedNodeValue(themeVariable: ThemeEditVariable): void;
        setScrollExpandedNode(value: boolean): void;
        private loadNodes;
        private getRootData;
        private filterRootCategories;
        private getSubData;
        private searchData;
        private onNodeCreated;
        private getTheme;
        private filterThemeResult;
        private sortResults;
        private convertValueToNode;
        private convertCategoryToNode;
        private searchNodes;
        private createTreeNode;
        private updateNodeText;
        private getNodeValueHtml;
        private compareThemeVariables;
        private compareThemeCategoryNames;
        private compareTreeNodes;
    }
    interface ThemeTreePickerOptions extends ThemeTreeOptions {
        height?: number;
        onSearch?: () => void;
    }
    class ThemeTreePicker {
        private options;
        private treeContainer;
        private tree;
        private root;
        constructor(options: ThemeTreePickerOptions);
        render(): JQuery;
        private createTree;
        setSelectedNodeValue(themeVariable: ThemeEditVariable): void;
        getPickedDataPath(): string;
        getRoot(): JQuery;
        getTree(): ThemeTree;
        getTreeContainer(): JQuery;
    }
}
