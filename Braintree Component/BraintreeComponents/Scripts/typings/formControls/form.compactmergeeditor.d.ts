/// <reference path="../common/dptree.d.ts" />
/// <reference path="../merge/MergeEditor.d.ts" />
/// <reference path="../merge/MergeRichTextEditor.d.ts" />
/// <reference path="../merge/MergeTreeDataLoader.d.ts" />
declare namespace $DP.Control {
    import RichTextMergeEditor = $DP.Controls.RichText.MergeEditor;
    class CompactMergeEditor extends $DP.Control.DataContentBase {
        options: Silverdark.Components.MergeEditorOptions;
        mergeEditor: RichTextMergeEditor;
        private onLoaded;
        private allowFormating;
        private componentData;
        private oldValue;
        private typingTimer;
        constructor($controlLayout: JQuery, options: Silverdark.Components.MergeEditorOptions);
        private meDisplay;
        private meDisplayTxt;
        private meDisplayDiv;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        renderhtml(): JQuery;
        makeControlView(): void;
        bindEvents(): void;
        showMergeEditor(): void;
        displaySetData(data: string): void;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        setValueAsync(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): Promise<boolean>;
        getValue(): $DP.FormHost.DecisionsControlData[];
        getControl(): JQuery;
    }
}
