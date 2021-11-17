/// <reference path="../ColorEditor/colorpick.editor.d.ts" />
declare namespace $DP.ThemeEditor {
    import ThemeEditVariable = $D.Framework.ServiceLayer.Services.Theme.ThemeEdit.ThemeVariableNode;
    interface ThemeEditorImageVariableOptions {
        readonly host?: JQuery;
        readonly entityName: string;
        readonly pickedStyleName: string;
        readonly isPicked: boolean;
        readonly variableValue: string;
        readonly themeVariables: ThemeEditVariable[];
        readonly onValueChanged?: (variable: ThemeEditVariable) => void;
    }
    class ThemeEditorImageVariable {
        private options;
        private $view;
        private variableValue;
        private themeEditVariables;
        constructor(options: ThemeEditorImageVariableOptions);
        private toComboBoxItem;
        private getSlectedItem;
        private getView;
        private getImage;
        getColor(): string;
    }
}
