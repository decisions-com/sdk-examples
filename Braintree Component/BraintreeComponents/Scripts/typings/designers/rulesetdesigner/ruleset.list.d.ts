/// <reference path="../../common/tilesmarkup.d.ts" />
/// <reference path="ruleset.evaluate.d.ts" />
declare namespace $DP.Designers.RuleSet {
    interface RuleSetListOptions {
        host?: JQuery;
        ruleSetDto: RuleSetDto;
    }
    class RuleSetList {
        private options;
        private view;
        private currentRuleSet;
        private parentId;
        private get extensionFolderId();
        get getRuleSetName(): string;
        constructor(options: RuleSetListOptions);
        getView(): JQuery;
        protected render(): JQuery;
        protected getRuleSetTreeNode(ruleSet: RuleSetDto, root?: boolean): JQuery;
        private addCreateInstanceButton;
        private addRuleSetTreeNodes;
        protected createRuleSetTree(): JQuery;
        private runDefaultAction;
        protected attachEvents(): void;
    }
}
