/// <reference path="../../typings/core/generated/DataDefinitionsEditService.d.ts" />
declare namespace $DP.Editors {
    import DataDefinitionForEdit = $D.Framework.Design.Flow.Service.Edit.DataDefinitionForEdit;
    import EditInputsType = $D.Framework.Design.Properties.EditInputsType;
    interface DataDefinitionsApiConfig {
        editingContextId: string;
        path: string[];
        itemType?: string;
        mappingContext?: $DP.Common.MappingContext;
    }
    const DataDefinitionsApi: (config: DataDefinitionsApiConfig) => {
        getAll: () => Promise<DataDefinitionForEdit[]>;
        get: (index: any) => Promise<DataDefinitionForEdit>;
        addNew: () => Promise<DataDefinitionForEdit>;
        edit: (index: number, editInputs: EditInputsType) => Promise<$D.Framework.Design.Flow.Service.Edit.EditDataDefinitionContext>;
        editValue: (index: number) => Promise<string>;
        remove: (index: number) => Promise<void>;
        moveDown: (index: number) => Promise<void>;
        moveUp: (index: number) => Promise<void>;
        set: (def: DataDefinitionForEdit, itemContextId: string, index: number) => Promise<DataDefinitionForEdit>;
        setValue: (index: number, value: string) => Promise<void>;
        setValueMapping: (index: number, mappingType: string) => Promise<void>;
        submit: () => Promise<void>;
        createReduceDataContext: () => Promise<string>;
        submitReduceDataContext: (contextId: string) => Promise<void>;
        uploadSampleSet: (fileId: string) => Promise<$D.Framework.Design.Flow.Service.Debugging.Samples.SampleCategory>;
        pickSampleSet: (reportId: string) => Promise<$D.Framework.Design.Flow.Service.Debugging.Samples.SampleCategory>;
        startEditingValueMapping: (index: number) => Promise<$D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession>;
        getAllValidations: () => Promise<$D.Framework.ValidationIssue[]>;
    };
}
