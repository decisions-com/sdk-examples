/// <reference path="../../../typings/core/generated/datatypes._base.d.ts" />
/// <reference path="../rule.tokeneditors.d.ts" />
/// <reference path="../../../typings/core/generated/RuleTableService.d.ts" />
declare namespace $DP.Rules.Truthtable {
    import RuleTableHeaderDisplayData = $D.Framework.Design.Flow.RuleTable.RuleTableHeaderDisplayData;
    interface ShowRuleTableAnchorEditorOptions {
        target: HTMLElement;
        ruleHeader: RuleTableHeaderDisplayData;
        ruleSessionId: string;
    }
    interface ShowRuleTableVerbEditorOptions {
        target: HTMLElement;
        ruleStep: dpComponents.IRuleStepModel;
        ruleSessionId: string;
        handleNotifications: dpComponents.HandleNotificationsCallback;
    }
    function showRuleTableAnchorEditor({ target, ruleHeader, ruleSessionId, }: ShowRuleTableAnchorEditorOptions): void;
    function showRuleTableVerbEditor({ ruleStep, ruleSessionId, target, handleNotifications, }: ShowRuleTableVerbEditorOptions): void;
}
