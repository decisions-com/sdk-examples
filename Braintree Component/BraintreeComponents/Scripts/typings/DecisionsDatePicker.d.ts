/**
 * Author:huzefa.ezzi@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare function bindDatePickerEvents(decisionsDateModel: any): void;
declare var dateValSubmitTimer: any;
declare function isDate(InputDate: any): boolean;
declare function SetTabIndex(calDivElement: any): void;
declare function Calender_Cell_click(data: any, calDivElementString: any): void;
declare function Calender_Cell_Next_click(event: any, calDivElementString: any): void;
declare function Calender_Cell_Prev_click(event: any, calDivElementString: any): void;
declare function Calender_Cell_Year_click(data: any, calDivElementString: any): void;
declare function getCalanderTableStructure(calDivElementString: any): string;
declare function getCellClickHtml(yearRangeStart: any, calDivElementString: any): string;
declare function Calender_Cell_Year_Next_click(calDivElementString: any): void;
declare function Calender_Cell_Year_Prev_click(calDivElementString: any): void;
declare function RenderMonthForCalender(uniqueId: any): void;
declare function RenderYearForCalender(elementId: any): void;
declare function HandlerKeyDownForCalederTypeControl(element: any, controlId: any, code: any): boolean;
declare function ShowValidationIcon(InstanceId: any, e: any): void;
declare function ShowValidationSuggestionToolTip(cloneElement: any, invalidInput: any, instanceId: any): void;
declare function HideValidationIcon(instanceId: any, cloneElement: any): void;
declare function HideSuggestionToolTip(instanceId: any): void;
declare function setDatePickerDate(date: any, calDivElement: any, onSelect: any): void;
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
