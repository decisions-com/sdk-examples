declare namespace $DP.Control {
    export import ShowUnderlineOptions = Silverdark.Components.ShowUnderlineOptions;
    abstract class SilverSubDataFlowControl extends ContentBase implements IActionableFormComponent {
        options: Silverdark.Designers.Flows.Executioner.SubDataFlowControlBaseOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Designers.Flows.Executioner.SubDataFlowControlBaseOptions);
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        $button: JQuery;
        abstract getButtonControl(): JQuery;
        private lastFocusedElement;
        runFlowAtStartUp(): void;
        runFlow(): void;
        doAction(): void;
    }
    class SilverSubDataFlowButton extends SilverSubDataFlowControl {
        options: Silverdark.Designers.Flows.Executioner.SilverSubDataFlowButtonOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Designers.Flows.Executioner.SilverSubDataFlowButtonOptions);
        getButtonControl(): JQuery;
        getControl(): JQuery;
        renderhtml(): JQuery;
        getButtonText(): string;
        setButtonText(text: string): void;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
    }
    class SilverSubDataFlowImage extends SilverSubDataFlowControl {
        options: Silverdark.Designers.Flows.Executioner.SilverSubDataFlowImageOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Designers.Flows.Executioner.SilverSubDataFlowImageOptions);
        getButtonControl(): JQuery;
        getControl(): JQuery;
        renderhtml(): JQuery;
    }
    class SilverSubDataFlowLink extends SilverSubDataFlowButton {
        options: Silverdark.Designers.Flows.Executioner.SilverSubDataFlowLinkOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Designers.Flows.Executioner.SilverSubDataFlowLinkOptions);
        getButtonControl(): JQuery;
        getControl(): JQuery;
        renderhtml(): JQuery;
        getButtonText(): string;
        setButtonText(text: string): void;
    }
}
