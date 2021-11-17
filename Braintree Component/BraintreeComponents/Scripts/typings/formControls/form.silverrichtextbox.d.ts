/// <reference path="../common/richtext.d.ts" />
/// <reference path="form.datacontrol.d.ts" />
/// <reference path="form.componentbase.d.ts" />
/// <reference path="../containers/lay.interfaces.d.ts" />
declare namespace $DP.Control {
    class SilverRichTextBox extends DataContentBase implements $DP.Containers.LayoutAware {
        options: Silverdark.Components.SilverRichTextBoxOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverRichTextBoxOptions);
        private isvalueChanged;
        typingTimer: number;
        editor: CKEDITOR.editor;
        textAreaId: string;
        defaultBackColor: string;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        get richtextContainer(): JQuery;
        onMoved(): void;
        intializeCKEditor(): void;
        onEnablityChange(isEnable: boolean): void;
        bindEvents(): void;
        setValidationBackgroundColorOnInput(color: string): void;
        unsetValidationBackgroundColorOnInput(): void;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        getValue(): $DP.FormHost.DecisionsControlData[];
        getControlValue(isRule?: boolean): FormHost.DecisionsControlData[];
        getEditorValue(isRule?: boolean): string;
        isEditorLoaded(): boolean;
        getControl(): JQuery;
        get renderDefaultViewOnDesignTime(): boolean;
        renderhtml(): JQuery;
    }
}
declare namespace CKEDITOR {
    interface editor {
        editable(elementOrEditable?: dom.element): dom.element;
    }
}
