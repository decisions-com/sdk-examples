/**
 * Author:oleg@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../command.d.ts" />
/// <reference path="../rule.steptokens.d.ts" />
/// <reference path="rule.basemodel.d.ts" />
/// <reference path="rule.actionmodel.d.ts" />
/// <reference path="rule.actionsmodel.d.ts" />
declare namespace $DP.Designers.Rules {
    import RuleStepDisplayData = $D.Framework.Design.Flow.Service.RuleStepDisplayData;
    import RuleType = $D.Framework.Design.Flow.RuleType;
    interface ExecutionInfo {
        executionResult: $D.Framework.Design.Flow.Service.Debugging.Events.RuleExecutionResult;
        executionError: string;
        durationExecution: string;
    }
    class AllGroupModel extends RuleGroupModelBase implements dpComponents.IAllGroupModel {
        private executionResult;
        ActionsModel: ActionsModel;
        constructor(ruleSessionId: string, ruleStepDisplayData: RuleStepDisplayData, instanceId: string, isInDebugMode: boolean);
        getExternalDataSet(): $D.Framework.Design.Flow.ExternalDataRuleDataSet;
        getActionModelById(actionId: string): ActionModel;
        getExecutionInfo(): ExecutionInfo;
        hasExecutionResult(): boolean;
        get canChangeOutputData(): boolean;
        get ruleType(): RuleType;
        get isSingleDataReturn(): boolean;
        get isMultipleDataReturn(): boolean;
        get isDataReturnType(): boolean;
        get hasActions(): boolean;
        get isLogicalType(): boolean;
        get isActionType(): boolean;
        get hasConditions(): boolean;
        IsInDebugMode(): boolean;
        OverrideDebugMode(isDebug: boolean): void;
        AddItem(displayData: RuleStepDisplayData): RuleModelBase;
        GetEitherGroup(): $DP.Designers.Rules.AnyGroupModel;
        getAnyGroups(): $DP.Designers.Rules.AnyGroupModel[];
        OnAddBeforeEither(): void;
        OnAddAndRule(): void;
        OnAddEitherRule(): void;
        DisplayContextMenu(element: JQuery, simple: any, parentActions: any): void;
        GetEditableCommands(): EditableRuleCommand[];
        updateExecutionResult(execution: ExecutionInfo): void;
        /**
         * Handler for adding new rule
         */
        addLinkHandler(target: JQuery): void;
        updateOutputVisibility(): void;
        getModelById(id: string): RuleModelBase;
        updateModelById(stepId: string, displayData: RuleStepDisplayData): RuleModelBase;
        /**
         * Updates model by id without running ValueChanged event
         */
        setDataById(stepId: string, displayData: RuleStepDisplayData): RuleModelBase;
    }
}
