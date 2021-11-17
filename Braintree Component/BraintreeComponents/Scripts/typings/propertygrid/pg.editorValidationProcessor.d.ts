/**
 * Author:huzefa.ezzi@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare module $DP.PropertyGrid.Validation {
    class EditorValidationProcessor extends BaseFormValidationProcessor {
        protected $elem: JQuery;
        protected $fieldElem: JQuery;
        constructor($elem: JQuery);
        clearValidations(): BaseFormValidationProcessor;
        processValidations(): BaseFormValidationProcessor;
        private addTooltip;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
