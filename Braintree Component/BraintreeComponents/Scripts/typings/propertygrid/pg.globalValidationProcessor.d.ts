/**
 * Author:huzefa.ezzi@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare module $DP.PropertyGrid.Validation {
    import ValidationIssue = $D.Framework.ValidationIssue;
    class GlobalValidationProcessor extends BaseFormValidationProcessor {
        protected $elem: JQuery;
        constructor($elem: JQuery);
        addValidations(validationIssues: Array<ValidationIssue>): BaseFormValidationProcessor;
        clearValidations(): BaseFormValidationProcessor;
        processValidations(): BaseFormValidationProcessor;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
