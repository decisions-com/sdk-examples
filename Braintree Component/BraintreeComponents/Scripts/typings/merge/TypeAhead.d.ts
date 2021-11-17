/// <reference path="../typings/atwho.d.ts" />
declare namespace $DP.Controls.RichText {
    import MergeEditorNode = $D.Framework.Design.Text.MergeEditorNode;
    interface ISearchDataLoader {
        searchNodes(query: string): Promise<MergeEditorNode[]>;
    }
    class TypeAhead {
        private editor;
        private data;
        private insertTpl;
        private cachedData;
        constructor(editor: CKEDITOR.editor, data: (criteria: string) => any, insertTpl: () => any);
        private initializeTypeAhead;
        private getRange;
        private afterMatchFailed;
        private config;
        static displayAtwhoTpl(node: MergeEditorNode): string;
    }
}
