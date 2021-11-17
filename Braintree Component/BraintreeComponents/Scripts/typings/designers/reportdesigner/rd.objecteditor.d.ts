/**
 * Author:dorin@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Designers.Reports {
    class ObjectEditor {
        static Show(editAsync: Promise<string>, onEditConfirmed: (editContextId: string) => void, dialogPosition?: any): Promise<void>;
    }
    class SqlTextEditor {
        static show(sqlText: string, title: string): void;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
