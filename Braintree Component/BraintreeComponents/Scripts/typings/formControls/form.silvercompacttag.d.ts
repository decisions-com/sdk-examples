declare namespace $DP.Control {
    class SilverCompactTag extends ContentBase {
        options: Silverdark.Components.SilverCompactTagOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverCompactTagOptions);
        $compactTagContainer: JQuery;
        selectedTags: TagData[];
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        renderhtml(): JQuery;
        private control;
        createTags(): Promise<void>;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        getValue(): $DP.FormHost.DecisionsControlData[];
        getControl(): JQuery;
    }
}
