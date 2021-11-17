/// <reference path="../../../typings/jquery/jquery.d.ts" />
/// <reference path="../../../typings/jqueryui/jqueryui.d.ts" />
declare namespace $DP.Rules.Truthtable {
    import DisplayFilter = $D.Framework.Design.Flow.DisplayFilter;
    interface TruthTableFilterOptions {
        displayFilter: DisplayFilter;
        columnNames: string[];
        onApply: (displayFilter: DisplayFilter) => void;
        onReset: () => void;
        onOpen: () => void;
        onClose: () => void;
    }
    class TruthTableFilter {
        private options;
        private $view;
        private selectedSortGroups;
        constructor(options: TruthTableFilterOptions);
        getView(): JQuery;
        private buildDisplayFilter;
        private render;
        private updateSortList;
        private getSearchPanel;
        private getSortPanel;
        private getButtons;
        private getDisplayFilterResult;
        private get allColumns();
        private get ascending();
        private get descending();
        private get sortItems();
        private getNewSortItem;
    }
}
