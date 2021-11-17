/// <reference path="../ColorEditor/colorpick.editor.d.ts" />
declare namespace $DP.ThemeEditor {
    import ThemeEditVariable = $D.Framework.ServiceLayer.Services.Theme.ThemeEdit.ThemeVariableNode;
    interface ThemeSizeVariableOptions {
        readonly host?: JQuery;
        readonly entityName: string;
        readonly pickedStyleName: string;
        readonly variableValue: string;
        readonly isPicked: boolean;
        readonly themeVariables: ThemeEditVariable[];
        readonly onValueChanged?: (variable: ThemeEditVariable) => void;
    }
    class ThemeSizeVariable {
        private options;
        private $view;
        private variableValue;
        private themeEditVariables;
        constructor(options: ThemeSizeVariableOptions);
        private toComboBoxItem;
        private getView;
    }
    interface ThemeNumberVariablOptions {
        readonly host?: JQuery;
        readonly entityName: string;
        readonly pickedStyleName: string;
        readonly variableValue: string;
        readonly isPicked: boolean;
        readonly themeVariables: ThemeEditVariable[];
        readonly onValueChanged?: (variable: ThemeEditVariable) => void;
    }
    class ThemeNumberVariable {
        private options;
        private $view;
        private variableValue;
        private themeEditVariables;
        constructor(options: ThemeNumberVariablOptions);
        private toComboBoxItem;
        private getView;
    }
    interface ThemeTextVariablOptions {
        readonly host?: JQuery;
        readonly entityName: string;
        readonly pickedStyleName: string;
        readonly variableValue: string;
        readonly isPicked: boolean;
        readonly themeVariables: ThemeEditVariable[];
        readonly onValueChanged?: (variable: ThemeEditVariable) => void;
    }
    class ThemeTextVariable {
        private options;
        private $view;
        private variableValue;
        private themeEditVariables;
        constructor(options: ThemeTextVariablOptions);
        private toComboBoxItem;
        private getView;
    }
}
