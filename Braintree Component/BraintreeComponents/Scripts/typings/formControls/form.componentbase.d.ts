/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../Decisions.Controls/keyTriggers.d.ts" />
/// <reference path="../typings/decisions.helpsystemhelper.d.ts" />
declare namespace $DP.Control {
    export import SilverFormComponentBaseOptions = $D.Silverlight.UI.Forms.SilverFormComponentBaseOptions;
    interface IEnablityChangeListner {
        onEnablityChange: (isEnable: boolean) => void;
    }
    interface IVisiblityChangeListner {
        onVisiblityChange: () => void;
    }
    interface IControlStateListner extends IEnablityChangeListner, IVisiblityChangeListner {
    }
    abstract class FormComponentBase implements $DP.FormHost.DecisionsControl, IControlStateListner {
        $controlLayout: JQuery;
        options: $D.Silverlight.UI.Forms.SilverFormComponentBaseOptions;
        static dataKey: string;
        static getInstance(el: JQuery): FormComponentBase;
        static get className(): string;
        static get selector(): string;
        static get disableClassName(): string;
        static get enableDisableHolder(): string;
        get renderDefaultViewOnDesignTime(): boolean;
        renderOnDesignTime(): JQuery;
        get disableHolderElem(): JQuery;
        enableDisableSelector(): string;
        readonly LoadCompleteEventName: string;
        constructor($controlLayout: JQuery, options: $D.Silverlight.UI.Forms.SilverFormComponentBaseOptions);
        controlid: string;
        $control: JQuery;
        host: $DP.FormHost.DecisionsFormSurface;
        isEnable: boolean;
        isVisible: boolean;
        shortTypeName?: string;
        hideControlValue: boolean;
        validationProvider: $DP.Control.Validation.BaseValidationProvider;
        initialize(host: $DP.FormHost.DecisionsFormHost): void | Promise<void>;
        isParentEnable(): boolean;
        raiseEvent(...events: $DP.FormHost.DecisionsControlEvent[]): void;
        validations: $D.Framework.Design.Form.DecisionsValidationIssue[];
        customValidations: $D.Framework.Design.Form.DecisionsValidationIssue[];
        originalBackgroundColor: string;
        setValidationBackgroundColorOnInput(color: string): void;
        unsetValidationBackgroundColorOnInput(): void;
        getValidationBackgroundControl(): JQuery;
        allValidations(includeChildComponentIssues?: boolean): $D.Framework.Design.Form.DecisionsValidationIssue[];
        abstract getControl(): JQuery;
        get showDisableControlOverlay(): boolean;
        handleEnabledEvent(enableEvent: $D.Framework.Design.Form.EnabledEvent): void;
        handleVisiblityEvent(visiblityEvent: $D.Framework.Design.Form.VisibiltyEvent): void;
        onVisiblityChange(): void;
        onEnablityChange(isEnable: boolean): void;
        clearValidations(): void;
        processAllValidations(): void;
        handleCustomValidationChangedEvent(ruleId: string, validationIssues: Array<$D.Framework.Design.Form.DecisionsValidationIssue>): void;
        clearCustomValidations(ruleId: string): void;
        handleValidationChangedEvent(validationIssues: Array<$D.Framework.Design.Form.DecisionsValidationIssue>): void;
        loadComplete(): void;
        triggerResize(options: {
            width: number;
            height: number | 'auto';
        }): void;
        renderLayout(layoutProperties?: LayoutProperties): JQuery;
        renderhtml(forHost: $DP.FormHost.DecisionsFormHost): JQuery | Promise<JQuery>;
    }
}
