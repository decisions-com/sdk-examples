declare namespace $DP.Controls.Report {
    interface ITilesOptions {
        componentId: string;
        isRightSideHeader: boolean;
        reportHeaderElem: JQuery;
        groupingOptions: string[];
        folderId: string;
        reportContextId: string;
        reportId: string;
        tileViewElem: JQuery;
        instanceId: string;
        tileViewName: string;
        tileTypeName: string;
        showDrillDown?: boolean;
        holder?: JQuery;
    }
    class TilesView {
        private options;
        currentTileType: string;
        currentSortType: string;
        sortingOptions: string[];
        reportViewerDataElem: JQuery;
        reportTileContainerElem: JQuery;
        gridModeNavigateBehaviorSelector: any;
        drillDownViewModeSelector: any;
        constructor(options: ITilesOptions);
        static getInstance(instanceId: any): TilesView;
        initialize(): void;
        attachEvents(): void;
        doGrouping(tileType: string): void;
        filterSortingOptions(tileType: string): string[];
        doSorting(sortType: string): void;
        renderTileReportView(tileType: string, sortType: string, callBack: any): void;
        openDrillDownReport(elem: JQuery): boolean;
    }
}
