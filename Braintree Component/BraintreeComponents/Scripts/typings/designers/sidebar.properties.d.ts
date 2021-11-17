declare namespace $DP.Designers {
    interface DesignerPropertiesPanelOptions {
        mappingContext?: $DP.Common.MappingContext;
        nodeChangeCallback?: () => void;
        sessionId?: string;
    }
    class DesignerPropertiesPanel implements $DP.Designers.SidebarPanel, $DP.PropertyGrid.HasPropertyGrid {
        group?: SidebarGroup;
        sessionId?: string;
        contextId: string;
        private propertyGrid;
        constructor({ mappingContext, nodeChangeCallback, sessionId }: DesignerPropertiesPanelOptions);
        get header(): string;
        refresh(contextId: string): Promise<string>;
        forceRefresh(): void;
        private updatePropertyGrid;
        submit(): Promise<void>;
        initialize(container: JQuery): void;
        resize?(width: number, height: number): void;
        onCollapsed?(): void;
        onExpanded?(): void;
        get container(): JQuery;
        get remoteContextProvider(): Common.RemoteContextProvider;
        /**
         * Fire all before-save callbacks. The list of callbacks will be cleared on success.
         */
        runBeforeSaveCallbacks: () => JQueryDeferred<boolean>;
        /**
         * Use if additional properties need to be passed in, e.g. custom handlers,
         * or Editor Links. Additional props partial will be merged with existing props.
         */
        renderWithAdditionalProps: (contextId: string, partialProps?: Partial<dpComponents.IPropertyGridProps>) => void;
    }
}
