/// <reference path="../Decisions.Controls/Decisions.Controls.d.ts" />
/// <reference path="../typings/jqgrid/jqgrid.d.ts" />
interface JQueryJqGridOptions {
    beforeSubmitCell?: (id: any, name: any, val: any, iRow: any, iCol: any) => void;
}
interface JQueryJqGridStatic {
    (gridName: string, ...params: any[]): any;
}
interface JQueryJqGridColumn {
    id?: string;
    allowFilter?: boolean;
    allowGroup?: boolean;
    allowSort?: boolean;
    sortingOrder?: number;
    allowEdit?: boolean;
    unformat?: (cellValue: any, options: any) => void;
    widthOrg?: number;
    fixed?: boolean;
    widthPercentage?: number;
    liveUpdateColumn?: boolean;
    label?: string;
    resizable?: boolean;
    liveUpdateColumnOptions?: ILiveUpdateColumnOptions;
    cellattr?: (rowId: any, tv: any, rawObject: any, cm: any, rdata: any) => string;
    fieldName?: string;
    hasCustomValidationMessage?: boolean;
    customValidationMessage?: string;
    numberFormat?: NumberFormat;
    customNumberFormat?: string;
    isRuntimeFilter?: boolean;
    allowLineBreaks?: boolean;
    editable?: boolean;
}
interface ILiveUpdateColumnOptions {
    negativeValueBackgroundColor: string;
    positiveValueBackgroundColor: string;
    negativeValueForegroundColor: string;
    positiveValueForegroundColor: string;
    dateFormat: string;
}
import CSVEditorRow = $D.Framework.Data.DataTypes.CSVEditorRow;
declare namespace $DP.Common {
    import PaginationBar = $DP.Controls.Report.PaginationBar;
    interface CSVEditorOptions {
        holder?: JQuery;
        readOnly?: boolean;
        gridRows: CSVEditorRow[];
        columnNames?: string[];
        expectedNumberOfColumns?: number;
        onValueChange?: () => void;
        height?: number;
        width?: number;
        instanceId?: string;
        onloadComplete?: () => void;
        downloadFileAsExcel?: () => Promise<string>;
        updateRowsData?: (gridRows: CSVEditorRow[]) => Promise<void>;
        totalRows?: number;
        rowsPerPage?: number;
        onPageChange?: (currentIndex: number, selectedIndex: number) => Promise<CSVEditorRow[]>;
        getCSVEditorRowsFromFile?: (fileId: string) => Promise<CSVEditorFileData>;
        updateAndGetCsvEditorRows?: (lastPageIndex: number, currentPageIndex: number) => Promise<CSVEditorRow[]>;
    }
    enum CSVEditorActionType {
        MoveUp = 0,
        MoveDown = 1,
        InsertAbove = 2,
        InsertBelow = 3,
        Download = 4,
        Remove = 5,
        Refresh = 6,
        Upload = 7
    }
    interface CSVEditorFileData {
        csvRowData: CSVEditorRow[];
        totalRowCount: number;
        columnNames: string[];
    }
    class CSVEditor {
        private options;
        $view: JQuery;
        instanceId: string;
        selectedRowId: string | number;
        pageIndex: number;
        paginationBar: PaginationBar;
        isDirty: boolean;
        tableId: string;
        constructor(options: CSVEditorOptions);
        get selectedRowClass(): string;
        get pgbContainerClass(): string;
        get addRowBelowClass(): string;
        get addRowAboveClass(): string;
        get moveDownRowClass(): string;
        get moveUpRowClass(): string;
        get downloadIconClass(): string;
        get refreshIconClass(): string;
        get removeIconClass(): string;
        get disabledClass(): string;
        get highlightRowClass(): string;
        get uploadIconClass(): string;
        get $table(): JQuery;
        get gridBody(): JQuery;
        get buttonContainer(): JQuery;
        getCurrentPageIndex(): number;
        initialize(): void;
        initializeTooltip(): any;
        getButtonView(): string;
        renderPaginationBar(): void;
        static create(options: CSVEditorOptions): CSVEditor;
        updateOptions(optionsToUpdate: CSVEditorOptions): void;
        invalidate(): void;
        updateGrid(): void;
        private getJqGridColumns;
        private getJqGridRows;
        private getFormattedColumnName;
        resize(): void;
        getRows(): CSVEditorRow[];
        loadGrid(): void;
        onSelectRow(rowId: string, forceSelect?: boolean): void;
        onResizeStop(newWidth: any, index: number): any;
        private updateRowsData;
        private applyValidation;
        private raiseValueChangeEvent;
        private addRow;
        private invalidatePaginationBar;
        private moveRow;
        private deleteRow;
        getSelectedRowIndex(): number;
        getSelectedColumnIndex(): number;
        updateButtonState(iRow?: string, iCol?: string): void;
        disableControls(iRow: string, iCol: any): void;
        private saveEditingCell;
        private refreshPage;
        private attachEvents;
        uploadFileAndGetRows(): void;
        setRowsAndColumns(rows: CSVEditorRow[], columnNames: string[], raiseEvent?: boolean): void;
        setRows(rows: CSVEditorRow[], raiseEvent?: boolean): void;
        private updateRows;
        reloadGrid(): void;
    }
}
