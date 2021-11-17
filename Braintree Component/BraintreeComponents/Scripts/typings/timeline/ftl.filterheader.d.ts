/// <reference path="../common/searchbox.d.ts" />
declare namespace $DP.UI.Controls.Timeline {
    interface FolderHeaderFilters {
        SearchText: string;
        ShowInfo: boolean;
        ShowAssignments: boolean;
        ShowComments: boolean;
        ShowFiles: boolean;
        ShowData: boolean;
    }
    interface HeaderFilterOptions {
        host?: JQuery;
        onChanged?: (filter: FolderHeaderFilters) => void;
        searchCallback?: (text?: string) => void;
    }
    class HeaderFilter {
        private options;
        protected $view: JQuery;
        protected initialFilter: FolderHeaderFilters;
        constructor(options: HeaderFilterOptions);
        private render;
        getFilters(searchtext?: string): FolderHeaderFilters;
        getActions(): any[];
        private getHideOrShow;
        private updateFiltersSwitch;
        private toggleSearch;
        hideSearch(target: any): void;
    }
}
