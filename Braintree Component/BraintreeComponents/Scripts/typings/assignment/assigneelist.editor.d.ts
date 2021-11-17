declare namespace $DP.Assignment {
    interface AssigneeListEditorOptions {
        node: $D.Framework.Design.Properties.ContextProviderNode;
        path: string[];
        editingContextID: string;
        host: JQuery;
    }
    class AssigneeListEditor {
        private options;
        private assigneeList;
        private get hostId();
        constructor(options: AssigneeListEditorOptions);
        private render;
        private attachEvents;
        private setToCache;
        private getFromCache;
        private clearCache;
        private setValue;
        private onBeforeSave;
    }
}
