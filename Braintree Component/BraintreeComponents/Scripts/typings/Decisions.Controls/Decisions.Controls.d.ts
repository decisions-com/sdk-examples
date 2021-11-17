/**
 * Author:khuzema@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../decisions.formhelper/decisions.formhelper.d.ts" />
/// <reference path="../layouts/decisions.ui.d.ts" />
/// <reference path="../typings/jquery/jquery.timepicker.d.ts" />
/// <reference path="../typings/jquery/jquerymobile.d.ts" />
/// <reference path="../typings/moment/moment.d.ts" />
/// <reference path="../accounting/accounting.d.ts" />
declare namespace $DP.Control {
    function CallFunctionUsingNameAndParameter(functionName: string, paramaters: any[]): any;
    var FormControlHolder: DecisionsControl[];
    interface IActionableFormComponent {
        doAction(): any;
    }
    class DecisionsControl {
        IsInDesignMode: boolean;
        ComponentId: any;
        ComponentName: any;
        ControlOutputDataName: any;
        ImplementedInterfaces: any;
        ValidationIssues: any[];
        IsVisible: boolean;
        IsEnable: boolean;
        FormId: any;
        InstanceId: any;
        IsMobile: boolean;
        ControlInstanceId: string;
        ShouldRaiseValueChanged: boolean;
        OnControlDisabled(): void;
        OnControlEnabled(): void;
        KeyTriggers: $D.Silverlight.UI.Forms.KeyTriggerDefinition[];
        private controlElem;
        get ControlElem(): JQuery;
        set ControlElem(e: JQuery);
        ConsumeData(consumeDataVal: any, isFromStartUp: any): boolean;
        UpdateHiddenValue(): void;
        GetHiddenField(): JQuery;
        GetValidationBackgroundControl(): JQuery;
        SetValidationBackground(backgroundColor: any): boolean;
        UnsetValidationBackground(): boolean;
        CheckPendingEvents(): void;
        Initialize(options?: any): void;
        getHostForm(): $DP.Renderer.Form;
    }
    class DecisionsDataControl extends DecisionsControl {
        DataName: string;
    }
    var AddControlToForm: (formId: string, controlObject: DecisionsControl) => void;
    var SimpleControlResize: (event: Event, options: any) => void;
    interface DataGridColumn {
        title: string;
        width: number;
        fieldName: string;
    }
    class NavigationTree extends DecisionsDataControl {
        UpdateHiddenValue(): void;
    }
    class SilverCSVEditorResizer {
        element: JQuery;
        newHeight: number;
        newWidth: number;
    }
    class ChatViewer extends DecisionsDataControl {
    }
    class Calendar extends DecisionsDataControl {
        consumeDataValue: any;
        ConsumeData(consumDataVal: any, isFromStartUp: any): boolean;
        UpdateHiddenValue(): void;
    }
}
declare namespace $DP.UI.Controls {
    interface Resize {
        OnResizeEvent(event: Event, options: any): void;
    }
    class ResizeContainer implements Resize {
        ContainerId: string;
        constructor(containerId: string);
        static Resize(containerId: string): ResizeContainer;
        OnResizeEvent: (event: Event, options: any) => void;
    }
}
declare namespace $DP.MiniWizard {
    enum HorizontalAlignment {
        Top = 0,
        Right = 1,
        Bottom = 2,
        Left = 4,
        Center = 5
    }
    enum VerticalAlignment {
        Top = 0,
        Right = 1,
        Bottom = 2,
        Left = 4,
        Center = 5
    }
    class Helper {
        UIElementStickTo: any;
        MiniWizardSize: any;
        MiniWizardStep: any;
        MiniWizardContainer: JQuery;
        static DisplayWizard(options: any): boolean;
        static RemoveMiniWizardPanel(event: Event): void;
    }
    class MiniWizardLayer {
        autoClose: boolean;
        showOverlay: boolean;
        Title: string;
        HasPreviousButton: boolean;
        HasNextButton: boolean;
        NextButtonName: any;
        PreviousButtonName: any;
        AdvancedButtons: any;
        ClosedEvent: string;
        LyerContent: string;
        CssClass: any;
        ShowHeader: boolean;
        Height: any;
        Width: any;
        StickToElement: any;
        MiniWizardId: any;
        constructor(options: MiniWizardParameters);
        show(): void;
        getMiniWizardButtonsHtml(): string;
        getMiniWizardHtml(): StringBuilderStatic;
        close(): void;
    }
    class ContentStepBase {
        NextButtonName: string;
        AdvancedButtonName: string;
        FinishButtonName: string;
        NextStepButtons: any[];
        HasAdvancedButton: boolean;
        HasNextStep: boolean;
        IsValid: boolean;
        Content: any;
    }
    class MiniWizardParameters {
        WizardContent: any;
        WizardDataFetchingCallBack: any;
        WizardPreviousButtonName: any;
        WizardAdvancedButtonOptions: any;
        WizardElementStickTo: HTMLElement;
        WizardStyleClass: string;
        WizardHasPreviousButton: boolean;
        WizardHasNextButton: boolean;
        WizardNextButtonName: string;
        WizardId: string;
        WizardSize: $DP.UI.Rect;
        WizardContentHtmlGeneration: (resultData: string) => any;
        WizardContentLoadedEvent: (wizardPanel: any) => any;
        WizardButtonsCallBack: (element: HTMLElement) => any;
        LoadDataSources: boolean;
        LoadDataFilters: boolean;
        LoadDataColumns: boolean;
        LoadViews: boolean;
    }
}
declare namespace $DP.Form {
    enum ValidationType {
        CurrentControl = 0,
        AllControls = 1
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
