/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="../raphael/raphael.d.ts" />

/** Definitions of wijaccordion widget */
interface JQuery {

    /** Initialize a wijaccordion widget */
    wijaccordion(): JQuery;
    /** Initialize a wijaccordion widget with the given options */
    wijaccordion(options: Object): JQuery;
    wijaccordion(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijaccordion widget */
    wijaccordion(methodName: "option", optionName: string): any;
    /** Set options to wijaccordion widget */
    wijaccordion(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijaccordion widget */
    wijaccordion(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Remove the functionality completely. This will return the element back to its pre-init state.
      * @returns {void}
      */
    wijaccordion(methodName: "destroy") ;
    
    /** Refresh the accordion.
      * @returns {void}
      */
    wijaccordion(methodName: "refresh") ;
    
    /** Activates the accordion content pane at the specified index.
      * @param {number} index The zero-based index of the accordion pane to activate.
      * @returns {bool}
      * @remarks
      * You can use code like in the example below inside your document ready function
      * to activate the specified pane using the click event of a button.
      */
    wijaccordion(methodName: "activate", index: any): boolean;
    
    /** @param {string} index
      * @returns {bool}
      */
    wijaccordion(methodName: "activate", index: any): boolean;
    
    /** @param {EventTarget} index
      * @returns {bool}
      */
    wijaccordion(methodName: "activate", index: EventTarget): boolean;
    
    /** @param index
      * @returns {bool}
      */
    wijaccordion(methodName: "activate", index: any): boolean;
    
    /** Get animated option of wijaccordion widget */
    wijaccordion(methodName: "option", optionName: "animated") ;
    /** Set animated option to wijaccordion widget */
    wijaccordion(methodName: "option", optionName: "animated", animatedValue ): JQuery;
    
    /** Get duration option of wijaccordion widget */
    wijaccordion(methodName: "option", optionName: "duration") ;
    /** Set duration option to wijaccordion widget */
    wijaccordion(methodName: "option", optionName: "duration", durationValue ): JQuery;
    
    /** Get event option of wijaccordion widget */
    wijaccordion(methodName: "option", optionName: "event") ;
    /** Set event option to wijaccordion widget */
    wijaccordion(methodName: "option", optionName: "event", eventValue ): JQuery;
    
    /** Get expandDirection option of wijaccordion widget */
    wijaccordion(methodName: "option", optionName: "expandDirection") ;
    /** Set expandDirection option to wijaccordion widget */
    wijaccordion(methodName: "option", optionName: "expandDirection", expandDirectionValue ): JQuery;
    
    /** Get header option of wijaccordion widget */
    wijaccordion(methodName: "option", optionName: "header") ;
    /** Set header option to wijaccordion widget */
    wijaccordion(methodName: "option", optionName: "header", headerValue ): JQuery;
    
    /** Get requireOpenedPane option of wijaccordion widget */
    wijaccordion(methodName: "option", optionName: "requireOpenedPane") ;
    /** Set requireOpenedPane option to wijaccordion widget */
    wijaccordion(methodName: "option", optionName: "requireOpenedPane", requireOpenedPaneValue ): JQuery;
    
    /** Get selectedIndex option of wijaccordion widget */
    wijaccordion(methodName: "option", optionName: "selectedIndex") ;
    /** Set selectedIndex option to wijaccordion widget */
    wijaccordion(methodName: "option", optionName: "selectedIndex", selectedIndexValue ): JQuery;
    
    /** Get beforeSelectedIndexChanged option(event) of wijaccordion widget */
    wijaccordion(methodName: "option", eventName: "beforeSelectedIndexChanged"): Function;
    /** Set beforeSelectedIndexChanged option(event) to wijaccordion widget */
    wijaccordion(methodName: "option", eventName: "beforeSelectedIndexChanged", beforeSelectedIndexChangedEventValue: (e?, data?) => void): JQuery;
    
    /** Get selectedIndexChanged option(event) of wijaccordion widget */
    wijaccordion(methodName: "option", eventName: "selectedIndexChanged"): Function;
    /** Set selectedIndexChanged option(event) to wijaccordion widget */
    wijaccordion(methodName: "option", eventName: "selectedIndexChanged", selectedIndexChangedEventValue: (e?, data?) => void): JQuery;
    
    
}

/** Definitions of wijappview widget */
interface JQuery {

    /** Initialize a wijappview widget */
    wijappview(): JQuery;
    /** Initialize a wijappview widget with the given options */
    wijappview(options: Object): JQuery;
    wijappview(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijappview widget */
    wijappview(methodName: "option", optionName: string): any;
    /** Set options to wijappview widget */
    wijappview(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijappview widget */
    wijappview(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /**  */
    wijappview(methodName: "destroy") ;
    
    /** Load an appview page
      * @param {string} url URL of the page to load
      * @param {wijmo.appview.ILoadSettings} options Load settings to override options.loadSettings
      * @returns {JQueryPromise}
      */
    wijappview(methodName: "loadPage", url: any, options: any): JQueryPromise<any>;
    
    /** Current active appview page DOM element
      * @returns {JQuery}
      */
    wijappview(methodName: "activePage"): JQuery;
    
    /** Change current appview page
      * @param toPage A URL or an appview page DOM element to switch to
      * @param {wijmo.appview.ILoadSettings} options Load settings to be used if 'toPage' is a URL
      * @remarks
      * If 'toPage' is a URL, then changePage() loads the page first and calls itself recursively
      */
    wijappview(methodName: "changePage", toPage: any, options?: any) ;
    
    /** Get urlParamName option of wijappview widget */
    wijappview(methodName: "option", optionName: "urlParamName") ;
    /** Set urlParamName option to wijappview widget */
    wijappview(methodName: "option", optionName: "urlParamName", urlParamNameValue ): JQuery;
    
    /** Get loadSettings option of wijappview widget */
    wijappview(methodName: "option", optionName: "loadSettings") ;
    /** Set loadSettings option to wijappview widget */
    wijappview(methodName: "option", optionName: "loadSettings", loadSettingsValue ): JQuery;
    
    /** Get wijCSS option of wijappview widget */
    wijappview(methodName: "option", optionName: "wijCSS") ;
    /** Set wijCSS option to wijappview widget */
    wijappview(methodName: "option", optionName: "wijCSS", wijCSSValue ): JQuery;
    
    /** Get pagebeforeload option(event) of wijappview widget */
    wijappview(methodName: "option", eventName: "pagebeforeload"): Function;
    /** Set pagebeforeload option(event) to wijappview widget */
    wijappview(methodName: "option", eventName: "pagebeforeload", pagebeforeloadEventValue: (e?, args?) => void): JQuery;
    
    /** Get pageload option(event) of wijappview widget */
    wijappview(methodName: "option", eventName: "pageload"): Function;
    /** Set pageload option(event) to wijappview widget */
    wijappview(methodName: "option", eventName: "pageload", pageloadEventValue: (e?, args?) => void): JQuery;
    
    /** Get pageloadfailed option(event) of wijappview widget */
    wijappview(methodName: "option", eventName: "pageloadfailed"): Function;
    /** Set pageloadfailed option(event) to wijappview widget */
    wijappview(methodName: "option", eventName: "pageloadfailed", pageloadfailedEventValue: (e?, args?) => void): JQuery;
    
    /** Get pagebeforechange option(event) of wijappview widget */
    wijappview(methodName: "option", eventName: "pagebeforechange"): Function;
    /** Set pagebeforechange option(event) to wijappview widget */
    wijappview(methodName: "option", eventName: "pagebeforechange", pagebeforechangeEventValue: (e?, args?) => void): JQuery;
    
    /** Get pagechange option(event) of wijappview widget */
    wijappview(methodName: "option", eventName: "pagechange"): Function;
    /** Set pagechange option(event) to wijappview widget */
    wijappview(methodName: "option", eventName: "pagechange", pagechangeEventValue: (e?, args?) => void): JQuery;
    
    /** Get pagechangefailed option(event) of wijappview widget */
    wijappview(methodName: "option", eventName: "pagechangefailed"): Function;
    /** Set pagechangefailed option(event) to wijappview widget */
    wijappview(methodName: "option", eventName: "pagechangefailed", pagechangefailedEventValue: (e?, args?) => void): JQuery;
    
    
}

/** Definitions of wijbarchart widget */
interface JQuery {

    /** Initialize a wijbarchart widget */
    wijbarchart(): JQuery;
    /** Initialize a wijbarchart widget with the given options */
    wijbarchart(options: Object): JQuery;
    wijbarchart(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijbarchart widget */
    wijbarchart(methodName: "option", optionName: string): any;
    /** Set options to wijbarchart widget */
    wijbarchart(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijbarchart widget */
    wijbarchart(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Remove the functionality completely. This will return the element back to its pre-init state. */
    wijbarchart(methodName: "destroy") ;
    
    /** This method returns the bar, which has a set of Raphaël objects (rects) that represent bars for the
      * series data, from the specified index.
      * @param {number} index The zero-based index of the bar to return.
      * @returns {Raphael element} Bar object.
      */
    wijbarchart(methodName: "getBar", index: any): RaphaelElement;
    
    /** Get horizontal option of wijbarchart widget */
    wijbarchart(methodName: "option", optionName: "horizontal") ;
    /** Set horizontal option to wijbarchart widget */
    wijbarchart(methodName: "option", optionName: "horizontal", horizontalValue ): JQuery;
    
    /** Get stacked option of wijbarchart widget */
    wijbarchart(methodName: "option", optionName: "stacked") ;
    /** Set stacked option to wijbarchart widget */
    wijbarchart(methodName: "option", optionName: "stacked", stackedValue ): JQuery;
    
    /** Get is100Percent option of wijbarchart widget */
    wijbarchart(methodName: "option", optionName: "is100Percent") ;
    /** Set is100Percent option to wijbarchart widget */
    wijbarchart(methodName: "option", optionName: "is100Percent", is100PercentValue ): JQuery;
    
    /** Get clusterOverlap option of wijbarchart widget */
    wijbarchart(methodName: "option", optionName: "clusterOverlap") ;
    /** Set clusterOverlap option to wijbarchart widget */
    wijbarchart(methodName: "option", optionName: "clusterOverlap", clusterOverlapValue ): JQuery;
    
    /** Get clusterWidth option of wijbarchart widget */
    wijbarchart(methodName: "option", optionName: "clusterWidth") ;
    /** Set clusterWidth option to wijbarchart widget */
    wijbarchart(methodName: "option", optionName: "clusterWidth", clusterWidthValue ): JQuery;
    
    /** Get clusterRadius option of wijbarchart widget */
    wijbarchart(methodName: "option", optionName: "clusterRadius") ;
    /** Set clusterRadius option to wijbarchart widget */
    wijbarchart(methodName: "option", optionName: "clusterRadius", clusterRadiusValue ): JQuery;
    
    /** Get clusterSpacing option of wijbarchart widget */
    wijbarchart(methodName: "option", optionName: "clusterSpacing") ;
    /** Set clusterSpacing option to wijbarchart widget */
    wijbarchart(methodName: "option", optionName: "clusterSpacing", clusterSpacingValue ): JQuery;
    
    /** Get animation option of wijbarchart widget */
    wijbarchart(methodName: "option", optionName: "animation") ;
    /** Set animation option to wijbarchart widget */
    wijbarchart(methodName: "option", optionName: "animation", animationValue ): JQuery;
    
    /** Get seriesTransition option of wijbarchart widget */
    wijbarchart(methodName: "option", optionName: "seriesTransition") ;
    /** Set seriesTransition option to wijbarchart widget */
    wijbarchart(methodName: "option", optionName: "seriesTransition", seriesTransitionValue ): JQuery;
    
    /** Get mouseDown option(event) of wijbarchart widget */
    wijbarchart(methodName: "option", eventName: "mouseDown"): Function;
    /** Set mouseDown option(event) to wijbarchart widget */
    wijbarchart(methodName: "option", eventName: "mouseDown", mouseDownEventValue: (e?, data?) => void): JQuery;
    
    /** Get mouseUp option(event) of wijbarchart widget */
    wijbarchart(methodName: "option", eventName: "mouseUp"): Function;
    /** Set mouseUp option(event) to wijbarchart widget */
    wijbarchart(methodName: "option", eventName: "mouseUp", mouseUpEventValue: (e?, data?) => void): JQuery;
    
    /** Get mouseOver option(event) of wijbarchart widget */
    wijbarchart(methodName: "option", eventName: "mouseOver"): Function;
    /** Set mouseOver option(event) to wijbarchart widget */
    wijbarchart(methodName: "option", eventName: "mouseOver", mouseOverEventValue: (e?, data?) => void): JQuery;
    
    /** Get mouseOut option(event) of wijbarchart widget */
    wijbarchart(methodName: "option", eventName: "mouseOut"): Function;
    /** Set mouseOut option(event) to wijbarchart widget */
    wijbarchart(methodName: "option", eventName: "mouseOut", mouseOutEventValue: (e?, data?) => void): JQuery;
    
    /** Get mouseMove option(event) of wijbarchart widget */
    wijbarchart(methodName: "option", eventName: "mouseMove"): Function;
    /** Set mouseMove option(event) to wijbarchart widget */
    wijbarchart(methodName: "option", eventName: "mouseMove", mouseMoveEventValue: (e?, data?) => void): JQuery;
    
    /** Get click option(event) of wijbarchart widget */
    wijbarchart(methodName: "option", eventName: "click"): Function;
    /** Set click option(event) to wijbarchart widget */
    wijbarchart(methodName: "option", eventName: "click", clickEventValue: (e?, data?) => void): JQuery;
    
    
}

/** Definitions of wijbubblechart widget */
interface JQuery {

    /** Initialize a wijbubblechart widget */
    wijbubblechart(): JQuery;
    /** Initialize a wijbubblechart widget with the given options */
    wijbubblechart(options: Object): JQuery;
    wijbubblechart(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijbubblechart widget */
    wijbubblechart(methodName: "option", optionName: string): any;
    /** Set options to wijbubblechart widget */
    wijbubblechart(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijbubblechart widget */
    wijbubblechart(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Remove the functionality completely. This will return the element back to its pre-init state. */
    wijbubblechart(methodName: "destroy") ;
    
    /** Returns the bubble which has a Raphael's object that represents bubbles for the series data with the given index.
      * @param {number} index The index of the bubble.
      * @returns {Raphael Element} The bubble object.
      */
    wijbubblechart(methodName: "getBubble", index: any): RaphaelElement;
    
    /** Get minimumSize option of wijbubblechart widget */
    wijbubblechart(methodName: "option", optionName: "minimumSize") ;
    /** Set minimumSize option to wijbubblechart widget */
    wijbubblechart(methodName: "option", optionName: "minimumSize", minimumSizeValue ): JQuery;
    
    /** Get maximumSize option of wijbubblechart widget */
    wijbubblechart(methodName: "option", optionName: "maximumSize") ;
    /** Set maximumSize option to wijbubblechart widget */
    wijbubblechart(methodName: "option", optionName: "maximumSize", maximumSizeValue ): JQuery;
    
    /** Get sizingMethod option of wijbubblechart widget */
    wijbubblechart(methodName: "option", optionName: "sizingMethod") ;
    /** Set sizingMethod option to wijbubblechart widget */
    wijbubblechart(methodName: "option", optionName: "sizingMethod", sizingMethodValue ): JQuery;
    
    /** Get animation option of wijbubblechart widget */
    wijbubblechart(methodName: "option", optionName: "animation") ;
    /** Set animation option to wijbubblechart widget */
    wijbubblechart(methodName: "option", optionName: "animation", animationValue ): JQuery;
    
    /** Get seriesTransition option of wijbubblechart widget */
    wijbubblechart(methodName: "option", optionName: "seriesTransition") ;
    /** Set seriesTransition option to wijbubblechart widget */
    wijbubblechart(methodName: "option", optionName: "seriesTransition", seriesTransitionValue ): JQuery;
    
    /** Get seriesList option of wijbubblechart widget */
    wijbubblechart(methodName: "option", optionName: "seriesList") ;
    /** Set seriesList option to wijbubblechart widget */
    wijbubblechart(methodName: "option", optionName: "seriesList", seriesListValue ): JQuery;
    
    /** Get seriesHoverStyles option of wijbubblechart widget */
    wijbubblechart(methodName: "option", optionName: "seriesHoverStyles") ;
    /** Set seriesHoverStyles option to wijbubblechart widget */
    wijbubblechart(methodName: "option", optionName: "seriesHoverStyles", seriesHoverStylesValue ): JQuery;
    
    /** Get chartLabel option of wijbubblechart widget */
    wijbubblechart(methodName: "option", optionName: "chartLabel") ;
    /** Set chartLabel option to wijbubblechart widget */
    wijbubblechart(methodName: "option", optionName: "chartLabel", chartLabelValue ): JQuery;
    
    /** Get mouseDown option(event) of wijbubblechart widget */
    wijbubblechart(methodName: "option", eventName: "mouseDown"): Function;
    /** Set mouseDown option(event) to wijbubblechart widget */
    wijbubblechart(methodName: "option", eventName: "mouseDown", mouseDownEventValue: (e?, data?) => void): JQuery;
    
    /** Get mouseUp option(event) of wijbubblechart widget */
    wijbubblechart(methodName: "option", eventName: "mouseUp"): Function;
    /** Set mouseUp option(event) to wijbubblechart widget */
    wijbubblechart(methodName: "option", eventName: "mouseUp", mouseUpEventValue: (e?, data?) => void): JQuery;
    
    /** Get mouseOver option(event) of wijbubblechart widget */
    wijbubblechart(methodName: "option", eventName: "mouseOver"): Function;
    /** Set mouseOver option(event) to wijbubblechart widget */
    wijbubblechart(methodName: "option", eventName: "mouseOver", mouseOverEventValue: (e?, data?) => void): JQuery;
    
    /** Get mouseOut option(event) of wijbubblechart widget */
    wijbubblechart(methodName: "option", eventName: "mouseOut"): Function;
    /** Set mouseOut option(event) to wijbubblechart widget */
    wijbubblechart(methodName: "option", eventName: "mouseOut", mouseOutEventValue: (e?, data?) => void): JQuery;
    
    /** Get mouseMove option(event) of wijbubblechart widget */
    wijbubblechart(methodName: "option", eventName: "mouseMove"): Function;
    /** Set mouseMove option(event) to wijbubblechart widget */
    wijbubblechart(methodName: "option", eventName: "mouseMove", mouseMoveEventValue: (e?, data?) => void): JQuery;
    
    /** Get click option(event) of wijbubblechart widget */
    wijbubblechart(methodName: "option", eventName: "click"): Function;
    /** Set click option(event) to wijbubblechart widget */
    wijbubblechart(methodName: "option", eventName: "click", clickEventValue: (e?, data?) => void): JQuery;
    
    
}

/** Definitions of wijcalendar widget */
interface JQuery {

    /** Initialize a wijcalendar widget */
    wijcalendar(): JQuery;
    /** Initialize a wijcalendar widget with the given options */
    wijcalendar(options: Object): JQuery;
    wijcalendar(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijcalendar widget */
    wijcalendar(methodName: "option", optionName: string): any;
    /** Set options to wijcalendar widget */
    wijcalendar(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijcalendar widget */
    wijcalendar(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Remove the functionality completely. This will return the element back to its pre-init state. */
    wijcalendar(methodName: "destroy") ;
    
    /** Refreshes the calendar. */
    wijcalendar(methodName: "refresh") ;
    
    /** Refereshes a single date on the calendar.
      * @param {Date} date The date to be refreshed.
      */
    wijcalendar(methodName: "refreshDate", date: Date) ;
    
    /** Gets the valid display date. */
    wijcalendar(methodName: "getDisplayDate") ;
    
    /** Gets the currently selected date. */
    wijcalendar(methodName: "getSelectedDate") ;
    
    /** Selects the specified date.
      * @param {Date} date The date to be selected.
      * @returns {bool}
      */
    wijcalendar(methodName: "selectDate", date: Date): boolean;
    
    /** Clears any selection from the specified date.
      * @param {Date} date The date to be removed from the selectedDates collection.
      * @returns {bool}
      */
    wijcalendar(methodName: "unSelectDate", date: Date): boolean;
    
    /** Clears any selections from dates on the calendar, removing them from the selectedDates collection. */
    wijcalendar(methodName: "unSelectAll") ;
    
    /** Determines whether the calendar is in the pop-up state. */
    wijcalendar(methodName: "isPopupShowing") ;
    
    /** Pops up the calendar at specifies position.
      * @param {Object} position A jQuery Position plugin that indicates the position in which to pop up the calendar.
      * Please see "http://jqueryui.com/demos/position/" for details of the parameter.
      */
    wijcalendar(methodName: "popup", position: any) ;
    
    /** Pops up the calendar at the specified X and Y coordinates in the document.
      * @param {number} x X offset.
      * @param {number} y Y offset.
      */
    wijcalendar(methodName: "popupAt", x: any, y: any) ;
    
    /** Closes the calendar if it is in the pop-up state. */
    wijcalendar(methodName: "close") ;
    
    /** Get culture option of wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "culture") ;
    /** Set culture option to wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "culture", cultureValue ): JQuery;
    
    /** Get cultureCalendar option of wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "cultureCalendar") ;
    /** Set cultureCalendar option to wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "cultureCalendar", cultureCalendarValue ): JQuery;
    
    /** Get monthCols option of wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "monthCols") ;
    /** Set monthCols option to wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "monthCols", monthColsValue ): JQuery;
    
    /** Get monthRows option of wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "monthRows") ;
    /** Set monthRows option to wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "monthRows", monthRowsValue ): JQuery;
    
    /** Get titleFormat option of wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "titleFormat") ;
    /** Set titleFormat option to wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "titleFormat", titleFormatValue ): JQuery;
    
    /** Get showTitle option of wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "showTitle") ;
    /** Set showTitle option to wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "showTitle", showTitleValue ): JQuery;
    
    /** Get displayDate option of wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "displayDate") ;
    /** Set displayDate option to wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "displayDate", displayDateValue ): JQuery;
    
    /** Get dayRows option of wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "dayRows") ;
    /** Set dayRows option to wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "dayRows", dayRowsValue ): JQuery;
    
    /** Get dayCols option of wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "dayCols") ;
    /** Set dayCols option to wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "dayCols", dayColsValue ): JQuery;
    
    /** Get weekDayFormat option of wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "weekDayFormat") ;
    /** Set weekDayFormat option to wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "weekDayFormat", weekDayFormatValue ): JQuery;
    
    /** Get showWeekDays option of wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "showWeekDays") ;
    /** Set showWeekDays option to wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "showWeekDays", showWeekDaysValue ): JQuery;
    
    /** Get showWeekNumbers option of wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "showWeekNumbers") ;
    /** Set showWeekNumbers option to wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "showWeekNumbers", showWeekNumbersValue ): JQuery;
    
    /** Get calendarWeekRule option of wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "calendarWeekRule") ;
    /** Set calendarWeekRule option to wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "calendarWeekRule", calendarWeekRuleValue ): JQuery;
    
    /** Get minDate option of wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "minDate") ;
    /** Set minDate option to wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "minDate", minDateValue ): JQuery;
    
    /** Get maxDate option of wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "maxDate") ;
    /** Set maxDate option to wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "maxDate", maxDateValue ): JQuery;
    
    /** Get showOtherMonthDays option of wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "showOtherMonthDays") ;
    /** Set showOtherMonthDays option to wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "showOtherMonthDays", showOtherMonthDaysValue ): JQuery;
    
    /** Get showDayPadding option of wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "showDayPadding") ;
    /** Set showDayPadding option to wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "showDayPadding", showDayPaddingValue ): JQuery;
    
    /** Get selectionMode option of wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "selectionMode") ;
    /** Set selectionMode option to wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "selectionMode", selectionModeValue ): JQuery;
    
    /** Get allowPreview option of wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "allowPreview") ;
    /** Set allowPreview option to wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "allowPreview", allowPreviewValue ): JQuery;
    
    /** Get allowQuickPick option of wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "allowQuickPick") ;
    /** Set allowQuickPick option to wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "allowQuickPick", allowQuickPickValue ): JQuery;
    
    /** Get toolTipFormat option of wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "toolTipFormat") ;
    /** Set toolTipFormat option to wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "toolTipFormat", toolTipFormatValue ): JQuery;
    
    /** Get prevTooltip option of wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "prevTooltip") ;
    /** Set prevTooltip option to wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "prevTooltip", prevTooltipValue ): JQuery;
    
    /** Get nextTooltip option of wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "nextTooltip") ;
    /** Set nextTooltip option to wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "nextTooltip", nextTooltipValue ): JQuery;
    
    /** Get quickPrevTooltip option of wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "quickPrevTooltip") ;
    /** Set quickPrevTooltip option to wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "quickPrevTooltip", quickPrevTooltipValue ): JQuery;
    
    /** Get quickNextTooltip option of wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "quickNextTooltip") ;
    /** Set quickNextTooltip option to wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "quickNextTooltip", quickNextTooltipValue ): JQuery;
    
    /** Get prevPreviewTooltip option of wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "prevPreviewTooltip") ;
    /** Set prevPreviewTooltip option to wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "prevPreviewTooltip", prevPreviewTooltipValue ): JQuery;
    
    /** Get nextPreviewTooltip option of wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "nextPreviewTooltip") ;
    /** Set nextPreviewTooltip option to wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "nextPreviewTooltip", nextPreviewTooltipValue ): JQuery;
    
    /** Get navButtons option of wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "navButtons") ;
    /** Set navButtons option to wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "navButtons", navButtonsValue ): JQuery;
    
    /** Get quickNavStep option of wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "quickNavStep") ;
    /** Set quickNavStep option to wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "quickNavStep", quickNavStepValue ): JQuery;
    
    /** Get direction option of wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "direction") ;
    /** Set direction option to wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "direction", directionValue ): JQuery;
    
    /** Get duration option of wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "duration") ;
    /** Set duration option to wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "duration", durationValue ): JQuery;
    
    /** Get easing option of wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "easing") ;
    /** Set easing option to wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "easing", easingValue ): JQuery;
    
    /** Get popupMode option of wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "popupMode") ;
    /** Set popupMode option to wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "popupMode", popupModeValue ): JQuery;
    
    /** Get autoHide option of wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "autoHide") ;
    /** Set autoHide option to wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "autoHide", autoHideValue ): JQuery;
    
    /** Get customizeDate option of wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "customizeDate") ;
    /** Set customizeDate option to wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "customizeDate", customizeDateValue ): JQuery;
    
    /** Get title option of wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "title") ;
    /** Set title option to wijcalendar widget */
    wijcalendar(methodName: "option", optionName: "title", titleValue ): JQuery;
    
    /** Get beforeSlide option(event) of wijcalendar widget */
    wijcalendar(methodName: "option", eventName: "beforeSlide"): Function;
    /** Set beforeSlide option(event) to wijcalendar widget */
    wijcalendar(methodName: "option", eventName: "beforeSlide", beforeSlideEventValue: (e?) => void): JQuery;
    
    /** Get afterSlide option(event) of wijcalendar widget */
    wijcalendar(methodName: "option", eventName: "afterSlide"): Function;
    /** Set afterSlide option(event) to wijcalendar widget */
    wijcalendar(methodName: "option", eventName: "afterSlide", afterSlideEventValue: (e?) => void): JQuery;
    
    /** Get beforeSelect option(event) of wijcalendar widget */
    wijcalendar(methodName: "option", eventName: "beforeSelect"): Function;
    /** Set beforeSelect option(event) to wijcalendar widget */
    wijcalendar(methodName: "option", eventName: "beforeSelect", beforeSelectEventValue: (e?, args?) => void): JQuery;
    
    /** Get afterSelect option(event) of wijcalendar widget */
    wijcalendar(methodName: "option", eventName: "afterSelect"): Function;
    /** Set afterSelect option(event) to wijcalendar widget */
    wijcalendar(methodName: "option", eventName: "afterSelect", afterSelectEventValue: (e?, args?) => void): JQuery;
    
    /** Get selectedDatesChanged option(event) of wijcalendar widget */
    wijcalendar(methodName: "option", eventName: "selectedDatesChanged"): Function;
    /** Set selectedDatesChanged option(event) to wijcalendar widget */
    wijcalendar(methodName: "option", eventName: "selectedDatesChanged", selectedDatesChangedEventValue: (e?, data?) => void): JQuery;
    
    
}

/** Definitions of wijcandlestickchart widget */
interface JQuery {

    /** Initialize a wijcandlestickchart widget */
    wijcandlestickchart(): JQuery;
    /** Initialize a wijcandlestickchart widget with the given options */
    wijcandlestickchart(options: Object): JQuery;
    wijcandlestickchart(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijcandlestickchart widget */
    wijcandlestickchart(methodName: "option", optionName: string): any;
    /** Set options to wijcandlestickchart widget */
    wijcandlestickchart(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijcandlestickchart widget */
    wijcandlestickchart(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Remove the functionality completely. This will return the element back to its pre-init state. */
    wijcandlestickchart(methodName: "destroy") ;
    
    /** This method returns the candlestick elements, which has a set of Raphaël objects  that represent candlestick elements for the
      * series data, from the specified index.
      * @param {number} index The zero-based index of the candlestick to return.
      * @returns {Object} candlestick object which contains Raphael elements.
      */
    wijcandlestickchart(methodName: "getCandlestick", index: any) ;
    
    /** Get type option of wijcandlestickchart widget */
    wijcandlestickchart(methodName: "option", optionName: "type") ;
    /** Set type option to wijcandlestickchart widget */
    wijcandlestickchart(methodName: "option", optionName: "type", typeValue ): JQuery;
    
    /** Get animation option of wijcandlestickchart widget */
    wijcandlestickchart(methodName: "option", optionName: "animation") ;
    /** Set animation option to wijcandlestickchart widget */
    wijcandlestickchart(methodName: "option", optionName: "animation", animationValue ): JQuery;
    
    /** Get candlestickFormatter option of wijcandlestickchart widget */
    wijcandlestickchart(methodName: "option", optionName: "candlestickFormatter") ;
    /** Set candlestickFormatter option to wijcandlestickchart widget */
    wijcandlestickchart(methodName: "option", optionName: "candlestickFormatter", candlestickFormatterValue ): JQuery;
    
    /** Get hint option of wijcandlestickchart widget */
    wijcandlestickchart(methodName: "option", optionName: "hint") ;
    /** Set hint option to wijcandlestickchart widget */
    wijcandlestickchart(methodName: "option", optionName: "hint", hintValue ): JQuery;
    
    /** Get mouseDown option(event) of wijcandlestickchart widget */
    wijcandlestickchart(methodName: "option", eventName: "mouseDown"): Function;
    /** Set mouseDown option(event) to wijcandlestickchart widget */
    wijcandlestickchart(methodName: "option", eventName: "mouseDown", mouseDownEventValue: (e?, data?) => void): JQuery;
    
    /** Get mouseUp option(event) of wijcandlestickchart widget */
    wijcandlestickchart(methodName: "option", eventName: "mouseUp"): Function;
    /** Set mouseUp option(event) to wijcandlestickchart widget */
    wijcandlestickchart(methodName: "option", eventName: "mouseUp", mouseUpEventValue: (e?, data?) => void): JQuery;
    
    /** Get mouseOver option(event) of wijcandlestickchart widget */
    wijcandlestickchart(methodName: "option", eventName: "mouseOver"): Function;
    /** Set mouseOver option(event) to wijcandlestickchart widget */
    wijcandlestickchart(methodName: "option", eventName: "mouseOver", mouseOverEventValue: (e?, data?) => void): JQuery;
    
    /** Get mouseOut option(event) of wijcandlestickchart widget */
    wijcandlestickchart(methodName: "option", eventName: "mouseOut"): Function;
    /** Set mouseOut option(event) to wijcandlestickchart widget */
    wijcandlestickchart(methodName: "option", eventName: "mouseOut", mouseOutEventValue: (e?, data?) => void): JQuery;
    
    /** Get mouseMove option(event) of wijcandlestickchart widget */
    wijcandlestickchart(methodName: "option", eventName: "mouseMove"): Function;
    /** Set mouseMove option(event) to wijcandlestickchart widget */
    wijcandlestickchart(methodName: "option", eventName: "mouseMove", mouseMoveEventValue: (e?, data?) => void): JQuery;
    
    /** Get click option(event) of wijcandlestickchart widget */
    wijcandlestickchart(methodName: "option", eventName: "click"): Function;
    /** Set click option(event) to wijcandlestickchart widget */
    wijcandlestickchart(methodName: "option", eventName: "click", clickEventValue: (e?, data?) => void): JQuery;
    
    
}

/** Definitions of wijcarousel widget */
interface JQuery {

    /** Initialize a wijcarousel widget */
    wijcarousel(): JQuery;
    /** Initialize a wijcarousel widget with the given options */
    wijcarousel(options: Object): JQuery;
    wijcarousel(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijcarousel widget */
    wijcarousel(methodName: "option", optionName: string): any;
    /** Set options to wijcarousel widget */
    wijcarousel(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijcarousel widget */
    wijcarousel(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Removes the wijcarousel functionality completely. This returns the element to its pre-init state. */
    wijcarousel(methodName: "destroy") ;
    
    /** Refresh the carousel layout.Reset the layout, scrolled. */
    wijcarousel(methodName: "refresh") ;
    
    /** Starts automatically displaying each of the images in order. */
    wijcarousel(methodName: "play") ;
    
    /** Stops automatically displaying the images in order. */
    wijcarousel(methodName: "pause") ;
    
    /** Shows the next picture. */
    wijcarousel(methodName: "next") ;
    
    /** Shows the previous picture. */
    wijcarousel(methodName: "previous") ;
    
    /** Scrolls to the picture at the specified index.
      * @param {number} index The zero-based index of the picture to which to scroll.
      * @example
      * $("#element").wijcarousel("scrollTo", 2);
      */
    wijcarousel(methodName: "scrollTo", index: any) ;
    
    /** Add a custom item with specified index.
      * @param {string|jQuery} ui The node content or innerHTML.
      * @param {number} index Specified the postion to insert at.
      */
    wijcarousel(methodName: "add", ui: any, index: any) ;
    
    /** Remove the item at specified index.
      * @param {number} index Specified which item should be removed.
      */
    wijcarousel(methodName: "remove", index: any) ;
    
    /** Get data option of wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "data") ;
    /** Set data option to wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "data", dataValue ): JQuery;
    
    /** Get auto option of wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "auto") ;
    /** Set auto option to wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "auto", autoValue ): JQuery;
    
    /** Get interval option of wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "interval") ;
    /** Set interval option to wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "interval", intervalValue ): JQuery;
    
    /** Get showTimer option of wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "showTimer") ;
    /** Set showTimer option to wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "showTimer", showTimerValue ): JQuery;
    
    /** Get buttonPosition option of wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "buttonPosition") ;
    /** Set buttonPosition option to wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "buttonPosition", buttonPositionValue ): JQuery;
    
    /** Get showPager option of wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "showPager") ;
    /** Set showPager option to wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "showPager", showPagerValue ): JQuery;
    
    /** Get prevBtnClass option of wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "prevBtnClass") ;
    /** Set prevBtnClass option to wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "prevBtnClass", prevBtnClassValue ): JQuery;
    
    /** Get nextBtnClass option of wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "nextBtnClass") ;
    /** Set nextBtnClass option to wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "nextBtnClass", nextBtnClassValue ): JQuery;
    
    /** Get pagerType option of wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "pagerType") ;
    /** Set pagerType option to wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "pagerType", pagerTypeValue ): JQuery;
    
    /** Get thumbnails option of wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "thumbnails") ;
    /** Set thumbnails option to wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "thumbnails", thumbnailsValue ): JQuery;
    
    /** Get pagerPosition option of wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "pagerPosition") ;
    /** Set pagerPosition option to wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "pagerPosition", pagerPositionValue ): JQuery;
    
    /** Get orientation option of wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "orientation") ;
    /** Set orientation option to wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "orientation", orientationValue ): JQuery;
    
    /** Get sliderOrientation option of wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "sliderOrientation") ;
    /** Set sliderOrientation option to wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "sliderOrientation", sliderOrientationValue ): JQuery;
    
    /** Get loop option of wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "loop") ;
    /** Set loop option to wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "loop", loopValue ): JQuery;
    
    /** Get animation option of wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "animation") ;
    /** Set animation option to wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "animation", animationValue ): JQuery;
    
    /** Get start option of wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "start") ;
    /** Set start option to wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "start", startValue ): JQuery;
    
    /** Get display option of wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "display") ;
    /** Set display option to wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "display", displayValue ): JQuery;
    
    /** Get preview option of wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "preview") ;
    /** Set preview option to wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "preview", previewValue ): JQuery;
    
    /** Get step option of wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "step") ;
    /** Set step option to wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "step", stepValue ): JQuery;
    
    /** Get showControls option of wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "showControls") ;
    /** Set showControls option to wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "showControls", showControlsValue ): JQuery;
    
    /** Get control option of wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "control") ;
    /** Set control option to wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "control", controlValue ): JQuery;
    
    /** Get controlPosition option of wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "controlPosition") ;
    /** Set controlPosition option to wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "controlPosition", controlPositionValue ): JQuery;
    
    /** Get showCaption option of wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "showCaption") ;
    /** Set showCaption option to wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "showCaption", showCaptionValue ): JQuery;
    
    /** Get showControlsOnHover option of wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "showControlsOnHover") ;
    /** Set showControlsOnHover option to wijcarousel widget */
    wijcarousel(methodName: "option", optionName: "showControlsOnHover", showControlsOnHoverValue ): JQuery;
    
    /** Get itemClick option(event) of wijcarousel widget */
    wijcarousel(methodName: "option", eventName: "itemClick"): Function;
    /** Set itemClick option(event) to wijcarousel widget */
    wijcarousel(methodName: "option", eventName: "itemClick", itemClickEventValue: (e?, data?) => void): JQuery;
    
    /** Get beforeScroll option(event) of wijcarousel widget */
    wijcarousel(methodName: "option", eventName: "beforeScroll"): Function;
    /** Set beforeScroll option(event) to wijcarousel widget */
    wijcarousel(methodName: "option", eventName: "beforeScroll", beforeScrollEventValue: (e?, data?) => void): JQuery;
    
    /** Get afterScroll option(event) of wijcarousel widget */
    wijcarousel(methodName: "option", eventName: "afterScroll"): Function;
    /** Set afterScroll option(event) to wijcarousel widget */
    wijcarousel(methodName: "option", eventName: "afterScroll", afterScrollEventValue: (e?, data?) => void): JQuery;
    
    /** Get loadCallback option(event) of wijcarousel widget */
    wijcarousel(methodName: "option", eventName: "loadCallback"): Function;
    /** Set loadCallback option(event) to wijcarousel widget */
    wijcarousel(methodName: "option", eventName: "loadCallback", loadCallbackEventValue: (e?, data?) => void): JQuery;
    
    
}

/** Definitions of wijchartcore widget */
interface JQuery {

    /** Initialize a wijchartcore widget */
    wijchartcore(): JQuery;
    /** Initialize a wijchartcore widget with the given options */
    wijchartcore(options: Object): JQuery;
    wijchartcore(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijchartcore widget */
    wijchartcore(methodName: "option", optionName: string): any;
    /** Set options to wijchartcore widget */
    wijchartcore(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijchartcore widget */
    wijchartcore(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Remove the functionality completely. This will return the element back to its pre-init state. */
    wijchartcore(methodName: "destroy") ;
    
    /** Returns a reference to the Raphael canvas object.
      * @returns {Raphael} Reference to raphael canvas object.
      * @example
      * $("#chartcore").wijchartcore("getCanvas")
      */
    wijchartcore(methodName: "getCanvas"): RaphaelPaper;
    
    /** Exports the chart in a graphic format. 
      * The export method only works when wijmo.exporter.chartExport's reference is on the page.
      * @param {string|Object} exportSettings 1.The name of the exported file.
      * 2.Settings of exporting, should be conformed to wijmo.exporter.ChartExportSetting
      * @param {?string} type The type of the exported file.
      * @param {?string} pdfSettings The setting of pdf.
      * @param {?string} serviceUrl The export service url.
      * @param {?string} exportMethod with different mode,
      * 1. "Content" Sending chart markup to the service for exporting. It requires IE9 or high version installed on the service host. It has better performance than Options mode.
      * 2. "Options" Sending chart widget options to the service for exporting.
      * @remarks
      * Default exported file type is png, possible types are: jpg, png, gif, bmp, tiff, pdf.
      * @example
      * $("#chartcore").wijchartcore("exportChart", "chart", "png");
      */
    wijchartcore(methodName: "exportChart", exportSettings: any, type?: any, pdfSettings?: any, serviceUrl?: any, exportMethod?: any) ;
    
    /** Add series point to the series list.
      * @param {number} seriesIndex The index of the series that the point will be inserted to.
      * @param {object} point The point that will be inserted to.
      * @param {bool} shift A value that indicates whether to shift the first point.
      */
    wijchartcore(methodName: "addSeriesPoint", seriesIndex: any, point: any, shift: boolean) ;
    
    /** Suspend automatic updates to the chart while reseting the options. */
    wijchartcore(methodName: "beginUpdate") ;
    
    /** Restore automatic updates to the chart after the options has been reset. */
    wijchartcore(methodName: "endUpdate") ;
    
    /** This method redraws the chart.
      * @param {?Boolean} drawIfNeeded A value that indicates whether to redraw the chart regardless of whether
      * the chart already exists. If true, then the chart is redrawn only if it was not already created. If false, 
      * then the chart is redrawn, even if it already exists.
      */
    wijchartcore(methodName: "redraw", drawIfNeeded?: boolean) ;
    
    /** Get annotations option of wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "annotations") ;
    /** Set annotations option to wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "annotations", annotationsValue ): JQuery;
    
    /** Get width option of wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "width") ;
    /** Set width option to wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "width", widthValue ): JQuery;
    
    /** Get height option of wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "height") ;
    /** Set height option to wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "height", heightValue ): JQuery;
    
    /** Get culture option of wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "culture") ;
    /** Set culture option to wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "culture", cultureValue ): JQuery;
    
    /** Get cultureCalendar option of wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "cultureCalendar") ;
    /** Set cultureCalendar option to wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "cultureCalendar", cultureCalendarValue ): JQuery;
    
    /** Get autoResize option of wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "autoResize") ;
    /** Set autoResize option to wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "autoResize", autoResizeValue ): JQuery;
    
    /** Get seriesList option of wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "seriesList") ;
    /** Set seriesList option to wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "seriesList", seriesListValue ): JQuery;
    
    /** Get seriesStyles option of wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "seriesStyles") ;
    /** Set seriesStyles option to wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "seriesStyles", seriesStylesValue ): JQuery;
    
    /** Get seriesHoverStyles option of wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "seriesHoverStyles") ;
    /** Set seriesHoverStyles option to wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "seriesHoverStyles", seriesHoverStylesValue ): JQuery;
    
    /** Get marginTop option of wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "marginTop") ;
    /** Set marginTop option to wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "marginTop", marginTopValue ): JQuery;
    
    /** Get marginRight option of wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "marginRight") ;
    /** Set marginRight option to wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "marginRight", marginRightValue ): JQuery;
    
    /** Get marginBottom option of wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "marginBottom") ;
    /** Set marginBottom option to wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "marginBottom", marginBottomValue ): JQuery;
    
    /** Get marginLeft option of wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "marginLeft") ;
    /** Set marginLeft option to wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "marginLeft", marginLeftValue ): JQuery;
    
    /** Get textStyle option of wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "textStyle") ;
    /** Set textStyle option to wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "textStyle", textStyleValue ): JQuery;
    
    /** Get header option of wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "header") ;
    /** Set header option to wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "header", headerValue ): JQuery;
    
    /** Get footer option of wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "footer") ;
    /** Set footer option to wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "footer", footerValue ): JQuery;
    
    /** Get legend option of wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "legend") ;
    /** Set legend option to wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "legend", legendValue ): JQuery;
    
    /** Get axis option of wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "axis") ;
    /** Set axis option to wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "axis", axisValue ): JQuery;
    
    /** Get hint option of wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "hint") ;
    /** Set hint option to wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "hint", hintValue ): JQuery;
    
    /** Get indicator option of wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "indicator") ;
    /** Set indicator option to wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "indicator", indicatorValue ): JQuery;
    
    /** Get showChartLabels option of wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "showChartLabels") ;
    /** Set showChartLabels option to wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "showChartLabels", showChartLabelsValue ): JQuery;
    
    /** Get chartLabelStyle option of wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "chartLabelStyle") ;
    /** Set chartLabelStyle option to wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "chartLabelStyle", chartLabelStyleValue ): JQuery;
    
    /** Get chartLabelFormatString option of wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "chartLabelFormatString") ;
    /** Set chartLabelFormatString option to wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "chartLabelFormatString", chartLabelFormatStringValue ): JQuery;
    
    /** Get chartLabelFormatter option of wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "chartLabelFormatter") ;
    /** Set chartLabelFormatter option to wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "chartLabelFormatter", chartLabelFormatterValue ): JQuery;
    
    /** Get disableDefaultTextStyle option of wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "disableDefaultTextStyle") ;
    /** Set disableDefaultTextStyle option to wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "disableDefaultTextStyle", disableDefaultTextStyleValue ): JQuery;
    
    /** Get shadow option of wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "shadow") ;
    /** Set shadow option to wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "shadow", shadowValue ): JQuery;
    
    /** Get dataSource option of wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "dataSource") ;
    /** Set dataSource option to wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "dataSource", dataSourceValue ): JQuery;
    
    /** Get data option of wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "data") ;
    /** Set data option to wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "data", dataValue ): JQuery;
    
    /** Get stacked option of wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "stacked") ;
    /** Set stacked option to wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "stacked", stackedValue ): JQuery;
    
    /** Get is100Percent option of wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "is100Percent") ;
    /** Set is100Percent option to wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "is100Percent", is100PercentValue ): JQuery;
    
    /** Get disabled option of wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "disabled") ;
    /** Set disabled option to wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "disabled", disabledValue ): JQuery;
    
    /** Get horizontal option of wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "horizontal") ;
    /** Set horizontal option to wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "horizontal", horizontalValue ): JQuery;
    
    /** Get seriesTransition option of wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "seriesTransition") ;
    /** Set seriesTransition option to wijchartcore widget */
    wijchartcore(methodName: "option", optionName: "seriesTransition", seriesTransitionValue ): JQuery;
    
    /** Get beforeSeriesChange option(event) of wijchartcore widget */
    wijchartcore(methodName: "option", eventName: "beforeSeriesChange"): Function;
    /** Set beforeSeriesChange option(event) to wijchartcore widget */
    wijchartcore(methodName: "option", eventName: "beforeSeriesChange", beforeSeriesChangeEventValue: (e?, data?) => void): JQuery;
    
    /** Get seriesChanged option(event) of wijchartcore widget */
    wijchartcore(methodName: "option", eventName: "seriesChanged"): Function;
    /** Set seriesChanged option(event) to wijchartcore widget */
    wijchartcore(methodName: "option", eventName: "seriesChanged", seriesChangedEventValue: (e?, data?) => void): JQuery;
    
    /** Get beforePaint option(event) of wijchartcore widget */
    wijchartcore(methodName: "option", eventName: "beforePaint"): Function;
    /** Set beforePaint option(event) to wijchartcore widget */
    wijchartcore(methodName: "option", eventName: "beforePaint", beforePaintEventValue: (e?) => void): JQuery;
    
    /** Get painted option(event) of wijchartcore widget */
    wijchartcore(methodName: "option", eventName: "painted"): Function;
    /** Set painted option(event) to wijchartcore widget */
    wijchartcore(methodName: "option", eventName: "painted", paintedEventValue: (e?) => void): JQuery;
    
    
}

/** Definitions of wijchartnavigator widget */
interface JQuery {

    /** Initialize a wijchartnavigator widget */
    wijchartnavigator(): JQuery;
    /** Initialize a wijchartnavigator widget with the given options */
    wijchartnavigator(options: Object): JQuery;
    wijchartnavigator(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijchartnavigator widget */
    wijchartnavigator(methodName: "option", optionName: string): any;
    /** Set options to wijchartnavigator widget */
    wijchartnavigator(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijchartnavigator widget */
    wijchartnavigator(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /**  */
    wijchartnavigator(methodName: "destroy") ;
    
    /** Get targetSelector option of wijchartnavigator widget */
    wijchartnavigator(methodName: "option", optionName: "targetSelector") ;
    /** Set targetSelector option to wijchartnavigator widget */
    wijchartnavigator(methodName: "option", optionName: "targetSelector", targetSelectorValue ): JQuery;
    
    /** Get dataSource option of wijchartnavigator widget */
    wijchartnavigator(methodName: "option", optionName: "dataSource") ;
    /** Set dataSource option to wijchartnavigator widget */
    wijchartnavigator(methodName: "option", optionName: "dataSource", dataSourceValue ): JQuery;
    
    /** Get data option of wijchartnavigator widget */
    wijchartnavigator(methodName: "option", optionName: "data") ;
    /** Set data option to wijchartnavigator widget */
    wijchartnavigator(methodName: "option", optionName: "data", dataValue ): JQuery;
    
    /** Get seriesList option of wijchartnavigator widget */
    wijchartnavigator(methodName: "option", optionName: "seriesList") ;
    /** Set seriesList option to wijchartnavigator widget */
    wijchartnavigator(methodName: "option", optionName: "seriesList", seriesListValue ): JQuery;
    
    /** Get seriesStyles option of wijchartnavigator widget */
    wijchartnavigator(methodName: "option", optionName: "seriesStyles") ;
    /** Set seriesStyles option to wijchartnavigator widget */
    wijchartnavigator(methodName: "option", optionName: "seriesStyles", seriesStylesValue ): JQuery;
    
    /** Get xAxis option of wijchartnavigator widget */
    wijchartnavigator(methodName: "option", optionName: "xAxis") ;
    /** Set xAxis option to wijchartnavigator widget */
    wijchartnavigator(methodName: "option", optionName: "xAxis", xAxisValue ): JQuery;
    
    /** Get indicator option of wijchartnavigator widget */
    wijchartnavigator(methodName: "option", optionName: "indicator") ;
    /** Set indicator option to wijchartnavigator widget */
    wijchartnavigator(methodName: "option", optionName: "indicator", indicatorValue ): JQuery;
    
    /** Get rangeMin option of wijchartnavigator widget */
    wijchartnavigator(methodName: "option", optionName: "rangeMin") ;
    /** Set rangeMin option to wijchartnavigator widget */
    wijchartnavigator(methodName: "option", optionName: "rangeMin", rangeMinValue ): JQuery;
    
    /** Get rangeMax option of wijchartnavigator widget */
    wijchartnavigator(methodName: "option", optionName: "rangeMax") ;
    /** Set rangeMax option to wijchartnavigator widget */
    wijchartnavigator(methodName: "option", optionName: "rangeMax", rangeMaxValue ): JQuery;
    
    /** Get step option of wijchartnavigator widget */
    wijchartnavigator(methodName: "option", optionName: "step") ;
    /** Set step option to wijchartnavigator widget */
    wijchartnavigator(methodName: "option", optionName: "step", stepValue ): JQuery;
    
    /** Get updating option(event) of wijchartnavigator widget */
    wijchartnavigator(methodName: "option", eventName: "updating"): Function;
    /** Set updating option(event) to wijchartnavigator widget */
    wijchartnavigator(methodName: "option", eventName: "updating", updatingEventValue: (e?, args?) => void): JQuery;
    
    /** Get updated option(event) of wijchartnavigator widget */
    wijchartnavigator(methodName: "option", eventName: "updated"): Function;
    /** Set updated option(event) to wijchartnavigator widget */
    wijchartnavigator(methodName: "option", eventName: "updated", updatedEventValue: (e?, args?) => void): JQuery;
    
    
}

/** Definitions of wijcheckbox widget */
interface JQuery {

    /** Initialize a wijcheckbox widget */
    wijcheckbox(): JQuery;
    /** Initialize a wijcheckbox widget with the given options */
    wijcheckbox(options: Object): JQuery;
    wijcheckbox(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijcheckbox widget */
    wijcheckbox(methodName: "option", optionName: string): any;
    /** Set options to wijcheckbox widget */
    wijcheckbox(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijcheckbox widget */
    wijcheckbox(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Use the refresh method to set the checkbox element's style.
      * @param {object} e The event that fires the refresh the checkbox.
      */
    wijcheckbox(methodName: "refresh", e?: any) ;
    
    /** Remove the functionality completely. This will return the element back to its pre-init state. */
    wijcheckbox(methodName: "destroy") ;
    
    /** Get checked option of wijcheckbox widget */
    wijcheckbox(methodName: "option", optionName: "checked") ;
    /** Set checked option to wijcheckbox widget */
    wijcheckbox(methodName: "option", optionName: "checked", checkedValue ): JQuery;
    
    /** Get changed option(event) of wijcheckbox widget */
    wijcheckbox(methodName: "option", eventName: "changed"): Function;
    /** Set changed option(event) to wijcheckbox widget */
    wijcheckbox(methodName: "option", eventName: "changed", changedEventValue: (e?, data?) => void): JQuery;
    
    
}

/** Definitions of wijcombobox widget */
interface JQuery {

    /** Initialize a wijcombobox widget */
    wijcombobox(): JQuery;
    /** Initialize a wijcombobox widget with the given options */
    wijcombobox(options: Object): JQuery;
    wijcombobox(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijcombobox widget */
    wijcombobox(methodName: "option", optionName: string): any;
    /** Set options to wijcombobox widget */
    wijcombobox(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijcombobox widget */
    wijcombobox(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Repaints wijcombobox. Returns true if it succeeds; 
      *   otherwise, returns false.
      * @returns {bool} true if it succeeds; otherwise, returns false.
      */
    wijcombobox(methodName: "repaint"): boolean;
    
    /** Remove the functionality completely. This will return the element back to its pre-init state. */
    wijcombobox(methodName: "destroy") ;
    
    /** Searches the wijcombobox drop-down list for the specified value.
      * @param {string} value Text to search in the drop-down list.
      * @param {object} eventObj The jquery event object.
      */
    wijcombobox(methodName: "search", value: any, eventObj: any) ;
    
    /** Get the select item(s) in combobox.
      * @returns {array} array object or empty array.
      * @remarks
      * when using multiple mode, it will return array object.
      * If no item is selected, it will return null or empty array.
      */
    wijcombobox(methodName: "getSelectedItems"): any[];
    
    /** Closes drop-down list.
      * @param {?EventObj} event The jquery event object.
      * @param {?boolean} skipAnimation A value indicating whehter to skip animation.
      */
    wijcombobox(methodName: "close", event?: Event, skipAnimation?: boolean) ;
    
    /** Get dataSource option of wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "dataSource") ;
    /** Set dataSource option to wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "dataSource", dataSourceValue ): JQuery;
    
    /** Get data option of wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "data") ;
    /** Set data option to wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "data", dataValue ): JQuery;
    
    /** Get labelText option of wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "labelText") ;
    /** Set labelText option to wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "labelText", labelTextValue ): JQuery;
    
    /** Get minLength option of wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "minLength") ;
    /** Set minLength option to wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "minLength", minLengthValue ): JQuery;
    
    /** Get delay option of wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "delay") ;
    /** Set delay option to wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "delay", delayValue ): JQuery;
    
    /** Get showingAnimation option of wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "showingAnimation") ;
    /** Set showingAnimation option to wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "showingAnimation", showingAnimationValue ): JQuery;
    
    /** Get hidingAnimation option of wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "hidingAnimation") ;
    /** Set hidingAnimation option to wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "hidingAnimation", hidingAnimationValue ): JQuery;
    
    /** Get showTrigger option of wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "showTrigger") ;
    /** Set showTrigger option to wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "showTrigger", showTriggerValue ): JQuery;
    
    /** Get triggerPosition option of wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "triggerPosition") ;
    /** Set triggerPosition option to wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "triggerPosition", triggerPositionValue ): JQuery;
    
    /** Get dropdownHeight option of wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "dropdownHeight") ;
    /** Set dropdownHeight option to wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "dropdownHeight", dropdownHeightValue ): JQuery;
    
    /** Get dropdownWidth option of wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "dropdownWidth") ;
    /** Set dropdownWidth option to wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "dropdownWidth", dropdownWidthValue ): JQuery;
    
    /** Get selectOnItemFocus option of wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "selectOnItemFocus") ;
    /** Set selectOnItemFocus option to wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "selectOnItemFocus", selectOnItemFocusValue ): JQuery;
    
    /** Get autoFilter option of wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "autoFilter") ;
    /** Set autoFilter option to wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "autoFilter", autoFilterValue ): JQuery;
    
    /** Get autoComplete option of wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "autoComplete") ;
    /** Set autoComplete option to wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "autoComplete", autoCompleteValue ): JQuery;
    
    /** Get highlightMatching option of wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "highlightMatching") ;
    /** Set highlightMatching option to wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "highlightMatching", highlightMatchingValue ): JQuery;
    
    /** Get dropDownListPosition option of wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "dropDownListPosition") ;
    /** Set dropDownListPosition option to wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "dropDownListPosition", dropDownListPositionValue ): JQuery;
    
    /** Get columns option of wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "columns") ;
    /** Set columns option to wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "columns", columnsValue ): JQuery;
    
    /** Get selectionMode option of wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "selectionMode") ;
    /** Set selectionMode option to wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "selectionMode", selectionModeValue ): JQuery;
    
    /** Get multipleSelectionSeparator option of wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "multipleSelectionSeparator") ;
    /** Set multipleSelectionSeparator option to wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "multipleSelectionSeparator", multipleSelectionSeparatorValue ): JQuery;
    
    /** Get forceSelectionText option of wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "forceSelectionText") ;
    /** Set forceSelectionText option to wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "forceSelectionText", forceSelectionTextValue ): JQuery;
    
    /** Get isEditable option of wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "isEditable") ;
    /** Set isEditable option to wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "isEditable", isEditableValue ): JQuery;
    
    /** Get selectedIndex option of wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "selectedIndex") ;
    /** Set selectedIndex option to wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "selectedIndex", selectedIndexValue ): JQuery;
    
    /** Get selectedValue option of wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "selectedValue") ;
    /** Set selectedValue option to wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "selectedValue", selectedValueValue ): JQuery;
    
    /** Get inputTextInDropDownList option of wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "inputTextInDropDownList") ;
    /** Set inputTextInDropDownList option to wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "inputTextInDropDownList", inputTextInDropDownListValue ): JQuery;
    
    /** Get text option of wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "text") ;
    /** Set text option to wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "text", textValue ): JQuery;
    
    /** Get ensureDropDownOnBody option of wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "ensureDropDownOnBody") ;
    /** Set ensureDropDownOnBody option to wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "ensureDropDownOnBody", ensureDropDownOnBodyValue ): JQuery;
    
    /** Get selectElementWidthFix option of wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "selectElementWidthFix") ;
    /** Set selectElementWidthFix option to wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "selectElementWidthFix", selectElementWidthFixValue ): JQuery;
    
    /** Get listOptions option of wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "listOptions") ;
    /** Set listOptions option to wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "listOptions", listOptionsValue ): JQuery;
    
    /** Get adjustComboWidth option of wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "adjustComboWidth") ;
    /** Set adjustComboWidth option to wijcombobox widget */
    wijcombobox(methodName: "option", optionName: "adjustComboWidth", adjustComboWidthValue ): JQuery;
    
    /** Get select option(event) of wijcombobox widget */
    wijcombobox(methodName: "option", eventName: "select"): Function;
    /** Set select option(event) to wijcombobox widget */
    wijcombobox(methodName: "option", eventName: "select", selectEventValue: (e?, data?) => void): JQuery;
    
    /** Get open option(event) of wijcombobox widget */
    wijcombobox(methodName: "option", eventName: "open"): Function;
    /** Set open option(event) to wijcombobox widget */
    wijcombobox(methodName: "option", eventName: "open", openEventValue: (e?) => void): JQuery;
    
    /** Get close option(event) of wijcombobox widget */
    wijcombobox(methodName: "option", eventName: "close"): Function;
    /** Set close option(event) to wijcombobox widget */
    wijcombobox(methodName: "option", eventName: "close", closeEventValue: (e?) => void): JQuery;
    
    /** Get search option(event) of wijcombobox widget */
    wijcombobox(methodName: "option", eventName: "search"): Function;
    /** Set search option(event) to wijcombobox widget */
    wijcombobox(methodName: "option", eventName: "search", searchEventValue: (e?, data?) => void): JQuery;
    
    /** Get changed option(event) of wijcombobox widget */
    wijcombobox(methodName: "option", eventName: "changed"): Function;
    /** Set changed option(event) to wijcombobox widget */
    wijcombobox(methodName: "option", eventName: "changed", changedEventValue: (e?, data?) => void): JQuery;
    
    /** Get textChanged option(event) of wijcombobox widget */
    wijcombobox(methodName: "option", eventName: "textChanged"): Function;
    /** Set textChanged option(event) to wijcombobox widget */
    wijcombobox(methodName: "option", eventName: "textChanged", textChangedEventValue: (e?, data?) => void): JQuery;
    
    /** Get selectedIndexChanged option(event) of wijcombobox widget */
    wijcombobox(methodName: "option", eventName: "selectedIndexChanged"): Function;
    /** Set selectedIndexChanged option(event) to wijcombobox widget */
    wijcombobox(methodName: "option", eventName: "selectedIndexChanged", selectedIndexChangedEventValue: (e?, data?) => void): JQuery;
    
    /** Get selectedIndexChanging option(event) of wijcombobox widget */
    wijcombobox(methodName: "option", eventName: "selectedIndexChanging"): Function;
    /** Set selectedIndexChanging option(event) to wijcombobox widget */
    wijcombobox(methodName: "option", eventName: "selectedIndexChanging", selectedIndexChangingEventValue: (e?, data?) => void): JQuery;
    
    
}

/** Definitions of wijcompositechart widget */
interface JQuery {

    /** Initialize a wijcompositechart widget */
    wijcompositechart(): JQuery;
    /** Initialize a wijcompositechart widget with the given options */
    wijcompositechart(options: Object): JQuery;
    wijcompositechart(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijcompositechart widget */
    wijcompositechart(methodName: "option", optionName: string): any;
    /** Set options to wijcompositechart widget */
    wijcompositechart(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijcompositechart widget */
    wijcompositechart(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Remove the functionality completely. This will return the element back to its pre-init state. */
    wijcompositechart(methodName: "destroy") ;
    
    /** Returns the raphael element with the given type and index.
      * @param {string} type The type of the chart element.
      * @param {number} index The index of the element.
      * @param {number} seriesIndex The index of the series.
      * @returns {Raphael Element} Returns the specified raphael object.
      */
    wijcompositechart(methodName: "getElement", type: any, index: any, seriesIndex: any): RaphaelElement;
    
    /** Get stacked option of wijcompositechart widget */
    wijcompositechart(methodName: "option", optionName: "stacked") ;
    /** Set stacked option to wijcompositechart widget */
    wijcompositechart(methodName: "option", optionName: "stacked", stackedValue ): JQuery;
    
    /** Get clusterOverlap option of wijcompositechart widget */
    wijcompositechart(methodName: "option", optionName: "clusterOverlap") ;
    /** Set clusterOverlap option to wijcompositechart widget */
    wijcompositechart(methodName: "option", optionName: "clusterOverlap", clusterOverlapValue ): JQuery;
    
    /** Get clusterWidth option of wijcompositechart widget */
    wijcompositechart(methodName: "option", optionName: "clusterWidth") ;
    /** Set clusterWidth option to wijcompositechart widget */
    wijcompositechart(methodName: "option", optionName: "clusterWidth", clusterWidthValue ): JQuery;
    
    /** Get clusterRadius option of wijcompositechart widget */
    wijcompositechart(methodName: "option", optionName: "clusterRadius") ;
    /** Set clusterRadius option to wijcompositechart widget */
    wijcompositechart(methodName: "option", optionName: "clusterRadius", clusterRadiusValue ): JQuery;
    
    /** Get clusterSpacing option of wijcompositechart widget */
    wijcompositechart(methodName: "option", optionName: "clusterSpacing") ;
    /** Set clusterSpacing option to wijcompositechart widget */
    wijcompositechart(methodName: "option", optionName: "clusterSpacing", clusterSpacingValue ): JQuery;
    
    /** Get seriesList option of wijcompositechart widget */
    wijcompositechart(methodName: "option", optionName: "seriesList") ;
    /** Set seriesList option to wijcompositechart widget */
    wijcompositechart(methodName: "option", optionName: "seriesList", seriesListValue ): JQuery;
    
    /** Get animation option of wijcompositechart widget */
    wijcompositechart(methodName: "option", optionName: "animation") ;
    /** Set animation option to wijcompositechart widget */
    wijcompositechart(methodName: "option", optionName: "animation", animationValue ): JQuery;
    
    /** Get seriesTransition option of wijcompositechart widget */
    wijcompositechart(methodName: "option", optionName: "seriesTransition") ;
    /** Set seriesTransition option to wijcompositechart widget */
    wijcompositechart(methodName: "option", optionName: "seriesTransition", seriesTransitionValue ): JQuery;
    
    /** Get hole option of wijcompositechart widget */
    wijcompositechart(methodName: "option", optionName: "hole") ;
    /** Set hole option to wijcompositechart widget */
    wijcompositechart(methodName: "option", optionName: "hole", holeValue ): JQuery;
    
    /** Get maximumSize option of wijcompositechart widget */
    wijcompositechart(methodName: "option", optionName: "maximumSize") ;
    /** Set maximumSize option to wijcompositechart widget */
    wijcompositechart(methodName: "option", optionName: "maximumSize", maximumSizeValue ): JQuery;
    
    /** Get minimumSize option of wijcompositechart widget */
    wijcompositechart(methodName: "option", optionName: "minimumSize") ;
    /** Set minimumSize option to wijcompositechart widget */
    wijcompositechart(methodName: "option", optionName: "minimumSize", minimumSizeValue ): JQuery;
    
    /** Get sizingMethod option of wijcompositechart widget */
    wijcompositechart(methodName: "option", optionName: "sizingMethod") ;
    /** Set sizingMethod option to wijcompositechart widget */
    wijcompositechart(methodName: "option", optionName: "sizingMethod", sizingMethodValue ): JQuery;
    
    /** Get zoomOnHover option of wijcompositechart widget */
    wijcompositechart(methodName: "option", optionName: "zoomOnHover") ;
    /** Set zoomOnHover option to wijcompositechart widget */
    wijcompositechart(methodName: "option", optionName: "zoomOnHover", zoomOnHoverValue ): JQuery;
    
    /** Get mouseDown option(event) of wijcompositechart widget */
    wijcompositechart(methodName: "option", eventName: "mouseDown"): Function;
    /** Set mouseDown option(event) to wijcompositechart widget */
    wijcompositechart(methodName: "option", eventName: "mouseDown", mouseDownEventValue: (e?, data?) => void): JQuery;
    
    /** Get mouseUp option(event) of wijcompositechart widget */
    wijcompositechart(methodName: "option", eventName: "mouseUp"): Function;
    /** Set mouseUp option(event) to wijcompositechart widget */
    wijcompositechart(methodName: "option", eventName: "mouseUp", mouseUpEventValue: (e?, data?) => void): JQuery;
    
    /** Get mouseOver option(event) of wijcompositechart widget */
    wijcompositechart(methodName: "option", eventName: "mouseOver"): Function;
    /** Set mouseOver option(event) to wijcompositechart widget */
    wijcompositechart(methodName: "option", eventName: "mouseOver", mouseOverEventValue: (e?, data?) => void): JQuery;
    
    /** Get mouseOut option(event) of wijcompositechart widget */
    wijcompositechart(methodName: "option", eventName: "mouseOut"): Function;
    /** Set mouseOut option(event) to wijcompositechart widget */
    wijcompositechart(methodName: "option", eventName: "mouseOut", mouseOutEventValue: (e?, data?) => void): JQuery;
    
    /** Get mouseMove option(event) of wijcompositechart widget */
    wijcompositechart(methodName: "option", eventName: "mouseMove"): Function;
    /** Set mouseMove option(event) to wijcompositechart widget */
    wijcompositechart(methodName: "option", eventName: "mouseMove", mouseMoveEventValue: (e?, data?) => void): JQuery;
    
    /** Get click option(event) of wijcompositechart widget */
    wijcompositechart(methodName: "option", eventName: "click"): Function;
    /** Set click option(event) to wijcompositechart widget */
    wijcompositechart(methodName: "option", eventName: "click", clickEventValue: (e?, data?) => void): JQuery;
    
    
}

/** Definitions of wijdatepager widget */
interface JQuery {

    /** Initialize a wijdatepager widget */
    wijdatepager(): JQuery;
    /** Initialize a wijdatepager widget with the given options */
    wijdatepager(options: Object): JQuery;
    wijdatepager(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijdatepager widget */
    wijdatepager(methodName: "option", optionName: string): any;
    /** Set options to wijdatepager widget */
    wijdatepager(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijdatepager widget */
    wijdatepager(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Destroys the widget and resets the DOM element. */
    wijdatepager(methodName: "destroy") ;
    
    /** Refreshes the widget layout. */
    wijdatepager(methodName: "refresh") ;
    
    /** Redraws the widget layout. */
    wijdatepager(methodName: "invalidate") ;
    
    /** Selects the previous date.
      * @param {Object} ev The event of firing the select previous date.
      * @returns {bool}
      */
    wijdatepager(methodName: "goLeft", ev: any): boolean;
    
    /** Selects the next date. */
    wijdatepager(methodName: "goRight") ;
    
    /** Get wijCSS option of wijdatepager widget */
    wijdatepager(methodName: "option", optionName: "wijCSS") ;
    /** Set wijCSS option to wijdatepager widget */
    wijdatepager(methodName: "option", optionName: "wijCSS", wijCSSValue ): JQuery;
    
    /** Get culture option of wijdatepager widget */
    wijdatepager(methodName: "option", optionName: "culture") ;
    /** Set culture option to wijdatepager widget */
    wijdatepager(methodName: "option", optionName: "culture", cultureValue ): JQuery;
    
    /** Get cultureCalendar option of wijdatepager widget */
    wijdatepager(methodName: "option", optionName: "cultureCalendar") ;
    /** Set cultureCalendar option to wijdatepager widget */
    wijdatepager(methodName: "option", optionName: "cultureCalendar", cultureCalendarValue ): JQuery;
    
    /** Get localization option of wijdatepager widget */
    wijdatepager(methodName: "option", optionName: "localization") ;
    /** Set localization option to wijdatepager widget */
    wijdatepager(methodName: "option", optionName: "localization", localizationValue ): JQuery;
    
    /** Get firstDayOfWeek option of wijdatepager widget */
    wijdatepager(methodName: "option", optionName: "firstDayOfWeek") ;
    /** Set firstDayOfWeek option to wijdatepager widget */
    wijdatepager(methodName: "option", optionName: "firstDayOfWeek", firstDayOfWeekValue ): JQuery;
    
    /** Get maxDateGroup option of wijdatepager widget */
    wijdatepager(methodName: "option", optionName: "maxDateGroup") ;
    /** Set maxDateGroup option to wijdatepager widget */
    wijdatepager(methodName: "option", optionName: "maxDateGroup", maxDateGroupValue ): JQuery;
    
    /** Get selectedDate option of wijdatepager widget */
    wijdatepager(methodName: "option", optionName: "selectedDate") ;
    /** Set selectedDate option to wijdatepager widget */
    wijdatepager(methodName: "option", optionName: "selectedDate", selectedDateValue ): JQuery;
    
    /** Get viewType option of wijdatepager widget */
    wijdatepager(methodName: "option", optionName: "viewType") ;
    /** Set viewType option to wijdatepager widget */
    wijdatepager(methodName: "option", optionName: "viewType", viewTypeValue ): JQuery;
    
    /** Get customViewOptions option of wijdatepager widget */
    wijdatepager(methodName: "option", optionName: "customViewOptions") ;
    /** Set customViewOptions option to wijdatepager widget */
    wijdatepager(methodName: "option", optionName: "customViewOptions", customViewOptionsValue ): JQuery;
    
    /** Get nextTooltip option of wijdatepager widget */
    wijdatepager(methodName: "option", optionName: "nextTooltip") ;
    /** Set nextTooltip option to wijdatepager widget */
    wijdatepager(methodName: "option", optionName: "nextTooltip", nextTooltipValue ): JQuery;
    
    /** Get prevTooltip option of wijdatepager widget */
    wijdatepager(methodName: "option", optionName: "prevTooltip") ;
    /** Set prevTooltip option to wijdatepager widget */
    wijdatepager(methodName: "option", optionName: "prevTooltip", prevTooltipValue ): JQuery;
    
    /** Get selectedDateChanged option(event) of wijdatepager widget */
    wijdatepager(methodName: "option", eventName: "selectedDateChanged"): Function;
    /** Set selectedDateChanged option(event) to wijdatepager widget */
    wijdatepager(methodName: "option", eventName: "selectedDateChanged", selectedDateChangedEventValue: (e?, data?) => void): JQuery;
    
    
}

/** Definitions of JQueryUIDialog widget */
interface JQuery {

    /** Initialize a JQueryUIDialog widget */
    JQueryUIDialog(): JQuery;
    /** Initialize a JQueryUIDialog widget with the given options */
    JQueryUIDialog(options: Object): JQuery;
    JQueryUIDialog(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of JQueryUIDialog widget */
    JQueryUIDialog(methodName: "option", optionName: string): any;
    /** Set options to JQueryUIDialog widget */
    JQueryUIDialog(methodName: "option", optionValues: Object): any;
    /** Set specified option to JQueryUIDialog widget */
    JQueryUIDialog(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Returns a jQuery object containing the generated wrapper.
      * @returns {JQuery}
      */
    JQueryUIDialog(methodName: "widget"): JQuery;
    
    /** Closes the dialog. */
    JQueryUIDialog(methodName: "close") ;
    
    /** Whether the dialog is currently open. */
    JQueryUIDialog(methodName: "isOpen") ;
    
    /** Moves the dialog to the top of the dialog stack. */
    JQueryUIDialog(methodName: "moveToTop") ;
    
    /** Opens the dialog. */
    JQueryUIDialog(methodName: "open") ;
    
    
}

/** Definitions of wijdialog widget */
interface JQuery {

    /** Initialize a wijdialog widget */
    wijdialog(): JQuery;
    /** Initialize a wijdialog widget with the given options */
    wijdialog(options: Object): JQuery;
    wijdialog(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijdialog widget */
    wijdialog(methodName: "option", optionName: string): any;
    /** Set options to wijdialog widget */
    wijdialog(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijdialog widget */
    wijdialog(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Removes the wijdialog functionality completely. This returns the element to its pre-init state. */
    wijdialog(methodName: "destroy") ;
    
    /** The pin method prevents the wijdialog from being moved. */
    wijdialog(methodName: "pin") ;
    
    /** The refresh method refreshes the iframe content within the wijdialog. */
    wijdialog(methodName: "refresh") ;
    
    /** The toggle method expands or collapses the content of the wijdialog. */
    wijdialog(methodName: "toggle") ;
    
    /** The minimize method minimizes the wijdialog. */
    wijdialog(methodName: "minimize") ;
    
    /** The maximize method maximizes the wijdialog. */
    wijdialog(methodName: "maximize") ;
    
    /** The restore method restores the wijdialog to its normal size from either the minimized or the maximized state. */
    wijdialog(methodName: "restore") ;
    
    /** The getState method gets the state of the dialog widget.
      * @returns {string} Possible values are: minimized, maximized, and normal.
      */
    wijdialog(methodName: "getState") ;
    
    /** The reset method resets dialog properties such as width and height to their default values. */
    wijdialog(methodName: "reset") ;
    
    /** The open method opens an instance of the wijdialog. */
    wijdialog(methodName: "open") ;
    
    /** The close method closes the dialog widget. */
    wijdialog(methodName: "close") ;
    
    /** Get appendTo option of wijdialog widget */
    wijdialog(methodName: "option", optionName: "appendTo") ;
    /** Set appendTo option to wijdialog widget */
    wijdialog(methodName: "option", optionName: "appendTo", appendToValue ): JQuery;
    
    /** Get autoOpen option of wijdialog widget */
    wijdialog(methodName: "option", optionName: "autoOpen") ;
    /** Set autoOpen option to wijdialog widget */
    wijdialog(methodName: "option", optionName: "autoOpen", autoOpenValue ): JQuery;
    
    /** Get buttons option of wijdialog widget */
    wijdialog(methodName: "option", optionName: "buttons") ;
    /** Set buttons option to wijdialog widget */
    wijdialog(methodName: "option", optionName: "buttons", buttonsValue ): JQuery;
    
    /** Get closeOnEscape option of wijdialog widget */
    wijdialog(methodName: "option", optionName: "closeOnEscape") ;
    /** Set closeOnEscape option to wijdialog widget */
    wijdialog(methodName: "option", optionName: "closeOnEscape", closeOnEscapeValue ): JQuery;
    
    /** Get closeText option of wijdialog widget */
    wijdialog(methodName: "option", optionName: "closeText") ;
    /** Set closeText option to wijdialog widget */
    wijdialog(methodName: "option", optionName: "closeText", closeTextValue ): JQuery;
    
    /** Get dialogClass option of wijdialog widget */
    wijdialog(methodName: "option", optionName: "dialogClass") ;
    /** Set dialogClass option to wijdialog widget */
    wijdialog(methodName: "option", optionName: "dialogClass", dialogClassValue ): JQuery;
    
    /** Get draggable option of wijdialog widget */
    wijdialog(methodName: "option", optionName: "draggable") ;
    /** Set draggable option to wijdialog widget */
    wijdialog(methodName: "option", optionName: "draggable", draggableValue ): JQuery;
    
    /** Get height option of wijdialog widget */
    wijdialog(methodName: "option", optionName: "height") ;
    /** Set height option to wijdialog widget */
    wijdialog(methodName: "option", optionName: "height", heightValue ): JQuery;
    
    /** Get hide option of wijdialog widget */
    wijdialog(methodName: "option", optionName: "hide") ;
    /** Set hide option to wijdialog widget */
    wijdialog(methodName: "option", optionName: "hide", hideValue ): JQuery;
    
    /** Get maxHeight option of wijdialog widget */
    wijdialog(methodName: "option", optionName: "maxHeight") ;
    /** Set maxHeight option to wijdialog widget */
    wijdialog(methodName: "option", optionName: "maxHeight", maxHeightValue ): JQuery;
    
    /** Get maxWidth option of wijdialog widget */
    wijdialog(methodName: "option", optionName: "maxWidth") ;
    /** Set maxWidth option to wijdialog widget */
    wijdialog(methodName: "option", optionName: "maxWidth", maxWidthValue ): JQuery;
    
    /** Get minHeight option of wijdialog widget */
    wijdialog(methodName: "option", optionName: "minHeight") ;
    /** Set minHeight option to wijdialog widget */
    wijdialog(methodName: "option", optionName: "minHeight", minHeightValue ): JQuery;
    
    /** Get minWidth option of wijdialog widget */
    wijdialog(methodName: "option", optionName: "minWidth") ;
    /** Set minWidth option to wijdialog widget */
    wijdialog(methodName: "option", optionName: "minWidth", minWidthValue ): JQuery;
    
    /** Get modal option of wijdialog widget */
    wijdialog(methodName: "option", optionName: "modal") ;
    /** Set modal option to wijdialog widget */
    wijdialog(methodName: "option", optionName: "modal", modalValue ): JQuery;
    
    /** Get position option of wijdialog widget */
    wijdialog(methodName: "option", optionName: "position") ;
    /** Set position option to wijdialog widget */
    wijdialog(methodName: "option", optionName: "position", positionValue ): JQuery;
    
    /** Get resizable option of wijdialog widget */
    wijdialog(methodName: "option", optionName: "resizable") ;
    /** Set resizable option to wijdialog widget */
    wijdialog(methodName: "option", optionName: "resizable", resizableValue ): JQuery;
    
    /** Get show option of wijdialog widget */
    wijdialog(methodName: "option", optionName: "show") ;
    /** Set show option to wijdialog widget */
    wijdialog(methodName: "option", optionName: "show", showValue ): JQuery;
    
    /** Get title option of wijdialog widget */
    wijdialog(methodName: "option", optionName: "title") ;
    /** Set title option to wijdialog widget */
    wijdialog(methodName: "option", optionName: "title", titleValue ): JQuery;
    
    /** Get width option of wijdialog widget */
    wijdialog(methodName: "option", optionName: "width") ;
    /** Set width option to wijdialog widget */
    wijdialog(methodName: "option", optionName: "width", widthValue ): JQuery;
    
    /** Get stack option of wijdialog widget */
    wijdialog(methodName: "option", optionName: "stack") ;
    /** Set stack option to wijdialog widget */
    wijdialog(methodName: "option", optionName: "stack", stackValue ): JQuery;
    
    /** Get zIndex option of wijdialog widget */
    wijdialog(methodName: "option", optionName: "zIndex") ;
    /** Set zIndex option to wijdialog widget */
    wijdialog(methodName: "option", optionName: "zIndex", zIndexValue ): JQuery;
    
    /** Get captionButtons option of wijdialog widget */
    wijdialog(methodName: "option", optionName: "captionButtons") ;
    /** Set captionButtons option to wijdialog widget */
    wijdialog(methodName: "option", optionName: "captionButtons", captionButtonsValue ): JQuery;
    
    /** Get collapsingAnimation option of wijdialog widget */
    wijdialog(methodName: "option", optionName: "collapsingAnimation") ;
    /** Set collapsingAnimation option to wijdialog widget */
    wijdialog(methodName: "option", optionName: "collapsingAnimation", collapsingAnimationValue ): JQuery;
    
    /** Get expandingAnimation option of wijdialog widget */
    wijdialog(methodName: "option", optionName: "expandingAnimation") ;
    /** Set expandingAnimation option to wijdialog widget */
    wijdialog(methodName: "option", optionName: "expandingAnimation", expandingAnimationValue ): JQuery;
    
    /** Get contentUrl option of wijdialog widget */
    wijdialog(methodName: "option", optionName: "contentUrl") ;
    /** Set contentUrl option to wijdialog widget */
    wijdialog(methodName: "option", optionName: "contentUrl", contentUrlValue ): JQuery;
    
    /** Get minimizeZoneElementId option of wijdialog widget */
    wijdialog(methodName: "option", optionName: "minimizeZoneElementId") ;
    /** Set minimizeZoneElementId option to wijdialog widget */
    wijdialog(methodName: "option", optionName: "minimizeZoneElementId", minimizeZoneElementIdValue ): JQuery;
    
    /** Get beforeClose option(event) of wijdialog widget */
    wijdialog(methodName: "option", eventName: "beforeClose"): Function;
    /** Set beforeClose option(event) to wijdialog widget */
    wijdialog(methodName: "option", eventName: "beforeClose", beforeCloseEventValue: (e?) => void): JQuery;
    
    /** Get close option(event) of wijdialog widget */
    wijdialog(methodName: "option", eventName: "close"): Function;
    /** Set close option(event) to wijdialog widget */
    wijdialog(methodName: "option", eventName: "close", closeEventValue: (e?) => void): JQuery;
    
    /** Get create option(event) of wijdialog widget */
    wijdialog(methodName: "option", eventName: "create"): Function;
    /** Set create option(event) to wijdialog widget */
    wijdialog(methodName: "option", eventName: "create", createEventValue: (e?) => void): JQuery;
    
    /** Get drag option(event) of wijdialog widget */
    wijdialog(methodName: "option", eventName: "drag"): Function;
    /** Set drag option(event) to wijdialog widget */
    wijdialog(methodName: "option", eventName: "drag", dragEventValue: (e?) => void): JQuery;
    
    /** Get dragStart option(event) of wijdialog widget */
    wijdialog(methodName: "option", eventName: "dragStart"): Function;
    /** Set dragStart option(event) to wijdialog widget */
    wijdialog(methodName: "option", eventName: "dragStart", dragStartEventValue: (e?) => void): JQuery;
    
    /** Get dragStop option(event) of wijdialog widget */
    wijdialog(methodName: "option", eventName: "dragStop"): Function;
    /** Set dragStop option(event) to wijdialog widget */
    wijdialog(methodName: "option", eventName: "dragStop", dragStopEventValue: (e?) => void): JQuery;
    
    /** Get focus option(event) of wijdialog widget */
    wijdialog(methodName: "option", eventName: "focus"): Function;
    /** Set focus option(event) to wijdialog widget */
    wijdialog(methodName: "option", eventName: "focus", focusEventValue: (e?) => void): JQuery;
    
    /** Get open option(event) of wijdialog widget */
    wijdialog(methodName: "option", eventName: "open"): Function;
    /** Set open option(event) to wijdialog widget */
    wijdialog(methodName: "option", eventName: "open", openEventValue: (e?) => void): JQuery;
    
    /** Get resize option(event) of wijdialog widget */
    wijdialog(methodName: "option", eventName: "resize"): Function;
    /** Set resize option(event) to wijdialog widget */
    wijdialog(methodName: "option", eventName: "resize", resizeEventValue: (e?, ui?) => void): JQuery;
    
    /** Get resizeStart option(event) of wijdialog widget */
    wijdialog(methodName: "option", eventName: "resizeStart"): Function;
    /** Set resizeStart option(event) to wijdialog widget */
    wijdialog(methodName: "option", eventName: "resizeStart", resizeStartEventValue: (e?, ui?) => void): JQuery;
    
    /** Get resizeStop option(event) of wijdialog widget */
    wijdialog(methodName: "option", eventName: "resizeStop"): Function;
    /** Set resizeStop option(event) to wijdialog widget */
    wijdialog(methodName: "option", eventName: "resizeStop", resizeStopEventValue: (e?, ui?) => void): JQuery;
    
    /** Get buttonCreating option(event) of wijdialog widget */
    wijdialog(methodName: "option", eventName: "buttonCreating"): Function;
    /** Set buttonCreating option(event) to wijdialog widget */
    wijdialog(methodName: "option", eventName: "buttonCreating", buttonCreatingEventValue: (e?, data?) => void): JQuery;
    
    /** Get stateChanged option(event) of wijdialog widget */
    wijdialog(methodName: "option", eventName: "stateChanged"): Function;
    /** Set stateChanged option(event) to wijdialog widget */
    wijdialog(methodName: "option", eventName: "stateChanged", stateChangedEventValue: (e?, data?) => void): JQuery;
    
    /** Get blur option(event) of wijdialog widget */
    wijdialog(methodName: "option", eventName: "blur"): Function;
    /** Set blur option(event) to wijdialog widget */
    wijdialog(methodName: "option", eventName: "blur", blurEventValue: (e?, data?) => void): JQuery;
    
    
}

/** Definitions of wijdropdown widget */
interface JQuery {

    /** Initialize a wijdropdown widget */
    wijdropdown(): JQuery;
    /** Initialize a wijdropdown widget with the given options */
    wijdropdown(options: Object): JQuery;
    wijdropdown(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijdropdown widget */
    wijdropdown(methodName: "option", optionName: string): any;
    /** Set options to wijdropdown widget */
    wijdropdown(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijdropdown widget */
    wijdropdown(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Use the refresh method to set the drop-down element's style. */
    wijdropdown(methodName: "refresh") ;
    
    /** Remove the functionality completely. This will return the element back to its pre-init state. */
    wijdropdown(methodName: "destroy") ;
    
    /** Get zIndex option of wijdropdown widget */
    wijdropdown(methodName: "option", optionName: "zIndex") ;
    /** Set zIndex option to wijdropdown widget */
    wijdropdown(methodName: "option", optionName: "zIndex", zIndexValue ): JQuery;
    
    /** Get showingAnimation option of wijdropdown widget */
    wijdropdown(methodName: "option", optionName: "showingAnimation") ;
    /** Set showingAnimation option to wijdropdown widget */
    wijdropdown(methodName: "option", optionName: "showingAnimation", showingAnimationValue ): JQuery;
    
    /** Get hidingAnimation option of wijdropdown widget */
    wijdropdown(methodName: "option", optionName: "hidingAnimation") ;
    /** Set hidingAnimation option to wijdropdown widget */
    wijdropdown(methodName: "option", optionName: "hidingAnimation", hidingAnimationValue ): JQuery;
    
    /** Get ensureDropDownOnBody option of wijdropdown widget */
    wijdropdown(methodName: "option", optionName: "ensureDropDownOnBody") ;
    /** Set ensureDropDownOnBody option to wijdropdown widget */
    wijdropdown(methodName: "option", optionName: "ensureDropDownOnBody", ensureDropDownOnBodyValue ): JQuery;
    
    
}

/** Definitions of wijeditor widget */
interface JQuery {

    /** Initialize a wijeditor widget */
    wijeditor(): JQuery;
    /** Initialize a wijeditor widget with the given options */
    wijeditor(options: Object): JQuery;
    wijeditor(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijeditor widget */
    wijeditor(methodName: "option", optionName: string): any;
    /** Set options to wijeditor widget */
    wijeditor(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijeditor widget */
    wijeditor(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Remove the functionality completely. This will return the element back to its pre-init state. */
    wijeditor(methodName: "destroy") ;
    
    /** Adjust the editor layout. */
    wijeditor(methodName: "refresh") ;
    
    /** Gets the text displayed in the editor. */
    wijeditor(methodName: "getText") ;
    
    /** Sets the text to display in the editor.
      * @param {string} text The text to show in the editor.
      * @remarks
      * You can use the example code in a click function linked to a button, 
      * and replace any existing text in the editor with your text.
      */
    wijeditor(methodName: "setText", text: any) ;
    
    /** Get fullScreenContainerSelector option of wijeditor widget */
    wijeditor(methodName: "option", optionName: "fullScreenContainerSelector") ;
    /** Set fullScreenContainerSelector option to wijeditor widget */
    wijeditor(methodName: "option", optionName: "fullScreenContainerSelector", fullScreenContainerSelectorValue ): JQuery;
    
    /** Get compactRibbonMode option of wijeditor widget */
    wijeditor(methodName: "option", optionName: "compactRibbonMode") ;
    /** Set compactRibbonMode option to wijeditor widget */
    wijeditor(methodName: "option", optionName: "compactRibbonMode", compactRibbonModeValue ): JQuery;
    
    /** Get editorMode option of wijeditor widget */
    wijeditor(methodName: "option", optionName: "editorMode") ;
    /** Set editorMode option to wijeditor widget */
    wijeditor(methodName: "option", optionName: "editorMode", editorModeValue ): JQuery;
    
    /** Get fullScreenMode option of wijeditor widget */
    wijeditor(methodName: "option", optionName: "fullScreenMode") ;
    /** Set fullScreenMode option to wijeditor widget */
    wijeditor(methodName: "option", optionName: "fullScreenMode", fullScreenModeValue ): JQuery;
    
    /** Get fontSizes option of wijeditor widget */
    wijeditor(methodName: "option", optionName: "fontSizes") ;
    /** Set fontSizes option to wijeditor widget */
    wijeditor(methodName: "option", optionName: "fontSizes", fontSizesValue ): JQuery;
    
    /** Get fontNames option of wijeditor widget */
    wijeditor(methodName: "option", optionName: "fontNames") ;
    /** Set fontNames option to wijeditor widget */
    wijeditor(methodName: "option", optionName: "fontNames", fontNamesValue ): JQuery;
    
    /** Get showPathSelector option of wijeditor widget */
    wijeditor(methodName: "option", optionName: "showPathSelector") ;
    /** Set showPathSelector option to wijeditor widget */
    wijeditor(methodName: "option", optionName: "showPathSelector", showPathSelectorValue ): JQuery;
    
    /** Get mode option of wijeditor widget */
    wijeditor(methodName: "option", optionName: "mode") ;
    /** Set mode option to wijeditor widget */
    wijeditor(methodName: "option", optionName: "mode", modeValue ): JQuery;
    
    /** Get simpleModeCommands option of wijeditor widget */
    wijeditor(methodName: "option", optionName: "simpleModeCommands") ;
    /** Set simpleModeCommands option to wijeditor widget */
    wijeditor(methodName: "option", optionName: "simpleModeCommands", simpleModeCommandsValue ): JQuery;
    
    /** Get showFooter option of wijeditor widget */
    wijeditor(methodName: "option", optionName: "showFooter") ;
    /** Set showFooter option to wijeditor widget */
    wijeditor(methodName: "option", optionName: "showFooter", showFooterValue ): JQuery;
    
    /** Get customContextMenu option of wijeditor widget */
    wijeditor(methodName: "option", optionName: "customContextMenu") ;
    /** Set customContextMenu option to wijeditor widget */
    wijeditor(methodName: "option", optionName: "customContextMenu", customContextMenuValue ): JQuery;
    
    /** Get text option of wijeditor widget */
    wijeditor(methodName: "option", optionName: "text") ;
    /** Set text option to wijeditor widget */
    wijeditor(methodName: "option", optionName: "text", textValue ): JQuery;
    
    /** Get localization option of wijeditor widget */
    wijeditor(methodName: "option", optionName: "localization") ;
    /** Set localization option to wijeditor widget */
    wijeditor(methodName: "option", optionName: "localization", localizationValue ): JQuery;
    
    /** Get readOnly option of wijeditor widget */
    wijeditor(methodName: "option", optionName: "readOnly") ;
    /** Set readOnly option to wijeditor widget */
    wijeditor(methodName: "option", optionName: "readOnly", readOnlyValue ): JQuery;
    
    /** Get commandButtonClick option(event) of wijeditor widget */
    wijeditor(methodName: "option", eventName: "commandButtonClick"): Function;
    /** Set commandButtonClick option(event) to wijeditor widget */
    wijeditor(methodName: "option", eventName: "commandButtonClick", commandButtonClickEventValue: (e?, data?) => void): JQuery;
    
    /** Get textChanged option(event) of wijeditor widget */
    wijeditor(methodName: "option", eventName: "textChanged"): Function;
    /** Set textChanged option(event) to wijeditor widget */
    wijeditor(methodName: "option", eventName: "textChanged", textChangedEventValue: (e?, data?) => void): JQuery;
    
    
}

/** Definitions of wijevcal widget */
interface JQuery {

    /** Initialize a wijevcal widget */
    wijevcal(): JQuery;
    /** Initialize a wijevcal widget with the given options */
    wijevcal(options: Object): JQuery;
    wijevcal(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijevcal widget */
    wijevcal(methodName: "option", optionName: string): any;
    /** Set options to wijevcal widget */
    wijevcal(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijevcal widget */
    wijevcal(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Get the localized string by key
      * @param {string} key The key of the localized string.
      * @param {string} defaultValue The default value of the localized string.
      * @returns {string} The localized string.
      */
    wijevcal(methodName: "localizeString", key: any, defaultValue: any) ;
    
    /** hide the loading label */
    wijevcal(methodName: "hideLoadingLabel") ;
    
    /** Removes the wijevcal functionality completely. This returns the element to its pre-init state. */
    wijevcal(methodName: "destroy") ;
    
    /** Exports the EventsCalendar in a graphic format. 
      * The export method only works when wijmo.exporter.eventscalendarExport's reference is on the page.
      * @param {string|Object} exportSettings 1.The name of the exported file.
      * 2.Settings of exporting, should be conformed to wijmo.exporter.IEventsCalendarExportSettings
      * @param {?string} type The type of the exported file.
      * @param {?string} serviceUrl The export service url.
      * @param {?string} pdfSettings The setting of pdf.
      * @param {?string} exportMethod with different mode,
      * 1. "Content" Sending EventsCalendar markup to the service for exporting.
      * 2. "Options" Sending EventsCalendar widget options to the service for exporting.
      * @remarks
      * Default exported file type is png, possible types are: jpg, png, gif, bmp, tiff, pdf.
      * @example
      * $("#evcal").wijevcal("exportEventsCalendar", "eventscalendar", "png");
      */
    wijevcal(methodName: "exportEventsCalendar", exportSettings: any, type?: any, serviceUrl?: any, pdfSettings?: any, exportMethod?: any) ;
    
    /** Deletes the existing calendar from the current data source.
      * @param {object} o Calendar id, name or calendar object.
      * @param {function} successCallback Function that will be called when calendar is deleted.
      * @param {function} errorCallback Function that will be called when calendar can not be deleted.(e.g. due to data source or memory problems).
      * @returns {bool}
      * @example
      * $("#wijevcal").wijevcal("deleteCalendar", "My calendar");
      */
    wijevcal(methodName: "deleteCalendar", o: any, successCallback: Function, errorCallback: Function): boolean;
    
    /** Adds a new calendar.
      * @param {object} o Calendar object.
      * Calendar object fields:
      * id - String, unique calendar id, this field generated automatically;
      * name - String, calendar name;
      * location - String, location field;
      * description - String, calendar description;
      * color - String, calendar color;
      * tag - String, this field can be used to store custom information.
      * @param {function} successCallback Function that will be called when calendar is added.
      * @param {function} errorCallback Function that will be called when calendar can not be added.(e.g. due to data source or memory problems).
      * @returns {bool}
      * @example
      * $("#wijevcal").wijevcal("addCalendar", { 
      * name: "My calendar", 
      * location: "Home", 
      * description: "Some description",
      * color: "lime" 
      * });
      */
    wijevcal(methodName: "addCalendar", o: any, successCallback: Function, errorCallback: Function): boolean;
    
    /** Updates the existing calendar.
      * @param {object} o Calendar object.
      * Calendar object fields:
      * id - String, unique calendar id, this field generated automatically;
      * name - String, calendar name;
      * location - String, location field;
      * description - String, calendar description;
      * color - String, calendar color;
      * tag - String, this field can be used to store custom information.
      * @param {function} successCallback Function that will be called when calendar is updated.
      * @param {function} errorCallback Function that will be called when calendar can not be updated.(e.g. due to data source or memory problems).
      * @returns {bool}
      * @example
      * $("#wijevcal").wijevcal("updateCalendar", { 
      * name: "My calendar", 
      * location: "Home", 
      * description: "Some description",
      * color: "lime" 
      * });
      */
    wijevcal(methodName: "updateCalendar", o: any, successCallback: Function, errorCallback: Function): boolean;
    
    /** Adds a new event.
      * @param {object} o Event object.
      * Event object fields:
      * id - String, unique event id, this field generated automatically;
      * calendar - String, calendar id to which the event belongs;
      * subject - String, event title;
      * location - String, event location;
      * start - Date, start date/time;
      * end - Date, end date/time;
      * description - String, event description;
      * color - String, event color;
      * allday - Boolean, indicates all day event
      * tag - String, this field can be used to store custom information.
      * @param {function} successCallback Function that will be called when event is added.
      * @param {function} errorCallback Function that will be called when event can not be added.(e.g. due to data source or memory problems).
      * @returns {bool}
      * @example
      * $("#wijevcal").wijevcal("addEvent", { 
      *       start: new Date(2011, 4, 2, 0, 32), 
      *       end: new Date(2011, 4, 2, 0, 50), 
      *       subject: "Subject" });
      */
    wijevcal(methodName: "addEvent", o: any, successCallback: Function, errorCallback: Function): boolean;
    
    /** Updates the existing event.
      * @param {object} o Event object.
      * Event object fields:
      * id - String, unique event id, this field generated automatically;
      * calendar - String, calendar id to which the event belongs;
      * subject - String, event title;
      * location - String, event location;
      * start - Date, start date/time;
      * end - Date, end date/time;
      * description - String, event description;
      * color - String, event color;
      * allday - Boolean, indicates all day event
      * tag - String, this field can be used to store custom information.
      * @param {function} successCallback Function that will be called when event is updated.
      * @param {function} errorCallback Function that will be called when event can not be updated.(e.g. due to data source or memory problems).
      * @returns {bool}
      * @example
      * $("#wijevcal").wijevcal("updateEvent", { 
      *       start: new Date(2011, 4, 2, 0, 32), 
      *       end: new Date(2011, 4, 2, 0, 50), 
      *       subject: "Subject" });
      */
    wijevcal(methodName: "updateEvent", o: any, successCallback?: Function, errorCallback?: Function): boolean;
    
    /** Retrieves the array which contains 
      * the full list of Event objects in the specified time interval. 
      * Note, this method will create instances of the Event
      * object for recurring events.
      * @param {Date} start The Date value which specifies 
      * the start date and time of the interval.
      * @param {Date} end The Date value which specifies 
      * the end date and time of the interval.
      * @returns {array} events array
      */
    wijevcal(methodName: "getOccurrences", start?: Date, end?: Date): any[];
    
    /** Deletes the event.
      * @param {number} id Event object or event id.
      * @param {function} successCallback Function that will be called when event is deleted.
      * @param {function} errorCallback Function that will be called when event can not be deleted.(e.g. due to data source or memory problems).
      * @returns {bool}
      * @example
      * $("#wijevcal").wijevcal("deleteEvent", eventId);
      */
    wijevcal(methodName: "deleteEvent", id: any, successCallback: Function, errorCallback: Function): boolean;
    
    /** Use beginUpdate and endUpdate when making a large number of changes 
      * to widget options.
      * @example
      * $("#wijevcal").wijevcal("beginUpdate");
      * $("#wijevcal").wijevcal("option", "timeInterval", 10);
      *   $("#wijevcal").wijevcal("option", "timeRulerInterval", 20);
      * $("#wijevcal").wijevcal("endUpdate");
      */
    wijevcal(methodName: "beginUpdate") ;
    
    /** Use beginUpdate and endUpdate when making a large number of changes 
      * to widget options.
      * @example
      * $("#wijevcal").wijevcal("beginUpdate");
      * $("#wijevcal").wijevcal("option", "timeInterval", 10);
      * $("#wijevcal").wijevcal("option", "timeRulerInterval", 20);
      * $("#wijevcal").wijevcal("endUpdate");
      */
    wijevcal(methodName: "endUpdate") ;
    
    /** Navigates to the event given by the parameter id.
      * @param {object} id Event object or event id.
      * @example
      * $("#wijevcal").wijevcal("goToEvent", 
      *   "apptid_dynid1ts1320322142549");
      */
    wijevcal(methodName: "goToEvent", id: any) ;
    
    /** Tests to see if event duration is more or equals to one day.
      * @param {object} id Event object or event id.
      * @returns {bool} if event duration is more or equals to one day, return true
      * @example
      * var isAllDay = $("#wijevcal").wijevcal("isAllDayEvent", 
      *   "apptid_dynid1ts1320322142549");
      */
    wijevcal(methodName: "isAllDayEvent", id: any): boolean;
    
    /** Navigates to the date given by parameter dt.
      * @param {Date} dt Javascript date.
      * @example
      * $("#wijevcal").wijevcal("goToDate", new Date());
      */
    wijevcal(methodName: "goToDate", dt: Date) ;
    
    /** Scrolls view to time given by parameter time.
      * @param {Date} time Javascript date.
      * @example
      * $("#wijevcal").wijevcal("goToTime", new Date());
      */
    wijevcal(methodName: "goToTime", time: Date) ;
    
    /** Navigates to today's date.
      * @example
      * $("#wijevcal").wijevcal("goToday");
      */
    wijevcal(methodName: "goToday") ;
    
    /** Navigates to the previous date.
      * @example
      * $("#wijevcal").wijevcal("goLeft");
      */
    wijevcal(methodName: "goLeft") ;
    
    /** Navigates to the next date.
      * @example
      * $("#wijevcal").wijevcal("goRight");
      */
    wijevcal(methodName: "goRight") ;
    
    /** Invalidates the entire surface of the control 
      * and causes the control to be redrawn.
      */
    wijevcal(methodName: "refresh") ;
    
    /** Invalidates the entire surface of the control 
      * and causes the control to be redrawn.
      */
    wijevcal(methodName: "invalidate") ;
    
    /** Call this method in order to display built-in "edit calendar" dialog box.
      * @param {object} calendar Calendar object or calendar name.
      * Calendar object fields:
      * id - String, unique calendar id, this field generated automatically;
      * name - String, calendar name;
      * location - String, location field;
      * description - String, calendar description;
      * color - String, calendar color;
      * tag - String, this field can be used to store custom information.
      * @example
      * Display dialog for a new calendar:
      * $("#wijevcal").wijevcal("showEditCalendarDialog", null);
      */
    wijevcal(methodName: "showEditCalendarDialog", calendar: any) ;
    
    /** Call this method in order to display built-in "edit event" dialog box.
      * @param {object} calendar Event object.
      * Event object fields:
      * id - String, unique event id, this field generated automatically;
      * calendar - String, calendar id to which the event belongs;
      * subject - String, event title;
      * location - String, event location;
      * start - Date, start date/time;
      * end - Date, end date/time;
      * description - String, event description;
      * color - String, event color;
      * allday - Boolean, indicates all day event
      * tag - String, this field can be used to store custom information.
      * @param {object} offsetElement Optional. 
      * DOM element which will be used to calculate dialog position.
      * @example
      * Display dialog for a new event:
      * $("#wijevcal").wijevcal("showEditEventDialog", null);
      */
    wijevcal(methodName: "showEditEventDialog", calendar: any, offsetElement: any) ;
    
    /** Find event object by id
      * @param id
      * @returns {object} events data.
      */
    wijevcal(methodName: "findEventById", id: any) ;
    
    /** Sends a log message to built-in log console. 
      * Note: n order to use this method, you must set the enableLogs option to true.
      * @param {string} msg Log message.
      * @param {string} className Optional. CSS class name that will be applied to the destination message.
      * Few predefined classes are available: 
      * "error", "warning", "information", "status"
      */
    wijevcal(methodName: "log", msg: any, className?: any) ;
    
    /** Changes status label text.
      * @param {string} txt The new status text.
      */
    wijevcal(methodName: "status", txt: any) ;
    
    /** Get culture option of wijevcal widget */
    wijevcal(methodName: "option", optionName: "culture") ;
    /** Set culture option to wijevcal widget */
    wijevcal(methodName: "option", optionName: "culture", cultureValue ): JQuery;
    
    /** Get cultureCalendar option of wijevcal widget */
    wijevcal(methodName: "option", optionName: "cultureCalendar") ;
    /** Set cultureCalendar option to wijevcal widget */
    wijevcal(methodName: "option", optionName: "cultureCalendar", cultureCalendarValue ): JQuery;
    
    /** Get localization option of wijevcal widget */
    wijevcal(methodName: "option", optionName: "localization") ;
    /** Set localization option to wijevcal widget */
    wijevcal(methodName: "option", optionName: "localization", localizationValue ): JQuery;
    
    /** Get readOnly option of wijevcal widget */
    wijevcal(methodName: "option", optionName: "readOnly") ;
    /** Set readOnly option to wijevcal widget */
    wijevcal(methodName: "option", optionName: "readOnly", readOnlyValue ): JQuery;
    
    /** Get webServiceUrl option of wijevcal widget */
    wijevcal(methodName: "option", optionName: "webServiceUrl") ;
    /** Set webServiceUrl option to wijevcal widget */
    wijevcal(methodName: "option", optionName: "webServiceUrl", webServiceUrlValue ): JQuery;
    
    /** Get colors option of wijevcal widget */
    wijevcal(methodName: "option", optionName: "colors") ;
    /** Set colors option to wijevcal widget */
    wijevcal(methodName: "option", optionName: "colors", colorsValue ): JQuery;
    
    /** Get dataStorage option of wijevcal widget */
    wijevcal(methodName: "option", optionName: "dataStorage") ;
    /** Set dataStorage option to wijevcal widget */
    wijevcal(methodName: "option", optionName: "dataStorage", dataStorageValue ): JQuery;
    
    /** Get dataSource option of wijevcal widget */
    wijevcal(methodName: "option", optionName: "dataSource") ;
    /** Set dataSource option to wijevcal widget */
    wijevcal(methodName: "option", optionName: "dataSource", dataSourceValue ): JQuery;
    
    /** Get eventsData option of wijevcal widget */
    wijevcal(methodName: "option", optionName: "eventsData") ;
    /** Set eventsData option to wijevcal widget */
    wijevcal(methodName: "option", optionName: "eventsData", eventsDataValue ): JQuery;
    
    /** Get appointments option of wijevcal widget */
    wijevcal(methodName: "option", optionName: "appointments") ;
    /** Set appointments option to wijevcal widget */
    wijevcal(methodName: "option", optionName: "appointments", appointmentsValue ): JQuery;
    
    /** Get calendars option of wijevcal widget */
    wijevcal(methodName: "option", optionName: "calendars") ;
    /** Set calendars option to wijevcal widget */
    wijevcal(methodName: "option", optionName: "calendars", calendarsValue ): JQuery;
    
    /** Get disabled option of wijevcal widget */
    wijevcal(methodName: "option", optionName: "disabled") ;
    /** Set disabled option to wijevcal widget */
    wijevcal(methodName: "option", optionName: "disabled", disabledValue ): JQuery;
    
    /** Get editCalendarTemplate option of wijevcal widget */
    wijevcal(methodName: "option", optionName: "editCalendarTemplate") ;
    /** Set editCalendarTemplate option to wijevcal widget */
    wijevcal(methodName: "option", optionName: "editCalendarTemplate", editCalendarTemplateValue ): JQuery;
    
    /** Get enableLogs option of wijevcal widget */
    wijevcal(methodName: "option", optionName: "enableLogs") ;
    /** Set enableLogs option to wijevcal widget */
    wijevcal(methodName: "option", optionName: "enableLogs", enableLogsValue ): JQuery;
    
    /** Get eventTitleFormat option of wijevcal widget */
    wijevcal(methodName: "option", optionName: "eventTitleFormat") ;
    /** Set eventTitleFormat option to wijevcal widget */
    wijevcal(methodName: "option", optionName: "eventTitleFormat", eventTitleFormatValue ): JQuery;
    
    /** Get titleFormat option of wijevcal widget */
    wijevcal(methodName: "option", optionName: "titleFormat") ;
    /** Set titleFormat option to wijevcal widget */
    wijevcal(methodName: "option", optionName: "titleFormat", titleFormatValue ): JQuery;
    
    /** Get firstDayOfWeek option of wijevcal widget */
    wijevcal(methodName: "option", optionName: "firstDayOfWeek") ;
    /** Set firstDayOfWeek option to wijevcal widget */
    wijevcal(methodName: "option", optionName: "firstDayOfWeek", firstDayOfWeekValue ): JQuery;
    
    /** Get headerBarVisible option of wijevcal widget */
    wijevcal(methodName: "option", optionName: "headerBarVisible") ;
    /** Set headerBarVisible option to wijevcal widget */
    wijevcal(methodName: "option", optionName: "headerBarVisible", headerBarVisibleValue ): JQuery;
    
    /** Get navigationBarVisible option of wijevcal widget */
    wijevcal(methodName: "option", optionName: "navigationBarVisible") ;
    /** Set navigationBarVisible option to wijevcal widget */
    wijevcal(methodName: "option", optionName: "navigationBarVisible", navigationBarVisibleValue ): JQuery;
    
    /** Get rightPaneVisible option of wijevcal widget */
    wijevcal(methodName: "option", optionName: "rightPaneVisible") ;
    /** Set rightPaneVisible option to wijevcal widget */
    wijevcal(methodName: "option", optionName: "rightPaneVisible", rightPaneVisibleValue ): JQuery;
    
    /** Get selectedDate option of wijevcal widget */
    wijevcal(methodName: "option", optionName: "selectedDate") ;
    /** Set selectedDate option to wijevcal widget */
    wijevcal(methodName: "option", optionName: "selectedDate", selectedDateValue ): JQuery;
    
    /** Get selectedDates option of wijevcal widget */
    wijevcal(methodName: "option", optionName: "selectedDates") ;
    /** Set selectedDates option to wijevcal widget */
    wijevcal(methodName: "option", optionName: "selectedDates", selectedDatesValue ): JQuery;
    
    /** Get statusBarVisible option of wijevcal widget */
    wijevcal(methodName: "option", optionName: "statusBarVisible") ;
    /** Set statusBarVisible option to wijevcal widget */
    wijevcal(methodName: "option", optionName: "statusBarVisible", statusBarVisibleValue ): JQuery;
    
    /** Get timeInterval option of wijevcal widget */
    wijevcal(methodName: "option", optionName: "timeInterval") ;
    /** Set timeInterval option to wijevcal widget */
    wijevcal(methodName: "option", optionName: "timeInterval", timeIntervalValue ): JQuery;
    
    /** Get timeIntervalHeight option of wijevcal widget */
    wijevcal(methodName: "option", optionName: "timeIntervalHeight") ;
    /** Set timeIntervalHeight option to wijevcal widget */
    wijevcal(methodName: "option", optionName: "timeIntervalHeight", timeIntervalHeightValue ): JQuery;
    
    /** Get timeRulerInterval option of wijevcal widget */
    wijevcal(methodName: "option", optionName: "timeRulerInterval") ;
    /** Set timeRulerInterval option to wijevcal widget */
    wijevcal(methodName: "option", optionName: "timeRulerInterval", timeRulerIntervalValue ): JQuery;
    
    /** Get timeRulerFormat option of wijevcal widget */
    wijevcal(methodName: "option", optionName: "timeRulerFormat") ;
    /** Set timeRulerFormat option to wijevcal widget */
    wijevcal(methodName: "option", optionName: "timeRulerFormat", timeRulerFormatValue ): JQuery;
    
    /** Get dayHeaderFormat option of wijevcal widget */
    wijevcal(methodName: "option", optionName: "dayHeaderFormat") ;
    /** Set dayHeaderFormat option to wijevcal widget */
    wijevcal(methodName: "option", optionName: "dayHeaderFormat", dayHeaderFormatValue ): JQuery;
    
    /** Get firstRowDayHeaderFormat option of wijevcal widget */
    wijevcal(methodName: "option", optionName: "firstRowDayHeaderFormat") ;
    /** Set firstRowDayHeaderFormat option to wijevcal widget */
    wijevcal(methodName: "option", optionName: "firstRowDayHeaderFormat", firstRowDayHeaderFormatValue ): JQuery;
    
    /** Get dayViewHeaderFormat option of wijevcal widget */
    wijevcal(methodName: "option", optionName: "dayViewHeaderFormat") ;
    /** Set dayViewHeaderFormat option to wijevcal widget */
    wijevcal(methodName: "option", optionName: "dayViewHeaderFormat", dayViewHeaderFormatValue ): JQuery;
    
    /** Get viewType option of wijevcal widget */
    wijevcal(methodName: "option", optionName: "viewType") ;
    /** Set viewType option to wijevcal widget */
    wijevcal(methodName: "option", optionName: "viewType", viewTypeValue ): JQuery;
    
    /** Get views option of wijevcal widget */
    wijevcal(methodName: "option", optionName: "views") ;
    /** Set views option to wijevcal widget */
    wijevcal(methodName: "option", optionName: "views", viewsValue ): JQuery;
    
    /** Get ensureEventDialogOnBody option of wijevcal widget */
    wijevcal(methodName: "option", optionName: "ensureEventDialogOnBody") ;
    /** Set ensureEventDialogOnBody option to wijevcal widget */
    wijevcal(methodName: "option", optionName: "ensureEventDialogOnBody", ensureEventDialogOnBodyValue ): JQuery;
    
    /** Get visibleCalendars option of wijevcal widget */
    wijevcal(methodName: "option", optionName: "visibleCalendars") ;
    /** Set visibleCalendars option to wijevcal widget */
    wijevcal(methodName: "option", optionName: "visibleCalendars", visibleCalendarsValue ): JQuery;
    
    /** Get calendar option of wijevcal widget */
    wijevcal(methodName: "option", optionName: "calendar") ;
    /** Set calendar option to wijevcal widget */
    wijevcal(methodName: "option", optionName: "calendar", calendarValue ): JQuery;
    
    /** Get calendarsChanged option(event) of wijevcal widget */
    wijevcal(methodName: "option", eventName: "calendarsChanged"): Function;
    /** Set calendarsChanged option(event) to wijevcal widget */
    wijevcal(methodName: "option", eventName: "calendarsChanged", calendarsChangedEventValue: (e?, data?) => void): JQuery;
    
    /** Get initialized option(event) of wijevcal widget */
    wijevcal(methodName: "option", eventName: "initialized"): Function;
    /** Set initialized option(event) to wijevcal widget */
    wijevcal(methodName: "option", eventName: "initialized", initializedEventValue: (e?) => void): JQuery;
    
    /** Get selectedDatesChanged option(event) of wijevcal widget */
    wijevcal(methodName: "option", eventName: "selectedDatesChanged"): Function;
    /** Set selectedDatesChanged option(event) to wijevcal widget */
    wijevcal(methodName: "option", eventName: "selectedDatesChanged", selectedDatesChangedEventValue: (e?, data?) => void): JQuery;
    
    /** Get viewTypeChanged option(event) of wijevcal widget */
    wijevcal(methodName: "option", eventName: "viewTypeChanged"): Function;
    /** Set viewTypeChanged option(event) to wijevcal widget */
    wijevcal(methodName: "option", eventName: "viewTypeChanged", viewTypeChangedEventValue: (viewType?) => void): JQuery;
    
    /** Get eventCreating option(event) of wijevcal widget */
    wijevcal(methodName: "option", eventName: "eventCreating"): Function;
    /** Set eventCreating option(event) to wijevcal widget */
    wijevcal(methodName: "option", eventName: "eventCreating", eventCreatingEventValue: (data?, eventTemplate?) => void): JQuery;
    
    /** Get beforeEditEventDialogShow option(event) of wijevcal widget */
    wijevcal(methodName: "option", eventName: "beforeEditEventDialogShow"): Function;
    /** Set beforeEditEventDialogShow option(event) to wijevcal widget */
    wijevcal(methodName: "option", eventName: "beforeEditEventDialogShow", beforeEditEventDialogShowEventValue: (e?, data?) => void): JQuery;
    
    /** Get beforeAddEvent option(event) of wijevcal widget */
    wijevcal(methodName: "option", eventName: "beforeAddEvent"): Function;
    /** Set beforeAddEvent option(event) to wijevcal widget */
    wijevcal(methodName: "option", eventName: "beforeAddEvent", beforeAddEventEventValue: (e?, data?) => void): JQuery;
    
    /** Get beforeUpdateEvent option(event) of wijevcal widget */
    wijevcal(methodName: "option", eventName: "beforeUpdateEvent"): Function;
    /** Set beforeUpdateEvent option(event) to wijevcal widget */
    wijevcal(methodName: "option", eventName: "beforeUpdateEvent", beforeUpdateEventEventValue: (e?, data?) => void): JQuery;
    
    /** Get beforeDeleteEvent option(event) of wijevcal widget */
    wijevcal(methodName: "option", eventName: "beforeDeleteEvent"): Function;
    /** Set beforeDeleteEvent option(event) to wijevcal widget */
    wijevcal(methodName: "option", eventName: "beforeDeleteEvent", beforeDeleteEventEventValue: (e?, data?) => void): JQuery;
    
    /** Get beforeAddCalendar option(event) of wijevcal widget */
    wijevcal(methodName: "option", eventName: "beforeAddCalendar"): Function;
    /** Set beforeAddCalendar option(event) to wijevcal widget */
    wijevcal(methodName: "option", eventName: "beforeAddCalendar", beforeAddCalendarEventValue: (e?, data?) => void): JQuery;
    
    /** Get beforeUpdateCalendar option(event) of wijevcal widget */
    wijevcal(methodName: "option", eventName: "beforeUpdateCalendar"): Function;
    /** Set beforeUpdateCalendar option(event) to wijevcal widget */
    wijevcal(methodName: "option", eventName: "beforeUpdateCalendar", beforeUpdateCalendarEventValue: (e?, data?) => void): JQuery;
    
    /** Get beforeDeleteCalendar option(event) of wijevcal widget */
    wijevcal(methodName: "option", eventName: "beforeDeleteCalendar"): Function;
    /** Set beforeDeleteCalendar option(event) to wijevcal widget */
    wijevcal(methodName: "option", eventName: "beforeDeleteCalendar", beforeDeleteCalendarEventValue: (e?, data?) => void): JQuery;
    
    /** Get eventsDataChanged option(event) of wijevcal widget */
    wijevcal(methodName: "option", eventName: "eventsDataChanged"): Function;
    /** Set eventsDataChanged option(event) to wijevcal widget */
    wijevcal(methodName: "option", eventName: "eventsDataChanged", eventsDataChangedEventValue: (e?, data?) => void): JQuery;
    
    
}

/** Definitions of wijexpander widget */
interface JQuery {

    /** Initialize a wijexpander widget */
    wijexpander(): JQuery;
    /** Initialize a wijexpander widget with the given options */
    wijexpander(options: Object): JQuery;
    wijexpander(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijexpander widget */
    wijexpander(methodName: "option", optionName: string): any;
    /** Set options to wijexpander widget */
    wijexpander(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijexpander widget */
    wijexpander(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Removes the wijexpander functionality completely. This returns the element to its pre-init state. */
    wijexpander(methodName: "destroy") ;
    
    /** Collapses the content panel.
      * @returns {bool}
      */
    wijexpander(methodName: "collapse"): boolean;
    
    /** Expands the content panel.
      * @returns {bool}
      */
    wijexpander(methodName: "expand"): boolean;
    
    /** Get allowExpand option of wijexpander widget */
    wijexpander(methodName: "option", optionName: "allowExpand") ;
    /** Set allowExpand option to wijexpander widget */
    wijexpander(methodName: "option", optionName: "allowExpand", allowExpandValue ): JQuery;
    
    /** Get animated option of wijexpander widget */
    wijexpander(methodName: "option", optionName: "animated") ;
    /** Set animated option to wijexpander widget */
    wijexpander(methodName: "option", optionName: "animated", animatedValue ): JQuery;
    
    /** Get contentUrl option of wijexpander widget */
    wijexpander(methodName: "option", optionName: "contentUrl") ;
    /** Set contentUrl option to wijexpander widget */
    wijexpander(methodName: "option", optionName: "contentUrl", contentUrlValue ): JQuery;
    
    /** Get expanded option of wijexpander widget */
    wijexpander(methodName: "option", optionName: "expanded") ;
    /** Set expanded option to wijexpander widget */
    wijexpander(methodName: "option", optionName: "expanded", expandedValue ): JQuery;
    
    /** Get expandDirection option of wijexpander widget */
    wijexpander(methodName: "option", optionName: "expandDirection") ;
    /** Set expandDirection option to wijexpander widget */
    wijexpander(methodName: "option", optionName: "expandDirection", expandDirectionValue ): JQuery;
    
    /** Get beforeCollapse option(event) of wijexpander widget */
    wijexpander(methodName: "option", eventName: "beforeCollapse"): Function;
    /** Set beforeCollapse option(event) to wijexpander widget */
    wijexpander(methodName: "option", eventName: "beforeCollapse", beforeCollapseEventValue: (e?) => void): JQuery;
    
    /** Get beforeExpand option(event) of wijexpander widget */
    wijexpander(methodName: "option", eventName: "beforeExpand"): Function;
    /** Set beforeExpand option(event) to wijexpander widget */
    wijexpander(methodName: "option", eventName: "beforeExpand", beforeExpandEventValue: (e?) => void): JQuery;
    
    /** Get afterCollapse option(event) of wijexpander widget */
    wijexpander(methodName: "option", eventName: "afterCollapse"): Function;
    /** Set afterCollapse option(event) to wijexpander widget */
    wijexpander(methodName: "option", eventName: "afterCollapse", afterCollapseEventValue: (e?) => void): JQuery;
    
    /** Get afterExpand option(event) of wijexpander widget */
    wijexpander(methodName: "option", eventName: "afterExpand"): Function;
    /** Set afterExpand option(event) to wijexpander widget */
    wijexpander(methodName: "option", eventName: "afterExpand", afterExpandEventValue: (e?) => void): JQuery;
    
    
}

/** Definitions of wijfileexplorer widget */
interface JQuery {

    /** Initialize a wijfileexplorer widget */
    wijfileexplorer(): JQuery;
    /** Initialize a wijfileexplorer widget with the given options */
    wijfileexplorer(options: Object): JQuery;
    wijfileexplorer(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijfileexplorer widget */
    wijfileexplorer(methodName: "option", optionName: string): any;
    /** Set options to wijfileexplorer widget */
    wijfileexplorer(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijfileexplorer widget */
    wijfileexplorer(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /**  */
    wijfileexplorer(methodName: "destroy") ;
    
    /** The refresh method refreshes the content within the wijfileexplorer.
      * @param {string} path - Optional. The path to refresh. The current folder is used if the path is not set.
      */
    wijfileexplorer(methodName: "refresh", path?: any) ;
    
    /** Get mode option of wijfileexplorer widget */
    wijfileexplorer(methodName: "option", optionName: "mode") ;
    /** Set mode option to wijfileexplorer widget */
    wijfileexplorer(methodName: "option", optionName: "mode", modeValue ): JQuery;
    
    /** Get searchPatterns option of wijfileexplorer widget */
    wijfileexplorer(methodName: "option", optionName: "searchPatterns") ;
    /** Set searchPatterns option to wijfileexplorer widget */
    wijfileexplorer(methodName: "option", optionName: "searchPatterns", searchPatternsValue ): JQuery;
    
    /** Get initPath option of wijfileexplorer widget */
    wijfileexplorer(methodName: "option", optionName: "initPath") ;
    /** Set initPath option to wijfileexplorer widget */
    wijfileexplorer(methodName: "option", optionName: "initPath", initPathValue ): JQuery;
    
    /** Get viewPaths option of wijfileexplorer widget */
    wijfileexplorer(methodName: "option", optionName: "viewPaths") ;
    /** Set viewPaths option to wijfileexplorer widget */
    wijfileexplorer(methodName: "option", optionName: "viewPaths", viewPathsValue ): JQuery;
    
    /** Get viewMode option of wijfileexplorer widget */
    wijfileexplorer(methodName: "option", optionName: "viewMode") ;
    /** Set viewMode option to wijfileexplorer widget */
    wijfileexplorer(methodName: "option", optionName: "viewMode", viewModeValue ): JQuery;
    
    /** Get allowFileExtensionRename option of wijfileexplorer widget */
    wijfileexplorer(methodName: "option", optionName: "allowFileExtensionRename") ;
    /** Set allowFileExtensionRename option to wijfileexplorer widget */
    wijfileexplorer(methodName: "option", optionName: "allowFileExtensionRename", allowFileExtensionRenameValue ): JQuery;
    
    /** Get allowMultipleSelection option of wijfileexplorer widget */
    wijfileexplorer(methodName: "option", optionName: "allowMultipleSelection") ;
    /** Set allowMultipleSelection option to wijfileexplorer widget */
    wijfileexplorer(methodName: "option", optionName: "allowMultipleSelection", allowMultipleSelectionValue ): JQuery;
    
    /** Get allowPaging option of wijfileexplorer widget */
    wijfileexplorer(methodName: "option", optionName: "allowPaging") ;
    /** Set allowPaging option to wijfileexplorer widget */
    wijfileexplorer(methodName: "option", optionName: "allowPaging", allowPagingValue ): JQuery;
    
    /** Get pageSize option of wijfileexplorer widget */
    wijfileexplorer(methodName: "option", optionName: "pageSize") ;
    /** Set pageSize option to wijfileexplorer widget */
    wijfileexplorer(methodName: "option", optionName: "pageSize", pageSizeValue ): JQuery;
    
    /** Get shortcuts option of wijfileexplorer widget */
    wijfileexplorer(methodName: "option", optionName: "shortcuts") ;
    /** Set shortcuts option to wijfileexplorer widget */
    wijfileexplorer(methodName: "option", optionName: "shortcuts", shortcutsValue ): JQuery;
    
    /** Get enableOpenFile option of wijfileexplorer widget */
    wijfileexplorer(methodName: "option", optionName: "enableOpenFile") ;
    /** Set enableOpenFile option to wijfileexplorer widget */
    wijfileexplorer(methodName: "option", optionName: "enableOpenFile", enableOpenFileValue ): JQuery;
    
    /** Get enableCreateNewFolder option of wijfileexplorer widget */
    wijfileexplorer(methodName: "option", optionName: "enableCreateNewFolder") ;
    /** Set enableCreateNewFolder option to wijfileexplorer widget */
    wijfileexplorer(methodName: "option", optionName: "enableCreateNewFolder", enableCreateNewFolderValue ): JQuery;
    
    /** Get enableCopy option of wijfileexplorer widget */
    wijfileexplorer(methodName: "option", optionName: "enableCopy") ;
    /** Set enableCopy option to wijfileexplorer widget */
    wijfileexplorer(methodName: "option", optionName: "enableCopy", enableCopyValue ): JQuery;
    
    /** Get enableFilteringOnEnterPressed option of wijfileexplorer widget */
    wijfileexplorer(methodName: "option", optionName: "enableFilteringOnEnterPressed") ;
    /** Set enableFilteringOnEnterPressed option to wijfileexplorer widget */
    wijfileexplorer(methodName: "option", optionName: "enableFilteringOnEnterPressed", enableFilteringOnEnterPressedValue ): JQuery;
    
    /** Get currentFolder option of wijfileexplorer widget */
    wijfileexplorer(methodName: "option", optionName: "currentFolder") ;
    /** Set currentFolder option to wijfileexplorer widget */
    wijfileexplorer(methodName: "option", optionName: "currentFolder", currentFolderValue ): JQuery;
    
    /** Get visibleControls option of wijfileexplorer widget */
    wijfileexplorer(methodName: "option", optionName: "visibleControls") ;
    /** Set visibleControls option to wijfileexplorer widget */
    wijfileexplorer(methodName: "option", optionName: "visibleControls", visibleControlsValue ): JQuery;
    
    /** Get treePanelWidth option of wijfileexplorer widget */
    wijfileexplorer(methodName: "option", optionName: "treePanelWidth") ;
    /** Set treePanelWidth option to wijfileexplorer widget */
    wijfileexplorer(methodName: "option", optionName: "treePanelWidth", treePanelWidthValue ): JQuery;
    
    /** Get hostUri option of wijfileexplorer widget */
    wijfileexplorer(methodName: "option", optionName: "hostUri") ;
    /** Set hostUri option to wijfileexplorer widget */
    wijfileexplorer(methodName: "option", optionName: "hostUri", hostUriValue ): JQuery;
    
    /** Get actionUri option of wijfileexplorer widget */
    wijfileexplorer(methodName: "option", optionName: "actionUri") ;
    /** Set actionUri option to wijfileexplorer widget */
    wijfileexplorer(methodName: "option", optionName: "actionUri", actionUriValue ): JQuery;
    
    /** Get disabled option of wijfileexplorer widget */
    wijfileexplorer(methodName: "option", optionName: "disabled") ;
    /** Set disabled option to wijfileexplorer widget */
    wijfileexplorer(methodName: "option", optionName: "disabled", disabledValue ): JQuery;
    
    /** Get itemSelected option(event) of wijfileexplorer widget */
    wijfileexplorer(methodName: "option", eventName: "itemSelected"): Function;
    /** Set itemSelected option(event) to wijfileexplorer widget */
    wijfileexplorer(methodName: "option", eventName: "itemSelected", itemSelectedEventValue: (e?) => void): JQuery;
    
    /** Get fileOpened option(event) of wijfileexplorer widget */
    wijfileexplorer(methodName: "option", eventName: "fileOpened"): Function;
    /** Set fileOpened option(event) to wijfileexplorer widget */
    wijfileexplorer(methodName: "option", eventName: "fileOpened", fileOpenedEventValue: (e?) => void): JQuery;
    
    /** Get fileOpening option(event) of wijfileexplorer widget */
    wijfileexplorer(methodName: "option", eventName: "fileOpening"): Function;
    /** Set fileOpening option(event) to wijfileexplorer widget */
    wijfileexplorer(methodName: "option", eventName: "fileOpening", fileOpeningEventValue: (e?) => void): JQuery;
    
    /** Get itemCopying option(event) of wijfileexplorer widget */
    wijfileexplorer(methodName: "option", eventName: "itemCopying"): Function;
    /** Set itemCopying option(event) to wijfileexplorer widget */
    wijfileexplorer(methodName: "option", eventName: "itemCopying", itemCopyingEventValue: (e?) => void): JQuery;
    
    /** Get itemCopied option(event) of wijfileexplorer widget */
    wijfileexplorer(methodName: "option", eventName: "itemCopied"): Function;
    /** Set itemCopied option(event) to wijfileexplorer widget */
    wijfileexplorer(methodName: "option", eventName: "itemCopied", itemCopiedEventValue: (e?) => void): JQuery;
    
    /** Get itemRenaming option(event) of wijfileexplorer widget */
    wijfileexplorer(methodName: "option", eventName: "itemRenaming"): Function;
    /** Set itemRenaming option(event) to wijfileexplorer widget */
    wijfileexplorer(methodName: "option", eventName: "itemRenaming", itemRenamingEventValue: (e?) => void): JQuery;
    
    /** Get itemRenamed option(event) of wijfileexplorer widget */
    wijfileexplorer(methodName: "option", eventName: "itemRenamed"): Function;
    /** Set itemRenamed option(event) to wijfileexplorer widget */
    wijfileexplorer(methodName: "option", eventName: "itemRenamed", itemRenamedEventValue: (e?) => void): JQuery;
    
    /** Get itemDeleting option(event) of wijfileexplorer widget */
    wijfileexplorer(methodName: "option", eventName: "itemDeleting"): Function;
    /** Set itemDeleting option(event) to wijfileexplorer widget */
    wijfileexplorer(methodName: "option", eventName: "itemDeleting", itemDeletingEventValue: (e?) => void): JQuery;
    
    /** Get itemDeleted option(event) of wijfileexplorer widget */
    wijfileexplorer(methodName: "option", eventName: "itemDeleted"): Function;
    /** Set itemDeleted option(event) to wijfileexplorer widget */
    wijfileexplorer(methodName: "option", eventName: "itemDeleted", itemDeletedEventValue: (e?) => void): JQuery;
    
    /** Get errorOccurred option(event) of wijfileexplorer widget */
    wijfileexplorer(methodName: "option", eventName: "errorOccurred"): Function;
    /** Set errorOccurred option(event) to wijfileexplorer widget */
    wijfileexplorer(methodName: "option", eventName: "errorOccurred", errorOccurredEventValue: (e?) => void): JQuery;
    
    /** Get itemPasting option(event) of wijfileexplorer widget */
    wijfileexplorer(methodName: "option", eventName: "itemPasting"): Function;
    /** Set itemPasting option(event) to wijfileexplorer widget */
    wijfileexplorer(methodName: "option", eventName: "itemPasting", itemPastingEventValue: (e?) => void): JQuery;
    
    /** Get itemPasted option(event) of wijfileexplorer widget */
    wijfileexplorer(methodName: "option", eventName: "itemPasted"): Function;
    /** Set itemPasted option(event) to wijfileexplorer widget */
    wijfileexplorer(methodName: "option", eventName: "itemPasted", itemPastedEventValue: (e?) => void): JQuery;
    
    /** Get itemMoving option(event) of wijfileexplorer widget */
    wijfileexplorer(methodName: "option", eventName: "itemMoving"): Function;
    /** Set itemMoving option(event) to wijfileexplorer widget */
    wijfileexplorer(methodName: "option", eventName: "itemMoving", itemMovingEventValue: (e?) => void): JQuery;
    
    /** Get itemMoved option(event) of wijfileexplorer widget */
    wijfileexplorer(methodName: "option", eventName: "itemMoved"): Function;
    /** Set itemMoved option(event) to wijfileexplorer widget */
    wijfileexplorer(methodName: "option", eventName: "itemMoved", itemMovedEventValue: (e?) => void): JQuery;
    
    /** Get newFolderCreating option(event) of wijfileexplorer widget */
    wijfileexplorer(methodName: "option", eventName: "newFolderCreating"): Function;
    /** Set newFolderCreating option(event) to wijfileexplorer widget */
    wijfileexplorer(methodName: "option", eventName: "newFolderCreating", newFolderCreatingEventValue: (e?) => void): JQuery;
    
    /** Get newFolderCreated option(event) of wijfileexplorer widget */
    wijfileexplorer(methodName: "option", eventName: "newFolderCreated"): Function;
    /** Set newFolderCreated option(event) to wijfileexplorer widget */
    wijfileexplorer(methodName: "option", eventName: "newFolderCreated", newFolderCreatedEventValue: (e?) => void): JQuery;
    
    /** Get folderChanged option(event) of wijfileexplorer widget */
    wijfileexplorer(methodName: "option", eventName: "folderChanged"): Function;
    /** Set folderChanged option(event) to wijfileexplorer widget */
    wijfileexplorer(methodName: "option", eventName: "folderChanged", folderChangedEventValue: (e?) => void): JQuery;
    
    /** Get folderLoaded option(event) of wijfileexplorer widget */
    wijfileexplorer(methodName: "option", eventName: "folderLoaded"): Function;
    /** Set folderLoaded option(event) to wijfileexplorer widget */
    wijfileexplorer(methodName: "option", eventName: "folderLoaded", folderLoadedEventValue: (e?) => void): JQuery;
    
    /** Get filtering option(event) of wijfileexplorer widget */
    wijfileexplorer(methodName: "option", eventName: "filtering"): Function;
    /** Set filtering option(event) to wijfileexplorer widget */
    wijfileexplorer(methodName: "option", eventName: "filtering", filteringEventValue: (e?) => void): JQuery;
    
    /** Get filtered option(event) of wijfileexplorer widget */
    wijfileexplorer(methodName: "option", eventName: "filtered"): Function;
    /** Set filtered option(event) to wijfileexplorer widget */
    wijfileexplorer(methodName: "option", eventName: "filtered", filteredEventValue: (e?) => void): JQuery;
    
    
}

/** Definitions of wijfilter widget */
interface JQuery {

    /** Initialize a wijfilter widget */
    wijfilter(): JQuery;
    /** Initialize a wijfilter widget with the given options */
    wijfilter(options: Object): JQuery;
    wijfilter(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijfilter widget */
    wijfilter(methodName: "option", optionName: string): any;
    /** Set options to wijfilter widget */
    wijfilter(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijfilter widget */
    wijfilter(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Force wijfilter to raise the close event.
      * @param {bool} settingsChanged Indicates whether the wijfilter settings was changed or not. If true, then the values of the sortDirection, filterValue and filterOperator options will be passed to the event handler within the second parameter.
      */
    wijfilter(methodName: "triggerClose", settingsChanged: boolean) ;
    
    /** Get data option of wijfilter widget */
    wijfilter(methodName: "option", optionName: "data") ;
    /** Set data option to wijfilter widget */
    wijfilter(methodName: "option", optionName: "data", dataValue ): JQuery;
    
    /** Get dataKey option of wijfilter widget */
    wijfilter(methodName: "option", optionName: "dataKey") ;
    /** Set dataKey option to wijfilter widget */
    wijfilter(methodName: "option", optionName: "dataKey", dataKeyValue ): JQuery;
    
    /** Get nullDisplayText option of wijfilter widget */
    wijfilter(methodName: "option", optionName: "nullDisplayText") ;
    /** Set nullDisplayText option to wijfilter widget */
    wijfilter(methodName: "option", optionName: "nullDisplayText", nullDisplayTextValue ): JQuery;
    
    /** Get title option of wijfilter widget */
    wijfilter(methodName: "option", optionName: "title") ;
    /** Set title option to wijfilter widget */
    wijfilter(methodName: "option", optionName: "title", titleValue ): JQuery;
    
    /** Get enableSortButtons option of wijfilter widget */
    wijfilter(methodName: "option", optionName: "enableSortButtons") ;
    /** Set enableSortButtons option to wijfilter widget */
    wijfilter(methodName: "option", optionName: "enableSortButtons", enableSortButtonsValue ): JQuery;
    
    /** Get availableOperators option of wijfilter widget */
    wijfilter(methodName: "option", optionName: "availableOperators") ;
    /** Set availableOperators option to wijfilter widget */
    wijfilter(methodName: "option", optionName: "availableOperators", availableOperatorsValue ): JQuery;
    
    /** Get showHeader option of wijfilter widget */
    wijfilter(methodName: "option", optionName: "showHeader") ;
    /** Set showHeader option to wijfilter widget */
    wijfilter(methodName: "option", optionName: "showHeader", showHeaderValue ): JQuery;
    
    /** Get sortDirection option of wijfilter widget */
    wijfilter(methodName: "option", optionName: "sortDirection") ;
    /** Set sortDirection option to wijfilter widget */
    wijfilter(methodName: "option", optionName: "sortDirection", sortDirectionValue ): JQuery;
    
    /** Get filterValue option of wijfilter widget */
    wijfilter(methodName: "option", optionName: "filterValue") ;
    /** Set filterValue option to wijfilter widget */
    wijfilter(methodName: "option", optionName: "filterValue", filterValueValue ): JQuery;
    
    /** Get filterOperator option of wijfilter widget */
    wijfilter(methodName: "option", optionName: "filterOperator") ;
    /** Set filterOperator option to wijfilter widget */
    wijfilter(methodName: "option", optionName: "filterOperator", filterOperatorValue ): JQuery;
    
    /** Get close option(event) of wijfilter widget */
    wijfilter(methodName: "option", eventName: "close"): Function;
    /** Set close option(event) to wijfilter widget */
    wijfilter(methodName: "option", eventName: "close", closeEventValue: (e?, args?) => void): JQuery;
    
    
}

/** Definitions of wijflipcard widget */
interface JQuery {

    /** Initialize a wijflipcard widget */
    wijflipcard(): JQuery;
    /** Initialize a wijflipcard widget with the given options */
    wijflipcard(options: Object): JQuery;
    wijflipcard(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijflipcard widget */
    wijflipcard(methodName: "option", optionName: string): any;
    /** Set options to wijflipcard widget */
    wijflipcard(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijflipcard widget */
    wijflipcard(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /**  */
    wijflipcard(methodName: "destroy") ;
    
    /** Get disabled option of wijflipcard widget */
    wijflipcard(methodName: "option", optionName: "disabled") ;
    /** Set disabled option to wijflipcard widget */
    wijflipcard(methodName: "option", optionName: "disabled", disabledValue ): JQuery;
    
    /** Get width option of wijflipcard widget */
    wijflipcard(methodName: "option", optionName: "width") ;
    /** Set width option to wijflipcard widget */
    wijflipcard(methodName: "option", optionName: "width", widthValue ): JQuery;
    
    /** Get height option of wijflipcard widget */
    wijflipcard(methodName: "option", optionName: "height") ;
    /** Set height option to wijflipcard widget */
    wijflipcard(methodName: "option", optionName: "height", heightValue ): JQuery;
    
    /** Get triggerEvent option of wijflipcard widget */
    wijflipcard(methodName: "option", optionName: "triggerEvent") ;
    /** Set triggerEvent option to wijflipcard widget */
    wijflipcard(methodName: "option", optionName: "triggerEvent", triggerEventValue ): JQuery;
    
    /** Get animation option of wijflipcard widget */
    wijflipcard(methodName: "option", optionName: "animation") ;
    /** Set animation option to wijflipcard widget */
    wijflipcard(methodName: "option", optionName: "animation", animationValue ): JQuery;
    
    /** Get flipping option(event) of wijflipcard widget */
    wijflipcard(methodName: "option", eventName: "flipping"): Function;
    /** Set flipping option(event) to wijflipcard widget */
    wijflipcard(methodName: "option", eventName: "flipping", flippingEventValue: (e?, data?) => void): JQuery;
    
    /** Get flipped option(event) of wijflipcard widget */
    wijflipcard(methodName: "option", eventName: "flipped"): Function;
    /** Set flipped option(event) to wijflipcard widget */
    wijflipcard(methodName: "option", eventName: "flipped", flippedEventValue: (e?, data?) => void): JQuery;
    
    
}

/** Definitions of wijgallery widget */
interface JQuery {

    /** Initialize a wijgallery widget */
    wijgallery(): JQuery;
    /** Initialize a wijgallery widget with the given options */
    wijgallery(options: Object): JQuery;
    wijgallery(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijgallery widget */
    wijgallery(methodName: "option", optionName: string): any;
    /** Set options to wijgallery widget */
    wijgallery(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijgallery widget */
    wijgallery(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Returns a count of the number of items in the gallery.
      * @returns {number} The number of items in the gallery
      */
    wijgallery(methodName: "count") ;
    
    /** Removes the wijgallery functionality completely. This returns the element to its pre-init state. */
    wijgallery(methodName: "destroy") ;
    
    /** Shows the picture at the specified index.
      * @param {number} index The zero-based index of the picture to show.
      * @example
      * $("#element").wijgallery("show", 1);
      */
    wijgallery(methodName: "show", index: any) ;
    
    /** Shows the next picture. */
    wijgallery(methodName: "next") ;
    
    /** Shows the previous picture. */
    wijgallery(methodName: "previous") ;
    
    /** Starts automatically displaying each of the images in order. */
    wijgallery(methodName: "play") ;
    
    /** Stops automatically displaying the images in order. */
    wijgallery(methodName: "pause") ;
    
    /** Adds a custom item with specified index.
      * The first parameter is the new item to add,
      * it should be a jQuery Element or HTML string. 
      * The second parameter is the index of item to add , 
      * If  no index specified the item will be added at the last of item collection.
      * @param {string|jQuery} ui The node content or innerHTML.
      * @param {number} index Specified the postion to insert at.
      * @example
      * $("#element").wijgallery("add", "&lt;li&gt;&lt;img..&gt;&lt;/li&gt;", index);
      */
    wijgallery(methodName: "add", ui: any, index: any) ;
    
    /** Removes the item at specified index. 
      * The parameter is the index of item to add , 
      * If no index specified the last item will be removed.
      * @param {number} index Specified which item should be removed.
      * @example
      * $("#element").wijgallery("remove", index);
      */
    wijgallery(methodName: "remove", index: any) ;
    
    /** Get autoPlay option of wijgallery widget */
    wijgallery(methodName: "option", optionName: "autoPlay") ;
    /** Set autoPlay option to wijgallery widget */
    wijgallery(methodName: "option", optionName: "autoPlay", autoPlayValue ): JQuery;
    
    /** Get scrollWithSelection option of wijgallery widget */
    wijgallery(methodName: "option", optionName: "scrollWithSelection") ;
    /** Set scrollWithSelection option to wijgallery widget */
    wijgallery(methodName: "option", optionName: "scrollWithSelection", scrollWithSelectionValue ): JQuery;
    
    /** Get showTimer option of wijgallery widget */
    wijgallery(methodName: "option", optionName: "showTimer") ;
    /** Set showTimer option to wijgallery widget */
    wijgallery(methodName: "option", optionName: "showTimer", showTimerValue ): JQuery;
    
    /** Get interval option of wijgallery widget */
    wijgallery(methodName: "option", optionName: "interval") ;
    /** Set interval option to wijgallery widget */
    wijgallery(methodName: "option", optionName: "interval", intervalValue ): JQuery;
    
    /** Get showCaption option of wijgallery widget */
    wijgallery(methodName: "option", optionName: "showCaption") ;
    /** Set showCaption option to wijgallery widget */
    wijgallery(methodName: "option", optionName: "showCaption", showCaptionValue ): JQuery;
    
    /** Get showThumbnailCaptions option of wijgallery widget */
    wijgallery(methodName: "option", optionName: "showThumbnailCaptions") ;
    /** Set showThumbnailCaptions option to wijgallery widget */
    wijgallery(methodName: "option", optionName: "showThumbnailCaptions", showThumbnailCaptionsValue ): JQuery;
    
    /** Get data option of wijgallery widget */
    wijgallery(methodName: "option", optionName: "data") ;
    /** Set data option to wijgallery widget */
    wijgallery(methodName: "option", optionName: "data", dataValue ): JQuery;
    
    /** Get showControls option of wijgallery widget */
    wijgallery(methodName: "option", optionName: "showControls") ;
    /** Set showControls option to wijgallery widget */
    wijgallery(methodName: "option", optionName: "showControls", showControlsValue ): JQuery;
    
    /** Get control option of wijgallery widget */
    wijgallery(methodName: "option", optionName: "control") ;
    /** Set control option to wijgallery widget */
    wijgallery(methodName: "option", optionName: "control", controlValue ): JQuery;
    
    /** Get controlPosition option of wijgallery widget */
    wijgallery(methodName: "option", optionName: "controlPosition") ;
    /** Set controlPosition option to wijgallery widget */
    wijgallery(methodName: "option", optionName: "controlPosition", controlPositionValue ): JQuery;
    
    /** Get showCounter option of wijgallery widget */
    wijgallery(methodName: "option", optionName: "showCounter") ;
    /** Set showCounter option to wijgallery widget */
    wijgallery(methodName: "option", optionName: "showCounter", showCounterValue ): JQuery;
    
    /** Get counter option of wijgallery widget */
    wijgallery(methodName: "option", optionName: "counter") ;
    /** Set counter option to wijgallery widget */
    wijgallery(methodName: "option", optionName: "counter", counterValue ): JQuery;
    
    /** Get showPager option of wijgallery widget */
    wijgallery(methodName: "option", optionName: "showPager") ;
    /** Set showPager option to wijgallery widget */
    wijgallery(methodName: "option", optionName: "showPager", showPagerValue ): JQuery;
    
    /** Get pagingPosition option of wijgallery widget */
    wijgallery(methodName: "option", optionName: "pagingPosition") ;
    /** Set pagingPosition option to wijgallery widget */
    wijgallery(methodName: "option", optionName: "pagingPosition", pagingPositionValue ): JQuery;
    
    /** Get thumbnailOrientation option of wijgallery widget */
    wijgallery(methodName: "option", optionName: "thumbnailOrientation") ;
    /** Set thumbnailOrientation option to wijgallery widget */
    wijgallery(methodName: "option", optionName: "thumbnailOrientation", thumbnailOrientationValue ): JQuery;
    
    /** Get thumbnailDirection option of wijgallery widget */
    wijgallery(methodName: "option", optionName: "thumbnailDirection") ;
    /** Set thumbnailDirection option to wijgallery widget */
    wijgallery(methodName: "option", optionName: "thumbnailDirection", thumbnailDirectionValue ): JQuery;
    
    /** Get transitions option of wijgallery widget */
    wijgallery(methodName: "option", optionName: "transitions") ;
    /** Set transitions option to wijgallery widget */
    wijgallery(methodName: "option", optionName: "transitions", transitionsValue ): JQuery;
    
    /** Get showControlsOnHover option of wijgallery widget */
    wijgallery(methodName: "option", optionName: "showControlsOnHover") ;
    /** Set showControlsOnHover option to wijgallery widget */
    wijgallery(methodName: "option", optionName: "showControlsOnHover", showControlsOnHoverValue ): JQuery;
    
    /** Get thumbsDisplay option of wijgallery widget */
    wijgallery(methodName: "option", optionName: "thumbsDisplay") ;
    /** Set thumbsDisplay option to wijgallery widget */
    wijgallery(methodName: "option", optionName: "thumbsDisplay", thumbsDisplayValue ): JQuery;
    
    /** Get thumbsLength option of wijgallery widget */
    wijgallery(methodName: "option", optionName: "thumbsLength") ;
    /** Set thumbsLength option to wijgallery widget */
    wijgallery(methodName: "option", optionName: "thumbsLength", thumbsLengthValue ): JQuery;
    
    /** Get showMovieControls option of wijgallery widget */
    wijgallery(methodName: "option", optionName: "showMovieControls") ;
    /** Set showMovieControls option to wijgallery widget */
    wijgallery(methodName: "option", optionName: "showMovieControls", showMovieControlsValue ): JQuery;
    
    /** Get autoPlayMovies option of wijgallery widget */
    wijgallery(methodName: "option", optionName: "autoPlayMovies") ;
    /** Set autoPlayMovies option to wijgallery widget */
    wijgallery(methodName: "option", optionName: "autoPlayMovies", autoPlayMoviesValue ): JQuery;
    
    /** Get flashParams option of wijgallery widget */
    wijgallery(methodName: "option", optionName: "flashParams") ;
    /** Set flashParams option to wijgallery widget */
    wijgallery(methodName: "option", optionName: "flashParams", flashParamsValue ): JQuery;
    
    /** Get flashVars option of wijgallery widget */
    wijgallery(methodName: "option", optionName: "flashVars") ;
    /** Set flashVars option to wijgallery widget */
    wijgallery(methodName: "option", optionName: "flashVars", flashVarsValue ): JQuery;
    
    /** Get flashVersion option of wijgallery widget */
    wijgallery(methodName: "option", optionName: "flashVersion") ;
    /** Set flashVersion option to wijgallery widget */
    wijgallery(methodName: "option", optionName: "flashVersion", flashVersionValue ): JQuery;
    
    /** Get flvPlayer option of wijgallery widget */
    wijgallery(methodName: "option", optionName: "flvPlayer") ;
    /** Set flvPlayer option to wijgallery widget */
    wijgallery(methodName: "option", optionName: "flvPlayer", flvPlayerValue ): JQuery;
    
    /** Get flashInstall option of wijgallery widget */
    wijgallery(methodName: "option", optionName: "flashInstall") ;
    /** Set flashInstall option to wijgallery widget */
    wijgallery(methodName: "option", optionName: "flashInstall", flashInstallValue ): JQuery;
    
    /** Get mode option of wijgallery widget */
    wijgallery(methodName: "option", optionName: "mode") ;
    /** Set mode option to wijgallery widget */
    wijgallery(methodName: "option", optionName: "mode", modeValue ): JQuery;
    
    /** Get beforeTransition option(event) of wijgallery widget */
    wijgallery(methodName: "option", eventName: "beforeTransition"): Function;
    /** Set beforeTransition option(event) to wijgallery widget */
    wijgallery(methodName: "option", eventName: "beforeTransition", beforeTransitionEventValue: (e?, data?) => void): JQuery;
    
    /** Get afterTransition option(event) of wijgallery widget */
    wijgallery(methodName: "option", eventName: "afterTransition"): Function;
    /** Set afterTransition option(event) to wijgallery widget */
    wijgallery(methodName: "option", eventName: "afterTransition", afterTransitionEventValue: (e?, data?) => void): JQuery;
    
    /** Get loadCallback option(event) of wijgallery widget */
    wijgallery(methodName: "option", eventName: "loadCallback"): Function;
    /** Set loadCallback option(event) to wijgallery widget */
    wijgallery(methodName: "option", eventName: "loadCallback", loadCallbackEventValue: (e?, data?) => void): JQuery;
    
    
}

/** Definitions of wijgauge widget */
interface JQuery {

    /** Initialize a wijgauge widget */
    wijgauge(): JQuery;
    /** Initialize a wijgauge widget with the given options */
    wijgauge(options: Object): JQuery;
    wijgauge(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijgauge widget */
    wijgauge(methodName: "option", optionName: string): any;
    /** Set options to wijgauge widget */
    wijgauge(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijgauge widget */
    wijgauge(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Redraw the gauge. */
    wijgauge(methodName: "redraw") ;
    
    /** Remove the functionality completely. This will return the element back to its pre-init state. */
    wijgauge(methodName: "destroy") ;
    
    /** Returns a reference to the Raphael canvas object.
      * @returns {Raphael Element} Reference to raphael canvas object.
      */
    wijgauge(methodName: "getCanvas"): RaphaelElement;
    
    /** Get value option of wijgauge widget */
    wijgauge(methodName: "option", optionName: "value") ;
    /** Set value option to wijgauge widget */
    wijgauge(methodName: "option", optionName: "value", valueValue ): JQuery;
    
    /** Get max option of wijgauge widget */
    wijgauge(methodName: "option", optionName: "max") ;
    /** Set max option to wijgauge widget */
    wijgauge(methodName: "option", optionName: "max", maxValue ): JQuery;
    
    /** Get min option of wijgauge widget */
    wijgauge(methodName: "option", optionName: "min") ;
    /** Set min option to wijgauge widget */
    wijgauge(methodName: "option", optionName: "min", minValue ): JQuery;
    
    /** Get width option of wijgauge widget */
    wijgauge(methodName: "option", optionName: "width") ;
    /** Set width option to wijgauge widget */
    wijgauge(methodName: "option", optionName: "width", widthValue ): JQuery;
    
    /** Get height option of wijgauge widget */
    wijgauge(methodName: "option", optionName: "height") ;
    /** Set height option to wijgauge widget */
    wijgauge(methodName: "option", optionName: "height", heightValue ): JQuery;
    
    /** Get autoResize option of wijgauge widget */
    wijgauge(methodName: "option", optionName: "autoResize") ;
    /** Set autoResize option to wijgauge widget */
    wijgauge(methodName: "option", optionName: "autoResize", autoResizeValue ): JQuery;
    
    /** Get tickMajor option of wijgauge widget */
    wijgauge(methodName: "option", optionName: "tickMajor") ;
    /** Set tickMajor option to wijgauge widget */
    wijgauge(methodName: "option", optionName: "tickMajor", tickMajorValue ): JQuery;
    
    /** Get tickMinor option of wijgauge widget */
    wijgauge(methodName: "option", optionName: "tickMinor") ;
    /** Set tickMinor option to wijgauge widget */
    wijgauge(methodName: "option", optionName: "tickMinor", tickMinorValue ): JQuery;
    
    /** Get pointer option of wijgauge widget */
    wijgauge(methodName: "option", optionName: "pointer") ;
    /** Set pointer option to wijgauge widget */
    wijgauge(methodName: "option", optionName: "pointer", pointerValue ): JQuery;
    
    /** Get islogarithmic option of wijgauge widget */
    wijgauge(methodName: "option", optionName: "islogarithmic") ;
    /** Set islogarithmic option to wijgauge widget */
    wijgauge(methodName: "option", optionName: "islogarithmic", islogarithmicValue ): JQuery;
    
    /** Get logarithmicBase option of wijgauge widget */
    wijgauge(methodName: "option", optionName: "logarithmicBase") ;
    /** Set logarithmicBase option to wijgauge widget */
    wijgauge(methodName: "option", optionName: "logarithmicBase", logarithmicBaseValue ): JQuery;
    
    /** Get labels option of wijgauge widget */
    wijgauge(methodName: "option", optionName: "labels") ;
    /** Set labels option to wijgauge widget */
    wijgauge(methodName: "option", optionName: "labels", labelsValue ): JQuery;
    
    /** Get animation option of wijgauge widget */
    wijgauge(methodName: "option", optionName: "animation") ;
    /** Set animation option to wijgauge widget */
    wijgauge(methodName: "option", optionName: "animation", animationValue ): JQuery;
    
    /** Get face option of wijgauge widget */
    wijgauge(methodName: "option", optionName: "face") ;
    /** Set face option to wijgauge widget */
    wijgauge(methodName: "option", optionName: "face", faceValue ): JQuery;
    
    /** Get marginTop option of wijgauge widget */
    wijgauge(methodName: "option", optionName: "marginTop") ;
    /** Set marginTop option to wijgauge widget */
    wijgauge(methodName: "option", optionName: "marginTop", marginTopValue ): JQuery;
    
    /** Get marginRight option of wijgauge widget */
    wijgauge(methodName: "option", optionName: "marginRight") ;
    /** Set marginRight option to wijgauge widget */
    wijgauge(methodName: "option", optionName: "marginRight", marginRightValue ): JQuery;
    
    /** Get marginBottom option of wijgauge widget */
    wijgauge(methodName: "option", optionName: "marginBottom") ;
    /** Set marginBottom option to wijgauge widget */
    wijgauge(methodName: "option", optionName: "marginBottom", marginBottomValue ): JQuery;
    
    /** Get marginLeft option of wijgauge widget */
    wijgauge(methodName: "option", optionName: "marginLeft") ;
    /** Set marginLeft option to wijgauge widget */
    wijgauge(methodName: "option", optionName: "marginLeft", marginLeftValue ): JQuery;
    
    /** Get ranges option of wijgauge widget */
    wijgauge(methodName: "option", optionName: "ranges") ;
    /** Set ranges option to wijgauge widget */
    wijgauge(methodName: "option", optionName: "ranges", rangesValue ): JQuery;
    
    /** Get isInverted option of wijgauge widget */
    wijgauge(methodName: "option", optionName: "isInverted") ;
    /** Set isInverted option to wijgauge widget */
    wijgauge(methodName: "option", optionName: "isInverted", isInvertedValue ): JQuery;
    
    /** Get beforeValueChanged option(event) of wijgauge widget */
    wijgauge(methodName: "option", eventName: "beforeValueChanged"): Function;
    /** Set beforeValueChanged option(event) to wijgauge widget */
    wijgauge(methodName: "option", eventName: "beforeValueChanged", beforeValueChangedEventValue: (e?, data?) => void): JQuery;
    
    /** Get valueChanged option(event) of wijgauge widget */
    wijgauge(methodName: "option", eventName: "valueChanged"): Function;
    /** Set valueChanged option(event) to wijgauge widget */
    wijgauge(methodName: "option", eventName: "valueChanged", valueChangedEventValue: (e?, data?) => void): JQuery;
    
    /** Get painted option(event) of wijgauge widget */
    wijgauge(methodName: "option", eventName: "painted"): Function;
    /** Set painted option(event) to wijgauge widget */
    wijgauge(methodName: "option", eventName: "painted", paintedEventValue: (e?) => void): JQuery;
    
    
}

/** Definitions of wijgrid widget */
interface JQuery {

    /** Initialize a wijgrid widget */
    wijgrid(): JQuery;
    /** Initialize a wijgrid widget with the given options */
    wijgrid(options: Object): JQuery;
    wijgrid(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijgrid widget */
    wijgrid(methodName: "option", optionName: string): any;
    /** Set options to wijgrid widget */
    wijgrid(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijgrid widget */
    wijgrid(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Returns a one-dimensional array of widgets bound to visible column headers.
      * @returns {Object[]} A one-dimensional array of widgets bound to visible column headers.
      * @remarks
      * wijgrid columns are represented as widgets. This method returns a one-dimensional array of widgets that are bound to visible column headers.
      * The column widget is initiated with values taken from the corresponding item in the wijgrid.options.columns array. However, the options of a column widget instance reference not the original object but a copy created by the widget factory. Due to that, changes to the wijgrid.options.columns options are not automatically propagated to the column widget options and vice versa.
      * To solve this issue, the wijgrid synchronized the column widget option values with the source items. This synchronization occurs inside the ensureControl() method which is automatically called at each action requiring the wijgrid to enter.
      * Still, there is a drawback. For example, a user may want to filter wijgrid data from user code as in this sample:
      * $("#element").wijgrid("option", "columns")[0].filterValue = "newValue";
      * $("#element").wijgrid("ensureControl", true); // make wijgrid re-shape data and re-render.
      * In the sample above, nothing will happen since at synchronization user changes will be ignored.You need to change the filterValue of a column widget. This is what the columns() method is for:
      * $("#element").wijgrid("columns")[0].options.filterValue = "newValue";
      * $("#element").wijgrid("ensureControl", true); // make wijgrid re-shape data and re-render.
      * Here's the best way to change the filterValue:
      * $("#element").wijgrid("columns")[0].option("filterValue", "newValue"); // column widget handles all the needful.
      * @example
      * var colWidgets = $("#element").wijgrid("columns");
      */
    wijgrid(methodName: "columns"): any[];
    
    /** Gets the current cell for the grid.
      * @returns {wijmo.grid.cellInfo} Object that represents current cell of the grid.
      * @example
      * var current = $("#element).wijgrid("currentCell");
      */
    wijgrid(methodName: "currentCell") ;
    
    /** Sets the current cell for the grid.
      * @param {wijmo.grid.cellInfo} cellInfo Object that represents a single cell.
      * @returns {wijmo.grid.cellInfo} Object that represents current cell of the grid.
      * @remarks
      * If you wish to hide the current cell, use (-1, -1) for the value.
      * @example
      * $("#element).wijgrid("currentCell", new wijmo.grid.cellInfo(0, 0));
      */
    wijgrid(methodName: "currentCell", cellInfo: any) ;
    
    /** Sets the current cell for the grid.
      * @param {number} cellIndex Zero-based index of the required cell inside the corresponding row.
      * @param {number} rowIndex Zero-based index of the row that contains required cell.
      * @returns {wijmo.grid.cellInfo} Object that represents current cell of the grid.
      * @remarks
      * If you wish to hide the current cell, use (-1, -1) for the value.
      * @example
      * $("#element).wijgrid("currentCell", 0, 0);
      */
    wijgrid(methodName: "currentCell", cellIndex: any, rowIndex: any) ;
    
    /** Gets an array of underlying data.
      * @returns {object[]} An array of underlying data.
      * @example
      * var data = $("#element").wijgrid("data");
      */
    wijgrid(methodName: "data"): any[];
    
    /** Gets an underlying wijdataview instance.
      * @returns {wijmo.data.IDataView} An underlying wijdataview instance.
      * @example
      * var dataView = $("#element").wijgrid("dataView");
      */
    wijgrid(methodName: "dataView") ;
    
    /** Returns an array which consists of hierarchy nodes in wijgrid.
      * @returns {wijmo.grid.hierarchyNode[]}
      */
    wijgrid(methodName: "details") ;
    
    /** Re-renders wijgrid.
      * @param {Object} userData Infrastructure, not intended to be used by user.
      * @returns {void}
      * @example
      * $("#element").wijgrid("doRefresh");
      */
    wijgrid(methodName: "doRefresh", userData?: any) ;
    
    /** Puts the current cell into edit mode, as long as the editingMode options is set to "cell".
      * @returns {bool} True if the cell is successfully put into edit mode, otherwise false.
      * @example
      * $("#element").wijgrid({}
      *     editingMode: "cell",
      *     currentCellChanged: function (e, args) {
      *         if ($(e.target).wijgrid("option", "isLoaded")) {
      *             window.setTimeout(function () {
      *                 $(e.target).wijgrid("beginEdit");
      *             }, 100);
      *         }
      *     }
      * });
      */
    wijgrid(methodName: "beginEdit"): boolean;
    
    /** Finishes editing the current cell.
      * @param {bool} reject An optional parameter indicating whether changes will be rejected (true) or commited (false). The default value is false.
      * @returns {bool} True if the editing was finished successfully, othewise false.
      * @example
      * // endEdit is being called from within the saveChanges function
      * function saveChanges() {
      *     $("#element").wijgrid("endEdit");
      * }
      * functon cancelChanges() {
      *     $("#element").wijgrid("endEdit", true);
      * }
      */
    wijgrid(methodName: "endEdit", reject?: boolean): boolean;
    
    /** Starts editing of the specified row, can only be used when the editingMode option is set to "row".
      * @param {number} dataItemIndex Determines the data item to edit.
      * @returns {void}
      * @example
      * $("#element").wijgrid("editRow", 0);
      */
    wijgrid(methodName: "editRow", dataItemIndex: any) ;
    
    /** Exports the grid to a specified format. 
      * The export method only works when wijmo.exporter.gridExport's reference is on the page.
      * @param {string|Object} exportSettings 1.The name of the exported file.
      * 2.Settings of exporting, should be conformed to wijmo.exporter.GridExportSetting
      * @param {string} type The type of the exported file.
      * @param {object} settings The export setting.
      * @param {string} serviceUrl The export service url.
      * @remarks
      * Possible exported types are: xls, xlsx, csv, pdf,
      * @example
      * $("#element").wijgrid("exportGrid", "grid", "csv");
      */
    wijgrid(methodName: "exportGrid", exportSettings: any, type?: any, settings?: any, serviceUrl?: any) ;
    
    /** Finishes editing and updates the datasource.
      * @returns {void}
      * @example
      * $("#element").wijgrid("updateRow");
      */
    wijgrid(methodName: "updateRow") ;
    
    /** Discards changes and finishes editing of the edited row.
      * @returns {void}
      * @example
      * $("#element").wijgrid("cancelRowEditing");
      */
    wijgrid(methodName: "cancelRowEditing") ;
    
    /** Deletes the specified row.
      * @param {number} dataItemIndex Determines the data item to edit.
      * @returns {void}
      * @example
      * $("#element").wijgrid("cancelRowEditing");
      */
    wijgrid(methodName: "deleteRow", dataItemIndex: any) ;
    
    /** Moves the column widget options to the wijgrid options and renders the wijgrid. Use this method when you need to re-render the wijgrid and reload remote data from the datasource.
      * @param {bool} loadData Determines if the wijgrid must load data from a linked data source before rendering.
      * @returns {void}
      * @example
      * // Adds a new row to the viewModel and refreshes the wijgrid
      * var len = viewModel.data().length;
      * viewModel.data.push(new Person({ ID: len, Company: "New Company" + len, Name: "New Name" + len }));
      * $("#element").wijgrid("ensureControl", true);
      */
    wijgrid(methodName: "ensureControl", loadData: boolean) ;
    
    /** Gets an instance of the wijmo.grid.cellInfo class that represents the grid's specified cell.
      * @param {Object} domCell A HTML DOM Table cell object
      * @returns {wijmo.grid.cellInfo} Object that represents a cell of the grid.
      * @example
      * var cellInfo = $("#element").wijgrid("getCellInfo", domCell);
      */
    wijgrid(methodName: "getCellInfo", domCell: any) ;
    
    /** Returns a one-dimensional array of filter operators which are applicable to the specified data type.
      * @param {string} dataType Specifies the type of data to which you apply the filter operators. Possible values are: "string", "number", "datetime", "currency" and "boolean".
      * @returns {wijmo.grid.IFilterOperator[]} A one-dimensional array of filter operators.
      * @example
      * var operators = $("#element").wijgrid("getFilterOperatorsByDataType", "string");
      */
    wijgrid(methodName: "getFilterOperatorsByDataType", dataType: any) ;
    
    /** Gets the number of pages.
      * @returns {number} The number of pages.
      * @example
      * var pageCount = $("#element").wijgrid("pageCount");
      */
    wijgrid(methodName: "pageCount") ;
    
    /** Sets the size of the grid using the width and height parameters.
      * @param {String|Number} width Determines the width of the grid.
      * @param {String|Number} height Determines the height of the grid.
      * @returns {void}
      * @example
      * $("#element").wijgrid("setSize", 200, 200);
      */
    wijgrid(methodName: "setSize", width?: any, height?: any) ;
    
    /** Gets an object that manages selection in the grid.
      * @returns {wijmo.grid.selection} Object that manages selection in the grid.
      * @remarks
      * See the description of the wijmo.grid.selection class for more details.
      * @example
      * // Use the row index to add the row to the selection object
      * var selection = $("#element").wijgrid("selection");
      * selection.addRows(2);
      */
    wijgrid(methodName: "selection") ;
    
    /** Get allowColMoving option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "allowColMoving") ;
    /** Set allowColMoving option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "allowColMoving", allowColMovingValue ): JQuery;
    
    /** Get allowColSizing option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "allowColSizing") ;
    /** Set allowColSizing option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "allowColSizing", allowColSizingValue ): JQuery;
    
    /** Get allowEditing option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "allowEditing") ;
    /** Set allowEditing option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "allowEditing", allowEditingValue ): JQuery;
    
    /** Get allowKeyboardNavigation option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "allowKeyboardNavigation") ;
    /** Set allowKeyboardNavigation option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "allowKeyboardNavigation", allowKeyboardNavigationValue ): JQuery;
    
    /** Get keyActionTab option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "keyActionTab") ;
    /** Set keyActionTab option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "keyActionTab", keyActionTabValue ): JQuery;
    
    /** Get allowPaging option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "allowPaging") ;
    /** Set allowPaging option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "allowPaging", allowPagingValue ): JQuery;
    
    /** Get allowSorting option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "allowSorting") ;
    /** Set allowSorting option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "allowSorting", allowSortingValue ): JQuery;
    
    /** Get allowVirtualScrolling option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "allowVirtualScrolling") ;
    /** Set allowVirtualScrolling option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "allowVirtualScrolling", allowVirtualScrollingValue ): JQuery;
    
    /** Get calendar option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "calendar") ;
    /** Set calendar option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "calendar", calendarValue ): JQuery;
    
    /** Get cellStyleFormatter option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "cellStyleFormatter") ;
    /** Set cellStyleFormatter option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "cellStyleFormatter", cellStyleFormatterValue ): JQuery;
    
    /** Get columns option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "columns") ;
    /** Set columns option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "columns", columnsValue ): JQuery;
    
    /** Get columnsAutogenerationMode option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "columnsAutogenerationMode") ;
    /** Set columnsAutogenerationMode option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "columnsAutogenerationMode", columnsAutogenerationModeValue ): JQuery;
    
    /** Get culture option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "culture") ;
    /** Set culture option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "culture", cultureValue ): JQuery;
    
    /** Get cultureCalendar option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "cultureCalendar") ;
    /** Set cultureCalendar option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "cultureCalendar", cultureCalendarValue ): JQuery;
    
    /** Get customFilterOperators option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "customFilterOperators") ;
    /** Set customFilterOperators option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "customFilterOperators", customFilterOperatorsValue ): JQuery;
    
    /** Get data option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "data") ;
    /** Set data option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "data", dataValue ): JQuery;
    
    /** Get detail option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "detail") ;
    /** Set detail option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "detail", detailValue ): JQuery;
    
    /** Get editingInitOption option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "editingInitOption") ;
    /** Set editingInitOption option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "editingInitOption", editingInitOptionValue ): JQuery;
    
    /** Get editingMode option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "editingMode") ;
    /** Set editingMode option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "editingMode", editingModeValue ): JQuery;
    
    /** Get ensureColumnsPxWidth option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "ensureColumnsPxWidth") ;
    /** Set ensureColumnsPxWidth option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "ensureColumnsPxWidth", ensureColumnsPxWidthValue ): JQuery;
    
    /** Get filterOperatorsSortMode option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "filterOperatorsSortMode") ;
    /** Set filterOperatorsSortMode option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "filterOperatorsSortMode", filterOperatorsSortModeValue ): JQuery;
    
    /** Get freezingMode option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "freezingMode") ;
    /** Set freezingMode option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "freezingMode", freezingModeValue ): JQuery;
    
    /** Get groupAreaCaption option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "groupAreaCaption") ;
    /** Set groupAreaCaption option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "groupAreaCaption", groupAreaCaptionValue ): JQuery;
    
    /** Get groupIndent option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "groupIndent") ;
    /** Set groupIndent option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "groupIndent", groupIndentValue ): JQuery;
    
    /** Get highlightCurrentCell option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "highlightCurrentCell") ;
    /** Set highlightCurrentCell option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "highlightCurrentCell", highlightCurrentCellValue ): JQuery;
    
    /** Get highlightOnHover option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "highlightOnHover") ;
    /** Set highlightOnHover option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "highlightOnHover", highlightOnHoverValue ): JQuery;
    
    /** Get loadingText option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "loadingText") ;
    /** Set loadingText option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "loadingText", loadingTextValue ): JQuery;
    
    /** Get nullString option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "nullString") ;
    /** Set nullString option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "nullString", nullStringValue ): JQuery;
    
    /** Get pageIndex option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "pageIndex") ;
    /** Set pageIndex option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "pageIndex", pageIndexValue ): JQuery;
    
    /** Get pageSize option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "pageSize") ;
    /** Set pageSize option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "pageSize", pageSizeValue ): JQuery;
    
    /** Get pagerSettings option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "pagerSettings") ;
    /** Set pagerSettings option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "pagerSettings", pagerSettingsValue ): JQuery;
    
    /** Get readAttributesFromData option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "readAttributesFromData") ;
    /** Set readAttributesFromData option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "readAttributesFromData", readAttributesFromDataValue ): JQuery;
    
    /** Get rowHeight option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "rowHeight") ;
    /** Set rowHeight option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "rowHeight", rowHeightValue ): JQuery;
    
    /** Get rowStyleFormatter option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "rowStyleFormatter") ;
    /** Set rowStyleFormatter option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "rowStyleFormatter", rowStyleFormatterValue ): JQuery;
    
    /** Get scrollMode option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "scrollMode") ;
    /** Set scrollMode option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "scrollMode", scrollModeValue ): JQuery;
    
    /** Get scrollingSettings option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "scrollingSettings") ;
    /** Set scrollingSettings option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "scrollingSettings", scrollingSettingsValue ): JQuery;
    
    /** Get selectionMode option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "selectionMode") ;
    /** Set selectionMode option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "selectionMode", selectionModeValue ): JQuery;
    
    /** Get showFilter option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "showFilter") ;
    /** Set showFilter option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "showFilter", showFilterValue ): JQuery;
    
    /** Get showFooter option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "showFooter") ;
    /** Set showFooter option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "showFooter", showFooterValue ): JQuery;
    
    /** Get showGroupArea option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "showGroupArea") ;
    /** Set showGroupArea option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "showGroupArea", showGroupAreaValue ): JQuery;
    
    /** Get showSelectionOnRender option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "showSelectionOnRender") ;
    /** Set showSelectionOnRender option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "showSelectionOnRender", showSelectionOnRenderValue ): JQuery;
    
    /** Get showRowHeader option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "showRowHeader") ;
    /** Set showRowHeader option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "showRowHeader", showRowHeaderValue ): JQuery;
    
    /** Get staticColumnIndex option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "staticColumnIndex") ;
    /** Set staticColumnIndex option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "staticColumnIndex", staticColumnIndexValue ): JQuery;
    
    /** Get staticColumnsAlignment option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "staticColumnsAlignment") ;
    /** Set staticColumnsAlignment option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "staticColumnsAlignment", staticColumnsAlignmentValue ): JQuery;
    
    /** Get staticRowIndex option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "staticRowIndex") ;
    /** Set staticRowIndex option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "staticRowIndex", staticRowIndexValue ): JQuery;
    
    /** Get totalRows option of wijgrid widget */
    wijgrid(methodName: "option", optionName: "totalRows") ;
    /** Set totalRows option to wijgrid widget */
    wijgrid(methodName: "option", optionName: "totalRows", totalRowsValue ): JQuery;
    
    /** Get afterCellEdit option(event) of wijgrid widget */
    wijgrid(methodName: "option", eventName: "afterCellEdit"): Function;
    /** Set afterCellEdit option(event) to wijgrid widget */
    wijgrid(methodName: "option", eventName: "afterCellEdit", afterCellEditEventValue: (e?, args?) => void): JQuery;
    
    /** Get afterCellUpdate option(event) of wijgrid widget */
    wijgrid(methodName: "option", eventName: "afterCellUpdate"): Function;
    /** Set afterCellUpdate option(event) to wijgrid widget */
    wijgrid(methodName: "option", eventName: "afterCellUpdate", afterCellUpdateEventValue: (e?, args?) => void): JQuery;
    
    /** Get beforeCellEdit option(event) of wijgrid widget */
    wijgrid(methodName: "option", eventName: "beforeCellEdit"): Function;
    /** Set beforeCellEdit option(event) to wijgrid widget */
    wijgrid(methodName: "option", eventName: "beforeCellEdit", beforeCellEditEventValue: (e?, args?) => void): JQuery;
    
    /** Get beforeCellUpdate option(event) of wijgrid widget */
    wijgrid(methodName: "option", eventName: "beforeCellUpdate"): Function;
    /** Set beforeCellUpdate option(event) to wijgrid widget */
    wijgrid(methodName: "option", eventName: "beforeCellUpdate", beforeCellUpdateEventValue: (e?, args?) => void): JQuery;
    
    /** Get cellClicked option(event) of wijgrid widget */
    wijgrid(methodName: "option", eventName: "cellClicked"): Function;
    /** Set cellClicked option(event) to wijgrid widget */
    wijgrid(methodName: "option", eventName: "cellClicked", cellClickedEventValue: (e?, args?) => void): JQuery;
    
    /** Get columnDragging option(event) of wijgrid widget */
    wijgrid(methodName: "option", eventName: "columnDragging"): Function;
    /** Set columnDragging option(event) to wijgrid widget */
    wijgrid(methodName: "option", eventName: "columnDragging", columnDraggingEventValue: (e?, args?) => void): JQuery;
    
    /** Get columnDragged option(event) of wijgrid widget */
    wijgrid(methodName: "option", eventName: "columnDragged"): Function;
    /** Set columnDragged option(event) to wijgrid widget */
    wijgrid(methodName: "option", eventName: "columnDragged", columnDraggedEventValue: (e?, args?) => void): JQuery;
    
    /** Get columnDropping option(event) of wijgrid widget */
    wijgrid(methodName: "option", eventName: "columnDropping"): Function;
    /** Set columnDropping option(event) to wijgrid widget */
    wijgrid(methodName: "option", eventName: "columnDropping", columnDroppingEventValue: (e?, args?) => void): JQuery;
    
    /** Get columnDropped option(event) of wijgrid widget */
    wijgrid(methodName: "option", eventName: "columnDropped"): Function;
    /** Set columnDropped option(event) to wijgrid widget */
    wijgrid(methodName: "option", eventName: "columnDropped", columnDroppedEventValue: (e?, args?) => void): JQuery;
    
    /** Get columnGrouping option(event) of wijgrid widget */
    wijgrid(methodName: "option", eventName: "columnGrouping"): Function;
    /** Set columnGrouping option(event) to wijgrid widget */
    wijgrid(methodName: "option", eventName: "columnGrouping", columnGroupingEventValue: (e?, args?) => void): JQuery;
    
    /** Get columnGrouped option(event) of wijgrid widget */
    wijgrid(methodName: "option", eventName: "columnGrouped"): Function;
    /** Set columnGrouped option(event) to wijgrid widget */
    wijgrid(methodName: "option", eventName: "columnGrouped", columnGroupedEventValue: (e?, args?) => void): JQuery;
    
    /** Get columnResizing option(event) of wijgrid widget */
    wijgrid(methodName: "option", eventName: "columnResizing"): Function;
    /** Set columnResizing option(event) to wijgrid widget */
    wijgrid(methodName: "option", eventName: "columnResizing", columnResizingEventValue: (e?, args?) => void): JQuery;
    
    /** Get columnResized option(event) of wijgrid widget */
    wijgrid(methodName: "option", eventName: "columnResized"): Function;
    /** Set columnResized option(event) to wijgrid widget */
    wijgrid(methodName: "option", eventName: "columnResized", columnResizedEventValue: (e?, args?) => void): JQuery;
    
    /** Get columnUngrouping option(event) of wijgrid widget */
    wijgrid(methodName: "option", eventName: "columnUngrouping"): Function;
    /** Set columnUngrouping option(event) to wijgrid widget */
    wijgrid(methodName: "option", eventName: "columnUngrouping", columnUngroupingEventValue: (e?, args?) => void): JQuery;
    
    /** Get columnUngrouped option(event) of wijgrid widget */
    wijgrid(methodName: "option", eventName: "columnUngrouped"): Function;
    /** Set columnUngrouped option(event) to wijgrid widget */
    wijgrid(methodName: "option", eventName: "columnUngrouped", columnUngroupedEventValue: (e?, args?) => void): JQuery;
    
    /** Get currentCellChanging option(event) of wijgrid widget */
    wijgrid(methodName: "option", eventName: "currentCellChanging"): Function;
    /** Set currentCellChanging option(event) to wijgrid widget */
    wijgrid(methodName: "option", eventName: "currentCellChanging", currentCellChangingEventValue: (e?, args?) => void): JQuery;
    
    /** Get currentCellChanged option(event) of wijgrid widget */
    wijgrid(methodName: "option", eventName: "currentCellChanged"): Function;
    /** Set currentCellChanged option(event) to wijgrid widget */
    wijgrid(methodName: "option", eventName: "currentCellChanged", currentCellChangedEventValue: (e?) => void): JQuery;
    
    /** Get detailCreating option(event) of wijgrid widget */
    wijgrid(methodName: "option", eventName: "detailCreating"): Function;
    /** Set detailCreating option(event) to wijgrid widget */
    wijgrid(methodName: "option", eventName: "detailCreating", detailCreatingEventValue: (e?, args?) => void): JQuery;
    
    /** Get filterOperatorsListShowing option(event) of wijgrid widget */
    wijgrid(methodName: "option", eventName: "filterOperatorsListShowing"): Function;
    /** Set filterOperatorsListShowing option(event) to wijgrid widget */
    wijgrid(methodName: "option", eventName: "filterOperatorsListShowing", filterOperatorsListShowingEventValue: (e?, args?) => void): JQuery;
    
    /** Get filtering option(event) of wijgrid widget */
    wijgrid(methodName: "option", eventName: "filtering"): Function;
    /** Set filtering option(event) to wijgrid widget */
    wijgrid(methodName: "option", eventName: "filtering", filteringEventValue: (e?, args?) => void): JQuery;
    
    /** Get filtered option(event) of wijgrid widget */
    wijgrid(methodName: "option", eventName: "filtered"): Function;
    /** Set filtered option(event) to wijgrid widget */
    wijgrid(methodName: "option", eventName: "filtered", filteredEventValue: (e?, args?) => void): JQuery;
    
    /** Get groupAggregate option(event) of wijgrid widget */
    wijgrid(methodName: "option", eventName: "groupAggregate"): Function;
    /** Set groupAggregate option(event) to wijgrid widget */
    wijgrid(methodName: "option", eventName: "groupAggregate", groupAggregateEventValue: (e?, args?) => void): JQuery;
    
    /** Get groupText option(event) of wijgrid widget */
    wijgrid(methodName: "option", eventName: "groupText"): Function;
    /** Set groupText option(event) to wijgrid widget */
    wijgrid(methodName: "option", eventName: "groupText", groupTextEventValue: (e?, args?) => void): JQuery;
    
    /** Get invalidCellValue option(event) of wijgrid widget */
    wijgrid(methodName: "option", eventName: "invalidCellValue"): Function;
    /** Set invalidCellValue option(event) to wijgrid widget */
    wijgrid(methodName: "option", eventName: "invalidCellValue", invalidCellValueEventValue: (e?, args?) => void): JQuery;
    
    /** Get pageIndexChanging option(event) of wijgrid widget */
    wijgrid(methodName: "option", eventName: "pageIndexChanging"): Function;
    /** Set pageIndexChanging option(event) to wijgrid widget */
    wijgrid(methodName: "option", eventName: "pageIndexChanging", pageIndexChangingEventValue: (e?, args?) => void): JQuery;
    
    /** Get pageIndexChanged option(event) of wijgrid widget */
    wijgrid(methodName: "option", eventName: "pageIndexChanged"): Function;
    /** Set pageIndexChanged option(event) to wijgrid widget */
    wijgrid(methodName: "option", eventName: "pageIndexChanged", pageIndexChangedEventValue: (e?, args?) => void): JQuery;
    
    /** Get selectionChanged option(event) of wijgrid widget */
    wijgrid(methodName: "option", eventName: "selectionChanged"): Function;
    /** Set selectionChanged option(event) to wijgrid widget */
    wijgrid(methodName: "option", eventName: "selectionChanged", selectionChangedEventValue: (e?, args?) => void): JQuery;
    
    /** Get sorting option(event) of wijgrid widget */
    wijgrid(methodName: "option", eventName: "sorting"): Function;
    /** Set sorting option(event) to wijgrid widget */
    wijgrid(methodName: "option", eventName: "sorting", sortingEventValue: (e?, args?) => void): JQuery;
    
    /** Get sorted option(event) of wijgrid widget */
    wijgrid(methodName: "option", eventName: "sorted"): Function;
    /** Set sorted option(event) to wijgrid widget */
    wijgrid(methodName: "option", eventName: "sorted", sortedEventValue: (e?, args?) => void): JQuery;
    
    /** Get dataLoading option(event) of wijgrid widget */
    wijgrid(methodName: "option", eventName: "dataLoading"): Function;
    /** Set dataLoading option(event) to wijgrid widget */
    wijgrid(methodName: "option", eventName: "dataLoading", dataLoadingEventValue: (e?) => void): JQuery;
    
    /** Get dataLoaded option(event) of wijgrid widget */
    wijgrid(methodName: "option", eventName: "dataLoaded"): Function;
    /** Set dataLoaded option(event) to wijgrid widget */
    wijgrid(methodName: "option", eventName: "dataLoaded", dataLoadedEventValue: (e?) => void): JQuery;
    
    /** Get loading option(event) of wijgrid widget */
    wijgrid(methodName: "option", eventName: "loading"): Function;
    /** Set loading option(event) to wijgrid widget */
    wijgrid(methodName: "option", eventName: "loading", loadingEventValue: (e?) => void): JQuery;
    
    /** Get loaded option(event) of wijgrid widget */
    wijgrid(methodName: "option", eventName: "loaded"): Function;
    /** Set loaded option(event) to wijgrid widget */
    wijgrid(methodName: "option", eventName: "loaded", loadedEventValue: (e?) => void): JQuery;
    
    /** Get rendering option(event) of wijgrid widget */
    wijgrid(methodName: "option", eventName: "rendering"): Function;
    /** Set rendering option(event) to wijgrid widget */
    wijgrid(methodName: "option", eventName: "rendering", renderingEventValue: (e?) => void): JQuery;
    
    /** Get rendered option(event) of wijgrid widget */
    wijgrid(methodName: "option", eventName: "rendered"): Function;
    /** Set rendered option(event) to wijgrid widget */
    wijgrid(methodName: "option", eventName: "rendered", renderedEventValue: (e?) => void): JQuery;
    
    
}

/** Definitions of wijinputcore widget */
interface JQuery {

    /** Initialize a wijinputcore widget */
    wijinputcore(): JQuery;
    /** Initialize a wijinputcore widget with the given options */
    wijinputcore(options: Object): JQuery;
    wijinputcore(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijinputcore widget */
    wijinputcore(methodName: "option", optionName: string): any;
    /** Set options to wijinputcore widget */
    wijinputcore(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijinputcore widget */
    wijinputcore(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Destroy the widget. */
    wijinputcore(methodName: "destroy") ;
    
    /** Open the dropdown list. */
    wijinputcore(methodName: "drop") ;
    
    /** Get a boolean value indicates that whether the widget has been destroyed.
      * @returns {bool}
      */
    wijinputcore(methodName: "isDestroyed"): boolean;
    
    /** Gets element this widget is associated.
      * @returns {JQuery}
      */
    wijinputcore(methodName: "widget"): JQuery;
    
    /** Gets the text displayed in the input box.
      * @returns {string}
      */
    wijinputcore(methodName: "getText") ;
    
    /** Sets the text displayed in the input box.
      * @param value
      * @example
      * // This example sets text of a wijinputcore to "Hello"
      * $(".selector").wijinputcore("setText", "Hello");
      */
    wijinputcore(methodName: "setText", value: any) ;
    
    /** Gets the text value when the container form is posted back to server. */
    wijinputcore(methodName: "getPostValue") ;
    
    /** Selects a range of text in the widget.
      * @param {number} start Start of the range.
      * @param {number} end End of the range.
      * @example
      * // Select first two symbols in a wijinputcore
      * $(".selector").wijinputdate("selectText", 0, 2);
      */
    wijinputcore(methodName: "selectText", start?: any, end?: any) ;
    
    /** Set the focus to the widget. */
    wijinputcore(methodName: "focus") ;
    
    /** Determines whether the widget has the focus.
      * @returns {bool}
      */
    wijinputcore(methodName: "isFocused"): boolean;
    
    /** Gets the selected text. */
    wijinputcore(methodName: "getSelectedText") ;
    
    /** Get wijCSS option of wijinputcore widget */
    wijinputcore(methodName: "option", optionName: "wijCSS") ;
    /** Set wijCSS option to wijinputcore widget */
    wijinputcore(methodName: "option", optionName: "wijCSS", wijCSSValue ): JQuery;
    
    /** Get imeMode option of wijinputcore widget */
    wijinputcore(methodName: "option", optionName: "imeMode") ;
    /** Set imeMode option to wijinputcore widget */
    wijinputcore(methodName: "option", optionName: "imeMode", imeModeValue ): JQuery;
    
    /** Get culture option of wijinputcore widget */
    wijinputcore(methodName: "option", optionName: "culture") ;
    /** Set culture option to wijinputcore widget */
    wijinputcore(methodName: "option", optionName: "culture", cultureValue ): JQuery;
    
    /** Get cultureCalendar option of wijinputcore widget */
    wijinputcore(methodName: "option", optionName: "cultureCalendar") ;
    /** Set cultureCalendar option to wijinputcore widget */
    wijinputcore(methodName: "option", optionName: "cultureCalendar", cultureCalendarValue ): JQuery;
    
    /** Get invalidClass option of wijinputcore widget */
    wijinputcore(methodName: "option", optionName: "invalidClass") ;
    /** Set invalidClass option to wijinputcore widget */
    wijinputcore(methodName: "option", optionName: "invalidClass", invalidClassValue ): JQuery;
    
    /** Get placeholder option of wijinputcore widget */
    wijinputcore(methodName: "option", optionName: "placeholder") ;
    /** Set placeholder option to wijinputcore widget */
    wijinputcore(methodName: "option", optionName: "placeholder", placeholderValue ): JQuery;
    
    /** Get hideEnter option of wijinputcore widget */
    wijinputcore(methodName: "option", optionName: "hideEnter") ;
    /** Set hideEnter option to wijinputcore widget */
    wijinputcore(methodName: "option", optionName: "hideEnter", hideEnterValue ): JQuery;
    
    /** Get readonly option of wijinputcore widget */
    wijinputcore(methodName: "option", optionName: "readonly") ;
    /** Set readonly option to wijinputcore widget */
    wijinputcore(methodName: "option", optionName: "readonly", readonlyValue ): JQuery;
    
    /** Get dropDownButtonAlign option of wijinputcore widget */
    wijinputcore(methodName: "option", optionName: "dropDownButtonAlign") ;
    /** Set dropDownButtonAlign option to wijinputcore widget */
    wijinputcore(methodName: "option", optionName: "dropDownButtonAlign", dropDownButtonAlignValue ): JQuery;
    
    /** Get showDropDownButton option of wijinputcore widget */
    wijinputcore(methodName: "option", optionName: "showDropDownButton") ;
    /** Set showDropDownButton option to wijinputcore widget */
    wijinputcore(methodName: "option", optionName: "showDropDownButton", showDropDownButtonValue ): JQuery;
    
    /** Get showSpinner option of wijinputcore widget */
    wijinputcore(methodName: "option", optionName: "showSpinner") ;
    /** Set showSpinner option to wijinputcore widget */
    wijinputcore(methodName: "option", optionName: "showSpinner", showSpinnerValue ): JQuery;
    
    /** Get blurOnLeftRightKey option of wijinputcore widget */
    wijinputcore(methodName: "option", optionName: "blurOnLeftRightKey") ;
    /** Set blurOnLeftRightKey option to wijinputcore widget */
    wijinputcore(methodName: "option", optionName: "blurOnLeftRightKey", blurOnLeftRightKeyValue ): JQuery;
    
    /** Get spinnerAlign option of wijinputcore widget */
    wijinputcore(methodName: "option", optionName: "spinnerAlign") ;
    /** Set spinnerAlign option to wijinputcore widget */
    wijinputcore(methodName: "option", optionName: "spinnerAlign", spinnerAlignValue ): JQuery;
    
    /** Get allowSpinLoop option of wijinputcore widget */
    wijinputcore(methodName: "option", optionName: "allowSpinLoop") ;
    /** Set allowSpinLoop option to wijinputcore widget */
    wijinputcore(methodName: "option", optionName: "allowSpinLoop", allowSpinLoopValue ): JQuery;
    
    /** Get pickers option of wijinputcore widget */
    wijinputcore(methodName: "option", optionName: "pickers") ;
    /** Set pickers option to wijinputcore widget */
    wijinputcore(methodName: "option", optionName: "pickers", pickersValue ): JQuery;
    
    /** Get dropDownOpen option(event) of wijinputcore widget */
    wijinputcore(methodName: "option", eventName: "dropDownOpen"): Function;
    /** Set dropDownOpen option(event) to wijinputcore widget */
    wijinputcore(methodName: "option", eventName: "dropDownOpen", dropDownOpenEventValue: (e?) => void): JQuery;
    
    /** Get dropDownClose option(event) of wijinputcore widget */
    wijinputcore(methodName: "option", eventName: "dropDownClose"): Function;
    /** Set dropDownClose option(event) to wijinputcore widget */
    wijinputcore(methodName: "option", eventName: "dropDownClose", dropDownCloseEventValue: (e?) => void): JQuery;
    
    /** Get initializing option(event) of wijinputcore widget */
    wijinputcore(methodName: "option", eventName: "initializing"): Function;
    /** Set initializing option(event) to wijinputcore widget */
    wijinputcore(methodName: "option", eventName: "initializing", initializingEventValue: (e?) => void): JQuery;
    
    /** Get initialized option(event) of wijinputcore widget */
    wijinputcore(methodName: "option", eventName: "initialized"): Function;
    /** Set initialized option(event) to wijinputcore widget */
    wijinputcore(methodName: "option", eventName: "initialized", initializedEventValue: (e?) => void): JQuery;
    
    /** Get dropDownButtonMouseDown option(event) of wijinputcore widget */
    wijinputcore(methodName: "option", eventName: "dropDownButtonMouseDown"): Function;
    /** Set dropDownButtonMouseDown option(event) to wijinputcore widget */
    wijinputcore(methodName: "option", eventName: "dropDownButtonMouseDown", dropDownButtonMouseDownEventValue: (e?) => void): JQuery;
    
    /** Get dropDownButtonMouseUp option(event) of wijinputcore widget */
    wijinputcore(methodName: "option", eventName: "dropDownButtonMouseUp"): Function;
    /** Set dropDownButtonMouseUp option(event) to wijinputcore widget */
    wijinputcore(methodName: "option", eventName: "dropDownButtonMouseUp", dropDownButtonMouseUpEventValue: (e?) => void): JQuery;
    
    /** Get textChanged option(event) of wijinputcore widget */
    wijinputcore(methodName: "option", eventName: "textChanged"): Function;
    /** Set textChanged option(event) to wijinputcore widget */
    wijinputcore(methodName: "option", eventName: "textChanged", textChangedEventValue: (e?, data?) => void): JQuery;
    
    /** Get invalidInput option(event) of wijinputcore widget */
    wijinputcore(methodName: "option", eventName: "invalidInput"): Function;
    /** Set invalidInput option(event) to wijinputcore widget */
    wijinputcore(methodName: "option", eventName: "invalidInput", invalidInputEventValue: (e?, data?) => void): JQuery;
    
    /** Get keyExit option(event) of wijinputcore widget */
    wijinputcore(methodName: "option", eventName: "keyExit"): Function;
    /** Set keyExit option(event) to wijinputcore widget */
    wijinputcore(methodName: "option", eventName: "keyExit", keyExitEventValue: (e?) => void): JQuery;
    
    
}

/** Definitions of wijinputdate widget */
interface JQuery {

    /** Initialize a wijinputdate widget */
    wijinputdate(): JQuery;
    /** Initialize a wijinputdate widget with the given options */
    wijinputdate(options: Object): JQuery;
    wijinputdate(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijinputdate widget */
    wijinputdate(methodName: "option", optionName: string): any;
    /** Set options to wijinputdate widget */
    wijinputdate(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijinputdate widget */
    wijinputdate(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Gets the text value when the container form is posted back to server. */
    wijinputdate(methodName: "getPostValue") ;
    
    /** Performs spin up by the active field and increment value. */
    wijinputdate(methodName: "spinUp") ;
    
    /** Performs spin down by the active field and increment value. */
    wijinputdate(methodName: "spinDown") ;
    
    /** Open the dropdown window. */
    wijinputdate(methodName: "drop") ;
    
    /** Set the focus to the widget. */
    wijinputdate(methodName: "focus") ;
    
    /** Determines whether the date is a null value.
      * @returns {bool}
      */
    wijinputdate(methodName: "isDateNull"): boolean;
    
    /** Selects a range of text in the widget.
      * @param {number} start Start of the range.
      * @param {number} end End of the range.
      * @example
      * // Select first two symbols in a wijinputdate
      * $(".selector").wijinputdate("selectText", 0, 2);
      */
    wijinputdate(methodName: "selectText", start?: any, end?: any) ;
    
    /** Get wijCSS option of wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "wijCSS") ;
    /** Set wijCSS option to wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "wijCSS", wijCSSValue ): JQuery;
    
    /** Get date option of wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "date") ;
    /** Set date option to wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "date", dateValue ): JQuery;
    
    /** Get minDate option of wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "minDate") ;
    /** Set minDate option to wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "minDate", minDateValue ): JQuery;
    
    /** Get maxDate option of wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "maxDate") ;
    /** Set maxDate option to wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "maxDate", maxDateValue ): JQuery;
    
    /** Get dateFormat option of wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "dateFormat") ;
    /** Set dateFormat option to wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "dateFormat", dateFormatValue ): JQuery;
    
    /** Get displayFormat option of wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "displayFormat") ;
    /** Set displayFormat option to wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "displayFormat", displayFormatValue ): JQuery;
    
    /** Get amDesignator option of wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "amDesignator") ;
    /** Set amDesignator option to wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "amDesignator", amDesignatorValue ): JQuery;
    
    /** Get pmDesignator option of wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "pmDesignator") ;
    /** Set pmDesignator option to wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "pmDesignator", pmDesignatorValue ): JQuery;
    
    /** Get midnightAs0 option of wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "midnightAs0") ;
    /** Set midnightAs0 option to wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "midnightAs0", midnightAs0Value ): JQuery;
    
    /** Get hour12As0 option of wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "hour12As0") ;
    /** Set hour12As0 option to wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "hour12As0", hour12As0Value ): JQuery;
    
    /** Get blurOnLastChar option of wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "blurOnLastChar") ;
    /** Set blurOnLastChar option to wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "blurOnLastChar", blurOnLastCharValue ): JQuery;
    
    /** Get blurOnLeftRightKey option of wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "blurOnLeftRightKey") ;
    /** Set blurOnLeftRightKey option to wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "blurOnLeftRightKey", blurOnLeftRightKeyValue ): JQuery;
    
    /** Get tabAction option of wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "tabAction") ;
    /** Set tabAction option to wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "tabAction", tabActionValue ): JQuery;
    
    /** Get startYear option of wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "startYear") ;
    /** Set startYear option to wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "startYear", startYearValue ): JQuery;
    
    /** Get promptChar option of wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "promptChar") ;
    /** Set promptChar option to wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "promptChar", promptCharValue ): JQuery;
    
    /** Get smartInputMode option of wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "smartInputMode") ;
    /** Set smartInputMode option to wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "smartInputMode", smartInputModeValue ): JQuery;
    
    /** Get activeField option of wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "activeField") ;
    /** Set activeField option to wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "activeField", activeFieldValue ): JQuery;
    
    /** Get keyDelay option of wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "keyDelay") ;
    /** Set keyDelay option to wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "keyDelay", keyDelayValue ): JQuery;
    
    /** Get autoNextField option of wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "autoNextField") ;
    /** Set autoNextField option to wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "autoNextField", autoNextFieldValue ): JQuery;
    
    /** Get popupPosition option of wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "popupPosition") ;
    /** Set popupPosition option to wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "popupPosition", popupPositionValue ): JQuery;
    
    /** Get highlightText option of wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "highlightText") ;
    /** Set highlightText option to wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "highlightText", highlightTextValue ): JQuery;
    
    /** Get increment option of wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "increment") ;
    /** Set increment option to wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "increment", incrementValue ): JQuery;
    
    /** Get imeMode option of wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "imeMode") ;
    /** Set imeMode option to wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "imeMode", imeModeValue ): JQuery;
    
    /** Get showDropDownButton option of wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "showDropDownButton") ;
    /** Set showDropDownButton option to wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "showDropDownButton", showDropDownButtonValue ): JQuery;
    
    /** Get showTrigger option of wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "showTrigger") ;
    /** Set showTrigger option to wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "showTrigger", showTriggerValue ): JQuery;
    
    /** Get pickers option of wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "pickers") ;
    /** Set pickers option to wijinputdate widget */
    wijinputdate(methodName: "option", optionName: "pickers", pickersValue ): JQuery;
    
    /** Get afterSlide option(event) of wijinputdate widget */
    wijinputdate(methodName: "option", eventName: "afterSlide"): Function;
    /** Set afterSlide option(event) to wijinputdate widget */
    wijinputdate(methodName: "option", eventName: "afterSlide", afterSlideEventValue: (e?) => void): JQuery;
    
    /** Get dateChanged option(event) of wijinputdate widget */
    wijinputdate(methodName: "option", eventName: "dateChanged"): Function;
    /** Set dateChanged option(event) to wijinputdate widget */
    wijinputdate(methodName: "option", eventName: "dateChanged", dateChangedEventValue: (e?, data?) => void): JQuery;
    
    /** Get spinUp option(event) of wijinputdate widget */
    wijinputdate(methodName: "option", eventName: "spinUp"): Function;
    /** Set spinUp option(event) to wijinputdate widget */
    wijinputdate(methodName: "option", eventName: "spinUp", spinUpEventValue: (e?) => void): JQuery;
    
    /** Get spinDown option(event) of wijinputdate widget */
    wijinputdate(methodName: "option", eventName: "spinDown"): Function;
    /** Set spinDown option(event) to wijinputdate widget */
    wijinputdate(methodName: "option", eventName: "spinDown", spinDownEventValue: (e?) => void): JQuery;
    
    /** Get valueBoundsExceeded option(event) of wijinputdate widget */
    wijinputdate(methodName: "option", eventName: "valueBoundsExceeded"): Function;
    /** Set valueBoundsExceeded option(event) to wijinputdate widget */
    wijinputdate(methodName: "option", eventName: "valueBoundsExceeded", valueBoundsExceededEventValue: (e?) => void): JQuery;
    
    
}

/** Definitions of wijinputmask widget */
interface JQuery {

    /** Initialize a wijinputmask widget */
    wijinputmask(): JQuery;
    /** Initialize a wijinputmask widget with the given options */
    wijinputmask(options: Object): JQuery;
    wijinputmask(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijinputmask widget */
    wijinputmask(methodName: "option", optionName: string): any;
    /** Set options to wijinputmask widget */
    wijinputmask(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijinputmask widget */
    wijinputmask(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Sets the text displayed in the input box.
      * @param text
      * @example
      * // This example sets text of a wijinputcore to "Hello"
      * $(".selector").wijinputcore("setText", "Hello");
      */
    wijinputmask(methodName: "setText", text: any) ;
    
    /** Gets the text displayed in the input box.
      * @returns {string}
      */
    wijinputmask(methodName: "getText") ;
    
    /** Selects a range of text in the widget.
      * @param {number} start Start of the range.
      * @param {number} end End of the range.
      * @example
      * // Select first two symbols in a wijinputmask
      * $(".selector").wijinputmask("selectText", 0, 2);
      */
    wijinputmask(methodName: "selectText", start?: any, end?: any) ;
    
    /** Gets the selected text. */
    wijinputmask(methodName: "getSelectedText") ;
    
    /** Gets the text value when the container 
      * form is posted back to server.
      */
    wijinputmask(methodName: "getPostValue") ;
    
    /** Determines whether the widget has the focus.
      * @returns {bool}
      */
    wijinputmask(methodName: "isFocused"): boolean;
    
    /** Get wijCSS option of wijinputmask widget */
    wijinputmask(methodName: "option", optionName: "wijCSS") ;
    /** Set wijCSS option to wijinputmask widget */
    wijinputmask(methodName: "option", optionName: "wijCSS", wijCSSValue ): JQuery;
    
    /** Get autoConvert option of wijinputmask widget */
    wijinputmask(methodName: "option", optionName: "autoConvert") ;
    /** Set autoConvert option to wijinputmask widget */
    wijinputmask(methodName: "option", optionName: "autoConvert", autoConvertValue ): JQuery;
    
    /** Get text option of wijinputmask widget */
    wijinputmask(methodName: "option", optionName: "text") ;
    /** Set text option to wijinputmask widget */
    wijinputmask(methodName: "option", optionName: "text", textValue ): JQuery;
    
    /** Get highlightText option of wijinputmask widget */
    wijinputmask(methodName: "option", optionName: "highlightText") ;
    /** Set highlightText option to wijinputmask widget */
    wijinputmask(methodName: "option", optionName: "highlightText", highlightTextValue ): JQuery;
    
    /** Get maskFormat option of wijinputmask widget */
    wijinputmask(methodName: "option", optionName: "maskFormat") ;
    /** Set maskFormat option to wijinputmask widget */
    wijinputmask(methodName: "option", optionName: "maskFormat", maskFormatValue ): JQuery;
    
    /** Get promptChar option of wijinputmask widget */
    wijinputmask(methodName: "option", optionName: "promptChar") ;
    /** Set promptChar option to wijinputmask widget */
    wijinputmask(methodName: "option", optionName: "promptChar", promptCharValue ): JQuery;
    
    /** Get hidePromptOnLeave option of wijinputmask widget */
    wijinputmask(methodName: "option", optionName: "hidePromptOnLeave") ;
    /** Set hidePromptOnLeave option to wijinputmask widget */
    wijinputmask(methodName: "option", optionName: "hidePromptOnLeave", hidePromptOnLeaveValue ): JQuery;
    
    /** Get resetOnPrompt option of wijinputmask widget */
    wijinputmask(methodName: "option", optionName: "resetOnPrompt") ;
    /** Set resetOnPrompt option to wijinputmask widget */
    wijinputmask(methodName: "option", optionName: "resetOnPrompt", resetOnPromptValue ): JQuery;
    
    /** Get allowPromptAsInput option of wijinputmask widget */
    wijinputmask(methodName: "option", optionName: "allowPromptAsInput") ;
    /** Set allowPromptAsInput option to wijinputmask widget */
    wijinputmask(methodName: "option", optionName: "allowPromptAsInput", allowPromptAsInputValue ): JQuery;
    
    /** Get passwordChar option of wijinputmask widget */
    wijinputmask(methodName: "option", optionName: "passwordChar") ;
    /** Set passwordChar option to wijinputmask widget */
    wijinputmask(methodName: "option", optionName: "passwordChar", passwordCharValue ): JQuery;
    
    /** Get resetOnSpace option of wijinputmask widget */
    wijinputmask(methodName: "option", optionName: "resetOnSpace") ;
    /** Set resetOnSpace option to wijinputmask widget */
    wijinputmask(methodName: "option", optionName: "resetOnSpace", resetOnSpaceValue ): JQuery;
    
    /** Get skipLiterals option of wijinputmask widget */
    wijinputmask(methodName: "option", optionName: "skipLiterals") ;
    /** Set skipLiterals option to wijinputmask widget */
    wijinputmask(methodName: "option", optionName: "skipLiterals", skipLiteralsValue ): JQuery;
    
    /** Get blurOnLastChar option of wijinputmask widget */
    wijinputmask(methodName: "option", optionName: "blurOnLastChar") ;
    /** Set blurOnLastChar option to wijinputmask widget */
    wijinputmask(methodName: "option", optionName: "blurOnLastChar", blurOnLastCharValue ): JQuery;
    
    /** Get tabAction option of wijinputmask widget */
    wijinputmask(methodName: "option", optionName: "tabAction") ;
    /** Set tabAction option to wijinputmask widget */
    wijinputmask(methodName: "option", optionName: "tabAction", tabActionValue ): JQuery;
    
    /** Get imeMode option of wijinputmask widget */
    wijinputmask(methodName: "option", optionName: "imeMode") ;
    /** Set imeMode option to wijinputmask widget */
    wijinputmask(methodName: "option", optionName: "imeMode", imeModeValue ): JQuery;
    
    
}

/** Definitions of wijinputnumber widget */
interface JQuery {

    /** Initialize a wijinputnumber widget */
    wijinputnumber(): JQuery;
    /** Initialize a wijinputnumber widget with the given options */
    wijinputnumber(options: Object): JQuery;
    wijinputnumber(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijinputnumber widget */
    wijinputnumber(methodName: "option", optionName: string): any;
    /** Set options to wijinputnumber widget */
    wijinputnumber(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijinputnumber widget */
    wijinputnumber(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Set the focus to the widget. */
    wijinputnumber(methodName: "focus") ;
    
    /** Gets the value. */
    wijinputnumber(methodName: "getValue") ;
    
    /** Sets the value.
      * @param val
      * @param exact
      * @returns {bool}
      * @example
      * // set value of a wijinputnumber to 10
      * $(".selector").wijinputnumber("setValue", 10, true);
      */
    wijinputnumber(methodName: "setValue", val: any, exact: any): boolean;
    
    /** Determines whether the value is in null state.
      * @returns {bool}
      */
    wijinputnumber(methodName: "isValueNull"): boolean;
    
    /** Gets the text value when the container form is posted back to server. */
    wijinputnumber(methodName: "getPostValue") ;
    
    /** Performs spin up by the specified field and increment value. */
    wijinputnumber(methodName: "spinUp") ;
    
    /** Performs spin down by the specified field and increment value. */
    wijinputnumber(methodName: "spinDown") ;
    
    /** Get wijCSS option of wijinputnumber widget */
    wijinputnumber(methodName: "option", optionName: "wijCSS") ;
    /** Set wijCSS option to wijinputnumber widget */
    wijinputnumber(methodName: "option", optionName: "wijCSS", wijCSSValue ): JQuery;
    
    /** Get type option of wijinputnumber widget */
    wijinputnumber(methodName: "option", optionName: "type") ;
    /** Set type option to wijinputnumber widget */
    wijinputnumber(methodName: "option", optionName: "type", typeValue ): JQuery;
    
    /** Get value option of wijinputnumber widget */
    wijinputnumber(methodName: "option", optionName: "value") ;
    /** Set value option to wijinputnumber widget */
    wijinputnumber(methodName: "option", optionName: "value", valueValue ): JQuery;
    
    /** Get minValue option of wijinputnumber widget */
    wijinputnumber(methodName: "option", optionName: "minValue") ;
    /** Set minValue option to wijinputnumber widget */
    wijinputnumber(methodName: "option", optionName: "minValue", minValueValue ): JQuery;
    
    /** Get maxValue option of wijinputnumber widget */
    wijinputnumber(methodName: "option", optionName: "maxValue") ;
    /** Set maxValue option to wijinputnumber widget */
    wijinputnumber(methodName: "option", optionName: "maxValue", maxValueValue ): JQuery;
    
    /** Get showGroup option of wijinputnumber widget */
    wijinputnumber(methodName: "option", optionName: "showGroup") ;
    /** Set showGroup option to wijinputnumber widget */
    wijinputnumber(methodName: "option", optionName: "showGroup", showGroupValue ): JQuery;
    
    /** Get decimalPlaces option of wijinputnumber widget */
    wijinputnumber(methodName: "option", optionName: "decimalPlaces") ;
    /** Set decimalPlaces option to wijinputnumber widget */
    wijinputnumber(methodName: "option", optionName: "decimalPlaces", decimalPlacesValue ): JQuery;
    
    /** Get increment option of wijinputnumber widget */
    wijinputnumber(methodName: "option", optionName: "increment") ;
    /** Set increment option to wijinputnumber widget */
    wijinputnumber(methodName: "option", optionName: "increment", incrementValue ): JQuery;
    
    /** Get currencySymbol option of wijinputnumber widget */
    wijinputnumber(methodName: "option", optionName: "currencySymbol") ;
    /** Set currencySymbol option to wijinputnumber widget */
    wijinputnumber(methodName: "option", optionName: "currencySymbol", currencySymbolValue ): JQuery;
    
    /** Get negativeClass option of wijinputnumber widget */
    wijinputnumber(methodName: "option", optionName: "negativeClass") ;
    /** Set negativeClass option to wijinputnumber widget */
    wijinputnumber(methodName: "option", optionName: "negativeClass", negativeClassValue ): JQuery;
    
    /** Get negativePrefix option of wijinputnumber widget */
    wijinputnumber(methodName: "option", optionName: "negativePrefix") ;
    /** Set negativePrefix option to wijinputnumber widget */
    wijinputnumber(methodName: "option", optionName: "negativePrefix", negativePrefixValue ): JQuery;
    
    /** Get negativeSuffix option of wijinputnumber widget */
    wijinputnumber(methodName: "option", optionName: "negativeSuffix") ;
    /** Set negativeSuffix option to wijinputnumber widget */
    wijinputnumber(methodName: "option", optionName: "negativeSuffix", negativeSuffixValue ): JQuery;
    
    /** Get positivePrefix option of wijinputnumber widget */
    wijinputnumber(methodName: "option", optionName: "positivePrefix") ;
    /** Set positivePrefix option to wijinputnumber widget */
    wijinputnumber(methodName: "option", optionName: "positivePrefix", positivePrefixValue ): JQuery;
    
    /** Get positiveSuffix option of wijinputnumber widget */
    wijinputnumber(methodName: "option", optionName: "positiveSuffix") ;
    /** Set positiveSuffix option to wijinputnumber widget */
    wijinputnumber(methodName: "option", optionName: "positiveSuffix", positiveSuffixValue ): JQuery;
    
    /** Get highlightText option of wijinputnumber widget */
    wijinputnumber(methodName: "option", optionName: "highlightText") ;
    /** Set highlightText option to wijinputnumber widget */
    wijinputnumber(methodName: "option", optionName: "highlightText", highlightTextValue ): JQuery;
    
    /** Get valueChanged option(event) of wijinputnumber widget */
    wijinputnumber(methodName: "option", eventName: "valueChanged"): Function;
    /** Set valueChanged option(event) to wijinputnumber widget */
    wijinputnumber(methodName: "option", eventName: "valueChanged", valueChangedEventValue: (e?, data?) => void): JQuery;
    
    /** Get spinUp option(event) of wijinputnumber widget */
    wijinputnumber(methodName: "option", eventName: "spinUp"): Function;
    /** Set spinUp option(event) to wijinputnumber widget */
    wijinputnumber(methodName: "option", eventName: "spinUp", spinUpEventValue: (e?) => void): JQuery;
    
    /** Get spinDown option(event) of wijinputnumber widget */
    wijinputnumber(methodName: "option", eventName: "spinDown"): Function;
    /** Set spinDown option(event) to wijinputnumber widget */
    wijinputnumber(methodName: "option", eventName: "spinDown", spinDownEventValue: (e?) => void): JQuery;
    
    /** Get valueBoundsExceeded option(event) of wijinputnumber widget */
    wijinputnumber(methodName: "option", eventName: "valueBoundsExceeded"): Function;
    /** Set valueBoundsExceeded option(event) to wijinputnumber widget */
    wijinputnumber(methodName: "option", eventName: "valueBoundsExceeded", valueBoundsExceededEventValue: (e?) => void): JQuery;
    
    
}

/** Definitions of wijinputtext widget */
interface JQuery {

    /** Initialize a wijinputtext widget */
    wijinputtext(): JQuery;
    /** Initialize a wijinputtext widget with the given options */
    wijinputtext(options: Object): JQuery;
    wijinputtext(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijinputtext widget */
    wijinputtext(methodName: "option", optionName: string): any;
    /** Set options to wijinputtext widget */
    wijinputtext(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijinputtext widget */
    wijinputtext(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Remove the functionality completely. This will return the element back to its pre-init state. */
    wijinputtext(methodName: "destroy") ;
    
    /** Gets the selected text.
      * @returns {string}
      */
    wijinputtext(methodName: "getSelectedText") ;
    
    /** Selects a range of text in the widget.
      * @param {number} start Start of the range.
      * @param {number} end End of the range.
      * @example
      * // Select first two symbols in a wijinputtext
      * $(".selector").wijinputtext("selectText", 0, 2);
      */
    wijinputtext(methodName: "selectText", start?: any, end?: any) ;
    
    /** Get autoConvert option of wijinputtext widget */
    wijinputtext(methodName: "option", optionName: "autoConvert") ;
    /** Set autoConvert option to wijinputtext widget */
    wijinputtext(methodName: "option", optionName: "autoConvert", autoConvertValue ): JQuery;
    
    /** Get blurOnLastChar option of wijinputtext widget */
    wijinputtext(methodName: "option", optionName: "blurOnLastChar") ;
    /** Set blurOnLastChar option to wijinputtext widget */
    wijinputtext(methodName: "option", optionName: "blurOnLastChar", blurOnLastCharValue ): JQuery;
    
    /** Get blurOnLeftRightKey option of wijinputtext widget */
    wijinputtext(methodName: "option", optionName: "blurOnLeftRightKey") ;
    /** Set blurOnLeftRightKey option to wijinputtext widget */
    wijinputtext(methodName: "option", optionName: "blurOnLeftRightKey", blurOnLeftRightKeyValue ): JQuery;
    
    /** Get ellipsis option of wijinputtext widget */
    wijinputtext(methodName: "option", optionName: "ellipsis") ;
    /** Set ellipsis option to wijinputtext widget */
    wijinputtext(methodName: "option", optionName: "ellipsis", ellipsisValue ): JQuery;
    
    /** Get ellipsisString option of wijinputtext widget */
    wijinputtext(methodName: "option", optionName: "ellipsisString") ;
    /** Set ellipsisString option to wijinputtext widget */
    wijinputtext(methodName: "option", optionName: "ellipsisString", ellipsisStringValue ): JQuery;
    
    /** Get showOverflowTip option of wijinputtext widget */
    wijinputtext(methodName: "option", optionName: "showOverflowTip") ;
    /** Set showOverflowTip option to wijinputtext widget */
    wijinputtext(methodName: "option", optionName: "showOverflowTip", showOverflowTipValue ): JQuery;
    
    /** Get highlightText option of wijinputtext widget */
    wijinputtext(methodName: "option", optionName: "highlightText") ;
    /** Set highlightText option to wijinputtext widget */
    wijinputtext(methodName: "option", optionName: "highlightText", highlightTextValue ): JQuery;
    
    /** Get format option of wijinputtext widget */
    wijinputtext(methodName: "option", optionName: "format") ;
    /** Set format option to wijinputtext widget */
    wijinputtext(methodName: "option", optionName: "format", formatValue ): JQuery;
    
    /** Get imeMode option of wijinputtext widget */
    wijinputtext(methodName: "option", optionName: "imeMode") ;
    /** Set imeMode option to wijinputtext widget */
    wijinputtext(methodName: "option", optionName: "imeMode", imeModeValue ): JQuery;
    
    /** Get lengthAsByte option of wijinputtext widget */
    wijinputtext(methodName: "option", optionName: "lengthAsByte") ;
    /** Set lengthAsByte option to wijinputtext widget */
    wijinputtext(methodName: "option", optionName: "lengthAsByte", lengthAsByteValue ): JQuery;
    
    /** Get maxLength option of wijinputtext widget */
    wijinputtext(methodName: "option", optionName: "maxLength") ;
    /** Set maxLength option to wijinputtext widget */
    wijinputtext(methodName: "option", optionName: "maxLength", maxLengthValue ): JQuery;
    
    /** Get maxLineCount option of wijinputtext widget */
    wijinputtext(methodName: "option", optionName: "maxLineCount") ;
    /** Set maxLineCount option to wijinputtext widget */
    wijinputtext(methodName: "option", optionName: "maxLineCount", maxLineCountValue ): JQuery;
    
    /** Get countWrappedLine option of wijinputtext widget */
    wijinputtext(methodName: "option", optionName: "countWrappedLine") ;
    /** Set countWrappedLine option to wijinputtext widget */
    wijinputtext(methodName: "option", optionName: "countWrappedLine", countWrappedLineValue ): JQuery;
    
    /** Get passwordChar option of wijinputtext widget */
    wijinputtext(methodName: "option", optionName: "passwordChar") ;
    /** Set passwordChar option to wijinputtext widget */
    wijinputtext(methodName: "option", optionName: "passwordChar", passwordCharValue ): JQuery;
    
    /** Get text option of wijinputtext widget */
    wijinputtext(methodName: "option", optionName: "text") ;
    /** Set text option to wijinputtext widget */
    wijinputtext(methodName: "option", optionName: "text", textValue ): JQuery;
    
    /** Get readingImeStringOutput option(event) of wijinputtext widget */
    wijinputtext(methodName: "option", eventName: "readingImeStringOutput"): Function;
    /** Set readingImeStringOutput option(event) to wijinputtext widget */
    wijinputtext(methodName: "option", eventName: "readingImeStringOutput", readingImeStringOutputEventValue: (e?, data?) => void): JQuery;
    
    
}

/** Definitions of wijlightbox widget */
interface JQuery {

    /** Initialize a wijlightbox widget */
    wijlightbox(): JQuery;
    /** Initialize a wijlightbox widget with the given options */
    wijlightbox(options: Object): JQuery;
    wijlightbox(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijlightbox widget */
    wijlightbox(methodName: "option", optionName: string): any;
    /** Set options to wijlightbox widget */
    wijlightbox(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijlightbox widget */
    wijlightbox(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Destroys wijlightbox widget and reset the DOM element. */
    wijlightbox(methodName: "destroy") ;
    
    /** Shows the content in specified index.
      * @param {number} index The zero-based index of the picture to show.
      * @returns {wijlightbox}
      * @example
      * $("#id").wijlightbox('show');
      */
    wijlightbox(methodName: "show", index: any) ;
    
    /** Moves to the next panel.
      * @returns {bool}
      */
    wijlightbox(methodName: "next"): boolean;
    
    /** Moves to the previous panel.
      * @returns {bool}
      */
    wijlightbox(methodName: "back"): boolean;
    
    /** Adjust the position of lightbox according to the "position" option set it originally to a new location. .
      * It is usually called after window resized.
      */
    wijlightbox(methodName: "adjustPosition") ;
    
    /** Determines whether the lightbox is currently displaying images automatically.See the play method for more information.
      * @returns {bool} A value that indicate whether it is playing.
      */
    wijlightbox(methodName: "isPlaying"): boolean;
    
    /** Starts displaying the images in order automatically.
      * @returns {bool}
      */
    wijlightbox(methodName: "play"): boolean;
    
    /** Stops the slide playing mode. */
    wijlightbox(methodName: "stop") ;
    
    /** Get textPosition option of wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "textPosition") ;
    /** Set textPosition option to wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "textPosition", textPositionValue ): JQuery;
    
    /** Get width option of wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "width") ;
    /** Set width option to wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "width", widthValue ): JQuery;
    
    /** Get height option of wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "height") ;
    /** Set height option to wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "height", heightValue ): JQuery;
    
    /** Get autoSize option of wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "autoSize") ;
    /** Set autoSize option to wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "autoSize", autoSizeValue ): JQuery;
    
    /** Get player option of wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "player") ;
    /** Set player option to wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "player", playerValue ): JQuery;
    
    /** Get groupItems option of wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "groupItems") ;
    /** Set groupItems option to wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "groupItems", groupItemsValue ): JQuery;
    
    /** Get rootUrl option of wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "rootUrl") ;
    /** Set rootUrl option to wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "rootUrl", rootUrlValue ): JQuery;
    
    /** Get ctrlButtons option of wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "ctrlButtons") ;
    /** Set ctrlButtons option to wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "ctrlButtons", ctrlButtonsValue ): JQuery;
    
    /** Get dialogButtons option of wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "dialogButtons") ;
    /** Set dialogButtons option to wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "dialogButtons", dialogButtonsValue ): JQuery;
    
    /** Get counterType option of wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "counterType") ;
    /** Set counterType option to wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "counterType", counterTypeValue ): JQuery;
    
    /** Get counterFormat option of wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "counterFormat") ;
    /** Set counterFormat option to wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "counterFormat", counterFormatValue ): JQuery;
    
    /** Get counterLimit option of wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "counterLimit") ;
    /** Set counterLimit option to wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "counterLimit", counterLimitValue ): JQuery;
    
    /** Get showCounter option of wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "showCounter") ;
    /** Set showCounter option to wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "showCounter", showCounterValue ): JQuery;
    
    /** Get showNavButtons option of wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "showNavButtons") ;
    /** Set showNavButtons option to wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "showNavButtons", showNavButtonsValue ): JQuery;
    
    /** Get showTimer option of wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "showTimer") ;
    /** Set showTimer option to wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "showTimer", showTimerValue ): JQuery;
    
    /** Get controlsPosition option of wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "controlsPosition") ;
    /** Set controlsPosition option to wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "controlsPosition", controlsPositionValue ): JQuery;
    
    /** Get showControlsOnHover option of wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "showControlsOnHover") ;
    /** Set showControlsOnHover option to wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "showControlsOnHover", showControlsOnHoverValue ): JQuery;
    
    /** Get clickPause option of wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "clickPause") ;
    /** Set clickPause option to wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "clickPause", clickPauseValue ): JQuery;
    
    /** Get keyNav option of wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "keyNav") ;
    /** Set keyNav option to wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "keyNav", keyNavValue ): JQuery;
    
    /** Get modal option of wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "modal") ;
    /** Set modal option to wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "modal", modalValue ): JQuery;
    
    /** Get position option of wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "position") ;
    /** Set position option to wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "position", positionValue ): JQuery;
    
    /** Get zIndex option of wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "zIndex") ;
    /** Set zIndex option to wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "zIndex", zIndexValue ): JQuery;
    
    /** Get closeOnEscape option of wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "closeOnEscape") ;
    /** Set closeOnEscape option to wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "closeOnEscape", closeOnEscapeValue ): JQuery;
    
    /** Get closeOnOuterClick option of wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "closeOnOuterClick") ;
    /** Set closeOnOuterClick option to wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "closeOnOuterClick", closeOnOuterClickValue ): JQuery;
    
    /** Get autoPlay option of wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "autoPlay") ;
    /** Set autoPlay option to wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "autoPlay", autoPlayValue ): JQuery;
    
    /** Get delay option of wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "delay") ;
    /** Set delay option to wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "delay", delayValue ): JQuery;
    
    /** Get loop option of wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "loop") ;
    /** Set loop option to wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "loop", loopValue ): JQuery;
    
    /** Get cookie option of wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "cookie") ;
    /** Set cookie option to wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "cookie", cookieValue ): JQuery;
    
    /** Get transAnimation option of wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "transAnimation") ;
    /** Set transAnimation option to wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "transAnimation", transAnimationValue ): JQuery;
    
    /** Get slideDirection option of wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "slideDirection") ;
    /** Set slideDirection option to wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "slideDirection", slideDirectionValue ): JQuery;
    
    /** Get resizeAnimation option of wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "resizeAnimation") ;
    /** Set resizeAnimation option to wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "resizeAnimation", resizeAnimationValue ): JQuery;
    
    /** Get textShowOption option of wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "textShowOption") ;
    /** Set textShowOption option to wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "textShowOption", textShowOptionValue ): JQuery;
    
    /** Get textHideOption option of wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "textHideOption") ;
    /** Set textHideOption option to wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "textHideOption", textHideOptionValue ): JQuery;
    
    /** Get showMovieControls option of wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "showMovieControls") ;
    /** Set showMovieControls option to wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "showMovieControls", showMovieControlsValue ): JQuery;
    
    /** Get autoPlayMovies option of wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "autoPlayMovies") ;
    /** Set autoPlayMovies option to wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "autoPlayMovies", autoPlayMoviesValue ): JQuery;
    
    /** Get flashParams option of wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "flashParams") ;
    /** Set flashParams option to wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "flashParams", flashParamsValue ): JQuery;
    
    /** Get flashVars option of wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "flashVars") ;
    /** Set flashVars option to wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "flashVars", flashVarsValue ): JQuery;
    
    /** Get flashVersion option of wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "flashVersion") ;
    /** Set flashVersion option to wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "flashVersion", flashVersionValue ): JQuery;
    
    /** Get flvPlayer option of wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "flvPlayer") ;
    /** Set flvPlayer option to wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "flvPlayer", flvPlayerValue ): JQuery;
    
    /** Get flashInstall option of wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "flashInstall") ;
    /** Set flashInstall option to wijlightbox widget */
    wijlightbox(methodName: "option", optionName: "flashInstall", flashInstallValue ): JQuery;
    
    /** Get beforeShow option(event) of wijlightbox widget */
    wijlightbox(methodName: "option", eventName: "beforeShow"): Function;
    /** Set beforeShow option(event) to wijlightbox widget */
    wijlightbox(methodName: "option", eventName: "beforeShow", beforeShowEventValue: (e?) => void): JQuery;
    
    /** Get show option(event) of wijlightbox widget */
    wijlightbox(methodName: "option", eventName: "show"): Function;
    /** Set show option(event) to wijlightbox widget */
    wijlightbox(methodName: "option", eventName: "show", showEventValue: (e?) => void): JQuery;
    
    /** Get open option(event) of wijlightbox widget */
    wijlightbox(methodName: "option", eventName: "open"): Function;
    /** Set open option(event) to wijlightbox widget */
    wijlightbox(methodName: "option", eventName: "open", openEventValue: (e?) => void): JQuery;
    
    /** Get beforeClose option(event) of wijlightbox widget */
    wijlightbox(methodName: "option", eventName: "beforeClose"): Function;
    /** Set beforeClose option(event) to wijlightbox widget */
    wijlightbox(methodName: "option", eventName: "beforeClose", beforeCloseEventValue: (e?) => void): JQuery;
    
    /** Get close option(event) of wijlightbox widget */
    wijlightbox(methodName: "option", eventName: "close"): Function;
    /** Set close option(event) to wijlightbox widget */
    wijlightbox(methodName: "option", eventName: "close", closeEventValue: (e?) => void): JQuery;
    
    
}

/** Definitions of wijlineargauge widget */
interface JQuery {

    /** Initialize a wijlineargauge widget */
    wijlineargauge(): JQuery;
    /** Initialize a wijlineargauge widget with the given options */
    wijlineargauge(options: Object): JQuery;
    wijlineargauge(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijlineargauge widget */
    wijlineargauge(methodName: "option", optionName: string): any;
    /** Set options to wijlineargauge widget */
    wijlineargauge(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijlineargauge widget */
    wijlineargauge(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Remove the functionality completely. This will return the element back to its pre-init state. */
    wijlineargauge(methodName: "destroy") ;
    
    /** Get orientation option of wijlineargauge widget */
    wijlineargauge(methodName: "option", optionName: "orientation") ;
    /** Set orientation option to wijlineargauge widget */
    wijlineargauge(methodName: "option", optionName: "orientation", orientationValue ): JQuery;
    
    /** Get xAxisLocation option of wijlineargauge widget */
    wijlineargauge(methodName: "option", optionName: "xAxisLocation") ;
    /** Set xAxisLocation option to wijlineargauge widget */
    wijlineargauge(methodName: "option", optionName: "xAxisLocation", xAxisLocationValue ): JQuery;
    
    /** Get xAxisLength option of wijlineargauge widget */
    wijlineargauge(methodName: "option", optionName: "xAxisLength") ;
    /** Set xAxisLength option to wijlineargauge widget */
    wijlineargauge(methodName: "option", optionName: "xAxisLength", xAxisLengthValue ): JQuery;
    
    /** Get yAxisLocation option of wijlineargauge widget */
    wijlineargauge(methodName: "option", optionName: "yAxisLocation") ;
    /** Set yAxisLocation option to wijlineargauge widget */
    wijlineargauge(methodName: "option", optionName: "yAxisLocation", yAxisLocationValue ): JQuery;
    
    /** Get width option of wijlineargauge widget */
    wijlineargauge(methodName: "option", optionName: "width") ;
    /** Set width option to wijlineargauge widget */
    wijlineargauge(methodName: "option", optionName: "width", widthValue ): JQuery;
    
    /** Get height option of wijlineargauge widget */
    wijlineargauge(methodName: "option", optionName: "height") ;
    /** Set height option to wijlineargauge widget */
    wijlineargauge(methodName: "option", optionName: "height", heightValue ): JQuery;
    
    /** Get pointer option of wijlineargauge widget */
    wijlineargauge(methodName: "option", optionName: "pointer") ;
    /** Set pointer option to wijlineargauge widget */
    wijlineargauge(methodName: "option", optionName: "pointer", pointerValue ): JQuery;
    
    /** Get marginLeft option of wijlineargauge widget */
    wijlineargauge(methodName: "option", optionName: "marginLeft") ;
    /** Set marginLeft option to wijlineargauge widget */
    wijlineargauge(methodName: "option", optionName: "marginLeft", marginLeftValue ): JQuery;
    
    /** Get marginTop option of wijlineargauge widget */
    wijlineargauge(methodName: "option", optionName: "marginTop") ;
    /** Set marginTop option to wijlineargauge widget */
    wijlineargauge(methodName: "option", optionName: "marginTop", marginTopValue ): JQuery;
    
    /** Get marginRight option of wijlineargauge widget */
    wijlineargauge(methodName: "option", optionName: "marginRight") ;
    /** Set marginRight option to wijlineargauge widget */
    wijlineargauge(methodName: "option", optionName: "marginRight", marginRightValue ): JQuery;
    
    /** Get marginBottom option of wijlineargauge widget */
    wijlineargauge(methodName: "option", optionName: "marginBottom") ;
    /** Set marginBottom option to wijlineargauge widget */
    wijlineargauge(methodName: "option", optionName: "marginBottom", marginBottomValue ): JQuery;
    
    
}

/** Definitions of wijlinechart widget */
interface JQuery {

    /** Initialize a wijlinechart widget */
    wijlinechart(): JQuery;
    /** Initialize a wijlinechart widget with the given options */
    wijlinechart(options: Object): JQuery;
    wijlinechart(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijlinechart widget */
    wijlinechart(methodName: "option", optionName: string): any;
    /** Set options to wijlinechart widget */
    wijlinechart(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijlinechart widget */
    wijlinechart(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Remove the functionality completely. 
      * This will return the element back to its pre-init state.
      */
    wijlinechart(methodName: "destroy") ;
    
    /** Returns reference to raphael's path object for the line data with given index.
      * @param {number} lineIndex The index of the series data for which to return lines.
      * @returns {Raphael Element} Reference to raphael element object.
      * @example
      * //Get the first line.
      * $("#linechart").wijlinechart("getLinePath", 0);
      */
    wijlinechart(methodName: "getLinePath", lineIndex: any): RaphaelElement;
    
    /** Returns reference to set of the raphael's objects
      * what represents markers for the line data with given index.
      * @param {number} lineIndex The index of the series data for which to return markers.
      * @returns {Raphael Element} Reference to raphael element object.
      * @example
      * //Get the markers of the first line.
      * $("#linechart").wijlinechart("getLineMarkers", 0);
      */
    wijlinechart(methodName: "getLineMarkers", lineIndex: any): RaphaelElement;
    
    /** Get stacked option of wijlinechart widget */
    wijlinechart(methodName: "option", optionName: "stacked") ;
    /** Set stacked option to wijlinechart widget */
    wijlinechart(methodName: "option", optionName: "stacked", stackedValue ): JQuery;
    
    /** Get hole option of wijlinechart widget */
    wijlinechart(methodName: "option", optionName: "hole") ;
    /** Set hole option to wijlinechart widget */
    wijlinechart(methodName: "option", optionName: "hole", holeValue ): JQuery;
    
    /** Get type option of wijlinechart widget */
    wijlinechart(methodName: "option", optionName: "type") ;
    /** Set type option to wijlinechart widget */
    wijlinechart(methodName: "option", optionName: "type", typeValue ): JQuery;
    
    /** Get animation option of wijlinechart widget */
    wijlinechart(methodName: "option", optionName: "animation") ;
    /** Set animation option to wijlinechart widget */
    wijlinechart(methodName: "option", optionName: "animation", animationValue ): JQuery;
    
    /** Get seriesTransition option of wijlinechart widget */
    wijlinechart(methodName: "option", optionName: "seriesTransition") ;
    /** Set seriesTransition option to wijlinechart widget */
    wijlinechart(methodName: "option", optionName: "seriesTransition", seriesTransitionValue ): JQuery;
    
    /** Get mouseDown option(event) of wijlinechart widget */
    wijlinechart(methodName: "option", eventName: "mouseDown"): Function;
    /** Set mouseDown option(event) to wijlinechart widget */
    wijlinechart(methodName: "option", eventName: "mouseDown", mouseDownEventValue: (e?, args?) => void): JQuery;
    
    /** Get mouseUp option(event) of wijlinechart widget */
    wijlinechart(methodName: "option", eventName: "mouseUp"): Function;
    /** Set mouseUp option(event) to wijlinechart widget */
    wijlinechart(methodName: "option", eventName: "mouseUp", mouseUpEventValue: (e?, args?) => void): JQuery;
    
    /** Get mouseOver option(event) of wijlinechart widget */
    wijlinechart(methodName: "option", eventName: "mouseOver"): Function;
    /** Set mouseOver option(event) to wijlinechart widget */
    wijlinechart(methodName: "option", eventName: "mouseOver", mouseOverEventValue: (e?, args?) => void): JQuery;
    
    /** Get mouseOut option(event) of wijlinechart widget */
    wijlinechart(methodName: "option", eventName: "mouseOut"): Function;
    /** Set mouseOut option(event) to wijlinechart widget */
    wijlinechart(methodName: "option", eventName: "mouseOut", mouseOutEventValue: (e?, args?) => void): JQuery;
    
    /** Get mouseMove option(event) of wijlinechart widget */
    wijlinechart(methodName: "option", eventName: "mouseMove"): Function;
    /** Set mouseMove option(event) to wijlinechart widget */
    wijlinechart(methodName: "option", eventName: "mouseMove", mouseMoveEventValue: (e?, args?) => void): JQuery;
    
    /** Get click option(event) of wijlinechart widget */
    wijlinechart(methodName: "option", eventName: "click"): Function;
    /** Set click option(event) to wijlinechart widget */
    wijlinechart(methodName: "option", eventName: "click", clickEventValue: (e?, args?) => void): JQuery;
    
    
}

/** Definitions of wijlist widget */
interface JQuery {

    /** Initialize a wijlist widget */
    wijlist(): JQuery;
    /** Initialize a wijlist widget with the given options */
    wijlist(options: Object): JQuery;
    wijlist(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijlist widget */
    wijlist(methodName: "option", optionName: string): any;
    /** Set options to wijlist widget */
    wijlist(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijlist widget */
    wijlist(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** The removeAll method removes all items from the wijlist. */
    wijlist(methodName: "removeAll") ;
    
    /** The addItem method adds the specified item to the list by index.
      * @param {object} item Indicates the listItem to add.
      * @param {number} index Index of the added item.
      * @remarks
      * If the index is undefined, then the item becomes the last list item.
      */
    wijlist(methodName: "addItem", item: any, index: any) ;
    
    /** The removeItem method removes the specified item from the wijlist.
      * @param {object} item Indicates the item to be removed.
      */
    wijlist(methodName: "removeItem", item: any) ;
    
    /** The indexOf method returns the index of the specified list item.
      * @param {object} item Indicates the specified item.
      * @returns {number} the index of first matched specified item.
      */
    wijlist(methodName: "indexOf", item: any) ;
    
    /** Allows the user to find the index of first matched list item by item's label.
      * @param {string} label Indicates the specified item's label that used to search.
      * @returns {number} the index of first matched list item.
      * @remarks
      * If there is no matched list item, it will return -1.
      */
    wijlist(methodName: "findIndexByLabel", label: any) ;
    
    /** The removeItemAt method removes the specified list item by index from the wijlist widget.
      * @param {number} index The zero-based index of the list item to remove.
      */
    wijlist(methodName: "removeItemAt", index: any) ;
    
    /** The method sets the items for the wijlist to render.
      * @param {array} items Items to be rendered by the wijlist.
      */
    wijlist(methodName: "setItems", items: any[]) ;
    
    /** The popItem method removes the last item from the wijlist widget. */
    wijlist(methodName: "popItem") ;
    
    /** The method gets the jQuery object reference of the &lt;ul&gt; element of the wijlist widget.
      * @returns {object} the ul JQuery reference.
      */
    wijlist(methodName: "getList") ;
    
    /** Get the select item(s).
      * @returns {array|Object} items array for multiple selection mode, item object for single selection mode.
      * @remarks
      * It will return item object in single selection mode, and items array in multiple selection mode.
      * If no item is selected, it will return null in single selection mode, and empty array in multiple selection mode.
      */
    wijlist(methodName: "getSelectedItems") ;
    
    /** Remove the functionality completely. This will return the element back to its pre-init state. */
    wijlist(methodName: "destroy") ;
    
    /** The activate method activates an item in the wijlist and allows the list to scroll to the item.
      * @param {object} event The event object that activates the item.
      * @param {object} item The listItem to activate.
      * @param {bool} scrollTo Indicates whether to scroll the activated item into view.
      */
    wijlist(methodName: "activate", event: any, item: any, scrollTo: boolean) ;
    
    /** The deactivate method deactivates the activated item in the wijlist widget. */
    wijlist(methodName: "deactivate") ;
    
    /** The next method moves focus to the next list item.
      * @param {object} event Event will raise activation.
      */
    wijlist(methodName: "next", event: any) ;
    
    /** The nextPage method turns to the next page of the list. */
    wijlist(methodName: "nextPage") ;
    
    /** The previous method moves focus to the previous list item.
      * @param {object} event Event will raise activation.
      */
    wijlist(methodName: "previous", event: any) ;
    
    /** The previous method moves focus to the previous list item. */
    wijlist(methodName: "previousPage") ;
    
    /** The first method tests whether the focus is at the first list item.
      * @returns {bool}
      */
    wijlist(methodName: "first"): boolean;
    
    /** The last method tests whether the last list item has focus.
      * @returns {bool}
      */
    wijlist(methodName: "last"): boolean;
    
    /** The getItems method allows the user to find list items by index or by value.
      * @param {array|number|string} indices the indices of the items.
      * @param {bool} byIndex Indicates the indices parameter is indices or values of items. 
      * If true, it's used as the index/indices of the item(s) to get.
      * If false, it's used as the value/values of the item(s) to get.
      * @returns {object} the item at the specified index or with the specified value.
      */
    wijlist(methodName: "getItems", indices: any, byIndex: boolean) ;
    
    /** Selects item(s) in the list by item index/indices or value(s).
      * @param {array|number|string} indices the indices of the items.
      * @param {bool} triggerSelected Whether to trigger selected event of list.
      * @param {bool} byIndex Indicates the indices parameter is indices or values of items. 
      * If true, it's used as the index/indices of the item(s) to get.
      * If false, it's used as the value/values of the item(s) to get.
      */
    wijlist(methodName: "selectItems", indices: any, triggerSelected: boolean, byIndex: boolean) ;
    
    /** The unselectItems method clears selections from the indicated list items.
      * @param {array} indices The zero-based index numbers of items to clear.
      */
    wijlist(methodName: "unselectItems", indices: any[]) ;
    
    /** The renderList method renders the wijlist widget on the client browser when list items change. */
    wijlist(methodName: "renderList") ;
    
    /** The refreshSuperPanel method refreshes the SuperPanel around 
      *  the wijlist to reflect a change in the wijlist content.
      * @returns {bool}
      */
    wijlist(methodName: "refreshSuperPanel"): boolean;
    
    /** Get dataSource option of wijlist widget */
    wijlist(methodName: "option", optionName: "dataSource") ;
    /** Set dataSource option to wijlist widget */
    wijlist(methodName: "option", optionName: "dataSource", dataSourceValue ): JQuery;
    
    /** Get listItems option of wijlist widget */
    wijlist(methodName: "option", optionName: "listItems") ;
    /** Set listItems option to wijlist widget */
    wijlist(methodName: "option", optionName: "listItems", listItemsValue ): JQuery;
    
    /** Get selectionMode option of wijlist widget */
    wijlist(methodName: "option", optionName: "selectionMode") ;
    /** Set selectionMode option to wijlist widget */
    wijlist(methodName: "option", optionName: "selectionMode", selectionModeValue ): JQuery;
    
    /** Get selectedIndex option of wijlist widget */
    wijlist(methodName: "option", optionName: "selectedIndex") ;
    /** Set selectedIndex option to wijlist widget */
    wijlist(methodName: "option", optionName: "selectedIndex", selectedIndexValue ): JQuery;
    
    /** Get autoSize option of wijlist widget */
    wijlist(methodName: "option", optionName: "autoSize") ;
    /** Set autoSize option to wijlist widget */
    wijlist(methodName: "option", optionName: "autoSize", autoSizeValue ): JQuery;
    
    /** Get maxItemsCount option of wijlist widget */
    wijlist(methodName: "option", optionName: "maxItemsCount") ;
    /** Set maxItemsCount option to wijlist widget */
    wijlist(methodName: "option", optionName: "maxItemsCount", maxItemsCountValue ): JQuery;
    
    /** Get addHoverItemClass option of wijlist widget */
    wijlist(methodName: "option", optionName: "addHoverItemClass") ;
    /** Set addHoverItemClass option to wijlist widget */
    wijlist(methodName: "option", optionName: "addHoverItemClass", addHoverItemClassValue ): JQuery;
    
    /** Get superPanelOptions option of wijlist widget */
    wijlist(methodName: "option", optionName: "superPanelOptions") ;
    /** Set superPanelOptions option to wijlist widget */
    wijlist(methodName: "option", optionName: "superPanelOptions", superPanelOptionsValue ): JQuery;
    
    /** Get disabled option of wijlist widget */
    wijlist(methodName: "option", optionName: "disabled") ;
    /** Set disabled option to wijlist widget */
    wijlist(methodName: "option", optionName: "disabled", disabledValue ): JQuery;
    
    /** Get keepHightlightOnMouseLeave option of wijlist widget */
    wijlist(methodName: "option", optionName: "keepHightlightOnMouseLeave") ;
    /** Set keepHightlightOnMouseLeave option to wijlist widget */
    wijlist(methodName: "option", optionName: "keepHightlightOnMouseLeave", keepHightlightOnMouseLeaveValue ): JQuery;
    
    /** Get selected option(event) of wijlist widget */
    wijlist(methodName: "option", eventName: "selected"): Function;
    /** Set selected option(event) to wijlist widget */
    wijlist(methodName: "option", eventName: "selected", selectedEventValue: (e?, data?) => void): JQuery;
    
    /** Get focusing option(event) of wijlist widget */
    wijlist(methodName: "option", eventName: "focusing"): Function;
    /** Set focusing option(event) to wijlist widget */
    wijlist(methodName: "option", eventName: "focusing", focusingEventValue: (e?, args?) => void): JQuery;
    
    /** Get focus option(event) of wijlist widget */
    wijlist(methodName: "option", eventName: "focus"): Function;
    /** Set focus option(event) to wijlist widget */
    wijlist(methodName: "option", eventName: "focus", focusEventValue: (e?, args?) => void): JQuery;
    
    /** Get blur option(event) of wijlist widget */
    wijlist(methodName: "option", eventName: "blur"): Function;
    /** Set blur option(event) to wijlist widget */
    wijlist(methodName: "option", eventName: "blur", blurEventValue: (e?, args?) => void): JQuery;
    
    /** Get itemRendering option(event) of wijlist widget */
    wijlist(methodName: "option", eventName: "itemRendering"): Function;
    /** Set itemRendering option(event) to wijlist widget */
    wijlist(methodName: "option", eventName: "itemRendering", itemRenderingEventValue: (e?, args?) => void): JQuery;
    
    /** Get itemRendered option(event) of wijlist widget */
    wijlist(methodName: "option", eventName: "itemRendered"): Function;
    /** Set itemRendered option(event) to wijlist widget */
    wijlist(methodName: "option", eventName: "itemRendered", itemRenderedEventValue: (e?, args?) => void): JQuery;
    
    /** Get listRendered option(event) of wijlist widget */
    wijlist(methodName: "option", eventName: "listRendered"): Function;
    /** Set listRendered option(event) to wijlist widget */
    wijlist(methodName: "option", eventName: "listRendered", listRenderedEventValue: (e?, data?) => void): JQuery;
    
    /** Get added option(event) of wijlist widget */
    wijlist(methodName: "option", eventName: "added"): Function;
    /** Set added option(event) to wijlist widget */
    wijlist(methodName: "option", eventName: "added", addedEventValue: (e?, data?) => void): JQuery;
    
    
}

/** Definitions of wijlistview widget */
interface JQuery {

    /** Initialize a wijlistview widget */
    wijlistview(): JQuery;
    /** Initialize a wijlistview widget with the given options */
    wijlistview(options: Object): JQuery;
    wijlistview(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijlistview widget */
    wijlistview(methodName: "option", optionName: string): any;
    /** Set options to wijlistview widget */
    wijlistview(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijlistview widget */
    wijlistview(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    
}

/** Definitions of wijitemslayer widget */
interface JQuery {

    /** Initialize a wijitemslayer widget */
    wijitemslayer(): JQuery;
    /** Initialize a wijitemslayer widget with the given options */
    wijitemslayer(options: Object): JQuery;
    wijitemslayer(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijitemslayer widget */
    wijitemslayer(methodName: "option", optionName: string): any;
    /** Set options to wijitemslayer widget */
    wijitemslayer(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijitemslayer widget */
    wijitemslayer(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Force to request the data to get the newest one. */
    wijitemslayer(methodName: "refresh") ;
    
    /** Removes the wijitemslayer functionality completely. This will return the element back to its pre-init state. */
    wijitemslayer(methodName: "destroy") ;
    
    /** Get request option(event) of wijitemslayer widget */
    wijitemslayer(methodName: "option", eventName: "request"): Function;
    /** Set request option(event) to wijitemslayer widget */
    wijitemslayer(methodName: "option", eventName: "request", requestEventValue: (paper?) => void): JQuery;
    
    
}

/** Definitions of wijlayer widget */
interface JQuery {

    /** Initialize a wijlayer widget */
    wijlayer(): JQuery;
    /** Initialize a wijlayer widget with the given options */
    wijlayer(options: Object): JQuery;
    wijlayer(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijlayer widget */
    wijlayer(methodName: "option", optionName: string): any;
    /** Set options to wijlayer widget */
    wijlayer(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijlayer widget */
    wijlayer(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Update the layer, redraw the layer if needed. It's called when the center and zoom changed. */
    wijlayer(methodName: "update") ;
    
    /** Called when the wijmaps begins to update the layer status. */
    wijlayer(methodName: "beginUpdate") ;
    
    /** Called when the wijmaps ends update the layer status. The layer will be updated after this function called. */
    wijlayer(methodName: "endUpdate") ;
    
    /** Refresh the layer. Usually used if want to apply the new data to the layer. */
    wijlayer(methodName: "refresh") ;
    
    /** Get disabled option of wijlayer widget */
    wijlayer(methodName: "option", optionName: "disabled") ;
    /** Set disabled option to wijlayer widget */
    wijlayer(methodName: "option", optionName: "disabled", disabledValue ): JQuery;
    
    /** Get type option of wijlayer widget */
    wijlayer(methodName: "option", optionName: "type") ;
    /** Set type option to wijlayer widget */
    wijlayer(methodName: "option", optionName: "type", typeValue ): JQuery;
    
    /** Get center option of wijlayer widget */
    wijlayer(methodName: "option", optionName: "center") ;
    /** Set center option to wijlayer widget */
    wijlayer(methodName: "option", optionName: "center", centerValue ): JQuery;
    
    /** Get targetCenter option of wijlayer widget */
    wijlayer(methodName: "option", optionName: "targetCenter") ;
    /** Set targetCenter option to wijlayer widget */
    wijlayer(methodName: "option", optionName: "targetCenter", targetCenterValue ): JQuery;
    
    /** Get zoom option of wijlayer widget */
    wijlayer(methodName: "option", optionName: "zoom") ;
    /** Set zoom option to wijlayer widget */
    wijlayer(methodName: "option", optionName: "zoom", zoomValue ): JQuery;
    
    /** Get targetZoom option of wijlayer widget */
    wijlayer(methodName: "option", optionName: "targetZoom") ;
    /** Set targetZoom option to wijlayer widget */
    wijlayer(methodName: "option", optionName: "targetZoom", targetZoomValue ): JQuery;
    
    /** Get isZooming option of wijlayer widget */
    wijlayer(methodName: "option", optionName: "isZooming") ;
    /** Set isZooming option to wijlayer widget */
    wijlayer(methodName: "option", optionName: "isZooming", isZoomingValue ): JQuery;
    
    /** Get converter option of wijlayer widget */
    wijlayer(methodName: "option", optionName: "converter") ;
    /** Set converter option to wijlayer widget */
    wijlayer(methodName: "option", optionName: "converter", converterValue ): JQuery;
    
    
}

/** Definitions of wijmaps widget */
interface JQuery {

    /** Initialize a wijmaps widget */
    wijmaps(): JQuery;
    /** Initialize a wijmaps widget with the given options */
    wijmaps(options: Object): JQuery;
    wijmaps(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijmaps widget */
    wijmaps(methodName: "option", optionName: string): any;
    /** Set options to wijmaps widget */
    wijmaps(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijmaps widget */
    wijmaps(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Refresh the map layers. Usually used when the items of the layer data changed. */
    wijmaps(methodName: "refreshLayers") ;
    
    /** Convert the point from screen unit (pixel) to  geographic unit (longitude and latitude).
      * @param {IPoint} position The point to convert.
      * @returns {wijmo.maps.IPoint}
      */
    wijmaps(methodName: "viewToGeographic", position: any) ;
    
    /** Convert the point from geographic unit (longitude and latitude) to screen unit (pixel).
      * @param {IPoint} position The point to convert.
      * @returns {wijmo.maps.IPoint}
      */
    wijmaps(methodName: "geographicToView", position: any) ;
    
    /** Convert the point from screen unit (pixel) to logic unit (percentage).
      * @param {IPoint} position The point to convert.
      * @returns {wijmo.maps.IPoint}
      */
    wijmaps(methodName: "viewToLogic", position: any) ;
    
    /** Convert the point from logic unit (percentage) to screen unit (pixel).
      * @param {IPoint} position The point to convert.
      * @returns {wijmo.maps.IPoint}
      */
    wijmaps(methodName: "logicToView", position: any) ;
    
    /** Calculate the distance between two points.
      * @param {Point} lonLat1 The coordinate of first point, in geographic unit.
      * @param {Point} longLat2 The coordinate of second point, in geographic unit.
      * @returns {number} The distance between to points, in meters.
      */
    wijmaps(methodName: "distance", lonLat1: any, longLat2: any) ;
    
    /** Removes the wijmaps functionality completely. This will return the element back to its pre-init state. */
    wijmaps(methodName: "destroy") ;
    
    /** Get source option of wijmaps widget */
    wijmaps(methodName: "option", optionName: "source") ;
    /** Set source option to wijmaps widget */
    wijmaps(methodName: "option", optionName: "source", sourceValue ): JQuery;
    
    /** Get bingMapsKey option of wijmaps widget */
    wijmaps(methodName: "option", optionName: "bingMapsKey") ;
    /** Set bingMapsKey option to wijmaps widget */
    wijmaps(methodName: "option", optionName: "bingMapsKey", bingMapsKeyValue ): JQuery;
    
    /** Get center option of wijmaps widget */
    wijmaps(methodName: "option", optionName: "center") ;
    /** Set center option to wijmaps widget */
    wijmaps(methodName: "option", optionName: "center", centerValue ): JQuery;
    
    /** Get zoom option of wijmaps widget */
    wijmaps(methodName: "option", optionName: "zoom") ;
    /** Set zoom option to wijmaps widget */
    wijmaps(methodName: "option", optionName: "zoom", zoomValue ): JQuery;
    
    /** Get showTools option of wijmaps widget */
    wijmaps(methodName: "option", optionName: "showTools") ;
    /** Set showTools option to wijmaps widget */
    wijmaps(methodName: "option", optionName: "showTools", showToolsValue ): JQuery;
    
    /** Get targetZoom option of wijmaps widget */
    wijmaps(methodName: "option", optionName: "targetZoom") ;
    /** Set targetZoom option to wijmaps widget */
    wijmaps(methodName: "option", optionName: "targetZoom", targetZoomValue ): JQuery;
    
    /** Get targetZoomSpeed option of wijmaps widget */
    wijmaps(methodName: "option", optionName: "targetZoomSpeed") ;
    /** Set targetZoomSpeed option to wijmaps widget */
    wijmaps(methodName: "option", optionName: "targetZoomSpeed", targetZoomSpeedValue ): JQuery;
    
    /** Get targetCenter option of wijmaps widget */
    wijmaps(methodName: "option", optionName: "targetCenter") ;
    /** Set targetCenter option to wijmaps widget */
    wijmaps(methodName: "option", optionName: "targetCenter", targetCenterValue ): JQuery;
    
    /** Get targetCenterSpeed option of wijmaps widget */
    wijmaps(methodName: "option", optionName: "targetCenterSpeed") ;
    /** Set targetCenterSpeed option to wijmaps widget */
    wijmaps(methodName: "option", optionName: "targetCenterSpeed", targetCenterSpeedValue ): JQuery;
    
    /** Get layers option of wijmaps widget */
    wijmaps(methodName: "option", optionName: "layers") ;
    /** Set layers option to wijmaps widget */
    wijmaps(methodName: "option", optionName: "layers", layersValue ): JQuery;
    
    /** Get zoomChanged option(event) of wijmaps widget */
    wijmaps(methodName: "option", eventName: "zoomChanged"): Function;
    /** Set zoomChanged option(event) to wijmaps widget */
    wijmaps(methodName: "option", eventName: "zoomChanged", zoomChangedEventValue: (event?, data?) => void): JQuery;
    
    /** Get targetZoomChanged option(event) of wijmaps widget */
    wijmaps(methodName: "option", eventName: "targetZoomChanged"): Function;
    /** Set targetZoomChanged option(event) to wijmaps widget */
    wijmaps(methodName: "option", eventName: "targetZoomChanged", targetZoomChangedEventValue: (event?, data?) => void): JQuery;
    
    /** Get centerChanged option(event) of wijmaps widget */
    wijmaps(methodName: "option", eventName: "centerChanged"): Function;
    /** Set centerChanged option(event) to wijmaps widget */
    wijmaps(methodName: "option", eventName: "centerChanged", centerChangedEventValue: (event?, data?) => void): JQuery;
    
    /** Get targetCenterChanged option(event) of wijmaps widget */
    wijmaps(methodName: "option", eventName: "targetCenterChanged"): Function;
    /** Set targetCenterChanged option(event) to wijmaps widget */
    wijmaps(methodName: "option", eventName: "targetCenterChanged", targetCenterChangedEventValue: (event?, data?) => void): JQuery;
    
    
}

/** Definitions of wijmultiscaleimage widget */
interface JQuery {

    /** Initialize a wijmultiscaleimage widget */
    wijmultiscaleimage(): JQuery;
    /** Initialize a wijmultiscaleimage widget with the given options */
    wijmultiscaleimage(options: Object): JQuery;
    wijmultiscaleimage(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijmultiscaleimage widget */
    wijmultiscaleimage(methodName: "option", optionName: string): any;
    /** Set options to wijmultiscaleimage widget */
    wijmultiscaleimage(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijmultiscaleimage widget */
    wijmultiscaleimage(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Removes the wijmultiscaleimage functionality completely. This will return the element back to its pre-init state. */
    wijmultiscaleimage(methodName: "destroy") ;
    
    /** Get source option of wijmultiscaleimage widget */
    wijmultiscaleimage(methodName: "option", optionName: "source") ;
    /** Set source option to wijmultiscaleimage widget */
    wijmultiscaleimage(methodName: "option", optionName: "source", sourceValue ): JQuery;
    
    /** Get center option of wijmultiscaleimage widget */
    wijmultiscaleimage(methodName: "option", optionName: "center") ;
    /** Set center option to wijmultiscaleimage widget */
    wijmultiscaleimage(methodName: "option", optionName: "center", centerValue ): JQuery;
    
    /** Get zoom option of wijmultiscaleimage widget */
    wijmultiscaleimage(methodName: "option", optionName: "zoom") ;
    /** Set zoom option to wijmultiscaleimage widget */
    wijmultiscaleimage(methodName: "option", optionName: "zoom", zoomValue ): JQuery;
    
    
}

/** Definitions of wijvectorlayer widget */
interface JQuery {

    /** Initialize a wijvectorlayer widget */
    wijvectorlayer(): JQuery;
    /** Initialize a wijvectorlayer widget with the given options */
    wijvectorlayer(options: Object): JQuery;
    wijvectorlayer(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijvectorlayer widget */
    wijvectorlayer(methodName: "option", optionName: string): any;
    /** Set options to wijvectorlayer widget */
    wijvectorlayer(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijvectorlayer widget */
    wijvectorlayer(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Force to request the data to get the newest one. */
    wijvectorlayer(methodName: "refresh") ;
    
    /** Removes the wijvectorlayer functionality completely. This will return the element back to its pre-init state. */
    wijvectorlayer(methodName: "destroy") ;
    
    /** Get dataType option of wijvectorlayer widget */
    wijvectorlayer(methodName: "option", optionName: "dataType") ;
    /** Set dataType option to wijvectorlayer widget */
    wijvectorlayer(methodName: "option", optionName: "dataType", dataTypeValue ): JQuery;
    
    /** Get data option of wijvectorlayer widget */
    wijvectorlayer(methodName: "option", optionName: "data") ;
    /** Set data option to wijvectorlayer widget */
    wijvectorlayer(methodName: "option", optionName: "data", dataValue ): JQuery;
    
    /** Get minSize option of wijvectorlayer widget */
    wijvectorlayer(methodName: "option", optionName: "minSize") ;
    /** Set minSize option to wijvectorlayer widget */
    wijvectorlayer(methodName: "option", optionName: "minSize", minSizeValue ): JQuery;
    
    /** Get placemark option of wijvectorlayer widget */
    wijvectorlayer(methodName: "option", optionName: "placemark") ;
    /** Set placemark option to wijvectorlayer widget */
    wijvectorlayer(methodName: "option", optionName: "placemark", placemarkValue ): JQuery;
    
    /** Get shapeCreated option(event) of wijvectorlayer widget */
    wijvectorlayer(methodName: "option", eventName: "shapeCreated"): Function;
    /** Set shapeCreated option(event) to wijvectorlayer widget */
    wijvectorlayer(methodName: "option", eventName: "shapeCreated", shapeCreatedEventValue: (event?, data?) => void): JQuery;
    
    /** Get mouseEnter option(event) of wijvectorlayer widget */
    wijvectorlayer(methodName: "option", eventName: "mouseEnter"): Function;
    /** Set mouseEnter option(event) to wijvectorlayer widget */
    wijvectorlayer(methodName: "option", eventName: "mouseEnter", mouseEnterEventValue: (event?, data?) => void): JQuery;
    
    /** Get mouseLeave option(event) of wijvectorlayer widget */
    wijvectorlayer(methodName: "option", eventName: "mouseLeave"): Function;
    /** Set mouseLeave option(event) to wijvectorlayer widget */
    wijvectorlayer(methodName: "option", eventName: "mouseLeave", mouseLeaveEventValue: (event?, data?) => void): JQuery;
    
    /** Get mouseDown option(event) of wijvectorlayer widget */
    wijvectorlayer(methodName: "option", eventName: "mouseDown"): Function;
    /** Set mouseDown option(event) to wijvectorlayer widget */
    wijvectorlayer(methodName: "option", eventName: "mouseDown", mouseDownEventValue: (event?, data?) => void): JQuery;
    
    /** Get mouseUp option(event) of wijvectorlayer widget */
    wijvectorlayer(methodName: "option", eventName: "mouseUp"): Function;
    /** Set mouseUp option(event) to wijvectorlayer widget */
    wijvectorlayer(methodName: "option", eventName: "mouseUp", mouseUpEventValue: (event?, data?) => void): JQuery;
    
    /** Get mouseMove option(event) of wijvectorlayer widget */
    wijvectorlayer(methodName: "option", eventName: "mouseMove"): Function;
    /** Set mouseMove option(event) to wijvectorlayer widget */
    wijvectorlayer(methodName: "option", eventName: "mouseMove", mouseMoveEventValue: (event?, data?) => void): JQuery;
    
    /** Get click option(event) of wijvectorlayer widget */
    wijvectorlayer(methodName: "option", eventName: "click"): Function;
    /** Set click option(event) to wijvectorlayer widget */
    wijvectorlayer(methodName: "option", eventName: "click", clickEventValue: (event?, data?) => void): JQuery;
    
    
}

/** Definitions of wijvirtuallayer widget */
interface JQuery {

    /** Initialize a wijvirtuallayer widget */
    wijvirtuallayer(): JQuery;
    /** Initialize a wijvirtuallayer widget with the given options */
    wijvirtuallayer(options: Object): JQuery;
    wijvirtuallayer(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijvirtuallayer widget */
    wijvirtuallayer(methodName: "option", optionName: string): any;
    /** Set options to wijvirtuallayer widget */
    wijvirtuallayer(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijvirtuallayer widget */
    wijvirtuallayer(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Force to request the data to get the newest one. */
    wijvirtuallayer(methodName: "refresh") ;
    
    /** Removes the wijvirtuallayer functionality completely. This will return the element back to its pre-init state. */
    wijvirtuallayer(methodName: "destroy") ;
    
    /** Get slices option of wijvirtuallayer widget */
    wijvirtuallayer(methodName: "option", optionName: "slices") ;
    /** Set slices option to wijvirtuallayer widget */
    wijvirtuallayer(methodName: "option", optionName: "slices", slicesValue ): JQuery;
    
    /** Get request option(event) of wijvirtuallayer widget */
    wijvirtuallayer(methodName: "option", eventName: "request"): Function;
    /** Set request option(event) to wijvirtuallayer widget */
    wijvirtuallayer(methodName: "option", eventName: "request", requestEventValue: (paper?, minZoom?, maxZoom?, lowerLeft?, upperRight?) => void): JQuery;
    
    
}

/** Definitions of wijmenu widget */
interface JQuery {

    /** Initialize a wijmenu widget */
    wijmenu(): JQuery;
    /** Initialize a wijmenu widget with the given options */
    wijmenu(options: Object): JQuery;
    wijmenu(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijmenu widget */
    wijmenu(methodName: "option", optionName: string): any;
    /** Set options to wijmenu widget */
    wijmenu(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijmenu widget */
    wijmenu(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** The destroy method removes the wijmenu functionality completely
      * and returns the element to its pre-init state.
      */
    wijmenu(methodName: "destroy") ;
    
    /** This method activates a menu item by deactivating the current item,
      * scrolling the new item into view, and, if necessary,making it the active item,
      * and triggering a focus event.
      * @param {event} event The javascript event.
      * @param item A menu item to activate.
      * @example
      * //Actives a menu item with "sub-item" class.
      * $(".selector").wijmenu("activate", null, $(".sub-item"));
      */
    wijmenu(methodName: "activate", event: Event, item: any) ;
    
    /** The deactivate method clears the current selection. 
      * This method is useful when reopening a menu which you previously selected an item.
      * If you don't call this method then an item which you selected before allowing the menu to close 
      * will remain highlighted when the menu is reopened.
      * @param {event} event The javascript event.
      */
    wijmenu(methodName: "deactivate", event: Event) ;
    
    /** The next method gets the next selectable item. 
      * The first item is selected if no item is active or the last one is active. 
      * It returns null if none is selectable.
      * @param {event} event The javascript event.
      */
    wijmenu(methodName: "next", event: Event) ;
    
    /** Get the previous selectable item. 
      * It selects the last item if no item is active or if the first item is active. 
      * It returns null if no previous item is selectable.
      * @param {event} event The javascript event.
      */
    wijmenu(methodName: "previous", event: Event) ;
    
    /** The first method defines the first menu item as the active item.
      * @returns {bool}
      */
    wijmenu(methodName: "first"): boolean;
    
    /** The last method defines the last menu item as the active item.
      * @returns {bool}
      */
    wijmenu(methodName: "last"): boolean;
    
    /** This method is similar to the "next" method, 
      * but it jumps a whole page to the next page instead of to the next selectable item.
      * You can call this method when you are using an iPod-style menu.
      * @param {event} event The javascript event.
      */
    wijmenu(methodName: "nextPage", event: Event) ;
    
    /** This method is similar to the "previous" method, 
      * but it jumps a whole page to the previous page.
      * You can call this method when you're using an iPod-style menu.
      * @param {event} event The javascript event.
      */
    wijmenu(methodName: "previousPage", event: Event) ;
    
    /** This method selects the active item which triggers the select event for that item.
      * This event is useful for custom keyboard handling.
      * @param {event} event The javascript event.
      */
    wijmenu(methodName: "select", event?: Event) ;
    
    /** The setItemDisabled method allows the user to disable a specific menu item.
      * @param selector Indicates the item to be disabled. The parameter's type is jQuery selector.
      * @param {bool} disabled If the value for this parameter is true,  then the menu item will be disabled. The parameter's type is Boolean.
      * @example
      * //Disables a menuitem with "sub-item" class.
      * $(".selector").wijmenu("setItemDisabled", $(".sub-item"), true);
      */
    wijmenu(methodName: "setItemDisabled", selector: any, disabled: boolean) ;
    
    /** The method is used to refresh the menu when DOM operations add or replace a menu item. 
      * For example, if you add a new menu item through "menu.append," 
      * then you can use the refresh method to make sure that the new menu item appears in the menu.
      * @example
      * //Adds a new item and refresh menu.
      * menu.append("&lt;li&gt;&lt;a href='#'&gt;new item&lt;/a&gt;&lt;/li&gt;").wijmenu("refresh");
      */
    wijmenu(methodName: "refresh") ;
    
    /** The hideAllMenus method hides all menu items currently showing.
      * @param e
      */
    wijmenu(methodName: "hideAllMenus", e: any) ;
    
    /** Adds a child menuItem to the menuItem.
      * @param menuitem The menuItem to be added
      * 1.markup html.such as "&lt;a&gt;menuItem&lt;/a&gt;" as a menuItem.
      * 2.object options according to the options of wijmenuItem.
      * @param {number} position the position to insert at
      */
    wijmenu(methodName: "add", menuitem: any, position: any) ;
    
    /** Gets the collection of child items.
      * @returns {array} the menu items.
      */
    wijmenu(methodName: "getItems"): any[];
    
    /** Remove an item from the menu.
      * @param {number} index The index of menuitem to be removed
      * @example
      * //Removes the second menuitem.
      * $("#menu").wijmenu("remove", 1);
      */
    wijmenu(methodName: "remove", index: any) ;
    
    /** Get trigger option of wijmenu widget */
    wijmenu(methodName: "option", optionName: "trigger") ;
    /** Set trigger option to wijmenu widget */
    wijmenu(methodName: "option", optionName: "trigger", triggerValue ): JQuery;
    
    /** Get triggerEvent option of wijmenu widget */
    wijmenu(methodName: "option", optionName: "triggerEvent") ;
    /** Set triggerEvent option to wijmenu widget */
    wijmenu(methodName: "option", optionName: "triggerEvent", triggerEventValue ): JQuery;
    
    /** Get submenuTriggerEvent option of wijmenu widget */
    wijmenu(methodName: "option", optionName: "submenuTriggerEvent") ;
    /** Set submenuTriggerEvent option to wijmenu widget */
    wijmenu(methodName: "option", optionName: "submenuTriggerEvent", submenuTriggerEventValue ): JQuery;
    
    /** Get position option of wijmenu widget */
    wijmenu(methodName: "option", optionName: "position") ;
    /** Set position option to wijmenu widget */
    wijmenu(methodName: "option", optionName: "position", positionValue ): JQuery;
    
    /** Get animation option of wijmenu widget */
    wijmenu(methodName: "option", optionName: "animation") ;
    /** Set animation option to wijmenu widget */
    wijmenu(methodName: "option", optionName: "animation", animationValue ): JQuery;
    
    /** Get showAnimation option of wijmenu widget */
    wijmenu(methodName: "option", optionName: "showAnimation") ;
    /** Set showAnimation option to wijmenu widget */
    wijmenu(methodName: "option", optionName: "showAnimation", showAnimationValue ): JQuery;
    
    /** Get hideAnimation option of wijmenu widget */
    wijmenu(methodName: "option", optionName: "hideAnimation") ;
    /** Set hideAnimation option to wijmenu widget */
    wijmenu(methodName: "option", optionName: "hideAnimation", hideAnimationValue ): JQuery;
    
    /** Get showDelay option of wijmenu widget */
    wijmenu(methodName: "option", optionName: "showDelay") ;
    /** Set showDelay option to wijmenu widget */
    wijmenu(methodName: "option", optionName: "showDelay", showDelayValue ): JQuery;
    
    /** Get hideDelay option of wijmenu widget */
    wijmenu(methodName: "option", optionName: "hideDelay") ;
    /** Set hideDelay option to wijmenu widget */
    wijmenu(methodName: "option", optionName: "hideDelay", hideDelayValue ): JQuery;
    
    /** Get slidingAnimation option of wijmenu widget */
    wijmenu(methodName: "option", optionName: "slidingAnimation") ;
    /** Set slidingAnimation option to wijmenu widget */
    wijmenu(methodName: "option", optionName: "slidingAnimation", slidingAnimationValue ): JQuery;
    
    /** Get mode option of wijmenu widget */
    wijmenu(methodName: "option", optionName: "mode") ;
    /** Set mode option to wijmenu widget */
    wijmenu(methodName: "option", optionName: "mode", modeValue ): JQuery;
    
    /** Get superPanelOptions option of wijmenu widget */
    wijmenu(methodName: "option", optionName: "superPanelOptions") ;
    /** Set superPanelOptions option to wijmenu widget */
    wijmenu(methodName: "option", optionName: "superPanelOptions", superPanelOptionsValue ): JQuery;
    
    /** Get checkable option of wijmenu widget */
    wijmenu(methodName: "option", optionName: "checkable") ;
    /** Set checkable option to wijmenu widget */
    wijmenu(methodName: "option", optionName: "checkable", checkableValue ): JQuery;
    
    /** Get orientation option of wijmenu widget */
    wijmenu(methodName: "option", optionName: "orientation") ;
    /** Set orientation option to wijmenu widget */
    wijmenu(methodName: "option", optionName: "orientation", orientationValue ): JQuery;
    
    /** Get direction option of wijmenu widget */
    wijmenu(methodName: "option", optionName: "direction") ;
    /** Set direction option to wijmenu widget */
    wijmenu(methodName: "option", optionName: "direction", directionValue ): JQuery;
    
    /** Get maxHeight option of wijmenu widget */
    wijmenu(methodName: "option", optionName: "maxHeight") ;
    /** Set maxHeight option to wijmenu widget */
    wijmenu(methodName: "option", optionName: "maxHeight", maxHeightValue ): JQuery;
    
    /** Get backLink option of wijmenu widget */
    wijmenu(methodName: "option", optionName: "backLink") ;
    /** Set backLink option to wijmenu widget */
    wijmenu(methodName: "option", optionName: "backLink", backLinkValue ): JQuery;
    
    /** Get backLinkText option of wijmenu widget */
    wijmenu(methodName: "option", optionName: "backLinkText") ;
    /** Set backLinkText option to wijmenu widget */
    wijmenu(methodName: "option", optionName: "backLinkText", backLinkTextValue ): JQuery;
    
    /** Get topLinkText option of wijmenu widget */
    wijmenu(methodName: "option", optionName: "topLinkText") ;
    /** Set topLinkText option to wijmenu widget */
    wijmenu(methodName: "option", optionName: "topLinkText", topLinkTextValue ): JQuery;
    
    /** Get crumbDefaultText option of wijmenu widget */
    wijmenu(methodName: "option", optionName: "crumbDefaultText") ;
    /** Set crumbDefaultText option to wijmenu widget */
    wijmenu(methodName: "option", optionName: "crumbDefaultText", crumbDefaultTextValue ): JQuery;
    
    /** Get items option of wijmenu widget */
    wijmenu(methodName: "option", optionName: "items") ;
    /** Set items option to wijmenu widget */
    wijmenu(methodName: "option", optionName: "items", itemsValue ): JQuery;
    
    /** Get ensureSubmenuOnBody option of wijmenu widget */
    wijmenu(methodName: "option", optionName: "ensureSubmenuOnBody") ;
    /** Set ensureSubmenuOnBody option to wijmenu widget */
    wijmenu(methodName: "option", optionName: "ensureSubmenuOnBody", ensureSubmenuOnBodyValue ): JQuery;
    
    /** Get select option(event) of wijmenu widget */
    wijmenu(methodName: "option", eventName: "select"): Function;
    /** Set select option(event) to wijmenu widget */
    wijmenu(methodName: "option", eventName: "select", selectEventValue: (e?, data?) => void): JQuery;
    
    /** Get focus option(event) of wijmenu widget */
    wijmenu(methodName: "option", eventName: "focus"): Function;
    /** Set focus option(event) to wijmenu widget */
    wijmenu(methodName: "option", eventName: "focus", focusEventValue: (e?, data?) => void): JQuery;
    
    /** Get blur option(event) of wijmenu widget */
    wijmenu(methodName: "option", eventName: "blur"): Function;
    /** Set blur option(event) to wijmenu widget */
    wijmenu(methodName: "option", eventName: "blur", blurEventValue: (e?, data?) => void): JQuery;
    
    /** Get showing option(event) of wijmenu widget */
    wijmenu(methodName: "option", eventName: "showing"): Function;
    /** Set showing option(event) to wijmenu widget */
    wijmenu(methodName: "option", eventName: "showing", showingEventValue: (event?, item?) => void): JQuery;
    
    /** Get shown option(event) of wijmenu widget */
    wijmenu(methodName: "option", eventName: "shown"): Function;
    /** Set shown option(event) to wijmenu widget */
    wijmenu(methodName: "option", eventName: "shown", shownEventValue: (event?, item?) => void): JQuery;
    
    /** Get hidding option(event) of wijmenu widget */
    wijmenu(methodName: "option", eventName: "hidding"): Function;
    /** Set hidding option(event) to wijmenu widget */
    wijmenu(methodName: "option", eventName: "hidding", hiddingEventValue: (event?, item?) => void): JQuery;
    
    /** Get hidden option(event) of wijmenu widget */
    wijmenu(methodName: "option", eventName: "hidden"): Function;
    /** Set hidden option(event) to wijmenu widget */
    wijmenu(methodName: "option", eventName: "hidden", hiddenEventValue: (event?, item?) => void): JQuery;
    
    
}

/** Definitions of wijpager widget */
interface JQuery {

    /** Initialize a wijpager widget */
    wijpager(): JQuery;
    /** Initialize a wijpager widget with the given options */
    wijpager(options: Object): JQuery;
    wijpager(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijpager widget */
    wijpager(methodName: "option", optionName: string): any;
    /** Set options to wijpager widget */
    wijpager(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijpager widget */
    wijpager(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Get firstPageClass option of wijpager widget */
    wijpager(methodName: "option", optionName: "firstPageClass") ;
    /** Set firstPageClass option to wijpager widget */
    wijpager(methodName: "option", optionName: "firstPageClass", firstPageClassValue ): JQuery;
    
    /** Get firstPageText option of wijpager widget */
    wijpager(methodName: "option", optionName: "firstPageText") ;
    /** Set firstPageText option to wijpager widget */
    wijpager(methodName: "option", optionName: "firstPageText", firstPageTextValue ): JQuery;
    
    /** Get lastPageClass option of wijpager widget */
    wijpager(methodName: "option", optionName: "lastPageClass") ;
    /** Set lastPageClass option to wijpager widget */
    wijpager(methodName: "option", optionName: "lastPageClass", lastPageClassValue ): JQuery;
    
    /** Get lastPageText option of wijpager widget */
    wijpager(methodName: "option", optionName: "lastPageText") ;
    /** Set lastPageText option to wijpager widget */
    wijpager(methodName: "option", optionName: "lastPageText", lastPageTextValue ): JQuery;
    
    /** Get mode option of wijpager widget */
    wijpager(methodName: "option", optionName: "mode") ;
    /** Set mode option to wijpager widget */
    wijpager(methodName: "option", optionName: "mode", modeValue ): JQuery;
    
    /** Get nextPageClass option of wijpager widget */
    wijpager(methodName: "option", optionName: "nextPageClass") ;
    /** Set nextPageClass option to wijpager widget */
    wijpager(methodName: "option", optionName: "nextPageClass", nextPageClassValue ): JQuery;
    
    /** Get nextPageText option of wijpager widget */
    wijpager(methodName: "option", optionName: "nextPageText") ;
    /** Set nextPageText option to wijpager widget */
    wijpager(methodName: "option", optionName: "nextPageText", nextPageTextValue ): JQuery;
    
    /** Get pageButtonCount option of wijpager widget */
    wijpager(methodName: "option", optionName: "pageButtonCount") ;
    /** Set pageButtonCount option to wijpager widget */
    wijpager(methodName: "option", optionName: "pageButtonCount", pageButtonCountValue ): JQuery;
    
    /** Get previousPageClass option of wijpager widget */
    wijpager(methodName: "option", optionName: "previousPageClass") ;
    /** Set previousPageClass option to wijpager widget */
    wijpager(methodName: "option", optionName: "previousPageClass", previousPageClassValue ): JQuery;
    
    /** Get previousPageText option of wijpager widget */
    wijpager(methodName: "option", optionName: "previousPageText") ;
    /** Set previousPageText option to wijpager widget */
    wijpager(methodName: "option", optionName: "previousPageText", previousPageTextValue ): JQuery;
    
    /** Get pageCount option of wijpager widget */
    wijpager(methodName: "option", optionName: "pageCount") ;
    /** Set pageCount option to wijpager widget */
    wijpager(methodName: "option", optionName: "pageCount", pageCountValue ): JQuery;
    
    /** Get pageIndex option of wijpager widget */
    wijpager(methodName: "option", optionName: "pageIndex") ;
    /** Set pageIndex option to wijpager widget */
    wijpager(methodName: "option", optionName: "pageIndex", pageIndexValue ): JQuery;
    
    /** Get pageIndexChanging option(event) of wijpager widget */
    wijpager(methodName: "option", eventName: "pageIndexChanging"): Function;
    /** Set pageIndexChanging option(event) to wijpager widget */
    wijpager(methodName: "option", eventName: "pageIndexChanging", pageIndexChangingEventValue: (e?, args?) => void): JQuery;
    
    /** Get pageIndexChanged option(event) of wijpager widget */
    wijpager(methodName: "option", eventName: "pageIndexChanged"): Function;
    /** Set pageIndexChanged option(event) to wijpager widget */
    wijpager(methodName: "option", eventName: "pageIndexChanged", pageIndexChangedEventValue: (e?, args?) => void): JQuery;
    
    
}

/** Definitions of wijpiechart widget */
interface JQuery {

    /** Initialize a wijpiechart widget */
    wijpiechart(): JQuery;
    /** Initialize a wijpiechart widget with the given options */
    wijpiechart(options: Object): JQuery;
    wijpiechart(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijpiechart widget */
    wijpiechart(methodName: "option", optionName: string): any;
    /** Set options to wijpiechart widget */
    wijpiechart(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijpiechart widget */
    wijpiechart(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Removes the functionality completely. 
      * This will return the element back to its pre-init state.
      */
    wijpiechart(methodName: "destroy") ;
    
    /** Returns the sector of the pie chart with the given index.
      * @param {number} index The index of the sector.
      * @returns {Raphael Element} Reference to raphael element object.
      */
    wijpiechart(methodName: "getSector", index: any): RaphaelElement;
    
    /** Get startAngle option of wijpiechart widget */
    wijpiechart(methodName: "option", optionName: "startAngle") ;
    /** Set startAngle option to wijpiechart widget */
    wijpiechart(methodName: "option", optionName: "startAngle", startAngleValue ): JQuery;
    
    /** Get radius option of wijpiechart widget */
    wijpiechart(methodName: "option", optionName: "radius") ;
    /** Set radius option to wijpiechart widget */
    wijpiechart(methodName: "option", optionName: "radius", radiusValue ): JQuery;
    
    /** Get innerRadius option of wijpiechart widget */
    wijpiechart(methodName: "option", optionName: "innerRadius") ;
    /** Set innerRadius option to wijpiechart widget */
    wijpiechart(methodName: "option", optionName: "innerRadius", innerRadiusValue ): JQuery;
    
    /** Get labels option of wijpiechart widget */
    wijpiechart(methodName: "option", optionName: "labels") ;
    /** Set labels option to wijpiechart widget */
    wijpiechart(methodName: "option", optionName: "labels", labelsValue ): JQuery;
    
    /** Get animation option of wijpiechart widget */
    wijpiechart(methodName: "option", optionName: "animation") ;
    /** Set animation option to wijpiechart widget */
    wijpiechart(methodName: "option", optionName: "animation", animationValue ): JQuery;
    
    /** Get seriesTransition option of wijpiechart widget */
    wijpiechart(methodName: "option", optionName: "seriesTransition") ;
    /** Set seriesTransition option to wijpiechart widget */
    wijpiechart(methodName: "option", optionName: "seriesTransition", seriesTransitionValue ): JQuery;
    
    /** Get seriesList option of wijpiechart widget */
    wijpiechart(methodName: "option", optionName: "seriesList") ;
    /** Set seriesList option to wijpiechart widget */
    wijpiechart(methodName: "option", optionName: "seriesList", seriesListValue ): JQuery;
    
    /** Get enableTouchBehavior option of wijpiechart widget */
    wijpiechart(methodName: "option", optionName: "enableTouchBehavior") ;
    /** Set enableTouchBehavior option to wijpiechart widget */
    wijpiechart(methodName: "option", optionName: "enableTouchBehavior", enableTouchBehaviorValue ): JQuery;
    
    /** Get direction option of wijpiechart widget */
    wijpiechart(methodName: "option", optionName: "direction") ;
    /** Set direction option to wijpiechart widget */
    wijpiechart(methodName: "option", optionName: "direction", directionValue ): JQuery;
    
    /** Get isTouchBehaviorEnable option of wijpiechart widget */
    wijpiechart(methodName: "option", optionName: "isTouchBehaviorEnable") ;
    /** Set isTouchBehaviorEnable option to wijpiechart widget */
    wijpiechart(methodName: "option", optionName: "isTouchBehaviorEnable", isTouchBehaviorEnableValue ): JQuery;
    
    /** Get mouseDown option(event) of wijpiechart widget */
    wijpiechart(methodName: "option", eventName: "mouseDown"): Function;
    /** Set mouseDown option(event) to wijpiechart widget */
    wijpiechart(methodName: "option", eventName: "mouseDown", mouseDownEventValue: (e?, args?) => void): JQuery;
    
    /** Get mouseUp option(event) of wijpiechart widget */
    wijpiechart(methodName: "option", eventName: "mouseUp"): Function;
    /** Set mouseUp option(event) to wijpiechart widget */
    wijpiechart(methodName: "option", eventName: "mouseUp", mouseUpEventValue: (e?, args?) => void): JQuery;
    
    /** Get mouseOver option(event) of wijpiechart widget */
    wijpiechart(methodName: "option", eventName: "mouseOver"): Function;
    /** Set mouseOver option(event) to wijpiechart widget */
    wijpiechart(methodName: "option", eventName: "mouseOver", mouseOverEventValue: (e?, args?) => void): JQuery;
    
    /** Get mouseOut option(event) of wijpiechart widget */
    wijpiechart(methodName: "option", eventName: "mouseOut"): Function;
    /** Set mouseOut option(event) to wijpiechart widget */
    wijpiechart(methodName: "option", eventName: "mouseOut", mouseOutEventValue: (e?, args?) => void): JQuery;
    
    /** Get mouseMove option(event) of wijpiechart widget */
    wijpiechart(methodName: "option", eventName: "mouseMove"): Function;
    /** Set mouseMove option(event) to wijpiechart widget */
    wijpiechart(methodName: "option", eventName: "mouseMove", mouseMoveEventValue: (e?, args?) => void): JQuery;
    
    /** Get click option(event) of wijpiechart widget */
    wijpiechart(methodName: "option", eventName: "click"): Function;
    /** Set click option(event) to wijpiechart widget */
    wijpiechart(methodName: "option", eventName: "click", clickEventValue: (e?, args?) => void): JQuery;
    
    
}

/** Definitions of wijpopup widget */
interface JQuery {

    /** Initialize a wijpopup widget */
    wijpopup(): JQuery;
    /** Initialize a wijpopup widget with the given options */
    wijpopup(options: Object): JQuery;
    wijpopup(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijpopup widget */
    wijpopup(methodName: "option", optionName: string): any;
    /** Set options to wijpopup widget */
    wijpopup(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijpopup widget */
    wijpopup(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Remove the functionality completely. This will return the element back to its pre-init state. */
    wijpopup(methodName: "destroy") ;
    
    /** Determines whether the element is visible.
      * @returns {bool}
      */
    wijpopup(methodName: "isVisible"): boolean;
    
    /** Popups the element.
      *  Position is an optional argument, it is the options object used in jquery.ui.position.
      * @param {?object} position An optional argument, it is the options object used in jquery.ui.position.
      */
    wijpopup(methodName: "show", position?: any) ;
    
    /** Popups the element at specified absolute position related to document.
      * @param {number} x The x coordinate at which to show the popup.
      * @param {number} y The y coordinate at which to show the popup.
      * @example
      * // set the popup position is "100, 100" that related to document.
      *  $(".selector").wijpopup('showAt', 100, 100);
      */
    wijpopup(methodName: "showAt", x: any, y: any) ;
    
    /** Hides the element. */
    wijpopup(methodName: "hide") ;
    
    /** Get ensureOutermost option of wijpopup widget */
    wijpopup(methodName: "option", optionName: "ensureOutermost") ;
    /** Set ensureOutermost option to wijpopup widget */
    wijpopup(methodName: "option", optionName: "ensureOutermost", ensureOutermostValue ): JQuery;
    
    /** Get showEffect option of wijpopup widget */
    wijpopup(methodName: "option", optionName: "showEffect") ;
    /** Set showEffect option to wijpopup widget */
    wijpopup(methodName: "option", optionName: "showEffect", showEffectValue ): JQuery;
    
    /** Get showOptions option of wijpopup widget */
    wijpopup(methodName: "option", optionName: "showOptions") ;
    /** Set showOptions option to wijpopup widget */
    wijpopup(methodName: "option", optionName: "showOptions", showOptionsValue ): JQuery;
    
    /** Get showDuration option of wijpopup widget */
    wijpopup(methodName: "option", optionName: "showDuration") ;
    /** Set showDuration option to wijpopup widget */
    wijpopup(methodName: "option", optionName: "showDuration", showDurationValue ): JQuery;
    
    /** Get hideEffect option of wijpopup widget */
    wijpopup(methodName: "option", optionName: "hideEffect") ;
    /** Set hideEffect option to wijpopup widget */
    wijpopup(methodName: "option", optionName: "hideEffect", hideEffectValue ): JQuery;
    
    /** Get hideOptions option of wijpopup widget */
    wijpopup(methodName: "option", optionName: "hideOptions") ;
    /** Set hideOptions option to wijpopup widget */
    wijpopup(methodName: "option", optionName: "hideOptions", hideOptionsValue ): JQuery;
    
    /** Get hideDuration option of wijpopup widget */
    wijpopup(methodName: "option", optionName: "hideDuration") ;
    /** Set hideDuration option to wijpopup widget */
    wijpopup(methodName: "option", optionName: "hideDuration", hideDurationValue ): JQuery;
    
    /** Get autoHide option of wijpopup widget */
    wijpopup(methodName: "option", optionName: "autoHide") ;
    /** Set autoHide option to wijpopup widget */
    wijpopup(methodName: "option", optionName: "autoHide", autoHideValue ): JQuery;
    
    /** Get position option of wijpopup widget */
    wijpopup(methodName: "option", optionName: "position") ;
    /** Set position option to wijpopup widget */
    wijpopup(methodName: "option", optionName: "position", positionValue ): JQuery;
    
    /** Get showing option(event) of wijpopup widget */
    wijpopup(methodName: "option", eventName: "showing"): Function;
    /** Set showing option(event) to wijpopup widget */
    wijpopup(methodName: "option", eventName: "showing", showingEventValue: (e?) => void): JQuery;
    
    /** Get shown option(event) of wijpopup widget */
    wijpopup(methodName: "option", eventName: "shown"): Function;
    /** Set shown option(event) to wijpopup widget */
    wijpopup(methodName: "option", eventName: "shown", shownEventValue: (e?) => void): JQuery;
    
    /** Get hiding option(event) of wijpopup widget */
    wijpopup(methodName: "option", eventName: "hiding"): Function;
    /** Set hiding option(event) to wijpopup widget */
    wijpopup(methodName: "option", eventName: "hiding", hidingEventValue: (e?, data?) => void): JQuery;
    
    /** Get hidden option(event) of wijpopup widget */
    wijpopup(methodName: "option", eventName: "hidden"): Function;
    /** Set hidden option(event) to wijpopup widget */
    wijpopup(methodName: "option", eventName: "hidden", hiddenEventValue: (e?) => void): JQuery;
    
    /** Get posChanged option(event) of wijpopup widget */
    wijpopup(methodName: "option", eventName: "posChanged"): Function;
    /** Set posChanged option(event) to wijpopup widget */
    wijpopup(methodName: "option", eventName: "posChanged", posChangedEventValue: (e?) => void): JQuery;
    
    
}

/** Definitions of JQueryUIProgress widget */
interface JQuery {

    /** Initialize a JQueryUIProgress widget */
    JQueryUIProgress(): JQuery;
    /** Initialize a JQueryUIProgress widget with the given options */
    JQueryUIProgress(options: Object): JQuery;
    JQueryUIProgress(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of JQueryUIProgress widget */
    JQueryUIProgress(methodName: "option", optionName: string): any;
    /** Set options to JQueryUIProgress widget */
    JQueryUIProgress(methodName: "option", optionValues: Object): any;
    /** Set specified option to JQueryUIProgress widget */
    JQueryUIProgress(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** @param newValue */
    JQueryUIProgress(methodName: "value", newValue: any) ;
    
    
}

/** Definitions of wijprogressbar widget */
interface JQuery {

    /** Initialize a wijprogressbar widget */
    wijprogressbar(): JQuery;
    /** Initialize a wijprogressbar widget with the given options */
    wijprogressbar(options: Object): JQuery;
    wijprogressbar(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijprogressbar widget */
    wijprogressbar(methodName: "option", optionName: string): any;
    /** Set options to wijprogressbar widget */
    wijprogressbar(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijprogressbar widget */
    wijprogressbar(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Sets the current value of the progressbar.
      * @param {?number} newValue The value to set.
      */
    wijprogressbar(methodName: "value", newValue?: any) ;
    
    /** Removes the wijprogressbar functionality completely. This returns the element to its pre-init state. */
    wijprogressbar(methodName: "destroy") ;
    
    /** Get labelAlign option of wijprogressbar widget */
    wijprogressbar(methodName: "option", optionName: "labelAlign") ;
    /** Set labelAlign option to wijprogressbar widget */
    wijprogressbar(methodName: "option", optionName: "labelAlign", labelAlignValue ): JQuery;
    
    /** Get maxValue option of wijprogressbar widget */
    wijprogressbar(methodName: "option", optionName: "maxValue") ;
    /** Set maxValue option to wijprogressbar widget */
    wijprogressbar(methodName: "option", optionName: "maxValue", maxValueValue ): JQuery;
    
    /** Get minValue option of wijprogressbar widget */
    wijprogressbar(methodName: "option", optionName: "minValue") ;
    /** Set minValue option to wijprogressbar widget */
    wijprogressbar(methodName: "option", optionName: "minValue", minValueValue ): JQuery;
    
    /** Get fillDirection option of wijprogressbar widget */
    wijprogressbar(methodName: "option", optionName: "fillDirection") ;
    /** Set fillDirection option to wijprogressbar widget */
    wijprogressbar(methodName: "option", optionName: "fillDirection", fillDirectionValue ): JQuery;
    
    /** Get labelFormatString option of wijprogressbar widget */
    wijprogressbar(methodName: "option", optionName: "labelFormatString") ;
    /** Set labelFormatString option to wijprogressbar widget */
    wijprogressbar(methodName: "option", optionName: "labelFormatString", labelFormatStringValue ): JQuery;
    
    /** Get toolTipFormatString option of wijprogressbar widget */
    wijprogressbar(methodName: "option", optionName: "toolTipFormatString") ;
    /** Set toolTipFormatString option to wijprogressbar widget */
    wijprogressbar(methodName: "option", optionName: "toolTipFormatString", toolTipFormatStringValue ): JQuery;
    
    /** Get indicatorIncrement option of wijprogressbar widget */
    wijprogressbar(methodName: "option", optionName: "indicatorIncrement") ;
    /** Set indicatorIncrement option to wijprogressbar widget */
    wijprogressbar(methodName: "option", optionName: "indicatorIncrement", indicatorIncrementValue ): JQuery;
    
    /** Get indicatorImage option of wijprogressbar widget */
    wijprogressbar(methodName: "option", optionName: "indicatorImage") ;
    /** Set indicatorImage option to wijprogressbar widget */
    wijprogressbar(methodName: "option", optionName: "indicatorImage", indicatorImageValue ): JQuery;
    
    /** Get animationDelay option of wijprogressbar widget */
    wijprogressbar(methodName: "option", optionName: "animationDelay") ;
    /** Set animationDelay option to wijprogressbar widget */
    wijprogressbar(methodName: "option", optionName: "animationDelay", animationDelayValue ): JQuery;
    
    /** Get animationOptions option of wijprogressbar widget */
    wijprogressbar(methodName: "option", optionName: "animationOptions") ;
    /** Set animationOptions option to wijprogressbar widget */
    wijprogressbar(methodName: "option", optionName: "animationOptions", animationOptionsValue ): JQuery;
    
    /** Get value option of wijprogressbar widget */
    wijprogressbar(methodName: "option", optionName: "value") ;
    /** Set value option to wijprogressbar widget */
    wijprogressbar(methodName: "option", optionName: "value", valueValue ): JQuery;
    
    /** Get progressChanging option(event) of wijprogressbar widget */
    wijprogressbar(methodName: "option", eventName: "progressChanging"): Function;
    /** Set progressChanging option(event) to wijprogressbar widget */
    wijprogressbar(methodName: "option", eventName: "progressChanging", progressChangingEventValue: (e?, data?) => void): JQuery;
    
    /** Get beforeProgressChanging option(event) of wijprogressbar widget */
    wijprogressbar(methodName: "option", eventName: "beforeProgressChanging"): Function;
    /** Set beforeProgressChanging option(event) to wijprogressbar widget */
    wijprogressbar(methodName: "option", eventName: "beforeProgressChanging", beforeProgressChangingEventValue: (e?, data?) => void): JQuery;
    
    /** Get progressChanged option(event) of wijprogressbar widget */
    wijprogressbar(methodName: "option", eventName: "progressChanged"): Function;
    /** Set progressChanged option(event) to wijprogressbar widget */
    wijprogressbar(methodName: "option", eventName: "progressChanged", progressChangedEventValue: (e?, data?) => void): JQuery;
    
    
}

/** Definitions of wijradialgauge widget */
interface JQuery {

    /** Initialize a wijradialgauge widget */
    wijradialgauge(): JQuery;
    /** Initialize a wijradialgauge widget with the given options */
    wijradialgauge(options: Object): JQuery;
    wijradialgauge(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijradialgauge widget */
    wijradialgauge(methodName: "option", optionName: string): any;
    /** Set options to wijradialgauge widget */
    wijradialgauge(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijradialgauge widget */
    wijradialgauge(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Remove the functionality completely. This will return the element back to its pre-init state. */
    wijradialgauge(methodName: "destroy") ;
    
    /** Get radius option of wijradialgauge widget */
    wijradialgauge(methodName: "option", optionName: "radius") ;
    /** Set radius option to wijradialgauge widget */
    wijradialgauge(methodName: "option", optionName: "radius", radiusValue ): JQuery;
    
    /** Get startAngle option of wijradialgauge widget */
    wijradialgauge(methodName: "option", optionName: "startAngle") ;
    /** Set startAngle option to wijradialgauge widget */
    wijradialgauge(methodName: "option", optionName: "startAngle", startAngleValue ): JQuery;
    
    /** Get sweepAngle option of wijradialgauge widget */
    wijradialgauge(methodName: "option", optionName: "sweepAngle") ;
    /** Set sweepAngle option to wijradialgauge widget */
    wijradialgauge(methodName: "option", optionName: "sweepAngle", sweepAngleValue ): JQuery;
    
    /** Get pointer option of wijradialgauge widget */
    wijradialgauge(methodName: "option", optionName: "pointer") ;
    /** Set pointer option to wijradialgauge widget */
    wijradialgauge(methodName: "option", optionName: "pointer", pointerValue ): JQuery;
    
    /** Get origin option of wijradialgauge widget */
    wijradialgauge(methodName: "option", optionName: "origin") ;
    /** Set origin option to wijradialgauge widget */
    wijradialgauge(methodName: "option", optionName: "origin", originValue ): JQuery;
    
    /** Get labels option of wijradialgauge widget */
    wijradialgauge(methodName: "option", optionName: "labels") ;
    /** Set labels option to wijradialgauge widget */
    wijradialgauge(methodName: "option", optionName: "labels", labelsValue ): JQuery;
    
    /** Get tickMinor option of wijradialgauge widget */
    wijradialgauge(methodName: "option", optionName: "tickMinor") ;
    /** Set tickMinor option to wijradialgauge widget */
    wijradialgauge(methodName: "option", optionName: "tickMinor", tickMinorValue ): JQuery;
    
    /** Get tickMajor option of wijradialgauge widget */
    wijradialgauge(methodName: "option", optionName: "tickMajor") ;
    /** Set tickMajor option to wijradialgauge widget */
    wijradialgauge(methodName: "option", optionName: "tickMajor", tickMajorValue ): JQuery;
    
    /** Get cap option of wijradialgauge widget */
    wijradialgauge(methodName: "option", optionName: "cap") ;
    /** Set cap option to wijradialgauge widget */
    wijradialgauge(methodName: "option", optionName: "cap", capValue ): JQuery;
    
    /** Get face option of wijradialgauge widget */
    wijradialgauge(methodName: "option", optionName: "face") ;
    /** Set face option to wijradialgauge widget */
    wijradialgauge(methodName: "option", optionName: "face", faceValue ): JQuery;
    
    
}

/** Definitions of wijradio widget */
interface JQuery {

    /** Initialize a wijradio widget */
    wijradio(): JQuery;
    /** Initialize a wijradio widget with the given options */
    wijradio(options: Object): JQuery;
    wijradio(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijradio widget */
    wijradio(methodName: "option", optionName: string): any;
    /** Set options to wijradio widget */
    wijradio(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijradio widget */
    wijradio(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Use the refresh method to set the radio button's style. */
    wijradio(methodName: "refresh") ;
    
    /** Remove the functionality completely. This will return the element back to its pre-init state. */
    wijradio(methodName: "destroy") ;
    
    /** Get checked option of wijradio widget */
    wijradio(methodName: "option", optionName: "checked") ;
    /** Set checked option to wijradio widget */
    wijradio(methodName: "option", optionName: "checked", checkedValue ): JQuery;
    
    /** Get changed option(event) of wijradio widget */
    wijradio(methodName: "option", eventName: "changed"): Function;
    /** Set changed option(event) to wijradio widget */
    wijradio(methodName: "option", eventName: "changed", changedEventValue: (e?, data?) => void): JQuery;
    
    
}

/** Definitions of wijrating widget */
interface JQuery {

    /** Initialize a wijrating widget */
    wijrating(): JQuery;
    /** Initialize a wijrating widget with the given options */
    wijrating(options: Object): JQuery;
    wijrating(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijrating widget */
    wijrating(methodName: "option", optionName: string): any;
    /** Set options to wijrating widget */
    wijrating(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijrating widget */
    wijrating(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** The destroy() method will remove the rating functionality completely 
      * and will return the element to its pre-init state.
      */
    wijrating(methodName: "destroy") ;
    
    /** Get disabled option of wijrating widget */
    wijrating(methodName: "option", optionName: "disabled") ;
    /** Set disabled option to wijrating widget */
    wijrating(methodName: "option", optionName: "disabled", disabledValue ): JQuery;
    
    /** Get count option of wijrating widget */
    wijrating(methodName: "option", optionName: "count") ;
    /** Set count option to wijrating widget */
    wijrating(methodName: "option", optionName: "count", countValue ): JQuery;
    
    /** Get split option of wijrating widget */
    wijrating(methodName: "option", optionName: "split") ;
    /** Set split option to wijrating widget */
    wijrating(methodName: "option", optionName: "split", splitValue ): JQuery;
    
    /** Get totalValue option of wijrating widget */
    wijrating(methodName: "option", optionName: "totalValue") ;
    /** Set totalValue option to wijrating widget */
    wijrating(methodName: "option", optionName: "totalValue", totalValueValue ): JQuery;
    
    /** Get value option of wijrating widget */
    wijrating(methodName: "option", optionName: "value") ;
    /** Set value option to wijrating widget */
    wijrating(methodName: "option", optionName: "value", valueValue ): JQuery;
    
    /** Get min option of wijrating widget */
    wijrating(methodName: "option", optionName: "min") ;
    /** Set min option to wijrating widget */
    wijrating(methodName: "option", optionName: "min", minValue ): JQuery;
    
    /** Get max option of wijrating widget */
    wijrating(methodName: "option", optionName: "max") ;
    /** Set max option to wijrating widget */
    wijrating(methodName: "option", optionName: "max", maxValue ): JQuery;
    
    /** Get resetButton option of wijrating widget */
    wijrating(methodName: "option", optionName: "resetButton") ;
    /** Set resetButton option to wijrating widget */
    wijrating(methodName: "option", optionName: "resetButton", resetButtonValue ): JQuery;
    
    /** Get hint option of wijrating widget */
    wijrating(methodName: "option", optionName: "hint") ;
    /** Set hint option to wijrating widget */
    wijrating(methodName: "option", optionName: "hint", hintValue ): JQuery;
    
    /** Get orientation option of wijrating widget */
    wijrating(methodName: "option", optionName: "orientation") ;
    /** Set orientation option to wijrating widget */
    wijrating(methodName: "option", optionName: "orientation", orientationValue ): JQuery;
    
    /** Get direction option of wijrating widget */
    wijrating(methodName: "option", optionName: "direction") ;
    /** Set direction option to wijrating widget */
    wijrating(methodName: "option", optionName: "direction", directionValue ): JQuery;
    
    /** Get ratingMode option of wijrating widget */
    wijrating(methodName: "option", optionName: "ratingMode") ;
    /** Set ratingMode option to wijrating widget */
    wijrating(methodName: "option", optionName: "ratingMode", ratingModeValue ): JQuery;
    
    /** Get icons option of wijrating widget */
    wijrating(methodName: "option", optionName: "icons") ;
    /** Set icons option to wijrating widget */
    wijrating(methodName: "option", optionName: "icons", iconsValue ): JQuery;
    
    /** Get iconWidth option of wijrating widget */
    wijrating(methodName: "option", optionName: "iconWidth") ;
    /** Set iconWidth option to wijrating widget */
    wijrating(methodName: "option", optionName: "iconWidth", iconWidthValue ): JQuery;
    
    /** Get iconHeight option of wijrating widget */
    wijrating(methodName: "option", optionName: "iconHeight") ;
    /** Set iconHeight option to wijrating widget */
    wijrating(methodName: "option", optionName: "iconHeight", iconHeightValue ): JQuery;
    
    /** Get animation option of wijrating widget */
    wijrating(methodName: "option", optionName: "animation") ;
    /** Set animation option to wijrating widget */
    wijrating(methodName: "option", optionName: "animation", animationValue ): JQuery;
    
    /** Get rating option(event) of wijrating widget */
    wijrating(methodName: "option", eventName: "rating"): Function;
    /** Set rating option(event) to wijrating widget */
    wijrating(methodName: "option", eventName: "rating", ratingEventValue: (e?, data?) => void): JQuery;
    
    /** Get rated option(event) of wijrating widget */
    wijrating(methodName: "option", eventName: "rated"): Function;
    /** Set rated option(event) to wijrating widget */
    wijrating(methodName: "option", eventName: "rated", ratedEventValue: (e?, data?) => void): JQuery;
    
    /** Get reset option(event) of wijrating widget */
    wijrating(methodName: "option", eventName: "reset"): Function;
    /** Set reset option(event) to wijrating widget */
    wijrating(methodName: "option", eventName: "reset", resetEventValue: (e?) => void): JQuery;
    
    /** Get hover option(event) of wijrating widget */
    wijrating(methodName: "option", eventName: "hover"): Function;
    /** Set hover option(event) to wijrating widget */
    wijrating(methodName: "option", eventName: "hover", hoverEventValue: (e?, data?) => void): JQuery;
    
    
}

/** Definitions of wijribbon widget */
interface JQuery {

    /** Initialize a wijribbon widget */
    wijribbon(): JQuery;
    /** Initialize a wijribbon widget with the given options */
    wijribbon(options: Object): JQuery;
    wijribbon(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijribbon widget */
    wijribbon(methodName: "option", optionName: string): any;
    /** Set options to wijribbon widget */
    wijribbon(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijribbon widget */
    wijribbon(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Sets a ribbon tab page as visible or not.
      * @param {string} id The id of the tab page.
      * @param {bool} visible The visible state of the tab page.
      */
    wijribbon(methodName: "setTabPageVisible", id: any, visible: boolean) ;
    
    /** Remove the functionality completely. This will return the element back to its pre-init state. */
    wijribbon(methodName: "destroy") ;
    
    /** The method sets the chosen button as enabled or disabled according to the command name.
      * @param {string} commandName The name of the command.
      * @param {bool} disabled The disabled state of the button, true or false.
      */
    wijribbon(methodName: "setButtonDisabled", commandName: any, disabled: boolean) ;
    
    /** The method sets the ribbon buttons as enabled or disabled according to the command name.
      * @param {object} commands An object that contains commands infos that need to change state,
      * key is command name, value is button disabled state, true or false.
      */
    wijribbon(methodName: "setButtonsDisabled", commands: any) ;
    
    /** The method sets sets the buttons as checked or not checked.
      * @param {object} commands An object that contains commands infos that need to change state,
      * key is command name, value is button checked state, true or false.
      */
    wijribbon(methodName: "setButtonsChecked", commands: any) ;
    
    /** The method used to push the custom button to button collection.
      * @param {string} cmdName The command of the button.
      * @param {Object} eleObj The object of the button information.
      */
    wijribbon(methodName: "registerButtonInformation", cmdName: any, eleObj: any) ;
    
    /** The custom button trigger ribbon click
      * @param {e} e the event information.
      * @param {obj} eleObj The data information.
      */
    wijribbon(methodName: "ribbonClick", e: Event, eleObj: any) ;
    
    /** Sets a ribbon button as checked or not checked.
      * @param {string} commandName The command name of the button.
      * @param {bool} checked The checked state of the button.
      * @param {string} name The parent name of the button.
      */
    wijribbon(methodName: "setButtonChecked", commandName: any, checked: boolean, name: any) ;
    
    /** Get compactMode option of wijribbon widget */
    wijribbon(methodName: "option", optionName: "compactMode") ;
    /** Set compactMode option to wijribbon widget */
    wijribbon(methodName: "option", optionName: "compactMode", compactModeValue ): JQuery;
    
    /** Get data option of wijribbon widget */
    wijribbon(methodName: "option", optionName: "data") ;
    /** Set data option to wijribbon widget */
    wijribbon(methodName: "option", optionName: "data", dataValue ): JQuery;
    
    /** Get click option(event) of wijribbon widget */
    wijribbon(methodName: "option", eventName: "click"): Function;
    /** Set click option(event) to wijribbon widget */
    wijribbon(methodName: "option", eventName: "click", clickEventValue: (e?, data?) => void): JQuery;
    
    
}

/** Definitions of wijscatterchart widget */
interface JQuery {

    /** Initialize a wijscatterchart widget */
    wijscatterchart(): JQuery;
    /** Initialize a wijscatterchart widget with the given options */
    wijscatterchart(options: Object): JQuery;
    wijscatterchart(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijscatterchart widget */
    wijscatterchart(methodName: "option", optionName: string): any;
    /** Set options to wijscatterchart widget */
    wijscatterchart(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijscatterchart widget */
    wijscatterchart(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Remove the functionality completely. This will return the element back to its pre-init state */
    wijscatterchart(methodName: "destroy") ;
    
    /** Returns the scatter element with the given series index and scatter index.
      * @param {number} seriesIndex The index of the series
      * @param {number} scatterIndex The index of the scatter element
      * @returns
      * {Raphael Element} if scatterIndex is not specified, return a list of scatters of specified seriesIndex, 
      * else return the specified scatter element
      */
    wijscatterchart(methodName: "getScatter", seriesIndex: any, scatterIndex: any): RaphaelElement;
    
    /** Get animation option of wijscatterchart widget */
    wijscatterchart(methodName: "option", optionName: "animation") ;
    /** Set animation option to wijscatterchart widget */
    wijscatterchart(methodName: "option", optionName: "animation", animationValue ): JQuery;
    
    /** Get showChartLabels option of wijscatterchart widget */
    wijscatterchart(methodName: "option", optionName: "showChartLabels") ;
    /** Set showChartLabels option to wijscatterchart widget */
    wijscatterchart(methodName: "option", optionName: "showChartLabels", showChartLabelsValue ): JQuery;
    
    /** Get seriesTransition option of wijscatterchart widget */
    wijscatterchart(methodName: "option", optionName: "seriesTransition") ;
    /** Set seriesTransition option to wijscatterchart widget */
    wijscatterchart(methodName: "option", optionName: "seriesTransition", seriesTransitionValue ): JQuery;
    
    /** Get zoomOnHover option of wijscatterchart widget */
    wijscatterchart(methodName: "option", optionName: "zoomOnHover") ;
    /** Set zoomOnHover option to wijscatterchart widget */
    wijscatterchart(methodName: "option", optionName: "zoomOnHover", zoomOnHoverValue ): JQuery;
    
    /** Get mouseDown option(event) of wijscatterchart widget */
    wijscatterchart(methodName: "option", eventName: "mouseDown"): Function;
    /** Set mouseDown option(event) to wijscatterchart widget */
    wijscatterchart(methodName: "option", eventName: "mouseDown", mouseDownEventValue: (e?, data?) => void): JQuery;
    
    /** Get mouseUp option(event) of wijscatterchart widget */
    wijscatterchart(methodName: "option", eventName: "mouseUp"): Function;
    /** Set mouseUp option(event) to wijscatterchart widget */
    wijscatterchart(methodName: "option", eventName: "mouseUp", mouseUpEventValue: (e?, data?) => void): JQuery;
    
    /** Get mouseOver option(event) of wijscatterchart widget */
    wijscatterchart(methodName: "option", eventName: "mouseOver"): Function;
    /** Set mouseOver option(event) to wijscatterchart widget */
    wijscatterchart(methodName: "option", eventName: "mouseOver", mouseOverEventValue: (e?, data?) => void): JQuery;
    
    /** Get mouseOut option(event) of wijscatterchart widget */
    wijscatterchart(methodName: "option", eventName: "mouseOut"): Function;
    /** Set mouseOut option(event) to wijscatterchart widget */
    wijscatterchart(methodName: "option", eventName: "mouseOut", mouseOutEventValue: (e?, data?) => void): JQuery;
    
    /** Get mouseMove option(event) of wijscatterchart widget */
    wijscatterchart(methodName: "option", eventName: "mouseMove"): Function;
    /** Set mouseMove option(event) to wijscatterchart widget */
    wijscatterchart(methodName: "option", eventName: "mouseMove", mouseMoveEventValue: (e?, data?) => void): JQuery;
    
    /** Get click option(event) of wijscatterchart widget */
    wijscatterchart(methodName: "option", eventName: "click"): Function;
    /** Set click option(event) to wijscatterchart widget */
    wijscatterchart(methodName: "option", eventName: "click", clickEventValue: (e?, data?) => void): JQuery;
    
    
}

/** Definitions of JQueryUISlider widget */
interface JQuery {

    /** Initialize a JQueryUISlider widget */
    JQueryUISlider(): JQuery;
    /** Initialize a JQueryUISlider widget with the given options */
    JQueryUISlider(options: Object): JQuery;
    JQueryUISlider(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of JQueryUISlider widget */
    JQueryUISlider(methodName: "option", optionName: string): any;
    /** Set options to JQueryUISlider widget */
    JQueryUISlider(methodName: "option", optionValues: Object): any;
    /** Set specified option to JQueryUISlider widget */
    JQueryUISlider(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** This option can be used to specify multiple handles.
      * @param {?number} index the first value.
      * @param {?number} val the second value.
      * @remarks
      * If the range option is set to true, the length of values should be 2.
      */
    JQueryUISlider(methodName: "values", index?: any, val?: any) ;
    
    /** Determines the value of the slider, if there's only one handle.
      * @param {?number} val the specified value.
      * @remarks
      * If there is more than one handle, determines the value of the first handle.
      */
    JQueryUISlider(methodName: "value", val?: any) ;
    
    
}

/** Definitions of wijslider widget */
interface JQuery {

    /** Initialize a wijslider widget */
    wijslider(): JQuery;
    /** Initialize a wijslider widget with the given options */
    wijslider(options: Object): JQuery;
    wijslider(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijslider widget */
    wijslider(methodName: "option", optionName: string): any;
    /** Set options to wijslider widget */
    wijslider(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijslider widget */
    wijslider(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** This option can be used to specify multiple handles.
      * @param {?number} index the first value.
      * @param {?number} val the second value.
      * @remarks
      * If the range option is set to true, the length of values should be 2.
      */
    wijslider(methodName: "values", index?: any, val?: any) ;
    
    /** Determines the value of the slider, if there's only one handle.
      * @param {?number} val the specified value.
      * @remarks
      * If there is more than one handle, determines the value of the first handle.
      */
    wijslider(methodName: "value", val?: any) ;
    
    /** Refresh the wijslider widget. */
    wijslider(methodName: "refresh") ;
    
    /** Remove the functionality completely. This will return the element back to its pre-init state. */
    wijslider(methodName: "destroy") ;
    
    /** Get dragFill option of wijslider widget */
    wijslider(methodName: "option", optionName: "dragFill") ;
    /** Set dragFill option to wijslider widget */
    wijslider(methodName: "option", optionName: "dragFill", dragFillValue ): JQuery;
    
    /** Get minRange option of wijslider widget */
    wijslider(methodName: "option", optionName: "minRange") ;
    /** Set minRange option to wijslider widget */
    wijslider(methodName: "option", optionName: "minRange", minRangeValue ): JQuery;
    
    /** Get animate option of wijslider widget */
    wijslider(methodName: "option", optionName: "animate") ;
    /** Set animate option to wijslider widget */
    wijslider(methodName: "option", optionName: "animate", animateValue ): JQuery;
    
    /** Get max option of wijslider widget */
    wijslider(methodName: "option", optionName: "max") ;
    /** Set max option to wijslider widget */
    wijslider(methodName: "option", optionName: "max", maxValue ): JQuery;
    
    /** Get min option of wijslider widget */
    wijslider(methodName: "option", optionName: "min") ;
    /** Set min option to wijslider widget */
    wijslider(methodName: "option", optionName: "min", minValue ): JQuery;
    
    /** Get orientation option of wijslider widget */
    wijslider(methodName: "option", optionName: "orientation") ;
    /** Set orientation option to wijslider widget */
    wijslider(methodName: "option", optionName: "orientation", orientationValue ): JQuery;
    
    /** Get range option of wijslider widget */
    wijslider(methodName: "option", optionName: "range") ;
    /** Set range option to wijslider widget */
    wijslider(methodName: "option", optionName: "range", rangeValue ): JQuery;
    
    /** Get step option of wijslider widget */
    wijslider(methodName: "option", optionName: "step") ;
    /** Set step option to wijslider widget */
    wijslider(methodName: "option", optionName: "step", stepValue ): JQuery;
    
    /** Get value option of wijslider widget */
    wijslider(methodName: "option", optionName: "value") ;
    /** Set value option to wijslider widget */
    wijslider(methodName: "option", optionName: "value", valueValue ): JQuery;
    
    /** Get values option of wijslider widget */
    wijslider(methodName: "option", optionName: "values") ;
    /** Set values option to wijslider widget */
    wijslider(methodName: "option", optionName: "values", valuesValue ): JQuery;
    
    /** Get buttonMouseOver option(event) of wijslider widget */
    wijslider(methodName: "option", eventName: "buttonMouseOver"): Function;
    /** Set buttonMouseOver option(event) to wijslider widget */
    wijslider(methodName: "option", eventName: "buttonMouseOver", buttonMouseOverEventValue: (e?, args?) => void): JQuery;
    
    /** Get buttonMouseOut option(event) of wijslider widget */
    wijslider(methodName: "option", eventName: "buttonMouseOut"): Function;
    /** Set buttonMouseOut option(event) to wijslider widget */
    wijslider(methodName: "option", eventName: "buttonMouseOut", buttonMouseOutEventValue: (e?, args?) => void): JQuery;
    
    /** Get buttonMouseDown option(event) of wijslider widget */
    wijslider(methodName: "option", eventName: "buttonMouseDown"): Function;
    /** Set buttonMouseDown option(event) to wijslider widget */
    wijslider(methodName: "option", eventName: "buttonMouseDown", buttonMouseDownEventValue: (e?, args?) => void): JQuery;
    
    /** Get buttonMouseUp option(event) of wijslider widget */
    wijslider(methodName: "option", eventName: "buttonMouseUp"): Function;
    /** Set buttonMouseUp option(event) to wijslider widget */
    wijslider(methodName: "option", eventName: "buttonMouseUp", buttonMouseUpEventValue: (e?, args?) => void): JQuery;
    
    /** Get buttonClick option(event) of wijslider widget */
    wijslider(methodName: "option", eventName: "buttonClick"): Function;
    /** Set buttonClick option(event) to wijslider widget */
    wijslider(methodName: "option", eventName: "buttonClick", buttonClickEventValue: (e?, args?) => void): JQuery;
    
    /** Get change option(event) of wijslider widget */
    wijslider(methodName: "option", eventName: "change"): Function;
    /** Set change option(event) to wijslider widget */
    wijslider(methodName: "option", eventName: "change", changeEventValue: (e?) => void): JQuery;
    
    /** Get slide option(event) of wijslider widget */
    wijslider(methodName: "option", eventName: "slide"): Function;
    /** Set slide option(event) to wijslider widget */
    wijslider(methodName: "option", eventName: "slide", slideEventValue: (e?) => void): JQuery;
    
    /** Get start option(event) of wijslider widget */
    wijslider(methodName: "option", eventName: "start"): Function;
    /** Set start option(event) to wijslider widget */
    wijslider(methodName: "option", eventName: "start", startEventValue: (e?) => void): JQuery;
    
    /** Get stop option(event) of wijslider widget */
    wijslider(methodName: "option", eventName: "stop"): Function;
    /** Set stop option(event) to wijslider widget */
    wijslider(methodName: "option", eventName: "stop", stopEventValue: (e?) => void): JQuery;
    
    
}

/** Definitions of wijsparkline widget */
interface JQuery {

    /** Initialize a wijsparkline widget */
    wijsparkline(): JQuery;
    /** Initialize a wijsparkline widget with the given options */
    wijsparkline(options: Object): JQuery;
    wijsparkline(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijsparkline widget */
    wijsparkline(methodName: "option", optionName: string): any;
    /** Set options to wijsparkline widget */
    wijsparkline(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijsparkline widget */
    wijsparkline(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** This method redraws the chart. */
    wijsparkline(methodName: "redraw") ;
    
    /** Remove the functionality completely. This will return the element back to its pre-init state. */
    wijsparkline(methodName: "destroy") ;
    
    /** Get type option of wijsparkline widget */
    wijsparkline(methodName: "option", optionName: "type") ;
    /** Set type option to wijsparkline widget */
    wijsparkline(methodName: "option", optionName: "type", typeValue ): JQuery;
    
    /** Get seriesList option of wijsparkline widget */
    wijsparkline(methodName: "option", optionName: "seriesList") ;
    /** Set seriesList option to wijsparkline widget */
    wijsparkline(methodName: "option", optionName: "seriesList", seriesListValue ): JQuery;
    
    /** Get width option of wijsparkline widget */
    wijsparkline(methodName: "option", optionName: "width") ;
    /** Set width option to wijsparkline widget */
    wijsparkline(methodName: "option", optionName: "width", widthValue ): JQuery;
    
    /** Get height option of wijsparkline widget */
    wijsparkline(methodName: "option", optionName: "height") ;
    /** Set height option to wijsparkline widget */
    wijsparkline(methodName: "option", optionName: "height", heightValue ): JQuery;
    
    /** Get data option of wijsparkline widget */
    wijsparkline(methodName: "option", optionName: "data") ;
    /** Set data option to wijsparkline widget */
    wijsparkline(methodName: "option", optionName: "data", dataValue ): JQuery;
    
    /** Get bind option of wijsparkline widget */
    wijsparkline(methodName: "option", optionName: "bind") ;
    /** Set bind option to wijsparkline widget */
    wijsparkline(methodName: "option", optionName: "bind", bindValue ): JQuery;
    
    /** Get seriesStyles option of wijsparkline widget */
    wijsparkline(methodName: "option", optionName: "seriesStyles") ;
    /** Set seriesStyles option to wijsparkline widget */
    wijsparkline(methodName: "option", optionName: "seriesStyles", seriesStylesValue ): JQuery;
    
    /** Get animation option of wijsparkline widget */
    wijsparkline(methodName: "option", optionName: "animation") ;
    /** Set animation option to wijsparkline widget */
    wijsparkline(methodName: "option", optionName: "animation", animationValue ): JQuery;
    
    /** Get valueAxis option of wijsparkline widget */
    wijsparkline(methodName: "option", optionName: "valueAxis") ;
    /** Set valueAxis option to wijsparkline widget */
    wijsparkline(methodName: "option", optionName: "valueAxis", valueAxisValue ): JQuery;
    
    /** Get origin option of wijsparkline widget */
    wijsparkline(methodName: "option", optionName: "origin") ;
    /** Set origin option to wijsparkline widget */
    wijsparkline(methodName: "option", optionName: "origin", originValue ): JQuery;
    
    /** Get min option of wijsparkline widget */
    wijsparkline(methodName: "option", optionName: "min") ;
    /** Set min option to wijsparkline widget */
    wijsparkline(methodName: "option", optionName: "min", minValue ): JQuery;
    
    /** Get max option of wijsparkline widget */
    wijsparkline(methodName: "option", optionName: "max") ;
    /** Set max option to wijsparkline widget */
    wijsparkline(methodName: "option", optionName: "max", maxValue ): JQuery;
    
    /** Get columnWidth option of wijsparkline widget */
    wijsparkline(methodName: "option", optionName: "columnWidth") ;
    /** Set columnWidth option to wijsparkline widget */
    wijsparkline(methodName: "option", optionName: "columnWidth", columnWidthValue ): JQuery;
    
    /** Get tooltipFormat option of wijsparkline widget */
    wijsparkline(methodName: "option", optionName: "tooltipFormat") ;
    /** Set tooltipFormat option to wijsparkline widget */
    wijsparkline(methodName: "option", optionName: "tooltipFormat", tooltipFormatValue ): JQuery;
    
    /** Get tooltipContent option of wijsparkline widget */
    wijsparkline(methodName: "option", optionName: "tooltipContent") ;
    /** Set tooltipContent option to wijsparkline widget */
    wijsparkline(methodName: "option", optionName: "tooltipContent", tooltipContentValue ): JQuery;
    
    /** Get disabled option of wijsparkline widget */
    wijsparkline(methodName: "option", optionName: "disabled") ;
    /** Set disabled option to wijsparkline widget */
    wijsparkline(methodName: "option", optionName: "disabled", disabledValue ): JQuery;
    
    /** Get mouseMove option(event) of wijsparkline widget */
    wijsparkline(methodName: "option", eventName: "mouseMove"): Function;
    /** Set mouseMove option(event) to wijsparkline widget */
    wijsparkline(methodName: "option", eventName: "mouseMove", mouseMoveEventValue: (e?, args?) => void): JQuery;
    
    /** Get click option(event) of wijsparkline widget */
    wijsparkline(methodName: "option", eventName: "click"): Function;
    /** Set click option(event) to wijsparkline widget */
    wijsparkline(methodName: "option", eventName: "click", clickEventValue: (e?, args?) => void): JQuery;
    
    
}

/** Definitions of wijsplitter widget */
interface JQuery {

    /** Initialize a wijsplitter widget */
    wijsplitter(): JQuery;
    /** Initialize a wijsplitter widget with the given options */
    wijsplitter(options: Object): JQuery;
    wijsplitter(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijsplitter widget */
    wijsplitter(methodName: "option", optionName: string): any;
    /** Set options to wijsplitter widget */
    wijsplitter(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijsplitter widget */
    wijsplitter(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Removes the splitter functionality completely.This will return the element back to its pre - init state.
      * @example
      * $("selector").wijsplitter("destroy");
      */
    wijsplitter(methodName: "destroy") ;
    
    /** Forces the widget to recreate the splitter.
      * @param {bool} size A boolean value to indicate whether the refresh is triggered
      * because the size of widget is changed.
      * @param {bool} state A boolean value to indicate whether the refresh is triggered 
      * because the state of expander is changed(expanded/collapsed).
      */
    wijsplitter(methodName: "refresh", size?: boolean, state?: boolean) ;
    
    /** Get barZIndex option of wijsplitter widget */
    wijsplitter(methodName: "option", optionName: "barZIndex") ;
    /** Set barZIndex option to wijsplitter widget */
    wijsplitter(methodName: "option", optionName: "barZIndex", barZIndexValue ): JQuery;
    
    /** Get showExpander option of wijsplitter widget */
    wijsplitter(methodName: "option", optionName: "showExpander") ;
    /** Set showExpander option to wijsplitter widget */
    wijsplitter(methodName: "option", optionName: "showExpander", showExpanderValue ): JQuery;
    
    /** Get splitterDistance option of wijsplitter widget */
    wijsplitter(methodName: "option", optionName: "splitterDistance") ;
    /** Set splitterDistance option to wijsplitter widget */
    wijsplitter(methodName: "option", optionName: "splitterDistance", splitterDistanceValue ): JQuery;
    
    /** Get orientation option of wijsplitter widget */
    wijsplitter(methodName: "option", optionName: "orientation") ;
    /** Set orientation option to wijsplitter widget */
    wijsplitter(methodName: "option", optionName: "orientation", orientationValue ): JQuery;
    
    /** Get fullSplit option of wijsplitter widget */
    wijsplitter(methodName: "option", optionName: "fullSplit") ;
    /** Set fullSplit option to wijsplitter widget */
    wijsplitter(methodName: "option", optionName: "fullSplit", fullSplitValue ): JQuery;
    
    /** Get resizeSettings option of wijsplitter widget */
    wijsplitter(methodName: "option", optionName: "resizeSettings") ;
    /** Set resizeSettings option to wijsplitter widget */
    wijsplitter(methodName: "option", optionName: "resizeSettings", resizeSettingsValue ): JQuery;
    
    /** Get panel1 option of wijsplitter widget */
    wijsplitter(methodName: "option", optionName: "panel1") ;
    /** Set panel1 option to wijsplitter widget */
    wijsplitter(methodName: "option", optionName: "panel1", panel1Value ): JQuery;
    
    /** Get panel2 option of wijsplitter widget */
    wijsplitter(methodName: "option", optionName: "panel2") ;
    /** Set panel2 option to wijsplitter widget */
    wijsplitter(methodName: "option", optionName: "panel2", panel2Value ): JQuery;
    
    /** Get collapsingPanel option of wijsplitter widget */
    wijsplitter(methodName: "option", optionName: "collapsingPanel") ;
    /** Set collapsingPanel option to wijsplitter widget */
    wijsplitter(methodName: "option", optionName: "collapsingPanel", collapsingPanelValue ): JQuery;
    
    /** Get sizing option(event) of wijsplitter widget */
    wijsplitter(methodName: "option", eventName: "sizing"): Function;
    /** Set sizing option(event) to wijsplitter widget */
    wijsplitter(methodName: "option", eventName: "sizing", sizingEventValue: (e?) => void): JQuery;
    
    /** Get sized option(event) of wijsplitter widget */
    wijsplitter(methodName: "option", eventName: "sized"): Function;
    /** Set sized option(event) to wijsplitter widget */
    wijsplitter(methodName: "option", eventName: "sized", sizedEventValue: (e?) => void): JQuery;
    
    /** Get expand option(event) of wijsplitter widget */
    wijsplitter(methodName: "option", eventName: "expand"): Function;
    /** Set expand option(event) to wijsplitter widget */
    wijsplitter(methodName: "option", eventName: "expand", expandEventValue: (e?) => void): JQuery;
    
    /** Get collapse option(event) of wijsplitter widget */
    wijsplitter(methodName: "option", eventName: "collapse"): Function;
    /** Set collapse option(event) to wijsplitter widget */
    wijsplitter(methodName: "option", eventName: "collapse", collapseEventValue: (e?) => void): JQuery;
    
    /** Get expanded option(event) of wijsplitter widget */
    wijsplitter(methodName: "option", eventName: "expanded"): Function;
    /** Set expanded option(event) to wijsplitter widget */
    wijsplitter(methodName: "option", eventName: "expanded", expandedEventValue: (e?) => void): JQuery;
    
    /** Get collapsed option(event) of wijsplitter widget */
    wijsplitter(methodName: "option", eventName: "collapsed"): Function;
    /** Set collapsed option(event) to wijsplitter widget */
    wijsplitter(methodName: "option", eventName: "collapsed", collapsedEventValue: (e?) => void): JQuery;
    
    
}

/** Definitions of wijsuperpanel widget */
interface JQuery {

    /** Initialize a wijsuperpanel widget */
    wijsuperpanel(): JQuery;
    /** Initialize a wijsuperpanel widget with the given options */
    wijsuperpanel(options: Object): JQuery;
    wijsuperpanel(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijsuperpanel widget */
    wijsuperpanel(methodName: "option", optionName: string): any;
    /** Set options to wijsuperpanel widget */
    wijsuperpanel(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijsuperpanel widget */
    wijsuperpanel(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Destroys wijsuperpanel widget and reset the DOM element. */
    wijsuperpanel(methodName: "destroy") ;
    
    /** Determine whether scoll the child DOM element to view 
      * need to scroll the scroll bar
      * @param {DOMElement} child The child to scroll to.
      */
    wijsuperpanel(methodName: "needToScroll", child: HTMLElement) ;
    
    /** Scroll children DOM element to view.
      * @param {DOMElement} child The child to scroll to.
      */
    wijsuperpanel(methodName: "scrollChildIntoView", child: HTMLElement) ;
    
    /** Scroll to horizontal position.
      * @param {number} x The position to scroll to.
      * @param {bool} isScrollValue A value that indicates whether x is value or pixel.
      */
    wijsuperpanel(methodName: "hScrollTo", x: any, isScrollValue?: boolean) ;
    
    /** Scroll to vertical position.
      * @param {number} y The position to scroll to.
      * @param {bool} isScrollValue A value that indicates whether y is value or pixel.
      */
    wijsuperpanel(methodName: "vScrollTo", y: any, isScrollValue?: boolean) ;
    
    /** Convert pixel to scroll value.
      * For example, wijsuperpanel scrolled 50px 
      * which is value 1 after conversion.
      * @param {number} px Length of scrolling.
      * @param {string} dir Scrolling direction. Options are: "h" and "v".
      */
    wijsuperpanel(methodName: "scrollPxToValue", px: any, dir: any) ;
    
    /** Convert scroll value to pixel.
      * For example, scroll value is 1  
      * which makes wijsuperpanel scrolled 50px after conversion.
      * @param {number} scroll value.
      * @param {string} dir Scrolling direction. Options are: "h" and "v".
      */
    wijsuperpanel(methodName: "scrollValueToPx", scroll: any, dir: any) ;
    
    /** Scroll to the specified position.
      * which is value 1 after conversion.
      * @param {number} x Horizontal position to scroll to.
      * @param {number} y Vertical position to scroll to.
      * @param {bool} isScrollValue A value that indicates whether x, y are value or pixel.
      */
    wijsuperpanel(methodName: "scrollTo", x: any, y: any, isScrollValue?: boolean) ;
    
    /** Refreshes wijsuperpanel. 
      * Needs to be called after content being changed.
      * @returns {bool} Returns true if it is successful, else returns false.
      */
    wijsuperpanel(methodName: "refresh"): boolean;
    
    /** Refreshes wijsuperpanel. 
      * Needs to be called after content being changed.
      * @param unfocus
      * @returns {bool} Returns true if it is successful, else returns false.
      */
    wijsuperpanel(methodName: "paintPanel", unfocus: any): boolean;
    
    /** Gets the content element of wijsuperpanel.
      * @returns {jQuery}
      * @example
      * $("selector").wijsuperpanel("getContentElement");
      */
    wijsuperpanel(methodName: "getContentElement") ;
    
    /** Get allowResize option of wijsuperpanel widget */
    wijsuperpanel(methodName: "option", optionName: "allowResize") ;
    /** Set allowResize option to wijsuperpanel widget */
    wijsuperpanel(methodName: "option", optionName: "allowResize", allowResizeValue ): JQuery;
    
    /** Get autoRefresh option of wijsuperpanel widget */
    wijsuperpanel(methodName: "option", optionName: "autoRefresh") ;
    /** Set autoRefresh option to wijsuperpanel widget */
    wijsuperpanel(methodName: "option", optionName: "autoRefresh", autoRefreshValue ): JQuery;
    
    /** Get animationOptions option of wijsuperpanel widget */
    wijsuperpanel(methodName: "option", optionName: "animationOptions") ;
    /** Set animationOptions option to wijsuperpanel widget */
    wijsuperpanel(methodName: "option", optionName: "animationOptions", animationOptionsValue ): JQuery;
    
    /** Get hScroller option of wijsuperpanel widget */
    wijsuperpanel(methodName: "option", optionName: "hScroller") ;
    /** Set hScroller option to wijsuperpanel widget */
    wijsuperpanel(methodName: "option", optionName: "hScroller", hScrollerValue ): JQuery;
    
    /** Get keyboardSupport option of wijsuperpanel widget */
    wijsuperpanel(methodName: "option", optionName: "keyboardSupport") ;
    /** Set keyboardSupport option to wijsuperpanel widget */
    wijsuperpanel(methodName: "option", optionName: "keyboardSupport", keyboardSupportValue ): JQuery;
    
    /** Get keyDownInterval option of wijsuperpanel widget */
    wijsuperpanel(methodName: "option", optionName: "keyDownInterval") ;
    /** Set keyDownInterval option to wijsuperpanel widget */
    wijsuperpanel(methodName: "option", optionName: "keyDownInterval", keyDownIntervalValue ): JQuery;
    
    /** Get mouseWheelSupport option of wijsuperpanel widget */
    wijsuperpanel(methodName: "option", optionName: "mouseWheelSupport") ;
    /** Set mouseWheelSupport option to wijsuperpanel widget */
    wijsuperpanel(methodName: "option", optionName: "mouseWheelSupport", mouseWheelSupportValue ): JQuery;
    
    /** Get bubbleScrollingEvent option of wijsuperpanel widget */
    wijsuperpanel(methodName: "option", optionName: "bubbleScrollingEvent") ;
    /** Set bubbleScrollingEvent option to wijsuperpanel widget */
    wijsuperpanel(methodName: "option", optionName: "bubbleScrollingEvent", bubbleScrollingEventValue ): JQuery;
    
    /** Get resizableOptions option of wijsuperpanel widget */
    wijsuperpanel(methodName: "option", optionName: "resizableOptions") ;
    /** Set resizableOptions option to wijsuperpanel widget */
    wijsuperpanel(methodName: "option", optionName: "resizableOptions", resizableOptionsValue ): JQuery;
    
    /** Get showRounder option of wijsuperpanel widget */
    wijsuperpanel(methodName: "option", optionName: "showRounder") ;
    /** Set showRounder option to wijsuperpanel widget */
    wijsuperpanel(methodName: "option", optionName: "showRounder", showRounderValue ): JQuery;
    
    /** Get vScroller option of wijsuperpanel widget */
    wijsuperpanel(methodName: "option", optionName: "vScroller") ;
    /** Set vScroller option to wijsuperpanel widget */
    wijsuperpanel(methodName: "option", optionName: "vScroller", vScrollerValue ): JQuery;
    
    /** Get customScrolling option of wijsuperpanel widget */
    wijsuperpanel(methodName: "option", optionName: "customScrolling") ;
    /** Set customScrolling option to wijsuperpanel widget */
    wijsuperpanel(methodName: "option", optionName: "customScrolling", customScrollingValue ): JQuery;
    
    /** Get listenContentScroll option of wijsuperpanel widget */
    wijsuperpanel(methodName: "option", optionName: "listenContentScroll") ;
    /** Set listenContentScroll option to wijsuperpanel widget */
    wijsuperpanel(methodName: "option", optionName: "listenContentScroll", listenContentScrollValue ): JQuery;
    
    /** Get hScrollerActivating option(event) of wijsuperpanel widget */
    wijsuperpanel(methodName: "option", eventName: "hScrollerActivating"): Function;
    /** Set hScrollerActivating option(event) to wijsuperpanel widget */
    wijsuperpanel(methodName: "option", eventName: "hScrollerActivating", hScrollerActivatingEventValue: (e?, data?) => void): JQuery;
    
    /** Get resized option(event) of wijsuperpanel widget */
    wijsuperpanel(methodName: "option", eventName: "resized"): Function;
    /** Set resized option(event) to wijsuperpanel widget */
    wijsuperpanel(methodName: "option", eventName: "resized", resizedEventValue: (e?) => void): JQuery;
    
    /** Get dragStop option(event) of wijsuperpanel widget */
    wijsuperpanel(methodName: "option", eventName: "dragStop"): Function;
    /** Set dragStop option(event) to wijsuperpanel widget */
    wijsuperpanel(methodName: "option", eventName: "dragStop", dragStopEventValue: (e?, data?) => void): JQuery;
    
    /** Get painted option(event) of wijsuperpanel widget */
    wijsuperpanel(methodName: "option", eventName: "painted"): Function;
    /** Set painted option(event) to wijsuperpanel widget */
    wijsuperpanel(methodName: "option", eventName: "painted", paintedEventValue: (e?) => void): JQuery;
    
    /** Get scrolling option(event) of wijsuperpanel widget */
    wijsuperpanel(methodName: "option", eventName: "scrolling"): Function;
    /** Set scrolling option(event) to wijsuperpanel widget */
    wijsuperpanel(methodName: "option", eventName: "scrolling", scrollingEventValue: (e?, data?) => void): JQuery;
    
    /** Get scroll option(event) of wijsuperpanel widget */
    wijsuperpanel(methodName: "option", eventName: "scroll"): Function;
    /** Set scroll option(event) to wijsuperpanel widget */
    wijsuperpanel(methodName: "option", eventName: "scroll", scrollEventValue: (e?, data?) => void): JQuery;
    
    /** Get scrolled option(event) of wijsuperpanel widget */
    wijsuperpanel(methodName: "option", eventName: "scrolled"): Function;
    /** Set scrolled option(event) to wijsuperpanel widget */
    wijsuperpanel(methodName: "option", eventName: "scrolled", scrolledEventValue: (e?, data?) => void): JQuery;
    
    /** Get vScrollerActivating option(event) of wijsuperpanel widget */
    wijsuperpanel(methodName: "option", eventName: "vScrollerActivating"): Function;
    /** Set vScrollerActivating option(event) to wijsuperpanel widget */
    wijsuperpanel(methodName: "option", eventName: "vScrollerActivating", vScrollerActivatingEventValue: (e?, data?) => void): JQuery;
    
    
}

/** Definitions of wijtabs widget */
interface JQuery {

    /** Initialize a wijtabs widget */
    wijtabs(): JQuery;
    /** Initialize a wijtabs widget with the given options */
    wijtabs(options: Object): JQuery;
    wijtabs(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijtabs widget */
    wijtabs(methodName: "option", optionName: string): any;
    /** Set options to wijtabs widget */
    wijtabs(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijtabs widget */
    wijtabs(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** The destroy() method will remove the wijtabs functionality completely 
      * and will return the element to its pre-init state.
      */
    wijtabs(methodName: "destroy") ;
    
    /** Terminate all running tab ajax requests and animations.
      * @returns {wijtabs}
      */
    wijtabs(methodName: "abort") ;
    
    /** Selects a tab; for example, a clicked tab.
      * @param {number|string} index The zero-based index of the tab to be selected or
      * the id selector of the panel the tab is associated with.
      * @returns {wijtabs}
      * @example
      * //Select the second tab.
      * $("#element").wijtabs('select', 1);
      */
    wijtabs(methodName: "select", index: any) ;
    
    /** Reload the content of an Ajax tab programmatically. 
      * This method always loads the tab content from the remote location,
      * even if cache is set to true.
      * @param {number} index The zero-based index of the tab to be reloaded.
      * @returns {wijtabs}
      * @example
      * //Reload the second tab.
      * $("#element").wijtabs('load', 1);
      */
    wijtabs(methodName: "load", index: any) ;
    
    /** Add a new tab.
      * @param {string} url A URL consisting of a fragment identifier 
      * only to create an in-page tab or a full url 
      * (relative or absolute, no cross-domain support) to 
      * turn the new tab into an Ajax (remote) tab.
      * @param {string} label The tab label.
      * @param {number} index Zero-based position where to insert the new tab.
      * @returns {wijtabs}
      * @example
      * //Add a new tab to be a second tab.
      * $("#element").wijtabs('add', "http://wijmo.com/newTab", "NewTab", 1);
      */
    wijtabs(methodName: "add", url: any, label: any, index: any) ;
    
    /** Removes a tab.
      * @param {number} index The zero-based index of the tab to be removed.
      * @returns {wijtabs}
      * @example
      * //Removes the second tab
      * $("#element").wijtabs('remove', 1);
      */
    wijtabs(methodName: "remove", index: any) ;
    
    /** Enable a disabled tab.
      * @param {number} index The zero-based index of the tab to be enabled.
      * @returns {wijtabs}
      * @example
      * //Enables the second tab
      * $("#element").wijtabs('enableTab', 1);
      */
    wijtabs(methodName: "enableTab", index: any) ;
    
    /** Disabled a tab.
      * @param {number} index The zero-based index of the tab to be disabled.
      * @returns {wijtabs}
      * @example
      * //Disables the second tab
      * $("#element").wijtabs('disableTab', 1);
      */
    wijtabs(methodName: "disableTab", index: any) ;
    
    /** Changes the url from which an Ajax (remote) tab will be loaded.
      * @param {number} index The zero-based index of the tab of which its URL is to be updated.
      * @param {string} url A URL the content of the tab is loaded from.
      * @returns {wijtabs}
      * @remarks
      * The specified URL will be used for subsequent loads. 
      * Note that you can not only change the URL for an existing remote tab
      * with this method, but you can also turn an in-page tab into a remote tab.
      * @example
      * //Changes the second tab to a new tab url.
      * $("#element").wijtabs('url', 1, "http://wijmo.com/newTabUrl")
      */
    wijtabs(methodName: "url", index: any, url: any) ;
    
    /** Retrieve the number of tabs of the first matched tab pane. */
    wijtabs(methodName: "length") ;
    
    /** Get alignment option of wijtabs widget */
    wijtabs(methodName: "option", optionName: "alignment") ;
    /** Set alignment option to wijtabs widget */
    wijtabs(methodName: "option", optionName: "alignment", alignmentValue ): JQuery;
    
    /** Get sortable option of wijtabs widget */
    wijtabs(methodName: "option", optionName: "sortable") ;
    /** Set sortable option to wijtabs widget */
    wijtabs(methodName: "option", optionName: "sortable", sortableValue ): JQuery;
    
    /** Get scrollable option of wijtabs widget */
    wijtabs(methodName: "option", optionName: "scrollable") ;
    /** Set scrollable option to wijtabs widget */
    wijtabs(methodName: "option", optionName: "scrollable", scrollableValue ): JQuery;
    
    /** Get ajaxOptions option of wijtabs widget */
    wijtabs(methodName: "option", optionName: "ajaxOptions") ;
    /** Set ajaxOptions option to wijtabs widget */
    wijtabs(methodName: "option", optionName: "ajaxOptions", ajaxOptionsValue ): JQuery;
    
    /** Get cache option of wijtabs widget */
    wijtabs(methodName: "option", optionName: "cache") ;
    /** Set cache option to wijtabs widget */
    wijtabs(methodName: "option", optionName: "cache", cacheValue ): JQuery;
    
    /** Get cookie option of wijtabs widget */
    wijtabs(methodName: "option", optionName: "cookie") ;
    /** Set cookie option to wijtabs widget */
    wijtabs(methodName: "option", optionName: "cookie", cookieValue ): JQuery;
    
    /** Get collapsible option of wijtabs widget */
    wijtabs(methodName: "option", optionName: "collapsible") ;
    /** Set collapsible option to wijtabs widget */
    wijtabs(methodName: "option", optionName: "collapsible", collapsibleValue ): JQuery;
    
    /** Get hideOption option of wijtabs widget */
    wijtabs(methodName: "option", optionName: "hideOption") ;
    /** Set hideOption option to wijtabs widget */
    wijtabs(methodName: "option", optionName: "hideOption", hideOptionValue ): JQuery;
    
    /** Get showOption option of wijtabs widget */
    wijtabs(methodName: "option", optionName: "showOption") ;
    /** Set showOption option to wijtabs widget */
    wijtabs(methodName: "option", optionName: "showOption", showOptionValue ): JQuery;
    
    /** Get disabledIndexes option of wijtabs widget */
    wijtabs(methodName: "option", optionName: "disabledIndexes") ;
    /** Set disabledIndexes option to wijtabs widget */
    wijtabs(methodName: "option", optionName: "disabledIndexes", disabledIndexesValue ): JQuery;
    
    /** Get event option of wijtabs widget */
    wijtabs(methodName: "option", optionName: "event") ;
    /** Set event option to wijtabs widget */
    wijtabs(methodName: "option", optionName: "event", eventValue ): JQuery;
    
    /** Get idPrefix option of wijtabs widget */
    wijtabs(methodName: "option", optionName: "idPrefix") ;
    /** Set idPrefix option to wijtabs widget */
    wijtabs(methodName: "option", optionName: "idPrefix", idPrefixValue ): JQuery;
    
    /** Get panelTemplate option of wijtabs widget */
    wijtabs(methodName: "option", optionName: "panelTemplate") ;
    /** Set panelTemplate option to wijtabs widget */
    wijtabs(methodName: "option", optionName: "panelTemplate", panelTemplateValue ): JQuery;
    
    /** Get spinner option of wijtabs widget */
    wijtabs(methodName: "option", optionName: "spinner") ;
    /** Set spinner option to wijtabs widget */
    wijtabs(methodName: "option", optionName: "spinner", spinnerValue ): JQuery;
    
    /** Get tabTemplate option of wijtabs widget */
    wijtabs(methodName: "option", optionName: "tabTemplate") ;
    /** Set tabTemplate option to wijtabs widget */
    wijtabs(methodName: "option", optionName: "tabTemplate", tabTemplateValue ): JQuery;
    
    /** Get add option(event) of wijtabs widget */
    wijtabs(methodName: "option", eventName: "add"): Function;
    /** Set add option(event) to wijtabs widget */
    wijtabs(methodName: "option", eventName: "add", addEventValue: (e?, args?) => void): JQuery;
    
    /** Get remove option(event) of wijtabs widget */
    wijtabs(methodName: "option", eventName: "remove"): Function;
    /** Set remove option(event) to wijtabs widget */
    wijtabs(methodName: "option", eventName: "remove", removeEventValue: (e?, args?) => void): JQuery;
    
    /** Get select option(event) of wijtabs widget */
    wijtabs(methodName: "option", eventName: "select"): Function;
    /** Set select option(event) to wijtabs widget */
    wijtabs(methodName: "option", eventName: "select", selectEventValue: (e?, args?) => void): JQuery;
    
    /** Get beforeShow option(event) of wijtabs widget */
    wijtabs(methodName: "option", eventName: "beforeShow"): Function;
    /** Set beforeShow option(event) to wijtabs widget */
    wijtabs(methodName: "option", eventName: "beforeShow", beforeShowEventValue: (e?, args?) => void): JQuery;
    
    /** Get show option(event) of wijtabs widget */
    wijtabs(methodName: "option", eventName: "show"): Function;
    /** Set show option(event) to wijtabs widget */
    wijtabs(methodName: "option", eventName: "show", showEventValue: (e?, args?) => void): JQuery;
    
    /** Get load option(event) of wijtabs widget */
    wijtabs(methodName: "option", eventName: "load"): Function;
    /** Set load option(event) to wijtabs widget */
    wijtabs(methodName: "option", eventName: "load", loadEventValue: (e?, args?) => void): JQuery;
    
    /** Get disable option(event) of wijtabs widget */
    wijtabs(methodName: "option", eventName: "disable"): Function;
    /** Set disable option(event) to wijtabs widget */
    wijtabs(methodName: "option", eventName: "disable", disableEventValue: (e?, args?) => void): JQuery;
    
    /** Get enable option(event) of wijtabs widget */
    wijtabs(methodName: "option", eventName: "enable"): Function;
    /** Set enable option(event) to wijtabs widget */
    wijtabs(methodName: "option", eventName: "enable", enableEventValue: (e?, args?) => void): JQuery;
    
    
}

/** Definitions of wijtextbox widget */
interface JQuery {

    /** Initialize a wijtextbox widget */
    wijtextbox(): JQuery;
    /** Initialize a wijtextbox widget with the given options */
    wijtextbox(options: Object): JQuery;
    wijtextbox(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijtextbox widget */
    wijtextbox(methodName: "option", optionName: string): any;
    /** Set options to wijtextbox widget */
    wijtextbox(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijtextbox widget */
    wijtextbox(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Remove the functionality completely. This will return the element back to its pre-init state. */
    wijtextbox(methodName: "destroy") ;
    
    
}

/** Definitions of wijtooltip widget */
interface JQuery {

    /** Initialize a wijtooltip widget */
    wijtooltip(): JQuery;
    /** Initialize a wijtooltip widget with the given options */
    wijtooltip(options: Object): JQuery;
    wijtooltip(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijtooltip widget */
    wijtooltip(methodName: "option", optionName: string): any;
    /** Set options to wijtooltip widget */
    wijtooltip(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijtooltip widget */
    wijtooltip(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Removes the wijtooltip functionality completely.
      * This returns the element back to its pre-init state.
      */
    wijtooltip(methodName: "destroy") ;
    
    /** Returns the wijtooltip element.
      * @returns {JQuery}
      */
    wijtooltip(methodName: "widget"): JQuery;
    
    /** Shows the tooltip */
    wijtooltip(methodName: "show") ;
    
    /** Shows the tooltip at the specified position
      * @param {object} point A point value that indicates the position that tooltip will be shown.
      * @example
      * //Shows the tooltip at point {x: 100, y: 120}.
      * $("#tooltip").wijtooltip("showAt", {x:100, y:120});
      */
    wijtooltip(methodName: "showAt", point: any) ;
    
    /** Hides the tooltip. */
    wijtooltip(methodName: "hide") ;
    
    /** Get content option of wijtooltip widget */
    wijtooltip(methodName: "option", optionName: "content") ;
    /** Set content option to wijtooltip widget */
    wijtooltip(methodName: "option", optionName: "content", contentValue ): JQuery;
    
    /** Get title option of wijtooltip widget */
    wijtooltip(methodName: "option", optionName: "title") ;
    /** Set title option to wijtooltip widget */
    wijtooltip(methodName: "option", optionName: "title", titleValue ): JQuery;
    
    /** Get closeBehavior option of wijtooltip widget */
    wijtooltip(methodName: "option", optionName: "closeBehavior") ;
    /** Set closeBehavior option to wijtooltip widget */
    wijtooltip(methodName: "option", optionName: "closeBehavior", closeBehaviorValue ): JQuery;
    
    /** Get mouseTrailing option of wijtooltip widget */
    wijtooltip(methodName: "option", optionName: "mouseTrailing") ;
    /** Set mouseTrailing option to wijtooltip widget */
    wijtooltip(methodName: "option", optionName: "mouseTrailing", mouseTrailingValue ): JQuery;
    
    /** Get triggers option of wijtooltip widget */
    wijtooltip(methodName: "option", optionName: "triggers") ;
    /** Set triggers option to wijtooltip widget */
    wijtooltip(methodName: "option", optionName: "triggers", triggersValue ): JQuery;
    
    /** Get position option of wijtooltip widget */
    wijtooltip(methodName: "option", optionName: "position") ;
    /** Set position option to wijtooltip widget */
    wijtooltip(methodName: "option", optionName: "position", positionValue ): JQuery;
    
    /** Get showCallout option of wijtooltip widget */
    wijtooltip(methodName: "option", optionName: "showCallout") ;
    /** Set showCallout option to wijtooltip widget */
    wijtooltip(methodName: "option", optionName: "showCallout", showCalloutValue ): JQuery;
    
    /** Get animation option of wijtooltip widget */
    wijtooltip(methodName: "option", optionName: "animation") ;
    /** Set animation option to wijtooltip widget */
    wijtooltip(methodName: "option", optionName: "animation", animationValue ): JQuery;
    
    /** Get showAnimation option of wijtooltip widget */
    wijtooltip(methodName: "option", optionName: "showAnimation") ;
    /** Set showAnimation option to wijtooltip widget */
    wijtooltip(methodName: "option", optionName: "showAnimation", showAnimationValue ): JQuery;
    
    /** Get hideAnimation option of wijtooltip widget */
    wijtooltip(methodName: "option", optionName: "hideAnimation") ;
    /** Set hideAnimation option to wijtooltip widget */
    wijtooltip(methodName: "option", optionName: "hideAnimation", hideAnimationValue ): JQuery;
    
    /** Get showDelay option of wijtooltip widget */
    wijtooltip(methodName: "option", optionName: "showDelay") ;
    /** Set showDelay option to wijtooltip widget */
    wijtooltip(methodName: "option", optionName: "showDelay", showDelayValue ): JQuery;
    
    /** Get hideDelay option of wijtooltip widget */
    wijtooltip(methodName: "option", optionName: "hideDelay") ;
    /** Set hideDelay option to wijtooltip widget */
    wijtooltip(methodName: "option", optionName: "hideDelay", hideDelayValue ): JQuery;
    
    /** Get calloutAnimation option of wijtooltip widget */
    wijtooltip(methodName: "option", optionName: "calloutAnimation") ;
    /** Set calloutAnimation option to wijtooltip widget */
    wijtooltip(methodName: "option", optionName: "calloutAnimation", calloutAnimationValue ): JQuery;
    
    /** Get calloutFilled option of wijtooltip widget */
    wijtooltip(methodName: "option", optionName: "calloutFilled") ;
    /** Set calloutFilled option to wijtooltip widget */
    wijtooltip(methodName: "option", optionName: "calloutFilled", calloutFilledValue ): JQuery;
    
    /** Get modal option of wijtooltip widget */
    wijtooltip(methodName: "option", optionName: "modal") ;
    /** Set modal option to wijtooltip widget */
    wijtooltip(methodName: "option", optionName: "modal", modalValue ): JQuery;
    
    /** Get group option of wijtooltip widget */
    wijtooltip(methodName: "option", optionName: "group") ;
    /** Set group option to wijtooltip widget */
    wijtooltip(methodName: "option", optionName: "group", groupValue ): JQuery;
    
    /** Get ajaxCallback option of wijtooltip widget */
    wijtooltip(methodName: "option", optionName: "ajaxCallback") ;
    /** Set ajaxCallback option to wijtooltip widget */
    wijtooltip(methodName: "option", optionName: "ajaxCallback", ajaxCallbackValue ): JQuery;
    
    /** Get cssClass option of wijtooltip widget */
    wijtooltip(methodName: "option", optionName: "cssClass") ;
    /** Set cssClass option to wijtooltip widget */
    wijtooltip(methodName: "option", optionName: "cssClass", cssClassValue ): JQuery;
    
    /** Get controlwidth option of wijtooltip widget */
    wijtooltip(methodName: "option", optionName: "controlwidth") ;
    /** Set controlwidth option to wijtooltip widget */
    wijtooltip(methodName: "option", optionName: "controlwidth", controlwidthValue ): JQuery;
    
    /** Get controlheight option of wijtooltip widget */
    wijtooltip(methodName: "option", optionName: "controlheight") ;
    /** Set controlheight option to wijtooltip widget */
    wijtooltip(methodName: "option", optionName: "controlheight", controlheightValue ): JQuery;
    
    /** Get showing option(event) of wijtooltip widget */
    wijtooltip(methodName: "option", eventName: "showing"): Function;
    /** Set showing option(event) to wijtooltip widget */
    wijtooltip(methodName: "option", eventName: "showing", showingEventValue: (event?, ui?) => void): JQuery;
    
    /** Get shown option(event) of wijtooltip widget */
    wijtooltip(methodName: "option", eventName: "shown"): Function;
    /** Set shown option(event) to wijtooltip widget */
    wijtooltip(methodName: "option", eventName: "shown", shownEventValue: (event?, ui?) => void): JQuery;
    
    /** Get hiding option(event) of wijtooltip widget */
    wijtooltip(methodName: "option", eventName: "hiding"): Function;
    /** Set hiding option(event) to wijtooltip widget */
    wijtooltip(methodName: "option", eventName: "hiding", hidingEventValue: (event?, ui?) => void): JQuery;
    
    /** Get hidden option(event) of wijtooltip widget */
    wijtooltip(methodName: "option", eventName: "hidden"): Function;
    /** Set hidden option(event) to wijtooltip widget */
    wijtooltip(methodName: "option", eventName: "hidden", hiddenEventValue: (event?, ui?) => void): JQuery;
    
    
}

/** Definitions of wijtree widget */
interface JQuery {

    /** Initialize a wijtree widget */
    wijtree(): JQuery;
    /** Initialize a wijtree widget with the given options */
    wijtree(options: Object): JQuery;
    wijtree(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijtree widget */
    wijtree(methodName: "option", optionName: string): any;
    /** Set options to wijtree widget */
    wijtree(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijtree widget */
    wijtree(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** The getSelectedNodes method gets the selected nodes.
      * @returns {any[]} {array}
      * @example
      * $("selector").wijtree("getSelectedNodes");
      */
    wijtree(methodName: "getSelectedNodes") ;
    
    /** The getCheckedNodes method gets the nodes which are checked.
      * @returns {any[]} {array}
      * @example
      * $("selector").wijtree("getCheckedNodes");
      */
    wijtree(methodName: "getCheckedNodes") ;
    
    /** The destroy method will remove the rating functionality completely and will return the element to its pre-init state.
      * @example
      * $("selector").wijtree("destroy");
      */
    wijtree(methodName: "destroy") ;
    
    /** The add method adds a node to the tree widget.
      * @param {string|object} node 1.markup html.such as "&lt;li&gt;&lt;a&gt;node&lt;/a&gt;&lt;/li&gt;" as a node.
      * 2.wijtreenode widget.
      * 3.object options according to the options of wijtreenode.
      * 4.node's text.
      * @param {number} position The position to insert at.
      * @example
      * $("#tree").wijtree("add", "node 1", 1);
      */
    wijtree(methodName: "add", node: any, position: any) ;
    
    /** The remove method removes the indicated node from the wijtree element.
      * @param {number|object} node which node to be removed
      * 1.wijtreenode element.
      * 2.the zero-based index of which node you determined to remove.
      * @example
      * $("#tree").wijtree("remove", 1);
      */
    wijtree(methodName: "remove", node: any) ;
    
    /** The getNodes method gets an array that contains the root nodes of the current tree.
      * @returns {Array}
      * @example
      * $("#tree").wijtree("getNodes");
      */
    wijtree(methodName: "getNodes"): any[];
    
    /** The findNodeByText method finds a node by the specified node text.
      * @param {string} txt The text of which node you want to find.
      * @returns {wijmo.tree.wijtreenode}
      * @example
      * $("#tree").wijtree("findNodeByText", "node 1");
      */
    wijtree(methodName: "findNodeByText", txt: any) ;
    
    /** Get allowDrag option of wijtree widget */
    wijtree(methodName: "option", optionName: "allowDrag") ;
    /** Set allowDrag option to wijtree widget */
    wijtree(methodName: "option", optionName: "allowDrag", allowDragValue ): JQuery;
    
    /** Get allowDrop option of wijtree widget */
    wijtree(methodName: "option", optionName: "allowDrop") ;
    /** Set allowDrop option to wijtree widget */
    wijtree(methodName: "option", optionName: "allowDrop", allowDropValue ): JQuery;
    
    /** Get allowEdit option of wijtree widget */
    wijtree(methodName: "option", optionName: "allowEdit") ;
    /** Set allowEdit option to wijtree widget */
    wijtree(methodName: "option", optionName: "allowEdit", allowEditValue ): JQuery;
    
    /** Get allowSorting option of wijtree widget */
    wijtree(methodName: "option", optionName: "allowSorting") ;
    /** Set allowSorting option to wijtree widget */
    wijtree(methodName: "option", optionName: "allowSorting", allowSortingValue ): JQuery;
    
    /** Get allowTriState option of wijtree widget */
    wijtree(methodName: "option", optionName: "allowTriState") ;
    /** Set allowTriState option to wijtree widget */
    wijtree(methodName: "option", optionName: "allowTriState", allowTriStateValue ): JQuery;
    
    /** Get autoCheckNodes option of wijtree widget */
    wijtree(methodName: "option", optionName: "autoCheckNodes") ;
    /** Set autoCheckNodes option to wijtree widget */
    wijtree(methodName: "option", optionName: "autoCheckNodes", autoCheckNodesValue ): JQuery;
    
    /** Get autoCollapse option of wijtree widget */
    wijtree(methodName: "option", optionName: "autoCollapse") ;
    /** Set autoCollapse option to wijtree widget */
    wijtree(methodName: "option", optionName: "autoCollapse", autoCollapseValue ): JQuery;
    
    /** Get disabled option of wijtree widget */
    wijtree(methodName: "option", optionName: "disabled") ;
    /** Set disabled option to wijtree widget */
    wijtree(methodName: "option", optionName: "disabled", disabledValue ): JQuery;
    
    /** Get expandCollapseHoverUsed option of wijtree widget */
    wijtree(methodName: "option", optionName: "expandCollapseHoverUsed") ;
    /** Set expandCollapseHoverUsed option to wijtree widget */
    wijtree(methodName: "option", optionName: "expandCollapseHoverUsed", expandCollapseHoverUsedValue ): JQuery;
    
    /** Get showCheckBoxes option of wijtree widget */
    wijtree(methodName: "option", optionName: "showCheckBoxes") ;
    /** Set showCheckBoxes option to wijtree widget */
    wijtree(methodName: "option", optionName: "showCheckBoxes", showCheckBoxesValue ): JQuery;
    
    /** Get showExpandCollapse option of wijtree widget */
    wijtree(methodName: "option", optionName: "showExpandCollapse") ;
    /** Set showExpandCollapse option to wijtree widget */
    wijtree(methodName: "option", optionName: "showExpandCollapse", showExpandCollapseValue ): JQuery;
    
    /** Get expandAnimation option of wijtree widget */
    wijtree(methodName: "option", optionName: "expandAnimation") ;
    /** Set expandAnimation option to wijtree widget */
    wijtree(methodName: "option", optionName: "expandAnimation", expandAnimationValue ): JQuery;
    
    /** Get expandDelay option of wijtree widget */
    wijtree(methodName: "option", optionName: "expandDelay") ;
    /** Set expandDelay option to wijtree widget */
    wijtree(methodName: "option", optionName: "expandDelay", expandDelayValue ): JQuery;
    
    /** Get collapseAnimation option of wijtree widget */
    wijtree(methodName: "option", optionName: "collapseAnimation") ;
    /** Set collapseAnimation option to wijtree widget */
    wijtree(methodName: "option", optionName: "collapseAnimation", collapseAnimationValue ): JQuery;
    
    /** Get collapseDelay option of wijtree widget */
    wijtree(methodName: "option", optionName: "collapseDelay") ;
    /** Set collapseDelay option to wijtree widget */
    wijtree(methodName: "option", optionName: "collapseDelay", collapseDelayValue ): JQuery;
    
    /** Get draggable option of wijtree widget */
    wijtree(methodName: "option", optionName: "draggable") ;
    /** Set draggable option to wijtree widget */
    wijtree(methodName: "option", optionName: "draggable", draggableValue ): JQuery;
    
    /** Get droppable option of wijtree widget */
    wijtree(methodName: "option", optionName: "droppable") ;
    /** Set droppable option to wijtree widget */
    wijtree(methodName: "option", optionName: "droppable", droppableValue ): JQuery;
    
    /** Get dropVisual option of wijtree widget */
    wijtree(methodName: "option", optionName: "dropVisual") ;
    /** Set dropVisual option to wijtree widget */
    wijtree(methodName: "option", optionName: "dropVisual", dropVisualValue ): JQuery;
    
    /** Get nodes option of wijtree widget */
    wijtree(methodName: "option", optionName: "nodes") ;
    /** Set nodes option to wijtree widget */
    wijtree(methodName: "option", optionName: "nodes", nodesValue ): JQuery;
    
    /** Get nodeBlur option(event) of wijtree widget */
    wijtree(methodName: "option", eventName: "nodeBlur"): Function;
    /** Set nodeBlur option(event) to wijtree widget */
    wijtree(methodName: "option", eventName: "nodeBlur", nodeBlurEventValue: (e?, data?) => void): JQuery;
    
    /** Get nodeFocus option(event) of wijtree widget */
    wijtree(methodName: "option", eventName: "nodeFocus"): Function;
    /** Set nodeFocus option(event) to wijtree widget */
    wijtree(methodName: "option", eventName: "nodeFocus", nodeFocusEventValue: (e?, data?) => void): JQuery;
    
    /** Get nodeClick option(event) of wijtree widget */
    wijtree(methodName: "option", eventName: "nodeClick"): Function;
    /** Set nodeClick option(event) to wijtree widget */
    wijtree(methodName: "option", eventName: "nodeClick", nodeClickEventValue: (e?, data?) => void): JQuery;
    
    /** Get nodeCheckChanging option(event) of wijtree widget */
    wijtree(methodName: "option", eventName: "nodeCheckChanging"): Function;
    /** Set nodeCheckChanging option(event) to wijtree widget */
    wijtree(methodName: "option", eventName: "nodeCheckChanging", nodeCheckChangingEventValue: (e?, data?) => void): JQuery;
    
    /** Get nodeCheckChanged option(event) of wijtree widget */
    wijtree(methodName: "option", eventName: "nodeCheckChanged"): Function;
    /** Set nodeCheckChanged option(event) to wijtree widget */
    wijtree(methodName: "option", eventName: "nodeCheckChanged", nodeCheckChangedEventValue: (e?, data?) => void): JQuery;
    
    /** Get nodeCollapsed option(event) of wijtree widget */
    wijtree(methodName: "option", eventName: "nodeCollapsed"): Function;
    /** Set nodeCollapsed option(event) to wijtree widget */
    wijtree(methodName: "option", eventName: "nodeCollapsed", nodeCollapsedEventValue: (e?, data?) => void): JQuery;
    
    /** Get nodeExpanded option(event) of wijtree widget */
    wijtree(methodName: "option", eventName: "nodeExpanded"): Function;
    /** Set nodeExpanded option(event) to wijtree widget */
    wijtree(methodName: "option", eventName: "nodeExpanded", nodeExpandedEventValue: (e?, data?) => void): JQuery;
    
    /** Get nodeDragging option(event) of wijtree widget */
    wijtree(methodName: "option", eventName: "nodeDragging"): Function;
    /** Set nodeDragging option(event) to wijtree widget */
    wijtree(methodName: "option", eventName: "nodeDragging", nodeDraggingEventValue: (e?, data?) => void): JQuery;
    
    /** Get nodeDragStarted option(event) of wijtree widget */
    wijtree(methodName: "option", eventName: "nodeDragStarted"): Function;
    /** Set nodeDragStarted option(event) to wijtree widget */
    wijtree(methodName: "option", eventName: "nodeDragStarted", nodeDragStartedEventValue: (e?, data?) => void): JQuery;
    
    /** Get nodeBeforeDropped option(event) of wijtree widget */
    wijtree(methodName: "option", eventName: "nodeBeforeDropped"): Function;
    /** Set nodeBeforeDropped option(event) to wijtree widget */
    wijtree(methodName: "option", eventName: "nodeBeforeDropped", nodeBeforeDroppedEventValue: (e?, data?) => void): JQuery;
    
    /** Get nodeDropped option(event) of wijtree widget */
    wijtree(methodName: "option", eventName: "nodeDropped"): Function;
    /** Set nodeDropped option(event) to wijtree widget */
    wijtree(methodName: "option", eventName: "nodeDropped", nodeDroppedEventValue: (e?, data?) => void): JQuery;
    
    /** Get nodeMouseOver option(event) of wijtree widget */
    wijtree(methodName: "option", eventName: "nodeMouseOver"): Function;
    /** Set nodeMouseOver option(event) to wijtree widget */
    wijtree(methodName: "option", eventName: "nodeMouseOver", nodeMouseOverEventValue: (event?, data?) => void): JQuery;
    
    /** Get nodeMouseOut option(event) of wijtree widget */
    wijtree(methodName: "option", eventName: "nodeMouseOut"): Function;
    /** Set nodeMouseOut option(event) to wijtree widget */
    wijtree(methodName: "option", eventName: "nodeMouseOut", nodeMouseOutEventValue: (e?, data?) => void): JQuery;
    
    /** Get nodeTextChanged option(event) of wijtree widget */
    wijtree(methodName: "option", eventName: "nodeTextChanged"): Function;
    /** Set nodeTextChanged option(event) to wijtree widget */
    wijtree(methodName: "option", eventName: "nodeTextChanged", nodeTextChangedEventValue: (e?, data?) => void): JQuery;
    
    /** Get selectedNodeChanged option(event) of wijtree widget */
    wijtree(methodName: "option", eventName: "selectedNodeChanged"): Function;
    /** Set selectedNodeChanged option(event) to wijtree widget */
    wijtree(methodName: "option", eventName: "selectedNodeChanged", selectedNodeChangedEventValue: (e?, data?) => void): JQuery;
    
    /** Get nodeExpanding option(event) of wijtree widget */
    wijtree(methodName: "option", eventName: "nodeExpanding"): Function;
    /** Set nodeExpanding option(event) to wijtree widget */
    wijtree(methodName: "option", eventName: "nodeExpanding", nodeExpandingEventValue: (e?, data?) => void): JQuery;
    
    /** Get nodeCollapsing option(event) of wijtree widget */
    wijtree(methodName: "option", eventName: "nodeCollapsing"): Function;
    /** Set nodeCollapsing option(event) to wijtree widget */
    wijtree(methodName: "option", eventName: "nodeCollapsing", nodeCollapsingEventValue: (e?, data?) => void): JQuery;
    
    
}

/** Definitions of wijtreemap widget */
interface JQuery {

    /** Initialize a wijtreemap widget */
    wijtreemap(): JQuery;
    /** Initialize a wijtreemap widget with the given options */
    wijtreemap(options: Object): JQuery;
    wijtreemap(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijtreemap widget */
    wijtreemap(methodName: "option", optionName: string): any;
    /** Set options to wijtreemap widget */
    wijtreemap(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijtreemap widget */
    wijtreemap(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** This method refreshes the treemap. */
    wijtreemap(methodName: "refresh") ;
    
    /** The destroy method will remove the treemap functionality completely and will return the element to its pre-init state.
      * @example
      * $("selector").wijtreemap("destroy");
      */
    wijtreemap(methodName: "destroy") ;
    
    /** Get width option of wijtreemap widget */
    wijtreemap(methodName: "option", optionName: "width") ;
    /** Set width option to wijtreemap widget */
    wijtreemap(methodName: "option", optionName: "width", widthValue ): JQuery;
    
    /** Get height option of wijtreemap widget */
    wijtreemap(methodName: "option", optionName: "height") ;
    /** Set height option to wijtreemap widget */
    wijtreemap(methodName: "option", optionName: "height", heightValue ): JQuery;
    
    /** Get type option of wijtreemap widget */
    wijtreemap(methodName: "option", optionName: "type") ;
    /** Set type option to wijtreemap widget */
    wijtreemap(methodName: "option", optionName: "type", typeValue ): JQuery;
    
    /** Get data option of wijtreemap widget */
    wijtreemap(methodName: "option", optionName: "data") ;
    /** Set data option to wijtreemap widget */
    wijtreemap(methodName: "option", optionName: "data", dataValue ): JQuery;
    
    /** Get valueBinding option of wijtreemap widget */
    wijtreemap(methodName: "option", optionName: "valueBinding") ;
    /** Set valueBinding option to wijtreemap widget */
    wijtreemap(methodName: "option", optionName: "valueBinding", valueBindingValue ): JQuery;
    
    /** Get labelBinding option of wijtreemap widget */
    wijtreemap(methodName: "option", optionName: "labelBinding") ;
    /** Set labelBinding option to wijtreemap widget */
    wijtreemap(methodName: "option", optionName: "labelBinding", labelBindingValue ): JQuery;
    
    /** Get colorBinding option of wijtreemap widget */
    wijtreemap(methodName: "option", optionName: "colorBinding") ;
    /** Set colorBinding option to wijtreemap widget */
    wijtreemap(methodName: "option", optionName: "colorBinding", colorBindingValue ): JQuery;
    
    /** Get showLabel option of wijtreemap widget */
    wijtreemap(methodName: "option", optionName: "showLabel") ;
    /** Set showLabel option to wijtreemap widget */
    wijtreemap(methodName: "option", optionName: "showLabel", showLabelValue ): JQuery;
    
    /** Get labelFormatter option of wijtreemap widget */
    wijtreemap(methodName: "option", optionName: "labelFormatter") ;
    /** Set labelFormatter option to wijtreemap widget */
    wijtreemap(methodName: "option", optionName: "labelFormatter", labelFormatterValue ): JQuery;
    
    /** Get showTooltip option of wijtreemap widget */
    wijtreemap(methodName: "option", optionName: "showTooltip") ;
    /** Set showTooltip option to wijtreemap widget */
    wijtreemap(methodName: "option", optionName: "showTooltip", showTooltipValue ): JQuery;
    
    /** Get tooltipOptions option of wijtreemap widget */
    wijtreemap(methodName: "option", optionName: "tooltipOptions") ;
    /** Set tooltipOptions option to wijtreemap widget */
    wijtreemap(methodName: "option", optionName: "tooltipOptions", tooltipOptionsValue ): JQuery;
    
    /** Get showTitle option of wijtreemap widget */
    wijtreemap(methodName: "option", optionName: "showTitle") ;
    /** Set showTitle option to wijtreemap widget */
    wijtreemap(methodName: "option", optionName: "showTitle", showTitleValue ): JQuery;
    
    /** Get titleHeight option of wijtreemap widget */
    wijtreemap(methodName: "option", optionName: "titleHeight") ;
    /** Set titleHeight option to wijtreemap widget */
    wijtreemap(methodName: "option", optionName: "titleHeight", titleHeightValue ): JQuery;
    
    /** Get titleFormatter option of wijtreemap widget */
    wijtreemap(methodName: "option", optionName: "titleFormatter") ;
    /** Set titleFormatter option to wijtreemap widget */
    wijtreemap(methodName: "option", optionName: "titleFormatter", titleFormatterValue ): JQuery;
    
    /** Get minColor option of wijtreemap widget */
    wijtreemap(methodName: "option", optionName: "minColor") ;
    /** Set minColor option to wijtreemap widget */
    wijtreemap(methodName: "option", optionName: "minColor", minColorValue ): JQuery;
    
    /** Get minColorValue option of wijtreemap widget */
    wijtreemap(methodName: "option", optionName: "minColorValue") ;
    /** Set minColorValue option to wijtreemap widget */
    wijtreemap(methodName: "option", optionName: "minColorValue", minColorValueValue ): JQuery;
    
    /** Get midColor option of wijtreemap widget */
    wijtreemap(methodName: "option", optionName: "midColor") ;
    /** Set midColor option to wijtreemap widget */
    wijtreemap(methodName: "option", optionName: "midColor", midColorValue ): JQuery;
    
    /** Get midColorValue option of wijtreemap widget */
    wijtreemap(methodName: "option", optionName: "midColorValue") ;
    /** Set midColorValue option to wijtreemap widget */
    wijtreemap(methodName: "option", optionName: "midColorValue", midColorValueValue ): JQuery;
    
    /** Get maxColor option of wijtreemap widget */
    wijtreemap(methodName: "option", optionName: "maxColor") ;
    /** Set maxColor option to wijtreemap widget */
    wijtreemap(methodName: "option", optionName: "maxColor", maxColorValue ): JQuery;
    
    /** Get maxColorValue option of wijtreemap widget */
    wijtreemap(methodName: "option", optionName: "maxColorValue") ;
    /** Set maxColorValue option to wijtreemap widget */
    wijtreemap(methodName: "option", optionName: "maxColorValue", maxColorValueValue ): JQuery;
    
    /** Get showBackButtons option of wijtreemap widget */
    wijtreemap(methodName: "option", optionName: "showBackButtons") ;
    /** Set showBackButtons option to wijtreemap widget */
    wijtreemap(methodName: "option", optionName: "showBackButtons", showBackButtonsValue ): JQuery;
    
    /** Get itemPainting option(event) of wijtreemap widget */
    wijtreemap(methodName: "option", eventName: "itemPainting"): Function;
    /** Set itemPainting option(event) to wijtreemap widget */
    wijtreemap(methodName: "option", eventName: "itemPainting", itemPaintingEventValue: (e?, data?) => void): JQuery;
    
    /** Get itemPainted option(event) of wijtreemap widget */
    wijtreemap(methodName: "option", eventName: "itemPainted"): Function;
    /** Set itemPainted option(event) to wijtreemap widget */
    wijtreemap(methodName: "option", eventName: "itemPainted", itemPaintedEventValue: (e?) => void): JQuery;
    
    /** Get painting option(event) of wijtreemap widget */
    wijtreemap(methodName: "option", eventName: "painting"): Function;
    /** Set painting option(event) to wijtreemap widget */
    wijtreemap(methodName: "option", eventName: "painting", paintingEventValue: (e?, args?) => void): JQuery;
    
    /** Get painted option(event) of wijtreemap widget */
    wijtreemap(methodName: "option", eventName: "painted"): Function;
    /** Set painted option(event) to wijtreemap widget */
    wijtreemap(methodName: "option", eventName: "painted", paintedEventValue: (e?) => void): JQuery;
    
    /** Get drillingDown option(event) of wijtreemap widget */
    wijtreemap(methodName: "option", eventName: "drillingDown"): Function;
    /** Set drillingDown option(event) to wijtreemap widget */
    wijtreemap(methodName: "option", eventName: "drillingDown", drillingDownEventValue: (e?, data?) => void): JQuery;
    
    /** Get drilledDown option(event) of wijtreemap widget */
    wijtreemap(methodName: "option", eventName: "drilledDown"): Function;
    /** Set drilledDown option(event) to wijtreemap widget */
    wijtreemap(methodName: "option", eventName: "drilledDown", drilledDownEventValue: (e?, data?) => void): JQuery;
    
    /** Get rollingUp option(event) of wijtreemap widget */
    wijtreemap(methodName: "option", eventName: "rollingUp"): Function;
    /** Set rollingUp option(event) to wijtreemap widget */
    wijtreemap(methodName: "option", eventName: "rollingUp", rollingUpEventValue: (e?, data?) => void): JQuery;
    
    /** Get rolledUp option(event) of wijtreemap widget */
    wijtreemap(methodName: "option", eventName: "rolledUp"): Function;
    /** Set rolledUp option(event) to wijtreemap widget */
    wijtreemap(methodName: "option", eventName: "rolledUp", rolledUpEventValue: (e?, data?) => void): JQuery;
    
    
}

/** Definitions of wijupload widget */
interface JQuery {

    /** Initialize a wijupload widget */
    wijupload(): JQuery;
    /** Initialize a wijupload widget with the given options */
    wijupload(options: Object): JQuery;
    wijupload(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijupload widget */
    wijupload(methodName: "option", optionName: string): any;
    /** Set options to wijupload widget */
    wijupload(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijupload widget */
    wijupload(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Removes the wijupload functionality completely.This will return the element back to its pre - init state.
      * @example
      * $(" selector ").wijupload("destroy");
      */
    wijupload(methodName: "destroy") ;
    
    /** Returns the.wijmo - wijupload element.
      * @returns {JQuery}
      * @example
      * $(" selector ").wijupload("widget");
      */
    wijupload(methodName: "widget"): JQuery;
    
    /** Get action option of wijupload widget */
    wijupload(methodName: "option", optionName: "action") ;
    /** Set action option to wijupload widget */
    wijupload(methodName: "option", optionName: "action", actionValue ): JQuery;
    
    /** Get autoSubmit option of wijupload widget */
    wijupload(methodName: "option", optionName: "autoSubmit") ;
    /** Set autoSubmit option to wijupload widget */
    wijupload(methodName: "option", optionName: "autoSubmit", autoSubmitValue ): JQuery;
    
    /** Get maximumFiles option of wijupload widget */
    wijupload(methodName: "option", optionName: "maximumFiles") ;
    /** Set maximumFiles option to wijupload widget */
    wijupload(methodName: "option", optionName: "maximumFiles", maximumFilesValue ): JQuery;
    
    /** Get multiple option of wijupload widget */
    wijupload(methodName: "option", optionName: "multiple") ;
    /** Set multiple option to wijupload widget */
    wijupload(methodName: "option", optionName: "multiple", multipleValue ): JQuery;
    
    /** Get accept option of wijupload widget */
    wijupload(methodName: "option", optionName: "accept") ;
    /** Set accept option to wijupload widget */
    wijupload(methodName: "option", optionName: "accept", acceptValue ): JQuery;
    
    /** Get enableSWFUploadOnIE option of wijupload widget */
    wijupload(methodName: "option", optionName: "enableSWFUploadOnIE") ;
    /** Set enableSWFUploadOnIE option to wijupload widget */
    wijupload(methodName: "option", optionName: "enableSWFUploadOnIE", enableSWFUploadOnIEValue ): JQuery;
    
    /** Get enableSWFUpload option of wijupload widget */
    wijupload(methodName: "option", optionName: "enableSWFUpload") ;
    /** Set enableSWFUpload option to wijupload widget */
    wijupload(methodName: "option", optionName: "enableSWFUpload", enableSWFUploadValue ): JQuery;
    
    /** Get change option(event) of wijupload widget */
    wijupload(methodName: "option", eventName: "change"): Function;
    /** Set change option(event) to wijupload widget */
    wijupload(methodName: "option", eventName: "change", changeEventValue: (e?, data?) => void): JQuery;
    
    /** Get upload option(event) of wijupload widget */
    wijupload(methodName: "option", eventName: "upload"): Function;
    /** Set upload option(event) to wijupload widget */
    wijupload(methodName: "option", eventName: "upload", uploadEventValue: (e?, data?) => void): JQuery;
    
    /** Get totalUpload option(event) of wijupload widget */
    wijupload(methodName: "option", eventName: "totalUpload"): Function;
    /** Set totalUpload option(event) to wijupload widget */
    wijupload(methodName: "option", eventName: "totalUpload", totalUploadEventValue: (e?) => void): JQuery;
    
    /** Get progress option(event) of wijupload widget */
    wijupload(methodName: "option", eventName: "progress"): Function;
    /** Set progress option(event) to wijupload widget */
    wijupload(methodName: "option", eventName: "progress", progressEventValue: (e?, data?) => void): JQuery;
    
    /** Get totalProgress option(event) of wijupload widget */
    wijupload(methodName: "option", eventName: "totalProgress"): Function;
    /** Set totalProgress option(event) to wijupload widget */
    wijupload(methodName: "option", eventName: "totalProgress", totalProgressEventValue: (e?, data?) => void): JQuery;
    
    /** Get complete option(event) of wijupload widget */
    wijupload(methodName: "option", eventName: "complete"): Function;
    /** Set complete option(event) to wijupload widget */
    wijupload(methodName: "option", eventName: "complete", completeEventValue: (e?, data?) => void): JQuery;
    
    /** Get totalComplete option(event) of wijupload widget */
    wijupload(methodName: "option", eventName: "totalComplete"): Function;
    /** Set totalComplete option(event) to wijupload widget */
    wijupload(methodName: "option", eventName: "totalComplete", totalCompleteEventValue: (e?) => void): JQuery;
    
    
}

/** Definitions of wijvideo widget */
interface JQuery {

    /** Initialize a wijvideo widget */
    wijvideo(): JQuery;
    /** Initialize a wijvideo widget with the given options */
    wijvideo(options: Object): JQuery;
    wijvideo(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijvideo widget */
    wijvideo(methodName: "option", optionName: string): any;
    /** Set options to wijvideo widget */
    wijvideo(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijvideo widget */
    wijvideo(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Remove the functionality completely. This will return the element back to its pre-init state.
      * @returns {void}
      */
    wijvideo(methodName: "destroy") ;
    
    /** Play the video.
      * @returns {void}
      */
    wijvideo(methodName: "play") ;
    
    /** Pause the video.
      * @returns {void}
      */
    wijvideo(methodName: "pause") ;
    
    /** Gets the video width in pixel.
      * @returns {number}
      */
    wijvideo(methodName: "getWidth") ;
    
    /** Sets the video width in pixel.
      * @param {number} width Width value in pixel.
      * @returns {void}
      * @example
      * // Sets the video width to 600 pixel.
      * $("#element").wijvideo("setWidth", 600);
      */
    wijvideo(methodName: "setWidth", width: any) ;
    
    /** Gets the video height in pixel.
      * @returns {number}
      */
    wijvideo(methodName: "getHeight") ;
    
    /** Sets the video height in pixel.
      * @param {number} height Height value in pixel.
      * @returns {void}
      * @example
      * // Sets the video height to 400 pixel.
      * $("#element").wijvideo("setHeight", 400);
      */
    wijvideo(methodName: "setHeight", height: any) ;
    
    /** Get fullScreenButtonVisible option of wijvideo widget */
    wijvideo(methodName: "option", optionName: "fullScreenButtonVisible") ;
    /** Set fullScreenButtonVisible option to wijvideo widget */
    wijvideo(methodName: "option", optionName: "fullScreenButtonVisible", fullScreenButtonVisibleValue ): JQuery;
    
    /** Get showControlsOnHover option of wijvideo widget */
    wijvideo(methodName: "option", optionName: "showControlsOnHover") ;
    /** Set showControlsOnHover option to wijvideo widget */
    wijvideo(methodName: "option", optionName: "showControlsOnHover", showControlsOnHoverValue ): JQuery;
    
    /** Get localization option of wijvideo widget */
    wijvideo(methodName: "option", optionName: "localization") ;
    /** Set localization option to wijvideo widget */
    wijvideo(methodName: "option", optionName: "localization", localizationValue ): JQuery;
    
    
}

/** Definitions of wijwizard widget */
interface JQuery {

    /** Initialize a wijwizard widget */
    wijwizard(): JQuery;
    /** Initialize a wijwizard widget with the given options */
    wijwizard(options: Object): JQuery;
    wijwizard(methodName: string, ...otherParams: any[]): any;
    /** Get specified option of wijwizard widget */
    wijwizard(methodName: "option", optionName: string): any;
    /** Set options to wijwizard widget */
    wijwizard(methodName: "option", optionValues: Object): any;
    /** Set specified option to wijwizard widget */
    wijwizard(methodName: "option", optionName: string, optionValue: any): JQuery;
    
    /** Removes the wijwizard functionality completely.
      * This returns the element back to its pre-init state.
      */
    wijwizard(methodName: "destroy") ;
    
    /** The add method adds a new panel.
      * @param {number} index Zero-based position where to insert the new panel.
      * @param {string} title The step title.
      * @param {string} desc The step description.
      * @returns {wijmo.wizard.wijwizard}
      * @example
      * // Add a new panel to be the second step.
      * // It's title is "New Panel", description is "New Panel Description".
      * $("#wizard").wijwizard("add", 1, "New Panel", "New Panel Description");
      */
    wijwizard(methodName: "add", index?: any, title?: any, desc?: any) ;
    
    /** The remove method removes a panel.
      * @param {number} index The zero-based index of the panel to be removed.
      * @returns {wijmo.wizard.wijwizard}
      * @example
      * // Remove the second step.
      * $("#wizard").wijwizard("remove", 1);
      */
    wijwizard(methodName: "remove", index: any) ;
    
    /** The show method selects an active panel and displays the panel at a specified position.
      * @param {number} index The zero-based index of the panel to be actived.
      * @returns {wijmo.wizard.wijwizard}
      * @example
      * // Show the second step.
      * $("#wizard").wijwizard("show", 1);
      */
    wijwizard(methodName: "show", index: any) ;
    
    /** The next method moves to the next panel.
      * @returns {bool}
      */
    wijwizard(methodName: "next"): boolean;
    
    /** The back method moves to the previous panel.
      * @returns {bool}
      */
    wijwizard(methodName: "back"): boolean;
    
    /** The load method reload the content of an Ajax panel programmatically.
      * @param {number} index The zero-based index of the panel to be loaded.
      * @returns {wijmo.wizard.wijwizard}
      * @example
      * // Reload the content of second step.
      * $("#wizard").wijwizard("load", 1);
      */
    wijwizard(methodName: "load", index: any) ;
    
    /** The abort method terminates all running panel ajax requests and animations.
      * @returns {wijmo.wizard.wijwizard}
      */
    wijwizard(methodName: "abort") ;
    
    /** The url method changes the url from which an Ajax (remote) panel will be loaded.
      * @param {number} index The zero-based index of the panel of which its URL is to be updated.
      * @param {string} url A URL the content of the panel is loaded from.
      * @returns {wijmo.wizard.wijwizard}
      * @example
      * // Change the url content of second step.
      * $("#wizard").wijwizard("url", 1, "http://wijmo.com/newurl.html");
      */
    wijwizard(methodName: "url", index: any, url: any) ;
    
    /** The count method retrieves the number panels.
      * @returns {number} the pabels's length
      */
    wijwizard(methodName: "count") ;
    
    /** The stop method stops displaying the panels in order automatically. */
    wijwizard(methodName: "stop") ;
    
    /** The play method begins displaying the panels in order automatically. */
    wijwizard(methodName: "play") ;
    
    /** Get navButtons option of wijwizard widget */
    wijwizard(methodName: "option", optionName: "navButtons") ;
    /** Set navButtons option to wijwizard widget */
    wijwizard(methodName: "option", optionName: "navButtons", navButtonsValue ): JQuery;
    
    /** Get autoPlay option of wijwizard widget */
    wijwizard(methodName: "option", optionName: "autoPlay") ;
    /** Set autoPlay option to wijwizard widget */
    wijwizard(methodName: "option", optionName: "autoPlay", autoPlayValue ): JQuery;
    
    /** Get delay option of wijwizard widget */
    wijwizard(methodName: "option", optionName: "delay") ;
    /** Set delay option to wijwizard widget */
    wijwizard(methodName: "option", optionName: "delay", delayValue ): JQuery;
    
    /** Get loop option of wijwizard widget */
    wijwizard(methodName: "option", optionName: "loop") ;
    /** Set loop option to wijwizard widget */
    wijwizard(methodName: "option", optionName: "loop", loopValue ): JQuery;
    
    /** Get hideOption option of wijwizard widget */
    wijwizard(methodName: "option", optionName: "hideOption") ;
    /** Set hideOption option to wijwizard widget */
    wijwizard(methodName: "option", optionName: "hideOption", hideOptionValue ): JQuery;
    
    /** Get showOption option of wijwizard widget */
    wijwizard(methodName: "option", optionName: "showOption") ;
    /** Set showOption option to wijwizard widget */
    wijwizard(methodName: "option", optionName: "showOption", showOptionValue ): JQuery;
    
    /** Get ajaxOptions option of wijwizard widget */
    wijwizard(methodName: "option", optionName: "ajaxOptions") ;
    /** Set ajaxOptions option to wijwizard widget */
    wijwizard(methodName: "option", optionName: "ajaxOptions", ajaxOptionsValue ): JQuery;
    
    /** Get cache option of wijwizard widget */
    wijwizard(methodName: "option", optionName: "cache") ;
    /** Set cache option to wijwizard widget */
    wijwizard(methodName: "option", optionName: "cache", cacheValue ): JQuery;
    
    /** Get cookie option of wijwizard widget */
    wijwizard(methodName: "option", optionName: "cookie") ;
    /** Set cookie option to wijwizard widget */
    wijwizard(methodName: "option", optionName: "cookie", cookieValue ): JQuery;
    
    /** Get stepHeaderTemplate option of wijwizard widget */
    wijwizard(methodName: "option", optionName: "stepHeaderTemplate") ;
    /** Set stepHeaderTemplate option to wijwizard widget */
    wijwizard(methodName: "option", optionName: "stepHeaderTemplate", stepHeaderTemplateValue ): JQuery;
    
    /** Get panelTemplate option of wijwizard widget */
    wijwizard(methodName: "option", optionName: "panelTemplate") ;
    /** Set panelTemplate option to wijwizard widget */
    wijwizard(methodName: "option", optionName: "panelTemplate", panelTemplateValue ): JQuery;
    
    /** Get spinner option of wijwizard widget */
    wijwizard(methodName: "option", optionName: "spinner") ;
    /** Set spinner option to wijwizard widget */
    wijwizard(methodName: "option", optionName: "spinner", spinnerValue ): JQuery;
    
    /** Get backBtnText option of wijwizard widget */
    wijwizard(methodName: "option", optionName: "backBtnText") ;
    /** Set backBtnText option to wijwizard widget */
    wijwizard(methodName: "option", optionName: "backBtnText", backBtnTextValue ): JQuery;
    
    /** Get nextBtnText option of wijwizard widget */
    wijwizard(methodName: "option", optionName: "nextBtnText") ;
    /** Set nextBtnText option to wijwizard widget */
    wijwizard(methodName: "option", optionName: "nextBtnText", nextBtnTextValue ): JQuery;
    
    /** Get activeIndex option of wijwizard widget */
    wijwizard(methodName: "option", optionName: "activeIndex") ;
    /** Set activeIndex option to wijwizard widget */
    wijwizard(methodName: "option", optionName: "activeIndex", activeIndexValue ): JQuery;
    
    /** Get add option(event) of wijwizard widget */
    wijwizard(methodName: "option", eventName: "add"): Function;
    /** Set add option(event) to wijwizard widget */
    wijwizard(methodName: "option", eventName: "add", addEventValue: (e?, args?) => void): JQuery;
    
    /** Get remove option(event) of wijwizard widget */
    wijwizard(methodName: "option", eventName: "remove"): Function;
    /** Set remove option(event) to wijwizard widget */
    wijwizard(methodName: "option", eventName: "remove", removeEventValue: (e?, args?) => void): JQuery;
    
    /** Get activeIndexChanged option(event) of wijwizard widget */
    wijwizard(methodName: "option", eventName: "activeIndexChanged"): Function;
    /** Set activeIndexChanged option(event) to wijwizard widget */
    wijwizard(methodName: "option", eventName: "activeIndexChanged", activeIndexChangedEventValue: (e?, args?) => void): JQuery;
    
    /** Get show option(event) of wijwizard widget */
    wijwizard(methodName: "option", eventName: "show"): Function;
    /** Set show option(event) to wijwizard widget */
    wijwizard(methodName: "option", eventName: "show", showEventValue: (e?, args?) => void): JQuery;
    
    /** Get load option(event) of wijwizard widget */
    wijwizard(methodName: "option", eventName: "load"): Function;
    /** Set load option(event) to wijwizard widget */
    wijwizard(methodName: "option", eventName: "load", loadEventValue: (e?, args?) => void): JQuery;
    
    /** Get validating option(event) of wijwizard widget */
    wijwizard(methodName: "option", eventName: "validating"): Function;
    /** Set validating option(event) to wijwizard widget */
    wijwizard(methodName: "option", eventName: "validating", validatingEventValue: (e?, args?) => void): JQuery;
    
    
}

