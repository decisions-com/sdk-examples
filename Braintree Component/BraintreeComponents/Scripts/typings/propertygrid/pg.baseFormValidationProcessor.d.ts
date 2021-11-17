/**
 * Author:huzefa.ezzi@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare module $DP.PropertyGrid.Validation {
    import ValidationIssue = $D.Framework.ValidationIssue;
    abstract class BaseFormValidationProcessor {
        protected $elem: JQuery;
        constructor($elem: JQuery);
        addValidations(validationIssues: Array<ValidationIssue>): BaseFormValidationProcessor;
        abstract clearValidations(): BaseFormValidationProcessor;
        abstract processValidations(): BaseFormValidationProcessor;
        getValidationIssuesHtml(validationIssues: Array<ValidationIssue>, predicate?: (va: any) => boolean): string;
        protected getBreakLevelClass(validationIssue: ValidationIssue): string;
        protected getOutlineClass(validationIssue: ValidationIssue): string;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
