/**
 * Author:oleg@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
 */
/// <reference path="rule.actionsmodel.d.ts" />
/// <reference path="../actionhandlers/rule.actionfactory.d.ts" />
declare namespace $DP.Designers.Rules {
    import RuleOutputPath = $D.Framework.Design.Flow.RuleOutputPath;
    import RuleActionDisplayData = $D.Framework.Design.Flow.Service.RuleActionDisplayData;
    class IRuleActionModel {
        protected displayData: RuleActionDisplayData;
        private actionHandler;
        ActionName: string;
        ActionId: string;
        constructor(displayData: RuleActionDisplayData);
        UpdateDisplayData(displayData: any): void;
        canEdit(): boolean;
        canChange(): boolean;
        getClientData(key: string): any;
        getValidationIssues(): $D.Framework.ValidationIssue[];
        getHandler(service: RuleActionHandlerService, sessionId: string): BaseRuleActionHandler;
    }
    class ActionModel extends IRuleActionModel {
        protected ruleSessionId: string;
        ValueChanged: $DP.Common.Subject;
        ActionType: RuleOutputPath;
        ParentGroup: ActionsModel;
        constructor(actionType: RuleOutputPath, ruleSessionId: string, displayData: RuleActionDisplayData);
        getSessionId(): string;
        UpdateDisplayData(displayData: any): void;
        getHandler(): BaseRuleActionHandler;
    }
}
