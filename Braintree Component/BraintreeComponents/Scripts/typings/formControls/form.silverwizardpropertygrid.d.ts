declare namespace $DP.Control {
    class SilverWizardPropertyGrid extends SilverPropertyGrid {
        options: Silverdark.Components.SilverWizardPropertyGridOptions;
        visibleNodePosition: number;
        nextButton: SilverWizardNextButton;
        previousButton: SilverWizardPreviousButton;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverWizardPropertyGridOptions);
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        onSetValue(): void;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        updatePropertyGridView(data: any): void;
        bindEvents(): void;
        updateButtonVisiblity(): void;
        moveToNode(nodePosition: number): void;
        updateNextButtonText(): void;
        updatePreviousButtonVisiblity(): void;
        getControl(): JQuery;
        get renderDefaultViewOnDesignTime(): boolean;
        renderhtml(): JQuery;
    }
}
declare namespace $DP.Control {
    class SilverWizardNextButton extends ActionControl implements IActionableFormComponent {
        options: Silverdark.Components.SilverWizardNextButtonOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverWizardNextButtonOptions);
        $button: JQuery;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        renderhtml(): JQuery;
        raiseClickEvent(): void;
        setDoneText(): void;
        setNextCaption(): void;
        getActionName(): string;
        getControl(): JQuery;
        doAction(): void;
    }
}
declare namespace $DP.Control {
    class SilverWizardPreviousButton extends ContentBase implements IActionableFormComponent {
        options: Silverdark.Components.SilverWizardPreviousButtonOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverWizardPreviousButtonOptions);
        $button: JQuery;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        renderhtml(): JQuery;
        raiseClickEvent(): void;
        getActionName(): string;
        getControl(): JQuery;
        doAction(): void;
    }
}
