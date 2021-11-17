/**
 * Author:oleg@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../../typings/core/generated/ContextProviderService.d.ts" />
declare namespace $DP.Common {
    interface ContextEditorOptions {
        holder: JQuery;
        extraOptions?: Partial<$DP.PropertyGrid.PropertyGridModel>;
        mappingContext?: $DP.Common.MappingContext;
        contextProvider: () => Promise<string>;
        /** `true` if editor should not show validation dialog when closing */
        skipValidationDialog?: boolean;
        onCancel?: () => void;
        onSubmit?: () => void;
        onInit?: (editingContextId: string) => void;
    }
    class ContextEditor {
        private options;
        private _contextId;
        private propertyGrid;
        constructor(options: ContextEditorOptions);
        get contextId(): string;
        get holder(): JQuery;
        static show(options: ContextEditorOptions): ContextEditor;
        initialize(): Promise<void>;
        validateAndSave(): Promise<boolean>;
        beforeSave(): Promise<void>;
        cancel(): Promise<void>;
        getValidationIssues(): Promise<string[]>;
        refresh(contextProvider?: () => Promise<string>): Promise<void>;
    }
    function showLayerWithContext(options: {
        host: JQuery;
        getContext: Promise<string>;
        stickTo: JQuery;
        getMappingContext?: () => $DP.Common.MappingContext;
        onClose?: () => void;
        layerClassName?: string;
    }): void;
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
