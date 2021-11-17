/// <reference path="../typings/monaco.d.ts" />
declare namespace $DP.DBQuery {
    interface DBQueryEditorOptions {
        host?: JQuery;
        onCodeChange?: () => void;
        onMounted?: () => void;
        code?: string;
        width?: string | number;
        height?: string | number;
    }
    class DefaultDBQueryEditorOptions implements DBQueryEditorOptions {
        width: string;
        height: string;
    }
    class DBQueryEditor {
        private options;
        private editor;
        private view;
        private editorOptions;
        constructor(options: DBQueryEditorOptions);
        insertAtCursore(text: string): void;
        getSelectedCode(): string;
        getCode(): string;
        setText(text: string): void;
        clear(): void;
        getView(): JQuery;
        focus(): void;
        private createView;
        private createDecisionsTheme;
        private createCodeEditor;
    }
}
