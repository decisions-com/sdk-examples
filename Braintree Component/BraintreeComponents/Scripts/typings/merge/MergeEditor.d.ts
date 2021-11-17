/**
 * Author:huzefa.ezzi@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../designers/utils.d.ts" />
/// <reference path="../common/scriptloader.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/site/site.d.ts" />
/// <reference path="../typings/pubsub/pubsub.d.ts" />
/// <reference path="MergeRichTextEditor.d.ts" />
/// <reference path="MergeTreeDataLoader.d.ts" />
declare namespace $DP.Controls.RichText {
    interface IMergeViewBuilder {
        GetRichTextView(): string;
        GetTreeView(): string;
        GetSplitterView(): string;
    }
    interface IMergeEventOptions {
        id: string;
        mergeTextLength?: string;
        allowFormating?: boolean;
        editingContextID?: string;
        commaSeperatedPath?: string;
        editorDataLoader?: IMergeDataLoader;
        mappingContext?: $DP.Common.MappingContext;
    }
    class MergeViewBuilder implements IMergeViewBuilder {
        GetRichTextView(): string;
        GetTreeView(): string;
        GetSplitterView(): string;
    }
    class MergeEditor {
        private allowFormatting;
        private startupFocus;
        private mergeRichTextEditor;
        private mergeEditorDataTreeModel;
        private loader;
        OnEditorBlur: () => void;
        OnEditorFocus: () => void;
        OnEditorKey: (e: CKEDITOR.eventInfo) => void;
        RootContainer: JQuery;
        EditorElement: JQuery;
        Target: JQuery;
        TreeElement: JQuery;
        overlay: JQuery;
        onScriptsLoaded: () => JQueryPromise<any>;
        constructor(target: JQuery, allowFormatting?: boolean, startupFocus?: boolean);
        Initialize(mergeDataLoaderGetter: () => IMergeDataLoader): JQueryPromise<any>;
        private InitializeInternal;
        private missingFieldsValidation;
        private AttachEvents;
        get MergeEditorDataTreeModel(): MergeEditorDataTreeModel;
        SetTextMergeSession(sessionId: string): void;
        private InitializeSplitter;
        showOverlay(): void;
        hideOverlay(): void;
        get DataLoader(): IMergeDataLoader;
        set DataLoader(loader: IMergeDataLoader);
        get Text(): string;
        set Text(text: string);
        get GetHtml(): string;
        set GetHtml(text: string);
        get TextChanged(): () => void;
        set TextChanged(textChanged: () => void);
        set FieldExtensionSelected(fieldExtentionSelected: (id: string) => void);
        get FieldExtensionSelected(): (id: string) => void;
        get AllowFormatting(): boolean;
        set AllowFormatting(alloFormatting: boolean);
        set HtmlEncodedText(text: string);
        get HtmlEncodedText(): string;
        isMergeRichTextEditorCreated(): boolean;
        private buildView;
        Destory(): void;
        static attachMergeEditorEvents(options: $DP.Controls.RichText.IMergeEventOptions): void;
        static showEditorDialog(options: $DP.Controls.RichText.IMergeEventOptions, elem: JQuery, value: string, onSave: (value: string) => void): void;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
