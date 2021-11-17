/// <reference path="../ColorEditor/colorpick.editor.d.ts" />
declare namespace $DP.ThemeEditor {
    interface ThemeEditorColorPickOptions {
        readonly host?: JQuery;
        readonly entityName: string;
        readonly color: string;
        readonly onColorChanged?: (value: string) => void;
    }
    class ThemeColorPick {
        private options;
        private $view;
        private color;
        constructor(options: ThemeEditorColorPickOptions);
        private getView;
        getColor(): string;
    }
}
