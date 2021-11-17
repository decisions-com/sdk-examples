/**
 * Author:dorin@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Designers.Reports {
    class MatrixConfigOptions {
        ReportContextId: string;
        DesignerContentHost: JQuery;
        PreviewContentHost: JQuery;
    }
    class MatrixView implements IViewController {
        private _options;
        private _matrixDefinition;
        private _mtx_field_padding;
        private _mtx_min_col_field_width;
        private _mtx_min_row_dimension_width;
        constructor(matrixConfigOptions: MatrixConfigOptions);
        attach(): void;
        detach(): void;
        get hidePreview(): boolean;
        /**
        * Backend calls.
        */
        loadMatrixDefinition(onLoadCompleted?: Function): void;
        addAllDimensions(isRow: boolean, onCompleted: Function): void;
        addLabelDimension(isRow: boolean, onCompleted: Function): void;
        addFieldDimension(isRow: boolean, onCompleted: Function): void;
        addDateDimension(isRow: boolean, onCompleted: Function): void;
        addAgingDimension(isRow: boolean, onCompleted: Function): void;
        addNumericRangeDimension(isRow: boolean, onCompleted: Function): void;
        addSummarizedValueDimension(isRow: boolean, onCompleted: Function): void;
        addCalculatedDimension(isRow: boolean, onCompleted: Function): void;
        private addChildElement;
        setMatrixTotal(forRow: boolean, enabled: boolean): void;
        setDimensionPercentage(dimensionId: string, enabled: boolean): void;
        setDimensionTotal(dimensionId: string, enabled: boolean): void;
        private moveMatrixElement;
        private removeMatrixElement;
        private editElementAsync;
        private editPercentAsync;
        private editTotalAsync;
        private editMatrixElement;
        private editDimensionPercentage;
        private editDimensionTotal;
        private showDimensionEditor;
        private completeEditDimension;
        refreshView(): void;
        refreshPreview(data: any): void;
        clear(): void;
        private ensureDesigner;
        private afterRefreshingView;
        /**
        * View builder
        */
        private buildDimensionsView;
        private buildDimensionViewByType;
        private buildSingleFieldDimensionView;
        private buildTotalAndPercentage;
        private buildCalculatedDimensionView;
        private buildSummaryDimensionView;
        /**
        * Utils
        */
        private findDimension;
        private getDimensionById;
        private findDimensionView;
        /**
        * Actions.
        */
        getActions(forRow: boolean, onActionCompleted: Function): any[];
        private showSummaryDimensionMenu;
        private showCalculatedDimensionMenu;
        private showFieldDimensionMenu;
        private showSummaryDimensionMenuOptions;
        private showCalculatedFieldDimensionMenu;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
