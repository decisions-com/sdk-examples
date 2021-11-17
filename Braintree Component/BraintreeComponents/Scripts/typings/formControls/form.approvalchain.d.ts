declare namespace $DP.Control {
    class ApprovalChainEditor extends FormComponentBase implements $DP.FormHost.IAsyncDataProducer {
        options: Silverdark.Components.ApprovalChainEditorOptions;
        private contextEditor;
        constructor(host: JQuery, options: Silverdark.Components.ApprovalChainEditorOptions);
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        get renderDefaultViewOnDesignTime(): boolean;
        renderhtml(): JQuery;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        getValueAsync(): Promise<$DP.FormHost.DecisionsControlData[]>;
        getControl(): JQuery;
        private updateApprovalChain;
    }
}
