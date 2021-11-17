/**
 * Author:akash.singh@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../typings/linq/linq.d.ts" />
import NumberFormat = $D.Framework.Utilities.Data.NumberFormat;
import GridMode = Silverdark.Components.GridMode;
interface JQueryJqGridColumn {
    sortType?: string;
    datefmt?: string;
    editoptions?: JqGridEditOptions;
    dataType?: string;
    allowUnsafeJavascript?: boolean;
    beforeSaveCell?: () => Promise<any>;
}
interface JqGridEditOptions {
    dateFormat: string;
    instanceId: string;
    displayFormat: string;
    custom_element?: string;
    custom_value?: string;
}
interface JQueryJqGridOptions {
    beforeSaveCell?: (rowid: string, cellname: string, value: string, iRow: string, iCol: string) => string;
    stretch?: boolean;
    styleUI?: string;
    multiselectWidth?: number;
}
declare namespace $DP.Common {
    enum PreviewDisplayMode {
        Inline = 0,
        Outside = 1,
        Tooltip = 2,
        None = 3,
        RightSide = 4
    }
    interface ColumnInfo {
        name: string;
        type: string;
        sortOrder: number;
        format?: string;
    }
    interface DataGridOptions {
        instanceId: string;
        gridMode: Silverdark.Components.GridMode;
        showDeleteAction: boolean;
        previewMode: PreviewDisplayMode;
        data: any;
        colModel: JQueryJqGridColumn[];
        showRowActions: boolean;
        showPreviewPanel: boolean;
        colNames: string[];
        height: number;
        width: number;
        autoSelectFirstRow: boolean;
        selectAll: boolean;
        showActions: boolean;
        holder: JQuery;
        onSelectRow?: (rowids: string[]) => void;
        onSelectAll?: () => void;
        beforeEditCell?: (id: string, name: string, val: string, iRow: string, iCol: string) => void;
        afterRowAdded?: (rowId: string) => void;
        afterEditCell?: (id: string, name: string, val: string, iRow: string, iCol: string) => void;
        afterSaveCell?: (id: string, name: string, val: string, iRow: string, iCol: string) => void;
        onRightClickRow?: (rowid: string, e?: JQueryEventObject) => void;
        defaultGroupingFields: string[];
        onAddRow?: () => void;
        onEditRow?: (rowId: string) => void;
        onDeleteRow?: (rowId: string) => void;
        previewPanelClass?: string;
        showEditDeleteActions?: boolean;
        cellStyle?: string;
        editCellOnClick?: boolean;
        headerStyle?: string;
    }
    interface DataGridColumn {
        title: string;
        width: number;
        fieldName: string;
        hidden: boolean;
    }
    interface IDataGrid {
        initialize(): any;
        resize(height: number, width: number): any;
        afterHostResize(): any;
        selectRows(ids: string[]): any;
        reload(rows: any): any;
        selectedRowIds: string[];
        addRow(): any;
        getRowElement(idOrIndex: number | string): JQuery;
        deleteSelectedRows?: () => void;
        isVisible: () => boolean;
        updateGridParams?: (options: DataGridOptions) => void;
        beforeGetValue?: () => void;
        grid: JQuery;
        header: JQuery;
    }
    interface PreviewPanelOptions {
        previewMode: PreviewDisplayMode;
        instanceId: string;
        showActions: boolean;
        holder: JQuery;
        previewPanelClass: string;
    }
    class PreviewPanel {
        private options;
        private control;
        constructor(options: PreviewPanelOptions, control: DataGrid);
        static create(options: PreviewPanelOptions, control: DataGrid): PreviewPanel;
        $previewContainer: JQuery;
        $spiltter: JQuery;
        render(): void;
        attachEvents(): void;
        updatePreview(rowId: string, isUserClick?: boolean): void;
        getPreview(rowId: string): Promise<JQuery>;
    }
    class DataGrid implements IDataGrid {
        options: DataGridOptions;
        constructor(options: DataGridOptions);
        rowData: any;
        $root: JQuery;
        $gridTable: JQuery;
        previewPanel: PreviewPanel;
        static readonly INSTANCE_NAME = "dp-datagrid";
        isHostResized: boolean;
        mode: AbstractDataGridMode;
        gridHeight: number;
        gridWidth: number;
        get tableId(): string;
        private _gridHeader;
        get gridHeader(): JQuery;
        private _gridBody;
        get gridBody(): JQuery;
        get grid(): JQuery;
        get header(): JQuery;
        getGridModeInstance(): AbstractDataGridMode;
        updateGridParams(options: DataGridOptions): void;
        getAllRowsId(): string[];
        isVisible(): boolean;
        afterHostResize(): void;
        /**
         * returns an array always
         */
        get selectedRowIds(): string[];
        private _selectedRowIds;
        set selectedRowIds(ids: string[]);
        raiseSelectionChangeEvent(): void;
        beforeGetValue(): void;
        resize(height?: number, width?: number): void;
        render(): void;
        initialize(): void;
        attachEvents(): void;
        selectRows(ids: string[]): void;
        highlightRow(id: string): void;
        updatePreview(rowId: any, isUserClick?: boolean): void;
        loadJqGrid(): void;
        static get(elem: JQuery): DataGrid;
        onResizeStop(nw: number, index: number): void;
        onLoadComplete(): void;
        private sort;
        static orderBy(columnInfo: ColumnInfo[]): (a: any, b: any) => number;
        static formatNumber(cellValue: any, options: any): number;
        static unFormatNumber(cellValue: any, options: any): string | 0;
        setGroupOrder(order: string[]): void;
        reload(data: any): void;
        getRowElement(rowId: string): JQuery;
        showEntityAction(gridRowId: string, showAtRowStart?: boolean): void;
        getActionInfo(rowId: string): {
            EntityId: string;
            EntityTypeName: string;
        };
        getGroupActionInfo(rowIds: string[]): {
            EntityId: string;
            EntityTypeName: string;
        }[];
        addRow(): void;
        deleteSelectedRows(): void;
        onDeleteRow(rowId: string): void;
        hideContextMenu(): void;
        showContextMenu(rowId: string, actions: Array<any>): void;
        getEditAction(rowId: string): any;
        getDeleteAction(rowId: string): any;
        afterSaveCell(id: any, name: any, val: any, iRow: string, iCol: string): void;
    }
    interface DataGridModeOptions {
        $holder: JQuery;
        instanceId: string;
        showPreviewPanel: boolean;
        previewMode: PreviewDisplayMode;
        showActions: boolean;
        showRowActions: boolean;
        onAddRow: () => void;
        afterRowAdded: (id: string) => void;
        previewPanelClass?: string;
    }
    interface SingleSelectDataGridOptions extends DataGridModeOptions {
        autoSelectFirstRow: boolean;
    }
    interface MultiSelectDataGridOptions extends DataGridModeOptions {
        selectAll: boolean;
    }
    interface InlineEditDatGridOptions extends DataGridModeOptions {
        editCellOnClick: boolean;
    }
    abstract class AbstractDataGridMode {
        protected options: DataGridModeOptions;
        protected grid: DataGrid;
        constructor(options: DataGridModeOptions, grid: DataGrid);
        previewPanel: PreviewPanel;
        get canEditCell(): boolean;
        get canSelectCell(): boolean;
        get canMultiSelect(): boolean;
        get canShowPreview(): boolean;
        get highlightRowClass(): string;
        get selectedPreviousRowOnDelete(): boolean;
        get autoSelectFirstRow(): boolean;
        get colModel(): JQueryJqGridColumn[];
        highlightRow(rowId: string): void;
        addRow(): void;
        attachEvents(): void;
        selectRows(ids: string[]): void;
        deleteSelectedRows(): void;
        onSelectRow(rowId: string, e?: JQueryEventObject): void;
        onRightClickRow(rowid: string, e: JQueryEventObject): void;
        onCellSelect(rowId: string | number, ci: any, tdHtml: string, e: JQueryEventObject): void;
        onSelectAll(): void;
        onLoadComplete(): void;
        afterHostResize(): void;
    }
    abstract class EditableDataGrid extends AbstractDataGridMode {
        abstract afterEditCell(id: string, name: string, val: string, iRow: string, iCol: string): any;
        abstract afterSaveCell(id: string, name: string, val: string, iRow: string, iCol: string): any;
        abstract afterRestoreCell(id: string, val: string, iRow: string, iCol: string): any;
        abstract beforeEditCell(id: string, name: string, val: string, iRow: string, iCol: string): any;
    }
    class InlineEditDataGrid extends EditableDataGrid {
        protected options: InlineEditDatGridOptions;
        protected grid: DataGrid;
        private isCellEdited;
        constructor(options: InlineEditDatGridOptions, grid: DataGrid);
        get canEditCell(): boolean;
        get highlightCellClass(): string;
        get editCellClass(): string;
        get rowHoverClass(): string;
        get selectedRowClass(): string;
        get reloadGridOnCellEdit(): boolean;
        private _isCellInvalid;
        get isCellInvalid(): boolean;
        set isCellInvalid(value: boolean);
        saveCurrentCellValue(): void;
        getEditRowAndColIndex(): {
            rowIndex: any;
            columnIndex: any;
        };
        saveCurrentCellValueAndEditAgain(): void;
        attachEvents(): void;
        deleteSelectedRows(): void;
        onSelectRow(rowId: string, e?: JQueryEventObject): boolean;
        afterEditCell(id: string, name: string, val: string, iRow: string, iCol: string): void;
        beforeEditCell(id: string, name: string, val: string, iRow: string, iCol: string): void;
        afterSaveCell(id: string, name: string, val: string, iRow: string, iCol: string): void;
        afterRestoreCell(id: string, val: string, iRow: string, iCol: string): void;
        getCell(rowId: string, iCol: string): JQuery;
        showPointer(rowId: string): void;
        addRow(): void;
        isCellValidationBreak(id: string, val: string, iRow: string, iCol: string, editCell: JQuery): boolean;
        applyValidationOnCell(iRow: string, iCol: string, column: JQueryJqGridColumn, editCell: JQuery, errorMessage?: string): void;
        private showDeleteContextMenu;
        afterHostResize(): void;
    }
    class SingleSelectDataGrid extends AbstractDataGridMode {
        protected options: SingleSelectDataGridOptions;
        protected grid: DataGrid;
        constructor(options: SingleSelectDataGridOptions, grid: DataGrid);
        get canShowPreview(): boolean;
        get autoSelectFirstRow(): boolean;
        onSelectRow(rowId: string, e: JQueryEventObject): void;
        onRightClickRow(rowid: string, e: JQueryEventObject): void;
    }
    class MultiSelectDataGrid extends AbstractDataGridMode {
        protected options: MultiSelectDataGridOptions;
        protected grid: DataGrid;
        constructor(options: MultiSelectDataGridOptions, grid: DataGrid);
        get canMultiSelect(): boolean;
        get autoSelectFirstRow(): boolean;
        get selectAllCheckBox(): JQuery;
        lastSelectedRow: string;
        onSelectRow(rowId?: string, e?: JQueryEventObject): void;
        selectRows(selectedRowIds: string[]): void;
        private showRowActions;
        private getRowsInBetween;
        private showGroupActions;
        afterHostResize(): void;
        onLoadComplete(): void;
        deleteSelectedRows(): void;
        resetSelection(): void;
        onSelectAll(): void;
    }
    class PropertyGridEditDataGrid extends AbstractDataGridMode {
        onSelectRow(rowId: string, e: JQueryEventObject): void;
        showEditDeleteContextMenu(rowId: string): void;
        afterHostResize(): void;
    }
    class InfoOnlyDataGrid extends AbstractDataGridMode {
        get canShowPreview(): boolean;
        get canSelectCell(): boolean;
        onSelectRow(rowId: string, e: JQueryEventObject): void;
        onRightClickRow(rowid: string, e: JQueryEventObject): void;
        attachEvents(): void;
    }
    class OutputAllDataGrid extends AbstractDataGridMode {
        onSelectRow(rowId: string, e: JQueryEventObject): void;
        onRightClickRow(rowid: string, e: JQueryEventObject): void;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
