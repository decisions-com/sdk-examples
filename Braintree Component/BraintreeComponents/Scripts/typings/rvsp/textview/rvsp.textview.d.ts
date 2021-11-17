declare namespace $DP.Controls.Report.Text {
    import TextOutput = $D.Framework.Design.Report.Service.Comunication.ReportTextOutput;
    interface TextViewOptions {
        instanceId: string;
        holder: JQuery;
        folderId: string;
        contextId: string;
        reportId: string;
        textOutput: TextOutput[];
        selectedTileType: string;
        showLinkOnHover: boolean;
        unknownPageCount: boolean;
        isLastPage: boolean;
        rowsPerPage: number;
        totalRows: number;
        activePageIndex: number;
        pageCount: number;
        useMainGroupingInTextViews: boolean;
        showOnlyGroupValueInTextView: boolean;
        showGroupingOptionsInTextView: boolean;
        defaultTextViewPageName: string;
        autoSelectFirstRow: boolean;
        showActionsOnRightClick: boolean;
        hideNoActionMenu: boolean;
    }
    class TextView extends BaseReportView {
        private options;
        private textOutput;
        private groups;
        private tileDataList;
        private groupNumber;
        private defaultGroupName;
        private reportViewerPartDiv;
        private multiSelectedIds;
        private singleSelectedId;
        private collapsedGroupIds;
        constructor(options: TextViewOptions);
        static create(options: TextViewOptions): TextView;
        initialize(): void;
        attachEvents(): void;
        resize(): void;
        updateHeader(): void;
        static getInstance(instanceId: string): TextView;
        UpdateTextViewData(): Promise<void>;
        addGroups(): void;
        render(): void;
        get textViewMarkup(): string;
        get noDataMarkup(): string;
        get paginationMarkup(): string;
        createPagination(): void;
        static SwitchToTextView(instanceId: string, folderId: string, reportId: string, autoSelectFirstRow: boolean, hideNoActionMenu: boolean): Promise<void>;
        reload(): Promise<void>;
    }
}
