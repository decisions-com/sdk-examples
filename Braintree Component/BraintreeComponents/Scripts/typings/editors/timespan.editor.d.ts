/// <reference path="../dialog/dialog.d.ts" />
/**
 * Author:akash.singh@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Editors {
    interface ITimeSpanOptions {
        host?: JQuery;
        tabIndex?: number;
        timeSpanValues?: TimeSpanValues;
        onChange?: (strValue?: string, timeSpanValue?: TimeSpanValues) => void;
    }
    interface TimeSpanValues {
        days?: string;
        hours?: string;
        minutes?: string;
        seconds?: string;
    }
    class TimeSpanEditor {
        private options;
        static dataKey: string;
        static rootClassName: string;
        static get(host: JQuery): TimeSpanEditor;
        daysSlider: JQuery;
        hoursSlider: JQuery;
        minutesSlider: JQuery;
        secondsSlider: JQuery;
        daysInputBox: JQuery;
        hoursInputBox: JQuery;
        minutesInputBox: JQuery;
        secondsInputBox: JQuery;
        time: JQuery;
        private view;
        constructor(options: ITimeSpanOptions);
        render(): JQuery;
        getTimeSpanValue(): TimeSpanValues;
        setTimeSpanValue(timeSpan: TimeSpanValues): void;
        getTimeSpanAsString(): string;
        private getView;
        private initComponents;
        private getSlider;
        private getInput;
        private initializeTimeSpanEditor;
        private updateDisplayedTime;
        private updateSlider;
        private updateTimeSpan;
        private getInputValue;
        private attachEvents;
    }
    interface TimeSpanDialogOptions {
        title?: string;
        width?: number;
        height?: number;
        onReset?: () => void;
        onOk?: (strValue?: string, timeSpanValue?: TimeSpanValues) => void;
    }
    function showTimeSpanDialog(options: {
        value: Editors.TimeSpanValues;
    } & TimeSpanDialogOptions): JQuery;
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
