/// <reference path="../../typings/core/generated/sequentialservice.d.ts" />
declare namespace $DP.Editors {
    import DataDefinitionForEdit = $D.Framework.Design.Flow.Service.Edit.DataDefinitionForEdit;
    interface DataDefValueEditorOptions {
        host: JQuery;
        dataDef: DataDefinitionForEdit;
        index: number;
        apiConfig: DataDefinitionsApiConfig;
        onChange?: (def: DataDefinitionForEdit) => void;
        onEditDone?: (def: DataDefinitionForEdit) => void;
    }
    class DataDefValueEditor {
        private options;
        constructor(options: DataDefValueEditorOptions);
        private render;
        private showSequentialPickerDialog;
        private update;
    }
}
