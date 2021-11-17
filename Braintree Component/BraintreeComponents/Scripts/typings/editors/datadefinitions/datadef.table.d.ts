/// <reference path="../../common/utils/string.utils.d.ts" />
/// <reference path="../../entitypicker/epick.combo.d.ts" />
/// <reference path="datadef.value.d.ts" />
/// <reference path="../../typings/jqueryui/jqueryui.d.ts" />
declare namespace $DP.Editors {
    import DataDefinitionForEdit = $D.Framework.Design.Flow.Service.Edit.DataDefinitionForEdit;
    import EditInputsType = $D.Framework.Design.Properties.EditInputsType;
    import ValidationIssue = $D.Framework.ValidationIssue;
    interface DataDefinitionsTableOptions {
        getValidationIssues: () => Promise<ValidationIssue[]>;
        onAdded: () => Promise<DataDefinitionForEdit>;
        onSelected: (index: number) => Promise<void>;
        onRemoved: (index: number) => Promise<void>;
        onChanged: (def: DataDefinitionForEdit, index: number) => Promise<DataDefinitionForEdit>;
        onMoveDown: (index: number) => Promise<void>;
        onMoveUp: (index: number) => Promise<void>;
        onServerChange: (index: number) => Promise<void>;
        apiConfig: DataDefinitionsApiConfig;
        editInputs: EditInputsType;
    }
    class DataDefinitionsTable {
        private options;
        private table;
        /**
         * We use two way to edit PlaceholderData.
         * 1. Left side with table uses DataDefinitionsEditService
         * 2. Right side - property grid uses ContextProviderService
         *
         * These two parts are editing single object and so to prevent the race between applying changes, we need call saving
         * property grid only after saving Placeholder via DataDefinitionsEditService.
         * So we use this property to make sure that property grid is saved after saving via DataDefinitionsEditService.
         */
        private changePromise;
        constructor(options: DataDefinitionsTableOptions);
        render(definitions: DataDefinitionForEdit[], selectIndex?: number, onRowSelected?: () => void): JQuery;
        private refreshRowsValidations;
        private hasInputAsColumn;
        addNewRow(): Promise<JQuery>;
        private createRowView;
        private createHeader;
        updateRow(index: number, dataDef: DataDefinitionForEdit): void;
        private refreshInlineEditor;
        private updateDeleteIcon;
        private updateInlineEditorVisibility;
        private refreshInlineEditors;
        private createValueEditor;
        private onDataDefChange;
        private selectRow;
        private unSelectRow;
        private isDataRow;
        private getRows;
        private getRow;
        private getLastRow;
        private getRowIndex;
        getDataDefinitions(): DataDefinitionForEdit[];
        hasDataDefinitions(): boolean;
        getSelectedDataDefinition(): DataDefinitionForEdit;
        getSelectedIndex(): number;
        isRowSelected(row: JQuery): boolean;
        canMoveRowUp(index?: number): boolean;
        moveRowUp(index?: number, callback?: () => void): void;
        canMoveRowDown(index?: number): boolean;
        moveRowDown(index?: number, callback?: () => void): void;
        focusRowName(row: JQuery): void;
        private deleteRow;
        private showSpinner;
        private hideSpinner;
        private isLastEmptyRow;
        private isLastRow;
    }
}
