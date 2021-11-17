/// <reference path="../typings/core/generated/DataDesignerService.d.ts" />
declare namespace $DP.Designers {
    import MappingContext = $D.Framework.Design.Flow.Service.MappingContext;
    interface EditDesignPatternOptions {
        designPatternId: string;
        initiatorContext?: MappingContext;
        onClose?: () => void;
    }
    function editDesignPattern({ designPatternId, initiatorContext, onClose }: EditDesignPatternOptions): Promise<void>;
    function showDataDesigner(props: Omit<dpComponents.IInputDataDesignerProps, 'startSession' | 'onClose' | 'showSaveDialog' | 'onCreateTypeClick' | 'onCreateTypeFromInputs'> & {
        onClose?: () => void;
    }): void;
    function showCreateDataTypeIntegrationDialog(): void;
    function showDataDesignerSaveDialog(title: string, message: string): Promise<"close" | "save">;
    function showCreateTypeFromInputsDialog(contextId: string): Promise<'create' | 'cancel'>;
}
