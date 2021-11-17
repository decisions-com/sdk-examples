declare namespace $DP.Components.Page {
    interface diagramTilePartOptions {
        instanceid: string;
        folderid: string;
        inputflowid: string;
        businessflowid: string;
        host: JQuery;
        pagecontextid: string;
        componentid: string;
        isindesignmode: boolean;
        updateDatafromSelectionBus: boolean;
        selectionBusName: string;
        refreshOnAnyFolderChange: boolean;
        refreshOnTreeChange: boolean;
        refreshOnCurrentFolderChange: boolean;
        refreshOnContainedEntityChange: boolean;
    }
    class diagramtilepart {
        private options;
        private oldValue;
        constructor(options: diagramTilePartOptions);
        initialize(): void;
        protected addFolderChangeEvents(): void;
        onNavigationParamChanged(): void;
        showBusinessModel(): void;
    }
}
