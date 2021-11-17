declare namespace $DP.Control {
    import DataPair = $D.Framework.ServiceLayer.Services.ContextData.DataPair;
    class SilverDynamicDataGrid extends DataContentBase implements $DP.FormHost.IAsyncDataConsumer {
        options: Silverdark.Components.SilverDynamicDataGridOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverDynamicDataGridOptions);
        get showDisableControlOverlay(): boolean;
        private $addrowbtn;
        private $removerowbtn;
        private removedRowsIds;
        private isResized;
        private instanceId;
        private newHeight;
        private newWidth;
        gridOptions: $DP.Common.DataGridOptions;
        private isControlLoaded;
        gettingValuesToPost: boolean;
        control: $DP.Common.IDataGrid;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        data: DataPair[];
        selected: string[];
        private attachAddRemoveButtonEvents;
        get renderDefaultViewOnDesignTime(): boolean;
        renderhtml(): Promise<JQuery>;
        private setSize;
        private resizeControl;
        private initializeGrid;
        showAddEditDialog(rowId?: string): void;
        private datapairsWithReportRowToJqgridData;
        getLink(url: string, text: string): string;
        private convertDataToDataPair;
        private editedInfos;
        private cellEdited;
        private isGridLoaded;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        setValueAsync(data: $DP.FormHost.DecisionsControlData[]): Promise<boolean>;
        private initializeGridRows;
        getValue(): $DP.FormHost.DecisionsControlData[];
        getControl(): JQuery;
        onEnablityChange(isEnable: boolean): void;
        updateControlState(isEnable?: boolean): void;
    }
    enum RowLinkType {
        FirstColumn = 0,
        LastColumn = 1,
        AllColumns = 2,
        AddColumn = 3
    }
    enum TextAlignment {
        Left = 0,
        Center = 1,
        Right = 2
    }
}
