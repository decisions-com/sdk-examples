/**
 * Author:khuzema@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../typings/core/generated/inputdataservice.d.ts" />
/// <reference path="../typings/core/generated/datatypes._base.d.ts" />
/// <reference path="../typings/site/site.d.ts" />
/// <reference path="../designers/utils.d.ts" />
declare var dialogCount: number;
declare namespace $DP.Form {
    class SubDialogTitleHelper {
        static hideTitleBar(flowSurfaceObject: $DP.Renderer.FlowFormSize): boolean;
    }
    class BaseFormRunSurface {
        static CONTROLLER_COMPONENT: string;
        static CONTROLLER_COMPONENT_ITEM: string;
        static FormDataHolderList: any[];
        static FlowBase: $DP.Renderer.FlowFormSize[];
        static ErrorIconIdString: string;
        static ValidationMessageIdString: string;
        static ErrorIconHeight: number;
        static ErrorIconWidth: number;
        static ValidationMessageSpilter: string;
        static FatalErrorClass: string;
        static WarningErrorClass: string;
        static ControlEnableClass: string;
        static ControlDisableClass: string;
        static ControlViewOnlyClass: string;
        static ControlVisibleHiddenClass: string;
        static ControlOverlayHtml: string;
        static ControlViewOnlyOverlayHtml: string;
        static Add(formHolderId: string, formId: string, flowTrackingId: string, instanceId: string, formDataHolderObject: any): void;
        static UpdateFlowBase(flowTrackingId: string, flowFormSizeObject: $DP.Renderer.FlowFormSize): void;
        static CreateControl(componentId: string, formId: string): Control.DecisionsControl;
        static getControlObject(componentId: string, formId: string, formInstanceId: string): $DP.Control.DecisionsControl;
        static HandleShowHideState(element: JQuery, isVisible: boolean): void;
        static CreateMeassageHtml(iconElem: any, controlId: string, controlObject: any, formId: string): string;
        static ShowValidationMessages(elem: any, componenetId: string, formId: string): void;
        static HideValidationMessages(elem: any, controlId: string): void;
        static UpdateControlState(controlHolder: JQuery, showOverlay?: boolean): void;
        static ControlEnableDisableSwitcher(controlElem: JQuery, showOverlay?: boolean, hideValueWhenControlIsDisabled?: boolean): void;
        static UpdateControlValueVisiblity(controlElem: JQuery, hideValue: boolean): void;
        static Dispose(formId: string, flowTrackingId: string, instanceId: string): JQueryPromise<any>;
        static GetControlsFromCache(formId: string, instanceId: string): Array<$DP.Control.DecisionsControl>;
        static UpdateControlsCache(formid: string, instanceid: string): void;
        static getFormHolderCacheKey(formid: string, instanceid: string): string;
        static ClearFormControlHolder(formId: string, instanceId: string): void;
        static ShowSpinner(instanceId: string): void;
        static HideSpinner(instanceId: string): void;
        private static getSpinnerElement;
    }
    class DialogResizeObjectInfo {
        newHeight: number;
        newWidth: number;
        elem: JQuery;
    }
    class FormEvent {
        constructor(eventName: string, valueChanged: boolean);
        Name: string;
        ValueChanged: boolean;
    }
    class ExtraInfoObject {
        constructor(formId: string);
        ControlObject: any;
        FormId: string;
        ControllerComponentItemId: string;
    }
    class FormEvents {
        static Click: any;
        static Clear: any;
        static Exit: any;
        static Enter: any;
        static StoppedTyping: any;
        static ValueChanged: any;
        static SelectionChanged: any;
        static RowAdded: any;
        static RowRemoved: any;
        static TabChanged: any;
        Name: string;
        static Initialize: () => void;
    }
    class ISilverFormDataConsumer {
        static ConsumeData(result: any, formId: any, isFromStartUp: any, formInstanceId: any, ...raisedByComponents: $DP.Control.DecisionsControl[]): boolean;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
