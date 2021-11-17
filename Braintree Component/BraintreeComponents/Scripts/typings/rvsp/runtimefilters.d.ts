declare namespace $DP.Controls.Report {
    import RuntimeFilterInfo = $D.Framework.Design.Report.Service.Comunication.RuntimeFilterInfo;
    interface IReportFilter {
        reportContextId: string;
        instanceId: string;
        host: JQuery;
        onFilterChanged: (data: RuntimeFilterInfo[]) => void;
        dialogTitle?: string;
        overrideDialogTitle?: boolean;
    }
    class RuntimeFilters {
        private options;
        private filterContainer;
        private filters;
        constructor(options: IReportFilter);
        static getCacheKey(instanceId: string): string;
        static getInstance(instanceId: string): RuntimeFilters;
        show(callBack?: () => void): void;
        appendFilters(data: RuntimeFilterInfo[]): void;
        attachEvents(): void;
        resetAllFilters(): void;
        clearAllFilters(): Promise<void>;
        openFiltersDialog(): Promise<void>;
        getDialogTitle(): string;
        getHtml(data: RuntimeFilterInfo[]): JQuery;
        getEmptyFilterHtml(): string;
        getFilterNode(data: RuntimeFilterInfo): string;
        getFilterName(filterName: string): string;
        getfilterValue(filterValue: string): string;
        updateFilterNodes(data: RuntimeFilterInfo[]): void;
    }
}
