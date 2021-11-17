declare namespace $DP.Components.Page {
    class FolderHeaderData {
        private $headerDataElement;
        private folderId;
        private subscribeToken;
        constructor($headerDataElement: JQuery);
        static create($headerDataElement: JQuery): FolderHeaderData;
        update(folderId: string): void;
        private handleFolderEvent;
    }
}
