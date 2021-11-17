/// <reference path="../../../typings/core/generated/datatypes._base.d.ts" />
/// <reference path="../rule.tokeneditors.d.ts" />
/// <reference path="../../../typings/core/generated/RuleTableService.d.ts" />
declare namespace $DP.Rules.Truthtable {
    function showAnchorEditor({ target, headerStep, columnStepsIds, ruleSessionId }: dpComponents.PhraseItemClickEvent & {
        ruleSessionId: string;
    }): Promise<void>;
    function showVerbEditor({ target, headerStep, columnIndex, columnStepsIds, ruleSessionId }: dpComponents.PhraseItemClickEvent & {
        ruleSessionId: string;
    }): Promise<void>;
}
