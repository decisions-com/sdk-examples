/**
 * Author:oleg@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../command.d.ts" />
/// <reference path="../rule.steptokens.d.ts" />
/// <reference path="rule.basemodel.d.ts" />
declare namespace $DP.Designers.Rules {
    import Subject = $DP.Common.Subject;
    import RuleStepDisplayData = $D.Framework.Design.Flow.Service.RuleStepDisplayData;
    class RuleStepModel extends RuleModelBase implements dpComponents.IRuleStepModel {
        IsAnchorSelected: boolean;
        IsVerbSelected: boolean;
        IsValueSelected: boolean;
        IsSelected: boolean;
        OnInvokeAnchorClick: Subject;
        OnInvokeVerbClick: Subject;
        OnInvokeValueClick: Subject;
        TokenAnchor: RuleStepVariableToken;
        TokenVerb: RuleStepVerbToken;
        TokenValue: RuleStepValueToken;
        EvaluateWithNot: boolean;
        EvaluateWithNotChanged: Subject;
        TokenAnchorInfo: string;
        TokenVerbInfo: string;
        TokenValueInfo: string;
        IsEnumerator: boolean;
        EnumeratorGroup: $DP.Designers.Rules.AllGroupModel;
        constructor(ruleSessionId: string, ruleStepDisplayData: RuleStepDisplayData, instanceId: string);
        CheckEnumerator(displayData: RuleStepDisplayData): void;
        private updateEnumerator;
        private notifyEnumeratorChanged;
        AnchorClicked(stickTo: JQuery): void;
        VerbClicked(stickTo: JQuery): void;
        /**
         * @param stickTo element with respect to which the editing layer will be located
         * @param force open layer for editing even if anchor and verb not specified
         */
        ValueClicked(stickTo: JQuery, force: boolean): void;
        OnDataPathSelected(newDataPath: string): void;
        OnVerbSelected(node: any, stepId: string): void;
        OnEvaluateWithNotChanged(evaluateWithNot: any): void;
        Update(displayData: RuleStepDisplayData): void;
        setData(displayData: RuleStepDisplayData): void;
        notifyDataChanged(): void;
        IsVerbSpecified(): boolean;
        IsAnchorSpecified(): boolean;
        IsValueSpecified(): boolean;
        GetEditableCommands(): $DP.Designers.Rules.EditableRuleCommand[];
        ShowEditor(): void;
        GetDoneSection(): JQuery;
        private addCommands;
        private addCommand;
        UnSelect(): void;
        DisplayContextMenu(element: any, simple: any, parentActions: any): void;
        toString(): string;
        HasOverrideInfo(): boolean;
        GetOverrideInfo(): string;
        UpdateSibling(): void;
        UpdateEnumeratorModel(step: RuleStepDisplayData): void;
        private notifySelectionChanged;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
