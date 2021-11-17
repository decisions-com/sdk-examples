/// <reference path="../../common/progresslinear.d.ts" />
declare namespace $DP.Designers.Sampling {
    import SampleSetCoverage = $D.Framework.Design.Flow.Service.Debugging.Samples.SampleSetDataCoverage;
    interface SampleSetCoverageViewOptions {
        title: string;
        $middleHeader?: JQuery;
        singleResultColumn?: boolean;
    }
    class SampleSetCoverageView implements SampleSetStatsView {
        private readonly options;
        private $view;
        private header;
        private $statsHolder;
        private showAllCoverages;
        constructor(options: SampleSetCoverageViewOptions);
        static get className(): string;
        getElement(): JQuery;
        dispose(): void;
        private render;
        showStats(stats: SampleSetCoverage): void;
        showRerun(rerun: () => void): void;
        private statsSnapshot;
        private renderTable;
        private getOutputHeadersRow;
        private renderNoMatchTitleRow;
        private renderTableActions;
        private renderDataRows;
        private renderCoverageRow;
        private getOutputDataColumns;
        private getCellHtml;
        private renderNoMatchRow;
        private renderNoMatchTitle;
        private renderTiles;
    }
}
