/// <reference path="../../dialog/dialog.message.d.ts" />
/// <reference path="../sidebar.panels.d.ts" />
declare namespace $DP.Designers {
    import SampleCategory = $D.Framework.Design.Flow.Service.Debugging.Samples.SampleCategory;
    interface SamplePanelOptions {
        readonly apiConfig: Unittests.ServerApiConfig;
        readonly unittestsApiConfig?: Unittests.ServerApiConfig;
        readonly onSampleSelected?: (samplegId: string) => void;
        readonly onSampleEditComplete?: (sampleId: string) => void;
        readonly onCategorySelected?: (category: SampleCategory) => void;
        readonly onCategoryDeleted?: (catId: string) => void;
        readonly onClearSelection?: () => void;
        readonly onBeforeLoad?: () => void;
        readonly selectedSampleId?: string | (() => string);
        readonly defaultSampleId?: string | (() => string);
        readonly customRunSample?: (runSampleId: string) => void;
    }
    interface ITreeState {
        selectId?: string;
        searchText?: string;
    }
    class SamplePanel implements $DP.Designers.SidebarPanel {
        private options;
        onExpanded: () => void;
        get header(): string;
        private container;
        private unittestsTree;
        private samplesTree;
        constructor(options: SamplePanelOptions);
        isVisible(): boolean;
        reload(selectId?: string): void;
        private setDesignerChanged;
        private getSelectSampleIdFromOptions;
        private getDefaultSampleIdFromOptions;
        private get mappingContext();
        private mappingContextForUnitTests;
        private getUnitTestsApiConfig;
        initialize(container: JQuery): void;
        private loadUnitTestTree;
        private getUnitTestInlineActions;
        private loadSampleTree;
        private getSampleCategoryActions;
        private getSampleActions;
        private showMenuToSaveSampleAs;
    }
}
