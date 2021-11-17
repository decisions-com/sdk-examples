declare namespace $DP.Designers.Rules {
    class RuleStepTextView extends RuleBuilderItems {
        private $view;
        private $removeButton;
        private $validationIcon;
        private $notItemText;
        private _enumeratorGroup;
        private enumeratorTextContainer;
        private EnumeratorElement;
        private EnumeratorHost;
        private $evaluationContainer;
        constructor(parentContainer: AllRuleTextContainer);
        Initialize(ruleStepMod: RuleStepModel): void;
        RefreshValidations(): void;
        InitializeEnumeratorHost(): void;
        private isNormalText;
        private isCurrentText;
        private isCurrentPathText;
        private isSuccessText;
        private isFailureText;
        private updateNormalText;
        private updateCurrentText;
        private updateCurrentPathText;
        private updateSuccessText;
        private updateFailureText;
        private isLastSibling;
        private evaluateWithNot;
        OnValueChanged(propertyName: string): void;
        UpdateDebugStatus(): void;
        UpdateNotItemText(): void;
        updateDebugEvaluation(): void;
        updateDebugEnumEvaluation(): void;
        private UpdateEnumerator;
        private RefreshEnumeratorElement;
        RefreshEnumeratorHostVisibility(): void;
        HasEnumerator(): boolean;
        GetEnumeratorGroup(): AllGroupModel;
        getView(): JQuery;
        private render;
        private renderResolvableDataItem;
        private attachUnmount;
        private get isSampleStarted();
    }
}
