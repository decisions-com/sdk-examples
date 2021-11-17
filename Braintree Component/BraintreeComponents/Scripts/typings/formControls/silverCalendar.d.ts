/**
 * Author:akash.singh@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Form.Controls {
    interface ICalendarOptions {
        instanceId?: string;
        componentId?: string;
        componentName?: string;
        dataName?: string;
        implementedInterfaces?: string;
        controlOutputDataName?: string;
        formId?: string;
        isCalendarEditor?: boolean;
        isForm?: boolean;
        editingContextId?: string;
        path?: string;
        IsDate?: boolean;
        IsNullable?: boolean;
        value?: string;
        callbkRTEFilter?: string;
    }
    class SilverCalendar {
        instanceId: string;
        componentId: string;
        componentName: string;
        dataName: string;
        implementedInterfaces: string;
        controlOutputDataName: string;
        formId: string;
        isCalendarEditor: boolean;
        isForm: boolean;
        editingContextId: string;
        path: string;
        IsDate: boolean;
        IsNullable: boolean;
        value: string;
        callbkRTEFilter: string;
        calendar: JQuery;
        calendarHidden: JQuery;
        controlObjectHolder: $DP.Control.Calendar;
        constructor(options: ICalendarOptions);
        initializeControlAndAttachEvents(): void;
        htmlDatePickerEvent(): void;
        SetTabIndex(): void;
    }
}
interface SilverCalendar {
    calendar(option: $DP.Form.Controls.ICalendarOptions): any;
    calendar(methodName: string, option: any): any;
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
