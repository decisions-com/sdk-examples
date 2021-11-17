declare namespace $DP.ThemeEditor {
    class ThemeSize {
        private options;
        private $view;
        private rlDefineType;
        constructor(options: ThemeEditOptions);
        private createValueEditor;
        private createSizePicker;
        private createSizeDefiner;
        getView(): JQuery;
        private render;
    }
    class ThemeNumber {
        private options;
        private $view;
        private rlDefineType;
        constructor(options: ThemeEditOptions);
        private createValueEditor;
        private createNumberPicker;
        private createNumberDefiner;
        getView(): JQuery;
        private render;
    }
    class ThemeText {
        private options;
        private $view;
        private rlDefineType;
        constructor(options: ThemeEditOptions);
        private createValueEditor;
        private createTextPicker;
        private createTextDefiner;
        getView(): JQuery;
        private render;
    }
}
