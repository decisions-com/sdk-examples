declare namespace $DP.Control {
    class SilverCurrentTime extends ContentBase {
        options: Silverdark.Components.SilverCurrentTimeOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverCurrentTimeOptions);
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        timer: number;
        displayTime(): void;
        getControl(): JQuery;
        renderhtml(): JQuery;
    }
}
