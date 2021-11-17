declare namespace $DP.Components.Page {
    interface FolderDataStateOptions {
        instanceId: string;
        updateFromSelectionBus: boolean;
        selectionBusName: string;
        dataName: string;
        $elem: JQuery;
    }
    class FolderDataStateSilverPart {
        private options;
        static create(options: FolderDataStateOptions): FolderDataStateSilverPart;
        static get(host: JQuery): FolderDataStateSilverPart;
        private folderId;
        constructor(options: FolderDataStateOptions);
        private listen;
        refresh(): void;
        private adjustSize;
    }
}
