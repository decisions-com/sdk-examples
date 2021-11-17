declare namespace $DP.Portal {
    class TopBarDateRange {
        static SHOW_DATE_RANGE_EVENT: string;
        static HIDE_DATE_RANGE_EVENT: string;
        static componentIdsToRefresh: string[];
        static getDateRangeHolder(): JQuery;
        static setFilterOnPage(selectedDateRange: $D.Framework.Design.Flow.CoreSteps.Metro.ReportDateRange): Promise<void>;
        static update(dateRange?: $D.Framework.Design.Flow.CoreSteps.Metro.ReportDateRange): void;
        static hide(): void;
        static refresh(dateRangeAwareComponentsids: any): any;
    }
}
