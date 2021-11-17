declare namespace $DP.Designers.RuleSet {
    class BaseCell {
        protected rowIndex: number;
        protected columnIndex: number;
        protected isVisible: boolean;
        constructor(rowIndex: number, columnIndex: number);
        get RowIndex(): number;
        set RowIndex(value: number);
        get ColumnIndex(): number;
        set ColumnIndex(value: number);
        get IsVisible(): boolean;
        getView(): JQuery;
        reInitialize(): void;
        dispose(): void;
    }
    class CustomCellOptions {
        rowIndex?: number;
        columnIndex?: number;
        content?: JQuery;
    }
    /**
     * Cell which can contains any content
     */
    class CustomCell extends BaseCell {
        private options;
        constructor(options: CustomCellOptions);
        getView(): JQuery;
    }
}
