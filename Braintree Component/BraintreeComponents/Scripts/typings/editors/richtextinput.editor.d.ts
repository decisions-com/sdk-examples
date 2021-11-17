/// <reference path="../typings/site/site.d.ts" />
/// <reference path="../typings/ckeditor/ckeditor.d.ts" />
declare namespace $DP.UI.Controls {
    interface RichTextInputEditorOptions {
        useDialog?: boolean;
        editingContextId?: string;
        path?: string[];
        instanceId?: string;
        isMobile?: boolean;
        height?: number | string;
        tabindex?: string;
        showRTEFilter?: boolean;
        callBackRTEFilter?: string;
        currentValue?: string;
        richTextMode?: string;
    }
    interface CkEditorInstance {
        options: RichTextInputEditorOptions;
        lastValue: string;
    }
    class RichTextInputEditor {
        private options;
        lastValue: string;
        ckEditorsInstances: {
            ckEditor: CkEditorInstance;
        }[];
        propertyGrid: JQuery;
        editor: CKEDITOR.editor;
        constructor(options: RichTextInputEditorOptions);
        get propertyGridInstance(): any;
        initialize(): void;
        IntitalizeRichTextArea(elementId: string): void;
        submitValue(id: string): void;
        SubmitRichTextBoxValue(ckEditorInstance: any): void;
        static update(updateOptions: NodeInfo): void;
        static instanceExists(id: string): boolean;
        static updateValue(id: string, value: string): void;
    }
}
declare namespace CKEDITOR {
    namespace editor {
        interface eventObject {
            uiReady?: (evt: CKEDITOR.eventInfo) => void;
        }
    }
    interface config {
        mode?: string;
    }
}
