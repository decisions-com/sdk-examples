declare namespace $DP.ThemeEditor {
    class ThemeImage {
        private options;
        private $view;
        private rlDefineType;
        constructor(options: ThemeEditOptions);
        private createColorEditor;
        private createImagePicker;
        private createImageDefiner;
        getView(): JQuery;
        private render;
    }
}
