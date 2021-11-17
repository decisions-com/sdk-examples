/// <reference path="../../typings/core/generated/RuleEditService.d.ts" />
declare namespace $DP.Designers.Rules {
    function getVerbStepsForTree(options: {
        sessionId: string;
        stepId: string;
        nodes: string[];
    }): JQueryDeferred<Common.DataDefinitionForTree[]>;
    function renderRuleVerbTokenPicker(options: {
        sessionId: string;
        stepId: string;
        onSelected: (path: string, stepId: string) => void;
    }): JQuery;
}
