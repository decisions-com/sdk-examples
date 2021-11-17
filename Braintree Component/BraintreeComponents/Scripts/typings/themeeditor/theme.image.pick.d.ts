/// <reference path="../ColorEditor/colorpick.editor.d.ts" />
declare namespace $DP.ThemeEditor {
    interface ThemeEditorImagePickOptions {
        readonly host?: JQuery;
        readonly entityName: string;
        readonly variableValue: string;
        readonly onValueChanged: (value: string) => void;
    }
    interface ImageVariableValue {
        url: string;
        readonly extensions: string;
    }
    class ThemeEditorImagePick {
        private options;
        private $view;
        private imageVariableValue;
        constructor(options: ThemeEditorImagePickOptions);
        private getView;
        private imageUrlToImageInfo;
        getImage(): string;
    }
    function getImageVariableValue(variable: string): ImageVariableValue;
}
