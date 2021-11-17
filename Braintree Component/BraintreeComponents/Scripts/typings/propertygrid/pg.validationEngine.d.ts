/**
 * Author:huzefa.ezzi@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="pg.baseFormValidationProcessor.d.ts" />
/// <reference path="pg.globalValidationProcessor.d.ts" />
/// <reference path="pg.editorValidationProcessor.d.ts" />
/// <reference path="pg.editorValidationProcessor.mobile.d.ts" />
declare namespace $DP.PropertyGrid.Validation {
    class ValidationEngine {
        static getProcessor($elem: JQuery, isGlobal?: boolean): BaseFormValidationProcessor;
        static updateValidationReasons(eventData: any, editingContextId: any): void;
        static processValidationsOnForm($form: JQuery): void;
        private static resizepropertygrid;
        static getAllFatalValidationsOnForm($form: JQuery): Array<string>;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
