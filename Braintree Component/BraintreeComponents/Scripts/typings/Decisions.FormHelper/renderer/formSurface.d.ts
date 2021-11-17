declare namespace $DP.Controls {
    class FormSurface {
        defaultOutcomeSenarioComponentId: string;
        runOutcomeRulesAtStartup: string[];
        keyTriggers: $D.Silverlight.UI.Forms.KeyTriggerDefinition[];
        rootContainer: $DP.Containers.ContainerOptions;
        formValidationSetting: $D.Silverlight.UI.Core.FormDesignerModel.FormValidationSetting;
        allowRuntimeCSSFileName: boolean;
        cssDocumentDataName: string;
        cssDocumentIds: string[];
        backgroundSurface?: FormSurface;
        formTitle?: string;
        rootContainerType?: $DP.Containers.RootContainerType;
        showButtonPanel?: boolean;
    }
}
