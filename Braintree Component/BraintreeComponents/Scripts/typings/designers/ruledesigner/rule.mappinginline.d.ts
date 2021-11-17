/// <reference path="../../typings/core/generated/datatypes._base.d.ts" />
/// <reference path="../../typings/jquery/jquery.d.ts" />
/// <reference path="../../typings/linq/linq.d.ts" />
/// <reference path="../matrixrule/mrd.inlineediting.d.ts" />
declare namespace $DP.Designers.Rules {
    interface MappingInlineEditorOptions {
        name: string;
        mappingType: string;
        dataType: string;
        value: string;
        isList: boolean;
        canEdit?: boolean;
        canRemove?: boolean;
        canChange?: boolean;
        isReadonly: boolean;
        getMappingContext: () => $DP.Common.MappingContext;
        onCheckBoxClick: (event: {
            editor: MappingInlineEditor;
            value: boolean;
        }) => void;
        onChangeValue: (event: {
            component: MappingInlineEditor;
            value: string;
        }) => void;
        onBtnClick: (event: {
            component: MappingInlineEditor;
            button: JQuery;
        }) => void;
        onDeleteData: (event: {
            component: MappingInlineEditor;
            button: JQuery;
        }) => void;
        onEditData: (event: {
            component: MappingInlineEditor;
            button: JQuery;
        }) => void;
        showFullEditor: (event: {
            component: MappingInlineEditor;
            editorInfo: $DP.Designers.MatrixRule.IntersectionEditorInfo;
        }) => void;
    }
    class MappingInlineEditor {
        private options;
        private $view;
        private $checkbox;
        constructor(options: MappingInlineEditorOptions);
        private render;
        getView(): JQuery;
        private createCheckbox;
        private createInlineEditor;
        private isDisabled;
        private attachEvents;
    }
}
