declare namespace $DP.Designers.Unittests {
    import MappingContext = $D.Framework.Design.Flow.Service.MappingContext;
    import MappingContextType = $D.Framework.Design.Flow.Service.MappingContextType;
    type ElementType = "Flow" | "Rule" | "MatrixRule";
    /**
     * @deprecated obsolete. use MappingContext instead.
     */
    interface ServerApiConfig {
        elementId: string;
        elementType: ElementType;
        sessionId?: string;
        handlerName?: string;
    }
    function saveEntity(elementType: ElementType, sessionId: string): Promise<void>;
    enum ExampleDataType {
        UnitTest,
        Sample
    }
    function showAddSampleDialog(context: MappingContext, onAdded: (id: any) => void, inputsContextId?: string): void;
    function showEditSampleDialog(id: string, context: MappingContext, onOkClick: (id: any) => void): Promise<void>;
    function showAddUnitTestDialog(mappingContext: MappingContext, onAdded: (id: any) => void, inputsContextId?: string): void;
    function showEditUnitTestDialog(id: string, mappingCotext: MappingContext, onModified: (id: any) => void): Promise<void>;
    function askToDeleteExampleData(dataType: ExampleDataType, id: string, mappingContext: MappingContext, onDeleted: (id: any) => void): void;
    function getExampleDataApiFactory(dataType: ExampleDataType, mappingContext: MappingContext): {
        getCategories: () => Promise<$D.Framework.Design.Flow.Service.Debugging.Samples.SampleCategory[]>;
        getCategory: (id: string) => $D.Framework.Design.Flow.Service.Debugging.Samples.SampleCategory;
        search: (criteria: string) => Promise<$D.Framework.Design.Flow.Service.Debugging.Samples.SampleForTree[]>;
        getByCategory: (category: string, limitCount?: number, pageIndex?: number) => $D.Framework.Design.Flow.Service.Debugging.Samples.SampleForTree[];
        registerContextToAdd: (inputContextId?: string) => Promise<string>;
        registerContextToEdit: (id: string) => Promise<string>;
        registerContextToCopy: (id: string) => Promise<string>;
        addFromContext: (contextId: string) => Promise<string>;
        saveFromContext: (id: string, contextId: string) => Promise<void>;
        runDebugger: (id: string, overrideWithContextId?: string, flowDebugType?: $D.Framework.Design.Flow.Service.Debugging.FlowDebugType, profileType?: ProfileType) => void;
        startSampling: (samplingId: string, callBack?: (data: any) => void) => void;
        stopSampling: (callBack?: () => void) => void;
        delete: (id: string) => Promise<void>;
        unregisterContext: (contextId: string) => Promise<void>;
        editCategory: (catId: string) => Promise<void>;
        deleteCategory: (catId: string) => Promise<void>;
    } | {
        registerContextToAdd: (inputContextId?: string) => Promise<string>;
        registerContextToEdit: (id: string) => Promise<string>;
        registerContextToCopy: (id: string) => Promise<string>;
        addFromContext: (contextId: string) => Promise<string>;
        saveFromContext: (id: string, contextId: string) => Promise<void>;
        evaluate: (id: string) => Promise<$D.Framework.Design.Flow.Service.Debugging.UnitTestResult>;
        delete: (id: string) => Promise<void>;
        runDebugger: (id: string, overrideWithContextId?: string, flowDebugType?: $D.Framework.Design.Flow.Service.Debugging.FlowDebugType, profileType?: ProfileType) => void;
    };
    function handleUnitTestValidation(issues: string[]): Promise<boolean>;
    function handleSampleValidation(issues: string[]): Promise<boolean>;
    function handleExampleDataValidation(issues: string[], dataType: ExampleDataType): Promise<boolean>;
    function createMappingContext(config: ServerApiConfig): MappingContext;
    function toElementType(type: MappingContextType): ElementType;
}
