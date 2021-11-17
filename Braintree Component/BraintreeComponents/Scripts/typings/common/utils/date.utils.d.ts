/// <reference path="../../designers/utils.d.ts" />
/// <reference path="number.utils.d.ts" />
/// <reference path="string.utils.d.ts" />
declare namespace $DP.DateUtilities {
    const ISODateFormat = "YYYY-MM-DDTHH:mm:ss.SSSSZ";
    function convertToMomentDateFormat(dateFormat: string): string;
    function isMinDate(date: string | moment.Moment | Date): boolean;
    function getFormattedDateString(date: string | moment.Moment | Date, format: string, useStrict?: boolean): string;
    function getFormattedDateStringForServer(date: string | moment.Moment | Date, isDateTime?: boolean, checkForTimeZoneTranslation?: boolean): string | Date;
    function isSameDate(date1: string | moment.Moment | Date, date2: string | moment.Moment | Date, dateFormat: string): boolean;
    function getMomentDateObject(date: any, dateFormat?: string, useStrict?: boolean): moment.Moment;
    function isValidDateTime(date: string, dateFormat: string, allowNull?: boolean, useStrict?: boolean): boolean;
    function isValidDate(date: string, dateFormat: string, allowNull?: boolean, useStrict?: boolean): boolean;
    function getDateAccordingToTimeZone(date: Date, dateFormat?: string): Date;
    function isDotNetJSONDate(date: string): boolean;
    function parseZone(date: string): moment.Moment;
    function getISODateStringWithUtcOffset(date: Date): string | Date;
    function getDateDifferenceInMilliseconds(date1: Date, date2: Date): number;
    interface TimeDuration {
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    }
    function getDurationBetweenTwoDates(date1: Date, date2: Date): TimeDuration;
    function getTimeFormatBetweenTwoDates(date1: Date, date2: Date): string;
    function getCurrentMomentDateTimeFormat(): string;
    function getFormattedDateStringInCurrentCulture(date: string | moment.Moment | Date): string;
    function getCurrentMomentDateFormat(): string;
    function parseDateTimeString(value: string): moment.Moment;
    function getTwentyFourHourTime(amPmString: any): string;
    function convertTimeStringToMilliseconds(time: string): number;
    /**
     * Examples -
     * format - hh:mm:ss tt return true
     * format - H:mm:ss return false
     * format - H:mm:SS A return true
     * @param format
     */
    function isTweleveHourFormat(format: string): boolean;
    enum TimeFormat {
        Default = 0,
        Use24HourFormat = 1,
        Use12HourFormat = 2
    }
}
