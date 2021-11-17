/**
 * Author:oleg@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
 */
/// <reference path="../../../typings/core/decisions.d.ts" />
/// <reference path="rule.actionmodel.d.ts" />
/// <reference path="rule.basemodel.d.ts" />
/// <reference path="rule.allgroupmodel.d.ts" />
/// <reference path="../ruledesigner.d.ts" />
declare namespace $DP.Designers.Rules {
    import RuleActionDisplayData = $D.Framework.Design.Flow.Service.RuleActionDisplayData;
    import RuleOutputPath = $D.Framework.Design.Flow.RuleOutputPath;
    class ActionsModel {
        private allGroupModel;
        TrueActions: ActionModel[];
        FalseActions: ActionModel[];
        MissingDataActions: ActionModel[];
        ItemAdded: $DP.Common.Subject;
        ItemRemoved: $DP.Common.Subject;
        ItemChanged: $DP.Common.Subject;
        ValueChanged: $DP.Common.Subject;
        constructor(allGroupModel: $DP.Designers.Rules.AllGroupModel);
        getById(actionId: string): ActionModel;
        getAllActionModels(): ActionModel[];
        Update(): void;
        UpdateActions(models: ActionModel[], newData: RuleActionDisplayData[], actionType: RuleOutputPath): any[];
        HasActions(): boolean;
        addNewAction(actionTypeName: string, outputPath?: RuleOutputPath): void;
        StepModelValueChange(propertyName: any): void;
        IsInDebugMode(): boolean;
        getSessionId(): string;
        /**
         * Shows add actions menu for given outcomeType.
         * Method has been added to show context menu in React.
         */
        showAddMenuItems(targetRef: HTMLElement, outcomeType?: RuleOutputPath): void;
        getAddMenuItems(stickTo: JQuery, outcomeType?: RuleOutputPath): any;
    }
}
