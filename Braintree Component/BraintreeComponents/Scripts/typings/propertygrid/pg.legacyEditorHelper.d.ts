declare namespace $DP.PropertyGrid.Util {
    import ContextProviderNode = $D.Framework.Design.Properties.ContextProviderNode;
    interface LegacyEditorOptions {
        node: ContextProviderNode;
        path: string[];
        target: HTMLElement;
        instanceId: string;
        tabIndex: number;
        editingContextId: string;
        mappingContext: $DP.Common.MappingContext;
        options?: any;
        getCleanup: (onCleanup: () => void) => void;
        afterInit: () => void;
    }
    function renderLegacyEditor(options: LegacyEditorOptions): void;
}
