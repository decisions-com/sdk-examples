declare namespace $DP.Common {
    interface GenericTreeOptions {
        host?: JQuery;
        getRoot: () => Promise<any[]>;
        getSub: (path: string) => Promise<any[]>;
        createNode?: (data: any, path?: string, criteria?: string, customLabel?: string) => any;
        onSelected?: (path: string) => void;
        search?: (criteria: string) => Promise<any[]>;
        searchCriteria?: string;
        onSearch?: (criteria: any) => void;
        extraTreeThemes?: string[];
        onNodeCreated?: (data: DPTreeContext) => void;
        compareNodes?: (a: any, b: any) => number;
        initiallySelectedPath?: string;
    }
    class GenericTree {
        private options;
        private tree;
        private selectedPath;
        static get maxSearchResultsNumber(): number;
        constructor(options: GenericTreeOptions);
        render(): JQuery;
        getSelectedDataPath(): string;
        private loadNodes;
        private searchNodes;
        private defaultCreateTreeNode;
        private defaultCompareNodes;
    }
    interface FolderTreeOptions {
        host?: JQuery;
        getRoot: () => Promise<FolderForTree[]>;
        onSelected?: (path: string) => void;
        initiallySelectedPath?: string;
    }
    function createFolderTree(options: FolderTreeOptions): GenericTree;
}
