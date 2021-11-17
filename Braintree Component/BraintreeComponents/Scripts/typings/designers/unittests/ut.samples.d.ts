declare namespace $DP.Designers.Unittests {
    import FlowDebugType = $D.Framework.Design.Flow.Service.Debugging.FlowDebugType;
    import MappingContext = $D.Framework.Design.Flow.Service.MappingContext;
    const SamplesApiFactory: (context: MappingContext) => {
        getCategories: () => Promise<$D.Framework.Design.Flow.Service.Debugging.Samples.SampleCategory[]>;
        getCategory: (id: string) => $D.Framework.Design.Flow.Service.Debugging.Samples.SampleCategory;
        search: (criteria: string) => Promise<$D.Framework.Design.Flow.Service.Debugging.Samples.SampleForTree[]>;
        getByCategory: (category: string, limitCount?: number, pageIndex?: number) => $D.Framework.Design.Flow.Service.Debugging.Samples.SampleForTree[];
        registerContextToAdd: (inputContextId?: string) => Promise<string>;
        registerContextToEdit: (id: string) => Promise<string>;
        registerContextToCopy: (id: string) => Promise<string>;
        addFromContext: (contextId: string) => Promise<string>;
        saveFromContext: (id: string, contextId: string) => Promise<void>;
        runDebugger: (id: string, overrideWithContextId?: string, flowDebugType?: FlowDebugType, profileType?: ProfileType) => void;
        startSampling: (samplingId: string, callBack?: (data: any) => void) => void;
        stopSampling: (callBack?: () => void) => void;
        delete: (id: string) => Promise<void>;
        unregisterContext: (contextId: string) => Promise<void>;
        editCategory: (catId: string) => Promise<void>;
        deleteCategory: (catId: string) => Promise<void>;
    };
}
