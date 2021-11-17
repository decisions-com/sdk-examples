/// <reference path="dptree.d.ts" />
/// <reference path="utils/string.utils.d.ts" />
declare namespace $DP.Common {
    import DataDescription = $D.Framework.Design.Flow.Mapping.DataDescription;
    interface DataDefinitionForTree {
        name: string;
        title: string;
        typeName: string;
        isList?: boolean;
        hasChildren?: boolean;
        path?: string;
        textedValue?: string;
        /**
         * Entity related to the tree's node
         */
        entity?: any;
        state?: {
            opened?: boolean;
            selected?: boolean;
        };
    }
    function createDataDefForTree(data: DataDescription, textedValue?: string, path?: string): DataDefinitionForTree;
    interface DataDefinitionTreeOptions {
        host?: JQuery;
        getRootData: (event: {
            origin: DataDefinitionTree;
        }) => Thenable<DataDefinitionForTree[]>;
        getSubData: (path: string) => Thenable<DataDefinitionForTree[]>;
        onDataSelected?: (path: string, entity?: any) => void;
        searchData?: (criteria: string) => Thenable<DataDefinitionForTree[]>;
        searchCriteria?: string;
        onSearch?: (criteria: any) => void;
        extraTreeThemes?: string[];
        onNodeCreated?: (data: DPTreeContext, tree?: DataDefinitionTree) => void;
        alphaSort?: boolean;
        /**
         * Determine should be text shorten if it too long or not
         */
        shortenText?: boolean;
    }
    class DataDefinitionTree {
        private options;
        private tree;
        private selectedDataPath;
        static get MaxSearchResultsNumber(): number;
        constructor(options: DataDefinitionTreeOptions);
        render(): JQuery;
        getSelectedDataPath(): string;
        private loadNodes;
        private searchNodes;
        private createDataDefintionTreeNode;
        static getSampledValueHtml(value: string, shortenText: boolean): string;
        static getDataDefinitionTypeHtml(data: DataDefinitionForTree, shortenText: boolean): string;
        static compareDataDefinitions(a: DataDefinitionForTree, b: DataDefinitionForTree): number;
    }
    interface DataDefinitionPickerOptions extends DataDefinitionTreeOptions {
        noSearch?: boolean;
        height?: number;
    }
    class DataDefinitionPicker {
        private options;
        private treeContainer;
        private tree;
        private root;
        constructor(options: DataDefinitionPickerOptions);
        render(): JQuery;
        private createTree;
        getPickedDataPath(): string;
        getRoot(): JQuery;
        getTree(): DataDefinitionTree;
        getTreeContainer(): JQuery;
    }
    interface DataDefinitionsDialogOptions {
        title?: string;
        onPicked?: (dataPath: string) => void;
        onClosed?: () => void;
        noPick?: boolean;
    }
    function showDataDefinitionsDialog(picker: DataDefinitionPicker, options: DataDefinitionsDialogOptions): void;
}
