declare namespace $DP.Designers.Reports {
    class ReportDesignerTilesViewController implements IViewController {
        private selector;
        private contextId;
        private folderId;
        private limitRows;
        constructor(selector: JQuery, contextId: string, folderId: string, limitRows: number);
        attach(): void;
        detach(): void;
        get hidePreview(): boolean;
        renderTileView(limitRows: number): Promise<void>;
    }
}
