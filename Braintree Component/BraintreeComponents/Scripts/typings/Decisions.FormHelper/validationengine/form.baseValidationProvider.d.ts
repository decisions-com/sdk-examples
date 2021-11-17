/**
 * Author:huzefa.ezzi@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../../typings/core/generated/control_options.d.ts" />
declare module $DP.Control.Validation {
    abstract class BaseValidationProvider {
        protected control: $DP.Control.FormComponentBase;
        protected $elem: JQuery;
        protected $container: JQuery;
        protected $formValidation: JQuery;
        protected validationSettings: IValidationSettingSource;
        protected orignalBorderStyle: string;
        protected orignalBackgroundStyle: string;
        protected orignalInputBackgroundStyle: string;
        protected hasNoIssueValidation: boolean;
        private validationBackgroundSet;
        constructor(control: $DP.Control.FormComponentBase);
        processValidations(): void;
        private getValidationHolder;
        private clearNoIssueValidation;
        /**
         * validation holder $elem, $container, other elem
         */
        clearValidations(): void;
        getValidationIssuesHtml(predicate?: (va: $D.Framework.Design.Form.DecisionsValidationIssue) => boolean, includeChildComponentIssues?: boolean): string;
        protected getOutlineClass(): string;
        protected getBreakLevelClass(validationIssue: $D.Framework.Design.Form.DecisionsValidationIssue): string;
        protected getValidationSettings(): IValidationSettingSource;
        getValidationDisplayTypeClass(): string;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
