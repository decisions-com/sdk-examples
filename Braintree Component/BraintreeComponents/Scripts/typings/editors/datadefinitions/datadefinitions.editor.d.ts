/**
 * Author:oleg@decisions.com
 * Notes:Unauthorized, unlicensed use, redistribution, modification is not allowed.
*/
/// <reference path="datadef.table.d.ts" />
/// <reference path="datadef.api.d.ts" />
/// <reference path="../../dialog/dialog.d.ts" />
/// <reference path="../../dialog/dialog.errorpopup.d.ts" />
/// <reference path="../../common/spinner.d.ts" />
/// <reference path="../../designers/common/ContextEditor.d.ts" />
/// <reference path="../../typings/jquery/jquery.d.ts" />
/// <reference path="../../entitypicker/epick.ui.d.ts" />
/// <reference path="../../actions/actionsmenu/menu.helpers.d.ts" />
declare namespace $DP.Editors {
    import DataDefinitionForEdit = $D.Framework.Design.Flow.Service.Edit.DataDefinitionForEdit;
    import EditInputsType = $D.Framework.Design.Properties.EditInputsType;
    import SampleCategory = $D.Framework.Design.Flow.Service.Debugging.Samples.SampleCategory;
    import PromptDisplayData = $D.Framework.Design.Flow.Service.DesignerPromptDisplayData;
    interface IHasSampleCategory {
        pickedSampleCategory: SampleCategory;
    }
    interface DataDefinitionsEditorCloseHandler {
        (options: IHasSampleCategory): void;
    }
    interface DataDefinitionsEditorOptions {
        apiConfig: DataDefinitionsApiConfig;
        editInputs?: EditInputsType;
        canLoadSampleSet?: boolean;
        onClose?: DataDefinitionsEditorCloseHandler;
        onPickSampleSet?: (cat: SampleCategory) => void;
    }
    class DataDefinitionsEditor {
        private options;
        private root;
        private contextEditorHolder;
        private contextEditor;
        private defsTable;
        private linksHolder;
        private validationsHolder;
        private pickedSampleCategory;
        private subscribeToken;
        private needsReload;
        private isBusy;
        static updatePropertyGridView(holder: JQuery, itemLabels: string[]): void;
        static showEitherOrDataDefinitionsDialog(options: DataDefinitionsEditorOptions & {
            promptData: PromptDisplayData;
        }): void;
        static getCurrentView(inputData: PromptDisplayData): dpComponents.DataDefinitionsDialogView | undefined;
        /**
         * Opens a legacy Data Definitions Editor dialog from Property Grid
         */
        static showInDialogForContext(options: DataDefinitionsEditorOptions): void;
        static dropEntry(options: DataDefinitionsEditorOptions, index?: number): Promise<void>;
        constructor(options: DataDefinitionsEditorOptions);
        render(data: DataDefinitionForEdit[]): JQuery;
        private pickSampleSet;
        private uploadSampleSet;
        private afteSampleSetLoading;
        private editSelectedDataDefinition;
        private setupContextEditor;
        private getContextId;
        private putTableIn;
        private showValidation;
        private showLinks;
        private showReduceDataDialog;
        private handleError;
        private close;
        private showSpinner;
        private hideSpinner;
        private reloadDataDefinitions;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
