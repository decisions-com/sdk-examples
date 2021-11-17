declare namespace $DP.Designers.Rules {
    class BuilderInfoTextBlock {
        InfoPanel: JQuery;
        InfoElement: JQuery;
        constructor(text: string, onClick: (eventObject: JQueryEventObject) => any, noBold: boolean, disbaleHover: boolean, onRightClick?: (eventObject: JQueryEventObject) => any);
        private setText;
        SetValidations(validations: $D.Framework.ValidationIssue[]): void;
    }
}
