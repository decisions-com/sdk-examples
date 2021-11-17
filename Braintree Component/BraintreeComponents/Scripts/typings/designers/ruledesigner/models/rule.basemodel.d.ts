/**
 * Author:oleg@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../command.d.ts" />
/// <reference path="../rule.steptokens.d.ts" />
declare namespace $DP.Designers.Rules {
    import RuleStepDisplayData = $D.Framework.Design.Flow.Service.RuleStepDisplayData;
    class RuleModelBase implements dpComponents.IRuleModelBase {
        Id: string;
        RuleSessionId: string;
        DisplayData: RuleStepDisplayData;
        InstanceId: string;
        ParentGroup: RuleGroupModelBase;
        ValueChanged: $DP.Common.Subject;
        Debug: $DP.Designers.Rules.Debug.RuleStepDebugModel;
        resolvedAnchorData: string;
        static get ADD_CONDITION_LABEL(): string;
        static get ADD_EITHER_OR_GROUP_LABEL(): string;
        constructor(ruleSessionId: string, ruleStepDisplayData: RuleStepDisplayData, instanceId: string);
        IsInDebugMode(): boolean;
        Update(displayData: RuleStepDisplayData): void;
        setData(displayData: RuleStepDisplayData): void;
        notifyDataChanged(): void;
        DeleteRuleStep(): void;
        OnCopyMenuItemClicked(clientId: string): void;
        OnCutMenuItemClicked(clientId: string): void;
        OnPasteMenuItemClicked(clientId: string, stepId?: string): void;
        GetValidations(): $D.Framework.ValidationIssue[];
        DisplayContextMenu(element: any, simple: any, parentActions: any): void;
        isLastChild(): boolean;
        getClientId(element: JQuery): string;
        ShowContextMenu(element: JQuery, simple: boolean): void;
    }
    abstract class RuleGroupModelBase extends RuleModelBase implements dpComponents.IRuleGroupModelBase {
        InDebugMode: boolean;
        Children: RuleModelBase[];
        ItemAdded: $DP.Common.Subject;
        ItemRemoved: $DP.Common.Subject;
        constructor(ruleSessionId: string, ruleStepDisplayData: RuleStepDisplayData, instanceId: string, isInDebugMode: boolean);
        abstract AddItem(item: RuleStepDisplayData): RuleModelBase;
        AddModelItem(item: RuleModelBase): void;
        RemoveItem(ruleStepId: string): void;
        getChildren(): RuleModelBase[];
        IsFirst(item: any): boolean;
        IsLast(item: any): boolean;
        GetRuleStepModels(): RuleStepModel[];
    }
}
