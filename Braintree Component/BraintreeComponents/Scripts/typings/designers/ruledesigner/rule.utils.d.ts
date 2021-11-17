/**
 * Author:oleg@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../../typings/core/generated/RuleExecutionService.d.ts" />
/// <reference path="../../typings/core/generated/RuleEditService.d.ts" />
/// <reference path="../../common/datadeftree.d.ts" />
/// <reference path="models/rule.stepmodel.d.ts" />
/// <reference path="models/rule.allgroupmodel.d.ts" />
/// <reference path="models/rule.anygroupmodel.d.ts" />
declare namespace $DP.Designers.Rules {
    import RuleStepDisplayData = $D.Framework.Design.Flow.Service.RuleStepDisplayData;
    import ValidationIssue = $D.Framework.ValidationIssue;
    function fillGroups(groups: {
        [Key: string]: RuleGroupModelBase;
    }, enumerators: {
        [Key: string]: RuleStepModel;
    }, step: $D.Framework.Design.Flow.Service.RuleStepDisplayData): boolean;
    function convertToModel(ruleSessionId: string, ruleDisplayData: RuleStepDisplayData[], isDebug: boolean, instanceId?: string): AllGroupModel;
    function getDescendantsAndSelf(group: AllGroupModel): RuleModelBase[];
    function getDescendants(group: $DP.Designers.Rules.RuleGroupModelBase): RuleModelBase[];
    function makeDisplayDataLabel(displayData: $D.Framework.Design.Flow.Service.RuleStepDisplayData): string;
    const RULE_ANCHOR_ERROR_VALIDATION_CODE = 1;
    const RULE_VERB_ERROR_VALIDATION_CODE = 2;
    const RULE_VALUE_ERROR_VALIDATION_CODE = 3;
    const RULE_OUTPUT_ERROR_VALIDATION_CODE = 4;
    function getHeaderIssues(issues: ValidationIssue[]): ValidationIssue[];
    function getOutputIssues(issues: ValidationIssue[], outputName: string): ValidationIssue[];
    function getValueIssues(issues: ValidationIssue[]): ValidationIssue[];
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
