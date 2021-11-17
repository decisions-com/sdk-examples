interface ISnapshot {
    RegisterEditorAndGetSnapshotResult: $D.Framework.Design.Properties.ContextProviderNode;
}
declare namespace $DP.PropertyGrid {
    import ContextProviderNode = $D.Framework.Design.Properties.ContextProviderNode;
    import EditCompleteType = $D.Framework.Design.Properties.EditCompleteType;
    import MappingContext = $D.Framework.Design.Flow.Service.MappingContext;
    /**
     * Temporary holder for data this will receive from PropertyGridView.cshtml.
     *
     * (This notably does not inclucde the ContextProviderNode, because embedding
     * it caused the __types to be stripped out, so it just added to the payload.)
     */
    interface PropertyGridModel {
        snapshot?: ContextProviderNode;
        path?: string;
        editingContextId?: string;
        sessionId?: string;
        showOkCancelButtons?: boolean;
        instanceId?: string;
        okActionName?: string;
        cancelActionName?: string;
        tabIndex?: number;
        showLoadFromDataButton?: boolean;
        loadDataInstanceId?: string;
        mappingContext?: $D.Framework.Design.Flow.Service.MappingContext;
        onSubmit?: () => void;
        onCancel?: () => void;
        afterDispose?: () => void;
        beforeDispose?: () => Promise<boolean> | boolean;
        preserveContextId?: boolean;
        skipValidationDialog?: boolean;
        hideValidation?: boolean;
        hideSearch?: boolean;
        categoryToRender?: string;
        hideTopCategory?: boolean;
    }
    interface HasPropertyGrid {
        refresh: typeof $DP.PropertyGrid.PropertyGrid.prototype.refresh;
        submit: () => Promise<void>;
    }
    /**
     * Class for rendering the React Property Grid itself.
     */
    class PropertyGrid {
        private context;
        container: JQuery;
        private props;
        private editingContextId;
        private sessionId;
        private nodeChangedCallback;
        mappingContext: $D.Framework.Design.Flow.Service.MappingContext;
        private beforeSaveCallbacks;
        private beforeSavePromises;
        beforeSaveFunctions: dpComponents.BeforeSaveCallback[];
        private disableSaveBtn;
        private validationIssues;
        private keepContextAliveTimer;
        private editCompleted;
        model: PropertyGridModel;
        ignoreValidations: boolean;
        private abortController;
        submittingPromise: Promise<boolean>;
        setNodeChangedCallback(nodeChangedCallback: () => void): void;
        setMappingContext(mappingContext: MappingContext): void;
        getMappingContext(): MappingContext;
        setSessionId(sessionId: string): void;
        setIgnoreValidations(value: boolean): void;
        get header(): string;
        get remoteContextProvider(): Common.RemoteContextProvider;
        initialize(container: JQuery, model?: PropertyGridModel | string): Promise<void> | Promise<string>;
        private setModel;
        private setValidationIssues;
        cleanup(): Promise<void>;
        createRemoteContextProvider(contextId: string): $DP.Common.RemoteContextProvider;
        private refreshCurrentContext;
        private refreshContext;
        setEditingContextId(contextId: string): void;
        private set EditingContextId(value);
        getEditingContextId(): string;
        setFromControls(): void;
        initializeTabbing(): void;
        setTabIndex(tabIndex?: number): void;
        performTabbing(): void;
        getValidationIssues(): Promise<any[]>;
        private updateValidationIssues;
        /**
         * This method name needs to be Pascal Case for now, because code which references this via
         * PropertygridHelper.PropertyGridInstanceHolder expects it to be.
         */
        CheckForValidationIssues(): boolean;
        /**
         * Another standard callback because legacy code is expecting it
         */
        CallBeforeSave: () => Promise<unknown>;
        /**
         * Set or refresh context
         *
         * This will cancel prior incomplete requests (client side, anyway) if there are multiple fired in rapid succession.
         *
         * @param contextId defined by calling scope. (flow, etc.)
         * @param deferred provide if necessary.
         */
        refresh(contextId: string, props?: Partial<dpComponents.IPropertyGridProps>): Promise<string>;
        renderLoader(): void;
        /**
         * Show editor whose contents are defined in a custom / legacy dialog.
         *
         * This callback is triggered from React Editors.
         *
         * If the action includes alternate editingContextId, it uses that, e.g. PropertyGridEmbeddedEditor.
         */
        private showDialogueEditor;
        private renderLegacyEditor;
        /**
         * Handle simple update actions that don't require detailed user interaction,
         * such as dropping an item from a list.
         *
         * This callback is triggered from React Editors.
         */
        private quickChange;
        /**
         * Render the property grid instance with a particular set of properties.
         * @param partialProps optional partial props to pass additional data not
         * normally rendered by a standard Property Grid.
         */
        render(partialProps?: Partial<dpComponents.IPropertyGridProps>): Promise<void>;
        static dispose(editingContextId: string): void;
        static removeInstance(editingContextId: string): void;
        static getInstance(editingContextId: string): $DP.PropertyGrid.PropertyGrid;
        closeDialogSave: () => Promise<boolean>;
        get dialogElement(): JQuery;
        closePropertyGridDialog: () => void;
        closeDialog: (completeType?: EditCompleteType) => Promise<boolean>;
        processValidations(): boolean;
        editComplete: (completeType?: EditCompleteType) => Promise<boolean>;
        /**
         * Wait for things such as text fields whose debounced setValue will be triggered on blur.
         * This is called in `EditComplete` as well as `beforeSave`.
         *
         * There's no harm in waiting for this 2x, as it would be empty the second time.
         */
        awaitBeforeSavePromises: () => Promise<void>;
        /**
         * Awaitable callback, to await all the before-saved callbacks to complete.
         *
         * It also awaits `awaitBeforeSavePromises`, because `beforeSave` is called directly by some public methods,
         * and it's safer to await all those actions as well.
         */
        beforeSave: () => Promise<void>;
        /**
         * Submit the property grid values.
         * This will cause any beforeSavedCallbacks that haven't been called
         * to be fired, and cleared, and then the context to be completed with `EditCompleteType.Saved`
         */
        submit: () => Promise<boolean>;
        /**
         * Submit and dispose of current editing context id.
         * If current editing context ID is falsy, this is a NOOP for safety.
         */
        submitAndDispose(renderLoader?: boolean): Promise<boolean>;
        cancel(): Promise<boolean>;
        cancelAndDispose(): Promise<void>;
        dispose(): Promise<void>;
        PerformTabbing(): void;
        closeDialogCancel: () => Promise<boolean>;
        onLoadData: () => void;
        /**
         * @returns node count for current snapshot, or 0
         */
        getNodeCount(): number;
        private getControlButtonProps;
        private addBeforeSaveCallback;
        private addBeforeSavePromise;
        private removeBeforeSavePromise;
    }
    /**
     * Static Factory for rendering a property grid into a container.
     * @param element wrapper element, in which to render the Property Grid
     * which also has an 'editor-id' attribute containing the Editing Context ID
     */
    function createGridFromModel(element: JQuery | HTMLElement, model: PropertyGridModel): PropertyGrid;
    /**
     * Render a grid from string IDs. Useful if you have access to the wrapper ID,
     * and the context ID, but the wrapper does not contain the editor-id attribute
     * @param elementId id of element to target
     * @param contextId editing context id
     */
    function createGridFromIds(elementId: string, contextId: string): PropertyGrid;
}
