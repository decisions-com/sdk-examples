declare namespace $DP.Editors {
    interface BoolEditorOptions {
        instanceId: string;
        contextId: string;
        isMobile?: boolean;
        editingContextID?: string;
        path?: string;
        currentValue: boolean;
    }
    class BoolEditor {
        private options;
        boolEditorContainer: JQuery;
        editor: JQuery;
        label: JQuery;
        checkBox: JQuery;
        constructor(options: BoolEditorOptions);
        private initialize;
        private attachEvents;
        private markTrue;
        private markFalse;
        private removeNull;
        private get isTrue();
        private get isFalse();
        private get isNull();
    }
}
