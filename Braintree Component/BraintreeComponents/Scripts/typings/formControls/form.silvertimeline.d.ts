declare namespace $DP.Control {
    class SilverTimeline extends ContentBase {
        options: Silverdark.Components.SilverTimelineOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverTimelineOptions);
        getControl(): JQuery;
        renderOnDesignTime(): JQuery;
        renderhtml(): JQuery;
        getStepView(stepState: TimelineStepStates, stepName: string): JQuery;
    }
}
