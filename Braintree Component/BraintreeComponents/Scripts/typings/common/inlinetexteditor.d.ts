declare namespace $DP.Common {
    interface InlineTextEditorOption {
        host: JQuery;
        readonly editableComponentClasses?: string[];
        readonly inputComponentClasses?: string[];
        readonly onAcceptChanges?: (result: string, origin: InlineTextEditor) => void;
        readonly onFocusOut?: (result: string, origin: InlineTextEditor) => void;
        readonly onEditableSelect?: (origin: InlineTextEditor) => void;
    }
    class InlineTextEditor {
        private options;
        $view: JQuery;
        $editable: JQuery;
        $input: JQuery;
        value: string;
        constructor(options: InlineTextEditorOption);
        private getElementValue;
        private renderEditable;
        private renderInput;
        private createEditableComponent;
        private createInputComponent;
        private setEditableClasses;
        private setInputClasses;
        private editableClick;
        private acceptChanges;
        private focusOut;
    }
}
