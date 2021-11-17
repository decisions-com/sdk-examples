declare namespace $DP.ThemeEditor {
    class ThemeColor {
        private options;
        private $view;
        private rlDefineType;
        constructor(options: ThemeEditOptions);
        private createColorEditor;
        private createColorPicker;
        private createColorDefiner;
        getView(): JQuery;
        private render;
    }
}
