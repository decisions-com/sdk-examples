import ReportRow = $D.Framework.Design.Report.Service.Comunication.ReportRow;
import ReportTextOutputType = $D.Framework.Design.Report.Service.Comunication.ReportTextOutputType;
import ReportViewConfiguration = $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration;
import ReportTextOutput = $D.Framework.Design.Report.Service.Comunication.ReportTextOutput;
import TextViewResultData = $D.Framework.Design.Report.Service.Comunication.TextViewResultData;
declare namespace $DP.Mobile.Report {
    interface TextOutputOptions {
        folderId: string;
        reportId: string;
        $holder: JQuery;
        noDataMessage: string;
        reportContextId: string;
    }
    interface TextViewExtendedResultData extends TextViewResultData {
        totalPages: number;
        page: number;
    }
    class TextOutput {
        private options;
        private pageIndex;
        private $container;
        private $rowContainer;
        private groupIndex;
        private textViewData;
        get rowSelectedClass(): string;
        get textReportListClass(): string;
        private _config;
        get config(): ReportViewConfiguration;
        constructor(options: TextOutputOptions);
        static create(options: TextOutputOptions): void;
        buildReportContext(): void;
        render(): void;
        renderRows(rows: ReportTextOutput[]): void;
        getReportRows(rows: ReportTextOutput[]): ReportRow[];
        getGroupedRowsData(rows: ReportTextOutput[]): DataPair[];
        getGroupedRowsView(groupedRowPairs: DataPair[]): string;
        initialize(): void;
        attachEvents(): void;
        searchItems(): void;
        getGroupedRowView(groupValue: string, rows: ReportRow[]): string;
        getRowView(row: ReportRow): string;
        getRowsView(rows: ReportRow[]): string;
        addRows(rows: ReportTextOutput[], $holder: JQuery): void;
        getNoDataAvailableView(): string;
        setSelection(textReportRow: any): void;
        resetSelection(): void;
    }
}
