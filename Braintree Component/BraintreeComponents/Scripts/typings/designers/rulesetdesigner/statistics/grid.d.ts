/**
 * Author:oleg@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Designers.RuleSet {
    interface GridOptions {
        $host: JQuery;
        className?: string;
    }
    class Grid {
        private options;
        static get DATA_KEY(): string;
        private $view;
        private $table;
        private $body;
        private $head;
        private $tableScroll;
        private $headContainer;
        private cells;
        private columnDefinitions;
        private rowDefinitions;
        get Cells(): BaseCell[];
        get ColumnDefinitions(): ColumnDefinition[];
        get RowDefinitions(): RowDefinition[];
        get TableElement(): JQuery;
        constructor(options: GridOptions);
        removeColumnDefinitionAt(index: number): void;
        addColumnDefinition(col: ColumnDefinition): void;
        removeColumnDefinition(col: ColumnDefinition): void;
        addRowDefinition(row: RowDefinition): void;
        removeRowDefinitionAt(index: number): void;
        addCell(cell: BaseCell): void;
        getRowCells(rowIndex: number): BaseCell[];
        removeRowCells(rowIndex: number): void;
        appendRow(rowIdx: number): void;
        reDrawRow(rowIdx: number): void;
        getDomRow(rowIdx: number): JQuery;
        private buildRow;
        reRender(): void;
        private appendHeaderRow;
        private findCell;
        getDomCell(rowIndex: number, columnIndex: number): JQuery;
        clear(): void;
        clearColumn(index: number): void;
        resize(): void;
        /**
         * @param colIndex index of column to resize. Indexation from 0
         */
        private resizeColumn;
        private resizeContainer;
        private resetContainerSize;
        private makeScrollable;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
