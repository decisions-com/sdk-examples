declare namespace $DP.Controls.Report {
    interface ISearchBar {
        instanceId: string;
        host: JQuery;
        isRightSideHeader: boolean;
        keepSearchOpen: boolean;
        showSearch: boolean;
        reportHeaderElem: JQuery;
        searchIcon: JQuery;
        lastSearchedText: string;
        rvspHolder: JQuery;
        hideSearch?: boolean;
        onSearchClick?: (text: any) => void | Promise<void>;
    }
    class SearchBar {
        private options;
        private tempSearchBarClass;
        private static instanceHolder;
        searchBoxElem: JQuery;
        searchBoxInstance: $DP.Common.SearchBox;
        lastSearchedText: string;
        searchBoxWidth: number;
        private isRightSideReportHeader;
        constructor(options: ISearchBar);
        renderSearchBox(): void;
        initialize(): void;
        toggleSearchBar(): void;
        get getLastSearchedText(): string;
        static getInstance(instanceId: string): SearchBar;
        keepSearchOpen(): boolean;
        private detachSearchbox;
        private showSearchIcon;
        showSearchBox(): void;
        hideSearchBox(): void;
        private appendSearchBoxToBody;
        private appendSearchboxToReportHeader;
        private attachEvents;
        setPosition(): void;
        private setPositionFromReportHeader;
        private setPositonFromBody;
        openSearchBox(): void;
        resizeSearchBox(): void;
        onReportHeaderMouseDownEvent(e: JQueryEventObject): void;
        search(text: string): Promise<void>;
        dispose(): void;
    }
}
