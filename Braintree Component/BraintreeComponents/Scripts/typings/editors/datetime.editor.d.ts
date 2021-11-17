/**
 * Author:akash.singh@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare function setDateTimeValue(editingContext: string, path: string, date: any): any;
declare namespace $DP.Editors {
    interface IDateTimeEditorOptions {
        dateTimeFormat: string;
        editingContextID: string;
        path: string[];
        holder: JQuery;
        defaultDateTimeValue?: string;
        timeFormatType?: $DP.DateUtilities.TimeFormat;
        autoSubmitInterval?: number;
        shouldSubmitOnLoad?: boolean;
    }
    class DateTimeEditor {
        private options;
        dateTimePicker: any;
        lastDate: string;
        constructor(options: IDateTimeEditorOptions);
        private setDateTime;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
