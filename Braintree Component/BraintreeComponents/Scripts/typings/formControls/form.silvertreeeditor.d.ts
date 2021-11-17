declare namespace $DP.Control {
    interface TreeEditorNode {
        Name: string;
        Path: string;
        IsRootNode: boolean;
        HasChildren: boolean;
        IsExpanded: boolean;
        IsSelected: boolean;
    }
    class SilverTreeEditor extends ListBase {
        options: Silverdark.Components.SilverTreeEditorOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverTreeEditorOptions);
        private tree;
        private nodes;
        initializeControl(): void;
        renderhtml(): JQuery;
        get isControlSupportedInMobile(): boolean;
        get controlName(): string;
        private createTree;
        private loadNodes;
        private createTreeNode;
        setSelection(): void;
        setItems(items: DataPair[]): void;
        get selectedItem(): string[];
        getControl(): JQuery;
    }
}
