declare namespace $DP.FormHost {
    interface DecisionsContainer extends DecisionsControl {
        getControls(flatten: boolean): DecisionsControl[];
        addControl(control: DecisionsControl): any;
    }
    interface DecisionsFormHost {
        handleControlEvent(...events: DecisionsControlEvent[]): void;
        getRootContainer(): DecisionsContainer;
        getControls(flatten: boolean): DecisionsControl[];
        addControl(control: DecisionsControl): any;
        InitialData: DataPair[];
        getformSessionId(): string;
        isInPreviewMode?: boolean;
    }
    interface DecisionsFormSurface extends DecisionsFormHost {
        getFormData(controls?: $DP.FormHost.DecisionsControl[], isRule?: boolean): Promise<DataPair[]>;
        getFormRules(): $DP.Form.Rules.IBaseRuleInfo[];
        getFormSurfaceElement(): JQuery;
        isFormSubmitting: boolean;
        options: $DP.Renderer.FormSurfaceOptions;
        getOutcomePaths(): string[];
        getDefaultOutcomePaths(): string[];
        isAlive(): boolean;
        InitialData: DataPair[];
        getControlByComponentId(componentId: string): $DP.FormHost.DecisionsControl;
        getChildren(parentId: string): $DP.FormHost.DecisionsControl[];
        useCompositeControls?: boolean;
    }
    interface DesignTimeFormSurface extends DecisionsFormHost {
    }
    interface RunTimeFormSurface extends DecisionsFormSurface {
        processInstructionEvent(eventData: $D.Framework.Design.Form.NextInstructionEvent): any;
        loadNextForm(eventData: $D.Framework.Design.Form.NextFormInstructionEvent): any;
        updateFormSessionData(dataPairs: DataPair[]): Promise<{
            UpdateFormSessionDataResult: void;
        }>;
        surfaceValidationChanged?(changedControls: $DP.FormHost.DecisionsControl[]): any;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): any;
        getprovider(): IChildSurfaceProvider;
        id: string;
    }
    interface DecisionsPageSurface extends DecisionsFormHost {
        setupPage(folderId: string, data: DecisionsControlData): any;
    }
    interface DecisionsControl {
        initialize(host: DecisionsFormHost, parent: JQuery): void;
        options?: $DP.Control.SilverFormComponentBaseOptions;
        handleEnabledEvent(enableEvent: $D.Framework.Design.Form.EnabledEvent): void;
        handleVisiblityEvent(visiblityEvent: $D.Framework.Design.Form.VisibiltyEvent): void;
        handleValidationChangedEvent(validationIssues: Array<$D.Framework.Design.Form.DecisionsValidationIssue>): void;
        handleCustomValidationChangedEvent(ruleId: string, validationIssues: Array<$D.Framework.Design.Form.DecisionsValidationIssue>): void;
        clearValidations(): void;
        clearCustomValidations(ruleId: string): any;
        allValidations(includeChildComponents?: boolean): $D.Framework.Design.Form.DecisionsValidationIssue[];
        setValidationBackgroundColorOnInput(color: string): void;
        unsetValidationBackgroundColorOnInput(): void;
    }
    interface DecisionsActionControl extends DecisionsControl {
        getActionName(): string;
    }
    interface ISyncableControl {
        options: Silverdark.Components.DataContentBaseOptions;
        shouldSync(events: Array<DecisionsControlEvent>): boolean;
    }
    function isSyncable(object: any): object is ISyncableControl;
    interface IDataConsumer {
        setValue(data: DecisionsControlData[], isFromStartUp: boolean): boolean;
    }
    interface IAsyncDataConsumer {
        setValueAsync(data: DecisionsControlData[]): Promise<boolean>;
    }
    interface IDataProducer {
        getValue(): DecisionsControlData[];
    }
    interface IAsyncDataProducer {
        getValueAsync(): Promise<DecisionsControlData[]>;
    }
    interface DecisionsDataControl extends DecisionsControl, IDataConsumer, IDataProducer {
    }
    interface IDataDependentControl {
        dependentDataNames: Array<string>;
    }
    interface IChildSurfaceProvider extends IDataProducer, IAsyncDataProducer {
        getParentComponentId(): string;
        getSurface(id: string): $DP.FormHost.RunTimeFormSurface;
        host: DecisionsFormHost;
    }
    class BaseFormSurface implements DecisionsFormHost {
        getformSessionId(): string;
        handleControlEvent(...events: DecisionsControlEvent[]): void;
        getRootContainer(): DecisionsContainer;
        getControls(flatten: boolean): DecisionsControl[];
        addControl(control: DecisionsControl): void;
        getFormSurfaceElement(): JQuery;
        get InitialData(): DataPair[];
        initializeControls(): Promise<void>;
        protected getAllControlsElement(): JQuery;
    }
    class DecisionsControlData {
        constructor(name?: string, value?: any);
        name: string;
        value: any;
    }
    class DecisionsControlEvent {
        producer: DecisionsControl;
        constructor(producer?: DecisionsControl);
        get valueChange(): boolean;
        get formTriggerType(): $D.Framework.ComponentData.FormTriggerType | null;
        isSame(componentName: string, events: $D.Framework.ComponentData.FormTriggerType[]): boolean;
    }
    class CustomEvent extends DecisionsControlEvent {
        private eventName;
        constructor(eventName: string, producer?: DecisionsControl);
        toString(): string;
    }
    class DataChangedEvent extends DecisionsControlEvent {
        toString(): string;
        get valueChange(): boolean;
        get formTriggerType(): $D.Framework.ComponentData.FormTriggerType | null;
    }
    class FocusLostEvent extends DecisionsControlEvent {
        toString(): string;
    }
    class KeyPressEvent extends DecisionsControlEvent {
        toString(): string;
    }
    class ClickEvent extends DecisionsControlEvent {
        toString(): string;
        get valueChange(): boolean;
        get formTriggerType(): $D.Framework.ComponentData.FormTriggerType | null;
    }
    class SubmitEvent extends DecisionsControlEvent {
        toString(): string;
        get valueChange(): boolean;
    }
    class ClearEvent extends DecisionsControlEvent {
        toString(): string;
        get valueChange(): boolean;
        get formTriggerType(): $D.Framework.ComponentData.FormTriggerType | null;
    }
    class ExitEvent extends DecisionsControlEvent {
        toString(): string;
        get valueChange(): boolean;
        get formTriggerType(): $D.Framework.ComponentData.FormTriggerType | null;
    }
    class EnterEvent extends DecisionsControlEvent {
        toString(): string;
        get formTriggerType(): $D.Framework.ComponentData.FormTriggerType | null;
    }
    class StoppedTypingEvent extends DecisionsControlEvent {
        toString(): string;
        get valueChange(): boolean;
        get formTriggerType(): $D.Framework.ComponentData.FormTriggerType | null;
    }
    class SelectionChangedEvent extends DecisionsControlEvent {
        toString(): string;
        get valueChange(): boolean;
        get formTriggerType(): $D.Framework.ComponentData.FormTriggerType | null;
    }
    class RowAddedEvent extends DecisionsControlEvent {
        toString(): string;
        get valueChange(): boolean;
        get formTriggerType(): $D.Framework.ComponentData.FormTriggerType | null;
    }
    class RowRemovedEvent extends DecisionsControlEvent {
        toString(): string;
        get valueChange(): boolean;
        get formTriggerType(): $D.Framework.ComponentData.FormTriggerType | null;
    }
    class NewControlDataEvent extends DecisionsControlEvent {
        toString(): string;
        get valueChange(): boolean;
        data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
    }
    class TabChangedEvent extends DecisionsControlEvent {
        toString(): string;
        get valueChange(): boolean;
        get formTriggerType(): $D.Framework.ComponentData.FormTriggerType | null;
    }
    abstract class BaseFormEventProcessor {
        protected surface: RunTimeFormSurface;
        constructor(surface: RunTimeFormSurface);
        abstract process(event: $D.Framework.Design.Form.DecisionsFormInfoServerEvent): any;
        onProcessCompleted(): void;
        protected hasPartComponentId(componentId: string): boolean;
        protected getComponentId(componentId: string): string;
    }
    class NextInstructionEventProcessor extends BaseFormEventProcessor {
        constructor(surface: RunTimeFormSurface);
        process(event: $D.Framework.Design.Form.NextInstructionEvent): Promise<void>;
    }
    class NextFormInstructionEventProcessor extends BaseFormEventProcessor {
        constructor(surface: RunTimeFormSurface);
        process(event: $D.Framework.Design.Form.NextFormInstructionEvent): Promise<any>;
    }
    class EnabledEventProcessor extends BaseFormEventProcessor {
        constructor(surface: RunTimeFormSurface);
        process(event: $D.Framework.Design.Form.EnabledEvent): Promise<void>;
    }
    class NewFormDataEventProcessor extends BaseFormEventProcessor {
        constructor(surface: RunTimeFormSurface);
        process(event: $D.Framework.Design.Form.NewFormDataEvent): Promise<any>;
    }
    class NewFormDataWithHideLoadingIndicatorEventProcessor extends NewFormDataEventProcessor {
        constructor(surface: RunTimeFormSurface);
        process(event: $D.Framework.Design.Form.NewFormDataEvent): Promise<void>;
    }
    class CustomValidationChangedEventProcessor extends BaseFormEventProcessor {
        constructor(surface: RunTimeFormSurface);
        process(event: $D.Framework.Design.Form.CustomValidationChangedEvent): Promise<void>;
    }
    class ClearValidationIssuesEventProcessor extends BaseFormEventProcessor {
        constructor(surface: RunTimeFormSurface);
        process(event: $D.Framework.Design.Form.ClearValidationIssuesEvent): Promise<void>;
    }
    class ValidationChangedEventProcessor extends BaseFormEventProcessor {
        constructor(surface: RunTimeFormSurface);
        process(event: $D.Framework.Design.Form.ValidationChangedEvent): Promise<void>;
    }
    class OutcomeRuleEventProcessor extends BaseFormEventProcessor {
        constructor(surface: RunTimeFormSurface);
        process(event: $D.Framework.Design.Form.OutcomeRuleEvent): Promise<void>;
        private getHost;
    }
    class VisiblityEventProcessor extends BaseFormEventProcessor {
        private affectedContainers;
        constructor(surface: RunTimeFormSurface);
        process(event: $D.Framework.Design.Form.VisibiltyEvent): Promise<void>;
        onProcessCompleted(): void;
    }
    class FormEventProcessor {
        private processorBag;
        process(surface: RunTimeFormSurface, event: $D.Framework.Design.Form.DecisionsFormInfoServerEvent): Promise<any>;
        clear(id: string): void;
        private getProcessorByType;
        onProcessingCompleted(): void;
    }
    interface IBeforeFormSubmit {
        onBeforeSubmit(): any;
    }
    function isBeforeFormSubmit(object: any): object is IBeforeFormSubmit;
    interface ICopyTextSourceControl {
        getText(): string;
    }
}
