declare namespace $DP.Designers.Rules {
    interface UpdateSyncBarOptions {
        readonly missingInSampleSet: string[];
        readonly missingInRule: string[];
    }
    interface BaseSyncBarOptions extends UpdateSyncBarOptions {
        readonly onAddToSampleSetClick: (e: {
            origin: SyncPanel;
            dataName: string;
        }) => void;
        readonly onAddToRuleClick: (e: {
            origin: SyncPanel;
            dataName: string;
        }) => void;
    }
    interface SyncBarOptions extends BaseSyncBarOptions {
        readonly host?: JQuery;
    }
    class SyncPanel {
        private options;
        private $view;
        private missingInSampleSet;
        private missingInRule;
        constructor(options: SyncBarOptions);
        getView(): JQuery;
        update(options: UpdateSyncBarOptions): void;
        private render;
        private createRows;
        private createMissingInRuleRow;
        private createMissingInSampleSetRow;
    }
    function showSyncDialog(options: SyncBarOptions & {
        onResolveAllClick: (e: {
            origin: JQuery;
        }) => void;
        onClose: (e: {
            origin: JQuery;
        }) => void;
    }): {
        syncBar: $DP.Designers.Rules.SyncPanel;
        dialog: JQuery;
    };
}
