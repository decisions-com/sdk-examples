declare namespace $DP.Controls.Report.Grid {
    interface HierarchicalViewOptions extends ReportGridOptions {
        parentFieldName: string;
        childFieldName: string;
    }
    class HierarchicalView extends GridView {
        protected options: HierarchicalViewOptions;
        static instanceName: string;
        firstLoad: boolean;
        gridResult: GridResult;
        pageIndex: number;
        constructor(options: HierarchicalViewOptions);
        store(): void;
        clear(): void;
        static create(options: HierarchicalViewOptions): HierarchicalView;
        static LoadTreeGrid(instanceId: string): void;
    }
}
