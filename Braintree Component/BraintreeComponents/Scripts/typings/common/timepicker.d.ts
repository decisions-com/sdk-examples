declare namespace $DP.Common {
    interface TimePickerOptions extends TimePickerStyleOptions {
        holder?: JQuery;
        defaultValue?: string;
        step?: number;
        showSeconds?: boolean;
        timeFormat?: TimeFormat;
        format?: string;
        onValueChange?: (time: string) => void;
        onInputExit?: () => void;
        tabIndex?: number;
    }
    interface TimePickerStyleOptions {
        textBoxCssClass?: string;
        upArrowCssClass?: string;
        downArrowCssClass?: string;
        clockCssClass?: string;
        dropDownListCssClass?: string;
        containerCssClass?: string;
        fonstStyle?: string;
    }
    interface ITimePicker {
        setTime(time: string | number, raiseEvent: boolean): any;
        getTime(): string;
    }
    class TimePicker implements ITimePicker {
        private options;
        $view: JQuery;
        $clock: JQuery;
        $input: JQuery;
        $upArrow: JQuery;
        $downArrow: JQuery;
        isMouseDown: boolean;
        cursorPosition: number;
        value: string;
        keyDownTimer: number;
        suggestionToolTip: TimeSuggestionToolTip;
        readonly instanceId: string;
        lastSetValue: string;
        constructor(options: TimePickerOptions);
        private _format;
        get format(): string;
        private _momentFormat;
        get momentFormat(): string;
        create(): this;
        renderView(): void;
        initializeTimePicker(): void;
        attachEvents(): void;
        onMouseUP(): void;
        setCaretPosition(): void;
        setTime(time: string | number, raiseEvent?: boolean): void;
        raiseValueChangeEvent(): void;
        adjustTime(type: "up" | "down"): void;
        getUnitOfTime(): {
            "unitOfTime": string;
            "amount": number;
        };
        getTime(): string;
    }
    interface TimeSuggestionToolTipOptions extends SuggestionTooltipOptions {
        format: string;
    }
    class TimeSuggestionToolTip extends SuggestionToolTip {
        options: TimeSuggestionToolTipOptions;
        constructor(options: TimeSuggestionToolTipOptions);
        readonly timeSuggestionFormat = "hh:mm:ss A";
        validateTime(time: string): boolean;
        private isSameTime;
        parseApproximateTime(currentTime: string): string;
        isValidHour(input: any): boolean;
        getValidSection(input: any, amPM: any): any;
        parseHour(input: any): any;
        isValidMinSec(input: any): boolean;
        getCurrentTime(): string;
        validateAndGetSuggestedTime(time: string): string;
        toggleSuggestionToolTip(time: string): void;
    }
}
interface JQuery {
    dpTimePicker(options: $DP.Common.TimePickerOptions): $DP.Common.TimePicker;
    dpTimePicker(methodName: "setTime", time: string): void;
    dpTimePicker(methodName: "setTime", milliseconds: number): void;
    dpTimePicker(methodName: "getTime"): string;
}
