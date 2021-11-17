declare namespace $DP.Designers {
    import SampleCategory = $D.Framework.Design.Flow.Service.Debugging.Samples.SampleCategory;
    import RuleProgressDataHolder = $D.Framework.Design.Flow.Service.Debugging.DebugData.RuleProgressDataHolder;
    import FlowProgressData = $D.Framework.Design.Flow.Service.Debugging.DebugData.FlowProgressData;
    import DebugDataInfo = $D.Framework.Design.Flow.Service.Debugging.DebugData.DebugDataInfo;
    interface SampleHandler {
        start(sample: string | SampleCategory, forceStart?: boolean): any;
        stop(): any;
        restart(): any;
        getCurrentCategory(): SampleCategory;
        /**
         * either single sample or category id
        */
        getCurrentlySamplingId(): string;
        isSampleStarted(): boolean;
        isSampleSetStarted(): boolean;
        setDefaultCategory(category: SampleCategory): any;
        getDefaultCategory(): SampleCategory;
        freeze(): any;
        unfreeze(): any;
        isCategoryStarted(): any;
    }
    interface SampleHandlerOptions {
        readonly sessionId: string;
        readonly getSampleSetHolder: () => JQuery;
        readonly spinnerOverlayElement?: JQuery;
        readonly onStartSample?: (progresses: RuleProgressDataHolder | FlowProgressData[] | DebugDataInfo) => void;
        readonly onStopSample?: () => void;
        readonly onStartSampleSet?: (categoryId: string) => void;
        readonly onStopSampleSet?: () => void;
    }
    interface DefaultSampleHandlerOptions extends SampleHandlerOptions {
        readonly service: SampleService;
        readonly getView: (cat: SampleCategory) => SampleSetStatsView;
    }
    interface SampleSetStatsView {
        showStats(stats: any): any;
        showRerun(rerun: Function): any;
        getElement(): JQuery;
        dispose(): any;
    }
    interface SampleService {
        startSample: (sessionId: string, sampleId: string) => Promise<FlowProgressData[] | RuleProgressDataHolder | DebugDataInfo>;
        startSampleSet: (sessionId: string, sampleSetId: string) => Promise<any>;
        stopSampling: (sessionId: string) => Promise<void>;
        stopSampleSet: (sessionId: string) => Promise<void>;
    }
    class DefaultSampleHandler implements SampleHandler {
        private options;
        private sampleId;
        private category;
        private autoRerun;
        private defaultCategory;
        private view;
        constructor(options: DefaultSampleHandlerOptions);
        isSampleStarted(): boolean;
        isSampleSetStarted(): boolean;
        getCurrentCategory(): SampleCategory;
        getCurrentlySamplingId(): string;
        getDefaultCategory(): SampleCategory;
        setDefaultCategory(value: SampleCategory): void;
        start(sample: string | SampleCategory, forceStart?: boolean): void;
        private startSample;
        private startCategory;
        restart(): void;
        private ensureViewInDom;
        private rerunSampleSet;
        stop(): void;
        private stopSample;
        private stopSampleCategory;
        private showSpinner;
        private hideSpinner;
        private frozen;
        freeze(): void;
        unfreeze(): void;
        private categoryStarted;
        isCategoryStarted(): boolean;
    }
}
