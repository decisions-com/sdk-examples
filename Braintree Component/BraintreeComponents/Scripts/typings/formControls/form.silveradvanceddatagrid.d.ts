declare function LoadReport(instanceId: any, reportId: any, folderId: any, defaultReportId: any, defaultFolderId: any, componentid: any, isDrilDown: any, initialData: any, outputType?: any, groupingBy?: any, sortingBy?: any, shouldLoadTree?: any, holder?: JQuery, filters?: DataPair[], handleCleanUp?: boolean, selectedRowIds?: string[], resetSelection?: boolean): any;
declare namespace $DP.Control {
    class SilverAdvancedDataGrid extends ContentBase implements $DP.FormHost.IAsyncDataProducer, $DP.FormHost.IAsyncDataConsumer, $D.Silverlight.UI.Forms.ISilverFormValidationSettingSource {
        options: Silverdark.Components.SilverAdvancedDataGridOptions;
        formValidationSetting: $D.Silverlight.UI.Core.FormDesignerModel.ControlValidationSetting;
        private gridHeight;
        private gridWidth;
        private isReportLoaded;
        private loadReportDeffered;
        private rowIds;
        private $addrowbtn;
        private $removerowbtn;
        private selectedRowIds;
        private formLoadedDeferred;
        private isReportInitialized;
        private instanceId;
        private saveCellPromise;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverAdvancedDataGridOptions);
        private _controlId;
        get controlId(): string;
        private _gridView;
        get gridView(): $DP.Controls.Report.Grid.GridView;
        get grid(): Common.ReportViewerGrid;
        get actions(): $DP.Controls.Report.Grid.GridActionInfo[];
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        deleteRow(rowIds: string[]): Promise<void>;
        addRow(): void;
        private attachAddRemoveButtonEvents;
        getRowData(rowId: string): any;
        getRowId(rowData: any): any;
        setValueAsync(data: $DP.FormHost.DecisionsControlData[]): Promise<boolean>;
        private raiseSelectionChange;
        private autoSelectFirstRow;
        private getFirstRowKeyField;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        selectRows(selectedRowIds: string[]): void;
        getValueAsync(): Promise<$DP.FormHost.DecisionsControlData[]>;
        getValue(): $DP.FormHost.DecisionsControlData[];
        getControl(): JQuery;
        renderhtml(): JQuery;
    }
}
