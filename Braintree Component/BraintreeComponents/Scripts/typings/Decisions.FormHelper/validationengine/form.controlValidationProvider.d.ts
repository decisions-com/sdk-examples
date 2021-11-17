/**
 * Author:huzefa.ezzi@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare module $DP.Control.Validation {
    class ControlValidationProvider extends BaseValidationProvider {
        protected control: $DP.Control.FormComponentBase;
        protected $validationControl: JQuery;
        constructor(control: $DP.Control.FormComponentBase);
        processValidations(): void;
        clearValidations(): void;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
