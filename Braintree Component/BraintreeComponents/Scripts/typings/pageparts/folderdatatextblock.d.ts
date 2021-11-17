declare namespace $DP.Components.Page {
    interface FolderDataTextBlockOptions extends FolderDataStateOptions {
        stripHTMLFromText: boolean;
    }
    class FolderDataTextBlock {
        private options;
        static create(options: FolderDataTextBlockOptions): FolderDataTextBlock;
        static get(host: JQuery): FolderDataTextBlock;
        private folderId;
        private $loadingHolder;
        private $holder;
        constructor(options: FolderDataTextBlockOptions);
        private listen;
        update(): void;
        refresh(): void;
        private write;
        private showLoadingIndicator;
        private hideLoadingIndicator;
    }
}
