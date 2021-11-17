/// <reference path="../typings/jquery/jquery.d.ts" />
declare namespace $DP.Editors {
    enum ArraySortOrder {
        None = 0,
        Ascending = 1,
        Descending = 2
    }
    interface LinkArrayEditorUpdateOptions {
        holder: JQuery;
        disableDelete: boolean;
        disableEdit: boolean;
        disableAdd: boolean;
        typeName: string;
        items: LinkArrayItem[];
        sortOrder: ArraySortOrder;
    }
    interface LinkArrayEditorOptions extends LinkArrayEditorUpdateOptions {
        instanceId: string;
        knownTypes: string[];
        displayLabel: string;
        objectSelection: boolean;
        disableMoveUpDown: boolean;
        editingContextId: string;
        path: string[];
    }
    interface LinkArrayItem {
        id: string;
        title: string;
        index: number;
    }
    class LinkArrayEditor {
        private options;
        private view;
        private listBoxId;
        private arrayEditor;
        constructor(options: LinkArrayEditorOptions);
        getView(): JQuery;
        static update(options: LinkArrayEditorUpdateOptions): void;
        refreshList(): void;
        private initialize;
        private attachEventsAddNew;
        private AddArrayEditorValues;
        private addTooltip;
        private static getSortedItems;
        private static ascendingOrderFunction;
        private static descendingOrderFunction;
    }
}
