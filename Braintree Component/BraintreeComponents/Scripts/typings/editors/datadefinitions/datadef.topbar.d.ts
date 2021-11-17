declare namespace $DP.Editors {
    interface DataDefTopBarOptions {
        entityId: string;
        host: JQuery;
        canLoadSampleSet: boolean;
        hasDefinitions: () => boolean;
        uploadSampleSet: (fileId: string) => void;
        pickSampleSet: (reportId: string) => void;
    }
    class DataDefTobPar {
        private options;
        constructor(options: DataDefTopBarOptions);
        private render;
        private makeSampleButtons;
        private confirmInputDataReplace;
        private createOrPickReport;
    }
}
