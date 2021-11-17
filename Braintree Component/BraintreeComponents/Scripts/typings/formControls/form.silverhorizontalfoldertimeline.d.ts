declare namespace $DP.Control {
    enum TimelineStateSource {
        FromFolder = 0,
        DefineStates = 1
    }
    class SilverHorizontalFolderTimeline extends FormComponentBase implements $DP.FormHost.IDataConsumer {
        $controlLayout: JQuery;
        options: Silverdark.Components.SilverHorizontalFolderTimelineOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverHorizontalFolderTimelineOptions);
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        lastSetValue: string | {
            states: string[];
            currentState: string;
        };
        setValue(data: $DP.FormHost.DecisionsControlData[]): boolean;
        getControl(): JQuery;
        get renderDefaultViewOnDesignTime(): boolean;
        renderhtml(): JQuery;
    }
}
