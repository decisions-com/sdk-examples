declare namespace $DP.Control {
    class SilverCalendar extends DataContentBase {
        options: Silverdark.Components.SilverCalendarOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverCalendarOptions);
        get calendarHolder(): JQuery;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        getValue(): $DP.FormHost.DecisionsControlData[];
        getControl(): JQuery;
        renderhtml(): JQuery;
    }
}
