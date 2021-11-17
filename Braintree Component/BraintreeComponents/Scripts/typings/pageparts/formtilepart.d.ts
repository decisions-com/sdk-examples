declare namespace $DP.Components.Page {
    interface formtilepartOptions {
        instanceid: string;
        formid: string;
        inputdataflowid: string;
        outputdataflowid: string;
        currentfolderid: string;
        pagecontextid: string;
        componentid: string;
        updateDatafromSelectionBus: boolean;
        selectionBusName: string;
        refreshOnFolderChange: boolean;
    }
    class formtilepart {
        private options;
        formwrapper: JQuery;
        private oldValue;
        private token;
        constructor(options: formtilepartOptions);
        initialize(): void;
        onNavigationParamChanged(): void;
        executeform(): void;
    }
}
