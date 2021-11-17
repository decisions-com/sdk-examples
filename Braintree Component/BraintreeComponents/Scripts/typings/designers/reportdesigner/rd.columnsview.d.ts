declare namespace $DP.Designers.Reports {
    class ReportDesignerColumnsViewController implements IViewController {
        private selector;
        private contextId;
        private instanceId;
        private folderId;
        private limitRows;
        columnsView: $DP.Controls.Report.ColumnsView;
        constructor(selector: JQuery, contextId: string, instanceId: string, folderId: string, limitRows: number);
        attach(): Promise<void>;
        loadColumnsView(limitRows: number): Promise<void>;
        get hidePreview(): boolean;
        detach(): void;
    }
}
