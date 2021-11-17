declare namespace $DP.PageParts.CaseEditor {
    interface RuntimeStateOptions {
        host?: JQuery;
        state: CaseStateModel;
    }
    class RuntimeState {
        private options;
        private $view;
        constructor(options: RuntimeStateOptions);
        getView(): JQuery;
        private render;
        private setColor;
    }
}
