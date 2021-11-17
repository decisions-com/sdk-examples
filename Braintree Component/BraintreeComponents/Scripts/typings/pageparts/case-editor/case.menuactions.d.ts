/**
 * Author: alex@decisions.com
 * Notes: unauthorized, unlicensed use, redistribution, modification is not allowed.
 */
/// <reference path="../../typings/core/generated/CaseEditorService.d.ts" />
/// <reference path="case.step.d.ts" />
/// <reference path="case.statesteps.d.ts" />
/// <reference path="case.statelist.d.ts" />
/// <reference path="../../typings/core/decisions.d.ts" />
declare namespace $DP.PageParts.CaseEditor {
    import BaseActionType = $D.Framework.ServiceLayer.Actions.BaseActionType;
    class CaseMenuActions {
        static getStepActions(list: CaseStepList, component: CaseStep): JQueryPromise<any[]>;
        /**
         * Gets actions for state context menu
         */
        static getStateActions(list: CaseStateList, caseState: CaseState): JQueryPromise<any[]>;
        static getDefaultAction(entity: {
            Id: string;
            OrmTypeName: string;
        }): JQueryPromise<BaseActionType>;
        private static getEditAction;
    }
}
