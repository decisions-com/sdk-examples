/**
 * Author:huzefa.ezzi@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="TypeAhead.d.ts" />
/// <reference path="../typings/core/generated/textmergeservice.d.ts" />
/// <reference path="../typings/ckeditor/ckeditor.d.ts" />
/// <reference path="../typings/core/decisions.d.ts" />
/// <reference path="../typings/atwho.d.ts" />
declare namespace $DP.Controls.RichText {
    interface IMergeHtmlNode {
        ClassName: string;
        NodeName: string;
        OnSetData(node: JQuery): void;
        OnGetData(node: JQuery): void;
        GetNode(name: string): JQuery;
    }
    interface IMergeRichTextEditorOptions {
        allowFormatting?: boolean;
        startupFocus?: boolean;
        typeAheadData?: (criteria: string) => any;
        missingFieldsValidation?: (rawInputString: string) => JQuery;
    }
    class AbstarctFieldNode {
        ClassName: string;
        GetNode(name: string, hasDesignText?: boolean): JQuery;
        OnGetData(node: JQuery): void;
        GetReplaceNode(node: JQuery): JQuery;
    }
    class DataFieldNode extends AbstarctFieldNode implements IMergeHtmlNode {
        ClassName: string;
        NodeName: string;
        GetNode(name: string, hasDesignText?: boolean): JQuery;
        OnSetData(node: JQuery): void;
        GetReplaceNode(node: JQuery): JQuery;
    }
    class FieldExtentionNode extends AbstarctFieldNode implements IMergeHtmlNode {
        ClassName: string;
        NodeName: string;
        OnSetData(node: JQuery): void;
        GetReplaceNode(node: JQuery): JQuery;
        static SetFieldExtentionId(node: JQuery, fieldExtentionId: string): void;
        static GetFieldExtentionId(node: JQuery): string;
    }
    class MergeRichTextEditor {
        target: JQuery;
        private options;
        TextChanged: () => void;
        FieldExtensionSelected: (id: string) => void;
        private editor;
        static readonly FIELD_CLASS_DEFAULT: string;
        static readonly TEMP_FIELD_CLASS: string;
        private readonly TEMP_FIELD_ID;
        static readonly FIELD_CLASS_DESIGNTEXT: string;
        static readonly FIELD_CLASS_DESIGNTEXT_RESIZABLE: string;
        private tempFieldData;
        private textMergeSessionId;
        private isTemp;
        private selectedHtml;
        private editorEnableEnter;
        constructor(target: JQuery, options: IMergeRichTextEditorOptions);
        private initializeCkEditor;
        private sanitizeText;
        private addFieldFromTypeAheadData;
        private triggerTextChaged;
        get AllowFormatting(): boolean;
        set AllowFormatting(alloFormatting: boolean);
        get TextMergeSessionId(): string;
        set TextMergeSessionId(id: string);
        get Editor(): CKEDITOR.editor;
        private onSetData;
        static getViewData(value: string): JQuery;
        static getHtmlViewData(value: string): string;
        private onGetData;
        private InvokeFieldExtensionSelected;
        private InitEditorEvents;
        ShowContextMenu(e: any): void;
        private IconSetSize;
        private EditFieldExtention;
        private SelectDataField;
        private SetHeight;
        get Text(): string;
        set Text(text: string);
        isEditorLoaded(): boolean;
        private static inputParsers;
        private static outputParsers;
        private static editorConfiguration;
        private dataLoader;
        SetDataLoader(loader: (elem: JQuery, onNodeSelect: (node: any) => void, selectedPath: string) => $DP.Common.TreeLoader): void;
        TempFieldVisible(): boolean;
        TempFieldAdd(): void;
        TempFieldRemove(): void;
        PrepareFieldElement(field: any): CKEDITOR.dom.element;
        InsertField(field: any): void;
        getPastedText(nodeId: string): string;
        private createNode;
        getFieldFromNode(node: any): JQuery;
        static resizeTextareas(elem: JQuery): void;
        static setTextareaWidth(elem: JQuery): void;
        private insertNode;
        InsertFieldFromNode(node: $DP.Common.DPTreeContext): boolean;
        private RegisterField;
        MoveFocusAfter(obj: any): void;
        RemoveField(obj: any): void;
        RemoveFieldById(id: any): void;
        ReplaceField(targetField: any, newFieldData: any): void;
        GetJqueryElementById(id: any): JQuery;
        GetFieldData(obj: any): any;
        GetFieldDataById(id: any): any;
        GetAllFieldsData(): any[];
        GetCKelementById(id: any): CKEDITOR.dom.element;
        Destory(): void;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
