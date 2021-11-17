/**
 * Author:khuzema@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../../typings/core/generated/datatypes._base.d.ts" />
/// <reference path="../../typings/site/site.d.ts" />
/// <reference path="../../typings/core/generated/formservice.d.ts" />
/// <reference path="../../typings/core/generated/cssservice.d.ts" />
/// <reference path="../../Decisions.Controls/Decisions.FormHost.d.ts" />
/// <reference path="../../layouts/decisions.ui.d.ts" />
/// <reference path="../../dialog/dialog.d.ts" />
/// <reference path="form.portalslider.d.ts" />
import FormCustomRuleInputType = $DP.Form.Rules.FormCustomRuleInputType;
import TriggerType = $D.Framework.Design.Form.TriggerType;
declare var PortalLoadingType: string;
declare namespace $DP.Renderer {
    import FormRule = $DP.Form.Rules.IFormRule;
    import RuleEngine = $DP.Form.Rules.RuleEngine;
    import RunRuleSessionInfo = $D.Framework.Design.Form.RunRuleSessionInfo;
    const FORM_SURFACE_DATA_HOLDER = "_$DP_Renderer__formSurface";
    const FLOW_TRACKING_ID = "_flowTrackingId_";
    interface FormSurfaceOptions {
        instanceId: string;
        canUsePortal: boolean;
        formInstruction: $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction;
        formTitle?: string;
        isFormHosted: boolean;
        isContinueFlow: boolean;
        dataHolderElement: JQuery;
        formRules?: FormRule[];
        keyTriggers?: $D.Silverlight.UI.Forms.KeyTriggerDefinition[];
        runOutcomeRulesAtStartup?: string[];
        defaultOutcomeSenarioComponentId?: string;
        formValidationSetting?: $D.Silverlight.UI.Core.FormDesignerModel.FormValidationSetting;
        id?: string;
        isInDebug: boolean;
        restrictTabbingtoForm: boolean;
        autoFocusFirstControl: boolean;
    }
    interface CssDocumentInfo {
        documentName: string;
        modifiedDate: string;
    }
    interface FormSessionInfo {
        formSurface: $DP.Controls.FormSurface;
        formRules: FormRule[];
        documents: CssDocumentInfo[];
    }
    interface FormRenderingOptions {
        instanceId: string;
        host: JQuery;
        currentInstruction: $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction;
        formSessionId: string;
        isInDebug: boolean;
        formSessionInfoJSON: string;
    }
    class Form extends $DP.FormHost.BaseFormSurface implements $DP.FormHost.RunTimeFormSurface {
        options: FormSurfaceOptions;
        initialData: DataPair[];
        static cssDocuments: CssUtils.CssDocumentInfo[];
        useCompositeControls: boolean;
        static onReceiveNextInstruction(renderingData: FormRenderingOptions, event: $D.Framework.Design.Form.NextInstructionEvent | $D.Framework.Design.Form.NextFormInstructionEvent): void;
        static renderForm(renderingData: FormRenderingOptions): Promise<void>;
        static CheckAndLoadBackgroundForms(form: FormHost.DecisionsFormHost, parent: JQuery, formSurface: Controls.FormSurface): Promise<JQuery>;
        static LoadBackgroundForm(form: FormHost.DecisionsFormHost, parent: JQuery, backgroundFormSurface: $DP.Controls.FormSurface): Promise<void>;
        getprovider(): FormHost.IChildSurfaceProvider;
        id: string;
        protected __formid: string;
        formWrapperElement: JQuery;
        protected ruleEngine: RuleEngine;
        get isNextFormInSessionInstruction(): boolean;
        get isFlowCompletedInstruction(): boolean;
        get isCloseFormSessionInstruction(): boolean;
        get isCustomFormInstruction(): boolean;
        get isSuggestNextFormInSessionInstruction(): boolean;
        get isExceptionResultInstruction(): boolean;
        get isEndFormInstruction(): boolean;
        get isViewOnlyFormInstruction(): boolean;
        get isReadOnlyFormInstruction(): boolean;
        get isStandAloneFormInstruction(): boolean;
        static get HOST_VALIDATIONS_CHANGED(): string;
        get InitialData(): DataPair[];
        get flowid(): string;
        get formSessionInfoId(): string;
        get formId(): string;
        get flowtrackingId(): string;
        get steptrackingId(): string;
        get formName(): string;
        get formTitle(): string;
        private isCloseFormHandled;
        isFormSubmitting: boolean;
        private keepAliveTimer;
        isbusy: boolean;
        private formstartTime;
        tabEnabledElements: Element[];
        compositeControlData: DataPair[];
        private parent;
        static create(formSurface: FormSurfaceOptions): Form;
        static get(host: JQuery): Form;
        constructor(options: FormSurfaceOptions);
        static setTypeName(object: {
            $type?: string;
            __type?: string;
        }, recursive?: boolean): {
            $type?: string;
            __type?: string;
        };
        get instanceId(): string;
        getFormSurfaceElement(): JQuery;
        setCompositeControlData(data: DataPair[]): void;
        private dataNamesForDataDependentControls;
        private dataDependentControls;
        protected getAllControlsElement(): JQuery;
        initialize(host: $DP.FormHost.DecisionsFormHost, parent: JQuery): Promise<void>;
        setFormInstructionTypeName(): void;
        publishEvents(events: DataPair[], onAfterPublishing?: () => void): void;
        processInstructionEvent(eventData: $D.Framework.Design.Form.NextInstructionEvent): void;
        loadNextForm(eventData: $D.Framework.Design.Form.NextFormInstructionEvent): JQueryXHR;
        private onFormLoad;
        private showExceptionAndCloseForm;
        checkAndCloseForm(navigatedToFolder?: boolean): void;
        private isvalidated;
        onError(): void;
        private closeFlowDialog;
        restartFlowOnComplete(): void;
        updateTabElements(): void;
        static setTabbing(_container: JQuery, autoFocusFirstControl?: boolean, trapTabbing?: boolean): Element[];
        static getFlowSurfaceObject(content: JQuery): FlowFormSize;
        static setSubWindowFormSizing(dialog: JQuery, containerWidth: number, containerHeight: number, formSurfaceOptions: any): UI.Size;
        static get formDiagramClass(): string;
        static get formPageClass(): string;
        FormClosed(keepFormSessionTemporary?: boolean): void;
        private onFormLoadComplete;
        private layoutForm;
        static onFormLayoutComplete(formSurface: JQuery, formTitle: string, onClose: () => void, onCloseNewWindow: () => void): void;
        /**
         * This method is needed for simple forms while resizing dialog, we will get rid of this as soon as we move the form dialog into React
         * @param formSurface
         * @param currentInstruction
         * @param baseForm
         */
        static setUpFormSurfaceData(formSurface: JQuery, currentInstruction: any): void;
        static bindkeyTriggers(formSurface: $DP.FormHost.DecisionsFormSurface, controlToBindEvent: JQuery, keyTriggers: $D.Silverlight.UI.Forms.KeyTriggerDefinition[], componentId: string): void;
        private static handleKeyTriggerCustomEvent;
        loadComplete(): void;
        static mobileResizeFormSurface(): void;
        doOnOrientationChange(event: any): void;
        keepAlive(): void;
        setKeyTriggers(formControls: $DP.Control.DecisionsControl[]): void;
        getAllOutcomeControls(): $DP.FormHost.DecisionsControl[];
        getAllDataDependentControl(): $DP.FormHost.DecisionsControl[];
        getFormData(controls?: $DP.FormHost.DecisionsControl[], isRule?: boolean): Promise<DataPair[]>;
        private syncContorlsQueue;
        private syncContorlsWithSameDataNames;
        private getControlsWithSamaDataName;
        isAlive(): boolean;
        doNotClearValidationsOnEventNames: Array<string>;
        handleControlEvent(...events: $DP.FormHost.DecisionsControlEvent[]): Promise<void>;
        runRuleForAllSurfaces(hostSurface: Form, sessionInfos: RunRuleSessionInfo[]): Promise<void>;
        private cacheddRuleSessionInfos;
        selectPath(outcomName: string): Promise<void>;
        private raiseDataDependentEvents;
        getRootContainer(): $DP.FormHost.DecisionsContainer;
        updateFormSessionData(dataPairs: DataPair[]): Promise<{
            UpdateFormSessionDataResult: void;
        }>;
        processor: $DP.FormHost.FormEventProcessor;
        handleServerEvents(...eventDatas: $D.Framework.Design.Form.DecisionsFormInfoServerEvent[]): Promise<void>;
        handleServerEvent(eventData: $D.Framework.Design.Form.DecisionsServerControlEventsHolder): void;
        surfaceValidationChanged(changedControls: $DP.FormHost.DecisionsControl[]): void;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): Promise<boolean>;
        getValue(controls?: $DP.FormHost.DecisionsControl[], isRule?: boolean): Promise<$DP.FormHost.DecisionsControlData[]>;
        protected controlsHolder: $DP.FormHost.DecisionsControl[];
        addControl(control: $DP.FormHost.DecisionsControl): void;
        getControls(flatten: boolean, isRule?: boolean): $DP.FormHost.DecisionsControl[];
        getChildren(parentId: string): $DP.FormHost.DecisionsControl[];
        getControlByComponentId(componentId: string): $DP.FormHost.DecisionsControl;
        updateControlsCache(formid: string, instanceid: string): void;
        getformSessionId(): string;
        getFormRules(): $DP.Form.Rules.IFormRule[];
        getOutcomePaths(): string[];
        getDefaultOutcomePaths(): string[];
        getImageUrl(propertyName: string, componentId: string, imageinfo: $D.Framework.ServiceLayer.Services.Image.ImageInfo): string;
        static getFormInstance(element: JQuery): $DP.Renderer.Form;
        checkAndUpdateURLParmsRunningInNewWindow(): void;
    }
    enum ScriptLoadType {
        All = 0,
        Specific = 1,
        ForFlow = 2,
        Mobile = 3,
        None = 4
    }
    class ControlLoader {
        static loadControl(formHost: $DP.FormHost.DecisionsFormHost, parent: JQuery, options: $D.Silverlight.UI.Forms.SilverFormComponentBaseOptions, layoutProperties?: any, useCompositeControls?: boolean): Promise<void>;
    }
    interface FormDataHolder {
        FlowStepTrackingId: any;
        FlowTrackingId: any;
        InstanceId: any;
        FormId: any;
        Title: any;
    }
    interface FormDataHolder {
        FlowStepTrackingId: any;
        FlowTrackingId: any;
        InstanceId: any;
        FormId: any;
        Title: any;
    }
    interface FlowFormSize {
        FlowTrackingId: string;
        CurrentForm: $D.Framework.Design.Flow.Service.Execution.BaseFormInSessionInstruction;
        BaseForm?: $D.Framework.Design.Flow.Service.Execution.BaseFormInSessionInstruction;
        PreviousForm?: $D.Framework.Design.Flow.Service.Execution.BaseFormInSessionInstruction;
        IsCurrentFormInitialize: boolean;
        IsPreviousFormInitialize: boolean;
    }
}
interface JQuery {
    formSurfaceView(options: $DP.Renderer.FormSurfaceOptions): JQuery;
    formSurfaceView(methodName: 'getControls'): $DP.FormHost.DecisionsControl[];
    formSurfaceView(methodName: string): any;
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
