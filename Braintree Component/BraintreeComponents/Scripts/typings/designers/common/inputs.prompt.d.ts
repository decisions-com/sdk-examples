/// <reference path="../ruledesigner/containers/rule.bracketscontainer.d.ts" />
/// <reference path="../../editors/datadefinitions/datadefinitions.editor.d.ts" />
/// <reference path="../../typings/jquery/jquery.d.ts" />
declare namespace $DP.Designers {
    import EditInputsType = $D.Framework.Design.Properties.EditInputsType;
    import PromptDisplayData = $D.Framework.Design.Flow.Service.DesignerPromptDisplayData;
    interface IDesignerInputDataDialogOptions {
        inputDataPath: string[];
        promptData: PromptDisplayData;
        getMappingContext: () => $DP.Common.MappingContext;
        getEditingContext: () => Promise<string>;
        getEditInputsType: () => EditInputsType;
        sampleHandler?: SampleHandler;
        canLoadSampleSet?: boolean;
        onSampleSetPicked?: () => void;
        spinOnElement: JQuery;
        onClose?: () => void;
    }
    /**
     * The common approach to edit Input Data for all designers
     */
    function showInputDataDialog(options: IDesignerInputDataDialogOptions): Promise<void>;
    /**
     * The common approach to render prompt for all designers based on DesignerPromptDisplayData from server
     */
    function renderPrompt(options: {
        displayData: Partial<PromptDisplayData>;
        holder: JQuery;
        showInputDataDialog?: () => void;
        viewIntegration?: () => void;
        getEditIntegrationContextId?: () => Promise<string>;
        onIntegrationLayerClose?: () => void;
        onResize?: () => void;
    }): Promise<void>;
    /**
     * Open Integration Details page for Element Registration
     */
    function viewIntegrationForRegistration(regId: string): void;
}
