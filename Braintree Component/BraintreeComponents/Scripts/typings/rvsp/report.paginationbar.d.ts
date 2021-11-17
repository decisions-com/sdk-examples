declare namespace $DP.Controls.Report {
    interface PaginationBarOptions extends PaginationBarEvents {
        rowsPerPage: number;
        totalRows: number;
        activePageIndex: number;
        $holder?: JQuery;
        id?: string;
        showRowsCount?: boolean;
        totalPages?: number;
        unknownPageCount?: boolean;
        isLastPage?: boolean;
    }
    interface PaginationBarEvents {
        onPageChange?: (index: any) => void;
    }
    class DefaultPaginationBarOptions implements PaginationBarOptions {
        rowsPerPage: number;
        totalRows: number;
        activePageIndex: number;
        showRowsCount: boolean;
        id: string;
        unknownPageCount: boolean;
    }
    class PaginationBar {
        private options;
        private $root;
        private lastVisibleIndex;
        static INSTANCE_NAME: string;
        get pageCount(): number;
        get activePageClass(): string;
        constructor(options: PaginationBarOptions);
        static create(options: PaginationBarOptions): PaginationBar;
        initialize(): void;
        update(options: PaginationBarOptions): void;
        render(): void;
        getLastPageNavigateHtml(): "" | "<a href=\"#\" data-index=\"last\" class='navigate-last-page navigate' title=\"Last\">\n                                        <div class=\"navigate-icon\"></div>\n                                    </a>";
        getButtonsView(): string;
        getDisplayIndex(index: number): string | number;
        getLastRowIndex(): number;
        getFirstRowIndex(): number;
        getRowsIndexRangeOfPage(): string;
        attachEvents(): void;
        goToPage(pageNumber: number): void;
        updatePageNumbers(): void;
        makePageActive(): void;
        isPageOutsideCurrentRange(): boolean;
        updateRowsCount(): void;
        getPaginationBarHeight(): 0 | 36;
    }
}
