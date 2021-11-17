/// <reference path="../../typings/core/generated/datatypes._base.d.ts" />
/// <reference path="../../typings/jquery/jquery.d.ts" />
/// <reference path="../../typings/linq/linq.d.ts" />
/// <reference path="../../designers/matrixrule/mrd.inlineediting.d.ts" />
/// <reference path="../popuplayer.d.ts" />
declare namespace $DP.Common {
    import InlineMapping = $D.Framework.Design.Flow.InlineMapping;
    interface InlineMappingEditorOptions {
        data: InlineMapping;
        isList?: boolean;
        canRemove?: boolean;
        canEdit?: boolean;
        isReadonly?: boolean;
        getMappingContext: () => $DP.Common.MappingContext;
        getEditContext: () => Promise<string>;
        onChangeValue?: (value: any) => void;
        onEditDone?: () => void;
        onMappingSelect?: (mappingType: string) => void;
        showFullEditor?: (e: {
            origin: InlineMappingEditor;
            editorData: $DP.Designers.MatrixRule.IntersectionEditorInfo;
        }) => void;
    }
    class InlineMappingEditor {
        private options;
        private $view;
        private $edit;
        private $editBtn;
        private $value;
        private $selectBtn;
        constructor(options: InlineMappingEditorOptions);
        static get ClassName(): string;
        private render;
        private showSelectLink;
        private showInlineEditor;
        private showSelectMappingMenu;
        getView(): JQuery;
        private createInlineEditor;
        private attachEvents;
        private onEditClick;
    }
}
