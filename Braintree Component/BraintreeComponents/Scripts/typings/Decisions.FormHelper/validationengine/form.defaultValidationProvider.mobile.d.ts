/**
 * Author:huzefa.ezzi@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare module $DP.Control.Validation.Mobile {
    class DefaultValidationProvider extends BaseValidationProvider {
        protected control: $DP.Control.FormComponentBase;
        constructor(control: $DP.Control.FormComponentBase);
        private issues;
        processValidations(): void;
        private addIssue;
        clearValidations(): void;
        private removeAllIssues;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
