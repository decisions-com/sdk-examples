/// <reference path="../common/dptree.d.ts" />
/// <reference path="../merge/MergeEditor.d.ts" />
/// <reference path="../merge/MergeTreeDataLoader.d.ts" />
/// <reference path="../containers/lay.interfaces.d.ts" />
declare namespace $DP.Control {
    class MergeEditor extends $DP.Control.DataContentBase implements $DP.Containers.LayoutAware {
        options: Silverdark.Components.MergeEditorOptions;
        mergeEditor: $DP.Controls.RichText.MergeEditor;
        private onLoaded;
        private allowFormating;
        private startValue;
        private oldValue;
        private typingTimer;
        constructor($controlLayout: JQuery, options: Silverdark.Components.MergeEditorOptions);
        onMoved(): void;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        renderhtml(): JQuery;
        makeControl(): void;
        bindEvents(): void;
        getDesignVew(): void;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        getValue(): $DP.FormHost.DecisionsControlData[];
        getControl(): JQuery;
    }
}
