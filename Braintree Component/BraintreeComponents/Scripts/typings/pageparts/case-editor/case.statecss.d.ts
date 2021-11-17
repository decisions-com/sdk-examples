/**
 * Author: alex@decisions.com
 * Notes: unauthorized, unlicensed use, redistribution, modification is not allowed.
*/
/// <reference path="../../common/cssselectors.d.ts" />
declare namespace $DP.PageParts.CaseEditor {
    class CaseStateListCss {
        private static rootSelector;
        static get root(): Common.ClassNameCssSelector;
        static get addState(): Common.ClassNameCssSelector;
    }
    class CaseStateStepsCss {
        private static rootSelector;
        static get root(): Common.ClassNameCssSelector;
        static get addStep(): Common.ClassNameCssSelector;
        static get addState(): Common.ClassNameCssSelector;
        static get state(): Common.ClassNameCssSelector;
        static get steps(): Common.ClassNameCssSelector;
        static get stepsNoAddState(): Common.ClassNameCssSelector;
    }
    class CaseStateCss {
        private static rootSelector;
        static get root(): Common.ClassNameCssSelector;
        static get rootEditing(): Common.ClassNameCssSelector;
        static get rootCreated(): Common.ClassNameCssSelector;
        static get left(): Common.ClassNameCssSelector;
        static get order(): Common.ClassNameCssSelector;
        static get body(): Common.ClassNameCssSelector;
        static get inputName(): Common.ClassNameCssSelector;
        static get labelName(): Common.ClassNameCssSelector;
        static get triangle(): Common.ClassNameCssSelector;
        static get arrowDown(): Common.ClassNameCssSelector;
    }
    class CaseStepCss {
        protected static rootSelector: Common.ClassNameCssSelector;
        static get root(): Common.ClassNameCssSelector;
        static get rootEditing(): Common.ClassNameCssSelector;
        static get rootCreated(): Common.ClassNameCssSelector;
        static get left(): Common.ClassNameCssSelector;
        static get leftEdit(): Common.ClassNameCssSelector;
        static get leftApproval(): Common.ClassNameCssSelector;
        static get body(): Common.ClassNameCssSelector;
        static get inputName(): Common.ClassNameCssSelector;
        static get labelName(): Common.ClassNameCssSelector;
        static get arrowDown(): Common.ClassNameCssSelector;
    }
}
