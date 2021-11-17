import RuleEngine = $DP.Form.Rules.RuleEngine;
declare namespace $DP.Control {
    class UserDefinedBase extends FormComponentBase implements $DP.FormHost.IChildSurfaceProvider {
        options: Silverdark.Components.UserDefinedControlBaseOptions;
        private _layoutProperties?;
        getValueAsync(): Promise<FormHost.DecisionsControlData[]>;
        protected childFormSurfaceInfo: ChildFormSurface[];
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        getValue(): $DP.FormHost.DecisionsControlData[];
        getControl(): JQuery;
        getChildSurface(rowId: string): ChildFormSurface;
        getControlsData(): Promise<DataPair[]>;
        constructor($controlLayout: JQuery, options: Silverdark.Components.UserDefinedControlBaseOptions);
        getHostForm(): $DP.Renderer.Form;
        getSurface(id: string): FormHost.RunTimeFormSurface;
        getParentComponentId(): string;
        updateKeyTriggers(): void;
        allValidations(includeChildComponentIssues?: boolean): $D.Framework.Design.Form.DecisionsValidationIssue[];
        updatetabbing(): void;
        get userDefinedSection(): JQuery;
        renderLayout(layoutProperties?: any): JQuery;
        onEnablityChange(isEnable: boolean): void;
        updateControlState(): void;
        get showDisableControlOverlay(): boolean;
    }
    class UserDefined extends UserDefinedBase {
        options: Silverdark.Components.UserDefinedOptions;
        private _selectedComponentId;
        private _formId;
        private _formInstanceId;
        private _dataName;
        private container;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        constructor($controlLayout: JQuery, options: Silverdark.Components.UserDefinedOptions);
        initializeContainer(): void;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        setValueAsync(data: $DP.FormHost.DecisionsControlData[]): Promise<boolean>;
        private renderChild;
        triggerResize(options: {
            width: number;
            height: number;
        }): void;
        getControlsData(): Promise<DataPair[]>;
        getControl(): JQuery;
        get formInstanceId(): string;
        private static getFormControlById;
        getRuleInfo(): Form.Rules.IFormRule[];
        renderhtml(formHost: $DP.FormHost.DecisionsFormHost): Promise<JQuery>;
    }
    interface ChildFormSurfaceOptions extends Renderer.FormSurfaceOptions {
        id: string;
        host: JQuery;
        provider: $DP.FormHost.IChildSurfaceProvider;
    }
    class ChildFormSurface extends $DP.Renderer.Form {
        options: ChildFormSurfaceOptions;
        id: string;
        initialData: DataPair[];
        constructor(options: ChildFormSurfaceOptions);
        dispose(): void;
        bindChildTimerFlow(): void;
        getOutcomePaths(): string[];
        getDefaultOutcomePaths(): string[];
        getFormSurfaceElement(): JQuery;
        getprovider(): FormHost.IChildSurfaceProvider;
        private surfaceTriggers;
        get keyTriggers(): $D.Silverlight.UI.Forms.KeyTriggerDefinition[];
        set keyTriggers(surfaceTriggers: $D.Silverlight.UI.Forms.KeyTriggerDefinition[]);
        initialize(): Promise<void>;
        getFormData(controls?: $DP.FormHost.DecisionsControl[], isRule?: boolean): Promise<DataPair[]>;
        getControls(flatten: boolean, isRule?: boolean): FormHost.DecisionsControl[];
        protected getAllControlsElement(): JQuery;
        get InitialData(): DataPair[];
        getFormRules(): $DP.Form.Rules.IFormRule[];
    }
}
declare namespace Silverdark.Components {
    interface UserDefinedControlBaseOptions {
        dataName?: string;
        formId?: string;
        ruleInfo?: $DP.Form.Rules.IFormRule[];
    }
}
