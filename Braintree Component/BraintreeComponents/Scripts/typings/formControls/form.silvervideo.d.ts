declare namespace $DP.Control {
    class SilverVideo extends ContentBase implements $DP.Containers.LayoutAware {
        options: Silverdark.Components.SilverVideoOptions;
        videoUrl: string;
        controlInitialized: boolean;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverVideoOptions);
        getControl(): JQuery;
        onMoved(): void;
        private loadVideo;
        renderhtml(): JQuery;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
    }
}
