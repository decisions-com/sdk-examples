/**
 * Author:oleg@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Designers.RuleSet {
    class ColumnDefinition {
        styleClass: string;
        colspan: number;
        constructor(styleClass?: string, colspan?: number);
        getView(forHeader?: boolean): JQuery;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
