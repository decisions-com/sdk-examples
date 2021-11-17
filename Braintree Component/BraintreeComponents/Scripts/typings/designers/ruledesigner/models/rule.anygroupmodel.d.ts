/**
 * Author:oleg@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../command.d.ts" />
/// <reference path="../rule.steptokens.d.ts" />
/// <reference path="rule.basemodel.d.ts" />
declare namespace $DP.Designers.Rules {
    import RuleStepDisplayData = $D.Framework.Design.Flow.Service.RuleStepDisplayData;
    class AnyGroupModel extends RuleGroupModelBase implements dpComponents.IAnyGroupModel {
        constructor(ruleSessionId: string, ruleStepDisplayData: RuleStepDisplayData, instanceId: string, isInDebugMode: boolean);
        AddItem(displayData: RuleStepDisplayData): AllGroupModel;
        DisplayContextMenu(element: any, simple: any, parentActions: any): void;
        addAllGroup(): void;
    }
}
