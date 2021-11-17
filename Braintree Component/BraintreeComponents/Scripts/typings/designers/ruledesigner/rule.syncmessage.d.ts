declare namespace $DP.Designers.Rules {
    interface SyncMessageOptions extends UpdateSyncBarOptions {
        host?: JQuery;
        onAddToSampleSetClick: (e: {
            origin: SyncMessage;
            dataName: string;
        }) => void;
        onAddToRuleClick: (e: {
            origin: SyncMessage;
            dataName: string;
        }) => void;
        onResolveAllClick: (e: {
            origin: SyncMessage;
        }) => void;
    }
    class SyncMessage {
        private options;
        private syncBar;
        private $dialog;
        private message;
        private missingInSampleSet;
        private missingInRule;
        constructor(options: SyncMessageOptions);
        getView(): JQuery;
        isVisible(): boolean;
        update(options: UpdateSyncBarOptions): void;
        private setFromOptions;
        private render;
    }
}
