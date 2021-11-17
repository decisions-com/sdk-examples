/// <reference path="../../typings/goJS/gojs.d.ts" />
declare namespace $DP.Designers.Flows {
    class SimpleFlowDesigner extends BaseFlowDesigner {
        private propertiesPanel;
        private galleryPanel;
        private configurationPanel;
        private readonly formInstanceId;
        private readonly formWrapperId;
        private showGallery;
        constructor(uiroot: JQuery, instanceId: string, flowId: string, sampleId?: string | undefined, flowName?: string | undefined);
        initialize(data: $DP.Designers.Flows.OpenFlowInitialResult): Promise<void>;
        protected configureDiagram(config: any): any;
        private _firstPositioning;
        protected positionDiagram(): {
            surfaceWidth: number;
            surfaceHeight: number;
            umHeight: number;
            ipHeight: number;
        } | undefined;
        protected initializeRightBar(): void;
        private get showPropertiesPanel();
        handleClick(entity: $DP.Designers.Flows.FlowEntity | undefined): Promise<void>;
        refreshToolbox(path: string[] | undefined): boolean;
        handleSelection(entities: $DP.Designers.Flows.FlowEntity[]): Promise<void>;
        updateMultiselectionView(autoSelectFlow?: boolean, showProperties?: boolean): void;
        submitProperties(): Promise<void>;
        loadContextForFlow(): Promise<void>;
        selectPanel(panel: 'toolbox' | 'properties'): boolean;
        private selectPanelInternal;
        private loadConfigurationFlow;
        private resizeForm;
        close(formWrapperId: string): void;
        private addFormWrapperEvents;
        private ensureConfigurationPanel;
        selectNode(stepId: string, showPartEditor?: boolean): void;
        showQuickAddWizard(step: FlowStep, pathName: string, location: go.Point, existingLinkId?: string): JQuery;
        loadPropertiesForEntity(entity: FlowEntity): void;
    }
}
