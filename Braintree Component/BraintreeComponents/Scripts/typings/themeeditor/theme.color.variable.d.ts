/// <reference path="../ColorEditor/colorpick.editor.d.ts" />
declare namespace $DP.ThemeEditor {
    import ThemeEditVariable = $D.Framework.ServiceLayer.Services.Theme.ThemeEdit.ThemeVariableNode;
    interface ThemeEditorColorVariableOptions {
        readonly host?: JQuery;
        readonly entityName: string;
        readonly pickedStyleName: string;
        readonly isPicked: boolean;
        readonly color: string;
        readonly themeVariables: ThemeEditVariable[];
        readonly onColorChanged?: (variable: ThemeEditVariable) => void;
    }
    class ThemeColorVariable {
        private options;
        private $view;
        private color;
        private themeEditVariables;
        constructor(options: ThemeEditorColorVariableOptions);
        private toComboBoxItem;
        private getView;
        getColor(): string;
    }
}
