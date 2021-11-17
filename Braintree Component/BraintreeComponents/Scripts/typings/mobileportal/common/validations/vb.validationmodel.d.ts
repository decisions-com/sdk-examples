/**
 * Author:huzefa.ezzi@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $MobilePortal.Commmon.Validations {
    import BreakLevel = $D.Framework.BreakLevel;
    class ValidationModel {
        source: any;
        reason: string;
        details: string;
        level: BreakLevel;
        $refrenceControl: JQuery;
        private __id;
        $item: JQuery;
        constructor(source: any, reason: string, details: string, level: BreakLevel, $refrenceControl: JQuery);
        remove(): void;
        private getIssueElement;
        get id(): string;
        private getBreakLevelClass;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
