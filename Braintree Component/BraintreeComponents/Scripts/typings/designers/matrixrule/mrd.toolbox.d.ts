/**
 * Author:catface@decisions.com
 * Notes:Unauthorized, unlicensed use, redistribution, modification is not allowed.
*/
/// <reference path="../../typings/jstree/jstree.d.ts" />
/// <reference path="../../common/dptree.d.ts" />
declare namespace $DP.Designers.MatrixRule {
    class MatrixRuleDesignerPropertiesPanel extends $DP.Designers.DesignerPropertiesPanel {
        constructor({ mappingContext, nodeChangeCallback, sessionId }: DesignerPropertiesPanelOptions);
        refresh: (contextId?: string) => Promise<string>;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
