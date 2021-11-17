/**
 * Author:huzefa.ezzi@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Control.Validation {
    import ValidationDisplayType = $D.Framework.Design.ValidationDisplayType;
    import ValidationOutlineType = $D.Framework.Design.ValidationOutlineType;
    class FormValidationEngine {
        static getProvider(control: $DP.Control.FormComponentBase): BaseValidationProvider;
        static processValidation(control: $DP.Control.FormComponentBase): BaseValidationProvider;
        static clearValidations(control: $DP.Control.FormComponentBase): BaseValidationProvider;
        static clearAll(controls: Array<$DP.Control.FormComponentBase>): void;
        static processValidations(customValidations: any, formId: string, formInstanceId: string): void;
    }
    interface IValidationSettingSource {
        overrideFormValidationsSettings?: boolean;
        warningBorderColor: string;
        warningBackgroundColor: string;
        breakBorderColor: string;
        breakBackgroundColor: string;
        noIssueBorderColor: string;
        noIssueBackgroundColor: string;
        displayNoIssueValidation: boolean;
        isValidMessage: string;
        onlyShowValidMessageWhenFilledIn: boolean;
        displayType: ValidationDisplayType;
        outlineType: ValidationOutlineType;
    }
    class FormValidationHelper {
        static GetValidationSettings(baseSettings: $D.Silverlight.UI.Core.FormDesignerModel.BaseFormValidationSetting): IValidationSettingSource;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
