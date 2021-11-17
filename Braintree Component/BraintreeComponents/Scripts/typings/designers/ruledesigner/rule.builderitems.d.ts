/// <reference path="../common/observer.d.ts" />
/// <reference path="rule.builderitemtext.d.ts" />
declare namespace $DP.Designers.Rules {
    abstract class RuleBuilderItems {
        static get ROOT_CLASS(): string;
        static get DATA_KEY(): string;
        RuleStepModel: RuleStepModel;
        anchorItem: AnchorItemText;
        verbItem: VerbItemText;
        valueItem: ValueItemText;
        itemsElement: JQuery;
        ParentContainer: AllRuleTextContainer;
        /**
        * Contains text of overrided result
        */
        overrideElement: JQuery;
        /**
        * Section shows overrided result of phrase.
        * Shows only if Rule Type = Data Return Rule
        */
        OverrideInfoElement: JQuery;
        private tokenAnchorUpdateSubj;
        private tokenVerbUpdateSubj;
        private tokenValueUpdateSubj;
        private anchorClickSubj;
        private verbClickSubj;
        private valueClickSubj;
        private valueChangedSubj;
        static getItem(container: JQuery): RuleBuilderItems;
        constructor(parentContainer: AllRuleTextContainer);
        getItems(): RuleBuilderItemText[];
        Initialize(stepModel: RuleStepModel): void;
        /**
         * Returns first empty token (1 - anchor, 2 - verb, 3 - value)
         * E.g.:
         * - if anchor is empty - returns anchor
         * - if anchor is not empty, but verb is empty - returns verb
         * - if anchor and verb are not empty, but value is empty - returns value
         * - otherwise returns null
         */
        getNextToken(): AnchorItemText | VerbItemText | ValueItemText;
        showNextToken(): void;
        dispose(): void;
        /**
         * removes context menu from component
         */
        removeContextMenu(): void;
        /**
         * method defined in ruleStepTextView type in rule.ui.js
         */
        abstract RefreshValidations(): any;
        initializeOverrideInfo(): void;
        OnValueChanged(propertyName: string): void;
        private refreshOverrideInfo;
        private overrideInfoRefreshVisibility;
        HasOverrideInfo(): boolean;
        GetOverrideInfo(): string;
        private initRuleItems;
        private onFieldAnchorClicked;
        private onFieldVerbClicked;
        /**
        * @param force open layer for editing even if anchor and verb not specified
        */
        private onFieldValueClicked;
        private getStickToForAnchor;
        private getStickToForVerb;
        private getStickToForValue;
    }
}
