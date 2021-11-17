declare namespace $DP.Control {
    abstract class BaseStartFlowButton extends ContentBase implements $DP.FormHost.IDataConsumer {
        options: Silverdark.Components.BaseStartFlowButtonOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.BaseStartFlowButtonOptions);
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        $button: JQuery;
        attachEvents(): void;
        getControl(): JQuery;
        private flowId;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
    }
}
