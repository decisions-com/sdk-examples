declare namespace $DP.Mobile.Common {
    import IDataGrid = $DP.Common.IDataGrid;
    import DataGridMode = Silverdark.Components.GridMode;
    import DataGridColumn = $DP.Common.DataGridColumn;
    interface DataGridOptions {
        instanceId: string;
        gridMode: DataGridMode;
        rows: {
            [key: string]: any;
        };
        onSelectRow?: (rowids: string[]) => void;
        columns: DataGridColumn[];
        holder?: JQuery;
        autoSelectFirstRow?: boolean;
    }
    class DataGrid implements IDataGrid {
        private options;
        $view: JQuery;
        selectedRowIds: string[];
        filteredColumns: DataGridColumn[];
        constructor(options: DataGridOptions);
        static create($holder: JQuery, options: DataGridOptions): DataGrid;
        get grid(): JQuery;
        get header(): JQuery;
        initialize(): void;
        isVisible(): boolean;
        selectRows(rowIds: string[]): void;
        private render;
        private getHeadersView;
        private getRowView;
        private selectRow;
        beforeGetValue(): void;
        isModeSupported(): boolean;
        getSelectedRowsId(): string[];
        getAllRowsId(): string[];
        resize(): void;
        afterHostResize(): void;
        reload(rows: any): void;
        selectFirstRow(): void;
        deleteRow(rowid: string): void;
        addRow(): void;
        getRowElement(index: number): JQuery;
        getGridElement(): JQuery;
        getHighlightedRow(): JQuery;
    }
}
