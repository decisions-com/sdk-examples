/**
 * Author:dorin@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Designers.Reports {
    import SpanDirection = $D.Framework.Design.Report.Matrix.IntersectionTemplate.SpanDirection;
    import SpanBehavior = $D.Framework.Design.Report.Matrix.IntersectionTemplate.SpanBehavior;
    import CellTemplate = $D.Framework.Design.Report.Matrix.IntersectionTemplate.CellTemplate;
    class TableLayoutConfig {
        ReportContextId: string;
        FolderId: string;
        DesignerContentHost: JQuery;
        PreviewContentHost: JQuery;
    }
    class CellTemplateView {
        private _model;
        Row: number;
        Column: number;
        ShowRowEditControl: boolean;
        ShowColumnEditControl: boolean;
        IsRowConfigured: boolean;
        IsColumnConfigured: boolean;
        SpanDirection: SpanDirection;
        RowSpan: number;
        RowSpanBehavior: SpanBehavior;
        ColumnSpan: number;
        ColumnSpanBehavior: SpanBehavior;
        IsFirstRow: boolean;
        IsFirstColumn: boolean;
        IsLastRow: boolean;
        IsLastColumn: boolean;
        ItemsCount: number;
        IsAvailable: boolean;
        Index: number;
        constructor(model: CellTemplate);
        get IsFirst(): boolean;
        get IsLast(): boolean;
        get CellHasItems(): boolean;
        buildView(parent: JQuery): void;
        private buildCellControlElement;
        private buildCellSpanElement;
        private buildCellActionElement;
        private buildCellDataElement;
        private buildFieldCellInfo;
        private buildTextCellInfo;
        private buildImageCellInfo;
        private buildSpacerCellInfo;
    }
    class TableLayoutController {
        private _reportContextId;
        private _onEditCompleted;
        private _templateType;
        constructor(reportContextId: string, templateType: TableTemplateType, onEditCompleted: Function);
        getEditSlotActions(index: number, isRow: boolean, editCallback: (data: any) => any): any[];
        getEditCellViewActions(cellView: CellTemplateView, editCallback: (data: any) => any, addCallback: (data: any) => any): any[];
        getEditCellItemActions(cellView: CellTemplateView, index: number, editCallback: (data: any) => any): any[];
        private addTextCellTemplate;
        private addFieldCellTemplate;
        private addImageCellTemplate;
        private addSpacerCellTemplate;
        private insertSlot;
        private moveCell;
        private changeCellDataIndex;
        private moveCellData;
        private editTableSlot;
        editTableCell(row: number, column: number, doneCallback: (data: any) => any): Promise<void>;
        editTableCellData(row: number, column: number, index: number, doneCallback: (data: any) => any): Promise<void>;
        private deleteTableCellData;
        completeEdit(editContextId: string): void;
    }
    class TableLayout implements IViewController {
        private _options;
        private _template;
        private _onLoaded;
        private _views;
        private _controller;
        private _dialogPosition;
        private _tableElement;
        private _previewelement;
        private _title;
        private _templateType;
        constructor(tableLayoutConfig: TableLayoutConfig, templateType: TableTemplateType, onLoaded: Function);
        attach(): void;
        initializeIntersrctionTemplate(title: string): void;
        onOkClick(e: any): void;
        onCancelClick(e: any): void;
        detach(): void;
        get hidePreview(): boolean;
        private buildDesignerContent;
        private buildPreviewContent;
        loadCellTemplate(onLoadCompleted?: Function): void;
        loadTemplate(onLoadCompleted?: Function): void;
        private refreshPreview;
        private clear;
        private buildCellsTemplateView;
        private refreshView;
        private getCellView;
        private getCellItem;
        private onSlotClick;
        private onCellActionClick;
        private onCellItemClick;
        private showEditor;
        private onEditCompleted;
        private sendReportChangedNotification;
        private GetCells;
        private GetRowCount;
        private GetColumnCount;
        private GetCellTemplate;
        private CanEditRow;
        private CanEditColumn;
        private HasItems;
        private IsRowConfigured;
        private IsColumnConfigured;
        private HasConfiguredSlots;
        private IsSlotConfigured;
    }
    enum TableTemplateType {
        CellTemplate = 0,
        IntersectionTemplate = 1,
        SummaryTemplate = 2
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
