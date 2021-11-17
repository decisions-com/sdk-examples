declare namespace $DP.Common {
    interface ToggleButtonOptions {
        holder?: JQuery;
        tabOrder?: number;
        value?: boolean;
        trueText: string;
        falseText: string;
        noneText: string;
        threeState?: boolean;
        onValueChange?: (value: boolean) => void;
        onExit?: () => void;
    }
    class ToggleButton {
        private options;
        static readonly INSTANCE_NAME = "_$DP_togglebutton";
        readonly NONE_CLASS = "dp-togglebutton-none";
        readonly TRUE_CLASS = "dp-togglebutton-true";
        readonly FALSE_CLASS = "dp-togglebutton-false";
        $view: JQuery;
        $buttonText: JQuery;
        $container: JQuery;
        constructor(options: ToggleButtonOptions);
        static get(host?: JQuery): ToggleButton;
        create(): JQuery;
        attachEvents(): void;
        onValueChange(): void;
        private lastAddedClass;
        setValue(value: boolean): void;
        getValue(): boolean;
        getButtonText(): string;
        getNextValue(): boolean;
    }
}
interface JQuery {
    togglebutton(options: $DP.Common.ToggleButtonOptions): JQuery;
    togglebutton(methodName: 'get'): $DP.Common.ToggleButton;
}
