/// <reference path="../ColorEditor/colorpick.editor.d.ts" />
declare namespace $DP.ThemeEditor {
    interface ThemePickOptions {
        readonly host?: JQuery;
        readonly entityName: string;
        readonly value: string;
        readonly onValueChanged?: (value: string) => void;
    }
    class ThemeSizePick {
        private options;
        private $view;
        private value;
        private SIZE_KEYS;
        constructor(options: ThemePickOptions);
        private getView;
        getValue(): string;
        private validateSize;
        private validateNumber;
    }
    class ThemeNumberPick {
        private options;
        private $view;
        private value;
        constructor(options: ThemePickOptions);
        private getView;
        getValue(): string;
    }
    class ThemeTextPick {
        private options;
        private $view;
        private value;
        constructor(options: ThemePickOptions);
        private getView;
        getValue(): string;
    }
}
