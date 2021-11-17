/**
 * Author:huzefa.ezzi@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare module $DP.Control.Validation {
    class DefaultValidationProvider extends BaseValidationProvider {
        protected control: $DP.Control.FormComponentBase;
        private $formSurface;
        private z;
        constructor(control: $DP.Control.FormComponentBase);
        processValidations(): void;
        clearValidations(): void;
        private addTooltip;
        private getToolTipPosition;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
