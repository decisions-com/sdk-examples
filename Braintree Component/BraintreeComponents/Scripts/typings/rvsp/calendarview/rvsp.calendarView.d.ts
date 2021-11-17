/**
 * Author:sachin.jadhav@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../../typings/wijmo/wijmo.d.ts" />
declare function RenderDrill(params: Object): any;
declare namespace $DP.Controls.Report.Calendar {
    interface IDefaultCalendarOptions {
        views: string[];
        viewType: string;
        timeInterval: number;
        navigationBarVisible: boolean;
        maxNumberOfEventsInCell: number;
    }
    interface IWijmoCalendarEventData {
        calendarItem: any;
        id: string;
        color?: string;
        subject: string;
        start: Date;
        end: Date;
    }
    enum CalendarNavigationBarPosition {
        Bottom = 0,
        Top = 1
    }
    interface ICalendarView {
        instanceId: string;
        reportContextId: string;
        defaultOptions: IDefaultCalendarOptions;
        startHour: number;
        endHour: number;
        workingDays: string[];
        calendarNavigationBarPosition: CalendarNavigationBarPosition;
        overrideDrillDownTitle: boolean;
        drillDownTitle: string;
        overrideDrillDownReportTitle: boolean;
        drillDownReportTitle: string;
        maxNumberOfEventsInCell: number;
    }
    enum CalendarViews {
        Day = 0,
        Month = 1,
        Week = 2,
        List = 3
    }
    class CalendarView {
        private options;
        $calendarHolder: JQuery;
        private selectedDate;
        private $reportHeader;
        private wijevcalnamespacekey;
        private calendarViewElem;
        constructor(options: ICalendarView);
        static getCalendarView(instanceId: any): CalendarViews;
        static getViewType(viewType: string): CalendarViews;
        initialize(options?: Object): void;
        updateTootip(): void;
        attachAppointmentEvent(event: JQueryEventObject): void;
        loadEvents(visibleCalendars: any, successCallback: any, errorCallback?: any): void;
        refresh(): void;
        redraw(): void;
        destroy(): void;
        setSelectedViewIcon(): void;
        setTimeValue(date: moment.Moment, hours: number, minutes: number, seconds: number): moment.Moment;
        private formatString;
        private onViewChanged;
        private applyTemplate;
        private createTooltip;
        private getStyleFromColors;
        private processEventsForStyles;
        private addStyleString;
        private setWorkingMinutes;
        private getDayColumnSelector;
        private getWorkingMinutesRange;
        private getDayFromDate;
        private getDayOfWeek;
        private getSelectedDays;
        private showLoading;
        private hideLoading;
        private showContextMenu;
        private onSelectedDatesChanged;
        private setSelectedView;
        private attachViewChangeEvents;
        private detachViewChangeEvents;
        private detachEvent;
        private attachEvent;
        private setEvent;
        private calanderItemsToEventsData;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
