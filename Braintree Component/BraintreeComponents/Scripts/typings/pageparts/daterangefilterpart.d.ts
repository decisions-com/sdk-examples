declare namespace $DP.PageParts {
    import ReportDateRange = $D.Framework.Design.Flow.CoreSteps.Metro.ReportDateRange;
    interface DateRangeFilterPartOptions {
        host: JQuery;
        pageContextId?: string;
        folderId?: string;
        refreshPartIds?: string[];
        instanceId: string;
        defaultRange?: ReportDateRange;
        fromDateLabelText?: string;
        numberOfDaysLabelText?: string;
        dateRangeAwareComponents?: string[];
    }
    class DateRangeFilterPart {
        options: DateRangeFilterPartOptions;
        constructor(options: DateRangeFilterPartOptions);
        update(selectedDateRange: $D.Framework.Design.Flow.CoreSteps.Metro.ReportDateRange): void;
        render(dateRange?: $D.Framework.Design.Flow.CoreSteps.Metro.ReportDateRange): void;
        attachEvents(): void;
    }
}
