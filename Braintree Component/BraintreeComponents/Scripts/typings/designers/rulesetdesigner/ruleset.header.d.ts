declare namespace $DP.Designers.RuleSet {
    interface HeaderOptions {
        host?: JQuery;
        text: string;
        mainRuleSetId: string;
        flowId: string;
        curRuleSetId: string;
        samplePanel?: $DP.Designers.SamplePanel;
    }
    class Header {
        private options;
        private view;
        private actions;
        setUpActionUniqueName: string;
        constructor(options: HeaderOptions);
        getView(): JQuery;
        renderLeftSection(): Promise<void>;
        private addDebugButton;
        private addActionButton;
        private showDebuggerMenu;
        private startDebugger;
        private showContextMenu;
        private addCategoryButton;
        private addPrimaryButtons;
    }
}
